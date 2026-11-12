/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./chunk~f025431ab0.js";
import {
  $ as n,
  A as r,
  B as i,
  C as a,
  D as o,
  E as s,
  Ft as c,
  G as l,
  It as u,
  J as d,
  K as f,
  L as p,
  Mt as m,
  Q as h,
  R as g,
  W as _,
  X as v,
  Y as y,
  Z as b,
  at as x,
  dt as ee,
  et as S,
  ft as te,
  ht as ne,
  j as re,
  jt as ie,
  k as ae,
  kt as oe,
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
} from "./chunk~01cfc309bf.js";
import { r as _e } from "./chunk~cc40f6af5e.js";
import {
  E as ve,
  S as ye,
  T as be,
  b as xe,
  h as Se,
  x as Ce,
} from "./chunk~437071091c.js";
import { t as we } from "./chunk~eefd71512b.js";
import { n as Te } from "./chunk~75db1bf948.js";
import { _ as Ee, ut as De } from "./chunk~05a38bc848.js";
import { i as Oe, n as ke, t as Ae } from "./chunk~2e61cac879.js";
import { t as je } from "./chunk~92931c6310.js";
import { t as Me } from "./chunk~37e5316e27.js";
import {
  M as Ne,
  X as Pe,
  c as Fe,
  i as Ie,
  j as Le,
  m as Re,
  n as ze,
  o as Be,
  r as Ve,
  s as He,
} from "./chunk~cfb555d6e5.js";
import { t as Ue } from "./chunk~008c00a198.js";
import {
  a as We,
  d as Ge,
  f as Ke,
  l as qe,
  u as Je,
} from "./chunk~0111fcd096.js";
import { a as Ye } from "./chunk~79ae1444d5.js";
import { n as Xe, t as Ze } from "./chunk~8d2b90a325.js";
import { t as Qe } from "./chunk~395a1fb77b.js";
import { n as $e } from "./chunk~0278ae6236.js";
import "./chunk~c55d6473b2.js";
import {
  $h as et,
  $p as tt,
  $s as nt,
  Ad as rt,
  Ah as C,
  Al as it,
  Bc as at,
  Bp as ot,
  Cl as st,
  Cu as ct,
  Df as lt,
  Dh as ut,
  Dl as dt,
  Dp as ft,
  Ef as pt,
  El as mt,
  Em as w,
  Ep as ht,
  Es as gt,
  Fh as T,
  Fm as _t,
  Fp as vt,
  Fs as yt,
  Fu as bt,
  Gd as xt,
  Go as St,
  Gu as Ct,
  Hp as wt,
  Hu as Tt,
  Ic as Et,
  If as Dt,
  Ih as E,
  Im as Ot,
  Ip as kt,
  Jd as At,
  Ji as jt,
  Kd as Mt,
  Kf as Nt,
  Km as Pt,
  Ku as D,
  Ld as Ft,
  Lh as It,
  Li as Lt,
  Lp as Rt,
  Lu as zt,
  Mh as O,
  Ml as Bt,
  Mm as Vt,
  Mp as Ht,
  Nh as k,
  Nl as Ut,
  Nm as Wt,
  Np as Gt,
  Nu as Kt,
  Oc as qt,
  Oh as Jt,
  Op as Yt,
  Ph as A,
  Pm as Xt,
  Pp as Zt,
  Ps as Qt,
  Qm as $t,
  Qo as en,
  Qr as tn,
  Rd as nn,
  Rh as j,
  Ro as rn,
  Rp as an,
  Rs as on,
  St as sn,
  Su as M,
  Tf as cn,
  Tl as ln,
  Tp as un,
  Tt as dn,
  Tu as fn,
  Uc as pn,
  Ud as mn,
  Uf as hn,
  Vd as gn,
  Vm as _n,
  Wi as vn,
  Ws as yn,
  Xf as bn,
  Xm as xn,
  Xo as Sn,
  Xr as Cn,
  Yd as wn,
  Yi as Tn,
  Yo as En,
  Zf as N,
  Zm as Dn,
  Zp as On,
  Zr as kn,
  _s as An,
  _u as jn,
  ai as Mn,
  am as Nn,
  bf as P,
  bp as Pn,
  ca as Fn,
  ci as In,
  dd as Ln,
  dh as Rn,
  dl as zn,
  dm as Bn,
  du as Vn,
  ef as F,
  eg as Hn,
  em as Un,
  ep as Wn,
  fd as Gn,
  fm as Kn,
  fn as qn,
  fp as Jn,
  ft as Yn,
  fu as Xn,
  gc as Zn,
  gf as Qn,
  gm as $n,
  gs as er,
  gt as tr,
  hm as I,
  hp as nr,
  hs as rr,
  ht as ir,
  id as ar,
  if as or,
  ii as sr,
  im as L,
  jh as R,
  jl as cr,
  jm as lr,
  jp as ur,
  js as dr,
  kf as z,
  kh as B,
  kl as fr,
  km as pr,
  kp as V,
  la as mr,
  li as hr,
  lm as gr,
  lu as _r,
  mf as vr,
  nh as yr,
  ns as br,
  nu as xr,
  oi as Sr,
  ol as Cr,
  pd as wr,
  pp as Tr,
  pt as Er,
  pu as Dr,
  qd as Or,
  qh as H,
  qm as kr,
  qo as Ar,
  qr as jr,
  qs as Mr,
  qu as Nr,
  rh as U,
  rm as Pr,
  sm as W,
  sp as Fr,
  tf as Ir,
  tm as Lr,
  ud as Rr,
  uh as zr,
  um as Br,
  up as Vr,
  uu as Hr,
  vh as Ur,
  vu as Wr,
  wl as Gr,
  wm as Kr,
  wt as qr,
  wu as Jr,
  xf as Yr,
  xp as Xr,
  xs as Zr,
  ym as Qr,
  yp as $r,
  yt as ei,
  zf as ti,
  zs as ni,
  zt as ri,
} from "./main.js";
var G = e(u(), 1),
  K = e(c(), 1);
function ii() {
  let e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
function ai(e) {
  return !!e;
}
function oi(e) {
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
function si(e) {
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
function ci(e, t) {
  return e.filter((e) => !t.includes(e));
}
function li(e, t, n) {
  let r = e.slice(0);
  return ((r[t] = n), r);
}
var ui = class extends ne {
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
        te.batch(() => {
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
              (ci(e, r).forEach((e) => {
                e.destroy();
              }),
              ci(r, e).forEach((e) => {
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
      n !== -1 && ((this.#t = li(this.#t, n, t)), this.#f());
    }
    #f() {
      this.hasListeners() &&
        this.#a !== this.#l(this.#c(this.#t, this.#n), this.#r?.combine) &&
        te.batch(() => {
          this.listeners.forEach((e) => {
            e(this.#t);
          });
        });
    }
  },
  di = class extends pe {
    constructor(e, t) {
      super(e, t);
    }
    bindMethods() {
      (super.bindMethods(),
        (this.fetchNextPage = this.fetchNextPage.bind(this)),
        (this.fetchPreviousPage = this.fetchPreviousPage.bind(this)));
    }
    setOptions(e, t) {
      super.setOptions({ ...e, behavior: ee() }, t);
    }
    getOptimisticResult(e) {
      return ((e.behavior = ee()), super.getOptimisticResult(e));
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
function fi({ queries: e, ...t }, r) {
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
    (d(e), h(e, o));
  }),
    S(o));
  let [c] = K.useState(() => new ui(i, s, t)),
    [l, u, f] = c.getOptimisticResult(s, t.combine);
  (K.useSyncExternalStore(
    K.useCallback((e) => (a ? me : c.subscribe(te.batchCalls(e))), [c, a]),
    () => c.getCurrentResult(),
    () => c.getCurrentResult(),
  ),
    K.useEffect(() => {
      c.setQueries(s, t, { listeners: !1 });
    }, [s, t, c]));
  let p = l.some((e, t) => v(s[t], e))
    ? l.flatMap((e, t) => {
        let n = s[t];
        if (n) {
          let t = new pe(i, n);
          if (v(n, e)) return y(n, t, o);
          b(e, a) && y(n, t, o);
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
function pi(e, t) {
  return de(e, di, t);
}
var mi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.activation_code || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            activation_code: { n: 1, br: O.readString, bw: E.writeString },
            purchase_platform: { n: 2, br: O.readInt32, bw: E.writeInt32 },
            is_request_from_client: { n: 3, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Request`;
    }
  },
  hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.transactionid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            packageid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            purchase_status: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            result_detail: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            transaction_time: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            payment_method: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            base_price: {
              n: 7,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            total_discount: {
              n: 8,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            tax: { n: 9, br: O.readUint64String, bw: E.writeUint64String },
            shipping: {
              n: 10,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            currency_code: { n: 11, br: O.readUint32, bw: E.writeUint32 },
            country_code: { n: 12, br: O.readString, bw: E.writeString },
            error_headline: { n: 13, br: O.readString, bw: E.writeString },
            error_string: { n: 14, br: O.readString, bw: E.writeString },
            error_link_text: { n: 15, br: O.readString, bw: E.writeString },
            error_link_url: { n: 16, br: O.readString, bw: E.writeString },
            error_appid: { n: 17, br: O.readUint32, bw: E.writeUint32 },
            line_items: { n: 18, c: gi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo`;
    }
  },
  gi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            line_item_description: {
              n: 3,
              br: O.readString,
              bw: E.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_PurchaseReceiptInfo_LineItem`;
    }
  },
  _i = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchase_result_details || B(e.M()),
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
              br: O.readInt32,
              bw: E.writeInt32,
            },
            purchase_receipt_info: { n: 2, c: hi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_RegisterCDKey_Response`;
    }
  },
  vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 2, br: O.readString, bw: E.writeString },
            country_code: { n: 3, br: O.readString, bw: E.writeString },
            favor_rarer_tags: { n: 4, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Request`;
    }
  },
  yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: bi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response`;
    }
  },
  bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            name: { n: 2, br: O.readString, bw: E.writeString },
            weight: { n: 3, br: O.readFloat, bw: E.writeFloat },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetRecommendedTagsForUser_Response_Tag`;
    }
  },
  xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: O.readString, bw: E.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Request`;
    }
  },
  Si = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Ci, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response`;
    }
  },
  Ci = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            name: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetMostPopularTags_Response_Tag`;
    }
  },
  wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: O.readString, bw: E.writeString },
            tagids: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Request`;
    }
  },
  Ti = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags: { n: 1, c: Ei, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response`;
    }
  },
  Ei = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            english_name: { n: 2, br: O.readString, bw: E.writeString },
            name: { n: 3, br: O.readString, bw: E.writeString },
            normalized_name: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetLocalizedNameForTags_Response_Tag`;
    }
  },
  Di = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: O.readString, bw: E.writeString },
            have_version_hash: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Request`;
    }
  },
  Oi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version_hash || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version_hash: { n: 1, br: O.readString, bw: E.writeString },
            tags: { n: 2, c: ki, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response`;
    }
  },
  ki = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            name: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTagList_Response_Tag`;
    }
  },
  Ai = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.os_win || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [10, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            os_win: { n: 4, br: O.readBool, bw: E.writeBool },
            os_mac: { n: 5, br: O.readBool, bw: E.writeBool },
            os_linux: { n: 6, br: O.readBool, bw: E.writeBool },
            full_controller_support: { n: 7, br: O.readBool, bw: E.writeBool },
            native_steam_controller: { n: 8, br: O.readBool, bw: E.writeBool },
            include_coming_soon: { n: 9, br: O.readBool, bw: E.writeBool },
            excluded_tagids: {
              n: 10,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            exclude_early_access: { n: 11, br: O.readBool, bw: E.writeBool },
            exclude_videos: { n: 12, br: O.readBool, bw: E.writeBool },
            exclude_software: { n: 13, br: O.readBool, bw: E.writeBool },
            exclude_dlc: { n: 14, br: O.readBool, bw: E.writeBool },
            exclude_soundtracks: { n: 15, br: O.readBool, bw: E.writeBool },
            featured_tagids: {
              n: 16,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStoreDiscoveryQueueSettings`;
    }
  },
  ji = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: O.readEnum, bw: E.writeEnum },
            country_code: { n: 2, br: O.readString, bw: E.writeString },
            rebuild_queue: { n: 3, br: O.readBool, bw: E.writeBool },
            settings_changed: { n: 4, br: O.readBool, bw: E.writeBool },
            settings: { n: 5, c: Ai },
            rebuild_queue_if_stale: { n: 6, br: O.readBool, bw: E.writeBool },
            ignore_user_preferences: { n: 8, br: O.readBool, bw: E.writeBool },
            no_experimental_results: { n: 9, br: O.readBool, bw: E.writeBool },
            experimental_cohort: { n: 10, br: O.readUint32, bw: E.writeUint32 },
            debug_get_solr_query: { n: 11, br: O.readBool, bw: E.writeBool },
            store_page_filter: { n: 12, c: Ot },
            context: { n: 13, c: lr },
            data_request: { n: 14, c: Vt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Request`;
    }
  },
  Mi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            country_code: { n: 2, br: O.readString, bw: E.writeString },
            settings: { n: 3, c: Ai },
            skipped: { n: 4, br: O.readInt32, bw: E.writeInt32 },
            exhausted: { n: 5, br: O.readBool, bw: E.writeBool },
            experimental_cohort: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            debug_solr_query: { n: 7, br: O.readString, bw: E.writeString },
            store_items: { n: 8, c: Xt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueue_Response`;
    }
  },
  Ni = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: O.readEnum, bw: E.writeEnum },
            store_page_filter: { n: 2, c: Ot },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Request`;
    }
  },
  Pi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: O.readString, bw: E.writeString },
            settings: { n: 2, c: Ai },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSettings_Response`;
    }
  },
  Fi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.queue_type || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            queue_type: { n: 1, br: O.readEnum, bw: E.writeEnum },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            store_page_filter: { n: 3, c: Ot },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SkipDiscoveryQueueItem_Request`;
    }
  },
  Ii = class e extends G.Message {
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
  Li = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            store_appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            beta_appid: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Request`;
    }
  },
  Ri = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [5, 6, 7, 8, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            owned: { n: 1, br: O.readBool, bw: E.writeBool },
            wishlist: { n: 2, br: O.readBool, bw: E.writeBool },
            ignored: { n: 3, br: O.readBool, bw: E.writeBool },
            following: { n: 4, br: O.readBool, bw: E.writeBool },
            in_queues: {
              n: 5,
              r: !0,
              q: !0,
              br: O.readEnum,
              pbr: O.readPackedEnum,
              bw: E.writeRepeatedEnum,
            },
            queues_with_skip: {
              n: 6,
              r: !0,
              q: !0,
              br: O.readEnum,
              pbr: O.readPackedEnum,
              bw: E.writeRepeatedEnum,
            },
            queue_items_remaining: {
              n: 7,
              r: !0,
              q: !0,
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            queue_items_next_appid: {
              n: 8,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            temporarily_owned: { n: 9, br: O.readBool, bw: E.writeBool },
            queues: { n: 10, c: zi, r: !0, q: !0 },
            ignored_reason: { n: 11, br: O.readInt32, bw: E.writeInt32 },
            beta_status: { n: 12, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response`;
    }
  },
  zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: O.readEnum, bw: E.writeEnum },
            skipped: { n: 2, br: O.readBool, bw: E.writeBool },
            items_remaining: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            next_appid: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            experimental_cohort: { n: 5, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserGameInterestState_Response_InQueue`;
    }
  },
  Bi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Request`;
    }
  },
  Vi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowed_Response`;
    }
  },
  Hi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Request`;
    }
  },
  Ui = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.followed_game_count || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            followed_game_count: { n: 1, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetGamesFollowedCount_Response`;
    }
  },
  Wi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            report_type: { n: 2, br: O.readEnum, bw: E.writeEnum },
            report: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_ReportApp_Request`;
    }
  },
  Gi = class e extends G.Message {
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
  Ki = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.primary_language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            primary_language: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            secondary_languages: {
              n: 2,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            platform_windows: { n: 3, br: O.readBool, bw: E.writeBool },
            platform_mac: { n: 4, br: O.readBool, bw: E.writeBool },
            platform_linux: { n: 5, br: O.readBool, bw: E.writeBool },
            timestamp_updated: { n: 8, br: O.readUint32, bw: E.writeUint32 },
            hide_store_broadcast: { n: 9, br: O.readBool, bw: E.writeBool },
            review_score_preference: { n: 10, br: O.readEnum, bw: E.writeEnum },
            timestamp_content_descriptor_preferences_updated: {
              n: 11,
              br: O.readInt32,
              bw: E.writeInt32,
            },
            provide_deck_feedback: { n: 12, br: O.readEnum, bw: E.writeEnum },
            additional_languages: {
              n: 13,
              br: O.readString,
              bw: E.writeString,
            },
            game_frame_rate_reporting: {
              n: 14,
              br: O.readEnum,
              bw: E.writeEnum,
            },
            disable_microtrailers: { n: 15, br: O.readBool, bw: E.writeBool },
            disable_animated_marketing: {
              n: 16,
              br: O.readBool,
              bw: E.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserPreferences`;
    }
  },
  qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tags_to_exclude || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tags_to_exclude: { n: 1, c: Ji, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences`;
    }
  },
  Ji = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tagid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tagid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            name: { n: 2, br: O.readString, bw: E.writeString },
            timestamp_added: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UserTagPreferences_Tag`;
    }
  },
  Yi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Request`;
    }
  },
  Xi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Ki },
            tag_preferences: { n: 2, c: qi },
            content_descriptor_preferences: { n: 3, c: Jt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetStorePreferences_Response`;
    }
  },
  Zi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_apps || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_apps: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            num_top_friends: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Request`;
    }
  },
  Qi = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trending_apps || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { trending_apps: { n: 1, c: $i, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response`;
    }
  },
  $i = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            steamids_top_friends: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readUint64String,
              pbr: O.readPackedUint64String,
              bw: E.writeRepeatedUint64String,
            },
            total_friends: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData`;
    }
  },
  ea = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packages_to_reserve || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            packages_to_unreserve: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            country_code: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Request`;
    }
  },
  ta = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reservation_status || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reservation_status: { n: 1, c: ut, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_UpdatePackageReservations_Response`;
    }
  },
  na = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            product_identifier: { n: 2, br: O.readString, bw: E.writeString },
            start_queue_position: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            rtime_estimated_notification: {
              n: 4,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            localization_token: { n: 5, br: O.readString, bw: E.writeString },
            accountid: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            rtime_created: { n: 7, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CReservationPositionMessage`;
    }
  },
  ra = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: na, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetReservationPositionMessage_Request`;
    }
  },
  ia = class e extends G.Message {
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
  aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.edistributor || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            edistributor: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            product_identifier: { n: 2, br: O.readString, bw: E.writeString },
            start_queue_position: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_DeleteReservationPositionMessage_Request`;
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
      return `CStore_DeleteReservationPositionMessage_Response`;
    }
  },
  sa = class e extends G.Message {
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
  ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.settings || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { settings: { n: 1, c: na, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetAllReservationPositionMessages_Response`;
    }
  },
  la = class e extends G.Message {
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
  ua = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            browserid: {
              n: 2,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            backfill_source: { n: 3, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_MigratePartnerLinkTracking_Notification`;
    }
  },
  da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            feedback: { n: 2, br: O.readEnum, bw: E.writeEnum },
            feedback_details: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_SetFeedback_Request`;
    }
  },
  fa = class e extends G.Message {
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
  pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Request`;
    }
  },
  ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.prompt || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            prompt: { n: 1, br: O.readBool, bw: E.writeBool },
            feedback_eligible: { n: 2, br: O.readBool, bw: E.writeBool },
            existing_feedback: { n: 3, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamDeckCompatibility_ShouldPrompt_Response`;
    }
  },
  ha = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            demo_appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            allow_late_firing: { n: 3, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Request`;
    }
  },
  ga = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_fire || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_fire: { n: 1, d: !1, br: O.readBool, bw: E.writeBool },
            time_staged: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            demo_release_date: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetWishlistDemoEmailStatus_Response`;
    }
  },
  _a = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            demo_appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            allow_late_firing: { n: 3, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_QueueWishlistDemoEmailToFire_Request`;
    }
  },
  va = class e extends G.Message {
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
  ya = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            queue_type: { n: 2, br: O.readEnum, bw: E.writeEnum },
            store_page_filter: { n: 3, c: Ot },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Request`;
    }
  },
  ba = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetDiscoveryQueueSkippedApps_Response`;
    }
  },
  xa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Ki },
            tag_preferences: { n: 2, c: qi },
            content_descriptor_preferences: { n: 3, c: Jt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_StorePreferencesChanged_Notification`;
    }
  },
  Sa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            steamid: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Request`;
    }
  },
  Ca = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_remaining || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_remaining: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            status: { n: 2, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_RequestInvite_Response`;
    }
  },
  wa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_ids || B(e.M()),
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
              br: O.readUint64String,
              pbr: O.readPackedUint64String,
              bw: E.writeRepeatedUint64String,
            },
            status: { n: 2, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Request`;
    }
  },
  Ta = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites_updated || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invites_updated: { n: 1, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_UpdateInvites_Response`;
    }
  },
  Ea = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Request`;
    }
  },
  Da = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: Oa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response`;
    }
  },
  Oa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            steamid_inviter: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            status: { n: 4, br: O.readEnum, bw: E.writeEnum },
            time_created: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            app_name: { n: 6, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInvites_Response_Invite`;
    }
  },
  ka = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.limit || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            limit: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            time_before: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Request`;
    }
  },
  Aa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invites || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { invites: { n: 1, c: ja, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response`;
    }
  },
  ja = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            steamid_invited: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            time_created: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            app_name: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteHistory_Response_Invite`;
    }
  },
  Ma = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Request`;
    }
  },
  Na = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: Pa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response`;
    }
  },
  Pa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            status: { n: 2, br: O.readEnum, bw: E.writeEnum },
            invites_remaining: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            time_joined: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            packageid: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            invites_sent: { n: 6, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetUserStatus_Response_AppStatus`;
    }
  },
  Fa = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Request`;
    }
  },
  Ia = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ineligible_friends || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytest_GetInviteOptions_Response`;
    }
  },
  La;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Store.RegisterCDKey#1`, U(mi, t, n), _i, {
      ePrivilege: 1,
    });
  }
  e.RegisterCDKey = t;
  function n(e, t, n) {
    return e.SendMsg(`Store.GetRecommendedTagsForUser#1`, U(vi, t, n), yi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetRecommendedTagsForUser = n;
  function r(e, t, n) {
    return e.SendMsg(`Store.GetMostPopularTags#1`, U(xi, t, n), Si, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMostPopularTags = r;
  function i(e, t, n) {
    return e.SendMsg(`Store.GetLocalizedNameForTags#1`, U(wi, t, n), Ti, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetLocalizedNameForTags = i;
  function a(e, t, n) {
    return e.SendMsg(`Store.GetTagList#1`, U(Di, t, n), Oi, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetTagList = a;
  function o(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueue#1`, U(ji, t, n), Mi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueue = o;
  function s(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSettings#1`, U(Ni, t, n), Pi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetDiscoveryQueueSettings = s;
  function c(e, t, n) {
    return e.SendMsg(`Store.SkipDiscoveryQueueItem#1`, U(Fi, t, n), Ii, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.SkipDiscoveryQueueItem = c;
  function l(e, t, n) {
    return e.SendMsg(`Store.GetUserGameInterestState#1`, U(Li, t, n), Ri, {
      ePrivilege: 1,
    });
  }
  e.GetUserGameInterestState = l;
  function u(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowed#1`, U(Bi, t, n), Vi, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowed = u;
  function d(e, t, n) {
    return e.SendMsg(`Store.GetGamesFollowedCount#1`, U(Hi, t, n), Ui, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGamesFollowedCount = d;
  function f(e, t, n) {
    return e.SendMsg(`Store.GetDiscoveryQueueSkippedApps#1`, U(ya, t, n), ba, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetDiscoveryQueueSkippedApps = f;
  function p(e, t, n) {
    return e.SendMsg(`Store.ReportApp#1`, U(Wi, t, n), Gi, { ePrivilege: 3 });
  }
  e.ReportApp = p;
  function m(e, t, n) {
    return e.SendMsg(`Store.GetStorePreferences#1`, U(Yi, t, n), Xi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetStorePreferences = m;
  function h(e, t, n) {
    return e.SendMsg(`Store.GetTrendingAppsAmongFriends#1`, U(Zi, t, n), Qi, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTrendingAppsAmongFriends = h;
  function g(e, t) {
    return e.SendNotification(`Store.MigratePartnerLinkTracking#1`, U(ua, t), {
      ePrivilege: 1,
    });
  }
  e.MigratePartnerLinkTracking = g;
  function _(e, t, n) {
    return e.SendMsg(`Store.UpdatePackageReservations#1`, U(ea, t, n), ta, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.UpdatePackageReservations = _;
  function v(e, t, n) {
    return e.SendMsg(`Store.GetWishlistDemoEmailStatus#1`, U(ha, t, n), ga, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetWishlistDemoEmailStatus = v;
  function y(e, t, n) {
    return e.SendMsg(`Store.QueueWishlistDemoEmailToFire#1`, U(_a, t, n), va, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.QueueWishlistDemoEmailToFire = y;
  function b(e, t, n) {
    return e.SendMsg(`Store.SetReservationPositionMessage#1`, U(ra, t, n), ia, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetReservationPositionMessage = b;
  function x(e, t, n) {
    return e.SendMsg(
      `Store.DeleteReservationPositionMessage#1`,
      U(aa, t, n),
      oa,
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.DeleteReservationPositionMessage = x;
  function ee(e, t, n) {
    return e.SendMsg(
      `Store.GetAllReservationPositionMessages#1`,
      U(sa, t, n),
      ca,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllReservationPositionMessages = ee;
  function S(e, t) {
    return e.SendNotification(
      `Store.ReloadAllReservationPositionMessages#1`,
      U(la, t),
      { ePrivilege: 4, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ReloadAllReservationPositionMessages = S;
  function te(e, t, n) {
    return e.SendMsg(`Store.SetCompatibilityFeedback#1`, U(da, t, n), fa, {
      ePrivilege: 1,
    });
  }
  e.SetCompatibilityFeedback = te;
  function ne(e, t, n) {
    return e.SendMsg(
      `Store.ShouldPromptForCompatibilityFeedback#1`,
      U(pa, t, n),
      ma,
      { ePrivilege: 1 },
    );
  }
  e.ShouldPromptForCompatibilityFeedback = ne;
})((La ||= {}));
var Ra;
(function (e) {
  e.NotifyStorePreferencesChangedHandler = {
    name: `StoreClient.NotifyStorePreferencesChanged#1`,
    request: xa,
  };
})((Ra ||= {}));
var za;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Playtest.RequestInvite#1`, U(Sa, t, n), Ca, {
      ePrivilege: 1,
    });
  }
  e.RequestInvite = t;
  function n(e, t, n) {
    return e.SendMsg(`Playtest.UpdateInvites#1`, U(wa, t, n), Ta, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UpdateInvites = n;
  function r(e, t, n) {
    return e.SendMsg(`Playtest.GetInvites#1`, U(Ea, t, n), Da, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteHistory#1`, U(ka, t, n), Aa, {
      ePrivilege: 1,
    });
  }
  e.GetInviteHistory = i;
  function a(e, t, n) {
    return e.SendMsg(`Playtest.GetUserStatus#1`, U(Ma, t, n), Na, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`Playtest.GetInviteOptions#1`, U(Fa, t, n), Ia, {
      ePrivilege: 1,
    });
  }
  e.GetInviteOptions = o;
})((za ||= {}));
function Ba() {
  let e = On(),
    t = W.accountid,
    n = W.country_code;
  return f(Va(e, t, n));
}
function Va(e, t, n) {
  return {
    queryKey: Ka(t),
    queryFn: async () => {
      if (!t) return Ga();
      let r = yr.Init(Yi);
      r.Body().set_country_code(n);
      let i = await La.GetStorePreferences(e, r);
      if (!i.BSuccess())
        throw `Error loading store preferences: ${i.GetErrorMessage()}`;
      return i.Body().toObject();
    },
    staleTime: 36e5,
  };
}
function Ha() {
  let e = On(),
    t = W.accountid,
    n = W.country_code;
  return f({ ...Va(e, t, n), select: (e) => Wa(e, Dn(L.LANGUAGE)) });
}
var Ua = [4, 3];
function Wa(e, t) {
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
function Ga() {
  return {
    preferences: { primary_language: Dn(L.LANGUAGE) },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: Ua.map((e) => ({
        content_descriptorid: e,
      })),
    },
  };
}
function Ka(e) {
  return [`StorePreferencesQueryKey`, e ?? 0];
}
var qa = `unUserdataVersion`;
function Ja() {
  return Number.parseInt(window.localStorage.getItem(qa) || `0`);
}
function Ya(e, t, n) {
  let r = Ja(),
    i = `${e}dynamicstore/userdata/?id=${t}&cc=${n}&origin=${self.origin}`;
  return (r && (i += `&v=${r}`), i);
}
function Xa() {
  window.localStorage.setItem(
    qa,
    (Number.parseInt(window.localStorage.getItem(qa) || `0`) + 1).toString(),
  );
}
var q = ue();
async function Za(e, t) {
  let n = Ya(I.STORE_BASE_URL, t, $n.country_code);
  return (await (await fetch(n)).json()).rgOwnedApps || [];
}
async function Qa(e, t, n) {
  return (await Za(e, t)).includes(n);
}
function $a() {
  let e = On(),
    t = W.accountid;
  return f(eo(e, t));
}
function eo(e, t) {
  return {
    queryKey: io(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Za(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function to(e, t, n) {
  return {
    queryKey: [`AccountOwnsApp`, t, n],
    queryFn: async () => (t ? await Qa(e, t, n) : !1),
    staleTime: 6e5,
  };
}
function no(e) {
  let t = On(),
    n = W.accountid,
    { data: r } = f(to(t, n, e));
  return r === void 0 ? void 0 : r;
}
function ro(e) {
  let t = x(),
    n = W.accountid;
  return K.useCallback(
    (r) => {
      t.setQueryData(io(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function io(e) {
  return [`AccountOwnedApps`, e ?? 0];
}
function ao(e) {
  let { data: t } = V(e && `appid` in e ? void 0 : e),
    { data: n } = $a(),
    r;
  return (
    e && `appid` in e ? (r = [e.appid]) : t && (r = t.included_appids),
    r === void 0 || n === void 0 || r.length == 0
      ? { bIsOwned: void 0, unAppID: void 0 }
      : { bIsOwned: !r.some((e) => !n.has(e)), unAppID: r[0] }
  );
}
var oo = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            listid: { n: 2, br: O.readUint64String, bw: E.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_CuratorData`;
    }
  },
  so = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.domain || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            domain: { n: 1, br: O.readString, bw: E.writeString },
            controller: { n: 2, br: O.readString, bw: E.writeString },
            method: { n: 3, br: O.readString, bw: E.writeString },
            submethod: { n: 4, br: O.readString, bw: E.writeString },
            feature: { n: 5, br: O.readString, bw: E.writeString },
            depth: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            countrycode: { n: 7, br: O.readString, bw: E.writeString },
            webkey: { n: 8, br: O.readUint64String, bw: E.writeUint64String },
            is_client: { n: 9, br: O.readBool, bw: E.writeBool },
            curator_data: { n: 10, c: oo },
            is_likely_bot: { n: 11, br: O.readBool, bw: E.writeBool },
            is_utm: { n: 12, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserInterface_NavData`;
    }
  },
  co = (function (e) {
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
  lo = {
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
function uo() {
  let e = [...W.excluded_content_descriptors];
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
var fo;
function po() {
  return (fo ??= uo());
}
function mo() {
  return !!Kn(`wants_mature_content`);
}
function ho(e) {
  let t = uo();
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
    e.rgIgnoredApps && (t.mapIgnoredApps = go(e.rgIgnoredApps)),
    e.rgIgnoredPackages && (t.mapIgnoredPackages = go(e.rgIgnoredPackages)),
    e.rgExcludedTags &&
      ((t.setExcludedTagIDs = new Set(
        e.rgExcludedTags.map((e) => Number(e.tagid)),
      )),
      (t.rgExcludedTagIDsSorted = Array.from(t.setExcludedTagIDs).sort())),
    mo()
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
      let e = lo[n];
      e !== void 0 && t.setHardwareUsed.add(e);
    }
  return t;
}
function go(e) {
  let t = new Map();
  for (let [n, r] of Object.entries(e)) {
    let e = Number(n);
    e && t.set(e, Number(r));
  }
  return t;
}
var _o = `dynamicuserdata`;
function vo(e) {
  return [_o, e];
}
function yo(e) {
  return e?.[0] == _o;
}
async function bo(e) {
  try {
    let t = await fetch(Ya(L.STORE_BASE_URL, e, W.country_code), {
      credentials: `include`,
    });
    if (!t.ok) throw Error(`Server returned ${t.status}`);
    return ho(await t.json());
  } catch (e) {
    return (
      console.warn(`LoadDynamicUserData`, e),
      Ur().ReportError(Error(`LoadDynamicUserData ${e}`), {
        bIncludeMessageInIdentifier: !0,
      }),
      uo()
    );
  }
}
var xo = 6e4;
function So() {
  let e = W.accountid;
  return {
    queryKey: vo(e),
    queryFn: () => bo(e),
    staleTime: (e) => (e.state.data?.bLoaded === !1 ? xo : 1 / 0),
    gcTime: 1 / 0,
    retry: !1,
    enabled: !0,
  };
}
function Co() {
  return f(So());
}
function wo(e) {
  let t = e.getQueryData(vo(W.accountid));
  return (t && !t.bLoaded && To(e), t ?? po());
}
function To(e) {
  let t = e.getQueryState(vo(W.accountid));
  t?.fetchStatus == `idle` &&
    Date.now() - t.dataUpdatedAt >= xo &&
    e.prefetchQuery(So());
}
async function Eo(e) {
  return e.fetchQuery(So());
}
function Do(e, t) {
  e.setQueryData(vo(W.accountid), (e) => {
    if (!e) return;
    let n = t(e);
    return n ? { ...e, ...n } : e;
  });
}
var Oo = 3871,
  ko = 1664,
  Ao = 1684,
  jo = 1667,
  Mo = 3942,
  No = 1774,
  Po = 1695,
  Fo = 3839,
  Io = 1625,
  Lo = 1685,
  Ro = 1662,
  zo = 1663,
  Bo = 1773,
  Vo = 3834,
  Ho = 3799,
  Uo = 1654,
  Wo = 1698,
  Go = 1721,
  Ko = 1755,
  qo = 5716,
  Jo = 4175,
  Yo = 3978,
  Xo = 12472,
  Zo = 10695,
  Qo = 4106,
  $o = 4231,
  es = 1716,
  ts = 1702,
  ns = 5900,
  rs = 1741,
  is = 1676,
  as = 3959,
  os = 4885,
  ss = 1775,
  cs = 1738,
  ls = 1687,
  us = 4604,
  ds = 4434,
  fs = 9551,
  ps = 3835,
  ms = 1645,
  hs = 1720,
  gs = 4172,
  _s = 1666,
  vs = 4115,
  ys = 1628,
  bs = 4486,
  xs = 5395,
  Ss = 4328,
  Cs = 5613,
  ws = 4191,
  Ts = 44868,
  Es = 6730,
  Ds = 6129,
  Os = 1665,
  ks = 560542,
  As = 5154,
  js = 17305,
  Ms = 21725,
  Ns = 3813,
  Ps = 31579,
  Fs = 4474,
  Is = 1254546,
  Ls = 18594,
  Rs = 7038,
  zs = 1746,
  Bs = 5727,
  Vs = 791774,
  Hs = 5652,
  Us = 615955,
  Ws = 4102,
  Gs = 3877,
  Ks = 5537,
  qs = 5379,
  Js = 10235,
  Ys = 220585,
  Xs = 87918,
  Zs = 1100687,
  Qs = 26921,
  $s = 1100688,
  ec = 91114,
  tc = 7178,
  nc = 723991,
  rc = 1239876,
  ic = 23491;
function ac(e) {
  let t = tt(),
    n = Un();
  return f(cc(t.GetAnonymousServiceTransport(), n, e));
}
function oc(e) {
  return `LocalizedTagNames2_${e}`;
}
function sc(e) {
  let t = {};
  return ((e?.tags || []).forEach(({ tagid: e, name: n }) => (t[e] = n)), t);
}
function cc(e, t, n) {
  return {
    queryKey: [`LocalizedTagNames`, n],
    queryFn: async () => {
      let r = oc(n),
        i = await t.GetObject(r),
        a = yr.Init(Di);
      (a.Body().set_language(n),
        i?.version_hash && a.Body().set_have_version_hash(i.version_hash));
      let o = await La.GetTagList(e, a),
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
      return sc(s);
    },
    staleTime: 36e5,
  };
}
async function lc(e, t, n) {
  return bn.fetchQuery(cc(e.GetAnonymousServiceTransport(), t, n));
}
function uc(e, t) {
  let { data: n } = ac(t);
  return n && n[e];
}
function dc(e) {
  let { data: t } = ac(e);
  return !!t;
}
function fc(e) {
  let { data: t } = V(e);
  return (0, K.useMemo)(
    () => (t ? (t.item_type == 0 ? [t.appid] : t.included_appids || []) : []),
    [t],
  );
}
function pc(e) {
  if (!e?.length) return [];
  let t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
  return Array.from(new Set(t));
}
function mc(e) {
  let { data: t } = V(e);
  return (0, K.useMemo)(() => {
    if (t && t.related_items && t.related_items.parent_appid)
      return { appid: t.related_items.parent_appid };
  }, [t]);
}
function hc(e) {
  return (0, K.useMemo)(() => (e ? { appid: e } : void 0), [e]);
}
function gc(e) {
  return (0, K.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
}
function _c(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (` ` + (e.className.baseVal || e.className) + ` `).indexOf(
        ` ` + t + ` `,
      ) !== -1;
}
function vc(e, t) {
  e.classList
    ? e.classList.add(t)
    : _c(e, t) ||
      (typeof e.className == `string`
        ? (e.className = e.className + ` ` + t)
        : e.setAttribute(
            `class`,
            ((e.className && e.className.baseVal) || ``) + ` ` + t,
          ));
}
function yc(e, t) {
  return e
    .replace(RegExp(`(^|\\s)` + t + `(?:\\s|$)`, `g`), `$1`)
    .replace(/\s+/g, ` `)
    .replace(/^\s*|\s*$/g, ``);
}
function bc(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == `string`
      ? (e.className = yc(e.className, t))
      : e.setAttribute(
          `class`,
          yc((e.className && e.className.baseVal) || ``, t),
        );
}
var xc = e(s()),
  Sc = { disabled: !1 },
  Cc = K.createContext(null),
  wc = function (e) {
    return e.scrollTop;
  },
  Tc = `unmounted`,
  Ec = `exited`,
  Dc = `entering`,
  Oc = `entered`,
  kc = `exiting`,
  Ac = (function (e) {
    m(t, e);
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = n,
        a = i && !i.isMounting ? t.enter : t.appear,
        o;
      return (
        (r.appearStatus = null),
        t.in
          ? a
            ? ((o = Ec), (r.appearStatus = Dc))
            : (o = Oc)
          : (o = t.unmountOnExit || t.mountOnEnter ? Tc : Ec),
        (r.state = { status: o }),
        (r.nextCallback = null),
        r
      );
    }
    t.getDerivedStateFromProps = function (e, t) {
      return e.in && t.status === `unmounted` ? { status: Ec } : null;
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
            ? n !== `entering` && n !== `entered` && (t = Dc)
            : (n === `entering` || n === `entered`) && (t = kc);
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
                : xc.default.findDOMNode(this);
              n && wc(n);
            }
            this.performEnter(e);
          } else this.performExit();
        } else
          this.props.unmountOnExit &&
            this.state.status === `exited` &&
            this.setState({ status: Tc });
      }),
      (n.performEnter = function (e) {
        var t = this,
          n = this.props.enter,
          r = this.context ? this.context.isMounting : e,
          i = this.props.nodeRef ? [r] : [xc.default.findDOMNode(this), r],
          a = i[0],
          o = i[1],
          s = this.getTimeouts(),
          c = r ? s.appear : s.enter;
        (!e && !n) || Sc.disabled
          ? this.safeSetState({ status: Oc }, function () {
              t.props.onEntered(a);
            })
          : (this.props.onEnter(a, o),
            this.safeSetState({ status: Dc }, function () {
              (t.props.onEntering(a, o),
                t.onTransitionEnd(c, function () {
                  t.safeSetState({ status: Oc }, function () {
                    t.props.onEntered(a, o);
                  });
                }));
            }));
      }),
      (n.performExit = function () {
        var e = this,
          t = this.props.exit,
          n = this.getTimeouts(),
          r = this.props.nodeRef ? void 0 : xc.default.findDOMNode(this);
        !t || Sc.disabled
          ? this.safeSetState({ status: Ec }, function () {
              e.props.onExited(r);
            })
          : (this.props.onExit(r),
            this.safeSetState({ status: kc }, function () {
              (e.props.onExiting(r),
                e.onTransitionEnd(n.exit, function () {
                  e.safeSetState({ status: Ec }, function () {
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
            : xc.default.findDOMNode(this),
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
        var r = oe(t, [
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
          Cc.Provider,
          { value: null },
          typeof n == `function`
            ? n(e, r)
            : K.cloneElement(K.Children.only(n), r),
        );
      }),
      t
    );
  })(K.Component);
((Ac.contextType = Cc), (Ac.propTypes = {}));
function jc() {}
((Ac.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jc,
  onEntering: jc,
  onEntered: jc,
  onExit: jc,
  onExiting: jc,
  onExited: jc,
}),
  (Ac.UNMOUNTED = Tc),
  (Ac.EXITED = Ec),
  (Ac.ENTERING = Dc),
  (Ac.ENTERED = Oc),
  (Ac.EXITING = kc));
var Mc = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return vc(e, t);
      })
    );
  },
  Nc = function (e, t) {
    return (
      e &&
      t &&
      t.split(` `).forEach(function (t) {
        return bc(e, t);
      })
    );
  },
  Pc = (function (e) {
    m(t, e);
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
          n === `active` && e && wc(e),
          r && ((this.appliedClasses[t][n] = r), Mc(e, r)));
      }),
      (n.removeClasses = function (e, t) {
        var n = this.appliedClasses[t],
          r = n.base,
          i = n.active,
          a = n.done;
        ((this.appliedClasses[t] = {}),
          r && Nc(e, r),
          i && Nc(e, i),
          a && Nc(e, a));
      }),
      (n.render = function () {
        var e = this.props;
        e.classNames;
        var t = oe(e, [`classNames`]);
        return K.createElement(
          Ac,
          ie({}, t, {
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
((Pc.defaultProps = { classNames: `` }), (Pc.propTypes = {}));
function Fc(e, t, n, r) {
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
var Ic = `oliNocjo3ok-`,
  Lc = `x3qY8Eev7UU-`,
  Rc = `_3lYhLNSBOpE-`,
  zc = `tyYNnQMYYyw-`,
  Bc = `-WD8g17w7iA-`;
function Vc() {
  let [e, t] = K.useState(void 0),
    n = K.useCallback(() => t(void 0), []);
  return [
    t,
    (0, q.jsx)(on, {
      active: e !== void 0,
      children: (0, q.jsx)(Hc, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function Hc(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = K.useState(0),
    a = n?.length ?? 0,
    o = K.useCallback(() => {
      i(r == 0 ? a - 1 : r - 1);
    }, [r, a]),
    s = K.useCallback(() => {
      n && r + 1 >= a ? i(0) : i(r + 1);
    }, [r, n, a]);
  return (0, q.jsxs)(jt, {
    title: F(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: Ic,
    children: [
      (0, q.jsx)(Uc, {
        index: r,
        numElements: n?.length || 0,
        fnForward: s,
        fnBackwards: o,
        fnClose: t,
        bCircular: !0,
      }),
      (0, q.jsx)(`div`, {
        className: Lc,
        children: (0, q.jsx)(`img`, { className: Rc, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function Uc(e) {
  let {
    index: t,
    numElements: n,
    fnForward: r,
    fnBackwards: i,
    fnClose: a,
    bCircular: o,
  } = e;
  (Fc(`ArrowLeft`, () => i?.(), !0, !0),
    Fc(`Left`, () => i?.(), !0, !0),
    Fc(`ArrowRight`, () => r?.(), !0, !0),
    Fc(`Right`, () => r?.(), !0, !0),
    Fc(`Escape`, () => a && a(), !0, !0),
    Fc(`Esc`, () => a && a(), !0, !0));
  let s = n > 1;
  return (0, q.jsxs)(`div`, {
    className: zc,
    children: [
      s &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(`button`, {
              type: `button`,
              className: M(
                `-WD8g17w7iA-`,
                t === 0 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": F(`#Carousel_Prev`),
              children: (0, q.jsx)(Et, { angle: 270 }),
            }),
            (0, q.jsx)(`button`, {
              type: `button`,
              className: M(
                `-WD8g17w7iA-`,
                t === n - 1 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: r,
              "aria-label": F(`#Carousel_Next`),
              children: (0, q.jsx)(Et, { angle: 90 }),
            }),
          ],
        }),
      (0, q.jsx)(`button`, {
        type: `button`,
        className: Bc,
        onClick: a,
        "aria-label": F(`#Button_Close`),
        children: (0, q.jsx)(Xn, {}),
      }),
    ],
  });
}
async function Wc(e) {
  let t = { get_appids: !0, l: L.LANGUAGE },
    n = new URLSearchParams(t).toString(),
    r = `${L.STORE_BASE_URL}curator/${e}/ajaxgetcreatorhomeinfo/?${n}`,
    i = await fetch(r, { method: `GET` });
  if (!i.ok) throw Error(`Server returned ${i.status}`);
  let a = await i.json();
  return a.success == 1 ? a : null;
}
function Gc(e) {
  return f(Kc(e));
}
function Kc(e) {
  return {
    queryKey: qc(e),
    queryFn: async () => {
      let t = await Wc(e);
      if (t) {
        let { success: e, err_msg: n, warning: r, warning_msg: i, ...a } = t;
        return a;
      }
      return null;
    },
    enabled: !!e,
  };
}
function qc(e) {
  return [`creatorhomebyaccount`, e];
}
function Jc(e, t) {
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
var Yc = `{STEAM_CLAN_IMAGE}`,
  Xc = `{STEAM_CLAN_LOC_IMAGE}`;
function Zc(e) {
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
function Qc(e) {
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
function $c(e) {
  let t = ii(),
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
function el(e) {
  let t = ii(),
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
function tl(e) {
  return e.startsWith(`image/`);
}
function nl(e) {
  return e.startsWith(`video/`);
}
async function rl(e, t) {
  if (t) return el(URL.createObjectURL(e));
  {
    let t = ii(),
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
    return r ? $c(r.toString()) : void 0;
  }
}
function il(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
function al(e, t) {
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
function ol(e, t) {
  return `${e}/${t}`;
}
var sl = K.createContext({});
function cl() {
  return K.useContext(sl);
}
RegExp(`${Xc.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function ll(e, t, n = 0) {
  return dl(e, t, n, cl());
}
async function ul(e, t, n = 0) {
  return dl(e, t, n);
}
function dl(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return fl.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = fl.GetBaseURL(),
      a = e.substring(Xc.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = fl.GenerateURLFromHashAndExt(o, s);
    if (r?.[ol(o, s)] === !1) return c;
    let l = fl
      .GetLocalizedClanImageFileNames(s, t)
      .map((e) => i + o + `/` + e + `?t=` + n);
    return (l.push(c), l);
  }
  return e;
}
var fl = {
    GetBaseURL() {
      return `${L.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${L.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(Yc, this.GetBaseURL())), e.replace(`http://`, `https://`)
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
      return (e.file_type == null ? null : Qc(e.file_type)) ?? `.jpg`;
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
        i = [n + `/` + Pt(t) + r];
      return (t == 4 && i.push(n + `/` + xn(Pt(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = pl.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = pl.full, r, i) {
      e instanceof w && (e = e.GetAccountID());
      let a = this.GetBaseURL(),
        o = r != null && r != -1;
      if (n == pl.full && !o) return a + e + `/` + t;
      {
        let s = t.substring(t.lastIndexOf(`.`)),
          c = t.substring(0, t.length - s.length);
        return !o || r == 0 || i != `localized_image_group`
          ? a + e + `/` + c + n + s
          : a + e + `/` + c + `/` + xn(Pt(r)) + s;
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
        L.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (n && (r += `&lang=` + n), r);
    },
    GetMimeType(e) {
      return Zc(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, t, n) {
      let r = ii(),
        i = new Image();
      ((i.crossOrigin = `anonymous`),
        (i.onerror = (t) => {
          let i = { success: 2 };
          (n ||
            ((i.err_msg =
              `Load fail on url ` + e + ` with error: ` + ti(t).strErrorMsg),
            console.error(i.err_msg)),
            (i.success = 2),
            r.resolve(i));
        }),
        (i.onload = () => {
          let t = { success: 2 };
          ((t.width = i.width),
            (t.height = i.height),
            !(i.width > 0) || !(i.height > 0)
              ? (et(
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
  pl = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  ml = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  hl = 4145017,
  gl = 35143931,
  _l = 39049601,
  vl = 45479024,
  yl = 41316928,
  bl = [hl, gl, _l, 4, yl],
  xl = e(_(), 1),
  Sl = e(r()),
  Cl = e(o(), 1);
function wl(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function Tl(e, t) {
  return wl(e, ``, t).startsWith(`curator/`);
}
function El(e) {
  return e
    ? !!(
        e.related_items &&
        e.related_items.standalone_demo_appid &&
        e.related_items.standalone_demo_appid.length > 0 &&
        e.related_items.standalone_demo_appid[0]
      )
    : !1;
}
function Dl(e) {
  return !e || !e.related_items?.standalone_demo_appid
    ? []
    : e.related_items?.standalone_demo_appid;
}
function Ol(e, t = !1) {
  if (e)
    return t && El(e)
      ? `${L.STORE_BASE_URL}app/${Dl(e)[0]}`
      : `${L.STORE_BASE_URL}${e.store_url_path}`;
}
function kl() {
  window.location.href = `${L.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
}
var Al = `Og4Odc3VLI8-`,
  jl = `700px`,
  Ml = {
    strMaxMobileWidth: jl,
    strMaxResponsiveWidth: `910px`,
    strMaxTabletWidth: `1080px`,
  };
function Nl() {
  return window.innerWidth < parseInt(jl);
}
function Pl() {
  let e = Ln();
  return (
    K.useEffect(
      () => (
        window.addEventListener(`resize`, e),
        () => window.removeEventListener(`resize`, e)
      ),
      [e],
    ),
    window.innerWidth < parseInt(jl)
  );
}
var Fl = `xq-I5249Blg-`,
  Il = `_-8Ur6QivGZk-`,
  Ll = 1.3,
  Rl = 3,
  zl = 256;
function Bl(e) {
  let [t, n] = (0, K.useState)(!1),
    [r, i] = (0, K.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    a = (0, K.useRef)(null),
    [o, s] = Vc();
  return (
    (0, K.useEffect)(() => {
      r.naturalWidth > r.displayWidth * Ll &&
        r.naturalHeight > r.displayHeight * Ll &&
        r.naturalWidth > zl &&
        r.naturalWidth / r.naturalHeight < Rl &&
        n(!0);
    }, [r]),
    t
      ? (0, q.jsxs)(`span`, {
          className: Fl,
          children: [
            s,
            (0, q.jsx)(`span`, { className: Il, children: (0, q.jsx)(zn, {}) }),
            (0, q.jsx)(`img`, {
              ...e,
              className: M({ ...(e.className && { [e.className]: !0 }) }),
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
            if (!e.currentTarget.closest(`a`) && !Nl()) {
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
function Vl(e) {
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
function Hl(e) {
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
        className: Al,
        children: [
          (0, q.jsx)(`p`, { children: F(`#Image_ErrorTitle`, i) }),
          (0, q.jsx)(`ul`, {
            children: (0, q.jsx)(`li`, { children: F(`#Image_Error_msg1`) }),
          }),
          (0, q.jsx)(`p`, { children: F(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, q.jsx)(Bl, {
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
var Ul = `_8Wp5WbqAbJA-`,
  Wl = `K2PjXmYWvSg-`,
  Gl = `UYfcYZDtfbs-`,
  Kl = `O-TsWDon65A-`,
  ql = `E8DrK8oV4Hs-`,
  Jl = `XTfMA1ObAn4-`,
  Yl = `-Rv33oXsbT0-`,
  Xl = `MN6Xv-pm6i8-`,
  Zl = `uvLRAREPa4E-`,
  Ql = `bdPmPtfuqIY-`,
  $l = `JCVuyoKAC-k-`,
  eu = `kjiBcsaqA8o-`,
  tu = `UFAsjplGzxc-`,
  nu = `vL-XYGsLedM-`,
  ru = `aCttqIa8NC4-`,
  iu = `-rXzhlz0w3Q-`,
  au = `R9ivMzB3Gic-`,
  ou = `W9-byrNtR9Q-`,
  su = `llT8dhJgnqw-`,
  cu = `kxs4VtommH4-`,
  lu = `ncKEDk26SHQ-`,
  uu = `VGzHGCF3I5o-`,
  du = `fNtXEMzHz58-`,
  fu = `jrHvWWIOlw4-`,
  pu = `FOKKfGVYUDk-`,
  mu = `OClIuwfiMKQ-`,
  hu = `ZLlm68-AqhM-`,
  gu = `raYV6Y-MQ7I-`,
  _u = `IWFCYfhR05U-`,
  vu = `KtOQKgU1W5w-`,
  yu = `jXpKqo3-cWA-`,
  bu = `_-7gyAR9oUx4-`,
  xu = `GcBGxmj4uvE-`,
  Su = `QwN0eH2k0O0-`,
  Cu = `sgCiKk3DUeg-`,
  wu = `N86EuolnWHc-`,
  Tu = `A8oyzoRvWQ8-`,
  Eu = `V7rq-SSC9xQ-`,
  Du = `pNXxwljIaD8-`,
  Ou = `lsjYiHotCwA-`,
  ku = `iVV26V5rbpU-`,
  Au = `XosTQwEOBO0-`,
  ju = `ITE-CUK3U10-`,
  Mu = `zMMJGDB8n-o-`,
  Nu = `XPrPiD27WdE-`,
  Pu = `R0sGSaFdUWo-`,
  Fu = `PON8X0ze5G8-`,
  Iu = `rfhpla0PGMA-`,
  Lu = `OySWwOLLxFc-`,
  Ru = `tkR3-aHpyI4-`,
  zu = `yyrI0Nka69I-`,
  Bu = `D3fuhd6kG6I-`,
  Vu = `Xk-QP-zS-18-`,
  Hu = `I9cM1cZTYqc-`,
  Uu = `LkW8eRLttsM-`,
  Wu = `_4KL8m0wDedE-`,
  Gu = `E3GBmOK5lMc-`,
  Ku = `lOHW8g-YyoY-`,
  qu = `RQzfcqJK1Eg-`,
  Ju = `_0MLgqm-W-nA-`,
  Yu = `iwrzh-mg8hE-`,
  Xu = `oZCOhIQDgxo-`,
  Zu = `-G-r65tUoo0-`,
  Qu = `qVhohSfcErA-`,
  $u = `GqNlebj1uds-`,
  ed = `oqhyMK1Krt0-`,
  td = `GRw4r5TpD5s-`,
  nd = `mspnwaz0EAg-`,
  rd = `_06Z7Ej-J6OU-`,
  id = `lO9B4Ti6gBk-`,
  ad = `lkVpo86MFuI-`,
  od = `chTH6btujQ0-`,
  sd = `_96v5CHkkJJY-`,
  cd = `GxypNLhVZWE-`,
  ld = `_-4JZsb8K2FY-`,
  ud = `BD3vXqZ-6yI-`,
  dd = `l9by-6sJDpM-`,
  fd = `LCYi5cxHqgI-`,
  pd = `eASrfjoxe3o-`,
  md = `WWolAsqP274-`,
  hd = `mP8HbLoIUo0-`,
  gd = `BuCaaYRb4Cg-`,
  _d = `bYNmqkeEJGc-`,
  vd = `_4xLBehMPMIU-`,
  yd = `XiCMCQH8z2U-`,
  bd = `_3wT3W-azVyE-`,
  xd = `EpyWQfQU-D4-`,
  Sd = `FDvyBhD2AA0-`,
  Cd = `RIck6AI1vX8-`,
  wd = `Sndyr6iqn8g-`,
  Td = `qUsoY9s6daM-`,
  Ed = `v7ul8g8zqHs-`,
  Dd = `aN31caRmRcQ-`,
  Od = `tobj1evrU4w-`,
  kd = `NqZ9uMSo13A-`,
  Ad = `RAahmG4F6sc-`;
function jd(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = rD(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, q.jsx)(ey, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let c = ``;
  switch (n) {
    case `main`:
      c = rd;
      break;
    default:
      c = nd;
  }
  if (o === void 0 || !s)
    return (0, q.jsx)(`div`, { className: M(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = Md(o, n === `header`);
  return (0, q.jsx)(`div`, {
    className: M(c, `CapsuleImageCtn`, i),
    children: (0, q.jsx)(Vl, {
      lazyLoad: !0,
      srcs: l,
      className: M(cd),
      alt: s.name,
    }),
  });
}
function Md(e, t) {
  let n = [];
  return (e && Pd(n, e, t), n.filter((e) => !!e));
}
function Nd(e, t) {
  return {
    strStoreVerticalURL: Ae(e, `hero_capsule`),
    strLibraryVerticalURL: Ae(e, `library_capsule`),
  };
}
function Pd(e, t, n) {
  let r = Ae(t, `header_2x`) ?? Ae(t, `header`),
    i = Ae(t, `main_capsule_2x`) ?? Ae(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var Fd = `GL0tHV4bOk8-`,
  Id = `LPcYz6LIoNo-`,
  Ld = `IPcip0GPG-I-`,
  Rd = `GCeo-xmfx1A-`,
  zd = 6,
  Bd = 1e3,
  Vd = (function (e) {
    return (
      (e[(e.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (e[(e.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (e[(e.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      e
    );
  })({});
function Hd(e) {
  let { id: t, active: n, bIsHoverMode: r, eGrowOnActivate: i } = e,
    { data: a } = V(t),
    o = K.useRef(0),
    s = K.useRef(null);
  K.useLayoutEffect(() => {
    n && s.current && (s.current.currentTime = o.current);
  }, [n]);
  let c = (e) => {
      o.current = e.currentTarget.currentTime;
    },
    l = Wn(t),
    u = n && !l ? t : void 0,
    d = xt(u),
    f = xt(u, !0);
  if ((r && L.IN_MOBILE) || !n || !a || !a.visible) return null;
  if (l) return (0, q.jsx)(Wd, { id: t });
  if (!d) return null;
  let p = d.filter(Ud);
  if (p.length === 0)
    return f?.some(Ud)
      ? (0, q.jsx)(Wd, { id: t })
      : a && a.related_items?.parent_appid && (a.type == 1 || a.type == 12)
        ? (0, q.jsx)(Hd, { ...e, id: { appid: a.related_items.parent_appid } })
        : null;
  let m;
  switch (i) {
    case 1:
      m = Id;
      break;
    case 2:
      m = Ld;
  }
  let h = p[0];
  return (0, q.jsx)(`video`, {
    className: (0, Cl.default)(Fd, m),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: s,
    playsInline: !0,
    onTimeUpdate: c,
    children: (0, q.jsx)(Gd, { trailer: h }),
  });
}
function Ud(e) {
  return !!e.microtrailer && e.microtrailer.length > 0;
}
function Wd(e) {
  let { id: t } = e,
    { data: n } = vt(t),
    [r, i] = K.useState(0),
    a = K.useMemo(
      () =>
        [...(n?.all_ages_screenshots || [])]
          .sort((e, t) => e.ordinal - t.ordinal)
          .slice(0, zd),
      [n],
    );
  return (
    Gn(() => {
      a.length > 0 && i((e) => (e + 1) % a.length);
    }, Bd),
    a.length == 0
      ? null
      : (0, q.jsx)(`div`, {
          className: Fd,
          children: a.map((e, t) =>
            (0, q.jsx)(
              `img`,
              {
                className: (0, Cl.default)(Rd, t == r && `_8Ek7qtVBxvk-`),
                src: ke(e, `600x338`),
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function Gd(e) {
  let { trailer: t } = e;
  return !t || !t.microtrailer
    ? null
    : (0, q.jsx)(q.Fragment, {
        children: t.microtrailer?.map((e) =>
          L.IN_CLIENT && e.type == `video/mp4`
            ? null
            : (0, q.jsx)(
                `source`,
                { src: gn(t, e.filename || ``), type: e.type },
                e.filename,
              ),
        ),
      });
}
function Kd(e) {
  return e?.is_coming_soon
    ? qd(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? ei(e.steam_release_date)
      : ``;
}
function qd(e, t, n) {
  switch (e) {
    case `date_full`:
      return ei(t);
    case `date_month`:
      return Yn(new Date(t * 1e3));
    case `date_quarter`:
      return Er(new Date(t * 1e3));
    case `date_year`:
      return ir(new Date(t * 1e3));
    case `text_comingsoon`:
      return n || P.Localize(`#Store_ComingSoon_ComingSoon`);
    case `text_tba`:
      return n || P.Localize(`#Store_ComingSoon_TBA`);
    default:
      return ``;
  }
}
function Jd(e) {
  if (!e) return ``;
  if (e && e.is_coming_soon) {
    if (e.coming_soon_display) return Mt(e);
    if (e.custom_release_date_message) return e.custom_release_date_message;
    let t = e.steam_release_date;
    return t
      ? e.is_abridged_release_date
        ? Yn(new Date(t * 1e3))
        : ei(t)
      : ``;
  }
  let t = e.steam_release_date;
  return ((t ||= e.original_release_date), t ? ei(t) : ``);
}
function Yd(e, t = !1) {
  if (e.is_coming_soon && !t) return 0;
  let n = e.steam_release_date;
  return ((n ||= e.original_release_date), n);
}
var Xd = 7;
function Zd(e, t) {
  if (!e) return !1;
  let n = Yd(e);
  return n ? !e.is_coming_soon && n + Xd * sn.PerDay > t : !1;
}
function Qd(e, t) {
  return !!(e && e.is_coming_soon && t && t.packageid);
}
var $d = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.context || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            context: { n: 2, c: lr },
            data_request: { n: 3, c: Vt },
            gift_info: { n: 4, c: ye },
            gidshoppingcart: {
              n: 1,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            gidreplayoftransid: {
              n: 5,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            for_init_purchase: { n: 6, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Request`;
    }
  },
  ef = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_items || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_items: { n: 1, c: tf, r: !0, q: !0 },
            estimated_totals: { n: 5, c: of },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response`;
    }
  },
  tf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            item_id: { n: 2, c: _t },
            store_item: { n: 3, c: Xt },
            gift_info: { n: 4, c: ye },
            errors: { n: 5, c: nf },
            warnings: { n: 6, c: rf },
            subtotal: { n: 7, c: xe },
            price_when_added: { n: 8, c: xe },
            original_price: { n: 9, c: xe },
            coupon_applied: { n: 10, c: Ce },
            coupon_discount: { n: 11, c: xe },
            can_purchase_as_gift: { n: 12, br: O.readBool, bw: E.writeBool },
            restrict_add_additional_to_cart: {
              n: 13,
              br: O.readBool,
              bw: E.writeBool,
            },
            quantity: { n: 14, br: O.readUint32, bw: E.writeUint32 },
            included_packageids: {
              n: 15,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem`;
    }
  },
  nf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || B(e.M()),
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
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            duplicate_appids_in_cart: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            unavailable_in_country: { n: 3, br: O.readBool, bw: E.writeBool },
            invalid_coupon: { n: 4, br: O.readBool, bw: E.writeBool },
            invalid_coupon_for_item: { n: 5, br: O.readBool, bw: E.writeBool },
            coupon_exclusive_promo: { n: 6, br: O.readBool, bw: E.writeBool },
            cannot_purchase_as_gift: { n: 7, br: O.readBool, bw: E.writeBool },
            invalid_item: { n: 8, br: O.readBool, bw: E.writeBool },
            too_many_in_cart: { n: 9, br: O.readBool, bw: E.writeBool },
            has_existing_billing_agreement: {
              n: 10,
              br: O.readBool,
              bw: E.writeBool,
            },
            missing_must_own_appids: {
              n: 11,
              r: !0,
              q: !0,
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            adult_content_restricted: {
              n: 12,
              br: O.readBool,
              bw: E.writeBool,
            },
            commercial_license_restricted: {
              n: 13,
              br: O.readBool,
              bw: E.writeBool,
            },
            gift_not_valid_for_recipient_region: {
              n: 14,
              br: O.readBool,
              bw: E.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Errors`;
    }
  },
  rf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.owned_appids || B(e.M()),
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
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            owned_appids_extra_copy: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readInt32,
              pbr: O.readPackedInt32,
              bw: E.writeRepeatedInt32,
            },
            appids_in_mastersub: { n: 3, c: af, r: !0, q: !0 },
            price_has_changed: { n: 4, br: O.readBool, bw: E.writeBool },
            non_refundable: { n: 5, br: O.readBool, bw: E.writeBool },
            gift_recipient_higher_price: {
              n: 6,
              br: O.readBool,
              bw: E.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings`;
    }
  },
  af = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart_appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cart_appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            mastersub_appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub`;
    }
  },
  of = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.subtotal || B(e.M()),
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
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_ValidateCart_Response_EstimatedTotals`;
    }
  },
  sf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_ids || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { item_ids: { n: 1, c: _t, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Request`;
    }
  },
  cf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ownership_info || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ownership_info: { n: 1, c: uf, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response`;
    }
  },
  lf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accountid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            already_owns: { n: 2, br: O.readBool, bw: E.writeBool },
            wishes_for: { n: 3, br: O.readBool, bw: E.writeBool },
            partial_owns_appids: {
              n: 4,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            partial_wishes_for: {
              n: 5,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership`;
    }
  },
  uf = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            item_id: { n: 1, c: _t },
            friend_ownership: { n: 2, c: lf, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo`;
    }
  },
  df = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.item_id || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { item_id: { n: 1, c: _t } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Request`;
    }
  },
  ff = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageids_added || B(e.M()),
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
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            appids_added: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            purchase_result_detail: {
              n: 3,
              br: O.readUint32,
              bw: E.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCheckout_AddFreeLicense_Response`;
    }
  },
  pf;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Checkout.ValidateCart#1`, U($d, t, n), ef, {
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
      U(sf, t, n),
      cf,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetFriendOwnershipForGifting = n;
  function r(e, t, n) {
    return e.SendMsg(`Checkout.AddFreeLicense#1`, U(df, t, n), ff, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddFreeLicense = r;
})((pf ||= {}));
function mf(e) {
  let t = x(),
    n = W.accountid;
  return K.useCallback(
    (r) => {
      t.setQueryData(hf(n), (t) =>
        t ? new Set([...t.values(), ...r]) : e ? new Set(r) : void 0,
      );
    },
    [t, n, e],
  );
}
function hf(e) {
  return [`AccountOwnedPackages`, e ?? 0];
}
function gf(e) {
  let t = On(),
    n = ro(),
    r = mf();
  return l({
    mutationFn: () => _f(t, e),
    onSuccess(e) {
      let [
        t,
        { packageids_added: i, appids_added: a, purchase_result_detail: o },
      ] = e;
      (a && n(a), i && r(i));
    },
  });
}
async function _f(e, t) {
  let n = yr.Init(df);
  n.Body().set_item_id(_t.fromObject(t));
  let r = await pf.AddFreeLicense(e, n);
  return [r.GetEResult(), r.Body().toObject()];
}
var vf = K.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
    bSteamMachine: !1,
    bSteamFrame: !1,
  }),
  yf = () => K.useContext(vf);
function bf() {
  let {
    bForceShowCompatInfo: e,
    bSteamDeck: t,
    bSteamOS: n,
    bSteamMachine: r,
    bSteamFrame: i,
  } = yf();
  return (n && t) || e || Nn()?.FORCED_DISPLAY_MODE == `steamdeck`
    ? [!0, 1]
    : (n && r) || Nn()?.FORCED_DISPLAY_MODE == `steammachine`
      ? [!0, 3]
      : n && i
        ? [!0, 4]
        : n
          ? [!0, 2]
          : [!1, 0];
}
function xf(e) {
  let { id: t, eHWCompat: n, className: r } = e,
    { data: i } = kt(t);
  if (!i) return null;
  switch (n) {
    case 1:
      return (0, q.jsx)(Sf, {
        category: i.steam_deck_compat_category,
        className: r,
      });
    case 4:
      return (0, q.jsx)(wf, {
        category: i.steam_frame_compat_category,
        className: r,
      });
    case 3:
      return (0, q.jsx)(Cf, {
        category: i.steam_machine_compat_category,
        className: r,
      });
    case 2:
      return (0, q.jsx)(Tf, {
        category: i.steam_os_compat_category,
        className: r,
      });
    default:
      return null;
  }
}
var Sf = (e) => {
    let { category: t = 0, className: n } = e,
      r = kf(t);
    return (0, q.jsxs)(`div`, {
      className: M(Wr, n),
      children: [(0, q.jsx)(st, {}), (0, q.jsx)(r, { className: jn })],
    });
  },
  Cf = (e) => {
    let { category: t = 0, className: n } = e,
      r = kf(t);
    return (0, q.jsxs)(`div`, {
      className: M(Wr, n),
      children: [(0, q.jsx)(cr, {}), (0, q.jsx)(r, { className: jn })],
    });
  },
  wf = (e) => {
    let { category: t = 0, className: n } = e,
      r = kf(t);
    return (0, q.jsxs)(`div`, {
      className: M(Wr, n),
      children: [(0, q.jsx)(fr, {}), (0, q.jsx)(r, { className: jn })],
    });
  },
  Tf = (e) => {
    let { category: t = 0, elControllerSupport: n } = e,
      r = Af(t);
    return (0, q.jsxs)(`div`, {
      className: M(Wr, e.className),
      children: [n, (0, q.jsx)(r, { className: jn })],
    });
  };
function Ef(e) {
  let { eDisplay: t, storeItemPlatform: n, className: r } = e;
  return t == 1
    ? (0, q.jsx)(Sf, {
        category: n?.steam_deck_compat_category ?? 0,
        className: r,
      })
    : t == 3
      ? (0, q.jsx)(Cf, {
          category: n?.steam_machine_compat_category ?? 0,
          className: r,
        })
      : t == 2
        ? (0, q.jsx)(Tf, {
            category: n?.steam_os_compat_category ?? 0,
            className: r,
          })
        : t == 4
          ? (0, q.jsx)(wf, {
              category: n?.steam_frame_compat_category ?? 0,
              className: r,
            })
          : null;
}
var Df = { 1: mt, 2: Gr, 3: dt, 0: ln },
  Of = { 0: ln, 1: mt, 2: Ut };
function kf(e) {
  return Df[e] || ln;
}
function Af(e) {
  return Of[e] || ln;
}
var jf = `x33TRfA9NLE-`,
  Mf = `UWpi28gEMso-`,
  Nf = `K2BGbCx37Cg-`,
  Pf = `wnVw5QEjvtw-`,
  Ff = `-a-3HG4gESE-`,
  If = `-OQDE-IeSKo-`,
  Lf = `iVqIvGU08cQ-`,
  Rf = `vO3l7X14-dI-`,
  zf = `n1QMIymiV0w-`,
  Bf = `ebRw2SGSkSY-`,
  Vf = `qN5ejX3iSmI-`,
  Hf = `_7Xd-p6v3h-U-`,
  Uf = `_6uN5TDmIPak-`,
  Wf = `_4UX-whX3nGs-`,
  Gf = `f0EapRMh-PI-`,
  Kf = `q4JwMxF0b-8-`,
  qf = `otywAXtYosA-`;
function Jf(e) {
  let { id: t, ...n } = e,
    { data: r } = kt(t);
  return (0, q.jsx)(Yf, { ...n, platforms: r });
}
K.memo(function (e) {
  let { platforms: t } = e;
  if (!t) return null;
  let { windows: n, mac: r, steamos_linux: i, vr_support: a } = t;
  return (0, q.jsxs)(`span`, {
    className: Ff,
    children: [
      n && (0, q.jsx)(Xf, {}),
      r && (0, q.jsx)(Zf, {}),
      i && (0, q.jsx)(Qf, {}),
      a?.vrhmd && (0, q.jsx)($f, {}),
    ],
  });
});
var Yf = K.memo(function (e) {
  let { platforms: t, eHWCompat: n, size: r = `small` } = e,
    i;
  if (n == 0)
    return (
      et(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (n == 2) {
    let e = t?.steam_os_compat_category;
    if (e === void 0) return null;
    switch (e) {
      case 2:
        i = dp;
        break;
      case 1:
        i = lp;
        break;
      case 0:
        i = up;
        break;
      default:
        return (Hn(e, `Unhandled steam os category: ${e}`), null);
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
        i = sp;
        break;
      case 2:
        i = cp;
        break;
      case 1:
        i = lp;
        break;
      case 0:
        i = up;
        break;
      default:
        return (Hn(e, `Unhandled deck compat category: ${e}`), null);
    }
  }
  return (0, q.jsxs)(`span`, {
    className: (0, Cl.default)(
      Bf,
      r == `small` && void 0,
      r == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      n == 1 && (0, q.jsx)(ip, {}),
      n == 3 && (0, q.jsx)(ap, {}),
      n == 4 && (0, q.jsx)(op, {}),
      (0, q.jsx)(i, {}),
    ],
  });
});
function Xf() {
  return (0, q.jsx)(`span`, {
    className: (0, Cl.default)(If, Lf),
    title: P.Localize(`#Platform_Windows`),
    children: (0, q.jsx)(ep, {}),
  });
}
function Zf() {
  return (0, q.jsx)(`span`, {
    className: (0, Cl.default)(If, zf),
    title: P.Localize(`#Platform_Mac`),
    children: (0, q.jsx)(tp, {}),
  });
}
function Qf() {
  return (0, q.jsx)(`span`, {
    className: (0, Cl.default)(If, Rf),
    title: P.Localize(`#Platform_Linux`),
    children: (0, q.jsx)(np, {}),
  });
}
function $f() {
  return (0, q.jsx)(`span`, {
    className: If,
    title: P.Localize(`#Platform_VR`),
    children: (0, q.jsx)(rp, {}),
  });
}
function ep() {
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
function tp() {
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
function np() {
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
function rp() {
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
function ip() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, Cl.default)(Vf),
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
function ap() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, Cl.default)(Vf),
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
function op() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, Cl.default)(Vf),
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
function sp() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamDeckVerified_Category_Verified`),
    className: Hf,
    children: (0, q.jsx)(`svg`, {
      className: (0, Cl.default)(Uf),
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
function cp() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamDeckVerified_Category_Playable`),
    className: Hf,
    children: (0, q.jsx)(`svg`, {
      className: (0, Cl.default)(Wf),
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
function lp() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: Hf,
    children: (0, q.jsx)(`svg`, {
      className: (0, Cl.default)(Gf),
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
function up() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: Hf,
    children: (0, q.jsx)(`svg`, {
      className: (0, Cl.default)(Kf),
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
function dp() {
  return (0, q.jsx)(`span`, {
    title: P.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: Hf,
    children: (0, q.jsx)(`svg`, {
      className: (0, Cl.default)(qf),
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
function fp(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !Nt() && !t ? null : (0, q.jsx)(pp, { ...e });
}
function pp(e) {
  let { className: t, id: n } = e,
    [r, i] = bf(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = Pf),
    (0, q.jsx)(`div`, {
      className: M(Nf, o, t),
      children: (0, q.jsx)(Jf, { id: n, eHWCompat: a }),
    })
  );
}
var mp = `PFP2RDjCi0w-`,
  hp = `Cbfoq6WaXq4-`,
  gp = `_4lcICEhYuQw-`,
  _p = `unoV6P6DXbM-`,
  vp = `p8d03I0RAAs-`,
  yp = `brHZRAeRCnw-`,
  bp = `hATzo-Hjaaw-`,
  xp = `_7vEy4qHpqHo-`,
  Sp = `KoUJweWUwjY-`,
  Cp = `XAGO1LWGig0-`,
  wp = `uN9-XHR7odQ-`,
  Tp = `CnbkzZzYDxs-`,
  Ep = `_8UjVVV-S-j8-`,
  Dp = `k0yt-Gxhbs4-`,
  Op = `io6uTUtzW-A-`,
  kp = `_58-zzK2uRws-`,
  Ap = `mGygcOFcFcQ-`,
  jp = `mW8gl4NPYGg-`,
  Mp = `X9907eDQcow-`,
  Np = `GwjmtMACpAo-`,
  Pp = `S8JsHzHuIMA-`,
  Fp = `_4nNWbL6J2cI-`,
  Ip = `Djw7Ta0NL0Q-`,
  Lp = `u-mW6oZelJ4-`,
  Rp = `j0BUhYRjGwM-`,
  zp = `I-L7P5K0HUM-`,
  Bp = `VYzpavMEA5M-`,
  Vp = `iXn31HpcmTo-`;
function Hp(e) {
  let { id: t, bTruncateTotalReviews: n, bShowTooltip: r } = e,
    { data: i } = Zt(t),
    { data: a } = V(t),
    o = mc(t),
    { data: s } = V(o),
    { data: c } = Ba();
  if (!i || !a || (a.type == 1 && !El(s))) return null;
  let l = i.summary_unfiltered || i.summary_filtered,
    u = `#ReviewScore_UserReviewScoreAria`,
    d = !1,
    f = P.Localize(`#Language_` + L.LANGUAGE);
  if (
    (Up(c?.preferences?.review_score_preference) &&
      (i.summary_language_specific
        ? ((d = !0),
          (u = `#ReviewScore_UserReviewScoreAria_LanguageSpecific`),
          (l = i.summary_language_specific))
        : (l = i.summary_filtered)),
    !l || !l.review_score)
  )
    return null;
  let p = Ip;
  p =
    l.review_score > 0 && l.review_score < 5
      ? Lp
      : l.review_score == 5
        ? Rp
        : zp;
  let m = `${L.STORE_BASE_URL}app/${a.appid}/#app_reviews_hash`,
    h = (0, q.jsxs)(`div`, {
      className: M(Fp, p),
      children: [
        (0, q.jsx)(`div`, {
          className: Bp,
          "aria-label": P.Localize(u, l.review_score_label, f),
          children: l.review_score_label,
        }),
        (0, q.jsxs)(`div`, {
          className: Pp,
          "aria-label": P.Localize(
            `#GameHover_UserReviewCount`,
            l.review_count.toLocaleString(qr()),
          ),
          children: [
            `(`,
            n
              ? `(` + l.review_count.toLocaleString(qr()) + `)`
              : d
                ? P.Localize(
                    `#GameHover_UserReviewCount_Lang`,
                    l.review_count.toLocaleString(qr()),
                    f,
                  )
                : P.Localize(
                    `#GameHover_UserReviewCount`,
                    l.review_count.toLocaleString(qr()),
                  ),
            `)`,
          ],
        }),
        !n &&
          (0, q.jsxs)(`div`, {
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
  return (0, q.jsx)(QE, {
    url: m,
    className: M(Np, `ReviewScore`),
    children:
      r && l.percent_positive != null && l.review_count != null && g
        ? (0, q.jsx)(An, {
            bTopmost: !0,
            toolTipContent: P.Localize(g, l.percent_positive, l.review_count),
            children: h,
          })
        : h,
  });
}
function Up(e) {
  return e === void 0 || e === 0 || e === 2;
}
async function Wp(e, t) {
  let n = Ya(I.STORE_BASE_URL, t, $n.country_code);
  return (await (await fetch(n)).json()).rgWishlist || [];
}
function Gp() {
  let e = On(),
    t = W.accountid;
  return f(Kp(e, t));
}
function Kp(e, t) {
  return {
    queryKey: Yp(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await Wp(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function qp(e) {
  let { data: t } = Gp();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function Jp() {
  let e = x(),
    t = W.accountid;
  return (n, r) => {
    e.setQueryData(Yp(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function Yp(e) {
  return [`AccountWishlistApps`, e ?? 0];
}
function Xp(e, t, n) {
  let r = Jp(),
    i = $n.accountid;
  return l({
    mutationKey: [`useUpdateWishlist`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r =
          I.STORE_BASE_URL +
          `api/` +
          (t ? `addtowishlist` : `removefromwishlist`),
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, gr()),
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
      Xa();
    },
  });
}
function Zp(e) {
  let {
      id: t,
      snr: n,
      classOverride: r,
      styleOverride: i,
      bShowInGamepadUI: a,
    } = e,
    { data: o } = V(t),
    { elDialogElement: s, fnShowLogonDialog: c } = iy(),
    [l, u] = (0, K.useState)(() => {
      if (o && (o.type == 1 || o.type == 12) && o.related_items?.parent_appid)
        return o.related_items?.parent_appid;
      if (t && `appid` in t) return t.appid;
    }),
    d = hc(l),
    f = qp(l),
    { bIsOwned: p } = ao(d),
    [m, h] = (0, K.useState)(!1),
    g = je(`GameHoverWishlistButton`),
    { mutateAsync: _ } = Xp(l, !f, n);
  (0, K.useEffect)(() => {
    t &&
      `appid` in t &&
      (o?.type == 1 || o?.type == 12) &&
      u(o.related_items?.parent_appid || t.appid);
  }, [o, t]);
  let v = (0, K.useCallback)(
    async (e) => {
      $n.logged_in
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
    : (0, q.jsxs)(Jr, {
        className: M(Sp, a && `B7tWNVp-vns-`, r),
        onActivate: v,
        style: i,
        children: [
          f ? (0, q.jsx)(Hr, {}) : (0, q.jsx)(Vn, {}),
          (0, q.jsx)(`div`, {
            className: M(Cp, m && `u8yceEMO9LM-`, `WishlistButtonText`),
            children: P.Localize(
              f ? `#Sale_RemoveFromWishlist` : `#Sale_AddToWishlist`,
            ),
          }),
          s,
        ],
      });
}
var Qp = class e {
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
      let n = { nAppID: e, l: I.LANGUAGE, cc: I.COUNTRY },
        r = I.STORE_BASE_URL + `saleaction/ajaxgetdeckappcompatibilityreport`,
        i = await Sl.default.get(r, { params: n, withCredentials: !0 });
      if (i?.status == 200 && i.data?.success == 1 && i.data?.results)
        return (this.AddCompatabilityResult(i.data.results), !0);
      t = ti(i);
    } catch (e) {
      t = ti(e);
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
      let t = Br(`hardwarecompatibility`, `application_config`);
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
z([j], Qp.prototype, `LoadAppCompabitilityResult`, null);
function $p(e) {
  let [t, n] = K.useState(Qp.Get().GetCompatabilityResultForApp(e));
  return (
    Rr(Qp.Get().GetCallbackForAppList(e), n),
    K.useEffect(() => {
      Qp.Get().BHasCompatabilityResultForApp(e) ||
        Qp.Get()
          .LoadAppCompabitilityResult(e)
          .then(() => n(Qp.Get().GetCompatabilityResultForApp(e)));
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
function em(e) {
  switch (e) {
    case D.OK:
      return 0;
    case D.CANCEL:
      return 1;
    case D.SECONDARY:
      return 2;
    case D.OPTIONS:
      return 3;
    case D.DIR_LEFT:
      return 4;
    case D.DIR_RIGHT:
      return 5;
    case D.DIR_UP:
      return 6;
    case D.DIR_DOWN:
      return 7;
    case D.STEAM_GUIDE:
      return 8;
    case D.STEAM_QUICK_MENU:
      return 9;
    case D.SELECT:
      return 10;
    case D.START:
      return 11;
    case D.BUMPER_LEFT:
      return 12;
    case D.BUMPER_RIGHT:
      return 13;
    case D.TRIGGER_LEFT:
      return 14;
    case D.TRIGGER_RIGHT:
      return 15;
    case D.REAR_LEFT_UPPER:
      return 24;
    case D.REAR_LEFT_LOWER:
      return 25;
    case D.REAR_RIGHT_UPPER:
      return 26;
    case D.REAR_RIGHT_LOWER:
      return 27;
    default:
      return 0;
  }
}
var tm = class e {
  m_boundActions = new Map();
  m_defaultActions = new Map();
  m_globalActionsSubscriptions = [];
  m_actionDescriptionChangedCallbackRegistrations = [];
  static Log = new Nr(`ActionDescription`).Debug;
  m_nodeForCurrentDescriptions;
  InitContext(e) {
    let t = new lt();
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
    } else this.SetActionDescriptionsFromMap({ [D.OK]: null });
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
        i = em(r);
      t[i] = e[r];
    }
    this.SetActionsFromMap(t);
  }
  SetAction(t, n) {
    if ((e.Log(`SetActionDescription`, t, n), n === void 0)) {
      if (!this.m_boundActions.has(t)) return !1;
      this.m_boundActions.delete(t);
    } else {
      if (Ct(this.m_boundActions.get(t), n)) return !1;
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
(z([j], tm.prototype, `OnFocusNavigationChanged`, null),
  z([j], tm.prototype, `OnActiveNavTreeChanged`, null),
  z([j], tm.prototype, `SetActionDescriptionsFromMap`, null));
var nm = `_6t-T9facds8-`,
  rm = `_9ltdnbqRBVs-`,
  im = `KMiaP3xxJic-`,
  am = `-f6--J8iYK8-`,
  om = `tlFgqgPT5b8-`,
  sm = `LR3Stix-A4Y-`,
  cm = `zxsM3zpa9JU-`,
  lm = `c3ZsONtZeOk-`,
  um = `uboNutS5k7k-`,
  dm = `_31u9Wgg0oro-`,
  fm = `m9cG66kvPgg-`,
  pm = `WGUFkBLPn8E-`,
  mm = `WFe7p-8r4T4-`,
  hm = `_5sgfQl5H11I-`,
  gm = `ifxfOQVR6MY-`,
  _m = `nPQe387f344-`,
  vm = `Z8zypUObkYE-`,
  ym = `_1GTC22hSCmY-`,
  bm = `toY0I97PWjg-`,
  xm = `_1ArCdbgfzNY-`,
  Sm = `IBiSpw0atyM-`,
  Cm = `mDOopKELMBg-`,
  wm = `C8-HMz-fVag-`,
  Tm = `lDDPCoGwJAU-`,
  Em = `ZAn1-qmM-Iw-`,
  Dm = `dNQ1ofH4Cbs-`,
  Om = `rmDLW23h1zQ-`,
  km = `CT05Js5REus-`,
  Am = `CAlqxCfPEko-`,
  jm = `hH8fUDD712k-`,
  Mm = `c1DR5MyoXPo-`,
  Nm = `KnF9XvfALGs-`,
  Pm = `voFKnm6BHlI-`,
  Fm = `XRBn-My-JYo-`,
  Im = `MnMGQkxU8KU-`,
  Lm = `BPpr5dZdGc4-`,
  Y = `QeQ6K92V-ik-`,
  X = `jlNNNIYiAYQ-`,
  Rm = `dXUGCsJI9Qw-`,
  zm = `N88ag1lENrA-`,
  Bm = `-m9XoDI2d0Q-`,
  Vm = `IulAmRs78UQ-`,
  Hm = `X86r8MkR480-`,
  Um = (function (e) {
    return (
      (e[(e.Knockout = 0)] = `Knockout`),
      (e[(e.Light = 1)] = `Light`),
      (e[(e.Dark = 2)] = `Dark`),
      e
    );
  })({}),
  Wm = (function (e) {
    return (
      (e[(e.Small = 0)] = `Small`),
      (e[(e.Medium = 1)] = `Medium`),
      (e[(e.Large = 2)] = `Large`),
      e
    );
  })({});
function Gm(e) {
  switch (e) {
    case 0:
      return Bm;
    case 1:
      return Vm;
    case 2:
      return Hm;
    default:
      return Vm;
  }
}
function Km(e) {
  switch (e) {
    case 0:
      return zm;
    case 1:
      return Rm;
    case 2:
      return Lm;
    default:
      return Rm;
  }
}
function qm(e) {
  let t = M(
      e.size == null ? Gm(1) : Gm(e.size),
      e.type == null ? Km(1) : Km(e.type),
      e.additionalClassName,
    ),
    n = e.type == 0;
  switch (e.button) {
    case J.A:
      return (0, q.jsx)(Jm, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_A`),
      });
    case J.B:
      return (0, q.jsx)(Ym, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_B`),
      });
    case J.X:
      return (0, q.jsx)(Xm, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_X`),
      });
    case J.Y:
      return (0, q.jsx)(Zm, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_Y`),
      });
    case J.Left:
      return (0, q.jsx)(eh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_DpadLeft`),
      });
    case J.Right:
      return (0, q.jsx)(th, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_DpadRight`),
      });
    case J.Up:
      return (0, q.jsx)(Qm, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_DpadUp`),
      });
    case J.Down:
      return (0, q.jsx)($m, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_DpadDown`),
      });
    case J.HomeMenu:
      return (0, q.jsx)(nh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_Steam`),
      });
    case J.QuickMenu:
      return (0, q.jsx)(rh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_QAM`),
      });
    case J.Select:
      return (0, q.jsx)(ih, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_View`),
      });
    case J.Start:
      return (0, q.jsx)(ah, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_Menu`),
      });
    case J.LeftBumper:
      return (0, q.jsx)(oh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_L1`),
      });
    case J.RightBumper:
      return (0, q.jsx)(sh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_R1`),
      });
    case J.LeftTrigger:
      return (0, q.jsx)(ch, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_L2`),
      });
    case J.RightTrigger:
      return (0, q.jsx)(lh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_R2`),
      });
    case J.LeftStick:
      return (0, q.jsx)(ph, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_LS`),
      });
    case J.RightStick:
      return (0, q.jsx)(fh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_RS`),
      });
    case J.LeftStickClick:
      return (0, q.jsx)(uh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_L3`),
      });
    case J.RightStickClick:
      return (0, q.jsx)(dh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_R3`),
      });
    case J.LeftTrackpad:
      return (0, q.jsx)(vh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_LPad`),
      });
    case J.RightTrackpad:
      return (0, q.jsx)(bh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_RPad`),
      });
    case J.LeftTrackpadClick:
      return (0, q.jsx)(yh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_LPad_Click`),
      });
    case J.RightTrackpadClick:
      return (0, q.jsx)(xh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_RPad_Click`),
      });
    case J.RearLeftUpper:
      return (0, q.jsx)(mh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_L4`),
      });
    case J.RearRightUpper:
      return (0, q.jsx)(gh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_R4`),
      });
    case J.RearLeftLower:
      return (0, q.jsx)(hh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_L5`),
      });
    case J.RearRightLower:
      return (0, q.jsx)(_h, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_R5`),
      });
    default:
      return (0, q.jsx)(Sh, {
        bIsKnockout: n,
        className: t,
        "aria-label": F(`#ControllerButton_Default`),
      });
  }
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
function Ym({ bIsKnockout: e, ...t }) {
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
function Xm({ bIsKnockout: e, ...t }) {
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
function Zm({ bIsKnockout: e, ...t }) {
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
function Qm({ bIsKnockout: e, ...t }) {
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
function $m({ bIsKnockout: e, ...t }) {
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
function eh({ bIsKnockout: e, ...t }) {
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
function th({ bIsKnockout: e, ...t }) {
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
function nh({ bIsKnockout: e, ...t }) {
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
function rh({ bIsKnockout: e, ...t }) {
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
function ih({ bIsKnockout: e, ...t }) {
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
function ah({ bIsKnockout: e, ...t }) {
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
function oh({ bIsKnockout: e, ...t }) {
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
function sh({ bIsKnockout: e, ...t }) {
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
function ch({ bIsKnockout: e, ...t }) {
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
function lh({ bIsKnockout: e, ...t }) {
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
function uh({ bIsKnockout: e, ...t }) {
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
function dh({ bIsKnockout: e, ...t }) {
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
function fh({ bIsKnockout: e, ...t }) {
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
function ph({ bIsKnockout: e, ...t }) {
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
function mh({ bIsKnockout: e, ...t }) {
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
function hh({ bIsKnockout: e, ...t }) {
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
function gh({ bIsKnockout: e, ...t }) {
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
function _h({ bIsKnockout: e, ...t }) {
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
function vh({ bIsKnockout: e, ...t }) {
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
function yh({ bIsKnockout: e, ...t }) {
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
function bh({ bIsKnockout: e, ...t }) {
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
function xh({ bIsKnockout: e, ...t }) {
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
function Sh({ bIsKnockout: e, ...t }) {
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
var Ch = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Request`;
    }
  },
  wh = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.frame_rates || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { frame_rates: { n: 1, c: Th, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response`;
    }
  },
  Th = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clusterid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            report_days: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            report_count: {
              n: 5,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            mean_frame_rate: { n: 6, br: O.readDouble, bw: E.writeDouble },
            frame_rate_histogram: {
              n: 8,
              r: !0,
              q: !0,
              br: O.readDouble,
              pbr: O.readPackedDouble,
              bw: E.writeRepeatedDouble,
            },
            histogram_report_count: {
              n: 9,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            last_updated: { n: 10, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate`;
    }
  },
  Eh;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `GamePerformanceStats.GetGameFrameRateStats#1`,
      U(Ch, t, n),
      wh,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`, `store`, `community`],
      },
    );
  }
  e.GetGameFrameRateStats = t;
})((Eh ||= {}));
function Dh(e) {
  let t = On(),
    { data: n } = f({
      queryKey: [`performancestats_` + e],
      queryFn: async () => {
        if (!e) return null;
        let n = yr.Init(Ch);
        n.Body().set_appid(e);
        let r = await Eh.GetGameFrameRateStats(t, n);
        return r.BSuccess() ? r.Body().toObject() : null;
      },
    });
  return n ?? void 0;
}
function Oh(e, t = !0) {
  return f({
    queryKey: [`GetControllersUsed`],
    queryFn: async () => {
      let e;
      try {
        let t = `${I.STORE_BASE_URL}account/ajaxgetcontrollersused`,
          n = await Sl.default.get(t, { withCredentials: !0 });
        if (n?.status === 200 && n?.data?.success === 1) return n.data.data;
        e = ti(n);
      } catch (t) {
        e = ti(t);
      }
      return (console.error(`usePlayerHardwareUsed failed:`, e), null);
    },
    select: e,
    enabled: t && !!$n.accountid,
  });
}
var kh = [`axis`, `item`],
  Ah = (0, K.forwardRef)((e, t) =>
    K.createElement(Ie, {
      chartName: `BarChart`,
      defaultTooltipEventType: `axis`,
      validateTooltipEventTypes: kh,
      tooltipPayloadSearcher: Ne,
      categoricalChartProps: e,
      ref: t,
    }),
  ),
  jh = `nK2pFw6yu3o-`,
  Mh = `nzXI4r-KhTY-`,
  Nh = `iKEtAveWi-8-`,
  Ph = `ZXpki9wJyL0-`,
  Fh = 5;
function Ih({ active: e, payload: t }) {
  if (!e || !t?.length) return null;
  let n = t[0].payload;
  return (0, q.jsx)(`div`, {
    className: Ph,
    children: `${P.Localize(`#GamePerformanceStats_FPS`, n.framerate ?? 0)}: ${n.percentage ?? 0}%`,
  });
}
function Lh(e) {
  let { histogram: t, className: n, minWidth: r = 400, minHeight: i = 300 } = e,
    a = K.useMemo(() => {
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
          n.push({ framerate: t * Fh, percentage: Math.round(e) });
        }),
        n.sort((e, t) => e.framerate - t.framerate)
      );
    }, [t]);
  return a?.length
    ? (0, q.jsxs)(`div`, {
        className: M(jh, n),
        children: [
          (0, q.jsx)(`div`, {
            className: Mh,
            children: P.Localize(`#GamePerformanceStats_SessionLabel`),
          }),
          (0, q.jsx)(Pe, {
            width: `100%`,
            minWidth: r,
            minHeight: i,
            children: (0, q.jsxs)(Ah, {
              accessibilityLayer: !1,
              margin: { top: 35, left: 0, right: 0, bottom: 25 },
              data: a,
              children: [
                (0, q.jsx)(Fe, {
                  stroke: `#888`,
                  strokeWidth: `0.5`,
                  vertical: !1,
                }),
                (0, q.jsx)(He, {
                  dataKey: `framerate`,
                  stroke: `white`,
                  label: {
                    value: P.Localize(`#GamePerformanceStats_Framerate`),
                    position: `bottom`,
                    fill: `#A9A9A9`,
                    fontSize: 14,
                  },
                }),
                (0, q.jsx)(Be, {
                  stroke: `white`,
                  domain: [() => 0, (e) => Math.max(e, 100)],
                }),
                (0, q.jsx)(Le, {
                  content: Ih,
                  cursor: !1,
                  isAnimationActive: !1,
                }),
                (0, q.jsx)(Re, {
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
    : (0, q.jsx)(`div`, {
        className: M(jh, n),
        children: (0, q.jsx)(`div`, {
          className: Nh,
          children: P.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      });
}
function Rh(e) {
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
      (f = (0, q.jsx)(Gh, {
        blogURL: t.steam_deck_blog_url,
        eHWCompatibiltyDisplay: 1,
      })),
      (p = (0, q.jsx)(Gh, {
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
      l = (0, q.jsx)(eg, { category: t.resolved_category });
    return (
      c == 3
        ? ((e = P.Localize(
            `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
          )),
          (s = (0, q.jsx)(ig, {
            id: r,
            category: t.machine_resolved_category,
            appName: i,
          })),
          (l = (0, q.jsx)(eg, { category: t.machine_resolved_category })))
        : c == 2
          ? ((e = P.Localize(
              `#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI`,
            )),
            (s = (0, q.jsx)(rg, {
              id: r,
              category: t.steamos_resolved_category,
              appName: i,
            })),
            (l = (0, q.jsx)(tg, { category: t.steamos_resolved_category })),
            (a = p))
          : c == 4
            ? ((e = P.Localize(
                `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, q.jsx)(ag, {
                id: r,
                category: t.frame_resolved_category,
                appName: i,
              })),
              (l = (0, q.jsx)(eg, { category: t.frame_resolved_category })))
            : ((e = P.Localize(
                `#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`,
              )),
              (s = (0, q.jsx)(ng, {
                category: t.resolved_category,
                appName: i,
              })),
              (a = f)),
      (0, q.jsx)(zh, {
        children: (0, q.jsxs)(Jr, {
          autoFocus: o,
          focusableIfEmpty: o,
          noFocusRing: !0,
          className: lm,
          ...d,
          children: [
            (0, q.jsxs)(`div`, {
              id: n,
              className: om,
              children: [
                (0, q.jsx)(`div`, { className: sm, children: e }),
                (0, q.jsx)(`div`, { className: cm, children: l }),
              ],
            }),
            s,
            a,
            (0, q.jsx)(Xh, { appid: t.appid, appName: i }),
          ],
        }),
      })
    );
  }
  let m = kf(t.resolved_category),
    h = Af(t.steamos_resolved_category),
    g = kf(t.machine_resolved_category),
    _ = kf(t.frame_resolved_category || 0);
  if (!l) {
    let t = null;
    switch (c) {
      case 3:
        t = (0, q.jsx)(Uh, { ...e });
        break;
      case 2:
      case 5:
        t = (0, q.jsx)(Vh, { ...e, deckBlogContent: p });
        break;
      case 4:
        t = (0, q.jsx)(Wh, { ...e });
        break;
      default:
        t = (0, q.jsx)(Hh, { ...e, deckBlogContent: f });
    }
    return (0, q.jsx)(fn, { children: (0, q.jsx)(zh, { children: t }) });
  }
  let v = (e) =>
      window.sessionStorage.setItem(`steamdeckcompatibility`, `?tab=${e.key}`),
    y = [
      {
        name: (0, q.jsxs)(`div`, {
          className: Mm,
          children: [
            (0, q.jsx)(st, { className: Im }),
            (0, q.jsx)(m, { className: Nm }),
          ],
        }),
        key: `1`,
        contents: (0, q.jsx)(fn, {
          children: (0, q.jsx)(Hh, { ...e, deckBlogContent: f }),
        }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: Mm,
          children: [
            (0, q.jsx)(cr, { className: Pm }),
            (0, q.jsx)(g, { className: Nm }),
          ],
        }),
        key: `3`,
        contents: (0, q.jsx)(fn, { children: (0, q.jsx)(Uh, { ...e }) }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: Mm,
          children: [`steamos`, (0, q.jsx)(h, { className: Nm })],
        }),
        key: `2`,
        contents: (0, q.jsx)(fn, {
          children: (0, q.jsx)(Vh, { ...e, deckBlogContent: p }),
        }),
        onClick: v,
      },
      {
        name: (0, q.jsxs)(`div`, {
          className: Mm,
          children: [
            (0, q.jsx)(fr, { className: Fm }),
            (0, q.jsx)(_, { className: Nm }),
          ],
        }),
        key: `4`,
        contents: (0, q.jsx)(fn, { children: (0, q.jsx)(Wh, { ...e }) }),
        onClick: v,
      },
    ];
  return (0, q.jsx)(zh, {
    children: (0, q.jsx)(Me, {
      tabs: y,
      classNameCtn: Am,
      classNameTabContent: km,
      startingTab: c.toString(),
      preferredFocus: !0,
      bDisableRouting: !0,
      focusRingHasBorderRadius: !0,
    }),
  });
}
function zh(e) {
  let [t, n] = K.useState(!1),
    r = K.useRef(null),
    i = K.useCallback(() => {
      let e = r.current;
      e && n(e.scrollHeight > e.clientHeight);
    }, []),
    a = Kt(i);
  return (0, q.jsx)(Lt, {
    ref: r,
    className: vm,
    children: (0, q.jsx)(Jr, {
      ref: a,
      className: ym,
      focusableIfEmpty: t,
      noFocusRing: !0,
      children: e.children,
    }),
  });
}
function Bh(e) {
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
  return (0, q.jsxs)(Jr, {
    className: lm,
    ...l,
    children: [
      (0, q.jsxs)(`div`, {
        children: [
          (0, q.jsxs)(`div`, {
            id: t,
            className: om,
            children: [
              (0, q.jsx)(`div`, { className: sm, children: n }),
              (0, q.jsx)(`div`, { className: cm, children: a }),
            ],
          }),
          o,
        ],
      }),
      s,
      (0, q.jsx)(Jr, {
        autoFocus: r,
        focusableIfEmpty: r,
        noFocusRing: !0,
        children: c,
      }),
    ],
  });
}
function Vh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a =
      r.steamos_resolved_items &&
      r.steamos_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(rg, {
      id: n,
      category: r.steamos_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, q.jsx)(tg, { category: r.steamos_resolved_category }),
    c = r.steamos_resolved_items && r.steamos_resolved_items?.length > 0;
  return (0, q.jsx)(Bh, {
    titleId: t,
    title: P.Localize(
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
                    (0, q.jsx)(qh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: P.Localize(e.loc_token) }),
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
                      (0, q.jsx)(qh, { displaytype: e.display_type }),
                      (0, q.jsx)(`span`, { children: P.Localize(e.loc_token) }),
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
function Hh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(ng, { id: n, category: r.resolved_category, appName: i }),
    s = (0, q.jsx)(eg, { category: r.resolved_category }),
    c = r.resolved_items && r.resolved_items?.length > 0;
  return (0, q.jsx)(Bh, {
    titleId: t,
    title: P.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI`),
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
                    (0, q.jsx)(Kh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, {
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
                      children: P.Localize(e.loc_token),
                    }),
                  },
                  e.loc_token + e.display_type,
                ),
              ),
          }),
        (0, q.jsx)(Xh, { appid: r.appid, appName: i }),
      ],
    }),
  });
}
function Uh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.machine_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(ig, {
      id: n,
      category: r.machine_resolved_category,
      appName: i,
    }),
    s = (0, q.jsx)(eg, { category: r.machine_resolved_category }),
    c = r.machine_resolved_items && r.machine_resolved_items?.length > 0;
  return (0, q.jsx)(Bh, {
    titleId: t,
    title: P.Localize(
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
                    (0, q.jsx)(Kh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: P.Localize(e.loc_token) }),
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
function Wh(e) {
  let { titleId: t, descriptionId: n, results: r, appName: i } = e,
    a = r.frame_resolved_items?.findIndex((e) => e.display_type == 1) !== -1,
    o = (0, q.jsx)(ag, {
      id: n,
      category: r.frame_resolved_category ?? 0,
      appName: i,
    }),
    s = (0, q.jsx)(eg, { category: r.frame_resolved_category ?? 0 }),
    c = r.frame_resolved_items && r.frame_resolved_items?.length > 0;
  return (0, q.jsx)(Bh, {
    titleId: t,
    title: P.Localize(
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
                    (0, q.jsx)(Kh, { displaytype: e.display_type }),
                    (0, q.jsx)(`span`, { children: P.Localize(e.loc_token) }),
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
function Gh(e) {
  let { blogURL: t, eHWCompatibiltyDisplay: n } = e,
    r = Nt();
  if (!t) return null;
  if (r) {
    let e =
      n == 2
        ? P.Localize(`#SteamOS_DescriptionHeader_DeveloperBlog`)
        : P.Localize(`#SteamDeckVerified_DescriptionHeader_DeveloperBlog`);
    return (0, q.jsxs)(`div`, {
      className: xm,
      children: [
        e,
        (0, q.jsx)(`div`, {
          className: Om,
          children: (0, q.jsx)(qm, { button: J.Y, type: Um.Knockout }),
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
  return (0, q.jsxs)(`div`, {
    className: xm,
    children: [
      i,
      (0, q.jsx)(`a`, {
        href: t,
        className: nm,
        children: P.Localize(`#SteamDeckVerified_ViewDeveloperPost`),
      }),
    ],
  });
}
function Kh(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 4:
      return (0, q.jsx)(dt, { className: Dm });
    case 3:
      return (0, q.jsx)(Gr, { className: Dm });
    case 2:
      return (0, q.jsx)(mt, { className: Dm });
    case 0:
      return (0, q.jsx)(ln, { className: Dm });
    case 1:
      return null;
  }
}
function qh(e) {
  let { displaytype: t } = e;
  switch (t) {
    case 3:
      return (0, q.jsx)(Ut, { className: Dm });
    case 1:
      return (0, q.jsx)(Bt, { className: Dm });
    default:
      return null;
  }
}
function Jh(e) {
  let { histogram: t, deviceName: n, nFrameLimit: r, appName: i } = e,
    a = i
      ? P.Localize(`#GamePerformanceStats_FrameRateDistribution`, i, n)
      : P.Localize(`#GamePerformanceStats_FrameRateDistribution_ThisGame`, n);
  return (0, q.jsxs)(`div`, {
    className: hm,
    children: [
      (0, q.jsxs)(`div`, {
        children: [
          (0, q.jsx)(`div`, {
            className: gm,
            children: P.Localize(`#GamePerformanceStats_MoreInfoTitle`),
          }),
          (0, q.jsx)(`div`, { children: a }),
        ],
      }),
      (0, q.jsx)(Lh, { histogram: t, minWidth: 200, minHeight: 200 }),
      (0, q.jsx)(`div`, {
        className: gm,
        children: P.Localize(`#GamePerformanceStats_MoreDetailsTitle`),
      }),
      (0, q.jsxs)(`div`, {
        className: _m,
        children: [
          (0, q.jsx)(`div`, {
            children: P.Localize(
              `#GamePerformanceStats_MoreDetails_Filtering`,
              n,
              r,
            ),
          }),
          (0, q.jsx)(`div`, {
            children: P.Localize(
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
var Yh = [4, 3];
function Xh(e) {
  let { appid: t, appName: n } = e,
    r = Dh(t),
    { data: i } = Oh(void 0, !!r),
    [a, o] = K.useState(!1),
    [s, c] = K.useState(void 0),
    l = K.useRef(null),
    u = (0, K.useMemo)(() => {
      let e = new Map();
      for (let t of Yh) {
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
    d = (0, K.useMemo)(() => {
      let e = !!u.get(3)?.average,
        t = !!u.get(4)?.average;
      return e &&
        ((i?.has_steam_deck_neptune && !i?.has_steam_deck_galileo) || !t)
        ? 3
        : 4;
    }, [u, i]),
    f = K.useMemo(
      () =>
        new Map([
          [3, P.Localize(`#GamePerformanceStats_SteamDeckLCD`)],
          [4, P.Localize(`#GamePerformanceStats_SteamDeckOLED`)],
        ]),
      [],
    );
  if (!r) return null;
  if (!Array.from(u.values()).some((e) => !!e.average))
    return (0, q.jsxs)(`div`, {
      className: um,
      children: [
        (0, q.jsx)(`div`, { className: Em }),
        (0, q.jsx)(`div`, {
          className: dm,
          children: P.Localize(
            `#GamePerformanceStats_StillGatheringData_NoDevice`,
          ),
        }),
      ],
    });
  let p = Yh.map((e) => ({
      name: (0, q.jsx)(`div`, { className: Mm, children: f.get(e) }),
      key: e.toString(),
      contents: (0, q.jsx)(fn, {
        children: (0, q.jsx)(Jh, {
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
    let e = (0, q.jsx)(`span`, {
      className: pm,
      children: P.Localize(`#GameFrameRate_FPS`, g),
    });
    v = P.LocalizeReact(`#GameFrameRate_Description_ThisGame`, h, e);
  } else
    v = n
      ? P.Localize(`#GamePerformanceStats_StillGatheringData`, n, h)
      : P.Localize(`#GamePerformanceStats_StillGatheringData_ThisGame`, h);
  let y = !!g && !a;
  return (0, q.jsxs)(`div`, {
    className: um,
    onTransitionEnd: (e) => {
      e.propertyName == `height` &&
        l.current?.scrollIntoView({ behavior: `smooth`, block: `nearest` });
    },
    children: [
      (0, q.jsx)(`div`, { className: Em }),
      (0, q.jsxs)(Jr, {
        className: dm,
        onActivate: y ? () => o(!a) : void 0,
        focusable: y,
        children: [
          (0, q.jsxs)(`div`, {
            className: fm,
            children: [
              v,
              y &&
                (0, q.jsx)(Fn, {
                  className: `heKA7rr02xo-`,
                  direction: a ? `up` : `down`,
                }),
            ],
          }),
          !!g &&
            _ > 0 &&
            (0, q.jsx)(`div`, {
              className: `HKN5tcQd-XE-`,
              children: P.Localize(`#GameFrameRate_LastUpdated`, Qn(_)),
            }),
        ],
      }),
      (0, q.jsx)(Ue, {
        visible: a,
        children: (0, q.jsx)(`div`, {
          ref: l,
          className: mm,
          children: (0, q.jsx)(Me, {
            tabs: p,
            classNameCtn: jm,
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
function Zh(e) {
  let { id: t, compatibility: n, onShowDialog: r } = e,
    { data: i } = V(t),
    { data: a } = kt(t),
    [o, s, c] = wr();
  if (!i || !a || i.item_type !== 0) return null;
  let l = null,
    u = null;
  if (n == 4) {
    let e = a.steam_frame_compat_category || 0;
    ((l = (0, q.jsx)(wf, { category: e })),
      (u = P.Localize(
        `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else if (n == 3) {
    let e = a.steam_machine_compat_category || 0;
    ((l = (0, q.jsx)(Cf, { category: e })),
      (u = P.Localize(
        `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
      )));
  } else {
    let e = a.steam_deck_compat_category || 0;
    ((l = (0, q.jsx)(Sf, { category: e })),
      (u = P.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`)));
  }
  return (0, q.jsxs)(`div`, {
    className: M(im, `LearnMoreCtn`),
    children: [
      l,
      (0, q.jsx)(bt, {
        onClick: (e) => {
          (e.preventDefault(), (r ?? s)());
        },
        children: (0, q.jsx)(`span`, { className: am, children: u }),
      }),
      !r &&
        (0, q.jsx)(Qh, {
          nAppID: i.appid,
          appName: i.name,
          active: o,
          startingTab: n,
          closeModal: c,
        }),
    ],
  });
}
function Qh(e) {
  let { nAppID: t, active: n, appName: r, startingTab: i, closeModal: a } = e;
  return (0, q.jsx)(on, {
    active: n,
    children: (0, q.jsx)($h, {
      nAppID: t,
      appName: r,
      startingTab: i,
      closeModal: a,
    }),
  });
}
function $h(e) {
  let { nAppID: t, appName: n, startingTab: r, closeModal: i } = e,
    a = $p(t),
    o = K.useId();
  return (0, q.jsx)(jt, {
    "aria-labelledby": o,
    modalClassName: `DeckVerifiedModalDialog`,
    closeModal: i,
    onCancel: i,
    children: (0, q.jsx)(Ar, {
      children: (0, q.jsx)(Jr, {
        focusable: !1,
        "flow-children": `column`,
        className: bm,
        children: a
          ? (0, q.jsx)(Rh, {
              titleId: o,
              appName: n,
              results: a,
              eStartingTab: r,
            })
          : (0, q.jsx)(we, {
              size: `medium`,
              position: `center`,
              string: P.Localize(`#Loading`),
            }),
      }),
    }),
  });
}
function eg(e) {
  let { category: t } = e;
  switch (t) {
    case 3:
      return (0, q.jsx)(dt, { className: rm, role: `presentation` });
    case 2:
      return (0, q.jsx)(Gr, { className: rm, role: `presentation` });
    case 1:
      return (0, q.jsx)(mt, { className: rm, role: `presentation` });
    default:
      return (0, q.jsx)(ln, { className: rm, role: `presentation` });
  }
}
function tg(e) {
  let { category: t } = e;
  switch (t) {
    case 2:
      return (0, q.jsx)(Ut, { className: rm, role: `presentation` });
    case 1:
      return (0, q.jsx)(mt, { className: rm, role: `presentation` });
    default:
      return (0, q.jsx)(ln, { className: rm, role: `presentation` });
  }
}
function ng(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      id: t,
      className: xm,
      children: r
        ? P.LocalizeReact(
            `#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: qe(r) }),
          )
        : P.Localize(`#SteamDeckVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamDeckVerified_DescriptionHeader_Verified`), (o = Sm));
      break;
    case 2:
      ((a = `#SteamDeckVerified_DescriptionHeader_Playable`), (o = Cm));
      break;
    case 1:
      ((a = `#SteamDeckVerified_DescriptionHeader_Unsupported`), (o = wm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: P.Localize(og(n)) }),
    c = (0, q.jsx)(`span`, { className: xm, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamDeckVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: qe(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamDeckVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: xm, children: l });
}
function rg(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: xm,
      children: r
        ? P.LocalizeReact(
            `#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: qe(r) }),
          )
        : P.Localize(`#SteamOSCompatibility_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 2:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Compatible`), (o = Tm));
      break;
    case 1:
      ((a = `#SteamOSCompatibility_DescriptionHeader_Unsupported`), (o = wm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: P.Localize(sg(n)) }),
    c = (0, q.jsx)(`span`, { className: xm, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamOSCompatibility_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: qe(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamOSCompatibility_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: xm, children: l });
}
function ig(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: xm,
      children: r
        ? P.LocalizeReact(
            `#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: qe(r) }),
          )
        : P.Localize(`#SteamMachineVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamMachineVerified_DescriptionHeader_Verified`), (o = Sm));
      break;
    case 2:
      ((a = `#SteamMachineVerified_DescriptionHeader_Playable`), (o = Cm));
      break;
    case 1:
      ((a = `#SteamMachineVerified_DescriptionHeader_Unsupported`), (o = wm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: P.Localize(og(n)) }),
    c = (0, q.jsx)(`span`, { className: xm, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamMachineVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: qe(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamMachineVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: xm, children: l });
}
function ag(e) {
  let { id: t, category: n, appName: r, descriptionToken: i } = e;
  if (n == 0)
    return (0, q.jsx)(`div`, {
      className: xm,
      children: r
        ? P.LocalizeReact(
            `#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName`,
            (0, q.jsx)(`b`, { children: qe(r) }),
          )
        : P.Localize(`#SteamFrameVerified_DescriptionHeader_Unknown`),
    });
  let a = ``,
    o = null;
  switch (n) {
    case 3:
      ((a = `#SteamFrameVerified_DescriptionHeader_Verified`), (o = Sm));
      break;
    case 2:
      ((a = `#SteamFrameVerified_DescriptionHeader_Playable`), (o = Cm));
      break;
    case 1:
      ((a = `#SteamFrameVerified_DescriptionHeader_Unsupported`), (o = wm));
  }
  let s = (0, q.jsx)(`span`, { className: o, children: P.Localize(og(n)) }),
    c = (0, q.jsx)(`span`, { className: xm, children: P.Localize(i || a) }),
    l = r
      ? P.LocalizeReact(
          `#SteamFrameVerified_DescriptionHeader_WithAppName`,
          (0, q.jsx)(`b`, { children: qe(r) }),
          s,
          c,
        )
      : P.LocalizeReact(`#SteamFrameVerified_DescriptionHeader`, s, c);
  return (0, q.jsx)(`div`, { id: t, className: xm, children: l });
}
function og(e) {
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
function sg(e) {
  switch (e) {
    case 2:
      return `#SteamOSCompatibility_Category_Compatible`;
    case 1:
      return `#SteamOSCompatibility_Category_Unsupported`;
    default:
      return `#SteamOSCompatibility_Category_Unknown`;
  }
}
function cg(e) {
  return e == 2 ? `bundle` : e == 1 ? `sub` : `app`;
}
function lg(e, t) {
  let n = t || +!!e;
  return [!!n, n];
}
var ug = (e) => {
  let { appid: t } = e,
    n = (0, q.jsx)(`div`, {
      className: `ImpressionTrackedElement`,
      children: e.children,
    });
  return t ? (0, q.jsx)(Ye, { appID: t, children: n }) : n;
};
function dg(e) {
  let { id: t } = e,
    { data: n } = Rt(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: kp,
        children: (0, q.jsx)(`div`, {
          className: Ap,
          children: n
            .slice(0, 10)
            .filter((e) => e.tagid)
            .map((e) =>
              (0, q.jsx)(
                yk,
                { tagid: e.tagid, className: jp },
                `tag_` + e.tagid,
              ),
            ),
        }),
      })
    : null;
}
function fg(e) {
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
    g = Kw(),
    _ =
      d &&
      (() => {
        (g?.(), d());
      }),
    [v, y] = (0, K.useState)(!1),
    [b, x] = (0, K.useState)(``),
    ee = (e) => x(`translateY( -${e?.clientHeight || 0}px )`),
    { data: S } = V(t),
    { data: te } = un(n),
    ne = !f && !o && !a,
    re = S && S.item_type == 0,
    [ie, ae] = lg(l, u);
  return (0, q.jsxs)(`div`, {
    className: wp,
    style: { transform: s && v ? b : `` },
    onMouseEnter: () => y(!0),
    onFocus: () => y(!0),
    onMouseLeave: () => y(!1),
    onBlur: () => y(!1),
    children: [
      (0, q.jsxs)(`a`, {
        href: i,
        className: yp,
        onClick: (e) => {
          m && e.preventDefault();
        },
        "aria-disabled": m,
        children: [
          te &&
            (0, q.jsx)(`div`, {
              className: `JsLUT-ZChQQ-`,
              children: (0, q.jsx)(`div`, {
                className: M(`-G728TP4qEc-`, `AWrycDVaY80-`),
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
              children: (0, q.jsx)(kg, { id: t, onlyOneDiscountPct: !0 }),
            }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: Tp,
        ref: ee,
        children: (0, q.jsxs)(`div`, {
          className: Dp,
          children: [
            (0, q.jsx)(`a`, {
              href: i,
              onClick: (e) => {
                m && e.preventDefault();
              },
              "aria-disabled": m,
              children: (0, q.jsx)(`div`, {
                className: Op,
                children: S?.name || r,
              }),
            }),
            h && (0, q.jsx)(mg, { id: t }),
            (0, q.jsx)(dg, { id: t }),
            !ie && (0, q.jsx)(Hp, { id: t }),
            !(ie || !ne) &&
              (0, q.jsxs)(`div`, {
                className: `N6R56w3oY8s-`,
                children: [
                  (0, q.jsx)(Eg, { id: t, strClassName: `aRGldfNGEPM-` }),
                  (0, q.jsx)(pg, { id: t }),
                ],
              }),
            o && (0, q.jsx)(Kv, { id: t, className: `mVkwv5PYwMg-` }),
            !!(ie && re) &&
              (0, q.jsx)(Zh, { id: t, compatibility: ae, onShowDialog: _ }),
            !!a && a,
            f &&
              re &&
              t &&
              `appid` in t &&
              t.appid &&
              (0, q.jsx)(K_, { appid: t.appid, bIsMuted: !1 }),
            p && (0, q.jsx)(xw, { nCreatorAccountID: p }),
          ],
        }),
      }),
    ],
  });
}
function pg(e) {
  let { id: t } = e,
    { data: n } = Gt(t);
  if (!n) return null;
  let r = Jd(n);
  return (0, q.jsx)(`div`, { className: Mp, children: r });
}
function mg(e) {
  let { id: t } = e,
    { data: n } = ht(t);
  return n
    ? (0, q.jsx)(`div`, { className: Ep, children: n?.short_description })
    : null;
}
function hg(e) {
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
    { data: l } = an(t),
    { data: u } = vt(t),
    d = l === void 0 && u === void 0,
    [f] = lg(!!a, o);
  return (0, q.jsxs)(`div`, {
    className: M(mp, d && `dNo27dzDPfI-`, Wu, i && `djLCJl8FKv8-`),
    children: [
      (0, q.jsxs)(`a`, {
        href: r,
        className: hp,
        children: [
          !(!s || f) && (0, q.jsx)(Zp, { id: n, snr: e.strSNR }),
          !(!c || f) && (0, q.jsx)(FC, { id: n, snr: e.strSNR }),
          t && (0, q.jsx)(Nw, { id: t }),
        ],
      }),
      (0, q.jsx)(fg, { ...e }),
    ],
  });
}
function gg(e) {
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
    { data: b } = V(t),
    x = Nt(),
    [ee, S, te] = wr(),
    { strStoreURL: ne, snr: re } = q_(b, o);
  if ((!b && !n) || x) return (0, q.jsx)(q.Fragment, { children: u });
  let ie = t;
  b &&
    b.item_type == 1 &&
    b.included_appids?.length == 1 &&
    (ie = { appid: b.included_appids[0] });
  let ae = Xw() == `hiding`,
    oe;
  r || (oe = v ?? (b ? ne : void 0));
  let [, se] = lg(p, m),
    ce;
  se != 0 && b?.appid && b?.item_type == 0 && (ce = b.appid);
  let le = (0, q.jsx)(hg, {
      id: t,
      displayID: ie,
      name: n,
      bPreventNavigation: r,
      strStoreUrl: oe,
      elElementToAppend: i,
      bShowDemoButton: a,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bHideBottomHalf: ae,
      bHidePrice: s,
      bUseSubscriptionLayout: c,
      strSNR: re,
      nCreatorAccountID: d,
      bShowWishlistButton: h,
      bShowIgnoreButton: g,
      bShowDescription: _,
      onShowDeckCompatibilityDialog: ce ? S : void 0,
    }),
    ue = oe && !v ? (0, q.jsx)(`a`, { href: oe, children: u }) : u;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(qw, {
        hoverContent: le,
        nWidthMultiplier: f,
        ...y,
        children: ue,
      }),
      ce &&
        (0, q.jsx)(Qh, {
          nAppID: ce,
          appName: b?.name || n,
          startingTab: se,
          active: ee,
          closeModal: te,
        }),
    ],
  });
}
function _g(e) {
  return (0, K.useMemo)(() => bg(e), [e?.id, e?.type]);
}
function vg(e, t) {
  return (0, K.useMemo)(() => Sg(e, t), [e, t]);
}
function yg(e, t) {
  return (0, K.useMemo)(() => xg(e, t), [e, t]);
}
function bg(e) {
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
function xg(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function Sg(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
var Cg = 6;
function wg(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = V(t),
    i = r?.item_type == 2,
    { data: a } = $a(),
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
    c = P.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = P.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, q.jsxs)(`div`, {
    className: Kl,
    children: [
      (0, q.jsxs)(`div`, {
        className: wd,
        children: [
          i &&
            (0, q.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: P.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, q.jsx)(`div`, {
        className: ql,
        children: o
          .slice(0, Cg)
          .map((e) => (0, q.jsx)(Tg, { id: e }, `preview${wt(e)}`)),
      }),
    ],
  });
}
function Tg(e) {
  let { id: t } = e,
    { data: n } = Ht(t),
    { data: r } = ur(t);
  if (!n || !r) return null;
  let i = Ae(n, `small_capsule`);
  return (0, q.jsx)(gg, {
    id: t,
    className: Td,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, q.jsx)(`img`, {
      src: i,
      className: Ed,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
function Eg(e) {
  let { id: t, strClassName: n, bMinimizePlatforms: r, bHideWindows: i } = e,
    { data: a } = kt(t);
  if (!a) return null;
  if (r) {
    let e = i
      ? null
      : a?.windows &&
        (0, q.jsx)(`span`, {
          title: P.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(_r, {
            "aria-label": P.Localize(`#Platform_Windows`),
          }),
        });
    return (
      L.PLATFORM === `linux` && a?.steamos_linux
        ? (e = (0, q.jsx)(`span`, {
            title: P.Localize(`#Platform_Linux`),
            children: (0, q.jsx)(it, {
              "aria-label": P.Localize(`#Platform_Linux`),
            }),
          }))
        : L.PLATFORM === `macos` && a?.mac
          ? (e = (0, q.jsx)(`span`, {
              title: P.Localize(`#Platform_Mac`),
              children: (0, q.jsx)(nt, {
                "aria-label": P.Localize(`#Platform_Mac`),
              }),
            }))
          : a.vr_support?.vrhmd &&
            (e = (0, q.jsx)(`span`, {
              title: P.Localize(`#Platform_VR`),
              children: (0, q.jsx)(xr, {
                "aria-label": P.Localize(`#Platform_VR`),
              }),
            })),
      e ? (0, q.jsx)(`span`, { className: M(ru, n), children: e }) : null
    );
  }
  return (0, q.jsxs)(`span`, {
    className: M(ru, n),
    children: [
      !i &&
        a.windows &&
        (0, q.jsx)(`span`, {
          title: P.Localize(`#Platform_Windows`),
          children: (0, q.jsx)(_r, {
            "aria-label": P.Localize(`#Platform_Windows`),
          }),
        }),
      a.mac &&
        (0, q.jsx)(`span`, {
          title: P.Localize(`#Platform_Mac`),
          children: (0, q.jsx)(nt, {
            "aria-label": P.Localize(`#Platform_Mac`),
          }),
        }),
      a.steamos_linux &&
        (0, q.jsx)(`span`, {
          title: P.Localize(`#Platform_Linux`),
          children: (0, q.jsx)(it, {
            "aria-label": P.Localize(`#Platform_Linux`),
          }),
        }),
      a.vr_support?.vrhmd &&
        (0, q.jsx)(`span`, {
          title: P.Localize(`#Platform_VR`),
          children: (0, q.jsx)(xr, {
            "aria-label": P.Localize(`#Platform_VR`),
          }),
        }),
    ],
  });
}
function Dg(e) {
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
function Og(e, t, n) {
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
function kg(e) {
  let { id: t, bSelfPurchaseOption: n } = e,
    { data: r } = ft(t),
    { data: i } = V(t);
  if (!i) return null;
  let a = n && i.item_type == 1 ? i.self_purchase_option : r;
  return (0, q.jsx)(Ag, { purchaseOption: a, ...e });
}
function Ag(e) {
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
    g = L.NOW,
    { data: _ } = Gt(r),
    { data: v } = V(r);
  if (!v) return null;
  let y = i,
    b = !m && Zd(_, g),
    x = M({
      [hu]: !0,
      [Ru]: t,
      StoreSalePriceWidgetContainer: !0,
      [Hu]: b,
      [tu]: c,
      [l ?? ``]: !!l,
    });
  if (e.bShowInLibrary)
    return (0, q.jsx)(`div`, {
      className: x,
      children: (0, q.jsx)(`div`, {
        className: Lu,
        children: P.Localize(`#EventDisplay_CallToAction_InLibrary`),
      }),
    });
  if (_ && _.is_coming_soon && (!y || (!y.packageid && !y.bundleid))) {
    if (o) return null;
    let e =
      _.coming_soon_display &&
      [`text_comingsoon`, `text_tba`].includes(_.coming_soon_display)
        ? Mt(_)
        : P.Localize(`#EventDisplay_CallToAction_ComingSoon_Date`, Jd(_));
    return (0, q.jsx)(`div`, {
      className: x,
      children: (0, q.jsx)(`div`, { className: Lu, children: e }),
    });
  }
  if (v.is_free) {
    if (!v.is_free_temporarily)
      return v.item_type == 0 && v.type == 1
        ? s
          ? null
          : (0, q.jsxs)(`div`, {
              className: x,
              children: [
                b &&
                  (0, q.jsx)(`div`, {
                    className: `eNdjZ1XB-fk-`,
                    children: P.Localize(`#Flag_New`),
                  }),
                (0, q.jsx)(`div`, {
                  className: Lu,
                  children: P.Localize(`#EventDisplay_CallToAction_FreeDemo`),
                }),
              ],
            })
        : (0, q.jsxs)(`div`, {
            className: x,
            children: [
              b &&
                (0, q.jsx)(`div`, {
                  className: `eNdjZ1XB-fk-`,
                  children: P.Localize(`#Flag_New`),
                }),
              (0, q.jsx)(`div`, {
                className: Lu,
                children: P.Localize(`#EventDisplay_CallToAction_FreeToPlay`),
              }),
            ],
          });
    if (y && y.is_free_to_keep && !y.formatted_original_price)
      return (0, q.jsx)(`div`, {
        className: x,
        children: (0, q.jsx)(`div`, {
          className: Lu,
          children: P.Localize(`#EventDisplay_CallToAction_Free`),
        }),
      });
  }
  if (!y || !y.formatted_final_price) return null;
  let ee = v.item_type == 2,
    S = Dg(y),
    te = !!S && !S.nSupersededBundlePct,
    ne = S?.nSupersededBundlePct ? S.nDiscountPct : y.discount_pct || 0,
    re = ((S || ee) && (!n || te || (S && !t)) && y.bundle_discount_pct) || 0,
    ie = y.formatted_final_price;
  if (f) {
    let e = Xe(W.country_code.toUpperCase()),
      t = { ...Ve(e), bWholeUnitsOnly: !0 };
    ie = ze(Number.parseInt(y.final_price_in_cents || `0`), t);
  }
  let ae = Qd(_, y);
  return (0, q.jsx)(jg, {
    bSingleLineMode: !!t,
    bBundleItem: ee,
    nBaseDiscountPercentage: re,
    nDiscountPercentage: ne,
    bIsPrePurchase: ae,
    strBestPurchaseOriginalPriceFormatted:
      S?.strOriginalPrice || y.formatted_original_price || ``,
    strBestPurchasePriceFormatted: ie,
    bHideDiscountPercentForCompliance: !!y.hide_discount_pct_for_compliance,
    bShowNewFlag: b,
    bHidePrePurchase: !!a,
    bPrePurchaseBesidePrice: h,
    strDiscountAndPriceClassName: u,
    strPriceFormattedClassName: d,
    bPurchaseOptionDisplay: c,
  });
}
function jg(e) {
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
    y = P.Localize(Og(!!i, !!n, !!m));
  return (0, q.jsxs)(`div`, {
    className: M({
      [hu]: !0,
      [Ru]: t,
      StoreSalePriceWidgetContainer: !0,
      [Fu]: !!n,
      Discounted: !!n,
      [Vu]: !!r,
      [Ku]: !!u,
      [Hu]: !!c,
      [tu]: p,
      [d ?? ``]: !!d,
    }),
    "aria-label": g,
    children: [
      !(!r || l) &&
        (0, q.jsx)(`div`, {
          className: M(`DfwzMU92EL4-`, `StoreSalePrepurchaseLabel`),
          children: (0, q.jsxs)(`span`, {
            children: [
              (0, q.jsx)(mr, {}),
              P.Localize(`#EventDisplay_CallToAction_Prepurchase_Short`),
            ],
          }),
        }),
      !(r || !c) &&
        (0, q.jsx)(`div`, {
          className: `eNdjZ1XB-fk-`,
          children: P.Localize(`#Flag_New`),
        }),
      v &&
        (0, q.jsx)(er, {
          toolTipContent: y,
          children: (0, q.jsxs)(`span`, {
            className: M(`kjiBcsaqA8o-`, `_3jMC2e33p3s-`),
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
            (0, q.jsx)(er, {
              toolTipContent: y,
              children: (0, q.jsx)(`span`, {
                className: M(`_-1f811oo4iw-`),
                children: `-${i}%`,
              }),
            }),
            !!n &&
              (0, q.jsx)(er, {
                toolTipContent: y,
                children: (0, q.jsx)(`span`, {
                  className: M(`kjiBcsaqA8o-`),
                  children: `-${n}%`,
                }),
              }),
          ],
        }),
      !(i || !n || h) &&
        (0, q.jsx)(er, {
          toolTipContent: y,
          children: (0, q.jsx)(`div`, {
            className: M(`kjiBcsaqA8o-`, `StoreSaleDiscountBox`),
            children: `-${n}%`,
          }),
        }),
      !!(n && h) &&
        (0, q.jsx)(`div`, {
          className: `NqZ9uMSo13A-`,
          children: (0, q.jsx)(at, {}),
        }),
      _
        ? (0, q.jsxs)(`div`, {
            className: M(zu),
            children: [
              (0, q.jsx)(`div`, {
                className: M({ [Gu]: t, [Bu]: !t }),
                children: a,
              }),
              (0, q.jsx)(`div`, {
                className: M({ [Lu]: !0, [Ru]: t, [f ?? ``]: !!f }),
                children: o,
              }),
            ],
          })
        : (0, q.jsx)(`div`, {
            className: M({ [Lu]: !0, [f ?? ``]: !!f }),
            children: o,
          }),
    ],
  });
}
async function Mg() {
  let e = Bn(`broadcast_available_for_page`, `application_config`);
  if (Bg(e)) {
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
var Ng = class {
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
(z([g], Ng.prototype, `title`, void 0),
  z([g], Ng.prototype, `viewer_count`, void 0),
  z([g], Ng.prototype, `gamedata_subtitle`, void 0),
  z([g], Ng.prototype, `current_selection_priority`, void 0));
var Pg = `primary`,
  Fg = `featured`,
  Ig = `default_featured`,
  Lg = `general`,
  Rg = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function zg(e) {
  switch (e) {
    case Pg:
      return 3;
    case Fg:
      return 2;
    case Ig:
      return 1;
    case Lg:
    default:
      return 0;
  }
}
function Bg(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function Vg() {
  return f(Ug());
}
function Hg(e) {
  let { data: t } = Vg(),
    [n, r] = (0, K.useState)(!1),
    i = x(),
    a = Jn();
  return (
    (0, K.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(nr(a, { appid: e }))),
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
function Ug() {
  return {
    queryKey: Wg(),
    queryFn: async () => {
      let e = await Mg();
      return new Set(e);
    },
  };
}
function Wg() {
  return [`BroadcastApps`];
}
var Gg = `hRwhHwwKlgI-`;
function Kg() {
  return (0, q.jsx)(`div`, {
    className: Gg,
    children: F(`#home_page_live_broadcast`),
  });
}
function qg(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = $a(),
    { data: a } = Gp(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = Hg(t),
    l = o && !n,
    u = s && !n,
    d = !n && r;
  return (0, q.jsxs)(`div`, {
    className: M(md, `CapsuleDecorators`),
    children: [
      l &&
        (0, q.jsxs)(`span`, {
          className: M(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, q.jsx)(`img`, {
              src: Pr(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: P.Localize(`#Sale_InLibrary`),
            }),
            P.Localize(`#Sale_InLibrary`),
          ],
        }),
      u &&
        (0, q.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, q.jsx)(Hr, { className: `ppO76q5Y-Zg-` }),
            P.Localize(`#Sale_OnWishlist`),
          ],
        }),
      d && !l && !u && (0, q.jsx)(Jg, { appids: t }),
      c && (0, q.jsx)(Kg, {}),
    ],
  });
}
function Jg(e) {
  let { appids: t } = e;
  return Yg(t)
    ? (0, q.jsx)(`span`, {
        className: M(fd, pd),
        children: P.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function Yg(e) {
  let [t, n] = (0, K.useState)(!1),
    r = x(),
    i = Jn();
  return (
    (0, K.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(nr(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
    t
  );
}
var Xg = `WYXlhoxwBlU-`,
  Z = `Ypf4QLCxqQU-`,
  Zg = `jP-Qr-tpETg-`,
  Qg = `triBTPpfZNQ-`,
  $g = `Ep0wQ-6tJLw-`,
  e_ = `-Rp0JgQXMoA-`,
  t_ = `QWDBAVIUpho-`,
  n_ = `JAphvRffM9M-`,
  r_ = `FQQL32BdomI-`,
  i_ = `xNRz-0kPOeE-`,
  a_ = `-F6L5ywkZiU-`,
  o_ = `_4eS9H8fFOdo-`,
  s_ = `_7fjzkXY-Nhs-`,
  c_ = `qNcrltVSVzI-`,
  l_ = `A-4nfbw4-fY-`,
  u_ = `oe2Jr-slLMU-`,
  d_ = `DGZ5Ptl37g4-`,
  f_ = `zstB61TOiBA-`,
  p_ = `-ZEsfMgRePw-`,
  m_ = `P-N-CSZ-VX8-`,
  h_ = `aZng9sDwNZg-`,
  g_ = `x80z1JoR9dc-`,
  __ = `X-2r-tUH1gQ-`,
  v_ = `-A11cjkYCU8-`,
  y_ = `_10gRNaJtPOU-`,
  b_ = `UskT6FngUB8-`,
  x_ = `L03Y6ydPSDM-`,
  S_ = `rX8DGzBU5pU-`,
  C_ = `_8mKyAzWvx8I-`,
  w_ = `RfxR9kxm2-o-`,
  T_ = `_3EpVljmp8Bg-`,
  E_ = `h1-hm2PiNH0-`,
  D_ = `ruaMViMLvdA-`;
function O_(e) {
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
    return (0, q.jsx)(k_, {
      children: (0, q.jsx)(`div`, {
        className: Zg,
        children: (0, q.jsx)(`div`, { className: Qg }),
      }),
    });
  if (r)
    return (0, q.jsx)(k_, {
      children: (0, q.jsx)(`div`, {
        className: $g,
        children: (0, q.jsx)(`div`, { className: Qg }),
      }),
    });
  if (a)
    return (0, q.jsxs)(k_, {
      children: [
        (0, q.jsxs)(`div`, {
          className: v_,
          children: [
            (0, q.jsx)(`div`, {
              className: y_,
              children: (0, q.jsx)(`div`, { className: Qg }),
            }),
            (0, q.jsx)(`div`, {
              className: b_,
              children: (0, q.jsx)(`div`, { className: Qg }),
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
    return (0, q.jsx)(k_, {
      children: (0, q.jsxs)(`div`, {
        className: f_,
        children: [
          (0, q.jsx)(`div`, { className: M(p_, Z) }),
          (0, q.jsxs)(`div`, {
            className: M(m_),
            children: [
              (0, q.jsx)(`div`, { className: M(h_, Z) }),
              (0, q.jsx)(`div`, { className: M(g_, Z) }),
              (0, q.jsx)(`div`, { className: M(__, Z) }),
            ],
          }),
        ],
      }),
    });
  if (o)
    return (0, q.jsx)(k_, {
      children: (0, q.jsxs)(`div`, {
        className: u_,
        children: [
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsxs)(`div`, {
            className: d_,
            children: [
              (0, q.jsx)(`div`, { className: Z }),
              (0, q.jsx)(`div`, { className: Z }),
            ],
          }),
        ],
      }),
    });
  if (c)
    return (0, q.jsx)(k_, {
      children: (0, q.jsxs)(`div`, {
        className: M({ [w_]: !0, [void 0]: l }),
        children: [
          (0, q.jsx)(`div`, { className: Z }),
          (0, q.jsxs)(`div`, {
            className: M(m_),
            children: [
              (0, q.jsx)(`div`, { className: M(h_, Z) }),
              (0, q.jsx)(`div`, { className: M(g_, Z) }),
              (0, q.jsx)(`div`, { className: M(T_, Z) }),
              (0, q.jsx)(`div`, { className: M(E_, Z) }),
              (0, q.jsx)(`div`, { className: M(D_, Z) }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, q.jsx)(k_, {
      children: (0, q.jsxs)(`div`, {
        className: x_,
        children: [
          (0, q.jsx)(`div`, { className: M(S_, Z) }),
          (0, q.jsx)(`div`, { className: M(C_, Z) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, q.jsx)(
          Jr,
          {
            className: r_,
            focusable: !0,
            children: (0, q.jsx)(`div`, { className: Z }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, q.jsx)(k_, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, q.jsx)(k_, {
          children: (0, q.jsx)(`div`, {
            className: n_,
            children: (0, q.jsx)(`div`, { className: Z }),
          }),
        })
      : t[0] == 4
        ? (0, q.jsx)(k_, {
            children: (0, q.jsxs)(`div`, {
              className: t_,
              children: [
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
              ],
            }),
          })
        : (0, q.jsx)(k_, {
            children: (0, q.jsxs)(`div`, {
              className: e_,
              children: [
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
                (0, q.jsx)(`div`, { className: Z }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, q.jsx)(k_, {
            children: (0, q.jsxs)(`div`, {
              className: i_,
              children: [
                (0, q.jsxs)(`div`, {
                  className: M(a_, s_),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: M(a_, s_),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
        : (0, q.jsx)(k_, {
            children: (0, q.jsxs)(`div`, {
              className: i_,
              children: [
                (0, q.jsxs)(`div`, {
                  className: M(a_, o_),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, q.jsxs)(`div`, {
                  className: M(a_, s_),
                  children: [
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                    (0, q.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
      : (0, q.jsx)(k_, {
          children: (0, q.jsxs)(`div`, {
            className: c_,
            children: [
              (0, q.jsxs)(`div`, {
                className: M(a_, o_),
                children: [
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: M(a_, s_),
                children: [
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                  (0, q.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, q.jsxs)(`div`, {
                className: M(a_, l_),
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
function k_(e) {
  return (0, q.jsx)(Jr, {
    className: M(Xg, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function A_(e) {
  let [t, n] = (0, K.useState)(void 0),
    { data: r } = V(e),
    { data: i } = Rt(e),
    a = x(),
    o = Jn();
  return (
    (0, K.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(Xr(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function j_(e) {
  let { id: t } = e;
  return t ? (0, q.jsx)(M_, { id: t }) : null;
}
function M_(e) {
  let { id: t } = e,
    n = A_(t);
  return n
    ? (0, q.jsx)(`div`, {
        className: Eu,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, q.jsx)(yk, { tagid: e.tagid, className: Du }, `tag_` + e.tagid),
          ),
      })
    : null;
}
var N_ = `pE3kiYj-T9c-`,
  P_ = `bXqn3-4kGc8-`,
  F_ = `bNGFzJt9CmI-`,
  I_ = `vE1beFyJ7fE-`,
  L_ = `jLH2MgXW2QA-`,
  R_ = `dGNTZWr-al8-`,
  z_ = `_8aFotqvmohI-`,
  B_ = `sjibpkgu4sc-`,
  V_ = `I09IQjtbMSg-`,
  H_ = `C4-YRfvAL7Q-`;
async function U_(e, t) {
  let n = `steam://run/` + e;
  I.IN_CLIENT
    ? (console.log(`Running game ${e} locally.`), (window.location.href = n))
    : (console.log(
        `Cannot identify local client. Prompting user to launch ${e}.`,
      ),
      W_(e, n, t));
}
async function W_(e, t, n) {
  console.log(`prompting for`, n);
  let r = I.STORE_BASE_URL + `about/`;
  Tn(
    (0, q.jsx)(G_, {
      appid: e,
      strGameName: n || ``,
      strOnOKUrl: t,
      strDownloadSteamUrl: r,
    }),
    window,
  );
}
var G_ = (e) => {
  let t = () => e.closeModal && e.closeModal();
  return (0, q.jsx)(ni, {
    onEscKeypress: t,
    className: N_,
    children: (0, q.jsxs)(en, {
      children: [
        (0, q.jsxs)(br, { children: [` `, F(`#GotSteam_Title`), ` `] }),
        (0, q.jsxs)(Ar, {
          children: [
            (0, q.jsx)(En, {
              children: or(
                `#GotSteam_PromptWithDownloadLink`,
                (0, q.jsx)(`a`, {
                  href: e.strDownloadSteamUrl,
                  className: P_,
                  children: F(`#GotSteam_DownloadLinkText`),
                }),
                (0, q.jsx)(`span`, { className: F_, children: e.strGameName }),
              ),
            }),
            (0, q.jsxs)(`div`, {
              className: I_,
              children: [
                (0, q.jsxs)(`a`, {
                  href: e.strOnOKUrl,
                  onClick: t,
                  className: M(L_, R_),
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: z_,
                      children: [` `, F(`#GotSteam_Yes`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: B_,
                      children: [` `, F(`#GotSteam_Yes_Play`), ` `],
                    }),
                  ],
                }),
                (0, q.jsxs)(`a`, {
                  href: e.strDownloadSteamUrl,
                  onClick: t,
                  className: L_,
                  children: [
                    (0, q.jsxs)(`div`, {
                      className: z_,
                      children: [` `, F(`#GotSteam_No`), ` `],
                    }),
                    (0, q.jsxs)(`div`, {
                      className: B_,
                      children: [` `, F(`#GotSteam_No_Download`), ` `],
                    }),
                  ],
                }),
              ],
            }),
            (0, q.jsxs)(`div`, {
              className: V_,
              children: [
                (0, q.jsx)(it, { className: H_ }),
                F(`#GotSteam_Blurb`),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
function K_(e) {
  let { appid: t, bIsMuted: n } = e,
    r = hc(t),
    i = no(t),
    { data: a } = V(r),
    { mutate: o } = gf(r),
    s = (e) => {
      (e.preventDefault(), i ? U_(t, a?.name) : o());
    },
    c = M(du, n && void 0, i ? fu : pu);
  return (0, q.jsx)(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: s,
    className: c,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), s(e));
    },
    children: F(i ? `#Sale_PlayNow` : `#Sale_AddToLibrary`),
  });
}
function q_(e, t) {
  let n = sr(),
    r = jr(),
    i = De(Ol(e, t));
  return { snr: tn(n), strStoreURL: kn(i, n, r) };
}
function J_(e) {
  return e
    ? { type: `replay`, gid: e }
    : W.logged_in
      ? { type: `account` }
      : { type: `anonymous`, gid: Qr(Kr) };
}
var Y_ = K.createContext({ cartID: void 0 });
function X_() {
  return K.useContext(Y_).cartID || J_();
}
function Z_(e) {
  return e.type === `account`;
}
function Q_(e) {
  return e.type === `anonymous`;
}
var $_ = {
  bCanAddItems: !0,
  bCanModify: !0,
  bCanPurchase: !0,
  bShowValidationNotices: !0,
  bShowPurchaseOptionPicker: !0,
  bShowPageFooter: !0,
  bCanChangeCountry: !0,
};
({ ...$_ }, { ...$_ });
var ev = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.validation_failure || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            validation_failure: { n: 1, d: 0, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartValidationDetails`;
    }
  },
  tv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_gift || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_gift: { n: 1, br: O.readBool, bw: E.writeBool },
            is_private: { n: 2, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItemFlags`;
    }
  },
  nv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            type: { n: 2, br: O.readEnum, bw: E.writeEnum },
            packageid: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            bundleid: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            is_valid: { n: 8, br: O.readBool, bw: E.writeBool },
            validation_details: { n: 9, c: ev },
            time_added: { n: 10, br: O.readUint32, bw: E.writeUint32 },
            price_when_added: { n: 11, c: xe },
            gift_info: { n: 12, c: ye },
            flags: { n: 13, c: tv },
            gidcoupon_applied: {
              n: 14,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartLineItem`;
    }
  },
  rv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            line_items: { n: 1, c: nv, r: !0, q: !0 },
            subtotal: { n: 2, c: xe },
            is_valid: { n: 3, br: O.readBool, bw: E.writeBool },
            validation_details: { n: 4, c: ev },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `AccountCartContents`;
    }
  },
  iv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Request`;
    }
  },
  av = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: rv } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetCart_Response`;
    }
  },
  ov = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_country || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            user_country: { n: 1, br: O.readString, bw: E.writeString },
            items: { n: 2, c: sv, r: !0, q: !0 },
            navdata: { n: 3, c: so },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request`;
    }
  },
  sv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.packageid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            bundleid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            gift_info: { n: 10, c: ye },
            flags: { n: 11, c: tv },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Request_ItemToAdd`;
    }
  },
  cv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_ids || B(e.M()),
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
              br: O.readUint64String,
              pbr: O.readPackedUint64String,
              bw: E.writeRepeatedUint64String,
            },
            cart: { n: 2, c: rv },
            replaced_packages: {
              n: 3,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
            existing_billing_agreementid: {
              n: 4,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            new_billing_agreement_recurring_packageid: {
              n: 5,
              br: O.readUint32,
              bw: E.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_AddItemsToCart_Response`;
    }
  },
  lv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            user_country: { n: 2, br: O.readString, bw: E.writeString },
            gift_info: { n: 10, c: ye },
            flags: { n: 11, c: tv },
            apply_gidcoupon: {
              n: 12,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Request`;
    }
  },
  uv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: rv } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_ModifyLineItem_Response`;
    }
  },
  dv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            user_country: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Request`;
    }
  },
  fv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: rv } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_RemoveItemFromCart_Response`;
    }
  },
  pv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidshoppingcart || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            user_country: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Request`;
    }
  },
  mv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cart || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { cart: { n: 1, c: rv } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_MergeShoppingCartContents_Response`;
    }
  },
  hv = class e extends G.Message {
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
  gv = class e extends G.Message {
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
  _v = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Request`;
    }
  },
  vv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_items || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { line_items: { n: 1, c: yv, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response`;
    }
  },
  yv = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.line_item_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            coupons: { n: 2, c: Ce, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAccountCart_GetRelevantCoupons_Response_LineItemCoupons`;
    }
  },
  bv;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`AccountCart.GetCart#1`, U(iv, t, n), av, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCart = t;
  function n(e, t, n) {
    return e.SendMsg(`AccountCart.AddItemsToCart#1`, U(ov, t, n), cv, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.AddItemsToCart = n;
  function r(e, t, n) {
    return e.SendMsg(`AccountCart.ModifyLineItem#1`, U(lv, t, n), uv, {
      ePrivilege: 1,
    });
  }
  e.ModifyLineItem = r;
  function i(e, t, n) {
    return e.SendMsg(`AccountCart.RemoveItemFromCart#1`, U(dv, t, n), fv, {
      ePrivilege: 1,
    });
  }
  e.RemoveItemFromCart = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AccountCart.MergeShoppingCartContents#1`,
      U(pv, t, n),
      mv,
      { ePrivilege: 1 },
    );
  }
  e.MergeShoppingCartContents = a;
  function o(e, t, n) {
    return e.SendMsg(`AccountCart.DeleteCart#1`, U(hv, t, n), gv, {
      ePrivilege: 1,
    });
  }
  e.DeleteCart = o;
  function s(e, t, n) {
    return e.SendMsg(`AccountCart.GetRelevantCoupons#1`, U(_v, t, n), vv, {
      ePrivilege: 1,
    });
  }
  e.GetRelevantCoupons = s;
})((bv ||= {}));
function xv(e) {
  return Z_(e) ? e.type : e.gid;
}
function Sv(e) {
  return [`shopping_cart`, xv(e), W.accountid];
}
function Cv(e) {
  e.invalidateQueries({ queryKey: [`validate_checkout`], exact: !1 });
}
function wv(e, t, n) {
  (e.setQueryData(Sv(t), n), Cv(e));
}
async function Tv(e, t, n, r, i) {
  let a = new FormData();
  (t &&
    (t.length === 1
      ? a.set(`subid`, t[0].toString())
      : t.forEach((e) => a.append(`subid[]`, e.toString()))),
    n && a.set(`bundleid`, n.toString()),
    (r || i) &&
      (a.set(`isgift`, `1`), i && a.set(`gifteeaccountid`, i.toString())),
    a.set(`action`, `add_to_cart`));
  let o = await fetch(`${L.STORE_BASE_URL}cart/addtocart`, {
    method: `post`,
    body: a,
  });
  if (!o.ok) throw Error(`Failed to fetch /cart/addtocart`);
  let s = await o.json();
  return [s?.success ? 1 : 2, s?.contents];
}
async function Ev(e, t, n, r) {
  let i = yr.Init(ov);
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
    r && i.Body().set_navdata(so.fromObject(hr(r))),
    i.Body().set_user_country(t));
  let a = await bv.AddItemsToCart(e, i);
  return (
    a.BSuccess() ||
      console.warn(`Failed to add item to account cart: ${a.GetEResult()}`),
    [a.GetEResult(), a.Body().toObject()]
  );
}
function Dv(e) {
  let t = { line_items: [] };
  return (
    e?.lineitems?.length &&
      (t.line_items = e.lineitems
        .map((e) => (e.package_item?.gidbundle ? null : Ov(e)))
        .filter(ai)),
    t
  );
}
function Ov(e) {
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
function kv(e, t, n, r, i) {
  return Av(
    [{ packageid: e, bundleid: t, bIsGift: n, nAccountIDGiftee: r }],
    i,
  );
}
function Av(e, t) {
  let n = X_(),
    r = On(),
    i = x(),
    { storeBrowseContext: a, dataLoader: o } = Vr(),
    { country: s } = a,
    c = Mn(t);
  return l({
    mutationFn: async () => {
      if (e.length == 0 || !e.every((e) => e.packageid || e.bundleid))
        throw `Every item must have a valid package or bundle id`;
      let t;
      if (Z_(n)) {
        let [a, o] = await Ev(r, s, e, c);
        if (a == 1) ((t = o.line_item_ids), wv(i, n, o.cart));
        else throw `AddItemsToAccountCart failed with ${a}`;
      } else if (Q_(n)) {
        let a = e.map((e) => e.packageid).filter(ai),
          o = e.map((e) => e.bundleid).filter(ai);
        if (o.length > 1)
          throw `The anonymous cart can only take one bundle per call`;
        let [s, c] = await Tv(
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
            wv(i, n, Dv(c)));
        } else throw `AddItemsToAnonymousCart failed with ${s}`;
      } else throw `Invalid cart type`;
      return t;
    },
    onMutate: () => {
      (async () => {
        let t = e.map((e) =>
          e.packageid ? { packageid: e.packageid } : { bundleid: e.bundleid },
        );
        (await Promise.all(t.map((e) => i.fetchQuery(nr(o, e))))).forEach(
          (e, n) => {
            let r =
              e?.included_appids?.length == 1
                ? { appid: e.included_appids[0] }
                : t[n];
            (i.prefetchQuery(Tr(o, r)), i.prefetchQuery(Pn(o, r)));
          },
        );
      })();
    },
  });
}
async function jv(e, t) {
  let n = yr.Init(pr);
  (n.Body().set_context(Dt(!1)), t.forEach((e) => n.Body().add_packageid(e)));
  let r = await Wt.GetHardwareItems(e, n);
  return r.BSuccess()
    ? r
        .Body()
        .details()
        .map((e) => e.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${t.join(`,`)}`),
      null);
}
function Mv(e) {
  let t = Lv(On());
  return f(Fv(t, e));
}
var Nv = (function (e) {
  return (
    (e[(e.k_Loading = 0)] = `k_Loading`),
    (e[(e.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (e[(e.k_LoadFailure = 2)] = `k_LoadFailure`),
    e
  );
})({});
function Pv(e) {
  let t = Lv(On()),
    n = fi({ queries: e.map((n) => ({ ...Fv(t, n), enabled: e.length > 0 })) }),
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
function Fv(e, t) {
  return { queryKey: Iv(t), queryFn: async () => e.load(t), enabled: !!t };
}
function Iv(e) {
  return [`hardwaredetail`, e];
}
function Lv(e) {
  return _e(`HardwareDetailLoader`, () => Rv(e));
}
function Rv(e) {
  return new xl.default(async (t) => {
    let n = await jv(e, t),
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
var zv = { high_pending_orders: !1, inventory_available: !0 };
function Bv(e) {
  let { data: t } = V(e),
    n = t?.item_type === 1 && t.type === 10,
    { data: r } = Mv(n ? t.id : void 0);
  return t ? (n ? (r ?? null) : zv) : null;
}
var Vv = `wvEYeGaFmt0-`,
  Hv = `GW1050ijiP0-`;
function Uv(e) {
  let { id: t, className: n } = e,
    r = sr(),
    { data: i } = V(t),
    { data: a } = Gt(t),
    { data: o } = Yt(t),
    s = Bv(t),
    { bIsOwned: c } = ao(t),
    l = Ze(i),
    u = (0, K.useCallback)(() => {
      if (i) {
        let e = i.appid;
        (i.related_items?.parent_appid &&
          i.type != 11 &&
          (e = i.related_items.parent_appid),
          gt(window, `steam://run/${e}`));
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
          className: M(Hv, n),
          children: (0, q.jsxs)(`span`, {
            children: [` `, P.Localize(`#Sale_ReserveExhausted`)],
          }),
        });
    } else if (d && i.included_appids && i.included_appids.length > 1)
      return null;
  }
  if (i.item_type == 0) {
    if ((a.is_coming_soon && !o.packageid) || (c && i.type === 10)) return null;
    if (!c && o.is_free_to_keep) {
      if (I.IN_CLIENT || hn() != `store`) {
        let e = `${I.IN_CLIENT ? `steam://openurl/` : ``}${l}`;
        return (0, q.jsx)(`div`, {
          onClick: (t) => gt(t, e),
          className: M(Vv, n),
          children: (0, q.jsx)(`span`, {
            children: P.Localize(`#EventDisplay_CallToAction_VisitStore`),
          }),
        });
      }
      {
        let e = Cn(`${I.STORE_BASE_URL}freelicense/addfreelicense`, r);
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
              value: gr(),
            }),
            (0, q.jsx)(`button`, {
              className: M(Vv, n),
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
        (0, q.jsx)(`div`, {
          className: M(Vv, n),
          onClick: u,
          children: (0, q.jsx)(`span`, { children: e }),
        })
      );
    }
    if (o.formatted_final_price == ``)
      return (0, q.jsx)(`a`, {
        href: l,
        className: M(Vv, n),
        children: P.Localize(`#EventDisplay_CallToAction_VisitStore`),
      });
  }
  return (0, q.jsx)(Wv, {
    className: n,
    storeItemBestPurchaseOption: o,
    storeItemDefaultData: i,
  });
}
function Wv(e) {
  let {
      className: t,
      storeItemBestPurchaseOption: n,
      storeItemDefaultData: r,
    } = e,
    i = sr(),
    { mutate: a } = kv(n?.packageid, n?.bundleid, !1, void 0, i.feature);
  return (0, q.jsx)(`div`, {
    className: M(Vv, t),
    onClick: () => a(),
    children: (0, q.jsx)(`span`, { children: P.Localize(`#Store_AddToCart`) }),
  });
}
var Gv = `_8xhMURZRDBY-`;
function Kv(e) {
  let { id: t, className: n } = e,
    { data: r } = V(t);
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
  if (L.IN_MOBILE_WEBVIEW) {
    if (o && a) {
      let e = r.type === 1 ? r.appid : i[0];
      return (0, q.jsx)(`div`, {
        className: n,
        children: (0, q.jsx)(pk, { appid: e }),
      });
    }
    return null;
  }
  return !o && a && r.is_free
    ? (0, q.jsx)(Uv, { id: t, className: n })
    : (0, q.jsx)(An, {
        toolTipContent: s,
        onClick: (e) => {
          (e.preventDefault(),
            e.stopPropagation(),
            o && U_(r.type === 1 ? r.appid : i[0], r.name));
        },
        className: M(n, Gv, !o && `gpIFsnR2ZGs-`),
        children: o
          ? P.Localize(`#Sale_InstallDemo`)
          : P.Localize(`#Sale_DemoNotFound`),
      });
}
function qv(e) {
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
    { data: u } = V(t),
    { data: d } = Gt(t),
    { data: f } = ft(t),
    { bIsOwned: p } = ao(t),
    [m, h] = lg(o, s);
  if (!u) return null;
  let g =
      (u.type === 1 && !d?.is_coming_soon) ||
      (u.related_items?.demo_appid && u.related_items?.demo_appid.length > 0),
    _ = si(u.type),
    v = n && _ && g,
    y = null;
  if (!p && f?.is_free_to_keep && f?.free_to_keep_ends) {
    let e = f.free_to_keep_ends,
      t = F(
        `#Sale_default_label_Free_Promo_Description_Short`,
        Qn(e) + ` @ ` + vr(e, { bForce24HourClock: !1 }),
      );
    y = (0, q.jsxs)(`div`, {
      className: Uu,
      children: [
        t,
        (0, q.jsx)(rr, {
          tooltip: F(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, q.jsxs)(`div`, {
    className: M(mu, c),
    children: [
      y,
      (0, q.jsxs)(`div`, {
        className: Nu,
        children: [
          !!v && (0, q.jsx)(Kv, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            u.type !== 1 &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                !(!r || u.is_free) &&
                  (0, q.jsx)(Jv, { fnOnPurchaseOptionsClick: i }),
                !(!l || u.is_free) &&
                  (0, q.jsx)(Uv, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, q.jsx)(kg, { id: t }),
          m && (0, q.jsx)(Zh, { id: t, compatibility: h }),
        ],
      }),
    ],
  });
}
function Jv(e) {
  return (0, q.jsx)(`div`, {
    className: Pu,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, q.jsx)(`span`, {
      children: F(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Yv(e, t, n, r, i, a) {
  if (!n) return;
  if (!cg(e.item_type)) {
    et(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let o = Cn(`${Ol(e, r)}${i ? `?${i}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = ar(e) || window;
      a ? a(e) : o.startsWith(`steam://`) || (t.location.href = Qt(o));
    },
    onOKActionDescription: P.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function Xv(e) {
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
    _ = vg(t, n),
    [v, y] = (0, K.useState)(!1),
    b = sr(),
    { data: x, isPending: ee } = ur(_),
    { data: S } = ft(_),
    { data: te } = Gt(_),
    { data: ne } = $a(),
    re = fc(_),
    ie = (0, K.useRef)(null),
    [ae, oe] = (0, K.useState)(!1),
    se = Nt(),
    [ce, le] = (0, K.useState)(!1);
  ((0, K.useEffect)(() => {
    if (!ce) {
      y(!1);
      return;
    }
    let e = window.setTimeout(() => y(!0), 500);
    return () => window.clearTimeout(e);
  }, [ce]),
    (0, K.useEffect)(() => {
      ie.current && oe(ie.current.offsetWidth < 370);
    }, [ie]));
  let ue = (0, K.useMemo)(
      () => (i && x && El(x) ? { appid: Dl(x)[0] } : _),
      [i, _, x],
    ),
    { strStoreURL: de, snr: fe } = q_(x, i);
  if (!x)
    return ee
      ? (0, q.jsx)(O_, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let pe = x.included_appids?.length || 0,
    me = x.included_appids?.filter((e) => ne?.has(e))?.length || 0,
    he = x.item_type == 2 && !!S?.must_purchase_as_set,
    ge = !c && pe > 1,
    _e = x.item_type == 1 && pe == 1,
    ve = x.item_type == 0 || _e,
    ye = _e && x.appid,
    be = x.name || ``,
    xe = Qd(te, S),
    Se = se || !te?.is_coming_soon || xe,
    [Ce, we] = lg(d, f);
  return (0, q.jsxs)(Jr, {
    className: M({ [Cd]: !0, [void 0]: l, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: Tt.PREFERRED_CHILD,
    autoFocus: p,
    navKey: `preview_widget_` + wt(_),
    children: [
      (0, q.jsx)(ug, {
        appid: ve && `appid` in _ ? _.appid : void 0,
        children: (0, q.jsxs)(zt, {
          onClick: h ? m : void 0,
          className: M({ [Ul]: !0, [Gl]: !0, [Jl]: h }),
          ...Yv(x, b, se, !!i, void 0, m),
          preferredFocus: ge,
          onFocusWithin: se ? le : void 0,
          children: [
            (0, q.jsx)(`div`, {
              className: M(Xl),
              children: (0, q.jsx)(Zv, {
                id: ue,
                strURL: de,
                children: (0, q.jsxs)(`div`, {
                  className: nu,
                  children: [
                    (0, q.jsx)(qg, { appids: re }),
                    (0, q.jsx)(jd, {
                      id: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: g,
                    }),
                    (0, q.jsx)(fp, { id: _ }),
                    (0, q.jsx)(Hd, {
                      id: _,
                      active: _ && v,
                      bIsHoverMode: !0,
                      eGrowOnActivate: se
                        ? void 0
                        : Vd.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: M({ [Yl]: !0, [Su]: ge }),
              children: [
                !(!ve || m) &&
                  (0, q.jsx)(Zp, {
                    id: _,
                    classOverride: M(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: fe,
                  }),
                (0, q.jsx)(`div`, {
                  className: lu,
                  children: (0, q.jsx)(`a`, {
                    href: m ? void 0 : de,
                    target: I.IN_CLIENT ? void 0 : `_blank`,
                    onClick: m,
                    children: (0, q.jsx)(`div`, {
                      className: M(Zl, `StoreSaleWidgetTitle`),
                      children: be,
                    }),
                  }),
                }),
                !ge && (0, q.jsx)(j_, { id: _ }),
                (0, q.jsxs)(`div`, {
                  className: Cu,
                  ref: ie,
                  children: [
                    ve && (0, q.jsx)(Qv, { id: _ }),
                    !ge &&
                      !s &&
                      _ &&
                      (0, q.jsxs)(q.Fragment, {
                        children: [
                          (0, q.jsx)(Eg, {
                            id: _,
                            bMinimizePlatforms: ae,
                            bHideWindows: ae,
                          }),
                          !!(Ce && x.item_type == 0) &&
                            (0, q.jsx)(xf, {
                              eHWCompat: we,
                              className: `tUIs-i3NWoU-`,
                              id: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !ge &&
                  u &&
                  _ &&
                  (0, q.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, q.jsx)(Hp, { id: _ }),
                  }),
                ge &&
                  _ &&
                  (0, q.jsx)(wg, {
                    id: _,
                    bHideInLibraryApps: !he && x.item_type == 2 && me < pe,
                  }),
                !!ve && (0, q.jsx)($v, { id: _ }),
                m
                  ? (0, q.jsx)(`div`, {
                      className: mu,
                      children: (0, q.jsx)(`div`, {
                        className: Nu,
                        children: (0, q.jsx)(kg, { id: _ }),
                      }),
                    })
                  : (0, q.jsx)(q.Fragment, {
                      children:
                        o && ve && ye
                          ? (0, q.jsx)(K_, { appid: ye, bIsMuted: !!v })
                          : (0, q.jsx)(qv, {
                              id: _,
                              bShowDemoButton: r,
                              bHidePrice: a,
                              bHideWishlistButton: Se,
                              eHardwareCompatibilityDisplay: we,
                            }),
                    }),
                (0, q.jsx)(`div`, {
                  className: gu,
                  children: (0, q.jsx)(jd, {
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
function Zv(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, q.jsxs)(gg, { id: t, children: [r, ` `] })
    : (0, q.jsx)(`a`, { href: n, children: r });
}
function Qv(e) {
  let { id: t } = e,
    { data: n } = Gt(t);
  return n ? (0, q.jsx)(`div`, { className: Tu, children: Jd(n) }) : null;
}
function $v(e) {
  let { id: t } = e,
    { data: n } = ur(t),
    { data: r } = ft(t),
    { data: i } = ht(t),
    { data: a } = $a();
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
          ? F(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? F(`#Sale_BundleSave_WithDiscount`, o, s)
            : F(`#Sale_BundleSave`, s)),
    (0, q.jsx)(`div`, {
      className: M(Ou, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, q.jsx)(`span`, {
              className: Dd,
              children: Ir(
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
function ey(e) {
  let {
      id: t,
      bPreferLibrary: n,
      bPreferAssetWithoutOverride: r,
      bNoShadow: i,
    } = e,
    a = i ? ad : ``,
    { storeItemDefaultInfo: o, storeItemAsset: s } = rD(t, `vertical`, r),
    [c, l] = K.useState(0);
  if (!o || !s) return (0, q.jsx)(`div`, { className: id });
  let { strStoreVerticalURL: u, strLibraryVerticalURL: d } = Nd(s, o);
  if (u && (!n || !d))
    return (0, q.jsxs)(`div`, {
      className: M(id, `HeroCapsuleImageContainer`),
      children: [
        (0, q.jsx)(`img`, { src: u, className: cd, alt: o.name }),
        o.type == 4 &&
          (0, q.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${L.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (d)
    return (0, q.jsxs)(`div`, {
      className: M(_u, od, n ? sd : ``, a),
      children: [
        (0, q.jsx)(`div`, {
          className: vu,
          style: { backgroundImage: `url(${d})` },
        }),
        (0, q.jsx)(`img`, { src: d, className: cd, alt: o.name }),
      ],
    });
  let f = Md(s, !0),
    p = f.length - 1,
    m = (e) => {
      let t = f.indexOf(e);
      t >= p && t < f.length - 1 && l(t + 1);
    };
  if (c < f.length) {
    let e = f[c];
    return (0, q.jsxs)(`div`, {
      className: M(_u, a),
      children: [
        (0, q.jsx)(`div`, {
          className: vu,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, q.jsx)(Vl, {
          lazyLoad: !0,
          srcs: f,
          className: cd,
          alt: o.name,
          onImageError: m,
        }),
      ],
    });
  }
  return (0, q.jsx)(`div`, { className: id });
}
var Q = {};
((Q.arabic = () =>
  N(() => import(`./chunk~c5d4d9f487.js`), [], import.meta.url)),
  (Q.brazilian = () =>
    N(() => import(`./chunk~5b14e15845.js`), [], import.meta.url)),
  (Q.bulgarian = () =>
    N(() => import(`./chunk~e6804a7c39.js`), [], import.meta.url)),
  (Q.czech = () =>
    N(() => import(`./chunk~011b02a705.js`), [], import.meta.url)),
  (Q.danish = () =>
    N(() => import(`./chunk~bc66c3007c.js`), [], import.meta.url)),
  (Q.dutch = () =>
    N(() => import(`./chunk~49954cb272.js`), [], import.meta.url)),
  (Q.english = () =>
    N(() => import(`./chunk~7c274cb1c2.js`), [], import.meta.url)),
  (Q.finnish = () =>
    N(() => import(`./chunk~b7f3eeb690.js`), [], import.meta.url)),
  (Q.french = () =>
    N(() => import(`./chunk~6bd2940d6a.js`), [], import.meta.url)),
  (Q.german = () =>
    N(() => import(`./chunk~00759a0a90.js`), [], import.meta.url)),
  (Q.greek = () =>
    N(() => import(`./chunk~f06ab35bc3.js`), [], import.meta.url)),
  (Q.hungarian = () =>
    N(() => import(`./chunk~95f40030c1.js`), [], import.meta.url)),
  (Q.indonesian = () =>
    N(() => import(`./chunk~255a7fb0ce.js`), [], import.meta.url)),
  (Q.italian = () =>
    N(() => import(`./chunk~312a3e9f89.js`), [], import.meta.url)),
  (Q.japanese = () =>
    N(() => import(`./chunk~da7a86533d.js`), [], import.meta.url)),
  (Q.koreana = () =>
    N(() => import(`./chunk~5f3cea0129.js`), [], import.meta.url)),
  (Q.latam = () =>
    N(() => import(`./chunk~d3fd903a21.js`), [], import.meta.url)),
  (Q.malay = () =>
    N(() => import(`./chunk~89af101b8a.js`), [], import.meta.url)),
  (Q.norwegian = () =>
    N(() => import(`./chunk~82ce4a17ed.js`), [], import.meta.url)),
  (Q.polish = () =>
    N(() => import(`./chunk~e15e01f79d.js`), [], import.meta.url)),
  (Q.portuguese = () =>
    N(() => import(`./chunk~28b3f0fcc7.js`), [], import.meta.url)),
  (Q.romanian = () =>
    N(() => import(`./chunk~e84382cc61.js`), [], import.meta.url)),
  (Q.russian = () =>
    N(() => import(`./chunk~2b4b48d26d.js`), [], import.meta.url)),
  (Q.sc_schinese = () =>
    N(() => import(`./chunk~5f0c8b3e25.js`), [], import.meta.url)),
  (Q.schinese = () =>
    N(() => import(`./chunk~3d85d70986.js`), [], import.meta.url)),
  (Q.spanish = () =>
    N(() => import(`./chunk~5e9e7a2779.js`), [], import.meta.url)),
  (Q.swedish = () =>
    N(() => import(`./chunk~a8b7dc8234.js`), [], import.meta.url)),
  (Q.tchinese = () =>
    N(() => import(`./chunk~0c230b4590.js`), [], import.meta.url)),
  (Q.thai = () =>
    N(() => import(`./chunk~4a94c13835.js`), [], import.meta.url)),
  (Q.turkish = () =>
    N(() => import(`./chunk~69ffc7ad72.js`), [], import.meta.url)),
  (Q.ukrainian = () =>
    N(() => import(`./chunk~84156208b9.js`), [], import.meta.url)),
  (Q.vietnamese = () =>
    N(() => import(`./chunk~7c06e5ece9.js`), [], import.meta.url)));
async function ty(e) {
  if (Q[e]) return await Q[e]();
}
var ny = Yr(ty);
function ry(e) {
  let { closeModal: t, strDescOverride: n } = e;
  return (0, q.jsx)(vn, {
    strTitle: ny.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: n || ny.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: P.Localize(`#Button_OK`),
    onOK: () => {
      (kl(), t());
    },
  });
}
function iy(e) {
  let [t, n, r] = wr();
  return {
    elDialogElement: (0, q.jsx)(on, {
      active: t,
      children: (0, q.jsx)(ry, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function ay(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = iy(n);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(ri, {
        onClick: i,
        children: t || P.Localize(`#Login_SignIn`),
      }),
      r,
    ],
  });
}
var oy =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  sy = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  cy = [
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
  ly = oy.filter((e) => !cy.includes(e)),
  uy = [
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
function dy(e) {
  let { bIncludeMedia: t = !1, bIncludeValveOnly: n = !1 } = e,
    r = new Set();
  return (
    t || cy.forEach((e) => r.add(e)),
    n || uy.forEach((e) => r.add(e)),
    oy.filter((e) => !r.has(e))
  );
}
var fy = void 0;
function py(e) {
  return e
    ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`)
    : ((fy ||= py(oy)), fy);
}
function my(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + py(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function hy(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + py(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var gy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            active: { n: 2, br: O.readBool, bw: E.writeBool },
            start_time: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            end_time: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            app_discounts: { n: 5, c: _y, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            groups: { n: 7, c: vy, r: !0, q: !0 },
            internal_name: { n: 8, br: O.readString, bw: E.writeString },
            localization: { n: 9, c: yy },
            reveal_time: { n: 10, br: O.readUint32, bw: E.writeUint32 },
            release_date_min: { n: 11, br: O.readUint32, bw: E.writeUint32 },
            winner_appid: { n: 12, br: O.readUint32, bw: E.writeUint32 },
            flag: { n: 13, br: O.readEnum, bw: E.writeEnum },
            release_date_max: { n: 14, br: O.readUint32, bw: E.writeUint32 },
            item_type: { n: 15, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  _y = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            discount: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  vy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            group_name: { n: 2, br: O.readString, bw: E.writeString },
            app_discounts: { n: 3, c: _y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  yy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: O.readString, bw: E.writeString },
            title_linebreak: { n: 2, br: O.readString, bw: E.writeString },
            title_award: { n: 3, br: O.readString, bw: E.writeString },
            award_description: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  by = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: O.readString, bw: E.writeString },
            sale_appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  xy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: gy, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  Sy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            communityitemid: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  Cy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  wy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: Sy, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  Ty = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            sale_appid: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Ey = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: Sy, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  Dy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            last_updated: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Oy = class e extends G.Message {
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
  ky = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Dy, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  Ay = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            code: { n: 2, br: O.readFixed64String, bw: E.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  jy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            nominated_id: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            source: { n: 3, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  My = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Dy, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  Ny = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  Py = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: Fy, r: !0, q: !0 },
            suggested_events: { n: 2, c: Iy, r: !0, q: !0 },
            suggested_apps: { n: 3, c: Ly, r: !0, q: !0 },
            debug_query: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  Fy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            playtime: { n: 2, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Iy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            event_gid: {
              n: 2,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            appid: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  Ly = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Ry = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: O.readBool, bw: E.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  zy = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: O.readFixed64String, bw: E.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  By;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, U(by, t, n), xy, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, U(Ty, t, n), Ey, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, U(Cy, t, n), wy, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserVotes = r;
})((By ||= {}));
var Vy;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, U(Oy, t, n), ky, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, U(Ay, t, n), ky, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, U(jy, t, n), My, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      U(Ny, t, n),
      Py,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, U(Ry, t, n), zy, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetNominationShareLink = a;
})((Vy ||= {}));
var Hy = [`show`, `hide`, `remove`],
  Uy = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  };
function Wy(e) {
  return e !== 28;
}
function Gy(e) {
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
function Ky(e, t) {
  return !(e == 12 || e == 36 || (t && t.indexOf(`curator`) != -1));
}
function qy(e) {
  return [14, 10, 15, 32].includes(e);
}
function Jy(e) {
  let t = `#PartnerEvent_` + e,
    n = P.Localize(t);
  return n == t ? P.Localize(`#PartnerEvent_Other`) : n;
}
var Yy = { bScheduleEnabled: !1, scheduleEntries: [] };
z(
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
var Xy = 1e4,
  Zy = 99999;
function Qy() {
  return Math.floor(Xy + Math.random() * 9e4);
}
var $y = `exploration`,
  eb = (function (e) {
    return ((e.Random = `r`), (e.Personalized = `p`), e);
  })({});
function tb(e) {
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
function nb(e) {
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
var rb = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
function ib(e) {
  return (
    rb.some((t) => t == e.GetEventType()) &&
    !e.BHasTag(`steam_award_nomination_request`) &&
    !e.BHasTag(`curator`)
  );
}
var ab = [20, 31, 34];
function ob(e) {
  return !ab.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var sb = [12, 34];
function cb(e) {
  return !sb.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var lb = 593110,
  ub = 221410,
  db = 1675200,
  fb = 4165890,
  pb = [lb, 766, ub],
  mb = [12, 34];
function hb(e) {
  return !mb.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
function gb(e, t = We()) {
  let n = 60 * Fr.PerDay;
  return (
    e.BIsVisibleEvent(t) &&
    e.BIsOGGEvent() &&
    (e.rtime32_last_modified ?? 0) > t - n &&
    !_b(e)
  );
}
function _b(e) {
  return e.BHasTag(`mod_reviewed`) && !e.BHasTag(`mod_require_rereview`);
}
var vb = (function (e) {
  return (
    (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    e
  );
})({});
function yb(e) {
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
var bb = `bordered`,
  xb = (function (e) {
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
  Sb = (function (e) {
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
  Cb = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  wb = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function Tb(e) {
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
var Eb = (function (e) {
    return (
      (e.Steam = `Steam`),
      (e.Facebook = `Facebook`),
      (e.Twitter = `Twitter`),
      (e.Reddit = `Reddit`),
      e
    );
  })({}),
  Db = (function (e) {
    return (
      (e.Summary = `summary`), (e.SummaryLargeImage = `summary_large_image`), e
    );
  })({}),
  Ob =
    `sale_tag_filter.store_filter.smart_section_type.smart_section_tag.smart_section_category.smart_section_max_apps.smart_section_event_tags.smart_section_deck_compatibility.smart_section_data_source.smart_section_personalized_carousel_sort.smart_section_personalized_carousel_min_items.smart_section_personalized_carousel_randomize.smart_section_filter_by_deck_compatibility.smart_section_creator_listid.smart_section_min_discount_percent.smart_section_include_packages.smart_section_include_bundles.smart_section_include_dlc.random_from_entire_set.prioritize_discounts.store_item_filter_require_discount.store_item_filter_require_coming_soon.store_item_filter_require_released.store_item_filter_require_free.store_item_filter_require_demo.store_item_filter_require_playtest`.split(
      `.`,
    );
function kb(e) {
  return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
}
function Ab(e) {
  return e.carousel_rows || 1;
}
function jb(e) {
  return e.cap_item_count || 0;
}
function Mb(e) {
  return e.cap_section_row_count && e.cap_section_row_count > 0
    ? e.cap_section_row_count
    : e.section_type == `trailercarousel`
      ? 1
      : e.cap_section_content
        ? 4
        : 0;
}
function Nb(e) {
  return e?.store_filter ? JSON.stringify(e.store_filter) : void 0;
}
function Pb(e) {
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
function Fb(e) {
  switch (e) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function Ib(e) {
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
function Lb(e, t = !1) {
  return !e || !Ib(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function Rb(e) {
  return Lb(e) ? e?.smart_section_type : void 0;
}
function zb(e) {
  return (
    (e.jsondata.sale_ml_recommender_delay_hours &&
      (e.startTime ?? 0) +
        e.jsondata.sale_ml_recommender_delay_hours * Fr.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
var Bb = 2.5;
function Vb(e, t, n) {
  return !e.BIsNextFest() || !Pb(t.section_type)
    ? !1
    : n == eb.Random || zb(e) > 0;
}
function Hb(e, t, n, r) {
  if (!t.next_fest_exploration_visibility || !e.BIsNextFest()) return !1;
  switch (t.next_fest_exploration_visibility) {
    case `show-only-personalized`:
      return r != eb.Personalized;
    case `show-only-personalized-available`:
      return !n;
    case `show-only-personalized-unavailable`:
      return n;
  }
  return !1;
}
function Ub(e, t, n) {
  return !!(t.use_random_order || Vb(e, t, n));
}
var Wb = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function Gb(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= H(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      Tb(t),
      (e.sale_sections[n] = { ...Wb, ...t }));
  });
}
var Kb = { internal_type: `subscription_pricing` },
  qb = (function (e) {
    return (
      (e[(e.k_ETaggedItems = 0)] = `k_ETaggedItems`),
      (e[(e.k_EContentHub = 1)] = `k_EContentHub`),
      e
    );
  })({});
function Jb(e) {
  return {
    arrowFill: e?.sale_carousel_arrow_color,
    arrowStyle: e?.sale_carousel_arrow_style,
    breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: e?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
  };
}
function Yb(e, t, n) {
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
var Xb = {
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
    ...Uy,
    ...Yy,
  },
  Zb = `old_announce_`,
  Qb = `hide_from_events_and_discount`;
function $b(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? F(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? F(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? F(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? F(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? F(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? F(`#PartnerEvent_MM_MajorUpdate`)
              : Jy(e);
}
var ex = [
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
  tx = [
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
  nx = [20, 31, 34],
  rx = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  ix = [_n.k_ESteamRealmGlobal],
  ax = [_n.k_ESteamRealmChina],
  ox = [_n.k_ESteamRealmGlobal, _n.k_ESteamRealmChina],
  sx = [],
  $ = class e {
    constructor() {
      p(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new w();
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
    jsondata = Xb;
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
        (n.clanSteamID = new w(r.clanSteamID)),
        et(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new w(r.broadcaster)),
          et(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        Gb(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new w(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        Gb(r.jsondata),
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
          (r.broadcaster = w.InitFromAccountID(
            t.broadcaster_accountid,
            L.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new w(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = w.InitFromClanID(
              Number(t.announcement_body.clanid),
              L.EUNIVERSE,
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
          ? new w(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              ex.includes(e) && n.vecTags.push(e);
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
    GetDayIndexFromEventStart(e = We()) {
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
      let t = At.GetELanguageFallback(e);
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
          At.IsELanguageValidInRealm(e, _n.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          At.IsELanguageValidInRealm(e, _n.k_ESteamRealmChina))
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
            : e === `sale_cross_promo_logo`
              ? (t = this.jsondata.localized_sale_cross_promo_logo_image)
              : ml.includes(e)
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
                              this.jsondata
                                .localized_store_app_spotlight_mobile);
      return t;
    }
    GetImageURL(e, t = 0, n = pl.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? fl.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
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
          ? L.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? L.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : L.COMMUNITY_BASE_URL +
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
        : L.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = We()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = We()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = Rn(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = Rn(this.nVotesDown + t, 0, 2 ** 53 - 1));
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
            if (r.length != 0) return fl.ReplacementTokenToClanImageURL(r);
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
        let r = At.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = At.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = At.GetELanguageFallback(t);
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
    BIsVisibleEvent(e = We()) {
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
    BIsEventActionEnabled(e = We()) {
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
        ? Or.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        Or.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        Or.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return Or.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = my(e, [
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
          (e = hy(e, [`p`], ` `)),
          (e = hy(e)),
          (e = Je(e)),
          Ge(e, t || 180));
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
      if (!this.jsondata.library_spotlight || nx.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (rx.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + Fr.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = We()) {
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
        Or.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        F(
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
          w.InitFromAccountID(e, L.EUNIVERSE).ConvertTo64BitString(),
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
          L.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          L.STORE_BASE_URL +
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
            ? L.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? L.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? L.STORE_BASE_URL + `tags/` + (wn() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? L.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? L.STORE_BASE_URL + `genre/Early%20Access/`
                    : L.STORE_BASE_URL + e.type
          : L.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && Tl(t, n) ? e + `sale/` + r : L.STORE_BASE_URL + wl(t, r, n);
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
        c = Zy + 10;
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
        et(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (Pb(t.section_type))
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
      return Jy(this.type);
    }
    GetCategoryAsString(e) {
      return $b(this.type, this.vecTags, e);
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
        et(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? ox : e ? ix : t ? ax : sx
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new w(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && W.is_valve_email
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
(z([g], $.prototype, `GID`, void 0),
  z([g], $.prototype, `AnnouncementGID`, void 0),
  z([g], $.prototype, `forumTopicGID`, void 0),
  z([g], $.prototype, `type`, void 0),
  z([g], $.prototype, `appid`, void 0),
  z([g], $.prototype, `name`, void 0),
  z([g], $.prototype, `description`, void 0),
  z([g], $.prototype, `timestamp_loc_updated`, void 0),
  z([g], $.prototype, `startTime`, void 0),
  z([g], $.prototype, `endTime`, void 0),
  z([g], $.prototype, `visibilityStartTime`, void 0),
  z([g], $.prototype, `visibilityEndTime`, void 0),
  z([g], $.prototype, `m_nBuildID`, void 0),
  z([g], $.prototype, `m_strBuildBranch`, void 0),
  z([g], $.prototype, `postTime`, void 0),
  z([g], $.prototype, `visibility_state`, void 0),
  z([g], $.prototype, `broadcaster`, void 0),
  z([g], $.prototype, `jsondata`, void 0),
  z([g], $.prototype, `nCommentCount`, void 0),
  z([g], $.prototype, `nVotesUp`, void 0),
  z([g], $.prototype, `nVotesDown`, void 0),
  z([g], $.prototype, `bOldAnnouncement`, void 0),
  z([g], $.prototype, `announcementClanSteamID`, void 0),
  z([g], $.prototype, `loadedAllLanguages`, void 0),
  z([g], $.prototype, `bLoaded`, void 0),
  z([g], $.prototype, `deleteInProgress`, void 0),
  z([g], $.prototype, `vecTags`, void 0),
  z([g], $.prototype, `last_update_steamid`, void 0),
  z([g], $.prototype, `rtime32_last_modified`, void 0),
  z([g], $.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  z([g], $.prototype, `rtime32_last_local_modification`, void 0),
  z([g], $.prototype, `rtime32_moderator_reviewed`, void 0),
  z([g], $.prototype, `video_preview_type`, void 0),
  z([g], $.prototype, `video_preview_id`, void 0),
  z([g], $.prototype, `m_overrideCurrentDay`, void 0));
function cx(e) {
  if (e) return e?.replace(/[()]/g, `\\$&`);
}
var lx = class e extends G.Message {
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
  ux = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ignore_list || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ignore_list: { n: 1, c: dx, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response`;
    }
  },
  dx = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            packageid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            reason: { n: 3, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStorePreferences_GetIgnoreList_Response_IgnoreListEntry`;
    }
  },
  fx;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StorePreferences.GetIgnoreList#1`, U(lx, t, n), ux, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetIgnoreList = t;
})((fx ||= {}));
var px = class e {
  m_queryClient = bn;
  m_boxCacheVersion = g.box(0);
  m_bInitialized = !1;
  m_boxAjaxInFlight = g.box(!1);
  LazyInit() {
    this.m_bInitialized ||
      ((this.m_bInitialized = !0),
      this.m_queryClient.getQueryCache().subscribe((e) => {
        (e?.type == `added` || e?.type == `updated` || e?.type == `removed`) &&
          yo(e.query?.queryKey) &&
          i(() => this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1));
      }));
  }
  ReadData() {
    return (
      this.LazyInit(), this.m_boxCacheVersion.get(), wo(this.m_queryClient)
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
    return this.ReadData().setCuratorsFollowed.has(mx(e));
  }
  BIsIgnoringCurator(e) {
    return this.ReadData().setCuratorsIgnored.has(mx(e));
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
    return (this.LazyInit(), await Eo(this.m_queryClient), this);
  }
  async UpdateFollowOrIgnoreCurator(e, t, n) {
    this.LazyInit();
    let r =
        I.STORE_BASE_URL + `curators/` + (t ? `ajaxfollow/` : `ajaxignore/`),
      i = e.GetAccountID(),
      a = new FormData();
    (a.append(`clanid`, `` + i),
      a.append(`sessionid`, gr()),
      a.append(t ? `follow` : `ignore`, n ? `1` : `0`));
    let o = await Sl.default.post(r, a, { withCredentials: !0 });
    return (
      o &&
        o.status == 200 &&
        (this.InvalidateCache(),
        Do(this.m_queryClient, (e) => {
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
    let a = I.STORE_BASE_URL + `recommended/ignorerecommendation`,
      o = new FormData();
    (o.append(`sessionid`, gr()),
      o.append(`appid`, `` + e),
      o.append(`remove`, t ? `0` : `1`),
      o.append(`snr`, n),
      o.append(`ignore_reason`, `` + r));
    try {
      i(() => this.m_boxAjaxInFlight.set(!0));
      let n = await Sl.default.post(a, o, { withCredentials: !0 });
      return (
        n &&
          n.status == 200 &&
          (this.InvalidateCache(),
          Do(this.m_queryClient, (n) => {
            let i = new Map(n.mapIgnoredApps);
            return (
              t ? i.set(Number(e), r) : i.delete(Number(e)),
              { mapIgnoredApps: i }
            );
          })),
        n.data
      );
    } catch (e) {
      let t = ti(e);
      console.error(`UpdateAppIgnore`, t.strErrorMsg, t);
    } finally {
      i(() => this.m_boxAjaxInFlight.set(!1));
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
      return (i && (e = In.ParseSNR(i)), window.AddItemToCart(t, a, e), !0);
    }
    let s = new FormData();
    (s.append(`action`, `add_to_cart`),
      a ? s.append(`bundleid`, a.toString()) : s.append(`subid`, `` + t),
      i && s.append(`snr`, i),
      s.append(`sessionid`, gr()),
      s.append(`quantity`, `1`));
    let c = ar(e);
    e.preventDefault();
    try {
      (await Sl.default.post(n, s, { withCredentials: !0 }),
        this.InvalidateCache(),
        o?.fnSetURL ? o.fnSetURL(r) : (c.location.href = r));
    } catch (e) {
      return (console.log(`HandleOnAddToCart`, e), !1);
    }
    return !0;
  }
  InvalidateCache() {
    Xa();
  }
  static s_globalSingletonStore;
  static Get() {
    return ((e.s_globalSingletonStore ||= new e()), e.s_globalSingletonStore);
  }
  static BConfirmedAdultContentAgeGate() {
    return mo();
  }
  constructor() {}
};
function mx(e) {
  return typeof e == `object` && `GetAccountID` in e
    ? e.GetAccountID()
    : Number(e);
}
function hx() {
  let { isPending: e } = Co();
  return [e, px.Get()];
}
var gx = `yFKurY5xd-8-`,
  _x = `x-jXNI-s184-`,
  vx = `aG-OF9IYlE8-`,
  yx = `Ef8xOk5PJbg-`,
  bx = `zhuLkiDPnzg-`,
  xx = `RTkq2WI2bK4-`,
  Sx = `_4vRcmVJ4gN8-`,
  Cx = `_9fTa0lmYa50-`,
  wx = `_3FDFuSiCh1s-`,
  Tx = `G7E1sJby9GI-`,
  Ex = `eEhfnGythD0-`,
  Dx = `qtB6DnXH-bs-`,
  Ox = `hBOvJNgGqZc-`,
  kx = `TsekNW90qyQ-`,
  Ax = `tF-0HvIRqgQ-`,
  jx = `_0EeL7NnvnjU-`,
  Mx = `L-E-bGfH1Sw-`,
  Nx = `-pV6HCIaaqM-`,
  Px = `_4CGdt38X5eY-`,
  Fx = `IC4k3Gish5g-`,
  Ix = `MUbRKQFMT7E-`,
  Lx = {
    Header1: gx,
    Header2: _x,
    Header3: vx,
    Link: yx,
    LinkHost: bx,
    LinkButton: xx,
    LinkPill: Sx,
    UnorderedList: Cx,
    OrderedList: wx,
    StoreWidget: Tx,
    MedalTVWidget: Ex,
    LoyaltyRewardCtn: Dx,
    SaleSectionCtn: Ox,
    SaleTextCtn: kx,
    ReminderCtn: Ax,
    BlockQuote: jx,
    SocialLink: Mx,
    SocialIcon: Nx,
    LocalizeBlock: Px,
    CheckMark: Fx,
    ScreenshotCarousel: Ix,
  };
function Rx(e) {
  let t = x(),
    n = Jn();
  return f(zx(t, n, e)).data ?? void 0;
}
function zx(e, t, n) {
  return {
    queryKey: Bx(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let r = n.appid
          ? await e.ensureQueryData($r(t, { appid: n.appid }))
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
              `${L.STORE_ITEM_BASE_URL}${r.all_ages_screenshots[e].filename}`
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
function Bx(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function Vx(e, t, n, r = pl.full, i = !0) {
  let a = x(),
    o = Jn();
  return f(Ux(a, o, e, t, n, r, i)).data ?? void 0;
}
function Hx(e, t, n, r = pl.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function Ux(e, t, n, r, i, a = pl.full, o = !0) {
  return {
    queryKey: Hx(n, r, i, a, o),
    enabled: !!n?.GID,
    initialData: () => Wx(n, r, i, a, o),
    queryFn: async () => {
      if (!n) return null;
      let s = Wx(n, r, i, a, o);
      if (s) return s;
      let c = await e.ensureQueryData(be(n.clanSteamID.GetAccountID(), e));
      if (r == `capsule`) {
        let r = n.appid;
        if (!r && c && ((c.is_creator_home && !c.is_ogg) || c.is_curator)) {
          if (n.jsondata?.referenced_appids?.length)
            r = n.jsondata.referenced_appids[0];
          else return c.avatar_full_url ?? null;
        }
        let i = await e.ensureQueryData(Tr(t, { appid: r }));
        return i
          ? (Ae(i, `main_capsule`) ?? null)
          : c?.avatar_full_url
            ? c.avatar_full_url
            : `${L.STORE_ITEM_BASE_URL}steam/apps/${r}/header.jpg`;
      }
      return r == `background` &&
        c &&
        ((c.is_creator_home && !c.is_ogg) || c.is_curator)
        ? (c.creator_page_bg_url ?? null)
        : await e.ensureQueryData(zx(e, t, n));
    },
  };
}
function Wx(e, t, n, r = pl.full, i = !0) {
  if (!e) return;
  let a = e.GetImageURL(t, n, r);
  if (a && a.trim().length > 0) return a;
  let o = At.GetELanguageFallback(n);
  if (n != o) {
    let n = e.GetImageURL(t, o, r);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(n, Number.MAX_VALUE);
    if (t && (i || dr(t))) return t;
  }
}
function Gx(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function Kx(e) {
  return Gx(e) ? Zb + e.announcement_body?.gid : e.gid;
}
function qx(e, t) {
  let n = new $();
  if (
    ((n.clanSteamID = e),
    et(
      n.clanSteamID && n.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        n.clanSteamID.ConvertTo64BitString() +
        ` ` +
        I.EUNIVERSE,
    ),
    (n.GID = Kx(t)),
    (n.bOldAnnouncement = Gx(t)),
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
      (n.announcementClanSteamID = new w(e.clanid)),
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
  t.broadcaster_accountid && (n.broadcaster = new w(t.broadcaster_accountid));
  let r = Xb;
  try {
    n.jsondata = { ...r, ...(t.jsondata ? JSON.parse(t.jsondata) : void 0) };
  } catch (e) {
    let t = ti(e);
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
    ((n.jsondata.localized_capsule_image = H(
      n.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_title_image = H(
      n.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_subtitle = H(
      n.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (n.jsondata.localized_summary = H(
      n.jsondata.localized_summary || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_title = H(
      n.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_left_image = H(
      n.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_right_image = H(
      n.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_header = H(
      n.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_overlay = H(
      n.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_banner = H(
      n.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_mobile_banner = H(
      n.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_logo = H(
      n.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    n.jsondata.sale_num_headers !== void 0 &&
      n.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
      n.jsondata.localized_per_day_sales_header[e] = H(
        n.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    Gb(n.jsondata),
    n.jsondata.email_setting &&
      n.jsondata.email_setting.sections &&
      n.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = H(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = H(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = H(e.localized_image, 32, null)));
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
        ? vb.k_EEventStateUnlisted
        : t.hidden
          ? vb.k_EEventStateStaged
          : vb.k_EEventStateVisible
      : vb.k_EEventStateUnpublished),
    n
  );
}
var Jx = `L3HaktJsWWA-`,
  Yx = `YebKQISqLCs-`,
  Xx = `Ct9yU89TArw-`,
  Zx = `_7-cDUja4KeQ-`,
  Qx = `PBXxHejQZTU-`,
  $x = `JX6irDhLeng-`,
  eS = a((e) => {
    let t = ll(e.photo, Dn(L.LANGUAGE)),
      n = t ? (typeof t == `string` ? t : t[1]) : void 0,
      r = !!e.title,
      i = !!e.company;
    return (0, q.jsxs)(`div`, {
      className: Xx,
      onMouseLeave: e.fnClose,
      children: [
        (0, q.jsxs)(`div`, {
          className: Zx,
          children: [
            e.photo && (0, q.jsx)(`img`, { src: n }),
            (0, q.jsxs)(`div`, {
              className: Qx,
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
  tS = class e extends K.Component {
    static sm_embeddedElements = new rn(`presenter-hover-source-elements`);
    m_refAnchor = K.createRef();
    m_fnHidePopup = null;
    m_nScrollPosAtHoverStart = 0;
    ClosePopup() {
      zr() ||
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
          (0, q.jsx)(Zr, {
            ...r,
            children: (0, q.jsx)(eS, { ...this.props, fnClose: this.OnLeave }),
          }),
          i,
        ));
    }
    OnLeave(e) {
      this.ClosePopup();
    }
    render() {
      return (0, q.jsx)(`div`, {
        className: $x,
        ref: this.m_refAnchor,
        onMouseEnter: this.OnHover,
        onFocus: this.OnHover,
        onMouseLeave: this.OnLeave,
        onBlur: this.OnLeave,
        children: this.props.children,
      });
    }
  };
(z([j], tS.prototype, `ClosePopup`, null),
  z([j], tS.prototype, `OnScroll`, null),
  z([j], tS.prototype, `OnHover`, null),
  z([j], tS.prototype, `OnLeave`, null));
function nS(e) {
  let {
      photo: t,
      name: n,
      title: r,
      company: i,
      hidePhotoInCompactView: a,
    } = e,
    o = ll(t, Dn(L.LANGUAGE)),
    s = o && !a ? (typeof o == `string` ? o : o[1]) : null,
    c = !!r,
    l = !!i;
  return (0, q.jsx)(`div`, {
    className: Jx,
    children: (0, q.jsx)(tS, {
      ...e,
      children: (0, q.jsx)(`div`, {
        className: Yx,
        children: (0, q.jsxs)(`div`, {
          className: Zx,
          children: [
            !!s && (0, q.jsx)(`img`, { src: s }),
            (0, q.jsxs)(`div`, {
              className: Qx,
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
var rS = K.createContext({ enabled: !0 });
function iS(e) {
  let { enabled: t, children: n } = e,
    r = K.useMemo(() => ({ enabled: t }), [t]);
  return (0, q.jsx)(rS.Provider, { value: r, children: n });
}
function aS(e) {
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
    l = K.useContext(rS),
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
    _ = (0, q.jsx)(Qe, {
      containerRef: f,
      style: h,
      ...c,
      onVisibilityChange: m,
      trigger: g,
      children: u.bRenderChildren && s,
    });
  return (
    r &&
      (_ = (0, q.jsx)(Jr, {
        focusableIfEmpty: !0,
        style: { height: `100%` },
        children: _,
      })),
    _
  );
}
var oS = t({
    AlbumCoverImage: () => JS,
    AlbumTitle: () => YS,
    AppSummaryWidgetCtn: () => OS,
    CarouselCapsuleAnimated: () => DS,
    CarouselCapsuleBordered: () => ES,
    CarouselDisplay: () => uS,
    CarouselPage: () => sC,
    CarouselSalePageCapsule: () => kS,
    CustomStyle_together: () => NS,
    DefaultCreatorCtn: () => dC,
    DesktopTabs: () => tC,
    DisabledBackground: () => mS,
    EmptySectionPreview: () => US,
    EventSectionViewAllCtn: () => fC,
    HorizontalScrollInDragForceCursor: () => aC,
    Hover: () => bS,
    JumpToButton: () => CS,
    JumpToSection: () => SS,
    JumpedTo: () => xS,
    LinkCapsule: () => WS,
    LoginButton: () => vS,
    MobileTabSelector: () => ZS,
    MobileTabSelectorButton: () => $S,
    MobileTabSelectorDropDown: () => nC,
    MobileTabSelectorOption: () => rC,
    MobileTabSelectorShortcut: () => eC,
    NoTopPadding: () => fS,
    SaleBackground: () => IS,
    SaleBroadcastCtn: () => AS,
    SaleBroadcastSection: () => oC,
    SaleHeaderContainer: () => pS,
    SaleNewSizing: () => PS,
    SaleOuterContainer: () => MS,
    SaleOuterTopMargin: () => jS,
    SaleOverlay: () => TS,
    SaleOverlayCtn: () => wS,
    SalePageBroadcastContextHover: () => qS,
    SalePageLogoSet: () => FS,
    SaleSection: () => lS,
    SaleSectionBackgroundImageGroupEdit: () => pC,
    SaleSectionContainer: () => zS,
    SaleSectionCtn: () => dS,
    SaleSectionLivePreview: () => yS,
    SaleSectionLoginPrompt: () => _S,
    SaleSectionSubtext: () => RS,
    SaleSectionTabListContainer: () => XS,
    SaleSectionTabs: () => hS,
    SaleSectionTitleCtn: () => LS,
    SaleTabLabel: () => uC,
    SaleViewAll: () => gS,
    TabButton: () => lC,
    TabButtonsCtn: () => cC,
    TabContentsContainer: () => iC,
    Visible: () => QS,
    default: () => mC,
    "duration-app-launch": () => sS,
    fullscreen_bg: () => GS,
    fullscreen_bg_video: () => KS,
    narrowWidth: () => cS,
    preview_placeholder_section: () => HS,
    vr_required: () => VS,
    vr_supported: () => BS,
  }),
  sS = `800ms`,
  cS = `500px`,
  lS = `_5uN-ZG0AdmQ-`,
  uS = `_1z-QD5sz6XA-`,
  dS = `BjU45TzF-sA-`,
  fS = `QYv8zbj--Ck-`,
  pS = `fgKHCBFFyCk-`,
  mS = `iZzul86MCHw-`,
  hS = `A3eo6r5OuXY-`,
  gS = `dp33i3JEBBw-`,
  _S = `FyvPogThu-8-`,
  vS = `QSC5IqjmQXQ-`,
  yS = `_4V-KrqNLPmQ-`,
  bS = `_5ogwM4KIkcI-`,
  xS = `Gl6SVCjLh9k-`,
  SS = `d2m-PEeOVmY-`,
  CS = `BxPO-muNnTI-`,
  wS = `aOA-KMNFbEE-`,
  TS = `QYd-JimFMMk-`,
  ES = `_9PVhWUbR3rk-`,
  DS = `giUOrzG6Ujs-`,
  OS = `zct4M8EzfNo-`,
  kS = `FolDBzXMW2I-`,
  AS = `_0pSO3K-0Hs4-`,
  jS = `_9D3431c8-XE-`,
  MS = `G-t-vlNhbRM-`,
  NS = `BFlA7ucDxBk-`,
  PS = `_5NaHSqwUb-k-`,
  FS = `RG63SnOtLk0-`,
  IS = `XuI82j9l9uk-`,
  LS = `_29km0evCwsI-`,
  RS = `pL8IDIWBDg8-`,
  zS = `EbBLppwfKjc-`,
  BS = `EGwn6tH7C3A-`,
  VS = `p8u1MHwjP-M-`,
  HS = `h-z1TiT2EHc-`,
  US = `lVRRRKgBwVY-`,
  WS = `DH6P5MgdIW4-`,
  GS = `v-DWOHY9-II-`,
  KS = `tXTiGEi7jtU-`,
  qS = `v2nIqzREAqo-`,
  JS = `YWSh4uKYrRw-`,
  YS = `rSkuhIlNBLw-`,
  XS = `_9tUDGLmuFv4-`,
  ZS = `_4AjIhoHXOgI-`,
  QS = `Q-Ikm9aXlIY-`,
  $S = `j3KNKPgNrvY-`,
  eC = `_0TmI5Lz4Zkc-`,
  tC = `_6VXiW9d8-lQ-`,
  nC = `t274EZYLkbA-`,
  rC = `gni2wFLBcSk-`,
  iC = `Rbv-UgEUoaw-`,
  aC = `OvCIJMOKBQ8-`,
  oC = `_0lI2wcrU0XU-`,
  sC = `CuZwu-t3ukQ-`,
  cC = `bevr-bUWbuk-`,
  lC = `yedrb7j8BiU-`,
  uC = `hAnG1YoY-8k-`,
  dC = `u8sMh8Um98Q-`,
  fC = `JuZBiq95wYE-`,
  pC = `oh4R-N9DrSA-`,
  mC = {
    "duration-app-launch": `800ms`,
    narrowWidth: cS,
    SaleSection: lS,
    CarouselDisplay: uS,
    SaleSectionCtn: dS,
    NoTopPadding: fS,
    SaleHeaderContainer: pS,
    DisabledBackground: mS,
    SaleSectionTabs: hS,
    SaleViewAll: gS,
    SaleSectionLoginPrompt: _S,
    LoginButton: vS,
    SaleSectionLivePreview: yS,
    Hover: bS,
    JumpedTo: xS,
    JumpToSection: SS,
    JumpToButton: CS,
    SaleOverlayCtn: wS,
    SaleOverlay: TS,
    CarouselCapsuleBordered: ES,
    CarouselCapsuleAnimated: DS,
    AppSummaryWidgetCtn: OS,
    CarouselSalePageCapsule: kS,
    SaleBroadcastCtn: AS,
    SaleOuterTopMargin: jS,
    SaleOuterContainer: MS,
    CustomStyle_together: NS,
    SaleNewSizing: PS,
    SalePageLogoSet: FS,
    SaleBackground: IS,
    SaleSectionTitleCtn: LS,
    SaleSectionSubtext: RS,
    SaleSectionContainer: zS,
    vr_supported: BS,
    vr_required: VS,
    preview_placeholder_section: HS,
    EmptySectionPreview: US,
    LinkCapsule: WS,
    fullscreen_bg: GS,
    fullscreen_bg_video: KS,
    SalePageBroadcastContextHover: qS,
    AlbumCoverImage: JS,
    AlbumTitle: YS,
    SaleSectionTabListContainer: XS,
    MobileTabSelector: ZS,
    Visible: QS,
    MobileTabSelectorButton: $S,
    MobileTabSelectorShortcut: eC,
    DesktopTabs: tC,
    MobileTabSelectorDropDown: nC,
    MobileTabSelectorOption: rC,
    TabContentsContainer: iC,
    HorizontalScrollInDragForceCursor: aC,
    SaleBroadcastSection: oC,
    CarouselPage: sC,
    TabButtonsCtn: cC,
    TabButton: lC,
    SaleTabLabel: uC,
    DefaultCreatorCtn: dC,
    EventSectionViewAllCtn: fC,
    SaleSectionBackgroundImageGroupEdit: pC,
  },
  hC = `ewL7epZsubk-`,
  gC = `data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.5%2016C30.5%2024.0081%2024.0081%2030.5%2016%2030.5C7.99187%2030.5%201.5%2024.0081%201.5%2016C1.5%207.99187%207.99187%201.5%2016%201.5C24.0081%201.5%2030.5%207.99187%2030.5%2016Z'%20fill='white'/%3e%3cpath%20d='M17.3817%2022.5H14.6183V17.1193L10%209H13.2177L16.0946%2014.4L18.9905%209H22L17.3817%2017.1386V22.5Z'%20fill='%230E141B'/%3e%3c/svg%3e`;
function _C(e) {
  let [t, n] = K.useState(!1);
  return {
    bShowSeeMoreHint: t,
    panelProps: {
      onFocusWithin: K.useCallback((t) => n(t && !!e), [e]),
      onOptionsButton: K.useCallback(() => {
        e && e.length !== 0 && (window.location.href = e);
      }, [e]),
    },
  };
}
function vC(e) {
  let { label: t, shown: n } = e;
  return (0, q.jsxs)(`div`, {
    className: (0, Cl.default)(hC, n && `lDd-amB-eCU-`),
    children: [
      (0, q.jsx)(`img`, { src: gC, alt: `Y` }),
      (0, q.jsx)(`div`, { children: t }),
    ],
  });
}
async function yC(e, t) {
  let n = Ya(I.STORE_BASE_URL, t, $n.country_code);
  return (await (await fetch(n)).json()).rgFollowedApps || [];
}
function bC() {
  let e = On(),
    t = $n.accountid;
  return f(xC(e, t));
}
function xC(e, t) {
  return {
    queryKey: wC(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await yC(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function SC(e) {
  let { data: t } = bC();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function CC() {
  let e = x(),
    t = $n.accountid;
  return (n, r) => {
    e.setQueryData(wC(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function wC(e) {
  return [`AccountFollowApps`, e ?? 0];
}
function TC(e, t, n) {
  let r = CC(),
    i = $n.accountid;
  return l({
    mutationKey: [`useUpdateAppFollow`, e, i, t],
    mutationFn: async () => {
      if (e == null) return;
      let r = I.STORE_BASE_URL + `explore/followgame`,
        i = new FormData();
      (i.append(`appid`, `` + e),
        i.append(`sessionid`, gr()),
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
      Xa();
    },
  });
}
var EC = `VULTMp1PCTw-`,
  DC = `_2vLXBykr6zc-`;
async function OC(e, t) {
  let n = Ya(I.STORE_BASE_URL, t, $n.country_code),
    r = await (await fetch(n)).json();
  return Object.keys(r.rgIgnoredApps).map(Number) || [];
}
function kC() {
  let e = On(),
    t = $n.accountid;
  return f(AC(e, t));
}
function AC(e, t) {
  return {
    queryKey: NC(t),
    queryFn: async () => {
      if (!t) return new Set();
      let n = await OC(e, t);
      return new Set(n);
    },
    staleTime: 6e5,
  };
}
function jC(e) {
  let { data: t } = kC();
  return t === void 0 || e == null ? void 0 : t.has(e);
}
function MC() {
  let e = x(),
    t = $n.accountid;
  return (n, r) => {
    e.setQueryData(NC(t), (e) => {
      if (!e) return;
      let t = new Set(e);
      if (r) for (let e of r) t.delete(e);
      if (n) for (let e of n) t.add(e);
      return t;
    });
  };
}
function NC(e) {
  return [`AccountIgnoreApps`, e ?? 0];
}
function PC(e, t, n, r = 0) {
  let i = MC(),
    a = $n.accountid;
  return l({
    mutationKey: [`useUpdateAppIgnore`, e, a, t],
    mutationFn: async () => {
      if (e == null) return;
      let i = I.STORE_BASE_URL + `recommended/ignorerecommendation`,
        a = new FormData();
      (a.append(`appid`, `` + e),
        a.append(`sessionid`, gr()),
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
      Xa();
    },
  });
}
function FC(e) {
  let { id: t, snr: n, classOverride: r } = e,
    [i, a] = (0, K.useState)(!1),
    o = je(`GameHoverIgnoreButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = iy(),
    l = t && `appid` in t ? t.appid : void 0,
    { mutateAsync: u } = PC(l, !jC(l), n),
    d = t && `appid` in t && px.Get().BIsGameIgnored(t.appid);
  return (0, q.jsxs)(Jr, {
    className: M(EC, r),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        $n.logged_in
          ? t && `appid` in t && (a(!0), await u(), o.token.reason || a(!1))
          : c());
    },
    children: [
      (0, q.jsx)(pn, {}),
      (0, q.jsx)(`div`, {
        className: M(DC, i && `vyz9N2LpdMs-`),
        children: F(d ? `#Sale_RemoveFromIgnored` : `#Sale_Ignore`),
      }),
      s,
    ],
  });
}
async function IC(e, t) {
  let n = Ya(I.STORE_BASE_URL, t, $n.country_code),
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
function LC() {
  let e = On(),
    t = W.accountid;
  return f(RC(e, t));
}
function RC(e, t) {
  return {
    queryKey: WC(t),
    queryFn: async () => {
      let n = new Map();
      if (t)
        try {
          (await IC(e, t)).forEach((e) => n.set(e.clanid, e));
        } catch (e) {
          console.error(`GetCuratorAffinityQuery`, e);
        }
      return n;
    },
    enabled: !!t,
  };
}
function zC(e) {
  let { data: t } = LC();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.followed;
}
function BC(e) {
  let { data: t } = LC();
  return t === void 0 || e == null ? void 0 : !!t.get(e)?.ignored;
}
function VC() {
  return L.EREALM != _n.k_ESteamRealmChina;
}
function HC() {
  return L.EREALM != _n.k_ESteamRealmChina;
}
function UC() {
  let e = x(),
    t = W.accountid;
  return (n, r, i, a) => {
    e.setQueryData(WC(t), (e) => {
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
function WC(e) {
  return [`CuratorAffinityQueryKey`, e ?? 0];
}
var GC = (function (e) {
  return (
    (e[(e.k_ECuratorFollow = 1)] = `k_ECuratorFollow`),
    (e[(e.k_ECuratorUnfollow = 2)] = `k_ECuratorUnfollow`),
    (e[(e.k_ECuratorIgnore = 3)] = `k_ECuratorIgnore`),
    (e[(e.k_ECuratorUnignore = 4)] = `k_ECuratorUnignore`),
    e
  );
})({});
function KC(e, t) {
  let n = UC(),
    r = $n.accountid;
  return l({
    mutationKey: [`useUpdateCuratorAffinity`, e, r, t],
    mutationFn: async () => {
      if (e == null) return !1;
      let n = t == GC.k_ECuratorFollow || t == GC.k_ECuratorUnfollow,
        r = t == GC.k_ECuratorFollow || t == GC.k_ECuratorIgnore,
        i = `${I.STORE_BASE_URL}curators/${n ? `ajaxfollow/` : `ajaxignore/`}`,
        a = new FormData();
      (a.append(`clanid`, `` + e),
        a.append(`sessionid`, gr()),
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
        let r = t == GC.k_ECuratorUnfollow || t == GC.k_ECuratorUnignore;
        n(
          t == GC.k_ECuratorFollow ? [{ clanAccountID: e }] : void 0,
          t == GC.k_ECuratorIgnore ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e }] : void 0,
        );
      }
    },
    onError: (r) => {
      if (e != null) {
        let i = t == GC.k_ECuratorFollow || t == GC.k_ECuratorIgnore;
        n(
          t == GC.k_ECuratorUnfollow ? [{ clanAccountID: e }] : void 0,
          t == GC.k_ECuratorUnignore ? [{ clanAccountID: e }] : void 0,
          i ? [{ clanAccountID: e }] : void 0,
          r ? [{ clanAccountID: e, is_creator: !0 }] : void 0,
        );
      }
    },
    onSuccess: (t) => {
      (t &&
        e &&
        n(void 0, void 0, void 0, [{ clanAccountID: e, is_creator: !0 }]),
        Xa());
    },
  });
}
var qC = `b70IXFNJqco-`;
function JC(e) {
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
    className: M(
      qC,
      t == `small` && `_1aSjKS0YPT0-`,
      (t == `medium` || !t) && `zKPudkXmNc8-`,
      t == `large` && `_7O6Q-wUbKJ4-`,
    ),
    style: i,
  });
}
var YC = `QOSk1wMadGg-`,
  XC = `DH1jwyMHeXo-`,
  ZC = `J5g1CfUd95U-`,
  QC = `_3IPvWkyhZzM-`,
  $C = `jB1S5EvgUjI-`,
  ew = `iWO-8zu8RAA-`,
  tw = `MTgAGoNV5vg-`,
  nw = `LEvP9jHHfL8-`,
  rw = `K9ZawxnkJcI-`,
  iw = `OlPIY4AN-5s-`,
  aw = `_7UT3Pb65ni0-`,
  ow = `sT74IdnPxY8-`,
  sw = `ZTz7p5tpqNU-`,
  cw = `ct7kvDppls0-`,
  lw = `SG9Xn5tF5a0-`,
  uw = `clYVRh6K2Ig-`,
  dw = `k6MwDwdCJTU-`,
  fw = `mnFUxHcas-0-`,
  pw = `_6lWvo8crYSU-`,
  mw = `r3PgsXSGPho-`,
  hw = `EWCiFLRR-T8-`,
  gw = `GEroszngeLM-`,
  _w = (e) => {
    let t = L.HELP_BASE_URL + `wizard/HelpWithLimitedAccount`;
    return (0, q.jsx)(vn, {
      strTitle: F(`#Informational_Message`),
      onCancel: e.closeModal,
      onOK: e.closeModal,
      bAlertDialog: !0,
      children: (0, q.jsx)(`div`, {
        children: or(
          e.strTokenOverride || `#User_LimitedAccount`,
          (0, q.jsx)(`a`, {
            href: t,
            target: L.IN_CLIENT ? void 0 : `_blank`,
            rel: `noopener noreferrer`,
            children: F(`#User_LimitedAccount_UrlInfo`),
          }),
        ),
      }),
    });
  },
  vw = (e) => {
    let {
        className: t,
        bIgnored: n,
        bApplyingFollowing: r,
        bFollowing: i,
        onFollowClick: a,
        followType: o,
      } = e,
      { elDialogElement: s, fnShowLogonDialog: c } = iy();
    if (!VC()) return null;
    let l = null;
    switch (o) {
      case `app`:
        l = F(`#text_store_follow_desc`);
        break;
      case `creatorhome`:
        l = F(`#CreatorHome_Follow_tooltip`);
        break;
      case `steamcurator`:
        l = F(`#steam_curator_follow_ttip`);
        break;
      case `group`:
        l = F(`#steam_group_follow_ttip`);
    }
    return l
      ? (0, q.jsxs)(q.Fragment, {
          children: [
            (0, q.jsx)(er, {
              toolTipContent: !n && !i ? l : void 0,
              children: (0, q.jsxs)(zt, {
                className: M(qn, mw, `FollowButton`, t, i ? `Followed` : ``),
                onClick: () => {
                  W.logged_in ? a() : c();
                },
                children: [
                  r && (0, q.jsx)(JC, { size: 15 }),
                  !r && (i || n) && (0, q.jsx)(Zn, {}),
                  (0, q.jsx)(`div`, {
                    className: M(hw, `FollowBtnText`),
                    children:
                      !r &&
                      F(
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
function yw(e) {
  let {
      followType: t,
      fnSuccessCallback: n,
      clanAccountID: r,
      className: i,
    } = e,
    [a, o] = K.useState(!1),
    { data: s } = ve(t ? void 0 : r),
    c = zC(r),
    l = BC(r),
    { mutateAsync: u } = KC(r, c ? GC.k_ECuratorUnfollow : GC.k_ECuratorFollow),
    [d, f, p] = wr(),
    m = K.useCallback(async () => {
      c != null && (o(!0), await u(), o(!1), n?.(c));
    }, [c, n, u]);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(vw, {
        className: i,
        bIgnored: !!l,
        bFollowing: !!c,
        bApplyingFollowing: a,
        onFollowClick: () => {
          W.is_limited ? f() : m();
        },
        followType: t ?? (s?.is_creator_home ? `creatorhome` : `steamcurator`),
      }),
      (0, q.jsx)(on, {
        active: d,
        children: (0, q.jsx)(_w, { closeModal: p }),
      }),
    ],
  });
}
function bw(e) {
  let { appid: t, className: n } = e,
    [r, i] = K.useState(!1),
    a = SC(t),
    o = jC(t),
    s = sr(),
    c = In.GetSNRLinkParam(s),
    { mutateAsync: l } = TC(t, !a, c),
    u = K.useCallback(async () => {
      (i(!0), await l(), i(!1));
    }, [l]);
  return (0, q.jsx)(vw, {
    className: n,
    bIgnored: !!o,
    bFollowing: !!a,
    bApplyingFollowing: r,
    onFollowClick: u,
    followType: `app`,
  });
}
function xw(e) {
  let {
      nCreatorAccountID: t,
      classOverride: n,
      styleOverride: r,
      followType: i,
    } = e,
    { data: a } = ve(t),
    { data: o } = Gc(t);
  if (!a || !o) return null;
  let s = a.avatar_medium_url || a.avatar_full_url;
  return (
    (s ||= $e(void 0, `medium`, `web`)),
    (0, q.jsxs)(`div`, {
      className: M(Vp, n),
      style: r,
      children: [
        (0, q.jsx)(`a`, {
          href: Jc(o, `developer`),
          children: (0, q.jsx)(`img`, { src: s, alt: a.group_name }),
        }),
        (0, q.jsx)(yw, { clanAccountID: t, followType: i }),
      ],
    })
  );
}
var Sw = new URL(
    `../../../images/applications/community/defaultappheader.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Cw = 5500,
  ww = 2e3,
  Tw = 10;
function Ew(e, t) {
  return e && t && t.main_capsule
    ? {
        stringifyID: `maincap_${e.id}_${e.item_type}`,
        rctImage: (0, q.jsx)(
          `img`,
          {
            className: _p,
            loading: `lazy`,
            src: Ae(t, `main_capsule`),
            alt: e.name,
          },
          `fallback`,
        ),
        nDurationMs: ww,
      }
    : null;
}
function Dw(e, t) {
  return {
    stringifyID: `vid_${wt(e)}`,
    rctImage: (0, q.jsx)(Hd, { id: e, active: !0 }),
    nDurationMs: Cw,
  };
}
function Ow(e) {
  let t = mn(e);
  return Wn(e) ? void 0 : t;
}
function kw(e, t, n, r) {
  return n.slice(0, r).map((n, r) => {
    let i = ke(n, `1920x1080`);
    return {
      stringifyID: `screen${r}_${wt(e)}`,
      rctImage: (0, q.jsx)(
        `img`,
        {
          className: _p,
          loading: `lazy`,
          src: i,
          alt: `${t}'s screenshot ${r + 1}`,
        },
        i,
      ),
      nDurationMs: ww,
    };
  });
}
function Aw(e, t, n, r, i) {
  let a = [];
  if (
    (i && a.push(Dw(e, i)),
    r && r.length > 0 && a.push(...kw(e, t.name, r, Tw)),
    a.length == 0 && n && n.main_capsule)
  ) {
    let e = Ew(t, n);
    e && a.push(e);
  }
  return (e && a.length, a);
}
function jw(e, t, n, r, i, a) {
  let o = [];
  (a && o.push(Dw(t, a)), r && r.length > 0 && o.push(...kw(e, n.name, r, Tw)));
  let s = Tw - (r?.length || 0);
  return (
    s > 0 && i && i.length > 0 && o.push(...kw(e, n.name, i, s)),
    e && o.length,
    o
  );
}
function Mw(e) {
  return (0, q.jsx)(`img`, {
    className: _p,
    loading: `lazy`,
    src: Pr(Sw),
    alt: `default`,
  });
}
function Nw(e) {
  let { id: t } = e,
    { data: n } = ur(t);
  if (!n || n.unvailable_for_country_restriction || !n.visible)
    return (0, q.jsx)(`div`, {
      className: gp,
      children: (0, q.jsx)(Mw, {}, `default`),
    });
  let r = n.item_type,
    i = n.type;
  return r == 2 || r == 1
    ? (0, q.jsx)(Lw, { includeAppIDs: n.included_appids })
    : (i == 1 || i == 12) && n.related_items && n.related_items.parent_appid
      ? (0, q.jsx)(Fw, {
          demoItemDefaultInfo: n,
          parentAppID: n.related_items.parent_appid,
        })
      : (0, q.jsx)(Pw, { storeItemDefaultData: n });
}
function Pw(e) {
  let { storeItemDefaultData: t } = e,
    n = nn(t),
    r = Ow(n),
    { data: i } = un(n),
    a = Oe(n),
    o = (0, K.useMemo)(() => Aw(n, t, i, a, r), [n, a, r, i, t]);
  return (0, q.jsx)(Rw, { rgTrailerAndImages: o });
}
function Fw(e) {
  let { demoItemDefaultInfo: t, parentAppID: n } = e,
    r = nn(t);
  return Ow(r)
    ? (0, q.jsx)(Pw, { storeItemDefaultData: t })
    : (0, q.jsx)(Iw, { demoID: r, demoItemDefaultInfo: t, parentAppID: n });
}
function Iw(e) {
  let { parentAppID: t, demoID: n, demoItemDefaultInfo: r } = e,
    i = hc(t),
    a = Oe(n),
    o = Oe(i),
    s = Ow(i),
    c = (0, K.useMemo)(() => jw(n, i, r, a, o, s), [n, i, r, s, a, o]);
  return (0, q.jsx)(Rw, { rgTrailerAndImages: c });
}
function Lw(e) {
  let { includeAppIDs: t } = e,
    n = Jn(),
    r = fi({ queries: t.map((e) => Tr(n, { appid: e })) }),
    i = fi({ queries: t.map((e) => nr(n, { appid: e })) }),
    a = (0, K.useMemo)(
      () =>
        r
          .map((e, t) => {
            let n = i[t].data,
              r = e.data;
            return Ew(n, r);
          })
          .filter((e) => !!e),
      [r, i],
    );
  return (0, q.jsx)(Rw, { rgTrailerAndImages: a });
}
function Rw(e) {
  let { rgTrailerAndImages: t } = e,
    n = (0, K.useRef)(0),
    r = Ln(),
    [i] = K.useState(new cn()),
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
      className: gp,
      children: t?.map((e, t) =>
        (0, q.jsx)(
          `div`,
          {
            className: M({ [_p]: !0, [vp]: t != n.current }),
            children: e.rctImage,
          },
          `e-` + t + `-` + e.stringifyID,
        ),
      ),
    })
  );
}
function zw(e) {
  let { children: t, ...n } = e,
    r = K.useRef(null);
  return (0, q.jsx)(Pc, { nodeRef: r, ...n, children: e.children(r) });
}
var Bw = `ghYXSqVPJ-U-`,
  Vw = `lx1fe7xI0bg-`,
  Hw = `ARp2qEoElPE-`,
  Uw = `DwDon-U2yLI-`,
  Ww = 150,
  Gw = K.createContext(void 0);
function Kw() {
  return K.useContext(Gw);
}
function qw(e) {
  let {
      hoverContent: t,
      hoverProps: n,
      nDelayShowMs: r,
      nWidthMultiplier: i,
      children: a,
      className: o,
    } = e,
    s = Nt(),
    c = Pl(),
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
    className: M(Bw, o),
    onMouseEnter: m,
    onMouseLeave: h,
    onTouchStart: () => d(!1),
    onKeyDown: (e) => {
      e.keyCode == 27 && (d(!1), e.preventDefault(), e.stopPropagation());
    },
    children: [
      l &&
        f &&
        (0, q.jsx)(Gw.Provider, {
          value: g,
          children: (0, q.jsx)(Jw, {
            visible: u,
            target: f,
            nDelayShowMs: r,
            nWidthMultiplier: i,
            hoverProps: n,
            children: t,
          }),
        }),
      (0, q.jsx)(fn, { children: a }),
    ],
  });
}
function Jw(e) {
  let {
      hoverProps: t,
      nDelayShowMs: n = Ww,
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
        if (zr()) return;
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
        minHeight: Xw() == `hiding` ? void 0 : 300,
        height: Xw() == `hiding` ? i.clientWidth * 1.15 * (125 / 184) : void 0,
        ...t?.style,
      },
      target: i,
    };
  return (0, q.jsx)(Yw, {
    hoverProps: u,
    children: (0, q.jsx)(fn, { children: o }),
  });
}
function Yw(e) {
  let { hoverProps: t, children: n } = e,
    r = K.useCallback((e) => e?.focus(), []);
  return (0, q.jsx)(Zr, {
    ...t,
    children: (0, q.jsx)(zw, {
      timeout: 500,
      in: !0,
      appear: !0,
      classNames: { appearActive: M(Hw, bp), enterDone: M(Uw, xp) },
      children: (e) =>
        (0, q.jsx)(`div`, {
          ref: rt(e, r),
          className: Vw,
          tabIndex: -1,
          children: n,
        }),
    }),
  });
}
function Xw() {
  return window.sessionStorage?.getItem(Zw) || `default`;
}
var Zw = `DEBUG_UseNewGameHover`;
function Qw(e) {
  window.sessionStorage.setItem(Zw, e);
}
window.SetHoverPresentation = Qw;
function $w(e) {
  if (e) {
    if (`appid` in e) return `app`;
    if (`bundleid` in e) return `bundle`;
    if (`packageid` in e) return `sub`;
  }
}
function eT(e) {
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
        let n = $w(t);
        n &&
          (i && i(!0),
          window.GameHover &&
            (s.current &&
              a &&
              (s.current.dataset.hoverDisableScreenshots = `true`),
            window.GameHover(r ? r() : s.current, e, `global_hover`, {
              type: n,
              id: ot(t).id,
              v6: 1,
            })));
      },
      [i, r, a, t],
    ),
    l = K.useCallback(
      (e) => {
        $w(t) &&
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
function tT(e) {
  let { id: t, strExtraParams: n, fnOnClickOverride: r, strOverrideURL: i } = e,
    a = sr(),
    o = jr(),
    s = Qt(
      i ||
        (t && `creatorid` in t
          ? kn(
              `${L.STORE_BASE_URL}curator/${ot(t).id}${n ? `?${n}` : ``}`,
              a,
              o,
            )
          : kn(
              `${L.STORE_BASE_URL}${$w(t)}/${ot(t).id}${n ? `?${n}` : ``}`,
              a,
              o,
            )),
    );
  return (0, q.jsx)(eT, {
    ...e,
    children: (0, q.jsx)(bt, {
      className: e.className,
      href: r ? void 0 : s,
      target: L.IN_CLIENT || r ? void 0 : `_blank`,
      rel: `noopener noreferrer`,
      onClick: r,
      children: e.children,
    }),
  });
}
var nT = `saleaction/creategiveawayregistration`;
async function rT(e) {
  let t =
    L.STORE_BASE_URL +
    `saleaction/giveawayregistration?name=` +
    encodeURIComponent(e);
  return await aT(
    `GetUserGiveawayRegistration`,
    e,
    t,
    await fetch(t, { credentials: `include` }),
  );
}
async function iT(e) {
  let t = L.STORE_BASE_URL + nT;
  return await aT(
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
async function aT(e, t, n, r) {
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success == 1 && i.registration) return i.registration;
  throw Error(e + ` on ` + t + ` answered ` + i?.success);
}
var oT = { registered: !1 };
function sT(e, t) {
  return [`sale`, `giveawayregistration`, e, t];
}
function cT(e, t) {
  return { queryKey: sT(e, t), queryFn: () => rT(e), enabled: !!e, retry: !1 };
}
function lT(e) {
  let { data: t, isError: n } = f(cT(e, W.accountid));
  return n ? oT : t;
}
function uT() {
  let e = x(),
    { mutateAsync: t } = l({
      mutationFn: iT,
      onSuccess: (t, n) => e.setQueryData(sT(n, W.accountid), t),
    });
  return {
    fnCreateRegistration: (0, K.useCallback)(
      async (e) => {
        try {
          return await t(e);
        } catch (t) {
          return (
            console.error(`Registering for giveaway ` + e + ` failed`, t), oT
          );
        }
      },
      [t],
    ),
  };
}
function dT(e) {
  return e.section_type === `crosspromotesalepage`
    ? (e.sale_page_cross_promo_sales ?? [])
    : [];
}
function fT(e) {
  return dT(e).map((t) => ({
    ...e,
    sale_page_cross_promo_sales: [t],
    capsules: t.capsules ?? [],
  }));
}
function pT(e) {
  return dT(e)[0]?.event_gid || void 0;
}
function mT(e) {
  return dT(e).flatMap((e) => e.event_gid || []);
}
function hT(e) {
  return dT(e)[0]?.featured_app_tagid || void 0;
}
function gT(e, t) {
  return _T(e) ? (t?.BIsVisibleEvent() ? null : `missing`) : `setup`;
}
function _T(e) {
  let t = dT(e)[0];
  return !!t?.event_gid && (!!t.featured_app_tagid || !!t.capsules?.length);
}
function vT(e, t) {
  return e
    ? F(`#Sale_CrossPromoSale_SectionTitle`, e.GetNameWithFallback(t) ?? ``)
    : F(`#Sale_CrossPromoSale_DefaultSectionTitle`);
}
function yT(e, t) {
  let n = At.GetELanguageFallback(t),
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
var bT = `hZ-dKtI-DOE-`,
  xT = `_48uVrbfJQEM-`,
  ST = `Lt6SJZ-PR1A-`,
  CT = `vmIVedNuofw-`,
  wT = `gFqPN18pEI8-`,
  TT = `yGT3R-m6gZk-`,
  ET = `-I4fAFaLKxA-`,
  DT = `bPmDLn-lEoc-`,
  OT = `_6txFjo9b8Zk-`,
  kT = `_6y4EcbHPzTE-`,
  AT = `LQrwY5m9KjE-`,
  jT = `HHtwpv2BsZo-`,
  MT = `tdXc-z1nXGI-`,
  NT = `D0L0mwSYCaE-`,
  PT = `SGi7-TqE4Rs-`,
  FT = `uPjG9NaDuUg-`,
  IT = `G9e5dN5XFKM-`,
  LT = `Cx2zVOdOEwU-`,
  RT = `rk6-75sKTfs-`,
  zT = `D4J8JhjevEo-`,
  BT = `OobKWZLrT2Q-`,
  VT = `zoD9wRMnlzg-`,
  HT = `x25qTcshK-4-`,
  UT = `LQZsciPFbvE-`,
  WT = `oo8VFYEMJNU-`,
  GT = `_6SdwjlcjQF4-`,
  KT = `_8m3-fAAnr8I-`,
  qT = `kg-spn-7ESc-`,
  JT = `wErgDaiILYk-`,
  YT = t({
    Bottom: () => lE,
    BottomLeft: () => cE,
    BottomRight: () => uE,
    DialogButton: () => xE,
    EdgeDown: () => ZT,
    Left: () => rE,
    LinkRegionButtonContainer: () => bE,
    LinkRegionDelete: () => aE,
    LinkRegionDragBox: () => XT,
    LinkRegionEdge: () => $T,
    LinkRegionGridBox: () => QT,
    LinkRegionInfo: () => SE,
    LinkRegionSettings: () => oE,
    LinkText: () => CE,
    Middle: () => iE,
    Right: () => sE,
    Top: () => tE,
    TopLeft: () => eE,
    TopRight: () => nE,
    bottom: () => _E,
    bottomleft: () => gE,
    bottomright: () => vE,
    default: () => wE,
    left: () => mE,
    middle: () => yE,
    right: () => hE,
    top: () => fE,
    topleft: () => dE,
    topright: () => pE,
  }),
  XT = `nUuv5WlFHKU-`,
  ZT = `JsVZp4CAPKg-`,
  QT = `s3jO9FbN4u4-`,
  $T = `SO1XLFjtCbU-`,
  eE = `TpO-SNRNS-E-`,
  tE = `lmnZa-M7bq0-`,
  nE = `LDrqaW8EJl8-`,
  rE = `WEHXDbI-0ZI-`,
  iE = `hc0dk3OoBCU-`,
  aE = `o5BUe1m-4BM-`,
  oE = `-e4w8MaVU8k-`,
  sE = `V3hcFn4-kHE-`,
  cE = `RIIVuSM7Y6Y-`,
  lE = `dkKyB9jj9aI-`,
  uE = `R4iVDKb6zeU-`,
  dE = `fzzwZd4-ISg-`,
  fE = `Oo4-WMoHDeE-`,
  pE = `D8BWJF43X-Q-`,
  mE = `Yc8TU3u-VW4-`,
  hE = `KMAHJAnBe6Q-`,
  gE = `bxVoRh5lFi4-`,
  _E = `e2-ZZOF2QKQ-`,
  vE = `XUrOCtEsKxM-`,
  yE = `TSm-D5CZFsE-`,
  bE = `fzB9IY83oAQ-`,
  xE = `RpcfV3ZNn8s-`,
  SE = `_1Be3592R7Ao-`,
  CE = `m9bHoo6uIPM-`,
  wE = {
    LinkRegionDragBox: XT,
    EdgeDown: ZT,
    LinkRegionGridBox: QT,
    LinkRegionEdge: $T,
    TopLeft: eE,
    Top: tE,
    TopRight: nE,
    Left: rE,
    Middle: iE,
    LinkRegionDelete: aE,
    LinkRegionSettings: oE,
    Right: sE,
    BottomLeft: cE,
    Bottom: lE,
    BottomRight: uE,
    topleft: dE,
    top: fE,
    topright: pE,
    left: mE,
    right: hE,
    bottomleft: gE,
    bottom: _E,
    bottomright: vE,
    middle: yE,
    LinkRegionButtonContainer: bE,
    DialogButton: xE,
    LinkRegionInfo: SE,
    LinkText: CE,
  },
  TE = class extends K.Component {
    m_rectLinkRegion;
    m_elLinkRegionBox;
    m_nLocalOffsetXPct;
    m_nLocalOffsetYPct;
    m_fnMouseUp = null;
    m_fnMouseMove = null;
    m_listeners = new pt();
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
            let t = Rn(
                this.CalcLeftEdge(e.clientX),
                0,
                100 - this.state.curWidthPct,
              ),
              n = 100 - (t + this.state.curWidthPct),
              r = Rn(
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
        a = Rn(
          100 - i - r,
          this.props.widthMinPct || 0,
          this.props.widthMaxPct || 100,
        ),
        o = Rn(
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
      return Rn(this.GetXPercent(e), 0, 100);
    }
    CalcRightEdge(e) {
      return Rn(100 - (this.GetXPercent(e) + this.state.curWidthPct), 0, 100);
    }
    CalcTopEdge(e) {
      return Rn(this.GetYPercent(e), 0, 100);
    }
    CalcBottomEdge(e) {
      return Rn(100 - (this.GetYPercent(e) + this.state.curHeightPct), 0, 100);
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
        t = XT;
      return (
        this.state.EdgeDown != null &&
          (t += ` ${ZT} ` + YT[this.state.EdgeDown]),
        (0, q.jsxs)(`div`, {
          className: t,
          style: e,
          ref: this.LinkRegionBoxRef,
          draggable: !1,
          children: [
            (0, q.jsxs)(`div`, {
              className: QT,
              children: [
                (0, q.jsx)(`div`, {
                  className: `${$T} ${eE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topleft`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${tE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `top`);
                  },
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${nE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `topright`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${rE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `left`);
                  },
                  draggable: !1,
                }),
                (0, q.jsxs)(`div`, {
                  className: `${$T} ${iE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `middle`);
                  },
                  draggable: !1,
                  children: [
                    this.props.deleteFn &&
                      (0, q.jsx)(`div`, {
                        className: `o5BUe1m-4BM-`,
                        onClick: this.HandleDelete,
                        children: (0, q.jsx)(Dr, {}),
                      }),
                    !this.props.bDisableLink &&
                      (0, q.jsx)(`div`, {
                        className: `-e4w8MaVU8k-`,
                        onClick: this.OnEditLink,
                        children: (0, q.jsx)(Cr, {}),
                      }),
                    (0, q.jsxs)(`div`, {
                      className: CE,
                      children: [` `, this.m_strDescription, ` `],
                    }),
                  ],
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${sE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `right`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${cE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottomleft`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${lE}`,
                  onMouseDown: (e) => {
                    this.OnMouseDown(e, `bottom`);
                  },
                  draggable: !1,
                }),
                (0, q.jsx)(`div`, {
                  className: `${$T} ${uE}`,
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
                  (0, q.jsx)(St, {
                    className: void 0,
                    type: `text`,
                    name: `link_url`,
                    value: this.state.text_link_url,
                    label: F(`#SteamTV_LinkURL`),
                    placeholder: `https://www.example.com`,
                    onChange: this.OnSetLinkURLChange,
                    mustBeURL: !0,
                  }),
                  (0, q.jsx)(St, {
                    className: void 0,
                    type: `text`,
                    name: `link_description`,
                    value: this.state.text_link_description,
                    label: F(`#SteamTV_LinkDescription`),
                    placeholder: F(`#SteamTV_LinkDescription_Placeholder`),
                    onChange: this.OnSetLinkDescriptionChange,
                  }),
                  (0, q.jsxs)(`div`, {
                    className: `fzB9IY83oAQ-`,
                    children: [
                      (0, q.jsxs)(Sn, {
                        disabled: !this.state.valid_link,
                        onClick: this.OnSaveLink,
                        children: [` `, F(`#Button_OK`), ` `],
                      }),
                      (0, q.jsxs)(Sn, {
                        onClick: this.OnEditLink,
                        children: [` `, F(`#Button_Cancel`)],
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
(z([j], TE.prototype, `LinkRegionBoxRef`, null),
  z([j], TE.prototype, `OnMouseDown`, null),
  z([j], TE.prototype, `OnMouseMove`, null),
  z([j], TE.prototype, `OnMouseUp`, null),
  z([j], TE.prototype, `HandleDelete`, null),
  z([j], TE.prototype, `OnSetLinkURLChange`, null),
  z([j], TE.prototype, `OnSetLinkDescriptionChange`, null),
  z([j], TE.prototype, `OnSaveLink`, null),
  z([j], TE.prototype, `OnEditLink`, null),
  (TE = z([a], TE)));
function EE(e, t) {
  return !t || t.startsWith(`https://`) || t.startsWith(`http://`)
    ? t
    : `${L.CLAN_CDN_ASSET_URL}images/clan/${e}/${t}`;
}
function DE(e, t, n) {
  return !t || yt(t) ? t : `${n}images/clan/${e}/${t}`;
}
var OE = `poster`,
  kE = `${OE}.avif`,
  AE = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
function jE(e) {
  let t = e.video_webm_src || e.video_mp4_src;
  if (!t || e.image?.includes(`.${OE}.`)) return e.image;
  let n = AE.exec(t);
  return n ? `${n[1]}.${kE}` : e.image;
}
var ME = 0.01,
  NE = 100,
  PE = 4,
  FE = [
    [16, 9],
    [9, 16],
    [4, 3],
    [3, 4],
    [3, 2],
    [2, 3],
    [1, 1],
    [21, 9],
    [2, 1],
    [1, 2],
    [5, 4],
    [4, 5],
  ],
  IE = 0.005;
function LE(e, t) {
  if (!(!e || !t || e <= 0 || t <= 0)) return RE(e / t);
}
function RE(e) {
  if (!e || !Number.isFinite(e) || e < ME || e > NE) return;
  let t = 10 ** PE;
  return Math.round(e * t) / t;
}
function zE(e) {
  let t = e.trim();
  if (!t) return;
  let n = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(t);
  if (n) return LE(parseFloat(n[1]), parseFloat(n[2]));
  if (/^\d+(?:\.\d+)?$/.test(t)) return RE(parseFloat(t));
}
function BE(e) {
  let t = FE.find(([t, n]) => Math.abs(e - t / n) < IE);
  return t ? `${t[0]}:${t[1]}` : String(e);
}
function VE(e, t) {
  let n = Vx(e ?? void 0, `capsule`, t);
  if (!e) return;
  let r = e.clanSteamID.GetAccountID();
  return {
    clanAccountID: r,
    strEventGID: e.GID ?? ``,
    strName: e.GetNameWithFallback(t) ?? ``,
    rtEndTime: e.endTime || void 0,
    strSummary: e.GetSummaryWithFallback(t) || void 0,
    strCapsuleURL: n,
    strSaleURL: Se(e) ?? void 0,
    strBackgroundURL: EE(
      r,
      e.jsondata.sale_cross_promo_carousel_background?.image,
    ),
    strScrimColor: e.jsondata.sale_cross_promo_scrim_color || void 0,
    strLogoURL: yT(e, t),
    eDesktopLayout:
      e.jsondata.sale_cross_promo_desktop_layout === `logo_top`
        ? `logo_top`
        : void 0,
  };
}
var HE = `Es-UANTRhdg-`,
  UE = `FsYxDNcAXaI-`,
  WE = `cSFkUHyVW24-`,
  GE = `yT92BfNEvpw-`,
  KE = `_6jMisrq5Zfo-`,
  qE = `XBv92QzB8Xc-`,
  JE = `NjUCqxvhkHk-`,
  YE = `gxh8RxFKhr8-`,
  XE = `AmB85SkEC3Q-`,
  ZE = `P5j4maR0i14-`;
function QE(e) {
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
    l = a ? n : n ? $E(n, L.STORE_BASE_URL) : void 0,
    u = Sr(l);
  return u
    ? (0, q.jsx)(bt, {
        href: u,
        target: L.IN_CLIENT || o ? void 0 : `_blank`,
        className: t,
        style: r,
        rel: `noopener noreferrer`,
        focusable: s,
        fnCanTakeFocus: c,
        children: i,
      })
    : (0, q.jsx)(`span`, { style: r, className: t, children: i });
}
function $E(e, t) {
  try {
    let n = new URL(t),
      r = new URL(e);
    return n.href.replace(/\/$/, ``) + r.pathname + r.search + r.hash;
  } catch {
    return ``;
  }
}
function eD(e) {
  let { section: t } = e;
  return !t.label_link || t.label_link_style
    ? null
    : (0, q.jsx)(`div`, {
        className: gS,
        children: (0, q.jsx)(QE, {
          url: t.label_link,
          children: P.Localize(`#btn_live_streams_all`),
        }),
      });
}
function tD(e) {
  let { event: t, language: n, strSaleURL: r } = e,
    i = VE(t, n);
  if (!i) return null;
  let a = r ? { ...i, strSaleURL: r } : i;
  return a.strSaleURL
    ? (0, q.jsx)(Jr, {
        className: M(HE, UE, WE),
        "flow-children": `row`,
        children: (0, q.jsx)(nD, { saleEvent: a, bExploreButtonBelow: !0 }),
      })
    : null;
}
function nD(e) {
  let {
      saleEvent: t,
      bExploreButtonBelow: n,
      bShowExploreHint: r,
      children: i,
    } = e,
    a = t?.strSaleURL,
    o = t?.strCapsuleURL,
    s = t?.strSummary,
    c = dn(),
    l = Nt(),
    u = l && r !== void 0,
    d = t?.rtEndTime
      ? tr(t.rtEndTime, {
          weekday: void 0,
          year: void 0,
          month: `short`,
          day: `numeric`,
          timeZone: c,
        })
      : void 0;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      o &&
        (0, q.jsx)(`div`, {
          className: `qbRGxo4aWcc-`,
          style: { backgroundImage: `url(${o})` },
        }),
      o &&
        (0, q.jsx)(`div`, {
          className: `HgvxVtFlDis-`,
          style: { backgroundImage: `url(${o})` },
        }),
      (0, q.jsxs)(`div`, {
        className: GE,
        children: [
          (0, q.jsxs)(`div`, {
            className: KE,
            children: [
              (0, q.jsx)(`div`, {
                className: qE,
                children: (0, q.jsx)(QE, {
                  url: a,
                  className: JE,
                  bFocusable: !1,
                  children: t?.strName,
                }),
              }),
              d &&
                (0, q.jsx)(`div`, {
                  className: `_6iUHDist0Jc-`,
                  children: F(`#Sale_CrossPromoSale_NowThrough`, d),
                }),
            ],
          }),
          a &&
            !n &&
            !u &&
            (0, q.jsx)(QE, {
              url: a,
              className: M(`_6O6T0vupYYc-`, `DuNM8zA4oz0-`),
              fnCanTakeFocus: ct,
              children: F(`#Sale_CrossPromoSale_ExploreEvent`),
            }),
          a &&
            u &&
            (0, q.jsx)(vC, {
              label: F(`#Sale_CrossPromoSale_ExploreEvent`),
              shown: !!r,
            }),
        ],
      }),
      (0, q.jsxs)(`div`, {
        className: YE,
        children: [
          o &&
            (0, q.jsxs)(QE, {
              url: a,
              className: `oztjxXYIBAk-`,
              bFocusable: !!l,
              children: [
                (0, q.jsx)(`img`, { src: o, alt: `` }),
                s &&
                  (0, q.jsx)(`div`, {
                    className: `_7CUHH8Trg28-`,
                    children: (0, q.jsx)(`div`, {
                      className: `ZMGnYjKDOEI-`,
                      children: s,
                    }),
                  }),
              ],
            }),
          i,
        ],
      }),
      a &&
        !u &&
        (0, q.jsx)(`div`, {
          className: M(`T1fHkhyvNkM-`, n && `SAqjQ-F71kA-`),
          children: (0, q.jsx)(QE, {
            url: a,
            className: `_6O6T0vupYYc-`,
            fnCanTakeFocus: ct,
            children: F(`#Sale_CrossPromoSale_ExploreEvent`),
          }),
        }),
    ],
  });
}
function rD(e, t, n = !1) {
  let { data: r } = V(e),
    { data: i } = un(e, n),
    a = iD(r, i, t),
    { data: o } = V(a),
    { data: s } = un(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function iD(e, t, n) {
  if (
    e &&
    e.included_appids?.length == 1 &&
    !aD(t, n) &&
    e.item_type &&
    [1, 2].includes(e.item_type)
  )
    return { appid: e.included_appids[0] };
}
function aD(e, t) {
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
      return (Hn(t, `Unhandled imageType: ${t}`), !1);
  }
}
var oD = -700,
  sD = -600,
  cD = -599,
  lD = -598,
  uD = -597,
  dD = -596,
  fD = -595,
  pD = -594,
  mD = -593,
  hD = -592,
  gD = -591,
  _D = -590,
  vD = -589,
  yD = -588,
  bD = -587,
  xD = -586,
  SD = -585,
  CD = -584,
  wD = -583,
  TD = -582,
  ED = -581,
  DD = -580,
  OD = -579,
  kD = -578,
  AD = -577,
  jD = -576,
  MD = -575,
  ND = -574,
  PD = -573,
  FD = -572,
  ID = -571,
  LD = -500,
  RD = -499,
  zD = -498,
  BD = -497,
  VD = -496,
  HD = -300,
  UD = -203,
  WD = -202,
  GD = -201,
  KD = -200,
  qD = -199,
  JD = -198,
  YD = -197,
  XD = -196,
  ZD = -195,
  QD = -194,
  $D = -193,
  eO = -192,
  tO = -191,
  nO = -190,
  rO = -189,
  iO = -188,
  aO = -187,
  oO = -186,
  sO = -185,
  cO = -184,
  lO = -183,
  uO = -182,
  dO = -102,
  fO = -101,
  pO = -100;
function mO(e) {
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
    case dO:
      return `Mac OS`;
    case fO:
      return `MacOS 10.4`;
    case pO:
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
    case UD:
      return `Linux`;
    case WD:
      return `Linux 2.2`;
    case GD:
      return `Linux 2.4`;
    case KD:
      return `Linux 2.6`;
    case qD:
      return `Linux 3.2`;
    case JD:
      return `Linux 3.5`;
    case YD:
      return `Linux 3.6`;
    case XD:
      return `Linux 3.10`;
    case ZD:
      return `Linux 3.16`;
    case QD:
      return `Linux 3.18`;
    case $D:
      return `Linux 3.x`;
    case tO:
      return `Linux 4.1`;
    case nO:
      return `Linux 4.4`;
    case rO:
      return `Linux 4.9`;
    case iO:
      return `Linux 4.14`;
    case aO:
      return `Linux 4.19`;
    case eO:
      return `Linux 4.x`;
    case oO:
      return `Linux 5.x`;
    case sO:
      return `Linux 5.4`;
    case cO:
      return `Linux 6.x`;
    case lO:
      return `Linux 7.x`;
    case uO:
      return `Linux 5.10`;
    case HD:
      return `PS3`;
    case oD:
      return `Web Client`;
    case LD:
      return `Android`;
    case RD:
      return `Android 6.x`;
    case zD:
      return `Android 7.x`;
    case BD:
      return `Android 8.x`;
    case VD:
      return `Android 9.x`;
    case sD:
      return `iOS`;
    case cD:
      return `iOS 1`;
    case lD:
      return `iOS 2`;
    case uD:
      return `iOS 3`;
    case dD:
      return `iOS 4`;
    case fD:
      return `iOS 5`;
    case pD:
      return `iOS 6`;
    case mD:
      return `iOS 6.1`;
    case hD:
      return `iOS 7`;
    case gD:
      return `iOS 7.1`;
    case _D:
      return `iOS 8`;
    case vD:
      return `iOS 8.1`;
    case yD:
      return `iOS 8.2`;
    case bD:
      return `iOS 8.3`;
    case xD:
      return `iOS 8.4`;
    case SD:
      return `iOS 9`;
    case CD:
      return `iOS 9.1`;
    case wD:
      return `iOS 9.2`;
    case TD:
      return `iOS 9_.3`;
    case ED:
      return `iOS 10`;
    case DD:
      return `iOS 10.1`;
    case OD:
      return `iOS 10.2`;
    case kD:
      return `iOS 10.3`;
    case AD:
      return `iOS 11`;
    case jD:
      return `iOS 11.1`;
    case MD:
      return `iOS 11.2`;
    case ND:
      return `iOS 11.3`;
    case PD:
      return `iOS 11.4`;
    case FD:
      return `iOS 12`;
    case ID:
      return `iOS 12.1`;
    default:
    case -1:
      return `Unknown`;
  }
}
var hO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Request`;
    }
  },
  gO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.protocol_version || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            protocol_version: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            os: { n: 2, br: O.readString, bw: E.writeString },
            machine_name: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientLogonInfo_Response`;
    }
  },
  _O = class e extends G.Message {
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
  vO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sessions: { n: 1, c: yO, r: !0, q: !0 },
            refetch_interval_sec: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response`;
    }
  },
  yO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            protocol_version: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            os_name: { n: 3, br: O.readString, bw: E.writeString },
            machine_name: { n: 4, br: O.readString, bw: E.writeString },
            os_type: { n: 5, br: O.readInt32, bw: E.writeInt32 },
            device_type: { n: 6, br: O.readInt32, bw: E.writeInt32 },
            realm: { n: 7, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetAllClientLogonInfo_Response_Session`;
    }
  },
  bO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Request`;
    }
  },
  xO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.package_version || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [7, 10], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            package_version: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            os: { n: 2, br: O.readString, bw: E.writeString },
            machine_name: { n: 3, br: O.readString, bw: E.writeString },
            ip_public: { n: 4, br: O.readString, bw: E.writeString },
            ip_private: { n: 5, br: O.readString, bw: E.writeString },
            bytes_available: {
              n: 6,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            running_games: { n: 7, c: SO, r: !0, q: !0 },
            protocol_version: { n: 8, br: O.readUint32, bw: E.writeUint32 },
            clientcomm_version: { n: 9, br: O.readUint32, bw: E.writeUint32 },
            local_users: {
              n: 10,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData`;
    }
  },
  SO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            extra_info: { n: 2, br: O.readString, bw: E.writeString },
            time_running_sec: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_ClientData_RunningGames`;
    }
  },
  CO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_info || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { client_info: { n: 1, c: xO } } }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientInfo_Response`;
    }
  },
  wO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.fields || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            fields: { n: 1, br: O.readString, bw: E.writeString },
            filters: { n: 2, br: O.readString, bw: E.writeString },
            client_instanceid: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            include_client_info: { n: 4, br: O.readBool, bw: E.writeBool },
            language: { n: 5, br: O.readString, bw: E.writeString },
            filter_appids: {
              n: 6,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Request`;
    }
  },
  TO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.bytes_available || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            apps: { n: 2, c: EO, r: !0, q: !0 },
            client_info: { n: 3, c: xO },
            refetch_interval_sec_full: {
              n: 4,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            refetch_interval_sec_changing: {
              n: 5,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            refetch_interval_sec_updating: {
              n: 6,
              br: O.readUint32,
              bw: E.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response`;
    }
  },
  EO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [17], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            app: { n: 2, br: O.readString, bw: E.writeString },
            category: { n: 3, br: O.readString, bw: E.writeString },
            app_type: { n: 4, br: O.readString, bw: E.writeString },
            num_downloading: { n: 8, br: O.readUint32, bw: E.writeUint32 },
            bytes_download_rate: { n: 11, br: O.readUint32, bw: E.writeUint32 },
            bytes_downloaded: {
              n: 12,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            bytes_to_download: {
              n: 13,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            dlcs: { n: 17, c: DO, r: !0, q: !0 },
            favorite: { n: 18, br: O.readBool, bw: E.writeBool },
            auto_update: { n: 19, br: O.readBool, bw: E.writeBool },
            installed: { n: 20, br: O.readBool, bw: E.writeBool },
            download_paused: { n: 21, br: O.readBool, bw: E.writeBool },
            changing: { n: 22, br: O.readBool, bw: E.writeBool },
            available_on_platform: { n: 23, br: O.readBool, bw: E.writeBool },
            bytes_staged: {
              n: 24,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            bytes_to_stage: {
              n: 25,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            bytes_required: {
              n: 26,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            source_buildid: { n: 27, br: O.readUint32, bw: E.writeUint32 },
            target_buildid: { n: 28, br: O.readUint32, bw: E.writeUint32 },
            estimated_seconds_remaining: {
              n: 29,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            queue_position: { n: 30, d: -1, br: O.readInt32, bw: E.writeInt32 },
            uninstalling: { n: 31, br: O.readBool, bw: E.writeBool },
            rt_time_scheduled: { n: 32, br: O.readUint32, bw: E.writeUint32 },
            running: { n: 33, br: O.readBool, bw: E.writeBool },
            update_percentage: { n: 34, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData`;
    }
  },
  DO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            app: { n: 2, br: O.readString, bw: E.writeString },
            installed: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_GetClientAppList_Response_AppData_DLCData`;
    }
  },
  OO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: O.readUint32, bw: E.writeUint32 },
            client_instanceid: {
              n: 2,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_InstallClientApp_Request`;
    }
  },
  kO = class e extends G.Message {
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
  AO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: O.readUint32, bw: E.writeUint32 },
            client_instanceid: {
              n: 2,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_UninstallClientApp_Request`;
    }
  },
  jO = class e extends G.Message {
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
  MO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, q: !0, br: O.readUint32, bw: E.writeUint32 },
            action: { n: 2, q: !0, br: O.readUint32, bw: E.writeUint32 },
            client_instanceid: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_SetClientAppUpdateState_Request`;
    }
  },
  NO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            appid: { n: 2, q: !0, br: O.readUint32, bw: E.writeUint32 },
            query_params: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_LaunchClientApp_Request`;
    }
  },
  PO = class e extends G.Message {
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
  FO = class e extends G.Message {
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
  IO = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_instanceid || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            enable: { n: 2, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CClientComm_EnableOrDisableDownloads_Request`;
    }
  },
  LO = class e extends G.Message {
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
  RO;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientLogonInfo#1`, U(hO, t, n), gO, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientLogonInfo = t;
  function n(e, t, n) {
    return e.SendMsg(`ClientComm.GetAllClientLogonInfo#1`, U(_O, t, n), vO, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAllClientLogonInfo = n;
  function r(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientInfo#1`, U(bO, t, n), CO, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetClientInfo = r;
  function i(e, t, n) {
    return e.SendMsg(`ClientComm.GetClientAppList#1`, U(wO, t, n), TO, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClientAppList = i;
  function a(e, t, n) {
    return e.SendMsg(`ClientComm.InstallClientApp#1`, U(OO, t, n), kO, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.InstallClientApp = a;
  function o(e, t, n) {
    return e.SendMsg(`ClientComm.UninstallClientApp#1`, U(AO, t, n), jO, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.UninstallClientApp = o;
  function s(e, t, n) {
    return e.SendMsg(`ClientComm.LaunchClientApp#1`, U(NO, t, n), PO, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.LaunchClientApp = s;
  function c(e, t, n) {
    return e.SendMsg(`ClientComm.SetClientAppUpdateState#1`, U(MO, t, n), FO, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetClientAppUpdateState = c;
  function l(e, t, n) {
    return e.SendMsg(`ClientComm.EnableOrDisableDownloads#1`, U(IO, t, n), LO, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.EnableOrDisableDownloads = l;
})((RO ||= {}));
var zO = `RemoteDownload_OnlineClient`,
  BO = `RemoteDownload_ClientAppList`,
  VO = `RemoteDownload_ClientAppData`,
  HO = class extends Error {
    constructor(e, t) {
      (super(e), (this.result = t));
    }
    result;
  };
function UO() {
  let e = On(),
    t = Lr();
  return f({
    queryKey: [zO, t],
    queryFn: async () => {
      let t = yr.Init(_O),
        n = await RO.GetAllClientLogonInfo(e, t);
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
var WO = class {
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
async function GO(e, t, n) {
  let r = t.client_instanceid,
    i = yr.Init(wO);
  (i.Body().set_fields(`games`),
    i.Body().set_filters(n),
    i.Body().set_client_instanceid(r),
    i.Body().set_include_client_info(!0));
  let a = await RO.GetClientAppList(e, i);
  if (a.GetEResult() !== 1)
    throw (
      console.error(
        `Received error from GetClientAppList`,
        a.GetEResult(),
        a.Hdr().transport_error(),
      ),
      new HO(`Error from GetClientAppList: ${a.GetEResult()}`, a.GetEResult())
    );
  let o = new Map();
  for (let e of a.Body().apps()) {
    let t = new WO(e);
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
async function KO(e, t, n, r) {
  if (!r) return;
  let i = await GO(e, t, n);
  for (let [e, t] of i.mapApps) r.mapApps.set(e, t);
  return { ...i, mapApps: r.mapApps };
}
function qO(e, t, n) {
  return [BO, e, t, n];
}
function JO(e, t = !0) {
  let n = UO(),
    r = On(),
    i = Lr(),
    a = (e) => {
      t && (e.result == 21 || e.result == 16) && n.refetch();
    },
    o = fi({
      queries: (n.data?.sessions || []).map((e) => ({
        queryKey: qO(i, e.client_instanceid, `none`),
        queryFn: async () => GO(r, e, `none`),
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
    rgQueries: fi({
      queries: (n.data?.sessions || []).map((e, n) => ({
        queryKey: qO(i, e.client_instanceid, `changing`),
        queryFn: async () => KO(r, e, `changing`, o[n].data),
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
        let t = qO(i, e.client_instanceid, `changing`);
        c.removeQueries({ queryKey: t });
      }
      for (let e of o) e.refetch();
    },
  };
}
function YO(e, t) {
  return [VO, e, t];
}
function XO(e, t = !0) {
  let n = Lr(),
    { rgQueries: r } = JO(void 0, t);
  return f({
    queryKey: YO(n, e),
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
function ZO(e, t, n) {
  let r = On(),
    i = XO(e),
    a = Lr(),
    o = x();
  return l({
    mutationFn: async () => {
      let n = yr.Init(OO);
      (n.Body().set_appid(e), n.Body().set_client_instanceid(t));
      let s = await RO.InstallClientApp(r, n);
      if (s.GetEResult() != 1)
        throw (
          console.error(`Received error from InstallClientApp`, s.GetEResult()),
          Error(`Error from InstallClientApp: ${s.GetEResult()}`)
        );
      let c = i?.data;
      (c && c.get(t) && c.get(t).app.SetDownloading(),
        o.setQueryData(YO(a, e), c),
        i.refetch());
    },
    onSuccess: n,
  });
}
var QO = `KDJh8Ln6DTA-`,
  $O = `cwU-YKIjBO4-`,
  ek = {
    bFitToWindow: !0,
    bOverlapHorizontal: !0,
    bMatchWidth: !1,
    bShiftToFitWindow: !0,
    bDisablePopTop: !0,
  };
function tk(e) {
  let { setRemoteClientID: t, rgSessions: n } = e,
    r = (0, K.useCallback)(
      (e) => {
        n?.length &&
          yn(
            (0, q.jsx)(nk, { sessions: n, setRemoteDownloadClientId: t }),
            e,
            ek,
          );
      },
      [t, n],
    );
  return n?.length
    ? (0, q.jsx)(`button`, {
        onClick: r,
        className: QO,
        children: (0, q.jsx)(ik, {}),
      })
    : null;
}
function nk({ sessions: e, setRemoteDownloadClientId: t }) {
  return (0, q.jsx)(`ul`, {
    className: $O,
    children: e.map((e) =>
      (0, q.jsx)(
        Mr,
        {
          onSelected: () => {
            t(e.client_instanceid);
          },
          children: F(
            `#GamesList_Client_Indicator`,
            rk(e.device_type) ?? ``,
            e.machine_name,
          ),
        },
        e.client_instanceid,
      ),
    ),
  });
}
function rk(e) {
  switch (e) {
    case 1:
      return F(`#Library_DeviceType_PC`);
    case 544:
      return F(`#Library_DeviceType_SteamDeck`);
    case 546:
      return F(`#Library_DeviceType_SteamMachine`);
    case $t:
      return F(`#Library_DeviceType_SteamFrame`);
    default:
      return;
  }
}
function ik(e) {
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
var ak = `O2hPihu9CRE-`,
  ok = `QhSrcq93V7k-`,
  sk = `_7MjE60RYT0Q-`,
  ck = `UlZXEOyFPCE-`,
  lk = `_8wO4Yx-lIIo-`,
  uk = `FA82eVIC918-`,
  dk = `_0sgpZmAY-zs-`,
  fk = `RLntJ4QtQLU-`;
function pk(e) {
  let { appid: t } = e,
    n = hc(t),
    { data: r } = V(n),
    [i, a, o] = wr(!1),
    { mutateAsync: s } = gf({ appid: t }),
    [c, l] = (0, K.useState)(!1),
    u = no(t);
  return !r || u
    ? null
    : (0, q.jsxs)(q.Fragment, {
        children: [
          (0, q.jsxs)(Te, {
            onClick: async () => {
              try {
                (l(!0), await s(), Xa(), l(!1), a());
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
              F(`#Sale_AddToLibrary_NoPlus`),
            ],
          }),
          (0, q.jsx)(fn, {
            children: (0, q.jsx)(on, {
              active: i,
              children: (0, q.jsx)(vn, {
                strTitle: F(`#Sale_AddedToLibrary`),
                strDescription: or(
                  `#Sale_AddToLibrary_DialogDesc`,
                  (0, q.jsx)(`span`, { className: sk, children: r.name || `` }),
                ),
                closeModal: o,
                bAlertDialog: !0,
                children: (0, q.jsx)(mk, { id: n }),
              }),
            }),
          }),
        ],
      });
}
function mk(e) {
  let { id: t } = e,
    n = UO(),
    [r, i] = (0, K.useState)(0),
    [a, o] = (0, K.useState)(!1),
    { data: s } = kt(t);
  if (!t || !(`appid` in t) || I.IN_CLIENT || !s) return null;
  let c = n.data?.sessions?.filter((e) => {
    switch (e.device_type) {
      default:
      case 1:
        {
          if (!e.os_type) return !1;
          let t = mO(e.os_type);
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
      className: ak,
      children: a
        ? (0, q.jsx)(gk, { session: e })
        : (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(hk, {
                rgAcceptableSession: c,
                session: e,
                setSessionIndex: i,
              }),
              (0, q.jsx)(`div`, {
                className: uk,
                children: (0, q.jsx)(_k, {
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
function hk(e) {
  let { rgAcceptableSession: t, session: n, setSessionIndex: r } = e;
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsx)(`div`, { children: F(`#Sale_AddToLibrary_RemoteDownload`) }),
      (0, q.jsxs)(`div`, {
        className: dk,
        children: [
          (0, q.jsx)(`span`, { className: fk, children: n.machine_name }),
          (0, q.jsx)(tk, {
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
function gk(e) {
  let { session: t } = e;
  return (0, q.jsxs)(`div`, {
    className: ck,
    children: [
      F(`#Sale_AddToLibrary_DownloadStarted`),
      (0, q.jsx)(`br`, {}),
      (0, q.jsx)(`a`, {
        href: `${I.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${t.client_instanceid}`,
        children: F(`#Sale_AddToLibrary_SeeDownloadProgress`),
      }),
    ],
  });
}
function _k(e) {
  let { appid: t, session: n, setRemoteDownloadRequested: r } = e,
    i = ZO(t, n.client_instanceid);
  return (0, q.jsxs)(q.Fragment, {
    children: [
      (0, q.jsxs)(Te, {
        onClick: () => {
          (i.mutateAsync(), r(!0));
        },
        children: [(0, q.jsx)(qt, {}), F(`#Button_StartDownload`)],
      }),
      (0, q.jsx)(`div`, {
        className: lk,
        children: (0, q.jsx)(`a`, {
          href: `https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409`,
          className: ok,
          children: F(`#Button_Learn`),
        }),
      }),
    ],
  });
}
function vk(e) {
  let {
    rgTagIDs: t,
    bShowEvenIfNoTags: n,
    bHideTitle: r,
    bLargeText: i,
    bNoStoreLinks: a,
  } = e;
  return t?.length > 0 || n
    ? (0, q.jsxs)(`div`, {
        className: M(yu, i ? ku : ``, `SaleTagBlockCtn`),
        children: [
          !r &&
            (0, q.jsx)(`div`, {
              className: M(`F3fTh-GlONs-`, `WidgetTagTitle`),
              children: P.Localize(`#GameHover_Tags`),
            }),
          t?.length > 0
            ? (0, q.jsx)(`div`, {
                className: M(Au, `TagBox`),
                children: t.map((e) =>
                  (0, q.jsx)(bk, { tagid: e, bNoStoreLinks: a }, e),
                ),
              })
            : (0, q.jsx)(`div`, { children: P.Localize(`#Broadcast_None`) }),
        ],
      })
    : null;
}
function yk(e) {
  let { tagid: t, className: n } = e,
    r = uc(t, L.LANGUAGE);
  if (!r) return null;
  let i = kr(Dn(L.LANGUAGE)),
    a = `${L.STORE_BASE_URL}tags/${i}/${r}`;
  return (0, q.jsx)(QE, {
    url: a,
    className: M(ju, `WidgetTag`, n),
    children: r,
  });
}
function bk(e) {
  let { tagid: t, className: n, bNoStoreLinks: r } = e,
    i = kr(Dn(L.LANGUAGE)),
    a = uc(t, L.LANGUAGE),
    o = `${L.STORE_BASE_URL}tags/${i}/${a}`;
  return a
    ? r
      ? (0, q.jsx)(`div`, { className: M(ju, `WidgetTag`, n), children: a })
      : (0, q.jsx)(QE, {
          url: o,
          className: M(ju, `WidgetTag`, n),
          children: a,
        })
    : null;
}
var xk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.impressions || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { impressions: { n: 1, c: Sk, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification`;
    }
  },
  Sk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: O.readEnum, bw: E.writeEnum },
            appid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            num_impressions: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CProductImpressionsFromClient_Notification_Impression`;
    }
  },
  Ck;
(function (e) {
  function t(e, t) {
    return e.SendNotification(
      `ExperimentService.ReportProductImpressionsFromClient#1`,
      U(xk, t),
      { ePrivilege: 1 },
    );
  }
  e.ReportProductImpressionsFromClient = t;
})((Ck ||= {}));
function wk(e) {
  return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
}
function Tk(e) {
  return ge(() => [e.m_nBuildID, e.m_strBuildBranch]);
}
function Ek(e) {
  let [t, n] = (0, K.useState)(() => Nk.GetClanEventModel(e)),
    r = je(`usePartnerEventByEventGID`);
  return (
    (0, K.useEffect)(() => {
      e &&
        t?.GID != e &&
        (Nk.Init(),
        Nk.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs([e], [], r).then(
          (t) => {
            t?.length == 1 && t[0].GID == e && !r.token.reason && n(t[0]);
          },
        ));
    }, [e, t, r]),
    t
  );
}
function Dk(e, t, n) {
  let [r, i] = (0, K.useState)(t ? Nk.GetClanEventModel(t) : void 0),
    [a, o] = (0, K.useState)(!!e && !!t),
    [s, c] = (0, K.useState)(),
    [l, u] = (0, K.useState)(1),
    d = je(`usePartnerEventByClanAccountAndEventGID`);
  return (
    (0, K.useEffect)(() => {
      (async () => {
        try {
          if (r?.GID != t && t && e) {
            Nk.Init();
            let r = w.InitFromClanID(e, I.EUNIVERSE),
              a;
            try {
              a = await Nk.LoadPartnerEventFromClanEventGIDAndClanSteamID(
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
function Ok(e) {
  let t = `` + e,
    n = At.GetELanguageFallback(e);
  return (e != n && (t += `_` + n), t);
}
async function kk(e, t, n, r) {
  let i = [],
    a = {
      clan_accountid: e ? e.GetAccountID() : void 0,
      gidevent: t,
      count_before: 0,
      count_after: n,
      lang_list: Ok(Dn(I.LANGUAGE)),
      origin: self.origin,
      only_summaries: !0,
    },
    o = I.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
    s = await Sl.default.get(o, { params: a, cancelToken: r?.token });
  if (s?.data?.success == 1) {
    let e = t == null ? s.data.events : s.data.events.slice(1);
    for (let t of e) t.gid && (t.jsondata?.length ?? 0) > 0 && i.push(t);
  } else {
    let t = ti(s?.data);
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
function Ak(e, t, n) {
  let {
    data: r,
    error: i,
    fetchNextPage: a,
    hasNextPage: o,
    isFetching: s,
    isFetchingNextPage: c,
    status: l,
    refetch: u,
  } = pi({
    queryKey: [`ClanEventSummaries`, e, t],
    queryFn: ({ pageParam: r }) => kk(e, r, t, n),
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
var jk = class {
    appid;
    date;
    can_play;
    playtime;
    announcementid;
    constructor(e) {
      (et(
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
  Mk = class {
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
    m_QueuedEventTimeout = new cn();
    m_PendingInfoPromise;
    m_PendingInfoResolve;
    m_bLoadedFromConfig = !1;
    Init() {
      if (!this.m_bLoadedFromConfig) {
        let e = wk(`PartnerEventStore`);
        this.ValidateStoreDefault(e) &&
          e.forEach((e) => {
            if (e) {
              let t = new w(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                this.m_mapExistingEvents.set(Zb + e.announcement_body.gid, n);
            }
          });
        let t = Bn(`partnereventstore`, `application_config`);
        this.ValidateStoreDefault(t) &&
          t.forEach((e) => {
            if (e) {
              let t = new w(e.clan_steamid),
                n = this.InsertEventModelFromClanEventData(t, e);
              e.announcement_body &&
                !this.m_mapExistingEvents.has(
                  `old_announce_` + e.announcement_body.gid,
                ) &&
                this.m_mapExistingEvents.set(Zb + e.announcement_body.gid, n);
            }
          });
        let n = Bn(`partnereventadjacents`, `application_config`);
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
      if (e !== void 0) return this.m_mapExistingEvents.get(e);
    }
    BHasClanEventModel(e) {
      return this.m_mapExistingEvents.has(e);
    }
    BHasClanAnnouncementGID(e) {
      if (e === void 0) return !1;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return !!t && this.BHasClanEventModel(t);
    }
    GetClanEventGIDFromAnnouncementGID(e) {
      return this.m_mapAnnouncementBodyToEvent.get(e);
    }
    GetClanEventFromAnnouncementGID(e) {
      if (e === void 0) return;
      let t = this.m_mapAnnouncementBodyToEvent.get(e);
      return t ? this.m_mapExistingEvents.get(t) : void 0;
    }
    DefaultEventSortFunction(e, t) {
      return e.startTime == t.startTime
        ? Ke(e.GID ?? ``, t.GID ?? ``)
        : (t.startTime ?? 0) - (e.startTime ?? 0);
    }
    RegisterClanEvents(e) {
      if (e)
        for (let t of e) {
          let e = Kx(t);
          if (!this.m_mapExistingEvents.has(e)) {
            let e = new w(t.clan_steamid);
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
      let n = qx(e, t);
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
          e.jsondata.localized_per_day_sales_header.push(H([], 32, null));
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
          I.STORE_BASE_URL +
          (r
            ? `events/ajaxgeteventdetailsforedit/`
            : `events/ajaxgeteventdetails/`),
        a = Ok(Dn(I.LANGUAGE)),
        o = {
          clanid_list: e.join(`,`),
          uniqueid_list: t.join(`,`),
          lang_list: a,
          origin: self.origin,
        };
      try {
        let e = await Sl.default.get(i, { params: o, withCredentials: r });
        this.RegisterClanEvents(e.data.events);
      } catch (e) {
        let t = ti(e);
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
    async InternalLoadAdjacentPartnerEvents(e, t, n, r, a, o, s, c) {
      let l = [];
      if (!t || !this.m_mapAdjacentAnnouncementGIDs.has(t)) {
        let u = I.STORE_BASE_URL + `events/ajaxgetadjacentpartnerevents/`,
          d = Ok(Dn(I.LANGUAGE));
        s?.only_summaries &&
          !this.m_bOnlySummary &&
          (et(
            this.m_bOnlySummary,
            `Only Summary: Incorrect parameter passed in, unsetting`,
          ),
          (s.only_summaries = void 0));
        let f = {
          clan_accountid: n ? n.GetAccountID() : void 0,
          appid: r,
          count_before: a,
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
          let a = await Sl.default.get(u, { params: f, cancelToken: c?.token });
          if (a?.data?.success == 1)
            i(() => {
              for (let e of a.data.events) {
                let t = Kx(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new w(e.clan_steamid);
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
            let e = ti(a?.data);
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
          let t = ti(e);
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
    async LoadPartnerEventsPageable(e, t, n = 0, r = 0, a) {
      let o = [],
        s = I.STORE_BASE_URL + `events/ajaxgetpartnereventspageable/`,
        c = {
          clan_accountid: e ? e.GetAccountID() : void 0,
          appid: t,
          offset: n,
          count: r,
          l: I.LANGUAGE,
          origin: self.origin,
          exclude_tags: a && a.length > 0 ? a?.join(`,`) : void 0,
        };
      try {
        let e = await Sl.default.get(s, { params: c });
        i(() => {
          for (let t of e.data.events) {
            let e = Kx(t);
            if (!this.m_mapExistingEvents.has(e)) {
              let e = new w(t.clan_steamid);
              this.InsertEventModelFromClanEventData(e, t);
            }
            o.push(this.m_mapExistingEvents.get(e));
          }
        });
      } catch (e) {
        console.error(
          `LoadClanEventInDateRange hit error ` + ti(e).strErrorMsg,
        );
      }
      return o;
    }
    async GetBestEventsForCurrentUser(e, t, n) {
      let r = [],
        a = {
          l: I.LANGUAGE,
          include_steam_blog: !0,
          filter_to_played_within_days: e,
          include_only_game_updates: t,
        },
        o = I.STORE_BASE_URL + `events/ajaxgetbesteventsforuser`,
        s = await Sl.default.get(o, {
          params: a,
          withCredentials: !0,
          cancelToken: n ? n.token : void 0,
        });
      if (!s.data?.events) {
        let e = s.data?.err_msg || ``;
        throw Error(`GetBestEventsForCurrentUser request failed (${e})`);
      }
      return (
        i(() => {
          for (let e of s.data.events) {
            let t = Kx(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new w(e.clan_steamid);
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
    async LoadImportantEventsAroundToday(e, t, n, r, a, o) {
      let s = [],
        c = [];
      (c.push({ priority: 0, appids: t }),
        n && c.push({ priority: 1, appids: n }),
        r && c.push({ priority: 2, appids: r }));
      let l = {
          count: e,
          strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
          filterToEventTypes: o ? o.toString() : ``,
          l: I.LANGUAGE,
        },
        u = I.STORE_BASE_URL + `events/ajaxgettodayboundedevents`,
        d = await Sl.default.get(u, {
          params: l,
          withCredentials: !0,
          cancelToken: a.token,
        });
      return (
        i(() => {
          for (let e of d.data.events) {
            let t = Kx(e);
            if (!this.m_mapExistingEvents.has(t)) {
              let t = new w(e.clan_steamid);
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
      (n.append(`sessionid`, gr()),
        n.append(`bDelete`, `1`),
        n.append(`gid`, t));
      let r = await Sl.default.post(
        I.COMMUNITY_BASE_URL +
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
            this.m_mapExistingEvents.delete(Zb + t),
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
      let o = Ok(a ? 0 : Dn(I.LANGUAGE)),
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
        let n = hn();
        (n === `community`
          ? ((l = I.COMMUNITY_BASE_URL),
            (l += e ? `gid/` + e.ConvertTo64BitString() : `ogg/` + t),
            (l += `/`))
          : (l =
              n === `partner`
                ? I.PARTNER_BASE_URL + `sales/`
                : I.STORE_BASE_URL + `events/`),
          (l += `ajaxgetpartnereventforedit`),
          (c = { params: s, withCredentials: !0 }));
      } else
        ((l = I.STORE_BASE_URL + `events/ajaxgetpartnerevent`),
          (c = { params: s, withCredentials: !1 }));
      try {
        let e = await Sl.default.get(l, c);
        if (e.data.success !== 1) return;
        let t = e.data.event,
          n = Kx(t);
        if (
          !this.m_mapExistingEvents.has(n) ||
          (this.m_mapExistingEvents.get(n).rtime32_last_modified ?? 0) <
            (t.rtime32_last_modified ?? 0) ||
          (this.m_mapExistingEvents.get(n).rtime32_moderator_reviewed ?? 0) <
            (t.rtime_mod_reviewed ?? 0)
        ) {
          et(t.clan_steamid, `ClanSteamID is missing from data we received`);
          let e = new w(t.clan_steamid);
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
          return this.m_mapExistingEvents.get(Zb + r);
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
      let e = ae(36e5);
      if (e != this.m_tsUpdatedAppsQueryTime) {
        this.m_tsUpdatedAppsQueryTime = e;
        let t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
          n = I.STORE_BASE_URL + `updated/ajaxgetmyappsraw`,
          r = await Sl.default.get(n, { params: t, withCredentials: !0 });
        r.data.apps &&
          r.data.apps.length > 0 &&
          i(() => {
            let e = new Map(r.data.apps?.map((e) => [e.appid, new jk(e)]));
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
        I.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/announcements/ajaxgetlocalization/` +
        t;
      return (await Sl.default.get(n)).data.localization;
    }
    async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, n) {
      let r = [],
        a = I.STORE_BASE_URL + `events/ajaxgetbatchedpartnerevent/`,
        o = Ok(Dn(I.LANGUAGE)),
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
          Sl.default.get(a, { params: e, cancelToken: n ? n.token : void 0 }),
        );
      }
      try {
        let e = await Promise.all([...l]),
          t = 0;
        i(() =>
          e.forEach((e) => {
            if (e && e.data && e.data.events)
              for (let t of e.data.events) {
                let e = Kx(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new w(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                r.push(this.m_mapExistingEvents.get(e));
              }
            else {
              let t = ti(e);
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
        let t = ti(e);
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
        let a = `${I.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
          o = new FormData();
        (o.append(`sessionid`, gr()),
          o.append(`gidclanevent`, t),
          o.append(`json`, JSON.stringify(n)),
          o.append(`pageStyles`, JSON.stringify(r)));
        let s = await Sl.default.post(a, o, { withCredentials: !0 });
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
        i = ti(s);
      } catch (e) {
        i = ti(e);
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
(z([g], Mk.prototype, `m_mapExistingEvents`, void 0),
  z([g], Mk.prototype, `m_mapAnnouncementBodyToEvent`, void 0),
  z([g], Mk.prototype, `m_mapClanToGIDs`, void 0),
  z([g], Mk.prototype, `m_mapAppIDToGIDs`, void 0),
  z([g], Mk.prototype, `m_mapUpdatedApps`, void 0),
  z([re], Mk.prototype, `Init`, null),
  z([j], Mk.prototype, `GetPartnerEventChangeCallback`, null),
  z([re], Mk.prototype, `RegisterClanEvents`, null),
  z([re], Mk.prototype, `InsertEventModelFromClanEventData`, null),
  z([re], Mk.prototype, `DeleteClanEvent`, null),
  z([re], Mk.prototype, `RemoveGIDFromList`, null),
  z([re], Mk.prototype, `FlushEventFromCache`, null),
  z([j], Mk.prototype, `SavePartnerEventSaleAssets`, null));
var Nk = new Mk();
Ft(`g_PartnerEventStore`, Nk);
var Pk = new Mk(!0);
Ft(`g_PartnerEventSummaryStore`, Pk);
var Fk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            gameid: { n: 2, br: O.readUint64String, bw: E.writeUint64String },
            client_instance_id: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            title: { n: 4, br: O.readString, bw: E.writeString },
            cellid: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            rtmp_token: {
              n: 6,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            thumbnail_upload: { n: 7, br: O.readBool, bw: E.writeBool },
            sysid: { n: 9, br: O.readUint32, bw: E.writeUint32 },
            allow_webrtc: { n: 10, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Request`;
    }
  },
  Ik = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            thumbnail_upload_address: {
              n: 2,
              br: O.readString,
              bw: E.writeString,
            },
            thumbnail_upload_token: {
              n: 3,
              br: O.readString,
              bw: E.writeString,
            },
            thumbnail_interval_seconds: {
              n: 4,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            heartbeat_interval_seconds: {
              n: 5,
              br: O.readUint32,
              bw: E.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BeginBroadcastSession_Response`;
    }
  },
  Lk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_EndBroadcastSession_Request`;
    }
  },
  Rk = class e extends G.Message {
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
  zk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            cellid: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            as_rtmp: { n: 3, br: O.readBool, bw: E.writeBool },
            delay_seconds: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            rtmp_token: {
              n: 5,
              d: `0`,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            upload_ip_address: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            is_replay: { n: 7, br: O.readBool, bw: E.writeBool },
            sysid: { n: 8, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Request`;
    }
  },
  Bk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_token || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_token: { n: 1, br: O.readString, bw: E.writeString },
            upload_address: { n: 2, br: O.readString, bw: E.writeString },
            broadcast_upload_id: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            enable_replay: { n: 6, br: O.readBool, bw: E.writeBool },
            http_address: { n: 7, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBroadcastUpload_Response`;
    }
  },
  Vk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            upload_token: { n: 2, br: O.readString, bw: E.writeString },
            upload_address: { n: 3, br: O.readString, bw: E.writeString },
            http_address: { n: 4, br: O.readString, bw: E.writeString },
            broadcast_upload_id: {
              n: 5,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            heartbeat_interval_seconds: {
              n: 6,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            is_rtmp: { n: 7, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastUploadStarted_Notification`;
    }
  },
  Hk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Request`;
    }
  },
  Uk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gameid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: O.readUint64String, bw: E.writeUint64String },
            title: { n: 2, br: O.readString, bw: E.writeString },
            num_viewers: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            permission: { n: 4, br: O.readInt32, bw: E.writeInt32 },
            is_rtmp: { n: 5, br: O.readBool, bw: E.writeBool },
            seconds_delay: { n: 6, br: O.readInt32, bw: E.writeInt32 },
            is_publisher: { n: 7, br: O.readBool, bw: E.writeBool },
            thumbnail_url: { n: 8, br: O.readString, bw: E.writeString },
            update_interval: { n: 9, br: O.readInt32, bw: E.writeInt32 },
            is_uploading: { n: 10, br: O.readBool, bw: E.writeBool },
            duration: { n: 11, br: O.readUint32, bw: E.writeUint32 },
            is_replay: { n: 12, br: O.readBool, bw: E.writeBool },
            is_capturing_vod: { n: 13, br: O.readBool, bw: E.writeBool },
            is_store_whitelisted: { n: 14, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastStatus_Response`;
    }
  },
  Wk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Request`;
    }
  },
  Gk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_url || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            thumbnail_url: { n: 1, br: O.readString, bw: E.writeString },
            update_interval: { n: 2, br: O.readInt32, bw: E.writeInt32 },
            num_viewers: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            duration: { n: 4, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastThumbnail_Response`;
    }
  },
  Kk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            existing_broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            client_cell: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            watch_location: { n: 6, br: O.readEnum, bw: E.writeEnum },
            is_webrtc: { n: 7, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Request`;
    }
  },
  qk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.response || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            response: { n: 1, br: O.readEnum, bw: E.writeEnum },
            mpd_url: { n: 2, br: O.readString, bw: E.writeString },
            broadcast_id: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            gameid: { n: 4, br: O.readUint64String, bw: E.writeUint64String },
            title: { n: 5, br: O.readString, bw: E.writeString },
            num_viewers: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            permission: { n: 7, br: O.readInt32, bw: E.writeInt32 },
            is_rtmp: { n: 8, br: O.readBool, bw: E.writeBool },
            seconds_delay: { n: 9, br: O.readInt32, bw: E.writeInt32 },
            viewer_token: {
              n: 10,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            hls_m3u8_master_url: { n: 11, br: O.readString, bw: E.writeString },
            heartbeat_interval: { n: 12, br: O.readInt32, bw: E.writeInt32 },
            thumbnail_url: { n: 13, br: O.readString, bw: E.writeString },
            is_webrtc: { n: 14, br: O.readBool, bw: E.writeBool },
            webrtc_session_id: {
              n: 15,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_offer_sdp: { n: 16, br: O.readString, bw: E.writeString },
            webrtc_turn_server: { n: 17, br: O.readString, bw: E.writeString },
            is_replay: { n: 18, br: O.readBool, bw: E.writeBool },
            duration: { n: 19, br: O.readInt32, bw: E.writeInt32 },
            cdn_auth_url_parameters: {
              n: 20,
              br: O.readString,
              bw: E.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WatchBroadcast_Response`;
    }
  },
  Jk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            representation: { n: 4, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_HeartbeatBroadcast_Notification`;
    }
  },
  Yk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            viewer_token: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopWatchingBroadcast_Notification`;
    }
  },
  Xk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            approval_response: { n: 2, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Request`;
    }
  },
  Zk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: O.readBool, bw: E.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_InviteToBroadcast_Response`;
    }
  },
  Qk = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.permission || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            permission: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            gameid: { n: 2, br: O.readUint64String, bw: E.writeUint64String },
            title: { n: 3, br: O.readString, bw: E.writeString },
            game_data_config: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendBroadcastStateToServer_Request`;
    }
  },
  $k = class e extends G.Message {
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
  eA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            state: { n: 2, br: O.readEnum, bw: E.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastViewerState_Notification`;
    }
  },
  tA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WaitingBroadcastViewer_Notification`;
    }
  },
  nA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_relay_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            upload_result: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            too_many_poor_uploads: { n: 4, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StopBroadcastUpload_Notification`;
    }
  },
  rA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SessionClosed_Notification`;
    }
  },
  iA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            num_viewers: { n: 2, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastStatus_Notification`;
    }
  },
  aA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_channel_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_channel_name: {
              n: 2,
              br: O.readString,
              bw: E.writeString,
            },
            broadcast_channel_avatar: {
              n: 3,
              br: O.readString,
              bw: E.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_BroadcastChannelLive_Notification`;
    }
  },
  oA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.thumbnail_upload_token || B(e.M()),
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
              br: O.readString,
              bw: E.writeString,
            },
            thumbnail_broadcast_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            thumbnail_data: { n: 3, br: O.readBytes, bw: E.writeBytes },
            thumbnail_width: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            thumbnail_height: { n: 5, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SendThumbnailToRelay_Notification`;
    }
  },
  sA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_upload_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            upload_result: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastUploadStop_Notification`;
    }
  },
  cA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_ViewerBroadcastInvite_Notification`;
    }
  },
  lA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_NotifyBroadcastSessionHeartbeat_Notification`;
    }
  },
  uA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            client_ip: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            client_cell: { n: 4, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Request`;
    }
  },
  dA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            view_url_template: { n: 3, br: O.readString, bw: E.writeString },
            flair_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: O.readUint32,
              pbr: O.readPackedUint32,
              bw: E.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatInfo_Response`;
    }
  },
  fA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            message: { n: 2, br: O.readString, bw: E.writeString },
            instance_id: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            language: { n: 4, d: 0, br: O.readUint32, bw: E.writeUint32 },
            country_code: { n: 5, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Request`;
    }
  },
  pA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_name || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            persona_name: { n: 1, br: O.readString, bw: E.writeString },
            in_game: { n: 2, br: O.readBool, bw: E.writeBool },
            result: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            cooldown_time_seconds: { n: 4, br: O.readInt32, bw: E.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_PostChatMessage_Response`;
    }
  },
  mA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            flair: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Request`;
    }
  },
  hA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            chat_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            flair: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_UpdateChatMessageFlair_Response`;
    }
  },
  gA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            muted: { n: 3, br: O.readBool, bw: E.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_MuteBroadcastChatUser_Request`;
    }
  },
  _A = class e extends G.Message {
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
  vA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_RemoveUserChatText_Request`;
    }
  },
  yA = class e extends G.Message {
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
  bA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.chat_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            user_steamid: {
              n: 2,
              r: !0,
              q: !0,
              br: O.readFixed64String,
              pbr: O.readPackedFixed64String,
              bw: E.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Request`;
    }
  },
  xA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.persona_names || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { persona_names: { n: 1, c: SA, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response`;
    }
  },
  SA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            persona: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastChatUserNames_Response_PersonaName`;
    }
  },
  CA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            broadcast_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            first_segment: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            num_segments: { n: 4, br: O.readInt32, bw: E.writeInt32 },
            clip_description: { n: 5, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Request`;
    }
  },
  wA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_StartBuildClip_Response`;
    }
  },
  TA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBuildClipStatus_Request`;
    }
  },
  EA = class e extends G.Message {
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
  DA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            start_time: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            end_time: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            video_description: { n: 4, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetClipDetails_Request`;
    }
  },
  OA = class e extends G.Message {
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
  kA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Request`;
    }
  },
  AA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_clip_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            video_id: { n: 2, br: O.readUint64String, bw: E.writeUint64String },
            channel_id: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            app_id: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            accountid_broadcaster: {
              n: 5,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            accountid_clipmaker: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            video_description: { n: 7, br: O.readString, bw: E.writeString },
            start_time: { n: 8, br: O.readUint32, bw: E.writeUint32 },
            length_milliseconds: { n: 9, br: O.readUint32, bw: E.writeUint32 },
            thumbnail_path: { n: 10, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetClipDetails_Response`;
    }
  },
  jA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            update_token: { n: 2, br: O.readBool, bw: E.writeBool },
            broadcast_delay: { n: 3, br: O.readInt32, bw: E.writeInt32 },
            app_id: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            required_app_id: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            broadcast_chat_permission: {
              n: 6,
              d: 0,
              br: O.readEnum,
              bw: E.writeEnum,
            },
            broadcast_buffer: { n: 7, br: O.readInt32, bw: E.writeInt32 },
            steamid: {
              n: 8,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            chat_rate_limit: { n: 9, br: O.readUint32, bw: E.writeUint32 },
            enable_replay: { n: 10, br: O.readBool, bw: E.writeBool },
            is_partner_chat_only: { n: 11, br: O.readBool, bw: E.writeBool },
            wordban_list: { n: 12, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_SetRTMPInfo_Request`;
    }
  },
  MA = class e extends G.Message {
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
  NA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            steamid: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Request`;
    }
  },
  PA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_permission || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            broadcast_permission: { n: 1, br: O.readInt32, bw: E.writeInt32 },
            rtmp_host: { n: 2, br: O.readString, bw: E.writeString },
            rtmp_token: { n: 3, br: O.readString, bw: E.writeString },
            broadcast_delay: { n: 4, br: O.readInt32, bw: E.writeInt32 },
            app_id: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            required_app_id: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            broadcast_chat_permission: {
              n: 7,
              br: O.readEnum,
              bw: E.writeEnum,
            },
            broadcast_buffer: { n: 8, br: O.readInt32, bw: E.writeInt32 },
            steamid: {
              n: 9,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            chat_rate_limit: { n: 10, br: O.readUint32, bw: E.writeUint32 },
            enable_replay: { n: 11, br: O.readBool, bw: E.writeBool },
            is_partner_chat_only: { n: 12, br: O.readBool, bw: E.writeBool },
            wordban_list: { n: 13, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetRTMPInfo_Response`;
    }
  },
  FA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.row_limit || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            row_limit: { n: 1, d: 100, br: O.readUint32, bw: E.writeUint32 },
            start_time: { n: 2, d: 0, br: O.readUint32, bw: E.writeUint32 },
            upload_id: {
              n: 3,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            steamid: {
              n: 4,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            session_id: {
              n: 5,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Request`;
    }
  },
  IA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_stats || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { upload_stats: { n: 1, c: LA, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response`;
    }
  },
  LA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_result || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            upload_result: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            time_stopped: { n: 2, br: O.readUint32, bw: E.writeUint32 },
            seconds_uploaded: { n: 3, br: O.readUint32, bw: E.writeUint32 },
            max_viewers: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            resolution_x: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            resolution_y: { n: 6, br: O.readUint32, bw: E.writeUint32 },
            avg_bandwidth: { n: 7, br: O.readUint32, bw: E.writeUint32 },
            total_bytes: {
              n: 8,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            app_id: { n: 9, br: O.readUint32, bw: E.writeUint32 },
            total_unique_viewers: {
              n: 10,
              br: O.readUint32,
              bw: E.writeUint32,
            },
            total_seconds_watched: {
              n: 11,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            time_started: { n: 12, br: O.readUint32, bw: E.writeUint32 },
            upload_id: {
              n: 13,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            local_address: { n: 14, br: O.readString, bw: E.writeString },
            remote_address: { n: 15, br: O.readString, bw: E.writeString },
            frames_per_second: { n: 16, br: O.readUint32, bw: E.writeUint32 },
            num_representations: { n: 17, br: O.readUint32, bw: E.writeUint32 },
            app_name: { n: 18, br: O.readString, bw: E.writeString },
            is_replay: { n: 19, br: O.readBool, bw: E.writeBool },
            session_id: {
              n: 20,
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastUploadStats_Response_UploadStats`;
    }
  },
  RA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.upload_id || B(e.M()),
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
              br: O.readUint64String,
              bw: E.writeUint64String,
            },
            steamid: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Request`;
    }
  },
  zA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.viewer_stats || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            viewer_stats: { n: 1, c: BA, r: !0, q: !0 },
            country_stats: { n: 2, c: VA, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response`;
    }
  },
  BA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            num_viewers: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_ViewerStats`;
    }
  },
  VA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: O.readString, bw: E.writeString },
            num_viewers: { n: 2, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_GetBroadcastViewerStats_Response_CountryStats`;
    }
  },
  HA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            started: { n: 2, br: O.readBool, bw: E.writeBool },
            offer: { n: 3, br: O.readString, bw: E.writeString },
            resolution_x: { n: 4, br: O.readUint32, bw: E.writeUint32 },
            resolution_y: { n: 5, br: O.readUint32, bw: E.writeUint32 },
            fps: { n: 6, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStartResult_Request`;
    }
  },
  UA = class e extends G.Message {
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
  WA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStopped_Request`;
    }
  },
  GA = class e extends G.Message {
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
  KA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            answer: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Request`;
    }
  },
  qA = class e extends G.Message {
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
  JA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sdp_mid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sdp_mid: { n: 1, br: O.readString, bw: E.writeString },
            sdp_mline_index: { n: 2, br: O.readInt32, bw: E.writeInt32 },
            candidate: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTC_Candidate`;
    }
  },
  YA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.webrtc_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            candidate: { n: 2, c: JA },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddHostCandidate_Request`;
    }
  },
  XA = class e extends G.Message {
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
  ZA = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            candidate: { n: 3, c: JA },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Request`;
    }
  },
  QA = class e extends G.Message {
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
  $A = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcaster_steamid || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            candidate_generation: { n: 3, br: O.readUint32, bw: E.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Request`;
    }
  },
  ej = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.candidate_generation || B(e.M()),
        G.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            candidate_generation: { n: 1, br: O.readUint32, bw: E.writeUint32 },
            candidates: { n: 2, c: JA, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCGetHostCandidates_Response`;
    }
  },
  tj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCNeedTURNServer_Notification`;
    }
  },
  nj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cellid || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cellid: { n: 1, br: O.readUint32, bw: E.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Request`;
    }
  },
  rj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.turn_server || B(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            turn_server: { n: 1, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCLookupTURNServer_Response`;
    }
  },
  ij = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            turn_server: { n: 2, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCHaveTURNServer_Notification`;
    }
  },
  aj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            viewer_steamid: {
              n: 3,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            viewer_token: {
              n: 4,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCStart_Notification`;
    }
  },
  oj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            answer: { n: 3, br: O.readString, bw: E.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCSetAnswer_Notification`;
    }
  },
  sj = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.broadcast_session_id || B(e.M()),
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
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            webrtc_session_id: {
              n: 2,
              br: O.readFixed64String,
              bw: E.writeFixed64String,
            },
            candidate: { n: 3, c: JA },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= k(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return T(e.M(), t, n);
    }
    static fromObject(t) {
      return R(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return C(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      A(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBroadcast_WebRTCAddViewerCandidate_Notification`;
    }
  },
  cj;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Broadcast.BeginBroadcastSession#1`, U(Fk, t, n), Ik, {
      ePrivilege: 1,
    });
  }
  e.BeginBroadcastSession = t;
  function n(e, t, n) {
    return e.SendMsg(`Broadcast.EndBroadcastSession#1`, U(Lk, t, n), Rk, {
      ePrivilege: 1,
    });
  }
  e.EndBroadcastSession = n;
  function r(e, t, n) {
    return e.SendMsg(`Broadcast.StartBroadcastUpload#1`, U(zk, t, n), Bk, {
      ePrivilege: 1,
    });
  }
  e.StartBroadcastUpload = r;
  function i(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastUploadStop#1`,
      U(sA, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastUploadStop = i;
  function a(e, t, n) {
    return e.SendMsg(`Broadcast.WatchBroadcast#1`, U(Kk, t, n), qk, {
      ePrivilege: 2,
    });
  }
  e.WatchBroadcast = a;
  function o(e, t) {
    return e.SendNotification(`Broadcast.HeartbeatBroadcast#1`, U(Jk, t), {
      ePrivilege: 2,
    });
  }
  e.HeartbeatBroadcast = o;
  function s(e, t) {
    return e.SendNotification(`Broadcast.StopWatchingBroadcast#1`, U(Yk, t), {
      ePrivilege: 2,
    });
  }
  e.StopWatchingBroadcast = s;
  function c(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastStatus#1`, U(Hk, t, n), Uk, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastStatus = c;
  function l(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastThumbnail#1`, U(Wk, t, n), Gk, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastThumbnail = l;
  function u(e, t, n) {
    return e.SendMsg(`Broadcast.InviteToBroadcast#1`, U(Xk, t, n), Zk, {
      ePrivilege: 1,
    });
  }
  e.InviteToBroadcast = u;
  function d(e, t, n) {
    return e.SendMsg(
      `Broadcast.SendBroadcastStateToServer#1`,
      U(Qk, t, n),
      $k,
      { ePrivilege: 1 },
    );
  }
  e.SendBroadcastStateToServer = d;
  function f(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyBroadcastSessionHeartbeat#1`,
      U(lA, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyBroadcastSessionHeartbeat = f;
  function p(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatInfo#1`, U(uA, t, n), dA, {
      ePrivilege: 2,
    });
  }
  e.GetBroadcastChatInfo = p;
  function m(e, t, n) {
    return e.SendMsg(`Broadcast.PostChatMessage#1`, U(fA, t, n), pA, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.PostChatMessage = m;
  function h(e, t, n) {
    return e.SendMsg(`Broadcast.UpdateChatMessageFlair#1`, U(mA, t, n), hA, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.UpdateChatMessageFlair = h;
  function g(e, t, n) {
    return e.SendMsg(`Broadcast.MuteBroadcastChatUser#1`, U(gA, t, n), _A, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.MuteBroadcastChatUser = g;
  function _(e, t, n) {
    return e.SendMsg(`Broadcast.RemoveUserChatText#1`, U(vA, t, n), yA, {
      ePrivilege: 3,
      rgBrowserAPISites: [`store`, `community`],
    });
  }
  e.RemoveUserChatText = _;
  function v(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastChatUserNames#1`, U(bA, t, n), xA, {
      ePrivilege: 1,
    });
  }
  e.GetBroadcastChatUserNames = v;
  function y(e, t, n) {
    return e.SendMsg(`Broadcast.StartBuildClip#1`, U(CA, t, n), wA, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.StartBuildClip = y;
  function b(e, t, n) {
    return e.SendMsg(`Broadcast.GetBuildClipStatus#1`, U(TA, t, n), EA, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBuildClipStatus = b;
  function x(e, t, n) {
    return e.SendMsg(`Broadcast.SetClipDetails#1`, U(DA, t, n), OA, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.SetClipDetails = x;
  function ee(e, t, n) {
    return e.SendMsg(`Broadcast.GetClipDetails#1`, U(kA, t, n), AA, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetClipDetails = ee;
  function S(e, t, n) {
    return e.SendMsg(`Broadcast.SetRTMPInfo#1`, U(jA, t, n), MA, {
      ePrivilege: 1,
    });
  }
  e.SetRTMPInfo = S;
  function te(e, t, n) {
    return e.SendMsg(`Broadcast.GetRTMPInfo#1`, U(NA, t, n), PA, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRTMPInfo = te;
  function ne(e, t) {
    return e.SendNotification(
      `Broadcast.NotifyWebRTCHaveTURNServer#1`,
      U(ij, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyWebRTCHaveTURNServer = ne;
  function re(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStartResult#1`, U(HA, t, n), UA, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStartResult = re;
  function ie(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCStopped#1`, U(WA, t, n), GA, {
      ePrivilege: 1,
    });
  }
  e.WebRTCStopped = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCSetAnswer#1`, U(KA, t, n), qA, {
      ePrivilege: 1,
    });
  }
  e.WebRTCSetAnswer = ae;
  function oe(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCLookupTURNServer#1`, U(nj, t, n), rj, {
      ePrivilege: 1,
    });
  }
  e.WebRTCLookupTURNServer = oe;
  function se(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddHostCandidate#1`, U(YA, t, n), XA, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddHostCandidate = se;
  function ce(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCAddViewerCandidate#1`, U(ZA, t, n), QA, {
      ePrivilege: 1,
    });
  }
  e.WebRTCAddViewerCandidate = ce;
  function le(e, t, n) {
    return e.SendMsg(`Broadcast.WebRTCGetHostCandidates#1`, U($A, t, n), ej, {
      ePrivilege: 1,
    });
  }
  e.WebRTCGetHostCandidates = le;
  function ue(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastUploadStats#1`, U(FA, t, n), IA, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastUploadStats = ue;
  function de(e, t, n) {
    return e.SendMsg(`Broadcast.GetBroadcastViewerStats#1`, U(RA, t, n), zA, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBroadcastViewerStats = de;
})((cj ||= {}));
var lj;
(function (e) {
  ((e.NotifyBroadcastViewerStateHandler = {
    name: `BroadcastClient.NotifyBroadcastViewerState#1`,
    request: eA,
  }),
    (e.NotifyWaitingBroadcastViewerHandler = {
      name: `BroadcastClient.NotifyWaitingBroadcastViewer#1`,
      request: tA,
    }),
    (e.NotifyBroadcastUploadStartedHandler = {
      name: `BroadcastClient.NotifyBroadcastUploadStarted#1`,
      request: Vk,
    }),
    (e.NotifyStopBroadcastUploadHandler = {
      name: `BroadcastClient.NotifyStopBroadcastUpload#1`,
      request: nA,
    }),
    (e.NotifySessionClosedHandler = {
      name: `BroadcastClient.NotifySessionClosed#1`,
      request: rA,
    }),
    (e.NotifyViewerBroadcastInviteHandler = {
      name: `BroadcastClient.NotifyViewerBroadcastInvite#1`,
      request: cA,
    }),
    (e.NotifyBroadcastStatusHandler = {
      name: `BroadcastClient.NotifyBroadcastStatus#1`,
      request: iA,
    }),
    (e.NotifyBroadcastChannelLiveHandler = {
      name: `BroadcastClient.NotifyBroadcastChannelLive#1`,
      request: aA,
    }),
    (e.SendThumbnailToRelayHandler = {
      name: `BroadcastClient.SendThumbnailToRelay#1`,
      request: oA,
    }),
    (e.NotifyWebRTCNeedTURNServerHandler = {
      name: `BroadcastClient.NotifyWebRTCNeedTURNServer#1`,
      request: tj,
    }),
    (e.NotifyWebRTCStartHandler = {
      name: `BroadcastClient.NotifyWebRTCStart#1`,
      request: aj,
    }),
    (e.NotifyWebRTCSetAnswerHandler = {
      name: `BroadcastClient.NotifyWebRTCSetAnswer#1`,
      request: oj,
    }),
    (e.NotifyWebRTCAddViewerCandidateHandler = {
      name: `BroadcastClient.NotifyWebRTCAddViewerCandidate#1`,
      request: sj,
    }));
})((lj ||= {}));
async function uj(e, t) {
  let n = L.STORE_BASE_URL + `video/details/` + e + `/0`,
    r = await fetch(n, { credentials: `include`, signal: t });
  if (!r.ok) throw Error(n + ` answered ` + r.status);
  let i = await r.json();
  if (i?.success != 1 && i?.success != `ready`)
    throw Error(`video/details on ` + e + ` answered ` + i?.success);
  return { appid: e, video_url: i.video_url, bookmark: i.bookmark };
}
function dj(e) {
  return [`video`, `vod`, e];
}
function fj(e) {
  return { queryKey: dj(e), queryFn: ({ signal: t }) => uj(e, t), retry: !1 };
}
function pj(e) {
  let { data: t, isPending: n } = f(fj(e));
  return { vodInfo: t, bLoading: n };
}
export {
  KT as $,
  bu as $a,
  Xp as $i,
  Mx as $n,
  qs as $o,
  Wy as $r,
  Wo as $s,
  sC as $t,
  bT as A,
  Fu as Aa,
  no as Ac,
  Rg as Ai,
  aS as An,
  al as Ao,
  Ab as Ar,
  Ls as As,
  pw as At,
  zT as B,
  xd as Ba,
  La as Bc,
  bg as Bi,
  gx as Bn,
  Gc as Bo,
  lb as Br,
  Ds as Bs,
  HC as Bt,
  zE as C,
  Yu as Ca,
  Yo as Cc,
  Pv as Ci,
  RS as Cn,
  yl as Co,
  Db as Cr,
  fs as Cs,
  sw as Ct,
  TE as D,
  Qu as Da,
  Ho as Dc,
  qg as Di,
  oS as Dn,
  fl as Do,
  zb as Dr,
  Ao as Ds,
  tw as Dt,
  jE as E,
  vd as Ea,
  rs as Ec,
  O_ as Ei,
  KS as En,
  ml as Eo,
  Jb as Er,
  Vo as Es,
  nw as Et,
  wT as F,
  Xu as Fa,
  Ba as Fc,
  Lg as Fi,
  Ux as Fn,
  rl as Fo,
  yb as Fr,
  Us as Fs,
  $C as Ft,
  AT as G,
  zu as Ga,
  ug as Gi,
  Sx as Gn,
  fc as Go,
  Qb as Gr,
  ys as Gs,
  TC as Gt,
  CT as H,
  Bu as Ha,
  fi as Hc,
  _g as Hi,
  vx as Hn,
  Pc as Ho,
  fb as Hr,
  Os as Hs,
  zC as Ht,
  RT as I,
  Ad as Ia,
  ya as Ic,
  Pg as Ii,
  Vx as In,
  il as Io,
  Yb as Ir,
  ks as Is,
  QC as It,
  xT as J,
  cu as Ja,
  qm as Ji,
  Ex as Jn,
  lc as Jo,
  nb as Jr,
  rc as Js,
  _C as Jt,
  FT as K,
  su as Ka,
  lg as Ki,
  Px as Kn,
  hc as Ko,
  Zb as Kr,
  qo as Ks,
  SC as Kt,
  kT as L,
  qu as La,
  ji as Lc,
  kg as Li,
  zx as Ln,
  Xc as Lo,
  cx as Lr,
  ds as Ls,
  fw as Lt,
  TT as M,
  gd as Ma,
  $a as Mc,
  Bg as Mi,
  tS as Mn,
  nl as Mo,
  kb as Mr,
  Rs as Ms,
  uw as Mt,
  HT as N,
  Wl as Na,
  Ya as Nc,
  Ig as Ni,
  nS as Nn,
  Zc as No,
  Rb as Nr,
  cs as Ns,
  XC as Nt,
  PT as O,
  $u as Oa,
  ns as Oc,
  Kg as Oi,
  HS as On,
  ul as Oo,
  $b as Or,
  Xs as Os,
  YC as Ot,
  VT as P,
  ld as Pa,
  Ha as Pc,
  Fg as Pi,
  qx as Pn,
  Qc as Po,
  Nb as Pr,
  jo as Ps,
  gw as Pt,
  GT as Q,
  gu as Qa,
  Zp as Qi,
  Nx as Qn,
  Oo as Qo,
  Gy as Qr,
  Io as Qs,
  uS as Qt,
  MT as R,
  dd as Ra,
  Fi as Rc,
  Og as Ri,
  Rx as Rn,
  Yc as Ro,
  bb as Rr,
  Ts as Rs,
  lw as Rt,
  LE as S,
  du as Sa,
  Ro as Sc,
  Mv as Si,
  _S as Sn,
  _l as So,
  Eb as Sr,
  us as Ss,
  ZC as St,
  DE as T,
  ud as Ta,
  ms as Tc,
  K_ as Ti,
  LS as Tn,
  pl as To,
  $ as Tr,
  hs as Ts,
  ow as Tt,
  NT as U,
  Mu as Ua,
  oi as Uc,
  yg as Ui,
  yx as Un,
  Cc as Uo,
  Bb as Ur,
  $s as Us,
  PC as Ut,
  DT as V,
  au as Va,
  pi as Vc,
  vg as Vi,
  _x as Vn,
  Vc as Vo,
  db as Vr,
  Xo as Vs,
  VC as Vt,
  LT as W,
  eu as Wa,
  gg as Wi,
  xx as Wn,
  pc as Wo,
  Ob as Wr,
  gs as Ws,
  jC as Wt,
  UT as X,
  Lu as Xa,
  Um as Xi,
  Ox as Xn,
  ac as Xo,
  $y as Xr,
  Zo as Xs,
  DS as Xt,
  BT as Y,
  xu as Ya,
  Wm as Yi,
  Ax as Yn,
  dc as Yo,
  tb as Yr,
  Ps as Ys,
  OS as Yt,
  WT as Z,
  hu as Za,
  J as Zi,
  Ix as Zn,
  uc as Zo,
  Qy as Zr,
  tc as Zs,
  ES as Zt,
  eD as _,
  Zu as _a,
  ec as _c,
  qv as _i,
  lS as _n,
  Ol as _o,
  wb as _r,
  Ws as _s,
  yw as _t,
  fA as a,
  Ef as aa,
  Ks as ac,
  By as ai,
  CS as an,
  Ql as ao,
  ib as ar,
  Zs as as,
  hT as at,
  ZE as b,
  hd as ba,
  ls as bc,
  Nv as bi,
  dS as bn,
  bl as bo,
  qb as br,
  Fs as bs,
  iw as bt,
  Mk as c,
  Kd as ca,
  Ns as cc,
  ly as ci,
  vS as cn,
  Eu as co,
  gb as cr,
  nc as cs,
  vT as ct,
  Tk as d,
  Gd as da,
  es as dc,
  ay as di,
  AS as dn,
  Hl as do,
  Pb as dr,
  _s as ds,
  uT as dt,
  qp as ea,
  Qs as ec,
  Ky as ei,
  kS as en,
  Ul as eo,
  Lx as er,
  ws as es,
  qT as et,
  Dk as f,
  jd as fa,
  as as fc,
  iy as fi,
  oC as fn,
  Vl as fo,
  Vb as fr,
  bs as fs,
  lT as ft,
  tD as g,
  Ju as ga,
  No as gc,
  Yv as gi,
  FS as gn,
  Al as go,
  vb as gr,
  Ys as gs,
  bw as gt,
  vk as h,
  Du as ha,
  As as hc,
  Xv as hi,
  jS as hn,
  Ml as ho,
  Kb as hr,
  Hs as hs,
  xw as ht,
  gA as i,
  jf as ia,
  ko as ic,
  Vy as ii,
  bS as in,
  $l as io,
  ob as ir,
  Bo as is,
  mT as it,
  ST as j,
  _d as ja,
  ao as jc,
  Ng as ji,
  eS as jn,
  tl as jo,
  jb as jr,
  zo as js,
  dw as jt,
  jT as k,
  kd as ka,
  co as kc,
  zg as ki,
  iS as kn,
  ll as ko,
  Mb as kr,
  Fo as ks,
  ew as kt,
  Nk as l,
  Hd as la,
  Jo as lc,
  oy as li,
  fS as ln,
  Zl as lo,
  Lb as lr,
  os as ls,
  fT as lt,
  wk as m,
  td as ma,
  Mo as mc,
  ey as mi,
  MS as mn,
  Nl as mo,
  Wb as mr,
  ic as ms,
  eT as mt,
  pj as n,
  fp as na,
  Gs as nc,
  Jy as ni,
  US as nn,
  uu as no,
  hx as nr,
  Qo as ns,
  IT as nt,
  vA as o,
  bf as oa,
  Es as oc,
  dy as oi,
  xS as on,
  Tu as oo,
  hb as or,
  Bs as os,
  gT as ot,
  Ek as p,
  ed as pa,
  is as pc,
  ny as pi,
  PS as pn,
  Bl as po,
  Ub as pr,
  Ss as ps,
  tT as pt,
  JT as q,
  ou as qa,
  Oh as qi,
  Dx as qn,
  gc as qo,
  eb as qr,
  Po as qs,
  vC as qt,
  cj as r,
  Mf as ra,
  Go as rc,
  Hy as ri,
  fC as rn,
  nu as ro,
  Hb as rr,
  $o as rs,
  pT as rt,
  mA as s,
  Jd as sa,
  ss as sc,
  my as si,
  WS as sn,
  Ou as so,
  cb as sr,
  zs as ss,
  yT as st,
  fj as t,
  Hp as ta,
  ps as tc,
  qy as ti,
  mS as tn,
  iu as to,
  px as tr,
  xs as ts,
  ET as tt,
  Ak as u,
  Vd as ua,
  Uo as uc,
  sy as ui,
  IS as un,
  Iu as uo,
  Fb as ur,
  Vs as us,
  dT as ut,
  QE as v,
  Sd as va,
  Is as vc,
  Kv as vi,
  pC as vn,
  kl as vo,
  Sb as vr,
  Lo as vs,
  _w as vt,
  EE as w,
  Od as wa,
  Ms as wc,
  q_ as wi,
  XS as wn,
  hl as wo,
  tx as wr,
  Cs as ws,
  cw as wt,
  BE as x,
  bd as xa,
  js as xc,
  Iv as xi,
  yS as xn,
  vl as xo,
  xb as xr,
  vs as xs,
  rw as xt,
  XE as y,
  yd as ya,
  Ko as yc,
  Uv as yi,
  zS as yn,
  wl as yo,
  Cb as yr,
  ts as ys,
  aw as yt,
  OT as z,
  wu as za,
  ea as zc,
  Eg as zi,
  jx as zn,
  Jc as zo,
  pb as zr,
  Js as zs,
  JC as zt,
};
