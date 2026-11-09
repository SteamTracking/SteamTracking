/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ft as e,
  Gt as t,
  Ht as n,
  It as r,
  Jt as i,
  Kt as a,
  Rt as o,
  Ut as s,
  Wt as c,
  Xt as l,
  Yt as u,
  on as d,
  qt as f,
  yt as p,
} from "./mobx.esm.js";
var m = d(l(), 1),
  h = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
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
              br: t.readInt32,
              pbr: t.readPackedInt32,
              bw: u.writeRepeatedInt32,
            },
            language: { n: 2, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetApps_Request`;
    }
  },
  g = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.apps || n(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { apps: { n: 1, c: e, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return (t.sm_mbf ||= a(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return i(t.M(), e, n);
    }
    static fromObject(e) {
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return s(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetApps_Response`;
    }
  },
  _ = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readInt32, bw: u.writeInt32 },
            language: { n: 2, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Request`;
    }
  },
  v = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readInt32, bw: u.writeInt32 },
            token_lists: { n: 2, c: b, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response`;
    }
  },
  y = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: t.readString, bw: u.writeString },
            value: { n: 2, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_Token`;
    }
  },
  b = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: t.readString, bw: u.writeString },
            tokens: { n: 2, c: y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_TokenList`;
    }
  },
  ee = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            gidfeature: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            commentthreadid: {
              n: 5,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            start: { n: 6, br: t.readInt32, bw: u.writeInt32 },
            count: { n: 7, br: t.readInt32, bw: u.writeInt32 },
            upvoters: { n: 8, br: t.readInt32, bw: u.writeInt32 },
            include_deleted: { n: 9, br: t.readBool, bw: u.writeBool },
            gidcomment: {
              n: 10,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            time_oldest: { n: 11, br: t.readUint32, bw: u.writeUint32 },
            oldest_first: { n: 12, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Request`;
    }
  },
  x = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidcomment || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidcomment: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            timestamp: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            text: { n: 4, br: t.readString, bw: u.writeString },
            upvotes: { n: 5, br: t.readInt32, bw: u.writeInt32 },
            hidden: { n: 6, br: t.readBool, bw: u.writeBool },
            hidden_by_user: { n: 7, br: t.readBool, bw: u.writeBool },
            deleted: { n: 8, br: t.readBool, bw: u.writeBool },
            ipaddress: { n: 9, c: o },
            total_hidden: { n: 10, br: t.readInt32, bw: u.writeInt32 },
            upvoted_by_user: { n: 11, br: t.readBool, bw: u.writeBool },
            reactions: { n: 12, c: S, r: !0, q: !0 },
            gidparentcomment: {
              n: 13,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            delete_reason: { n: 14, br: t.readEnum, bw: u.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_Comment`;
    }
  },
  S = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reactionid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            count: { n: 2, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_Comment_Reaction`;
    }
  },
  C = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.comments || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1, 2, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            comments: { n: 1, c: x, r: !0, q: !0 },
            deleted_comments: { n: 2, c: x, r: !0, q: !0 },
            steamid: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            commentthreadid: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            start: { n: 5, br: t.readInt32, bw: u.writeInt32 },
            count: { n: 6, br: t.readInt32, bw: u.writeInt32 },
            total_count: { n: 7, br: t.readInt32, bw: u.writeInt32 },
            upvotes: { n: 8, br: t.readInt32, bw: u.writeInt32 },
            upvoters: {
              n: 9,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            user_subscribed: { n: 10, br: t.readBool, bw: u.writeBool },
            user_upvoted: { n: 11, br: t.readBool, bw: u.writeBool },
            answer_commentid: {
              n: 12,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            answer_actor: { n: 13, br: t.readUint32, bw: u.writeUint32 },
            answer_actor_rank: { n: 14, br: t.readInt32, bw: u.writeInt32 },
            can_post: { n: 15, br: t.readBool, bw: u.writeBool },
            comment_thread_type: { n: 16, br: t.readUint32, bw: u.writeUint32 },
            gidfeature: {
              n: 17,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 18,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Response`;
    }
  },
  te = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            gidfeature: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_id: {
              n: 6,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetComment_Request`;
    }
  },
  ne = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.comment || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            comment: { n: 1, c: x },
            comment_thread_type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            gidfeature: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetComment_Response`;
    }
  },
  re = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [6], null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_id: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidcomment: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            reason: { n: 4, br: t.readEnum, bw: u.writeEnum },
            note: { n: 5, br: t.readString, bw: u.writeString },
            sanctions: { n: 6, c: w, r: !0, q: !0 },
            skip_lock: { n: 7, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request`;
    }
  },
  w = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sanction || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: t.readEnum, bw: u.writeEnum },
            days: { n: 2, br: t.readInt32, bw: u.writeInt32 },
            escalate_to: { n: 3, br: t.readEnum, bw: u.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request_Sanction`;
    }
  },
  ie = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SanctionComment_Response`;
    }
  },
  ae = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            gidfeature: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            text: { n: 6, br: t.readString, bw: u.writeString },
            gidparentcomment: {
              n: 7,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            suppress_notifications: { n: 8, br: t.readBool, bw: u.writeBool },
            is_report: { n: 9, br: t.readBool, bw: u.writeBool },
            start_hidden: { n: 10, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Request`;
    }
  },
  oe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidcomment || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidcomment: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            commentthreadid: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            count: { n: 3, br: t.readInt32, bw: u.writeInt32 },
            upvotes: { n: 4, br: t.readInt32, bw: u.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Response`;
    }
  },
  se = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: t.readEnum, bw: u.writeEnum },
            gidfeature: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            undelete: { n: 6, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_DeleteCommentFromThread_Request`;
    }
  },
  ce = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_DeleteCommentFromThread_Response`;
    }
  },
  le = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.commentthreadtype || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            commentthreadtype: { n: 1, br: t.readString, bw: u.writeString },
            steamid: { n: 2, br: t.readUint64String, bw: u.writeUint64String },
            gidfeature: {
              n: 3,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            rate_up: { n: 6, br: t.readBool, bw: u.writeBool },
            suppress_notifications: { n: 7, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Request`;
    }
  },
  ue = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidcomment || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidcomment: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            commentthreadid: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            count: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            upvotes: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            has_upvoted: { n: 5, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Response`;
    }
  },
  de = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.commentthreadtype || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            commentthreadtype: { n: 1, br: t.readString, bw: u.writeString },
            steamid: { n: 2, br: t.readUint64String, bw: u.writeUint64String },
            gidfeature: {
              n: 3,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            max_results: { n: 6, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Request`;
    }
  },
  T = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.commentthreadid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            commentthreadid: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidcomment: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            upvotes: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            has_upvoted: { n: 4, br: t.readBool, bw: u.writeBool },
            upvoter_accountids: {
              n: 5,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Response`;
    }
  },
  E = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: t.readUint64String, bw: u.writeUint64String },
            steamids_verifymembership: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint64String,
              pbr: t.readPackedUint64String,
              bw: u.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Request`;
    }
  },
  D = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamids_nonmembers || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamids_nonmembers: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readUint64String,
              pbr: t.readPackedUint64String,
              bw: u.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Response`;
    }
  },
  O = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.announcementid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            announcementid: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            vote_up: { n: 2, br: t.readBool, bw: u.writeBool },
            clan_accountid: { n: 3, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_RateClanAnnouncement_Request`;
    }
  },
  k = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_RateClanAnnouncement_Response`;
    }
  },
  A = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.announcementid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            announcementid: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Request`;
    }
  },
  j = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.voted_up || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voted_up: { n: 1, br: t.readBool, bw: u.writeBool },
            voted_down: { n: 2, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Response`;
    }
  },
  M = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Request`;
    }
  },
  N = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_ogg || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_ogg: { n: 1, br: t.readBool, bw: u.writeBool },
            name: { n: 2, br: t.readString, bw: u.writeString },
            profile_url: { n: 3, br: t.readString, bw: u.writeString },
            appid: { n: 4, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Response`;
    }
  },
  P = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.loc_group_id || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            loc_group_id: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            image_hash: { n: 2, br: t.readString, bw: u.writeString },
            thumbnail_hash: { n: 3, br: t.readString, bw: u.writeString },
            file_type: { n: 4, br: t.readEnum, bw: u.writeEnum },
            group: { n: 5, br: t.readEnum, bw: u.writeEnum },
            width: { n: 6, br: t.readUint32, bw: u.writeUint32 },
            height: { n: 7, br: t.readUint32, bw: u.writeUint32 },
            extensions: { n: 8, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_ClanLocGroupImage`;
    }
  },
  F = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: t.readUint64String, bw: u.writeUint64String },
            group: { n: 2, br: t.readEnum, bw: u.writeEnum },
            language: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            loc_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: t.readUint64String,
              pbr: t.readPackedUint64String,
              bw: u.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Request`;
    }
  },
  I = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.images || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: P, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Response`;
    }
  },
  L = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            filter_user_uploaded_only: {
              n: 2,
              br: t.readBool,
              bw: u.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Request`;
    }
  },
  R = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.avatars || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { avatars: { n: 1, c: z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response`;
    }
  },
  z = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.avatar_sha1 || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            avatar_sha1: { n: 1, br: t.readString, bw: u.writeString },
            user_uploaded: { n: 2, br: t.readBool, bw: u.writeBool },
            timestamp: { n: 3, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response_AvatarData`;
    }
  },
  B = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.priority || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            priority: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            appid: {
              n: 2,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CAppPriority`;
    }
  },
  V = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.count || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [5, 6, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            offset: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            rtime32_start_time: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            rtime32_end_time: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            language_preference: {
              n: 5,
              r: !0,
              q: !0,
              br: t.readUint32,
              pbr: t.readPackedUint32,
              bw: u.writeRepeatedUint32,
            },
            filter_event_type: {
              n: 6,
              r: !0,
              q: !0,
              br: t.readEnum,
              pbr: t.readPackedEnum,
              bw: u.writeRepeatedEnum,
            },
            filter_to_appid: { n: 7, br: t.readBool, bw: u.writeBool },
            app_list: { n: 8, c: B, r: !0, q: !0 },
            count_after: { n: 9, d: 0, br: t.readUint32, bw: u.writeUint32 },
            count_before: { n: 10, d: 0, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Request`;
    }
  },
  H = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: r, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Response`;
    }
  },
  fe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_steam_blog || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_steam_blog: { n: 1, br: t.readBool, bw: u.writeBool },
            filter_to_played_within_days: {
              n: 2,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            include_only_game_updates: {
              n: 3,
              br: t.readBool,
              bw: u.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetBestEventsForUser_Request`;
    }
  },
  U = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clanid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            event_gid: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            appid: { n: 4, br: t.readUint32, bw: u.writeUint32 },
            possible_takeover: { n: 5, br: t.readBool, bw: u.writeBool },
            rtime32_last_modified: {
              n: 6,
              d: 0,
              br: t.readUint32,
              bw: u.writeUint32,
            },
            user_app_priority: { n: 7, br: t.readInt32, bw: u.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventResult`;
    }
  },
  pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: U, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetBestEventsForUser_Response`;
    }
  },
  me = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Request`;
    }
  },
  he = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Response`;
    }
  },
  W = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            user_app_priority: { n: 2, br: t.readInt32, bw: u.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventsAppPriority`;
    }
  },
  ge = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventsAppPriorities_Request`;
    }
  },
  _e = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.priorities || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { priorities: { n: 1, c: W, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventsAppPriorities_Response`;
    }
  },
  ve = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: u.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Request`;
    }
  },
  ye = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Response`;
    }
  },
  be = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: u.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowMoreForApp_Request`;
    }
  },
  xe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowMoreForApp_Response`;
    }
  },
  Se = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: t.readUint32, bw: u.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowLessForApp_Request`;
    }
  },
  Ce = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowLessForApp_Response`;
    }
  },
  G = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.markings || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { markings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Request`;
    }
  },
  K = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clanid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            event_gid: {
              n: 2,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            display_location: { n: 3, br: t.readEnum, bw: u.writeEnum },
            mark_shown: { n: 4, br: t.readBool, bw: u.writeBool },
            mark_read: { n: 5, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking`;
    }
  },
  we = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Response`;
    }
  },
  Te = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.event_gids || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            event_gids: {
              n: 1,
              r: !0,
              q: !0,
              br: t.readFixed64String,
              pbr: t.readPackedFixed64String,
              bw: u.writeRepeatedFixed64String,
            },
            include_read_events_only: { n: 2, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Request`;
    }
  },
  Ee = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.events || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { events: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response`;
    }
  },
  q = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.event_gid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            event_gid: {
              n: 1,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            last_shown_time: { n: 2, br: t.readUint32, bw: u.writeUint32 },
            last_read_time: { n: 3, br: t.readUint32, bw: u.writeUint32 },
            clan_account_id: { n: 4, br: t.readUint32, bw: u.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent`;
    }
  },
  De = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidfeature || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidfeature: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidfeature2: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidcomment: {
              n: 3,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            steamid: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: t.readString, bw: u.writeString },
            hide: { n: 6, br: t.readBool, bw: u.writeBool },
            report_reason: { n: 7, br: t.readEnum, bw: u.writeEnum },
            report_text: { n: 8, br: t.readString, bw: u.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_HideAndReportComment_Request`;
    }
  },
  Oe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_HideAndReportComment_Response`;
    }
  },
  ke = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            itemid: { n: 2, br: t.readUint64String, bw: u.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Request`;
    }
  },
  Ae = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.crowdin_project_id || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            crowdin_project_id: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Response`;
    }
  },
  je = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Request`;
    }
  },
  Me = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.crowdin_project_id || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            crowdin_project_id: {
              n: 1,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            crowdin_directory_id: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            push_by_default: { n: 3, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Response`;
    }
  },
  J = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
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
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            itemid: { n: 2, br: t.readUint64String, bw: u.writeUint64String },
            language: { n: 3, br: t.readInt32, bw: u.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_FetchTranslationFromCrowdIn_Request`;
    }
  },
  Ne = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_FetchTranslationFromCrowdIn_Response`;
    }
  },
  Pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.review_labels || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { review_labels: { n: 1, c: Y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Request`;
    }
  },
  Y = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: t.readUint32, bw: u.writeUint32 },
            recommendationid: {
              n: 2,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            is_bot_review: { n: 3, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel`;
    }
  },
  Fe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Response`;
    }
  },
  X = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.explicit || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            explicit: { n: 1, br: t.readBool, bw: u.writeBool },
            adult: { n: 2, br: t.readBool, bw: u.writeBool },
            toxic: { n: 3, br: t.readBool, bw: u.writeBool },
            spam: { n: 4, br: t.readBool, bw: u.writeBool },
            malicious: { n: 5, br: t.readBool, bw: u.writeBool },
            commercial: { n: 6, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CommentClassification`;
    }
  },
  Z = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.resolve || n(e.M()),
        m.Message.initialize(this, t, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            resolve: { n: 1, br: t.readBool, bw: u.writeBool },
            reportid: { n: 2, br: t.readUint64String, bw: u.writeUint64String },
            report_action: { n: 3, br: t.readEnum, bw: u.writeEnum },
            gidcomment: {
              n: 4,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: t.readString, bw: u.writeString },
            steamid: {
              n: 6,
              br: t.readFixed64String,
              bw: u.writeFixed64String,
            },
            gidfeature: {
              n: 7,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            gidfeature2: {
              n: 8,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            classification: { n: 9, c: X },
            reason: { n: 10, br: t.readUint32, bw: u.writeUint32 },
            comment_thread_id: {
              n: 11,
              br: t.readUint64String,
              bw: u.writeUint64String,
            },
            sanctions: { n: 12, c: Q, r: !0, q: !0 },
            note: { n: 13, br: t.readString, bw: u.writeString },
            skip_lock: { n: 14, br: t.readBool, bw: u.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Request`;
    }
  },
  Q = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sanction || n(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: t.readEnum, bw: u.writeEnum },
            days: { n: 2, br: t.readInt32, bw: u.writeInt32 },
            escalate_to: { n: 3, br: t.readEnum, bw: u.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= a(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return s(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Request_Sanction`;
    }
  },
  Ie = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Community.GetApps#1`, p(h, t, n), g, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetApps = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Community.GetAppRichPresenceLocalization#1`,
      p(_, t, n),
      v,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  e.GetAppRichPresenceLocalization = n;
  function r(e, t, n) {
    return e.SendMsg(`Community.GetCommentThread#1`, p(ee, t, n), C, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommentThread = r;
  function i(e, t, n) {
    return e.SendMsg(`Community.GetComment#1`, p(te, t, n), ne, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetComment = i;
  function a(e, t, n) {
    return e.SendMsg(`Community.SanctionComment#1`, p(re, t, n), ie, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SanctionComment = a;
  function o(e, t, n) {
    return e.SendMsg(`Community.PostCommentToThread#1`, p(ae, t, n), oe, {
      ePrivilege: 3,
    });
  }
  e.PostCommentToThread = o;
  function s(e, t, n) {
    return e.SendMsg(`Community.DeleteCommentFromThread#1`, p(se, t, n), ce, {
      ePrivilege: 1,
    });
  }
  e.DeleteCommentFromThread = s;
  function c(e, t, n) {
    return e.SendMsg(`Community.RateCommentThread#1`, p(le, t, n), ue, {
      ePrivilege: 3,
    });
  }
  e.RateCommentThread = c;
  function l(e, t, n) {
    return e.SendMsg(`Community.GetCommentThreadRatings#1`, p(de, t, n), T, {
      ePrivilege: 2,
    });
  }
  e.GetCommentThreadRatings = l;
  function u(e, t, n) {
    return e.SendMsg(`Community.VerifyClanMembership#1`, p(E, t, n), D, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.VerifyClanMembership = u;
  function d(e, t, n) {
    return e.SendMsg(`Community.RateClanAnnouncement#1`, p(O, t, n), k, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.RateClanAnnouncement = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Community.GetClanAnnouncementVoteForUser#1`,
      p(A, t, n),
      j,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanAnnouncementVoteForUser = f;
  function m(e, t, n) {
    return e.SendMsg(`Community.GetClanMetadata#1`, p(M, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.GetClanMetadata = m;
  function y(e, t, n) {
    return e.SendMsg(`Community.GetClanLocGroupImages#1`, p(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetClanLocGroupImages = y;
  function b(e, t, n) {
    return e.SendMsg(`Community.GetAvatarHistory#1`, p(L, t, n), R, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAvatarHistory = b;
  function x(e, t, n) {
    return e.SendMsg(
      `Community.GetClanEventCrowdInMetadata#1`,
      p(ke, t, n),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanEventCrowdInMetadata = x;
  function S(e, t, n) {
    return e.SendMsg(`Community.GetClanCrowdInMetadata#1`, p(je, t, n), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClanCrowdInMetadata = S;
  function w(e, t, n) {
    return e.SendMsg(
      `Community.FetchTranslationFromCrowdIn#1`,
      p(J, t, n),
      Ne,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchTranslationFromCrowdIn = w;
  function P(e, t, n) {
    return e.SendMsg(`Community.HideAndReportComment#1`, p(De, t, n), Oe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.HideAndReportComment = P;
  function z(e, t, n) {
    return e.SendMsg(`Community.GetUserPartnerEventNews#1`, p(V, t, n), H, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetUserPartnerEventNews = z;
  function B(e, t, n) {
    return e.SendMsg(`Community.GetBestEventsForUser#1`, p(fe, t, n), pe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBestEventsForUser = B;
  function U(e, t, n) {
    return e.SendMsg(`Community.MarkPartnerEventsForUser#1`, p(G, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.MarkPartnerEventsForUser = U;
  function W(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventViewStatus#1`,
      p(Te, t, n),
      Ee,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventViewStatus = W;
  function K(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowMoreForApp#1`,
      p(be, t, n),
      xe,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowMoreForApp = K;
  function q(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowLessForApp#1`,
      p(Se, t, n),
      Ce,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowLessForApp = q;
  function Y(e, t, n) {
    return e.SendMsg(
      `Community.ClearUserPartnerEventsAppPriorities#1`,
      p(me, t, n),
      he,
      { ePrivilege: 1 },
    );
  }
  e.ClearUserPartnerEventsAppPriorities = Y;
  function X(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventsAppPriorities#1`,
      p(ge, t, n),
      _e,
      { ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventsAppPriorities = X;
  function Z(e, t, n) {
    return e.SendMsg(
      `Community.ClearSinglePartnerEventsAppPriority#1`,
      p(ve, t, n),
      ye,
      { ePrivilege: 1 },
    );
  }
  e.ClearSinglePartnerEventsAppPriority = Z;
  function Q(e, t, n) {
    return e.SendMsg(
      `Community.SetRecommendationBotReviewStatus#1`,
      p(Pe, t, n),
      Fe,
      { ePrivilege: 1 },
    );
  }
  e.SetRecommendationBotReviewStatus = Q;
})(($ ||= {}));
var Le;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `CommentModeration.UpdateCommentReportState#1`,
      p(Z, t, n),
      Ie,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateCommentReportState = t;
})((Le ||= {}));
export { $ as a, K as i, h as n, G as r, _ as t };
