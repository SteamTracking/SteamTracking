/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  It as t,
  Jt as n,
  Kt as r,
  Lt as i,
  Ut as a,
  Wt as o,
  Xt as s,
  Yt as c,
  Zt as l,
  bt as u,
  qt as d,
  sn as f,
  zt as p,
} from "./chunk~de7f2df91c.js";
var m = f(l(), 1),
  h = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appids || a(t.M()),
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
              br: r.readInt32,
              pbr: r.readPackedInt32,
              bw: s.writeRepeatedInt32,
            },
            language: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetApps_Request`;
    }
  },
  g = class r extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.apps || a(r.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: { apps: { n: 1, c: t, r: !0, q: !0 } },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= d(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return c(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new m.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return o(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      n(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetApps_Response`;
    }
  },
  _ = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            language: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readInt32, bw: s.writeInt32 },
            token_lists: { n: 2, c: b, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.name || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: r.readString, bw: s.writeString },
            value: { n: 2, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: r.readString, bw: s.writeString },
            tokens: { n: 2, c: y, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            gidfeature: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            commentthreadid: {
              n: 5,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            start: { n: 6, br: r.readInt32, bw: s.writeInt32 },
            count: { n: 7, br: r.readInt32, bw: s.writeInt32 },
            upvoters: { n: 8, br: r.readInt32, bw: s.writeInt32 },
            include_deleted: { n: 9, br: r.readBool, bw: s.writeBool },
            gidcomment: {
              n: 10,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            time_oldest: { n: 11, br: r.readUint32, bw: s.writeUint32 },
            oldest_first: { n: 12, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.gidcomment || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            timestamp: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            text: { n: 4, br: r.readString, bw: s.writeString },
            upvotes: { n: 5, br: r.readInt32, bw: s.writeInt32 },
            hidden: { n: 6, br: r.readBool, bw: s.writeBool },
            hidden_by_user: { n: 7, br: r.readBool, bw: s.writeBool },
            deleted: { n: 8, br: r.readBool, bw: s.writeBool },
            ipaddress: { n: 9, c: p },
            total_hidden: { n: 10, br: r.readInt32, bw: s.writeInt32 },
            upvoted_by_user: { n: 11, br: r.readBool, bw: s.writeBool },
            reactions: { n: 12, c: S, r: !0, q: !0 },
            gidparentcomment: {
              n: 13,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            delete_reason: { n: 14, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.reactionid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            reactionid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            count: { n: 2, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.comments || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            commentthreadid: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            start: { n: 5, br: r.readInt32, bw: s.writeInt32 },
            count: { n: 6, br: r.readInt32, bw: s.writeInt32 },
            total_count: { n: 7, br: r.readInt32, bw: s.writeInt32 },
            upvotes: { n: 8, br: r.readInt32, bw: s.writeInt32 },
            upvoters: {
              n: 9,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            user_subscribed: { n: 10, br: r.readBool, bw: s.writeBool },
            user_upvoted: { n: 11, br: r.readBool, bw: s.writeBool },
            answer_commentid: {
              n: 12,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            answer_actor: { n: 13, br: r.readUint32, bw: s.writeUint32 },
            answer_actor_rank: { n: 14, br: r.readInt32, bw: s.writeInt32 },
            can_post: { n: 15, br: r.readBool, bw: s.writeBool },
            comment_thread_type: { n: 16, br: r.readUint32, bw: s.writeUint32 },
            gidfeature: {
              n: 17,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 18,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            gidfeature: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_id: {
              n: 6,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.comment || a(t.M()),
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
            comment_thread_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            gidfeature: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_id: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidcomment: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            reason: { n: 4, br: r.readEnum, bw: s.writeEnum },
            note: { n: 5, br: r.readString, bw: s.writeString },
            sanctions: { n: 6, c: w, r: !0, q: !0 },
            skip_lock: { n: 7, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.sanction || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sanction: { n: 1, br: r.readEnum, bw: s.writeEnum },
            days: { n: 2, br: r.readInt32, bw: s.writeInt32 },
            escalate_to: { n: 3, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            gidfeature: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            text: { n: 6, br: r.readString, bw: s.writeString },
            gidparentcomment: {
              n: 7,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            suppress_notifications: { n: 8, br: r.readBool, bw: s.writeBool },
            is_report: { n: 9, br: r.readBool, bw: s.writeBool },
            start_hidden: { n: 10, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.gidcomment || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            commentthreadid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            count: { n: 3, br: r.readInt32, bw: s.writeInt32 },
            upvotes: { n: 4, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            comment_thread_type: { n: 2, br: r.readEnum, bw: s.writeEnum },
            gidfeature: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidcomment: {
              n: 5,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            undelete: { n: 6, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.commentthreadtype || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            commentthreadtype: { n: 1, br: r.readString, bw: s.writeString },
            steamid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            gidfeature: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            rate_up: { n: 6, br: r.readBool, bw: s.writeBool },
            suppress_notifications: { n: 7, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.gidcomment || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            commentthreadid: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            count: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            upvotes: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            has_upvoted: { n: 5, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.commentthreadtype || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            commentthreadtype: { n: 1, br: r.readString, bw: s.writeString },
            steamid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            gidfeature: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidfeature2: {
              n: 4,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidcomment: {
              n: 5,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            max_results: { n: 6, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.commentthreadid || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidcomment: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            upvotes: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            has_upvoted: { n: 4, br: r.readBool, bw: s.writeBool },
            upvoter_accountids: {
              n: 5,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: s.writeUint64String },
            steamids_verifymembership: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: s.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamids_nonmembers || a(t.M()),
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
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: s.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.announcementid || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            vote_up: { n: 2, br: r.readBool, bw: s.writeBool },
            clan_accountid: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.announcementid || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.voted_up || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            voted_up: { n: 1, br: r.readBool, bw: s.writeBool },
            voted_down: { n: 2, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.is_ogg || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_ogg: { n: 1, br: r.readBool, bw: s.writeBool },
            name: { n: 2, br: r.readString, bw: s.writeString },
            profile_url: { n: 3, br: r.readString, bw: s.writeString },
            appid: { n: 4, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.loc_group_id || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            image_hash: { n: 2, br: r.readString, bw: s.writeString },
            thumbnail_hash: { n: 3, br: r.readString, bw: s.writeString },
            file_type: { n: 4, br: r.readEnum, bw: s.writeEnum },
            group: { n: 5, br: r.readEnum, bw: s.writeEnum },
            width: { n: 6, br: r.readUint32, bw: s.writeUint32 },
            height: { n: 7, br: r.readUint32, bw: s.writeUint32 },
            extensions: { n: 8, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: s.writeUint64String },
            group: { n: 2, br: r.readEnum, bw: s.writeEnum },
            language: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            loc_group_ids: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: s.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Request`;
    }
  },
  I = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.images || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { images: { n: 1, c: P, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetClanLocGroupImages_Response`;
    }
  },
  L = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            filter_user_uploaded_only: {
              n: 2,
              br: r.readBool,
              bw: s.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Request`;
    }
  },
  R = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.avatars || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { avatars: { n: 1, c: z, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetAvatarHistory_Response`;
    }
  },
  z = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.avatar_sha1 || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            avatar_sha1: { n: 1, br: r.readString, bw: s.writeString },
            user_uploaded: { n: 2, br: r.readBool, bw: s.writeBool },
            timestamp: { n: 3, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.priority || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            priority: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            appid: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.count || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [5, 6, 8], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            count: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            offset: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            rtime32_start_time: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            rtime32_end_time: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            language_preference: {
              n: 5,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: s.writeRepeatedUint32,
            },
            filter_event_type: {
              n: 6,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: s.writeRepeatedEnum,
            },
            filter_to_appid: { n: 7, br: r.readBool, bw: s.writeBool },
            app_list: { n: 8, c: B, r: !0, q: !0 },
            count_after: { n: 9, d: 0, br: r.readUint32, bw: s.writeUint32 },
            count_before: { n: 10, d: 0, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Request`;
    }
  },
  H = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.results || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { results: { n: 1, c: i, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventNews_Response`;
    }
  },
  fe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.include_steam_blog || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            include_steam_blog: { n: 1, br: r.readBool, bw: s.writeBool },
            filter_to_played_within_days: {
              n: 2,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            include_only_game_updates: {
              n: 3,
              br: r.readBool,
              bw: s.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.clanid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clanid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            event_gid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            announcement_gid: {
              n: 3,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            appid: { n: 4, br: r.readUint32, bw: s.writeUint32 },
            possible_takeover: { n: 5, br: r.readBool, bw: s.writeBool },
            rtime32_last_modified: {
              n: 6,
              d: 0,
              br: r.readUint32,
              bw: s.writeUint32,
            },
            user_app_priority: { n: 7, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_PartnerEventResult`;
    }
  },
  pe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.results || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { results: { n: 1, c: U, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            user_app_priority: { n: 2, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  _e = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.priorities || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { priorities: { n: 1, c: W, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventsAppPriorities_Response`;
    }
  },
  ve = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: s.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  G = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.markings || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { markings: { n: 1, c: K, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_MarkPartnerEventsForUser_Request`;
    }
  },
  K = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.clanid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            clanid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            event_gid: {
              n: 2,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            display_location: { n: 3, br: r.readEnum, bw: s.writeEnum },
            mark_shown: { n: 4, br: r.readBool, bw: s.writeBool },
            mark_read: { n: 5, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.event_gids || a(t.M()),
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
              br: r.readFixed64String,
              pbr: r.readPackedFixed64String,
              bw: s.writeRepeatedFixed64String,
            },
            include_read_events_only: { n: 2, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Request`;
    }
  },
  Ee = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.events || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { events: { n: 1, c: q, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_GetUserPartnerEventViewStatus_Response`;
    }
  },
  q = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.event_gid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            last_shown_time: { n: 2, br: r.readUint32, bw: s.writeUint32 },
            last_read_time: { n: 3, br: r.readUint32, bw: s.writeUint32 },
            clan_account_id: { n: 4, br: r.readUint32, bw: s.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.gidfeature || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidfeature2: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidcomment: {
              n: 3,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            steamid: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: r.readString, bw: s.writeString },
            hide: { n: 6, br: r.readBool, bw: s.writeBool },
            report_reason: { n: 7, br: r.readEnum, bw: s.writeEnum },
            report_text: { n: 8, br: r.readString, bw: s.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            itemid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.crowdin_project_id || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            crowdin_file_id: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.crowdin_project_id || a(t.M()),
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
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            crowdin_directory_id: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            push_by_default: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || a(t.M()),
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
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            itemid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            language: { n: 3, br: r.readInt32, bw: s.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  Pe = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.review_labels || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { review_labels: { n: 1, c: Y, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CCommunity_SetRecommendationBotReviewStatus_Request`;
    }
  },
  Y = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: s.writeUint32 },
            recommendationid: {
              n: 2,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            is_bot_review: { n: 3, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.explicit || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            explicit: { n: 1, br: r.readBool, bw: s.writeBool },
            adult: { n: 2, br: r.readBool, bw: s.writeBool },
            toxic: { n: 3, br: r.readBool, bw: s.writeBool },
            spam: { n: 4, br: r.readBool, bw: s.writeBool },
            malicious: { n: 5, br: r.readBool, bw: s.writeBool },
            commercial: { n: 6, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.resolve || a(t.M()),
        m.Message.initialize(this, e, 0, -1, [12], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            resolve: { n: 1, br: r.readBool, bw: s.writeBool },
            reportid: { n: 2, br: r.readUint64String, bw: s.writeUint64String },
            report_action: { n: 3, br: r.readEnum, bw: s.writeEnum },
            gidcomment: {
              n: 4,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            commentthreadtype: { n: 5, br: r.readString, bw: s.writeString },
            steamid: {
              n: 6,
              br: r.readFixed64String,
              bw: s.writeFixed64String,
            },
            gidfeature: {
              n: 7,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            gidfeature2: {
              n: 8,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            classification: { n: 9, c: X },
            reason: { n: 10, br: r.readUint32, bw: s.writeUint32 },
            comment_thread_id: {
              n: 11,
              br: r.readUint64String,
              bw: s.writeUint64String,
            },
            sanctions: { n: 12, c: Q, r: !0, q: !0 },
            note: { n: 13, br: r.readString, bw: s.writeString },
            skip_lock: { n: 14, br: r.readBool, bw: s.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.sanction || a(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sanction: { n: 1, br: r.readEnum, bw: s.writeEnum },
            days: { n: 2, br: r.readInt32, bw: s.writeInt32 },
            escalate_to: { n: 3, br: r.readEnum, bw: s.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= d(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return c(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new m.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return o(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new m.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  function t(e, t, n) {
    return e.SendMsg(`Community.GetApps#1`, u(h, t, n), g, {
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
      u(_, t, n),
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
    return e.SendMsg(`Community.GetCommentThread#1`, u(ee, t, n), C, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetCommentThread = r;
  function i(e, t, n) {
    return e.SendMsg(`Community.GetComment#1`, u(te, t, n), ne, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetComment = i;
  function a(e, t, n) {
    return e.SendMsg(`Community.SanctionComment#1`, u(re, t, n), ie, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SanctionComment = a;
  function o(e, t, n) {
    return e.SendMsg(`Community.PostCommentToThread#1`, u(ae, t, n), oe, {
      ePrivilege: 3,
    });
  }
  e.PostCommentToThread = o;
  function s(e, t, n) {
    return e.SendMsg(`Community.DeleteCommentFromThread#1`, u(se, t, n), ce, {
      ePrivilege: 1,
    });
  }
  e.DeleteCommentFromThread = s;
  function c(e, t, n) {
    return e.SendMsg(`Community.RateCommentThread#1`, u(le, t, n), ue, {
      ePrivilege: 3,
    });
  }
  e.RateCommentThread = c;
  function l(e, t, n) {
    return e.SendMsg(`Community.GetCommentThreadRatings#1`, u(de, t, n), T, {
      ePrivilege: 2,
    });
  }
  e.GetCommentThreadRatings = l;
  function d(e, t, n) {
    return e.SendMsg(`Community.VerifyClanMembership#1`, u(E, t, n), D, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.VerifyClanMembership = d;
  function f(e, t, n) {
    return e.SendMsg(`Community.RateClanAnnouncement#1`, u(O, t, n), k, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.RateClanAnnouncement = f;
  function p(e, t, n) {
    return e.SendMsg(
      `Community.GetClanAnnouncementVoteForUser#1`,
      u(A, t, n),
      j,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanAnnouncementVoteForUser = p;
  function m(e, t, n) {
    return e.SendMsg(`Community.GetClanMetadata#1`, u(M, t, n), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.GetClanMetadata = m;
  function y(e, t, n) {
    return e.SendMsg(`Community.GetClanLocGroupImages#1`, u(F, t, n), I, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetClanLocGroupImages = y;
  function b(e, t, n) {
    return e.SendMsg(`Community.GetAvatarHistory#1`, u(L, t, n), R, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAvatarHistory = b;
  function x(e, t, n) {
    return e.SendMsg(
      `Community.GetClanEventCrowdInMetadata#1`,
      u(ke, t, n),
      Ae,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetClanEventCrowdInMetadata = x;
  function S(e, t, n) {
    return e.SendMsg(`Community.GetClanCrowdInMetadata#1`, u(je, t, n), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetClanCrowdInMetadata = S;
  function w(e, t, n) {
    return e.SendMsg(
      `Community.FetchTranslationFromCrowdIn#1`,
      u(J, t, n),
      Ne,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.FetchTranslationFromCrowdIn = w;
  function P(e, t, n) {
    return e.SendMsg(`Community.HideAndReportComment#1`, u(De, t, n), Oe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.HideAndReportComment = P;
  function z(e, t, n) {
    return e.SendMsg(`Community.GetUserPartnerEventNews#1`, u(V, t, n), H, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetUserPartnerEventNews = z;
  function B(e, t, n) {
    return e.SendMsg(`Community.GetBestEventsForUser#1`, u(fe, t, n), pe, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetBestEventsForUser = B;
  function U(e, t, n) {
    return e.SendMsg(`Community.MarkPartnerEventsForUser#1`, u(G, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.MarkPartnerEventsForUser = U;
  function W(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventViewStatus#1`,
      u(Te, t, n),
      Ee,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventViewStatus = W;
  function K(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowMoreForApp#1`,
      u(be, t, n),
      xe,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowMoreForApp = K;
  function q(e, t, n) {
    return e.SendMsg(
      `Community.PartnerEventsShowLessForApp#1`,
      u(Se, t, n),
      Ce,
      { ePrivilege: 1 },
    );
  }
  e.PartnerEventsShowLessForApp = q;
  function Y(e, t, n) {
    return e.SendMsg(
      `Community.ClearUserPartnerEventsAppPriorities#1`,
      u(me, t, n),
      he,
      { ePrivilege: 1 },
    );
  }
  e.ClearUserPartnerEventsAppPriorities = Y;
  function X(e, t, n) {
    return e.SendMsg(
      `Community.GetUserPartnerEventsAppPriorities#1`,
      u(ge, t, n),
      _e,
      { ePrivilege: 1 },
    );
  }
  e.GetUserPartnerEventsAppPriorities = X;
  function Z(e, t, n) {
    return e.SendMsg(
      `Community.ClearSinglePartnerEventsAppPriority#1`,
      u(ve, t, n),
      ye,
      { ePrivilege: 1 },
    );
  }
  e.ClearSinglePartnerEventsAppPriority = Z;
  function Q(e, t, n) {
    return e.SendMsg(
      `Community.SetRecommendationBotReviewStatus#1`,
      u(Pe, t, n),
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
      u(Z, t, n),
      Ie,
      { ePrivilege: 1, rgBrowserAPISites: [`community`] },
    );
  }
  e.UpdateCommentReportState = t;
})((Le ||= {}));
export { $ as a, K as i, h as n, G as r, _ as t };
