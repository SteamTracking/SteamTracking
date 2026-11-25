import { o as e } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  Br as t,
  Hr as n,
  Si as r,
  _i as i,
  ar as a,
  bi as o,
  gi as s,
  hi as c,
  mi as l,
  vi as u,
  xi as d,
  yi as f,
  zr as p,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
var m = e(r(), 1),
  h = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
              br: i.readInt32,
              pbr: i.readPackedInt32,
              bw: d.writeRepeatedInt32,
            },
            language: { n: 2, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetApps_Request`;
    }
  },
  ee = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: p, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetApps_Response`;
    }
  },
  g = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readInt32, bw: d.writeInt32 },
            language: { n: 2, br: i.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Request`;
    }
  },
  _ = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readInt32, bw: d.writeInt32 },
            token_lists: { n: 2, c: y, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response`;
    }
  },
  v = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: i.readString, bw: d.writeString },
            value: { n: 2, br: i.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_Token`;
    }
  },
  y = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: i.readString, bw: d.writeString },
            tokens: { n: 2, c: v, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_TokenList`;
    }
  },
  b = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: i.readEnum, bw: d.writeEnum },
            gidfeature: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            commentthreadid: {
              n: 5,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            start: { n: 6, br: i.readInt32, bw: d.writeInt32 },
            count: { n: 7, br: i.readInt32, bw: d.writeInt32 },
            upvoters: { n: 8, br: i.readInt32, bw: d.writeInt32 },
            include_deleted: { n: 9, br: i.readBool, bw: d.writeBool },
            gidcomment: {
              n: 10,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            time_oldest: { n: 11, br: i.readUint32, bw: d.writeUint32 },
            oldest_first: { n: 12, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Request`;
    }
  },
  x = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidcomment || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [12], null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            timestamp: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            text: { n: 4, br: i.readString, bw: d.writeString },
            upvotes: { n: 5, br: i.readInt32, bw: d.writeInt32 },
            hidden: { n: 6, br: i.readBool, bw: d.writeBool },
            hidden_by_user: { n: 7, br: i.readBool, bw: d.writeBool },
            deleted: { n: 8, br: i.readBool, bw: d.writeBool },
            ipaddress: { n: 9, c: n },
            total_hidden: { n: 10, br: i.readInt32, bw: d.writeInt32 },
            upvoted_by_user: { n: 11, br: i.readBool, bw: d.writeBool },
            reactions: { n: 12, c: S, r: !0, q: !0 },
            gidparentcomment: {
              n: 13,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            delete_reason: { n: 14, br: i.readEnum, bw: d.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_Comment`;
    }
  },
  S = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.reactionid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reactionid: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            count: { n: 2, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_Comment_Reaction`;
    }
  },
  te = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.comments || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1, 2, 9], null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            commentthreadid: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            start: { n: 5, br: i.readInt32, bw: d.writeInt32 },
            count: { n: 6, br: i.readInt32, bw: d.writeInt32 },
            total_count: { n: 7, br: i.readInt32, bw: d.writeInt32 },
            upvotes: { n: 8, br: i.readInt32, bw: d.writeInt32 },
            upvoters: {
              n: 9,
              r: !0,
              q: !0,
              br: i.readUint32,
              pbr: i.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            user_subscribed: { n: 10, br: i.readBool, bw: d.writeBool },
            user_upvoted: { n: 11, br: i.readBool, bw: d.writeBool },
            answer_commentid: {
              n: 12,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            answer_actor: { n: 13, br: i.readUint32, bw: d.writeUint32 },
            answer_actor_rank: { n: 14, br: i.readInt32, bw: d.writeInt32 },
            can_post: { n: 15, br: i.readBool, bw: d.writeBool },
            comment_thread_type: { n: 16, br: i.readUint32, bw: d.writeUint32 },
            gidfeature: {
              n: 17,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 18,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Response`;
    }
  },
  ne = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: i.readEnum, bw: d.writeEnum },
            gidfeature: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_id: {
              n: 6,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetComment_Request`;
    }
  },
  C = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.comment || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            comment: { n: 1, c: x },
            comment_thread_type: { n: 2, br: i.readEnum, bw: d.writeEnum },
            gidfeature: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetComment_Response`;
    }
  },
  w = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [6], null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_id: {
              n: 2,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidcomment: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            reason: { n: 4, br: i.readEnum, bw: d.writeEnum },
            note: { n: 5, br: i.readString, bw: d.writeString },
            sanctions: { n: 6, c: T, r: !0, q: !0 },
            skip_lock: { n: 7, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request`;
    }
  },
  T = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sanction || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: i.readEnum, bw: d.writeEnum },
            days: { n: 2, br: i.readInt32, bw: d.writeInt32 },
            escalate_to: { n: 3, br: i.readEnum, bw: d.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request_Sanction`;
    }
  },
  re = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SanctionComment_Response`;
    }
  },
  E = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: i.readEnum, bw: d.writeEnum },
            gidfeature: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            text: { n: 6, br: i.readString, bw: d.writeString },
            gidparentcomment: {
              n: 7,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            suppress_notifications: { n: 8, br: i.readBool, bw: d.writeBool },
            is_report: { n: 9, br: i.readBool, bw: d.writeBool },
            start_hidden: { n: 10, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Request`;
    }
  },
  ie = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidcomment || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            commentthreadid: {
              n: 2,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            count: { n: 3, br: i.readInt32, bw: d.writeInt32 },
            upvotes: { n: 4, br: i.readInt32, bw: d.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Response`;
    }
  },
  D = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: i.readEnum, bw: d.writeEnum },
            gidfeature: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            undelete: { n: 6, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_DeleteCommentFromThread_Request`;
    }
  },
  ae = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_DeleteCommentFromThread_Response`;
    }
  },
  O = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.commentthreadtype || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            commentthreadtype: { n: 1, br: i.readString, bw: d.writeString },
            steamid: { n: 2, br: i.readUint64String, bw: d.writeUint64String },
            gidfeature: {
              n: 3,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            rate_up: { n: 6, br: i.readBool, bw: d.writeBool },
            suppress_notifications: { n: 7, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Request`;
    }
  },
  oe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidcomment || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            commentthreadid: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            count: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            upvotes: { n: 4, br: i.readUint32, bw: d.writeUint32 },
            has_upvoted: { n: 5, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Response`;
    }
  },
  se = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.commentthreadtype || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            commentthreadtype: { n: 1, br: i.readString, bw: d.writeString },
            steamid: { n: 2, br: i.readUint64String, bw: d.writeUint64String },
            gidfeature: {
              n: 3,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            max_results: { n: 6, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Request`;
    }
  },
  ce = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.commentthreadid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [5], null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidcomment: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            upvotes: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            has_upvoted: { n: 4, br: i.readBool, bw: d.writeBool },
            upvoter_accountids: {
              n: 5,
              r: !0,
              q: !0,
              br: i.readUint32,
              pbr: i.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Response`;
    }
  },
  le = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: i.readUint64String, bw: d.writeUint64String },
            steamids_verifymembership: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readUint64String,
              pbr: i.readPackedUint64String,
              bw: d.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Request`;
    }
  },
  ue = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamids_nonmembers || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
              br: i.readUint64String,
              pbr: i.readPackedUint64String,
              bw: d.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Response`;
    }
  },
  de = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.announcementid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            vote_up: { n: 2, br: i.readBool, bw: d.writeBool },
            clan_accountid: { n: 3, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateClanAnnouncement_Request`;
    }
  },
  fe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateClanAnnouncement_Response`;
    }
  },
  pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.announcementid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Request`;
    }
  },
  me = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.voted_up || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            voted_up: { n: 1, br: i.readBool, bw: d.writeBool },
            voted_down: { n: 2, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Response`;
    }
  },
  he = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Request`;
    }
  },
  k = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_ogg || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_ogg: { n: 1, br: i.readBool, bw: d.writeBool },
            name: { n: 2, br: i.readString, bw: d.writeString },
            profile_url: { n: 3, br: i.readString, bw: d.writeString },
            appid: { n: 4, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Response`;
    }
  },
  A = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.loc_group_id || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            image_hash: { n: 2, br: i.readString, bw: d.writeString },
            thumbnail_hash: { n: 3, br: i.readString, bw: d.writeString },
            file_type: { n: 4, br: i.readEnum, bw: d.writeEnum },
            group: { n: 5, br: i.readEnum, bw: d.writeEnum },
            width: { n: 6, br: i.readUint32, bw: d.writeUint32 },
            height: { n: 7, br: i.readUint32, bw: d.writeUint32 },
            extensions: { n: 8, br: i.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClanLocGroupImage`;
    }
  },
  j = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: i.readUint64String, bw: d.writeUint64String },
            group: { n: 2, br: i.readEnum, bw: d.writeEnum },
            language: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            loc_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: i.readUint64String,
              pbr: i.readPackedUint64String,
              bw: d.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Request`;
    }
  },
  M = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: A, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Response`;
    }
  },
  N = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            filter_user_uploaded_only: {
              n: 2,
              br: i.readBool,
              bw: d.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Request`;
    }
  },
  P = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.avatars || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { avatars: { n: 1, c: F, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response`;
    }
  },
  F = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.avatar_sha1 || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            avatar_sha1: { n: 1, br: i.readString, bw: d.writeString },
            user_uploaded: { n: 2, br: i.readBool, bw: d.writeBool },
            timestamp: { n: 3, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response_AvatarData`;
    }
  },
  I = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.priority || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            priority: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            appid: {
              n: 2,
              r: !0,
              q: !0,
              br: i.readUint32,
              pbr: i.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAppPriority`;
    }
  },
  L = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.count || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [5, 6, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            count: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            offset: { n: 2, br: i.readUint32, bw: d.writeUint32 },
            rtime32_start_time: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            rtime32_end_time: { n: 4, br: i.readUint32, bw: d.writeUint32 },
            language_preference: {
              n: 5,
              r: !0,
              q: !0,
              br: i.readUint32,
              pbr: i.readPackedUint32,
              bw: d.writeRepeatedUint32,
            },
            filter_event_type: {
              n: 6,
              r: !0,
              q: !0,
              br: i.readEnum,
              pbr: i.readPackedEnum,
              bw: d.writeRepeatedEnum,
            },
            filter_to_appid: { n: 7, br: i.readBool, bw: d.writeBool },
            app_list: { n: 8, c: I, r: !0, q: !0 },
            count_after: { n: 9, d: 0, br: i.readUint32, bw: d.writeUint32 },
            count_before: { n: 10, d: 0, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Request`;
    }
  },
  R = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: t, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Response`;
    }
  },
  ge = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_steam_blog || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_steam_blog: { n: 1, br: i.readBool, bw: d.writeBool },
            filter_to_played_within_days: {
              n: 2,
              br: i.readUint32,
              bw: d.writeUint32,
            },
            include_only_game_updates: {
              n: 3,
              br: i.readBool,
              bw: d.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetBestEventsForUser_Request`;
    }
  },
  z = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 2,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            appid: { n: 4, br: i.readUint32, bw: d.writeUint32 },
            possible_takeover: { n: 5, br: i.readBool, bw: d.writeBool },
            rtime32_last_modified: {
              n: 6,
              d: 0,
              br: i.readUint32,
              bw: d.writeUint32,
            },
            user_app_priority: { n: 7, br: i.readInt32, bw: d.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventResult`;
    }
  },
  _e = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: z, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetBestEventsForUser_Response`;
    }
  },
  ve = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Request`;
    }
  },
  ye = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClearUserPartnerEventsAppPriorities_Response`;
    }
  },
  B = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            user_app_priority: { n: 2, br: i.readInt32, bw: d.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsAppPriority`;
    }
  },
  V = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventsAppPriorities_Request`;
    }
  },
  be = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.priorities || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { priorities: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventsAppPriorities_Response`;
    }
  },
  H = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: i.readUint32, bw: d.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Request`;
    }
  },
  xe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Response`;
    }
  },
  U = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: i.readUint32, bw: d.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowMoreForApp_Request`;
    }
  },
  Se = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowMoreForApp_Response`;
    }
  },
  W = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: i.readUint32, bw: d.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowLessForApp_Request`;
    }
  },
  Ce = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowLessForApp_Response`;
    }
  },
  G = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.markings || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Request`;
    }
  },
  K = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.clanid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clanid: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            event_gid: {
              n: 2,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            display_location: { n: 3, br: i.readEnum, bw: d.writeEnum },
            mark_shown: { n: 4, br: i.readBool, bw: d.writeBool },
            mark_read: { n: 5, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking`;
    }
  },
  we = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Response`;
    }
  },
  Te = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.event_gids || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
              br: i.readFixed64String,
              pbr: i.readPackedFixed64String,
              bw: d.writeRepeatedFixed64String,
            },
            include_read_events_only: { n: 2, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Request`;
    }
  },
  Ee = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response`;
    }
  },
  q = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.event_gid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            last_shown_time: { n: 2, br: i.readUint32, bw: d.writeUint32 },
            last_read_time: { n: 3, br: i.readUint32, bw: d.writeUint32 },
            clan_account_id: { n: 4, br: i.readUint32, bw: d.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent`;
    }
  },
  De = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gidfeature || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidfeature2: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidcomment: {
              n: 3,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            steamid: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: i.readString, bw: d.writeString },
            hide: { n: 6, br: i.readBool, bw: d.writeBool },
            report_reason: { n: 7, br: i.readEnum, bw: d.writeEnum },
            report_text: { n: 8, br: i.readString, bw: d.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_HideAndReportComment_Request`;
    }
  },
  Oe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_HideAndReportComment_Response`;
    }
  },
  ke = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            itemid: { n: 2, br: i.readUint64String, bw: d.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Request`;
    }
  },
  Ae = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.crowdin_project_id || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Response`;
    }
  },
  je = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Request`;
    }
  },
  Me = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.crowdin_project_id || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            crowdin_directory_id: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            push_by_default: { n: 3, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Response`;
    }
  },
  J = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            itemid: { n: 2, br: i.readUint64String, bw: d.writeUint64String },
            language: { n: 3, br: i.readInt32, bw: d.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_FetchTranslationFromCrowdIn_Request`;
    }
  },
  Ne = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_FetchTranslationFromCrowdIn_Response`;
    }
  },
  Pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.review_labels || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Request`;
    }
  },
  Y = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: i.readUint32, bw: d.writeUint32 },
            recommendationid: {
              n: 2,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            is_bot_review: { n: 3, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel`;
    }
  },
  Fe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Response`;
    }
  },
  X = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.explicit || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            explicit: { n: 1, br: i.readBool, bw: d.writeBool },
            adult: { n: 2, br: i.readBool, bw: d.writeBool },
            toxic: { n: 3, br: i.readBool, bw: d.writeBool },
            spam: { n: 4, br: i.readBool, bw: d.writeBool },
            malicious: { n: 5, br: i.readBool, bw: d.writeBool },
            commercial: { n: 6, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CommentClassification`;
    }
  },
  Z = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.resolve || l(e.M()),
        m.Message.initialize(this, t, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            resolve: { n: 1, br: i.readBool, bw: d.writeBool },
            reportid: { n: 2, br: i.readUint64String, bw: d.writeUint64String },
            report_action: { n: 3, br: i.readEnum, bw: d.writeEnum },
            gidcomment: {
              n: 4,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: i.readString, bw: d.writeString },
            steamid: {
              n: 6,
              br: i.readFixed64String,
              bw: d.writeFixed64String,
            },
            gidfeature: {
              n: 7,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            gidfeature2: {
              n: 8,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            classification: { n: 9, c: X },
            reason: { n: 10, br: i.readUint32, bw: d.writeUint32 },
            comment_thread_id: {
              n: 11,
              br: i.readUint64String,
              bw: d.writeUint64String,
            },
            sanctions: { n: 12, c: Q, r: !0, q: !0 },
            note: { n: 13, br: i.readString, bw: d.writeString },
            skip_lock: { n: 14, br: i.readBool, bw: d.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Request`;
    }
  },
  Q = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sanction || l(e.M()),
        m.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: i.readEnum, bw: d.writeEnum },
            days: { n: 2, br: i.readInt32, bw: d.writeInt32 },
            escalate_to: { n: 3, br: i.readEnum, bw: d.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return o(e.M(), t, n);
    }
    static fromObject(t) {
      return s(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return c(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      f(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Request_Sanction`;
    }
  },
  Ie = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), m.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new m.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Response`;
    }
  },
  $;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Community.GetApps#1`, a(h, t, n), ee, {
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
      a(g, t, n),
      _,
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
    return e.SendMsg(`Community.GetCommentThread#1`, a(b, t, n), te, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommentThread = r;
  function i(e, t, n) {
    return e.SendMsg(`Community.GetComment#1`, a(ne, t, n), C, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetComment = i;
  function o(e, t, n) {
    return e.SendMsg(`Community.SanctionComment#1`, a(w, t, n), re, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SanctionComment = o;
  function s(e, t, n) {
    return e.SendMsg(`Community.PostCommentToThread#1`, a(E, t, n), ie, {
      ePrivilege: 3,
    });
  }
  e.PostCommentToThread = s;
  function c(e, t, n) {
    return e.SendMsg(`Community.DeleteCommentFromThread#1`, a(D, t, n), ae, {
      ePrivilege: 1,
    });
  }
  e.DeleteCommentFromThread = c;
  function l(e, t, n) {
    return e.SendMsg(`Community.RateCommentThread#1`, a(O, t, n), oe, {
      ePrivilege: 3,
    });
  }
  e.RateCommentThread = l;
  function u(e, t, n) {
    return e.SendMsg(`Community.GetCommentThreadRatings#1`, a(se, t, n), ce, {
      ePrivilege: 2,
    });
  }
  e.GetCommentThreadRatings = u;
  function d(e, t, n) {
    return e.SendMsg(`Community.VerifyClanMembership#1`, a(le, t, n), ue, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.VerifyClanMembership = d;
  function f(e, t, n) {
    return e.SendMsg(`Community.RateClanAnnouncement#1`, a(de, t, n), fe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.RateClanAnnouncement = f;
  function p(e, t, n) {
    return e.SendMsg(
      `Community.GetClanAnnouncementVoteForUser#1`,
      a(pe, t, n),
      me,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanAnnouncementVoteForUser = p;
  function m(e, t, n) {
    return e.SendMsg(`Community.GetClanMetadata#1`, a(he, t, n), k, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.GetClanMetadata = m;
  function v(e, t, n) {
    return e.SendMsg(`Community.GetClanLocGroupImages#1`, a(j, t, n), M, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetClanLocGroupImages = v;
  function y(e, t, n) {
    return e.SendMsg(`Community.GetAvatarHistory#1`, a(N, t, n), P, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAvatarHistory = y;
  function x(e, t, n) {
    return e.SendMsg(
      `Community.GetClanEventCrowdInMetadata#1`,
      a(ke, t, n),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanEventCrowdInMetadata = x;
  function S(e, t, n) {
    return e.SendMsg(`Community.GetClanCrowdInMetadata#1`, a(je, t, n), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClanCrowdInMetadata = S;
  function T(e, t, n) {
    return e.SendMsg(
      `Community.FetchTranslationFromCrowdIn#1`,
      a(J, t, n),
      Ne,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchTranslationFromCrowdIn = T;
  function A(e, t, n) {
    return e.SendMsg(`Community.HideAndReportComment#1`, a(De, t, n), Oe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.HideAndReportComment = A;
  function F(e, t, n) {
    return e.SendMsg(`Community.GetUserPartnerEventNews#1`, a(L, t, n), R, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetUserPartnerEventNews = F;
  function I(e, t, n) {
    return e.SendMsg(`Community.GetBestEventsForUser#1`, a(ge, t, n), _e, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBestEventsForUser = I;
  function z(e, t, n) {
    return e.SendMsg(`Community.MarkPartnerEventsForUser#1`, a(G, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.MarkPartnerEventsForUser = z;
  function B(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventViewStatus#1`,
      a(Te, t, n),
      Ee,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventViewStatus = B;
  function K(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowMoreForApp#1`,
      a(U, t, n),
      Se,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowMoreForApp = K;
  function q(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowLessForApp#1`,
      a(W, t, n),
      Ce,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowLessForApp = q;
  function Y(e, t, n) {
    return e.SendMsg(
      `Community.ClearUserPartnerEventsAppPriorities#1`,
      a(ve, t, n),
      ye,
      { ePrivilege: 1 },
    );
  }
  e.ClearUserPartnerEventsAppPriorities = Y;
  function X(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventsAppPriorities#1`,
      a(V, t, n),
      be,
      { ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventsAppPriorities = X;
  function Z(e, t, n) {
    return e.SendMsg(
      `Community.ClearSinglePartnerEventsAppPriority#1`,
      a(H, t, n),
      xe,
      { ePrivilege: 1 },
    );
  }
  e.ClearSinglePartnerEventsAppPriority = Z;
  function Q(e, t, n) {
    return e.SendMsg(
      `Community.SetRecommendationBotReviewStatus#1`,
      a(Pe, t, n),
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
      a(Z, t, n),
      Ie,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateCommentReportState = t;
})((Le ||= {}));
export {
  b as a,
  K as c,
  E as d,
  O as f,
  h as i,
  W as l,
  D as n,
  V as o,
  $ as p,
  g as r,
  G as s,
  H as t,
  U as u,
};
