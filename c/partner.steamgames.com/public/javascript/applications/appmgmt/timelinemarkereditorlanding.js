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
} from "./mobx.esm.js";
import { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ } from "./src.js";
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
} from "./dialogs.js";
import { _ } from "./react-router.js";
import { _ } from "./webuitransportdefaults.js";
import "./appinfo.js";
import "./modals.js";
import { _ } from "./axios.js";
import { _ } from "./ajaxhooks.js";
import { _ } from "./axiosutils.js";
import { _ } from "./historyutils.js";
import { _, _ } from "./partnereventshared.module.js";
import "./partnereventdialog.module.js";
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
  _,
} from "./shared_svg_gamerecordings.js";
import { _, _, _ } from "./dashplayer.js";
import { _, _ } from "./browserapi.js";
import { _, _ } from "./simplesuccesserror.js";
import { _ } from "./appinfostore.js";
import { _, _, _, _, _, _ } from "./adminshared.module.js";
import { _, _, _ } from "./dnd.esm.js";
import { _, _, _, _, _ } from "./gamerecordinglog.js";
import { _ } from "./tour.js";
var _ = `steam_`,
  _ = (function (_) {
    return (
      (_[(_.White = 0)] = `White`),
      (_[(_.Red = 1)] = `Red`),
      (_[(_.Orange = 2)] = `Orange`),
      (_[(_.Yellow = 3)] = `Yellow`),
      (_[(_.Green = 4)] = `Green`),
      (_[(_.Blue = 5)] = `Blue`),
      (_[(_.Purple = 6)] = `Purple`),
      (_[(_.Brown = 7)] = `Brown`),
      (_[(_.Gray = 8)] = `Gray`),
      _
    );
  })({});
function _(_) {
  switch (_) {
    default:
    case 0:
      return `#DCDEDF`;
    case 1:
      return `#FB7C7C`;
    case 2:
      return `#FBB17C`;
    case 3:
      return `#FBDF7C`;
    case 4:
      return `#9DFB7C`;
    case 5:
      return `#7CD5FB`;
    case 6:
      return `#A57CFB`;
    case 7:
      return `#C18C5B`;
    case 8:
      return `#B8BCBF`;
  }
}
function _(_) {
  return Object.keys(_).filter((_) => !Number.isNaN(_));
}
var _ = _(_).map((_) => _[_]),
  _ = class _ {
    m_mapSteamTimelineMarkers = new Map();
    GetMarkerByID(_) {
      let _ = _.toLowerCase().startsWith(`steam_`)
        ? _.slice(6).toLowerCase()
        : _.toLowerCase();
      if (this.m_mapSteamTimelineMarkers.has(_))
        return this.m_mapSteamTimelineMarkers.get(_);
      let _ = parseInt(_);
      return typeof _ == `number` && _ >= 0 && _ <= 99
        ? {
            func: (_) =>
              _({
                nNumber: _,
              }),
            color: 8,
          }
        : _();
    }
    GetAllUseableMarkerID() {
      return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
        (_) => _ + _,
      );
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    AddMarker(_, _, _) {
      let _ = _ ?? 0;
      this.m_mapSteamTimelineMarkers.set(_, {
        func: _,
        color: _,
      });
      for (let _ of _) {
        let _ = `${_}_${_[_]}`.toLowerCase();
        this.m_mapSteamTimelineMarkers.set(_, {
          func: _,
          color: _,
        });
      }
    }
    Init() {
      this.AddMarker(`explosion`, _, 8),
        this.AddMarker(`attack`, _, 8),
        this.AddMarker(`defend`, _, 8),
        this.AddMarker(`combat`, _, 8),
        this.AddMarker(`chest`, _, 8),
        this.AddMarker(`view`, _, 8),
        _() ? this.AddMarker(`death`, _, 8) : this.AddMarker(`death`, _, 8),
        this.AddMarker(`x`, _, 8),
        this.AddMarker(`plus`, _, 8),
        this.AddMarker(`minus`, _, 8),
        this.AddMarker(`info`, _, 8),
        this.AddMarker(`bolt`, _, 8),
        this.AddMarker(`caution`, _, 8),
        this.AddMarker(`completed`, _, 8),
        this.AddMarker(`checkmark`, _, 8),
        this.AddMarker(`effect`, _, 8),
        this.AddMarker(`purchase`, _, 8),
        this.AddMarker(`ribbon`, _, 8),
        this.AddMarker(`scroll`, _, 8),
        this.AddMarker(`crown`, _, 8),
        this.AddMarker(`starburst`, _, 8),
        this.AddMarker(`flag`, _, 8),
        this.AddMarker(`cart`, _, 8),
        this.AddMarker(`timer`, _, 8),
        this.AddMarker(`chat`, _, 8),
        this.AddMarker(`wrench`, _, 8),
        this.AddMarker(`transfer`, _, 8),
        this.AddMarker(`edit`, _, 8),
        this.AddMarker(`bookmark`, _, 8),
        this.AddMarker(`invalid`, _, 8),
        this.AddMarker(`star`, _, 8),
        this.AddMarker(`circle`, _, 8),
        this.AddMarker(`square`, _, 8),
        this.AddMarker(`triangle`, _, 8),
        this.AddMarker(`heart`, _, 8),
        this.AddMarker(`diamond`, _, 8),
        this.AddMarker(`gem`, _, 8),
        this.AddMarker(`group`, _, 8),
        this.AddMarker(`pair`, _, 8),
        this.AddMarker(`single`, _, 8),
        this.AddMarker(`trophy`, _, 8),
        this.AddMarker(`achievement`, _, 8),
        this.AddMarker(`screenshot`, _, 8),
        this.AddMarker(`bug`, _, 8),
        this.AddMarker(`fix`, _, 8),
        this.AddMarker(`person`, _, 8),
        this.AddMarker(`question`, _, 8);
    }
  };
