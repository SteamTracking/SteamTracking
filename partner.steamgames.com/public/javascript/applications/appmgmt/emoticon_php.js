/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  O as e,
  S as t,
  U as n,
  i as r,
  k as i,
  kt as a,
  nt as o,
  on as s,
  x as c,
} from "./mobx.esm.js";
import { t as l } from "./axios.js";
function u(e, t) {
  return t
    ? n.COMMUNITY_CDN_URL + `economy/emoticonlarge/` + e
    : n.COMMUNITY_CDN_URL + `economy/emoticon/` + e;
}
a();
var d = 50,
  f = 604800,
  p = class t {
    constructor() {
      c(this);
    }
    m_bEmoticonListRequested = !1;
    m_bInitialized = !1;
    m_rtMostRecentEmoticon = void 0;
    static sm_EmoticonRegex = RegExp(`ː([a-zA-Z0-9_\\-]+)ː`, `g`);
    static sm_UnvalidatedEmoticonRegex = RegExp(
      `(?:ː|:)([a-zA-Z0-9_\\-]+)(?:ː|:)`,
      `g`,
    );
    m_rgEmoticons = [];
    m_setEmoticonOwned = new Set();
    m_rgFlairs = [];
    m_rgRecentEmoticons = void 0;
    m_rgStickers = [];
    m_rgRecentStickers = void 0;
    m_rgEffects = [];
    m_rtLastStickerOrEffect = -(2 ** 53 - 1);
    m_emoticonTrackerCallback = null;
    m_stickerTrackerCallback = null;
    static GetEmoticonURL(e, t) {
      return u(e, t);
    }
    static GetEmoticonReplaceRegex() {
      return t.sm_EmoticonRegex;
    }
    static GetUnvalidatedEmoticonReplaceRegex() {
      return t.sm_UnvalidatedEmoticonRegex;
    }
    static BEmoticonFilterMatch(e, t) {
      return `:${e.name_normalized || e.name}:`.indexOf(t.toLowerCase()) !== -1;
    }
    static FilterEmoticons(e, n) {
      return !n || n === `:`
        ? e
        : e.filter((e) => t.BEmoticonFilterMatch(e, n));
    }
    static BStickerFilterMatch(e, t) {
      return e.name.toLowerCase().indexOf(t.toLowerCase()) > -1;
    }
    static FilterStickers(e, n) {
      return n ? e.filter((e) => t.BStickerFilterMatch(e, n)) : e;
    }
    SearchEmoticons(e, t = 25, n = !0) {
      this.UpdateEmoticonList();
      function r(e) {
        return e.name_normalized || e.name;
      }
      e = e.toLocaleLowerCase();
      let i = this.recent_emoticons.filter((t) => !e || r(t).startsWith(e)),
        a = this.recent_emoticons.filter((t) => !n && r(t).indexOf(e) !== -1),
        o = this.m_rgEmoticons.filter((t) => !e || r(t).startsWith(e)),
        s = this.m_rgEmoticons.filter((t) => !n && r(t).indexOf(e) !== -1),
        c = new Set(),
        l = [];
      function u(e, n, i) {
        return l.length >= t
          ? !1
          : (c.has(e) || (c.add(e), l.push({ name: r(e), recent: n, new: i })),
            !0);
      }
      function d(e, t, n) {
        for (let r of e) if (!u(r, t, n(r))) break;
      }
      return (
        d(i, !0, (e) => !(e.last_used || !e.time_received)),
        d(o, !1, () => !1),
        d(a, !0, (e) => !(e.last_used || !e.time_received)),
        d(s, !1, () => !1),
        l
      );
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    async BAwaitInitialized() {
      return (
        this.m_bInitialized ||
          (this.UpdateEmoticonList(), await e(() => this.m_bInitialized)),
        this.m_bInitialized
      );
    }
    GetTimeReceivedNewestEmoticon() {
      return this.UpdateEmoticonList(), this.m_rtMostRecentEmoticon;
    }
    GetTimeReceivedForStickerOrEffect() {
      return this.m_rtLastStickerOrEffect;
    }
    UpdateEmoticonList() {
      this.m_bInitialized || this.RequestEmoticonList();
    }
    get emoticon_list() {
      return this.UpdateEmoticonList(), this.m_rgEmoticons;
    }
    BHasEmoticon(e) {
      return this.m_setEmoticonOwned.has(e);
    }
    get flair_list() {
      return this.UpdateEmoticonList(), this.m_rgFlairs;
    }
    GetStickerList() {
      return this.m_rgStickers;
    }
    GetEffectList() {
      return this.m_rgEffects;
    }
    GetFlairListByGroupID(e) {
      return this.m_rgFlairs.filter((t) => t.flairGroupID === e);
    }
    get recent_emoticons() {
      return this.m_rgRecentEmoticons ?? this.BuildRecentEmoticonList();
    }
    get recent_stickers() {
      return this.m_rgRecentStickers ?? this.BuildRecentStickerList();
    }
    SetEmoticonTrackerCallback(e) {
      this.m_emoticonTrackerCallback = e;
    }
    SetStickerTrackerCallback(e) {
      this.m_stickerTrackerCallback = e;
    }
    TrackEmoticonUsage(e, t) {
      if (!this.m_bInitialized) return;
      this.m_emoticonTrackerCallback && this.m_emoticonTrackerCallback(e, t);
      let n = new Map(),
        r = /\[emoticon\]([^[]*)/g,
        i;
      for (; (i = r.exec(e)); ) {
        let e = n.get(i[1]) || 0;
        n.set(i[1], e + 1);
      }
      let a = !1;
      if (n.size) {
        if (this.m_rgRecentEmoticons !== void 0)
          for (let e of this.m_rgRecentEmoticons) {
            let r = n.get(e.name);
            r !== void 0 &&
              ((e.last_used = t),
              (e.use_count = (e.use_count ?? 0) + r),
              n.delete(e.name),
              e.time_received && ((a = !0), delete e.time_received));
          }
        if (n.size)
          for (let e of this.m_rgEmoticons) {
            let r = n.get(e.name);
            r !== void 0 &&
              ((e.last_used = t),
              (e.use_count = (e.use_count ?? 0) + r),
              delete e.time_received,
              this.m_rgRecentEmoticons !== void 0 &&
                this.m_rgRecentEmoticons.push(e));
          }
        if (
          this.m_rgRecentEmoticons !== void 0 &&
          (this.BuildRecentEmoticonList(), a)
        ) {
          this.m_rtMostRecentEmoticon = void 0;
          for (let e of this.m_rgRecentEmoticons)
            !e.last_used &&
              e.time_received &&
              (!this.m_rtMostRecentEmoticon ||
                e.time_received > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = e.time_received);
        }
      }
    }
    TrackStickerUsage(e, t) {
      if (!this.m_bInitialized) return;
      this.m_stickerTrackerCallback && this.m_stickerTrackerCallback(e, t);
      let n = this.m_rgStickers.find(({ name: t }) => t === e);
      n &&
        ((n.last_used = t),
        (n.use_count = (n.use_count ?? 0) + 1),
        delete n.time_received,
        this.BuildRecentStickerList());
    }
    RequestEmoticonList() {
      !this.m_bEmoticonListRequested &&
        this.BTransportReady() &&
        ((this.m_bEmoticonListRequested = !0),
        this.RequestEmoticonListInternal());
    }
    BuildRecentEmoticonList() {
      return (
        (this.m_rgRecentEmoticons = this.BuildRecentList(this.m_rgEmoticons)),
        this.m_rgRecentEmoticons
      );
    }
    BuildRecentStickerList() {
      return (
        (this.m_rgRecentStickers = this.BuildRecentList(this.m_rgStickers)),
        this.m_rgRecentStickers
      );
    }
    BuildRecentList(e) {
      let t = this.GetServerTime() - f,
        n = e.filter(({ last_used: e, time_received: n }) => e || (n && n > t));
      return (
        n.sort(
          (e, t) =>
            (t.last_used || t.time_received || 0) -
            (e.last_used || e.time_received || 0),
        ),
        n.slice(0, d)
      );
    }
    OnEmoticonListReceived(e) {
      (this.m_rgFlairs = []),
        (this.m_rgEmoticons = []),
        (this.m_rgRecentEmoticons = void 0),
        (this.m_rtMostRecentEmoticon = void 0);
      let t = this.GetServerTime() - f;
      for (let n of e) {
        let e = n.name;
        if (e.startsWith(`^`)) {
          let t = e.match(new RegExp(/:(.*):/)),
            n = e.match(new RegExp(/\^(.*)\^/));
          t && n && this.m_rgFlairs.push({ name: t[1], flairGroupID: n[1] });
        } else {
          let e = n.time_received;
          !n.last_used && e && e > t
            ? (!this.m_rtMostRecentEmoticon ||
                e > this.m_rtMostRecentEmoticon) &&
              (this.m_rtMostRecentEmoticon = e)
            : delete n.time_received,
            this.m_rgEmoticons.push(n);
        }
      }
      (this.m_setEmoticonOwned = new Set(
        this.m_rgEmoticons.map((e) => e.name_normalized || e.name),
      )),
        (this.m_bInitialized = !0),
        (this.m_bEmoticonListRequested = !1);
    }
  };
i([t], p.prototype, `m_bInitialized`, void 0),
  i([t], p.prototype, `m_rtMostRecentEmoticon`, void 0),
  i([t], p.prototype, `m_rtLastStickerOrEffect`, void 0),
  i([r], p.prototype, `TrackEmoticonUsage`, null);
var m = s(l()),
  h = class extends p {
    constructor() {
      super();
    }
    BTransportReady() {
      return !0;
    }
    GetServerTime() {
      return o.PAGE_TIMESTAMP + Math.floor(performance.now() / 1e3);
    }
    async RequestEmoticonListInternal() {
      let e = [];
      try {
        let t = await m.default.get(o.CHAT_BASE_URL + `actions/EmoticonData`, {
          withCredentials: !0,
        });
        if (t.data.emoticons)
          for (let n of t.data.emoticons) {
            let t = n.name;
            if (t) {
              if (t.startsWith(`^`)) e.push({ name: t });
              else {
                let r = { name: t.substr(1, t.length - 2) },
                  i = r.name.toLowerCase();
                i != r.name && (r.name_normalized = i),
                  n.time_last_used && (r.last_used = n.time_last_used),
                  n.use_count && (r.use_count = n.use_count),
                  n.time_received && (r.time_received = n.time_received),
                  n.appid && (r.appid = n.appid),
                  e.push(r);
              }
            }
          }
      } catch (e) {
        console.error(`error loading emoticon list`, e);
      }
      this.OnEmoticonListReceived(e);
    }
  };
export { p as n, u as r, h as t };
