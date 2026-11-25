/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { i as e } from "./chunk~f025431ab0.js";
import {
  Bn as t,
  Cr as n,
  G as r,
  Gn as i,
  Kn as a,
  Ln as o,
  N as s,
  W as c,
  a as l,
  b as u,
  k as d,
  qn as f,
} from "./chunk~d3515eca4e.js";
import { Ps as p, n as m, zs as h } from "./chunk~e464778a03.js";
import { u as g } from "./chunk~0ef0cd2c00.js";
import { t as _ } from "./chunk~198b531c82.js";
var v = e(g(), 1),
  y = new h(`GR`);
function b(e) {
  return (...t) => {
    e(`[${(performance.now() / 1e3).toFixed(3)}]`, ...t);
  };
}
var x = b(y.Debug),
  S = b(y.Info),
  C = b(y.Warning),
  w = b(y.Error),
  T = x;
function E() {
  return y.IsDebugEnabled();
}
var D = (function (e) {
  return (
    (e[(e.Invalid = 0)] = `Invalid`),
    (e[(e.Playing = 1)] = `Playing`),
    (e[(e.Staging = 2)] = `Staging`),
    (e[(e.Menus = 3)] = `Menus`),
    e
  );
})({});
function O(e) {
  return e.type === `gamemode`;
}
function k(e) {
  return e.type === `state_description`;
}
function A(e) {
  return e.type === `event` && parseInt(e.duration) > 0;
}
function j(e) {
  return e.type === `event`;
}
function M(e) {
  return e.type === `achievement`;
}
function N(e) {
  return e.type === `error`;
}
function P(e) {
  return e.type === `usermarker`;
}
function F(e) {
  return e.type === `screenshot`;
}
function I(e) {
  let t = { id: e.entry_id, time: e.time, type: void 0 };
  switch (e.type) {
    case 1: {
      let n = t;
      ((n.type = `gamemode`), (n.mode = e.game_mode));
      break;
    }
    case 5: {
      let n = t;
      ((n.type = `usermarker`),
        (n.icon = `steam_marker`),
        (n.priority = e.marker_priority));
      break;
    }
    case 4: {
      let n = t;
      ((n.type = `achievement`), (n.achievement_name = e.achievement_name));
      break;
    }
    case 7: {
      let n = t;
      ((n.type = `error`), (n.description = e.marker_description));
      break;
    }
    case 3: {
      let n = t;
      ((n.type = `state_description`), (n.title = e.timestamp_title));
      break;
    }
    case 2: {
      let n = t;
      ((n.type = `event`),
        (n.icon = e.marker_icon),
        (n.title = e.range_title),
        (n.description = e.marker_description),
        (n.priority = e.marker_priority),
        (n.duration = e.range_duration),
        (n.possible_clip = e.range_possible_clip));
      break;
    }
    case 6: {
      let n = t;
      ((n.type = `screenshot`),
        (n.icon = e.marker_icon),
        (n.priority = e.marker_priority),
        (n.handle = e.screenshot_handle));
      break;
    }
    default:
      return null;
  }
  return t;
}
function L(e) {
  return { type: `global`, valMS: e };
}
function R(e) {
  return { type: `timeline`, valMS: e };
}
function z(e) {
  return { type: `global`, valPX: e };
}
function B(e) {
  return { type: `scrollWindow`, valPX: e };
}
n();
var V = 1e4,
  H = 3e3,
  U = 4e3,
  W = class e {
    constructor() {
      c(this);
    }
    m_bInitialized = !1;
    m_rgListeners = [];
    m_gameID;
    m_clipID;
    m_ulFirstTimelineOffsetMS = 0;
    m_rgTimelineMetadata = [];
    m_mapTimelineData = new Map();
    m_mapRunningTimelines = new Map();
    m_schUpdateRunning = new d();
    m_fnTimelineURLBuilder;
    BInitialized() {
      return this.m_bInitialized;
    }
    GetTimelines() {
      return this.m_rgTimelineMetadata;
    }
    GetTimelineMetadataIndex(e) {
      return this.m_rgTimelineMetadata.findIndex(
        (t) => t.metadata.timeline_id === e,
      );
    }
    GetTimelineMetadata(e) {
      return this.m_rgTimelineMetadata.find(
        (t) => t.metadata.timeline_id === e,
      );
    }
    GetGameID() {
      return this.m_gameID;
    }
    GetClipID() {
      return this.m_clipID;
    }
    BIsTimelineRunning(e) {
      return this.m_mapRunningTimelines.has(e);
    }
    AddEventListener(e) {
      return (this.m_rgListeners.push(e), () => t(this.m_rgListeners, e));
    }
    async LoadTimelinesForBackgroundVideo(e) {
      this.m_gameID = e;
      let { timelines: t = [] } = (await _.GetTimelinesForApp({ game_id: e }))
        .Body()
        .toObject();
      (this.m_mapRunningTimelines.forEach((e, n) => {
        t.find((e) => e.timeline_id == n) || t.push(e.m_metadata);
      }),
        this.UpdateTimelineMetadata(t),
        (this.m_fnTimelineURLBuilder = (e) =>
          `https://steamloopback.host/gamerecordings/timelines/${e}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    async LoadTimelinesForClip(e) {
      this.m_clipID = e;
      let t = await _.GetTimelinesForClip({ clip_id: e });
      if (t.GetEResult() != 1) throw Error(`Unable to load clip ` + e);
      let {
        timelines: n = [],
        game_id: r,
        first_timeline_start_offset_ms: i,
      } = t.Body().toObject();
      ((this.m_gameID = r), this.UpdateTimelineMetadata(n));
      for (let t of this.m_rgTimelineMetadata) {
        x(`Loaded clip ${e} timeline ${t.metadata.timeline_id}`);
        for (let e of t.metadata.recordings)
          x(`Clip recording ${e.recording_id} duration ${e.duration_ms}`);
      }
      ((this.m_ulFirstTimelineOffsetMS = parseInt(i)),
        (this.m_fnTimelineURLBuilder = (e) =>
          `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${e}.json`),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    UpdateTimelineMetadata(e) {
      let t = e.slice().sort((e, t) => e.date_recorded - t.date_recorded),
        n = [],
        r = 0,
        i = {};
      (t.forEach((t) => {
        ((t.recordings ||= []),
          i[t.timeline_id]
            ? console.error(
                `Duplicate timelines found in UpdateTimelineMetadata()`,
                t.timeline_id,
                e,
              )
            : (n.push({ nGlobalOffsetMS: L(r), metadata: t }),
              (r += parseInt(t.duration_ms)),
              (i[t.timeline_id] = !0)));
      }),
        (this.m_rgTimelineMetadata = n));
    }
    LoadTimelinesForSharedClip(e) {
      this.SetPreloadedTimelines(0, e.clip_id, e.game_id, e.timelines, void 0);
    }
    LoadTimelinesForTestGame(e, t) {
      this.SetPreloadedTimelines(
        0,
        void 0,
        e,
        t,
        (e) => `https://steamloopback.host/gamerecordings/timelines/${e}.json`,
      );
    }
    LoadTimelinesForTestClip(e, t, n, r) {
      this.SetPreloadedTimelines(e, t, n, r, void 0);
    }
    SetPreloadedTimelines(e, t, n, r, i) {
      ((this.m_gameID = n),
        (this.m_clipID = t),
        (this.m_ulFirstTimelineOffsetMS = e));
      let a = r.slice();
      (this.m_mapRunningTimelines.forEach((e, t) => {
        a.find((e) => e.timeline_id == t) || a.push(e.m_metadata);
      }),
        this.UpdateTimelineMetadata(a),
        (this.m_fnTimelineURLBuilder = i),
        (this.m_bInitialized = !0),
        this.FireEvent(`OnLoaderInitialized`));
    }
    FireEvent(e, ...t) {
      for (let n of this.m_rgListeners) {
        let r = n[e];
        r instanceof Function && r.apply(n, t);
      }
    }
    async LoadTimelineData(e) {
      let t = this.m_mapTimelineData.get(e);
      if (t && t.m_strState === `loading`) {
        await t.m_promise;
        return;
      }
      if (
        (t && t.m_strState == `error`) ||
        (this.IsActiveTimeline(e) && t.m_strState == `loaded`)
      )
        return;
      let n = {
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (!this.m_fnTimelineURLBuilder)
        this.m_mapTimelineData.set(e, { m_strState: `loaded`, ...n });
      else {
        let t = this.m_fnTimelineURLBuilder(e),
          r = v.default
            .get(t, { withCredentials: !1 })
            .then(
              (t) => {
                if (t.status == 200 && t.data) {
                  K(t.data);
                  let n = this.ProcessTimelineEntries(t.data);
                  this.m_mapTimelineData.set(e, n);
                } else
                  this.m_mapTimelineData.set(e, { ...n, m_strState: `error` });
              },
              (t) => {
                this.m_mapTimelineData.set(e, { ...n, m_strState: `error` });
              },
            )
            .finally(() => this.FireEvent(`OnTimelineLoaded`, e));
        this.m_mapTimelineData.set(e, {
          m_strState: `loading`,
          m_promise: r,
          ...n,
        });
      }
    }
    ProcessTimelineEntries(e) {
      let t = {
        m_strState: `loaded`,
        m_rgGameModeChanges: [],
        m_rgStateDescriptions: [],
        m_rgEntries: [],
        m_rgPhases: [],
      };
      if (e.entries) {
        let n = [],
          r = [],
          i = [],
          a = [];
        for (let t of e.entries)
          switch (t.type) {
            case `phase`:
              i.push(t);
              break;
            case `gamemode`:
              n.push(t);
              break;
            case `state_description`:
              r.push(t);
              break;
            case `achievement`:
            case `error`:
            case `event`:
            case `screenshot`:
            case `usermarker`:
              a.push(t);
              break;
            default:
              console.error(`Unknown timeline entry type ${t.type}`);
          }
        let o = (e, t) => parseInt(e.time) - parseInt(t.time);
        ((t.m_rgGameModeChanges = n.sort(o)),
          (t.m_rgStateDescriptions = r.sort(o)),
          (t.m_rgPhases = i.sort(o)),
          (t.m_rgEntries = a.sort(o)),
          t.m_rgGameModeChanges.length > 0 &&
            parseInt(t.m_rgGameModeChanges[0].time) < V &&
            (t.m_rgGameModeChanges[0].time = `0`));
      }
      return t;
    }
    static ApplyTimelineRounding(e, t) {
      if (t === 0) return e;
      let n = e % t;
      return n == 0 ? e : e + (t - n);
    }
    FindTimelineAtOffset(t, n) {
      let r = t + this.m_ulFirstTimelineOffsetMS,
        i = 0;
      for (let t of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(t.metadata.timeline_id),
          o = parseInt(t.metadata.duration_ms) + a;
        if (i + o > r)
          return {
            timeline: t,
            nTimelineOffsetMS: r - i,
            ulGlobalToTimelineOffset: a,
          };
        i += e.ApplyTimelineRounding(o, n);
      }
      return null;
    }
    GetGlobalOffsetDataForTimeline(t, n) {
      let r = 0;
      for (let i of this.m_rgTimelineMetadata) {
        let a = parseInt(i.metadata.duration_ms),
          o = e.ApplyTimelineRounding(a, n);
        if (i.metadata.timeline_id == t)
          return { nGlobalOffsetMS: r, nRoundedDurationMS: o };
        r += o;
      }
      return null;
    }
    CreateGlobalRangeForTimeline(e, t, n, r) {
      let i = t - n,
        a = t + r;
      return this.ClampGlobalRangeToTimeline(e, i, a);
    }
    ClampGlobalRangeToTimeline(e, t, n) {
      let r = this.GetGlobalOffsetDataForTimeline(e, 0);
      return r
        ? [
            Math.max(t, r.nGlobalOffsetMS),
            Math.min(n, r.nGlobalOffsetMS + r.nRoundedDurationMS - 1),
          ]
        : [0, 0];
    }
    GetTimelineOffsetFromGlobal(t, n) {
      let r = this.m_ulFirstTimelineOffsetMS + t,
        i = 0;
      for (let t of this.m_rgTimelineMetadata) {
        let a = this.GetTimelineStartBeforeGlobalZeroMS(t.metadata.timeline_id),
          o = parseInt(t.metadata.duration_ms) + a,
          s = e.ApplyTimelineRounding(o, n);
        if (r < i + s)
          return {
            strTimelineID: t.metadata.timeline_id,
            nTimelineOffsetMS: R(r - i - a),
          };
        i += o;
      }
      return { strTimelineID: void 0, nTimelineOffsetMS: R(NaN) };
    }
    ConvertRecordingOffsetToGlobalOffset(t, n, r) {
      let i = 0;
      for (let a of this.m_rgTimelineMetadata) {
        let o = parseInt(a.metadata.duration_ms),
          s = this.GetTimelineStartBeforeGlobalZeroMS(a.metadata.timeline_id),
          c = e.ApplyTimelineRounding(o, r);
        for (let e of a.metadata.recordings)
          if (e.recording_id === t) {
            let t =
              (isNaN(parseInt(e.recording_zero_timeline_offset_ms))
                ? 0
                : parseInt(e.recording_zero_timeline_offset_ms) - s) + n;
            return (
              (i += t),
              {
                nGlobalOffsetMS: i,
                nRoundedDurationMS: c,
                strTimelineID: a.metadata.timeline_id,
                nTimelineOffsetMS: t,
              }
            );
          }
        i += c;
      }
      return null;
    }
    IsActiveTimeline(e) {
      return e ? this.m_mapRunningTimelines.has(e) : !1;
    }
    MakeRelativeToTimelineEndIfActive(e, t) {
      if (!this.IsActiveTimeline(e)) return t;
      let n = this.GetTimelineMetadata(e);
      if (!n) return t;
      let r = parseInt(n.metadata.duration_ms);
      return Math.min(t - r, 0);
    }
    IsActiveRecording(e) {
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (n.recording_id === e) {
            let n = this.m_mapRunningTimelines.get(t.metadata.timeline_id);
            return n && n.m_runningRecording
              ? n.m_runningRecording.recording_id === e
              : !1;
          }
      return !1;
    }
    GetRunningTimelineDurationMS(e) {
      let t = this.m_mapRunningTimelines.get(e);
      if (!t) return 0;
      let n =
          performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS,
        r = parseInt(t.m_metadata.duration_ms) || 0;
      return Math.max(n, r);
    }
    GetRunningTimelineForRecording(e, t) {
      let n = this.m_mapRunningTimelines.get(e);
      return n &&
        n.m_runningRecording &&
        n.m_runningRecording.recording_id === t
        ? n
        : null;
    }
    ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
      if (!this.m_bInitialized) return null;
      let t = this.FindTimelineAtOffset(e, 0);
      if (!t) return null;
      let n = t.nTimelineOffsetMS - t.ulGlobalToTimelineOffset;
      for (let e of t.timeline.metadata.recordings) {
        let r = parseInt(e.start_offset_ms);
        if (r + parseInt(e.duration_ms) < n || r > n) continue;
        let i = parseInt(e.recording_zero_timeline_offset_ms),
          a = Math.max(n - r, 0);
        return (
          isNaN(i) || (a = Math.max(t.nTimelineOffsetMS - i, 0)),
          {
            strRecordingID: e.recording_id,
            nRecordingOffsetMS: a,
            nStartOffsetMS: r,
          }
        );
      }
      return null;
    }
    async FindRecordingAndOffsetForEntry(e) {
      for (let t of this.m_mapRunningTimelines.keys()) {
        if (!this.IsActiveTimeline(t)) continue;
        await this.LoadTimelineData(t);
        let n = this.m_mapTimelineData.get(t),
          r = this.m_mapRunningTimelines.get(t);
        if (n && r) {
          for (let t of n.m_rgEntries)
            if (t.id == e) {
              let e = parseInt(t.time);
              for (let t of r.m_metadata.recordings) {
                let n = parseInt(t.start_offset_ms),
                  r = n + parseInt(t.duration_ms);
                if (e >= n && e <= r)
                  return {
                    strRecordingID: t.recording_id,
                    nRecordingOffsetMS: e,
                    nStartOffsetMS: n,
                  };
              }
            }
          break;
        }
      }
    }
    GetClosestNextRecordingInGlobalTimeline(e) {
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (parseInt(n.start_offset_ms) + t.nGlobalOffsetMS.valMS > e.valMS)
            return n;
      return null;
    }
    GetClosestPreviousRecordingInGlobalTimeline(e) {
      let t = null;
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings)
          if (parseInt(r.start_offset_ms) + n.nGlobalOffsetMS.valMS > e.valMS)
            return t;
          else t = r;
      return t;
    }
    ConvertRecordingTimeMStoPreTrimTimeMS(e, t) {
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings)
          if (r.recording_id === e) {
            let e = parseInt(r.recording_zero_timeline_offset_ms),
              i = this.GetTimelineStartBeforeGlobalZeroMS(
                n.metadata.timeline_id,
              );
            return !i || isNaN(e) ? t : t + i - e;
          }
      return t;
    }
    GetTimelineDataOrStartLoad(e) {
      if (!e) return null;
      let t = this.m_mapTimelineData.get(e);
      return (
        (t ||= (this.LoadTimelineData(e), this.m_mapTimelineData.get(e))), t
      );
    }
    GetTimelineData(e) {
      return this.m_mapTimelineData.get(e);
    }
    SetTimelineData(e, t) {
      let n = this.ProcessTimelineEntries(t);
      this.m_mapTimelineData.set(e, n);
    }
    GetClosestPreviousEntryInTimeline(e, t) {
      let n = this.GetTimelineMetadata(e),
        r = this.GetTimelineStartBeforeGlobalZeroMS(e),
        a = this.GetTimelineDataOrStartLoad(e),
        o = null;
      if (a && a.m_strState === `loaded`) {
        let e = a.m_rgEntries.filter((e) => {
            let t = parseInt(e.time);
            return t < r + parseInt(n.metadata.duration_ms) && t > r;
          }),
          s = i(e, (e) => t.valMS - 1 - parseInt(e.time));
        s !== -1 && (o = e[s]);
      }
      return { entry: o, timelineState: a?.m_strState };
    }
    GetClosestNextEntryInTimeline(e, t) {
      let n = this.GetTimelineMetadata(e),
        r = this.GetTimelineStartBeforeGlobalZeroMS(e),
        a = this.GetTimelineDataOrStartLoad(e),
        o = null;
      if (a && a.m_strState === `loaded`) {
        let e = a.m_rgEntries.filter((e) => {
            let t = parseInt(e.time);
            return t < r + parseInt(n.metadata.duration_ms) && t > r;
          }),
          s = i(e, (e) => t.valMS - parseInt(e.time));
        s < e.length - 1 && (o = e[s + 1]);
      }
      return { entry: o, timelineState: a?.m_strState };
    }
    GetClosestPreviousEntryInGlobalTimeline(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineData(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`)
        return {
          timelineID: t?.strTimelineID,
          timelineState: n?.m_strState,
          entry: null,
          globalMS: null,
        };
      let r = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID),
        a = t.nTimelineOffsetMS.valMS + r,
        o = i(n.m_rgEntries, (e) => a - parseInt(e.time));
      if (o !== -1) {
        let e = n.m_rgEntries[o],
          i =
            this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
            r +
            parseInt(e.time);
        return i < 0
          ? {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            }
          : {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: e,
              globalMS: L(i),
            };
      }
      let s = this.GetTimelineMetadataIndex(t.strTimelineID);
      if (s < 1)
        return {
          timelineID: t.strTimelineID,
          timelineState: n.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let e = s - 1; e >= 0; e--) {
        let t = this.m_rgTimelineMetadata[e],
          n = this.GetTimelineData(t.metadata.timeline_id);
        if (n) {
          if (n.m_strState !== `loaded`)
            return {
              timelineID: t.metadata.timeline_id,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
          if (n.m_rgEntries.length) {
            let e = n.m_rgEntries[n.m_rgEntries.length - 1],
              r = this.GetTimelineStartBeforeGlobalZeroMS(
                t.metadata.timeline_id,
              ),
              i = t.nGlobalOffsetMS.valMS - r + parseInt(e.time);
            return i < 0
              ? {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: null,
                  globalMS: null,
                }
              : {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: e,
                  globalMS: L(i),
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
    GetClosestNextEntryInGlobalTimeline(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineData(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`)
        return {
          timelineID: t?.strTimelineID,
          timelineState: n?.m_strState,
          entry: null,
          globalMS: null,
        };
      let r = this.GetTimelineStartBeforeGlobalZeroMS(t.strTimelineID),
        a = t.nTimelineOffsetMS.valMS + r,
        o = i(n.m_rgEntries, (e) => a - parseInt(e.time)) + 1;
      if (o <= n.m_rgEntries.length - 1) {
        let e = n.m_rgEntries[o],
          i =
            this.GetTimelineMetadata(t.strTimelineID).nGlobalOffsetMS.valMS -
            r +
            parseInt(e.time);
        return i < this.GetGlobalTimelineEndMS().valMS
          ? {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: e,
              globalMS: L(i),
            }
          : {
              timelineID: t.strTimelineID,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
      }
      let s = this.m_rgTimelineMetadata.length,
        c = this.GetTimelineMetadataIndex(t.strTimelineID);
      if (c === -1 || c === s - 1)
        return {
          timelineID: t.strTimelineID,
          timelineState: n.m_strState,
          entry: null,
          globalMS: null,
        };
      for (let e = c + 1; e < s; e++) {
        let t = this.m_rgTimelineMetadata[e],
          n = this.GetTimelineData(t.metadata.timeline_id);
        if (n) {
          if (n.m_strState !== `loaded`)
            return {
              timelineID: t.metadata.timeline_id,
              timelineState: n.m_strState,
              entry: null,
              globalMS: null,
            };
          if (n.m_rgEntries.length) {
            let e = n.m_rgEntries[0],
              r = this.GetTimelineStartBeforeGlobalZeroMS(
                t.metadata.timeline_id,
              ),
              i = t.nGlobalOffsetMS.valMS - r + parseInt(e.time);
            return i < this.GetGlobalTimelineEndMS().valMS
              ? {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: e,
                  globalMS: L(i),
                }
              : {
                  timelineID: t.metadata.timeline_id,
                  timelineState: n.m_strState,
                  entry: null,
                  globalMS: null,
                };
          }
        }
      }
      return {
        timelineID: this.m_rgTimelineMetadata[s - 1].metadata.timeline_id,
        timelineState: `loaded`,
        entry: null,
        globalMS: null,
      };
    }
    FindRangeEventsAtGlobalMS(e) {
      let t = this.GetTimelineOffsetFromGlobal(e, 0),
        n = this.GetTimelineDataOrStartLoad(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`) return [];
      let r = [];
      for (let e of n.m_rgEntries) {
        if (parseInt(e.time) > t.nTimelineOffsetMS.valMS) break;
        if (e.type !== `event` || parseInt(e.duration) == 0) continue;
        let n = parseInt(e.time),
          i = n + parseInt(e.duration);
        n <= t.nTimelineOffsetMS.valMS &&
          i >= t.nTimelineOffsetMS.valMS &&
          r.push(e);
      }
      return r;
    }
    GetStateDescriptionAtGlobalMS(e) {
      let t = this.GetTimelineOffsetFromGlobal(e.valMS, 0),
        n = this.GetTimelineDataOrStartLoad(t.strTimelineID);
      if (!n || n.m_strState !== `loaded`) return null;
      let r = i(
        n.m_rgStateDescriptions,
        (e) => t.nTimelineOffsetMS.valMS - parseInt(e.time),
      );
      return r > -1 ? n.m_rgStateDescriptions[r] : null;
    }
    AdvanceGameModeIndex(e) {
      let t = e.m_iGameModeChanges;
      for (; t + 1 < e.m_data.m_rgGameModeChanges.length;) {
        let n = e.m_data.m_rgGameModeChanges[t + 1];
        if (parseInt(n.time) > e.m_nTimelineOffsetMS) break;
        t++;
      }
      e.m_iGameModeChanges = t;
    }
    AdvanceEntriesIndex(e) {
      for (
        e.m_iEntries == -1 && e.m_iEntries++;
        e.m_iEntries < e.m_data.m_rgEntries.length;
      ) {
        let t = e.m_data.m_rgEntries[e.m_iEntries];
        if (parseInt(t.time) >= e.m_nTimelineOffsetMS) break;
        e.m_iEntries++;
      }
    }
    CreateTimelineIterator(e, t) {
      let n = this.FindTimelineAtOffset(e, t);
      if (!n)
        return {
          m_timeline: null,
          m_data: null,
          m_nTimelineOffsetMS: 0,
          m_iGameModeChanges: -1,
          m_iEntries: -1,
        };
      let r = this.GetTimelineDataOrStartLoad(n.timeline.metadata.timeline_id),
        a = -1,
        o = -1;
      if (r?.m_strState == `loaded`) {
        let e = (e) => n.ulGlobalToTimelineOffset - parseInt(e.time);
        ((a = i(r.m_rgGameModeChanges, e)), (o = i(r.m_rgEntries, e)));
      }
      let s = {
        m_timeline: n.timeline.metadata,
        m_data: r,
        m_nTimelineOffsetMS: Math.max(n.ulGlobalToTimelineOffset, 0),
        m_iGameModeChanges: a,
        m_iEntries: o,
      };
      return (this.AdvanceEntriesIndex(s), this.AdvanceGameModeIndex(s), s);
    }
    HasIteratorReachedEnd(e) {
      return !e.m_timeline;
    }
    AdvanceIterator(e, t) {
      let n = parseInt(e.m_timeline.duration_ms);
      if (e.m_nTimelineOffsetMS + t < n + this.m_ulFirstTimelineOffsetMS) {
        ((e.m_nTimelineOffsetMS += t),
          this.AdvanceEntriesIndex(e),
          this.AdvanceGameModeIndex(e));
        return;
      }
      let r = this.m_rgTimelineMetadata.findIndex(
        (t) => t.metadata == e.m_timeline,
      );
      r < 0 || r == this.m_rgTimelineMetadata.length - 1
        ? (e.m_timeline = null)
        : (r++,
          (e.m_timeline = this.m_rgTimelineMetadata[r].metadata),
          (e.m_data = this.GetTimelineDataOrStartLoad(
            e.m_timeline.timeline_id,
          )),
          (e.m_nTimelineOffsetMS = 0),
          (e.m_iGameModeChanges = 0),
          (e.m_iEntries = 0));
    }
    GetIteratorTimelineState(e) {
      return e.m_data.m_strState;
    }
    GetIteratorGameMode(e) {
      return e.m_iGameModeChanges < 0 ||
        e.m_iGameModeChanges >= e.m_data.m_rgGameModeChanges.length
        ? D.Playing
        : e.m_data.m_rgGameModeChanges[e.m_iGameModeChanges].mode;
    }
    *GetIteratorEntriesWithin(e, t) {
      let n = e.m_data.m_rgEntries;
      for (let r = e.m_iEntries; r >= 0 && r < n.length; r++) {
        let i = n[r];
        if (parseInt(i.time) >= e.m_nTimelineOffsetMS + t) break;
        yield i;
      }
    }
    *GetIteratorGameModesWithin(e, t) {
      let n = e.m_data.m_rgGameModeChanges;
      for (let r = e.m_iEntries; r >= 0 && r < n.length; r++) {
        let i = n[r];
        if (parseInt(i.time) >= e.m_nTimelineOffsetMS + t) break;
        yield i;
      }
    }
    GetFirstRecording() {
      if (!this.m_bInitialized) return ``;
      let e = this.m_rgTimelineMetadata[0];
      if (!e) return ``;
      let t = e.metadata.recordings[0];
      return t ? t.recording_id : ``;
    }
    GetFirstRecordingOfLastTimelineSession() {
      if (!this.m_bInitialized) return ``;
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (!e) return ``;
      let t = e.metadata.recordings[0];
      return t ? t.recording_id : ``;
    }
    GetNextRecording(e) {
      if (!this.m_bInitialized || !e) return ``;
      let t = !1;
      for (let n of this.m_rgTimelineMetadata)
        for (let r of n.metadata.recordings) {
          if (t) return r.recording_id;
          r.recording_id == e && (t = !0);
        }
      return ``;
    }
    BRecordingHasZeroOffset(e) {
      if (!this.m_bInitialized) return !1;
      for (let t of this.m_rgTimelineMetadata)
        for (let n of t.metadata.recordings)
          if (n.recording_id == e)
            return !isNaN(parseInt(n.recording_zero_timeline_offset_ms));
      return !1;
    }
    GetTimelineDateMS(e, t) {
      if (!this.m_bInitialized) return 0;
      let n = this.FindTimelineAtOffset(e, t);
      return n
        ? n.timeline.metadata.date_recorded * 1e3 + n.nTimelineOffsetMS
        : 0;
    }
    InsertEntryIntoTimelineSorted(e, t) {
      a(e.m_rgEntries, t, (e, t) => parseInt(e.time) - parseInt(t.time));
    }
    AddEventToTimeline(e, t, n, r, i, a, o, s) {
      if (!this.m_bInitialized)
        return (w(`timeline loader not initialized, unexpected`), !1);
      let c = this.m_mapTimelineData.get(e);
      if (!c) return (w(`failed to find timeline ${e}`), !1);
      let l = t + this.GetTimelineStartBeforeGlobalZeroMS(e),
        u = {
          id: r,
          time: l + ``,
          type: `event`,
          icon: n,
          title: a,
          description: o,
          priority: i,
          duration: `${s}`,
          possible_clip: 2,
        };
      return (
        T(`adding timeline event marker at ${e} at ${l} MS`),
        this.InsertEntryIntoTimelineSorted(c, u),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveTimelineEvent(e, t) {
      if (!this.m_bInitialized)
        return (w(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (w(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (w(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddUserMarker(e, t, n, r) {
      if (!this.m_bInitialized)
        return (w(`timeline loader not initialized, unexpected`), !1);
      let i = this.m_mapTimelineData.get(e);
      if (!i) return (w(`failed to find timeline ${e}`), !1);
      let a = t + this.GetTimelineStartBeforeGlobalZeroMS(e),
        o = {
          id: r,
          time: a + ``,
          type: `usermarker`,
          icon: n,
          title: ``,
          description: ``,
          priority: 0,
        };
      return (
        T(`adding user marker at ${e} at ${a} MS`),
        this.InsertEntryIntoTimelineSorted(i, o),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    UpdateUserMarker(e, t, n) {
      if (!this.m_bInitialized)
        return (w(`timeline loader not initialized, unexpected`), !1);
      let r = this.m_mapTimelineData.get(e);
      if (!r) return (w(`failed to find timeline ${e}`), !1);
      let i = r.m_rgEntries.findIndex((e) => e.id === t);
      if (i < 0) return (w(`failed to find entry by id: ${t}`), !1);
      let a = r.m_rgEntries[i],
        o = a.time;
      return (
        (a.icon = n.strIcon),
        (a.time = `` + n.nTimelineOffsetMS),
        (a.title = n.name),
        (a.description = n.description),
        o != a.time &&
          (r.m_rgEntries.splice(i, 1),
          this.InsertEntryIntoTimelineSorted(r, a)),
        this.FireEvent(`OnInvalidate`, e),
        !0
      );
    }
    RemoveUserMarker(e, t) {
      if (!this.m_bInitialized)
        return (w(`timeline loader not initialized, unexpected`), !1);
      let n = this.m_mapTimelineData.get(e);
      if (!n) return (w(`failed to find timeline ${e}`), !1);
      let r = n.m_rgEntries.findIndex((e) => e.id === t);
      return r < 0
        ? (w(`failed to find entry by id: ${t}`), !1)
        : (n.m_rgEntries.splice(r, 1), this.FireEvent(`OnInvalidate`, e), !0);
    }
    AddRunningTimeline(e, t, n) {
      if (this.m_rgTimelineMetadata.find((t) => t.metadata.timeline_id == e))
        return;
      let r = { timeline_id: e, game_id: t, date_recorded: n, recordings: [] },
        i = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1],
        o = i ? i.nGlobalOffsetMS.valMS + parseInt(i.metadata.duration_ms) : 0;
      (a(
        this.m_rgTimelineMetadata,
        { nGlobalOffsetMS: L(o), metadata: r },
        (e, t) => e.metadata.date_recorded - t.metadata.date_recorded,
      ),
        this.m_mapTimelineData.set(e, {
          m_strState: `loaded`,
          m_rgGameModeChanges: [],
          m_rgStateDescriptions: [],
          m_rgEntries: [],
          m_rgPhases: [],
        }));
      let s = {
        m_metadata: r,
        m_globalStartMS: o,
        m_perfCounterStart: performance.now(),
        m_nPerfCounterOffsetMS: Math.max(0, u() - n) * 1e3,
        m_runningRecording: null,
      };
      (this.m_mapRunningTimelines.set(e, s),
        this.m_schUpdateRunning.IsScheduled() ||
          this.m_schUpdateRunning.Schedule(U, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, e));
    }
    UpdateRunningTimelines() {
      let e;
      (this.m_mapRunningTimelines.forEach((t) => {
        e = t.m_metadata.timeline_id;
        let n =
          performance.now() - t.m_perfCounterStart + t.m_nPerfCounterOffsetMS;
        n > (parseInt(t.m_metadata.duration_ms) || 0) &&
          (t.m_metadata.duration_ms = n.toString());
      }),
        this.m_mapRunningTimelines.size > 0 &&
          this.m_schUpdateRunning.Schedule(U, this.UpdateRunningTimelines),
        this.FireEvent(`OnInvalidate`, e));
    }
    RunningTimelineStopped(e, t) {
      let n = this.m_mapRunningTimelines.get(e);
      n &&
        ((n.m_metadata.duration_ms = t),
        this.m_mapRunningTimelines.delete(e),
        this.FireEvent(`OnInvalidate`, e));
    }
    AddRunningTimelineEntry(e) {
      let t = this.m_mapRunningTimelines.get(e.timeline_id),
        n = this.m_mapTimelineData.get(e.timeline_id);
      if (!t || !n) return;
      let r = I(e);
      if (!r) return;
      O(r)
        ? a(
            n.m_rgGameModeChanges,
            r,
            (e, t) => parseInt(e.time) - parseInt(t.time),
          )
        : k(r)
          ? a(
              n.m_rgStateDescriptions,
              r,
              (e, t) => parseInt(e.time) - parseInt(t.time),
            )
          : a(n.m_rgEntries, r, (e, t) => parseInt(e.time) - parseInt(t.time));
      let i = parseInt(t.m_metadata.duration_ms) || 0,
        o = parseInt(e.time);
      (i < o && (t.m_metadata.duration_ms = o.toString()),
        this.FireEvent(`OnInvalidate`, e.timeline_id));
    }
    TimelineDeleted(e) {
      let t = this.m_rgTimelineMetadata
        .filter((t) => t.metadata.timeline_id !== e)
        .map((e) => e.metadata);
      (this.UpdateTimelineMetadata(t),
        this.m_mapTimelineData.delete(e),
        this.FireEvent(`OnInvalidate`, e));
    }
    RecordingSessionChanged(e) {
      let t = e.session_id,
        n = e.notification_type;
      if (n == 1) {
        let n = this.m_mapRunningTimelines.get(e.timeline_id);
        if (!n) {
          (this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t),
            f(!1, `Received recording started message before timeline info`));
          return;
        }
        let r = {
          recording_id: t,
          start_offset_ms: e.start_offset,
          recording_zero_timeline_offset_ms: e.start_offset,
          duration_ms: e.duration_ms,
          recording_type: e.recording_type,
        };
        (n.m_metadata.recordings.push(r), (n.m_runningRecording = r));
      } else if (n == 2) {
        let n = this.GetRunningTimelineForRecording(e.timeline_id, t);
        if (!n) return;
        ((n.m_runningRecording.duration_ms = e.duration_ms),
          (n.m_runningRecording = null),
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t));
      } else if (n == 4) {
        let n = this.GetTimelineMetadata(e.timeline_id);
        if (n) {
          let r = n.metadata.recordings.find((e) => e.recording_id === t);
          if (r) {
            ((r.start_offset_ms = e.start_offset),
              (r.duration_ms = e.duration_ms));
            let t = parseInt(e.start_offset) + parseInt(e.duration_ms);
            t > (parseInt(n.metadata.duration_ms) || 0) &&
              (n.metadata.duration_ms = t.toString());
          }
        }
        this.GetRunningTimelineForRecording(e.timeline_id, t) ||
          this.FireEvent(`OnInvalidateRecording`, e.timeline_id, t);
      } else if (n == 3) {
        let n = this.GetTimelineMetadata(e.timeline_id);
        if (n) {
          let e = n.metadata.recordings.filter((e) => e.recording_id !== t);
          n.metadata.recordings = e;
        }
      }
      this.FireEvent(`OnInvalidate`, e.timeline_id);
    }
    GetGlobalTimelineEndMS() {
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (e) {
        let t = isNaN(parseInt(e.metadata.duration_ms))
          ? 0
          : parseInt(e.metadata.duration_ms);
        return L(e.nGlobalOffsetMS.valMS + t);
      }
      return L(0);
    }
    GetEndOfRecordingsMS() {
      let e = this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
      if (e) {
        let t = e.metadata.recordings[e.metadata.recordings.length - 1];
        if (t) {
          let n = this.m_mapRunningTimelines.has(e.metadata.timeline_id),
            r = isNaN(parseInt(t.start_offset_ms))
              ? 0
              : parseInt(t.start_offset_ms),
            i = isNaN(parseInt(e.metadata.duration_ms))
              ? 0
              : parseInt(e.metadata.duration_ms),
            a = 0;
          return (
            n
              ? (a = Math.max(0, i - r))
              : isNaN(parseInt(t.duration_ms)) || (a = parseInt(t.duration_ms)),
            L(e.nGlobalOffsetMS.valMS + r + a)
          );
        }
      }
      return null;
    }
    GetTotalRecordingDuration() {
      let e = 0;
      return (
        this.m_rgTimelineMetadata.forEach((t) => {
          t.metadata.recordings.forEach((t) => {
            isNaN(parseInt(t.duration_ms)) || (e += parseInt(t.duration_ms));
          });
        }),
        e
      );
    }
    GetTimelineStartBeforeGlobalZeroMS(e) {
      return e == this.m_rgTimelineMetadata[0].metadata.timeline_id
        ? this.m_ulFirstTimelineOffsetMS
        : 0;
    }
    async GenerateNamePartsFromTimeline(e, t, n, r) {
      let i,
        a = !1,
        o,
        s,
        c,
        l;
      for (let u of this.m_rgTimelineMetadata) {
        let d = !1;
        if (!a) {
          if (u.metadata.timeline_id != e) continue;
          ((d = !0), (a = !0));
        }
        let f = u.metadata.timeline_id == n;
        await this.LoadTimelineData(u.metadata.timeline_id);
        let p = this.m_mapTimelineData.get(u.metadata.timeline_id);
        (d && (c = u.metadata.date_recorded + Math.floor(t / 1e3)),
          f && (l = u.metadata.date_recorded + Math.floor(r / 1e3)));
        for (let e of p.m_rgEntries) {
          let n = parseInt(e.time);
          if ((d && n < t) || (f && n > r) || (!j(e) && !P(e))) continue;
          let a = G(e);
          (!i || (a && a.rank > i.rank)) && (i = a);
        }
        for (let e of p.m_rgStateDescriptions) {
          let t = parseInt(e.time);
          (f && t > r) || ((!o || s < t) && ((o = e), (s = t)));
        }
        if (f) break;
      }
      let u = i?.strTitle ?? o?.title,
        d = new m(this.GetGameID());
      return {
        strTimelinePart: u,
        strAppNamePart: p.GetAppInfo(d.GetInternalAppID())?.name,
        rtStart: c,
        rtEnd: l,
      };
    }
    async GenerateClipNameFromTimeline(e, t, n, r) {
      let { strTimelinePart: i, strAppNamePart: a } =
          await this.GenerateNamePartsFromTimeline(e, t, n, r),
        o = new Date(),
        s = [
          a,
          `${o.getFullYear()}-${(o.getMonth() + 1).toString().padStart(2, `0`)}-${o.getDate().toString().padStart(2, `0`)} ${o.toLocaleTimeString(l.GetPreferredLocales())}`,
          i,
        ]
          .filter((e) => !!e)
          .join(` - `);
      return (x(`Generated clip name "${s}"`), s);
    }
  };
(s([r], W.prototype, `m_bInitialized`, void 0),
  s([o], W.prototype, `UpdateRunningTimelines`, null));
function G(e) {
  switch (e.type) {
    case `event`:
      let t = e;
      return { rank: 5e4 + e.priority, strTitle: t.title };
    case `usermarker`:
      let n = e;
      return !n.title && !n.description
        ? null
        : { rank: 1e5 + e.priority, strTitle: e.title || e.description };
    case `state_description`:
      return { rank: 4e4, strTitle: e.title };
    case `achievement`:
      return { rank: 9e4, strTitle: e.title };
  }
  return null;
}
function K(e) {
  if (!Array.isArray(e.entries)) {
    let t = [];
    (e.entries &&
      typeof e.entries == `object` &&
      ((t = Object.values(e.entries)),
      (t = t.filter((e) => e && typeof e == `object` && `time` in e)),
      t.sort((e, t) => parseInt(e.time) - parseInt(t.time))),
      (e.entries = t));
  }
}
export {
  T as _,
  B as a,
  S as b,
  M as c,
  N as d,
  j as f,
  E as g,
  P as h,
  z as i,
  O as l,
  F as m,
  H as n,
  R as o,
  A as p,
  L as r,
  D as s,
  W as t,
  k as u,
  x as v,
  C as x,
  w as y,
};