function _(_) {
  return _.Get().GetMarkerByID(_);
}
function _() {
  return {
    func: _,
    color: 5,
  };
}
function _() {
  return {
    func: _,
    color: 0,
  };
}
function _() {
  return {
    func: _,
    color: 8,
  };
}
function _(_) {
  return _ && _.toLowerCase().startsWith(`steam_`);
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = null;
function _(_) {
  _
    ? console.error(`Attempt to set timeline marker hook a second time`)
    : (_ = _);
}
function _(_, _) {
  return _
    ? _(_, _)
    : (console.error(
        `useGameMarkerFromID called in a context where the hook isn't defined.`,
      ),
      null);
}
function _() {
  return window.g_GRS;
}
function _() {
  if (_() != null) {
    let _ = _();
    return {
      bLoading: _.BLoadingAppsWithBackgroundVideo(),
      rgApps: _.GetAppsWithBackgroundVideo(),
    };
  }
  return {
    bLoading: !1,
    rgApps: [],
  };
}
function _() {
  let [_, _] = (0, _.useState)(_());
  return (0, _.useEffect)(() => _(_, _), []), _;
}
function _(_) {
  let { bLoading: _, rgApps: _ } = _();
  return {
    bLoading: _,
    app: (0, _.useMemo)(() => _.find((_) => _.game_id === _), [_, _]),
  };
}
function _(_) {
  return (_() != null && _ && _().GetClipSummariesForGame(_)) || [];
}
function _(_, _, _, _, _, _) {
  return _() == null ? null : _().LoadThumbnails(_, _, _, _, _, _ ?? !0);
}
function _() {
  return _() == null
    ? {}
    : {
        fnSaveClip: _().SaveClip,
      };
}
function _() {
  return _() == null
    ? {}
    : {
        fnDeleteClip: _().DeleteClip,
      };
}
function _(_, _, _, _) {
  return _() == null ? null : _().TakeScreenshot(_, _, _.valMS, _);
}
function _() {
  return _() == null
    ? null
    : {
        fnCreateUserTimelineMarkers: _().CreateUserTimelineMarkers,
        fnUpdateUserTimelineMarkers: _().UpdateUserTimelineMarkers,
        fnRemoveUserTimelineMarker: _().RemoveUserTimelineMarker,
      };
}
function _(_, _) {
  return _(() => {
    if (_() != null) return _().GetAchievementInfo(_, _);
  });
}
function _(_, _, _, _, _) {
  return _().ReportClipRange(_, _, _, _, _);
}
function _() {
  return _(() => {
    if (_() != null) return !_().BEnoughDiskSpace();
  });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recordings: {
              _: 5,
              _: _,
              _: !0,
              _: !0,
            },
            phases: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            significant_events: {
              _: 7,
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
      return `CGameRecordingTimelineMetadata`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_ms: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            delete_on_cleanup: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            video_manager_clip_id: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            video_manager_video_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            cdn_manifest_url: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            file_size: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_zero_timeline_offset_ms: {
              _: 10,
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
      return `CGameRecordingTimelineMetadata_Recording`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            rt_created: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            possible_clip: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timeline_id: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_offset_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            marker_icon: {
              _: 8,
              _: _.readString,
              _: _.writeString,
            },
            marker_title: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            user_marker: {
              _: 10,
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
      return `CGameRecordingTimelineEvent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.phase_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6, 7, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            phase_id: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            duration_ms: {
              _: 5,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tags: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            contained_tags: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            background_timeline_offset: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            attributes: {
              _: 9,
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
      return `CGameRecordingPhase`;
    }
  },
  _ = class _ extends _.Message {
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
            group: {
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
      return `CGameRecordingPhase_Tag`;
    }
  },
  _ = class _ extends _.Message {
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
            group: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            icon: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            priority: {
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
      return `CTimelineTag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.group || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            value: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            priority: {
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
      return `CPhaseAttribute`;
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Request`;
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            most_recent_start_time: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            recording_type: {
              _: 3,
              _: _.readEnum,
              _: _.writeEnum,
            },
            video_duration_seconds: {
              _: 4,
              _: _.readDouble,
              _: _.writeDouble,
            },
            timeline_duration_seconds: {
              _: 5,
              _: _.readDouble,
              _: _.writeDouble,
            },
            is_active: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            file_size: {
              _: 7,
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
      return `CGameRecording_GetAppsWithBackgroundVideo_Response_App`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetTimelinesForApp_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timelines || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timelines: {
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
      return `CGameRecording_GetTimelinesForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_GetTimelinesForClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timelines: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
            first_timeline_start_offset_ms: {
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
      return `CGameRecording_GetTimelinesForClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.page || _(_._()),
        _.Message.initialize(this, _, 0, -1, [12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            page: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            count: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            filter_gameid: {
              _: 10,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            filter_search_string: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            filter_tags: {
              _: 12,
              _: _,
              _: !0,
              _: !0,
            },
            filter_phase_id: {
              _: 13,
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
      return `CGameRecording_QueryPhases_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.group || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            group: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CGameRecording_QueryPhases_Request_Tag`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.phases || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            phases: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            total_count: {
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
      return `CGameRecording_QueryPhases_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 8, 10, 13, 16, 17], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 5,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            tags: {
              _: 7,
              _: _,
              _: !0,
              _: !0,
            },
            contained_tags: {
              _: 8,
              _: _,
              _: !0,
              _: !0,
            },
            background_recording: {
              _: 9,
              _: _,
            },
            clip_ids: {
              _: 10,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            type: {
              _: 11,
              _: _.readEnum,
              _: _.writeEnum,
            },
            start_ms: {
              _: 12,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            screenshots: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readUint32,
              pbr: _.readPackedUint32,
              _: _.writeRepeatedUint32,
            },
            active: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            phase_id: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            significant_events: {
              _: 16,
              _: _,
              _: !0,
              _: !0,
            },
            attributes: {
              _: 17,
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
      return `CGameRecording_QueryPhases_Response_Phase`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            offset: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
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
      return `CGameRecording_QueryPhases_Response_Phase_BackgroundRecording`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetTags_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tags || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tags: {
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
      return `CGameRecording_GetTags_Response`;
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
      return `CGameRecording_GetEnoughDiskSpace_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.enough_space || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            enough_space: {
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
      return `CGameRecording_GetEnoughDiskSpace_Response`;
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
      return `CGameRecording_GetAvailableDiskSpace_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            size: {
              _: 1,
              _: _.readDouble,
              _: _.writeDouble,
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
      return `CGameRecording_GetAvailableDiskSpace_Response`;
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
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start_time: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            duration_ms: {
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
      return `CGameRecording_TimelineChanged_Notification`;
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
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 4,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            session_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            start_offset: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            recording_type: {
              _: 8,
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
      return `CGameRecording_RecordingSessionChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [17, 19], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            type: {
              _: 4,
              _: _.readEnum,
              _: _.writeEnum,
            },
            game_mode: {
              _: 5,
              _: _.readInt32,
              _: _.writeInt32,
            },
            range_title: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            range_duration: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            range_possible_clip: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            timestamp_title: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            marker_icon: {
              _: 11,
              _: _.readString,
              _: _.writeString,
            },
            marker_description: {
              _: 13,
              _: _.readString,
              _: _.writeString,
            },
            marker_priority: {
              _: 14,
              _: _.readInt32,
              _: _.writeInt32,
            },
            screenshot_handle: {
              _: 15,
              _: _.readUint32,
              _: _.writeUint32,
            },
            achievement_name: {
              _: 16,
              _: _.readString,
              _: _.writeString,
            },
            tag: {
              _: 17,
              _: _,
              _: !0,
              _: !0,
            },
            phase_id: {
              _: 18,
              _: _.readString,
              _: _.writeString,
            },
            attributes: {
              _: 19,
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
      return `CTimelineEntry`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entry || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entry: {
              _: 1,
              _: _,
            },
            game_id: {
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
      return `CGameRecording_TimelineEntryChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
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
      return `CGameRecording_TimelineEntryRemoved_Notification`;
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
      return `CGameRecording_LowDiskSpace_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_PostGameHighlightsChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            phase_id: {
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
      return `CGameRecording_OpenOverlayToGamePhase_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry_id: {
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
      return `CGameRecording_OpenOverlayToTimelineEvent_Notification`;
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
      return `CGameRecording_PhaseListChanged_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            duration_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            date_recorded: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            start_timeline_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_ms: {
              _: 6,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            published_file_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            file_size: {
              _: 8,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 9,
              _: _.readString,
              _: _.writeString,
            },
            date_clipped: {
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
            temporary: {
              _: 11,
              _: _.readBool,
              _: _.writeBool,
            },
            original_device: {
              _: 12,
              _: _.readString,
              _: _.writeString,
            },
            original_gaming_device_type: {
              _: 13,
              _: _.readUint32,
              _: _.writeUint32,
            },
            date_downloaded: {
              _: 14,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_url: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            thumbnail_width: {
              _: 16,
              _: _.readUint32,
              _: _.writeUint32,
            },
            thumbnail_height: {
              _: 17,
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
      return `CGameRecording_ClipSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            start: {
              _: 2,
              _: _,
            },
            end: {
              _: 3,
              _: _,
            },
            name: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            src_clip_id: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            temporary: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            force_thumbnail: {
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
      return `CGameRecording_SaveClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timeline_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            timeline_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            offset_ms: {
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
      return `CGameRecording_SaveClip_Request_Position`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CGameRecording_SaveClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_DeleteClip_Request`;
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
      return `CGameRecording_DeleteClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bitrate_kbps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            bitrate_kbps: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            width: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            height: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            frames_per_second: {
              _: 4,
              _: _.readInt32,
              _: _.writeInt32,
            },
            codec: {
              _: 5,
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
      return `CGameRecording_ExportClip_Settings`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            export_mp4_path: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 3,
              _: _,
            },
            use_unique_filename: {
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
      return `CGameRecording_ExportClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.result || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            result: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CGameRecording_ExportClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            settings: {
              _: 2,
              _: _,
            },
            run_policy_checks: {
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
      return `CGameRecording_ExportClipPreview_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.estimated_size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            estimated_size: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            settings: {
              _: 2,
              _: _,
            },
            result: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CGameRecording_ExportClipPreview_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            timeline_offset_ms: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            source_clip_id: {
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
      return `CGameRecording_TakeScreenshot_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.screenshot_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            screenshot_id: {
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
      return `CGameRecording_TakeScreenshot_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            title: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            desc: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            visibility: {
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
      return `CGameRecording_UploadClipToSteam_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CGameRecording_UploadClipToSteam_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
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
      return `CGameRecording_ZipClip_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.zip_path || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            zip_path: {
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
      return `CGameRecording_ZipClip_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            created_after: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            include_temporary: {
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
      return `CGameRecording_GetClips_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip: {
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
      return `CGameRecording_GetClips_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            created_after: {
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
      return `CGameRecording_GetAndTrimPostGameHighlights_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.events || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            events: {
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
      return `CGameRecording_GetAndTrimPostGameHighlights_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry: {
              _: 2,
              _: _,
            },
            clip_id: {
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
      return `CGameRecording_UserAddTimelineEntry_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entry_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            entry_id: {
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
      return `CGameRecording_UserAddTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            entry: {
              _: 2,
              _: _,
            },
            clip_id: {
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
      return `CGameRecording_UserUpdateTimelineEntry_Request`;
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
      return `CGameRecording_UserUpdateTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            timeline_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            entry_id: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            clip_id: {
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
      return `CGameRecording_UserRemoveTimelineEntry_Request`;
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
      return `CGameRecording_UserRemoveTimelineEntry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_ids: {
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
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Request`;
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
      return `CGameRecording_ManuallyDeleteRecordingsForApps_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.folder_path || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            folder_path: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            type: {
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
      return `CGameRecording_GetTotalDiskSpaceUsage_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            size: {
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
      return `CGameRecording_GetTotalDiskSpaceUsage_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recording_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recording_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            clip_id: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            timeline_id: {
              _: 7,
              _: _.readString,
              _: _.writeString,
            },
            start_offset_us: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readInt64String,
              pbr: _.readPackedInt64String,
              _: _.writeRepeatedInt64String,
            },
            major_axis: {
              _: 5,
              _: 512,
              _: _.readUint32,
              _: _.writeUint32,
            },
            time_precision: {
              _: 6,
              _: 0,
              _: _.readEnum,
              _: _.writeEnum,
            },
            format: {
              _: 8,
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
      return `CGameRecording_GetThumbnails_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.thumbnails || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            thumbnails: {
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
      return `CGameRecording_GetThumbnails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.image_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            image_data: {
              _: 1,
              _: _.readBytes,
              _: _.writeBytes,
            },
            width: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            height: {
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
      return `CGameRecording_GetThumbnails_Response_Thumbnail`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_StartRecording_Request`;
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
      return `CGameRecording_StartRecording_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_StopRecording_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CGameRecording_StopRecording_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_GetRecordingSize_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.file_size || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            file_size: {
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
      return `CGameRecording_GetRecordingSize_Response`;
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
      return `CGameRecording_CleanupBackgroundRecordings_Request`;
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
      return `CGameRecording_CleanupBackgroundRecordings_Response`;
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
      return `CGameRecording_GetPlatformCapabilities_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.per_process_audio_capture || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            per_process_audio_capture: {
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
      return `CGameRecording_GetPlatformCapabilities_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CGameRecording_ClipCreated_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clip_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clip_id: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            game_id: {
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
      return `CGameRecording_ClipDeleted_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.progress || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            progress: {
              _: 1,
              _: _.readFloat,
              _: _.writeFloat,
            },
            clip_id: {
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
      return `CGameRecording_ExportProgress_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            enabled: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            minutes: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            bitrate: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            infinite: {
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
      return `CGameRecording_PerGameSettings`;
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
      return `CGameRecording_GetPerGameSettings_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            settings: {
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
      return `CGameRecording_GetPerGameSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_settings || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_settings: {
              _: 1,
              _: _,
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
      return `CGameRecording_SetPerGameSettings_Request`;
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
      return `CGameRecording_SetPerGameSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            gameid: {
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
      return `CGameRecording_DeletePerGameSettings_Request`;
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
      return `CGameRecording_DeletePerGameSettings_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.progress || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            progress: {
              _: 1,
              _: _.readFloat,
              _: _.writeFloat,
            },
            clip_id: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            eresult: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
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
      return `CGameRecording_UploadProgress_Notification`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            game_id: {
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
      return `CGameRecording_SwitchBackgroundRecordingGame_Request`;
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
      return `CGameRecording_SwitchBackgroundRecordingGame_Response`;
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
      return `CGameRecording_GetState_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.is_h265_enabled || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            is_h265_enabled: {
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
      return `CGameRecording_GetState_Response`;
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
      return `CGameRecording_StateChanged_Notification`;
    }
  },
  _;
(function (_) {
  _.GetAppsWithBackgroundVideoHandler = {
    name: `GameRecording.GetAppsWithBackgroundVideo#1`,
    request: _,
    response: _,
  };
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetAppsWithBackgroundVideo = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetAppsWithBackgroundVideo#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetAppsWithBackgroundVideo = _),
    (_.GetTimelinesForAppHandler = {
      name: `GameRecording.GetTimelinesForApp#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTimelinesForApp#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTimelinesForApp = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTimelinesForApp#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetTimelinesForApp = _),
    (_.GetTimelinesForClipHandler = {
      name: `GameRecording.GetTimelinesForClip#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTimelinesForClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTimelinesForClip = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTimelinesForClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetTimelinesForClip = _),
    (_.QueryPhasesHandler = {
      name: `GameRecording.QueryPhases#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.QueryPhases#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.QueryPhases = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.QueryPhases#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgQueryPhases = _),
    (_.GetTagsHandler = {
      name: `GameRecording.GetTags#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTags#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTags = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTags#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetTags = _),
    (_.GetEnoughDiskSpaceHandler = {
      name: `GameRecording.GetEnoughDiskSpace#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetEnoughDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetEnoughDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetEnoughDiskSpace = _),
    (_.GetAvailableDiskSpaceHandler = {
      name: `GameRecording.GetAvailableDiskSpace#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetAvailableDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetAvailableDiskSpace#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetAvailableDiskSpace = _),
    (_.SaveClipHandler = {
      name: `GameRecording.SaveClip#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.SaveClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SaveClip = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.SaveClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgSaveClip = _),
    (_.DeleteClipHandler = {
      name: `GameRecording.DeleteClip#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.DeleteClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.DeleteClip = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.DeleteClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgDeleteClip = _),
    (_.GetClipsHandler = {
      name: `GameRecording.GetClips#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetClips#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetClips = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetClips#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetClips = _),
    (_.UploadClipToSteamHandler = {
      name: `GameRecording.UploadClipToSteam#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UploadClipToSteam#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UploadClipToSteam = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UploadClipToSteam#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgUploadClipToSteam = _),
    (_.ExportClipHandler = {
      name: `GameRecording.ExportClip#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ExportClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ExportClip = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ExportClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgExportClip = _),
    (_.ExportClipPreviewHandler = {
      name: `GameRecording.ExportClipPreview#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ExportClipPreview#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ExportClipPreview = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ExportClipPreview#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgExportClipPreview = _),
    (_.TakeScreenshotHandler = {
      name: `GameRecording.TakeScreenshot#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.TakeScreenshot#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.TakeScreenshot = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.TakeScreenshot#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgTakeScreenshot = _),
    (_.ZipClipHandler = {
      name: `GameRecording.ZipClip#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ZipClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.ZipClip = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.ZipClip#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgZipClip = _),
    (_.StartRecordingHandler = {
      name: `GameRecording.StartRecording#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.StartRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.StartRecording = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.StartRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgStartRecording = _),
    (_.StopRecordingHandler = {
      name: `GameRecording.StopRecording#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.StopRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.StopRecording = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.StopRecording#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgStopRecording = _),
    (_.GetBackgroundRecordingFileSizeHandler = {
      name: `GameRecording.GetBackgroundRecordingFileSize#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.GetBackgroundRecordingFileSize = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.GetBackgroundRecordingFileSize#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgGetBackgroundRecordingFileSize = _),
    (_.CleanupBackgroundRecordingsHandler = {
      name: `GameRecording.CleanupBackgroundRecordings#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.CleanupBackgroundRecordings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.CleanupBackgroundRecordings = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.CleanupBackgroundRecordings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgCleanupBackgroundRecordings = _),
    (_.GetAndTrimPostGameHighlightsHandler = {
      name: `GameRecording.GetAndTrimPostGameHighlights#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.GetAndTrimPostGameHighlights = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.GetAndTrimPostGameHighlights#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgGetAndTrimPostGameHighlights = _),
    (_.GetThumbnailsHandler = {
      name: `GameRecording.GetThumbnails#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetThumbnails#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetThumbnails = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetThumbnails#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetThumbnails = _),
    (_.GetPlatformCapabilitiesHandler = {
      name: `GameRecording.GetPlatformCapabilities#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetPlatformCapabilities#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetPlatformCapabilities = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetPlatformCapabilities#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetPlatformCapabilities = _),
    (_.NotifyTimelineChangedHandler = {
      name: `GameRecording.NotifyTimelineChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyTimelineChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyTimelineChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyTimelineChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyTimelineChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyTimelineChanged = _),
    (_.NotifyRecordingSessionChangedHandler = {
      name: `GameRecording.NotifyRecordingSessionChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyRecordingSessionChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyRecordingSessionChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyRecordingSessionChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyRecordingSessionChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyRecordingSessionChanged = _),
    (_.NotifyTimelineEntryChangedHandler = {
      name: `GameRecording.NotifyTimelineEntryChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyTimelineEntryChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineEntryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyTimelineEntryChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyTimelineEntryChanged = _),
    (_.NotifyTimelineEntryRemovedHandler = {
      name: `GameRecording.NotifyTimelineEntryRemoved#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyTimelineEntryRemovedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTimelineEntryRemoved = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyTimelineEntryRemoved = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyTimelineEntryRemoved#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyTimelineEntryRemoved = _),
    (_.NotifyClipCreatedHandler = {
      name: `GameRecording.NotifyClipCreated#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyClipCreatedHandler, _)
    );
  }
  _.RegisterForNotifyClipCreated = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipCreated#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyClipCreated = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipCreated#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyClipCreated = _),
    (_.NotifyClipDeletedHandler = {
      name: `GameRecording.NotifyClipDeleted#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyClipDeletedHandler, _)
    );
  }
  _.RegisterForNotifyClipDeleted = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipDeleted#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyClipDeleted = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyClipDeleted#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyClipDeleted = _),
    (_.NotifyExportProgressHandler = {
      name: `GameRecording.NotifyExportProgress#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyExportProgressHandler, _)
    );
  }
  _.RegisterForNotifyExportProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyExportProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyExportProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyExportProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyExportProgress = _),
    (_.NotifyUploadProgressHandler = {
      name: `GameRecording.NotifyUploadProgress#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyUploadProgressHandler, _)
    );
  }
  _.RegisterForNotifyUploadProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyUploadProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyUploadProgress = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyUploadProgress#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyUploadProgress = _),
    (_.NotifyLowDiskSpaceHandler = {
      name: `GameRecording.NotifyLowDiskSpace#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyLowDiskSpaceHandler, _)
    );
  }
  _.RegisterForNotifyLowDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyLowDiskSpace = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyLowDiskSpace#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgNotifyLowDiskSpace = _),
    (_.NotifyPostGameHighlightsChangedHandler = {
      name: `GameRecording.NotifyPostGameHighlightsChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyPostGameHighlightsChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyPostGameHighlightsChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyPostGameHighlightsChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPostGameHighlightsChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyPostGameHighlightsChanged = _),
    (_.NotifyOpenOverlayToGamePhaseHandler = {
      name: `GameRecording.NotifyOpenOverlayToGamePhase#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyOpenOverlayToGamePhaseHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyOpenOverlayToGamePhase = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyOpenOverlayToGamePhase = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToGamePhase#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyOpenOverlayToGamePhase = _),
    (_.NotifyOpenOverlayToTimelineEventHandler = {
      name: `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyOpenOverlayToTimelineEventHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyOpenOverlayToTimelineEvent = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyOpenOverlayToTimelineEvent = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyOpenOverlayToTimelineEvent#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyOpenOverlayToTimelineEvent = _),
    (_.NotifyPhaseListChangedHandler = {
      name: `GameRecording.NotifyPhaseListChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyPhaseListChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyPhaseListChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.NotifyPhaseListChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(
            `GameRecording.NotifyPhaseListChanged#1`,
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgNotifyPhaseListChanged = _),
    (_.GetPerGameSettingsHandler = {
      name: `GameRecording.GetPerGameSettings#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetPerGameSettings = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetPerGameSettings = _),
    (_.SetPerGameSettingsHandler = {
      name: `GameRecording.SetPerGameSettings#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.SetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SetPerGameSettings = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.SetPerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgSetPerGameSettings = _),
    (_.DeletePerGameSettingsHandler = {
      name: `GameRecording.DeletePerGameSettings#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.DeletePerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.DeletePerGameSettings = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.DeletePerGameSettings#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgDeletePerGameSettings = _),
    (_.UserAddTimelineEntryHandler = {
      name: `GameRecording.UserAddTimelineEntry#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserAddTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserAddTimelineEntry = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserAddTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgUserAddTimelineEntry = _),
    (_.UserUpdateTimelineEntryHandler = {
      name: `GameRecording.UserUpdateTimelineEntry#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserUpdateTimelineEntry = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserUpdateTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgUserUpdateTimelineEntry = _),
    (_.UserRemoveTimelineEntryHandler = {
      name: `GameRecording.UserRemoveTimelineEntry#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.UserRemoveTimelineEntry = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.UserRemoveTimelineEntry#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgUserRemoveTimelineEntry = _),
    (_.ManuallyDeleteRecordingsForAppsHandler = {
      name: `GameRecording.ManuallyDeleteRecordingsForApps#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.ManuallyDeleteRecordingsForApps = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.ManuallyDeleteRecordingsForApps#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgManuallyDeleteRecordingsForApps = _),
    (_.GetTotalDiskSpaceUsageHandler = {
      name: `GameRecording.GetTotalDiskSpaceUsage#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetTotalDiskSpaceUsage = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetTotalDiskSpaceUsage#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetTotalDiskSpaceUsage = _),
    (_.SwitchBackgroundRecordingGameHandler = {
      name: `GameRecording.SwitchBackgroundRecordingGame#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  _.SwitchBackgroundRecordingGame = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(
            `GameRecording.SwitchBackgroundRecordingGame#1`,
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 1,
            },
          )
    );
  }
  (_.SendMsgSwitchBackgroundRecordingGame = _),
    (_.GetStateHandler = {
      name: `GameRecording.GetState#1`,
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetState#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.GetState = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              _(`Transport Error: no transport is available for request`);
          })
        : _.SendMsg(`GameRecording.GetState#1`, _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  (_.SendMsgGetState = _),
    (_.NotifyStateChangedHandler = {
      name: `GameRecording.NotifyStateChanged#1`,
      request: _,
    });
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyStateChangedHandler, _)
    );
  }
  _.RegisterForNotifyStateChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyStateChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.NotifyStateChanged = _;
  function _(_, _) {
    return (
      (_ ||= _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : _.SendNotification(`GameRecording.NotifyStateChanged#1`, _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 1,
          })
    );
  }
  _.SendMsgNotifyStateChanged = _;
})((_ ||= {}));
var _ = (function (_) {
  return (
    (_[(_.Invalid = 0)] = `Invalid`),
    (_[(_.Playing = 1)] = `Playing`),
    (_[(_.Staging = 2)] = `Staging`),
    (_[(_.Menus = 3)] = `Menus`),
    _
  );
})({});
function _(_) {
  return _.type === `gamemode`;
}
function _(_) {
  return _.type === `state_description`;
}
function _(_) {
  return _.type === `event` && parseInt(_.duration) > 0;
}
function _(_) {
  return _.type === `event`;
}
function _(_) {
  return _.type === `achievement`;
}
function _(_) {
  return _.type === `error`;
}
function _(_) {
  return _.type === `usermarker`;
}
function _(_) {
  return _.type === `screenshot`;
}
function _(_) {
  let _ = {
    _: _.entry_id,
    time: _.time,
    type: void 0,
  };
  switch (_.type) {
    case 1: {
      let _ = _;
      (_.type = `gamemode`), (_.mode = _.game_mode);
      break;
    }
    case 5: {
      let _ = _;
      (_.type = `usermarker`),
        (_.icon = `steam_marker`),
        (_.priority = _.marker_priority);
      break;
    }
    case 4: {
      let _ = _;
      (_.type = `achievement`), (_.achievement_name = _.achievement_name);
      break;
    }
    case 7: {
      let _ = _;
      (_.type = `error`), (_.description = _.marker_description);
      break;
    }
    case 3: {
      let _ = _;
      (_.type = `state_description`), (_.title = _.timestamp_title);
      break;
    }
    case 2: {
      let _ = _;
      (_.type = `event`),
        (_.icon = _.marker_icon),
        (_.title = _.range_title),
        (_.description = _.marker_description),
        (_.priority = _.marker_priority),
        (_.duration = _.range_duration),
        (_.possible_clip = _.range_possible_clip);
      break;
    }
    case 6: {
      let _ = _;
      (_.type = `screenshot`),
        (_.icon = _.marker_icon),
        (_.priority = _.marker_priority),
        (_.handle = _.screenshot_handle);
      break;
    }
    default:
      return null;
  }
  return _;
}
var _ = new _(`ReactUsageReporting`).Debug,
  _ = 100,
  _ = _.PerMinute * 1e3,
  _ = class {
    m_strProduct;
    m_strVersion;
    m_transport = null;
    m_mapRoutes = new Map();
    m_mapComponents = new Map();
    m_mapActions = new Map();
    m_reportCount = 0;
    m_bInitialized = !1;
    Init(_, _, _) {
      (this.m_bInitialized = !0),
        (this.m_strProduct = _),
        (this.m_strVersion = _),
        (this.m_transport = _),
        this.ScheduleSend();
    }
    ScheduleSend() {
      setTimeout(() => this.CheckSend(), _);
    }
    CheckSend() {
      this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
    }
    ReportInternal(_, _) {
      _.has(_) || _.set(_, 0),
        _.set(_, _.get(_) + 1),
        this.m_reportCount++,
        this.ShouldSendMetricsImmediately() && this.SendMetrics();
    }
    ReportRouteMatch(_) {
      _(`Route match: ` + _), this.ReportInternal(_, this.m_mapRoutes);
    }
    ReportTrackedComponent(_) {
      _(`Tracked component: ` + _),
        this.ReportInternal(_, this.m_mapComponents);
    }
    ReportTrackedAction(_) {
      _(`User action: ` + _), this.ReportInternal(_, this.m_mapActions);
    }
    ShouldSendMetricsImmediately() {
      return this.m_reportCount >= _;
    }
    SendMetrics() {
      if (!this.m_bInitialized) return;
      let _ = _.Init(_);
      _.Body().set_product(this.m_strProduct),
        _.Body().set_version(this.m_strVersion),
        this.m_mapRoutes.forEach((_, _) => {
          let _ = new _();
          _.set_route(_), _.set_count(_), _.Body().add_routes(_);
        }),
        this.m_mapComponents.forEach((_, _) => {
          let _ = new _();
          _.set_component(_), _.set_count(_), _.Body().add_components(_);
        }),
        this.m_mapActions.forEach((_, _) => {
          let _ = new _();
          _.set_action(_), _.set_count(_), _.Body().add_actions(_);
        }),
        this.m_mapRoutes.clear(),
        this.m_mapComponents.clear(),
        this.m_mapActions.clear(),
        (this.m_reportCount = 0),
        _.ReportReactUsage(this.m_transport, _);
    }
    get version() {
      return this.m_strVersion;
    }
    get product() {
      return this.m_strProduct;
    }
  };
_([_], _.prototype, `CheckSend`, null);
var _ = new _();
function _(_) {
  return {
    type: `global`,
    valMS: _,
  };
}
function _(_) {
  return {
    type: `timeline`,
    valMS: _,
  };
}
function _(_) {
  return {
    type: `global`,
    valPX: _,
  };
}
function _(_) {
  return {
    type: `scrollWindow`,
    valPX: _,
  };
}
var _ = class _ {
    m_ulGameID;
    constructor(_, _, _) {
      if (typeof _ == `string`) this.m_ulGameID = _.fromString(_, !0);
      else {
        let _ = _,
          _ = ((_ & 255) << 24) + (_ & 16777215);
        this.m_ulGameID = _.fromBits(_, _, !0);
      }
    }
    GetAppID() {
      return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
    }
    GetType() {
      return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
    }
    GetModID() {
      return this.m_ulGameID.getHighBitsUnsigned();
    }
    ConvertTo64BitString() {
      return this.m_ulGameID.toString();
    }
    BIsSteamApp() {
      return this.GetType() === _.k_EGameIDTypeApp;
    }
    BIsShortcut() {
      return this.GetType() === _.k_EGameIDTypeShortcut;
    }
    BIsMod() {
      return this.GetType() === _.k_EGameIDTypeGameMod;
    }
    GetInternalAppID() {
      return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
    }
    BIsValid() {
      switch (this.GetType()) {
        case _.k_EGameIDTypeApp:
          return this.GetAppID() !== 0;
        case _.k_EGameIDTypeGameMod:
          return this.GetAppID() !== 0 && !!(this.GetModID() & 2147483648);
        case _.k_EGameIDTypeShortcut:
          return !!(this.GetModID() & 2147483648);
        default:
          return _(!1, `Unknown GameID type: ${this.GetType()}`), !1;
      }
    }
    static InitFromAppID(_) {
      return new _(_.k_EGameIDTypeApp, _, 0);
    }
    static InitFromShortcutID(_) {
      return new _(_.k_EGameIDTypeShortcut, 0, _);
    }
  },
  _ = 1e4,
  _ = 3e3,
  _ = 4e3,
  _ = class _ {
    constructor() {
      _(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new _();
    m_fnTimelineURLBuilder;
    BInitialized() {
      return this.m_bInitialized;
    }
    GetTimelines() {
      return this.m_rgTimelineMetadata;
    }
    GetTimelineMetadataIndex(_) {
      return this.m_rgTimelineMetadata.findIndex(
        (_) => _.metadata.timeline_id === _,
      );
    }
    GetTimelineMetadata(_) {
      return this.m_rgTimelineMetadata.find(
        (_) => _.metadata.timeline_id === _,
      );
    }
    GetGameID() {
      return this.m_gameID;
    }
    GetClipID() {
      return this.m_clipID;
    }
    BIsTimelineRunning(_) {
      return this.m_mapRunningTimelines.has(_);
    }
    AddEventListener(_) {
      return this.m_rgListeners.push(_), () => _(this.m_rgListeners, _);
    }
    async LoadTimelinesForBackgroundVideo(_) {
      this.m_gameID = _;
      let { timelines: _ = [] } = (
        await _.GetTimelinesForApp({
          game_id: _,
        })
      )
        .Body()
        .toObject();
      this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`);
    }
    async LoadTimelinesForClip(_) {
      this.m_clipID = _;
      let _ = await _.GetTimelinesForClip({
        clip_id: _,
      });
      if (_.GetEResult() != 1) throw Error(`Unable to load clip ` + _);
      let {
        timelines: _ = [],
        game_id: _,
        first_timeline_start_offset_ms: _,
      } = _.Body().toObject();
      (this.m_gameID = _), this.UpdateTimelineMetadata(_);
      for (let _ of this.m_rgTimelineMetadata) {
        _(`Loaded clip ${_} timeline ${_.metadata.timeline_id}`);
        for (let _ of _.metadata.recordings)
          _(`Clip recording ${_.recording_id} duration ${_.duration_ms}`);
      }
      (this.m_ulFirstTimelineOffsetMS = parseInt(_)),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`);
    }
    UpdateTimelineMetadata(_) {
      let _ = _.slice().sort((_, _) => _.date_recorded - _.date_recorded),
        _ = [],
        _ = 0,
        _ = {};
      _.forEach((_) => {
        (_.recordings ||= []),
          _[_.timeline_id]
            ? console.error(
                `Duplicate timelines found in UpdateTimelineMetadata()`,
                _.timeline_id,
                _,
              )
            : (_.push({
                nGlobalOffsetMS: _(_),
                metadata: _,
              }),
              (_ += parseInt(_.duration_ms)),
              (_[_.timeline_id] = !0));
      }),
        (this.m_rgTimelineMetadata = _);
    }
    LoadTimelinesForSharedClip(_) {
      this.SetPreloadedTimelines(0, _.clip_id, _.game_id, _.timelines, void 0);
    }
    LoadTimelinesForTestGame(_, _) {
      this.SetPreloadedTimelines(
        0,
        void 0,
        _,
        _,
        (_) => `https://steamloopback.host/gamerecordings/timelines/${_}.json`,
      );
    }
    LoadTimelinesForTestClip(_, _, _, _) {
      this.SetPreloadedTimelines(_, _, _, _, void 0);
    }
    SetPreloadedTimelines(_, _, _, _, _) {
      (this.m_gameID = _),
        (this.m_clipID = _),
        (this.m_ulFirstTimelineOffsetMS = _);
      let _ = _.slice();
      this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = _),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`);
    }
    FireEvent(_, ..._) {
      for (let _ of this.m_rgListeners) {
        let _ = _[_];
        _ instanceof Function && _.apply(_, _);
      }
    }
    async LoadTimelineData(_) {
      let _ = this.m_mapTimelineData.get(_);
      if (_ && _.m_strState === `loading`) {
        await _.m_promise;
        return;
      }
      if (
        (_ && _.m_strState == `error`) ||
        (this.IsActiveTimeline(_) && _.m_strState == `loaded`)
      )
        return;
      let _ = {
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (!this.m_fnTimelineURLBuilder)
        this.m_mapTimelineData.set(_, {
          m_strState: `loaded`,
          ..._,
        });
      else {
        let _ = this.m_fnTimelineURLBuilder(_),
          _ = _.default
            .get(_, {
              withCredentials: !1,
            })
            .then(
              (_) => {
                if (_.status == 200 && _.data) {
                  _(_.data);
                  let _ = this.ProcessTimelineEntries(_.data);
                  this.m_mapTimelineData.set(_, _);
                } else
                  this.m_mapTimelineData.set(_, {
                    ..._,
                    m_strState: `error`,
                  });
              },
              (_) => {
                this.m_mapTimelineData.set(_, {
                  ..._,
                  m_strState: `error`,
                });
              },
            )
            .finally(() => this.FireEvent(`OnTimelineLoaded`, _));
        this.m_mapTimelineData.set(_, {
          m_strState: `loading`,
          m_promise: _,
          ..._,
        });
      }
    }
    ProcessTimelineEntries(_) {
      let _ = {
        m_strState: `loaded`,
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (_.entries) {
        let _ = [],
          _ = [],
          _ = [],
          _ = [];
        for (let _ of _.entries)
          switch (_.type) {
            case `phase`:
              _.push(_);
              break;
            case `gamemode`:
              _.push(_);
              break;
            case `state_description`:
              _.push(_);
              break;
            case `achievement`:
            case `error`:
            case `event`:
            case `screenshot`:
            case `usermarker`:
              _.push(_);
              break;
            default:
              console.error(`Unknown timeline entry type ${_.type}`);
          }
        let _ = (_, _) => parseInt(_.time) - parseInt(_.time);
        (_.m_rgGameModeChanges = _.sort(_)),
          (_.m_rgStateDescriptions = _.sort(_)),
          (_.m_rgPhases = _.sort(_)),
          (_.m_rgEntries = _.sort(_)),
          _.m_rgGameModeChanges.length > 0 &&
            parseInt(_.m_rgGameModeChanges[0].time) < _ &&
            (_.m_rgGameModeChanges[0].time = `0`);
      }
      return _;
    }
    static ApplyTimelineRounding(_, _) {
      if (_ === 0) return _;
      let _ = _ % _;
      return _ == 0 ? _ : _ + (_ - _);
    }
    FindTimelineAtOffset(_, _) {
      let _ = _ + this.m_ulFirstTimelineOffsetMS,
        _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = parseInt(_.metadata.duration_ms) + _;
        if (_ + _ > _)
          return {
            timeline: _,
            nTimelineOffsetMS: _ - _,
            ulGlobalToTimelineOffset: _,
          };
        _ += _.ApplyTimelineRounding(_, _);
      }
      return null;
    }
    GetGlobalOffsetDataForTimeline(_, _) {
      let _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = parseInt(_.metadata.duration_ms),
          _ = _.ApplyTimelineRounding(_, _);
        if (_.metadata.timeline_id == _)
          return {
            nGlobalOffsetMS: _,
            nRoundedDurationMS: _,
          };
        _ += _;
      }
      return null;
    }
    CreateGlobalRangeForTimeline(_, _, _, _) {
      let _ = _ - _,
        _ = _ + _;
      return this.ClampGlobalRangeToTimeline(_, _, _);
    }
    ClampGlobalRangeToTimeline(_, _, _) {
      let _ = this.GetGlobalOffsetDataForTimeline(_, 0);
      return _
        ? [
            Math.max(_, _.nGlobalOffsetMS),
            Math.min(_, _.nGlobalOffsetMS + _.nRoundedDurationMS - 1),
          ]
        : [0, 0];
    }
    GetTimelineOffsetFromGlobal(_, _) {
      let _ = this.m_ulFirstTimelineOffsetMS + _,
        _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = parseInt(_.metadata.duration_ms) + _,
          _ = _.ApplyTimelineRounding(_, _);
        if (_ < _ + _)
          return {
            strTimelineID: _.metadata.timeline_id,
            nTimelineOffsetMS: _(_ - _ - _),
          };
        _ += _;
      }
      return {
        strTimelineID: void 0,
        nTimelineOffsetMS: _(NaN),
      };
    }
    ConvertRecordingOffsetToGlobalOffset(_, _, _) {
      let _ = 0;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = parseInt(_.metadata.duration_ms),
          _ = this.GetTimelineStartBeforeGlobalZeroMS(_.metadata.timeline_id),
          _ = _.ApplyTimelineRounding(_, _);
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ =
              (isNaN(parseInt(_.recording_zero_timeline_offset_ms))
                ? 0
                : parseInt(_.recording_zero_timeline_offset_ms) - _) + _;
            return (
              (_ += _),
              {
                nGlobalOffsetMS: _,
                nRoundedDurationMS: _,
                strTimelineID: _.metadata.timeline_id,
                nTimelineOffsetMS: _,
              }
            );
          }
        _ += _;
      }
      return null;
    }
    IsActiveTimeline(_) {
      return _ ? this.m_mapRunningTimelines.has(_) : !1;
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      if (!this.IsActiveTimeline(_)) return _;
      let _ = this.GetTimelineMetadata(_);
      if (!_) return _;
      let _ = parseInt(_.metadata.duration_ms);
      return Math.min(_ - _, 0);
    }
    IsActiveRecording(_) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ = this.m_mapRunningTimelines.get(_.metadata.timeline_id);
            return _ && _.m_runningRecording
              ? _.m_runningRecording.recording_id === _
              : !1;
          }
      return !1;
    }
    GetRunningTimelineDurationMS(_) {
      let _ = this.m_mapRunningTimelines.get(_);
      if (!_) return 0;
      let _ =
          performance.now() - _.m_perfCounterStart + _.m_nPerfCounterOffsetMS,
        _ = parseInt(_.m_metadata.duration_ms) || 0;
      return Math.max(_, _);
    }
    GetRunningTimelineForRecording(_, _) {
      let _ = this.m_mapRunningTimelines.get(_);
      return _ &&
        _.m_runningRecording &&
        _.m_runningRecording.recording_id === _
        ? _
        : null;
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
      if (!this.m_bInitialized) return null;
      let _ = this.FindTimelineAtOffset(_, 0);
      if (!_) return null;
      let _ = _.nTimelineOffsetMS - _.ulGlobalToTimelineOffset;
      for (let _ of _.timeline.metadata.recordings) {
        let _ = parseInt(_.start_offset_ms);
        if (_ + parseInt(_.duration_ms) < _ || _ > _) continue;
        let _ = parseInt(_.recording_zero_timeline_offset_ms),
          _ = Math.max(_ - _, 0);
        return (
          isNaN(_) || (_ = Math.max(_.nTimelineOffsetMS - _, 0)),
          {
            strRecordingID: _.recording_id,
            nRecordingOffsetMS: _,
            nStartOffsetMS: _,
          }
        );
      }
      return null;
    }
    async FindRecordingAndOffsetForEntry(_) {
      for (let _ of this.m_mapRunningTimelines.keys()) {
        if (!this.IsActiveTimeline(_)) continue;
        await this.LoadTimelineData(_);
        let _ = this.m_mapTimelineData.get(_),
          _ = this.m_mapRunningTimelines.get(_);
        if (_ && _) {
          for (let _ of _.m_rgEntries)
            if (_._ == _) {
              let _ = parseInt(_.time);
              for (let _ of _.m_metadata.recordings) {
                let _ = parseInt(_.start_offset_ms),
                  _ = _ + parseInt(_.duration_ms);
                if (_ >= _ && _ <= _)
                  return {
                    strRecordingID: _.recording_id,
                    nRecordingOffsetMS: _,
                    nStartOffsetMS: _,
                  };
              }
            }
          break;
        }
      }
    }
    GetClosestNextRecordingInGlobalTimeline(_) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS > _.valMS)
            return _;
      return null;
    }
    GetClosestPreviousRecordingInGlobalTimeline(_) {
      let _ = null;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS > _.valMS)
            return _;
          else _ = _;
      return _;
    }
    ConvertRecordingTimeMStoPreTrimTimeMS(_, _) {
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id === _) {
            let _ = parseInt(_.recording_zero_timeline_offset_ms),
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              );
            return !_ || isNaN(_) ? _ : _ + _ - _;
          }
      return _;
    }
    GetTimelineDataOrStartLoad(_) {
      if (!_) return null;
      let _ = this.m_mapTimelineData.get(_);
      return (
        (_ ||= (this.LoadTimelineData(_), this.m_mapTimelineData.get(_))), _
      );
    }
    GetTimelineData(_) {
      return this.m_mapTimelineData.get(_);
    }
    SetTimelineData(_, _) {
      let _ = this.ProcessTimelineEntries(_);
      this.m_mapTimelineData.set(_, _);
    }
    GetClosestPreviousEntryInTimeline(_, _) {
      let _ = this.GetTimelineMetadata(_),
        _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = this.GetTimelineDataOrStartLoad(_),
        _ = null;
      if (_ && _.m_strState === `loaded`) {
        let _ = _.m_rgEntries.filter((_) => {
            let _ = parseInt(_.time);
            return _ < _ + parseInt(_.metadata.duration_ms) && _ > _;
          }),
          _ = _(_, (_) => _.valMS - 1 - parseInt(_.time));
        _ !== -1 && (_ = _[_]);
      }
      return {
        entry: _,
        timelineState: _?.m_strState,
      };
    }
    GetClosestNextEntryInTimeline(_, _) {
      let _ = this.GetTimelineMetadata(_),
        _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = this.GetTimelineDataOrStartLoad(_),
        _ = null;
      if (_ && _.m_strState === `loaded`) {
        let _ = _.m_rgEntries.filter((_) => {
            let _ = parseInt(_.time);
            return _ < _ + parseInt(_.metadata.duration_ms) && _ > _;
          }),
          _ = _(_, (_) => _.valMS - parseInt(_.time));
        _ < _.length - 1 && (_ = _[_ + 1]);
      }
      return {
        entry: _,
        timelineState: _?.m_strState,
      };
    }
    GetClosestPreviousEntryInGlobalTimeline(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineData(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`)
        return {
          timelineID: _?.strTimelineID,
          timelineState: _?.m_strState,
          entry: null,
          globalMS: null,
        };
      let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.strTimelineID),
        _ = _.nTimelineOffsetMS.valMS + _,
        _ = _(_.m_rgEntries, (_) => _ - parseInt(_.time));
      if (_ !== -1) {
        let _ = _.m_rgEntries[_],
          _ =
            this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS.valMS -
            _ +
            parseInt(_.time);
        return _ < 0
          ? {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            }
          : {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: _,
              globalMS: _(_),
            };
      }
      let _ = this.GetTimelineMetadataIndex(_.strTimelineID);
      if (_ < 1)
        return {
          timelineID: _.strTimelineID,
          timelineState: _.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let _ = _ - 1; _ >= 0; _--) {
        let _ = this.m_rgTimelineMetadata[_],
          _ = this.GetTimelineData(_.metadata.timeline_id);
        if (_) {
          if (_.m_strState !== `loaded`)
            return {
              timelineID: _.metadata.timeline_id,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
          if (_.m_rgEntries.length) {
            let _ = _.m_rgEntries[_.m_rgEntries.length - 1],
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              ),
              _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
            return _ < 0
              ? {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                }
              : {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: _,
                  globalMS: _(_),
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    GetClosestNextEntryInGlobalTimeline(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineData(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`)
        return {
          timelineID: _?.strTimelineID,
          timelineState: _?.m_strState,
          entry: null,
          globalMS: null,
        };
      let _ = this.GetTimelineStartBeforeGlobalZeroMS(_.strTimelineID),
        _ = _.nTimelineOffsetMS.valMS + _,
        _ = _(_.m_rgEntries, (_) => _ - parseInt(_.time)) + 1;
      if (_ <= _.m_rgEntries.length - 1) {
        let _ = _.m_rgEntries[_],
          _ =
            this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS.valMS -
            _ +
            parseInt(_.time);
        return _ < this.GetGlobalTimelineEndMS().valMS
          ? {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: _,
              globalMS: _(_),
            }
          : {
              timelineID: _.strTimelineID,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
      }
      let _ = this.m_rgTimelineMetadata.length,
        _ = this.GetTimelineMetadataIndex(_.strTimelineID);
      if (_ === -1 || _ === _ - 1)
        return {
          timelineID: _.strTimelineID,
          timelineState: _.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let _ = _ + 1; _ < _; _++) {
        let _ = this.m_rgTimelineMetadata[_],
          _ = this.GetTimelineData(_.metadata.timeline_id);
        if (_) {
          if (_.m_strState !== `loaded`)
            return {
              timelineID: _.metadata.timeline_id,
              timelineState: _.m_strState,
              entry: null,
              globalMS: null,
            };
          if (_.m_rgEntries.length) {
            let _ = _.m_rgEntries[0],
              _ = this.GetTimelineStartBeforeGlobalZeroMS(
                _.metadata.timeline_id,
              ),
              _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
            return _ < this.GetGlobalTimelineEndMS().valMS
              ? {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: _,
                  globalMS: _(_),
                }
              : {
                  timelineID: _.metadata.timeline_id,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[_ - 1].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    FindRangeEventsAtGlobalMS(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_, 0),
        _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`) return [];
      let _ = [];
      for (let _ of _.m_rgEntries) {
        if (parseInt(_.time) > _.nTimelineOffsetMS.valMS) break;
        if (_.type !== `event` || parseInt(_.duration) == 0) continue;
        let _ = parseInt(_.time),
          _ = _ + parseInt(_.duration);
        _ <= _.nTimelineOffsetMS.valMS &&
          _ >= _.nTimelineOffsetMS.valMS &&
          _.push(_);
      }
      return _;
    }
    GetStateDescriptionAtGlobalMS(_) {
      let _ = this.GetTimelineOffsetFromGlobal(_.valMS, 0),
        _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
      if (!_ || _.m_strState !== `loaded`) return null;
      let _ = _(
        _.m_rgStateDescriptions,
        (_) => _.nTimelineOffsetMS.valMS - parseInt(_.time),
      );
      return _ > -1 ? _.m_rgStateDescriptions[_] : null;
    }
    AdvanceGameModeIndex(_) {
      let _ = _.m_iGameModeChanges;
      for (; _ + 1 < _.m_data.m_rgGameModeChanges.length; ) {
        let _ = _.m_data.m_rgGameModeChanges[_ + 1];
        if (parseInt(_.time) > _.m_nTimelineOffsetMS) break;
        _++;
      }
      _.m_iGameModeChanges = _;
    }
    AdvanceEntriesIndex(_) {
      for (
        _.m_iEntries == -1 && _.m_iEntries++;
        _.m_iEntries < _.m_data.m_rgEntries.length;
      ) {
        let _ = _.m_data.m_rgEntries[_.m_iEntries];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS) break;
        _.m_iEntries++;
      }
    }
    CreateTimelineIterator(_, _) {
      let _ = this.FindTimelineAtOffset(_, _);
      if (!_)
        return {
          m_timeline: null,
          m_data: null,
          m_nTimelineOffsetMS: 0,
          m_iGameModeChanges: -1,
          m_iEntries: -1,
        };
      let _ = this.GetTimelineDataOrStartLoad(_.timeline.metadata.timeline_id),
        _ = -1,
        _ = -1;
      if (_?.m_strState == `loaded`) {
        let _ = (_) => _.ulGlobalToTimelineOffset - parseInt(_.time);
        (_ = _(_.m_rgGameModeChanges, _)), (_ = _(_.m_rgEntries, _));
      }
      let _ = {
        m_timeline: _.timeline.metadata,
        m_data: _,
        m_nTimelineOffsetMS: Math.max(_.ulGlobalToTimelineOffset, 0),
        m_iGameModeChanges: _,
        m_iEntries: _,
      };
      return this.AdvanceEntriesIndex(_), this.AdvanceGameModeIndex(_), _;
    }
    HasIteratorReachedEnd(_) {
      return !_.m_timeline;
    }
    AdvanceIterator(_, _) {
      let _ = parseInt(_.m_timeline.duration_ms);
      if (_.m_nTimelineOffsetMS + _ < _ + this.m_ulFirstTimelineOffsetMS) {
        (_.m_nTimelineOffsetMS += _),
          this.AdvanceEntriesIndex(_),
          this.AdvanceGameModeIndex(_);
        return;
      }
      let _ = this.m_rgTimelineMetadata.findIndex(
        (_) => _.metadata == _.m_timeline,
      );
      _ < 0 || _ == this.m_rgTimelineMetadata.length - 1
        ? (_.m_timeline = null)
        : (_++,
          (_.m_timeline = this.m_rgTimelineMetadata[_].metadata),
          (_.m_data = this.GetTimelineDataOrStartLoad(
            _.m_timeline.timeline_id,
          )),
          (_.m_nTimelineOffsetMS = 0),
          (_.m_iGameModeChanges = 0),
          (_.m_iEntries = 0));
    }
    GetIteratorTimelineState(_) {
      return _.m_data.m_strState;
    }
    GetIteratorGameMode(_) {
      return _.m_iGameModeChanges < 0 ||
        _.m_iGameModeChanges >= _.m_data.m_rgGameModeChanges.length
        ? _.Playing
        : _.m_data.m_rgGameModeChanges[_.m_iGameModeChanges].mode;
    }
    *GetIteratorEntriesWithin(_, _) {
      let _ = _.m_data.m_rgEntries;
      for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
        let _ = _[_];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
        yield _;
      }
    }
    *GetIteratorGameModesWithin(_, _) {
      let _ = _.m_data.m_rgGameModeChanges;
      for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
        let _ = _[_];
        if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
        yield _;
      }
    }
    GetFirstRecording() {
      if (!this.m_bInitialized) return ``;
      let _ = this.m_rgTimelineMetadata[0];
      if (!_) return ``;
      let _ = _.metadata.recordings[0];
      return _ ? _.recording_id : ``;
    }
    GetFirstRecordingOfLastTimelineSession() {
      if (!this.m_bInitialized) return ``;
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (!_) return ``;
      let _ = _.metadata.recordings[0];
      return _ ? _.recording_id : ``;
    }
    GetNextRecording(_) {
      if (!this.m_bInitialized || !_) return ``;
      let _ = !1;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings) {
          if (_) return _.recording_id;
          _.recording_id == _ && (_ = !0);
        }
      return ``;
    }
    BRecordingHasZeroOffset(_) {
      if (!this.m_bInitialized) return !1;
      for (let _ of this.m_rgTimelineMetadata)
        for (let _ of _.metadata.recordings)
          if (_.recording_id == _)
            return !isNaN(parseInt(_.recording_zero_timeline_offset_ms));
      return !1;
    }
    GetTimelineDateMS(_, _) {
      if (!this.m_bInitialized) return 0;
      let _ = this.FindTimelineAtOffset(_, _);
      return _
        ? _.timeline.metadata.date_recorded * 1e3 + _.nTimelineOffsetMS
        : 0;
    }
    InsertEntryIntoTimelineSorted(_, _) {
      _(_.m_rgEntries, _, (_, _) => parseInt(_.time) - parseInt(_.time));
    }
    AddEventToTimeline(_, _, _, _, _, _, _, _) {
      if (!this.m_bInitialized)
        return _(`timeline loader not initialized, unexpected`), !1;
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return _(`failed to find timeline ${_}`), !1;
      let _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = {
          _: _,
          time: _ + ``,
          type: `event`,
          icon: _,
          title: _,
          description: _,
          priority: _,
          duration: `${_}`,
          possible_clip: 2,
        };
      return (
        _(`adding timeline event marker at ${_} at ${_} MS`),
        this.InsertEntryIntoTimelineSorted(_, _),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    RemoveTimelineEvent(_, _) {
      if (!this.m_bInitialized)
        return _(`timeline loader not initialized, unexpected`), !1;
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return _(`failed to find timeline ${_}`), !1;
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      return _ < 0
        ? (_(`failed to find entry by id: ${_}`), !1)
        : (_.m_rgEntries.splice(_, 1), this.FireEvent(`OnInvalidate`, _), !0);
    }
    AddUserMarker(_, _, _, _) {
      if (!this.m_bInitialized)
        return _(`timeline loader not initialized, unexpected`), !1;
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return _(`failed to find timeline ${_}`), !1;
      let _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
        _ = {
          _: _,
          time: _ + ``,
          type: `usermarker`,
          icon: _,
          title: ``,
          description: ``,
          priority: 0,
        };
      return (
        _(`adding user marker at ${_} at ${_} MS`),
        this.InsertEntryIntoTimelineSorted(_, _),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    UpdateUserMarker(_, _, _) {
      if (!this.m_bInitialized)
        return _(`timeline loader not initialized, unexpected`), !1;
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return _(`failed to find timeline ${_}`), !1;
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      if (_ < 0) return _(`failed to find entry by id: ${_}`), !1;
      let _ = _.m_rgEntries[_],
        _ = _.time;
      return (
        (_.icon = _.strIcon),
        (_.time = `` + _.nTimelineOffsetMS),
        (_.title = _.name),
        (_.description = _.description),
        _ != _.time &&
          (_.m_rgEntries.splice(_, 1),
          this.InsertEntryIntoTimelineSorted(_, _)),
        this.FireEvent(`OnInvalidate`, _),
        !0
      );
    }
    RemoveUserMarker(_, _) {
      if (!this.m_bInitialized)
        return _(`timeline loader not initialized, unexpected`), !1;
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return _(`failed to find timeline ${_}`), !1;
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      return _ < 0
        ? (_(`failed to find entry by id: ${_}`), !1)
        : (_.m_rgEntries.splice(_, 1), this.FireEvent(`OnInvalidate`, _), !0);
    }
    AddRunningTimeline(_, _, _) {
      if (this.m_rgTimelineMetadata.find((_) => _.metadata.timeline_id == _))
        return;
      let _ = {
          timeline_id: _,
          game_id: _,
          date_recorded: _,
          recordings: [],
        },
        _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        _ = _ ? _.nGlobalOffsetMS.valMS + parseInt(_.metadata.duration_ms) : 0;
      _(
        this.m_rgTimelineMetadata,
        {
          nGlobalOffsetMS: _(_),
          metadata: _,
        },
        (_, _) => _.metadata.date_recorded - _.metadata.date_recorded,
      ),
        this.m_mapTimelineData.set(_, {
          m_strState: `loaded`,
          m_rgGameModeChanges: [],
          m_rgStateDescriptions: [],
          m_rgEntries: [],
          m_rgPhases: [],
        });
      let _ = {
        m_metadata: _,
        m_globalStartMS: _,
        m_perfCounterStart: performance.now(),
        m_nPerfCounterOffsetMS: Math.max(0, _() - _) * 1e3,
        m_runningRecording: null,
      };
      this.m_mapRunningTimelines.set(_, _),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _);
    }
    UpdateRunningTimelines() {
      let _;
      this.m_mapRunningTimelines.forEach((_) => {
        _ = _.m_metadata.timeline_id;
        let _ =
          performance.now() - _.m_perfCounterStart + _.m_nPerfCounterOffsetMS;
        _ > (parseInt(_.m_metadata.duration_ms) || 0) &&
          (_.m_metadata.duration_ms = _.toString());
      }),
        this.m_mapRunningTimelines.size > 0 &&
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _);
    }
    RunningTimelineStopped(_, _) {
      let _ = this.m_mapRunningTimelines.get(_);
      _ &&
        ((_.m_metadata.duration_ms = _),
        this.m_mapRunningTimelines.delete(_),
        this.FireEvent(`OnInvalidate`, _));
    }
    AddRunningTimelineEntry(_) {
      let _ = this.m_mapRunningTimelines.get(_.timeline_id),
        _ = this.m_mapTimelineData.get(_.timeline_id);
      if (!_ || !_) return;
      let _ = _(_);
      if (!_) return;
      _(_)
        ? _(
            _.m_rgGameModeChanges,
            _,
            (_, _) => parseInt(_.time) - parseInt(_.time),
          )
        : _(_)
          ? _(
              _.m_rgStateDescriptions,
              _,
              (_, _) => parseInt(_.time) - parseInt(_.time),
            )
          : _(_.m_rgEntries, _, (_, _) => parseInt(_.time) - parseInt(_.time));
      let _ = parseInt(_.m_metadata.duration_ms) || 0,
        _ = parseInt(_.time);
      _ < _ && (_.m_metadata.duration_ms = _.toString()),
        this.FireEvent(`OnInvalidate`, _.timeline_id);
    }
    TimelineDeleted(_) {
      let _ = this.m_rgTimelineMetadata
        .filter((_) => _.metadata.timeline_id !== _)
        .map((_) => _.metadata);
      this.UpdateTimelineMetadata(_),
        this.m_mapTimelineData.delete(_),
        this.FireEvent(`OnInvalidate`, _);
    }
    RecordingSessionChanged(_) {
      let _ = _.session_id,
        _ = _.notification_type;
      if (_ == 1) {
        let _ = this.m_mapRunningTimelines.get(_.timeline_id);
        if (!_) {
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _),
            _(!1, `Received recording started message before timeline info`);
          return;
        }
        let _ = {
          recording_id: _,
          start_offset_ms: _.start_offset,
          recording_zero_timeline_offset_ms: _.start_offset,
          duration_ms: _.duration_ms,
          recording_type: _.recording_type,
        };
        _.m_metadata.recordings.push(_), (_.m_runningRecording = _);
      } else if (_ == 2) {
        let _ = this.GetRunningTimelineForRecording(_.timeline_id, _);
        if (!_) return;
        (_.m_runningRecording.duration_ms = _.duration_ms),
          (_.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _);
      } else if (_ == 4) {
        let _ = this.GetTimelineMetadata(_.timeline_id);
        if (_) {
          let _ = _.metadata.recordings.find((_) => _.recording_id === _);
          if (_) {
            (_.start_offset_ms = _.start_offset),
              (_.duration_ms = _.duration_ms);
            let _ = parseInt(_.start_offset) + parseInt(_.duration_ms);
            _ > (parseInt(_.metadata.duration_ms) || 0) &&
              (_.metadata.duration_ms = _.toString());
          }
        }
        this.GetRunningTimelineForRecording(_.timeline_id, _) ||
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _);
      } else if (_ == 3) {
        let _ = this.GetTimelineMetadata(_.timeline_id);
        if (_) {
          let _ = _.metadata.recordings.filter((_) => _.recording_id !== _);
          _.metadata.recordings = _;
        }
      }
      this.FireEvent(`OnInvalidate`, _.timeline_id);
    }
    GetGlobalTimelineEndMS() {
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (_) {
        let _ = isNaN(parseInt(_.metadata.duration_ms))
          ? 0
          : parseInt(_.metadata.duration_ms);
        return _(_.nGlobalOffsetMS.valMS + _);
      }
      return _(0);
    }
    GetEndOfRecordingsMS() {
      let _ = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (_) {
        let _ = _.metadata.recordings[_.metadata.recordings.length - 1];
        if (_) {
          let _ = this.m_mapRunningTimelines.has(_.metadata.timeline_id),
            _ = isNaN(parseInt(_.start_offset_ms))
              ? 0
              : parseInt(_.start_offset_ms),
            _ = isNaN(parseInt(_.metadata.duration_ms))
              ? 0
              : parseInt(_.metadata.duration_ms),
            _ = 0;
          return (
            _
              ? (_ = Math.max(0, _ - _))
              : isNaN(parseInt(_.duration_ms)) || (_ = parseInt(_.duration_ms)),
            _(_.nGlobalOffsetMS.valMS + _ + _)
          );
        }
      }
      return null;
    }
    GetTotalRecordingDuration() {
      let _ = 0;
      return (
        this.m_rgTimelineMetadata.forEach((_) => {
          _.metadata.recordings.forEach((_) => {
            isNaN(parseInt(_.duration_ms)) || (_ += parseInt(_.duration_ms));
          });
        }),
        _
      );
    }
    GetTimelineStartBeforeGlobalZeroMS(_) {
      return _ == this.m_rgTimelineMetadata[0].metadata.timeline_id
        ? this.m_ulFirstTimelineOffsetMS
        : 0;
    }
    async GenerateNamePartsFromTimeline(_, _, _, _) {
      let _,
        _ = !1,
        _,
        _,
        _,
        _;
      for (let _ of this.m_rgTimelineMetadata) {
        let _ = !1;
        if (!_) {
          if (_.metadata.timeline_id != _) continue;
          (_ = !0), (_ = !0);
        }
        let _ = _.metadata.timeline_id == _;
        await this.LoadTimelineData(_.metadata.timeline_id);
        let _ = this.m_mapTimelineData.get(_.metadata.timeline_id);
        _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)),
          _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3));
        for (let _ of _.m_rgEntries) {
          let _ = parseInt(_.time);
          if ((_ && _ < _) || (_ && _ > _) || (!_(_) && !_(_))) continue;
          let _ = _(_);
          (!_ || (_ && _.rank > _.rank)) && (_ = _);
        }
        for (let _ of _.m_rgStateDescriptions) {
          let _ = parseInt(_.time);
          (_ && _ > _) || ((!_ || _ < _) && ((_ = _), (_ = _)));
        }
        if (_) break;
      }
      let _ = _?.strTitle ?? _?.title,
        _ = new _(this.GetGameID());
      return {
        strTimelinePart: _,
        strAppNamePart: _.GetAppInfo(_.GetInternalAppID())?.name,
        rtStart: _,
        rtEnd: _,
      };
    }
    async GenerateClipNameFromTimeline(_, _, _, _) {
      let { strTimelinePart: _, strAppNamePart: _ } =
          await this.GenerateNamePartsFromTimeline(_, _, _, _),
        _ = new Date(),
        _ = [
          _,
          `${_.getFullYear()}-${(_.getMonth() + 1).toString().padStart(2, `0`)}-${_.getDate().toString().padStart(2, `0`)} ${_.toLocaleTimeString(_.GetPreferredLocales())}`,
          _,
        ]
          .filter((_) => !!_)
          .join(` - `);
      return _(`Generated clip name "${_}"`), _;
    }
  };
_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `UpdateRunningTimelines`, null);
function _(_) {
  switch (_.type) {
    case `event`:
      let _ = _;
      return {
        rank: 5e4 + _.priority,
        strTitle: _.title,
      };
    case `usermarker`:
      let _ = _;
      return !_.title && !_.description
        ? null
        : {
            rank: 1e5 + _.priority,
            strTitle: _.title || _.description,
          };
    case `state_description`:
      return {
        rank: 4e4,
        strTitle: _.title,
      };
    case `achievement`:
      return {
        rank: 9e4,
        strTitle: _.title,
      };
  }
  return null;
}
function _(_) {
  if (!Array.isArray(_.entries)) {
    let _ = [];
    _.entries &&
      typeof _.entries == `object` &&
      ((_ = Object.values(_.entries)),
      (_ = _.filter((_) => _ && typeof _ == `object` && `time` in _)),
      _.sort((_, _) => parseInt(_.time) - parseInt(_.time))),
      (_.entries = _);
  }
}
var _ = class {
  m_elVideo = null;
  m_player = null;
  m_listeners = new _();
  m_nDownloadFailureCount = 0;
  m_bInitailized = !1;
  m_bPaused = !1;
  m_bAtEnd = !1;
  m_strMediaTypeError = null;
  m_ePlayerError = 0;
  m_bUserInputNeeded = !1;
  m_bMuted = !1;
  m_bSeekReadyToPlay = !1;
  m_bVideoElementPlaying = !1;
  m_nPlaybackSpeed = 1;
  m_bIsWaiting = !0;
  m_bAutoPlay;
  m_bLoadedMetadata = !1;
  m_nPlaybackTime = 0;
  m_nVideoStartTime = 0;
  m_nVideoDuration = 0;
  m_nVolume = 1;
  m_eSeekType = _.Absolute;
  constructor(_) {
    _(this), (this.m_bAutoPlay = !!_);
  }
  IsPaused() {
    return this.m_bPaused;
  }
  IsAtEnd() {
    return this.m_bAtEnd;
  }
  BSeekReadyToPlay() {
    return this.m_bSeekReadyToPlay;
  }
  GetMediaTypeError() {
    return this.m_strMediaTypeError;
  }
  GetPlaybackError() {
    return this.m_ePlayerError;
  }
  GetUserInputNeeded() {
    return this.m_bUserInputNeeded;
  }
  GetPlaybackTime() {
    return this.m_eSeekType === _.Absolute
      ? this.m_nPlaybackTime
      : this.m_nPlaybackTime - this.m_nVideoStartTime;
  }
  GetTimelineDuration() {
    return this.m_eSeekType === _.Absolute
      ? this.m_nVideoDuration
      : this.m_nVideoDuration - this.m_nVideoStartTime;
  }
  GetVolume() {
    return this.m_nVolume;
  }
  GetMuted() {
    return this.m_bMuted;
  }
  GetMPDURL() {
    return this.m_player?.GetMPDURL();
  }
  GetVideoElementCurrentTime() {
    return this.m_elVideo?.currentTime;
  }
  BVideoElementPlaying() {
    return this.m_bVideoElementPlaying;
  }
  BVideoElementWaiting() {
    return this.m_bIsWaiting;
  }
  GetVideoHeight() {
    return this.m_elVideo?.clientHeight || 0;
  }
  GetVideoWidth() {
    return this.m_elVideo?.clientWidth || 0;
  }
  GetLoadedMetadata() {
    return this.m_bLoadedMetadata;
  }
  Start(_, _, _, _ = _.Absolute) {
    this.Stop(),
      (this.m_bAtEnd = !1),
      (this.m_elVideo = _),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-userpausechange`,
        this.OnUserPauseChange,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `playing`,
        this.OnVideoPlaying,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `pause`,
        this.OnVideoPause,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `timeupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `ended`,
        this.OnVideoEnd,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-ended`,
        this.OnVideoEnd,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-bufferupdate`,
        this.OnVideoTimeUpdate,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-downloadfailed`,
        this.OnDownloadFailed,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-playbackerror`,
        this.OnPlaybackError,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `valve-userinputneeded`,
        this.OnUserInputNeeded,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `waiting`,
        this.OnVideoWaiting,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `volumechange`,
        this.OnVolumeChange,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `canplay`,
        this.OnCanPlay,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `seeking`,
        this.OnSeeking,
      ),
      this.m_listeners.AddEventListener(
        this.m_elVideo,
        `loadedmetadata`,
        this.OnLoadedMetadata,
      ),
      (this.m_player = new _(this.m_elVideo)),
      this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
      this.m_player.PlayMPD(_),
      (this.m_bMuted = _(`muted`)),
      (this.m_nVolume = _(`volume`)),
      this.m_player.SetMuted(this.m_bMuted),
      this.m_player.SetVolume(this.m_nVolume),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_eSeekType = _);
    let _ = `seeking_${_}_${_.toFixed(3)}`;
    _(`CGameRecordingVideo:: perf mark ${_}`),
      performance.mark(_),
      this.m_player.Seek(_, this.m_eSeekType),
      (this.m_bPaused = this.m_player.IsPaused()),
      (this.m_bInitailized = !0);
  }
  Stop() {
    this.m_listeners.Unregister(),
      this.m_player && this.m_player.Close(),
      (this.m_elVideo = null),
      (this.m_player = null),
      (this.m_bInitailized = !1),
      (this.m_bPaused = !1),
      (this.m_bAtEnd = !1),
      (this.m_bSeekReadyToPlay = !1),
      (this.m_bVideoElementPlaying = !1),
      (this.m_ePlayerError = 0),
      (this.m_bUserInputNeeded = !1),
      (this.m_nPlaybackTime = 0),
      (this.m_nVideoStartTime = 0),
      (this.m_nVideoDuration = 0),
      (this.m_bLoadedMetadata = !1),
      (this.m_bIsWaiting = !0);
  }
  async UpdateMPD() {
    await this.m_player?.UpdateMPD();
  }
  IsInitialized() {
    return this.m_bInitailized;
  }
  OnCanPlay() {
    (this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1);
  }
  OnUserPauseChange() {
    this.m_bPaused = this.m_player.IsPaused();
  }
  OnVideoPlaying() {
    (this.m_bVideoElementPlaying = !0),
      (this.m_bIsWaiting = !1),
      this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
      _(`video playing`);
  }
  OnVideoPause() {
    (this.m_bVideoElementPlaying = !1), _(`video paused`);
  }
  OnVideoTimeUpdate() {
    (this.m_nVideoStartTime = this.m_player.GetAvailableVideoStartTime()),
      (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
      (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime());
  }
  OnVideoEnd() {
    (this.m_bVideoElementPlaying = !1), (this.m_bAtEnd = !0), _(`video ended`);
  }
  OnSeeking() {
    _(`video on seeking`),
      (this.m_bVideoElementPlaying = !1),
      (this.m_bIsWaiting = !0),
      (this.m_bAtEnd = !1);
  }
  OnLoadedMetadata() {
    this.m_bLoadedMetadata = !0;
  }
  async OnDownloadFailed(_) {
    (_.detail || _.PlaybackError) == _.UnsupportedMediaType
      ? (_(`media type error`), (this.m_ePlayerError = 3))
      : (_(`video download failed`, _.detail),
        this.m_nDownloadFailureCount < 2
          ? (await this.m_player?.UpdateMPD(), this.m_nDownloadFailureCount++)
          : (this.m_ePlayerError = 1));
  }
  OnPlaybackError() {
    (this.m_bVideoElementPlaying = !1),
      _(`video playback error`),
      (this.m_ePlayerError = 2);
  }
  OnUserInputNeeded() {
    (this.m_bUserInputNeeded = !0),
      !this.m_bMuted &&
        this.m_elVideo.autoplay &&
        (_(`Failed to autoplay video. Muting and trying again.`),
        this.SetMute(!0),
        this.Play());
  }
  OnVolumeChange() {
    _(`volume change`);
  }
  OnVideoWaiting() {
    (this.m_bIsWaiting = !0),
      (this.m_bVideoElementPlaying = !1),
      this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
        (this.m_bAtEnd = !0);
  }
  UserInputReceived() {
    this.IsInitialized() &&
      ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
  }
  SetVolume(_) {
    (this.m_nVolume = _),
      _(`volume`, _),
      _ > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
      this.IsInitialized() && this.m_player.SetVolume(_);
  }
  SetMute(_, _) {
    this.IsInitialized() && this.m_player.SetMuted(_),
      (this.m_bMuted = _),
      _ && _(`muted`, _);
  }
  TogglePlayPause() {
    this.IsInitialized() &&
      (this.m_player.IsPaused() ? this.Play() : this.Pause());
  }
  Play() {
    this.IsInitialized() && this.m_player.Play();
  }
  Pause() {
    this.IsInitialized() && (this.m_player.Pause(), (this.m_bIsWaiting = !1));
  }
  SetPlaybackSpeed(_) {
    (this.m_nPlaybackSpeed = _),
      this.IsInitialized() && (this.m_elVideo.playbackRate = _);
  }
  GetPlaybackSpeed() {
    return this.m_nPlaybackSpeed;
  }
  Seek(_) {
    if (!this.IsInitialized()) return;
    let _ = `seeking_${this.m_player.GetMPDURL()}_${_.toFixed(3)}`;
    (this.m_bAtEnd = !1),
      (this.m_bSeekReadyToPlay = !1),
      performance.mark(_),
      _(`CGameRecordingVideo:: perf mark ${_}`),
      _(`CGameRecordingVideo::Seek to ${_}`),
      (this.m_nPlaybackTime = _),
      this.m_player.Seek(_, this.m_eSeekType);
  }
};
_([_], _.prototype, `m_bInitailized`, void 0),
  _([_], _.prototype, `m_bPaused`, void 0),
  _([_], _.prototype, `m_bAtEnd`, void 0),
  _([_], _.prototype, `m_strMediaTypeError`, void 0),
  _([_], _.prototype, `m_ePlayerError`, void 0),
  _([_], _.prototype, `m_bUserInputNeeded`, void 0),
  _([_], _.prototype, `m_bMuted`, void 0),
  _([_], _.prototype, `m_bSeekReadyToPlay`, void 0),
  _([_], _.prototype, `m_bVideoElementPlaying`, void 0),
  _([_], _.prototype, `m_nPlaybackSpeed`, void 0),
  _([_], _.prototype, `m_bIsWaiting`, void 0),
  _([_], _.prototype, `m_bLoadedMetadata`, void 0),
  _([_], _.prototype, `m_nPlaybackTime`, void 0),
  _([_], _.prototype, `m_nVideoStartTime`, void 0),
  _([_], _.prototype, `m_nVideoDuration`, void 0),
  _([_], _.prototype, `m_nVolume`, void 0),
  _([_], _.prototype, `m_eSeekType`, void 0),
  _([_], _.prototype, `Start`, null),
  _([_], _.prototype, `Stop`, null),
  _([_], _.prototype, `OnCanPlay`, null),
  _([_], _.prototype, `OnUserPauseChange`, null),
  _([_], _.prototype, `OnVideoPlaying`, null),
  _([_], _.prototype, `OnVideoPause`, null),
  _([_], _.prototype, `OnVideoTimeUpdate`, null),
  _([_], _.prototype, `OnVideoEnd`, null),
  _([_], _.prototype, `OnSeeking`, null),
  _([_], _.prototype, `OnLoadedMetadata`, null),
  _([_], _.prototype, `OnDownloadFailed`, null),
  _([_], _.prototype, `OnPlaybackError`, null),
  _([_], _.prototype, `OnUserInputNeeded`, null),
  _([_], _.prototype, `OnVolumeChange`, null),
  _([_], _.prototype, `OnVideoWaiting`, null),
  _([_], _.prototype, `UserInputReceived`, null);
var _;
function _() {
  if (!_) {
    let _ = window.localStorage.getItem(`gameRecordingPlayer`) || `{}`,
      _;
    try {
      _ = JSON.parse(_);
    } catch {
      _ = {};
    }
    _ = {
      muted: _.muted || !1,
      volume: _.volume || 1,
    };
  }
  return _;
}
function _(_) {
  return _()[_];
}
function _(_, _) {
  let _ = _();
  _[_] = _;
  let _ = JSON.stringify(_);
  window.localStorage.setItem(`gameRecordingPlayer`, _);
}
var _ = (function (_) {
  return (
    (_.NotRunning = `NotRunning`),
    (_.NotRecording = `NotRecording`),
    (_.ManualRecording = `ManualRecording`),
    (_.BackgroundRecording = `BackgroundRecording`),
    _
  );
})({});
function _(_) {
  let { app: _ } = _(_);
  if (!_) return `NotRecording`;
  switch (_.recording_type) {
    default:
    case 0:
    case 1:
      return `NotRecording`;
    case 2:
      return `ManualRecording`;
    case 3:
      return `BackgroundRecording`;
  }
}
var _ = _(),
  _ = (function (_) {
    return (
      (_.Overlay = `Overlay`),
      (_.Clips = `Clips`),
      (_.Background = `Background`),
      (_.CommunityClip = `Community`),
      (_.ChatClip = `Chat`),
      (_.Partner = `Partner`),
      _
    );
  })({}),
  _ = 3 * _,
  _ = 5 * _,
  _ = _ + 2e3,
  _ = 1e3,
  _ = class {
    m_gameRecordingVideo = null;
    m_timelineLoader = null;
    m_fnUnregisterLoader = null;
    m_rgListeners = [];
    m_videoRef;
    m_bHidePlayer = !1;
    m_fnGetManifest;
    m_strRecordingID = null;
    m_nPendingSeekSec = -1;
    m_playbackDefinition = null;
    m_pendingStop = null;
    m_durationMS = _(null);
    m_lastRecordingGlobalMS = _(null);
    m_bWasLiveEdge = !1;
    m_nGlobalTimelinePlaybackMS = null;
    m_nGlobalTimelinePlaybackSec = null;
    m_fnUnregisterAutorun = [];
    m_eGameRecordingMode;
    m_rgSeekPerf = [];
    m_eRecordingState = _.NotRecording;
    m_eRecordingSetting = `Never`;
    m_bGamepadMode = !1;
    m_bControlsVisible = !0;
    m_fnRenderGlyph = void 0;
    m_previousHighlightEntry = null;
    m_nextHighlightEntry = null;
    m_displayHighlightEntry = null;
    m_nRelativeTimeForDisplay = void 0;
    m_rgClipOffsets = [];
    m_phasePreview = void 0;
    constructor(_, _, _, _, _, _, _, _) {
      _(this),
        (this.m_fnGetManifest = _),
        (this.m_gameRecordingVideo = new _(!0)),
        (this.m_eGameRecordingMode = _),
        (this.m_bGamepadMode = _),
        (this.m_playbackDefinition = _),
        _ != null && (this.m_bControlsVisible = _),
        _ === `Overlay` && (this.m_bHidePlayer = !0),
        _ && this.SetClipOffsets(_),
        (this.m_fnRenderGlyph = _),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
              bIsPaused: this.m_gameRecordingVideo.IsPaused(),
            }),
            (_) => {
              _.bIsAtEnd && !_.bIsPaused && this.PlayNextTimelineRecording();
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => this.m_gameRecordingVideo.GetPlaybackTime(),
            (_) => {
              if (
                this.m_pendingStop &&
                this.m_pendingStop.m_strRecordingID == this.m_strRecordingID &&
                this.m_pendingStop.m_nOffsetMS <= _ * 1e3
              ) {
                if (this.m_playbackDefinition?.m_nLoopDurationMS) {
                  this.StartPlaybackForRange();
                  return;
                }
                this.m_gameRecordingVideo.Pause(), (this.m_pendingStop = null);
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              playback: this.m_gameRecordingVideo.GetPlaybackTime(),
              bVideoPlaying: this.m_gameRecordingVideo.BVideoElementPlaying(),
            }),
            (_) => {
              if (_.bVideoPlaying) {
                let _ =
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    this.m_strRecordingID,
                    _.playback * 1e3,
                    0,
                  );
                if (_)
                  this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
                    _.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                      this.m_eGameRecordingMode === `Overlay` &&
                      this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                      (console.log(
                        ` hitting live edge, slow down the playback `,
                      ),
                      this.m_gameRecordingVideo.SetPlaybackSpeed(1));
                else {
                  let _ = this.GetLiveEdgeMS();
                  isNaN(_.valMS) ||
                    (this.SetPlaytimeFromGlobalMS(_), this.FocusGlobalMS(_));
                }
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => ({
              globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
              bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
              bHidePlayer: this.m_bHidePlayer,
            }),
            (_) => {
              this.m_timelineLoader?.BInitialized() &&
                (_.bHidePlayer
                  ? this.SetEntriesForLiveEdge()
                  : (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        _.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (_.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS +
                            1e3)) &&
                    (this.CalculatePreviousHighlightEntry(
                      _.globalPlaybackMS,
                      _.bVideoPaused,
                    ),
                    this.CalculateNextHighlightEntry(
                      _.globalPlaybackMS,
                      _.bVideoPaused,
                    )));
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.m_fnUnregisterAutorun.push(
          _(
            () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
            (_) => {
              if (_) {
                let _ = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                try {
                  let _ = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                    _ = performance.measure(_, _);
                  _(
                    `CGameRecordingVideo:: perf measure ${_} duration ${_.duration}`,
                  ),
                    _ && this.m_rgSeekPerf.push(_.duration);
                } catch (_) {
                  _(`CGameRecordingVideo:: cant measure ${_}, error: ${_}`);
                }
              }
            },
            {
              fireImmediately: !0,
            },
          ),
        ),
        this.SetLoader(_);
    }
    AddEventListener(_) {
      return this.m_rgListeners.push(_), () => _(this.m_rgListeners, _);
    }
    FireEvent(_, ..._) {
      for (let _ of this.m_rgListeners) {
        let _ = _[_];
        _ instanceof Function && _.apply(_, _);
      }
    }
    dispose() {
      this.m_fnUnregisterAutorun.forEach((_) => _()),
        (this.m_fnUnregisterLoader &&= (this.m_fnUnregisterLoader(), null));
    }
    SetVideoElement(_) {
      if (_) {
        if (this.m_videoRef === _) return;
        if (((this.m_videoRef = _), this.m_strRecordingID)) {
          let _ = this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
          (this.m_nPendingSeekSec = -1),
            this.ChangePlaybackRecording(this.m_strRecordingID, _);
        } else this.TryPlayInitialTimelineVideo();
      } else this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null);
    }
    OnInvalidateRecording(_, _) {
      let _ = this.m_fnGetManifest(_);
      this.m_gameRecordingVideo.GetMPDURL() == _ &&
        (_(`Recording invalidated for ${_}. Reloading MPD`),
        this.m_gameRecordingVideo.UpdateMPD());
    }
    OnLoaderInitialized() {
      (this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        (this.m_bWasLiveEdge = !0),
        this.TryPlayInitialTimelineVideo();
      let _ = _(this.m_timelineLoader.GetGameID());
      this.SetClipOffsets(_);
    }
    OnInvalidate(_) {
      if (
        ((this.m_durationMS = this.m_timelineLoader.GetGlobalTimelineEndMS()),
        (this.m_lastRecordingGlobalMS =
          this.m_timelineLoader.GetEndOfRecordingsMS()),
        this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(_))
      )
        this.SetEntriesForLiveEdge();
      else {
        if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
          let _ = this.m_timelineLoader.GetTimelineMetadataIndex(_),
            _ = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_previousHighlightEntry.timelineID,
            ),
            _ = this.m_timelineLoader.GetTimelineMetadataIndex(
              this.m_nextHighlightEntry.timelineID,
            );
          if (_ < _ || _ > _) return;
        }
        this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          );
      }
    }
    OnTimelineLoaded(_) {
      this.m_previousHighlightEntry &&
        this.m_previousHighlightEntry.timelineID === _ &&
        this.CalculatePreviousHighlightEntry(
          this.m_nGlobalTimelinePlaybackMS,
          this.GetGameRecordingVideo().IsPaused(),
        ),
        this.m_nextHighlightEntry &&
          this.m_nextHighlightEntry.timelineID === _ &&
          this.CalculateNextHighlightEntry(
            this.m_nGlobalTimelinePlaybackMS,
            this.GetGameRecordingVideo().IsPaused(),
          );
    }
    SetEntriesForLiveEdge() {
      let _ = this.GetLiveEdgeMS();
      this.CalculatePreviousHighlightEntry(_.valMS, !0),
        (this.m_nextHighlightEntry = null);
    }
    CalculatePreviousHighlightEntry(_, _) {
      let _ = _ ? 1 : _ * this.m_gameRecordingVideo.GetPlaybackSpeed(),
        _ = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
          _ - _,
        );
      this.m_previousHighlightEntry =
        _.timelineState === `loaded` && !_.entry
          ? this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(_)
          : _;
    }
    CalculateNextHighlightEntry(_, _) {
      let _ = this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(_);
      if (_.timelineState === `loaded` && !_.entry) {
        let _ = _ ? 1 : _ * this.m_gameRecordingVideo.GetPlaybackSpeed();
        this.m_nextHighlightEntry =
          this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(_ - _);
      } else this.m_nextHighlightEntry = _;
    }
    GetPreviousHighlightEntry() {
      return this.m_previousHighlightEntry;
    }
    GetNextHighlightEntry() {
      return this.m_nextHighlightEntry;
    }
    GetDisplayHighlightEntry() {
      return this.m_displayHighlightEntry;
    }
    SetDisplayHighlightEntry(_, _) {
      this.m_displayHighlightEntry = {
        entry: _,
        duration: _,
      };
    }
    GetPhasePreview() {
      return this.m_phasePreview;
    }
    SetPhasePreview(_) {
      this.m_phasePreview = _;
    }
    GetRelativeTimeForDisplay() {
      return this.m_nRelativeTimeForDisplay;
    }
    ClearRelativeTimeDisplay() {
      this.m_nRelativeTimeForDisplay = void 0;
    }
    GetClipOffsets() {
      return this.m_rgClipOffsets;
    }
    SetClipOffsets(_) {
      if (!this.m_timelineLoader?.BInitialized()) return;
      let _ = [];
      _ &&
        _.length &&
        _.forEach((_) => {
          let _ = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
            _.start_timeline_id,
            0,
          );
          if (!_) return;
          let _ = _.nGlobalOffsetMS + parseInt(_.start_offset_ms);
          _.push({
            strClipID: _.clip_id,
            nGlobalOffsetMS: _,
            nDurationMS: parseInt(_.duration_ms),
          });
        }),
        (this.m_rgClipOffsets = _);
    }
    GetTotalMS() {
      return this.m_durationMS;
    }
    GetIsActiveTimeline(_) {
      return this.m_timelineLoader.IsActiveTimeline(_);
    }
    BIsVideoElementPaused() {
      return this.m_gameRecordingVideo.IsPaused();
    }
    BInitialized() {
      return this.m_timelineLoader.BInitialized();
    }
    GetHidePlayer() {
      return this.m_bHidePlayer;
    }
    SetHidePlayer(_) {
      _ && (this.m_strRecordingID = null), (this.m_bHidePlayer = _);
    }
    BPlayerInitialized() {
      return this.m_gameRecordingVideo.IsInitialized();
    }
    GetGameRecordingVideo() {
      return this.m_gameRecordingVideo;
    }
    GetGameID() {
      return this.m_timelineLoader.GetGameID();
    }
    GetClipID() {
      return this.m_timelineLoader.GetClipID();
    }
    GetRecordingState() {
      return this.m_eRecordingState;
    }
    SetRecordingState(_) {
      this.m_eRecordingState = _;
    }
    GetLoader() {
      return this.m_timelineLoader;
    }
    SetLoader(_) {
      this.m_timelineLoader != _ &&
        (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
        (this.m_timelineLoader = _),
        (this.m_fnUnregisterLoader =
          this.m_timelineLoader.AddEventListener(this)),
        _.BInitialized() && this.OnLoaderInitialized());
    }
    SetGetManifest(_) {
      this.m_fnGetManifest = _;
    }
    GetRecordingID() {
      return this.m_strRecordingID;
    }
    GetRecordingSetting() {
      return this.m_eRecordingSetting;
    }
    SetRecordingSetting(_) {
      this.m_eRecordingSetting = _;
    }
    GetRecordingMode() {
      return this.m_eGameRecordingMode;
    }
    ShouldModeShowClipControls() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    CanModeAddMarker() {
      switch (this.m_eGameRecordingMode) {
        case `Overlay`:
        case `Clips`:
        case `Background`:
          return !0;
        default:
          return !1;
      }
    }
    GetPlaybackStats() {
      if (!this.m_rgSeekPerf.length) return null;
      let _ = this.m_rgSeekPerf.length,
        _ = this.m_rgSeekPerf.reduce((_, _) => _ + _) / _;
      return {
        nMean: _,
        nStdDev: Math.sqrt(
          this.m_rgSeekPerf.map((_) => (_ - _) ** 2).reduce((_, _) => _ + _) /
            _,
        ),
        nMax: Math.max(...this.m_rgSeekPerf),
        nMin: Math.min(...this.m_rgSeekPerf),
        nLength: _,
        nLastVal: this.m_rgSeekPerf[_ - 1],
      };
    }
    async StartPlaybackForRange() {
      let _ =
        this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
          this.m_playbackDefinition.m_strTimelineID,
          0,
        )?.nGlobalOffsetMS || 0;
      _ += this.m_playbackDefinition.m_nTimelineStartMS;
      let _;
      if (
        ((_ = this.m_playbackDefinition.m_strEntryID
          ? await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
              this.m_playbackDefinition.m_strEntryID,
            )
          : this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              _,
            )),
        _)
      ) {
        if (this.m_playbackDefinition.m_nLoopDurationMS) {
          let _ = _ + this.m_playbackDefinition.m_nLoopDurationMS,
            _ =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                _,
              );
          this.m_pendingStop = {
            m_strRecordingID: _.strRecordingID,
            m_nOffsetMS: _.nRecordingOffsetMS,
          };
        }
        this.UpdateGlobalPlayTime(_),
          this.ChangePlaybackRecording(
            _.strRecordingID,
            _.nRecordingOffsetMS / 1e3,
          );
      }
    }
    TryPlayInitialTimelineVideo() {
      if (this.m_timelineLoader.BInitialized() && !this.m_bHidePlayer) {
        if (this.m_playbackDefinition) this.StartPlaybackForRange();
        else if (this.m_eGameRecordingMode === `Overlay`) {
          let _ = this.GetLiveEdgeMS(),
            _ = this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
            _ = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _,
              0,
              0,
            );
          _ && _.valMS < _.nGlobalOffsetMS
            ? (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
              this.ChangePlaybackRecording(_, 0))
            : isNaN(_.valMS) || this.SetPlaytimeFromGlobalMS(_, !1, !0);
        } else if (this.m_eGameRecordingMode === `Background`) {
          let _ =
            this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
          this.SetPlaytimeFromRecordingOffset(_, 0);
        } else {
          let _ = this.m_timelineLoader.GetFirstRecording();
          this.SetPlaytimeFromRecordingOffset(_, 0);
        }
      }
    }
    GetTotalSeconds() {
      return Math.floor(
        this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
      );
    }
    GetCurrentPlaybackGlobalMS(_ = 0) {
      let _ = Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + _;
      return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        this.m_strRecordingID,
        _,
        0,
      );
    }
    GetIsLiveEdge() {
      let _ = this.GetGlobalMSPlaytime().valMS || 0;
      return this.m_eGameRecordingMode === `Overlay`
        ? this.m_lastRecordingGlobalMS
          ? this.m_bWasLiveEdge
          : !1
        : this.GetTotalMS().valMS - _ < 1;
    }
    GetLiveEdgeBufferWindowStartMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? _(Math.max(0, this.m_lastRecordingGlobalMS.valMS - _ - 1e3))
        : this.GetTotalMS();
    }
    GetLiveEdgeMS() {
      return this.m_eGameRecordingMode === `Overlay` &&
        this.m_lastRecordingGlobalMS
        ? _(Math.max(0, this.m_lastRecordingGlobalMS.valMS - _))
        : _(Math.max(0, this.GetTotalMS().valMS - 1));
    }
    GetTimelineAndOffsetRelativeToCurrentPlayback(_ = 0) {
      return (
        this.GetCurrentPlaybackGlobalMS(_) ||
        (_(
          `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
        ),
        null)
      );
    }
    SeekDeltaMS(_) {
      let _ = this.GetGlobalMSPlaytime();
      if (!this.m_strRecordingID) {
        let _ =
          _ > 0
            ? this.GetClosestNextRecordingForGlobalMS(_)
            : this.GetClosestPreviousRecordingForGlobalMS(_);
        if (_) {
          let _ = _ > 0 ? _ : Math.max(parseInt(_.duration_ms) + _, 0);
          this.SetPlaytimeFromRecordingOffset(_.recording_id, _, _ < 0);
          return;
        }
      }
      let _ =
          this.m_eGameRecordingMode === `Overlay`
            ? this.GetLiveEdgeMS().valMS
            : this.GetTotalMS().valMS,
        _ = _(_.valMS + _, 0, _ - 1e3);
      this.SetPlaytimeFromGlobalMS(_(_));
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
      return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
        _,
      );
    }
    PlayNextTimelineRecording(_) {
      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
        this.StartPlaybackForRange();
        return;
      }
      let _;
      (_ = this.m_strRecordingID
        ? this.m_timelineLoader.GetNextRecording(this.m_strRecordingID)
        : this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
            _(this.m_nGlobalTimelinePlaybackMS),
          )?.recording_id),
        _
          ? this.SetPlaytimeFromRecordingOffset(_, 0)
          : (this.m_gameRecordingVideo.Pause(),
            _ && this.TryPlayInitialTimelineVideo());
    }
    GetClipsAtGlobalMS(_) {
      return (
        this.m_rgClipOffsets.filter(
          (_) =>
            _.nGlobalOffsetMS <= _.valMS &&
            _.nGlobalOffsetMS + _.nDurationMS >= _.valMS,
        ) || []
      );
    }
    GetClosestPreviousRecordingForGlobalMS(_) {
      return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
        _,
      );
    }
    GetClosestNextRecordingForGlobalMS(_) {
      return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(_);
    }
    SetPlaytimeFromRecordingOffset(_, _, _, _) {
      let _ = _;
      _ &&
        (_ = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(_, _));
      let _ = this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
        _,
        _,
        0,
      );
      _ &&
        (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
        this.ChangePlaybackRecording(_, _ / 1e3, _));
    }
    GetManifestFromRecordingID(_) {
      return this.m_fnGetManifest(_);
    }
    ChangePlaybackRecording(_, _ = 0, _) {
      this.m_bHidePlayer = !1;
      let _ = this.m_gameRecordingVideo.IsPaused();
      if (
        this.m_strRecordingID === _ &&
        this.m_gameRecordingVideo.IsInitialized()
      ) {
        this.m_gameRecordingVideo.Seek(_);
        return;
      }
      if ((this.m_gameRecordingVideo.Stop(), (this.m_strRecordingID = _), !_))
        return;
      if (!this.m_videoRef) {
        this.m_nPendingSeekSec = _;
        return;
      }
      let _ = this.GetManifestFromRecordingID(_),
        _ = this.m_timelineLoader.BRecordingHasZeroOffset(_)
          ? _.Absolute
          : _.FromAvailableStart;
      this.m_gameRecordingVideo.Start(this.m_videoRef, _, _, _),
        (_ || _) && this.m_gameRecordingVideo.Pause();
    }
    StopPlayback() {
      this.m_gameRecordingVideo.Stop();
    }
    TogglePlayPause() {
      this.m_gameRecordingVideo.IsPaused() ||
      !this.m_gameRecordingVideo.IsInitialized()
        ? (this.m_nGlobalTimelinePlaybackMS >
            (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
            this.TryPlayInitialTimelineVideo(),
          this.m_gameRecordingVideo.GetTimelineDuration() -
            this.m_gameRecordingVideo.GetPlaybackTime() <
          0.05
            ? this.PlayNextTimelineRecording(!0)
            : this.m_gameRecordingVideo.Play())
        : this.m_gameRecordingVideo.Pause();
    }
    GetGlobalMSPlaytime() {
      return _(this.m_nGlobalTimelinePlaybackMS);
    }
    GetGlobalPlaytimeSec() {
      return this.m_nGlobalTimelinePlaybackSec;
    }
    UpdateGlobalPlayTime(_) {
      if (
        ((this.m_nGlobalTimelinePlaybackMS = _),
        (this.m_nGlobalTimelinePlaybackSec = Math.floor(_ / 1e3)),
        this.m_lastRecordingGlobalMS &&
          this.m_lastRecordingGlobalMS.valMS !== null)
      ) {
        let _ = this.m_bWasLiveEdge ? _ : _;
        this.m_bWasLiveEdge =
          this.m_lastRecordingGlobalMS.valMS -
            (this.GetGlobalMSPlaytime()?.valMS || 0) <
          _;
      }
    }
    HandleSeekToPreviousRecording(_, _, _) {
      let _ = this.GetClosestPreviousRecordingForGlobalMS(_);
      if (_) {
        let _ = parseInt(_.duration_ms),
          _ = Math.max(_ - 5e3, _ * 0.75);
        _ || (this.m_nRelativeTimeForDisplay = _ / 1e3),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _.recording_id,
              _,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(_?.recording_id, _ / 1e3, _);
      } else
        _ || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(0),
          this.ChangePlaybackRecording(this.m_strRecordingID, 0, _);
    }
    HandleSeekToNextRecording(_, _, _) {
      let _ = this.GetClosestNextRecordingForGlobalMS(_);
      _
        ? (_ || (this.m_nRelativeTimeForDisplay = 0),
          this.UpdateGlobalPlayTime(
            this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              _.recording_id,
              0,
              0,
            ).nGlobalOffsetMS,
          ),
          this.ChangePlaybackRecording(_?.recording_id, 0, _))
        : (_ || (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
          this.ChangePlaybackRecording(
            this.m_strRecordingID,
            this.GetTotalMS().valMS / 1e3,
            _,
          ));
    }
    SetPlaytimeFromGlobalMS(_, _, _, _) {
      this.m_pendingStop = null;
      let _ =
        this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
          _.valMS,
        );
      _
        ? (_ || (this.m_nRelativeTimeForDisplay = _.valMS),
          this.UpdateGlobalPlayTime(_.valMS),
          this.ChangePlaybackRecording(
            _?.strRecordingID,
            _?.nRecordingOffsetMS / 1e3,
            _,
          ))
        : _
          ? this.ChangePlaybackRecording(
              _?.strRecordingID,
              _?.nRecordingOffsetMS / 1e3,
              _,
            )
          : _.valMS > this.m_nGlobalTimelinePlaybackMS
            ? this.HandleSeekToNextRecording(_, _, _)
            : this.HandleSeekToPreviousRecording(_, _, _);
    }
    ConvertGlobalOffsetToTimelineRelativeOffset(_) {
      return this.m_timelineLoader.GetTimelineOffsetFromGlobal(_, 0);
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(_, _);
    }
    GetTimelineDuration(_) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let _ = this.m_timelineLoader.GetTimelineMetadata(_);
      return _ ? parseInt(_.metadata.duration_ms) : null;
    }
    GetTimelineFirstRecordingOffset(_) {
      if (!this.m_timelineLoader.BInitialized()) return null;
      let _ = this.m_timelineLoader.GetTimelineMetadata(_);
      if (!_) return null;
      let _ = _.metadata.recordings;
      return _.length ? parseInt(_[0].start_offset_ms) : null;
    }
    async AddUserMarkerAtGlobalMS(_, _, _) {
      let _ = this.m_timelineLoader.GetTimelineOffsetFromGlobal(_.valMS, 0);
      if (_) {
        let _ = this.m_timelineLoader.GetGameID(),
          { fnCreateUserTimelineMarkers: _ } = _(),
          _ = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
            _.strTimelineID,
          );
        _.ReportTrackedAction(_);
        let _ = `steam_marker`,
          _ = await _(_, this.GetClipID(), {
            timeline_id: _.strTimelineID,
            entry_id: ``,
            time: `` + Math.floor(_.nTimelineOffsetMS.valMS + _),
            type: 5,
            marker_icon: _,
            marker_priority: 0,
          });
        _.eResult == 1 &&
          (this.m_timelineLoader.AddUserMarker(
            _.strTimelineID,
            Math.floor(_.nTimelineOffsetMS.valMS),
            _,
            _.entry_id,
          ),
          _ && _(_.entry_id, _.strTimelineID));
      }
    }
    async RemoveUserMarker(_, _) {
      let { fnRemoveUserTimelineMarker: _ } = _();
      return (await _(
        this.m_timelineLoader.GetGameID(),
        this.GetClipID(),
        _,
        _,
      )) == 1
        ? (this.m_timelineLoader.RemoveUserMarker(_, _), !0)
        : (_(`Failed to delete user marker for timeline ${_} entry ${_}`), !1);
    }
    async UpdateUserMarker(_, _, _, _) {
      let { fnUpdateUserTimelineMarkers: _ } = _(),
        _ = this.m_timelineLoader.GetGameID(),
        _ = {
          timeline_id: _,
          entry_id: _._,
          time: _.time,
          type: 5,
          marker_icon: _.icon,
          marker_priority: _.priority,
          range_title: _,
          marker_description: _,
        };
      if ((await _(_, this.GetClipID(), _)) == 1) {
        let _ = {
          strIcon: _.icon,
          name: _,
          description: _,
          nTimelineOffsetMS: parseInt(_.time),
        };
        return this.m_timelineLoader.UpdateUserMarker(_, _._, _), !0;
      }
      return !1;
    }
    FocusGlobalMS(_) {
      this.FireEvent(`OnFocusGlobalMS`, _);
    }
    SetPlaybackStop(_) {
      let _ = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.valMS);
      _ &&
        (this.m_pendingStop = {
          m_strRecordingID: _.strRecordingID,
          m_nOffsetMS: _.nRecordingOffsetMS,
        });
    }
    ClearPlaybackStop() {
      this.m_pendingStop = null;
    }
    GenerateClipNameFromTimeline(_, _, _, _) {
      return this.m_timelineLoader.GenerateClipNameFromTimeline(_, _, _, _);
    }
    GetRenderGlyph() {
      if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
    }
    SetRenderGlyph(_) {
      this.m_fnRenderGlyph = _;
    }
    GetGamepadMode() {
      return this.m_bGamepadMode;
    }
    SetGamepadMode(_) {
      this.m_bGamepadMode = _;
    }
    GetControlsVisible() {
      return this.m_bControlsVisible;
    }
    SetControlsVisible(_) {
      _ != null && (this.m_bControlsVisible = _);
    }
  };
_([_], _.prototype, `m_bHidePlayer`, void 0),
  _([_], _.prototype, `m_strRecordingID`, void 0),
  _([_], _.prototype, `m_durationMS`, void 0),
  _([_], _.prototype, `m_lastRecordingGlobalMS`, void 0),
  _([_], _.prototype, `m_nGlobalTimelinePlaybackMS`, void 0),
  _([_], _.prototype, `m_nGlobalTimelinePlaybackSec`, void 0),
  _([_], _.prototype, `m_rgSeekPerf`, void 0),
  _([_], _.prototype, `m_eRecordingState`, void 0),
  _([_], _.prototype, `m_eRecordingSetting`, void 0),
  _([_], _.prototype, `m_bGamepadMode`, void 0),
  _([_], _.prototype, `m_bControlsVisible`, void 0),
  _([_], _.prototype, `m_fnRenderGlyph`, void 0),
  _([_], _.prototype, `m_previousHighlightEntry`, void 0),
  _([_], _.prototype, `m_nextHighlightEntry`, void 0),
  _([_], _.prototype, `m_displayHighlightEntry`, void 0),
  _([_], _.prototype, `m_nRelativeTimeForDisplay`, void 0),
  _([_.ref], _.prototype, `m_rgClipOffsets`, void 0),
  _([_.ref], _.prototype, `m_phasePreview`, void 0),
  _([_], _.prototype, `SetVideoElement`, null),
  _([_], _.prototype, `OnInvalidateRecording`, null),
  _([_], _.prototype, `OnLoaderInitialized`, null),
  _([_], _.prototype, `OnInvalidate`, null),
  _([_], _.prototype, `OnTimelineLoaded`, null),
  _([_], _.prototype, `GetLiveEdgeMS`, null),
  _([_], _.prototype, `StopPlayback`, null),
  _([_], _.prototype, `TogglePlayPause`, null),
  _([_], _.prototype, `UpdateGlobalPlayTime`, null);
var _ = _.createContext({
  timelinePlaybackCoordinator: null,
});
function _(_) {
  let {
      children: _,
      mode: _,
      fnGetManifest: _,
      loader: _,
      recordingState: _,
      controlsVisible: _,
      gamepadMode: _,
      renderGlyph: _,
      recordingSetting: _,
      playbackDefinition: _,
      clipSummaries: _,
    } = _,
    [_] = _.useState(() => new _(_, _, _, _, _, _, _, _));
  (0, _.useEffect)(() => {
    _.SetLoader(_);
  }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRecordingState(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRecordingSetting(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetGetManifest(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetControlsVisible(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetGamepadMode(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetRenderGlyph(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _.SetClipOffsets(_);
    }, [_, _]),
    (0, _.useEffect)(() => () => _.dispose(), [_]);
  let _ = _.useMemo(
    () => ({
      timelinePlaybackCoordinator: _,
    }),
    [_],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_).timelinePlaybackCoordinator;
}
function _() {
  let _ = _();
  return [_(() => _?.GetPhasePreview() || null), (_) => _?.SetPhasePreview(_)];
}
var _ = `-z6QUhW0BuI-`,
  _ = `EQ4TcbQ23mE-`,
  _ = `_1SMhCEq4AkI-`,
  _ = `kkFDcE4F2W8-`,
  _ = `YscTTqT4K6I-`,
  _ = `T4Y0jki8FF0-`;
function _(_) {
  let {
    entry: _,
    strMarkerIcon: _,
    onClick: _,
    onMouseEnter: _,
    onMouseLeave: _,
    onContextMenu: _,
    classNames: _,
    style: _,
    faded: _,
    bSelectedMarker: _,
  } = _;
  return (0, _.jsx)(`div`, {
    style: _ ?? {},
    className: _(_, {
      [_]: !0,
      [_]: _,
      [_]: _,
    }),
    onClick: (_) => {
      _ && _(_);
    },
    onContextMenu: _,
    onMouseEnter: _,
    onMouseLeave: _,
    children: (0, _.jsx)(_, {
      entry: _,
      strMarkerIcon: _,
    }),
  });
}
function _(_) {
  let { entry: _, strMarkerIcon: _ } = _,
    _ = _().GetGameID();
  return _(_)
    ? (0, _.jsx)(_, {
        achievementEntry: _,
        strGameID: _,
      })
    : _(_)
      ? (0, _.jsx)(_, {})
      : _(_)
        ? (0, _.jsx)(_, {
            entry: _,
            strMarkerIcon: _,
          })
        : (0, _.jsx)(_, {
            strMarkerIcon: _,
            strGameID: _,
          });
}
function _(_) {
  let { achievementEntry: _, strGameID: _ } = _,
    _ = _(new _(_).GetAppID(), _.achievement_name),
    _,
    _;
  if (_)
    (_ = `white`),
      (_ = (0, _.jsx)(`img`, {
        src: _.iconURL,
      }));
  else {
    let _ = _();
    (_ = _(_.color)), (_ = _.func({}));
  }
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      color: _,
    },
    children: _,
  });
}
function _(_) {
  let { entry: _, strMarkerIcon: _ } = _,
    _,
    _;
  _(_) ? ((_ = _()), (_ = _)) : (_ = _(_));
  let _ = _(_.color);
  return (0, _.jsx)(_, {
    color: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.func({}),
    }),
  });
}
function _(_) {
  let { icon: _, className: _ } = _;
  return _(_).func({
    className: _,
  });
}
function _(_) {
  let _ = _(`steam_invalid`),
    _ = _(_.color);
  return (0, _.jsx)(_, {
    color: _,
    children: (0, _.jsx)(`div`, {
      children: _.func({}),
    }),
  });
}
function _(_) {
  let { strMarkerIcon: _, strGameID: _ } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      icon: _,
      gameID: _,
    }),
  });
}
function _(_) {
  let { icon: _, gameID: _, className: _ } = _,
    _ = _(new _(_).GetAppID(), _);
  if (_(_))
    return (0, _.jsx)(_, {
      ..._,
    });
  if (_ === null) return null;
  if (_ === void 0) {
    let _ = _();
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.func({}),
    });
  }
  let _ = ``;
  return (
    (_ = typeof _ == `string` ? _ : new XMLSerializer().serializeToString(_)),
    (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      className: _(_, _),
      children: (0, _.jsx)(`g`, {
        dangerouslySetInnerHTML: {
          __html: _,
        },
      }),
    })
  );
}
function _(_) {
  let { children: _, color: _ } = _;
  return (0, _.jsx)(`div`, {
    className: void 0,
    children: (0, _.jsx)(`div`, {
      className: _,
      style: _
        ? {
            color: _,
          }
        : null,
      children: _,
    }),
  });
}
var _ = `bDOiLLvSs2Y-`,
  _ = `kcQuGr4J3rc-`,
  _ = `j-2U-sbnQJU-`,
  _ = `_6l4s8j-Bcq8-`,
  _ = `_8YeucRtc8oU-`,
  _ = `ZAjnqtDcso0-`,
  _ = `vhGz8D5Y1Bk-`,
  _ = `OMn6m4jRit8-`,
  _ = `H-FSa2NK0ko-`,
  _ = `EkzDm2rgmn4-`,
  _ = `_7rO2L4URLVo-`,
  _ = `UMVMer37ORc-`,
  _ = `cyiE161LN-s-`,
  _ = `Vert6EPn2bo-`,
  _ = `-BKlW5DP2XE-`,
  _ = `wvlXf51vGb4-`,
  _ = `S7iF3xbHMfk-`,
  _ = `SPq-vUvAUJ0-`,
  _ = `p3cd5ToZ5HI-`,
  _ = {
    nBeforeMS: 0,
    nAfterMS: 12e3,
  },
  _ = _.createContext({
    globalStartMS: void 0,
    globalEndMS: void 0,
    setRange: null,
    setStartMS: null,
    setEndMS: null,
    globalPreviewStartMS: void 0,
    globalPreviewEndMS: void 0,
    setPreviewRange: null,
    clearPreviewSelection: null,
    selectionZoomCount: 0,
    eInitMethod: void 0,
    startMetrics: void 0,
    endMetrics: void 0,
    zoomIntoSelection: null,
    zoomOutSelection: null,
  });
function _() {
  let _ = (0, _.useContext)(_);
  return {
    nGlobalStartMS: _.globalStartMS,
    nGlobalEndMS: _.globalEndMS,
  };
}
function _() {
  return (0, _.useContext)(_).globalStartMS;
}
function _() {
  return (0, _.useContext)(_).globalEndMS;
}
function _() {
  return (0, _.useContext)(_).setRange;
}
function _() {
  return (0, _.useContext)(_).setStartMS;
}
function _() {
  return (0, _.useContext)(_).setEndMS;
}
function _() {
  let _ = (0, _.useContext)(_);
  return {
    selectedMarker: _.selectedMarker,
    setSelectedMarker: _.setSelectedMarker,
  };
}
function _() {
  let _ = (0, _.useContext)(_);
  return !isNaN(_.globalStartMS?.valMS) && !isNaN(_.globalEndMS?.valMS);
}
function _() {
  return (0, _.useContext)(_).clearSelection;
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return _.useCallback(
    (_, _, _, _) => {
      if (_ === void 0 && _ === void 0) return;
      let _ = _.nGlobalStartMS !== void 0 || _.nGlobalEndMS !== void 0,
        _ = _ || _.nGlobalStartMS,
        _ = _ || _.nGlobalEndMS;
      _ &&
        _ &&
        _.valMS <= _.valMS &&
        (_ === void 0 ? (_ = void 0) : (_ = void 0));
      let _ = _.nBeforeMS + _.nAfterMS;
      _ === void 0 && (_ = _(_.valMS - _)),
        _ === void 0 && (_ = _(_.valMS + _));
      let _ = _ != _.nGlobalStartMS,
        _ = _ != _.nGlobalEndMS;
      _ && _ ? _(_, _, _) : _ ? _(_, _) : _ && _(_, _),
        !_ && _ && _ && _ == 0 && _();
    },
    [_, _, _, _, _, _],
  );
}
function _() {
  return (0, _.useContext)(_).zoomIntoSelection;
}
function _() {
  return (0, _.useContext)(_).selectionZoomCount;
}
function _(_) {
  let _ = (0, _.useContext)(_),
    _ = _.selectionZoomCount,
    _ = _.globalStartMS,
    _ = _.globalEndMS,
    _ = (0, _.useRef)(_),
    _ = (0, _.useRef)(null);
  (_.current = _),
    (0, _.useEffect)(() => {
      if (!_.current) return;
      let _ = !isNaN(_?.valMS) && !isNaN(_?.valMS);
      (_.current == _ && _) ||
        ((_.current = _), _ && _ ? _.current(_, _) : _.current(null, null));
    }, [_, _, _, _, _]);
}
var _ = 5e3,
  _ = 3e5,
  _ = 1e3,
  _ = 10,
  _ = 10,
  _ = (function (_) {
    return (
      (_.Playhead = `Playhead`),
      (_.RangeLeft = `RangeLeft`),
      (_.RangeRight = `RangeRight`),
      (_.Highlight = `Highlight`),
      _
    );
  })({}),
  _ = class {
    m_fnUnregisterFromLoader;
    m_loader;
    m_maskBounds = [-1, -1];
    m_eventTarget;
    constructor(_, _) {
      _(this), (this.m_loader = _), (this.m_eventTarget = _);
    }
    Init() {
      (this.m_fnUnregisterFromLoader = this.m_loader.AddEventListener(this)),
        this.m_loader.BInitialized() && this.OnLoaderInitialized();
    }
    GetGameID() {
      return this.m_loader.GetGameID();
    }
    BInitialized() {
      return this.m_loader.BInitialized();
    }
    IsActiveRecording(_) {
      return this.m_loader.IsActiveRecording(_);
    }
    IsActiveTimeline(_) {
      return this.m_loader.IsActiveTimeline(_);
    }
    GetStateDescriptionAtGlobalMS(_) {
      return this.m_loader.GetStateDescriptionAtGlobalMS(_(_));
    }
    GetTimelineOffsetFromGlobal(_, _) {
      return this.m_loader.GetTimelineOffsetFromGlobal(_, _);
    }
    GetTimelineStartTime(_) {
      let _ = this.m_loader.GetTimelineMetadata(_);
      return _?.metadata ? _.metadata.date_recorded : null;
    }
    BEmpty() {
      return !1;
    }
    GetTimelines() {
      return this.m_loader.GetTimelines();
    }
    GetGlobalTimelineEndMS() {
      return this.m_loader.GetGlobalTimelineEndMS();
    }
    GetTimelineDataOrStartLoad(_) {
      return this.m_loader.GetTimelineDataOrStartLoad(_);
    }
    GetTimelineStartBeforeGlobalZeroMS(_) {
      return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(_);
    }
    MakeRelativeToTimelineEndIfActive(_, _) {
      return this.m_loader.MakeRelativeToTimelineEndIfActive(_, _);
    }
    FindRangeEventsAtGlobalMS(_) {
      return this.m_loader.FindRangeEventsAtGlobalMS(_);
    }
    Close() {
      (this.m_fnUnregisterFromLoader &&=
        (this.m_fnUnregisterFromLoader(), void 0)),
        (this.m_loader = null);
    }
    OnLoaderInitialized() {
      this.m_eventTarget.OnLoaderInitialized &&
        this.m_eventTarget.OnLoaderInitialized();
    }
    OnInvalidate(_) {
      this.m_eventTarget.OnInvalidate && this.m_eventTarget.OnInvalidate(_);
    }
    OnTimelineLoaded(_) {
      this.m_eventTarget.OnTimelineLoaded &&
        this.m_eventTarget.OnTimelineLoaded(_);
    }
    OnInvalidateRecording(_, _) {
      this.m_eventTarget.OnInvalidateRecording &&
        this.m_eventTarget.OnInvalidateRecording(_, _);
    }
  },
  _ = class {
    m_playbackCoordinator;
    m_fnUnregisterPlaybackCoordinator;
    m_refTimelineParentCtn;
    m_timelineMask;
    m_durationMS = 0;
    m_mapTimelineClips = _.map([], {
      deep: !1,
    });
    m_scrollLeftPX = 0;
    m_scrollWindowWidth = null;
    m_scrollWindowOffsetPX = null;
    m_bAutoScrollPaused = !1;
    m_autoScrollPauseTimeout = null;
    m_msVisible = 0;
    m_bCustomZoom = !1;
    m_bUserClipping = !1;
    m_prevLeftAndVisible = null;
    m_rgTimelineOffsets = [];
    m_mapTimelineEntries = _.map([], {
      deep: !1,
    });
    m_bInitialized = !1;
    m_eThumbnailComponent = null;
    m_nGlobalRelativeThumbnailPositionPX = void 0;
    m_thumbnailHighlightEntry = void 0;
    m_phaseToHighlight = void 0;
    constructor(_, _, _) {
      _(this),
        (this.m_playbackCoordinator = _),
        (this.m_timelineMask = new _(_, this)),
        (this.m_fnUnregisterPlaybackCoordinator = _.AddEventListener(this)),
        this.UpdateClipSummaries(_),
        this.m_timelineMask.Init();
    }
    BInitialized() {
      return this.m_bInitialized;
    }
    OnLoaderInitialized() {
      (this.m_durationMS = this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
        this.OnInvalidate(),
        this.InitDefaultsIfReady();
    }
    InitDefaultsIfReady() {
      !this.m_bInitialized &&
        this.m_scrollWindowWidth &&
        this.m_timelineMask.BInitialized() &&
        ((this.m_bInitialized = !0),
        (this.m_msVisible = this.ComputeDefaultMSVisible()),
        this.ScrollToCenteredGlobalMS(
          this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
        ));
    }
    OnTimelineLoaded(_) {
      _(`OnTimelineLoaded`, _),
        this.FindTimelineOffsets(_)
          ? this.ComputeEntriesForTimeline(_)
          : _(`Missing timeline offset metadata for`, _);
    }
    OnInvalidate(_) {
      _(`on invalidate`, _);
      let _ = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
        _ = _ - this.m_durationMS,
        _ = this.m_durationMS <= 0,
        _;
      this.m_durationMS = _;
      let _ = this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
      if (_ > 0 && _) this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (_ > 0 && !this.m_bAutoScrollPaused && !_)
        this.m_msVisible = this.ComputeDefaultMSVisible();
      else if (_ < 0 && this.m_msVisible > _)
        (this.m_msVisible = this.ComputeDefaultMSVisible()),
          this.ScrollToOffset(0);
      else if (_ < 0) {
        let _ = this.FindClosestTimelineStartForOffsetPX(this.m_scrollLeftPX);
        if (_) {
          let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
            _ = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - _);
          _ = {
            strTimelineID: _.timelineID,
            nTimelineOffsetMS: _,
          };
        }
      }
      let _ = this.m_timelineMask.GetTimelines(),
        _ = 0;
      if (this.BInitialized() && _) {
        let _ = _.findIndex((_) => _.metadata.timeline_id === _);
        _ >= 0 && (_ = _);
      }
      if (
        ((this.m_rgTimelineOffsets = _.map((_, _) =>
          _ >= _ ? this.ComputeTimelineOffset(_) : this.m_rgTimelineOffsets[_],
        )),
        _)
      ) {
        let _ = this.FindTimelineOffsets(_.strTimelineID);
        if (_) {
          let _ = _.globalOffsetMS + _.nTimelineOffsetMS,
            _ = _(
              this.ConvertGlobalMSToGlobalPXOffset(_),
              0,
              this.GetMaxScrollLeftPX(),
            );
          this.ScrollToOffset(_);
        }
      }
      _.forEach((_, _) => {
        _ >= _ && this.ComputeEntriesForTimeline(_.metadata.timeline_id);
      });
    }
    OnFocusGlobalMS(_) {
      this.ScrollToCenteredGlobalMS(_.valMS);
    }
    GetGameID() {
      return this.m_timelineMask.GetGameID();
    }
    SetTimelineParentCtnRef(_) {
      this.m_refTimelineParentCtn = _;
    }
    GetTimelineParentCtnRef() {
      return this.m_refTimelineParentCtn;
    }
    SetThumbnailComponent(_) {
      (this.m_eThumbnailComponent = _),
        _ || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
        _ !== `Highlight` && (this.m_thumbnailHighlightEntry = null);
    }
    GetThumbnailComponent() {
      return this.m_eThumbnailComponent;
    }
    SetThumbnailPosition(_) {
      this.m_nGlobalRelativeThumbnailPositionPX = _;
    }
    GetThumbnailPosition() {
      return this.m_nGlobalRelativeThumbnailPositionPX;
    }
    SetThumbnailEntry(_) {
      this.m_thumbnailHighlightEntry = _;
    }
    GetThumbnailEntry() {
      return this.m_eThumbnailComponent === `Highlight`
        ? this.m_thumbnailHighlightEntry
        : null;
    }
    Close() {
      this.m_timelineMask.Close(),
        (this.m_timelineMask = null),
        this.m_fnUnregisterPlaybackCoordinator &&
          this.m_fnUnregisterPlaybackCoordinator(),
        (this.m_fnUnregisterPlaybackCoordinator = null),
        (this.m_bInitialized = !1),
        this.m_autoScrollPauseTimeout && this.ClearAutoScrollPauseTimeout();
    }
    ComputeDefaultMSVisible() {
      let _ = this.GetTimelineMarginWidth() * 2,
        _ = _ * (this.m_rgTimelineOffsets.length - 1),
        _ = Math.max(1, this.m_scrollWindowWidth - _ - _),
        _ = Math.ceil(
          ((_ + _) * this.m_durationMS) / (this.m_scrollWindowWidth - (_ + _)),
        ),
        _ = _ * _;
      return Math.min(this.m_durationMS + _, _);
    }
    ZoomIn(_, _) {
      let _ = 1e3;
      if (this.m_msVisible <= _) return;
      let _ = this.m_msVisible - this.m_msVisible / 1.1 ** _,
        _ = _ * _,
        _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        _ = Math.max(this.m_msVisible - _, _);
      (this.m_msVisible = _),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ + _));
    }
    ZoomOut(_, _) {
      let _ =
        this.m_durationMS +
        this.ConvertDeltaPXToDurationMS(
          _ * (this.m_rgTimelineOffsets.length - 1) +
            this.GetTimelineMarginWidth() * 2,
        );
      if (this.m_msVisible >= _) return;
      let _ = this.m_msVisible * 1.1 ** _ - this.m_msVisible,
        _ = _ * _,
        _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
        _ = Math.min(this.m_msVisible + _, _);
      (this.m_msVisible = _),
        (this.m_bCustomZoom = !0),
        this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ - _));
    }
    IsTempZoom() {
      return !!this.m_prevLeftAndVisible;
    }
    SetTempZoomScale(_, _) {
      let _ = Math.max(_, 0),
        _ = Math.min(_, this.m_durationMS);
      (this.m_prevLeftAndVisible = [this.m_scrollLeftPX, this.m_msVisible]),
        (this.m_msVisible = _ - _);
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_);
      this.ScrollToOffset(_);
    }
    ClearTempZoomScale() {
      if (!this.m_prevLeftAndVisible) return;
      let [_, _] = this.m_prevLeftAndVisible;
      (this.m_prevLeftAndVisible = null),
        this.ScrollToOffset(_),
        (this.m_msVisible = _);
    }
    SetUserIsClipping(_) {
      this.m_bUserClipping = _;
    }
    GetTimelineGapWidth() {
      return _;
    }
    GetTimelineMarginWidth() {
      return 12;
    }
    UpdateClipSummaries(_ = []) {
      this.m_mapTimelineClips.clear(),
        _.forEach((_) => {
          let _ = _.start_timeline_id;
          this.m_mapTimelineClips.has(_) || this.m_mapTimelineClips.set(_, []);
          let _ = {
            clipID: _.clip_id,
            msDuration: parseInt(_.duration_ms),
            msTimelineOffset: parseInt(_.start_offset_ms),
            timelineID: _,
          };
          this.m_mapTimelineClips.get(_).push(_);
        });
    }
    BEmpty() {
      return this.m_timelineMask.BEmpty();
    }
    ComputeTimelineOffset(_) {
      let _ = isNaN(parseInt(_.metadata.duration_ms))
          ? 0
          : parseInt(_.metadata.duration_ms),
        _ = _.metadata.recordings.map((_) => {
          let _ = parseInt(_.start_offset_ms),
            _ = parseInt(_.duration_ms);
          return (
            isNaN(_) &&
              this.m_timelineMask.IsActiveRecording(_.recording_id) &&
              (_ = _ - _),
            {
              recordingID: _.recording_id,
              timelineOffsetMS: _,
              nDurationMS: _,
              bIsActive: this.m_timelineMask.IsActiveRecording(_.recording_id),
              recordingType: _.recording_type,
            }
          );
        }),
        _ = (_.metadata.phases || []).map((_) => ({
          timelineOffsetMS: parseInt(_.background_timeline_offset),
          nDurationMS: parseInt(_.duration_ms),
          phase: _,
        }));
      return {
        timelineID: _.metadata.timeline_id,
        globalOffsetMS: _.nGlobalOffsetMS.valMS,
        nDurationMS: _,
        recordingOffsets: _,
        phaseOffsets: _,
      };
    }
    GetCurrentZoomScale() {
      return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
    }
    GetClipsForTimeline(_) {
      return this.m_mapTimelineClips.get(_) || [];
    }
    ComputeEntriesForTimeline(_) {
      let _ = this.m_timelineMask.GetTimelineDataOrStartLoad(_);
      _ &&
        _.m_strState == `loaded` &&
        this.m_mapTimelineEntries.set(_, {
          rgGameModes: _.m_rgGameModeChanges,
          rgHighlights: _.m_rgEntries,
        });
    }
    GetVisibleTimelineGameModes(_) {
      return this.m_mapTimelineEntries.get(_)?.rgGameModes;
    }
    GetVisibleTimelineHighlights(_) {
      return this.m_mapTimelineEntries.get(_)?.rgHighlights;
    }
    GetStateDescriptionAtGlobalMS(_) {
      return this.m_timelineMask.GetStateDescriptionAtGlobalMS(_);
    }
    FindRangeEventsAtGlobalMS(_) {
      return this.m_timelineMask.FindRangeEventsAtGlobalMS(_);
    }
    GetTimelineOffsetMS(_) {
      return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(_);
    }
    ScrollToCenteredGlobalMS(_) {
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_);
      this.ScrollToOffsetCentered(_);
    }
    ScrollToOffset(_) {
      this.m_scrollLeftPX = _(_, 0, this.GetMaxScrollLeftPX());
    }
    ScrollToOffsetCentered(_) {
      let _ = Math.max(0, _ - 0.5 * this.m_scrollWindowWidth);
      this.ScrollToOffset(_);
    }
    ScrollBy(_) {
      let _ = this.m_scrollLeftPX + _;
      this.ScrollToOffset(_);
    }
    GetAutoScrollPaused() {
      return this.m_bAutoScrollPaused;
    }
    SetAutoScrollPaused(_) {
      this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = _);
    }
    GetAutoScrollPauseTimeout() {
      return this.m_autoScrollPauseTimeout;
    }
    ClearAutoScrollPauseTimeout() {
      this.m_autoScrollPauseTimeout &&
        clearTimeout(this.m_autoScrollPauseTimeout),
        (this.m_autoScrollPauseTimeout = null);
    }
    SetAutoScrollPauseTimeout(_ = _) {
      this.ClearAutoScrollPauseTimeout(),
        (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
          this.SetAutoScrollPaused(!1);
        }, _));
    }
    ScrollToEnd() {
      this.ScrollToOffset(this.GetMaxScrollLeftPX());
    }
    SetScrollWindowWidth(_) {
      (this.m_scrollWindowWidth = _),
        this.m_timelineMask.BInitialized() &&
          (this.ScrollToOffset(this.m_scrollLeftPX),
          this.InitDefaultsIfReady());
    }
    SetScrollWindowOffset(_) {
      this.m_scrollWindowOffsetPX = _;
    }
    GetScrollWindowOffset() {
      return this.m_scrollWindowOffsetPX;
    }
    GetScrollableWidthPX() {
      if (!this.m_rgTimelineOffsets?.length) return 0;
      let _ = this.m_rgTimelineOffsets.length - 1,
        _ = this.m_rgTimelineOffsets[_];
      return (
        _ * _ +
        this.ConvertDurationMSToDeltaPX(_.globalOffsetMS + _.nDurationMS)
      );
    }
    GetOverscanWidth() {
      return (this.GetScrollWindowWidth() * _) / 100;
    }
    GetScrollWindowWidth() {
      return this.m_scrollWindowWidth;
    }
    GetMaxScrollLeftPX() {
      return Math.max(
        0,
        this.GetScrollableWidthPX() -
          this.GetScrollWindowWidth() +
          2 * this.GetTimelineMarginWidth(),
      );
    }
    BReachedMaxScroll() {
      return (
        Math.ceil(this.m_scrollLeftPX) === Math.ceil(this.GetMaxScrollLeftPX())
      );
    }
    BReachedMinScroll() {
      return this.m_scrollLeftPX === 0;
    }
    GetVisualWindowStartPX() {
      return this.m_scrollLeftPX;
    }
    GetVisualWidth() {
      return Math.min(
        this.m_scrollWindowWidth,
        this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
      );
    }
    GetVirtualWindowStartPX() {
      return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
    }
    GetVirtualWindowWidthPX() {
      let _ = _(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
        _ = Math.min(
          this.GetScrollableWidthPX() -
            (this.m_scrollLeftPX + this.m_scrollWindowWidth),
          this.GetOverscanWidth(),
        );
      return _ + this.m_scrollWindowWidth + _;
    }
    GetVirtualWindowEndPX() {
      return this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX();
    }
    GetVisibleTimelines() {
      let _ =
          this.FindIndexOfClosestTimelineEndForOffsetPX(
            this.GetVirtualWindowStartPX(),
          ) + 1,
        _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.GetVirtualWindowEndPX(),
        );
      return this.m_rgTimelineOffsets.slice(_, _ + 1).map((_) => {
        let _ = Math.max(
            _.globalOffsetMS,
            this.ConvertPXOffsetToGlobalMS(this.GetVirtualWindowStartPX()),
          ),
          _ = Math.min(
            _.nDurationMS - (_ - _.globalOffsetMS),
            this.ConvertDeltaPXToDurationMS(this.GetVirtualWindowWidthPX()),
          ),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_),
          _ = this.ConvertDurationMSToDeltaPX(_),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
          _ = this.ConvertDurationMSToDeltaPX(_.nDurationMS);
        return {
          ..._,
          pxStart: _,
          pxDuration: _,
          msVisibleStart: _,
          msVisibleDuration: _,
          pxVisibleStart: _,
          pxVisibleDuration: _,
        };
      });
    }
    GetVisibleRecordings() {
      let _ = [];
      return (
        this.GetVisibleTimelines().forEach((_) => {
          _.recordingOffsets.forEach((_) => {
            let _ = _.pxStart + this.GetPXForDuration(_.timelineOffsetMS),
              _ = _ + this.GetPXForDuration(_.nDurationMS);
            _ < this.GetVirtualWindowStartPX() ||
              _ > this.GetVirtualWindowEndPX() ||
              _.push({
                recordingID: _.recordingID,
                nStartPX: _,
                nEndPX: _,
                bIsActive: _.bIsActive,
                recordingType: _.recordingType,
              });
          });
        }),
        _
      );
    }
    GetVisibleClips() {
      let _ = [];
      return (
        this.GetVisibleTimelines().forEach((_) => {
          let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
          this.GetClipsForTimeline(_.timelineID).forEach((_) => {
            let _ = _ + this.GetPXForDuration(_.msTimelineOffset),
              _ = Math.min(
                this.GetVirtualWindowEndPX(),
                this.ConvertGlobalMSToGlobalPXOffset(
                  _.globalOffsetMS + _.msTimelineOffset + _.msDuration,
                ),
              );
            _ < this.GetVirtualWindowStartPX() ||
              _ > this.GetVirtualWindowEndPX() ||
              _.push({
                clipID: _.clipID,
                pxClipStart: _,
                pxClipEnd: _,
              });
          });
        }),
        _
      );
    }
    GetPXForDuration(_) {
      return _ / this.GetCurrentZoomScale();
    }
    GetVisibleTimelinesInWindow() {
      let _ =
          this.FindIndexOfClosestTimelineEndForOffsetPX(this.m_scrollLeftPX) +
          1,
        _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
          this.m_scrollLeftPX + this.m_scrollWindowWidth,
        );
      return this.m_rgTimelineOffsets.slice(_, _ + 1);
    }
    GetVisibleWindowRelativeTimelines() {
      return this.GetVisibleTimelinesInWindow().map((_) => {
        let _ = this.m_scrollLeftPX,
          _ = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
          _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
          _ = _ + this.ConvertDurationMSToDeltaPX(_.nDurationMS),
          _ = Math.max(_, _),
          _ = Math.min(_, _);
        return {
          timelineID: _.timelineID,
          nVisibleStartPX: _,
          nEndPX: _,
          nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(_),
          nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(_),
        };
      });
    }
    ConvertPXToTimelineRelativeMS(_, _ = `start`) {
      let _ = this.ConvertPXOffsetToGlobalMS(_),
        _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
      return _ == `end-if-active` &&
        _.strTimelineID &&
        this.m_timelineMask.IsActiveTimeline(_.strTimelineID)
        ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
            _.strTimelineID,
            _.nTimelineOffsetMS.valMS,
          )
        : _.nTimelineOffsetMS.valMS;
    }
    GetTimeRecorded(_) {
      return this.m_timelineMask.GetTimelineStartTime(_);
    }
    ConvertGlobalMSToClipOrNone(_) {
      if (!this.m_timelineMask) return null;
      let _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
      if (!_) return null;
      let { nTimelineOffsetMS: _, strTimelineID: _ } = _;
      return _ && this.m_mapTimelineClips.has(_)
        ? this.m_mapTimelineClips
            .get(_)
            .find(
              (_) =>
                _.msTimelineOffset <= _.valMS &&
                _.msTimelineOffset + _.msDuration >= _.valMS,
            )
        : null;
    }
    ConvertGlobalMSToScrollWindowPXOffset(_) {
      return this.ConvertGlobalMSToGlobalPXOffset(_) - this.m_scrollLeftPX;
    }
    ConvertGlobalMSToGlobalPXOffset(_, _ = -1) {
      _ < 0 && (_ = _(this.m_rgTimelineOffsets, (_) => _ - _.globalOffsetMS));
      let _ = _ * _;
      return this.ConvertDurationMSToDeltaPX(_) + _;
    }
    ConvertPXOffsetToGlobalMS(_, _ = !0) {
      if (this.BPositionInGap(_)) {
        if (!_) return null;
        let _ = this.FindClosestTimelineEndForOffsetPX(_);
        return _ ? _.globalOffsetMS + _.nDurationMS : 0;
      }
      let _ = this.FindClosestTimelineStartForOffsetPX(_);
      if (!_) return null;
      let _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
        _ = this.ConvertDeltaPXToDurationMS(_ - _);
      return _.globalOffsetMS + _;
    }
    FindClosestTimelineEndForOffsetPX(_) {
      let _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
      return _ < 0 ? null : this.m_rgTimelineOffsets[_];
    }
    FindClosestTimelineStartForOffsetPX(_) {
      let _ = this.FindIndexOfClosestTimelineStartForOffsetPX(_);
      return _ < 0 ? null : this.m_rgTimelineOffsets[_];
    }
    FindIndexOfClosestTimelineEndForOffsetPX(_) {
      return _(
        this.m_rgTimelineOffsets,
        (_) =>
          _ -
          (this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS) +
            this.ConvertDurationMSToDeltaPX(_.nDurationMS)),
      );
    }
    FindIndexOfClosestTimelineStartForOffsetPX(_) {
      return _(
        this.m_rgTimelineOffsets,
        (_) => _ - this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
      );
    }
    FindTimelineOffsets(_) {
      return this.m_rgTimelineOffsets.find((_) => _.timelineID === _);
    }
    BPositionInGap(_) {
      let _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
      if (_ < 0) return !1;
      let _ = _ + 1;
      if (_ >= this.m_rgTimelineOffsets.length) return !1;
      let _ = this.m_rgTimelineOffsets[_],
        _ = this.m_rgTimelineOffsets[_],
        _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
      return (
        _ < this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS) && _ !== _
      );
    }
    ConvertDurationMSToDeltaPX(_) {
      return _ / this.GetCurrentZoomScale();
    }
    ConvertDeltaPXToDurationMS(_) {
      return _ * this.GetCurrentZoomScale();
    }
    SetPhaseToHighlight(_) {
      this.m_phaseToHighlight = _;
    }
    GetPhaseToHighlight() {
      return this.m_phaseToHighlight;
    }
  };
_([_], _.prototype, `m_durationMS`, void 0),
  _([_], _.prototype, `m_scrollLeftPX`, void 0),
  _([_], _.prototype, `m_scrollWindowWidth`, void 0),
  _([_], _.prototype, `m_scrollWindowOffsetPX`, void 0),
  _([_], _.prototype, `m_bAutoScrollPaused`, void 0),
  _([_], _.prototype, `m_autoScrollPauseTimeout`, void 0),
  _([_], _.prototype, `m_msVisible`, void 0),
  _([_.ref], _.prototype, `m_rgTimelineOffsets`, void 0),
  _([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `m_eThumbnailComponent`, void 0),
  _([_], _.prototype, `m_nGlobalRelativeThumbnailPositionPX`, void 0),
  _([_], _.prototype, `m_thumbnailHighlightEntry`, void 0),
  _([_], _.prototype, `m_phaseToHighlight`, void 0),
  _([_], _.prototype, `OnLoaderInitialized`, null),
  _([_], _.prototype, `InitDefaultsIfReady`, null),
  _([_], _.prototype, `OnInvalidate`, null),
  _([_], _.prototype, `ZoomIn`, null),
  _([_], _.prototype, `ZoomOut`, null),
  _([_], _.prototype, `SetTempZoomScale`, null),
  _([_], _.prototype, `ClearTempZoomScale`, null),
  _([_], _.prototype, `UpdateClipSummaries`, null),
  _([_], _.prototype, `BReachedMaxScroll`, null),
  _([_], _.prototype, `BReachedMinScroll`, null);
var _ = _.createContext(null);
function _(_) {
  let {
      loader: _,
      playbackCoordinator: _,
      children: _,
      clipSummaries: _,
      refTimelineParentCtn: _,
    } = _,
    [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      if (!_) return;
      let _ = new _(_, _, _);
      return _(_), () => _.Close();
    }, [_]),
    (0, _.useEffect)(() => {
      _ && _.UpdateClipSummaries(_);
    }, [_, _]),
    (0, _.useEffect)(() => {
      _ && _ && _.SetTimelineParentCtnRef(_.current);
    }, [_, _]),
    _(_),
    _(_),
    _
      ? (0, _.jsx)(_.Provider, {
          value: _,
          children: _,
        })
      : null
  );
}
function _(_) {
  _(
    _.useCallback(
      (_, _) => {
        if (!_) return;
        if (!_ || !_) {
          _.ClearTempZoomScale();
          return;
        }
        let _ = Math.floor((_.valMS - _.valMS) * 0.1),
          _ = _.valMS - _.valMS;
        _ < _ * 0.9 && (_ = Math.floor((_ - _) / 2));
        let _ = _.valMS - _,
          _ = _.valMS + _;
        _.SetTempZoomScale(_, _);
      },
      [_],
    ),
  );
}
function _(_) {
  let _ = _();
  (0, _.useEffect)(() => {
    _ && _.SetUserIsClipping(_);
  }, [_, _]);
}
function _() {
  return (0, _.useContext)(_);
}
var _ = `BAvp4rqoXrI-`,
  _ = `MvaB420caso-`,
  _ = `KHooprC7Eh8-`,
  _ = `S49EhbfI3MU-`,
  _ = `_5URRAlchke4-`,
  _ = 20,
  _ = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
  _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            msVisibleStart: _.msVisibleStart,
            pxVisibleDuration: _.pxVisibleDuration,
            pxVisibleStart: _.pxVisibleStart,
            msTimelineStart: _.globalOffsetMS,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = _.memo(function (_) {
    let {
        msVisibleStart: _,
        msTimelineStart: _,
        pxVisibleDuration: _,
        pxVisibleStart: _,
      } = _,
      { msTickSpacing: _, pxTickSpacing: _ } = _(),
      _ = _(),
      _ = Math.ceil((_ - _) / _),
      _ = _ + _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_),
      _ = (0, _.useMemo)(() => {
        let _ = Math.ceil(_ / _),
          _ = [];
        for (let _ = 0; _ < _; _++) {
          let _ = _ + _ * _,
            _ = _ + _ * _,
            _ = `${_}`;
          _.push({
            key: _,
            offsetPX: _,
            iTimelineRelativeTick: _ + _,
          });
        }
        return _;
      }, [_, _, _, _, _, _]);
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              style: {
                transform: `translateX(${_}px)`,
                width: _,
              },
            }),
            _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  timelineRelativeIndex: _.iTimelineRelativeTick,
                  globalOffsetPX: _.offsetPX,
                },
                _.key,
              ),
            ),
          ],
        })
      : null;
  });
function _(_) {
  let { globalOffsetPX: _, timelineRelativeIndex: _ } = _,
    _ = _ % _ === 0 ? _ : _;
  return (0, _.jsx)(`div`, {
    className: _,
    style: {
      transform: `translateX(${_}px)`,
    },
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
    }),
  });
}
function _() {
  let _ = _(),
    _ = _(() => _.GetCurrentZoomScale()),
    _ = (_) => Math.abs(300 - _ / _),
    _ = _.reduce((_, _) => (_(_) - _(_) < 0 ? _ : _)) / _;
  return {
    msTickSpacing: _,
    pxTickSpacing: _ / _,
  };
}
var _ = `pOdfi3iG-Qk-`,
  _ = `RgeHxBkcuYI-`,
  _ = `bEIIxIyUIRw-`,
  _ = `vfkh8xz76sA-`,
  _ = `Z4wMZP9AtrA-`;
function _(_, _) {
  return !(_.nStart >= _.nEnd || _.nEnd <= _.nStart);
}
var _ = class {
    m_reservations = [];
    m_nIconWidth;
    constructor(_) {
      this.m_nIconWidth = _;
    }
    BAllowIcon(_) {
      let _ = {
          nStart: _ - this.m_nIconWidth / 2,
          nEnd: _ + this.m_nIconWidth / 2,
        },
        _ = 0;
      for (; _ < this.m_reservations.length; _++) {
        let _ = this.m_reservations[_];
        if (_.nStart >= _.nEnd) break;
        if (_(_, _)) return !1;
      }
      return this.m_reservations.splice(_, 0, _), !0;
    }
  },
  _ = (0, _.createContext)({});
function _() {
  return (0, _.useContext)(_);
}
var _ = `DzuECh3SiO8-`,
  _ = `OzJbKH40jVQ-`,
  _ = `CcS1u3HYQgY-`,
  _ = `Q2--kfqg0oc-`,
  _ = `GBjFGdfE0Qc-`,
  _ = `tg-75b6-Ee4-`,
  _ = `-BFT24TRL3c-`;
function _(_) {
  let {
      closeModal: _,
      strTimelineID: _,
      entry: _,
      playbackCoordinator: _,
      fnClearSelection: _,
    } = _,
    [_, _] = _.useState(_.title || ``),
    [_, _] = _.useState(_.description || ``),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#Marker_Dialog`),
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strTitle: _(`#Marker_Dialog`),
        strMiddleButtonText: _(`#Marker_Action_Delete`),
        onCancel: _,
        onOK: async () => {
          _.fnSetLoading(!0),
            (await _.UpdateUserMarker(_, _, _, _))
              ? _()
              : (_.fnSetError(!0), _.fnSetStrError(_(`#Marker_UpdateFailed`)));
        },
        children: [
          (0, _.jsx)(_, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.currentTarget.value),
            label: _(`#Marker_Title`),
          }),
          (0, _.jsx)(_, {
            type: `text`,
            value: _,
            onChange: (_) => _(_.currentTarget.value),
            label: _(`#Marker_Description`),
          }),
        ],
      });
}
var _ = `YwXy-p3jOGA-`,
  _ = `DYV4-rbHkCQ-`,
  _ = `NodVylkJJmk-`,
  _ = `NBLBqJkBBNA-`,
  _ = `muIMDgnfzVw-`,
  _ = class {
    m_bCreationWasTemporary;
    m_fnCreate;
    m_creationResult;
    m_bCleanedUp = !1;
    m_nClipLengthSeconds;
    m_strSuggestedClipName;
    m_strGameID;
    m_strSrcClipID;
    m_eInitMethod;
    m_startMetrics;
    m_endMetrics;
    constructor(_, _, _, _, _, _, _, _) {
      (this.m_fnCreate = _),
        (this.m_nClipLengthSeconds = _),
        (this.m_strSuggestedClipName = _),
        (this.m_strGameID = _),
        (this.m_strSrcClipID = _),
        (this.m_eInitMethod = _),
        (this.m_startMetrics = _),
        (this.m_endMetrics = _);
    }
    Request() {
      return {
        create: this.create,
        cleanup: this.cleanup,
        bExistingClip: !1,
        nClipLengthSeconds: this.m_nClipLengthSeconds,
        strSuggestedClipName: this.m_strSuggestedClipName,
        gameID: new _(this.m_strGameID),
        strSrcClipID: this.m_strSrcClipID,
        eInitMethod: this.m_eInitMethod,
        startMetrics: this.m_startMetrics,
        endMetrics: this.m_endMetrics,
      };
    }
    async create(_, _) {
      return (
        this.m_creationResult ||
          ((this.m_creationResult = await this.m_fnCreate(_, _)),
          (this.m_bCreationWasTemporary = _),
          _(
            new _(this.m_strGameID),
            this.m_eInitMethod,
            this.m_nClipLengthSeconds,
            this.m_startMetrics,
            this.m_endMetrics,
          )),
        Promise.resolve(this.m_creationResult)
      );
    }
    async cleanup() {
      if (this.m_bCleanedUp)
        throw Error(`cleanup called twice on clip creation`);
      if (
        ((this.m_bCleanedUp = !0),
        this.m_creationResult?.clipSummary && this.m_bCreationWasTemporary)
      ) {
        let { fnDeleteClip: _ } = _();
        await _(this.m_creationResult.clipSummary.clip_id);
      }
    }
  };
_([_], _.prototype, `create`, null), _([_], _.prototype, `cleanup`, null);
function _(_, _, _, _, _, _, _, _, _, _, _) {
  return new _(
    (_, _) => _(_, _, _, _, _, _, _, _, _),
    _ / 1e3,
    _,
    _,
    _,
    _,
    _,
    _,
  ).Request();
}
async function _(_, _, _, _, _, _, _, _, _) {
  let { fnSaveClip: _ } = _();
  _(`start ${_} @ ${_} upto ${_} @ ${_}`);
  try {
    let _ = await _(
        _,
        _,
        _,
        {
          timeline_id: _,
          offset_ms: `` + _,
        },
        {
          timeline_id: _,
          offset_ms: `` + _,
        },
        _,
        _,
      ),
      { clipSummary: _, result: _ } = _;
    return _(_ ? `Clip ${_.clip_id} created` : `Clip was not created: ${_}`), _;
  } catch (_) {
    _(_);
  }
  return {
    result: 2,
  };
}
function _(_, _, _, _) {
  let _ = _ + 1,
    _ = _ + _ - 2;
  return _(
    _,
    void 0,
    void 0,
    _,
    _,
    _,
    _,
    _ - _,
    7,
    {
      latestRangeMethod: 7,
      originalRangeMethod: 7,
      relativeMS: 0,
    },
    {
      latestRangeMethod: 7,
      originalRangeMethod: 7,
      relativeMS: 0,
    },
  ).create(!1);
}
var _ = `u-2dfrrZjSE-`,
  _ = _.createContext({
    bInContainer: !1,
    bContainerFocus: !1,
    nMouseClientXPX: null,
    globalMouseXPX: null,
    scrollWindowMouseXPX: null,
    fnRegisterMouseEvent: null,
    bContextMenuOpen: !1,
    setContextMenuOpen: () => {},
  });
function _(_) {
  let { children: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(),
    _ = (0, _.useRef)(void 0),
    _ = _(),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.GetScrollWindowWidth()),
    _ = _(() => _.GetScrollWindowOffset()),
    _ = _(() => _.GetTimelineMarginWidth()),
    _ = _.useMemo(() => {
      if (_.current) {
        let _ = _ - _ - _;
        return _(_(_ + _, 0, _));
      }
      return _(0);
    }, [_, _, _, _, _]),
    _ = _.useMemo(() => {
      if (_.current) {
        let _ = _.current.getBoundingClientRect(),
          _ = _ > _ ? _ : _._;
        return _(_(_ - _, 0, _));
      }
      return _(0);
    }, [_, _, _, _]),
    _ = (0, _.useCallback)(
      (_, _) => (
        _.current && _.current.addEventListener(_, _),
        () => _.current?.removeEventListener(_, _)
      ),
      [],
    ),
    _ = (0, _.useCallback)(() => _(!0), []),
    _ = (0, _.useCallback)(() => _(!1), []),
    _ = (0, _.useCallback)((_) => _(_.clientX), []),
    _ = (0, _.useCallback)((_) => _(!0), []),
    _ = (0, _.useCallback)((_) => _(!1), []);
  (0, _.useEffect)(() => {
    let _ = _(_.current);
    return (
      _.addEventListener(`mousemove`, _),
      () => _.removeEventListener(`mousemove`, _)
    );
  }, [_]);
  let _ = (0, _.useMemo)(
    () => ({
      bContainerFocus: _,
      bInContainer: _,
      nMouseClientXPX: _,
      globalMouseXPX: _,
      scrollWindowMouseXPX: _,
      fnRegisterMouseEvent: _,
      bContextMenuOpen: _,
      setContextMenuOpen: _,
    }),
    [_, _, _, _, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(`div`, {
      ref: _,
      onMouseOver: _,
      onFocus: _,
      onMouseOut: _,
      onBlur: _,
      onMouseEnter: _,
      onMouseLeave: _,
      className: _,
      children: _,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return _().globalMouseXPX;
}
function _() {
  return _().scrollWindowMouseXPX;
}
function _() {
  return _().bInContainer;
}
function _() {
  return _().bContainerFocus;
}
function _() {
  let _ = _();
  return [_.bContextMenuOpen, _.setContextMenuOpen];
}
function _(_, _) {
  let _ = _().fnRegisterMouseEvent,
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(() => {
      _.current = _(_, _);
    }, [_, _, _]),
    _ = (0, _.useCallback)(() => {
      _.current && _.current();
    }, []);
  (0, _.useEffect)(() => (_(), () => _()), [_, _]);
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(),
    _ = _(() => !_.ShouldModeShowClipControls()),
    _ = _(),
    { onMarkerCreated: _, onNavigateToClip: _ } = _(),
    [_, _] = _();
  return _.useCallback(
    (_, _, _, _) =>
      _ || _
        ? null
        : _(
            (0, _.jsx)(_, {
              isCurrentPlayback: _,
              nGlobalOffsetMS: _,
              playbackCoordinator: _,
              timelineView: _,
              fnSetSelectionClipRange: _,
              onMarkerCreated: _,
              onNavigateToClip: _,
              onContextMenuOpenChange: _,
            }),
            _,
            _,
          ),
    [_, _, _, _, _, _, _, _],
  );
}
function _(_) {
  let {
      playbackCoordinator: _,
      timelineView: _,
      nGlobalOffsetMS: _,
      fnSetSelectionClipRange: _,
      isCurrentPlayback: _,
      onMarkerCreated: _,
      onNavigateToClip: _,
      onContextMenuOpenChange: _,
    } = _,
    _ = _(() => _.GetClipsAtGlobalMS(_)),
    _ = _(_);
  (0, _.useEffect)(() => (_(!0), () => _(!1)), [_]);
  let _ = (() => {
      let { strTimelineID: _, nTimelineOffsetMS: _ } =
        _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
      if (!_) return null;
      let _ = _.GetLoader().GetTimelineData(_);
      if (!_) return null;
      let _ = _(_.m_rgPhases, (_) => _.valMS - parseInt(_.time));
      if (_ < 0) return null;
      let _ = _.m_rgPhases[_];
      return _.valMS >= parseInt(_.time) &&
        _.valMS <= parseInt(_.time) + parseInt(_.duration)
        ? {
            strTimelineID: _,
            phase: _,
          }
        : null;
    })(),
    _ = (_) => {
      _.AddUserMarkerAtGlobalMS(
        _,
        `/GameRecording/AddMarker/TimelineCtxMenu`,
        (_, _) => {
          _ && _(_, _, _);
        },
      ),
        _.SetPlaytimeFromGlobalMS(_),
        _.FocusGlobalMS(_);
    },
    _ = () => {
      _(_, 4, _, void 0), _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_);
    },
    _ = () => {
      _(_, 4, void 0, _), _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_);
    },
    _ = () => {
      _.length > 0 &&
        (_.ReportTrackedAction(
          `/GameRecording/Tooltip/ViewClip/TimelineCtxMenu`,
        ),
        _ && _(_[0].strClipID));
    },
    _ = () => {
      let { strTimelineID: _, nTimelineOffsetMS: _ } =
        _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
      _.GetLoader().GetTimelineStartBeforeGlobalZeroMS(_),
        _(_.GetGameID(), _, _, _.GetClipID());
    },
    _ = () => {
      if (!_) return;
      let { phase: _, strTimelineID: _ } = _;
      _(_.GetGameID(), _, parseInt(_.time), parseInt(_.duration));
    },
    _ = (_) => _.SetPhaseToHighlight(_);
  return (
    (0, _.useEffect)(() => () => _.SetPhaseToHighlight(null), [_]),
    (0, _.jsxs)(_, {
      refInstance: _,
      children: [
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {}),
              _(
                _
                  ? `#Playback_UserSelectionControls_AddUserMarker`
                  : `#TimelineDialog_AddMarker`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {}),
              _(
                _
                  ? `#Playback_UserSelectionControls_TakeScreenshot`
                  : `#TimelineDialog_TakeScreenshot`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {
                direction: `left`,
              }),
              _(
                _
                  ? `#Playback_UserSelectionControls_SetClipStart`
                  : `#TimelineContext_SetClipStart`,
              ),
            ],
          }),
        }),
        (0, _.jsx)(_, {
          onSelected: _,
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _(_, _),
            children: [
              (0, _.jsx)(_, {
                direction: `right`,
              }),
              _(
                _
                  ? `#Playback_UserSelectionControls_SetClipEnd`
                  : `#TimelineContext_SetClipEnd`,
              ),
            ],
          }),
        }),
        !!_ &&
          (0, _.jsx)(_, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            onMouseOver: () => _([_.strTimelineID, _.phase.time]),
            onMouseLeave: () => _(null),
            children: (0, _.jsxs)(`div`, {
              className: _(`DYV4-rbHkCQ-`, `cTZ4oCV0rfc-`),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ClipPhase`)],
            }),
          }),
        _.length > 0 &&
          (0, _.jsx)(_, {
            onSelected: _,
            className: `YwXy-p3jOGA-`,
            children: (0, _.jsxs)(`div`, {
              className: _(`DYV4-rbHkCQ-`, `opmNw-e94ys-`),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ViewClip`)],
            }),
          }),
      ],
    })
  );
}
function _(_) {
  let _ = _(() => _.GetAutoScrollPauseTimeout()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current && _.current ? _.current.Hide() : (_.current = !0);
    }, [_]),
    (0, _.useEffect)(() => {
      _.SetAutoScrollPaused(!0);
    }, [_]),
    (0, _.useEffect)(() => {
      _ && _.ClearAutoScrollPauseTimeout();
    }, [_, _]),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    { setSelectedMarker: _ } = _(),
    _ = _(),
    { onNavigateToClip: _, onNavigateToScreenshot: _ } = _(),
    _ = _(),
    _ = _(() => !_.ShouldModeShowClipControls());
  return _.useCallback(
    (_, _, _) => {
      _ ||
        _(
          (0, _.jsx)(_, {
            markerInfo: _,
            playbackCoordinator: _,
            timelineView: _,
            setSelectedMarker: _,
            onNavigateToClip: _,
            onNavigateToScreenshot: _,
            bLowDiskSpace: _,
            clearRange: _,
          }),
          _,
          _,
        );
    },
    [_, _, _, _, _, _, _, _],
  );
}
function _(_) {
  let {
      playbackCoordinator: _,
      timelineView: _,
      markerInfo: _,
      setSelectedMarker: _,
      clearRange: _,
      bLowDiskSpace: _,
      onNavigateToClip: _,
      onNavigateToScreenshot: _,
    } = _,
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS)),
    _ = _(() =>
      _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.nGlobalMS.valMS),
    ),
    _ = _(_),
    _ = (_) => {
      let _ = _,
        _ = _;
      _(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
      let [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
        _.strTimelineID,
        _.nGlobalMS.valMS,
        _,
        _,
      );
      _.SetPlaytimeFromGlobalMS(_(_)),
        _?.(_.entry._, _.strTimelineID, _, _),
        _.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/ClipFromHighlight`,
        ),
        _.stopPropagation();
    },
    _ = () => {
      _ &&
        (_.ReportTrackedAction(
          `/GameRecording/MarkerCtxMenu/ViewClip/${_.entry.type}`,
        ),
        _ && _(_.clipID));
    },
    _ = (_) => {
      if (!_(_.entry)) return;
      _.ReportTrackedAction(
        `/GameRecording/HighlightCtxMenu/Marker/Edit/${_.entry.type}`,
      );
      let _ = (0, _.jsx)(_, {
        entry: _.entry,
        playbackCoordinator: _,
        fnClearSelection: _,
        strTimelineID: _.strTimelineID,
      });
      _(_, _(_)), _.stopPropagation(), _.preventDefault();
    },
    _ = (_) => {
      _(_.entry) &&
        (_.ReportTrackedAction(
          `/GameRecording/HighlightCtxMenu/Marker/Delete/${_.entry.type}`,
        ),
        _.RemoveUserMarker(_.strTimelineID, _.entry._));
    },
    _ = () => {
      _(_.entry) &&
        _.entry?.handle &&
        (_.ReportTrackedAction(`/GameRecording/HighlightCtxMenu/Screenshot`),
        _(_.GetGameID(), _.entry.handle));
    },
    _ = [];
  return (
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#Marker_Action_Edit`)],
            }),
          },
          `edit`,
        ),
      ),
    _?.strRecordingID &&
      !_ &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ClipVideo`)],
            }),
          },
          `clip`,
        ),
      ),
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [
                (0, _.jsx)(_, {}),
                _(`#TimelineDialog_ViewScreenshot`),
              ],
            }),
          },
          `view_screenshot`,
        ),
      ),
    _ &&
      _ &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#TimelineDialog_ViewClip`)],
            }),
          },
          `view_clip`,
        ),
      ),
    _(_.entry) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: _,
            className: _,
            children: (0, _.jsxs)(`div`, {
              className: _(_, _),
              children: [(0, _.jsx)(_, {}), _(`#Marker_Action_Delete`)],
            }),
          },
          `delete`,
        ),
      ),
    _.length
      ? (0, _.jsx)(_, {
          refInstance: _,
          children: _,
        })
      : null
  );
}
var _ = 5e3,
  _ = 3e3,
  _ = 5e3;
function _(_) {
  let {
      markerInfo: _,
      view: _,
      coordinator: _,
      gameID: _,
      clipID: _,
      timelineID: _,
      faded: _,
    } = _,
    _ = _.nGlobalMS,
    _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
    _ = _(() => {
      let _ = _.GetThumbnailComponent();
      return _ && _ !== _.Highlight;
    }),
    _ = _(),
    { selectedMarker: _ } = _(),
    _ = _.entry?._ == _?.strEntryID && _.strTimelineID == _?.strTimelineID,
    { ref: _, ..._ } = _(_, _),
    _ = _.useCallback(
      (_) => {
        let _ = _.valMS - _,
          _ = _.FindTimelineOffsets(_),
          _ = Math.max(_, _.globalOffsetMS);
        _.SetPlaytimeFromGlobalMS(_(_)),
          _.SetDisplayHighlightEntry(_.entry),
          _.stopPropagation(),
          _.ReportTrackedAction(`/GameRecording/Marker/Click/${_.entry.type}`);
      },
      [_, _.valMS, _, _, _],
    ),
    _ = (_) => {
      _(_, _, {
        bDisableMouseOverlay: !0,
        bForcePopup: !0,
        bAlwaysOnTop: !0,
      }),
        _.stopPropagation();
    },
    _ = {
      transform: `translateX( calc( ${_}px - 50% ))`,
    };
  return (0, _.jsxs)(`div`, {
    className: _(_, _ && `fKVXzdV7f4k-`, _ && `NF7Pk6zJyl4-`),
    style: _,
    ref: _,
    onContextMenu: _,
    ..._,
    children: [
      (0, _.jsx)(
        `div`,
        {
          className: _(_),
          children: (0, _.jsx)(
            _,
            {
              classNames: _,
              entry: _.entry,
              strMarkerIcon: _.strMarkerIcon,
              faded: _,
              onClick: _,
              bSelectedMarker: _,
            },
            _.entry._,
          ),
        },
        _.valMS,
      ),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _(_),
        }),
      }),
    ],
  });
}
var _ = 150;
function _(_, _) {
  let _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        if (!_.current) return;
        let _ = _.current.getBoundingClientRect();
        if (_.clientY >= _.top && _.clientY <= _.bottom) {
          if (_.left - _.clientX > 1 || _.clientX - _.right > 1) {
            _.SetThumbnailComponent(null),
              _.current && _.current(),
              (_.current = null);
            return;
          }
          return;
        }
        let _ = _.left + 0.5 * _.width;
        (_.clientX < _ - _ || _.clientX > _ + _) &&
          (_.SetThumbnailComponent(null),
          _.current && _.current(),
          (_.current = null));
      },
      [_],
    ),
    _ = _.useCallback(
      (_) => {
        if (
          (_.SetThumbnailComponent(_.Highlight),
          _.SetThumbnailEntry(_),
          !_.current)
        ) {
          let _ = _(_);
          _.addEventListener(`mousemove`, _),
            (_.current = () => _.removeEventListener(`mousemove`, _));
        }
        _.stopPropagation();
      },
      [_, _, _],
    ),
    _ = _.useCallback(
      (_) => {
        let _ = _.current.getBoundingClientRect(),
          _ = _.left,
          _ = _.right;
        _.clientX - _ < 1 || _ - _.clientX < 1
          ? (_.SetThumbnailComponent(null),
            _.current && _.current(),
            (_.current = null))
          : (_(_.current, _.relatedTarget) ||
              (_.clientY - _.top > 1 &&
                _.bottom - _.clientY > 1 &&
                _.clientX - _.left > 1 &&
                _.right - _.clientX > 1 &&
                (_.SetThumbnailComponent(null),
                _.current && _.current(),
                (_.current = null))),
            _.stopPropagation());
      },
      [_],
    );
  return (
    _.useEffect(() => () => _.current && _.current(), []),
    {
      ref: _,
      onMouseOver: _,
      onMouseLeave: _,
    }
  );
}
var _ = 16;
function _(_) {
  switch (_.type) {
    case `achievement`:
      return 9e3;
    default:
      return _.priority;
  }
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            timeline: _,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = {
    screenshot: 0,
    event: 0,
    achievement: 1,
    usermarker: 2,
  };
function _(_, _) {
  if (_[_.type] !== _[_.type]) return _[_.type] - _[_.type];
  let _ = _(_),
    _ = _(_);
  return _ == _
    ? _.time == _.time
      ? _._.localeCompare(_._)
      : parseInt(_.time) - parseInt(_.time)
    : _ - _;
}
var _ = _.memo(function (_) {
  let { timeline: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetVisibleTimelineHighlights(_.timelineID) || [])
      .slice()
      .sort(_),
    _ = _(() => _.GetTimelineOffsetMS(_.timelineID)),
    _ = _.globalOffsetMS - _,
    _ = _.GetGameID(),
    _ = _.GetClipID(),
    _ = new _(_.GetCurrentZoomScale() * _);
  return _.map((_, _) => {
    if (_(_) !== `highlight`) return null;
    let _ = `${_.type}_${_._}_${_.timelineID}_${_}`,
      _ = _(_.timelineID, _, _),
      _ = _.BAllowIcon(_.nGlobalMS.valMS);
    return (0, _.jsx)(
      _,
      {
        gameID: _,
        clipID: _,
        view: _,
        coordinator: _,
        faded: !_,
        timelineID: _.timelineID,
        markerInfo: _,
      },
      _,
    );
  });
});
function _(_, _, _) {
  if (
    ![`event`, `usermarker`, `screenshot`, `achievement`, `error`].includes(
      _.type,
    )
  )
    return (
      _(
        `Unexpected timeline entry type ${_.type}, returning empty highlight marker`,
      ),
      null
    );
  let _ = _,
    _ = _(_);
  return {
    entry: _,
    strMarkerIcon: _ ? `steam_achievement` : _.icon,
    nMarkerPriority: _(_),
    strTimelineID: _,
    strTitle: (!_ && _.title) || ``,
    strDescription: (!_ && _.description) || ``,
    nGlobalMS: _(parseInt(_.time) + _),
  };
}
function _(_) {
  switch (_.type) {
    case `usermarker`:
    case `achievement`:
    case `screenshot`:
    case `error`:
      return `highlight`;
    case `event`:
      return parseInt(_.duration) > 0 ? `range_highlight` : `highlight`;
    default:
      return `none`;
  }
}
var _ = `-X0PMxvY3QE-`,
  _ = `cbzcIa1ocN4-`,
  _ = `MMJtgRs0Os4-`,
  _ = `m6U62VPiE5I-`,
  _ = `KT1NiRNa2wQ-`;
function _(_) {
  let { view: _, entry: _, nGlobalEntryEndMS: _, nGlobalTLStartMS: _ } = _,
    _ = _(),
    _ = _(parseInt(_.time) + _.valMS),
    _ = _(() => {
      let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
        _ = _.GetVirtualWindowStartPX();
      return _ < _ ? _ : _;
    }),
    _ = _(() => {
      let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
        _ = _.GetVirtualWindowEndPX();
      return _ < _ ? _ : _;
    }),
    _ = !!_.GetClipID(),
    _ = {
      transform: `translateX( ${_}px )`,
      width: _ - _,
    },
    _ = _({
      [_]: _.mode === _.Invalid,
      [_]: _.mode === _.Staging,
      [_]: _.mode === _.Menus,
      [_]: _.mode === _.Playing,
    });
  return (0, _.jsx)(
    `div`,
    {
      className: _(_, _, _ && `dM-k3XLATgY-`),
      style: _,
    },
    _._,
  );
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleTimelines());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            timeline: _,
          },
          _.timelineID,
        ),
      ),
    });
  }),
  _ = _.memo(function (_) {
    let { timelineID: _, globalOffsetMS: _, nDurationMS: _ } = _.timeline,
      _ = _(),
      _ = _(() => {
        let _ = _.GetVisibleTimelineGameModes(_);
        return !_ || _.length === 0
          ? [
              {
                time: `0`,
                type: `gamemode`,
                mode: _.Invalid,
                _: `synthetic`,
              },
            ]
          : _;
      }),
      _ = _(_ + _),
      _ = _ - _.GetTimelineOffsetMS(_),
      _ = [];
    for (let _ = 0; _ < _.length; _++) {
      let _ = _(_ < _.length - 1 ? parseInt(_[_ + 1].time) + _ : _.valMS - 1);
      _.push(
        (0, _.jsx)(
          _,
          {
            view: _,
            entry: _[_],
            nGlobalEntryEndMS: _,
            nGlobalTLStartMS: _(_),
          },
          `gameMode_${_}_${_}`,
        ),
      );
    }
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  }),
  _ = `XVi5a5ZkmMc-`,
  _ = `-nn0AHNIP3k-`,
  _ = `-IpQtGedcoc-`,
  _ = `LsIeUCU634s-`,
  _ = `QNUH0lZ0VfY-`,
  _ = `wQLCIzL88LU-`,
  _ = `JtIym43tUFo-`,
  _ = `a23JQkVm40o-`,
  _ = 500,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetHidePlayer()),
      [_, _] = (0, _.useState)({
        bDragActive: !1,
        bPausedOnDragStart: !1,
      }),
      _ = _(),
      _ = _(() => {
        if (
          _.GetAutoScrollPaused() ||
          _.BReachedMaxScroll() ||
          _.BReachedMinScroll() ||
          _.BIsVideoElementPaused()
        )
          return !1;
        let _ = _.GetGlobalMSPlaytime();
        return (
          _.ConvertGlobalMSToGlobalPXOffset(_.valMS) <
          _.GetMaxScrollLeftPX() + 0.5 * _.GetScrollWindowWidth()
        );
      });
    return _
      ? (0, _.jsx)(_, {
          setDragActive: _,
        })
      : _
        ? (0, _.jsx)(_, {
            view: _,
            setDragActive: _,
          })
        : (0, _.jsx)(_, {
            dragState: _,
            setDragActive: _,
          });
  });
