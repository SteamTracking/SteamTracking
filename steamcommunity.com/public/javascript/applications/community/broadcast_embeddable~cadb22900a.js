/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { A as t, B as n, L as r, R as i, j as a } from "./chunk~01cfc309bf.js";
import {
  Ai as o,
  Mi as s,
  ji as c,
  ki as l,
  l as u,
} from "./chunk~3f4314f3b4.js";
import { t as d } from "./chunk~10c934b72c.js";
import { n as f } from "./chunk~0111fcd096.js";
import {
  $h as p,
  Em as m,
  Id as h,
  c as g,
  hm as _,
  kf as v,
  um as y,
  zf as b,
} from "./main.js";
var x = class e {
  constructor() {
    r(this);
  }
  m_mapBroadcasterSteamIDToEvents = new Map();
  m_mapBroadcasterSteamIDData = new Map();
  static GetBBCodeParam(e, t, n = ``) {
    let r = RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, `gmi`).exec(e);
    return r ? r[1] : n;
  }
  static ParseCalendarEventPresentersFromText(t) {
    let n = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
      r = [];
    for (;;) {
      let i = n.exec(t);
      if (i === null) break;
      let a = i[1],
        o = i[2],
        s = e.GetBBCodeParam(a, `steamid`),
        c = {
          steamID: s ? new m(s) : void 0,
          name: e.GetBBCodeParam(a, `name`),
          title: e.GetBBCodeParam(a, `title`),
          company: e.GetBBCodeParam(a, `company`),
          photo: e.GetBBCodeParam(a, `photo`),
          bio: o,
        };
      r.push(c);
    }
    return r;
  }
  static ParseEventModelPresenters(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``;
    return e.ParseCalendarEventPresentersFromText(r);
  }
  static ParseEventAppReferencesFromText(e) {
    let t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
      n = new Set();
    for (;;) {
      let r = t.exec(e);
      if (r === null) break;
      let i = r[1];
      n.add(Number(i));
    }
    return n;
  }
  static ParseEventModelAppReferences(t, n) {
    let r = t.GetDescriptionWithFallback(n) ?? ``,
      i = e.ParseEventAppReferencesFromText(r);
    if (t.jsondata?.referenced_appids)
      for (let e of t.jsondata.referenced_appids) i.add(e);
    return i;
  }
  async BuildBroadcasterSteamIDToActiveEventMap(e) {
    let t = f.GetTimeNowWithOverride(),
      n = e.GetCalendarItemsInTimeRange(t - 3600, t);
    for (let e of n.rgCalendarItems)
      u.QueueLoadPartnerEvent(e.clanid, e.unique_id);
    let r = n.rgCalendarItems.map((e) =>
        u.LoadPartnerEventFromClanEventGIDAndClanSteamID(
          m.InitFromClanID(e.clanid, _.EUNIVERSE),
          e.unique_id,
          0,
        ),
      ),
      i = await Promise.all(r),
      a = new Map();
    for (let e of i)
      if (e && !(e.endTime && e.endTime < t))
        for (let t of e.GetBroadcastWhitelistAsSteamIDs()) {
          let n = a.get(t);
          n ? n.push(e) : a.set(t, [e]);
        }
    return a;
  }
  IsBroadcasterAlreadyBound(e, t) {
    let n = this.m_mapBroadcasterSteamIDToEvents.get(e) ?? [],
      r = n.length;
    if ((t ? t.length : 0) != r) return !1;
    for (let e = 0; e < r; e++) if (n[e] != t[e].GID) return !1;
    return !0;
  }
  static BuildSteamIDToPresenterMapFromEventList(t, n) {
    let r = new Map();
    for (let i of t) {
      if (!i) continue;
      let t = e.ParseEventModelPresenters(i, n);
      for (let e of t) e.steamID && r.set(e.steamID.ConvertTo64BitString(), e);
    }
    return r;
  }
  RemoveCachedDataIfNotInMap(e) {
    let t = [];
    (this.m_mapBroadcasterSteamIDToEvents.forEach((n, r) => {
      e.has(r) || t.push(r);
    }),
      t.forEach((e) => {
        (this.m_mapBroadcasterSteamIDData.delete(e),
          this.m_mapBroadcasterSteamIDToEvents.delete(e));
      }));
  }
  static BuildAppIDRefsForEventList(t, n) {
    let r = new Set();
    for (let i of t)
      e.ParseEventModelAppReferences(i, n).forEach((e) => r.add(e));
    return Array.from(r);
  }
  UpdateCachedDataFromEvents(t, n) {
    t.forEach((t, r) => {
      if (this.IsBroadcasterAlreadyBound(r, t)) return;
      let i = {
        m_mapPresenters: e.BuildSteamIDToPresenterMapFromEventList(t, n),
        m_rgAppIDs: e.BuildAppIDRefsForEventList(t, n),
      };
      (this.m_mapBroadcasterSteamIDData.set(r, i),
        this.m_mapBroadcasterSteamIDToEvents.set(
          r,
          t.map((e) => e.GID ?? ``),
        ));
    });
  }
  async SynchronizeEventsWithBroadcasts(e, t) {
    let n = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
    (this.RemoveCachedDataIfNotInMap(n), this.UpdateCachedDataFromEvents(n, t));
  }
  GetPresenterMapForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_mapPresenters;
  }
  GetAppIDListForBroadcasterSteamID(e) {
    return this.m_mapBroadcasterSteamIDData.get(e)?.m_rgAppIDs;
  }
};
v([i], x.prototype, `m_mapBroadcasterSteamIDData`, void 0);
var S = new x(),
  C = e(t()),
  w = !1;
