import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Ar as t,
  Bn as n,
  C as r,
  Ga as i,
  Gi as a,
  Ii as o,
  Jr as s,
  Ka as c,
  Ma as l,
  Pn as u,
  Rt as d,
  Sa as f,
  Si as p,
  Un as m,
  Vt as ee,
  Xa as h,
  Xt as te,
  _i as g,
  _t as _,
  ar as v,
  bi as y,
  dt as b,
  eo as x,
  fi as S,
  ft as C,
  gi as w,
  hi as T,
  mi as E,
  pa as D,
  pi as O,
  pn as k,
  pt as ne,
  si as A,
  tn as j,
  vi as M,
  xi as N,
  ya as re,
  yi as P,
  yt as ie,
  zn as ae,
} from "./chunk~3126832f23.js?contenthash=Bx8rJGPC";
import {
  M as oe,
  Mu as F,
  Qc as se,
  ku as I,
  tc as ce,
} from "./chunk~6780060d19.js?contenthash=qoFfnAP9";
import { t as L } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { Et as le, ir as ue } from "./chunk~1fa4b8f2ff.js?contenthash=DQ8gxgDF";
import {
  Ct as de,
  G as fe,
  m as pe,
} from "./chunk~fac4c69429.js?contenthash=CKwkyCQ9";
import {
  $r as me,
  $t as he,
  Bt as ge,
  D as _e,
  E as ve,
  Et as ye,
  F as be,
  Ft as xe,
  Gr as Se,
  Gt as Ce,
  H as we,
  Hn as Te,
  Hr as Ee,
  Ht as De,
  I as Oe,
  It as ke,
  Jt as Ae,
  Kr as je,
  Kt as Me,
  L as Ne,
  Lt as Pe,
  M as Fe,
  Mr as Ie,
  Mt as Le,
  N as Re,
  Nt as ze,
  On as Be,
  Ot as Ve,
  P as He,
  Qr as Ue,
  Qt as We,
  Rt as Ge,
  St as Ke,
  T as qe,
  Tt as Je,
  Ut as Ye,
  Wr as Xe,
  Wt as Ze,
  Xr as Qe,
  Yt as $e,
  Z as et,
  _n as R,
  _t as tt,
  an as nt,
  bt as rt,
  cn as it,
  dn as at,
  dr as ot,
  ei as z,
  et as st,
  fi as ct,
  fn as lt,
  ft as ut,
  gn as dt,
  gt as ft,
  ht as pt,
  ii as mt,
  in as ht,
  j as gt,
  jr as _t,
  jt as vt,
  k as yt,
  kt as bt,
  ln as xt,
  mn as St,
  ni as Ct,
  nn as wt,
  nr as Tt,
  oi as Et,
  on as Dt,
  pn as Ot,
  qr as kt,
  qt as At,
  ri as jt,
  rn as Mt,
  si as Nt,
  sn as Pt,
  t as Ft,
  tn as It,
  tr as Lt,
  tt as Rt,
  un as zt,
  wr as Bt,
  wt as Vt,
  xt as Ht,
  yn as B,
  yt as Ut,
  zt as Wt,
} from "./chunk~6b8ddcaac8.js?contenthash=BqRs3VIz";
import { t as Gt } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { t as V } from "./chunk~25a6634263.js?contenthash=Cuq2ajP3";
import { h as Kt, t as qt } from "./chunk~ede3e357a2.js?contenthash=DGMGRaFx";
import "./library.js?contenthash=CVZWwsCP";
import "./chunk~ca0c999570.js?contenthash=BLelXP4B";
import { d as Jt } from "./chunk~70c16cc80c.js?contenthash=NVzsXtAX";
import { n as Yt, s as Xt } from "./chunk~31ad425656.js?contenthash=hNwbTRKk";
import { k as Zt } from "./chunk~8681f5c764.js?contenthash=CAkdBbB8";
function Qt(e) {
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
function $t(e) {
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
var H = e(x(), 1),
  U = Gt(),
  en =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  tn = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  nn = [
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
  ];
en.filter((e) => !nn.includes(e));
var rn = void 0;
function an(e) {
  return e
    ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`)
    : ((rn ||= an(en)), rn);
}
function on(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + an(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function sn(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + an(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var cn = c.box(void 0);
function ln() {
  return cn.get();
}
function un(e) {
  h(() => cn.set(e));
}
function W() {
  return cn.get() || Math.floor(Date.now() / 1e3);
}
function dn() {
  let e = cn.get();
  return e ? new Date(e * 1e3) : new Date();
}
var G = e(p(), 1),
  fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: g.readInt32, bw: N.writeInt32 },
            active: { n: 2, br: g.readBool, bw: N.writeBool },
            start_time: { n: 3, br: g.readUint32, bw: N.writeUint32 },
            end_time: { n: 4, br: g.readUint32, bw: N.writeUint32 },
            app_discounts: { n: 5, c: pn, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: g.readUint32, bw: N.writeUint32 },
            groups: { n: 7, c: mn, r: !0, q: !0 },
            internal_name: { n: 8, br: g.readString, bw: N.writeString },
            localization: { n: 9, c: hn },
            reveal_time: { n: 10, br: g.readUint32, bw: N.writeUint32 },
            release_date_min: { n: 11, br: g.readUint32, bw: N.writeUint32 },
            winner_appid: { n: 12, br: g.readUint32, bw: N.writeUint32 },
            flag: { n: 13, br: g.readEnum, bw: N.writeEnum },
            release_date_max: { n: 14, br: g.readUint32, bw: N.writeUint32 },
            item_type: { n: 15, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            discount: { n: 2, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            group_name: { n: 2, br: g.readString, bw: N.writeString },
            app_discounts: { n: 3, c: pn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  hn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: g.readString, bw: N.writeString },
            title_linebreak: { n: 2, br: g.readString, bw: N.writeString },
            title_award: { n: 3, br: g.readString, bw: N.writeString },
            award_description: { n: 4, br: g.readString, bw: N.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  gn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: g.readString, bw: N.writeString },
            sale_appid: { n: 2, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  _n = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: fn, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: g.readUint32,
              pbr: g.readPackedUint32,
              bw: N.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  vn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            appid: { n: 2, br: g.readUint32, bw: N.writeUint32 },
            communityitemid: {
              n: 3,
              br: g.readUint64String,
              bw: N.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  yn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: g.readUint32, bw: N.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  bn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: vn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  xn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: g.readInt32, bw: N.writeInt32 },
            appid: { n: 2, br: g.readUint32, bw: N.writeUint32 },
            sale_appid: { n: 3, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Sn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: vn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  Cn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            appid: { n: 2, br: g.readUint32, bw: N.writeUint32 },
            last_updated: { n: 3, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  wn = class e extends G.Message {
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
  Tn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Cn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  En = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || E(e.M()),
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
              br: g.readFixed64String,
              bw: N.writeFixed64String,
            },
            code: { n: 2, br: g.readFixed64String, bw: N.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  Dn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            nominated_id: { n: 2, br: g.readUint32, bw: N.writeUint32 },
            source: { n: 3, br: g.readEnum, bw: N.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  On = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: Cn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  kn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  An = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || E(e.M()),
        G.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: jn, r: !0, q: !0 },
            suggested_events: { n: 2, c: Mn, r: !0, q: !0 },
            suggested_apps: { n: 3, c: Nn, r: !0, q: !0 },
            debug_query: { n: 4, br: g.readString, bw: N.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  jn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            playtime: { n: 2, br: g.readInt32, bw: N.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Mn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: g.readUint32, bw: N.writeUint32 },
            event_gid: {
              n: 2,
              br: g.readUint64String,
              bw: N.writeUint64String,
            },
            appid: { n: 3, br: g.readUint32, bw: N.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  Nn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: g.readUint32, bw: N.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Pn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: g.readBool, bw: N.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  Fn = class e extends G.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || E(e.M()),
        G.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: g.readFixed64String, bw: N.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= M(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return y(e.M(), t, n);
    }
    static fromObject(t) {
      return w(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new G.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return T(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      P(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new G.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  In;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, v(gn, t, n), _n, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, v(xn, t, n), Sn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, v(yn, t, n), bn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserVotes = r;
})((In ||= {}));
var Ln;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, v(wn, t, n), Tn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, v(En, t, n), Tn, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, v(Dn, t, n), On, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      v(kn, t, n),
      An,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, v(Pn, t, n), Fn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetNominationShareLink = a;
})((Ln ||= {}));
var Rn = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  },
  zn = `{STEAM_CLAN_IMAGE}`,
  Bn = `{STEAM_CLAN_LOC_IMAGE}`;
function Vn(e) {
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
function Hn(e) {
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
function Un(e) {
  let n = t(),
    r = new Image();
  return (
    (r.onload = () => n.resolve(r)),
    (r.onerror = (e) => {
      (console.error(`LoadImage failed to load the image, details`, e),
        n.resolve(void 0));
    }),
    (r.src = e),
    n.promise
  );
}
function Wn(e) {
  let n = t(),
    r = document.createElement(`video`);
  return (
    (r.preload = `metadata`),
    r.addEventListener(`loadedmetadata`, () => n.resolve(r)),
    (r.onerror = (e) => {
      (console.error(`LoadVideo failed to load the video, details`, e),
        n.resolve(void 0));
    }),
    (r.src = e),
    n.promise
  );
}
function Gn(e) {
  return e.startsWith(`image/`);
}
function Kn(e) {
  return e.startsWith(`video/`);
}
async function qn(e, n) {
  if (n) return Wn(URL.createObjectURL(e));
  {
    let n = t(),
      r = new FileReader();
    ((r.onload = () => n.resolve(r.result ?? void 0)),
      (r.onerror = () => {
        (console.error(
          `GetMediaElementFromFile failed to load the image, details`,
          r.error,
        ),
          n.resolve(void 0));
      }),
      r.readAsDataURL(e));
    let i = await n.promise;
    return i ? Un(i.toString()) : void 0;
  }
}
function Jn(e) {
  return e
    ? e instanceof HTMLVideoElement
      ? { width: e.videoWidth, height: e.videoHeight }
      : { width: e.width, height: e.height }
    : { width: 0, height: 0 };
}
function Yn(e, t) {
  return `${e}/${t}`;
}
var Xn = H.createContext({});
function Zn() {
  return H.useContext(Xn);
}
RegExp(`${Bn.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function Qn(e, t, n = 0) {
  return $n(e, t, n, Zn());
}
function $n(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return K.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = K.GetBaseURL(),
      a = e.substring(Bn.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = K.GenerateURLFromHashAndExt(o, s);
    if (r?.[Yn(o, s)] === !1) return c;
    let l = K.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return (l.push(c), l);
  }
  return e;
}
var K = {
    GetBaseURL() {
      return `${n.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${n.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(zn, this.GetBaseURL())), e.replace(`http://`, `https://`)
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
      return (e.file_type == null ? null : Hn(e.file_type)) ?? `.jpg`;
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
        i = [n + `/` + o(t) + r];
      return (t == 4 && i.push(n + `/` + a(o(t)) + r), i);
    },
    GenerateURLFromHashAndExt(e, t, n = q.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = q.full, r, i) {
      e instanceof V && (e = e.GetAccountID());
      let s = this.GetBaseURL(),
        c = r != null && r != -1;
      if (n == q.full && !c) return s + e + `/` + t;
      {
        let l = t.substring(t.lastIndexOf(`.`)),
          u = t.substring(0, t.length - l.length);
        return !c || r == 0 || i != `localized_image_group`
          ? s + e + `/` + u + n + l
          : s + e + `/` + u + `/` + a(o(r)) + l;
      }
    },
    GetHashAndExtFromURL(e) {
      let t = this.GetBaseURL();
      return !e?.startsWith(t) ||
        ((e = e.substring(t.length)), e.indexOf(`/`) == -1)
        ? null
        : ((e = e.substring(e.indexOf(`/`) + 1)), e);
    },
    GenerateEditableURLFromHashAndExt(e, t, r) {
      let i =
        n.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return (r && (i += `&lang=` + r), i);
    },
    GetMimeType(e) {
      return Vn(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(e, n, r) {
      let i = t(),
        a = new Image();
      ((a.crossOrigin = `anonymous`),
        (a.onerror = (t) => {
          let n = { success: 2 };
          (r ||
            ((n.err_msg =
              `Load fail on url ` + e + ` with error: ` + Jt(t).strErrorMsg),
            console.error(n.err_msg)),
            (n.success = 2),
            i.resolve(n));
        }),
        (a.onload = () => {
          let t = { success: 2 };
          ((t.width = a.width),
            (t.height = a.height),
            !(a.width > 0) || !(a.height > 0)
              ? (S(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + e,
                ),
                (t.err_msg = `No resolution reported for url ` + e),
                i.resolve(t))
              : ((t.success = 1), i.resolve(t)));
        }),
        (a.src = e),
        n.token.promise.catch(() => {
          ((a.onload = () => {}),
            (a.onerror = () => {}),
            i.resolve({ success: 52 }));
        }));
      let o,
        s = new Promise((e, t) => {
          o = setTimeout(() => t(), 1e4);
        }),
        c;
      try {
        c = await Promise.race([s, i.promise]);
      } catch {
        c = { success: 16, err_msg: `We timed out processing images` };
      } finally {
        clearTimeout(o);
      }
      return c;
    },
    BIsClanImageVideo(e) {
      return e.file_type == 4 || e.file_type == 5;
    },
  },
  q = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  er = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  tr = 39049601,
  nr = 45479024,
  rr = 41316928,
  ir = 4397053;
function ar(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function or(e, t) {
  return ar(e, ``, t).startsWith(`curator/`);
}
function sr(e) {
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
function cr(e) {
  let t = `#PartnerEvent_` + e,
    n = j.Localize(t);
  return n == t ? j.Localize(`#PartnerEvent_Other`) : n;
}
var lr = { bScheduleEnabled: !1, scheduleEntries: [] };
k(
  [s],
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
var ur = 99999,
  dr = 593110,
  fr = 1675200,
  pr = 4165890,
  mr = (function (e) {
    return (
      (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
      e
    );
  })({}),
  hr = (function (e) {
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
  gr = (function (e) {
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
  _r = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  vr = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function yr(e) {
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
function br(e) {
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
var xr = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function Sr(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= A(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      yr(t),
      (e.sale_sections[n] = { ...xr, ...t }));
  });
}
var Cr = {
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
    ...Rn,
    ...lr,
  },
  wr = `old_announce_`;
function Tr(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? _(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? _(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? _(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? _(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? _(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? _(`#PartnerEvent_MM_MajorUpdate`)
              : cr(e);
}
var Er = [
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
  Dr = [20, 31, 34],
  Or = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  kr = [D.k_ESteamRealmGlobal],
  Ar = [D.k_ESteamRealmChina],
  jr = [D.k_ESteamRealmGlobal, D.k_ESteamRealmChina],
  Mr = [],
  J = class e {
    constructor() {
      i(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new V();
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
    jsondata = Cr;
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
        (n.clanSteamID = new V(r.clanSteamID)),
        S(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new V(r.broadcaster)),
          S(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        Sr(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, r) {
      let i = new e();
      ((i.GID = t.gid),
        (i.clanSteamID = new V(t.clan_steamid)),
        i.name.set(r, t.event_name ?? ``),
        (i.type = t.event_type),
        (i.appid = t.appid ?? 0),
        (i.startTime = t.rtime32_start_time),
        (i.endTime = t.rtime32_end_time),
        (i.nCommentCount = t.comment_count ?? 0),
        (i.creator_steamid = t.creator_steamid),
        (i.last_update_steamid = t.last_update_steamid),
        (i.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        Sr(i.jsondata),
        (i.rtime32_last_local_modification = t.rtime32_last_modified),
        (i.visibility_state = t.published
          ? t.hidden
            ? t.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (i.createTime = t.rtime_created),
        (i.m_nBuildID = t.build_id),
        (i.m_strBuildBranch = t.build_branch),
        (i.visibilityStartTime = t.rtime32_visibility_start),
        (i.visibilityEndTime = t.rtime32_visibility_end),
        (i.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
        (i.featured_app_tagid = t.featured_app_tagid),
        t.broadcaster_accountid &&
          (i.broadcaster = V.InitFromAccountID(
            t.broadcaster_accountid,
            n.EUNIVERSE,
          )),
        (i.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let a = t.clan_steamid_original;
      return (
        a
          ? (i.clanSteamIDOriginal = new V(a))
          : t.announcement_body?.clanid &&
            (i.clanSteamIDOriginal = V.InitFromClanID(
              Number(t.announcement_body.clanid),
              n.EUNIVERSE,
            )),
        (i.postTime = t.announcement_body?.posttime),
        (i.forumTopicGID = t.forum_topic_id),
        i.name.set(r, t.announcement_body?.headline ?? ``),
        i.description.set(r, t.announcement_body?.body ?? ``),
        (i.nCommentCount = t.comment_count ?? 0),
        (i.vecTags = [...(t.announcement_body?.tags ?? [])]),
        (i.forumTopicGID = t.announcement_body?.forum_topic_id),
        (i.nVotesUp = t.announcement_body?.voteupcount ?? 0),
        (i.nVotesDown = t.announcement_body?.votedowncount ?? 0),
        i
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
          ? new V(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              Er.includes(e) && n.vecTags.push(e);
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
    GetDayIndexFromEventStart(e = W()) {
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
      let t = C.GetELanguageFallback(e);
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
          C.IsELanguageValidInRealm(e, D.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          C.IsELanguageValidInRealm(e, D.k_ESteamRealmChina))
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
              : er.includes(e)
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
    GetImageURL(e, t = 0, n = q.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? K.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
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
          ? n.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? n.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : n.COMMUNITY_BASE_URL +
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
        : n.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = W()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = W()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = f(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = f(this.nVotesDown + t, 0, 2 ** 53 - 1));
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
            if (r.length != 0) return K.ReplacementTokenToClanImageURL(r);
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
        let r = C.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = C.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = C.GetELanguageFallback(t);
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
    BIsVisibleEvent(e = W()) {
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
    BIsEventActionEnabled(e = W()) {
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
        ? b.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        b.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        b.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return b.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = on(e, [
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
          (e = sn(e, [`p`], ` `)),
          (e = sn(e)),
          (e = Lt(e)),
          Tt(e, t || 180));
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
      if (!this.jsondata.library_spotlight || Dr.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (Or.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + te.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = W()) {
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
        b.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        _(
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
          V.InitFromAccountID(e, n.EUNIVERSE).ConvertTo64BitString(),
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
          n.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          n.STORE_BASE_URL +
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
            ? n.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? n.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? n.STORE_BASE_URL + `tags/` + (ne() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? n.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? n.STORE_BASE_URL + `genre/Early%20Access/`
                    : n.STORE_BASE_URL + e.type
          : n.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        r = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        i = this.GetSaleVanity();
      return e && or(t, r) ? e + `sale/` + i : n.STORE_BASE_URL + ar(t, i, r);
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
        c = ur + 10;
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
        S(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (br(t.section_type))
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
      return cr(this.type);
    }
    GetCategoryAsString(e) {
      return Tr(this.type, this.vecTags, e);
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
        S(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? jr : e ? kr : t ? Ar : Mr
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new V(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && m.is_valve_email
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
(k([c], J.prototype, `GID`, void 0),
  k([c], J.prototype, `AnnouncementGID`, void 0),
  k([c], J.prototype, `forumTopicGID`, void 0),
  k([c], J.prototype, `type`, void 0),
  k([c], J.prototype, `appid`, void 0),
  k([c], J.prototype, `name`, void 0),
  k([c], J.prototype, `description`, void 0),
  k([c], J.prototype, `timestamp_loc_updated`, void 0),
  k([c], J.prototype, `startTime`, void 0),
  k([c], J.prototype, `endTime`, void 0),
  k([c], J.prototype, `visibilityStartTime`, void 0),
  k([c], J.prototype, `visibilityEndTime`, void 0),
  k([c], J.prototype, `m_nBuildID`, void 0),
  k([c], J.prototype, `m_strBuildBranch`, void 0),
  k([c], J.prototype, `postTime`, void 0),
  k([c], J.prototype, `visibility_state`, void 0),
  k([c], J.prototype, `broadcaster`, void 0),
  k([c], J.prototype, `jsondata`, void 0),
  k([c], J.prototype, `nCommentCount`, void 0),
  k([c], J.prototype, `nVotesUp`, void 0),
  k([c], J.prototype, `nVotesDown`, void 0),
  k([c], J.prototype, `bOldAnnouncement`, void 0),
  k([c], J.prototype, `announcementClanSteamID`, void 0),
  k([c], J.prototype, `loadedAllLanguages`, void 0),
  k([c], J.prototype, `bLoaded`, void 0),
  k([c], J.prototype, `deleteInProgress`, void 0),
  k([c], J.prototype, `vecTags`, void 0),
  k([c], J.prototype, `last_update_steamid`, void 0),
  k([c], J.prototype, `rtime32_last_modified`, void 0),
  k([c], J.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  k([c], J.prototype, `rtime32_last_local_modification`, void 0),
  k([c], J.prototype, `rtime32_moderator_reviewed`, void 0),
  k([c], J.prototype, `video_preview_type`, void 0),
  k([c], J.prototype, `video_preview_id`, void 0),
  k([c], J.prototype, `m_overrideCurrentDay`, void 0));
function Nr(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function Pr(e) {
  return Nr(e) ? wr + e.announcement_body?.gid : e.gid;
}
function Fr(e, t) {
  let n = new J();
  if (
    ((n.clanSteamID = e),
    S(
      n.clanSteamID && n.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        n.clanSteamID.ConvertTo64BitString() +
        ` ` +
        l.EUNIVERSE,
    ),
    (n.GID = Pr(t)),
    (n.bOldAnnouncement = Nr(t)),
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
      (n.announcementClanSteamID = new V(e.clanid)),
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
  t.broadcaster_accountid && (n.broadcaster = new V(t.broadcaster_accountid));
  let r = Cr;
  try {
    n.jsondata = { ...r, ...(t.jsondata ? JSON.parse(t.jsondata) : void 0) };
  } catch (e) {
    let t = Jt(e);
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
    ((n.jsondata.localized_capsule_image = A(
      n.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_title_image = A(
      n.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_subtitle = A(
      n.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (n.jsondata.localized_summary = A(
      n.jsondata.localized_summary || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_title = A(
      n.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_left_image = A(
      n.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_broadcast_right_image = A(
      n.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_header = A(
      n.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_overlay = A(
      n.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_banner = A(
      n.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_product_mobile_banner = A(
      n.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (n.jsondata.localized_sale_logo = A(
      n.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    n.jsondata.sale_num_headers !== void 0 &&
      n.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < n.jsondata.sale_num_headers; ++e)
      n.jsondata.localized_per_day_sales_header[e] = A(
        n.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    Sr(n.jsondata),
    n.jsondata.email_setting &&
      n.jsondata.email_setting.sections &&
      n.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = A(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = A(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = A(e.localized_image, 32, null)));
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
        ? mr.k_EEventStateUnlisted
        : t.hidden
          ? mr.k_EEventStateStaged
          : mr.k_EEventStateVisible
      : mr.k_EEventStateUnpublished),
    n
  );
}
var Y = e(de(), 1),
  Ir = `Og4Odc3VLI8-`,
  Lr = `oliNocjo3ok-`,
  Rr = `x3qY8Eev7UU-`,
  zr = `_3lYhLNSBOpE-`,
  Br = `tyYNnQMYYyw-`,
  Vr = `-WD8g17w7iA-`;
function Hr() {
  let [e, t] = H.useState(void 0),
    n = H.useCallback(() => t(void 0), []);
  return [
    t,
    (0, U.jsx)(Zt, {
      active: e !== void 0,
      children: (0, U.jsx)(Ur, { closeModal: n, rgImageURL: e }),
    }),
  ];
}
function Ur(e) {
  let { closeModal: t, rgImageURL: n } = e,
    [r, i] = H.useState(0),
    a = n?.length ?? 0,
    o = H.useCallback(() => {
      i(r == 0 ? a - 1 : r - 1);
    }, [r, a]),
    s = H.useCallback(() => {
      n && r + 1 >= a ? i(0) : i(r + 1);
    }, [r, n, a]);
  return (0, U.jsxs)(le, {
    title: _(`#SaleTech_Screenshot_Viewer`),
    bAllowFullSize: !0,
    bOKDisabled: !0,
    closeModal: t,
    bHideCloseIcon: !0,
    modalClassName: Lr,
    children: [
      (0, U.jsx)(Wr, {
        index: r,
        numElements: n?.length || 0,
        fnForward: s,
        fnBackwards: o,
        fnClose: t,
        bCircular: !0,
      }),
      (0, U.jsx)(`div`, {
        className: Rr,
        children: (0, U.jsx)(`img`, { className: zr, src: n?.[r], alt: `` }),
      }),
    ],
  });
}
function Wr(e) {
  let {
    index: t,
    numElements: n,
    fnForward: r,
    fnBackwards: i,
    fnClose: a,
    bCircular: o,
  } = e;
  (R(`ArrowLeft`, () => i?.(), !0, !0),
    R(`Left`, () => i?.(), !0, !0),
    R(`ArrowRight`, () => r?.(), !0, !0),
    R(`Right`, () => r?.(), !0, !0),
    R(`Escape`, () => a && a(), !0, !0),
    R(`Esc`, () => a && a(), !0, !0));
  let s = n > 1;
  return (0, U.jsxs)(`div`, {
    className: Br,
    children: [
      s &&
        (0, U.jsxs)(U.Fragment, {
          children: [
            (0, U.jsx)(`button`, {
              type: `button`,
              className: L(
                `-WD8g17w7iA-`,
                t === 0 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: i,
              "aria-label": _(`#Carousel_Prev`),
              children: (0, U.jsx)(ce, { angle: 270 }),
            }),
            (0, U.jsx)(`button`, {
              type: `button`,
              className: L(
                `-WD8g17w7iA-`,
                t === n - 1 && !o ? `apJ9YvEIT9k-` : null,
              ),
              onClick: r,
              "aria-label": _(`#Carousel_Next`),
              children: (0, U.jsx)(ce, { angle: 90 }),
            }),
          ],
        }),
      (0, U.jsx)(`button`, {
        type: `button`,
        className: Vr,
        onClick: a,
        "aria-label": _(`#Button_Close`),
        children: (0, U.jsx)(F, {}),
      }),
    ],
  });
}
var Gr = `xq-I5249Blg-`,
  Kr = `_-8Ur6QivGZk-`,
  qr = 1.3,
  Jr = 3,
  Yr = 256;
function Xr(e) {
  let [t, n] = (0, H.useState)(!1),
    [r, i] = (0, H.useState)({
      naturalWidth: 0,
      naturalHeight: 0,
      displayWidth: 0,
      displayHeight: 0,
    }),
    a = (0, H.useRef)(null),
    [o, s] = Hr();
  return (
    (0, H.useEffect)(() => {
      r.naturalWidth > r.displayWidth * qr &&
        r.naturalHeight > r.displayHeight * qr &&
        r.naturalWidth > Yr &&
        r.naturalWidth / r.naturalHeight < Jr &&
        n(!0);
    }, [r]),
    t
      ? (0, U.jsxs)(`span`, {
          className: Gr,
          children: [
            s,
            (0, U.jsx)(`span`, { className: Kr, children: (0, U.jsx)(se, {}) }),
            (0, U.jsx)(`img`, {
              ...e,
              className: L({ ...(e.className && { [e.className]: !0 }) }),
              onClick: (t) => {
                e.src && o([e.src]);
              },
            }),
          ],
        })
      : (0, U.jsx)(`img`, {
          ...e,
          ref: a,
          onLoad: (e) => {
            if (!e.currentTarget.closest(`a`) && !dt()) {
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
function Zr(e) {
  let {
      className: t,
      srcs: n,
      lazyLoad: r,
      width: i,
      height: a,
      alt: o,
      crossOrigin: s,
    } = e,
    [c, l] = H.useState(n.length),
    [u, d] = H.useState(0);
  H.useEffect(() => {
    c != n.length && (l(n.length), d(0));
  }, [c, n.length]);
  let f = H.useCallback(() => {
    (e.onImageError && e.onImageError(e.srcs[u]),
      u + 1 < e.srcs.length && d(u + 1));
  }, [u, e]);
  return n.length == 0
    ? null
    : (0, U.jsx)(`img`, {
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
function Qr(e) {
  let [t, n] = H.useState(!1),
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
    ? (0, U.jsxs)(`div`, {
        className: Ir,
        children: [
          (0, U.jsx)(`p`, { children: _(`#Image_ErrorTitle`, i) }),
          (0, U.jsx)(`ul`, {
            children: (0, U.jsx)(`li`, { children: _(`#Image_Error_msg1`) }),
          }),
          (0, U.jsx)(`p`, { children: _(`#Image_Error_suggestion`) }),
        ],
      })
    : (0, U.jsx)(Xr, {
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
function $r(e) {
  let {
      id: t,
      imageType: n,
      bPreferAssetWithoutOverride: r,
      strAdditionalClassName: i,
      bNoShadow: a,
    } = e,
    { storeItemAsset: o, storeItemDefaultInfo: s } = So(t, n, r);
  if (n === `library` || n == `vertical`)
    return (0, U.jsx)(to, {
      id: t,
      bPreferAssetWithoutOverride: r,
      bNoShadow: a,
    });
  let c = ``;
  switch (n) {
    case `main`:
      c = Ye;
      break;
    default:
      c = Ge;
  }
  if (o === void 0 || !s)
    return (0, U.jsx)(`div`, { className: L(c, `CapsuleImageCtn`, i) });
  if (o == null) return null;
  let l = ei(o, n === `header`);
  return (0, U.jsx)(`div`, {
    className: L(c, `CapsuleImageCtn`, i),
    children: (0, U.jsx)(Zr, {
      lazyLoad: !0,
      srcs: l,
      className: L(Le),
      alt: s.name,
    }),
  });
}
function ei(e, t) {
  let n = [];
  return (e && ni(n, e, t), n.filter((e) => !!e));
}
function ti(e, t) {
  return {
    strStoreVerticalURL: B(e, `hero_capsule`),
    strLibraryVerticalURL: B(e, `library_capsule`),
  };
}
function ni(e, t, n) {
  let r = B(t, `header_2x`) ?? B(t, `header`),
    i = B(t, `main_capsule_2x`) ?? B(t, `main_capsule`);
  n ? e.push(r, i) : e.push(i, r);
}
var ri = `K2BGbCx37Cg-`,
  ii = `wnVw5QEjvtw-`,
  ai = `-a-3HG4gESE-`,
  oi = `-OQDE-IeSKo-`,
  si = `iVqIvGU08cQ-`,
  ci = `vO3l7X14-dI-`,
  li = `n1QMIymiV0w-`,
  ui = `ebRw2SGSkSY-`,
  di = `qN5ejX3iSmI-`,
  X = `_7Xd-p6v3h-U-`,
  fi = `_6uN5TDmIPak-`,
  pi = `_4UX-whX3nGs-`,
  mi = `f0EapRMh-PI-`,
  hi = `q4JwMxF0b-8-`,
  gi = `otywAXtYosA-`;
function _i(e) {
  let { id: t, ...n } = e,
    { data: r } = Et(t);
  return (0, U.jsx)(vi, { ...n, platforms: r });
}
H.memo(function (e) {
  let { platforms: t } = e;
  if (!t) return null;
  let { windows: n, mac: r, steamos_linux: i, vr_support: a } = t;
  return (0, U.jsxs)(`span`, {
    className: ai,
    children: [
      n && (0, U.jsx)(yi, {}),
      r && (0, U.jsx)(bi, {}),
      i && (0, U.jsx)(xi, {}),
      a?.vrhmd && (0, U.jsx)(Si, {}),
    ],
  });
});
var vi = H.memo(function (e) {
  let { platforms: t, eHWCompat: n, size: r = `small` } = e,
    i;
  if (n == 0)
    return (
      S(!1, `SteamHWCompatIndicator called for k_ESteamHWCompatibility_None`),
      null
    );
  if (n == 2) {
    let e = t?.steam_os_compat_category;
    if (e === void 0) return null;
    switch (e) {
      case 2:
        i = Pi;
        break;
      case 1:
        i = Mi;
        break;
      case 0:
        i = Ni;
        break;
      default:
        return (O(e, `Unhandled steam os category: ${e}`), null);
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
        i = Ai;
        break;
      case 2:
        i = ji;
        break;
      case 1:
        i = Mi;
        break;
      case 0:
        i = Ni;
        break;
      default:
        return (O(e, `Unhandled deck compat category: ${e}`), null);
    }
  }
  return (0, U.jsxs)(`span`, {
    className: (0, Y.default)(
      ui,
      r == `small` && void 0,
      r == `fill` && `_4H-iJ5vlNuc-`,
    ),
    children: [
      n == 1 && (0, U.jsx)(Di, {}),
      n == 3 && (0, U.jsx)(Oi, {}),
      n == 4 && (0, U.jsx)(ki, {}),
      (0, U.jsx)(i, {}),
    ],
  });
});
function yi() {
  return (0, U.jsx)(`span`, {
    className: (0, Y.default)(oi, si),
    title: j.Localize(`#Platform_Windows`),
    children: (0, U.jsx)(Ci, {}),
  });
}
function bi() {
  return (0, U.jsx)(`span`, {
    className: (0, Y.default)(oi, li),
    title: j.Localize(`#Platform_Mac`),
    children: (0, U.jsx)(wi, {}),
  });
}
function xi() {
  return (0, U.jsx)(`span`, {
    className: (0, Y.default)(oi, ci),
    title: j.Localize(`#Platform_Linux`),
    children: (0, U.jsx)(Ti, {}),
  });
}
function Si() {
  return (0, U.jsx)(`span`, {
    className: oi,
    title: j.Localize(`#Platform_VR`),
    children: (0, U.jsx)(Ei, {}),
  });
}
function Ci() {
  return (0, U.jsxs)(`svg`, {
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
      (0, U.jsx)(`rect`, {
        fill: `currentColor`,
        width: `60.834`,
        height: `60.835`,
      }),
      (0, U.jsx)(`rect`, {
        x: `67.165`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.835`,
      }),
      (0, U.jsx)(`rect`, {
        y: `67.164`,
        fill: `currentColor`,
        width: `60.834`,
        height: `60.836`,
      }),
      (0, U.jsx)(`rect`, {
        x: `67.165`,
        y: `67.164`,
        fill: `currentColor`,
        width: `60.835`,
        height: `60.836`,
      }),
    ],
  });
}
function wi() {
  return (0, U.jsxs)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, U.jsx)(`path`, {
        d: `M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z`,
      }),
      (0, U.jsx)(`path`, {
        d: `M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z`,
      }),
    ],
  });
}
function Ti() {
  return (0, U.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_1`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#FFFFFF`,
    x: `0px`,
    y: `0px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, U.jsx)(`path`, {
        fill: `currentColor`,
        d: `M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355`,
      }),
      (0, U.jsx)(`path`, {
        fill: `currentColor`,
        d: `M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387`,
      }),
      (0, U.jsx)(`path`, {
        fill: `currentColor`,
        d: `M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306`,
      }),
    ],
  });
}
function Ei() {
  return (0, U.jsxs)(`svg`, {
    width: `36`,
    height: `36`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, U.jsx)(`path`, {
        d: `M11.45 26.5H7.625L1 9H5.025L9.625 22.325L14.1 9H18.125L11.45 26.5Z`,
        fill: `currentColor`,
      }),
      (0, U.jsx)(`path`, {
        d: `M34.552 26.5H30.477L26.952 20.6H26.527H23.927V26.5H20.252V9H26.802C29.202 9 30.9686 9.48333 32.102 10.45C33.2353 11.4 33.802 12.7333 33.802 14.45C33.802 15.8 33.502 16.925 32.902 17.825C32.3186 18.725 31.4936 19.4083 30.427 19.875L34.552 26.5ZM23.927 12.125V17.45H26.802C27.7686 17.45 28.5186 17.2083 29.052 16.725C29.602 16.225 29.877 15.5417 29.877 14.675C29.877 13.825 29.6103 13.1917 29.077 12.775C28.5603 12.3417 27.727 12.125 26.577 12.125H23.927Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function Di() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamDeckVerified_Store_CompatSectionHeader_Desktop`),
    className: (0, Y.default)(di),
    children: (0, U.jsx)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        opacity: `0.84`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z`,
        fill: `white`,
      }),
    }),
  });
}
function Oi() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(
      `#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, Y.default)(di),
    children: (0, U.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, U.jsx)(`path`, {
          opacity: `0.84`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12.9072 9.9993C12.9072 8.39355 11.6052 7.0918 9.99936 7.0918C8.39358 7.09184 7.09186 8.39358 7.0918 9.9993C7.0918 11.555 8.31347 12.8254 9.84978 12.9034L9.99936 12.9072C11.5551 12.9072 12.8256 11.6852 12.9034 10.1489L12.9072 9.9993Z`,
          fill: `white`,
        }),
        (0, U.jsx)(`path`, {
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
function ki() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(
      `#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI`,
    ),
    className: (0, Y.default)(di),
    children: (0, U.jsxs)(`svg`, {
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: [
        (0, U.jsx)(`path`, {
          opacity: `0.84`,
          d: `M16.9997 7.85352C11.9484 7.85352 7.85352 11.9484 7.85352 16.9997H16.9997V7.85352Z`,
          fill: `white`,
        }),
        (0, U.jsx)(`path`, {
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
function Ai() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamDeckVerified_Category_Verified`),
    className: X,
    children: (0, U.jsx)(`svg`, {
      className: (0, Y.default)(fi),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function ji() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamDeckVerified_Category_Playable`),
    className: X,
    children: (0, U.jsx)(`svg`, {
      className: (0, Y.default)(pi),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Mi() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamDeckVerified_Category_Unsupported`),
    className: X,
    children: (0, U.jsx)(`svg`, {
      className: (0, Y.default)(mi),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Ni() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamDeckVerified_Category_Unknown`),
    className: X,
    children: (0, U.jsx)(`svg`, {
      className: (0, Y.default)(hi),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Pi() {
  return (0, U.jsx)(`span`, {
    title: j.Localize(`#SteamOSCompatibility_Category_Compatible`),
    className: X,
    children: (0, U.jsx)(`svg`, {
      className: (0, Y.default)(gi),
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      children: (0, U.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z`,
        fill: `currentColor`,
      }),
    }),
  });
}
function Fi(e) {
  let { bAllowOutsideOfDeck: t } = e;
  return !u() && !t ? null : (0, U.jsx)(Ii, { ...e });
}
function Ii(e) {
  let { className: t, id: n } = e,
    [r, i] = pt(),
    a = i;
  if ((i == 0 && (a = 1), !n)) return null;
  let o;
  return (
    i == 4 && (o = ii),
    (0, U.jsx)(`div`, {
      className: L(ri, o, t),
      children: (0, U.jsx)(_i, { id: n, eHWCompat: a }),
    })
  );
}
function Li(e, t) {
  return (0, H.useMemo)(() => Bi(e, t), [e, t]);
}
function Ri(e, t) {
  return (0, H.useMemo)(() => zi(e, t), [e, t]);
}
function zi(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
function Bi(e, t) {
  switch (t) {
    case `sub`:
      return { packageid: e };
    case `bundle`:
      return { bundleid: e };
    default:
      return { appid: e };
  }
}
var Vi = 6;
function Hi(e) {
  let { id: t, bHideInLibraryApps: n } = e,
    { data: r } = z(t),
    i = r?.item_type == 2,
    { data: a } = Ie(),
    o = H.useMemo(() => {
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
    c = j.LocalizePlural(`#Sale_ContentPreview`, s);
  if (i && r) {
    let e = r.included_appids?.length || 0;
    e != s && (c = j.Localize(`#Sale_Bundle_CompletePartialSet`, e - s, e));
  }
  return (0, U.jsxs)(`div`, {
    className: bt,
    children: [
      (0, U.jsxs)(`div`, {
        className: ze,
        children: [
          i &&
            (0, U.jsx)(`span`, {
              className: `_8o-dkC5O1co-`,
              children: j.Localize(`#AppType_bundle`),
            }),
          c,
        ],
      }),
      (0, U.jsx)(`div`, {
        className: Me,
        children: o
          .slice(0, Vi)
          .map((e) => (0, U.jsx)(Ui, { id: e }, `preview${ct(e)}`)),
      }),
    ],
  });
}
function Ui(e) {
  let { id: t } = e,
    { data: n } = jt(t),
    { data: r } = Ct(t);
  if (!n || !r) return null;
  let i = B(n, `small_capsule`);
  return (0, U.jsx)(He, {
    id: t,
    className: Ae,
    hoverProps: { direction: `right`, style: { minWidth: `350px` } },
    children: (0, U.jsx)(`img`, {
      src: i,
      className: At,
      loading: `lazy`,
      alt: r.name || ``,
    }),
  });
}
async function Wi() {
  let e = re(`broadcast_available_for_page`, `application_config`);
  if (Qi(e)) {
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
var Gi = class {
  constructor() {
    i(this);
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
(k([c], Gi.prototype, `title`, void 0),
  k([c], Gi.prototype, `viewer_count`, void 0),
  k([c], Gi.prototype, `gamedata_subtitle`, void 0),
  k([c], Gi.prototype, `current_selection_priority`, void 0));
var Ki = `primary`,
  qi = `featured`,
  Ji = `default_featured`,
  Yi = `general`,
  Xi = (function (e) {
    return (
      (e[(e.k_ePrimary = 3)] = `k_ePrimary`),
      (e[(e.k_eFeatured = 2)] = `k_eFeatured`),
      (e[(e.k_eDefaultFeatured = 1)] = `k_eDefaultFeatured`),
      (e[(e.k_eGeneral = 0)] = `k_eGeneral`),
      e
    );
  })({});
function Zi(e) {
  switch (e) {
    case Ki:
      return 3;
    case qi:
      return 2;
    case Ji:
      return 1;
    case Yi:
    default:
      return 0;
  }
}
function Qi(e) {
  let t = e;
  return t &&
    typeof t.success == `number` &&
    t.filtered &&
    Array.isArray(t.filtered) &&
    t.broadcast_chat_visibility
    ? t.filtered.length == 0 || typeof t.filtered[0].accountid == `string`
    : !1;
}
function $i() {
  return qt(ta());
}
function ea(e) {
  let { data: t } = $i(),
    [n, r] = (0, H.useState)(!1),
    i = Kt(),
    a = Ee();
  return (
    (0, H.useEffect)(() => {
      if (!e || e.length == 0 || !t) return r(!1);
      (async () => {
        let n = await Promise.all(
          e.filter((e) => !!e).map((e) => i.fetchQuery(Se(a, { appid: e }))),
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
function ta() {
  return {
    queryKey: na(),
    queryFn: async () => {
      let e = await Wi();
      return new Set(e);
    },
  };
}
function na() {
  return [`BroadcastApps`];
}
var ra = `hRwhHwwKlgI-`;
function ia() {
  return (0, U.jsx)(`div`, {
    className: ra,
    children: _(`#home_page_live_broadcast`),
  });
}
var aa = H.createContext(void 0),
  oa = H.createContext(void 0);
function sa(e) {
  let { appids: t, hide_status_banners: n, show_early_access: r } = e,
    { data: i } = Ie(),
    { data: a } = st(),
    o = t.length > 0 && t.every((e) => i && i.has(e)),
    s = t.length > 0 && t.every((e) => a && a.has(e)),
    c = ea(t),
    l = H.useContext(aa),
    u = H.useContext(oa),
    d = l && u ? l(u, t) : void 0,
    f = o && !n,
    p = s && !n,
    m = !n && r;
  return (0, U.jsxs)(`div`, {
    className: L(vt, `CapsuleDecorators`, d && `HasReasonBanner`),
    children: [
      d &&
        (0, U.jsx)(`span`, {
          className: L(`LCYi5cxHqgI-`, d.strClassName),
          children: d.strLabel,
        }),
      f &&
        (0, U.jsxs)(`span`, {
          className: L(`LCYi5cxHqgI-`, `ZuMhm9DQqbw-`),
          children: [
            (0, U.jsx)(`img`, {
              src: ae(
                `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUNDNzBFNTUyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUNDNzBFNTYyMUM0MTFFNDk1REVFODRBNUU5RjA2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Q0M3MEU1MzIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5Q0M3MEU1NDIxQzQxMUU0OTVERUU4NEE1RTlGMDYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv3vUKAAAAAlSURBVHjaYvz//z8DsYARpFhISAivjnfv3jGSp3jUGeQ4AyDAADZHNe2nyOBrAAAAAElFTkSuQmCC`,
              ),
              className: `ppO76q5Y-Zg-`,
              alt: j.Localize(`#Sale_InLibrary`),
            }),
            j.Localize(`#Sale_InLibrary`),
          ],
        }),
      p &&
        (0, U.jsxs)(`span`, {
          className: `LCYi5cxHqgI-`,
          children: [
            (0, U.jsx)(I, { className: `ppO76q5Y-Zg-` }),
            j.Localize(`#Sale_OnWishlist`),
          ],
        }),
      m && !f && !p && (0, U.jsx)(ca, { appids: t }),
      c && (0, U.jsx)(ia, {}),
    ],
  });
}
function ca(e) {
  let { appids: t } = e;
  return la(t)
    ? (0, U.jsx)(`span`, {
        className: L(ye, xe),
        children: j.Localize(`#Sale_EarlyAccess`),
      })
    : null;
}
function la(e) {
  let [t, n] = (0, H.useState)(!1),
    r = Kt(),
    i = Ee();
  return (
    (0, H.useEffect)(() => {
      if (!e || e.length == 0) return n(!1);
      (async () => {
        let t = await Promise.all(
          e.map((e) => r.fetchQuery(Se(i, { appid: e }))),
        );
        n(t.some((e) => e && e.is_early_access));
      })();
    }, [e, i, r]),
    t
  );
}
var ua = `WYXlhoxwBlU-`,
  Z = `Ypf4QLCxqQU-`,
  da = `rDvoly1XGQk-`,
  fa = `n2t7u-oXiwM-`,
  pa = `a1UUU8zD1Lg-`,
  ma = `jP-Qr-tpETg-`,
  ha = `triBTPpfZNQ-`,
  ga = `Ep0wQ-6tJLw-`,
  _a = `-Rp0JgQXMoA-`,
  va = `QWDBAVIUpho-`,
  ya = `JAphvRffM9M-`,
  ba = `FQQL32BdomI-`,
  xa = `xNRz-0kPOeE-`,
  Q = `-F6L5ywkZiU-`,
  Sa = `_4eS9H8fFOdo-`,
  Ca = `_7fjzkXY-Nhs-`,
  wa = `qNcrltVSVzI-`,
  Ta = `A-4nfbw4-fY-`,
  Ea = `oe2Jr-slLMU-`,
  Da = `DGZ5Ptl37g4-`,
  Oa = `zstB61TOiBA-`,
  ka = `-ZEsfMgRePw-`,
  Aa = `P-N-CSZ-VX8-`,
  ja = `aZng9sDwNZg-`,
  Ma = `x80z1JoR9dc-`,
  Na = `X-2r-tUH1gQ-`,
  Pa = `-A11cjkYCU8-`,
  Fa = `_10gRNaJtPOU-`,
  Ia = `UskT6FngUB8-`,
  La = `L03Y6ydPSDM-`,
  Ra = `rX8DGzBU5pU-`,
  za = `_8mKyAzWvx8I-`,
  Ba = `RfxR9kxm2-o-`,
  Va = `_3EpVljmp8Bg-`,
  Ha = `h1-hm2PiNH0-`,
  Ua = `ruaMViMLvdA-`;
function Wa(e) {
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
    swipe_row: f,
  } = e;
  if (typeof f == `string`)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: L(da, fa),
        children: [0, 1, 2, 3, 4].map((e) =>
          (0, U.jsx)(
            `div`,
            {
              className: L(pa, f === `tall_capsule` && `RDPLi3Xo-Mk-`),
              children: (0, U.jsx)(`div`, { className: Z }),
            },
            e,
          ),
        ),
      }),
    });
  if (f)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: da,
        children: [0, 1].map((e) =>
          (0, U.jsx)(
            `div`,
            { className: Z, style: { width: f.width, height: f.height } },
            e,
          ),
        ),
      }),
    });
  if (!t) return null;
  if (n)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: ma,
        children: (0, U.jsx)(`div`, { className: ha }),
      }),
    });
  if (r)
    return (0, U.jsx)($, {
      children: (0, U.jsx)(`div`, {
        className: ga,
        children: (0, U.jsx)(`div`, { className: ha }),
      }),
    });
  if (a)
    return (0, U.jsxs)($, {
      children: [
        (0, U.jsxs)(`div`, {
          className: Pa,
          children: [
            (0, U.jsx)(`div`, {
              className: Fa,
              children: (0, U.jsx)(`div`, { className: ha }),
            }),
            (0, U.jsx)(`div`, {
              className: Ia,
              children: (0, U.jsx)(`div`, { className: ha }),
            }),
          ],
        }),
        d &&
          (0, U.jsx)(`div`, {
            className: `lvoTx8-ZMMw-`,
            children: (0, U.jsx)(`div`, { className: `triBTPpfZNQ-` }),
          }),
      ],
    });
  if (i)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: Oa,
        children: [
          (0, U.jsx)(`div`, { className: L(ka, Z) }),
          (0, U.jsxs)(`div`, {
            className: L(Aa),
            children: [
              (0, U.jsx)(`div`, { className: L(ja, Z) }),
              (0, U.jsx)(`div`, { className: L(Ma, Z) }),
              (0, U.jsx)(`div`, { className: L(Na, Z) }),
            ],
          }),
        ],
      }),
    });
  if (o)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: Ea,
        children: [
          (0, U.jsx)(`div`, { className: Z }),
          (0, U.jsx)(`div`, { className: Z }),
          (0, U.jsxs)(`div`, {
            className: Da,
            children: [
              (0, U.jsx)(`div`, { className: Z }),
              (0, U.jsx)(`div`, { className: Z }),
            ],
          }),
        ],
      }),
    });
  if (c)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: L({ [Ba]: !0, [void 0]: l }),
        children: [
          (0, U.jsx)(`div`, { className: Z }),
          (0, U.jsxs)(`div`, {
            className: L(Aa),
            children: [
              (0, U.jsx)(`div`, { className: L(ja, Z) }),
              (0, U.jsx)(`div`, { className: L(Ma, Z) }),
              (0, U.jsx)(`div`, { className: L(Va, Z) }),
              (0, U.jsx)(`div`, { className: L(Ha, Z) }),
              (0, U.jsx)(`div`, { className: L(Ua, Z) }),
            ],
          }),
        ],
      }),
    });
  if (u)
    return (0, U.jsx)($, {
      children: (0, U.jsxs)(`div`, {
        className: La,
        children: [
          (0, U.jsx)(`div`, { className: L(Ra, Z) }),
          (0, U.jsx)(`div`, { className: L(za, Z) }),
        ],
      }),
    });
  if (s) {
    let e = [];
    for (let n = 0; n < t[0]; n++)
      e.push(
        (0, U.jsx)(
          oe,
          {
            className: ba,
            focusable: !0,
            children: (0, U.jsx)(`div`, { className: Z }),
          },
          `item_browse_ghost_` + n,
        ),
      );
    return (0, U.jsx)($, { children: e });
  }
  return t?.length == 1
    ? t[0] == 1
      ? (0, U.jsx)($, {
          children: (0, U.jsx)(`div`, {
            className: ya,
            children: (0, U.jsx)(`div`, { className: Z }),
          }),
        })
      : t[0] == 4
        ? (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: va,
              children: [
                (0, U.jsx)(`div`, { className: Z }),
                (0, U.jsx)(`div`, { className: Z }),
                (0, U.jsx)(`div`, { className: Z }),
                (0, U.jsx)(`div`, { className: Z }),
              ],
            }),
          })
        : (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: _a,
              children: [
                (0, U.jsx)(`div`, { className: Z }),
                (0, U.jsx)(`div`, { className: Z }),
                (0, U.jsx)(`div`, { className: Z }),
              ],
            }),
          })
    : t?.length == 2
      ? t[0] == 3 && t[1] == 3
        ? (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: xa,
              children: [
                (0, U.jsxs)(`div`, {
                  className: L(Q, Ca),
                  children: [
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, U.jsxs)(`div`, {
                  className: L(Q, Ca),
                  children: [
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
        : (0, U.jsx)($, {
            children: (0, U.jsxs)(`div`, {
              className: xa,
              children: [
                (0, U.jsxs)(`div`, {
                  className: L(Q, Sa),
                  children: [
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                  ],
                }),
                (0, U.jsxs)(`div`, {
                  className: L(Q, Ca),
                  children: [
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                    (0, U.jsx)(`div`, { className: Z }),
                  ],
                }),
              ],
            }),
          })
      : (0, U.jsx)($, {
          children: (0, U.jsxs)(`div`, {
            className: wa,
            children: [
              (0, U.jsxs)(`div`, {
                className: L(Q, Sa),
                children: [
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: L(Q, Ca),
                children: [
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                ],
              }),
              (0, U.jsxs)(`div`, {
                className: L(Q, Ta),
                children: [
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                  (0, U.jsx)(`div`, { className: Z }),
                ],
              }),
            ],
          }),
        });
}
function $(e) {
  return (0, U.jsx)(oe, {
    className: L(ua, e.className),
    focusableIfEmpty: !0,
    children: e.children,
  });
}
function Ga(e) {
  let [t, n] = (0, H.useState)(void 0),
    { data: r } = z(e),
    { data: i } = Nt(e),
    a = Kt(),
    o = Ee();
  return (
    (0, H.useEffect)(() => {
      if (r) {
        if (i && i.length > 0) n(i);
        else if (r.related_items?.parent_appid) {
          let e = { appid: r.related_items?.parent_appid };
          (async () => {
            let t = await a.fetchQuery(kt(o, e));
            t && t.length > 0 && n(t);
          })();
        }
      }
    }, [o, a, r, i]),
    t
  );
}
function Ka(e) {
  let { id: t } = e;
  return t ? (0, U.jsx)(qa, { id: t }) : null;
}
function qa(e) {
  let { id: t } = e,
    n = Ga(t);
  return n
    ? (0, U.jsx)(`div`, {
        className: zt,
        children: n
          .slice(0, 10)
          .map((e) =>
            (0, U.jsx)(Ft, { tagid: e.tagid, className: Je }, `tag_` + e.tagid),
          ),
      })
    : null;
}
function Ja(e) {
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
    { data: u } = z(t),
    { data: f } = mt(t),
    { data: p } = me(t),
    { bIsOwned: m } = _t(t),
    [h, te] = Oe(o, s);
  if (!u) return null;
  let g =
      (u.type === 1 && !f?.is_coming_soon) ||
      (u.related_items?.demo_appid && u.related_items?.demo_appid.length > 0),
    v = $t(u.type),
    y = n && v && g,
    b = null;
  if (!m && p?.is_free_to_keep && p?.free_to_keep_ends) {
    let e = p.free_to_keep_ends,
      t = _(
        `#Sale_default_label_Free_Promo_Description_Short`,
        ee(e) + ` @ ` + d(e, { bForce24HourClock: !1 }),
      );
    b = (0, U.jsxs)(`div`, {
      className: $e,
      children: [
        t,
        (0, U.jsx)(ue, {
          tooltip: _(`#Sale_default_Tooltip_Free_Promo_Limitation`),
        }),
      ],
    });
  }
  return (0, U.jsxs)(`div`, {
    className: L(he, c),
    children: [
      b,
      (0, U.jsxs)(`div`, {
        className: It,
        children: [
          !!y && (0, U.jsx)(qe, { id: t, className: `R0sGSaFdUWo-` }),
          !a &&
            u.type !== 1 &&
            (0, U.jsxs)(U.Fragment, {
              children: [
                !(!r || u.is_free) &&
                  (0, U.jsx)(Ya, { fnOnPurchaseOptionsClick: i }),
                !(!l || u.is_free) &&
                  (0, U.jsx)(ve, { id: t, className: `CartBtn` }),
              ],
            }),
          !a && (0, U.jsx)(Fe, { id: t }),
          h && (0, U.jsx)(we, { id: t, compatibility: te }),
        ],
      }),
    ],
  });
}
function Ya(e) {
  return (0, U.jsx)(`div`, {
    className: Vt,
    onClick: e.fnOnPurchaseOptionsClick,
    children: (0, U.jsx)(`span`, {
      children: _(`#EventDisplay_CallToAction_ShowPurchaseOptions_Button`),
    }),
  });
}
function Xa(e, t, n, i, a, o) {
  if (!n) return;
  if (!Ne(e.item_type)) {
    S(!1, `StoreItemWidgetSalePageAction: unexpected type: ` + e.item_type);
    return;
  }
  let s = Be(`${yt(e, i)}${a ? `?${a}` : ``}`, t);
  return {
    onClick: (e) => {
      let t = r(e) || window;
      o ? o(e) : s.startsWith(`steam://`) || (t.location.href = Xt(s));
    },
    onOKActionDescription: j.Localize(`#Sale_Gamepad_Action_Select`),
  };
}
function Za(e) {
  let {
      id: t,
      type: n,
      bShowDemoButton: r,
      bPreferDemoStorePage: i,
      bHidePrice: a,
      bUseSubscriptionLayout: o,
      bHidePlatforms: s,
      bHideContainedApps: c,
      bAllowTwoLinesForHeader: d,
      bShowReviewSummary: f,
      bShowDeckCompatibilityDialog: p,
      eHardwareCompatibilityDisplay: m,
      bAutoFocus: ee,
      fnOnClickOverride: h,
      bIsMarketingMessage: te,
      bPreferAssetWithoutOverride: g,
    } = e,
    _ = Li(t, n),
    [v, y] = (0, H.useState)(!1),
    b = ot(),
    { data: x, isPending: S } = Ct(_),
    { data: C } = me(_),
    { data: w } = mt(_),
    { data: T } = Ie(),
    E = Bt(_),
    D = (0, H.useRef)(null),
    [O, k] = (0, H.useState)(!1),
    ne = u(),
    [A, j] = (0, H.useState)(!1);
  ((0, H.useEffect)(() => {
    if (!A) {
      y(!1);
      return;
    }
    let e = window.setTimeout(() => y(!0), 500);
    return () => window.clearTimeout(e);
  }, [A]),
    (0, H.useEffect)(() => {
      D.current && k(D.current.offsetWidth < 370);
    }, [D]));
  let M = (0, H.useMemo)(
      () => (i && x && Ut(x) ? { appid: rt(x)[0] } : _),
      [i, _, x],
    ),
    { strStoreURL: N, snr: re } = _e(x, i);
  if (!x)
    return S
      ? (0, U.jsx)(Wa, { capsules_per_row: [1], is_item_browser: !0 })
      : null;
  let P = x.included_appids?.length || 0,
    ie = x.included_appids?.filter((e) => T?.has(e))?.length || 0,
    ae = x.item_type == 2 && !!C?.must_purchase_as_set,
    F = !c && P > 1,
    se = x.item_type == 1 && P == 1,
    I = x.item_type == 0 || se,
    ce = se && x.appid,
    le = x.name || ``,
    ue = ft(w, C),
    de = ne || !w?.is_coming_soon || ue,
    [ge, ve] = Oe(p, m);
  return (0, U.jsxs)(oe, {
    className: L({ [Dt]: !0, [void 0]: d, StoreSaleWidgetOuterContainer: !0 }),
    "flow-children": `grid`,
    navEntryPreferPosition: fe.PREFERRED_CHILD,
    autoFocus: ee,
    navKey: `preview_widget_` + ct(_),
    children: [
      (0, U.jsx)(be, {
        appid: I && `appid` in _ ? _.appid : void 0,
        children: (0, U.jsxs)(pe, {
          onClick: te ? h : void 0,
          className: L({ [Mt]: !0, [We]: !0, [Ze]: te }),
          ...Xa(x, b, ne, !!i, void 0, h),
          preferredFocus: F,
          onFocusWithin: ne ? j : void 0,
          children: [
            (0, U.jsx)(`div`, {
              className: L(ht),
              children: (0, U.jsx)(Qa, {
                id: M,
                strURL: N,
                children: (0, U.jsxs)(`div`, {
                  className: nt,
                  children: [
                    (0, U.jsx)(sa, { appids: E }),
                    (0, U.jsx)($r, {
                      id: _,
                      imageType: `header`,
                      bPreferAssetWithoutOverride: g,
                    }),
                    (0, U.jsx)(Fi, { id: _ }),
                    (0, U.jsx)(Ht, {
                      id: _,
                      active: _ && v,
                      bIsHoverMode: !0,
                      eGrowOnActivate: ne
                        ? void 0
                        : Ke.k_ETrailerGrowAmount_Medium,
                    }),
                  ],
                }),
              }),
            }),
            (0, U.jsxs)(`div`, {
              className: L({ [it]: !0, [Ve]: F }),
              children: [
                !(!I || h) &&
                  (0, U.jsx)(et, {
                    id: _,
                    classOverride: L(`x33TRfA9NLE-`, `WishlistButton`),
                    snr: re,
                  }),
                (0, U.jsx)(`div`, {
                  className: lt,
                  children: (0, U.jsx)(`a`, {
                    href: h ? void 0 : N,
                    target: l.IN_CLIENT ? void 0 : `_blank`,
                    onClick: h,
                    children: (0, U.jsx)(`div`, {
                      className: L(at, `StoreSaleWidgetTitle`),
                      children: le,
                    }),
                  }),
                }),
                !F && (0, U.jsx)(Ka, { id: _ }),
                (0, U.jsxs)(`div`, {
                  className: St,
                  ref: D,
                  children: [
                    I && (0, U.jsx)($a, { id: _ }),
                    !F &&
                      !s &&
                      _ &&
                      (0, U.jsxs)(U.Fragment, {
                        children: [
                          (0, U.jsx)(Re, {
                            id: _,
                            bMinimizePlatforms: O,
                            bHideWindows: O,
                          }),
                          !!(ge && x.item_type == 0) &&
                            (0, U.jsx)(ut, {
                              eHWCompat: ve,
                              className: `tUIs-i3NWoU-`,
                              id: _,
                            }),
                        ],
                      }),
                  ],
                }),
                !F &&
                  f &&
                  _ &&
                  (0, U.jsx)(`div`, {
                    className: `BZ9dZKOmXqE-`,
                    children: (0, U.jsx)(Rt, { id: _ }),
                  }),
                F &&
                  _ &&
                  (0, U.jsx)(Hi, {
                    id: _,
                    bHideInLibraryApps: !ae && x.item_type == 2 && ie < P,
                  }),
                !!I && (0, U.jsx)(eo, { id: _ }),
                h
                  ? (0, U.jsx)(`div`, {
                      className: he,
                      children: (0, U.jsx)(`div`, {
                        className: It,
                        children: (0, U.jsx)(Fe, { id: _ }),
                      }),
                    })
                  : (0, U.jsx)(U.Fragment, {
                      children:
                        o && I && ce
                          ? (0, U.jsx)(gt, { appid: ce, bIsMuted: !!v })
                          : (0, U.jsx)(Ja, {
                              id: _,
                              bShowDemoButton: r,
                              bHidePrice: a,
                              bHideWishlistButton: de,
                              eHardwareCompatibilityDisplay: ve,
                            }),
                    }),
                (0, U.jsx)(`div`, {
                  className: wt,
                  children: (0, U.jsx)($r, {
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
        (0, U.jsx)(`div`, { className: `-cW4bgqyLAo-`, children: e.strReason }),
    ],
  });
}
function Qa(e) {
  let { id: t, strURL: n, children: r } = e;
  return `appid` in t
    ? (0, U.jsxs)(He, { id: t, children: [r, ` `] })
    : (0, U.jsx)(`a`, { href: n, children: r });
}
function $a(e) {
  let { id: t } = e,
    { data: n } = mt(t);
  return n ? (0, U.jsx)(`div`, { className: Pt, children: tt(n) }) : null;
}
function eo(e) {
  let { id: t } = e,
    { data: n } = Ct(t),
    { data: r } = me(t),
    { data: i } = Ue(t),
    { data: a } = Ie();
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
          ? _(`#Sale_Bundle_CompletePartialSet`, c, s)
          : o > 0
            ? _(`#Sale_BundleSave_WithDiscount`, o, s)
            : _(`#Sale_BundleSave`, s)),
    (0, U.jsx)(`div`, {
      className: L(xt, `StoreSaleWidgetShortDesc`),
      children:
        l.startsWith(`#`) && l.indexOf(` `) == -1
          ? (0, U.jsx)(`span`, {
              className: De,
              children: ie(
                l,
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
                (0, U.jsx)(`i`, {}),
              ),
            })
          : l,
    })
  );
}
function to(e) {
  let {
      id: t,
      bPreferLibrary: r,
      bPreferAssetWithoutOverride: i,
      bNoShadow: a,
    } = e,
    o = a ? Ce : ``,
    { storeItemDefaultInfo: s, storeItemAsset: c } = So(t, `vertical`, i),
    [l, u] = H.useState(0);
  if (!s || !c) return (0, U.jsx)(`div`, { className: Wt });
  let { strStoreVerticalURL: d, strLibraryVerticalURL: f } = ti(c, s);
  if (d && (!r || !f))
    return (0, U.jsxs)(`div`, {
      className: L(Wt, `HeroCapsuleImageContainer`),
      children: [
        (0, U.jsx)(`img`, { src: d, className: Le, alt: s.name }),
        s.type == 4 &&
          (0, U.jsx)(`img`, {
            className: `eEjnmAoA07c-`,
            src: `${n.MEDIA_CDN_URL}appmgmt/artassets/capsule_dlc.png`,
            alt: `DLC`,
          }),
      ],
    });
  if (f)
    return (0, U.jsxs)(`div`, {
      className: L(ge, Ot, r ? Pe : ``, o),
      children: [
        (0, U.jsx)(`div`, {
          className: ke,
          style: { backgroundImage: `url(${f})` },
        }),
        (0, U.jsx)(`img`, { src: f, className: Le, alt: s.name }),
      ],
    });
  let p = ei(c, !0),
    m = p.length - 1,
    ee = (e) => {
      let t = p.indexOf(e);
      t >= m && t < p.length - 1 && u(t + 1);
    };
  if (l < p.length) {
    let e = p[l];
    return (0, U.jsxs)(`div`, {
      className: L(ge, o),
      children: [
        (0, U.jsx)(`div`, {
          className: ke,
          style: { backgroundImage: `url(${e})` },
        }),
        (0, U.jsx)(Zr, {
          lazyLoad: !0,
          srcs: p,
          className: Le,
          alt: s.name,
          onImageError: ee,
        }),
      ],
    });
  }
  return (0, U.jsx)(`div`, { className: Wt });
}
var no = `yFKurY5xd-8-`,
  ro = `x-jXNI-s184-`,
  io = `aG-OF9IYlE8-`,
  ao = `Ef8xOk5PJbg-`,
  oo = `RTkq2WI2bK4-`,
  so = `_4vRcmVJ4gN8-`,
  co = `eEhfnGythD0-`,
  lo = `qtB6DnXH-bs-`,
  uo = `tF-0HvIRqgQ-`,
  fo = `_0EeL7NnvnjU-`,
  po = `L-E-bGfH1Sw-`,
  mo = `-pV6HCIaaqM-`,
  ho = `MUbRKQFMT7E-`;
function go(e, t, r) {
  return {
    queryKey: _o(r),
    enabled: !!r?.GID,
    queryFn: async () => {
      if (!r) return null;
      let i = r.appid
          ? await e.ensureQueryData(je(t, { appid: r.appid }))
          : null,
        a = await e.ensureQueryData(Te(r.clanSteamID.GetAccountID(), e));
      if (r.appid) {
        if (i) {
          if (i.all_ages_screenshots && i.all_ages_screenshots.length > 0) {
            let e = Number(
              r.bOldAnnouncement
                ? r.AnnouncementGID
                : r.GID == null
                  ? 0
                  : r.GID,
            );
            return (
              (e %= i.all_ages_screenshots.length),
              `${n.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return r.GetEventType() != 36 &&
        a &&
        ((a.is_creator_home && !a.is_ogg) || a.is_curator)
        ? (a.avatar_full_url ?? null)
        : null;
    },
  };
}
function _o(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function vo(e, t, n, r = q.full, i = !0) {
  let a = Kt(),
    o = Ee();
  return qt(bo(a, o, e, t, n, r, i)).data ?? void 0;
}
function yo(e, t, n, r = q.full, i = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, n, r, i];
}
function bo(e, t, r, i, a, o = q.full, s = !0) {
  return {
    queryKey: yo(r, i, a, o, s),
    enabled: !!r?.GID,
    initialData: () => xo(r, i, a, o, s),
    queryFn: async () => {
      if (!r) return null;
      let c = xo(r, i, a, o, s);
      if (c) return c;
      let l = await e.ensureQueryData(Te(r.clanSteamID.GetAccountID(), e));
      if (i == `capsule`) {
        let i = r.appid;
        if (!i && l && ((l.is_creator_home && !l.is_ogg) || l.is_curator)) {
          if (r.jsondata?.referenced_appids?.length)
            i = r.jsondata.referenced_appids[0];
          else return l.avatar_full_url ?? null;
        }
        let a = await e.ensureQueryData(Xe(t, { appid: i }));
        return a
          ? (B(a, `main_capsule`) ?? null)
          : l?.avatar_full_url
            ? l.avatar_full_url
            : `${n.STORE_ITEM_BASE_URL}steam/apps/${i}/header.jpg`;
      }
      return i == `background` &&
        l &&
        ((l.is_creator_home && !l.is_ogg) || l.is_curator)
        ? (l.creator_page_bg_url ?? null)
        : await e.ensureQueryData(go(e, t, r));
    },
  };
}
function xo(e, t, n, r = q.full, i = !0) {
  if (!e) return;
  let a = e.GetImageURL(t, n, r);
  if (a && a.trim().length > 0) return a;
  let o = C.GetELanguageFallback(n);
  if (n != o) {
    let n = e.GetImageURL(t, o, r);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(n, Number.MAX_VALUE);
    if (t && (i || Yt(t))) return t;
  }
}
function So(e, t, n = !1) {
  let { data: r } = z(e),
    { data: i } = Qe(e, n),
    a = Co(r, i, t),
    { data: o } = z(a),
    { data: s } = Qe(a, n),
    c = o?.visible ? o : r;
  return { storeItemAsset: o?.visible ? s : i, storeItemDefaultInfo: c };
}
function Co(e, t, n) {
  if (
    e &&
    e.included_appids?.length == 1 &&
    !wo(t, n) &&
    e.item_type &&
    [1, 2].includes(e.item_type)
  )
    return { appid: e.included_appids[0] };
}
function wo(e, t) {
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
      return (O(t, `Unhandled imageType: ${t}`), !1);
  }
}
export {
  Kn as $,
  Zr as A,
  fr as B,
  Xi as C,
  Ri as D,
  Li as E,
  vr as F,
  ir as G,
  wr as H,
  gr as I,
  rr as J,
  nr as K,
  _r as L,
  Ir as M,
  Pr as N,
  $r as O,
  Fr as P,
  Gn as Q,
  hr as R,
  Zi as S,
  Qi as T,
  sr as U,
  pr as V,
  ar as W,
  K as X,
  q as Y,
  Qn as Z,
  po as _,
  fo as a,
  Ln as at,
  Ja as b,
  io as c,
  W as ct,
  so as d,
  on as dt,
  Hn as et,
  lo as f,
  sn as ft,
  mo as g,
  ho as h,
  Qt as ht,
  go as i,
  zn as it,
  Xr as j,
  Qr as k,
  ao as l,
  ln as lt,
  uo as m,
  tn as mt,
  xo as n,
  Jn as nt,
  no as o,
  In as ot,
  co as p,
  en as pt,
  tr as q,
  vo as r,
  Bn as rt,
  ro as s,
  dn as st,
  bo as t,
  qn as tt,
  oo as u,
  un as ut,
  to as v,
  Gi as w,
  ia as x,
  Za as y,
  dr as z,
};
