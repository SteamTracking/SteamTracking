/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  Ct as t,
  Gt as n,
  Ht as r,
  Jt as i,
  K as a,
  Kt as o,
  S as s,
  U as c,
  Ut as l,
  Wt as u,
  Xt as ee,
  Yt as d,
  _t as te,
  ct as f,
  dt as p,
  gt as m,
  k as h,
  kt as ne,
  nt as re,
  on as g,
  qt as _,
  x as ie,
  yt as v,
} from "./mobx.esm.js";
import { Rt as ae, Wt as y, t as b } from "./src.js";
import { i as oe, o as se, u as ce } from "./uploadutils.js";
import {
  $i as x,
  La as S,
  Ya as le,
  ea as C,
  oa as w,
  ta as ue,
} from "./dialogs.js";
import { t as T } from "./axiosutils.js";
import { a as de, i as fe } from "./stringutils.js";
import { n as E } from "./eventtime.js";
import "./steamid.js";
import "./steammessages_community_pb.js";
var D = g(ne(), 1);
te();
var O =
    `p.h1.h2.h3.h4.h5.smalltext.b.u.hr.i.emoticon.dynamiclink.img.strike.spoiler.noparse.url.list.olist.*.quote.pullquote.code.table.tr.td.th.carousel.previewyoutube.looping_media.roomeffect.sticker.price.pricesavings.trailer.speaker.doclink.video.vod.youtubeorvideo.giveawayeligible.claimitem.packagepurchaseable.actiondialog.uploadfilebutton.docimg.meetsteamsessiongroup.meetsteamscheduleview.center.c.expand.remindme.calendarevent.color.bgcolor.userpolls`.split(
      `.`,
    ),
  pe = [`h1`, `h2`, `h3`, `b`, `u`, `i`, `strike`, `spoiler`, `noparse`, `url`],
  me = [
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
O.filter((e) => !me.includes(e));
var k = void 0;
function A(e) {
  return e ? e.map((e) => (e == `*` ? `\\*` : e)).join(`|`) : ((k ||= A(O)), k);
}
function he(e, t = null, n = ` `) {
  let r = RegExp(`\\[(` + A(t) + `)\\b[^\\]]*\\].*?\\[/\\1\\]`, `gi`);
  return e.replace(r, n);
}
function j(e, t = null, n = ``) {
  let r = `\\[\\/?(?:` + A(t) + `){1,}.*?]`;
  return e.replace(new RegExp(r, `gi`), n);
}
var M = g(ee(), 1),
  ge = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.voteid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [5, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: n.readInt32, bw: d.writeInt32 },
            active: { n: 2, br: n.readBool, bw: d.writeBool },
            start_time: { n: 3, br: n.readUint32, bw: d.writeUint32 },
            end_time: { n: 4, br: n.readUint32, bw: d.writeUint32 },
            app_discounts: { n: 5, c: N, r: !0, q: !0 },
            grouped_vote_options: { n: 6, br: n.readUint32, bw: d.writeUint32 },
            groups: { n: 7, c: _e, r: !0, q: !0 },
            internal_name: { n: 8, br: n.readString, bw: d.writeString },
            localization: { n: 9, c: ve },
            reveal_time: { n: 10, br: n.readUint32, bw: d.writeUint32 },
            release_date_min: { n: 11, br: n.readUint32, bw: d.writeUint32 },
            winner_appid: { n: 12, br: n.readUint32, bw: d.writeUint32 },
            flag: { n: 13, br: n.readEnum, bw: d.writeEnum },
            release_date_max: { n: 14, br: n.readUint32, bw: d.writeUint32 },
            item_type: { n: 15, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_VoteDefinition`;
    }
  },
  N = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            discount: { n: 2, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_VoteDefinition_AppDefinition`;
    }
  },
  _e = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.groupid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            groupid: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            group_name: { n: 2, br: n.readString, bw: d.writeString },
            app_discounts: { n: 3, c: N, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_VoteDefinition_GroupDefinition`;
    }
  },
  ve = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.title || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            title: { n: 1, br: n.readString, bw: d.writeString },
            title_linebreak: { n: 2, br: n.readString, bw: d.writeString },
            title_award: { n: 3, br: n.readString, bw: d.writeString },
            award_description: { n: 4, br: n.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_VoteDefinition_Localization`;
    }
  },
  ye = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: d.writeString },
            sale_appid: { n: 2, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Request`;
    }
  },
  be = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.votes || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            votes: { n: 1, c: ge, r: !0, q: !0 },
            labor_of_love_winners: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetVoteDefinitions_Response`;
    }
  },
  P = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.voteid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            appid: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            communityitemid: {
              n: 3,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamAwardsUserVote`;
    }
  },
  xe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sale_appid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sale_appid: { n: 1, br: n.readUint32, bw: d.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetUserVotes_Request`;
    }
  },
  Se = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_votes || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: P, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_GetUserVotes_Response`;
    }
  },
  Ce = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.voteid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voteid: { n: 1, br: n.readInt32, bw: d.writeInt32 },
            appid: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            sale_appid: { n: 3, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SetVote_Request`;
    }
  },
  we = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.user_votes || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { user_votes: { n: 1, c: P, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStore_SetVote_Response`;
    }
  },
  F = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.category_id || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            appid: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            last_updated: { n: 3, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwardsNomination`;
    }
  },
  Te = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), M.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Request`;
    }
  },
  I = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.nominations || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetUserNominations_Response`;
    }
  },
  Ee = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: n.readFixed64String,
              bw: d.writeFixed64String,
            },
            code: { n: 2, br: n.readFixed64String, bw: d.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetOtherUserNominations_Request`;
    }
  },
  De = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.category_id || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            nominated_id: { n: 2, br: n.readUint32, bw: d.writeUint32 },
            source: { n: 3, br: n.readEnum, bw: d.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_Nominate_Request`;
    }
  },
  Oe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.nominations || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nominations: { n: 1, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_Nominate_Response`;
    }
  },
  ke = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.category_id || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category_id: { n: 1, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Request`;
    }
  },
  Ae = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.played_app || r(e.M()),
        M.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            played_app: { n: 1, c: je, r: !0, q: !0 },
            suggested_events: { n: 2, c: Me, r: !0, q: !0 },
            suggested_apps: { n: 3, c: Ne, r: !0, q: !0 },
            debug_query: { n: 4, br: n.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response`;
    }
  },
  je = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            playtime: { n: 2, br: n.readInt32, bw: d.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_PlayedApps`;
    }
  },
  Me = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clanid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: n.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 2,
              br: n.readUint64String,
              bw: d.writeUint64String,
            },
            appid: { n: 3, br: n.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent`;
    }
  },
  Ne = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: d.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationRecommendations_Response_SuggestedApp`;
    }
  },
  Pe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { generate_new: { n: 1, br: n.readBool, bw: d.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Request`;
    }
  },
  Fe = class e extends M.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.code || r(e.M()),
        M.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            code: { n: 1, br: n.readFixed64String, bw: d.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new M.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      _(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new M.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamAwards_GetNominationShareLink_Response`;
    }
  },
  L;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreSales.GetVoteDefinitions#1`, v(ye, t, n), be, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetVoteDefinitions = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreSales.SetVote#1`, v(Ce, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetVote = n;
  function r(e, t, n) {
    return e.SendMsg(`StoreSales.GetUserVotes#1`, v(xe, t, n), Se, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserVotes = r;
})((L ||= {}));
var R;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SteamAwards.GetUserNominations#1`, v(Te, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetUserNominations = t;
  function n(e, t, n) {
    return e.SendMsg(`SteamAwards.GetOtherUserNominations#1`, v(Ee, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetOtherUserNominations = n;
  function r(e, t, n) {
    return e.SendMsg(`SteamAwards.Nominate#1`, v(De, t, n), Oe, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.Nominate = r;
  function i(e, t, n) {
    return e.SendMsg(
      `SteamAwards.GetNominationRecommendations#1`,
      v(ke, t, n),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetNominationRecommendations = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamAwards.GetNominationShareLink#1`, v(Pe, t, n), Fe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetNominationShareLink = a;
})((R ||= {}));
var Ie = {
    bBroadcastEnabled: !1,
    broadcastChatSetting: `hide`,
    default_broadcast_title: `#Broadcast_default_title_dev`,
    localized_broadcast_title: Array(32),
    localized_broadcast_left_image: Array(32),
    localized_broadcast_right_image: Array(32),
    broadcast_whitelist: [],
  },
  z = `{STEAM_CLAN_IMAGE}`,
  B = `{STEAM_CLAN_LOC_IMAGE}`;
function Le(e, t) {
  return `${e}/${t}`;
}
var Re = D.createContext({});
function ze() {
  return D.useContext(Re);
}
RegExp(`${B.replace(/[{}]/g, `\\$&`)}/(\\d+)/([0-9a-f]+\\.[a-z0-9]+)`, `gi`);
function Be(e, t, n = 0) {
  return Ve(e, t, n, ze());
}
function Ve(e, t, n = 0, r) {
  if (!e || e.length == 0) return null;
  if (e?.startsWith(`{STEAM_CLAN_IMAGE}`))
    return V.ReplacementTokenToClanImageURL(e);
  if (e?.startsWith(`{STEAM_CLAN_LOC_IMAGE}`)) {
    let i = V.GetBaseURL(),
      a = e.substring(B.length + 1),
      o = parseInt(a.substring(0, a.indexOf(`/`))),
      s = a.substring(a.indexOf(`/`) + 1),
      c = V.GenerateURLFromHashAndExt(o, s);
    if (r?.[Le(o, s)] === !1) return c;
    let l = V.GetLocalizedClanImageFileNames(s, t).map(
      (e) => i + o + `/` + e + `?t=` + n,
    );
    return l.push(c), l;
  }
  return e;
}
var V = {
    GetBaseURL() {
      return `${c.CLAN_CDN_ASSET_URL}images/`;
    },
    GetBaseURLV2() {
      return `${c.CLAN_CDN_ASSET_URL}locimages/`;
    },
    ReplacementTokenToClanImageURL(e) {
      return (
        (e = e.replace(z, this.GetBaseURL())), e.replace(`http://`, `https://`)
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
      return (e.file_type == null ? null : se(e.file_type)) ?? `.jpg`;
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
        i = [n + `/` + f(t) + r];
      return t == 4 && i.push(n + `/` + p(f(t)) + r), i;
    },
    GenerateURLFromHashAndExt(e, t, n = H.full) {
      return this.GenerateURLFromHashAndExtAndLang(e, t, n, -1, void 0);
    },
    GenerateURLFromHashAndExtAndLang(e, t, n = H.full, r, i) {
      e instanceof b && (e = e.GetAccountID());
      let a = this.GetBaseURL(),
        o = r != null && r != -1;
      if (n == H.full && !o) return a + e + `/` + t;
      {
        let s = t.substring(t.lastIndexOf(`.`)),
          c = t.substring(0, t.length - s.length);
        return !o || r == 0 || i != `localized_image_group`
          ? a + e + `/` + c + n + s
          : a + e + `/` + c + `/` + p(f(r)) + s;
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
        c.COMMUNITY_BASE_URL +
        `gid/` +
        e.ConvertTo64BitString() +
        `/showclanimage/?image_hash_and_ext=` +
        t;
      return n && (r += `&lang=` + n), r;
    },
    GetMimeType(e) {
      return oe(e);
    },
    async AsyncGetImageResolution(e, t, n, r, i) {
      let a = t + this.GetExtensionString({ file_type: n }),
        o = this.GenerateEditableURLFromHashAndExt(e, a);
      return await this.AsyncGetImageResolutionInternal(o, r, i);
    },
    async AsyncGetImageResolutionInternal(t, n, r) {
      let i = ce(),
        a = new Image();
      (a.crossOrigin = `anonymous`),
        (a.onerror = (e) => {
          let n = { success: 2 };
          r ||
            ((n.err_msg =
              `Load fail on url ` + t + ` with error: ` + T(e).strErrorMsg),
            console.error(n.err_msg)),
            (n.success = 2),
            i.resolve(n);
        }),
        (a.onload = () => {
          let n = { success: 2 };
          (n.width = a.width),
            (n.height = a.height),
            !(a.width > 0) || !(a.height > 0)
              ? (e(
                  !1,
                  `unexpected image resolution discovered for strURL: ` + t,
                ),
                (n.err_msg = `No resolution reported for url ` + t),
                i.resolve(n))
              : ((n.success = 1), i.resolve(n));
        }),
        (a.src = t),
        n.token.promise.catch(() => {
          (a.onload = () => {}),
            (a.onerror = () => {}),
            i.resolve({ success: 52 });
        });
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
  H = (function (e) {
    return (
      (e.full = ``),
      (e.background_main = `_960x311`),
      (e.background_mini = `_480x156`),
      (e.capsule_main = `_400x225`),
      (e.spotlight_main = `_1054x230`),
      e
    );
  })({}),
  He = [
    `localized_image_group`,
    `link_capsule`,
    `product_mobile_banner_override`,
    `product_banner_override`,
    `sale_section_title`,
    `schedule_track_art`,
    `localized_background_art`,
  ],
  Ue = 39049601,
  We = 45479024,
  Ge = 41316928;
function U(e, t, n) {
  return e == 45559995
    ? `charts/topnewreleases/${t}`
    : e == 45902273
      ? `charts/bestofyear/${t}`
      : n
        ? `sale/${t}`
        : `curator/${e}/sale/${t}`;
}
function Ke(e, t) {
  return U(e, ``, t).startsWith(`curator/`);
}
function qe(e) {
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
function W(e) {
  let t = `#PartnerEvent_` + e,
    n = S.Localize(t);
  return n == t ? S.Localize(`#PartnerEvent_Other`) : n;
}
var Je = { bScheduleEnabled: !1, scheduleEntries: [] };
h(
  [ae],
  class {
    m_eventModel;
    m_entry;
    constructor(e, t) {
      (this.m_eventModel = e), (this.m_entry = t);
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
var Ye = 99999,
  Xe = 593110,
  G = (function (e) {
    return (
      (e[(e.k_EEventStateUnpublished = 0)] = `k_EEventStateUnpublished`),
      (e[(e.k_EEventStateStaged = 1)] = `k_EEventStateStaged`),
      (e[(e.k_EEventStateVisible = 2)] = `k_EEventStateVisible`),
      (e[(e.k_EEventStateUnlisted = 3)] = `k_EEventStateUnlisted`),
      e
    );
  })({}),
  Ze = (function (e) {
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
  Qe = (function (e) {
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
  $e = (function (e) {
    return (
      (e[(e.k_EHideOwnedItems = 0)] = `k_EHideOwnedItems`),
      (e[(e.k_EHideWishlistedItems = 1)] = `k_EHideWishlistedItems`),
      (e[(e.k_EHideIgnoredItems = 2)] = `k_EHideIgnoredItems`),
      e
    );
  })({}),
  et = (function (e) {
    return (
      (e[(e.k_ESortFacetsByName = 0)] = `k_ESortFacetsByName`),
      (e[(e.k_ESortFacetsByMatchCount = 1)] = `k_ESortFacetsByMatchCount`),
      (e[(e.k_ESortFacetsManually = 2)] = `k_ESortFacetsManually`),
      e
    );
  })({});
function tt(e) {
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
function nt(e) {
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
function rt(e) {
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
  return !e || !rt(e.section_type)
    ? !1
    : t
      ? e.sale_tag_filter?.clauses?.length
        ? !0
        : !!e.smart_section
      : !!e.smart_section && e.smart_section_type != null;
}
function it(e) {
  return q(e) ? e?.smart_section_type : void 0;
}
var at = {
    capsules: [],
    events: [],
    links: [],
    localized_label: Array(32),
    localized_label_image: Array(32),
    default_label: `#Sale_default_label`,
    section_type: `unselected_empty`,
  },
  ot = (function (e) {
    return (
      (e[(e.k_ETaggedItems = 0)] = `k_ETaggedItems`),
      (e[(e.k_EContentHub = 1)] = `k_EContentHub`),
      e
    );
  })({}),
  J = {
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
    ...Ie,
    ...Je,
  },
  Y = `old_announce_`,
  st = [
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
  ct = [20, 31, 34],
  lt = [9, 11, 20, 21, 22, 23, 24, 25, 26, 27, 31, 35],
  ut = [m.k_ESteamRealmGlobal],
  dt = [m.k_ESteamRealmChina],
  ft = [m.k_ESteamRealmGlobal, m.k_ESteamRealmChina],
  X = [],
  Z = class n {
    constructor() {
      ie(this);
    }
    GID = void 0;
    AnnouncementGID = void 0;
    clanSteamID = new b();
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
    jsondata = J;
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
      let r = new n(),
        i = JSON.parse(t);
      return (
        Object.assign(r, i),
        (r.name = new Map(i.name)),
        (r.description = new Map(i.description)),
        (r.vecTags = [...(i.vecTags ?? i.tags ?? [])]),
        (r.clanSteamID = new b(i.clanSteamID)),
        e(
          r.clanSteamID && r.clanSteamID.BIsValid(),
          `Invalid Clan SteamID: ` + r.clanSteamID.ConvertTo64BitString(),
        ),
        i.broadcaster &&
          ((r.broadcaster = new b(i.broadcaster)),
          e(
            r.broadcaster && r.broadcaster.BIsValid(),
            `Invalid Broadcast SteamID: ` +
              r.broadcaster.ConvertTo64BitString(),
          )),
        r
      );
    }
    static FromCClanEventData(e, t) {
      let r = new n();
      (r.GID = e.gid),
        (r.clanSteamID = new b(e.clan_steamid)),
        r.name.set(t, e.event_name ?? ``),
        (r.type = e.event_type),
        (r.appid = e.appid ?? 0),
        (r.startTime = e.rtime32_start_time),
        (r.endTime = e.rtime32_end_time),
        (r.nCommentCount = e.comment_count ?? 0),
        (r.creator_steamid = e.creator_steamid),
        (r.last_update_steamid = e.last_update_steamid),
        (r.jsondata = JSON.parse(e.jsondata ?? `{}`)),
        (r.rtime32_last_local_modification = e.rtime32_last_modified),
        (r.visibility_state = e.published
          ? e.hidden
            ? e.unlisted
              ? 3
              : 1
            : 2
          : 0),
        (r.createTime = e.rtime_created),
        (r.m_nBuildID = e.build_id),
        (r.m_strBuildBranch = e.build_branch),
        (r.visibilityStartTime = e.rtime32_visibility_start),
        (r.visibilityEndTime = e.rtime32_visibility_end),
        (r.rtime32_moderator_reviewed = e.rtime_mod_reviewed),
        (r.featured_app_tagid = e.featured_app_tagid),
        e.broadcaster_accountid &&
          (r.broadcaster = b.InitFromAccountID(
            e.broadcaster_accountid,
            c.EUNIVERSE,
          )),
        (r.AnnouncementGID = e.announcement_body?.gid ?? `0`);
      let i = e.clan_steamid_original;
      return (
        i
          ? (r.clanSteamIDOriginal = new b(i))
          : e.announcement_body?.clanid &&
            (r.clanSteamIDOriginal = b.InitFromClanID(
              Number(e.announcement_body.clanid),
              c.EUNIVERSE,
            )),
        (r.postTime = e.announcement_body?.posttime),
        (r.forumTopicGID = e.forum_topic_id),
        r.name.set(t, e.announcement_body?.headline ?? ``),
        r.description.set(t, e.announcement_body?.body ?? ``),
        (r.nCommentCount = e.comment_count ?? 0),
        (r.vecTags = [...(e.announcement_body?.tags ?? [])]),
        (r.forumTopicGID = e.announcement_body?.forum_topic_id),
        (r.nVotesUp = e.announcement_body?.voteupcount ?? 0),
        (r.nVotesDown = e.announcement_body?.votedowncount ?? 0),
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
    clone(e = !1) {
      let t = new n();
      if (
        ((t.GID = this.GID),
        (t.AnnouncementGID = this.AnnouncementGID),
        (t.clanSteamID = this.clanSteamID),
        (t.clanSteamIDOriginal = this.clanSteamIDOriginal),
        (t.bOldAnnouncement = this.bOldAnnouncement),
        (t.nCommentCount = this.nCommentCount),
        (t.nVotesUp = this.nVotesUp),
        (t.nVotesDown = this.nVotesDown),
        (t.forumTopicGID = this.forumTopicGID),
        (t.comment_type = this.comment_type),
        (t.gidfeature = this.gidfeature),
        (t.gidfeature2 = this.gidfeature2),
        (t.featured_app_tagid = this.featured_app_tagid),
        (t.creator_steamid = this.creator_steamid),
        (t.last_update_steamid = this.last_update_steamid),
        (t.rtime32_last_modified = this.rtime32_last_modified),
        (t.rtime32_last_solr_search_col_updated =
          this.rtime32_last_solr_search_col_updated),
        (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
        (t.type = this.type),
        (t.appid = this.appid),
        (t.name = new Map()),
        this.name.forEach((e, n) => {
          t.name.set(n, e);
        }),
        (t.description = new Map()),
        this.description.forEach((e, n) => {
          t.description.set(n, e);
        }),
        (t.timestamp_loc_updated = new Map()),
        this.timestamp_loc_updated.forEach((e, n) => {
          t.timestamp_loc_updated.set(n, e);
        }),
        (t.createTime = this.createTime ?? 0),
        (t.startTime = this.startTime),
        (t.endTime = this.endTime),
        (t.visibilityStartTime = this.visibilityStartTime),
        (t.visibilityEndTime = this.visibilityEndTime),
        (t.postTime = this.postTime),
        (t.visibility_state = this.visibility_state),
        (t.loadedAllLanguages = this.loadedAllLanguages),
        (t.bLoaded = this.bLoaded),
        (t.broadcaster = this.broadcaster
          ? new b(this.broadcaster.ConvertTo64BitString())
          : void 0),
        (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
        (t.vecTags = []),
        e
          ? ((t.m_nBuildID = this.m_nBuildID),
            (t.m_strBuildBranch = this.m_strBuildBranch),
            this.vecTags.forEach((e) => t.vecTags.push(e)))
          : this.vecTags.forEach((e) => {
              st.includes(e) && t.vecTags.push(e);
            }),
        t.jsondata.email_setting)
      ) {
        let e = 100;
        for (let n of t.jsondata.email_setting.sections)
          n.unique_id || ((n.unique_id = `email_section_${e}`), e++);
      }
      return t;
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
    GetDayIndexFromEventStart(e = E()) {
      let t = 0;
      this.startTime !== void 0 &&
        e >= this.startTime &&
        (t = Math.floor((e - this.startTime) / 86400)),
        this.m_overrideCurrentDay !== void 0 &&
          this.m_overrideCurrentDay >= 0 &&
          (t = this.m_overrideCurrentDay);
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
          C.IsELanguageValidInRealm(e, m.k_ESteamRealmGlobal)) ||
        (this.BInRealmChina() &&
          C.IsELanguageValidInRealm(e, m.k_ESteamRealmChina))
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
            : He.includes(e)
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
    GetImageURL(e, t = 0, n = H.full) {
      let r = this.GetImgArray(e),
        i = r && r.length > t && r[t] != null;
      return i && r[t]?.startsWith(`http`)
        ? r[t]
        : i
          ? V.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? ``, n)
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
          ? c.COMMUNITY_BASE_URL +
            `app/` +
            this.appid +
            `/eventcomments/` +
            this.forumTopicGID
          : e
            ? c.COMMUNITY_BASE_URL +
              `groups/` +
              e +
              `/eventcomments/` +
              this.forumTopicGID
            : c.COMMUNITY_BASE_URL +
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
        : c.COMMUNITY_BASE_URL +
            `gid/` +
            e.ConvertTo64BitString() +
            `/announcements/old_detail/` +
            this.AnnouncementGID;
    }
    BIsEventInFuture(e = E()) {
      return e < (this.startTime ?? 0);
    }
    BHasEventEnded(e = E()) {
      return (this.endTime ?? 0) < e;
    }
    UpdateVoteCount(e, n) {
      e == `up`
        ? (this.nVotesUp = t(this.nVotesUp + n, 0, 2 ** 53 - 1))
        : e == `down` &&
          (this.nVotesDown = t(this.nVotesDown + n, 0, 2 ** 53 - 1));
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
            if (r.length != 0) return V.ReplacementTokenToClanImageURL(r);
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
    BIsVisibleEvent(e = E()) {
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
    BIsEventActionEnabled(e = E()) {
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
        ? x.GetWithFallback(this.jsondata.localized_subtitle, e)
        : ``;
    }
    GetSubTitleWithSummaryFallback(e) {
      return (
        x.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
        n.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
      );
    }
    GetSummaryWithFallback(e, t) {
      return (
        x.GetWithFallback(this.jsondata?.localized_summary, e) ||
        n.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
      );
    }
    GetSummary(e) {
      return x.Get(this.jsondata?.localized_summary ?? [], e);
    }
    BHasSummary(e) {
      return !!this.GetSummary(e);
    }
    static GenerateSummaryFromText(e, t) {
      return !e || e.trim().length == 0
        ? ``
        : ((e = he(e, [
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
          (e = j(e, [`p`], ` `)),
          (e = j(e)),
          (e = fe(e)),
          de(e, t || 180));
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
      if (!this.jsondata.library_spotlight || ct.includes(this.type)) return !1;
      let t = new Date().getTime() / 1e3;
      return !(
        (lt.includes(this.type) && this.endTime && t > this.endTime) ||
        (this.startTime && t > this.startTime + le.PerDay * 60)
      );
    }
    BShowLibrarySpotlightText() {
      return !!this.jsondata.library_spotlight_text;
    }
    BHasBroadcastEnabled() {
      return !!this.jsondata.bBroadcastEnabled;
    }
    BEventCanShowBroadcastWidget(e, t = E()) {
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
        x.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
        w(
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
          b.InitFromAccountID(e, c.EUNIVERSE).ConvertTo64BitString(),
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
          c.STORE_BASE_URL +
          `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
        );
      if (!this.jsondata.sale_vanity_id)
        return (
          c.STORE_BASE_URL +
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
            ? c.STORE_BASE_URL + `category/` + e
            : e.type == `category`
              ? c.STORE_BASE_URL + `category/` + e.category
              : e.type == `tags`
                ? c.STORE_BASE_URL + `tags/` + (ue() || `en`) + `/` + e.tagid
                : e.type == `freetoplay`
                  ? c.STORE_BASE_URL + `genre/Free%20to%20Play/`
                  : e.type == `earlyaccess`
                    ? c.STORE_BASE_URL + `genre/Early%20Access/`
                    : c.STORE_BASE_URL + e.type
          : c.STORE_BASE_URL + `sale/` + this.jsondata.sale_vanity_id;
      }
      let t = this.clanSteamID.GetAccountID(),
        n = !!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath,
        r = this.GetSaleVanity();
      return e && Ke(t, n) ? e + `sale/` + r : c.STORE_BASE_URL + U(t, r, n);
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
        c = Ye + 10;
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
    GetSaleItemOfType(t, r) {
      if (!this.jsondata.sale_sections) return new Set();
      let i = new Set(t),
        a = new Set();
      return (
        e(
          !this.jsondata.bOptimizedForSize,
          `Cannot find all items in optimized json`,
        ),
        this.jsondata.bOptimizedForSize,
        this.jsondata.tagged_items?.forEach((e) => {
          n.AccumulateCapsuleListIDs([e.capsule], i, a, r);
        }),
        this.jsondata.sale_sections.forEach((e) => {
          if (K(e.section_type))
            n.AccumulateCapsuleListIDs(e.capsules, i, a, r);
          else if (e.section_type === `tabs` && e.tabs)
            for (let t of e.tabs)
              n.AccumulateCapsuleListIDs(t.capsules, i, a, r);
        }),
        a
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
      return W(this.type);
    }
    GetCategoryAsString(e) {
      return this.BHasTag(`steam_award_nomination_request`)
        ? w(`#PartnerEvent_SteamAwardNominations`)
        : this.BHasTag(`steam_award_vote_request`)
          ? w(`#PartnerEvent_SteamAwardVoteRequest`)
          : this.BHasTag(`steam_game_festival_artist_statement`)
            ? w(`#PartnerEvent_SteamGameFestival_ArtistState`)
            : this.BHasTag(`steam_game_festival_office_hour`)
              ? w(`#PartnerEvent_SteamGameFestival_OfficeHour`)
              : this.BHasTag(`steam_game_festival_broadcast`) ||
                  (this.BHasTagStartingWith(`sale_nextfest_`) &&
                    this.type == 11)
                ? w(`#PartnerEvent_SteamGameFestival_Broadcast`)
                : this.BHasTag(`vo_marketing_message`) && e
                  ? w(`#PartnerEvent_MM_MajorUpdate`)
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
      let t = this.BInRealmGlobal(),
        n = this.BInRealmChina();
      return (
        e(
          t || n,
          `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
        ),
        t && n ? ft : t ? ut : n ? dt : X
      );
    }
    BIsValidForRealm(e) {
      return this.GetIncludedRealmList().includes(e);
    }
    BIsNextFest(e = !1) {
      let t = this.jsondata.sale_vanity_id?.toLowerCase(),
        n = new b(this.clanSteamID).GetAccountID();
      return !(
        !t ||
        n != 39049601 ||
        !t.startsWith(`nextfest`) ||
        (e && (t.endsWith(`preview`) || t.endsWith(`press`)))
      );
    }
    BShowNextFestHeader(e) {
      return e && a.is_valve_email
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
h([s], Z.prototype, `GID`, void 0),
  h([s], Z.prototype, `AnnouncementGID`, void 0),
  h([s], Z.prototype, `forumTopicGID`, void 0),
  h([s], Z.prototype, `type`, void 0),
  h([s], Z.prototype, `appid`, void 0),
  h([s], Z.prototype, `name`, void 0),
  h([s], Z.prototype, `description`, void 0),
  h([s], Z.prototype, `timestamp_loc_updated`, void 0),
  h([s], Z.prototype, `startTime`, void 0),
  h([s], Z.prototype, `endTime`, void 0),
  h([s], Z.prototype, `visibilityStartTime`, void 0),
  h([s], Z.prototype, `visibilityEndTime`, void 0),
  h([s], Z.prototype, `m_nBuildID`, void 0),
  h([s], Z.prototype, `m_strBuildBranch`, void 0),
  h([s], Z.prototype, `postTime`, void 0),
  h([s], Z.prototype, `visibility_state`, void 0),
  h([s], Z.prototype, `broadcaster`, void 0),
  h([s], Z.prototype, `jsondata`, void 0),
  h([s], Z.prototype, `nCommentCount`, void 0),
  h([s], Z.prototype, `nVotesUp`, void 0),
  h([s], Z.prototype, `nVotesDown`, void 0),
  h([s], Z.prototype, `bOldAnnouncement`, void 0),
  h([s], Z.prototype, `announcementClanSteamID`, void 0),
  h([s], Z.prototype, `loadedAllLanguages`, void 0),
  h([s], Z.prototype, `bLoaded`, void 0),
  h([s], Z.prototype, `deleteInProgress`, void 0),
  h([s], Z.prototype, `vecTags`, void 0),
  h([s], Z.prototype, `last_update_steamid`, void 0),
  h([s], Z.prototype, `rtime32_last_modified`, void 0),
  h([s], Z.prototype, `rtime32_last_solr_search_col_updated`, void 0),
  h([s], Z.prototype, `rtime32_last_local_modification`, void 0),
  h([s], Z.prototype, `rtime32_moderator_reviewed`, void 0),
  h([s], Z.prototype, `video_preview_type`, void 0),
  h([s], Z.prototype, `video_preview_id`, void 0),
  h([s], Z.prototype, `m_overrideCurrentDay`, void 0);
function Q(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function $(e) {
  return Q(e) ? Y + e.announcement_body?.gid : e.gid;
}
function pt(t, n) {
  let r = new Z();
  if (
    ((r.clanSteamID = t),
    e(
      r.clanSteamID && r.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        r.clanSteamID.ConvertTo64BitString() +
        ` ` +
        re.EUNIVERSE,
    ),
    (r.GID = $(n)),
    (r.bOldAnnouncement = Q(n)),
    (r.appid = n.appid ?? 0),
    (r.createTime = n.rtime_created),
    (r.startTime = n.rtime32_start_time),
    (r.endTime = n.rtime32_end_time),
    (r.visibilityStartTime = n.rtime32_visibility_start),
    (r.visibilityEndTime = n.rtime32_visibility_end),
    (r.loadedAllLanguages = !1),
    (r.type = n.event_type ?? 1),
    (r.nVotesUp = n.votes_up ?? 0),
    (r.nVotesDown = n.votes_down ?? 0),
    (r.comment_type = n.comment_type),
    (r.gidfeature = n.gidfeature),
    (r.gidfeature2 = n.gidfeature2),
    (r.featured_app_tagid = n.featured_app_tagid),
    (r.vecTags = []),
    (r.creator_steamid = n.creator_steamid),
    (r.last_update_steamid = n.last_update_steamid),
    (r.rtime32_last_modified = n.rtime32_last_modified),
    (r.rtime32_moderator_reviewed = n.rtime_mod_reviewed),
    (r.video_preview_type = n.video_preview_type),
    (r.video_preview_id = n.video_preview_id),
    (r.has_live_stream = n.has_live_stream),
    (r.live_stream_viewer_count = n.live_stream_viewer_count),
    (r.m_nBuildID = n.build_id),
    (r.m_strBuildBranch = n.build_branch),
    n.announcement_body)
  ) {
    let e = n.announcement_body;
    (r.AnnouncementGID = e.gid),
      r.name.set(e.language, e.headline),
      r.description.set(e.language, e.body),
      r.timestamp_loc_updated.clear(),
      (r.forumTopicGID = e.forum_topic_id),
      (r.nCommentCount = e.commentcount),
      (r.postTime = e.posttime),
      r.bOldAnnouncement && !e.hidden && (r.startTime = e.posttime),
      (r.announcementClanSteamID = new b(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => r.vecTags.push(e)),
      !r.rtime32_last_solr_search_col_updated &&
        r.rtime32_last_modified &&
        ((r.rtime32_last_solr_search_col_updated = r.rtime32_last_modified),
        (r.rtime32_last_modified = e.updatetime));
  } else
    (r.AnnouncementGID = `0`),
      (r.forumTopicGID = n.forum_topic_id),
      r.name.clear(),
      r.description.clear(),
      r.timestamp_loc_updated.clear(),
      (r.postTime = n.rtime32_start_time),
      (r.nCommentCount = n.comment_count ?? 0),
      r.name.set(0, n.event_name ?? ``),
      r.description.set(0, n.event_notes ?? ``);
  n.broadcaster_accountid && (r.broadcaster = new b(n.broadcaster_accountid));
  let i = J;
  try {
    r.jsondata = { ...i, ...(n.jsondata ? JSON.parse(n.jsondata) : void 0) };
  } catch (e) {
    let t = T(e);
    throw (
      (console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e)
    );
  }
  if (
    ((r.jsondata.localized_capsule_image = y(
      r.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (r.jsondata.localized_title_image = y(
      r.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (r.jsondata.localized_subtitle = y(
      r.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (r.jsondata.localized_summary = y(
      r.jsondata.localized_summary || [],
      32,
      null,
    )),
    (r.jsondata.localized_broadcast_title = y(
      r.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (r.jsondata.localized_broadcast_left_image = y(
      r.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (r.jsondata.localized_broadcast_right_image = y(
      r.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (r.jsondata.localized_sale_header = y(
      r.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (r.jsondata.localized_sale_overlay = y(
      r.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (r.jsondata.localized_sale_product_banner = y(
      r.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (r.jsondata.localized_sale_product_mobile_banner = y(
      r.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (r.jsondata.localized_sale_logo = y(
      r.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    r.jsondata.sale_num_headers !== void 0 &&
      r.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < r.jsondata.sale_num_headers; ++e)
      r.jsondata.localized_per_day_sales_header[e] = y(
        r.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    r.jsondata.sale_sections &&
      r.jsondata.sale_sections.forEach((e, t) => {
        (e.localized_label &&= y(e.localized_label, 32, null)),
          e.section_type === `trailercarousel` && (e.show_as_carousel = !1),
          tt(e),
          (r.jsondata.sale_sections[t] = { ...at, ...e });
      }),
    r.jsondata.email_setting &&
      r.jsondata.email_setting.sections &&
      r.jsondata.email_setting.sections.forEach((e) => {
        e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = y(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = y(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = y(e.localized_image, 32, null));
      }),
    r.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let n = e.lastIndexOf(`/`),
          i = e.substr(n + 1);
        r.jsondata.localized_title_image[t] = i;
      }
    }),
    (r.bLoaded = !0),
    (r.visibility_state = n.published
      ? n.unlisted
        ? G.k_EEventStateUnlisted
        : n.hidden
          ? G.k_EEventStateStaged
          : G.k_EEventStateVisible
      : G.k_EEventStateUnpublished),
    r
  );
}
export {
  pe as A,
  V as C,
  R as D,
  z as E,
  L as O,
  H as S,
  B as T,
  W as _,
  G as a,
  Ue as b,
  $e as c,
  Z as d,
  it as f,
  qe as g,
  Y as h,
  K as i,
  O as k,
  ot as l,
  Xe as m,
  pt as n,
  et as o,
  nt as p,
  q as r,
  Qe as s,
  $ as t,
  Ze as u,
  U as v,
  Be as w,
  Ge as x,
  We as y,
};