function _(_) {
  let { view: _, setDragActive: _ } = _,
    _ = _(() => _.GetVisualWindowStartPX() + _.GetScrollWindowWidth() / 2);
  return (0, _.jsx)(_, {
    playheadPosition: _,
    children: (0, _.jsx)(_, {
      setDragActive: _,
      bDragActive: !1,
    }),
  });
}
var _ = (0, _.memo)(function (_) {
    let { setDragActive: _ } = _,
      _ = _(),
      _ = _(() => _.GetScrollableWidthPX()),
      _ = _(100),
      _ = (0, _.useCallback)(
        (_) => {
          _.GetAutoScrollPaused() || _(() => _.ScrollToOffset(_));
        },
        [_, _],
      );
    return (
      (0, _.useEffect)(() => _.ScrollToEnd(), [_]),
      (0, _.useEffect)(() => _(_), [_, _]),
      (0, _.jsx)(_, {
        playheadPosition: _,
        children: (0, _.jsx)(_, {
          setDragActive: _,
          bDragActive: !1,
        }),
      })
    );
  }),
  _ = (0, _.memo)(function (_) {
    let { dragState: _, setDragActive: _ } = _,
      { bDragActive: _, bPausedOnDragStart: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(_(), _, _, _, _);
    return (
      (0, _.useEffect)(() => {
        if (!_) return;
        _.SetThumbnailPosition(_);
        let _ = _.ConvertPXOffsetToGlobalMS(_, !1);
        if (!_) return;
        let _ = _.GetLiveEdgeMS();
        _.SetPlaytimeFromGlobalMS(_.valMS < _ ? _ : _(_), _, !0, !0);
      }, [_, _, _, _, _]),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `FOu6nwXsE7c-`),
        children: (0, _.jsx)(_, {
          className: _ ? _ : void 0,
          playheadPosition: _,
          children: (0, _.jsx)(_, {
            setDragActive: _,
            bDragActive: _,
          }),
        }),
      })
    );
  }),
  _ = (0, _.memo)(function (_) {
    let { setDragActive: _, bDragActive: _ } = _,
      _ = _(),
      _ = (_) => {
        _ || _.SetThumbnailComponent(_.Playhead), _.stopPropagation();
      },
      _ = (_) => {
        _ || _.SetThumbnailComponent(null), _.stopPropagation();
      };
    return (0, _.jsx)(`div`, {
      className: _,
      onMouseOver: _,
      onMouseOut: _,
      onFocus: _,
      onBlur: _,
      children: (0, _.jsx)(_, {
        setDragActive: _,
      }),
    });
  }),
  _ = _.memo(function (_) {
    let { setDragActive: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => {
        let _ = _.GetThumbnailComponent();
        return _ === _.RangeLeft || _ === _.RangeRight;
      }),
      _ = (0, _.useCallback)(
        (_) => {
          if (_.button != 0) return;
          let _ = _(_),
            _,
            _,
            _ = () => {
              let _ = _.GetGameRecordingVideo().IsPaused();
              _({
                bDragActive: !0,
                bPausedOnDragStart: _,
              }),
                _.SetThumbnailComponent(_.Playhead),
                _();
            };
          _.addEventListener(`mousemove`, _),
            (_ = () => _.removeEventListener(`mousemove`, _));
          let _ = () => {
            _({
              bDragActive: !1,
              bPausedOnDragStart: !1,
            }),
              _.SetThumbnailComponent(null),
              _(),
              _();
          };
          _.addEventListener(`mouseup`, _),
            (_ = () => _.removeEventListener(`mouseup`, _));
        },
        [_, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = _.GetGlobalMSPlaytime();
          _(_, _, !0, {
            bDisableMouseOverlay: !0,
            bForcePopup: !0,
            bAlwaysOnTop: !0,
          }),
            _.stopPropagation(),
            _.preventDefault();
        },
        [_, _],
      );
    return (0, _.jsx)(`div`, {
      className: _(_, _ && `Twzqk-0-bXc-`),
      onMouseDown: _,
      onContextMenu: _,
      children: (0, _.jsx)(_, {}),
    });
  });