function T(e) {
  return !!(e && e.thumbnail_http_address);
}
function E(e, t) {
  if (t || e) {
    let n = t || e;
    return !!(n && D.Get().BIsAppStreaming(n));
  }
  return !1;
}
var D = class e {
  constructor() {
    r(this);
  }
  static s_GlobalStore;
  m_inFlightRequests = new Map();
  m_lookupKeyToEmbedStreamDef = new Map();
  m_lookupStreams = new Map();
  m_playReadyStream = new Map();
  m_bMapHasStartedVideo = new Map();
  m_mapBroadcastChecked = new Map();
  m_pageChatStatus = `hide`;
  m_streamChatStatus = `hide`;
  m_bUserChatExpanded = void 0;
  m_bUserPreferenceHideBroadcastByDefault = void 0;
  m_bCollapsed = void 0;
  m_setStreamChangedListeners = new Set();
  m_bUseFakeData = !1;
  m_onLoadContextCall = new Map();
  BHasStreams(e) {
    let t = this.GetStreams(e);
    return !!(t && t.length > 0);
  }
  AddCallbackOnNewContext(e, t, n) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), {
      name: t,
      fnCallback: n,
    });
  }
  ClearCallbackOnNewContext(e) {
    this.m_onLoadContextCall.set(this.GetStreamsLookupKeyFromDef(e), null);
  }
  GetPlayReadyStream(e) {
    let t = this.GetStreamsLookupKeyFromDef(e);
    return this.m_playReadyStream.get(t);
  }
  BIsEmbeddedBroadcastHiddenByDefaultUserSettings() {
    return !!this.m_bUserPreferenceHideBroadcastByDefault;
  }
  BIsEmbeddedStreamCollapsed() {
    return !!this.m_bCollapsed;
  }
  SetEmbeddedStreamCollapsed(e) {
    this.m_bCollapsed != e && (this.m_bCollapsed = e);
  }
  GetConcurrentStreams(e) {
    let t = this.GetStreams(e);
    return t ? t.filter((e) => T(e)).length : 0;
  }
  GetChatVisibility() {
    return this.m_pageChatStatus === `remove` ||
      this.m_streamChatStatus === `remove`
      ? `remove`
      : this.m_bUserChatExpanded === void 0
        ? this.m_pageChatStatus === `show`
          ? `show`
          : this.m_pageChatStatus === `hide` ||
              this.m_streamChatStatus === `hide`
            ? `hide`
            : `show`
        : this.m_bUserChatExpanded
          ? `show`
          : `hide`;
  }
  ToggleChatVisibility() {
    let e = this.GetChatVisibility();
    e !== `remove` && (this.m_bUserChatExpanded = e === `hide`);
  }
  DebugDumpContextAndAvailableContext(e) {
    (console.log(`Requested context`, this.GetStreamsLookupKeyFromDef(e)),
      console.log(`Available context count: `, this.m_lookupStreams.size),
      this.m_lookupStreams.forEach((e, t) => {
        console.log(t, e.length);
      }));
  }
  GetStreams(e) {
    let t = this.GetStreamsLookupKeyFromDef(e);
    return this.m_lookupStreams.get(t);
  }
  GetBroadcastURL(e) {
    let t;
    return (
      (t = e.steamid
        ? new m(e.steamid)
        : m.InitFromAccountID(e.accountid, _.EUNIVERSE)),
      _.COMMUNITY_BASE_URL + `broadcast/watch/` + t.ConvertTo64BitString()
    );
  }
  BIsAppStreaming(e) {
    let t = !1;
    return (
      this.m_lookupStreams.forEach((n) => {
        t ||=
          !!n &&
          n.some((t) => d.GetOrCreateBroadcastInfo(t.steamid).m_nAppID === e);
      }),
      t
    );
  }
  GetStreamsForAppID(e) {
    let t = [];
    return (
      this.m_lookupStreams.forEach((n) => {
        n?.forEach((n) => {
          d.GetOrCreateBroadcastInfo(n.steamid).m_nAppID === e && t.push(n);
        });
      }),
      t
    );
  }
  AddStreamChangedListener(e) {
    this.m_setStreamChangedListeners.add(e);
  }
  RemoveStreamChangedListener(e) {
    this.m_setStreamChangedListeners.delete(e);
  }
  async LoadBIsEmbeddedBroadcastHidden(e) {
    if (this.m_bUserPreferenceHideBroadcastByDefault === void 0) {
      let t = y(`broadcastuser`, `application_config`);
      if (!t)
        try {
          let n =
            _.STORE_BASE_URL + `broadcast/ajaxgetuserbroadcastpreferences`;
          t = (await C.default.get(n, { params: {}, cancelToken: e.token }))
            .data;
        } catch (e) {
          (console.log(`LoadBIsEmbeddedBroadcastHidden: ` + b(e).strErrorMsg),
            (t = { bHideStoreBroadcast: !1 }));
        }
      n(() => {
        ((this.m_bUserPreferenceHideBroadcastByDefault = t.bHideStoreBroadcast),
          (this.m_bCollapsed = t.bHideStoreBroadcast));
      });
    }
    return this.BIsEmbeddedBroadcastHiddenByDefaultUserSettings();
  }
  async SetupEmbeddableVOD(e, t) {
    ((this.m_bUseFakeData = !1),
      (this.m_streamChatStatus = `remove`),
      p(!!e.nAppIDVOD, `SetupEmbeddableVOD requires a VOD appid`),
      await h
        .Get()
        .QueueAppRequest(e.nAppIDVOD, {
          include_assets: !0,
          include_trailers: !0,
        }));
    let n = h.Get().GetApp(e.nAppIDVOD),
      r = new c();
    ((r.accountid = 0),
      (r.nAppIDVOD = e.nAppIDVOD),
      (r.default_selection_priority = o.k_ePrimary),
      (r.current_selection_priority = o.k_ePrimary),
      (r.thumbnail_http_address = n?.GetAssets()?.GetHeaderURL() || ``),
      (r.title = n?.GetName() || ``));
    let i = this.GetStreams(e);
    if (
      (p(
        !!i,
        `SetupEmbeddableVOD called before the streams loaded`,
        e.nAppIDVOD,
      ),
      i.unshift(r),
      t)
    ) {
      let t = this.GetStreamsLookupKeyFromDef(e);
      this.m_playReadyStream.set(t, r);
    }
  }
  async HintLoadEmbeddablePreviewStreams(e) {
    let t = {
      eventid: e.event ? e.event.GID : void 0,
      previewAccounts:
        e.bIsPreview && e.accountIDs
          ? e.accountIDs.slice().sort().join(`,`)
          : void 0,
    };
    try {
      let n = await C.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpreview`,
        { params: t },
      );
      return this.HandleHintLoadBroadcastResponse(e, n.data);
    } catch (e) {
      let t = b(e);
      console.error(
        `HintLoadEmbeddablePreviewStreams hit error loading: ` + t.strErrorMsg,
        t,
      );
    }
    return [];
  }
  async HintLoadEmbeddableStreams(e) {
    let t = this.MapEmbeddableStreamToRequest(e),
      n = this.GetStreamsLookupKeyFromParam(t),
      r = this.m_inFlightRequests.get(n);
    return (
      r ||
        (this.m_lookupKeyToEmbedStreamDef.set(n, e),
        (r = this.InternalHintLoadEmbeddableStreams(e, t)),
        this.m_inFlightRequests.set(n, r)),
      r
    );
  }
  async InternalHintLoadEmbeddableStreams(e, t) {
    let n = y(`broadcast_available_for_page`, `application_config`);
    if (s(n)) return this.HandleHintLoadBroadcastResponse(e, n);
    try {
      let n = await C.default.get(
        _.STORE_BASE_URL + `broadcast/ajaxgetstreamersforpage`,
        { params: t },
      );
      return this.HandleHintLoadBroadcastResponse(e, n.data);
    } catch (e) {
      let t = b(e);
      console.error(
        `HintLoadEmbeddableStreams hit error loading: ` + t.strErrorMsg,
        t,
      );
    }
    return [];
  }
  async HandleHintLoadBroadcastResponse(e, t) {
    ((this.m_bUseFakeData = !1),
      e.bIsPreview &&
        (t?.filtered?.length > 0
          ? (p(!!e.event, `Broadcast preview requires an event`),
            this.ExtractBroadcastPrioritiesFromPartnerEventForPreview(
              e.event,
              t.filtered,
            ))
          : ((t = {
              filtered: [{}],
              success: 1,
              total_count: 1,
              err_msg: ``,
              broadcast_chat_visibility: `hide`,
            }),
            (this.m_bUseFakeData = !0))),
      t.broadcast_chat_visibility &&
        (this.m_pageChatStatus = t.broadcast_chat_visibility));
    let r = [];
    n(() => {
      t.filtered.forEach((e) => {
        e.steamid ||= m
          .InitFromAccountID(e.accountid, _.EUNIVERSE)
          .ConvertTo64BitString();
        let t = d.GetOrCreateBroadcastInfo(e.steamid),
          n = e.appid ? Number(e.appid) : 7;
        ((t.m_nAppID = n),
          (t.m_strAppId = `` + n),
          e.current_selection_priority === void 0 &&
            (e.current_selection_priority = e.default_selection_priority),
          n != 7 && r.push(n));
      });
    });
    let i = this.GetStreamsLookupKeyFromDef(e);
    if (
      (this.m_lookupStreams.set(i, t.filtered), this.m_onLoadContextCall.has(i))
    ) {
      let e = this.m_onLoadContextCall.get(i);
      e && e.fnCallback();
    }
    let a = this.GetStreams(e) ?? [];
    return (await this.AutoStartVideoStream(e, a), a);
  }
  ExtractBroadcastPrioritiesFromPartnerEventForPreview(e, t) {
    let n = Array.from(e.jsondata.broadcast_whitelist ?? []),
      r = Array.from(e.jsondata.broadcast_priority ?? []),
      i = new Map();
    for (let e = 0; e < n.length && !(e >= r.length); e++) i.set(n[e], l(r[e]));
    t.forEach((e) => {
      let t = Number(e.accountid);
      i.has(t) && (e.current_selection_priority = i.get(t));
    });
  }
  async AutoStartVideoStream(e, t) {
    let n = this.GetStreamsLookupKeyFromDef(e);
    if (this.m_bMapHasStartedVideo.get(n)) return null;
    if (this.m_bUseFakeData) {
      if (!this.m_playReadyStream.get(n)) {
        let e = {
          accountid: 0,
          thumbnail_http_address: ``,
          default_selection_priority: o.k_eGeneral,
          current_selection_priority: o.k_eGeneral,
        };
        this.m_playReadyStream.set(n, e);
      }
      return this.m_playReadyStream;
    }
    return this.PlayFromAvailableStreams(e, t);
  }
  async PlayFromAvailableStreams(e, t, n = !1) {
    let r = new Set();
    for (;;) {
      let i = t.filter((e) => !r.has(e) && (!n || !e.nAppIDVOD)),
        a = this.GetAutoStartStream(i);
      if (!a) return null;
      if (await this.AttemptToPlayStream(e, a)) return a;
      r.add(a);
    }
  }
  async AttemptToPlayStream(e, t) {
    let n = this.GetStreamsLookupKeyFromDef(e),
      r = t.accountid ?? 0;
    if (
      (this.m_bMapHasStartedVideo.set(n, !0),
      this.m_mapBroadcastChecked.has(r) ||
        this.m_mapBroadcastChecked.set(
          r,
          this.InternalAttemptToPlayStream(e, t),
        ),
      t.nAppIDVOD)
    )
      this.m_playReadyStream.set(n, t);
    else {
      let i = await this.m_mapBroadcastChecked.get(r);
      if (i?.success == 1) {
        ((t.steamid = i.steamid),
          this.m_playReadyStream.set(n, t),
          (this.m_streamChatStatus =
            this.GetConcurrentStreams(e) > 1
              ? `hide`
              : (t.broadcast_chat_visibility ?? null)),
          this.m_setStreamChangedListeners.forEach((e) => e(t)));
        let r = d.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
        A(r, 1, t.snr);
      } else return null;
    }
    return t;
  }
  async InternalAttemptToPlayStream(e, t) {
    this.GetStreamsLookupKeyFromDef(e);
    try {
      let e = _.STORE_BASE_URL + `broadcast/ajaxcheckbroadcast`,
        n = {
          broadcastaccountid: t.accountid,
          viewer_token: d.GetViewerToken(),
          origin: self.origin,
        };
      return (await C.default.get(e, { params: n })).data;
    } catch (e) {
      let t = b(e);
      console.error(`Broadcast.AttemptToPlayStream: ` + t.strErrorMsg, t);
    }
    return null;
  }
  GetAutoStartStream(e) {
    if (!e) return null;
    let t = e.filter((e) => T(e)),
      n = t.reduce((e, t) => Math.max(e, O(t)), 0),
      r = t.filter((e) => O(e) === n);
    return r.length === 0 ? null : r[Math.floor(Math.random() * r.length)];
  }
  MapEmbeddableStreamToRequest(e) {
    return {
      appid: e.appid,
      promotionName: e.bIsPreview ? `preview` : e.promotionName,
      clanid: e.clanid
        ? e.clanid
        : e.event
          ? e.event.clanSteamID.GetAccountID()
          : void 0,
      listid: e.listid,
      subid: e.subid,
      bundleid: e.bundleid,
      eventid: e.event ? e.event.GID : void 0,
      previewAccounts:
        e.bIsPreview && e.accountIDs
          ? e.accountIDs.slice().sort().join(`,`)
          : void 0,
      test: w,
      cc: _.COUNTRY,
      l: _.LANGUAGE,
      hubtype: e.event?.GetContentHubType(),
      hubcategory: e.event?.GetContentHubCategory(),
      hubtagid: e.event?.GetContentHubTag(),
      tabuniqueid: e.tabuniqueid,
      tabfilter: e.tabfilter,
      rt_now_override_test: f.BHasTimeOverride()
        ? f.GetTimeNowWithOverride()
        : void 0,
    };
  }
  GetStreamsLookupKeyFromDef(e) {
    return this.GetStreamsLookupKeyFromParam(
      this.MapEmbeddableStreamToRequest(e),
    );
  }
  GetStreamsLookupKeyFromParam(e) {
    return JSON.stringify(e);
  }
  static Get() {
    return (
      e.s_GlobalStore || ((e.s_GlobalStore = new e()), e.s_GlobalStore.Init()),
      e.s_GlobalStore
    );
  }
  Init() {}
};
(v([i], D.prototype, `m_lookupStreams`, void 0),
  v([i], D.prototype, `m_playReadyStream`, void 0),
  v([i], D.prototype, `m_pageChatStatus`, void 0),
  v([i], D.prototype, `m_streamChatStatus`, void 0),
  v([i], D.prototype, `m_bUserChatExpanded`, void 0),
  v([i], D.prototype, `m_bUserPreferenceHideBroadcastByDefault`, void 0),
  v([i], D.prototype, `m_bCollapsed`, void 0),
  v([a], D.prototype, `HintLoadEmbeddablePreviewStreams`, null),
  v([a], D.prototype, `AttemptToPlayStream`, null));
function O(e) {
  return e.current_selection_priority || o.k_eGeneral;
}
function k(e) {
  e.sort((e, t) =>
    O(e) == O(t)
      ? e.viewer_count == t.viewer_count
        ? (t.accountid ?? 0) - (e.accountid ?? 0)
        : (t.viewer_count ?? 0) - (e.viewer_count ?? 0)
      : O(t) - O(e),
  );
}
async function A(e, t, n) {
  if (e > 0 && e != 7 && n) {
    let r = new URLSearchParams();
    (r.append(`page_action`, `` + t),
      r.append(`snr`, n),
      C.default.post(
        _.STORE_BASE_URL + `ajaxreportproductaction/` + e + `/`,
        r,
      ));
  }
}
var j = new g();
export {
  A as a,
  x as c,
  T as i,
  S as l,
  D as n,
  k as o,
  O as r,
  j as s,
  E as t,
};
