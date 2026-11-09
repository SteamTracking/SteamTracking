import { _, _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _ } from "./libraries.js";
import { _, _ } from "./throbber.js";
import {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
} from "./main.js";
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.account_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            account_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.publickey_mod || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            publickey_mod: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            publickey_exp: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timestamp: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetPasswordRSAPublicKey_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            os_type: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            gaming_device_type: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            client_count: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            machine_id: {
              _: 6,
              _: _.readBytes,
              _: _.writeBytes,
            },
            app_type: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_DeviceDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.confirmation_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            confirmation_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            associated_message: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AllowedConfirmation`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_details: {
              _: 3,
              _: _,
            },
            website_id: {
              _: 4,
              _: `Unknown`,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            challenge_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            request_id: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
            },
            interval: {
              _: 4,
              _: _.readFloat,
              _: _.writeFloat,
            },
            allowed_confirmations: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            version: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaQR_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.device_friendly_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            device_friendly_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            account_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            encrypted_password: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            encryption_timestamp: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            remember_login: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            platform_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            persistence: {
              _: 7,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            website_id: {
              _: 8,
              _: `Unknown`,
              _: _.readString,
              _: _.writeString,
            },
            device_details: {
              _: 9,
              _: _,
            },
            guard_data: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            language: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            qos_level: {
              _: 12,
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            interval: {
              _: 3,
              _: _.readFloat,
              _: _.writeFloat,
            },
            allowed_confirmations: {
              _: 4,
              _: _,
              _: !0,
              _: !0,
            },
            steamid: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            weak_token: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            agreement_session_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            extended_error_message: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_BeginAuthSessionViaCredentials_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            token_to_revoke: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.new_client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            new_client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            new_challenge_url: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            refresh_token: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            access_token: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            had_remote_interaction: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            new_guard_data: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            agreement_session_url: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_PollAuthSessionStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            geoloc: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            city: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            country: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_friendly_name: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            version: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            login_history: {
              _: 9,
              _: _.readEnum,
              _: _.writeEnum,
            },
            requestor_location_mismatch: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            high_usage_login: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            requested_persistence: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            device_trust: {
              _: 13,
              _: _.readInt32,
              _: _.writeInt32,
            },
            app_type: {
              _: 14,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.location_confirmer || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            location_confirmer: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            location_requestor: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            location_other: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            platform_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionRiskInfo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            results: {
              _: 2,
              _: _,
            },
            selected_action: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            did_confirm_login: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platform || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platform: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            location: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            action: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_ids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_GetAuthSessionsForAccount_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.version || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            client_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            signature: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
            confirm: {
              _: 5,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            persistence: {
              _: 6,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            code_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.agreement_session_url || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            agreement_session_url: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            renewal_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.access_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            access_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            refresh_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_AccessToken_GenerateForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.include_revoked || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_revoked: {
              _: 1,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            requesting_token: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _,
            },
            locale: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            country: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            city: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            token_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            time_updated: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            platform_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            logged_in: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            os_platform: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            auth_type: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gaming_device_type: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            first_seen: {
              _: 9,
              _: _,
            },
            last_seen: {
              _: 10,
              _: _,
            },
            os_type: {
              _: 11,
              _: _.readInt32,
              _: _.writeInt32,
            },
            authentication_type: {
              _: 12,
              _: _.readEnum,
              _: _.writeEnum,
            },
            effective_token_state: {
              _: 13,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            revoke_action: {
              _: 2,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_Token_Revoke_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revoke_action: {
              _: 3,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            signature: {
              _: 4,
              _: _.readBytes,
              _: _.writeBytes,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthentication_RefreshToken_Revoke_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            token_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            time_updated: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            platform_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            token_state: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            owner_steamid: {
              _: 6,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            os_platform: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            os_type: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            auth_type: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            gaming_device_type: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            first_seen: {
              _: 11,
              _: _,
            },
            last_seen: {
              _: 12,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 2,
              _: _,
            },
            country: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            city: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenDescription_TokenUsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.action || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            action: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            _: {
              _: 3,
              _: _,
            },
            actor: {
              _: 4,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CSupportRefreshTokenAudit`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            include_revoked_tokens: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            last_token_reset: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokensByAccount_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.refresh_tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            refresh_tokens: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_QueryRefreshTokenByID_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_RevokeToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.token_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            token_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.history || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            history: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_GetTokenHistory_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            token_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CAuthenticationSupport_MarkTokenCompromised_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            minutes_remaining: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_TimeRemaining`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.platform || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            platform: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            appid_list: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entries: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CCloudGaming_GetTimeRemaining_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GetPasswordRSAPublicKey#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.GetPasswordRSAPublicKey = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.BeginAuthSessionViaQR#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.BeginAuthSessionViaQR = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.BeginAuthSessionViaCredentials#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.BeginAuthSessionViaCredentials = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.PollAuthSessionStatus#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  _.PollAuthSessionStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.GetAuthSessionInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAuthSessionInfo = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.GetAuthSessionRiskInfo#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAuthSessionRiskInfo = _;
  function _(_, _) {
    return _.SendNotification(
      `Authentication.NotifyRiskQuizResults#1`,
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.NotifyRiskQuizResults = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.UpdateAuthSessionWithMobileConfirmation#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.UpdateAuthSessionWithMobileConfirmation = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.UpdateAuthSessionWithSteamGuardCode#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  _.UpdateAuthSessionWithSteamGuardCode = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GenerateAccessTokenForApp#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GenerateAccessTokenForApp = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.EnumerateTokens#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.EnumerateTokens = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Authentication.GetAuthSessionsForAccount#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetAuthSessionsForAccount = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.RevokeToken#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.RevokeToken = _;
  function _(_, _, _) {
    return _.SendMsg(`Authentication.RevokeRefreshToken#1`, _(_, _, _), _, {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.RevokeRefreshToken = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.QueryRefreshTokensByAccount#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.QueryRefreshTokensByAccount = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.QueryRefreshTokenByID#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.QueryRefreshTokenByID = _;
  function _(_, _, _) {
    return _.SendMsg(`AuthenticationSupport.RevokeToken#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.RevokeToken = _;
  function _(_, _, _) {
    return _.SendMsg(`AuthenticationSupport.GetTokenHistory#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  _.GetTokenHistory = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AuthenticationSupport.MarkTokenCompromised#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.MarkTokenCompromised = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`CloudGaming.GetTimeRemaining#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetTimeRemaining = _;
})((_ ||= {}));
var _,
  _ = !0;
function _(_, _, _) {
  _ != null &&
    (typeof _ == `number`
      ? this.fromNumber(_, _, _)
      : _ == null && typeof _ != `string`
        ? this.fromString(_, 256)
        : this.fromString(_, _));
}
function _() {
  return new _(null);
}
function _(_, _, _, _, _, _) {
  for (; --_ >= 0;) {
    var _ = _ * this[_++] + _[_] + _;
    ((_ = Math.floor(_ / 67108864)), (_[_++] = _ & 67108863));
  }
  return _;
}
function _(_, _, _, _, _, _) {
  for (var _ = _ & 32767, _ = _ >> 15; --_ >= 0;) {
    var _ = this[_] & 32767,
      _ = this[_++] >> 15,
      _ = _ * _ + _ * _;
    ((_ = _ * _ + ((_ & 32767) << 15) + _[_] + (_ & 1073741823)),
      (_ = (_ >>> 30) + (_ >>> 15) + _ * _ + (_ >>> 30)),
      (_[_++] = _ & 1073741823));
  }
  return _;
}
function _(_, _, _, _, _, _) {
  for (var _ = _ & 16383, _ = _ >> 14; --_ >= 0;) {
    var _ = this[_] & 16383,
      _ = this[_++] >> 14,
      _ = _ * _ + _ * _;
    ((_ = _ * _ + ((_ & 16383) << 14) + _[_] + _),
      (_ = (_ >> 28) + (_ >> 14) + _ * _),
      (_[_++] = _ & 268435455));
  }
  return _;
}
(_ && navigator.appName == `Microsoft Internet Explorer`
  ? ((_.prototype._ = _), (_ = 30))
  : _ && navigator.appName != `Netscape`
    ? ((_.prototype._ = _), (_ = 26))
    : ((_.prototype._ = _), (_ = 28)),
  (_.prototype._ = _),
  (_.prototype._ = (1 << _) - 1),
  (_.prototype._ = 1 << _));
var _ = 52;
((_.prototype._ = 2 ** _),
  (_.prototype._ = _ - _),
  (_.prototype._ = 2 * _ - _));
for (
  var _ = `0123456789abcdefghijklmnopqrstuvwxyz`, _ = [], _ = 48, _ = 0;
  _ <= 9;
  ++_
)
  _[_++] = _;
for (_ = 97, _ = 10; _ < 36; ++_) _[_++] = _;
for (_ = 65, _ = 10; _ < 36; ++_) _[_++] = _;
function _(_) {
  return _.charAt(_);
}
function _(_, _) {
  return _[_.charCodeAt(_)] ?? -1;
}
function _(_) {
  for (var _ = this._ - 1; _ >= 0; --_) _[_] = this[_];
  ((_._ = this._), (_._ = this._));
}
function _(_) {
  ((this._ = 1),
    (this._ = _ < 0 ? -1 : 0),
    _ > 0 ? (this[0] = _) : _ < -1 ? (this[0] = _ + _) : (this._ = 0));
}
function _(_) {
  var _ = _();
  return (_.fromInt(_), _);
}
function _(_, _) {
  var _;
  if (_ == 16) _ = 4;
  else if (_ == 8) _ = 3;
  else if (_ == 256) _ = 8;
  else if (_ == 2) _ = 1;
  else if (_ == 32) _ = 5;
  else if (_ == 4) _ = 2;
  else {
    this.fromRadix(_, _);
    return;
  }
  ((this._ = 0), (this._ = 0));
  for (var _ = _.length, _ = !1, _ = 0; --_ >= 0;) {
    var _ = _ == 8 ? _[_] & 255 : _(_, _);
    _ < 0
      ? _.charAt(_) == `-` && (_ = !0)
      : ((_ = !1),
        _ == 0
          ? (this[this._++] = _)
          : _ + _ > this._
            ? ((this[this._ - 1] |= (_ & ((1 << (this._ - _)) - 1)) << _),
              (this[this._++] = _ >> (this._ - _)))
            : (this[this._ - 1] |= _ << _),
        (_ += _),
        _ >= this._ && (_ -= this._));
  }
  (_ == 8 &&
    _[0] & 128 &&
    ((this._ = -1),
    _ > 0 && (this[this._ - 1] |= ((1 << (this._ - _)) - 1) << _)),
    this.clamp(),
    _ && _.ZERO.subTo(this, this));
}
function _() {
  for (var _ = this._ & this._; this._ > 0 && this[this._ - 1] == _;) --this._;
}
function _(_) {
  if (this._ < 0) return `-` + this.negate().toString(_);
  var _;
  if (_ == 16) _ = 4;
  else if (_ == 8) _ = 3;
  else if (_ == 2) _ = 1;
  else if (_ == 32) _ = 5;
  else if (_ == 4) _ = 2;
  else return this.toRadix(_);
  var _ = (1 << _) - 1,
    _,
    _ = !1,
    _ = ``,
    _ = this._,
    _ = this._ - ((_ * this._) % _);
  if (_-- > 0)
    for (
      _ < this._ && (_ = this[_] >> _) > 0 && ((_ = !0), (_ = _(_)));
      _ >= 0;
    )
      (_ < _
        ? ((_ = (this[_] & ((1 << _) - 1)) << (_ - _)),
          (_ |= this[--_] >> (_ += this._ - _)))
        : ((_ = (this[_] >> (_ -= _)) & _), _ <= 0 && ((_ += this._), --_)),
        _ > 0 && (_ = !0),
        _ && (_ += _(_)));
  return _ ? _ : `0`;
}
function _() {
  var _ = _();
  return (_.ZERO.subTo(this, _), _);
}
function _() {
  return this._ < 0 ? this.negate() : this;
}
function _(_) {
  var _ = this._ - _._;
  if (_ != 0) return _;
  var _ = this._;
  if (((_ = _ - _._), _ != 0)) return _;
  for (; --_ >= 0;) if ((_ = this[_] - _[_]) != 0) return _;
  return 0;
}
function _(_) {
  var _ = 1,
    _;
  return (
    (_ = _ >>> 16) != 0 && ((_ = _), (_ += 16)),
    (_ = _ >> 8) != 0 && ((_ = _), (_ += 8)),
    (_ = _ >> 4) != 0 && ((_ = _), (_ += 4)),
    (_ = _ >> 2) != 0 && ((_ = _), (_ += 2)),
    (_ = _ >> 1) != 0 && ((_ = _), (_ += 1)),
    _
  );
}
function _() {
  return this._ <= 0
    ? 0
    : this._ * (this._ - 1) + _(this[this._ - 1] ^ (this._ & this._));
}
function _(_, _) {
  for (var _ = this._ - 1; _ >= 0; --_) _[_ + _] = this[_];
  for (_ = _ - 1; _ >= 0; --_) _[_] = 0;
  ((_._ = this._ + _), (_._ = this._));
}
function _(_, _) {
  for (var _ = _; _ < this._; ++_) _[_ - _] = this[_];
  ((_._ = Math.max(this._ - _, 0)), (_._ = this._));
}
function _(_, _) {
  for (
    var _ = _ % this._,
      _ = this._ - _,
      _ = (1 << _) - 1,
      _ = Math.floor(_ / this._),
      _ = (this._ << _) & this._,
      _ = this._ - 1;
    _ >= 0;
    --_
  )
    ((_[_ + _ + 1] = (this[_] >> _) | _), (_ = (this[_] & _) << _));
  for (_ = _ - 1; _ >= 0; --_) _[_] = 0;
  ((_[_] = _), (_._ = this._ + _ + 1), (_._ = this._), _.clamp());
}
function _(_, _) {
  _._ = this._;
  var _ = Math.floor(_ / this._);
  if (_ >= this._) _._ = 0;
  else {
    var _ = _ % this._,
      _ = this._ - _,
      _ = (1 << _) - 1;
    _[0] = this[_] >> _;
    for (var _ = _ + 1; _ < this._; ++_)
      ((_[_ - _ - 1] |= (this[_] & _) << _), (_[_ - _] = this[_] >> _));
    (_ > 0 && (_[this._ - _ - 1] |= (this._ & _) << _),
      (_._ = this._ - _),
      _.clamp());
  }
}
function _(_, _) {
  for (var _ = 0, _ = 0, _ = Math.min(_._, this._); _ < _;)
    ((_ += this[_] - _[_]), (_[_++] = _ & this._), (_ >>= this._));
  if (_._ < this._) {
    for (_ -= _._; _ < this._;)
      ((_ += this[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += this._;
  } else {
    for (_ += this._; _ < _._;)
      ((_ -= _[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ -= _._;
  }
  ((_._ = _ < 0 ? -1 : 0),
    _ < -1 ? (_[_++] = this._ + _) : _ > 0 && (_[_++] = _),
    (_._ = _),
    _.clamp());
}
function _(_, _) {
  var _ = this.abs(),
    _ = _.abs(),
    _ = _._;
  for (_._ = _ + _._; --_ >= 0;) _[_] = 0;
  for (_ = 0; _ < _._; ++_) _[_ + _._] = _._(0, _[_], _, _, 0, _._);
  ((_._ = 0), _.clamp(), this._ != _._ && _.ZERO.subTo(_, _));
}
function _(_) {
  for (var _ = this.abs(), _ = (_._ = 2 * _._); --_ >= 0;) _[_] = 0;
  for (_ = 0; _ < _._ - 1; ++_) {
    var _ = _._(_, _[_], _, 2 * _, 0, 1);
    (_[_ + _._] += _._(_ + 1, 2 * _[_], _, 2 * _ + 1, _, _._ - _ - 1)) >= _._ &&
      ((_[_ + _._] -= _._), (_[_ + _._ + 1] = 1));
  }
  (_._ > 0 && (_[_._ - 1] += _._(_, _[_], _, 2 * _, 0, 1)),
    (_._ = 0),
    _.clamp());
}
function _(_, _, _) {
  var _ = _.abs();
  if (!(_._ <= 0)) {
    var _ = this.abs();
    if (_._ < _._) (_?.fromInt(0), _ != null && this.copyTo(_));
    else {
      _ ??= _();
      var _ = _(),
        _ = this._,
        _ = _._,
        _ = this._ - _(_[_._ - 1]);
      _ > 0 ? (_.lShiftTo(_, _), _.lShiftTo(_, _)) : (_.copyTo(_), _.copyTo(_));
      var _ = _._,
        _ = _[_ - 1];
      if (_ != 0) {
        var _ = _ * (1 << this._) + (_ > 1 ? _[_ - 2] >> this._ : 0),
          _ = this._ / _,
          _ = (1 << this._) / _,
          _ = 1 << this._,
          _ = _._,
          _ = _ - _,
          _ = _ ?? _();
        for (
          _.dlShiftTo(_, _),
            _.compareTo(_) >= 0 && ((_[_._++] = 1), _.subTo(_, _)),
            _.ONE.dlShiftTo(_, _),
            _.subTo(_, _);
          _._ < _;
        )
          _[_._++] = 0;
        for (; --_ >= 0;) {
          var _ =
            _[--_] == _ ? this._ : Math.floor(_[_] * _ + (_[_ - 1] + _) * _);
          if ((_[_] += _._(0, _, _, _, 0, _)) < _)
            for (_.dlShiftTo(_, _), _.subTo(_, _); _[_] < --_;) _.subTo(_, _);
        }
        (_ != null && (_.drShiftTo(_, _), _ != _ && _.ZERO.subTo(_, _)),
          (_._ = _),
          _.clamp(),
          _ > 0 && _.rShiftTo(_, _),
          _ < 0 && _.ZERO.subTo(_, _));
      }
    }
  }
}
function _(_) {
  var _ = _();
  return (
    this.abs().divRemTo(_, null, _),
    this._ < 0 && _.compareTo(_.ZERO) > 0 && _.subTo(_, _),
    _
  );
}
function _(_) {
  this._ = _;
}
function _(_) {
  return _._ < 0 || _.compareTo(this._) >= 0 ? _.mod(this._) : _;
}
function _(_) {
  return _;
}
function _(_) {
  _.divRemTo(this._, null, _);
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _() {
  if (this._ < 1) return 0;
  var _ = this[0];
  if (!(_ & 1)) return 0;
  var _ = _ & 3;
  return (
    (_ = (_ * (2 - (_ & 15) * _)) & 15),
    (_ = (_ * (2 - (_ & 255) * _)) & 255),
    (_ = (_ * (2 - (((_ & 65535) * _) & 65535))) & 65535),
    (_ = (_ * (2 - ((_ * _) % this._))) % this._),
    _ > 0 ? this._ - _ : -_
  );
}
function _(_) {
  ((this._ = _),
    (this._ = _.invDigit()),
    (this.mpl = this._ & 32767),
    (this.mph = this._ >> 15),
    (this._ = (1 << (_._ - 15)) - 1),
    (this.mt2 = 2 * _._));
}
function _(_) {
  var _ = _();
  return (
    _.abs().dlShiftTo(this._._, _),
    _.divRemTo(this._, null, _),
    _._ < 0 && _.compareTo(_.ZERO) > 0 && this._.subTo(_, _),
    _
  );
}
function _(_) {
  var _ = _();
  return (_.copyTo(_), this.reduce(_), _);
}
function _(_) {
  for (; _._ <= this.mt2;) _[_._++] = 0;
  for (var _ = 0; _ < this._._; ++_) {
    var _ = _[_] & 32767,
      _ =
        (_ * this.mpl +
          (((_ * this.mph + (_[_] >> 15) * this.mpl) & this._) << 15)) &
        _._;
    for (
      _ = _ + this._._, _[_] += this._._(0, _, _, _, 0, this._._);
      _[_] >= _._;
    )
      ((_[_] -= _._), _[++_]++);
  }
  (_.clamp(),
    _.drShiftTo(this._._, _),
    _.compareTo(this._) >= 0 && _.subTo(this._, _));
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _() {
  return (this._ > 0 ? this[0] & 1 : this._) == 0;
}
function _(_, _) {
  if (_ > 4294967295 || _ < 1) return _.ONE;
  var _ = _(),
    _ = _(),
    _ = _.convert(this),
    _ = _(_) - 1;
  for (_.copyTo(_); --_ >= 0;)
    if ((_.sqrTo(_, _), (_ & (1 << _)) > 0)) _.mulTo(_, _, _);
    else {
      var _ = _;
      ((_ = _), (_ = _));
    }
  return _.revert(_);
}
function _(_, _) {
  var _ = _ < 256 || _.isEven() ? new _(_) : new _(_);
  return this.exp(_, _);
}
((_.prototype.copyTo = _),
  (_.prototype.fromInt = _),
  (_.prototype.fromString = _),
  (_.prototype.clamp = _),
  (_.prototype.dlShiftTo = _),
  (_.prototype.drShiftTo = _),
  (_.prototype.lShiftTo = _),
  (_.prototype.rShiftTo = _),
  (_.prototype.subTo = _),
  (_.prototype.multiplyTo = _),
  (_.prototype.squareTo = _),
  (_.prototype.divRemTo = _),
  (_.prototype.invDigit = _),
  (_.prototype.isEven = _),
  (_.prototype.exp = _),
  (_.prototype.toString = _),
  (_.prototype.negate = _),
  (_.prototype.abs = _),
  (_.prototype.compareTo = _),
  (_.prototype.bitLength = _),
  (_.prototype.mod = _),
  (_.prototype.modPowInt = _),
  (_.ZERO = _(0)),
  (_.ONE = _(1)));
function _() {
  var _ = _();
  return (this.copyTo(_), _);
}
function _() {
  if (this._ < 0) {
    if (this._ == 1) return this[0] - this._;
    if (this._ == 0) return -1;
  } else if (this._ == 1) return this[0];
  else if (this._ == 0) return 0;
  return ((this[1] & ((1 << (32 - this._)) - 1)) << this._) | this[0];
}
function _() {
  return this._ == 0 ? this._ : (this[0] << 24) >> 24;
}
function _() {
  return this._ == 0 ? this._ : (this[0] << 16) >> 16;
}
function _(_) {
  return Math.floor((Math.LN2 * this._) / Math.log(_));
}
function _() {
  return this._ < 0 ? -1 : this._ <= 0 || (this._ == 1 && this[0] <= 0) ? 0 : 1;
}
function _(_) {
  if (((_ ??= 10), this.signum() == 0 || _ < 2 || _ > 36)) return `0`;
  var _ = this.chunkSize(_),
    _ = _ ** +_,
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = ``;
  for (this.divRemTo(_, _, _); _.signum() > 0;)
    ((_ = (_ + _.intValue()).toString(_).substr(1) + _), _.divRemTo(_, _, _));
  return _.intValue().toString(_) + _;
}
function _(_, _) {
  (this.fromInt(0), (_ ??= 10));
  for (
    var _ = this.chunkSize(_), _ = _ ** +_, _ = !1, _ = 0, _ = 0, _ = 0;
    _ < _.length;
    ++_
  ) {
    var _ = _(_, _);
    _ < 0
      ? _.charAt(_) == `-` && this.signum() == 0 && (_ = !0)
      : ((_ = _ * _ + _),
        ++_ >= _ &&
          (this.dMultiply(_), this.dAddOffset(_, 0), (_ = 0), (_ = 0)));
  }
  (_ > 0 && (this.dMultiply(_ ** +_), this.dAddOffset(_, 0)),
    _ && _.ZERO.subTo(this, this));
}
function _(_, _, _) {
  if (typeof _ == `number`) {
    if (_ < 2) this.fromInt(1);
    else
      for (
        this.fromNumber(_, _),
          this.testBit(_ - 1) ||
            this.bitwiseTo(_.ONE.shiftLeft(_ - 1), _, this),
          this.isEven() && this.dAddOffset(1, 0);
        !this.isProbablePrime(_);
      )
        (this.dAddOffset(2, 0),
          this.bitLength() > _ && this.subTo(_.ONE.shiftLeft(_ - 1), this));
  } else {
    var _ = [],
      _ = _ & 7;
    ((_.length = (_ >> 3) + 1),
      _.nextBytes(_),
      _ > 0 ? (_[0] &= (1 << _) - 1) : (_[0] = 0),
      this.fromString(_, 256));
  }
}
function _() {
  var _ = this._,
    _ = [];
  _[0] = this._;
  var _ = this._ - ((_ * this._) % 8),
    _,
    _ = 0;
  if (_-- > 0)
    for (
      _ < this._ &&
      (_ = this[_] >> _) != (this._ & this._) >> _ &&
      (_[_++] = _ | (this._ << (this._ - _)));
      _ >= 0;
    )
      (_ < 8
        ? ((_ = (this[_] & ((1 << _) - 1)) << (8 - _)),
          (_ |= this[--_] >> (_ += this._ - 8)))
        : ((_ = (this[_] >> (_ -= 8)) & 255), _ <= 0 && ((_ += this._), --_)),
        _ & 128 && (_ |= -256),
        _ == 0 && (this._ & 128) != (_ & 128) && ++_,
        (_ > 0 || _ != this._) && (_[_++] = _));
  return _;
}
function _(_) {
  return this.compareTo(_) == 0;
}
function _(_) {
  return this.compareTo(_) < 0 ? this : _;
}
function _(_) {
  return this.compareTo(_) > 0 ? this : _;
}
function _(_, _, _) {
  var _,
    _,
    _ = Math.min(_._, this._);
  for (_ = 0; _ < _; ++_) _[_] = _(this[_], _[_]);
  if (_._ < this._) {
    for (_ = _._ & this._, _ = _; _ < this._; ++_) _[_] = _(this[_], _);
    _._ = this._;
  } else {
    for (_ = this._ & this._, _ = _; _ < _._; ++_) _[_] = _(_, _[_]);
    _._ = _._;
  }
  ((_._ = _(this._, _._)), _.clamp());
}
function _(_, _) {
  return _ & _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ | _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ ^ _;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _(_, _) {
  return _ & ~_;
}
function _(_) {
  var _ = _();
  return (this.bitwiseTo(_, _, _), _);
}
function _() {
  for (var _ = _(), _ = 0; _ < this._; ++_) _[_] = this._ & ~this[_];
  return ((_._ = this._), (_._ = ~this._), _);
}
function _(_) {
  var _ = _();
  return (_ < 0 ? this.rShiftTo(-_, _) : this.lShiftTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (_ < 0 ? this.lShiftTo(-_, _) : this.rShiftTo(_, _), _);
}
function _(_) {
  if (_ == 0) return -1;
  var _ = 0;
  return (
    _ & 65535 || ((_ >>= 16), (_ += 16)),
    _ & 255 || ((_ >>= 8), (_ += 8)),
    _ & 15 || ((_ >>= 4), (_ += 4)),
    _ & 3 || ((_ >>= 2), (_ += 2)),
    _ & 1 || ++_,
    _
  );
}
function _() {
  for (var _ = 0; _ < this._; ++_)
    if (this[_] != 0) return _ * this._ + _(this[_]);
  return this._ < 0 ? this._ * this._ : -1;
}
function _(_) {
  for (var _ = 0; _ != 0;) ((_ &= _ - 1), ++_);
  return _;
}
function _() {
  for (var _ = 0, _ = this._ & this._, _ = 0; _ < this._; ++_)
    _ += _(this[_] ^ _);
  return _;
}
function _(_) {
  var _ = Math.floor(_ / this._);
  return _ >= this._ ? this._ != 0 : !!(this[_] & (1 << (_ % this._)));
}
function _(_, _) {
  var _ = _.ONE.shiftLeft(_);
  return (this.bitwiseTo(_, _, _), _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_) {
  return this.changeBit(_, _);
}
function _(_, _) {
  for (var _ = 0, _ = 0, _ = Math.min(_._, this._); _ < _;)
    ((_ += this[_] + _[_]), (_[_++] = _ & this._), (_ >>= this._));
  if (_._ < this._) {
    for (_ += _._; _ < this._;)
      ((_ += this[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += this._;
  } else {
    for (_ += this._; _ < _._;)
      ((_ += _[_]), (_[_++] = _ & this._), (_ >>= this._));
    _ += _._;
  }
  ((_._ = _ < 0 ? -1 : 0),
    _ > 0 ? (_[_++] = _) : _ < -1 && (_[_++] = this._ + _),
    (_._ = _),
    _.clamp());
}
function _(_) {
  var _ = _();
  return (this.addTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.subTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.multiplyTo(_, _), _);
}
function _(_) {
  var _ = _();
  return (this.divRemTo(_, _, null), _);
}
function _(_) {
  var _ = _();
  return (this.divRemTo(_, null, _), _);
}
function _(_) {
  var _ = _(),
    _ = _();
  return (this.divRemTo(_, _, _), [_, _]);
}
function _(_) {
  ((this[this._] = this._(0, _ - 1, this, 0, 0, this._)),
    ++this._,
    this.clamp());
}
function _(_, _) {
  for (; this._ <= _;) this[this._++] = 0;
  for (this[_] += _; this[_] >= this._;)
    ((this[_] -= this._), ++_ >= this._ && (this[this._++] = 0), ++this[_]);
}
function _() {}
function _(_) {
  return _;
}
function _(_, _, _) {
  _.multiplyTo(_, _);
}
function _(_, _) {
  _.squareTo(_);
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _(_) {
  return this.exp(_, new _());
}
function _(_, _, _) {
  var _ = Math.min(this._ + _._, _);
  for (_._ = 0, _._ = _; _ > 0;) _[--_] = 0;
  for (var _ = _._ - this._; _ < _; ++_)
    _[_ + this._] = this._(0, _[_], _, _, 0, this._);
  for (_ = Math.min(_._, _); _ < _; ++_) this._(0, _[_], _, _, 0, _ - _);
  _.clamp();
}
function _(_, _, _) {
  --_;
  var _ = (_._ = this._ + _._ - _);
  for (_._ = 0; --_ >= 0;) _[_] = 0;
  for (_ = Math.max(_ - this._, 0); _ < _._; ++_)
    _[this._ + _ - _] = this._(_ - _, _[_], _, 0, 0, this._ + _ - _);
  (_.clamp(), _.drShiftTo(1, _));
}
function _(_) {
  ((this._ = _()),
    (this._ = _()),
    _.ONE.dlShiftTo(2 * _._, this._),
    (this._ = this._.divide(_)),
    (this._ = _));
}
function _(_) {
  if (_._ < 0 || _._ > 2 * this._._) return _.mod(this._);
  if (_.compareTo(this._) < 0) return _;
  var _ = _();
  return (_.copyTo(_), this.reduce(_), _);
}
function _(_) {
  return _;
}
function _(_) {
  for (
    _.drShiftTo(this._._ - 1, this._),
      _._ > this._._ + 1 && ((_._ = this._._ + 1), _.clamp()),
      this._.multiplyUpperTo(this._, this._._ + 1, this._),
      this._.multiplyLowerTo(this._, this._._ + 1, this._);
    _.compareTo(this._) < 0;
  )
    _.dAddOffset(1, this._._ + 1);
  for (_.subTo(this._, _); _.compareTo(this._) >= 0;) _.subTo(this._, _);
}
function _(_, _) {
  (_.squareTo(_), this.reduce(_));
}
function _(_, _, _) {
  (_.multiplyTo(_, _), this.reduce(_));
}
((_.prototype.convert = _),
  (_.prototype.revert = _),
  (_.prototype.reduce = _),
  (_.prototype.mulTo = _),
  (_.prototype.sqrTo = _));
function _(_, _) {
  var _ = _.bitLength(),
    _,
    _ = _(1),
    _;
  if (_ <= 0) return _;
  ((_ = _ < 18 ? 1 : _ < 48 ? 3 : _ < 144 ? 4 : _ < 768 ? 5 : 6),
    (_ = _ < 8 ? new _(_) : _.isEven() ? new _(_) : new _(_)));
  var _ = [],
    _ = 3,
    _ = _ - 1,
    _ = (1 << _) - 1;
  if (((_[1] = _.convert(this)), _ > 1)) {
    var _ = _();
    for (_.sqrTo(_[1], _); _ <= _;)
      ((_[_] = _()), _.mulTo(_, _[_ - 2], _[_]), (_ += 2));
  }
  var _ = _._ - 1,
    _,
    _ = !0,
    _ = _(),
    _;
  for (_ = _(_[_]) - 1; _ >= 0;) {
    for (
      _ >= _
        ? (_ = (_[_] >> (_ - _)) & _)
        : ((_ = (_[_] & ((1 << (_ + 1)) - 1)) << (_ - _)),
          _ > 0 && (_ |= _[_ - 1] >> (this._ + _ - _))),
        _ = _;
      !(_ & 1);
    )
      ((_ >>= 1), --_);
    if (((_ -= _) < 0 && ((_ += this._), --_), _)) (_[_].copyTo(_), (_ = !1));
    else {
      for (; _ > 1;) (_.sqrTo(_, _), _.sqrTo(_, _), (_ -= 2));
      (_ > 0 ? _.sqrTo(_, _) : ((_ = _), (_ = _), (_ = _)),
        _.mulTo(_, _[_], _));
    }
    for (; _ >= 0 && !(_[_] & (1 << _));)
      (_.sqrTo(_, _),
        (_ = _),
        (_ = _),
        (_ = _),
        --_ < 0 && ((_ = this._ - 1), --_));
  }
  return _.revert(_);
}
function _(_) {
  var _ = this._ < 0 ? this.negate() : this.clone(),
    _ = _._ < 0 ? _.negate() : _.clone();
  if (_.compareTo(_) < 0) {
    var _ = _;
    ((_ = _), (_ = _));
  }
  var _ = _.getLowestSetBit(),
    _ = _.getLowestSetBit();
  if (_ < 0) return _;
  for (
    _ < _ && (_ = _), _ > 0 && (_.rShiftTo(_, _), _.rShiftTo(_, _));
    _.signum() > 0;
  )
    ((_ = _.getLowestSetBit()) > 0 && _.rShiftTo(_, _),
      (_ = _.getLowestSetBit()) > 0 && _.rShiftTo(_, _),
      _.compareTo(_) >= 0
        ? (_.subTo(_, _), _.rShiftTo(1, _))
        : (_.subTo(_, _), _.rShiftTo(1, _)));
  return (_ > 0 && _.lShiftTo(_, _), _);
}
function _(_) {
  if (_ <= 0) return 0;
  var _ = this._ % _,
    _ = this._ < 0 ? _ - 1 : 0;
  if (this._ > 0) {
    if (_ == 0) _ = this[0] % _;
    else for (var _ = this._ - 1; _ >= 0; --_) _ = (_ * _ + this[_]) % _;
  }
  return _;
}
function _(_) {
  var _ = _.isEven();
  if ((this.isEven() && _) || _.signum() == 0) return _.ZERO;
  for (
    var _ = _.clone(), _ = this.clone(), _ = _(1), _ = _(0), _ = _(0), _ = _(1);
    _.signum() != 0;
  ) {
    for (; _.isEven();)
      (_.rShiftTo(1, _),
        _
          ? ((_.isEven() && _.isEven()) || (_.addTo(this, _), _.subTo(_, _)),
            _.rShiftTo(1, _))
          : _.isEven() || _.subTo(_, _),
        _.rShiftTo(1, _));
    for (; _.isEven();)
      (_.rShiftTo(1, _),
        _
          ? ((_.isEven() && _.isEven()) || (_.addTo(this, _), _.subTo(_, _)),
            _.rShiftTo(1, _))
          : _.isEven() || _.subTo(_, _),
        _.rShiftTo(1, _));
    _.compareTo(_) >= 0
      ? (_.subTo(_, _), _ && _.subTo(_, _), _.subTo(_, _))
      : (_.subTo(_, _), _ && _.subTo(_, _), _.subTo(_, _));
  }
  if (_.compareTo(_.ONE) != 0) return _.ZERO;
  if (_.compareTo(_) >= 0) return _.subtract(_);
  if (_.signum() < 0) _.addTo(_, _);
  else return _;
  return _.signum() < 0 ? _.add(_) : _;
}
var _ = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509,
  ],
  _ = (1 << 26) / _[_.length - 1];
function _(_) {
  var _,
    _ = this.abs();
  if (_._ == 1 && _[0] <= _[_.length - 1]) {
    for (_ = 0; _ < _.length; ++_) if (_[0] == _[_]) return !0;
    return !1;
  }
  if (_.isEven()) return !1;
  for (_ = 1; _ < _.length;) {
    for (var _ = _[_], _ = _ + 1; _ < _.length && _ < _;) _ *= _[_++];
    for (_ = _.modInt(_); _ < _;) if (_ % _[_++] == 0) return !1;
  }
  return _.millerRabin(_);
}
function _(_) {
  var _ = this.subtract(_.ONE),
    _ = _.getLowestSetBit();
  if (_ <= 0) return !1;
  var _ = _.shiftRight(_);
  ((_ = (_ + 1) >> 1), _ > _.length && (_ = _.length));
  for (var _ = _(), _ = 0; _ < _; ++_) {
    _.fromInt(_[_]);
    var _ = _.modPow(_, this);
    if (_.compareTo(_.ONE) != 0 && _.compareTo(_) != 0) {
      for (var _ = 1; _++ < _ && _.compareTo(_) != 0;)
        if (((_ = _.modPowInt(2, this)), _.compareTo(_.ONE) == 0)) return !1;
      if (_.compareTo(_) != 0) return !1;
    }
  }
  return !0;
}
((_.prototype.chunkSize = _),
  (_.prototype.toRadix = _),
  (_.prototype.fromRadix = _),
  (_.prototype.fromNumber = _),
  (_.prototype.bitwiseTo = _),
  (_.prototype.changeBit = _),
  (_.prototype.addTo = _),
  (_.prototype.dMultiply = _),
  (_.prototype.dAddOffset = _),
  (_.prototype.multiplyLowerTo = _),
  (_.prototype.multiplyUpperTo = _),
  (_.prototype.modInt = _),
  (_.prototype.millerRabin = _),
  (_.prototype.clone = _),
  (_.prototype.intValue = _),
  (_.prototype.byteValue = _),
  (_.prototype.shortValue = _),
  (_.prototype.signum = _),
  (_.prototype.toByteArray = _),
  (_.prototype.equals = _),
  (_.prototype.min = _),
  (_.prototype.max = _),
  (_.prototype.and = _),
  (_.prototype._ = _),
  (_.prototype.xor = _),
  (_.prototype.andNot = _),
  (_.prototype.not = _),
  (_.prototype.shiftLeft = _),
  (_.prototype.shiftRight = _),
  (_.prototype.getLowestSetBit = _),
  (_.prototype.bitCount = _),
  (_.prototype.testBit = _),
  (_.prototype.setBit = _),
  (_.prototype.clearBit = _),
  (_.prototype.flipBit = _),
  (_.prototype.add = _),
  (_.prototype.subtract = _),
  (_.prototype.multiply = _),
  (_.prototype.divide = _),
  (_.prototype.remainder = _),
  (_.prototype.divideAndRemainder = _),
  (_.prototype.modPow = _),
  (_.prototype.modInverse = _),
  (_.prototype.pow = _),
  (_.prototype.gcd = _),
  (_.prototype.isProbablePrime = _));
var _ = function (_, _) {
    ((this.modulus = new _(_, 16)), (this.encryptionExponent = new _(_, 16)));
  },
  _ = {
    base64: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
    encode: function (_) {
      if (!_) return !1;
      var _ = ``,
        _,
        _,
        _,
        _,
        _,
        _,
        _,
        _ = 0;
      do
        ((_ = _.charCodeAt(_++)),
          (_ = _.charCodeAt(_++)),
          (_ = _.charCodeAt(_++)),
          (_ = _ >> 2),
          (_ = ((_ & 3) << 4) | (_ >> 4)),
          (_ = ((_ & 15) << 2) | (_ >> 6)),
          (_ = _ & 63),
          isNaN(_) ? (_ = _ = 64) : isNaN(_) && (_ = 64),
          (_ +=
            this.base64.charAt(_) +
            this.base64.charAt(_) +
            this.base64.charAt(_) +
            this.base64.charAt(_)));
      while (_ < _.length);
      return _;
    },
    decode: function (_) {
      if (!_) return !1;
      _ = _.replace(/[^A-Za-z0-9\+\/\=]/g, ``);
      var _ = ``,
        _,
        _,
        _,
        _,
        _ = 0;
      do
        ((_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ = this.base64.indexOf(_.charAt(_++))),
          (_ += String.fromCharCode((_ << 2) | (_ >> 4))),
          _ != 64 && (_ += String.fromCharCode(((_ & 15) << 4) | (_ >> 2))),
          _ != 64 && (_ += String.fromCharCode(((_ & 3) << 6) | _)));
      while (_ < _.length);
      return _;
    },
  },
  _ = {
    hex: `0123456789abcdef`,
    encode: function (_) {
      if (!_) return !1;
      var _ = ``,
        _,
        _ = 0;
      do
        ((_ = _.charCodeAt(_++)),
          (_ += this.hex.charAt((_ >> 4) & 15) + this.hex.charAt(_ & 15)));
      while (_ < _.length);
      return _;
    },
    decode: function (_) {
      if (!_) return !1;
      _ = _.replace(/[^0-9abcdef]/g, ``);
      var _ = ``,
        _ = 0;
      do
        _ += String.fromCharCode(
          ((this.hex.indexOf(_.charAt(_++)) << 4) & 240) |
            (this.hex.indexOf(_.charAt(_++)) & 15),
        );
      while (_ < _.length);
      return _;
    },
  },
  _ = {
    getPublicKey: function (_, _) {
      return new _(_, _);
    },
    encrypt: function (_, _) {
      return !_ ||
        ((_ = this.pkcs1pad2(_, (_.modulus.bitLength() + 7) >> 3)), !_) ||
        ((_ = _.modPowInt(_.encryptionExponent, _.modulus)), !_)
        ? !1
        : ((_ = _.toString(16)),
          (_.length & 1) == 1 && (_ = `0` + _),
          _.encode(_.decode(_)));
    },
    pkcs1pad2: function (_, _) {
      if (_ < _.length + 11) return null;
      for (var _ = [], _ = _.length - 1; _ >= 0 && _ > 0;)
        _[--_] = _.charCodeAt(_--);
      for (_[--_] = 0; _ > 2;) _[--_] = Math.floor(Math.random() * 254) + 1;
      return ((_[--_] = 2), (_[--_] = 0), new _(_));
    },
  },
  _ = new _(`Login`),
  _ = _.Info;
_.Debug;
var _ = _.Warning,
  _ = _.Error;
function _(_, _) {
  let _ = _.getPublicKey(_.publickey_mod, _.publickey_exp),
    _ = _.encrypt(_, _);
  return _ === !1 ? null : _;
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Generic = 1)] = `Generic`),
      (_[(_.Expired = 2)] = `Expired`),
      (_[(_.Network = 3)] = `Network`),
      (_[(_.MoveAuthenticator = 4)] = `MoveAuthenticator`),
      (_[(_.RateLimitExceeded = 5)] = `RateLimitExceeded`),
      (_[(_.AnonymousLogin = 6)] = `AnonymousLogin`),
      _
    );
  })({});
function _(_) {
  let {
    shared_secret: _,
    identity_secret: _,
    secret_1: _,
    status: _,
    uri: _,
    server_time: _,
    ..._
  } = _;
  return {
    shared_secret: _.fromByteArray(_),
    identity_secret: _.fromByteArray(_),
    secret_1: _.fromByteArray(_),
    ..._,
  };
}
var _ = (function (_) {
  return (
    (_[(_.k_Success = 0)] = `k_Success`),
    (_[(_.k_PrimaryDomainFail = 1)] = `k_PrimaryDomainFail`),
    (_[(_.k_SecondaryDomainFail = 2)] = `k_SecondaryDomainFail`),
    _
  );
})({});
function _(_, _) {
  let _ = Object.keys(_);
  return (
    _.length === Object.keys(_).length && _.every((_) => Object._(_[_], _[_]))
  );
}
var _ = class {
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
  set m_strChallengeURL(_) {
    ((this.m_strChallengeURLValue = _), this.NotifyChanged());
  }
  m_onShowAgreement;
  m_bRemoteInteractionValue = !1;
  get m_bRemoteInteraction() {
    return this.m_bRemoteInteractionValue;
  }
  set m_bRemoteInteraction(_) {
    ((this.m_bRemoteInteractionValue = _), this.NotifyChanged());
  }
  m_onCompleteCallback;
  m_eFailureStateValue = 0;
  get m_eFailureState() {
    return this.m_eFailureStateValue;
  }
  set m_eFailureState(_) {
    ((this.m_eFailureStateValue = _), this.NotifyChanged());
  }
  m_strExtendedErrorMessageValue = ``;
  get m_strExtendedErrorMessage() {
    return this.m_strExtendedErrorMessageValue;
  }
  set m_strExtendedErrorMessage(_) {
    ((this.m_strExtendedErrorMessageValue = _), this.NotifyChanged());
  }
  m_onDeviceDetailsCallback;
  constructor(_, _, _, _) {
    ((this.m_transport = _),
      (this.m_onCompleteCallback = _),
      (this.m_onDeviceDetailsCallback = _),
      (this.m_onShowAgreement = _));
  }
  Subscribe(_) {
    return (
      this.m_setListeners.add(_),
      () => {
        this.m_setListeners.delete(_);
      }
    );
  }
  GetSnapshot() {
    let _ = this.BuildSnapshot();
    return (
      (this.m_snapshot && _(this.m_snapshot, _)) || (this.m_snapshot = _),
      this.m_snapshot
    );
  }
  NotifyChanged() {
    this.m_bNotifyPending ||
      ((this.m_bNotifyPending = !0),
      queueMicrotask(() => {
        this.m_bNotifyPending = !1;
        for (let _ of this.m_setListeners) _();
      }));
  }
  StartPolling(_ = !0) {
    (this.m_activeTimerID != null && this.StopPolling(),
      _
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
      let _ = _.Init(_);
      (_.SetEMsg(_),
        _.Body().set_client_id(this.m_strClientID),
        _.Body().set_request_id(this.m_rgRequestID),
        this.m_strTokenToRevoke &&
          _.Body().set_token_to_revoke(this.m_strTokenToRevoke));
      let _ = await _.PollAuthSessionStatus(this.m_transport, _),
        _ = _.GetEResult();
      if (_ !== 1) {
        if (_ === 2) {
          let _ = _.Hdr().transport_error();
          if (
            (_(
              `Failed to poll auth session. Result ${_}. Transport Error: ${_}`,
            ),
            _ === 2 || _ === 3)
          )
            return (this.m_transport.MakeReady(), this.StartPolling(!1), 1);
        }
        if (_ === 9 || _ === 27) this.m_eFailureState = 2;
        else if (_ === 84) this.m_eFailureState = 5;
        else if (_ == 118) {
          let _ = _.Body().agreement_session_url();
          if (
            (_(!!_, `Missing agreement session URL for result`, _),
            this.m_onShowAgreement)
          )
            this.m_onShowAgreement(_);
          else {
            let _ = location.href;
            window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
          }
          return (
            this.m_onCompleteCallback({
              bSuccess: !1,
            }),
            _
          );
        } else
          (_(`Failed to poll auth session. Result: ${_}`),
            (this.m_eFailureState = 1));
        return (
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
          _
        );
      }
      let {
        new_challenge_url: _,
        new_client_id: _,
        refresh_token: _,
        access_token: _,
        account_name: _,
        had_remote_interaction: _,
        new_guard_data: _,
      } = _.Body().toObject();
      return (
        (this.m_bRemoteInteraction = !!_),
        _
          ? (_(
              !!_ && !!_,
              `Missing access token or account name with refresh token`,
            ),
            this.m_onCompleteCallback({
              bSuccess: !0,
              strRefreshToken: _,
              strAccessToken: _,
              strAccountName: _,
              strNewGuardData: _,
            }),
            _)
          : (_ && (this.m_strChallengeURL = _),
            _ && (this.m_strClientID = _),
            this.StartPolling(!1),
            _)
      );
    } catch (_) {
      return (
        _(`Failed to poll auth session. ${_}`),
        (this.m_eFailureState = 1),
        this.m_onCompleteCallback({
          bSuccess: !1,
        }),
        2
      );
    }
  }
  SetTokenToRevoke(_) {
    this.m_strTokenToRevoke = _;
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
    let _ = await this.m_onDeviceDetailsCallback();
    return _.fromObject(_);
  }
};
(_([_], _.prototype, `Subscribe`, null),
  _([_], _.prototype, `GetSnapshot`, null),
  _([_], _.prototype, `PollForUpdate`, null),
  _([_], _.prototype, `SetTokenToRevoke`, null));
function _(_) {
  let _ = new FormData();
  (_.append(`nonce`, _), _.append(`sessionid`, _(_) ?? ``));
  let _ = new URL(location.href),
    _ = new URLSearchParams(_.search);
  (_.has(`need_password`) &&
    (_.delete(`need_password`), (_.search = _.toString())),
    _.append(`redir`, _.toString()));
  let _ = `${_.LOGIN_BASE_URL}jwt/finalizelogin`;
  return _.default
    .post(_, _, {
      withCredentials: !0,
    })
    .then(
      (_) => {
        let { data: _ } = _;
        if (
          !_ ||
          !_.transfer_info ||
          !_.steamID ||
          !Array.isArray(_.transfer_info)
        )
          return (_(`Result of finalizelogin does not match expectations!`), 1);
        let { transfer_info: _, steamID: _, primary_domain: _ } = _;
        return Promise.all(
          _.map(({ url: _, params: _ }) =>
            _(_, {
              ..._,
              steamID: _,
            }),
          ),
        ).then(
          (_) => _(_, _),
          () => 2,
        );
      },
      () => (_(`Failed to finalize login. Initial call failed.`), 1),
    );
}
function _(_, _) {
  let _ = 0;
  return (
    _.forEach((_) => {
      _.bSuccess ||
        (_ && _.domain.toLowerCase() === _.toLowerCase()
          ? (_ = 1)
          : _ == 0 && (_ = 2));
    }),
    _
  );
}
async function _(_, _) {
  let _ = new URL(_),
    _ = !0;
  try {
    let _ = new FormData();
    Object.keys(_).forEach((_) => _.append(_, _[_]));
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
      timeout: 1e4,
    });
    _.status === 200
      ? _.data.result !== 1 &&
        (_(`Transfer login to ${_.host} failed with result: ${_.data.result}`),
        (_ = !1))
      : (_(`Transfer login to ${_.host} failed with status code: ${_.status}`),
        (_ = !1));
  } catch (_) {
    (_(`Transfer login to ${_.host} failed: "${_}"`), (_ = !1));
  }
  return {
    bSuccess: _,
    domain: _.host,
  };
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            time: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            usage_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            confirmation_type: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            confirmation_action: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UsageEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sender_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sender_time: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.server_time || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            server_time: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            skew_tolerance_seconds: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            large_time_jink: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            probe_frequency_seconds: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            adjusted_time_probe_frequency_seconds: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hint_probe_frequency_seconds: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sync_timeout: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            try_again_seconds: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            max_attempts: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Time_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            include: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.state || _(_._()),
        _.Message.initialize(this, _, 0, -1, [16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            state: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            inactivation_reason: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            authenticator_type: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            authenticator_allowed: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            steamguard_scheme: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            token_gid: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            email_validated: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            device_identifier: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            time_created: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            revocation_attempts_remaining: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            classified_agent: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            allow_external_authenticator: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            time_transferred: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            version: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_seen_auth_token_id: {
              _: 15,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            usages: {
              _: 16,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_Status_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            authenticator_time: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            serial_number: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            authenticator_type: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            device_identifier: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            http_headers: {
              _: 7,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            version: {
              _: 8,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.shared_secret || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            shared_secret: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            serial_number: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revocation_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            uri: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            server_time: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            token_gid: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            identity_secret: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            secret_1: {
              _: 9,
              _: _.readBytes,
              _: _.writeBytes,
            },
            status: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            phone_number_hint: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            confirm_type: {
              _: 12,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_AddAuthenticator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            authenticator_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            authenticator_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            activation_code: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            http_headers: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            validate_sms_code: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            server_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            status: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_FinalizeAddAuthenticator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.revocation_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            revocation_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            revocation_reason: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamguard_scheme: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            remove_all_steamguard_cookies: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            server_time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            revocation_attempts_remaining: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticator_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sms_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sms_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            generate_new_token: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            version: {
              _: 3,
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            caller_version: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.shared_secret || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            shared_secret: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            serial_number: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            revocation_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            uri: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            server_time: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            account_name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            token_gid: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            identity_secret: {
              _: 8,
              _: _.readBytes,
              _: _.writeBytes,
            },
            secret_1: {
              _: 9,
              _: _.readBytes,
              _: _.writeBytes,
            },
            status: {
              _: 10,
              _: _.readInt32,
              _: _.writeInt32,
            },
            steamguard_scheme: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 12,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CRemoveAuthenticatorViaChallengeContinue_Replacement_Token`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.success || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            success: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            replacement_token: {
              _: 2,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            version: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            signature: {
              _: 3,
              _: _.readBytes,
              _: _.writeBytes,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return ((_.sm_mbf ||= _(_._())), _.sm_mbf);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(), _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBuffer());
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return (_.serializeBinaryToWriter(this, _), _.getResultBase64String());
    }
    getClassName() {
      return `CTwoFactor_UpdateTokenVersion_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.QueryTime#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  _.QueryTime = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.QueryStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.QueryStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.AddAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.FinalizeAddAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.FinalizeAddAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.UpdateTokenVersion#1`, _(_, _, _), _, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.UpdateTokenVersion = _;
  function _(_, _, _) {
    return _.SendMsg(`TwoFactor.RemoveAuthenticator#1`, _(_, _, _), _, {
      ePrivilege: 9,
    });
  }
  _.RemoveAuthenticator = _;
  function _(_, _, _) {
    return _.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeStart#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 9,
      },
    );
  }
  _.RemoveAuthenticatorViaChallengeStart = _;
  function _(_, _, _) {
    return _.SendMsg(
      `TwoFactor.RemoveAuthenticatorViaChallengeContinue#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 9,
      },
    );
  }
  _.RemoveAuthenticatorViaChallengeContinue = _;
})((_ ||= {}));
var _ = _(_(), 1),
  _ = class extends _ {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(_) {
      ((this.m_eStatusValue = _), this.NotifyChanged());
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
    set m_strErrorReference(_) {
      ((this.m_strErrorReferenceValue = _), this.NotifyChanged());
    }
    m_onLoginComplete;
    constructor(_) {
      (super(
        _.transport,
        (_) => this.onAuthComplete(_),
        _.onDeviceDetails,
        _.onShowAgreement,
      ),
        (this.m_onLoginComplete = _.onComplete),
        (this.m_onGetMachineAuth = _.onGetMachineAuth));
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
    async Start(_, _, _) {
      if (this.m_eStatus !== 0 && this.m_eStatus !== 2)
        return (
          _(
            `Cannot start an already started auth session. Create a new session instance.`,
          ),
          29
        );
      let _ = _.replace(/[^\x00-\x7F]/g, ``),
        _ = _.replace(/[^\x00-\x7F]/g, ``).slice(0, 64);
      if (!_.length || !_.length) return 8;
      if (
        ((this.m_eStatus = 1),
        (this.m_bUsingCodeOverride = !1),
        _ == `anonymous`)
      )
        return (this.SetFailureState(_.AnonymousLogin, _.EResult(12)), 12);
      try {
        let _ = await _(this.m_transport, _);
        if (!_)
          return (
            _(`Cannot start auth session without a valid RSA key`),
            this.SetFailureState(_.Network, _.EResult(20)),
            20
          );
        let _ = _(_, _),
          _ = _.Init(_);
        (_.SetEMsg(_),
          _.Body().set_account_name(_),
          _.Body().set_encrypted_password(_ ?? void 0),
          _.Body().set_encryption_timestamp(_.timestamp),
          _.Body().set_remember_login(!!_),
          _.Body().set_persistence(+!!_));
        let _ = _();
        _ && _.Body().set_website_id(_.WEBSITE_ID);
        try {
          _.Body().set_device_details(await this.GetDeviceDetails());
        } catch (_) {
          (_(`Failed to GetDeviceDetails`), _(_));
        }
        if (
          (_.Body().set_language(_(_.LANGUAGE)),
          this.m_onGetMachineAuth != null)
        ) {
          let _ = await this.m_onGetMachineAuth(_);
          _.eresult == 1 && _.Body().set_guard_data(_.data);
        }
        await this.m_transport.MakeReady();
        let _ = await _.BeginAuthSessionViaCredentials(this.m_transport, _);
        _.DEBUG_LogToConsole();
        let _ = _.GetEResult(),
          _ = _.Hdr().transport_error();
        if (_ !== 1)
          switch (_) {
            case 5:
              return ((this.m_eStatus = 2), _);
            case 20:
            case 3:
              return (this.SetFailureState(_.Network, _.EResult(20)), _);
            case 84:
              return (
                this.SetFailureState(_.RateLimitExceeded, _.EResult(_)), _
              );
            case 118: {
              let _ = _.Body().agreement_session_url();
              if (
                (_(!!_, `Missing agreement session URL for result`, _),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(_);
              else {
                let _ = location.href;
                window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
              }
              return (
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                (this.m_eStatus = 0),
                _
              );
            }
            default:
              return (
                _(`Failed to start auth session. Result: ${_} Transport: ${_}`),
                this.SetFailureState(
                  _.Generic,
                  _.EResult(_),
                  _.Body().extended_error_message(),
                ),
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                _
              );
          }
        this.m_strAccountName = _;
        let {
          client_id: _,
          request_id: _,
          interval: _,
          allowed_confirmations: _ = [],
          steamid: _,
          weak_token: _,
        } = _.Body().toObject();
        if (
          (_(
            _ !== void 0 && !!_ && !!_,
            `Missing poll interval, client ID, or steamid for result`,
            _,
          ),
          (this.m_msPollInterval = _ * 1e3),
          (this.m_strClientID = _),
          (this.m_rgRequestID = _),
          (this.m_steamid = _),
          (this.m_strWeakAuthToken = _ ?? ``),
          _.find(({ confirmation_type: _ }) => _ === 6))
        ) {
          let _ = new FormData();
          (_.append(`clientid`, _), _.append(`steamid`, _));
          let _ = `${_.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
          try {
            if (
              (
                await _.default.post(_, _, {
                  headers: {
                    "Content-Type": `multipart/form-data`,
                  },
                  withCredentials: !0,
                })
              ).data.result == 1
            )
              return ((this.m_eStatus = 4), this.StartPolling(!0), 1);
          } catch (_) {
            if (
              (_(`checkdevice ajax to ${_} failed: ${_.message}`),
              _ instanceof _.AxiosError)
            ) {
              let _ = _;
              return _.response
                ? (this.SetFailureState(
                    _.Network,
                    _.AjaxFailureWithCode(_.response.status),
                  ),
                  20)
                : (this.SetFailureState(_.Network, _.AjaxFailureNoCode()), 20);
            }
            return (this.SetFailureState(_.Network, _.EResult(79)), 79);
          }
        }
        let _ = _(
            _.map(
              ({ confirmation_type: _ }) => (
                _(
                  _ !== void 0,
                  `Missing confirmation type in allowed confirmations`,
                ),
                _
              ),
            ),
          ),
          _ = _.find(({ confirmation_type: _ }) => _ === _);
        switch (
          (_ &&
            _.associated_message &&
            (this.m_strConfirmationAssociatedMessage = _.associated_message),
          _)
        ) {
          case 1:
            return ((this.m_eStatus = 13), this.StartPolling(), _);
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
        return _;
      } catch (_) {
        return (
          _(`Failed to start auth session. Exception: ${JSON.stringify(_)}`),
          _(_),
          this.SetFailureState(_.Generic, _.FailedToStart()),
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
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
    async SendSteamGuardCode(_, _ = !0) {
      if (_.length == 0) {
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
        let _ = this.m_eStatus === 3 || this.m_eStatus === 10,
          _ = _.Init(_);
        (_.SetEMsg(_),
          _.Body().set_client_id(this.m_strClientID),
          _.Body().set_steamid(this.m_steamid),
          _.Body().set_code(_),
          _.Body().set_code_type(_ ? 2 : 3));
        let _ = await _.UpdateAuthSessionWithSteamGuardCode(
            this.m_transport,
            _,
          ),
          _ = _.GetEResult();
        if (_ !== 1) {
          if (!_)
            return (
              _(
                `Failed to automatically update session with local SG info. Result ${_}. Transport ${_.Hdr().transport_error()}`,
              ),
              _
            );
          switch (_) {
            case 65:
            case 88:
              return ((this.m_eStatus = _ ? 10 : 11), _);
            case 27:
              return (
                this.SetFailureState(_.Expired, _.EResult(_)),
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                _
              );
            case 84:
              return (
                this.SetFailureState(_.RateLimitExceeded, _.EResult(_)),
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                _
              );
            case 118: {
              let _ = _.Body().agreement_session_url();
              if (
                (_(!!_, `Missing agreement session URL for result`, _),
                this.m_onShowAgreement)
              )
                this.m_onShowAgreement(_);
              else {
                let _ = location.href;
                window.location.href = `${_}&redir=${encodeURIComponent(_)}`;
              }
              return (
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                (this.m_eStatus = 0),
                _
              );
            }
            default:
              return (
                _(`Failed to update auth session with SG code. Result: ${_}`),
                this.SetFailureState(_.Generic, _.EResult(_)),
                this.m_onCompleteCallback({
                  bSuccess: !1,
                }),
                _
              );
          }
        }
        return ((this.m_eStatus = 13), this.StartPolling(), _);
      } catch (_) {
        return (
          _(`Failed to update auth session with SG code. ${_}`),
          this.SetFailureState(_.Generic, _.FailedToAddCode()),
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
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
          _(
            `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    CantAccessCode() {
      this.m_eStatus = 7;
    }
    async StartMoveAuthenticator() {
      this.m_weakAuthWebInterface = new _(
        _.WEBAPI_BASE_URL,
        this.m_strWeakAuthToken,
      );
      try {
        let _ = _.Init(_),
          _ = await _.RemoveAuthenticatorViaChallengeStart(
            this.m_weakAuthWebInterface.GetServiceTransport(),
            _,
          );
        _.GetEResult() == 1
          ? (this.m_eStatus = 8)
          : (_.DEBUG_LogToConsole(),
            _(
              `An unexpected error occured while adding an authenticator`,
              _.GetEResult(),
            ),
            this.SetFailureState(
              _.MoveAuthenticator,
              _.EResult(_.GetEResult()),
            ));
      } catch (_) {
        (_(`An unexpected error occured while moving an authenticator`, _),
          this.SetFailureState(_.MoveAuthenticator, _.EResult(2)));
      }
    }
    async ResendMoveCode() {
      _(
        !!this.m_weakAuthWebInterface,
        `Resending move code before StartMoveAuthenticator`,
      );
      let _ = _.Init(_),
        _ = await _.RemoveAuthenticatorViaChallengeStart(
          this.m_weakAuthWebInterface.GetServiceTransport(),
          _,
        );
      (_.GetEResult() != 1 &&
        (_.DEBUG_LogToConsole(),
        _(
          `An unexpected error occured while adding an authenticator`,
          _.GetEResult(),
        )),
        (this.m_eStatus = 8));
    }
    async FinishMoveAuthenticator(_) {
      _(
        !!this.m_weakAuthWebInterface,
        `Finishing authenticator move before StartMoveAuthenticator`,
      );
      let _ = _.Init(_);
      (_.Body().set_sms_code(_),
        _.Body().set_generate_new_token(!0),
        _.Body().set_version(2));
      let _ = await _.RemoveAuthenticatorViaChallengeContinue(
        this.m_weakAuthWebInterface.GetServiceTransport(),
        _,
      );
      if (_.GetEResult() == 94) this.m_eStatus = 12;
      else if (!_.Body().success())
        (_.DEBUG_LogToConsole(),
          _(
            `Error when calling RemoveAuthenticatorViaChallengeContinue`,
            _.GetEResult(),
          ),
          this.SetFailureState(_.MoveAuthenticator, _.EResult(_.GetEResult())));
      else {
        _.DEBUG_LogToConsole();
        let _ = _.Body().replacement_token();
        (_(!!_, `Missing replacement token on successful authenticator move`),
          (this.m_replacementAuthenticator = _(_.toObject())),
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
          _(
            `Don't know how to GoBack from login session status ${this.m_eStatus}`,
          );
          return;
      }
    }
    SetFailureState(_, _, _ = ``) {
      ((this.m_eStatus = 15),
        (this.m_eFailureState = _),
        (this.m_strErrorReference = _),
        (this.m_strExtendedErrorMessage = _));
    }
    onAuthComplete = (_) => {
      this.m_eStatus = _.bSuccess ? 14 : 15;
      let _;
      (_.bSuccess
        ? (_(
            !!this.m_strAccountName && !!this.m_steamid,
            `Missing account name or steamid on auth success`,
          ),
          (_ = {
            ..._,
            strAccountName: this.m_strAccountName,
            steamid: this.m_steamid,
          }))
        : (_ = {
            bSuccess: !1,
          }),
        this.m_onLoginComplete && this.m_onLoginComplete(_));
    };
    SetOnLoginComplete(_) {
      this.m_onLoginComplete = _;
    }
  };
(_([_], _.prototype, `Start`, null),
  _([_], _.prototype, `SendSteamGuardCode`, null),
  _([_], _.prototype, `UseCodeOverride`, null),
  _([_], _.prototype, `CantAccessCode`, null),
  _([_], _.prototype, `StartMoveAuthenticator`, null),
  _([_], _.prototype, `ResendMoveCode`, null),
  _([_], _.prototype, `FinishMoveAuthenticator`, null),
  _([_], _.prototype, `FinishMoveRecovery`, null),
  _([_], _.prototype, `GoBack`, null),
  _([_], _.prototype, `SetOnLoginComplete`, null));
async function _(_, _) {
  let _ = _.Init(_);
  (_.Body().set_account_name(_), _.SetEMsg(_));
  try {
    await _.MakeReady();
    let _ = await _.GetPasswordRSAPublicKey(_, _);
    if ((_.DEBUG_LogToConsole(), _.GetEResult() !== 1))
      return (_(`Failed to get RSA key with EResult: ${_.GetEResult()}`), null);
    let {
      publickey_exp: _,
      publickey_mod: _,
      timestamp: _,
    } = _.Body().toObject();
    return !_ || !_ || !_
      ? (_(
          `Missing expected field in RSA Key: ${JSON.stringify({
            publickey_exp: _,
            publickey_mod: _,
            timestamp: _,
          })}`,
        ),
        null)
      : {
          publickey_exp: _,
          publickey_mod: _,
          timestamp: _,
        };
  } catch (_) {
    return (_(`Failed to get RSA key: ${JSON.stringify(_)}`), null);
  }
}
var _ = [4, 3, 2, 1, 0, 5].reduce((_, _, _) => ((_[_] = _), _), {});
function _(_) {
  let _ = _[0] || 0;
  return (_.length > 1 && (_ = _.sort((_, _) => _[_] - _[_])[0]), _);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => new _(_));
  return (
    (0, _.useEffect)(() => {
      _?.SetOnLoginComplete(_.onComplete);
    }, [_, _.onComplete]),
    {
      ...(0, _.useSyncExternalStore)(_.Subscribe, _.GetSnapshot, _.GetSnapshot),
      start: _.Start,
      addCode: _.SendSteamGuardCode,
      useCodeOverride: _.UseCodeOverride,
      cantAccessCode: _.CantAccessCode,
      startMoveAuthenticator: _.StartMoveAuthenticator,
      resendMoveCode: _.ResendMoveCode,
      finishMoveAuthenticator: _.FinishMoveAuthenticator,
      finishMoveRecovery: _.FinishMoveRecovery,
      reset: () => _(new _(_)),
      goBack: _.GoBack,
      setTokenToRevoke: _.SetTokenToRevoke,
    }
  );
}
function _(_) {
  return _ ? 7 : 5;
}
function _(_, _) {
  return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(_) && _.length <= _(_);
}
function _(_, _) {
  return _(_, _) && _.length === _(_);
}
var _ = {
    EResult: (_) => `e${_}`,
    FailedToStart: () => `c-fts`,
    FailedToAddCode: () => `c-ftac`,
    AjaxFailureNoCode: () => `af`,
    AjaxFailureWithCode: (_) => `af-${_}`,
  },
  _ = class extends _ {
    m_eStatusValue = 0;
    get m_eStatus() {
      return this.m_eStatusValue;
    }
    set m_eStatus(_) {
      ((this.m_eStatusValue = _), this.NotifyChanged());
    }
    m_bPreloaded = !1;
    constructor(_) {
      (super(
        _.transport,
        (_) => {
          ((this.m_eStatus = _.bSuccess ? 3 : 4), _.onComplete(_));
        },
        _.onDeviceDetails,
      ),
        _.preloaded &&
          ((this.m_eStatusValue = 2),
          (this.m_strClientID = _.preloaded.strClientID),
          (this.m_strChallengeURL = _.preloaded.strChallengeURL),
          (this.m_msPollInterval = _.preloaded.msPollInterval),
          (this.m_rgRequestID = _.preloaded.rgRequestID),
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
        let _ = _.Init(_);
        _.SetEMsg(_);
        try {
          _.Body().set_device_details(await this.GetDeviceDetails());
        } catch (_) {
          (console.error(`Failed to GetDeviceDetails`), console.log(_));
        }
        let _ = _();
        _ && _.Body().set_website_id(_.WEBSITE_ID);
        let _ = await _.BeginAuthSessionViaQR(this.m_transport, _),
          _ = _.GetEResult(),
          _ = _.Hdr().transport_error();
        if (_ !== 1)
          return (
            console.error(
              `Failed to start auth session. Result: ${_} Transport: ${_}`,
            ),
            (this.m_eFailureState = _.Generic),
            this.m_onCompleteCallback({
              bSuccess: !1,
            }),
            _
          );
        let {
          client_id: _,
          challenge_url: _,
          interval: _,
          request_id: _,
        } = _.Body().toObject();
        return (
          _(_ !== void 0, `Missing poll interval for QR auth session`),
          (this.m_strClientID = _),
          (this.m_strChallengeURL = _),
          (this.m_msPollInterval = _ * 1e3),
          (this.m_rgRequestID = _),
          (this.m_eStatus = 2),
          this.StartPolling(!1),
          _
        );
      } catch (_) {
        return (
          console.error(`Failed to start auth session: ${JSON.stringify(_)}`),
          (this.m_eFailureState = _.Generic),
          this.m_onCompleteCallback({
            bSuccess: !1,
          }),
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
function _(_) {
  let [_, _] = (0, _.useState)(() => new _(_));
  return (
    (0, _.useEffect)(
      () => (
        _.Start(),
        () => {
          _.Stop();
        }
      ),
      [_],
    ),
    {
      ...(0, _.useSyncExternalStore)(_.Subscribe, _.GetSnapshot, _.GetSnapshot),
      reset: () =>
        _(
          new _({
            ..._,
            preloaded: void 0,
          }),
        ),
      setTokenToRevoke: _.SetTokenToRevoke,
    }
  );
}
async function _() {
  let [_, _, _, _] = await Promise.all([
    SteamClient.System.GetOSType(),
    SteamClient.System.GetSystemInfo(),
    SteamClient?.Auth?.GetLocalHostname?.() ?? ``,
    SteamClient?.Auth?.GetMachineID?.() ?? void 0,
  ]);
  return {
    os_type: _,
    device_friendly_name: _,
    machine_id: _,
    platform_type: 1,
    gaming_device_type: _.eGamingDeviceType,
  };
}
async function _() {
  return {
    device_friendly_name: window.navigator.userAgent,
    platform_type: 2,
  };
}
var _ = `Login_RememberMeSetting`;
function _(_) {
  let { onSuccess: _, secureComputer: _ = !0, isProbablySharedPC: _ = !1 } = _,
    _ = (0, _.useCallback)(
      (_) => {
        if (_.bSuccess) {
          let {
            strRefreshToken: _,
            strAccessToken: _,
            strAccountName: _,
            strNewGuardData: _,
          } = _;
          _({
            strRefreshToken: _,
            strAccessToken: _,
            strAccountName: _,
            strNewGuardData: _,
          });
        }
      },
      [_],
    ),
    _ = _({
      transport: _.transport,
      onComplete: _,
      onDeviceDetails: _.onDeviceDetails,
      onGetMachineAuth: _.onGetMachineAuth,
      onShowAgreement: _.onShowAgreement,
    }),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(
      _.refreshInfo?.account_name ?? _.defaultAccountName ?? ``,
    ),
    [_, _] = (0, _.useState)(``),
    [_, _] = (0, _.useState)(_ && !_);
  (0, _.useLayoutEffect)(() => {
    typeof localStorage < `u` && localStorage.getItem(_) == `0` && _(!1);
  }, []);
  let _ = _.eStatus !== 0 && _.eStatus !== 1 && _.eStatus !== 2;
  return (
    (0, _.useEffect)(() => {
      _.refreshInfo?.login_token_id &&
        _.setTokenToRevoke(_.refreshInfo.login_token_id);
    }, [_.refreshInfo, _]),
    {
      password: _,
      onComplete: _,
      eQRStatus: _,
      onQRStatusChange: _,
      strAccountName: _,
      onAccountNameChange: _,
      strPassword: _,
      onPasswordChange: _,
      bRememberMe: _,
      onRememberMeChange: (_) => {
        (_(_), localStorage?.setItem(_, _ ? `1` : `0`));
      },
      onPasswordSubmit: () =>
        !_ || !_ ? Promise.resolve(8) : _.start(_, _, _),
      bInPasswordFlow: _,
      onTryOffline: () => {
        (_(`Logging in offline with username ${_}`),
          SteamClient.User.SetLoginCredentials(_, _, _),
          SteamClient.User.StartOffline(!0));
      },
    }
  );
}
function _(_, _ = ``) {
  let _ = {
    title: ``,
    description: ``,
  };
  switch (_) {
    case _.None:
      return {
        title: ``,
        description: ``,
      };
    case _.Expired:
      _ = {
        title: _.Localize(`#Login_Error_Expired_Title`),
        description: _.Localize(`#Login_Error_Expired_Description`),
      };
      break;
    case _.Network:
      _ = {
        title: _.Localize(`#Login_Error_Network_Title`),
        description: _.Localize(`#Login_Error_Network_Description`),
      };
      break;
    case _.MoveAuthenticator:
      _ = {
        title: _.Localize(`#Error_Generic`),
        description: _.Localize(`#Login_Error_MoveAuthenticator_Description`),
      };
      break;
    case _.RateLimitExceeded:
      _ = {
        title: _.Localize(`#Login_Error_RateLimit_Title`),
        description: _.Localize(`#Login_Error_RateLimit_Description`),
      };
      break;
    case _.AnonymousLogin:
      _ = {
        title: _.Localize(`#Login_Error_Anonymous_Title`),
        description: _.Localize(`#Login_Error_Anonymous_Description`),
      };
      break;
    case _.Generic:
    default:
      _ = {
        title: _.Localize(`#Error_Generic`),
        description: _.Localize(`#Login_Error_Default_Description`),
      };
  }
  return (_ && (_.description = _), _);
}
var _ = `ZhRwp4aSW-8-`,
  _ = `QV15rhpdkBI-`,
  _ = `StondD-Afl4-`,
  _ = `zENCcMUG1lQ-`,
  _ = `_3M1tVbU6uAM-`,
  _ = `rQS7qJ7cGq8-`,
  _ = `WlYK7flUyzk-`,
  _ = `p0lt1P2vwbI-`,
  _ = `Lw5H9Bgq0ww-`,
  _ = `HD-XkY2oIS0-`,
  _ = `t972389vN-Y-`,
  _ = `_5U7-qgmzcvo-`,
  _ = `-HdQ6mrZKtA-`,
  _ = `Tr28R97XrnU-`,
  _ = `_17vA1ePJ-dw-`,
  _ = `hYiUBswjB8E-`,
  _ = `l-m0O8YsKvg-`,
  _ = `WNU0cJCzPqA-`,
  _ = `sljnSz9B7VM-`,
  _ = `KE-CI3fCrt4-`,
  _ = `F2-23fRyFdg-`,
  _ = `_9ehBJOSNpjY-`,
  _ = `H2e67uoFTZo-`,
  _ = `_0O9XQ4NvNgg-`,
  _ = `SJJMt5-Nlqc-`,
  _ = `_5HbDhenxKKA-`,
  _ = `JRre8-r--eY-`,
  _ = `-wYn7tUZ-Qc-`,
  _ = `Y0ZBzWFxTiU-`,
  _ = `_7xRNYgociu0-`,
  _ = `Rq9MD5lNpxw-`,
  _ = `aDxXoSR2-2M-`,
  _ = `A44IVG2oXaA-`,
  _ = `DJzHz8vrR58-`,
  _ = `_6uA-qQnXgqs-`,
  _ = `zS2JKIAoqLs-`,
  _ = `g2m1tomZf5Y-`,
  _ = `DSy9L5eaj5o-`,
  _ = `riI5q82cESo-`,
  _ = `gjs7dr1G9B4-`,
  _ = `_8tHxNur8iVQ-`,
  _ = `QDXFvQ1VRGs-`,
  _ = `iI4-KPYmClQ-`,
  _ = `FCVI1-X5QXI-`,
  _ = `_-7t7WL8ib4U-`,
  _ = `_4cSRMvOczro-`,
  _ = `urTXd9G8cNM-`,
  _ = `tk1GT5on9gQ-`,
  _ = `EUZmbwRThEY-`,
  _ = `koI0X-poWGo-`,
  _ = `ik9s3tnOv3M-`,
  _ = `e5FVer86lmY-`,
  _ = `O8iS-RxIxMc-`,
  _ = `EWu0dHs0CgM-`,
  _ = `G3u-Es6yEe8-`,
  _ = `nr0J1UoEl8s-`,
  _ = `_19NDBszdpt8-`,
  _ = `_4p53BqicMtw-`,
  _ = `LJXTU0Fs0Mc-`,
  _ = `NoRFObwpjo0-`,
  _ = `u95III-ojfU-`,
  _ = `dfnWU-vLcuI-`,
  _ = `-iy7zxvavFA-`,
  _ = `_0wUoYmLYupw-`,
  _ = `V6VD9IECTcA-`,
  _ = `eDuVIFYKU84-`,
  _ = `sH-b0kW7QCY-`,
  _ = `z8NjGLKg3z0-`,
  _ = `_4pLGekYMMsE-`,
  _ = `X1k4Ip6MIC8-`,
  _ = `qeijEUL7oHU-`,
  _ = `SoYZJobaqlk-`,
  _ = `KQdWHvm1kCY-`,
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
    length: _,
    value: _,
    onChange: _,
    onPaste: _,
    tone: _,
    autoFocus: _,
    disabled: _,
    loading: _,
    backupCode: _,
    allowCharacter: _,
  } = _;
  (0, _.useEffect)(() => {
    _ && _();
  }, []);
  let _ = (0, _.useRef)([]),
    _ = () => _(_.current.map((_) => _.value)),
    _ = (_) => {
      let _ = _.target.value;
      if (_ && _ && !_(_)) return;
      let _ = _.target.nextElementSibling;
      (_.target.value && _ && _.focus(), _());
    },
    _ = (_) => {
      _.current.findIndex((_) => !!_.value) === -1
        ? _.current[0]?.select()
        : _.target.select();
    },
    _ = () => {
      let _ = _.current.find((_) => !_.value);
      _ ? _.focus() : _.current[_.current.length - 1].focus();
    },
    _ = (_) => {
      let _ = _.target;
      if (_.key === `Backspace` || _.key === `Delete`) {
        let _ =
          _.key === `Backspace`
            ? _.previousElementSibling
            : _.nextElementSibling;
        _.value === `` &&
          _ &&
          ((_.value = ``), _.focus(), _.preventDefault(), _());
      } else if (
        _.key === `ArrowLeft` ||
        _.key === `ArrowRight` ||
        _.key === `ArrowUp` ||
        _.key === `ArrowDown`
      ) {
        let _ =
          _.key === `ArrowLeft` || _.key === `ArrowUp`
            ? _.previousElementSibling
            : _.nextElementSibling;
        _ && (_.focus(), _.preventDefault());
      }
    },
    _ = (_) => {
      let _ = _.clipboardData.getData(`Text`),
        _ = _.target,
        _ = 0;
      for (; _ && _ < _.length;)
        (_.focus(), (_.value = _.charAt(_)), (_ = _.nextElementSibling), _++);
      (_(), _.preventDefault(), _ && _());
    },
    _ = [];
  for (let _ = 0; _ < _; _++)
    _.push(
      (0, _.jsx)(
        _,
        {
          noFocusRing: !0,
          type: `text`,
          maxLength: 1,
          ref: (_) => {
            _ && (_.current[_] = _);
          },
          onChange: _,
          onFocus: _,
          onClick: (_) => _.stopPropagation(),
          onKeyDown: _,
          onPaste: _,
          value: _[_] ? _[_][0] : ``,
          autoComplete: `none`,
          autoFocus: _ === 0 && _,
          disabled: _ || _,
          className: _,
        },
        _,
      ),
    );
  return (0, _.jsxs)(_, {
    className: (0, _.default)(
      _,
      _ === `danger` && `faQ-XEuPsJg-`,
      _ && `mIAxC7mq9-I-`,
      _ && `eQsO7wBQCBc-`,
    ),
    onClick: _,
    children: [
      _ &&
        (0, _.jsx)(`div`, {
          className: `_4vkP-m3oW-0-`,
          children: (0, _.jsx)(_, {
            size: `small`,
          }),
        }),
      _,
    ],
  });
}
function _() {
  let _ = `svgid_` + (0, _.useId)().replace(/[^A-Za-z0-9_-]/g, ``);
  return [_, `url(#${_})`];
}
function _(_) {
  let [_, _] = _();
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 23`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`g`, {
        clipPath: _,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M6.9955 11.5L15 3.4955L11.5045 -1.52793e-07L0.00450275 11.5L11.5045 23L15 19.5045L6.9955 11.5Z`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`rect`, {
            fill: `currentColor`,
            width: `15`,
            height: `23`,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { color: _ = `#fff`, ..._ } = _;
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `SVGIcon_Button SVGIcon_Check`,
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    strokeWidth: `24`,
    stroke: _,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    strokeMiterlimit: `10`,
    ..._,
    children: (0, _.jsx)(`polyline`, {
      fill: `none`,
      points: `49.5,147.75 95,210.75 206.5,45.25 `,
    }),
  });
}
var _ = new URL(
    `../../../images/applications/community/login_mobile_auth.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  _ = _((_, _) => {
    _.exports = {
      MODE_NUMBER: 1,
      MODE_ALPHA_NUM: 2,
      MODE_8BIT_BYTE: 4,
      MODE_KANJI: 8,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_) {
      ((this.mode = _.MODE_8BIT_BYTE), (this.data = _));
    }
    ((_.prototype = {
      getLength: function (_) {
        return this.data.length;
      },
      write: function (_) {
        for (var _ = 0; _ < this.data.length; _++)
          _.put(this.data.charCodeAt(_), 8);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    _.exports = {
      _: 1,
      _: 0,
      _: 3,
      _: 2,
    };
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _) {
      ((this.totalCount = _), (this.dataCount = _));
    }
    ((_.RS_BLOCK_TABLE = [
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
      (_.getRSBlocks = function (_, _) {
        var _ = _.getRsBlockTable(_, _);
        if (_ == null)
          throw Error(
            `bad rs block @ typeNumber:` + _ + `/errorCorrectLevel:` + _,
          );
        for (var _ = _.length / 3, _ = [], _ = 0; _ < _; _++)
          for (
            var _ = _[_ * 3 + 0], _ = _[_ * 3 + 1], _ = _[_ * 3 + 2], _ = 0;
            _ < _;
            _++
          )
            _.push(new _(_, _));
        return _;
      }),
      (_.getRsBlockTable = function (_, _) {
        switch (_) {
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 0];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 1];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 2];
          case _._:
            return _.RS_BLOCK_TABLE[(_ - 1) * 4 + 3];
          default:
            return;
        }
      }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    function _() {
      ((this.buffer = []), (this.length = 0));
    }
    ((_.prototype = {
      get: function (_) {
        var _ = Math.floor(_ / 8);
        return ((this.buffer[_] >>> (7 - (_ % 8))) & 1) == 1;
      },
      put: function (_, _) {
        for (var _ = 0; _ < _; _++) this.putBit(((_ >>> (_ - _ - 1)) & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (_) {
        var _ = Math.floor(this.length / 8);
        (this.buffer.length <= _ && this.buffer.push(0),
          _ && (this.buffer[_] |= 128 >>> (this.length % 8)),
          this.length++);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    for (
      var _ = {
          glog: function (_) {
            if (_ < 1) throw Error(`glog(` + _ + `)`);
            return _.LOG_TABLE[_];
          },
          gexp: function (_) {
            for (; _ < 0;) _ += 255;
            for (; _ >= 256;) _ -= 255;
            return _.EXP_TABLE[_];
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256),
        },
        _ = 0;
      _ < 8;
      _++
    )
      _.EXP_TABLE[_] = 1 << _;
    for (var _ = 8; _ < 256; _++)
      _.EXP_TABLE[_] =
        _.EXP_TABLE[_ - 4] ^
        _.EXP_TABLE[_ - 5] ^
        _.EXP_TABLE[_ - 6] ^
        _.EXP_TABLE[_ - 8];
    for (var _ = 0; _ < 255; _++) _.LOG_TABLE[_.EXP_TABLE[_]] = _;
    _.exports = _;
  }),
  _ = _((_, _) => {
    var _ = _();
    function _(_, _) {
      if (_.length == null) throw Error(_.length + `/` + _);
      for (var _ = 0; _ < _.length && _[_] == 0;) _++;
      this.num = Array(_.length - _ + _);
      for (var _ = 0; _ < _.length - _; _++) this.num[_] = _[_ + _];
    }
    ((_.prototype = {
      get: function (_) {
        return this.num[_];
      },
      getLength: function () {
        return this.num.length;
      },
      multiply: function (_) {
        for (
          var _ = Array(this.getLength() + _.getLength() - 1), _ = 0;
          _ < this.getLength();
          _++
        )
          for (var _ = 0; _ < _.getLength(); _++)
            _[_ + _] ^= _.gexp(_.glog(this.get(_)) + _.glog(_.get(_)));
        return new _(_, 0);
      },
      mod: function (_) {
        if (this.getLength() - _.getLength() < 0) return this;
        for (
          var _ = _.glog(this.get(0)) - _.glog(_.get(0)),
            _ = Array(this.getLength()),
            _ = 0;
          _ < this.getLength();
          _++
        )
          _[_] = this.get(_);
        for (var _ = 0; _ < _.getLength(); _++)
          _[_] ^= _.gexp(_.glog(_.get(_)) + _);
        return new _(_, 0).mod(_);
      },
    }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      },
      _ = {
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
        getBCHTypeInfo: function (_) {
          for (var _ = _ << 10; _.getBCHDigit(_) - _.getBCHDigit(_.G15) >= 0;)
            _ ^= _.G15 << (_.getBCHDigit(_) - _.getBCHDigit(_.G15));
          return ((_ << 10) | _) ^ _.G15_MASK;
        },
        getBCHTypeNumber: function (_) {
          for (var _ = _ << 12; _.getBCHDigit(_) - _.getBCHDigit(_.G18) >= 0;)
            _ ^= _.G18 << (_.getBCHDigit(_) - _.getBCHDigit(_.G18));
          return (_ << 12) | _;
        },
        getBCHDigit: function (_) {
          for (var _ = 0; _ != 0;) (_++, (_ >>>= 1));
          return _;
        },
        getPatternPosition: function (_) {
          return _.PATTERN_POSITION_TABLE[_ - 1];
        },
        getMask: function (_, _, _) {
          switch (_) {
            case _.PATTERN000:
              return (_ + _) % 2 == 0;
            case _.PATTERN001:
              return _ % 2 == 0;
            case _.PATTERN010:
              return _ % 3 == 0;
            case _.PATTERN011:
              return (_ + _) % 3 == 0;
            case _.PATTERN100:
              return (Math.floor(_ / 2) + Math.floor(_ / 3)) % 2 == 0;
            case _.PATTERN101:
              return ((_ * _) % 2) + ((_ * _) % 3) == 0;
            case _.PATTERN110:
              return (((_ * _) % 2) + ((_ * _) % 3)) % 2 == 0;
            case _.PATTERN111:
              return (((_ * _) % 3) + ((_ + _) % 2)) % 2 == 0;
            default:
              throw Error(`bad maskPattern:` + _);
          }
        },
        getErrorCorrectPolynomial: function (_) {
          for (var _ = new _([1], 0), _ = 0; _ < _; _++)
            _ = _.multiply(new _([1, _.gexp(_)], 0));
          return _;
        },
        getLengthInBits: function (_, _) {
          if (1 <= _ && _ < 10)
            switch (_) {
              case _.MODE_NUMBER:
                return 10;
              case _.MODE_ALPHA_NUM:
                return 9;
              case _.MODE_8BIT_BYTE:
                return 8;
              case _.MODE_KANJI:
                return 8;
              default:
                throw Error(`mode:` + _);
            }
          else if (_ < 27)
            switch (_) {
              case _.MODE_NUMBER:
                return 12;
              case _.MODE_ALPHA_NUM:
                return 11;
              case _.MODE_8BIT_BYTE:
                return 16;
              case _.MODE_KANJI:
                return 10;
              default:
                throw Error(`mode:` + _);
            }
          else if (_ < 41)
            switch (_) {
              case _.MODE_NUMBER:
                return 14;
              case _.MODE_ALPHA_NUM:
                return 13;
              case _.MODE_8BIT_BYTE:
                return 16;
              case _.MODE_KANJI:
                return 12;
              default:
                throw Error(`mode:` + _);
            }
          else throw Error(`type:` + _);
        },
        getLostPoint: function (_) {
          for (var _ = _.getModuleCount(), _ = 0, _ = 0; _ < _; _++)
            for (var _ = 0; _ < _; _++) {
              for (var _ = 0, _ = _.isDark(_, _), _ = -1; _ <= 1; _++)
                if (!(_ + _ < 0 || _ <= _ + _))
                  for (var _ = -1; _ <= 1; _++)
                    _ + _ < 0 ||
                      _ <= _ + _ ||
                      ((_ != 0 || _ != 0) &&
                        _ == _.isDark(_ + _, _ + _) &&
                        _++);
              _ > 5 && (_ += 3 + _ - 5);
            }
          for (var _ = 0; _ < _ - 1; _++)
            for (var _ = 0; _ < _ - 1; _++) {
              var _ = 0;
              (_.isDark(_, _) && _++,
                _.isDark(_ + 1, _) && _++,
                _.isDark(_, _ + 1) && _++,
                _.isDark(_ + 1, _ + 1) && _++,
                (_ == 0 || _ == 4) && (_ += 3));
            }
          for (var _ = 0; _ < _; _++)
            for (var _ = 0; _ < _ - 6; _++)
              _.isDark(_, _) &&
                !_.isDark(_, _ + 1) &&
                _.isDark(_, _ + 2) &&
                _.isDark(_, _ + 3) &&
                _.isDark(_, _ + 4) &&
                !_.isDark(_, _ + 5) &&
                _.isDark(_, _ + 6) &&
                (_ += 40);
          for (var _ = 0; _ < _; _++)
            for (var _ = 0; _ < _ - 6; _++)
              _.isDark(_, _) &&
                !_.isDark(_ + 1, _) &&
                _.isDark(_ + 2, _) &&
                _.isDark(_ + 3, _) &&
                _.isDark(_ + 4, _) &&
                !_.isDark(_ + 5, _) &&
                _.isDark(_ + 6, _) &&
                (_ += 40);
          for (var _ = 0, _ = 0; _ < _; _++)
            for (var _ = 0; _ < _; _++) _.isDark(_, _) && _++;
          var _ = Math.abs((100 * _) / _ / _ - 50) / 5;
          return ((_ += _ * 10), _);
        },
      };
    _.exports = _;
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _();
    function _(_, _) {
      ((this.typeNumber = _),
        (this.errorCorrectLevel = _),
        (this.modules = null),
        (this.moduleCount = 0),
        (this.dataCache = null),
        (this.dataList = []));
    }
    var _ = _.prototype;
    ((_.addData = function (_) {
      var _ = new _(_);
      (this.dataList.push(_), (this.dataCache = null));
    }),
      (_.isDark = function (_, _) {
        if (_ < 0 || this.moduleCount <= _ || _ < 0 || this.moduleCount <= _)
          throw Error(_ + `,` + _);
        return this.modules[_][_];
      }),
      (_.getModuleCount = function () {
        return this.moduleCount;
      }),
      (_.make = function () {
        if (this.typeNumber < 1) {
          var _ = 1;
          for (_ = 1; _ < 40; _++) {
            for (
              var _ = _.getRSBlocks(_, this.errorCorrectLevel),
                _ = new _(),
                _ = 0,
                _ = 0;
              _ < _.length;
              _++
            )
              _ += _[_].dataCount;
            for (var _ = 0; _ < this.dataList.length; _++) {
              var _ = this.dataList[_];
              (_.put(_.mode, 4),
                _.put(_.getLength(), _.getLengthInBits(_.mode, _)),
                _.write(_));
            }
            if (_.getLengthInBits() <= _ * 8) break;
          }
          this.typeNumber = _;
        }
        this.makeImpl(!1, this.getBestMaskPattern());
      }),
      (_.makeImpl = function (_, _) {
        ((this.moduleCount = this.typeNumber * 4 + 17),
          (this.modules = Array(this.moduleCount)));
        for (var _ = 0; _ < this.moduleCount; _++) {
          this.modules[_] = Array(this.moduleCount);
          for (var _ = 0; _ < this.moduleCount; _++) this.modules[_][_] = null;
        }
        (this.setupPositionProbePattern(0, 0),
          this.setupPositionProbePattern(this.moduleCount - 7, 0),
          this.setupPositionProbePattern(0, this.moduleCount - 7),
          this.setupPositionAdjustPattern(),
          this.setupTimingPattern(),
          this.setupTypeInfo(_, _),
          this.typeNumber >= 7 && this.setupTypeNumber(_),
          (this.dataCache ??= _.createData(
            this.typeNumber,
            this.errorCorrectLevel,
            this.dataList,
          )),
          this.mapData(this.dataCache, _));
      }),
      (_.setupPositionProbePattern = function (_, _) {
        for (var _ = -1; _ <= 7; _++)
          if (!(_ + _ <= -1 || this.moduleCount <= _ + _))
            for (var _ = -1; _ <= 7; _++)
              _ + _ <= -1 ||
                this.moduleCount <= _ + _ ||
                ((0 <= _ && _ <= 6 && (_ == 0 || _ == 6)) ||
                (0 <= _ && _ <= 6 && (_ == 0 || _ == 6)) ||
                (2 <= _ && _ <= 4 && 2 <= _ && _ <= 4)
                  ? (this.modules[_ + _][_ + _] = !0)
                  : (this.modules[_ + _][_ + _] = !1));
      }),
      (_.getBestMaskPattern = function () {
        for (var _ = 0, _ = 0, _ = 0; _ < 8; _++) {
          this.makeImpl(!0, _);
          var _ = _.getLostPoint(this);
          (_ == 0 || _ > _) && ((_ = _), (_ = _));
        }
        return _;
      }),
      (_.createMovieClip = function (_, _, _) {
        var _ = _.createEmptyMovieClip(_, _),
          _ = 1;
        this.make();
        for (var _ = 0; _ < this.modules.length; _++)
          for (var _ = _ * _, _ = 0; _ < this.modules[_].length; _++) {
            var _ = _ * _;
            this.modules[_][_] &&
              (_.beginFill(0, 100),
              _.moveTo(_, _),
              _.lineTo(_ + _, _),
              _.lineTo(_ + _, _ + _),
              _.lineTo(_, _ + _),
              _.endFill());
          }
        return _;
      }),
      (_.setupTimingPattern = function () {
        for (var _ = 8; _ < this.moduleCount - 8; _++)
          this.modules[_][6] ?? (this.modules[_][6] = _ % 2 == 0);
        for (var _ = 8; _ < this.moduleCount - 8; _++)
          this.modules[6][_] ?? (this.modules[6][_] = _ % 2 == 0);
      }),
      (_.setupPositionAdjustPattern = function () {
        for (
          var _ = _.getPatternPosition(this.typeNumber), _ = 0;
          _ < _.length;
          _++
        )
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_],
              _ = _[_];
            if (this.modules[_][_] == null)
              for (var _ = -2; _ <= 2; _++)
                for (var _ = -2; _ <= 2; _++)
                  _ == -2 || _ == 2 || _ == -2 || _ == 2 || (_ == 0 && _ == 0)
                    ? (this.modules[_ + _][_ + _] = !0)
                    : (this.modules[_ + _][_ + _] = !1);
          }
      }),
      (_.setupTypeNumber = function (_) {
        for (var _ = _.getBCHTypeNumber(this.typeNumber), _ = 0; _ < 18; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          this.modules[Math.floor(_ / 3)][(_ % 3) + this.moduleCount - 8 - 3] =
            _;
        }
        for (var _ = 0; _ < 18; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          this.modules[(_ % 3) + this.moduleCount - 8 - 3][Math.floor(_ / 3)] =
            _;
        }
      }),
      (_.setupTypeInfo = function (_, _) {
        for (
          var _ = (this.errorCorrectLevel << 3) | _,
            _ = _.getBCHTypeInfo(_),
            _ = 0;
          _ < 15;
          _++
        ) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          _ < 6
            ? (this.modules[_][8] = _)
            : _ < 8
              ? (this.modules[_ + 1][8] = _)
              : (this.modules[this.moduleCount - 15 + _][8] = _);
        }
        for (var _ = 0; _ < 15; _++) {
          var _ = !_ && ((_ >> _) & 1) == 1;
          _ < 8
            ? (this.modules[8][this.moduleCount - _ - 1] = _)
            : _ < 9
              ? (this.modules[8][15 - _ - 1 + 1] = _)
              : (this.modules[8][15 - _ - 1] = _);
        }
        this.modules[this.moduleCount - 8][8] = !_;
      }),
      (_.mapData = function (_, _) {
        for (
          var _ = -1,
            _ = this.moduleCount - 1,
            _ = 7,
            _ = 0,
            _ = this.moduleCount - 1;
          _ > 0;
          _ -= 2
        )
          for (_ == 6 && _--; ;) {
            for (var _ = 0; _ < 2; _++)
              if (this.modules[_][_ - _] == null) {
                var _ = !1;
                (_ < _.length && (_ = ((_[_] >>> _) & 1) == 1),
                  _.getMask(_, _, _ - _) && (_ = !_),
                  (this.modules[_][_ - _] = _),
                  _--,
                  _ == -1 && (_++, (_ = 7)));
              }
            if (((_ += _), _ < 0 || this.moduleCount <= _)) {
              ((_ -= _), (_ = -_));
              break;
            }
          }
      }),
      (_.PAD0 = 236),
      (_.PAD1 = 17),
      (_.createData = function (_, _, _) {
        for (
          var _ = _.getRSBlocks(_, _), _ = new _(), _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          (_.put(_.mode, 4),
            _.put(_.getLength(), _.getLengthInBits(_.mode, _)),
            _.write(_));
        }
        for (var _ = 0, _ = 0; _ < _.length; _++) _ += _[_].dataCount;
        if (_.getLengthInBits() > _ * 8)
          throw Error(
            `code length overflow. (` + _.getLengthInBits() + `>` + _ * 8 + `)`,
          );
        for (
          _.getLengthInBits() + 4 <= _ * 8 && _.put(0, 4);
          _.getLengthInBits() % 8 != 0;
        )
          _.putBit(!1);
        for (
          ;
          !(
            _.getLengthInBits() >= _ * 8 ||
            (_.put(_.PAD0, 8), _.getLengthInBits() >= _ * 8)
          );
        )
          _.put(_.PAD1, 8);
        return _.createBytes(_, _);
      }),
      (_.createBytes = function (_, _) {
        for (
          var _ = 0,
            _ = 0,
            _ = 0,
            _ = Array(_.length),
            _ = Array(_.length),
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_].dataCount,
            _ = _[_].totalCount - _;
          ((_ = Math.max(_, _)), (_ = Math.max(_, _)), (_[_] = Array(_)));
          for (var _ = 0; _ < _[_].length; _++) _[_][_] = 255 & _.buffer[_ + _];
          _ += _;
          var _ = _.getErrorCorrectPolynomial(_),
            _ = new _(_[_], _.getLength() - 1).mod(_);
          _[_] = Array(_.getLength() - 1);
          for (var _ = 0; _ < _[_].length; _++) {
            var _ = _ + _.getLength() - _[_].length;
            _[_][_] = _ >= 0 ? _.get(_) : 0;
          }
        }
        for (var _ = 0, _ = 0; _ < _.length; _++) _ += _[_].totalCount;
        for (var _ = Array(_), _ = 0, _ = 0; _ < _; _++)
          for (var _ = 0; _ < _.length; _++)
            _ < _[_].length && (_[_++] = _[_][_]);
        for (var _ = 0; _ < _; _++)
          for (var _ = 0; _ < _.length; _++)
            _ < _[_].length && (_[_++] = _[_][_]);
        return _;
      }),
      (_.exports = _));
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = _(),
      _ = function (_, _) {
        _ ||= {};
        var _ = new _(_.typeNumber || -1, _.errorCorrectLevel || _._);
        return (_.addData(_), _.make(), _);
      };
    ((_.ErrorCorrectLevel = _), (_.exports = _));
  }),
  _ = `RuVnOcF9yRI-`,
  _ = `QhysrBJX1dU-`,
  _ = _(_(), 1),
  _ = (function (_) {
    return (
      (_[(_._ = 1)] = `L`),
      (_[(_._ = 0)] = `M`),
      (_[(_._ = 3)] = `Q`),
      (_[(_._ = 2)] = `H`),
      _
    );
  })({});
function _(_, _, _) {
  let _ = _.length,
    _ = _[0].length,
    _ = (_ + 2) * _,
    _ = new Uint8Array(40 + _),
    _ = 0;
  ((_[_++] = 71),
    (_[_++] = 73),
    (_[_++] = 70),
    (_[_++] = 56),
    (_[_++] = 57),
    (_[_++] = 97),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    _(
      _ != `transparent` || _ != `transparent`,
      `Trying to use transparent for both colors in QR`,
    ),
    (_[_++] = 161),
    (_[_++] = 0),
    (_[_++] = 0),
    _ == `transparent`
      ? ((_[_++] = 0), (_[_++] = 0), (_[_++] = 0))
      : ((_[_++] = _[0]), (_[_++] = _[1]), (_[_++] = _[2])),
    _ == `transparent`
      ? ((_[_++] = 0), (_[_++] = 0), (_[_++] = 0))
      : ((_[_++] = _[0]), (_[_++] = _[1]), (_[_++] = _[2])),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_[_++] = 255),
    (_ == `transparent` || _ == `transparent`) &&
      ((_[_++] = 33),
      (_[_++] = 249),
      (_[_++] = 4),
      (_[_++] = 1),
      (_[_++] = 0),
      (_[_++] = 0),
      (_[_++] = _ == `transparent` ? 0 : 1),
      (_[_++] = 0)),
    (_[_++] = 44),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = _),
    (_[_++] = 0),
    (_[_++] = 0),
    (_[_++] = 7));
  for (let _ = 0; _ < _.length; _++) {
    ((_[_++] = _ + 1), (_[_++] = 128));
    for (let _ = 0; _ < _.length; _++) _[_++] = +!_[_][_];
  }
  return ((_[_++] = 1), (_[_++] = 129), (_[_++] = 0), (_[_++] = 59), _);
}
function _(
  _,
  {
    activeBitColor: _ = [33, 35, 40],
    inactiveBitColor: _ = [255, 255, 255],
    borderWidth: _ = 3,
  } = {},
  _ = {},
) {
  let _ = (0, _.default)(_, _).modules;
  if (!_) return null;
  let _ = [];
  for (let _ = 0; _ < _; _++) _.push(Array(_.length + _ * 2).fill(!1));
  for (let _ = 0; _ < _.length; _++)
    _.push([
      ...Array.from(
        {
          length: _,
        },
        () => !1,
      ),
      ..._[_],
      ...Array.from(
        {
          length: _,
        },
        () => !1,
      ),
    ]);
  for (let _ = 0; _ < _; _++) _.push(Array(_.length + _ * 2).fill(!1));
  return _(_, _, _);
}
function _(_) {
  let {
      quality: _ = 0,
      children: _,
      className: _,
      activeBitColor: _ = [33, 35, 40],
      inactiveBitColor: _ = [255, 255, 255],
      borderWidth: _ = 3,
      typeNumber: _ = 6,
    } = _,
    _ = _(_, {
      typeNumber: _,
      errorCorrectLevel: _,
      activeBitColor: _,
      inactiveBitColor: _,
      borderWidth: _,
    });
  if (!_) return null;
  let _ = `rgb(${_[0]}, ${_[1]}, ${_[2]})`;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    style: {
      "--qr-bright-color": _,
    },
    children: (0, _.jsx)(`img`, {
      className: _,
      src: _,
      alt: ``,
    }),
  });
}
function _(_, _) {
  let {
    typeNumber: _,
    errorCorrectLevel: _,
    activeBitColor: _,
    inactiveBitColor: _,
    borderWidth: _,
  } = _;
  return (0, _.useMemo)(() => {
    let _ = _(
      _,
      {
        activeBitColor: _,
        inactiveBitColor: _,
        borderWidth: _,
      },
      {
        typeNumber: _,
        errorCorrectLevel: _,
      },
    );
    return _ ? `data:image/gif;base64,${(0, _.fromByteArray)(_)}` : null;
  }, [_, _, _, _, _, _]);
}
var _ = `WrkY9vjgO-o-`,
  _ = `S5cukRF3668-`,
  _ = `_-8GxbX7BdEU-`;
function _(_) {
  let {
      transport: _,
      onComplete: _,
      onStatusChange: _,
      platform: _,
      styling: _ = `default`,
      activeBitValue: _ = 255,
      preloadedSession: _,
    } = _,
    {
      eStatus: _,
      strChallengeURL: _,
      strClientID: _,
      bHadRemoteInteraction: _,
      reset: _,
      setTokenToRevoke: _,
    } = _({
      transport: _,
      onComplete: _,
      onDeviceDetails: _.IN_STEAMUI ? _ : _,
      preloaded: _,
    });
  (0, _.useEffect)(() => _ && _(_), [_, _]);
  let _ = _ === 2 && _ ? _ : _.STORE_BASE_URL,
    _ = _ === 0 || _ === 1 || _,
    _ = _ === 4,
    _ = _ === 3,
    _ = _
      ? (0, _.jsx)(_, {})
      : _
        ? (0, _.jsx)(_, {
            reset: _,
          })
        : _
          ? (0, _.jsx)(_, {
              size: `small`,
            })
          : null,
    _ = _ || _ || _;
  (0, _.useEffect)(() => {
    _.refreshInfo?.login_token_id && _(_.refreshInfo.login_token_id);
  }, [_.refreshInfo, _]);
  let _ = _.EUNIVERSE !== 1,
    _ = `rgb(${_}, ${_}, ${_})`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      style: {
        position: `relative`,
      },
      children: [
        (0, _.jsx)(_, {
          borderWidth: 0,
          activeBitColor: [21, 23, 28],
          inactiveBitColor: _ ? [_, 0, _] : [_, _, _],
          quality: _(_),
          className: (0, _.default)(
            _,
            _ == `deck` && `LfwdeqflbQQ-`,
            _ == `vr` && `DlrZAVV1kSM-`,
            _ && `AME4jRbjhDs-`,
            _ && `FFV7o6c8MVE-`,
          ),
          children: _,
        }),
        _ &&
          (0, _.jsx)(`div`, {
            className: `rAodxgQ4uTs-`,
            children: (0, _.jsx)(`div`, {
              className: `TxzArhnTYjU-`,
              style: {
                "--qr-bright-color": _,
              },
              children: _,
            }),
          }),
      ],
    }),
  });
}
function _(_) {
  return _.length <= 90 ? _._ : void 0;
}
function _(_) {
  let { size: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(
      _,
      _ == `small` && `UmXCdAcOnc0-`,
      (_ == `medium` || !_) && `dkcbyneVVOc-`,
      _ == `large` && `y6M90bbs5Os-`,
    ),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    color: `dull`,
    variant: `ghost`,
    onClick: _.reset,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    version: `1.1`,
    _: `Layer_2`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: {
      width: `40px`,
      height: `40px`,
      cursor: `pointer`,
    },
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: [
      (0, _.jsx)(`path`, {
        fill: `none`,
        stroke: `#fff`,
        strokeWidth: `30`,
        strokeLinecap: `round`,
        strokeMiterlimit: `10`,
        _: `M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895`,
      }),
      (0, _.jsx)(`polygon`, {
        points: `147.639,108.361 245.755,10.166 245.834,108.361`,
        fill: `#fff`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    version: `1.1`,
    _: `base`,
    xmlns: `http://www.w3.org/2000/svg`,
    style: {
      width: `45px`,
      height: `45px`,
    },
    _: `0px`,
    _: `0px`,
    width: `256px`,
    height: `256px`,
    viewBox: `0 0 256 256`,
    children: (0, _.jsx)(`polyline`, {
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
var _ = (0, _.createContext)(!1),
  _ = () => (0, _.useContext)(_);
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      reset: () => window.location.reload(),
      failure: _.Generic,
    }),
  });
}
function _(_) {
  _(_.redirectUrl);
  let _ = (_) => {
    let { strRefreshToken: _ } = _;
    _(_).then(
      (_) => _.onComplete(_),
      () => _.onComplete(_.k_PrimaryDomainFail),
    );
  };
  return (0, _.jsx)(_, {
    ..._,
    creationRedirectUrl: _.redirectUrl,
    onSuccess: _,
    embedded: _.theme === `modal`,
  });
}
function _(_) {
  let { embedded: _, children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _ ?? !1,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            ..._,
          }),
          _,
        ],
      }),
    }),
  });
}
function _(_) {
  if (_()) return null;
  let { variant: _ } = _;
  return typeof _ == `function`
    ? (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize(`#Login_Help_SignIn`),
      })
    : (0, _.jsx)(_, {
        href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
        children: _.Localize(`#Login_Help_SignIn`),
      });
}
function _(_) {
  let { variant: _, redirectUrl: _ } = _;
  if (typeof _ == `function`)
    return (0, _.jsx)(_, {
      inline: !0,
      onClick: _,
      children: _.Localize(`#Login_CreateAccount`),
    });
  {
    let _ = _ ? `?redir=${encodeURIComponent(_)}` : ``;
    switch (_ ?? `normal`) {
      default:
      case `normal`:
        return (0, _.jsx)(_, {
          inline: !0,
          href: `${_.STORE_BASE_URL}join/${_}`,
          children: _.Localize(`#Login_CreateAccount`),
        });
      case `partner`:
        return (0, _.jsx)(_, {
          inline: !0,
          href: `${_.PARTNER_BASE_URL}${_}`,
          children: _.Localize(`#Login_CreateSteamworksAccount`),
        });
      case `none`:
        return null;
    }
  }
}
function _(_) {
  let { launcherType: _, variant: _, redirectUrl: _ } = _;
  if (_ === 8 || _ == `none`) return null;
  let _ = _ !== void 0,
    _;
  switch (_ ?? `normal`) {
    default:
    case `normal`:
      _ = `#Login_NoSteamAccount`;
      break;
    case `partner`:
      _ = `#Login_NoSteamworksAccount`;
  }
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: _.Localize(_),
      }),
      (0, _.jsx)(_, {
        variant: _,
        redirectUrl: _,
      }),
    ],
  });
}
function _() {
  let _ =
    window?.location &&
    new URLSearchParams(window.location.search).getAll(`need_password`).pop();
  return _ !== void 0 && _ !== `false` && _ !== `0`;
}
function _(_) {
  let {
      transport: _,
      onSuccess: _,
      platform: _,
      autoFocus: _,
      refreshInfo: _,
      renderSuccess: _ = () => (0, _.jsx)(_, {}),
      lastResult: _,
      joinLinkVariant: _,
      defaultAccountName: _,
      secureComputer: _ = !0,
      isProbablySharedPC: _ = !1,
      onShowAgreement: _,
      creationRedirectUrl: _,
      preloadedQRSession: _,
    } = _,
    _ = _.IN_STEAMUI ? _ : _,
    _ = _.IN_STEAMUI ? (_) => SteamClient.Auth.GetSteamGuardData(_) : null,
    _ = _(),
    _ = _({
      transport: _,
      platform: _,
      onSuccess: _,
      refreshInfo: _,
      onDeviceDetails: _,
      onGetMachineAuth: _,
      defaultAccountName: _,
      secureComputer: _,
      isProbablySharedPC: _,
      onShowAgreement: _,
    }),
    _ = _(),
    _ = (0, _.useId)();
  if (_ != null && _ != 1)
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        reset: () => window.location.reload(),
        failure: _.Generic,
        errorReference: _.toString(),
        extendedErrorMessage: _.password.strExtendedErrorMessage,
      }),
    });
  let _ = _.EREALM !== _.k_ESteamRealmChina;
  if (!_.bInPasswordFlow) {
    let _ = (0, _.jsxs)(`div`, {
      className: (0, _.default)(_, _ && `rvRWTXNBcK4-`),
      children: [
        (0, _.jsx)(_, {
          strAccountName: _.strAccountName,
          onAccountNameChange: _.onAccountNameChange,
          strPassword: _.strPassword,
          onPasswordChange: _.onPasswordChange,
          bRememberMe: _.bRememberMe,
          onRememberMeChange: _.onRememberMeChange,
          onSubmit: _.onPasswordSubmit,
          status: _.password.eStatus,
          autoFocus: _,
          secureComputer: _,
          refreshInfo: _.refreshInfo,
        }),
        _ &&
          (0, _.jsx)(_, {
            transport: _,
            onQRStatusChange: _.onQRStatusChange,
            onComplete: _.onComplete,
            platform: _,
            refreshInfo: _,
            preloadedQRSession: _,
          }),
      ],
    });
    if (_) {
      let _ = _.IN_STEAMUI,
        _ = _()?.LAUNCHER_TYPE;
      return (0, _.jsxs)(_, {
        className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
        children: [
          !_ && !1,
          !_.refreshInfo &&
            (0, _.jsx)(_, {
              realm: _.EREALM,
              launcherType: _,
              className: `_19NDBszdpt8-`,
              onBack: _.onBack,
            }),
          (0, _.jsx)(_, {
            refreshInfo: _,
          }),
          _,
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(_, _ && `Kv7QdVcb2UI-`),
            children: [
              (0, _.jsx)(_, {
                variant: _.helpLinkVariant,
              }),
              (0, _.jsx)(_, {
                launcherType: _,
                variant: _,
                redirectUrl: _,
              }),
            ],
          }),
        ],
      });
    }
    let _ = (0, _.jsxs)(`div`, {
      style: {
        display: `flex`,
        flexDirection: `column`,
        gap: `8px`,
        margin: `8px 16px`,
      },
      children: [
        !1,
        (0, _.jsx)(`h2`, {
          className: _,
          _: _,
          children: _.refreshInfo
            ? _.Localize(`#Login_RefreshSignIn`)
            : _.Localize(`#Login_SignInTitle`),
        }),
        (0, _.jsx)(_, {
          refreshInfo: _.refreshInfo,
        }),
      ],
    });
    return (0, _.jsxs)(_, {
      title: _,
      titleId: _,
      children: [_ && (0, _.jsx)(_, {}), _],
    });
  }
  let _ = _.password.eStatus;
  switch (_) {
    case 13:
      return _.renderLoading
        ? (0, _.jsx)(_.Fragment, {
            children: _.renderLoading(),
          })
        : (0, _.jsx)(_, {});
    case 5:
    case 11:
    case 3:
    case 10:
      return (
        _(
          !!_.password.strAccountName,
          `Missing account name in login session for status`,
          _,
        ),
        (0, _.jsx)(_, {
          type: _ === 5 || _ === 11 ? `mobile` : `email`,
          onSubmitCode: _.password.addCode,
          status: _,
          associatedLabel: _.password.strConfirmationAssociatedMessage,
          accountName: _.password.strAccountName,
          onBack: _.password.goBack,
          onCodeHelp: _.onCodeHelp,
        })
      );
    case 6:
    case 4:
      return (
        _(
          !!_.password.strAccountName,
          `Missing account name in login session for status`,
          _,
        ),
        (0, _.jsx)(_, {
          type: _ === 6 ? `mobile` : `email`,
          accountName: _.password.strAccountName,
          onUseCodeOverride: _.password.useCodeOverride,
          onCodeHelp: _.onCodeHelp,
        })
      );
    case 16:
      return (0, _.jsx)(_, {
        reset: _.password.reset,
      });
    case 15:
      return (0, _.jsx)(_, {
        reset: _.password.reset,
        failure: _.password.eFailureState,
        onRequestOffline: _.onTryOffline,
        errorReference: _.password.strErrorReference,
        extendedErrorMessage: _.password.strExtendedErrorMessage,
      });
    case 14:
      return (0, _.jsx)(_, {
        compact: !0,
        children: _(),
      });
    default:
      return (
        _(`Unknown Phase: ${_}`),
        (0, _.jsx)(_, {
          reset: _.password.reset,
          failure: _.Generic,
          onRequestOffline: _.onTryOffline,
          errorReference: _.password.strErrorReference,
          extendedErrorMessage: _.password.strExtendedErrorMessage,
        })
      );
  }
}
function _(_) {
  if (!_.refreshInfo) return null;
  let _;
  switch (_.refreshInfo?.reason ?? 2) {
    case 2:
    case 7:
    default:
      _ = `#Login_RefreshReason_Generic`;
      break;
    case 6:
      _ = `#Login_RefreshReason_LoggedInElsewhere`;
      break;
    case 34:
      _ = `#Login_RefreshReason_LogonSessionReplaced`;
      break;
    case 5:
      _ = `#Login_RefreshReason_InvalidPassword`;
      break;
    case 26:
      _ = `#Login_RefreshReason_Revoked`;
      break;
    case 27:
      _ = `#Login_RefreshReason_Expired`;
      break;
    case 49:
      _ = `#Login_RefreshReason_PasswordRequiredToKickSession`;
      break;
    case 43:
      _ = `#Login_RefreshReason_AccountDisabled`;
      break;
    case 69:
      _ = `#Login_RefreshReason_ParentalControlRestricted`;
      break;
    case 84:
      _ = `#Login_RefreshReason_RateLimitExceeded`;
  }
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_RefreshSignIn`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(_),
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.Localize(`#Login_ConfirmCredentials`),
  });
}
function _(_) {
  let {
      onSubmit: _,
      status: _,
      autoFocus: _,
      refreshInfo: _,
      strAccountName: _,
      onAccountNameChange: _,
      strPassword: _,
      onPasswordChange: _,
      bRememberMe: _,
      onRememberMeChange: _,
      secureComputer: _ = !0,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(),
    _ = _(),
    _ = () => {
      _().then(() => {
        _() && _(!1);
      });
    },
    _ = _ === 1 || _ === 13,
    _ = _ === 2 && !_,
    _ = _
      ? (0, _.jsx)(_, {
          children: _.Localize(`#Login_CheckCredentials`),
        })
      : (0, _.jsx)(_, {
          children: `\xA0`,
        }),
    _ = _ && !_,
    _ = _ && !!_,
    _ = !!_.refreshInfo,
    _ = (0, _.useId)(),
    _ = (0, _.useId)();
  return (0, _.jsxs)(_, {
    onSubmit: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        tone: _ ? `danger` : void 0,
        label: (0, _.jsx)(_, {
          highlight: !0,
          inputId: _,
          children: _.Localize(`#Login_SignIn_WithAccountName`),
        }),
        value: _,
        onChange: (_) => {
          (_(!0), _(_));
        },
        autoFocus: _,
        disabled: _,
        _: _,
      }),
      (0, _.jsx)(_, {
        tone: _ ? `danger` : void 0,
        label: (0, _.jsx)(_, {
          inputId: _,
          children: _.Localize(`#Login_Password`),
        }),
        value: _,
        onChange: (_) => {
          (_(!0), _(_));
        },
        type: `password`,
        autoFocus: _,
        _: _,
      }),
      _
        ? (0, _.jsx)(_, {
            label: _.Localize(`#Login_RememberMe_Short`),
            title: _.Localize(`#Login_RememberMe_Tooltip`),
            value: _,
            onChange: _,
          })
        : (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Login_InsecureComputer`),
          }),
      (0, _.jsx)(_, {
        loading: _,
        refreshLogin: _,
      }),
      _,
      !_ &&
        (0, _.jsx)(_, {
          href: `${_.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(location.href)}`,
          align: `center`,
          children: _.Localize(`#Login_Help_SignIn`),
        }),
    ],
  });
}
var _ = 700;
function _(_) {
  let _ = _(),
    [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useLayoutEffect)(() => {
      _(_.ownerWindow.screen.width < _);
    }, [_.ownerWindow]),
    _(_.ownerWindow, `resize`, () => {
      _(_.ownerWindow.screen.width < _);
    }),
    (0, _.jsx)(`div`, {
      className: _,
      children: _
        ? (0, _.jsx)(_, {
            ..._,
          })
        : (0, _.jsx)(_, {
            ..._,
          }),
    })
  );
}
function _(_) {
  let _ =
    _.STORE_BASE_URL +
    `join/?guest=1&purchaseType=gift&checkout=1&redir=` +
    encodeURIComponent(_.redirectURL);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      compact: !0,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(
              _.Localize(`#Login_Guest`),
              (0, _.jsx)(`a`, {
                href: `${_}`,
                style: {
                  textDecoration: `underline`,
                },
              }),
            ),
          }),
          (0, _.jsx)(`a`, {
            className: _,
            href: `${_}`,
            children: (0, _.jsx)(`button`, {
              className: _,
              children: _.Localize(`#Login_GuestContinue`),
            }),
          }),
        ],
      }),
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        bShowHideButton: !0,
        setShowQR: _,
      })
    : (0, _.jsx)(_, {
        setShowQR: _,
      });
}
function _(_) {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_MobileFlow_New`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_MobileFlow_SignIn_ScanQR`),
        }),
      }),
      (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: () => _.setShowQR(!0),
        children: _.Localize(`#Login_MobileFlow_ShowMeQR_Button`),
      }),
      (0, _.jsx)(`a`, {
        href: `${_.STORE_BASE_URL}mobile`,
        className: _,
        children: _.Localize(`#Login_JoinBeta_Button`),
      }),
    ],
  });
}
function _(_) {
  let {
    onQRStatusChange: _,
    transport: _,
    onComplete: _,
    platform: _,
    refreshInfo: _,
    preloadedQRSession: _,
    bShowHideButton: _ = !1,
    setShowQR: _,
  } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        highlight: !0,
        children: _.Localize(`#Login_SignIn_OrWithQRCode`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          onStatusChange: _,
          transport: _,
          onComplete: _,
          platform: _,
          refreshInfo: _,
          preloadedSession: _,
        }),
      }),
      _ &&
        _ &&
        (0, _.jsx)(`button`, {
          type: `button`,
          className: `X1WW6U5nVKQ-`,
          onClick: () => _(!1),
          children: _.Localize(`#Button_Hide`),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _(
          _.Localize(`#Login_UseMobileAppForQR_Inline`),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}mobile`,
            align: `center`,
          }),
        ),
      }),
    ],
  });
}
function _(_) {
  let { label: _, error: _, tone: _, autoFocus: _, _: _, ..._ } = _,
    _ = _ ?? (_ ? `danger` : void 0);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      typeof _ == `string`
        ? (0, _.jsx)(_, {
            inputId: _,
            children: _,
          })
        : _,
      _ &&
        (0, _.jsx)(_, {
          type: `error`,
          children: _,
        }),
      (0, _.jsx)(_, {
        autoFocus: _,
        tone: _,
        _: _,
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { children: _, inputId: _, highlight: _ } = _;
  return (0, _.jsx)(`label`, {
    className: (0, _.default)(_, _ && `jAjiX6ujKzY-`),
    htmlFor: _,
    children: _,
  });
}
function _(_) {
  let {
    value: _,
    onChange: _,
    type: _ = `text`,
    tone: _,
    className: _,
    autoFocus: _,
    disabled: _,
    _: _,
  } = _;
  return (0, _.jsx)(`input`, {
    value: _,
    type: _,
    autoFocus: _,
    onChange: (_) => _(_.target.value),
    className: (0, _.default)(_, _ === `danger` && `kbZo38RXgJ0-`, _),
    disabled: _,
    _: _,
  });
}
function _(_) {
  let { children: _, type: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(void 0, _ === `error` && void 0),
    children: _,
  });
}
function _(_) {
  let { label: _, title: _, onChange: _, value: _ } = _,
    _ = () => {
      _ && _(!_);
    },
    _ = (0, _.useId)();
  return (0, _.jsxs)(`div`, {
    role: `presentation`,
    className: _,
    title: _,
    onClick: _,
    onKeyPress: (_) => {
      _.key == ` ` && (_(), _.preventDefault());
    },
    children: [
      (0, _.jsx)(_, {
        labelledBy: _,
        value: _,
      }),
      (0, _.jsx)(`label`, {
        _: _,
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { value: _, labelledBy: _ } = _;
  return (0, _.jsx)(`div`, {
    tabIndex: 0,
    className: _,
    "aria-labelledby": _,
    role: `checkbox`,
    "aria-checked": _,
    children:
      _ &&
      (0, _.jsx)(`div`, {
        className: `GHsuNp6HqyY-`,
        children: (0, _.jsx)(_, {
          strokeWidth: 35,
        }),
      }),
  });
}
function _(_) {
  let { refreshLogin: _, ..._ } = _;
  return _ &&
    `SteamClient` in globalThis &&
    `User` in SteamClient &&
    `StartShutdown` in SteamClient.User
    ? (0, _.jsx)(_, {})
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      ..._,
      children: _.Localize(`#Login_SignIn`),
    }),
  });
}
function _() {
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`button`, {
        className: _,
        type: `submit`,
        children: _.Localize(`#Login_SignIn`),
      }),
      (0, _.jsx)(`button`, {
        className: _,
        onClick: () => SteamClient.User.StartShutdown(!0),
        children: _.Localize(`#Login_ExitSteam`),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    type: `submit`,
    ..._,
  });
}
function _(_) {
  let { className: _, loading: _, disabled: _, children: _, ..._ } = _,
    _ = _ || _;
  return (0, _.jsxs)(`button`, {
    className: (0, _.default)(_, _ && `QAA-fChDQFA-`, _),
    disabled: _,
    ..._,
    children: [
      _,
      _ &&
        (0, _.jsx)(`div`, {
          className: `_7C2-lQ9GWRA-`,
          children: (0, _.jsx)(_, {
            size: `small`,
          }),
        }),
    ],
  });
}
function _(_) {
  let _ = _.children || `\xA0`;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _() {
  return (0, _.jsx)(_, {
    compact: !0,
    children: (0, _.jsxs)(_, {
      alignItems: `center`,
      className: (0, _.default)(_, _.IN_STEAMUI && `ZV64fnc7PdA-`),
      children: [
        (0, _.jsx)(_, {
          size: `xlarge`,
        }),
        (0, _.jsx)(`div`, {
          className: (0, _.default)(_),
          children: _.Localize(
            _.IN_STEAMUI
              ? `#Login_ConnectingToSteam`
              : `#Login_LoadingAccountInfo`,
          ),
        }),
      ],
    }),
  });
}
function _(_) {
  let { size: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(
      _,
      _ == `small` && `-GciojHJFJo-`,
      (_ == `medium` || !_) && `aNnjBlEgXeE-`,
      _ == `large` && `SkijseWcXzM-`,
    ),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`button`, {
      className: _,
      onClick: _.onRequestOffline,
      children: _.Localize(`#Login_GoOffline_Button`),
    }),
  });
}
function _(_) {
  let {
      reset: _,
      failure: _,
      onRequestOffline: _,
      errorReference: _,
      extendedErrorMessage: _,
    } = _,
    { title: _, description: _ } = _(_, _),
    _ = _.IN_STEAMUI && _ == _.Network;
  return (0, _.jsxs)(_, {
    compact: !0,
    children: [
      (0, _.jsxs)(_, {
        alignItems: `center`,
        gap: 12,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `sH-b0kW7QCY-`,
              children: _.Localize(`#Login_GoOffline_Description`),
            }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                onClick: _,
                children: _.Localize(`#Button_Retry`),
              }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  onRequestOffline: _,
                }),
            ],
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `La0SBF0lXr0-`,
          children: _.Localize(`#Login_Error_Reference`, _),
        }),
    ],
  });
}
function _(_) {
  let { reset: _ } = _;
  return (0, _.jsx)(_, {
    reset: _,
    failure: _.Generic,
  });
}
function _(_) {
  let {
      type: _,
      onSubmitCode: _,
      status: _,
      accountName: _,
      associatedLabel: _,
      onBack: _,
    } = _,
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = _ === `mobile`,
    _ = _.join(``),
    _ = _(_, _),
    _ = (_) => {
      (_(!0),
        _(_).then(() => {
          (_(!1), _(!1));
        }));
    },
    _ = (_) => {
      (_ || _(!0), _(_));
      let _ = _.join(``);
      _(_, _) && _(_);
    },
    _ = () => {
      _ && _(_);
    },
    _ = () => {
      (_(!_), _([]), _(``), _(_ + 1));
    },
    _ = !_ && (_ === 11 || _ === 10),
    _,
    _;
  return (
    _
      ? _ === `mobile`
        ? ((_ = (0, _.jsx)(_, {})), (_ = `#Login_UseMobileCode`))
        : ((_ = (0, _.jsx)(_, {})), (_ = `#Login_UseEmailCode`))
      : ((_ =
          _ === `mobile`
            ? (0, _.jsx)(_, {})
            : (0, _.jsx)(_, {
                emailAddress: _,
              })),
        (_ = `#Login_UseBackupCode`)),
    (0, _.jsx)(_, {
      title: (0, _.jsx)(_, {}),
      compact: !0,
      children: (0, _.jsx)(_, {
        onSubmit: _,
        children: (0, _.jsxs)(_, {
          alignItems: `center`,
          gap: 14,
          children: [
            (0, _.jsx)(_, {
              type: _,
              accountName: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(_, {
                  alignItems: `center`,
                  gap: 2,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        children: _.Localize(`#Login_IncorrectSteamGuard`),
                      }),
                    (0, _.jsx)(
                      _,
                      {
                        value: _,
                        onChange: _,
                        tone: _ ? `danger` : void 0,
                        loading: _,
                        backupCode: _,
                      },
                      _,
                    ),
                  ],
                }),
                _,
              ],
            }),
            _ &&
              (0, _.jsx)(_, {
                onClick: _,
                align: `center`,
                children: _.Localize(_),
              }),
            (0, _.jsx)(_, {
              type: _,
              onCodeHelp: _.onCodeHelp,
            }),
          ],
        }),
      }),
    })
  );
}
function _(_) {
  if (_()) return null;
  let _, _;
  return (
    _.type === `mobile`
      ? ((_ = `${_.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
        (_ = _.Localize(`#Login_Help_AccessMobileApp`)))
      : ((_ = `${_.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
        (_ = _.Localize(`#Login_Help_AccessEmail`))),
    _.onCodeHelp
      ? (0, _.jsx)(_, {
          onClick: () => _.onCodeHelp(_),
          align: `center`,
          children: _,
        })
      : (0, _.jsx)(_, {
          href: _,
          align: `center`,
          children: _,
        })
  );
}
function _() {
  return (0, _.jsx)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_EnterBackupCode`),
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.Localize(`#Login_EnterBackupCodeDescription`),
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsxs)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Login_EnterMobileCode`),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(_, {
    justifyContent: `space-evenly`,
    alignItems: `center`,
    className: _,
    children: [
      (0, _.jsx)(_, {
        align: `center`,
        spacing: 6,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _.LocalizeReact(
            `#Login_EnterEmailCode`,
            (0, _.jsx)(`span`, {
              className: _,
              children: _.emailAddress,
            }),
          ),
        }),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { accountName: _, type: _ } = _,
    _ =
      _ === `mobile`
        ? _.Localize(`#Login_MobileProtectingAccount`)
        : _.Localize(`#Login_EmailProtectingAccount`),
    _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.LocalizeReact(
          `#Login_ActiveAccountName`,
          (0, _.jsx)(`span`, {
            className: _,
            children: _,
          }),
        ),
      }),
      !_ &&
        (0, _.jsx)(`div`, {
          className: `DSy9L5eaj5o-`,
          children: _,
        }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    alignItems: `center`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`img`, {
          src: _(_),
          alt: ``,
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(_.Localize(`#Login_AwaitingMobileConfirmation`)),
        }),
      ],
    }),
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 33 49`,
    fill: `currentColor`,
    className: _.className,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 58 56`,
    fill: `none`,
    className: _.className,
    children: (0, _.jsx)(`path`, {
      _: `M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z`,
      fill: `#1A99FF`,
    }),
  });
}
function _(_) {
  let { type: _, accountName: _, onUseCodeOverride: _ } = _,
    _ = _(),
    _ = (0, _.jsx)(_, {
      type: `mobile`,
      onCodeHelp: _.onCodeHelp,
    }),
    _ = _
      ? (0, _.jsx)(`div`, {
          style: {
            paddingBottom: `20px`,
          },
          children: (0, _.jsx)(_, {
            align: `center`,
            onClick: _,
            children: _.Localize(`#Login_EnterCodeInstead`),
          }),
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            align: `center`,
            onClick: _,
            children: _.Localize(`#Login_EnterCodeInstead`),
          }),
        });
  return (0, _.jsx)(_, {
    title: (0, _.jsx)(_, {}),
    compact: !0,
    children: (0, _.jsxs)(_, {
      gap: _.IN_STEAMUI ? 24 : 40,
      children: [
        (0, _.jsx)(_, {
          type: _,
          accountName: _,
        }),
        (0, _.jsx)(_, {}),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [_, _],
        }),
      ],
    }),
  });
}
function _(_) {
  let { children: _, align: _, inline: _ } = _,
    _ = (0, _.default)(_, _ === `center` && `p1pxbjr1kTM-`);
  if (`href` in _) {
    let _ = _.IN_STEAMUI ? `steam://openurl_external/${_.href}` : _.href;
    return (0, _.jsx)(`a`, {
      className: _,
      href: _,
      children: _,
    });
  }
  return (0, _.jsx)(_ ? `span` : `div`, {
    className: _,
    onClick: _.onClick,
    children: _,
  });
}
function _(_) {
  let { onSubmit: _, children: _, className: _ } = _;
  return (0, _.jsx)(`form`, {
    onSubmit: (_) => (_.preventDefault(), _(), !1),
    className: _,
    children: _,
  });
}
function _(_) {
  let {
      alignItems: _,
      justifyContent: _,
      gap: _,
      className: _,
      ariaLabelledBy: _,
      children: _,
    } = _,
    _ = (0, _.default)(
      _,
      _ === `center` && `mQfJWqZo0U8-`,
      _ === `center` && `h53Pyn--gk4-`,
      _,
    ),
    _ = _
      ? {
          gap: typeof _ == `number` ? `${_}px` : _,
        }
      : void 0;
  return (0, _.jsx)(`section`, {
    className: _,
    style: _,
    "aria-labelledby": _,
    children: _,
  });
}
function _(_) {
  let { children: _, justifyContent: _, alignItems: _, className: _ } = _;
  return (0, _.jsx)(`div`, {
    style: {
      display: `flex`,
      flexDirection: `row`,
      justifyContent: _,
      alignItems: _,
    },
    className: _,
    children: _,
  });
}
function _(_) {
  let { onChange: _, backupCode: _ = !1, ..._ } = _;
  return (0, _.jsx)(_, {
    length: _(_),
    backupCode: _,
    onChange: (_) => {
      ((_ = _.map((_) => _.toUpperCase())), _(_.join(``).trim(), _) && _(_));
    },
    autoFocus: !0,
    ..._,
    allowCharacter: (_) => /\w/g.test(_),
  });
}
function _(_) {
  let { children: _, spacing: _ = 0, align: _ } = _;
  return (0, _.jsx)(_, {
    alignItems: _,
    children: _.Children.map(_, (_, _) =>
      _
        ? (0, _.jsx)(`div`, {
            style:
              _ > 0
                ? {
                    paddingTop: `${_}px`,
                  }
                : void 0,
            children: _,
          })
        : null,
    )?.filter(Boolean),
  });
}
function _(_) {
  let { title: _, titleId: _, children: _, compact: _ } = _,
    _ = _(),
    _ = (0, _.useId)();
  return (0, _.jsxs)(_, {
    gap: _.IN_STEAMUI ? 0 : 32,
    className: (0, _.default)(
      _,
      _ && `rvRWTXNBcK4-`,
      _ && `L35Fcv9fbYo-`,
      _.IN_STEAMUI && `IN_CLIENT`,
    ),
    ariaLabelledBy: _ ?? _,
    children: [
      typeof _ == `string`
        ? (0, _.jsx)(`div`, {
            className: _,
            _: _ ?? _,
            children: _,
          })
        : _,
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
    realm: _ = _.EREALM,
    launcherType: _ = _()?.LAUNCHER_TYPE,
    className: _ = _,
  } = _;
  return _ === 8
    ? (0, _.jsx)(`div`, {
        className: _,
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            onBack: _.onBack,
          }),
          _ === _.k_ESteamRealmChina
            ? (0, _.jsx)(_, {
                className: _,
              })
            : (0, _.jsx)(_, {
                className: _,
              }),
          ` `,
        ],
      });
}
function _(_) {
  return _.onBack
    ? (0, _.jsx)(`button`, {
        type: `button`,
        className: _,
        onClick: _.onBack,
        "aria-label": _.Localize(`#Button_Back`),
        children: (0, _.jsx)(_, {
          className: _,
        }),
      })
    : null;
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 153 46`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _.className,
    children: [
      (0, _.jsx)(`path`, {
        _: `M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z`,
        fill: `#E0E1E6`,
      }),
      (0, _.jsx)(`path`, {
        _: `M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z`,
        fill: `#E0E1E6`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    viewBox: `0 0 232.73 46.07`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: _.className,
    fill: `#E0E1E6`,
    children: [
      (0, _.jsxs)(`g`, {
        stroke: `null`,
        _: `svg_2`,
        children: [
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_3`,
            _: `m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037`,
          }),
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_4`,
            _: `m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836`,
          }),
          (0, _.jsx)(`path`, {
            stroke: `null`,
            _: `svg_5`,
            _: `m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287`,
          }),
        ],
      }),
      (0, _.jsx)(`path`, {
        stroke: `null`,
        _: `svg_6`,
        _: `m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z`,
      }),
      (0, _.jsxs)(`g`, {
        _: `svg_7`,
        children: [
          (0, _.jsx)(`path`, {
            _: `svg_8`,
            _: `m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_9`,
            _: `m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_10`,
            _: `m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_11`,
            _: `m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z`,
          }),
        ],
      }),
      (0, _.jsxs)(`g`, {
        _: `svg_12`,
        children: [
          (0, _.jsx)(`path`, {
            _: `svg_13`,
            _: `m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z`,
          }),
          (0, _.jsx)(`path`, {
            _: `svg_14`,
            _: `m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z`,
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    alignItems: `center`,
    justifyContent: `center`,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  let _ = (0, _.useRef)(_);
  ((_.current = _),
    (0, _.useEffect)(() => {
      new URLSearchParams(location.search).get(`need_password`) ||
        (_.current &&
          _(_.current).catch((_) => {
            _(`PerformRefresh exception`, _);
          }));
    }, [_]));
}
async function _(_) {
  let _ = new FormData();
  _.append(`redir`, _);
  let _ = `${_.LOGIN_BASE_URL}jwt/ajaxrefresh`,
    _ = await _.default.post(_, _, {
      timeout: 1e4,
      withCredentials: !0,
    });
  if (_.status !== 200 || !_?.data?.success) return !1;
  let { success: _, login_url: _, error: _, ..._ } = _.data,
    _ = new FormData();
  Object.entries(_).forEach(([_, _]) => _.append(_, _));
  let _ = await _.default.post(_, _),
    _ = _.status === 200 && _.data.result === 1;
  return (_ && window.location.assign(_), _);
}
function _() {
  let _ = (0, _.useRef)(!0);
  return (
    (0, _.useEffect)(
      () => () => {
        _.current = !1;
      },
      [_],
    ),
    (0, _.useCallback)(() => _.current, [_])
  );
}