function _(_) {
  return (0, _.jsxs)(`svg`, {
    ..._,
    width: `12`,
    height: `32`,
    viewBox: `0 0 12 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`rect`, {
        _: `5`,
        _: `4`,
        width: `2`,
        height: `40`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth()),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    { clearPlaybackAnimation: _, startPlaybackAnimation: _ } = _(_, _, _);
  (0, _.useEffect)(
    () => () => {
      _.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null)),
        _();
    },
    [_],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        _(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null);
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          _.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX()));
        }
        _.current = _;
      }
    },
    [_],
  );
  return (
    (0, _.useEffect)(() => {
      let _ = _ * (1 - _),
        _ = _ * _;
      if (
        (_.current &&
          (cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null)),
        !_)
      )
        _();
      else if ((_(), _.valPX < _ && !_.BReachedMinScroll())) {
        if (_.valPX <= _.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _;
          _.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMinScroll),
          );
        }
        _.current = _.valPX;
      } else if (_.valPX > _ && !_.BReachedMaxScroll()) {
        if (_.valPX >= _.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          _.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMaxScroll),
          );
        }
        _.current = _.valPX;
      } else _(_(_.valPX, 0, _));
    }, [_, _, _.valPX, _, _, _, _.valPX, _, _]),
    _
  );
}
function _(_, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = _.GetGameRecordingVideo(),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useCallback)(() => {
      if (!_.current) return;
      let _ = _.GetGlobalMSPlaytime();
      if (_.valMS >= 0) {
        let _ = _.BVideoElementPlaying(),
          _ = _.GetVideoElementCurrentTime(),
          _ = _.GetScrollableWidthPX(),
          _ = _.GetCurrentZoomScale();
        if (_.current !== _.valMS || (_.current && _.current != _)) {
          let _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
            _ = Math.min(_, _);
          _(_), (_.current = _);
        } else if (
          _.current &&
          _.current === _.valMS &&
          _ &&
          _.current &&
          _.current !== _ &&
          _
        ) {
          let _ = _.current + (_ - _.current) * 1e3,
            _ = _.ConvertGlobalMSToGlobalPXOffset(_);
          _.current && _.current < _ && _(Math.min(_, _)), (_.current = _);
        }
        _ || ((_.current = null), (_.current = _.valMS)),
          _ &&
            _.current !== _.valMS &&
            ((_.current = _), (_.current = _.valMS)),
          (_.current = _);
      }
      _.current = requestAnimationFrame(_);
    }, [_, _, _, _]);
  return {
    clearPlaybackAnimation: (0, _.useCallback)(() => {
      _.current && cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null),
        (_.current = null),
        (_.current = null);
    }, []),
    startPlaybackAnimation: (0, _.useCallback)(() => {
      _.current ||= requestAnimationFrame(_);
    }, [_]),
  };
}
function _(_) {
  let { className: _, playheadPosition: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _(_, _),
    style: {
      transform: `translateX( calc(${_}px - 50% ))`,
    },
    children: _,
  });
}
var _ = _({
    AddMarker: () => _,
    Button: () => _,
    CreateClipButton: () => _,
    DeleteMarker: () => _,
    Description: () => _,
    DescriptionBlock: () => _,
    Duration: () => _,
    EditMarker: () => _,
    GoToClip: () => _,
    GoToClipFromMarker: () => _,
    Header: () => _,
    Hide: () => _,
    Highlight: () => _,
    Icon: () => _,
    ImageAndInfoBoxContainer: () => _,
    ImageContainer: () => _,
    ImageHighlightBlock: () => _,
    ImageHighlightPosition: () => _,
    InfoBoxContainer: () => _,
    NoRecordedContent: () => _,
    Overlay: () => _,
    Playhead: () => _,
    RangeIcon: () => _,
    RangeLeft: () => _,
    RangeRight: () => _,
    StateDescription: () => _,
    ThumbnailContainerOffset: () => _,
    ThumbnailContents: () => _,
    ThumbnailHitBoxPadding: () => _,
    ThumbnailImage: () => _,
    ThumbnailTooltip: () => _,
    TimeDisplayContainer: () => _,
    Timestamp: () => _,
    Title: () => _,
    TooltipButtons: () => _,
    TooltipChildren: () => _,
    TooltipContainer: () => _,
    TooltipContents: () => _,
    TooltipHitBox: () => _,
    TooltipImage: () => _,
    TooltipImageCtn: () => _,
    TooltipInteractionRegion: () => _,
    TooltipOffset: () => _,
    TooltipRangeContainer: () => _,
    ViewScreenshot: () => _,
    default: () => _,
    thumbnailWidth: () => `320`,
  }),
  _ = `M-05lIt-Rm8-`,
  _ = `demzX-Fs4-4-`,
  _ = `NcHGwBV4SNQ-`,
  _ = `ap-Q4oooopI-`,
  _ = `_9zxrJRU-CaI-`,
  _ = `eQvnQVTk-sI-`,
  _ = `tN6d6cDs7Do-`,
  _ = `B0nXthAtEI8-`,
  _ = `KxFaAst23zY-`,
  _ = `aiwhhTjZ6Pk-`,
  _ = `_9HkA8d7x9kg-`,
  _ = `wCw8FA-GNZw-`,
  _ = `_3-l3Dnlgyfo-`,
  _ = `_00G4k2IDvBQ-`,
  _ = `UYDbMZ6G3WU-`,
  _ = `RAeRf-oNWq8-`,
  _ = `Vc6eo-Q-cRw-`,
  _ = `u2eqeMJHtic-`,
  _ = `_-6Xh-VqwYeg-`,
  _ = `TkM9nyNO0Xs-`,
  _ = `mdK6jpS4jRU-`,
  _ = `VrSRUKXDErM-`,
  _ = `PYo3kx2RfSs-`,
  _ = `_1UvMCudnsIs-`,
  _ = `vx9pJ002RM0-`,
  _ = `BgeUu9u9wW8-`,
  _ = `qP9-v-34gEw-`,
  _ = `VTDf1a6CPQI-`,
  _ = `iHtJ7ZAsX5A-`,
  _ = `k9NX76-rrPo-`,
  _ = `zB0JoG7vSrU-`,
  _ = `Qmw3lo2yg3Y-`,
  _ = `lzzqqN6opQo-`,
  _ = `NcXSUT9Wrrk-`,
  _ = `h-9-LkDvmE4-`,
  _ = `ZtdjDDcQX4Q-`,
  _ = `ncTrqKkwHVg-`,
  _ = `WaQJkS8Zl-8-`,
  _ = `a2muS1tYn9s-`,
  _ = `_8PD3oDSkC5Y-`,
  _ = `BmRL3GyDFyw-`,
  _ = `_1k7fgO2abtE-`,
  _ = `E9tORfFSTjw-`,
  _ = `HjxSSeO2NmQ-`,
  _ = `zjZlS00iLU4-`,
  _ = {
    thumbnailWidth: `320`,
    TooltipOffset: _,
    ThumbnailContainerOffset: _,
    ThumbnailContents: _,
    Hide: _,
    ImageAndInfoBoxContainer: _,
    ImageContainer: _,
    ThumbnailImage: _,
    NoRecordedContent: _,
    InfoBoxContainer: _,
    Header: _,
    Icon: _,
    DescriptionBlock: _,
    Title: _,
    Description: _,
    ThumbnailHitBoxPadding: _,
    Overlay: _,
    TooltipContents: _,
    TooltipChildren: _,
    TooltipImage: _,
    TooltipImageCtn: _,
    ThumbnailTooltip: _,
    Highlight: _,
    TimeDisplayContainer: _,
    Playhead: _,
    RangeLeft: _,
    RangeRight: _,
    Timestamp: _,
    TooltipInteractionRegion: _,
    StateDescription: _,
    TooltipButtons: _,
    Button: _,
    AddMarker: _,
    GoToClip: _,
    CreateClipButton: _,
    EditMarker: _,
    DeleteMarker: _,
    GoToClipFromMarker: _,
    ViewScreenshot: _,
    TooltipHitBox: _,
    TooltipContainer: _,
    ImageHighlightPosition: _,
    ImageHighlightBlock: _,
    TooltipRangeContainer: _,
    Duration: _,
    RangeIcon: _,
  };
function _(_, _) {
  return (
    _.strRecordingID === _.strRecordingID &&
    _.strClipID === _.strClipID &&
    _.nRecordingOffsetMS === _.nRecordingOffsetMS &&
    _.nRecordingStartOffsetMS === _.nRecordingStartOffsetMS &&
    _.cPxMajorAxis === _.cPxMajorAxis &&
    _.bPreciseTiming == _.bPreciseTiming
  );
}
var _ = class _ {
  k_QueueWaitUntilRequestMS = 10;
  k_nMaxBatchSize = 50;
  m_nMaxCacheSize = 18e5 / _;
  m_LRUTrackerSet = new Set();
  m_mapPromises = new Map();
  m_mapThumbnailImages = new Map();
  m_rgPendingRequest = [];
  m_PendingInfoPromise;
  m_PendingInfoResolve = void 0;
  m_PendingTimer = void 0;
  k_AlreadyResolvedOK = Promise.resolve(!0);
  m_rgThumbnailPerf = [];
  constructor() {
    _(this);
  }
  AddPerfMeasure(_) {
    this.m_rgThumbnailPerf.push(_);
  }
  GetPerfMeasures() {
    if (!this.m_rgThumbnailPerf.length) return null;
    let _ = this.m_rgThumbnailPerf.length,
      _ = this.m_rgThumbnailPerf.reduce((_, _) => _ + _) / _;
    return {
      nMean: _,
      nStdDev: Math.sqrt(
        this.m_rgThumbnailPerf
          .map((_) => (_ - _) ** 2)
          .reduce((_, _) => _ + _) / _,
      ),
      nMax: Math.max(...this.m_rgThumbnailPerf),
      nMin: Math.min(...this.m_rgThumbnailPerf),
      nLength: _,
      nLastVal: this.m_rgThumbnailPerf[_ - 1],
    };
  }
  GetKey(_, _, _, _, _, _, _) {
    let _ = _ + _;
    return `${_}_${_}_${_}_${_ ? _ : _ - (_ % _)}_${_}_${_}`;
  }
  GetThumbnailData(_) {
    let _ = this.m_mapThumbnailImages.get(_);
    return (
      _ &&
        (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
        this.m_LRUTrackerSet.add(_)),
      _
    );
  }
  SetThumbnailData(_, _) {
    if (
      (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
      this.m_LRUTrackerSet.add(_),
      this.m_mapThumbnailImages.set(_, _),
      this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
    ) {
      let _ = this.m_LRUTrackerSet.keys().next().value;
      this.m_LRUTrackerSet.delete(_), this.m_mapThumbnailImages.delete(_);
    }
  }
  ClearThumbnailData() {
    this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear();
  }
  GetThumbnail(_, _, _, _, _, _, _) {
    if (!_) return;
    let _ = this.GetKey(_, _, _, _, _, _, _);
    return this.GetThumbnailData(_);
  }
  GetOrQueueThumbnail(_, _, _, _, _, _, _) {
    if (!_) return;
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    if (!_) {
      let _ = `thumbnail_${_}_${_}_${_}`;
      performance.mark(_),
        this.QueueThumbnailRequest(_, _, _, _, _, _, _).then(() => {
          try {
            let _ = performance.measure(`measure_${_}`, _);
            _ && _.Get().AddPerfMeasure(_.duration);
          } catch (_) {
            _(`CThumbnailCache:: cant measure ${_}, error: ${_}`);
          }
        }),
        (_ = this.GetThumbnailData(_));
    }
    return _;
  }
  QueueThumbnailRequest(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    if (_ && (_.data || _.bIsLoading)) return this.k_AlreadyResolvedOK;
    this.SetThumbnailData(_, {
      data: null,
      bIsLoading: !0,
    }),
      this.m_PendingInfoPromise &&
        (this.m_rgPendingRequest[0].strRecordingID != _ ||
          this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
        (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
        this.FlushPendingInfo()),
      (this.m_PendingInfoPromise &&
        this.m_rgPendingRequest[0].strRecordingID == _) ||
        ((this.m_PendingInfoPromise = new Promise(
          (_) => (this.m_PendingInfoResolve = _),
        )),
        (this.m_PendingTimer = window.setTimeout(
          () => this.FlushPendingInfo(),
          this.k_QueueWaitUntilRequestMS,
        )));
    let _ = {
      gameID: _,
      strRecordingID: _,
      strClipID: _,
      nRecordingOffsetMS: _,
      nRecordingStartOffsetMS: _,
      cPxMajorAxis: _,
      bPreciseTiming: _,
    };
    return (
      this.m_rgPendingRequest.some((_) => _(_, _)) ||
        (this.m_rgPendingRequest.push(_),
        this.m_mapPromises.set(_, this.m_PendingInfoPromise)),
      this.m_PendingInfoPromise
    );
  }
  async FlushPendingInfo() {
    if (this.m_PendingInfoResolve === void 0) return;
    let _ = this.m_PendingInfoResolve,
      _ = this.m_rgPendingRequest;
    (this.m_PendingInfoPromise = void 0),
      (this.m_PendingInfoResolve = void 0),
      (this.m_rgPendingRequest = []),
      (this.m_PendingTimer = void 0),
      await this.InternalLoadMultipleThumbnails(_),
      _();
  }
  async InternalLoadMultipleThumbnails(_) {
    _.sort((_, _) => _.nRecordingOffsetMS - _.nRecordingOffsetMS);
    try {
      let _ = _.map((_) => _.nRecordingOffsetMS * 1e3),
        _ = await _(
          _[0].strRecordingID,
          _[0].strClipID,
          void 0,
          _,
          _[0].cPxMajorAxis,
          _[0].bPreciseTiming,
        );
      _(
        _?.length == _.length,
        `CThumbnailCache.InternalLoadMultipleThumbnails request ${_.length} and got back ${_?.length}`,
      );
      for (let _ = 0; _ < _.length && _ < _?.length; ++_) {
        let _ = _[_],
          _ = this.GetKey(
            _.gameID,
            _.strRecordingID,
            _.strClipID,
            _.nRecordingOffsetMS,
            _.nRecordingStartOffsetMS,
            _.cPxMajorAxis,
            _.bPreciseTiming,
          ),
          _ = _ ? _[_].image_data() : null;
        this.SetThumbnailData(_, {
          data: _,
          bIsLoading: !1,
        });
      }
    } catch (_) {
      _(`Failed to load multiple request thumbnails`, _);
      for (let _ = 0; _ < _.length; ++_) {
        let _ = _[_],
          _ = this.GetKey(
            _.gameID,
            _.strRecordingID,
            _.strClipID,
            _.nRecordingOffsetMS,
            _.nRecordingStartOffsetMS,
            _.cPxMajorAxis,
            _[0].bPreciseTiming,
          );
        this.SetThumbnailData(_, {
          data: null,
          bIsLoading: !1,
        });
      }
    }
  }
  async LoadThumbnail(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _),
      _ = this.GetThumbnailData(_);
    return _ && _.data
      ? !0
      : (this.m_mapPromises.has(_) ||
          this.m_mapPromises.set(
            _,
            this.InternalLoadThumbnail(_, _, _, _, _, _, _),
          ),
        this.m_mapPromises.get(_));
  }
  async InternalLoadThumbnail(_, _, _, _, _, _, _) {
    let _ = this.GetKey(_, _, _, _, _, _, _);
    try {
      let _ = await _(_, _, void 0, [_ * 1e3], _, _);
      if (_?.length > 0) {
        let _ = _ ? _[0].image_data() : null;
        return (
          this.SetThumbnailData(_, {
            data: _,
            bIsLoading: !1,
          }),
          !0
        );
      }
      _(`ThumbnailImage: got empty jpeg ${_.length} list back ${_} @ ${_}`);
    } catch (_) {
      _(`ThumbnailImage: Fail to load thumbnail ${_} @ ${_} with ${_}`),
        this.SetThumbnailData(_, {
          data: null,
          bIsLoading: !1,
        });
    }
    return !1;
  }
  static s_Singleton;
  static Get() {
    return (_.s_Singleton ||= new _()), _.s_Singleton;
  }
};
_([_], _.prototype, `m_mapThumbnailImages`, void 0);
function _(_) {
  let _ = (0, _.useRef)(null),
    _ = _(),
    _ = _(`useThumbnailAsURL`);
  return (
    (0, _.useEffect)(() => {
      if (_ && !_?.token?.reason) {
        let _ = new Blob([_], {
            type: `image/jpeg`,
          }),
          _ = URL.createObjectURL(_);
        (_.current = _), _();
      }
      return () => {
        _.current &&= (URL.revokeObjectURL(_.current), void 0);
      };
    }, [_?.token?.reason, _, _]),
    _.current
  );
}
function _(_, _, _, _, _, _, _) {
  return _(_(() => _.Get().GetOrQueueThumbnail(_, _, _, _, _, _, _))?.data);
}
var _ = 320,
  _ = _.forwardRef(function (_, _) {
    let { globalMS: _, children: _, imgClassName: _, className: _, ..._ } = _,
      _ = _(),
      _ = _.GetGameID(),
      _ = _.GetClipID(),
      _ = _(() => _.GetRecordingMode()),
      _ = _(() => _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_));
    _();
    let _ = _?.nRecordingOffsetMS,
      _ = _(_, _, _?.strRecordingID, _, _?.nStartOffsetMS, _, !1),
      [_, _] = (0, _.useState)();
    return (
      (0, _.useEffect)(() => {
        _ && _(_);
      }, [_]),
      (0, _.jsxs)(`div`, {
        ref: _,
        className: _(_, _[_], _),
        ..._,
        children: [
          (0, _.jsxs)(`div`, {
            className: _(_, _?.strRecordingID && !_ && `ap-Q4oooopI-`, _[_]),
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    _?.strRecordingID
                      ? (0, _.jsx)(`img`, {
                          className: _,
                          src: _,
                        })
                      : (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#GameRecording_PlayerNoContent`),
                        }),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              }),
              (0, _.jsx)(`div`, {
                className: _(_),
                children: _,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _(_),
          }),
        ],
      })
    );
  });
