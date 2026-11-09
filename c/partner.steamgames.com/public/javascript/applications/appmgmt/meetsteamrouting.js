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
} from "./mobx.esm.js";
import { _, _, _ } from "./src.js";
import { _ } from "./usedataloader.client.js";
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
} from "./dialogs.js";
import { _ } from "./storebrowsequerycontext.js";
import { _, _, _ } from "./saletags.js";
import { _, _, _, _ } from "./react-router.js";
import { _ } from "./utils.js";
import { _ } from "./useQuery.js";
import { _ } from "./reactqueryroot.js";
import { _ } from "./dataloader.js";
import { _ } from "./appidutils.js";
import { _, _, _ } from "./react-router-dom.js";
import { _, _, _ } from "./partnereventstore.js";
import { _ } from "./getpreferredlocales.js";
import { _ } from "./formatnumber.js";
import { _ } from "./modals.js";
import { _ } from "./deckverified.js";
import { _ } from "./axios.js";
import { _ } from "./axiosutils.js";
import { _ } from "./historyutils.js";
import { _ } from "./throbber.js";
import { _, _ } from "./eventdevfeaturestore.js";
import { _ } from "./partnereventshared.module.js";
import "./steamid.js";
import "./partnereventdialog.module.js";
import { _ } from "./meetsteamclanid.js";
import { _, _ } from "./browserapi.js";
import { _ } from "./storeitemcache.js";
import { _, _, _ } from "./playerstore.js";
import { _ } from "./configdatadiag.js";
import { _ } from "./unknownroute.js";
import { _, _, _, _, _, _, _ } from "./adminshared.module.js";
import { _ } from "./importexport.js";
import { _ } from "./storebrowsesetup.js";
import { _ } from "./meetsteamregistrationhooks.js";
import { _, _, _, _ } from "./fancytable.js";
import { _ } from "./languagepicker.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./partnervalvecontactstore.js";
import { _, _, _ } from "./adminaccount.js";
import { _, _, _, _ } from "./collapseablesection.js";
import { _, _, _, _ } from "./partnerinfostore.js";
var _ = _(_(), 1),
  _ = new Set();
