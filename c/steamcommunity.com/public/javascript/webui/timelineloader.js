import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~d3515eca4e.js";
import { _, _, _ } from "./chunk~e464778a03.js";
import { _ } from "./chunk~0ef0cd2c00.js";
import { _ } from "./chunk~198b531c82.js";
var _ = _(_(), 1),
  _ = new _(`GR`);
function _(_) {
  return (..._) => {
    _(`[${(performance.now() / 1e3).toFixed(3)}]`, ..._);
  };
}
var _ = _(_.Debug),
  _ = _(_.Info),
  _ = _(_.Warning),
  _ = _(_.Error),
  _ = _;
function _() {
  return _.IsDebugEnabled();
}
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
      ((_.type = `gamemode`), (_.mode = _.game_mode));
      break;
    }
    case 5: {
      let _ = _;
      ((_.type = `usermarker`),
        (_.icon = `steam_marker`),
        (_.priority = _.marker_priority));
      break;
    }
    case 4: {
      let _ = _;
      ((_.type = `achievement`), (_.achievement_name = _.achievement_name));
      break;
    }
    case 7: {
      let _ = _;
      ((_.type = `error`), (_.description = _.marker_description));
      break;
    }
    case 3: {
      let _ = _;
      ((_.type = `state_description`), (_.title = _.timestamp_title));
      break;
    }
    case 2: {
      let _ = _;
      ((_.type = `event`),
        (_.icon = _.marker_icon),
        (_.title = _.range_title),
        (_.description = _.marker_description),
        (_.priority = _.marker_priority),
        (_.duration = _.range_duration),
        (_.possible_clip = _.range_possible_clip));
      break;
    }
    case 6: {
      let _ = _;
      ((_.type = `screenshot`),
        (_.icon = _.marker_icon),
        (_.priority = _.marker_priority),
        (_.handle = _.screenshot_handle));
      break;
    }
    default:
      return null;
  }
  return _;
}
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
_();
var _ = 1e4,
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
      return (this.m_rgListeners.push(_), () => _(this.m_rgListeners, _));
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
      (this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
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
      ((this.m_gameID = _), this.UpdateTimelineMetadata(_));
      for (let _ of this.m_rgTimelineMetadata) {
        _(`Loaded clip ${_} timeline ${_.metadata.timeline_id}`);
        for (let _ of _.metadata.recordings)
          _(`Clip recording ${_.recording_id} duration ${_.duration_ms}`);
      }
      ((this.m_ulFirstTimelineOffsetMS = parseInt(_)),
        (this.m_fnTimelineURLBuilder = (_) =>
          `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${_}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    UpdateTimelineMetadata(_) {
      let _ = _.slice().sort((_, _) => _.date_recorded - _.date_recorded),
        _ = [],
        _ = 0,
        _ = {};
      (_.forEach((_) => {
        ((_.recordings ||= []),
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
              (_[_.timeline_id] = !0)));
      }),
        (this.m_rgTimelineMetadata = _));
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
      ((this.m_gameID = _),
        (this.m_clipID = _),
        (this.m_ulFirstTimelineOffsetMS = _));
      let _ = _.slice();
      (this.m_mapRunningTimelines.forEach((_, _) => {
        _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
      }),
        this.UpdateTimelineMetadata(_),
        (this.m_fnTimelineURLBuilder = _),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
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
        ((_.m_rgGameModeChanges = _.sort(_)),
          (_.m_rgStateDescriptions = _.sort(_)),
          (_.m_rgPhases = _.sort(_)),
          (_.m_rgEntries = _.sort(_)),
          _.m_rgGameModeChanges.length > 0 &&
            parseInt(_.m_rgGameModeChanges[0].time) < _ &&
            (_.m_rgGameModeChanges[0].time = `0`));
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
      for (; _ + 1 < _.m_data.m_rgGameModeChanges.length;) {
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
        ((_ = _(_.m_rgGameModeChanges, _)), (_ = _(_.m_rgEntries, _)));
      }
      let _ = {
        m_timeline: _.timeline.metadata,
        m_data: _,
        m_nTimelineOffsetMS: Math.max(_.ulGlobalToTimelineOffset, 0),
        m_iGameModeChanges: _,
        m_iEntries: _,
      };
      return (this.AdvanceEntriesIndex(_), this.AdvanceGameModeIndex(_), _);
    }
    HasIteratorReachedEnd(_) {
      return !_.m_timeline;
    }
    AdvanceIterator(_, _) {
      let _ = parseInt(_.m_timeline.duration_ms);
      if (_.m_nTimelineOffsetMS + _ < _ + this.m_ulFirstTimelineOffsetMS) {
        ((_.m_nTimelineOffsetMS += _),
          this.AdvanceEntriesIndex(_),
          this.AdvanceGameModeIndex(_));
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
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
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
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      return _ < 0
        ? (_(`failed to find entry by id: ${_}`), !1)
        : (_.m_rgEntries.splice(_, 1), this.FireEvent(`OnInvalidate`, _), !0);
    }
    AddUserMarker(_, _, _, _) {
      if (!this.m_bInitialized)
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
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
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
      let _ = _.m_rgEntries.findIndex((_) => _._ === _);
      if (_ < 0) return (_(`failed to find entry by id: ${_}`), !1);
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
        return (_(`timeline loader not initialized, unexpected`), !1);
      let _ = this.m_mapTimelineData.get(_);
      if (!_) return (_(`failed to find timeline ${_}`), !1);
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
      (_(
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
        }));
      let _ = {
        m_metadata: _,
        m_globalStartMS: _,
        m_perfCounterStart: performance.now(),
        m_nPerfCounterOffsetMS: Math.max(0, _() - _) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(_, _),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _));
    }
    UpdateRunningTimelines() {
      let _;
      (this.m_mapRunningTimelines.forEach((_) => {
        _ = _.m_metadata.timeline_id;
        let _ =
          performance.now() - _.m_perfCounterStart + _.m_nPerfCounterOffsetMS;
        _ > (parseInt(_.m_metadata.duration_ms) || 0) &&
          (_.m_metadata.duration_ms = _.toString());
      }),
        this.m_mapRunningTimelines.size > 0 &&
          this.m_schUpdateRunning.Schedule(_, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, _));
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
      (_ < _ && (_.m_metadata.duration_ms = _.toString()),
        this.FireEvent(`OnInvalidate`, _.timeline_id));
    }
    TimelineDeleted(_) {
      let _ = this.m_rgTimelineMetadata
        .filter((_) => _.metadata.timeline_id !== _)
        .map((_) => _.metadata);
      (this.UpdateTimelineMetadata(_),
        this.m_mapTimelineData.delete(_),
        this.FireEvent(`OnInvalidate`, _));
    }
    RecordingSessionChanged(_) {
      let _ = _.session_id,
        _ = _.notification_type;
      if (_ == 1) {
        let _ = this.m_mapRunningTimelines.get(_.timeline_id);
        if (!_) {
          (this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _),
            _(!1, `Received recording started message before timeline info`));
          return;
        }
        let _ = {
          recording_id: _,
          start_offset_ms: _.start_offset,
          recording_zero_timeline_offset_ms: _.start_offset,
          duration_ms: _.duration_ms,
          recording_type: _.recording_type,
        };
        (_.m_metadata.recordings.push(_), (_.m_runningRecording = _));
      } else if (_ == 2) {
        let _ = this.GetRunningTimelineForRecording(_.timeline_id, _);
        if (!_) return;
        ((_.m_runningRecording.duration_ms = _.duration_ms),
          (_.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, _.timeline_id, _));
      } else if (_ == 4) {
        let _ = this.GetTimelineMetadata(_.timeline_id);
        if (_) {
          let _ = _.metadata.recordings.find((_) => _.recording_id === _);
          if (_) {
            ((_.start_offset_ms = _.start_offset),
              (_.duration_ms = _.duration_ms));
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
          ((_ = !0), (_ = !0));
        }
        let _ = _.metadata.timeline_id == _;
        await this.LoadTimelineData(_.metadata.timeline_id);
        let _ = this.m_mapTimelineData.get(_.metadata.timeline_id);
        (_ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)),
          _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)));
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
      return (_(`Generated clip name "${_}"`), _);
    }
  };
(_([_], _.prototype, `m_bInitialized`, void 0),
  _([_], _.prototype, `UpdateRunningTimelines`, null));
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
    (_.entries &&
      typeof _.entries == `object` &&
      ((_ = Object.values(_.entries)),
      (_ = _.filter((_) => _ && typeof _ == `object` && `time` in _)),
      _.sort((_, _) => parseInt(_.time) - parseInt(_.time))),
      (_.entries = _));
  }
}