function _() {
  let _ = _(),
    _ = _(() => _.GetGameID()),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(() => _.GetThumbnailEntry());
  if (!_ || _ !== _.Highlight) return null;
  if (_(_.entry))
    return (0, _.jsx)(_, {
      thumbnailEntry: _,
      achievementEntry: _.entry,
      strGameID: _,
    });
  let _ = ``,
    _ = ``;
  return (
    _(_.entry)
      ? (_ = _(_.entry.description) || `#GameRecording_UnknownError`)
      : _(_.entry)
        ? ((_ = _.entry.title ? _.entry.title : _(`#Marker_UserMarker_Title`)),
          (_ = _.entry.description || ``))
        : _(_.entry) &&
          ((_ = _.entry.title || ``), (_ = _.entry.description || ``)),
    !_ && !_
      ? null
      : (0, _.jsx)(_, {
          title: _,
          description: _,
          thumbnailEntry: _,
        })
  );
}
function _(_) {
  let { strGameID: _, thumbnailEntry: _, achievementEntry: _ } = _,
    _ = _(new _(_).GetAppID(), _.achievement_name);
  return _
    ? (0, _.jsx)(_, {
        title: _.name ?? ``,
        description: _.description ?? ``,
        thumbnailEntry: _,
      })
    : null;
}
function _(_) {
  let { title: _, description: _, thumbnailEntry: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              entry: _.entry,
              strMarkerIcon: _.strMarkerIcon,
            }),
          }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `_3-l3Dnlgyfo-`,
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ &&
          (0, _.jsx)(`div`, {
            className: `_00G4k2IDvBQ-`,
            children: _,
          }),
      }),
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
  let { globalPX: _, onMouseEnter: _, onMouseLeave: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(),
    _ = _(() => _.GetRecordingMode());
  return (0, _.jsxs)(_, {
    className: _(_, _[_], _[_]),
    globalMS: _,
    ref: _,
    onMouseEnter: _,
    onMouseLeave: _,
    children: [
      (0, _.jsx)(_, {
        globalMS: _,
      }),
      (0, _.jsx)(_, {
        globalMS: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === _.Highlight
            ? (0, _.jsx)(_, {})
            : (0, _.jsx)(_, {
                globalPX: _,
              }),
          (0, _.jsx)(_, {
            globalMS: _,
          }),
        ],
      }),
    ],
  });
});
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.GetStateDescriptionAtGlobalMS(_));
  return _?.title
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.title,
      })
    : null;
}
function _(_, _) {
  return _.priority - _.priority;
}
function _(_) {
  let { globalMS: _ } = _,
    { setSelectedMarker: _ } = _(),
    _ = _(),
    _ = _(),
    _ = _(() => _.FindRangeEventsAtGlobalMS(_)),
    _ = _.length > 3 ? _.sort(_).slice(0, 3) : _,
    _ = (_, _) => {
      let _ = parseInt(_.duration),
        { nTimelineOffsetMS: _, strTimelineID: _ } =
          _.ConvertGlobalOffsetToTimelineRelativeOffset(_),
        _ = _ - _.valMS + parseInt(_.time),
        [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(_, _, 0, _);
      _.SetPlaytimeFromGlobalMS(_(_)),
        _?.(_._, _, _, _),
        _.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromRangeEvent`),
        _.stopPropagation();
    };
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_, _) =>
      (0, _.jsxs)(
        `div`,
        {
          className: _,
          onClick: (_) => _(_, _),
          children: [
            _.icon &&
              (0, _.jsx)(_, {
                gameID: _.GetGameID(),
                icon: _.icon,
                className: `zjZlS00iLU4-`,
              }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _.title,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(parseInt(_.duration) / 1e3, !1),
            }),
          ],
        },
        `${_.time}_${_}`,
      ),
    ),
  });
}
function _() {
  let _ = _(),
    _ = _(() => _.GetRecordingMode()),
    _ = _(),
    _ = _(() => _.GetThumbnailEntry());
  if (!_) return null;
  let _ = _.GetTimelineOffsetMS(_.strTimelineID),
    _ = _(parseInt(_.entry.time) - _),
    _ = _.MakeRelativeToTimelineEndIfActive(_.strTimelineID, _.valMS),
    _ = ``;
  if (_(_.entry)) {
    let _ = _ + parseInt(_.entry.duration);
    if (_ < 0) {
      let _ = _(Math.abs(_ / 1e3), !1, !1),
        _ = _(Math.abs(_ / 1e3), !1, !1);
      _ = _(`#Duration_WrittenNegation`, _ + ` - ` + _);
    } else {
      let _ = _(_ / 1e3, !1, !1),
        _ = _(_ / 1e3, !1, !1);
      _ = _ + ` - ` + _;
    }
  } else _ = _(_ / 1e3, !1, !0);
  return (0, _.jsx)(`div`, {
    className: _(_, _, _[_]),
    children: _,
  });
}
function _(_) {
  let { globalPX: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertPXToTimelineRelativeMS(_, `end-if-active`));
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _(_ / 1e3, !1, !0),
      })
    : null;
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.GetGameID()),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(() => _.GetThumbnailEntry()),
    _ = [
      (0, _.jsx)(
        _,
        {
          globalMS: _,
        },
        `add_marker`,
      ),
      (0, _.jsx)(
        _,
        {
          globalMS: _,
        },
        `view_clip`,
      ),
    ];
  return (
    _ == _.Highlight &&
      _ &&
      (_(_.entry) || _(_.entry) || _(_.entry)
        ? (_ = [
            (0, _.jsx)(
              _,
              {
                markerInfo: _,
              },
              `create_marker_clip`,
            ),
            (0, _.jsx)(
              _,
              {
                markerInfo: _,
              },
              `view_clip`,
            ),
          ])
        : _(_.entry)
          ? (_ = [
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `create_marker_clip`,
              ),
              (0, _.jsx)(
                _,
                {
                  entry: _.entry,
                  gameID: _,
                },
                `view_screen`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `view_clip`,
              ),
            ])
          : _(_.entry) &&
            (_ = [
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `edit_user`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `create_marker_clip`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `delete_user`,
              ),
              (0, _.jsx)(
                _,
                {
                  markerInfo: _,
                },
                `view_clip`,
              ),
            ])),
    (0, _.jsx)(`div`, {
      className: _,
      children: _,
    })
  );
}
function _(_) {
  let { setSelectedMarker: _ } = _(),
    { markerInfo: _ } = _,
    _ = _(),
    _ = _(() => _.ShouldModeShowClipControls()),
    _ = _(() =>
      _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_.nGlobalMS.valMS),
    ),
    _ = _(),
    _ = _();
  return !_?.strRecordingID || !_
    ? null
    : (0, _.jsx)(_, {
        toolTipContent: _(
          _ ? `#RecordingState_Clip_LowDiskSpace` : `#TimelineDialog_ClipVideo`,
        ),
        direction: `top`,
        bTopmost: !0,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: (_) => {
            let _ = _,
              _ = _;
            _(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
            let [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
              _.strTimelineID,
              _.nGlobalMS.valMS,
              _,
              _,
            );
            _.SetPlaytimeFromGlobalMS(_(_)),
              _?.(_.entry._, _.strTimelineID, _, _),
              _(),
              _.ReportTrackedAction(`/GameRecording/Tooltip/ClipFromHighlight`),
              _.stopPropagation();
          },
          children: (0, _.jsx)(_, {}),
        }),
      });
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS)),
    { onNavigateToClip: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_ViewClip`),
        direction: `top`,
        bTopmost: !0,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            _ &&
              (_.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/${_.entry.type}`,
              ),
              _(_.clipID));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#Marker_Action_Delete`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: (_) => {
        _(_.entry) &&
          (_.ReportTrackedAction(
            `/GameRecording/Marker/Delete/${_.entry.type}`,
          ),
          _.RemoveUserMarker(_.strTimelineID, _.entry._),
          _.SetThumbnailComponent(null));
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { markerInfo: _ } = _,
    _ = _(),
    _ = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#Marker_Action_Edit`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: (_) => {
        if (!_(_.entry)) return;
        _.ReportTrackedAction(`/GameRecording/Marker/Edit/${_.entry.type}`);
        let _ = (0, _.jsx)(_, {
          entry: _.entry,
          playbackCoordinator: _,
          fnClearSelection: _,
          strTimelineID: _.strTimelineID,
        });
        _(_, _(_)), _.stopPropagation(), _.preventDefault();
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { entry: _, gameID: _ } = _,
    _ = _.handle,
    { onNavigateToScreenshot: _ } = _();
  return (0, _.jsx)(_, {
    toolTipContent: _(`#TimelineDialog_ViewScreenshot`),
    direction: `top`,
    bTopmost: !0,
    children: (0, _.jsx)(`div`, {
      className: _(_, _),
      onClick: () => {
        _ &&
          (_.ReportTrackedAction(`/GameRecording/Tooltip/Screenshot`), _(_, _));
      },
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _();
  return _(() => _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_))
    ?.strRecordingID
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_AddMarker`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            _.AddUserMarkerAtGlobalMS(
              _(_),
              `/GameRecording/AddMarker/Thumbnail`,
              null,
            ),
              _.SetPlaytimeFromGlobalMS(_(_));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { globalMS: _ } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToClipOrNone(_)),
    { onNavigateToClip: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineDialog_ViewClip`),
        direction: `top`,
        children: (0, _.jsx)(`div`, {
          className: _(_, _),
          onClick: () => {
            _ &&
              (_.ReportTrackedAction(
                `/GameRecording/Tooltip/ViewClip/timeline`,
              ),
              _(_.clipID));
          },
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
var _ = _.memo(function (_) {
    let _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = (0, _.useCallback)(
        (_) => {
          if (!_) return;
          let _ = _.currentTarget.getBoundingClientRect(),
            _ = _(_.clientX - _._, 0, _.width),
            _ = _.ConvertPXOffsetToGlobalMS(_, !1);
          _ && _.SetPlaytimeFromGlobalMS(_(_), void 0, void 0, !0);
        },
        [_, _, _],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          if (!_) return;
          let _ = _.currentTarget.getBoundingClientRect(),
            _ = _(_.clientX - _._, 0, _.width),
            _ = _.ConvertPXOffsetToGlobalMS(_, !1);
          _ &&
            (_(_, _(_), !1, {
              bDisableMouseOverlay: !0,
              bForcePopup: !0,
              bAlwaysOnTop: !0,
            }),
            _.preventDefault(),
            _.stopPropagation());
        },
        [_, _, _],
      );
    return (
      _(`click`, _),
      _(`contextmenu`, _),
      (0, _.jsx)(_, {
        globalMouseXPX: _.globalMouseXPX.valPX || 0,
      })
    );
  }),
  _ = _.memo(function (_) {
    let { globalMouseXPX: _ } = _,
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => {
        if (_.GetThumbnailComponent()) return _.GetThumbnailPosition();
      }),
      [_, _] = (0, _.useState)(),
      [_, _] = (0, _.useState)();
    return (
      (0, _.useEffect)(() => {
        isNaN(_) ? !_ && _ && _(_) : _(_);
      }, [_, _, _, _, _]),
      (0, _.jsx)(`div`, {
        className: _,
        style: {
          transform: `translateX( calc(${_}px - 50%))`,
        },
        children: (0, _.jsx)(_, {
          globalPX: _,
          setInteractingWithThumbnail: _,
          bInteractingWithThumbnail: _,
        }),
      })
    );
  });
function _(_) {
  let {
      globalPX: _,
      setInteractingWithThumbnail: _,
      bInteractingWithThumbnail: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetRecordingMode() === `Overlay`),
    _ = _(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
    _ = _(() => _.GetTimelineParentCtnRef()),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetThumbnailComponent()),
    _ = _(),
    _ = _({
      toolTipContent: (0, _.jsx)(_, {
        globalPX: _,
        ref: _,
        onMouseEnter: () => _(!0),
        onMouseLeave: (_) => _(!1),
      }),
      direction: _ ? `bottom` : `top`,
      nDelayShowMS: 0,
      nBodyDistance: 0,
      nAllowOffscreenPx: 0,
    }),
    { setHovered: _, setTarget: _ } = _.stateHandlers,
    _ = (0, _.useCallback)(() => {
      _(!1),
        _(!1),
        _.current && _.current(),
        (_.current = null),
        _.GetAutoScrollPaused() && _.SetAutoScrollPauseTimeout(),
        _.SetThumbnailComponent(null);
    }, [_, _, _]),
    _ = (0, _.useCallback)(
      (_, _) => {
        if (!_.current || !_.current) return;
        let _ = _.current.getBoundingClientRect(),
          _ = _.left,
          _ = _.right,
          _ = _.top,
          _ = _.bottom;
        if (_.current) {
          let _ = _.current.getBoundingClientRect();
          _ ? (_ = _.bottom) : (_ = _.top);
        }
        (_ <= _ || _ >= _ || _ <= _ || _ >= _) && _();
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _.GetThumbnailComponent();
        (_ && _ !== _.Highlight) || _(_.clientX, _.clientY);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_.clientX, _.clientY);
      },
      [_],
    );
  _(
    `mouseenter`,
    (0, _.useCallback)(() => {
      _(!0), _(_.current);
      let _ = _(_.current);
      _ &&
        !_.current &&
        (_.addEventListener(`mousemove`, _),
        _.addEventListener(`mouseup`, _),
        (_.current = () => {
          _.removeEventListener(`mousemove`, _),
            _.removeEventListener(`mouseup`, _);
        }));
    }, [_, _, _, _]),
  ),
    (0, _.useEffect)(() => {
      let _ = (_) => {
        let _ = _.GetThumbnailComponent();
        (_ && _ === _.Playhead) ||
          _ === _.RangeLeft ||
          _ === _.RangeRight ||
          (_.current && !_(_.current, _.relatedTarget) && _());
      };
      return (
        _ && _.addEventListener(`mouseleave`, _),
        () => _ && _.removeEventListener(`mouseleave`, _)
      );
    }, [_, _, _]),
    (0, _.useEffect)(() => _, [_]);
  let _ = (_ || _) && _ && !_;
  return (0, _.jsxs)(`div`, {
    ref: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _(_, _ && `_52Luj95k6TU-`),
      }),
      !!_ && _.tooltip,
    ],
  });
}
var _ = `hmHZe5aDrq8-`,
  _ = `VE-8JY5P2Qo-`,
  _ = `bvHF-aIx6oc-`,
  _ = `EFP0lnhKJeo-`,
  _ = `MkCCKg4MUdU-`,
  _ = `_1xOfco9qmxw-`,
  _ = `fXvcT3pVP7Q-`,
  _ = `_2ytscAh4R6M-`,
  _ = 500,
  _ = (0, _.memo)(function () {
    let [_, _] = (0, _.useState)(`none`),
      _ = _(),
      _ = _(),
      _ = _();
    return !_ || !_ || !_
      ? null
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(_, {
            activeControlState: _,
            setActiveControlState: _,
          }),
        });
  }),
  _ = (0, _.memo)(function (_) {
    let { activeControlState: _, setActiveControlState: _ } = _,
      [_, _] = (0, _.useState)(),
      [_, _] = (0, _.useState)(),
      _ = _(),
      _ = _(),
      _ = _(),
      _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
      _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
      _ = (0, _.useCallback)(
        (_) => {
          _(_), _.SetAutoScrollPauseTimeout();
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _(_), _.SetAutoScrollPauseTimeout();
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ === `none` && _.stopPropagation();
        },
        [_],
      ),
      _ = (0, _.useCallback)(
        (_) => {
          _ === `none` && _.stopPropagation();
        },
        [_],
      );
    return (0, _.jsx)(`div`, {
      className: _(_, _ !== `none` && `r9kdAFASyBY-`),
      onMouseOver: _,
      onMouseOut: _,
      onFocus: _,
      onBlur: _,
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            isActive: _ === `left`,
            setControlState: _,
            setRangeControlPX: _,
            pxOffset: _,
          }),
          (0, _.jsx)(_, {
            startOffsetPX: (_ === `left` && _) || _,
            endOffsetPX: (_ === `right` && _) || _,
            className: _,
          }),
          (0, _.jsx)(_, {
            isActive: _ === `right`,
            setControlState: _,
            setRangeControlPX: _,
            pxOffset: _,
          }),
        ],
      }),
    });
  });