function _() {
  for (let _ of _) _(location.search);
}
function _() {
  let [_, _] = (0, _.useState)(location.search);
  return (
    (0, _.useEffect)(() => {
      function _() {
        _(location.search);
      }
      return (
        _.add(_),
        window.addEventListener(`popstate`, _),
        _(location.search),
        () => {
          (_.delete(_), window.removeEventListener(`popstate`, _));
        }
      );
    }, []),
    _
  );
}
function _(_, _) {
  let _ = _();
  return [
    (0, _.useMemo)(() => {
      let _ = new URLSearchParams(_.substring(1)).get(_);
      return _ == null
        ? _
        : _ == null
          ? _
          : typeof _ == `boolean`
            ? _.constructor(_ !== `false`)
            : _.constructor(_);
    }, [_, _, _]),
    _.useCallback(
      (_, _ = !1) => {
        let _ = new URLSearchParams(location.search.substring(1));
        if (_ != null) {
          if (_.get(_) == _) return;
          _.set(_, String(_));
        } else {
          if (!_.has(_)) return;
          _.delete(_);
        }
        (_
          ? history.replaceState(
              history.state,
              ``,
              decodeURIComponent(`${window.location.pathname}?${_}`),
            )
          : history.pushState(
              history.state,
              ``,
              decodeURIComponent(`${window.location.pathname}?${_}`),
            ),
          (0, _.startTransition)(_));
      },
      [_],
    ),
  ];
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            registration_group_id: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            registration_session_id: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            guest_count: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            jsondata: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            skip_email: {
              _: 8,
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
      return `CPartnerMeetSteam_UpdateRegistration_Request`;
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
      return `CPartnerMeetSteam_UpdateRegistration_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
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
      return `CPartnerMeetSteam_GetAvailability_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.availability || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            availability: {
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
      return `CPartnerMeetSteam_GetAvailability_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            session_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            guest_count: {
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
      return `CPartnerMeetSteam_GetAvailability_Response_Session`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
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
      return `CPartnerMeetSteam_GetRegistrations_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.registrations || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            registrations: {
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
      return `CPartnerMeetSteam_GetRegistrations_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.group_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group_id: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            session_id: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
              _: 3,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            guests_registered: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            jsondata: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            rt_attendance_marked: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            attendance_count: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            guests_attendance: {
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
      return `CPartnerMeetSteam_GetRegistrations_Response_Registration`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            steamid: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            accountids: {
              _: 3,
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
      return `CPartnerMeetSteam_EmailInvitees_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.num_emailed || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            num_emailed: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            num_skipped: {
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
      return `CPartnerMeetSteam_EmailInvitees_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.clan_event_gid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clan_event_gid: {
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
      return `CParterMeetSteam_TestFireEmails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.sessionids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            sessionids: {
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
      return `CParterMeetSteam_TestFireEmails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.rt_oldest_date || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            rt_oldest_date: {
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
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            clan_event_gids: {
              _: 2,
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
      return `CSaleEventOrganizerInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.info || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            info: {
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
      return `CPartnerMeetSteam_GetSaleEventOrganizers_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.accountids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            accountids: {
              _: 1,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            partnerids: {
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
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request`;
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
            partnerid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            realname: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            email: {
              _: 4,
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
      return `CPartnerEmailAndName`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.info || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            info: {
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
      return `CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`PartnerMeetSteam.UpdateRegistration#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.UpdateRegistration = _;
  function _(_, _, _) {
    return _.SendMsg(`PartnerMeetSteam.GetAvailability#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetAvailability = _;
  function _(_, _, _) {
    return _.SendMsg(`PartnerMeetSteam.GetRegistrations#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.GetRegistrations = _;
  function _(_, _, _) {
    return _.SendMsg(`PartnerMeetSteam.EmailInvitees#1`, _(_, _, _), _, {
      ePrivilege: 4,
    });
  }
  _.EmailInvitees = _;
  function _(_, _, _) {
    return _.SendMsg(`PartnerMeetSteam.TestFireEmails#1`, _(_, _, _), _, {
      ePrivilege: 4,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.TestFireEmails = _;
  function _(_, _, _) {
    return _.SendMsg(
      `PartnerMeetSteam.GetSaleEventOrganizers#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 4,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetSaleEventOrganizers = _;
  function _(_, _, _) {
    return _.SendMsg(
      `PartnerMeetSteam.GetBatchPartnerEmailAndName#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.GetBatchPartnerEmailAndName = _;
})((_ ||= {}));
var _ = _(_());
function _(_, _ = !1) {
  let [_, _ = `00:00:00`] = _.trim().split(/\s+/),
    [_, _, _] = _.split(`-`).map(Number),
    [_, _, _] = _.split(`:`).map(Number),
    _ = _
      ? Date.UTC(_, _ - 1, _, _, _, _ ?? 0)
      : new Date(_, _ - 1, _, _, _, _ ?? 0).getTime();
  return Math.floor(_ / 1e3);
}
function _() {
  let [_] = _.useState(() => _(`events_list`, `application_config`)),
    [_] = _(`filter`),
    _ = _(),
    [_, _] = _.useMemo(() => {
      let _ = [],
        _ = [];
      return (
        _.forEach((_) => {
          _.endtime && _(_.endtime) < _ ? _.push(_) : _.push(_);
        }),
        [_, _]
      );
    }, [_, _]);
  return {
    rgOldEvents: _,
    rgEvents: _,
    selectConference: (0, _.useMemo)(
      () => _.find((_) => _._ === _?.toLocaleLowerCase()),
      [_, _],
    ),
  };
}
function _(_) {
  return [`usePartnerRevAndBestAppSlow`, _];
}
async function _(_) {
  let _ = `${_.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
    _ = {
      sessionid: _(),
      partnerid: _,
    };
  return (
    await _.default.get(_, {
      params: _,
    })
  )?.data?.data;
}
function _(_) {
  let _ = _({
    queryKey: _(_),
    queryFn: async () => _(_),
    enabled: !!_,
  });
  return _.isLoading ? null : _.data;
}
function _(_, _) {
  return _.getQueryData([`usePartnerRevAndBestAppSlow`, _]);
}
function _(_, _, _) {
  return _({
    queryKey: [`useMeetSteamGetAllRegistration`, _, _],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_clan_event_gid(_);
      let _ = await _.GetRegistrations(_, _);
      return _.BSuccess()
        ? _.Body()
            .registrations()
            .map((_) => _.toObject())
        : [];
    },
    enabled: _ != null && _ != 0,
  });
}
function _(_) {
  let _ = _({
    queryKey: [`useMeetSteamSaleOperators`],
    queryFn: async () => {
      let _ = _.Init(_),
        _ = new Date();
      (_.setFullYear(_.getFullYear() - 2), _.Body().set_rt_oldest_date(0));
      let _ = await _.GetSaleEventOrganizers(_, _);
      return _.BSuccess()
        ? _.Body()
            .info()
            .map((_) => _.toObject())
        : [];
    },
  });
  return _.isLoading ? null : _.data;
}
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      (async () => {
        let _ = 0;
        for (let _ of _) {
          let _ = _.results.partner_id;
          (new _(_.steamid).GetAccountID(),
            await Promise.all([
              _(_),
              _.prefetchQuery({
                queryKey: _(_),
                queryFn: async () => _(_),
              }),
              _(_, _),
            ]),
            ++_,
            _(_));
        }
        _(!0);
      })();
    }, [_, _]),
    {
      bComplete: _,
      nCount: _,
    }
  );
}
var _ = _(_()),
  _ = `ANKJ3z6hmzE-`,
  _ = `qjW9VuTG-ok-`,
  _ = `BKpSlMPxT2U-`,
  _ = `zCTRiSHH0GY-`,
  _ = `iEL3fKaVlyw-`,
  _ = `OW-hVnCR7gA-`,
  _ = `Ct0fFffDoxk-`,
  _ = `eQA2L6b-b-s-`,
  _ = `KurbwRHiVjM-`,
  _ = `ZjfFKCtIfsE-`,
  _ = `mkPZr6a6FgQ-`,
  _ = `GPfndBivMVM-`,
  _ = `N4NsybcgJ9c-`,
  _ = `JE--rcF4UwQ-`,
  _ = _();
function _(_) {
  let _ = _();
  return (0, _.jsx)(`div`, {
    children: (0, _.jsx)(`ol`, {
      children: Array.from(_.entries()).map(([_, _]) =>
        (0, _.jsx)(
          `li`,
          {
            children: (0, _.jsx)(`a`, {
              href: `${_.PARTNER_BASE_URL}meetsteam/surveyresults/${_}`,
              target: `_blank`,
              children: _,
            }),
          },
          _,
        ),
      ),
    }),
  });
}
function _() {
  let [_] = (0, _.useState)(() => {
    let _ = _(`survey_list`, `application_config`) || {},
      _ = new Map();
    for (let _ of Object.keys(_)) _.set(_, _[_]);
    return _;
  });
  return _;
}
var _ = _.createContext(void 0);
function _(_) {
  let { children: _ } = _,
    [_, _] = _(`showpastevents`, !1);
  return (0, _.jsx)(_.Provider, {
    value: {
      bShowArchived: _,
      setShowArchived: _,
    },
    children: _,
  });
}
var _ = () => {
    let _ = (0, _.useContext)(_);
    if (!_)
      throw Error(
        `useMeetSteamArchived must be used within MeetSteamArchivedProvider`,
      );
    return _;
  },
  _ = `YH1NKi9pxv8-`,
  _ = `NA245EcdHK8-`,
  _ = `mGaVwRTYiGU-`,
  _ = `mV7eMKSof-E-`,
  _ = `_57Jpn4Iw0WA-`,
  _ = `hEpVF2SPtdY-`,
  _ = `sUZ3T3HpmCo-`,
  _ = `QtPZ-KRM8jg-`,
  _ = class _ {
    m_steamInterface;
    GetSaleFeatureTransport() {
      return this.m_steamInterface;
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    Init() {
      this.m_steamInterface = _(new _(_.WEBAPI_BASE_URL));
    }
  };
function _() {
  return _.Get().GetSaleFeatureTransport().GetServiceTransport();
}
async function _(_) {
  let _ = {
      sessionid: _(),
      gids: _,
    },
    _ = `${_.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
    _ = await fetch(_, {
      method: `POST`,
      headers: {
        "Content-Type": `application/json`,
      },
      body: JSON.stringify(_),
    });
  if (!_._) throw Error(`Failed to read registrations for gids ${_.join(`,`)}`);
  let _ = await _.json();
  if (_.success != 1)
    throw Error(
      `Failed to read registrations for gids ${_.join(`,`)}: ${_.msg}`,
    );
  return _.lists ?? [];
}
function _(_) {
  return _({
    queryKey: [],
    queryFn: async () => await _(_),
    enabled: _ && _.length > 0,
  });
}
async function _(_) {
  let _ = `${_.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${_}`,
    _ = await fetch(_);
  if (!_._) throw Error(`Failed to read the partner list for account ${_}`);
  let _ = await _.json();
  if (_.success != 1)
    throw Error(`Failed to read the partner list for account ${_}: ${_.msg}`);
  return _.partners ?? [];
}
function _(_) {
  return _({
    queryKey: [`MeetSteamPartnersForAccount`, _],
    queryFn: () => _(_),
    enabled: _ > 0,
  });
}
function _(_, _ = {}) {
  let {
      nTimeoutMS: _ = 350,
      nTimeoutExtensionMS: _ = 125,
      nMaxTimeoutExtensions: _ = 3,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useRef(void 0);
  return (
    _.useEffect(() => {
      let _ = performance.now();
      _.current
        ? _ - _.current.tsLastChange < _ * _ &&
          (_.current.tsScheduledTimeout = Math.max(
            performance.now() + _,
            _.current.tsScheduledTimeout,
          ))
        : (_.current = {
            tsLastChange: _,
            tsScheduledTimeout: performance.now() + _,
          });
      let _ = _.current.tsScheduledTimeout - performance.now(),
        _ = window.setTimeout(() => {
          ((_.current = void 0), _(_));
        }, _);
      return () => window.clearTimeout(_);
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let _ = _.trim();
  if (!/^\d+$/.test(_)) return 0;
  if (Number(_) > 4294967295) {
    let _ = new _(_);
    return _.BIsValid() && _.BIsIndividualAccount() ? _.GetAccountID() : 0;
  }
  return Number(_);
}
function _(_) {
  let { hideModal: _, gid: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(``),
    [_, _] = _.useState(!1),
    _ = _(_),
    _ = _(_),
    _ = !!_.trim() && !_,
    _ = _(),
    _ = _(_),
    _ = _.data,
    _ = _({
      queryKey: [`MeetSteamInviteDirectDialog`, _, _],
      queryFn: async () => {
        let _ = {
            steamid: _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString(),
            gid: _,
            type: 6,
          },
          _ = await _.GetUserActionData(_, _);
        return _.BSuccess() && _.Body().jsondata()
          ? JSON.parse(_.Body().jsondata())
          : {};
      },
      enabled: !!_ && _ > 0,
    });
  return (
    _.useEffect(() => {
      if (!_.isLoading && _.isSuccess) {
        let _ = _?.length == 1 ? _[0].partnerid.toString() : ``;
        (_(_.data.partner_id ? _.data.partner_id.toString() : _),
          _(_.data.email_override ?? ``),
          _(_.data.allow_registration_if_full ?? !1));
      }
    }, [_.isLoading, _.isSuccess, _.data, _]),
    (0, _.jsxs)(_, {
      strTitle: `Invite User`,
      bOKDisabled: !_ || _ || _.isLoading,
      onOK: async () => {
        _(!0);
        let _ = await _(
            _,
            [
              {
                nAccountID: _,
                nPartnerID: Number.parseInt(_) > 0 ? Number.parseInt(_) : 0,
                strEmailOverride: _,
                bAllowRegistrationIfFull: _,
              },
            ],
            !0,
          ),
          _ = _ && _.success == 1;
        (_ || _(`We hit error during invite, check console: ` + _?.msg),
          _(!1),
          _.refetch(),
          _ && _());
      },
      onCancel: _,
      children: [
        !!_ &&
          (0, _.jsx)(`div`, {
            className: void 0,
            children: _,
          }),
        !_ &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                children: `Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.`,
              }),
              (0, _.jsx)(_, {
                type: `text`,
                label: `Account ID or Steam ID`,
                description: `Accepts either the 32-bit account id or the 64-bit steam id`,
                onChange: (_) => _(_.currentTarget.value),
                value: _,
              }),
              _ &&
                (0, _.jsx)(`div`, {
                  className: void 0,
                  children: `That is not a valid account id or steam id.`,
                }),
              _ != 0 &&
                (0, _.jsx)(_, {
                  nAccountID: _,
                }),
              _ != 0 &&
                !_.isLoading &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      type: `number`,
                      label: `Partner ID (optional)`,
                      onChange: (_) => _(_.currentTarget.value),
                      value: _,
                    }),
                    (0, _.jsx)(_, {
                      rgPartners: _,
                      bLoading: _.isLoading,
                      bFailed: _.isError,
                      strPartnerID: _,
                      SetPartnerID: _,
                    }),
                    (0, _.jsx)(_, {
                      type: `text`,
                      label: `Email override (optional)`,
                      onChange: (_) => _(_.currentTarget.value.trim()),
                      value: _,
                    }),
                    (0, _.jsx)(_, {
                      controlled: !0,
                      checked: _,
                      onChange: _,
                      label: `Allow if registration is full`,
                    }),
                  ],
                }),
            ],
          }),
        _ &&
          (0, _.jsx)(_, {
            size: `small`,
            position: `center`,
            string: _(`#Saving`),
          }),
        _.isLoading &&
          (0, _.jsx)(_, {
            size: `small`,
            position: `center`,
            string: _(`#Loading`),
          }),
      ],
    })
  );
}
function _(_) {
  let { nAccountID: _ } = _,
    [_, _] = _(_);
  if (_)
    return (0, _.jsx)(_, {
      size: `small`,
      position: `center`,
      string: _(`#Loading`),
    });
  if (!_)
    return (0, _.jsx)(`div`, {
      className: void 0,
      children: `We could not find an account for ${_}.`,
    });
  let _ = _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`img`, {
        className: _,
        src: _.avatar_url?.replace(/\.jpg$/, `_medium.jpg`),
      }),
      (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.persona_name,
          }),
          (0, _.jsx)(`a`, {
            href: `${_.SUPPORT_BASE_URL}account/overview/${_}`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            children: `Account ${_} / SteamID ${_}`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
    rgPartners: _,
    bLoading: _,
    bFailed: _,
    strPartnerID: _,
    SetPartnerID: _,
  } = _;
  return _
    ? (0, _.jsx)(_, {
        size: `small`,
        position: `center`,
        string: `Looking up partner membership`,
      })
    : _
      ? (0, _.jsx)(`div`, {
          className: _,
          children: `We could not look up partner membership, enter the partner id above.`,
        })
      : !_ || _.length == 0
        ? (0, _.jsx)(`div`, {
            className: _,
            children: `This account is not a member of any partner.`,
          })
        : (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `Member of, click to use:`,
              }),
              _.map((_) =>
                (0, _.jsxs)(
                  `a`,
                  {
                    href: `#`,
                    className: _(_, _.partnerid.toString() == _ ? _ : ``),
                    onClick: (_) => {
                      (_.preventDefault(), _(_.partnerid.toString()));
                    },
                    children: [_.partner_name, ` (`, _.partnerid, `)`],
                  },
                  _.partnerid,
                ),
              ),
            ],
          });
}
function _(_) {
  let { hideModal: _, gid: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return (0, _.jsxs)(_, {
    strTitle: `Invite Users`,
    bOKDisabled: !_ || _.length == 0 || _ != null,
    strCancelButtonText: _ === null ? `Cancel` : `Close`,
    onOK: async () => {
      _(!0);
      let _ = await _(_, _, !1);
      (_?.success == 1
        ? (_(_.rgInvitedAccounts.length), _(_.rgSkippedAccounts.length))
        : _(`We hit error during invite, check console: ` + _?.msg),
        _(!1));
    },
    onCancel: () => {
      (_(null), _(null), _(!1), _(null), _());
    },
    children: [
      !!_ &&
        (0, _.jsx)(`div`, {
          className: void 0,
          children: _,
        }),
      _ != null &&
        (0, _.jsxs)(`div`, {
          children: [
            `Invited `,
            _(_),
            ` accounts, skipped previously invited `,
            _(_),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          size: `small`,
          position: `center`,
          string: _(`#Saving`),
        }),
      (0, _.jsx)(`div`, {
        children: `Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.`,
      }),
      _ == null
        ? (0, _.jsx)(_, {
            setInvites: _,
          })
        : (0, _.jsx)(_, {
            rgInvites: _,
          }),
    ],
  });
}
function _(_) {
  let { rgInvites: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        children: [`Total Invites Parsed: `, _.length, ` `],
      }),
      (0, _.jsxs)(`table`, {
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `AccountID`,
                }),
                (0, _.jsx)(`th`, {
                  children: `PartnerID`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Email Override`,
                }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _.map((_, _) =>
              (0, _.jsxs)(
                `tr`,
                {
                  children: [
                    (0, _.jsx)(`td`, {
                      children: _.nAccountID,
                    }),
                    (0, _.jsx)(`td`, {
                      children: _.nPartnerID,
                    }),
                    (0, _.jsx)(`td`, {
                      children: _.strEmailOverride,
                    }),
                  ],
                },
                `invite` + _.nAccountID + `_` + _,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { setInvites: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: `Format for CSV File, please use the template below:`,
      }),
      (0, _.jsxs)(`ul`, {
        children: [
          (0, _.jsxs)(`li`, {
            children: [
              (0, _.jsx)(`b`, {
                children: `nAccountID`,
              }),
              ` - required, 32-bit integer value, not the 64-bit steam id`,
            ],
          }),
          (0, _.jsxs)(`li`, {
            children: [
              (0, _.jsx)(`b`, {
                children: `nPartnerID`,
              }),
              ` - (preferred for biz contact)`,
            ],
          }),
          (0, _.jsxs)(`li`, {
            children: [
              (0, _.jsx)(`b`, {
                children: `strOverrideEmail`,
              }),
              ` - (optional, we wil use the email associated with the account and partner or the steamid itself)`,
            ],
          }),
        ],
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: async (_) => {
          (_.preventDefault(), _.stopPropagation());
          let _ = [];
          (_.push([`nAccountID`, `nPartnerID`, `strEmailOverride`]),
            _.push([`388445686`, `1`, `adils@valvesoftware.com`]),
            _.WriteCSVToFile(_, `invite_template.csv`));
        },
        children: `Download Template Example`,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        children: (0, _.jsxs)(`label`, {
          className: _,
          htmlFor: `import-discount-input`,
          children: [
            `Choose CSV File`,
            (0, _.jsx)(`input`, {
              _: `import-discount-input`,
              type: `file`,
              style: {
                display: `none`,
              },
              onChange: async (_) => {
                if (_.target.files.length >= 1) {
                  let _ = _.target.files[0],
                    _ = await _.ParseCSVFile(_);
                  if (_?.data) {
                    let _ = [];
                    (_.data.forEach((_) => {
                      if (_.nAccountID) {
                        let _ = {
                          nAccountID: Number.parseInt(_.nAccountID),
                        };
                        (_.nPartnerID &&
                          (_.nPartnerID = Number.parseInt(_.nPartnerID)),
                          _.strEmailOverride &&
                            (_.strEmailOverride = _.strEmailOverride),
                          _.push(_));
                      }
                    }),
                      _(_));
                  }
                }
              },
            }),
          ],
        }),
      }),
    ],
  });
}
async function _(_, _, _) {
  let _ = _.map((_) => _.nAccountID).join(`,`),
    _ = _.map((_) => _.nPartnerID).join(`,`),
    _ = _.map((_) => _.strEmailOverride).join(`,`),
    _ = _.map((_) => (_.bAllowRegistrationIfFull ? `1` : `0`)).join(`,`),
    _ = new FormData();
  (_.append(`sessionid`, _()),
    _.append(`gid`, _),
    _.append(`accounts`, _),
    _.append(`partnerids`, _),
    _.append(`emailoverride`, _),
    _.append(`allowregistrationiffull`, _),
    _.append(`forceupdate`, _ ? `1` : `0`));
  let _ = `${_.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
  try {
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    if (_?.data?.success != 1) {
      let _ = _(_);
      console.error(`DisplayPartnerEventRow error: ` + _.strErrorMsg, _);
    }
    return _?.data;
  } catch (_) {
    let _ = _(_);
    console.error(`DisplayPartnerEventRow error: ` + _.strErrorMsg, _);
  }
  return null;
}
var _ = _(_());
function _(_) {
  let _ = _(),
    _ = _.useContext(_),
    _ = _(_(_, _, _));
  return _.isLoading ? null : _.data;
}
function _(_) {
  let _ = _(),
    _ = _.useContext(_);
  return _({
    queries: _.map((_) => _(_, _, _)),
  });
}
var _ = _.createContext({
  loadMeetSteamAllRegistration: async (_, _) => await _(_).load(_),
});
function _(_, _, _) {
  return {
    queryKey: [`MeetSteamAllRegistrationStatus`, _],
    queryFn: () => _.loadMeetSteamAllRegistration(_, _),
    enabled: !!_,
  };
}
var _;
function _(_) {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = _.Init(_);
        (_.Body().set_gids([..._]), _.Body().set_type(6));
        let _ = await _.GetMultipleUserActionData(_, _);
        if (!_.BSuccess())
          throw `Failed to call GetMultipleUserActionData with details: ${_.GetErrorMessage()}`;
        let _ = new Map();
        return (
          _.Body()
            .entries()
            .forEach((_) => {
              try {
                let _ = JSON.parse(_.jsondata());
                (`steamid` in _ && _.steamid) ||
                  ((_.steamid = _.steamid()),
                  (_.accountid = new _(_.steamid).GetAccountID()));
                let _ = _.gid();
                return (_.has(_) ? _.get(_).push(_) : _.set(_, [_]), [_]);
              } catch {
                throw `Failed to parse GetMultipleUserActionData with details: ${_.steamid()}`;
              }
            }),
          _.map((_) => _.get(_) ?? null)
        );
      },
      {
        maxBatchSize: 5,
      },
    )),
    _
  );
}
function _(_, _) {
  let _ = _(),
    _ = _.useContext(_),
    _ = _(_(_, _, _, _));
  return _.isLoading ? null : _.data;
}
function _(_, _) {
  let _ = _(),
    _ = _.useContext(_);
  return _({
    queries: _.map((_, _) => _(_, _, _, _[_])),
  });
}
function _(_, _) {
  return _.getQueryData([`PartnerEmailAndName`, _, _]);
}
var _ = _.createContext({
  loadPartnerEmailAndName: async (_, _, _) =>
    await _(_).load({
      accountID: _,
      partnerID: _,
    }),
});
function _(_, _, _, _) {
  return {
    queryKey: [`PartnerEmailAndName`, _, _],
    queryFn: () => _.loadPartnerEmailAndName(_, _, _),
    enabled: !!_ || !!_,
  };
}
var _;
function _(_) {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = _.Init(_);
        (_.Body().set_accountids(_.map((_) => _.accountID)),
          _.Body().set_partnerids(_.map((_) => _.partnerID)));
        let _ = await _.GetBatchPartnerEmailAndName(_, _);
        if (!_.BSuccess())
          throw `Failed to call GetBatchPartnerEmailAndName with details: ${_.GetErrorMessage()}`;
        let _ = new Map();
        return (
          _.Body()
            .info()
            .forEach((_) => {
              _.set(`` + _.accountid() + `_` + _.partnerid(), _.toObject());
            }),
          _.map((_) => _.get(`` + _.accountID + `_` + _.partnerID) ?? null)
        );
      },
      {
        maxBatchSize: 100,
      },
    )),
    _
  );
}
function _(_) {
  let { rgEventGIDs: _ } = _,
    [_, _, _] = _(),
    [_, _] = (0, _.useState)(null);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        children: ` | `,
      }),
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: (_) => {
          (_.preventDefault(), _.stopPropagation(), _());
        },
        children: `Analyse Top Partner Coverage`,
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            closeModal: _,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              _ == null
                ? (0, _.jsx)(_, {
                    rgEventGIDs: _,
                    fnSelectedEvents: _,
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        rgGidMeetSteamEvents: _,
                      }),
                      (0, _.jsx)(_, {
                        onClick: () => _(null),
                        children: `Reset Selection`,
                      }),
                    ],
                  }),
          }),
        }),
      }),
    ],
  });
}
var _ = _();
function _(_) {
  return (
    (_ = _?.filter(
      (_, _) =>
        _ == 0 || !_.slice(0, _).some((_) => _.accountid == _.accountid),
    )),
    _?.map(
      (_) => _.name || _(_.accountid, _.partner_id)?.realname || _.accountid,
    ).join(`,`) || ``
  );
}
function _(_) {
  return _(_.cell.getValue());
}
function _(_, _) {
  let _ = _(_),
    [_, _, _] = (0, _.useMemo)(() => {
      if (_.filter((_) => !_.isLoading).length != _.length)
        return [null, [], []];
      let _ = new Map(),
        _ = new Set(_),
        _ = new Map();
      _.forEach((_) =>
        _.data.forEach((_) => {
          if (
            _.has(_.partner_id) &&
            (_.has(_.partner_id)
              ? _.get(_.partner_id).push(_)
              : _.set(_.partner_id, [_]),
            !_.name)
          ) {
            let _ = _.accountid;
            _.set(`${_}_${_.partner_id}`, {
              accountID: _,
              partnerID: _.partner_id,
            });
          }
        }),
      );
      let _ = Array.from(_.values());
      return [_, _.map((_) => _.accountID), _.map((_) => _.partnerID)];
    }, [_, _]),
    _ = _(_, _);
  return _.filter((_) => !_.isLoading).length == _.length ? _ : null;
}
function _(_) {
  let { rgGidMeetSteamEvents: _ } = _,
    _ = _(),
    _ = _(_),
    _ = _(_, _),
    _ = (0, _.useMemo)(() => {
      if (!_ || !_) return null;
      let _ = [];
      return (
        _.forEach((_) => {
          let _ = _.get(_);
          _.push({
            partner_id: _,
            partner_name: _(_)?.name || `Unknown`,
            invitations:
              _?.filter(
                (_) =>
                  _.invited &&
                  !Object.keys(_).some((_) =>
                    _.startsWith(`registration_emailed`),
                  ),
              ) || [],
            registrations:
              _?.filter((_) =>
                Object.keys(_).some((_) =>
                  _.startsWith(`registration_emailed`),
                ),
              ) || [],
          });
        }),
        _
      );
    }, [_, _, _]),
    _ = (0, _.useMemo)(
      () => [
        _.accessor(`partner_id`, {
          header: `Partner ID`,
          size: 100,
        }),
        _.accessor(`partner_name`, {
          header: `Partner Name`,
          size: 300,
        }),
        _.accessor(`invitations`, {
          header: `Invitations`,
          cell: _,
          size: 300,
        }),
        _.accessor(`registrations`, {
          header: `Registered to Attend`,
          cell: _,
          size: 300,
        }),
      ],
      [],
    );
  function _() {
    let _ = [],
      _ = [];
    for (let _ of _) _.push(_.header);
    _.push(_);
    for (let _ of _) {
      let _ = [];
      for (let _ of _) {
        let _ = _[_.accessorKey];
        _.push(
          _.accessorKey == `invitations` || _.accessorKey == `registrations`
            ? _(_)
            : _.toString(),
        );
      }
      _.push(_);
    }
    _.WriteCSVToFile(_, `partneranalysis.csv`);
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: `Partner Analysis`,
      }),
      _
        ? (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                _: `download-csv`,
                onClick: _,
                style: {
                  width: `120px`,
                },
                children: `Download CSV`,
              }),
              (0, _.jsx)(_, {
                columns: _,
                data: _,
                getRowKey: (_) => _,
                stickyHeader: !0,
                nItemHeight: 28,
                overscan: _.length,
              }),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(_, {
                _: `download-csv`,
                onClick: _,
                style: {
                  width: `120px`,
                },
                children: `Download CSV`,
              }),
            ],
          })
        : (0, _.jsx)(_, {
            string: _(`#Loading`),
            position: `center`,
          }),
    ],
  });
}
function _(_) {
  let { rgEventGIDs: _, fnSelectedEvents: _ } = _,
    [_, _] = (0, _.useState)([]),
    { bShowArchived: _, setShowArchived: _ } = _(),
    { bIsLoading: _, events: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = Math.floor(new Date().getTime() / 1e3);
      return _ && _ ? [..._] : _?.filter((_) => _.endTime >= _);
    }, [_, _]);
  return _
    ? (0, _.jsx)(_, {
        string: `Loading...`,
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            checked: _,
            onChange: _,
            label: `Show Past Events`,
          }),
          (0, _.jsx)(_, {
            children: `Choose Events`,
          }),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                gidClanEvent: _.GID,
                rgSelected: _,
                fnSetSelected: _,
              },
              _.GID,
            ),
          ),
          (0, _.jsx)(_, {
            disabled: _.length == 0,
            onClick: () => _(_),
            children: `Continue`,
          }),
        ],
      });
}
function _(_) {
  let { gidClanEvent: _, rgSelected: _, fnSetSelected: _ } = _,
    _ = _(_).GetNameWithFallback(0);
  return (0, _.jsx)(_, {
    label: _,
    checked: _.includes(_),
    onChange: (_) => {
      let _ = _.indexOf(_),
        _ = _ >= 0;
      _ && !_
        ? _([..._, _])
        : !_ && _ && _([..._.slice(0, _), ..._.slice(_ + 1)]);
    },
  });
}
function _() {
  let [_] = (0, _.useState)(() =>
    _(`partners_to_verify`, `application_config`),
  );
  return _;
}
var _ = `_8ooyF9fBMl4-`,
  _ = `x9OVF3IVNDY-`;
