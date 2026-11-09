import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _ } from "./vodquery.js";
import { _, _, _, _, _ } from "./emoticonbutton.js";
import { _, _ } from "./carouselarrows.js";
import { _, _, _ } from "./reactbbcodeparser.js";
import { _ } from "./bbcodes.module.js";
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
} from "./main.js";
var _ = class {
  m_summary = void 0;
  m_mapStoredDrafts;
  m_mapLocalUpdates = new Map();
  constructor(_, _) {
    (_(this),
      (this.m_summary = _),
      (this.m_mapStoredDrafts = _),
      (this.m_mapLocalUpdates = new Map()));
    for (let _ = 0; _ < 32; _++) this.m_mapLocalUpdates.set(_, {});
  }
  BNeedsSaving(_) {
    if (_ !== void 0) {
      let _ = this.m_mapLocalUpdates.get(_);
      return !!_.strTitle || !!_.strContent;
    }
    return Array.from(this.m_mapLocalUpdates.values()).some(
      (_) => !!_.strTitle || !!_.strContent,
    );
  }
  async SaveDrafts() {
    _(
      !!this.m_summary?.faq_id,
      `Attempting to save when we lack a FaqID in the summary object`,
    );
    let _ = 1,
      _ = [];
    for (let _ = 0; _ < 32; ++_)
      if (
        (this.m_mapLocalUpdates.get(_).strTitle &&
          this.m_mapLocalUpdates.get(_).strTitle !==
            this.m_mapStoredDrafts.get(_)?.title) ||
        (this.m_mapLocalUpdates.get(_).strContent &&
          this.m_mapLocalUpdates.get(_).strContent !==
            this.m_mapStoredDrafts.get(_)?.content)
      ) {
        let _ = this.GetDraftTitle(_),
          _ = this.GetDraftContent(_),
          _ = _.Get().UpdateDraft(this.m_summary?.faq_id, _, _, _);
        (_.then((_) => {
          _.eResult == 1
            ? _(() => {
                (this.m_mapStoredDrafts.has(_) ||
                  this.m_mapStoredDrafts.set(_, {}),
                  (this.m_mapStoredDrafts.get(_).title = _),
                  (this.m_mapStoredDrafts.get(_).content = _),
                  (this.m_mapStoredDrafts.get(_).timestamp = _.rtUpdateTime),
                  (this.m_mapStoredDrafts.get(_).author_account_id =
                    _.accountid.toString()),
                  (this.m_mapLocalUpdates.get(_).strTitle = null),
                  (this.m_mapLocalUpdates.get(_).strContent = null));
                let _ = !1;
                (this.m_summary.per_language_info.forEach((_) => {
                  _ == _.language &&
                    ((_ = !0),
                    (_.last_update_timestamp = Math.max(
                      _.last_update_timestamp,
                      _.rtUpdateTime,
                    )));
                }),
                  _ ||
                    this.m_summary.per_language_info.push({
                      language: _,
                      last_update_timestamp: _.rtUpdateTime,
                    }));
              })
            : _ == 1 &&
              (console.error(
                `FAQModel.SaveDraft: Response not ok ` + _.eResult,
                _,
              ),
              (_ = _.eResult));
        }).catch((_) => {
          (console.error(`FAQModel.SaveDrafts: Hit error ` + _(_).strErrorMsg),
            _ == 1 && (_ = 2));
        }),
          _.push(_));
      }
    return (await Promise.all(_), _);
  }
  GetFAQInternalName() {
    return this.m_summary?.internal_name;
  }
  GetDraftTitle(_) {
    return this.m_mapLocalUpdates.get(_).strTitle !== null &&
      this.m_mapLocalUpdates.get(_).strTitle !== void 0
      ? this.m_mapLocalUpdates.get(_).strTitle
      : this.m_mapStoredDrafts.get(_)?.title;
  }
  GetDraftContent(_) {
    return this.m_mapLocalUpdates.get(_).strContent !== null &&
      this.m_mapLocalUpdates.get(_).strContent !== void 0
      ? this.m_mapLocalUpdates.get(_).strContent
      : this.m_mapStoredDrafts.get(_)?.content;
  }
  GetDraftTitleWithFallback(_, _ = _.k_ESteamRealmGlobal) {
    let _ = _ == _.k_ESteamRealmChina ? 6 : 0;
    return (
      this.m_mapLocalUpdates.get(_).strTitle ??
      this.m_mapLocalUpdates.get(_).strTitle ??
      this.m_mapStoredDrafts.get(_)?.title ??
      this.m_mapStoredDrafts.get(_)?.title ??
      ``
    );
  }
  GetDraftContentWithFallback(_, _ = _.k_ESteamRealmGlobal) {
    let _ = _ == _.k_ESteamRealmChina ? 6 : 0;
    return (
      this.m_mapLocalUpdates.get(_).strContent ??
      this.m_mapLocalUpdates.get(_).strContent ??
      this.m_mapStoredDrafts.get(_)?.content ??
      this.m_mapStoredDrafts.get(_)?.content ??
      ``
    );
  }
  GetLastSavedDraftVersion(_) {
    return this.m_mapStoredDrafts.get(_);
  }
  BHasSomeTextForLanguage(_) {
    return !!(this.GetDraftContent(_) || this.GetDraftTitle(_));
  }
  SetDraftTitle(_, _) {
    _ === this.m_mapStoredDrafts.get(_)?.title
      ? (this.m_mapLocalUpdates.get(_).strTitle = null)
      : (this.m_mapLocalUpdates.get(_).strTitle = _);
  }
  SetDraftContent(_, _) {
    _ === this.m_mapStoredDrafts.get(_)?.content
      ? (this.m_mapLocalUpdates.get(_).strContent = null)
      : (this.m_mapLocalUpdates.get(_).strContent = _);
  }
  GetIncludedRealmList() {
    let _ = [];
    return (
      this.m_summary.visible_in_global_realm && _.push(_.k_ESteamRealmGlobal),
      this.m_summary.visible_in_china_realm && _.push(_.k_ESteamRealmChina),
      _.length == 0 && _.push(_.k_ESteamRealmGlobal),
      _(
        _.length > 0,
        `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
      ),
      _
    );
  }
  BHasPublished() {
    return !!this.m_summary.per_language_info.some(
      (_) => !!_.last_publish_timestamp,
    );
  }
  GetLastTimeLanguageUpdated(_) {
    return this.GetLastSavedDraftVersion(_)?.timestamp ?? 0;
  }
  GetFAQID() {
    return this.m_summary.faq_id;
  }
  GetSummary() {
    return this.m_summary;
  }
  BLocalizeDraft() {
    return this.m_summary.json_data.length === 0
      ? !1
      : (JSON.parse(this.m_summary.json_data).localizeDraft ?? !1);
  }
  BPushToCrowdIn() {
    return this.m_summary.json_data.length === 0
      ? !1
      : (JSON.parse(this.m_summary.json_data).pushToCrowdIn ?? !1);
  }
  GetJsonData() {
    return this.m_summary.json_data;
  }
  async UpdateJsonData(_) {
    let _ = await _.Get().UpdateJsonData(this.GetFAQID(), _);
    return (_ === 1 && (this.m_summary.json_data = JSON.stringify(_)), _);
  }
};
(_([_], _.prototype, `m_summary`, void 0),
  _([_], _.prototype, `m_mapLocalUpdates`, void 0),
  _([_], _.prototype, `BHasSomeTextForLanguage`, null),
  _([_], _.prototype, `GetLastTimeLanguageUpdated`, null));
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            internal_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            visible_in_global_realm: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            visible_in_china_realm: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            json_data: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            per_language_info: {
              _: 6,
              _: _,
              _: !0,
              _: !0,
            },
            url_code: {
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
      return `CClanFAQSummary`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            language: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            last_update_timestamp: {
              _: 2,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            last_publish_timestamp: {
              _: 3,
              _: _.readFixed32,
              _: _.writeFixed32,
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
      return `CClanFAQSummary_CLanguageInfo`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            version: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            content: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            title: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            timestamp: {
              _: 6,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            author_account_id: {
              _: 7,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            url_code: {
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
      return `CClanFAQContent`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            internal_name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            json_data: {
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
      return `CClanFAQS_Create_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
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
      return `CClanFAQS_Create_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
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
      return `CClanFAQS_Delete_Request`;
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
      return `CClanFAQS_Delete_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            internal_name: {
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
      return `CClanFAQS_UpdateInternalName_Request`;
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
      return `CClanFAQS_UpdateInternalName_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            json_data: {
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
      return `CClanFAQS_UpdateJsonData_Request`;
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
      return `CClanFAQS_UpdateJsonData_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            visible_in_global_realm: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            visible_in_china_realm: {
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
      return `CClanFAQS_SetVisibility_Request`;
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
      return `CClanFAQS_SetVisibility_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            content: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            title: {
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
      return `CClanFAQS_UpdateDraft_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.last_update_timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            last_update_timestamp: {
              _: 1,
              _: _.readFixed32,
              _: _.writeFixed32,
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
      return `CClanFAQS_UpdateDraft_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null));
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
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
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
      return `CClanFAQS_PublishDraft_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.last_publish_timestamp || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            last_publish_timestamp: {
              _: 1,
              _: _.readFixed32,
              _: _.writeFixed32,
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
      return `CClanFAQS_PublishDraft_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
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
      return `CClanFAQS_PreviewDraft_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq: {
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
      return `CClanFAQS_PreviewDraft_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
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
      return `CClanFAQS_GetFAQ_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq: {
              _: 1,
              _: _,
            },
            faq_exists: {
              _: 2,
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
      return `CClanFAQS_GetFAQ_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            version: {
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
      return `CClanFAQS_GetFAQVersion_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq: {
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
      return `CClanFAQS_GetFAQVersion_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
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
      return `CClanFAQS_GetAllDrafts_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.summary || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null));
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
            draft: {
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
      return `CClanFAQS_GetAllDrafts_Response`;
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
      return `CClanFAQS_GetAllFAQsForClan_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq: {
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
      return `CClanFAQS_GetAllFAQsForClan_Response`;
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
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            faq_id: {
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
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faqs || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faqs: {
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
      return `CClanFAQS_GetAllLatestVersionPublishedFAQS_Response`;
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
      return `CClanFAQS_CheckFAQPermissions_Request`;
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
      return `CClanFAQS_CheckFAQPermissions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.search_text || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            search_text: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            elanguages: {
              _: 2,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            count: {
              _: 3,
              _: _.readInt32,
              _: _.writeInt32,
            },
            cursor: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            filter_clanids: {
              _: 5,
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
      return `CClanFAQS_SearchFAQs_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faqs || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faqs: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            num_total_results: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
            next_cursor: {
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
      return `CClanFAQS_SearchFAQs_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.articleid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            articleid: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            name: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            content: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            clan_accountid: {
              _: 4,
              _: _.readUint32,
              _: _.writeUint32,
            },
            url_code: {
              _: 5,
              _: _.readString,
              _: _.writeString,
            },
            localized_names: {
              _: 6,
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
      return `CClanFAQS_SearchFAQs_Response_CFAQSearchResult`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            language: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            steamid: {
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
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Request`;
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
      return `CClanFAQs_FetchLocalizationFromCrowdIn_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.faq_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            faq_id: {
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
      return `CClanFAQs_GetCrowdInMetadata_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      (super(),
        _.prototype.crowdin_project_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            crowdin_project_id: {
              _: 1,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            crowdin_file_id: {
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
      return `CClanFAQs_GetCrowdInMetadata_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.Create#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.Create = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.Delete#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.Delete = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.UpdateInternalName#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.UpdateInternalName = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.UpdateJsonData#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.UpdateJsonData = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.SetVisibility#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.SetVisibility = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.UpdateDraft#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.UpdateDraft = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.PublishDraft#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  _.PublishDraft = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.PreviewDraft#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.PreviewDraft = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.GetFAQ#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetFAQ = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.GetFAQVersion#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  _.GetFAQVersion = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.GetAllDrafts#1`, _(_, _, _), _, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`, `community`],
    });
  }
  _.GetAllDrafts = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.GetAllFAQsForClan#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAllFAQsForClan = _;
  function _(_, _, _) {
    return _.SendMsg(
      `ClanFAQS.GetAllLatestVersionPublishedFAQS#1`,
      _(_, _, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetAllLatestVersionPublishedFAQS = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.CheckFAQPermissions#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CheckFAQPermissions = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.SearchFAQs#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  _.SearchFAQs = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.FetchLocalizationFromCrowdIn#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.FetchLocalizationFromCrowdIn = _;
  function _(_, _, _) {
    return _.SendMsg(`ClanFAQS.GetCrowdInMetadata#1`, _(_, _, _), _, {
      ePrivilege: 5,
      rgBrowserAPISites: [`community`],
    });
  }
  _.GetCrowdInMetadata = _;
})((_ ||= {}));
var _ = _(_()),
  _ = _(_()),
  _ = class _ {
    m_mapFAQSummaries = new Map();
    m_mapFAQPublishedContent = new Map();
    m_mapFAQDrafts = new Map();
    m_bHasFAQEdit = !1;
    m_steamInterface = null;
    static s_Singleton;
    static Get() {
      return ((_.s_Singleton ||= new _()), _.s_Singleton);
    }
    static Init(_) {
      _.Get().m_steamInterface = _;
    }
    constructor() {
      (_(this),
        _.IN_STEAMUI ||
          (this.ReadInitialPayload(), this.SetUpWebAPIInterface()));
    }
    SetUpWebAPIInterface() {
      let _ = _(`faqstore`, `application_config`)?.webapi_token;
      this.m_steamInterface = _(new _(_.WEBAPI_BASE_URL, _));
    }
    ReadInitialPayload() {
      let _ = _(`faqstore`, `application_config`);
      if (this.BIsConfigValid(_)) {
        if (_.faqs)
          for (let _ in _.faqs) {
            let _ = _.faqs[_];
            _?.faq_id == _ &&
              _?.language !== void 0 &&
              (this.m_mapFAQPublishedContent.has(_) ||
                this.m_mapFAQPublishedContent.set(_, new Map()),
              this.m_mapFAQPublishedContent.get(_).set(_.language, _));
          }
        if (_.alldrafts)
          for (let _ in _.alldrafts) {
            let _ = _.alldrafts[_];
            if (!_?.summary || !_.draft) continue;
            this.m_mapFAQSummaries.set(_, _.summary);
            let _ = new Map();
            for (let _ of _.draft) _.set(_.language, _);
            this.m_mapFAQDrafts.set(_, new _(this.m_mapFAQSummaries.get(_), _));
          }
        if (_.allfaqs)
          for (let _ of _.allfaqs)
            _.faq_id &&
              (this.m_mapFAQSummaries.has(_.faq_id) ||
                this.m_mapFAQSummaries.set(_.faq_id, _));
        this.m_bHasFAQEdit = !!_.has_faq_edit;
      }
    }
    BIsConfigValid(_) {
      let _ = _;
      return !!(
        (_ && _.faqs && typeof _.faqs == `object`) ||
        (_.alldrafts && typeof _.alldrafts == `object`) ||
        (_.allfaqs && Array.isArray(_.allfaqs))
      );
    }
    async CreateFAQ(_) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID), _.Body().set_internal_name(_));
      let _ = 2,
        _;
      try {
        let _ = await _.Create(this.m_steamInterface.GetServiceTransport(), _);
        if (((_ = _.GetEResult()), _ == 1)) {
          _ = _.Body().faq_id();
          let _ = {
            faq_id: _,
            internal_name: _,
          };
          this.m_mapFAQSummaries.set(_, _);
        } else console.error(`FAQStore.CreateFAQ: Create request failed:`, _);
      } catch (_) {
        let _ = _(_);
        console.error(`FAQStore.CreateFAQ: caught error ` + _.strErrorMsg, _);
      }
      return {
        eResult: _,
        strFaqId: _,
      };
    }
    async UpdateDraft(_, _, _, _) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.Body().set_language(_),
        _.Body().set_content(_),
        _.Body().set_title(_));
      let _ = 2,
        _ = 0;
      try {
        let _ = await _.UpdateDraft(
          this.m_steamInterface.GetServiceTransport(),
          _,
        );
        ((_ = _.GetEResult()),
          _ == 1
            ? (_ = _.Body().last_update_timestamp())
            : console.error(`FAQStore.UpdateDraft request failed:`, _));
      } catch (_) {
        let _ = _(_);
        console.error(`FAQStore.UpdateDraft: caught error ` + _.strErrorMsg, _);
      }
      return {
        eResult: _,
        rtUpdateTime: _,
      };
    }
    async UpdateJsonData(_, _) {
      let _ = JSON.stringify(_),
        _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.Body().set_json_data(_));
      let _ = 2;
      try {
        ((_ = (
          await _.UpdateJsonData(this.m_steamInterface.GetServiceTransport(), _)
        ).GetEResult()),
          _ == 1
            ? (this.m_mapFAQSummaries.get(_).json_data = _)
            : console.error(`FAQStore.UpdateJsonData request failed:`, _));
      } catch (_) {
        let _ = _(_);
        console.error(
          `FAQStore.UpdateJsonData: caught error ` + _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async GetFAQVersion(_, _, _) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.Body().set_version(_),
        _.Body().set_language(_));
      try {
        let _ = await _.GetFAQVersion(
            this.m_steamInterface.GetServiceTransport(),
            _,
          ),
          _ = _.GetEResult();
        if (_ == 1) return _.Body().faq().toObject();
        console.error(`FAQStore.GetFAQVersion request failed:`, _);
      } catch (_) {
        let _ = _(_);
        console.error(
          `FAQStore.GetFAQVersion: caught error ` + _.strErrorMsg,
          _,
        );
      }
      return null;
    }
    async DeleteFAQ(_) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID), _.Body().set_faq_id(_));
      let _ = 2;
      try {
        ((_ = (
          await _.Delete(this.m_steamInterface.GetServiceTransport(), _)
        ).GetEResult()),
          _ == 1
            ? (this.m_mapFAQDrafts.delete(_),
              this.m_mapFAQPublishedContent.delete(_),
              this.m_mapFAQSummaries.delete(_))
            : console.error(`FAQStore.DeleteFAQ request failed:`, _));
      } catch (_) {
        let _ = _(_);
        console.error(`FAQStore.DeleteFAQ: caught error ` + _.strErrorMsg, _);
      }
      return _;
    }
    static sm_mapFallbackLanguages = new Map([
      [5, 27],
      [27, 5],
      [29, 6],
    ]);
    GetFAQPublishedContent(_, _) {
      let _ = this.m_mapFAQPublishedContent.get(_);
      if (!_) return null;
      let _ = _.get(_);
      return (
        !_ &&
          _.sm_mapFallbackLanguages.has(_) &&
          (_ = _.get(_.sm_mapFallbackLanguages.get(_))),
        !_ && _ != 0 && !_() && (_ = _.get(0)),
        _
      );
    }
    GetFAQDraftContent(_) {
      return this.m_mapFAQDrafts.get(_);
    }
    GetAllFAQSummaries() {
      return Array.from(this.m_mapFAQSummaries.values());
    }
    GetFAQArticleSummary(_) {
      return this.m_mapFAQSummaries.get(_) || {};
    }
    async LoadFAQDraftContent(_) {
      if (this.m_mapFAQDrafts.has(_)) return this.m_mapFAQDrafts.get(_);
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID), _.Body().set_faq_id(_));
      let _ = 2;
      try {
        let _ = await _.GetAllDrafts(
          this.m_steamInterface.GetServiceTransport(),
          _,
        );
        if (((_ = _.GetEResult()), _ != 1))
          return (
            console.error(`FaqStore.LoadFAQDraftContent request failed:`, _),
            null
          );
        {
          let _ = _.Body().summary().toObject();
          this.m_mapFAQSummaries.set(_, _);
          let _ = new Map();
          _.Body()
            .draft()
            .forEach((_) => _.set(_.language(), _.toObject()));
          let _ = new _(this.m_mapFAQSummaries.get(_), _);
          return (this.m_mapFAQDrafts.set(_, _), _);
        }
      } catch (_) {
        let _ = _(_);
        console.error(
          `FaqStore.LoadFAQDraftContent: exception ` + _.strErrorMsg,
          _,
        );
      }
      return null;
    }
    async UpdateVisibility(_, _, _) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.Body().set_visible_in_global_realm(_),
        _.Body().set_visible_in_china_realm(_));
      let _ = 2;
      try {
        if (
          ((_ = (
            await _.SetVisibility(
              this.m_steamInterface.GetServiceTransport(),
              _,
            )
          ).GetEResult()),
          _ === 1)
        ) {
          let _ = this.m_mapFAQSummaries.get(_);
          _ &&
            ((_.visible_in_global_realm = _),
            (_.visible_in_china_realm = _),
            this.m_mapFAQSummaries.set(_, _));
        } else console.error(`FaqStore.UpdateVisibility: Failed ` + _);
      } catch (_) {
        let _ = _(_);
        console.error(
          `FaqStore.UpdateVisibility: exception ` + _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async PublishDraftByLanguage(_, _) {
      if (!_ || _.length == 0) return 1;
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.forEach((_) => _.Body().add_language(_)));
      let _ = 2;
      try {
        let _ = await _.PublishDraft(
          this.m_steamInterface.GetServiceTransport(),
          _,
        );
        if (((_ = _.GetEResult()), _ === 1)) {
          let _ = this.m_mapFAQSummaries.get(_);
          _ &&
            _(() => {
              (this.m_mapFAQPublishedContent.has(_) ||
                this.m_mapFAQPublishedContent.set(_, new Map()),
                _.per_language_info.forEach((_) => {
                  let _ = _.language;
                  if (_.indexOf(_) >= 0) {
                    _.last_publish_timestamp = Math.max(
                      _.last_publish_timestamp,
                      _.Body().last_publish_timestamp(),
                    );
                    let _ = this.m_mapFAQDrafts
                      .get(_)
                      ?.GetLastSavedDraftVersion(_);
                    this.m_mapFAQPublishedContent.get(_).set(_, _);
                  }
                }));
            });
        } else console.error(`FaqStore.PublishDraftByLanguage: Failed ` + _);
      } catch (_) {
        let _ = _(_);
        console.error(
          `FaqStore.PublishDraftByLanguage: exception ` + _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    async UpdateInternalName(_, _) {
      let _ = _.Init(_);
      (_.Body().set_steamid(_.CLANSTEAMID),
        _.Body().set_faq_id(_),
        _.Body().set_internal_name(_));
      let _ = 2;
      try {
        ((_ = (
          await _.UpdateInternalName(
            this.m_steamInterface.GetServiceTransport(),
            _,
          )
        ).GetEResult()),
          _ === 1
            ? _(() => {
                (this.m_mapFAQSummaries.get(_)?.internal_name &&
                  (this.m_mapFAQSummaries.get(_).internal_name = _),
                  this.m_mapFAQDrafts.get(_)?.GetSummary()?.internal_name &&
                    (this.m_mapFAQDrafts.get(_).GetSummary().internal_name =
                      _));
              })
            : console.error(`FaqStore.UpdateInternalName: Failed ` + _));
      } catch (_) {
        let _ = _(_);
        console.error(
          `FaqStore.UpdateInternalName: exception ` + _.strErrorMsg,
          _,
        );
      }
      return _;
    }
    GetLoadedDraftObjs() {
      return Array.from(this.m_mapFAQDrafts.values());
    }
    RemoveAllDirtyDrafts() {
      this.GetLoadedDraftObjs()
        ?.filter((_) => _.BNeedsSaving())
        ?.map((_) => _.GetFAQID())
        ?.forEach((_) => this.m_mapFAQDrafts.delete(_));
    }
    BHasFAQEdit() {
      return this.m_bHasFAQEdit;
    }
    async ExportEnglishDraftToCrowdin(_) {
      let _ =
        _.COMMUNITY_BASE_URL +
        `faqs/` +
        _.VANITY_ID +
        `/ajaxpushtocrowdin/` +
        _(_);
      await _.default.get(_);
    }
    async ImportNonEnglishDraftsFromCrowdin(_, _, _) {
      let _ =
          _.COMMUNITY_BASE_URL +
          `faqs/` +
          _.VANITY_ID +
          `/ajaxpullfromcrowdin/` +
          _(_),
        _ = new FormData();
      (_.append(`sessionid`, _()), _.append(`languages`, _.join(`,`)));
      let _ = null;
      try {
        let _ = await _.default.post(_, _, {
          withCredentials: !0,
          cancelToken: _?.token,
        });
        if (_?.status == 200 && _.data?.success == 1) {
          let _ = _.data.updated?.[_] ?? [];
          return (
            _.length > 0 &&
              (this.m_mapFAQSummaries.has(_) || this.m_mapFAQDrafts.has(_)) &&
              (this.m_mapFAQDrafts.delete(_),
              await this.LoadFAQDraftContent(_)),
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
        console.error(`Could not import from crowdin`, _, _.strErrorMsg, _), []
      );
    }
    BHasLiveEnglishVersion(_) {
      return this.m_mapFAQSummaries
        .get(_)
        .per_language_info.some(
          (_) => _.language == 0 && _.last_publish_timestamp > 0,
        );
    }
    GetNonEnglishDraftsToPublish(_) {
      return this.m_mapFAQSummaries
        .get(_)
        .per_language_info.filter(
          (_) =>
            _.language != 0 &&
            _.last_update_timestamp > (_.last_publish_timestamp ?? 0),
        )
        .map((_) => _.language);
    }
  };
(_([_], _.prototype, `m_mapFAQSummaries`, void 0),
  _([_], _.prototype, `RemoveAllDirtyDrafts`, null));
var _ = /^[0-9a-fA-F]+$/;
function _(_) {
  let _ = _?.replace(/-/g, ``);
  return _?.length != 16 || !_.test(_)
    ? null
    : _.fromString(_, !0, 16).toString();
}
function _(_) {
  let _ = (`0000000000000000` + _.fromString(_, !0, 10).toString(16))
    .slice(-16)
    .toUpperCase();
  return `${_.slice(0, 4)}-${_.slice(4, 8)}-${_.slice(8, 12)}-${_.slice(12, 16)}`;
}
function _(_, _) {
  return [_ && _.Get().GetFAQPublishedContent(_, _), !0];
}
function _(_) {
  let [_, _] = _.useState(_.Get().GetFAQDraftContent(_)),
    [_, _] = _.useState(!!_);
  return (
    (0, _.useEffect)(() => {
      _.Get()
        .LoadFAQDraftContent(_)
        .then((_) => _(_))
        .finally(() => _(!0));
    }, [_]),
    [_, _]
  );
}
function _(_) {
  return [_.Get().GetFAQArticleSummary(_), !0];
}
function _() {
  let _ = _.Get().GetAllFAQSummaries();
  return _.useRef([_, !0]).current;
}
function _(_, _, _) {
  let [_, _] = _.useState(null),
    [_, _] = _.useState(!1);
  return (
    (0, _.useEffect)(() => {
      _.Get().BHasFAQEdit() &&
        _.Get()
          .GetFAQVersion(_, _, _)
          .then((_) => _(_))
          .finally(() => _(!0));
    }, [_, _, _]),
    [_, _]
  );
}
var _ = `tx9MNKWLI1w-`,
  _ = `_2lwQ-8HytBg-`,
  _ = `GnRedTL6kYE-`,
  _ = _(),
  _ = new Map([
    ...Array.from(_.entries()),
    ...Array.from(_.entries()),
    [
      `section`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `img`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `exclude_realm`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
    [
      `button`,
      {
        Constructor: _,
        autocloses: !1,
      },
    ],
  ]),
  _ = (_) => {
    let { text: _, bShowErrorInfo: _, version: _, language: _ } = _,
      _ = _.useCallback(
        (_) =>
          new _(
            new _(
              new _(new _()),
              _,
              [
                {
                  urlRegExp: /youtu.be|youtube.com/i,
                  fnBBComponent: _,
                },
              ],
              {},
            ),
            _,
          ),
        [],
      ),
      _ = _.useMemo(() => new _(_, _, _ ?? _.LANGUAGE), [_, _]);
    return (0, _.jsx)(`div`, {
      className: _,
      children: _.ParseBBCode(_, {
        showErrorInfo: _,
        version: _,
      }),
    });
  };
function _(_) {
  let _ = _(_.args, `id`);
  _ &&
    typeof _ == `string` &&
    _.length > 0 &&
    _[0] === `#` &&
    (_ = _.substring(1));
  let _ = _(_.args, `style`),
    _ = _(
      _,
      _ == `note` && `ZxkdkHVBTHY-`,
      _ == `important` && `FvfN1oIirNI-`,
      _ == `warning` && `qX71Hmv-kmU-`,
    );
  return (0, _.jsx)(`div`, {
    _: _ || void 0,
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { showErrorInfo: _, version: _ } = _.context,
    _ = _?.children?.toString();
  (_ == null || _ == null || _.length == 0) && (_ = _?.args?.[``]);
  let _ = _?.args?.alt,
    _ = _(_, _.language, Number.parseInt(_));
  return _ == null
    ? null
    : typeof _ == `string`
      ? ((_ = _),
        _
          ? (0, _.jsx)(_, {
              className: _,
              src: _,
              alt: _,
            })
          : ((_ = _.replace(`http://`, `https://`)),
            (0, _.jsx)(`img`, {
              className: _,
              src: _,
              alt: _,
            })))
      : (0, _.jsx)(_, {
          className: _,
          rgSources: _,
          alt: _,
        });
}
function _(_) {
  let _ = _(_.args);
  return (_ == `global` && _.EREALM == _.k_ESteamRealmGlobal) ||
    (_ == `china` && _())
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.children,
      });
}
function _(_) {
  let _ = _(_(_.args));
  return _
    ? (0, _.jsx)(_, {
        href: _,
        openInNewWindow: !0,
        "data-faq-button": !0,
        children: _.children,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _.children,
      });
}