function _(_, _, _) {
  let _ = _.GetVisualWindowStartPX() - _.GetTimelineMarginWidth(),
    _ = _ + _.GetVisualWidth(),
    _ = Math.max(0, _ + 3),
    _ = Math.min(_.GetScrollableWidthPX(), _ - 3);
  _(_(_, _, _));
}
function _(_, _, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth());
  (0, _.useEffect)(
    () => () => {
      _.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null));
    },
    [],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        _(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null);
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          _.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX()));
        }
        _.current = _;
      }
    },
    [_],
  );
  (0, _.useEffect)(() => {
    _.current &&
      (cancelAnimationFrame(_.current), (_.current = null), (_.current = null));
    let _ = _ * (1 - _),
      _ = _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
      _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
    if (_.valPX > _) _(_), _(`right`), _.SetThumbnailComponent(_.RangeRight);
    else {
      if (_.valPX < _ && !_.BReachedMinScroll()) {
        if (_.valPX > _.current) _.current = !0;
        else if (_.valPX < _.current || !_.current) {
          let _ = Math.min(_, _),
            _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _;
          (_.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMinScroll),
          )),
            (_.current = !1);
        }
        _(_.valPX, _, _);
      } else if (_.valPX > _ && _ > _ && !_.BReachedMaxScroll()) {
        if (_.valPX < _.current) _.current = !0;
        else if (_.valPX > _.current || !_.current) {
          let _ = (_) => {
              let _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
              return _.BReachedMaxScroll() || _ <= _;
            },
            _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          (_.current = requestAnimationFrame((_) => _(_, _, _.valPX, _, _))),
            (_.current = !1);
        }
        _(_.valPX, _, _);
      } else _(_(_.valPX, 0, _));
      _.current = _.valPX;
    }
  }, [_.valPX, _.valMS, _.valPX, _, _, _, _, _, _]);
}
var _ = (0, _.memo)(function (_) {
  let {
      isActive: _,
      setControlState: _,
      setRangeControlPX: _,
      pxOffset: _,
    } = _,
    _ = _();
  return _
    ? (0, _.jsx)(_, {
        setControlState: _,
        setRangeControlPX: _,
        pxOffset: _,
      })
    : (0, _.jsx)(_, {
        offsetMS: _.valMS,
        direction: `left`,
        setControlState: _,
        setRangeControlPX: _,
      });
});
function _(_) {
  let { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return (
    _(_(), _, _, _, _, _),
    (0, _.useEffect)(() => {
      isNaN(_) ||
        (_.SetThumbnailPosition(_), _(5, _(_.ConvertPXOffsetToGlobalMS(_))));
    }, [_, _, _]),
    (0, _.jsx)(_, {
      offsetPX: _,
      direction: `left`,
    })
  );
}
var _ = (0, _.memo)(function (_) {
  let {
      isActive: _,
      setControlState: _,
      setRangeControlPX: _,
      pxOffset: _,
    } = _,
    _ = _();
  return _
    ? (0, _.jsx)(_, {
        setControlState: _,
        setRangeControlPX: _,
        pxOffset: _,
      })
    : (0, _.jsx)(_, {
        offsetMS: _.valMS,
        direction: `right`,
        setControlState: _,
        setRangeControlPX: _,
      });
});
function _(_) {
  let { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(),
    _ = _();
  return (
    _(_(), _, _, _, _, _),
    (0, _.useEffect)(() => {
      isNaN(_) ||
        (_.SetThumbnailPosition(_), _(5, _(_.ConvertPXOffsetToGlobalMS(_))));
    }, [_, _, _]),
    (0, _.jsx)(_, {
      offsetPX: _,
      direction: `right`,
    })
  );
}
function _(_, _, _, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetScrollWindowWidth());
  (0, _.useEffect)(
    () => () => {
      _.current &&
        (cancelAnimationFrame(_.current),
        (_.current = null),
        (_.current = null));
    },
    [],
  );
  let _ = _.useCallback(
    (_, _, _, _, _) => {
      if (_(_))
        _(_(_.GetVisualWindowStartPX() + _, 0, _.GetScrollableWidthPX())),
          cancelAnimationFrame(_.current),
          (_.current = null),
          (_.current = null);
      else {
        if (
          ((_.current &&= requestAnimationFrame((_) => _(_, _, _, _, _))),
          _.current)
        ) {
          let _ = ((_ - _.current) / _) * _;
          _.ScrollBy(_), _((_) => _(_ + _, 0, _.GetScrollableWidthPX()));
        }
        _.current = _;
      }
    },
    [_],
  );
  (0, _.useEffect)(() => {
    _.current &&
      (cancelAnimationFrame(_.current), (_.current = null), (_.current = null));
    let _ = _ * (1 - _),
      _ = _ * _,
      _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
      _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
    if (_.valPX < _) _(_), _(`left`), _.SetThumbnailComponent(_.RangeLeft);
    else {
      if (_.valPX > _ && !_.BReachedMaxScroll()) {
        if (_.valPX < _.current) _.current = !0;
        else if (_.valPX > _.current || !_.current) {
          let _ = Math.max(_, _),
            _ = _.valPX - _,
            _ = _(Math.abs(_ / (_ - _)), 0, 1) * _;
          (_.current = requestAnimationFrame((_) =>
            _(_, _, _.valPX, _, _.BReachedMaxScroll),
          )),
            (_.current = !1);
        }
        _(_.valPX, _, _);
      } else if (
        _.valPX < _ &&
        _ < _ &&
        _.valPX <= _.current &&
        !_.BReachedMinScroll()
      ) {
        if (_.valPX > _.current) _.current = !0;
        else if (_.valPX < _.current || !_.current) {
          let _ = _.valPX - _,
            _ = _(Math.abs(_ / _), 0, 1) * _,
            _ = (_) =>
              _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS) > _ ||
              _.BReachedMinScroll();
          (_.current = requestAnimationFrame((_) => _(_, _, _.valPX, _, _))),
            (_.current = !1);
        }
        _(_.valPX, _, _);
      } else _(_(_.valPX, 0, _));
      _.current = _.valPX;
    }
  }, [_.valMS, _.valPX, _, _, _, _, _, _.valPX, _]);
}
function _(_) {
  let {
      offsetMS: _,
      direction: _,
      setControlState: _,
      setRangeControlPX: _,
    } = _,
    _ = _(),
    _ = _(() => _.ConvertGlobalMSToGlobalPXOffset(_));
  (0, _.useEffect)(
    () => (
      _(void 0),
      () => {
        _(_);
      }
    ),
    [_, _],
  );
  let _ = (0, _.useCallback)(
      (_) => {
        let _ = _(_),
          _,
          _,
          _ = () => {
            _(_),
              _.SetThumbnailComponent(
                _ === `left` ? _.RangeLeft : _.RangeRight,
              ),
              _();
          };
        _.addEventListener(`mousemove`, _),
          (_ = () => _.removeEventListener(`mousemove`, _));
        let _ = () => {
          _(`none`), _.SetThumbnailComponent(null), _(), _();
        };
        _.addEventListener(`mouseup`, _),
          (_ = () => _.removeEventListener(`mouseup`, _));
      },
      [_, _, _],
    ),
    _ = (_) => {
      _.SetThumbnailComponent(_ === `left` ? _.RangeLeft : _.RangeRight);
    },
    _ = (_) => {
      _.SetThumbnailComponent(null);
    };
  return (0, _.jsx)(`div`, {
    className: _,
    onMouseDown: _,
    onMouseOver: _,
    onFocus: _,
    onMouseOut: _,
    onBlur: _,
    children: (0, _.jsx)(_, {
      offsetPX: _,
      direction: _,
    }),
  });
}
var _ = (0, _.memo)(function (_) {
    let { startOffsetPX: _, endOffsetPX: _, className: _ } = _;
    if (isNaN(_) || isNaN(_)) return null;
    let _ = {
      width: _ - _ || 0,
      transform: `translateX(${_}px)`,
    };
    return (0, _.jsx)(`div`, {
      className: _(_, _),
      style: _,
    });
  }),
  _ = (0, _.memo)(function (_) {
    let { direction: _, offsetPX: _ } = _,
      _ = {
        transform: `translateX( calc( ${_}px - 50%) )`,
      },
      _ = _(),
      _ = _(() => _.GetThumbnailComponent() === _.Playhead);
    return (0, _.jsx)(`div`, {
      style: _,
      className: _(_),
      children: (0, _.jsx)(`div`, {
        className: _(_, _ === `left` && void 0, _ && `o23F9bJf68E-`),
        children: (0, _.jsx)(_, {
          innerFill: `#171d25`,
          direction: _,
        }),
      }),
    });
  });
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 3 36`,
    fill: `none`,
    style: {
      transform: `rotate(${_.direction === `right` ? 180 : 0}deg)`,
    },
    children: [
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 0)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 10)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 20)`,
      }),
      (0, _.jsx)(`rect`, {
        fill: `currentColor`,
        width: `3`,
        height: `6.00006`,
        transform: `matrix(-1 0 0 1 3 30)`,
      }),
    ],
  });
}
var _ = `peJfRpya9Fs-`,
  _ = 100,
  _ = _.memo(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleWindowRelativeTimelines()),
      _ = _().GetRecordingMode(),
      _ = [],
      _ = ``;
    for (let _ of _) {
      let _ = _.GetTimeRecorded(_.timelineID),
        _ = _(_);
      _ != _ &&
        (_.push({
          timeline: _,
          strLabel: _,
        }),
        (_ = _));
    }
    for (let _ = _.length - 2; _ >= 0; _--) {
      let _ = _[_];
      _[_ + 1].timeline.nVisibleStartPX - _.timeline.nVisibleStartPX >= _ ||
        _.splice(_, 1);
    }
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.timeline.nVisibleStartPX,
            label: _.strLabel,
            recordingMode: _,
          },
          _.timeline.timelineID,
        ),
      ),
    });
  });
function _(_) {
  let { label: _, startPX: _, recordingMode: _ } = _,
    _ = _ == _.Overlay;
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `r-oc0eIT1Lw-`),
    style: {
      transform: `translateX(${_}px)`,
    },
    children: _,
  });
}
var _ = `rpb9NP30tgc-`,
  _ = `JCH5UEpUzxo-`,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleRecordings());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.nStartPX,
            endPX: _.nEndPX,
            isActive: _.bIsActive,
            recordingType: _.recordingType,
          },
          _.recordingID,
        ),
      ),
    });
  });
function _(_) {
  let { isActive: _, endPX: _, startPX: _, recordingType: _ } = _,
    _ = {
      width: _ - _ || 0,
      transform: `translateX(${_}px)`,
    },
    _ = _(),
    _ = _ === 4,
    _ = _ === 2;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _(
          _,
          _ && `xg0PXeGNr6o-`,
          _ && `DlYcvPsKhnQ-`,
          _ && `pbiBKOrHy28-`,
        ),
        style: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          endPX: _,
        }),
    ],
  });
}
function _(_) {
  let { endPX: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => _.GetRecordingMode() === `Overlay`),
    _ = _(_.GetGameID()),
    _ = _(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
    _ = _(() => {
      let _ = _.GetLiveEdgeBufferWindowStartMS();
      return _.ConvertGlobalMSToGlobalPXOffset(_.valMS);
    });
  if (!_ || _ !== _.BackgroundRecording) return null;
  let _ = {
    width: _ - _ || 0,
    transform: `translateX(${_}px)`,
  };
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `ObPDU8jrJGI-`),
    style: _,
  });
}
var _ = `etyWD-mczjA-`,
  _ = (0, _.memo)(function (_) {
    let _ = _(),
      _ = _(() => _.GetVisibleClips());
    return (0, _.jsx)(_.Fragment, {
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            startPX: _.pxClipStart,
            endPX: _.pxClipEnd,
          },
          _.clipID,
        ),
      ),
    });
  }),
  _ = (0, _.memo)(function (_) {
    let { endPX: _, startPX: _ } = _,
      _ = {
        width: _ - _ || 0,
        transform: `translateX(${_}px)`,
      };
    return (0, _.jsx)(`div`, {
      className: _,
      style: _,
    });
  }),
  _ = `r7Pr1Bv8r30-`,
  _ = `V3xSKJyklXQ-`,
  _ = `nT24tktVM-s-`,
  _ = `a9purv61CPI-`,
  _ = `O-J-KNmIhN8-`,
  _ = `lMpHX8arl8s-`,
  _ = `hMUPhnvIP90-`,
  _ = `M5wPU20T76E-`,
  _ = `H3EDFnaZgvI-`,
  _ = `iAKyxjjcF38-`,
  _ = `pEzP-JpCCcQ-`,
  _ = `hBDI48p9XRY-`,
  _ = `PZt-x5Tu8rg-`,
  _ = `_57e4oWLUba0-`,
  _ = `diJRy3nTnTM-`;
function _() {
  let _ = _(_().GetGameID());
  return _ === _.NotRecording || _ === _.NotRunning ? null : (0, _.jsx)(_, {});
}
function _(_) {
  let _ = _(),
    _ = _(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
    _ = _.useCallback(() => {
      _.SetHidePlayer(!1), _.GetGameRecordingVideo().Play();
      let _ = _.GetLiveEdgeMS();
      _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_);
    }, [_]);
  return (0, _.jsx)(_, {
    className: _,
    toolTipContent: _(_ ? `#Playback_AtLatest` : `#Playback_JumpToLatest`),
    direction: `bottom`,
    children: (0, _.jsx)(_, {
      onClick: _,
      className: _(_, _ && `FuL7350j26I-`),
      children: (0, _.jsx)(_, {
        className: _(_),
      }),
    }),
  });
}
var _ = (0, _.forwardRef)(function (_, _) {
    let _ = _();
    return _(() => !_.BEmpty())
      ? (0, _.jsx)(_, {
          ..._,
          timelineView: _,
          ref: _,
        })
      : (0, _.jsx)(_, {
          ref: _,
        });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    return (0, _.jsx)(`div`, {
      ref: _,
      className: _(_, _.className),
    });
  }),
  _ = (0, _.forwardRef)(function (_, _) {
    let _ = _(),
      { children: _, className: _, timelineView: _, disableZoom: _ } = _,
      [_, _] = (0, _.useState)(),
      _ = _.useCallback(
        (_) => {
          let _ = _.target.getBoundingClientRect();
          _.SetScrollWindowOffset(_._), _.SetScrollWindowWidth(_.width), _(_);
        },
        [_],
      ),
      _ = _(_),
      _ = _.useCallback(
        (_) => {
          if (_.ctrlKey && !_) {
            let _ = _ ? (_.clientX - _._) / _.width : 0.5;
            _.deltaY > 0
              ? _.ZoomOut(_.deltaY / 100, _)
              : _.ZoomIn(-_.deltaY / 100, _);
          } else _.ScrollBy(_.deltaY);
        },
        [_, _, _],
      );
    return (
      _(_, _),
      (0, _.jsxs)(`div`, {
        ref: _,
        onWheel: _,
        onMouseOver: () => _.SetAutoScrollPaused(!0),
        onFocus: () => {},
        onMouseLeave: () => _.SetAutoScrollPauseTimeout(),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsxs)(`div`, {
                ref: _,
                className: _(_, _),
                children: [
                  _,
                  (0, _.jsx)(_, {
                    timelineView: _,
                  }),
                ],
              }),
              _.GetRecordingMode() === _.Overlay && (0, _.jsx)(_, {}),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: !_.GetGamepadMode() && (0, _.jsx)(_, {}),
          }),
        ],
      })
    );
  });
function _(_) {
  let { timelineView: _ } = _,
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.BReachedMaxScroll());
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _(_, _ === 0 && `geyoRt0NNcM-`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, _ && `geyoRt0NNcM-`),
      }),
    ],
  });
}
function _() {
  let [_, _] = (0, _.useState)({
      scrollBarWidth: 0,
      scrollBarXOffset: 0,
    }),
    _ = _.useCallback((_) => {
      let _ = _.target.getBoundingClientRect();
      _({
        scrollBarWidth: _.width,
        scrollBarXOffset: _._,
      });
    }, []),
    _ = _(),
    _ = _(() => _.GetScrollableWidthPX() + 2 * _.GetTimelineMarginWidth()),
    _ = _(() => _.GetVisualWidth()),
    _ = (0, _.useMemo)(
      () => (_ * _.scrollBarWidth) / _ || 0,
      [_, _.scrollBarWidth, _],
    ),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(
      _,
      Math.round(_) === Math.round(_.scrollBarWidth) && `cyfpsKb1Pow-`,
    ),
    ref: _,
    children: [
      (0, _.jsx)(_, {
        timelineView: _,
        scrollSize: _,
      }),
      (0, _.jsx)(_, {
        scrollSize: _,
        timelineView: _,
        timelineWidth: _,
        thumbWidth: _,
      }),
    ],
  });
}
function _(_) {
  let { timelineView: _, scrollSize: _ } = _,
    _ = _(),
    _ = _(_, _),
    _ = _(() => _.GetTimelineMarginWidth()),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = _ + _;
        return _((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth);
      },
      [_.scrollBarWidth, _, _],
    );
  return (0, _.jsxs)(`div`, {
    className: _,
    ..._,
    children: [
      (0, _.jsx)(_, {
        timelineView: _,
        playbackCoordinator: _,
        fnConvertGlobalPXToTrackPX: _,
        scrollBarWidth: _.scrollBarWidth,
      }),
      (0, _.jsx)(_, {
        timelineView: _,
        fnConvertGlobalPXToTrackPX: _,
      }),
    ],
  });
}
function _(_, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = (0, _.useCallback)(
      (_) => _((_ * _) / _.scrollBarWidth),
      [_.scrollBarWidth, _],
    ),
    _ = (0, _.useCallback)(() => {
      if (!_.current) return;
      let _ = _.GetScrollWindowWidth(),
        _ = _.GetVisualWindowStartPX() + _ / 2;
      if (_.current.valPX > _ - _ * 0.1 && _.current.valPX < _ + _ * 0.1)
        return;
      let _ = _.GetScrollableWidthPX() * 0.005,
        _ = _.current.valPX - _;
      if (Math.abs(_) > _) {
        let _ = _ > 0 ? _ : -_;
        _.ScrollToOffsetCentered(_ + _),
          (_.current = requestAnimationFrame(() => _()));
      } else _.ScrollToOffsetCentered(_.current.valPX);
    }, [_]),
    _ = (0, _.useCallback)(
      (_) => {
        (_.current = _(_.clientX - _.scrollBarXOffset)),
          (_.current = requestAnimationFrame(() => _()));
      },
      [_, _, _.scrollBarXOffset],
    ),
    _ = (0, _.useCallback)(() => {
      _.current && cancelAnimationFrame(_.current);
    }, []),
    _ = (0, _.useCallback)(
      (_) => {
        _.current = _(_.clientX - _.scrollBarXOffset);
      },
      [_, _.scrollBarXOffset],
    );
  return (
    (0, _.useEffect)(
      () => () => {
        _.current && cancelAnimationFrame(_.current);
      },
      [],
    ),
    {
      onMouseDown: _,
      onMouseMove: _,
      onMouseUp: _,
      onMouseLeave: _,
    }
  );
}
function _(_) {
  let {
      timelineView: _,
      playbackCoordinator: _,
      fnConvertGlobalPXToTrackPX: _,
      scrollBarWidth: _,
    } = _,
    _ = _(() => _.GetHidePlayer()),
    _ = _(() => {
      let _ = _.GetGlobalMSPlaytime();
      if (_ && _.BInitialized()) {
        let _ = Math.floor(_.ConvertGlobalMSToGlobalPXOffset(_.valMS));
        return _(_);
      }
      return null;
    });
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        onClick: () => {
          let _ = _.GetGlobalMSPlaytime();
          _ && (_ = _.GetLiveEdgeMS()), _.ScrollToCenteredGlobalMS(_.valMS);
        },
        style: {
          transform: `translateX(${_ ? _ : _}px)`,
        },
        children: (0, _.jsx)(_, {}),
      })
    : null;
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `52`,
    height: `31`,
    viewBox: `0 0 52 31`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M26 31L51.1147 0.25H0.885263L26 31Z`,
      fill: `#D9D9D9`,
    }),
  });
}
function _(_) {
  let { timelineView: _, fnConvertGlobalPXToTrackPX: _ } = _,
    _ = _(),
    _ = _(),
    _ = _(() => {
      if (_ && _.BInitialized()) {
        let _ = Math.floor(
            _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalStartMS.valMS),
          ),
          _ = Math.floor(
            _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalEndMS.valMS),
          );
        if (!isNaN(_) && !isNaN(_))
          return {
            rangeStartPX: _(_),
            rangeEndPX: _(_),
          };
      }
      return null;
    });
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        onClick: () => {
          _.ScrollToCenteredGlobalMS(_.nGlobalStartMS.valMS);
        },
        style: {
          width: _.rangeEndPX - _.rangeStartPX,
          transform: `translateX(${_.rangeStartPX}px)`,
        },
      })
    : null;
}
function _(_) {
  let { scrollSize: _, timelineWidth: _, thumbWidth: _, timelineView: _ } = _,
    { thumbPositionPX: _, onMouseDown: _, bHiglightThumb: _ } = _(_, _, _, _);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `jBCmf-dRAeA-`),
    style: {
      width: _,
      transform: `translateX(${_}px)`,
    },
    onMouseDown: _,
  });
}
function _(_, _, _, _) {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(0),
    _ = _(() => {
      let _ = _.BInitialized(),
        _ = _.GetVisualWindowStartPX();
      return _ ? _((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth - _) : 0;
    }),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    if (_.GetAutoScrollPaused())
      return (
        _(!0),
        (_.current = window.setTimeout(() => {
          _(!1);
        }, 500)),
        () => window.clearTimeout(_.current)
      );
  }, [_, _]);
  let _ = (0, _.useCallback)(
      (_) => {
        _(_), _(!0);
        let _ = _.nativeEvent.offsetX,
          _ = _.GetTimelineParentCtnRef() ?? _(_),
          _,
          _,
          _,
          _ = (_) => {
            _(_.clientX - _.scrollBarXOffset - _);
          };
        _.addEventListener(`mousemove`, _),
          (_ = () => _.removeEventListener(`mousemove`, _));
        let _ = () => {
          _(!1), _(), _(), _();
        };
        _.addEventListener(`mouseup`, _),
          _.addEventListener(`mouseleave`, _),
          (_ = () => _.removeEventListener(`mouseup`, _)),
          (_ = () => _.removeEventListener(`mouseleave`, _));
      },
      [_, _.scrollBarXOffset, _],
    ),
    _ = (0, _.useMemo)(
      () => (_ ? _(_, 0, _.scrollBarWidth - _) : _),
      [_, _, _, _.scrollBarWidth, _],
    );
  return (
    (0, _.useEffect)(() => {
      if (_) {
        let _ = (_ * _) / _.scrollBarWidth;
        _.ScrollToOffset(_);
      }
    }, [_, _.scrollBarWidth, _, _, _]),
    {
      thumbPositionPX: _,
      onMouseDown: _,
      bHiglightThumb: _,
    }
  );
}
function _(_, _) {
  let _ = _(
    () =>
      !_.GetAutoScrollPaused() &&
      _.GetGameRecordingVideo().BVideoElementPlaying(),
  );
  (0, _.useEffect)(() => {
    if (!_) return () => {};
    let _ = !1,
      _ = _.GetGlobalMSPlaytime(),
      _ = Date.now(),
      _ = (_) => {
        let _ = Date.now(),
          _ = _ - _;
        _.ScrollToCenteredGlobalMS(_.valMS + _);
        let _ = _.GetGlobalMSPlaytime();
        _.valMS !== _.valMS && ((_ = _), (_ = _)),
          _ || requestAnimationFrame(_);
      };
    return requestAnimationFrame(_), () => (_ = !0);
  }, [_, _, _]);
}
var _ = `ntKPAM1NZ9k-`,
  _ = `JXv-qDT9fmY-`,
  _ = `Rg3Qyz2aIKM-`;
