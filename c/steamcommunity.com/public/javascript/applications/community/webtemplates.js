import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _ } from "./clanstore.js";
import "./steammessages_contentmoderation_pb.js";
import { _ } from "./storeassets.js";
import { _ } from "./playerstore.js";
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
import { _, _, _ } from "./steammessages_econ_pb.js";
import { _, _ } from "./textfilterstore.js";
var _ = _(_()),
  _ = _(_(), 1);
function _(_) {
  return `unknown ESteamNotificationType ( ` + _ + ` )`;
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notification_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notification_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            notification_targets: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notification_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            body_data: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            read: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            timestamp: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            hidden: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            expiry: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            viewed: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_hidden || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_hidden: {
              _: 1,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 2,
              _: 0,
              _: _.readInt32,
              _: _.writeInt32,
            },
            include_confirmation_count: {
              _: 3,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            include_pinned_counts: {
              _: 4,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
            },
            include_read: {
              _: 5,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            count_only: {
              _: 6,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notifications || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notifications: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            confirmation_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            pending_gift_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_friend_count: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            unread_count: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_family_invite_count: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timestamp: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            notification_type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            notification_ids: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            mark_all_read: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.remote_client_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            remote_client_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            target_client_type: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notification_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notification_type: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            notification_targets: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notification_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notification_ids: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.notifications || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            notifications: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            pending_gift_count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_friend_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pending_family_invite_count: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.GetSteamNotifications = _;
  function _(_, _) {
    return _.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      _(_, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.MarkNotificationsRead = _;
  function _(_, _) {
    return _.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      _(_, _),
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  _.MarkNotificationsViewed = _;
  function _(_, _) {
    return _.SendNotification(`SteamNotification.HideNotification#1`, _(_, _), {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.HideNotification = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamNotification.SetPreferences#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.SetPreferences = _;
  function _(_, _, _) {
    return _.SendMsg(`SteamNotification.GetPreferences#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetPreferences = _;
})((_ ||= {}));
var _;
(function (_) {
  (_.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: _,
  }),
    (_.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: _,
    });
})((_ ||= {}));
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            cooldown_skip_granted: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            send_running_apps: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            role: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            time_joined: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cooldown_seconds_remaining: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMember`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            role: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInvite`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupFormerMember`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.name || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            members: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            pending_invites: {
              _: 3,
              _: _,
              _: !0,
              _: !0,
            },
            free_spots: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            country: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            slot_cooldown_remaining_seconds: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            former_members: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            slot_cooldown_overrides: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            role: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            inviter_steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            awaiting_2fa: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            invite_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInviteForUser`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            include_family_group_response: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rtime_joined: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_left: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            role: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            participated: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMembership`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            is_not_member_of_any_group: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            latest_time_joined: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            latest_joined_family_groupid: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            pending_group_invites: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            role: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            cooldown_seconds_remaining: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            family_group: {
              _: 8,
              _: _,
            },
            can_undelete_last_joined_family: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            membership_history: {
              _: 10,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            receiver_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            receiver_role: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            two_factor_method: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            nonce: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.two_factor_method || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            two_factor_method: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            cooldown_skip_granted: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            invite_already_accepted: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            cooldown_seconds_remaining: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_to_remove: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid_to_cancel: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            client_instance_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.users || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            users: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            gidshoppingcart: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            store_country_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            use_account_cart: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gidshoppingcart || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gidshoppingcart: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            request_ids: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readUint64String,
              pbr: _.readPackedUint64String,
              _: _.writeRepeatedUint64String,
            },
            rt_include_completed_since: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requester_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9, 10, 11, 12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requester_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            gidshoppingcart: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_requested: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_responded: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            responder_steamid: {
              _: 5,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            response_action: {
              _: 6,
              _: _.readEnum,
              _: _.writeEnum,
            },
            is_completed: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            request_id: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            requested_packageids: {
              _: 9,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchased_packageids: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            requested_bundleids: {
              _: 11,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            purchased_bundleids: {
              _: 12,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `PurchaseRequest`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            requests: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            action: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            request_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            running_apps: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.member_steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            member_steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            owner_steamid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
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
            playing_members: {
              _: 3,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_InviteStatus_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_GroupChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.changes || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            changes: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timestamp: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            actor_steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            body: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            by_support: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response_Change`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            first_played: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            latest_played: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            seconds_played: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_PlaytimeEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entries || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entries: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            entries_by_owner: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            cooldown_count: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            include_own: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            include_excluded: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            language: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            max_apps: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_non_games: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid: {
              _: 8,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            apps: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            owner_steamid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 15], null);
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
            owner_steamids: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readFixed64String,
              pbr: _.readPackedFixed64String,
              _: _.writeRepeatedFixed64String,
            },
            name: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            sort_as: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            capsule_filename: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            img_icon_hash: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            exclude_reason: {
              _: 10,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            rt_time_acquired: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_last_played: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rt_playtime: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            app_type: {
              _: 14,
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            content_descriptors: {
              _: 15,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response_SharedApp`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            nonce: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            nonce: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            lender_steamid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.members || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            members: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
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
            preferred_appids: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response_FamilyMember`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.wallet_country_matches || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            wallet_country_matches: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            ip_match: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            join_restriction: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            invite_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.family_groupid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            family_groupid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rtime32_target: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.CreateFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.CreateFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetFamilyGroup#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetFamilyGroupForUser#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetFamilyGroupForUser = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.ModifyFamilyGroupDetails#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.ModifyFamilyGroupDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.InviteToFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.InviteToFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(
      `FamilyGroups.ConfirmInviteToFamilyGroup#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.ConfirmInviteToFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(
      `FamilyGroups.ResendInvitationToFamilyGroup#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.ResendInvitationToFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.JoinFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.JoinFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.ConfirmJoinFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.ConfirmJoinFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.RemoveFromFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.RemoveFromFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.CancelFamilyGroupInvite#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.CancelFamilyGroupInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetUsersSharingDevice#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetUsersSharingDevice = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.DeleteFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.DeleteFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.UndeleteFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.UndeleteFamilyGroup = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetPlaytimeSummary#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetPlaytimeSummary = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.RequestPurchase#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.RequestPurchase = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetPurchaseRequests#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetPurchaseRequests = _;
  function _(_, _, _) {
    return _.SendMsg(
      `FamilyGroups.RespondToRequestedPurchase#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `community`],
      },
    );
  }
  _.RespondToRequestedPurchase = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetChangeLog#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetChangeLog = _;
  function _(_, _, _) {
    return _.SendMsg(
      `FamilyGroups.SetFamilyCooldownOverrides#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 5,
        rgBrowserAPISites: [`community`],
      },
    );
  }
  _.SetFamilyCooldownOverrides = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetSharedLibraryApps#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  _.GetSharedLibraryApps = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.SetPreferredLender#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetPreferredLender = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetPreferredLenders#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetPreferredLenders = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.ForceAcceptInvite#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.ForceAcceptInvite = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.GetInviteCheckResults#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetInviteCheckResults = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.ClearCooldownSkip#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.ClearCooldownSkip = _;
  function _(_, _, _) {
    return _.SendMsg(`FamilyGroups.RollbackFamilyGroup#1`, _(_, _, _), _, {
      ePrivilege: 5,
    });
  }
  _.RollbackFamilyGroup = _;
})((_ ||= {}));
var _;
(function (_) {
  (_.NotifyRunningAppsHandler = {
    name: `FamilyGroupsClient.NotifyRunningApps#1`,
    request: _,
  }),
    (_.NotifyInviteStatusHandler = {
      name: `FamilyGroupsClient.NotifyInviteStatus#1`,
      request: _,
    }),
    (_.NotifyGroupChangedHandler = {
      name: `FamilyGroupsClient.NotifyGroupChanged#1`,
      request: _,
    });
})((_ ||= {})),
  _.createContext({
    staleTimeMs: 1 / 0,
  }),
  (0, _.createContext)({
    errorMessage: null,
    setErrorMessage: (_) => {},
  });
function _(_, _) {
  return `${_.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
}
function _(_) {
  let _ = _?.reported_content_id
    ? _.reported_content_id
    : `${_?.subject_type}-${_?.subject_group_id}-${_?.subject_id}`;
  return `${_.COMMUNITY_BASE_URL}my/reportedcontent/${_}`;
}
var _ = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (_) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [_.ticket],
    }),
    link: (_) => _.HELP_BASE_URL + `wizard/HelpRequest/` + _.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (_) => ({
      locString: _.title,
    }),
    bodyLoc: (_) =>
      _() && _.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : _.body,
    image: (_) => _.image,
    link: (_) =>
      _() && _.link.includes(`https://store.steampowered.com`)
        ? _.link.replace(`https://store.steampowered.com`, _.STORE_BASE_URL)
        : _.link,
  },
  10: {
    displayNameLoc: (_) => _.display_name,
    titleLoc: (_) => _.title,
    bodyLoc: (_) => _.body,
    image: (_) => _.image,
    link: (_) => _.link,
  },
  14: {
    titleLoc: `#SteamNotification_ModeratorMessage_Title`,
    link: (_) => _.COMMUNITY_BASE_URL + `my/moderatormessages/` + _.msgid,
  },
  28: {
    displayNameLoc: (_) =>
      _.is_limited_launch
        ? `#Notification_LimitedLaunchInviteTitle`
        : `#Notification_PlaytestInviteTitle`,
    titleLoc: (_) =>
      _.is_limited_launch
        ? `#Notification_LimitedLaunchInviteBody`
        : `#Notification_PlaytestInviteBody`,
    image: (_) => _.appid,
    link: (_) => _.STORE_BASE_URL + `account/gatedaccess?appid=` + _.appid,
  },
  30: {
    titleLoc: (_) => {
      switch (_.status) {
        case 1:
          return `#Notification_ReportedContentAction_Received`;
        case 2:
          return `#Notification_ReportedContentAction_Sanctioned`;
        case 3:
          return `#Notification_ReportedContentAction_Acquitted`;
        case 4:
          return `#Notification_ReportedContentAction_DisputeReceived`;
        case 5:
          return `#Notification_ReportedContentAction_DisputeSanctioned`;
        case 6:
          return `#Notification_ReportedContentAction_DisputeAcquitted`;
        default:
          return `#Notification_ReportedContentAction_Unknown`;
      }
    },
    link: (_) => _(_),
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (_) =>
      `${_.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (_) => _(_.familyid, _.request_id),
  },
  19: {
    steamidAttribute: `responder_steamid`,
    titleLoc: (_) =>
      _.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle`
        : ``,
    bodyLoc: (_) =>
      _.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestDeclinedBody`
        : ``,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseTitleApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined`,
    bodyLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseBodyApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseTitleApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseTitleDeclined`,
    bodyLoc: (_) =>
      _.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseBodyApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseBodyDeclined`,
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function _(_) {
  return _.findIndex((_) => _ == _) != null;
}
function _(_) {
  return !_.hidden && _(_.notification_type) && _(_.body_data);
}
function _(_) {
  return _(_) || _(_) || _(_);
}
var _ = new _(`SteamNotificationStore`),
  _ = _.Debug,
  _ = _.Error,
  _ = _.Warning,
  _ = class {
    constructor() {
      _(this);
    }
    m_rgNotificationRollups = [];
    m_summary = _();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = ``;
    m_keyNotifyServerHidden = ``;
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = ``;
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(_) {
      this.m_transport = _;
    }
    RegisterOnNotificationCallback(_) {
      this.m_fnOnNotificationCallback = _;
    }
    SetClientFilters(_, _ = 0) {
      (this.m_strRemoteClientID = _), (this.m_eTargetClientType = _);
    }
    NotifyServerNotificationsRead(_) {
      this.m_rgNotifyServerRead.push(..._), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(_) {
      this.m_rgNotifyServerHidden.push(..._), this.UpdateServer();
    }
    BSendToCallbackAsNew(_) {
      return (
        !_.read &&
        !_(_) &&
        !this.m_rgUnreadNotificationIDs.includes(_.notification_id)
      );
    }
    Dev_AddTestNotification(_) {}
    Dev_UpdateTestNotificationReadState(_, _) {
      let _ = this.m_rgTestNotifications.findIndex(
        (_) => _.notification_id == _,
      );
      return (
        _ !== -1 &&
        this.m_rgTestNotifications[_].read != _ &&
        ((this.m_rgTestNotifications[_].read = _), !0)
      );
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerRead),
          _.MarkNotificationsRead(this.m_transport, _) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          _.HideNotification(this.m_transport, _) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(_, _ = !1) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _
          ? this.NotifyServerNotificationsRead([_])
          : _(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      if (_.item.read)
        _(`Attempted to mark notification read that is already read`);
      else if (((_.item.read = !0), _.rgunread?.length > 0)) {
        this.ReduceNewTotals(_.type, _.rgunread.length);
        let _ = [];
        _.rgunread.forEach((_) => {
          _.push(_);
        }),
          _.rgread.push(..._.rgunread),
          (_.rgunread = []),
          this.NotifyServerNotificationsRead(_);
      }
    }
    MarkItemHidden(_) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      (_.item.hidden = !0),
        _.rgunread?.length > 0 &&
          this.ReduceNewTotals(_.type, _.rgunread?.length),
        this.NotifyServerNotificationsHidden([..._.rgunread, ..._.rgread]);
    }
    ReduceNewTotals(_, _) {
      _(this.m_summary, _, -_);
    }
    MarkAllItemsViewed() {
      let _ = _.Init(_);
      _.Body().set_remote_client_id(this.m_strRemoteClientID),
        _.Body().set_target_client_type(this.m_eTargetClientType),
        _.MarkNotificationsViewed(this.m_transport, _),
        (this.m_nUnviewed = 0);
    }
    MarkAllItemsRead(_) {
      let _ = [],
        _ = [],
        _ = _ ?? this.m_rgNotificationRollups;
      return (
        _.forEach((_, _) => {
          _.rgunread.length > 0 &&
            (_.rgunread.forEach((_) => {
              _.push(_);
            }),
            _.push(_));
        }),
        _.length > 0 &&
          ((this.m_summary = Object.assign(_(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          _.forEach((_) => {
            let _ = _[_];
            (_.item.read = !0), (_.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(_)),
        _.length + 0
      );
    }
    ApplyNotificationsUpdate(_) {
      if (
        (_(`ApplyNotificationsUpdate`, _),
        !_ ||
          (!_.notifications?.length &&
            _.pending_friend_count === void 0 &&
            _.pending_gift_count === void 0))
      ) {
        _(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        _(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let _ = this.m_currentNotificationsData;
      _.notifications?.forEach((_) => {
        let _ = _.notifications.findIndex(
          (_) => _.notification_id == _.notification_id,
        );
        _ == -1
          ? _.notifications.push(_)
          : Object.assign(_.notifications[_], _);
      }),
        _.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            _.pending_friend_count),
        _.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            _.pending_gift_count),
        _.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            _.pending_family_invite_count),
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(_) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(_))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let _ = [],
        _ = _(),
        _ = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((_) => {
          this.BExcludeClientTargetedNotification(_) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (_) => _ == _.notification_id,
              ) !== -1 &&
              (_.hidden = !0),
            _(_) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (_) => _ == _.notification_id,
                ) !== -1 &&
                (_.read = !0),
              _.read || _(_, _.notification_type, 1),
              _.viewed || _++,
              this.AddNotificationToRollups(_, _)));
        }),
        _.sort((_, _) => _.timestamp - _.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let _ of _)
          if (_.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              _.rollup_key,
              JSON.parse(JSON.stringify(_)),
            ),
              this.m_fnOnNotificationCallback(_, 0);
          else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
            let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
            (_.item.read != _.item.read || _.item.viewed != _.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                _.rollup_key,
                JSON.parse(JSON.stringify(_)),
              ),
              this.m_fnOnNotificationCallback(_, 1));
          }
        for (let [_, _] of this.m_rgNewRollupIDs)
          _.findIndex((_) => _.rollup_key == _) == -1 &&
            (this.m_fnOnNotificationCallback(_, 2),
            this.m_rgNewRollupIDs.delete(_));
      }
      _.reverse(),
        (_.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (_.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (_.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = _.slice()),
        (this.m_summary = _),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = _);
    }
    BExcludeClientTargetedNotification(_) {
      let _ = _(_.body_data);
      return _
        ? !!(
            (_.remote_client_id &&
              this.m_strRemoteClientID != _.remote_client_id) ||
            (_.target_client_types &&
              !(this.m_eTargetClientType & _.target_client_types))
          )
        : !1;
    }
    BReplaceRollupItem(_, _) {
      return _.read == _.read
        ? (_.read && _.read) || _.viewed == _.viewed
          ? _.timestamp < _.timestamp
          : !_.viewed && _.viewed
            ? !0
            : _.viewed && _.viewed
              ? _.viewed < _.viewed
              : !1
        : _.read;
    }
    AddNotificationToRollups(_, _) {
      let _ = this.BSendToCallbackAsNew(_);
      _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
      let _ = _.notification_type;
      switch (_) {
        case 3:
          {
            let _ = _(_);
            if (!_) return;
            let _ =
                `comment_` +
                _.owner_steam_id?.GetAccountID() +
                `_` +
                _.forum_id +
                `_` +
                _.topic_id +
                (_.brate_limited ? `_ratelimited` : ``),
              _ = _.findIndex((_) => _.rollup_key == _);
            if (_ == -1)
              _.push({
                type: _,
                rollup_key: _,
                item: _,
                rollup_count: 1,
                timestamp: _.timestamp,
                rgunread: _.read ? [] : [_.notification_id],
                rgread: _.read ? [_.notification_id] : [],
                bSendToCallbackAsNew: _,
                url: _(_),
              });
            else {
              let _ = _[_];
              this.BReplaceRollupItem(_, _.item) &&
                ((_.url = _(_)),
                (_.item = _),
                (_.timestamp = _.timestamp),
                (_.bSendToCallbackAsNew = _)),
                (_.rollup_count += 1),
                _.read
                  ? _.rgread.push(_.notification_id)
                  : _.rgunread.push(_.notification_id);
            }
          }
          break;
        case 4:
          let _ = _(_);
          if (_) {
            let _ = `item_` + _.appid;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
          }
          break;
        case 12:
          let _ = _(_)?.appid.toString();
          if (_) {
            let _ = `asyncgame_` + _;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
          }
          break;
        case 30:
          let _ = _(_),
            _ = _?.report_id,
            _ = _(_),
            _ = `contentreport_${_}`,
            _ = _.findIndex((_) => _.rollup_key == _);
          if (_ == -1)
            _.push({
              type: _,
              rollup_key: _,
              item: _,
              rollup_count: 1,
              timestamp: _.timestamp,
              rgunread: _.read ? [] : [_.notification_id],
              rgread: _.read ? [_.notification_id] : [],
              bSendToCallbackAsNew: _,
              url: _,
            });
          else {
            let _ = _[_];
            this.BReplaceRollupItem(_, _.item) &&
              ((_.url = _),
              (_.item = _),
              (_.timestamp = _.timestamp),
              (_.bSendToCallbackAsNew = _)),
              (_.rollup_count += 1),
              _.read
                ? _.rgread.push(_.notification_id)
                : _.rgunread.push(_.notification_id);
          }
          break;
        default:
          _.push({
            type: _,
            rollup_key: _.notification_id,
            item: _,
            timestamp: _.timestamp,
            rgunread: _.read ? [] : [_.notification_id],
            rgread: _.read ? [_.notification_id] : [],
            bSendToCallbackAsNew: _,
          });
      }
    }
    AddNotificationToRollupByAppID(_, _, _, _, _, _) {
      let _ = _.findIndex((_) => _.rollup_key == _);
      if (_ == -1)
        _.push({
          type: _,
          rollup_key: _,
          item: _,
          rollup_count: 1,
          timestamp: _.timestamp,
          rgunread: _.read ? [] : [_.notification_id],
          rgread: _.read ? [_.notification_id] : [],
          bSendToCallbackAsNew: _,
        });
      else {
        let _ = _[_];
        this.BReplaceRollupItem(_, _.item) &&
          ((_.item = _),
          (_.timestamp = _.timestamp),
          (_.bSendToCallbackAsNew = _)),
          (_.rollup_count += 1),
          _.read
            ? _.rgread.push(_.notification_id)
            : _.rgunread.push(_.notification_id);
      }
    }
  };
_([_], _.prototype, `m_rgNotificationRollups`, void 0),
  _([_], _.prototype, `m_summary`, void 0),
  _([_], _.prototype, `m_bLoaded`, void 0),
  _([_], _.prototype, `m_nUnviewed`, void 0),
  _([_], _.prototype, `ProcessNotifications`, null);
function _() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function _(_, _, _, _, _, _ = !0, _ = !1) {
  if (!_) throw Error(`Invalid steamid for GetSteamNotifications`);
  let _ = _.Init(_);
  _.Body().set_language(_),
    _.Body().set_include_read(_),
    _.Body().set_include_pinned_counts(!0),
    _.Body().set_include_confirmation_count(_);
  let _ = await _.GetSteamNotifications(_, _);
  if (_.GetEResult() !== 1)
    throw (
      (_(
        `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
    );
  let _ = _.Body().toObject();
  return (
    _ &&
      (_.notifications = _.notifications?.filter(
        (_) => !_(_.notification_type, _, _),
      )),
    _
  );
}
async function _(_, _) {
  if (!_ || !_.steamid || !_.contextid || !_.appid || !_.assetid)
    return _(`Item notification missing required attributes`), null;
  let _ = _.Init(_);
  _.Body().set_steamid(_.steamid),
    _.Body().set_contextid(_.contextid),
    _.Body().set_appid(parseInt(_.appid)),
    _.Body().set_get_descriptions(!0),
    _.Body().set_language(_.LANGUAGE);
  let _ = new _();
  _.add_assetids(_.assetid), _.Body().set_filters(_);
  let _ = await _.GetInventoryItemsWithDescriptions(_, _);
  return _.GetEResult() === 1
    ? (_.Body().toObject().descriptions[0] ?? null)
    : (_(`Request for steam item metadata did not succeed`, _.GetEResult()),
      null);
}
var _ = `ItemMetadata`;
function _(_) {
  return [`${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`];
}
function _(_, _, _) {
  let _ = _(4, _.body_data);
  _.steamid = _;
  let _ = _({
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 1 / 0,
  });
  return _.isSuccess ? _.data : null;
}
function _(_) {
  let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
  return _.last_post > 0 && (_ += `&tscn=` + (_.last_post - 1)), _;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _?.bhas_friend;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _(_) || _(_);
}
function _(_) {
  return _(_);
}
function _(_) {
  if (!_) return null;
  try {
    return JSON.parse(_);
  } catch {
    _(`Steam notification in invalid format:`, _);
  }
  return null;
}
function _(_) {
  return _(_.notification_type, _.body_data);
}
function _(_) {
  return _(_.type, _.item?.body_data);
}
function _(_, _) {
  let _ = _(_);
  if (!_) return null;
  switch (_) {
    case 2:
      return _.gifter_account;
    case 22:
      return {
        responder_steamid: _.responder_steamid,
        package_id: _.package_id,
        bundle_id: _.bundle_id,
      };
    case 9:
      return parseInt(_.sender);
    case 8:
      return {
        appid: _.appid,
        count: _.count ?? 1,
        appids: _.appids ?? [],
      };
    case 12:
      return !_.appid || !_.state || (_.state != 1 && _.state != 2)
        ? (_(`Async game notification invalid data`, _), null)
        : {
            appid: parseInt(_.appid),
            state: parseInt(_.state),
          };
    case 3:
      let _ = {
        owner_steam_id: _.owner_steam_id ? new _(_.owner_steam_id) : null,
        bclan_account: _(_.bclan_account),
        title: _.title,
        comment: _.text,
        time: _.last_post,
        comment_type: Number(_.type),
        topic_id: _.topic_id,
        forum_id: _.forum_id,
        account_steam_id: _.account_id
          ? _.InitFromAccountID(_.account_id, _.EUNIVERSE)
          : null,
        bhas_friend: _(_.bhas_friend),
        bis_forum: _(_.bis_forum),
        last_post: _.last_post,
        bsubscribed: _(_.subscribed),
        bis_owner: _(_.bis_owner),
        brate_limited: !!_.brate_limited,
      };
      return (
        _.json_data &&
          (_.json_data = {
            app_id: parseInt(_.json_data.app_id),
            file_type: parseInt(_.json_data.file_type),
            title: _.json_data.title,
          }),
        _
      );
    case 5:
      return {
        requestorID: parseInt(_.requestor_id),
        state: _.state ? parseInt(_.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(_.app_id),
        assetid: _.asset_id ?? ``,
        contextid: _.context_id ?? ``,
      };
    case 23:
      return {
        url: _.url ?? ``,
        strGameName: _.content_app_name ?? ``,
        mediaType: _.media_type ?? `clip`,
        secDuration: parseFloat(_.duration_seconds ?? 0),
        nSize: parseInt(_.file_size ?? 0),
        strMachineName: _.machine_name,
        rtExpiration: _.expiration,
        thumbnailURL: _.thumbnail_url,
      };
    case 30:
      return {
        report_id: _.report_id ?? ``,
        reported_content_id: _.reported_content_id ?? ``,
        subject_type: _.subject_type ?? 0,
        subject_group_id: _.subject_group_id ?? `0`,
        subject_id: _.subject_id ?? `0`,
        status: _.status ?? 0,
      };
    default:
      return (
        _(
          `GetCustomNotificationDataByType called with unexpected type:` + _,
          _,
        ),
        null
      );
  }
}
function _(_) {
  if (_ === void 0) return !1;
  if (typeof _ == `number`) return _ > 0;
  if (typeof _ == `string`)
    switch (_.toLowerCase()?.trim()) {
      case `true`:
      case `1`:
        return !0;
      default:
        return !1;
    }
  return _(`notification contained unexpected boolean value`), !1;
}
function _(_) {
  let _ = 0;
  return (
    (function (_) {
      return Object.keys(_);
    })(_).forEach((_) => {
      _ != `pending_gifts` && _ != `pending_invites` && (_ += _[_]);
    }),
    _
  );
}
var _ = {
  0: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  1: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  2: {
    rollup_field: `gifts`,
    eFeature: 0,
  },
  3: {
    rollup_field: `comments`,
    eFeature: 2,
  },
  4: {
    rollup_field: `inventory_items`,
    eFeature: 3,
  },
  5: {
    rollup_field: `invites`,
    eFeature: 4,
  },
  6: {
    rollup_field: `major_sale`,
    eFeature: 1,
  },
  7: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  8: {
    rollup_field: `wishlist`,
    eFeature: 1,
  },
  9: {
    rollup_field: `trade_offers`,
    eFeature: 6,
  },
  10: {
    rollup_field: `general`,
    eFeature: 0,
  },
  11: {
    rollup_field: `help_request_replies`,
    eFeature: 0,
  },
  12: {
    rollup_field: `async_game_updates`,
    eFeature: 0,
  },
  14: {
    rollup_field: `moderator_messages`,
    eFeature: 2,
  },
  15: {
    rollup_field: `parental_feature_requests`,
    eFeature: 0,
  },
  16: {
    rollup_field: `family_invites`,
    eFeature: 0,
  },
  17: {
    rollup_field: `family_purchase_requests`,
    eFeature: 0,
  },
  18: {
    rollup_field: `parental_playtime_requests`,
    eFeature: 0,
  },
  19: {
    rollup_field: `family_purchase_request_responses`,
    eFeature: 0,
  },
  20: {
    rollup_field: `parental_feature_access_responses`,
    eFeature: 0,
  },
  21: {
    rollup_field: `parental_playtime_responses`,
    eFeature: 0,
  },
  22: {
    rollup_field: `requested_game_added`,
    eFeature: 0,
  },
  23: {
    rollup_field: void 0,
    eFeature: 0,
  },
  24: {
    rollup_field: void 0,
    eFeature: 0,
  },
  28: {
    rollup_field: `playtest_invites`,
    eFeature: 1,
  },
  29: {
    rollup_field: void 0,
    eFeature: 6,
  },
  30: {
    rollup_field: void 0,
    eFeature: 0,
  },
};
function _(_) {
  let _ = _[_];
  return _(!!_, `Missing notification type data for ${_}`), _;
}
function _(_, _, _) {
  if (!_) return !1;
  let _ = _(_);
  return _(_, _?.eFeature ?? 15, _);
}
function _(_, _, _) {
  _(() => {
    let _ = _(_);
    _?.rollup_field && (_[_.rollup_field] = Math.max(0, _[_.rollup_field] + _));
  });
}
function _(_) {
  return !_.viewed || _.viewed + 600 > _();
}
function _(_) {
  return _.viewed && _.viewed + 172800 < _();
}
function _(_) {
  if (!_) return;
  let _ = typeof _ == `string` ? _ : _.locString,
    _ = typeof _ == `string` ? [] : _.params || [];
  if (_) return _[0] === `#` ? _(_, ..._) : _;
}
function _(_, _) {
  return _.useMemo(() => {
    if (_ === void 0) return null;
    let _ = _(_),
      _ = _(_);
    if (!_ || !_) return null;
    let _ =
        typeof _.displayNameLoc == `function`
          ? _.displayNameLoc(_)
          : {
              locString: _.displayNameLoc,
            },
      _ =
        typeof _.titleLoc == `function`
          ? _.titleLoc(_)
          : {
              locString: _.titleLoc,
            },
      _ =
        typeof _.bodyLoc == `function`
          ? _.bodyLoc(_)
          : {
              locString: _.bodyLoc,
            },
      _ = typeof _.image == `function` ? _.image(_) : _.image,
      _ = typeof _.link == `function` ? _.link(_) : _.link;
    return {
      display_name: _(_),
      title: _(_),
      body: _(_),
      image: _,
      link: _,
    };
  }, [_, _]);
}
function _(_, _) {
  return _.useMemo(() => {
    let _ = _(_),
      _ = _(_);
    if (!_) return null;
    let _ = typeof _.titleLoc == `string` ? _.titleLoc : _.titleLoc(_),
      _ = typeof _.bodyLoc == `string` ? _.bodyLoc : _.bodyLoc(_),
      _ = typeof _.url == `string` ? _.url : _.url(_),
      _ =
        typeof _.steamidAttribute == `string`
          ? _.steamidAttribute
          : _.steamidAttribute(_);
    return {
      strTitleLoc: _,
      strBodyLoc: _,
      strUrl: _,
      steamid: _ && _[_],
    };
  }, [_, _]);
}
function _(_) {
  return _.useMemo(() => (_(_.type) ? _(_) : null), [_]);
}
var _ = `xKH6brPrFV4-`,
  _ = `TGHZjszXouA-`,
  _ = `_6e5Lw2oBEA8-`,
  _ = `WRvk-2z-S7U-`,
  _ = `nvOZwARKtWQ-`,
  _ = `XA47jRZ-kl4-`,
  _ = `_5TOP1rhjK9g-`,
  _ = `cfYT-RvHPnk-`,
  _ = `X7vR4UwyQ10-`,
  _ = `YhW9H-T-Hto-`,
  _ = `uxNRiRH0W-8-`,
  _ = `ts49d7c2wyQ-`,
  _ = `_4wHdhfSncuQ-`,
  _ = `_3GiOMfMgSIk-`,
  _ = `rnSSdvjnnIY-`,
  _ = `PqHuV1F7Sv8-`,
  _ = `YR06jcjcqq0-`,
  _ = `N-3dV6EGIb0-`,
  _ = `_8dzP2cjjs8I-`,
  _ = `_78CF9aUvUeY-`,
  _ = `iq-v-asRRbU-`,
  _ = `BIeyjH0P840-`,
  _ = `rreXhb5OR24-`,
  _ = `ohF5M-dbfvU-`,
  _ = `FSYcqMA13Ys-`,
  _ = `oFu8pAhMtAE-`,
  _ = `dNwwI424aTg-`,
  _ = _();
function _(_) {
  let { onActivate: _, icon: _, body: _, eUIMode: _, classNames: _ } = _,
    _ = _,
    _ = _;
  return (
    _ == 7 ? (_ = _) : _ == 3 && (_ = _),
    (_ = _(_, _)),
    (0, _.jsx)(_, {
      className: _,
      onActivate: _,
      children: (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`span`, {
              className: _,
              children: _,
            }),
            _,
          ],
        }),
      }),
    })
  );
}
function _(_) {
  let {
    count: _,
    icon: _,
    onActivate: _,
    strBody: _,
    bAlwaysShow: _,
    eUIMode: _,
    classNames: _,
    visible: _,
  } = _;
  return !_ && !_
    ? null
    : (0, _.jsx)(_, {
        icon: _,
        body: _,
        onActivate: _,
        eUIMode: _,
        classNames: _,
        visible: _,
      });
}
function _(_) {
  let {
      nUnread: _,
      location: _,
      eUIMode: _,
      bLoading: _,
      footer: _,
      bNewIndicator: _,
    } = _,
    [_, _] = _.useState(+!!_),
    [_, _] = _.useState(void 0);
  _.useEffect(() => {
    _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
  }, [_, _]),
    _.useEffect(() => {
      let _ = window.setTimeout(() => _(0), 2e4);
      return () => window.clearTimeout(_);
    }, []),
    _.useEffect(() => {
      _ && _ > 0 && _ !== `_78CF9aUvUeY-` && _ != 2 && _ != 1
        ? _(_)
        : !_ && _ == `_78CF9aUvUeY-` && _(_);
    }, [_, _, _]);
  let _ = _.onActivate;
  (_ ||= () => console.log(`Missing activate function`)),
    _ == 1 && (_ = void 0);
  let _ = _;
  _ == 4 ? (_ = _) : _ == 2 ? (_ = _) : (_ == 7 || _ == 3) && (_ = _);
  let _ = null;
  if (_ != 0 && _ != 2 && _ != 1) {
    let _ = _ == 2 ? _ : null;
    _ = (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
            (0, _.jsx)(`div`, {
              className: _(_, _),
            }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsxs)(_, {
    onActivate: _,
    className: _,
    onOptionsButton: _.onOptionsButton,
    onOptionsActionDescription: _.onOptionsButtonDesc,
    children: [
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.logo,
          }),
          _.personaStatus &&
            (0, _.jsx)(`div`, {
              className: _(`ZQ9KB1rwRQg-`, _.personaStatus),
            }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.children,
          }),
          _,
          _ &&
            (0, _.jsx)(_, {
              location: _,
            }),
        ],
      }),
      _ || null,
    ],
  });
}
function _(_) {
  let { location: _ } = _;
  return _ == 3
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _(_) {
  let {
      icon: _,
      title: _,
      timestamp: _,
      location: _,
      fnRenderTimestamp: _,
    } = _,
    _ = !!_ && (_ == 3 || _ == 4),
    _;
  return (
    (_ = _ == 4 ? _ : (_ ?? _)),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          icon: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            title: _,
          }),
        _ &&
          _({
            timestamp: _,
          }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_.icon &&
        (0, _.jsx)(`div`, {
          className: `X7vR4UwyQ10-`,
          children: _.icon,
        }),
      ` `,
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.title,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `ho1ru92H8AU-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_, _.multiline && `ho1ru92H8AU-`);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_.timestamp);
  return (
    _(_, _) || (_ = _(_.timestamp, !1, !1, !1) + ` ` + _),
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    })
  );
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_, _) ? _(_.timestamp) : _(_.timestamp, !1, !1, !1);
  return (0, _.jsx)(`div`, {
    className: _,
    children: _,
  });
}
function _(_) {
  return _ == 1;
}
function _(_, _) {
  return _.useCallback(
    (_) => {
      _ && _(_), _ && _();
    },
    [_, _],
  );
}
var _ = `vjeKRorxqWY-`,
  _ = `UWjdKshdhD8-`,
  _ = `RZ1644uUH-k-`,
  _ = `_5LTIC-a3DVw-`,
  _ = `BXKoUPp7c7k-`,
  _ = `kg8VJS07NZk-`,
  _ = `_8zZun04K77E-`,
  _ = `rK6Z0uFfmRo-`;
function _(_) {
  let {
      onActivate: _,
      onDismiss: _,
      logo: _,
      icon: _,
      title: _,
      body: _,
      personaStatus: _,
      className: _,
      singleLineOnly: _,
      fullWidth: _,
      bodySuffix: _,
      bodySuffixToken: _,
    } = _,
    _ = _(_, _);
  return (
    _ &&
      _ &&
      (_ = _(
        _,
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
        (0, _.jsx)(`span`, {
          className: _,
          children: _,
        }),
      )),
    (0, _.jsxs)(_, {
      className: _(_, !_ && !_ && `_5OrWG-2Mx14-`, _),
      onActivate: _,
      onMouseDown: (_) => {
        _.button == 1 && _ && _();
      },
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _.personaStatus &&
          (0, _.jsx)(`div`, {
            className: _(`f0Hsd0awDV4-`, _),
          }),
        (0, _.jsxs)(`div`, {
          className: _(_, _ && `Dcsg7SLpVF8-`),
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                !!_ &&
                  (0, _.jsx)(`div`, {
                    className: `q9vQBNOskjU-`,
                    children: _,
                  }),
                (0, _.jsx)(`div`, {
                  className: _,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _(_, !!_ && `Mx1dwYBxHfo-`),
              children: _,
            }),
          ],
        }),
      ],
    })
  );
}
var _ = `wtEvuR05t3A-`,
  _ = `JxEGxPRLYiU-`,
  _ = `QEIVNNUa9hM-`,
  _ = `GYEm-fQU5e0-`,
  _ = `jkcoKzEvvVE-`,
  _ = `Z-UOt0JU-rA-`;
function _(_) {
  switch (_) {
    case 6:
      return (0, _.jsx)(_, {});
    case 11:
      return (0, _.jsx)(_, {});
    default:
      return (0, _.jsx)(_, {});
  }
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = typeof _?.image == `number`,
    _ = _
      ? {
          appid: _.image,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _?.display_name ?? ``,
    _ = _?.title ?? _?.body,
    _ = _?.title ? _.body : null,
    _ = _(_),
    _ = _ && (!_ || !_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = null;
  if (_) _ = _(_, _, _);
  else {
    let _ = _ ? _ : _;
    _ =
      _?.image && !_
        ? (0, _.jsx)(`img`, {
            className: _,
            src: _.image,
            onError: _,
          })
        : _;
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      displayName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeOffer_Title`),
    _ = _
      ? _(`#SteamNotifications_TradeOffer_Body_Short`, _ ?? ``)
      : _(`#SteamNotifications_TradeOffer_Body`),
    _ = _(`#SteamNotifications_TradeOffer_Description`, _ ?? ``),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
var _ = (_) => {
  let {
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(`#SteamNotifications_TradeReversal_Title`),
    _ = _(
      _
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    _ = _(`#SteamNotifications_TradeReversal_Description`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
};
function _(_) {
  let {
      senderName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _
      ? _(`#Notification_GiftReceived_Body_Short`, _ ?? ``)
      : _(`#Notification_GiftReceived_Body`),
    _ = _ ? _(`#Notification_GiftReceived_Description`, _) : null,
    _ = _(`#Notification_GiftReceived_Title`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      requestorName: _,
      requestorAvatarURL: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = ``;
  _ && _.state == 2
    ? (_ = _(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : _ && _.state == 3
      ? (_ = _(`#SteamNotifications_FriendInvite_Description_Friends`))
      : _ && (_ = _(`#SteamNotifications_FriendInvite_Description`));
  let [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _;
  if (_ && !_) {
    let _ = _.state == 3 && _ != 1,
      _ = _ ? _ : _;
    _ = (0, _.jsxs)(_, {
      style: {
        position: `relative`,
      },
      children: [
        _ &&
          (0, _.jsx)(_, {
            className: `A9KSdbG38mc-`,
          }),
        (0, _.jsx)(`img`, {
          className: _,
          src: _,
          onError: _,
        }),
      ],
    });
  }
  let _ = _ || _(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_FriendInvite_Title`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#Notification_FriendInvite_Title`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      itemState: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      appName: _,
      fnRenderTimestamp: _,
      nUnread: _,
      onHide: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    _ = _(_),
    _ = _;
  if (_?.icon_url && !_) {
    let _ = `${_.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
      _ = _.background_color ? `#` + _.background_color : null,
      _ = _ ? _ : _;
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          backgroundColor: _ ?? void 0,
          justifyContent: `center`,
        },
        src: _,
        onError: _,
      }),
    });
  }
  let _ = _.appid == 753,
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = _ - 1;
    _ = _
      ? _(`#Notification_Item_RollupMore_Steam`, _)
      : _
        ? _(`#Notification_Item_RollupMore_GameName`, _, _)
        : _(`#Notification_Item_RollupMore`, _);
  } else _ && (_ = _ ? _ : _(`#Notification_Item_Single_GameName`, _));
  let _ = _?.name ? _.name : _(`#Notification_Item_Body_Generic`),
    _ = !_;
  if (_) {
    let _ = ``;
    return (
      (_ = _
        ? _(
            _ > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            _,
          )
        : _(`#Notification_Item_Body_Generic`)),
      (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#Notification_ItemAnnouncement_Body`),
        body: _,
      })
    );
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      logo: _,
      bLoading: _,
      ..._,
      children: [
        (0, _.jsx)(_, {
          icon: _,
          title: _(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: _,
          location: _,
          fnRenderTimestamp: _,
        }),
        (0, _.jsx)(_, {
          multiline: !_,
          children: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            children: _,
          }),
        _
          ? (0, _.jsx)(_, {
              onHide: _,
            })
          : null,
      ],
    }),
  });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_),
    _ = ``;
  return (
    _.state == 1
      ? (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Action_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Action`))
      : _.state == 2 &&
        (_ =
          _ && _?.name
            ? _(`#SteamNotification_AsyncGame_Done_Short`, _.name)
            : _(`#SteamNotification_AsyncGame_Done`)),
    _
      ? (0, _.jsx)(_, {
          ..._,
          logo: _,
          icon: _.icon,
          title: _(`#SteamNotification_AsyncGame_Title`),
          body: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            logo: _,
            bLoading: _,
            ..._,
            children: [
              (0, _.jsx)(_, {
                icon: _,
                title: _(`#SteamNotification_AsyncGame_Title`),
                timestamp: _,
                location: _,
                fnRenderTimestamp: _,
              }),
              (0, _.jsx)(_, {
                children: _,
              }),
              (0, _.jsx)(_, {
                children: _?.name,
              }),
              _
                ? (0, _.jsx)(_, {
                    onHide: _,
                  })
                : null,
            ],
          }),
        })
  );
}
function _(_) {
  let {
      title: _,
      body: _,
      logoUrl: _,
      bDataLoading: _,
      icon: _,
      onHide: _,
      location: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onActivate: _,
      personaStatus: _,
    } = _,
    _ = _(_),
    _ = _ ? _ : _,
    _ = (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: (0, _.jsx)(`img`, {
        className: _,
        style: {
          justifyContent: `center`,
        },
        src: _,
      }),
    });
  return _
    ? (0, _.jsx)(_, {
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
        onActivate: _,
        personaStatus: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          onActivate: _,
          personaStatus: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !0,
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      currentUserSteamID: _,
      fallbackLogo: _,
      postedByDisplayName: _,
      postedByAvatarURL: _,
      ownerDisplayName: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      nUnread: _,
      appName: _,
      onHide: _,
      commentTitle: _,
      commentBody: _,
    } = _,
    _ = _,
    _ = _(_),
    [_, _] = _.useState(!1),
    _ = () => _(!0),
    [_, _] = _(_.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0),
    _ = _(_) ? _ : null,
    _ = _(_) ? _ : null;
  _.comment_type == 10
    ? (_ =
        _.owner_steam_id?.ConvertTo64BitString() == _
          ? _ == 4 && _
            ? _(`#SteamNotifications_Comment_Your_Profile_By`, _)
            : _(`#SteamNotifications_Comment_Your_Profile`)
          : _
            ? _ == 4 && _
              ? _(`#SteamNotifications_Comment_Player_Profile_By`, _, _)
              : _(`#SteamNotifications_Comment_Player_Profile`, _)
            : _(`#SteamNotifications_Comment_Profile`))
    : _.comment_type == 5 && _.json_data?.file_type == 5
      ? (_ =
          _.owner_steam_id?.ConvertTo64BitString() == _
            ? _
              ? _(`#SteamNotifications_Comment_Your_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Your_Screenshot`)
            : _
              ? _(`#SteamNotifications_Comment_Screenshot_Game`, _)
              : _(`#SteamNotifications_Comment_Screenshot`))
      : !_ && _.json_data?.title && (_ = _.json_data.title);
  let _ = null;
  _.brate_limited
    ? (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? _(`#SteamNotifications_Comment_RateLimited_Forum`, _)
          : _(`#SteamNotifications_Comment_RateLimited`))
    : (_ =
        _.comment_type == 7 && _.bis_forum && _
          ? (0, _.jsx)(_, {
              children: _(`#SteamNotifications_Comment_NewDiscussion`, _),
            })
          : (0, _.jsxs)(_, {
              children: [`"`, _, `"`],
            }));
  let _ = _(`#SteamNotifications_Comment`),
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = `+` + (_ - 1);
    _ == 4
      ? (_ = (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }))
      : (_ = _ + ` ` + _);
  }
  let _ = _;
  if (!_) {
    let _ = _ ? _ : _;
    if (_ && _(_)) {
      let _ = _.bhas_friend && _ != 1;
      _ = (0, _.jsxs)(`div`, {
        style: {
          position: `relative`,
        },
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: `A9KSdbG38mc-`,
            }),
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            onError: _,
          }),
        ],
      });
    } else
      _?.avatar_medium_url &&
        (_ = (0, _.jsx)(`img`, {
          className: _,
          src: _.avatar_medium_url,
          onError: _,
        }));
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _,
            _,
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _.appid
      ? {
          appid: _.appid,
        }
      : void 0,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(_, _, _),
    _ = _ && (!_ || !_ || !_),
    _ = ``,
    _ = null;
  if (_) {
    let _ = _.name ?? ``;
    (_ = _),
      _.count == 1
        ? _
          ? (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, _.jsx)(`span`, {
                children: _,
              }),
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
          : (_ = _(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, _.jsx)(`bdi`, {
                dir: `ltr`,
                style: {
                  color: `#FFFFFF`,
                },
                children: _?.formatted_final_price,
              }),
            ))
        : _.count == 2
          ? _
            ? (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, _))
            : (_ = _(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : _
            ? (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                _,
                _.count - 1,
              ))
            : (_ = _(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                _.count - 1,
              ));
  } else _ = _(`#SteamNotifications_Wishlist_Generic`);
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _(`#SteamNotifications_Wishlist`),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _(`#SteamNotifications_Wishlist`),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_, _, _ = !1) {
  let [_, _] = _.useState(!1),
    _ = () => _(!0);
  if (!_ || _)
    return (0, _.jsx)(_, {
      style: {
        position: `relative`,
      },
      children: _,
    });
  let _ = _(_, `community_icon`);
  return _
    ? (0, _.jsx)(_, {
        style: {
          position: `relative`,
        },
        children: (0, _.jsx)(`img`, {
          src: _,
          className: _,
          onError: _,
        }),
      })
    : (0, _.jsxs)(_, {
        style: {
          position: `relative`,
        },
        children: [
          (0, _.jsx)(`img`, {
            className: _(_),
            src: _,
            onError: _,
          }),
          (0, _.jsx)(`img`, {
            src: _,
            onError: _,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    onClick: (_) => {
      _.onHide(), _.stopPropagation(), _.preventDefault();
    },
    onMouseDown: (_) => {
      _.stopPropagation(), _.preventDefault();
    },
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.children,
  });
}
var _ = null,
  _ = !1;
function _() {
  return (
    (_ ||= new _({
      BIsFriend: _(),
    })),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(() => _().m_bInitialized);
  return (
    !_ && !_ && ((_ = !0), _.Init(_.accountid, _, _).finally(() => (_ = !1))),
    [_, _]
  );
}
function _(_) {
  let _ = null;
  return _(_) ? (_ = _) : _(_) ? (_ = _) : _[_] && (_ = _[_]), _;
}
function _(_) {
  let { rollup: _, uimode: _, location: _ } = _,
    _ = _(_.type);
  return _
    ? (0, _.jsx)(_, {
        controller: `notification`,
        method: _(_),
        submethod: _(_),
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_.item.notification_type, _.item.body_data),
    _ = _(_.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    _ = _(_?.link ?? `#`, _);
  return (0, _.jsx)(`a`, {
    href: _?.link ? _ : `#`,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      icon: _(_.type),
      onActivate: () =>
        _(() => {
          _?.link && _ && window.location.assign(_);
        }, _.item),
      fallbackLogo: (0, _.jsx)(_, {}),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/gamenotifications/`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      steamid: _,
      url: _,
      strTitleLoc: _,
      strBodyLoc: _,
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    { data: _ } = _(_),
    _ = (_) => _(() => {}, _.item, _),
    _ = () => _(() => window.location.assign(_), _.item);
  if (!_) return null;
  let _ = !_,
    _ = _(_, _?.m_strPlayerName ?? ``),
    _ = _(_, _?.m_strPlayerName ?? ``);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let _ = _(_.rollup.type, _.rollup.item.body_data);
  if (!_) return null;
  let { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        steamid: _,
        url: _,
        strTitleLoc: _,
        strBodyLoc: _,
        ..._,
      });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      displayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
var _ = (_) => {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
};
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    _ = _.InitFromAccountID(_, _.EUNIVERSE),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      senderName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _(_.responder_steamid),
    _ =
      _.package_id > 0
        ? {
            packageid: _.package_id,
          }
        : {
            bundleid: _.bundle_id,
          },
    { data: _ } = _(_),
    _ = _ ? `app/${_.appid}` : ``,
    _ = `${_.STORE_BASE_URL}${_}`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = !_ || !_,
    _ = _(`#SteamNotifications_RequestedGameAddedTitle`),
    _ = _ ? _(`#SteamNotifications_RequestedGameAddedBody`, _.name ?? ``) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(_.item, _, _),
    _ = _(_),
    { data: _ } = _(
      _?.appid
        ? {
            appid: _.appid,
          }
        : void 0,
    ),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory`;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      appName: _?.name,
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      itemState: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    { data: _ } = _(_.requestorID);
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      requestorAvatarURL: _?.avatar_url_medium,
      requestorName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _.COMMUNITY_BASE_URL + _.url,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => {
      _(() => {}, _.item, _);
    },
    _ = _(_) ? _?.account_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _(_) ? _?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _.json_data?.app_id
      ? {
          appid: _.json_data?.app_id,
        }
      : void 0,
    { data: _ } = _(_),
    [_, _] = _(),
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.title) : ``,
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment) : ``;
  return (0, _.jsx)(`a`, {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      currentUserSteamID: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      postedByAvatarURL: _?.avatar_url_medium,
      postedByDisplayName: _?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      appName: _?.name,
      onHide: _,
      commentTitle: _,
      commentBody: _,
      bLoading: !_,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _({
      appid: _.appid,
    }),
    [_, _] = (0, _.useState)(``),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_.count > 1 && _.appids?.length)
        return _(
          _.STORE_BASE_URL +
            `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
        );
      if (_) return _(_.STORE_BASE_URL + _.store_url_path);
      let _ = _.appid ? `?appid=${_.appid}` : ``;
      _(_.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
    }, [_, _, _]),
    (0, _.jsx)(`a`, {
      href: _,
      onMouseDown: (_) => _(() => {}, _.item, _),
      children: (0, _.jsx)(_, {
        fallbackLogo: (0, _.jsx)(_, {}),
        icon: (0, _.jsx)(_, {}),
        onActivate: () => _(() => window.location.assign(_), _.item),
        location: _,
        data: _,
        timestamp: _.timestamp,
        nUnread: _.rgunread.length,
        eUIMode: _,
        bNewIndicator: _(_.item),
        onHide: _,
      }),
    })
  );
}
function _(_) {
  let { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
    _ = _(_);
  return !_ || _
    ? null
    : (0, _.jsx)(`a`, {
        href: _,
        className: _,
        children: (0, _.jsx)(_, {
          icon: (0, _.jsx)(_, {}),
          count: _,
          onActivate: () => window.location.assign(_),
          strBody: _,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var _ = {
  3: _,
  8: _,
  5: _,
  4: _,
  2: _,
  9: _,
  12: _,
  22: _,
  29: _,
};
export { _, _, _, _, _, _, _, _, _, _, _ };
