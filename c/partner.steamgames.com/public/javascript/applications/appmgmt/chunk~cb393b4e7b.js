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
} from "./chunk~de7f2df91c.js";
import { _, _, _, _, _, _ } from "./chunk~25a6634263.js";
import { _, _, _, _, _, _, _ } from "./chunk~1fa4b8f2ff.js";
import "./chunk~44f252525d.js";
import { _ } from "./chunk~8fb30ea08b.js";
import { _ } from "./chunk~ede3e357a2.js";
import { _, _, _ } from "./chunk~360b8fa68b.js";
import { _ } from "./chunk~f4e4ed5c17.js";
import { _ } from "./chunk~92931c6310.js";
import { _ } from "./chunk~c55709d290.js";
import { _, _ } from "./chunk~e867464c75.js";
import { _, _ } from "./chunk~0111fcd096.js";
import "./chunk~a6b9ae1345.js";
import { _ } from "./chunk~0278ae6236.js";
import { _ } from "./chunk~3ee5188744.js";
import { _ } from "./chunk~90fbfc6dc2.js";
import "./chunk~8c0cff8a60.js";
function _(_) {
  if (_?.jsondata?.rtime_discount_intent) return !!_.no_planned_discount;
}
function _(_) {
  if (!_?.jsondata?.rtime_ask_again) return;
  let _ = Number(_.jsondata.ask_again_season),
    _ = Number(_.jsondata.ask_again_year);
  return !(_ >= 1 && _ <= 4) || !(_ > 0)
    ? null
    : {
        season: _,
        year: _,
      };
}
function _(_, _) {
  return {
    opt_in_name: _,
    opt_in: !1,
    appid: _,
    jsondata: {
      opt_in_name: _,
      opt_in: !1,
    },
  };
}
function _(_) {
  return !!(_?.pruned && _.jsondata?.pruned_reason === `released`);
}
function _(_) {
  return !!(_?.pruned && _.jsondata?.pruned_reason === `mod`);
}
function _(_, _, _) {
  let _ = _?.find((_) => _.section_id == _),
    _ = (Array.isArray(_?.list_selection) ? _.list_selection : []).find(
      (_) => _.list_id == _,
    )?.selected_item_id;
  return _ && _.length > 0 && _[0] != null ? _ : [];
}
function _(_, _, _, _) {
  let _ = (_ ?? []).filter((_) => _.section_id != _),
    _ = _?.find((_) => _.section_id == _),
    _ = Array.isArray(_?.list_selection) ? _.list_selection : [];
  return (
    _.push({
      ..._,
      section_id: _,
      list_selection: [
        ..._.filter((_) => _.list_id != _),
        {
          list_id: _,
          selected_item_id: [..._],
        },
      ],
    }),
    _
  );
}
var _ = _(_()),
  _ = _(_()),
  _ = _(_()),
  _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.packageids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            packageids: {
              _: 1,
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
      return `CPublishing_GetPartnerPaidGivenPackageList_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.paid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            paid: {
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
      return `CPublishing_GetPartnerPaidGivenPackageList_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            packageid: {
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
      return `CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            targeting_flag: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            settings_flag: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            email_templates: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            start_rtime: {
              _: 5,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_rtime: {
              _: 6,
              _: 0,
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
      return `CPublishing_CreatePartnerAppOptInEmail_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
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
      return `CPublishing_CreatePartnerAppOptInEmail_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            targeting_flag: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            settings_flag: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            email_templates: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            start_rtime: {
              _: 5,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_rtime: {
              _: 6,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reviewed: {
              _: 7,
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
      return `CPublishing_UpdatePartnerAppOptInEmail_Request`;
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
      return `CPublishing_UpdatePartnerAppOptInEmail_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accounts_examined || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accounts_examined: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accounts_emailed: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accounts_not_emailed_opted_out: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accounts_email_failed: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            completed: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            rt_last_updated: {
              _: 6,
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
      return `CPartnerAppOptInEmailStats`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            force_resend: {
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
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
              _: 1,
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
      return `CPublishing_SendPartnerAppOptInEmailAndWait_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            targeting_flag: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            settings_flag: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            email_templates: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            start_rtime: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_rtime: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            stats: {
              _: 7,
              _: _,
            },
            creator_accountid: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            create_time: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_update_time: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            email_def_id: {
              _: 11,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            completed: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            aborted: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            deleted: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            reviewed: {
              _: 15,
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
      return `CPartnerAppOptInEmailDef`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
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
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.defs || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            defs: {
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
      return `CPublishing_GetPartnerAppOptInEmailDefAndStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
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
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.stats || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            stats: {
              _: 1,
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
      return `CPublishing_GetEstimatePartnerAppOptInEmail_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            partnerid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            language_override: {
              _: 4,
              _: 0,
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
      return `CPublishing_TestFirePartnerAppOptInEmail_Request`;
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
      return `CPublishing_TestFirePartnerAppOptInEmail_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            partnerid: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            rtime_notified: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            ignored_unverified_email: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            ignored_email_optout: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            status: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            send_rtime: {
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
      return `CPartnerOptInEmailTracking`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
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
      return `CPublishing_GetOptInEmailTracking_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.email_def_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email_def_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            results: {
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
      return `CPublishing_GetOptInEmailTracking_Response`;
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
            opt_in: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_in_name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            jsondata: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 5,
              _: _.readEnum,
              _: _.writeEnum,
            },
            accountid_add: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_opted_in: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_updated: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_lastmod: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invited: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            accountid_remove: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_opted_out: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            pruned: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            accountid_prune: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_pruned: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            additional_featuring: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            feature_day: {
              _: 17,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_invited: {
              _: 18,
              _: _.readUint32,
              _: _.writeUint32,
            },
            no_planned_discount: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            pending_review: {
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appeal_state: {
              _: 21,
              _: _.readEnum,
              _: _.writeEnum,
            },
            accountid_appeal: {
              _: 22,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_appeal_decision: {
              _: 23,
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
      return `CPartnerAppOptInData`;
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
            opt_in_name: {
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
      return `CPublishing_GetSinglePartnerAppOptIns_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            data: {
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
      return `CPublishing_GetSinglePartnerAppOptIns_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            additional_featuring: {
              _: 2,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_in_name: {
              _: 3,
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
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appids: {
              _: 1,
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
      return `CPublishing_SetFeaturingOnPartnerAppOptIn_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_id: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opt_in_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            type: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            active: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            start_date: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            end_date: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            jsondata: {
              _: 6,
              _: _.readString,
              _: _.writeString,
            },
            last_modified_time: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_modifier_accountid: {
              _: 9,
              _: _.readUint32,
              _: _.writeUint32,
            },
            is_next_fest: {
              _: 10,
              _: _.readBool,
              _: _.writeBool,
            },
            next_fest_out_of_sync: {
              _: 11,
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
      return `COptInDef`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            start: {
              _: 2,
              _: 0,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 3,
              _: 20,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_json: {
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
      return `CPublishing_GetOptInHistoryInternal_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_ins || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_ins: {
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
      return `CPublishing_GetOptInHistoryInternal_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
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
      return `CPublishing_GetPartnerAppOptInsIDs_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opted_in_appids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opted_in_appids: {
              _: 1,
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
      return `CPublishing_GetPartnerAppOptInsIDs_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_names || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_names: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
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
      return `CPublishing_GetOptInAppealsSummaryStats_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            summary: {
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
      return `CPublishing_GetOptInAppealsSummaryStats_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.opt_in_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_in_name: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            open_appeals: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            reject_appeals: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accepted_appeals: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            appeal_account_id: {
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
      return `CPublishing_GetOptInAppealsSummaryStats_Response_CSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.inviteid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            inviteid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            accountid_sender: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            email: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            real_name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            note: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            time_sent: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            current_state: {
              _: 7,
              _: _.readEnum,
              _: _.writeEnum,
            },
            pub_rights: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            app_rights: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_receiver_responded: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid: {
              _: 11,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_partner_responded: {
              _: 12,
              _: _.readUint32,
              _: _.writeUint32,
            },
            accountid_partner: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            partnerid: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_last_updated: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            sender_ip: {
              _: 16,
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
      return `MembershipInvite`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.partnerid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            partnerid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filter_states: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readEnum,
              pbr: _.readPackedEnum,
              _: _.writeRepeatedEnum,
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
      return `CPartnerMembershipInvite_GetInvites_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.invites || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invites: {
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
      return `CPartnerMembershipInvite_GetInvites_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`Publishing.GetSinglePartnerAppOptIn#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSinglePartnerAppOptIn = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.SetFeaturingOnPartnerAppOptIn#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.SetFeaturingOnPartnerAppOptIn = _;
  function _(_, _, _) {
    return _.SendMsg(`Publishing.GetOptInHistoryInternal#1`, _(_, _, _), _, {
      ePrivilege: 4,
    });
  }
  _.GetOptInHistoryInternal = _;
  function _(_, _, _) {
    return _.SendMsg(`Publishing.GetPartnerAppOptInsIDs#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetPartnerAppOptInsIDs = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.GetOptInAppealsSummaryStats#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetOptInAppealsSummaryStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.CreatePartnerAppOptInEmails#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.CreatePartnerAppOptInEmails = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.UpdatePartnerAppOptInEmails#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.UpdatePartnerAppOptInEmails = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.SendPartnerOptInEmailAndWait#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.SendPartnerOptInEmailAndWait = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.GetPartnerAppOptInEmailDefAndStats#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetPartnerAppOptInEmailDefAndStats = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.GetEstimatePartnerAppOptInEmail#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetEstimatePartnerAppOptInEmail = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.TestFirePartnerAppOptInEmail#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.TestFirePartnerAppOptInEmail = _;
  function _(_, _, _) {
    return _.SendMsg(`Publishing.GetOptInEmailTracking#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetOptInEmailTracking = _;
  function _(_, _, _) {
    return _.SendMsg(
      `Publishing.GetPartnerPaidGivenPackageList#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
      },
    );
  }
  _.GetPartnerPaidGivenPackageList = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`PartnerMembershipInvite.GetInvites#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 11,
    });
  }
  _.GetInvites = _;
})((_ ||= {}));
var _ = class _ {
  m_mapPackageDiscountsById = new Map();
  m_mapDiscountCallbackList = new Map();
  m_mapPackageDiscountsByPackageId = new Map();
  m_mapPackageCallbackList = new Map();
  m_mapPackageDiscountsByDiscountEventId = new Map();
  m_mapDiscountEventCallbackList = new Map();
  m_allDiscountCallbackList = new _();
  m_mapMaxDiscountPercentageByPackageId = new Map();
  m_mapExistingPackageRequests = new Map();
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  constructor() {}
  Init() {
    let _ = _(`package_discounts`, `application_config`);
    this.BIsDiscountPayloadValid(_) && this.InternalAddDiscounts(_);
    let _ = _(`max_discount_percentages`, `application_config`);
    if (this.BIsMaxDiscountPayloadValid(_))
      for (let _ in _)
        this.m_mapMaxDiscountPercentageByPackageId.set(Number(_), _[_]);
  }
  InternalAddDiscounts(_, _) {
    let _ = new Set(),
      _ = new Set();
    for (let _ of _)
      (_.discountEventID?.length || (_.discountEventID = _(_)),
        this.m_mapPackageDiscountsById.set(_.nDiscountID, _),
        this.GetCallbackListForDiscount(_.nDiscountID).Dispatch(_),
        this.m_mapPackageDiscountsByPackageId.has(_.packageID) ||
          this.m_mapPackageDiscountsByPackageId.set(_.packageID, new Map()),
        this.m_mapPackageDiscountsByPackageId
          .get(_.packageID)
          .set(_.nDiscountID, _),
        _.add(_.packageID),
        this.m_mapPackageDiscountsByDiscountEventId.has(_.discountEventID) ||
          this.m_mapPackageDiscountsByDiscountEventId.set(
            _.discountEventID,
            new Map(),
          ),
        this.m_mapPackageDiscountsByDiscountEventId
          .get(_.discountEventID)
          .set(_.nDiscountID, _),
        _.add(_.discountEventID));
    for (let _ of _ ?? [])
      (this.m_mapPackageDiscountsByPackageId.has(_) ||
        this.m_mapPackageDiscountsByPackageId.set(_, new Map()),
        _.add(_));
    (_.forEach((_) =>
      this.GetCallbackListForPackage(_).Dispatch(
        this.GetAllDiscountsForPackage(_),
      ),
    ),
      _.forEach((_) =>
        this.GetCallbackListForDiscountEvent(_).Dispatch(
          this.GetAllDiscountsForDiscountEvent(_),
        ),
      ),
      this.GetGlobalCallbackList().Dispatch(
        this.GetAllDiscountsForAllPackages(),
      ));
  }
  InternalDeleteDiscount(_, _, _) {
    (this.m_mapPackageDiscountsById.delete(_),
      this.m_mapPackageDiscountsByPackageId.get(_)?.delete(_),
      this.m_mapPackageDiscountsByDiscountEventId.get(_)?.delete(_),
      this.GetCallbackListForDiscount(_).Dispatch(null),
      this.GetCallbackListForPackage(_).Dispatch(
        this.GetAllDiscountsForPackage(_),
      ),
      this.GetCallbackListForDiscountEvent(_).Dispatch(
        this.GetAllDiscountsForDiscountEvent(_),
      ),
      this.GetGlobalCallbackList().Dispatch(
        this.GetAllDiscountsForAllPackages(),
      ));
  }
  BIsDiscountPayloadValid(_) {
    let _ = _;
    if (_ && Array.isArray(_)) {
      if (_.length == 0) return !0;
      let _ = _[0];
      if (
        _.nDiscountID &&
        typeof _.nDiscountID == `number` &&
        _.packageID &&
        typeof _.packageID == `number`
      )
        return !0;
    }
    return !1;
  }
  BIsMaxDiscountPayloadValid(_) {
    let _ = _;
    if (_ && typeof _ == `object`) {
      for (let _ in _)
        if (isNaN(parseInt(_)) || (_[_] !== null && typeof _[_] != `number`))
          return !1;
      return !0;
    }
    return !1;
  }
  async LoadPackageDiscounts(_, _, _ = 0) {
    let _ = _(_).sort().join(`,`);
    return (
      this.m_mapExistingPackageRequests.has(_) ||
        this.m_mapExistingPackageRequests.set(
          _,
          this.InternalLoadPackageDiscounts(_, _, _),
        ),
      this.m_mapExistingPackageRequests.get(_)
    );
  }
  async InternalLoadPackageDiscounts(_, _, _ = 0) {
    let _ = new Set();
    for (let _ of _)
      !this.m_mapPackageDiscountsByPackageId.has(_) && _ != 0 && _.add(_);
    let _ = Array.from(_).sort();
    if (_.length == 0) return 1;
    let _ = null,
      _ = new Promise((_, _) => {
        _ = _;
      }),
      _ = _(`publisherid`, `application_config`),
      _ = null,
      _ = null;
    try {
      let _ = [],
        _ = [];
      for (; _.length > 0;) {
        let _ = _.splice(0, 50);
        (_.push(_), _.push(this.LoadPackageDiscountsFromPHP(_, _, _, _)));
      }
      let _ = await Promise.all(_),
        _ = [];
      for (let _ of _)
        if (
          ((_ = _.unshift()),
          _?.status == 200 && _.data?.success == 1 && _.data.discounts)
        )
          _.data.discounts.forEach((_) => _.push(_));
        else {
          _ = {
            response: _,
          };
          break;
        }
      _ ?? this.InternalAddDiscounts(_, Array.from(_));
    } catch (_) {
      _ = _;
    }
    if (_ == null) _(1);
    else {
      let _ = _(_);
      (console.error(
        `Could not load Discounts for packages`,
        _,
        _.strErrorMsg,
        _,
      ),
        _(_?.response?.data?.success ?? 2));
    }
    return _;
  }
  async LoadPackageDiscountsFromPHP(_, _, _, _ = 0) {
    let _ = {
        packageids: _.join(`,`),
        origin: self.origin,
      },
      _ =
        _.PARTNER_BASE_URL + `promotion/discounts/ajaxgetpackagediscounts/` + _,
      _,
      _ = 3;
    for (; _-- > 0;)
      try {
        if (
          ((_ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
            cancelToken: _?.token,
            timeout: _,
          })),
          _?.status == 200 && _.data?.success == 1 && _.data.discounts)
        )
          return _;
      } catch (_) {
        if (_ == 0) throw _;
        console.error(_);
      }
    return _;
  }
  async SaveDiscountToServer(_, _) {
    let _ = _.PARTNER_BASE_URL + `packages/createoreditdiscount/` + _.packageID,
      _ = new FormData();
    (_.append(`sessionid`, _()),
      _.nDiscountID && _.append(`id`, _.nDiscountID.toString()),
      _.append(`name`, _.strDiscountName),
      _.append(`description`, _.strDiscountDescription),
      _.discountEventID &&
        !_(_.discountEventID) &&
        _.append(`type`, _.discountEventID),
      _.append(`percent`, _.nDiscountPct.toString()),
      _.append(`start_date`, new Date(_.rtStartDate * 1e3).toISOString()),
      _.append(`end_date`, new Date(_.rtEndDate * 1e3).toISOString()));
    let _ = null;
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
        cancelToken: _?.token,
      });
      if (
        ((_.data.msg = _.data.msg ?? _.data.message),
        _?.status == 200 && _.data?.success == 1 && _.data.discountid)
      )
        return (
          (_.bChangedLocally = !1),
          (_.nDiscountID = _.data.discountid),
          (_.nDiscountPct = _.data.percentage),
          this.InternalAddDiscounts([_]),
          _.data
        );
      _ = {
        response: _,
      };
    } catch (_) {
      _ = _;
    }
    let _ = _(_);
    return (
      console.error(
        `CPackageDiscountStore.SaveDiscountToServer: failed`,
        _.strErrorMsg,
        _,
      ),
      _?.response?.data ?? {
        success: 2,
      }
    );
  }
  async DeleteDiscountOnServer(_, _, _, _) {
    let _ = _.PARTNER_BASE_URL + `packages/removepackagediscount/` + _,
      _ = new FormData();
    (_.append(`sessionid`, _()), _.append(`discountid`, _.toString()));
    let _ = null;
    try {
      let _ = await _.default.post(_, _, {
        withCredentials: !0,
        cancelToken: _?.token,
      });
      if (_?.status == 200 && _.data?.success == 1)
        return (this.InternalDeleteDiscount(_, _, _), _.data);
      _ = {
        response: _,
      };
    } catch (_) {
      _ = _;
    }
    let _ = _(_);
    return (
      console.error(
        `CPackageDiscountStore.DeleteDiscountOnServer: failed`,
        _.strErrorMsg,
        _,
      ),
      _?.response?.data ?? {
        success: 2,
      }
    );
  }
  GetCallbackListForDiscount(_) {
    return (
      this.m_mapDiscountCallbackList.has(_) ||
        this.m_mapDiscountCallbackList.set(_, new _()),
      this.m_mapDiscountCallbackList.get(_)
    );
  }
  GetCallbackListForPackage(_) {
    return (
      this.m_mapPackageCallbackList.has(_) ||
        this.m_mapPackageCallbackList.set(_, new _()),
      this.m_mapPackageCallbackList.get(_)
    );
  }
  GetCallbackListForDiscountEvent(_) {
    return (
      this.m_mapDiscountEventCallbackList.has(_) ||
        this.m_mapDiscountEventCallbackList.set(_, new _()),
      this.m_mapDiscountEventCallbackList.get(_)
    );
  }
  GetGlobalCallbackList() {
    return this.m_allDiscountCallbackList;
  }
  GetDiscountByID(_) {
    return this.m_mapPackageDiscountsById.get(_);
  }
  GetAllDiscountsForPackage(_) {
    return this.m_mapPackageDiscountsByPackageId.has(_)
      ? Array.from(this.m_mapPackageDiscountsByPackageId.get(_)?.values() ?? [])
      : null;
  }
  GetAllDiscountsForAllPackages() {
    return Array.from(this.m_mapPackageDiscountsById.values());
  }
  GetAllDiscountsForDiscountEvent(_) {
    return Array.from(
      this.m_mapPackageDiscountsByDiscountEventId.get(_)?.values() ?? [],
    );
  }
  GetMaxDiscountPercentage(_) {
    return this.m_mapMaxDiscountPercentageByPackageId.get(_) ?? 95;
  }
  GetMaxDiscountPercentageForGroup(_) {
    let _ = _.map((_) => this.GetMaxDiscountPercentage(_));
    return Math.min(..._);
  }
};
function _(_) {
  return `custom-event-${_.rtStartDate}-${_.rtEndDate}-${_(_.strDiscountName)}`;
}
function _(_) {
  return _.startsWith(`custom-event-`);
}
function _(_) {
  return _.Get().GetDiscountByID(_);
}
function _(_) {
  return _.Get().GetAllDiscountsForDiscountEvent(_);
}
function _(_) {
  return _.Get().GetAllDiscountsForPackage(_);
}
function _(_) {
  return _.Get().GetCallbackListForPackage(_);
}
function _() {
  return _.Get().GetAllDiscountsForAllPackages();
}
function _() {
  return _.Get().GetGlobalCallbackList();
}
function _() {
  return _.useCallback((_, _, _) => _.Get().LoadPackageDiscounts(_, _, _), []);
}
function _() {
  let _ = (_) => _.Get().SaveDiscountToServer(_),
    _ = (_, _, _) => _.Get().DeleteDiscountOnServer(_, _, _);
  return _.useMemo(
    () => ({
      fnSaveDiscount: _,
      fnDeleteDiscount: _,
    }),
    [],
  );
}
function _(_) {
  return new Map(Array.from(_.map((_) => [_, _.Get().GetDiscountByID(_)])));
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(_.Get().GetAllDiscountsForPackage(_));
  return (
    _(_.Get().GetCallbackListForPackage(_), _),
    _.useMemo(() => {
      let _ = null;
      if (_ == null)
        return {
          deepestDiscount: _,
          bLoading: !0,
        };
      if (_?.length > 0)
        for (let _ of _)
          _.rtEndDate > _ ||
            _.nDiscountPct <= 0 ||
            ((_ == null ||
              _.nDiscountPct > _.nDiscountPct ||
              (_.nDiscountPct == _.nDiscountPct &&
                _.rtEndDate > _.rtEndDate)) &&
              (_ = _));
      return {
        deepestDiscount: _,
        bLoading: !1,
      };
    }, [_, _, _])
  );
}
function _(_) {
  let _ = _();
  if (!_) return null;
  let _ = null;
  return (
    _.forEach((_) => {
      let _ = _.Get().GetAllDiscountsForPackage(_);
      if (_?.length > 0)
        for (let _ of _)
          _.rtEndDate > _ ||
            _.nDiscountPct <= 0 ||
            ((_ == null ||
              _.nDiscountPct > _.nDiscountPct ||
              (_.nDiscountPct == _.nDiscountPct &&
                _.rtEndDate > _.rtEndDate)) &&
              (_ = _));
    }),
    _
  );
}
function _(_, _, _) {
  let [_, _] = (0, _.useState)(),
    [_, _] = (0, _.useState)([]);
  return (
    (0, _.useEffect)(() => {
      if (_ < _ && _?.length > 0) {
        let _ = [],
          _ = [],
          _ = [];
        for (let _ = _; _ < _; _ += _.PerDay) (_.push(_), _.push(!1));
        (_.forEach((_) => {
          let _ = _.Get().GetAllDiscountsForPackage(_);
          if (_?.length > 0)
            for (let _ of _)
              _.rtStartDate > _ ||
                _.rtEndDate < _ ||
                (_.push(_),
                _.forEach((_, _) => {
                  _ < _.rtEndDate &&
                    _.rtStartDate < _ + _.PerDay &&
                    (_[_] = !0);
                }));
        }),
          _(_),
          _(_.filter((_) => _ === !0).length));
      } else _(0);
    }, [_, _, _]),
    {
      nDaysInDiscount: _,
      rgDiscountWithOverlap: _,
    }
  );
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(_.Get().GetAllDiscountsForAllPackages());
  return (
    _(_.Get().GetGlobalCallbackList(), _),
    _.useMemo(() => {
      let _ = null;
      if (_ == null)
        return {
          mostRecentDiscount: _,
          bLoading: !0,
        };
      for (let _ of _) {
        let _ = _.Get().GetAllDiscountsForPackage(_) ?? [];
        for (let _ of _)
          _.rtStartDate &&
            _.rtEndDate &&
            _.nDiscountPct &&
            _.rtStartDate < _ &&
            (!_ || _.rtEndDate < _.rtEndDate) &&
            (_ = _);
      }
      return {
        mostRecentDiscount: _,
        bLoading: !1,
      };
    }, [_, _, _])
  );
}
function _(_) {
  let [_, _] = _.useState(_.Get().GetAllDiscountsForDiscountEvent(_));
  return (_(_.Get().GetCallbackListForDiscountEvent(_), _), _);
}
function _(_) {
  let [_, _] = _.useState(_.Get().GetAllDiscountsForPackage(_));
  _(_.Get().GetCallbackListForPackage(_), _);
  let [_, _] = _.useState(!1),
    _ = _();
  return (
    _.useEffect(() => {
      if (_ || !_) _ || _(!0);
      else if (!_ && _) {
        let _ = _.default.CancelToken.source();
        _([_]).then(() => {
          _.token.reason || _(!0);
        });
      }
    }, [_, _, _, _, _]),
    _
  );
}
function _(_) {
  return _.Get().GetMaxDiscountPercentage(_);
}
function _(_) {
  return _.some(
    (_) => _.nDiscountPct > _.Get().GetMaxDiscountPercentage(_.packageID),
  );
}
function _(_) {
  return _.Get().GetMaxDiscountPercentageForGroup(_);
}
var _ = `SaleEvent_DurationDiscount_Tooltip`,
  _ = `discount`,
  _ = `proximity`,
  _ = `unique`,
  _ = class _ {
    m_mapDiscountEvents = new Map();
    m_discountEventsListCallback = new _();
    m_mapDiscountEventCallback = new Map();
    m_mapAppList = new Map();
    m_mapAppListCallback = new Map();
    m_bLoadedViaInitOrFullLoad = !1;
    m_bLoadEventsRequestInFlight = !1;
    m_mapInflightDiscountLoadRequest = new Map();
    m_mapInflightDiscountAndAppListLoadRequest = new Map();
    GetFutureDiscountEvents() {
      let _ = _();
      return Array.from(_.Get().m_mapDiscountEvents.values()).filter(
        (_) => _.end_date > _,
      );
    }
    GetAllDiscountEvents() {
      return Array.from(_.Get().m_mapDiscountEvents.values());
    }
    GetDiscountEventListCallback() {
      return this.m_discountEventsListCallback;
    }
    BLoadedViaInitOrFullLoad() {
      return this.m_bLoadedViaInitOrFullLoad;
    }
    GetDiscountEvent(_) {
      return this.m_mapDiscountEvents.get(_);
    }
    GetAppList(_) {
      return this.m_mapAppList.get(_);
    }
    GetDiscountEventCallback(_) {
      return (
        this.m_mapDiscountEventCallback.has(_) ||
          this.m_mapDiscountEventCallback.set(_, new _()),
        this.m_mapDiscountEventCallback.get(_)
      );
    }
    GetAppListCallback(_) {
      return (
        this.m_mapAppListCallback.has(_) ||
          this.m_mapAppListCallback.set(_, new _()),
        this.m_mapAppListCallback.get(_)
      );
    }
    async LoadAllDiscountEvents(_, _) {
      if (this.m_bLoadEventsRequestInFlight) return 29;
      let _ =
          _.PARTNER_BASE_URL +
          `promotion/discounts/ajaxgetalldiscountevents/` +
          _,
        _ = {},
        _ = null;
      try {
        this.m_bLoadEventsRequestInFlight = !0;
        let _ = await _.default.get(_, {
          params: _,
          cancelToken: _?.token,
        });
        if (
          ((this.m_bLoadEventsRequestInFlight = !1),
          _?.status == 200 && _.data?.success == 1 && _.data.events)
        ) {
          for (let _ of _.data.events) this.m_mapDiscountEvents.set(_._, _);
          return (
            (this.m_bLoadedViaInitOrFullLoad = !0),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            1
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(`Could not load Discount Events`, _.strErrorMsg, _),
        _?.response?.data?.success ?? 2
      );
    }
    async CreateDiscountEvent(_, _, _, _, _, _, _, _) {
      let _ =
          _.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`name`, _),
        _.append(`start_time`, _.toString()),
        _.append(`end_time`, _.toString()),
        _.append(`strJSONDiscountInfo`, _(_, _, _, _, _)));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1 && _.data.eventid) {
          let _ = {
            _: _.data.eventid,
            name: _,
            start_date: _,
            end_date: _,
            appids: _,
            publisherids: _,
            description: _,
            collision_type: _,
            event: `1`,
            header: _,
            tooltip: _,
            type: _,
            prevent_weeklong: ``,
          };
          return (
            this.m_mapDiscountEvents.set(_._, _),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            _
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(
          `CDiscountEventStore.CreateDiscountEvent: failed`,
          _.strErrorMsg,
          _,
        ),
        null
      );
    }
    async UpdateDiscountEventPublisherAndAppList(_, _, _, _) {
      let _ = this.m_mapDiscountEvents.get(_);
      if (!_)
        return (
          console.error(
            `UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded`,
            _,
          ),
          null
        );
      let _ =
          _.PARTNER_BASE_URL + `promotion/discounts/ajaxupdatediscountevent`,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`start_time`, _.start_date.toString()),
        _.append(`end_time`, _.end_date.toString()),
        _.append(`strJSONDiscountInfo`, _(_, _, _, _)));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1 && _.data.eventid) {
          let _ = {
            ..._,
            appids: _,
            publisherids: _,
          };
          return (
            this.m_mapDiscountEvents.set(_._, _),
            this.m_discountEventsListCallback.Dispatch(
              this.GetAllDiscountEvents(),
            ),
            _
          );
        }
        _ = {
          response: _,
        };
      } catch (_) {
        _ = _;
      }
      let _ = _(_);
      return (
        console.error(
          `CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed`,
          _.strErrorMsg,
          _,
        ),
        null
      );
    }
    async LoadSingleDiscountEvent(_) {
      return this.m_mapDiscountEvents.has(_)
        ? this.m_mapDiscountEvents.get(_)
        : (this.m_mapInflightDiscountLoadRequest.has(_) ||
            this.m_mapInflightDiscountLoadRequest.set(
              _,
              this.InternalLoadSingleDiscountEvent(_),
            ),
          this.m_mapInflightDiscountLoadRequest.get(_));
    }
    async InternalLoadSingleDiscountEvent(_) {
      let _ = null;
      if (!_ || _.length == 0 || _ == `0`) return null;
      try {
        let _ =
            _.PARTNER_BASE_URL + `promotion/discounts/ajaxgetdiscounteventbyid`,
          _ = {
            sessionid: _(),
            discountid: _,
          },
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        if (
          _?.status == 200 &&
          _?.data?.success == 1 &&
          _?.data?.discount_event
        )
          return (
            this.m_mapDiscountEvents.set(_, _.data.discount_event),
            this.GetDiscountEventCallback(_).Dispatch(_.data.discount_event),
            _.data.discount_event
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CDiscountEventStore.InternalLoadSingleDiscountEvent failed: ` +
            _?.strErrorMsg,
          _,
        ),
        null
      );
    }
    async LoadSingleDiscountEventsAppList(_) {
      return this.m_mapAppList.has(_)
        ? {
            oDiscountEvent: this.m_mapDiscountEvents.get(_),
            rgAppList: this.m_mapAppList.get(_),
          }
        : (this.m_mapInflightDiscountAndAppListLoadRequest.has(_) ||
            this.m_mapInflightDiscountAndAppListLoadRequest.set(
              _,
              this.InternalLoadSingleDiscountEventsAppList(_),
            ),
          this.m_mapInflightDiscountAndAppListLoadRequest.get(_));
    }
    async InternalLoadSingleDiscountEventsAppList(_) {
      let _ = null;
      if (!_ || _.length == 0) return null;
      try {
        let _ =
            _.PARTNER_BASE_URL +
            `promotion/discounts/ajaxgetdiscounteventapplist`,
          _ = {
            sessionid: _(),
            discountid: _,
          },
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        if (
          _?.status == 200 &&
          _?.data?.success == 1 &&
          _?.data?.discount_event
        )
          return (
            this.m_mapDiscountEvents.set(_, _.data.discount_event),
            this.m_mapAppList.set(_, _.data.appid_list),
            this.GetDiscountEventCallback(_).Dispatch(_.data.discount_event),
            this.GetAppListCallback(_).Dispatch(_.data.appid_list),
            {
              oDiscountEvent: _.data.discount_event,
              rgAppList: _.data.appid_list,
            }
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: ` +
            _?.strErrorMsg,
          _,
        ),
        null
      );
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let _ = _(`discount_events`, `application_config`);
      if (this.BIsConfigValid(_)) {
        for (let _ of _) this.m_mapDiscountEvents.set(_._, _);
        this.m_bLoadedViaInitOrFullLoad = !0;
      }
    }
    BIsConfigValid(_) {
      let _ = _;
      return !!(_ && Array.isArray(_));
    }
  };
(_([_], _.prototype, `GetDiscountEvent`, null),
  _([_], _.prototype, `GetAppList`, null),
  _([_], _.prototype, `CreateDiscountEvent`, null),
  _([_], _.prototype, `UpdateDiscountEventPublisherAndAppList`, null));
function _() {
  return _.Get().GetFutureDiscountEvents();
}
function _() {
  return _.Get().GetDiscountEventListCallback();
}
function _(_) {
  let { rgDiscountEvents: _, eResult: _ } = _(0, _),
    _ = [];
  return (
    _?.forEach((_) => {
      _.collision_type == `unique` && (_ = _.concat(_));
    }),
    {
      rgMajorSaleDiscountEvents: _,
      eResult: _,
    }
  );
}
function _(_, _) {
  let _ = _.Get().BLoadedViaInitOrFullLoad(),
    [_, _] = _.useState(_ ? _.Get().GetAllDiscountEvents() : null),
    [_, _] = _.useState(null),
    _ = _ || Number.parseInt(_(`publisherid`, `application_config`));
  (_(_.Get().GetDiscountEventListCallback(), _),
    _.useEffect(() => {
      _.Get().BLoadedViaInitOrFullLoad() ||
        _.Get().LoadAllDiscountEvents(_).then(_);
    }, [_, _]));
  let _ = _ ?? (_?.length ? 1 : null);
  return _.useMemo(
    () => ({
      rgDiscountEvents: _ ? _ : _.Get().GetFutureDiscountEvents(),
      eResult: _,
    }),
    [_, _, _],
  );
}
function _(_) {
  return _.Get().GetDiscountEvent(_);
}
function _(_) {
  let { data: _ } = _(_);
  return _;
}
function _(_) {
  let [_, _] = (0, _.useState)(_.Get().GetDiscountEvent(_)),
    [_, _] = _.useState(!!_);
  return (
    _.useEffect(() => {
      (!_ && _) || (_?._ != _ && _)
        ? (async () => {
            try {
              let _ = await _.Get().LoadSingleDiscountEvent(_);
              _ && _(_);
            } finally {
              _(!1);
            }
          })()
        : _(!1);
    }, [_, _]),
    _(_.Get().GetDiscountEventCallback(_), _),
    {
      data: _,
      isLoading: _,
    }
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(_.Get().GetDiscountEvent(_)),
    [_, _] = (0, _.useState)(_.Get().GetAppList(_));
  return (
    (0, _.useEffect)(() => {
      ((!_ && _) || (_?._ != _ && _)) &&
        _.Get()
          .LoadSingleDiscountEventsAppList(_)
          .then((_) => {
            _ && (_(_.oDiscountEvent), _(_.rgAppList));
          });
    }, [_?._, _, _]),
    _(_.Get().GetDiscountEventCallback(_), _),
    _(_.Get().GetAppListCallback(_), _),
    _
      ? {
          oDiscountEvent: _,
          rgAppList: _,
        }
      : null
  );
}
function _(_, _, _, _, _) {
  return JSON.stringify({
    discount_event: {
      name: _,
      publisherids: _?.join(`,`),
      appids: _?.join(`,`),
      description: _,
      event: `1`,
      collision_type: _,
      header: _,
      tooltip: _,
      type: _,
    },
  });
}
function _(_, _, _, _) {
  return JSON.stringify({
    discount_event: {
      eventid: _,
      name: _.name,
      header: _.header,
      allowed_appids: _.join(`,`),
      allowed_publisherids: _.join(`,`),
      description: _.description,
      collision_type: _.collision_type,
      event: _.event,
      tooltip: _.tooltip,
      type: _.type,
      prevent_weeklong: _.prevent_weeklong,
    },
  });
}
function _() {
  return {
    fnCreateDiscountEvent: _.Get().CreateDiscountEvent,
  };
}
function _() {
  return {
    fnUpdateDiscountEventAppAndPublisherList:
      _.Get().UpdateDiscountEventPublisherAndAppList,
  };
}
var _ = class _ {
  constructor() {
    _(this);
  }
  static s_OptInRegs;
  m_mapRegistrations = new Map();
  m_mapRequestedAppIDs = new Map();
  m_mapOptInNameCallback = new Map();
  m_mapSingleAppRegistrationChange = new Map();
  m_loadCountChangeCallback = new _();
  BHasOptInRegistration(_, _) {
    return !!this.m_mapRegistrations.get(_)?.has(_);
  }
  GetOptInRegistrationPromise(_, _) {
    return this.m_mapRequestedAppIDs.get(_)?.get(_);
  }
  GetOptInRegistrationAndEligibilityForApp(_) {
    return this.m_mapRegistrations.get(_);
  }
  GetSingleAppRegistrationKey(_, _) {
    return `single_${_}_${_}`;
  }
  GetSingleAppRegistrationChange(_, _) {
    let _ = this.GetSingleAppRegistrationKey(_, _);
    return (
      this.m_mapSingleAppRegistrationChange.has(_) ||
        this.m_mapSingleAppRegistrationChange.set(_, new _()),
      this.m_mapSingleAppRegistrationChange.get(_)
    );
  }
  GetExistingOptInRegistartion(_, _) {
    return this.m_mapRegistrations.has(_)
      ? this.m_mapRegistrations.get(_).get(_)
      : null;
  }
  GetLoadCountChange() {
    return this.m_loadCountChangeCallback;
  }
  GetLoadCount() {
    return this.m_mapRegistrations.size;
  }
  GetOptInRegistrationAndEligibilityForApps(_) {
    if (_.length == 0) return null;
    let _ = new Map();
    for (let _ of _) {
      let _ = this.m_mapRegistrations.get(_);
      if (_)
        for (let _ of _.keys()) {
          let _ = _.get(_);
          ((_ ||= 0), _.set(_, _ + 1));
        }
    }
    let _ = new Map(),
      _ = _[0];
    return (
      _.forEach((_, _) => {
        if (_ == _.length) {
          let _ = this.m_mapRegistrations.get(_).get(_);
          (_(_, `Missing OptIn Restration`), _.set(_, _));
        }
      }),
      _.size > 0 ? _ : null
    );
  }
  BHasOptionOnRegistration(_, _, _) {
    let _ = this.GetRegistration(_, _);
    return !_ || !_.opt_in
      ? !1
      : !_ ||
          _?.jsondata?.dynamic_selection?.some(
            (_) =>
              _ &&
              _.section_id == _.section_id &&
              _.list_selection?.some(
                (_) =>
                  _ &&
                  _.list_id == _.list_id &&
                  _.selected_item_id?.includes(_.option_id),
              ),
          );
  }
  BHasOptInTrailer(_, _) {
    let _ = this.GetRegistration(_, _);
    return !!(
      _ &&
      _.opt_in &&
      _.jsondata?.trailer_permission &&
      _.jsondata.rtime_granting_trailer
    );
  }
  BHasOptInDemo(_, _) {
    let _ = this.GetRegistration(_, _);
    return !!(
      _ &&
      _.opt_in &&
      _.jsondata?.demo_permission &&
      _.jsondata.rtime_granting_demo
    );
  }
  BHasOptInGameProfile(_, _) {
    let _ = this.GetRegistration(_, _);
    return !!(
      _ &&
      _.opt_in &&
      _.jsondata?.game_profile_intent &&
      _.jsondata.rtime_granting_profile
    );
  }
  CreateRegistrationNotSaved(_, _) {
    return (
      console.log(`CreateOrGetRegistration: Creating new registration`), _(_, _)
    );
  }
  CreateOrGetRegistration(_, _) {
    let _ = this.m_mapRegistrations.get(_);
    _ ||
      ((_ = new Map()),
      this.m_mapRegistrations.set(_, _),
      this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
    let _ = _.get(_);
    return (
      _
        ? console.log(
            `CreateOrGetRegistration: Re-using Previous Registration:`,
            _,
          )
        : (_ = this.CreateRegistrationNotSaved(_, _)),
      _
    );
  }
  GetOptInRegistrationAndEligibilityForAppOrCreate(_, _) {
    let _ = this.m_mapRegistrations.get(_);
    _ ||
      ((_ = new Map()),
      this.m_mapRegistrations.set(_, _),
      this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
    let _ = _.get(_);
    return (
      _
        ? console.log(
            `CreateOrGetRegistration: Re-using Previous Registration:`,
            _,
          )
        : ((_ = this.CreateRegistrationNotSaved(_, _)), _.set(_, _)),
      _
    );
  }
  GetRegistration(_, _) {
    return this.m_mapRegistrations.has(_) &&
      this.m_mapRegistrations.get(_).has(_)
      ? this.m_mapRegistrations.get(_).get(_)
      : null;
  }
  GetAllOptInRegistrations(_) {
    let _ = this.m_mapRequestedAppIDs.get(_) || new Map();
    return Array.from(_.keys())
      .map((_) => this.m_mapRegistrations.get(_)?.get(_))
      .filter(Boolean);
  }
  GetOptInNameRegistrationsCallbackList(_) {
    return _
      ? (this.m_mapOptInNameCallback.has(_) ||
          this.m_mapOptInNameCallback.set(_, new _()),
        this.m_mapOptInNameCallback.get(_))
      : null;
  }
  UpdateRegAndTrackInStore(_, _) {
    let _ = _.map((_) =>
      _.jsondata && _.jsondata !== ``
        ? {
            ..._,
            jsondata: JSON.parse(_.jsondata),
          }
        : {
            ..._,
            jsondata: {
              opt_in_name: _,
            },
          },
    );
    return (
      _.forEach((_) => {
        (this.m_mapRegistrations.has(_.appid) ||
          (this.m_mapRegistrations.set(_.appid, new Map()),
          this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size)),
          this.m_mapRegistrations.get(_.appid).set(_, _));
      }),
      _
    );
  }
  async FetchOptInRegistrationForOptIn(_, _) {
    let _ = _.PARTNER_BASE_URL + `optin/ajaxgetalloptinregistrations`,
      _ = {
        sessionid: _(),
        opt_in_name: _,
        opt_in_only: _,
      },
      _ = await _.default.get(_, {
        params: _,
        withCredentials: !0,
      });
    return _?.data?.data
      ? this.UpdateRegAndTrackInStore(_, _.data.data)
      : _?.data?.data;
  }
  async FetchPendingReviewOptInRegistrationn(_) {
    let _ = _.PARTNER_BASE_URL + `optin/ajaxgetpendingreviewregistrations`,
      _ = {
        sessionid: _(),
        opt_in_name: _,
      },
      _ = await _.default.get(_, {
        params: _,
        withCredentials: !0,
      });
    return _?.data?.data
      ? this.UpdateRegAndTrackInStore(_, _.data.data)
      : _?.data?.data;
  }
  async LoadOptInRegistration(_, _, _) {
    if (this.GetRegistration(_, _)) return !0;
    let _ = this.m_mapRequestedAppIDs.get(_)?.get(_);
    if (_) return _;
    try {
      let _ = _.PARTNER_BASE_URL + `optin/ajaxgetoptinregistation`,
        _ = {
          sessionid: _(),
          appid: _,
          opt_in_name: _,
        },
        _ = await _.default.get(_, {
          params: _,
          withCredentials: !0,
          cancelToken: _?.token,
        });
      if (_?.data?.success == 1 && _.data.optin_registration) {
        if (
          (typeof _.data.optin_registration.jsondata == `string` &&
            (_.data.optin_registration.jsondata = JSON.parse(
              _.data.optin_registration.jsondata,
            )),
          this.m_mapRegistrations.has(_))
        )
          this.m_mapRegistrations.get(_).set(_, _.data.optin_registration);
        else {
          let _ = new Map();
          (_.set(_, _.data.optin_registration),
            this.m_mapRegistrations.set(_, _),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
        }
        return !0;
      }
      {
        let _ = _(_);
        console.error(
          `LoadOptInRegistration : failed with a response and: ` +
            _.strErrorMsg,
          _,
        );
      }
    } catch (_) {
      let _ = _(_);
      console.error(`LoadOptInRegistration : failed with ` + _.strErrorMsg, _);
    }
    return !1;
  }
  async LoadMultiOptInRegistration(_, _, _, _) {
    if (_.length == 0 || _.length == 0) return !1;
    let _ = null,
      _ = new Promise((_, _) => {
        _ = _;
      });
    ((_ = _(_).sort()),
      (_ = _(_).sort()),
      _.forEach((_) => {
        this.m_mapRequestedAppIDs.has(_) ||
          this.m_mapRequestedAppIDs.set(_, new Map());
      }));
    let _ = [];
    if (
      (_.forEach((_) => {
        _.some(
          (_) =>
            !this.BHasOptInRegistration(_, _) &&
            !this.GetOptInRegistrationPromise(_, _),
        ) &&
          (_.push(_),
          _.forEach((_) => this.m_mapRequestedAppIDs.get(_).set(_, _)));
      }),
      _.length == 0)
    )
      return !0;
    let _ = _.PARTNER_BASE_URL + `optin/ajaxbatchgetoptinregistation`,
      _ = null;
    try {
      for (; _.length > 0;) {
        let _ = 0,
          _ = [];
        for (; _.length > 0 && _ < 5;) {
          let _ = _.splice(0, 50),
            _ = {
              rgOptInNames: _.join(`,`),
              rgAppIDs: _.join(`,`),
              origin: self.origin,
            };
          (_.push(
            _.default.get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _?.token,
            }),
          ),
            (_ += 1));
        }
        let _ = await Promise.all(_);
        for (let _ of _)
          if (
            _?.status == 200 &&
            _.data?.success == 1 &&
            _.data.optin_registrations?.length
          )
            this.InternalAddRegistrations(_.data.optin_registrations, _);
          else {
            _ = {
              response: _,
            };
            break;
          }
        this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size);
      }
    } catch (_) {
      _ = _;
    }
    if (_ == null) _(!0);
    else {
      let _ = _(_);
      (console.error(`Could not load OptIn for Apps`, _, _, _.strErrorMsg, _),
        _(!1));
    }
    return _;
  }
  async RegisterAppForOptIn(_, _) {
    let _ = {
      opt_in_name: _.startsWith(`sale_`) ? _ : `sale_` + _,
      opt_in: !0,
    };
    return this.UpdateOptInRegistration(_, _);
  }
  async UpdateOptInRegistration(_, _) {
    let _ = null;
    try {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        Object.keys(_).forEach((_) => _.append(_, _[_])));
      let _ = _.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistration/` + _,
        _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
      if (_?.status == 200 && _.data?.success == 1) return null;
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateOptInRegistration error ` + _.strErrorMsg,
        _,
      ),
      _.strErrorMsg
    );
  }
  async UpdateOptInRegistrationJson(_, _, _ = !1) {
    let _ = null;
    try {
      let _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`opt_in_name`, _.opt_in_name),
        _.append(`jsondata`, JSON.stringify(_)),
        _ && _.append(`bCreatePendingInvite`, `true`));
      let _ =
          _.PARTNER_BASE_URL + `optin/ajaxupdateoptinregistrationpayload/` + _,
        _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
      if (_?.status == 200 && _.data?.success == 1) {
        let _ = _.opt_in_name.startsWith(`sale_`)
            ? _.opt_in_name
            : `sale_` + _.opt_in_name,
          _ = this.m_mapRegistrations.get(_).get(_);
        _.jsondata = _;
        let _ = {
          ..._,
        };
        return (
          this.m_mapRegistrations.get(_).set(_.opt_in_name, _),
          this.GetSingleAppRegistrationChange(_, _.opt_in_name).Dispatch(_),
          null
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateOptInRegistrationJson error ` +
          _.strErrorMsg,
        _,
      ),
      _.strErrorMsg
    );
  }
  async UpdateAppealState(_, _, _) {
    let _ = null;
    try {
      let _ = _.opt_in_name || _.jsondata.opt_in_name,
        _ = new FormData();
      (_.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`opt_in_name`, _),
        _.append(`approved`, `` + _));
      let _ = _.PARTNER_BASE_URL + `optin/ajaxsetappealsdecision/` + _,
        _ = await _.default.post(_, _, {
          withCredentials: !0,
        });
      if (_?.status == 200 && _.data?.success == 1) {
        let _ = {
          ...this.m_mapRegistrations.get(_).get(_),
        };
        return (
          (_.accountid_appeal = _.accountid),
          (_.appeal_state = _ ? 1 : 2),
          this.m_mapRegistrations.get(_).set(_, _),
          this.GetSingleAppRegistrationChange(_, _).Dispatch(_),
          !0
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `COptInRegistrations::UpdateAppealState error ` + _.strErrorMsg,
        _,
      ),
      !1
    );
  }
  static Get() {
    return (
      _.s_OptInRegs ||
        ((_.s_OptInRegs = new _()),
        (window.COptInRegistrations = _.s_OptInRegs),
        _.s_OptInRegs.Init()),
      _.s_OptInRegs
    );
  }
  InternalAddRegistrations(_, _) {
    let _ = new Set();
    (_.forEach((_) => {
      if (!Number.isNaN(_.appid)) {
        let _ = this.m_mapRegistrations.get(_.appid);
        if (
          (_ || ((_ = new Map()), this.m_mapRegistrations.set(_.appid, _)),
          _.jsondata && typeof _.jsondata == `string`)
        ) {
          let _ = _.jsondata;
          _.jsondata = _.trim().length == 0 ? {} : JSON.parse(_);
        }
        (_.set(_.opt_in_name, _), _ && _.Increment(), _.add(_.opt_in_name));
      }
    }),
      Array.from(_).forEach((_) => {
        this.GetOptInNameRegistrationsCallbackList(_).Dispatch(
          this.GetAllOptInRegistrations(_),
        );
      }));
  }
  Init() {
    let _ = JSON.parse(
      JSON.stringify(_(`optin_registrations`, `application_config`)),
    );
    this.ValidateStoreDefault(_) && this.InternalAddRegistrations(_);
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].appid == `number` && typeof _[0].opt_in_name == `string`
      : !1;
  }
};
(_([_], _.prototype, `GetOptInRegistrationAndEligibilityForApp`, null),
  _([_], _.prototype, `GetOptInRegistrationAndEligibilityForApps`, null),
  _([_], _.prototype, `LoadMultiOptInRegistration`, null),
  _([_], _.prototype, `UpdateOptInRegistrationJson`, null),
  _([_], _.prototype, `UpdateAppealState`, null),
  _([_], _.prototype, `Init`, null));
function _(_, _) {
  let _ = _.jsondata?.dynamic_selection;
  try {
    if (_) {
      let _ = _.filter((_) => _.section_id == _.section_id).map(
        (_) => _.list_selection,
      );
      if (_.length > 0 && _[0]) {
        let _ = _[0]
          .filter((_) => _.list_id == _.list_id)
          .map((_) => _.selected_item_id);
        if (_.length > 0) return _[0];
      }
    }
  } catch (_) {
    console.log(`error: dynamic section`, _, _, _);
  }
  return [];
}
function _() {
  return _.useMemo(
    () => ({
      fnLoadMultiOptInRegistration: _.Get().LoadMultiOptInRegistration,
    }),
    [],
  );
}
function _(_, _, _) {
  let [_, _] = _.useState(null),
    _ = _(`useMultiLoadOptInAppReg`);
  return (
    (0, _.useEffect)(() => {
      let _ = _?.filter(Boolean);
      _?.length > 0 && _?.length > 0
        ? _.Get()
            .LoadMultiOptInRegistration(
              _.map(() => _),
              _,
              _,
              _,
            )
            .then(() => {
              let _ = new Map();
              (_.forEach((_) => {
                let _ = _.Get().GetRegistration(_, _);
                _ && _.set(_, _);
              }),
                _(_));
            })
        : _(new Map());
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let [_, _] = _.useState(_.Get().GetAllOptInRegistrations(_));
  return (_(_.Get().GetOptInNameRegistrationsCallbackList(_), _), _);
}
function _(_) {
  let _ = _(_),
    [_, _] = _.useState({
      nAppOptedIn: 0,
      nAppEligible: 0,
      nAppOptedOut: 0,
      nAppIneligible: 0,
    });
  return (
    _.useEffect(() => {
      if (_?.length > 0) {
        let _ = {
          nAppOptedIn: 0,
          nAppEligible: 0,
          nAppOptedOut: 0,
          nAppIneligible: 0,
        };
        (_.forEach((_) => {
          _.restricted || _.pruned
            ? (_.nAppIneligible += 1)
            : _.opt_in
              ? ((_.nAppOptedIn += 1), (_.nAppEligible += 1))
              : !_.time_opted_in || _.invited
                ? (_.nAppEligible += 1)
                : (_.nAppOptedOut += 1);
        }),
          JSON.stringify(_) != JSON.stringify(_) && _(_));
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  let _ = _({
    queryKey: [`useAllOptInRegistrationByName`, _, !!_],
    queryFn: () => _.Get().FetchOptInRegistrationForOptIn(_, _),
    staleTime: 36e5,
    enabled: !!_,
  });
  return _.isLoading ? null : _.data;
}
function _(_) {
  let _ = _({
    queryKey: [`useAllPendingReviewOptInRegistrationByName`, _],
    queryFn: () => _.Get().FetchPendingReviewOptInRegistrationn(_),
    retry: !1,
    staleTime: 36e5,
    enabled: _?.length > 0,
  });
  return {
    rgPendingReviewRegistrations: _.isLoading ? null : _.data,
    bIsInError: _.isError,
  };
}
function _(_, _) {
  let _ = _(_, !1),
    [_, _] = (0, _.useState)(_?.find((_) => _.appid == _));
  return (_(_.Get().GetSingleAppRegistrationChange(_, _), _), _);
}
function _(_, _) {
  let [_, _] = (0, _.useState)(
    _.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(_, _),
  );
  return (_(_.Get().GetSingleAppRegistrationChange(_, _), _), _);
}
function _(_, _) {
  let [_, _] = (0, _.useState)(_.Get().GetExistingOptInRegistartion(_, _));
  return (_(_.Get().GetSingleAppRegistrationChange(_, _), _), _);
}
function _() {
  return {
    fnUpdateOptInRegistrationJson: _.Get().UpdateOptInRegistrationJson,
  };
}
function _() {
  return {
    fnUpdateAppealState: _.Get().UpdateAppealState,
  };
}
function _() {
  let [_, _] = (0, _.useState)(_.Get().GetLoadCount());
  return (_(_.Get().GetLoadCountChange(), _), _.Get().GetLoadCount());
}
var _ = new Set([0, 2, 6, 13]),
  _ = new Set([4, 7, 11]);
function _(_) {
  let _ = !1,
    _ = !1,
    _,
    _ = new Set();
  for (let _ of _?.GetIncludedAppIDs() ?? []) {
    let _ = _.Get().GetApp(_);
    if (_ && _.has(_.GetAppType())) ((_ = !0), _.add(_.GetID()));
    else if (_ && _.has(_.GetAppType())) {
      _ = !0;
      let _ = _.GetParentAppID();
      _ && _.add(_);
    }
  }
  let _ = null;
  return (
    _.size == 1
      ? ((_ = Array.from(_)[0]), (_ = _.Get().GetApp(_)?.GetName()))
      : _.size > 1 && (_ = _(`#PackageGrid_MultipleBaseGamesFoundForPackage`)),
    (_ ||= _(`#PackageGrid_NoBaseGameFoundForPackage`)),
    {
      baseAppName: _,
      contents: _ && _ ? `BOTH` : _ ? `GAME` : _ ? `DLC` : null,
      nBaseAppID: _,
    }
  );
}
var _ = {
  include_release: !0,
};
async function _(_, _) {
  if ((await _.Get().HintLoadStorePackages(_, _)) != 1 || _.token.reason)
    return null;
  let _ = [];
  _.map((_) => _.Get().GetPackage(_))
    .filter((_) => !!_)
    .forEach((_) => _.push(..._.GetIncludedAppIDs()));
  let _ = Array.from(new Set(_));
  if ((await _.Get().HintLoadStoreApps(_, _)) != 1 || _.token.reason)
    return null;
  let _ = _.map((_) => _.Get().GetApp(_))
      .filter((_) => !!_?.GetParentAppID())
      .map((_) => _.GetParentAppID()),
    _ = Array.from(new Set(_));
  return (await _.Get().HintLoadStoreApps(_, _)) != 1 || _.token.reason
    ? null
    : Array.from(new Set(_.concat(_)));
}
var _ = `deepest-past`,
  _ = `most-recent`,
  _ = `next-available`,
  _ = `related-discount-view`,
  _ = class _ {
    m_rgDiscountEvents;
    m_mapDiscountEventsByID = new Map();
    m_discountEventsCallbackList = new _();
    m_mapLastTimeRaisedPrices = new Map();
    m_strSelectedDiscountEventID = null;
    m_bIncludeWeeklongEvents = !1;
    m_bIncludeCustomEvents = !0;
    m_bIncludeIneligibleEvents = !1;
    m_bIncludeConflictsInSingleEventView = !0;
    m_bEditingDailyDealDiscount = !1;
    m_eRelatedDiscountView = _;
    m_RelatedDiscountViewCallbackList = new _();
    m_gridEventSelectionParametersCallbackList = new _();
    m_setVisibleDiscountEventIDs = new Set();
    m_visibleDiscountEventIDsCallbackList = new _();
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    constructor() {}
    Init() {
      let _ = _(`price_increase_times`, `application_config`);
      if (this.BIsPriceIncreasePayloadValid(_))
        for (let _ in _) this.m_mapLastTimeRaisedPrices.set(Number(_), _[_]);
      ((this.m_eRelatedDiscountView =
        window.localStorage.getItem(_) ?? `deepest-past`),
        this.UpdateDiscountEventsForGrid(),
        _().Register(() => this.UpdateDiscountEventsForGrid()),
        _().Register(() => this.UpdateDiscountEventsForGrid()),
        this.SetEventSelectionParametersFromURL(),
        this.UpdateVisibleDiscountEventIDs());
    }
    UpdateDiscountEventsForGrid() {
      let _ = _(),
        _ = _(),
        _ = new Set(_.map((_) => _._)),
        _ = [],
        _ = _();
      for (let _ of _)
        _.rtEndDate > _ &&
          (_.has(_.discountEventID) ||
            (_.push({
              _: _.discountEventID,
              name: _.strDiscountName,
              start_date: _.rtStartDate,
              end_date: _.rtEndDate,
              description: _.strDiscountDescription,
            }),
            _.add(_.discountEventID)));
      (!this.m_rgDiscountEvents ||
        _.size != this.m_rgDiscountEvents.length ||
        this.m_rgDiscountEvents.some((_) => !_.has(_._))) &&
        ((this.m_rgDiscountEvents = _.concat(_)),
        this.m_rgDiscountEvents.sort((_, _) =>
          _.start_date == _.start_date
            ? _.end_date - _.end_date
            : _.start_date - _.start_date,
        ),
        (this.m_mapDiscountEventsByID = new Map(
          this.m_rgDiscountEvents.map((_) => [_._, _]),
        )),
        this.UpdateVisibleDiscountEventIDs(),
        this.m_discountEventsCallbackList.Dispatch(this.m_rgDiscountEvents));
    }
    UpdateVisibleDiscountEventIDs() {
      (this.SetEventSelectionParametersFromURL(),
        (this.m_setVisibleDiscountEventIDs = new Set()));
      for (let _ of this.m_rgDiscountEvents) {
        let _ = this.m_strSelectedDiscountEventID == null;
        (_ && !this.m_bIncludeCustomEvents && _(_._) && (_ = !1),
          _ &&
            !this.m_bIncludeWeeklongEvents &&
            _._.startsWith(`weeklongdeal_`) &&
            !_(_._) &&
            (_ = !1),
          _ && !this.m_bIncludeIneligibleEvents && !_(_._) && (_ = !1),
          this.m_strSelectedDiscountEventID == _._ && (_ = !0),
          _ && this.m_setVisibleDiscountEventIDs.add(_._));
      }
      this.m_visibleDiscountEventIDsCallbackList.Dispatch(
        this.m_setVisibleDiscountEventIDs,
      );
    }
    BIsPriceIncreasePayloadValid(_) {
      let _ = _;
      if (_ && typeof _ == `object`) {
        for (let _ in _)
          if (isNaN(parseInt(_)) || typeof _[_] != `number`) return !1;
        return !0;
      }
      return !1;
    }
    SetEventSelectionParametersFromURL() {
      let _ = new URLSearchParams(window.location.search);
      if (_.has(`de`)) {
        let _ = decodeURIComponent(_.get(`de`));
        this.m_mapDiscountEventsByID.has(_) &&
          (this.m_strSelectedDiscountEventID = _);
      }
      if (_.has(`wd`)) {
        let _ = _.get(`wd`);
        this.m_bIncludeWeeklongEvents = _ != `0`;
      }
      if (_.has(`cd`)) {
        let _ = _.get(`cd`);
        this.m_bIncludeCustomEvents = _ != `0`;
      }
      if (_.has(`cf`)) {
        let _ = _.get(`cf`);
        this.m_bIncludeConflictsInSingleEventView = _ != `0`;
      }
      if (_.has(`dd`)) {
        let _ = _.get(`dd`);
        this.m_bEditingDailyDealDiscount = _ != `0`;
      }
    }
    HandleEventSelectionChangeAndNotifyListeners() {
      let _ = new URL(window.location.href);
      (this.m_strSelectedDiscountEventID
        ? _.searchParams.set(
            `de`,
            encodeURIComponent(this.m_strSelectedDiscountEventID),
          )
        : _.searchParams.delete(`de`),
        this.m_bIncludeWeeklongEvents
          ? _.searchParams.set(`wd`, `1`)
          : _.searchParams.delete(`wd`),
        this.m_bIncludeCustomEvents
          ? _.searchParams.delete(`cd`)
          : _.searchParams.set(`cd`, `0`),
        this.m_bIncludeConflictsInSingleEventView
          ? _.searchParams.delete(`cf`)
          : _.searchParams.set(`cf`, `0`),
        this.m_bEditingDailyDealDiscount &&
          ((this.m_bEditingDailyDealDiscount = !1),
          _.searchParams.delete(`dd`)),
        window.history.replaceState({}, ``, _.toString()),
        this.UpdateVisibleDiscountEventIDs(),
        this.m_gridEventSelectionParametersCallbackList.Dispatch(
          this.GetEventSelectionParameters(),
        ));
    }
    GetEventSelectionParameters() {
      return {
        bSingleDiscountEventView: this.m_strSelectedDiscountEventID != null,
        strSelectedEvent: this.m_strSelectedDiscountEventID,
        bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
        fnSelectEvent: (_) => {
          ((this.m_strSelectedDiscountEventID = _),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
        fnSetIncludeWeeklongEvents: (_) => {
          ((this.m_bIncludeWeeklongEvents = _),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeCustomEvents: this.m_bIncludeCustomEvents,
        fnSetIncludeCustomEvents: (_) => {
          ((this.m_bIncludeCustomEvents = _),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
        bIncludeConflictsInSingleEventView:
          this.m_bIncludeConflictsInSingleEventView,
        fnSetIncludeConflictsInSingleEventView: (_) => {
          ((this.m_bIncludeConflictsInSingleEventView = _),
            this.HandleEventSelectionChangeAndNotifyListeners());
        },
      };
    }
  };
function _(_) {
  return _.Get().m_mapLastTimeRaisedPrices.get(_) ?? 0;
}
function _() {
  return _.Get().m_rgDiscountEvents;
}
function _(_) {
  return _.Get().m_mapDiscountEventsByID.get(_);
}
function _() {
  return _.Get().m_discountEventsCallbackList;
}
function _() {
  let [_, _] = _.useState(_.Get().m_rgDiscountEvents);
  return (_(_.Get().m_discountEventsCallbackList, _), _);
}
function _() {
  let [_, _] = _.useState(_.Get().m_setVisibleDiscountEventIDs);
  return (_(_.Get().m_visibleDiscountEventIDsCallbackList, _), _);
}
function _(_) {
  let [_, _] = _.useState(_.Get().m_mapDiscountEventsByID.get(_)),
    _ = _.useCallback(() => _(_.Get().m_mapDiscountEventsByID.get(_)), [_]);
  return (
    _(_.Get().m_discountEventsCallbackList, _), _.useEffect(_, [_, _]), _
  );
}
function _(_ = !0) {
  let [_, _] = _.useState(_.Get().GetEventSelectionParameters()),
    _ = _ ? _.Get().m_gridEventSelectionParametersCallbackList : null;
  return (_(_, _), _);
}
function _() {
  let [_, _] = _.useState(_.Get().m_eRelatedDiscountView);
  return (
    _(_.Get().m_RelatedDiscountViewCallbackList, _),
    [
      _,
      _.useCallback((_) => {
        ((_.Get().m_eRelatedDiscountView = _),
          window.localStorage.setItem(_, _),
          _.Get().m_RelatedDiscountViewCallbackList.Dispatch(_));
      }, []),
    ]
  );
}
function _() {
  return _.useCallback(() => {
    _.Get().UpdateVisibleDiscountEventIDs();
  }, []);
}
function _(_, _) {
  return (
    !!_ == !!_ &&
    _?.packageID == _?.packageID &&
    _?.discountEventID == _?.discountEventID &&
    _?.eState == _?.eState &&
    _?.rgConflictDetails?.length == _?.rgConflictDetails?.length &&
    _?.optInReg == _?.optInReg &&
    _(_?.discount, _?.discount) &&
    _?.nBaseAppID == _?.nBaseAppID &&
    _?.bChangedLocally == _?.bChangedLocally
  );
}
function _(_, _) {
  return (
    (!_ && (_?.nDiscountPct ?? 0) == 0) ||
    (!!_ && _.nDiscountPct == _?.nDiscountPct)
  );
}
var _ = 30 * _.PerDay - 1.5 * _.PerHour,
  _ = 10 * _.PerMinute,
  _ = class _ {
    m_mapPackageStateForDiscountEvents = new Map();
    m_mapLocalPackageDiscountOverrides = new Map();
    m_mapDiscountPackageCallbackList = new Map();
    m_mapDiscountGridCellCallbackList = new Map();
    m_mapDiscountEventColumnCallbackList = new Map();
    m_localPackageDiscountOverrideCallbackList = new _();
    static s_Singleton;
    static s_initializationCallbackList = new _();
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    static IsInitialized() {
      return !!_.s_Singleton;
    }
    constructor() {}
    Init() {
      for (let _ of _())
        (_.Get().ComputePackageState(_),
          _(_).Register(() => {
            _.Get().ComputePackageState(_);
          }));
      (_().Register(() => {
        for (let _ of _()) _.Get().ComputePackageState(_, !0);
      }),
        _.s_initializationCallbackList.Dispatch(!0));
    }
    OverridePackageDiscountPct(_, _, _) {
      let _ = _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_);
      if (_?.eState != 1)
        return (
          console.error(`Cannot change discount in current state:`, _.eState),
          null
        );
      let _ = _.discount,
        _ = _(_),
        _ = {
          nDiscountID: _?.nDiscountID,
          packageID: _,
          nDiscountPct: _,
          strDiscountName: _.name,
          strDiscountDescription: _.description,
          rtStartDate: _.start_date,
          rtEndDate: _.end_date,
          discountEventID: _._,
          bChangedLocally: !0,
        };
      return _(_, _)
        ? null
        : (this.m_mapLocalPackageDiscountOverrides.has(_) ||
            this.m_mapLocalPackageDiscountOverrides.set(_, new Map()),
          this.m_mapLocalPackageDiscountOverrides.get(_).set(_, _),
          this.ComputePackageState(_),
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
            this.GetLocalPackageDiscountOverrides(),
          ),
          _);
    }
    GetHighestPackageDiscount(_) {
      let _ = this.m_mapPackageStateForDiscountEvents.get(_);
      if (!_) return 0;
      let _ = 0;
      return (
        _.forEach((_, _) => {
          _.eState == 1 && (_ = Math.max(_, _.discount?.nDiscountPct || 0));
        }),
        _
      );
    }
    GetLocalPackageDiscountOverrides() {
      let _ = [];
      return (
        this.m_mapLocalPackageDiscountOverrides.forEach((_) =>
          _.forEach((_) => {
            _(_, _.nDiscountID && _(_.nDiscountID)) || _.push(_);
          }),
        ),
        _.sort(_),
        _
      );
    }
    DiscardAllLocalPackageDiscountOverrides(_) {
      this.m_mapLocalPackageDiscountOverrides.clear();
      for (let _ of _) this.ComputePackageState(_);
      this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
    }
    DiscardLocalPackageDiscountOverride(_, _) {
      (this.m_mapLocalPackageDiscountOverrides.get(_)?.delete(_),
        this.ComputePackageState(_),
        this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
          this.GetLocalPackageDiscountOverrides(),
        ));
    }
    OptInRegistrationUpdatedForApp(_, _) {
      Array.from(this.m_mapPackageStateForDiscountEvents.values())
        .map((_) => _.get(_))
        .filter((_) => _?.nBaseAppID == _)
        .map((_) => _.packageID)
        ?.forEach((_) => this.ComputePackageState(_));
    }
    GetPackageDiscountsIncludingOverrides(_) {
      let _ = _() - _,
        _ = _(_);
      if (!_) return null;
      let _ = new Map(
        _.filter((_) => _.rtEndDate > _).map((_) => [_.discountEventID, _]),
      );
      return (
        this.m_mapLocalPackageDiscountOverrides.get(_)?.forEach((_, _) => {
          _(_, _.get(_)) || _.set(_, _);
        }),
        _
      );
    }
    GetDiscountGridCellCallbackList(_, _) {
      if (!_ || !_) return null;
      this.m_mapDiscountGridCellCallbackList.has(_) ||
        this.m_mapDiscountGridCellCallbackList.set(_, new Map());
      let _ = this.m_mapDiscountGridCellCallbackList.get(_);
      return (_.has(_) || _.set(_, new _()), _.get(_));
    }
    GetDiscountPackageCallbackList(_) {
      if (!_) return null;
      let _ = this.m_mapDiscountPackageCallbackList.get(_);
      return (
        _ || ((_ = new _()), this.m_mapDiscountPackageCallbackList.set(_, _)), _
      );
    }
    GetDiscountEventColumnCallbackList(_) {
      return _
        ? (this.m_mapDiscountEventColumnCallbackList.has(_) ||
            this.m_mapDiscountEventColumnCallbackList.set(_, new _()),
          this.m_mapDiscountEventColumnCallbackList.get(_))
        : null;
    }
    GetLocalPackageDiscountOverrideCallbackList() {
      return this.m_localPackageDiscountOverrideCallbackList;
    }
    GetAllPackageStatesForDiscountEvent(_) {
      let _ = [];
      return (
        _.Get().m_mapPackageStateForDiscountEvents.forEach((_, _) =>
          _.push(_.get(_)),
        ),
        _
      );
    }
    ComputePackageState(_, _) {
      let _ = _.Get().GetPackage(_);
      if (!_) return;
      let _ = _(),
        _ = _(_),
        _ = _.nBaseAppID,
        _ = _ && _.Get().GetOptInRegistrationAndEligibilityForApp(_);
      !_ &&
        !_ &&
        (_ = _.Get().GetOptInRegistrationAndEligibilityForApps(
          _.GetIncludedAppIDs(),
        ));
      let _ = this.GetPackageDiscountsIncludingOverrides(_),
        _ = !_,
        _ = _
          ? null
          : Array.from(_.values()).sort(
              (_, _) => _.rtStartDate - _.rtStartDate,
            );
      this.m_mapPackageStateForDiscountEvents.has(_) ||
        this.m_mapPackageStateForDiscountEvents.set(_, new Map());
      let _ = this.m_mapPackageStateForDiscountEvents.get(_);
      for (let _ of _) {
        if (_ && _.has(_._)) continue;
        let _ = {
          packageID: _,
          discountEventID: _._,
          nBaseAppID: _,
        };
        if (
          ((_.discount = _?.get(_._)),
          (_.bChangedLocally = !!_.discount?.bChangedLocally),
          _)
        )
          _.eState = 0;
        else if (_.discount?.nDiscountPct > 0) {
          _.eState = 1;
          let _ = _.opt_in_name && _?.get(_.opt_in_name);
          _ && (_.optInReg = _);
        } else {
          if (((_.eState = 1), _(_, _))) _.eState = 10;
          else if (_.opt_in_name) {
            let { ePackageDiscountState: _, optInRegistration: _ } = _(
              _.opt_in_name,
              _,
              _,
              _,
              _,
            );
            ((_.eState = _), (_.optInReg = _));
          }
          if (_.eState != 10 && _.eState != 4 && _.eState != 5) {
            let _ = _(_, _, _);
            _.ePackageDiscountState != 1 &&
              ((_.eState = _.ePackageDiscountState),
              (_.rgConflictDetails = _.rgConflictingDiscounts.map(
                (_) => _(_.discountEventID)?.name ?? _.strDiscountName,
              )));
          }
        }
        _(_, _.get(_._)) ||
          (_.set(_._, _),
          this.GetDiscountPackageCallbackList(_).Dispatch(),
          this.GetDiscountGridCellCallbackList(_, _._).Dispatch(_),
          this.GetDiscountEventColumnCallbackList(_._).Dispatch(
            this.GetAllPackageStatesForDiscountEvent(_._),
          ));
      }
    }
    GetAvailableDiscountEventsInRange(_, _, _) {
      let _ = this.m_mapPackageStateForDiscountEvents.get(_),
        _ = new Set([1, 11, 2, 3]);
      return _()
        .filter(
          (_) =>
            _ <= _.start_date && _.end_date <= _ && _.has(_.get(_._).eState),
        )
        .map((_) => _._);
    }
    GetFurthestCooldownFromPastDiscounts(_) {
      let _ = _(),
        _ = _;
      return (
        _.filter((_) => _.rtStartDate < _)
          .filter((_) => _(_.discountEventID)?.collision_type != _)
          .forEach((_) => {
            _.rtEndDate + _ < _ && (_ = _.rtEndDate + _);
          }),
        _
      );
    }
    GetFutureDiscountRanges(_) {
      let _ = _.Get().GetPackage(_),
        _ = this.GetPackageDiscountsIncludingOverrides(_);
      if (!_ || !_) return [];
      let _ = Array.from(_.values()).sort(
          (_, _) => _.rtStartDate - _.rtStartDate,
        ),
        _ = _(),
        _ = _.GetReleaseDateRTime(),
        _ = _(_),
        _ = this.GetFurthestCooldownFromPastDiscounts(_),
        _ = Math.max(_, (_ ?? 0) + _, _ + _, _),
        _ = [],
        _ = new Set(),
        _ = _;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (_.nDiscountPct == 0 || _.rtStartDate < _) continue;
        let _ = _(_.discountEventID),
          _ = _.rtStartDate - _,
          _ = _?.collision_type == _;
        if (_ && ((_ = _.rtStartDate + _), _ + 1 < _.length)) {
          let _ = _[_ + 1];
          _(_.discountEventID)?.collision_type != `unique` &&
            (_ = Math.min(_, _.rtStartDate - _));
        }
        if (_ + _.PerDay < _) {
          let _ = {
            bIsAvailable: !0,
            rtStartDate: _,
            rtEndDate: _,
            rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(_, _, _),
          };
          (_.push(_), _.rgDiscountEventIDs.forEach((_) => _.add(_)));
        }
        let _ = {
          bIsAvailable: !1,
          rtStartDate: _.rtStartDate,
          rtEndDate: _.rtEndDate,
          discount: _,
          rgDiscountEventIDs: [_.discountEventID],
        };
        if (
          (_.push(_),
          _.add(_.discountEventID),
          (_ = _.rtEndDate + _),
          _ && ((_ = _.rtEndDate - _), _ - 1 >= 0))
        ) {
          let _ = _[_ - 1];
          _(_.discountEventID)?.collision_type != `unique` &&
            (_ = Math.max(_, _.rtEndDate + _));
        }
        let _ = _(_);
        _ - _ <= _.PerHour * 2 && (_ = _);
      }
      let _ = _(_ + _.PerYear / 2);
      if (_ + _.PerDay < _) {
        let _ = {
          bIsAvailable: !0,
          rtStartDate: _,
          rtEndDate: _,
          rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(_, _, _),
        };
        (_.push(_), _.rgDiscountEventIDs.forEach((_) => _.add(_)));
      }
      let _ = _().filter(
        (_) =>
          _.collision_type == `unique` &&
          !_.has(_._) &&
          this.m_mapPackageStateForDiscountEvents.get(_).get(_._).eState == 1,
      );
      for (let _ of _)
        for (let _ = 0; _ < _.length; _++)
          if (
            _[_].rtStartDate <= _.start_date &&
            (_ == _.length - 1 || _.start_date < _[_ + 1].rtStartDate)
          ) {
            let _ = {
              bIsAvailable: !0,
              bMajorSaleOnly: !0,
              rtStartDate: _.start_date,
              rtEndDate: _.end_date,
              rgDiscountEventIDs: [_._],
            };
            _.splice(_ + 1, 0, _);
            break;
          }
      return _;
    }
  };
function _(_, _, _) {
  let _ = 1,
    _ = [],
    _ = !1;
  if (_.Get().GetPackage(_)?.GetReleaseDateRTime() > _.start_date - _)
    return (
      (_ = 6),
      {
        ePackageDiscountState: _,
        rgConflictingDiscounts: _,
        bChangedLocally: _,
      }
    );
  if (_(_) > _.start_date - _)
    return (
      (_ = 7),
      {
        ePackageDiscountState: _,
        rgConflictingDiscounts: _,
        bChangedLocally: _,
      }
    );
  for (let _ of _) {
    if (_._ == _.discountEventID) continue;
    let _ = _(_.discountEventID),
      _ = _.collision_type == `unique` || _?.collision_type == `unique`,
      _ = _ ? _.start_date + _ : _.start_date - _,
      _ = _ ? _.end_date - _ : _.end_date + _;
    if (_.rtEndDate > _ && _ > _.rtStartDate) {
      if (((_ ||= _.bChangedLocally), _.nDiscountPct == 0)) continue;
      (_.push(_), (_ = _ ? 9 : 8));
    }
  }
  return {
    ePackageDiscountState: _,
    rgConflictingDiscounts: _,
    bChangedLocally: _,
  };
}
function _(_, _, _, _, _) {
  let _ = 5,
    _;
  if (_)
    ((_ = _.get(_)),
      !_ || _.restricted || _.pruned
        ? ((_ = 4),
          (_ = {
            restricted: !0,
          }))
        : (_ = _.opt_in ? 1 : _.invited || !_.time_opted_in ? 2 : 3));
  else if (!_.nBaseAppID) {
    let _ = _.GetIncludedAppIDs()
      .map((_) =>
        _.Get().GetOptInRegistrationAndEligibilityForApp(_)?.get(_.opt_in_name),
      )
      .filter(Boolean);
    _.some((_) => _.opt_in)
      ? (_ = 1)
      : _.some((_) => !_.restricted && !_.pruned) && (_ = 11);
  }
  return {
    ePackageDiscountState: _,
    optInRegistration: _,
  };
}
function _(_, _) {
  if (_.appids?.length > 0) {
    if (_?.GetIncludedAppIDs()?.length) {
      let _ = new Set(_.appids);
      for (let _ of _.GetIncludedAppIDs()) {
        if (_.has(_)) return !1;
        let _ = _.Get().GetApp(_)?.GetParentAppID();
        if (_ && _.has(_)) return !1;
      }
    }
    return !0;
  }
  return !1;
}
function _(_, _) {
  if (_.packageID != _.packageID) {
    let _ = _.Get().GetPackage(_.packageID)?.GetName(),
      _ = _.Get().GetPackage(_.packageID)?.GetName();
    return _(_, _);
  }
  {
    let _ = _.nDiscountPct == 0;
    return _ == (_.nDiscountPct == 0)
      ? _.rtStartDate - _.rtStartDate
      : _
        ? -1
        : 1;
  }
}
function _() {
  return _.useCallback(() => {
    _.Get();
  }, []);
}
function _() {
  let [_, _] = _.useState(_.IsInitialized());
  return (_(_.s_initializationCallbackList, _), _);
}
function _() {
  let [_, _] = _.useState(_.Get().GetLocalPackageDiscountOverrides());
  return (_(_.Get().GetLocalPackageDiscountOverrideCallbackList(), _), _);
}
function _() {
  return _.useCallback(
    () => _.Get().GetLocalPackageDiscountOverrides()?.length > 0,
    [],
  );
}
function _() {
  return _.useCallback(
    (_) => _.Get().DiscardAllLocalPackageDiscountOverrides(_),
    [],
  );
}
function _() {
  return _.useCallback(
    (_, _) => _.Get().OptInRegistrationUpdatedForApp(_, _),
    [],
  );
}
function _() {
  return _.useCallback(
    (_, _) => _.Get().DiscardLocalPackageDiscountOverride(_, _),
    [],
  );
}
function _(_, _) {
  let _ = _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_);
  return _?.eState == 1 ? (_?.discount?.nDiscountPct ?? 0) : null;
}
function _(_, _) {
  let [_, _] = _.useState(() =>
    _.Get().m_mapPackageStateForDiscountEvents.get(_)?.get(_),
  );
  return (
    _(_.Get().GetDiscountGridCellCallbackList(_, _), _),
    {
      packageState: _,
      fnSetDiscountPct: _.useCallback(
        (_) => {
          _.Get().OverridePackageDiscountPct(_, _, _);
        },
        [_, _],
      ),
    }
  );
}
function _() {
  return _.useCallback((_, _, _) => {
    let _ = [];
    for (let _ of _) {
      let _ = _.Get().OverridePackageDiscountPct(_, _, _);
      _ && _.push(_);
    }
    return _;
  }, []);
}
function _(_) {
  let _ = _(_);
  return _.useMemo(
    () => ({
      nAlreadySet: _.alreadySet.size,
      nAvailable: _.available.size,
      nConflicts: _.conflicts.size,
      nNeedRegistration: _.needRegistration.size,
      nIneligibile: _.ineligibile.size,
    }),
    [_],
  );
}
function _(_) {
  let [_, _] = _.useState(() => _(_)),
    _ = _.useCallback(() => {
      _(_(_));
    }, [_]);
  return (
    _.useEffect(_, [_, _]),
    _(_.Get().GetDiscountEventColumnCallbackList(_), _),
    _
  );
}
function _(_) {
  let _ = _.Get().GetAllPackageStatesForDiscountEvent(_),
    _ = {
      alreadySet: new Set(),
      available: new Set(),
      conflicts: new Set(),
      needRegistration: new Set(),
      ineligibile: new Set(),
    };
  for (let _ of _)
    switch (_?.eState) {
      case 0:
        break;
      case 1:
        (_.discount?.nDiscountPct ?? 0) > 0
          ? _.alreadySet.add(_.packageID)
          : _.available.add(_.packageID);
        break;
      case 6:
      case 7:
      case 8:
      case 9:
        _.conflicts.add(_.packageID);
        break;
      case 2:
      case 3:
        _.needRegistration.add(_.packageID);
        break;
      case 4:
      case 5:
      case 10:
        _.ineligibile.add(_.packageID);
    }
  return _;
}
function _(_) {
  return !!(
    _(_).some((_) => _.nDiscountPct > 0) ||
    (_.IsInitialized() &&
      _.Get()
        .GetAllPackageStatesForDiscountEvent(_)
        .some((_) => (_.discount?.nDiscountPct ?? 0) > 0))
  );
}
function _(_, _ = !0) {
  if (_(_)) return !0;
  if (!_ && _.startsWith(`weeklongdeal_`)) return !1;
  let _ = _(_);
  if (!_?.opt_in_name) return !0;
  let _ = _.Get().GetAllOptInRegistrations(_.opt_in_name);
  return _?.length ? _.some((_) => !_.restricted && !_.pruned) : !1;
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(_ ? _.Get().GetFutureDiscountRanges(_) : []),
    _ = _.useCallback(
      () => _(_ ? _.Get().GetFutureDiscountRanges(_) : []),
      [_, _],
    );
  return (
    _(_ && _.Get().GetLocalPackageDiscountOverrideCallbackList(), _),
    _(_ && _(_), _),
    _.useEffect(_, [_, _, _]),
    _
  );
}
function _(_) {
  let [_, _] = _.useState(() => _.Get().GetHighestPackageDiscount(_)),
    _ = _.useCallback(() => {
      _(_.Get().GetHighestPackageDiscount(_));
    }, [_, _]);
  return (_(_.Get().GetDiscountPackageCallbackList(_), _), _);
}
function _(_) {
  let _ = _.useCallback(
    (_) => {
      if (_())
        return (
          _.preventDefault(),
          (_.returnValue = _(`#PackageGrid_NavigationWarning_Title`)),
          _.returnValue
        );
    },
    [_],
  );
  _.useEffect(
    () => (
      window.addEventListener(`beforeunload`, _),
      () => window.removeEventListener(`beforeunload`, _)
    ),
    [_],
  );
}
var _ = `XIJjtmzsdXE-`,
  _ = `atxTK26HgeA-`,
  _ = `CC75tAFWmgY-`,
  _ = `EItyOoaortY-`,
  _ = `Kt0e55t5mcE-`,
  _ = `YRYvAld6OLQ-`,
  _ = `ffvuom7IPtc-`,
  _ = `_0Q3FuVae-A0-`,
  _ = _(),
  _ = (0, _.createContext)(void 0);
function _() {
  let _ = (0, _.useContext)(_);
  if (!_) throw Error(`Missing GridRowContextProvider`);
  return _;
}
function _(_) {
  let { children: _, fnBLocalChangesExist: _, fnWarnUser: _ } = _,
    _ = _(),
    _ = _.useMemo(
      () => ({
        client: _,
        fnBLocalChangesExist: _,
        fnWarnUser: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { row: _ } = _,
    _ = _.original.packageID || 0,
    _ = _(_),
    _ = _(_) < _,
    _ = (0, _.default)(_, _ && `sNTSaqCkChQ-`, _.original.packageType),
    _ = _(
      _
        ? `#PackageGrid_VisitPackageDiscount_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, _.jsx)(_, {
    className: _,
    toolTip: _,
    ..._,
  });
}
function _(_) {
  let { row: _ } = _,
    _ = _.original.packageID || 0,
    _ = _(_),
    _ = (0, _.default)(_, _ && `sNTSaqCkChQ-`, _.original.packageType),
    _ = _(
      _
        ? `#PackageGrid_VisitPackagePricing_Tooltip_Error`
        : `#PackageGrid_VisitPackagePricing_Tooltip`,
    );
  return (0, _.jsx)(_, {
    className: _,
    toolTip: _,
    showUnreleased: !0,
    ..._,
  });
}
function _(_) {
  let { column: _ } = _,
    [_, _] = (0, _.useState)(_.getFilterValue() ?? ``);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      _(`#PackageGrid_Column_PackageName`),
      (0, _.jsx)(`input`, {
        placeholder: _(`#PackageGrid_PackageNameFilterInputPrompt`),
        value: _,
        onChange: (_) => {
          (_(_.target.value.toString()),
            (0, _.startTransition)(() =>
              _.column.setFilterValue(_.target.value.toString()),
            ));
        },
      }),
    ],
  });
}
function _(_) {
  let { fnBLocalChangesExist: _, fnWarnUser: _ } = _(),
    { cell: _, row: _, className: _, toolTip: _ } = _,
    _ = _.original.packageID,
    _ =
      _.getValue() ??
      (0, _.jsxs)(`span`, {
        className: `Eh4oZS3AUbs-`,
        children: [` `, _(`#PackageGrid_PackageID`, _)],
      });
  return (0, _.jsxs)(_, {
    fnBLocalChangesExist: _,
    fnWarnUser: _,
    href: `${_.PARTNER_BASE_URL}store/packagelanding/${_}`,
    strToolTip: _,
    strClassName: _,
    children: [
      (0, _.jsx)(_, {
        color: `rgb(194, 45, 0)`,
        className: _,
      }),
      _.showUnreleased &&
        !(`released` in _.original && _.original.released) &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              toolTipContent: _(`#PackageGrid_PackageUnpublishedTooltip`),
              children: (0, _.jsx)(_, {
                width: `14px`,
                height: `14px`,
              }),
            }),
            ` \xA0`,
          ],
        }),
      ` `,
      _,
    ],
  });
}
function _() {
  return _.useMemo(
    () => ({
      accessorKey: `packageID`,
      header: _(`#PackageGrid_Column_PackageID`),
      enableSorting: !1,
      size: 90,
      cell: (_) =>
        (0, _.jsx)(_, {
          ..._,
          toolTip: _(`#PackageGrid_Column_PackageID_ttip`),
        }),
      meta: {
        cellClassname: _,
      },
    }),
    [],
  );
}
function _(_, _, _) {
  let _ = /^\d+$/.test(_),
    _ = _.original.packageID;
  return _ && _ && _.toString().startsWith(_)
    ? !0
    : _.getValue(_).toLowerCase().includes(_.toLowerCase());
}
function _(_) {
  return _.useMemo(
    () => ({
      accessorKey: `packageName`,
      header: _,
      enableSorting: !1,
      meta: {
        strHeaderTooltip: _(`#PackageGrid_Column_PackageName_ttip`),
        cellClassname: _,
      },
      filterFn: _,
      cell: _ ? _ : _,
      size: 300,
    }),
    [_],
  );
}
function _() {
  return _.useMemo(
    () => ({
      accessorKey: `appids`,
    }),
    [],
  );
}
function _() {
  return _.useMemo(
    () => ({
      accessorKey: `packageType`,
      header: _(`#PackageGrid_Column_PackageType`),
      enableSorting: !1,
      meta: {
        strHeaderTooltip: _(`#PackageGrid_Column_PackageType_ttip`),
        cellClassname: _,
      },
    }),
    [],
  );
}
function _(_) {
  let { row: _ } = _,
    { fnBLocalChangesExist: _, fnWarnUser: _ } = _(),
    _ = _.original.appids?.length ?? 0,
    _ = _.original.packageID;
  return (0, _.jsx)(_, {
    fnBLocalChangesExist: _,
    fnWarnUser: _,
    href: `${_.PARTNER_BASE_URL}store/packagelanding/${_}`,
    strToolTip: _(`#PackageGrid_VisitPackagePricing_Tooltip`),
    children: _ == 1 ? `1 appid` : _ + ` appids`,
  });
}
function _() {
  return _.useMemo(
    () => ({
      accessorKey: `appName`,
      header: _(`#PackageGrid_Column_AppName`),
      cell: _,
      size: 80,
      sortingFn: _,
      meta: {
        strHeaderTooltip: _(`#PackageGrid_Column_AppName_ttip`),
        bDisableSortButton: !0,
        cellClassname: _,
      },
    }),
    [],
  );
}
function _(_) {
  let _ = _.groupingValue,
    _ = _(`#PackageGrid_NoBaseGameFoundForPackage`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ === _
        ? (0, _.jsxs)(`span`, {
            title: _(`#PackageGrid_NoBaseGameExplanation`),
            children: [_, ` (?)`],
          })
        : _,
      (0, _.jsxs)(`span`, {
        className: _,
        children: [`(`, _(`#PackageGrid_PackageCount`, _.subRows.length), `)`],
      }),
    ],
  });
}
function _(_) {
  let {
    fnBLocalChangesExist: _,
    fnWarnUser: _,
    href: _,
    children: _,
    strToolTip: _,
    strClassName: _,
  } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _,
    className: _,
    children: (0, _.jsx)(`a`, {
      onClick: (_) => {
        _() && (_.preventDefault(), _(_, _));
      },
      href: _,
      children: _,
    }),
  });
}
var _ = class {
  constructor() {
    _(this);
  }
  m_mapProfiles = new Map();
  m_mapProfilesLoading = new Map();
  async LoadProfiles(_, _) {
    _(_.length <= 500, `Check LoadProfiles, requesting too many steam IDs`);
    let _ = _.filter(
      (_) => !this.m_mapProfiles.has(_) && !this.m_mapProfilesLoading.has(_),
    );
    if (_.length == 0) return this.m_mapProfilesLoading.get(_[0]);
    let _ = _.COMMUNITY_BASE_URL + `actions/ajaxresolveusers`,
      _ = _.default.get(_, {
        params: {
          steamids: _.join(`,`),
        },
        withCredentials: !0,
        cancelToken: _?.token,
      });
    _.forEach((_) => this.m_mapProfilesLoading.set(_, _));
    let _ = await _;
    _.data &&
      _.status == 200 &&
      _.data.forEach((_) => {
        ((_.avatar_hash = _.avatar_url),
          (_.avatar_url_medium = _(_.avatar_url, `medium`)),
          (_.avatar_url_full = _(_.avatar_url, `full`)),
          (_.avatar_url = _(_.avatar_url)),
          this.m_mapProfiles.set(_.steamid, _),
          this.m_mapProfilesLoading.delete(_.steamid));
      });
  }
  GetProfile(_) {
    return this.m_mapProfiles.get(_);
  }
  GetProfileByAccountID(_) {
    return this.m_mapProfiles.get(
      _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    );
  }
  GetProfileBySteamID(_) {
    return this.m_mapProfiles.get(_.ConvertTo64BitString());
  }
  BHasProfile(_) {
    return this.m_mapProfiles.has(_);
  }
  BHasProfileByAccountID(_) {
    return this.m_mapProfiles.has(
      _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
    );
  }
  BHasProfileBySteamID(_) {
    return this.m_mapProfiles.has(_.ConvertTo64BitString());
  }
  BHasAllProfilesBySteamID(_) {
    return !_.some((_) => !this.BHasProfileBySteamID(_));
  }
  GetProfileURLBySteamID(_) {
    let _ = this.GetProfileBySteamID(_);
    return _ && _.profile_url
      ? _.COMMUNITY_BASE_URL + `id/` + _.profile_url
      : _.COMMUNITY_BASE_URL + `profiles/` + _.ConvertTo64BitString();
  }
  GetPersonaNameBySteamID(_) {
    let _ = this.GetProfileBySteamID(_);
    return _ && _.persona_name ? _.persona_name : ``;
  }
};
_([_], _.prototype, `m_mapProfiles`, void 0);
var _ = new _();
function _(_) {
  let _ = _.useMemo(
      () => (_ ? (typeof _ == `string` ? new _(_) : _) : null),
      [_],
    ),
    [_, _] = (0, _.useState)(!!_ && !_.BHasProfileBySteamID(_));
  return (
    (0, _.useEffect)(() => {
      let _ = _.default.CancelToken.source();
      return (
        _ &&
          !_.BHasProfileBySteamID(_) &&
          _.LoadProfiles([_.ConvertTo64BitString()])
            .catch((_) => {
              let _ = _(_);
              console.error(
                `useUserProfile failed to load profile for ` +
                  _.ConvertTo64BitString() +
                  `: ` +
                  _.strErrorMsg,
                _,
              );
            })
            .finally(() => {
              _.token.reason || _(!1);
            }),
        () => _.cancel(`unmounting useUserProfile`)
      );
    }, [_]),
    [_, !!_ && _.GetProfileBySteamID(_)]
  );
}
function _(_) {
  return _(
    _.useMemo(() => (_ ? _.InitFromAccountID(_, _.EUNIVERSE) : null), [_]),
  );
}