function _(_) {
  let _ = _(),
    _ = _(() => _.GetVisibleTimelines());
  return (0, _.jsx)(_.Fragment, {
    children: _.flatMap((_) =>
      _.phaseOffsets.map((_, _) =>
        (0, _.createElement)(_, {
          ..._,
          timeline: _,
          key: `${_.timelineID}_${_}`,
        }),
      ),
    ),
  });
}
function _(_) {
  let { timelineOffsetMS: _, nDurationMS: _, phase: _, timeline: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
  });
}
function _(_) {
  let {
      children: _,
      timeline: _,
      timelineOffsetMS: _,
      nDurationMS: _,
      phase: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _()?.valPX || -1,
    _ = _(),
    [_] = _(),
    {
      pxStart: _,
      pxWidth: _,
      bHighlight: _,
    } = _(() => {
      let _ = _.GetPhaseToHighlight();
      return {
        pxStart: _.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS + _),
        pxWidth: _.ConvertDurationMSToDeltaPX(_),
        bHighlight:
          _ && _[0] === _.timelineID && _[1] === _.background_timeline_offset,
      };
    }),
    _ = (_ || _) && _ >= _ && _ <= _ + _,
    [_, _] = _(),
    _ = () => {
      let _ = _.GetLoader(),
        _ = _.GetTimelineData(_.timelineID),
        _ = _.GetTimelineMetadata(_.timelineID),
        _ = _.m_rgPhases.find((_) => parseInt(_.time) === _);
      _ &&
        _({
          entry: _,
          timeline: _,
        });
    },
    _ = () => _(void 0);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `_7iKrpiRqfb4-`, _ && `-VGOLVELQNE-`),
    style: {
      transform: `translateX( ${_}px )`,
      width: `${_}px`,
    },
    onMouseOver: _,
    onMouseLeave: _,
    onFocus: _,
    onBlur: _,
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
var _ = `YTX0fQkY6BM-`;
function _(_) {
  let _ = _(),
    _ = _(() => _.GetVisibleTimelines());
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          timeline: _,
        },
        _.timelineID,
      ),
    ),
  });
}
function _(_) {
  let { timeline: _ } = _,
    _ = _(),
    _ = _(() => _.GetVisibleTimelineHighlights(_.timelineID) || []),
    _ = _(() => _.GetTimelineOffsetMS(_.timelineID)),
    _ = _.globalOffsetMS - _;
  return (0, _.jsx)(_.Fragment, {
    children: _.filter((_) => _(_) === `range_highlight`).map((_) =>
      (0, _.jsx)(
        _,
        {
          entry: _,
          timeline: _,
          timelineView: _,
          timelineOffset: _,
        },
        _._,
      ),
    ),
  });
}
function _(_) {
  let { timelineView: _, entry: _, timelineOffset: _ } = _,
    _ = _ + parseInt(_.time),
    { pxStart: _, pxWidth: _ } = _(() => ({
      pxStart: _.ConvertGlobalMSToGlobalPXOffset(_),
      pxWidth: _.ConvertDurationMSToDeltaPX(parseInt(_.duration)),
    })),
    _ = {
      width: `${_}px`,
      transform: `translateX( ${_}px )`,
    };
  return (0, _.jsx)(`svg`, {
    className: _,
    style: _,
    children: (0, _.jsx)(`line`, {
      _: `0`,
      _: _,
      _: `0`,
      _: `0`,
      fill: `none`,
      stroke: `#ffc82c`,
      "stroke-width": `3`,
      "stroke-dasharray": `3 6`,
      "stroke-dashoffset": `0`,
      "stroke-linecap": `square`,
    }),
  });
}
var _ = 0.08;
function _(_) {
  let {
      loader: _,
      className: _,
      clipSummaries: _,
      refTimelineParentCtn: _,
      disableZoom: _,
    } = _,
    _ = _(() => _.BInitialized()),
    _ = _();
  if (!_)
    return (0, _.jsx)(`div`, {
      className: _,
    });
  let _ = _(_, _.GetGamepadMode() && `xP7qeNW99Qo-`, _);
  return (0, _.jsx)(_, {
    loader: _,
    clipSummaries: _,
    playbackCoordinator: _,
    refTimelineParentCtn: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      dir: `ltr`,
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {}),
        (0, _.jsx)(_, {
          tour: `recording_timeline`,
          name: `timeline`,
          options: {
            position: `left`,
            offset: 20,
          },
          children: (0, _.jsx)(_, {
            className: _,
            disableZoom: _,
            children: (0, _.jsx)(_, {}),
          }),
        }),
      ],
    }),
  });
}
var _ = (0, _.memo)(function (_) {
  let _ = _();
  return _(() => _.BInitialized()) ? (0, _.jsx)(_, {}) : null;
});
function _() {
  let _ = _(),
    _ = _(() => _.GetScrollableWidthPX()),
    _ = _(() => _.GetVisualWindowStartPX()),
    _ = _(() => _.GetTimelineMarginWidth());
  return (0, _.jsxs)(`div`, {
    className: _,
    style: {
      minWidth: _ || 0,
      marginRight: _,
      marginLeft: _,
      transform: `translateX(${-_}px)`,
    },
    children: [
      (0, _.jsx)(_, {
        _: `recordings`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `clips`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `game_modes`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `date_decorators`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        _: `ticks`,
        className: _,
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            _: `highlights`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `range_selection`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `seek_scrub`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `play_head`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `phases`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            _: `range_highlights`,
            className: _,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { children: _, _: _, className: _ } = _;
  return (0, _.jsx)(`div`, {
    _: _,
    className: _(_, _),
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let _ = _().GetRenderGlyph();
  return _ ? _(_.TRIGGER_LEFT, !1, !1, _) : null;
}
function _(_) {
  let _ = _().GetRenderGlyph();
  return _ ? _(_.TRIGGER_RIGHT, !1, !1, _) : null;
}
function _() {
  return [
    {
      timeline_id: `mocktimeline_1`,
      game_id: `clip_1`,
      date_recorded: 1713811258,
      duration_ms: `60000`,
      recordings: [
        {
          recording_id: `recording_1`,
          duration_ms: `15000`,
          start_offset_ms: `5000`,
        },
        {
          recording_id: `recording_2`,
          duration_ms: `15000`,
          start_offset_ms: `25000`,
        },
        {
          recording_id: `recording_3`,
          duration_ms: `15000`,
          start_offset_ms: `45000`,
        },
      ],
    },
  ];
}
var _ = {
    daterecorded: 1713552945,
    starttime: 0,
    entries: [
      {
        _: `1`,
        time: `1000`,
        type: `gamemode`,
        mode: 3,
      },
      {
        _: `2`,
        time: `7000`,
        type: `event`,
        title: `bolt`,
        description: `steam_bolt`,
        icon: `steam_bolt`,
        priority: 2,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `3`,
        time: `8500`,
        type: `event`,
        title: `gem`,
        description: `steam_gem`,
        icon: `steam_gem`,
        priority: 1,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `4`,
        time: `11000`,
        type: `event`,
        title: `star`,
        description: `steam_star`,
        icon: `steam_star`,
        priority: 4,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `6`,
        time: `13000`,
        type: `event`,
        title: `heart`,
        description: `steam_heart`,
        icon: `steam_heart`,
        priority: 2,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `7`,
        time: `15500`,
        type: `event`,
        title: `checkmark`,
        description: `steam_checkmark`,
        icon: `steam_checkmark`,
        priority: 3,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `8`,
        time: `18000`,
        type: `gamemode`,
        mode: 1,
      },
      {
        _: `9`,
        time: `25000`,
        type: `event`,
        title: `crown`,
        description: `steam_crown`,
        icon: `steam_crown`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `10`,
        time: `27000`,
        type: `event`,
        title: `ribbon`,
        description: `steam_ribbon`,
        icon: `steam_ribbon`,
        priority: 9,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `11`,
        time: `32000`,
        type: `event`,
        title: `chest`,
        description: `steam_chest`,
        icon: `steam_chest`,
        priority: 8,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `13`,
        time: `34500`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 8,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `14`,
        time: `36000`,
        type: `event`,
        title: `timer`,
        description: `steam_timer`,
        icon: `steam_timer`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `15`,
        time: `46000`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `17`,
        time: `50000`,
        type: `usermarker`,
        icon: `steam_marker`,
        priority: 0,
      },
      {
        _: `18`,
        time: `51500`,
        type: `event`,
        title: `defend`,
        description: `steam_defend`,
        icon: `steam_defend`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
      {
        _: `19`,
        time: `52500`,
        type: `event`,
        title: `explosion`,
        description: `steam_explosion`,
        icon: `steam_explosion`,
        priority: 10,
        duration: `0`,
        possible_clip: 2,
      },
    ],
    endtime: 6e4,
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [5], null);
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
            assetset_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            name: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            desc: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            branches: {
              _: 5,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            last_update_rtime: {
              _: 6,
              _: _.readUint32,
              _: _.writeUint32,
            },
            priority: {
              _: 7,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_publish_rtime: {
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
      return `CAssetSet`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset: {
              _: 2,
              _: _,
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
      return `CAssetSetPublishing_CreateAssetSet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assetset || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            assetset: {
              _: 1,
              _: _,
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
      return `CAssetSetPublishing_CreateAssetSet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset_id: {
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
      return `CAssetSetPublishing_DeleteAssetSet_Request`;
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
      return `CAssetSetPublishing_DeleteAssetSet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset: {
              _: 2,
              _: _,
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
      return `CAssetSetPublishing_UpdateAssetSet_Request`;
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
      return `CAssetSetPublishing_UpdateAssetSet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
      return `CAssetSetPublishing_GetAllAssetSets_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assetset || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            assetset: {
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
      return `CAssetSetPublishing_GetAllAssetSets_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            branch: {
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
      return `CAssetSetPublishing_AddBranchToAssetSet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.updated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            updated: {
              _: 1,
              _: _,
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
      return `CAssetSetPublishing_AddBranchToAssetSet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            branch: {
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
      return `CAssetSetPublishing_RemoveBranchFromAssetSet_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.updated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            updated: {
              _: 1,
              _: _,
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
      return `CAssetSetPublishing_RemoseBranchFromAssetSet_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            first_assetset_id: {
              _: 2,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            second_assetset_id: {
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
      return `CAssetSetPublishing_SwapAssetSetPriority_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.updated_first || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            updated_first: {
              _: 1,
              _: _,
            },
            updated_second: {
              _: 2,
              _: _,
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
      return `CAssetSetPublishing_SwapAssetSetPriority_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
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
            assetset_id: {
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
      return `CAssetSetPublishing_UpdatePublishTime_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.updated || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            updated: {
              _: 1,
              _: _,
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
      return `CAssetSetPublishing_UpdatePublishTime_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AssetSetPublishing.CreateAssetSet#1`, _(_, _, _), _, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.CreateAssetSet = _;
  function _(_, _, _) {
    return _.SendMsg(`AssetSetPublishing.DeleteAssetSet#1`, _(_, _, _), _, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.DeleteAssetSet = _;
  function _(_, _, _) {
    return _.SendMsg(`AssetSetPublishing.UpdateAssetSet#1`, _(_, _, _), _, {
      ePrivilege: 7,
      rgBrowserAPISites: [`partner`],
    });
  }
  _.UpdateAssetSet = _;
  function _(_, _, _) {
    return _.SendMsg(`AssetSetPublishing.GetAllAssetSets#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 7,
    });
  }
  _.GetAllAssetSets = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AssetSetPublishing.AddBranchToAssetSet#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 7,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.AddBranchToAssetSet = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AssetSetPublishing.RemoveBranchFromAssetSet#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 7,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  _.RemoveBranchFromAssetSet = _;
  function _(_, _, _) {
    return _.SendMsg(
      `AssetSetPublishing.SwapAssetSetPriority#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 7,
      },
    );
  }
  _.SwapAssetSetPriority = _;
  function _(_, _, _) {
    return _.SendMsg(`AssetSetPublishing.UpdatePublishTime#1`, _(_, _, _), _, {
      ePrivilege: 7,
    });
  }
  _.UpdatePublishTime = _;
})((_ ||= {}));
var _ = `default`,
  _ = `steam_default_assetset`,
  _ = `steam_default_hidden`,
  _ = class _ {
    m_mapAssetSets = new Map();
    m_mapAssetSetCallback = new Map();
    m_dummyAssetSetCallback = new _();
    m_mapAssetSetListChangeCallback = new Map();
    m_SteamInterface = null;
    GetAllAssetSets(_) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (_) => _.appid === _,
      );
    }
    GetAllNonSpecialAssetSets(_) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (_) =>
          _.appid === _ &&
          _.name != `steam_default_assetset` &&
          _.name != `steam_default_hidden`,
      );
    }
    GetAllPublicAssetSets(_) {
      return Array.from(this.m_mapAssetSets.values()).filter(
        (_) => _.appid === _ && _.branches.includes(`default`),
      );
    }
    GetAssetSetByID(_, _) {
      return _
        ? this.m_mapAssetSets.get(_)
        : {
            name: _(
              `#TimelineMarkers_Hidden_new_asset_set_new_name`,
              this.GetAllNonSpecialAssetSets(_).length + 1,
            ),
            desc: ``,
          };
    }
    GetAssetSetChangeCallback(_) {
      return _
        ? (this.m_mapAssetSetCallback.has(_) ||
            this.m_mapAssetSetCallback.set(_, new _()),
          this.m_mapAssetSetCallback.get(_))
        : this.m_dummyAssetSetCallback;
    }
    GetAppAssetSetListChangeCallback(_) {
      return (
        this.m_mapAssetSetListChangeCallback.has(_) ||
          this.m_mapAssetSetListChangeCallback.set(_, new _()),
        this.m_mapAssetSetListChangeCallback.get(_)
      );
    }
    GetPublicSpecialAssetSet(_) {
      let _ = this.GetAllAssetSets(_);
      for (let _ = 0; _ < _.length; ++_)
        if (_[_].name == `steam_default_assetset`) return _[_].assetset_id;
      return null;
    }
    GetHiddenSpecialAssetSet(_) {
      let _ = this.GetAllAssetSets(_);
      for (let _ = 0; _ < _.length; ++_)
        if (_[_].name == `steam_default_hidden`) return _[_].assetset_id;
      return null;
    }
    async CreateAssetSet(_) {
      let _ = _.Init(_),
        _ = null;
      try {
        _.Body().set_appid(_.appid), _.Body().set_assetset(_.fromObject(_));
        let _ = await _.CreateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          _,
        );
        if (_.GetEResult() == 1) {
          let _ = _.Body().assetset().toObject();
          return (
            this.m_mapAssetSets.set(_.assetset_id, _),
            this.GetAppAssetSetListChangeCallback(_.appid).Dispatch(
              this.GetAllAssetSets(_.appid),
            ),
            1
          );
        }
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CAssetSetStore.CreateAssetSet failed: on item ` +
            _.appid +
            ` with ` +
            _?.strErrorMsg,
          _,
        ),
        2
      );
    }
    async UpdateAssetSet(_) {
      let _ = _.Init(_),
        _ = null;
      try {
        _.Body().set_appid(_.appid), _.Body().set_assetset(_.fromObject(_));
        let _ = await _.UpdateAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          _,
        );
        if (_.GetEResult() == 1)
          return (
            this.m_mapAssetSets.set(_.assetset_id, _),
            this.GetAssetSetChangeCallback(_.assetset_id).Dispatch(_),
            1
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CAssetSetStore.UpdateAssetSet failed: on item ` +
            _.appid +
            ` with ` +
            _?.strErrorMsg,
          _,
        ),
        2
      );
    }
    async DeleteAssetSet(_, _) {
      let _ = _.Init(_),
        _ = null;
      try {
        _.Body().set_appid(_), _.Body().set_assetset_id(_);
        let _ = await _.DeleteAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          _,
        );
        if (_.GetEResult() == 1)
          return (
            this.m_mapAssetSets.delete(_),
            this.GetAppAssetSetListChangeCallback(_).Dispatch(
              this.GetAllAssetSets(_),
            ),
            1
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CAssetSetStore.DeleteAssetSet failed: on item ` +
            _ +
            ` with ` +
            _?.strErrorMsg,
          _,
        ),
        2
      );
    }
    async AddBranchToAssetSet(_, _, _) {
      let _ = _.Init(_),
        _ = null,
        _ = this.m_mapAssetSets.get(_);
      if (!_)
        return (
          console.log(
            `CAssetSetStore.AddBranchToAssetSet object missing: ` + _,
          ),
          2
        );
      try {
        _.Body().set_appid(_),
          _.Body().set_assetset_id(_),
          _.Body().set_branch(_);
        let _ = await _.AddBranchToAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          _,
        );
        if (_.GetEResult() == 1)
          return (
            (_.branches ||= []),
            _.branches.push(_),
            this.GetAssetSetChangeCallback(_.assetset_id).Dispatch({
              ..._,
            }),
            1
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CAssetSetStore.AddBranchToAssetSet failed: on item ` +
            _ +
            ` with ` +
            _?.strErrorMsg,
          _,
        ),
        2
      );
    }
    async RemoveBranchFromAssetSet(_, _, _) {
      let _ = _.Init(_),
        _ = null,
        _ = this.m_mapAssetSets.get(_);
      if (!_)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet object missing: ` + _,
          ),
          2
        );
      let _ = (_.branches || []).findIndex((_) => _ === _);
      if (_ < 0)
        return (
          console.log(
            `CAssetSetStore.RemoveBranchFromAssetSet branch does not exist: ` +
              _,
          ),
          2
        );
      try {
        _.Body().set_appid(_),
          _.Body().set_assetset_id(_),
          _.Body().set_branch(_);
        let _ = await _.RemoveBranchFromAssetSet(
          this.m_SteamInterface.GetServiceTransport(),
          _,
        );
        if (_.GetEResult() == 1)
          return (
            _.branches.splice(_, 1),
            this.GetAssetSetChangeCallback(_.assetset_id).Dispatch({
              ..._,
            }),
            1
          );
        _ = _(_);
      } catch (_) {
        _ = _(_);
      }
      return (
        console.error(
          `CAssetSetStore.RemoveBranchFromAssetSet failed: on item ` +
            _ +
            ` with ` +
            _?.strErrorMsg,
          _,
        ),
        2
      );
    }
    static s_Singleton;
    static Get() {
      return (
        _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
        _.s_Singleton
      );
    }
    Init() {
      let _ = _(`asset_sets`, `application_config`);
      this.ValidateStoreDefault(_) &&
        _.forEach((_) => this.m_mapAssetSets.set(_.assetset_id, _)),
        (this.m_SteamInterface = _(new _(_.WEBAPI_BASE_URL)));
    }
    ValidateStoreDefault(_) {
      let _ = _;
      return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
        ? typeof _[0].assetset_id == `string` && typeof _[0].appid == `number`
        : !1;
    }
  };
_([_], _.prototype, `CreateAssetSet`, null),
  _([_], _.prototype, `UpdateAssetSet`, null),
  _([_], _.prototype, `DeleteAssetSet`, null),
  _([_], _.prototype, `AddBranchToAssetSet`, null),
  _([_], _.prototype, `RemoveBranchFromAssetSet`, null);
function _() {
  return {
    fnCreateAssetSet: _.Get().CreateAssetSet,
    fnUpdateAssetSet: _.Get().UpdateAssetSet,
    fnDeleteAssetSet: _.Get().DeleteAssetSet,
    fnAddBranchToAssetSet: _.Get().AddBranchToAssetSet,
    fnRemoveBranchFromAssetSet: _.Get().RemoveBranchFromAssetSet,
  };
}
function _(_, _) {
  return _.Get().GetAssetSetByID(_, _)?.name || _(`#Unknown`);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => _.Get().GetAllAssetSets(_));
  return _(_.Get().GetAppAssetSetListChangeCallback(_), _), _;
}
function _(_) {
  let [_, _] = (0, _.useState)(() => _.Get().GetAllNonSpecialAssetSets(_));
  return (
    _(_.Get().GetAppAssetSetListChangeCallback(_), (_) =>
      _(
        _.filter(
          (_) =>
            _.name != `steam_default_hidden` &&
            _.name != `steam_default_assetset`,
        ),
      ),
    ),
    _
  );
}
function _(_) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useCallback)((_) => {
      _.Get()
        .GetAllAssetSets(_)
        .forEach((_) => {
          _.name === `steam_default_assetset`
            ? _(_.assetset_id)
            : _.name === `steam_default_hidden` && _(_.assetset_id);
        });
    }, []);
  return (
    (0, _.useEffect)(() => _(_), [_, _]),
    _(_.Get().GetAppAssetSetListChangeCallback(_), (_) => _(_)),
    {
      publicAssetSetID: _,
      hiddenAssetSetID: _,
    }
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(() => _.Get().GetAssetSetByID(_, _));
  return _(_.Get().GetAssetSetChangeCallback(_), _), _;
}
async function _(_, _) {
  let { fnCreateAssetSet: _ } = _(),
    _ = await _({
      appid: _,
      name: _ ? _ : _,
      branches: _ ? [_] : [],
    });
  return _ == 1
    ? {
        eResult: _,
        assetSetID: _
          ? _.Get().GetPublicSpecialAssetSet(_)
          : _.Get().GetHiddenSpecialAssetSet(_),
      }
    : {
        eResult: _,
        assetSetID: null,
      };
}
function _(_) {
  let { assetSetID: _, className: _, appid: _ } = _,
    { publicAssetSetID: _ } = _(_);
  return (0, _.jsxs)(_, {
    onClick: (_) => _(_, _, _),
    disabled: !_,
    children: [
      `↓`,
      ` `,
      _(`#TimelineMarkers_Hidden_download`),
      `\xA0`,
      (0, _.jsx)(_, {
        toolTipContent: _(`#TimelineMarkers_Hidden_download_ttip`),
        className: _,
        children: `(?)`,
      }),
    ],
  });
}
function _(_, _, _) {
  let _ = new Map();
  _ &&
    _(_).forEach((_) => {
      let _ = _(_, _);
      _.set(_.markerid, _);
    }),
    _ &&
      _ != _ &&
      _(_).forEach((_) => {
        let _ = _(_, _);
        _.set(_.markerid, _);
      });
  let _ = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>`;
  Array.from(_.values()).forEach((_) => {
    _ += _(_);
  }),
    (_ += `</defs></svg>`),
    _(`${_}_markers.svg`, _);
}
function _(_) {
  let _ = `<g id="${_.markerid}">`;
  if (_.image_type == 1) _ += _(_.image);
  else if (_.image_type == 2) {
    let _ = _.image
      .replace(/&/g, `&amp;`)
      .replace(/</g, `&lt;`)
      .replace(/"/g, `&quot;`);
    _ += `<image width="36" height="36" xlink:href="${_}" />`;
  }
  return (_ += `</g>`), _;
}
function _(_, _) {
  let _ = new Blob([_], {
      type: `text/plain`,
    }),
    _ = window.URL.createObjectURL(_),
    _ = document.createElement(`a`);
  (_.href = _),
    (_.download = _),
    document.body.appendChild(_),
    _.click(),
    window.URL.revokeObjectURL(_);
}
function _(_) {
  let _ = new DOMParser()
    .parseFromString(_, `image/svg+xml`)
    .querySelector(`svg`);
  return _ ? _.innerHTML : null;
}
var _ = class _ {
  m_mapTimelineMarker = new Map();
  m_mapAppToMarkerListChange = new Map();
  m_mapAssetSetAndMarkerIDToMarkerChanges = new Map();
  GetAllMarkersForApp(_) {
    return Array.from(this.m_mapTimelineMarker.values()).filter(
      (_) => _.appid == _,
    );
  }
  GetMarkerForAssetSets(_) {
    if (!_ || _.length == 0) return [];
    let _ = new Map();
    return (
      _.forEach((_) => _.set(_.assetset_id, !0)),
      Array.from(this.m_mapTimelineMarker.values()).filter((_) =>
        _.has(_.asset_set_id),
      )
    );
  }
  GetGameMarkerSVGById(_, _) {
    let _ = this.m_mapTimelineMarker.get(_);
    if (_) return _(_);
  }
  AddTempMarker(_, _) {
    this.m_mapTimelineMarker.set(_, _);
  }
  RemoveTempMarker(_) {
    this.m_mapTimelineMarker.delete(_);
  }
  BIsLoaded(_) {
    return !0;
  }
  GetMarkerChange(_, _) {
    let _ = _ + `_` + _;
    return (
      this.m_mapAssetSetAndMarkerIDToMarkerChanges.has(_) ||
        this.m_mapAssetSetAndMarkerIDToMarkerChanges.set(_, new _()),
      this.m_mapAssetSetAndMarkerIDToMarkerChanges.get(_)
    );
  }
  GetAppMarkerListChange(_) {
    return (
      this.m_mapAppToMarkerListChange.has(_) ||
        this.m_mapAppToMarkerListChange.set(_, new _()),
      this.m_mapAppToMarkerListChange.get(_)
    );
  }
  GetAppMarkers(_, _) {
    let _ = null,
      _ = null;
    return (
      Array.from(this.m_mapTimelineMarker.values()).forEach((_) => {
        _.asset_set_id == _ &&
          _.markerid == _ &&
          (_.unpublished_changes ? (_ = _) : (_ = _));
      }),
      {
        oPublishedMarker: _,
        oUnpublishedMarker: _,
      }
    );
  }
  GetMarkerIDSetForAssetSetID(_) {
    let _ = new Set();
    return (
      this.m_mapTimelineMarker.forEach((_) => {
        _.asset_set_id === _ && _.add(_.markerid);
      }),
      _
    );
  }
  GetUnpublishedTimelineMarkerIDSetForAssetSetID(_) {
    let _ = new Set();
    return (
      this.m_mapTimelineMarker.forEach((_) => {
        _.asset_set_id === _ &&
          _.unpublished_changes &&
          _.add(_.timeline_marker_id);
      }),
      _
    );
  }
  BDoesAssetSetHaveMarkerID(_, _) {
    return Array.from(this.m_mapTimelineMarker.values()).some(
      (_) => _.asset_set_id == _ && _.markerid == _,
    );
  }
  GetUnpublishedThanPublishedFor(_, _) {
    let _ = this.GetAppMarkers(_, _);
    return _.oUnpublishedMarker ? _.oUnpublishedMarker : _.oPublishedMarker;
  }
  EnsureRequirePublishingIsVisible() {
    let _ = document.getElementById(`needs_publishing_msg`);
    _ && _.style.display === `none` && (_.style.display = `block`);
  }
  async CreateTimelineMarkerDefinition(_, _, _, _, _) {
    let _ = null;
    try {
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`asset_set_id`, _),
        _.append(`markerid`, _),
        _.append(`imagedata`, _),
        _.append(`imagetype`, `` + _);
      let _ = `${_.PARTNER_BASE_URL}timelinemarkers/ajaxcreatemarker`,
        _ = await _.default.post(_, _);
      if (_?.status == 200 && _.data.success == 1) {
        let _ = _.data.new_marker;
        return (
          this.m_mapTimelineMarker.set(_.timeline_marker_id, _),
          this.GetAppMarkerListChange(_).Dispatch([
            ...this.GetAllMarkersForApp(_),
          ]),
          _(_, _) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore create failed with ` + _.strErrorMsg,
        _,
      ),
      2
    );
  }
  async UpdateTimelineMarkerDefinition(_, _, _, _, _, _) {
    let _ = null,
      _ = this.m_mapTimelineMarker.get(_);
    if (!_)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting update, timeline markerid does not exist: ` +
            _,
        ),
        42
      );
    _(
      _ == _.appid,
      `Unexpected in UpdateTimelineMarkerDefinition appid don't match`,
    );
    let _ = _.markerid,
      _ = _.asset_set_id;
    try {
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`asset_set_id`, _),
        _.append(`markerid`, _),
        _.append(`imagedata`, _),
        _.append(`imagetype`, `` + _),
        _.append(`timeline_marker_id`, _);
      let _ = `${_.PARTNER_BASE_URL}timelinemarkers/ajaxupdatemarker`,
        _ = await _.default.post(_, _);
      if (_?.status == 200 && _.data.success == 1) {
        let _ = _.data.updated_marker;
        this.m_mapTimelineMarker.set(_.timeline_marker_id, _);
        let _ = this.GetAppMarkers(_, _);
        if (
          (this.GetMarkerChange(_, _).Dispatch(
            _.oPublishedMarker,
            _.oUnpublishedMarker,
          ),
          _ != _.markerid)
        ) {
          let _ = this.GetAppMarkers(_, _.markerid);
          this.GetMarkerChange(_, _.markerid).Dispatch(
            _.oPublishedMarker,
            _.oUnpublishedMarker,
          );
        }
        return (
          this.GetAppMarkerListChange(_).Dispatch([
            ...this.GetAllMarkersForApp(_),
          ]),
          _(_, _) == `steam_default_assetset` &&
            this.EnsureRequirePublishingIsVisible(),
          1
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `CTimelineMarkerEditorStore update failed with ` + _.strErrorMsg,
        _,
      ),
      2
    );
  }
  async DeleteTimelineMarkerDefinition(_, _, _) {
    let _ = null,
      _ = this.m_mapTimelineMarker.get(_);
    if (!_)
      return (
        console.error(
          `CTimelineMarkerEditorStore attempting delete, timeline markerid does not exist: ` +
            _,
        ),
        42
      );
    let _ = _.markerid;
    try {
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`asset_set_id`, _),
        _.append(`timeline_marker_id`, _);
      let _ = `${_.PARTNER_BASE_URL}timelinemarkers/ajaxdeletemarker`,
        _ = await _.default.post(_, _);
      if (_?.status == 200 && _.data.success == 1) {
        this.m_mapTimelineMarker.delete(_);
        let _ = this.GetAppMarkers(_, _);
        return (
          (_?.oPublishedMarker || _.oUnpublishedMarker) &&
            this.GetMarkerChange(_, _.markerid).Dispatch(
              _.oPublishedMarker,
              _.oUnpublishedMarker,
            ),
          this.GetAppMarkerListChange(_).Dispatch([
            ...this.GetAllMarkersForApp(_),
          ]),
          1
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `DeleteTimelineMarkerDefinition create failed with ` + _.strErrorMsg,
        _,
      ),
      2
    );
  }
  async PublishTimelineMarkerDefinitions(_, _, _) {
    let _ = null;
    for (let _ = 0; _ < _.length; ++_) {
      let _ = _[_],
        _ = this.m_mapTimelineMarker.get(_);
      if (!_)
        return (
          console.error(
            `CTimelineMarkerEditorStore attempting publish, timeline markerid does not exist: ` +
              _,
          ),
          42
        );
      if (!_.unpublished_changes)
        return (
          console.error(
            `CTimelineMarkerEditorStore attempting publish already published asset: ` +
              _,
          ),
          11
        );
    }
    try {
      let _ = new FormData();
      _.append(`sessionid`, _()),
        _.append(`appid`, `` + _),
        _.append(`asset_set_id`, _),
        _.append(`timeline_marker_id`, _.join(`,`));
      let _ = `${_.PARTNER_BASE_URL}timelinemarkers/ajaxpublishmarkers`,
        _ = await _.default.post(_, _);
      if (_?.status == 200 && _.data.success == 1) {
        for (let _ = 0; _ < _.length; ++_) {
          let _ = _[_],
            _ = this.m_mapTimelineMarker.get(_),
            _ = this.GetAppMarkers(_.asset_set_id, _.markerid);
          _.oPublishedMarker &&
            this.m_mapTimelineMarker.delete(
              _.oPublishedMarker.timeline_marker_id,
            );
          let _ = {
            ..._.oUnpublishedMarker,
            unpublished_changes: !1,
            time_last_updater: Math.floor(Date.now() / 1e3),
          };
          this.m_mapTimelineMarker.set(_.timeline_marker_id, _),
            this.GetMarkerChange(_.asset_set_id, _.markerid).Dispatch(_, null);
        }
        return (
          this.GetAppMarkerListChange(_).Dispatch([
            ...this.GetAllMarkersForApp(_),
          ]),
          1
        );
      }
      _ = _(_);
    } catch (_) {
      _ = _(_);
    }
    return (
      console.error(
        `PublishTimelineMarkerDefinition create failed with ` + _.strErrorMsg,
        _,
      ),
      2
    );
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    let _ = _(`timeline_markers`, `application_config`);
    this.ValidateStoreDefault(_) &&
      _.forEach((_) => this.m_mapTimelineMarker.set(_.timeline_marker_id, _)),
      _(_);
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return _ && Array.isArray(_) && _.length > 0 && typeof _[0] == `object`
      ? typeof _[0].asset_set_id == `string` && typeof _[0].appid == `number`
      : !1;
  }
};
_([_], _.prototype, `CreateTimelineMarkerDefinition`, null),
  _([_], _.prototype, `UpdateTimelineMarkerDefinition`, null),
  _([_], _.prototype, `DeleteTimelineMarkerDefinition`, null),
  _([_], _.prototype, `PublishTimelineMarkerDefinitions`, null);
function _() {
  return {
    fnCreateTimelineMarkerDefinition: _.Get().CreateTimelineMarkerDefinition,
    fnUpdateTimelineMarkerDefinition: _.Get().UpdateTimelineMarkerDefinition,
    fnDeleteTimelineMarkerDefinition: _.Get().DeleteTimelineMarkerDefinition,
    fnPublishTimelineMarkerDefinitions:
      _.Get().PublishTimelineMarkerDefinitions,
  };
}
function _(_, _) {
  return _.Get().BDoesAssetSetHaveMarkerID(_, _);
}
function _(_, _) {
  return _.Get().GetUnpublishedThanPublishedFor(_, _);
}
function _(_) {
  return Array.from(_.Get().GetMarkerIDSetForAssetSetID(_));
}
function _(_, _) {
  return _.Get().GetAppMarkers(_, _);
}
function _(_, _) {
  return _.Get().AddTempMarker(_, _);
}
function _(_) {
  return _.Get().RemoveTempMarker(_);
}
function _(_) {
  let [_, _] = (0, _.useState)(() => _.Get().GetAllMarkersForApp(_));
  return _(_.Get().GetAppMarkerListChange(_), _), _;
}
function _(_, _) {
  let [_, _] = (0, _.useState)(() => _.Get().GetMarkerIDSetForAssetSetID(_));
  return (
    (0, _.useEffect)(() => {
      _ && _ && _(_.Get().GetMarkerIDSetForAssetSetID(_));
    }, [_, _]),
    _(_.Get().GetAppMarkerListChange(_), () =>
      _(_.Get().GetMarkerIDSetForAssetSetID(_)),
    ),
    _
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = _.Get().GetAppMarkers(_, _);
      _ && (_(_.oPublishedMarker), _(_.oUnpublishedMarker));
    }, [_, _]),
    _(_.Get().GetMarkerChange(_, _), (_, _) => {
      _(_), _(_);
    }),
    {
      oPublishedMarker: _,
      oUnpublishedMarker: _,
    }
  );
}
function _(_, _) {
  let _ = _.Get().GetGameMarkerSVGById(_, _);
  if (!_) return null;
  let _ = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${_}</svg>`;
  return new DOMParser().parseFromString(_, `image/svg+xml`).documentElement
    .firstChild;
}
var _ = `bW6NnJgeiWk-`,
  _ = `V3BT-3QXPuE-`,
  _ = `GqWICinvGkw-`,
  _ = `YKpyJp8GNzs-`,
  _ = `wlQ9Q4HK0ns-`,
  _ = `kWUDsdjYMVg-`,
  _ = `_1UUIWhHwrOM-`,
  _ = `_3moKm7wLoRg-`,
  _ = `I-tbvNM8uSM-`,
  _ = `-hlxMroQhOg-`,
  _ = `oHIpesYvxMA-`,
  _ = `_6Vpi-tE-oEU-`,
  _ = `pchh-7xTLCE-`,
  _ = `_5qz-ObFfK-A-`,
  _ = `sGz9odiNvg4-`,
  _ = `LiXShxrPrcE-`,
  _ = `M8jwQ84cEEk-`,
  _ = `fKuSgu0G7V8-`,
  _ = `KftftOl0N4A-`,
  _ = `XzyRD4VeIU8-`,
  _ = `_0N2azgGGH-w-`,
  _ = `V6-CWPNS-vM-`;
function _(_) {
  let { imageBase64OrUntrustedSVG: _, imageType: _ } = _;
  if (!_) return null;
  let _;
  return (
    _ == 1
      ? (_ = `data:image/svg+xml,${encodeURIComponent(_)}`)
      : _ == 2 && (_ = _),
    (0, _.jsx)(`div`, {
      className: _(_),
      children: (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            alt: `SVG Large Preview`,
          }),
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            alt: `SVG Medium Preview`,
          }),
          (0, _.jsx)(`img`, {
            className: _,
            src: _,
            alt: `SVG Small Preview`,
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let { svgXmlUntrusted: _ } = _;
  if (!_) return null;
  let _ = `data:image/svg+xml,${encodeURIComponent(_)}`;
  return (0, _.jsx)(`img`, {
    className: _,
    src: _,
    alt: `SVG Small Preview`,
  });
}
function _(_) {
  let { appid: _, assetSetID: _, markerID: _ } = _,
    { oPublishedMarker: _, oUnpublishedMarker: _ } = _(_, _),
    { publicAssetSetID: _, hiddenAssetSetID: _ } = _(_),
    [_, _] = (0, _.useState)(!1);
  if (!_ && !_) return null;
  let _ = _ || _,
    _ = !!(_ && _.asset_set_id != _),
    _ = _?.asset_set_id === _;
  return (0, _.jsxs)(`div`, {
    className: _,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: [
      _ &&
        (0, _.jsx)(`span`, {
          className: `qnCfcbOAK-c-`,
          children: _(`#TimelineMarker_state_pending`),
        }),
      (0, _.jsx)(_, {
        imageBase64OrUntrustedSVG: _.image,
        imageType: _.image_type,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.markerid,
      }),
      _ &&
        (0, _.jsx)(_, {
          className: `F2avAdiaobg-`,
          onClick: (_) =>
            _(
              (0, _.jsx)(_, {
                appid: _,
                bDisallowMarkerIDEdit: _,
                oTimelineMarkerDef: _,
              }),
              _(_),
            ),
          children: _(`#Button_Edit`),
        }),
    ],
  });
}
function _(_) {
  let { appid: _, assetSetID: _, strMessageOnEmpty: _, bDraggable: _ } = _,
    _ = _(_, _);
  return !_ || _.size == 0
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          assetSetID: _,
          children: Array.from(_).map((_, _) =>
            (0, _.jsx)(
              _,
              {
                _: `assetsetid_${_}_markerid_${_}`,
                index: _,
                bDraggable: _,
                children: (0, _.jsx)(_, {
                  appid: _,
                  assetSetID: _,
                  markerID: _,
                }),
              },
              _ + `_` + _,
            ),
          ),
        }),
      });
}
function _(_) {
  let { _: _, children: _, index: _, bDraggable: _ } = _;
  return (0, _.jsx)(_, {
    draggableId: _,
    index: _,
    isDragDisabled: !_,
    children: (_) =>
      (0, _.jsx)(`div`, {
        ref: _.innerRef,
        ..._.draggableProps,
        ..._.dragHandleProps,
        className: _,
        style: {
          ..._.draggableProps.style,
        },
        children: _,
      }),
  });
}
function _(_) {
  let { assetSetID: _, children: _ } = _;
  return (0, _.jsx)(_, {
    droppableId: `undroppable` + _,
    direction: `horizontal`,
    children: (_) =>
      (0, _.jsxs)(`div`, {
        ref: _.innerRef,
        ..._.droppableProps,
        style: {
          display: `flex`,
        },
        children: [_, _.placeholder],
      }),
  });
}
function _(_) {
  let { assetSetID: _, appid: _, strMessage: _ } = _;
  return (0, _.jsx)(_, {
    droppableId: `droptarget_assetsetid_${_}_appid_${_}`,
    children: (_) =>
      (0, _.jsxs)(`div`, {
        ..._.droppableProps,
        ref: _.innerRef,
        className: _,
        children: [
          (0, _.jsx)(`span`, {
            children: _,
          }),
          _.placeholder,
        ],
      }),
  });
}
function _(_) {
  let { appid: _, markerID: _ } = _,
    _ = _(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.GetTimelines()[0].metadata.timeline_id;
      _.RemoveTimelineEvent(_, `5`),
        _.RemoveTimelineEvent(_, `12`),
        _.RemoveTimelineEvent(_, `16`),
        _.AddEventToTimeline(_, 12500, _, `5`, 9, _, _, 0),
        _.AddEventToTimeline(_, 33500, _, `12`, 2, _, _, 0),
        _.AddEventToTimeline(_, 48500, _, `16`, 9, _, _, 0);
    }, [_, _]),
    (0, _.jsx)(_, {
      loader: _,
      fnGetManifest: () => ``,
      mode: _.Partner,
      children: (0, _.jsx)(_, {
        loader: _,
        disableZoom: !0,
      }),
    })
  );
}
function _(_) {
  let [_] = (0, _.useState)(() => new _());
  return (
    (0, _.useEffect)(() => {
      let _ = _(),
        _ = {
          ..._,
          entries: _.entries.map((_) => _),
        };
      _.LoadTimelinesForTestClip(0, void 0, `${_}`, _),
        _.SetTimelineData(_[0].timeline_id, _);
    }, [_, _]),
    _
  );
}
var _ = 31;
function _(_) {
  return /^[a-z0-9_-]{1,31}$/.test(_);
}
function _(_, _, _, _) {
  let _ = new FileReader();
  (_.onload = (_) => {
    let _ = new Image();
    (_.onload = () => {
      let _ = document.createElement(`canvas`),
        _ = _.width,
        _ = _.height;
      _ > _
        ? _ > _ && ((_ *= _ / _), (_ = _))
        : _ > _ && ((_ *= _ / _), (_ = _)),
        (_.width = _),
        (_.height = _),
        _.getContext(`2d`).drawImage(_, 0, 0, _, _),
        _(_.toDataURL(_.type));
    }),
      (_.src = _.target?.result);
  }),
    _.readAsDataURL(_);
}
async function _(_) {
  return new Promise((_, _) => {
    if (_) {
      let _ = new FileReader();
      (_.onloadend = () => {
        let _ = _.type,
          _ = _.name;
        if (
          (_ === `image/png` || _.endsWith(`.png`)) &&
          _.result.toString().startsWith(`data:image/png;base64,`)
        ) {
          let _ = new Image();
          (_.onload = function () {
            _.width == _.height
              ? _.width < 24
                ? (console.error(`Image too small`),
                  _(_(`#TimelineMarkers_Error_PNGSize`, 24)))
                : _.width > 128
                  ? _(_, 128, 128, (_) => {
                      _({
                        image: _,
                        image_type: 2,
                        strFilenameWithoutExtension: _(_).substring(0, _),
                      });
                    })
                  : _({
                      image: _.result,
                      image_type: 2,
                      strFilenameWithoutExtension: _(_).substring(0, _),
                    })
              : (console.error(`Image wrong width, must be square`),
                _(_(`#TimelineMarkers_Error_PNGDimensions`)));
          }),
            (_.src = _.result);
        } else
          _ === `image/svg+xml` || _.endsWith(`.svg`)
            ? _({
                image: _.result,
                image_type: 1,
                strFilenameWithoutExtension: _(_).substring(0, _),
              })
            : (console.error(`unknown content types: ` + _),
              _(_(`#TimelineMarkers_Error_UnknownFileType`, _)));
      }),
        _.type === `image/svg+xml` || _.name.endsWith(`.svg`)
          ? _.readAsText(_)
          : _.readAsDataURL(_);
    } else return _(_(`#TimelineMarkers_Error_NotFound`));
  });
}
function _(_) {
  let _ = _.lastIndexOf(`.`);
  return _ !== -1 && _ > _.lastIndexOf(`/`) ? _.slice(0, _) : _;
}
function _(_) {
  let { appid: _, closeModal: _ } = _,
    [_, _] = (0, _.useState)(() => [
      {
        markerid: ``,
        image: null,
        image_type: null,
        timeline_marker_id: null,
      },
    ]),
    [_, _] = (0, _.useState)(`hidden`),
    { publicAssetSetID: _, hiddenAssetSetID: _ } = _(_),
    { fnCreateTimelineMarkerDefinition: _ } = _(),
    _ = (0, _.useRef)(void 0),
    [_, _] = (0, _.useState)(null),
    _ = _(),
    _ = (0, _.useCallback)(
      async (_) => {
        let _ = [
            {
              ..._[0],
            },
          ],
          _ = _.length;
        for (let _ = 0; _ < _.length; ++_) {
          let _ = _[_],
            _ = await _(_);
          if (typeof _ == `string`) {
            _(_);
            break;
          }
          if (_ == 0) {
            if (
              ((_[0].image = _.image),
              (_[0].image_type = _.image_type),
              _ > 1 || _[0].markerid.length == 0)
            ) {
              let _ = _.strFilenameWithoutExtension.substring(0, _);
              (_[0].markerid = _), (_[0].timeline_marker_id = `temp_${_}_${_}`);
            }
          } else {
            let _ = _.strFilenameWithoutExtension.substring(0, _);
            _.push({
              image: _.image,
              image_type: _.image_type,
              markerid: _,
              timeline_marker_id: `temp_${_}_${_}`,
            });
          }
        }
        _(_);
      },
      [_],
    ),
    _ = (0, _.useCallback)(
      async (_) => {
        if ((_(null), (_.currentTarget?.files?.length || 0) > 0)) {
          let _ = [];
          for (let _ = 0; _ < _.currentTarget.files.length; ++_)
            _.push(_.currentTarget.files[_]);
          _(_);
        }
      },
      [_],
    );
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#TimelineMarkers_Dialog_Create`),
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        strTitle: _(`#TimelineMarkers_Dialog_Create`),
        bOKDisabled: _.some(
          (_) => !_(_.markerid) || !_.image || _.image?.length < 10,
        ),
        bDisableBackgroundDismiss: !0,
        onCancel: _,
        strOKButtonText: _(`#Button_Create`),
        onOK: async () => {
          _.fnSetLoading(!0);
          let _ = _ == `public` ? _ : _;
          if (
            (_ == `public` && !_
              ? (_ = (await _(_, !0)).assetSetID)
              : _ == `hidden` && !_ && (_ = (await _(_, !1)).assetSetID),
            !_)
          ) {
            console.error(
              `IconCreateEditDialog failed to create hidden sets ` + _,
            ),
              _.fnSetError(!0),
              _.fnSetStrError(_(`#OptIn_Appeals_Dialog_Failed`));
            return;
          }
          let _ = !0;
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_];
            if ((await _(_, _, _.markerid, _.image, _.image_type)) != 1) {
              _.fnSetError(!0),
                _.fnSetStrError(_(`#OptIn_Appeals_Dialog_Failed`)),
                (_ = !1);
              break;
            }
          }
          _ &&
            (_.fnSetSuccess(!0),
            _.fnSetStrSuccess(_(`#TimelineMarkers_Dialog_CreateSuccess`)));
        },
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(`div`, {
                  children: _(`#TimelineMarkers_Dialog_Create_Description`),
                }),
                (0, _.jsxs)(`ul`, {
                  children: [
                    (0, _.jsxs)(`li`, {
                      children: [
                        (0, _.jsx)(`strong`, {
                          children: _(`#TimelineMarkers_Dialog_Name_Title`),
                        }),
                        ` - `,
                        _(`#TimelineMarkers_Dialog_Name_ttip`, 128),
                      ],
                    }),
                    (0, _.jsxs)(`li`, {
                      children: [
                        (0, _.jsx)(`strong`, {
                          children: _(`#TimelineMarkers_Dialog_SVG`),
                        }),
                        ` - `,
                        _(`#TimelineMarkers_Dialog_SVG_create_desc`),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            !!_ &&
              (0, _.jsx)(`div`, {
                className: `_9rhLFCwqjPg-`,
                children: _,
              }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`h3`, {
              children: _(`#TimelineMarkers_Dialog_Title_UploadIcons`),
            }),
            (0, _.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: {
                display: `none`,
              },
              multiple: !0,
              name: `fileupload`,
              ref: _,
              onChange: _,
            }),
            (0, _.jsxs)(_, {
              onClick: () => _.current.click(),
              children: [
                (0, _.jsx)(_, {}),
                ` `,
                _(`#TimelineMarkers_Dialog_SVG_mutli_button`),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(_, {
                fnHandleFiles: _,
              }),
            }),
            _?.length > 0 &&
              _[0].image?.length > 0 &&
              (0, _.jsx)(`h3`, {
                children: _(`#TimelineMarkers_Dialog_IconCreateTitle`),
              }),
            _.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  marker: _,
                  appid: _,
                  setMarkerID: (_) => {
                    let _ = [..._];
                    (_[_].markerid = _), _(_);
                  },
                },
                `` + _,
              ),
            ),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(_, {
              createVisibilityState: _,
              setCreateVisibilityState: _,
            }),
          ],
        }),
      });
}
function _(_) {
  let { fnHandleFiles: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `xb2yMHJAW80-`, _),
    onDragEnter: (_) => {
      _.preventDefault(), _(!0);
    },
    onDragOver: (_) => {
      _.preventDefault();
    },
    onDragLeave: () => {
      _(!1);
    },
    onDrop: (_) => {
      _.preventDefault(), _(!1);
      let _ = Array.from(_.dataTransfer.files);
      _(_);
    },
    children: (0, _.jsx)(`p`, {
      children: _(`#TimelineMarkers_Dialog_SVG_draganddrop`),
    }),
  });
}
function _(_) {
  let { marker: _, appid: _, setMarkerID: _ } = _;
  return (
    (0, _.useEffect)(
      () => (
        _(_.timeline_marker_id, _),
        () => {
          _(_.timeline_marker_id);
        }
      ),
      [_],
    ),
    _?.image
      ? (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              markerID: _.markerid,
              strErrorMessage: null,
              imageContent: _.image,
              imageType: _.image_type,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  children: [
                    (0, _.jsx)(_, {
                      children: _(`#TimelineMarkers_Dialog_Icon_Title`),
                    }),
                    (0, _.jsx)(_, {
                      imageBase64OrUntrustedSVG: _.image,
                      imageType: _.image_type,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  type: `text`,
                  value: _.markerid,
                  maxChars: 128,
                  label: _(`#TimelineMarkers_Dialog_Name_Title`),
                  placeholder: _(`#TimelineMarkers_Dialog_Name_placeholder`),
                  onChange: (_) => _(_.currentTarget.value || ``),
                }),
              ],
            }),
            (0, _.jsx)(_, {
              children: _(`#TimelineMarkers_Dialog_Icon_TimelinePreview`),
            }),
            (0, _.jsx)(_, {
              appid: _,
              markerID: _.timeline_marker_id,
            }),
          ],
        })
      : null
  );
}
function _(_) {
  let {
      appid: _,
      closeModal: _,
      bDisallowMarkerIDEdit: _,
      oTimelineMarkerDef: _,
    } = _,
    [_, _] = (0, _.useState)(_.markerid),
    {
      fnUpdateTimelineMarkerDefinition: _,
      fnDeleteTimelineMarkerDefinition: _,
    } = _(),
    [_, _] = (0, _.useState)(_.image),
    [_, _] = (0, _.useState)(_.image_type),
    [_, _] = (0, _.useState)(0),
    _ = (0, _.useRef)(void 0),
    [_, _] = (0, _.useState)(null),
    _ = _(`#TimelineMarkers_Dialog_Edit`, _);
  (0, _.useEffect)(() => {
    if (_ && _ && _ && _) {
      let _ = `temp_${_}_${_.timeline_marker_id}`;
      _(_, {
        image: _,
        image_type: _,
        timeline_marker_id: _,
        markerid: _,
      });
    }
    return () => {
      _ && _(`temp_${_}_${_.timeline_marker_id}`);
    };
  }, [_, _, _, _, _.timeline_marker_id]);
  let _ = (0, _.useCallback)(async (_) => {
      _(null);
      let _ = _.currentTarget?.files?.[0],
        _ = await _(_);
      typeof _ == `string`
        ? _(_)
        : (_(_.image), _(_.image_type), _((_) => _ + 1));
    }, []),
    _ = _();
  if (_.bLoading)
    return (0, _.jsx)(_, {
      state: _,
      strDialogTitle: _,
      closeModal: _,
    });
  let _, _;
  if (!_ || _.unpublished_changes) {
    let _ = null;
    _(_.asset_set_id, _.markerid).oPublishedMarker && _.unpublished_changes
      ? ((_ = _(`#Button_Revert`)),
        (_ = _(`#TimelineMarkers_Dialog_RevertSuccess`)))
      : ((_ = _(`#TimelineMarkers_Dialog_DeleteSuccess`)),
        (_ = _(`#Button_Delete`))),
      (_ = async () => {
        _(
          (0, _.jsx)(_, {
            strTitle: _,
            strDescription: _(`#Dialog_AreYouSure`),
            onOK: async () => {
              _.fnSetLoading(!0),
                (await _(_, _.asset_set_id, _.timeline_marker_id)) == 1
                  ? (_.fnSetSuccess(!0), _.fnSetStrSuccess(_))
                  : (_.fnSetError(!0),
                    _.fnSetStrError(_(`#OptIn_Appeals_Dialog_Failed`)));
            },
          }),
          window,
        );
      });
  }
  return (0, _.jsx)(_, {
    strTitle: _,
    bOKDisabled: !_(_) || _?.length < 10,
    bDisableBackgroundDismiss: !0,
    onCancel: _,
    onMiddleButton: _,
    strMiddleButtonText: _,
    strOKButtonText: _(`#Button_Update`),
    onOK: async () => {
      _.fnSetLoading(!0),
        (await _(_, _.asset_set_id, _.timeline_marker_id, _, _, _)) == 1
          ? (_.fnSetSuccess(!0),
            _.fnSetStrSuccess(_(`#TimelineMarkers_Dialog_UpdateSuccess`)))
          : (_.fnSetError(!0),
            _.fnSetStrError(_(`#OptIn_Appeals_Dialog_Failed`)));
    },
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          markerID: _,
          strErrorMessage: _,
          imageContent: _,
          imageType: _,
        }),
        (0, _.jsx)(`h3`, {
          children: _(`#TimelineMarkers_Dialog_Name_Title`),
        }),
        _
          ? (0, _.jsx)(`p`, {
              children: _(`#TimelineMarkers_Dialog_Name_Disabled`),
            })
          : (0, _.jsx)(`p`, {
              children: _(`#TimelineMarkers_Dialog_Name`, 128),
            }),
        (0, _.jsx)(_, {
          type: `text`,
          value: _,
          disabled: _,
          maxChars: 128,
          className: _,
          placeholder: _(`#TimelineMarkers_Dialog_Name_placeholder`),
          tooltip: _(`#TimelineMarkers_Dialog_Name_ttip`),
          onChange: (_) => _(_.currentTarget.value || ``),
        }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(`h3`, {
          children: _(`#TimelineMarkers_Dialog_SVG`),
        }),
        (0, _.jsx)(`p`, {
          children: _(`#TimelineMarkers_Dialog_SVG_desc`),
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              imageBase64OrUntrustedSVG: _,
              imageType: _,
            }),
            (0, _.jsx)(`input`, {
              type: `file`,
              accept: `.svg,.png`,
              style: {
                display: `none`,
              },
              multiple: !1,
              name: `fileupload`,
              ref: _,
              onChange: _,
            }),
            (0, _.jsxs)(_, {
              onClick: () => _.current.click(),
              children: [
                (0, _.jsx)(_, {}),
                ` `,
                _(`#TimelineMarkers_Dialog_SVG_button`),
              ],
            }),
          ],
        }),
        (0, _.jsx)(_, {
          appid: _,
          markerID: _
            ? `temp_${_}_${_.timeline_marker_id}`
            : _.timeline_marker_id,
        }),
      ],
    }),
  });
}
function _(_) {
  let { markerID: _, strErrorMessage: _, imageContent: _, imageType: _ } = _,
    _ = _(_),
    _ = _?.trimStart().startsWith(`steam_`),
    _;
  if (_ == 1) {
    let _ = new DOMParser()
        .parseFromString(_, `image/svg+xml`)
        .querySelector(`svg`),
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    if (_) {
      let _ = _.viewBox;
      if (_ && _.baseVal) {
        let _ = _.baseVal;
        (_ = _._), (_ = _._), (_ = _.width), (_ = _.height);
      }
      (_ == 0 || _ == 0) &&
        ((_ = _._.baseVal.value),
        (_ = _._.baseVal.value),
        (_ = _.width.baseVal.value),
        (_ = _.height.baseVal.value)),
        (Math.abs(_ - 0) > 0.5 ||
          Math.abs(_ - 0) > 0.5 ||
          Math.abs(_ - 36) > 0.5 ||
          Math.abs(_ - 36) > 0.5) &&
          (_ = `(${_}, ${_})-(${_ + _}, ${_ + _})`);
    }
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        _.length > 0 &&
        (0, _.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: _(`#TimelineMarkers_Dialog_Name_error`),
        }),
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `_9rhLFCwqjPg-`,
          children: _(`#TimelineMarkers_Dialog_Name_error2`),
        }),
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `EHcr1piLxMU-`,
          children: _(`#TimelineMarkers_Dialog_SVG_warning_dimensions`, _),
        }),
    ],
  });
}
function _(_) {
  let { createVisibilityState: _, setCreateVisibilityState: _ } = _,
    _ = _.useId();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`h3`, {
        _: _,
        children: _(`#TimelineMarkers_Dialog_Visibility`),
      }),
      (0, _.jsx)(_, {
        labelId: _,
        value: _,
        onChange: (_) => {
          _(_);
        },
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              value: `public`,
              children: _(
                `#TimelineMarkers_Dialog_Public`,
                (0, _.jsx)(`b`, {}),
              ),
            }),
            (0, _.jsx)(_, {
              value: `hidden`,
              children: _(
                `#TimelineMarkers_Dialog_Hidden`,
                (0, _.jsx)(`b`, {}),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
var _ = `_4yH1m6ufjJg-`,
  _ = `LZTIpM8pYh0-`,
  _ = `Dspp-lyTkqE-`,
  _ = `a0uMD8KPGBU-`,
  _ = `kKRtxlasxms-`,
  _ = `ef8y-ZEir4c-`,
  _ = `z1LwdkaT2-o-`,
  _ = `ziYUfdrnr6c-`,
  _ = `iGk4KTUY2A8-`;
function _(_) {
  let { appid: _ } = _,
    { publicAssetSetID: _ } = _(_),
    _ = _(_);
  return (0, _.jsx)(`div`, {
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _(_),
              children: _(`#TimelineMarkers_Public_title`),
            }),
            (0, _.jsx)(`div`, {
              children: _(`#TimelineMarkers_Public_desc1`),
            }),
            (0, _.jsx)(`br`, {}),
            (0, _.jsx)(`div`, {
              children: _(`#TimelineMarkers_Public_desc2`),
            }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _
                ? (0, _.jsx)(_, {
                    assetSetID: _,
                    appid: _,
                    bDraggable: !1,
                    strMessageOnEmpty: _(`#TimelineMarkers_Public_none`),
                  })
                : (0, _.jsx)(`div`, {
                    children: _(`#TimelineMarkers_Public_none`),
                  }),
              _?.length > 0 &&
                (0, _.jsx)(_, {
                  assetSetID: _ || `publicmissing`,
                  appid: _,
                  strMessage: _(`#TimelineMarkers_drag_target_public`),
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
var _ = /^assetsetid_(.+)_markerid_(.+)$/,
  _ = /^droptarget_assetsetid_(.+)_appid_(.+)$/;
async function _(_, _) {
  if (!_.destination) return;
  let _ = _.draggableId.match(_),
    _ = _.destination.droppableId.match(_);
  if (!(_?.length > 2 && _?.length > 2)) return;
  let _ = _[1],
    _ = _[2],
    _ = _[1];
  _(_, _, _, Number.parseInt(_[2]));
}
async function _(_, _, _, _) {
  if (_ == _) return _;
  if (_ == `publicmissing`) {
    let _ = await _(_, !0);
    if (_.eResult != 1) {
      let _ = _({
        success: _.eResult,
      });
      return (
        console.error(
          `TimelineMarkerDrop failed to create public asset set: ` +
            _.strErrorMsg,
          _,
        ),
        _
      );
    }
    _ = _.assetSetID;
  }
  let {
      fnCreateTimelineMarkerDefinition: _,
      fnDeleteTimelineMarkerDefinition: _,
      fnUpdateTimelineMarkerDefinition: _,
    } = _(),
    _ = _(_, _),
    _ = 1;
  if (_(_, _)) {
    let _ = _(_, _);
    _ = await _(_, _, _.timeline_marker_id, _, _.image, _.image_type);
  } else _ = await _(_, _, _, _.image, _.image_type);
  if (_ != 1)
    return console.error(`TimelineMarkerDrop failed on step 1` + _), _;
  if (_.unpublished_changes) {
    if (((_ = await _(_, _, _.timeline_marker_id)), _ != 1))
      return console.error(`TimelineMarkerDrop failed on step 2: ` + _), _;
    _ = _(_, _);
  }
  return (
    _ &&
      !_?.unpublished_changes &&
      ((_ = await _(_, _, _.timeline_marker_id)), _ != 1) &&
      console.error(`TimelineMarkerDrop failed on step 3: ` + _),
    _
  );
}
var _ = `I9Y7hMjQzEw-`,
  _ = `NNOIcqpGB9A-`,
  _ = `V02fLYzUulQ-`,
  _ = `a0Z5rLSQVhQ-`;
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    { hiddenAssetSetID: _ } = _(_),
    _ = (0, _.useMemo)(
      () =>
        _?.filter((_) => _.unpublished_changes && _.asset_set_id != _).length ||
        0,
      [_, _],
    );
  return _ == 0
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#TimelineMarkers_Publishing_title`, _),
          }),
          (0, _.jsx)(`div`, {
            children: _(`#TimelineMarkers_Publishing_desc`),
          }),
          (0, _.jsx)(_, {
            onClick: (_) => {
              window.location.href = `${_.PARTNER_BASE_URL}apps/publishing/${_}`;
            },
            children: _(`#TimelineMarkers_Publishing_action`),
          }),
        ],
      });
}
function _(_) {
  let { appid: _, assetSetID: _, closeModal: _ } = _,
    _ = _(_, _),
    { fnCreateAssetSet: _, fnUpdateAssetSet: _ } = _(),
    [_, _] = (0, _.useState)(_.name),
    [_, _] = (0, _.useState)(_.desc),
    _ = _.trimStart().toLowerCase().startsWith(`steam_`),
    _ = _.trim().length == 0,
    _ = _(_ ? `#AssetSet_Dialog_Edit_Title` : `#AssetSet_Dialog_Create_Title`),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _,
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strTitle: _,
        strDescription: _(`#TimelineMarkers_Hidden_new_asset_set_desc`),
        strOKButtonText: _(`#Button_Save`),
        onOK: async () => {
          _.fnSetLoading(!0), (_.name = _), (_.desc = _), (_.appid = _);
          let _ = null;
          try {
            let _;
            _ ? (_ = await _(_)) : ((_.branches = []), (_ = await _(_))),
              _ != 1 &&
                (_ = _({
                  sucess: _,
                }));
          } catch (_) {
            _ = _(_);
          }
          _
            ? (console.error(`Branch Set error ` + _.strErrorMsg, _),
              _.fnSetError(!0),
              _.fnSetStrError(_(`#OptIn_Appeals_Dialog_Failed`)))
            : _.fnSetSuccess(!0);
        },
        onCancel: _,
        bDisableBackgroundDismiss: !1,
        bOKDisabled: _ || _ || _.bLoading,
        children: [
          _ &&
            (0, _.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: _(`#AssetSet_Dialog_Disallowed`),
            }),
          _ &&
            (0, _.jsx)(`div`, {
              className: `wizbFzhGtBc-`,
              children: _(`#AssetSet_Dialog_MustHaveName`),
            }),
          (0, _.jsx)(_, {
            type: `text`,
            label: _(`#AssetSet_Dialog_Edit_Name`),
            value: _,
            onChange: (_) => {
              _(_?.currentTarget?.value || ``);
            },
          }),
          (0, _.jsx)(_, {
            type: `text`,
            label: _(`#AssetSet_Dialog_Edit_Description`),
            value: _,
            onChange: (_) => {
              _(_?.currentTarget?.value || ``);
            },
          }),
        ],
      });
}
function _(_) {
  let { appid: _ } = _,
    { hiddenAssetSetID: _ } = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(void 0, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#TimelineMarkers_Hidden_section_info`),
            }),
            (0, _.jsx)(_, {
              appid: _,
            }),
            (0, _.jsx)(_, {
              appid: _,
              assetSetID: _,
            }),
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        children: _
          ? (0, _.jsx)(_, {
              appid: _,
              assetSetID: _,
              strMessageOnEmpty: _(`#TimelineMarkers_Hidden_none`),
              bDraggable: !0,
            })
          : (0, _.jsx)(`div`, {
              className: _,
              children: _(`#TimelineMarkers_Hidden_none`),
            }),
      }),
      (0, _.jsxs)(`div`, {
        className: _(_, _),
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              size: `10px`,
            }),
          }),
          ` `,
          _(`#TimelineMarkers_drag_source_public`),
        ],
      }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    { hiddenAssetSetID: _ } = _(_),
    _ = _(_, _);
  return (0, _.jsxs)(_, {
    disabled: !_ || !_ || _.size == 0,
    onClick: (_) =>
      _(
        (0, _.jsx)(_, {
          appid: _,
        }),
        _(_),
      ),
    children: [`↑`, ` `, _(`#TimelineMarkers_MoveAllHiddenToPublic`)],
  });
}
function _(_) {
  let { appid: _, closeModal: _ } = _,
    { hiddenAssetSetID: _, publicAssetSetID: _ } = _(_),
    _ = _(_, _),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#TimelineMarkers_MoveAllHiddenToPublic`),
        closeModal: _,
      })
    : (0, _.jsx)(_, {
        strTitle: _(`#TimelineMarkers_MoveAllHiddenToPublic`),
        strDescription: _(`#Dialog_AreYouSure`),
        onCancel: _,
        bOKDisabled: !_,
        onOK: async () => {
          _.fnSetLoading(!0);
          let _ = Array.from(_),
            _ = _;
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_];
            _ = await _(_, _, _, _);
          }
          _.fnSetSuccess(!0);
        },
      });
}
function _(_) {
  let { appid: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        children: _(`#TimelineMarkers_Hidden_new_asset_set_desc`),
      }),
      (0, _.jsx)(_, {
        onClick: (_) =>
          _(
            (0, _.jsx)(_, {
              appid: _,
            }),
            _(_),
          ),
        children: _(`#TimelineMarkers_Hidden_new_asset_set`),
      }),
    ],
  });
}
function _(_) {
  let { oAssetSet: _ } = _;
  return _.name == `steam_default_assetset`
    ? (0, _.jsx)(`span`, {
        children: _(`#TimelineMarkers_Public_title`),
      })
    : _.name == `steam_default_hidden`
      ? (0, _.jsx)(`span`, {
          children: _(`#TimelineMarkers_Hidden_title`),
        })
      : (0, _.jsx)(`span`, {
          children: _.name,
        });
}
var _ = class _ {
  m_vecBranches = [];
  m_mapBranchNameToDetails = new Map();
  GetBranchDetails() {
    return this.m_vecBranches;
  }
  GetBranchDetailsByName(_) {
    return this.m_mapBranchNameToDetails.get(_);
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    let _ = _(`branch_details`, `application_config`);
    this.ValidateStoreDefault(_) &&
      ((this.m_vecBranches = _),
      this.m_vecBranches.forEach((_) =>
        this.m_mapBranchNameToDetails.set(_.name, _),
      ));
  }
  ValidateStoreDefault(_) {
    let _ = _;
    return !!(
      _ &&
      Array.isArray(_) &&
      _.length > 0 &&
      typeof _[0].name == `string`
    );
  }
};
function _() {
  return _.Get().GetBranchDetails();
}
function _(_) {
  return _.Get().GetBranchDetailsByName(_);
}
var _ = `_1-ANcQyJF-0-`,
  _ = `WuStn9k5fWs-`,
  _ = `nhvkFhx29Ps-`;
