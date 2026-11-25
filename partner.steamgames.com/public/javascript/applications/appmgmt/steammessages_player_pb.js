/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  _t as i,
  bt as a,
  gt as o,
  ht as s,
  vt as c,
  wt as l,
  xt as u,
  yt as d,
} from "./chunk~de7f2df91c.js";
var f = n(l(), 1),
  ee = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Request`;
    }
  },
  te = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sessions || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Response`;
    }
  },
  p = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.time_start || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            time_start: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            time_end: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            appid: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            device_type: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            disconnected: { n: 5, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession`;
    }
  },
  ne = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.min_last_played || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            min_last_played: { n: 1, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Request`;
    }
  },
  re = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Response`;
    }
  },
  m = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            last_playtime: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            playtime_2weeks: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            playtime_forever: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            first_playtime: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            playtime_windows_forever: {
              n: 6,
              br: d.readInt32,
              bw: e.writeInt32,
            },
            playtime_mac_forever: { n: 7, br: d.readInt32, bw: e.writeInt32 },
            playtime_linux_forever: { n: 8, br: d.readInt32, bw: e.writeInt32 },
            playtime_deck_forever: { n: 16, br: d.readInt32, bw: e.writeInt32 },
            first_windows_playtime: {
              n: 9,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            first_mac_playtime: { n: 10, br: d.readUint32, bw: e.writeUint32 },
            first_linux_playtime: {
              n: 11,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            first_deck_playtime: { n: 17, br: d.readUint32, bw: e.writeUint32 },
            last_windows_playtime: {
              n: 12,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            last_mac_playtime: { n: 13, br: d.readUint32, bw: e.writeUint32 },
            last_linux_playtime: { n: 14, br: d.readUint32, bw: e.writeUint32 },
            last_deck_playtime: { n: 18, br: d.readUint32, bw: e.writeUint32 },
            playtime_disconnected: {
              n: 15,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Response_Game`;
    }
  },
  ie = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamids || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamids: {
              n: 1,
              r: !0,
              q: !0,
              br: d.readUint64String,
              pbr: d.readPackedUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Request`;
    }
  },
  ae = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.accounts || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response`;
    }
  },
  oe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.public_data || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails`;
    }
  },
  h = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              q: !0,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            visibility_state: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            privacy_state: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            profile_state: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            ban_expires_time: { n: 7, br: d.readUint32, bw: e.writeUint32 },
            account_flags: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            sha_digest_avatar: { n: 9, br: d.readBytes, bw: e.writeBytes },
            persona_name: { n: 10, br: d.readString, bw: e.writeString },
            profile_url: { n: 11, br: d.readString, bw: e.writeString },
            content_country_restricted: {
              n: 12,
              br: d.readBool,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData`;
    }
  },
  g = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.persona_state || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            persona_state: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            persona_state_flags: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            time_created: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            game_id: {
              n: 4,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            game_server_steam_id: {
              n: 5,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            game_server_ip_address: {
              n: 6,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            game_server_port: { n: 7, br: d.readUint32, bw: e.writeUint32 },
            game_extra_info: { n: 8, br: d.readString, bw: e.writeString },
            account_name: { n: 9, br: d.readString, bw: e.writeString },
            lobby_steam_id: {
              n: 10,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            rich_presence_kv: { n: 11, br: d.readString, bw: e.writeString },
            broadcast_session_id: {
              n: 12,
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            watching_broadcast_accountid: {
              n: 13,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            watching_broadcast_appid: {
              n: 14,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            watching_broadcast_viewers: {
              n: 15,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            watching_broadcast_title: {
              n: 16,
              br: d.readString,
              bw: e.writeString,
            },
            last_logoff_time: { n: 17, br: d.readUint32, bw: e.writeUint32 },
            last_seen_online: { n: 18, br: d.readUint32, bw: e.writeUint32 },
            game_os_type: { n: 19, br: d.readInt32, bw: e.writeInt32 },
            game_device_type: { n: 20, br: d.readInt32, bw: e.writeInt32 },
            game_device_name: { n: 21, br: d.readString, bw: e.writeString },
            game_is_private: { n: 22, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData`;
    }
  },
  se = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMutualFriendsForIncomingInvites_Request`;
    }
  },
  _ = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            mutual_friend_account_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IncomingInviteMutualFriendList`;
    }
  },
  ce = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.incoming_invite_mutual_friends_lists || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMutualFriendsForIncomingInvites_Response`;
    }
  },
  le = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            include_appinfo: { n: 2, br: d.readBool, bw: e.writeBool },
            include_played_free_games: {
              n: 3,
              br: d.readBool,
              bw: e.writeBool,
            },
            appids_filter: {
              n: 4,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            include_free_sub: { n: 5, br: d.readBool, bw: e.writeBool },
            skip_unvetted_apps: {
              n: 6,
              d: !0,
              br: d.readBool,
              bw: e.writeBool,
            },
            language: { n: 7, br: d.readString, bw: e.writeString },
            include_extended_appinfo: { n: 8, br: d.readBool, bw: e.writeBool },
            include_family_licenses: { n: 9, br: d.readBool, bw: e.writeBool },
            include_all_free_games: { n: 10, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Request`;
    }
  },
  ue = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_count || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_count: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            games: { n: 2, c: v, r: !0, q: !0 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Response`;
    }
  },
  v = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            name: { n: 2, br: d.readString, bw: e.writeString },
            playtime_2weeks: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            playtime_forever: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            img_icon_url: { n: 5, br: d.readString, bw: e.writeString },
            has_community_visible_stats: {
              n: 7,
              br: d.readBool,
              bw: e.writeBool,
            },
            playtime_windows_forever: {
              n: 8,
              br: d.readInt32,
              bw: e.writeInt32,
            },
            playtime_mac_forever: { n: 9, br: d.readInt32, bw: e.writeInt32 },
            playtime_linux_forever: {
              n: 10,
              br: d.readInt32,
              bw: e.writeInt32,
            },
            playtime_deck_forever: { n: 20, br: d.readInt32, bw: e.writeInt32 },
            rtime_last_played: { n: 11, br: d.readUint32, bw: e.writeUint32 },
            capsule_filename: { n: 12, br: d.readString, bw: e.writeString },
            sort_as: { n: 13, br: d.readString, bw: e.writeString },
            has_workshop: { n: 14, br: d.readBool, bw: e.writeBool },
            has_market: { n: 15, br: d.readBool, bw: e.writeBool },
            has_dlc: { n: 16, br: d.readBool, bw: e.writeBool },
            has_leaderboards: { n: 17, br: d.readBool, bw: e.writeBool },
            content_descriptorids: {
              n: 18,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            playtime_disconnected: { n: 19, br: d.readInt32, bw: e.writeInt32 },
            family_shared: { n: 21, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetOwnedGames_Response_Game`;
    }
  },
  de = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.max_age_seconds || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            max_age_seconds: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            ignore_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayNext_Request`;
    }
  },
  fe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.last_update_time || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            last_update_time: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            appids: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayNext_Response`;
    }
  },
  pe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.play_sessions || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [3], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Request`;
    }
  },
  y = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            session_time_start: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            seconds: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            offline: { n: 4, br: d.readBool, bw: e.writeBool },
            owner: { n: 5, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory`;
    }
  },
  me = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Response`;
    }
  },
  he = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: d.readUint32, bw: e.writeUint32 } },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Request`;
    }
  },
  ge = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.player_level || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            player_level: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            badges: { n: 2, c: b, r: !0, q: !0 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Response`;
    }
  },
  b = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.level || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            level: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            series: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            border_color: { n: 3, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameBadgeLevels_Response_Badge`;
    }
  },
  x = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [15], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            image_small: { n: 2, br: d.readString, bw: e.writeString },
            image_large: { n: 3, br: d.readString, bw: e.writeString },
            name: { n: 4, br: d.readString, bw: e.writeString },
            item_title: { n: 5, br: d.readString, bw: e.writeString },
            item_description: { n: 6, br: d.readString, bw: e.writeString },
            appid: { n: 7, br: d.readUint32, bw: e.writeUint32 },
            item_type: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            item_class: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            movie_webm: { n: 10, br: d.readString, bw: e.writeString },
            movie_mp4: { n: 11, br: d.readString, bw: e.writeString },
            movie_webm_small: { n: 13, br: d.readString, bw: e.writeString },
            movie_mp4_small: { n: 14, br: d.readString, bw: e.writeString },
            equipped_flags: { n: 12, br: d.readUint32, bw: e.writeUint32 },
            profile_colors: { n: 15, c: S, r: !0, q: !0 },
            tiled: { n: 16, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileItem`;
    }
  },
  S = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.style_name || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            style_name: { n: 1, br: d.readString, bw: e.writeString },
            color: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileItem_ProfileColor`;
    }
  },
  _e = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Request`;
    }
  },
  ve = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_background || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Response`;
    }
  },
  ye = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfileBackground_Request`;
    }
  },
  be = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfileBackground_Response`;
    }
  },
  xe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Request`;
    }
  },
  Se = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_background || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Response`;
    }
  },
  Ce = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetMiniProfileBackground_Request`;
    }
  },
  we = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetMiniProfileBackground_Response`;
    }
  },
  Te = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Request`;
    }
  },
  Ee = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.avatar_frame || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Response`;
    }
  },
  De = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetAvatarFrame_Request`;
    }
  },
  Oe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetAvatarFrame_Response`;
    }
  },
  ke = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Request`;
    }
  },
  Ae = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.avatar || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { avatar: { n: 1, c: x } } }), e.sm_m
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Response`;
    }
  },
  je = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetAnimatedAvatar_Request`;
    }
  },
  Me = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetAnimatedAvatar_Response`;
    }
  },
  Ne = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Request`;
    }
  },
  Pe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steam_deck_keyboard_skin || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Response`;
    }
  },
  Fe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetSteamDeckKeyboardSkin_Request`;
    }
  },
  Ie = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetSteamDeckKeyboardSkin_Response`;
    }
  },
  Le = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: d.readString, bw: e.writeString },
            filters: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readEnum,
              pbr: d.readPackedEnum,
              bw: e.writeRepeatedEnum,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Request`;
    }
  },
  Re = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_backgrounds || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1, 2, 3, 4, 5, 6, 7], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Response`;
    }
  },
  ze = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            language: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Request`;
    }
  },
  Be = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_background || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Response`;
    }
  },
  Ve = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            flags: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetEquippedProfileItemFlags_Request`;
    }
  },
  He = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetEquippedProfileItemFlags_Response`;
    }
  },
  Ue = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Request`;
    }
  },
  We = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.emoticons || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Response`;
    }
  },
  C = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: d.readString, bw: e.writeString },
            count: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            time_last_used: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            use_count: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            time_received: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            appid: { n: 6, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Response_Emoticon`;
    }
  },
  Ge = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            badgeid: { n: 2, br: d.readInt32, bw: e.writeInt32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Request`;
    }
  },
  Ke = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.quests || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Response`;
    }
  },
  w = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.questid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            questid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            completed: { n: 2, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Response_Quest`;
    }
  },
  T = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            status_text: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_PostStatusToFriends_Request`;
    }
  },
  qe = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_PostStatusToFriends_Response`;
    }
  },
  Je = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            postid: { n: 2, br: d.readUint64String, bw: e.writeUint64String },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPostedStatus_Request`;
    }
  },
  Ye = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            postid: { n: 2, br: d.readUint64String, bw: e.writeUint64String },
            status_text: { n: 3, br: d.readString, bw: e.writeString },
            deleted: { n: 4, br: d.readBool, bw: e.writeBool },
            appid: { n: 5, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPostedStatus_Response`;
    }
  },
  Xe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.postid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            postid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_DeletePostedStatus_Request`;
    }
  },
  Ze = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_DeletePostedStatus_Response`;
    }
  },
  Qe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            language: { n: 2, br: d.readString, bw: e.writeString },
            max_achievements: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            appids: {
              n: 4,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Request`;
    }
  },
  $e = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response`;
    }
  },
  E = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.statid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            statid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            bit: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            name: { n: 3, br: d.readString, bw: e.writeString },
            desc: { n: 4, br: d.readString, bw: e.writeString },
            icon: { n: 5, br: d.readString, bw: e.writeString },
            icon_gray: { n: 6, br: d.readString, bw: e.writeString },
            hidden: { n: 7, br: d.readBool, bw: e.writeBool },
            player_percent_unlocked: {
              n: 8,
              br: d.readString,
              bw: e.writeString,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response_Achievement`;
    }
  },
  D = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            total_achievements: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            achievements: { n: 3, c: E, r: !0, q: !0 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response_Game`;
    }
  },
  et = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            appid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            sha_schema: { n: 3, br: d.readBytes, bw: e.writeBytes },
            crc_stats: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            crc_schema: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            app_running: { n: 6, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserStats_Request`;
    }
  },
  tt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sha_schema || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sha_schema: { n: 1, br: d.readBytes, bw: e.writeBytes },
            crc_stats: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            schema: { n: 3, br: d.readBytes, bw: e.writeBytes },
            stats: { n: 4, c: k, r: !0, q: !0 },
            crc_schema: { n: 5, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response`;
    }
  },
  O = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.achievement_bit || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            achievement_bit: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            unlock_time: { n: 2, br: d.readFixed32, bw: e.writeFixed32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response_Unlock_Time`;
    }
  },
  k = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.stat_id || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            stat_id: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            stat_value: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            unlock_times: { n: 3, c: O, r: !0, q: !0 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserStats_Response_Stats`;
    }
  },
  nt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            language: { n: 2, br: d.readString, bw: e.writeString },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            include_unvetted_apps: { n: 4, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Request`;
    }
  },
  rt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.achievement_progress || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Response`;
    }
  },
  A = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            unlocked: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            total: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            percentage: { n: 4, br: d.readFloat, bw: e.writeFloat },
            all_unlocked: { n: 5, br: d.readBool, bw: e.writeBool },
            cache_time: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            vetted: { n: 7, br: d.readBool, bw: e.writeBool },
            groups_completed_base: {
              n: 8,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            groups_total_base: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            groups_completed_dlc: {
              n: 10,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            groups_total_dlc: { n: 11, br: d.readUint32, bw: e.writeUint32 },
            base_game_total: { n: 12, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Response_AchievementProgress`;
    }
  },
  it = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            skip_unvetted_apps: {
              n: 2,
              d: !1,
              br: d.readBool,
              bw: e.writeBool,
            },
            language: { n: 3, br: d.readString, bw: e.writeString },
            include_groups_without_progress: {
              n: 4,
              d: !1,
              br: d.readBool,
              bw: e.writeBool,
            },
            appids: {
              n: 5,
              r: !0,
              q: !0,
              br: d.readUint32,
              pbr: d.readPackedUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Request`;
    }
  },
  at = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.groups || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Response`;
    }
  },
  j = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            groupid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            dlcappid: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            localized_name: { n: 4, br: d.readString, bw: e.writeString },
            completion_achievements: {
              n: 5,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            completed_achievements: {
              n: 6,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            is_achievable: { n: 7, br: d.readBool, bw: e.writeBool },
            is_completed: { n: 8, br: d.readBool, bw: e.writeBool },
            time_completed: { n: 9, br: d.readFixed32, bw: e.writeFixed32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Response_GroupProgress`;
    }
  },
  ot = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            language: { n: 2, br: d.readString, bw: e.writeString },
            hash_only: { n: 3, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Request`;
    }
  },
  st = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.achievements || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            achievements: { n: 1, c: M, r: !0, q: !0 },
            schema_version: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            groups: { n: 3, c: N, r: !0, q: !0 },
            schema_hash: { n: 4, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response`;
    }
  },
  M = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.internal_name || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_name: { n: 1, br: d.readString, bw: e.writeString },
            localized_name: { n: 2, br: d.readString, bw: e.writeString },
            localized_desc: { n: 3, br: d.readString, bw: e.writeString },
            icon: { n: 4, br: d.readString, bw: e.writeString },
            icon_gray: { n: 5, br: d.readString, bw: e.writeString },
            hidden: { n: 6, br: d.readBool, bw: e.writeBool },
            player_percent_unlocked: {
              n: 7,
              br: d.readString,
              bw: e.writeString,
            },
            internal_key: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            min_progress_int: { n: 9, br: d.readInt32, bw: e.writeInt32 },
            max_progress_int: { n: 10, br: d.readInt32, bw: e.writeInt32 },
            groupid: { n: 11, br: d.readUint32, bw: e.writeUint32 },
            archived: { n: 12, br: d.readBool, bw: e.writeBool },
            progress_type: { n: 13, br: d.readEnum, bw: e.writeEnum },
            min_progress_float: { n: 14, br: d.readFloat, bw: e.writeFloat },
            max_progress_float: { n: 15, br: d.readFloat, bw: e.writeFloat },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response_Achievement`;
    }
  },
  N = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groupid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            localized_name: { n: 2, br: d.readString, bw: e.writeString },
            dlcappid: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            archived: { n: 4, br: d.readBool, bw: e.writeBool },
            developeronly: { n: 5, br: d.readBool, bw: e.writeBool },
            order: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            ispublic: { n: 7, br: d.readBool, bw: e.writeBool },
            total_achievements: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            completion_achievements: {
              n: 9,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGameAchievements_Response_Group`;
    }
  },
  ct = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
            appid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Request`;
    }
  },
  lt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.achievements || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            achievements: { n: 1, c: P, r: !0, q: !0 },
            schema_version: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            schema_hash: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            groups: { n: 4, c: F, r: !0, q: !0 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response`;
    }
  },
  P = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.internal_key || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_key: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            unlocked: { n: 2, br: d.readBool, bw: e.writeBool },
            unlock_time: { n: 3, br: d.readFixed32, bw: e.writeFixed32 },
            progress_int: { n: 4, br: d.readInt32, bw: e.writeInt32 },
            progress_float: { n: 5, br: d.readFloat, bw: e.writeFloat },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response_Achievement`;
    }
  },
  F = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groupid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            is_achievable: { n: 2, br: d.readBool, bw: e.writeBool },
            completed_achievements: {
              n: 3,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            is_completed: { n: 4, br: d.readBool, bw: e.writeBool },
            time_completed: { n: 9, br: d.readFixed32, bw: e.writeFixed32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetUserAchievements_Response_Group`;
    }
  },
  ut = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: d.readUint32, bw: e.writeUint32 } },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Request`;
    }
  },
  dt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.achievements || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            achievements: { n: 1, c: ft, r: !0, q: !0 },
            groups: { n: 2, c: I, r: !0, q: !0 },
          },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response`;
    }
  },
  ft = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.internal_key || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_key: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            player_percent_unlocked: {
              n: 2,
              br: d.readFloat,
              bw: e.writeFloat,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Achievement`;
    }
  },
  I = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groupid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            player_percent_completed: {
              n: 2,
              br: d.readFloat,
              bw: e.writeFloat,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Group`;
    }
  },
  pt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: d.readUint64String, bw: e.writeUint64String },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Request`;
    }
  },
  mt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.has_favorite_badge || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            has_favorite_badge: { n: 1, br: d.readBool, bw: e.writeBool },
            badgeid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            communityitemid: {
              n: 3,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            item_type: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            border_color: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            appid: { n: 6, br: d.readUint32, bw: e.writeUint32 },
            level: { n: 7, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Response`;
    }
  },
  ht = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            communityitemid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            badgeid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetFavoriteBadge_Request`;
    }
  },
  gt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetFavoriteBadge_Response`;
    }
  },
  L = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.slot || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            slot: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            appid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            publishedfileid: {
              n: 3,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            item_assetid: {
              n: 4,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            item_contextid: {
              n: 5,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            notes: { n: 6, br: d.readString, bw: e.writeString },
            title: { n: 7, br: d.readString, bw: e.writeString },
            accountid: { n: 8, br: d.readUint32, bw: e.writeUint32 },
            badgeid: { n: 9, br: d.readUint32, bw: e.writeUint32 },
            border_color: { n: 10, br: d.readUint32, bw: e.writeUint32 },
            item_classid: {
              n: 11,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            item_instanceid: {
              n: 12,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            ban_check_result: { n: 13, br: d.readEnum, bw: e.writeEnum },
            replay_year: { n: 14, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileCustomizationSlot`;
    }
  },
  R = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: d.readEnum, bw: e.writeEnum },
            large: { n: 2, br: d.readBool, bw: e.writeBool },
            slots: { n: 3, c: L, r: !0, q: !0 },
            active: { n: 4, br: d.readBool, bw: e.writeBool },
            customization_style: { n: 5, br: d.readEnum, bw: e.writeEnum },
            purchaseid: {
              n: 6,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            level: { n: 7, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileCustomization`;
    }
  },
  z = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.theme_id || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            theme_id: { n: 1, br: d.readString, bw: e.writeString },
            title: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileTheme`;
    }
  },
  B = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.hide_profile_awards || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hide_profile_awards: { n: 1, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfilePreferences`;
    }
  },
  _t = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            include_inactive_customizations: {
              n: 2,
              br: d.readBool,
              bw: e.writeBool,
            },
            include_purchased_customizations: {
              n: 3,
              br: d.readBool,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Request`;
    }
  },
  vt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customizations || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customizations: { n: 1, c: R, r: !0, q: !0 },
            slots_available: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            profile_theme: { n: 3, c: z },
            purchased_customizations: { n: 4, c: V, r: !0, q: !0 },
            profile_preferences: { n: 5, c: B },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response`;
    }
  },
  V = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchaseid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            purchaseid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            customization_type: { n: 2, br: d.readEnum, bw: e.writeEnum },
            level: { n: 3, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response_PurchasedCustomization`;
    }
  },
  yt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Request`;
    }
  },
  bt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchased_customizations || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { purchased_customizations: { n: 1, c: H, r: !0, q: !0 } },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response`;
    }
  },
  H = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchaseid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            purchaseid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            customization_type: { n: 2, br: d.readEnum, bw: e.writeEnum },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  xt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request`;
    }
  },
  St = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.purchased_customizations || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            purchased_customizations: { n: 1, c: U, r: !0, q: !0 },
            upgraded_customizations: { n: 2, c: W, r: !0, q: !0 },
          },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response`;
    }
  },
  U = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: d.readEnum, bw: e.writeEnum },
            count: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  W = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: d.readEnum, bw: e.writeEnum },
            level: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization`;
    }
  },
  Ct = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileThemesAvailable_Request`;
    }
  },
  wt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_themes || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_themes: { n: 1, c: z, r: !0, q: !0 } },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileThemesAvailable_Response`;
    }
  },
  Tt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.theme_id || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { theme_id: { n: 1, br: d.readString, bw: e.writeString } },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfileTheme_Request`;
    }
  },
  Et = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfileTheme_Response`;
    }
  },
  Dt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.profile_preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { profile_preferences: { n: 1, c: B } },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfilePreferences_Request`;
    }
  },
  Ot = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfilePreferences_Response`;
    }
  },
  kt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            include_family_licenses: { n: 2, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Request`;
    }
  },
  At = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.your_info || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [2, 3, 4, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            your_info: { n: 1, c: K },
            in_game: { n: 2, c: G, r: !0, q: !0 },
            played_recently: { n: 3, c: G, r: !0, q: !0 },
            played_ever: { n: 4, c: G, r: !0, q: !0 },
            owns: { n: 5, c: G, r: !0, q: !0 },
            in_wishlist: { n: 6, c: G, r: !0, q: !0 },
          },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response`;
    }
  },
  G = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            minutes_played: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo`;
    }
  },
  K = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            minutes_played: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            in_wishlist: { n: 4, br: d.readBool, bw: e.writeBool },
            owned: { n: 5, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo`;
    }
  },
  jt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTimeSSAAccepted_Request`;
    }
  },
  Mt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.time_ssa_accepted || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            time_ssa_accepted: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            time_ssa_updated: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            time_chinassa_accepted: {
              n: 3,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTimeSSAAccepted_Response`;
    }
  },
  Nt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.agreement_type || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            agreement_type: { n: 1, br: d.readEnum, bw: e.writeEnum },
            time_signed_utc: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AcceptSSA_Request`;
    }
  },
  Pt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AcceptSSA_Response`;
    }
  },
  q = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Request`;
    }
  },
  Ft = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.nicknames || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { nicknames: { n: 1, c: J, r: !0, q: !0 } },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response`;
    }
  },
  J = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readFixed32, bw: e.writeFixed32 },
            nickname: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response_PlayerNickname`;
    }
  },
  Y = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readFixed32, bw: e.writeFixed32 },
            nickname: { n: 2, br: d.readString, bw: e.writeString },
            notifications_showingame: { n: 3, br: d.readEnum, bw: e.writeEnum },
            notifications_showonline: { n: 4, br: d.readEnum, bw: e.writeEnum },
            notifications_showmessages: {
              n: 5,
              br: d.readEnum,
              bw: e.writeEnum,
            },
            sounds_showingame: { n: 6, br: d.readEnum, bw: e.writeEnum },
            sounds_showonline: { n: 7, br: d.readEnum, bw: e.writeEnum },
            sounds_showmessages: { n: 8, br: d.readEnum, bw: e.writeEnum },
            notifications_sendmobile: { n: 9, br: d.readEnum, bw: e.writeEnum },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `PerFriendPreferences`;
    }
  },
  It = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPerFriendPreferences_Request`;
    }
  },
  Lt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: Y, r: !0, q: !0 } },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPerFriendPreferences_Response`;
    }
  },
  Rt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { preferences: { n: 1, c: Y } } }),
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetPerFriendPreferences_Request`;
    }
  },
  zt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetPerFriendPreferences_Response`;
    }
  },
  Bt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AddFriend_Request`;
    }
  },
  Vt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_sent || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invite_sent: { n: 1, br: d.readBool, bw: e.writeBool },
            friend_relationship: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            result: { n: 3, br: d.readInt32, bw: e.writeInt32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AddFriend_Response`;
    }
  },
  Ht = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Request`;
    }
  },
  Ut = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.friend_relationship || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            friend_relationship: { n: 1, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Response`;
    }
  },
  Wt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            unignore: { n: 2, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Request`;
    }
  },
  Gt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.friend_relationship || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            friend_relationship: { n: 1, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Response`;
    }
  },
  X = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.parenthesize_nicknames || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            parenthesize_nicknames: {
              n: 4,
              d: !1,
              br: d.readBool,
              bw: e.writeBool,
            },
            text_filter_setting: { n: 5, br: d.readEnum, bw: e.writeEnum },
            text_filter_ignore_friends: {
              n: 6,
              d: !0,
              br: d.readBool,
              bw: e.writeBool,
            },
            text_filter_words_revision: {
              n: 7,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            timestamp_updated: { n: 3, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_CommunityPreferences`;
    }
  },
  Z = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityPreferences_Request`;
    }
  },
  Kt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: X },
            content_descriptor_preferences: { n: 2, c: s },
          },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityPreferences_Response`;
    }
  },
  qt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetCommunityPreferences_Request`;
    }
  },
  Jt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetCommunityPreferences_Response`;
    }
  },
  Q = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.text_filter_custom_banned_words || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            text_filter_custom_banned_words: {
              n: 1,
              r: !0,
              q: !0,
              br: d.readString,
              bw: e.writeRepeatedString,
            },
            text_filter_custom_clean_words: {
              n: 2,
              r: !0,
              q: !0,
              br: d.readString,
              bw: e.writeRepeatedString,
            },
            text_filter_words_revision: {
              n: 3,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_TextFilterWords`;
    }
  },
  Yt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTextFilterWords_Request`;
    }
  },
  Xt = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.words || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { words: { n: 1, c: Q } } }), e.sm_m
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTextFilterWords_Response`;
    }
  },
  Zt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { language: { n: 1, br: d.readInt32, bw: e.writeInt32 } },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNewSteamAnnouncementState_Request`;
    }
  },
  Qt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.state || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            state: { n: 1, br: d.readEnum, bw: e.writeEnum },
            announcement_headline: {
              n: 2,
              br: d.readString,
              bw: e.writeString,
            },
            announcement_url: { n: 3, br: d.readString, bw: e.writeString },
            time_posted: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            announcement_gid: {
              n: 5,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNewSteamAnnouncementState_Response`;
    }
  },
  $t = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.announcement_gid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            announcement_gid: {
              n: 1,
              br: d.readUint64String,
              bw: e.writeUint64String,
            },
            time_posted: { n: 2, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_UpdateSteamAnnouncementLastRead_Request`;
    }
  },
  en = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_UpdateSteamAnnouncementLastRead_Response`;
    }
  },
  $ = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.privacy_state || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            privacy_state: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            privacy_state_inventory: {
              n: 2,
              br: d.readInt32,
              bw: e.writeInt32,
            },
            privacy_state_gifts: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            privacy_state_ownedgames: {
              n: 4,
              br: d.readInt32,
              bw: e.writeInt32,
            },
            privacy_state_playtime: { n: 5, br: d.readInt32, bw: e.writeInt32 },
            privacy_state_friendslist: {
              n: 6,
              br: d.readInt32,
              bw: e.writeInt32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPrivacySettings`;
    }
  },
  tn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), f.Message.initialize(this, e, 0, -1, void 0, null));
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPrivacySettings_Request`;
    }
  },
  nn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_settings || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPrivacySettings_Response`;
    }
  },
  rn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: d.readUint32, bw: e.writeUint32 } },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetDurationControl_Request`;
    }
  },
  an = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.is_enabled || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_enabled: { n: 1, br: d.readBool, bw: e.writeBool },
            seconds: { n: 2, br: d.readInt32, bw: e.writeInt32 },
            seconds_today: { n: 3, br: d.readInt32, bw: e.writeInt32 },
            is_steamchina_account: { n: 4, br: d.readBool, bw: e.writeBool },
            is_age_verified: { n: 5, br: d.readBool, bw: e.writeBool },
            seconds_allowed_today: {
              n: 6,
              br: d.readUint32,
              bw: e.writeUint32,
            },
            age_verification_pending: { n: 7, br: d.readBool, bw: e.writeBool },
            block_minors: { n: 8, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetDurationControl_Response`;
    }
  },
  on = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
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
              br: d.readFixed64String,
              bw: e.writeFixed64String,
            },
            appid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            language: { n: 3, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Request`;
    }
  },
  sn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.level || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            level: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            persona_name: { n: 2, br: d.readString, bw: e.writeString },
            avatar_hash: { n: 3, br: d.readString, bw: e.writeString },
            nickname: { n: 4, br: d.readString, bw: e.writeString },
            favorite_badge: { n: 5, c: cn },
            playtime: { n: 6, c: ln },
            in_game: { n: 7, c: dn },
            mini_profile_background: { n: 8, c: x },
            avatar_frame: { n: 9, c: x },
            animated_avatar: { n: 10, c: x },
            golden_profile_appid: {
              n: 11,
              br: d.readUint32,
              bw: e.writeUint32,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response`;
    }
  },
  cn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.badgeid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            badgeid: { n: 1, br: d.readUint32, bw: e.writeUint32 },
            appid: { n: 2, br: d.readUint32, bw: e.writeUint32 },
            border_color: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            level: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            xp: { n: 5, br: d.readUint32, bw: e.writeUint32 },
            name: { n: 6, br: d.readString, bw: e.writeString },
            icon: { n: 7, br: d.readString, bw: e.writeString },
            game_name: { n: 8, br: d.readString, bw: e.writeString },
            completion_time: { n: 9, br: d.readUint32, bw: e.writeUint32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_FavoriteBadge`;
    }
  },
  ln = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.playtime_2weeks || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            playtime_2weeks: { n: 1, br: d.readInt32, bw: e.writeInt32 },
            playtime_forever: { n: 2, br: d.readInt32, bw: e.writeInt32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_Playtime`;
    }
  },
  un = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.key || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            key: { n: 1, br: d.readString, bw: e.writeString },
            value: { n: 2, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_RichPresenceKey`;
    }
  },
  dn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.is_non_steam || o(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_non_steam: { n: 1, br: d.readBool, bw: e.writeBool },
            name: { n: 2, br: d.readString, bw: e.writeString },
            appid: { n: 3, br: d.readUint32, bw: e.writeUint32 },
            rich_presence: { n: 4, c: un, r: !0, q: !0 },
            os_type: { n: 5, br: d.readInt32, bw: e.writeInt32 },
            gaming_device_type: { n: 6, br: d.readInt32, bw: e.writeInt32 },
            device_name: { n: 7, br: d.readString, bw: e.writeString },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_InGame`;
    }
  },
  fn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games || o(e.M()),
        f.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_LastPlayedTimes_Notification`;
    }
  },
  pn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readFixed32, bw: e.writeFixed32 },
            nickname: { n: 2, br: d.readString, bw: e.writeString },
            is_echo_to_self: { n: 3, br: d.readBool, bw: e.writeBool },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_FriendNicknameChanged_Notification`;
    }
  },
  mn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readFixed32, bw: e.writeFixed32 },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_FriendEquippedProfileItemsChanged_Notification`;
    }
  },
  hn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.state || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            state: { n: 1, br: d.readEnum, bw: e.writeEnum },
            announcement_headline: {
              n: 2,
              br: d.readString,
              bw: e.writeString,
            },
            announcement_url: { n: 3, br: d.readString, bw: e.writeString },
            time_posted: { n: 4, br: d.readUint32, bw: e.writeUint32 },
            announcement_gid: {
              n: 5,
              br: d.readUint64String,
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_NewSteamAnnouncementState_Notification`;
    }
  },
  gn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.preferences || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferences: { n: 1, c: X },
            content_descriptor_preferences: { n: 2, c: s },
          },
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_CommunityPreferencesChanged_Notification`;
    }
  },
  _n = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.words || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { words: { n: 1, c: Q } } }), e.sm_m
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
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_TextFilterWordsChanged_Notification`;
    }
  },
  vn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || o(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: d.readFixed32, bw: e.writeFixed32 },
            preferences: { n: 2, c: Y },
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
      return c(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return i(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      u(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_PerFriendPreferencesChanged_Notification`;
    }
  },
  yn = class e extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_settings || o(e.M()),
        f.Message.initialize(this, t, 0, -1, void 0, null));
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
      return ((e.sm_mbf ||= a(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return c(e.M(), t);
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
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      u(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new f.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_PrivacySettingsChanged_Notification`;
    }
  },
  bn;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(
      `Player.GetRecentPlaytimeSessionsForChild#1`,
      t(ee, n, r),
      te,
      { bConstMethod: !0, ePrivilege: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetRecentPlaytimeSessionsForChild = n;
  function r(e, n, r) {
    return e.SendMsg(`Player.GetPlayerLinkDetails#1`, t(ie, n, r), ae, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetPlayerLinkDetails = r;
  function i(e, n, r) {
    return e.SendMsg(
      `Player.GetMutualFriendsForIncomingInvites#1`,
      t(se, n, r),
      ce,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetMutualFriendsForIncomingInvites = i;
  function a(e, n, r) {
    return e.SendMsg(`Player.GetOwnedGames#1`, t(le, n, r), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetOwnedGames = a;
  function o(e, n, r) {
    return e.SendMsg(`Player.GetPlayNext#1`, t(de, n, r), fe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPlayNext = o;
  function s(e, n, r) {
    return e.SendMsg(`Player.GetFriendsGameplayInfo#1`, t(kt, n, r), At, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetFriendsGameplayInfo = s;
  function c(e, n, r) {
    return e.SendMsg(`Player.GetGameBadgeLevels#1`, t(he, n, r), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetGameBadgeLevels = c;
  function l(e, n, r) {
    return e.SendMsg(`Player.GetProfileBackground#1`, t(_e, n, r), ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileBackground = l;
  function u(e, n, r) {
    return e.SendMsg(`Player.SetProfileBackground#1`, t(ye, n, r), be, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetProfileBackground = u;
  function d(e, n, r) {
    return e.SendMsg(`Player.GetMiniProfileBackground#1`, t(xe, n, r), Se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMiniProfileBackground = d;
  function f(e, n, r) {
    return e.SendMsg(`Player.SetMiniProfileBackground#1`, t(Ce, n, r), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetMiniProfileBackground = f;
  function p(e, n, r) {
    return e.SendMsg(`Player.GetAvatarFrame#1`, t(Te, n, r), Ee, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAvatarFrame = p;
  function m(e, n, r) {
    return e.SendMsg(`Player.SetAvatarFrame#1`, t(De, n, r), Oe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetAvatarFrame = m;
  function oe(e, n, r) {
    return e.SendMsg(`Player.GetAnimatedAvatar#1`, t(ke, n, r), Ae, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAnimatedAvatar = oe;
  function h(e, n, r) {
    return e.SendMsg(`Player.SetAnimatedAvatar#1`, t(je, n, r), Me, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.SetAnimatedAvatar = h;
  function g(e, n, r) {
    return e.SendMsg(`Player.GetSteamDeckKeyboardSkin#1`, t(Ne, n, r), Pe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetSteamDeckKeyboardSkin = g;
  function _(e, n, r) {
    return e.SendMsg(`Player.SetSteamDeckKeyboardSkin#1`, t(Fe, n, r), Ie, {
      ePrivilege: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.SetSteamDeckKeyboardSkin = _;
  function v(e, n, r) {
    return e.SendMsg(`Player.GetProfileItemsOwned#1`, t(Le, n, r), Re, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetProfileItemsOwned = v;
  function y(e, n, r) {
    return e.SendMsg(`Player.GetProfileItemsEquipped#1`, t(ze, n, r), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetProfileItemsEquipped = y;
  function b(e, n, r) {
    return e.SendMsg(`Player.SetEquippedProfileItemFlags#1`, t(Ve, n, r), He, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetEquippedProfileItemFlags = b;
  function x(e, n, r) {
    return e.SendMsg(`Player.GetEmoticonList#1`, t(Ue, n, r), We, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetEmoticonList = x;
  function S(e, n, r) {
    return e.SendMsg(`Player.GetCommunityBadgeProgress#1`, t(Ge, n, r), Ke, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetCommunityBadgeProgress = S;
  function C(e, n, r) {
    return e.SendMsg(`Player.GetTopAchievementsForGames#1`, t(Qe, n, r), $e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetTopAchievementsForGames = C;
  function w(e, n, r) {
    return e.SendMsg(`Player.GetAchievementsProgress#1`, t(nt, n, r), rt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetAchievementsProgress = w;
  function E(e, n, r) {
    return e.SendMsg(`Player.GetGameAchievements#1`, t(ot, n, r), st, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetGameAchievements = E;
  function D(e, n, r) {
    return e.SendMsg(`Player.GetUserAchievements#1`, t(ct, n, r), lt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserAchievements = D;
  function O(e, n, r) {
    return e.SendMsg(
      `Player.GetGlobalAchievementPercentages#1`,
      t(ut, n, r),
      dt,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetGlobalAchievementPercentages = O;
  function k(e, n, r) {
    return e.SendMsg(
      `Player.GetGamesWithAchievementProgress#1`,
      t(it, n, r),
      at,
      { bConstMethod: !0, ePrivilege: 2, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetGamesWithAchievementProgress = k;
  function A(e, n, r) {
    return e.SendMsg(`Player.GetUserStats#1`, t(et, n, r), tt, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  e.GetUserStats = A;
  function j(e, n, r) {
    return e.SendMsg(`Player.GetFavoriteBadge#1`, t(pt, n, r), mt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetFavoriteBadge = j;
  function M(e, n, r) {
    return e.SendMsg(`Player.SetFavoriteBadge#1`, t(ht, n, r), gt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetFavoriteBadge = M;
  function N(e, n, r) {
    return e.SendMsg(`Player.GetProfileCustomization#1`, t(_t, n, r), vt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileCustomization = N;
  function P(e, n, r) {
    return e.SendMsg(
      `Player.GetPurchasedProfileCustomizations#1`,
      t(yt, n, r),
      bt,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPurchasedProfileCustomizations = P;
  function F(e, n, r) {
    return e.SendMsg(
      `Player.GetPurchasedAndUpgradedProfileCustomizations#1`,
      t(xt, n, r),
      St,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetPurchasedAndUpgradedProfileCustomizations = F;
  function ft(e, n, r) {
    return e.SendMsg(`Player.GetProfileThemesAvailable#1`, t(Ct, n, r), wt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetProfileThemesAvailable = ft;
  function I(e, n, r) {
    return e.SendMsg(`Player.SetProfileTheme#1`, t(Tt, n, r), Et, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetProfileTheme = I;
  function L(e, n, r) {
    return e.SendMsg(`Player.SetProfilePreferences#1`, t(Dt, n, r), Ot, {
      ePrivilege: 1,
    });
  }
  e.SetProfilePreferences = L;
  function R(e, n, r) {
    return e.SendMsg(`Player.PostStatusToFriends#1`, t(T, n, r), qe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`all`],
    });
  }
  e.PostStatusToFriends = R;
  function z(e, n, r) {
    return e.SendMsg(`Player.GetPostedStatus#1`, t(Je, n, r), Ye, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPostedStatus = z;
  function B(e, n, r) {
    return e.SendMsg(`Player.DeletePostedStatus#1`, t(Xe, n, r), Ze, {
      ePrivilege: 1,
    });
  }
  e.DeletePostedStatus = B;
  function V(e, n, r) {
    return e.SendMsg(`Player.ClientGetLastPlayedTimes#1`, t(ne, n, r), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.ClientGetLastPlayedTimes = V;
  function H(e, n, r) {
    return e.SendMsg(`Player.GetTimeSSAAccepted#1`, t(jt, n, r), Mt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeSSAAccepted = H;
  function U(e, n, r) {
    return e.SendMsg(`Player.AcceptSSA#1`, t(Nt, n, r), Pt, { ePrivilege: 1 });
  }
  e.AcceptSSA = U;
  function W(e, n, r) {
    return e.SendMsg(`Player.GetNicknameList#1`, t(q, n, r), Ft, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetNicknameList = W;
  function G(e, n, r) {
    return e.SendMsg(`Player.GetPerFriendPreferences#1`, t(It, n, r), Lt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPerFriendPreferences = G;
  function K(e, n, r) {
    return e.SendMsg(`Player.SetPerFriendPreferences#1`, t(Rt, n, r), zt, {
      ePrivilege: 1,
    });
  }
  e.SetPerFriendPreferences = K;
  function J(e, n, r) {
    return e.SendMsg(`Player.AddFriend#1`, t(Bt, n, r), Vt, { ePrivilege: 1 });
  }
  e.AddFriend = J;
  function Y(e, n, r) {
    return e.SendMsg(`Player.RemoveFriend#1`, t(Ht, n, r), Ut, {
      ePrivilege: 1,
    });
  }
  e.RemoveFriend = Y;
  function X(e, n, r) {
    return e.SendMsg(`Player.IgnoreFriend#1`, t(Wt, n, r), Gt, {
      ePrivilege: 1,
    });
  }
  e.IgnoreFriend = X;
  function Q(e, n, r) {
    return e.SendMsg(`Player.GetCommunityPreferences#1`, t(Z, n, r), Kt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetCommunityPreferences = Q;
  function $(e, n, r) {
    return e.SendMsg(`Player.SetCommunityPreferences#1`, t(qt, n, r), Jt, {
      ePrivilege: 1,
    });
  }
  e.SetCommunityPreferences = $;
  function cn(e, n, r) {
    return e.SendMsg(`Player.GetTextFilterWords#1`, t(Yt, n, r), Xt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetTextFilterWords = cn;
  function ln(e, n, r) {
    return e.SendMsg(`Player.GetNewSteamAnnouncementState#1`, t(Zt, n, r), Qt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNewSteamAnnouncementState = ln;
  function un(e, n, r) {
    return e.SendMsg(
      `Player.UpdateSteamAnnouncementLastRead#1`,
      t($t, n, r),
      en,
      { ePrivilege: 1 },
    );
  }
  e.UpdateSteamAnnouncementLastRead = un;
  function dn(e, n, r) {
    return e.SendMsg(`Player.GetPrivacySettings#1`, t(tn, n, r), nn, {
      ePrivilege: 1,
    });
  }
  e.GetPrivacySettings = dn;
  function fn(e, n, r) {
    return e.SendMsg(`Player.GetDurationControl#1`, t(rn, n, r), an, {
      ePrivilege: 1,
    });
  }
  e.GetDurationControl = fn;
  function pn(e, n, r) {
    return e.SendMsg(`Player.RecordDisconnectedPlaytime#1`, t(pe, n, r), me, {
      ePrivilege: 1,
    });
  }
  e.RecordDisconnectedPlaytime = pn;
  function mn(e, n, r) {
    return e.SendMsg(`Player.GetMiniprofileData#1`, t(on, n, r), sn, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMiniprofileData = mn;
})((bn ||= {}));
var xn;
(function (e) {
  ((e.NotifyLastPlayedTimesHandler = {
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
    }));
})((xn ||= {}));
export { T as a, bn as c, Yt as i, Z as n, Q as o, q as r, xn as s, X as t };