function _(_) {
  let { hideModal: _, gid: _ } = _,
    _ = _(_),
    _ = _(),
    [_, _] = (0, _.useMemo)(
      () =>
        _
          ? [
              _.length,
              _.filter(
                (_) =>
                  !_.invitation_emailed && !_.invite_registration_auto_create,
              ).length,
            ]
          : [0, 0],
      [_],
    );
  return (0, _.jsxs)(_, {
    bAlertDialog: !0,
    bAllowFullSize: !0,
    bDisableBackgroundDismiss: !0,
    closeModal: _,
    strDescription: `Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.`,
    strTitle: `Invitation And Registration Status`,
    children: [
      !_ &&
        (0, _.jsx)(_, {
          size: `medium`,
          position: `center`,
          string: _(`#Loading`),
        }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(`div`, {
              children: [`There are `, _, ` invitation/registration records.`],
            }),
            _ > 0 &&
              (0, _.jsxs)(_, {
                onClick: async () => {
                  await _(_, _);
                },
                children: [
                  _,
                  ` invitation emails are queued for this event. Send them all now?`,
                ],
              }),
            (0, _.jsxs)(`table`, {
              children: [
                (0, _.jsx)(`thead`, {
                  children: (0, _.jsxs)(`tr`, {
                    children: [
                      (0, _.jsx)(`th`, {
                        children: `SteamID`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `Name`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `invited`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `Invite Emailed`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `Partner`,
                      }),
                      (0, _.jsx)(`th`, {
                        children: `Email Override`,
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(`tbody`, {
                  children: _?.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        reg: _,
                      },
                      `regentry_` + _.steamid,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { reg: _ } = _,
    [_] = _(_.partner_id);
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _.steamid,
      }),
      (0, _.jsx)(`td`, {
        children: _.name,
      }),
      (0, _.jsx)(`td`, {
        children: _.invited ? `YES` : ``,
      }),
      (0, _.jsx)(`td`, {
        children: _.invitation_emailed ? `YES` : ``,
      }),
      (0, _.jsxs)(`td`, {
        children: [_?.name, ` (`, _.partner_id, `)`],
      }),
      (0, _.jsx)(`td`, {
        children: _.email_override,
      }),
    ],
  });
}
function _(_) {
  let { hideModal: _, gid: _, title: _, group: _, session: _ } = _,
    _ = _(),
    _ = _(_),
    _ = _(_, _, _?.group_id),
    [_, _] = (0, _.useMemo)(() => {
      let _ = _?.data?.filter((_) => _.session_id == _._),
        _ = new Map(),
        _ = new Map();
      return (
        _?.forEach((_) => {
          let _ = new _(_.steamid).GetAccountID();
          if ((_.set(_, _), _.jsondata)) {
            let _ = JSON.parse(_.jsondata);
            _.pre_event_partner_questions &&
              _.set(_, _.pre_event_partner_questions);
          }
        }),
        [_, _]
      );
    }, [_, _]),
    _ = _?.filter((_) => _.has(new _(_.steamid).GetAccountID()));
  return (0, _.jsxs)(_, {
    bAlertDialog: !0,
    bAllowFullSize: !0,
    bDisableBackgroundDismiss: !0,
    closeModal: _,
    strDescription: `Show who is registered for this session`,
    strTitle: `Session Registration`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`a`, {
          onClick: () => _(_, _, _, _, _, _),
          children: `Export to CSV`,
        }),
      }),
      (0, _.jsxs)(`table`, {
        className: _,
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `SteamID`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Name`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Invited`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Partner`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Game`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Email Override`,
                }),
                (0, _.jsxs)(`th`, {
                  children: [
                    `Guest Count `,
                    (0, _.jsx)(_, {
                      tooltip: `Additional guests, doesn't include main registrant`,
                    }),
                  ],
                }),
                (0, _.jsx)(`th`, {
                  children: `Reg Confirm Email Sent`,
                }),
                _.ask_registration_question &&
                  (0, _.jsx)(`th`, {
                    children: `Answer`,
                  }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _?.flatMap((_) => {
              let _ = new _(_.steamid).GetAccountID(),
                _ = [
                  (0, _.jsx)(
                    _,
                    {
                      group: _,
                      regInfo: _.get(_),
                      inviteInfo: _,
                      preRegQuestions: _.get(_),
                    },
                    `regrow` + _.steamid,
                  ),
                ];
              for (let _ = 0; _ < _.guest_names?.length; _++)
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      guestName: _.guest_names[_],
                    },
                    `regguestrow` + _.steamid + `_` + _,
                  ),
                );
              return _;
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_, _, _, _, _, _) {
  let _ = [],
    _ = [
      `SteamID`,
      `Name`,
      `Invited`,
      `Partner`,
      `Game`,
      `Email Override`,
      `Guest Count`,
      `Reg Confirmation Email Sent`,
    ];
  (_.ask_registration_question && _.push(`Pre Reg Answer`),
    _.push(_),
    _.forEach((_) => {
      let _ = [],
        _ = _.partner_id ? _(_.partner_id) : void 0;
      (_.push(`` + _.steamid),
        _.push(_.name),
        _.push(_.invited ? `YES` : ``),
        _.push(_ ? `${_?.name} (${_.partner_id})` : ``),
        _.push(_.game ? `Game: ${_.game}` : ``),
        _.push(_.email_override),
        _.push(`` + (_.guests_registered ? _.guests_registered - 1 : 0)));
      let _ = new _(_.steamid);
      if (_.has(_.GetAccountID())) {
        let _ = _(_.get(_.GetAccountID()), _);
        if (_) {
          let _ = new Date(_ * 1e3)
            .toISOString()
            .replace(`T`, ` `)
            .split(`.`)[0];
          _.push(_);
        } else _.push(``);
      } else _.push(``);
      if (_.ask_registration_question) {
        let _ = _.get(_.GetAccountID())?.find((_) => _.group_id == _.group_id);
        _ && _.push(_.question);
      }
      _.push(_);
      for (let _ = 0; _ < _.guest_names?.length; _++) {
        let _ = [];
        (_.push(`(guest)`), _.push(_.guest_names[_]), _.push(_));
      }
    }));
  let _ =
    `meetsteam_${_}_${_(_.rtime_start)}_at_${_(_.rtime_start)}.csv`.replace(
      /[ <>:"/\\|?*\x00-\x1F]/g,
      `_`,
    );
  _.WriteCSVToFile(_, _);
}
function _(_, _) {
  let _ = `registration_emailed_${_.group_id}_${_.session_id}`,
    _ = null;
  return (_ in _ && (_ = _[_]), _);
}
function _(_) {
  let { inviteInfo: _, regInfo: _, group: _, preRegQuestions: _ } = _,
    [_] = _(_.partner_id),
    _ = _(_, _);
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _.steamid,
      }),
      (0, _.jsx)(`td`, {
        children: _.name,
      }),
      (0, _.jsx)(`td`, {
        children: _.invited ? `YES` : ``,
      }),
      (0, _.jsx)(`td`, {
        children: _?.name ?? `(${_.partner_id})`,
      }),
      (0, _.jsx)(`td`, {
        children: _.game ? `Game: ${_.game}` : ``,
      }),
      (0, _.jsx)(`td`, {
        children: _.email_override,
      }),
      (0, _.jsx)(`td`, {
        children: _.guests_registered ? _.guests_registered - 1 : 0,
      }),
      (0, _.jsx)(`td`, {
        children: _ ? _(_) : ``,
      }),
      _.ask_registration_question &&
        (0, _.jsx)(`td`, {
          children: _?.find((_) => _.group_id == _.group_id)?.question || ``,
        }),
    ],
  });
}
function _(_) {
  let { guestName: _ } = _;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: `(guest)`,
      }),
      (0, _.jsx)(`td`, {
        children: _,
      }),
    ],
  });
}
async function _(_, _) {
  let _ = new FormData();
  (_.append(`sessionid`, _()), _.append(`gid`, _));
  let _ = `${_.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
  try {
    let _ = await _.default.post(_, _, {
      withCredentials: !0,
    });
    if (_?.data?.success != 1) {
      let _ = _(_);
      console.error(`AsyncSendInviteEmails error: ` + _.strErrorMsg, _);
    }
    return (
      _.invalidateQueries({
        queryKey: [`useMeetSteamAllRegistrationStatus`, _],
      }),
      _?.data
    );
  } catch (_) {
    let _ = _(_);
    console.error(`AsyncSendInviteEmails error: ` + _.strErrorMsg, _);
  }
  return null;
}
function _(_) {
  let { rgEventGIDs: _ } = _,
    [_, _, _] = _(),
    [_, _] = (0, _.useState)(null);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        children: ` | `,
      }),
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: (_) => {
          (_.preventDefault(), _.stopPropagation(), _());
        },
        children: `Show Registration Across Events`,
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            closeModal: _,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            children:
              _ == null
                ? (0, _.jsx)(_, {
                    rgEventGIDs: _,
                    fnSelectedEvents: _,
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        rgGidMeetSteamEvents: _,
                      }),
                      (0, _.jsx)(_, {
                        onClick: () => _(null),
                        children: `Reset Selection`,
                      }),
                    ],
                  }),
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _(_),
    _ = _(),
    { bIsLoading: _, events: _ } = _(_),
    { data: _ } = _(_),
    [_, _, _] = (0, _.useMemo)(() => {
      if (
        _ ||
        !_ ||
        _.length == 0 ||
        _.filter((_) => !_.isLoading).length != _.length
      )
        return [null, null, null];
      let _ = [],
        _ = new Set(),
        _ = new Map();
      _.forEach((_) => {
        _.data.forEach((_) => {
          _.guests_registered > 0 &&
            (_.push(_), _.partner_id && _.add(_.partner_id));
        });
      });
      let _ = new Map();
      return (
        _.forEach((_) => {
          _.jsondata.meet_steam_groups?.forEach((_) => {
            _.sessions?.forEach((_) => {
              _.set(
                `${_.GID}_${_.group_id}_${_._}`,
                `${_.localized_session_title[0]}@${_(_.rtime_start)} ${_(_.rtime_start)}`,
              );
            });
          });
        }),
        _.forEach((_) => {
          _.rgRegistrations.forEach((_) => {
            let _ = new _(_.steamid).GetAccountID(),
              _ =
                _.get(`${_.gid}_${_.group_id}_${_.session_id}`) ||
                `${_.group_id}:${_.session_id}`;
            _.has(_) ? _.set(_, _.get(_) + `,${_}`) : _.set(_, _);
          });
        }),
        [Array.from(_), _, _]
      );
    }, [_, _, _, _]);
  return _(_)
    ? {
        rgAllRegistrations: _,
        rgPartnerIDs: _,
        rgValveAccounts: _,
        rgMapAccountToSessionTimes: _,
      }
    : {
        rgAllRegistrations: void 0,
        rgPartnerIDs: void 0,
        rgValveAccounts: void 0,
        rgMapAccountToSessionTimes: void 0,
      };
}
var _ = _();
function _(_) {
  let { rgGidMeetSteamEvents: _ } = _,
    {
      rgAllRegistrations: _,
      rgPartnerIDs: _,
      rgValveAccounts: _,
      rgMapAccountToSessionTimes: _,
    } = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(() => {
      if (!_ || !_ || !_ || !_) return null;
      let _ = new Map();
      _.forEach((_) => _.set(_._, _));
      let _ = [];
      return (
        _.forEach((_) => {
          let _ = _(_.partner_id),
            _ = _(_.partner_id);
          _.push({
            partner_id: _.partner_id ? `` + _.partner_id : ``,
            partner_name: _?.name || `Unknown`,
            name: _.name,
            game: _.game || ``,
            accountid: _.accountid,
            email: _.email_override,
            guest_registrated: _.guests_registered - 1,
            guest_names:
              _.guest_names?.length > 0 ? _.guest_names.join(`,`) : ``,
            business_contact:
              _ && _.length > 0
                ? _.filter((_) => _.is_business_contact)
                    .map((_) => {
                      let _ = new _(_.steamid);
                      return _.get(_.GetAccountID())?.displayName || _.steamid;
                    })
                    .join(`,`)
                : ``,
            sessions: _.get(_.accountid) || `missing data`,
          });
        }),
        _
      );
    }, [_, _, _, _]),
    _ = _();
  return !_ || !_ || !_
    ? (0, _.jsx)(_, {
        string: _(`#Loading`),
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            children: `Registations`,
          }),
          _
            ? (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    rgData: _,
                  }),
                  (0, _.jsx)(_, {
                    columns: _,
                    data: _,
                    getRowKey: (_) => _,
                    stickyHeader: !0,
                    nItemHeight: 28,
                    overscan: _.length,
                  }),
                  (0, _.jsx)(`br`, {}),
                  (0, _.jsx)(_, {
                    rgData: _,
                  }),
                ],
              })
            : (0, _.jsx)(_, {
                string: _(`#Loading`),
                position: `center`,
              }),
        ],
      });
}
function _() {
  return (0, _.useMemo)(
    () => [
      _.accessor(`name`, {
        header: `Name`,
        size: 200,
      }),
      _.accessor(`accountid`, {
        header: `Account ID`,
        size: 150,
      }),
      _.accessor(`email`, {
        header: `Email`,
        size: 150,
      }),
      _.accessor(`guest_registrated`, {
        header: `Guest Count`,
        size: 100,
      }),
      _.accessor(`guest_names`, {
        header: `Guest's Names`,
        size: 100,
      }),
      _.accessor(`partner_id`, {
        header: `Partner ID`,
        size: 100,
      }),
      _.accessor(`partner_name`, {
        header: `Partner Name`,
        size: 300,
      }),
      _.accessor(`game`, {
        header: `Game Name`,
        size: 150,
      }),
      _.accessor(`business_contact`, {
        header: `Business Contact`,
        size: 150,
      }),
      _.accessor(`sessions`, {
        header: `Sessions`,
        size: 150,
      }),
    ],
    [],
  );
}
function _(_) {
  let { rgData: _ } = _,
    _ = _();
  return (0, _.jsx)(_, {
    _: `download-csv`,
    onClick: () =>
      _(
        `registrationdump.csv`,
        _,
        _.map((_) => ({
          accessorKey: _.accessorKey,
          header:
            typeof _.header == `string` ? _.header : (_.accessorKey ?? ``),
        })),
      ),
    style: {
      width: `120px`,
    },
    children: `Download CSV`,
  });
}
var _ = _.createContext(void 0);
function _(_) {
  let { children: _ } = _,
    [_, _] = _(`search`, ``),
    [_, _] = (0, _.useState)(() => _ || ``),
    _ = (0, _.useCallback)(
      (_) => {
        (_(_), _(_ || void 0, !0));
      },
      [_],
    ),
    _ = (0, _.useMemo)(
      () => ({
        strSearch: _,
        setSearch: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
var _ = () => {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw Error(
      `useMeetSteamSearch must be used within MeetSteamSearchProvider`,
    );
  return _;
};
function _(_, _) {
  let _ = _?.trim().toLowerCase();
  return !_ || (!!_ && _.toLowerCase().includes(_));
}
function _(_, _) {
  let _ = _?.trim().toLowerCase();
  if (!_ || !_)
    return [
      {
        strText: _ || ``,
        bMatch: !1,
      },
    ];
  let _ = [],
    _ = _.toLowerCase(),
    _ = 0;
  for (let _ = _.indexOf(_); _ >= 0; _ = _.indexOf(_, _))
    (_ > _ &&
      _.push({
        strText: _.slice(_, _),
        bMatch: !1,
      }),
      _.push({
        strText: _.slice(_, _ + _.length),
        bMatch: !0,
      }),
      (_ = _ + _.length));
  return (
    _ < _.length &&
      _.push({
        strText: _.slice(_),
        bMatch: !1,
      }),
    _
  );
}
function _(_) {
  let { text: _ } = _,
    { strSearch: _ } = _(),
    _ = (0, _.useMemo)(() => _(_, _), [_, _]);
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_, _) =>
      _.bMatch
        ? (0, _.jsx)(
            `span`,
            {
              className: _,
              children: _.strText,
            },
            _,
          )
        : (0, _.jsx)(
            _.Fragment,
            {
              children: _.strText,
            },
            _,
          ),
    ),
  });
}
function _(_) {
  let _ = _.InitFromClanID(_(), _.EUNIVERSE),
    _ = _(),
    { bShowArchived: _, setShowArchived: _ } = _(),
    { strSearch: _, setSearch: _ } = _(),
    { bIsLoading: _, events: _ } = _(_),
    {
      rgEventsByMonth: _,
      cEvents: _,
      cMatchingEvents: _,
    } = _.useMemo(() => {
      if (!_)
        return {
          rgEventsByMonth: null,
          cEvents: 0,
          cMatchingEvents: 0,
        };
      let _ =
          _ && _
            ? [..._]
            : _?.filter((_) => _.endTime >= new Date().getTime() / 1e3),
        _ = _.filter((_) => _(_, _)),
        _ = Array.from(_(_, (_) => _(new Date(_.startTime * 1e3))));
      return (
        _?.sort((_) => -_[0]),
        {
          rgEventsByMonth: _,
          cEvents: _.length,
          cMatchingEvents: _.length,
        }
      );
    }, [_, _, _]);
  return _
    ? (0, _.jsx)(_, {})
    : _
      ? (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsxs)(`div`, {
              children: [
                (0, _.jsx)(`a`, {
                  href: `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/`,
                  children: `Open Meet Steam Event Dashboard`,
                }),
                (0, _.jsx)(_, {
                  rgEventGIDs: _,
                }),
                (0, _.jsx)(_, {
                  rgEventGIDs: _,
                }),
              ],
            }),
            (0, _.jsx)(_, {
              checked: _,
              onChange: _,
              label: `Show Past Events`,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  type: `text`,
                  placeholder: `Search events`,
                  tooltip: `In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience`,
                  value: _,
                  onChange: (_) => _(_?.currentTarget?.value || ``),
                }),
                !!_.trim() &&
                  (0, _.jsxs)(`div`, {
                    className: `efAd4UEv8Tw-`,
                    children: [
                      `Showing `,
                      _,
                      ` of `,
                      _,
                      ` events \xA0`,
                      (0, _.jsx)(`a`, {
                        href: `#`,
                        onClick: (_) => {
                          (_.preventDefault(), _(``));
                        },
                        children: `Clear`,
                      }),
                    ],
                  }),
              ],
            }),
            (0, _.jsx)(`hr`, {}),
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  month: new Date(_[0] * 1e3),
                  events: _[1],
                },
                _[0],
              ),
            ),
          ],
        })
      : null;
}
function _(_, _) {
  if (!_?.trim()) return !0;
  let _ = [_.GID, _.GetNameWithFallback(0), _.GetDescriptionWithFallback(0)];
  return (
    _.jsondata.meet_steam_groups?.forEach((_) => {
      (_.push(_.GetWithFallback(_.localized_session_title, 0)),
        _.push(_.GetWithFallback(_.localized_session_description, 0)),
        _.push(_.GetWithFallback(_.localized_intended_audience, 0)),
        _.push(_.GetWithFallback(_.localized_sesssion_faq, 0)));
    }),
    _.some((_) => _(_, _))
  );
}
function _(_) {
  let { month: _, events: _ } = _,
    _ = _.useMemo(() => [..._].sort((_) => -_.startTime), [_]),
    _ = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
    }).format(_);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              oEvent: _,
            },
            _.GID,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { oEvent: _ } = _,
    _ = _.GID,
    _ = _.InitFromClanID(_(), _.EUNIVERSE),
    _ = _(_(), _),
    _ = _.isSuccess ? _.data : null,
    _ = _.GetNameWithFallback(0),
    _ = (0, _.useMemo)(() => {
      let _ = [];
      return (
        _.jsondata.meet_steam_groups?.forEach((_) => {
          _.sessions.forEach((_, _) => {
            _.push({
              group: _,
              session: _,
              firstSession: _ == 0,
            });
          });
        }),
        _
      );
    }, [_.jsondata.meet_steam_groups]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  text: _,
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: _(_?.startTime),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`a`, {
                  href: `${_.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/edit/${_}`,
                  children: `Edit`,
                }),
              }),
              (0, _.jsxs)(`div`, {
                children: [
                  `\xA0|\xA0`,
                  (0, _.jsx)(`a`, {
                    href: `${_.STORE_BASE_URL}meetsteam/${_}`,
                    children: `View`,
                  }),
                ],
              }),
              !!(
                _.BIsUnlistedEvent() && _.jsondata.meet_steam_groups?.length > 0
              ) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      gid: _,
                    }),
                    `\xA0|\xA0`,
                    (0, _.jsx)(`a`, {
                      href: `${_.STORE_BASE_URL}meetsteam/attendance?gid=${_}&accountid=${_.accountid}`,
                      children: `QR Page`,
                    }),
                    `\xA0|\xA0`,
                    (0, _.jsx)(`a`, {
                      href: `${_.STORE_BASE_URL}meetsteam/attendeelist?gid=${_}`,
                      children: `Attendance List`,
                    }),
                    (0, _.jsx)(_, {
                      gid: _,
                    }),
                    (0, _.jsx)(_, {
                      gid: _,
                    }),
                    (0, _.jsx)(_, {
                      gid: _,
                    }),
                    (0, _.jsx)(_, {
                      gid: _,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        children: (0, _.jsxs)(`table`, {
          className: `landingTable`,
          children: [
            (0, _.jsx)(`thead`, {
              children: (0, _.jsxs)(`tr`, {
                children: [
                  (0, _.jsx)(`th`, {
                    children: `Group`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Session Start`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Session Duration`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Seats`,
                  }),
                  (0, _.jsx)(`th`, {
                    style: {
                      width: `50px`,
                    },
                    children: `Registered`,
                  }),
                  (0, _.jsx)(`th`, {
                    style: {
                      width: `50px`,
                    },
                    children: `Guests`,
                  }),
                  (0, _.jsx)(`th`, {
                    style: {
                      width: `100px`,
                    },
                    children: `Details`,
                  }),
                ],
              }),
            }),
            (0, _.jsxs)(`tbody`, {
              children: [
                (0, _.jsxs)(`tr`, {
                  children: [
                    _.length > 0
                      ? (0, _.jsx)(
                          _,
                          {
                            gid: _,
                            group: _[0].group,
                            session: _[0].session,
                            rgAvailability: _,
                          },
                          _[0].session._,
                        )
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(`td`, {
                              children: `None`,
                            }),
                            (0, _.jsx)(`td`, {}),
                            (0, _.jsx)(`td`, {}),
                            (0, _.jsx)(`td`, {}),
                            (0, _.jsx)(`td`, {}),
                            (0, _.jsx)(`td`, {}),
                          ],
                        }),
                    (0, _.jsx)(`td`, {
                      children:
                        !(
                          _?.BIsUnlistedEvent() &&
                          _.jsondata.meet_steam_groups?.length > 0
                        ) &&
                        (0, _.jsx)(`div`, {
                          children: `Invite Disabled. Event need to publish into Unlisted State`,
                        }),
                    }),
                  ],
                }),
                _.filter((_, _) => _ > 0).map((_) =>
                  (0, _.jsx)(
                    `tr`,
                    {
                      children: (0, _.jsx)(_, {
                        group: _.group,
                        gid: _,
                        session: _.session,
                        rgAvailability: _,
                        firstSession: _.firstSession,
                      }),
                    },
                    _.session._,
                  ),
                ),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function _(_) {
  let { gid: _ } = _,
    _ = _();
  return Array.from(_.keys()).includes(_)
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          `\xA0|\xA0`,
          (0, _.jsx)(`a`, {
            href: `${_.PARTNER_BASE_URL}meetsteam/survey/${_}`,
            children: `Survey`,
          }),
        ],
      })
    : null;
}
function _(_) {
  let { gid: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, _.jsxs)(`a`, {
        href: `#`,
        onClick: (_) => {
          (_.preventDefault(), _.stopPropagation(), _());
        },
        children: [
          `Invite via CSV`,
          (0, _.jsx)(_, {
            tooltip: `This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)`,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            hideModal: _,
            gid: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { gid: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: (_) => {
          (_.preventDefault(), _.stopPropagation(), _());
        },
        children: `Invite`,
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            hideModal: _,
            gid: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { gid: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    children: [
      `\xA0|\xA0`,
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: (_) => {
          (_.preventDefault(), _.stopPropagation(), _());
        },
        children: `Show Invites`,
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            hideModal: _,
            gid: _,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let { gid: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(null);
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(`a`, {
        href: `#`,
        onClick: async (_) => {
          (_.preventDefault(), _.stopPropagation(), _(!0));
          let _ = await _(_, _);
          _(_);
        },
        children: `Email Self`,
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsxs)(_, {
          bAlertDialog: !0,
          strTitle: `Test Emails`,
          closeModal: () => {
            (_(!1), _(null));
          },
          onOK: () => {},
          children: [
            (0, _.jsx)(`div`, {
              children: `This will temporarily register and then de-register you from the event as a way to test the email sending code.`,
            }),
            _ == null &&
              (0, _.jsx)(_, {
                string: _(`#Loading`),
              }),
            _ == 1 &&
              (0, _.jsx)(`div`, {
                children: `Test Emails Sent`,
              }),
            !!(_ && _ != 1) &&
              (0, _.jsx)(`div`, {
                children: `Email Failed to Send. Check console`,
              }),
          ],
        }),
      }),
    ],
  });
}
async function _(_, _) {
  let _ = _.Init(_),
    _ = _.InitFromClanID(_(), _.EUNIVERSE);
  (_.Body().set_clan_event_gid(_),
    _.Body().set_steamid(_.ConvertTo64BitString()));
  let _ = await _.TestFireEmails(_, _);
  return (console.log(`test fire`, _), _.GetEResult());
}
function _(_, _) {
  let _ = _.default.unix(_),
    _ = _.default.unix(_)._(_),
    _ = _.utcOffset() - _.utcOffset(),
    _ = new Date((_ + _ * 60) * 1e3),
    _ = new Date();
  return `${_.getFullYear() == _.getFullYear() ? _(_, !1, !1) : _(_, !1, !1)} ${_(_ + _ * 60)} ${_.format(`z`)}`;
}
function _(_) {
  let {
      gid: _,
      group: _,
      rgAvailability: _,
      session: _,
      firstSession: _ = !0,
    } = _,
    _ = _.GetWithFallback(_?.localized_session_title, 0),
    _ = _.GetWithFallback(_?.localized_session_description, 0),
    _ = _.GetWithFallback(_?.localized_intended_audience, 0),
    _ = _?.find((_) => _.group_id == _.group_id && _.session_id == _._),
    [_, _, _] = _(),
    _ = _(_(), _, _?.group_id),
    _ = Math.min((_?.guest_count / _.max_capacity) * 100, 100),
    _ = _?.guest_count > 0 ? `${_}%` : `0%`,
    _ = _?.guest_count >= _.max_capacity,
    _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
    _ =
      _.location_type === `in_person`
        ? (_.in_person_time_zone ?? `America/Los_Angeles`)
        : _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ && _
        ? (0, _.jsxs)(`td`, {
            children: [
              (0, _.jsx)(_, {
                text: _,
              }),
              (0, _.jsx)(_, {
                tooltip: _,
              }),
              !!_ &&
                (0, _.jsx)(`div`, {
                  children: (0, _.jsx)(_, {
                    text: _,
                  }),
                }),
            ],
          })
        : (0, _.jsx)(`td`, {}),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(`span`, {
          children: _(_.rtime_start, _),
        }),
      }),
      (0, _.jsx)(`td`, {
        children: _(_.rtime_end - _.rtime_start),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          _?.guest_count || 0,
          ` / `,
          _.max_capacity,
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _(_, _ ? _ : ``),
              style: {
                width: _,
              },
            }),
          }),
        ],
      }),
      (0, _.jsx)(`td`, {
        children:
          _.isSuccess &&
          (0, _.jsx)(_.Fragment, {
            children: _.data?.filter((_) => _.session_id == _._).length,
          }),
      }),
      (0, _.jsx)(`td`, {
        children:
          _.isSuccess &&
          (0, _.jsx)(_.Fragment, {
            children: _.data
              ?.filter((_) => _.session_id == _._)
              .reduce((_, _) => _ + _.guests_registered - 1, 0),
          }),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            children: `Details`,
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              active: _,
              children: (0, _.jsx)(_, {
                gid: _,
                title: _,
                group: _,
                session: _,
                hideModal: _,
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function _() {
  let [_] = (0, _.useState)(() => _(`event_gids`, `application_config`));
  return _;
}
function _(_) {
  let { rgEvents: _ } = _(),
    _ = _(),
    [_, _] = (0, _.useState)(``),
    _ = _.PARTNER_BASE_URL + `meetsteam`,
    _ = (0, _.useMemo)(() => {
      let _ = new Map();
      return (
        _.forEach((_) => {
          _.results?.attending?.forEach((_) => {
            _.has(_) ? _.set(_, _.get(_) + 1) : _.set(_, 1);
          });
        }),
        _
      );
    }, [_]);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        type: `text`,
        value: _,
        onChange: (_) => _(_.currentTarget.value.trim()),
        label: `Filter`,
      }),
      (0, _.jsxs)(`div`, {
        children: [`Total Survey Responses: `, _(_?.length || 0)],
      }),
      (0, _.jsxs)(`div`, {
        children: [
          `Link to partner-facing survey: `,
          (0, _.jsx)(`a`, {
            href: _,
            children: _,
          }),
        ],
      }),
      _.filter(
        (_) => _.length == 0 || _.name.includes(_) || _._.includes(_),
      ).map((_) =>
        (0, _.jsx)(
          _,
          {
            conf: _,
            nInterestCount: _.get(_._) ?? 0,
            rgSurveyInterest: _,
          },
          _._,
        ),
      ),
      (0, _.jsx)(_, {
        rgSurveyInterest: _,
      }),
    ],
  });
}
function _(_) {
  let { conf: _, nInterestCount: _, rgSurveyInterest: _ } = _;
  return (0, _.jsx)(_, {
    title: `${_.name} in ${_.place} around ${_.time}: Interest: ${_(_)}`,
    bStartMinimized: !0,
    children: (0, _.jsx)(_, {
      conf: _,
      rgSurveyInterest: _,
    }),
  });
}
function _(_) {
  if (typeof _ == `number`) return _;
  let _ = _.slice(-1).toUpperCase(),
    _ = parseFloat(_.slice(0, -1));
  switch (_) {
    case `K`:
      return _ * 1e3;
    case `M`:
      return _ * 1e6;
    case `B`:
      return _ * 1e9;
    default:
      return parseFloat(_);
  }
}
function _(_) {
  let { conf: _, rgSurveyInterest: _ } = _,
    _ = (0, _.useMemo)(
      () => _.filter((_) => _.results?.attending?.includes(_._)),
      [_, _],
    ),
    _ = _(),
    { bComplete: _, nCount: _ } = _(_);
  return _
    ? _?.length
      ? !_ || _.length == 0
        ? (0, _.jsx)(`div`, {
            children: `No users with interest`,
          })
        : (0, _.jsx)(_, {
            conf: _,
            rgSurveyInterest: _,
          })
      : (0, _.jsx)(_, {
          position: `center`,
          string: `Loading Valve Account info (this shouldn't take long)`,
        })
    : (0, _.jsx)(_, {
        position: `center`,
        string: `Loading ${_} of ${_.length}`,
      });
}
function _(_) {
  let { conf: _, rgSurveyInterest: _ } = _,
    _ = _();
  return (0, _.jsxs)(`div`, {
    children: [
      (0, _.jsx)(_, {
        onClick: () => {
          let _ = [];
          (_.push([
            `AccountID`,
            `Partner ID`,
            `Valve Partner Contacts`,
            `Email Override`,
            `Account Name`,
            `Name`,
            `Have you met steam`,
            `Survey Time`,
            `Attending Other Event Count`,
            `Country`,
            `Alt Language`,
            `Partner Name`,
            `Gross USD`,
            `Best AppID`,
            `Best AppID Name`,
            `Long Term Sales Rank`,
          ]),
            _.forEach((_) => {
              let _ = [],
                _ = new _(_.steamid);
              _.push(`` + _.GetAccountID());
              let _ = _(_.GetAccountID()),
                _ = _.results.partner_id;
              _.push(`` + _);
              let _ = _(_).map((_) => _(_, _)?.displayName || `` + _);
              _.push(_.join(`|`));
              let _ = _.results.email_override || ``;
              (_.push(`` + _),
                _.push(_?.m_strPlayerName ? _.m_strPlayerName : ``));
              let _ = _(_.GetAccountID(), _);
              if (
                (_.push(_ ? _.realname : ``),
                _.push(_.results.have_you_met_steam ? `yes` : `no`),
                _.results.submit_time)
              ) {
                let _ = _.results.submit_time,
                  _ = new Date(_ * 1e3)
                    .toISOString()
                    .replace(`T`, ` `)
                    .split(`.`)[0];
                _.push(_);
              } else _.push(``);
              (_.push(`` + _.results.attending?.length),
                _.push(_.results.country_code),
                _.push(
                  _.results.preferred_language
                    ? _(_.results.preferred_language)
                    : ``,
                ));
              let _ = _(_);
              _.push(_ ? _.name : ``);
              let _ = _(_, _);
              (_
                ? (_.push(`` + _(_.strGrossUSD)),
                  _.push(`` + _.nBestAppID),
                  _.push(_.Get().GetApp(_.nBestAppID)?.GetName()),
                  _.push(`` + _.nBestAppLongTermSalesRank))
                : (_.push(``), _.push(``), _.push(``), _.push(``)),
                _.push(_));
            }));
          let _ = _.name.replace(` `, `_`) + `_conference_interest.csv`;
          _.WriteCSVToFile(_, _);
        },
        children: `Export to CSV`,
      }),
      (0, _.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Name and Email`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Have you met steam?`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Partner`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Valve Contacts`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Partner Revenue`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Biggest Game`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Long Term Sales Rank`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Attending count?`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Alt Language`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Country`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Submit Survey Time`,
                }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  strsteamid: _.steamid,
                  partnerID: _.results.partner_id,
                  registration: _.results,
                },
                _._ + `_` + _.steamid,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { partnerID: _, registration: _ } = _;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          ..._,
        }),
      }),
      (0, _.jsx)(`td`, {
        children: _.have_you_met_steam ? `` : `NO`,
      }),
      (0, _.jsx)(_, {
        nPartnerID: _,
      }),
      (0, _.jsx)(`td`, {
        children: _.attending.length,
      }),
      (0, _.jsx)(`td`, {
        children:
          _.english_not_good && _.preferred_language
            ? _(_.preferred_language)
            : ``,
      }),
      (0, _.jsx)(`td`, {
        children: _.country_code,
      }),
      (0, _.jsx)(`td`, {
        children: _(_.submit_time),
      }),
    ],
  });
}
function _(_) {
  let { strsteamid: _, partnerID: _, registration: _ } = _,
    _ = _(_),
    _ = _(new _(_).GetAccountID(), _),
    _ = _?.realname || _.data?.m_strPlayerName;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`span`, {
        children: _,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(`span`, {
        children: _.email_override || _?.email,
      }),
    ],
  });
}
function _(_) {
  let { nPartnerID: _ } = _,
    [_] = _(_),
    _ = _(_),
    _ = _(_),
    _ = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`td`, {
        children: _ ? _?.name + ` (${_})` : _,
      }),
      (0, _.jsx)(`td`, {
        children: _?.map((_) => _(_, _)?.displayName || `` + _).join(`,`),
      }),
      (0, _.jsxs)(`td`, {
        children: [`$`, _?.strGrossUSD],
      }),
      (0, _.jsx)(`td`, {
        children:
          _?.nBestAppID > 0
            ? (0, _.jsx)(_, {
                appid: _?.nBestAppID,
              })
            : `N/A`,
      }),
      (0, _.jsx)(`td`, {
        children: _?.nBestAppLongTermSalesRank,
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    _: _,
    children: (0, _.jsx)(`span`, {
      children: _?.name || _,
    }),
  });
}
function _() {
  let [_] = (0, _.useState)(() => _(`interest_results`, `application_config`));
  return (0, _.useMemo)(
    () => _.map((_) => ((_.results = JSON.parse(_.jsondata)), _)),
    [_],
  );
}
function _(_) {
  let { rgSurveyInterest: _ } = _,
    _ = _();
  _();
  let _ = (0, _.useMemo)(
    () => _.filter((_) => _.results?.suggestion?.trim().length > 0),
    [_],
  );
  return (0, _.jsxs)(_, {
    title: `Alternative Suggestions (${_.length})`,
    bStartMinimized: !0,
    children: [
      (0, _.jsx)(_, {
        onClick: () => {
          let _ = [];
          (_.push([
            `AccountID`,
            `Partner ID`,
            `Email Override`,
            `Account Name`,
            `name`,
            `Attending Other Event Count`,
            `Country`,
            `Alt Language`,
            `Partner Name`,
            `Gross USD`,
            `Best AppID`,
            `Long Term Sales Rank`,
            `Suggestion`,
          ]),
            _.forEach((_) => {
              let _ = [],
                _ = new _(_.steamid);
              _.push(`` + _.GetAccountID());
              let _ = _(_.GetAccountID()),
                _ = _.results.partner_id;
              _.push(`` + _);
              let _ = _.results.email_override || ``;
              (_.push(`` + _),
                _.push(_?.m_strPlayerName ? _.m_strPlayerName : ``));
              let _ = _(_.GetAccountID(), _);
              (_.push(_ ? _.realname : ``),
                _.push(`` + _.results.attending?.length),
                _.push(_.results.country_code),
                _.push(
                  _.results.preferred_language
                    ? _(_.results.preferred_language)
                    : ``,
                ));
              let _ = _(_);
              _.push(_ ? _.name : ``);
              let _ = _(_, _);
              (_
                ? (_.push(`` + _(_.strGrossUSD)),
                  _.push(`` + _.nBestAppID),
                  _.push(`` + _.nBestAppLongTermSalesRank))
                : (_.push(``), _.push(``), _.push(``)),
                _.push(_.results.suggestion),
                _.push(_));
            }),
            _.WriteCSVToFile(_, `suggestsion.csv`));
        },
        children: `Export to CSV (wait until the table populates fully)`,
      }),
      (0, _.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, _.jsx)(`thead`, {
            children: (0, _.jsxs)(`tr`, {
              children: [
                (0, _.jsx)(`th`, {
                  children: `Name and Email`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Partner`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Valve Contacts`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Partner Revenue`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Biggest Game`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Long Term Sales Rank`,
                }),
                (0, _.jsx)(`th`, {
                  children: `Suggestions`,
                }),
              ],
            }),
          }),
          (0, _.jsx)(`tbody`, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  survey: _,
                },
                `suggested` + _.steamid,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { survey: _ } = _;
  return (
    new _(_.steamid),
    (0, _.jsxs)(`tr`, {
      children: [
        (0, _.jsx)(`td`, {
          children: (0, _.jsx)(_, {
            strsteamid: _.steamid,
            partnerID: _.results.partner_id,
            registration: _.results,
          }),
        }),
        (0, _.jsx)(_, {
          nPartnerID: _.results.partner_id,
        }),
        (0, _.jsx)(`td`, {
          children: _.results.suggestion.trim(),
        }),
      ],
    })
  );
}
function _(_) {
  let _ = _.useContext(_);
  return _(_(_, _));
}
function _(_) {
  return _.getQueryData([`UserEmailAndLangs`, _]);
}
var _ = _.createContext({
  loadUserEmailAndLangs: async (_) => await _().load(_),
});
function _(_, _) {
  return {
    queryKey: [`UserEmailAndLangs`, _],
    queryFn: () => _.loadUserEmailAndLangs(_),
    enabled: !!_,
  };
}
var _;
function _() {
  return (
    (_ ||= new _.default(
      async (_) => {
        let _ = `${_.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
          _ = {
            sessionid: _(),
            strAccountIDs: _.join(`,`),
          },
          _ = await _.default.get(_, {
            params: _,
            withCredentials: !0,
          });
        if (!_ || _?.status != 200 || _?.data?.success != 1)
          throw `Failed to load app to user email and langs: ${_(_).strErrorMsg}`;
        let _ = new Map();
        return (
          _.data.users.forEach((_) => {
            let _ = new _(_.steamid);
            _.set(_.GetAccountID(), _);
          }),
          _.map((_) => _.get(_) ?? null)
        );
      },
      {
        maxBatchSize: 100,
      },
    )),
    _
  );
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(_),
    _ = (0, _.useMemo)(() => {
      if (!_ || !_) return null;
      let _ = new Set(_.map((_) => _._));
      return _.filter((_) => !_.has(_.accountid)).sort(
        (_, _) => _.clan_event_gids?.length - _.clan_event_gids.length,
      );
    }, [_, _]);
  return _
    ? (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsxs)(_, {
            onClick: () => {
              let _ = [];
              (_.push([`User Name`, `account id`, `Email`, `Event Count`]),
                _.forEach((_) => {
                  let _ = _(_.accountid),
                    _ = _(_.accountid);
                  _.push([
                    _?.m_strPlayerName || ``,
                    `` + _.accountid,
                    _?.email_address || ``,
                    _.clan_event_gids?.length.toLocaleString(_()),
                  ]);
                }),
                _.WriteCSVToFile(_, `sale_operators.csv`));
            },
            children: [
              `CSV Export`,
              (0, _.jsx)(_, {
                tooltip: `Wait until the page finishes loading before export`,
              }),
            ],
          }),
          (0, _.jsxs)(`table`, {
            children: [
              (0, _.jsx)(`thead`, {
                children: (0, _.jsxs)(`tr`, {
                  children: [
                    (0, _.jsx)(`th`, {
                      children: `User`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Email`,
                    }),
                    (0, _.jsx)(`th`, {
                      children: `Events`,
                    }),
                  ],
                }),
              }),
              (0, _.jsx)(`tbody`, {
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      organizer: _,
                    },
                    _.accountid,
                  ),
                ),
              }),
            ],
          }),
        ],
      })
    : (0, _.jsx)(_, {
        string: _(`#Loading`),
        size: `medium`,
      });
}
function _(_) {
  let { organizer: _ } = _,
    _ = (0, _.useMemo)(
      () =>
        _.InitFromAccountID(_.accountid, _.EUNIVERSE).ConvertTo64BitString(),
      [_],
    ),
    _ = _(_),
    _ = _(_.accountid),
    _ = _.data?.m_strPlayerName || ``;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsxs)(`td`, {
        children: [_, ` (`, _.accountid, `)`],
      }),
      (0, _.jsx)(`td`, {
        children: _?.data?.email_address,
      }),
      (0, _.jsx)(`td`, {
        children: (0, _.jsx)(_, {
          name: _,
          rgClanEventGIDs: _.clan_event_gids,
        }),
      }),
    ],
  });
}
function _(_) {
  let { name: _, rgClanEventGIDs: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        onClick: _,
        children: [`See `, _(_.length), ` Events`],
      }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          bAlertDialog: !0,
          closeModal: _,
          strTitle: `${_}'s Events`,
          children: _.map((_) =>
            (0, _.jsx)(
              _,
              {
                gid: _,
              },
              _,
            ),
          ),
        }),
      }),
    ],
  });
}
function _(_) {
  let { gid: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsxs)(`a`, {
        href: `${_.COMMUNITY_BASE_URL}gid/${_.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${_}`,
        target: `_blank`,
        children: [
          (0, _.jsx)(`div`, {
            children: _.GetNameWithFallback(0),
          }),
          (0, _.jsx)(`img`, {
            src: _.GetImageURL(`capsule`, 0),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        children: [`Loading `, _],
      });
}
function _(_) {
  let _ = (_) =>
      window.sessionStorage.setItem(`meetsteamadmin`, `?tab=${_.key}`),
    _ = [
      {
        name: `Interest Survey Results`,
        key: `survey`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
        onClick: _,
      },
      {
        name: `Event Management`,
        key: `event`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
        onClick: _,
      },
      {
        name: `Sale Operators`,
        key: `saleops`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
        onClick: _,
      },
      {
        name: `Post Event Surveys`,
        key: `postsurvey`,
        contents: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {}),
        }),
        onClick: _,
      },
    ];
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `Meet Steam Admin Dashboard `,
              _(`current_year`, `application_config`),
            ],
          }),
          (0, _.jsx)(`hr`, {}),
          (0, _.jsx)(_, {
            tabs: _,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
          (0, _.jsx)(`br`, {}),
        ],
      }),
    }),
  });
}
var _ = `OWsSTDls0Wo-`,
  _ = `BDO9Kc-Jdxg-`,
  _ = `BWfLdodjbVc-`,
  _ = `_0K3Nkv4AwdI-`,
  _ = `_9TzuTTBiLVk-`,
  _ = `bdhpyzX5mZU-`;