function _(_) {
  let { oAssetSet: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: void 0,
        children: _(`#TimelineMarkers_Hidden_controls`),
      }),
      _.branches?.length > 0
        ? (0, _.jsx)(_.Fragment, {
            children: _.branches.map((_) =>
              (0, _.jsx)(
                `span`,
                {
                  className: _,
                  children: (0, _.jsx)(_, {
                    branchName: _,
                  }),
                },
                _,
              ),
            ),
          })
        : (0, _.jsx)(`div`, {
            children: _(`#TimelineMarkers_Hidden_nobranches`),
          }),
      (0, _.jsx)(`br`, {}),
      (0, _.jsx)(_, {
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              oAssetSet: _,
            }),
            _(_),
          );
        },
        children: _(`#TimelineMarkers_Hidden_updatebranches`),
      }),
      (0, _.jsx)(_, {
        onClick: () => {},
        children: _(`#TimelineMarkers_Hidden_publishbranch`),
      }),
    ],
  });
}
function _(_) {
  let { oAssetSet: _, closeModal: _ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(new Set(_.branches || [])),
    { fnAddBranchToAssetSet: _, fnRemoveBranchFromAssetSet: _ } = _(),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#TimelineMarkers_Hidden_updatebranches`),
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strTitle: _(`#TimelineMarkers_Hidden_updatebranches`),
        strDescription: _(`#AssetSet_Branch_Dialog_Desc`),
        onCancel: _,
        onOK: async () => {
          _.fnSetLoading(!0);
          let _ = Array.from(_),
            _ = 0,
            _ = 0;
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_];
            if (!_.branches?.includes(_)) {
              if ((await _(_.appid, _.assetset_id, _)) != 1) {
                _.fnSetError(!0);
                return;
              }
              _++;
            }
          }
          let _ = [...(_.branches || [])];
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_];
            if (!_.has(_)) {
              if ((await _(_.appid, _.assetset_id, _)) != 1) {
                _.fnSetError(!0);
                return;
              }
              _++;
            }
          }
          _ == 0 && _ == 0
            ? _.fnSetStrSuccess(_(`#AssetSet_Branch_Dialog_nochange`))
            : _.fnSetStrSuccess(_(`#AssetSet_Branch_Dialog_updated`, _, _)),
            _.fnSetSuccess(!0);
        },
        children: [
          (0, _.jsx)(`br`, {}),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                label: (0, _.jsx)(_, {
                  branchName: _.name,
                }),
                tooltip: _.description,
                checked: _.has(_.name),
                onChange: (_) => {
                  let _ = new Set(_);
                  _ ? _.add(_.name) : _.delete(_.name), _(_);
                },
              },
              _.name,
            ),
          ),
        ],
      });
}
function _(_) {
  let { branchName: _ } = _,
    _ = _(_);
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      _?.password?.length > 0 &&
        (0, _.jsx)(_, {
          toolTipContent: _(`#AssetSet_Branch_Dialog_password`),
          bTopmost: !0,
          children: (0, _.jsx)(`span`, {
            children: `🔒 `,
          }),
        }),
      _,
    ],
  });
}
function _(_) {
  let { appid: _, assetSetID: _, closeModal: _ } = _,
    _ = _(_, _),
    _ = _(_),
    _ = _(_),
    [_, _] = (0, _.useState)(null),
    { fnCreateTimelineMarkerDefinition: _ } = _(),
    { hiddenAssetSetID: _ } = _(_),
    _ = (0, _.useMemo)(() => {
      let _ = new Set();
      _(_.assetset_id).forEach((_) => _.add(_));
      let _ = new Map();
      return (
        _.forEach((_) => {
          _.assetset_id != _.assetset_id && _.set(_.assetset_id, _);
        }),
        _.filter(
          (_) =>
            (!_.unpublished_changes || _.asset_set_id == _) &&
            !_.has(_.markerid),
        ).map((_) => ({
          label: (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                svgXmlUntrusted: _.image,
              }),
              _.markerid,
              ` `,
              `(`,
              (0, _.jsx)(_, {
                oAssetSet: _.get(_.asset_set_id),
              }),
              `)`,
            ],
          }),
          data: _,
        }))
      );
    }, [_.assetset_id, _, _, _]),
    _ = _();
  return _.bLoading
    ? (0, _.jsx)(_, {
        state: _,
        strDialogTitle: _(`#TimelineMarker_Clone_title`),
        closeModal: _,
      })
    : (0, _.jsxs)(_, {
        strTitle: _(`#TimelineMarker_Clone_title`),
        strDescription: _(`#TimelineMarker_Clone_desc`, _.name),
        onCancel: _,
        bOKDisabled: !_,
        onOK: async () => {
          _.fnSetLoading(!0),
            (await _(_, _, _.markerid, _.image, _.image_type)) == 1
              ? (_.fnSetStrSuccess(_(`#TimelineMarker_Clone_success`)),
                _.fnSetSuccess(!0))
              : _.fnSetError(!0);
        },
        children: [
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            rgOptions: _,
            selectedOption: _,
            onChange: (_) => _(_.data),
          }),
        ],
      });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(_),
    [_] = _(`branchset`, !1);
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
                children: _(`#TimelineMarkers_Hidden_title`),
              }),
              (0, _.jsx)(`div`, {
                children: _(`#TimelineMarkers_Hidden_desc2`),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            appid: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsxs)(`div`, {
          className: `kKRtxlasxms-`,
          children: [
            (0, _.jsxs)(`div`, {
              className: `ef8y-ZEir4c-`,
              children: [
                (0, _.jsx)(`div`, {
                  className: `fk3H7RK1Wg8-`,
                  children: _(`#TimelineMarkers_Hidden_branchsets_title`),
                }),
                (0, _.jsx)(_, {
                  appid: _,
                }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: `SWJQfBkJ08E-`,
              children: _?.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    assetSetID: _.assetset_id,
                  },
                  _.assetset_id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { appid: _, assetSetID: _ } = _,
    _ = _(_, _);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                toolTipContent: _.desc,
                children: (0, _.jsx)(`div`, {
                  className: _,
                  children: _.name,
                }),
              }),
              (0, _.jsx)(_, {
                appid: _.appid,
                assetSetID: _.assetset_id,
              }),
            ],
          }),
          (0, _.jsx)(_, {
            oAssetSet: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                assetSetID: _.assetset_id,
                appid: _.appid,
                strMessageOnEmpty: ``,
                bDraggable: !0,
              }),
              (0, _.jsx)(_, {
                assetSetID: _.assetset_id,
                appid: _.appid,
                strMessage: _(`#TimelineMarkers_drag_target`),
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(_, {
              onClick: (_) =>
                _(
                  (0, _.jsx)(_, {
                    appid: _,
                    assetSetID: _,
                  }),
                  _(_),
                ),
              children: _(`#TimelineMarker_Clone_title`),
            }),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { appId: _ } = _,
    _ = Number.parseInt(_);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(_, {
      onDragEnd: _,
      children: [
        (0, _.jsx)(_, {
          appid: _,
        }),
        (0, _.jsx)(_, {
          appid: _,
        }),
        (0, _.jsx)(_, {
          appid: _,
        }),
        (0, _.jsx)(_, {
          appid: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { appid: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#TimelineMarkers_Editor_title`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(`#TimelineMarkers_Editor_desc`),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`a`, {
                href: `${_.PARTNER_BASE_URL}doc/features/timeline`,
                className: _(_, _),
                target: `_blank`,
                children: _(`#AssetRequest_General_SeeDocs`),
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  onClick: (_) =>
                    _(
                      (0, _.jsx)(_, {
                        appid: _,
                      }),
                      _(_),
                    ),
                  children: _(`#TimelineMarkers_Editor_createnew`),
                }),
                (0, _.jsx)(`div`, {
                  children: _(`#TimelineMarkers_Editor_createnew_desc`),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { _ as default };
