/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  _t as i,
  bt as a,
  ct as o,
  ft as s,
  gt as c,
  ut as l,
  vt as u,
  wt as d,
  xt as f,
  yt as p,
} from "./chunk~de7f2df91c.js";
var m = n(d(), 1),
  h = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appids || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: p.readInt32,
              pbr: p.readPackedInt32,
              bw: e.writeRepeatedInt32,
            },
            language: { n: 2, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetApps_Request`;
    }
  },
  g = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: o, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  _ = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: p.readInt32, bw: e.writeInt32 },
            language: { n: 2, br: p.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Request`;
    }
  },
  v = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: p.readInt32, bw: e.writeInt32 },
            token_lists: { n: 2, c: b, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response`;
    }
  },
  y = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: p.readString, bw: e.writeString },
            value: { n: 2, br: p.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_Token`;
    }
  },
  b = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: p.readString, bw: e.writeString },
            tokens: { n: 2, c: y, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAppRichPresenceLocalization_Response_TokenList`;
    }
  },
  ee = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: p.readEnum, bw: e.writeEnum },
            gidfeature: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            commentthreadid: {
              n: 5,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            start: { n: 6, br: p.readInt32, bw: e.writeInt32 },
            count: { n: 7, br: p.readInt32, bw: e.writeInt32 },
            upvoters: { n: 8, br: p.readInt32, bw: e.writeInt32 },
            include_deleted: { n: 9, br: p.readBool, bw: e.writeBool },
            gidcomment: {
              n: 10,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            time_oldest: { n: 11, br: p.readUint32, bw: e.writeUint32 },
            oldest_first: { n: 12, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Request`;
    }
  },
  x = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gidcomment || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gidcomment: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            timestamp: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            text: { n: 4, br: p.readString, bw: e.writeString },
            upvotes: { n: 5, br: p.readInt32, bw: e.writeInt32 },
            hidden: { n: 6, br: p.readBool, bw: e.writeBool },
            hidden_by_user: { n: 7, br: p.readBool, bw: e.writeBool },
            deleted: { n: 8, br: p.readBool, bw: e.writeBool },
            ipaddress: { n: 9, c: s },
            total_hidden: { n: 10, br: p.readInt32, bw: e.writeInt32 },
            upvoted_by_user: { n: 11, br: p.readBool, bw: e.writeBool },
            reactions: { n: 12, c: S, r: !0, q: !0 },
            gidparentcomment: {
              n: 13,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            delete_reason: { n: 14, br: p.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_Comment`;
    }
  },
  S = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.reactionid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            reactionid: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            count: { n: 2, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_Comment_Reaction`;
    }
  },
  C = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.comments || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [1, 2, 9], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            comments: { n: 1, c: x, r: !0, q: !0 },
            deleted_comments: { n: 2, c: x, r: !0, q: !0 },
            steamid: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            commentthreadid: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            start: { n: 5, br: p.readInt32, bw: e.writeInt32 },
            count: { n: 6, br: p.readInt32, bw: e.writeInt32 },
            total_count: { n: 7, br: p.readInt32, bw: e.writeInt32 },
            upvotes: { n: 8, br: p.readInt32, bw: e.writeInt32 },
            upvoters: {
              n: 9,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            user_subscribed: { n: 10, br: p.readBool, bw: e.writeBool },
            user_upvoted: { n: 11, br: p.readBool, bw: e.writeBool },
            answer_commentid: {
              n: 12,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            answer_actor: { n: 13, br: p.readUint32, bw: e.writeUint32 },
            answer_actor_rank: { n: 14, br: p.readInt32, bw: e.writeInt32 },
            can_post: { n: 15, br: p.readBool, bw: e.writeBool },
            comment_thread_type: { n: 16, br: p.readUint32, bw: e.writeUint32 },
            gidfeature: {
              n: 17,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 18,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThread_Response`;
    }
  },
  te = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: p.readEnum, bw: e.writeEnum },
            gidfeature: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_id: {
              n: 6,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetComment_Request`;
    }
  },
  ne = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.comment || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            comment: { n: 1, c: x },
            comment_thread_type: { n: 2, br: p.readEnum, bw: e.writeEnum },
            gidfeature: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetComment_Response`;
    }
  },
  re = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_id: {
              n: 2,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidcomment: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            reason: { n: 4, br: p.readEnum, bw: e.writeEnum },
            note: { n: 5, br: p.readString, bw: e.writeString },
            sanctions: { n: 6, c: w, r: !0, q: !0 },
            skip_lock: { n: 7, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request`;
    }
  },
  w = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sanction || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sanction: { n: 1, br: p.readEnum, bw: e.writeEnum },
            days: { n: 2, br: p.readInt32, bw: e.writeInt32 },
            escalate_to: { n: 3, br: p.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SanctionComment_Request_Sanction`;
    }
  },
  ie = class e extends m.Message {
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
  ae = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: p.readEnum, bw: e.writeEnum },
            gidfeature: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            text: { n: 6, br: p.readString, bw: e.writeString },
            gidparentcomment: {
              n: 7,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            suppress_notifications: { n: 8, br: p.readBool, bw: e.writeBool },
            is_report: { n: 9, br: p.readBool, bw: e.writeBool },
            start_hidden: { n: 10, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Request`;
    }
  },
  oe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gidcomment || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gidcomment: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            commentthreadid: {
              n: 2,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            count: { n: 3, br: p.readInt32, bw: e.writeInt32 },
            upvotes: { n: 4, br: p.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PostCommentToThread_Response`;
    }
  },
  se = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: p.readEnum, bw: e.writeEnum },
            gidfeature: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            undelete: { n: 6, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_DeleteCommentFromThread_Request`;
    }
  },
  ce = class e extends m.Message {
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
  le = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.commentthreadtype || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            commentthreadtype: { n: 1, br: p.readString, bw: e.writeString },
            steamid: { n: 2, br: p.readUint64String, bw: e.writeUint64String },
            gidfeature: {
              n: 3,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            rate_up: { n: 6, br: p.readBool, bw: e.writeBool },
            suppress_notifications: { n: 7, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Request`;
    }
  },
  ue = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gidcomment || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gidcomment: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            commentthreadid: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            count: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            upvotes: { n: 4, br: p.readUint32, bw: e.writeUint32 },
            has_upvoted: { n: 5, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateCommentThread_Response`;
    }
  },
  de = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.commentthreadtype || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            commentthreadtype: { n: 1, br: p.readString, bw: e.writeString },
            steamid: { n: 2, br: p.readUint64String, bw: e.writeUint64String },
            gidfeature: {
              n: 3,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            max_results: { n: 6, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Request`;
    }
  },
  T = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.commentthreadid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            commentthreadid: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidcomment: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            upvotes: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            has_upvoted: { n: 4, br: p.readBool, bw: e.writeBool },
            upvoter_accountids: {
              n: 5,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetCommentThreadRatings_Response`;
    }
  },
  E = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: p.readUint64String, bw: e.writeUint64String },
            steamids_verifymembership: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readUint64String,
              pbr: p.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Request`;
    }
  },
  D = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamids_nonmembers || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamids_nonmembers: {
              n: 1,
              r: !0,
              q: !0,
              br: p.readUint64String,
              pbr: p.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_VerifyClanMembership_Response`;
    }
  },
  O = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.announcementid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            announcementid: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            vote_up: { n: 2, br: p.readBool, bw: e.writeBool },
            clan_accountid: { n: 3, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_RateClanAnnouncement_Request`;
    }
  },
  k = class e extends m.Message {
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
  A = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.announcementid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            announcementid: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Request`;
    }
  },
  j = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.voted_up || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            voted_up: { n: 1, br: p.readBool, bw: e.writeBool },
            voted_down: { n: 2, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanAnnouncementVoteForUser_Response`;
    }
  },
  M = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Request`;
    }
  },
  N = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.is_ogg || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_ogg: { n: 1, br: p.readBool, bw: e.writeBool },
            name: { n: 2, br: p.readString, bw: e.writeString },
            profile_url: { n: 3, br: p.readString, bw: e.writeString },
            appid: { n: 4, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanMetadata_Response`;
    }
  },
  P = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.loc_group_id || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            loc_group_id: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            image_hash: { n: 2, br: p.readString, bw: e.writeString },
            thumbnail_hash: { n: 3, br: p.readString, bw: e.writeString },
            file_type: { n: 4, br: p.readEnum, bw: e.writeEnum },
            group: { n: 5, br: p.readEnum, bw: e.writeEnum },
            width: { n: 6, br: p.readUint32, bw: e.writeUint32 },
            height: { n: 7, br: p.readUint32, bw: e.writeUint32 },
            extensions: { n: 8, br: p.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClanLocGroupImage`;
    }
  },
  F = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: p.readUint64String, bw: e.writeUint64String },
            group: { n: 2, br: p.readEnum, bw: e.writeEnum },
            language: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            loc_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: p.readUint64String,
              pbr: p.readPackedUint64String,
              bw: e.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Request`;
    }
  },
  I = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  L = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            filter_user_uploaded_only: {
              n: 2,
              br: p.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Request`;
    }
  },
  R = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.avatars || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  z = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.avatar_sha1 || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            avatar_sha1: { n: 1, br: p.readString, bw: e.writeString },
            user_uploaded: { n: 2, br: p.readBool, bw: e.writeBool },
            timestamp: { n: 3, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response_AvatarData`;
    }
  },
  B = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.priority || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            priority: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            appid: {
              n: 2,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAppPriority`;
    }
  },
  V = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.count || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [5, 6, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            count: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            offset: { n: 2, br: p.readUint32, bw: e.writeUint32 },
            rtime32_start_time: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            rtime32_end_time: { n: 4, br: p.readUint32, bw: e.writeUint32 },
            language_preference: {
              n: 5,
              r: !0,
              q: !0,
              br: p.readUint32,
              pbr: p.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            filter_event_type: {
              n: 6,
              r: !0,
              q: !0,
              br: p.readEnum,
              pbr: p.readPackedEnum,
              bw: e.writeRepeatedEnum,
            },
            filter_to_appid: { n: 7, br: p.readBool, bw: e.writeBool },
            app_list: { n: 8, c: B, r: !0, q: !0 },
            count_after: { n: 9, d: 0, br: p.readUint32, bw: e.writeUint32 },
            count_before: { n: 10, d: 0, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Request`;
    }
  },
  H = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: l, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  fe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.include_steam_blog || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            include_steam_blog: { n: 1, br: p.readBool, bw: e.writeBool },
            filter_to_played_within_days: {
              n: 2,
              br: p.readUint32,
              bw: e.writeUint32,
            },
            include_only_game_updates: {
              n: 3,
              br: p.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetBestEventsForUser_Request`;
    }
  },
  U = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clanid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clanid: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            event_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            appid: { n: 4, br: p.readUint32, bw: e.writeUint32 },
            possible_takeover: { n: 5, br: p.readBool, bw: e.writeBool },
            rtime32_last_modified: {
              n: 6,
              d: 0,
              br: p.readUint32,
              bw: e.writeUint32,
            },
            user_app_priority: { n: 7, br: p.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventResult`;
    }
  },
  pe = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.results || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  me = class e extends m.Message {
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
  he = class e extends m.Message {
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
  W = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            user_app_priority: { n: 2, br: p.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsAppPriority`;
    }
  },
  ge = class e extends m.Message {
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
  _e = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.priorities || c(e.M()),
        m.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  ve = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: p.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Request`;
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
      return `CCommunity_ClearSinglePartnerEventsAppPriority_Response`;
    }
  },
  be = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: p.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventsShowMoreForApp_Request`;
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
      return `CCommunity_PartnerEventsShowMoreForApp_Response`;
    }
  },
  Se = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: p.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        e.prototype.markings || c(e.M()),
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  K = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clanid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clanid: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            event_gid: {
              n: 2,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            display_location: { n: 3, br: p.readEnum, bw: e.writeEnum },
            mark_shown: { n: 4, br: p.readBool, bw: e.writeBool },
            mark_read: { n: 5, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  Te = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.event_gids || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            event_gids: {
              n: 1,
              r: !0,
              q: !0,
              br: p.readFixed64String,
              pbr: p.readPackedFixed64String,
              bw: e.writeRepeatedFixed64String,
            },
            include_read_events_only: { n: 2, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Request`;
    }
  },
  Ee = class e extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.events || c(e.M()),
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  q = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.event_gid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            event_gid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            last_shown_time: { n: 2, br: p.readUint32, bw: e.writeUint32 },
            last_read_time: { n: 3, br: p.readUint32, bw: e.writeUint32 },
            clan_account_id: { n: 4, br: p.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent`;
    }
  },
  De = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gidfeature || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gidfeature: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidfeature2: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidcomment: {
              n: 3,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            steamid: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: p.readString, bw: e.writeString },
            hide: { n: 6, br: p.readBool, bw: e.writeBool },
            report_reason: { n: 7, br: p.readEnum, bw: e.writeEnum },
            report_text: { n: 8, br: p.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  ke = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            itemid: { n: 2, br: p.readUint64String, bw: e.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Request`;
    }
  },
  Ae = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.crowdin_project_id || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            crowdin_project_id: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanEventCrowdInMetadata_Response`;
    }
  },
  je = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Request`;
    }
  },
  Me = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.crowdin_project_id || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            crowdin_project_id: {
              n: 1,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            crowdin_directory_id: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            push_by_default: { n: 3, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanCrowdInMetadata_Response`;
    }
  },
  J = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            itemid: { n: 2, br: p.readUint64String, bw: e.writeUint64String },
            language: { n: 3, br: p.readInt32, bw: e.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        e.prototype.review_labels || c(e.M()),
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new m.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
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
  Y = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: p.readUint32, bw: e.writeUint32 },
            recommendationid: {
              n: 2,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            is_bot_review: { n: 3, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  X = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.explicit || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            explicit: { n: 1, br: p.readBool, bw: e.writeBool },
            adult: { n: 2, br: p.readBool, bw: e.writeBool },
            toxic: { n: 3, br: p.readBool, bw: e.writeBool },
            spam: { n: 4, br: p.readBool, bw: e.writeBool },
            malicious: { n: 5, br: p.readBool, bw: e.writeBool },
            commercial: { n: 6, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CommentClassification`;
    }
  },
  Z = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.resolve || c(t.M()),
        m.Message.initialize(this, e, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            resolve: { n: 1, br: p.readBool, bw: e.writeBool },
            reportid: { n: 2, br: p.readUint64String, bw: e.writeUint64String },
            report_action: { n: 3, br: p.readEnum, bw: e.writeEnum },
            gidcomment: {
              n: 4,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: p.readString, bw: e.writeString },
            steamid: {
              n: 6,
              br: p.readFixed64String,
              bw: e.writeFixed64String,
            },
            gidfeature: {
              n: 7,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            gidfeature2: {
              n: 8,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            classification: { n: 9, c: X },
            reason: { n: 10, br: p.readUint32, bw: e.writeUint32 },
            comment_thread_id: {
              n: 11,
              br: p.readUint64String,
              bw: e.writeUint64String,
            },
            sanctions: { n: 12, c: Q, r: !0, q: !0 },
            note: { n: 13, br: p.readString, bw: e.writeString },
            skip_lock: { n: 14, br: p.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommentModeration_UpdateCommentReportState_Request`;
    }
  },
  Q = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sanction || c(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sanction: { n: 1, br: p.readEnum, bw: e.writeEnum },
            days: { n: 2, br: p.readInt32, bw: e.writeInt32 },
            escalate_to: { n: 3, br: p.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= a(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return u(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      f(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
  function n(e, n, r) {
    return e.SendMsg(`Community.GetApps#1`, t(h, n, r), g, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetApps = n;
  function r(e, n, r) {
    return e.SendMsg(
      `Community.GetAppRichPresenceLocalization#1`,
      t(_, n, r),
      v,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetAppRichPresenceLocalization = r;
  function i(e, n, r) {
    return e.SendMsg(`Community.GetCommentThread#1`, t(ee, n, r), C, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommentThread = i;
  function a(e, n, r) {
    return e.SendMsg(`Community.GetComment#1`, t(te, n, r), ne, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetComment = a;
  function o(e, n, r) {
    return e.SendMsg(`Community.SanctionComment#1`, t(re, n, r), ie, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SanctionComment = o;
  function s(e, n, r) {
    return e.SendMsg(`Community.PostCommentToThread#1`, t(ae, n, r), oe, {
      ePrivilege: 3,
    });
  }
  e.PostCommentToThread = s;
  function c(e, n, r) {
    return e.SendMsg(`Community.DeleteCommentFromThread#1`, t(se, n, r), ce, {
      ePrivilege: 1,
    });
  }
  e.DeleteCommentFromThread = c;
  function l(e, n, r) {
    return e.SendMsg(`Community.RateCommentThread#1`, t(le, n, r), ue, {
      ePrivilege: 3,
    });
  }
  e.RateCommentThread = l;
  function u(e, n, r) {
    return e.SendMsg(`Community.GetCommentThreadRatings#1`, t(de, n, r), T, {
      ePrivilege: 2,
    });
  }
  e.GetCommentThreadRatings = u;
  function d(e, n, r) {
    return e.SendMsg(`Community.VerifyClanMembership#1`, t(E, n, r), D, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.VerifyClanMembership = d;
  function f(e, n, r) {
    return e.SendMsg(`Community.RateClanAnnouncement#1`, t(O, n, r), k, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.RateClanAnnouncement = f;
  function p(e, n, r) {
    return e.SendMsg(
      `Community.GetClanAnnouncementVoteForUser#1`,
      t(A, n, r),
      j,
      { ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetClanAnnouncementVoteForUser = p;
  function m(e, n, r) {
    return e.SendMsg(`Community.GetClanMetadata#1`, t(M, n, r), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClanMetadata = m;
  function y(e, n, r) {
    return e.SendMsg(`Community.GetClanLocGroupImages#1`, t(F, n, r), I, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetClanLocGroupImages = y;
  function b(e, n, r) {
    return e.SendMsg(`Community.GetAvatarHistory#1`, t(L, n, r), R, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAvatarHistory = b;
  function x(e, n, r) {
    return e.SendMsg(
      `Community.GetClanEventCrowdInMetadata#1`,
      t(ke, n, r),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanEventCrowdInMetadata = x;
  function S(e, n, r) {
    return e.SendMsg(`Community.GetClanCrowdInMetadata#1`, t(je, n, r), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClanCrowdInMetadata = S;
  function w(e, n, r) {
    return e.SendMsg(
      `Community.FetchTranslationFromCrowdIn#1`,
      t(J, n, r),
      Ne,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchTranslationFromCrowdIn = w;
  function P(e, n, r) {
    return e.SendMsg(`Community.HideAndReportComment#1`, t(De, n, r), Oe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.HideAndReportComment = P;
  function z(e, n, r) {
    return e.SendMsg(`Community.GetUserPartnerEventNews#1`, t(V, n, r), H, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetUserPartnerEventNews = z;
  function B(e, n, r) {
    return e.SendMsg(`Community.GetBestEventsForUser#1`, t(fe, n, r), pe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBestEventsForUser = B;
  function U(e, n, r) {
    return e.SendMsg(`Community.MarkPartnerEventsForUser#1`, t(G, n, r), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.MarkPartnerEventsForUser = U;
  function W(e, n, r) {
    return e.SendMsg(
      `Community.GetUserPartnerEventViewStatus#1`,
      t(Te, n, r),
      Ee,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventViewStatus = W;
  function K(e, n, r) {
    return e.SendMsg(
      `Community.PartnerEventsShowMoreForApp#1`,
      t(be, n, r),
      xe,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowMoreForApp = K;
  function q(e, n, r) {
    return e.SendMsg(
      `Community.PartnerEventsShowLessForApp#1`,
      t(Se, n, r),
      Ce,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowLessForApp = q;
  function Y(e, n, r) {
    return e.SendMsg(
      `Community.ClearUserPartnerEventsAppPriorities#1`,
      t(me, n, r),
      he,
      { ePrivilege: 1 },
    );
  }
  e.ClearUserPartnerEventsAppPriorities = Y;
  function X(e, n, r) {
    return e.SendMsg(
      `Community.GetUserPartnerEventsAppPriorities#1`,
      t(ge, n, r),
      _e,
      { ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventsAppPriorities = X;
  function Z(e, n, r) {
    return e.SendMsg(
      `Community.ClearSinglePartnerEventsAppPriority#1`,
      t(ve, n, r),
      ye,
      { ePrivilege: 1 },
    );
  }
  e.ClearSinglePartnerEventsAppPriority = Z;
  function Q(e, n, r) {
    return e.SendMsg(
      `Community.SetRecommendationBotReviewStatus#1`,
      t(Pe, n, r),
      Fe,
      { ePrivilege: 1 },
    );
  }
  e.SetRecommendationBotReviewStatus = Q;
})(($ ||= {}));
var Le;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `CommentModeration.UpdateCommentReportState#1`,
      t(Z, n, r),
      Ie,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateCommentReportState = n;
})((Le ||= {}));
export { $ as a, K as i, h as n, G as r, _ as t };