function _(_) {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_.accountid),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(() => JSON.parse(JSON.stringify(_)));
  return _
    ? !_ || _.m_bPlayerNamePending
      ? (0, _.jsx)(_, {
          size: `medium`,
          position: `center`,
          string: _(`#Loading`),
        })
      : (0, _.jsxs)(`div`, {
          className: _(_, _),
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#MeetSteam_MainTitle`),
            }),
            (0, _.jsx)(`hr`, {}),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsxs)(`h1`, {
                        children: [
                          ` `,
                          _(
                            `#MeetSteam_Intro`,
                            _.m_strPlayerName,
                            (0, _.jsx)(`br`, {}),
                          ),
                        ],
                      }),
                      (0, _.jsx)(`p`, {
                        className: _,
                        children: _(`#MeetSteam_Desc1`),
                      }),
                    ],
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      oRegistration: _,
                      fnSetRegistration: _,
                    }),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: (0, _.jsx)(_, {
                      oRegistration: _,
                      fnSetRegistration: _,
                    }),
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _(_, _),
                    children: [
                      (0, _.jsx)(_, {
                        onClick: async () => {
                          (_(!0), _(!1), _(!1));
                          let _ = `${_.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                            _ = new FormData();
                          (_.append(`sessionid`, _()),
                            _.append(`registrationJson`, JSON.stringify(_)));
                          try {
                            let _ = await _.default.post(_, _, {
                              withCredentials: !0,
                            });
                            _.data.success == 1
                              ? _(!0)
                              : (console.error(
                                  `MeetSteamLanding failed ` + _.data.success,
                                ),
                                _(!0));
                          } catch (_) {
                            console.error(`MeetSteamLanding failed caught`, _);
                          }
                          _(!1);
                        },
                        children: _(`#Button_Submit`),
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          size: `medium`,
                          position: `center`,
                          string: _(`#Saving`),
                        }),
                      _ &&
                        (0, _.jsx)(`div`, {
                          children: _(`#Button_Saved`),
                        }),
                      _ &&
                        (0, _.jsx)(`div`, {
                          className: `wizbFzhGtBc-`,
                          children: _(`#Error_ErrorCommunicatingWithNetwork`),
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(`#MeetSteam_closed`),
      });
}
function _(_) {
  let { oRegistration: _, fnSetRegistration: _ } = _,
    { rgEvents: _, rgOldEvents: _, selectConference: _ } = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`h1`, {
        children: _(`#MeetSteam_Events_Interest`),
      }),
      (0, _.jsx)(`p`, {
        children: _(
          `#MeetSteam_Events_title`,
          _(`meet_steam_year`, `application_config`) || `2025`,
        ),
      }),
      (0, _.jsxs)(`p`, {
        children: [
          (0, _.jsx)(`span`, {
            className: _,
            children: `*`,
          }),
          ` `,
          _(`#MeetSteam_Events_desc`),
        ],
      }),
      !!_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`hr`, {}),
            (0, _.jsx)(`p`, {
              children: _(`#MeetSteam_ConferenceOrg`),
            }),
            (0, _.jsx)(_, {
              ..._,
              rgConference: [_],
            }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`hr`, {}),
            (0, _.jsx)(`h2`, {
              children: _(`#MeetSteam_OtherConference`),
            }),
          ],
        }),
      (0, _.jsx)(_, {
        ..._,
        rgConference: _,
      }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        type: `text`,
        value: _.suggestion || ``,
        onChange: (_) =>
          _({
            ..._,
            suggestion: _.currentTarget.value,
          }),
        label: _(`#MeetSteam_others`),
      }),
      _?.length > 0 &&
        (0, _.jsx)(_, {
          bStartMinimized: !0,
          title: _(`#MeetSteam_PastEvents`, _.length),
          children: (0, _.jsx)(_, {
            ..._,
            rgConference: _,
          }),
        }),
    ],
  });
}
function _(_) {
  let { rgConference: _ } = _;
  return (0, _.jsxs)(`table`, {
    children: [
      (0, _.jsx)(`thead`, {
        children: (0, _.jsxs)(`tr`, {
          children: [
            (0, _.jsx)(`th`, {}),
            (0, _.jsx)(`th`, {}),
            (0, _.jsx)(`th`, {}),
            (0, _.jsx)(`th`, {}),
          ],
        }),
      }),
      (0, _.jsx)(`tbody`, {
        children: _.map((_) =>
          (0, _.jsxs)(
            `tr`,
            {
              children: [
                (0, _.jsx)(`td`, {
                  children: _.attending
                    ? (0, _.jsx)(`span`, {
                        className: _,
                        children: `*`,
                      })
                    : ``,
                }),
                (0, _.jsxs)(`td`, {
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _.name,
                    }),
                    (0, _.jsx)(`div`, {
                      children: _.place,
                    }),
                  ],
                }),
                (0, _.jsx)(`td`, {
                  children: (0, _.jsx)(`div`, {
                    children: _.time,
                  }),
                }),
                (0, _.jsx)(`td`, {
                  children: (0, _.jsx)(_, {
                    ..._,
                    conf: _,
                  }),
                }),
              ],
            },
            _._,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { oRegistration: _, fnSetRegistration: _, conf: _ } = _;
  return (0, _.jsx)(_, {
    checked: _.attending?.includes(_._),
    onChange: (_) => {
      let _ = _.attending ? [..._.attending] : [];
      _ && !_.includes(_._)
        ? (_.push(_._),
          _({
            ..._,
            attending: _,
          }))
        : !_ &&
          _.includes(_._) &&
          (_.splice(_.indexOf(_._), 1),
          _({
            ..._,
            attending: _,
          }));
    },
    tooltip: _(`#MeetSteam_attend_ttip`),
  });
}
function _(_) {
  let { oRegistration: _, fnSetRegistration: _ } = _,
    _ = _(_.accountid),
    _ = _(_?.partner_id),
    [_, _] = (0, _.useState)(
      () => !!((_.email_override && _.email_override != _) || !_),
    ),
    [_, _, _] = _(() => [
      !_.have_you_met_steam,
      !!_.english_not_good,
      _.preferred_language,
    ]);
  return _.data
    ? (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(`h1`, {
            children: _(`#MeetSteam_You`),
          }),
          (0, _.jsx)(`p`, {
            children: _(`#MeetSteam_You_Desc`),
          }),
          (0, _.jsx)(_, {
            nPartnerID: _.partner_id,
            label: _(`#MeetSteam_You_Company`),
            setPartnerID: (_) =>
              _({
                ..._,
                partner_id: _,
              }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  type: `string`,
                  label: _(`#MeetSteam_You_Email`),
                  disabled: !_,
                  value: _.email_override || _ || ``,
                  placeholder: _(`#MeetSteam_You_EmailMissing`),
                  mustBeEmail: !0,
                  onChange: (_) =>
                    _({
                      ..._,
                      email_override: _.currentTarget.value,
                    }),
                }),
              }),
              !_ &&
                (0, _.jsx)(_, {
                  checked: _,
                  onChange: _,
                  label: _(`#MeetSteam_You_Update`),
                  tooltip: _(`#MeetSteam_You_Update_ttip`),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            children: _(`#MeetSteam_NeverMet`),
          }),
          (0, _.jsx)(_, {
            label: _(`#MeetSteam_NeverMetNo`),
            checked: _,
            onChange: (_) =>
              _({
                ..._,
                have_you_met_steam: !_,
              }),
          }),
          (0, _.jsx)(_, {
            children: _(`#MeetSteam_CapabableEnglish`),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                checked: !_,
                onChange: (_) =>
                  _ &&
                  _({
                    ..._,
                    english_not_good: void 0,
                    preferred_language: void 0,
                  }),
                label: _(`#MeetSteam_CapabableEnglish_Yes`),
              }),
              (0, _.jsx)(_, {
                className: _,
                checked: _,
                onChange: (_) =>
                  _ &&
                  _({
                    ..._,
                    english_not_good: !0,
                    preferred_language: _(_.LANGUAGE),
                  }),
                label: _(`#MeetSteam_CapabableEnglish_No`),
              }),
            ],
          }),
          _ &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`br`, {}),
                (0, _.jsx)(_, {
                  children: _(`#MeetSteam_LanguagePref`),
                }),
                (0, _.jsx)(_, {
                  selectedLang: _,
                  bAllowUnsetOption: !1,
                  strTooltip: _(`#MeetSteam_LanguagePref_ttip`),
                  fnOnLanguageChanged: (_) =>
                    _({
                      ..._,
                      preferred_language: _,
                    }),
                }),
              ],
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: `medium`,
        position: `center`,
        string: _(`#Loading`),
      });
}
function _(_) {
  let { nPartnerID: _, setPartnerID: _, label: _ } = _,
    _ = _(_.accountid);
  if (!_)
    return (0, _.jsx)(_, {
      size: `small`,
      position: `center`,
      string: _(`#Loading`),
    });
  if (_.length == 1) return null;
  let _ = [];
  return (
    _.forEach((_) =>
      _.push({
        label: _?.partner_name,
        data: _.partnerid,
      }),
    ),
    (0, _.jsx)(_, {
      layout: `inline`,
      label: _,
      rgOptions: _,
      selectedOption: _,
      onChange: (_) => {
        _(_.data);
      },
    })
  );
}
function _() {
  let [_] = (0, _.useState)(() => _(`registration_open`, `application_config`));
  return _;
}
function _() {
  let [_] = (0, _.useState)(() => _(`user_reg`, `application_config`) || {});
  return _;
}
function _() {
  let [_] = (0, _.useState)(
    () => _(`partner_user_email`, `application_config`) || ``,
  );
  return _;
}
function _() {
  let [_] = (0, _.useState)(() =>
    _(`primary_partner_id`, `application_config`),
  );
  return _;
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(_.accountid, _ == _ ? null : _);
  return _ == _ ? _ : _?.email;
}
var _ = `LmRMNslicbg-`;
function _(_) {
  let { data: _ } = _(_.accountid),
    _ = _(),
    _ = _(),
    [_, _] = (0, _.useState)(() => _ || ``),
    { surveyGID: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1);
  return !_ || _.m_bPlayerNamePending
    ? (0, _.jsx)(_, {
        size: `medium`,
        position: `center`,
        string: _(`#Loading`),
      })
    : (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#MeetSteam_PostSurvey_Title`, _),
          }),
          (0, _.jsx)(`hr`, {}),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(`div`, {
                      children: _(`#MeetSteam_PostSurvey_Question`),
                    }),
                    (0, _.jsx)(`textarea`, {
                      rows: 10,
                      onChange: (_) => _(_.currentTarget.value),
                      value: _,
                      autoFocus: !0,
                    }),
                  ],
                }),
                (0, _.jsxs)(`div`, {
                  className: _(_, _),
                  children: [
                    (0, _.jsx)(_, {
                      onClick: async () => {
                        (_(!0), _(!1), _(!1));
                        let _ = `${_.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${_}`,
                          _ = new FormData();
                        (_.append(`gid`, _), _.append(`sessionid`, _()));
                        let _ = {
                          gid: _,
                          simple_response: _,
                          submit_time: Math.floor(new Date().getTime() / 1e3),
                        };
                        _.append(`surveyjson`, JSON.stringify(_));
                        try {
                          let _ = await _.default.post(_, _, {
                            withCredentials: !0,
                          });
                          _.data.success == 1
                            ? _(!0)
                            : (console.error(
                                `MeetSteamLanding failed ` + _.data.success,
                              ),
                              _(!0));
                        } catch (_) {
                          console.error(`MeetSteamLanding failed caught`, _);
                        }
                        _(!1);
                      },
                      children: _(`#Button_Submit`),
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        size: `medium`,
                        position: `center`,
                        string: _(`#Saving`),
                      }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        children: _(`#Button_Saved`),
                      }),
                    _ &&
                      (0, _.jsx)(`div`, {
                        className: `wizbFzhGtBc-`,
                        children: _(`#Error_ErrorCommunicatingWithNetwork`),
                      }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
}
function _() {
  let [_] = (0, _.useState)(
    () => _(`survey_event_name`, `application_config`) || ``,
  );
  return _;
}
function _() {
  let [_] = (0, _.useState)(() => _(`survey_data`, `application_config`) || ``);
  return _;
}
function _(_) {
  let _ = _(),
    _ = _(),
    _ = _(),
    { surveyGID: _ } = _(),
    { bIsLoading: _, events: _ } = _(_),
    [_, _] = (0, _.useMemo)(
      () => [
        _.map((_) => {
          let _ = new _(_.steamid);
          if (_.has(_.GetAccountID())) {
            let _ = _.get(_.GetAccountID());
            return JSON.parse(_[0].jsondata).partner_id;
          }
          return null;
        }).filter(Boolean),
        _.map((_) => new _(_.steamid).GetAccountID()),
      ],
      [_, _],
    ),
    _ = _(_),
    _ = _(_);
  return _ || !_ || !_
    ? (0, _.jsx)(_, {
        string: `Loading Event, Partner and User Info`,
      })
    : (0, _.jsx)(_, {
        rgSurveyResults: _,
        mapAccountsToReg: _,
        meetSteamEvents: _,
      });
}
var _ = _();
function _(_) {
  let { rgSurveyResults: _, mapAccountsToReg: _, meetSteamEvents: _ } = _,
    _ = (0, _.useMemo)(() => {
      if (!_) return null;
      let _ = new Map();
      _.forEach((_) => _.set(_.GID, _));
      let _ = [];
      return (
        _.forEach((_) => {
          let _ = JSON.parse(_.jsondata),
            _ = new _(_.steamid),
            _ = {
              feedback: _.simple_response,
              accountid: _.GetAccountID(),
            };
          if (_.has(_.GetAccountID())) {
            let _ = _.get(_.GetAccountID()),
              _ = JSON.parse(_[0].jsondata);
            ((_.partner_id = _.partner_id),
              (_.email = _.email_override),
              (_.name = _.name),
              (_.registrations = ``));
            let _ = _(_.partner_id);
            (_ && (_.partner_name = _.name),
              _.forEach((_) => {
                let _ = _.get(_.gidEvent);
                if (_) {
                  let _ = _.jsondata.meet_steam_groups.find(
                    (_) => _.group_id === _.group_id,
                  ).localized_session_title[0];
                  (_.registrations.length > 0 && (_.registrations += `|`),
                    (_.registrations += _));
                }
              }));
          } else {
            let _ = _(_.GetAccountID());
            _ && (_.name = _.persona_name);
          }
          _.push(_);
        }),
        _
      );
    }, [_, _, _]),
    _ = (0, _.useMemo)(
      () => [
        _.accessor(`name`, {
          header: `Name`,
          size: 150,
        }),
        _.accessor(`feedback`, {
          header: `Feedback`,
          size: 500,
          cell: _,
        }),
        _.accessor(`registrations`, {
          header: `Sessions`,
          size: 200,
          cell: _,
        }),
        _.accessor(`accountid`, {
          header: `Account ID`,
          size: 150,
        }),
        _.accessor(`email`, {
          header: `Email`,
          size: 150,
        }),
        _.accessor(`partner_name`, {
          header: `Partner Name`,
          size: 200,
        }),
      ],
      [],
    );
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: `Survey Results`,
            }),
            (0, _.jsx)(`hr`, {}),
            (0, _.jsx)(_, {
              _: `download-csv`,
              onClick: () =>
                _(
                  `meetsteam_survey_results.csv`,
                  _,
                  _.map((_) => ({
                    accessorKey: _.accessorKey,
                    header:
                      typeof _.header == `string`
                        ? _.header
                        : (_.accessorKey ?? ``),
                  })),
                ),
              style: {
                width: `120px`,
              },
              children: `Download CSV`,
            }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(_, {
              columns: _,
              data: _,
              getRowKey: (_) => _,
              stickyHeader: !0,
              nItemHeight: 28,
              overscan: _.length,
            }),
          ],
        }),
      })
    : (0, _.jsx)(_, {
        string: _(`#Loading`),
      });
}
function _(_) {
  return _.getValue()?.length > 0
    ? (0, _.jsx)(_, {
        text: _.getValue(),
        regExp: /\|/,
      })
    : ``;
}
function _() {
  let _ = _();
  return (0, _.useMemo)(() => {
    let _ = new Map();
    return (
      _.forEach((_, _) => {
        _.forEach((_) => {
          let _ = new _(_.steamid);
          (_.has(_.GetAccountID()) || _.set(_.GetAccountID(), []),
            (_.gidEvent = _),
            _.get(_.GetAccountID()).push(_));
        });
      }),
      _
    );
  }, [_]);
}
function _() {
  let [_] = (0, _.useState)(() => {
    let _ = new Map(),
      _ = _(`registration_by_gid`, `application_config`) || {};
    for (let _ in _) {
      let _ = _[_];
      _.set(_, _);
    }
    return _;
  });
  return _;
}
function _() {
  let [_] = (0, _.useState)(() => _(`event_gids`, `application_config`) || []);
  return _;
}
function _() {
  let [_] = (0, _.useState)(
    () => _(`survey_results`, `application_config`) || [],
  );
  return _;
}
var _ = {
  YearlySurvery: (_ = `:year`) => `/${_}`,
  PostEventSurvey: (_ = `:surveyGID`) => `/survey/${_}`,
  AdminDashboard: () => `/admin`,
  PostEventSurveyResults: (_ = `:surveyGID`) => `/surveyresults/${_}`,
};
function _(_) {
  return (
    (0, _.useEffect)(() => {
      _.Init();
    }, []),
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        basename: _() + `meetsteam/`,
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsx)(_, {
              exact: !0,
              path: _.DiagData(),
              render: (_) =>
                (0, _.jsx)(_, {
                  ..._,
                  strConfigID: `application_config`,
                }),
            }),
            (0, _.jsx)(_, {
              exact: !0,
              path: _.AdminDashboard(),
              component: _,
            }),
            (0, _.jsx)(_, {
              exact: !0,
              path: _.YearlySurvery(`:year(\\d+)`),
              component: _,
            }),
            (0, _.jsx)(_, {
              exact: !0,
              path: _.PostEventSurvey(`:surveyGID(\\d+)`),
              component: _,
            }),
            (0, _.jsx)(_, {
              exact: !0,
              path: _.PostEventSurveyResults(`:surveyGID(\\d+)`),
              component: _,
            }),
            (0, _.jsx)(_, {
              component: _,
            }),
          ],
        }),
      }),
    })
  );
}
export { _ as MeetSteamRoutes, _ as default };
