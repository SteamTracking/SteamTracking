/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./rolldown-runtime.js";
import {
  $ as n,
  A as r,
  At as i,
  B as a,
  C as o,
  D as s,
  E as c,
  Ft as l,
  G as u,
  J as d,
  K as f,
  L as p,
  Ot as m,
  Pt as h,
  Q as g,
  R as _,
  W as v,
  X as y,
  Y as ee,
  Z as b,
  at as x,
  dt as S,
  et as te,
  ft as ne,
  ht as re,
  j as ie,
  jt as ae,
  k as oe,
  lt as se,
  mt as ce,
  nt as le,
  ot as ue,
  q as de,
  rt as fe,
  st as pe,
  tt as me,
  ut as he,
  w as ge,
} from "./libraries.js";
import { r as _e } from "./playerlinkdetailsdataloader.js";
import {
  E as ve,
  S as ye,
  T as be,
  b as xe,
  h as Se,
  x as Ce,
} from "./clanstore.js";
import { t as we } from "./throbber.js";
import { n as Te } from "./basebuttons.js";
import { _ as Ee, ut as De } from "./emoticonbutton.js";
import { i as Oe, n as ke, t as Ae } from "./storeassets.js";
import { t as je } from "./ajaxhooks.js";
import { t as Me } from "./tabbar.js";
import "./expandonappear.js";
import {
  a as Ne,
  d as Pe,
  f as Fe,
  l as Ie,
  u as Le,
} from "./eventdevfeaturestore.js";
import { a as Re } from "./rewarditemdisplay.js";
import { n as ze, t as Be } from "./storeitemlink.js";
import { n as Ve, r as He } from "./currencyformat.js";
import { t as Ue } from "./visibilitytracker.js";
import { n as We } from "./personautils.js";
import "./appinfostore.js";
import {
  $m as C,
  $p as Ge,
  $r as Ke,
  Ah as w,
  Al as qe,
  Am as Je,
  Ap as Ye,
  As as Xe,
  Bd as Ze,
  Bf as Qe,
  Cf as $e,
  Ch as et,
  Cl as tt,
  Cp as nt,
  Cu as rt,
  Dc as it,
  Dd as at,
  Dh as T,
  Dm as ot,
  Dp as st,
  Dt as ct,
  Ef as E,
  Eh as D,
  El as lt,
  Fc as ut,
  Fd as dt,
  Gd as ft,
  Hc as pt,
  Hd as mt,
  Hm as ht,
  Ht as gt,
  Hu as _t,
  If as vt,
  Ip as yt,
  Jf as O,
  Ji as bt,
  Jm as xt,
  Jo as St,
  Jr as Ct,
  Kd as wt,
  Km as Tt,
  Ko as Et,
  Ks as Dt,
  Lm as Ot,
  Lo as kt,
  Ls as At,
  Mh as k,
  Ml as jt,
  Mm as Mt,
  Mp as Nt,
  Mu as Pt,
  Nf as Ft,
  Nh as It,
  Np as Lt,
  Ns as Rt,
  Oh as A,
  Ol as zt,
  Om as Bt,
  Op as Vt,
  Ot as Ht,
  Pd as Ut,
  Ph as j,
  Pp as Wt,
  Pu as Gt,
  Qd as Kt,
  Qm as qt,
  Qr as Jt,
  Qs as Yt,
  Rd as Xt,
  Ri as Zt,
  Rp as Qt,
  Rs as $t,
  Sf as en,
  Sl as tn,
  Sm as M,
  Sp as nn,
  St as rn,
  Su as an,
  Th as N,
  Tl as on,
  Tm as sn,
  Tp as P,
  Ts as cn,
  Tt as ln,
  Ud as un,
  Uf as dn,
  Uh as F,
  Ui as fn,
  Um as pn,
  Us as mn,
  Uu as I,
  Wd as hn,
  Wo as gn,
  Wu as _n,
  Xh as vn,
  Xp as yn,
  Yh as bn,
  Yo as xn,
  Yp as Sn,
  Zd as L,
  Zf as Cn,
  Zo as wn,
  Zp as Tn,
  Zr as En,
  _f as R,
  _p as Dn,
  _u as On,
  ai as kn,
  al as An,
  am as jn,
  bm as Mn,
  bs as Nn,
  ca as Pn,
  cd as Fn,
  cm as In,
  cp as Ln,
  cu as Rn,
  df as zn,
  dm as z,
  dp as Bn,
  du as Vn,
  em as B,
  fm as Hn,
  fu as Un,
  gp as Wn,
  gs as Gn,
  gt as Kn,
  gu as qn,
  hc as Jn,
  hm as Yn,
  hp as Xn,
  hs as Zn,
  ht as Qn,
  ip as $n,
  jh as V,
  jl as er,
  jm as tr,
  jp as nr,
  kh as H,
  kl as rr,
  km as ir,
  kp as ar,
  ld as or,
  li as sr,
  lp as cr,
  lu as lr,
  mh as ur,
  mn as dr,
  ms as fr,
  oh as pr,
  oi as mr,
  om as hr,
  op as gr,
  pf as _r,
  qf as vr,
  qi as yr,
  qm as br,
  qp as xr,
  rm as U,
  sd as Sr,
  sh as Cr,
  si as wr,
  sm as Tr,
  td as Er,
  tf as Dr,
  tm as Or,
  ts as kr,
  tu as Ar,
  ud as jr,
  ui as Mr,
  ul as Nr,
  uu as Pr,
  vf as Fr,
  vt as Ir,
  wf as Lr,
  wh as Rr,
  wl as zr,
  wp as Br,
  wu as Vr,
  xp as Hr,
  xu as W,
  yt as Ur,
  zc as Wr,
  zu as Gr,
} from "./main.js";
var G = e(l(), 1),
  K = e(h(), 1);
function Kr() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
function qr(e) {
  return !!e;
}
function Jr(e) {
  return e
    ? e === `game` ||
        e === `dlc` ||
        e === `software` ||
        e === `music` ||
        e === `application` ||
        e === `demo` ||
        e === `hardware` ||
        e === `mod` ||
        e == `video` ||
        e === `beta` ||
        e === `advertising`
    : !1;
}
function Yr(e) {
  return e == null
    ? !1
    : e == 0 ||
        e == 4 ||
        e == 6 ||
        e == 11 ||
        e == 1 ||
        e == 10 ||
        e == 2 ||
        e == 7 ||
        e == 12 ||
        e == 14;
}
function Xr(e, t) {
  return e.filter((e) => !t.includes(e));
}
function Zr(e, t, n) {
  let r = e.slice(0);
  return ((r[t] = n), r);
}
var Qr = class extends re {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e, t, n) {
      (super(),
        (this.#e = e),
        (this.#r = n),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(t));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((e) => {
          e.subscribe((t) => {
            this.#d(e, t);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((e) => {
          e.destroy();
        }));
    }
    setQueries(e, t, n) {
      ((this.#n = e),
        (this.#r = t),
        ne.batch(() => {
          let e = this.#i,
            t = this.#u(this.#n);
          t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions, n));
          let r = t.map((e) => e.observer),
            i = r.map((e) => e.getCurrentResult()),
            a = r.some((t, n) => t !== e[n]);
          (e.length !== r.length || a) &&
            ((this.#i = r),
            (this.#t = i),
            this.hasListeners() &&
              (Xr(e, r).forEach((e) => {
                e.destroy();
              }),
              Xr(r, e).forEach((e) => {
                e.subscribe((t) => {
                  this.#d(e, t);
                });
              }),
              this.#f()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((e) => e.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(e, t) {
      let n = this.#u(e).map((e) =>
        e.observer.getOptimisticResult(e.defaultedQueryOptions),
      );
      return [n, (e) => this.#l(e ?? n, t), () => this.#c(n, e)];
    }
    #c(e, t) {
      let n = this.#u(t);
      return n.map((t, r) => {
        let i = e[r];
        return t.defaultedQueryOptions.notifyOnChangeProps
          ? i
          : t.observer.trackResult(i, (e) => {
              n.forEach((t) => {
                t.observer.trackProp(e);
              });
            });
      });
    }
    #l(e, t) {
      return t
        ? ((this.#a && this.#t === this.#s && t === this.#o) ||
            ((this.#o = t), (this.#s = this.#t), (this.#a = ce(this.#a, t(e)))),
          this.#a)
        : e;
    }
    #u(e) {
      let t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
        n = [];
      return (
        e.forEach((e) => {
          let r = this.#e.defaultQueryOptions(e),
            i = t.get(r.queryHash);
          i
            ? n.push({ defaultedQueryOptions: r, observer: i })
            : n.push({
                defaultedQueryOptions: r,
                observer: new pe(this.#e, r),
              });
        }),
        n
      );
    }
    #d(e, t) {
      let n = this.#i.indexOf(e);
      n !== -1 && ((this.#t = Zr(this.#t, n, t)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        ne.batch(() => {
          this.listeners.forEach((e) => {
            e(this.#t);
          });
        });
    }
  },
  $r = class extends pe {
    constructor(e, t) {
      super(e, t);
    }
    bindMethods() {
      (super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
    }
    setOptions(e, t) {
      super.setOptions({ ...e, behavior: S() }, t);
    }
    getOptimisticResult(e) {
      return ((e.behavior = S()), super.getOptimisticResult(e));
    }
    fetchNextPage(e) {
      return this.fetch({
        ...e,
        meta: { fetchMore: { direction: `forward` } },
      });
    }
    fetchPreviousPage(e) {
      return this.fetch({
        ...e,
        meta: { fetchMore: { direction: `backward` } },
      });
    }
    createResult(e, t) {
      let { state: n } = e,
        r = super.createResult(e, t),
        { isFetching: i, isRefetching: a, isError: o, isRefetchError: s } = r,
        c = n.fetchMeta?.fetchMore?.direction,
        l = o && c === `forward`,
        u = i && c === `forward`,
        d = o && c === `backward`,
        f = i && c === `backward`;
      return {
        ...r,
        fetchNextPage: this.fetchNextPage,
        fetchPreviousPage: this.fetchPreviousPage,
        hasNextPage: se(t, n.data),
        hasPreviousPage: he(t, n.data),
        isFetchNextPageError: l,
        isFetchingNextPage: u,
        isFetchPreviousPageError: d,
        isFetchingPreviousPage: f,
        isRefetchError: s && !l && !d,
        isRefetching: a && !u && !f,
      };
    }
  };
function ei({ queries: e, ...t }, r) {
  let i = x(r),
    a = fe(),
    o = le(),
    s = K.useMemo(
      () =>
        e.map((e) => {
          let t = i.defaultQueryOptions(e);
          return ((t._optimisticResults = a ? `isRestoring` : `optimistic`), t);
        }),
      [e, i, a],
    );
  (s.forEach((e) => {
    (d(e), g(e, o));
  }),
    te(o));
  let [c] = K.useState(() => new Qr(i, s, t)),
    [l, u, f] = c.getOptimisticResult(s, t.combine);
  (K.useSyncExternalStore(
    K.useCallback((e) => (a ? me : c.subscribe(ne.batchCalls(e))), [c, a]),
    () => c.getCurrentResult(),
    () => c.getCurrentResult(),
  ),
    K.useEffect(() => {
      c.setQueries(s, t, { listeners: !1 });
    }, [s, t, c]));
  let p = l.some((e, t) => y(s[t], e))
    ? l.flatMap((e, t) => {
        let n = s[t];
        if (n) {
          let t = new pe(i, n);
          if (y(n, e)) return ee(n, t, o);
          b(e, a) && ee(n, t, o);
        }
        return [];
      })
    : [];
  if (p.length > 0) throw Promise.all(p);
  let m = l.find((e, t) => {
    let r = s[t];
    return (
      r &&
      n({
        result: e,
        errorResetBoundary: o,
        throwOnError: r.throwOnError,
        query: i.getQueryCache().get(r.queryHash),
      })
    );
  });
  if (m?.error) throw m.error;
  return u(f());
}
function ti(e, t) {
  return de(e, $r, t);
}
var ni = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activation_code || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            activation_code: { n: 1, br: A.readString, bw: k.writeString },
            purchase_platform: { n: 2, br: A.readInt32, bw: k.writeInt32 },
            is_request_from_client: { n: 3, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Request`;
    }
  },
  ri = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transactionid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            transactionid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            packageid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            purchase_status: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            result_detail: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            transaction_time: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            payment_method: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            base_price: {
              n: 7,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            tax: { n: 9, br: A.readUint64String, bw: k.writeUint64String },
            shipping: {
              n: 10,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            currency_code: { n: 11, br: A.readUint32, bw: k.writeUint32 },
            country_code: { n: 12, br: A.readString, bw: k.writeString },
            error_headline: { n: 13, br: A.readString, bw: k.writeString },
            error_string: { n: 14, br: A.readString, bw: k.writeString },
            error_link_text: { n: 15, br: A.readString, bw: k.writeString },
            error_link_url: { n: 16, br: A.readString, bw: k.writeString },
            error_appid: { n: 17, br: A.readUint32, bw: k.writeUint32 },
            line_items: { n: 18, c: ii, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  ii = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            line_item_description: {
              n: 3,
              br: A.readString,
              bw: k.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  ai = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchase_result_details || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchase_result_details: {
              n: 1,
              br: A.readInt32,
              bw: k.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: ri },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Response`;
    }
  },
  oi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 2, br: A.readString, bw: k.writeString },
            country_code: { n: 3, br: A.readString, bw: k.writeString },
            favor_rarer_tags: { n: 4, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  si = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: ci, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  ci = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            name: { n: 2, br: A.readString, bw: k.writeString },
            weight: { n: 3, br: A.readFloat, bw: k.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
    }
  },
  li = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: A.readString, bw: k.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  ui = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: di, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  di = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            name: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  fi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: A.readString, bw: k.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  pi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: mi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  mi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            english_name: { n: 2, br: A.readString, bw: k.writeString },
            name: { n: 3, br: A.readString, bw: k.writeString },
            normalized_name: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
    }
  },
  hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: A.readString, bw: k.writeString },
            have_version_hash: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Request`;
    }
  },
  gi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version_hash || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version_hash: { n: 1, br: A.readString, bw: k.writeString },
            tags: { n: 2, c: _i, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response`;
    }
  },
  _i = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            name: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.os_win || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            os_win: { n: 4, br: A.readBool, bw: k.writeBool },
            os_mac: { n: 5, br: A.readBool, bw: k.writeBool },
            os_linux: { n: 6, br: A.readBool, bw: k.writeBool },
            full_controller_support: { n: 7, br: A.readBool, bw: k.writeBool },
            native_steam_controller: { n: 8, br: A.readBool, bw: k.writeBool },
            include_coming_soon: { n: 9, br: A.readBool, bw: k.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: A.readBool, bw: k.writeBool },
            exclude_videos: { n: 12, br: A.readBool, bw: k.writeBool },
            exclude_software: { n: 13, br: A.readBool, bw: k.writeBool },
            exclude_dlc: { n: 14, br: A.readBool, bw: k.writeBool },
            exclude_soundtracks: { n: 15, br: A.readBool, bw: k.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: A.readEnum, bw: k.writeEnum },
            country_code: { n: 2, br: A.readString, bw: k.writeString },
            rebuild_queue: { n: 3, br: A.readBool, bw: k.writeBool },
            settings_changed: { n: 4, br: A.readBool, bw: k.writeBool },
            settings: { n: 5, c: vi },
            rebuild_queue_if_stale: { n: 6, br: A.readBool, bw: k.writeBool },
            ignore_user_preferences: { n: 8, br: A.readBool, bw: k.writeBool },
            no_experimental_results: { n: 9, br: A.readBool, bw: k.writeBool },
            experimental_cohort: { n: 10, br: A.readUint32, bw: k.writeUint32 },
            debug_get_solr_query: { n: 11, br: A.readBool, bw: k.writeBool },
            store_page_filter: { n: 12, c: Mt },
            context: { n: 13, c: ot },
            data_request: { n: 14, c: Bt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            country_code: { n: 2, br: A.readString, bw: k.writeString },
            settings: { n: 3, c: vi },
            skipped: { n: 4, br: A.readInt32, bw: k.writeInt32 },
            exhausted: { n: 5, br: A.readBool, bw: k.writeBool },
            experimental_cohort: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            debug_solr_query: { n: 7, br: A.readString, bw: k.writeString },
            store_items: { n: 8, c: Je, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: A.readEnum, bw: k.writeEnum },
            store_page_filter: { n: 2, c: Mt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
  Si = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: A.readString, bw: k.writeString },
            settings: { n: 2, c: vi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  Ci = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: A.readEnum, bw: k.writeEnum },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            store_page_filter: { n: 3, c: Mt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Request`;
    }
  },
  wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Response`;
    }
  },
  Ti = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            store_appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            beta_appid: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  Ei = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned: { n: 1, br: A.readBool, bw: k.writeBool },
            wishlist: { n: 2, br: A.readBool, bw: k.writeBool },
            ignored: { n: 3, br: A.readBool, bw: k.writeBool },
            following: { n: 4, br: A.readBool, bw: k.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: A.readEnum,
              pbr: A.readPackedEnum,
              bw: k.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: A.readEnum,
              pbr: A.readPackedEnum,
              bw: k.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: A.readBool, bw: k.writeBool },
            queues: { n: 10, c: Di, r: !0, q: !0 },
            ignored_reason: { n: 11, br: A.readInt32, bw: k.writeInt32 },
            beta_status: { n: 12, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  Di = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: A.readEnum, bw: k.writeEnum },
            skipped: { n: 2, br: A.readBool, bw: k.writeBool },
            items_remaining: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            next_appid: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            experimental_cohort: { n: 5, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response_InQueue`;
    }
  },
  Oi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  ki = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Response`;
    }
  },
  Ai = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  ji = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.followed_game_count || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            followed_game_count: { n: 1, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Response`;
    }
  },
  Mi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            report_type: { n: 2, br: A.readEnum, bw: k.writeEnum },
            report: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Request`;
    }
  },
  Ni = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Response`;
    }
  },
  Pi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.primary_language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            primary_language: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            secondary_languages: {
              n: 2,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            platform_windows: { n: 3, br: A.readBool, bw: k.writeBool },
            platform_mac: { n: 4, br: A.readBool, bw: k.writeBool },
            platform_linux: { n: 5, br: A.readBool, bw: k.writeBool },
            timestamp_updated: { n: 8, br: A.readUint32, bw: k.writeUint32 },
            hide_store_broadcast: { n: 9, br: A.readBool, bw: k.writeBool },
            review_score_preference: { n: 10, br: A.readEnum, bw: k.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: A.readInt32,
              bw: k.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: A.readEnum, bw: k.writeEnum },
            additional_languages: {
              n: 13,
              br: A.readString,
              bw: k.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: A.readEnum,
              bw: k.writeEnum,
            },
            disable_microtrailers: { n: 15, br: A.readBool, bw: k.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: A.readBool,
              bw: k.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  Fi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags_to_exclude || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags_to_exclude: { n: 1, c: Ii, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  Ii = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            name: { n: 2, br: A.readString, bw: k.writeString },
            timestamp_added: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences_Tag`;
    }
  },
  Li = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  Ri = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Pi },
            tag_preferences: { n: 2, c: Fi },
            content_descriptor_preferences: { n: 3, c: Rr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_apps || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_apps: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            num_top_friends: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  Bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trending_apps || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { trending_apps: { n: 1, c: Vi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  Vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint64String,
              pbr: A.readPackedUint64String,
              bw: k.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  Hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packages_to_reserve || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packages_to_reserve: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            country_code: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  Ui = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reservation_status || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reservation_status: { n: 1, c: et, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  Wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            product_identifier: { n: 2, br: A.readString, bw: k.writeString },
            start_queue_position: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            localization_token: { n: 5, br: A.readString, bw: k.writeString },
            accountid: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            rtime_created: { n: 7, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  Gi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: Wi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Request`;
    }
  },
  Ki = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Response`;
    }
  },
  qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            product_identifier: { n: 2, br: A.readString, bw: k.writeString },
            start_queue_position: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Request`;
    }
  },
  Ji = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Response`;
    }
  },
  Yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Request`;
    }
  },
  Xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: Wi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Response`;
    }
  },
  Zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReloadAllReservationPositionMessages_Notification`;
    }
  },
  Qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            browserid: {
              n: 2,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            backfill_source: { n: 3, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_MigratePartnerLinkTracking_Notification`;
    }
  },
  $i = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            feedback: { n: 2, br: A.readEnum, bw: k.writeEnum },
            feedback_details: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Request`;
    }
  },
  ea = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Response`;
    }
  },
  ta = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  na = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.prompt || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            prompt: { n: 1, br: A.readBool, bw: k.writeBool },
            feedback_eligible: { n: 2, br: A.readBool, bw: k.writeBool },
            existing_feedback: { n: 3, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
    }
  },
  ra = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            demo_appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            allow_late_firing: { n: 3, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  ia = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_fire || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_fire: { n: 1, d: !1, br: A.readBool, bw: k.writeBool },
            time_staged: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            demo_release_date: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Response`;
    }
  },
  aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            demo_appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            allow_late_firing: { n: 3, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
    }
  },
  oa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Response`;
    }
  },
  sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            queue_type: { n: 2, br: A.readEnum, bw: k.writeEnum },
            store_page_filter: { n: 3, c: Mt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  la = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Pi },
            tag_preferences: { n: 2, c: Fi },
            content_descriptor_preferences: { n: 3, c: Rr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  ua = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            steamid: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_remaining || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_remaining: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            status: { n: 2, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  fa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_ids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint64String,
              pbr: A.readPackedUint64String,
              bw: k.writeRepeatedUint64String,
            },
            status: { n: 2, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_updated || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_updated: { n: 1, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  ha = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: ga, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  ga = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            status: { n: 4, br: A.readEnum, bw: k.writeEnum },
            time_created: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            app_name: { n: 6, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  _a = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.limit || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            limit: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            time_before: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  va = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: ya, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            steamid_invited: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            time_created: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            app_name: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response_Invite`;
    }
  },
  ba = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  xa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Sa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  Sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            status: { n: 2, br: A.readEnum, bw: k.writeEnum },
            invites_remaining: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            time_joined: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            packageid: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            invites_sent: { n: 6, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
    }
  },
  Ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  wa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ineligible_friends || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ineligible_friends: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  Ta;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Store.RegisterCDKey#1`, C(ni, t, n), ai, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = t;
  function n(e, t, n) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, C(oi, t, n), si, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRecommendedTagsForUser = n;
  function r(e, t, n) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, C(li, t, n), ui, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = r;
  function i(e, t, n) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, C(fi, t, n), pi, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = i;
  function a(e, t, n) {
    return e.SendMsg(`Store.GetTagList#1`, C(hi, t, n), gi, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetTagList = a;
  function o(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, C(yi, t, n), bi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueue = o;
  function s(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, C(xi, t, n), Si, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = s;
  function c(e, t, n) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, C(Ci, t, n), wi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.SkipDiscoveryQueueItem = c;
  function l(e, t, n) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, C(Ti, t, n), Ei, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = l;
  function u(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, C(Oi, t, n), ki, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowed = u;
  function d(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, C(Ai, t, n), ji, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowedCount = d;
  function f(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, C(sa, t, n), ca, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = f;
  function p(e, t, n) {
    return e.SendMsg(`Store.ReportApp#1`, C(Mi, t, n), Ni, { ePrivilege: 3 });
  }
  e.ReportApp = p;
  function m(e, t, n) {
    return e.SendMsg(`Store.GetStorePreferences#1`, C(Li, t, n), Ri, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetStorePreferences = m;
  function h(e, t, n) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, C(zi, t, n), Bi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = h;
  function g(e, t) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, C(Qi, t), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = g;
  function _(e, t, n) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, C(Hi, t, n), Ui, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.UpdatePackageReservations = _;
  function v(e, t, n) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, C(ra, t, n), ia, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = v;
  function y(e, t, n) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, C(aa, t, n), oa, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = y;
  function ee(e, t, n) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, C(Gi, t, n), Ki, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = ee;
  function b(e, t, n) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      C(qi, t, n),
      Ji,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = b;
  function x(e, t, n) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      C(Yi, t, n),
      Xi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = x;
  function S(e, t) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      C(Zi, t),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = S;
  function te(e, t, n) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, C($i, t, n), ea, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      C(ta, t, n),
      na,
      { ePrivilege: 1 },
    );
  }
  e.ShouldPromptForCompatibilityFeedback = ne;
})((Ta ||= {}));
var Ea;
(function (e) {
  e.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: la,
  };
})((Ea ||= {}));
var Da;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Playtest.RequestInvite#1`, C(ua, t, n), da, {
      ePrivilege: 1,
    });
  }
  e.RequestInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, C(fa, t, n), pa, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateInvites = n;
  function r(e, t, n) {
    return e.SendMsg(`Playtest.GetInvites#1`, C(ma, t, n), ha, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, C(_a, t, n), va, {
      ePrivilege: 1,
    });
  }
  e.GetInviteHistory = i;
  function a(e, t, n) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, C(ba, t, n), xa, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, C(Ca, t, n), wa, {
      ePrivilege: 1,
    });
  }
  e.GetInviteOptions = o;
})((Da ||= {}));
function Oa() {
  let e = xr(),
    t = U.accountid,
    n = U.country_code;
  return f(ka(e, t, n));
}
function ka(e, t, n) {
  return {
    queryKey: Pa(t),
    queryFn: async () => {
      if (!t) return Na();
      let r = qt.Init(Li);
      r.Body().set_country_code(n);
      let i = await Ta.GetStorePreferences(e, r);
      if (!i.BSuccess())
        throw `Error loading store preferences: ${i.GetErrorMessage()}`;
      return i.Body().toObject();
    },
    staleTime: 36e5,
  };
}
function Aa() {
  let e = xr(),
    t = U.accountid,
    n = U.country_code;
  return f({ ...ka(e, t, n), select: (e) => Ma(e, br(B.LANGUAGE)) });
}
var ja = [4, 3];
function Ma(e, t) {
  let n = [t];
  if (
    e &&
    e.preferences &&
    e.preferences.primary_language !== void 0 &&
    e.preferences.primary_language !== -1
  ) {
    let { primary_language: r, secondary_languages: i } = e.preferences;
    if ((r !== t && n.push(r), i)) {
      let e = BigInt(i);
      for (let i = 0; i < 32; i++)
        (e >> BigInt(i)) & BigInt(1) && i != t && i != r && n.push(i);
    }
  }
  return n;
}
function Na() {
  return {
    preferences: { primary_language: br(B.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: ja.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function Pa(e) {
  return [`StorePreferencesQueryKey`, e ?? 0];
}
var Fa = `unUserdataVersion`;
function Ia() {
  return Number.parseInt(window.localStorage.getItem(Fa) || `0`);
}
function La(e, t, n) {
  let r = Ia(),
    i = `${e}dynamicstore/userdata/?id=${t}&cc=${n}&origin=${self.origin}`;
  return (r && (i += `&v=${r}`), i);
}
function Ra() {
  window.localStorage.setItem(
    Fa,
    (Number.parseInt(window.localStorage.getItem(Fa) || `0`) + 1).toString(),
  );
}
var q = ue();
async function za(e, t) {
  let n = La(z.STORE_BASE_URL, t, Hn.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function Ba(e, t, n) {
  return (await za(e, t)).includes(n);
}
function Va() {
  let e = xr(),
    t = U.accountid;
  return f(Ha(e, t));
}
function Ha(e, t) {
  return {
    queryKey: Ka(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await za(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Ua(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await Ba(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function Wa(e) {
  let t = xr(),
    n = U.accountid,
    { data: r } = f(Ua(t, n, e));
  return r === void 0 ? void 0 : r;
}
function Ga(e) {
  let t = x(),
    n = U.accountid;
  return K.useCallback(
    (r) => {
      t.setQueryData(Ka(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function Ka(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function qa(e) {
  let { data: t } = P(e && `appid` in e ? void 0 : e),
    { data: n } = Va(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var Ja = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            listid: { n: 2, br: A.readUint64String, bw: k.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_CuratorData`;
    }
  },
  Ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.domain || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            domain: { n: 1, br: A.readString, bw: k.writeString },
            controller: { n: 2, br: A.readString, bw: k.writeString },
            method: { n: 3, br: A.readString, bw: k.writeString },
            submethod: { n: 4, br: A.readString, bw: k.writeString },
            feature: { n: 5, br: A.readString, bw: k.writeString },
            depth: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            countrycode: { n: 7, br: A.readString, bw: k.writeString },
            webkey: { n: 8, br: A.readUint64String, bw: k.writeUint64String },
            is_client: { n: 9, br: A.readBool, bw: k.writeBool },
            curator_data: { n: 10, c: Ja },
            is_likely_bot: { n: 11, br: A.readBool, bw: k.writeBool },
            is_utm: { n: 12, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_NavData`;
    }
  },
  Xa = (function (e) {
    return (
      (e[(e.AnyController = 0)] = `AnyController`),
      (e[(e.XboxController = 1)] = `XboxController`),
      (e[(e.Ps3Controller = 2)] = `Ps3Controller`),
      (e[(e.Ps4Controller = 3)] = `Ps4Controller`),
      (e[(e.Ps5Controller = 4)] = `Ps5Controller`),
      (e[(e.SwitchController = 5)] = `SwitchController`),
      (e[(e.SteamController = 6)] = `SteamController`),
      (e[(e.SteamDeckNeptune = 7)] = `SteamDeckNeptune`),
      (e[(e.SteamDeckGalileo = 8)] = `SteamDeckGalileo`),
      (e[(e.Switch2Controller = 9)] = `Switch2Controller`),
      (e[(e.SteamControllerTriton = 10)] = `SteamControllerTriton`),
      e
    );
  })({}),
  Za = {
    any_controller: 0,
    xbox_controller: 1,
    ps3_controller: 2,
    ps4_controller: 3,
    ps5_controller: 4,
    switch_controller: 5,
    steam_controller: 6,
    steam_deck_neptune: 7,
    steam_deck_galileo: 8,
    switch2_controller: 9,
    steam_controller_triton: 10,
  };
function Qa() {
  let e = [...U.excluded_content_descriptors];
  return {
    bLoaded: !1,
    setWishlist: new Set(),
    rgWishlistInOrder: [],
    setOwnedApps: new Set(),
    setOwnedPackages: new Set(),
    setExcludedTagIDs: new Set(),
    rgExcludedTagIDsSorted: [],
    setExcludedContentDescriptors: new Set(e),
    rgExcludedContentDescriptors: e,
    setRecommendedApps: new Set(),
    rgRecommendedAppsInOrder: [],
    mapIgnoredApps: new Map(),
    mapIgnoredPackages: new Map(),
    setCuratorsFollowed: new Set(),
    rgCuratorsFollowed: [],
    setCuratorsIgnored: new Set(),
    mapRecommendingCuratorsForApp: new Map(),
    setPreferredPlatforms: new Set(),
    setHardwareUsed: new Set(),
    rgRecommendedTags: [],
    ePrimaryLanguage: -1,
    setSecondaryLanguages: new Set(),
    bShowFilteredUserReviewScores: !0,
    bAllowAppImpressions: !1,
  };
}
var $a;
function eo() {
  return ($a ??= Qa());
}
function to() {
  return !!In(`wants_mature_content`);
}
function no(e) {
  let t = Qa();
  if (
    ((t.bLoaded = !0),
    e.rgCurators &&
      ((t.rgCuratorsFollowed = Object.keys(e.rgCurators).map(Number)),
      (t.setCuratorsFollowed = new Set(t.rgCuratorsFollowed))),
    e.rgCuratorsIgnored &&
      (t.setCuratorsIgnored = new Set(e.rgCuratorsIgnored.map(Number))),
    e.rgWishlist &&
      ((t.rgWishlistInOrder = e.rgWishlist.map(Number)),
      (t.setWishlist = new Set(t.rgWishlistInOrder))),
    e.rgOwnedApps && (t.setOwnedApps = new Set(e.rgOwnedApps.map(Number))),
    e.rgOwnedPackages &&
      (t.setOwnedPackages = new Set(e.rgOwnedPackages.map(Number))),
    e.rgIgnoredApps && (t.mapIgnoredApps = ro(e.rgIgnoredApps)),
    e.rgIgnoredPackages && (t.mapIgnoredPackages = ro(e.rgIgnoredPackages)),
    e.rgExcludedTags &&
      ((t.setExcludedTagIDs = new Set(
        e.rgExcludedTags.map((e) => Number(e.tagid)),
      )),
      (t.rgExcludedTagIDsSorted = Array.from(t.setExcludedTagIDs).sort())),
    to()
      ? ((t.setExcludedContentDescriptors = new Set()),
        (t.rgExcludedContentDescriptors = []))
      : e.rgExcludedContentDescriptorIDs &&
        ((t.rgExcludedContentDescriptors = e.rgExcludedContentDescriptorIDs.map(
          (e) => Number(e),
        )),
        (t.setExcludedContentDescriptors = new Set(
          t.rgExcludedContentDescriptors,
        ))),
    e.rgRecommendedApps &&
      ((t.rgRecommendedAppsInOrder = e.rgRecommendedApps.map(Number)),
      (t.setRecommendedApps = new Set(t.rgRecommendedAppsInOrder))),
    e.rgPreferredPlatforms &&
      (t.setPreferredPlatforms = new Set(e.rgPreferredPlatforms)),
    e.bAllowAppImpressions && (t.bAllowAppImpressions = e.bAllowAppImpressions),
    (t.bShowFilteredUserReviewScores = !!e.bShowFilteredUserReviewScores),
    e.rgPrimaryLanguage !== void 0 &&
      (t.ePrimaryLanguage = e.rgPrimaryLanguage),
    e.rgSecondaryLanguages &&
      (t.setSecondaryLanguages = new Set(e.rgSecondaryLanguages)),
    e.rgRecommendedTags &&
      (t.rgRecommendedTags = e.rgRecommendedTags.map((e) => e.tagid)),
    e.rgCurations)
  )
    for (let n of Object.keys(e.rgCurations)) {
      let r = [];
      for (let t of Object.keys(e.rgCurations[n]))
        e.rgCurations[n][t] === 0 && r.push(Number(t));
      t.mapRecommendingCuratorsForApp.set(Number(n), r);
    }
  if (e.rgHardwareUsed)
    for (let n of e.rgHardwareUsed) {
      let e = Za[n];
      e !== void 0 && t.setHardwareUsed.add(e);
    }
  return t;
}
function ro(e) {
  let t = new Map();
  for (let [n, r] of Object.entries(e)) {
    let e = Number(n);
    e && t.set(e, Number(r));
  }
  return t;
}
var io = `dynamicuserdata`;
function ao(e) {
  return [io, e];
}
function oo(e) {
  return e?.[0] == io;
}
async function so(e) {
  try {
    let t = await fetch(La(B.STORE_BASE_URL, e, U.country_code), {
      credentials: `include`,
    });
    if (!t.ok) throw Error(`Server returned ${t.status}`);
    return no(await t.json());
  } catch (e) {
    return (
      console.warn(`LoadDynamicUserData`, e),
      ur().ReportError(Error(`LoadDynamicUserData ${e}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      Qa()
    );
  }
}
var co = 6e4;
function lo() {
  let e = U.accountid;
  return {
    queryKey: ao(e),
    queryFn: () => so(e),
    staleTime: (e) => (e.state.data?.bLoaded === !1 ? co : 1 / 0),
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function uo() {
  return f(lo());
}
function fo(e) {
  let t = e.getQueryData(ao(U.accountid));
  return (t && !t.bLoaded && po(e), t ?? eo());
}
function po(e) {
  let t = e.getQueryState(ao(U.accountid));
  t?.fetchStatus == `idle` &&
    Date.now() - t.dataUpdatedAt >= co &&
    e.prefetchQuery(lo());
}
async function mo(e) {
  return e.fetchQuery(lo());
}
function ho(e, t) {
  e.setQueryData(ao(U.accountid), (e) => {
    if (!e) return;
    let n = t(e);
    return n ? { ...e, ...n } : e;
  });
}
var go = 3871,
  _o = 1664,
  vo = 1684,
  yo = 1667,
  bo = 3942,
  xo = 1774,
  So = 1695,
  Co = 3839,
  wo = 1625,
  To = 1685,
  Eo = 1662,
  Do = 1663,
  Oo = 1773,
  ko = 3834,
  Ao = 3799,
  jo = 1654,
  Mo = 1698,
  No = 1721,
  Po = 1755,
  Fo = 5716,
  Io = 4175,
  Lo = 3978,
  Ro = 12472,
  zo = 10695,
  Bo = 4106,
  Vo = 4231,
  Ho = 1716,
  Uo = 1702,
  Wo = 5900,
  Go = 1741,
  Ko = 1676,
  qo = 3959,
  Jo = 4885,
  Yo = 1775,
  Xo = 1738,
  Zo = 1687,
  Qo = 4604,
  $o = 4434,
  es = 9551,
  ts = 3835,
  ns = 1645,
  rs = 1720,
  is = 4172,
  as = 1666,
  os = 4115,
  ss = 1628,
  cs = 4486,
  ls = 5395,
  us = 4328,
  ds = 5613,
  fs = 4191,
  ps = 44868,
  ms = 6730,
  hs = 6129,
  gs = 1665,
  _s = 560542,
  vs = 5154,
  ys = 17305,
  bs = 21725,
  xs = 3813,
  Ss = 31579,
  Cs = 4474,
  ws = 1254546,
  Ts = 18594,
  Es = 7038,
  Ds = 1746,
  Os = 5727,
  ks = 791774,
  As = 5652,
  js = 615955,
  Ms = 4102,
  Ns = 3877,
  Ps = 5537,
  Fs = 5379,
  Is = 10235,
  Ls = 220585,
  Rs = 87918,
  zs = 1100687,
  Bs = 26921,
  Vs = 1100688,
  Hs = 91114,
  Us = 7178,
  Ws = 723991,
  Gs = 1239876,
  Ks = 23491;
function qs(e) {
  let t = Sn(),
    n = yn();
  return f(Xs(t.GetAnonymousServiceTransport(), n, e));
}
function Js(e) {
  return `LocalizedTagNames2_${e}`;
}
function Ys(e) {
  let t = {};
  return ((e?.tags || []).forEach(({ tagid: e, name: n }) => (t[e] = n)), t);
}
function Xs(e, t, n) {
  return {
    queryKey: [`LocalizedTagNames`, n],
    queryFn: async () => {
      let r = Js(n),
        i = await t.GetObject(r),
        a = qt.Init(hi);
      (a.Body().set_language(n),
        i?.version_hash && a.Body().set_have_version_hash(i.version_hash));
      let o = await Ta.GetTagList(e, a),
        s;
      if (o.GetEResult() == 1)
        ((s = o.Body().toObject()), t && t.StoreObject(r, s));
      else if (o.GetEResult() == 29) s = i || void 0;
      else if (i)
        (console.warn(
          `Couldn't load updated tag localization, will continue with what we have from storage.`,
        ),
          (s = i));
      else throw o.GetErrorMessage();
      return Ys(s);
    },
    staleTime: 36e5,
  };
}
async function Zs(e, t, n) {
  return vr.fetchQuery(Xs(e.GetAnonymousServiceTransport(), t, n));
}
function Qs(e, t) {
  let { data: n } = qs(t);
  return n && n[e];
}
function $s(e) {
  let { data: t } = qs(e);
  return !!t;
}
function ec(e) {
  let { data: t } = P(e);
  return (0, K.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function tc(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function nc(e) {
  let { data: t } = P(e);
  return (0, K.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function rc(e) {
  return (0, K.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function ic(e) {
  return (0, K.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
function ac(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (` ` + (e.className.baseVal || e.className) + ` `).indexOf(
        ` ` + t + ` `,
      ) !== -1;
}
function oc(e, t) {
  e.classList
    ? e.classList.add(t)
    : ac(e, t) ||
      (typeof e.className == `string`
        ? (e.className = e.className + ` ` + t)
        : e.setAttribute(
            `class`,
            ((e.className && e.className.baseVal) || ``) + ` ` + t,
          ));
}
function sc(e, t) {
  return e
    .replace(RegExp(`(^|\\s)` + t + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function cc(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == `string`
      ? (e.className = sc(e.className, t))
      : e.setAttribute(
          `class`,
          sc((e.className && e.className.baseVal) || ``, t),
        );
}
var lc = e(c()),
  uc = { disabled: !1 },
  dc = K.createContext(null),
  fc = function (e) {
    return e.scrollTop;
  },
  pc = `unmounted`,
  mc = `exited`,
  hc = `entering`,
  gc = `entered`,
  _c = `exiting`,
  vc = (function (e) {
    ae(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = n,
        a = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (r.appearStatus = null),
        t.in
          ? a
            ? ((o = mc), (r.appearStatus = hc))
            : (o = gc)
          : (o = t.unmountOnExit || t.mountOnEnter ? pc : mc),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (e, t) {
      return e.in && t.status === `unmounted` ? { status: mc } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (e) {
        var t = null;
        if (e !== this.props) {
          var n = this.state.status;
          this.props.in
            ? n !== `entering` && n !== `entered` && (t = hc)
            : (n === `entering` || n === `entered`) && (t = _c);
        }
        this.updateStatus(!1, t);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var e = this.props.timeout,
          t = (n = r = e),
          n,
          r;
        return (
          e != null &&
            typeof e != `number` &&
            ((t = e.exit),
            (n = e.enter),
            (r = e.appear === void 0 ? n : e.appear)),
          { exit: t, enter: n, appear: r }
        );
      }),
      (n.updateStatus = function (e, t) {
        if ((e === void 0 && (e = !1), t !== null)) {
          if ((this.cancelNextCallback(), t === `entering`)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var n = this.props.nodeRef
                ? this.props.nodeRef.current
                : lc.default.findDOMNode(this);
              n && fc(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({ status: pc });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [lc.default.findDOMNode(this), r],
          a = i[0],
          o = i[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        (!e && !n) || uc.disabled
          ? this.safeSetState({ status: gc }, function () {
              t.props.onEntered(a);
            })
          : (this.props.onEnter(a, o),
            this.safeSetState({ status: hc }, function () {
              (t.props.onEntering(a, o),
                t.onTransitionEnd(c, function () {
                  t.safeSetState({ status: gc }, function () {
                    t.props.onEntered(a, o);
                  });
                }));
            }));
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : lc.default.findDOMNode(this);
        !t || uc.disabled
          ? this.safeSetState({ status: mc }, function () {
              e.props.onExited(r);
            })
          : (this.props.onExit(r),
            this.safeSetState({ status: _c }, function () {
              (e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: mc }, function () {
                    e.props.onExited(r);
                  });
                }));
            }));
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (e, t) {
        ((t = this.setNextCallback(t)), this.setState(e, t));
      }),
      (n.setNextCallback = function (e) {
        var t = this,
          n = !0;
        return (
          (this.nextCallback = function (r) {
            n && ((n = !1), (t.nextCallback = null), e(r));
          }),
          (this.nextCallback.cancel = function () {
            n = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (e, t) {
        this.setNextCallback(t);
        var n = this.props.nodeRef
            ? this.props.nodeRef.current
            : lc.default.findDOMNode(this),
          r = e == null && !this.props.addEndListener;
        if (!n || r) setTimeout(this.nextCallback, 0);
        else {
          if (this.props.addEndListener) {
            var i = this.props.nodeRef
                ? [this.nextCallback]
                : [n, this.nextCallback],
              a = i[0],
              o = i[1];
            this.props.addEndListener(a, o);
          }
          e != null && setTimeout(this.nextCallback, e);
        }
      }),
      (n.render = function () {
        var e = this.state.status;
        if (e === `unmounted`) return null;
        var t = this.props,
          n = t.children;
        (t.in,
          t.mountOnEnter,
          t.unmountOnExit,
          t.appear,
          t.enter,
          t.exit,
          t.timeout,
          t.addEndListener,
          t.onEnter,
          t.onEntering,
          t.onEntered,
          t.onExit,
          t.onExiting,
          t.onExited,
          t.nodeRef);
        var r = m(t, [
          `children`,
          `in`,
          `mountOnEnter`,
          `unmountOnExit`,
          `appear`,
          `enter`,
          `exit`,
          `timeout`,
          `addEndListener`,
          `onEnter`,
          `onEntering`,
          `onEntered`,
          `onExit`,
          `onExiting`,
          `onExited`,
          `nodeRef`,
        ]);
        return K.createElement(
          dc.Provider,
          { value: null },
          typeof n == `function`
            ? n(e, r)
            : K.cloneElement(K.Children.only(n), r),
        );
      }),
      t
    );
  })(K.Component);
((vc.contextType = dc), (vc.propTypes = {}));
function yc() {}
((vc.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: yc,
  onEntering: yc,
  onEntered: yc,
  onExit: yc,
  onExiting: yc,
  onExited: yc,
}),
  (vc.UNMOUNTED = pc),
  (vc.EXITED = mc),
  (vc.ENTERING = hc),
  (vc.ENTERED = gc),
  (vc.EXITING = _c));
var bc = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return oc(e, t);
      })
    );
  },
  xc = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return cc(e, t);
      })
    );
  },
  Sc = (function (e) {
    ae(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (t.onEnter = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1];
          (t.removeClasses(i, `exit`),
            t.addClass(i, a ? `appear` : `enter`, `base`),
            t.props.onEnter && t.props.onEnter(e, n));
        }),
        (t.onEntering = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.addClass(i, a, `active`),
            t.props.onEntering && t.props.onEntering(e, n));
        }),
        (t.onEntered = function (e, n) {
          var r = t.resolveArguments(e, n),
            i = r[0],
            a = r[1] ? `appear` : `enter`;
          (t.removeClasses(i, a),
            t.addClass(i, a, `done`),
            t.props.onEntered && t.props.onEntered(e, n));
        }),
        (t.onExit = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `appear`),
            t.removeClasses(n, `enter`),
            t.addClass(n, `exit`, `base`),
            t.props.onExit && t.props.onExit(e));
        }),
        (t.onExiting = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.addClass(n, `exit`, `active`),
            t.props.onExiting && t.props.onExiting(e));
        }),
        (t.onExited = function (e) {
          var n = t.resolveArguments(e)[0];
          (t.removeClasses(n, `exit`),
            t.addClass(n, `exit`, `done`),
            t.props.onExited && t.props.onExited(e));
        }),
        (t.resolveArguments = function (e, n) {
          return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n];
        }),
        (t.getClassNames = function (e) {
          var n = t.props.classNames,
            r = typeof n == `string`,
            i = r && n ? n + `-` : ``,
            a = r ? `` + i + e : n[e];
          return {
            baseClassName: a,
            activeClassName: r ? a + `-active` : n[e + `Active`],
            doneClassName: r ? a + `-done` : n[e + `Done`],
          };
        }),
        t
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (e, t, n) {
        var r = this.getClassNames(t)[n + `ClassName`],
          i = this.getClassNames(`enter`).doneClassName;
        (t === `appear` && n === `done` && i && (r += ` ` + i),
          n === `active` && e && fc(e),
          r && ((this.appliedClasses[t][n] = r), bc(e, r)));
      }),
      (n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          a = n.done;
        ((this.appliedClasses[t] = {}),
          r && xc(e, r),
          i && xc(e, i),
          a && xc(e, a));
      }),
      (n.render = function () {
        var e = this.props;
        e.classNames;
        var t = m(e, [`classNames`]);
        return K.createElement(
          vc,
          i({}, t, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(K.Component);
((Sc.defaultProps = { classNames: `` }), (Sc.propTypes = {}));
function Cc(e, t, n, r) {
  K.useEffect(() => {
    let i = (i) => {
      i.key === e && (t(i), n && i.preventDefault(), r && i.stopPropagation());
    };
    return (
      document.addEventListener(`keydown`, i),
      () => document.removeEventListener(`keydown`, i)
    );
  }, [e, t, n, r]);
}
var wc = `oliNocjo3ok-`,
  Tc = `x3qY8Eev7UU-`,
  Ec = `_3lYhLNSBOpE-`,
  Dc = `tyYNnQMYYyw-`,
  Oc = `-WD8g17w7iA-`;
function kc() {
  let [e, t] = K.useState(void 0),
    n = K.useCallback(() => t(void 0), []);
  return [
    t,
    (0, q.jsx)(At, {
      active: e !== void 0,
      children: (0, q.jsx)(Ac, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function Ac(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = K.useState(0),
    a = n?.length ?? 0,
    o = K.useCallback(() => {
      i(r == 0 ? a - 1 : r - 1);
    }, [r, a]),
    s = K.useCallback(() => {
      n && r + 1 >= a ? i(0) : i(r + 1);
    }, [r, n, a]);
  return (0, q.jsxs)(yr, {
    title: L(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: wc,
    children: [
      (0, q.jsx)(jc, {
        index: r,
        numElements: n?.length || 0,
        fnForward: s,
        fnBackwards: o,
        fnClose: t,
        bCircular: !0,
      }),
      (0, q.jsx)(`div`, {
        className: Tc,
        children: (0, q.jsx)(`img`, { className: Ec, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function jc(e) {
  let {
    index: t,
    numElements: n,
    fnForward: r,
    fnBackwards: i,
    fnClose: a,
    bCircular: o,
  } = e;
  (Cc(`ArrowLeft`, () => i?.(), !0, !0),
    Cc(`Left`, () => i?.(), !0, !0),
    Cc(`ArrowRight`, () => r?.(), !0, !0),
    Cc(`Right`, () => r?.(), !0, !0),
    Cc(`Escape`, () => a && a(), !0, !0),
    Cc(`Esc`, () => a && a(), !0, !0));
  let s = n > 1;
  return (0, q.jsxs)(`div`, {
    className: Dc,
    children: [
      s &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(`button`, {
              type: `button`,
              className: W(
                `-WD8g17w7iA-`,
                t === 0 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": L(`#Carousel_Prev`),
              children: (0, q.jsx)(ut, { angle: 270 }),
            }),
            (0, q.jsx)(`button`, {
              type: `button`,
              className: W(
                `-WD8g17w7iA-`,
                t === n - 1 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: r,
              "aria-label": L(`#Carousel_Next`),
              children: (0, q.jsx)(ut, { angle: 90 }),
            }),
          ],
        }),
      (0, q.jsx)(`button`, {
        type: `button`,
        className: Oc,
        onClick: a,
        "aria-label": L(`#Button_Close`),
        children: (0, q.jsx)(Vn, {}),
      }),
    ],
  });
}
async function Mc(e) {
  let t = { get_appids: !0, l: B.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${B.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Nc(e) {
  return f(Pc(e));
}
function Pc(e) {
  return {
    queryKey: Fc(e),
    queryFn: async () => {
      let t = await Mc(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function Fc(e) {
  return [`creatorhomebyaccount`, e];
}
function Ic(e, t) {
  if (e.vanity) {
    switch (t) {
      case `publisher`:
        return `${B.STORE_BASE_URL}publisher/${e.vanity}/`;
      case `franchise`:
        return `${B.STORE_BASE_URL}franchise/${e.vanity}/`;
    }
    return `${B.STORE_BASE_URL}developer/${e.vanity}/`;
  }
  return `${B.STORE_BASE_URL}curator/${e.creator_clan_id}/`;
}
var Lc = `{STEAM_CLAN_IMAGE}`,
  Rc = `{STEAM_CLAN_LOC_IMAGE}`;
function zc(e) {
  let t = e.toLowerCase();
  if (t.endsWith(`.jpg`) || t.endsWith(`.jpeg`)) return `image/jpeg`;
  if (t.endsWith(`.png`)) return `image/png`;
  if (t.endsWith(`.gif`)) return `image/gif`;
  if (t.endsWith(`.mp4`)) return `video/mp4`;
  if (t.endsWith(`.webm`)) return `video/webm`;
  if (t.endsWith(`.srt`)) return `text/srt`;
  if (t.endsWith(`.vtt`)) return `text/vtt`;
  if (t.endsWith(`.webp`)) return `image/webp`;
}
function Bc(e) {
  switch (e) {
    case 1:
      return `.jpg`;
    case 2:
      return `.gif`;
    case 3:
      return `.png`;
    case 5:
      return `.webm`;
    case 4:
      return `.mp4`;
    case 7:
      return `.srt`;
    case 6:
      return `.vtt`;
    case 10:
      return `.webp`;
  }
}
function Vc(e) {
  let t = Kr(),
    n = new Image();
  return (
    (n.onload = () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadImage failed to load the image, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function Hc(e) {
  let t = Kr(),
    n = document.createElement(`video`);
  return (
    (n.preload = `metadata`),
    n.addEventListener(`loadedmetadata`, () => t.resolve(n)),
    (n.onerror = (e) => {
      (console.error(`LoadVideo failed to load the video, details`, e),
        t.resolve(void 0));
    }),
    (n.src = e),
    t.promise
  );
}
function Uc(e) {
  return e.startsWith(`image/`);
}
function Wc(e) {
  return e.startsWith(`video/`);
}
async function Gc(e, t) {
  if (t) return Hc(URL.createObjectURL(e));
  {
    let t = Kr(),
      n = new FileReader();
    ((n.onload = () => t.resolve(n.result ?? void 0)),
      (n.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          n.error,
        ),
          t.resolve(void 0));
      }),
      n.readAsDataURL(e));
    let r = await t.promise;
    return r ? Vc(r.toString()) : void 0;
  }
}
function Kc(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
function qc(e, t) {
  if (!t) return e;
  let n = new Set([
    `content-length`,
    `host`,
    `origin`,
    `referer`,
    `user-agent`,
    `cookie`,
    `set-cookie`,
    `connection`,
    `upgrade`,
  ]);
  for (let r of t) n.has(r.name.toLowerCase()) || (e[r.name] = r.value);
  return e;
}
function Jc(e, t) {
  return `${e}/${t}`;
}
var Yc = K.createContext({});
function Xc() {
  return K.useContext(Yc);
}
RegExp(`${Rc.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function Zc(e, t, n = 0) {
  return $c(e, t, n, Xc());
}
async function Qc(e, t, n = 0) {
  return $c(e, t, n);
}
function $c(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return el.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = el.GetBaseURL(),
      a = e.substring(Rc.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = el.GenerateURLFromHashAndExt(o, s);
    if (r?.[Jc(o, s)] === !1) return c;
    let l = el
      .GetLocalizedClanImageFileNames(s, t)
      .map((e) => i + o + `/` + e + `?t=` + n);
    return (l.push(c), l);
  }
  return e;
}
var el = {
    GetBaseURL() {
      return `${B.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${B.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(Lc, this.GetBaseURL())), e.replace(`http://`, `https://`)
      );
    },
    ExtractHashFromBBCodeURL(e) {
      let t =
        /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^.]*)$/.exec(
          e,
        );
      return t?.groups
        ? [t.groups.filename, parseInt(t.groups.clanid)]
        : [void 0, void 0];
    },
    GetExtensionString(e) {
      return (e.file_type == null ? null : Bc(e.file_type)) ?? `.jpg`;
    },
    GetHashAndExt(e) {
      return e ? e.image_hash + this.GetExtensionString(e) : null;
    },
    GetThumbHashAndExt(e) {
      return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
    },
    GetHashFromHashAndExt(e) {
      let t = e.substring(e.lastIndexOf(`.`));
      return e.substring(0, e.length - t.length);
    },
    GetExtStringFromHashAndExt(e) {
      return e.substring(e.lastIndexOf(`.`));
    },
    GetLocalizedClanImageFileNames(e, t) {
      if (t == null) return [];
      let n = this.GetHashFromHashAndExt(e),
        r = this.GetExtStringFromHashAndExt(e),
        i = [n + `/` + ht(t) + r];
      return (t == 4 && i.push(n + `/` + Tt(ht(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = tl.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = tl.full, r, i) {
      e instanceof M && (e = e.GetAccountID());
      let a = this.GetBaseURL(),
        o = r != null && r != -1;
      if (n == tl.full && !o) return a + e + `/` + t;
      {
        let s = t.substring(t.lastIndexOf(`.`)),
          c = t.substring(0, t.length - s.length);
        return !o || r == 0 || i != `localized_image_group`
          ? a + e + `/` + c + n + s
          : a + e + `/` + c + `/` + Tt(ht(r)) + s;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, n) {
      let r =
        B.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return zc(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let r = Kr(),
        i = new Image();
      ((i.crossOrigin = `anonymous`),
        (i.onerror = (t) => {
          let i = { success: 2 };
          (n ||
            ((i.err_msg =
              `Load fail on url ` + e + ` with error: ` + vt(t).strErrorMsg),
            console.error(i.err_msg)),
            (i.success = 2),
            r.resolve(i));
        }),
        (i.onload = () => {
          let t = { success: 2 };
          ((t.width = i.width),
            (t.height = i.height),
            !(i.width > 0) || !(i.height > 0)
              ? (bn(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                r.resolve(t))
              : ((t.success = 1), r.resolve(t)));
        }),
        (i.src = e),
        t.token.promise.catch(() => {
          ((i.onload = () => {}),
            (i.onerror = () => {}),
            r.resolve({ success: 52 }));
        }));
      let a,
        o = new Promise((e, t) => {
          a = setTimeout(() => t(), 1e4);
        }),
        s;
      try {
        s = await Promise.race([o, r.promise]);
      } catch {
        s = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(a);
      }
      return s;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  tl = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  nl = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  rl = 4145017,
  il = 35143931,
  al = 39049601,
  ol = 45479024,
  sl = 41316928,
  cl = [rl, il, al, 4, sl],
  ll = e(v(), 1),
  ul = e(r()),
  dl = e(s(), 1);
function fl(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function pl(e, t) {
  return fl(e, ``, t).startsWith(`curator/`);
}
function ml(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function hl(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function gl(e, t = !1) {
  if (e)
    return t && ml(e)
      ? `${B.STORE_BASE_URL}app/${hl(e)[0]}`
      : `${B.STORE_BASE_URL}${e.store_url_path}`;
}
function _l() {
  window.location.href = `${B.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var vl = `Og4Odc3VLI8-`,
  yl = `700px`,
  bl = {
    strMaxMobileWidth: yl,
    strMaxResponsiveWidth: `910px`,
    strMaxTabletWidth: `1080px`,
  };
function xl() {
  return window.innerWidth < parseInt(yl);
}
function Sl() {
  let e = Fn();
  return (
    K.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(yl)
  );
}
var Cl = `xq-I5249Blg-`,
  wl = `_-8Ur6QivGZk-`,
  Tl = 1.3,
  El = 3,
  Dl = 256;
function Ol(e) {
  let [t, n] = (0, K.useState)(!1),
    [r, i] = (0, K.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    a = (0, K.useRef)(null),
    [o, s] = kc();
  return (
    (0, K.useEffect)(() => {
      r.naturalWidth > r.displayWidth * Tl &&
        r.naturalHeight > r.displayHeight * Tl &&
        r.naturalWidth > Dl &&
        r.naturalWidth / r.naturalHeight < El &&
        n(!0);
    }, [r]),
    t
      ? (0, q.jsxs)(`span`, {
          className: Cl,
          children: [
            s,
            (0, q.jsx)(`span`, { className: wl, children: (0, q.jsx)(Nr, {}) }),
            (0, q.jsx)(`img`, {
              ...e,
              className: W({ ...(e.className && { [e.className]: !0 }) }),
              onClick: (t) => {
                e.src && o([e.src]);
              },
            }),
          ],
        })
      : (0, q.jsx)(`img`, {
          ...e,
          ref: a,
          onLoad: (e) => {
            if (!e.currentTarget.closest(`a`) && !xl()) {
              let {
                naturalWidth: t,
                naturalHeight: n,
                width: r,
                height: a,
              } = e.currentTarget;
              i({
                naturalWidth: t,
                naturalHeight: n,
                displayWidth: r,
                displayHeight: a,
              });
            }
          },
        })
  );
}
function kl(e) {
  let {
      className: t,
      srcs: n,
      lazyLoad: r,
      width: i,
      height: a,
      alt: o,
      crossOrigin: s,
    } = e,
    [c, l] = K.useState(n.length),
    [u, d] = K.useState(0);
  K.useEffect(() => {
    c != n.length && (l(n.length), d(0));
  }, [c, n.length]);
  let f = K.useCallback(() => {
    (e.onImageError && e.onImageError(e.srcs[u]),
      u + 1 < e.srcs.length && d(u + 1));
  }, [u, e]);
  return n.length == 0
    ? null
    : (0, q.jsx)(`img`, {
        className: t,
        src: n[u],
        crossOrigin: s,
        onError: f,
        loading: r ? `lazy` : void 0,
        width: i,
        height: a,
        alt: o,
      });
}
function Al(e) {
  let [t, n] = K.useState(!1),
    {
      className: r,
      src: i,
      lazyLoad: a,
      width: o,
      height: s,
      alt: c,
      crossOrigin: l,
    } = e;
  return t
    ? (0, q.jsxs)(`div`, {
        className: vl,
        children: [
          (0, q.jsx)(`p`, { children: L(`#Image_ErrorTitle`, i) }),
          (0, q.jsx)(`ul`, {
            children: (0, q.jsx)(`li`, { children: L(`#Image_Error_msg1`) }),
          }),
          (0, q.jsx)(`p`, { children: L(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, q.jsx)(Ol, {
        className: r,
        src: i,
        onError: () => n(!0),
        crossOrigin: l,
        loading: a ? `lazy` : void 0,
        width: o,
        height: s,
        alt: c,
      });
}
var jl = `_8Wp5WbqAbJA-`,
  Ml = `K2PjXmYWvSg-`,
  Nl = `UYfcYZDtfbs-`,
  Pl = `O-TsWDon65A-`,
  Fl = `E8DrK8oV4Hs-`,
  Il = `XTfMA1ObAn4-`,
  Ll = `-Rv33oXsbT0-`,
  Rl = `MN6Xv-pm6i8-`,
  zl = `uvLRAREPa4E-`,
  Bl = `bdPmPtfuqIY-`,
  Vl = `JCVuyoKAC-k-`,
  Hl = `kjiBcsaqA8o-`,
  Ul = `UFAsjplGzxc-`,
  Wl = `vL-XYGsLedM-`,
  Gl = `aCttqIa8NC4-`,
  Kl = `-rXzhlz0w3Q-`,
  ql = `R9ivMzB3Gic-`,
  Jl = `W9-byrNtR9Q-`,
  Yl = `llT8dhJgnqw-`,
  Xl = `kxs4VtommH4-`,
  Zl = `ncKEDk26SHQ-`,
  Ql = `VGzHGCF3I5o-`,
  $l = `fNtXEMzHz58-`,
  eu = `jrHvWWIOlw4-`,
  tu = `FOKKfGVYUDk-`,
  nu = `OClIuwfiMKQ-`,
  ru = `ZLlm68-AqhM-`,
  iu = `raYV6Y-MQ7I-`,
  au = `IWFCYfhR05U-`,
  ou = `KtOQKgU1W5w-`,
  su = `jXpKqo3-cWA-`,
  cu = `_-7gyAR9oUx4-`,
  lu = `GcBGxmj4uvE-`,
  uu = `QwN0eH2k0O0-`,
  du = `sgCiKk3DUeg-`,
  fu = `N86EuolnWHc-`,
  pu = `A8oyzoRvWQ8-`,
  mu = `V7rq-SSC9xQ-`,
  hu = `pNXxwljIaD8-`,
  gu = `lsjYiHotCwA-`,
  _u = `iVV26V5rbpU-`,
  vu = `XosTQwEOBO0-`,
  yu = `ITE-CUK3U10-`,
  bu = `zMMJGDB8n-o-`,
  xu = `XPrPiD27WdE-`,
  Su = `R0sGSaFdUWo-`,
  Cu = `PON8X0ze5G8-`,
  wu = `rfhpla0PGMA-`,
  Tu = `OySWwOLLxFc-`,
  Eu = `tkR3-aHpyI4-`,
  Du = `yyrI0Nka69I-`,
  Ou = `D3fuhd6kG6I-`,
  ku = `Xk-QP-zS-18-`,
  Au = `I9cM1cZTYqc-`,
  ju = `LkW8eRLttsM-`,
  Mu = `_4KL8m0wDedE-`,
  Nu = `E3GBmOK5lMc-`,
  Pu = `lOHW8g-YyoY-`,
  Fu = `RQzfcqJK1Eg-`,
  Iu = `_0MLgqm-W-nA-`,
  Lu = `v-RxDE-Li8U-`,
  Ru = `iwrzh-mg8hE-`,
  zu = `oZCOhIQDgxo-`,
  Bu = `-G-r65tUoo0-`,
  Vu = `qVhohSfcErA-`,
  Hu = `GqNlebj1uds-`,
  Uu = `oqhyMK1Krt0-`,
  Wu = `GRw4r5TpD5s-`,
  Gu = `mspnwaz0EAg-`,
  Ku = `_06Z7Ej-J6OU-`,
  qu = `lO9B4Ti6gBk-`,
  Ju = `lkVpo86MFuI-`,
  Yu = `chTH6btujQ0-`,
  Xu = `_96v5CHkkJJY-`,
  Zu = `GxypNLhVZWE-`,
  Qu = `_-4JZsb8K2FY-`,
  $u = `BD3vXqZ-6yI-`,
  ed = `l9by-6sJDpM-`,
  td = `LCYi5cxHqgI-`,
  nd = `eASrfjoxe3o-`,
  rd = `WWolAsqP274-`,
  id = `mP8HbLoIUo0-`,
  ad = `BuCaaYRb4Cg-`,
  od = `bYNmqkeEJGc-`,
  sd = `_4xLBehMPMIU-`,
  cd = `XiCMCQH8z2U-`,
  ld = `_3wT3W-azVyE-`,
  ud = `EpyWQfQU-D4-`,
  dd = `FDvyBhD2AA0-`,
  fd = `RIck6AI1vX8-`,
  pd = `Sndyr6iqn8g-`,
  md = `qUsoY9s6daM-`,
  hd = `v7ul8g8zqHs-`,
  gd = `aN31caRmRcQ-`,
  _d = `tobj1evrU4w-`,
  vd = `NqZ9uMSo13A-`,
  yd = `RAahmG4F6sc-`;
function bd(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = iO(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, q.jsx)(gv, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let c = ``;
  switch (n) {
    case `main`:
      c = Ku;
      break;
    default:
      c = Gu;
  }
  if (o === void 0 || !s)
    return (0, q.jsx)(`div`, { className: W(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = xd(o, n === `header`);
  return (0, q.jsx)(`div`, {
    className: W(c, `CapsuleImageCtn`, i),
    children: (0, q.jsx)(kl, {
      lazyLoad: !0,
      srcs: l,
      className: W(Zu),
      alt: s.name,
    }),
  });
}
function xd(e, t) {
  let n = [];
  return (e && Cd(n, e, t), n.filter((e) => !!e));
}
function Sd(e, t) {
  return {
    strStoreVerticalURL: Ae(e, `hero_capsule`),
    strLibraryVerticalURL: Ae(e, `library_capsule`),
  };
}
function Cd(e, t, n) {
  let r = Ae(t, `header_2x`) ?? Ae(t, `header`),
    i = Ae(t, `main_capsule_2x`) ?? Ae(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var wd = `GL0tHV4bOk8-`,
  Td = `LPcYz6LIoNo-`,
  Ed = `IPcip0GPG-I-`,
  Dd = `GCeo-xmfx1A-`,
  Od = 6,
  kd = 1e3,
  Ad = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function jd(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = P(t),
    o = K.useRef(0),
    s = K.useRef(null);
  K.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    l = Cn(t),
    u = n && !l ? t : void 0,
    d = mt(u),
    f = mt(u, !0);
  if ((r && B.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (l) return (0, q.jsx)(Nd, { id: t });
  if (!d) return null;
  let p = d.filter(Md);
  if (p.length === 0)
    return f?.some(Md)
      ? (0, q.jsx)(Nd, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, q.jsx)(jd, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let m;
  switch (i) {
    case 1:
      m = Td;
      break;
    case 2:
      m = Ed;
  }
  let h = p[0];
  return (0, q.jsx)(`video`, {
    className: (0, dl.default)(wd, m),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, q.jsx)(Pd, { trailer: h }),
  });
}
function Md(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function Nd(e) {
  let { id: t } = e,
    { data: n } = nr(t),
    [r, i] = K.useState(0),
    a = K.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, Od),
      [n],
    );
  return (
    or(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, kd),
    a.length == 0
      ? null
      : (0, q.jsx)(`div`, {
          className: wd,
          children: a.map((e, t) =>
            (0, q.jsx)(
              `img`,
              {
                className: (0, dl.default)(Dd, t == r && `_8Ek7qtVBxvk-`),
                src: ke(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function Pd(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, q.jsx)(q.Fragment, {
        children: t.microtrailer?.map((e) =>
          B.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, q.jsx)(
                `source`,
                { src: Xt(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Fd(e) {
  return e?.is_coming_soon
    ? Id(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? rn(e.steam_release_date)
      : ``;
}
function Id(e, t, n) {
  switch (e) {
    case `date_full`:
      return rn(t);
    case `date_month`:
      return Qn(new Date(t * 1e3));
    case `date_quarter`:
      return Kn(new Date(t * 1e3));
    case `date_year`:
      return Ir(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || R.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || R.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function Ld(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return un(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Qn(new Date(t * 1e3))
        : rn(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? rn(t) : ``);
}
function Rd(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var zd = 7;
function Bd(e, t) {
  if (!e) return !1;
  let n = Rd(e);
  return n ? !e.is_coming_soon && n + zd * ln.PerDay > t : !1;
}
function Vd(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
var Hd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 2, c: ot },
            data_request: { n: 3, c: Bt },
            gift_info: { n: 4, c: ye },
            gidshoppingcart: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            gidreplayoftransid: {
              n: 5,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            for_init_purchase: { n: 6, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Request`;
    }
  },
  Ud = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_items || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_items: { n: 1, c: Wd, r: !0, q: !0 },
            estimated_totals: { n: 5, c: Jd },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response`;
    }
  },
  Wd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            item_id: { n: 2, c: tr },
            store_item: { n: 3, c: Je },
            gift_info: { n: 4, c: ye },
            errors: { n: 5, c: Gd },
            warnings: { n: 6, c: Kd },
            subtotal: { n: 7, c: xe },
            price_when_added: { n: 8, c: xe },
            original_price: { n: 9, c: xe },
            coupon_applied: { n: 10, c: Ce },
            coupon_discount: { n: 11, c: xe },
            can_purchase_as_gift: { n: 12, br: A.readBool, bw: k.writeBool },
            restrict_add_additional_to_cart: {
              n: 13,
              br: A.readBool,
              bw: k.writeBool,
            },
            quantity: { n: 14, br: A.readUint32, bw: k.writeUint32 },
            included_packageids: {
              n: 15,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  Gd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            unavailable_in_country: { n: 3, br: A.readBool, bw: k.writeBool },
            invalid_coupon: { n: 4, br: A.readBool, bw: k.writeBool },
            invalid_coupon_for_item: { n: 5, br: A.readBool, bw: k.writeBool },
            coupon_exclusive_promo: { n: 6, br: A.readBool, bw: k.writeBool },
            cannot_purchase_as_gift: { n: 7, br: A.readBool, bw: k.writeBool },
            invalid_item: { n: 8, br: A.readBool, bw: k.writeBool },
            too_many_in_cart: { n: 9, br: A.readBool, bw: k.writeBool },
            has_existing_billing_agreement: {
              n: 10,
              br: A.readBool,
              bw: k.writeBool,
            },
            missing_must_own_appids: {
              n: 11,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            adult_content_restricted: {
              n: 12,
              br: A.readBool,
              bw: k.writeBool,
            },
            commercial_license_restricted: {
              n: 13,
              br: A.readBool,
              bw: k.writeBool,
            },
            gift_not_valid_for_recipient_region: {
              n: 14,
              br: A.readBool,
              bw: k.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  Kd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned_appids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readInt32,
              pbr: A.readPackedInt32,
              bw: k.writeRepeatedInt32,
            },
            appids_in_mastersub: { n: 3, c: qd, r: !0, q: !0 },
            price_has_changed: { n: 4, br: A.readBool, bw: k.writeBool },
            non_refundable: { n: 5, br: A.readBool, bw: k.writeBool },
            gift_recipient_higher_price: {
              n: 6,
              br: A.readBool,
              bw: k.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  qd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            mastersub_appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  Jd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subtotal || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subtotal: { n: 1, c: xe },
            wallet_balance: { n: 2, c: xe },
            exceeding_wallet_balance: { n: 3, c: xe },
            remaining_wallet_balance: { n: 4, c: xe },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  Yd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_ids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_ids: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  Xd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ownership_info || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ownership_info: { n: 1, c: Qd, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  Zd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            already_owns: { n: 2, br: A.readBool, bw: k.writeBool },
            wishes_for: { n: 3, br: A.readBool, bw: k.writeBool },
            partial_owns_appids: {
              n: 4,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            partial_wishes_for: {
              n: 5,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  Qd = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: tr },
            friend_ownership: { n: 2, c: Zd, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  $d = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: tr } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  ef = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids_added || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageids_added: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            appids_added: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            purchase_result_detail: {
              n: 3,
              br: A.readUint32,
              bw: k.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  tf;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, C(Hd, t, n), Ud, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.ValidateCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Checkout.GetFriendOwnershipForGifting#1`,
      C(Yd, t, n),
      Xd,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, C($d, t, n), ef, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddFreeLicense = r;
})((tf ||= {}));
function nf(e) {
  let t = xr(),
    n = Ga();
  return u({
    mutationFn: () => rf(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: r, appids_added: i, purchase_result_detail: a },
      ] = e;
      i && n(i);
    },
  });
}
async function rf(e, t) {
  let n = qt.Init($d);
  n.Body().set_item_id(tr.fromObject(t));
  let r = await tf.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var af = K.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
    bSteamMachine: !1,
    bSteamFrame: !1,
  }),
  of = () => K.useContext(af);
function sf() {
  let {
    bForceShowCompatInfo: e,
    bSteamDeck: t,
    bSteamOS: n,
    bSteamMachine: r,
    bSteamFrame: i,
  } = of();
  return (n && t) || e || Or()?.FORCED_DISPLAY_MODE == `steamdeck`
    ? [!0, 1]
    : (n && r) || Or()?.FORCED_DISPLAY_MODE == `steammachine`
      ? [!0, 3]
      : n && i
        ? [!0, 4]
        : n
          ? [!0, 2]
          : [!1, 0];
}
function cf(e) {
  let { id: t, eHWCompat: n, className: r } = e,
    { data: i } = Nt(t);
  if (!i) return null;
  switch (n) {
    case 1:
      return (0, q.jsx)(lf, {
        category: i.steam_deck_compat_category,
        className: r,
      });
    case 4:
      return (0, q.jsx)(df, {
        category: i.steam_frame_compat_category,
        className: r,
      });
    case 3:
      return (0, q.jsx)(uf, {
        category: i.steam_machine_compat_category,
        className: r,
      });
    case 2:
      return (0, q.jsx)(ff, {
        category: i.steam_os_compat_category,
        className: r,
      });
    default:
      return null;
  }
}
var lf = (e) => {
    let { category: t = 0, className: n } = e,
      r = gf(t);
    return (0, q.jsxs)(`div`, {
      className: W(On, n),
      children: [(0, q.jsx)(tn, {}), (0, q.jsx)(r, { className: qn })],
    });
  },
  uf = (e) => {
    let { category: t = 0, className: n } = e,
      r = gf(t);
    return (0, q.jsxs)(`div`, {
      className: W(On, n),
      children: [(0, q.jsx)(qe, {}), (0, q.jsx)(r, { className: qn })],
    });
  },
  df = (e) => {
    let { category: t = 0, className: n } = e,
      r = gf(t);
    return (0, q.jsxs)(`div`, {
      className: W(On, n),
      children: [(0, q.jsx)(zt, {}), (0, q.jsx)(r, { className: qn })],
    });
  },
  ff = (e) => {
    let { category: t = 0, elControllerSupport: n } = e,
      r = _f(t);
    return (0, q.jsxs)(`div`, {
      className: W(On, e.className),
      children: [n, (0, q.jsx)(r, { className: qn })],
    });
  };
function pf(e) {
  let { eDisplay: t, storeItemPlatform: n, className: r } = e;
  return t == 1
    ? (0, q.jsx)(lf, {
        category: n?.steam_deck_compat_category ?? 0,
        className: r,
      })
    : t == 3
      ? (0, q.jsx)(uf, {
          category: n?.steam_machine_compat_category ?? 0,
          className: r,
        })
      : t == 2
        ? (0, q.jsx)(ff, {
            category: n?.steam_os_compat_category ?? 0,
            className: r,
          })
        : t == 4
          ? (0, q.jsx)(df, {
              category: n?.steam_frame_compat_category ?? 0,
              className: r,
            })
          : null;
}
var mf = { 1: on, 2: tt, 3: lt, 0: zr },
  hf = { 0: zr, 1: on, 2: jt };
function gf(e) {
  return mf[e] || zr;
}
function _f(e) {
  return hf[e] || zr;
}
var vf = `x33TRfA9NLE-`,
  yf = `UWpi28gEMso-`,
  bf = `K2BGbCx37Cg-`,
  xf = `wnVw5QEjvtw-`,
  Sf = `-a-3HG4gESE-`,
  Cf = `-OQDE-IeSKo-`,
  wf = `iVqIvGU08cQ-`,
  Tf = `vO3l7X14-dI-`,
  Ef = `n1QMIymiV0w-`,
  Df = `ebRw2SGSkSY-`,
  Of = `qN5ejX3iSmI-`,
  kf = `_7Xd-p6v3h-U-`,
  Af = `_6uN5TDmIPak-`,
  jf = `_4UX-whX3nGs-`,
  Mf = `f0EapRMh-PI-`,
  Nf = `q4JwMxF0b-8-`,
  Pf = `otywAXtYosA-`;
function Ff(e) {
  let { id: t, ...n } = e,
    { data: r } = Nt(t);
  return (0, q.jsx)(If, { ...n, platforms: r });
}
K.memo(function (e) {
  let { platforms: t } = e;
  if (!t) return null;
  let { windows: n, mac: r, steamos_linux: i, vr_support: a } = t;
  return (0, q.jsxs)(`span`, {
    className: Sf,
    children: [
      n && (0, q.jsx)(Lf, {}),
      r && (0, q.jsx)(Rf, {}),
      i && (0, q.jsx)(zf, {}),
      a?.vrhmd && (0, q.jsx)(Bf, {}),
    ],
  });
});
var If = K.memo(function (e) {
  let { platforms: t, eHWCompat: n, size: r = `small` } = e,
    i;
  if (n == 0)
    return (
      bn(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (n == 2) {
    let e = t?.steam_os_compat_category;
    if (e === void 0) return null;
    switch (e) {
      case 2:
        i = Qf;
        break;
      case 1:
        i = Xf;
        break;
      case 0:
        i = Zf;
        break;
      default:
        return (vn(e, `Unhandled steam os category: ${e}`), null);
    }
  } else {
    let e;
    if (
      ((e =
        n == 3
          ? t?.steam_machine_compat_category
          : n == 4
            ? t?.steam_frame_compat_category
            : t?.steam_deck_compat_category),
      e === void 0)
    )
      return null;
    switch (e) {
      case 3:
        i = Jf;
        break;
      case 2:
        i = Yf;
        break;
      case 1:
        i = Xf;
        break;
      case 0:
        i = Zf;
        break;
      default:
        return (vn(e, `Unhandled deck compat category: ${e}`), null);
    }
  }
  return (0, q.jsxs)(`span`, {
    className: (0, dl.default)(
      Df,
      r == `small` && void 0,
      r == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      n == 1 && (0, q.jsx)(Gf, {}),
      n == 3 && (0, q.jsx)(Kf, {}),
      n == 4 && (0, q.jsx)(qf, {}),
      (0, q.jsx)(i, {}),
    ],
  });
});
function Lf() {
  return (0, q.jsx)(`span`, {
    className: (0, dl.default)(Cf, wf),
    title: R.Localize(`#Platform_Windows`),
    children: (0, q.jsx)(Vf, {}),
  });
}
function Rf() {
  return (0, q.jsx)(`span`, {
    className: (0, dl.default)(Cf, Ef),
    title: R.Localize(`#Platform_Mac`),
    children: (0, q.jsx)(Hf, {}),
  });
}
function zf() {
  return (0, q.jsx)(`span`, {
    className: (0, dl.default)(Cf, Tf),
    title: R.Localize(`#Platform_Linux`),
    children: (0, q.jsx)(Uf, {}),
  });
}
function Bf() {
  return (0, q.jsx)(`span`, {
    className: Cf,
    title: R.Localize(`#Platform_VR`),
    children: (0, q.jsx)(Wf, {}),
  });
}
function Vf() {
  return (0, q.jsxs)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    className: `SVGIcon_Button SVGIcon_WindowsLogo`,
    width: `100%`,
    height: `100%`,
    viewBox: `0 0 128 128`,
    enableBackground: `new 0 0 128 128`,
    children: [
      (0, q.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, q.jsx)(`rect`, {
        x: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, q.jsx)(`rect`, {
        y: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, q.jsx)(`rect`, {
        x: `67.165`,
        y: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function Hf() {
  return (0, q.jsxs)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, q.jsx)(`path`, {
        d: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, q.jsx)(`path`, {
        d: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function Uf() {
  return (0, q.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    x: `0px`,
    y: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function Wf() {
  return (0, q.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, q.jsx)(`path`, {
        d: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, q.jsx)(`path`, {
        d: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function Gf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, dl.default)(Of),
    children: (0, q.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function Kf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, dl.default)(Of),
    children: (0, q.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, q.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, q.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M16.7002 3C16.8658 3.00006 16.9999 3.13429 17 3.2998V16.7002C16.9999 16.8658 16.8658 16.9999 16.7002 17H3.2998C3.13431 16.9999 3.0001 16.8657 3 16.7002V3.2998C3.00014 3.13435 3.13435 3.00014 3.2998 3H16.7002ZM10 5.51953C7.52551 5.51953 5.51953 7.52551 5.51953 10C5.51953 12.4745 7.52551 14.4805 10 14.4805C12.4745 14.4805 14.4805 12.4745 14.4805 10C14.4805 7.52551 12.4745 5.51953 10 5.51953Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function qf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, dl.default)(Of),
    children: (0, q.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, q.jsx)(`path`, {
          opacity: `0.84`,
          d: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, q.jsx)(`path`, {
          opacity: `0.84`,
          "fill-rule": `evenodd`,
          "clip-rule": `evenodd`,
          d: `M3 3.30201C3 3.13522 3.13522 3 3.30201 3H17V6.02012H6.02012V17H3V3.30201Z`,
          fill: `white`,
        }),
      ],
    }),
  });
}
function Jf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamDeckVerified_Category_Verified`),
    className: kf,
    children: (0, q.jsx)(`svg`, {
      className: (0, dl.default)(Af),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Yf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamDeckVerified_Category_Playable`),
    className: kf,
    children: (0, q.jsx)(`svg`, {
      className: (0, dl.default)(jf),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Xf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: kf,
    children: (0, q.jsx)(`svg`, {
      className: (0, dl.default)(Mf),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Zf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: kf,
    children: (0, q.jsx)(`svg`, {
      className: (0, dl.default)(Nf),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Qf() {
  return (0, q.jsx)(`span`, {
    title: R.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: kf,
    children: (0, q.jsx)(`svg`, {
      className: (0, dl.default)(Pf),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, q.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function $f(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !dn() && !t ? null : (0, q.jsx)(ep, { ...e });
}
function ep(e) {
  let { className: t, id: n } = e,
    [r, i] = sf(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = xf),
    (0, q.jsx)(`div`, {
      className: W(bf, o, t),
      children: (0, q.jsx)(Ff, { id: n, eHWCompat: a }),
    })
  );
}
var tp = `PFP2RDjCi0w-`,
  np = `Cbfoq6WaXq4-`,
  rp = `_4lcICEhYuQw-`,
  ip = `unoV6P6DXbM-`,
  ap = `p8d03I0RAAs-`,
  op = `brHZRAeRCnw-`,
  sp = `hATzo-Hjaaw-`,
  cp = `_7vEy4qHpqHo-`,
  lp = `KoUJweWUwjY-`,
  up = `XAGO1LWGig0-`,
  dp = `uN9-XHR7odQ-`,
  fp = `CnbkzZzYDxs-`,
  pp = `_8UjVVV-S-j8-`,
  mp = `k0yt-Gxhbs4-`,
  hp = `io6uTUtzW-A-`,
  gp = `_58-zzK2uRws-`,
  _p = `mGygcOFcFcQ-`,
  vp = `mW8gl4NPYGg-`,
  yp = `X9907eDQcow-`,
  bp = `GwjmtMACpAo-`,
  xp = `S8JsHzHuIMA-`,
  Sp = `_4nNWbL6J2cI-`,
  Cp = `Djw7Ta0NL0Q-`,
  wp = `u-mW6oZelJ4-`,
  Tp = `j0BUhYRjGwM-`,
  Ep = `I-L7P5K0HUM-`,
  Dp = `VYzpavMEA5M-`,
  Op = `iXn31HpcmTo-`;
function kp(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Ye(t),
    { data: a } = P(t),
    o = nc(t),
    { data: s } = P(o),
    { data: c } = Oa();
  if (!i || !a || (a.type == 1 && !ml(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = R.Localize(`#Language_` + B.LANGUAGE);
  if (
    (Ap(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = Cp;
  p =
    l.review_score > 0 && l.review_score < 5
      ? wp
      : l.review_score == 5
        ? Tp
        : Ep;
  let m = `${B.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, q.jsxs)(`div`, {
      className: W(Sp, p),
      children: [
        (0, q.jsx)(`div`, {
          className: Dp,
          "aria-label": R.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, q.jsxs)(`div`, {
          className: xp,
          "aria-label": R.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(ct()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(ct()) + `)`
              : d
                ? R.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(ct()),
                    f,
                  )
                : R.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(ct()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, q.jsxs)(`div`, {
            className: `ZBPprMOYoMs-`,
            children: [` `, R.Localize(`#GameHover_UserReviewsHeader`)],
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
  return (0, q.jsx)(LT, {
    url: m,
    className: W(bp, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, q.jsx)(Gn, {
            bTopmost: !0,
            toolTipContent: R.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function Ap(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function jp(e, t) {
  let n = La(z.STORE_BASE_URL, t, Hn.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function Mp() {
  let e = xr(),
    t = U.accountid;
  return f(Np(e, t));
}
function Np(e, t) {
  return {
    queryKey: Ip(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await jp(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function Pp(e) {
  let { data: t } = Mp();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Fp() {
  let e = x(),
    t = U.accountid;
  return (n, r) => {
    e.setQueryData(Ip(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Ip(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function Lp(e, t, n) {
  let r = Fp(),
    i = Hn.accountid;
  return u({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          z.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, jn()),
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
      Ra();
    },
  });
}
function Rp(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = P(t),
    { elDialogElement: s, fnShowLogonDialog: c } = bv(),
    [l, u] = (0, K.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = rc(l),
    f = Pp(l),
    { bIsOwned: p } = qa(d),
    [m, h] = (0, K.useState)(!1),
    g = je(`GameHoverWishlistButton`),
    { mutateAsync: _ } = Lp(l, !f, n);
  (0, K.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, K.useCallback)(
    async (e) => {
      Hn.logged_in
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
    : (0, q.jsxs)(rt, {
        className: W(lp, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, q.jsx)(lr, {}) : (0, q.jsx)(Pr, {}),
          (0, q.jsx)(`div`, {
            className: W(up, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: R.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var zp = class e {
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
        this.m_mapAppCallbackList.set(e, new It()),
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
      let n = { nAppID: e, l: z.LANGUAGE, cc: z.COUNTRY },
        r = z.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await ul.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = vt(i);
    } catch (e) {
      t = vt(e);
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
      let t = hr(`hardwarecompatibility`, `application_config`);
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
E([j], zp.prototype, `LoadAppCompabitilityResult`, null);
function Bp(e) {
  let [t, n] = K.useState(zp.Get().GetCompatabilityResultForApp(e));
  return (
    Sr(zp.Get().GetCallbackForAppList(e), n),
    K.useEffect(() => {
      zp.Get().BHasCompatabilityResultForApp(e) ||
        zp
          .Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(zp.Get().GetCompatabilityResultForApp(e)));
    }, [e]),
    t
  );
}
var J = (function (e) {
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
function Vp(e) {
  switch (e) {
    case I.OK:
      return 0;
    case I.CANCEL:
      return 1;
    case I.SECONDARY:
      return 2;
    case I.OPTIONS:
      return 3;
    case I.DIR_LEFT:
      return 4;
    case I.DIR_RIGHT:
      return 5;
    case I.DIR_UP:
      return 6;
    case I.DIR_DOWN:
      return 7;
    case I.STEAM_GUIDE:
      return 8;
    case I.STEAM_QUICK_MENU:
      return 9;
    case I.SELECT:
      return 10;
    case I.START:
      return 11;
    case I.BUMPER_LEFT:
      return 12;
    case I.BUMPER_RIGHT:
      return 13;
    case I.TRIGGER_LEFT:
      return 14;
    case I.TRIGGER_RIGHT:
      return 15;
    case I.REAR_LEFT_UPPER:
      return 24;
    case I.REAR_LEFT_LOWER:
      return 25;
    case I.REAR_RIGHT_UPPER:
      return 26;
    case I.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var Hp = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new _n(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new Lr();
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
    } else this.SetActionDescriptionsFromMap({ [I.OK]: null });
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
    let e = Object.values(J).filter((e) => typeof e == `number`),
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
        i = Vp(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (_t(this.m_boundActions.get(t), n)) return !1;
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
(E([j], Hp.prototype, `OnFocusNavigationChanged`, null),
  E([j], Hp.prototype, `OnActiveNavTreeChanged`, null),
  E([j], Hp.prototype, `SetActionDescriptionsFromMap`, null));
var Up = `_6t-T9facds8-`,
  Wp = `_9ltdnbqRBVs-`,
  Gp = `KMiaP3xxJic-`,
  Kp = `-f6--J8iYK8-`,
  qp = `tlFgqgPT5b8-`,
  Jp = `LR3Stix-A4Y-`,
  Yp = `zxsM3zpa9JU-`,
  Xp = `c3ZsONtZeOk-`,
  Zp = `Ee3wL0zu-5c-`,
  Qp = `OCfnyhzTpeE-`,
  $p = `_1ArCdbgfzNY-`,
  em = `IBiSpw0atyM-`,
  tm = `mDOopKELMBg-`,
  nm = `C8-HMz-fVag-`,
  rm = `lDDPCoGwJAU-`,
  im = `dNQ1ofH4Cbs-`,
  am = `rmDLW23h1zQ-`,
  om = `CT05Js5REus-`,
  sm = `CAlqxCfPEko-`,
  cm = `c1DR5MyoXPo-`,
  lm = `KnF9XvfALGs-`,
  um = `voFKnm6BHlI-`,
  dm = `XRBn-My-JYo-`,
  fm = `MnMGQkxU8KU-`,
  pm = `BPpr5dZdGc4-`,
  Y = `QeQ6K92V-ik-`,
  X = `jlNNNIYiAYQ-`,
  mm = `dXUGCsJI9Qw-`,
  hm = `N88ag1lENrA-`,
  gm = `-m9XoDI2d0Q-`,
  _m = `IulAmRs78UQ-`,
  vm = `X86r8MkR480-`,
  ym = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  bm = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function xm(e) {
  switch (e) {
    case 0:
      return gm;
    case 1:
      return _m;
    case 2:
      return vm;
    default:
      return _m;
  }
}
function Sm(e) {
  switch (e) {
    case 0:
      return hm;
    case 1:
      return mm;
    case 2:
      return pm;
    default:
      return mm;
  }
}
function Cm(e) {
  let t = W(
      e.size == null ? xm(1) : xm(e.size),
      e.type == null ? Sm(1) : Sm(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case J.A:
      return (0, q.jsx)(wm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_A`),
      });
    case J.B:
      return (0, q.jsx)(Tm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_B`),
      });
    case J.X:
      return (0, q.jsx)(Em, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_X`),
      });
    case J.Y:
      return (0, q.jsx)(Dm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Y`),
      });
    case J.Left:
      return (0, q.jsx)(Am, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadLeft`),
      });
    case J.Right:
      return (0, q.jsx)(jm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadRight`),
      });
    case J.Up:
      return (0, q.jsx)(Om, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadUp`),
      });
    case J.Down:
      return (0, q.jsx)(km, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_DpadDown`),
      });
    case J.HomeMenu:
      return (0, q.jsx)(Mm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Steam`),
      });
    case J.QuickMenu:
      return (0, q.jsx)(Nm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_QAM`),
      });
    case J.Select:
      return (0, q.jsx)(Pm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_View`),
      });
    case J.Start:
      return (0, q.jsx)(Fm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Menu`),
      });
    case J.LeftBumper:
      return (0, q.jsx)(Im, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L1`),
      });
    case J.RightBumper:
      return (0, q.jsx)(Lm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R1`),
      });
    case J.LeftTrigger:
      return (0, q.jsx)(Rm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L2`),
      });
    case J.RightTrigger:
      return (0, q.jsx)(zm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R2`),
      });
    case J.LeftStick:
      return (0, q.jsx)(Um, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LS`),
      });
    case J.RightStick:
      return (0, q.jsx)(Hm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RS`),
      });
    case J.LeftStickClick:
      return (0, q.jsx)(Bm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L3`),
      });
    case J.RightStickClick:
      return (0, q.jsx)(Vm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R3`),
      });
    case J.LeftTrackpad:
      return (0, q.jsx)(Jm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LPad`),
      });
    case J.RightTrackpad:
      return (0, q.jsx)(Xm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RPad`),
      });
    case J.LeftTrackpadClick:
      return (0, q.jsx)(Ym, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_LPad_Click`),
      });
    case J.RightTrackpadClick:
      return (0, q.jsx)(Zm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_RPad_Click`),
      });
    case J.RearLeftUpper:
      return (0, q.jsx)(Wm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L4`),
      });
    case J.RearRightUpper:
      return (0, q.jsx)(Km, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R4`),
      });
    case J.RearLeftLower:
      return (0, q.jsx)(Gm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_L5`),
      });
    case J.RearRightLower:
      return (0, q.jsx)(qm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_R5`),
      });
    default:
      return (0, q.jsx)(Qm, {
        bIsKnockout: n,
        className: t,
        "aria-label": L(`#ControllerButton_Default`),
      });
  }
}
function wm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z`,
          }),
        ],
      });
}
function Tm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z`,
          }),
        ],
      });
}
function Em({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z`,
          }),
        ],
      });
}
function Dm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            cx: `18`,
            cy: `18`,
            r: `18`,
            fill: `currentColor`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z`,
          }),
        ],
      });
}
function Om({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z`,
          }),
        ],
      });
}
function km({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z`,
          }),
        ],
      });
}
function Am({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z`,
          }),
        ],
      });
}
function jm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z`,
          }),
        ],
      });
}
function Mm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 100 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z`,
          }),
        ],
      });
}
function Nm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 81 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z`,
          }),
          (0, q.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `21.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, q.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `39.5`,
            cy: `18`,
            r: `4.5`,
          }),
          (0, q.jsx)(`circle`, {
            className: X,
            fill: `currentColor`,
            cx: `57.5`,
            cy: `18`,
            r: `4.5`,
          }),
        ],
      });
}
function Pm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`rect`, {
            className: Y,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, q.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `14`,
          }),
        ],
      });
}
function Fm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 48 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`rect`, {
            className: Y,
            fill: `currentColor`,
            y: `6`,
            width: `48`,
            height: `24`,
            rx: `12`,
          }),
          (0, q.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            x: `17`,
            y: `11`,
            width: `14`,
            height: `2.8`,
          }),
          (0, q.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            x: `17`,
            y: `22.2`,
            width: `14`,
            height: `2.8`,
          }),
          (0, q.jsx)(`rect`, {
            className: X,
            fill: `currentColor`,
            x: `17`,
            y: `16.6`,
            width: `14`,
            height: `2.8`,
          }),
        ],
      });
}
function Im({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z`,
          }),
        ],
      });
}
function Lm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z`,
          }),
        ],
      });
}
function Rm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z`,
          }),
        ],
      });
}
function zm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 32`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z`,
          }),
        ],
      });
}
function Bm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`ellipse`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z`,
          }),
        ],
      });
}
function Vm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`ellipse`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `19.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M23.1111 0H12L17.5556 5.625L23.1111 0Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z`,
          }),
        ],
      });
}
function Hm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`ellipse`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Um({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`ellipse`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `13.5`,
            rx: `18`,
            ry: `11.25`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23 19H14V7H16.8149V16.7371H23V19Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z`,
          }),
        ],
      });
}
function Wm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z`,
          }),
        ],
      });
}
function Gm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z`,
          }),
        ],
      });
}
function Km({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z`,
          }),
        ],
      });
}
function qm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z`,
          }),
        ],
      });
}
function Jm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z`,
          }),
        ],
      });
}
function Ym({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Xm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z`,
          }),
        ],
      });
}
function Zm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z`,
          }),
          (0, q.jsx)(`path`, {
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z`,
          }),
          (0, q.jsx)(`path`, {
            className: Y,
            fill: `currentColor`,
            d: `M24 0H12L18 6L24 0Z`,
          }),
        ],
      });
}
function Qm({ bIsKnockout: e, ...t }) {
  return e
    ? (0, q.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: (0, q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          fill: `currentColor`,
          d: `M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z`,
        }),
      })
    : (0, q.jsxs)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 36 36`,
        fill: `none`,
        ...t,
        children: [
          (0, q.jsx)(`circle`, {
            className: Y,
            fill: `currentColor`,
            cx: `18`,
            cy: `18`,
            r: `18`,
          }),
          (0, q.jsx)(`path`, {
            className: X,
            fill: `currentColor`,
            d: `M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z`,
          }),
        ],
      });
}
var $m = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  eh = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: th, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  th = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [8], null));
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
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            report_days: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            report_count: {
              n: 5,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: A.readDouble, bw: k.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: A.readDouble,
              pbr: A.readPackedDouble,
              bw: k.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            last_updated: { n: 10, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  nh;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      C($m, t, n),
      eh,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((nh ||= {}));
function rh(e, t = !0) {
  return f({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${z.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await ul.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = vt(n);
      } catch (t) {
        e = vt(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!Hn.accountid,
  });
}
function ih(e) {
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
      ((d.onOptionsActionDescription = R.Localize(
        `#SteamDeckVerified_ViewDeveloperPost`,
      )),
      (d.onOptionsButton = u),
      (f = (0, q.jsx)(uh, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, q.jsx)(uh, {
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
      l = (0, q.jsx)(gh, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = R.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, q.jsx)(bh, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, q.jsx)(gh, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = R.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, q.jsx)(yh, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, q.jsx)(_h, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = R.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, q.jsx)(xh, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, q.jsx)(gh, { category: t.frame_resolved_category })))
            : ((e = R.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, q.jsx)(vh, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, q.jsxs)(rt, {
        autoFocus: o,
        focusableIfEmpty: o,
        noFocusRing: !0,
        className: Xp,
        ...d,
        children: [
          (0, q.jsxs)(`div`, {
            id: n,
            className: qp,
            children: [
              (0, q.jsx)(`div`, { className: Jp, children: e }),
              (0, q.jsx)(`div`, { className: Yp, children: l }),
            ],
          }),
          s,
          a,
          !1,
        ],
      })
    );
  }
  let m = gf(t.resolved_category),
    h = _f(t.steamos_resolved_category),
    g = gf(t.machine_resolved_category),
    _ = gf(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, q.jsx)(ch, { ...e });
        break;
      case 2:
      case 5:
        t = (0, q.jsx)(oh, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, q.jsx)(lh, { ...e });
        break;
      default:
        t = (0, q.jsx)(sh, { ...e, deckBlogContent: f });
    }
    return (0, q.jsx)(Vr, { children: t });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, q.jsxs)(`div`, {
          className: cm,
          children: [
            (0, q.jsx)(tn, { className: fm }),
            (0, q.jsx)(m, { className: lm }),
          ],
        }),
        key: `1`,
        contents: (0, q.jsx)(Vr, {
          children: (0, q.jsx)(sh, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: cm,
          children: [
            (0, q.jsx)(qe, { className: um }),
            (0, q.jsx)(g, { className: lm }),
          ],
        }),
        key: `3`,
        contents: (0, q.jsx)(Vr, { children: (0, q.jsx)(ch, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: cm,
          children: [`steamos`, (0, q.jsx)(h, { className: lm })],
        }),
        key: `2`,
        contents: (0, q.jsx)(Vr, {
          children: (0, q.jsx)(oh, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: cm,
          children: [
            (0, q.jsx)(zt, { className: dm }),
            (0, q.jsx)(_, { className: lm }),
          ],
        }),
        key: `4`,
        contents: (0, q.jsx)(Vr, { children: (0, q.jsx)(lh, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, q.jsx)(Me, {
    tabs: y,
    classNameCtn: sm,
    classNameTabContent: om,
    startingTab: c.toString(),
    preferredFocus: !0,
    bDisableRouting: !0,
    focusRingHasBorderRadius: !0,
  });
}
function ah(e) {
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
    [l, u] = K.useState(!1),
    d = K.useCallback(() => l, [l]),
    f = K.useRef(null);
  dn();
  let p = i ?? {};
  return (
    K.useEffect(() => {
      f?.current?.scrollHeight !== void 0 &&
        f?.current?.clientHeight !== void 0 &&
        u(f?.current?.scrollHeight > f?.current?.clientHeight);
    }, []),
    (0, q.jsxs)(rt, {
      className: Xp,
      ...p,
      children: [
        (0, q.jsxs)(`div`, {
          children: [
            (0, q.jsxs)(`div`, {
              id: t,
              className: qp,
              children: [
                (0, q.jsx)(`div`, { className: Jp, children: n }),
                (0, q.jsx)(`div`, { className: Yp, children: a }),
              ],
            }),
            o,
          ],
        }),
        s,
        (0, q.jsx)(Zt, {
          ref: f,
          className: d() ? Qp : Zp,
          children: (0, q.jsx)(rt, {
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
function oh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(yh, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, q.jsx)(_h, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, q.jsx)(ah, {
    titleId: t,
    title: R.Localize(
      `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, q.jsxs)(q.Fragment, {
      children: [
        c && (0, q.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.steamos_resolved_items &&
          r.steamos_resolved_items
            .filter((e) => e.display_type != 1)
            .map((e) =>
              (0, q.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, q.jsx)(fh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: R.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          (0, q.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.steamos_resolved_items
              ?.filter((e) => e.display_type == 1)
              .map((e) =>
                (0, q.jsxs)(
                  `div`,
                  {
                    className: `-vnBPYbU1nw-`,
                    children: [
                      (0, q.jsx)(fh, { displaytype: e.display_type }),
                      (0, q.jsx)(`span`, { children: R.Localize(e.loc_token) }),
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
function sh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(vh, { id: n, category: r.resolved_category, appName: i }),
    s = (0, q.jsx)(gh, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, q.jsx)(ah, {
    titleId: t,
    title: R.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, q.jsxs)(q.Fragment, {
      children: [
        c && (0, q.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.resolved_items &&
          r.resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, q.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, q.jsx)(dh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, {
                      children:
                        e.loc_token.charAt(0) == `#`
                          ? R.Localize(e.loc_token)
                          : R.Localize(`#` + e.loc_token),
                    }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.resolved_items &&
          (0, q.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, q.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, q.jsx)(`span`, {
                      children: R.Localize(e.loc_token),
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
function ch(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(bh, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, q.jsx)(gh, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, q.jsx)(ah, {
    titleId: t,
    title: R.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, q.jsxs)(q.Fragment, {
      children: [
        c && (0, q.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.machine_resolved_items &&
          r.machine_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, q.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, q.jsx)(dh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: R.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.machine_resolved_items &&
          (0, q.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.machine_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, q.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, q.jsx)(`span`, {
                      children: R.Localize(e.loc_token),
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
function lh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(xh, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, q.jsx)(gh, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, q.jsx)(ah, {
    titleId: t,
    title: R.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    ratingIcon: s,
    ratingSummary: o,
    ...e,
    children: (0, q.jsxs)(q.Fragment, {
      children: [
        c && (0, q.jsx)(`div`, { className: `BlWeoXRF0aE-` }),
        r.frame_resolved_items &&
          r.frame_resolved_items
            .filter((e) => e.display_type !== 1)
            .map((e) =>
              (0, q.jsxs)(
                `div`,
                {
                  className: `-vnBPYbU1nw-`,
                  children: [
                    (0, q.jsx)(dh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: R.Localize(e.loc_token) }),
                  ],
                },
                e.loc_token + e.display_type,
              ),
            ),
        a &&
          r.frame_resolved_items &&
          (0, q.jsx)(`div`, {
            className: `FzBLoJrIYvs-`,
            children: r.frame_resolved_items
              .filter((e) => e.display_type == 1)
              .map((e) =>
                (0, q.jsx)(
                  `div`,
                  {
                    className: `_00kSG69QbjI-`,
                    children: (0, q.jsx)(`span`, {
                      children: R.Localize(e.loc_token),
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
function uh(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = dn();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? R.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : R.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, q.jsxs)(`div`, {
      className: $p,
      children: [
        e,
        (0, q.jsx)(`div`, {
          className: am,
          children: (0, q.jsx)(Cm, { button: J.Y, type: ym.Knockout }),
        }),
      ],
    });
  }
  let i =
    n == 2
      ? R.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog_Desktop`)
      : R.Localize(
          `#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop`,
        );
  return (0, q.jsxs)(`div`, {
    className: $p,
    children: [
      i,
      (0, q.jsx)(`a`, {
        href: t,
        className: Up,
        children: R.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function dh(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, q.jsx)(lt, { className: im });
    case 3:
      return (0, q.jsx)(tt, { className: im });
    case 2:
      return (0, q.jsx)(on, { className: im });
    case 0:
      return (0, q.jsx)(zr, { className: im });
    case 1:
      return null;
  }
}
function fh(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, q.jsx)(jt, { className: im });
    case 1:
      return (0, q.jsx)(er, { className: im });
    default:
      return null;
  }
}
function ph(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = P(t),
    { data: a } = Nt(t),
    [o, s, c] = jr();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, q.jsx)(df, { category: e })),
      (u = R.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, q.jsx)(uf, { category: e })),
      (u = R.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, q.jsx)(lf, { category: e })),
      (u = R.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, q.jsxs)(`div`, {
    className: W(Gp, `LearnMoreCtn`),
    children: [
      l,
      (0, q.jsx)(Pt, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, q.jsx)(`span`, { className: Kp, children: u }),
      }),
      !r &&
        (0, q.jsx)(mh, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function mh(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, q.jsx)(At, {
    active: n,
    children: (0, q.jsx)(hh, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function hh(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = Bp(t),
    o = K.useId();
  return (0, q.jsx)(yr, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, q.jsx)(Et, {
      children: (0, q.jsx)(rt, {
        focusable: !1,
        "flow-children": `column`,
        children: a
          ? (0, q.jsx)(ih, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, q.jsx)(we, {
              size: `medium`,
              position: `center`,
              string: R.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function gh(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, q.jsx)(lt, { className: Wp, role: `presentation` });
    case 2:
      return (0, q.jsx)(tt, { className: Wp, role: `presentation` });
    case 1:
      return (0, q.jsx)(on, { className: Wp, role: `presentation` });
    default:
      return (0, q.jsx)(zr, { className: Wp, role: `presentation` });
  }
}
function _h(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, q.jsx)(jt, { className: Wp, role: `presentation` });
    case 1:
      return (0, q.jsx)(on, { className: Wp, role: `presentation` });
    default:
      return (0, q.jsx)(zr, { className: Wp, role: `presentation` });
  }
}
function vh(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      id: t,
      className: $p,
      children: r
        ? R.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: Ie(r) }),
          )
        : R.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = em));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = tm));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = nm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: R.Localize(Sh(n)) }),
    c = (0, q.jsx)(`span`, { className: $p, children: R.Localize(i || a) }),
    l = r
      ? R.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: Ie(r) }),
          s,
          c,
        )
      : R.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: $p, children: l });
}
function yh(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: $p,
      children: r
        ? R.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: Ie(r) }),
          )
        : R.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = rm));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = nm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: R.Localize(Ch(n)) }),
    c = (0, q.jsx)(`span`, { className: $p, children: R.Localize(i || a) }),
    l = r
      ? R.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: Ie(r) }),
          s,
          c,
        )
      : R.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: $p, children: l });
}
function bh(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: $p,
      children: r
        ? R.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: Ie(r) }),
          )
        : R.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = em));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = tm));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = nm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: R.Localize(Sh(n)) }),
    c = (0, q.jsx)(`span`, { className: $p, children: R.Localize(i || a) }),
    l = r
      ? R.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: Ie(r) }),
          s,
          c,
        )
      : R.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: $p, children: l });
}
function xh(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: $p,
      children: r
        ? R.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: Ie(r) }),
          )
        : R.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = em));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = tm));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = nm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: R.Localize(Sh(n)) }),
    c = (0, q.jsx)(`span`, { className: $p, children: R.Localize(i || a) }),
    l = r
      ? R.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: Ie(r) }),
          s,
          c,
        )
      : R.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: $p, children: l });
}
function Sh(e) {
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
function Ch(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function wh(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function Th(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var Eh = (e) => {
  let { appid: t } = e,
    n = (0, q.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, q.jsx)(Re, { appID: t, children: n }) : n;
};
function Dh(e) {
  let { id: t } = e,
    { data: n } = Lt(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: gp,
        children: (0, q.jsx)(`div`, {
          className: _p,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, q.jsx)(
                nO,
                { tagid: e.tagid, className: vp },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function Oh(e) {
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
    g = nw(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, K.useState)(!1),
    [ee, b] = (0, K.useState)(``),
    x = (e) => b(`translateY( -${e?.clientHeight || 0}px )`),
    { data: S } = P(t),
    { data: te } = Hr(n),
    ne = !f && !o && !a,
    re = S && S.item_type == 0,
    [ie, ae] = Th(l, u);
  return (0, q.jsxs)(`div`, {
    className: dp,
    style: { transform: s && v ? ee : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, q.jsxs)(`a`, {
        href: i,
        className: op,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          te &&
            (0, q.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, q.jsx)(`div`, {
                className: W(`-G728TP4qEc-`, `AWrycDVaY80-`),
                children: (0, q.jsx)(`img`, {
                  loading: `lazy`,
                  src: Ae(te, `header`),
                  alt: S?.name,
                }),
              }),
            }),
          !c &&
            !f &&
            (0, q.jsx)(`div`, {
              className: `Er5Gw2jrA3A-`,
              children: (0, q.jsx)(Gh, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: fp,
        ref: x,
        children: (0, q.jsxs)(`div`, {
          className: mp,
          children: [
            (0, q.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, q.jsx)(`div`, {
                className: hp,
                children: S?.name || r,
              }),
            }),
            h && (0, q.jsx)(Ah, { id: t }),
            (0, q.jsx)(Dh, { id: t }),
            !ie && (0, q.jsx)(kp, { id: t }),
            !(ie || !ne) &&
              (0, q.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, q.jsx)(Hh, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, q.jsx)(kh, { id: t }),
                ],
              }),
            o && (0, q.jsx)(cv, { id: t, className: `mVkwv5PYwMg-` }),
            !!(ie && re) &&
              (0, q.jsx)(ph, { id: t, compatibility: ae, onShowDialog: _ }),
            !!a && a,
            f &&
              re &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, q.jsx)(c_, { appid: t.appid, bIsMuted: !1 }),
            p && (0, q.jsx)(jC, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function kh(e) {
  let { id: t } = e,
    { data: n } = ar(t);
  if (!n) return null;
  let r = Ld(n);
  return (0, q.jsx)(`div`, { className: yp, children: r });
}
function Ah(e) {
  let { id: t } = e,
    { data: n } = nn(t);
  return n
    ? (0, q.jsx)(`div`, { className: pp, children: n?.short_description })
    : null;
}
function jh(e) {
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
    { data: l } = Wt(t),
    { data: u } = nr(t),
    d = l === void 0 && u === void 0,
    [f] = Th(!!a, o);
  return (0, q.jsxs)(`div`, {
    className: W(tp, d && `dNo27dzDPfI-`, Mu, i && `djLCJl8FKv8-`),
    children: [
      (0, q.jsxs)(`a`, {
        href: r,
        className: np,
        children: [
          !(!s || f) && (0, q.jsx)(Rp, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, q.jsx)(GS, { id: n, snr: e.strSNR }),
          t && (0, q.jsx)(UC, { id: t }),
        ],
      }),
      (0, q.jsx)(Oh, { ...e }),
    ],
  });
}
function Mh(e) {
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
    { data: y } = P(t),
    ee = dn(),
    [b, x, S] = jr(),
    { strStoreURL: te, snr: ne } = l_(y, o);
  if ((!y && !n) || ee) return (0, q.jsx)(q.Fragment, { children: u });
  let re = t;
  y &&
    y.item_type == 1 &&
    y.included_appids?.length == 1 &&
    (re = { appid: y.included_appids[0] });
  let ie = ow() == `hiding`,
    ae = r || !y ? void 0 : te,
    [, oe] = Th(p, m),
    se;
  oe != 0 && y?.appid && y?.item_type == 0 && (se = y.appid);
  let ce = (0, q.jsx)(jh, {
      id: t,
      displayID: re,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: ae,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: ie,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: ne,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: se ? x : void 0,
    }),
    le = ae ? (0, q.jsx)(`a`, { href: ae, children: u }) : u;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(rw, {
        hoverContent: ce,
        nWidthMultiplier: f,
        ...v,
        children: le,
      }),
      se &&
        (0, q.jsx)(mh, {
          nAppID: se,
          appName: y?.name || n,
          startingTab: oe,
          active: b,
          closeModal: S,
        }),
    ],
  });
}
function Nh(e) {
  return (0, K.useMemo)(() => Ih(e), [e?.id, e?.type]);
}
function Ph(e, t) {
  return (0, K.useMemo)(() => Rh(e, t), [e, t]);
}
function Fh(e, t) {
  return (0, K.useMemo)(() => Lh(e, t), [e, t]);
}
function Ih(e) {
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
function Lh(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function Rh(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
var zh = 6;
function Bh(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = P(t),
    i = r?.item_type == 2,
    { data: a } = Va(),
    o = K.useMemo(() => {
      if (r)
        return r.item_type === 1 || r.item_type === 2
          ? (r.included_appids || [])
              .filter((e) => !i || !n || !a?.has(e))
              .map((e) => ({ appid: e }))
          : (console.error(
              `ContentsPreviewList unexpected store item type:`,
              r.item_type,
            ),
            null);
    }, [r, n, i, a]);
  if (!o || o.length == 0) return null;
  let s = o.length,
    c = R.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = R.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, q.jsxs)(`div`, {
    className: Pl,
    children: [
      (0, q.jsxs)(`div`, {
        className: pd,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: R.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: Fl,
        children: o
          .slice(0, zh)
          .map((e) => (0, q.jsx)(Vh, { id: e }, `preview${Qt(e)}`)),
      }),
    ],
  });
}
function Vh(e) {
  let { id: t } = e,
    { data: n } = Vt(t),
    { data: r } = st(t);
  if (!n || !r) return null;
  let i = Ae(n, `small_capsule`);
  return (0, q.jsx)(Mh, {
    id: t,
    className: md,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: hd,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function Hh(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = Nt(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, q.jsx)(`span`, {
          title: R.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(Rn, {
            "aria-label": R.Localize(`#Platform_Windows`),
          }),
        });
    return (
      B.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, q.jsx)(`span`, {
            title: R.Localize(`#Platform_Linux`),
            children: (0, q.jsx)(rr, {
              "aria-label": R.Localize(`#Platform_Linux`),
            }),
          }))
        : B.PLATFORM === `macos` && a?.mac
          ? (e = (0, q.jsx)(`span`, {
              title: R.Localize(`#Platform_Mac`),
              children: (0, q.jsx)(Yt, {
                "aria-label": R.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, q.jsx)(`span`, {
              title: R.Localize(`#Platform_VR`),
              children: (0, q.jsx)(Ar, {
                "aria-label": R.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, q.jsx)(`span`, { className: W(Gl, n), children: e }) : null
    );
  }
  return (0, q.jsxs)(`span`, {
    className: W(Gl, n),
    children: [
      !i &&
        a.windows &&
        (0, q.jsx)(`span`, {
          title: R.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(Rn, {
            "aria-label": R.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, q.jsx)(`span`, {
          title: R.Localize(`#Platform_Mac`),
          children: (0, q.jsx)(Yt, {
            "aria-label": R.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, q.jsx)(`span`, {
          title: R.Localize(`#Platform_Linux`),
          children: (0, q.jsx)(rr, {
            "aria-label": R.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, q.jsx)(`span`, {
          title: R.Localize(`#Platform_VR`),
          children: (0, q.jsx)(Ar, {
            "aria-label": R.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function Uh(e) {
  let {
      bundle_discount_pct: t = 0,
      discount_pct: n = 0,
      price_before_bundle_discount: r,
      formatted_price_before_bundle_discount: i,
      final_price_in_cents: a,
      price_to_base_discount_on: o,
    } = e,
    s = Number.parseInt(r || `0`);
  if (!(t <= 0 || s <= 0 || !i) && !(Number.parseInt(o || `0`) > 0))
    return n <= 0
      ? { nDiscountPct: t, strOriginalPrice: i, nSupersededBundlePct: 0 }
      : {
          nDiscountPct: Math.min(
            Math.floor(((s - Number.parseInt(a || `0`)) / s) * 100 + 0.5),
            99,
          ),
          strOriginalPrice: i,
          nSupersededBundlePct: t,
        };
}
function Wh(e, t, n) {
  return e
    ? n
      ? t
        ? `#Sale_Bundle_Discount_Limited_ttip`
        : `#Sale_Bundle_Discount_ttip`
      : t
        ? `#Sale_CompleteTheSet_Discount_Limited_ttip`
        : `#Sale_CompleteTheSet_Discount_ttip`
    : `#Sale_Discount_ttip`;
}
function Gh(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = nt(t),
    { data: i } = P(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, q.jsx)(Kh, { purchaseOption: a, ...e });
}
function Kh(e) {
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
    g = B.NOW,
    { data: _ } = ar(r),
    { data: v } = P(r);
  if (!v) return null;
  let y = i,
    ee = !m && Bd(_, g),
    b = W({
      [ru]: !0,
      [Eu]: t,
      StoreSalePriceWidgetContainer: !0,
      [Au]: ee,
      [Ul]: c,
      [l ?? ``]: !!l,
    });
  if (e.bShowInLibrary)
    return (0, q.jsx)(`div`, {
      className: b,
      children: (0, q.jsx)(`div`, {
        className: Tu,
        children: R.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!y || (!y.packageid && !y.bundleid))) {
    if (o) return null;
    let e =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? un(_)
        : R.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Ld(_));
    return (0, q.jsx)(`div`, {
      className: b,
      children: (0, q.jsx)(`div`, { className: Tu, children: e }),
    });
  }
  if (v.is_free) {
    if (!v.is_free_temporarily)
      return v.item_type == 0 && v.type == 1
        ? s
          ? null
          : (0, q.jsxs)(`div`, {
              className: b,
              children: [
                ee &&
                  (0, q.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: R.Localize(`#Flag_New`),
                  }),
                (0, q.jsx)(`div`, {
                  className: Tu,
                  children: R.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, q.jsxs)(`div`, {
            className: b,
            children: [
              ee &&
                (0, q.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: R.Localize(`#Flag_New`),
                }),
              (0, q.jsx)(`div`, {
                className: Tu,
                children: R.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (y && y.is_free_to_keep && !y.formatted_original_price)
      return (0, q.jsx)(`div`, {
        className: b,
        children: (0, q.jsx)(`div`, {
          className: Tu,
          children: R.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!y || !y.formatted_final_price) return null;
  let x = v.item_type == 2,
    S = Uh(y),
    te = !!S && !S.nSupersededBundlePct,
    ne = S?.nSupersededBundlePct ? S.nDiscountPct : y.discount_pct || 0,
    re = ((S || x) && (!n || te || (S && !t)) && y.bundle_discount_pct) || 0,
    ie = y.formatted_final_price;
  if (f) {
    let e = ze(U.country_code.toUpperCase()),
      t = { ...He(e), bWholeUnitsOnly: !0 };
    ie = Ve(Number.parseInt(y.final_price_in_cents || `0`), t);
  }
  let ae = Vd(_, y);
  return (0, q.jsx)(qh, {
    bSingleLineMode: !!t,
    bBundleItem: x,
    nBaseDiscountPercentage: re,
    nDiscountPercentage: ne,
    bIsPrePurchase: ae,
    strBestPurchaseOriginalPriceFormatted:
      S?.strOriginalPrice || y.formatted_original_price || ``,
    strBestPurchasePriceFormatted: ie,
    bHideDiscountPercentForCompliance: !!y.hide_discount_pct_for_compliance,
    bShowNewFlag: ee,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: h,
    strDiscountAndPriceClassName: u,
    strPriceFormattedClassName: d,
    bPurchaseOptionDisplay: c,
  });
}
function qh(e) {
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
      ? R.Localize(`#Discount_ARIA_Label_SpecialPrice`, a)
      : R.Localize(`#Discount_ARIA_Label`, n, a, o));
  let _ = !((!n && !i) || h) && !!a,
    v = !(!i || !n || h || t),
    y = R.Localize(Wh(!!i, !!n, !!m));
  return (0, q.jsxs)(`div`, {
    className: W({
      [ru]: !0,
      [Eu]: t,
      StoreSalePriceWidgetContainer: !0,
      [Cu]: !!n,
      Discounted: !!n,
      [ku]: !!r,
      [Pu]: !!u,
      [Au]: !!c,
      [Ul]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, q.jsx)(`div`, {
          className: W(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, q.jsxs)(`span`, {
            children: [
              (0, q.jsx)(Pn, {}),
              R.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, q.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: R.Localize(`#Flag_New`),
        }),
      v &&
        (0, q.jsx)(Zn, {
          toolTipContent: y,
          children: (0, q.jsxs)(`span`, {
            className: W(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
            children: [
              (0, q.jsx)(`span`, {
                className: `cCmCiA6FCMc-`,
                children: `-${i}%`,
              }),
              `-${n}%`,
            ],
          }),
        }),
      !(!i || h || v) &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(Zn, {
              toolTipContent: y,
              children: (0, q.jsx)(`span`, {
                className: W(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, q.jsx)(Zn, {
                toolTipContent: y,
                children: (0, q.jsx)(`span`, {
                  className: W(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, q.jsx)(Zn, {
          toolTipContent: y,
          children: (0, q.jsx)(`div`, {
            className: W(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, q.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, q.jsx)(Wr, {}),
        }),
      _
        ? (0, q.jsxs)(`div`, {
            className: W(Du),
            children: [
              (0, q.jsx)(`div`, {
                className: W({ [Nu]: t, [Ou]: !t }),
                children: a,
              }),
              (0, q.jsx)(`div`, {
                className: W({ [Tu]: !0, [Eu]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, q.jsx)(`div`, {
            className: W({ [Tu]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
async function Jh() {
  let e = Tr(`broadcast_available_for_page`, `application_config`);
  if (ng(e)) {
    let t = new Set();
    return (
      e.filtered.forEach((e) => {
        e.appid && t.add(e.appid);
      }),
      Array.from(t)
    );
  }
  return [];
}
var Yh = class {
  constructor() {
    p(this);
  }
  accountid;
  steamid;
  appid;
  hub_popular;
  popular;
  relay_broadcast_id;
  rowversion;
  thumbnail_http_address;
  nAppIDVOD;
  title = void 0;
  viewer_count = void 0;
  whitelist_rank;
  gamedata_subtitle = void 0;
  store_title;
  left_panel;
  right_panel;
  snr;
  broadcast_chat_visibility;
  default_selection_priority = 0;
  current_selection_priority = 0;
};
(E([_], Yh.prototype, `title`, void 0),
  E([_], Yh.prototype, `viewer_count`, void 0),
  E([_], Yh.prototype, `gamedata_subtitle`, void 0),
  E([_], Yh.prototype, `current_selection_priority`, void 0));
var Xh = `primary`,
  Zh = `featured`,
  Qh = `default_featured`,
  $h = `general`,
  eg = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function tg(e) {
  switch (e) {
    case Xh:
      return 3;
    case Zh:
      return 2;
    case Qh:
      return 1;
    case $h:
    default:
      return 0;
  }
}
function ng(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function rg() {
  return f(ag());
}
function ig(e) {
  let { data: t } = rg(),
    [n, r] = (0, K.useState)(!1),
    i = x(),
    a = Ln();
  return (
    (0, K.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(Bn(a, { appid: e }))),
        );
        r(
          n.some(
            (e) =>
              (e && e.appid && t.has(e.appid)) ||
              (e?.related_items?.parent_appid &&
                t.has(e.related_items.parent_appid)),
          ),
        );
      })();
    }, [e, a, i, t]),
    n
  );
}
function ag() {
  return {
    queryKey: og(),
    queryFn: async () => {
      let e = await Jh();
      return new Set(e);
    },
  };
}
function og() {
  return [`BroadcastApps`];
}
var sg = `hRwhHwwKlgI-`;
function cg() {
  return (0, q.jsx)(`div`, {
    className: sg,
    children: L(`#home_page_live_broadcast`),
  });
}
function lg(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = Va(),
    { data: a } = Mp(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = ig(t),
    l = o && !n,
    u = s && !n,
    d = !n && r;
  return (0, q.jsxs)(`div`, {
    className: W(rd, `CapsuleDecorators`),
    children: [
      l &&
        (0, q.jsxs)(`span`, {
          className: W(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, q.jsx)(`img`, {
              src: Ge(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: R.Localize(`#Sale_InLibrary`),
            }),
            R.Localize(`#Sale_InLibrary`),
          ],
        }),
      u &&
        (0, q.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, q.jsx)(lr, { className: `ppO76q5Y-Zg-` }),
            R.Localize(`#Sale_OnWishlist`),
          ],
        }),
      d && !l && !u && (0, q.jsx)(ug, { appids: t }),
      c && (0, q.jsx)(cg, {}),
    ],
  });
}
function ug(e) {
  let { appids: t } = e;
  return dg(t)
    ? (0, q.jsx)(`span`, {
        className: W(td, nd),
        children: R.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function dg(e) {
  let [t, n] = (0, K.useState)(!1),
    r = x(),
    i = Ln();
  return (
    (0, K.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(Bn(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
    t
  );
}
var fg = `WYXlhoxwBlU-`,
  Z = `Ypf4QLCxqQU-`,
  pg = `jP-Qr-tpETg-`,
  mg = `triBTPpfZNQ-`,
  hg = `Ep0wQ-6tJLw-`,
  gg = `-Rp0JgQXMoA-`,
  _g = `QWDBAVIUpho-`,
  vg = `JAphvRffM9M-`,
  yg = `FQQL32BdomI-`,
  bg = `xNRz-0kPOeE-`,
  xg = `-F6L5ywkZiU-`,
  Sg = `_4eS9H8fFOdo-`,
  Cg = `_7fjzkXY-Nhs-`,
  wg = `qNcrltVSVzI-`,
  Tg = `A-4nfbw4-fY-`,
  Eg = `oe2Jr-slLMU-`,
  Dg = `DGZ5Ptl37g4-`,
  Og = `zstB61TOiBA-`,
  kg = `-ZEsfMgRePw-`,
  Ag = `P-N-CSZ-VX8-`,
  jg = `aZng9sDwNZg-`,
  Mg = `x80z1JoR9dc-`,
  Ng = `X-2r-tUH1gQ-`,
  Pg = `-A11cjkYCU8-`,
  Fg = `_10gRNaJtPOU-`,
  Ig = `UskT6FngUB8-`,
  Lg = `L03Y6ydPSDM-`,
  Rg = `rX8DGzBU5pU-`,
  zg = `_8mKyAzWvx8I-`,
  Bg = `RfxR9kxm2-o-`,
  Vg = `_3EpVljmp8Bg-`,
  Hg = `h1-hm2PiNH0-`,
  Ug = `ruaMViMLvdA-`;
function Wg(e) {
  let {
    capsules_per_row: t,
    is_generic: n,
    is_generic_trailer: r,
    is_event_dash_row: i,
    is_trailer_carousel: a,
    is_spotlights: o,
    is_item_browser: s,
    is_maincap: c,
    is_expanded_maincap: l,
    is_expanded_display: u,
    show_auto_advance_bar: d,
  } = e;
  if (!t) return null;
  if (n)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsx)(`div`, {
        className: pg,
        children: (0, q.jsx)(`div`, { className: mg }),
      }),
    });
  if (r)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsx)(`div`, {
        className: hg,
        children: (0, q.jsx)(`div`, { className: mg }),
      }),
    });
  if (a)
    return (0, q.jsxs)(Gg, {
      children: [
        (0, q.jsxs)(`div`, {
          className: Pg,
          children: [
            (0, q.jsx)(`div`, {
              className: Fg,
              children: (0, q.jsx)(`div`, { className: mg }),
            }),
            (0, q.jsx)(`div`, {
              className: Ig,
              children: (0, q.jsx)(`div`, { className: mg }),
            }),
          ],
        }),
        d &&
          (0, q.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, q.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (i)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsxs)(`div`, {
        className: Og,
        children: [
          (0, q.jsx)(`div`, { className: W(kg, Z) }),
          (0, q.jsxs)(`div`, {
            className: W(Ag),
            children: [
              (0, q.jsx)(`div`, { className: W(jg, Z) }),
              (0, q.jsx)(`div`, { className: W(Mg, Z) }),
              (0, q.jsx)(`div`, { className: W(Ng, Z) }),
            ],
          }),
        ],
      }),
    });
  if (o)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsxs)(`div`, {
        className: Eg,
        children: [
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsxs)(`div`, {
            className: Dg,
            children: [
              (0, q.jsx)(`div`, { className: Z }),
              (0, q.jsx)(`div`, { className: Z }),
            ],
          }),
        ],
      }),
    });
  if (c)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsxs)(`div`, {
        className: W({ [Bg]: !0, [void 0]: l }),
        children: [
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsxs)(`div`, {
            className: W(Ag),
            children: [
              (0, q.jsx)(`div`, { className: W(jg, Z) }),
              (0, q.jsx)(`div`, { className: W(Mg, Z) }),
              (0, q.jsx)(`div`, { className: W(Vg, Z) }),
              (0, q.jsx)(`div`, { className: W(Hg, Z) }),
              (0, q.jsx)(`div`, { className: W(Ug, Z) }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, q.jsx)(Gg, {
      children: (0, q.jsxs)(`div`, {
        className: Lg,
        children: [
          (0, q.jsx)(`div`, { className: W(Rg, Z) }),
          (0, q.jsx)(`div`, { className: W(zg, Z) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, q.jsx)(
          rt,
          {
            className: yg,
            focusable: !0,
            children: (0, q.jsx)(`div`, { className: Z }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, q.jsx)(Gg, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, q.jsx)(Gg, {
          children: (0, q.jsx)(`div`, {
            className: vg,
            children: (0, q.jsx)(`div`, { className: Z }),
          }),
        })
      : t[0] == 4
        ? (0, q.jsx)(Gg, {
            children: (0, q.jsxs)(`div`, {
              className: _g,
              children: [
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
              ],
            }),
          })
        : (0, q.jsx)(Gg, {
            children: (0, q.jsxs)(`div`, {
              className: gg,
              children: [
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, q.jsx)(Gg, {
            children: (0, q.jsxs)(`div`, {
              className: bg,
              children: [
                (0, q.jsxs)(`div`, {
                  className: W(xg, Cg),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: W(xg, Cg),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
        : (0, q.jsx)(Gg, {
            children: (0, q.jsxs)(`div`, {
              className: bg,
              children: [
                (0, q.jsxs)(`div`, {
                  className: W(xg, Sg),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: W(xg, Cg),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
      : (0, q.jsx)(Gg, {
          children: (0, q.jsxs)(`div`, {
            className: wg,
            children: [
              (0, q.jsxs)(`div`, {
                className: W(xg, Sg),
                children: [
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: W(xg, Cg),
                children: [
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: W(xg, Tg),
                children: [
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                ],
              }),
            ],
          }),
        });
}
function Gg(e) {
  return (0, q.jsx)(rt, {
    className: W(fg, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function Kg(e) {
  let [t, n] = (0, K.useState)(void 0),
    { data: r } = P(e),
    { data: i } = Lt(e),
    a = x(),
    o = Ln();
  return (
    (0, K.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(Dn(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function qg(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(Jg, { id: t }) : null;
}
function Jg(e) {
  let { id: t } = e,
    n = Kg(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: mu,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(nO, { tagid: e.tagid, className: hu }, `tag_` + e.tagid),
          ),
      })
    : null;
}
var Yg = `pE3kiYj-T9c-`,
  Xg = `bXqn3-4kGc8-`,
  Zg = `bNGFzJt9CmI-`,
  Qg = `vE1beFyJ7fE-`,
  $g = `jLH2MgXW2QA-`,
  e_ = `dGNTZWr-al8-`,
  t_ = `_8aFotqvmohI-`,
  n_ = `sjibpkgu4sc-`,
  r_ = `I09IQjtbMSg-`,
  i_ = `C4-YRfvAL7Q-`;
async function a_(e, t) {
  let n = `steam://run/` + e;
  z.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      o_(e, n, t));
}
async function o_(e, t, n) {
  console.log(`prompting for`, n);
  let r = z.STORE_BASE_URL + `about/`;
  bt(
    (0, q.jsx)(s_, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var s_ = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, q.jsx)($t, {
    onEscKeypress: t,
    className: Yg,
    children: (0, q.jsxs)(wn, {
      children: [
        (0, q.jsxs)(kr, { children: [` `, L(`#GotSteam_Title`), ` `] }),
        (0, q.jsxs)(Et, {
          children: [
            (0, q.jsx)(St, {
              children: Dr(
                `#GotSteam_PromptWithDownloadLink`,
                (0, q.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: Xg,
                  children: L(`#GotSteam_DownloadLinkText`),
                }),
                (0, q.jsx)(`span`, { className: Zg, children: e.strGameName }),
              ),
            }),
            (0, q.jsxs)(`div`, {
              className: Qg,
              children: [
                (0, q.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: W($g, e_),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: t_,
                      children: [` `, L(`#GotSteam_Yes`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: n_,
                      children: [` `, L(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, q.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: $g,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: t_,
                      children: [` `, L(`#GotSteam_No`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: n_,
                      children: [` `, L(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: r_,
              children: [
                (0, q.jsx)(rr, { className: i_ }),
                L(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function c_(e) {
  let { appid: t, bIsMuted: n } = e,
    r = rc(t),
    i = Wa(t),
    { data: a } = P(r),
    { mutate: o } = nf(r),
    s = (e) => {
      (e.preventDefault(), i ? a_(t, a?.name) : o());
    },
    c = W($l, n && void 0, i ? eu : tu);
  return (0, q.jsx)(`div`, {
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
function l_(e, t) {
  let n = kn(),
    r = Ct(),
    i = De(gl(e, t));
  return { snr: Ke(n), strStoreURL: Jt(i, n, r) };
}
function u_(e) {
  return e
    ? { type: `replay`, gid: e }
    : U.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: Yn(Mn) };
}
var d_ = K.createContext({ cartID: void 0 });
function f_() {
  return K.useContext(d_).cartID || u_();
}
function p_(e) {
  return e.type === `account`;
}
function m_(e) {
  return e.type === `anonymous`;
}
var h_ = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...h_ }, { ...h_ });
var g_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.validation_failure || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            validation_failure: { n: 1, d: 0, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartValidationDetails`;
    }
  },
  __ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_gift || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_gift: { n: 1, br: A.readBool, bw: k.writeBool },
            is_private: { n: 2, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItemFlags`;
    }
  },
  v_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            type: { n: 2, br: A.readEnum, bw: k.writeEnum },
            packageid: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            bundleid: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            is_valid: { n: 8, br: A.readBool, bw: k.writeBool },
            validation_details: { n: 9, c: g_ },
            time_added: { n: 10, br: A.readUint32, bw: k.writeUint32 },
            price_when_added: { n: 11, c: xe },
            gift_info: { n: 12, c: ye },
            flags: { n: 13, c: __ },
            gidcoupon_applied: {
              n: 14,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItem`;
    }
  },
  y_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_items: { n: 1, c: v_, r: !0, q: !0 },
            subtotal: { n: 2, c: xe },
            is_valid: { n: 3, br: A.readBool, bw: k.writeBool },
            validation_details: { n: 4, c: g_ },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartContents`;
    }
  },
  b_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Request`;
    }
  },
  x_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: y_ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Response`;
    }
  },
  S_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: A.readString, bw: k.writeString },
            items: { n: 2, c: C_, r: !0, q: !0 },
            navdata: { n: 3, c: Ya },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  C_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            bundleid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            gift_info: { n: 10, c: ye },
            flags: { n: 11, c: __ },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  w_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_ids || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: A.readUint64String,
              pbr: A.readPackedUint64String,
              bw: k.writeRepeatedUint64String,
            },
            cart: { n: 2, c: y_ },
            replaced_packages: {
              n: 3,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              n: 4,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
              n: 5,
              br: A.readUint32,
              bw: k.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  T_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            user_country: { n: 2, br: A.readString, bw: k.writeString },
            gift_info: { n: 10, c: ye },
            flags: { n: 11, c: __ },
            apply_gidcoupon: {
              n: 12,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  E_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: y_ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  D_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            user_country: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  O_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: y_ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  k_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            user_country: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  A_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: y_ } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Response`;
    }
  },
  j_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Request`;
    }
  },
  M_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_DeleteCart_Response`;
    }
  },
  N_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  P_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { line_items: { n: 1, c: F_, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  F_ = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_item_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            coupons: { n: 2, c: Ce, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  I_;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, C(b_, t, n), x_, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, C(S_, t, n), w_, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, C(T_, t, n), E_, {
      ePrivilege: 1,
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, C(D_, t, n), O_, {
      ePrivilege: 1,
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      C(k_, t, n),
      A_,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, C(j_, t, n), M_, {
      ePrivilege: 1,
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, C(N_, t, n), P_, {
      ePrivilege: 1,
    });
  }
  e.GetRelevantCoupons = s;
})((I_ ||= {}));
function L_(e) {
  return p_(e) ? e.type : e.gid;
}
function R_(e) {
  return [`shopping_cart`, L_(e), U.accountid];
}
function z_(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function B_(e, t, n) {
  (e.setQueryData(R_(t), n), z_(e));
}
async function V_(e, t, n, r, i) {
  let a = new FormData();
  (t &&
    (t.length === 1
      ? a.set(`subid`, t[0].toString())
      : t.forEach((e) => a.append(`subid[]`, e.toString()))),
    n && a.set(`bundleid`, n.toString()),
    (r || i) &&
      (a.set(`isgift`, `1`), i && a.set(`gifteeaccountid`, i.toString())),
    a.set(`action`, `add_to_cart`));
  let o = await fetch(`${B.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: a,
  });
  if (!o.ok) throw Error(`Failed to fetch /cart/addtocart`);
  let s = await o.json();
  return [s?.success ? 1 : 2, s?.contents];
}
async function H_(e, t, n, r) {
  let i = qt.Init(S_);
  if (!n || n.length === 0)
    return (
      console.error(`No valid Package or Bundle provided to add to cart`),
      [8, null]
    );
  (n.forEach((e) => {
    let t = i.Body().add_items();
    (e.packageid
      ? t.set_packageid(e.packageid)
      : e.bundleid
        ? t.set_bundleid(e.bundleid)
        : console.error(
            `Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart`,
          ),
      e.bIsGift &&
        (t.flags(!0).set_is_gift(!0),
        e.nAccountIDGiftee &&
          t.gift_info(!0).set_accountid_giftee(e.nAccountIDGiftee)));
  }),
    r && i.Body().set_navdata(Ya.fromObject(Mr(r))),
    i.Body().set_user_country(t));
  let a = await I_.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function U_(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : W_(e)))
        .filter(qr)),
    t
  );
}
function W_(e) {
  let t = { price_when_added: {}, flags: {} };
  return (
    (t.line_item_id = e.gidlineitem),
    e.bundle_item?.bundleid
      ? ((t.bundleid = e.bundle_item.bundleid),
        (t.type = 2),
        e.bundle_item.is_gift &&
          ((t.flags.is_gift = e.bundle_item.is_gift),
          (t.gift_info = e.bundle_item.gift_info)))
      : e.package_item &&
        ((t.packageid = e.package_item.packageid),
        (t.price_when_added.amount_in_cents =
          e.package_item.costwhenadded?.amount ?? ``),
        (t.price_when_added.currency_code =
          e.package_item.costwhenadded?.currencycode ?? 0),
        (t.type = 1),
        e.package_item.is_gift &&
          ((t.flags.is_gift = e.package_item.is_gift),
          (t.gift_info = e.package_item.gift_info))),
    t
  );
}
function G_(e, t, n, r, i) {
  return K_(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function K_(e, t) {
  let n = f_(),
    r = xr(),
    i = x(),
    { storeBrowseContext: a, dataLoader: o } = gr(),
    { country: s } = a,
    c = mr(t);
  return u({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (p_(n)) {
        let [a, o] = await H_(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), B_(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (m_(n)) {
        let a = e.map((e) => e.packageid).filter(qr),
          o = e.map((e) => e.bundleid).filter(qr);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await V_(
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
            B_(i, n, U_(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(Bn(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(cr(o, r)), i.prefetchQuery(Wn(o, r)));
          },
        );
      })();
    },
  });
}
async function q_(e, t) {
  let n = qt.Init(sn);
  (n.Body().set_context(Ft(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await ir.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function J_(e) {
  let t = $_(xr());
  return f(Z_(t, e));
}
var Y_ = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function X_(e) {
  let t = $_(xr()),
    n = ei({ queries: e.map((n) => ({ ...Z_(t, n), enabled: e.length > 0 })) }),
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
function Z_(e, t) {
  return { queryKey: Q_(t), queryFn: async () => e.load(t), enabled: !!t };
}
function Q_(e) {
  return [`hardwaredetail`, e];
}
function $_(e) {
  return _e(`HardwareDetailLoader`, () => ev(e));
}
function ev(e) {
  return new ll.default(async (t) => {
    let n = await q_(e, t),
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
var tv = { high_pending_orders: !1, inventory_available: !0 };
function nv(e) {
  let { data: t } = P(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = J_(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : tv) : null;
}
var rv = `wvEYeGaFmt0-`,
  iv = `GW1050ijiP0-`;
function av(e) {
  let { id: t, className: n } = e,
    r = kn(),
    { data: i } = P(t),
    { data: a } = ar(t),
    { data: o } = Br(t),
    s = nv(t),
    { bIsOwned: c } = qa(t),
    l = Be(i),
    u = (0, K.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          cn(window, `steam://run/${e}`));
      }
    }, [i]);
  if (!i || !a || !o || i.type == 8) return null;
  let d =
    i.is_free ||
    (o.final_price_in_cents != null && o.final_price_in_cents == `0`) ||
    (o.discount_pct && o.discount_pct >= 100);
  if (i.item_type == 1) {
    if (i.type == 10) {
      if (!s) return (0, q.jsx)(we, { size: `small`, position: `center` });
      if (!s.inventory_available)
        return (0, q.jsx)(`div`, {
          className: W(iv, n),
          children: (0, q.jsxs)(`span`, {
            children: [` `, R.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (z.IN_CLIENT || Qe() != `store`) {
        let e = `${z.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, q.jsx)(`div`, {
          onClick: (t) => cn(t, e),
          className: W(rv, n),
          children: (0, q.jsx)(`span`, {
            children: R.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = En(`${z.STORE_BASE_URL}freelicense/addfreelicense`, r);
        return (0, q.jsxs)(`form`, {
          action: e,
          method: `POST`,
          children: [
            (0, q.jsx)(`input`, {
              type: `hidden`,
              name: `subid`,
              value: o.packageid,
            }),
            (0, q.jsx)(`input`, {
              type: `hidden`,
              name: `sessionid`,
              value: jn(),
            }),
            (0, q.jsx)(`button`, {
              className: W(rv, n),
              type: `submit`,
              children: R.Localize(`#EventDisplay_CallToAction_AddToAccount`),
            }),
          ],
        });
      }
    }
    if ((c || d) && !i.is_coming_soon) {
      let e = R.Localize(`#EventDisplay_CallToAction_PlayNowForFree`);
      return (
        c
          ? (e = R.Localize(`#EventDisplay_CallToAction_PlayNow`))
          : i.is_free_temporarily &&
            (e = R.Localize(`#EventDisplay_CallToAction_AddToAccount`)),
        (0, q.jsx)(`div`, {
          className: W(rv, n),
          onClick: u,
          children: (0, q.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, q.jsx)(`a`, {
        href: l,
        className: W(rv, n),
        children: R.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, q.jsx)(ov, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function ov(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = kn(),
    { mutate: a } = G_(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, q.jsx)(`div`, {
    className: W(rv, t),
    onClick: () => a(),
    children: (0, q.jsx)(`span`, { children: R.Localize(`#Store_AddToCart`) }),
  });
}
var sv = `_8xhMURZRDBY-`;
function cv(e) {
  let { id: t, className: n } = e,
    { data: r } = P(t);
  if (!r) return null;
  let i =
      r.related_items?.demo_appid && r.related_items.demo_appid
        ? r.related_items.demo_appid
        : [],
    a = i.length > 0,
    o = a || r.type === 1,
    s = o
      ? R.Localize(`#Sale_InstallDemo_ttip`, r.name || ``)
      : a
        ? R.Localize(`#Sale_CannotInstallDemo_ttip`, r.name || ``)
        : R.Localize(`#Loading`);
  if (B.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, q.jsx)(`div`, {
        className: n,
        children: (0, q.jsx)(XD, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, q.jsx)(av, { id: t, className: n })
    : (0, q.jsx)(Gn, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && a_(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: W(n, sv, !o && `gpIFsnR2ZGs-`),
        children: o
          ? R.Localize(`#Sale_InstallDemo`)
          : R.Localize(`#Sale_DemoNotFound`),
      });
}
function lv(e) {
  let {
      id: t,
      bShowDemoButton: n,
      bShowPurchaseOptionsButton: r,
      fnOnPurchaseOptionsClick: i,
      bHidePrice: a,
      bShowDeckCompatibilityDialog: o,
      eHardwareCompatibilityDisplay: s,
      className: c,
      bShowCartButton: l,
    } = e,
    { data: u } = P(t),
    { data: d } = ar(t),
    { data: f } = nt(t),
    { bIsOwned: p } = qa(t),
    [m, h] = Th(o, s);
  if (!u) return null;
  let g =
      (u.type === 1 && !d?.is_coming_soon) ||
      (u.related_items?.demo_appid && u.related_items?.demo_appid.length > 0),
    _ = Yr(u.type),
    v = n && _ && g,
    y = null;
  if (!p && f?.is_free_to_keep && f?.free_to_keep_ends) {
    let e = f.free_to_keep_ends,
      t = L(
        `#Sale_default_label_Free_Promo_Description_Short`,
        _r(e) + ` @ ` + zn(e, { bForce24HourClock: !1 }),
      );
    y = (0, q.jsxs)(`div`, {
      className: ju,
      children: [
        t,
        (0, q.jsx)(fr, {
          tooltip: L(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: W(nu, c),
    children: [
      y,
      (0, q.jsxs)(`div`, {
        className: xu,
        children: [
          !!v && (0, q.jsx)(cv, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            u.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!r || u.is_free) &&
                  (0, q.jsx)(uv, { fnOnPurchaseOptionsClick: i }),
                !(!l || u.is_free) &&
                  (0, q.jsx)(av, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, q.jsx)(Gh, { id: t }),
          m && (0, q.jsx)(ph, { id: t, compatibility: h }),
        ],
      }),
    ],
  });
}
function uv(e) {
  return (0, q.jsx)(`div`, {
    className: Su,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: L(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function dv(e, t, n, r, i, a) {
  if (!n) return;
  if (!wh(e.item_type)) {
    bn(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let o = En(`${gl(e, r)}${i ? `?${i}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = Er(e) || window;
      a ? a(e) : o.startsWith(`steam://`) || (t.location.href = Rt(o));
    },
    onOKActionDescription: R.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function fv(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: a,
      bUseSubscriptionLayout: o,
      bHidePlatforms: s,
      bHideContainedApps: c,
      bAllowTwoLinesForHeader: l,
      bShowReviewSummary: u,
      bShowDeckCompatibilityDialog: d,
      eHardwareCompatibilityDisplay: f,
      bAutoFocus: p,
      fnOnClickOverride: m,
      bIsMarketingMessage: h,
      bPreferAssetWithoutOverride: g,
    } = e,
    _ = Ph(t, n),
    [v, y] = (0, K.useState)(!1),
    ee = kn(),
    { data: b, isPending: x } = st(_),
    { data: S } = nt(_),
    { data: te } = ar(_),
    { data: ne } = Va(),
    re = ec(_),
    ie = (0, K.useRef)(null),
    [ae, oe] = (0, K.useState)(!1),
    se = dn();
  (0, K.useEffect)(() => {
    ie.current && oe(ie.current.offsetWidth < 370);
  }, [ie]);
  let ce = (0, K.useMemo)(
      () => (i && b && ml(b) ? { appid: hl(b)[0] } : _),
      [i, _, b],
    ),
    { strStoreURL: le, snr: ue } = l_(b, i);
  if (!b)
    return x
      ? (0, q.jsx)(Wg, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let de = b.included_appids?.length || 0,
    fe = b.included_appids?.filter((e) => ne?.has(e))?.length || 0,
    pe = b.item_type == 2 && !!S?.must_purchase_as_set,
    me = !c && de > 1,
    he = b.item_type == 1 && de == 1,
    ge = b.item_type == 0 || he,
    _e = he && b.appid,
    ve = b.name || ``,
    ye = Vd(te, S),
    be = se || !te?.is_coming_soon || ye,
    [xe, Se] = Th(d, f);
  return (0, q.jsxs)(rt, {
    className: W({ [fd]: !0, [void 0]: l, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Gr.PREFERRED_CHILD,
    autoFocus: p,
    navKey: `preview_widget_` + Qt(_),
    children: [
      (0, q.jsx)(Eh, {
        appid: ge && `appid` in _ ? _.appid : void 0,
        children: (0, q.jsxs)(Gt, {
          onClick: h ? m : void 0,
          className: W({ [jl]: !0, [Nl]: !0, [Il]: h }),
          ...dv(b, ee, se, !!i, void 0, m),
          preferredFocus: me,
          children: [
            (0, q.jsx)(`div`, {
              className: W(Rl),
              children: (0, q.jsx)(pv, {
                id: ce,
                strURL: le,
                children: (0, q.jsxs)(`div`, {
                  className: Wl,
                  children: [
                    (0, q.jsx)(lg, { appids: re }),
                    (0, q.jsx)(bd, {
                      id: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: g,
                    }),
                    (0, q.jsx)($f, { id: _ }),
                    (0, q.jsx)(jd, {
                      id: _,
                      active: _ && v,
                      bIsHoverMode: !0,
                      eGrowOnActivate: Ad.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: W({ [Ll]: !0, [uu]: me }),
              children: [
                !(!ge || m) &&
                  (0, q.jsx)(Rp, {
                    id: _,
                    classOverride: W(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: ue,
                  }),
                (0, q.jsx)(`div`, {
                  className: Zl,
                  children: (0, q.jsx)(`a`, {
                    href: m ? void 0 : le,
                    target: z.IN_CLIENT ? void 0 : `_blank`,
                    onClick: m,
                    children: (0, q.jsx)(`div`, {
                      className: W(zl, `StoreSaleWidgetTitle`),
                      children: ve,
                    }),
                  }),
                }),
                !me && (0, q.jsx)(qg, { id: _ }),
                (0, q.jsxs)(`div`, {
                  className: du,
                  ref: ie,
                  children: [
                    ge && (0, q.jsx)(mv, { id: _ }),
                    !me &&
                      !s &&
                      _ &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(Hh, {
                            id: _,
                            bMinimizePlatforms: ae,
                            bHideWindows: ae,
                          }),
                          !!(xe && b.item_type == 0) &&
                            (0, q.jsx)(cf, {
                              eHWCompat: Se,
                              className: `tUIs-i3NWoU-`,
                              id: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !me &&
                  u &&
                  _ &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(kp, { id: _ }),
                  }),
                me &&
                  _ &&
                  (0, q.jsx)(Bh, {
                    id: _,
                    bHideInLibraryApps: !pe && b.item_type == 2 && fe < de,
                  }),
                !!ge && (0, q.jsx)(hv, { id: _ }),
                m
                  ? (0, q.jsx)(`div`, {
                      className: nu,
                      children: (0, q.jsx)(`div`, {
                        className: xu,
                        children: (0, q.jsx)(Gh, { id: _ }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        o && ge && _e
                          ? (0, q.jsx)(c_, { appid: _e, bIsMuted: !!v })
                          : (0, q.jsx)(lv, {
                              id: _,
                              bShowDemoButton: r,
                              bHidePrice: a,
                              bHideWishlistButton: be,
                              eHardwareCompatibilityDisplay: Se,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: iu,
                  children: (0, q.jsx)(bd, {
                    id: _,
                    bPreferAssetWithoutOverride: g,
                    imageType: `header`,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      !!(e.strReason && e.strReason.length > 0) &&
        (0, q.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function pv(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(Mh, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function mv(e) {
  let { id: t } = e,
    { data: n } = ar(t);
  return n ? (0, q.jsx)(`div`, { className: pu, children: Ld(n) }) : null;
}
function hv(e) {
  let { id: t } = e,
    { data: n } = st(t),
    { data: r } = nt(t),
    { data: i } = nn(t),
    { data: a } = Va();
  if (!n || !i || !i.short_description || !a) return null;
  let o = r?.discount_pct || 0,
    s = n.included_appids?.length || 0,
    c = n.included_appids?.filter((e) => a?.has(e))?.length || 0,
    l = i.short_description,
    u = n.item_type == 1 && s == 1,
    d = n.item_type == 2 && !!r?.must_purchase_as_set;
  return (
    (n.item_type == 2 || (n.item_type == 1 && !u)) &&
      (l =
        !d && c > 0 && c < s
          ? L(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? L(`#Sale_BundleSave_WithDiscount`, o, s)
            : L(`#Sale_BundleSave`, s)),
    (0, q.jsx)(`div`, {
      className: W(gu, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: gd,
              children: Kt(
                l,
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
                (0, q.jsx)(`i`, {}),
              ),
            })
          : l,
    })
  );
}
function gv(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? Ju : ``,
    { storeItemDefaultInfo: o, storeItemAsset: s } = iO(t, `vertical`, r),
    [c, l] = K.useState(0);
  if (!o || !s) return (0, q.jsx)(`div`, { className: qu });
  let { strStoreVerticalURL: u, strLibraryVerticalURL: d } = Sd(s, o);
  if (u && (!n || !d))
    return (0, q.jsxs)(`div`, {
      className: W(qu, `HeroCapsuleImageContainer`),
      children: [
        (0, q.jsx)(`img`, { src: u, className: Zu, alt: o.name }),
        o.type == 4 &&
          (0, q.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${B.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (d)
    return (0, q.jsxs)(`div`, {
      className: W(au, Yu, n ? Xu : ``, a),
      children: [
        (0, q.jsx)(`div`, {
          className: ou,
          style: { backgroundImage: `url(${d})` },
        }),
        (0, q.jsx)(`img`, { src: d, className: Zu, alt: o.name }),
      ],
    });
  let f = xd(s, !0),
    p = f.length - 1,
    m = (e) => {
      let t = f.indexOf(e);
      t >= p && t < f.length - 1 && l(t + 1);
    };
  if (c < f.length) {
    let e = f[c];
    return (0, q.jsxs)(`div`, {
      className: W(au, a),
      children: [
        (0, q.jsx)(`div`, {
          className: ou,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, q.jsx)(kl, {
          lazyLoad: !0,
          srcs: f,
          className: Zu,
          alt: o.name,
          onImageError: m,
        }),
      ],
    });
  }
  return (0, q.jsx)(`div`, { className: qu });
}
var Q = {};
((Q.arabic = () =>
  O(() => import(`./saletech_arabic.js`), [], import.meta.url)),
  (Q.brazilian = () =>
    O(() => import(`./saletech_brazilian.js`), [], import.meta.url)),
  (Q.bulgarian = () =>
    O(() => import(`./saletech_bulgarian.js`), [], import.meta.url)),
  (Q.czech = () => O(() => import(`./saletech_czech.js`), [], import.meta.url)),
  (Q.danish = () =>
    O(() => import(`./saletech_danish.js`), [], import.meta.url)),
  (Q.dutch = () => O(() => import(`./saletech_dutch.js`), [], import.meta.url)),
  (Q.english = () =>
    O(() => import(`./saletech_english.js`), [], import.meta.url)),
  (Q.finnish = () =>
    O(() => import(`./saletech_finnish.js`), [], import.meta.url)),
  (Q.french = () =>
    O(() => import(`./saletech_french.js`), [], import.meta.url)),
  (Q.german = () =>
    O(() => import(`./saletech_german.js`), [], import.meta.url)),
  (Q.greek = () => O(() => import(`./saletech_greek.js`), [], import.meta.url)),
  (Q.hungarian = () =>
    O(() => import(`./saletech_hungarian.js`), [], import.meta.url)),
  (Q.indonesian = () =>
    O(() => import(`./saletech_indonesian.js`), [], import.meta.url)),
  (Q.italian = () =>
    O(() => import(`./saletech_italian.js`), [], import.meta.url)),
  (Q.japanese = () =>
    O(() => import(`./saletech_japanese.js`), [], import.meta.url)),
  (Q.koreana = () =>
    O(() => import(`./saletech_koreana.js`), [], import.meta.url)),
  (Q.latam = () => O(() => import(`./saletech_latam.js`), [], import.meta.url)),
  (Q.malay = () => O(() => import(`./saletech_malay.js`), [], import.meta.url)),
  (Q.norwegian = () =>
    O(() => import(`./saletech_norwegian.js`), [], import.meta.url)),
  (Q.polish = () =>
    O(() => import(`./saletech_polish.js`), [], import.meta.url)),
  (Q.portuguese = () =>
    O(() => import(`./saletech_portuguese.js`), [], import.meta.url)),
  (Q.romanian = () =>
    O(() => import(`./saletech_romanian.js`), [], import.meta.url)),
  (Q.russian = () =>
    O(() => import(`./saletech_russian.js`), [], import.meta.url)),
  (Q.sc_schinese = () =>
    O(() => import(`./saletech_sc_schinese.js`), [], import.meta.url)),
  (Q.schinese = () =>
    O(() => import(`./saletech_schinese.js`), [], import.meta.url)),
  (Q.spanish = () =>
    O(() => import(`./saletech_spanish.js`), [], import.meta.url)),
  (Q.swedish = () =>
    O(() => import(`./saletech_swedish.js`), [], import.meta.url)),
  (Q.tchinese = () =>
    O(() => import(`./saletech_tchinese.js`), [], import.meta.url)),
  (Q.thai = () => O(() => import(`./saletech_thai.js`), [], import.meta.url)),
  (Q.turkish = () =>
    O(() => import(`./saletech_turkish.js`), [], import.meta.url)),
  (Q.ukrainian = () =>
    O(() => import(`./saletech_ukrainian.js`), [], import.meta.url)),
  (Q.vietnamese = () =>
    O(() => import(`./saletech_vietnamese.js`), [], import.meta.url)));
async function _v(e) {
  if (Q[e]) return await Q[e]();
}
var vv = Fr(_v);
function yv(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, q.jsx)(fn, {
    strTitle: vv.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || vv.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: R.Localize(`#Button_OK`),
    onOK: () => {
      (_l(), t());
    },
  });
}
function bv(e) {
  let [t, n, r] = jr();
  return {
    elDialogElement: (0, q.jsx)(At, {
      active: t,
      children: (0, q.jsx)(yv, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function xv(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = bv(n);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(gt, {
        onClick: i,
        children: t || R.Localize(`#Login_SignIn`),
      }),
      r,
    ],
  });
}
var Sv =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  Cv = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  wv = [
    `img`,
    `carousel`,
    `previewyoutube`,
    `looping_media`,
    `roomeffect`,
    `video`,
    `vod`,
    `trailer`,
    `youtubeorvideo`,
    `docimg`,
  ],
  Tv = Sv.filter((e) => !wv.includes(e)),
  Ev = [
    `pullquote`,
    `price`,
    `pricesavings`,
    `video`,
    `youtubeorvideo`,
    `speaker`,
    `trailer`,
    `vod`,
    `giveawayeligible`,
    `claimitem`,
    `packagepurchaseable`,
    `actiondialog`,
    `claimitem`,
    `packagepurchaseable`,
    `actiondialog`,
    `uploadfilebutton`,
    `docimg`,
    `meetsteamsessiongroup`,
  ];
function Dv(e) {
  let { bIncludeMedia: t = !1, bIncludeValveOnly: n = !1 } = e,
    r = new Set();
  return (
    t || wv.forEach((e) => r.add(e)),
    n || Ev.forEach((e) => r.add(e)),
    Sv.filter((e) => !r.has(e))
  );
}
var Ov = void 0;
function kv(e) {
  return e
    ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`)
    : ((Ov ||= kv(Sv)), Ov);
}
function Av(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + kv(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function jv(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + kv(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var Mv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            active: { n: 2, br: A.readBool, bw: k.writeBool },
            start_time: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            end_time: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            app_discounts: { n: 5, c: Nv, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            groups: { n: 7, c: Pv, r: !0, q: !0 },
            internal_name: { n: 8, br: A.readString, bw: k.writeString },
            localization: { n: 9, c: Fv },
            reveal_time: { n: 10, br: A.readUint32, bw: k.writeUint32 },
            release_date_min: { n: 11, br: A.readUint32, bw: k.writeUint32 },
            winner_appid: { n: 12, br: A.readUint32, bw: k.writeUint32 },
            flag: { n: 13, br: A.readEnum, bw: k.writeEnum },
            release_date_max: { n: 14, br: A.readUint32, bw: k.writeUint32 },
            item_type: { n: 15, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  Nv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            discount: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  Pv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            group_name: { n: 2, br: A.readString, bw: k.writeString },
            app_discounts: { n: 3, c: Nv, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  Fv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: A.readString, bw: k.writeString },
            title_linebreak: { n: 2, br: A.readString, bw: k.writeString },
            title_award: { n: 3, br: A.readString, bw: k.writeString },
            award_description: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  Iv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: A.readString, bw: k.writeString },
            sale_appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  Lv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: Mv, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  Rv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            communityitemid: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  zv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  Bv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: Rv, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  Vv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            sale_appid: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Hv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: Rv, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  Uv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            last_updated: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Wv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  Gv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Uv, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  Kv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            code: { n: 2, br: A.readFixed64String, bw: k.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  qv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            nominated_id: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            source: { n: 3, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  Jv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Uv, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  Yv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  Xv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: Zv, r: !0, q: !0 },
            suggested_events: { n: 2, c: Qv, r: !0, q: !0 },
            suggested_apps: { n: 3, c: $v, r: !0, q: !0 },
            debug_query: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  Zv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            playtime: { n: 2, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Qv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            event_gid: {
              n: 2,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            appid: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  $v = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  ey = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: A.readBool, bw: k.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  ty = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: A.readFixed64String, bw: k.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  ny;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, C(Iv, t, n), Lv, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, C(Vv, t, n), Hv, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, C(zv, t, n), Bv, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserVotes = r;
})((ny ||= {}));
var ry;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, C(Wv, t, n), Gv, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, C(Kv, t, n), Gv, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, C(qv, t, n), Jv, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      C(Yv, t, n),
      Xv,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, C(ey, t, n), ty, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetNominationShareLink = a;
})((ry ||= {}));
var iy = [`show`, `hide`, `remove`],
  ay = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  };
function oy(e) {
  return e !== 28;
}
function sy(e) {
  switch (e) {
    case 29:
    case 27:
    case 2:
    case 4:
    case 5:
    case 6:
    case 8:
    case 7:
    case 9:
    case 11:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 35:
    case 25:
    case 26:
    case 31:
    case 32:
    case 1:
    case 34:
      return !0;
  }
  return !1;
}
function cy(e, t) {
  return !(e == 12 || e == 36 || (t && t.indexOf(`curator`) != -1));
}
function ly(e) {
  return [14, 10, 15, 32].includes(e);
}
function uy(e) {
  let t = `#PartnerEvent_` + e,
    n = R.Localize(t);
  return n == t ? R.Localize(`#PartnerEvent_Other`) : n;
}
var dy = { bScheduleEnabled: !1, scheduleEntries: [] };
E(
  [j],
  class {
    m_eventModel;
    m_entry;
    constructor(e, t) {
      ((this.m_eventModel = e), (this.m_entry = t));
    }
    GetEventStartTime() {
      return this.m_entry.rtime_start_specific
        ? this.m_entry.rtime_start_specific
        : (this.m_eventModel.startTime ?? 0) +
            (this.m_entry.delta_from_event_start_seconds ?? 0);
    }
  }.prototype,
  `GetEventStartTime`,
  null,
);
var fy = 1e4,
  py = 99999;
function my() {
  return Math.floor(fy + Math.random() * 9e4);
}
var hy = `exploration`,
  gy = (function (e) {
    return ((e.Random = `r`), (e.Personalized = `p`), e);
  })({});
function _y(e) {
  switch (e) {
    case 32:
      return 28;
    case 34:
      return 55;
    case 45:
      return 57;
    case 2:
      return 59;
    default:
      return;
  }
}
function vy(e) {
  switch (e) {
    case 28:
      return 32;
    case 55:
      return 34;
    case 57:
      return 45;
    default:
      return;
  }
}
var yy = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
function by(e) {
  return (
    yy.some((t) => t == e.GetEventType()) &&
    !e.BHasTag(`steam_award_nomination_request`) &&
    !e.BHasTag(`curator`)
  );
}
var xy = [20, 31, 34];
function Sy(e) {
  return !xy.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var Cy = [12, 34];
function wy(e) {
  return !Cy.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var Ty = 593110,
  Ey = 221410,
  Dy = 1675200,
  Oy = 4165890,
  ky = [Ty, 766, Ey],
  Ay = [12, 34];
function jy(e) {
  return !Ay.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
function My(e, t = Ne()) {
  let n = 60 * $n.PerDay;
  return (
    e.BIsVisibleEvent(t) &&
    e.BIsOGGEvent() &&
    (e.rtime32_last_modified ?? 0) > t - n &&
    !Ny(e)
  );
}
function Ny(e) {
  return e.BHasTag(`mod_reviewed`) && !e.BHasTag(`mod_require_rereview`);
}
var Py = (function (e) {
  return (
    (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    e
  );
})({});
function Fy(e) {
  switch (e) {
    case `links`:
      return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
    case `itemdef`:
      return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
    case `contenthubspecials`:
      return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
    default:
      return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
  }
}
var Iy = `bordered`,
  Ly = (function (e) {
    return (
      (e[(e.k_EStoreFilterClauseTypeOr = 0)] = `k_EStoreFilterClauseTypeOr`),
      (e[(e.k_EStoreFilterClauseTypeAnd = 1)] = `k_EStoreFilterClauseTypeAnd`),
      (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
        `k_EStoreFilterClauseTypeStoreTag`),
      (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
        `k_EStoreFilterClauseTypeFeatureTag`),
      (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
        `k_EStoreFilterClauseTypeLanguage`),
      (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
        `k_EStoreFilterClauseTypeContentDescriptor`),
      (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
        `k_EStoreFilterClauseTypePrice`),
      (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
        `k_EStoreFilterClauseTypeAppType`),
      (e[(e.k_EStoreFilterClauseTypeOptInRegistrationTag = 8)] =
        `k_EStoreFilterClauseTypeOptInRegistrationTag`),
      e
    );
  })({}),
  Ry = (function (e) {
    return (
      (e[(e.k_ESaleTagFilter = 0)] = `k_ESaleTagFilter`),
      (e[(e.k_ELanguage = 1)] = `k_ELanguage`),
      (e[(e.k_EContentDescriptor = 2)] = `k_EContentDescriptor`),
      (e[(e.k_EUserPreference = 3)] = `k_EUserPreference`),
      (e[(e.k_EPrice = 4)] = `k_EPrice`),
      (e[(e.k_EAppType = 5)] = `k_EAppType`),
      e
    );
  })({}),
  zy = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  By = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function Vy(e) {
  e.section_type === `crosspromotesalepage` &&
    !e.sale_page_cross_promo_sales &&
    (e.sale_page_cross_promo_event_gid ||
      e.sale_page_cross_promo_clan_account_id ||
      e.sale_page_cross_promo_featured_app_tagid) &&
    ((e.sale_page_cross_promo_sales = [
      {
        event_gid: e.sale_page_cross_promo_event_gid,
        clan_account_id: e.sale_page_cross_promo_clan_account_id,
        featured_app_tagid: e.sale_page_cross_promo_featured_app_tagid,
      },
    ]),
    delete e.sale_page_cross_promo_event_gid,
    delete e.sale_page_cross_promo_clan_account_id,
    delete e.sale_page_cross_promo_featured_app_tagid);
}
var Hy = (function (e) {
    return (
      (e.Steam = `Steam`),
      (e.Facebook = `Facebook`),
      (e.Twitter = `Twitter`),
      (e.Reddit = `Reddit`),
      e
    );
  })({}),
  Uy = (function (e) {
    return (
      (e.Summary = `summary`), (e.SummaryLargeImage = `summary_large_image`), e
    );
  })({}),
  Wy =
    `sale_tag_filter.store_filter.smart_section_type.smart_section_tag.smart_section_category.smart_section_max_apps.smart_section_event_tags.smart_section_deck_compatibility.smart_section_data_source.smart_section_personalized_carousel_sort.smart_section_personalized_carousel_min_items.smart_section_personalized_carousel_randomize.smart_section_filter_by_deck_compatibility.smart_section_creator_listid.smart_section_min_discount_percent.smart_section_include_packages.smart_section_include_bundles.smart_section_include_dlc.random_from_entire_set.prioritize_discounts.store_item_filter_require_discount.store_item_filter_require_coming_soon.store_item_filter_require_released.store_item_filter_require_free.store_item_filter_require_demo.store_item_filter_require_playtest`.split(
      `.`,
    );
function Gy(e) {
  return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
}
function Ky(e) {
  return e.carousel_rows || 1;
}
function qy(e) {
  return e.cap_item_count || 0;
}
function Jy(e) {
  return e.cap_section_row_count && e.cap_section_row_count > 0
    ? e.cap_section_row_count
    : e.section_type == `trailercarousel`
      ? 1
      : e.cap_section_content
        ? 4
        : 0;
}
function Yy(e) {
  return e?.store_filter ? JSON.stringify(e.store_filter) : void 0;
}
function Xy(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
      return !0;
  }
  return !1;
}
function Zy(e) {
  switch (e) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function Qy(e) {
  switch (e) {
    case `items`:
    case `trailercarousel`:
    case `crosspromotesalepage`:
    case `creator_list`:
    case `calendar`:
    case `events`:
    case `sale_events`:
    case `contenthubspecials`:
      return !0;
  }
  return !1;
}
function $y(e, t = !1) {
  return !e || !Qy(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function eb(e) {
  return $y(e) ? e?.smart_section_type : void 0;
}
function tb(e) {
  return (
    (e.jsondata.sale_ml_recommender_delay_hours &&
      (e.startTime ?? 0) +
        e.jsondata.sale_ml_recommender_delay_hours * $n.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
var nb = 2.5;
function rb(e, t, n) {
  return !e.BIsNextFest() || !Xy(t.section_type)
    ? !1
    : n == gy.Random || tb(e) > 0;
}
function ib(e, t, n, r) {
  if (!t.next_fest_exploration_visibility || !e.BIsNextFest()) return !1;
  switch (t.next_fest_exploration_visibility) {
    case `show-only-personalized`:
      return r != gy.Personalized;
    case `show-only-personalized-available`:
      return !n;
    case `show-only-personalized-unavailable`:
      return n;
  }
  return !1;
}
function ab(e, t, n) {
  return !!(t.use_random_order || rb(e, t, n));
}
var ob = {
    capsules: [],
    events: [],
    links: [],
    localized_label: Array(32),
    localized_label_image: Array(32),
    default_label: `#Sale_default_label`,
    section_type: `unselected_empty`,
  },
  sb = { internal_type: `subscription_pricing` },
  cb = (function (e) {
    return (
      (e[(e.k_ETaggedItems = 0)] = `k_ETaggedItems`),
      (e[(e.k_EContentHub = 1)] = `k_EContentHub`),
      e
    );
  })({});
function lb(e) {
  return {
    arrowFill: e?.sale_carousel_arrow_color,
    arrowStyle: e?.sale_carousel_arrow_style,
    breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: e?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
  };
}
function ub(e, t, n) {
  ((t.library_spotlight = void 0),
    t.email_setting &&
      ((t.email_setting.locked = void 0),
      (t.email_setting.force_feature_id = void 0)),
    (t.steam_award_category_suggestion = void 0),
    (t.steam_award_category_voteids = void 0),
    (t.action_end_time = void 0),
    (t.ownership_requirement_info = void 0),
    (t.sale_use_subscription_layout = void 0),
    (t.app_right_requirement_info = void 0),
    (t.clone_from_event_gid = n),
    (t.clone_from_sale_enabled = t.bSaleEnabled),
    (t.bSaleEnabled = e == 36),
    (t.sale_discount_event_id = void 0),
    (t.valve_access_log = []),
    (t.bInvisibleGameOptIn = void 0),
    (t.rt_migrated_time = void 0),
    (t.optin_tagid || t.sale_opt_in_page_name) &&
      ((t.tagged_items = void 0),
      (t.tagged_item_filter = void 0),
      (t.auto_item_tags = void 0)),
    (t.optin_prune_tagid = void 0),
    (t.optin_tagid = void 0),
    (t.sale_opt_in_page_name = void 0),
    (t.prune_list_optin_name = void 0),
    (t.optin_only = void 0),
    (t.child_demo_appid_for_repost = void 0),
    (t.sale_vanity_id = void 0),
    (t.sale_update_landing_page_vanity_id = void 0),
    (t.automatically_push_updated_source = void 0),
    (t.country_restriction = void 0));
}
var db = {
    localized_subtitle: Array(32),
    localized_summary: Array(32),
    localized_title_image: Array(32),
    localized_capsule_image: Array(32),
    bSaleEnabled: !1,
    sale_show_creator: !1,
    sale_sections: [],
    sale_browsemore_text: ``,
    sale_browsemore_url: ``,
    sale_browsemore_color: ``,
    sale_browsemore_bgcolor: ``,
    localized_sale_header: Array(32),
    localized_sale_overlay: Array(32),
    localized_sale_product_banner: Array(32),
    localized_sale_product_mobile_banner: Array(32),
    localized_sale_logo: Array(32),
    sale_font: ``,
    sale_background_color: ``,
    sale_header_offset: 530,
    referenced_appids: [],
    ...ay,
    ...dy,
  },
  fb = `old_announce_`,
  pb = `hide_from_events_and_discount`,
  mb = [
    `workshop`,
    `patchnotes`,
    `contenthub`,
    `skip_megaphone`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
    `enable_steam_china`,
    `disable_steam_global`,
    `adult_only_content`,
    `stablechannel`,
    `betachannel`,
    `previewchannel`,
  ],
  hb = [
    `patchnotes`,
    `steam_award_nomination_request`,
    `steam_award_vote_request`,
    `mod_hide_library_overview`,
    `steam_game_festival_artist_statement`,
    `steam_game_festival_office_hour`,
    `steam_game_festival_broadcast`,
    `halloween`,
    `curator`,
    `curator_group_members`,
    `curator_public`,
    `audience_followers`,
  ],
  gb = [20, 31, 34],
  _b = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  vb = [Ot.k_ESteamRealmGlobal],
  yb = [Ot.k_ESteamRealmChina],
  bb = [Ot.k_ESteamRealmGlobal, Ot.k_ESteamRealmChina],
  xb = [],
  $ = class e {
    constructor() {
      p(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new M();
    forumTopicGID = void 0;
    clanSteamIDOriginal = void 0;
    type = 1;
    appid = 0;
    name = new Map();
    description = new Map();
    timestamp_loc_updated = new Map();
    createTime = void 0;
    startTime = void 0;
    endTime = void 0;
    visibilityStartTime = void 0;
    visibilityEndTime = void 0;
    m_nBuildID = void 0;
    m_strBuildBranch = void 0;
    postTime = void 0;
    visibility_state = 0;
    broadcaster = void 0;
    jsondata = db;
    nCommentCount = 0;
    nVotesUp = 0;
    nVotesDown = 0;
    comment_type;
    gidfeature;
    gidfeature2;
    featured_app_tagid;
    bOldAnnouncement = !1;
    announcementClanSteamID = void 0;
    loadedAllLanguages = !1;
    bLoaded = !1;
    deleteInProgress = !1;
    vecTags = [];
    creator_steamid;
    last_update_steamid = void 0;
    rtime32_last_modified = void 0;
    rtime32_last_solr_search_col_updated = void 0;
    rtime32_last_local_modification = void 0;
    rtime32_moderator_reviewed = void 0;
    video_preview_type = void 0;
    video_preview_id = void 0;
    has_live_stream;
    live_stream_viewer_count;
    m_overrideCurrentDay = void 0;
    fnGetLocalizedGroupImages;
    BIsPartnerEvent() {
      return !this.bOldAnnouncement && !!this.GID;
    }
    static FromJSON(t) {
      let n = new e(),
        r = JSON.parse(t);
      return (
        Object.assign(n, r),
        (n.name = new Map(r.name)),
        (n.description = new Map(r.description)),
        (n.vecTags = [...(r.vecTags ?? r.tags ?? [])]),
        (n.clanSteamID = new M(r.clanSteamID)),
        bn(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new M(r.broadcaster)),
          bn(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new M(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        (r.rtime32_last_local_modification = t.rtime32_last_modified),
        (r.visibility_state = t.published
          ? t.hidden
            ? t.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (r.createTime = t.rtime_created),
        (r.m_nBuildID = t.build_id),
        (r.m_strBuildBranch = t.build_branch),
        (r.visibilityStartTime = t.rtime32_visibility_start),
        (r.visibilityEndTime = t.rtime32_visibility_end),
        (r.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
        (r.featured_app_tagid = t.featured_app_tagid),
        t.broadcaster_accountid &&
          (r.broadcaster = M.InitFromAccountID(
            t.broadcaster_accountid,
            B.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new M(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = M.InitFromClanID(
              Number(t.announcement_body.clanid),
              B.EUNIVERSE,
            )),
        (r.postTime = t.announcement_body?.posttime),
        (r.forumTopicGID = t.forum_topic_id),
        r.name.set(n, t.announcement_body?.headline ?? ``),
        r.description.set(n, t.announcement_body?.body ?? ``),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.vecTags = [...(t.announcement_body?.tags ?? [])]),
        (r.forumTopicGID = t.announcement_body?.forum_topic_id),
        (r.nVotesUp = t.announcement_body?.voteupcount ?? 0),
        (r.nVotesDown = t.announcement_body?.votedowncount ?? 0),
        r
      );
    }
    toJSON(e) {
      let t = {};
      return (
        Object.assign(t, this),
        (t.name = Array.from(this.name)),
        (t.description = Array.from(this.description)),
        (t.vecTags = Array.from(this.vecTags)),
        (t.tags = t.vecTags),
        (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
        this.broadcaster &&
          (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
        t
      );
    }
    clone(t = !1) {
      let n = new e();
      if (
        ((n.GID = this.GID),
        (n.AnnouncementGID = this.AnnouncementGID),
        (n.clanSteamID = this.clanSteamID),
        (n.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (n.bOldAnnouncement = this.bOldAnnouncement),
        (n.nCommentCount = this.nCommentCount),
        (n.nVotesUp = this.nVotesUp),
        (n.nVotesDown = this.nVotesDown),
        (n.forumTopicGID = this.forumTopicGID),
        (n.comment_type = this.comment_type),
        (n.gidfeature = this.gidfeature),
        (n.gidfeature2 = this.gidfeature2),
        (n.featured_app_tagid = this.featured_app_tagid),
        (n.creator_steamid = this.creator_steamid),
        (n.last_update_steamid = this.last_update_steamid),
        (n.rtime32_last_modified = this.rtime32_last_modified),
        (n.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (n.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (n.type = this.type),
        (n.appid = this.appid),
        (n.name = new Map()),
        this.name.forEach((e, t) => {
          n.name.set(t, e);
        }),
        (n.description = new Map()),
        this.description.forEach((e, t) => {
          n.description.set(t, e);
        }),
        (n.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((e, t) => {
          n.timestamp_loc_updated.set(t, e);
        }),
        (n.createTime = this.createTime ?? 0),
        (n.startTime = this.startTime),
        (n.endTime = this.endTime),
        (n.visibilityStartTime = this.visibilityStartTime),
        (n.visibilityEndTime = this.visibilityEndTime),
        (n.postTime = this.postTime),
        (n.visibility_state = this.visibility_state),
        (n.loadedAllLanguages = this.loadedAllLanguages),
        (n.bLoaded = this.bLoaded),
        (n.broadcaster = this.broadcaster
          ? new M(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              mb.includes(e) && n.vecTags.push(e);
            }),
        n.jsondata.email_setting)
      ) {
        let e = 100;
        for (let t of n.jsondata.email_setting.sections)
          t.unique_id || ((t.unique_id = `email_section_${e}`), e++);
      }
      return n;
    }
    GetLastReferencedSaleDayFromCapsules(e, t) {
      let n = t;
      return (
        e?.forEach((e) => {
          e.visibility_index !== void 0 &&
            (n =
              n === void 0
                ? e.visibility_index
                : Math.max(n, e.visibility_index));
        }),
        n
      );
    }
    GetLastReferencedSaleDay() {
      let e;
      for (let t of this.GetSaleSections())
        if (t.section_type === `tabs`) {
          if ((t.tabs?.length ?? 0) > 0)
            for (let n of t.tabs ?? [])
              e = this.GetLastReferencedSaleDayFromCapsules(n.capsules, e);
        } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
      return (
        (this.jsondata.sale_num_headers ?? 0) > 1 &&
          (e == null || e < (this.jsondata.sale_num_headers ?? 0)) &&
          (e = this.jsondata.sale_num_headers),
        e
      );
    }
    GetDayIndexFromEventStart(e = Ne()) {
      let t = 0;
      (this.startTime !== void 0 &&
        e >= this.startTime &&
        (t = Math.floor((e - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (t = this.m_overrideCurrentDay));
      let n = this.GetLastReferencedSaleDay() || 0;
      return Math.min(t, n);
    }
    GetNameWithFallback(e) {
      let t = ft.GetELanguageFallback(e);
      return this.name.get(e) || this.name.get(t);
    }
    BInRealmGlobal() {
      return !this.BHasTag(`disable_steam_global`);
    }
    BInRealmChina() {
      return this.BHasTag(`enable_steam_china`);
    }
    BIsLanguageValidForRealms(e) {
      return !!(
        (this.BInRealmGlobal() &&
          ft.IsELanguageValidInRealm(e, Ot.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          ft.IsELanguageValidInRealm(e, Ot.k_ESteamRealmChina))
      );
    }
    GetImgArray(e) {
      let t = [];
      if (
        ((e === `background` || e == `localized_title_image`) &&
          (t = this.jsondata.localized_title_image),
        e === `capsule`)
      )
        t = this.jsondata.localized_capsule_image;
      else if (e === `spotlight`) t = this.jsondata.localized_spotlight_image;
      else if (e === `email_full` || e === `email_centered`)
        t = this.jsondata.email_setting
          ? this.jsondata.email_setting.sections[0].localized_image
          : [];
      else if (e === `broadcast_left`)
        t = this.jsondata.localized_broadcast_left_image;
      else if (e === `broadcast_right`)
        t = this.jsondata.localized_broadcast_right_image;
      else if (e === `sale_header`) {
        if ((this.jsondata.sale_num_headers ?? 0) > 1) {
          let e = Math.min(
            (this.jsondata.sale_num_headers ?? 0) - 1,
            this.GetDayIndexFromEventStart(),
          );
          t = this.jsondata.localized_per_day_sales_header?.[e];
        } else t = this.jsondata.localized_sale_header;
      } else
        e === `sale_logo`
          ? (t = this.jsondata.localized_sale_logo)
          : e === `sale_overlay`
            ? (t = this.jsondata.localized_sale_overlay)
            : nl.includes(e)
              ? (t = this.fnGetLocalizedGroupImages?.())
              : e === `product_banner`
                ? (t = this.jsondata.localized_sale_product_banner)
                : e === `product_mobile_banner`
                  ? (t = this.jsondata.localized_sale_product_mobile_banner)
                  : e === `bestofyear_banner`
                    ? (t = this.jsondata.localized_bestofyear_banner)
                    : e === `bestofyear_banner_mobile`
                      ? (t = this.jsondata.localized_bestofyear_banner_mobile)
                      : e === `localized_store_app_spotlight`
                        ? (t = this.jsondata.localized_store_app_spotlight)
                        : e === `localized_store_app_spotlight_mobile` &&
                          (t =
                            this.jsondata.localized_store_app_spotlight_mobile);
      return t;
    }
    GetImageURL(e, t = 0, n = tl.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? el.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
          : void 0;
    }
    GetImageHash(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null
        ? n[t].substr(0, n[t].length - 4)
        : null;
    }
    GetImageHashAndExt(e, t = 0) {
      let n = this.GetImgArray(e);
      return n && n.length > t && n[t] != null ? n[t] : null;
    }
    BHasSomeImage(e) {
      let t = this.GetImgArray(e);
      return !!t && t.some((e) => e != null && e.length > 0);
    }
    BHasImage(e, t) {
      let n = this.GetImgArray(e);
      return !!n && n.length > t && n[t] != null;
    }
    BHasAnnouncementGID() {
      return (
        this.AnnouncementGID !== null &&
        this.AnnouncementGID !== void 0 &&
        this.AnnouncementGID.length > 1
      );
    }
    GetAnnouncementGID() {
      return this.AnnouncementGID;
    }
    BHasForumTopicGID() {
      return (
        this.forumTopicGID !== null &&
        this.forumTopicGID !== void 0 &&
        this.forumTopicGID.length > 1
      );
    }
    GetForumTopicURL(e) {
      return this.BHasForumTopicGID()
        ? this.appid
          ? B.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? B.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : B.COMMUNITY_BASE_URL +
              `gid/` +
              this.clanSteamID.ConvertTo64BitString() +
              `/eventcomments/` +
              this.forumTopicGID
        : ``;
    }
    GetDiscussionURL(e) {
      return this.BHasForumTopicGID()
        ? this.GetForumTopicURL(e)
        : this.GetLegacyAnnouncementCommentsURL();
    }
    GetLegacyAnnouncementCommentsURL() {
      let e = this.clanSteamIDOriginal ?? this.clanSteamID;
      return !this.BHasAnnouncementGID() || !e || !e.BIsValid()
        ? ``
        : B.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = Ne()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = Ne()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = Cr(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = Cr(this.nVotesDown + t, 0, 2 ** 53 - 1));
    }
    GetImageFromBeginningOfDescription(e, t) {
      let n = this.GetDescriptionWithFallback(e);
      if (n) {
        let e = n.indexOf(`[img]`);
        if (e !== -1 && e < t) {
          e += 5;
          let t = n.indexOf(`[/img]`, e);
          if (t != -1) {
            let r = n.substring(e, t).trim();
            if (r.length != 0) return el.ReplacementTokenToClanImageURL(r);
          }
        }
      }
      return null;
    }
    GetAppIDOrReferenceAppID() {
      return this.appid ? this.appid : this.jsondata?.referenced_appids?.[0];
    }
    BImageNeedScreenshotFallback(e, t) {
      let n = this.GetImageURL(e, t);
      if (!n || n.length == 0) {
        let r = ft.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = ft.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = ft.GetELanguageFallback(t);
      return (
        this.GetImageURL(e, t) != null ||
        (t != r && this.GetImageURL(e, r) != null) ||
        (this.appid && n.bAppHasAgeSafeScreenshots) ||
        (!this.appid &&
          n.clanInfo &&
          ((n.clanInfo.is_creator_home && !n.clanInfo.is_ogg) ||
            n.clanInfo.is_curator))
      );
    }
    BIsVisibleEvent(e = Ne()) {
      let t = Math.floor(e);
      return (
        this.visibility_state == 3 ||
        (this.visibility_state == 2 &&
          t > (this.visibilityStartTime ?? 0) &&
          ((this.visibilityEndTime ?? 0) < 10 ||
            t < (this.visibilityEndTime ?? 0)))
      );
    }
    BIsStagedEvent() {
      return this.visibility_state == 1;
    }
    BIsUnlistedEvent() {
      return this.visibility_state == 3;
    }
    GetStartTimeAndDateUnixSeconds() {
      return this.startTime ?? 0;
    }
    GetEndTimeAndDateUnixSeconds() {
      return this.endTime ?? 0;
    }
    GetPostTimeAndDateUnixSeconds() {
      return this.postTime ?? 0;
    }
    GetVisibilityStartTimeAndDateUnixSeconds() {
      return this.visibilityStartTime ?? 0;
    }
    BIsEventActionEnabled(e = Ne()) {
      return (
        !!this.jsondata.action_end_time &&
        (this.jsondata.action_end_time > e ||
          (this.jsondata.action_end_time == 1575396e3 && 1606845600 > e))
      );
    }
    BHasSubTitle(e) {
      if (
        !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
      )
        return !1;
      let t = this.jsondata.localized_subtitle[e];
      return t != null && t != ``;
    }
    GetSubTitle(e) {
      return !this.jsondata ||
        !this.jsondata.localized_subtitle ||
        e >= this.jsondata.localized_subtitle.length
        ? ``
        : this.jsondata.localized_subtitle[e] || ``;
    }
    GetSubTitleWithLanguageFallback(e) {
      return this.jsondata
        ? hn.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        hn.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        hn.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return hn.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = Av(e, [
            `img`,
            `h1`,
            `h2`,
            `h3`,
            `spoiler`,
            `table`,
            `previewyoutube`,
            `looping_media`,
            `roomeffect`,
            `sticker`,
          ])),
          (e = jv(e, [`p`], ` `)),
          (e = jv(e)),
          (e = Le(e)),
          Pe(e, t || 180));
    }
    BHasTag(e) {
      return this.vecTags.indexOf(e) != -1;
    }
    BHasTagStartingWith(e) {
      return this.vecTags.some((t) => t?.startsWith(e));
    }
    BIsOGGEvent() {
      return !!this.appid && this.appid > 0;
    }
    BShowLibrarySpotlight(e) {
      if (!e) return !!this.jsondata.library_spotlight;
      if (!this.jsondata.library_spotlight || gb.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (_b.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + $n.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = Ne()) {
      if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
      let n = this.endTime ? this.endTime : t + 3600;
      return (
        this.BHasBroadcastEnabled() &&
        !!this.jsondata.broadcast_whitelist &&
        this.jsondata.broadcast_whitelist.length > 0 &&
        (e || ((this.startTime ?? 0) - 600 <= t && t < n))
      );
    }
    BHasBroadcastForceBanner() {
      return !!this.jsondata.broadcast_force_banner;
    }
    BSaleShowBroadcastAtTopOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some((e) => e.section_type == `broadcast`)
      );
    }
    BSaleShowCuratorRecommendationAtBottomOfPage() {
      return !(
        this.jsondata.sale_sections &&
        this.jsondata.sale_sections.some(
          (e) => e.section_type == `curator_recommendation`,
        )
      );
    }
    GetBroadcastChatVisibility() {
      return this.jsondata.broadcastChatSetting || `hide`;
    }
    GetBroadcastTitle(e) {
      return (
        hn.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        L(
          this.jsondata.default_broadcast_title ??
            `#Broadcast_default_title_dev`,
        )
      );
    }
    GetBroadcastWhitelist() {
      return this.jsondata.broadcast_whitelist ?? [];
    }
    GetBroadcastWhitelistAsSteamIDs() {
      return (
        this.jsondata.broadcast_whitelist?.map((e) =>
          M.InitFromAccountID(e, B.EUNIVERSE).ConvertTo64BitString(),
        ) ?? []
      );
    }
    BIsBroadcastAccountIDWhiteListed(e) {
      return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
    }
    BHasSaleEnabled() {
      return !!this.jsondata.bSaleEnabled;
    }
    BHasSaleVanity() {
      return !!this.jsondata.bSaleEnabled && !!this.jsondata.sale_vanity_id;
    }
    GetSaleVanity() {
      return this.jsondata.sale_vanity_id ?? ``;
    }
    BHasSaleUpdateLandingPageVanity() {
      return (
        !!this.jsondata.bSaleEnabled &&
        !!this.jsondata.sale_update_landing_page_vanity_id
      );
    }
    GetSaleUpdateLandingPageVanity() {
      return this.jsondata.sale_update_landing_page_vanity_id ?? ``;
    }
    GetSaleURL(e) {
      if (!this.jsondata.bSaleEnabled) return null;
      if (this.jsondata.sale_update_landing_page_vanity_id)
        return (
          B.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          B.STORE_BASE_URL +
          `newshub/` +
          (this.appid
            ? `app/` + this.appid
            : `group/` + this.clanSteamID.GetAccountID()) +
          `/view/` +
          this.GID
        );
      if (this.BUsesContentHubForItemSource()) {
        let e = this.jsondata.source_content_hub;
        return e
          ? typeof e == `string`
            ? B.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? B.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? B.STORE_BASE_URL + `tags/` + (wt() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? B.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? B.STORE_BASE_URL + `genre/Early%20Access/`
                    : B.STORE_BASE_URL + e.type
          : B.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && pl(t, n) ? e + `sale/` + r : B.STORE_BASE_URL + fl(t, r, n);
    }
    BHasEmailEnabled() {
      return (
        !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
      );
    }
    GetSaleSections() {
      return this.jsondata.sale_sections ?? [];
    }
    GenerateDynamicSaleSections(e, t, n, r, i, a) {
      let o = [],
        s = {
          section_type: `unselected_empty`,
          capsules: [],
          events: [],
          links: [],
          localized_label: [],
          default_label: ``,
        },
        c = py + 10;
      return (
        e &&
          o.push({
            ...s,
            section_type: `footer_self_creator_home`,
            unique_id: c++,
            curator_clan_id: this.clanSteamID.GetAccountID(),
          }),
        t &&
          o.push({ ...s, section_type: `footer_browse_more`, unique_id: c++ }),
        r &&
          o.push(this.GenerateDynamicCreatorHomeItemBrowserSection(c++, s, a)),
        n &&
          o.push({
            ...s,
            section_type: `footer_default_social_share`,
            unique_id: c++,
          }),
        i && o.push({ ...s, section_type: `nextfest_header`, unique_id: c++ }),
        o
      );
    }
    GetSaleSectionIncludingFooterSections(e = 0) {
      let t = this.jsondata?.sale_show_creator,
        n = this.jsondata.sale_browse_more_button,
        r =
          this.GetSaleSectionsByType(`social_share`).length == 0 &&
          !this.jsondata.sale_default_social_media_disabled,
        i = this.GetEventType() == 36,
        a = this.BShowNextFestHeader(!0);
      return t || n || r || i || a
        ? [
            ...this.GenerateDynamicSaleSections(!1, !1, !1, !1, a, e),
            ...this.GetSaleSections(),
            ...this.GenerateDynamicSaleSections(!!t, !!n, r, i, !1, e),
          ]
        : this.GetSaleSections();
    }
    GetSaleSectionByID(e, t = 0) {
      return e > 99999
        ? this.GenerateDynamicSaleSections(!0, !0, !0, !0, !0, t).find(
            (t) => t.unique_id == e,
          )
        : this.jsondata.sale_sections?.find((t) => t.unique_id == e);
    }
    GetSaleSectionCount() {
      return this.jsondata.sale_sections?.length ?? 0;
    }
    GetSaleSectionsByType(e) {
      return (
        this.jsondata.sale_sections?.filter((t) => t.section_type == e) ?? []
      );
    }
    GetLastUpdateTime() {
      return this.rtime32_last_modified ?? 0;
    }
    GetLastUpdaterSteamIDStr() {
      return this.last_update_steamid ?? ``;
    }
    GetSaleSectionFirstMatchByType(e) {
      let t = this.jsondata.sale_sections?.length ?? 0;
      if (t != 0) {
        for (let n = 0; n < t; ++n)
          if (this.jsondata.sale_sections[n].section_type === e)
            return this.jsondata.sale_sections[n];
      }
    }
    static AccumulateCapsuleListIDs(e, t, n, r) {
      e &&
        e.forEach((e) => {
          e && e.type && t.has(e.type) && (!r || r(e.id)) && n.add(e.id);
        });
    }
    GetSaleItemOfType(t, n) {
      if (!this.jsondata.sale_sections) return new Set();
      let r = new Set(t),
        i = new Set();
      return (
        bn(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (Xy(t.section_type))
            e.AccumulateCapsuleListIDs(t.capsules, r, i, n);
          else if (t.section_type === `tabs` && t.tabs)
            for (let a of t.tabs)
              e.AccumulateCapsuleListIDs(a.capsules, r, i, n);
        }),
        i
      );
    }
    GetSaleItemCountOfType(e, t) {
      return this.GetSaleItemOfType(e, t).size;
    }
    GetSaleFeaturedAppsCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemosCount(e) {
      return this.GetSaleItemCountOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundlesCount(e) {
      return this.GetSaleItemCountOfType([`bundle`], e);
    }
    GetSaleFeaturedPackagesCount(e) {
      return this.GetSaleItemCountOfType([`sub`], e);
    }
    GetSaleFeaturedApps(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`],
        e,
      );
    }
    GetSaleFeaturedAppsAndDemos(e) {
      return this.GetSaleItemOfType(
        [`game`, `application`, `software`, `dlc`, `music`, `demo`],
        e,
      );
    }
    GetSaleFeaturedBundles(e) {
      return this.GetSaleItemOfType([`bundle`], e);
    }
    GetSaleFeaturedPackages(e) {
      return this.GetSaleItemOfType([`sub`], e);
    }
    GetTaggedItems() {
      return this.jsondata.tagged_items || [];
    }
    BHasScheduleEnabled() {
      return this.jsondata.bScheduleEnabled;
    }
    GetEventType() {
      return this.type;
    }
    GetEventTypeAsString() {
      return uy(this.type);
    }
    GetCategoryAsString(e) {
      return this.BHasTag(`steam_award_nomination_request`)
        ? L(`#PartnerEvent_SteamAwardNominations`)
        : this.BHasTag(`steam_award_vote_request`)
          ? L(`#PartnerEvent_SteamAwardVoteRequest`)
          : this.BHasTag(`steam_game_festival_artist_statement`)
            ? L(`#PartnerEvent_SteamGameFestival_ArtistState`)
            : this.BHasTag(`steam_game_festival_office_hour`)
              ? L(`#PartnerEvent_SteamGameFestival_OfficeHour`)
              : this.BHasTag(`steam_game_festival_broadcast`) ||
                  (this.BHasTagStartingWith(`sale_nextfest_`) &&
                    this.type == 11)
                ? L(`#PartnerEvent_SteamGameFestival_Broadcast`)
                : this.BHasTag(`vo_marketing_message`) && e
                  ? L(`#PartnerEvent_MM_MajorUpdate`)
                  : this.GetEventTypeAsString();
    }
    GetAllTags() {
      return this.vecTags;
    }
    BMatchesAllTags(e) {
      let t = !0;
      return (
        e?.forEach((e) => {
          this.vecTags.includes(e) || (t = !1);
        }),
        t
      );
    }
    BAllowedSteamStoreSpotlight() {
      return !!this.jsondata.store_spotlight;
    }
    BHasLibaryHomeSpotlight() {
      return !!this.jsondata.library_home_spotlight;
    }
    GetSteamAwardCategory() {
      return this.jsondata.steam_award_category_suggestion ?? 0;
    }
    GetSteamAwardNomineeCategories() {
      return this.jsondata.steam_award_category_voteids ?? [];
    }
    BIsLockedToGameOwners() {
      return !!this.jsondata.ownership_requirement_info?.bLockedToAppOwners;
    }
    GetRequiredAppIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
        : [];
    }
    GetRequiredPackageIDs() {
      return this.jsondata.ownership_requirement_info
        ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
        : [];
    }
    BUseSubscriptionLayout() {
      return !!this.jsondata.sale_use_subscription_layout;
    }
    BIsLockedToPartnerAppRights() {
      return !!this.jsondata.app_right_requirement_info
        ?.bLockedToPartnerAppRights;
    }
    GetRequiredPartnerAppRights() {
      return this.jsondata.app_right_requirement_info;
    }
    GetValveAccessLog() {
      return Array.isArray(this.jsondata.valve_access_log)
        ? this.jsondata.valve_access_log
        : [];
    }
    BUsesContentHubForItemSource() {
      return (
        this.jsondata.item_source_type === 1 &&
        !!this.jsondata.source_content_hub
      );
    }
    GetContentHubType() {
      if (this.BUsesContentHubForItemSource())
        return this.jsondata.source_content_hub == null
          ? `games`
          : typeof this.jsondata.source_content_hub == `string`
            ? `category`
            : this.jsondata.source_content_hub.type;
    }
    GetContentHubCategory() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? this.jsondata.source_content_hub
          : this.jsondata.source_content_hub.category;
    }
    GetContentHubTag() {
      if (this.jsondata.source_content_hub != null)
        return typeof this.jsondata.source_content_hub == `string`
          ? 0
          : this.jsondata.source_content_hub.tagid;
    }
    GetContentHub() {
      return typeof this.jsondata.source_content_hub == `string`
        ? { type: `category`, category: this.jsondata.source_content_hub }
        : this.jsondata.source_content_hub;
    }
    BContentHubDiscountedOnly() {
      return !!this.jsondata.content_hub_discounted_only;
    }
    BIsBackgroundImageGroupingEnabled() {
      return !!this.jsondata.sale_background_img_groups?.enabled;
    }
    GetSalePageGroupDefinition() {
      return this.jsondata.sale_background_img_groups;
    }
    GetSalePageBackgroundImageGroupCount() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
        : 0;
    }
    GetAllSalePageGroups() {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups
        : [];
    }
    GetSalePageBackgroundGroup(e) {
      return this.jsondata.sale_background_img_groups?.enabled
        ? this.jsondata.sale_background_img_groups.groups?.[e]
        : void 0;
    }
    GetIncludedRealmList() {
      let e = this.BInRealmGlobal(),
        t = this.BInRealmChina();
      return (
        bn(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? bb : e ? vb : t ? yb : xb
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new M(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && U.is_valve_email
        ? this.BIsNextFest(!1)
        : this.BIsNextFest(!0) &&
            !!this.startTime &&
            this.startTime > new Date(`2026-03-01`).getTime() / 1e3;
    }
    GenerateDynamicCreatorHomeItemBrowserSection(e, t, n) {
      let r = n >= 7;
      return {
        ...t,
        section_type: `sale_item_browser`,
        unique_id: e,
        item_browse_section_data: {
          enable_search: !0,
          tabs: [
            `all_released`,
            `popularpurchased`,
            `all_upcoming`,
            `discounted`,
          ],
          prefer_assets_without_overrides: !1,
        },
        prefer_assets_without_overrides: !1,
        enable_faceted_browsing: r,
        min_capsule_matches_for_facet_values: 5,
        max_facet_values_for_facet: 5,
        background_gradient_top: `#0000006b`,
        background_gradient_bottom: `#0000006b`,
        facet_sort_order: 1,
        cap_item_count: 24,
        show_more_count: 48,
        facet_auto_generate_options: {
          only_facets: [
            { loc_token: `#App_Taxonomy_Survey_QSuperGenreTitle` },
            {
              loc_token: `#AppTypeLabelTitle`,
              only_values: [
                `#AppTypeLabel_game`,
                `#AppTypeLabel_dlc`,
                `#AppTypeLabel_demo`,
                `#AppTypeLabel_music`,
              ],
              initially_selected_values: [`#AppTypeLabel_game`],
            },
            { loc_token: `#Sale_Preferences` },
          ],
          initially_expanded_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
          prioritized_facets: [
            `#AppTypeLabelTitle`,
            `#App_Taxonomy_Survey_QSuperGenreTitle`,
          ],
        },
      };
    }
  };
(E([_], $.prototype, `GID`, void 0),
  E([_], $.prototype, `AnnouncementGID`, void 0),
  E([_], $.prototype, `forumTopicGID`, void 0),
  E([_], $.prototype, `type`, void 0),
  E([_], $.prototype, `appid`, void 0),
  E([_], $.prototype, `name`, void 0),
  E([_], $.prototype, `description`, void 0),
  E([_], $.prototype, `timestamp_loc_updated`, void 0),
  E([_], $.prototype, `startTime`, void 0),
  E([_], $.prototype, `endTime`, void 0),
  E([_], $.prototype, `visibilityStartTime`, void 0),
  E([_], $.prototype, `visibilityEndTime`, void 0),
  E([_], $.prototype, `m_nBuildID`, void 0),
  E([_], $.prototype, `m_strBuildBranch`, void 0),
  E([_], $.prototype, `postTime`, void 0),
  E([_], $.prototype, `visibility_state`, void 0),
  E([_], $.prototype, `broadcaster`, void 0),
  E([_], $.prototype, `jsondata`, void 0),
  E([_], $.prototype, `nCommentCount`, void 0),
  E([_], $.prototype, `nVotesUp`, void 0),
  E([_], $.prototype, `nVotesDown`, void 0),
  E([_], $.prototype, `bOldAnnouncement`, void 0),
  E([_], $.prototype, `announcementClanSteamID`, void 0),
  E([_], $.prototype, `loadedAllLanguages`, void 0),
  E([_], $.prototype, `bLoaded`, void 0),
  E([_], $.prototype, `deleteInProgress`, void 0),
  E([_], $.prototype, `vecTags`, void 0),
  E([_], $.prototype, `last_update_steamid`, void 0),
  E([_], $.prototype, `rtime32_last_modified`, void 0),
  E([_], $.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  E([_], $.prototype, `rtime32_last_local_modification`, void 0),
  E([_], $.prototype, `rtime32_moderator_reviewed`, void 0),
  E([_], $.prototype, `video_preview_type`, void 0),
  E([_], $.prototype, `video_preview_id`, void 0),
  E([_], $.prototype, `m_overrideCurrentDay`, void 0));
function Sb(e) {
  if (e) return e?.replace(/[()]/g, `\\$&`);
}
var Cb = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Request`;
    }
  },
  wb = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ignore_list || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ignore_list: { n: 1, c: Tb, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  Tb = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            packageid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            reason: { n: 3, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  Eb;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, C(Cb, t, n), wb, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})((Eb ||= {}));
var Db = class e {
  m_queryClient = vr;
  m_boxCacheVersion = _.box(0);
  m_bInitialized = !1;
  m_boxAjaxInFlight = _.box(!1);
  LazyInit() {
    this.m_bInitialized ||
      ((this.m_bInitialized = !0),
      this.m_queryClient.getQueryCache().subscribe((e) => {
        (e?.type == `added` || e?.type == `updated` || e?.type == `removed`) &&
          oo(e.query?.queryKey) &&
          a(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadData() {
    return (
      this.LazyInit(), this.m_boxCacheVersion.get(), fo(this.m_queryClient)
    );
  }
  BIsLoaded() {
    return this.ReadData().bLoaded;
  }
  GetWishlistGamesInUserOrder() {
    return this.ReadData().rgWishlistInOrder;
  }
  GetRecommendedGamesInIRPriorityOrder() {
    return this.ReadData().rgRecommendedAppsInOrder;
  }
  GetFollowedCuratorCount() {
    return this.ReadData().setCuratorsFollowed.size;
  }
  GetFollowedCuratorsAccountID() {
    return this.ReadData().rgCuratorsFollowed;
  }
  BIsFollowingCurator(e) {
    return this.ReadData().setCuratorsFollowed.has(Ob(e));
  }
  BIsIgnoringCurator(e) {
    return this.ReadData().setCuratorsIgnored.has(Ob(e));
  }
  get ExcludedContentDescriptor() {
    return this.ReadData().rgExcludedContentDescriptors;
  }
  BExcludeTagIDs(e) {
    let t = this.ReadData().setExcludedTagIDs;
    return e.some((e) => t.has(e));
  }
  GetExcludedTagsSortedByID() {
    return this.ReadData().rgExcludedTagIDsSorted;
  }
  BExcludesContentDescriptor(e) {
    let t = this.ReadData().setExcludedContentDescriptors;
    return e.some((e) => t.has(e));
  }
  BIncludesContentDescriptor(e) {
    return !this.ReadData().setExcludedContentDescriptors.has(e);
  }
  BIsGameWishlisted(e) {
    return this.ReadData().setWishlist.has(Number(e));
  }
  BIsGameRecommended(e) {
    return this.ReadData().setRecommendedApps.has(Number(e));
  }
  BIsGameIgnored(e) {
    return !!e && this.ReadData().mapIgnoredApps.has(Number(e));
  }
  BIsPackageIgnored(e) {
    return !!e && this.ReadData().mapIgnoredPackages.has(Number(e));
  }
  BIsGameOwned(e) {
    return !!e && this.ReadData().setOwnedApps.has(Number(e));
  }
  BIsStoreItemOwned(e) {
    switch (e.GetStoreItemType()) {
      case 0:
        if (this.BIsGameOwned(e.GetAppID())) return !0;
        break;
      case 1:
      case 2:
        if (e.GetIncludedAppIDs().every((e) => this.BIsGameOwned(e))) return !0;
    }
    return !1;
  }
  BOwnsApp(e) {
    return !!e && this.ReadData().setOwnedApps.has(Number(e));
  }
  BOwnsPackage(e) {
    return this.ReadData().setOwnedPackages.has(Number(e));
  }
  BHasUsedHardware(e) {
    return this.ReadData().setHardwareUsed.has(e);
  }
  BShowFilteredUserReviewScores() {
    return this.ReadData().bShowFilteredUserReviewScores;
  }
  BAppImpressionsAllowed() {
    return this.ReadData().bAllowAppImpressions;
  }
  GetPrimaryLanguage() {
    return this.ReadData().ePrimaryLanguage;
  }
  GetSecondaryLanguages() {
    return this.ReadData().setSecondaryLanguages;
  }
  BIsAnyLanguageEnabled(e) {
    let { ePrimaryLanguage: t, setSecondaryLanguages: n } = this.ReadData();
    return (
      t == null || t <= -1 || 32 <= t || e.some((e) => t === e || n.has(e))
    );
  }
  GetRecommendedTags() {
    return this.ReadData().rgRecommendedTags;
  }
  BIsAjaxInFlight() {
    return this.m_boxAjaxInFlight.get();
  }
  BIsAppRecommendedBySomeCurator(e) {
    return this.ReadData().mapRecommendingCuratorsForApp.has(Number(e));
  }
  GetRecommendingCuratorsForApp(e) {
    return this.ReadData().mapRecommendingCuratorsForApp.get(Number(e));
  }
  BHasPlatformPreferenceSet() {
    let e = this.ReadData().setPreferredPlatforms.size;
    return e > 0 && e < 3;
  }
  BIsPreferredPlatform(e) {
    return this.ReadData().setPreferredPlatforms.has(e);
  }
  async HintLoad() {
    return (this.LazyInit(), await mo(this.m_queryClient), this);
  }
  async UpdateFollowOrIgnoreCurator(e, t, n) {
    this.LazyInit();
    let r =
        z.STORE_BASE_URL + `curators/` + (t ? `ajaxfollow/` : `ajaxignore/`),
      i = e.GetAccountID(),
      a = new FormData();
    (a.append(`clanid`, `` + i),
      a.append(`sessionid`, jn()),
      a.append(t ? `follow` : `ignore`, n ? `1` : `0`));
    let o = await ul.default.post(r, a, { withCredentials: !0 });
    return (
      o &&
        o.status == 200 &&
        (this.InvalidateCache(),
        ho(this.m_queryClient, (e) => {
          let r = new Set(t ? e.setCuratorsFollowed : e.setCuratorsIgnored);
          return (
            n ? r.add(i) : r.delete(i),
            t
              ? { setCuratorsFollowed: r, rgCuratorsFollowed: Array.from(r) }
              : { setCuratorsIgnored: r }
          );
        })),
      o.data
    );
  }
  async UpdateAppIgnore(e, t, n, r = 0) {
    this.LazyInit();
    let i = z.STORE_BASE_URL + `recommended/ignorerecommendation`,
      o = new FormData();
    (o.append(`sessionid`, jn()),
      o.append(`appid`, `` + e),
      o.append(`remove`, t ? `0` : `1`),
      o.append(`snr`, n),
      o.append(`ignore_reason`, `` + r));
    try {
      a(() => this.m_boxAjaxInFlight.set(!0));
      let n = await ul.default.post(i, o, { withCredentials: !0 });
      return (
        n &&
          n.status == 200 &&
          (this.InvalidateCache(),
          ho(this.m_queryClient, (n) => {
            let i = new Map(n.mapIgnoredApps);
            return (
              t ? i.set(Number(e), r) : i.delete(Number(e)),
              { mapIgnoredApps: i }
            );
          })),
        n.data
      );
    } catch (e) {
      let t = vt(e);
      console.error(`UpdateAppIgnore`, t.strErrorMsg, t);
    } finally {
      a(() => this.m_boxAjaxInFlight.set(!1));
    }
    return { success: 2 };
  }
  async AddToCart(e, t, n, r, i, a, o) {
    if (
      window.g_bUseNewCartAPI !== void 0 &&
      window.g_bUseNewCartAPI &&
      typeof window.AddItemToCart == `function`
    ) {
      let e;
      return (i && (e = sr.ParseSNR(i)), window.AddItemToCart(t, a, e), !0);
    }
    let s = new FormData();
    (s.append(`action`, `add_to_cart`),
      a ? s.append(`bundleid`, a.toString()) : s.append(`subid`, `` + t),
      i && s.append(`snr`, i),
      s.append(`sessionid`, jn()),
      s.append(`quantity`, `1`));
    let c = Er(e);
    e.preventDefault();
    try {
      (await ul.default.post(n, s, { withCredentials: !0 }),
        this.InvalidateCache(),
        o?.fnSetURL ? o.fnSetURL(r) : (c.location.href = r));
    } catch (e) {
      return (console.log(`HandleOnAddToCart`, e), !1);
    }
    return !0;
  }
  InvalidateCache() {
    Ra();
  }
  static s_globalSingletonStore;
  static Get() {
    return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
  }
  static BConfirmedAdultContentAgeGate() {
    return to();
  }
  constructor() {}
};
function Ob(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function kb() {
  let { isPending: e } = uo();
  return [e, Db.Get()];
}
var Ab = `yFKurY5xd-8-`,
  jb = `x-jXNI-s184-`,
  Mb = `aG-OF9IYlE8-`,
  Nb = `Ef8xOk5PJbg-`,
  Pb = `zhuLkiDPnzg-`,
  Fb = `RTkq2WI2bK4-`,
  Ib = `_4vRcmVJ4gN8-`,
  Lb = `_9fTa0lmYa50-`,
  Rb = `_3FDFuSiCh1s-`,
  zb = `G7E1sJby9GI-`,
  Bb = `eEhfnGythD0-`,
  Vb = `qtB6DnXH-bs-`,
  Hb = `hBOvJNgGqZc-`,
  Ub = `TsekNW90qyQ-`,
  Wb = `tF-0HvIRqgQ-`,
  Gb = `_0EeL7NnvnjU-`,
  Kb = `L-E-bGfH1Sw-`,
  qb = `-pV6HCIaaqM-`,
  Jb = `_4CGdt38X5eY-`,
  Yb = `IC4k3Gish5g-`,
  Xb = `MUbRKQFMT7E-`,
  Zb = {
    Header1: Ab,
    Header2: jb,
    Header3: Mb,
    Link: Nb,
    LinkHost: Pb,
    LinkButton: Fb,
    LinkPill: Ib,
    UnorderedList: Lb,
    OrderedList: Rb,
    StoreWidget: zb,
    MedalTVWidget: Bb,
    LoyaltyRewardCtn: Vb,
    SaleSectionCtn: Hb,
    SaleTextCtn: Ub,
    ReminderCtn: Wb,
    BlockQuote: Gb,
    SocialLink: Kb,
    SocialIcon: qb,
    LocalizeBlock: Jb,
    CheckMark: Yb,
    ScreenshotCarousel: Xb,
  };
function Qb(e) {
  let t = x(),
    n = Ln();
  return f($b(t, n, e)).data ?? void 0;
}
function $b(e, t, n) {
  return {
    queryKey: ex(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let r = n.appid
          ? await e.ensureQueryData(Xn(t, { appid: n.appid }))
          : null,
        i = await e.ensureQueryData(be(n.clanSteamID.GetAccountID(), e));
      if (n.appid) {
        if (r) {
          if (r.all_ages_screenshots && r.all_ages_screenshots.length > 0) {
            let e = Number(
              n.bOldAnnouncement
                ? n.AnnouncementGID
                : n.GID == null
                  ? 0
                  : n.GID,
            );
            return (
              (e %= r.all_ages_screenshots.length),
              `${B.STORE_ITEM_BASE_URL}${r.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return n.GetEventType() != 36 &&
        i &&
        ((i.is_creator_home && !i.is_ogg) || i.is_curator)
        ? (i.avatar_full_url ?? null)
        : null;
    },
  };
}
function ex(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function tx(e, t, n, r = tl.full, i = !0) {
  let a = x(),
    o = Ln();
  return f(rx(a, o, e, t, n, r, i)).data ?? void 0;
}
function nx(e, t, n, r = tl.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function rx(e, t, n, r, i, a = tl.full, o = !0) {
  return {
    queryKey: nx(n, r, i, a, o),
    enabled: !!n?.GID,
    initialData: () => ix(n, r, i, a, o),
    queryFn: async () => {
      if (!n) return null;
      let s = ix(n, r, i, a, o);
      if (s) return s;
      let c = await e.ensureQueryData(be(n.clanSteamID.GetAccountID(), e));
      if (r == `capsule`) {
        let r = n.appid;
        if (!r && c && ((c.is_creator_home && !c.is_ogg) || c.is_curator)) {
          if (n.jsondata?.referenced_appids?.length)
            r = n.jsondata.referenced_appids[0];
          else return c.avatar_full_url ?? null;
        }
        let i = await e.ensureQueryData(cr(t, { appid: r }));
        return i
          ? (Ae(i, `main_capsule`) ?? null)
          : c?.avatar_full_url
            ? c.avatar_full_url
            : `${B.STORE_ITEM_BASE_URL}steam/apps/${r}/header.jpg`;
      }
      return r == `background` &&
        c &&
        ((c.is_creator_home && !c.is_ogg) || c.is_curator)
        ? (c.creator_page_bg_url ?? null)
        : await e.ensureQueryData($b(e, t, n));
    },
  };
}
function ix(e, t, n, r = tl.full, i = !0) {
  if (!e) return;
  let a = e.GetImageURL(t, n, r);
  if (a && a.trim().length > 0) return a;
  let o = ft.GetELanguageFallback(n);
  if (n != o) {
    let n = e.GetImageURL(t, o, r);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(n, Number.MAX_VALUE);
    if (t && (i || Xe(t))) return t;
  }
}
function ax(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function ox(e) {
  return ax(e) ? fb + e.announcement_body?.gid : e.gid;
}
function sx(e, t) {
  let n = new $();
  if (
    ((n.clanSteamID = e),
    bn(
      n.clanSteamID && n.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        n.clanSteamID.ConvertTo64BitString() +
        ` ` +
        z.EUNIVERSE,
    ),
    (n.GID = ox(t)),
    (n.bOldAnnouncement = ax(t)),
    (n.appid = t.appid ?? 0),
    (n.createTime = t.rtime_created),
    (n.startTime = t.rtime32_start_time),
    (n.endTime = t.rtime32_end_time),
    (n.visibilityStartTime = t.rtime32_visibility_start),
    (n.visibilityEndTime = t.rtime32_visibility_end),
    (n.loadedAllLanguages = !1),
    (n.type = t.event_type ?? 1),
    (n.nVotesUp = t.votes_up ?? 0),
    (n.nVotesDown = t.votes_down ?? 0),
    (n.comment_type = t.comment_type),
    (n.gidfeature = t.gidfeature),
    (n.gidfeature2 = t.gidfeature2),
    (n.featured_app_tagid = t.featured_app_tagid),
    (n.vecTags = []),
    (n.creator_steamid = t.creator_steamid),
    (n.last_update_steamid = t.last_update_steamid),
    (n.rtime32_last_modified = t.rtime32_last_modified),
    (n.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
    (n.video_preview_type = t.video_preview_type),
    (n.video_preview_id = t.video_preview_id),
    (n.has_live_stream = t.has_live_stream),
    (n.live_stream_viewer_count = t.live_stream_viewer_count),
    (n.m_nBuildID = t.build_id),
    (n.m_strBuildBranch = t.build_branch),
    t.announcement_body)
  ) {
    let e = t.announcement_body;
    ((n.AnnouncementGID = e.gid),
      n.name.set(e.language, e.headline),
      n.description.set(e.language, e.body),
      n.timestamp_loc_updated.clear(),
      (n.forumTopicGID = e.forum_topic_id),
      (n.nCommentCount = e.commentcount),
      (n.postTime = e.posttime),
      n.bOldAnnouncement && !e.hidden && (n.startTime = e.posttime),
      (n.announcementClanSteamID = new M(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => n.vecTags.push(e)),
      !n.rtime32_last_solr_search_col_updated &&
        n.rtime32_last_modified &&
        ((n.rtime32_last_solr_search_col_updated = n.rtime32_last_modified),
        (n.rtime32_last_modified = e.updatetime)));
  } else
    ((n.AnnouncementGID = `0`),
      (n.forumTopicGID = t.forum_topic_id),
      n.name.clear(),
      n.description.clear(),
      n.timestamp_loc_updated.clear(),
      (n.postTime = t.rtime32_start_time),
      (n.nCommentCount = t.comment_count ?? 0),
      n.name.set(0, t.event_name ?? ``),
      n.description.set(0, t.event_notes ?? ``));
  t.broadcaster_accountid && (n.broadcaster = new M(t.broadcaster_accountid));
  let r = db;
  try {
    n.jsondata = { ...r, ...(t.jsondata ? JSON.parse(t.jsondata) : void 0) };
  } catch (e) {
    let t = vt(e);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e
    );
  }
  if (
    ((n.jsondata.localized_capsule_image = F(
      n.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_title_image = F(
      n.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_subtitle = F(
      n.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (n.jsondata.localized_summary = F(
      n.jsondata.localized_summary || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_title = F(
      n.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_left_image = F(
      n.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_right_image = F(
      n.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_header = F(
      n.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_overlay = F(
      n.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_banner = F(
      n.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_mobile_banner = F(
      n.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_logo = F(
      n.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    n.jsondata.sale_num_headers !== void 0 &&
      n.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
      n.jsondata.localized_per_day_sales_header[e] = F(
        n.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    n.jsondata.sale_sections &&
      n.jsondata.sale_sections.forEach((e, t) => {
        ((e.localized_label &&= F(e.localized_label, 32, null)),
          e.section_type === `trailercarousel` && (e.show_as_carousel = !1),
          Vy(e),
          (n.jsondata.sale_sections[t] = { ...ob, ...e }));
      }),
    n.jsondata.email_setting &&
      n.jsondata.email_setting.sections &&
      n.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = F(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = F(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = F(e.localized_image, 32, null)));
      }),
    n.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let r = e.lastIndexOf(`/`),
          i = e.substr(r + 1);
        n.jsondata.localized_title_image[t] = i;
      }
    }),
    (n.bLoaded = !0),
    (n.visibility_state = t.published
      ? t.unlisted
        ? Py.k_EEventStateUnlisted
        : t.hidden
          ? Py.k_EEventStateStaged
          : Py.k_EEventStateVisible
      : Py.k_EEventStateUnpublished),
    n
  );
}
var cx = `L3HaktJsWWA-`,
  lx = `YebKQISqLCs-`,
  ux = `Ct9yU89TArw-`,
  dx = `_7-cDUja4KeQ-`,
  fx = `PBXxHejQZTU-`,
  px = `JX6irDhLeng-`,
  mx = o((e) => {
    let t = Zc(e.photo, br(B.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, q.jsxs)(`div`, {
      className: ux,
      onMouseLeave: e.fnClose,
      children: [
        (0, q.jsxs)(`div`, {
          className: dx,
          children: [
            e.photo && (0, q.jsx)(`img`, { src: n }),
            (0, q.jsxs)(`div`, {
              className: fx,
              children: [
                (0, q.jsx)(`div`, { children: e.name }),
                (r || i) &&
                  (0, q.jsxs)(`div`, {
                    children: [
                      r &&
                        (0, q.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: e.title,
                        }),
                      r && i && (0, q.jsx)(`span`, { children: `, ` }),
                      i && (0, q.jsx)(`span`, { children: e.company }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.bio &&
          (0, q.jsxs)(`div`, {
            className: `sAGOlXZOYoQ-`,
            children: [
              e.bio,
              e.bioString && (0, q.jsx)(Ee, { text: e.bioString }),
            ],
          }),
      ],
    });
  }),
  hx = class e extends K.Component {
    static sm_embeddedElements = new kt(`presenter-hover-source-elements`);
    m_refAnchor = K.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      pr() ||
        (this.m_fnHidePopup &&
          (this.m_fnHidePopup(),
          (this.m_fnHidePopup = null),
          window.removeEventListener(`scroll`, this.OnScroll)));
    }
    componentWillUnmount() {
      this.ClosePopup();
    }
    OnScroll() {
      Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
        this.ClosePopup();
    }
    OnHover(t) {
      let n = this.m_refAnchor.current;
      if (!n) return;
      let r = {
          direction: `right`,
          bEnablePointerEvents: !0,
          style: { maxWidth: 640, minHeight: n.clientHeight },
          target: n,
        },
        i = `presenter-hover-` + Math.floor(Math.random() * 1e8);
      ((this.m_fnHidePopup = () =>
        e.sm_embeddedElements.HideElement(n.ownerDocument, i)),
        window.addEventListener(`scroll`, this.OnScroll),
        (this.m_nScrollPosAtHoverStart = window.scrollY),
        e.sm_embeddedElements.ShowElementDelayed(
          n.ownerDocument,
          150,
          (0, q.jsx)(Nn, {
            ...r,
            children: (0, q.jsx)(mx, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, q.jsx)(`div`, {
        className: px,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(E([j], hx.prototype, `ClosePopup`, null),
  E([j], hx.prototype, `OnScroll`, null),
  E([j], hx.prototype, `OnHover`, null),
  E([j], hx.prototype, `OnLeave`, null));
function gx(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: a,
    } = e,
    o = Zc(t, br(B.LANGUAGE)),
    s = o && !a ? (typeof o == `string` ? o : o[1]) : null,
    c = !!r,
    l = !!i;
  return (0, q.jsx)(`div`, {
    className: cx,
    children: (0, q.jsx)(hx, {
      ...e,
      children: (0, q.jsx)(`div`, {
        className: lx,
        children: (0, q.jsxs)(`div`, {
          className: dx,
          children: [
            !!s && (0, q.jsx)(`img`, { src: s }),
            (0, q.jsxs)(`div`, {
              className: fx,
              children: [
                (0, q.jsx)(`div`, { children: n }),
                (c || l) &&
                  (0, q.jsxs)(`div`, {
                    children: [
                      c &&
                        (0, q.jsx)(`span`, {
                          className: `zv2bYEkwS4A-`,
                          children: r,
                        }),
                      c && l && (0, q.jsx)(`span`, { children: `, ` }),
                      l && (0, q.jsx)(`span`, { children: i }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
var _x = K.createContext({ enabled: !0 });
function vx(e) {
  let { enabled: t, children: n } = e,
    r = K.useMemo(() => ({ enabled: t }), [t]);
  return (0, q.jsx)(_x.Provider, { value: r, children: n });
}
function yx(e) {
  let {
      placeholderWidth: t,
      placeholderHeight: n,
      holdGamepadFocus: r = !1,
      onRender: i,
      style: a,
      mode: o = `JustLoad`,
      children: s,
      ...c
    } = e,
    l = K.useContext(_x),
    [u, d] = K.useState(() => ({
      bRenderChildren: !l.enabled,
      nPrevRenderHeight: 0,
      nPrevRenderWidth: 0,
    })),
    f = K.useRef(null),
    p = o === `LoadAndUnload` && l.enabled,
    m = K.useCallback(
      (e) => {
        d((t) => {
          if (t.bRenderChildren === e || (t.bRenderChildren && !p)) return t;
          let n = 0,
            r = 0;
          if (f.current) {
            let e = f.current.getBoundingClientRect();
            e && ((n = e.width), (r = e.height));
          }
          return (
            e && i && i(),
            { bRenderChildren: e, nPrevRenderWidth: n, nPrevRenderHeight: r }
          );
        });
      },
      [p, i],
    );
  K.useEffect(() => {
    l.enabled || m(!0);
  }, [l.enabled, m]);
  let h = a;
  if (!u.bRenderChildren) {
    let e = u.nPrevRenderWidth || t,
      r = u.nPrevRenderHeight || n;
    (r !== void 0 || e !== void 0) && (h = { ...a, minHeight: r, minWidth: e });
  }
  let g = p ? `repeated` : `once`,
    _ = (0, q.jsx)(Ue, {
      containerRef: f,
      style: h,
      ...c,
      onVisibilityChange: m,
      trigger: g,
      children: u.bRenderChildren && s,
    });
  return (
    r &&
      (_ = (0, q.jsx)(rt, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        children: _,
      })),
    _
  );
}
var bx = t({
    AlbumCoverImage: () => cS,
    AlbumTitle: () => lS,
    AppSummaryWidgetCtn: () => Hx,
    CarouselCapsuleAnimated: () => Vx,
    CarouselCapsuleBordered: () => Bx,
    CarouselDisplay: () => wx,
    CarouselPage: () => xS,
    CarouselSalePageCapsule: () => Ux,
    CustomStyle_together: () => qx,
    DefaultCreatorCtn: () => TS,
    DesktopTabs: () => hS,
    DisabledBackground: () => Ox,
    EmptySectionPreview: () => rS,
    EventSectionViewAllCtn: () => ES,
    HorizontalScrollInDragForceCursor: () => yS,
    Hover: () => Px,
    JumpToButton: () => Lx,
    JumpToSection: () => Ix,
    JumpedTo: () => Fx,
    LinkCapsule: () => iS,
    LoginButton: () => Mx,
    MobileTabSelector: () => dS,
    MobileTabSelectorButton: () => pS,
    MobileTabSelectorDropDown: () => gS,
    MobileTabSelectorOption: () => _S,
    MobileTabSelectorShortcut: () => mS,
    NoTopPadding: () => Ex,
    SaleBackground: () => Xx,
    SaleBroadcastCtn: () => Wx,
    SaleBroadcastSection: () => bS,
    SaleHeaderContainer: () => Dx,
    SaleNewSizing: () => Jx,
    SaleOuterContainer: () => Kx,
    SaleOuterTopMargin: () => Gx,
    SaleOverlay: () => zx,
    SaleOverlayCtn: () => Rx,
    SalePageBroadcastContextHover: () => sS,
    SalePageLogoSet: () => Yx,
    SaleSection: () => Cx,
    SaleSectionBackgroundImageGroupEdit: () => DS,
    SaleSectionContainer: () => $x,
    SaleSectionCtn: () => Tx,
    SaleSectionLivePreview: () => Nx,
    SaleSectionLoginPrompt: () => jx,
    SaleSectionSubtext: () => Qx,
    SaleSectionTabListContainer: () => uS,
    SaleSectionTabs: () => kx,
    SaleSectionTitleCtn: () => Zx,
    SaleTabLabel: () => wS,
    SaleViewAll: () => Ax,
    TabButton: () => CS,
    TabButtonsCtn: () => SS,
    TabContentsContainer: () => vS,
    Visible: () => fS,
    default: () => OS,
    "duration-app-launch": () => xx,
    fullscreen_bg: () => aS,
    fullscreen_bg_video: () => oS,
    narrowWidth: () => Sx,
    preview_placeholder_section: () => nS,
    vr_required: () => tS,
    vr_supported: () => eS,
  }),
  xx = `800ms`,
  Sx = `500px`,
  Cx = `_5uN-ZG0AdmQ-`,
  wx = `_1z-QD5sz6XA-`,
  Tx = `BjU45TzF-sA-`,
  Ex = `QYv8zbj--Ck-`,
  Dx = `fgKHCBFFyCk-`,
  Ox = `iZzul86MCHw-`,
  kx = `A3eo6r5OuXY-`,
  Ax = `dp33i3JEBBw-`,
  jx = `FyvPogThu-8-`,
  Mx = `QSC5IqjmQXQ-`,
  Nx = `_4V-KrqNLPmQ-`,
  Px = `_5ogwM4KIkcI-`,
  Fx = `Gl6SVCjLh9k-`,
  Ix = `d2m-PEeOVmY-`,
  Lx = `BxPO-muNnTI-`,
  Rx = `aOA-KMNFbEE-`,
  zx = `QYd-JimFMMk-`,
  Bx = `_9PVhWUbR3rk-`,
  Vx = `giUOrzG6Ujs-`,
  Hx = `zct4M8EzfNo-`,
  Ux = `FolDBzXMW2I-`,
  Wx = `_0pSO3K-0Hs4-`,
  Gx = `_9D3431c8-XE-`,
  Kx = `G-t-vlNhbRM-`,
  qx = `BFlA7ucDxBk-`,
  Jx = `_5NaHSqwUb-k-`,
  Yx = `RG63SnOtLk0-`,
  Xx = `XuI82j9l9uk-`,
  Zx = `_29km0evCwsI-`,
  Qx = `pL8IDIWBDg8-`,
  $x = `EbBLppwfKjc-`,
  eS = `EGwn6tH7C3A-`,
  tS = `p8u1MHwjP-M-`,
  nS = `h-z1TiT2EHc-`,
  rS = `lVRRRKgBwVY-`,
  iS = `DH6P5MgdIW4-`,
  aS = `v-DWOHY9-II-`,
  oS = `tXTiGEi7jtU-`,
  sS = `v2nIqzREAqo-`,
  cS = `YWSh4uKYrRw-`,
  lS = `rSkuhIlNBLw-`,
  uS = `_9tUDGLmuFv4-`,
  dS = `_4AjIhoHXOgI-`,
  fS = `Q-Ikm9aXlIY-`,
  pS = `j3KNKPgNrvY-`,
  mS = `_0TmI5Lz4Zkc-`,
  hS = `_6VXiW9d8-lQ-`,
  gS = `t274EZYLkbA-`,
  _S = `gni2wFLBcSk-`,
  vS = `Rbv-UgEUoaw-`,
  yS = `OvCIJMOKBQ8-`,
  bS = `_0lI2wcrU0XU-`,
  xS = `CuZwu-t3ukQ-`,
  SS = `bevr-bUWbuk-`,
  CS = `yedrb7j8BiU-`,
  wS = `hAnG1YoY-8k-`,
  TS = `u8sMh8Um98Q-`,
  ES = `JuZBiq95wYE-`,
  DS = `oh4R-N9DrSA-`,
  OS = {
    "duration-app-launch": `800ms`,
    narrowWidth: Sx,
    SaleSection: Cx,
    CarouselDisplay: wx,
    SaleSectionCtn: Tx,
    NoTopPadding: Ex,
    SaleHeaderContainer: Dx,
    DisabledBackground: Ox,
    SaleSectionTabs: kx,
    SaleViewAll: Ax,
    SaleSectionLoginPrompt: jx,
    LoginButton: Mx,
    SaleSectionLivePreview: Nx,
    Hover: Px,
    JumpedTo: Fx,
    JumpToSection: Ix,
    JumpToButton: Lx,
    SaleOverlayCtn: Rx,
    SaleOverlay: zx,
    CarouselCapsuleBordered: Bx,
    CarouselCapsuleAnimated: Vx,
    AppSummaryWidgetCtn: Hx,
    CarouselSalePageCapsule: Ux,
    SaleBroadcastCtn: Wx,
    SaleOuterTopMargin: Gx,
    SaleOuterContainer: Kx,
    CustomStyle_together: qx,
    SaleNewSizing: Jx,
    SalePageLogoSet: Yx,
    SaleBackground: Xx,
    SaleSectionTitleCtn: Zx,
    SaleSectionSubtext: Qx,
    SaleSectionContainer: $x,
    vr_supported: eS,
    vr_required: tS,
    preview_placeholder_section: nS,
    EmptySectionPreview: rS,
    LinkCapsule: iS,
    fullscreen_bg: aS,
    fullscreen_bg_video: oS,
    SalePageBroadcastContextHover: sS,
    AlbumCoverImage: cS,
    AlbumTitle: lS,
    SaleSectionTabListContainer: uS,
    MobileTabSelector: dS,
    Visible: fS,
    MobileTabSelectorButton: pS,
    MobileTabSelectorShortcut: mS,
    DesktopTabs: hS,
    MobileTabSelectorDropDown: gS,
    MobileTabSelectorOption: _S,
    TabContentsContainer: vS,
    HorizontalScrollInDragForceCursor: yS,
    SaleBroadcastSection: bS,
    CarouselPage: xS,
    TabButtonsCtn: SS,
    TabButton: CS,
    SaleTabLabel: wS,
    DefaultCreatorCtn: TS,
    EventSectionViewAllCtn: ES,
    SaleSectionBackgroundImageGroupEdit: DS,
  };
async function kS(e, t) {
  let n = La(z.STORE_BASE_URL, t, Hn.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function AS() {
  let e = xr(),
    t = Hn.accountid;
  return f(jS(e, t));
}
function jS(e, t) {
  return {
    queryKey: PS(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await kS(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function MS(e) {
  let { data: t } = AS();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function NS() {
  let e = x(),
    t = Hn.accountid;
  return (n, r) => {
    e.setQueryData(PS(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function PS(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function FS(e, t, n) {
  let r = NS(),
    i = Hn.accountid;
  return u({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = z.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, jn()),
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
      Ra();
    },
  });
}
var IS = `VULTMp1PCTw-`,
  LS = `_2vLXBykr6zc-`;
async function RS(e, t) {
  let n = La(z.STORE_BASE_URL, t, Hn.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function zS() {
  let e = xr(),
    t = Hn.accountid;
  return f(BS(e, t));
}
function BS(e, t) {
  return {
    queryKey: US(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await RS(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function VS(e) {
  let { data: t } = zS();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function HS() {
  let e = x(),
    t = Hn.accountid;
  return (n, r) => {
    e.setQueryData(US(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function US(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function WS(e, t, n, r = 0) {
  let i = HS(),
    a = Hn.accountid;
  return u({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = z.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, jn()),
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
      Ra();
    },
  });
}
function GS(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, K.useState)(!1),
    o = je(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = bv(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = WS(l, !VS(l), n),
    d = t && `appid` in t && Db.Get().BIsGameIgnored(t.appid);
  return (0, q.jsxs)(rt, {
    className: W(IS, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        Hn.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, q.jsx)(pt, {}),
      (0, q.jsx)(`div`, {
        className: W(LS, i && `vyz9N2LpdMs-`),
        children: L(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function KS(e, t) {
  let n = La(z.STORE_BASE_URL, t, Hn.country_code),
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
function qS() {
  let e = xr(),
    t = U.accountid;
  return f(JS(e, t));
}
function JS(e, t) {
  return {
    queryKey: eC(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await KS(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function YS(e) {
  let { data: t } = qS();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function XS(e) {
  let { data: t } = qS();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function ZS() {
  return B.EREALM != Ot.k_ESteamRealmChina;
}
function QS() {
  return B.EREALM != Ot.k_ESteamRealmChina;
}
function $S() {
  let e = x(),
    t = U.accountid;
  return (n, r, i, a) => {
    e.setQueryData(eC(t), (e) => {
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
function eC(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var tC = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function nC(e, t) {
  let n = $S(),
    r = Hn.accountid;
  return u({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == tC.k_ECuratorFollow || t == tC.k_ECuratorUnfollow,
        r = t == tC.k_ECuratorFollow || t == tC.k_ECuratorIgnore,
        i = `${z.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, jn()),
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
        let r = t == tC.k_ECuratorUnfollow || t == tC.k_ECuratorUnignore;
        n(
          t == tC.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == tC.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == tC.k_ECuratorFollow || t == tC.k_ECuratorIgnore;
        n(
          t == tC.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == tC.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        Ra());
    },
  });
}
var rC = `b70IXFNJqco-`;
function iC(e) {
  let { size: t, color: n, trackColor: r } = e,
    i = { borderColor: r, borderLeftColor: n };
  if (typeof t == `number`) {
    let e = `${t}px`;
    ((i.width = e),
      (i.height = e),
      (i.minHeight = e),
      (i.minWidth = e),
      (i.borderWidth = `${t / 10}px`));
  }
  return (0, q.jsx)(`div`, {
    className: W(
      rC,
      t == `small` && `_1aSjKS0YPT0-`,
      (t == `medium` || !t) && `zKPudkXmNc8-`,
      t == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: i,
  });
}
var aC = `QOSk1wMadGg-`,
  oC = `DH1jwyMHeXo-`,
  sC = `J5g1CfUd95U-`,
  cC = `_3IPvWkyhZzM-`,
  lC = `jB1S5EvgUjI-`,
  uC = `iWO-8zu8RAA-`,
  dC = `MTgAGoNV5vg-`,
  fC = `LEvP9jHHfL8-`,
  pC = `K9ZawxnkJcI-`,
  mC = `OlPIY4AN-5s-`,
  hC = `_7UT3Pb65ni0-`,
  gC = `sT74IdnPxY8-`,
  _C = `ZTz7p5tpqNU-`,
  vC = `ct7kvDppls0-`,
  yC = `SG9Xn5tF5a0-`,
  bC = `clYVRh6K2Ig-`,
  xC = `k6MwDwdCJTU-`,
  SC = `mnFUxHcas-0-`,
  CC = `_6lWvo8crYSU-`,
  wC = `r3PgsXSGPho-`,
  TC = `EWCiFLRR-T8-`,
  EC = `GEroszngeLM-`,
  DC = (e) => {
    let t = B.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, q.jsx)(fn, {
      strTitle: L(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, q.jsx)(`div`, {
        children: Dr(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, q.jsx)(`a`, {
            href: t,
            target: B.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: L(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  OC = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = bv();
    if (!ZS()) return null;
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
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(Zn, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, q.jsxs)(Gt, {
                className: W(dr, wC, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  U.logged_in ? a() : c();
                },
                children: [
                  r && (0, q.jsx)(iC, { size: 15 }),
                  !r && (i || n) && (0, q.jsx)(Jn, {}),
                  (0, q.jsx)(`div`, {
                    className: W(TC, `FollowBtnText`),
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
function kC(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = K.useState(!1),
    { data: s } = ve(t ? void 0 : r),
    c = YS(r),
    l = XS(r),
    { mutateAsync: u } = nC(r, c ? tC.k_ECuratorUnfollow : tC.k_ECuratorFollow),
    [d, f, p] = jr(),
    m = K.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(OC, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          U.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, q.jsx)(At, {
        active: d,
        children: (0, q.jsx)(DC, { closeModal: p }),
      }),
    ],
  });
}
function AC(e) {
  let { appid: t, className: n } = e,
    [r, i] = K.useState(!1),
    a = MS(t),
    o = VS(t),
    s = kn(),
    c = sr.GetSNRLinkParam(s),
    { mutateAsync: l } = FS(t, !a, c),
    u = K.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, q.jsx)(OC, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function jC(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = ve(t),
    { data: o } = Nc(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= We(void 0, `medium`, `web`)),
    (0, q.jsxs)(`div`, {
      className: W(Op, n),
      style: r,
      children: [
        (0, q.jsx)(`a`, {
          href: Ic(o, `developer`),
          children: (0, q.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, q.jsx)(kC, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var MC = new URL(
    `../../../images/applications/community/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  NC = 5500,
  PC = 2e3,
  FC = 10;
function IC(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, q.jsx)(
          `img`,
          {
            className: ip,
            loading: `lazy`,
            src: Ae(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: PC,
      }
    : null;
}
function LC(e, t) {
  return {
    stringifyID: `vid_${Qt(e)}`,
    rctImage: (0, q.jsx)(jd, { id: e, active: !0 }),
    nDurationMs: NC,
  };
}
function RC(e) {
  let t = Ze(e);
  return Cn(e) ? void 0 : t;
}
function zC(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = ke(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${Qt(e)}`,
      rctImage: (0, q.jsx)(
        `img`,
        {
          className: ip,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: PC,
    };
  });
}
function BC(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(LC(e, i)),
    r && r.length > 0 && a.push(...zC(e, t.name, r, FC)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = IC(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function VC(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(LC(t, a)), r && r.length > 0 && o.push(...zC(e, n.name, r, FC)));
  let s = FC - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...zC(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function HC(e) {
  return (0, q.jsx)(`img`, {
    className: ip,
    loading: `lazy`,
    src: Ge(MC),
    alt: `default`,
  });
}
function UC(e) {
  let { id: t } = e,
    { data: n } = st(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, q.jsx)(`div`, {
      className: rp,
      children: (0, q.jsx)(HC, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, q.jsx)(qC, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, q.jsx)(GC, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, q.jsx)(WC, { storeItemDefaultData: n });
}
function WC(e) {
  let { storeItemDefaultData: t } = e,
    n = dt(t),
    r = RC(n),
    { data: i } = Hr(n),
    a = Oe(n),
    o = (0, K.useMemo)(() => BC(n, t, i, a, r), [n, a, r, i, t]);
  return (0, q.jsx)(JC, { rgTrailerAndImages: o });
}
function GC(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = dt(t);
  return RC(r)
    ? (0, q.jsx)(WC, { storeItemDefaultData: t })
    : (0, q.jsx)(KC, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function KC(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = rc(t),
    a = Oe(n),
    o = Oe(i),
    s = RC(i),
    c = (0, K.useMemo)(() => VC(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, q.jsx)(JC, { rgTrailerAndImages: c });
}
function qC(e) {
  let { includeAppIDs: t } = e,
    n = Ln(),
    r = ei({ queries: t.map((e) => cr(n, { appid: e })) }),
    i = ei({ queries: t.map((e) => Bn(n, { appid: e })) }),
    a = (0, K.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return IC(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, q.jsx)(JC, { rgTrailerAndImages: a });
}
function JC(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, K.useRef)(0),
    r = Fn(),
    [i] = K.useState(new en()),
    a = (0, K.useCallback)(
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
    (0, K.useEffect)(() => (t.length > 0 && a(), () => i.Cancel()), [t, a, i]),
    (0, q.jsx)(`div`, {
      className: rp,
      children: t?.map((e, t) =>
        (0, q.jsx)(
          `div`,
          {
            className: W({ [ip]: !0, [ap]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
function YC(e) {
  let { children: t, ...n } = e,
    r = K.useRef(null);
  return (0, q.jsx)(Sc, { nodeRef: r, ...n, children: e.children(r) });
}
var XC = `ghYXSqVPJ-U-`,
  ZC = `lx1fe7xI0bg-`,
  QC = `ARp2qEoElPE-`,
  $C = `DwDon-U2yLI-`,
  ew = 150,
  tw = K.createContext(void 0);
function nw() {
  return K.useContext(tw);
}
function rw(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = dn(),
    c = Sl(),
    l = !s && !c,
    [u, d] = K.useState(!1),
    [f, p] = K.useState(void 0),
    m = (e) => {
      (d(!0), p(e.currentTarget));
    },
    h = () => d(!1),
    g = K.useCallback(() => d(!1), []);
  return (0, q.jsxs)(`div`, {
    "data-key": `hover div`,
    role: `button`,
    tabIndex: 0,
    className: W(XC, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, q.jsx)(tw.Provider, {
          value: g,
          children: (0, q.jsx)(iw, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, q.jsx)(Vr, { children: a }),
    ],
  });
}
function iw(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = ew,
      nWidthMultiplier: r = 1.15,
      target: i,
      visible: a,
      children: o,
    } = e,
    [s, c] = K.useState(a);
  if (
    (K.useEffect(() => {
      if (a) {
        if (n) {
          let e = window.setTimeout(() => c(!0), n);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (pr()) return;
        c(!1);
      }
    }, [a]),
    K.useEffect(() => {
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
        minHeight: ow() == `hiding` ? void 0 : 300,
        height: ow() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, q.jsx)(aw, {
    hoverProps: u,
    children: (0, q.jsx)(Vr, { children: o }),
  });
}
function aw(e) {
  let { hoverProps: t, children: n } = e,
    r = K.useCallback((e) => e?.focus(), []);
  return (0, q.jsx)(Nn, {
    ...t,
    children: (0, q.jsx)(YC, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: W(QC, sp), enterDone: W($C, cp) },
      children: (e) =>
        (0, q.jsx)(`div`, {
          ref: at(e, r),
          className: ZC,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function ow() {
  return window.sessionStorage?.getItem(sw) || `default`;
}
var sw = `DEBUG_UseNewGameHover`;
function cw(e) {
  window.sessionStorage.setItem(sw, e);
}
window.SetHoverPresentation = cw;
function lw(e) {
  if (e) {
    if (`appid` in e) return `app`;
    if (`bundleid` in e) return `bundle`;
    if (`packageid` in e) return `sub`;
  }
}
function uw(e) {
  let {
      id: t,
      hoverClassName: n,
      fnGetIDOverride: r,
      fnHoverState: i,
      disableScreenshots: a,
      children: o,
    } = e,
    s = K.useRef(null),
    c = K.useCallback(
      (e) => {
        let n = lw(t);
        n &&
          (i && i(!0),
          window.GameHover &&
            (s.current &&
              a &&
              (s.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(r ? r() : s.current, e, `global_hover`, {
              type: n,
              id: yt(t).id,
              v6: 1,
            })));
      },
      [i, r, a, t],
    ),
    l = K.useCallback(
      (e) => {
        lw(t) &&
          (i && e.relatedTarget && i(!1),
          window.HideGameHover &&
            window.HideGameHover(r ? r() : s.current, e, `global_hover`));
      },
      [t, i, r],
    );
  return (0, q.jsx)(`div`, {
    ref: s,
    className: n,
    onMouseEnter: c,
    onMouseLeave: l,
    onFocus: c,
    onBlur: l,
    children: o,
  });
}
function dw(e) {
  let { id: t, strExtraParams: n, fnOnClickOverride: r, strOverrideURL: i } = e,
    a = kn(),
    o = Ct(),
    s = Rt(
      i ||
        (t && `creatorid` in t
          ? Jt(
              `${B.STORE_BASE_URL}curator/${yt(t).id}${n ? `?${n}` : ``}`,
              a,
              o,
            )
          : Jt(
              `${B.STORE_BASE_URL}${lw(t)}/${yt(t).id}${n ? `?${n}` : ``}`,
              a,
              o,
            )),
    );
  return (0, q.jsx)(uw, {
    ...e,
    children: (0, q.jsx)(Pt, {
      className: e.className,
      href: r ? void 0 : s,
      target: B.IN_CLIENT || r ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: r,
      children: e.children,
    }),
  });
}
var fw = `saleaction/creategiveawayregistration`;
async function pw(e) {
  let t =
    B.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(e);
  return await hw(
    `GetUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, { credentials: `include` }),
  );
}
async function mw(e) {
  let t = B.STORE_BASE_URL + fw;
  return await hw(
    `UpdateUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, {
      method: `POST`,
      credentials: `include`,
      headers: { "content-type": `application/json` },
      body: JSON.stringify({ name: e }),
    }),
  );
}
async function hw(e, t, n, r) {
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success == 1 && i.registration) return i.registration;
  throw Error(e + ` on ` + t + ` answered ` + i?.success);
}
var gw = { registered: !1 };
function _w(e, t) {
  return [`sale`, `giveawayregistration`, e, t];
}
function vw(e, t) {
  return { queryKey: _w(e, t), queryFn: () => pw(e), enabled: !!e, retry: !1 };
}
function yw(e) {
  let { data: t, isError: n } = f(vw(e, U.accountid));
  return n ? gw : t;
}
function bw() {
  let e = x(),
    { mutateAsync: t } = u({
      mutationFn: mw,
      onSuccess: (t, n) => e.setQueryData(_w(n, U.accountid), t),
    });
  return {
    fnCreateRegistration: (0, K.useCallback)(
      async (e) => {
        try {
          return await t(e);
        } catch (t) {
          return (
            console.error(`Registering for giveaway ` + e + ` failed`, t), gw
          );
        }
      },
      [t],
    ),
  };
}
var xw = `hZ-dKtI-DOE-`,
  Sw = `_48uVrbfJQEM-`,
  Cw = `Lt6SJZ-PR1A-`,
  ww = `vmIVedNuofw-`,
  Tw = `gFqPN18pEI8-`,
  Ew = `yGT3R-m6gZk-`,
  Dw = `-I4fAFaLKxA-`,
  Ow = `bPmDLn-lEoc-`,
  kw = `_6txFjo9b8Zk-`,
  Aw = `_6y4EcbHPzTE-`,
  jw = `LQrwY5m9KjE-`,
  Mw = `HHtwpv2BsZo-`,
  Nw = `tdXc-z1nXGI-`,
  Pw = `D0L0mwSYCaE-`,
  Fw = `SGi7-TqE4Rs-`,
  Iw = `uPjG9NaDuUg-`,
  Lw = `G9e5dN5XFKM-`,
  Rw = `Cx2zVOdOEwU-`,
  zw = `rk6-75sKTfs-`,
  Bw = `D4J8JhjevEo-`,
  Vw = `OobKWZLrT2Q-`,
  Hw = `zoD9wRMnlzg-`,
  Uw = `x25qTcshK-4-`,
  Ww = `LQZsciPFbvE-`,
  Gw = `oo8VFYEMJNU-`,
  Kw = `_6SdwjlcjQF4-`,
  qw = `_8m3-fAAnr8I-`,
  Jw = `kg-spn-7ESc-`,
  Yw = `wErgDaiILYk-`,
  Xw = t({
    Bottom: () => uT,
    BottomLeft: () => lT,
    BottomRight: () => dT,
    DialogButton: () => ST,
    EdgeDown: () => Qw,
    Left: () => iT,
    LinkRegionButtonContainer: () => xT,
    LinkRegionDelete: () => oT,
    LinkRegionDragBox: () => Zw,
    LinkRegionEdge: () => eT,
    LinkRegionGridBox: () => $w,
    LinkRegionInfo: () => CT,
    LinkRegionSettings: () => sT,
    LinkText: () => wT,
    Middle: () => aT,
    Right: () => cT,
    Top: () => nT,
    TopLeft: () => tT,
    TopRight: () => rT,
    bottom: () => vT,
    bottomleft: () => _T,
    bottomright: () => yT,
    default: () => TT,
    left: () => hT,
    middle: () => bT,
    right: () => gT,
    top: () => pT,
    topleft: () => fT,
    topright: () => mT,
  }),
  Zw = `nUuv5WlFHKU-`,
  Qw = `JsVZp4CAPKg-`,
  $w = `s3jO9FbN4u4-`,
  eT = `SO1XLFjtCbU-`,
  tT = `TpO-SNRNS-E-`,
  nT = `lmnZa-M7bq0-`,
  rT = `LDrqaW8EJl8-`,
  iT = `WEHXDbI-0ZI-`,
  aT = `hc0dk3OoBCU-`,
  oT = `o5BUe1m-4BM-`,
  sT = `-e4w8MaVU8k-`,
  cT = `V3hcFn4-kHE-`,
  lT = `RIIVuSM7Y6Y-`,
  uT = `dkKyB9jj9aI-`,
  dT = `R4iVDKb6zeU-`,
  fT = `fzzwZd4-ISg-`,
  pT = `Oo4-WMoHDeE-`,
  mT = `D8BWJF43X-Q-`,
  hT = `Yc8TU3u-VW4-`,
  gT = `KMAHJAnBe6Q-`,
  _T = `bxVoRh5lFi4-`,
  vT = `e2-ZZOF2QKQ-`,
  yT = `XUrOCtEsKxM-`,
  bT = `TSm-D5CZFsE-`,
  xT = `fzB9IY83oAQ-`,
  ST = `RpcfV3ZNn8s-`,
  CT = `_1Be3592R7Ao-`,
  wT = `m9bHoo6uIPM-`,
  TT = {
    LinkRegionDragBox: Zw,
    EdgeDown: Qw,
    LinkRegionGridBox: $w,
    LinkRegionEdge: eT,
    TopLeft: tT,
    Top: nT,
    TopRight: rT,
    Left: iT,
    Middle: aT,
    LinkRegionDelete: oT,
    LinkRegionSettings: sT,
    Right: cT,
    BottomLeft: lT,
    Bottom: uT,
    BottomRight: dT,
    topleft: fT,
    top: pT,
    topright: mT,
    left: hT,
    right: gT,
    bottomleft: _T,
    bottom: vT,
    bottomright: yT,
    middle: bT,
    LinkRegionButtonContainer: xT,
    DialogButton: ST,
    LinkRegionInfo: CT,
    LinkText: wT,
  },
  ET = class extends K.Component {
    m_rectLinkRegion;
    m_elLinkRegionBox;
    m_nLocalOffsetXPct;
    m_nLocalOffsetYPct;
    m_fnMouseUp = null;
    m_fnMouseMove = null;
    m_listeners = new $e();
    m_strDescription = ``;
    m_aspectRatio = 1;
    componentWillUnmount() {
      this.m_listeners.Unregister();
    }
    constructor(e) {
      (super(e),
        (this.state = {
          curLeftPosPct: this.props.xPosPct,
          curTopPosPct: this.props.yPosPct,
          curRightPosPct: 100 - (this.props.widthPct + this.props.xPosPct),
          curBottomPosPct: 100 - (this.props.yPosPct + this.props.heightPct),
          curWidthPct: this.props.widthPct,
          curHeightPct: this.props.heightPct,
          EdgeDown: void 0,
          text_link_url: this.props.link_url,
          text_link_description: this.props.link_description,
          bEditingLink: !1,
          valid_link: this.validateUrl(this.props.link_url),
        }),
        (this.m_strDescription = this.props.link_description ?? ``),
        (this.m_aspectRatio =
          this.props.heightPct > 0 && this.props.widthPct > 0
            ? this.props.widthPct / this.props.heightPct
            : 1));
    }
    LinkRegionBoxRef(e) {
      this.m_elLinkRegionBox = e;
    }
    OnMouseDown(e, t) {
      (this.m_elLinkRegionBox?.parentElement &&
        this.m_elLinkRegionBox.ownerDocument.defaultView &&
        ((this.m_fnMouseUp = (e) => {
          this.OnMouseUp(e, t);
        }),
        (this.m_fnMouseMove = (e) => {
          this.OnMouseMove(e, t);
        }),
        this.setState({ EdgeDown: t }),
        (this.m_rectLinkRegion =
          this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
        (this.m_nLocalOffsetXPct =
          ((e.clientX - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
          this.state.curLeftPosPct),
        (this.m_nLocalOffsetYPct =
          ((e.clientY - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
          this.state.curTopPosPct),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mousemove`,
          this.m_fnMouseMove,
        ),
        this.m_listeners.AddEventListener(
          this.m_elLinkRegionBox.ownerDocument.defaultView,
          `mouseup`,
          this.m_fnMouseUp,
        )),
        e.preventDefault(),
        e.stopPropagation());
    }
    OnMouseMove(e, t) {
      if (this.state.EdgeDown !== void 0) {
        switch ((e.shiftKey && this.m_fnMouseUp(), t)) {
          case `left`:
            this.UpdateState({ curLeftPosPct: this.CalcLeftEdge(e.clientX) });
            break;
          case `right`:
            this.UpdateState({ curRightPosPct: this.CalcRightEdge(e.clientX) });
            break;
          case `top`:
            this.UpdateState({ curTopPosPct: this.CalcTopEdge(e.clientY) });
            break;
          case `bottom`:
            this.UpdateState({
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `topleft`:
            this.UpdateState({
              curTopPosPct: this.CalcBottomEdge(e.clientY),
              curLeftPosPct: this.CalcLeftEdge(e.clientX),
            });
            break;
          case `topright`:
            this.UpdateState({
              curTopPosPct: this.CalcTopEdge(e.clientY),
              curRightPosPct: this.CalcRightEdge(e.clientX),
            });
            break;
          case `bottomleft`:
            this.UpdateState({
              curLeftPosPct: this.CalcLeftEdge(e.clientX),
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `bottomright`:
            this.UpdateState({
              curRightPosPct: this.CalcRightEdge(e.clientX),
              curBottomPosPct: this.CalcBottomEdge(e.clientY),
            });
            break;
          case `middle`: {
            let t = Cr(
                this.CalcLeftEdge(e.clientX),
                0,
                100 - this.state.curWidthPct,
              ),
              n = 100 - (t + this.state.curWidthPct),
              r = Cr(
                this.CalcTopEdge(e.clientY),
                0,
                100 - this.state.curHeightPct,
              ),
              i = {
                curLeftPosPct: t,
                curRightPosPct: n,
                curTopPosPct: r,
                curBottomPosPct: 100 - (r + this.state.curHeightPct),
              };
            this.setState(i);
            break;
          }
        }
        (e.preventDefault(), e.stopPropagation());
      }
    }
    IsValidPct(e) {
      return e >= 0 && e <= 100;
    }
    UpdateState(e) {
      let t =
          e.curTopPosPct === void 0 ? this.state.curTopPosPct : e.curTopPosPct,
        n =
          e.curBottomPosPct === void 0
            ? this.state.curBottomPosPct
            : e.curBottomPosPct,
        r =
          e.curLeftPosPct === void 0
            ? this.state.curLeftPosPct
            : e.curLeftPosPct,
        i =
          e.curRightPosPct === void 0
            ? this.state.curRightPosPct
            : e.curRightPosPct,
        a = Cr(
          100 - i - r,
          this.props.widthMinPct || 0,
          this.props.widthMaxPct || 100,
        ),
        o = Cr(
          100 - n - t,
          this.props.heightMinPct || 0,
          this.props.heightMaxPct || 100,
        );
      (this.props.bLockAspectRatio &&
        (e.curLeftPosPct !== void 0 || e.curRightPosPct !== void 0
          ? (o = a / this.m_aspectRatio)
          : (a = o * this.m_aspectRatio)),
        e.curLeftPosPct === void 0 ? (i = 100 - (r + a)) : (r = 100 - i - a),
        e.curTopPosPct === void 0 ? (n = 100 - (t + o)) : (t = 100 - n - o));
      let s = 100 - i - r,
        c = 100 - n - t;
      this.IsValidPct(r) &&
        this.IsValidPct(i) &&
        this.IsValidPct(t) &&
        this.IsValidPct(n) &&
        this.IsValidPct(s) &&
        this.IsValidPct(c) &&
        this.setState({
          curLeftPosPct: r,
          curRightPosPct: i,
          curTopPosPct: t,
          curBottomPosPct: n,
        });
    }
    GetXPercent(e) {
      return this.m_rectLinkRegion
        ? ((e - this.m_rectLinkRegion.left) /
            (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
            100 -
            (this.m_nLocalOffsetXPct ?? 0)
        : 0;
    }
    GetYPercent(e) {
      return this.m_rectLinkRegion
        ? ((e - this.m_rectLinkRegion.top) /
            (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
            100 -
            (this.m_nLocalOffsetYPct ?? 0)
        : 0;
    }
    CalcLeftEdge(e) {
      return Cr(this.GetXPercent(e), 0, 100);
    }
    CalcRightEdge(e) {
      return Cr(100 - (this.GetXPercent(e) + this.state.curWidthPct), 0, 100);
    }
    CalcTopEdge(e) {
      return Cr(this.GetYPercent(e), 0, 100);
    }
    CalcBottomEdge(e) {
      return Cr(100 - (this.GetYPercent(e) + this.state.curHeightPct), 0, 100);
    }
    OnMouseUp(e, t) {
      (this.setState({
        curWidthPct: 100 - this.state.curRightPosPct - this.state.curLeftPosPct,
      }),
        this.setState({
          curHeightPct:
            100 - this.state.curBottomPosPct - this.state.curTopPosPct,
        }),
        this.setState({ EdgeDown: void 0 }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }),
        this.m_listeners.Unregister());
    }
    async HandleDelete() {
      this.props.deleteFn && this.props.deleteFn(this.props.index);
    }
    OnSetLinkURLChange(e) {
      this.setState({
        text_link_url: e.target.value,
        valid_link: this.validateUrl(e.target.value),
      });
    }
    OnSetLinkDescriptionChange(e) {
      this.setState({ text_link_description: e.target.value });
    }
    validateUrl(e) {
      return (
        e != null &&
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        )
      );
    }
    OnSaveLink() {
      ((this.m_strDescription = this.state.text_link_description ?? ``),
        this.setState({ bEditingLink: !this.state.bEditingLink }),
        this.props.updateFn(this.props.index, {
          xPosPct: this.state.curLeftPosPct,
          yPosPct: this.state.curTopPosPct,
          widthPct: this.state.curWidthPct,
          heightPct: this.state.curHeightPct,
          link_url: this.state.text_link_url,
          link_description: this.state.text_link_description,
        }));
    }
    OnEditLink() {
      this.setState({ bEditingLink: !this.state.bEditingLink });
    }
    render() {
      let e = {
          left: this.state.curLeftPosPct + `%`,
          top: this.state.curTopPosPct + `%`,
          right: this.state.curRightPosPct + `%`,
          bottom: this.state.curBottomPosPct + `%`,
        },
        t = Zw;
      return (
        this.state.EdgeDown != null &&
          (t += ` ${Qw} ` + Xw[this.state.EdgeDown]),
        (0, q.jsxs)(`div`, {
          className: t,
          style: e,
          ref: this.LinkRegionBoxRef,
          draggable: !1,
          children: [
            (0, q.jsxs)(`div`, {
              className: $w,
              children: [
                (0, q.jsx)(`div`, {
                  className: `${eT} ${tT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topleft`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${nT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `top`);
                  },
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${rT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topright`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${iT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `left`);
                  },
                  draggable: !1,
                }),
                (0, q.jsxs)(`div`, {
                  className: `${eT} ${aT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `middle`);
                  },
                  draggable: !1,
                  children: [
                    this.props.deleteFn &&
                      (0, q.jsx)(`div`, {
                        className: `o5BUe1m-4BM-`,
                        onClick: this.HandleDelete,
                        children: (0, q.jsx)(Un, {}),
                      }),
                    !this.props.bDisableLink &&
                      (0, q.jsx)(`div`, {
                        className: `-e4w8MaVU8k-`,
                        onClick: this.OnEditLink,
                        children: (0, q.jsx)(An, {}),
                      }),
                    (0, q.jsxs)(`div`, {
                      className: wT,
                      children: [` `, this.m_strDescription, ` `],
                    }),
                  ],
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${cT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `right`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${lT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottomleft`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${uT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottom`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${eT} ${dT}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottomright`);
                  },
                  draggable: !1,
                }),
              ],
            }),
            this.state.bEditingLink &&
              (0, q.jsxs)(`div`, {
                className: `_1Be3592R7Ao-`,
                children: [
                  (0, q.jsx)(gn, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    value: this.state.text_link_url,
                    label: L(`#SteamTV_LinkURL`),
                    placeholder: `https://www.example.com`,
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  (0, q.jsx)(gn, {
                    className: void 0,
                    type: `text`,
                    name: `link_description`,
                    value: this.state.text_link_description,
                    label: L(`#SteamTV_LinkDescription`),
                    placeholder: L(`#SteamTV_LinkDescription_Placeholder`),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  (0, q.jsxs)(`div`, {
                    className: `fzB9IY83oAQ-`,
                    children: [
                      (0, q.jsxs)(xn, {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                        children: [` `, L(`#Button_OK`), ` `],
                      }),
                      (0, q.jsxs)(xn, {
                        onClick: this.OnEditLink,
                        children: [` `, L(`#Button_Cancel`)],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      );
    }
  };
(E([j], ET.prototype, `LinkRegionBoxRef`, null),
  E([j], ET.prototype, `OnMouseDown`, null),
  E([j], ET.prototype, `OnMouseMove`, null),
  E([j], ET.prototype, `OnMouseUp`, null),
  E([j], ET.prototype, `HandleDelete`, null),
  E([j], ET.prototype, `OnSetLinkURLChange`, null),
  E([j], ET.prototype, `OnSetLinkDescriptionChange`, null),
  E([j], ET.prototype, `OnSaveLink`, null),
  E([j], ET.prototype, `OnEditLink`, null),
  (ET = E([o], ET)));
var DT = `Es-UANTRhdg-`,
  OT = `FsYxDNcAXaI-`,
  kT = `cSFkUHyVW24-`,
  AT = `yT92BfNEvpw-`,
  jT = `_6jMisrq5Zfo-`,
  MT = `XBv92QzB8Xc-`,
  NT = `NjUCqxvhkHk-`,
  PT = `gxh8RxFKhr8-`,
  FT = `AmB85SkEC3Q-`,
  IT = `P5j4maR0i14-`;
function LT(e) {
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
    l = a ? n : n ? RT(n, B.STORE_BASE_URL) : void 0,
    u = wr(l);
  return u
    ? (0, q.jsx)(Pt, {
        href: u,
        target: B.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, q.jsx)(`span`, { style: r, className: t, children: i });
}
function RT(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function zT(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, q.jsx)(`div`, {
        className: Ax,
        children: (0, q.jsx)(LT, {
          url: t.label_link,
          children: R.Localize(`#btn_live_streams_all`),
        }),
      });
}
function BT(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = HT(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, q.jsx)(rt, {
        className: W(DT, OT, kT),
        "flow-children": `row`,
        children: (0, q.jsx)(VT, { saleEvent: a }),
      })
    : null;
}
function VT(e) {
  let { saleEvent: t, children: n } = e,
    r = t?.strSaleURL,
    i = t?.strCapsuleURL,
    a = t?.strSummary,
    o = Ht(),
    s = dn(),
    c = t?.rtEndTime
      ? Ur(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: o,
        })
      : void 0;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      i &&
        (0, q.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${i})` },
        }),
      (0, q.jsxs)(`div`, {
        className: AT,
        children: [
          (0, q.jsxs)(`div`, {
            className: jT,
            children: [
              (0, q.jsx)(`div`, {
                className: MT,
                children: (0, q.jsx)(LT, {
                  url: r,
                  className: NT,
                  bFocusable: !1,
                  children: t?.strName,
                }),
              }),
              c &&
                (0, q.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: L(`#Sale_CrossPromoSale_NowThrough`, c),
                }),
            ],
          }),
          r &&
            (0, q.jsx)(LT, {
              url: r,
              className: W(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: an,
              children: L(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
        ],
      }),
      (0, q.jsxs)(`div`, {
        className: PT,
        children: [
          i &&
            (0, q.jsxs)(LT, {
              url: r,
              className: `oztjxXYIBAk-`,
              bFocusable: !!s,
              children: [
                (0, q.jsx)(`img`, { src: i, alt: `` }),
                a &&
                  (0, q.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, q.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: a,
                    }),
                  }),
              ],
            }),
          n,
        ],
      }),
      r &&
        (0, q.jsx)(`div`, {
          className: `T1fHkhyvNkM-`,
          children: (0, q.jsx)(LT, {
            url: r,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: an,
            children: L(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function HT(e, t) {
  let n = tx(e ?? void 0, `capsule`, t);
  if (e)
    return {
      clanAccountID: e.clanSteamID.GetAccountID(),
      strEventGID: e.GID ?? ``,
      strName: e.GetNameWithFallback(t) ?? ``,
      rtEndTime: e.endTime || void 0,
      strSummary: e.GetSummaryWithFallback(t) || void 0,
      strCapsuleURL: n,
      strSaleURL: Se(e) ?? void 0,
    };
}
var UT = -700,
  WT = -600,
  GT = -599,
  KT = -598,
  qT = -597,
  JT = -596,
  YT = -595,
  XT = -594,
  ZT = -593,
  QT = -592,
  $T = -591,
  eE = -590,
  tE = -589,
  nE = -588,
  rE = -587,
  iE = -586,
  aE = -585,
  oE = -584,
  sE = -583,
  cE = -582,
  lE = -581,
  uE = -580,
  dE = -579,
  fE = -578,
  pE = -577,
  mE = -576,
  hE = -575,
  gE = -574,
  _E = -573,
  vE = -572,
  yE = -571,
  bE = -500,
  xE = -499,
  SE = -498,
  CE = -497,
  wE = -496,
  TE = -300,
  EE = -203,
  DE = -202,
  OE = -201,
  kE = -200,
  AE = -199,
  jE = -198,
  ME = -197,
  NE = -196,
  PE = -195,
  FE = -194,
  IE = -193,
  LE = -192,
  RE = -191,
  zE = -190,
  BE = -189,
  VE = -188,
  HE = -187,
  UE = -186,
  WE = -185,
  GE = -184,
  KE = -183,
  qE = -182,
  JE = -102,
  YE = -101,
  XE = -100;
function ZE(e) {
  switch (e) {
    case 0:
      return `Windows`;
    case 1:
      return `Windows 3.11`;
    case 2:
      return `Windows 95`;
    case 3:
      return `Windows 98`;
    case 4:
      return `Windows ME`;
    case 5:
      return `Windows NT`;
    case 6:
      return `Windows 2000`;
    case 7:
      return `Windows XP`;
    case 8:
      return `Windows 2003`;
    case 9:
      return `Windows Vista`;
    case 10:
      return `Windows 7`;
    case 11:
      return `Windows 2008`;
    case 12:
      return `Windows 2012`;
    case 15:
      return `Windows 2012 R2`;
    case 13:
      return `Windows 8`;
    case 14:
      return `Windows 8.1`;
    case 16:
      return `Windows 10`;
    case 17:
      return `Windows 2016`;
    case 18:
      return `Windows 2019`;
    case 19:
      return `Windows 2022`;
    case 20:
      return `Windows 11`;
    case JE:
      return `Mac OS`;
    case YE:
      return `MacOS 10.4`;
    case XE:
      return `MacOS 10.5`;
    case -99:
      return `MacOS 10.5.8`;
    case -95:
      return `MacOS 10.6`;
    case -94:
      return `MacOS 10.6.3`;
    case -93:
      return `MacOS 10.6.4 with Apple's Snow Leopard Graphics Update`;
    case -92:
      return `MacOS 10.6.7`;
    case -90:
      return `MacOS 10.7`;
    case -89:
      return `MacOS 10.8`;
    case -88:
      return `MacOS 10.9`;
    case -87:
      return `MacOS 10.10`;
    case -86:
      return `MacOS 10.11`;
    case -85:
      return `MacOS 10.12`;
    case -84:
      return `MacOS 10.13`;
    case -83:
      return `MacOS 10.14`;
    case -82:
      return `MacOS 10.15`;
    case -81:
      return `MacOS 11 (as 10.16)`;
    case -75:
      return `MacOS 12 (as 10.17)`;
    case -70:
      return `MacOS 13 (as 10.18)`;
    case -80:
      return `MacOS 11`;
    case -79:
      return `MacOS 11.1`;
    case -74:
      return `MacOS 12`;
    case -69:
      return `MacOS 13`;
    case -68:
      return `MacOS 14`;
    case -67:
      return `MacOS 15`;
    case EE:
      return `Linux`;
    case DE:
      return `Linux 2.2`;
    case OE:
      return `Linux 2.4`;
    case kE:
      return `Linux 2.6`;
    case AE:
      return `Linux 3.2`;
    case jE:
      return `Linux 3.5`;
    case ME:
      return `Linux 3.6`;
    case NE:
      return `Linux 3.10`;
    case PE:
      return `Linux 3.16`;
    case FE:
      return `Linux 3.18`;
    case IE:
      return `Linux 3.x`;
    case RE:
      return `Linux 4.1`;
    case zE:
      return `Linux 4.4`;
    case BE:
      return `Linux 4.9`;
    case VE:
      return `Linux 4.14`;
    case HE:
      return `Linux 4.19`;
    case LE:
      return `Linux 4.x`;
    case UE:
      return `Linux 5.x`;
    case WE:
      return `Linux 5.4`;
    case GE:
      return `Linux 6.x`;
    case KE:
      return `Linux 7.x`;
    case qE:
      return `Linux 5.10`;
    case TE:
      return `PS3`;
    case UT:
      return `Web Client`;
    case bE:
      return `Android`;
    case xE:
      return `Android 6.x`;
    case SE:
      return `Android 7.x`;
    case CE:
      return `Android 8.x`;
    case wE:
      return `Android 9.x`;
    case WT:
      return `iOS`;
    case GT:
      return `iOS 1`;
    case KT:
      return `iOS 2`;
    case qT:
      return `iOS 3`;
    case JT:
      return `iOS 4`;
    case YT:
      return `iOS 5`;
    case XT:
      return `iOS 6`;
    case ZT:
      return `iOS 6.1`;
    case QT:
      return `iOS 7`;
    case $T:
      return `iOS 7.1`;
    case eE:
      return `iOS 8`;
    case tE:
      return `iOS 8.1`;
    case nE:
      return `iOS 8.2`;
    case rE:
      return `iOS 8.3`;
    case iE:
      return `iOS 8.4`;
    case aE:
      return `iOS 9`;
    case oE:
      return `iOS 9.1`;
    case sE:
      return `iOS 9.2`;
    case cE:
      return `iOS 9_.3`;
    case lE:
      return `iOS 10`;
    case uE:
      return `iOS 10.1`;
    case dE:
      return `iOS 10.2`;
    case fE:
      return `iOS 10.3`;
    case pE:
      return `iOS 11`;
    case mE:
      return `iOS 11.1`;
    case hE:
      return `iOS 11.2`;
    case gE:
      return `iOS 11.3`;
    case _E:
      return `iOS 11.4`;
    case vE:
      return `iOS 12`;
    case yE:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var QE = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  $E = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.protocol_version || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            os: { n: 2, br: A.readString, bw: k.writeString },
            machine_name: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  eD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Request`;
    }
  },
  tD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: nD, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  nD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            protocol_version: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            os_name: { n: 3, br: A.readString, bw: k.writeString },
            machine_name: { n: 4, br: A.readString, bw: k.writeString },
            os_type: { n: 5, br: A.readInt32, bw: k.writeInt32 },
            device_type: { n: 6, br: A.readInt32, bw: k.writeInt32 },
            realm: { n: 7, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  rD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  iD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_version || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            os: { n: 2, br: A.readString, bw: k.writeString },
            machine_name: { n: 3, br: A.readString, bw: k.writeString },
            ip_public: { n: 4, br: A.readString, bw: k.writeString },
            ip_private: { n: 5, br: A.readString, bw: k.writeString },
            bytes_available: {
              n: 6,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            running_games: { n: 7, c: aD, r: !0, q: !0 },
            protocol_version: { n: 8, br: A.readUint32, bw: k.writeUint32 },
            clientcomm_version: { n: 9, br: A.readUint32, bw: k.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  aD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            extra_info: { n: 2, br: A.readString, bw: k.writeString },
            time_running_sec: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  oD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_info || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: iD } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  sD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.fields || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: A.readString, bw: k.writeString },
            filters: { n: 2, br: A.readString, bw: k.writeString },
            client_instanceid: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            include_client_info: { n: 4, br: A.readBool, bw: k.writeBool },
            language: { n: 5, br: A.readString, bw: k.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  cD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bytes_available || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bytes_available: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            apps: { n: 2, c: lD, r: !0, q: !0 },
            client_info: { n: 3, c: iD },
            refetch_interval_sec_full: {
              n: 4,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: A.readUint32,
              bw: k.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  lD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            app: { n: 2, br: A.readString, bw: k.writeString },
            category: { n: 3, br: A.readString, bw: k.writeString },
            app_type: { n: 4, br: A.readString, bw: k.writeString },
            num_downloading: { n: 8, br: A.readUint32, bw: k.writeUint32 },
            bytes_download_rate: { n: 11, br: A.readUint32, bw: k.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            dlcs: { n: 17, c: uD, r: !0, q: !0 },
            favorite: { n: 18, br: A.readBool, bw: k.writeBool },
            auto_update: { n: 19, br: A.readBool, bw: k.writeBool },
            installed: { n: 20, br: A.readBool, bw: k.writeBool },
            download_paused: { n: 21, br: A.readBool, bw: k.writeBool },
            changing: { n: 22, br: A.readBool, bw: k.writeBool },
            available_on_platform: { n: 23, br: A.readBool, bw: k.writeBool },
            bytes_staged: {
              n: 24,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            source_buildid: { n: 27, br: A.readUint32, bw: k.writeUint32 },
            target_buildid: { n: 28, br: A.readUint32, bw: k.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: A.readInt32, bw: k.writeInt32 },
            uninstalling: { n: 31, br: A.readBool, bw: k.writeBool },
            rt_time_scheduled: { n: 32, br: A.readUint32, bw: k.writeUint32 },
            running: { n: 33, br: A.readBool, bw: k.writeBool },
            update_percentage: { n: 34, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  uD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            app: { n: 2, br: A.readString, bw: k.writeString },
            installed: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  dD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: k.writeUint32 },
            client_instanceid: {
              n: 2,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  fD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Response`;
    }
  },
  pD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: k.writeUint32 },
            client_instanceid: {
              n: 2,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  mD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Response`;
    }
  },
  hD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: A.readUint32, bw: k.writeUint32 },
            action: { n: 2, q: !0, br: A.readUint32, bw: k.writeUint32 },
            client_instanceid: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  gD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            appid: { n: 2, q: !0, br: A.readUint32, bw: k.writeUint32 },
            query_params: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  _D = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Response`;
    }
  },
  vD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Response`;
    }
  },
  yD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_instanceid: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            enable: { n: 2, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  bD = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Response`;
    }
  },
  xD;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, C(QE, t, n), $E, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, C(eD, t, n), tD, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, C(rD, t, n), oD, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, C(sD, t, n), cD, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, C(dD, t, n), fD, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, C(pD, t, n), mD, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, C(gD, t, n), _D, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, C(hD, t, n), vD, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, C(yD, t, n), bD, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((xD ||= {}));
var SD = `RemoteDownload_OnlineClient`,
  CD = `RemoteDownload_ClientAppList`,
  wD = `RemoteDownload_ClientAppData`,
  TD = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function ED() {
  let e = xr(),
    t = Tn();
  return f({
    queryKey: [SD, t],
    queryFn: async () => {
      let t = qt.Init(eD),
        n = await xD.GetAllClientLogonInfo(e, t);
      if (n.GetEResult() !== 1)
        throw (
          console.error(
            `Received error from GetAllClientLogonInfo`,
            n.GetEResult(),
            n.Hdr().transport_error(),
          ),
          Error(`Error from GetAllClientLogonInfo: ${n.GetEResult()}`)
        );
      let r = [];
      for (let e of n.Body().sessions())
        e.device_type() !== 0 && r.push(e.toObject());
      return {
        sessions: r,
        refetchInterval: n.Body().refetch_interval_sec() || 300,
      };
    },
    staleTime: 3e5,
    refetchInterval: (e) => (e.state.data?.refetchInterval || 300) * 1e3,
  });
}
var DD = class {
  constructor(e) {
    (Object.assign(this, e.toObject()),
      (this.bytes_to_download = parseInt(e.bytes_to_download() ?? `0`)),
      (this.bytes_downloaded = parseInt(e.bytes_downloaded() ?? `0`)),
      (this.bytes_staged = parseInt(e.bytes_staged() ?? `0`)),
      (this.bytes_to_stage = parseInt(e.bytes_to_stage() ?? `0`)),
      (this.bytes_required = parseInt(e.bytes_required() ?? `0`)));
  }
  appid;
  app;
  category;
  app_type;
  num_downloading;
  bytes_download_rate;
  bytes_downloaded;
  bytes_to_download;
  favorite;
  auto_update;
  installed;
  download_paused;
  changing;
  available_on_platform;
  bytes_staged;
  bytes_to_stage;
  bytes_required;
  source_buildid;
  target_buildid;
  estimated_seconds_remaining;
  queue_position;
  uninstalling;
  rt_time_scheduled;
  update_percentage;
  BIsDownloading() {
    return this.num_downloading !== void 0 && this.num_downloading > 0;
  }
  SetDownloading() {
    ((this.num_downloading = 1), (this.download_paused = !1));
  }
  SetPaused(e) {
    ((this.download_paused = e), (this.num_downloading = +!e));
  }
  BIsAtTopOfQueue() {
    return this.queue_position === 0;
  }
  BIsPaused() {
    return (
      !!this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage ||
        this.queue_position != -1)
    );
  }
  BHasPendingUpdate() {
    return (
      !this.BIsDownloading() &&
      !this.download_paused &&
      (this.bytes_downloaded < this.bytes_to_download ||
        this.bytes_staged < this.bytes_to_stage)
    );
  }
  GetPercentComplete() {
    return this.update_percentage
      ? this.update_percentage
      : this.bytes_to_download
        ? Math.floor((this.bytes_downloaded * 100) / this.bytes_to_download)
        : 0;
  }
};
async function OD(e, t, n) {
  let r = t.client_instanceid,
    i = qt.Init(sD);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await xD.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new TD(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new DD(e);
    o.set(e.appid(), t);
  }
  return {
    session: t,
    mapApps: o,
    clientInfo: a.Body().client_info()?.toObject(),
    refetchIntervals: {
      full: a.Body().refetch_interval_sec_full() || 3600,
      changing: a.Body().refetch_interval_sec_changing() || 60,
      updating: a.Body().refetch_interval_sec_updating() || 10,
    },
  };
}
async function kD(e, t, n, r) {
  if (!r) return;
  let i = await OD(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function AD(e, t, n) {
  return [CD, e, t, n];
}
function jD(e, t = !0) {
  let n = ED(),
    r = xr(),
    i = Tn(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = ei({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: AD(i, e.client_instanceid, `none`),
        queryFn: async () => OD(r, e, `none`),
        staletime: 36e5,
        refetchInterval: (e) =>
          (e.state.data?.refetchIntervals.full || 3600) * 1e3,
        enabled: n.isSuccess && !n.isFetching,
        onError: a,
        retry: t,
      })),
    }),
    s = (0, K.useCallback)(
      (t) => {
        if (!e) return t;
        let n = new Map(Array.from(t?.mapApps.entries() ?? []).filter(e));
        return { ...t, mapApps: n };
      },
      [e],
    ),
    c = x();
  return {
    rgQueries: ei({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: AD(i, e.client_instanceid, `changing`),
        queryFn: async () => kD(r, e, `changing`, o[n].data),
        enabled: o[n].isSuccess && !o[n].isFetching,
        staletime: 1e4,
        select: s,
        refetchInterval: (e) => {
          let t = e.state.data;
          if (!t) return 6e4;
          let n = !1;
          for (let e of t.mapApps.values())
            if (e.BIsDownloading() || e.uninstalling) {
              n = !0;
              break;
            }
          let r = t.refetchIntervals;
          return (n ? r.updating : r.changing) * 1e3;
        },
        onError: a,
        retry: t,
      })),
    }).map((e, t) => (o[t].isError && !o[t].isFetching ? o[t] : e)),
    refetch: () => {
      for (let e of n.data?.sessions || []) {
        let t = AD(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function MD(e, t) {
  return [wD, e, t];
}
function ND(e, t = !0) {
  let n = Tn(),
    { rgQueries: r } = jD(void 0, t);
  return f({
    queryKey: MD(n, e),
    queryFn: () => {
      let t = new Map();
      for (let n of r)
        if (n.isSuccess) {
          let r = n.data?.session?.client_instanceid,
            i = n.data?.mapApps?.get(e);
          i &&
            t.set(r, {
              session: n.data.session,
              app: i,
              clientInfo: n.data.clientInfo,
            });
        }
      return t;
    },
    enabled: r.reduce((e, t) => e && t.isSuccess && !t.isFetching, !0),
    staleTime: 0,
    gcTime: 0,
  });
}
function PD(e, t, n) {
  let r = xr(),
    i = ND(e),
    a = Tn(),
    o = x();
  return u({
    mutationFn: async () => {
      let n = qt.Init(dD);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let s = await xD.InstallClientApp(r, n);
      if (s.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, s.GetEResult()),
          Error(`Error from InstallClientApp: ${s.GetEResult()}`)
        );
      let c = i?.data;
      (c && c.get(t) && c.get(t).app.SetDownloading(),
        o.setQueryData(MD(a, e), c),
        i.refetch());
    },
    onSuccess: n,
  });
}
var FD = `KDJh8Ln6DTA-`,
  ID = `cwU-YKIjBO4-`,
  LD = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function RD(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, K.useCallback)(
      (e) => {
        n?.length &&
          mn(
            (0, q.jsx)(zD, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            LD,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, q.jsx)(`button`, {
        onClick: r,
        className: FD,
        children: (0, q.jsx)(VD, {}),
      })
    : null;
}
function zD({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, q.jsx)(`ul`, {
    className: ID,
    children: e.map((e) =>
      (0, q.jsx)(
        Dt,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: L(
            `#GamesList_Client_Indicator`,
            BD(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function BD(e) {
  switch (e) {
    case 1:
      return L(`#Library_DeviceType_PC`);
    case 544:
      return L(`#Library_DeviceType_SteamDeck`);
    case 546:
      return L(`#Library_DeviceType_SteamMachine`);
    case xt:
      return L(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function VD(e) {
  return (0, q.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 13 8`,
    fill: `none`,
    ...e,
    children: (0, q.jsx)(`path`, {
      fill: `currentColor`,
      d: `M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z`,
    }),
  });
}
var HD = `O2hPihu9CRE-`,
  UD = `QhSrcq93V7k-`,
  WD = `_7MjE60RYT0Q-`,
  GD = `UlZXEOyFPCE-`,
  KD = `_8wO4Yx-lIIo-`,
  qD = `FA82eVIC918-`,
  JD = `_0sgpZmAY-zs-`,
  YD = `RLntJ4QtQLU-`;
function XD(e) {
  let { appid: t } = e,
    n = rc(t),
    { data: r } = P(n),
    [i, a, o] = jr(!1),
    { mutateAsync: s } = nf({ appid: t }),
    [c, l] = (0, K.useState)(!1),
    u = Wa(t);
  return !r || u
    ? null
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsxs)(Te, {
            onClick: async () => {
              try {
                (l(!0), await s(), Ra(), l(!1), a());
              } catch (e) {
                (l(!1),
                  console.error(
                    `Error AddToLibraryActionWithRemoteInstall`,
                    e,
                  ));
              }
            },
            children: [
              c && (0, q.jsx)(we, { size: `small` }),
              L(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, q.jsx)(Vr, {
            children: (0, q.jsx)(At, {
              active: i,
              children: (0, q.jsx)(fn, {
                strTitle: L(`#Sale_AddedToLibrary`),
                strDescription: Dr(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, q.jsx)(`span`, { className: WD, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, q.jsx)(ZD, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function ZD(e) {
  let { id: t } = e,
    n = ED(),
    [r, i] = (0, K.useState)(0),
    [a, o] = (0, K.useState)(!1),
    { data: s } = Nt(t);
  if (!t || !(`appid` in t) || z.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = ZE(e.os_type);
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
    return (0, q.jsx)(`div`, {
      className: HD,
      children: a
        ? (0, q.jsx)($D, { session: e })
        : (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(QD, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, q.jsx)(`div`, {
                className: qD,
                children: (0, q.jsx)(eO, {
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
function QD(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(`div`, { children: L(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, q.jsxs)(`div`, {
        className: JD,
        children: [
          (0, q.jsx)(`span`, { className: YD, children: n.machine_name }),
          (0, q.jsx)(RD, {
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
function $D(e) {
  let { session: t } = e;
  return (0, q.jsxs)(`div`, {
    className: GD,
    children: [
      L(`#Sale_AddToLibrary_DownloadStarted`),
      (0, q.jsx)(`br`, {}),
      (0, q.jsx)(`a`, {
        href: `${z.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: L(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function eO(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = PD(t, n.client_instanceid);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsxs)(Te, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, q.jsx)(it, {}), L(`#Button_StartDownload`)],
      }),
      (0, q.jsx)(`div`, {
        className: KD,
        children: (0, q.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: UD,
          children: L(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function tO(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, q.jsxs)(`div`, {
        className: W(su, i ? _u : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, q.jsx)(`div`, {
              className: W(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: R.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, q.jsx)(`div`, {
                className: W(vu, `TagBox`),
                children: t.map((e) =>
                  (0, q.jsx)(rO, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, q.jsx)(`div`, { children: R.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function nO(e) {
  let { tagid: t, className: n } = e,
    r = Qs(t, B.LANGUAGE);
  if (!r) return null;
  let i = pn(br(B.LANGUAGE)),
    a = `${B.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, q.jsx)(LT, {
    url: a,
    className: W(yu, `WidgetTag`, n),
    children: r,
  });
}
function rO(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = pn(br(B.LANGUAGE)),
    a = Qs(t, B.LANGUAGE),
    o = `${B.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, q.jsx)(`div`, { className: W(yu, `WidgetTag`, n), children: a })
      : (0, q.jsx)(LT, {
          url: o,
          className: W(yu, `WidgetTag`, n),
          children: a,
        })
    : null;
}
function iO(e, t, n = !1) {
  let { data: r } = P(e),
    { data: i } = Hr(e, n),
    a;
  r &&
    r.included_appids?.length == 1 &&
    !aO(i, t) &&
    r.item_type &&
    [1, 2].includes(r.item_type) &&
    (a = { appid: r.included_appids[0] });
  let { data: o } = P(a),
    { data: s } = Hr(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function aO(e, t) {
  if (!e) return !1;
  switch (t) {
    case `header`:
      return !!e.header;
    case `main`:
      return !!e.main_capsule;
    case `vertical`:
    case `library`:
      return !!e.hero_capsule || !!e.library_capsule;
    default:
      return (vn(t, `Unhandled imageType: ${t}`), !1);
  }
}
var oO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.impressions || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { impressions: { n: 1, c: sO, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  sO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: A.readEnum, bw: k.writeEnum },
            appid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            num_impressions: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  cO;
(function (e) {
  function t(e, t) {
    return e.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      C(oO, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((cO ||= {}));
function lO(e) {
  return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
}
function uO(e) {
  return ge(() => [e.m_nBuildID, e.m_strBuildBranch]);
}
function dO(e) {
  let [t, n] = (0, K.useState)(() => vO.GetClanEventModel(e)),
    r = je(`usePartnerEventByEventGID`);
  return (
    (0, K.useEffect)(() => {
      e &&
        t?.GID != e &&
        (vO.Init(),
        vO
          .LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r)
          .then((t) => {
            t?.length == 1 && t[0].GID == e && !r.token.reason && n(t[0]);
          }));
    }, [e, t, r]),
    t
  );
}
function fO(e, t, n) {
  let [r, i] = (0, K.useState)(t ? vO.GetClanEventModel(t) : void 0),
    [a, o] = (0, K.useState)(!!e && !!t),
    [s, c] = (0, K.useState)(),
    [l, u] = (0, K.useState)(1),
    d = je(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, K.useEffect)(() => {
      (async () => {
        try {
          if (r?.GID != t && t && e) {
            vO.Init();
            let r = M.InitFromClanID(e, z.EUNIVERSE),
              a;
            try {
              a = await vO.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                r,
                t,
                0,
                n,
              );
            } catch (e) {
              (c(e?.response?.data?.err_msg),
                u(e?.response?.data?.success || 2));
            }
            d.token.reason || i(a);
          }
        } finally {
          o(!1);
        }
      })();
    }, [e, t, r, n, d]),
    { eventModel: r, bLoading: a, sErrorMessage: s, eResult: l }
  );
}
function pO(e) {
  let t = `` + e,
    n = ft.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
async function mO(e, t, n, r) {
  let i = [],
    a = {
      clan_accountid: e ? e.GetAccountID() : void 0,
      gidevent: t,
      count_before: 0,
      count_after: n,
      lang_list: pO(br(z.LANGUAGE)),
      origin: self.origin,
      only_summaries: !0,
    },
    o = z.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
    s = await ul.default.get(o, { params: a, cancelToken: r?.token });
  if (s?.data?.success == 1) {
    let e = t == null ? s.data.events : s.data.events.slice(1);
    for (let t of e) t.gid && (t.jsondata?.length ?? 0) > 0 && i.push(t);
  } else {
    let t = vt(s?.data);
    throw (
      console.error(
        `LoadAdjacentPartnerEvents Success but empty response: clanAccount:` +
          (e ? e.GetAccountID() : 0) +
          ` ` +
          t.strErrorMsg,
        t,
      ),
      s?.data
    );
  }
  return i;
}
function hO(e, t, n) {
  let {
    data: r,
    error: i,
    fetchNextPage: a,
    hasNextPage: o,
    isFetching: s,
    isFetchingNextPage: c,
    status: l,
    refetch: u,
  } = ti({
    queryKey: [`ClanEventSummaries`, e, t],
    queryFn: ({ pageParam: r }) => mO(e, r, t, n),
    initialPageParam: void 0,
    getNextPageParam: (e) => (e.length > 0 ? e[e.length - 1].gid : void 0),
  });
  return {
    rgClanEventData: r,
    bHasNextPage: o,
    fnFetchNextPage: a,
    bIsFetching: s,
    bIsFetchingNextPage: c,
    clanEventSummaryStatus: l,
    clanEventSummaryLoadError: i,
    fnRefetch: u,
  };
}
var gO = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(e) {
      (bn(
        typeof e.appid == `number`,
        `AJAX updated app returned a non-numeric AppID! Did the PHP change?`,
      ),
        (this.appid = e.appid),
        (this.date = e.date),
        (this.can_play = e.can_play),
        (this.playtime = e.playtime),
        (this.announcementid = e.announcementid));
    }
  },
  _O = class {
    constructor(e = !1) {
      (p(this), (this.m_bOnlySummary = e));
    }
    m_bOnlySummary = !1;
    m_mapExistingEvents = new Map();
    m_mapEventUpdateCallback = new Map();
    m_mapAnnouncementBodyToEvent = new Map();
    m_mapClanToGIDs = new Map();
    m_mapAppIDToGIDs = new Map();
    m_mapAdjacentAnnouncementGIDs = new Map();
    m_mapUpdatedApps = new Map();
    m_tsUpdatedAppsQueryTime = 0;
    m_rgQueuedEventsClanIDs = [];
    m_rgQueuedEventsUniqueIDs = [];
    m_rgQueuedEventsForEditFlags = [];
    m_QueuedEventTimeout = new en();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let e = lO(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new M(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(fb + e.announcement_body.gid, n);
            }
          });
        let t = Tr(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new M(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(fb + e.announcement_body.gid, n);
            }
          });
        let n = Tr(`partnereventadjacents`, `application_config`);
        (this.ValidateAdjacentEvent(n) &&
          n.forEach((e) => {
            e &&
              this.m_mapAdjacentAnnouncementGIDs.set(
                e.announcementGID,
                e.adjacents,
              );
          }),
          (this.m_bLoadedFromConfig = !0));
      }
    }
    ValidateStoreDefault(e) {
      let t = e;
      return t &&
        Array.isArray(t) &&
        t.length > 0 &&
        t[0] &&
        typeof t[0] == `object`
        ? typeof t[0].gid == `string` ||
            (typeof t[0].announcement_body == `object` &&
              typeof t[0].announcement_body.gid == `string`)
        : !1;
    }
    ValidateAdjacentEvent(e) {
      let t = e;
      return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
        ? typeof t[0].announcementGID == `string` &&
            Array.isArray(t[0].adjacents) &&
            (t[0].adjacents.length == 0 || typeof t[0].adjacents[0] == `string`)
        : !1;
    }
    GetPartnerEventChangeCallback(e) {
      let t = this.m_mapEventUpdateCallback.get(e);
      return (
        (t ||=
          (this.m_mapEventUpdateCallback.set(e, new It()),
          this.m_mapEventUpdateCallback.get(e))),
        t
      );
    }
    GetClanEventGIDs(e) {
      return this.m_mapClanToGIDs.get(e.GetAccountID()) || [];
    }
    GetClanEventGIDsForApp(e) {
      return this.m_mapAppIDToGIDs.get(e) || [];
    }
    GetClanEventModel(e) {
      return this.m_mapExistingEvents.get(e);
    }
    BHasClanEventModel(e) {
      return this.m_mapExistingEvents.has(e);
    }
    BHasClanAnnouncementGID(e) {
      if (this.m_mapAnnouncementBodyToEvent.has(e)) {
        let t = this.m_mapAnnouncementBodyToEvent.get(e);
        return !!t && this.BHasClanEventModel(t);
      }
      return !1;
    }
    GetClanEventGIDFromAnnouncementGID(e) {
      return this.m_mapAnnouncementBodyToEvent.get(e);
    }
    GetClanEventFromAnnouncementGID(e) {
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return t ? this.m_mapExistingEvents.get(t) : void 0;
    }
    DefaultEventSortFunction(e, t) {
      return e.startTime == t.startTime
        ? Fe(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = ox(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new M(t.clan_steamid);
            this.InsertEventModelFromClanEventData(e, t);
          }
        }
    }
    GetRankedClanEvents(e, t) {
      let n = [],
        r = e
          ? this.GetClanEventGIDs(e)
          : t
            ? this.GetClanEventGIDsForApp(t)
            : void 0;
      if (!r || r.length == 0) return n;
      for (let e of r) {
        let t = this.GetClanEventModel(e);
        t && n.push(t);
      }
      return (n.sort(this.DefaultEventSortFunction), n);
    }
    InsertEventModelFromClanEventData(e, t) {
      let n = sx(e, t);
      return (
        this.InsertUniqueEventGID(e.GetAccountID(), n.appid, n.GID),
        this.m_mapExistingEvents.set(n.GID, n),
        n.AnnouncementGID &&
          n.AnnouncementGID.length > 1 &&
          this.m_mapAnnouncementBodyToEvent.set(n.AnnouncementGID, n.GID),
        n
      );
    }
    HelperInitializeNumSalesHeaderArray(e) {
      if ((e.jsondata.sale_num_headers ?? 0) > 1) {
        e.jsondata.localized_per_day_sales_header = [];
        for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
          e.jsondata.localized_per_day_sales_header.push(F([], 32, null));
        e.m_overrideCurrentDay = 0;
      } else e.m_overrideCurrentDay = void 0;
    }
    GetAllClanEvents(e) {
      let t = [];
      return (
        this.m_mapClanToGIDs.has(e.GetAccountID()) &&
          this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
            let n = this.m_mapExistingEvents.get(e);
            n && t.push(n);
          }),
        t
      );
    }
    async QueueLoadPartnerEvent(e, t, n) {
      if (this.m_mapExistingEvents.has(t)) return;
      (this.m_rgQueuedEventsClanIDs.push(e),
        this.m_rgQueuedEventsUniqueIDs.push(t),
        this.m_rgQueuedEventsForEditFlags.push(!!n),
        (this.m_PendingInfoPromise ||= new Promise(
          (e) => (this.m_PendingInfoResolve = e),
        )));
      let r = this.m_PendingInfoPromise,
        i = () => {
          let e = this.m_PendingInfoResolve,
            t = this.m_rgQueuedEventsClanIDs,
            n = this.m_rgQueuedEventsUniqueIDs,
            r = this.m_rgQueuedEventsForEditFlags;
          ((this.m_PendingInfoPromise = void 0),
            (this.m_rgQueuedEventsClanIDs = []),
            (this.m_rgQueuedEventsUniqueIDs = []),
            (this.m_rgQueuedEventsForEditFlags = []),
            this.InternalLoadPartnerEventList(t, n, r).then(() => e?.()));
        };
      return (
        this.m_rgQueuedEventsClanIDs.length >= 30
          ? (this.m_QueuedEventTimeout.Cancel(), i())
          : this.m_QueuedEventTimeout.IsScheduled() ||
            this.m_QueuedEventTimeout.Schedule(50, i),
        r
      );
    }
    async InternalLoadPartnerEventList(e, t, n) {
      let r = n.some((e) => e),
        i =
          z.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        a = pO(br(z.LANGUAGE)),
        o = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: a,
          origin: self.origin,
        };
      try {
        let e = await ul.default.get(i, { params: o, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = vt(e);
        console.error(`GetEventDetails hit error ` + t.strErrorMsg, t);
      }
    }
    async LoadAdjacentPartnerEvents(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        e,
        void 0,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByAnnouncement(e, t, n, r, i, a, o) {
      return this.InternalLoadAdjacentPartnerEvents(
        void 0,
        e,
        t,
        n,
        r,
        i,
        a,
        o,
      );
    }
    async LoadAdjacentPartnerEventsByEvent(e, t, n, r, i, a, o) {
      let s = t || e.clanSteamID;
      return e.bOldAnnouncement
        ? this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          )
        : this.InternalLoadAdjacentPartnerEvents(
            e.GID,
            e.AnnouncementGID,
            s,
            n,
            r,
            i,
            a,
            o,
          );
    }
    async InternalLoadAdjacentPartnerEvents(e, t, n, r, i, o, s, c) {
      let l = [];
      if (!t || !this.m_mapAdjacentAnnouncementGIDs.has(t)) {
        let u = z.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          d = pO(br(z.LANGUAGE));
        s?.only_summaries &&
          !this.m_bOnlySummary &&
          (bn(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (s.only_summaries = void 0));
        let f = {
          clan_accountid: n ? n.GetAccountID() : void 0,
          appid: r,
          count_before: i,
          count_after: o,
          gidevent: e,
          gidannouncement: t,
          lang_list: d,
          rtime_oldestevent: s ? s.rtime_oldestevent : void 0,
          require_tags: s && s.require_tags ? s.require_tags.join(`,`) : void 0,
          exclude_tags: s && s.exclude_tags ? s.exclude_tags.join(`,`) : void 0,
          require_no_tags: s ? s.require_no_tags : void 0,
          event_type_filter:
            s && s.event_type_filter ? s.event_type_filter.join(`,`) : void 0,
          exclude_event_types:
            s && s.exclude_event_types
              ? s.exclude_event_types.join(`,`)
              : void 0,
          only_summaries: s && !!s.only_summaries,
          origin: self.origin,
        };
        try {
          let i = await ul.default.get(u, { params: f, cancelToken: c?.token });
          if (i?.data?.success == 1)
            a(() => {
              for (let e of i.data.events) {
                let t = ox(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new M(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(n || t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
              if (l.length == 0) {
                if (e && this.BHasClanEventModel(e))
                  this.m_mapExistingEvents.get(e) &&
                    l.push(this.m_mapExistingEvents.get(e));
                else if (t && this.BHasClanAnnouncementGID(t)) {
                  let e = this.GetClanEventFromAnnouncementGID(t);
                  e && l.push(e);
                }
              }
            });
          else {
            let e = vt(i?.data);
            console.error(
              `LoadAdjacentPartnerEvents Success but empty response:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                e.strErrorMsg,
              e,
            );
          }
        } catch (e) {
          let t = vt(e);
          t.errorCode != 52 &&
            console.error(
              `LoadAdjacentPartnerEvents hit error on appid:` +
                r +
                ` clanAccount:` +
                (n ? n.GetAccountID() : 0) +
                ` ` +
                t.strErrorMsg,
              t,
            );
        }
      } else {
        let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
          n = [];
        (e?.forEach((e) => {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            let t = this.m_mapAnnouncementBodyToEvent.get(e);
            t &&
              this.m_mapExistingEvents.get(t) &&
              l.push(this.m_mapExistingEvents.get(t));
          } else n.push(e);
        }),
          n.length > 0 &&
            (
              await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                void 0,
                n,
                c,
              )
            ).forEach((e) => l.push(e)));
      }
      return l;
    }
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, i) {
      let o = [],
        s = z.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        c = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: z.LANGUAGE,
          origin: self.origin,
          exclude_tags: i && i.length > 0 ? i?.join(`,`) : void 0,
        };
      try {
        let e = await ul.default.get(s, { params: c });
        a(() => {
          for (let t of e.data.events) {
            let e = ox(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new M(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            o.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(
          `LoadClanEventInDateRange hit error ` + vt(e).strErrorMsg,
        );
      }
      return o;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        i = {
          l: z.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        o = z.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        s = await ul.default.get(o, {
          params: i,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!s.data?.events) {
        let e = s.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        a(() => {
          for (let e of s.data.events) {
            let t = ox(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new M(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            let n = {
              nAppPriority: e.nAppPriority,
              bPossibleTakeOver: e.bPossibleTakeOver,
              event: this.m_mapExistingEvents.get(t),
            };
            r.push(n);
          }
        }),
        r
      );
    }
    async LoadImportantEventsAroundToday(e, t, n, r, i, o) {
      let s = [],
        c = [];
      (c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r }));
      let l = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
          filterToEventTypes: o ? o.toString() : ``,
          l: z.LANGUAGE,
        },
        u = z.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        d = await ul.default.get(u, {
          params: l,
          withCredentials: !0,
          cancelToken: i.token,
        });
      return (
        a(() => {
          for (let e of d.data.events) {
            let t = ox(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new M(e.clan_steamid);
              this.InsertEventModelFromClanEventData(t, e);
            }
            s.push(this.m_mapExistingEvents.get(t));
          }
        }),
        s
      );
    }
    InsertUniqueEventGID(e, t, n) {
      let r = this.m_mapClanToGIDs.get(e);
      r ||= (this.m_mapClanToGIDs.set(e, []), this.m_mapClanToGIDs.get(e));
      let i = this.m_mapAppIDToGIDs.get(t);
      ((i ||= (this.m_mapAppIDToGIDs.set(t, []), this.m_mapAppIDToGIDs.get(t))),
        r.indexOf(n) == -1 && (r.push(n), i.push(n)));
    }
    ResetModel() {}
    async DeleteClanEvent(e, t) {
      this.m_mapExistingEvents.has(t) &&
        (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
      let n = new URLSearchParams();
      (n.append(`sessionid`, jn()),
        n.append(`bDelete`, `1`),
        n.append(`gid`, t));
      let r = await ul.default.post(
        z.COMMUNITY_BASE_URL +
          `/gid/` +
          e.ConvertTo64BitString() +
          `/ajaxcreateupdatedeletepartnerevents/`,
        n,
      );
      return (this.RemoveGIDFromList(e, t), r.data);
    }
    RemoveGIDFromList(e, t) {
      if (
        (this.m_mapExistingEvents.delete(t),
        this.m_mapClanToGIDs.has(e.GetAccountID()))
      ) {
        let n = this.m_mapClanToGIDs.get(e.GetAccountID()),
          r = n.indexOf(t);
        r >= 0 && n.splice(r, 1);
      }
    }
    FlushEventFromCache(e, t) {
      if (
        (e &&
          this.m_mapExistingEvents.has(e) &&
          ((t ||= this.m_mapExistingEvents.get(e).AnnouncementGID),
          this.m_mapExistingEvents.delete(e)),
        t &&
          (this.m_mapExistingEvents.has(`old_announce_` + t) &&
            this.m_mapExistingEvents.delete(fb + t),
          this.m_mapAnnouncementBodyToEvent.has(t)))
      ) {
        let e = this.m_mapAnnouncementBodyToEvent.get(t);
        (e &&
          this.m_mapExistingEvents.has(e) &&
          this.m_mapExistingEvents.delete(e),
          this.m_mapAnnouncementBodyToEvent.delete(t));
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
      e,
      t,
      n,
      r,
      i,
      a = !1,
    ) {
      let o = pO(a ? 0 : br(z.LANGUAGE)),
        s = {
          appid: t,
          clan_accountid: e ? e.GetAccountID() : void 0,
          announcement_gid: r,
          event_gid: n,
          lang_list: o,
          last_modified_time: i || 0,
          origin: self.origin,
          for_edit: a,
          only_summary: this.m_bOnlySummary,
        },
        c = null,
        l = null;
      if (a) {
        let n = Qe();
        (n === `community`
          ? ((l = z.COMMUNITY_BASE_URL),
            (l += e ? `gid/` + e.ConvertTo64BitString() : `ogg/` + t),
            (l += `/`))
          : (l =
              n === `partner`
                ? z.PARTNER_BASE_URL + `sales/`
                : z.STORE_BASE_URL + `events/`),
          (l += `ajaxgetpartnereventforedit`),
          (c = { params: s, withCredentials: !0 }));
      } else
        ((l = z.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (c = { params: s, withCredentials: !1 }));
      try {
        let e = await ul.default.get(l, c);
        if (e.data.success !== 1) return;
        let t = e.data.event,
          n = ox(t);
        if (
          !this.m_mapExistingEvents.has(n) ||
          (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
            (t.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ?? 0) <
            (t.rtime_mod_reviewed ?? 0)
        ) {
          bn(t.clan_steamid, `ClanSteamID is missing from data we received`);
          let e = new M(t.clan_steamid);
          this.InsertEventModelFromClanEventData(e, t);
        }
        return this.m_mapExistingEvents.get(n);
      } catch {
        return;
      }
    }
    async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
      e,
      t,
      n,
      r,
      i,
      a,
    ) {
      if (n && this.m_mapExistingEvents.has(n))
        return this.m_mapExistingEvents.get(n);
      if (r) {
        if (this.m_mapExistingEvents.has(`old_announce_` + r))
          return this.m_mapExistingEvents.get(fb + r);
        if (this.m_mapAnnouncementBodyToEvent.has(r)) {
          let e = this.m_mapAnnouncementBodyToEvent.get(r);
          if (e && this.m_mapExistingEvents.has(e))
            return this.m_mapExistingEvents.get(e);
        }
      }
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        t,
        n,
        r,
        i,
        a,
      );
    }
    async LoadPartnerEventFromAnnoucementGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        void 0,
        t,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        void 0,
        e,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, n, r) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        void 0,
        t,
        void 0,
        n,
        r,
      );
    }
    async LoadPartnerEventGeneric(e, t, n, r, i) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
        e,
        t,
        n,
        r,
        i,
      );
    }
    async LoadHiddenPartnerEvent(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        t,
        void 0,
        0,
        !0,
      );
    }
    async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
      return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
        e,
        void 0,
        void 0,
        t,
        0,
        !0,
      );
    }
    async HintLoadImportantUpdates() {
      let e = oe(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = z.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await ul.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          a(() => {
            let e = new Map(r.data.apps?.map((e) => [e.appid, new gO(e)]));
            this.m_mapUpdatedApps = e;
          });
      }
      return this.m_mapUpdatedApps;
    }
    GetAppImportantUpdate(e) {
      return (
        this.HintLoadImportantUpdates().catch((e) => {
          console.log(`UpdatedApps failed to load: `, e.response?.data);
        }),
        this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
      );
    }
    async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
      let n =
        z.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await ul.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        i = z.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        o = pO(br(z.LANGUAGE)),
        s = null,
        c = null;
      if (e) {
        let t = [];
        (e.forEach((e) => {
          this.m_mapExistingEvents.has(e)
            ? r.push(this.m_mapExistingEvents.get(e))
            : t.push(e);
        }),
          t.sort(),
          (s = t));
      }
      if (t) {
        let e = [];
        (t.forEach((t) => {
          if (
            this.m_mapAnnouncementBodyToEvent.has(t) &&
            this.m_mapAnnouncementBodyToEvent.get(t) &&
            this.m_mapExistingEvents.has(
              this.m_mapAnnouncementBodyToEvent.get(t),
            )
          ) {
            let e = this.m_mapAnnouncementBodyToEvent.get(t);
            if (e) {
              let t = this.m_mapExistingEvents.get(e);
              t && r.push(t);
            }
          } else e.push(t);
        }),
          e.sort(),
          (c = e));
      }
      if (!s && !c) return r;
      let l = [];
      for (; (s?.length ?? 0) > 0 || (c?.length ?? 0) > 0;) {
        let e = {
          event_gids:
            (s?.length ?? 0) > 0 ? s?.splice(0, 100).join(`,`) : void 0,
          announcement_gids:
            (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(`,`) : void 0,
          lang_list: o,
          origin: self.origin,
        };
        l.push(
          ul.default.get(i, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...l]),
          t = 0;
        a(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = ox(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new M(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = vt(e);
              console.error(
                `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error ` +
                  t.strErrorMsg,
                t,
              );
            }
            t += 1;
          }),
        );
      } catch (e) {
        let t = vt(e);
        console.error(
          `LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error ` +
            t.strErrorMsg,
          t,
        );
      }
      return r;
    }
    async SavePartnerEventSaleAssets(e, t, n, r) {
      let i = null;
      if (!this.m_mapExistingEvents.has(t)) return !1;
      try {
        let a = `${z.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          o = new FormData();
        (o.append(`sessionid`, jn()),
          o.append(`gidclanevent`, t),
          o.append(`json`, JSON.stringify(n)),
          o.append(`pageStyles`, JSON.stringify(r)));
        let s = await ul.default.post(a, o, { withCredentials: !0 });
        if (s?.data?.success == 1) {
          let e = this.m_mapExistingEvents.get(t);
          if (e && e.jsondata) {
            for (let t in n)
              if (n.hasOwnProperty(t) && n[t]) {
                let r = t,
                  i = n[r];
                i !== void 0 && r !== void 0 && (e.jsondata[r] = i);
              }
          }
          return (this.GetPartnerEventChangeCallback(t).Dispatch(e), !0);
        }
        i = vt(s);
      } catch (e) {
        i = vt(e);
      }
      return (
        console.error(
          `CPartnerEventStore.SavePartnerEventSaleAssets failed: ` +
            i?.strErrorMsg,
          i,
        ),
        !1
      );
    }
    BIsSummaryOnlyStore() {
      return this.m_bOnlySummary;
    }
  };
(E([_], _O.prototype, `m_mapExistingEvents`, void 0),
  E([_], _O.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  E([_], _O.prototype, `m_mapClanToGIDs`, void 0),
  E([_], _O.prototype, `m_mapAppIDToGIDs`, void 0),
  E([_], _O.prototype, `m_mapUpdatedApps`, void 0),
  E([ie], _O.prototype, `Init`, null),
  E([j], _O.prototype, `GetPartnerEventChangeCallback`, null),
  E([ie], _O.prototype, `RegisterClanEvents`, null),
  E([ie], _O.prototype, `InsertEventModelFromClanEventData`, null),
  E([ie], _O.prototype, `DeleteClanEvent`, null),
  E([ie], _O.prototype, `RemoveGIDFromList`, null),
  E([ie], _O.prototype, `FlushEventFromCache`, null),
  E([j], _O.prototype, `SavePartnerEventSaleAssets`, null));
var vO = new _O();
Ut(`g_PartnerEventStore`, vO);
var yO = new _O(!0);
Ut(`g_PartnerEventSummaryStore`, yO);
var bO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            gameid: { n: 2, br: A.readUint64String, bw: k.writeUint64String },
            client_instance_id: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            title: { n: 4, br: A.readString, bw: k.writeString },
            cellid: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            rtmp_token: {
              n: 6,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: A.readBool, bw: k.writeBool },
            sysid: { n: 9, br: A.readUint32, bw: k.writeUint32 },
            allow_webrtc: { n: 10, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  xO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: A.readString,
              bw: k.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: A.readString,
              bw: k.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: A.readUint32,
              bw: k.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  SO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  CO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Response`;
    }
  },
  wO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            cellid: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            as_rtmp: { n: 3, br: A.readBool, bw: k.writeBool },
            delay_seconds: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            upload_ip_address: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            is_replay: { n: 7, br: A.readBool, bw: k.writeBool },
            sysid: { n: 8, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  TO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: A.readString, bw: k.writeString },
            upload_address: { n: 2, br: A.readString, bw: k.writeString },
            broadcast_upload_id: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            enable_replay: { n: 6, br: A.readBool, bw: k.writeBool },
            http_address: { n: 7, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  EO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            upload_token: { n: 2, br: A.readString, bw: k.writeString },
            upload_address: { n: 3, br: A.readString, bw: k.writeString },
            http_address: { n: 4, br: A.readString, bw: k.writeString },
            broadcast_upload_id: {
              n: 5,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            is_rtmp: { n: 7, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  DO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  OO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: A.readUint64String, bw: k.writeUint64String },
            title: { n: 2, br: A.readString, bw: k.writeString },
            num_viewers: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            permission: { n: 4, br: A.readInt32, bw: k.writeInt32 },
            is_rtmp: { n: 5, br: A.readBool, bw: k.writeBool },
            seconds_delay: { n: 6, br: A.readInt32, bw: k.writeInt32 },
            is_publisher: { n: 7, br: A.readBool, bw: k.writeBool },
            thumbnail_url: { n: 8, br: A.readString, bw: k.writeString },
            update_interval: { n: 9, br: A.readInt32, bw: k.writeInt32 },
            is_uploading: { n: 10, br: A.readBool, bw: k.writeBool },
            duration: { n: 11, br: A.readUint32, bw: k.writeUint32 },
            is_replay: { n: 12, br: A.readBool, bw: k.writeBool },
            is_capturing_vod: { n: 13, br: A.readBool, bw: k.writeBool },
            is_store_whitelisted: { n: 14, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  kO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  AO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: A.readString, bw: k.writeString },
            update_interval: { n: 2, br: A.readInt32, bw: k.writeInt32 },
            num_viewers: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            duration: { n: 4, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  jO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            client_cell: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            watch_location: { n: 6, br: A.readEnum, bw: k.writeEnum },
            is_webrtc: { n: 7, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  MO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: A.readEnum, bw: k.writeEnum },
            mpd_url: { n: 2, br: A.readString, bw: k.writeString },
            broadcast_id: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            gameid: { n: 4, br: A.readUint64String, bw: k.writeUint64String },
            title: { n: 5, br: A.readString, bw: k.writeString },
            num_viewers: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            permission: { n: 7, br: A.readInt32, bw: k.writeInt32 },
            is_rtmp: { n: 8, br: A.readBool, bw: k.writeBool },
            seconds_delay: { n: 9, br: A.readInt32, bw: k.writeInt32 },
            viewer_token: {
              n: 10,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: A.readString, bw: k.writeString },
            heartbeat_interval: { n: 12, br: A.readInt32, bw: k.writeInt32 },
            thumbnail_url: { n: 13, br: A.readString, bw: k.writeString },
            is_webrtc: { n: 14, br: A.readBool, bw: k.writeBool },
            webrtc_session_id: {
              n: 15,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: A.readString, bw: k.writeString },
            webrtc_turn_server: { n: 17, br: A.readString, bw: k.writeString },
            is_replay: { n: 18, br: A.readBool, bw: k.writeBool },
            duration: { n: 19, br: A.readInt32, bw: k.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: A.readString,
              bw: k.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  NO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            representation: { n: 4, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  PO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  FO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            approval_response: { n: 2, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  IO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: A.readBool, bw: k.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  LO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            gameid: { n: 2, br: A.readUint64String, bw: k.writeUint64String },
            title: { n: 3, br: A.readString, bw: k.writeString },
            game_data_config: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  RO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Response`;
    }
  },
  zO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            state: { n: 2, br: A.readEnum, bw: k.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  BO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  VO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            upload_result: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            too_many_poor_uploads: { n: 4, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  HO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  UO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            num_viewers: { n: 2, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  WO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_channel_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: A.readString,
              bw: k.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: A.readString,
              bw: k.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  GO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_upload_token: {
              n: 1,
              br: A.readString,
              bw: k.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: A.readBytes, bw: k.writeBytes },
            thumbnail_width: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            thumbnail_height: { n: 5, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  KO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_upload_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            upload_result: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  qO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  JO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  YO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            client_ip: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            client_cell: { n: 4, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  XO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            view_url_template: { n: 3, br: A.readString, bw: k.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: A.readUint32,
              pbr: A.readPackedUint32,
              bw: k.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  ZO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            message: { n: 2, br: A.readString, bw: k.writeString },
            instance_id: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            language: { n: 4, d: 0, br: A.readUint32, bw: k.writeUint32 },
            country_code: { n: 5, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  QO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: A.readString, bw: k.writeString },
            in_game: { n: 2, br: A.readBool, bw: k.writeBool },
            result: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            cooldown_time_seconds: { n: 4, br: A.readInt32, bw: k.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  $O = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            flair: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  ek = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            chat_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            flair: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  tk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            muted: { n: 3, br: A.readBool, bw: k.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  nk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Response`;
    }
  },
  rk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  ik = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Response`;
    }
  },
  ak = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            chat_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: A.readFixed64String,
              pbr: A.readPackedFixed64String,
              bw: k.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  ok = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: sk, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  sk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steam_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            persona: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  ck = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            first_segment: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            num_segments: { n: 4, br: A.readInt32, bw: k.writeInt32 },
            clip_description: { n: 5, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  lk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  uk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  dk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Response`;
    }
  },
  fk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            start_time: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            end_time: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            video_description: { n: 4, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  pk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Response`;
    }
  },
  mk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  hk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_clip_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            video_id: { n: 2, br: A.readUint64String, bw: k.writeUint64String },
            channel_id: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            app_id: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            video_description: { n: 7, br: A.readString, bw: k.writeString },
            start_time: { n: 8, br: A.readUint32, bw: k.writeUint32 },
            length_milliseconds: { n: 9, br: A.readUint32, bw: k.writeUint32 },
            thumbnail_path: { n: 10, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  gk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            update_token: { n: 2, br: A.readBool, bw: k.writeBool },
            broadcast_delay: { n: 3, br: A.readInt32, bw: k.writeInt32 },
            app_id: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            required_app_id: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: A.readEnum,
              bw: k.writeEnum,
            },
            broadcast_buffer: { n: 7, br: A.readInt32, bw: k.writeInt32 },
            steamid: {
              n: 8,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: A.readUint32, bw: k.writeUint32 },
            enable_replay: { n: 10, br: A.readBool, bw: k.writeBool },
            is_partner_chat_only: { n: 11, br: A.readBool, bw: k.writeBool },
            wordban_list: { n: 12, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  _k = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Response`;
    }
  },
  vk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            steamid: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  yk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: A.readInt32, bw: k.writeInt32 },
            rtmp_host: { n: 2, br: A.readString, bw: k.writeString },
            rtmp_token: { n: 3, br: A.readString, bw: k.writeString },
            broadcast_delay: { n: 4, br: A.readInt32, bw: k.writeInt32 },
            app_id: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            required_app_id: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: A.readEnum,
              bw: k.writeEnum,
            },
            broadcast_buffer: { n: 8, br: A.readInt32, bw: k.writeInt32 },
            steamid: {
              n: 9,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: A.readUint32, bw: k.writeUint32 },
            enable_replay: { n: 11, br: A.readBool, bw: k.writeBool },
            is_partner_chat_only: { n: 12, br: A.readBool, bw: k.writeBool },
            wordban_list: { n: 13, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  bk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: A.readUint32, bw: k.writeUint32 },
            start_time: { n: 2, d: 0, br: A.readUint32, bw: k.writeUint32 },
            upload_id: {
              n: 3,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            steamid: {
              n: 4,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  xk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: Sk, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  Sk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            time_stopped: { n: 2, br: A.readUint32, bw: k.writeUint32 },
            seconds_uploaded: { n: 3, br: A.readUint32, bw: k.writeUint32 },
            max_viewers: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            resolution_x: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            resolution_y: { n: 6, br: A.readUint32, bw: k.writeUint32 },
            avg_bandwidth: { n: 7, br: A.readUint32, bw: k.writeUint32 },
            total_bytes: {
              n: 8,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            app_id: { n: 9, br: A.readUint32, bw: k.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: A.readUint32,
              bw: k.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            time_started: { n: 12, br: A.readUint32, bw: k.writeUint32 },
            upload_id: {
              n: 13,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            local_address: { n: 14, br: A.readString, bw: k.writeString },
            remote_address: { n: 15, br: A.readString, bw: k.writeString },
            frames_per_second: { n: 16, br: A.readUint32, bw: k.writeUint32 },
            num_representations: { n: 17, br: A.readUint32, bw: k.writeUint32 },
            app_name: { n: 18, br: A.readString, bw: k.writeString },
            is_replay: { n: 19, br: A.readBool, bw: k.writeBool },
            session_id: {
              n: 20,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  Ck = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_id: {
              n: 1,
              br: A.readUint64String,
              bw: k.writeUint64String,
            },
            steamid: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  wk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: Tk, r: !0, q: !0 },
            country_stats: { n: 2, c: Ek, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  Tk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            num_viewers: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  Ek = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: A.readString, bw: k.writeString },
            num_viewers: { n: 2, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  Dk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            started: { n: 2, br: A.readBool, bw: k.writeBool },
            offer: { n: 3, br: A.readString, bw: k.writeString },
            resolution_x: { n: 4, br: A.readUint32, bw: k.writeUint32 },
            resolution_y: { n: 5, br: A.readUint32, bw: k.writeUint32 },
            fps: { n: 6, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  Ok = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Response`;
    }
  },
  kk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  Ak = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Response`;
    }
  },
  jk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            answer: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  Mk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Response`;
    }
  },
  Nk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: A.readString, bw: k.writeString },
            sdp_mline_index: { n: 2, br: A.readInt32, bw: k.writeInt32 },
            candidate: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  Pk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            webrtc_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            candidate: { n: 2, c: Nk },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  Fk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Response`;
    }
  },
  Ik = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            candidate: { n: 3, c: Nk },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  Lk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), G.Message.initialize(this, e, 0, -1, void 0, null));
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Response`;
    }
  },
  Rk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcaster_steamid: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            candidate_generation: { n: 3, br: A.readUint32, bw: k.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  zk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || N(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: A.readUint32, bw: k.writeUint32 },
            candidates: { n: 2, c: Nk, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  Bk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  Vk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: A.readUint32, bw: k.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  Hk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  Uk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            turn_server: { n: 2, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  Wk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  Gk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            answer: { n: 3, br: A.readString, bw: k.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  Kk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || N(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_session_id: {
              n: 1,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: A.readFixed64String,
              bw: k.writeFixed64String,
            },
            candidate: { n: 3, c: Nk },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= H(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return V(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return D(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      w(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  qk;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, C(bO, t, n), xO, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, C(SO, t, n), CO, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, C(wO, t, n), TO, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      C(KO, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, C(jO, t, n), MO, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, C(NO, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, C(PO, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, C(DO, t, n), OO, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, C(kO, t, n), AO, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function u(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, C(FO, t, n), IO, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      C(LO, t, n),
      RO,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = d;
  function f(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      C(JO, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = f;
  function p(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, C(YO, t, n), XO, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, C(ZO, t, n), QO, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, C($O, t, n), ek, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = h;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, C(tk, t, n), nk, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, C(rk, t, n), ik, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = _;
  function v(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, C(ak, t, n), ok, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = v;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, C(ck, t, n), lk, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = y;
  function ee(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, C(uk, t, n), dk, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = ee;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, C(fk, t, n), pk, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, C(mk, t, n), hk, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = x;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, C(gk, t, n), _k, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = S;
  function te(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, C(vk, t, n), yk, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = te;
  function ne(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      C(Uk, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = ne;
  function re(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, C(Dk, t, n), Ok, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = re;
  function ie(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, C(kk, t, n), Ak, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, C(jk, t, n), Mk, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = ae;
  function oe(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, C(Vk, t, n), Hk, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = oe;
  function se(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, C(Pk, t, n), Fk, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = se;
  function ce(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, C(Ik, t, n), Lk, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = ce;
  function le(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, C(Rk, t, n), zk, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = le;
  function ue(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, C(bk, t, n), xk, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = ue;
  function de(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, C(Ck, t, n), wk, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = de;
})((qk ||= {}));
var Jk;
(function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: zO,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: BO,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: EO,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: VO,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: HO,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: qO,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: UO,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: WO,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: GO,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: Bk,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: Wk,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: Gk,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: Kk,
    }));
})((Jk ||= {}));
async function Yk(e, t) {
  let n = B.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function Xk(e) {
  return [`video`, `vod`, e];
}
function Zk(e) {
  return { queryKey: Xk(e), queryFn: ({ signal: t }) => Yk(e, t), retry: !1 };
}
function Qk(e) {
  let { data: t, isPending: n } = f(Zk(e));
  return { vodInfo: t, bLoading: n };
}
export {
  dw as $,
  bl as $a,
  Iu as $i,
  sb as $n,
  As as $o,
  dv as $r,
  vs as $s,
  Gx as $t,
  zw as A,
  Jl as Aa,
  rh as Ai,
  Jb as An,
  rc as Ao,
  gy as Ar,
  Fo as As,
  VS as At,
  Iw as B,
  Wl as Ba,
  yf as Bi,
  kb as Bn,
  Bo,
  iy as Br,
  Ns as Bs,
  rS as Bt,
  Mw as C,
  ud as Ca,
  Hi as Cc,
  Ih as Ci,
  Gb as Cn,
  Ic as Co,
  Ty as Cr,
  Is as Cs,
  SC as Ct,
  Uw as D,
  Hl as Da,
  Jr as Dc,
  Mh as Di,
  Nb as Dn,
  dc as Do,
  Wy as Dr,
  Vs as Ds,
  ZS as Dt,
  Ew as E,
  bu as Ea,
  ei as Ec,
  Fh as Ei,
  Mb as En,
  Sc as Eo,
  nb as Er,
  gs as Es,
  QS as Et,
  Ow as F,
  iu as Fa,
  Rp as Fi,
  Xb as Fn,
  Qs as Fo,
  sy as Fr,
  Us as Fs,
  Bx as Ft,
  Gw as G,
  mu as Ga,
  Fd as Gi,
  wy as Gn,
  Ds as Go,
  Tv as Gr,
  Yo as Gs,
  iS as Gt,
  Sw as H,
  Bl as Ha,
  pf as Hi,
  Sy as Hn,
  Oo as Ho,
  ny as Hr,
  _o as Hs,
  Px as Ht,
  ww as I,
  cu as Ia,
  Lp as Ii,
  qb as In,
  go as Io,
  oy as Ir,
  wo as Is,
  wx as It,
  Jw as J,
  wu as Ja,
  Pd as Ji,
  Zy as Jn,
  ks as Jo,
  xv as Jr,
  jo as Js,
  Xx as Jt,
  Kw as K,
  zl as Ka,
  jd as Ki,
  My as Kn,
  Ws as Ko,
  Sv as Kr,
  xs as Ks,
  Mx as Kt,
  Pw as L,
  jl as La,
  Pp as Li,
  Kb as Ln,
  Fs as Lo,
  cy as Lr,
  Mo as Ls,
  xS as Lt,
  Nw as M,
  lu as Ma,
  bm as Mi,
  Bb as Mn,
  Zs as Mo,
  _y as Mr,
  Gs as Ms,
  MS as Mt,
  kw as N,
  Tu as Na,
  ym as Ni,
  Wb as Nn,
  $s as No,
  hy as Nr,
  Ss as Ns,
  Hx as Nt,
  Hw as O,
  Du as Oa,
  Kr as Oc,
  Eh as Oi,
  Fb as On,
  tc as Oo,
  pb as Or,
  is as Os,
  YS as Ot,
  Bw as P,
  ru as Pa,
  J as Pi,
  Hb as Pn,
  qs as Po,
  my as Pr,
  zo as Ps,
  Vx as Pt,
  yw as Q,
  xl as Qa,
  hu as Qi,
  ob as Qn,
  Ks as Qo,
  fv as Qr,
  bo as Qs,
  Kx as Qt,
  Rw as R,
  Kl as Ra,
  kp as Ri,
  Zb as Rn,
  fs as Ro,
  ly as Rr,
  Bs as Rs,
  Ux as Rt,
  Fw as S,
  fu as Sa,
  Ci as Sc,
  Hh as Si,
  Qb as Sn,
  Lc as So,
  ky as Sr,
  ps as Ss,
  cC as St,
  Cw as T,
  Ou as Ta,
  ti as Tc,
  Nh as Ti,
  jb as Tn,
  kc as To,
  Oy as Tr,
  Ro as Ts,
  iC as Tt,
  Vw as U,
  pu as Ua,
  sf as Ui,
  by as Un,
  zs as Uo,
  Dv as Ur,
  Ps as Us,
  Lx as Ut,
  Yw as V,
  Vl as Va,
  vf as Vi,
  ib as Vn,
  Vo,
  ry as Vr,
  No as Vs,
  ES as Vt,
  Ww as W,
  gu as Wa,
  Ld as Wi,
  jy as Wn,
  Os as Wo,
  Av as Wr,
  ms as Ws,
  Fx as Wt,
  Lw as X,
  kl as Xa,
  Uu as Xi,
  rb as Xn,
  cs as Xo,
  vv as Xr,
  qo as Xs,
  bS as Xt,
  Dw as Y,
  Al as Ya,
  bd as Yi,
  Xy as Yn,
  as as Yo,
  bv as Yr,
  Ho as Ys,
  Wx as Yt,
  bw as Z,
  Ol as Za,
  Wu as Zi,
  ab as Zn,
  us as Zo,
  gv as Zr,
  Ko as Zs,
  Jx as Zt,
  zT as _,
  Qu as _a,
  La as _c,
  Zh as _i,
  gx as _n,
  zc as _o,
  Yy as _r,
  Xo as _s,
  xC as _t,
  ZO as a,
  $l as aa,
  ys as ac,
  J_ as ai,
  Nx as an,
  ol as ao,
  Ly as ar,
  os as as,
  hC as at,
  IT as b,
  Fu as ba,
  sa as bc,
  Gh as bi,
  tx as bn,
  Kc as bo,
  Sb as br,
  _s as bs,
  EC as bt,
  _O as c,
  $u as ca,
  bs as cc,
  c_ as ci,
  uS as cn,
  rl as co,
  hb as cr,
  ds as cs,
  sC as ct,
  uO as d,
  Hu as da,
  Ao as dc,
  cg as di,
  bx as dn,
  el as do,
  tb as dr,
  vo as ds,
  gC as dt,
  Bu as ea,
  xo as ec,
  lv as ei,
  Yx as en,
  vl as eo,
  Py as er,
  Ls as es,
  uw as et,
  fO as f,
  vd as fa,
  Wo as fc,
  tg as fi,
  nS as fn,
  Qc as fo,
  Jy as fr,
  Rs as fs,
  fC as ft,
  BT as g,
  Ml as ga,
  Va as gc,
  Qh as gi,
  hx as gn,
  Wc as go,
  eb as gr,
  Es as gs,
  CC as gt,
  tO as h,
  ad as ha,
  qa as hc,
  ng as hi,
  mx as hn,
  Uc as ho,
  Gy as hr,
  Do as hs,
  uC as ht,
  tk as i,
  ld as ia,
  Zo as ic,
  Q_ as ii,
  Tx as in,
  cl as io,
  cb as ir,
  Cs as is,
  DC as it,
  Aw as j,
  Xl as ja,
  Cm as ji,
  Vb as jn,
  ic as jo,
  vy as jr,
  So as js,
  FS as jt,
  Tw as k,
  Yl as ka,
  Th as ki,
  Ib as kn,
  ec as ko,
  fb as kr,
  ss as ks,
  WS as kt,
  vO as l,
  sd as la,
  ns as lc,
  Wg as li,
  Zx as ln,
  tl as lo,
  $ as lr,
  rs as ls,
  _C as lt,
  lO as m,
  od as ma,
  Wa as mc,
  Yh as mi,
  yx as mn,
  qc as mo,
  qy as mr,
  Ts as ms,
  aC as mt,
  Qk as n,
  cd as na,
  ws as nc,
  av as ni,
  DS as nn,
  _l as no,
  Ry as nr,
  To as ns,
  AC as nt,
  rk as o,
  Ru as oa,
  Eo as oc,
  X_ as oi,
  jx as on,
  al as oo,
  Hy as or,
  Qo as os,
  mC as ot,
  dO as p,
  Cu as pa,
  Xa as pc,
  eg as pi,
  vx as pn,
  Zc as po,
  Ky as pr,
  Co as ps,
  dC as pt,
  qw as q,
  Lu as qa,
  Ad as qi,
  $y as qn,
  Jo as qo,
  Cv as qr,
  Io as qs,
  Ex as qt,
  qk as r,
  id as ra,
  Po as rc,
  Y_ as ri,
  $x as rn,
  fl as ro,
  zy as rr,
  Uo as rs,
  kC as rt,
  $O as s,
  _d as sa,
  Lo as sc,
  l_ as si,
  Qx as sn,
  sl as so,
  Uy as sr,
  es as ss,
  pC as st,
  Zk as t,
  dd as ta,
  Hs as tc,
  cv as ti,
  Cx as tn,
  gl as to,
  By as tr,
  Ms as ts,
  jC as tt,
  hO as u,
  Vu as ua,
  Go as uc,
  lg as ui,
  oS as un,
  nl as uo,
  lb as ur,
  ko as us,
  vC as ut,
  LT as v,
  zu as va,
  Aa as vc,
  $h as vi,
  sx as vn,
  Bc as vo,
  Fy as vr,
  yo as vs,
  bC as vt,
  xw as w,
  ql as wa,
  Ta as wc,
  Ph as wi,
  Ab as wn,
  Nc as wo,
  Dy as wr,
  hs as ws,
  yC as wt,
  ET as x,
  ed as xa,
  yi as xc,
  Wh as xi,
  $b as xn,
  Rc as xo,
  Iy as xr,
  $o as xs,
  lC as xt,
  FT as y,
  yd as ya,
  Oa as yc,
  Xh as yi,
  rx as yn,
  Gc as yo,
  ub as yr,
  js as ys,
  oC as yt,
  jw as z,
  Ql as za,
  $f as zi,
  Db as zn,
  ls as zo,
  uy as zr,
  ts as zs,
  Ox as zt,
};
