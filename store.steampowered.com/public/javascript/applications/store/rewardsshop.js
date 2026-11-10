/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./profileshowcases.js",
      "./rolldown-runtime.js",
      "./libraries.js",
      "./main.js",
      "../../../css/applications/store/main.css",
      "./layout.js",
      "../../../css/applications/store/layout.css",
      "../../../css/applications/store/profileshowcases.css",
      "./bundle.js",
      "./steammessages_loyalty_rewards_pb.js",
      "../../../css/applications/store/bundle.css",
    ]),
) => i.map((i) => d[i]);
/* Third-party software licenses can be found at licenses.txt */
import { o as e, r as t } from "./rolldown-runtime.js";
import {
  $ as n,
  At as r,
  B as i,
  Ct as a,
  F as o,
  L as s,
  Lt as c,
  Nt as l,
  Pt as u,
  St as d,
  U as f,
  V as p,
  W as m,
  a as h,
  c as ee,
  ft as te,
  jt as ne,
  kt as re,
  l as g,
  o as ie,
  rt as ae,
  s as oe,
  st as se,
  tt as ce,
  u as _,
} from "./libraries.js";
import "./modals.js";
import { t as le } from "./throbber.js";
import { c as ue } from "./stringutils.js";
import { i as de } from "./eventdevfeaturestore.js";
import { n as fe, t as pe } from "./csstransitionwrapper.js";
import { n as me, r as he, t as ge } from "./steammessages_quest_pb.js";
import {
  a as _e,
  c as ve,
  d as ye,
  f as be,
  h as v,
  i as xe,
  l as Se,
  n as Ce,
  o as we,
  p as Te,
  r as Ee,
  u as De,
} from "./steammessages_loyalty_rewards_pb.js";
import { n as Oe, r as ke, t as Ae } from "./steammessages_salerewards_pb.js";
import { t as y } from "./appinfostore.js";
import { t as je } from "./persona.js";
import { n as Me } from "./storeitemhooks.js";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./unstyledbutton.js";
import {
  $ as Le,
  $a as Re,
  $x as b,
  Ac as x,
  Bb as ze,
  Cb as Be,
  Cc as S,
  Dx as Ve,
  Hu as He,
  Iu as Ue,
  Jb as We,
  Jx as Ge,
  Jy as Ke,
  Lu as C,
  Ly as qe,
  Mx as Je,
  Nb as w,
  Pc as Ye,
  Pn as Xe,
  Q as Ze,
  Qx as T,
  Ra as Qe,
  Uo as $e,
  Wo as et,
  Wy as E,
  Xx as D,
  Y as tt,
  Yc as nt,
  Yy as rt,
  Zi as it,
  Zx as O,
  _t as at,
  _u as ot,
  at as st,
  bS as ct,
  bb as lt,
  bt as ut,
  bu as dt,
  eS as k,
  ec as ft,
  eo as pt,
  gx as A,
  ht as mt,
  hx as j,
  it as ht,
  ix as M,
  jn as gt,
  ju as _t,
  jx as N,
  nS as P,
  nx as vt,
  ol as yt,
  ot as bt,
  ox as xt,
  qx as St,
  rS as F,
  rb as Ct,
  rl as wt,
  rt as Tt,
  st as Et,
  tS as I,
  to as Dt,
  ut as Ot,
  vi as kt,
  yn as At,
  za as jt,
  zx as Mt,
} from "./main.js";
import { n as Nt } from "./partnereventslogin.js";
import { i as Pt, n as Ft, r as It } from "./steamavatar.js";
import { t as L } from "./communityitemstore.js";
import {
  a as Lt,
  c as Rt,
  d as zt,
  f as Bt,
  i as Vt,
  l as Ht,
  n as Ut,
  o as Wt,
  r as Gt,
  s as Kt,
  t as R,
  u as qt,
} from "./layout.js";
import { n as Jt, t as Yt } from "./focusablelink.js";
var z = e(c()),
  Xt,
  Zt;
function Qt(e, t) {
  return !(
    e === t ||
    (z.isValidElement(e) &&
      z.isValidElement(t) &&
      e.key != null &&
      e.key === t.key)
  );
}
var $t = { out: `out-in`, in: `in-out` },
  en = function (e, t, n) {
    return function () {
      var r;
      (e.props[t] && (r = e.props)[t].apply(r, arguments), n());
    };
  },
  tn =
    ((Xt = {}),
    (Xt[$t.out] = function (e) {
      var t = e.current,
        n = e.changeState;
      return z.cloneElement(t, {
        in: !1,
        onExited: en(t, `onExited`, function () {
          n(ie, null);
        }),
      });
    }),
    (Xt[$t.in] = function (e) {
      var t = e.current,
        n = e.changeState,
        r = e.children;
      return [
        t,
        z.cloneElement(r, {
          in: !0,
          onEntered: en(r, `onEntered`, function () {
            n(ie);
          }),
        }),
      ];
    }),
    Xt),
  nn =
    ((Zt = {}),
    (Zt[$t.out] = function (e) {
      var t = e.children,
        n = e.changeState;
      return z.cloneElement(t, {
        in: !0,
        onEntered: en(t, `onEntered`, function () {
          n(h, z.cloneElement(t, { in: !0 }));
        }),
      });
    }),
    (Zt[$t.in] = function (e) {
      var t = e.current,
        n = e.children,
        r = e.changeState;
      return [
        z.cloneElement(t, {
          in: !1,
          onExited: en(t, `onExited`, function () {
            r(h, z.cloneElement(n, { in: !0 }));
          }),
        }),
        z.cloneElement(n, { in: !0 }),
      ];
    }),
    Zt),
  rn = (function (e) {
    n(t, e);
    function t() {
      var t,
        n = [...arguments];
      return (
        (t = e.call.apply(e, [this].concat(n)) || this),
        (t.state = { status: h, current: null }),
        (t.appeared = !1),
        (t.changeState = function (e, n) {
          (n === void 0 && (n = t.state.current),
            t.setState({ status: e, current: n }));
        }),
        t
      );
    }
    var r = t.prototype;
    return (
      (r.componentDidMount = function () {
        this.appeared = !0;
      }),
      (t.getDerivedStateFromProps = function (e, t) {
        return e.children == null
          ? { current: null }
          : t.status === `entering` && e.mode === $t.in
            ? { status: ie }
            : t.current && Qt(t.current, e.children)
              ? { status: oe }
              : { current: z.cloneElement(e.children, { in: !0 }) };
      }),
      (r.render = function () {
        var e = this.props,
          t = e.children,
          n = e.mode,
          r = this.state,
          i = r.status,
          a = r.current,
          o = {
            children: t,
            current: a,
            changeState: this.changeState,
            status: i,
          },
          s;
        switch (i) {
          case ie:
            s = nn[n](o);
            break;
          case oe:
            s = tn[n](o);
            break;
          case h:
            s = a;
        }
        return z.createElement(
          ee.Provider,
          { value: { isMounting: !this.appeared } },
          s,
        );
      }),
      t
    );
  })(z.Component);
((rn.propTypes = {}), (rn.defaultProps = { mode: $t.out }));
var an = `xON8oDeeQhs-`,
  on = `SAk8QmeqGJg-`,
  sn = `MdNYC8c7zH0-`,
  cn = `pGfRJrjVHOQ-`,
  ln = `Q-jxe0XbXcU-`,
  un = `_3z-SJMDRMwU-`,
  dn = `T5b2NUonuC8-`,
  fn = `Z1DSZ-P71Sw-`,
  pn = `_8wwlqrCjvo0-`,
  mn = `UM-1qKdbZ4I-`,
  hn = `_6aQRU79liM4-`,
  gn = `YpUxlZlervQ-`,
  _n = `wrP5kGljuJw-`,
  vn = `a7mfE-yLDlw-`,
  yn = `sZ-DvM8mA0s-`,
  bn = `oQatG4OMqS4-`,
  xn = `Ndm52J2H-oY-`,
  Sn = `nfM0ceTUX2k-`,
  Cn = `lUpW8G-YTfI-`,
  wn = `YXDzqbFtyiA-`,
  Tn = `_7JSvJmQTuhw-`,
  En = `_3i1ifZyHkw4-`,
  Dn = `_3NxdOyLSE-8-`,
  On = `vlvdujm6InE-`,
  kn = `uLWIA8kG0mY-`,
  B = e(u(), 1),
  An = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country_code || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            country_code: { n: 1, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Request`;
    }
  },
  jn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotions || D(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { promotions: { n: 1, c: Mn, r: !0, q: !0 } },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response`;
    }
  },
  Mn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.promotionid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            promotionid: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            promotion_description: {
              n: 2,
              br: b.readString,
              bw: F.writeString,
            },
            minimum_cart_amount: {
              n: 3,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            minimum_cart_amount_for_display: {
              n: 4,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            discount_amount: {
              n: 5,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            currency_code: { n: 6, br: b.readInt32, bw: F.writeInt32 },
            available_use_count: { n: 7, br: b.readInt32, bw: F.writeInt32 },
            promotional_discount_type: {
              n: 8,
              br: b.readInt32,
              bw: F.writeInt32,
            },
            loyalty_reward_id: { n: 9, br: b.readInt32, bw: F.writeInt32 },
            localized_name_token: {
              n: 10,
              br: b.readString,
              bw: F.writeString,
            },
            max_use_count: { n: 11, br: b.readInt32, bw: F.writeInt32 },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails`;
    }
  },
  Nn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            opt_out_in_library_events: {
              n: 2,
              d: !1,
              br: b.readBool,
              bw: F.writeBool,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPerAppEmailOptions`;
    }
  },
  Pn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            opt_out_in_library_events: {
              n: 2,
              d: !1,
              br: b.readBool,
              bw: F.writeBool,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPerClanEmailOptions`;
    }
  },
  Fn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_out_token || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_out_token: { n: 1, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetOptOutEmailOptions_Request`;
    }
  },
  In = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.email || D(e.M()),
        B.Message.initialize(this, t, 0, -1, [10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            email: { n: 1, br: b.readString, bw: F.writeString },
            opt_out_all: { n: 2, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_sales: { n: 3, br: b.readBool, bw: F.writeBool },
            opt_out_seasonal_promo: { n: 4, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_releases: {
              n: 5,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_greenlight_releases: {
              n: 6,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_curator_connect: { n: 7, br: b.readBool, bw: F.writeBool },
            opt_out_creator_home_releases: {
              n: 8,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_in_library_events: {
              n: 9,
              br: b.readBool,
              bw: F.writeBool,
            },
            per_app_opt_outs: { n: 10, c: Nn, r: !0, q: !0 },
            per_clan_opt_outs: { n: 11, c: Pn, r: !0, q: !0 },
            opt_out_loyalty_awards_received: {
              n: 12,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_partner_messages: {
              n: 13,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_year_in_review: { n: 14, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_demo_releases: {
              n: 15,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              n: 16,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_next_fest_starts: {
              n: 17,
              d: !0,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_theme_sale_starts: {
              n: 18,
              d: !0,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_season_pass_ship: {
              n: 19,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_roadmap_ship: { n: 20, br: b.readBool, bw: F.writeBool },
            is_self: { n: 21, br: b.readBool, bw: F.writeBool },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetOptOutEmailOptions_Response`;
    }
  },
  Ln = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.opt_out_token || D(e.M()),
        B.Message.initialize(this, t, 0, -1, [10, 11], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            opt_out_token: { n: 1, br: b.readString, bw: F.writeString },
            opt_out_all: { n: 2, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_sales: { n: 3, br: b.readBool, bw: F.writeBool },
            opt_out_seasonal_promo: { n: 4, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_releases: {
              n: 5,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_greenlight_releases: {
              n: 6,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_curator_connect: { n: 7, br: b.readBool, bw: F.writeBool },
            opt_out_creator_home_releases: {
              n: 8,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_in_library_events: {
              n: 9,
              br: b.readBool,
              bw: F.writeBool,
            },
            per_app_opt_outs: { n: 10, c: Nn, r: !0, q: !0 },
            per_clan_opt_outs: { n: 11, c: Pn, r: !0, q: !0 },
            opt_out_loyalty_awards_received: {
              n: 12,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_partner_messages: {
              n: 13,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_year_in_review: { n: 14, br: b.readBool, bw: F.writeBool },
            opt_out_wishlist_demo_releases: {
              n: 15,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              n: 16,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_next_fest_starts: {
              n: 17,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_theme_sale_starts: {
              n: 18,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_season_pass_ship: {
              n: 19,
              br: b.readBool,
              bw: F.writeBool,
            },
            opt_out_roadmap_ship: { n: 20, br: b.readBool, bw: F.writeBool },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_SetOptOutEmailOptions_Request`;
    }
  },
  Rn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_SetOptOutEmailOptions_Response`;
    }
  },
  zn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.has_wallet || D(e.M()),
        B.Message.initialize(this, t, 0, -1, [13], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            has_wallet: { n: 1, br: b.readBool, bw: F.writeBool },
            user_country_code: { n: 2, br: b.readString, bw: F.writeString },
            wallet_country_code: { n: 3, br: b.readString, bw: F.writeString },
            wallet_state: { n: 4, br: b.readString, bw: F.writeString },
            balance: { n: 5, br: b.readInt64String, bw: F.writeInt64String },
            delayed_balance: {
              n: 6,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            currency_code: { n: 7, br: b.readInt32, bw: F.writeInt32 },
            time_most_recent_txn: { n: 8, br: b.readUint32, bw: F.writeUint32 },
            most_recent_txnid: {
              n: 9,
              br: b.readUint64String,
              bw: F.writeUint64String,
            },
            balance_in_usd: {
              n: 10,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            delayed_balance_in_usd: {
              n: 11,
              br: b.readInt64String,
              bw: F.writeInt64String,
            },
            has_wallet_in_other_regions: {
              n: 12,
              br: b.readBool,
              bw: F.writeBool,
            },
            other_regions: {
              n: 13,
              r: !0,
              q: !0,
              br: b.readInt32,
              pbr: b.readPackedInt32,
              bw: F.writeRepeatedInt32,
            },
            formatted_balance: { n: 14, br: b.readString, bw: F.writeString },
            formatted_delayed_balance: {
              n: 15,
              br: b.readString,
              bw: F.writeString,
            },
            delayed_balance_available_min_time: {
              n: 16,
              br: b.readInt32,
              bw: F.writeInt32,
            },
            delayed_balance_available_max_time: {
              n: 17,
              br: b.readInt32,
              bw: F.writeInt32,
            },
            delayed_balance_newest_source: {
              n: 18,
              br: b.readInt32,
              bw: F.writeInt32,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetWalletDetails_Response`;
    }
  },
  Bn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_balance_in_usd || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_balance_in_usd: { n: 1, br: b.readBool, bw: F.writeBool },
            wallet_region: { n: 2, d: 1, br: b.readInt32, bw: F.writeInt32 },
            include_formatted_balance: {
              n: 3,
              br: b.readBool,
              bw: F.writeBool,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetClientWalletDetails_Request`;
    }
  },
  Vn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAccountLinkStatus_Request`;
    }
  },
  Hn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pwid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            pwid: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            identity_verification: {
              n: 2,
              br: b.readUint32,
              bw: F.writeUint32,
            },
            performed_age_verification: {
              n: 3,
              br: b.readBool,
              bw: F.writeBool,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetAccountLinkStatus_Response`;
    }
  },
  Un = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: b.readUint32, bw: F.writeUint32 } },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CancelLicenseForApp_Request`;
    }
  },
  Wn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CancelLicenseForApp_Response`;
    }
  },
  Gn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: F.writeFixed64String,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetUserCountry_Request`;
    }
  },
  Kn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.country || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { country: { n: 1, br: b.readString, bw: F.writeString } },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetUserCountry_Response`;
    }
  },
  qn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_limit || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_limit: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            invite_duration: { n: 2, br: b.readUint32, bw: F.writeUint32 },
            invite_note: { n: 3, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CreateFriendInviteToken_Request`;
    }
  },
  Jn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_token || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_token: { n: 1, br: b.readString, bw: F.writeString },
            invite_limit: {
              n: 2,
              br: b.readUint64String,
              bw: F.writeUint64String,
            },
            invite_duration: {
              n: 3,
              br: b.readUint64String,
              bw: F.writeUint64String,
            },
            time_created: { n: 4, br: b.readFixed32, bw: F.writeFixed32 },
            valid: { n: 5, br: b.readBool, bw: F.writeBool },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_CreateFriendInviteToken_Response`;
    }
  },
  Yn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetFriendInviteTokens_Request`;
    }
  },
  Xn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tokens || D(e.M()),
        B.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { tokens: { n: 1, c: Jn, r: !0, q: !0 } },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_GetFriendInviteTokens_Response`;
    }
  },
  Zn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: F.writeFixed64String,
            },
            invite_token: { n: 2, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_ViewFriendInviteToken_Request`;
    }
  },
  Qn = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.valid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            valid: { n: 1, br: b.readBool, bw: F.writeBool },
            steamid: { n: 2, br: b.readUint64String, bw: F.writeUint64String },
            invite_duration: {
              n: 3,
              br: b.readUint64String,
              bw: F.writeUint64String,
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_ViewFriendInviteToken_Response`;
    }
  },
  $n = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: F.writeFixed64String,
            },
            invite_token: { n: 2, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RedeemFriendInviteToken_Request`;
    }
  },
  er = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RedeemFriendInviteToken_Response`;
    }
  },
  tr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.invite_token || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_token: { n: 1, br: b.readString, bw: F.writeString },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RevokeFriendInviteToken_Request`;
    }
  },
  nr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RevokeFriendInviteToken_Response`;
    }
  },
  rr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.compat_tool || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            compat_tool: { n: 1, br: b.readUint32, bw: F.writeUint32 },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RegisterCompatTool_Request`;
    }
  },
  ir = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), B.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserAccount_RegisterCompatTool_Response`;
    }
  },
  ar = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: F.writeFixed64String,
            },
            client_token: { n: 2, br: b.readBytes, bw: F.writeBytes },
            expiry: { n: 3, br: b.readUint32, bw: F.writeUint32 },
            deviceid: { n: 4, br: b.readUint32, bw: F.writeUint32 },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_Token`;
    }
  },
  or = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.result || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            result: { n: 1, br: b.readUint32, bw: F.writeUint32 },
            token: { n: 2, c: ar },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_AuthorizeDevice_Response`;
    }
  },
  sr = class e extends B.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || D(e.M()),
        B.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: b.readFixed64String,
              bw: F.writeFixed64String,
            },
            appid: { n: 2, br: b.readUint32, bw: F.writeUint32 },
            device_info: { n: 3, br: b.readString, bw: F.writeString },
            deviceid: { n: 4, br: b.readUint32, bw: F.writeUint32 },
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
      return P(e.M(), t, n);
    }
    static fromObject(t) {
      return T(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new B.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      I(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new B.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEmbeddedClient_AuthorizeCurrentDevice_Request`;
    }
  },
  cr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `UserAccount.GetAvailableValveDiscountPromotions#1`,
      A(An, t, n),
      jn,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetAvailableValveDiscountPromotions = t;
  function n(e, t, n) {
    return e.SendMsg(`UserAccount.GetOptOutEmailOptions#1`, A(Fn, t, n), In, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  e.GetOptOutEmailOptions = n;
  function r(e, t, n) {
    return e.SendMsg(`UserAccount.SetOptOutEmailOptions#1`, A(Ln, t, n), Rn, {
      ePrivilege: 2,
    });
  }
  e.SetOptOutEmailOptions = r;
  function i(e, t, n) {
    return e.SendMsg(`UserAccount.GetClientWalletDetails#1`, A(Bn, t, n), zn, {
      ePrivilege: 1,
    });
  }
  e.GetClientWalletDetails = i;
  function a(e, t, n) {
    return e.SendMsg(`UserAccount.GetAccountLinkStatus#1`, A(Vn, t, n), Hn, {
      ePrivilege: 1,
    });
  }
  e.GetAccountLinkStatus = a;
  function o(e, t, n) {
    return e.SendMsg(`UserAccount.CancelLicenseForApp#1`, A(Un, t, n), Wn, {
      ePrivilege: 1,
    });
  }
  e.CancelLicenseForApp = o;
  function s(e, t, n) {
    return e.SendMsg(`UserAccount.GetUserCountry#1`, A(Gn, t, n), Kn, {
      ePrivilege: 1,
    });
  }
  e.GetUserCountry = s;
  function c(e, t, n) {
    return e.SendMsg(`UserAccount.CreateFriendInviteToken#1`, A(qn, t, n), Jn, {
      ePrivilege: 3,
    });
  }
  e.CreateFriendInviteToken = c;
  function l(e, t, n) {
    return e.SendMsg(`UserAccount.GetFriendInviteTokens#1`, A(Yn, t, n), Xn, {
      ePrivilege: 1,
    });
  }
  e.GetFriendInviteTokens = l;
  function u(e, t, n) {
    return e.SendMsg(`UserAccount.ViewFriendInviteToken#1`, A(Zn, t, n), Qn, {
      ePrivilege: 1,
    });
  }
  e.ViewFriendInviteToken = u;
  function d(e, t, n) {
    return e.SendMsg(`UserAccount.RedeemFriendInviteToken#1`, A($n, t, n), er, {
      ePrivilege: 1,
    });
  }
  e.RedeemFriendInviteToken = d;
  function f(e, t, n) {
    return e.SendMsg(`UserAccount.RevokeFriendInviteToken#1`, A(tr, t, n), nr, {
      ePrivilege: 1,
    });
  }
  e.RevokeFriendInviteToken = f;
  function p(e, t, n) {
    return e.SendMsg(`UserAccount.RegisterCompatTool#1`, A(rr, t, n), ir, {
      ePrivilege: 1,
    });
  }
  e.RegisterCompatTool = p;
})((cr ||= {}));
var lr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `EmbeddedClient.AuthorizeCurrentDevice#1`,
      A(sr, t, n),
      or,
      { ePrivilege: 1 },
    );
  }
  e.AuthorizeCurrentDevice = t;
})((lr ||= {}));
var ur = new URL(
    `../../../images/applications/store/RewardsSeason1Hero.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  dr = e(ce()),
  fr = 1880140,
  pr = 4844660,
  mr = M.EUNIVERSE === 2 ? 404860 : 1675200;
function V(e, t = !1) {
  let n = (e) => E(t ? `${e}_Plural` : e);
  switch (e) {
    case 4:
      return n(`#CommunityItemClass_Emoticon`);
    case 11:
      return n(`#CommunityItemClass_Sticker`);
    case 13:
      return n(`#CommunityItemClass_MiniProfileBackground`);
    case 3:
      return n(`#CommunityItemClass_Background`);
    case 12:
      return n(`#CommunityItemClass_ChatEffect`);
    case 14:
      return n(`#CommunityItemClass_AvatarFrame`);
    case 15:
      return n(`#CommunityItemClass_AnimatedAvatar`);
    case 1:
      return n(`#CommunityItemClass_Badge`);
    case 8:
      return n(`#CommunityItemClass_ProfileModifier`);
    case 16:
      return n(`#CommunityItemClass_SteamDeckKeyboardSkin`);
    case 17:
      return n(`#CommunityItemClass_SteamDeckStartupMovie`);
  }
  return `Unknown ECommunityItemClass`;
}
var hr = `home`,
  gr = class {
    original_point_cost;
    point_cost;
    discount;
    items = [];
    mapItemOwnership = new Map();
  },
  H = class e {
    constructor() {
      re(this);
    }
    m_transport;
    m_anonymousTransport;
    m_config;
    m_lPointsAvailable = new ae(0, 0);
    m_bLoadedCouponPromosForUser = !1;
    m_mapCouponPromos = new Map();
    m_nAppIDFiltersInUseCount = 0;
    m_mapAppIDFilters = new Map();
    m_strAppFilterText = ``;
    m_strSearchTerm = ``;
    m_strSearchPlaceholder = ``;
    m_bLoadedCouponDefinitions = !1;
    m_mapCouponDefinitons = new Map();
    m_mapLoyaltyRewardDefs = new Map();
    m_inflightRewardItemRequestsByID = {};
    m_bLoadedFullInventory = !1;
    m_mapOwnedCommunityItems = new Map();
    m_inflightInventoryRequests = {};
    m_bLoadedActiveBonuses = !1;
    m_rgActiveBonuses = r.array([], { deep: !1 });
    m_mapAppRewards = new Map();
    m_inflightRewardItemRequests = {};
    m_seasonalBadgeDefinition = void 0;
    m_goldenProfileDefinition = void 0;
    m_goldenProfileConfigs = [];
    m_bLoadedRecentlyPlayed = !1;
    m_rgRecentlyPlayed = [];
    m_bSortedGamesWithRewards = !1;
    m_rgSortedAppsWithRewards = r.array([], { deep: !1 });
    m_rgEventAppsWithRewards = r.array([], { deep: !1 });
    m_bLoadedEligibleApps = !1;
    m_rgEligibleApps = [];
    m_mapEligibleApps = new Map();
    m_rgProfileCustomizationsConfig = void 0;
    m_persona = void 0;
    m_equippedItems = {};
    m_rgPurchasedCustomizations = void 0;
    m_rgUpgradedCustomizations = void 0;
    m_bLoadedAwardCost = !1;
    m_unAwardPointsTransferred = 0;
    m_bIsSaleActive = !1;
    m_strFreeItemHeader;
    m_HeroImageFallbackLoader = new Ar(
      (e) =>
        fetch(`${M.STORE_BASE_URL}points/heroimage?appid=${e}`)
          .then((e) => e.json())
          .then((e) => e.img_url),
      (e) => e.toString(),
    );
    m_batchedRewardItemLoader = new Or(
      (e) => v.BatchedQueryRewardItems(this.m_anonymousTransport, e),
      (e) => {
        let t = j.Init(Ce);
        return (t.Body().set_requests(e), t);
      },
      (e) =>
        e.GetEResult() == 1
          ? e
              .Body()
              .responses()
              .map((e) => e.toObject())
          : (console.error(
              `Error when calling LoyaltyRewardsService.BatchedQueryRewardItems: EResult=${e.GetEResult()}`,
            ),
            []),
    );
    m_batchedCommunityInventoryLoader = new Or(
      (e) => he.GetCommunityInventory(this.m_transport, e),
      (e) => {
        let t = j.Init(me);
        return (t.Body().set_filter_appids(e), t);
      },
      (e, t) => {
        if (e.GetEResult() == 1) {
          let { items: n } = e.Body().toObject(),
            r = {};
          return (
            n.forEach((e) => {
              (r[e.appid] || (r[e.appid] = []), r[e.appid].push(e));
            }),
            t.map((e) => r[e] || [])
          );
        }
        return (
          console.error(
            `Error when calling QuestService.GetCommunityInventory: EResult=${e.GetEResult()}`,
          ),
          t.map(() => [])
        );
      },
    );
    Init(e, t) {
      if (
        ((this.m_transport = e.GetServiceTransport()),
        (this.m_anonymousTransport = e.GetAnonymousServiceTransport()),
        (this.m_config = t),
        this.BIsLoggedIn())
      ) {
        let e = new qe(xt.steamid);
        ((this.m_persona = new je(e)), this.RetrievePersonaState());
      }
      (t.eligible_apps
        ? ((this.m_bLoadedEligibleApps = !0),
          (this.m_rgEligibleApps = t.eligible_apps.apps),
          (this.m_mapEligibleApps = new Map(
            this.m_rgEligibleApps.map((e) => [e.appid, e]),
          )))
        : this.LoadEligibleApps(),
        t.profile_customizations_config &&
          (this.m_rgProfileCustomizationsConfig =
            t.profile_customizations_config),
        t.last_played &&
          ((this.m_bLoadedRecentlyPlayed = !0),
          (this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
            t.last_played.games,
          ))),
        t.profile_items_equipped
          ? (this.m_equippedItems = t.profile_items_equipped)
          : this.RefreshEquippedProfileItems(),
        t.profile_customizations_purchased &&
          ((this.m_rgPurchasedCustomizations =
            t.profile_customizations_purchased.purchased_customizations || []),
          (this.m_rgUpgradedCustomizations =
            t.profile_customizations_purchased.upgraded_customizations || [])),
        t.summary
          ? (this.m_lPointsAvailable = ae.fromString(t.summary.summary.points))
          : this.GetLoyaltyRewardsSummary(),
        t.golden_profiles &&
          (this.m_goldenProfileConfigs = t.golden_profiles || []),
        t.can_claim_sale_reward &&
          Nr.Get().InitFreeItemReward(t.can_claim_sale_reward),
        t.is_sale_active && (this.m_bIsSaleActive = t.is_sale_active),
        t.free_item_header && (this.m_strFreeItemHeader = t.free_item_header),
        this.HydrateCustomPages());
    }
    static s_RewardsStore;
    static Get() {
      return ((this.s_RewardsStore ||= new e()), this.s_RewardsStore);
    }
    GetFreeItemHeaderSource() {
      return this.m_strFreeItemHeader;
    }
    GetServiceTransport() {
      return this.m_transport;
    }
    GetConfig() {
      return this.m_config;
    }
    GetCurrentSeasonalAppID() {
      return pr;
    }
    async GetLoyaltyRewardsSummary() {
      if (!this.BIsLoggedIn()) return;
      let e = j.Init(ve);
      e.SetBodyFields({ steamid: xt.steamid });
      let t = await v.GetSummary(this.m_transport, e);
      t.GetEResult() == 1
        ? (this.m_lPointsAvailable = ae.fromString(t.Body().summary().points()))
        : console.error(
            `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
          );
    }
    GetCommunityAwardPointsTransferred() {
      return (
        this.m_bLoadedAwardCost || this.LoadAwardCost(),
        this.m_unAwardPointsTransferred
      );
    }
    async LoadAwardCost() {
      this.m_bLoadedAwardCost = !0;
      let e = j.Init(we),
        t = await v.GetReactionConfig(this.m_transport, e);
      t.GetEResult() == 1
        ? ((this.m_unAwardPointsTransferred = 0),
          t
            .Body()
            .reactions()
            .forEach((e) => {
              this.m_unAwardPointsTransferred =
                this.m_unAwardPointsTransferred == 0
                  ? e.points_transferred()
                  : Math.min(
                      this.m_unAwardPointsTransferred,
                      e.points_transferred(),
                    );
            }))
        : (console.error(
            `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
          ),
          (this.m_bLoadedAwardCost = !1));
    }
    ShowLoginDialog(e) {
      let t = window.location.href;
      if (e !== void 0) {
        let n = t.indexOf(`/reward/`);
        (n === -1
          ? t.endsWith(`/`) && (t = t.slice(0, t.length - 1))
          : (t = t.slice(0, n)),
          (t += `/reward/` + e));
      }
      Nt(t);
    }
    BHasAutumnSaleStarted() {
      return Date.now() / 1e3 > 1606327200;
    }
    BHasAutumnSaleEnded() {
      return Date.now() / 1e3 > 1606845600;
    }
    BIsSaleActive() {
      return this.m_bIsSaleActive;
    }
    BIsLoggedIn() {
      return xt.logged_in;
    }
    GetPointsAvailable() {
      return this.m_lPointsAvailable;
    }
    GetIsUsingAppIDFilters() {
      return this.m_nAppIDFiltersInUseCount != 0;
    }
    SetIsUsingAppIDFilters(e) {
      this.m_nAppIDFiltersInUseCount += e ? 1 : -1;
    }
    GetAppIDFilters() {
      return this.m_mapAppIDFilters;
    }
    AddAppIDFilter(e) {
      this.m_mapAppIDFilters.set(e, !0);
    }
    RemoveAppIDFilter(e) {
      this.m_mapAppIDFilters.delete(e);
    }
    GetCurrentAppFilterText() {
      return this.m_strAppFilterText;
    }
    SetCurrentAppFilterText(e) {
      this.m_strAppFilterText = e;
    }
    GetCurrentSearchTerm() {
      return this.m_strSearchTerm;
    }
    SetCurrentSearchTerm(e) {
      this.m_strSearchTerm = e && e.slice(0, 200);
    }
    GetCurrentSearchPlaceholder() {
      return this.m_strSearchPlaceholder;
    }
    SetCurrentSearchPlaceholder(e) {
      this.m_strSearchPlaceholder = e;
    }
    getLoyaltyRewardDefMap() {
      return this.m_mapLoyaltyRewardDefs;
    }
    async ReloadRewardDefinition(e) {
      let t = await this.LoadRewardDefinitions(e);
      return t.length == 1
        ? (this.m_mapLoyaltyRewardDefs.set(e, t[0]), t[0])
        : null;
    }
    GetRewardDefinitions(...e) {
      let t = e.filter(
        (e) =>
          !this.m_mapLoyaltyRewardDefs.has(e) &&
          !this.m_inflightRewardItemRequestsByID[e],
      );
      if (t.length > 0) {
        t.forEach((e) => (this.m_inflightRewardItemRequestsByID[e] = !0));
        let e = [];
        for (let n = 0; n < Math.ceil(t.length / 100); n++) {
          let r = t.slice(n * 100, n * 100 + 100);
          e.push(this.LoadRewardDefinitions(...r));
        }
        Promise.all(e).then(
          a((e) => {
            e.forEach((e) => {
              e.forEach((e) => {
                (delete this.m_inflightRewardItemRequestsByID[e.defid],
                  this.m_mapLoyaltyRewardDefs.set(e.defid, e));
              });
            });
          }),
        );
      }
      return e.map((e) => this.m_mapLoyaltyRewardDefs.get(e)).filter(Boolean);
    }
    async LoadRewardDefinitions(...e) {
      let t = new Se();
      (t.set_language(M.LANGUAGE),
        t.set_include_direct_purchase_disabled(!0),
        e.forEach((e) => t.add_definitionids(e)));
      let n = await this.m_batchedRewardItemLoader.Load(t);
      return n.eresult == 1
        ? (n.response.count !== n.response.total_count &&
            console.error(
              `LoadRewardDefinitions did not receive all expected definitions (likely to due server-side limiting). The calling code should be paging/batching the request into multiple.`,
            ),
          n.response.definitions)
        : (console.error(
            `Error loading reward definitions by ID: EResult=${n.eresult}`,
          ),
          []);
    }
    QueryRewardDefinitions(e, t, n) {
      let r = e.rewardtype ?? [1],
        i = dt.Get().ExcludedContentDescriptor,
        a = dt.Get().GetExcludedTagsSortedByID(),
        o = this.QueryLoyaltyRewardDefinitions(
          { ...e, excludedContentDescriptors: i, excludedTagIDs: a },
          t,
          n,
          r,
        );
      if (i.length) {
        let t = {
            ...e,
            excludedContentDescriptors: [],
            excludedTagIDs: [],
            maxToReturn: 1,
          },
          n = this.QueryLoyaltyRewardDefinitions(t, 0, 1, r);
        n.cTotalMatching !== void 0 &&
          (o.cTotalMatchingUnfiltered = n.cTotalMatching);
      } else o.cTotalMatchingUnfiltered = o.cTotalMatching;
      return o;
    }
    EResultToErrorMessage(e) {
      switch (e) {
        case 15:
          return E(`#Redeem_Error_AccessDenied`);
        case 24:
          return E(`#Redeem_Error_InsufficientPrivileges`);
        case 107:
          return E(`#Redeem_Error_InsufficientFunds`);
        case 29:
          return E(`#Redeem_Error_DuplicateRequest`);
        case 26:
          return E(`#Redeem_Error_Revoked`);
        case 11:
          return E(`#Redeem_Error_PriceChange`);
      }
      return ``;
    }
    QueryLoyaltyRewardDefinitions(e, t, n, r) {
      let i = { rewards: [], cTotalMatching: 0, cMaxToReturn: 0 };
      if ((e.appid && !e.appid.length) || (e.itemclass && !e.itemclass.length))
        return i;
      let a = {
          appid: e.appid || [],
          itemclass: e.itemclass || [],
          grouping: e.grouping,
          maxToReturn: e.maxToReturn,
          rewardtype: e.rewardtype,
          queryFilter: e.queryFilter || [],
          categoryTag: e.categoryTag || [],
          excludedContentDescriptors: e.excludedContentDescriptors || [],
          excludedTagIDs: e.excludedTagIDs || [],
          excludedAppIDs: e.excludedAppIDs || [],
          searchLanguage: e.searchLanguage,
          searchTerm: e.searchTerm,
        },
        o = br(a);
      a.maxToReturn &&
        t + n > a.maxToReturn &&
        (n = Math.max(0, a.maxToReturn - t));
      let s = n,
        c;
      if (this.m_mapAppRewards.has(o)) {
        let e = this.m_mapAppRewards.get(o);
        ((s =
          t > e.rgRewardIds.length - 1
            ? n + t - e.rgRewardIds.length
            : Math.max(n - (e.rgRewardIds.length - t), 0)),
          e.bFullyLoaded && (s = 0),
          (c = e.strCursor));
      }
      if (
        (this.m_mapAppRewards.has(o) ||
          this.m_mapAppRewards.set(o, { rgRewardIds: [] }),
        s && !this.m_inflightRewardItemRequests[o])
      ) {
        this.m_inflightRewardItemRequests[o] = !0;
        let e = [];
        this.LoadLoyaltyRewardDefinitions(a, s, c, r).then((t) => {
          ne(() => {
            let { definitions: n, next_cursor: r, total_count: i } = t,
              a = n.filter((e) => (!Mr(e) || e.type === 4) && !jr(e)),
              s = this.m_mapAppRewards.get(o);
            (delete this.m_inflightRewardItemRequests[o],
              (s.strCursor = r),
              (s.cTotal = i),
              a.forEach(({ defid: e }) => {
                s.rgRewardIds.push(e);
              }),
              (s.bFullyLoaded =
                n.length === 0 || s.rgRewardIds.length === s.cTotal),
              a.forEach((t) => {
                (this.m_mapLoyaltyRewardDefs.set(t.defid, t), e.push(t.appid));
              }),
              y.EnsureAppInfoForAppIDs(e));
          });
        });
      }
      let l = this.m_mapAppRewards.get(o);
      return (
        (i.rewards = l.rgRewardIds
          .slice(t, t + n)
          .map((e) => this.m_mapLoyaltyRewardDefs.get(e))),
        (i.cTotalMatching = l.cTotal || 0),
        (i.cMaxToReturn = a.maxToReturn || 0),
        (i.bLoadingMore = this.m_inflightRewardItemRequests[o]),
        i
      );
    }
    async LoadLoyaltyRewardDefinitions(e, t, n, r) {
      let {
          appid: i,
          grouping: a,
          itemclass: o,
          queryFilter: s,
          categoryTag: c,
          excludedContentDescriptors: l,
          excludedTagIDs: u,
          excludedAppIDs: d,
          searchTerm: f,
        } = e,
        p = xr(a),
        m = new Se();
      (i.forEach((e) => m.add_appids(e)),
        m.set_language(M.LANGUAGE),
        m.set_count(t),
        m.set_sort(p.sort),
        m.set_sort_descending(p.sort_descending),
        m.set_community_item_classes(o),
        m.set_filters(s),
        m.set_filter_match_any_category_tags(c),
        m.set_excluded_content_descriptors(l),
        m.set_excluded_store_tagids(u),
        m.set_excluded_appids(d),
        m.set_search_term(f),
        r && m.set_reward_types(r),
        n && m.set_cursor(n));
      let h = await this.m_batchedRewardItemLoader.Load(m);
      return h.eresult == 1
        ? h.response
        : (console.error(
            `Error when loading reward definitions: EResult=${h.eresult}`,
          ),
          { definitions: [], total_count: 0, next_cursor: void 0, count: 0 });
    }
    GetCostToLevelSeasonalBadge(e) {
      let t = this.GetSeasonalBadgeDefinition();
      if (!t) return 0;
      let n = this.GetUserSeasonalBadgeLevel();
      return Math.max(parseInt(t.point_cost) * (e - n), 0);
    }
    GetUserSeasonalBadgeLevel() {
      let e = this.GetSeasonalBadgeDefinition();
      if (!e || !this.BRewardOwnedByUser(e)) return 0;
      let t = this.GetOwnedCommunityItem(e);
      if (!t)
        return (console.error(`Could not find owned seasonal badge item`), 0);
      let n = t.attributes.find(({ attributeid: e }) => e === 2);
      if (!n)
        return (
          console.error(`Could not find seasonal badge level attribute`), 0
        );
      let r = parseInt(n.value);
      return isNaN(r)
        ? (console.error(`Seasonal badge level attribute is NaN`), 0)
        : r;
    }
    GetGoldenProfileConfigForApp(e) {
      return this.m_goldenProfileConfigs.find((t) => t.appid === e) || null;
    }
    GetSeasonalBadgeDefinition() {
      return (
        this.m_seasonalBadgeDefinition === void 0 &&
          this.LoadSeasonalBadgeDefinition().then(
            (e) => (this.m_seasonalBadgeDefinition = e),
          ),
        this.m_seasonalBadgeDefinition
      );
    }
    async LoadSeasonalBadgeDefinition() {
      let e = new Se();
      (e.set_appids([this.GetCurrentSeasonalAppID()]),
        e.set_community_item_classes([1]),
        e.set_count(1),
        e.set_language(M.LANGUAGE));
      let t = await this.m_batchedRewardItemLoader.Load(e);
      return t.eresult == 1
        ? t.response.definitions[0] || null
        : (console.error(
            `Error when loading badge definition: EResult=${t.eresult}`,
          ),
          null);
    }
    GetGoldenProfileDefinition() {
      return (
        this.m_goldenProfileDefinition === void 0 &&
          this.LoadGoldenProfileDefinition().then(
            (e) => (this.m_goldenProfileDefinition = e),
          ),
        this.m_goldenProfileDefinition
      );
    }
    async LoadGoldenProfileDefinition() {
      let e = new Se();
      (e.set_appids([this.GetCurrentSeasonalAppID()]),
        e.set_community_item_classes([8]),
        e.set_count(1),
        e.set_language(M.LANGUAGE));
      let t = await this.m_batchedRewardItemLoader.Load(e);
      return t.eresult == 1
        ? t.response.count == 0
          ? (console.error(
              `Error when loading golden profile definition: Failed to find definition for appid ${this.GetCurrentSeasonalAppID()}`,
            ),
            null)
          : t.response.definitions[0] || null
        : (console.error(
            `Error when loading golden profile definition: EResult=${t.eresult}`,
          ),
          null);
    }
    GetCouponDefinition(e) {
      return (
        this.m_bLoadedCouponDefinitions ||
          ((this.m_bLoadedCouponDefinitions = !0),
          this.LoadCouponDefinitions().then((e) =>
            e.forEach((e) => this.m_mapCouponDefinitons.set(e.defid, e)),
          )),
        this.m_mapCouponDefinitons.get(e)
      );
    }
    async LoadCouponDefinitions() {
      let e = new Se();
      (e.set_appids([this.GetCurrentSeasonalAppID()]),
        e.set_reward_types([4]),
        e.set_count(10),
        e.set_language(M.LANGUAGE));
      let t = await this.m_batchedRewardItemLoader.Load(e);
      return t.eresult == 1
        ? t.response.definitions
        : (console.error(
            `Error when loading coupon definitions: EResult=${t.eresult}`,
          ),
          null);
    }
    GetBundleOfferForUser(e) {
      let t = new gr();
      if (
        ((t.original_point_cost = 0),
        (t.point_cost = 0),
        (t.discount = e.bundle_discount),
        (t.items = this.GetRewardDefinitions(...e.bundle_defids)),
        e.community_item_class == 8)
      ) {
        let n = this.GetRewardDefinitions(e.defid);
        t.items = t.items.concat(n);
      }
      return (
        t.items.sort((e, t) =>
          e.community_item_class == 8
            ? -1
            : t.community_item_class == 8
              ? 1
              : t.community_item_class - e.community_item_class,
        ),
        t.items.forEach((e) => {
          let n = parseInt(e.point_cost);
          t.original_point_cost += n;
          let r = this.BRewardOwnedByUser(e);
          (t.mapItemOwnership.set(e.defid, r), r || (t.point_cost += n));
        }),
        (t.point_cost = Math.ceil(t.point_cost * (100 - t.discount) * 0.01)),
        t
      );
    }
    GetOwnedItemCacheKey(e) {
      return `${e}`;
    }
    BRewardOwnedByUser(e) {
      let t = this.m_mapOwnedCommunityItems.get(
        this.GetOwnedItemCacheKey(
          this.m_bLoadedFullInventory ? void 0 : e.appid,
        ),
      );
      if ((t || this.GetCommunityItemInventory(e.appid), !t)) return !1;
      if (e.type == 5 || e.type == 6) {
        for (let t of e.bundle_defids) {
          let e = this.m_mapLoyaltyRewardDefs.get(t);
          if (e && !this.BRewardOwnedByUser(e)) return !1;
        }
        return !0;
      }
      return t.has(e.community_item_type);
    }
    BRewardEquippedByUser(e) {
      if (!this.BRewardOwnedByUser(e)) return !1;
      switch (e.community_item_class) {
        case 15:
          return (
            this.m_equippedItems.animated_avatar.appid == e.appid &&
            this.m_equippedItems.animated_avatar.item_type ==
              e.community_item_type
          );
        case 14:
          return (
            this.m_equippedItems.avatar_frame.appid == e.appid &&
            this.m_equippedItems.avatar_frame.item_type == e.community_item_type
          );
        case 3:
          return (
            this.m_equippedItems.profile_background.appid == e.appid &&
            this.m_equippedItems.profile_background.item_type ==
              e.community_item_type
          );
        case 13:
          return (
            this.m_equippedItems.mini_profile_background.appid == e.appid &&
            this.m_equippedItems.mini_profile_background.item_type ==
              e.community_item_type
          );
        case 8:
          return (
            this.m_equippedItems.profile_modifier.appid == e.appid &&
            this.m_equippedItems.profile_modifier.item_type ==
              e.community_item_type
          );
        case 16:
          return (
            this.m_equippedItems.steam_deck_keyboard_skin.appid == e.appid &&
            this.m_equippedItems.steam_deck_keyboard_skin.item_type ==
              e.community_item_type
          );
      }
      return !1;
    }
    GetOwnedCommunityItem(e) {
      let t = this.m_mapOwnedCommunityItems.get(
        this.GetOwnedItemCacheKey(
          this.m_bLoadedFullInventory ? void 0 : e.appid,
        ),
      );
      return (
        t || this.GetCommunityItemInventory(e.appid),
        Ge(
          t.has(e.community_item_type),
          `Missing owned item ${e.community_item_type}`,
        ),
        t.get(e.community_item_type)
      );
    }
    GetOwnedCommunityItemID(e) {
      let t = this.GetOwnedCommunityItem(e);
      return t ? t.communityitemid : null;
    }
    async EnsureCommunityItemInventoryLoaded(e) {
      this.m_mapOwnedCommunityItems.has(this.GetOwnedItemCacheKey(e)) ||
        (await this.GetCommunityItemInventory(e));
    }
    async GetCommunityItemInventory(e) {
      if (!this.BIsLoggedIn()) return Promise.resolve();
      let t = this.GetOwnedItemCacheKey(e);
      if (this.m_inflightInventoryRequests[t])
        return this.m_inflightInventoryRequests[t];
      let n = this.m_batchedCommunityInventoryLoader.Load(e);
      this.m_inflightInventoryRequests[t] = n;
      let r = await n,
        i = new Map();
      return (
        r.forEach((e) => {
          i.set(e.item_type, e);
        }),
        this.m_mapOwnedCommunityItems.set(t, i),
        delete this.m_inflightInventoryRequests[t],
        n
      );
    }
    get active_bonuses() {
      return (
        this.m_bLoadedActiveBonuses || this.LoadActiveBonuses(),
        this.m_rgActiveBonuses
      );
    }
    async LoadActiveBonuses() {
      this.m_bLoadedActiveBonuses = !0;
      let e = j.Init(Ee),
        t = await v.GetActivePurchaseBonuses(this.m_transport, e);
      t.GetEResult() == 1
        ? this.m_rgActiveBonuses.push(
            ...t
              .Body()
              .bonuses()
              .map((e) => e.toObject()),
          )
        : console.error(
            `Error when calling LoyaltyRewardsService.GetActivePurchaseBonuses: EResult=${t.GetEResult()}`,
          );
    }
    async SetProfileBackground(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(bt);
      n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
      let r = await Ot.SetProfileBackground(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() != 1 &&
          console.error(
            `Error when calling PlayerService.SetProfileBackground: EResult=${r.GetEResult()}`,
          ),
        t
      );
    }
    async SetAvatarFrame(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(ht);
      n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
      let r = await Ot.SetAvatarFrame(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetAvatarFrame: EResult=${r.GetEResult()}`,
            ),
        t
      );
    }
    async SetAnimatedAvatar(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(Tt);
      n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
      let r = await Ot.SetAnimatedAvatar(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetAnimatedAvatar: EResult=${r.GetEResult()}`,
            ),
        t
      );
    }
    async SetMiniProfileBackground(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(st);
      n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
      let r = await Ot.SetMiniProfileBackground(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetMiniProfileBackground: EResult=${r.GetEResult()}`,
            ),
        t
      );
    }
    async SetSteamDeckKeyboardSkin(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(Et);
      n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e));
      let r = await Ot.SetSteamDeckKeyboardSkin(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling PlayerService.SetSteamDeckKeyboardSkin: EResult=${r.GetEResult()}`,
            ),
        t
      );
    }
    async ActivateProfileModifier(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(ge);
      (n.Body().set_communityitemid(this.GetOwnedCommunityItemID(e)),
        n.Body().set_appid(e.appid),
        n.Body().set_activate(!0));
      let r = await he.ActivateProfileModifierItem(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshEquippedProfileItems()
          : console.error(
              `Error when calling QuestService.ActivateProfileModifierItem: EResult=${r.GetEResult()}`,
            ),
        t
      );
    }
    async RedeemPointsForItem(e, t, n) {
      let r = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((r = { eResult: 21, strMessage: E(`#Redeem_SignIn`) }), r);
      let i = j.Init(Te);
      (i.Body().set_defid(e), i.Body().set_expected_points_cost(n.toString()));
      let a = await v.RedeemPoints(this.m_transport, i);
      return (
        (r.eResult = a.GetEResult()),
        a.GetEResult() == 1
          ? (this.GetCommunityItemInventory(t), this.GetLoyaltyRewardsSummary())
          : ((r.strMessage = this.EResultToErrorMessage(a.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPoints: EResult=${a.GetEResult()}`,
            )),
        r
      );
    }
    async RedeemPointsForBadge(e, t) {
      let n = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((n = { eResult: 21, strMessage: E(`#Redeem_SignIn`) }), n);
      let r = j.Init(De);
      (r.Body().set_defid(e), r.Body().set_num_levels(t));
      let i = await v.RedeemPointsForBadgeLevel(this.m_transport, r);
      return (
        (n.eResult = i.GetEResult()),
        i.GetEResult() == 1
          ? (this.GetCommunityItemInventory(this.GetCurrentSeasonalAppID()),
            this.GetLoyaltyRewardsSummary())
          : ((n.strMessage = this.EResultToErrorMessage(i.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForBadgeLevel: EResult=${i.GetEResult()}`,
            )),
        n
      );
    }
    async RedeemPointsForProfileShowcase(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: `Not logged on` }), t);
      let n = j.Init(be);
      n.Body().set_customization_type(e);
      let r = await v.RedeemPointsForProfileCustomization(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() == 1
          ? this.RefreshPurchasedProfileCustomizations()
          : ((t.strMessage = this.EResultToErrorMessage(r.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomization: EResult=${r.GetEResult()}`,
            )),
        t
      );
    }
    async RedeemPointsForProfileShowcaseUpgrade(e, t) {
      let n = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((n = { eResult: 21, strMessage: E(`#Redeem_SignIn`) }), n);
      let r = j.Init(ye);
      r.SetBodyFields({ customization_type: e, new_level: t });
      let i = await v.RedeemPointsForProfileCustomizationUpgrade(
        this.m_transport,
        r,
      );
      return (
        (n.eResult = i.GetEResult()),
        i.GetEResult() == 1
          ? this.RefreshPurchasedProfileCustomizations()
          : ((n.strMessage = this.EResultToErrorMessage(i.GetEResult())),
            console.error(
              `Error when calling LoyaltyRewardsService.RedeemPointsForProfileCustomizationUpgrade: EResult=${i.GetEResult()}`,
            )),
        n
      );
    }
    async RedeemPointsForCoupon(e) {
      let t = { eResult: 2, strMessage: `` };
      if (!this.BIsLoggedIn())
        return ((t = { eResult: 21, strMessage: E(`#Redeem_SignIn`) }), t);
      let n = new FormData();
      (n.append(`sessionid`, We()), n.append(`itemid`, e.toString()));
      try {
        await dr.default
          .post(`${M.STORE_BASE_URL}cart/ajaxredeemtokensforcartdiscount`, n)
          .then((e) => {
            let n = e.data;
            ((t.eResult = n.eresult),
              n.eresult == 1 && n.redirect
                ? (window.location.href = n.redirect)
                : console.error(
                    `Error when calling ajaxredeemtokensforcartdiscount: ${n}`,
                  ));
          });
      } catch (e) {
        let t = Ue(e);
        console.error(
          `Error when calling ajaxredeemtokensforcartdiscount: ${t.strErrorMsg}`,
          t,
        );
      }
      return t;
    }
    GetCouponPromosForUser() {
      return (
        this.m_bLoadedCouponPromosForUser ||
          ((this.m_bLoadedCouponPromosForUser = !0),
          this.LoadCouponPromosForUser().then((e) =>
            e
              .sort((e, t) =>
                e.max_use_count < t.max_use_count
                  ? -1
                  : e.max_use_count == t.max_use_count
                    ? 0
                    : 1,
              )
              .forEach((e) =>
                this.m_mapCouponPromos.set(e.loyalty_reward_id, e),
              ),
          )),
        this.m_mapCouponPromos
      );
    }
    async LoadCouponPromosForUser() {
      let e = j.Init(An);
      e.Body().set_country_code(xt.country_code);
      let t = await cr.GetAvailableValveDiscountPromotions(this.m_transport, e);
      return t.GetEResult() == 1
        ? t
            .Body()
            .promotions()
            .map((e) => e.toObject())
        : (console.error(
            `Error when calling UserAccountService.GetAvailableValveDiscountPromotions: EResult=${t.GetEResult()}`,
          ),
          []);
    }
    BCanRedeemPointsForItem(e) {
      switch (e.type) {
        case 1:
          switch (e.community_item_class) {
            case 4:
            case 3: {
              if (
                (e.community_item_data.animated &&
                  e.community_item_class == 3) ||
                this.GetSortedGamesWithRewards().includes(e.appid)
              )
                return !0;
              let t = this.m_mapEligibleApps.get(e.appid);
              return !!(t && t.event_app);
            }
          }
          break;
        case 5:
        case 6: {
          if (this.GetSortedGamesWithRewards().includes(e.appid)) return !0;
          let t = this.m_mapEligibleApps.get(e.appid);
          return !!(t && t.event_app);
        }
      }
      return !0;
    }
    BCanRedeemPointsForProfileShowcaseUpgrade(e, t) {
      return t < this.m_rgProfileCustomizationsConfig.max_upgradable_level;
    }
    BCanRedeemPointsForProfileShowcaseSlot(e, t) {
      return t < this.m_rgProfileCustomizationsConfig.max_slots_per_type;
    }
    GetSortedEventAppsWithRewards() {
      if (!this.m_rgEventAppsWithRewards.length) {
        let e = this.m_bLoadedEligibleApps
          ? this.m_rgEligibleApps
          : this.LoadEligibleApps();
        Promise.all([e]).then(([e]) => {
          let t = e.filter((e) => e.event_app);
          this.m_rgEventAppsWithRewards = t
            .sort((e, t) => (e.appid < t.appid ? 1 : -1))
            .map((e) => e.appid);
        });
      }
      return this.m_rgEventAppsWithRewards;
    }
    GetSortedMyGamesWithRewards() {
      return this.GetSortedGamesWithRewards().filter(
        (e) => this.m_mapEligibleApps.get(e).owned,
      );
    }
    GetSortedGamesWithRewards() {
      if (!this.m_bSortedGamesWithRewards) {
        this.m_bSortedGamesWithRewards = !0;
        let e = this.m_bLoadedEligibleApps
            ? this.m_rgEligibleApps
            : this.LoadEligibleApps(),
          t = this.m_bLoadedRecentlyPlayed
            ? this.m_rgRecentlyPlayed
            : this.LoadRecentlyPlayedApps();
        Promise.all([e, t]).then(([e, t]) => {
          ((this.m_rgEligibleApps = e),
            (this.m_mapEligibleApps = new Map(
              this.m_rgEligibleApps.map((e) => [e.appid, e]),
            )));
          let n = t.filter((e) => this.m_mapEligibleApps.has(e)),
            r = e.filter((e) => n.includes(e.appid) == 0).map((e) => e.appid);
          this.m_rgSortedAppsWithRewards = n.concat(r);
        });
      }
      return this.m_rgSortedAppsWithRewards;
    }
    GetMaxProfileShowcaseSlots() {
      return this.m_rgProfileCustomizationsConfig.max_slots_per_type;
    }
    GetPurchasableProfileShowcaseSlotCost() {
      return this.m_rgProfileCustomizationsConfig.points_cost;
    }
    GetPurchasableProfileShowcaseSlots() {
      return this.m_rgProfileCustomizationsConfig
        .purchasable_customization_types;
    }
    GetUpgradableProfileShowcaseCost() {
      return this.m_rgProfileCustomizationsConfig.upgrade_points_cost;
    }
    GetUpgradableProfileShowcases() {
      return this.m_rgProfileCustomizationsConfig
        .upgradable_customization_types;
    }
    GetMaxProfileShowcaseUpgradeLevel() {
      return this.m_rgProfileCustomizationsConfig.max_upgradable_level;
    }
    async LoadRecentlyPlayedApps() {
      if (((this.m_bLoadedRecentlyPlayed = !0), !this.BIsLoggedIn())) return [];
      let e = j.Init(tt),
        t = Math.floor(Date.now() / 1e3) - lt.PerDay * 14;
      e.Body().set_min_last_played(t);
      let n = await Ot.ClientGetLastPlayedTimes(this.m_transport, e);
      return n.GetEResult() == 1
        ? ((this.m_rgRecentlyPlayed = this.ProcessRecentlyPlayedApps(
            n.Body().toObject().games,
          )),
          this.m_rgRecentlyPlayed)
        : (console.error(
            `Error when calling PlayerService.ClientGetLastPlayedTimes: EResult=${n.GetEResult()}`,
          ),
          []);
    }
    ProcessRecentlyPlayedApps(e) {
      return (
        e.sort((e, t) =>
          t.last_playtime == e.last_playtime
            ? t.playtime_2weeks == e.playtime_2weeks
              ? t.playtime_forever - e.playtime_forever
              : t.playtime_2weeks - e.playtime_2weeks
            : t.last_playtime - e.last_playtime,
        ),
        e.map((e) => e.appid)
      );
    }
    async LoadEligibleApps() {
      if (((this.m_bLoadedEligibleApps = !0), !this.BIsLoggedIn())) return [];
      let e = j.Init(xe),
        t = await v.GetEligibleApps(this.m_transport, e);
      return t.GetEResult() == 1
        ? t.Body().toObject().apps
        : (console.error(
            `Error when calling GetEligibleApps: EResult=${t.GetEResult()}`,
          ),
          []);
    }
    async RefreshEquippedProfileItems() {
      if (!this.BIsLoggedIn()) return;
      let e = j.Init(Ze);
      e.SetBodyFields({ steamid: xt.steamid });
      let t = await Ot.GetProfileItemsEquipped(this.m_transport, e);
      t.GetEResult() == 1
        ? (this.m_equippedItems = t.Body().toObject())
        : console.error(
            `Error when calling GetProfileItemsEquipped: EResult=${t.GetEResult()}`,
          );
    }
    async RefreshPurchasedProfileCustomizations() {
      if (!this.BIsLoggedIn()) return;
      let e = j.Init(Le);
      e.SetBodyFields({ steamid: xt.steamid });
      let t = await Ot.GetPurchasedAndUpgradedProfileCustomizations(
        this.m_transport,
        e,
      );
      if (t.GetEResult() == 1) {
        let e = t.Body().toObject();
        ((this.m_rgPurchasedCustomizations = e.purchased_customizations),
          (this.m_rgUpgradedCustomizations = e.upgraded_customizations));
      } else
        console.error(
          `Error when calling GetPurchasedAndUpgradedProfileCustomizations: EResult=${t.GetEResult()}`,
        );
    }
    async GetEquippedProfileItems(e) {
      let t = { eResult: 2 },
        n = j.Init(_e);
      (n.Body().set_steamid(e), n.Body().set_language(M.LANGUAGE));
      let r = await v.GetEquippedProfileItems(this.m_transport, n);
      return (
        (t.eResult = r.GetEResult()),
        r.GetEResult() != 1 &&
          console.error(
            `Error when calling LoyaltyRewardsService.GetEquippedProfileItems: EResult=${r.GetEResult()}`,
          ),
        { ...r.Body().toObject(), ...t }
      );
    }
    GetPersonaState() {
      return this.m_persona;
    }
    async RetrievePersonaState() {
      let e = {
        access_token: this.m_config.webapi_token,
        steamids: xt.steamid,
      };
      return dr.default
        .get(`${M.WEBAPI_BASE_URL}ISteamUserOAuth/GetUserSummaries/v2/`, {
          params: e,
        })
        .then((e) => {
          if (e && e.data && e.data.players && e.data.players.length != 0) {
            let t = e.data.players[0];
            ((this.m_persona.m_strPlayerName = t.personaname),
              (this.m_persona.m_ePersonaState = t.personastate),
              (this.m_persona.m_strAvatarHash = t.avatarhash));
          }
        });
    }
    GetEquippedItems() {
      return this.m_equippedItems;
    }
    GetPurchasedProfileCustomizations() {
      return this.m_rgPurchasedCustomizations;
    }
    GetUpgradedProfileCustomizations() {
      return this.m_rgUpgradedCustomizations;
    }
    GetRewardItem(e) {
      return (
        !this.m_mapLoyaltyRewardDefs.has(e) &&
          !this.m_inflightRewardItemRequests[e] &&
          ((this.m_inflightRewardItemRequests[e] = !0),
          this.LoadRewardItem(e).then((t) => {
            (t.defid === e && this.m_mapLoyaltyRewardDefs.set(e, t),
              delete this.m_inflightRewardItemRequests[e]);
          })),
        this.m_mapLoyaltyRewardDefs.get(e)
      );
    }
    GetAppHeroImage(e) {
      let t = this.m_mapEligibleApps.get(e);
      return t && t.hero_carousel_image
        ? {
            img_url: `${M.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t.hero_carousel_image}`,
            is_custom: !0,
          }
        : {
            img_url: this.m_HeroImageFallbackLoader.Get(e) || ur,
            is_custom: !1,
          };
    }
    async LoadRewardItem(e) {
      let t = new Se();
      (t.set_language(M.LANGUAGE), t.set_count(1), t.set_definitionids([e]));
      let n = await this.m_batchedRewardItemLoader.Load(t);
      return n.eresult == 1
        ? n.response.count > 0
          ? n.response.definitions[0]
          : null
        : (console.error(
            `Error when loading reward definitions: EResult=${n.eresult}`,
          ),
          null);
    }
    m_mapPages = r.map({}, { deep: !1 });
    GetPageDescriptor(e) {
      return (
        this.m_mapPages.has(vr(e)) ||
          this.m_mapPages.set(vr(e), this.BuildPage(e)),
        this.m_mapPages.get(vr(e))
      );
    }
    BuildPage(e) {
      switch (e.type) {
        case `app`:
          return new Tr(
            e.appid,
            e.appid === this.GetCurrentSeasonalAppID()
              ? E(`#HeroCluster_Premier_Collection_Subtitle`)
              : void 0,
          );
        case `event`:
          return new wr(
            e.eventname,
            e.rgIncludedAppIDs,
            e.rgPriorityAppIDs,
            e.cAppClusters,
          );
        case `custom`:
          return (console.error(`Cannot dynamically build page type`), null);
        default:
          return (console.error(`Unknown page type`), null);
      }
    }
    m_mapClusters = r.map({}, { deep: !1 });
    GetClusterDescriptor(e) {
      return this.m_mapClusters.get(e);
    }
    HydrateCustomPages() {
      let t = (e, t, n) => {
          let r = new Sr(e, t, { grouping: 2, maxToReturn: 0, ...n });
          return (
            this.m_mapClusters.has(r.id) || this.m_mapClusters.set(r.id, r),
            r.id
          );
        },
        n = (e, t, n) => {
          let r = new Cr(e, t, kr({ grouping: 2 }, n));
          return (
            this.m_mapClusters.has(r.id) || this.m_mapClusters.set(r.id, r), r
          );
        },
        r = (t, r, i, a) => {
          let o = n(t, i || ``, a);
          return {
            type: 2,
            cluster: o.id,
            get title() {
              return E(`#HeroCluster_AppTitle`, o.title);
            },
            get strImage() {
              return r || e.Get().GetAppHeroImage(t).img_url;
            },
            get bFullBleedImage() {
              return !!r;
            },
            linkedPage: { type: `app`, appid: t },
            theme: {
              colors: {
                bodygradient: `linear-gradient(147.3deg, rgba(211, 193, 144, 0) 42.88%, rgba(223, 200, 141, 0.32) 113.95%)`,
                background: `rgba(117, 98, 80, 0.25)`,
              },
            },
          };
        },
        i = (e) => this.m_mapPages.set(vr(e.params), e),
        a = t(
          E(
            `#RewardCluster_Popular_Title`,
            E(`#RewardCluster_Popular_RewardItems`),
          ),
          E(`#RewardCluster_Popular_Subtitle`),
        ),
        o = t(V(13, !0), E(`#RewardCluster_MiniProfileBackgrounds_Subtitle`), {
          itemclass: [13],
        }),
        s = t(
          E(`#ShopPageTitle_Avatar`),
          E(`#RewardCluster_AvatarItems_Subtitle`),
          { itemclass: [15, 14] },
        ),
        c = t(V(3, !0), E(`#RewardCluster_Backgrounds_Subtitle`), {
          itemclass: [3],
        }),
        u = t(
          E(`#RewardCluster_Popular_Title`, E(`#ShopNav_ChatEffectsLink`)),
          E(`#RewardCluster_ChatEffect_Subtitle`),
          { itemclass: [12] },
        ),
        d = t(
          E(`#RewardCluster_Popular_Title`, E(`#ShopNav_StickersLink`)),
          E(`#RewardCluster_Popular_Subtitle`),
          { itemclass: [11] },
        ),
        f = t(
          E(`#RewardCluster_Popular_Title`, E(`#ShopNav_EmoticonsLink`)),
          E(`#RewardCluster_Popular_Subtitle`),
          { itemclass: [4] },
        ),
        p = t(
          E(`#RewardCluster_All_Title`, V(15, !0)),
          E(`#RewardCluster_AnimatedAvatar_Subtitle`),
          { itemclass: [15] },
        ),
        m = t(
          E(`#RewardCluster_All_Title`, V(14, !0)),
          E(`#RewardCluster_AvatarFrames_Subtitle`),
          { itemclass: [14] },
        ),
        h = t(
          E(`#RewardCluster_All_Title`, V(16, !0)),
          E(`#RewardCluster_SteamDeckKeyboardSkins_Subtitle`),
          { itemclass: [16] },
        ),
        ee = t(
          E(`#RewardCluster_All_Title`, V(17, !0)),
          E(`#RewardCluster_SteamDeckStartupMovies_Subtitle`),
          { itemclass: [17] },
        ),
        te = t(E(`#RewardCluster_FromGames`, V(17, !0)), void 0, {
          itemclass: [17],
          excludedAppIDs: [mr],
        }),
        ne = t(
          E(`#RewardCluster_All_Title`, E(`#RewardItemType_Bundle_plural`)),
          ``,
          { rewardtype: [5, 6] },
        ),
        re = t(
          E(
            `#RewardCluster_All_Title`,
            E(`#RewardItemType_ProfileBundle_plural`),
          ),
          ``,
          { itemclass: [8], queryFilter: [3], grouping: 1 },
        ),
        g = t(
          E(
            `#RewardCluster_Popular_Title`,
            E(`#RewardItemType_ProfileBundle_plural`),
          ),
          ``,
          { itemclass: [8], queryFilter: [3], grouping: 2 },
        ),
        ie = t(
          E(
            `#RewardCluster_All_Title`,
            E(`#RewardItemType_ArtistProfile_plural`),
          ),
          ``,
          { itemclass: [8], queryFilter: [3], categoryTag: [`artist_profile`] },
        );
      t(E(`#RewardCluster_TabletopFest2021Profiles_Title`), void 0, {
        itemclass: [8],
        queryFilter: [3],
        categoryTag: [`tabletop_fest_2021`],
      });
      let ae = t(
          E(`#RewardCluster_TiledProfileBackgrounds_Title`),
          E(`#RewardCluster_BackgroundsTiled_Subtitle`),
          { itemclass: [3], queryFilter: [4] },
        ),
        oe = [
          { cluster: ae, type: 1 },
          {
            cluster: ee,
            type: 1,
            linkedPage: {
              type: `custom`,
              pageid: `steamdeck`,
              clusterindex: 1,
            },
          },
          {
            cluster: re,
            type: 2,
            strImage: ur,
            bFullBleedImage: !0,
            linkedPage: { type: `custom`, pageid: `profilebundles` },
          },
          { cluster: a, type: 1, linkedPage: null, bHideHiddenItemCount: !0 },
          {
            cluster: d,
            type: 1,
            linkedPage: { type: `custom`, pageid: `stickers` },
          },
          { cluster: o, type: 1 },
          { cluster: s, type: 1 },
          {
            cluster: c,
            type: 1,
            linkedPage: { type: `custom`, pageid: `backgrounds` },
          },
          { cluster: u, type: 1 },
          {
            cluster: f,
            type: 1,
            linkedPage: { type: `custom`, pageid: `emoticons` },
          },
        ],
        se = [];
      (se.push(r(5308810)), se.push(r(4761370)));
      let ce = [],
        _ = [se, oe];
      for (let e = 0; e < Math.max(_[0].length, _[1].length); e++)
        (e < _[0].length && ce.push({ type: `clusterview`, view: _[0][e] }),
          e < _[1].length && ce.push({ type: `clusterview`, view: _[1][e] }));
      (i(new Er(hr, ce)),
        i(
          new U(
            `stickers`,
            [{ cluster: d, type: 0 }],
            E(`#ShopPageTitle_Stickers`),
            void 0,
            E(`#SearchPlaceholder_Stickers`),
          ),
        ),
        i(
          new U(
            `emoticons`,
            [{ cluster: f, type: 0 }],
            E(`#ShopPageTitle_Emoticons`),
            void 0,
            E(`#SearchPlaceholder_Emoticons`),
          ),
        ),
        i(
          new U(
            `chateffects`,
            [{ cluster: u, type: 0 }],
            V(12, !0),
            void 0,
            E(`#SearchPlaceholder_ChatEffects`),
          ),
        ));
      let le = t(
          E(`#RewardCluster_AnimatedProfileBackgrounds_Title`),
          E(`#RewardCluster_Backgrounds_Subtitle`),
          { itemclass: [3], queryFilter: [1] },
        ),
        ue = t(
          E(`#RewardCluster_AnimatedMiniProfileBackgrounds_Title`),
          E(`#RewardCluster_MiniProfileBackgrounds_Subtitle`),
          { itemclass: [13], queryFilter: [1] },
        ),
        de = t(
          E(`#RewardCluster_StillProfileBackgrounds_Title`),
          E(`#RewardCluster_Backgrounds_Subtitle`),
          { itemclass: [3], queryFilter: [2] },
        ),
        fe = t(
          E(`#RewardCluster_StillMiniProfileBackgrounds_Title`),
          E(`#RewardCluster_MiniProfileBackgrounds_Subtitle`),
          { itemclass: [13], queryFilter: [2] },
        );
      (i(
        new U(
          `backgrounds`,
          [
            { cluster: ae, type: 1 },
            { cluster: le, type: 1 },
            { cluster: ue, type: 1 },
            { cluster: de, type: 1 },
            { cluster: fe, type: 1 },
          ],
          E(`#ShopPageTitle_Backgrounds`),
          void 0,
          E(`#SearchPlaceholder_Backgrounds`),
        ),
      ),
        i(
          new U(
            `avatar`,
            [
              { cluster: p, type: 1 },
              { cluster: m, type: 1 },
            ],
            E(`#ShopPageTitle_Avatar`),
            void 0,
            E(`#SearchPlaceholder_Avatar`),
          ),
        ),
        i(
          new U(
            `steamdeck`,
            [
              { cluster: h, type: 1 },
              { cluster: ee, type: 1 },
            ],
            E(`#ShopPageTitle_SteamDeckItems`),
            void 0,
            E(`#SearchPlaceholder_SteamDeckItems`),
          ),
        ),
        i(
          new U(
            `keyboard`,
            [{ cluster: h, type: 0 }],
            E(`#ShopPageTitle_SteamDeckKeyboardSkin`),
            void 0,
            E(`#SearchPlaceholder_SteamDeckKeyboardSkin`),
          ),
        ),
        i(
          new U(
            `startupmovie`,
            [
              { cluster: te, type: 1 },
              { cluster: ee, type: 0 },
            ],
            E(`#ShopPageTitle_SteamDeckStartupMovie`),
            void 0,
            E(`#SearchPlaceholder_SteamDeckStartupMovie`),
          ),
        ),
        i(
          new U(
            `itembundles`,
            [{ cluster: ne, type: 0 }],
            E(`#ShopPageTitle_ItemBundles`),
            E(`#ShopPageTitle_ItemBundles_Subtitle`),
            E(`#SearchPlaceholder_ItemBundles`),
          ),
        ),
        i(
          new U(
            `profilebundles`,
            [
              { cluster: g, type: 1 },
              { cluster: ie, type: 1 },
              { cluster: re, type: 0 },
            ],
            E(`#ShopPageTitle_ProfileBundles`),
            E(`#ShopPageTitle_ProfileBundles_Subtitle`),
            E(`#SearchPlaceholder_ProfileBundles`),
          ),
        ),
        i(
          new U(
            `artistprofiles`,
            [{ cluster: ie, type: 0, bHomogeneous: !0 }],
            E(`#ShopPageTitle_ArtistProfiles`),
            E(`#ShopPageTitle_ArtistProfiles_Subtitle`),
            E(`#SearchPlaceholder_ArtistProfiles`),
          ),
        ),
        this.BIsLoggedIn() &&
          l(() => !!e.Get().GetSortedMyGamesWithRewards().length).then(() => {
            let t = new Sr(E(`#HeroCluster_YourGamesTitle`), void 0, {
              get appid() {
                return e.Get().GetSortedMyGamesWithRewards().slice(0, 10);
              },
              grouping: 2,
            });
            this.m_mapClusters.set(t.id, t);
            let n = {
              type: 2,
              linkedPage: { type: `custom`, pageid: `games` },
              cluster: t.id,
              strImage: ur,
              bFullBleedImage: !0,
            };
            ce.push({ type: `clusterview`, view: n });
            let i = e.Get().GetSortedGamesWithRewards(),
              a = (e) => {
                let t = this.m_mapClusters.get(e);
                return t && t instanceof Cr ? t.appid : null;
              },
              o = 0;
            for (let e of i) {
              if (
                ce.findIndex(
                  (t) => t.type === `clusterview` && a(t.view.cluster) === e,
                ) != -1
              )
                continue;
              let t = r(e),
                n = se.length + 3;
              if (
                (ce.splice(n + o * n, 0, { type: `clusterview`, view: t }),
                (o += 1),
                o >= 3)
              )
                break;
            }
            this.m_mapPages.set(
              vr({ type: `custom`, pageid: hr }),
              new Er(hr, ce),
            );
          }));
    }
  };
(w([r.ref], H.prototype, `m_lPointsAvailable`, void 0),
  w([r], H.prototype, `m_mapCouponPromos`, void 0),
  w([r], H.prototype, `m_nAppIDFiltersInUseCount`, void 0),
  w([r], H.prototype, `m_mapAppIDFilters`, void 0),
  w([r], H.prototype, `m_strAppFilterText`, void 0),
  w([r], H.prototype, `m_strSearchTerm`, void 0),
  w([r], H.prototype, `m_strSearchPlaceholder`, void 0),
  w([r], H.prototype, `m_mapCouponDefinitons`, void 0),
  w([r], H.prototype, `m_mapLoyaltyRewardDefs`, void 0),
  w([r], H.prototype, `m_mapOwnedCommunityItems`, void 0),
  w([r], H.prototype, `m_mapAppRewards`, void 0),
  w([r], H.prototype, `m_seasonalBadgeDefinition`, void 0),
  w([r], H.prototype, `m_goldenProfileDefinition`, void 0),
  w([r], H.prototype, `m_goldenProfileConfigs`, void 0),
  w([r], H.prototype, `m_rgSortedAppsWithRewards`, void 0),
  w([r], H.prototype, `m_rgEventAppsWithRewards`, void 0),
  w([r], H.prototype, `m_rgEligibleApps`, void 0),
  w([r], H.prototype, `m_mapEligibleApps`, void 0),
  w([r], H.prototype, `m_rgProfileCustomizationsConfig`, void 0),
  w([r], H.prototype, `m_persona`, void 0),
  w([r], H.prototype, `m_equippedItems`, void 0),
  w([r], H.prototype, `m_rgPurchasedCustomizations`, void 0),
  w([r], H.prototype, `m_rgUpgradedCustomizations`, void 0),
  w([r], H.prototype, `m_unAwardPointsTransferred`, void 0),
  w([Mt], H.prototype, `ShowLoginDialog`, null));
function _r(e) {
  let t = C.LoyaltyStore();
  switch (e.type) {
    case `app`:
      return `${t}/app/${e.appid}${typeof e.clusterindex == `number` ? `/cluster/${e.clusterindex}` : ``}`;
    case `custom`:
      return `${t}/c/${e.pageid}${typeof e.clusterindex == `number` ? `/cluster/${e.clusterindex}` : ``}`;
    case `event`:
      return `${t}/event/${e.eventname}`;
    default:
      return (console.error(`Unknown page type ${e.type}`), t);
  }
}
function vr(e) {
  return btoa(JSON.stringify(e));
}
function yr(e, t) {
  return `${e.join(`_`)}__${br(t)}`;
}
function br(e) {
  if (!e) return ``;
  let {
      appid: t,
      itemclass: n,
      rewardtype: r,
      grouping: i,
      queryFilter: a,
      categoryTag: o,
      excludedAppIDs: s,
      excludedContentDescriptors: c,
      searchLanguage: l,
      searchTerm: u,
    } = e,
    d = xr(i);
  return [
    t ? [...t].sort().join(`_`) : ``,
    n ? n.join(`_`) : ``,
    r ? r.join(`_`) : ``,
    d.sort,
    d.sort_descending ? `1` : `0`,
    a ? a.join(`_`) : ``,
    o ? o.join(`_`) : ``,
    s ? s.join(`_`) : ``,
    c ? c.join(`_`) : ``,
    l || ``,
    u ? encodeURI(u.substring(0, 200)) : ``,
  ].join(`__`);
}
function xr(e) {
  let t = { sort: 1, sort_descending: !0 };
  switch (e) {
    case 1:
      ((t.sort = 1), (t.sort_descending = !0));
      break;
    case 2:
      ((t.sort = 2), (t.sort_descending = !1));
  }
  return t;
}
var Sr = class {
  m_strId;
  m_filter;
  m_strTitle;
  m_strSubtitle;
  constructor(e, t, n = {}) {
    ((this.m_filter = n),
      (this.m_strTitle = e),
      (this.m_strSubtitle = t),
      (this.m_strId = yr([], n)));
  }
  get id() {
    return this.m_strId;
  }
  get title() {
    return this.m_strTitle;
  }
  get subtitle() {
    return this.m_strSubtitle;
  }
  GetRewards(e, t, n) {
    let r = kr(this.m_filter, n);
    return H.Get().QueryRewardDefinitions(r, e, t);
  }
};
w([Mt], Sr.prototype, `GetRewards`, null);
var Cr = class {
  m_strId;
  m_appid;
  m_strSubtitle;
  m_additionalFilter;
  constructor(e, t, n) {
    ((this.m_appid = e),
      (this.m_strSubtitle = t || ``),
      (this.m_additionalFilter = n || {}),
      y.GetAppInfo(this.m_appid),
      (this.m_strId = yr([this.m_appid], this.m_additionalFilter)));
  }
  get id() {
    return this.m_strId;
  }
  get appid() {
    return this.m_appid;
  }
  get title() {
    return y.GetAppInfo(this.m_appid).name;
  }
  get subtitle() {
    return this.m_strSubtitle;
  }
  GetRewards(e, t, n) {
    let r = kr({ appid: [this.m_appid] }, this.m_additionalFilter, n);
    return H.Get().QueryRewardDefinitions(r, e, t);
  }
};
w([Mt], Cr.prototype, `GetRewards`, null);
var wr = class {
    m_strEventName;
    m_rgIncludedAppIDs;
    m_rgPriorityAppIDs;
    m_cAppClusters;
    constructor(e, t, n, r) {
      ((this.m_strEventName = e),
        (this.m_rgIncludedAppIDs = t),
        (this.m_rgPriorityAppIDs = n),
        (this.m_cAppClusters = r));
    }
    get params() {
      return { type: `event`, eventname: this.m_strEventName };
    }
    get title() {
      return this.m_strEventName;
    }
    get items() {
      let e = [8, 15, 14, 13, 3, 11, 4, 16, 17],
        t = [],
        n = {
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: null,
            cluster: {
              id: vr({ eventname: this.m_strEventName, type: `event` }),
              title: E(`#RewardCluster_FeaturedItems`),
              subtitle: ``,
              GetRewards: (e, t, n) =>
                H.Get().QueryRewardDefinitions(
                  kr({ grouping: 2, categoryTag: [this.m_strEventName] }, n),
                  e,
                  t,
                ),
            },
          },
        };
      t.push(n);
      let r = this.m_rgPriorityAppIDs?.concat(this.m_rgIncludedAppIDs),
        i = e.map((e) => ({
          type: `clusterview`,
          view: {
            type: 1,
            linkedPage: null,
            cluster: {
              id: vr({
                eventname: this.m_strEventName,
                type: `event`,
                itemclass: e,
                rgIncludedAppIDs: this.m_rgIncludedAppIDs,
                rgPriorityAppIDs: this.m_rgPriorityAppIDs,
              }),
              title: V(e, !0),
              subtitle: ``,
              GetRewards: (t, n, i) =>
                H.Get().QueryRewardDefinitions(
                  kr({ grouping: 2, itemclass: [e], appid: r }, i),
                  t,
                  n,
                ),
            },
          },
        })),
        a = r
          ?.slice(0, this.m_cAppClusters)
          .map((e) => ({
            type: `clusterview`,
            view: {
              type: 1,
              linkedPage: { type: `app`, appid: e },
              cluster: new Cr(e, ``),
            },
          }));
      return t.concat(i, a);
    }
  },
  Tr = class {
    m_appid;
    m_strSubtitle;
    constructor(e, t = ``) {
      ((this.m_appid = e),
        (this.m_strSubtitle = t),
        y.GetAppInfo(this.m_appid));
    }
    get params() {
      return { type: `app`, appid: this.m_appid };
    }
    get title() {
      return y.GetAppInfo(this.m_appid).name;
    }
    get subtitle() {
      return this.m_strSubtitle;
    }
    get items() {
      let e = [8, 15, 14, 13, 3, 11, 4, 16, 17],
        t = [];
      {
        let e = {
          type: `clusterview`,
          view: {
            type: 1,
            cluster: {
              id: yr([this.m_appid], { rewardtype: [5] }),
              title: E(`#RewardItemType_Bundle_plural`),
              subtitle: ``,
              GetRewards: (e, t, n) =>
                H.Get().QueryRewardDefinitions(
                  kr({ appid: [this.m_appid], rewardtype: [5, 6] }, n),
                  e,
                  t,
                ),
            },
          },
        };
        t.push(e);
      }
      let n = e.map((e) => ({
        type: `clusterview`,
        view: {
          type: 1,
          cluster: {
            id: yr([this.m_appid], { itemclass: [e] }),
            title: V(e, !0),
            subtitle: ``,
            GetRewards: (t, n, r) =>
              H.Get().QueryRewardDefinitions(
                kr({ appid: [this.m_appid], itemclass: [e] }, r),
                t,
                n,
              ),
          },
        },
      }));
      return ((t = t.concat(n)), t);
    }
  },
  Er = class {
    m_strTitle;
    m_strSubtitle;
    m_strSearchPlaceholder;
    m_strHeaderImage;
    m_rgPageItems;
    m_filter;
    m_pageid;
    constructor(e, t, n, r, i, a) {
      ((this.m_pageid = e),
        (this.m_strTitle = n),
        (this.m_strSubtitle = r),
        (this.m_strSearchPlaceholder = i),
        (this.m_strHeaderImage = a),
        (this.m_rgPageItems = t));
    }
    get params() {
      return { type: `custom`, pageid: this.m_pageid };
    }
    get title() {
      return this.m_strTitle;
    }
    get subtitle() {
      return this.m_strSubtitle;
    }
    get searchPlaceholder() {
      return this.m_strSearchPlaceholder;
    }
    get headerImage() {
      return this.m_strHeaderImage;
    }
    get items() {
      return this.m_rgPageItems.map((e) => Dr(e));
    }
  };
function Dr(e) {
  switch (e.type) {
    case `banner`:
      return e;
    case `clusterview`:
      return {
        type: `clusterview`,
        view: {
          ...e.view,
          cluster: H.Get().GetClusterDescriptor(e.view.cluster),
        },
      };
  }
}
var U = class extends Er {
    constructor(e, t, n, r, i, a) {
      super(
        e,
        t.map((e) => ({ type: `clusterview`, view: e })),
        n,
        r,
        i,
        a,
      );
    }
  },
  Or = class {
    m_fnJoinRequests;
    m_fnSplitResponse;
    m_fnMakeRequest;
    m_rgRequestParts = [];
    m_rootPromise;
    constructor(e, t, n) {
      ((this.m_fnMakeRequest = e),
        (this.m_fnJoinRequests = t),
        (this.m_fnSplitResponse = n));
    }
    Load(e) {
      this.m_rootPromise || this.QueueBatch();
      let t = this.m_rgRequestParts.push(e);
      return this.m_rootPromise.then((e) => e[t - 1]);
    }
    QueueBatch() {
      let e = this.m_rgRequestParts;
      this.m_rootPromise = Promise.resolve()
        .then(() => {
          let t = this.m_fnMakeRequest(this.m_fnJoinRequests(e));
          return (this.Reset(), t);
        })
        .then((t) => this.m_fnSplitResponse(t, e));
    }
    Reset() {
      ((this.m_rootPromise = void 0), (this.m_rgRequestParts = []));
    }
  };
function kr(e, ...t) {
  return !t || !t.length
    ? e
    : [e, ...t].reduce((e, t) => {
        if (!t) return e;
        let n = { ...e };
        return (
          t.appid &&
            (n.appid =
              !n.appid || !n.appid.length
                ? t.appid
                : n.appid.filter((e) => t.appid.includes(e))),
          typeof t.grouping == `number` &&
            typeof e.grouping != `number` &&
            (n.grouping = t.grouping),
          t.itemclass &&
            (n.itemclass =
              !n.itemclass || !n.itemclass.length
                ? t.itemclass
                : n.itemclass.filter((e) => t.itemclass.includes(e))),
          t.queryFilter &&
            (n.queryFilter
              ? n.queryFilter.push(
                  ...t.queryFilter.filter((e) => n.queryFilter.includes(e)),
                )
              : (n.queryFilter = t.queryFilter)),
          t.categoryTag &&
            (n.categoryTag
              ? n.categoryTag.push(
                  ...t.categoryTag.filter((e) => n.categoryTag.includes(e)),
                )
              : (n.categoryTag = t.categoryTag)),
          t.excludedContentDescriptors &&
            (n.excludedContentDescriptors
              ? n.excludedContentDescriptors.push(
                  ...t.excludedContentDescriptors.filter((e) =>
                    n.excludedContentDescriptors.includes(e),
                  ),
                )
              : (n.excludedContentDescriptors = t.excludedContentDescriptors)),
          t.excludedTagIDs &&
            (n.excludedTagIDs
              ? n.excludedTagIDs.push(
                  ...t.excludedTagIDs.filter((e) =>
                    n.excludedTagIDs.includes(e),
                  ),
                )
              : (n.excludedTagIDs = t.excludedTagIDs)),
          t.searchLanguage &&
            (n.searchLanguage = (n.searchLanguage, t.searchLanguage)),
          t.searchTerm &&
            (n.searchTerm = n.searchTerm
              ? n.searchTerm + ` ` + t.searchTerm
              : t.searchTerm),
          n
        );
      });
}
var Ar = class {
  m_fnRequest;
  m_fnBuildRequestKey;
  m_mapCache;
  m_mapInflightRequests;
  constructor(e, t) {
    ((this.m_fnRequest = e), (this.m_fnBuildRequestKey = t), this.Reset());
  }
  Reset() {
    ((this.m_mapCache = r.map({}, { deep: !1 })),
      (this.m_mapInflightRequests = r.map()));
  }
  Get(...e) {
    let t = this.m_fnBuildRequestKey(...e),
      n = this.m_mapCache,
      r = this.m_mapInflightRequests;
    if (n.has(t)) return n.get(t);
    r.get(t) ||
      (r.set(t, !0),
      this.m_fnRequest(...e).then((e) => {
        (n.set(t, e), r.delete(t));
      }));
  }
  BLoading(...e) {
    let t = this.m_fnBuildRequestKey(...e);
    return !!this.m_mapInflightRequests.get(t);
  }
};
function jr(e) {
  return !1;
}
function Mr(e) {
  if (e.type === 5 || e.type === 6)
    return !e.bundle_defids || e.bundle_defids.length == 0
      ? (console.error(`Bundle contains no items for def ${e.defid}`), !0)
      : !e.bundle_discount &&
          (console.error(`Bundle has no discount for def ${e.defid}`), !0);
  let t = e.community_item_data;
  if (!t) return !0;
  if (e.type === 1) {
    let n = !1;
    switch (e.community_item_class) {
      case 11:
      case 14:
      case 15:
        n = !t.item_image_small;
        break;
      case 4:
      case 16:
        n = !t.item_image_large;
        break;
      case 3:
        n = t.animated
          ? !t.item_image_large &&
            !t.item_movie_mp4 &&
            !t.item_movie_mp4_small &&
            !t.item_movie_webm &&
            !t.item_movie_webm_small
          : !t.item_image_large;
        break;
      case 13:
        n =
          !t.item_image_large &&
          !t.item_movie_mp4 &&
          !t.item_movie_mp4_small &&
          !t.item_movie_webm &&
          !t.item_movie_webm_small;
        break;
      case 17:
        n =
          !t.item_image_large && !t.item_movie_webm && !t.item_movie_webm_small;
    }
    if (n)
      return (
        console.error(`Missing expected assets for reward ${e.defid}`), !0
      );
  }
  return !1;
}
var Nr = class e {
  constructor() {
    re(this);
  }
  m_bCanClaimFreeItem = !1;
  m_claimedFreeItemDef = void 0;
  m_rtNextClaimTime = void 0;
  m_claimTimer;
  static s_SaleItemRewardsStore;
  static Get() {
    return (
      (this.s_SaleItemRewardsStore ||= new e()), this.s_SaleItemRewardsStore
    );
  }
  InitFreeItemReward(e) {
    ((this.m_bCanClaimFreeItem = e.can_claim),
      (this.m_claimedFreeItemDef = e.reward_item),
      (this.m_rtNextClaimTime = e.next_claim_time),
      this.SetClaimTimer());
  }
  BCanClaimFreeSaleReward() {
    return !H.Get().BIsLoggedIn() || this.m_bCanClaimFreeItem;
  }
  GetCurrentSaleRewardAppID() {
    return fr;
  }
  GetClaimedSaleRewardItemDef() {
    return this.m_claimedFreeItemDef;
  }
  async LoadCanClaimFreeSticker() {
    if (!H.Get().BIsLoggedIn()) return;
    let e = j.Init(Ae),
      t = await ke.CanClaimItem(H.Get().GetServiceTransport(), e);
    t.GetEResult() == 1
      ? this.InitFreeItemReward(t.Body().toObject())
      : console.error(
          "Error when calling SaleItemRewardsService.CanClaimItem: EResult=${msgResponse.GetEResult()}",
        );
  }
  async ClaimFreeSaleItem() {
    let e = { eResult: 2, strMessage: `` };
    if (!H.Get().BIsLoggedIn())
      return ((e = { eResult: 21, strMessage: E(`#Redeem_SignIn`) }), e);
    let t = j.Init(Oe),
      n = await ke.ClaimItem(H.Get().GetServiceTransport(), t);
    return (
      (e.eResult = n.GetEResult()),
      n.GetEResult() == 1
        ? ((this.m_claimedFreeItemDef = n.Body().reward_item().toObject()),
          H.Get().GetCommunityItemInventory(this.m_claimedFreeItemDef.appid),
          (this.m_bCanClaimFreeItem = !1),
          (this.m_rtNextClaimTime = n.Body().next_claim_time()),
          this.SetClaimTimer())
        : (n.GetEResult() == 10 &&
            (e.strMessage = E(`#SummerSale_Redeem_Busy`)),
          console.error(
            `Error when calling SaleItemRewardsService.ClaimItem: EResult=${n.GetEResult()}`,
          )),
      e
    );
  }
  GetNextClaimTime() {
    return this.m_rtNextClaimTime
      ? new Date(this.m_rtNextClaimTime * 1e3)
      : null;
  }
  SetClaimTimer() {
    if (this.m_claimTimer || !this.m_rtNextClaimTime) return;
    let e = Date.now(),
      t = new Date(this.m_rtNextClaimTime * 1e3),
      n = Math.max(0, t.getTime() - e);
    this.m_claimTimer = window.setTimeout(
      () => {
        ((this.m_claimTimer = void 0),
          Date.now() > t.getTime()
            ? (this.m_bCanClaimFreeItem = !0)
            : this.SetClaimTimer());
      },
      n > 3e5 ? n / 2 : n,
    );
  }
};
(w([r], Nr.prototype, `m_bCanClaimFreeItem`, void 0),
  w([r], Nr.prototype, `m_claimedFreeItemDef`, void 0),
  w([r], Nr.prototype, `m_rtNextClaimTime`, void 0));
var Pr = `J85FhUM6fIE-`,
  Fr = `YMXr5A2nNVc-`,
  Ir = `nsKErtlPaQc-`,
  Lr = `Kdj8CPa2rUY-`,
  W = te();
function Rr(e) {
  let { size: t } = e;
  return (0, W.jsx)(fe, { size: t });
}
var zr = `none`;
function Br(e, t, n = {}) {
  let {
      cInitialItems: r,
      cOverscanCount: i,
      fnRenderItemSkeleton: a,
      ...o
    } = n,
    s = r || 10,
    c = i || 10,
    [l, u] = (0, z.useState)(s + c),
    d = e(0, l).map((e) => t(e)),
    f = d.length === 0;
  if (f) for (let e = 0; e < l; e++) d.push(a());
  let p = Vr(d, o, f);
  return {
    ...p,
    fnNext: () => {
      (p.iPosition + p.rgVisibleItems.length > l - c &&
        u(l + p.rgVisibleItems.length),
        p.fnNext());
    },
  };
}
function Vr(e, t = {}, n = !1) {
  let r = e.length,
    [i, a] = (0, z.useState)(0),
    [o, s] = Wr(),
    [c, l] = Wr(),
    u = qt(`padding-right`, zr),
    d = Rt().spacing[zr],
    f = 1;
  s.width && l.width !== void 0 && (f = Math.floor((l.width + d) / s.width));
  let p = !n && i + f < r,
    m = () => p && a(i + f),
    h = i > 0,
    ee = () => h && a(Math.max(0, i - f)),
    te = i,
    ne = i + f;
  return {
    containerRef: c,
    rgVisibleItems: e
      .slice(te, ne)
      .map((e, n) =>
        (0, W.jsx)(
          `div`,
          {
            ref: n === 0 ? o : void 0,
            className: S(n === 0 || n < f - 1 ? u : void 0, t.itemClassName),
            children: e,
          },
          n + te,
        ),
      ),
    bAllowNext: p,
    bAllowPrev: h,
    fnNext: m,
    fnPrev: ee,
    iPosition: i,
  };
}
var Hr = (e) => {
    let {
      className: t,
      containerRef: n,
      rgVisibleItems: r,
      bAllowNext: i,
      bAllowPrev: a,
      fnNext: o,
      fnPrev: s,
      iPosition: c,
      ...l
    } = e;
    return (0, W.jsx)(x, {
      className: S(Pr, t),
      ref: n,
      "flow-children": `row`,
      ...l,
      children: r,
    });
  },
  Ur = (e) => {
    let { bAllowNext: t, bAllowPrev: n, fnNext: r, fnPrev: i } = e;
    return (0, W.jsxs)(z.Fragment, {
      children: [
        (0, W.jsx)(Jr, { className: S(Ir, !n && `rwLL3BOMoHw-`), onClick: i }),
        (0, W.jsx)(qr, { className: S(Lr, !t && `rwLL3BOMoHw-`), onClick: r }),
      ],
    });
  },
  Wr = () => (window.ResizeObserver ? Gr() : Kr()),
  Gr = () => {
    let [e, t] = (0, z.useState)({}),
      [n, r] = (0, z.useState)(null),
      i = (0, z.useCallback)((e) => r(e), []);
    return (
      (0, z.useLayoutEffect)(() => {
        if (n) {
          let e = new ResizeObserver(() =>
            window.requestAnimationFrame(() => t(n.getBoundingClientRect())),
          );
          return (e.observe(n), () => e.disconnect());
        }
        return () => {};
      }, [n]),
      [i, e]
    );
  },
  Kr = () => {
    let [e, t] = (0, z.useState)({}),
      [n, r] = (0, z.useState)(null),
      i = (0, z.useCallback)((e) => r(e), []);
    return (
      (0, z.useLayoutEffect)(() => {
        if (n) {
          let e = () =>
            window.requestAnimationFrame(() => t(n.getBoundingClientRect()));
          return (
            e(),
            window.addEventListener(`resize`, e),
            window.addEventListener(`scroll`, e),
            () => {
              (window.removeEventListener(`resize`, e),
                window.removeEventListener(`scroll`, e));
            }
          );
        }
        return () => {};
      }, [n]),
      [i, e]
    );
  },
  qr = (e) =>
    (0, W.jsx)(`svg`, {
      ...e,
      viewBox: `0 0 23 36`,
      children: (0, W.jsx)(`g`, {
        children: (0, W.jsx)(`path`, {
          d: `M6 1.5L21 18L6 34.5`,
          stroke: `#EAEAEA`,
          fill: `none`,
          strokeWidth: `4`,
        }),
      }),
    }),
  Jr = (e) => {
    let { style: t, ...n } = e,
      r = { transform: `scaleX(-1)`, ...(t || {}) };
    return (0, W.jsx)(qr, { style: r, ...n });
  };
function Yr(e) {
  let { items: t, renderItem: n, loadMore: r, bLoadingMore: i, style: a } = e,
    o = ze();
  return (0, W.jsx)(x, {
    className: Fr,
    children: (0, W.jsxs)(x, {
      "flow-children": `row`,
      className: S(Pr, void 0),
      style: o ? null : a,
      children: [
        t.map(n),
        (0, W.jsx)(at, {
          trigger: `repeated`,
          rootMargin: `0px 100% 0px 100%`,
          horizontal: !0,
          onVisibilityChange: (e) => e && r(),
        }),
        i &&
          (0, W.jsx)(`div`, {
            className: `TYhPtUEB35o-`,
            children: (0, W.jsx)(Rr, {}),
          }),
      ],
    }),
  });
}
var Xr = `AqGaS--D2n0-`,
  Zr = `fmdxSBsbXDE-`,
  Qr = `pMnhVAr8mRY-`,
  $r = `bEVd7Wx0Jzw-`,
  ei = (e) => {
    let {
        title: t,
        subtitle: n,
        leftActions: r,
        rightActions: i,
        children: a,
      } = e,
      o = t || n || r || i;
    return (0, W.jsxs)(`div`, {
      className: Zr,
      children: [
        o &&
          (0, W.jsx)(`div`, {
            className: `nO4XbnzUYNM-`,
            children: (0, W.jsxs)(`div`, {
              className: `ucwmr2GDEt4-`,
              children: [
                (0, W.jsxs)(`div`, {
                  className: `B7vqMNZOp-o-`,
                  children: [
                    (0, W.jsx)(`div`, {
                      className: `JttftKE3xaE-`,
                      children: t,
                    }),
                    r &&
                      (0, W.jsx)(`div`, {
                        className: `_8sryJEOryv0-`,
                        children: r,
                      }),
                    (0, W.jsx)(`div`, { className: `vr9rffQHDeE-` }),
                    i &&
                      (0, W.jsx)(`div`, {
                        className: `_8sryJEOryv0-`,
                        children: i,
                      }),
                  ],
                }),
                (0, W.jsx)(`div`, { className: `WNyTopc2hVQ-`, children: n }),
              ],
            }),
          }),
        (0, W.jsx)(`div`, { className: Qr, children: a }),
      ],
    });
  },
  ti = (e) => {
    let { className: t, ...n } = e;
    return (0, W.jsx)(Ie, { className: S(t, Xr), ...n });
  },
  ni = (e) => {
    let { className: t, ...n } = e;
    return (0, W.jsx)(`div`, { className: S(t, $r), ...n });
  },
  ri = new URL(
    `../../../images/applications/store/icon_showcase_1.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  ii = `data:image/svg+xml,%3csvg%20width='119'%20height='136'%20viewBox='0%200%20119%20136'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M62.408%2034.0817C62.408%2029.7685%2058.8936%2026.2541%2054.5804%2026.2541H33.3341C31.7367%2026.2541%2030.4587%2024.6566%2030.7782%2023.0592C30.7782%2023.0592%2037.3278%207.08452%2037.3278%205.00781C37.3278%202.9311%2036.5291%201.49339%2034.9316%201.17389C33.3341%200.854399%2029.8197%200.0556668%2029.8197%200.0556668C28.2223%20-0.10408%2027.104%200.0556667%2026.3053%200.8544L2.50305%2024.6566C1.06534%2026.0944%200.266602%2028.0113%200.266602%2030.088V73.8586C0.266602%2075.4561%201.70432%2076.8938%203.30179%2076.8938H43.0787C46.2736%2076.8938%2048.5101%2074.6573%2050.2673%2072.1014L60.9703%2057.8839C61.6093%2057.0852%2062.5678%2055.1682%2062.5678%2053.5708V34.4012L62.408%2034.0817Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M56.1777%20101.918C56.1777%20106.231%2059.6922%20109.746%2064.0053%20109.746H85.2516C86.8491%20109.746%2088.1271%20111.343%2087.8076%20112.941C87.8076%20112.941%2081.2579%20128.915%2081.2579%20130.992C81.2579%20133.069%2082.0567%20134.507%2083.6541%20134.826C85.2516%20135.146%2088.766%20135.944%2088.766%20135.944C90.3635%20136.104%2091.4817%20135.944%2092.2805%20135.146L115.923%20111.343C117.361%20109.906%20118.159%20107.989%20118.159%20105.912V62.1414C118.159%2060.5439%20116.722%2059.1062%20115.124%2059.1062H75.6668C72.4719%2059.1062%2070.2354%2061.3427%2068.4782%2063.8986L57.7752%2078.116C57.1362%2078.9148%2056.1777%2080.8317%2056.1777%2082.4292V101.439V101.918Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='31.4172'%20y1='0'%20x2='31.4172'%20y2='76.8938'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='87.1686'%20y1='59.1062'%20x2='87.1686'%20y2='136'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  ai = `data:image/svg+xml,%3csvg%20width='119'%20height='122'%20viewBox='0%200%20119%20122'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M59.5%2019.5437C55.93%2019.5437%2053.55%2017.1748%2053.55%2013.6214V5.92233C53.55%202.36893%2055.93%200%2059.5%200C63.07%200%2065.45%202.36893%2065.45%205.92233V13.6214C65.45%2016.5825%2063.07%2019.5437%2059.5%2019.5437ZM73.78%20116.078C73.78%20112.524%2071.4%20110.155%2067.83%20110.155H51.17C47.6%20110.155%2045.22%20112.524%2045.22%20116.078C45.22%20119.631%2047.6%20122%2051.17%20122H67.83C71.4%20122%2073.78%20119.631%2073.78%20116.078ZM32.725%2029.0194C35.105%2026.6505%2035.105%2023.0971%2032.725%2020.7282L27.37%2015.3981C24.99%2013.0291%2021.42%2013.0291%2019.04%2015.3981C16.66%2017.767%2016.66%2021.3204%2019.04%2023.6893L24.395%2029.0194C26.775%2031.3883%2030.345%2031.3883%2032.725%2029.0194ZM94.605%2029.0194L99.96%2023.6893C102.34%2021.3204%20102.34%2017.767%2099.96%2015.3981C97.58%2013.0291%2094.01%2013.0291%2091.63%2015.3981L86.275%2020.7282C83.895%2023.0971%2083.895%2026.6505%2086.275%2029.0194C88.06%2031.3883%2092.225%2031.3883%2094.605%2029.0194ZM119%2055.0777C119%2051.5243%20116.62%2049.1553%20113.05%2049.1553H105.315C101.745%2049.1553%2099.365%2051.5243%2099.365%2055.0777C99.365%2058.6311%20101.745%2061%20105.315%2061H113.05C116.62%2061%20119%2058.6311%20119%2055.0777ZM19.635%2055.0777C19.635%2051.5243%2017.255%2049.1553%2013.685%2049.1553H5.95C2.38%2049.1553%200%2051.5243%200%2055.0777C0%2058.6311%202.38%2061%205.95%2061H13.685C17.255%2061%2019.635%2058.6311%2019.635%2055.0777ZM79.73%2034.9417C73.78%2030.2039%2067.235%2027.8349%2059.5%2027.8349C57.12%2027.8349%2054.145%2028.4272%2051.765%2029.0194C34.51%2033.165%2023.8%2050.3398%2028.56%2068.1068C30.94%2076.9903%2036.295%2084.0971%2044.03%2088.2427V96.534C44.03%20100.087%2046.41%20102.456%2049.98%20102.456H69.615C73.185%20102.456%2075.565%20100.087%2075.565%2096.534V88.8349C91.035%2079.9515%2096.985%2060.4078%2088.06%2045.0097C85.68%2040.8641%2083.3%2037.3107%2079.73%2034.9417Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='59.5'%20y1='0'%20x2='59.5'%20y2='122'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  oi = new URL(
    `../../../images/applications/store/icon_showcase_12.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  si = new URL(
    `../../../images/applications/store/icon_showcase_13.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  ci = new URL(
    `../../../images/applications/store/icon_showcase_14.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  li = `data:image/svg+xml,%3csvg%20width='91'%20height='118'%20viewBox='0%200%2091%20118'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.636%200H0.981445V118H10.636V0Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M64.975%2028.4804L71.7818%2033.2545V0H54.6182V33.2545L61.425%2028.4804C61.9441%2028.1162%2062.5643%2027.9207%2063.2%2027.9207C63.8357%2027.9207%2064.4558%2028.1162%2064.975%2028.4804Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M90.0182%200H77.1997V39.2623C77.199%2039.8231%2077.0444%2040.3729%2076.7525%2040.8518C76.4607%2041.3307%2076.043%2041.7201%2075.5449%2041.9776C75.0469%2042.2352%2074.4877%2042.3509%2073.9284%2042.3121C73.3691%2042.2733%2072.8311%2042.0816%2072.3734%2041.7578L62.5412%2034.8078L52.709%2041.7578C52.2511%2042.0814%2051.713%2042.273%2051.1535%2042.3115C50.5941%2042.35%2050.0349%2042.234%2049.5369%2041.9761C49.0389%2041.7182%2048.6214%2041.3285%2048.3298%2040.8493C48.0383%2040.3702%2047.884%2039.8201%2047.8837%2039.2592V0H18.1455V118H90.0182V0Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='5.80872'%20y1='0'%20x2='5.80872'%20y2='118'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='63.2'%20y1='0'%20x2='63.2'%20y2='33.2545'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='54.0819'%20y1='0'%20x2='54.0819'%20y2='118'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  ui = new URL(
    `../../../images/applications/store/icon_showcase_16.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  di = new URL(
    `../../../images/applications/store/icon_showcase_17.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  fi = `data:image/svg+xml,%3csvg%20width='183'%20height='107'%20viewBox='0%200%20183%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='42.165'%20y='41.8574'%20width='140'%20height='65'%20rx='5'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M161.331%2026.1426C161.331%2023.3812%20159.092%2021.1426%20156.331%2021.1426H26.1426C23.3812%2021.1426%2021.1426%2023.3812%2021.1426%2026.1426V80.714C21.1426%2083.4754%2023.3812%2085.714%2026.1426%2085.714H28.8869C31.6484%2085.714%2033.8869%2083.4754%2033.8869%2080.714V38.0373C33.8869%2035.2759%2036.1255%2033.0373%2038.8869%2033.0373H156.331C159.092%2033.0373%20161.331%2030.7987%20161.331%2028.0373V26.1426Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M140.188%205C140.188%202.23858%20137.949%200%20135.188%200H5C2.23858%200%200%202.23857%200%205V59.5714C0%2062.3329%202.23858%2064.5714%205%2064.5714H7.74436C10.5058%2064.5714%2012.7444%2062.3329%2012.7444%2059.5714V16.8947C12.7444%2014.1333%2014.9829%2011.8947%2017.7444%2011.8947H135.188C137.949%2011.8947%20140.188%209.65616%20140.188%206.89474V5Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='112.165'%20y1='41.8574'%20x2='112.165'%20y2='106.857'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='91.2366'%20y1='21.1426'%20x2='91.2366'%20y2='85.714'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='70.094'%20y1='0'%20x2='70.094'%20y2='64.5714'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  pi = new URL(
    `../../../images/applications/store/icon_showcase_21.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  mi = `data:image/svg+xml,%3csvg%20width='83'%20height='130'%20viewBox='0%200%2083%20130'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M78.9225%207.66314H47.3826V5.47367C47.3826%202.46315%2044.7663%200%2041.5687%200C38.3711%200%2035.7549%202.46315%2035.7549%205.47367V7.66314H4.21501C1.88949%207.66314%200%209.44209%200%2011.6316V74.7157C0%2076.9051%201.88949%2078.6841%204.21501%2078.6841H19.767L4.65105%20122.747C3.63363%20125.621%205.23243%20128.768%208.43003%20129.726C11.6276%20130.684%2014.8252%20129.042%2015.8426%20126.168L22.9646%20105.642H60.4636L67.5855%20126.168C68.3123%20128.495%2070.6378%20130%2073.1087%20130C73.69%20130%2074.2714%20129.863%2074.8528%20129.726C77.9051%20128.768%2079.6492%20125.621%2078.6318%20122.747L63.2252%2078.8209H78.7771C81.1026%2078.8209%2082.9921%2077.042%2082.9921%2074.8525V11.6316C83.1375%209.44209%2081.248%207.66314%2078.9225%207.66314ZM49.8534%2022.5789C53.1964%2022.5789%2055.9579%2025.1789%2055.9579%2028.3263C55.9579%2031.4736%2053.1964%2034.0736%2049.8534%2034.0736C46.5105%2034.0736%2043.7489%2031.4736%2043.7489%2028.3263C43.7489%2025.1789%2046.5105%2022.5789%2049.8534%2022.5789ZM26.5982%2094.6946L32.1213%2078.6841H50.8708L56.394%2094.6946H26.5982ZM65.4054%2061.1683C64.824%2061.9894%2063.9519%2062.5367%2062.9345%2062.5367H20.3483C19.3309%2062.5367%2018.3135%2061.9894%2017.8775%2061.1683C17.2961%2060.2104%2017.4414%2059.2525%2018.0228%2058.4315L32.5573%2038.3157C33.5748%2036.8105%2036.191%2036.8105%2037.2084%2038.3157L45.3477%2049.5368L49.8534%2043.5157C50.8708%2042.0104%2053.4871%2042.0104%2054.5045%2043.5157L65.26%2058.4315C65.8414%2059.2525%2065.8414%2060.2104%2065.4054%2061.1683Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='41.5'%20y1='0'%20x2='41.5'%20y2='130'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  hi = new URL(
    `../../../images/applications/store/icon_showcase_23.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  gi = new URL(
    `../../../images/applications/store/icon_showcase_24.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _i = `data:image/svg+xml,%3csvg%20width='179'%20height='107'%20viewBox='0%200%20179%20107'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M153.595%205.22428C153.244%203.91237%20152.056%203%20150.697%203H97C95.3431%203%2094%204.34315%2094%206V12C94%2013.6569%2095.3431%2015%2097%2015H125C126.657%2015%20128%2016.3431%20128%2018V99C128%20100.657%20129.343%20102%20131%20102H175.591C177.564%20102%20178.999%20100.129%20178.489%2098.2243L153.595%205.22428Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M115.451%2023H58C59.8126%2042.8279%2066.0206%2048.195%2071.1295%2052.6023C75.3534%2056.2464%2081.139%2061.2357%2081.139%2071.0948C81.139%2082.547%2076.8926%2093.0142%2069.9144%20101H115.451C117.411%20101%20119%2099.3985%20119%2097.4227V26.5773C119%2024.6014%20117.412%2023%20115.451%2023Z'%20fill='url(%23paint1_linear)'%20fill-opacity='0.85'/%3e%3cpath%20d='M48.0468%2014.9149H48.5028C50.6928%2014.9149%2052.4688%2013.3124%2052.4688%2011.338V3.57685C52.4688%201.6012%2050.6928%200%2048.5028%200H23.4972C21.3072%200%2019.5312%201.6012%2019.5312%203.57685V11.338C19.5312%2013.3124%2021.3072%2014.9149%2023.4972%2014.9149H23.9532C22.8276%2063.7759%200%2056.1954%200%2071.3385C0%2091.032%2016.1172%20107%2036%20107C55.8828%20107%2072%2091.032%2072%2071.3385C72%2056.1954%2049.1736%2063.7771%2048.0468%2014.9149Z'%20fill='url(%23paint2_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='136.297'%20y1='3'%20x2='136.297'%20y2='102'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='88.5'%20y1='23'%20x2='88.5'%20y2='101'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='36'%20y1='0'%20x2='36'%20y2='107'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  vi = new URL(
    `../../../images/applications/store/icon_showcase_4.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  yi = new URL(
    `../../../images/applications/store/icon_showcase_5.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  bi = `data:image/svg+xml,%3csvg%20width='206'%20height='52'%20viewBox='0%200%20206%2052'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M132.881%208.814C134.427%2013.2102%20134.684%2019.4166%20129.79%2024.3299L103%2052L76.21%2024.3299C71.3157%2019.4166%2071.5733%2012.9516%2073.1189%208.814C75.1796%203.64203%2079.8164%200.280238%2085.2259%200.0216394C85.4835%200.0216394%2085.7411%200.0216394%2086.2563%200.0216394C91.1506%200.0216394%2095.7873%202.09043%2099.3936%205.71082C101.454%207.77961%20104.803%207.77961%20106.864%205.71082C110.47%201.83183%20115.622%200.0216394%20120.774%200.0216394C126.184%200.280238%20130.82%203.64203%20132.881%208.814ZM48.6473%200.0216394C43.4953%20-0.236959%2038.3434%201.83183%2034.7371%205.71082C32.6763%207.77961%2029.3276%207.77961%2027.2668%205.71082C23.918%202.09043%2019.2813%200.0216394%2014.1294%200.0216394C13.8718%200.0216394%2013.6142%200.0216394%2013.099%200.0216394C7.4319%200.280238%203.05277%203.64203%200.992002%208.814C-0.553574%2013.2102%20-0.811168%2019.4166%204.08316%2024.3299L30.8731%2052L57.6631%2024.5885C62.5574%2019.6751%2062.2998%2013.2102%2060.7543%209.0726C58.6935%203.64202%2054.0568%200.280238%2048.6473%200.0216394ZM205.008%208.814C202.947%203.64203%20198.311%200.280238%20192.901%200.0216394C187.749%20-0.236959%20182.597%201.83183%20178.991%205.71082C176.93%207.77961%20173.581%207.77961%20171.521%205.71082C168.172%202.09043%20163.535%200.0216394%20158.383%200.0216394C158.126%200.0216394%20157.868%200.0216394%20157.353%200.0216394C151.686%200.280238%20147.307%203.64203%20145.246%208.814C143.7%2013.2102%20143.443%2019.4166%20148.337%2024.3299L175.127%2052L201.917%2024.5885C206.811%2019.4165%20206.554%2013.2102%20205.008%208.814Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='103'%20y1='0'%20x2='103'%20y2='52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  xi = new URL(
    `../../../images/applications/store/icon_showcase_7.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Si = `data:image/svg+xml,%3csvg%20width='202'%20height='76'%20viewBox='0%200%20202%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5%200C2.23828%200%200%202.23853%200%205V71C0%2073.7615%202.23828%2076%205%2076H197C199.762%2076%20202%2073.7615%20202%2071V5C202%202.23853%20199.762%200%20197%200H5ZM27%2018.1414H18V13H40.4346V18.1414H32V55.8586H40.4355V61H32H27H18V55.8586H27V18.1414Z'%20fill='url(%23paint0_linear)'%20fill-opacity='0.85'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear'%20x1='101'%20y1='0'%20x2='101'%20y2='76'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0.58'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e`,
  Ci = new URL(
    `../../../images/applications/store/icon_showcase_9.svg?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  wi = `NswEQ9N1d90-`,
  Ti = `janX-V7JCm4-`,
  Ei = `_4MLY4ZIBmA0-`,
  Di = (e) => {
    let { amount: t, className: n, size: r, ...i } = e,
      a = t > 0 ? ut(t) : E(`#Rewards_Free`);
    return (0, W.jsxs)(`div`, {
      className: S(Ti, n),
      ...i,
      children: [
        (0, W.jsx)($e, { className: wi }),
        (0, W.jsxs)(`div`, {
          className: Ei,
          style: r ? { fontSize: `${r}rem` } : void 0,
          children: [a, e.children],
        }),
      ],
    });
  },
  Oi = `_6psFyKVNQmw-`,
  ki = `E7oxZCRd9I0-`,
  Ai = `l1z37S64KIQ-`,
  ji = `U3HcGFQg9ak-`,
  Mi = `xrjlAEljqvo-`,
  Ni = `kDSqz49I5Hw-`,
  Pi = `YoOqAvpWYgQ-`,
  Fi = `_216R8aJbhUM-`,
  Ii = `ySqH-OIdtW4-`,
  Li = `qvssbr74lW8-`,
  Ri = `_8LgDijh8MiU-`,
  zi = `N3SC-q5zo8w-`,
  Bi = `tOYpLlnuJxI-`,
  Vi = `MIVDN7w59XE-`,
  Hi = `FS6feAUS6tM-`,
  Ui = `_87yocd-WU6c-`,
  Wi = `adCtZTssWRs-`,
  Gi = `vNLbo4meUXc-`,
  Ki = `hsxoGvqel0k-`,
  qi = `_9RjtLB4g-HE-`,
  Ji = `gl8SNJ4zT5k-`,
  Yi = `sCimV9InvMM-`,
  Xi = `qZsAxH6YVCA-`,
  Zi = `_1atpGrHdHs0-`,
  Qi = `EOr2spguwlI-`,
  $i = `kS90w55cmrc-`,
  ea = `SK7vXGSN6OY-`,
  ta = `Df2BqSSNihs-`,
  na = `xk75qOlyaxs-`,
  ra = `Ri0jEi4FgmQ-`,
  ia = `FZbk8uKObbw-`,
  aa = `_83WZNLyp11c-`,
  oa = `j498-YNwhz0-`,
  sa = `keUN4m6H-Oc-`,
  ca = `cL3tfa-JDBE-`,
  la = `w6UtE24wq8w-`,
  ua = `FkVCjE6GjQg-`,
  da = `xsaI2OSfN2I-`,
  fa = (e) => {
    let { className: t, children: n, onClick: r, ...i } = e;
    return (0, W.jsxs)(x, {
      className: S(ca, t),
      focusable: !0,
      onActivate: r,
      ...i,
      children: [(0, W.jsx)(`div`, { className: S(da) }), n],
    });
  },
  pa = (e) => {
    let { className: t, ...n } = e;
    return (0, W.jsx)(`div`, { className: S(la, t), ...n });
  },
  ma = (e) => {
    let { className: t, ...n } = e;
    return (0, W.jsx)(`div`, { className: S(ua, t), ...n });
  },
  G = (e) =>
    (0, W.jsx)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, W.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z`,
      }),
    }),
  ha = (e) =>
    (0, W.jsx)(`svg`, {
      width: 30,
      height: 30,
      viewBox: `0 0 30 30`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, W.jsx)(`path`, {
        d: `M15.2305 28.1415L15.2305 15.621L15.2305 3.10029C8.31552 3.10029 2.70984 8.70596 2.70984 15.6209C2.70984 22.5359 8.31552 28.1415 15.2305 28.1415ZM30.2305 15.6209C30.2305 23.9052 23.5147 30.6209 15.2305 30.6209C6.9462 30.6209 0.230469 23.9052 0.230469 15.6209C0.230469 7.33664 6.9462 0.620911 15.2305 0.620911C23.5147 0.620911 30.2305 7.33664 30.2305 15.6209Z`,
        fill: `#5B7E0F`,
      }),
    });
function ga(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `61px`,
    height: `52px`,
    viewBox: `0 0 61 52`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M31.327 0.622074L31.0027 0.341797L30.6762 0.619372L7.67619 20.1694L0.676186 26.1194C0.465782 26.2982 0.440197 26.6138 0.61904 26.8242C0.797884 27.0346 1.11343 27.0602 1.32383 26.8813L7.50001 21.6316V49.0003C7.50001 50.3811 8.6193 51.5003 10 51.5003H51.5C52.8807 51.5003 54 50.3811 54 49.0003V21.5426L60.173 26.8786C60.3819 27.0592 60.6977 27.0362 60.8783 26.8273C61.0589 26.6184 61.0359 26.3027 60.827 26.1221L53.827 20.0712L31.327 0.622074ZM8.50001 49.0003V20.7816L30.9973 1.65889L53 20.6782V49.0003C53 49.8288 52.3284 50.5003 51.5 50.5003H38.5V32.0003C38.5 30.6196 37.3807 29.5003 36 29.5003H26C24.6193 29.5003 23.5 30.6196 23.5 32.0003V50.5003H10C9.17158 50.5003 8.50001 49.8288 8.50001 49.0003ZM24.5 50.5003H37.5V32.0003C37.5 31.1719 36.8284 30.5003 36 30.5003H26C25.1716 30.5003 24.5 31.1719 24.5 32.0003V50.5003Z`,
      fill: ``,
    }),
  });
}
function _a(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `47px`,
    height: `51px`,
    viewBox: `0 0 47 51`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M33.9999 10.5C33.9999 15.7034 29.5671 20 23.9999 20C18.4327 20 13.9999 15.7034 13.9999 10.5C13.9999 5.29663 18.4327 1 23.9999 1C29.5671 1 33.9999 5.29663 33.9999 10.5ZM34.9999 10.5C34.9999 16.299 30.075 21 23.9999 21C17.9247 21 12.9999 16.299 12.9999 10.5C12.9999 4.70101 17.9247 0 23.9999 0C30.075 0 34.9999 4.70101 34.9999 10.5ZM16.3702 23.5C10.6886 23.5 5.62398 26.8717 3.72868 32.2547C2.47599 35.8127 1.26935 39.3781 0.768536 40.866C0.549738 41.516 0.803538 42.2172 1.36831 42.5884L4.65592 44.7495C16.463 52.5107 31.809 52.2879 43.3858 44.1873L45.6833 42.5797C46.2215 42.2031 46.452 41.5201 46.2522 40.8944L43.9193 33.5891C42.0002 27.5792 36.4154 23.5 30.1065 23.5H24.2027H16.3702ZM4.67193 32.5868C6.41799 27.6277 11.0872 24.5 16.3702 24.5H24.2027H30.1065C35.9803 24.5 41.1799 28.2979 42.9667 33.8933L45.2996 41.1986C45.3662 41.4072 45.2893 41.6348 45.1099 41.7604L42.8125 43.368C31.5712 51.2338 16.67 51.4501 5.20521 43.9139L1.9176 41.7528C1.72419 41.6257 1.64564 41.3949 1.71629 41.185C2.21655 39.6988 3.42149 36.1384 4.67193 32.5868Z`,
      fill: ``,
    }),
  });
}
function va(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `49px`,
    height: `58px`,
    viewBox: `0 0 49 58`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M24.5 12C27.5376 12 30 9.53757 30 6.5C30 3.46243 27.5376 1 24.5 1C21.4624 1 19 3.46243 19 6.5C19 9.53757 21.4624 12 24.5 12ZM24.5 13C26.1149 13 27.5923 12.411 28.7291 11.4362L38.2929 21H11.2071L20.5469 11.6602C21.6422 12.5005 23.0128 13 24.5 13ZM9.79289 21L19.8014 10.9915C18.6855 9.8244 18 8.24225 18 6.5C18 2.91015 20.9101 0 24.5 0C28.0899 0 31 2.91015 31 6.5C31 8.11495 30.411 9.59234 29.4362 10.7291L39.7071 21H40H45C46.933 21 48.5 22.567 48.5 24.5V54C48.5 55.933 46.933 57.5 45 57.5H4C2.067 57.5 0.5 55.933 0.5 54V24.5C0.5 22.567 2.067 21 4 21H8H9.79289ZM8 22H4C2.61929 22 1.5 23.1193 1.5 24.5V54C1.5 55.3807 2.61929 56.5 4 56.5H45C46.3807 56.5 47.5 55.3807 47.5 54V24.5C47.5 23.1193 46.3807 22 45 22H40H39.5H39.2929H10.2071H10H8ZM10.5 29C9.11929 29 8 30.1193 8 31.5V48C8 49.3807 9.11929 50.5 10.5 50.5H37.5C38.8807 50.5 40 49.3807 40 48V31.5C40 30.1193 38.8807 29 37.5 29H10.5ZM9 31.5C9 30.6716 9.67157 30 10.5 30H37.5C38.3284 30 39 30.6716 39 31.5V48C39 48.8284 38.3284 49.5 37.5 49.5H10.5C9.67157 49.5 9 48.8284 9 48V31.5Z`,
      fill: ``,
    }),
  });
}
function ya(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...n,
    children: (0, W.jsx)(`path`, {
      fill: `none`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z`,
    }),
  });
}
function ba(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `64`,
    height: `62`,
    viewBox: `0 0 64 62`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z`,
      fill: ``,
    }),
  });
}
function xa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `51px`,
    height: `56px`,
    viewBox: `0 0 51 56`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M43.2109 6.95H7.21094C4.00769 6.95 1.41094 9.54675 1.41094 12.75V48.6496C1.41094 51.8528 4.00769 54.4496 7.21094 54.4496H43.2109C46.4142 54.4496 49.0109 51.8528 49.0109 48.6496V12.75C49.0109 9.54675 46.4142 6.95 43.2109 6.95ZM7.21094 5.75C3.34494 5.75 0.210938 8.88401 0.210938 12.75V48.6496C0.210938 52.5156 3.34494 55.6496 7.21094 55.6496H43.2109C47.0769 55.6496 50.2109 52.5156 50.2109 48.6496V12.75C50.2109 8.88401 47.0769 5.75 43.2109 5.75H7.21094Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M50.2109 17.875H0.210938V16.675H50.2109V17.875Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M27.3491 29.4463L25.9645 25.5785C25.7114 24.8714 24.7113 24.8714 24.4581 25.5785L23.0735 29.4463C22.6297 30.6861 21.4717 31.5275 20.1555 31.5664L16.0491 31.688C15.2983 31.7103 14.9893 32.6614 15.5836 33.1207L18.8342 35.6327C19.8762 36.4379 20.3185 37.7992 19.9488 39.0631L18.7956 43.0061C18.5847 43.727 19.3938 44.3148 20.0142 43.8915L23.4079 41.5762C24.4956 40.8341 25.927 40.8341 27.0148 41.5762L30.4084 43.8915C31.0288 44.3148 31.8379 43.727 31.6271 43.0061L30.4738 39.0631C30.1041 37.7992 30.5464 36.4379 31.5884 35.6327L34.839 33.1207C35.4334 32.6614 35.1243 31.7103 34.3735 31.688L30.2672 31.5664C28.9509 31.5275 27.7929 30.6861 27.3491 29.4463ZM27.0943 25.1741C26.4614 23.4062 23.9612 23.4062 23.3283 25.1741L21.9437 29.0419C21.6663 29.8168 20.9426 30.3426 20.1199 30.367L16.0136 30.4886C14.1366 30.5441 13.364 32.922 14.8498 34.0702L18.1005 36.5823C18.7517 37.0855 19.0281 37.9363 18.7971 38.7262L17.6438 42.6692C17.1167 44.4715 19.1394 45.9411 20.6905 44.8828L24.0841 42.5675C24.764 42.1037 25.6586 42.1037 26.3385 42.5675L29.7321 44.8828C31.2832 45.9411 33.306 44.4715 32.7788 42.6692L31.6255 38.7262C31.3945 37.9363 31.6709 37.0855 32.3221 36.5823L35.5728 34.0702C37.0586 32.922 36.286 30.5441 34.409 30.4886L30.3027 30.367C29.48 30.3426 28.7563 29.8168 28.4789 29.0419L27.0943 25.1741Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M16.4922 9.125V0.0268555L17.6922 0.0268555L17.6922 9.125H16.4922Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M17.0234 13.2063C17.8795 13.2063 18.5734 12.5123 18.5734 11.6562C18.5734 10.8002 17.8795 10.1062 17.0234 10.1062C16.1674 10.1062 15.4734 10.8002 15.4734 11.6562C15.4734 12.5123 16.1674 13.2063 17.0234 13.2063ZM17.0234 14.4062C18.5422 14.4062 19.7734 13.175 19.7734 11.6562C19.7734 10.1375 18.5422 8.90625 17.0234 8.90625C15.5047 8.90625 14.2734 10.1375 14.2734 11.6562C14.2734 13.175 15.5047 14.4062 17.0234 14.4062Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M32.8672 9.125V0.0268555L34.0672 0.0268555V9.125H32.8672Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M33.3984 13.2063C34.2545 13.2063 34.9484 12.5123 34.9484 11.6562C34.9484 10.8002 34.2545 10.1062 33.3984 10.1062C32.5424 10.1062 31.8484 10.8002 31.8484 11.6562C31.8484 12.5123 32.5424 13.2063 33.3984 13.2063ZM33.3984 14.4062C34.9172 14.4062 36.1484 13.175 36.1484 11.6562C36.1484 10.1375 34.9172 8.90625 33.3984 8.90625C31.8797 8.90625 30.6484 10.1375 30.6484 11.6562C30.6484 13.175 31.8797 14.4062 33.3984 14.4062Z`,
        fill: ``,
      }),
    ],
  });
}
function Sa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    fill: `none`,
    width: `68`,
    height: `68`,
    viewBox: `0 0 68 68`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: S(t, `SVGIcon_Button`),
    ...n,
    children: [
      (0, W.jsx)(`path`, {
        d: `M57.2981 10.8369L56.9021 9.61803C56.3034 7.77541 53.6966 7.77541 53.0979 9.61803L52.7019 10.8369H51.4203C49.4828 10.8369 48.6773 13.3161 50.2447 14.4549L51.2815 15.2082L50.8855 16.4271C50.2868 18.2697 52.3958 19.8019 53.9632 18.6631L55 17.9098L56.0368 18.6631C57.6042 19.8019 59.7132 18.2697 59.1145 16.4271L58.7185 15.2082L59.7553 14.4549C61.3227 13.3161 60.5172 10.8369 58.5797 10.8369L57.2981 10.8369Z`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, W.jsx)(`rect`, {
        x: `1`,
        y: `1`,
        width: `66`,
        height: `66`,
        rx: `9`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, W.jsx)(`rect`, {
        x: `7`,
        y: `7`,
        width: `14`,
        height: `14`,
        rx: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, W.jsx)(`rect`, {
        x: `7`,
        y: `26`,
        width: `54`,
        height: `14`,
        rx: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, W.jsx)(`rect`, {
        x: `7`,
        y: `46`,
        width: `54`,
        height: `14`,
        rx: `3`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
      }),
      (0, W.jsx)(`line`, {
        x1: `26`,
        y1: `17`,
        x2: `39`,
        y2: `17`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
      }),
      (0, W.jsx)(`line`, {
        x1: `26`,
        y1: `12`,
        x2: `45`,
        y2: `12`,
        stroke: `currentColor`,
        fill: `none`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
      }),
    ],
  });
}
function Ca(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 52 46.1`,
    children: (0, W.jsx)(`path`, {
      d: `M51.5,40.2l-6.8-11.7c2.4-2,3.9-5,3.9-8.4c0-6.1-4.9-11-11-11c-1.3,0-2.5,0.2-3.7,0.6L29.4,2c-0.7-1.2-2-2-3.4-2s-2.7,0.7-3.4,2l-4.1,7.1H6.6v20.6l-6,10.5c-0.7,1.2-0.7,2.7,0,4c0.7,1.2,2,2,3.4,2H48c1.4,0,2.7-0.7,3.4-2C52.2,42.9,52.2,41.4,51.5,40.2z M46.6,20.1c0,5-4,9-9,9s-9-4-9-9s4-9,9-9S46.6,15.1,46.6,20.1z M8.6,11.1h8.7L8.6,26.2V11.1zM49.7,43.1c-0.4,0.6-1,1-1.7,1H4c-0.7,0-1.3-0.4-1.7-1c-0.4-0.6-0.4-1.3,0-2L24.3,3c0.4-0.6,1-1,1.7-1s1.3,0.4,1.7,1l4.4,7.6c-3.3,1.9-5.5,5.5-5.5,9.5c0,6.1,4.9,11,11,11c2,0,3.9-0.5,5.5-1.5l6.7,11.5C50.1,41.8,50.1,42.5,49.7,43.1z`,
    }),
  });
}
function wa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `64px`,
    height: `54px`,
    viewBox: `0 0 64 54`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M4 0C1.79086 0 0 1.79086 0 4V50C0 52.2091 1.79086 54 4 54H11H53H60C62.2091 54 64 52.2091 64 50V4C64 1.79086 62.2091 0 60 0H53H11H4ZM11 2V52H53V2H11ZM8 25H3V29.8H8V25ZM3 15H8V19.8H3V15ZM8 6H3V10.8H8V6ZM3 34.5996H8V39.3996H3V34.5996ZM8 44.2002H3V49.0002H8V44.2002ZM39.8603 17.535C39.8603 21.0291 36.8085 24.0701 32.7786 24.0701C28.7487 24.0701 25.6969 21.0291 25.6969 17.535C25.6969 14.041 28.7487 11 32.7786 11C36.8085 11 39.8603 14.041 39.8603 17.535ZM41.8603 17.535C41.8603 22.2488 37.7943 26.0701 32.7786 26.0701C27.7629 26.0701 23.6969 22.2488 23.6969 17.535C23.6969 12.8213 27.7629 9 32.7786 9C37.7943 9 41.8603 12.8213 41.8603 17.535ZM30.4484 27.5466C24.6389 27.5466 19.3689 30.9432 17.364 36.4652C16.8368 37.9173 16.3885 39.1885 16.1121 39.9794C15.773 40.9495 16.227 42.0134 17.1535 42.4456L17.9794 42.831C27.4793 47.2632 38.4824 47.1178 47.8618 42.4361C48.7479 41.9938 49.1714 40.9651 48.8535 40.0271L48.0754 37.7315C46.0118 31.6431 40.2979 27.5466 33.8692 27.5466H33.0013H30.4484ZM19.2439 37.1478C20.9397 32.4771 25.4141 29.5466 30.4484 29.5466H33.0013H33.8692C39.4407 29.5466 44.3928 33.0969 46.1812 38.3735L46.9541 40.6538C38.1237 45.056 27.7672 45.1905 18.825 41.0185L18.0018 40.6344C18.2765 39.8484 18.7212 38.5873 19.2439 37.1478ZM61 25H56V29.8H61V25ZM56 15H61V19.8H56V15ZM61 6H56V10.8H61V6ZM56 34.5996H61V39.3996H56V34.5996ZM61 44.2002H56V49.0002H61V44.2002Z`,
      fill: ``,
    }),
  });
}
function Ta(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `61px`,
    height: `66px`,
    viewBox: `0 0 61 66`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M58 2H3C2.44772 2 2 2.44772 2 3V49.9671L14.44 40.7192L15.0898 40.2361L15.6975 40.7713L21.5338 45.911L40.422 28.2692L41.1163 27.6207L41.7995 28.2809L59 44.9038V3C59 2.44772 58.5523 2 58 2ZM2 63V52.4592L14.9834 42.8074L20.8927 48.0113L27.4097 53.7505L28.7315 52.2495L23.0419 47.2391L41.0928 30.3793L59 47.6851V63C59 63.5523 58.5523 64 58 64H3C2.44772 64 2 63.5523 2 63ZM3 0C1.34315 0 0 1.34315 0 3V63C0 64.6569 1.34315 66 3 66H58C59.6569 66 61 64.6569 61 63V3C61 1.34315 59.6569 0 58 0H3ZM22.7185 16.2664C22.7185 18.5968 20.8293 20.486 18.4989 20.486C16.1685 20.486 14.2793 18.5968 14.2793 16.2664C14.2793 13.936 16.1685 12.0468 18.4989 12.0468C20.8293 12.0468 22.7185 13.936 22.7185 16.2664ZM24.7185 16.2664C24.7185 19.7014 21.9339 22.486 18.4989 22.486C15.0639 22.486 12.2793 19.7014 12.2793 16.2664C12.2793 12.8314 15.0639 10.0468 18.4989 10.0468C21.9339 10.0468 24.7185 12.8314 24.7185 16.2664Z`,
      fill: ``,
    }),
  });
}
function Ea(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `33`,
    height: `32`,
    viewBox: `0 0 33 32`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`defs`, {
        children: (0, W.jsxs)(`filter`, {
          id: `SoftGlow`,
          height: `300%`,
          width: `300%`,
          x: `-75%`,
          y: `-75%`,
          children: [
            (0, W.jsx)(`feMorphology`, {
              operator: `dilate`,
              radius: `2`,
              in: `SourceAlpha`,
              result: `thicken`,
            }),
            (0, W.jsx)(`feGaussianBlur`, {
              in: `thicken`,
              stdDeviation: `5`,
              result: `blurred`,
            }),
            (0, W.jsx)(`feFlood`, {
              floodColor: `rgba(55, 75, 148, .7)`,
              result: `glowColor`,
            }),
            (0, W.jsx)(`feComposite`, {
              in: `glowColor`,
              in2: `blurred`,
              operator: `in`,
              result: `SoftGlow_colored`,
            }),
            (0, W.jsxs)(`feMerge`, {
              children: [
                (0, W.jsx)(`feMergeNode`, { in: `SoftGlow_colored` }),
                (0, W.jsx)(`feMergeNode`, { in: `SourceGraphic` }),
              ],
            }),
          ],
        }),
      }),
      (0, W.jsx)(`path`, {
        fill: `none`,
        strokeWidth: `.6px`,
        d: `M31.9861 26.8551C32.2029 26.8551 32.3783 27.0254 32.3783 27.2355V29.2195C32.3783 29.4295 32.2029 29.5998 31.9861 29.5998H1.39223C1.17543 29.5998 1 29.4295 1 29.2195V27.2355C1 27.0254 1.17543 26.8551 1.39223 26.8551H3.20016V1.83469C3.20016 1.62465 3.37559 1.45435 3.59239 1.45435H10.1412C10.358 1.45435 10.5334 1.62465 10.5334 1.83469V5.05554H14.5097V1.83469C14.5097 1.62465 14.6851 1.45435 14.9019 1.45435H19.6631C19.8798 1.45435 20.0553 1.62465 20.0553 1.83469V4.18744L25.4729 3.22867C25.576 3.21139 25.6813 3.23257 25.7663 3.28995C25.8521 3.34734 25.9108 3.43537 25.9291 3.53454L30.1782 26.1126C30.2172 26.3193 30.0759 26.5175 29.8629 26.5552L28.1683 26.8551H31.9861ZM23.5066 22.6202L24.2874 26.7688L29.3362 25.8751L28.5555 21.7266L23.5066 22.6202ZM23.3657 21.8718L28.4147 20.9782L28.0604 19.0957L23.0114 19.989L23.3657 21.8718ZM27.9195 18.3472L25.2278 4.04525L20.1786 4.93891L22.8705 19.2406L27.9195 18.3472ZM20.0553 26.8551H23.5062L20.0553 8.51936V26.8551ZM19.2708 2.21503H15.2941V5.43589V26.8551H19.2708V2.21503ZM14.5097 26.8551V5.81623H10.5334V26.8551H14.5097ZM9.74893 10.38H3.98462V18.6904H9.74893V10.38ZM3.98462 9.6193H9.74893V7.41988H3.98462V9.6193ZM9.74893 19.451H3.98462V21.6503H9.74893V19.451ZM9.74893 5.43589V2.21503H3.98462V6.65919H9.74893V5.43589ZM9.74893 22.411H3.98462V26.8551H9.74893V22.411ZM1.78446 28.8391H31.5939V27.6158H19.6631H14.9019H10.1412H3.59239H1.78446V28.8391ZM13.6023 22.1066H11.4409C11.2241 22.1066 11.0486 21.9363 11.0486 21.7263C11.0486 21.5162 11.2241 21.3459 11.4409 21.3459H13.6023C13.8191 21.3459 13.9946 21.5162 13.9946 21.7263C13.9946 21.9363 13.8191 22.1066 13.6023 22.1066ZM11.4409 19.4512H13.6023C13.8191 19.4512 13.9946 19.2809 13.9946 19.0709C13.9946 18.8608 13.8191 18.6905 13.6023 18.6905H11.4409C11.2241 18.6905 11.0486 18.8608 11.0486 19.0709C11.0486 19.2809 11.2241 19.4512 11.4409 19.4512ZM18.3634 22.1066H16.2016C15.9848 22.1066 15.8093 21.9363 15.8093 21.7263C15.8093 21.5162 15.9848 21.3459 16.2016 21.3459H18.3634C18.5802 21.3459 18.7556 21.5162 18.7556 21.7263C18.7556 21.9363 18.5802 22.1066 18.3634 22.1066ZM16.2016 19.4512H18.3634C18.5802 19.4512 18.7556 19.2809 18.7556 19.0709C18.7556 18.8608 18.5802 18.6905 18.3634 18.6905H16.2016C15.9848 18.6905 15.8093 18.8608 15.8093 19.0709C15.8093 19.2809 15.9848 19.4512 16.2016 19.4512ZM4.80876 14.5352C4.80876 12.8573 5.71273 11.543 6.86643 11.543C8.02052 11.543 8.92449 12.8573 8.92449 14.5352C8.92449 16.2129 8.02052 17.5273 6.86643 17.5273C5.71273 17.5273 4.80876 16.2129 4.80876 14.5352ZM5.59322 14.5352C5.59322 15.7448 6.1762 16.7666 6.86643 16.7666C7.55666 16.7666 8.14003 15.7448 8.14003 14.5352C8.14003 13.3256 7.55666 12.3037 6.86643 12.3037C6.1762 12.3037 5.59322 13.3256 5.59322 14.5352Z`,
      }),
    ],
  });
}
function Da(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    width: `23`,
    height: `23`,
    viewBox: `0 0 23 23`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M21.6537 6.60785H6.45296V21.836H21.6537V6.60785ZM5.66537 5.82026V22.6236H22.4413V5.82026H5.66537Z`,
        fill: `currentColor`,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M3.8655 3.81134H19.0663V4.45177H19.8538V3.81134V3.02375H19.0663H3.8655H3.07791V3.81134V19.0395V19.8271H3.8655H4.50591V19.0395H3.8655V3.81134Z`,
        fill: `currentColor`,
      }),
      (0, W.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M1.27802 1.01483H16.4788V1.65525H17.2664V1.01483V0.227242H16.4788H1.27802H0.490433V1.01483V16.243V17.0305H1.27802H1.91844V16.243H1.27802V1.01483Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function Oa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: S(t, `SVGIcon_Button`),
    width: `64`,
    height: `62`,
    viewBox: `0 0 64 62`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M5.68889 0H58.3111C61.44 0 64 2.56 64 5.68889V18.8444H0V5.68889C0 2.56 2.56 0 5.68889 0ZM17.2302 12.7289C17.8183 12.7289 18.2969 12.2503 18.2969 11.6622V6.82667C18.2969 6.23858 17.8183 5.76 17.2302 5.76H7.98578C7.39769 5.76 6.91911 6.23858 6.91911 6.82667V11.6622C6.91911 12.2503 7.39769 12.7289 7.98578 12.7289H17.2302ZM36.6222 12.7289C37.2103 12.7289 37.6889 12.2503 37.6889 11.6622V6.82667C37.6889 6.23858 37.2103 5.76 36.6222 5.76H27.3778C26.7897 5.76 26.3111 6.23858 26.3111 6.82667V11.6622C26.3111 12.2503 26.7897 12.7289 27.3778 12.7289H36.6222ZM56.0142 12.7289C56.603 12.7289 57.0809 12.2503 57.0809 11.6622V6.82667C57.0809 6.23858 56.603 5.76 56.0142 5.76H46.7698C46.1824 5.76 45.7031 6.23858 45.7031 6.82667V11.6622C45.7031 12.2503 46.1824 12.7289 46.7698 12.7289H56.0142ZM5.68889 61.8667C2.56 61.8667 0 59.3067 0 56.1778V22.4H64V56.1778C64 59.3067 61.44 61.8667 58.3111 61.8667H5.68889ZM26.5202 29.9164C24.7673 28.9422 23.3323 29.7856 23.3323 31.7916V48.5639C23.3323 50.5714 24.7666 51.4133 26.5202 50.4391L41.1669 42.3033C43.2697 41.1342 43.2697 39.222 41.1669 38.053L26.5202 29.9164Z`,
      fill: ``,
    }),
  });
}
function ka(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: t,
    width: `22`,
    height: `22`,
    viewBox: `0 0 22 22`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...n,
    children: [
      (0, W.jsx)(`path`, { d: `M21 1L1 21`, strokeWidth: `2` }),
      (0, W.jsx)(`path`, { d: `M0.999999 1L20 21`, strokeWidth: `2` }),
    ],
  });
}
function Aa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: t,
    width: `59`,
    height: `59`,
    viewBox: `0 0 59 59`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`rect`, {
        x: `1.5`,
        y: `1.5`,
        width: `56`,
        height: `56`,
        rx: `4`,
        strokeWidth: `1`,
        fillOpacity: `0.0`,
      }),
      (0, W.jsx)(`path`, {
        d: `M29.14 15.868C30.748 15.868 32.128 16.144 33.28 16.696C34.456 17.224 35.356 17.968 35.98 18.928C36.604 19.864 36.916 20.932 36.916 22.132C36.916 22.948 36.772 23.68 36.484 24.328C36.196 24.952 35.848 25.492 35.44 25.948C35.032 26.38 34.468 26.932 33.748 27.604C32.956 28.3 32.308 28.924 31.804 29.476C31.3 30.028 30.868 30.724 30.508 31.564C30.172 32.38 30.004 33.34 30.004 34.444H27.088C27.088 33.004 27.268 31.78 27.628 30.772C28.012 29.764 28.468 28.96 28.996 28.36C29.548 27.736 30.232 27.076 31.048 26.38C31.888 25.636 32.5 24.988 32.884 24.436C33.292 23.884 33.496 23.212 33.496 22.42C33.496 21.268 33.064 20.356 32.2 19.684C31.336 19.012 30.16 18.676 28.672 18.676C26.608 18.676 24.736 19.336 23.056 20.656L21.76 18.244C22.696 17.524 23.8 16.948 25.072 16.516C26.368 16.084 27.724 15.868 29.14 15.868ZM28.564 37.288C29.26 37.288 29.812 37.504 30.22 37.936C30.628 38.344 30.832 38.908 30.832 39.628C30.832 40.348 30.628 40.912 30.22 41.32C29.812 41.728 29.26 41.932 28.564 41.932C27.892 41.932 27.352 41.728 26.944 41.32C26.536 40.912 26.332 40.348 26.332 39.628C26.332 38.908 26.536 38.344 26.944 37.936C27.352 37.504 27.892 37.288 28.564 37.288Z`,
        fill: ``,
      }),
    ],
  });
}
function ja(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: t,
    width: `49`,
    height: `53`,
    viewBox: `0 0 49 53`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      d: `M48.3765 33.45C47.1427 38.7688 44.1478 43.5146 39.8778 46.9174C35.6078 50.3201 30.3132 52.1801 24.8531 52.1956C23.0011 52.1943 21.1552 51.9821 19.3511 51.5633C14.4369 50.4243 10.0013 47.7787 6.66379 43.9961C3.32632 40.2135 1.25375 35.4829 0.735641 30.4651C0.708708 30.2012 0.787709 29.9374 0.955263 29.7318C1.12282 29.5261 1.3652 29.3955 1.62909 29.3685C1.89298 29.3416 2.15676 29.4206 2.36241 29.5882C2.56805 29.7557 2.69871 29.9981 2.72564 30.262C3.1115 34.01 4.44505 37.5981 6.60068 40.6883C8.75631 43.7786 11.6631 46.2693 15.0472 47.9258C18.4313 49.5824 22.1814 50.3503 25.9443 50.1571C29.7071 49.964 33.3589 48.8163 36.5556 46.822C39.0282 45.2791 41.1726 43.2644 42.8665 40.8927C44.5604 38.5211 45.7706 35.8391 46.428 32.9997C47.0854 30.1604 47.1771 27.2194 46.6978 24.3447C46.2186 21.4699 45.1779 18.7177 43.635 16.2451C42.0921 13.7726 40.0774 11.6282 37.7057 9.93425C35.3341 8.24035 32.6521 7.03016 29.8127 6.37279C24.0785 5.04515 18.0517 6.04982 13.0581 9.16578L8.53564 11.9879L17.0203 12.8514C17.2749 12.8779 17.5096 13.0011 17.6761 13.1955C17.8426 13.3899 17.9282 13.6407 17.9153 13.8964C17.9024 14.152 17.792 14.3929 17.6068 14.5696C17.4216 14.7463 17.1757 14.8452 16.9197 14.846C16.8855 14.8461 16.8512 14.8443 16.8171 14.8406L5.42564 13.6814C5.40474 13.6793 5.38834 13.6669 5.36784 13.6635C5.32663 13.6572 5.28587 13.6482 5.24584 13.6366C5.22414 13.6302 5.20214 13.6328 5.18054 13.6248C5.15644 13.6159 5.14054 13.5965 5.11764 13.586C5.03876 13.5541 4.96583 13.5091 4.90194 13.4529C4.86699 13.4246 4.83401 13.394 4.80324 13.3612C4.77384 13.3299 4.74658 13.2967 4.72164 13.2618C4.70914 13.2442 4.69014 13.2346 4.67864 13.2161C4.66714 13.1976 4.66684 13.1761 4.65664 13.1575C4.63643 13.12 4.6187 13.0812 4.60354 13.0414C4.57364 12.9592 4.55279 12.8741 4.54134 12.7874C4.53787 12.7449 4.5372 12.7022 4.53934 12.6597C4.53994 12.6343 4.52934 12.6114 4.53214 12.5857C4.53434 12.5636 4.54714 12.5457 4.55074 12.5245C4.55755 12.4833 4.56704 12.4426 4.57914 12.4026C4.58524 12.382 4.58124 12.3611 4.58914 12.3406L8.55334 1.59938C8.64516 1.35049 8.83209 1.14827 9.07301 1.0372C9.1923 0.982204 9.32125 0.951243 9.45251 0.946084C9.58377 0.940926 9.71475 0.96167 9.83799 1.00713C9.96123 1.0526 10.0743 1.12189 10.1708 1.21105C10.2672 1.30022 10.3452 1.40751 10.4002 1.5268C10.4552 1.64609 10.4861 1.77505 10.4913 1.9063C10.4964 2.03756 10.4757 2.16854 10.4302 2.29178L7.47744 10.2918L11.9995 7.46998C16.0588 4.93676 20.7781 3.66416 25.5607 3.81312C30.3433 3.96208 34.9742 5.52591 38.868 8.30684C42.7618 11.0878 45.7434 14.9609 47.436 19.4364C49.1285 23.912 49.4558 28.7889 48.3765 33.4505V33.45ZM14.7565 39.346L25.4126 28.6897C25.6002 28.5022 25.7056 28.2479 25.7056 27.9827V17.0784C25.7056 16.8132 25.6003 16.5588 25.4127 16.3713C25.2252 16.1837 24.9709 16.0784 24.7056 16.0784C24.4404 16.0784 24.1861 16.1837 23.9985 16.3713C23.811 16.5588 23.7056 16.8132 23.7056 17.0784V27.5684L13.3423 37.9319C13.2475 38.0243 13.1721 38.1346 13.1202 38.2565C13.0684 38.3783 13.0413 38.5092 13.0404 38.6416C13.0396 38.7739 13.0651 38.9052 13.1153 39.0276C13.1656 39.1501 13.2397 39.2614 13.3333 39.355C13.4269 39.4486 13.5382 39.5227 13.6607 39.573C13.7831 39.6233 13.9144 39.6487 14.0468 39.6479C14.1792 39.647 14.3101 39.6199 14.4319 39.5681C14.5537 39.5163 14.664 39.4408 14.7564 39.346H14.7565Z`,
      fill: ``,
    }),
  });
}
function Ma(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: t,
    width: `47`,
    height: `22`,
    viewBox: `0 0 47 22`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      d: `M36.4525 0.983032C34.3364 0.983032 32.2684 1.65634 30.5371 2.90676C30.4409 2.95486 29.9599 3.3396 29.9599 3.38769L23.7078 8.48558L17.5038 3.43579C17.3595 3.3396 16.3976 2.57011 16.1091 2.42583C14.5701 1.51206 12.7426 1.03113 10.915 1.03113C5.33619 1.03113 0.767334 5.59999 0.767334 11.1788C0.767334 16.7576 5.33619 21.3265 10.915 21.3265C13.0311 21.3265 15.0991 20.6532 16.8305 19.4028C16.9267 19.3547 17.4076 18.9699 17.4557 18.9218L23.7078 13.8239L29.9119 18.8737C30.0561 18.9699 31.0661 19.7394 31.3066 19.8837C32.8455 20.7975 34.6731 21.2784 36.5006 21.2784C42.0795 21.2784 46.6483 16.7095 46.6483 11.1307C46.6483 5.55189 42.0795 0.983032 36.4525 0.983032ZM14.4739 15.94C13.4159 16.7095 12.2135 17.1424 10.915 17.1424C7.64467 17.1424 4.95145 14.4491 4.95145 11.1788C4.95145 7.90846 7.64467 5.21524 10.915 5.21524C11.9731 5.21524 13.0311 5.5038 13.9449 6.03282C14.1373 6.12901 14.7144 6.56185 14.8106 6.65804L20.3894 11.1788C20.3894 11.1788 14.522 15.8919 14.4739 15.94ZM36.4525 17.1424C35.3945 17.1424 34.3364 16.8538 33.4227 16.3248C33.2303 16.2286 32.6532 15.7958 32.557 15.6996L26.9782 11.1788L32.8455 6.41757C33.9036 5.64808 35.1059 5.21524 36.4044 5.21524C39.6748 5.21524 42.368 7.90846 42.368 11.1788C42.368 14.4491 39.771 17.1424 36.4525 17.1424Z`,
      fill: ``,
    }),
  });
}
function Na(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: t,
    width: `29`,
    height: `28`,
    viewBox: `0 0 29 28`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      d: `M24.4232 4.36344C22.5002 2.44044 20.0502 1.13086 17.383 0.600287C14.7157 0.0697194 11.9511 0.342 9.43855 1.3827C6.92606 2.42339 4.77858 4.18576 3.2677 6.44695C1.75682 8.70813 0.950394 11.3666 0.950394 14.0861C0.950394 16.8056 1.75682 19.464 3.2677 21.7252C4.77858 23.9864 6.92606 25.7487 9.43855 26.7894C11.9511 27.8301 14.7157 28.1024 17.383 27.5718C20.0502 27.0413 22.5002 25.7317 24.4232 23.8087C25.7042 22.5343 26.7208 21.0193 27.4145 19.3507C28.1082 17.6822 28.4653 15.893 28.4653 14.0861C28.4653 12.2791 28.1082 10.4899 27.4145 8.82138C26.7208 7.15284 25.7042 5.63784 24.4232 4.36344ZM16.5334 21.3914H12.865V12.3164H16.5334V21.3914ZM14.6992 10.7874C14.3015 10.7874 13.9127 10.6695 13.5821 10.4485C13.2514 10.2274 12.9938 9.91333 12.8417 9.54584C12.6896 9.17835 12.65 8.77402 12.7278 8.38399C12.8056 7.99397 12.9973 7.63578 13.2787 7.35475C13.5601 7.07373 13.9186 6.88248 14.3087 6.80523C14.6988 6.72797 15.1031 6.76818 15.4704 6.92075C15.8377 7.07332 16.1514 7.33141 16.372 7.66235C16.5926 7.9933 16.71 8.38223 16.7094 8.77994C16.7094 9.0438 16.6574 9.30507 16.5564 9.54881C16.4553 9.79255 16.3072 10.014 16.1205 10.2004C15.9338 10.3869 15.7122 10.5347 15.4683 10.6354C15.2244 10.7361 14.9631 10.7878 14.6992 10.7874Z`,
      fill: ``,
    }),
  });
}
function Pa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`svg`, {
    className: t,
    width: `41`,
    height: `64`,
    viewBox: `0 0 41 64`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, W.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M30.4126 5.84583C28.4532 5.77501 26.5883 4.98584 25.1733 3.62868C22.883 1.43206 19.2764 1.40456 16.9529 3.566C15.5173 4.90142 13.6406 5.66206 11.6804 5.70299C8.50765 5.76924 5.93799 8.30001 5.82337 11.4714C5.75255 13.4308 4.96338 15.2956 3.60622 16.7107C1.4096 19.001 1.3821 22.6075 3.54354 24.9311C4.87896 26.3667 5.6396 28.2433 5.68053 30.2036C5.74678 33.3763 8.27755 35.946 11.4489 36.0606C13.4083 36.1314 15.2732 36.9206 16.6882 38.2778C18.9785 40.4744 22.5851 40.5019 24.9086 38.3404C26.3442 37.005 28.2209 36.2444 30.1811 36.2035C33.3539 36.1372 35.9235 33.6064 36.0382 30.4351C36.109 28.4757 36.8981 26.6108 38.2553 25.1958C40.4519 22.9055 40.4794 19.2989 38.318 16.9754C36.9826 15.5398 36.2219 13.6631 36.181 11.7029C36.1147 8.53011 33.584 5.96045 30.4126 5.84583ZM37.1808 11.682C37.1035 7.9792 34.1499 4.98025 30.4487 4.84648C28.7347 4.78453 27.1033 4.09418 25.8655 2.90697C23.1926 0.343378 18.9835 0.311283 16.2718 2.83381C15.016 4.00202 13.3743 4.6674 11.6595 4.70321C7.95674 4.78052 4.95779 7.73408 4.82402 11.4352C4.76207 13.1493 4.07172 14.7806 2.88451 16.0185C0.320917 18.6914 0.288821 22.9005 2.81135 25.6122C3.97955 26.868 4.64494 28.5097 4.68075 30.2245C4.75807 33.9272 7.71162 36.9262 11.4128 37.06C13.1268 37.1219 14.7582 37.8123 15.996 38.9995C18.669 41.5631 22.878 41.5952 25.5897 39.0726C26.8455 37.9044 28.4872 37.239 30.202 37.2032C33.9048 37.1259 36.9037 34.1724 37.0375 30.4712C37.0995 28.7572 37.7898 27.1258 38.977 25.888C41.5406 23.215 41.5727 19.006 39.0502 16.2943C37.882 15.0384 37.2166 13.3968 37.1808 11.682ZM31.4863 41.2401C31.4867 41.2404 31.487 41.2407 31.1669 41.6248L31.487 41.2407L31.6669 41.3906V41.6248V62.5728V63.4683L30.9046 62.9985L20.9309 56.8517L10.9573 62.9985L10.1949 63.4683V62.5728V41.6248V41.3555L10.4198 41.2073L10.6949 41.6248C10.4198 41.2073 10.42 41.2071 10.4203 41.2069L10.4209 41.2065L10.4222 41.2057L10.425 41.2039L10.4321 41.1993L10.4518 41.1873C10.4674 41.1779 10.4879 41.1661 10.5133 41.1524C10.5641 41.125 10.6344 41.0902 10.7241 41.0527C10.9034 40.9778 11.1598 40.8927 11.4906 40.8367C12.1557 40.724 13.1039 40.7318 14.3111 41.1525C14.7935 41.3206 15.3635 41.6156 15.9507 41.9446C16.2911 42.1353 16.6562 42.3485 17.0236 42.563L17.024 42.5632L17.0248 42.5637C17.2873 42.717 17.551 42.871 17.8076 43.0179C18.4375 43.3784 19.0498 43.7114 19.6033 43.955C20.1687 44.2038 20.6187 44.3343 20.9375 44.3385C21.205 44.3421 21.6162 44.2205 22.1636 43.9649C22.6946 43.7169 23.2892 43.3749 23.9047 43.0052C24.1025 42.8864 24.3034 42.7642 24.5044 42.642L24.5055 42.6413L24.5067 42.6406L24.5067 42.6405L24.5069 42.6405C24.9206 42.3888 25.3344 42.137 25.7213 41.9151C26.2933 41.587 26.855 41.2951 27.3286 41.1477C28.7347 40.7101 29.7388 40.6983 30.4172 40.8191C30.7557 40.8794 31.0083 40.9719 31.1846 41.0565C31.2726 41.0987 31.3409 41.1387 31.3909 41.1712C31.4159 41.1874 31.4363 41.2018 31.4523 41.2136C31.4603 41.2195 31.4671 41.2248 31.4729 41.2293L31.4808 41.2356L31.4841 41.2383L31.4856 41.2395L31.4863 41.2401ZM11.1949 41.9422V61.6774L20.6686 55.8387L20.9309 55.6771L21.1932 55.8387L30.6669 61.6774V41.9208C30.5682 41.8813 30.4282 41.8368 30.242 41.8037C29.7472 41.7156 28.9065 41.704 27.6258 42.1025C27.2665 42.2144 26.7877 42.4563 26.2189 42.7825C25.8428 42.9982 25.4485 43.2381 25.0417 43.4856L25.0415 43.4858L25.0399 43.4867C24.836 43.6108 24.629 43.7367 24.4195 43.8625C23.8009 44.234 23.1684 44.5994 22.5866 44.871C22.0212 45.135 21.4338 45.3452 20.9243 45.3385C20.3958 45.3315 19.7928 45.1309 19.2005 44.8703C18.5965 44.6045 17.9466 44.2496 17.3108 43.8857C17.0355 43.7281 16.7669 43.5712 16.504 43.4176C16.1468 43.209 15.8002 43.0066 15.4619 42.817C14.8778 42.4897 14.3743 42.2334 13.9821 42.0968C12.9316 41.7307 12.1539 41.7385 11.6576 41.8226C11.4625 41.8557 11.308 41.901 11.1949 41.9422ZM23.7901 8.68637C24.8582 9.71081 26.2659 10.3065 27.7449 10.36C29.879 10.4371 31.582 12.1663 31.6266 14.3013C31.6575 15.781 32.2316 17.1975 33.2397 18.2812C34.6941 19.8447 34.6756 22.2717 33.1975 23.8129C32.173 24.881 31.5774 26.2887 31.5239 27.7677C31.4468 29.9018 29.7176 31.6048 27.5826 31.6494C26.1029 31.6803 24.6863 32.2544 23.6027 33.2625C22.0391 34.7169 19.6122 34.6984 18.071 33.2203C17.0028 32.1958 15.5952 31.6002 14.1162 31.5467C11.9821 31.4696 10.2791 29.7404 10.2345 27.6054C10.2036 26.1257 9.62942 24.7091 8.62139 23.6255C7.16691 22.0619 7.18542 19.635 8.66357 18.0938C9.68801 17.0256 10.2837 15.618 10.3372 14.1389C10.4143 12.0049 12.1435 10.3019 14.2785 10.2573C15.7582 10.2264 17.1747 9.65222 18.2584 8.64419C19.8219 7.18971 22.2489 7.20821 23.7901 8.68637ZM27.781 9.36061C30.4449 9.45689 32.5707 11.6154 32.6264 14.2804C32.6521 15.5146 33.131 16.6962 33.9719 17.6001C35.7874 19.5518 35.7643 22.5812 33.9192 24.5051C33.0647 25.396 32.5678 26.5702 32.5232 27.8038C32.427 30.4677 30.2685 32.5935 27.6034 32.6492C26.3692 32.6749 25.1876 33.1538 24.2838 33.9946C22.332 35.8102 19.3026 35.7871 17.3788 33.942C16.4879 33.0875 15.3137 32.5906 14.08 32.546C11.4161 32.4498 9.29034 30.2913 9.23469 27.6262C9.20892 26.392 8.73001 25.2104 7.88921 24.3066C6.07363 22.3548 6.09673 19.3254 7.94186 17.4016C8.79635 16.5107 9.29322 15.3365 9.33781 14.1028C9.43409 11.4389 11.5926 9.31314 14.2576 9.25749C15.4918 9.23172 16.6734 8.75281 17.5773 7.912C19.529 6.09643 22.5584 6.11953 24.4823 7.96466C25.3732 8.81915 26.5474 9.31602 27.781 9.36061Z`,
      fill: `none`,
    }),
  });
}
function Fa(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: t,
    width: `55`,
    height: `63`,
    viewBox: `0 0 55 63`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, W.jsx)(`path`, {
        d: `M47.7642 5.46737H43.3958V3.44632C43.3958 0.953685 42.3747 0 39.9495 0C37.4568 0 36.5032 1.02105 36.5032 3.44632V5.46737H17.5937V3.44632C17.5937 0.953685 16.5726 0 14.1474 0C11.6547 0 10.7011 1.02105 10.7011 3.44632V5.46737H6.33263C2.82947 5.46737 0 8.29684 0 11.8V56.6674C0 60.1705 2.82947 63 6.33263 63H47.7642C51.2674 63 54.0968 60.1705 54.0968 56.6674V11.8C54.0968 8.29684 51.2674 5.46737 47.7642 5.46737ZM1.62737 50.0758C2.62737 51.5 3.91789 52.2884 5.33263 52.2884H48.7642C50.1116 52.2884 51.1274 51.5 52.4021 50.1432V51.3453C52.4021 53.3663 50.7853 55.9832 48.7642 55.9832H5.33263C3.31158 55.9832 1.62737 53.3663 1.62737 51.3453V50.0758ZM52.4021 45.8884C52.4021 47.9095 50.7853 50.5263 48.7642 50.5263H5.33263C3.31158 50.5263 1.62737 47.9095 1.62737 45.8884V17.7958H52.4021V45.8884ZM38.1305 3.44632C38.1305 2.43579 38.9389 1.69474 39.8821 1.69474C40.8253 1.69474 41.6337 2.50316 41.6337 3.44632V6.62316C41.6337 7.63368 40.8253 8.37474 39.8821 8.37474C38.9389 8.37474 38.1305 7.56632 38.1305 6.62316V3.44632ZM12.3958 3.44632C12.3958 2.43579 13.2042 1.69474 14.1474 1.69474C15.0905 1.69474 15.8989 2.50316 15.8989 3.44632V6.62316C15.8989 7.63368 15.0905 8.37474 14.1474 8.37474C13.2042 8.37474 12.3958 7.56632 12.3958 6.62316V3.44632ZM5.33263 7.16211H10.7684C11.0379 9.38526 11.9242 10.1368 14.2147 10.1368C16.5053 10.1368 17.3916 9.38526 17.6611 7.16211H36.5705C36.84 9.38526 37.7263 10.1368 40.0168 10.1368C42.3074 10.1368 43.1937 9.38526 43.4632 7.16211H48.8989C50.92 7.16211 52.5368 9.77895 52.5368 11.8V16.1011H1.62737V11.8C1.62737 9.77895 3.24421 7.16211 5.33263 7.16211ZM48.7642 61.3053H6.33263C4.31158 61.3053 1.62737 58.6884 1.62737 56.6674V55.4653C2.62737 57.6779 4.91789 57.6779 6.33263 57.6779H48.7642C50.1116 57.6779 51.1274 57.5 52.4021 55.5326V56.7347C52.4021 58.6884 50.7853 61.3053 48.7642 61.3053Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M10.7159 34.7325H10.918C12.0632 34.7325 13.0064 33.7893 13.0064 32.644V32.4419C13.0064 31.2967 12.0632 30.3535 10.918 30.3535H10.7159C9.5706 30.3535 8.62744 31.2967 8.62744 32.4419V32.644C8.62744 33.8567 9.5706 34.7325 10.7159 34.7325Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M19.0694 34.7325H19.2715C20.4167 34.7325 21.3599 33.7893 21.3599 32.644V32.4419C21.3599 31.2967 20.4167 30.3535 19.2715 30.3535H19.0694C17.9241 30.3535 16.981 31.2967 16.981 32.4419V32.644C16.981 33.8567 17.9241 34.7325 19.0694 34.7325Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M27.4234 34.7325H27.6255C28.7708 34.7325 29.7139 33.7893 29.7139 32.644V32.4419C29.7139 31.2967 28.7708 30.3535 27.6255 30.3535H27.4234C26.2781 30.3535 25.335 31.2967 25.335 32.4419V32.644C25.335 33.8567 26.2781 34.7325 27.4234 34.7325Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M10.7159 26.3789H10.918C12.0632 26.3789 13.0064 25.4358 13.0064 24.2905V24.0884C13.0064 22.9432 12.0632 22 10.918 22H10.7159C9.5706 22 8.62744 22.9432 8.62744 24.0884V24.2905C8.62744 25.4358 9.5706 26.3789 10.7159 26.3789Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M19.0694 26.3789H19.2715C20.4167 26.3789 21.3599 25.4358 21.3599 24.2905V24.0884C21.3599 22.9432 20.4167 22 19.2715 22H19.0694C17.9241 22 16.981 22.9432 16.981 24.0884V24.2905C16.981 25.4358 17.9241 26.3789 19.0694 26.3789Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M27.4234 26.3789H27.6255C28.7708 26.3789 29.7139 25.4358 29.7139 24.2905V24.0884C29.7139 22.9432 28.7708 22 27.6255 22H27.4234C26.2781 22 25.335 22.9432 25.335 24.0884V24.2905C25.335 25.4358 26.2781 26.3789 27.4234 26.3789Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M35.7774 34.7325H35.9795C37.1248 34.7325 38.0679 33.7893 38.0679 32.644V32.4419C38.0679 31.2967 37.1248 30.3535 35.9795 30.3535H35.7774C34.6321 30.3535 33.689 31.2967 33.689 32.4419V32.644C33.689 33.8567 34.6321 34.7325 35.7774 34.7325Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M44.1309 34.7325H44.333C45.4783 34.7325 46.4214 33.7893 46.4214 32.644V32.4419C46.4214 31.2967 45.4783 30.3535 44.333 30.3535H44.1309C42.9856 30.3535 42.0425 31.2967 42.0425 32.4419V32.644C42.0425 33.8567 42.9856 34.7325 44.1309 34.7325Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M35.7774 26.3789H35.9795C37.1248 26.3789 38.0679 25.4358 38.0679 24.2905V24.0884C38.0679 22.9432 37.1248 22 35.9795 22H35.7774C34.6321 22 33.689 22.9432 33.689 24.0884V24.2905C33.689 25.4358 34.6321 26.3789 35.7774 26.3789Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M44.1309 26.3789H44.333C45.4783 26.3789 46.4214 25.4358 46.4214 24.2905V24.0884C46.4214 22.9432 45.4783 22 44.333 22H44.1309C42.9856 22 42.0425 22.9432 42.0425 24.0884V24.2905C42.0425 25.4358 42.9856 26.3789 44.1309 26.3789Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M10.7159 43.1534H10.918C12.0632 43.1534 13.0064 42.2102 13.0064 41.0649V40.8628C13.0064 39.7176 12.0632 38.7744 10.918 38.7744H10.7159C9.5706 38.7744 8.62744 39.7176 8.62744 40.8628V41.0649C8.62744 42.2102 9.5706 43.1534 10.7159 43.1534Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M19.0694 43.1534H19.2715C20.4167 43.1534 21.3599 42.2102 21.3599 41.0649V40.8628C21.3599 39.7176 20.4167 38.7744 19.2715 38.7744H19.0694C17.9241 38.7744 16.981 39.7176 16.981 40.8628V41.0649C16.981 42.2102 17.9241 43.1534 19.0694 43.1534Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M27.4234 43.1534H27.6255C28.7708 43.1534 29.7139 42.2102 29.7139 41.0649V40.8628C29.7139 39.7176 28.7708 38.7744 27.6255 38.7744H27.4234C26.2781 38.7744 25.335 39.7176 25.335 40.8628V41.0649C25.335 42.2102 26.2781 43.1534 27.4234 43.1534Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M35.7774 43.1534H35.9795C37.1248 43.1534 38.0679 42.2102 38.0679 41.0649V40.8628C38.0679 39.7176 37.1248 38.7744 35.9795 38.7744H35.7774C34.6321 38.7744 33.689 39.7176 33.689 40.8628V41.0649C33.689 42.2102 34.6321 43.1534 35.7774 43.1534Z`,
        fill: ``,
      }),
      (0, W.jsx)(`path`, {
        d: `M44.1309 43.1534H44.333C45.4783 43.1534 46.4214 42.2102 46.4214 41.0649V40.8628C46.4214 39.7176 45.4783 38.7744 44.333 38.7744H44.1309C42.9856 38.7744 42.0425 39.7176 42.0425 40.8628V41.0649C42.0425 42.2102 42.9856 43.1534 44.1309 43.1534Z`,
        fill: ``,
      }),
    ],
  });
}
function Ia(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: t,
    height: 100,
    width: 100,
    fill: `#fff`,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 69 69`,
    children: [
      (0, W.jsx)(`path`, {
        d: `M57.189 51.828H11.813a1 1 0 00-1 1v4.77a1 1 0 001 1h45.376a1 1 0 001-1v-4.77a1 1 0 00-1-1zm-1 4.77H12.813v-2.77h43.376v2.77z`,
      }),
      (0, W.jsx)(`path`, {
        d: `M63.189 4.402H5.813a1 1 0 00-1 1L4.81 62.598H2.46a1 1 0 100 2h64.08a1 1 0 100-2h-2.35l-.001-57.196a1 1 0 00-1-1zm-56.376 2h55.376v39.426H43.584v-5.854h-7.556l2.448-2.48a.999.999 0 00.288-.702V18.915h2.062a1 1 0 100-2h-3.508v-3.775h1.32a1 1 0 100-2h-3.584v-.917a1 1 0 10-2 0v.917H29.47a1 1 0 100 2h1.32v3.775h-3.508a1 1 0 100 2h2.061v17.875c0 .242.087.474.245.656l2.195 2.527h-6.365v5.854H6.813V6.402zm25.977 6.74h2.528v3.774H32.79v-3.775zm-1.447 5.774h1.711v14.642a1 1 0 102 0V18.916h1.71v17.465l-2.9 2.94-2.52-2.904v-17.5zm10.241 23.058v3.834H27.418v-3.834h14.166zM6.81 62.598v-14.77h55.38v14.77H6.81z`,
      }),
    ],
  });
}
function La(e) {
  return (0, W.jsx)(`svg`, {
    version: `1.1`,
    x: `0px`,
    y: `0px`,
    width: `1400px`,
    height: `1409px`,
    viewBox: `0 1801.5 1400 1409`,
    ...e,
    children: (0, W.jsx)(`path`, {
      fill: `#FFFFFF`,
      d: `M362.353,2310.588c148.235-148.235,387.06-148.235,527.06,0
				c16.471,16.471,32.941,41.177,49.411,57.647L807.059,2500c-41.176-82.353-131.765-131.765-222.353-115.294
				c-41.177,8.235-74.118,24.706-98.823,49.411l-247.059,247.06c-74.118,74.117-74.118,197.646,0,280
				c74.118,74.117,197.647,74.117,280,0l0,0l74.118-74.118c74.117,24.706,148.235,41.177,222.353,32.941l-172.94,172.941
				c-148.235,148.235-387.06,148.235-527.06,0s-148.235-387.059,0-527.059C107.059,2557.647,362.353,2310.588,362.353,2310.588z
					M757.646,1907.059L592.941,2080c74.117-8.235,148.235,8.235,214.117,32.941l74.118-74.118c74.117-74.117,197.646-74.117,280,0
				c82.353,74.118,74.117,197.647,0,280l-255.294,247.06c-74.118,74.117-197.647,74.117-280,0
				c-8.235-16.471-24.706-41.177-32.941-65.883l-131.765,131.765c16.471,24.706,32.94,41.177,49.411,57.647
				c148.235,148.235,387.059,148.235,527.06,0l0,0l247.059-247.06c148.235-148.235,148.235-387.059,0-527.059
				S905.883,1767.059,757.646,1907.059L757.646,1907.059L757.646,1907.059z`,
    }),
  });
}
function Ra(e) {
  let { className: t, ...n } = e;
  return (0, W.jsxs)(`svg`, {
    className: t,
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 39 30`,
    fill: `none`,
    ...e,
    children: [
      (0, W.jsx)(`path`, {
        fill: `#06BFFF`,
        d: `M4 11.1947L8.70813 12.7135C9.35359 12.9033 9.84719 13.4349 10.075 14.0803L11.5937 18.7885L13.1125 14.0803C13.3023 13.4349 13.8339 12.9413 14.4794 12.7135L19.1875 11.1947L14.4794 9.67595C13.8339 9.48611 13.3403 8.95455 13.1125 8.30908L11.5937 3.60095L10.075 8.30908C9.88516 8.95455 9.35359 9.44814 8.70813 9.67595L4 11.1947Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M20 4.89423L22.439 5.67308C22.7799 5.77692 23.0422 6.03654 23.1471 6.37404L23.9339 8.78846L24.7206 6.37404C24.8255 6.03654 25.0878 5.77692 25.4287 5.67308L27.8677 4.89423L25.4287 4.11539C25.0878 4.01154 24.8255 3.75192 24.7206 3.41442L23.9339 1L23.1471 3.41442C23.0422 3.75192 22.7799 4.01154 22.439 4.11539L20 4.89423Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M26 27.9471L27.2326 28.3365C27.39 28.3885 27.5211 28.5183 27.5735 28.674L27.9669 29.8942L28.3603 28.674C28.4128 28.5183 28.5439 28.3885 28.7012 28.3365L29.9339 27.9471L28.7012 27.5577C28.5439 27.5058 28.4128 27.376 28.3603 27.2202L27.9669 26L27.5735 27.2202C27.5211 27.376 27.39 27.5058 27.2326 27.5577L26 27.9471Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M35 1.94711L36.2326 2.33654C36.39 2.38846 36.5211 2.51827 36.5735 2.67404L36.9669 3.89423L37.3603 2.67404C37.4128 2.51827 37.5439 2.38846 37.7012 2.33654L38.9339 1.94711L37.7012 1.55769C37.5439 1.50577 37.4128 1.37596 37.3603 1.22019L36.9669 8.59772e-08L36.5735 1.22019C36.5211 1.37596 36.39 1.50577 36.2326 1.55769L35 1.94711Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M13 21.9471L14.2326 22.3365C14.39 22.3885 14.5211 22.5183 14.5735 22.674L14.9669 23.8942L15.3603 22.674C15.4128 22.5183 15.5439 22.3885 15.7012 22.3365L16.9339 21.9471L15.7012 21.5577C15.5439 21.5058 15.4128 21.376 15.3603 21.2202L14.9669 20L14.5735 21.2202C14.5211 21.376 14.39 21.5058 14.2326 21.5577L13 21.9471Z`,
      }),
      (0, W.jsx)(`path`, {
        fill: `currentColor`,
        d: `M-8.51111e-08 15.8413L1.23261 16.2308C1.38996 16.2827 1.52109 16.4125 1.57354 16.5683L1.96693 17.7885L2.36031 16.5683C2.41276 16.4125 2.54389 16.2827 2.70125 16.2308L3.93386 15.8413L2.70125 15.4519C2.54389 15.4 2.41276 15.2702 2.36031 15.1144L1.96693 13.8942L1.57354 15.1144C1.52109 15.2702 1.38996 15.4 1.23261 15.4519L-8.51111e-08 15.8413Z`,
      }),
    ],
  });
}
var za = `_2F92bYCXkiQ-`;
function Ba(e) {
  let { className: t, ...n } = e;
  return (0, W.jsx)(`div`, { className: S(t, za), ...n });
}
function Va(e) {
  switch (e.community_item_class) {
    case 15:
    case 14:
    case 11:
      return L(e.appid, e.community_item_data.item_image_small);
    case 3:
      return `${M.COMMUNITY_BASE_URL}economy/profilebackground/items/${e.appid}/${e.community_item_data.item_image_large}?size=320x200`;
    default:
      return L(e.appid, e.community_item_data.item_image_large);
  }
}
var Ha = `P-uJugMrRBU-`,
  Ua = `yZEgjRn01E4-`,
  Wa = `RNpLCYVXxkM-`,
  Ga = `zUSOplRwSbY-`,
  Ka = `Z4gOa4Hn72E-`,
  qa = `D8D5fq7YDxI-`,
  Ja = `_9TnLmQSg-ik-`,
  Ya = `_4CmAxBaC3jc-`,
  Xa = `PETkxWNzwKY-`,
  Za = `wxQgMJIOoJI-`,
  Qa = ({ value: e, className: t, ...n }) =>
    (0, W.jsxs)(`div`, { className: S(Za, t), ...n, children: [`-`, e, `%`] });
function $a({ definition: e, theme: t, ...n }) {
  let r = [],
    { icon_url: i, name: a } = y.GetAppInfo(e.appid),
    o = e.internal_description,
    s = H.Get().GetBundleOfferForUser(e);
  return {
    cost: s.point_cost,
    name: o,
    desc: E(`#RewardItemType_Bundle`),
    attributes: r,
    appIcon: i,
    appName: a,
    bundle: s,
    definition: e,
    ...n,
  };
}
var eo = g((e) => (0, W.jsx)(to, { ...$a(e) })),
  to = g((e) => {
    let {
        appName: t,
        appIcon: n,
        bundle: r,
        definition: i,
        cost: a,
        name: o,
        desc: s,
        attributes: c,
        className: l,
        style: u,
        onClick: d,
        ...f
      } = e,
      p = so(i);
    return (0, W.jsxs)(Lt, {
      display: `flex`,
      flexDirection: `column`,
      className: S(qa, l),
      style: { ...u, width: `524px` },
      onActivate: d,
      ...f,
      children: [
        n && (0, W.jsx)(`img`, { title: t, src: n, className: `h6Yv2ERSlls-` }),
        (0, W.jsx)(R, {
          flex: `1`,
          style: {
            width: `484px`,
            height: `200px`,
            margin: `0 30px`,
            position: `relative`,
            alignSelf: `center`,
          },
          children: (0, W.jsx)(io, {
            items: r.items,
            visible: 5,
            width: 464,
            cardSize: 90,
            offer: r,
          }),
        }),
        (0, W.jsx)(no, {
          label: p,
          count: r.items.length,
          cost: a,
          discount: r.discount,
        }),
      ],
    });
  }),
  no = ({ cost: e, discount: t, label: n, count: r }) => {
    let i = `${n} (${r})`;
    return (0, W.jsxs)(R, {
      padding: `small`,
      display: `flex`,
      alignItems: `center`,
      flexDirection: `row`,
      className: Ja,
      title: i,
      children: [
        (0, W.jsx)(`div`, { className: Ya, children: i }),
        e === 0
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(`span`, {
                  className: Ua,
                  children: E(`#Redeem_BundleItemOwned`),
                }),
                (0, W.jsx)(G, { className: Ha }),
              ],
            })
          : (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(Qa, { value: t, className: Xa }),
                (0, W.jsx)(Di, { amount: e }),
              ],
            }),
      ],
    });
  };
function ro(e, t, n) {
  if (t.length <= n) return t;
  let r = t.filter((t) => !e.mapItemOwnership.get(t.defid)).slice(0, n);
  if (r.length < n) {
    let i = t
      .filter((t) => e.mapItemOwnership.get(t.defid))
      .slice(0, n - r.length);
    return r.concat(i);
  }
  return r;
}
var io = g((e) => {
  let { offer: t, items: n, visible: r, width: i, cardSize: a } = e,
    o = ro(t, n, r);
  return (0, W.jsx)(`div`, {
    style: { position: `relative` },
    className: Wa,
    children: o.map((e, n) =>
      (0, W.jsxs)(
        oo,
        {
          style: ao(n, o.length, r, a, i),
          children: [
            t.mapItemOwnership.get(e.defid) &&
              (0, W.jsx)(G, { className: S(`P-uJugMrRBU-`, `Vz33AL0DVvI-`) }),
            (0, W.jsx)(`img`, { src: Va(e), className: Ka }),
          ],
        },
        `${e.defid}_${n}`,
      ),
    ),
  });
});
function ao(e, t, n, r, i) {
  let a = 0.42,
    o = i - (r * (Math.sin(a) + Math.cos(a)) - r),
    s = Math.min(r, o / t),
    c = ((n - t) / 2) * r,
    l = e * s + c,
    u = (t - 1) / 2;
  return {
    position: `absolute`,
    transformOrigin: `center`,
    transform: `translateX(${l}px) translateY(${((e - u) ** 2 * 30) / (u * u)}px) rotate(${((a * 2) / (t - 1)) * e - a}rad)`,
    width: `${r}px`,
    height: `${r}px`,
  };
}
var oo = (e) =>
  (0, W.jsx)(R, {
    padding: `small`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    ...e,
    className: Ga,
  });
function so(e) {
  let t = _(() => y.GetAppInfo(e.appid));
  switch (e.type) {
    case 6:
      return E(`#RewardBundle_AutoGeneratedBundleName`, t.name);
    case 5:
      return e.community_item_data?.item_title ?? ``;
    default:
      return (
        console.error(
          `Cannot derive bundle title for definition ${e.defid} with type ${e.type}`,
        ),
        ``
      );
  }
}
var co = `wJ7tG71dGWI-`,
  lo = `D9Lhl0fINNM-`,
  uo = `w4Ns8kKfPEg-`,
  fo = `-UwRlcE3bd8-`,
  po = `_-1i65Y-zB8I-`,
  mo = `LJkqBse2ao8-`,
  ho = `nuIgWzivalM-`,
  go = `up5bDknAAfk-`,
  _o = `yu4-si75KQE-`,
  vo = `y7wLLLq2IME-`,
  yo = `AWlvgEVBunk-`,
  bo = `K4wVYqct6f8-`,
  xo = `iawjH7Rw-a0-`,
  So = ({ src: e }) =>
    (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(`div`, {
          className: vo,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, W.jsx)(`div`, {
          className: yo,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, W.jsx)(`div`, { className: _o }),
      ],
    }),
  Co = ({ theme: e }) =>
    (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(`div`, { className: S(bo, e) }),
        (0, W.jsx)(`div`, { className: S(xo, e) }),
        (0, W.jsx)(`div`, { className: _o }),
      ],
    }),
  wo = t({
    BlueRedTheme: () => Po,
    BurntOrangeTheme: () => Uo,
    ColorNightmareTheme: () => Jo,
    CosmicTheme: () => Eo,
    DarkModeTheme: () => ko,
    DefaultTheme: () => To,
    FlatGreyTheme: () => Wo,
    GhostTheme: () => qo,
    GoldBurgundyTheme: () => Fo,
    GoldTheme: () => Ho,
    GoldenProfileDebutTheme: () => Lo,
    GoldenWeekProfile2021Theme: () => zo,
    GreenSlimeTheme: () => Ko,
    Lunar2022Theme: () => Zo,
    MidnightTheme: () => Oo,
    MurugiahTheme: () => Yo,
    MutedBlueTheme: () => Vo,
    MutedRedTheme: () => Mo,
    PinkTealTheme: () => jo,
    PurpleTheme: () => Go,
    SteamDeckTheme: () => Qo,
    SteamGreenTheme: () => No,
    SteelTheme: () => Ao,
    Summer2021Theme: () => Bo,
    SummerTheme: () => Do,
    VibrantBlueTheme: () => Io,
    Winter2021Theme: () => Xo,
    WinterProfile2020Theme: () => Ro,
    default: () => $o,
  }),
  To = `_29uIKY6HXVk-`,
  Eo = `qYxOfyXHDsA-`,
  Do = `fZf6-fp5PGw-`,
  Oo = `_0qcWfIeqxHg-`,
  ko = `EGTYGHd0kkw-`,
  Ao = `RHL-SU2yops-`,
  jo = `WT8fRbo2yOY-`,
  Mo = `nCpY1W72MW4-`,
  No = `-fxY9plRjng-`,
  Po = `MqvIQAdSgiA-`,
  Fo = `_0bZPPKROH7E-`,
  Io = `mDUaEVQckdI-`,
  Lo = `n6Dil7HsC4g-`,
  Ro = `sqrA6WBozlQ-`,
  zo = `kU6APp51-8g-`,
  Bo = `_-0Cg7RgIZtw-`,
  Vo = `jSWzo2CPn5k-`,
  Ho = `Wjs2GRZGgn4-`,
  Uo = `C4-FzVpDsKA-`,
  Wo = `VcxeAZeDRVU-`,
  Go = `-sbfakNdtMs-`,
  Ko = `ZVQG3mT-ouk-`,
  qo = `Ar7x0bGD5F4-`,
  Jo = `-T3gxQCuMyk-`,
  Yo = `S80cuaoieJE-`,
  Xo = `NkgHTDHRSZI-`,
  Zo = `cNnWTpLutW8-`,
  Qo = `yxQHh-wmkgM-`,
  $o = {
    DefaultTheme: To,
    CosmicTheme: Eo,
    SummerTheme: Do,
    MidnightTheme: Oo,
    DarkModeTheme: ko,
    SteelTheme: Ao,
    PinkTealTheme: jo,
    MutedRedTheme: Mo,
    SteamGreenTheme: No,
    BlueRedTheme: Po,
    GoldBurgundyTheme: Fo,
    VibrantBlueTheme: Io,
    GoldenProfileDebutTheme: Lo,
    WinterProfile2020Theme: Ro,
    GoldenWeekProfile2021Theme: zo,
    Summer2021Theme: Bo,
    MutedBlueTheme: Vo,
    GoldTheme: Ho,
    BurntOrangeTheme: Uo,
    FlatGreyTheme: Wo,
    PurpleTheme: Go,
    GreenSlimeTheme: Ko,
    GhostTheme: qo,
    ColorNightmareTheme: Jo,
    MurugiahTheme: Yo,
    Winter2021Theme: Xo,
    Lunar2022Theme: Zo,
    SteamDeckTheme: Qo,
  };
function es({ definition: e, theme: t, ...n }) {
  let r = [],
    { icon_url: i, name: a } = y.GetAppInfo(e.appid),
    o = H.Get().BRewardOwnedByUser(e),
    s = e.community_item_data.item_title,
    c = H.Get().GetBundleOfferForUser(e);
  return {
    cost: parseInt(e.point_cost),
    name: s,
    desc: E(`#RewardItemType_ProfileBundle`),
    attributes: r,
    appIcon: i,
    appName: a,
    bundle: c,
    definition: e,
    bOwned: o,
    ...n,
  };
}
var ts = z.createContext(!1);
function ns() {
  return (0, z.useContext)(ts);
}
function rs(e) {
  return (0, W.jsx)(ts.Provider, { value: !0, children: e.children });
}
var is = g((e) => {
    let t = ns(),
      n = es(e);
    return t ? (0, W.jsx)(os, { ...n }) : (0, W.jsx)(as, { ...n });
  }),
  as = g((e) => {
    let {
        appName: t,
        appIcon: n,
        bundle: r,
        definition: i,
        cost: a,
        bOwned: o,
        name: s,
        desc: c,
        attributes: l,
        className: u,
        style: d,
        ...f
      } = e,
      p = i.community_item_data.item_title;
    return (0, W.jsx)(q, {
      name: p,
      cost: a,
      attributes: l,
      appIcon: n,
      iconComponent: Ca,
      desc: c,
      className: u,
      appName: t,
      ...f,
      children: (0, W.jsx)(`img`, {
        src: Va(i),
        style: { width: `100%`, height: `100%` },
      }),
    });
  }),
  os = g((e) => {
    let {
        appName: t,
        appIcon: n,
        bundle: r,
        definition: i,
        cost: a,
        bOwned: o,
        name: s,
        desc: c,
        attributes: l,
        className: u,
        style: d,
        onClick: f,
        ...p
      } = e,
      m = i.community_item_data.item_title,
      h = i.community_item_data.profile_theme_id;
    return (0, W.jsxs)(Lt, {
      display: `flex`,
      flexDirection: `column`,
      className: S(mo, u),
      style: { ...d, width: `524px` },
      onActivate: f,
      ...p,
      children: [
        n && (0, W.jsx)(`img`, { title: t, src: n, className: `CJilvGwH2LM-` }),
        (0, W.jsxs)(R, {
          flex: `1`,
          style: {
            width: `524px`,
            height: `200px`,
            position: `relative`,
            alignSelf: `center`,
          },
          children: [
            h && (0, W.jsx)(Co, { theme: wo[`${h}Theme`] }),
            (0, W.jsx)(ls, { items: r.items, offer: r }),
          ],
        }),
        (0, W.jsx)(ss, { label: m, cost: a, bOwned: o }),
      ],
    });
  }),
  ss = ({ cost: e, label: t, bOwned: n }) =>
    (0, W.jsxs)(R, {
      padding: `small`,
      display: `flex`,
      alignItems: `center`,
      flexDirection: `row`,
      className: ho,
      title: t,
      children: [
        (0, W.jsx)(`div`, { className: go, children: t }),
        n
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(`span`, {
                  className: lo,
                  children: E(`#Redeem_BundleItemOwned`),
                }),
                (0, W.jsx)(G, { className: co }),
              ],
            })
          : (0, W.jsx)(W.Fragment, { children: (0, W.jsx)(Di, { amount: e }) }),
      ],
    });
function cs(e, t) {
  let n = e.filter((e) => e.community_item_class == t).slice(0, 1);
  return n.length == 1 ? n[0] : null;
}
var ls = g((e) => {
    let { offer: t, items: n } = e,
      r = cs(n, 15),
      i = cs(n, 14),
      a = cs(n, 13),
      o = cs(n, 3);
    return (0, W.jsxs)(`div`, {
      style: { position: `relative` },
      className: uo,
      children: [
        r && (0, W.jsx)(us, { item: r, offer: t, className: `_1SUzzzR7SM4-` }),
        i && (0, W.jsx)(us, { item: i, offer: t, className: `lhtSjfOW9G4-` }),
        a && (0, W.jsx)(us, { item: a, offer: t, className: `KhoqTf141WA-` }),
        o && (0, W.jsx)(us, { item: o, offer: t, className: `dnDfbO-Clq0-` }),
      ],
    });
  }),
  us = g((e) => {
    let { offer: t, item: n, className: r, ...i } = e,
      a = n.community_item_class == 14;
    return (0, z.createElement)(
      R,
      {
        padding: `none`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        ...i,
        className: S(r, fo),
        key: n.defid,
      },
      a &&
        (0, W.jsx)(`img`, {
          className: `B-zwS-uXnfQ-`,
          src:
            M.MEDIA_CDN_COMMUNITY_URL +
            `images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg`,
        }),
      (0, W.jsx)(`img`, {
        src: Va(n),
        className: po,
        style: a ? { zIndex: 1 } : void 0,
      }),
    );
  }),
  ds = { colors: { bodygradient: void 0, background: void 0 } };
function K({ definition: e, ...t }) {
  e.community_item_data || console.log(e);
  let n = L(e.appid, e.community_item_data.item_image_large);
  e.community_item_class == 3 &&
    (n =
      M.COMMUNITY_CDN_URL +
      `economy/profilebackground/items/` +
      e.appid +
      `/` +
      e.community_item_data.item_image_large +
      `?size=320x200`);
  let r = [];
  e.community_item_data.animated &&
    r.push((0, W.jsx)(Oa, { className: Ii }, `animated`));
  let { icon_url: i, name: a } = y.GetAppInfo(e.appid),
    o = e.community_item_data.item_title
      ? e.community_item_data.item_title
      : e.community_item_data.item_name;
  return {
    cost: parseInt(e.point_cost),
    name: o,
    children: (0, W.jsx)(`div`, {
      className: Bi,
      style: { backgroundImage: `url(${n})` },
    }),
    attributes: r,
    desc: V(e.community_item_class),
    appIcon: i,
    appName: a,
    ...t,
  };
}
var fs = g((e) => (0, W.jsx)(q, { ...K(e) })),
  ps = g((e) =>
    (0, W.jsx)(Ds, {
      ...K(e),
      iconComponent: Dt,
      children: (t) => {
        let {
            definition: {
              appid: n,
              community_item_data: { item_image_large: r, item_image_small: i },
            },
          } = e,
          a = L(n, t ? i : r);
        return (0, W.jsx)(`img`, { className: Hi, src: a });
      },
    }),
  ),
  ms = g((e) =>
    (0, W.jsx)(q, {
      ...K(e),
      iconComponent: pt,
      children: (0, W.jsx)(`img`, {
        className: Vi,
        src: L(
          e.definition.appid,
          e.definition.community_item_data.item_image_large,
        ),
      }),
    }),
  ),
  hs = g((e) => (0, W.jsx)(q, { ...K(e), iconComponent: Re })),
  gs = g((e) =>
    e.definition.community_item_data.animated
      ? (0, W.jsx)(_s, { ...e })
      : e.definition.community_item_data.tiled
        ? (0, W.jsx)(ys, { ...e })
        : (0, W.jsx)(vs, { ...e }),
  ),
  _s = g((e) =>
    (0, W.jsx)(Es, {
      className: void 0,
      ...K(e),
      iconComponent: Qe,
      styleOverride: na,
      videoProps: {
        className: Ui,
        poster:
          M.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          e.definition.appid +
          `/` +
          e.definition.community_item_data.item_image_large +
          `?size=320x200`,
      },
      children: (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_webm_small
                ? e.definition.community_item_data.item_movie_webm_small
                : e.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_mp4_small
                ? e.definition.community_item_data.item_movie_mp4_small
                : e.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  vs = g((e) =>
    (0, W.jsx)(q, {
      ...K(e),
      iconComponent: Qe,
      styleOverride: na,
      children: (0, W.jsx)(`img`, {
        className: Ui,
        src:
          M.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          e.definition.appid +
          `/` +
          e.definition.community_item_data.item_image_large +
          `?size=320x200`,
      }),
    }),
  ),
  ys = g((e) =>
    (0, W.jsx)(q, {
      ...K(e),
      iconComponent: Qe,
      children: (0, W.jsx)(`img`, {
        className: Hi,
        src:
          M.COMMUNITY_CDN_URL +
          `economy/profilebackground/items/` +
          e.definition.appid +
          `/` +
          e.definition.community_item_data.item_image_large,
      }),
    }),
  ),
  bs = g((e) =>
    (0, W.jsx)(Es, {
      ...K(e),
      iconComponent: Ta,
      videoProps: {
        className: Wi,
        poster: L(
          e.definition.appid,
          e.definition.community_item_data.item_image_large,
        ),
      },
      children: (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_webm_small
                ? e.definition.community_item_data.item_movie_webm_small
                : e.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_mp4_small
                ? e.definition.community_item_data.item_movie_mp4_small
                : e.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  xs = g((e) =>
    (0, W.jsx)(Ds, {
      ...K(e),
      iconComponent: va,
      children: (t) => {
        let {
            definition: {
              appid: n,
              community_item_data: { item_image_large: r, item_image_small: i },
            },
          } = e,
          a = L(n, t ? i : r);
        return (0, W.jsx)(`img`, { className: Ji, src: a });
      },
    }),
  ),
  Ss = g((e) =>
    (0, W.jsx)(Ds, {
      ...K(e),
      iconComponent: wa,
      children: (t) => {
        let {
            definition: {
              appid: n,
              community_item_data: { item_image_large: r, item_image_small: i },
            },
          } = e,
          a = L(n, t ? i : r);
        return (0, W.jsx)(`img`, { className: Gi, src: a });
      },
    }),
  ),
  Cs = g((e) => (0, W.jsx)(q, { ...K(e), iconComponent: xa, desc: V(8) })),
  ws = g((e) =>
    (0, W.jsx)(q, {
      ...K(e),
      iconComponent: ya,
      children: (0, W.jsx)(`img`, {
        className: Yi,
        src: L(
          e.definition.appid,
          e.definition.community_item_data.item_image_small,
        ),
      }),
    }),
  ),
  Ts = g((e) =>
    (0, W.jsx)(Es, {
      ...K(e),
      iconComponent: ba,
      videoProps: {
        className: qi,
        poster: L(
          e.definition.appid,
          e.definition.community_item_data.item_image_large,
        ),
      },
      children: (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_webm_small
                ? e.definition.community_item_data.item_movie_webm_small
                : e.definition.community_item_data.item_movie_webm,
            ),
            type: `video/webm`,
          }),
          (0, W.jsx)(`source`, {
            src: L(
              e.definition.appid,
              e.definition.community_item_data.item_movie_mp4_small
                ? e.definition.community_item_data.item_movie_mp4_small
                : e.definition.community_item_data.item_movie_mp4,
            ),
            type: `video/mp4`,
          }),
        ],
      }),
    }),
  ),
  Es = class extends z.Component {
    m_ref = z.createRef();
    state = { bVisible: !1 };
    render() {
      let { children: e, videoProps: t, ...n } = this.props;
      return (0, W.jsxs)(q, {
        ...n,
        children: [
          (0, W.jsx)(at, {
            trigger: `repeated`,
            onVisibilityChange: (e) => this.HandleVisibilityChange(e),
            className: sa,
          }),
          (0, W.jsx)(`video`, {
            playsInline: !0,
            loop: !0,
            muted: !0,
            autoPlay: !0,
            controls: !1,
            ...t,
            ref: this.m_ref,
            children: this.state.bVisible && e,
          }),
        ],
      });
    }
    m_playPromise = null;
    m_bShouldContinuePlaying = !0;
    HandleVisibilityChange(e) {
      (this.m_ref.current &&
        (this.m_playPromise
          ? (this.m_bShouldContinuePlaying = e)
          : e
            ? ((this.m_playPromise = this.m_ref.current.play()),
              this.m_playPromise &&
                (this.m_playPromise.then(() => {
                  (!this.m_bShouldContinuePlaying &&
                    this.m_ref.current &&
                    this.m_ref.current.pause(),
                    (this.m_playPromise = null));
                }),
                (this.m_bShouldContinuePlaying = !0)))
            : this.m_ref.current.pause()),
        this.setState({ bVisible: e }));
    }
  },
  Ds = class extends z.Component {
    state = { bHover: !1 };
    render() {
      let { children: e, ...t } = this.props;
      return (0, W.jsx)(q, {
        ...t,
        onMouseEnter: () => this.setState({ bHover: !0 }),
        onMouseLeave: () => this.setState({ bHover: !1 }),
        children: e(this.state.bHover || !0),
      });
    }
  },
  q = (e) => {
    let {
        appName: t,
        appIcon: n,
        attributes: r,
        children: i,
        cost: a,
        iconComponent: o,
        name: s,
        desc: c,
        className: l,
        style: u,
        theme: d,
        styleOverride: f,
        strPriceOverride: p,
        itemLevel: m,
        purchaseable: h = !0,
        ...ee
      } = e,
      te = o,
      ne = { background: (d || ds).colors.bodygradient },
      re = { background: (d || ds).colors.background },
      g = { fill: `` };
    return (0, W.jsx)(`div`, {
      className: Pi,
      children: (0, W.jsxs)(fa, {
        ...ee,
        className: S(l, Fi, f),
        style: re,
        children: [
          (0, W.jsxs)(pa, {
            className: Oi,
            style: ne,
            children: [
              (0, W.jsx)(`div`, { className: Li, children: r }),
              (0, W.jsx)(Ls, { src: n, title: t }),
              !h &&
                (0, W.jsxs)(`div`, {
                  className: `DUSmJBdqTGI-`,
                  children: [
                    (0, W.jsx)(ha, { className: `xrjlAEljqvo-` }),
                    (0, W.jsx)(G, { className: `l1z37S64KIQ-` }),
                  ],
                }),
              i,
            ],
          }),
          (0, W.jsxs)(ma, {
            className: ki,
            children: [
              (0, W.jsx)(`div`, {
                style: { flex: 1, paddingBottom: `10px` },
                children: (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`div`, { className: ea, children: s }),
                    (0, W.jsxs)(`div`, {
                      className: Xi,
                      children: [
                        te &&
                          (0, W.jsx)(te, {
                            className: `sr7VwLZ2FLM-`,
                            style: g,
                          }),
                        (0, W.jsxs)(`div`, {
                          className: Zi,
                          children: [c, ` `],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              h &&
                (0, W.jsxs)(`div`, {
                  className: `EOr2spguwlI-`,
                  children: [
                    (0, W.jsx)(ha, { className: `xrjlAEljqvo-` }),
                    (0, W.jsx)(G, { className: `l1z37S64KIQ-` }),
                    (0, W.jsx)(`div`, {
                      className: `kDSqz49I5Hw-`,
                      children: p ?? (0, W.jsx)(Di, { amount: a }),
                    }),
                  ],
                }),
            ],
          }),
          (0, W.jsx)(`div`, { className: ta }),
        ],
      }),
    });
  },
  Os = (e) => {
    let {
        appName: t,
        appIcon: n,
        attributes: r,
        children: i,
        cost: a,
        iconComponent: o,
        name: s,
        desc: c,
        className: l,
        style: u,
        theme: d,
        styleOverride: f,
        strPriceOverride: p,
        itemLevel: m,
        ...h
      } = e,
      ee = o,
      te = { background: (d || ds).colors.bodygradient },
      ne = { background: (d || ds).colors.background },
      re = { fill: `` };
    return (0, W.jsx)(`div`, {
      className: ra,
      children: (0, W.jsxs)(fa, {
        ...h,
        className: S(l, Fi, f),
        style: ne,
        children: [
          (0, W.jsxs)(pa, {
            className: Oi,
            style: te,
            children: [
              (0, W.jsx)(`div`, { className: Li, children: r }),
              (0, W.jsx)(Ls, { src: n, title: t }),
              i,
            ],
          }),
          (0, W.jsxs)(ma, {
            className: ki,
            children: [
              (0, W.jsx)(`div`, {
                style: { flex: 1 },
                children: (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`div`, { className: ea, children: s }),
                    (0, W.jsxs)(`div`, {
                      className: Xi,
                      children: [
                        ee &&
                          (0, W.jsx)(ee, {
                            className: `sr7VwLZ2FLM-`,
                            style: re,
                          }),
                        (0, W.jsxs)(`div`, {
                          className: Zi,
                          children: [c, ` `],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, W.jsxs)(`div`, {
                className: Qi,
                children: [
                  (0, W.jsx)(ha, { className: Mi }),
                  (0, W.jsx)(G, { className: Ai }),
                  (0, W.jsx)(`div`, {
                    className: Ni,
                    children: p ?? (0, W.jsx)(Di, { amount: a }),
                  }),
                ],
              }),
            ],
          }),
          (0, W.jsx)(`div`, { className: ta }),
        ],
      }),
    });
  },
  ks = {
    11: ps,
    4: ms,
    12: hs,
    3: gs,
    13: bs,
    8: Cs,
    14: xs,
    15: Ss,
    16: ws,
    17: Ts,
  },
  As = g((e) => {
    let { className: t, ...n } = e,
      r = H.Get().BRewardOwnedByUser(e.definition),
      i = S(t, r && `U3HcGFQg9ak-`);
    if (e.definition.type == 5 || e.definition.type == 6)
      return (0, W.jsx)(nt, {
        fallback: null,
        children: (0, W.jsx)(eo, { ...n, className: i, onClick: e.onClick }),
      });
    if (
      e.definition.community_item_class == 8 &&
      e.definition.bundle_defids?.length != 0
    )
      return (0, W.jsx)(nt, {
        fallback: null,
        children: (0, W.jsx)(is, { ...n, className: i, onClick: e.onClick }),
      });
    let a = ks[e.definition.community_item_class];
    return a
      ? (0, W.jsx)(nt, {
          fallback: null,
          children: (0, W.jsx)(a, { ...n, className: i, onClick: e.onClick }),
        })
      : (0, W.jsx)(nt, {
          fallback: null,
          children: (0, W.jsx)(fs, { ...n, className: i, onClick: e.onClick }),
        });
  }),
  js = Object.assign({
    "../../../../images/rewards/profileshowcases/icon_showcase_1.svg": ri,
    "../../../../images/rewards/profileshowcases/icon_showcase_10.svg": ii,
    "../../../../images/rewards/profileshowcases/icon_showcase_11.svg": ai,
    "../../../../images/rewards/profileshowcases/icon_showcase_12.svg": oi,
    "../../../../images/rewards/profileshowcases/icon_showcase_13.svg": si,
    "../../../../images/rewards/profileshowcases/icon_showcase_14.svg": ci,
    "../../../../images/rewards/profileshowcases/icon_showcase_15.svg": li,
    "../../../../images/rewards/profileshowcases/icon_showcase_16.svg": ui,
    "../../../../images/rewards/profileshowcases/icon_showcase_17.svg": di,
    "../../../../images/rewards/profileshowcases/icon_showcase_2.svg": fi,
    "../../../../images/rewards/profileshowcases/icon_showcase_21.svg": pi,
    "../../../../images/rewards/profileshowcases/icon_showcase_22.svg": mi,
    "../../../../images/rewards/profileshowcases/icon_showcase_23.svg": hi,
    "../../../../images/rewards/profileshowcases/icon_showcase_24.svg": gi,
    "../../../../images/rewards/profileshowcases/icon_showcase_3.svg": _i,
    "../../../../images/rewards/profileshowcases/icon_showcase_4.svg": vi,
    "../../../../images/rewards/profileshowcases/icon_showcase_5.svg": yi,
    "../../../../images/rewards/profileshowcases/icon_showcase_6.svg": bi,
    "../../../../images/rewards/profileshowcases/icon_showcase_7.svg": xi,
    "../../../../images/rewards/profileshowcases/icon_showcase_8.svg": Si,
    "../../../../images/rewards/profileshowcases/icon_showcase_9.svg": Ci,
  });
function Ms(e) {
  let t =
    js[`../../../../images/rewards/profileshowcases/icon_showcase_${e}.svg`];
  if (t === void 0) throw Error(`Cannot find profile showcase icon ${e}`);
  return t;
}
function Ns({ customization_type: e, current_level: t, point_cost: n, ...r }) {
  let i = Ms(e),
    a = E(`#ProfileShowcases_Type_` + e),
    o = [],
    s = t >= H.Get().GetMaxProfileShowcaseUpgradeLevel(),
    c = S(s && `U3HcGFQg9ak-`, !s && t > 1 && `RKTJK4A4VwA-`);
  return {
    cost: n,
    name: a,
    itemLevel: t,
    children: (0, W.jsx)(`img`, { className: Ki, src: i }),
    desc: E(`#ProfileShowcases_Upgrade`),
    attributes: o,
    className: c,
    iconComponent: Ia,
    ...r,
  };
}
var Ps = (e) => (0, W.jsx)(Os, { ...Ns(e) });
function Fs({
  customization_type: e,
  point_cost: t,
  purchased_count: n,
  current_level: r,
  ...i
}) {
  let a = Ms(e),
    o = E(`#ProfileShowcases_Type_` + e),
    s = [],
    c = n >= H.Get().GetMaxProfileShowcaseSlots(),
    l = S(c && `U3HcGFQg9ak-`);
  return {
    cost: t,
    name: o,
    children: (0, W.jsx)(`img`, { className: Ki, src: a }),
    desc: E(`#ProfileShowcases_AdditionalSlot`),
    attributes: s,
    className: l,
    iconComponent: Ia,
    ...i,
  };
}
var Is = (e) => (0, W.jsx)(Os, { ...Fs(e) }),
  Ls = class extends z.Component {
    state = { bLoadComplete: !1 };
    render() {
      let { src: e, title: t } = this.props,
        { bLoadComplete: n } = this.state;
      return e
        ? (0, W.jsx)(`div`, {
            className: Ri,
            children: (0, W.jsx)(`img`, {
              className: zi,
              src: e,
              onLoad: () => this.setState({ bLoadComplete: !0 }),
              style: n ? void 0 : { display: `none` },
              title: t,
              alt: t,
            }),
          })
        : null;
    }
  };
function Rs() {
  return (0, W.jsx)(Ba, {
    className: Pi,
    children: (0, W.jsxs)(fa, {
      className: S(Fi, ia),
      children: [
        (0, W.jsx)(pa, { className: Oi }),
        (0, W.jsx)(ma, {
          className: ki,
          children: (0, W.jsx)(`div`, {
            style: { flex: 1 },
            children: (0, W.jsxs)(`div`, {
              children: [
                (0, W.jsx)(`div`, { className: aa }),
                (0, W.jsx)(`div`, { className: oa }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
var zs = g(function (e) {
  let {
      getItems: t,
      renderItem: n,
      children: r,
      style: i,
      cItemsPerPage: a,
      renderItemSkeleton: o,
      ...s
    } = e,
    c = a || 20,
    [l, u] = (0, z.useState)(c),
    { rewards: d, bLoadingMore: f } = t(0, l),
    p = d.map(n);
  return (0, W.jsx)(W.Fragment, {
    children: (0, W.jsxs)(Gt, {
      verticalSpacing: `large`,
      "flow-children": `grid`,
      ...s,
      children: [
        p,
        f && o && Bs(o, c),
        (0, W.jsx)(at, {
          trigger: `repeated`,
          onVisibilityChange: (e) => e && u(l + c),
        }),
      ],
    }),
  });
});
function Bs(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push((0, W.jsx)(`div`, { children: e() }, r));
  return n;
}
var Vs = `E4DS2G3IwKU-`,
  Hs = `NdKx7mksqq8-`,
  Us = `_2-H2jxauhXg-`,
  Ws = `Ar-cMtP5hAw-`,
  Gs = (e) => {
    let {
        title: t,
        description: n,
        actions: r,
        children: i,
        className: a,
        itemClassName: o,
        imgSrc: s,
        fullbleed: c,
        style: l,
        ...u
      } = e,
      d = `url(${s})`,
      f = Kt() === `mobile`;
    return (0, W.jsxs)(R, {
      padding: [`small`, `large`],
      flexGrow: 1,
      display: `flex`,
      flexDirection: `column`,
      className: S(Vs, a),
      style: c ? { backgroundImage: d, ...l } : l,
      ...u,
      children: [
        !c && (0, W.jsx)(So, { src: s }),
        (0, W.jsx)(R, {
          marginBottom: `medium`,
          display: `flex`,
          flexDirection: `row`,
          alignItems: `center`,
          flexGrow: 1,
          style: { zIndex: 1 },
          children: (0, W.jsxs)(R, {
            display: `flex`,
            flexDirection: `column`,
            flexGrow: 1,
            className: Hs,
            children: [
              (0, W.jsxs)(R, {
                display: `flex`,
                flexGrow: 1,
                alignItems: `center`,
                children: [
                  (0, W.jsxs)(`div`, {
                    style: { transform: `translatey( -2px )` },
                    className: Us,
                    children: [t, ` `],
                  }),
                  r,
                ],
              }),
              (0, W.jsx)(`div`, { className: Ws, children: n }),
            ],
          }),
        }),
        (0, W.jsx)(Gt, {
          spacing: [`xsmall`, `small`],
          style: { alignSelf: f ? `flex-start` : `flex-end` },
          itemClassName: o,
          children: i,
        }),
      ],
    });
  },
  Ks = (e) => {
    let { theme: t, style: n, ...r } = e;
    return (0, W.jsx)(ti, { ...r, style: { ...n } });
  },
  qs = `fHJpsy--17U-`,
  Js = `_3vVSBTFSZow-`,
  Ys = `v-KUhLiWtck-`,
  Xs = `eVXDrrGdLzU-`,
  Zs = `YIrQjMyHJA0-`,
  Qs = `_9AAGbk2jCTw-`,
  $s = `_8946o-aDIRs-`,
  ec = `_7yGYrPNWFCE-`,
  tc = `l-YzYVEVklE-`,
  nc = `_9IW7oDCMRGk-`,
  rc = `thIf4CPwVIk-`,
  ic = `jfaQsNFJemk-`,
  ac = `fy1qFvREI-E-`,
  oc = `NC2LiacfVDs-`,
  sc = `f3jq-dFbY74-`,
  cc = `v0Q0G11WwsE-`,
  lc = `dvvggF7L08Y-`,
  uc = `VvPg9biFQow-`,
  dc = `_7gfqwqcuLXw-`,
  fc = `rqbaF3Yp8t4-`,
  pc = `AC-N8swahaU-`,
  mc = `rXXwPkvcub4-`,
  hc = `Yr0QB1i2BZE-`,
  gc = `m74utIWnB-g-`,
  _c = `ZeKFbEYKN9I-`,
  vc = `SCI3o-nXtyw-`,
  yc = `HQKwybj7l34-`,
  bc = `zH-TB1klm1U-`,
  xc = `mjakKyA3VsE-`,
  Sc = `_2avUfQjHaMg-`,
  Cc = `ySK0-Foovvw-`,
  wc = `MUXvc-K-iPA-`,
  Tc = `_-6nQMQGztPQ-`,
  Ec = `tCNU9im20ck-`,
  Dc = `apjs9cYrPQU-`,
  Oc = `JCc3TEzb1UY-`,
  kc = `JtUWLzoR60c-`,
  Ac = `sCJLWuMZd-o-`,
  jc = `jyAW0tM3ppA-`,
  Mc = `ojvun88ekJg-`,
  Nc = `_7OEYNqYdT3I-`,
  Pc = `CYGuKWC7atI-`,
  Fc = `h74VCjKH5Zw-`,
  Ic = `_1OrGPOmzbFk-`,
  Lc = `_7I8rlILirqU-`,
  Rc = `_9B2jGKGj8d4-`,
  zc = `-DJGby8wTDk-`,
  Bc = `Ua0Ms7oWbDg-`,
  Vc = `_1dNibenJqDw-`,
  Hc = `uxHZYn3cEEE-`,
  Uc = `_9HgKiTxYuzY-`,
  Wc = `_7wEEIqkr1co-`,
  Gc = `KWOX7cVFACE-`,
  Kc = `pq6qSMrhX7c-`,
  qc = `GwFF0G3PJ-A-`,
  Jc = `k9l73Qqs9u8-`,
  Yc = `OnzdPEotZfs-`,
  Xc = `uNqU81HDZJ0-`,
  Zc = `_0LEJMAP-Dec-`,
  Qc = `EqVWOEpYQWY-`,
  $c = `PJq3YIv8jKo-`,
  el = `MXMTpEO1WOQ-`,
  tl = `kf2J-aMj0EU-`,
  nl = `wA53bhk1iQc-`,
  rl = `x6OAc1nkCoE-`,
  il = `NPsTC3J8ZZY-`,
  al = `_94J2SNHf6p0-`,
  ol = `_8k86HspspMI-`,
  sl = `_26Llhoc37uI-`,
  cl = `mBk9Y4ONnGY-`,
  ll = `nzDgyUbC7VQ-`,
  ul = `JRDJj1Zg06I-`,
  dl = `vabXJxndCUU-`,
  fl = `L-BhvxtGFyE-`,
  pl = `VQ6k3-MVC0Q-`,
  ml = `c8Zmm5yZO5Y-`,
  hl = `_2eCyOMWAp0o-`,
  gl = `HrO-k5Kl6oE-`,
  _l = `TNc7CsF8VKA-`,
  vl = `SeTvTe0OkAM-`,
  yl = `wMBRSBkOHFk-`,
  bl = `mh1kkYnLZJg-`,
  xl = `xH07g0MW-h0-`,
  Sl = `btT6KflqvtQ-`,
  Cl = `AEy-fnp3KCQ-`,
  wl = `_8rwA28ymLpw-`,
  Tl = `x3DI7IpK6lM-`,
  El = `Cpa5BRtkKNY-`,
  Dl = `da0RHWQAtqs-`,
  Ol = `_61LN1MI5Pi0-`,
  kl = `Hw5YhFxVjyQ-`,
  Al = `QUyOBzJpbRw-`,
  jl = `eyRoERClt5k-`,
  Ml = `hXrXsDgHj50-`,
  Nl = `huyKYmRat8g-`,
  Pl = `RzHyutxBo5Q-`,
  Fl = `_2sNy5-dTus0-`,
  Il = `AxAARXhJFFI-`,
  Ll = `KEhlMVPpKCw-`,
  Rl = `xGur1Z5sy-c-`,
  zl = `GRnRr6m2Ebs-`,
  Bl = `gFFN6KOip84-`,
  Vl = `H6RgTGkvaaE-`,
  Hl = `C4PmAZDunTs-`,
  Ul = `tzrApHrBQDw-`,
  Wl = `tfJCTG779Zs-`,
  Gl = `_8uagZyb0qcI-`,
  Kl = `Fif6UQy3x0E-`,
  ql = `gVYT5LT0FEM-`,
  Jl = class extends z.Component {
    componentDidUpdate(e) {
      this.props.location.pathname !== e.location.pathname &&
        this.UpdateScroll();
    }
    componentDidMount() {
      this.UpdateScroll();
    }
    UpdateScroll() {
      let {
          scrollElement: e,
          location: { hash: t },
        } = this.props,
        n = () => e && e.scrollTo(0, 0);
      if (t) {
        let e = t.slice(1),
          r = document.getElementById(e);
        r ? r.scrollIntoView() : n();
      } else n();
    }
    render() {
      return null;
    }
  },
  Yl = m(Jl),
  Xl = (0, z.createContext)(null);
function Zl(e) {
  let { spacing: t, children: n } = e;
  return (0, W.jsx)(Xl.Provider, { value: tu(t), children: n });
}
function Ql(e) {
  let t = $l();
  return (0, W.jsx)(`div`, {
    style: nu(t),
    children: (0, W.jsx)(Xl.Provider, { value: null, children: e.children }),
  });
}
function $l() {
  return (0, z.useContext)(Xl);
}
function eu(e) {
  return typeof e == `number` ? `${e}px` : e;
}
function tu(e) {
  return {
    top: eu(e.vertical || e.top || `0`),
    bottom: eu(e.vertical || e.bottom || `0`),
    left: eu(e.horizontal || e.left || `0`),
    right: eu(e.horizontal || e.right || `0`),
  };
}
function nu(e) {
  if (!e) return;
  let { top: t, bottom: n, left: r, right: i } = e,
    a = {};
  return (
    t && (a.marginTop = `-${t}`),
    n && (a.marginBottom = `-${n}`),
    r && (a.marginLeft = `-${r}`),
    i && (a.marginRight = `-${i}`),
    a
  );
}
function ru() {
  let e = $l();
  if (!e) return;
  let t = `${eu(e.top)} ${eu(e.right)} ${eu(e.bottom)} ${eu(e.left)}`;
  return { padding: t, scrollPadding: t };
}
var iu = ``,
  au = null,
  ou = null,
  su = null;
function cu() {
  ((iu = ``),
    au !== null && au.disconnect(),
    ou !== null && (window.clearTimeout(ou), (ou = null)));
}
function lu() {
  let e = document.getElementById(iu);
  return e !== null && (su(e), cu(), !0);
}
function uu() {
  window.setTimeout(() => {
    lu() === !1 &&
      (au === null && (au = new MutationObserver(lu)),
      au.observe(document, { attributes: !0, childList: !0, subtree: !0 }),
      (ou = window.setTimeout(() => {
        cu();
      }, 1e4)));
  }, 0);
}
function du(e) {
  return z.forwardRef((t, n) => {
    let r = (e) => {
        (cu(),
          t.onClick && t.onClick(e),
          typeof t.to == `string`
            ? (iu = t.to.split(`#`).slice(1).join(`#`))
            : typeof t.to == `object` &&
              typeof t.to.hash == `string` &&
              (iu = t.to.hash.replace(`#`, ``)),
          iu !== `` &&
            ((su =
              t.scroll ||
              ((e) =>
                t.smooth
                  ? e.scrollIntoView({ behavior: `smooth` })
                  : e.scrollIntoView())),
            uu()));
      },
      { scroll: i, smooth: a, ...o } = t;
    return (0, W.jsx)(e, { ...o, onClick: r, ref: n, children: t.children });
  });
}
du(Yt);
var fu = du(Jt),
  pu = `-feX9GRQO4E-`,
  mu = `PztiFOQSNkg-`,
  hu = `d7He2hxHNDQ-`,
  gu = `sas-eCiyqL4-`,
  _u = `FiYqYZBSUy8-`,
  vu = `_2xDWkUTIe8M-`,
  yu = `WqA9xhbo2po-`,
  bu = `APVQPZgQ1VA-`,
  xu = `_-6ZmsOpOmic-`,
  Su = `J1G3dVDPaJY-`,
  Cu = `oaJBI7AMokg-`,
  wu = `biAUyHI0DHY-`,
  Tu = `M9tzsA3cAHE-`,
  Eu = `FSL2oaMz-mA-`,
  Du = `vMIs81totsI-`,
  Ou = `_9UuMR813HW4-`,
  ku = `e7-u3yNTyt0-`,
  Au = `_0EVQlUK3Rxw-`,
  ju = `XJ-Hh1o6VE0-`,
  Mu = `xAyvBld-pow-`,
  Nu = z.createContext(() => {}),
  Pu = ({ children: e, className: t, ...n }) => {
    let [r, i] = z.useState(null),
      [a, o] = z.useState(0),
      [s, c] = Iu(a),
      l = r
        ? { width: `${r.width}px`, transform: `translateX(${r.x}px)` }
        : void 0,
      u = z.useCallback(
        (e) => {
          if ((r ? e.x !== r.x && e.width !== r.width && i(e) : i(e), c)) {
            let t = Math.max(
              0,
              Math.min(
                e.x - c.clientWidth / 2 + e.width / 2,
                c.scrollWidth - c.clientWidth,
              ),
            );
            o(t);
          }
        },
        [r, c],
      ),
      [d, f] = z.useState(0);
    return (
      z.useEffect(() => {
        if (d) {
          let e = setInterval(() => o((e) => e + d), 50);
          return () => clearInterval(e);
        }
      }, [d]),
      (0, W.jsx)(Nu.Provider, {
        value: u,
        children: (0, W.jsxs)(x, {
          "flow-children": `row`,
          ...n,
          className: S(Au, t),
          ref: s,
          fnScrollIntoViewHandler: () => !0,
          children: [e, (0, W.jsx)(`div`, { className: ju, style: l })],
        }),
      })
    );
  },
  Fu = ({ children: e, active: t, className: n, ...r }) => {
    let i = z.useContext(Nu),
      [a, o] = z.useState(null),
      s = z.useCallback((e) => o(e), []);
    return (
      z.useLayoutEffect(() => {
        t && a && i({ x: a.offsetLeft, width: a.clientWidth });
      }, [t, a, i]),
      (0, W.jsx)(`div`, {
        className: S(Mu, t && `XMh2Xd5WKD4-`, n),
        ref: s,
        ...r,
        children: e,
      })
    );
  };
function Iu(e, t = { msDuration: 200, msInterval: 10 }) {
  let [n, r] = z.useState(null),
    i = z.useCallback((e) => r(e), []),
    { msDuration: a, msInterval: o } = t;
  return (
    z.useLayoutEffect(() => {
      if (!n) return;
      let t =
          (Math.abs(e - n.scrollLeft) / (a / o)) * (e < n.scrollLeft ? -1 : 1),
        r = window.setInterval(() => {
          Math.abs(t) < Math.abs(n.scrollLeft - e)
            ? ((n.scrollLeft = e), clearInterval(r))
            : (n.scrollLeft += t);
        }, o);
      return () => clearInterval(r);
    }, [e, n, a, o]),
    [i, n]
  );
}
var Lu = `#CommunityAwards`,
  Ru = (e) => (t, n) => (t ? (n.hash === Lu) === e : !1),
  zu = (e) => {
    let t = [
        {
          label: E(`#FeaturedLabel`),
          items: [
            {
              props: {
                iconComponent: ga,
                children: E(`#ShopNav_Featured`),
                to: C.LoyaltyStore(),
                exact: !0,
              },
            },
            {
              props: {
                iconComponent: Ea,
                children: E(`#ShopNav_ByGame`),
                to: C.LoyaltyByGame(),
              },
            },
            {
              props: {
                iconComponent: Ea,
                children: E(`#ShopNav_ByEvent`),
                to: C.LoyaltyByEvent(),
              },
            },
            {
              props: {
                iconComponent: Da,
                children: E(`#ShopNav_ItemBundlesLink`),
                to: { pathname: C.LoyaltyItemBundles() },
              },
            },
          ],
        },
        {
          label: E(`#InterfaceLabel`),
          items: [
            {
              props: {
                iconComponent: kt,
                children: E(`#ShopNav_Keyboards`),
                to: { pathname: C.LoyaltyKeyboard() },
              },
            },
            {
              props: {
                iconComponent: kt,
                children: E(`#ShopNav_StartupMovies`),
                to: { pathname: C.LoyaltyStartupMovie() },
              },
            },
          ],
        },
        {
          label: E(`#ProfileItems`),
          items: [
            {
              props: {
                iconComponent: _a,
                children: E(`#ShopNav_AvatarLink`),
                to: C.LoyaltyAvatar(),
              },
            },
            {
              props: {
                iconComponent: Qe,
                children: E(`#ShopNav_BackgroundsLink`),
                to: C.LoyaltyBackgrounds(),
              },
            },
          ],
        },
        {
          label: E(`#ChatItems`),
          items: [
            {
              props: {
                iconComponent: Dt,
                children: E(`#ShopNav_StickersLink`),
                to: C.LoyaltyStickers(),
              },
            },
            {
              props: {
                iconComponent: Re,
                children: E(`#ShopNav_ChatEffectsLink`),
                to: C.LoyaltyChatEffects(),
              },
            },
            {
              props: {
                iconComponent: pt,
                children: E(`#ShopNav_EmoticonsLink`),
                to: C.LoyaltyEmoticons(),
              },
            },
          ],
        },
        {
          label: ` `,
          items: [
            {
              props: {
                iconComponent: Aa,
                children: E(`#HowItWorksLink`),
                to: { pathname: C.LoyaltyHowItWorks(), hash: `#Title` },
                isActive: Ru(!1),
              },
            },
          ],
        },
      ],
      n = ct(M.EREALM);
    return (
      !n &&
        !e &&
        t[2].items.push({
          props: {
            iconComponent: Pa,
            children: E(`#ShopNav_AwardsLink`),
            to: { pathname: C.LoyaltyHowItWorks(), hash: `${Lu}` },
            isActive: Ru(!0),
          },
        }),
      n ||
        (t[2].items.push({
          props: {
            iconComponent: jt,
            children: E(`#ShopNav_SeasonalBadgeLink`),
            to: C.LoyaltySteamBadge(),
          },
        }),
        t[2].items.push({
          props: {
            iconComponent: Ca,
            children: E(`#ShopNav_ProfileBundlesLink`),
            to: C.LoyaltyProfileBundles(),
          },
        })),
      n ||
        t[2].items.push({
          props: {
            iconComponent: Ia,
            children: E(`#ShopNav_ProfileShowcasesLink`),
            to: { pathname: C.LoyaltyProfileCustomizations() },
          },
        }),
      H.Get().BIsLoggedIn() &&
        (t[4].items.push({
          external: !0,
          props: {
            iconComponent: Sa,
            children: E(`#MyAwardSummary`),
            href: M.COMMUNITY_BASE_URL + `my/awards`,
          },
        }),
        t[4].items.push({
          external: !0,
          props: {
            iconComponent: ja,
            children: E(`#RewardsPointsHistoryLink`),
            href: M.STORE_BASE_URL + `pointssummary/`,
          },
        }),
        t[4].items.push({
          props: {
            iconComponent: Sa,
            children: E(`#MyEquippedProfileItems`),
            to: { pathname: C.LoyaltyEquippedProfile(xt.steamid) },
          },
        })),
      t
    );
  },
  Bu = g(() => {
    let [e, t] = (0, z.useState)(H.Get().GetCurrentSearchTerm()),
      [n, r] = (0, z.useState)(0),
      i = H.Get().GetCurrentSearchPlaceholder();
    return (0, W.jsx)(x, {
      className: S(Cu, Su),
      children: (0, W.jsxs)(x, {
        className: wu,
        children: [
          (0, W.jsx)(yt, {
            className: Tu,
            type: `text`,
            id: `point_search`,
            onChange: (e) => {
              let i = e.target.value.toLowerCase();
              (n && clearTimeout(n),
                r(
                  window.setTimeout(() => {
                    H.Get().SetCurrentSearchTerm(i);
                  }, 300),
                ),
                t(i));
            },
            value: e,
            placeholder: i,
          }),
          (0, W.jsx)(`div`, {
            className: Eu,
            children: (0, W.jsx)(et, { className: S(Du) }),
          }),
          e.length > 0 &&
            (0, W.jsx)(`div`, {
              className: `sd4YNjmmiI0-`,
              onClick: () => {
                (t(``), H.Get().SetCurrentSearchTerm(``));
              },
              children: (0, W.jsx)(ka, { className: `_3Gk2tg9Aajs-` }),
            }),
        ],
      }),
    });
  });
function Vu() {
  return H.Get().BIsLoggedIn()
    ? (0, W.jsxs)(R, {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        className: S(Ou, Su),
        children: [
          (0, W.jsx)($e, { className: mu }),
          (0, W.jsxs)(R, {
            display: `flex`,
            flexDirection: `column`,
            flex: `1`,
            paddingLeft: `xsmall`,
            children: [
              (0, W.jsx)(`a`, {
                className: ku,
                href: M.STORE_BASE_URL + `pointssummary/`,
                children: E(`#YourBalance`),
              }),
              (0, W.jsx)(`div`, {
                className: pu,
                children: ut(H.Get().GetPointsAvailable().getLowBits()),
              }),
            ],
          }),
        ],
      })
    : null;
}
var Hu = () => {
    let e = zu(ze()),
      t = H.Get().BIsLoggedIn() && H.Get().GetIsUsingAppIDFilters();
    return (0, W.jsx)(R, {
      className: hu,
      "flow-children": `column`,
      children: (0, W.jsxs)(Wt, {
        spacing: `none`,
        children: [
          (0, W.jsx)(Vu, {}),
          t && (0, W.jsx)(Bu, {}),
          e.map((e, t) =>
            (0, W.jsxs)(
              z.Fragment,
              {
                children: [
                  e.label &&
                    (0, W.jsx)(`div`, {
                      className: `iC89KZRmD3g-`,
                      children: e.label,
                    }),
                  e.items.map((e) =>
                    e.external
                      ? (0, z.createElement)(Wu, {
                          ...e.props,
                          key: e.props.href,
                        })
                      : (0, z.createElement)(Uu, {
                          ...e.props,
                          key: JSON.stringify(e.props.to),
                        }),
                  ),
                ],
              },
              t,
            ),
          ),
        ],
      }),
    });
  },
  Uu = (e) => {
    let {
        iconComponent: t,
        className: n,
        children: r,
        iconCallout: i,
        ...a
      } = e,
      o = i,
      s = typeof a.to == `object` && a.to.hash ? fu : Jt;
    return (0, W.jsxs)(s, {
      className: S(_u, n),
      activeClassName: gu,
      ...a,
      children: [
        (0, W.jsx)(`div`, { className: vu, children: r }),
        o && (0, W.jsx)(o, { className: `K7wCJC5tgRs-` }),
      ],
    });
  },
  Wu = (e) => {
    let {
        iconComponent: t,
        className: n,
        children: r,
        iconCallout: i,
        ...a
      } = e,
      o = i;
    return (0, W.jsxs)(`a`, {
      className: S(_u, n),
      ...a,
      children: [
        (0, W.jsx)(`div`, { className: vu, children: r }),
        o && (0, W.jsx)(o, { className: `K7wCJC5tgRs-` }),
      ],
    });
  };
function Gu(e) {
  let t = p(),
    n = typeof e.to == `string` ? e.to : e.to.pathname,
    r = f(n),
    i = !!r && (!e.exact || r.isExact),
    a = i && e.isActive ? e.isActive(r, t) : i;
  return (0, W.jsx)(Fu, { active: a, className: bu, children: e.children });
}
var Ku = () => {
    let e = zu(ze()),
      t = [];
    return (
      e.forEach((e) => {
        e.items.forEach((e) => {
          if (e.external) {
            let { iconComponent: n, iconCallout: r, ...i } = e.props;
            t.push(
              (0, z.createElement)(
                wt,
                {
                  ...i,
                  key: e.props.href,
                  focusClassName: xu,
                  noFocusRing: !0,
                },
                (0, W.jsx)(Fu, { className: bu, children: e.props.children }),
              ),
            );
          } else {
            let n = e.props,
              { iconComponent: r, iconCallout: i, ...a } = n,
              o = typeof n.to == `string` ? n.to : JSON.stringify(n.to);
            t.push(
              (0, z.createElement)(
                Jt,
                { ...a, key: o, focusClassName: xu, noFocusRing: !0 },
                (0, W.jsx)(Gu, { ...n, children: n.children }),
              ),
            );
          }
        });
      }),
      (0, W.jsx)(Pu, { className: yu, children: t })
    );
  },
  qu = new URL(
    `../../../images/applications/store/diamonds_tile.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Ju = new URL(
    `../../../images/applications/store/home_background.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Yu = new URL(
    `../../../images/applications/store/halloween_2020_pointspage_bg.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Xu = ({ className: e, ...t }) => {
    let n = z.useRef(void 0);
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(`div`, { ref: n, className: S(zl, e), ...t }),
        (0, W.jsx)(Yl, { scrollElement: n.current }),
      ],
    });
  },
  Zu = ({ children: e }) =>
    (0, W.jsx)(Xu, { className: S(Hl, On), children: e }),
  Qu = ({ children: e, src: t, className: n }) =>
    (0, W.jsxs)(W.Fragment, {
      children: [
        e,
        (0, W.jsx)(`div`, {
          className: S(Ul, kn, n),
          style: { backgroundImage: `url(${t})` },
        }),
      ],
    });
function $u() {
  let e = ze();
  return Bt(`(max-width: 965px)`) || e;
}
function ed(e) {
  let t = Ht([`xxsmall`, `small`, `xxlarge`]),
    n = $u(),
    r = zt(t);
  return (0, W.jsx)(Zl, {
    spacing: { horizontal: r },
    children: (0, W.jsxs)(R, {
      display: `flex`,
      justifyContent: `center`,
      paddingBottom: `xlarge`,
      className: Kl,
      children: [
        !n && (0, W.jsx)(Hu, {}),
        (0, W.jsxs)(Wt, {
          itemClassName: Bl,
          className: Vl,
          children: [n && (0, W.jsx)(Ku, {}), e.children],
        }),
      ],
    }),
  });
}
var td = ({ background: e, children: t }) => {
    let n = qu;
    return (
      e && (n = e),
      (0, W.jsx)(Zu, {
        children: (0, W.jsx)(Qu, {
          src: n,
          children: (0, W.jsx)(ed, { children: t }),
        }),
      })
    );
  },
  nd = ({ children: e }) =>
    (0, W.jsx)(Qu, { src: Ju, className: Rl, children: e }),
  rd = ({ children: e }) =>
    (0, W.jsx)(Zu, {
      children: (0, W.jsx)(nd, { children: (0, W.jsx)(ed, { children: e }) }),
    }),
  id = g(({ children: e, appid: t }) => {
    let [n] = Me(t, { include_assets: !0 }),
      r = qu,
      i = H.Get().GetAppHeroImage(t);
    return (
      i.is_custom
        ? (r = i.img_url)
        : n &&
          (r =
            n.GetAssets().GetRawPageBackgroundURL() ??
            n.GetAssets().GetPageBackgroundURL()),
      (0, W.jsx)(Qu, { src: r, className: Wl, children: e })
    );
  }),
  ad = { 1461450: Yu };
function od(e) {
  return e in ad;
}
function sd(e) {
  return ad[e];
}
function cd(e) {
  return od(e.appid) ? (0, W.jsx)(ld, { ...e }) : (0, W.jsx)(ud, { ...e });
}
function ld(e) {
  let { children: t, appid: n } = e,
    r = sd(n);
  return (0, W.jsx)(Xu, {
    children: (0, W.jsx)(`div`, {
      style: { backgroundImage: `url("${r}")` },
      className: Gl,
      children: (0, W.jsx)(ed, { children: t }),
    }),
  });
}
function ud(e) {
  let { children: t, appid: n } = e;
  return (0, W.jsx)(Zu, {
    children: (0, W.jsx)(id, {
      appid: n,
      children: (0, W.jsx)(ed, { children: t }),
    }),
  });
}
function dd(e) {
  let { title: t, subtitle: n, headerImage: r } = e,
    i = $u();
  return (0, W.jsxs)(W.Fragment, {
    children: [
      (0, W.jsx)(`div`, { className: ql, children: (0, W.jsx)(Uy, {}) }),
      i && (0, W.jsx)(Vu, {}),
      r && (0, W.jsx)(`img`, { className: `S6-XbeBErqA-`, src: r }),
      t &&
        (0, W.jsx)(`div`, {
          className: S(`Q7z0VMP-i2w-`, `_9ZMR-UgxIbU-`),
          children: t,
        }),
      n && (0, W.jsx)(`div`, { className: `UB18mRveUcI-`, children: n }),
    ],
  });
}
var fd = (e, t) => `${M.MEDIA_CDN_COMMUNITY_URL}/images/items/${e}/${t}`,
  pd = g(() => {
    let e = H.Get().GetSeasonalBadgeDefinition(),
      t = H.Get().GetUserSeasonalBadgeLevel(),
      n = e
        ? e.community_item_data.badge_data.map(({ level: n, image: r }) => ({
            level: n,
            imgSrc: fd(e.appid, r),
            owned: t >= n,
            cost: H.Get().GetCostToLevelSeasonalBadge(n),
          }))
        : [];
    return (0, W.jsx)(td, {
      children: (0, W.jsxs)(R, {
        paddingY: `xlarge`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        children: [
          (0, W.jsx)(dd, {
            title: E(`#SeasonalBadge_Title`),
            subtitle: E(`#SeasonalBadge_Description`),
          }),
          (0, W.jsx)(ei, {
            children: (0, W.jsx)(md, {
              children: n.map((t) =>
                (0, W.jsx)(
                  hd,
                  { ...t, onClick: (n) => $_(n, e, t.level) },
                  t.level,
                ),
              ),
            }),
          }),
        ],
      }),
    });
  }),
  md = ({ children: e }) =>
    (0, W.jsx)(Gt, {
      className: Ll,
      verticalSpacing: `large`,
      "flow-children": `grid`,
      children: e,
    }),
  hd = (e) => {
    let { level: t, owned: n, cost: r, imgSrc: i, className: a, ...o } = e;
    return (0, W.jsxs)(fa, {
      className: S(Al, a),
      ...o,
      children: [
        (0, W.jsx)(pa, {
          children: (0, W.jsx)(`img`, {
            src: i,
            title: E(`#BadgeLevel`, t),
            className: jl,
          }),
        }),
        (0, W.jsxs)(ma, {
          className: Pl,
          children: [
            (0, W.jsx)(vd, { owned: n, level: t }),
            (0, W.jsx)(`div`, {
              className: Ml,
              children: n ? (0, W.jsx)(gd, {}) : (0, W.jsx)(_d, { cost: r }),
            }),
          ],
        }),
      ],
    });
  },
  gd = () => (0, W.jsx)(G, { className: Nl }),
  _d = ({ cost: e }) => (0, W.jsx)(Di, { amount: e, size: 0.75 }),
  vd = (e) => {
    let { level: t, owned: n } = e;
    return (0, W.jsx)(`div`, {
      className: S(Fl, n && `KArjCse3bfw-`),
      children: (0, W.jsx)(`div`, { className: Il, children: t }),
    });
  },
  yd = new URL(
    `../../../images/applications/store/lunar2022_confirm.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  bd = t({
    FireworkContainer: () => Yg,
    FireworkPNG: () => Xg,
    FireworkPath: () => qg,
    SnowballImage: () => Sg,
    SnowballImageCCW: () => Tg,
    SnowballImageCW: () => Cg,
    Snowflake: () => Ad,
    "Snowflake-0": () => jd,
    "Snowflake-1": () => Nd,
    "Snowflake-10": () => Zd,
    "Snowflake-11": () => $d,
    "Snowflake-12": () => tf,
    "Snowflake-13": () => rf,
    "Snowflake-14": () => of,
    "Snowflake-15": () => cf,
    "Snowflake-16": () => uf,
    "Snowflake-17": () => ff,
    "Snowflake-18": () => mf,
    "Snowflake-19": () => gf,
    "Snowflake-2": () => Fd,
    "Snowflake-20": () => vf,
    "Snowflake-3": () => Ld,
    "Snowflake-4": () => zd,
    "Snowflake-5": () => Vd,
    "Snowflake-6": () => Ud,
    "Snowflake-7": () => Gd,
    "Snowflake-8": () => qd,
    "Snowflake-9": () => Yd,
    after: () => zg,
    "animation-container": () => kd,
    balloon_big_1: () => e_,
    balloon_big_2: () => t_,
    balloon_move_left: () => $g,
    balloon_move_right: () => Qg,
    balloon_small_1: () => Zg,
    balloon_small_2: () => n_,
    balloon_small_3: () => r_,
    balloons: () => _g,
    balloonsDurationJitterS: () => Ed,
    balloonsDurationMaxMs: () => Dd,
    balloonsDurationMs: () => wd,
    balloonsDurationS: () => Td,
    bang: () => Bg,
    before: () => Rg,
    confetti: () => bf,
    "confetti-0": () => xf,
    "confetti-1": () => Cf,
    "confetti-10": () => Vf,
    "confetti-11": () => Uf,
    "confetti-12": () => Gf,
    "confetti-13": () => qf,
    "confetti-14": () => Yf,
    "confetti-15": () => Zf,
    "confetti-16": () => $f,
    "confetti-17": () => tp,
    "confetti-18": () => rp,
    "confetti-19": () => ap,
    "confetti-2": () => Tf,
    "confetti-20": () => sp,
    "confetti-21": () => lp,
    "confetti-22": () => dp,
    "confetti-23": () => pp,
    "confetti-24": () => hp,
    "confetti-25": () => _p,
    "confetti-26": () => yp,
    "confetti-27": () => xp,
    "confetti-28": () => Cp,
    "confetti-29": () => Tp,
    "confetti-3": () => Df,
    "confetti-30": () => Dp,
    "confetti-31": () => kp,
    "confetti-32": () => jp,
    "confetti-33": () => Np,
    "confetti-34": () => Fp,
    "confetti-35": () => Lp,
    "confetti-36": () => zp,
    "confetti-37": () => Vp,
    "confetti-38": () => Up,
    "confetti-39": () => Gp,
    "confetti-4": () => kf,
    "confetti-40": () => qp,
    "confetti-41": () => Yp,
    "confetti-42": () => Zp,
    "confetti-43": () => $p,
    "confetti-44": () => tm,
    "confetti-45": () => rm,
    "confetti-46": () => am,
    "confetti-47": () => sm,
    "confetti-48": () => lm,
    "confetti-49": () => dm,
    "confetti-5": () => jf,
    "confetti-50": () => pm,
    "confetti-51": () => hm,
    "confetti-52": () => _m,
    "confetti-53": () => ym,
    "confetti-54": () => xm,
    "confetti-55": () => Cm,
    "confetti-56": () => Tm,
    "confetti-57": () => Dm,
    "confetti-58": () => km,
    "confetti-59": () => jm,
    "confetti-6": () => Nf,
    "confetti-60": () => Nm,
    "confetti-61": () => Fm,
    "confetti-62": () => Lm,
    "confetti-63": () => zm,
    "confetti-64": () => Vm,
    "confetti-65": () => Um,
    "confetti-66": () => Gm,
    "confetti-67": () => qm,
    "confetti-68": () => Ym,
    "confetti-69": () => Zm,
    "confetti-7": () => Ff,
    "confetti-70": () => $m,
    "confetti-71": () => th,
    "confetti-72": () => rh,
    "confetti-73": () => ah,
    "confetti-74": () => sh,
    "confetti-75": () => lh,
    "confetti-76": () => dh,
    "confetti-77": () => ph,
    "confetti-78": () => hh,
    "confetti-79": () => _h,
    "confetti-8": () => Lf,
    "confetti-80": () => yh,
    "confetti-81": () => xh,
    "confetti-82": () => Ch,
    "confetti-83": () => Th,
    "confetti-84": () => Dh,
    "confetti-85": () => kh,
    "confetti-86": () => jh,
    "confetti-87": () => Nh,
    "confetti-88": () => Fh,
    "confetti-89": () => Lh,
    "confetti-9": () => zf,
    "confetti-90": () => zh,
    "confetti-91": () => Vh,
    "confetti-92": () => Uh,
    "confetti-93": () => Gh,
    "confetti-94": () => qh,
    "confetti-95": () => Yh,
    "confetti-96": () => Zh,
    "confetti-97": () => $h,
    "confetti-98": () => tg,
    "confetti-99": () => rg,
    confettiDurationMs: () => xd,
    cracker: () => ag,
    "cracker-left": () => og,
    "cracker-right": () => sg,
    crackerDurationMs: () => Cd,
    default: () => g_,
    "drop-0": () => Sf,
    "drop-1": () => wf,
    "drop-10": () => Hf,
    "drop-11": () => Wf,
    "drop-12": () => Kf,
    "drop-13": () => Jf,
    "drop-14": () => Xf,
    "drop-15": () => Qf,
    "drop-16": () => ep,
    "drop-17": () => np,
    "drop-18": () => ip,
    "drop-19": () => op,
    "drop-2": () => Ef,
    "drop-20": () => cp,
    "drop-21": () => up,
    "drop-22": () => fp,
    "drop-23": () => mp,
    "drop-24": () => gp,
    "drop-25": () => vp,
    "drop-26": () => bp,
    "drop-27": () => Sp,
    "drop-28": () => wp,
    "drop-29": () => Ep,
    "drop-3": () => Of,
    "drop-30": () => Op,
    "drop-31": () => Ap,
    "drop-32": () => Mp,
    "drop-33": () => Pp,
    "drop-34": () => Ip,
    "drop-35": () => Rp,
    "drop-36": () => Bp,
    "drop-37": () => Hp,
    "drop-38": () => Wp,
    "drop-39": () => Kp,
    "drop-4": () => Af,
    "drop-40": () => Jp,
    "drop-41": () => Xp,
    "drop-42": () => Qp,
    "drop-43": () => em,
    "drop-44": () => nm,
    "drop-45": () => im,
    "drop-46": () => om,
    "drop-47": () => cm,
    "drop-48": () => um,
    "drop-49": () => fm,
    "drop-5": () => Mf,
    "drop-50": () => mm,
    "drop-51": () => gm,
    "drop-52": () => vm,
    "drop-53": () => bm,
    "drop-54": () => Sm,
    "drop-55": () => wm,
    "drop-56": () => Em,
    "drop-57": () => Om,
    "drop-58": () => Am,
    "drop-59": () => Mm,
    "drop-6": () => Pf,
    "drop-60": () => Pm,
    "drop-61": () => Im,
    "drop-62": () => Rm,
    "drop-63": () => Bm,
    "drop-64": () => Hm,
    "drop-65": () => Wm,
    "drop-66": () => Km,
    "drop-67": () => Jm,
    "drop-68": () => Xm,
    "drop-69": () => Qm,
    "drop-7": () => If,
    "drop-70": () => eh,
    "drop-71": () => nh,
    "drop-72": () => ih,
    "drop-73": () => oh,
    "drop-74": () => ch,
    "drop-75": () => uh,
    "drop-76": () => fh,
    "drop-77": () => mh,
    "drop-78": () => gh,
    "drop-79": () => vh,
    "drop-8": () => Rf,
    "drop-80": () => bh,
    "drop-81": () => Sh,
    "drop-82": () => wh,
    "drop-83": () => Eh,
    "drop-84": () => Oh,
    "drop-85": () => Ah,
    "drop-86": () => Mh,
    "drop-87": () => Ph,
    "drop-88": () => Ih,
    "drop-89": () => Rh,
    "drop-9": () => Bf,
    "drop-90": () => Bh,
    "drop-91": () => Hh,
    "drop-92": () => Wh,
    "drop-93": () => Kh,
    "drop-94": () => Jh,
    "drop-95": () => Xh,
    "drop-96": () => Qh,
    "drop-97": () => eg,
    "drop-98": () => ng,
    "drop-99": () => ig,
    "firework-path-animation": () => Jg,
    fireworkBigX: () => u_,
    fireworkBigY: () => d_,
    fireworkLongX: () => m_,
    fireworkLongY: () => h_,
    fireworkSmallX: () => f_,
    fireworkSmallY: () => p_,
    goldfetti: () => cg,
    "goldfetti-color-1": () => ug,
    "goldfetti-color-2": () => dg,
    "goldfetti-color-3": () => fg,
    "goldfetti-emoji-1": () => pg,
    "goldfetti-emoji-2": () => mg,
    "goldfetti-emoji-3": () => hg,
    "goldfetti-emoji-4": () => gg,
    "goldfetti-fragment": () => lg,
    goldfettiColorsNum: () => `3`,
    goldfettiDurationMs: () => Sd,
    goldfettiEmojiNum: () => `4`,
    gravity: () => Vg,
    lantern_glow: () => vg,
    position: () => Hg,
    pyro: () => Lg,
    "pyro-body-shake": () => Wg,
    "pyro-body-shake2": () => Kg,
    pyroBodyShake: () => Ug,
    pyroBodyShake2: () => Gg,
    "slide-out-bottom": () => Ig,
    "slide-out-tl": () => Pg,
    "slide-out-tr": () => Fg,
    snowball: () => xg,
    "snowball-chunk": () => kg,
    "snowball-chunk-1": () => Ag,
    "snowball-chunk-2": () => jg,
    "snowball-chunk-3": () => Mg,
    "snowball-chunk-4": () => Ng,
    "snowball-container": () => bg,
    "snowball-path": () => Dg,
    "snowball-path-1": () => i_,
    "snowball-path-2": () => a_,
    "snowball-path-3": () => o_,
    "snowball-path-4": () => s_,
    "snowball-path-5": () => c_,
    "snowball-path-6": () => l_,
    "snowball-residue": () => Og,
    "snowball-rotate-ccw": () => Eg,
    "snowball-rotate-cw": () => wg,
    snowballDurationMs: () => Od,
    snowballSpeed: () => `1s`,
    snowball_fragment: () => yg,
    "snowflake-0": () => Md,
    "snowflake-1": () => Pd,
    "snowflake-10": () => Qd,
    "snowflake-11": () => ef,
    "snowflake-12": () => nf,
    "snowflake-13": () => af,
    "snowflake-14": () => sf,
    "snowflake-15": () => lf,
    "snowflake-16": () => df,
    "snowflake-17": () => pf,
    "snowflake-18": () => hf,
    "snowflake-19": () => _f,
    "snowflake-2": () => Id,
    "snowflake-20": () => yf,
    "snowflake-3": () => Rd,
    "snowflake-4": () => Bd,
    "snowflake-5": () => Hd,
    "snowflake-6": () => Wd,
    "snowflake-7": () => Kd,
    "snowflake-8": () => Jd,
    "snowflake-9": () => Xd,
  }),
  xd = `7000s/s`,
  Sd = `7000s/s`,
  Cd = `300s/s`,
  wd = `4000s/s`,
  Td = `4s/s`,
  Ed = `1s/s`,
  Dd = `5000s/s`,
  Od = `3010s/s`,
  kd = `qjpNNRzk6dU-`,
  Ad = `FIMq7a5Zi84-`,
  jd = `E8NNSPAhEDs-`,
  Md = `MUqCiedZFyE-`,
  Nd = `bC2dIlscD-U-`,
  Pd = `Dp-ZRiIyGNc-`,
  Fd = `jT-pTrpyYVQ-`,
  Id = `jX16Lnzasz4-`,
  Ld = `szj95vkZY3c-`,
  Rd = `B63sd-KwGOo-`,
  zd = `Tr-hP4XSmEo-`,
  Bd = `agg8gHeoLnQ-`,
  Vd = `_5aM2lSnfe8o-`,
  Hd = `U2GFCBhr38A-`,
  Ud = `xzFYisC9yKc-`,
  Wd = `c72fZpK8piA-`,
  Gd = `Udwg0l-iA5U-`,
  Kd = `sd-HwZ7XTG8-`,
  qd = `GB7VRoVIS-U-`,
  Jd = `_07u1bXFcW44-`,
  Yd = `evHwd--K2VY-`,
  Xd = `AwTNxlixw60-`,
  Zd = `YdSgo68pCeg-`,
  Qd = `RQbViS1zads-`,
  $d = `xPsLXUovU9w-`,
  ef = `mfBFO-jOx0M-`,
  tf = `ACRU78-Wo-s-`,
  nf = `WD3hXw50RDw-`,
  rf = `SgStUwdK4oU-`,
  af = `o9zFm3EovlA-`,
  of = `Uht4TB0cEzo-`,
  sf = `cHJQImT9Vl8-`,
  cf = `Nn16BeI2BmA-`,
  lf = `aCLVX8zgXNo-`,
  uf = `MfQaL5m6t9M-`,
  df = `XuQL00tyLZg-`,
  ff = `NmUcmCVVLhg-`,
  pf = `qcWXUBeo-cs-`,
  mf = `LJjNlXDfS-E-`,
  hf = `CwQU-TCDStE-`,
  gf = `-GUAbBuliKQ-`,
  _f = `LmyVsAHTpvM-`,
  vf = `gbjcmMoFqSE-`,
  yf = `_64NhUzZ5br4-`,
  bf = `zAA-ALHyAqM-`,
  xf = `_2biMjcKxMko-`,
  Sf = `Z52jHvYPIXI-`,
  Cf = `NqpEQ-8n7fw-`,
  wf = `UccshVIXHRQ-`,
  Tf = `Kz1s2VK-9bg-`,
  Ef = `oUIe1k0-qd0-`,
  Df = `SVoQPv-IfwM-`,
  Of = `K1P8vn7jQPo-`,
  kf = `rLezqDzkvgM-`,
  Af = `MOIyPmLZn3s-`,
  jf = `fyxNqISbZI4-`,
  Mf = `-xYmWNB1Whg-`,
  Nf = `qM53G5BS9Bc-`,
  Pf = `rtXbhFy5FSY-`,
  Ff = `GVpmqo7OMIk-`,
  If = `_43CgeyFGmFQ-`,
  Lf = `Zp5qgaFVUps-`,
  Rf = `AzAHEvxnr0U-`,
  zf = `tfh0XjJ1aVs-`,
  Bf = `P2DVs4zI3m0-`,
  Vf = `_48pR-F-bW1k-`,
  Hf = `JLux7ju-RKo-`,
  Uf = `EIEhtatJRTQ-`,
  Wf = `MzTpfo8RYBw-`,
  Gf = `VaqPufYKx8Q-`,
  Kf = `_8Kwz6kTvdoE-`,
  qf = `lIaoLM-21Oo-`,
  Jf = `TVOO-N9p0K8-`,
  Yf = `YkprhXiB91k-`,
  Xf = `_7oVURCwIhGk-`,
  Zf = `oU8gTPCI3o0-`,
  Qf = `mq9hzHplxjQ-`,
  $f = `EqQMW-B3dfs-`,
  ep = `zzoHV0xJ1YA-`,
  tp = `_5F8lQ2M8P3k-`,
  np = `VfCF-ZQ-t1Q-`,
  rp = `nKyET5uTzWA-`,
  ip = `-AHSXYDfOF4-`,
  ap = `p5oa-jMus80-`,
  op = `_8Huw0bhuVy4-`,
  sp = `MzztgY2Rj4c-`,
  cp = `_8706NmnfQXs-`,
  lp = `iV7uSRTlZTA-`,
  up = `MG4lrg-uZoE-`,
  dp = `SPj5H-krsWc-`,
  fp = `-yeQz-V8Chg-`,
  pp = `p4fJJUluZXk-`,
  mp = `yYrYqMIbtak-`,
  hp = `F41F6EO-FvQ-`,
  gp = `F7RAykvpqdQ-`,
  _p = `xjxTaYXb6oI-`,
  vp = `QbCm6ej12uA-`,
  yp = `bzJkRZR49VA-`,
  bp = `jmctpXNdlv4-`,
  xp = `_2TCz8Xk0DVY-`,
  Sp = `kCVFSidxCYk-`,
  Cp = `GgdxxorjpRQ-`,
  wp = `_5MZSEzSIfVc-`,
  Tp = `U5R67N-YoRM-`,
  Ep = `Fay17FuI4P0-`,
  Dp = `w45dPZH91CI-`,
  Op = `sMwft45e6Nw-`,
  kp = `qfk9ysxw2VE-`,
  Ap = `bIU--Gqb9TQ-`,
  jp = `c0WO2yCMgRY-`,
  Mp = `pvQZzfxgIGY-`,
  Np = `SD0mJmMouRI-`,
  Pp = `m-ZL9uulUb8-`,
  Fp = `_9zYGMd8os1E-`,
  Ip = `_0tQoVIxvstU-`,
  Lp = `kGy1hOihMMA-`,
  Rp = `_9bFdGYpZmKo-`,
  zp = `_2cQ2uhNdyqQ-`,
  Bp = `VIl8PEyBAHI-`,
  Vp = `pgvHodzsGy4-`,
  Hp = `HLL60Ax8p6E-`,
  Up = `ma3Dj-zBYeA-`,
  Wp = `H0DvxF-hius-`,
  Gp = `FRd7iOMAc7Y-`,
  Kp = `wQkJjQP77E4-`,
  qp = `zNfL-zNqhpM-`,
  Jp = `nz1J7MtDwbc-`,
  Yp = `y1sLbr3qokA-`,
  Xp = `BtJo2NNNo24-`,
  Zp = `iXhp-ihdfJM-`,
  Qp = `-CstCXgP38o-`,
  $p = `Hxf6xNhSb1Y-`,
  em = `BsJ1xZMhlmA-`,
  tm = `z6RZ0i5p-JE-`,
  nm = `_8n5SNAHGcIE-`,
  rm = `ufN250kGN7A-`,
  im = `TaWWPNKFoD0-`,
  am = `cKSyNLOMypQ-`,
  om = `_0TV7mcqpaZA-`,
  sm = `Qt21Z5QTt6w-`,
  cm = `zFXp5npKjIU-`,
  lm = `apVJ-jpzILc-`,
  um = `UKglb-nH3cI-`,
  dm = `ajvQ7O-bOwU-`,
  fm = `xKjTHgFNpfM-`,
  pm = `k-ujg6g7xzM-`,
  mm = `KBj2dlNCUR4-`,
  hm = `UGooEK4GUPE-`,
  gm = `MIeEZod-Qlo-`,
  _m = `WG7UQKrxuUE-`,
  vm = `JKqAk81iueQ-`,
  ym = `QeAENi6HDOI-`,
  bm = `DNXcGV1S9ho-`,
  xm = `QZ2tGJLlHD0-`,
  Sm = `wSQgrzMxjUA-`,
  Cm = `_0LiXlEdHgSI-`,
  wm = `pF7FGjRD0Bk-`,
  Tm = `vIjykFRMFC0-`,
  Em = `wKqmuqNdJAA-`,
  Dm = `Z0V9HR76-Z4-`,
  Om = `TMt15otlNy4-`,
  km = `MZ0rJTEGX3U-`,
  Am = `Dp40pcEWgSE-`,
  jm = `_2yJKgEpoDHU-`,
  Mm = `bvYXXguXZMg-`,
  Nm = `zpDvhfbz4Ug-`,
  Pm = `R6o74NoDwrs-`,
  Fm = `ap5iTwuRzcU-`,
  Im = `_3CTo-RMH5Ps-`,
  Lm = `l2gDA5PYLt0-`,
  Rm = `YpC7S8YizDw-`,
  zm = `rViyLI-sERM-`,
  Bm = `_6p29S3mTX1g-`,
  Vm = `_5ySUaEE0h44-`,
  Hm = `NI63nEqV9NE-`,
  Um = `Euht1ynWhCI-`,
  Wm = `_-193lxmy6OU-`,
  Gm = `n-5GRrWO7Tg-`,
  Km = `REHIcP48lKo-`,
  qm = `sTacMfZs1Y0-`,
  Jm = `VZlKjOG4EoE-`,
  Ym = `mJ80ecy8cr4-`,
  Xm = `cSEXg4vwZ48-`,
  Zm = `fhsqhkW7Dxs-`,
  Qm = `_9gjqAF3x-f8-`,
  $m = `txK3RZD0kMw-`,
  eh = `EQHyPERweQ8-`,
  th = `KTKrQyio9Bk-`,
  nh = `R-wMRd9KbCU-`,
  rh = `I5rPHH9h8Kw-`,
  ih = `iGL0YdxGa-A-`,
  ah = `_1XB92ka1psE-`,
  oh = `KF5jd4iiAYw-`,
  sh = `_4DyRyAoR87s-`,
  ch = `UzfB7ij3LO0-`,
  lh = `L2szm3HCSo8-`,
  uh = `_7CIBZXZCH1w-`,
  dh = `ud9Sntaf5FE-`,
  fh = `_3MnVyfUIbc8-`,
  ph = `iOhL8Dc2OG8-`,
  mh = `hM8jzjdATcw-`,
  hh = `z80b29TtIN4-`,
  gh = `apDpHsEPbNE-`,
  _h = `iC8-bHNu7w0-`,
  vh = `MnKz4idFD68-`,
  yh = `yWUMmhfKGWg-`,
  bh = `YQ5h2L4y6cM-`,
  xh = `rVgzE15lyEY-`,
  Sh = `hA1secZv25w-`,
  Ch = `UfVUM06XeeI-`,
  wh = `bolKRAfcUog-`,
  Th = `Pn4H0W5jmlQ-`,
  Eh = `ad6iZHTvMKQ-`,
  Dh = `N7O5KMWAlQU-`,
  Oh = `R14x-UFJZjA-`,
  kh = `ktrIOsFLyMM-`,
  Ah = `fnJAWZV66cI-`,
  jh = `jXF9zybFApM-`,
  Mh = `_2yCPl6deHEI-`,
  Nh = `loiS5qzB0lU-`,
  Ph = `_26svVKnT5Mw-`,
  Fh = `rS8AU5ZGPXw-`,
  Ih = `t4R8GGRcRew-`,
  Lh = `yni-1AxrWrA-`,
  Rh = `_7kXWesRgD4Q-`,
  zh = `bMFV2PCh-F0-`,
  Bh = `trzTc3kL5Fw-`,
  Vh = `ZW-U7T-CZtg-`,
  Hh = `-Lnu0lLlAjI-`,
  Uh = `_4JGrvvQ16Sk-`,
  Wh = `bsOkxXpz7eA-`,
  Gh = `bNZimRPDdtQ-`,
  Kh = `-tMex-KuUME-`,
  qh = `mc8Eanl-Y-A-`,
  Jh = `Q-Esg3-iWSg-`,
  Yh = `ckEEJCmsUo4-`,
  Xh = `yfCnJ1RsoLA-`,
  Zh = `Wns-JtWQAuk-`,
  Qh = `LO2BApVEuGM-`,
  $h = `emqQKXtafTE-`,
  eg = `UoqjbxERCMU-`,
  tg = `BrNZJhb9aZE-`,
  ng = `kHlZAtp-lFs-`,
  rg = `uOlMQNfOS64-`,
  ig = `urZD5jZ8HBE-`,
  ag = `BURCa9I-zWQ-`,
  og = `AhIg-kVqqb0-`,
  sg = `IPLbRTKrMN4-`,
  cg = `MPos-8y-cUo-`,
  lg = `_4PY7p-3dJdI-`,
  ug = `jhAkD-LakYU-`,
  dg = `n2FPNBA2nVY-`,
  fg = `wzGKxi9WUFM-`,
  pg = `PxkJo3u-KbA-`,
  mg = `Q-pefbJ4c44-`,
  hg = `Z0SSuhxggBg-`,
  gg = `_3vt-3QUPpZU-`,
  _g = `W3LmyWy4o7k-`,
  vg = `nRrhF3OQZfM-`,
  yg = `iOourBSSNJI-`,
  bg = `lKPCxQB6NYQ-`,
  xg = `p16UHGpVWdA-`,
  Sg = `f5ZXvbui4yw-`,
  Cg = `_4dPMzLKnLec-`,
  wg = `GkK7-hm-i-8-`,
  Tg = `AUfNi5bwzjo-`,
  Eg = `_-2fTA8R3lvU-`,
  Dg = `QgCGRjvNB6Y-`,
  Og = `xFGdxITklss-`,
  kg = `MOJw-dk2QCg-`,
  Ag = `_3qa8PMymQmk-`,
  jg = `L4tv-enRNH4-`,
  Mg = `NKcJzPXDCxg-`,
  Ng = `qkYH2R7-aGk-`,
  Pg = `t0gpFXjexlY-`,
  Fg = `bhJHDJJbGbQ-`,
  Ig = `mYdGVX-JgtA-`,
  Lg = `Q5CoBIdqM70-`,
  Rg = `MiYbV8nvnso-`,
  zg = `sOPHJwQQmso-`,
  Bg = `LvnyxMZlwz0-`,
  Vg = `EpBU0uY0Tto-`,
  Hg = `Yq08NQxUQws-`,
  Ug = `z9xkpJULRsk-`,
  Wg = `ibqs7kjifNs-`,
  Gg = `QbFD1DOZ2Nc-`,
  Kg = `PR0KeqNpF4Y-`,
  qg = `kr-rq-SILKI-`,
  Jg = `_9DEpFFwpFTE-`,
  Yg = `mHURE8brOWg-`,
  Xg = `_1huu90kvH6s-`,
  Zg = `i778V980rJg-`,
  Qg = `N31EIVMl-E4-`,
  $g = `p5EYlBjRqvs-`,
  e_ = `_0X-iP7qFtw4-`,
  t_ = `vrJKODUTPlI-`,
  n_ = `A-okIssqgVE-`,
  r_ = `_0VOWnq4k6lw-`,
  i_ = `_3F-7YMbm-wY-`,
  a_ = `a6jQ4ywZfXs-`,
  o_ = `eA9RNRMFSo8-`,
  s_ = `b8-sShAKh1A-`,
  c_ = `a2ntH4JP5n8-`,
  l_ = `_4NLOIz5EWFQ-`,
  u_ = `y45QauRS46Y-`,
  d_ = `_5bSxgH2Kuzw-`,
  f_ = `D-zQuQvnXAU-`,
  p_ = `PR6DOVc1Qng-`,
  m_ = `Qnz5dzN-CyM-`,
  h_ = `xY7-ZH5pHog-`,
  g_ = {
    confettiDurationMs: xd,
    goldfettiDurationMs: Sd,
    goldfettiColorsNum: `3`,
    goldfettiEmojiNum: `4`,
    crackerDurationMs: Cd,
    balloonsDurationMs: wd,
    balloonsDurationS: Td,
    balloonsDurationJitterS: Ed,
    balloonsDurationMaxMs: Dd,
    snowballDurationMs: Od,
    snowballSpeed: `1s`,
    "animation-container": `qjpNNRzk6dU-`,
    Snowflake: Ad,
    "Snowflake-0": `E8NNSPAhEDs-`,
    "snowflake-0": `MUqCiedZFyE-`,
    "Snowflake-1": `bC2dIlscD-U-`,
    "snowflake-1": `Dp-ZRiIyGNc-`,
    "Snowflake-2": `jT-pTrpyYVQ-`,
    "snowflake-2": `jX16Lnzasz4-`,
    "Snowflake-3": `szj95vkZY3c-`,
    "snowflake-3": `B63sd-KwGOo-`,
    "Snowflake-4": `Tr-hP4XSmEo-`,
    "snowflake-4": `agg8gHeoLnQ-`,
    "Snowflake-5": `_5aM2lSnfe8o-`,
    "snowflake-5": `U2GFCBhr38A-`,
    "Snowflake-6": `xzFYisC9yKc-`,
    "snowflake-6": `c72fZpK8piA-`,
    "Snowflake-7": `Udwg0l-iA5U-`,
    "snowflake-7": `sd-HwZ7XTG8-`,
    "Snowflake-8": `GB7VRoVIS-U-`,
    "snowflake-8": `_07u1bXFcW44-`,
    "Snowflake-9": `evHwd--K2VY-`,
    "snowflake-9": `AwTNxlixw60-`,
    "Snowflake-10": `YdSgo68pCeg-`,
    "snowflake-10": `RQbViS1zads-`,
    "Snowflake-11": `xPsLXUovU9w-`,
    "snowflake-11": `mfBFO-jOx0M-`,
    "Snowflake-12": `ACRU78-Wo-s-`,
    "snowflake-12": `WD3hXw50RDw-`,
    "Snowflake-13": `SgStUwdK4oU-`,
    "snowflake-13": `o9zFm3EovlA-`,
    "Snowflake-14": `Uht4TB0cEzo-`,
    "snowflake-14": `cHJQImT9Vl8-`,
    "Snowflake-15": `Nn16BeI2BmA-`,
    "snowflake-15": `aCLVX8zgXNo-`,
    "Snowflake-16": `MfQaL5m6t9M-`,
    "snowflake-16": `XuQL00tyLZg-`,
    "Snowflake-17": `NmUcmCVVLhg-`,
    "snowflake-17": `qcWXUBeo-cs-`,
    "Snowflake-18": `LJjNlXDfS-E-`,
    "snowflake-18": `CwQU-TCDStE-`,
    "Snowflake-19": `-GUAbBuliKQ-`,
    "snowflake-19": `LmyVsAHTpvM-`,
    "Snowflake-20": `gbjcmMoFqSE-`,
    "snowflake-20": `_64NhUzZ5br4-`,
    confetti: bf,
    "confetti-0": `_2biMjcKxMko-`,
    "drop-0": `Z52jHvYPIXI-`,
    "confetti-1": `NqpEQ-8n7fw-`,
    "drop-1": `UccshVIXHRQ-`,
    "confetti-2": `Kz1s2VK-9bg-`,
    "drop-2": `oUIe1k0-qd0-`,
    "confetti-3": `SVoQPv-IfwM-`,
    "drop-3": `K1P8vn7jQPo-`,
    "confetti-4": `rLezqDzkvgM-`,
    "drop-4": `MOIyPmLZn3s-`,
    "confetti-5": `fyxNqISbZI4-`,
    "drop-5": `-xYmWNB1Whg-`,
    "confetti-6": `qM53G5BS9Bc-`,
    "drop-6": `rtXbhFy5FSY-`,
    "confetti-7": `GVpmqo7OMIk-`,
    "drop-7": `_43CgeyFGmFQ-`,
    "confetti-8": `Zp5qgaFVUps-`,
    "drop-8": `AzAHEvxnr0U-`,
    "confetti-9": `tfh0XjJ1aVs-`,
    "drop-9": `P2DVs4zI3m0-`,
    "confetti-10": `_48pR-F-bW1k-`,
    "drop-10": `JLux7ju-RKo-`,
    "confetti-11": `EIEhtatJRTQ-`,
    "drop-11": `MzTpfo8RYBw-`,
    "confetti-12": `VaqPufYKx8Q-`,
    "drop-12": `_8Kwz6kTvdoE-`,
    "confetti-13": `lIaoLM-21Oo-`,
    "drop-13": `TVOO-N9p0K8-`,
    "confetti-14": `YkprhXiB91k-`,
    "drop-14": `_7oVURCwIhGk-`,
    "confetti-15": `oU8gTPCI3o0-`,
    "drop-15": `mq9hzHplxjQ-`,
    "confetti-16": `EqQMW-B3dfs-`,
    "drop-16": `zzoHV0xJ1YA-`,
    "confetti-17": `_5F8lQ2M8P3k-`,
    "drop-17": `VfCF-ZQ-t1Q-`,
    "confetti-18": `nKyET5uTzWA-`,
    "drop-18": `-AHSXYDfOF4-`,
    "confetti-19": `p5oa-jMus80-`,
    "drop-19": `_8Huw0bhuVy4-`,
    "confetti-20": `MzztgY2Rj4c-`,
    "drop-20": `_8706NmnfQXs-`,
    "confetti-21": `iV7uSRTlZTA-`,
    "drop-21": `MG4lrg-uZoE-`,
    "confetti-22": `SPj5H-krsWc-`,
    "drop-22": `-yeQz-V8Chg-`,
    "confetti-23": `p4fJJUluZXk-`,
    "drop-23": `yYrYqMIbtak-`,
    "confetti-24": `F41F6EO-FvQ-`,
    "drop-24": `F7RAykvpqdQ-`,
    "confetti-25": `xjxTaYXb6oI-`,
    "drop-25": `QbCm6ej12uA-`,
    "confetti-26": `bzJkRZR49VA-`,
    "drop-26": `jmctpXNdlv4-`,
    "confetti-27": `_2TCz8Xk0DVY-`,
    "drop-27": `kCVFSidxCYk-`,
    "confetti-28": `GgdxxorjpRQ-`,
    "drop-28": `_5MZSEzSIfVc-`,
    "confetti-29": `U5R67N-YoRM-`,
    "drop-29": `Fay17FuI4P0-`,
    "confetti-30": `w45dPZH91CI-`,
    "drop-30": `sMwft45e6Nw-`,
    "confetti-31": `qfk9ysxw2VE-`,
    "drop-31": `bIU--Gqb9TQ-`,
    "confetti-32": `c0WO2yCMgRY-`,
    "drop-32": `pvQZzfxgIGY-`,
    "confetti-33": `SD0mJmMouRI-`,
    "drop-33": `m-ZL9uulUb8-`,
    "confetti-34": `_9zYGMd8os1E-`,
    "drop-34": `_0tQoVIxvstU-`,
    "confetti-35": `kGy1hOihMMA-`,
    "drop-35": `_9bFdGYpZmKo-`,
    "confetti-36": `_2cQ2uhNdyqQ-`,
    "drop-36": `VIl8PEyBAHI-`,
    "confetti-37": `pgvHodzsGy4-`,
    "drop-37": `HLL60Ax8p6E-`,
    "confetti-38": `ma3Dj-zBYeA-`,
    "drop-38": `H0DvxF-hius-`,
    "confetti-39": `FRd7iOMAc7Y-`,
    "drop-39": `wQkJjQP77E4-`,
    "confetti-40": `zNfL-zNqhpM-`,
    "drop-40": `nz1J7MtDwbc-`,
    "confetti-41": `y1sLbr3qokA-`,
    "drop-41": `BtJo2NNNo24-`,
    "confetti-42": `iXhp-ihdfJM-`,
    "drop-42": `-CstCXgP38o-`,
    "confetti-43": `Hxf6xNhSb1Y-`,
    "drop-43": `BsJ1xZMhlmA-`,
    "confetti-44": `z6RZ0i5p-JE-`,
    "drop-44": `_8n5SNAHGcIE-`,
    "confetti-45": `ufN250kGN7A-`,
    "drop-45": `TaWWPNKFoD0-`,
    "confetti-46": `cKSyNLOMypQ-`,
    "drop-46": `_0TV7mcqpaZA-`,
    "confetti-47": `Qt21Z5QTt6w-`,
    "drop-47": `zFXp5npKjIU-`,
    "confetti-48": `apVJ-jpzILc-`,
    "drop-48": `UKglb-nH3cI-`,
    "confetti-49": `ajvQ7O-bOwU-`,
    "drop-49": `xKjTHgFNpfM-`,
    "confetti-50": `k-ujg6g7xzM-`,
    "drop-50": `KBj2dlNCUR4-`,
    "confetti-51": `UGooEK4GUPE-`,
    "drop-51": `MIeEZod-Qlo-`,
    "confetti-52": `WG7UQKrxuUE-`,
    "drop-52": `JKqAk81iueQ-`,
    "confetti-53": `QeAENi6HDOI-`,
    "drop-53": `DNXcGV1S9ho-`,
    "confetti-54": `QZ2tGJLlHD0-`,
    "drop-54": `wSQgrzMxjUA-`,
    "confetti-55": `_0LiXlEdHgSI-`,
    "drop-55": `pF7FGjRD0Bk-`,
    "confetti-56": `vIjykFRMFC0-`,
    "drop-56": `wKqmuqNdJAA-`,
    "confetti-57": `Z0V9HR76-Z4-`,
    "drop-57": `TMt15otlNy4-`,
    "confetti-58": `MZ0rJTEGX3U-`,
    "drop-58": `Dp40pcEWgSE-`,
    "confetti-59": `_2yJKgEpoDHU-`,
    "drop-59": `bvYXXguXZMg-`,
    "confetti-60": `zpDvhfbz4Ug-`,
    "drop-60": `R6o74NoDwrs-`,
    "confetti-61": `ap5iTwuRzcU-`,
    "drop-61": `_3CTo-RMH5Ps-`,
    "confetti-62": `l2gDA5PYLt0-`,
    "drop-62": `YpC7S8YizDw-`,
    "confetti-63": `rViyLI-sERM-`,
    "drop-63": `_6p29S3mTX1g-`,
    "confetti-64": `_5ySUaEE0h44-`,
    "drop-64": `NI63nEqV9NE-`,
    "confetti-65": `Euht1ynWhCI-`,
    "drop-65": `_-193lxmy6OU-`,
    "confetti-66": `n-5GRrWO7Tg-`,
    "drop-66": `REHIcP48lKo-`,
    "confetti-67": `sTacMfZs1Y0-`,
    "drop-67": `VZlKjOG4EoE-`,
    "confetti-68": `mJ80ecy8cr4-`,
    "drop-68": `cSEXg4vwZ48-`,
    "confetti-69": `fhsqhkW7Dxs-`,
    "drop-69": `_9gjqAF3x-f8-`,
    "confetti-70": `txK3RZD0kMw-`,
    "drop-70": `EQHyPERweQ8-`,
    "confetti-71": `KTKrQyio9Bk-`,
    "drop-71": `R-wMRd9KbCU-`,
    "confetti-72": `I5rPHH9h8Kw-`,
    "drop-72": `iGL0YdxGa-A-`,
    "confetti-73": `_1XB92ka1psE-`,
    "drop-73": `KF5jd4iiAYw-`,
    "confetti-74": `_4DyRyAoR87s-`,
    "drop-74": `UzfB7ij3LO0-`,
    "confetti-75": `L2szm3HCSo8-`,
    "drop-75": `_7CIBZXZCH1w-`,
    "confetti-76": `ud9Sntaf5FE-`,
    "drop-76": `_3MnVyfUIbc8-`,
    "confetti-77": `iOhL8Dc2OG8-`,
    "drop-77": `hM8jzjdATcw-`,
    "confetti-78": `z80b29TtIN4-`,
    "drop-78": `apDpHsEPbNE-`,
    "confetti-79": `iC8-bHNu7w0-`,
    "drop-79": `MnKz4idFD68-`,
    "confetti-80": `yWUMmhfKGWg-`,
    "drop-80": `YQ5h2L4y6cM-`,
    "confetti-81": `rVgzE15lyEY-`,
    "drop-81": `hA1secZv25w-`,
    "confetti-82": `UfVUM06XeeI-`,
    "drop-82": `bolKRAfcUog-`,
    "confetti-83": `Pn4H0W5jmlQ-`,
    "drop-83": `ad6iZHTvMKQ-`,
    "confetti-84": `N7O5KMWAlQU-`,
    "drop-84": `R14x-UFJZjA-`,
    "confetti-85": `ktrIOsFLyMM-`,
    "drop-85": `fnJAWZV66cI-`,
    "confetti-86": `jXF9zybFApM-`,
    "drop-86": `_2yCPl6deHEI-`,
    "confetti-87": `loiS5qzB0lU-`,
    "drop-87": `_26svVKnT5Mw-`,
    "confetti-88": `rS8AU5ZGPXw-`,
    "drop-88": `t4R8GGRcRew-`,
    "confetti-89": `yni-1AxrWrA-`,
    "drop-89": `_7kXWesRgD4Q-`,
    "confetti-90": `bMFV2PCh-F0-`,
    "drop-90": `trzTc3kL5Fw-`,
    "confetti-91": `ZW-U7T-CZtg-`,
    "drop-91": `-Lnu0lLlAjI-`,
    "confetti-92": `_4JGrvvQ16Sk-`,
    "drop-92": `bsOkxXpz7eA-`,
    "confetti-93": `bNZimRPDdtQ-`,
    "drop-93": `-tMex-KuUME-`,
    "confetti-94": `mc8Eanl-Y-A-`,
    "drop-94": `Q-Esg3-iWSg-`,
    "confetti-95": `ckEEJCmsUo4-`,
    "drop-95": `yfCnJ1RsoLA-`,
    "confetti-96": `Wns-JtWQAuk-`,
    "drop-96": `LO2BApVEuGM-`,
    "confetti-97": `emqQKXtafTE-`,
    "drop-97": `UoqjbxERCMU-`,
    "confetti-98": `BrNZJhb9aZE-`,
    "drop-98": `kHlZAtp-lFs-`,
    "confetti-99": `uOlMQNfOS64-`,
    "drop-99": `urZD5jZ8HBE-`,
    cracker: ag,
    "cracker-left": `AhIg-kVqqb0-`,
    "cracker-right": `IPLbRTKrMN4-`,
    goldfetti: cg,
    "goldfetti-fragment": `_4PY7p-3dJdI-`,
    "goldfetti-color-1": `jhAkD-LakYU-`,
    "goldfetti-color-2": `n2FPNBA2nVY-`,
    "goldfetti-color-3": `wzGKxi9WUFM-`,
    "goldfetti-emoji-1": `PxkJo3u-KbA-`,
    "goldfetti-emoji-2": `Q-pefbJ4c44-`,
    "goldfetti-emoji-3": `Z0SSuhxggBg-`,
    "goldfetti-emoji-4": `_3vt-3QUPpZU-`,
    balloons: _g,
    lantern_glow: vg,
    snowball_fragment: yg,
    "snowball-container": `lKPCxQB6NYQ-`,
    snowball: xg,
    SnowballImage: Sg,
    SnowballImageCW: Cg,
    "snowball-rotate-cw": `GkK7-hm-i-8-`,
    SnowballImageCCW: Tg,
    "snowball-rotate-ccw": `_-2fTA8R3lvU-`,
    "snowball-path": `QgCGRjvNB6Y-`,
    "snowball-residue": `xFGdxITklss-`,
    "snowball-chunk": `MOJw-dk2QCg-`,
    "snowball-chunk-1": `_3qa8PMymQmk-`,
    "snowball-chunk-2": `L4tv-enRNH4-`,
    "snowball-chunk-3": `NKcJzPXDCxg-`,
    "snowball-chunk-4": `qkYH2R7-aGk-`,
    "slide-out-tl": `t0gpFXjexlY-`,
    "slide-out-tr": `bhJHDJJbGbQ-`,
    "slide-out-bottom": `mYdGVX-JgtA-`,
    pyro: Lg,
    before: Rg,
    after: zg,
    bang: Bg,
    gravity: Vg,
    position: Hg,
    pyroBodyShake: Ug,
    "pyro-body-shake": `ibqs7kjifNs-`,
    pyroBodyShake2: Gg,
    "pyro-body-shake2": `PR0KeqNpF4Y-`,
    FireworkPath: qg,
    "firework-path-animation": `_9DEpFFwpFTE-`,
    FireworkContainer: Yg,
    FireworkPNG: Xg,
    balloon_small_1: Zg,
    balloon_move_right: Qg,
    balloon_move_left: $g,
    balloon_big_1: e_,
    balloon_big_2: t_,
    balloon_small_2: n_,
    balloon_small_3: r_,
    "snowball-path-1": `_3F-7YMbm-wY-`,
    "snowball-path-2": `a6jQ4ywZfXs-`,
    "snowball-path-3": `eA9RNRMFSo8-`,
    "snowball-path-4": `b8-sShAKh1A-`,
    "snowball-path-5": `a2ntH4JP5n8-`,
    "snowball-path-6": `_4NLOIz5EWFQ-`,
    fireworkBigX: u_,
    fireworkBigY: d_,
    fireworkSmallX: f_,
    fireworkSmallY: p_,
    fireworkLongX: m_,
    fireworkLongY: h_,
  };
function __(e, t, n) {
  return M.COMMUNITY_CDN_ASSET_URL + e + `/roomeffects/` + t + `/` + n;
}
var v_ = class extends z.Component {
  m_strSaleId;
  constructor(e) {
    (super(e), (this.m_strSaleId = this.props.sale));
  }
  getAsset(e) {
    return __(this.m_strSaleId, this.props.effect.name, e);
  }
};
function y_(e) {
  let t = (0, z.useRef)({ bSet: !1 });
  return (
    t.current.bSet || (t.current = { bSet: !0, value: e() }), t.current.value
  );
}
function b_(e, t) {
  y_(() => setTimeout(e, t));
}
function x_(e) {
  let [t, n] = (0, z.useState)(!1);
  return (b_(() => n(!0), e), t);
}
var S_ = ({ msDelay: e, children: t }) =>
    x_(e) ? (0, W.jsx)(z.Fragment, { children: t }) : null,
  C_ = 7e3,
  w_ = class extends z.Component {
    m_refContainer = z.createRef();
    m_rgFireworks = [];
    m_nCurrentDelay = 0;
    constructor(e) {
      (super(e), (this.state = { bReady: !1 }));
    }
    CreateFireworks(e) {
      ((this.m_nCurrentDelay = 0),
        this.AddCluster(e),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(e),
        (this.m_nCurrentDelay += 200),
        this.AddCluster(e),
        (this.m_nCurrentDelay += 600),
        this.AddCluster(e),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(e),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(e),
        (this.m_nCurrentDelay += 200),
        this.RenderLong(e),
        this.AddCluster(e),
        this.RenderLong(e),
        (this.m_nCurrentDelay += 200),
        this.AddCluster(e));
    }
    TestRender(e) {
      (N(0, 70), N(0, 70));
      for (let t = 0; t < 1; t++)
        (this.m_rgFireworks.push({
          x: `20%`,
          y: `20%`,
          nHueRotation: 0,
          nDelay: this.m_nCurrentDelay,
          flScale: e,
          burst: T_,
        }),
          (this.m_nCurrentDelay += 500));
      (this.m_rgFireworks.push({
        x: `0%`,
        y: `0%`,
        nHueRotation: 0,
        nDelay: this.m_nCurrentDelay,
        flScale: e,
        burst: E_,
      }),
        this.m_rgFireworks.push({
          x: `30%`,
          y: `30%`,
          nHueRotation: 0,
          nDelay: this.m_nCurrentDelay,
          flScale: e,
          burst: D_,
        }));
    }
    CalcHueRotation() {
      return this.props.sale == `lny2020` ? 360 + N(-30, 10) : N(0, 360);
    }
    AddCluster(e) {
      let t = N(-5, 50),
        n = N(-10, 50),
        r = this.CalcHueRotation();
      this.m_rgFireworks.push({
        x: `${t}%`,
        y: `${n}%`,
        nHueRotation: r,
        nDelay: this.m_nCurrentDelay,
        flScale: e,
        burst: E_,
      });
      let i = Math.random() * Math.PI * 2,
        a = Math.floor(64 * e),
        o = Math.floor(60 * e),
        s = Math.floor(10 * e),
        c = 0;
      for (let l = 0; l < 3; l++) {
        let u = Math.cos(i + c) * o,
          d = Math.sin(i + c) * o + s,
          f = `calc( ${t}% + ${a + u}px )`,
          p = `calc( ${n}% + ${a + d}px )`;
        (l < 2 && (this.m_nCurrentDelay += 200),
          (r = this.CalcHueRotation()),
          this.m_rgFireworks.push({
            x: f,
            y: p,
            nHueRotation: r,
            nDelay: this.m_nCurrentDelay,
            flScale: e,
            burst: D_,
          }),
          (c += 2.09));
      }
    }
    RenderLong(e) {
      let t = N(20, 60),
        n = N(-5, 50),
        r = this.CalcHueRotation();
      this.m_rgFireworks.push({
        x: `${t}%`,
        y: `${n}%`,
        nHueRotation: r,
        nDelay: this.m_nCurrentDelay,
        flScale: e,
        burst: T_,
      });
    }
    componentDidMount() {
      if (!this.m_refContainer.current || this.m_rgFireworks.length > 0) return;
      let e = this.m_refContainer.current,
        t = e.offsetWidth,
        n = e.offsetHeight,
        r = Je(t, 400, 1080, 0.5, 2);
      ((r = Ve(r, 0.5, 2)),
        console.log(t, n, r),
        this.CreateFireworks(r),
        this.setState({ bReady: !0 }));
    }
    render() {
      let e = [];
      return (
        this.state.bReady &&
          this.m_rgFireworks.forEach((t, n) => {
            let r = `${n}`,
              i = {
                top: t.y,
                left: t.x,
                filter: `hue-rotate(${t.nHueRotation}deg)`,
              };
            e.push(
              (0, W.jsx)(
                t.burst,
                {
                  style: i,
                  msDelay: t.nDelay,
                  scale: t.flScale,
                  sale: this.props.sale,
                },
                r,
              ),
            );
          }),
        (0, W.jsx)(`div`, {
          ref: this.m_refContainer,
          className: Yg,
          children: e,
        })
      );
    }
  };
function T_(e) {
  let t = __(e.sale, `fireworks`, `long_sheet.png`),
    n = e.style;
  return (
    (n.backgroundImage = `url(${t})`),
    (n.width = 256),
    (n.height = 256),
    (n.animation = `${m_} 0.2s steps(9) 10, ${h_} 2.0s steps(10) forwards`),
    (n.transformOrigin = `0 0`),
    (n.transform = `scale( ${e.scale} )`),
    (0, W.jsx)(S_, {
      msDelay: e.msDelay,
      children: (0, W.jsx)(`div`, { style: e.style, className: Xg }),
    })
  );
}
function E_(e) {
  let t = __(e.sale, `fireworks`, `big_sheet.png`),
    n = e.style;
  return (
    (n.backgroundImage = `url(${t})`),
    (n.width = 256),
    (n.height = 256),
    (n.animation = `${u_} 0.2s steps(9) 4, ${d_} 0.8s steps(4) forwards`),
    (n.transformOrigin = `0 0`),
    (n.transform = `scale( ${e.scale} )`),
    (0, W.jsx)(S_, {
      msDelay: e.msDelay,
      children: (0, W.jsx)(`div`, { style: e.style, className: Xg }),
    })
  );
}
function D_(e) {
  let t = __(e.sale, `fireworks`, `small_sheet.png`),
    n = e.style;
  return (
    (n.backgroundImage = `url(${t})`),
    (n.width = 256),
    (n.height = 256),
    (n.animation = `${f_} 0.15s steps(10) 6, ${p_} 0.9s steps(6) forwards`),
    (n.transformOrigin = `0 0`),
    (n.transform = `scale( ${e.scale / 2} )`),
    (0, W.jsx)(S_, {
      msDelay: e.msDelay,
      children: (0, W.jsx)(`div`, { style: e.style, className: Xg }),
    })
  );
}
var O_ = class e extends v_ {
  m_x;
  m_y;
  m_nRotate;
  m_splatRots;
  m_nPathAnimation;
  m_nKeyID;
  static sm_nUnique = 0;
  constructor(t) {
    (super(t),
      (this.m_x = N(0, 70) + `%`),
      (this.m_y = N(0, 70) + `%`),
      (this.m_nRotate = Math.floor(Math.random() * 90) - 45),
      (this.m_splatRots = [
        Math.random() * 360,
        Math.random() * 360,
        Math.random() * 360,
      ]),
      (this.m_nPathAnimation = N(1, 6)),
      (this.m_nKeyID = e.sm_nUnique++),
      (this.m_strSaleId = `winter2019`));
  }
  fragment(e, ...t) {
    let n = t.map((e) => bd[e]);
    return (
      n.push(yg),
      (0, W.jsx)(`img`, { src: this.getAsset(e), className: n.join(` `) })
    );
  }
  Snowball(e, t, ...n) {
    let r = e < 0 ? Cg : Tg;
    e > -5 && e < 5 && (r = ``);
    let i = n.map((e) => bd[e]);
    return (
      i.push(yg),
      (0, W.jsx)(`div`, {
        style: { display: `inline-block` },
        className: i.join(` `),
        children: (0, W.jsx)(`img`, {
          style: { transform: `rotation( 360deg )` },
          className: `${Sg} ${r}`,
          src: this.getAsset(t),
        }),
      })
    );
  }
  residue() {
    return (0, W.jsxs)(z.Fragment, {
      children: [
        (0, W.jsx)(`div`, {
          style: { transform: `rotate(${this.m_splatRots[0]}deg)` },
          children: this.fragment(`splat1.png`, `snowball-residue`),
        }),
        (0, W.jsx)(`div`, {
          style: { transform: `rotate(${this.m_splatRots[1]}deg)` },
          children: this.fragment(`splat2.png`, `snowball-residue`),
        }),
        (0, W.jsx)(`div`, {
          style: { transform: `rotate(${this.m_splatRots[2]}deg)` },
          children: this.fragment(`splat3.png`, `snowball-residue`),
        }),
      ],
    });
  }
  render() {
    let e = { animationName: bd[`snowball-path-${this.m_nPathAnimation}`] };
    return (0, W.jsx)(
      z.Fragment,
      {
        children: (0, W.jsx)(`div`, {
          className: Dg,
          style: e,
          children: (0, W.jsxs)(`div`, {
            className: bg,
            style: {
              left: this.m_x,
              top: this.m_y,
              transform: `rotate( ${this.m_nRotate}deg )`,
            },
            children: [
              this.Snowball(this.m_nRotate, `snowball.png`, `snowball`),
              this.fragment(`slide-out-tl.png`, `slide-out-tl`),
              this.fragment(`slide-out-tr.png`, `slide-out-tr`),
              this.fragment(`slide-out-bottom.png`, `slide-out-bottom`),
              this.residue(),
              this.fragment(
                `snowball_1.png`,
                `snowball-chunk`,
                `snowball-chunk-1`,
              ),
              this.fragment(
                `snowball_2.png`,
                `snowball-chunk`,
                `snowball-chunk-2`,
              ),
              this.fragment(
                `snowball_3.png`,
                `snowball-chunk`,
                `snowball-chunk-3`,
              ),
              this.fragment(
                `snowball_4.png`,
                `snowball-chunk`,
                `snowball-chunk-4`,
              ),
            ],
          }),
        }),
      },
      `${this.m_nKeyID}`,
    );
  }
};
function k_(e) {
  let t = e.data,
    n = __(e.sale, e.effect.name, `${t.strImage}.png`),
    r = null;
  if (t.SOverlay) {
    let n = t.SOverlay
        ? __(e.sale, e.effect.name, `${t.SOverlay.strImage}.png`)
        : null,
      i = { animationDuration: `${t.SOverlay.nDuration}s` };
    r = (0, W.jsx)(`img`, {
      src: n,
      className: bd[t.SOverlay.strClass],
      style: i,
    });
  }
  let i = {
    animationDuration: `${t.nDuration}s`,
    animationName: bd[t.strAnimation],
    marginLeft: `${t.nOffset}%`,
  };
  return (0, W.jsxs)(`div`, {
    style: i,
    className: _g,
    children: [
      (0, W.jsx)(`img`, {
        src: n,
        style: { maxWidth: `100%`, position: `absolute` },
      }),
      r,
    ],
  });
}
var A_ = class extends v_ {
    m_rgBalloons = [];
    m_rgImages;
    m_nNextImage = 0;
    constructor(e) {
      switch ((super(e), e.sale)) {
        case `lny2020`:
          this.m_rgImages = [`orange`, `peach`, `yellow`];
          break;
        default:
          this.m_rgImages = [
            `balloon_blue`,
            `balloon_cyan`,
            `balloon_green`,
            `balloon_purple`,
            `balloon_red`,
            `balloon_yellow`,
          ];
      }
      (St(this.m_rgImages), this.GenerateBalloons());
    }
    GetNextImage() {
      let e = this.m_rgImages[this.m_nNextImage % this.m_rgImages.length];
      return (this.m_nNextImage++, e);
    }
    GenerateDuration() {
      return parseFloat(Td) + parseFloat(Ed) * Math.random();
    }
    GenerateBalloons() {
      let e = [`balloon_small_1`, `balloon_small_2`, `balloon_small_3`],
        t = [`balloon_big_1`, `balloon_big_2`],
        n = [`balloon_move_left`, `balloon_move_right`];
      this.m_rgBalloons = [];
      for (let t of e) {
        let e = N(-10, 10);
        this.m_rgBalloons.push(this.GenerateSingleBalloon(t, e));
      }
      let r = [70, 20];
      St(r);
      let i = r[1] == 20;
      for (let e of t) {
        let t = N(-10, 10) + r.pop();
        this.m_rgBalloons.push(this.GenerateSingleBalloon(e, t));
      }
      let a = n[N(0, 1)];
      i && (a = `balloon_move_left`);
      let o = N(-10, 10);
      this.m_rgBalloons.push(this.GenerateSingleBalloon(a, o));
    }
    GenerateSingleBalloon(e, t) {
      let n = this.GetNextImage(),
        r = {
          strAnimation: e,
          strImage: n,
          nDuration: this.GenerateDuration(),
          nOffset: t,
        };
      return (
        this.props.sale == `lny2020` &&
          (r.SOverlay = {
            strImage: n + `-glow`,
            strClass: `lantern_glow`,
            nDuration: 1 + Math.random() * 4,
          }),
        r
      );
    }
    render() {
      return (0, W.jsx)(z.Fragment, {
        children: this.m_rgBalloons.map((e, t) =>
          (0, W.jsx)(
            k_,
            { data: e, effect: this.props.effect, sale: this.m_strSaleId },
            `${t}`,
          ),
        ),
      });
    }
  },
  j_ = class {
    m_seed;
    constructor(e) {
      this.m_seed = e;
    }
    next() {
      let e = Math.sin(this.m_seed++) * 1e3;
      return e - Math.floor(e);
    }
  },
  M_ = 1e4;
function N_(e) {
  let t = [],
    n = new j_(e.timestamp);
  for (let r = 0; r < 150; r++) {
    let i = n.next(),
      a = {
        left: `${n.next() * 100}%`,
        animationDuration: `${(1 - i) * 3 + 4}s`,
        animationDelay: `${i + n.next() * 4}s`,
      };
    t.push(
      (0, W.jsxs)(
        `div`,
        {
          style: a,
          className: S(Ad, bd[`Snowflake-${r % 20}`]),
          children: [P_(i), P_(i + 1)],
        },
        e.timestamp + `_` + r,
      ),
    );
  }
  return (0, W.jsxs)(z.Fragment, { children: [` `, t, ` `] });
}
function P_(e) {
  let t = new j_(e),
    n = t.next() * 0.8 + 0.5,
    r = `${(t.next() + e) * 10 + 10}px`,
    i = {
      opacity: n,
      width: r,
      height: r,
      margin: `${t.next() * 30 + 15}px`,
      filter: `hue-rotate(${t.next() * 90 - 30}deg) saturate(100%)`,
    },
    a = 1 + Math.floor(t.next() * 5),
    o =
      M.COMMUNITY_CDN_ASSET_URL + `winter2019/roomeffects/96px/flake_${a}.png`;
  return (0, W.jsx)(`img`, { style: i, src: o });
}
var F_ = parseInt(Dd),
  I_ = parseInt(Od);
function L_(e, t) {
  return () => {
    let n = M.COMMUNITY_CDN_ASSET_URL + t + `/roomeffects/96px/` + e + `.png`;
    return (0, W.jsx)(`img`, { style: { width: `100%` }, src: n });
  };
}
function R_(e, t, n, r) {
  return {
    timeout: n,
    renderButton: L_(e, t),
    renderEffectIcon: L_(e, t),
    buttonToken: `#ChatEntryButton_Send` + ue(e),
    locToken: `#ChatRoom_RoomEffect` + ue(e),
    render: r,
  };
}
function z_(e, t, n) {
  return R_(e, `winter2019`, t, n);
}
var B_ = {
    lny2020_lanterns: R_(`lny2020_lanterns`, `lny2020`, F_, (e) =>
      (0, W.jsx)(A_, { effect: e, sale: `lny2020` }),
    ),
    lny2020_firework: R_(`lny2020_firework`, `lny2020`, C_, () =>
      (0, W.jsx)(w_, { sale: `lny2020` }),
    ),
    lny2020_confetti: R_(`lny2020_confetti`, `lny2020`, Ne, () =>
      (0, W.jsx)(Pe, { eType: Fe.LNY2020 }),
    ),
    snowball: z_(`snowball`, I_, (e) =>
      (0, W.jsx)(O_, { effect: e, sale: `winter2019` }),
    ),
    balloons: z_(`balloons`, F_, (e) =>
      (0, W.jsx)(A_, { effect: e, sale: `winter2019` }),
    ),
    confetti: z_(`confetti`, Ne, () => (0, W.jsx)(Pe, { eType: Fe.Default })),
    goldfetti: z_(`goldfetti`, Ne, () => (0, W.jsx)(Pe, { eType: Fe.Gold })),
    firework: z_(`firework`, C_, () => (0, W.jsx)(w_, { sale: `winter2019` })),
    snow: z_(`snow`, M_, N_),
  },
  V_ = class extends z.Component {
    render() {
      return (0, W.jsx)(`div`, {
        className: kd,
        children: this.props.effectManager.m_rgRunningEffects.map((e) =>
          (0, W.jsx)(z.Fragment, { children: e.render() }, e.timestamp),
        ),
      });
    }
  };
V_ = w([g], V_);
var H_ = class e {
    static k_QueueForEffect = {
      snowball: `snowball`,
      snow: `confetti_snow`,
      confetti: `confetti_snow`,
      goldfetti: `confetti_snow`,
      firework: `festive`,
      balloons: `festive`,
      lny2020_lanterns: `festive`,
      lny2020_firework: `festive`,
      lny2020_confetti: `confetti_snow`,
    };
    name;
    timestamp;
    expires;
    settings;
    constructor(e, t) {
      if (!t.hasOwnProperty(e))
        throw Error(`Room effect ` + e + ` is not defined.`);
      ((this.name = e),
        (this.timestamp = Date.now()),
        (this.settings = t[e]),
        (this.expires = this.timestamp + this.settings.timeout));
    }
    static QueueFor(t) {
      return e.k_QueueForEffect[t];
    }
    Queue() {
      return e.k_QueueForEffect[this.name];
    }
    bIsExpired() {
      return Date.now() > this.expires;
    }
    bIsActive() {
      let e = Date.now();
      return this.timestamp <= e && this.expires > e;
    }
    iTimeToExpiry() {
      return this.expires - Date.now();
    }
    render() {
      return this.bIsActive() ? this.settings.render(this) : null;
    }
  },
  U_ = class e {
    static k_MaxRoomEffectRunning = {
      default: 1,
      snowball: 10,
      confetti_snow: 3,
      festive: 10,
    };
    m_mapRoomEffectQueue = {
      default: [],
      snowball: [],
      confetti_snow: [],
      festive: [],
    };
    m_effectSettings;
    m_rgRunningEffects = [];
    constructor(e) {
      (re(this), (this.m_effectSettings = e));
    }
    AddRoomEffect(e) {
      (this.QueueRoomEffect(e), this.UpdateRunningRoomEffects());
    }
    QueueRoomEffect(e) {
      this.m_mapRoomEffectQueue[H_.QueueFor(e)].push(e);
    }
    ActivateRoomEffect(e) {
      try {
        let t = new H_(e, this.m_effectSettings);
        (this.m_rgRunningEffects.push(t),
          window.setTimeout(() => {
            this.UpdateRunningRoomEffects();
          }, t.iTimeToExpiry() + 100));
      } catch (e) {
        console.log(e);
      }
    }
    BIsQueueFull(t) {
      return (
        this.m_rgRunningEffects.filter((e) => e.Queue() == t).length >=
        e.k_MaxRoomEffectRunning[t]
      );
    }
    UpdateRunningRoomEffects() {
      this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
        (e) => !e.bIsExpired(),
      );
      for (let e in this.m_mapRoomEffectQueue) {
        let t = e;
        for (
          ;
          this.m_mapRoomEffectQueue[t].length > 0 && !this.BIsQueueFull(t);
        ) {
          let e = this.m_mapRoomEffectQueue[t].shift();
          if (!e) break;
          this.ActivateRoomEffect(e);
        }
      }
    }
  };
w([r], U_.prototype, `m_rgRunningEffects`, void 0);
var W_ = `wINzb0S-MAY-`;
function G_(e) {
  let { link: t, className: n, ...r } = e,
    [i, a] = z.useState(!1),
    o = () => {
      (a(!0), navigator.clipboard.writeText(t));
    };
  return (0, W.jsx)(`div`, {
    title: E(`#ToolTip_CopyLinkToClipboard`),
    className: S(void 0, n),
    onClick: () => o(),
    children: (0, W.jsx)(La, {
      ...r,
      className: S(W_),
      "data-flash": +!!i,
      onAnimationEnd: () => a(!1),
    }),
  });
}
var K_ = `btITtjX9iPQ-`,
  q_ = `yEbVhDS-mQE-`,
  J_ = `uVF0d7J4pnw-`;
function Y_(e) {
  return ({ className: t, ...n }) =>
    (0, W.jsx)(Ie, { className: S(e, t), ...n });
}
var J = Y_(J_),
  X_ = Y_(q_),
  Z_ = Y_(K_);
function Q_(e, t) {
  gt((0, W.jsx)(sv, { definitionid: t }), e ? _t(e) : window);
}
function $_(e, t, n, r) {
  gt(
    (0, W.jsx)(Y, {
      definition: {
        type: 1,
        rewardDefinition: t,
        itemLevel: n,
        desiredItemLevel: n,
      },
      saleitem: r,
    }),
    e ? _t(e) : window,
  );
}
function ev(e, t, n, r) {
  gt(
    (0, W.jsx)(Y, {
      definition: {
        type: 3,
        profileCustomizationType: t,
        itemCount: n,
        itemLevel: r,
        desiredItemLevel: r,
      },
    }),
    e ? _t(e) : window,
  );
}
function tv(e, t, n, r) {
  gt(
    (0, W.jsx)(Y, {
      definition: {
        type: 2,
        profileCustomizationType: t,
        itemLevel: n,
        desiredItemLevel: r,
      },
    }),
    e ? _t(e) : window,
  );
}
function nv(e, t) {
  gt(
    (0, W.jsx)(cv, { definition: { type: 1, rewardDefinition: t } }),
    e ? _t(e) : window,
  );
}
function rv(e) {
  switch (e.type) {
    case 1:
      return H.Get().BCanRedeemPointsForItem(e.rewardDefinition);
    case 2:
      return H.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
        e.profileCustomizationType,
        e.itemLevel,
      );
    case 3:
      return H.Get().BCanRedeemPointsForProfileShowcaseSlot(
        e.profileCustomizationType,
        e.itemCount,
      );
  }
  return !1;
}
function iv(e) {
  switch (e.type) {
    case 1:
      return H.Get().BRewardEquippedByUser(e.rewardDefinition);
    case 2:
      return !H.Get().BCanRedeemPointsForProfileShowcaseUpgrade(
        e.profileCustomizationType,
        e.itemLevel,
      );
    case 3:
      return !H.Get().BCanRedeemPointsForProfileShowcaseSlot(
        e.profileCustomizationType,
        e.itemCount,
      );
  }
  return !0;
}
function av(e) {
  switch (e.type) {
    case 1:
      return e.rewardDefinition.community_item_class == 1
        ? H.Get().GetCostToLevelSeasonalBadge(e.itemLevel || 0)
        : e.rewardDefinition.type == 5 || e.rewardDefinition.type == 6
          ? H.Get().GetBundleOfferForUser(e.rewardDefinition).point_cost
          : parseInt(e.rewardDefinition.point_cost);
    case 2:
      return H.Get().GetUpgradableProfileShowcaseCost();
    case 3:
      return H.Get().GetPurchasableProfileShowcaseSlotCost();
  }
  return 0;
}
function ov(e) {
  switch (e.type) {
    case 1:
      if (e.rewardDefinition.type == 5 || e.rewardDefinition.type == 6) {
        let { discount: t, original_point_cost: n } =
          H.Get().GetBundleOfferForUser(e.rewardDefinition);
        return { discount: t, originalCost: n };
      }
      return {
        discount: 0,
        originalCost: parseInt(e.rewardDefinition.point_cost),
      };
    case 2:
      return {
        discount: 0,
        originalCost: H.Get().GetUpgradableProfileShowcaseCost(),
      };
    case 3:
      return {
        discount: 0,
        originalCost: H.Get().GetPurchasableProfileShowcaseSlotCost(),
      };
  }
  return { discount: 0, originalCost: parseInt(e.rewardDefinition.point_cost) };
}
function sv(e) {
  let { definitionid: t, ...n } = e,
    r = _(() => H.Get().GetRewardItem(t));
  return r
    ? (0, W.jsx)(Y, { definition: { type: 1, rewardDefinition: r }, ...n })
    : null;
}
var Y = class extends z.Component {
  m_bShowTransitions = !1;
  m_bIsMounted = !0;
  m_strError;
  m_mutableObjDefinition;
  constructor(e) {
    (super(e),
      (this.state = { step: `loading`, error: !1, requestInProgress: !1 }),
      (this.m_bShowTransitions = !0),
      (this.m_mutableObjDefinition = this.props.definition));
  }
  componentDidMount() {
    if (this.m_mutableObjDefinition.type == 1) {
      let e = this.m_mutableObjDefinition.rewardDefinition.bundle_defids;
      l(
        () =>
          !e || e.length == 0 || H.Get().GetRewardDefinitions(...e).length > 0,
      )
        .then(() => {
          let t = [];
          e?.length == 0
            ? t.push(this.m_mutableObjDefinition.rewardDefinition.appid)
            : (t = H.Get()
                .GetRewardDefinitions(...e)
                .map((e) => e.appid));
          let n = Array.from(new Set(t));
          return Promise.all(
            n.map((e) => H.Get().EnsureCommunityItemInventoryLoaded(e)),
          );
        })
        .then(() => this.SetInitialState());
    } else this.SetInitialState();
  }
  componentWillUnmount() {
    this.m_bIsMounted = !1;
  }
  SetInitialState() {
    this.m_bIsMounted &&
      (this.setState({ error: !1, requestInProgress: !1 }),
      this.BAlreadyEquipped()
        ? (this.setState({ step: `equipped` }), (this.m_bShowTransitions = !1))
        : this.BSkipToEquip()
          ? (this.setState({ step: `equip` }), (this.m_bShowTransitions = !1))
          : H.Get().BIsLoggedIn() && !this.BCanRedeemPointsForItem()
            ? (this.setState({ step: `cantredeemforapp` }),
              this.ShowError(),
              (this.m_bShowTransitions = !1))
            : this.BSkipToCantAfford()
              ? (this.setState({ step: `cantafford` }),
                this.ShowError(),
                (this.m_bShowTransitions = !1))
              : this.BIsFreeSaleRewardItem()
                ? this.setState({ step: `saleitem` })
                : this.setState({ step: `redeem` }));
  }
  BIsFreeSaleRewardItem() {
    return this.props.saleitem && H.Get().BIsSaleActive();
  }
  BCanRedeemPointsForItem() {
    return rv(this.props.definition);
  }
  BSkipToCantAfford() {
    if (this.props.definition.type == 2 || this.props.definition.type == 3)
      return H.Get().BIsLoggedIn() && !this.BCanAffordItem();
    let e =
      H.Get().BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
      this.props.definition.rewardDefinition.type != 2;
    return H.Get().BIsLoggedIn() && !e && !this.BCanAffordItem();
  }
  BAlreadyEquipped() {
    return iv(this.props.definition);
  }
  BSkipToEquip() {
    return this.props.definition.type == 2 || this.props.definition.type == 3
      ? !1
      : !!(
          H.Get().BRewardOwnedByUser(this.props.definition.rewardDefinition) &&
          ((this.props.definition.rewardDefinition.type == 2 &&
            H.Get().GetUserSeasonalBadgeLevel() >=
              this.props.definition.itemLevel) ||
            this.props.definition.rewardDefinition.type == 1 ||
            this.props.definition.rewardDefinition.type == 5 ||
            this.props.definition.rewardDefinition.type == 6)
        );
  }
  GetPointCost() {
    return av(this.props.definition);
  }
  BCanAffordItem() {
    return H.Get().GetPointsAvailable().getLowBits() >= this.GetPointCost();
  }
  ShowGenericError() {
    this.ShowError(
      rt(
        `#Redeem_Error_Generic`,
        (0, W.jsx)(`a`, {
          href: M.HELP_BASE_URL,
          children: E(`#Redeem_Error_SteamSupport`),
        }),
      ),
    );
  }
  ShowError(e) {
    (e && (this.m_strError = e),
      this.setState({ error: !0, requestInProgress: !1 }));
  }
  RedeemPoints() {
    if (!this.state.requestInProgress) {
      if (!H.Get().BIsLoggedIn())
        (this.CloseModal(),
          H.Get().ShowLoginDialog(
            this.props.definition.rewardDefinition
              ? this.props.definition.rewardDefinition.defid
              : void 0,
          ));
      else
        switch (
          (this.setState({ requestInProgress: !0, error: !1 }),
          this.props.definition.type)
        ) {
          case 1:
            switch (this.props.definition.rewardDefinition.type) {
              case 1:
              case 5:
              case 6:
                this.BIsFreeSaleRewardItem()
                  ? Nr.Get()
                      .ClaimFreeSaleItem()
                      .then((e) => {
                        e.eResult == 1
                          ? ((this.m_mutableObjDefinition.rewardDefinition =
                              Nr.Get().GetClaimedSaleRewardItemDef()),
                            this.setState({
                              step: `equip`,
                              requestInProgress: !1,
                            }))
                          : e.strMessage?.length
                            ? this.ShowError(e.strMessage)
                            : this.ShowGenericError();
                      })
                      .catch(this.ShowGenericError)
                  : H.Get()
                      .RedeemPointsForItem(
                        this.props.definition.rewardDefinition.defid,
                        this.props.definition.rewardDefinition.appid,
                        av(this.m_mutableObjDefinition),
                      )
                      .then((e) => {
                        (e.eResult == 1
                          ? this.setState({
                              step: `equip`,
                              requestInProgress: !1,
                            })
                          : e.strMessage.length
                            ? this.ShowError(e.strMessage)
                            : this.ShowGenericError(),
                          e.eResult == 11 &&
                            this.setState({ step: `pricechange` }));
                      })
                      .catch(this.ShowGenericError);
                break;
              case 4:
                H.Get()
                  .RedeemPointsForCoupon(
                    this.props.definition.rewardDefinition.defid,
                  )
                  .then((e) => {
                    e.eResult == 1
                      ? this.setState({ step: `equip`, requestInProgress: !1 })
                      : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
                break;
              case 2: {
                let e = Math.max(
                  this.props.definition.itemLevel -
                    H.Get().GetUserSeasonalBadgeLevel(),
                  1,
                );
                H.Get()
                  .RedeemPointsForBadge(
                    this.props.definition.rewardDefinition.defid,
                    e,
                  )
                  .then((e) => {
                    e.eResult == 1
                      ? this.setState({ step: `equip`, requestInProgress: !1 })
                      : e.strMessage.length
                        ? this.ShowError(e.strMessage)
                        : this.ShowGenericError();
                  })
                  .catch(this.ShowGenericError);
              }
            }
            break;
          case 2:
            H.Get()
              .RedeemPointsForProfileShowcaseUpgrade(
                this.props.definition.profileCustomizationType,
                this.props.definition.desiredItemLevel,
              )
              .then((e) => {
                e.eResult == 1
                  ? (this.setState({ requestInProgress: !1 }),
                    this.CloseModal())
                  : e.strMessage.length
                    ? this.ShowError(e.strMessage)
                    : this.ShowGenericError();
              })
              .catch(this.ShowGenericError);
            break;
          case 3:
            H.Get()
              .RedeemPointsForProfileShowcase(
                this.props.definition.profileCustomizationType,
              )
              .then((e) => {
                e.eResult == 1
                  ? this.CloseModal()
                  : e.strMessage.length
                    ? this.ShowError(e.strMessage)
                    : this.ShowGenericError();
              })
              .catch(this.ShowGenericError);
        }
    }
  }
  EquipItem() {
    if (this.state.requestInProgress) return;
    this.setState({ requestInProgress: !0, error: !1 });
    let e = null;
    switch (this.props.definition.rewardDefinition.community_item_class) {
      case 3:
        e = H.Get().SetProfileBackground(
          this.props.definition.rewardDefinition,
        );
        break;
      case 14:
        e = H.Get().SetAvatarFrame(this.props.definition.rewardDefinition);
        break;
      case 15:
        e = H.Get().SetAnimatedAvatar(this.props.definition.rewardDefinition);
        break;
      case 13:
        e = H.Get().SetMiniProfileBackground(
          this.props.definition.rewardDefinition,
        );
        break;
      case 8:
        e = H.Get().ActivateProfileModifier(
          this.props.definition.rewardDefinition,
        );
        break;
      case 16:
        e = H.Get().SetSteamDeckKeyboardSkin(
          this.props.definition.rewardDefinition,
        );
        break;
      case 17:
        ((window.location.href = `steam://open/settings/customization`),
          this.CloseModal());
        return;
      default:
        Ge(
          !1,
          `Missing equip handler for item class ${this.props.definition.rewardDefinition.community_item_class}`,
        );
        return;
    }
    e.then((e) => {
      e.eResult == 1
        ? this.setState({ step: `equipped`, requestInProgress: !1 })
        : this.ShowGenericError();
    }).catch(this.ShowGenericError);
  }
  ReloadItemDef() {
    H.Get()
      .ReloadRewardDefinition(this.props.definition.rewardDefinition.defid)
      .then((e) => {
        e &&
          ((this.m_mutableObjDefinition.rewardDefinition = e),
          this.SetInitialState());
      });
  }
  CloseModal() {
    this.props.closeModal && this.props.closeModal();
  }
  render() {
    let e = { enter: Xs, enterActive: Zs, exit: Qs, exitActive: $s };
    if (this.state.step == `loading`) return null;
    let t = uv(this.props.definition),
      n = fv(this.props.definition),
      r = this.props.definition.rewardDefinition
        ? y.GetAppInfo(this.props.definition.rewardDefinition.appid)
        : null,
      i = ``;
    return (
      [1, 5, 6].includes(this.props.definition.rewardDefinition?.type) &&
        (i = `${document.location.href.split(`/reward/`)[0]}/reward/${this.props.definition.rewardDefinition.defid}`),
      (0, W.jsx)(Uv, {
        onEscKeypress: this.CloseModal,
        destructive: this.state.error,
        children: (0, W.jsx)(At, {
          className: kl,
          children: (0, W.jsxs)(Wv, {
            children: [
              (0, W.jsx)(lv, {
                itemName: t,
                itemClassName: n,
                itemLink: i,
                appInfo: r,
                onRequestClose: this.CloseModal,
              }),
              this.m_strError &&
                this.state.error &&
                (0, W.jsx)(`div`, {
                  className: `vGkTcOZZzs4-`,
                  children: this.m_strError,
                }),
              (0, W.jsx)(rn, {
                children: (0, W.jsx)(
                  pe,
                  {
                    enter: this.m_bShowTransitions,
                    exit: this.m_bShowTransitions,
                    classNames: e,
                    timeout: 500,
                    children: (e) =>
                      (0, W.jsx)(jv, {
                        definition: this.m_mutableObjDefinition,
                        closeModal: this.CloseModal,
                        redeemPoints: this.RedeemPoints,
                        equipItem: this.EquipItem,
                        step: this.state.step,
                        bRequestInProgress: this.state.requestInProgress,
                        fnReloadItemDef: this.ReloadItemDef,
                        containerRef: e,
                      }),
                  },
                  this.state.step,
                ),
              }),
            ],
          }),
        }),
      })
    );
  }
};
(w([Mt], Y.prototype, `ShowGenericError`, null),
  w([Mt], Y.prototype, `ShowError`, null),
  w([Mt], Y.prototype, `RedeemPoints`, null),
  w([Mt], Y.prototype, `EquipItem`, null),
  w([Mt], Y.prototype, `ReloadItemDef`, null),
  w([Mt], Y.prototype, `CloseModal`, null),
  (Y = w([g], Y)));
var cv = (e) => {
    let { definition: t, closeModal: n } = e,
      r = () => {},
      i = t.rewardDefinition ? y.GetAppInfo(t.rewardDefinition.appid) : null;
    return (0, W.jsx)(Uv, {
      onEscKeypress: n,
      children: (0, W.jsx)(At, {
        children: (0, W.jsx)(`div`, {
          children: (0, W.jsxs)(Wv, {
            children: [
              (0, W.jsx)(lv, {
                itemName: uv(t),
                itemClassName: fv(t),
                appInfo: i,
                onRequestClose: n,
              }),
              (0, W.jsx)(jv, {
                definition: t,
                closeModal: n,
                redeemPoints: r,
                equipItem: r,
                step: `preview`,
                bRequestInProgress: !1,
                fnReloadItemDef: r,
              }),
            ],
          }),
        }),
      }),
    });
  },
  lv = g(
    ({
      itemName: e,
      itemClassName: t,
      itemLink: n,
      appInfo: r,
      onRequestClose: i,
    }) => {
      let a = ze();
      return (0, W.jsxs)(x, {
        className: Ys,
        children: [
          (0, W.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, W.jsxs)(x, {
                className: ec,
                children: [
                  e,
                  n &&
                    !a &&
                    (0, W.jsx)(G_, {
                      link: n,
                      style: { marginInlineStart: `8px` },
                    }),
                ],
              }),
              (0, W.jsx)(`div`, { className: tc, children: t }),
              r &&
                (0, W.jsx)(ot, {
                  to: `${C.LoyaltyStore()}/app/` + r.appid,
                  onClick: i,
                  children: (0, W.jsxs)(`div`, {
                    className: `yYJfwmOKeV8-`,
                    children: [
                      (0, W.jsx)(`img`, {
                        className: `_0o67Oqyiv6s-`,
                        src: r.icon_url,
                      }),
                      (0, W.jsxs)(`div`, {
                        className: `l-YzYVEVklE-`,
                        children: [` `, r.name, ` `],
                      }),
                    ],
                  }),
                }),
            ],
          }),
          H.Get().BIsLoggedIn() &&
            (0, W.jsxs)(`div`, {
              className: `DJVnaCtesBQ-`,
              children: [
                (0, W.jsx)($e, { className: `Vi0LRQp-CZU-` }),
                (0, W.jsxs)(`div`, {
                  className: void 0,
                  children: [
                    (0, W.jsx)(`div`, {
                      className: `UIFpv0JRwuo-`,
                      children: E(`#YourBalance`),
                    }),
                    (0, W.jsx)(`div`, {
                      className: `DPoviwyhsY8-`,
                      children: ut(H.Get().GetPointsAvailable().getLowBits()),
                    }),
                  ],
                }),
              ],
            }),
        ],
      });
    },
  ),
  uv = (e) =>
    e.type == 2 || e.type == 3
      ? E(
          `#ProfileShowcases_ShowcaseName`,
          E(`#ProfileShowcases_Type_` + e.profileCustomizationType),
        )
      : dv(e.rewardDefinition),
  dv = (e) => {
    if (e.type == 1)
      return (
        Ge(
          e.community_item_data,
          `Missing community item data for virtual item ${e.defid}`,
        ),
        e.community_item_data.item_title
      );
    if (e.type == 2) return E(`#Redeem_Badge_PrestigeBadge`);
    if (e.type == 5) return e.community_item_data.item_title;
    if (e.type == 6) {
      let t = y.GetAppInfo(e.appid).name || ``;
      return E(`#RewardBundle_AutoGeneratedBundleName`, t);
    }
    return `Unknown`;
  },
  fv = (e) => {
    let { type: t, itemLevel: n, desiredItemLevel: r, rewardDefinition: i } = e;
    switch (t) {
      case 2:
        return rv(e)
          ? E(`#ProfileShowcases_UpgradeLevel`, n, r)
          : E(`#ProfileShowcases_UpgradeAtMaxLevel`, n);
      case 3:
        return E(`#ProfileShowcases_AdditionalSlot`);
      case 1:
        if (i.type == 1 || i.type == 2)
          return i.appid != H.Get().GetCurrentSeasonalAppID() &&
            i.community_item_class == 8 &&
            i.bundle_defids?.length != 0
            ? E(`#RewardItemType_ProfileBundle`)
            : V(i.community_item_class);
        if (i.type == 5 || i.type == 6) return E(`#RewardItemType_Bundle`);
    }
    return ``;
  };
g((e) => {
  let { animatedAvatar: t, persona: n, strClassName: r } = e,
    i = { size: `FillArea`, statusPosition: `none`, className: S(r, void 0) };
  return (0, W.jsx)(Pt, { persona: n, animatedAvatar: t, ...i });
});
var pv = g((e) => {
    let {
        animatedAvatar: t,
        avatarFrame: n,
        persona: r,
        className: i,
        strAnimatedAvatarClassName: a,
      } = e,
      o = { size: `FillArea`, statusPosition: `none`, className: S(a, void 0) };
    return (0, W.jsx)(`div`, {
      className: i,
      children: (0, W.jsx)(Pt, {
        persona: r,
        animatedAvatar: t,
        ...o,
        children: (0, W.jsx)(It, { profileItem: n }),
      }),
    });
  }),
  mv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Chat`)
        : this.props.step == `saleitem`
          ? (0, W.jsxs)(`div`, {
              children: [
                E(`#LunarSale2022_Redeem_Desc1`),
                (0, W.jsx)(`br`, {}),
                (0, W.jsx)(`br`, {}),
                E(`#LunarSale2022_Redeem_Desc2`),
              ],
            })
          : E(`#Redeem_UsePoints_Sticker`);
    }
    GetModalPreview() {
      if (this.props.step == `saleitem`)
        return (0, W.jsx)(Z, {
          className: void 0,
          step: this.props.step,
          children: (0, W.jsx)(`img`, {
            className: Tl,
            alt: `Free Sale Item`,
            src: yd,
          }),
        });
      {
        let e = this.props.definition.rewardDefinition,
          t = {
            backgroundImage:
              `url(` + L(e.appid, e.community_item_data.item_image_small) + `)`,
          },
          n = L(e.appid, e.community_item_data.item_image_large);
        return (0, W.jsxs)(Z, {
          className: yc,
          step: this.props.step,
          children: [
            (0, W.jsx)(`div`, { className: wc, style: t }),
            (0, W.jsx)(Vv, { icon: n }),
          ],
        });
      }
    }
    render() {
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(Cc, vc),
        children: [
          this.GetModalPreview(),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, W.jsx)(Fv, { closeModal: this.props.closeModal }),
          }),
        ],
      });
    }
  },
  hv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, W.jsx)(`div`, {
              className: nc,
              children: rt(
                `#Redeem_Equipped_Background`,
                (0, W.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : E(`#Redeem_UsePoints_Background`);
    }
    GetPreview() {
      let e = this.props.definition.rewardDefinition,
        t = {
          backgroundImage:
            `url(` + L(e.appid, e.community_item_data.item_image_large) + `)`,
        },
        n = (0, W.jsx)(`div`, {
          className: S(wc, e.community_item_data.tiled && `AmUkgklq9kc-`),
          style: t,
        });
      if (e.community_item_data.animated) {
        let t = e.community_item_data.item_movie_webm,
          r = e.community_item_data.item_movie_mp4;
        n = (0, W.jsxs)(`video`, {
          className: Ac,
          playsInline: !0,
          loop: !0,
          muted: !0,
          autoPlay: !0,
          controls: !1,
          children: [
            (0, W.jsx)(`source`, { src: L(e.appid, t), type: `video/webm` }),
            (0, W.jsx)(`source`, { src: L(e.appid, r), type: `video/mp4` }),
          ],
        });
      }
      return n;
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    render() {
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: Dc,
        children: [
          (0, W.jsxs)(Z, {
            className: Oc,
            step: this.props.step,
            children: [(0, W.jsx)(`div`, { className: kc }), this.GetPreview()],
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  gv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Chat`)
        : E(`#Redeem_UsePoints_Emoticon`);
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = L(e.appid, e.community_item_data.item_image_small),
        n = {
          backgroundImage:
            `url(` + L(e.appid, e.community_item_data.item_image_large) + `)`,
        };
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(Tc, vc),
        children: [
          (0, W.jsxs)(Z, {
            className: yc,
            step: this.props.step,
            children: [
              (0, W.jsxs)(`div`, {
                className: Ec,
                children: [
                  (0, W.jsx)(`div`, { className: wc, style: n }),
                  (0, W.jsx)(`div`, { className: wc, style: n }),
                  (0, W.jsx)(`div`, { className: wc, style: n }),
                ],
              }),
              (0, W.jsx)(Vv, { icon: t }),
            ],
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, W.jsx)(Fv, { closeModal: this.props.closeModal }),
          }),
        ],
      });
    }
  },
  _v = class extends z.Component {
    m_manager = new U_(B_);
    m_interval;
    GetEffectTypeForDefinition() {
      return this.props.definition.rewardDefinition.internal_description;
    }
    GetEffectConfig() {
      return B_[this.GetEffectTypeForDefinition()];
    }
    componentDidMount() {
      let e = this.GetEffectTypeForDefinition();
      (this.m_manager.AddRoomEffect(e),
        (this.m_interval = window.setInterval(
          () => this.m_manager.AddRoomEffect(e),
          this.GetEffectConfig().timeout,
        )));
    }
    componentWillUnmount() {
      window.clearInterval(this.m_interval);
    }
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Chat`)
        : E(`#Redeem_UsePoints_ChatEffect`);
    }
    render() {
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(Tc, vc),
        children: [
          (0, W.jsxs)(Z, {
            className: yc,
            step: this.props.step,
            children: [
              (0, W.jsx)(`div`, {
                className: Sc,
                children: (0, W.jsx)(V_, { effectManager: this.m_manager }),
              }),
              (0, W.jsx)(Vv, {
                children: this.GetEffectConfig().renderButton(),
              }),
            ],
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: (0, W.jsx)(Fv, { closeModal: this.props.closeModal }),
          }),
        ],
      });
    }
  };
_v = w([g], _v);
var vv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, W.jsx)(`div`, {
              className: nc,
              children: rt(
                `#Redeem_Equipped_MiniProfile`,
                (0, W.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : E(`#Redeem_UsePoints_MiniProfile`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(J, {
              onClick: this.props.closeModal,
              children: E(`#Button_Close`),
            })
          : null;
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = H.Get().GetEquippedItems(),
        n = H.Get().GetPersonaState(),
        r = (0, W.jsx)(pv, {
          animatedAvatar: t.animated_avatar,
          persona: n,
          avatarFrame: t.avatar_frame,
          className: Pc,
        });
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: jc,
        children: [
          (0, W.jsx)(Z, {
            className: Oc,
            step: this.props.step,
            children: (0, W.jsxs)(`div`, {
              className: Mc,
              children: [
                (0, W.jsxs)(`video`, {
                  width: `100%`,
                  playsInline: !0,
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  controls: !1,
                  children: [
                    (0, W.jsx)(`source`, {
                      src: L(e.appid, e.community_item_data.item_movie_webm),
                      type: `video/webm`,
                    }),
                    (0, W.jsx)(`source`, {
                      src: L(e.appid, e.community_item_data.item_movie_mp4),
                      type: `video/mp4`,
                    }),
                  ],
                }),
                (0, W.jsx)(`div`, {
                  className: Nc,
                  children: H.Get().BIsLoggedIn() && r,
                }),
                (0, W.jsx)(`div`, {
                  className: S(Fc, `miniprofile_backdropblur`),
                }),
              ],
            }),
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  yv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Profile`)
        : this.props.step == `equipped`
          ? (0, W.jsx)(`div`, {
              className: nc,
              children: rt(
                `#Redeem_Equipped_AvatarFrame`,
                (0, W.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : E(`#Redeem_UsePoints_AvatarFrame`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = H.Get().GetEquippedItems(),
        n = H.Get().GetPersonaState(),
        r = {
          appid: e.appid,
          image_small:
            `items/` + e.appid + `/` + e.community_item_data.item_image_small,
        },
        i = (0, W.jsx)(pv, {
          animatedAvatar: t.animated_avatar,
          persona: n,
          avatarFrame: r,
          strAnimatedAvatarClassName: Pc,
        }),
        a = null;
      return (
        this.props.step != `equipped` &&
          H.Get().BIsLoggedIn() &&
          (a = (0, W.jsxs)(`div`, {
            className: gc,
            children: [
              (0, W.jsx)(pv, {
                className: Hc,
                animatedAvatar: t.animated_avatar,
                persona: n,
                avatarFrame: t.avatar_frame,
                strAnimatedAvatarClassName: Pc,
              }),
              (0, W.jsx)(`div`, {
                className: _c,
                children: E(`#Redeem_Equipped_CurrentAvatarFrame`),
              }),
            ],
          })),
        (0, W.jsxs)($, {
          ref: this.props.containerRef,
          className: Ic,
          children: [
            (0, W.jsxs)(Z, {
              className: S(Oc, Rc),
              step: this.props.step,
              children: [
                (0, W.jsx)(`div`, { className: S(zc, Bc), children: i }),
                (0, W.jsx)(`div`, { className: S(zc, Vc), children: i }),
              ],
            }),
            a,
            (0, W.jsx)(Q, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            (0, W.jsx)(X, {
              fnReloadItemDef: this.props.fnReloadItemDef,
              bRequestInProgress: this.props.bRequestInProgress,
              definition: this.props.definition,
              step: this.props.step,
              closeModal: this.props.closeModal,
              redeemPoints: this.props.redeemPoints,
              children: this.GetButtons(),
            }),
          ],
        })
      );
    }
  },
  bv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_AnimatedAvatar`)
        : this.props.step == `equipped`
          ? (0, W.jsx)(`div`, {
              className: nc,
              children: rt(
                `#Redeem_Equipped_AnimatedAvatar`,
                (0, W.jsx)(`span`, {
                  children:
                    this.props.definition.rewardDefinition.community_item_data
                      .item_title,
                }),
              ),
            })
          : E(`#Redeem_UsePoints_AnimatedAvatar`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = H.Get().GetEquippedItems(),
        n = H.Get().GetPersonaState(),
        r = {
          appid: e.appid,
          image_small:
            `items/` + e.appid + `/` + e.community_item_data.item_image_small,
        },
        i = (0, W.jsx)(pv, {
          animatedAvatar: r,
          persona: n,
          avatarFrame: t.avatar_frame,
          strAnimatedAvatarClassName: Pc,
        }),
        a = null;
      return (
        this.props.step != `equipped` &&
          H.Get().BIsLoggedIn() &&
          (a = (0, W.jsxs)(`div`, {
            className: gc,
            children: [
              (0, W.jsx)(pv, {
                className: Hc,
                animatedAvatar: t.animated_avatar,
                persona: n,
                avatarFrame: t.avatar_frame,
                strAnimatedAvatarClassName: Pc,
              }),
              (0, W.jsx)(`div`, {
                className: _c,
                children: E(`#Redeem_Equipped_CurrentAvatar`),
              }),
            ],
          })),
        (0, W.jsxs)($, {
          ref: this.props.containerRef,
          className: Ic,
          children: [
            (0, W.jsxs)(Z, {
              className: S(Oc, Lc),
              step: this.props.step,
              children: [
                (0, W.jsx)(`div`, { className: S(zc, Bc), children: i }),
                (0, W.jsx)(`div`, { className: S(zc, Vc), children: i }),
              ],
            }),
            a,
            (0, W.jsx)(Q, {
              definition: this.props.definition,
              step: this.props.step,
              description: this.GetDescription(),
            }),
            (0, W.jsx)(X, {
              fnReloadItemDef: this.props.fnReloadItemDef,
              bRequestInProgress: this.props.bRequestInProgress,
              definition: this.props.definition,
              step: this.props.step,
              closeModal: this.props.closeModal,
              redeemPoints: this.props.redeemPoints,
              children: this.GetButtons(),
            }),
          ],
        })
      );
    }
  },
  xv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_SteamDeckKeyboardSkin`)
        : E(`#Redeem_UsePoints_SteamDeckKeyboardSkin`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : null;
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = L(e.appid, e.community_item_data.item_image_large);
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(bl),
        children: [
          (0, W.jsx)(Z, {
            className: wc,
            step: this.props.step,
            children: (0, W.jsx)(`img`, { className: xl, src: t }),
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Sv = class extends z.Component {
    m_rtMinClientVersion = 1757452101;
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_SteamDeckStartupMovie`)
        : E(`#Redeem_UsePoints_SteamDeckStartupMovie`);
    }
    GetButtons() {
      if (this.props.step == `equip`)
        return (0, W.jsx)(Iv, {
          closeModal: this.props.closeModal,
          equipItem: this.props.equipItem,
        });
    }
    BShowClientMinVersionWarning() {
      let e = vt();
      return (
        (!e || e < this.m_rtMinClientVersion) &&
        this.props.step == `redeem` &&
        this.props.definition.rewardDefinition.timestamp_created >
          this.m_rtMinClientVersion
      );
    }
    render() {
      let e = this.props.definition.rewardDefinition,
        t = L(e.appid, e.community_item_data.item_image_large);
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(Sl),
        children: [
          (0, W.jsx)(Z, {
            className: wc,
            step: this.props.step,
            children: (0, W.jsxs)(`video`, {
              className: Ac,
              width: `100%`,
              playsInline: !0,
              loop: !0,
              muted: !1,
              autoPlay: !0,
              controls: !1,
              children: [
                (0, W.jsx)(`source`, {
                  src: L(e.appid, e.community_item_data.item_movie_webm),
                  type: `video/webm`,
                }),
                (0, W.jsx)(`source`, {
                  src: L(e.appid, e.community_item_data.item_movie_mp4),
                  type: `video/mp4`,
                }),
                (0, W.jsx)(`img`, { src: t }),
              ],
            }),
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
            children:
              this.BShowClientMinVersionWarning() &&
              (0, W.jsx)(`div`, {
                className: S(`rqbaF3Yp8t4-`, `rXXwPkvcub4-`),
                children: E(
                  `#Redeem_Warning_LatestClient`,
                  Ct(this.m_rtMinClientVersion, !1, !0),
                ),
              }),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Cv = class extends z.Component {
    GetDescription() {
      return E(`#Redeem_UsePoints_Badge`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
        : null;
    }
    GetPreviewForLevel() {
      let e = H.Get().GetUserSeasonalBadgeLevel();
      return this.props.step == `equip`
        ? (0, W.jsx)(Hv, {
            definition: this.props.definition.rewardDefinition,
            badgeLevel: e,
            title: E(`#Redeem_Badge_CurrentLevel`),
          })
        : e == 0
          ? (0, W.jsx)(Hv, {
              definition: this.props.definition.rewardDefinition,
              badgeLevel: this.props.definition.itemLevel,
              title: E(`#Redeem_Badge_AfterPoints`),
            })
          : (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(Hv, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: e,
                  title: E(`#Redeem_Badge_CurrentLevel`),
                }),
                (0, W.jsx)(`div`, {
                  className: S(Gc, Kc),
                  children: (0, W.jsx)(`div`, { className: Jc }),
                }),
                (0, W.jsx)(Hv, {
                  definition: this.props.definition.rewardDefinition,
                  badgeLevel: this.props.definition.itemLevel,
                  title: E(`#Redeem_Badge_AfterPoints`),
                }),
              ],
            });
    }
    render() {
      return this.props.definition.rewardDefinition.community_item_data
        .badge_data[this.props.definition.itemLevel - 1]
        ? (0, W.jsxs)($, {
            ref: this.props.containerRef,
            className: Uc,
            children: [
              (0, W.jsx)(Z, {
                className: Wc,
                children: this.GetPreviewForLevel(),
              }),
              (0, W.jsx)(Q, {
                definition: this.props.definition,
                step: this.props.step,
                description: this.GetDescription(),
              }),
              (0, W.jsx)(X, {
                fnReloadItemDef: this.props.fnReloadItemDef,
                bRequestInProgress: this.props.bRequestInProgress,
                definition: this.props.definition,
                step: this.props.step,
                closeModal: this.props.closeModal,
                redeemPoints: this.props.redeemPoints,
                children: this.GetButtons(),
              }),
            ],
          })
        : (console.log(
            `Missing badge level ${this.props.definition.itemLevel} image`,
          ),
          null);
    }
  };
Cv = w([g], Cv);
var wv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Coupon`)
        : E(`#Redeem_UsePoints_Coupon`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    render() {
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: void 0,
        children: [
          (0, W.jsx)(Z, { className: Oc, step: this.props.step }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Tv = class extends z.Component {
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_GoldenProfile`)
        : this.props.step == `equipped`
          ? E(`#Redeem_Equipped_GoldenProfile`)
          : E(`#Redeem_UsePoints_GoldenProfile`);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    render() {
      let { definition: e } = this.props,
        t = H.Get().GetPersonaState(),
        n = H.Get().GetEquippedItems(),
        r = H.Get().GetGoldenProfileConfigForApp(e.rewardDefinition.appid);
      if (!r && e.rewardDefinition.bundle_defids?.length == 0) return null;
      if (!r) {
        r = { appid: e.rewardDefinition.appid, frame: `` };
        let t = H.Get()
          .GetRewardDefinitions(...e.rewardDefinition.bundle_defids)
          .filter((e) => e.community_item_class == 14);
        t?.length != 0 &&
          (r.frame =
            `items/` +
            e.rewardDefinition.appid +
            `/` +
            t[0].community_item_data.item_image_small);
      }
      let i = { image_small: r.frame };
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: rl,
        children: [
          (0, W.jsx)(Z, {
            className: il,
            step: this.props.step,
            children: (0, W.jsx)(`div`, {
              className: al,
              children: (0, W.jsx)(Ft, {
                size: `FillArea`,
                className: Pc,
                persona: t,
                animatedAvatar: n.animated_avatar,
                avatarFrame: i,
              }),
            }),
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
            children: (0, W.jsx)(Mv, {
              children: E(`#Redeem_GoldenProfile_Expiration`),
            }),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Ev = class extends z.Component {
    constructor(e) {
      (super(e), (this.state = { bLoadedIFrame: !1, iframeHeight: 0 }));
    }
    componentDidMount() {
      window.addEventListener(`message`, this.OnProfileFrameResized);
    }
    componentWillUnmount() {
      window.removeEventListener(`message`, this.OnProfileFrameResized);
    }
    OnProfileFrameResized = (e) => {
      e.data.message &&
        e.data.message == `iframe_dimensions` &&
        this.setState({ iframeHeight: e.data.height });
    };
    OnProfileFrameLoaded() {
      this.setState({ bLoadedIFrame: !0 });
    }
    GetDescription() {
      let e = E(
        `#ProfileShowcases_Type_` +
          this.props.definition.profileCustomizationType,
      );
      if (this.props.step == `equipped`)
        return this.props.definition.type == 2
          ? E(
              `#Redeem_Equipped_ProfileShowcaseUpgraded`,
              e,
              this.props.definition.itemLevel,
            )
          : E(`#Redeem_Equipped_ProfileShowcaseSlotPurchased`, e);
      if (this.props.definition.type == 2)
        return E(
          `#Redeem_UsePoints_ProfileShowcaseUpgrade`,
          this.props.definition.desiredItemLevel,
        );
      let t = H.Get().GetMaxProfileShowcaseSlots();
      return E(`#Redeem_UsePoints_ProfileShowcaseSlot`, e, t + 1);
    }
    GetButtons() {
      return this.props.step == `equip`
        ? (0, W.jsx)(Iv, {
            closeModal: this.props.closeModal,
            equipItem: this.props.equipItem,
          })
        : this.props.step == `equipped`
          ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
          : null;
    }
    GetProfileSteamID() {
      return H.Get().BIsLoggedIn()
        ? xt.steamid
        : M.EUNIVERSE == 2
          ? `148618792083695825`
          : `76561197960266962`;
    }
    render() {
      let e = this.state.bLoadedIFrame,
        t = Ms(this.props.definition.profileCustomizationType),
        n = this.props.definition.profileCustomizationType,
        r = Math.min(
          this.props.definition.desiredItemLevel
            ? this.props.definition.desiredItemLevel
            : this.props.definition.itemLevel,
          H.Get().GetMaxProfileShowcaseUpgradeLevel(),
        ),
        i = this.state.iframeHeight * 0.5;
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: ol,
        children: [
          (0, W.jsxs)(Z, {
            className: S(sl, e ? ll : void 0),
            step: this.props.step,
            children: [
              (0, W.jsx)(`img`, { className: cl, src: t }),
              !e &&
                (0, W.jsx)(`div`, {
                  className: void 0,
                  children: (0, W.jsx)(le, {
                    position: `center`,
                    size: `xlarge`,
                    string: E(
                      `#ProfileShowcases_LoadingPreview`,
                      E(`#ProfileShowcases_Type_` + n),
                    ),
                  }),
                }),
              (0, W.jsx)(x, {
                childFocusDisabled: !0,
                focusable: !1,
                className: ul,
                style: { height: i == 0 ? `1px` : i + `px` },
                children: (0, W.jsx)(`iframe`, {
                  className: dl,
                  src:
                    M.COMMUNITY_BASE_URL +
                    `profiles/` +
                    this.GetProfileSteamID() +
                    `/previewsingleshowcase/?customization_type=${n}&level=${r}`,
                  frameBorder: 0,
                  scrolling: `no`,
                  onLoad: () => {
                    this.OnProfileFrameLoaded();
                  },
                }),
              }),
            ],
          }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Dv = class extends z.Component {
    constructor(e) {
      super(e);
    }
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_Bundle`)
        : E(`#Redeem_UsePoints_Bundle`);
    }
    GetButtons() {
      return this.props.step == `equip` || this.props.step == `equipped`
        ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
        : null;
    }
    render() {
      let e = H.Get()
        .GetBundleOfferForUser(this.props.definition.rewardDefinition)
        .items.map((e) => {
          let t = e.community_item_data.item_image_large,
            n = L(e.appid, t);
          e.community_item_class == 3 &&
            (n =
              M.COMMUNITY_CDN_URL +
              `economy/profilebackground/items/` +
              e.appid +
              `/` +
              e.community_item_data.item_image_large +
              `?size=320x200`);
          let r = H.Get().BRewardOwnedByUser(e);
          return (0, W.jsxs)(
            R,
            {
              padding: `xxsmall`,
              className: ml,
              children: [
                (0, W.jsx)(`div`, {
                  className: hl,
                  children: (0, W.jsx)(`img`, { src: n }),
                }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`div`, {
                      className: gl,
                      children: e.community_item_data.item_title,
                    }),
                    (0, W.jsx)(`div`, {
                      className: _l,
                      children: V(e.community_item_class),
                    }),
                  ],
                }),
                r &&
                  (0, W.jsxs)(`div`, {
                    className: `_3dPWreoHzmc-`,
                    children: [
                      (0, W.jsx)(G, { className: `lDkhbpSdBnI-` }),
                      this.props.step == `redeem` &&
                        E(`#Redeem_BundleItemOwned`),
                    ],
                  }),
              ],
            },
            e.defid,
          );
        });
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: fl,
        children: [
          (0, W.jsx)(`div`, { className: pl, children: e }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  };
function Ov(e) {
  return ze()
    ? null
    : (0, W.jsx)(`div`, {
        className: Dl,
        children: (0, W.jsx)(`a`, {
          href: e.strPreviewURL,
          target: `_blank`,
          className: Ol,
          children: E(`#ProfileModifier_PreviewLinkText`),
        }),
      });
}
var kv = class extends z.Component {
    constructor(e) {
      (super(e), (this.state = { bLoadedIFrame: !1 }));
    }
    OnIFrameLoaded() {
      this.setState({ bLoadedIFrame: !0 });
    }
    GetProfileSteamID() {
      return H.Get().BIsLoggedIn()
        ? xt.steamid
        : M.EUNIVERSE == 2
          ? `148618792083695825`
          : `76561197960266962`;
    }
    GetDescription() {
      return this.props.step == `equip`
        ? E(`#Redeem_Equip_ProfileBundle`)
        : E(`#Redeem_UsePoints_ProfileBundle`);
    }
    GetButtons() {
      return this.props.step == `equip` || this.props.step == `equipped`
        ? (0, W.jsx)(Lv, { closeModal: this.props.closeModal })
        : null;
    }
    render() {
      let { bLoadedIFrame: e } = this.state,
        t = H.Get().GetBundleOfferForUser(
          this.props.definition.rewardDefinition,
        ),
        n = this.props.definition.rewardDefinition.appid,
        r = this.props.definition.rewardDefinition.community_item_type,
        i = t.items.map((e) => {
          let t = Va(e),
            n = H.Get().BRewardOwnedByUser(e),
            r = e.community_item_class == 8;
          return (0, W.jsxs)(
            R,
            {
              padding: `xxsmall`,
              className: S(ml, r && `nma2heV7NJU-`),
              children: [
                (0, W.jsx)(`div`, {
                  className: hl,
                  children: (0, W.jsx)(`img`, { src: t }),
                }),
                (0, W.jsxs)(`div`, {
                  children: [
                    (0, W.jsx)(`div`, {
                      className: gl,
                      children: e.community_item_data.item_title,
                    }),
                    (0, W.jsx)(`div`, {
                      className: _l,
                      children: V(e.community_item_class),
                    }),
                  ],
                }),
                n &&
                  (0, W.jsxs)(`div`, {
                    className: `_3dPWreoHzmc-`,
                    children: [
                      (0, W.jsx)(G, { className: `lDkhbpSdBnI-` }),
                      this.props.step == `redeem` &&
                        E(`#Redeem_ProfileBundleItemOwned`),
                    ],
                  }),
              ],
            },
            e.defid,
          );
        }),
        a =
          M.COMMUNITY_BASE_URL +
          `profiles/` +
          this.GetProfileSteamID() +
          `?previewprofile=1&appid=` +
          n +
          `&itemtype=` +
          r;
      return (0, W.jsxs)($, {
        ref: this.props.containerRef,
        className: S(fl, e ? ll : void 0),
        children: [
          !e &&
            (0, W.jsx)(`div`, {
              className: void 0,
              children: (0, W.jsx)(le, {
                position: `center`,
                size: `xlarge`,
                string: E(
                  `#ProfileBundle_LoadingPreview`,
                  dv(this.props.definition.rewardDefinition),
                ),
              }),
            }),
          (0, W.jsx)(x, {
            childFocusDisabled: !0,
            focusable: !1,
            className: vl,
            children: (0, W.jsx)(`iframe`, {
              className: yl,
              src: a,
              frameBorder: 0,
              scrolling: `no`,
              onLoad: () => {
                this.OnIFrameLoaded();
              },
            }),
          }),
          (0, W.jsx)(Ov, { strPreviewURL: a }),
          (0, W.jsx)(`div`, { className: pl, children: i }),
          (0, W.jsx)(Q, {
            definition: this.props.definition,
            step: this.props.step,
            description: this.GetDescription(),
          }),
          (0, W.jsx)(X, {
            fnReloadItemDef: this.props.fnReloadItemDef,
            bRequestInProgress: this.props.bRequestInProgress,
            definition: this.props.definition,
            step: this.props.step,
            closeModal: this.props.closeModal,
            redeemPoints: this.props.redeemPoints,
            children: this.GetButtons(),
          }),
        ],
      });
    }
  },
  Av = {
    11: mv,
    3: hv,
    4: gv,
    13: vv,
    14: yv,
    15: bv,
    1: Cv,
    12: _v,
    8: Tv,
    16: xv,
    17: Sv,
  },
  jv = g((e) => {
    let t = null;
    switch (e.definition.type) {
      case 3:
      case 2:
        t = Ev;
        break;
      case 1:
        t =
          e.definition.rewardDefinition.type == 5 ||
          e.definition.rewardDefinition.type == 6
            ? Dv
            : e.definition.rewardDefinition.community_item_class == 8 &&
                e.definition.rewardDefinition.bundle_defids?.length != 0
              ? kv
              : Av[e.definition.rewardDefinition.community_item_class];
    }
    return t
      ? (0, W.jsx)(t, { ...e })
      : e.definition.rewardDefinition.type == 4
        ? (0, W.jsx)(wv, { ...e })
        : null;
  }),
  Mv = (e) => {
    let { className: t, ...n } = e;
    return (0, W.jsxs)(`div`, {
      className: S(Cl, e.className),
      ...n,
      children: [(0, W.jsx)(ft, { className: wl }), e.children],
    });
  },
  Nv = (e) => {
    let {
      cost: t,
      discount: n,
      originalCost: r,
      redeemPoints: i,
      closeModal: a,
    } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(Pv, { cost: t, discount: n, originalCost: r, onClick: i }),
        (0, W.jsx)(J, { onClick: a, children: E(`#Button_Cancel`) }),
      ],
    });
  },
  Pv = (e) => {
    let { cost: t, discount: n, originalCost: r, onClick: i, className: a } = e;
    if (n) {
      let e = n ? ut(r) : ``,
        o = H.Get().BIsLoggedIn()
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsxs)(`div`, {
                  className: uc,
                  children: [`\xA0`, e, ` `, E(`#Rewards_Points`), `\xA0`],
                }),
                (0, W.jsxs)(Di, {
                  amount: t,
                  children: [` `, t > 0 && E(`#Rewards_Points`)],
                }),
              ],
            })
          : (0, W.jsx)(`span`, { children: E(`#Button_Login`) });
      return (0, W.jsxs)(x, {
        focusable: !0,
        className: S(sc, a),
        onActivate: i,
        children: [
          (0, W.jsxs)(`div`, { className: cc, children: [`-`, n, `%`] }),
          (0, W.jsx)(`div`, { className: lc, children: o }),
        ],
      });
    }
    let o = H.Get().BIsLoggedIn()
      ? (0, W.jsxs)(Di, {
          size: 1.125,
          amount: t,
          children: [` `, t > 0 && E(`#Rewards_Points`)],
        })
      : (0, W.jsx)(`span`, { children: E(`#Button_Login`) });
    return (0, W.jsx)(x, {
      focusable: !0,
      className: S(sc, a),
      onActivate: i,
      children: (0, W.jsx)(`div`, { className: lc, children: o }),
    });
  },
  Fv = (e) => {
    let { closeModal: t } = e,
      n = () => {
        ((window.location.href = `steam://open/friends`), t());
      };
    return M.IN_CLIENT
      ? (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(Z_, { onClick: n, children: E(`#Button_Goto_Chat`) }),
            (0, W.jsx)(J, { onClick: t, children: E(`#Button_Later`) }),
          ],
        })
      : (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(Z_, {
              onClick: () => {
                (window.open(
                  M.CHAT_BASE_URL + `chat`,
                  `height=790,width=1015,resize=yes,scrollbars=yes`,
                ),
                  t());
              },
              children: E(`#Button_Goto_WebChat`),
            }),
            (0, W.jsx)(X_, {
              onClick: async () => {
                (n(), t());
              },
              children: E(`#Button_Goto_ClientChat`),
            }),
            (0, W.jsx)(J, { onClick: t, children: E(`#Button_Later`) }),
          ],
        });
  },
  Iv = (e) => {
    let { equipItem: t, closeModal: n } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(Z_, { onClick: t, children: E(`#Button_Equip`) }),
        (0, W.jsx)(J, { onClick: n, children: E(`#Button_Later`) }),
      ],
    });
  },
  Lv = (e) => {
    let { closeModal: t } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(X_, {
          onClick: () => (window.location.href = M.COMMUNITY_BASE_URL + `my`),
          children: E(`#Button_Goto_Profile`),
        }),
        (0, W.jsx)(J, { onClick: t, children: E(`#Button_Close`) }),
      ],
    });
  },
  Rv = (e) => {
    let { closeModal: t } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(X_, {
          onClick: t,
          children: (0, W.jsx)(ot, {
            to: C.LoyaltyHowItWorks(),
            children: E(`#Redeem_NeedToOwnApp`),
          }),
        }),
        (0, W.jsx)(J, { onClick: t, children: E(`#Button_Cancel`) }),
      ],
    });
  },
  zv = (e) => {
    let { closeModal: t } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(X_, {
          onClick: t,
          children: (0, W.jsx)(ot, {
            to: C.LoyaltyHowItWorks(),
            children: E(`#Redeem_HowToGetPoints`),
          }),
        }),
        (0, W.jsx)(J, { onClick: t, children: E(`#Button_Cancel`) }),
      ],
    });
  },
  Bv = (e) => {
    let { closeModal: t, fnReloadItemDef: n } = e;
    return (0, W.jsxs)(W.Fragment, {
      children: [
        (0, W.jsx)(X_, { onClick: n, children: E(`#Redeem_PriceChange`) }),
        (0, W.jsx)(J, { onClick: t, children: E(`#Button_Cancel`) }),
      ],
    });
  },
  X = (e) => {
    let {
        step: t,
        definition: n,
        closeModal: r,
        redeemPoints: i,
        bRequestInProgress: a,
        fnReloadItemDef: o,
        ...s
      } = e,
      c = e.children;
    if (a) c = (0, W.jsx)(le, { className: El, size: `medium` });
    else if (t == `preview`)
      c = (0, W.jsx)(J, { onClick: r, children: E(`#Button_Close`) });
    else if (t == `redeem`) {
      let e = av(n),
        { discount: t, originalCost: a } = ov(n);
      c = (0, W.jsx)(Nv, {
        cost: e,
        discount: t,
        originalCost: a,
        redeemPoints: i,
        closeModal: r,
      });
    } else
      t == `cantredeemforapp`
        ? (c = (0, W.jsx)(Rv, { closeModal: r }))
        : t == `cantafford`
          ? (c = (0, W.jsx)(zv, { closeModal: r }))
          : t == `saleitem`
            ? (c = (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(X_, {
                    onClick: i,
                    children: E(`#SummerSale_Redeem_Btn`),
                  }),
                  (0, W.jsx)(J, { onClick: r, children: E(`#Button_Cancel`) }),
                ],
              }))
            : t == `pricechange` &&
              (c = (0, W.jsx)(Bv, { fnReloadItemDef: o, closeModal: r }));
    return (0, W.jsx)(x, {
      "flow-children": `row`,
      className: oc,
      ...s,
      children: c,
    });
  },
  Z = (e) => {
    let { step: t, className: n, ...r } = e,
      i = null;
    return (
      e.step == `equip`
        ? (i = (0, W.jsx)(`div`, { className: S(ic, ac) }))
        : e.step == `equipped` &&
          (i = (0, W.jsx)(G, { className: S(ic, void 0) })),
      (0, W.jsxs)(`div`, {
        className: S(n, rc),
        ...r,
        children: [i, e.children],
      })
    );
  },
  Vv = (e) => {
    let { icon: t, ...n } = e;
    return (0, W.jsx)(`div`, {
      className: bc,
      ...n,
      children: (0, W.jsx)(`div`, {
        className: xc,
        style: t && { backgroundImage: `url( ${t} )` },
        children: e.children,
      }),
    });
  },
  Hv = (e) => {
    let { definition: t, badgeLevel: n, title: r } = e;
    if (!n) return null;
    let i = t.community_item_data.badge_data[n - 1]?.image,
      a = el;
    return (
      H.Get().GetUserSeasonalBadgeLevel() == n && (a = $c),
      (0, W.jsxs)(`div`, {
        className: Gc,
        children: [
          (0, W.jsx)(`div`, { className: qc, children: r }),
          (0, W.jsxs)(`div`, {
            className: Yc,
            children: [
              (0, W.jsx)(`div`, {
                className: Xc,
                children: (0, W.jsx)(`div`, {
                  className: Zc,
                  style: { backgroundImage: `url( ${fd(t.appid, i)} )` },
                }),
              }),
              (0, W.jsx)(`div`, { className: Qc }),
              (0, W.jsx)(`div`, {
                className: S(tl, a),
                children: (0, W.jsx)(`div`, { className: nl, children: n }),
              }),
            ],
          }),
        ],
      })
    );
  },
  Q = (e) => {
    let { definition: t, step: n, description: r, ...i } = e,
      a,
      o = null;
    if (
      (n == `equip` || n == `equipped`) &&
      t.rewardDefinition &&
      t.rewardDefinition.type == 1
    )
      a = (0, W.jsx)(`div`, {
        className: fc,
        children: E(`#Redeem_YoursToOwn`, dv(t.rewardDefinition)),
      });
    else if (n == `cantredeemforapp`) {
      let e = (0, W.jsx)(`span`, {
        className: mc,
        children: y.GetAppInfo(t.rewardDefinition.appid).name || ``,
      });
      o = (0, W.jsx)(`div`, {
        className: S(fc, pc),
        children: rt(`#Redeem_CantRedeemItemForApp`, e),
      });
    } else if (n == `cantafford`) {
      let e = av(t) - H.Get().GetPointsAvailable().getLowBits();
      o = (0, W.jsx)(`div`, {
        className: S(fc, pc),
        children: E(`#Redeem_CantAfford`, ut(e)),
      });
    }
    return (0, W.jsxs)(`div`, {
      className: dc,
      ...i,
      children: [
        a,
        (0, W.jsx)(`div`, { children: r }),
        e.children,
        o,
        (0, W.jsx)(`div`, {
          className: hc,
          children: E(`#Redeem_RefundWarning`),
        }),
      ],
    });
  },
  $ = z.forwardRef((e, t) => {
    let { className: n, ...r } = e;
    return (0, W.jsx)(x, {
      ref: t,
      className: S(Js, n),
      ...r,
      children: e.children,
    });
  });
function Uv(e) {
  let { children: t, destructive: n, onEscKeypress: r } = e;
  return (0, W.jsx)(Xe, {
    onEscKeypress: r,
    bHideCloseIcon: !0,
    bDestructiveWarning: n,
    hideTopBar: !1,
    bGamepadUIScrollWithin: !0,
    children: t,
  });
}
function Wv(e) {
  let t = Kt() !== `desktop`;
  return (0, W.jsx)(x, { className: S(qs, t && `NM6fjIFjHkY-`), ...e });
}
var Gv = `_00D5nJ9-bK0-`,
  Kv = `FYkEr1tJnZE-`;
function qv(e) {
  return Math.max(0, e.cTotalMatchingUnfiltered - e.cTotalMatching);
}
function Jv(e) {
  let t = qv(e);
  return t === 0 ? null : E(`#HiddenWithCountButton`, it(t));
}
function Yv(e) {
  let t = qv(e);
  return t === 0
    ? null
    : (0, W.jsx)(
        ni,
        { title: Ke(`#HiddenItems_Explanation`, t, it(t)), children: Jv(e) },
        `HiddenCallout`,
      );
}
var Xv = (e) => {
    switch (e.descriptor.type) {
      case 1:
        let t = (0, W.jsx)(Zv, { ...e });
        return e.descriptor.bHomogeneous ? (0, W.jsx)(rs, { children: t }) : t;
      case 0:
        let n = (0, W.jsx)(ty, { ...e });
        return e.descriptor.bHomogeneous ? (0, W.jsx)(rs, { children: n }) : n;
      case 2:
        return (0, W.jsx)(Ut, {
          children: (t) =>
            t === `desktop`
              ? (0, W.jsx)(ny, { ...e })
              : (0, W.jsx)(ry, { ...e }),
        });
      default:
        return (
          console.error(`Unknown cluster display: ${e.descriptor.type}`), null
        );
    }
  },
  Zv = class extends z.Component {
    render() {
      if (this.props.descriptor.type != 1) return null;
      let {
          descriptor: {
            cluster: { id: e, title: t, subtitle: n, GetRewards: r },
            title: i,
            subtitle: a,
            bHideHiddenItemCount: o,
          },
          linkedPage: s,
          additionalFilter: c,
        } = this.props,
        l = s ? _r(s) : void 0,
        u = {
          getItems: (e, t) => r(e, t, c),
          title: i || t,
          subtitle: a || n,
          route: l,
          bHideHiddenItemCount: !!o,
        };
      return (0, W.jsx)(Ut, {
        children: (e) =>
          e === `desktop` ? (0, W.jsx)(ey, { ...u }) : (0, W.jsx)($v, { ...u }),
      });
    }
  };
Zv = w([g], Zv);
var Qv = 10,
  $v = g((e) => {
    let {
        title: t,
        subtitle: n,
        route: r,
        getItems: a,
        bHideHiddenItemCount: o,
      } = e,
      s = i(),
      [c, l] = z.useState(Qv),
      u = () => l(c + Qv),
      d = a(0, c),
      { rewards: f, bLoadingMore: p, cTotalMatching: m } = d,
      h = ru();
    if (m === 0) return null;
    let ee = !o && !r && Jv(d);
    return (0, W.jsx)(ei, {
      title: t,
      subtitle: ee || void 0,
      rightActions: r
        ? (0, W.jsx)(ot, {
            to: r,
            children: (0, W.jsx)(ti, {
              onClick: () => s.push(r),
              children: E(`#SeeAllButton`),
            }),
          })
        : void 0,
      children: (0, W.jsx)(Ql, {
        children: (0, W.jsx)(Yr, {
          items: f,
          loadMore: u,
          bLoadingMore: p,
          renderItem: (e) => (0, W.jsx)(iy, { definition: e }, e.defid),
          style: h,
        }),
      }),
    });
  }),
  ey = g((e) => {
    let {
        title: t,
        subtitle: n,
        route: r,
        getItems: i,
        bHideHiddenItemCount: a,
      } = e,
      o = (e, t) => i(e, t).rewards,
      s = i(0, 0),
      c = Br(o, (e) => (0, W.jsx)(iy, { definition: e }, e.defid), {
        itemClassName: Gv,
        fnRenderItemSkeleton: () => (0, W.jsx)(Rs, {}),
      }),
      l = c.bAllowNext || c.bAllowPrev,
      u = ``;
    if (
      ((u =
        s.cMaxToReturn > 0
          ? E(`#SeeAllButton`)
          : s.cTotalMatching > 0
            ? E(`#SeeAllWithCountButton`, it(s.cTotalMatching))
            : E(`#SeeAllButton`)),
      s.cTotalMatching === 0 && !s.bLoadingMore)
    )
      return null;
    let d = !l || !r,
      f = !a && d && Yv(s),
      p = [],
      m = [];
    return (
      !d &&
        p.push(
          (0, W.jsx)(
            ot,
            { to: r, children: (0, W.jsx)(ti, { children: u }) },
            `SeeAll`,
          ),
        ),
      l && m.push((0, W.jsx)(Ur, { ...c }, `CarouselControls`)),
      f && (m.length == 0 ? m.push(f) : p.length == 0 && p.push(f)),
      (0, W.jsx)(ei, {
        title: t,
        subtitle: n,
        leftActions: p,
        rightActions: m,
        children: (0, W.jsx)(Hr, {
          style: { width: `100%`, flexWrap: `wrap` },
          ...c,
        }),
      })
    );
  }),
  ty = g((e) => {
    let {
        descriptor: {
          title: t,
          subtitle: n,
          cluster: { id: r, title: i, subtitle: a, GetRewards: o },
        },
        additionalFilter: s,
      } = e,
      c = (e, t) => o(e, t, s),
      l = Yv(c(0, 0));
    return (0, W.jsx)(ei, {
      title: t || i,
      subtitle: n || a,
      rightActions: l || void 0,
      children: (0, W.jsx)(
        zs,
        {
          style: { width: `100%` },
          itemClassName: Gv,
          getItems: c,
          renderItem: (e) => (0, W.jsx)(iy, { definition: e }, e.defid),
          renderItemSkeleton: () => (0, W.jsx)(Rs, {}),
        },
        `${r}||${JSON.stringify(s)}`,
      ),
    });
  }),
  ny = g((e) => {
    let { descriptor: t, additionalFilter: n, linkedPage: r } = e,
      i = Bt(`(min-width: 1070px)`);
    if (t.type !== 2)
      return (
        console.error(
          `Attempt to render a hero cluster with a non-hero view. Cluster ${t.cluster.id}`,
        ),
        null
      );
    let {
        strImage: a,
        bFullBleedImage: o,
        theme: s,
        title: c,
        subtitle: l,
        cluster: { title: u, subtitle: d, GetRewards: f },
      } = t,
      p = r ? _r(r) : void 0,
      m = f(0, i ? 4 : 3, n),
      h =
        m.bLoadingMore && m.rewards.length === 0
          ? [
              (0, W.jsx)(Rs, {}, `0`),
              (0, W.jsx)(Rs, {}, `1`),
              (0, W.jsx)(Rs, {}, `2`),
            ]
          : m.rewards.map((e) =>
              (0, W.jsx)(iy, { definition: e, theme: s }, e.defid),
            );
    return (0, W.jsx)(ei, {
      children: (0, W.jsx)(Gs, {
        title: c || u,
        description: l || d,
        imgSrc: a,
        fullbleed: o,
        style: { width: `100%` },
        itemClassName: Gv,
        actions: (0, W.jsx)(ot, {
          to: p,
          children: (0, W.jsx)(Ks, { theme: s, children: E(`#SeeAllButton`) }),
        }),
        children: h,
      }),
    });
  }),
  ry = g((e) => {
    let { descriptor: t, additionalFilter: n, linkedPage: r } = e,
      a = i();
    if (t.type !== 2)
      return (
        console.error(
          `Attempt to render a hero cluster with a non-hero view. Cluster ${t.cluster.id}`,
        ),
        null
      );
    let {
        strImage: o,
        bFullBleedImage: s,
        theme: c,
        title: l,
        subtitle: u,
        cluster: { title: d, subtitle: f, GetRewards: p },
      } = t,
      m = r ? _r(r) : void 0;
    return (0, W.jsx)(ei, {
      children: (0, W.jsx)(Gs, {
        title: l || d,
        description: ``,
        imgSrc: o,
        fullbleed: s,
        style: { width: `100%` },
        itemClassName: Gv,
        actions: (0, W.jsx)(ot, {
          to: m,
          children: (0, W.jsx)(Ks, {
            onClick: () => a.push(m),
            theme: c,
            className: Kv,
            children: E(`#SeeAllButton`),
          }),
        }),
        children: (0, W.jsx)(Yr, {
          items: p(0, 6, n).rewards,
          loadMore: () => {},
          renderItem: (e) =>
            (0, W.jsx)(iy, { definition: e, theme: c }, e.defid),
        }),
      }),
    });
  }),
  iy = (e) => {
    let { definition: t, theme: n } = e,
      r = i();
    return (0, W.jsx)(As, {
      definition: t,
      onClick: (e) => {
        t.type === 5 || t.type === 6
          ? r.push(C.LoyaltyItemBundle(t.defid))
          : $_(e, t);
      },
      theme: n,
    });
  },
  ay = `UKNN-VSVN60-`,
  oy = `_4yZ2jlBr-qc-`,
  sy = `_9xOXBdSOJCk-`,
  cy = `oYAjUTuUHeY-`;
function ly(e) {
  let {
      title: t,
      description: n,
      image: r,
      iconComponent: i,
      linked_page: a,
      link_text: o,
    } = e,
    s = i,
    c = typeof a == `string` ? a : _r(a);
  return (0, W.jsx)(ei, {
    children: (0, W.jsxs)(`div`, {
      className: ay,
      children: [
        r && (0, W.jsx)(`img`, { className: `zoPKWGHvEZ0-`, src: r }),
        i && (0, W.jsx)(s, { className: `zoPKWGHvEZ0-` }),
        (0, W.jsxs)(`div`, {
          className: oy,
          children: [
            (0, W.jsx)(`div`, { className: sy, children: t }),
            (0, W.jsx)(`div`, { className: void 0, children: n }),
          ],
        }),
        (0, W.jsx)(Jt, { className: cy, to: c, children: o }),
      ],
    }),
  });
}
var uy = `Fy-u3ElJkZ0-`,
  dy = `kYT-MBE2bZg-`,
  fy = `_7nsR0k0ssII-`;
function py(e) {
  let { children: t } = e,
    n = z.useRef(null);
  return (
    z.useEffect(() => {
      n.current && n.current.NavTree()?.Activate(!0);
    }, []),
    (0, W.jsx)(Vt, {
      children: (0, W.jsx)(x, {
        className: S(uy),
        navRef: n,
        children: (0, W.jsx)(mt, {
          domain: `store.steampowered.com`,
          feature: `pointsshop`,
          children: (0, W.jsx)(R, {
            display: `flex`,
            flexDirection: `row`,
            className: dy,
            children: (0, W.jsx)(R, {
              flex: `1`,
              className: void 0,
              "flow-children": `column`,
              children: t,
            }),
          }),
        }),
      }),
    })
  );
}
function my(e) {
  (0, z.useEffect)(
    () => (
      H.Get().SetCurrentSearchPlaceholder(e),
      () => H.Get().SetCurrentSearchPlaceholder(``)
    ),
    [e],
  );
}
var hy = new URL(
    `../../../images/applications/store/coin_single.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  gy = new URL(
    `../../../images/applications/store/bored.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _y = new URL(
    `../../../images/applications/store/happy.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  vy = new URL(
    `../../../images/applications/store/boombox.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  yy = new URL(
    `../../../images/applications/store/csgoChat_128_chickendance.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  by = new URL(
    `../../../images/applications/store/csgoChat_128_hugs.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  xy = new URL(
    `../../../images/applications/store/dance.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Sy = new URL(
    `../../../images/applications/store/icons_floor.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Cy = `JDQq5qM7-gM-`,
  wy = `_4MeXsKxzWjc-`,
  Ty = `qda3UHfYxN4-`,
  Ey = `_8muhPT-1QqU-`,
  Dy = `_7UvtC7QiTN8-`,
  Oy = `nSTdLsKaM18-`,
  ky = `QgDGK3-ZeKk-`,
  Ay = `OPJAScsg1LM-`,
  jy = `Czz5J4R3RrM-`,
  My = `ydJU827qD-s-`,
  Ny = `_5sdsIA1uVHE-`,
  Py = new URL(
    `../../../images/applications/store/MysterySticker.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Fy = g((e) => {
    let t = {
        item_name: `Free Item`,
        item_title: E(`#SummerSale_ItemTitle`),
        animated: !0,
      },
      n = {
        defid: void 0,
        appid: Nr.Get().GetCurrentSaleRewardAppID(),
        type: 1,
        community_item_class: 11,
        point_cost: `0`,
        quantity: `1`,
        active: !0,
        community_item_data: t,
      },
      r = null,
      i = null,
      a = (e) => $_(e, n, null, !0),
      o = Py,
      s = E(`#SummerSale_ItemName`),
      c = Nr.Get().BCanClaimFreeSaleReward();
    if (!c) {
      ((i = (0, W.jsx)(`div`, {
        className: $i,
        children: E(`#Rewards_Claimed`),
      })),
        (r = S(ky, ji)),
        (a = null));
      let e = Nr.Get().GetClaimedSaleRewardItemDef();
      e &&
        ((s = e.community_item_data.item_title),
        (o = `${M.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_item_data.item_image_small}`));
    }
    return (0, W.jsx)(R, {
      display: `flex`,
      flexDirection: `column`,
      className: Cy,
      children: (0, W.jsxs)(R, {
        className: Dy,
        children: [
          (0, W.jsxs)(R, {
            display: `flex`,
            flexDirection: `column`,
            className: wy,
            children: [
              (0, W.jsx)(`div`, {
                className: void 0,
                children: (0, W.jsx)(`img`, {
                  className: Ty,
                  alt: `Sale`,
                  src: H.Get().GetFreeItemHeaderSource(),
                }),
              }),
              (0, W.jsxs)(`div`, {
                className: Oy,
                children: [
                  (0, W.jsx)(`div`, {
                    className: Ey,
                    children: E(`#SummerSale_FreeDesc_2`),
                  }),
                  !c &&
                    (0, W.jsx)(`div`, {
                      className: void 0,
                      children: (0, W.jsx)(Iy, {}),
                    }),
                  (0, W.jsx)(ot, {
                    className: Ay,
                    to: C.LoyaltyGiveawayRules(),
                    children: E(`#SummerSale_Redeem_Rules`),
                  }),
                ],
              }),
            ],
          }),
          (0, W.jsx)(`div`, {
            className: void 0,
            children: (0, W.jsx)(q, {
              name: s,
              cost: 0,
              attributes: [(0, W.jsx)(Oa, { className: Ii }, `animated`)],
              iconComponent: Dt,
              styleOverride: r,
              desc: E(`#CommunityItemClass_Sticker`),
              strPriceOverride: i,
              onClick: a,
              children: (0, W.jsx)(`img`, { className: Hi, src: o }),
            }),
          }),
        ],
      }),
    });
  }),
  Iy = g(() => {
    let e = Nr.Get().GetNextClaimTime();
    return e
      ? (0, W.jsxs)(`span`, {
          className: jy,
          children: [
            (0, W.jsx)(`span`, {
              className: My,
              children: E(`#SummerSale_NextStop`),
            }),
            (0, W.jsx)(Ly, { className: Ny, time: e.getTime() }),
          ],
        })
      : null;
  }),
  Ly = g((e) => {
    let { time: t, ...n } = e,
      r = Math.floor(Math.max(0, t - d()) / 1e3),
      i = Math.floor(r / lt.PerHour),
      a = Math.floor((r - i * lt.PerHour) / lt.PerMinute),
      o = Math.floor(r - (i * lt.PerHour + a * lt.PerMinute));
    return (0, W.jsxs)(`span`, {
      style: { fontFamily: `monospace` },
      ...n,
      children: [Ry(i), `:`, Ry(a), `:`, Ry(o)],
    });
  }),
  Ry = (e) => e.toString().padStart(2, `0`),
  zy = z.lazy(() =>
    Be(
      () => import(`./profileshowcases.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      import.meta.url,
    ),
  ),
  By = z.lazy(() =>
    Be(
      () => import(`./bundle.js`),
      __vite__mapDeps([8, 1, 2, 9, 3, 4, 5, 6, 10]),
      import.meta.url,
    ),
  ),
  Vy = class extends z.Component {
    render() {
      return (0, W.jsxs)(W.Fragment, {
        children: [(0, W.jsx)(Gy, {}), (0, W.jsx)(Hy, {})],
      });
    }
  };
Vy = w([g], Vy);
var Hy = g(() => {
  let e = f(`*/reward/:definitionid`),
    t = e && e.params && e.params.definitionid,
    n = parseInt(t);
  return (
    z.useEffect(() => {
      n && !isNaN(n) && Q_(null, n);
    }, [n]),
    null
  );
});
function Uy() {
  return (0, W.jsxs)(`div`, {
    className: un,
    children: [
      (0, W.jsx)(Ra, { className: sn }),
      (0, W.jsxs)(`div`, {
        className: cn,
        children: [` `, E(`#ShopLink`), ` `],
      }),
    ],
  });
}
var Wy = class extends z.Component {
  GetCoupon() {
    let e = H.Get().GetCouponPromosForUser(),
      t = H.Get().GetPointsAvailable(),
      n = 0,
      r = 0,
      i = 0,
      a = 0;
    return (
      e.forEach((e) => {
        let o = H.Get().GetCouponDefinition(e.loyalty_reward_id);
        if (o) {
          ((a += e.max_use_count * parseInt(e.discount_amount)),
            (r += e.available_use_count));
          for (let r = 0; r < e.available_use_count; r++)
            (n + parseInt(o.point_cost) <= t.getLowBits() &&
              ((i += parseInt(e.discount_amount)),
              (n += parseInt(o.point_cost))),
              (i = Math.max(i, parseInt(e.discount_amount))),
              (n ||= parseInt(o.point_cost)));
        }
      }),
      null
    );
  }
  render() {
    let e = [];
    H.Get()
      .getLoyaltyRewardDefMap()
      .forEach((t) => {
        e.length < 3 && t.type == 1 && e.push(t);
      });
    let t = H.Get().GetPageDescriptor({ type: `custom`, pageid: hr }),
      n = (0, W.jsxs)(`div`, {
        className: an,
        children: [
          (0, W.jsxs)(`div`, {
            className: pn,
            children: [
              (0, W.jsx)(`img`, { className: Sn, src: hy }),
              (0, W.jsx)(`img`, { className: xn, src: Sy }),
              (0, W.jsxs)(`div`, {
                className: mn,
                children: [
                  (0, W.jsx)(`img`, { className: hn, src: yy }),
                  (0, W.jsx)(`img`, { className: gn, src: gy }),
                  (0, W.jsx)(`img`, { className: _n, src: by }),
                  (0, W.jsx)(`img`, { className: vn, src: _y }),
                  (0, W.jsx)(`img`, { className: yn, src: vy }),
                  (0, W.jsx)(`img`, { className: bn, src: xy }),
                ],
              }),
            ],
          }),
          (0, W.jsxs)(`div`, {
            className: on,
            children: [
              (0, W.jsx)(Uy, {}),
              (0, W.jsx)(`div`, {
                className: dn,
                children: E(`#ShopHome_UseRewardPoints`),
              }),
              (0, W.jsx)(`div`, {
                className: dn,
                children: E(`#ShopHome_UseRewardPoints_Subtitle`),
              }),
              (0, W.jsx)(ot, {
                className: fn,
                to: C.LoyaltyHowItWorks(),
                children: (0, W.jsxs)(Ie, {
                  className: Tn,
                  children: [` `, E(`#ShopHome_HowLinkBtn`)],
                }),
              }),
            ],
          }),
        ],
      });
    return (0, W.jsx)(rd, {
      children:
        t &&
        (0, W.jsx)(Yy, {
          header: n,
          descriptor: t,
          children:
            H.Get().BIsSaleActive() &&
            (0, W.jsx)(ei, { children: (0, W.jsx)(Fy, {}) }),
        }),
    });
  }
};
Wy = w([g], Wy);
var Gy = () =>
    (0, W.jsxs)(s, {
      children: [
        (0, W.jsx)(o, {
          path: C.LoyaltySteamBadge(),
          children: (0, W.jsx)(Ky, {}),
        }),
        (0, W.jsx)(o, {
          path: C.LoyaltyByGame(),
          children: (0, W.jsx)(eb, {}),
        }),
        (0, W.jsx)(o, {
          path: C.LoyaltyByEvent(),
          children: (0, W.jsx)(tb, {}),
        }),
        !1,
        (0, W.jsx)(o, {
          path: C.LoyaltyProfileCustomizations(),
          children: (0, W.jsx)(zy, {}),
        }),
        (0, W.jsx)(o, {
          path: C.LoyaltyItemBundle(`:bundleid`),
          render: (e) => (0, W.jsx)(By, { ...e }),
        }),
        (0, W.jsx)(o, {
          path: C.LoyaltyEvents(`:eventname`),
          render: (e) =>
            (0, W.jsx)(Qy, { eventname: e.match.params.eventname }),
        }),
        (0, W.jsx)(o, {
          path: `${C.LoyaltyStore()}/app/:appid/cluster/:clusterindex`,
          render: (e) => (0, W.jsx)(Xy, { ...e }),
        }),
        (0, W.jsx)(o, {
          path: `${C.LoyaltyStore()}/app/:appid`,
          render: (e) =>
            (0, W.jsx)(Zy, { appid: parseInt(e.match.params.appid) }),
        }),
        (0, W.jsx)(o, {
          path: `${C.LoyaltyStore()}/c/:pageid/cluster/:clusterindex`,
          render: (e) => (0, W.jsx)(Xy, { ...e }),
        }),
        (0, W.jsx)(o, {
          path: `${C.LoyaltyStore()}/c/:pageid`,
          render: (e) => (0, W.jsx)(Jy, { pageid: e.match.params.pageid }),
        }),
        (0, W.jsx)(o, { children: (0, W.jsx)(qy, {}) }),
      ],
    }),
  Ky = () => (0, W.jsx)(pd, {}),
  qy = () => (0, W.jsx)(Wy, {}),
  Jy = class extends z.Component {
    componentDidMount() {
      H.Get().SetIsUsingAppIDFilters(!0);
    }
    componentWillUnmount() {
      H.Get().SetIsUsingAppIDFilters(!1);
    }
    render() {
      let { pageid: e } = this.props,
        t = H.Get().GetAppIDFilters(),
        n = Array.from(t.keys()),
        r = H.Get().GetCurrentSearchTerm(),
        i = {
          appid: n.length ? n : void 0,
          searchLanguage: r.length ? M.LANGUAGE : void 0,
          searchTerm: r.length ? r : void 0,
        },
        a = H.Get().GetPageDescriptor({ type: `custom`, pageid: e });
      return (0, W.jsx)(td, {
        children: a
          ? (0, W.jsx)(Yy, { descriptor: a, additionalFilter: i })
          : (0, W.jsx)(Rr, {}),
      });
    }
  };
Jy = w([g], Jy);
var Yy = g((e) => {
    let {
        descriptor: {
          items: t,
          title: n,
          subtitle: r,
          searchPlaceholder: i,
          headerImage: a,
          params: o,
        },
        header: s,
        additionalFilter: c,
      } = e,
      l = s || (0, W.jsx)(dd, { title: n, subtitle: r, headerImage: a });
    my(i);
    let u = Kt() === `mobile`;
    return (0, W.jsx)(R, {
      paddingX: `none`,
      children: (0, W.jsxs)(Wt, {
        className: S(Cn, ln),
        itemClassName: wn,
        spacing: u ? `medium` : `xlarge`,
        children: [
          l,
          e.children,
          t.filter(Boolean).map((e, t) => {
            switch (e.type) {
              case `banner`:
                let { type: n, ...r } = e;
                return (0, z.createElement)(ly, {
                  ...r,
                  key: `${e.title}_${t}`,
                });
              case `clusterview`:
                return (0, W.jsx)(
                  Xv,
                  {
                    descriptor: e.view,
                    additionalFilter: c,
                    linkedPage:
                      e.view.linkedPage === null
                        ? void 0
                        : e.view.linkedPage || { ...o, clusterindex: t },
                  },
                  `${e.view.cluster.id}_${t}`,
                );
            }
          }),
        ],
      }),
    });
  }),
  Xy = class extends z.Component {
    componentDidMount() {
      H.Get().SetIsUsingAppIDFilters(!0);
    }
    componentWillUnmount() {
      H.Get().SetIsUsingAppIDFilters(!1);
    }
    DeriveClusterView() {
      let {
          match: {
            params: { pageid: e, appid: t, clusterindex: n },
          },
        } = this.props,
        r = parseInt(n);
      if (isNaN(r)) return null;
      let i;
      if (e) i = { type: `custom`, pageid: e };
      else if (t) {
        let e = parseInt(t);
        if (isNaN(e)) return null;
        i = { type: `app`, appid: e };
      } else
        return (
          console.error(`Could not determine owning page for cluster`), null
        );
      let a = H.Get().GetPageDescriptor(i);
      if (!a) return null;
      let o = a.items[r];
      return !o || o.type !== `clusterview` ? null : { ...o.view, type: 0 };
    }
    render() {
      let e = this.DeriveClusterView();
      if (!e) return null;
      let t = H.Get().GetAppIDFilters(),
        n = Array.from(t.keys()),
        r = H.Get().GetCurrentSearchTerm(),
        i = {
          appid: n.length ? n : void 0,
          searchLanguage: r.length ? M.LANGUAGE : void 0,
          searchTerm: r.length ? r : void 0,
        };
      return (0, W.jsx)(td, {
        children: (0, W.jsx)(R, {
          paddingY: `xlarge`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
          children: (0, W.jsx)(Xv, { descriptor: e, additionalFilter: i }),
        }),
      });
    }
  };
Xy = w([g], Xy);
function Zy(e) {
  let { appid: t } = e,
    n = He(),
    r = _(() => H.Get().GetPageDescriptor({ type: `app`, appid: t })),
    i = _(() => y.GetAppInfo(t));
  return r
    ? (0, W.jsx)(cd, {
        appid: t,
        children: (0, W.jsx)(Yy, {
          header: (0, W.jsx)(dd, {
            title: (0, W.jsx)(`a`, {
              href: Ye(`${M.STORE_BASE_URL}app/${i.appid}`, n),
              children: i.name,
            }),
            subtitle: r.subtitle,
          }),
          descriptor: r,
        }),
      })
    : null;
}
function Qy(e) {
  let { eventname: t } = e,
    n = de(),
    [r, i] = z.useState(5),
    a = se({
      queryKey: [`EventDetails`, t],
      queryFn: async () =>
        (
          await dr.default.get(
            M.STORE_BASE_URL + `points/ajaxgeteventdetails?event_name=` + t,
          )
        ).data,
      staleTime: 1 / 0,
    }),
    o = _(() =>
      H.Get().GetPageDescriptor({
        type: `event`,
        eventname: t,
        rgIncludedAppIDs: a.data?.details?.included_apps,
        rgPriorityAppIDs: a.data?.details?.priority_apps,
        cAppClusters: r,
      }),
    ),
    s = a.data?.details?.radial_color_override,
    c = a.data?.details?.radial_edge_color_override,
    l = a.data?.details?.rtime_event_end,
    u = He();
  if (
    ((0, z.useEffect)(() => {
      let e = document.documentElement.style.getPropertyValue(
        `--standard-root-background`,
      );
      return (
        (s || c) &&
          document.documentElement.style.setProperty(
            `--standard-root-background`,
            `radial-gradient(63.94% 1024px at 50% 200px, ${s || `#244372`} 0%, ${c || `#161A1F`} 100%)`,
          ),
        () =>
          document.documentElement.style.setProperty(
            `--standard-root-background`,
            e,
          )
      );
    }, [s, c]),
    !a.data)
  )
    return null;
  if (!o || !a.isSuccess || a.data.success != 1)
    return (console.error(`Failed to get event page for ${t}`), null);
  let d = a.data?.details?.included_apps?.concat(
      a.data?.details?.priority_apps,
    ),
    f = (0, W.jsx)(`span`, {
      className: Dn,
      children: a.data?.details?.title ?? t,
    }),
    p = (0, W.jsx)(dd, {
      title: f,
      subtitle: n > l ? E(`#PointShop_Event_Over`) : void 0,
    });
  return (
    a.data?.details?.strPageHeader &&
      (p = (0, W.jsxs)(W.Fragment, {
        children: [
          (0, W.jsx)(`img`, {
            className: En,
            src: a.data.details.strPageHeader,
          }),
          n > l &&
            (0, W.jsx)(`div`, {
              className: `aFvhThktipk-`,
              children: E(`#PointShop_Event_Over`),
            }),
        ],
      })),
    (0, W.jsxs)(td, {
      background: a.data?.details?.strPageBackground,
      children: [
        (0, W.jsx)(Yy, {
          header: (0, W.jsx)(`a`, {
            href: Ye(M.STORE_BASE_URL + a.data?.details?.url, u),
            children: p,
          }),
          descriptor: o,
        }),
        (0, W.jsx)(at, {
          trigger: `repeated`,
          onVisibilityChange: (e) => e && r < d.length && i(r + 10),
          rootMargin: `0px 0px 100px 0px`,
        }),
      ],
    })
  );
}
var $y = class extends z.Component {
    render() {
      return H.Get().BIsLoggedIn()
        ? this.props.children
        : (0, W.jsxs)(td, {
            children: [
              (0, W.jsx)(Yy, { descriptor: this.props.descriptor }),
              (0, W.jsxs)(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                },
                children: [
                  (0, W.jsx)(`div`, { children: E(`#RequiresLogin_Desc`) }),
                  (0, W.jsx)(`div`, {
                    style: { paddingTop: `10px` },
                    children: (0, W.jsx)(`span`, {
                      className: S(`btn_green_white_innerfade`, ` btn_medium`),
                      onClick: () => H.Get().ShowLoginDialog(),
                      children: (0, W.jsx)(`span`, {
                        children: E(`#RequiresLogin_Button`),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
    }
  },
  eb = class extends z.Component {
    state = { cVisible: 5 };
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
      let { cVisible: e } = this.state,
        t = H.Get().GetAppIDFilters(),
        n = H.Get().GetSortedMyGamesWithRewards(),
        r = H.Get().GetCurrentSearchTerm(),
        i = {
          searchLanguage: r.length ? M.LANGUAGE : void 0,
          searchTerm: r.length ? r : void 0,
        };
      t.size != 0 && (n = n.filter((e) => t.has(e)));
      let a = {
        title: E(`#ShopPageTitle_ByGame`),
        subtitle: E(`#ShopPageTitle_ByGame_Subtitle`),
        searchPlaceholder: E(`#SearchPlaceholder_ByGame`),
        items: n
          .slice(0, e)
          .map((e) => ({
            type: `clusterview`,
            view: {
              type: 1,
              linkedPage: { type: `app`, appid: e },
              cluster: new Cr(e, ``, i),
            },
          })),
        params: { type: `custom`, pageid: `bygame` },
      };
      return (0, W.jsx)($y, {
        descriptor: a,
        children: (0, W.jsxs)(td, {
          children: [
            (0, W.jsx)(Yy, { descriptor: a }),
            (0, W.jsx)(at, {
              trigger: `repeated`,
              onVisibilityChange: (t) =>
                t && e < n.length && this.setState({ cVisible: e + 10 }),
              rootMargin: `0px 0px 100px 0px`,
            }),
          ],
        }),
      });
    }
  };
eb = w([g], eb);
var tb = class extends z.Component {
  state = { cVisible: 5 };
  render() {
    let { cVisible: e } = this.state,
      t = H.Get().GetSortedEventAppsWithRewards(),
      n = {
        title: E(`#ShopPageTitle_ByEvent`),
        subtitle: E(`#ShopPageTitle_ByEvent_Subtitle`),
        searchPlaceholder: E(`#SearchPlaceholder_ByGame`),
        items: t
          .slice(0, e)
          .map((e) => ({
            type: `clusterview`,
            view: {
              type: 1,
              linkedPage: { type: `app`, appid: e },
              cluster: new Cr(e, ``),
            },
          })),
        params: { type: `custom`, pageid: `byevent` },
      };
    return (0, W.jsx)($y, {
      descriptor: n,
      children: (0, W.jsxs)(td, {
        children: [
          (0, W.jsx)(Yy, { descriptor: n }),
          (0, W.jsx)(at, {
            trigger: `repeated`,
            onVisibilityChange: (n) =>
              n && e < t.length && this.setState({ cVisible: e + 10 }),
            rootMargin: `0px 0px 100px 0px`,
          }),
        ],
      }),
    });
  }
};
tb = w([g], tb);
export {
  ei as A,
  _a as C,
  Ma as D,
  xa as E,
  H as M,
  Cn as N,
  Na as O,
  wn as P,
  so as S,
  G as T,
  dd as _,
  py as a,
  Ps as b,
  iy as c,
  ev as d,
  tv as f,
  td as g,
  Xu as h,
  gy as i,
  Rr as j,
  Ea as k,
  Pv as l,
  rd as m,
  vy as n,
  fy as o,
  $_ as p,
  _y as r,
  Xv as s,
  Vy as t,
  nv as u,
  zs as v,
  Fa as w,
  As as x,
  Is as y,
};
