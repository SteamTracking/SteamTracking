/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Vt as a,
  Wt as o,
  Xt as s,
  Yt as c,
  on as l,
  qt as u,
  yt as d,
} from "./mobx.esm.js";
var f = l(s(), 1),
  ee = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Request`;
    }
  },
  te = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.sessions || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sessions: { n: 1, c: p, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Response`;
    }
  },
  p = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.time_start || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            time_start: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            time_end: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            appid: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            device_type: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            disconnected: { n: 5, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession`;
    }
  },
  ne = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.min_last_played || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            min_last_played: { n: 1, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Request`;
    }
  },
  re = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.games || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { games: { n: 1, c: m, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Response`;
    }
  },
  m = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            last_playtime: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            playtime_2weeks: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            playtime_forever: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            first_playtime: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            playtime_windows_forever: {
              n: 6,
              br: e.readInt32,
              bw: c.writeInt32,
            },
            playtime_mac_forever: { n: 7, br: e.readInt32, bw: c.writeInt32 },
            playtime_linux_forever: { n: 8, br: e.readInt32, bw: c.writeInt32 },
            playtime_deck_forever: { n: 16, br: e.readInt32, bw: c.writeInt32 },
            first_windows_playtime: {
              n: 9,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            first_mac_playtime: { n: 10, br: e.readUint32, bw: c.writeUint32 },
            first_linux_playtime: {
              n: 11,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            first_deck_playtime: { n: 17, br: e.readUint32, bw: c.writeUint32 },
            last_windows_playtime: {
              n: 12,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            last_mac_playtime: { n: 13, br: e.readUint32, bw: c.writeUint32 },
            last_linux_playtime: { n: 14, br: e.readUint32, bw: c.writeUint32 },
            last_deck_playtime: { n: 18, br: e.readUint32, bw: c.writeUint32 },
            playtime_disconnected: {
              n: 15,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Response_Game`;
    }
  },
  ie = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamids || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamids: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readUint64String,
              pbr: e.readPackedUint64String,
              bw: c.writeRepeatedUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Request`;
    }
  },
  ae = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.accounts || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { accounts: { n: 1, c: oe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response`;
    }
  },
  oe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.public_data || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { public_data: { n: 1, c: h }, private_data: { n: 2, c: g } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails`;
    }
  },
  h = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              q: !0,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            visibility_state: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            privacy_state: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            profile_state: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            ban_expires_time: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            account_flags: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            sha_digest_avatar: { n: 9, br: e.readBytes, bw: c.writeBytes },
            persona_name: { n: 10, br: e.readString, bw: c.writeString },
            profile_url: { n: 11, br: e.readString, bw: c.writeString },
            content_country_restricted: {
              n: 12,
              br: e.readBool,
              bw: c.writeBool,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData`;
    }
  },
  g = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.persona_state || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            persona_state: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            persona_state_flags: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            time_created: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            game_id: {
              n: 4,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            game_server_steam_id: {
              n: 5,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            game_server_ip_address: {
              n: 6,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            game_server_port: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            game_extra_info: { n: 8, br: e.readString, bw: c.writeString },
            account_name: { n: 9, br: e.readString, bw: c.writeString },
            lobby_steam_id: {
              n: 10,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            rich_presence_kv: { n: 11, br: e.readString, bw: c.writeString },
            broadcast_session_id: {
              n: 12,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            watching_broadcast_accountid: {
              n: 13,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            watching_broadcast_appid: {
              n: 14,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            watching_broadcast_viewers: {
              n: 15,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            watching_broadcast_title: {
              n: 16,
              br: e.readString,
              bw: c.writeString,
            },
            last_logoff_time: { n: 17, br: e.readUint32, bw: c.writeUint32 },
            last_seen_online: { n: 18, br: e.readUint32, bw: c.writeUint32 },
            game_os_type: { n: 19, br: e.readInt32, bw: c.writeInt32 },
            game_device_type: { n: 20, br: e.readInt32, bw: c.writeInt32 },
            game_device_name: { n: 21, br: e.readString, bw: c.writeString },
            game_is_private: { n: 22, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData`;
    }
  },
  se = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMutualFriendsForIncomingInvites_Request`;
    }
  },
  _ = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            mutual_friend_account_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_IncomingInviteMutualFriendList`;
    }
  },
  ce = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.incoming_invite_mutual_friends_lists || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            incoming_invite_mutual_friends_lists: { n: 1, c: _, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMutualFriendsForIncomingInvites_Response`;
    }
  },
  le = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            include_appinfo: { n: 2, br: e.readBool, bw: c.writeBool },
            include_played_free_games: {
              n: 3,
              br: e.readBool,
              bw: c.writeBool,
            },
            appids_filter: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
            include_free_sub: { n: 5, br: e.readBool, bw: c.writeBool },
            skip_unvetted_apps: {
              n: 6,
              d: !0,
              br: e.readBool,
              bw: c.writeBool,
            },
            language: { n: 7, br: e.readString, bw: c.writeString },
            include_extended_appinfo: { n: 8, br: e.readBool, bw: c.writeBool },
            include_family_licenses: { n: 9, br: e.readBool, bw: c.writeBool },
            include_all_free_games: { n: 10, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Request`;
    }
  },
  ue = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.game_count || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            game_count: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            games: { n: 2, c: v, r: !0, q: !0 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Response`;
    }
  },
  v = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            name: { n: 2, br: e.readString, bw: c.writeString },
            playtime_2weeks: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            playtime_forever: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            img_icon_url: { n: 5, br: e.readString, bw: c.writeString },
            has_community_visible_stats: {
              n: 7,
              br: e.readBool,
              bw: c.writeBool,
            },
            playtime_windows_forever: {
              n: 8,
              br: e.readInt32,
              bw: c.writeInt32,
            },
            playtime_mac_forever: { n: 9, br: e.readInt32, bw: c.writeInt32 },
            playtime_linux_forever: {
              n: 10,
              br: e.readInt32,
              bw: c.writeInt32,
            },
            playtime_deck_forever: { n: 20, br: e.readInt32, bw: c.writeInt32 },
            rtime_last_played: { n: 11, br: e.readUint32, bw: c.writeUint32 },
            capsule_filename: { n: 12, br: e.readString, bw: c.writeString },
            sort_as: { n: 13, br: e.readString, bw: c.writeString },
            has_workshop: { n: 14, br: e.readBool, bw: c.writeBool },
            has_market: { n: 15, br: e.readBool, bw: c.writeBool },
            has_dlc: { n: 16, br: e.readBool, bw: c.writeBool },
            has_leaderboards: { n: 17, br: e.readBool, bw: c.writeBool },
            content_descriptorids: {
              n: 18,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
            playtime_disconnected: { n: 19, br: e.readInt32, bw: c.writeInt32 },
            family_shared: { n: 21, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Response_Game`;
    }
  },
  de = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.max_age_seconds || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            max_age_seconds: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            ignore_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayNext_Request`;
    }
  },
  fe = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.last_update_time || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            last_update_time: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            appids: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPlayNext_Response`;
    }
  },
  pe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.play_sessions || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { play_sessions: { n: 3, c: y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Request`;
    }
  },
  y = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            session_time_start: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            seconds: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            offline: { n: 4, br: e.readBool, bw: c.writeBool },
            owner: { n: 5, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory`;
    }
  },
  me = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Response`;
    }
  },
  he = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: { appid: { n: 1, br: e.readUint32, bw: c.writeUint32 } },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Request`;
    }
  },
  ge = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.player_level || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            player_level: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            badges: { n: 2, c: b, r: !0, q: !0 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Response`;
    }
  },
  b = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.level || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            level: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            series: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            border_color: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Response_Badge`;
    }
  },
  x = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            image_small: { n: 2, br: e.readString, bw: c.writeString },
            image_large: { n: 3, br: e.readString, bw: c.writeString },
            name: { n: 4, br: e.readString, bw: c.writeString },
            item_title: { n: 5, br: e.readString, bw: c.writeString },
            item_description: { n: 6, br: e.readString, bw: c.writeString },
            appid: { n: 7, br: e.readUint32, bw: c.writeUint32 },
            item_type: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            item_class: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            movie_webm: { n: 10, br: e.readString, bw: c.writeString },
            movie_mp4: { n: 11, br: e.readString, bw: c.writeString },
            movie_webm_small: { n: 13, br: e.readString, bw: c.writeString },
            movie_mp4_small: { n: 14, br: e.readString, bw: c.writeString },
            equipped_flags: { n: 12, br: e.readUint32, bw: c.writeUint32 },
            profile_colors: { n: 15, c: S, r: !0, q: !0 },
            tiled: { n: 16, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfileItem`;
    }
  },
  S = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.style_name || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            style_name: { n: 1, br: e.readString, bw: c.writeString },
            color: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfileItem_ProfileColor`;
    }
  },
  _e = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Request`;
    }
  },
  ve = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_background || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_background: { n: 1, c: x } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Response`;
    }
  },
  ye = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfileBackground_Request`;
    }
  },
  be = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfileBackground_Response`;
    }
  },
  xe = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Request`;
    }
  },
  Se = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_background || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_background: { n: 1, c: x } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Response`;
    }
  },
  Ce = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetMiniProfileBackground_Request`;
    }
  },
  we = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetMiniProfileBackground_Response`;
    }
  },
  Te = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Request`;
    }
  },
  Ee = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.avatar_frame || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { avatar_frame: { n: 1, c: x } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Response`;
    }
  },
  De = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetAvatarFrame_Request`;
    }
  },
  Oe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetAvatarFrame_Response`;
    }
  },
  ke = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Request`;
    }
  },
  Ae = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.avatar || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { avatar: { n: 1, c: x } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Response`;
    }
  },
  je = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetAnimatedAvatar_Request`;
    }
  },
  Me = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetAnimatedAvatar_Response`;
    }
  },
  Ne = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Request`;
    }
  },
  Pe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.steam_deck_keyboard_skin || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { steam_deck_keyboard_skin: { n: 1, c: x } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Response`;
    }
  },
  Fe = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetSteamDeckKeyboardSkin_Request`;
    }
  },
  Ie = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetSteamDeckKeyboardSkin_Response`;
    }
  },
  Le = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.language || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            language: { n: 1, br: e.readString, bw: c.writeString },
            filters: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readEnum,
              pbr: e.readPackedEnum,
              bw: c.writeRepeatedEnum,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Request`;
    }
  },
  Re = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_backgrounds || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            profile_backgrounds: { n: 1, c: x, r: !0, q: !0 },
            mini_profile_backgrounds: { n: 2, c: x, r: !0, q: !0 },
            avatar_frames: { n: 3, c: x, r: !0, q: !0 },
            animated_avatars: { n: 4, c: x, r: !0, q: !0 },
            profile_modifiers: { n: 5, c: x, r: !0, q: !0 },
            steam_deck_keyboard_skins: { n: 6, c: x, r: !0, q: !0 },
            steam_deck_startup_movies: { n: 7, c: x, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Response`;
    }
  },
  ze = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            language: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Request`;
    }
  },
  Be = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_background || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            profile_background: { n: 1, c: x },
            mini_profile_background: { n: 2, c: x },
            avatar_frame: { n: 3, c: x },
            animated_avatar: { n: 4, c: x },
            profile_modifier: { n: 5, c: x },
            steam_deck_keyboard_skin: { n: 6, c: x },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Response`;
    }
  },
  Ve = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            flags: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetEquippedProfileItemFlags_Request`;
    }
  },
  He = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetEquippedProfileItemFlags_Response`;
    }
  },
  Ue = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Request`;
    }
  },
  We = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.emoticons || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { emoticons: { n: 1, c: C, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Response`;
    }
  },
  C = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.name || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            name: { n: 1, br: e.readString, bw: c.writeString },
            count: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            time_last_used: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            use_count: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            time_received: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            appid: { n: 6, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Response_Emoticon`;
    }
  },
  Ge = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            badgeid: { n: 2, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Request`;
    }
  },
  Ke = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.quests || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { quests: { n: 1, c: w, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Response`;
    }
  },
  w = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.questid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            questid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            completed: { n: 2, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Response_Quest`;
    }
  },
  T = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            status_text: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_PostStatusToFriends_Request`;
    }
  },
  qe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_PostStatusToFriends_Response`;
    }
  },
  Je = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            postid: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPostedStatus_Request`;
    }
  },
  Ye = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            postid: { n: 2, br: e.readUint64String, bw: c.writeUint64String },
            status_text: { n: 3, br: e.readString, bw: c.writeString },
            deleted: { n: 4, br: e.readBool, bw: c.writeBool },
            appid: { n: 5, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPostedStatus_Response`;
    }
  },
  Xe = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.postid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            postid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_DeletePostedStatus_Request`;
    }
  },
  Ze = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_DeletePostedStatus_Response`;
    }
  },
  Qe = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            language: { n: 2, br: e.readString, bw: c.writeString },
            max_achievements: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            appids: {
              n: 4,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Request`;
    }
  },
  $e = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.games || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { games: { n: 1, c: D, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response`;
    }
  },
  E = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.statid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            statid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            bit: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            name: { n: 3, br: e.readString, bw: c.writeString },
            desc: { n: 4, br: e.readString, bw: c.writeString },
            icon: { n: 5, br: e.readString, bw: c.writeString },
            icon_gray: { n: 6, br: e.readString, bw: c.writeString },
            hidden: { n: 7, br: e.readBool, bw: c.writeBool },
            player_percent_unlocked: {
              n: 8,
              br: e.readString,
              bw: c.writeString,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response_Achievement`;
    }
  },
  D = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            total_achievements: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            achievements: { n: 3, c: E, r: !0, q: !0 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response_Game`;
    }
  },
  et = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            appid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            sha_schema: { n: 3, br: e.readBytes, bw: c.writeBytes },
            crc_stats: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            crc_schema: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            app_running: { n: 6, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserStats_Request`;
    }
  },
  tt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.sha_schema || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            sha_schema: { n: 1, br: e.readBytes, bw: c.writeBytes },
            crc_stats: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            schema: { n: 3, br: e.readBytes, bw: c.writeBytes },
            stats: { n: 4, c: k, r: !0, q: !0 },
            crc_schema: { n: 5, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response`;
    }
  },
  O = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.achievement_bit || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            achievement_bit: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            unlock_time: { n: 2, br: e.readFixed32, bw: c.writeFixed32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response_Unlock_Time`;
    }
  },
  k = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.stat_id || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            stat_id: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            stat_value: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            unlock_times: { n: 3, c: O, r: !0, q: !0 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response_Stats`;
    }
  },
  nt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            language: { n: 2, br: e.readString, bw: c.writeString },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: e.readUint32,
              pbr: e.readPackedUint32,
              bw: c.writeRepeatedUint32,
            },
            include_unvetted_apps: { n: 4, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Request`;
    }
  },
  rt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.achievement_progress || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { achievement_progress: { n: 1, c: A, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Response`;
    }
  },
  A = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            unlocked: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            total: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            percentage: { n: 4, br: e.readFloat, bw: c.writeFloat },
            all_unlocked: { n: 5, br: e.readBool, bw: c.writeBool },
            cache_time: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            vetted: { n: 7, br: e.readBool, bw: c.writeBool },
            groups_completed_base: {
              n: 8,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            groups_total_base: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            groups_completed_dlc: {
              n: 10,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            groups_total_dlc: { n: 11, br: e.readUint32, bw: c.writeUint32 },
            base_game_total: { n: 12, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Response_AchievementProgress`;
    }
  },
  it = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            skip_unvetted_apps: {
              n: 2,
              d: !1,
              br: e.readBool,
              bw: c.writeBool,
            },
            language: { n: 3, br: e.readString, bw: c.writeString },
            include_groups_without_progress: {
              n: 4,
              d: !1,
              br: e.readBool,
              bw: c.writeBool,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Request`;
    }
  },
  at = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.groups || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { groups: { n: 1, c: j, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Response`;
    }
  },
  j = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            groupid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            dlcappid: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            localized_name: { n: 4, br: e.readString, bw: c.writeString },
            completion_achievements: {
              n: 5,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            completed_achievements: {
              n: 6,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            is_achievable: { n: 7, br: e.readBool, bw: c.writeBool },
            is_completed: { n: 8, br: e.readBool, bw: c.writeBool },
            time_completed: { n: 9, br: e.readFixed32, bw: c.writeFixed32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Response_GroupProgress`;
    }
  },
  ot = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            language: { n: 2, br: e.readString, bw: c.writeString },
            hash_only: { n: 3, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Request`;
    }
  },
  st = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.achievements || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [1, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            achievements: { n: 1, c: M, r: !0, q: !0 },
            schema_version: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            groups: { n: 3, c: N, r: !0, q: !0 },
            schema_hash: { n: 4, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response`;
    }
  },
  M = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.internal_name || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            internal_name: { n: 1, br: e.readString, bw: c.writeString },
            localized_name: { n: 2, br: e.readString, bw: c.writeString },
            localized_desc: { n: 3, br: e.readString, bw: c.writeString },
            icon: { n: 4, br: e.readString, bw: c.writeString },
            icon_gray: { n: 5, br: e.readString, bw: c.writeString },
            hidden: { n: 6, br: e.readBool, bw: c.writeBool },
            player_percent_unlocked: {
              n: 7,
              br: e.readString,
              bw: c.writeString,
            },
            internal_key: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            min_progress_int: { n: 9, br: e.readInt32, bw: c.writeInt32 },
            max_progress_int: { n: 10, br: e.readInt32, bw: c.writeInt32 },
            groupid: { n: 11, br: e.readUint32, bw: c.writeUint32 },
            archived: { n: 12, br: e.readBool, bw: c.writeBool },
            progress_type: { n: 13, br: e.readEnum, bw: c.writeEnum },
            min_progress_float: { n: 14, br: e.readFloat, bw: c.writeFloat },
            max_progress_float: { n: 15, br: e.readFloat, bw: c.writeFloat },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response_Achievement`;
    }
  },
  N = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.groupid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            groupid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            localized_name: { n: 2, br: e.readString, bw: c.writeString },
            dlcappid: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            archived: { n: 4, br: e.readBool, bw: c.writeBool },
            developeronly: { n: 5, br: e.readBool, bw: c.writeBool },
            order: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            ispublic: { n: 7, br: e.readBool, bw: c.writeBool },
            total_achievements: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            completion_achievements: {
              n: 9,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response_Group`;
    }
  },
  ct = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
            appid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Request`;
    }
  },
  lt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.achievements || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [1, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            achievements: { n: 1, c: P, r: !0, q: !0 },
            schema_version: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            schema_hash: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            groups: { n: 4, c: F, r: !0, q: !0 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response`;
    }
  },
  P = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.internal_key || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            internal_key: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            unlocked: { n: 2, br: e.readBool, bw: c.writeBool },
            unlock_time: { n: 3, br: e.readFixed32, bw: c.writeFixed32 },
            progress_int: { n: 4, br: e.readInt32, bw: c.writeInt32 },
            progress_float: { n: 5, br: e.readFloat, bw: c.writeFloat },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response_Achievement`;
    }
  },
  F = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.groupid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            groupid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            is_achievable: { n: 2, br: e.readBool, bw: c.writeBool },
            completed_achievements: {
              n: 3,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            is_completed: { n: 4, br: e.readBool, bw: c.writeBool },
            time_completed: { n: 9, br: e.readFixed32, bw: c.writeFixed32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response_Group`;
    }
  },
  ut = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: { appid: { n: 1, br: e.readUint32, bw: c.writeUint32 } },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Request`;
    }
  },
  dt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.achievements || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            achievements: { n: 1, c: I, r: !0, q: !0 },
            groups: { n: 2, c: L, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response`;
    }
  },
  I = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.internal_key || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            internal_key: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            player_percent_unlocked: {
              n: 2,
              br: e.readFloat,
              bw: c.writeFloat,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Achievement`;
    }
  },
  L = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.groupid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            groupid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            player_percent_completed: {
              n: 2,
              br: e.readFloat,
              bw: c.writeFloat,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Group`;
    }
  },
  ft = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: { n: 1, br: e.readUint64String, bw: c.writeUint64String },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Request`;
    }
  },
  pt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.has_favorite_badge || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            has_favorite_badge: { n: 1, br: e.readBool, bw: c.writeBool },
            badgeid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            communityitemid: {
              n: 3,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            item_type: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            border_color: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            appid: { n: 6, br: e.readUint32, bw: c.writeUint32 },
            level: { n: 7, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Response`;
    }
  },
  mt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.communityitemid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            communityitemid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            badgeid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetFavoriteBadge_Request`;
    }
  },
  ht = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetFavoriteBadge_Response`;
    }
  },
  R = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.slot || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            slot: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            appid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            publishedfileid: {
              n: 3,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            item_assetid: {
              n: 4,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            item_contextid: {
              n: 5,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            notes: { n: 6, br: e.readString, bw: c.writeString },
            title: { n: 7, br: e.readString, bw: c.writeString },
            accountid: { n: 8, br: e.readUint32, bw: c.writeUint32 },
            badgeid: { n: 9, br: e.readUint32, bw: c.writeUint32 },
            border_color: { n: 10, br: e.readUint32, bw: c.writeUint32 },
            item_classid: {
              n: 11,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            item_instanceid: {
              n: 12,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            ban_check_result: { n: 13, br: e.readEnum, bw: c.writeEnum },
            replay_year: { n: 14, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfileCustomizationSlot`;
    }
  },
  z = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.customization_type || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            customization_type: { n: 1, br: e.readEnum, bw: c.writeEnum },
            large: { n: 2, br: e.readBool, bw: c.writeBool },
            slots: { n: 3, c: R, r: !0, q: !0 },
            active: { n: 4, br: e.readBool, bw: c.writeBool },
            customization_style: { n: 5, br: e.readEnum, bw: c.writeEnum },
            purchaseid: {
              n: 6,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            level: { n: 7, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfileCustomization`;
    }
  },
  B = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.theme_id || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            theme_id: { n: 1, br: e.readString, bw: c.writeString },
            title: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfileTheme`;
    }
  },
  V = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.hide_profile_awards || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            hide_profile_awards: { n: 1, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `ProfilePreferences`;
    }
  },
  gt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            include_inactive_customizations: {
              n: 2,
              br: e.readBool,
              bw: c.writeBool,
            },
            include_purchased_customizations: {
              n: 3,
              br: e.readBool,
              bw: c.writeBool,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Request`;
    }
  },
  _t = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.customizations || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [1, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            customizations: { n: 1, c: z, r: !0, q: !0 },
            slots_available: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            profile_theme: { n: 3, c: B },
            purchased_customizations: { n: 4, c: H, r: !0, q: !0 },
            profile_preferences: { n: 5, c: V },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response`;
    }
  },
  H = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.purchaseid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            purchaseid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            customization_type: { n: 2, br: e.readEnum, bw: c.writeEnum },
            level: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response_PurchasedCustomization`;
    }
  },
  vt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Request`;
    }
  },
  yt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.purchased_customizations || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { purchased_customizations: { n: 1, c: U, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response`;
    }
  },
  U = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.purchaseid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            purchaseid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            customization_type: { n: 2, br: e.readEnum, bw: c.writeEnum },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  bt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request`;
    }
  },
  xt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.purchased_customizations || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchased_customizations: { n: 1, c: W, r: !0, q: !0 },
            upgraded_customizations: { n: 2, c: G, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response`;
    }
  },
  W = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.customization_type || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            customization_type: { n: 1, br: e.readEnum, bw: c.writeEnum },
            count: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  G = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.customization_type || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            customization_type: { n: 1, br: e.readEnum, bw: c.writeEnum },
            level: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization`;
    }
  },
  St = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileThemesAvailable_Request`;
    }
  },
  Ct = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_themes || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_themes: { n: 1, c: B, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetProfileThemesAvailable_Response`;
    }
  },
  wt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.theme_id || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: { theme_id: { n: 1, br: e.readString, bw: c.writeString } },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfileTheme_Request`;
    }
  },
  Tt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfileTheme_Response`;
    }
  },
  Et = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.profile_preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_preferences: { n: 1, c: V } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfilePreferences_Request`;
    }
  },
  Dt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetProfilePreferences_Response`;
    }
  },
  Ot = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            appid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            include_family_licenses: { n: 2, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Request`;
    }
  },
  kt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.your_info || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            your_info: { n: 1, c: q },
            in_game: { n: 2, c: K, r: !0, q: !0 },
            played_recently: { n: 3, c: K, r: !0, q: !0 },
            played_ever: { n: 4, c: K, r: !0, q: !0 },
            owns: { n: 5, c: K, r: !0, q: !0 },
            in_wishlist: { n: 6, c: K, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response`;
    }
  },
  K = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            minutes_played: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo`;
    }
  },
  q = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            minutes_played: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            in_wishlist: { n: 4, br: e.readBool, bw: c.writeBool },
            owned: { n: 5, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo`;
    }
  },
  At = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTimeSSAAccepted_Request`;
    }
  },
  jt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.time_ssa_accepted || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            time_ssa_accepted: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            time_ssa_updated: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            time_chinassa_accepted: {
              n: 3,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTimeSSAAccepted_Response`;
    }
  },
  Mt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.agreement_type || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            agreement_type: { n: 1, br: e.readEnum, bw: c.writeEnum },
            time_signed_utc: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_AcceptSSA_Request`;
    }
  },
  Nt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_AcceptSSA_Response`;
    }
  },
  J = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Request`;
    }
  },
  Pt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.nicknames || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nicknames: { n: 1, c: Y, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response`;
    }
  },
  Y = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readFixed32, bw: c.writeFixed32 },
            nickname: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response_PlayerNickname`;
    }
  },
  X = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readFixed32, bw: c.writeFixed32 },
            nickname: { n: 2, br: e.readString, bw: c.writeString },
            notifications_showingame: { n: 3, br: e.readEnum, bw: c.writeEnum },
            notifications_showonline: { n: 4, br: e.readEnum, bw: c.writeEnum },
            notifications_showmessages: {
              n: 5,
              br: e.readEnum,
              bw: c.writeEnum,
            },
            sounds_showingame: { n: 6, br: e.readEnum, bw: c.writeEnum },
            sounds_showonline: { n: 7, br: e.readEnum, bw: c.writeEnum },
            sounds_showmessages: { n: 8, br: e.readEnum, bw: c.writeEnum },
            notifications_sendmobile: { n: 9, br: e.readEnum, bw: c.writeEnum },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `PerFriendPreferences`;
    }
  },
  Ft = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPerFriendPreferences_Request`;
    }
  },
  It = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: X, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPerFriendPreferences_Response`;
    }
  },
  Lt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: X } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetPerFriendPreferences_Request`;
    }
  },
  Rt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetPerFriendPreferences_Response`;
    }
  },
  zt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_AddFriend_Request`;
    }
  },
  Bt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.invite_sent || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            invite_sent: { n: 1, br: e.readBool, bw: c.writeBool },
            friend_relationship: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            result: { n: 3, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_AddFriend_Response`;
    }
  },
  Vt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Request`;
    }
  },
  Ht = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.friend_relationship || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            friend_relationship: { n: 1, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Response`;
    }
  },
  Ut = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            unignore: { n: 2, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Request`;
    }
  },
  Wt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.friend_relationship || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            friend_relationship: { n: 1, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Response`;
    }
  },
  Z = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.parenthesize_nicknames || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            parenthesize_nicknames: {
              n: 4,
              d: !1,
              br: e.readBool,
              bw: c.writeBool,
            },
            text_filter_setting: { n: 5, br: e.readEnum, bw: c.writeEnum },
            text_filter_ignore_friends: {
              n: 6,
              d: !0,
              br: e.readBool,
              bw: c.writeBool,
            },
            text_filter_words_revision: {
              n: 7,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            timestamp_updated: { n: 3, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_CommunityPreferences`;
    }
  },
  Gt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetCommunityPreferences_Request`;
    }
  },
  Kt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Z },
            content_descriptor_preferences: { n: 2, c: a },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetCommunityPreferences_Response`;
    }
  },
  qt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: Z } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetCommunityPreferences_Request`;
    }
  },
  Jt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_SetCommunityPreferences_Response`;
    }
  },
  Q = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.text_filter_custom_banned_words || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            text_filter_custom_banned_words: {
              n: 1,
              r: !0,
              q: !0,
              br: e.readString,
              bw: c.writeRepeatedString,
            },
            text_filter_custom_clean_words: {
              n: 2,
              r: !0,
              q: !0,
              br: e.readString,
              bw: c.writeRepeatedString,
            },
            text_filter_words_revision: {
              n: 3,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_TextFilterWords`;
    }
  },
  Yt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTextFilterWords_Request`;
    }
  },
  Xt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.words || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { words: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetTextFilterWords_Response`;
    }
  },
  Zt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.language || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: { language: { n: 1, br: e.readInt32, bw: c.writeInt32 } },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetNewSteamAnnouncementState_Request`;
    }
  },
  Qt = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.state || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            state: { n: 1, br: e.readEnum, bw: c.writeEnum },
            announcement_headline: {
              n: 2,
              br: e.readString,
              bw: c.writeString,
            },
            announcement_url: { n: 3, br: e.readString, bw: c.writeString },
            time_posted: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            announcement_gid: {
              n: 5,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetNewSteamAnnouncementState_Response`;
    }
  },
  $t = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.announcement_gid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            announcement_gid: {
              n: 1,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
            time_posted: { n: 2, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_UpdateSteamAnnouncementLastRead_Request`;
    }
  },
  en = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_UpdateSteamAnnouncementLastRead_Response`;
    }
  },
  $ = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.privacy_state || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            privacy_state: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            privacy_state_inventory: {
              n: 2,
              br: e.readInt32,
              bw: c.writeInt32,
            },
            privacy_state_gifts: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            privacy_state_ownedgames: {
              n: 4,
              br: e.readInt32,
              bw: c.writeInt32,
            },
            privacy_state_playtime: { n: 5, br: e.readInt32, bw: c.writeInt32 },
            privacy_state_friendslist: {
              n: 6,
              br: e.readInt32,
              bw: c.writeInt32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPrivacySettings`;
    }
  },
  tn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), f.Message.initialize(this, e, 0, -1, void 0, null);
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
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPrivacySettings_Request`;
    }
  },
  nn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.privacy_settings || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { privacy_settings: { n: 1, c: $ } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetPrivacySettings_Response`;
    }
  },
  rn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.appid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: { appid: { n: 1, br: e.readUint32, bw: c.writeUint32 } },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetDurationControl_Request`;
    }
  },
  an = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.is_enabled || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            is_enabled: { n: 1, br: e.readBool, bw: c.writeBool },
            seconds: { n: 2, br: e.readInt32, bw: c.writeInt32 },
            seconds_today: { n: 3, br: e.readInt32, bw: c.writeInt32 },
            is_steamchina_account: { n: 4, br: e.readBool, bw: c.writeBool },
            is_age_verified: { n: 5, br: e.readBool, bw: c.writeBool },
            seconds_allowed_today: {
              n: 6,
              br: e.readUint32,
              bw: c.writeUint32,
            },
            age_verification_pending: { n: 7, br: e.readBool, bw: c.writeBool },
            block_minors: { n: 8, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetDurationControl_Response`;
    }
  },
  on = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.steamid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            steamid: {
              n: 1,
              br: e.readFixed64String,
              bw: c.writeFixed64String,
            },
            appid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            language: { n: 3, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Request`;
    }
  },
  sn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.level || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            level: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            persona_name: { n: 2, br: e.readString, bw: c.writeString },
            avatar_hash: { n: 3, br: e.readString, bw: c.writeString },
            nickname: { n: 4, br: e.readString, bw: c.writeString },
            favorite_badge: { n: 5, c: cn },
            playtime: { n: 6, c: ln },
            in_game: { n: 7, c: dn },
            mini_profile_background: { n: 8, c: x },
            avatar_frame: { n: 9, c: x },
            animated_avatar: { n: 10, c: x },
            golden_profile_appid: {
              n: 11,
              br: e.readUint32,
              bw: c.writeUint32,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response`;
    }
  },
  cn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.badgeid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            badgeid: { n: 1, br: e.readUint32, bw: c.writeUint32 },
            appid: { n: 2, br: e.readUint32, bw: c.writeUint32 },
            border_color: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            level: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            xp: { n: 5, br: e.readUint32, bw: c.writeUint32 },
            name: { n: 6, br: e.readString, bw: c.writeString },
            icon: { n: 7, br: e.readString, bw: c.writeString },
            game_name: { n: 8, br: e.readString, bw: c.writeString },
            completion_time: { n: 9, br: e.readUint32, bw: c.writeUint32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_FavoriteBadge`;
    }
  },
  ln = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.playtime_2weeks || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            playtime_2weeks: { n: 1, br: e.readInt32, bw: c.writeInt32 },
            playtime_forever: { n: 2, br: e.readInt32, bw: c.writeInt32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_Playtime`;
    }
  },
  un = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.key || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            key: { n: 1, br: e.readString, bw: c.writeString },
            value: { n: 2, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_RichPresenceKey`;
    }
  },
  dn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.is_non_steam || t(a.M()),
        f.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            is_non_steam: { n: 1, br: e.readBool, bw: c.writeBool },
            name: { n: 2, br: e.readString, bw: c.writeString },
            appid: { n: 3, br: e.readUint32, bw: c.writeUint32 },
            rich_presence: { n: 4, c: un, r: !0, q: !0 },
            os_type: { n: 5, br: e.readInt32, bw: c.writeInt32 },
            gaming_device_type: { n: 6, br: e.readInt32, bw: c.writeInt32 },
            device_name: { n: 7, br: e.readString, bw: c.writeString },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_InGame`;
    }
  },
  fn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.games || t(e.M()),
        f.Message.initialize(this, n, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { games: { n: 1, c: m, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_LastPlayedTimes_Notification`;
    }
  },
  pn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readFixed32, bw: c.writeFixed32 },
            nickname: { n: 2, br: e.readString, bw: c.writeString },
            is_echo_to_self: { n: 3, br: e.readBool, bw: c.writeBool },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_FriendNicknameChanged_Notification`;
    }
  },
  mn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readFixed32, bw: c.writeFixed32 },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_FriendEquippedProfileItemsChanged_Notification`;
    }
  },
  hn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.state || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            state: { n: 1, br: e.readEnum, bw: c.writeEnum },
            announcement_headline: {
              n: 2,
              br: e.readString,
              bw: c.writeString,
            },
            announcement_url: { n: 3, br: e.readString, bw: c.writeString },
            time_posted: { n: 4, br: e.readUint32, bw: c.writeUint32 },
            announcement_gid: {
              n: 5,
              br: e.readUint64String,
              bw: c.writeUint64String,
            },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_NewSteamAnnouncementState_Notification`;
    }
  },
  gn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.preferences || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: Z },
            content_descriptor_preferences: { n: 2, c: a },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_CommunityPreferencesChanged_Notification`;
    }
  },
  _n = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.words || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { words: { n: 1, c: Q } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_TextFilterWordsChanged_Notification`;
    }
  },
  vn = class a extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        a.prototype.accountid || t(a.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (a.sm_m ||= {
          proto: a,
          fields: {
            accountid: { n: 1, br: e.readFixed32, bw: c.writeFixed32 },
            preferences: { n: 2, c: X },
          },
        }),
        a.sm_m
      );
    }
    static MBF() {
      return (a.sm_mbf ||= r(a.M())), a.sm_mbf;
    }
    toObject(e = !1) {
      return a.toObject(e, this);
    }
    static toObject(e, t) {
      return n(a.M(), e, t);
    }
    static fromObject(e) {
      return o(a.M(), e);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new a();
      return a.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return i(a.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      u(a.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_PerFriendPreferencesChanged_Notification`;
    }
  },
  yn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(n = null) {
      super(),
        e.prototype.privacy_settings || t(e.M()),
        f.Message.initialize(this, n, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { privacy_settings: { n: 1, c: $ } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= r(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, r) {
      return n(e.M(), t, r);
    }
    static fromObject(t) {
      return o(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new f.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return i(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CPlayer_PrivacySettingsChanged_Notification`;
    }
  },
  bn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Player.GetRecentPlaytimeSessionsForChild#1`,
      d(ee, t, n),
      te,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  e.GetRecentPlaytimeSessionsForChild = t;
  function n(e, t, n) {
    return e.SendMsg(`Player.GetPlayerLinkDetails#1`, d(ie, t, n), ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetPlayerLinkDetails = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Player.GetMutualFriendsForIncomingInvites#1`,
      d(se, t, n),
      ce,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetMutualFriendsForIncomingInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Player.GetOwnedGames#1`, d(le, t, n), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetOwnedGames = i;
  function a(e, t, n) {
    return e.SendMsg(`Player.GetPlayNext#1`, d(de, t, n), fe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPlayNext = a;
  function o(e, t, n) {
    return e.SendMsg(`Player.GetFriendsGameplayInfo#1`, d(Ot, t, n), kt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetFriendsGameplayInfo = o;
  function s(e, t, n) {
    return e.SendMsg(`Player.GetGameBadgeLevels#1`, d(he, t, n), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetGameBadgeLevels = s;
  function c(e, t, n) {
    return e.SendMsg(`Player.GetProfileBackground#1`, d(_e, t, n), ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileBackground = c;
  function l(e, t, n) {
    return e.SendMsg(`Player.SetProfileBackground#1`, d(ye, t, n), be, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetProfileBackground = l;
  function u(e, t, n) {
    return e.SendMsg(`Player.GetMiniProfileBackground#1`, d(xe, t, n), Se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMiniProfileBackground = u;
  function f(e, t, n) {
    return e.SendMsg(`Player.SetMiniProfileBackground#1`, d(Ce, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetMiniProfileBackground = f;
  function p(e, t, n) {
    return e.SendMsg(`Player.GetAvatarFrame#1`, d(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAvatarFrame = p;
  function m(e, t, n) {
    return e.SendMsg(`Player.SetAvatarFrame#1`, d(De, t, n), Oe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetAvatarFrame = m;
  function oe(e, t, n) {
    return e.SendMsg(`Player.GetAnimatedAvatar#1`, d(ke, t, n), Ae, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAnimatedAvatar = oe;
  function h(e, t, n) {
    return e.SendMsg(`Player.SetAnimatedAvatar#1`, d(je, t, n), Me, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetAnimatedAvatar = h;
  function g(e, t, n) {
    return e.SendMsg(`Player.GetSteamDeckKeyboardSkin#1`, d(Ne, t, n), Pe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetSteamDeckKeyboardSkin = g;
  function _(e, t, n) {
    return e.SendMsg(`Player.SetSteamDeckKeyboardSkin#1`, d(Fe, t, n), Ie, {
      ePrivilege: 1,
    });
  }
  e.SetSteamDeckKeyboardSkin = _;
  function v(e, t, n) {
    return e.SendMsg(`Player.GetProfileItemsOwned#1`, d(Le, t, n), Re, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetProfileItemsOwned = v;
  function y(e, t, n) {
    return e.SendMsg(`Player.GetProfileItemsEquipped#1`, d(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetProfileItemsEquipped = y;
  function b(e, t, n) {
    return e.SendMsg(`Player.SetEquippedProfileItemFlags#1`, d(Ve, t, n), He, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetEquippedProfileItemFlags = b;
  function x(e, t, n) {
    return e.SendMsg(`Player.GetEmoticonList#1`, d(Ue, t, n), We, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetEmoticonList = x;
  function S(e, t, n) {
    return e.SendMsg(`Player.GetCommunityBadgeProgress#1`, d(Ge, t, n), Ke, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetCommunityBadgeProgress = S;
  function C(e, t, n) {
    return e.SendMsg(`Player.GetTopAchievementsForGames#1`, d(Qe, t, n), $e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetTopAchievementsForGames = C;
  function w(e, t, n) {
    return e.SendMsg(`Player.GetAchievementsProgress#1`, d(nt, t, n), rt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAchievementsProgress = w;
  function E(e, t, n) {
    return e.SendMsg(`Player.GetGameAchievements#1`, d(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGameAchievements = E;
  function D(e, t, n) {
    return e.SendMsg(`Player.GetUserAchievements#1`, d(ct, t, n), lt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserAchievements = D;
  function O(e, t, n) {
    return e.SendMsg(
      `Player.GetGlobalAchievementPercentages#1`,
      d(ut, t, n),
      dt,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetGlobalAchievementPercentages = O;
  function k(e, t, n) {
    return e.SendMsg(
      `Player.GetGamesWithAchievementProgress#1`,
      d(it, t, n),
      at,
      { bConstMethod: !0, ePrivilege: 2, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetGamesWithAchievementProgress = k;
  function A(e, t, n) {
    return e.SendMsg(`Player.GetUserStats#1`, d(et, t, n), tt, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  e.GetUserStats = A;
  function j(e, t, n) {
    return e.SendMsg(`Player.GetFavoriteBadge#1`, d(ft, t, n), pt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetFavoriteBadge = j;
  function M(e, t, n) {
    return e.SendMsg(`Player.SetFavoriteBadge#1`, d(mt, t, n), ht, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetFavoriteBadge = M;
  function N(e, t, n) {
    return e.SendMsg(`Player.GetProfileCustomization#1`, d(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileCustomization = N;
  function P(e, t, n) {
    return e.SendMsg(
      `Player.GetPurchasedProfileCustomizations#1`,
      d(vt, t, n),
      yt,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPurchasedProfileCustomizations = P;
  function F(e, t, n) {
    return e.SendMsg(
      `Player.GetPurchasedAndUpgradedProfileCustomizations#1`,
      d(bt, t, n),
      xt,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPurchasedAndUpgradedProfileCustomizations = F;
  function I(e, t, n) {
    return e.SendMsg(`Player.GetProfileThemesAvailable#1`, d(St, t, n), Ct, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetProfileThemesAvailable = I;
  function L(e, t, n) {
    return e.SendMsg(`Player.SetProfileTheme#1`, d(wt, t, n), Tt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetProfileTheme = L;
  function R(e, t, n) {
    return e.SendMsg(`Player.SetProfilePreferences#1`, d(Et, t, n), Dt, {
      ePrivilege: 1,
    });
  }
  e.SetProfilePreferences = R;
  function z(e, t, n) {
    return e.SendMsg(`Player.PostStatusToFriends#1`, d(T, t, n), qe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.PostStatusToFriends = z;
  function B(e, t, n) {
    return e.SendMsg(`Player.GetPostedStatus#1`, d(Je, t, n), Ye, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPostedStatus = B;
  function V(e, t, n) {
    return e.SendMsg(`Player.DeletePostedStatus#1`, d(Xe, t, n), Ze, {
      ePrivilege: 1,
    });
  }
  e.DeletePostedStatus = V;
  function H(e, t, n) {
    return e.SendMsg(`Player.ClientGetLastPlayedTimes#1`, d(ne, t, n), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ClientGetLastPlayedTimes = H;
  function U(e, t, n) {
    return e.SendMsg(`Player.GetTimeSSAAccepted#1`, d(At, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeSSAAccepted = U;
  function W(e, t, n) {
    return e.SendMsg(`Player.AcceptSSA#1`, d(Mt, t, n), Nt, { ePrivilege: 1 });
  }
  e.AcceptSSA = W;
  function G(e, t, n) {
    return e.SendMsg(`Player.GetNicknameList#1`, d(J, t, n), Pt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetNicknameList = G;
  function K(e, t, n) {
    return e.SendMsg(`Player.GetPerFriendPreferences#1`, d(Ft, t, n), It, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPerFriendPreferences = K;
  function q(e, t, n) {
    return e.SendMsg(`Player.SetPerFriendPreferences#1`, d(Lt, t, n), Rt, {
      ePrivilege: 1,
    });
  }
  e.SetPerFriendPreferences = q;
  function Y(e, t, n) {
    return e.SendMsg(`Player.AddFriend#1`, d(zt, t, n), Bt, { ePrivilege: 1 });
  }
  e.AddFriend = Y;
  function X(e, t, n) {
    return e.SendMsg(`Player.RemoveFriend#1`, d(Vt, t, n), Ht, {
      ePrivilege: 1,
    });
  }
  e.RemoveFriend = X;
  function Z(e, t, n) {
    return e.SendMsg(`Player.IgnoreFriend#1`, d(Ut, t, n), Wt, {
      ePrivilege: 1,
    });
  }
  e.IgnoreFriend = Z;
  function Q(e, t, n) {
    return e.SendMsg(`Player.GetCommunityPreferences#1`, d(Gt, t, n), Kt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetCommunityPreferences = Q;
  function $(e, t, n) {
    return e.SendMsg(`Player.SetCommunityPreferences#1`, d(qt, t, n), Jt, {
      ePrivilege: 1,
    });
  }
  e.SetCommunityPreferences = $;
  function cn(e, t, n) {
    return e.SendMsg(`Player.GetTextFilterWords#1`, d(Yt, t, n), Xt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetTextFilterWords = cn;
  function ln(e, t, n) {
    return e.SendMsg(`Player.GetNewSteamAnnouncementState#1`, d(Zt, t, n), Qt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNewSteamAnnouncementState = ln;
  function un(e, t, n) {
    return e.SendMsg(
      `Player.UpdateSteamAnnouncementLastRead#1`,
      d($t, t, n),
      en,
      { ePrivilege: 1 },
    );
  }
  e.UpdateSteamAnnouncementLastRead = un;
  function dn(e, t, n) {
    return e.SendMsg(`Player.GetPrivacySettings#1`, d(tn, t, n), nn, {
      ePrivilege: 1,
    });
  }
  e.GetPrivacySettings = dn;
  function fn(e, t, n) {
    return e.SendMsg(`Player.GetDurationControl#1`, d(rn, t, n), an, {
      ePrivilege: 1,
    });
  }
  e.GetDurationControl = fn;
  function pn(e, t, n) {
    return e.SendMsg(`Player.RecordDisconnectedPlaytime#1`, d(pe, t, n), me, {
      ePrivilege: 1,
    });
  }
  e.RecordDisconnectedPlaytime = pn;
  function mn(e, t, n) {
    return e.SendMsg(`Player.GetMiniprofileData#1`, d(on, t, n), sn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMiniprofileData = mn;
})((bn ||= {}));
var xn;
(function (e) {
  (e.NotifyLastPlayedTimesHandler = {
    name: `PlayerClient.NotifyLastPlayedTimes#1`,
    request: fn,
  }),
    (e.NotifyFriendNicknameChangedHandler = {
      name: `PlayerClient.NotifyFriendNicknameChanged#1`,
      request: pn,
    }),
    (e.NotifyFriendEquippedProfileItemsChangedHandler = {
      name: `PlayerClient.NotifyFriendEquippedProfileItemsChanged#1`,
      request: mn,
    }),
    (e.NotifyNewSteamAnnouncementStateHandler = {
      name: `PlayerClient.NotifyNewSteamAnnouncementState#1`,
      request: hn,
    }),
    (e.NotifyCommunityPreferencesChangedHandler = {
      name: `PlayerClient.NotifyCommunityPreferencesChanged#1`,
      request: gn,
    }),
    (e.NotifyTextFilterWordsChangedHandler = {
      name: `PlayerClient.NotifyTextFilterWordsChanged#1`,
      request: _n,
    }),
    (e.NotifyPerFriendPreferencesChangedHandler = {
      name: `PlayerClient.NotifyPerFriendPreferencesChanged#1`,
      request: vn,
    }),
    (e.NotifyPrivacyPrivacySettingsChangedHandler = {
      name: `PlayerClient.NotifyPrivacyPrivacySettingsChanged#1`,
      request: yn,
    });
})((xn ||= {}));
export { T as a, bn as c, Yt as i, Gt as n, Q as o, J as r, xn as s, Z as t };
