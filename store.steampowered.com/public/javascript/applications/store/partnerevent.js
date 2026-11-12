/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { At as t, Pt as n, kt as r } from "./chunk~01cfc309bf.js";
import { n as i, r as a, t as o } from "./chunk~4c761eb6f4.js";
import { o as s, s as c } from "./chunk~e867464c75.js";
import { n as l } from "./chunk~521597d5f9.js";
import {
  Eb as u,
  Gy as ee,
  Jy as d,
  Lb as f,
  Qx as p,
  TS as m,
  Ux as te,
  Uy as h,
  Vy as g,
  Wy as _,
  Xb as ne,
  Xx as re,
  aS as v,
  bx as y,
  eS as b,
  iS as x,
  jx as S,
  nS as C,
  oS as w,
  qb as T,
  rS as E,
  sS as D,
  tS as O,
  wb as k,
} from "./main.js";
var ie = 39049601,
  ae = 45479024,
  oe = 41316928,
  se = 4397053,
  ce = 45559995,
  le = 45902273,
  A = e(n(), 1);
function j(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function ue(e, t) {
  return j(e, ``, t).startsWith(`curator/`);
}
var M =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  de = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  fe = [
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
M.filter((e) => !fe.includes(e));
var N = void 0;
function P(e) {
  return e ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`) : ((N ||= P(M)), N);
}
function F(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + P(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function I(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + P(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var pe = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [5, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readInt32, bw: D.writeInt32 },
            active: { n: 2, br: E.readBool, bw: D.writeBool },
            start_time: { n: 3, br: E.readUint32, bw: D.writeUint32 },
            end_time: { n: 4, br: E.readUint32, bw: D.writeUint32 },
            app_discounts: { n: 5, c: L, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: E.readUint32, bw: D.writeUint32 },
            groups: { n: 7, c: me, r: !0, q: !0 },
            internal_name: { n: 8, br: E.readString, bw: D.writeString },
            localization: { n: 9, c: he },
            reveal_time: { n: 10, br: E.readUint32, bw: D.writeUint32 },
            release_date_min: { n: 11, br: E.readUint32, bw: D.writeUint32 },
            winner_appid: { n: 12, br: E.readUint32, bw: D.writeUint32 },
            flag: { n: 13, br: E.readEnum, bw: D.writeEnum },
            release_date_max: { n: 14, br: E.readUint32, bw: D.writeUint32 },
            item_type: { n: 15, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  L = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            discount: { n: 2, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  me = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groupid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            group_name: { n: 2, br: E.readString, bw: D.writeString },
            app_discounts: { n: 3, c: L, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  he = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.title || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: E.readString, bw: D.writeString },
            title_linebreak: { n: 2, br: E.readString, bw: D.writeString },
            title_award: { n: 3, br: E.readString, bw: D.writeString },
            award_description: { n: 4, br: E.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  ge = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: E.readString, bw: D.writeString },
            sale_appid: { n: 2, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  _e = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.votes || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: pe, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: E.readUint32,
              pbr: E.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  ve = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            appid: { n: 2, br: E.readUint32, bw: D.writeUint32 },
            communityitemid: {
              n: 3,
              br: E.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  ye = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sale_appid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: E.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  be = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ve, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  xe = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voteid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: E.readInt32, bw: D.writeInt32 },
            appid: { n: 2, br: E.readUint32, bw: D.writeUint32 },
            sale_appid: { n: 3, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  Se = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.user_votes || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: ve, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  R = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            appid: { n: 2, br: E.readUint32, bw: D.writeUint32 },
            last_updated: { n: 3, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Ce = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), A.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  z = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: R, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  we = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: E.readFixed64String,
              bw: D.writeFixed64String,
            },
            code: { n: 2, br: E.readFixed64String, bw: D.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  Te = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            nominated_id: { n: 2, br: E.readUint32, bw: D.writeUint32 },
            source: { n: 3, br: E.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  Ee = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nominations || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: R, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  De = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category_id || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  Oe = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.played_app || b(e.M()),
        A.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: ke, r: !0, q: !0 },
            suggested_events: { n: 2, c: Ae, r: !0, q: !0 },
            suggested_apps: { n: 3, c: je, r: !0, q: !0 },
            debug_query: { n: 4, br: E.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  ke = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            playtime: { n: 2, br: E.readInt32, bw: D.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Ae = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: E.readUint32, bw: D.writeUint32 },
            event_gid: {
              n: 2,
              br: E.readUint64String,
              bw: D.writeUint64String,
            },
            appid: { n: 3, br: E.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  je = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: E.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Me = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: E.readBool, bw: D.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  Ne = class e extends A.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.code || b(e.M()),
        A.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: E.readFixed64String, bw: D.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= x(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return w(e.M(), t, n);
    }
    static fromObject(t) {
      return C(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new A.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return O(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      v(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new A.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  B;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, y(ge, t, n), _e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, y(xe, t, n), Se, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, y(ye, t, n), be, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserVotes = r;
})((B ||= {}));
var V;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, y(Ce, t, n), z, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, y(we, t, n), z, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, y(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      y(De, t, n),
      Oe,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, y(Me, t, n), Ne, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetNominationShareLink = a;
})((V ||= {}));
var Pe = {
  bBroadcastEnabled: !1,
  broadcastChatSetting: `hide`,
  default_broadcast_title: `#Broadcast_default_title_dev`,
  localized_broadcast_title: Array(32),
  localized_broadcast_left_image: Array(32),
  localized_broadcast_right_image: Array(32),
  broadcast_whitelist: [],
};
function Fe(e) {
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
function H(e) {
  let t = `#PartnerEvent_` + e,
    n = u.Localize(t);
  return n == t ? u.Localize(`#PartnerEvent_Other`) : n;
}
var Ie = { bScheduleEnabled: !1, scheduleEntries: [] };
f(
  [te],
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
var Le = 99999,
  Re = `exploration`,
  U = (function (e) {
    return ((e.Random = `r`), (e.Personalized = `p`), e);
  })({});
function ze(e) {
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
function Be(e) {
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
var Ve = [13, 14, 17, 18, 19, 22, 23, 24, 35, 25, 26, 28, 15, 32, 10];
function He(e) {
  return (
    Ve.some((t) => t == e.GetEventType()) &&
    !e.BHasTag(`steam_award_nomination_request`) &&
    !e.BHasTag(`curator`)
  );
}
var Ue = [20, 31, 34];
function We(e) {
  return !Ue.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
var W = 593110,
  Ge = [W, 766, 221410],
  Ke = [12, 34];
function qe(e) {
  return !Ke.some((t) => t == e.GetEventType()) && !e.BHasTag(`curator`);
}
function Je(e, t = l()) {
  let n = 60 * k.PerDay;
  return (
    e.BIsVisibleEvent(t) &&
    e.BIsOGGEvent() &&
    (e.rtime32_last_modified ?? 0) > t - n &&
    !G(e)
  );
}
function G(e) {
  return e.BHasTag(`mod_reviewed`) && !e.BHasTag(`mod_require_rereview`);
}
var Ye = (function (e) {
  return (
    (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
    (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
    (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
    (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
    e
  );
})({});
function Xe(e) {
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
var Ze = `bordered`,
  Qe = (function (e) {
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
  $e = (function (e) {
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
  et = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  tt = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function nt(e) {
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
var rt = (function (e) {
    return (
      (e.Steam = `Steam`),
      (e.Facebook = `Facebook`),
      (e.Twitter = `Twitter`),
      (e.Reddit = `Reddit`),
      e
    );
  })({}),
  it = (function (e) {
    return (
      (e.Summary = `summary`), (e.SummaryLargeImage = `summary_large_image`), e
    );
  })({});
function at(e) {
  return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
}
function ot(e) {
  return e.carousel_rows || 1;
}
function st(e) {
  return e.cap_item_count || 0;
}
function ct(e) {
  return e.cap_section_row_count && e.cap_section_row_count > 0
    ? e.cap_section_row_count
    : e.section_type == `trailercarousel`
      ? 1
      : e.cap_section_content
        ? 4
        : 0;
}
function lt(e) {
  return e?.store_filter ? JSON.stringify(e.store_filter) : void 0;
}
function K(e) {
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
function ut(e) {
  switch (e) {
    case `items`:
    case `crosspromotesalepage`:
    case `creator_list`:
      return !0;
  }
  return !1;
}
function dt(e) {
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
function q(e, t = !1) {
  return !e || !dt(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function ft(e) {
  return q(e) ? e?.smart_section_type : void 0;
}
function J(e) {
  return (
    (e.jsondata.sale_ml_recommender_delay_hours &&
      (e.startTime ?? 0) +
        e.jsondata.sale_ml_recommender_delay_hours * k.PerHour -
        new Date().getTime() / 1e3) ??
    0
  );
}
var pt = 2.5;
function Y(e, t, n) {
  return !e.BIsNextFest() || !K(t.section_type)
    ? !1
    : n == U.Random || J(e) > 0;
}
function mt(e, t, n, r) {
  if (!t.next_fest_exploration_visibility || !e.BIsNextFest()) return !1;
  switch (t.next_fest_exploration_visibility) {
    case `show-only-personalized`:
      return r != U.Personalized;
    case `show-only-personalized-available`:
      return !n;
    case `show-only-personalized-unavailable`:
      return n;
  }
  return !1;
}
function ht(e, t, n) {
  return !!(t.use_random_order || Y(e, t, n));
}
var gt = {
  capsules: [],
  events: [],
  links: [],
  localized_label: Array(32),
  localized_label_image: Array(32),
  default_label: `#Sale_default_label`,
  section_type: `unselected_empty`,
};
function X(e) {
  e.sale_sections?.forEach((t, n) => {
    ((t.localized_label &&= re(t.localized_label, 32, null)),
      t.section_type === `trailercarousel` && (t.show_as_carousel = !1),
      nt(t),
      (e.sale_sections[n] = { ...gt, ...t }));
  });
}
var _t = (function (e) {
  return (
    (e[(e.k_ETaggedItems = 0)] = `k_ETaggedItems`),
    (e[(e.k_EContentHub = 1)] = `k_EContentHub`),
    e
  );
})({});
function vt(e) {
  return {
    arrowFill: e?.sale_carousel_arrow_color,
    arrowStyle: e?.sale_carousel_arrow_style,
    breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
    breadcrumbColor: e?.sale_carousel_breadcrumb_color,
    breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
  };
}
var Z = {
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
    ...Pe,
    ...Ie,
  },
  yt = `old_announce_`;
function Q(e, t, n) {
  let r = (e) => t.includes(e);
  return r(`steam_award_nomination_request`)
    ? d(`#PartnerEvent_SteamAwardNominations`)
    : r(`steam_award_vote_request`)
      ? d(`#PartnerEvent_SteamAwardVoteRequest`)
      : r(`steam_game_festival_artist_statement`)
        ? d(`#PartnerEvent_SteamGameFestival_ArtistState`)
        : r(`steam_game_festival_office_hour`)
          ? d(`#PartnerEvent_SteamGameFestival_OfficeHour`)
          : r(`steam_game_festival_broadcast`) ||
              (t.some((e) => e?.startsWith(`sale_nextfest_`)) && e == 11)
            ? d(`#PartnerEvent_SteamGameFestival_Broadcast`)
            : r(`vo_marketing_message`) && n
              ? d(`#PartnerEvent_MM_MajorUpdate`)
              : H(e);
}
var bt = [
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
  xt =
    `steam_blog_featured.workshop.steam_blog.blog.audience_followers.steamvr.patchnotes.steam_library_beta.hide_library_overview.mod_hide_library_overview.hide_library_detail.mod_hide_library_detail.hide_store.mod_hide_store.halloween2019candidate.halloween2019.halloween2019reviewed.horror.cute.halloween.mod_reviewed.steam_award_nomination_request.steam_award_vote_request.steam_game_festival_artist_statement.steam_game_festival_office_hour.steam_game_festival_broadcast.curator.curator_group_members.curator_public.mod_require_rereview.auto_rssfeed.auto_migrated.enable_steam_china.disable_steam_global.skip_megaphone.seasonal_sale_featuring.show_library_demo_detail.clear_library_demo_detail.repost_source_possible.autocreate_promotools.vo_marketing_message`.split(
      `.`,
    ),
  St = [
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
  Ct = [20, 31, 34],
  wt = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  Tt = [m.k_ESteamRealmGlobal],
  Et = [m.k_ESteamRealmChina],
  Dt = [m.k_ESteamRealmGlobal, m.k_ESteamRealmChina],
  Ot = [],
  $ = class e {
    constructor() {
      r(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new g();
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
    jsondata = Z;
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
        (n.clanSteamID = new g(r.clanSteamID)),
        p(
          n.clanSteamID && n.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + n.clanSteamID.ConvertTo64BitString(),
        ),
        r.broadcaster &&
          ((n.broadcaster = new g(r.broadcaster)),
          p(
            n.broadcaster && n.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              n.broadcaster.ConvertTo64BitString(),
          )),
        X(n.jsondata),
        n
      );
    }
    static FromCClanEventData(t, n) {
      let r = new e();
      ((r.GID = t.gid),
        (r.clanSteamID = new g(t.clan_steamid)),
        r.name.set(n, t.event_name ?? ``),
        (r.type = t.event_type),
        (r.appid = t.appid ?? 0),
        (r.startTime = t.rtime32_start_time),
        (r.endTime = t.rtime32_end_time),
        (r.nCommentCount = t.comment_count ?? 0),
        (r.creator_steamid = t.creator_steamid),
        (r.last_update_steamid = t.last_update_steamid),
        (r.jsondata = JSON.parse(t.jsondata ?? `{}`)),
        X(r.jsondata),
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
          (r.broadcaster = g.InitFromAccountID(
            t.broadcaster_accountid,
            T.EUNIVERSE,
          )),
        (r.AnnouncementGID = t.announcement_body?.gid ?? `0`));
      let i = t.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new g(i))
          : t.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = g.InitFromClanID(
              Number(t.announcement_body.clanid),
              T.EUNIVERSE,
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
          ? new g(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (n.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (n.vecTags = []),
        t
          ? ((n.m_nBuildID = this.m_nBuildID),
            (n.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => n.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              bt.includes(e) && n.vecTags.push(e);
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
    GetDayIndexFromEventStart(e = l()) {
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
      let t = _.GetELanguageFallback(e);
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
          _.IsELanguageValidInRealm(e, m.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          _.IsELanguageValidInRealm(e, m.k_ESteamRealmChina))
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
              : i.includes(e)
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
    GetImageURL(e, t = 0, n = o.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? a.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
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
          ? T.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? T.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : T.COMMUNITY_BASE_URL +
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
        : T.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = l()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = l()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, t) {
      e == `up`
        ? (this.nVotesUp = S(this.nVotesUp + t, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = S(this.nVotesDown + t, 0, 2 ** 53 - 1));
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
            if (r.length != 0) return a.ReplacementTokenToClanImageURL(r);
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
        let r = _.GetELanguageFallback(t);
        t != r && (n = this.GetImageURL(e, r));
      }
      return !n || n.length == 0;
    }
    GetDescriptionWithFallback(e) {
      let t = _.GetELanguageFallback(e);
      return this.description.get(e) || this.description.get(t);
    }
    BIsImageSafeForAllAges(e, t, n = {}) {
      let r = _.GetELanguageFallback(t);
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
    BIsVisibleEvent(e = l()) {
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
    BIsEventActionEnabled(e = l()) {
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
        ? h.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(t) {
      return (
        h.GetWithFallback(this.jsondata?.localized_subtitle, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t))
      );
    }
    GetSummaryWithFallback(t, n) {
      return (
        h.GetWithFallback(this.jsondata?.localized_summary, t) ||
        e.GenerateSummaryFromText(this.GetDescriptionWithFallback(t), n)
      );
    }
    GetSummary(e) {
      return h.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = F(e, [
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
          (e = I(e, [`p`], ` `)),
          (e = I(e)),
          (e = s(e)),
          c(e, t || 180));
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
      if (!this.jsondata.library_spotlight || Ct.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (wt.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + k.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = l()) {
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
        h.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        d(
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
          g.InitFromAccountID(e, T.EUNIVERSE).ConvertTo64BitString(),
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
          T.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          T.STORE_BASE_URL +
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
            ? T.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? T.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? T.STORE_BASE_URL + `tags/` + (ee() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? T.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? T.STORE_BASE_URL + `genre/Early%20Access/`
                    : T.STORE_BASE_URL + e.type
          : T.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && ue(t, n) ? e + `sale/` + r : T.STORE_BASE_URL + j(t, r, n);
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
        c = Le + 10;
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
        p(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((t) => {
          e.AccumulateCapsuleListIDs([t.capsule], r, i, n);
        }),
        this.jsondata.sale_sections.forEach((t) => {
          if (K(t.section_type))
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
      return H(this.type);
    }
    GetCategoryAsString(e) {
      return Q(this.type, this.vecTags, e);
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
        p(
          e || t,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        e && t ? Dt : e ? Tt : t ? Et : Ot
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new g(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && ne.is_valve_email
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
(f([t], $.prototype, `GID`, void 0),
  f([t], $.prototype, `AnnouncementGID`, void 0),
  f([t], $.prototype, `forumTopicGID`, void 0),
  f([t], $.prototype, `type`, void 0),
  f([t], $.prototype, `appid`, void 0),
  f([t], $.prototype, `name`, void 0),
  f([t], $.prototype, `description`, void 0),
  f([t], $.prototype, `timestamp_loc_updated`, void 0),
  f([t], $.prototype, `startTime`, void 0),
  f([t], $.prototype, `endTime`, void 0),
  f([t], $.prototype, `visibilityStartTime`, void 0),
  f([t], $.prototype, `visibilityEndTime`, void 0),
  f([t], $.prototype, `m_nBuildID`, void 0),
  f([t], $.prototype, `m_strBuildBranch`, void 0),
  f([t], $.prototype, `postTime`, void 0),
  f([t], $.prototype, `visibility_state`, void 0),
  f([t], $.prototype, `broadcaster`, void 0),
  f([t], $.prototype, `jsondata`, void 0),
  f([t], $.prototype, `nCommentCount`, void 0),
  f([t], $.prototype, `nVotesUp`, void 0),
  f([t], $.prototype, `nVotesDown`, void 0),
  f([t], $.prototype, `bOldAnnouncement`, void 0),
  f([t], $.prototype, `announcementClanSteamID`, void 0),
  f([t], $.prototype, `loadedAllLanguages`, void 0),
  f([t], $.prototype, `bLoaded`, void 0),
  f([t], $.prototype, `deleteInProgress`, void 0),
  f([t], $.prototype, `vecTags`, void 0),
  f([t], $.prototype, `last_update_steamid`, void 0),
  f([t], $.prototype, `rtime32_last_modified`, void 0),
  f([t], $.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  f([t], $.prototype, `rtime32_last_local_modification`, void 0),
  f([t], $.prototype, `rtime32_moderator_reviewed`, void 0),
  f([t], $.prototype, `video_preview_type`, void 0),
  f([t], $.prototype, `video_preview_id`, void 0),
  f([t], $.prototype, `m_overrideCurrentDay`, void 0));
function kt(e) {
  if (e) return e?.replace(/[()]/g, `\\$&`);
}
export {
  le as $,
  at as A,
  yt as B,
  $ as C,
  ct as D,
  Q as E,
  kt as F,
  Fe as G,
  Be as H,
  Ze as I,
  B as J,
  H as K,
  Ge as L,
  lt as M,
  Xe as N,
  ot as O,
  X as P,
  j as Q,
  W as R,
  St as S,
  J as T,
  ze as U,
  U as V,
  Re as W,
  M as X,
  F as Y,
  de as Z,
  et as _,
  qe as a,
  rt as b,
  ut as c,
  ht as d,
  ce as et,
  G as f,
  $e as g,
  tt as h,
  He as i,
  oe as it,
  ft as j,
  st as k,
  K as l,
  Ye as m,
  mt as n,
  ae as nt,
  Je as o,
  Z as p,
  V as q,
  We as r,
  ie as rt,
  q as s,
  xt as t,
  se as tt,
  Y as u,
  _t as v,
  vt as w,
  it as x,
  Qe as y,
  pt as z,
};
