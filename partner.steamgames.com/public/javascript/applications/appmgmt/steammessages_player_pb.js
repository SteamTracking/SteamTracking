/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  Gt as e,
  Ht as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  Zt as c,
  bt as l,
  qt as u,
  sn as d,
} from "./chunk~de7f2df91c.js";
var f = d(c(), 1),
  ee = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Request`;
    }
  },
  te = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.sessions || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { sessions: { n: 1, c: p, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetRecentPlaytimeSessionsForChild_Response`;
    }
  },
  p = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.time_start || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            time_start: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            time_end: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            appid: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            device_type: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            disconnected: { n: 5, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.min_last_played || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            min_last_played: { n: 1, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Request`;
    }
  },
  re = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.games || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { games: { n: 1, c: m, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetLastPlayedTimes_Response`;
    }
  },
  m = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            last_playtime: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            playtime_2weeks: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            playtime_forever: { n: 4, br: r.readInt32, bw: o.writeInt32 },
            first_playtime: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            playtime_windows_forever: {
              n: 6,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            playtime_mac_forever: { n: 7, br: r.readInt32, bw: o.writeInt32 },
            playtime_linux_forever: { n: 8, br: r.readInt32, bw: o.writeInt32 },
            playtime_deck_forever: { n: 16, br: r.readInt32, bw: o.writeInt32 },
            first_windows_playtime: {
              n: 9,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            first_mac_playtime: { n: 10, br: r.readUint32, bw: o.writeUint32 },
            first_linux_playtime: {
              n: 11,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            first_deck_playtime: { n: 17, br: r.readUint32, bw: o.writeUint32 },
            last_windows_playtime: {
              n: 12,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            last_mac_playtime: { n: 13, br: r.readUint32, bw: o.writeUint32 },
            last_linux_playtime: { n: 14, br: r.readUint32, bw: o.writeUint32 },
            last_deck_playtime: { n: 18, br: r.readUint32, bw: o.writeUint32 },
            playtime_disconnected: {
              n: 15,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamids || i(t.M()),
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
              br: r.readUint64String,
              pbr: r.readPackedUint64String,
              bw: o.writeRepeatedUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Request`;
    }
  },
  ae = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accounts || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { accounts: { n: 1, c: oe, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response`;
    }
  },
  oe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.public_data || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { public_data: { n: 1, c: h }, private_data: { n: 2, c: g } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails`;
    }
  },
  h = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            visibility_state: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            privacy_state: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            profile_state: { n: 4, br: r.readInt32, bw: o.writeInt32 },
            ban_expires_time: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            account_flags: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            sha_digest_avatar: { n: 9, br: r.readBytes, bw: o.writeBytes },
            persona_name: { n: 10, br: r.readString, bw: o.writeString },
            profile_url: { n: 11, br: r.readString, bw: o.writeString },
            content_country_restricted: {
              n: 12,
              br: r.readBool,
              bw: o.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.persona_state || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            persona_state: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            persona_state_flags: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            time_created: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            game_id: {
              n: 4,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            game_server_steam_id: {
              n: 5,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            game_server_ip_address: {
              n: 6,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            game_server_port: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            game_extra_info: { n: 8, br: r.readString, bw: o.writeString },
            account_name: { n: 9, br: r.readString, bw: o.writeString },
            lobby_steam_id: {
              n: 10,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            rich_presence_kv: { n: 11, br: r.readString, bw: o.writeString },
            broadcast_session_id: {
              n: 12,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            watching_broadcast_accountid: {
              n: 13,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            watching_broadcast_appid: {
              n: 14,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            watching_broadcast_viewers: {
              n: 15,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            watching_broadcast_title: {
              n: 16,
              br: r.readString,
              bw: o.writeString,
            },
            last_logoff_time: { n: 17, br: r.readUint32, bw: o.writeUint32 },
            last_seen_online: { n: 18, br: r.readUint32, bw: o.writeUint32 },
            game_os_type: { n: 19, br: r.readInt32, bw: o.writeInt32 },
            game_device_type: { n: 20, br: r.readInt32, bw: o.writeInt32 },
            game_device_name: { n: 21, br: r.readString, bw: o.writeString },
            game_is_private: { n: 22, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            mutual_friend_account_ids: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IncomingInviteMutualFriendList`;
    }
  },
  ce = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.incoming_invite_mutual_friends_lists || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            incoming_invite_mutual_friends_lists: { n: 1, c: _, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMutualFriendsForIncomingInvites_Response`;
    }
  },
  le = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            include_appinfo: { n: 2, br: r.readBool, bw: o.writeBool },
            include_played_free_games: {
              n: 3,
              br: r.readBool,
              bw: o.writeBool,
            },
            appids_filter: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            include_free_sub: { n: 5, br: r.readBool, bw: o.writeBool },
            skip_unvetted_apps: {
              n: 6,
              d: !0,
              br: r.readBool,
              bw: o.writeBool,
            },
            language: { n: 7, br: r.readString, bw: o.writeString },
            include_extended_appinfo: { n: 8, br: r.readBool, bw: o.writeBool },
            include_family_licenses: { n: 9, br: r.readBool, bw: o.writeBool },
            include_all_free_games: { n: 10, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.game_count || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_count: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            games: { n: 2, c: v, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [18], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            name: { n: 2, br: r.readString, bw: o.writeString },
            playtime_2weeks: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            playtime_forever: { n: 4, br: r.readInt32, bw: o.writeInt32 },
            img_icon_url: { n: 5, br: r.readString, bw: o.writeString },
            has_community_visible_stats: {
              n: 7,
              br: r.readBool,
              bw: o.writeBool,
            },
            playtime_windows_forever: {
              n: 8,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            playtime_mac_forever: { n: 9, br: r.readInt32, bw: o.writeInt32 },
            playtime_linux_forever: {
              n: 10,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            playtime_deck_forever: { n: 20, br: r.readInt32, bw: o.writeInt32 },
            rtime_last_played: { n: 11, br: r.readUint32, bw: o.writeUint32 },
            capsule_filename: { n: 12, br: r.readString, bw: o.writeString },
            sort_as: { n: 13, br: r.readString, bw: o.writeString },
            has_workshop: { n: 14, br: r.readBool, bw: o.writeBool },
            has_market: { n: 15, br: r.readBool, bw: o.writeBool },
            has_dlc: { n: 16, br: r.readBool, bw: o.writeBool },
            has_leaderboards: { n: 17, br: r.readBool, bw: o.writeBool },
            content_descriptorids: {
              n: 18,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            playtime_disconnected: { n: 19, br: r.readInt32, bw: o.writeInt32 },
            family_shared: { n: 21, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.max_age_seconds || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            max_age_seconds: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            ignore_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.last_update_time || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            last_update_time: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            appids: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPlayNext_Response`;
    }
  },
  pe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.play_sessions || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { play_sessions: { n: 3, c: y, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RecordDisconnectedPlaytime_Request`;
    }
  },
  y = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            session_time_start: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            seconds: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            offline: { n: 4, br: r.readBool, bw: o.writeBool },
            owner: { n: 5, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: o.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.player_level || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            player_level: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            badges: { n: 2, c: b, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.level || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            level: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            series: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            border_color: { n: 3, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            image_small: { n: 2, br: r.readString, bw: o.writeString },
            image_large: { n: 3, br: r.readString, bw: o.writeString },
            name: { n: 4, br: r.readString, bw: o.writeString },
            item_title: { n: 5, br: r.readString, bw: o.writeString },
            item_description: { n: 6, br: r.readString, bw: o.writeString },
            appid: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            item_type: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            item_class: { n: 9, br: r.readUint32, bw: o.writeUint32 },
            movie_webm: { n: 10, br: r.readString, bw: o.writeString },
            movie_mp4: { n: 11, br: r.readString, bw: o.writeString },
            movie_webm_small: { n: 13, br: r.readString, bw: o.writeString },
            movie_mp4_small: { n: 14, br: r.readString, bw: o.writeString },
            equipped_flags: { n: 12, br: r.readUint32, bw: o.writeUint32 },
            profile_colors: { n: 15, c: S, r: !0, q: !0 },
            tiled: { n: 16, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.style_name || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            style_name: { n: 1, br: r.readString, bw: o.writeString },
            color: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Request`;
    }
  },
  ve = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_background || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { profile_background: { n: 1, c: x } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileBackground_Response`;
    }
  },
  ye = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Request`;
    }
  },
  Se = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_background || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { profile_background: { n: 1, c: x } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniProfileBackground_Response`;
    }
  },
  Ce = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Request`;
    }
  },
  Ee = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.avatar_frame || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { avatar_frame: { n: 1, c: x } } }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAvatarFrame_Response`;
    }
  },
  De = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Request`;
    }
  },
  Ae = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.avatar || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { avatar: { n: 1, c: x } } }), t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAnimatedAvatar_Response`;
    }
  },
  je = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Request`;
    }
  },
  Pe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steam_deck_keyboard_skin || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { steam_deck_keyboard_skin: { n: 1, c: x } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetSteamDeckKeyboardSkin_Response`;
    }
  },
  Fe = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.language || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            language: { n: 1, br: r.readString, bw: o.writeString },
            filters: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readEnum,
              pbr: r.readPackedEnum,
              bw: o.writeRepeatedEnum,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Request`;
    }
  },
  Re = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_backgrounds || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
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
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsOwned_Response`;
    }
  },
  ze = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            language: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Request`;
    }
  },
  Be = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_background || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            profile_background: { n: 1, c: x },
            mini_profile_background: { n: 2, c: x },
            avatar_frame: { n: 3, c: x },
            animated_avatar: { n: 4, c: x },
            profile_modifier: { n: 5, c: x },
            steam_deck_keyboard_skin: { n: 6, c: x },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileItemsEquipped_Response`;
    }
  },
  Ve = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            flags: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  We = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.emoticons || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { emoticons: { n: 1, c: C, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetEmoticonList_Response`;
    }
  },
  C = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: r.readString, bw: o.writeString },
            count: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            time_last_used: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            use_count: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            time_received: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            appid: { n: 6, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            badgeid: { n: 2, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Request`;
    }
  },
  Ke = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.quests || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { quests: { n: 1, c: w, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityBadgeProgress_Response`;
    }
  },
  w = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.questid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            questid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            completed: { n: 2, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            status_text: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            postid: { n: 2, br: r.readUint64String, bw: o.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            postid: { n: 2, br: r.readUint64String, bw: o.writeUint64String },
            status_text: { n: 3, br: r.readString, bw: o.writeString },
            deleted: { n: 4, br: r.readBool, bw: o.writeBool },
            appid: { n: 5, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.postid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            postid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            language: { n: 2, br: r.readString, bw: o.writeString },
            max_achievements: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            appids: {
              n: 4,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Request`;
    }
  },
  $e = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.games || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { games: { n: 1, c: D, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTopAchievementsForGames_Response`;
    }
  },
  E = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.statid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            statid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            bit: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            name: { n: 3, br: r.readString, bw: o.writeString },
            desc: { n: 4, br: r.readString, bw: o.writeString },
            icon: { n: 5, br: r.readString, bw: o.writeString },
            icon_gray: { n: 6, br: r.readString, bw: o.writeString },
            hidden: { n: 7, br: r.readBool, bw: o.writeBool },
            player_percent_unlocked: {
              n: 8,
              br: r.readString,
              bw: o.writeString,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            total_achievements: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            achievements: { n: 3, c: E, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            appid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            sha_schema: { n: 3, br: r.readBytes, bw: o.writeBytes },
            crc_stats: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            crc_schema: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            app_running: { n: 6, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.sha_schema || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            sha_schema: { n: 1, br: r.readBytes, bw: o.writeBytes },
            crc_stats: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            schema: { n: 3, br: r.readBytes, bw: o.writeBytes },
            stats: { n: 4, c: k, r: !0, q: !0 },
            crc_schema: { n: 5, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.achievement_bit || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            achievement_bit: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            unlock_time: { n: 2, br: r.readFixed32, bw: o.writeFixed32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.stat_id || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            stat_id: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            stat_value: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            unlock_times: { n: 3, c: O, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            language: { n: 2, br: r.readString, bw: o.writeString },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            include_unvetted_apps: { n: 4, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Request`;
    }
  },
  rt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.achievement_progress || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { achievement_progress: { n: 1, c: A, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetAchievementsProgress_Response`;
    }
  },
  A = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            unlocked: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            total: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            percentage: { n: 4, br: r.readFloat, bw: o.writeFloat },
            all_unlocked: { n: 5, br: r.readBool, bw: o.writeBool },
            cache_time: { n: 6, br: r.readUint32, bw: o.writeUint32 },
            vetted: { n: 7, br: r.readBool, bw: o.writeBool },
            groups_completed_base: {
              n: 8,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            groups_total_base: { n: 9, br: r.readUint32, bw: o.writeUint32 },
            groups_completed_dlc: {
              n: 10,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            groups_total_dlc: { n: 11, br: r.readUint32, bw: o.writeUint32 },
            base_game_total: { n: 12, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            skip_unvetted_apps: {
              n: 2,
              d: !1,
              br: r.readBool,
              bw: o.writeBool,
            },
            language: { n: 3, br: r.readString, bw: o.writeString },
            include_groups_without_progress: {
              n: 4,
              d: !1,
              br: r.readBool,
              bw: o.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Request`;
    }
  },
  at = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groups || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { groups: { n: 1, c: j, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGamesWithAchievementProgress_Response`;
    }
  },
  j = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            groupid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            dlcappid: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            localized_name: { n: 4, br: r.readString, bw: o.writeString },
            completion_achievements: {
              n: 5,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            completed_achievements: {
              n: 6,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            is_achievable: { n: 7, br: r.readBool, bw: o.writeBool },
            is_completed: { n: 8, br: r.readBool, bw: o.writeBool },
            time_completed: { n: 9, br: r.readFixed32, bw: o.writeFixed32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            language: { n: 2, br: r.readString, bw: o.writeString },
            hash_only: { n: 3, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.achievements || i(t.M()),
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
            schema_version: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            groups: { n: 3, c: N, r: !0, q: !0 },
            schema_hash: { n: 4, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.internal_name || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_name: { n: 1, br: r.readString, bw: o.writeString },
            localized_name: { n: 2, br: r.readString, bw: o.writeString },
            localized_desc: { n: 3, br: r.readString, bw: o.writeString },
            icon: { n: 4, br: r.readString, bw: o.writeString },
            icon_gray: { n: 5, br: r.readString, bw: o.writeString },
            hidden: { n: 6, br: r.readBool, bw: o.writeBool },
            player_percent_unlocked: {
              n: 7,
              br: r.readString,
              bw: o.writeString,
            },
            internal_key: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            min_progress_int: { n: 9, br: r.readInt32, bw: o.writeInt32 },
            max_progress_int: { n: 10, br: r.readInt32, bw: o.writeInt32 },
            groupid: { n: 11, br: r.readUint32, bw: o.writeUint32 },
            archived: { n: 12, br: r.readBool, bw: o.writeBool },
            progress_type: { n: 13, br: r.readEnum, bw: o.writeEnum },
            min_progress_float: { n: 14, br: r.readFloat, bw: o.writeFloat },
            max_progress_float: { n: 15, br: r.readFloat, bw: o.writeFloat },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.groupid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            localized_name: { n: 2, br: r.readString, bw: o.writeString },
            dlcappid: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            archived: { n: 4, br: r.readBool, bw: o.writeBool },
            developeronly: { n: 5, br: r.readBool, bw: o.writeBool },
            order: { n: 6, br: r.readUint32, bw: o.writeUint32 },
            ispublic: { n: 7, br: r.readBool, bw: o.writeBool },
            total_achievements: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            completion_achievements: {
              n: 9,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
            appid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.achievements || i(t.M()),
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
            schema_version: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            schema_hash: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            groups: { n: 4, c: F, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.internal_key || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_key: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            unlocked: { n: 2, br: r.readBool, bw: o.writeBool },
            unlock_time: { n: 3, br: r.readFixed32, bw: o.writeFixed32 },
            progress_int: { n: 4, br: r.readInt32, bw: o.writeInt32 },
            progress_float: { n: 5, br: r.readFloat, bw: o.writeFloat },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.groupid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            is_achievable: { n: 2, br: r.readBool, bw: o.writeBool },
            completed_achievements: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            is_completed: { n: 4, br: r.readBool, bw: o.writeBool },
            time_completed: { n: 9, br: r.readFixed32, bw: o.writeFixed32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: o.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Request`;
    }
  },
  dt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.achievements || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            achievements: { n: 1, c: I, r: !0, q: !0 },
            groups: { n: 2, c: L, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response`;
    }
  },
  I = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.internal_key || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            internal_key: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            player_percent_unlocked: {
              n: 2,
              br: r.readFloat,
              bw: o.writeFloat,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Achievement`;
    }
  },
  L = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groupid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            player_percent_completed: {
              n: 2,
              br: r.readFloat,
              bw: o.writeFloat,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetGlobalAchievementPercentages_Response_Group`;
    }
  },
  ft = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: { n: 1, br: r.readUint64String, bw: o.writeUint64String },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Request`;
    }
  },
  pt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.has_favorite_badge || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            has_favorite_badge: { n: 1, br: r.readBool, bw: o.writeBool },
            badgeid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            communityitemid: {
              n: 3,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            item_type: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            border_color: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            appid: { n: 6, br: r.readUint32, bw: o.writeUint32 },
            level: { n: 7, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFavoriteBadge_Response`;
    }
  },
  mt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.communityitemid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            badgeid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetFavoriteBadge_Request`;
    }
  },
  ht = class e extends f.Message {
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
  R = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.slot || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            slot: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            appid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            publishedfileid: {
              n: 3,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            item_assetid: {
              n: 4,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            item_contextid: {
              n: 5,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            notes: { n: 6, br: r.readString, bw: o.writeString },
            title: { n: 7, br: r.readString, bw: o.writeString },
            accountid: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            badgeid: { n: 9, br: r.readUint32, bw: o.writeUint32 },
            border_color: { n: 10, br: r.readUint32, bw: o.writeUint32 },
            item_classid: {
              n: 11,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            item_instanceid: {
              n: 12,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            ban_check_result: { n: 13, br: r.readEnum, bw: o.writeEnum },
            replay_year: { n: 14, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileCustomizationSlot`;
    }
  },
  z = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            large: { n: 2, br: r.readBool, bw: o.writeBool },
            slots: { n: 3, c: R, r: !0, q: !0 },
            active: { n: 4, br: r.readBool, bw: o.writeBool },
            customization_style: { n: 5, br: r.readEnum, bw: o.writeEnum },
            purchaseid: {
              n: 6,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            level: { n: 7, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileCustomization`;
    }
  },
  B = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.theme_id || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            theme_id: { n: 1, br: r.readString, bw: o.writeString },
            title: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfileTheme`;
    }
  },
  V = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.hide_profile_awards || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            hide_profile_awards: { n: 1, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `ProfilePreferences`;
    }
  },
  gt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            include_inactive_customizations: {
              n: 2,
              br: r.readBool,
              bw: o.writeBool,
            },
            include_purchased_customizations: {
              n: 3,
              br: r.readBool,
              bw: o.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Request`;
    }
  },
  _t = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customizations || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customizations: { n: 1, c: z, r: !0, q: !0 },
            slots_available: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            profile_theme: { n: 3, c: B },
            purchased_customizations: { n: 4, c: H, r: !0, q: !0 },
            profile_preferences: { n: 5, c: V },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response`;
    }
  },
  H = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchaseid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            customization_type: { n: 2, br: r.readEnum, bw: o.writeEnum },
            level: { n: 3, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileCustomization_Response_PurchasedCustomization`;
    }
  },
  vt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Request`;
    }
  },
  yt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchased_customizations || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { purchased_customizations: { n: 1, c: U, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response`;
    }
  },
  U = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchaseid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            customization_type: { n: 2, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  bt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request`;
    }
  },
  xt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.purchased_customizations || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            purchased_customizations: { n: 1, c: W, r: !0, q: !0 },
            upgraded_customizations: { n: 2, c: G, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response`;
    }
  },
  W = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            count: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization`;
    }
  },
  G = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.customization_type || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            customization_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            level: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization`;
    }
  },
  St = class e extends f.Message {
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
  Ct = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_themes || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { profile_themes: { n: 1, c: B, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetProfileThemesAvailable_Response`;
    }
  },
  wt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.theme_id || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { theme_id: { n: 1, br: r.readString, bw: o.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfileTheme_Request`;
    }
  },
  Tt = class e extends f.Message {
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
  Et = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.profile_preferences || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { profile_preferences: { n: 1, c: V } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetProfilePreferences_Request`;
    }
  },
  Dt = class e extends f.Message {
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
  Ot = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            include_family_licenses: { n: 2, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Request`;
    }
  },
  kt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.your_info || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            your_info: { n: 1, c: q },
            in_game: { n: 2, c: K, r: !0, q: !0 },
            played_recently: { n: 3, c: K, r: !0, q: !0 },
            played_ever: { n: 4, c: K, r: !0, q: !0 },
            owns: { n: 5, c: K, r: !0, q: !0 },
            in_wishlist: { n: 6, c: K, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response`;
    }
  },
  K = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            minutes_played: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo`;
    }
  },
  q = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            minutes_played: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            minutes_played_forever: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            in_wishlist: { n: 4, br: r.readBool, bw: o.writeBool },
            owned: { n: 5, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo`;
    }
  },
  At = class e extends f.Message {
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
  jt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.time_ssa_accepted || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            time_ssa_accepted: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            time_ssa_updated: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            time_chinassa_accepted: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTimeSSAAccepted_Response`;
    }
  },
  Mt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.agreement_type || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            agreement_type: { n: 1, br: r.readEnum, bw: o.writeEnum },
            time_signed_utc: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AcceptSSA_Request`;
    }
  },
  Nt = class e extends f.Message {
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
  J = class e extends f.Message {
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
  Pt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.nicknames || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { nicknames: { n: 1, c: Y, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response`;
    }
  },
  Y = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readFixed32, bw: o.writeFixed32 },
            nickname: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetNicknameList_Response_PlayerNickname`;
    }
  },
  X = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readFixed32, bw: o.writeFixed32 },
            nickname: { n: 2, br: r.readString, bw: o.writeString },
            notifications_showingame: { n: 3, br: r.readEnum, bw: o.writeEnum },
            notifications_showonline: { n: 4, br: r.readEnum, bw: o.writeEnum },
            notifications_showmessages: {
              n: 5,
              br: r.readEnum,
              bw: o.writeEnum,
            },
            sounds_showingame: { n: 6, br: r.readEnum, bw: o.writeEnum },
            sounds_showonline: { n: 7, br: r.readEnum, bw: o.writeEnum },
            sounds_showmessages: { n: 8, br: r.readEnum, bw: o.writeEnum },
            notifications_sendmobile: { n: 9, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `PerFriendPreferences`;
    }
  },
  Ft = class e extends f.Message {
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
  It = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.preferences || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { preferences: { n: 1, c: X, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPerFriendPreferences_Response`;
    }
  },
  Lt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.preferences || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { preferences: { n: 1, c: X } } }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_SetPerFriendPreferences_Request`;
    }
  },
  Rt = class e extends f.Message {
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
  zt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AddFriend_Request`;
    }
  },
  Bt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.invite_sent || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            invite_sent: { n: 1, br: r.readBool, bw: o.writeBool },
            friend_relationship: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            result: { n: 3, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_AddFriend_Response`;
    }
  },
  Vt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Request`;
    }
  },
  Ht = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.friend_relationship || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            friend_relationship: { n: 1, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_RemoveFriend_Response`;
    }
  },
  Ut = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            unignore: { n: 2, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Request`;
    }
  },
  Wt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.friend_relationship || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            friend_relationship: { n: 1, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_IgnoreFriend_Response`;
    }
  },
  Z = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.parenthesize_nicknames || i(t.M()),
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
              br: r.readBool,
              bw: o.writeBool,
            },
            text_filter_setting: { n: 5, br: r.readEnum, bw: o.writeEnum },
            text_filter_ignore_friends: {
              n: 6,
              d: !0,
              br: r.readBool,
              bw: o.writeBool,
            },
            text_filter_words_revision: {
              n: 7,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            timestamp_updated: { n: 3, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_CommunityPreferences`;
    }
  },
  Gt = class e extends f.Message {
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
  Kt = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.preferences || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            preferences: { n: 1, c: Z },
            content_descriptor_preferences: { n: 2, c: t },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      n(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetCommunityPreferences_Response`;
    }
  },
  qt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.preferences || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { preferences: { n: 1, c: Z } } }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
        t.prototype.text_filter_custom_banned_words || i(t.M()),
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
              br: r.readString,
              bw: o.writeRepeatedString,
            },
            text_filter_custom_clean_words: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readString,
              bw: o.writeRepeatedString,
            },
            text_filter_words_revision: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  Xt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.words || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { words: { n: 1, c: Q } } }), t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetTextFilterWords_Response`;
    }
  },
  Zt = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.language || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { language: { n: 1, br: r.readInt32, bw: o.writeInt32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.state || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            state: { n: 1, br: r.readEnum, bw: o.writeEnum },
            announcement_headline: {
              n: 2,
              br: r.readString,
              bw: o.writeString,
            },
            announcement_url: { n: 3, br: r.readString, bw: o.writeString },
            time_posted: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            announcement_gid: {
              n: 5,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.announcement_gid || i(t.M()),
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
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            time_posted: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.privacy_state || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            privacy_state: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            privacy_state_inventory: {
              n: 2,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            privacy_state_gifts: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            privacy_state_ownedgames: {
              n: 4,
              br: r.readInt32,
              bw: o.writeInt32,
            },
            privacy_state_playtime: { n: 5, br: r.readInt32, bw: o.writeInt32 },
            privacy_state_friendslist: {
              n: 6,
              br: r.readInt32,
              bw: o.writeInt32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
  nn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.privacy_settings || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { privacy_settings: { n: 1, c: $ } } }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetPrivacySettings_Response`;
    }
  },
  rn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: r.readUint32, bw: o.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.is_enabled || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_enabled: { n: 1, br: r.readBool, bw: o.writeBool },
            seconds: { n: 2, br: r.readInt32, bw: o.writeInt32 },
            seconds_today: { n: 3, br: r.readInt32, bw: o.writeInt32 },
            is_steamchina_account: { n: 4, br: r.readBool, bw: o.writeBool },
            is_age_verified: { n: 5, br: r.readBool, bw: o.writeBool },
            seconds_allowed_today: {
              n: 6,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            age_verification_pending: { n: 7, br: r.readBool, bw: o.writeBool },
            block_minors: { n: 8, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.steamid || i(t.M()),
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
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            appid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            language: { n: 3, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.level || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            level: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            persona_name: { n: 2, br: r.readString, bw: o.writeString },
            avatar_hash: { n: 3, br: r.readString, bw: o.writeString },
            nickname: { n: 4, br: r.readString, bw: o.writeString },
            favorite_badge: { n: 5, c: cn },
            playtime: { n: 6, c: ln },
            in_game: { n: 7, c: dn },
            mini_profile_background: { n: 8, c: x },
            avatar_frame: { n: 9, c: x },
            animated_avatar: { n: 10, c: x },
            golden_profile_appid: {
              n: 11,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.badgeid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            badgeid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            appid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            border_color: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            level: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            xp: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            name: { n: 6, br: r.readString, bw: o.writeString },
            icon: { n: 7, br: r.readString, bw: o.writeString },
            game_name: { n: 8, br: r.readString, bw: o.writeString },
            completion_time: { n: 9, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.playtime_2weeks || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            playtime_2weeks: { n: 1, br: r.readInt32, bw: o.writeInt32 },
            playtime_forever: { n: 2, br: r.readInt32, bw: o.writeInt32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.key || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            key: { n: 1, br: r.readString, bw: o.writeString },
            value: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.is_non_steam || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            is_non_steam: { n: 1, br: r.readBool, bw: o.writeBool },
            name: { n: 2, br: r.readString, bw: o.writeString },
            appid: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            rich_presence: { n: 4, c: un, r: !0, q: !0 },
            os_type: { n: 5, br: r.readInt32, bw: o.writeInt32 },
            gaming_device_type: { n: 6, br: r.readInt32, bw: o.writeInt32 },
            device_name: { n: 7, br: r.readString, bw: o.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_GetMiniprofileData_Response_InGame`;
    }
  },
  fn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.games || i(t.M()),
        f.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { games: { n: 1, c: m, r: !0, q: !0 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_LastPlayedTimes_Notification`;
    }
  },
  pn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readFixed32, bw: o.writeFixed32 },
            nickname: { n: 2, br: r.readString, bw: o.writeString },
            is_echo_to_self: { n: 3, br: r.readBool, bw: o.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readFixed32, bw: o.writeFixed32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
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
        t.prototype.state || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            state: { n: 1, br: r.readEnum, bw: o.writeEnum },
            announcement_headline: {
              n: 2,
              br: r.readString,
              bw: o.writeString,
            },
            announcement_url: { n: 3, br: r.readString, bw: o.writeString },
            time_posted: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            announcement_gid: {
              n: 5,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_NewSteamAnnouncementState_Notification`;
    }
  },
  gn = class r extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        r.prototype.preferences || i(r.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (r.sm_m ||= {
          proto: r,
          fields: {
            preferences: { n: 1, c: Z },
            content_descriptor_preferences: { n: 2, c: t },
          },
        }),
        r.sm_m
      );
    }
    static MBF() {
      return ((r.sm_mbf ||= u(r.M())), r.sm_mbf);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return s(r.M(), e, t);
    }
    static fromObject(t) {
      return e(r.M(), t);
    }
    static deserializeBinary(e) {
      let t = new f.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return a(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {
      n(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (r.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_CommunityPreferencesChanged_Notification`;
    }
  },
  _n = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.words || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { words: { n: 1, c: Q } } }), t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_TextFilterWordsChanged_Notification`;
    }
  },
  vn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.accountid || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            accountid: { n: 1, br: r.readFixed32, bw: o.writeFixed32 },
            preferences: { n: 2, c: X },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlayer_PerFriendPreferencesChanged_Notification`;
    }
  },
  yn = class t extends f.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.privacy_settings || i(t.M()),
        f.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= { proto: t, fields: { privacy_settings: { n: 1, c: $ } } }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= u(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return s(t.M(), e, n);
    }
    static fromObject(n) {
      return e(t.M(), n);
    }
    static deserializeBinary(e) {
      let n = new f.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, r) {
      n(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new f.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
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
      l(ee, t, n),
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
    return e.SendMsg(`Player.GetPlayerLinkDetails#1`, l(ie, t, n), ae, {
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
      l(se, t, n),
      ce,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetMutualFriendsForIncomingInvites = r;
  function i(e, t, n) {
    return e.SendMsg(`Player.GetOwnedGames#1`, l(le, t, n), ue, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetOwnedGames = i;
  function a(e, t, n) {
    return e.SendMsg(`Player.GetPlayNext#1`, l(de, t, n), fe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPlayNext = a;
  function o(e, t, n) {
    return e.SendMsg(`Player.GetFriendsGameplayInfo#1`, l(Ot, t, n), kt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetFriendsGameplayInfo = o;
  function s(e, t, n) {
    return e.SendMsg(`Player.GetGameBadgeLevels#1`, l(he, t, n), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetGameBadgeLevels = s;
  function c(e, t, n) {
    return e.SendMsg(`Player.GetProfileBackground#1`, l(_e, t, n), ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileBackground = c;
  function u(e, t, n) {
    return e.SendMsg(`Player.SetProfileBackground#1`, l(ye, t, n), be, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetProfileBackground = u;
  function d(e, t, n) {
    return e.SendMsg(`Player.GetMiniProfileBackground#1`, l(xe, t, n), Se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetMiniProfileBackground = d;
  function f(e, t, n) {
    return e.SendMsg(`Player.SetMiniProfileBackground#1`, l(Ce, t, n), we, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetMiniProfileBackground = f;
  function p(e, t, n) {
    return e.SendMsg(`Player.GetAvatarFrame#1`, l(Te, t, n), Ee, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAvatarFrame = p;
  function m(e, t, n) {
    return e.SendMsg(`Player.SetAvatarFrame#1`, l(De, t, n), Oe, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetAvatarFrame = m;
  function oe(e, t, n) {
    return e.SendMsg(`Player.GetAnimatedAvatar#1`, l(ke, t, n), Ae, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAnimatedAvatar = oe;
  function h(e, t, n) {
    return e.SendMsg(`Player.SetAnimatedAvatar#1`, l(je, t, n), Me, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetAnimatedAvatar = h;
  function g(e, t, n) {
    return e.SendMsg(`Player.GetSteamDeckKeyboardSkin#1`, l(Ne, t, n), Pe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetSteamDeckKeyboardSkin = g;
  function _(e, t, n) {
    return e.SendMsg(`Player.SetSteamDeckKeyboardSkin#1`, l(Fe, t, n), Ie, {
      ePrivilege: 1,
    });
  }
  e.SetSteamDeckKeyboardSkin = _;
  function v(e, t, n) {
    return e.SendMsg(`Player.GetProfileItemsOwned#1`, l(Le, t, n), Re, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetProfileItemsOwned = v;
  function y(e, t, n) {
    return e.SendMsg(`Player.GetProfileItemsEquipped#1`, l(ze, t, n), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetProfileItemsEquipped = y;
  function b(e, t, n) {
    return e.SendMsg(`Player.SetEquippedProfileItemFlags#1`, l(Ve, t, n), He, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetEquippedProfileItemFlags = b;
  function x(e, t, n) {
    return e.SendMsg(`Player.GetEmoticonList#1`, l(Ue, t, n), We, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetEmoticonList = x;
  function S(e, t, n) {
    return e.SendMsg(`Player.GetCommunityBadgeProgress#1`, l(Ge, t, n), Ke, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetCommunityBadgeProgress = S;
  function C(e, t, n) {
    return e.SendMsg(`Player.GetTopAchievementsForGames#1`, l(Qe, t, n), $e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetTopAchievementsForGames = C;
  function w(e, t, n) {
    return e.SendMsg(`Player.GetAchievementsProgress#1`, l(nt, t, n), rt, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAchievementsProgress = w;
  function E(e, t, n) {
    return e.SendMsg(`Player.GetGameAchievements#1`, l(ot, t, n), st, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetGameAchievements = E;
  function D(e, t, n) {
    return e.SendMsg(`Player.GetUserAchievements#1`, l(ct, t, n), lt, {
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
      l(ut, t, n),
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
      l(it, t, n),
      at,
      { bConstMethod: !0, ePrivilege: 2, rgBrowserAPISites: [`community`] },
    );
  }
  e.GetGamesWithAchievementProgress = k;
  function A(e, t, n) {
    return e.SendMsg(`Player.GetUserStats#1`, l(et, t, n), tt, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  e.GetUserStats = A;
  function j(e, t, n) {
    return e.SendMsg(`Player.GetFavoriteBadge#1`, l(ft, t, n), pt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetFavoriteBadge = j;
  function M(e, t, n) {
    return e.SendMsg(`Player.SetFavoriteBadge#1`, l(mt, t, n), ht, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetFavoriteBadge = M;
  function N(e, t, n) {
    return e.SendMsg(`Player.GetProfileCustomization#1`, l(gt, t, n), _t, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetProfileCustomization = N;
  function P(e, t, n) {
    return e.SendMsg(
      `Player.GetPurchasedProfileCustomizations#1`,
      l(vt, t, n),
      yt,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPurchasedProfileCustomizations = P;
  function F(e, t, n) {
    return e.SendMsg(
      `Player.GetPurchasedAndUpgradedProfileCustomizations#1`,
      l(bt, t, n),
      xt,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetPurchasedAndUpgradedProfileCustomizations = F;
  function I(e, t, n) {
    return e.SendMsg(`Player.GetProfileThemesAvailable#1`, l(St, t, n), Ct, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetProfileThemesAvailable = I;
  function L(e, t, n) {
    return e.SendMsg(`Player.SetProfileTheme#1`, l(wt, t, n), Tt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.SetProfileTheme = L;
  function R(e, t, n) {
    return e.SendMsg(`Player.SetProfilePreferences#1`, l(Et, t, n), Dt, {
      ePrivilege: 1,
    });
  }
  e.SetProfilePreferences = R;
  function z(e, t, n) {
    return e.SendMsg(`Player.PostStatusToFriends#1`, l(T, t, n), qe, {
      ePrivilege: 3,
      rgBrowserAPISites: [`community`],
    });
  }
  e.PostStatusToFriends = z;
  function B(e, t, n) {
    return e.SendMsg(`Player.GetPostedStatus#1`, l(Je, t, n), Ye, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPostedStatus = B;
  function V(e, t, n) {
    return e.SendMsg(`Player.DeletePostedStatus#1`, l(Xe, t, n), Ze, {
      ePrivilege: 1,
    });
  }
  e.DeletePostedStatus = V;
  function H(e, t, n) {
    return e.SendMsg(`Player.ClientGetLastPlayedTimes#1`, l(ne, t, n), re, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ClientGetLastPlayedTimes = H;
  function U(e, t, n) {
    return e.SendMsg(`Player.GetTimeSSAAccepted#1`, l(At, t, n), jt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeSSAAccepted = U;
  function W(e, t, n) {
    return e.SendMsg(`Player.AcceptSSA#1`, l(Mt, t, n), Nt, { ePrivilege: 1 });
  }
  e.AcceptSSA = W;
  function G(e, t, n) {
    return e.SendMsg(`Player.GetNicknameList#1`, l(J, t, n), Pt, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetNicknameList = G;
  function K(e, t, n) {
    return e.SendMsg(`Player.GetPerFriendPreferences#1`, l(Ft, t, n), It, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPerFriendPreferences = K;
  function q(e, t, n) {
    return e.SendMsg(`Player.SetPerFriendPreferences#1`, l(Lt, t, n), Rt, {
      ePrivilege: 1,
    });
  }
  e.SetPerFriendPreferences = q;
  function Y(e, t, n) {
    return e.SendMsg(`Player.AddFriend#1`, l(zt, t, n), Bt, { ePrivilege: 1 });
  }
  e.AddFriend = Y;
  function X(e, t, n) {
    return e.SendMsg(`Player.RemoveFriend#1`, l(Vt, t, n), Ht, {
      ePrivilege: 1,
    });
  }
  e.RemoveFriend = X;
  function Z(e, t, n) {
    return e.SendMsg(`Player.IgnoreFriend#1`, l(Ut, t, n), Wt, {
      ePrivilege: 1,
    });
  }
  e.IgnoreFriend = Z;
  function Q(e, t, n) {
    return e.SendMsg(`Player.GetCommunityPreferences#1`, l(Gt, t, n), Kt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  e.GetCommunityPreferences = Q;
  function $(e, t, n) {
    return e.SendMsg(`Player.SetCommunityPreferences#1`, l(qt, t, n), Jt, {
      ePrivilege: 1,
    });
  }
  e.SetCommunityPreferences = $;
  function cn(e, t, n) {
    return e.SendMsg(`Player.GetTextFilterWords#1`, l(Yt, t, n), Xt, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetTextFilterWords = cn;
  function ln(e, t, n) {
    return e.SendMsg(`Player.GetNewSteamAnnouncementState#1`, l(Zt, t, n), Qt, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetNewSteamAnnouncementState = ln;
  function un(e, t, n) {
    return e.SendMsg(
      `Player.UpdateSteamAnnouncementLastRead#1`,
      l($t, t, n),
      en,
      { ePrivilege: 1 },
    );
  }
  e.UpdateSteamAnnouncementLastRead = un;
  function dn(e, t, n) {
    return e.SendMsg(`Player.GetPrivacySettings#1`, l(tn, t, n), nn, {
      ePrivilege: 1,
    });
  }
  e.GetPrivacySettings = dn;
  function fn(e, t, n) {
    return e.SendMsg(`Player.GetDurationControl#1`, l(rn, t, n), an, {
      ePrivilege: 1,
    });
  }
  e.GetDurationControl = fn;
  function pn(e, t, n) {
    return e.SendMsg(`Player.RecordDisconnectedPlaytime#1`, l(pe, t, n), me, {
      ePrivilege: 1,
    });
  }
  e.RecordDisconnectedPlaytime = pn;
  function mn(e, t, n) {
    return e.SendMsg(`Player.GetMiniprofileData#1`, l(on, t, n), sn, {
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
export { T as a, bn as c, Yt as i, Gt as n, Q as o, J as r, xn as s, Z as t };
