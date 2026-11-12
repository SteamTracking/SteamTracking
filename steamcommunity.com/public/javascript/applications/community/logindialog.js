/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./chunk~f025431ab0.js";
import {
  A as n,
  D as r,
  Ft as i,
  It as a,
  Lt as o,
  ot as s,
} from "./chunk~01cfc309bf.js";
import { n as c, t as l } from "./chunk~eefd71512b.js";
import {
  $h as u,
  Ah as d,
  Cm as f,
  Ed as p,
  Eh as m,
  Et as h,
  Fh as g,
  Ih as _,
  Mh as v,
  Nh as y,
  Ph as b,
  Rh as x,
  Ru as ee,
  Tu as S,
  Us as te,
  Vm as C,
  Zm as ne,
  _m as re,
  am as ie,
  bf as w,
  im as T,
  jh as E,
  kf as D,
  kh as O,
  nh as k,
  oh as ae,
  om as oe,
  qu as se,
  rh as A,
  rm as ce,
  wu as le,
  ym as ue,
  zt as de,
} from "./main.js";
var j = e(a(), 1),
  fe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_name || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_name: { n: 1, br: v.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Request`;
    }
  },
  pe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.publickey_mod || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            publickey_mod: { n: 1, br: v.readString, bw: _.writeString },
            publickey_exp: { n: 2, br: v.readString, bw: _.writeString },
            timestamp: {
              n: 3,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Response`;
    }
  },
  me = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: v.readString, bw: _.writeString },
            platform_type: { n: 2, br: v.readEnum, bw: _.writeEnum },
            os_type: { n: 3, br: v.readInt32, bw: _.writeInt32 },
            gaming_device_type: { n: 4, br: v.readUint32, bw: _.writeUint32 },
            client_count: { n: 5, br: v.readUint32, bw: _.writeUint32 },
            machine_id: { n: 6, br: v.readBytes, bw: _.writeBytes },
            app_type: { n: 7, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_DeviceDetails`;
    }
  },
  he = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.confirmation_type || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            confirmation_type: { n: 1, br: v.readEnum, bw: _.writeEnum },
            associated_message: { n: 2, br: v.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AllowedConfirmation`;
    }
  },
  ge = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: v.readString, bw: _.writeString },
            platform_type: { n: 2, br: v.readEnum, bw: _.writeEnum },
            device_details: { n: 3, c: me },
            website_id: {
              n: 4,
              d: `Unknown`,
              br: v.readString,
              bw: _.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Request`;
    }
  },
  _e = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            challenge_url: { n: 2, br: v.readString, bw: _.writeString },
            request_id: { n: 3, br: v.readBytes, bw: _.writeBytes },
            interval: { n: 4, br: v.readFloat, bw: _.writeFloat },
            allowed_confirmations: { n: 5, c: he, r: !0, q: !0 },
            version: { n: 6, br: v.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Response`;
    }
  },
  ve = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.device_friendly_name || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            device_friendly_name: { n: 1, br: v.readString, bw: _.writeString },
            account_name: { n: 2, br: v.readString, bw: _.writeString },
            encrypted_password: { n: 3, br: v.readString, bw: _.writeString },
            encryption_timestamp: {
              n: 4,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            remember_login: { n: 5, br: v.readBool, bw: _.writeBool },
            platform_type: { n: 6, br: v.readEnum, bw: _.writeEnum },
            persistence: { n: 7, d: 1, br: v.readEnum, bw: _.writeEnum },
            website_id: {
              n: 8,
              d: `Unknown`,
              br: v.readString,
              bw: _.writeString,
            },
            device_details: { n: 9, c: me },
            guard_data: { n: 10, br: v.readString, bw: _.writeString },
            language: { n: 11, br: v.readUint32, bw: _.writeUint32 },
            qos_level: { n: 12, d: 2, br: v.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Request`;
    }
  },
  ye = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            request_id: { n: 2, br: v.readBytes, bw: _.writeBytes },
            interval: { n: 3, br: v.readFloat, bw: _.writeFloat },
            allowed_confirmations: { n: 4, c: he, r: !0, q: !0 },
            steamid: { n: 5, br: v.readUint64String, bw: _.writeUint64String },
            weak_token: { n: 6, br: v.readString, bw: _.writeString },
            agreement_session_url: {
              n: 7,
              br: v.readString,
              bw: _.writeString,
            },
            extended_error_message: {
              n: 8,
              br: v.readString,
              bw: _.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Response`;
    }
  },
  be = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            request_id: { n: 2, br: v.readBytes, bw: _.writeBytes },
            token_to_revoke: {
              n: 3,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Request`;
    }
  },
  xe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            new_challenge_url: { n: 2, br: v.readString, bw: _.writeString },
            refresh_token: { n: 3, br: v.readString, bw: _.writeString },
            access_token: { n: 4, br: v.readString, bw: _.writeString },
            had_remote_interaction: { n: 5, br: v.readBool, bw: _.writeBool },
            account_name: { n: 6, br: v.readString, bw: _.writeString },
            new_guard_data: { n: 7, br: v.readString, bw: _.writeString },
            agreement_session_url: {
              n: 8,
              br: v.readString,
              bw: _.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Response`;
    }
  },
  Se = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Request`;
    }
  },
  Ce = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ip || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ip: { n: 1, br: v.readString, bw: _.writeString },
            geoloc: { n: 2, br: v.readString, bw: _.writeString },
            city: { n: 3, br: v.readString, bw: _.writeString },
            state: { n: 4, br: v.readString, bw: _.writeString },
            country: { n: 5, br: v.readString, bw: _.writeString },
            platform_type: { n: 6, br: v.readEnum, bw: _.writeEnum },
            device_friendly_name: { n: 7, br: v.readString, bw: _.writeString },
            version: { n: 8, br: v.readInt32, bw: _.writeInt32 },
            login_history: { n: 9, br: v.readEnum, bw: _.writeEnum },
            requestor_location_mismatch: {
              n: 10,
              br: v.readBool,
              bw: _.writeBool,
            },
            high_usage_login: { n: 11, br: v.readBool, bw: _.writeBool },
            requested_persistence: { n: 12, br: v.readEnum, bw: _.writeEnum },
            device_trust: { n: 13, br: v.readInt32, bw: _.writeInt32 },
            app_type: { n: 14, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Response`;
    }
  },
  we = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            language: { n: 2, br: v.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Request`;
    }
  },
  Te = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.location_confirmer || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_confirmer: { n: 1, br: v.readString, bw: _.writeString },
            location_requestor: { n: 2, br: v.readString, bw: _.writeString },
            location_other: { n: 3, br: v.readString, bw: _.writeString },
            platform_type: { n: 4, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Response`;
    }
  },
  Ee = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            results: { n: 2, c: De },
            selected_action: { n: 3, br: v.readString, bw: _.writeString },
            did_confirm_login: { n: 4, br: v.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification`;
    }
  },
  De = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: v.readBool, bw: _.writeBool },
            location: { n: 2, br: v.readBool, bw: _.writeBool },
            action: { n: 3, br: v.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults`;
    }
  },
  Oe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Request`;
    }
  },
  ke = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_ids || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: v.readUint64String,
              pbr: v.readPackedUint64String,
              bw: _.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Response`;
    }
  },
  Ae = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.version || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            version: { n: 1, br: v.readInt32, bw: _.writeInt32 },
            client_id: {
              n: 2,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            steamid: {
              n: 3,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            signature: { n: 4, br: v.readBytes, bw: _.writeBytes },
            confirm: { n: 5, d: !1, br: v.readBool, bw: _.writeBool },
            persistence: { n: 6, d: 1, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request`;
    }
  },
  je = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response`;
    }
  },
  Me = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.client_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            client_id: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            steamid: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            code: { n: 3, br: v.readString, bw: _.writeString },
            code_type: { n: 4, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request`;
    }
  },
  Ne = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.agreement_session_url || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            agreement_session_url: {
              n: 7,
              br: v.readString,
              bw: _.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response`;
    }
  },
  Pe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_token || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_token: { n: 1, br: v.readString, bw: _.writeString },
            steamid: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            renewal_type: { n: 3, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Request`;
    }
  },
  Fe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.access_token || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            access_token: { n: 1, br: v.readString, bw: _.writeString },
            refresh_token: { n: 2, br: v.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Response`;
    }
  },
  Ie = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.include_revoked || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_revoked: { n: 1, d: !1, br: v.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Request`;
    }
  },
  Le = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: ze, r: !0, q: !0 },
            requesting_token: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response`;
    }
  },
  Re = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: v.readUint32, bw: _.writeUint32 },
            ip: { n: 2, c: m },
            locale: { n: 3, br: v.readString, bw: _.writeString },
            country: { n: 4, br: v.readString, bw: _.writeString },
            state: { n: 5, br: v.readString, bw: _.writeString },
            city: { n: 6, br: v.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent`;
    }
  },
  ze = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            token_description: { n: 2, br: v.readString, bw: _.writeString },
            time_updated: { n: 3, br: v.readUint32, bw: _.writeUint32 },
            platform_type: { n: 4, br: v.readEnum, bw: _.writeEnum },
            logged_in: { n: 5, br: v.readBool, bw: _.writeBool },
            os_platform: { n: 6, br: v.readUint32, bw: _.writeUint32 },
            auth_type: { n: 7, br: v.readUint32, bw: _.writeUint32 },
            gaming_device_type: { n: 8, br: v.readUint32, bw: _.writeUint32 },
            first_seen: { n: 9, c: Re },
            last_seen: { n: 10, c: Re },
            os_type: { n: 11, br: v.readInt32, bw: _.writeInt32 },
            authentication_type: { n: 12, br: v.readEnum, bw: _.writeEnum },
            effective_token_state: { n: 13, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription`;
    }
  },
  Be = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: v.readString, bw: _.writeString },
            revoke_action: { n: 2, d: 1, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Request`;
    }
  },
  Ve = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Response`;
    }
  },
  He = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            revoke_action: { n: 3, d: 1, br: v.readEnum, bw: _.writeEnum },
            signature: { n: 4, br: v.readBytes, bw: _.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Request`;
    }
  },
  Ue = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Response`;
    }
  },
  We = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            token_description: { n: 2, br: v.readString, bw: _.writeString },
            time_updated: { n: 3, br: v.readUint32, bw: _.writeUint32 },
            platform_type: { n: 4, br: v.readEnum, bw: _.writeEnum },
            token_state: { n: 5, br: v.readEnum, bw: _.writeEnum },
            owner_steamid: {
              n: 6,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            os_platform: { n: 7, br: v.readUint32, bw: _.writeUint32 },
            os_type: { n: 8, br: v.readInt32, bw: _.writeInt32 },
            auth_type: { n: 9, br: v.readUint32, bw: _.writeUint32 },
            gaming_device_type: { n: 10, br: v.readUint32, bw: _.writeUint32 },
            first_seen: { n: 11, c: Ge },
            last_seen: { n: 12, c: Ge },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription`;
    }
  },
  Ge = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: v.readUint32, bw: _.writeUint32 },
            ip: { n: 2, c: m },
            country: { n: 3, br: v.readString, bw: _.writeString },
            state: { n: 4, br: v.readString, bw: _.writeString },
            city: { n: 5, br: v.readString, bw: _.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription_TokenUsageEvent`;
    }
  },
  Ke = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.action || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            action: { n: 1, br: v.readInt32, bw: _.writeInt32 },
            time: { n: 2, br: v.readUint32, bw: _.writeUint32 },
            ip: { n: 3, c: m },
            actor: { n: 4, br: v.readFixed64String, bw: _.writeFixed64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenAudit`;
    }
  },
  qe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            include_revoked_tokens: { n: 2, br: v.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Request`;
    }
  },
  Je = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refresh_tokens: { n: 1, c: We, r: !0, q: !0 },
            last_token_reset: { n: 2, br: v.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Response`;
    }
  },
  Ye = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Request`;
    }
  },
  Xe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refresh_tokens || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { refresh_tokens: { n: 1, c: We, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Response`;
    }
  },
  Ze = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            steamid: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Request`;
    }
  },
  Qe = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Response`;
    }
  },
  $e = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Request`;
    }
  },
  et = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: Ke, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Response`;
    }
  },
  tt = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            token_id: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Request`;
    }
  },
  nt = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Response`;
    }
  },
  rt = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: v.readUint32, bw: _.writeUint32 },
            minutes_remaining: { n: 2, br: v.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_TimeRemaining`;
    }
  },
  it = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.platform || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            platform: { n: 1, br: v.readString, bw: _.writeString },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: v.readUint32,
              pbr: v.readPackedUint32,
              bw: _.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Request`;
    }
  },
  at = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 2, c: rt, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Response`;
    }
  },
  M;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Authentication.GetPasswordRSAPublicKey#1`,
      A(fe, t, n),
      pe,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetPasswordRSAPublicKey = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaQR#1`,
      A(ge, t, n),
      _e,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaQR = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Authentication.BeginAuthSessionViaCredentials#1`,
      A(ve, t, n),
      ye,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.BeginAuthSessionViaCredentials = r;
  function i(e, t, n) {
    return e.SendMsg(
      `Authentication.PollAuthSessionStatus#1`,
      A(be, t, n),
      xe,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.PollAuthSessionStatus = i;
  function a(e, t, n) {
    return e.SendMsg(`Authentication.GetAuthSessionInfo#1`, A(Se, t, n), Ce, {
      ePrivilege: 1,
    });
  }
  e.GetAuthSessionInfo = a;
  function o(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionRiskInfo#1`,
      A(we, t, n),
      Te,
      { ePrivilege: 1 },
    );
  }
  e.GetAuthSessionRiskInfo = o;
  function s(e, t) {
    return e.SendNotification(
      `Authentication.NotifyRiskQuizResults#1`,
      A(Ee, t),
      { ePrivilege: 1 },
    );
  }
  e.NotifyRiskQuizResults = s;
  function c(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithMobileConfirmation#1`,
      A(Ae, t, n),
      je,
      { ePrivilege: 1 },
    );
  }
  e.UpdateAuthSessionWithMobileConfirmation = c;
  function l(e, t, n) {
    return e.SendMsg(
      `Authentication.UpdateAuthSessionWithSteamGuardCode#1`,
      A(Me, t, n),
      Ne,
      { ePrivilege: 0, eWebAPIKeyRequirement: 1, rgBrowserAPISites: [`all`] },
    );
  }
  e.UpdateAuthSessionWithSteamGuardCode = l;
  function u(e, t, n) {
    return e.SendMsg(
      `Authentication.GenerateAccessTokenForApp#1`,
      A(Pe, t, n),
      Fe,
      { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GenerateAccessTokenForApp = u;
  function d(e, t, n) {
    return e.SendMsg(`Authentication.EnumerateTokens#1`, A(Ie, t, n), Le, {
      ePrivilege: 1,
    });
  }
  e.EnumerateTokens = d;
  function f(e, t, n) {
    return e.SendMsg(
      `Authentication.GetAuthSessionsForAccount#1`,
      A(Oe, t, n),
      ke,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetAuthSessionsForAccount = f;
  function p(e, t, n) {
    return e.SendMsg(`Authentication.RevokeToken#1`, A(Be, t, n), Ve, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeToken = p;
  function m(e, t, n) {
    return e.SendMsg(`Authentication.RevokeRefreshToken#1`, A(He, t, n), Ue, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.RevokeRefreshToken = m;
})((M ||= {}));
var ot;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokensByAccount#1`,
      A(qe, t, n),
      Je,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokensByAccount = t;
  function n(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.QueryRefreshTokenByID#1`,
      A(Ye, t, n),
      Xe,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.QueryRefreshTokenByID = n;
  function r(e, t, n) {
    return e.SendMsg(`AuthenticationSupport.RevokeToken#1`, A(Ze, t, n), Qe, {
      ePrivilege: 5,
    });
  }
  e.RevokeToken = r;
  function i(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.GetTokenHistory#1`,
      A($e, t, n),
      et,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetTokenHistory = i;
  function a(e, t, n) {
    return e.SendMsg(
      `AuthenticationSupport.MarkTokenCompromised#1`,
      A(tt, t, n),
      nt,
      { ePrivilege: 5 },
    );
  }
  e.MarkTokenCompromised = a;
})((ot ||= {}));
var st;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`CloudGaming.GetTimeRemaining#1`, A(it, t, n), at, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetTimeRemaining = t;
})((st ||= {}));
var N,
  ct = !0;
function P(e, t, n) {
  e != null &&
    (typeof e == `number`
      ? this.fromNumber(e, t, n)
      : t == null && typeof e != `string`
        ? this.fromString(e, 256)
        : this.fromString(e, t));
}
function F() {
  return new P(null);
}
function lt(e, t, n, r, i, a) {
  for (; --a >= 0;) {
    var o = t * this[e++] + n[r] + i;
    ((i = Math.floor(o / 67108864)), (n[r++] = o & 67108863));
  }
  return i;
}
function ut(e, t, n, r, i, a) {
  for (var o = t & 32767, s = t >> 15; --a >= 0;) {
    var c = this[e] & 32767,
      l = this[e++] >> 15,
      u = s * c + l * o;
    ((c = o * c + ((u & 32767) << 15) + n[r] + (i & 1073741823)),
      (i = (c >>> 30) + (u >>> 15) + s * l + (i >>> 30)),
      (n[r++] = c & 1073741823));
  }
  return i;
}
function dt(e, t, n, r, i, a) {
  for (var o = t & 16383, s = t >> 14; --a >= 0;) {
    var c = this[e] & 16383,
      l = this[e++] >> 14,
      u = s * c + l * o;
    ((c = o * c + ((u & 16383) << 14) + n[r] + i),
      (i = (c >> 28) + (u >> 14) + s * l),
      (n[r++] = c & 268435455));
  }
  return i;
}
(ct && navigator.appName == `Microsoft Internet Explorer`
  ? ((P.prototype.am = ut), (N = 30))
  : ct && navigator.appName != `Netscape`
    ? ((P.prototype.am = lt), (N = 26))
    : ((P.prototype.am = dt), (N = 28)),
  (P.prototype.DB = N),
  (P.prototype.DM = (1 << N) - 1),
  (P.prototype.DV = 1 << N));
var ft = 52;
((P.prototype.FV = 2 ** ft),
  (P.prototype.F1 = ft - N),
  (P.prototype.F2 = 2 * N - ft));
for (
  var pt = `0123456789abcdefghijklmnopqrstuvwxyz`, mt = [], ht = 48, I = 0;
  I <= 9;
  ++I
)
  mt[ht++] = I;
for (ht = 97, I = 10; I < 36; ++I) mt[ht++] = I;
for (ht = 65, I = 10; I < 36; ++I) mt[ht++] = I;
function gt(e) {
  return pt.charAt(e);
}
function _t(e, t) {
  return mt[e.charCodeAt(t)] ?? -1;
}
function vt(e) {
  for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
  ((e.t = this.t), (e.s = this.s));
}
function yt(e) {
  ((this.t = 1),
    (this.s = e < 0 ? -1 : 0),
    e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0));
}
function L(e) {
  var t = F();
  return (t.fromInt(e), t);
}
function bt(e, t) {
  var n;
  if (t == 16) n = 4;
  else if (t == 8) n = 3;
  else if (t == 256) n = 8;
  else if (t == 2) n = 1;
  else if (t == 32) n = 5;
  else if (t == 4) n = 2;
  else {
    this.fromRadix(e, t);
    return;
  }
  ((this.t = 0), (this.s = 0));
  for (var r = e.length, i = !1, a = 0; --r >= 0;) {
    var o = n == 8 ? e[r] & 255 : _t(e, r);
    o < 0
      ? e.charAt(r) == `-` && (i = !0)
      : ((i = !1),
        a == 0
          ? (this[this.t++] = o)
          : a + n > this.DB
            ? ((this[this.t - 1] |= (o & ((1 << (this.DB - a)) - 1)) << a),
              (this[this.t++] = o >> (this.DB - a)))
            : (this[this.t - 1] |= o << a),
        (a += n),
        a >= this.DB && (a -= this.DB));
  }
  (n == 8 &&
    e[0] & 128 &&
    ((this.s = -1),
    a > 0 && (this[this.t - 1] |= ((1 << (this.DB - a)) - 1) << a)),
    this.clamp(),
    i && P.ZERO.subTo(this, this));
}
function xt() {
  for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
}
function St(e) {
  if (this.s < 0) return `-` + this.negate().toString(e);
  var t;
  if (e == 16) t = 4;
  else if (e == 8) t = 3;
  else if (e == 2) t = 1;
  else if (e == 32) t = 5;
  else if (e == 4) t = 2;
  else return this.toRadix(e);
  var n = (1 << t) - 1,
    r,
    i = !1,
    a = ``,
    o = this.t,
    s = this.DB - ((o * this.DB) % t);
  if (o-- > 0)
    for (
      s < this.DB && (r = this[o] >> s) > 0 && ((i = !0), (a = gt(r)));
      o >= 0;
    )
      (s < t
        ? ((r = (this[o] & ((1 << s) - 1)) << (t - s)),
          (r |= this[--o] >> (s += this.DB - t)))
        : ((r = (this[o] >> (s -= t)) & n), s <= 0 && ((s += this.DB), --o)),
        r > 0 && (i = !0),
        i && (a += gt(r)));
  return i ? a : `0`;
}
function Ct() {
  var e = F();
  return (P.ZERO.subTo(this, e), e);
}
function wt() {
  return this.s < 0 ? this.negate() : this;
}
function Tt(e) {
  var t = this.s - e.s;
  if (t != 0) return t;
  var n = this.t;
  if (((t = n - e.t), t != 0)) return t;
  for (; --n >= 0;) if ((t = this[n] - e[n]) != 0) return t;
  return 0;
}
function Et(e) {
  var t = 1,
    n;
  return (
    (n = e >>> 16) != 0 && ((e = n), (t += 16)),
    (n = e >> 8) != 0 && ((e = n), (t += 8)),
    (n = e >> 4) != 0 && ((e = n), (t += 4)),
    (n = e >> 2) != 0 && ((e = n), (t += 2)),
    (n = e >> 1) != 0 && ((e = n), (t += 1)),
    t
  );
}
function Dt() {
  return this.t <= 0
    ? 0
    : this.DB * (this.t - 1) + Et(this[this.t - 1] ^ (this.s & this.DM));
}
function Ot(e, t) {
  for (var n = this.t - 1; n >= 0; --n) t[n + e] = this[n];
  for (n = e - 1; n >= 0; --n) t[n] = 0;
  ((t.t = this.t + e), (t.s = this.s));
}
function kt(e, t) {
  for (var n = e; n < this.t; ++n) t[n - e] = this[n];
  ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
}
function At(e, t) {
  for (
    var n = e % this.DB,
      r = this.DB - n,
      i = (1 << r) - 1,
      a = Math.floor(e / this.DB),
      o = (this.s << n) & this.DM,
      s = this.t - 1;
    s >= 0;
    --s
  )
    ((t[s + a + 1] = (this[s] >> r) | o), (o = (this[s] & i) << n));
  for (s = a - 1; s >= 0; --s) t[s] = 0;
  ((t[a] = o), (t.t = this.t + a + 1), (t.s = this.s), t.clamp());
}
function jt(e, t) {
  t.s = this.s;
  var n = Math.floor(e / this.DB);
  if (n >= this.t) t.t = 0;
  else {
    var r = e % this.DB,
      i = this.DB - r,
      a = (1 << r) - 1;
    t[0] = this[n] >> r;
    for (var o = n + 1; o < this.t; ++o)
      ((t[o - n - 1] |= (this[o] & a) << i), (t[o - n] = this[o] >> r));
    (r > 0 && (t[this.t - n - 1] |= (this.s & a) << i),
      (t.t = this.t - n),
      t.clamp());
  }
}
function Mt(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] - e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r -= e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r -= e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r -= e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r < -1 ? (t[n++] = this.DV + r) : r > 0 && (t[n++] = r),
    (t.t = n),
    t.clamp());
}
function Nt(e, t) {
  var n = this.abs(),
    r = e.abs(),
    i = n.t;
  for (t.t = i + r.t; --i >= 0;) t[i] = 0;
  for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t);
  ((t.s = 0), t.clamp(), this.s != e.s && P.ZERO.subTo(t, t));
}
function Pt(e) {
  for (var t = this.abs(), n = (e.t = 2 * t.t); --n >= 0;) e[n] = 0;
  for (n = 0; n < t.t - 1; ++n) {
    var r = t.am(n, t[n], e, 2 * n, 0, 1);
    (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >=
      t.DV && ((e[n + t.t] -= t.DV), (e[n + t.t + 1] = 1));
  }
  (e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)),
    (e.s = 0),
    e.clamp());
}
function Ft(e, t, n) {
  var r = e.abs();
  if (!(r.t <= 0)) {
    var i = this.abs();
    if (i.t < r.t) (t?.fromInt(0), n != null && this.copyTo(n));
    else {
      n ??= F();
      var a = F(),
        o = this.s,
        s = e.s,
        c = this.DB - Et(r[r.t - 1]);
      c > 0 ? (r.lShiftTo(c, a), i.lShiftTo(c, n)) : (r.copyTo(a), i.copyTo(n));
      var l = a.t,
        u = a[l - 1];
      if (u != 0) {
        var d = u * (1 << this.F1) + (l > 1 ? a[l - 2] >> this.F2 : 0),
          f = this.FV / d,
          p = (1 << this.F1) / d,
          m = 1 << this.F2,
          h = n.t,
          g = h - l,
          _ = t ?? F();
        for (
          a.dlShiftTo(g, _),
            n.compareTo(_) >= 0 && ((n[n.t++] = 1), n.subTo(_, n)),
            P.ONE.dlShiftTo(l, _),
            _.subTo(a, a);
          a.t < l;
        )
          a[a.t++] = 0;
        for (; --g >= 0;) {
          var v =
            n[--h] == u ? this.DM : Math.floor(n[h] * f + (n[h - 1] + m) * p);
          if ((n[h] += a.am(0, v, n, g, 0, l)) < v)
            for (a.dlShiftTo(g, _), n.subTo(_, n); n[h] < --v;) n.subTo(_, n);
        }
        (t != null && (n.drShiftTo(l, t), o != s && P.ZERO.subTo(t, t)),
          (n.t = l),
          n.clamp(),
          c > 0 && n.rShiftTo(c, n),
          o < 0 && P.ZERO.subTo(n, n));
      }
    }
  }
}
function It(e) {
  var t = F();
  return (
    this.abs().divRemTo(e, null, t),
    this.s < 0 && t.compareTo(P.ZERO) > 0 && e.subTo(t, t),
    t
  );
}
function R(e) {
  this.m = e;
}
function Lt(e) {
  return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
}
function Rt(e) {
  return e;
}
function zt(e) {
  e.divRemTo(this.m, null, e);
}
function Bt(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
function Vt(e, t) {
  (e.squareTo(t), this.reduce(t));
}
((R.prototype.convert = Lt),
  (R.prototype.revert = Rt),
  (R.prototype.reduce = zt),
  (R.prototype.mulTo = Bt),
  (R.prototype.sqrTo = Vt));
function Ht() {
  if (this.t < 1) return 0;
  var e = this[0];
  if (!(e & 1)) return 0;
  var t = e & 3;
  return (
    (t = (t * (2 - (e & 15) * t)) & 15),
    (t = (t * (2 - (e & 255) * t)) & 255),
    (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
    (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
    t > 0 ? this.DV - t : -t
  );
}
function z(e) {
  ((this.m = e),
    (this.mp = e.invDigit()),
    (this.mpl = this.mp & 32767),
    (this.mph = this.mp >> 15),
    (this.um = (1 << (e.DB - 15)) - 1),
    (this.mt2 = 2 * e.t));
}
function Ut(e) {
  var t = F();
  return (
    e.abs().dlShiftTo(this.m.t, t),
    t.divRemTo(this.m, null, t),
    e.s < 0 && t.compareTo(P.ZERO) > 0 && this.m.subTo(t, t),
    t
  );
}
function Wt(e) {
  var t = F();
  return (e.copyTo(t), this.reduce(t), t);
}
function Gt(e) {
  for (; e.t <= this.mt2;) e[e.t++] = 0;
  for (var t = 0; t < this.m.t; ++t) {
    var n = e[t] & 32767,
      r =
        (n * this.mpl +
          (((n * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
        e.DM;
    for (
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t);
      e[n] >= e.DV;
    )
      ((e[n] -= e.DV), e[++n]++);
  }
  (e.clamp(),
    e.drShiftTo(this.m.t, e),
    e.compareTo(this.m) >= 0 && e.subTo(this.m, e));
}
function Kt(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function qt(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((z.prototype.convert = Ut),
  (z.prototype.revert = Wt),
  (z.prototype.reduce = Gt),
  (z.prototype.mulTo = qt),
  (z.prototype.sqrTo = Kt));
function Jt() {
  return (this.t > 0 ? this[0] & 1 : this.s) == 0;
}
function Yt(e, t) {
  if (e > 4294967295 || e < 1) return P.ONE;
  var n = F(),
    r = F(),
    i = t.convert(this),
    a = Et(e) - 1;
  for (i.copyTo(n); --a >= 0;)
    if ((t.sqrTo(n, r), (e & (1 << a)) > 0)) t.mulTo(r, i, n);
    else {
      var o = n;
      ((n = r), (r = o));
    }
  return t.revert(n);
}
function Xt(e, t) {
  var n = e < 256 || t.isEven() ? new R(t) : new z(t);
  return this.exp(e, n);
}
((P.prototype.copyTo = vt),
  (P.prototype.fromInt = yt),
  (P.prototype.fromString = bt),
  (P.prototype.clamp = xt),
  (P.prototype.dlShiftTo = Ot),
  (P.prototype.drShiftTo = kt),
  (P.prototype.lShiftTo = At),
  (P.prototype.rShiftTo = jt),
  (P.prototype.subTo = Mt),
  (P.prototype.multiplyTo = Nt),
  (P.prototype.squareTo = Pt),
  (P.prototype.divRemTo = Ft),
  (P.prototype.invDigit = Ht),
  (P.prototype.isEven = Jt),
  (P.prototype.exp = Yt),
  (P.prototype.toString = St),
  (P.prototype.negate = Ct),
  (P.prototype.abs = wt),
  (P.prototype.compareTo = Tt),
  (P.prototype.bitLength = Dt),
  (P.prototype.mod = It),
  (P.prototype.modPowInt = Xt),
  (P.ZERO = L(0)),
  (P.ONE = L(1)));
function Zt() {
  var e = F();
  return (this.copyTo(e), e);
}
function Qt() {
  if (this.s < 0) {
    if (this.t == 1) return this[0] - this.DV;
    if (this.t == 0) return -1;
  } else if (this.t == 1) return this[0];
  else if (this.t == 0) return 0;
  return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
}
function $t() {
  return this.t == 0 ? this.s : (this[0] << 24) >> 24;
}
function en() {
  return this.t == 0 ? this.s : (this[0] << 16) >> 16;
}
function tn(e) {
  return Math.floor((Math.LN2 * this.DB) / Math.log(e));
}
function nn() {
  return this.s < 0 ? -1 : this.t <= 0 || (this.t == 1 && this[0] <= 0) ? 0 : 1;
}
function rn(e) {
  if (((e ??= 10), this.signum() == 0 || e < 2 || e > 36)) return `0`;
  var t = this.chunkSize(e),
    n = e ** +t,
    r = L(n),
    i = F(),
    a = F(),
    o = ``;
  for (this.divRemTo(r, i, a); i.signum() > 0;)
    ((o = (n + a.intValue()).toString(e).substr(1) + o), i.divRemTo(r, i, a));
  return a.intValue().toString(e) + o;
}
function an(e, t) {
  (this.fromInt(0), (t ??= 10));
  for (
    var n = this.chunkSize(t), r = t ** +n, i = !1, a = 0, o = 0, s = 0;
    s < e.length;
    ++s
  ) {
    var c = _t(e, s);
    c < 0
      ? e.charAt(s) == `-` && this.signum() == 0 && (i = !0)
      : ((o = t * o + c),
        ++a >= n &&
          (this.dMultiply(r), this.dAddOffset(o, 0), (a = 0), (o = 0)));
  }
  (a > 0 && (this.dMultiply(t ** +a), this.dAddOffset(o, 0)),
    i && P.ZERO.subTo(this, this));
}
function on(e, t, n) {
  if (typeof t == `number`) {
    if (e < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(e, n),
          this.testBit(e - 1) ||
            this.bitwiseTo(P.ONE.shiftLeft(e - 1), mn, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(t);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > e && this.subTo(P.ONE.shiftLeft(e - 1), this));
  } else {
    var r = [],
      i = e & 7;
    ((r.length = (e >> 3) + 1),
      t.nextBytes(r),
      i > 0 ? (r[0] &= (1 << i) - 1) : (r[0] = 0),
      this.fromString(r, 256));
  }
}
function sn() {
  var e = this.t,
    t = [];
  t[0] = this.s;
  var n = this.DB - ((e * this.DB) % 8),
    r,
    i = 0;
  if (e-- > 0)
    for (
      n < this.DB &&
      (r = this[e] >> n) != (this.s & this.DM) >> n &&
      (t[i++] = r | (this.s << (this.DB - n)));
      e >= 0;
    )
      (n < 8
        ? ((r = (this[e] & ((1 << n) - 1)) << (8 - n)),
          (r |= this[--e] >> (n += this.DB - 8)))
        : ((r = (this[e] >> (n -= 8)) & 255), n <= 0 && ((n += this.DB), --e)),
        r & 128 && (r |= -256),
        i == 0 && (this.s & 128) != (r & 128) && ++i,
        (i > 0 || r != this.s) && (t[i++] = r));
  return t;
}
function cn(e) {
  return this.compareTo(e) == 0;
}
function ln(e) {
  return this.compareTo(e) < 0 ? this : e;
}
function un(e) {
  return this.compareTo(e) > 0 ? this : e;
}
function dn(e, t, n) {
  var r,
    i,
    a = Math.min(e.t, this.t);
  for (r = 0; r < a; ++r) n[r] = t(this[r], e[r]);
  if (e.t < this.t) {
    for (i = e.s & this.DM, r = a; r < this.t; ++r) n[r] = t(this[r], i);
    n.t = this.t;
  } else {
    for (i = this.s & this.DM, r = a; r < e.t; ++r) n[r] = t(i, e[r]);
    n.t = e.t;
  }
  ((n.s = t(this.s, e.s)), n.clamp());
}
function fn(e, t) {
  return e & t;
}
function pn(e) {
  var t = F();
  return (this.bitwiseTo(e, fn, t), t);
}
function mn(e, t) {
  return e | t;
}
function hn(e) {
  var t = F();
  return (this.bitwiseTo(e, mn, t), t);
}
function gn(e, t) {
  return e ^ t;
}
function _n(e) {
  var t = F();
  return (this.bitwiseTo(e, gn, t), t);
}
function vn(e, t) {
  return e & ~t;
}
function yn(e) {
  var t = F();
  return (this.bitwiseTo(e, vn, t), t);
}
function bn() {
  for (var e = F(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
  return ((e.t = this.t), (e.s = ~this.s), e);
}
function xn(e) {
  var t = F();
  return (e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t);
}
function Sn(e) {
  var t = F();
  return (e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t);
}
function Cn(e) {
  if (e == 0) return -1;
  var t = 0;
  return (
    e & 65535 || ((e >>= 16), (t += 16)),
    e & 255 || ((e >>= 8), (t += 8)),
    e & 15 || ((e >>= 4), (t += 4)),
    e & 3 || ((e >>= 2), (t += 2)),
    e & 1 || ++t,
    t
  );
}
function wn() {
  for (var e = 0; e < this.t; ++e)
    if (this[e] != 0) return e * this.DB + Cn(this[e]);
  return this.s < 0 ? this.t * this.DB : -1;
}
function Tn(e) {
  for (var t = 0; e != 0;) ((e &= e - 1), ++t);
  return t;
}
function En() {
  for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
    e += Tn(this[n] ^ t);
  return e;
}
function Dn(e) {
  var t = Math.floor(e / this.DB);
  return t >= this.t ? this.s != 0 : !!(this[t] & (1 << (e % this.DB)));
}
function On(e, t) {
  var n = P.ONE.shiftLeft(e);
  return (this.bitwiseTo(n, t, n), n);
}
function kn(e) {
  return this.changeBit(e, mn);
}
function An(e) {
  return this.changeBit(e, vn);
}
function jn(e) {
  return this.changeBit(e, gn);
}
function Mn(e, t) {
  for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;)
    ((r += this[n] + e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
  if (e.t < this.t) {
    for (r += e.s; n < this.t;)
      ((r += this[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += this.s;
  } else {
    for (r += this.s; n < e.t;)
      ((r += e[n]), (t[n++] = r & this.DM), (r >>= this.DB));
    r += e.s;
  }
  ((t.s = r < 0 ? -1 : 0),
    r > 0 ? (t[n++] = r) : r < -1 && (t[n++] = this.DV + r),
    (t.t = n),
    t.clamp());
}
function Nn(e) {
  var t = F();
  return (this.addTo(e, t), t);
}
function Pn(e) {
  var t = F();
  return (this.subTo(e, t), t);
}
function Fn(e) {
  var t = F();
  return (this.multiplyTo(e, t), t);
}
function In(e) {
  var t = F();
  return (this.divRemTo(e, t, null), t);
}
function Ln(e) {
  var t = F();
  return (this.divRemTo(e, null, t), t);
}
function Rn(e) {
  var t = F(),
    n = F();
  return (this.divRemTo(e, t, n), [t, n]);
}
function zn(e) {
  ((this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
    ++this.t,
    this.clamp());
}
function Bn(e, t) {
  for (; this.t <= t;) this[this.t++] = 0;
  for (this[t] += e; this[t] >= this.DV;)
    ((this[t] -= this.DV), ++t >= this.t && (this[this.t++] = 0), ++this[t]);
}
function Vn() {}
function Hn(e) {
  return e;
}
function Un(e, t, n) {
  e.multiplyTo(t, n);
}
function Wn(e, t) {
  e.squareTo(t);
}
((Vn.prototype.convert = Hn),
  (Vn.prototype.revert = Hn),
  (Vn.prototype.mulTo = Un),
  (Vn.prototype.sqrTo = Wn));
function Gn(e) {
  return this.exp(e, new Vn());
}
function Kn(e, t, n) {
  var r = Math.min(this.t + e.t, t);
  for (n.s = 0, n.t = r; r > 0;) n[--r] = 0;
  for (var i = n.t - this.t; r < i; ++r)
    n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
  for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r);
  n.clamp();
}
function qn(e, t, n) {
  --t;
  var r = (n.t = this.t + e.t - t);
  for (n.s = 0; --r >= 0;) n[r] = 0;
  for (r = Math.max(t - this.t, 0); r < e.t; ++r)
    n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
  (n.clamp(), n.drShiftTo(1, n));
}
function B(e) {
  ((this.r2 = F()),
    (this.q3 = F()),
    P.ONE.dlShiftTo(2 * e.t, this.r2),
    (this.mu = this.r2.divide(e)),
    (this.m = e));
}
function Jn(e) {
  if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
  if (e.compareTo(this.m) < 0) return e;
  var t = F();
  return (e.copyTo(t), this.reduce(t), t);
}
function Yn(e) {
  return e;
}
function Xn(e) {
  for (
    e.drShiftTo(this.m.t - 1, this.r2),
      e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    e.compareTo(this.r2) < 0;
  )
    e.dAddOffset(1, this.m.t + 1);
  for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e);
}
function Zn(e, t) {
  (e.squareTo(t), this.reduce(t));
}
function Qn(e, t, n) {
  (e.multiplyTo(t, n), this.reduce(n));
}
((B.prototype.convert = Jn),
  (B.prototype.revert = Yn),
  (B.prototype.reduce = Xn),
  (B.prototype.mulTo = Qn),
  (B.prototype.sqrTo = Zn));
function $n(e, t) {
  var n = e.bitLength(),
    r,
    i = L(1),
    a;
  if (n <= 0) return i;
  ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
    (a = n < 8 ? new R(t) : t.isEven() ? new B(t) : new z(t)));
  var o = [],
    s = 3,
    c = r - 1,
    l = (1 << r) - 1;
  if (((o[1] = a.convert(this)), r > 1)) {
    var u = F();
    for (a.sqrTo(o[1], u); s <= l;)
      ((o[s] = F()), a.mulTo(u, o[s - 2], o[s]), (s += 2));
  }
  var d = e.t - 1,
    f,
    p = !0,
    m = F(),
    h;
  for (n = Et(e[d]) - 1; d >= 0;) {
    for (
      n >= c
        ? (f = (e[d] >> (n - c)) & l)
        : ((f = (e[d] & ((1 << (n + 1)) - 1)) << (c - n)),
          d > 0 && (f |= e[d - 1] >> (this.DB + n - c))),
        s = r;
      !(f & 1);
    )
      ((f >>= 1), --s);
    if (((n -= s) < 0 && ((n += this.DB), --d), p)) (o[f].copyTo(i), (p = !1));
    else {
      for (; s > 1;) (a.sqrTo(i, m), a.sqrTo(m, i), (s -= 2));
      (s > 0 ? a.sqrTo(i, m) : ((h = i), (i = m), (m = h)),
        a.mulTo(m, o[f], i));
    }
    for (; d >= 0 && !(e[d] & (1 << n));)
      (a.sqrTo(i, m),
        (h = i),
        (i = m),
        (m = h),
        --n < 0 && ((n = this.DB - 1), --d));
  }
  return a.revert(i);
}
function er(e) {
  var t = this.s < 0 ? this.negate() : this.clone(),
    n = e.s < 0 ? e.negate() : e.clone();
  if (t.compareTo(n) < 0) {
    var r = t;
    ((t = n), (n = r));
  }
  var i = t.getLowestSetBit(),
    a = n.getLowestSetBit();
  if (a < 0) return t;
  for (
    i < a && (a = i), a > 0 && (t.rShiftTo(a, t), n.rShiftTo(a, n));
    t.signum() > 0;
  )
    ((i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
      (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n),
      t.compareTo(n) >= 0
        ? (t.subTo(n, t), t.rShiftTo(1, t))
        : (n.subTo(t, n), n.rShiftTo(1, n)));
  return (a > 0 && n.lShiftTo(a, n), n);
}
function tr(e) {
  if (e <= 0) return 0;
  var t = this.DV % e,
    n = this.s < 0 ? e - 1 : 0;
  if (this.t > 0) {
    if (t == 0) n = this[0] % e;
    else for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e;
  }
  return n;
}
function nr(e) {
  var t = e.isEven();
  if ((this.isEven() && t) || e.signum() == 0) return P.ZERO;
  for (
    var n = e.clone(), r = this.clone(), i = L(1), a = L(0), o = L(0), s = L(1);
    n.signum() != 0;
  ) {
    for (; n.isEven();)
      (n.rShiftTo(1, n),
        t
          ? ((i.isEven() && a.isEven()) || (i.addTo(this, i), a.subTo(e, a)),
            i.rShiftTo(1, i))
          : a.isEven() || a.subTo(e, a),
        a.rShiftTo(1, a));
    for (; r.isEven();)
      (r.rShiftTo(1, r),
        t
          ? ((o.isEven() && s.isEven()) || (o.addTo(this, o), s.subTo(e, s)),
            o.rShiftTo(1, o))
          : s.isEven() || s.subTo(e, s),
        s.rShiftTo(1, s));
    n.compareTo(r) >= 0
      ? (n.subTo(r, n), t && i.subTo(o, i), a.subTo(s, a))
      : (r.subTo(n, r), t && o.subTo(i, o), s.subTo(a, s));
  }
  if (r.compareTo(P.ONE) != 0) return P.ZERO;
  if (s.compareTo(e) >= 0) return s.subtract(e);
  if (s.signum() < 0) s.addTo(e, s);
  else return s;
  return s.signum() < 0 ? s.add(e) : s;
}
var V = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  rr = (1 << 26) / V[V.length - 1];
function ir(e) {
  var t,
    n = this.abs();
  if (n.t == 1 && n[0] <= V[V.length - 1]) {
    for (t = 0; t < V.length; ++t) if (n[0] == V[t]) return !0;
    return !1;
  }
  if (n.isEven()) return !1;
  for (t = 1; t < V.length;) {
    for (var r = V[t], i = t + 1; i < V.length && r < rr;) r *= V[i++];
    for (r = n.modInt(r); t < i;) if (r % V[t++] == 0) return !1;
  }
  return n.millerRabin(e);
}
function ar(e) {
  var t = this.subtract(P.ONE),
    n = t.getLowestSetBit();
  if (n <= 0) return !1;
  var r = t.shiftRight(n);
  ((e = (e + 1) >> 1), e > V.length && (e = V.length));
  for (var i = F(), a = 0; a < e; ++a) {
    i.fromInt(V[a]);
    var o = i.modPow(r, this);
    if (o.compareTo(P.ONE) != 0 && o.compareTo(t) != 0) {
      for (var s = 1; s++ < n && o.compareTo(t) != 0;)
        if (((o = o.modPowInt(2, this)), o.compareTo(P.ONE) == 0)) return !1;
      if (o.compareTo(t) != 0) return !1;
    }
  }
  return !0;
}
((P.prototype.chunkSize = tn),
  (P.prototype.toRadix = rn),
  (P.prototype.fromRadix = an),
  (P.prototype.fromNumber = on),
  (P.prototype.bitwiseTo = dn),
  (P.prototype.changeBit = On),
  (P.prototype.addTo = Mn),
  (P.prototype.dMultiply = zn),
  (P.prototype.dAddOffset = Bn),
  (P.prototype.multiplyLowerTo = Kn),
  (P.prototype.multiplyUpperTo = qn),
  (P.prototype.modInt = tr),
  (P.prototype.millerRabin = ar),
  (P.prototype.clone = Zt),
  (P.prototype.intValue = Qt),
  (P.prototype.byteValue = $t),
  (P.prototype.shortValue = en),
  (P.prototype.signum = nn),
  (P.prototype.toByteArray = sn),
  (P.prototype.equals = cn),
  (P.prototype.min = ln),
  (P.prototype.max = un),
  (P.prototype.and = pn),
  (P.prototype.or = hn),
  (P.prototype.xor = _n),
  (P.prototype.andNot = yn),
  (P.prototype.not = bn),
  (P.prototype.shiftLeft = xn),
  (P.prototype.shiftRight = Sn),
  (P.prototype.getLowestSetBit = wn),
  (P.prototype.bitCount = En),
  (P.prototype.testBit = Dn),
  (P.prototype.setBit = kn),
  (P.prototype.clearBit = An),
  (P.prototype.flipBit = jn),
  (P.prototype.add = Nn),
  (P.prototype.subtract = Pn),
  (P.prototype.multiply = Fn),
  (P.prototype.divide = In),
  (P.prototype.remainder = Ln),
  (P.prototype.divideAndRemainder = Rn),
  (P.prototype.modPow = $n),
  (P.prototype.modInverse = nr),
  (P.prototype.pow = Gn),
  (P.prototype.gcd = er),
  (P.prototype.isProbablePrime = ir));
var or = function (e, t) {
    ((this.modulus = new P(e, 16)), (this.encryptionExponent = new P(t, 16)));
  },
  sr = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = 0;
      do
        ((n = e.charCodeAt(l++)),
          (r = e.charCodeAt(l++)),
          (i = e.charCodeAt(l++)),
          (a = n >> 2),
          (o = ((n & 3) << 4) | (r >> 4)),
          (s = ((r & 15) << 2) | (i >> 6)),
          (c = i & 63),
          isNaN(r) ? (s = c = 64) : isNaN(i) && (c = 64),
          (t +=
            this.base64.charAt(a) +
            this.base64.charAt(o) +
            this.base64.charAt(s) +
            this.base64.charAt(c)));
      while (l < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var t = ``,
        n,
        r,
        i,
        a,
        o = 0;
      do
        ((n = this.base64.indexOf(e.charAt(o++))),
          (r = this.base64.indexOf(e.charAt(o++))),
          (i = this.base64.indexOf(e.charAt(o++))),
          (a = this.base64.indexOf(e.charAt(o++))),
          (t += String.fromCharCode((n << 2) | (r >> 4))),
          i != 64 && (t += String.fromCharCode(((r & 15) << 4) | (i >> 2))),
          a != 64 && (t += String.fromCharCode(((i & 3) << 6) | a)));
      while (o < e.length);
      return t;
    },
  },
  cr = {
    hex: `0123456789abcdef`,
    encode: function (e) {
      if (!e) return !1;
      var t = ``,
        n,
        r = 0;
      do
        ((n = e.charCodeAt(r++)),
          (t += this.hex.charAt((n >> 4) & 15) + this.hex.charAt(n & 15)));
      while (r < e.length);
      return t;
    },
    decode: function (e) {
      if (!e) return !1;
      e = e.replace(/[^0-9abcdef]/g, ``);
      var t = ``,
        n = 0;
      do
        t += String.fromCharCode(
          ((this.hex.indexOf(e.charAt(n++)) << 4) & 240) |
            (this.hex.indexOf(e.charAt(n++)) & 15),
        );
      while (n < e.length);
      return t;
    },
  },
  lr = {
    getPublicKey: function (e, t) {
      return new or(e, t);
    },
    encrypt: function (e, t) {
      return !t ||
        ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)), !e) ||
        ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
        ? !1
        : ((e = e.toString(16)),
          (e.length & 1) == 1 && (e = `0` + e),
          sr.encode(cr.decode(e)));
    },
    pkcs1pad2: function (e, t) {
      if (t < e.length + 11) return null;
      for (var n = [], r = e.length - 1; r >= 0 && t > 0;)
        n[--t] = e.charCodeAt(r--);
      for (n[--t] = 0; t > 2;) n[--t] = Math.floor(Math.random() * 254) + 1;
      return ((n[--t] = 2), (n[--t] = 0), new P(n));
    },
  },
  ur = new se(`Login`),
  dr = ur.Info;
ur.Debug;
var fr = ur.Warning,
  H = ur.Error;
function pr(e, t) {
  let n = lr.getPublicKey(t.publickey_mod, t.publickey_exp),
    r = lr.encrypt(e, n);
  return r === !1 ? null : r;
}
var U = e(n(), 1),
  mr = e(o(), 1),
  W = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Generic = 1)] = `Generic`),
      (e[(e.Expired = 2)] = `Expired`),
      (e[(e.Network = 3)] = `Network`),
      (e[(e.MoveAuthenticator = 4)] = `MoveAuthenticator`),
      (e[(e.RateLimitExceeded = 5)] = `RateLimitExceeded`),
      (e[(e.AnonymousLogin = 6)] = `AnonymousLogin`),
      e
    );
  })({});
function hr(e) {
  let {
    shared_secret: t,
    identity_secret: n,
    secret_1: r,
    status: i,
    uri: a,
    server_time: o,
    ...s
  } = e;
  return {
    shared_secret: mr.fromByteArray(t),
    identity_secret: mr.fromByteArray(n),
    secret_1: mr.fromByteArray(r),
    ...s,
  };
}
var gr = (function (e) {
  return (
    (e[(e.k_Success = 0)] = `k_Success`),
    (e[(e.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (e[(e.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    e
  );
})({});
function _r(e, t) {
  let n = Object.keys(e);
  return (
    n.length === Object.keys(t).length && n.every((n) => Object.is(e[n], t[n]))
  );
}
var G = class {
  m_setListeners = new Set();
  m_snapshot;
  m_bNotifyPending = !1;
  m_transport;
  m_strClientID;
  m_msPollInterval;
  m_activeTimerID;
  m_rgRequestID;
  m_strTokenToRevoke;
  m_strChallengeURLValue = void 0;
  get m_strChallengeURL() {
    return this.m_strChallengeURLValue;
  }
  set m_strChallengeURL(e) {
    ((this.m_strChallengeURLValue = e), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(e) {
    ((this.m_bRemoteInteractionValue = e), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(e) {
    ((this.m_eFailureStateValue = e), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(e) {
    ((this.m_strExtendedErrorMessageValue = e), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(e, t, n, r) {
    ((this.m_transport = e),
      (this.m_onCompleteCallback = t),
      (this.m_onDeviceDetailsCallback = n),
      (this.m_onShowAgreement = r));
  }
  Subscribe(e) {
    return (
      this.m_setListeners.add(e),
      () => {
        this.m_setListeners.delete(e);
      }
    );
  }
  GetSnapshot() {
    let e = this.BuildSnapshot();
    return (
      (this.m_snapshot && _r(this.m_snapshot, e)) || (this.m_snapshot = e),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let e of this.m_setListeners) e();
      }));
  }
  StartPolling(e = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      e
        ? this.PollForUpdate()
        : (this.m_activeTimerID = window.setTimeout(
            this.PollForUpdate,
            this.m_msPollInterval,
          )));
  }
  StopPolling() {
    (window.clearTimeout(this.m_activeTimerID),
      (this.m_activeTimerID = void 0));
  }
  async PollForUpdate() {
    try {
      let e = k.Init(be);
      (e.SetEMsg(ae),
        e.Body().set_client_id(this.m_strClientID),
        e.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          e.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let t = await M.PollAuthSessionStatus(this.m_transport, e),
        n = t.GetEResult();
      if (n !== 1) {
        if (n === 2) {
          let e = t.Hdr().transport_error();
          if (
            (H(
              `Failed to poll auth session. Result ${n}. Transport Error: ${e}`,
            ),
            e === 2 || e === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (n === 9 || n === 27) this.m_eFailureState = 2;
        else if (n === 84) this.m_eFailureState = 5;
        else if (n == 118) {
          let e = t.Body().agreement_session_url();
          if (
            (u(!!e, `Missing agreement session URL for result`, n),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(e);
          else {
            let t = location.href;
            window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
          }
          return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
        } else
          (H(`Failed to poll auth session. Result: ${n}`),
            (this.m_eFailureState = 1));
        return (this.m_onCompleteCallback({ bSuccess: !1 }), n);
      }
      let {
        new_challenge_url: r,
        new_client_id: i,
        refresh_token: a,
        access_token: o,
        account_name: s,
        had_remote_interaction: c,
        new_guard_data: l,
      } = t.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!c),
        a
          ? (u(
              !!o && !!s,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: a,
              strAccessToken: o,
              strAccountName: s,
              strNewGuardData: l,
            }),
            n)
          : (r && (this.m_strChallengeURL = r),
            i && (this.m_strClientID = i),
            this.StartPolling(!1),
            n)
      );
    } catch (e) {
      return (
        H(`Failed to poll auth session. ${e}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({ bSuccess: !1 }),
        2
      );
    }
  }
  SetTokenToRevoke(e) {
    this.m_strTokenToRevoke = e;
  }
  GetFailureState() {
    return this.m_eFailureState;
  }
  GetExtendedErrorMessage() {
    return this.m_strExtendedErrorMessage;
  }
  BHadRemoteInteraction() {
    return this.m_bRemoteInteraction;
  }
  async GetDeviceDetails() {
    let e = await this.m_onDeviceDetailsCallback();
    return me.fromObject(e);
  }
};
(D([x], G.prototype, `Subscribe`, null),
  D([x], G.prototype, `GetSnapshot`, null),
  D([x], G.prototype, `PollForUpdate`, null),
  D([x], G.prototype, `SetTokenToRevoke`, null));
function vr(e) {
  let t = new FormData();
  (t.append(`nonce`, e), t.append(`sessionid`, ue(f) ?? ``));
  let n = new URL(location.href),
    r = new URLSearchParams(n.search);
  (r.has(`need_password`) &&
    (r.delete(`need_password`), (n.search = r.toString())),
    t.append(`redir`, n.toString()));
  let i = `${T.LOGIN_BASE_URL}jwt/finalizelogin`;
  return U.default.post(i, t, { withCredentials: !0 }).then(
    (e) => {
      let { data: t } = e;
      if (
        !t ||
        !t.transfer_info ||
        !t.steamID ||
        !Array.isArray(t.transfer_info)
      )
        return (H(`Result of finalizelogin does not match expectations!`), 1);
      let { transfer_info: n, steamID: r, primary_domain: i } = t;
      return Promise.all(
        n.map(({ url: e, params: t }) => br(e, { ...t, steamID: r })),
      ).then(
        (e) => yr(e, i),
        () => 2,
      );
    },
    () => (H(`Failed to finalize login. Initial call failed.`), 1),
  );
}
function yr(e, t) {
  let n = 0;
  return (
    e.forEach((e) => {
      e.bSuccess ||
        (t && e.domain.toLowerCase() === t.toLowerCase()
          ? (n = 1)
          : n == 0 && (n = 2));
    }),
    n
  );
}
async function br(e, t) {
  let n = new URL(e),
    r = !0;
  try {
    let i = new FormData();
    Object.keys(t).forEach((e) => i.append(e, t[e]));
    let a = await U.default.post(e, i, { withCredentials: !0, timeout: 1e4 });
    a.status === 200
      ? a.data.result !== 1 &&
        (H(`Transfer login to ${n.host} failed with result: ${a.data.result}`),
        (r = !1))
      : (H(`Transfer login to ${n.host} failed with status code: ${a.status}`),
        (r = !1));
  } catch (e) {
    (H(`Transfer login to ${n.host} failed: "${e}"`), (r = !1));
  }
  return { bSuccess: r, domain: n.host };
}
var xr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time: { n: 1, br: v.readUint32, bw: _.writeUint32 },
            usage_type: { n: 2, br: v.readEnum, bw: _.writeEnum },
            confirmation_type: { n: 3, br: v.readInt32, bw: _.writeInt32 },
            confirmation_action: { n: 4, br: v.readInt32, bw: _.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UsageEvent`;
    }
  },
  Sr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sender_time || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sender_time: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Request`;
    }
  },
  Cr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.server_time || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_time: {
              n: 1,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            skew_tolerance_seconds: {
              n: 2,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            large_time_jink: {
              n: 3,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            probe_frequency_seconds: {
              n: 4,
              br: v.readUint32,
              bw: _.writeUint32,
            },
            adjusted_time_probe_frequency_seconds: {
              n: 5,
              br: v.readUint32,
              bw: _.writeUint32,
            },
            hint_probe_frequency_seconds: {
              n: 6,
              br: v.readUint32,
              bw: _.writeUint32,
            },
            sync_timeout: { n: 7, br: v.readUint32, bw: _.writeUint32 },
            try_again_seconds: { n: 8, br: v.readUint32, bw: _.writeUint32 },
            max_attempts: { n: 9, br: v.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Response`;
    }
  },
  wr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            include: { n: 2, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Request`;
    }
  },
  Tr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.state || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            state: { n: 1, br: v.readUint32, bw: _.writeUint32 },
            inactivation_reason: { n: 2, br: v.readUint32, bw: _.writeUint32 },
            authenticator_type: { n: 3, br: v.readUint32, bw: _.writeUint32 },
            authenticator_allowed: { n: 4, br: v.readBool, bw: _.writeBool },
            steamguard_scheme: { n: 5, br: v.readUint32, bw: _.writeUint32 },
            token_gid: { n: 6, br: v.readString, bw: _.writeString },
            email_validated: { n: 7, br: v.readBool, bw: _.writeBool },
            device_identifier: { n: 8, br: v.readString, bw: _.writeString },
            time_created: { n: 9, br: v.readUint32, bw: _.writeUint32 },
            revocation_attempts_remaining: {
              n: 10,
              br: v.readUint32,
              bw: _.writeUint32,
            },
            classified_agent: { n: 11, br: v.readString, bw: _.writeString },
            allow_external_authenticator: {
              n: 12,
              br: v.readBool,
              bw: _.writeBool,
            },
            time_transferred: { n: 13, br: v.readUint32, bw: _.writeUint32 },
            version: { n: 14, br: v.readUint32, bw: _.writeUint32 },
            last_seen_auth_token_id: {
              n: 15,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            usages: { n: 16, c: xr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Response`;
    }
  },
  Er = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [7], null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            authenticator_time: {
              n: 2,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            serial_number: {
              n: 3,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            authenticator_type: { n: 4, br: v.readUint32, bw: _.writeUint32 },
            device_identifier: { n: 5, br: v.readString, bw: _.writeString },
            http_headers: {
              n: 7,
              r: !0,
              q: !0,
              br: v.readString,
              bw: _.writeRepeatedString,
            },
            version: { n: 8, d: 1, br: v.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Request`;
    }
  },
  Dr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: v.readBytes, bw: _.writeBytes },
            serial_number: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            revocation_code: { n: 3, br: v.readString, bw: _.writeString },
            uri: { n: 4, br: v.readString, bw: _.writeString },
            server_time: {
              n: 5,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            account_name: { n: 6, br: v.readString, bw: _.writeString },
            token_gid: { n: 7, br: v.readString, bw: _.writeString },
            identity_secret: { n: 8, br: v.readBytes, bw: _.writeBytes },
            secret_1: { n: 9, br: v.readBytes, bw: _.writeBytes },
            status: { n: 10, br: v.readInt32, bw: _.writeInt32 },
            phone_number_hint: { n: 11, br: v.readString, bw: _.writeString },
            confirm_type: { n: 12, br: v.readInt32, bw: _.writeInt32 },
            next_step: { n: 13, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Response`;
    }
  },
  Or = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, [5], null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            authenticator_code: { n: 2, br: v.readString, bw: _.writeString },
            authenticator_time: {
              n: 3,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            activation_code: { n: 4, br: v.readString, bw: _.writeString },
            http_headers: {
              n: 5,
              r: !0,
              q: !0,
              br: v.readString,
              bw: _.writeRepeatedString,
            },
            validate_sms_code: { n: 6, br: v.readBool, bw: _.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Request`;
    }
  },
  kr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: v.readBool, bw: _.writeBool },
            server_time: {
              n: 3,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            status: { n: 4, br: v.readInt32, bw: _.writeInt32 },
            next_step: { n: 5, br: v.readEnum, bw: _.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Response`;
    }
  },
  Ar = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.revocation_code || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            revocation_code: { n: 2, br: v.readString, bw: _.writeString },
            revocation_reason: { n: 5, br: v.readUint32, bw: _.writeUint32 },
            steamguard_scheme: { n: 6, br: v.readUint32, bw: _.writeUint32 },
            remove_all_steamguard_cookies: {
              n: 7,
              br: v.readBool,
              bw: _.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Request`;
    }
  },
  jr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: v.readBool, bw: _.writeBool },
            server_time: {
              n: 3,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            revocation_attempts_remaining: {
              n: 5,
              br: v.readUint32,
              bw: _.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Response`;
    }
  },
  Mr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request`;
    }
  },
  Nr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: v.readBool, bw: _.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response`;
    }
  },
  Pr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sms_code || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sms_code: { n: 1, br: v.readString, bw: _.writeString },
            generate_new_token: { n: 2, br: v.readBool, bw: _.writeBool },
            version: { n: 3, d: 1, br: v.readUint32, bw: _.writeUint32 },
            caller_version: { n: 4, br: v.readUint32, bw: _.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request`;
    }
  },
  Fr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.shared_secret || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            shared_secret: { n: 1, br: v.readBytes, bw: _.writeBytes },
            serial_number: {
              n: 2,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            revocation_code: { n: 3, br: v.readString, bw: _.writeString },
            uri: { n: 4, br: v.readString, bw: _.writeString },
            server_time: {
              n: 5,
              br: v.readUint64String,
              bw: _.writeUint64String,
            },
            account_name: { n: 6, br: v.readString, bw: _.writeString },
            token_gid: { n: 7, br: v.readString, bw: _.writeString },
            identity_secret: { n: 8, br: v.readBytes, bw: _.writeBytes },
            secret_1: { n: 9, br: v.readBytes, bw: _.writeBytes },
            status: { n: 10, br: v.readInt32, bw: _.writeInt32 },
            steamguard_scheme: { n: 11, br: v.readUint32, bw: _.writeUint32 },
            steamid: {
              n: 12,
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRemoveAuthenticatorViaChallengeContinue_Replacement_Token`;
    }
  },
  Ir = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            success: { n: 1, br: v.readBool, bw: _.writeBool },
            replacement_token: { n: 2, c: Fr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response`;
    }
  },
  Lr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || O(e.M()),
        j.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: v.readFixed64String,
              bw: _.writeFixed64String,
            },
            version: { n: 2, br: v.readUint32, bw: _.writeUint32 },
            signature: { n: 3, br: v.readBytes, bw: _.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= y(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return g(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return d(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      b(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Request`;
    }
  },
  Rr = class e extends j.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), j.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new j.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new j.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Response`;
    }
  },
  zr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryTime#1`, A(Sr, t, n), Cr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.QueryTime = t;
  function n(e, t, n) {
    return e.SendMsg(`TwoFactor.QueryStatus#1`, A(wr, t, n), Tr, {
      ePrivilege: 1,
    });
  }
  e.QueryStatus = n;
  function r(e, t, n) {
    return e.SendMsg(`TwoFactor.AddAuthenticator#1`, A(Er, t, n), Dr, {
      ePrivilege: 1,
    });
  }
  e.AddAuthenticator = r;
  function i(e, t, n) {
    return e.SendMsg(`TwoFactor.FinalizeAddAuthenticator#1`, A(Or, t, n), kr, {
      ePrivilege: 1,
    });
  }
  e.FinalizeAddAuthenticator = i;
  function a(e, t, n) {
    return e.SendMsg(`TwoFactor.UpdateTokenVersion#1`, A(Lr, t, n), Rr, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdateTokenVersion = a;
  function o(e, t, n) {
    return e.SendMsg(`TwoFactor.RemoveAuthenticator#1`, A(Ar, t, n), jr, {
      ePrivilege: 9,
    });
  }
  e.RemoveAuthenticator = o;
  function s(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeStart#1`,
      A(Mr, t, n),
      Nr,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeStart = s;
  function c(e, t, n) {
    return e.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeContinue#1`,
      A(Pr, t, n),
      Ir,
      { ePrivilege: 9 },
    );
  }
  e.RemoveAuthenticatorViaChallengeContinue = c;
})((zr ||= {}));
var K = e(i(), 1),
  q = class extends G {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_steamid;
    m_strAccountName;
    m_strConfirmationAssociatedMessage = ``;
    m_bUsingCodeOverride = !1;
    m_strWeakAuthToken = ``;
    m_weakAuthWebInterface;
    m_onGetMachineAuth;
    m_replacementAuthenticator;
    m_strErrorReferenceValue = ``;
    get m_strErrorReference() {
      return this.m_strErrorReferenceValue;
    }
    set m_strErrorReference(e) {
      ((this.m_strErrorReferenceValue = e), this.NotifyChanged());
    }
    m_onLoginComplete;
    constructor(e) {
      (super(
        e.transport,
        (e) => this.onAuthComplete(e),
        e.onDeviceDetails,
        e.onShowAgreement,
      ),
        (this.m_onLoginComplete = e.onComplete),
        (this.m_onGetMachineAuth = e.onGetMachineAuth));
    }
    BuildSnapshot() {
      return {
        strAccountName: this.GetAccountName(),
        steamid: this.GetSteamID(),
        eFailureState: this.GetFailureState(),
        strExtendedErrorMessage: this.GetExtendedErrorMessage(),
        strErrorReference: this.GetErrorReference(),
        strConfirmationAssociatedMessage:
          this.GetConfirmationAssociatedMessage(),
        eStatus: this.GetStatus(),
        bCanGoBack: this.BCanGoBack(),
        replacementAuthenticator: this.GetReplacementAuthenticator(),
      };
    }
    async Start(e, t, n) {
      if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
        return (
          H(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          29
        );
      let r = e.replace(/[^\x00-\x7F]/g, ``),
        i = t.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
      if (!r.length || !i.length) return 8;
      if (
        ((this.m_eStatus = 1),
        (this.m_bUsingCodeOverride = !1),
        e == `anonymous`)
      )
        return (this.SetFailureState(W.AnonymousLogin, J.EResult(12)), 12);
      try {
        let t = await Br(this.m_transport, r);
        if (!t)
          return (
            H(`Cannot start auth session without a valid RSA key`),
            this.SetFailureState(W.Network, J.EResult(20)),
            20
          );
        let a = pr(i, t),
          o = k.Init(ve);
        (o.SetEMsg(ae),
          o.Body().set_account_name(r),
          o.Body().set_encrypted_password(a ?? void 0),
          o.Body().set_encryption_timestamp(t.timestamp),
          o.Body().set_remember_login(!!n),
          o.Body().set_persistence(+!!n));
        let s = oe();
        s && o.Body().set_website_id(s.WEBSITE_ID);
        try {
          o.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (H(`Failed to GetDeviceDetails`), H(e));
        }
        if (
          (o.Body().set_language(ne(T.LANGUAGE)),
          this.m_onGetMachineAuth != null)
        ) {
          let e = await this.m_onGetMachineAuth(r);
          e.eresult == 1 && o.Body().set_guard_data(e.data);
        }
        await this.m_transport.MakeReady();
        let c = await M.BeginAuthSessionViaCredentials(this.m_transport, o);
        c.DEBUG_LogToConsole();
        let l = c.GetEResult(),
          d = c.Hdr().transport_error();
        if (l !== 1)
          switch (l) {
            case 5:
              return ((this.m_eStatus = 2), l);
            case 20:
            case 3:
              return (this.SetFailureState(W.Network, J.EResult(20)), l);
            case 84:
              return (
                this.SetFailureState(W.RateLimitExceeded, J.EResult(l)), l
              );
            case 118: {
              let e = c.Body().agreement_session_url();
              if (
                (u(!!e, `Missing agreement session URL for result`, l),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(e);
              else {
                let t = location.href;
                window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
              }
              return (
                this.m_onCompleteCallback({ bSuccess: !1 }),
                (this.m_eStatus = 0),
                l
              );
            }
            default:
              return (
                H(`Failed to start auth session. Result: ${l} Transport: ${d}`),
                this.SetFailureState(
                  W.Generic,
                  J.EResult(l),
                  c.Body().extended_error_message(),
                ),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l
              );
          }
        this.m_strAccountName = e;
        let {
          client_id: f,
          request_id: p,
          interval: m,
          allowed_confirmations: h = [],
          steamid: g,
          weak_token: _,
        } = c.Body().toObject();
        if (
          (u(
            m !== void 0 && !!f && !!g,
            `Missing poll interval, client ID, or steamid for result`,
            l,
          ),
          (this.m_msPollInterval = m * 1e3),
          (this.m_strClientID = f),
          (this.m_rgRequestID = p),
          (this.m_steamid = g),
          (this.m_strWeakAuthToken = _ ?? ``),
          h.find(({ confirmation_type: e }) => e === 6))
        ) {
          let e = new FormData();
          (e.append(`clientid`, f), e.append(`steamid`, g));
          let t = `${T.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
          try {
            if (
              (
                await U.default.post(t, e, {
                  headers: { "Content-Type": `multipart/form-data` },
                  withCredentials: !0,
                })
              ).data.result == 1
            )
              return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
          } catch (e) {
            if (
              (dr(`checkdevice ajax to ${t} failed: ${e.message}`),
              e instanceof U.AxiosError)
            ) {
              let t = e;
              return t.response
                ? (this.SetFailureState(
                    W.Network,
                    J.AjaxFailureWithCode(t.response.status),
                  ),
                  20)
                : (this.SetFailureState(W.Network, J.AjaxFailureNoCode()), 20);
            }
            return (this.SetFailureState(W.Network, J.EResult(79)), 79);
          }
        }
        let v = Hr(
            h.map(
              ({ confirmation_type: e }) => (
                u(
                  e !== void 0,
                  `Missing confirmation type in allowed confirmations`,
                ),
                e
              ),
            ),
          ),
          y = h.find(({ confirmation_type: e }) => e === v);
        switch (
          (y &&
            y.associated_message &&
            (this.m_strConfirmationAssociatedMessage = y.associated_message),
          v)
        ) {
          case 1:
            return ((this.m_eStatus = 13), this.StartPolling(), l);
          case 2:
            this.m_eStatus = 3;
            break;
          case 5:
            ((this.m_eStatus = 4), this.StartPolling(!1));
            break;
          case 3:
            ((this.m_eStatus = 5), this.StartPolling(!1));
            break;
          case 4:
            ((this.m_eStatus = 6), this.StartPolling(!1));
        }
        return l;
      } catch (e) {
        return (
          H(`Failed to start auth session. Exception: ${JSON.stringify(e)}`),
          dr(e),
          this.SetFailureState(W.Generic, J.FailedToStart()),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 16));
    }
    GetStatus() {
      return this.m_eStatus;
    }
    GetConfirmationAssociatedMessage() {
      return this.m_strConfirmationAssociatedMessage;
    }
    GetAccountName() {
      return this.m_strAccountName;
    }
    GetSteamID() {
      return this.m_steamid;
    }
    GetReplacementAuthenticator() {
      return this.m_replacementAuthenticator;
    }
    GetErrorReference() {
      return this.m_strErrorReference;
    }
    async SendSteamGuardCode(e, t = !0) {
      if (e.length == 0) {
        switch (this.m_eStatus) {
          case 10:
            this.m_eStatus = 3;
            break;
          case 11:
            this.m_eStatus = 5;
            break;
          case 5:
          case 3:
            break;
          default:
            throw Error(`Attempted to clear code in invalid state`);
        }
        return Promise.resolve(1);
      }
      try {
        await this.m_transport.MakeReady();
        let n = this.m_eStatus === 3 || this.m_eStatus === 10,
          r = k.Init(Me);
        (r.SetEMsg(ae),
          r.Body().set_client_id(this.m_strClientID),
          r.Body().set_steamid(this.m_steamid),
          r.Body().set_code(e),
          r.Body().set_code_type(n ? 2 : 3));
        let i = await M.UpdateAuthSessionWithSteamGuardCode(
            this.m_transport,
            r,
          ),
          a = i.GetEResult();
        if (a !== 1) {
          if (!t)
            return (
              H(
                `Failed to automatically update session with local SG info. Result ${a}. Transport ${i.Hdr().transport_error()}`,
              ),
              a
            );
          switch (a) {
            case 65:
            case 88:
              return ((this.m_eStatus = n ? 10 : 11), a);
            case 27:
              return (
                this.SetFailureState(W.Expired, J.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
            case 84:
              return (
                this.SetFailureState(W.RateLimitExceeded, J.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
            case 118: {
              let e = i.Body().agreement_session_url();
              if (
                (u(!!e, `Missing agreement session URL for result`, a),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(e);
              else {
                let t = location.href;
                window.location.href = `${e}&redir=${encodeURIComponent(t)}`;
              }
              return (
                this.m_onCompleteCallback({ bSuccess: !1 }),
                (this.m_eStatus = 0),
                a
              );
            }
            default:
              return (
                H(`Failed to update auth session with SG code. Result: ${a}`),
                this.SetFailureState(W.Generic, J.EResult(a)),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                a
              );
          }
        }
        return ((this.m_eStatus = 13), this.StartPolling(), a);
      } catch (e) {
        return (
          H(`Failed to update auth session with SG code. ${e}`),
          this.SetFailureState(W.Generic, J.FailedToAddCode()),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    UseCodeOverride() {
      switch (this.m_eStatus) {
        case 6:
          ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 5));
          return;
        case 4:
          ((this.m_bUsingCodeOverride = !0), (this.m_eStatus = 3));
          return;
        default:
          H(
            `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    CantAccessCode() {
      this.m_eStatus = 7;
    }
    async StartMoveAuthenticator() {
      this.m_weakAuthWebInterface = new re(
        T.WEBAPI_BASE_URL,
        this.m_strWeakAuthToken,
      );
      try {
        let e = k.Init(Mr),
          t = await zr.RemoveAuthenticatorViaChallengeStart(
            this.m_weakAuthWebInterface.GetServiceTransport(),
            e,
          );
        t.GetEResult() == 1
          ? (this.m_eStatus = 8)
          : (t.DEBUG_LogToConsole(),
            H(
              `An unexpected error occured while adding an authenticator`,
              t.GetEResult(),
            ),
            this.SetFailureState(
              W.MoveAuthenticator,
              J.EResult(t.GetEResult()),
            ));
      } catch (e) {
        (H(`An unexpected error occured while moving an authenticator`, e),
          this.SetFailureState(W.MoveAuthenticator, J.EResult(2)));
      }
    }
    async ResendMoveCode() {
      u(
        !!this.m_weakAuthWebInterface,
        `Resending move code before StartMoveAuthenticator`,
      );
      let e = k.Init(Mr),
        t = await zr.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          e,
        );
      (t.GetEResult() != 1 &&
        (t.DEBUG_LogToConsole(),
        H(
          `An unexpected error occured while adding an authenticator`,
          t.GetEResult(),
        )),
        (this.m_eStatus = 8));
    }
    async FinishMoveAuthenticator(e) {
      u(
        !!this.m_weakAuthWebInterface,
        `Finishing authenticator move before StartMoveAuthenticator`,
      );
      let t = k.Init(Pr);
      (t.Body().set_sms_code(e),
        t.Body().set_generate_new_token(!0),
        t.Body().set_version(2));
      let n = await zr.RemoveAuthenticatorViaChallengeContinue(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        t,
      );
      if (n.GetEResult() == 94) this.m_eStatus = 12;
      else if (!n.Body().success())
        (n.DEBUG_LogToConsole(),
          H(
            `Error when calling RemoveAuthenticatorViaChallengeContinue`,
            n.GetEResult(),
          ),
          this.SetFailureState(W.MoveAuthenticator, J.EResult(n.GetEResult())));
      else {
        n.DEBUG_LogToConsole();
        let e = n.Body().replacement_token();
        (u(!!e, `Missing replacement token on successful authenticator move`),
          (this.m_replacementAuthenticator = hr(e.toObject())),
          (this.m_eStatus = 9),
          (this.m_bUsingCodeOverride = !1));
      }
    }
    FinishMoveRecovery() {
      this.m_eStatus = 5;
    }
    BCanGoBack() {
      switch (this.m_eStatus) {
        case 5:
        case 11:
        case 3:
        case 10:
        case 6:
        case 4:
        case 7:
        case 8:
        case 12:
          return !0;
        default:
          return !1;
      }
    }
    GoBack() {
      switch (this.m_eStatus) {
        case 6:
        case 4:
          this.m_eStatus = 0;
          break;
        case 5:
        case 11:
          this.m_eStatus = this.m_bUsingCodeOverride ? 6 : 0;
          break;
        case 7:
        case 8:
        case 12:
          this.m_eStatus = (this.m_bUsingCodeOverride, 5);
          break;
        case 3:
        case 10:
          this.m_eStatus = this.m_bUsingCodeOverride ? 4 : 0;
          break;
        default:
          H(
            `Don't know how to GoBack from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    SetFailureState(e, t, n = ``) {
      ((this.m_eStatus = 15),
        (this.m_eFailureState = e),
        (this.m_strErrorReference = t),
        (this.m_strExtendedErrorMessage = n));
    }
    onAuthComplete = (e) => {
      this.m_eStatus = e.bSuccess ? 14 : 15;
      let t;
      (e.bSuccess
        ? (u(
            !!this.m_strAccountName && !!this.m_steamid,
            `Missing account name or steamid on auth success`,
          ),
          (t = {
            ...e,
            strAccountName: this.m_strAccountName,
            steamid: this.m_steamid,
          }))
        : (t = { bSuccess: !1 }),
        this.m_onLoginComplete && this.m_onLoginComplete(t));
    };
    SetOnLoginComplete(e) {
      this.m_onLoginComplete = e;
    }
  };
(D([x], q.prototype, `Start`, null),
  D([x], q.prototype, `SendSteamGuardCode`, null),
  D([x], q.prototype, `UseCodeOverride`, null),
  D([x], q.prototype, `CantAccessCode`, null),
  D([x], q.prototype, `StartMoveAuthenticator`, null),
  D([x], q.prototype, `ResendMoveCode`, null),
  D([x], q.prototype, `FinishMoveAuthenticator`, null),
  D([x], q.prototype, `FinishMoveRecovery`, null),
  D([x], q.prototype, `GoBack`, null),
  D([x], q.prototype, `SetOnLoginComplete`, null));
async function Br(e, t) {
  let n = k.Init(fe);
  (n.Body().set_account_name(t), n.SetEMsg(ae));
  try {
    await e.MakeReady();
    let t = await M.GetPasswordRSAPublicKey(e, n);
    if ((t.DEBUG_LogToConsole(), t.GetEResult() !== 1))
      return (H(`Failed to get RSA key with EResult: ${t.GetEResult()}`), null);
    let {
      publickey_exp: r,
      publickey_mod: i,
      timestamp: a,
    } = t.Body().toObject();
    return !r || !i || !a
      ? (H(
          `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: r, publickey_mod: i, timestamp: a })}`,
        ),
        null)
      : { publickey_exp: r, publickey_mod: i, timestamp: a };
  } catch (e) {
    return (H(`Failed to get RSA key: ${JSON.stringify(e)}`), null);
  }
}
var Vr = [4, 3, 2, 1, 0, 5].reduce((e, t, n) => ((e[t] = n), e), {});
function Hr(e) {
  let t = e[0] || 0;
  return (e.length > 1 && (t = e.sort((e, t) => Vr[e] - Vr[t])[0]), t);
}
function Ur(e) {
  let [t, n] = (0, K.useState)(() => new q(e));
  return (
    (0, K.useEffect)(() => {
      t?.SetOnLoginComplete(e.onComplete);
    }, [t, e.onComplete]),
    {
      ...(0, K.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      start: t.Start,
      addCode: t.SendSteamGuardCode,
      useCodeOverride: t.UseCodeOverride,
      cantAccessCode: t.CantAccessCode,
      startMoveAuthenticator: t.StartMoveAuthenticator,
      resendMoveCode: t.ResendMoveCode,
      finishMoveAuthenticator: t.FinishMoveAuthenticator,
      finishMoveRecovery: t.FinishMoveRecovery,
      reset: () => n(new q(e)),
      goBack: t.GoBack,
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
function Wr(e) {
  return e ? 7 : 5;
}
function Gr(e, t) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(e) && e.length <= Wr(t);
}
function Kr(e, t) {
  return Gr(e, t) && e.length === Wr(t);
}
var J = {
    EResult: (e) => `e${e}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (e) => `af-${e}`,
  },
  qr = class extends G {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(e) {
      ((this.m_eStatusValue = e), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(e) {
      (super(
        e.transport,
        (t) => {
          ((this.m_eStatus = t.bSuccess ? 3 : 4), e.onComplete(t));
        },
        e.onDeviceDetails,
      ),
        e.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = e.preloaded.strClientID),
          (this.m_strChallengeURL = e.preloaded.strChallengeURL),
          (this.m_msPollInterval = e.preloaded.msPollInterval),
          (this.m_rgRequestID = e.preloaded.rgRequestID),
          (this.m_bPreloaded = !0)));
    }
    BuildSnapshot() {
      return {
        strChallengeURL: this.GetChallengeURL(),
        strClientID: this.GetClientID(),
        eFailureState: this.GetFailureState(),
        eStatus: this.GetStatus(),
        bHadRemoteInteraction: this.BHadRemoteInteraction(),
      };
    }
    async Start() {
      if (this.m_bPreloaded && (this.m_eStatus === 2 || this.m_eStatus === 5))
        return (
          (this.m_eStatus = 2),
          this.m_transport.MakeReady(),
          this.StartPolling(!1),
          1
        );
      if (this.m_eStatus !== 0)
        return (
          console.error(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          2
        );
      this.m_eStatus = 1;
      try {
        await this.m_transport.MakeReady();
        let e = k.Init(ge);
        e.SetEMsg(ae);
        try {
          e.Body().set_device_details(await this.GetDeviceDetails());
        } catch (e) {
          (console.error(`Failed to GetDeviceDetails`), console.log(e));
        }
        let t = oe();
        t && e.Body().set_website_id(t.WEBSITE_ID);
        let n = await M.BeginAuthSessionViaQR(this.m_transport, e),
          r = n.GetEResult(),
          i = n.Hdr().transport_error();
        if (r !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${r} Transport: ${i}`,
            ),
            (this.m_eFailureState = W.Generic),
            this.m_onCompleteCallback({ bSuccess: !1 }),
            r
          );
        let {
          client_id: a,
          challenge_url: o,
          interval: s,
          request_id: c,
        } = n.Body().toObject();
        return (
          u(s !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = a),
          (this.m_strChallengeURL = o),
          (this.m_msPollInterval = s * 1e3),
          (this.m_rgRequestID = c),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          r
        );
      } catch (e) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(e)}`),
          (this.m_eFailureState = W.Generic),
          this.m_onCompleteCallback({ bSuccess: !1 }),
          2
        );
      }
    }
    Stop() {
      (this.StopPolling(), (this.m_eStatus = 5));
    }
    GetChallengeURL() {
      return this.m_strChallengeURL;
    }
    GetClientID() {
      return this.m_strClientID;
    }
    GetStatus() {
      return this.m_eStatus;
    }
  };
function Jr(e) {
  let [t, n] = (0, K.useState)(() => new qr(e));
  return (
    (0, K.useEffect)(
      () => (
        t.Start(),
        () => {
          t.Stop();
        }
      ),
      [t],
    ),
    {
      ...(0, K.useSyncExternalStore)(t.Subscribe, t.GetSnapshot, t.GetSnapshot),
      reset: () => n(new qr({ ...e, preloaded: void 0 })),
      setTokenToRevoke: t.SetTokenToRevoke,
    }
  );
}
async function Yr() {
  let [e, t, n, r] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: e,
    device_friendly_name: n,
    machine_id: r,
    platform_type: 1,
    gaming_device_type: t.eGamingDeviceType,
  };
}
async function Xr() {
  return { device_friendly_name: window.navigator.userAgent, platform_type: 2 };
}
var Zr = `Login_RememberMeSetting`;
function Qr(e) {
  let { onSuccess: t, secureComputer: n = !0, isProbablySharedPC: r = !1 } = e,
    i = (0, K.useCallback)(
      (e) => {
        if (e.bSuccess) {
          let {
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          } = e;
          t({
            strRefreshToken: n,
            strAccessToken: r,
            strAccountName: i,
            strNewGuardData: a,
          });
        }
      },
      [t],
    ),
    a = Ur({
      transport: e.transport,
      onComplete: i,
      onDeviceDetails: e.onDeviceDetails,
      onGetMachineAuth: e.onGetMachineAuth,
      onShowAgreement: e.onShowAgreement,
    }),
    [o, s] = (0, K.useState)(0),
    [c, l] = (0, K.useState)(
      e.refreshInfo?.account_name ?? e.defaultAccountName ?? ``,
    ),
    [u, d] = (0, K.useState)(``),
    [f, p] = (0, K.useState)(n && !r);
  (0, K.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(Zr) == `0` && p(!1);
  }, []);
  let m = a.eStatus !== 0 && a.eStatus !== 1 && a.eStatus !== 2;
  return (
    (0, K.useEffect)(() => {
      e.refreshInfo?.login_token_id &&
        a.setTokenToRevoke(e.refreshInfo.login_token_id);
    }, [e.refreshInfo, a]),
    {
      password: a,
      onComplete: i,
      eQRStatus: o,
      onQRStatusChange: s,
      strAccountName: c,
      onAccountNameChange: l,
      strPassword: u,
      onPasswordChange: d,
      bRememberMe: f,
      onRememberMeChange: (e) => {
        (p(e), localStorage?.setItem(Zr, e ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !c || !u ? Promise.resolve(8) : a.start(c, u, f),
      bInPasswordFlow: m,
      onTryOffline: () => {
        (dr(`Logging in offline with username ${c}`),
          SteamClient.User.SetLoginCredentials(c, u, f),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function $r(e, t = ``) {
  let n = { title: ``, description: `` };
  switch (e) {
    case W.None:
      return { title: ``, description: `` };
    case W.Expired:
      n = {
        title: w.Localize(`#Login_Error_Expired_Title`),
        description: w.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case W.Network:
      n = {
        title: w.Localize(`#Login_Error_Network_Title`),
        description: w.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case W.MoveAuthenticator:
      n = {
        title: w.Localize(`#Error_Generic`),
        description: w.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case W.RateLimitExceeded:
      n = {
        title: w.Localize(`#Login_Error_RateLimit_Title`),
        description: w.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case W.AnonymousLogin:
      n = {
        title: w.Localize(`#Login_Error_Anonymous_Title`),
        description: w.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case W.Generic:
    default:
      n = {
        title: w.Localize(`#Error_Generic`),
        description: w.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (t && (n.description = t), n);
}
var ei = `ZhRwp4aSW-8-`,
  ti = `QV15rhpdkBI-`,
  ni = `StondD-Afl4-`,
  ri = `zENCcMUG1lQ-`,
  ii = `_3M1tVbU6uAM-`,
  ai = `rQS7qJ7cGq8-`,
  oi = `WlYK7flUyzk-`,
  si = `p0lt1P2vwbI-`,
  ci = `Lw5H9Bgq0ww-`,
  li = `HD-XkY2oIS0-`,
  ui = `t972389vN-Y-`,
  di = `_5U7-qgmzcvo-`,
  fi = `-HdQ6mrZKtA-`,
  pi = `Tr28R97XrnU-`,
  mi = `_17vA1ePJ-dw-`,
  hi = `hYiUBswjB8E-`,
  gi = `l-m0O8YsKvg-`,
  _i = `WNU0cJCzPqA-`,
  vi = `sljnSz9B7VM-`,
  yi = `KE-CI3fCrt4-`,
  bi = `F2-23fRyFdg-`,
  xi = `_9ehBJOSNpjY-`,
  Si = `H2e67uoFTZo-`,
  Ci = `_0O9XQ4NvNgg-`,
  wi = `SJJMt5-Nlqc-`,
  Ti = `_5HbDhenxKKA-`,
  Ei = `JRre8-r--eY-`,
  Di = `-wYn7tUZ-Qc-`,
  Oi = `Y0ZBzWFxTiU-`,
  ki = `_7xRNYgociu0-`,
  Ai = `Rq9MD5lNpxw-`,
  ji = `aDxXoSR2-2M-`,
  Mi = `A44IVG2oXaA-`,
  Ni = `DJzHz8vrR58-`,
  Pi = `_6uA-qQnXgqs-`,
  Fi = `zS2JKIAoqLs-`,
  Ii = `g2m1tomZf5Y-`,
  Li = `DSy9L5eaj5o-`,
  Ri = `riI5q82cESo-`,
  zi = `gjs7dr1G9B4-`,
  Bi = `_8tHxNur8iVQ-`,
  Vi = `QDXFvQ1VRGs-`,
  Hi = `iI4-KPYmClQ-`,
  Ui = `FCVI1-X5QXI-`,
  Wi = `_-7t7WL8ib4U-`,
  Gi = `_4cSRMvOczro-`,
  Ki = `urTXd9G8cNM-`,
  qi = `tk1GT5on9gQ-`,
  Ji = `EUZmbwRThEY-`,
  Yi = `koI0X-poWGo-`,
  Xi = `ik9s3tnOv3M-`,
  Zi = `e5FVer86lmY-`,
  Qi = `O8iS-RxIxMc-`,
  $i = `EWu0dHs0CgM-`,
  ea = `G3u-Es6yEe8-`,
  ta = `nr0J1UoEl8s-`,
  na = `_19NDBszdpt8-`,
  ra = `_4p53BqicMtw-`,
  ia = `LJXTU0Fs0Mc-`,
  aa = `NoRFObwpjo0-`,
  oa = `u95III-ojfU-`,
  sa = `dfnWU-vLcuI-`,
  ca = `-iy7zxvavFA-`,
  la = `_0wUoYmLYupw-`,
  ua = `V6VD9IECTcA-`,
  da = `eDuVIFYKU84-`,
  fa = `sH-b0kW7QCY-`,
  pa = `z8NjGLKg3z0-`,
  ma = `_4pLGekYMMsE-`,
  ha = `X1k4Ip6MIC8-`,
  ga = `qeijEUL7oHU-`,
  _a = `SoYZJobaqlk-`,
  va = `KQdWHvm1kCY-`,
  Y = e(r(), 1),
  X = s();
function ya(e) {
  let {
    length: t,
    value: n,
    onChange: r,
    onPaste: i,
    tone: a,
    autoFocus: o,
    disabled: s,
    loading: c,
    backupCode: l,
    allowCharacter: u,
  } = e;
  (0, K.useEffect)(() => {
    o && h();
  }, []);
  let d = (0, K.useRef)([]),
    f = () => r(d.current.map((e) => e.value)),
    p = (e) => {
      let t = e.target.value;
      if (t && u && !u(t)) return;
      let n = e.target.nextElementSibling;
      (e.target.value && n && n.focus(), f());
    },
    m = (e) => {
      d.current.findIndex((e) => !!e.value) === -1
        ? d.current[0]?.select()
        : e.target.select();
    },
    h = () => {
      let e = d.current.find((e) => !e.value);
      e ? e.focus() : d.current[d.current.length - 1].focus();
    },
    g = (e) => {
      let t = e.target;
      if (e.key === `Backspace` || e.key === `Delete`) {
        let n =
          e.key === `Backspace`
            ? t.previousElementSibling
            : t.nextElementSibling;
        t.value === `` &&
          n &&
          ((n.value = ``), n.focus(), e.preventDefault(), f());
      } else if (
        e.key === `ArrowLeft` ||
        e.key === `ArrowRight` ||
        e.key === `ArrowUp` ||
        e.key === `ArrowDown`
      ) {
        let n =
          e.key === `ArrowLeft` || e.key === `ArrowUp`
            ? t.previousElementSibling
            : t.nextElementSibling;
        n && (n.focus(), e.preventDefault());
      }
    },
    _ = (e) => {
      let t = e.clipboardData.getData(`Text`),
        n = e.target,
        r = 0;
      for (; n && r < t.length;)
        (n.focus(), (n.value = t.charAt(r)), (n = n.nextElementSibling), r++);
      (f(), e.preventDefault(), i && i());
    },
    v = [];
  for (let e = 0; e < t; e++)
    v.push(
      (0, X.jsx)(
        ee,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (t) => {
            t && (d.current[e] = t);
          },
          onChange: p,
          onFocus: m,
          onClick: (e) => e.stopPropagation(),
          onKeyDown: g,
          onPaste: _,
          value: n[e] ? n[e][0] : ``,
          autoComplete: `none`,
          autoFocus: e === 0 && o,
          disabled: s || c,
          className: va,
        },
        e,
      ),
    );
  return (0, X.jsxs)(le, {
    className: (0, Y.default)(
      _a,
      a === `danger` && `faQ-XEuPsJg-`,
      s && `mIAxC7mq9-I-`,
      l && `eQsO7wBQCBc-`,
    ),
    onClick: h,
    children: [
      c &&
        (0, X.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, X.jsx)(jo, { size: `small` }),
        }),
      v,
    ],
  });
}
function ba() {
  let e = `svgid_` + (0, K.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [e, `url(#${e})`];
}
function xa(e) {
  let [t, n] = ba();
  return (0, X.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ...e,
    children: [
      (0, X.jsx)(`g`, {
        clipPath: n,
        children: (0, X.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, X.jsx)(`defs`, {
        children: (0, X.jsx)(`clipPath`, {
          id: t,
          children: (0, X.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function Sa(e) {
  let { color: t = `#fff`, ...n } = e;
  return (0, X.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: t,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ...n,
    children: (0, X.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Ca = new URL(
    `../../../images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  wa = t((e, t) => {
    t.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  Ta = t((e, t) => {
    var n = wa();
    function r(e) {
      ((this.mode = n.MODE_8BIT_BYTE), (this.data = e));
    }
    ((r.prototype = {
      getLength: function (e) {
        return this.data.length;
      },
      write: function (e) {
        for (var t = 0; t < this.data.length; t++)
          e.put(this.data.charCodeAt(t), 8);
      },
    }),
      (t.exports = r));
  }),
  Ea = t((e, t) => {
    t.exports = { L: 1, M: 0, Q: 3, H: 2 };
  }),
  Da = t((e, t) => {
    var n = Ea();
    function r(e, t) {
      ((this.totalCount = e), (this.dataCount = t));
    }
    ((r.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]),
      (r.getRSBlocks = function (e, t) {
        var n = r.getRsBlockTable(e, t);
        if (n == null)
          throw Error(
            `bad rs block @ typeNumber:` + e + `/errorCorrectLevel:` + t,
          );
        for (var i = n.length / 3, a = [], o = 0; o < i; o++)
          for (
            var s = n[o * 3 + 0], c = n[o * 3 + 1], l = n[o * 3 + 2], u = 0;
            u < s;
            u++
          )
            a.push(new r(c, l));
        return a;
      }),
      (r.getRsBlockTable = function (e, t) {
        switch (t) {
          case n.L:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
          case n.M:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
          case n.Q:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
          case n.H:
            return r.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (t.exports = r));
  }),
  Oa = t((e, t) => {
    function n() {
      ((this.buffer = []), (this.length = 0));
    }
    ((n.prototype = {
      get: function (e) {
        var t = Math.floor(e / 8);
        return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
      },
      put: function (e, t) {
        for (var n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (e) {
        var t = Math.floor(this.length / 8);
        (this.buffer.length <= t && this.buffer.push(0),
          e && (this.buffer[t] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (t.exports = n));
  }),
  ka = t((e, t) => {
    for (
      var n = {
          glog: function (e) {
            if (e < 1) throw Error(`glog(` + e + `)`);
            return n.LOG_TABLE[e];
          },
          gexp: function (e) {
            for (; e < 0;) e += 255;
            for (; e >= 256;) e -= 255;
            return n.EXP_TABLE[e];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        r = 0;
      r < 8;
      r++
    )
      n.EXP_TABLE[r] = 1 << r;
    for (var r = 8; r < 256; r++)
      n.EXP_TABLE[r] =
        n.EXP_TABLE[r - 4] ^
        n.EXP_TABLE[r - 5] ^
        n.EXP_TABLE[r - 6] ^
        n.EXP_TABLE[r - 8];
    for (var r = 0; r < 255; r++) n.LOG_TABLE[n.EXP_TABLE[r]] = r;
    t.exports = n;
  }),
  Aa = t((e, t) => {
    var n = ka();
    function r(e, t) {
      if (e.length == null) throw Error(e.length + `/` + t);
      for (var n = 0; n < e.length && e[n] == 0;) n++;
      this.num = Array(e.length - n + t);
      for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
    }
    ((r.prototype = {
      get: function (e) {
        return this.num[e];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (e) {
        for (
          var t = Array(this.getLength() + e.getLength() - 1), i = 0;
          i < this.getLength();
          i++
        )
          for (var a = 0; a < e.getLength(); a++)
            t[i + a] ^= n.gexp(n.glog(this.get(i)) + n.glog(e.get(a)));
        return new r(t, 0);
      },
      mod: function (e) {
        if (this.getLength() - e.getLength() < 0) return this;
        for (
          var t = n.glog(this.get(0)) - n.glog(e.get(0)),
            i = Array(this.getLength()),
            a = 0;
          a < this.getLength();
          a++
        )
          i[a] = this.get(a);
        for (var a = 0; a < e.getLength(); a++)
          i[a] ^= n.gexp(n.glog(e.get(a)) + t);
        return new r(i, 0).mod(e);
      },
    }),
      (t.exports = r));
  }),
  ja = t((e, t) => {
    var n = wa(),
      r = Aa(),
      i = ka(),
      a = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      o = {
        PATTERN_POSITION_TABLE: [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170],
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (e) {
          for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0;)
            t ^= o.G15 << (o.getBCHDigit(t) - o.getBCHDigit(o.G15));
          return ((e << 10) | t) ^ o.G15_MASK;
        },
        getBCHTypeNumber: function (e) {
          for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0;)
            t ^= o.G18 << (o.getBCHDigit(t) - o.getBCHDigit(o.G18));
          return (e << 12) | t;
        },
        getBCHDigit: function (e) {
          for (var t = 0; e != 0;) (t++, (e >>>= 1));
          return t;
        },
        getPatternPosition: function (e) {
          return o.PATTERN_POSITION_TABLE[e - 1];
        },
        getMask: function (e, t, n) {
          switch (e) {
            case a.PATTERN000:
              return (t + n) % 2 == 0;
            case a.PATTERN001:
              return t % 2 == 0;
            case a.PATTERN010:
              return n % 3 == 0;
            case a.PATTERN011:
              return (t + n) % 3 == 0;
            case a.PATTERN100:
              return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
            case a.PATTERN101:
              return ((t * n) % 2) + ((t * n) % 3) == 0;
            case a.PATTERN110:
              return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
            case a.PATTERN111:
              return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + e);
          }
        },
        getErrorCorrectPolynomial: function (e) {
          for (var t = new r([1], 0), n = 0; n < e; n++)
            t = t.multiply(new r([1, i.gexp(n)], 0));
          return t;
        },
        getLengthInBits: function (e, t) {
          if (1 <= t && t < 10)
            switch (e) {
              case n.MODE_NUMBER:
                return 10;
              case n.MODE_ALPHA_NUM:
                return 9;
              case n.MODE_8BIT_BYTE:
                return 8;
              case n.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 27)
            switch (e) {
              case n.MODE_NUMBER:
                return 12;
              case n.MODE_ALPHA_NUM:
                return 11;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + e);
            }
          else if (t < 41)
            switch (e) {
              case n.MODE_NUMBER:
                return 14;
              case n.MODE_ALPHA_NUM:
                return 13;
              case n.MODE_8BIT_BYTE:
                return 16;
              case n.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + e);
            }
          else throw Error(`type:` + t);
        },
        getLostPoint: function (e) {
          for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
            for (var i = 0; i < t; i++) {
              for (var a = 0, o = e.isDark(r, i), s = -1; s <= 1; s++)
                if (!(r + s < 0 || t <= r + s))
                  for (var c = -1; c <= 1; c++)
                    i + c < 0 ||
                      t <= i + c ||
                      ((s != 0 || c != 0) &&
                        o == e.isDark(r + s, i + c) &&
                        a++);
              a > 5 && (n += 3 + a - 5);
            }
          for (var r = 0; r < t - 1; r++)
            for (var i = 0; i < t - 1; i++) {
              var l = 0;
              (e.isDark(r, i) && l++,
                e.isDark(r + 1, i) && l++,
                e.isDark(r, i + 1) && l++,
                e.isDark(r + 1, i + 1) && l++,
                (l == 0 || l == 4) && (n += 3));
            }
          for (var r = 0; r < t; r++)
            for (var i = 0; i < t - 6; i++)
              e.isDark(r, i) &&
                !e.isDark(r, i + 1) &&
                e.isDark(r, i + 2) &&
                e.isDark(r, i + 3) &&
                e.isDark(r, i + 4) &&
                !e.isDark(r, i + 5) &&
                e.isDark(r, i + 6) &&
                (n += 40);
          for (var i = 0; i < t; i++)
            for (var r = 0; r < t - 6; r++)
              e.isDark(r, i) &&
                !e.isDark(r + 1, i) &&
                e.isDark(r + 2, i) &&
                e.isDark(r + 3, i) &&
                e.isDark(r + 4, i) &&
                !e.isDark(r + 5, i) &&
                e.isDark(r + 6, i) &&
                (n += 40);
          for (var u = 0, i = 0; i < t; i++)
            for (var r = 0; r < t; r++) e.isDark(r, i) && u++;
          var d = Math.abs((100 * u) / t / t - 50) / 5;
          return ((n += d * 10), n);
        },
      };
    t.exports = o;
  }),
  Ma = t((e, t) => {
    var n = Ta(),
      r = Da(),
      i = Oa(),
      a = ja(),
      o = Aa();
    function s(e, t) {
      ((this.typeNumber = e),
        (this.errorCorrectLevel = t),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var c = s.prototype;
    ((c.addData = function (e) {
      var t = new n(e);
      (this.dataList.push(t), (this.dataCache = null));
    }),
      (c.isDark = function (e, t) {
        if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
          throw Error(e + `,` + t);
        return this.modules[e][t];
      }),
      (c.getModuleCount = function () {
        return this.moduleCount;
      }),
      (c.make = function () {
        if (this.typeNumber < 1) {
          var e = 1;
          for (e = 1; e < 40; e++) {
            for (
              var t = r.getRSBlocks(e, this.errorCorrectLevel),
                n = new i(),
                o = 0,
                s = 0;
              s < t.length;
              s++
            )
              o += t[s].dataCount;
            for (var s = 0; s < this.dataList.length; s++) {
              var c = this.dataList[s];
              (n.put(c.mode, 4),
                n.put(c.getLength(), a.getLengthInBits(c.mode, e)),
                c.write(n));
            }
            if (n.getLengthInBits() <= o * 8) break;
          }
          this.typeNumber = e;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (c.makeImpl = function (e, t) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var n = 0; n < this.moduleCount; n++) {
          this.modules[n] = Array(this.moduleCount);
          for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(e, t),
          this.typeNumber >= 7 && this.setupTypeNumber(e),
          (this.dataCache ??= s.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, t));
      }),
      (c.setupPositionProbePattern = function (e, t) {
        for (var n = -1; n <= 7; n++)
          if (!(e + n <= -1 || this.moduleCount <= e + n))
            for (var r = -1; r <= 7; r++)
              t + r <= -1 ||
                this.moduleCount <= t + r ||
                ((0 <= n && n <= 6 && (r == 0 || r == 6)) ||
                (0 <= r && r <= 6 && (n == 0 || n == 6)) ||
                (2 <= n && n <= 4 && 2 <= r && r <= 4)
                  ? (this.modules[e + n][t + r] = !0)
                  : (this.modules[e + n][t + r] = !1));
      }),
      (c.getBestMaskPattern = function () {
        for (var e = 0, t = 0, n = 0; n < 8; n++) {
          this.makeImpl(!0, n);
          var r = a.getLostPoint(this);
          (n == 0 || e > r) && ((e = r), (t = n));
        }
        return t;
      }),
      (c.createMovieClip = function (e, t, n) {
        var r = e.createEmptyMovieClip(t, n),
          i = 1;
        this.make();
        for (var a = 0; a < this.modules.length; a++)
          for (var o = a * i, s = 0; s < this.modules[a].length; s++) {
            var c = s * i;
            this.modules[a][s] &&
              (r.beginFill(0, 100),
              r.moveTo(c, o),
              r.lineTo(c + i, o),
              r.lineTo(c + i, o + i),
              r.lineTo(c, o + i),
              r.endFill());
          }
        return r;
      }),
      (c.setupTimingPattern = function () {
        for (var e = 8; e < this.moduleCount - 8; e++)
          this.modules[e][6] ?? (this.modules[e][6] = e % 2 == 0);
        for (var t = 8; t < this.moduleCount - 8; t++)
          this.modules[6][t] ?? (this.modules[6][t] = t % 2 == 0);
      }),
      (c.setupPositionAdjustPattern = function () {
        for (
          var e = a.getPatternPosition(this.typeNumber), t = 0;
          t < e.length;
          t++
        )
          for (var n = 0; n < e.length; n++) {
            var r = e[t],
              i = e[n];
            if (this.modules[r][i] == null)
              for (var o = -2; o <= 2; o++)
                for (var s = -2; s <= 2; s++)
                  o == -2 || o == 2 || s == -2 || s == 2 || (o == 0 && s == 0)
                    ? (this.modules[r + o][i + s] = !0)
                    : (this.modules[r + o][i + s] = !1);
          }
      }),
      (c.setupTypeNumber = function (e) {
        for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[Math.floor(n / 3)][(n % 3) + this.moduleCount - 8 - 3] =
            r;
        }
        for (var n = 0; n < 18; n++) {
          var r = !e && ((t >> n) & 1) == 1;
          this.modules[(n % 3) + this.moduleCount - 8 - 3][Math.floor(n / 3)] =
            r;
        }
      }),
      (c.setupTypeInfo = function (e, t) {
        for (
          var n = (this.errorCorrectLevel << 3) | t,
            r = a.getBCHTypeInfo(n),
            i = 0;
          i < 15;
          i++
        ) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 6
            ? (this.modules[i][8] = o)
            : i < 8
              ? (this.modules[i + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + i][8] = o);
        }
        for (var i = 0; i < 15; i++) {
          var o = !e && ((r >> i) & 1) == 1;
          i < 8
            ? (this.modules[8][this.moduleCount - i - 1] = o)
            : i < 9
              ? (this.modules[8][15 - i - 1 + 1] = o)
              : (this.modules[8][15 - i - 1] = o);
        }
        this.modules[this.moduleCount - 8][8] = !e;
      }),
      (c.mapData = function (e, t) {
        for (
          var n = -1,
            r = this.moduleCount - 1,
            i = 7,
            o = 0,
            s = this.moduleCount - 1;
          s > 0;
          s -= 2
        )
          for (s == 6 && s--; ;) {
            for (var c = 0; c < 2; c++)
              if (this.modules[r][s - c] == null) {
                var l = !1;
                (o < e.length && (l = ((e[o] >>> i) & 1) == 1),
                  a.getMask(t, r, s - c) && (l = !l),
                  (this.modules[r][s - c] = l),
                  i--,
                  i == -1 && (o++, (i = 7)));
              }
            if (((r += n), r < 0 || this.moduleCount <= r)) {
              ((r -= n), (n = -n));
              break;
            }
          }
      }),
      (s.PAD0 = 236),
      (s.PAD1 = 17),
      (s.createData = function (e, t, n) {
        for (
          var o = r.getRSBlocks(e, t), c = new i(), l = 0;
          l < n.length;
          l++
        ) {
          var u = n[l];
          (c.put(u.mode, 4),
            c.put(u.getLength(), a.getLengthInBits(u.mode, e)),
            u.write(c));
        }
        for (var d = 0, l = 0; l < o.length; l++) d += o[l].dataCount;
        if (c.getLengthInBits() > d * 8)
          throw Error(
            `code length overflow. (` + c.getLengthInBits() + `>` + d * 8 + `)`,
          );
        for (
          c.getLengthInBits() + 4 <= d * 8 && c.put(0, 4);
          c.getLengthInBits() % 8 != 0;
        )
          c.putBit(!1);
        for (
          ;
          !(
            c.getLengthInBits() >= d * 8 ||
            (c.put(s.PAD0, 8), c.getLengthInBits() >= d * 8)
          );
        )
          c.put(s.PAD1, 8);
        return s.createBytes(c, o);
      }),
      (s.createBytes = function (e, t) {
        for (
          var n = 0,
            r = 0,
            i = 0,
            s = Array(t.length),
            c = Array(t.length),
            l = 0;
          l < t.length;
          l++
        ) {
          var u = t[l].dataCount,
            d = t[l].totalCount - u;
          ((r = Math.max(r, u)), (i = Math.max(i, d)), (s[l] = Array(u)));
          for (var f = 0; f < s[l].length; f++) s[l][f] = 255 & e.buffer[f + n];
          n += u;
          var p = a.getErrorCorrectPolynomial(d),
            m = new o(s[l], p.getLength() - 1).mod(p);
          c[l] = Array(p.getLength() - 1);
          for (var f = 0; f < c[l].length; f++) {
            var h = f + m.getLength() - c[l].length;
            c[l][f] = h >= 0 ? m.get(h) : 0;
          }
        }
        for (var g = 0, f = 0; f < t.length; f++) g += t[f].totalCount;
        for (var _ = Array(g), v = 0, f = 0; f < r; f++)
          for (var l = 0; l < t.length; l++)
            f < s[l].length && (_[v++] = s[l][f]);
        for (var f = 0; f < i; f++)
          for (var l = 0; l < t.length; l++)
            f < c[l].length && (_[v++] = c[l][f]);
        return _;
      }),
      (t.exports = s));
  }),
  Na = t((e, t) => {
    var n = Ma(),
      r = Ea(),
      i = function (e, t) {
        t ||= {};
        var i = new n(t.typeNumber || -1, t.errorCorrectLevel || r.H);
        return (i.addData(e), i.make(), i);
      };
    ((i.ErrorCorrectLevel = r), (t.exports = i));
  }),
  Pa = `RuVnOcF9yRI-`,
  Fa = `QhysrBJX1dU-`,
  Ia = e(Na(), 1),
  La = (function (e) {
    return (
      (e[(e.L = 1)] = `L`),
      (e[(e.M = 0)] = `M`),
      (e[(e.Q = 3)] = `Q`),
      (e[(e.H = 2)] = `H`),
      e
    );
  })({});
function Ra(e, t, n) {
  let r = e.length,
    i = e[0].length,
    a = (r + 2) * i,
    o = new Uint8Array(40 + a),
    s = 0;
  ((o[s++] = 71),
    (o[s++] = 73),
    (o[s++] = 70),
    (o[s++] = 56),
    (o[s++] = 57),
    (o[s++] = 97),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    u(
      t != `transparent` || n != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (o[s++] = 161),
    (o[s++] = 0),
    (o[s++] = 0),
    t == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = t[0]), (o[s++] = t[1]), (o[s++] = t[2])),
    n == `transparent`
      ? ((o[s++] = 0), (o[s++] = 0), (o[s++] = 0))
      : ((o[s++] = n[0]), (o[s++] = n[1]), (o[s++] = n[2])),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (o[s++] = 255),
    (t == `transparent` || n == `transparent`) &&
      ((o[s++] = 33),
      (o[s++] = 249),
      (o[s++] = 4),
      (o[s++] = 1),
      (o[s++] = 0),
      (o[s++] = 0),
      (o[s++] = t == `transparent` ? 0 : 1),
      (o[s++] = 0)),
    (o[s++] = 44),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = r),
    (o[s++] = 0),
    (o[s++] = i),
    (o[s++] = 0),
    (o[s++] = 0),
    (o[s++] = 7));
  for (let t = 0; t < e.length; t++) {
    ((o[s++] = r + 1), (o[s++] = 128));
    for (let n = 0; n < e.length; n++) o[s++] = +!e[t][n];
  }
  return ((o[s++] = 1), (o[s++] = 129), (o[s++] = 0), (o[s++] = 59), o);
}
function za(
  e,
  {
    activeBitColor: t = [33, 35, 40],
    inactiveBitColor: n = [255, 255, 255],
    borderWidth: r = 3,
  } = {},
  i = {},
) {
  let a = (0, Ia.default)(e, i).modules;
  if (!a) return null;
  let o = [];
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  for (let e = 0; e < a.length; e++)
    o.push([
      ...Array.from({ length: r }, () => !1),
      ...a[e],
      ...Array.from({ length: r }, () => !1),
    ]);
  for (let e = 0; e < r; e++) o.push(Array(a.length + r * 2).fill(!1));
  return Ra(o, t, n);
}
function Ba(e) {
  let {
      quality: t = 0,
      children: n,
      className: r,
      activeBitColor: i = [33, 35, 40],
      inactiveBitColor: a = [255, 255, 255],
      borderWidth: o = 3,
      typeNumber: s = 6,
    } = e,
    c = Va(n, {
      typeNumber: s,
      errorCorrectLevel: t,
      activeBitColor: i,
      inactiveBitColor: a,
      borderWidth: o,
    });
  if (!c) return null;
  let l = `rgb(${a[0]}, ${a[1]}, ${a[2]})`;
  return (0, X.jsx)(`div`, {
    className: (0, Y.default)(Pa, r),
    style: { "--qr-bright-color": l },
    children: (0, X.jsx)(`img`, { className: Fa, src: c, alt: `` }),
  });
}
function Va(e, t) {
  let {
    typeNumber: n,
    errorCorrectLevel: r,
    activeBitColor: i,
    inactiveBitColor: a,
    borderWidth: o,
  } = t;
  return (0, K.useMemo)(() => {
    let t = za(
      e,
      { activeBitColor: i, inactiveBitColor: a, borderWidth: o },
      { typeNumber: n, errorCorrectLevel: r },
    );
    return t ? `data:image/gif;base64,${(0, mr.fromByteArray)(t)}` : null;
  }, [e, n, r, i, a, o]);
}
var Ha = `WrkY9vjgO-o-`,
  Ua = `S5cukRF3668-`,
  Wa = `_-8GxbX7BdEU-`;
function Ga(e) {
  let {
      transport: t,
      onComplete: n,
      onStatusChange: r,
      platform: i,
      styling: a = `default`,
      activeBitValue: o = 255,
      preloadedSession: s,
    } = e,
    {
      eStatus: c,
      strChallengeURL: l,
      strClientID: u,
      bHadRemoteInteraction: d,
      reset: f,
      setTokenToRevoke: p,
    } = Jr({
      transport: t,
      onComplete: n,
      onDeviceDetails: T.IN_STEAMUI ? Yr : Xr,
      preloaded: s,
    });
  (0, K.useEffect)(() => r && r(c), [r, c]);
  let m = c === 2 && l ? l : T.STORE_BASE_URL,
    h = c === 0 || c === 1 || d,
    g = c === 4,
    _ = c === 3,
    v = _
      ? (0, X.jsx)(Xa, {})
      : g
        ? (0, X.jsx)(Ja, { reset: f })
        : h
          ? (0, X.jsx)(qa, { size: `small` })
          : null,
    y = h || g || _;
  (0, K.useEffect)(() => {
    e.refreshInfo?.login_token_id && p(e.refreshInfo.login_token_id);
  }, [e.refreshInfo, p]);
  let b = T.EUNIVERSE !== 1,
    x = `rgb(${o}, ${o}, ${o})`;
  return (0, X.jsx)(`div`, {
    className: Ua,
    children: (0, X.jsxs)(`div`, {
      style: { position: `relative` },
      children: [
        (0, X.jsx)(Ba, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: b ? [o, 0, o] : [o, o, o],
          quality: Ka(m),
          className: (0, Y.default)(
            Ha,
            a == `deck` && `LfwdeqflbQQ-`,
            a == `vr` && `DlrZAVV1kSM-`,
            y && `AME4jRbjhDs-`,
            b && `FFV7o6c8MVE-`,
          ),
          children: m,
        }),
        y &&
          (0, X.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, X.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: { "--qr-bright-color": x },
              children: v,
            }),
          }),
      ],
    }),
  });
}
function Ka(e) {
  return e.length <= 90 ? La.Q : void 0;
}
function qa(e) {
  let { size: t } = e;
  return (0, X.jsx)(`div`, {
    className: (0, Y.default)(
      Wa,
      t == `small` && `UmXCdAcOnc0-`,
      (t == `medium` || !t) && `dkcbyneVVOc-`,
      t == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function Ja(e) {
  return (0, X.jsx)(de, {
    color: `dull`,
    variant: `ghost`,
    onClick: e.reset,
    children: (0, X.jsx)(Ya, {}),
  });
}
function Ya(e) {
  return (0, X.jsxs)(`svg`, {
    version: `1.1`,
    id: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `40px`, height: `40px`, cursor: `pointer` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, X.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        d: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, X.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function Xa() {
  return (0, X.jsx)(`svg`, {
    version: `1.1`,
    id: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: { width: `45px`, height: `45px` },
    x: `0px`,
    y: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, X.jsx)(`polyline`, {
      fill: `none`,
      stroke: `#fff`,
      strokeWidth: `24`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeMiterlimit: `10`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var Za = (0, K.createContext)(!1),
  Qa = () => (0, K.useContext)(Za);
function $a() {
  return (0, X.jsx)(`div`, {
    className: ei,
    children: (0, X.jsx)(No, {
      reset: () => window.location.reload(),
      failure: W.Generic,
    }),
  });
}
function eo(e) {
  es(e.redirectUrl);
  let t = (t) => {
    let { strRefreshToken: n } = t;
    vr(n).then(
      (t) => e.onComplete(t),
      () => e.onComplete(gr.k_PrimaryDomainFail),
    );
  };
  return (0, X.jsx)(to, {
    ...e,
    creationRedirectUrl: e.redirectUrl,
    onSuccess: t,
    embedded: e.theme === `modal`,
  });
}
function to(e) {
  let { embedded: t, children: n, ...r } = e;
  return (0, X.jsx)(S, {
    children: (0, X.jsx)(Za.Provider, {
      value: t ?? !1,
      children: (0, X.jsxs)(`div`, {
        className: ei,
        children: [(0, X.jsx)(oo, { ...r }), n],
      }),
    }),
  });
}
function no(e) {
  if (c()) return null;
  let { variant: t } = e;
  return typeof t == `function`
    ? (0, X.jsx)(Z, { onClick: t, children: w.Localize(`#Login_Help_SignIn`) })
    : (0, X.jsx)(Z, {
        href: `${T.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: w.Localize(`#Login_Help_SignIn`),
      });
}
function ro(e) {
  let { variant: t, redirectUrl: n } = e;
  if (typeof t == `function`)
    return (0, X.jsx)(Z, {
      inline: !0,
      onClick: t,
      children: w.Localize(`#Login_CreateAccount`),
    });
  {
    let e = n ? `?redir=${encodeURIComponent(n)}` : ``;
    switch (t ?? `normal`) {
      default:
      case `normal`:
        return (0, X.jsx)(Z, {
          inline: !0,
          href: `${T.STORE_BASE_URL}join/${e}`,
          children: w.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, X.jsx)(Z, {
          inline: !0,
          href: `${T.PARTNER_BASE_URL}${e}`,
          children: w.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function io(e) {
  let { launcherType: t, variant: n, redirectUrl: r } = e;
  if (t === 8 || n == `none`) return null;
  let i = t !== void 0,
    a;
  switch (n ?? `normal`) {
    default:
    case `normal`:
      a = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      a = `#Login_NoSteamworksAccount`;
  }
  return (0, X.jsxs)(`div`, {
    className: (0, Y.default)(la, i && `Kv7QdVcb2UI-`),
    children: [
      (0, X.jsx)(`span`, { className: ua, children: w.Localize(a) }),
      (0, X.jsx)(ro, { variant: n, redirectUrl: r }),
    ],
  });
}
function ao() {
  let e =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return e !== void 0 && e !== `false` && e !== `0`;
}
function oo(e) {
  let {
      transport: t,
      onSuccess: n,
      platform: r,
      autoFocus: i,
      refreshInfo: a,
      renderSuccess: o = () => (0, X.jsx)($o, {}),
      lastResult: s,
      joinLinkVariant: c,
      defaultAccountName: l,
      secureComputer: d = !0,
      isProbablySharedPC: f = !1,
      onShowAgreement: p,
      creationRedirectUrl: m,
      preloadedQRSession: h,
    } = e,
    g = T.IN_STEAMUI ? Yr : Xr,
    _ = T.IN_STEAMUI ? (e) => SteamClient.Auth.GetSteamGuardData(e) : null,
    v = ao(),
    y = Qr({
      transport: t,
      platform: r,
      onSuccess: n,
      refreshInfo: a,
      onDeviceDetails: g,
      onGetMachineAuth: _,
      defaultAccountName: l,
      secureComputer: d,
      isProbablySharedPC: f,
      onShowAgreement: p,
    }),
    b = Qa(),
    x = (0, K.useId)();
  if (s != null && s != 1)
    return (0, X.jsx)(`div`, {
      className: ei,
      children: (0, X.jsx)(No, {
        reset: () => window.location.reload(),
        failure: W.Generic,
        errorReference: s.toString(),
        extendedErrorMessage: y.password.strExtendedErrorMessage,
      }),
    });
  let ee = T.EREALM !== C.k_ESteamRealmChina;
  if (!y.bInPasswordFlow) {
    let n = (0, X.jsxs)(`div`, {
      className: (0, Y.default)(ti, b && `rvRWTXNBcK4-`),
      children: [
        (0, X.jsx)(lo, {
          strAccountName: y.strAccountName,
          onAccountNameChange: y.onAccountNameChange,
          strPassword: y.strPassword,
          onPasswordChange: y.onPasswordChange,
          bRememberMe: y.bRememberMe,
          onRememberMeChange: y.onRememberMeChange,
          onSubmit: y.onPasswordSubmit,
          status: y.password.eStatus,
          autoFocus: i,
          secureComputer: d,
          refreshInfo: e.refreshInfo,
        }),
        ee &&
          (0, X.jsx)(fo, {
            transport: t,
            onQRStatusChange: y.onQRStatusChange,
            onComplete: y.onComplete,
            platform: r,
            refreshInfo: a,
            preloadedQRSession: h,
          }),
      ],
    });
    if (b) {
      let t = T.IN_STEAMUI,
        r = ie()?.LAUNCHER_TYPE;
      return (0, X.jsxs)(Q, {
        className: (0, Y.default)(oa, t && `Kv7QdVcb2UI-`),
        children: [
          !t && !1,
          !e.refreshInfo &&
            (0, X.jsx)(Yo, {
              realm: T.EREALM,
              launcherType: r,
              className: `_19NDBszdpt8-`,
              onBack: e.onBack,
            }),
          (0, X.jsx)(so, { refreshInfo: a }),
          n,
          (0, X.jsxs)(`div`, {
            className: (0, Y.default)(ca, t && `Kv7QdVcb2UI-`),
            children: [
              (0, X.jsx)(no, { variant: e.helpLinkVariant }),
              (0, X.jsx)(io, { launcherType: r, variant: c, redirectUrl: m }),
            ],
          }),
        ],
      });
    }
    let o = (0, X.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, X.jsx)(`h2`, {
          className: ea,
          id: x,
          children: e.refreshInfo
            ? w.Localize(`#Login_RefreshSignIn`)
            : w.Localize(`#Login_SignInTitle`),
        }),
        (0, X.jsx)(so, { refreshInfo: e.refreshInfo }),
      ],
    });
    return (0, X.jsxs)($, {
      title: o,
      titleId: x,
      children: [v && (0, X.jsx)(co, {}), n],
    });
  }
  let S = y.password.eStatus;
  switch (S) {
    case 13:
      return e.renderLoading
        ? (0, X.jsx)(X.Fragment, { children: e.renderLoading() })
        : (0, X.jsx)(Ao, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        u(
          !!y.password.strAccountName,
          `Missing account name in login session for status`,
          S,
        ),
        (0, X.jsx)(Fo, {
          type: S === 5 || S === 11 ? `mobile` : `email`,
          onSubmitCode: y.password.addCode,
          status: S,
          associatedLabel: y.password.strConfirmationAssociatedMessage,
          accountName: y.password.strAccountName,
          onBack: y.password.goBack,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        u(
          !!y.password.strAccountName,
          `Missing account name in login session for status`,
          S,
        ),
        (0, X.jsx)(Wo, {
          type: S === 6 ? `mobile` : `email`,
          accountName: y.password.strAccountName,
          onUseCodeOverride: y.password.useCodeOverride,
          onCodeHelp: e.onCodeHelp,
        })
      );
    case 16:
      return (0, X.jsx)(Po, { reset: y.password.reset });
    case 15:
      return (0, X.jsx)(No, {
        reset: y.password.reset,
        failure: y.password.eFailureState,
        onRequestOffline: y.onTryOffline,
        errorReference: y.password.strErrorReference,
        extendedErrorMessage: y.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, X.jsx)($, { compact: !0, children: o() });
    default:
      return (
        H(`Unknown Phase: ${S}`),
        (0, X.jsx)(No, {
          reset: y.password.reset,
          failure: W.Generic,
          onRequestOffline: y.onTryOffline,
          errorReference: y.password.strErrorReference,
          extendedErrorMessage: y.password.strExtendedErrorMessage,
        })
      );
  }
}
function so(e) {
  if (!e.refreshInfo) return null;
  let t;
  switch (e.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      t = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      t = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      t = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      t = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      t = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      t = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      t = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      t = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      t = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      t = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, X.jsxs)(`div`, {
    className: sa,
    children: [
      (0, X.jsx)(`div`, {
        className: Zi,
        children: w.Localize(`#Login_RefreshSignIn`),
      }),
      (0, X.jsx)(`div`, { className: Qi, children: w.Localize(t) }),
    ],
  });
}
function co() {
  return (0, X.jsx)(`div`, {
    className: si,
    children: w.Localize(`#Login_ConfirmCredentials`),
  });
}
function lo(e) {
  let {
      onSubmit: t,
      status: n,
      autoFocus: r,
      refreshInfo: i,
      strAccountName: a,
      onAccountNameChange: o,
      strPassword: s,
      onPasswordChange: c,
      bRememberMe: l,
      onRememberMeChange: u,
      secureComputer: d = !0,
    } = e,
    [f, p] = (0, K.useState)(!1),
    m = Qa(),
    h = ns(),
    g = () => {
      t().then(() => {
        h() && p(!1);
      });
    },
    _ = n === 1 || n === 13,
    v = n === 2 && !f,
    y = v
      ? (0, X.jsx)(ko, { children: w.Localize(`#Login_CheckCredentials`) })
      : (0, X.jsx)(ko, { children: `\xA0` }),
    b = r && !a,
    x = r && !!a,
    ee = !!e.refreshInfo,
    S = (0, K.useId)(),
    te = (0, K.useId)();
  return (0, X.jsxs)(Go, {
    onSubmit: g,
    className: yi,
    children: [
      (0, X.jsx)(vo, {
        tone: v ? `danger` : void 0,
        label: (0, X.jsx)(yo, {
          highlight: !0,
          inputId: S,
          children: w.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: a,
        onChange: (e) => {
          (p(!0), o(e));
        },
        autoFocus: b,
        disabled: ee,
        id: S,
      }),
      (0, X.jsx)(vo, {
        tone: v ? `danger` : void 0,
        label: (0, X.jsx)(yo, {
          inputId: te,
          children: w.Localize(`#Login_Password`),
        }),
        value: s,
        onChange: (e) => {
          (p(!0), c(e));
        },
        type: `password`,
        autoFocus: x,
        id: te,
      }),
      d
        ? (0, X.jsx)(So, {
            label: w.Localize(`#Login_RememberMe_Short`),
            title: w.Localize(`#Login_RememberMe_Tooltip`),
            value: l,
            onChange: u,
          })
        : (0, X.jsx)(`div`, {
            className: $i,
            children: w.Localize(`#Login_InsecureComputer`),
          }),
      (0, X.jsx)(wo, { loading: _, refreshLogin: ee }),
      y,
      !m &&
        (0, X.jsx)(Z, {
          href: `${T.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: w.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var uo = 700;
function fo(e) {
  let t = te(),
    [n, r] = (0, K.useState)(!1);
  return (
    (0, K.useLayoutEffect)(() => {
      r(t.ownerWindow.screen.width < uo);
    }, [t.ownerWindow]),
    p(t.ownerWindow, `resize`, () => {
      r(t.ownerWindow.screen.width < uo);
    }),
    (0, X.jsx)(`div`, {
      className: ci,
      children: n ? (0, X.jsx)(ho, { ...e }) : (0, X.jsx)(mo, { ...e }),
    })
  );
}
function po(e) {
  let t =
    T.STORE_BASE_URL +
    `join/?guest=1&purchaseType=gift&checkout=1&redir=` +
    encodeURIComponent(e.redirectURL);
  return (0, X.jsx)(`div`, {
    className: ri,
    children: (0, X.jsx)($, {
      compact: !0,
      children: (0, X.jsxs)(`div`, {
        className: ni,
        children: [
          (0, X.jsx)(`div`, {
            className: ai,
            children: h(
              w.Localize(`#Login_Guest`),
              (0, X.jsx)(`a`, {
                href: `${t}`,
                style: { textDecoration: `underline` },
              }),
            ),
          }),
          (0, X.jsx)(`a`, {
            className: oi,
            href: `${t}`,
            children: (0, X.jsx)(`button`, {
              className: ki,
              children: w.Localize(`#Login_GuestContinue`),
            }),
          }),
        ],
      }),
    }),
  });
}
function mo(e) {
  return (0, X.jsx)(_o, { ...e });
}
function ho(e) {
  let [t, n] = (0, K.useState)(!1);
  return t
    ? (0, X.jsx)(_o, { ...e, bShowHideButton: !0, setShowQR: n })
    : (0, X.jsx)(go, { setShowQR: n });
}
function go(e) {
  return (0, X.jsxs)(`div`, {
    className: li,
    children: [
      (0, X.jsx)(`div`, {
        className: ui,
        children: w.Localize(`#Login_MobileFlow_New`),
      }),
      (0, X.jsx)(`div`, {
        className: di,
        children: (0, X.jsx)(`div`, {
          className: di,
          children: w.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, X.jsx)(`button`, {
        type: `button`,
        className: fi,
        onClick: () => e.setShowQR(!0),
        children: w.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, X.jsx)(`a`, {
        href: `${T.STORE_BASE_URL}mobile`,
        className: pi,
        children: w.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function _o(e) {
  let {
    onQRStatusChange: t,
    transport: n,
    onComplete: r,
    platform: i,
    refreshInfo: a,
    preloadedQRSession: o,
    bShowHideButton: s = !1,
    setShowQR: c,
  } = e;
  return (0, X.jsxs)(`div`, {
    className: mi,
    children: [
      (0, X.jsx)(yo, {
        highlight: !0,
        children: w.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, X.jsx)(`div`, {
        className: hi,
        children: (0, X.jsx)(Ga, {
          onStatusChange: t,
          transport: n,
          onComplete: r,
          platform: i,
          refreshInfo: a,
          preloadedSession: o,
        }),
      }),
      s &&
        c &&
        (0, X.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => c(!1),
          children: w.Localize(`#Button_Hide`),
        }),
      (0, X.jsx)(`div`, {
        className: gi,
        children: h(
          w.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, X.jsx)(Z, { href: `${T.STORE_BASE_URL}mobile`, align: `center` }),
        ),
      }),
    ],
  });
}
function vo(e) {
  let { label: t, error: n, tone: r, autoFocus: i, id: a, ...o } = e,
    s = r ?? (n ? `danger` : void 0);
  return (0, X.jsxs)(`div`, {
    className: _i,
    children: [
      typeof t == `string` ? (0, X.jsx)(yo, { inputId: a, children: t }) : t,
      n && (0, X.jsx)(xo, { type: `error`, children: n }),
      (0, X.jsx)(bo, { autoFocus: i, tone: s, id: a, ...o }),
    ],
  });
}
function yo(e) {
  let { children: t, inputId: n, highlight: r } = e;
  return (0, X.jsx)(`label`, {
    className: (0, Y.default)(bi, r && `jAjiX6ujKzY-`),
    htmlFor: n,
    children: t,
  });
}
function bo(e) {
  let {
    value: t,
    onChange: n,
    type: r = `text`,
    tone: i,
    className: a,
    autoFocus: o,
    disabled: s,
    id: c,
  } = e;
  return (0, X.jsx)(`input`, {
    value: t,
    type: r,
    autoFocus: o,
    onChange: (e) => n(e.target.value),
    className: (0, Y.default)(vi, i === `danger` && `kbZo38RXgJ0-`, a),
    disabled: s,
    id: c,
  });
}
function xo(e) {
  let { children: t, type: n } = e;
  return (0, X.jsx)(`div`, {
    className: (0, Y.default)(void 0, n === `error` && void 0),
    children: t,
  });
}
function So(e) {
  let { label: t, title: n, onChange: r, value: i } = e,
    a = () => {
      r && r(!i);
    },
    o = (0, K.useId)();
  return (0, X.jsxs)(`div`, {
    role: `presentation`,
    className: xi,
    title: n,
    onClick: a,
    onKeyPress: (e) => {
      e.key == ` ` && (a(), e.preventDefault());
    },
    children: [
      (0, X.jsx)(Co, { labelledBy: o, value: i }),
      (0, X.jsx)(`label`, { id: o, className: Si, children: t }),
    ],
  });
}
function Co(e) {
  let { value: t, labelledBy: n } = e;
  return (0, X.jsx)(`div`, {
    tabIndex: 0,
    className: Ci,
    "aria-labelledby": n,
    role: `checkbox`,
    "aria-checked": t,
    children:
      t &&
      (0, X.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, X.jsx)(Sa, { strokeWidth: 35 }),
      }),
  });
}
function wo(e) {
  let { refreshLogin: t, ...n } = e;
  return t &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, X.jsx)(Eo, {})
    : (0, X.jsx)(To, { ...n });
}
function To(e) {
  return (0, X.jsx)(`div`, {
    className: Ti,
    children: (0, X.jsx)(Do, { ...e, children: w.Localize(`#Login_SignIn`) }),
  });
}
function Eo() {
  return (0, X.jsxs)(`div`, {
    className: wi,
    children: [
      (0, X.jsx)(`button`, {
        className: Ai,
        type: `submit`,
        children: w.Localize(`#Login_SignIn`),
      }),
      (0, X.jsx)(`button`, {
        className: Ei,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: w.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function Do(e) {
  return (0, X.jsx)(Oo, { type: `submit`, ...e });
}
function Oo(e) {
  let { className: t, loading: n, disabled: r, children: i, ...a } = e,
    o = r || n;
  return (0, X.jsxs)(`button`, {
    className: (0, Y.default)(Ai, n && `QAA-fChDQFA-`, t),
    disabled: o,
    ...a,
    children: [
      i,
      n &&
        (0, X.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, X.jsx)(jo, { size: `small` }),
        }),
    ],
  });
}
function ko(e) {
  let t = e.children || `\xA0`;
  return (0, X.jsx)(`div`, { className: Mi, children: t });
}
function Ao() {
  return (0, X.jsx)($, {
    compact: !0,
    children: (0, X.jsxs)(Q, {
      alignItems: `center`,
      className: (0, Y.default)(ga, T.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, X.jsx)(l, { size: `xlarge` }),
        (0, X.jsx)(`div`, {
          className: (0, Y.default)(Li),
          children: w.Localize(
            T.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function jo(e) {
  let { size: t } = e;
  return (0, X.jsx)(`div`, {
    className: (0, Y.default)(
      ha,
      t == `small` && `-GciojHJFJo-`,
      (t == `medium` || !t) && `aNnjBlEgXeE-`,
      t == `large` && `SkijseWcXzM-`,
    ),
  });
}
function Mo(e) {
  return (0, X.jsx)(`div`, {
    className: ma,
    children: (0, X.jsx)(`button`, {
      className: Di,
      onClick: e.onRequestOffline,
      children: w.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function No(e) {
  let {
      reset: t,
      failure: n,
      onRequestOffline: r,
      errorReference: i,
      extendedErrorMessage: a,
    } = e,
    { title: o, description: s } = $r(n, a),
    c = T.IN_STEAMUI && n == W.Network;
  return (0, X.jsxs)($, {
    compact: !0,
    children: [
      (0, X.jsxs)(Q, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, X.jsx)(`div`, { className: da, children: o }),
          (0, X.jsx)(`div`, { className: fa, children: s }),
          c &&
            (0, X.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: w.Localize(`#Login_GoOffline_Description`),
            }),
          (0, X.jsxs)(Ko, {
            className: pa,
            children: [
              (0, X.jsx)(Oo, {
                className: Oi,
                onClick: t,
                children: w.Localize(`#Button_Retry`),
              }),
              c && r && (0, X.jsx)(Mo, { onRequestOffline: r }),
            ],
          }),
        ],
      }),
      i &&
        (0, X.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: w.Localize(`#Login_Error_Reference`, i),
        }),
    ],
  });
}
function Po(e) {
  let { reset: t } = e;
  return (0, X.jsx)(No, { reset: t, failure: W.Generic });
}
function Fo(e) {
  let {
      type: t,
      onSubmitCode: n,
      status: r,
      accountName: i,
      associatedLabel: a,
      onBack: o,
    } = e,
    [s, c] = (0, K.useState)([]),
    [l, u] = (0, K.useState)(!1),
    [d, f] = (0, K.useState)(!1),
    [p, m] = (0, K.useState)(!1),
    [h, g] = (0, K.useState)(0),
    _ = t === `mobile`,
    v = s.join(``),
    y = Kr(v, p),
    b = (e) => {
      (f(!0),
        n(e).then(() => {
          (u(!1), f(!1));
        }));
    },
    x = (e) => {
      (l || u(!0), c(e));
      let t = e.join(``);
      Kr(t, p) && b(t);
    },
    ee = () => {
      y && b(v);
    },
    S = () => {
      (m(!p), c([]), n(``), g(h + 1));
    },
    te = !l && (r === 11 || r === 10),
    C,
    ne;
  return (
    p
      ? t === `mobile`
        ? ((ne = (0, X.jsx)(Lo, {})), (C = `#Login_UseMobileCode`))
        : ((ne = (0, X.jsx)(Lo, {})), (C = `#Login_UseEmailCode`))
      : ((ne =
          t === `mobile`
            ? (0, X.jsx)(Ro, {})
            : (0, X.jsx)(zo, { emailAddress: a })),
        (C = `#Login_UseBackupCode`)),
    (0, X.jsx)($, {
      title: (0, X.jsx)(Yo, {}),
      compact: !0,
      children: (0, X.jsx)(Go, {
        onSubmit: ee,
        children: (0, X.jsxs)(Q, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, X.jsx)(Bo, { type: t, accountName: i }),
            (0, X.jsxs)(`div`, {
              className: Bi,
              children: [
                (0, X.jsxs)(Q, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    te &&
                      (0, X.jsx)(ko, {
                        children: w.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, X.jsx)(
                      qo,
                      {
                        value: s,
                        onChange: x,
                        tone: te ? `danger` : void 0,
                        loading: d,
                        backupCode: p,
                      },
                      h,
                    ),
                  ],
                }),
                ne,
              ],
            }),
            _ &&
              (0, X.jsx)(Z, {
                onClick: S,
                align: `center`,
                children: w.Localize(C),
              }),
            (0, X.jsx)(Io, { type: t, onCodeHelp: e.onCodeHelp }),
          ],
        }),
      }),
    })
  );
}
function Io(e) {
  if (c()) return null;
  let t, n;
  return (
    e.type === `mobile`
      ? ((t = `${T.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (n = w.Localize(`#Login_Help_AccessMobileApp`)))
      : ((t = `${T.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (n = w.Localize(`#Login_Help_AccessEmail`))),
    e.onCodeHelp
      ? (0, X.jsx)(Z, {
          onClick: () => e.onCodeHelp(t),
          align: `center`,
          children: n,
        })
      : (0, X.jsx)(Z, { href: t, align: `center`, children: n })
  );
}
function Lo() {
  return (0, X.jsx)(Ko, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Gi,
    children: (0, X.jsxs)(Q, {
      children: [
        (0, X.jsx)(`div`, {
          className: Ji,
          children: w.Localize(`#Login_EnterBackupCode`),
        }),
        (0, X.jsx)(`div`, {
          className: Fi,
          children: w.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function Ro() {
  return (0, X.jsxs)(Ko, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: Ki,
    children: [
      (0, X.jsx)(`div`, {
        className: Ji,
        children: w.Localize(`#Login_EnterMobileCode`),
      }),
      (0, X.jsx)(Ho, { className: Vi }),
    ],
  });
}
function zo(e) {
  return (0, X.jsxs)(Ko, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: qi,
    children: [
      (0, X.jsx)(Jo, {
        align: `center`,
        spacing: 6,
        children: (0, X.jsx)(`div`, {
          className: Yi,
          children: w.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, X.jsx)(`span`, { className: Xi, children: e.emailAddress }),
          ),
        }),
      }),
      (0, X.jsx)(Uo, { className: Hi }),
    ],
  });
}
function Bo(e) {
  let { accountName: t, type: n } = e,
    r =
      n === `mobile`
        ? w.Localize(`#Login_MobileProtectingAccount`)
        : w.Localize(`#Login_EmailProtectingAccount`),
    i = Qa();
  return (0, X.jsxs)(`div`, {
    className: Pi,
    children: [
      (0, X.jsx)(`div`, {
        className: Fi,
        children: w.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, X.jsx)(`span`, { className: Ii, children: t }),
        ),
      }),
      !i && (0, X.jsx)(`div`, { className: `DSy9L5eaj5o-`, children: r }),
    ],
  });
}
function Vo() {
  return (0, X.jsx)(Q, {
    alignItems: `center`,
    children: (0, X.jsxs)(`div`, {
      className: Ri,
      children: [
        (0, X.jsx)(`img`, { src: ce(Ca), alt: `` }),
        (0, X.jsx)(`div`, {
          className: zi,
          children: h(w.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function Ho(e) {
  return (0, X.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: e.className,
    children: [
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        d: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        d: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        d: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        d: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, X.jsx)(`path`, {
        fill: `currentColor`,
        d: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function Uo(e) {
  return (0, X.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: e.className,
    children: (0, X.jsx)(`path`, {
      d: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function Wo(e) {
  let { type: t, accountName: n, onUseCodeOverride: r } = e,
    i = Qa(),
    a = (0, X.jsx)(Io, { type: `mobile`, onCodeHelp: e.onCodeHelp }),
    o = i
      ? (0, X.jsx)(`div`, {
          style: { paddingBottom: `20px` },
          children: (0, X.jsx)(Z, {
            align: `center`,
            onClick: r,
            children: w.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, X.jsx)(`div`, {
          className: Wi,
          children: (0, X.jsx)(Z, {
            align: `center`,
            onClick: r,
            children: w.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, X.jsx)($, {
    title: (0, X.jsx)(Yo, {}),
    compact: !0,
    children: (0, X.jsxs)(Q, {
      gap: T.IN_STEAMUI ? 24 : 40,
      children: [
        (0, X.jsx)(Bo, { type: t, accountName: n }),
        (0, X.jsx)(Vo, {}),
        (0, X.jsxs)(`div`, { className: Ui, children: [o, a] }),
      ],
    }),
  });
}
function Z(e) {
  let { children: t, align: n, inline: r } = e,
    i = (0, Y.default)(ji, n === `center` && `p1pxbjr1kTM-`);
  if (`href` in e) {
    let n = T.IN_STEAMUI ? `steam://openurl_external/${e.href}` : e.href;
    return (0, X.jsx)(`a`, { className: i, href: n, children: t });
  }
  return (0, X.jsx)(r ? `span` : `div`, {
    className: i,
    onClick: e.onClick,
    children: t,
  });
}
function Go(e) {
  let { onSubmit: t, children: n, className: r } = e;
  return (0, X.jsx)(`form`, {
    onSubmit: (e) => (e.preventDefault(), t(), !1),
    className: r,
    children: n,
  });
}
function Q(e) {
  let {
      alignItems: t,
      justifyContent: n,
      gap: r,
      className: i,
      ariaLabelledBy: a,
      children: o,
    } = e,
    s = (0, Y.default)(
      Ni,
      t === `center` && `mQfJWqZo0U8-`,
      n === `center` && `h53Pyn--gk4-`,
      i,
    ),
    c = r ? { gap: typeof r == `number` ? `${r}px` : r } : void 0;
  return (0, X.jsx)(`section`, {
    className: s,
    style: c,
    "aria-labelledby": a,
    children: o,
  });
}
function Ko(e) {
  let { children: t, justifyContent: n, alignItems: r, className: i } = e;
  return (0, X.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: n,
      alignItems: r,
    },
    className: i,
    children: t,
  });
}
function qo(e) {
  let { onChange: t, backupCode: n = !1, ...r } = e;
  return (0, X.jsx)(ya, {
    length: Wr(n),
    backupCode: n,
    onChange: (e) => {
      ((e = e.map((e) => e.toUpperCase())), Gr(e.join(``).trim(), n) && t(e));
    },
    autoFocus: !0,
    ...r,
    allowCharacter: (e) => /\w/g.test(e),
  });
}
function Jo(e) {
  let { children: t, spacing: n = 0, align: r } = e;
  return (0, X.jsx)(Q, {
    alignItems: r,
    children: K.Children.map(t, (e, t) =>
      e
        ? (0, X.jsx)(`div`, {
            style: t > 0 ? { paddingTop: `${n}px` } : void 0,
            children: e,
          })
        : null,
    )?.filter(Boolean),
  });
}
function $(e) {
  let { title: t, titleId: n, children: r, compact: i } = e,
    a = Qa(),
    o = (0, K.useId)();
  return (0, X.jsxs)(Q, {
    gap: T.IN_STEAMUI ? 0 : 32,
    className: (0, Y.default)(
      ii,
      a && `rvRWTXNBcK4-`,
      i && `L35Fcv9fbYo-`,
      T.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: n ?? o,
    children: [
      typeof t == `string`
        ? (0, X.jsx)(`div`, { className: ea, id: n ?? o, children: t })
        : t,
      (0, X.jsx)(`div`, { className: ta, children: r }),
    ],
  });
}
function Yo(e) {
  let {
    realm: t = T.EREALM,
    launcherType: n = ie()?.LAUNCHER_TYPE,
    className: r = na,
  } = e;
  return n === 8
    ? (0, X.jsx)(`div`, { className: r })
    : (0, X.jsxs)(`div`, {
        className: ra,
        children: [
          (0, X.jsx)(Xo, { onBack: e.onBack }),
          t === C.k_ESteamRealmChina
            ? (0, X.jsx)(Qo, { className: r })
            : (0, X.jsx)(Zo, { className: r }),
          ` `,
        ],
      });
}
function Xo(e) {
  return e.onBack
    ? (0, X.jsx)(`button`, {
        type: `button`,
        className: ia,
        onClick: e.onBack,
        "aria-label": w.Localize(`#Button_Back`),
        children: (0, X.jsx)(xa, { className: aa }),
      })
    : null;
}
function Zo(e) {
  return (0, X.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    children: [
      (0, X.jsx)(`path`, {
        d: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, X.jsx)(`path`, {
        d: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function Qo(e) {
  return (0, X.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: e.className,
    fill: `#E0E1E6`,
    children: [
      (0, X.jsxs)(`g`, {
        stroke: `null`,
        id: `svg_2`,
        children: [
          (0, X.jsx)(`path`, {
            stroke: `null`,
            id: `svg_3`,
            d: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, X.jsx)(`path`, {
            stroke: `null`,
            id: `svg_4`,
            d: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, X.jsx)(`path`, {
            stroke: `null`,
            id: `svg_5`,
            d: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, X.jsx)(`path`, {
        stroke: `null`,
        id: `svg_6`,
        d: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, X.jsxs)(`g`, {
        id: `svg_7`,
        children: [
          (0, X.jsx)(`path`, {
            id: `svg_8`,
            d: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, X.jsx)(`path`, {
            id: `svg_9`,
            d: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, X.jsx)(`path`, {
            id: `svg_10`,
            d: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, X.jsx)(`path`, {
            id: `svg_11`,
            d: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, X.jsxs)(`g`, {
        id: `svg_12`,
        children: [
          (0, X.jsx)(`path`, {
            id: `svg_13`,
            d: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, X.jsx)(`path`, {
            id: `svg_14`,
            d: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function $o() {
  return (0, X.jsx)(Q, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, X.jsx)(l, {}),
  });
}
function es(e) {
  let t = (0, K.useRef)(e);
  ((t.current = e),
    (0, K.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (t.current &&
          ts(t.current).catch((e) => {
            fr(`PerformRefresh exception`, e);
          }));
    }, [t]));
}
async function ts(e) {
  let t = new FormData();
  t.append(`redir`, e);
  let n = `${T.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    r = await U.default.post(n, t, { timeout: 1e4, withCredentials: !0 });
  if (r.status !== 200 || !r?.data?.success) return !1;
  let { success: i, login_url: a, error: o, ...s } = r.data,
    c = new FormData();
  Object.entries(s).forEach(([e, t]) => c.append(e, t));
  let l = await U.default.post(a, c),
    u = l.status === 200 && l.data.result === 1;
  return (u && window.location.assign(e), u);
}
function ns() {
  let e = (0, K.useRef)(!0);
  return (
    (0, K.useEffect)(
      () => () => {
        e.current = !1;
      },
      [e],
    ),
    (0, K.useCallback)(() => e.current, [e])
  );
}
export { gr as i, $a as n, po as r, eo as t };
