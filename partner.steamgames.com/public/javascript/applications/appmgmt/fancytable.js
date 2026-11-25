/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  Ct as e,
  K as t,
  Pt as n,
  St as r,
  W as i,
  _t as a,
  bt as o,
  gt as s,
  nt as c,
  vt as l,
  wt as u,
  xt as d,
  yt as f,
} from "./chunk~de7f2df91c.js";
import {
  Et as p,
  Mt as m,
  Ot as h,
  U as g,
  wt as _,
  xt as ee,
} from "./chunk~bd90a5fce7.js";
import { Ua as v, mn as y } from "./chunk~1fa4b8f2ff.js";
import { t as b } from "./chunk~e7f5a67b58.js";
import {
  i as te,
  n as x,
  o as ne,
  r as S,
  t as re,
} from "./chunk~5ab42519dc.js";
var C = n(u(), 1),
  w = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.total_playtime_seconds || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            total_playtime_seconds: {
              n: 1,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            total_sessions: { n: 20, br: f.readUint32, bw: e.writeUint32 },
            vr_sessions: { n: 21, br: f.readUint32, bw: e.writeUint32 },
            deck_sessions: { n: 22, br: f.readUint32, bw: e.writeUint32 },
            controller_sessions: { n: 23, br: f.readUint32, bw: e.writeUint32 },
            linux_sessions: { n: 24, br: f.readUint32, bw: e.writeUint32 },
            macos_sessions: { n: 25, br: f.readUint32, bw: e.writeUint32 },
            windows_sessions: { n: 26, br: f.readUint32, bw: e.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: f.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  T = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { appid: { n: 1, br: f.readUint32, bw: e.writeUint32 } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  E = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.longest_consecutive_days || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            longest_consecutive_days: {
              n: 1,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            rtime_start: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            streak_games: { n: 3, c: T, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  D = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.overall_rank || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            overall_rank: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            vr_rank: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            deck_rank: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            controller_rank: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            linux_rank: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            mac_rank: { n: 6, br: f.readUint32, bw: e.writeUint32 },
            windows_rank: { n: 7, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  O = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            stats: { n: 2, c: w },
            playtime_streak: { n: 3, c: E },
            playtime_ranks: { n: 4, c: D },
            rtime_first_played: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            relative_game_stats: { n: 6, c: w },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  k = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            new_this_year: { n: 2, br: f.readBool, bw: e.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            demo: { n: 4, br: f.readBool, bw: e.writeBool },
            playtest: { n: 5, br: f.readBool, bw: e.writeBool },
            played_during_early_access: {
              n: 6,
              br: f.readBool,
              bw: e.writeBool,
            },
            played_vr: { n: 7, br: f.readBool, bw: e.writeBool },
            played_deck: { n: 8, br: f.readBool, bw: e.writeBool },
            played_controller: { n: 9, br: f.readBool, bw: e.writeBool },
            played_linux: { n: 10, br: f.readBool, bw: e.writeBool },
            played_mac: { n: 11, br: f.readBool, bw: e.writeBool },
            played_windows: { n: 12, br: f.readBool, bw: e.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            total_sessions: { n: 14, br: f.readUint32, bw: e.writeUint32 },
            rtime_release_date: { n: 15, br: f.readUint32, bw: e.writeUint32 },
            parent_appid: { n: 16, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  ie = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  A = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            rank: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  j = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.category || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            category: { n: 1, br: f.readString, bw: e.writeString },
            rankings: { n: 2, c: A, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  ae = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || s(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: j },
            vr_ranking: { n: 2, c: j },
            deck_ranking: { n: 3, c: j },
            controller_ranking: { n: 4, c: j },
            linux_ranking: { n: 5, c: j },
            mac_ranking: { n: 6, c: j },
            windows_ranking: { n: 7, c: j },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  M = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.total_achievements || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            total_achievements: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: f.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  oe = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || s(e.M()),
        C.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: se, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  se = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.tag_id || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            tag_id: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            tag_weight: { n: 2, br: f.readFloat, bw: e.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: f.readFloat,
              bw: e.writeFloat,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  ce = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.screenshots_shared || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            screenshots_shared: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            gifts_sent: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            loyalty_reactions: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            written_reviews: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            guides_submitted: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            badges_earned: { n: 7, br: f.readUint32, bw: e.writeUint32 },
            friends_added: { n: 8, br: f.readUint32, bw: e.writeUint32 },
            forum_posts: { n: 9, br: f.readUint32, bw: e.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            guide_subscribers: { n: 11, br: f.readUint32, bw: e.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            games_played_pct: { n: 13, br: f.readUint32, bw: e.writeUint32 },
            achievements_pct: { n: 14, br: f.readUint32, bw: e.writeUint32 },
            game_streak_pct: { n: 15, br: f.readUint32, bw: e.writeUint32 },
            games_played_avg: { n: 16, br: f.readUint32, bw: e.writeUint32 },
            achievements_avg: { n: 17, br: f.readUint32, bw: e.writeUint32 },
            game_streak_avg: { n: 18, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  le = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.total_stats || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            total_stats: { n: 1, c: w },
            games: { n: 2, c: O, r: !0, q: !0 },
            playtime_streak: { n: 3, c: E },
            months: { n: 5, c: ue, r: !0, q: !0 },
            game_summary: { n: 6, c: k, r: !0, q: !0 },
            demos_played: { n: 7, br: f.readUint32, bw: e.writeUint32 },
            game_rankings: { n: 8, c: ae },
            playtests_played: { n: 9, br: f.readUint32, bw: e.writeUint32 },
            summary_stats: { n: 10, c: M },
            substantial: { n: 11, d: !0, br: f.readBool, bw: e.writeBool },
            tag_stats: { n: 12, c: oe },
            by_numbers: { n: 13, c: ce },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  ue = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.rtime_month || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            rtime_month: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            stats: { n: 2, c: w },
            appid: { n: 4, c: O, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: w },
            game_summary: { n: 6, c: ie, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  N = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.account_id || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            account_id: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            playtime_stats: { n: 3, c: le },
            privacy_state: { n: 4, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  P = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.from_dbo || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            from_dbo: { n: 1, br: f.readBool, bw: e.writeBool },
            overall_time_ms: {
              n: 2,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: f.readUint64String,
              bw: e.writeUint64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  de = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.statid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            statid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            fieldid: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: f.readString,
              bw: e.writeString,
            },
            rtime_unlocked: { n: 4, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  fe = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            achievements: { n: 2, c: de, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  pe = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.median_achievements || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            median_achievements: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            median_games: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            median_streak: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  F = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.new_releases || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            new_releases: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            recent_releases: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            classic_releases: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            recent_cutoff_year: { n: 4, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  me = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.games_played || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            games_played: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            longest_streak: { n: 3, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  he = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            force_regenerate: { n: 3, br: f.readBool, bw: e.writeBool },
            access_source: { n: 4, br: f.readInt32, bw: e.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: f.readBool,
              bw: e.writeBool,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  ge = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || s(e.M()),
        C.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: N },
            performance_stats: { n: 2, c: P },
            percentiles: { n: 3, c: pe },
            distribution: { n: 4, c: F },
            previous_year_summary: { n: 5, c: me },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  _e = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            privacy_state: { n: 3, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  ve = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.privacy_state || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { privacy_state: { n: 1, br: f.readEnum, bw: e.writeEnum } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  ye = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  be = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.privacy_state || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            privacy_state: { n: 1, br: f.readEnum, bw: e.writeEnum },
            generated_value: { n: 2, br: f.readBool, bw: e.writeBool },
            steamid: {
              n: 3,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  xe = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
            total_only: { n: 4, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  Se = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.game_achievements || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            game_achievements: { n: 1, c: fe, r: !0, q: !0 },
            total_achievements: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: f.readUint32,
              bw: e.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: f.readUint32,
              bw: e.writeUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  Ce = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Request`;
    }
  },
  we = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.games || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            games: { n: 1, c: Ee, r: !0, q: !0 },
            total_sets: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            total_base_game_sets: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            total_dlc_sets: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            total_games: { n: 5, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response`;
    }
  },
  Te = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.groupid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            groupid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            rtime_completed: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response_CompletedSet`;
    }
  },
  Ee = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            base_sets_completed: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            dlc_sets_completed: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            rtime_last_completed: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            completed_sets: { n: 5, c: Te, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievementSets_Response_Game`;
    }
  },
  De = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: f.readUint32,
              pbr: f.readPackedUint32,
              bw: e.writeRepeatedUint32,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  Oe = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || s(e.M()),
        C.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: Ae, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  ke = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.image_url || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            image_url: { n: 1, br: f.readString, bw: e.writeString },
            preview_url: { n: 2, br: f.readString, bw: e.writeString },
            image_width: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            image_height: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: f.readBool, bw: e.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: f.readBool,
              bw: e.writeBool,
            },
            visibility: { n: 7, br: f.readUint32, bw: e.writeUint32 },
            spoiler_tag: { n: 8, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  Ae = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.appid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            appid: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            screenshots: { n: 2, c: ke, r: !0, q: !0 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  je = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            gid: { n: 2, br: f.readFixed64String, bw: e.writeFixed64String },
            type: { n: 3, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  Me = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.jsondata || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: { jsondata: { n: 1, br: f.readString, bw: e.writeString } },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  Ne = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: f.readFixed64String,
              pbr: f.readPackedFixed64String,
              bw: e.writeRepeatedFixed64String,
            },
            type: { n: 3, br: f.readEnum, bw: e.writeEnum },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  Pe = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || s(e.M()),
        C.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: Fe, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  Fe = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gid: { n: 1, br: f.readFixed64String, bw: e.writeFixed64String },
            jsondata: { n: 2, br: f.readString, bw: e.writeString },
            steamid: {
              n: 3,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  Ie = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gid: { n: 1, br: f.readFixed64String, bw: e.writeFixed64String },
            type: { n: 2, br: f.readEnum, bw: e.writeEnum },
            count: { n: 3, br: f.readUint32, bw: e.writeUint32 },
            last_account_index: { n: 4, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  Le = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.entries || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            entries: { n: 1, c: Re, r: !0, q: !0 },
            last_account_index: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Re = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.gid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            gid: { n: 1, br: f.readFixed64String, bw: e.writeFixed64String },
            jsondata: { n: 2, br: f.readString, bw: e.writeString },
            steamid: {
              n: 3,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  ze = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            return_private: { n: 3, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  Be = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            privacy_state: { n: 3, br: f.readEnum, bw: e.writeEnum },
            rt_privacy_updated: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            privacy_override: { n: 5, br: f.readBool, bw: e.writeBool },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Ve = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.friend_shares || s(t.M()),
        C.Message.initialize(this, e, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            friend_shares: { n: 1, c: Be, r: !0, q: !0 },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  He = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
            year: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            language: { n: 3, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Ue = class e extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || s(e.M()),
        C.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: We, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= o(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return l(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new C.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      d(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new C.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  We = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.name || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            name: { n: 1, br: f.readString, bw: e.writeString },
            url_path: { n: 2, br: f.readString, bw: e.writeString },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  Ge = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.steamid || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            steamid: {
              n: 1,
              br: f.readFixed64String,
              bw: e.writeFixed64String,
            },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  Ke = class t extends C.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(),
        t.prototype.year || s(t.M()),
        C.Message.initialize(this, e, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (t.sm_m ||= {
          proto: t,
          fields: {
            year: { n: 1, br: f.readUint32, bw: e.writeUint32 },
            month: { n: 2, br: f.readUint32, bw: e.writeUint32 },
            games_played: { n: 4, br: f.readUint32, bw: e.writeUint32 },
            top_played_appid: { n: 5, br: f.readUint32, bw: e.writeUint32 },
            longest_streak_days: { n: 6, br: f.readUint32, bw: e.writeUint32 },
            rt_streak_start: { n: 7, br: f.readUint32, bw: e.writeUint32 },
            achievements: { n: 8, br: f.readUint32, bw: e.writeUint32 },
            screenshots: { n: 9, br: f.readUint32, bw: e.writeUint32 },
          },
        }),
        t.sm_m
      );
    }
    static MBF() {
      return ((t.sm_mbf ||= o(t.M())), t.sm_mbf);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, n) {
      return r(t.M(), e, n);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let n = new C.BinaryReader(e),
        r = new t();
      return t.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, n) {
      return a(t.MBF(), e, n);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBuffer());
    }
    static serializeBinaryToWriter(e, n) {
      d(t.M(), e, n);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return (t.serializeBinaryToWriter(this, e), e.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  qe;
(function (e) {
  function n(e, n, r) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, t(he, n, r), ge, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearInReview = n;
  function r(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      t(ye, n, r),
      be,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = r;
  function i(e, n, r) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      t(_e, n, r),
      ve,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2, rgBrowserAPISites: [`store`] },
    );
  }
  e.SetUserSharingPermissions = i;
  function a(e, n, r) {
    return e.SendMsg(`SaleFeature.GetUserYearAchievements#1`, t(xe, n, r), Se, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearAchievements = a;
  function o(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetUserYearAchievementSets#1`,
      t(Ce, n, r),
      we,
      { bConstMethod: !0, ePrivilege: 2, rgBrowserAPISites: [`all`] },
    );
  }
  e.GetUserYearAchievementSets = o;
  function s(e, n, r) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, t(De, n, r), Oe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`store`],
    });
  }
  e.GetUserYearScreenshots = s;
  function c(e, n, r) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, t(je, n, r), Me, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetUserActionData = c;
  function l(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetMultipleUserActionData#1`,
      t(Ne, n, r),
      Pe,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetMultipleUserActionData = l;
  function u(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetAllUserActionDataForType#1`,
      t(Ie, n, r),
      Le,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = u;
  function d(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      t(ze, n, r),
      Ve,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetFriendsSharedYearInReview = d;
  function f(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      t(He, n, r),
      Ue,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`store`],
      },
    );
  }
  e.GetUserYearInReviewShareImage = f;
  function p(e, n, r) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      t(Ge, n, r),
      Ke,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = p;
})((qe ||= {}));
var I = n(c(), 1);
function Je() {
  return {
    accessor: (e, t) =>
      typeof e == `function`
        ? { ...t, accessorFn: e }
        : { ...t, accessorKey: e },
    display: (e) => e,
    group: (e) => e,
  };
}
function L(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function R(e, t) {
  return (n) => {
    t.setState((t) => ({ ...t, [e]: L(n, t[e]) }));
  };
}
function z(e) {
  return e instanceof Function;
}
function Ye(e) {
  return Array.isArray(e) && e.every((e) => typeof e == `number`);
}
function Xe(e, t) {
  let n = [],
    r = (e) => {
      e.forEach((e) => {
        n.push(e);
        let i = t(e);
        i != null && i.length && r(i);
      });
    };
  return (r(e), n);
}
function B(e, t, n) {
  let r = [],
    i;
  return (a) => {
    let o;
    n.key && n.debug && (o = Date.now());
    let s = e(a);
    if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
    r = s;
    let c;
    if (
      (n.key && n.debug && (c = Date.now()),
      (i = t(...s)),
      n == null || n.onChange == null || n.onChange(i),
      n.key && n.debug && n != null && n.debug())
    ) {
      let e = Math.round((Date.now() - o) * 100) / 100,
        t = Math.round((Date.now() - c) * 100) / 100,
        r = t / 16,
        i = (e, t) => {
          for (e = String(e); e.length < t;) e = ` ` + e;
          return e;
        };
      console.info(
        `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`,
        n?.key,
      );
    }
    return i;
  };
}
function V(e, t, n, r) {
  return { debug: () => e?.debugAll ?? e[t], key: !1, onChange: r };
}
function Ze(e, t, n, r) {
  let i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
    getContext: B(
      () => [e, n, t, i],
      (e, t, n, r) => ({
        table: e,
        column: t,
        row: n,
        cell: r,
        getValue: r.getValue,
        renderValue: r.renderValue,
      }),
      V(e.options, `debugCells`, `cell.getContext`),
    ),
  };
  return (
    e._features.forEach((r) => {
      r.createCell == null || r.createCell(i, n, t, e);
    }, {}),
    i
  );
}
function Qe(e, t, n, r) {
  let i = { ...e._getDefaultColumnDef(), ...t },
    a = i.accessorKey,
    o =
      i.id ??
      (a
        ? typeof String.prototype.replaceAll == `function`
          ? a.replaceAll(`.`, `_`)
          : a.replace(/\./g, `_`)
        : void 0) ??
      (typeof i.header == `string` ? i.header : void 0),
    s;
  if (
    (i.accessorFn
      ? (s = i.accessorFn)
      : a &&
        (s = a.includes(`.`)
          ? (e) => {
              let t = e;
              for (let e of a.split(`.`)) t = t?.[e];
              return t;
            }
          : (e) => e[i.accessorKey]),
    !o)
  )
    throw Error();
  let c = {
    id: `${String(o)}`,
    accessorFn: s,
    parent: r,
    depth: n,
    columnDef: i,
    columns: [],
    getFlatColumns: B(
      () => [!0],
      () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())],
      V(e.options, `debugColumns`, `column.getFlatColumns`),
    ),
    getLeafColumns: B(
      () => [e._getOrderColumnsFn()],
      (e) => {
        var t;
        return (t = c.columns) != null && t.length
          ? e(c.columns.flatMap((e) => e.getLeafColumns()))
          : [c];
      },
      V(e.options, `debugColumns`, `column.getLeafColumns`),
    ),
  };
  for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
  return c;
}
var H = `debugHeaders`;
function $e(e, t, n) {
  let r = {
    id: n.id ?? t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      let e = [],
        t = (n) => {
          (n.subHeaders && n.subHeaders.length && n.subHeaders.map(t),
            e.push(n));
        };
      return (t(r), e);
    },
    getContext: () => ({ table: e, header: r, column: t }),
  };
  return (
    e._features.forEach((t) => {
      t.createHeader == null || t.createHeader(r, e);
    }),
    r
  );
}
var et = {
  createTable: (e) => {
    ((e.getHeaderGroups = B(
      () => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right,
      ],
      (t, n, r, i) => {
        let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
          o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
          s = n.filter(
            (e) =>
              !(r != null && r.includes(e.id)) &&
              !(i != null && i.includes(e.id)),
          );
        return U(t, [...a, ...s, ...o], e);
      },
      V(e.options, H, `getHeaderGroups`),
    )),
      (e.getCenterHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
          e.getState().columnPinning.right,
        ],
        (t, n, r, i) => (
          (n = n.filter(
            (e) =>
              !(r != null && r.includes(e.id)) &&
              !(i != null && i.includes(e.id)),
          )),
          U(t, n, e, `center`)
        ),
        V(e.options, H, `getCenterHeaderGroups`),
      )),
      (e.getLeftHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, r) =>
          U(
            t,
            r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
            e,
            `left`,
          ),
        V(e.options, H, `getLeftHeaderGroups`),
      )),
      (e.getRightHeaderGroups = B(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, r) =>
          U(
            t,
            r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
            e,
            `right`,
          ),
        V(e.options, H, `getRightHeaderGroups`),
      )),
      (e.getFooterGroups = B(
        () => [e.getHeaderGroups()],
        (e) => [...e].reverse(),
        V(e.options, H, `getFooterGroups`),
      )),
      (e.getLeftFooterGroups = B(
        () => [e.getLeftHeaderGroups()],
        (e) => [...e].reverse(),
        V(e.options, H, `getLeftFooterGroups`),
      )),
      (e.getCenterFooterGroups = B(
        () => [e.getCenterHeaderGroups()],
        (e) => [...e].reverse(),
        V(e.options, H, `getCenterFooterGroups`),
      )),
      (e.getRightFooterGroups = B(
        () => [e.getRightHeaderGroups()],
        (e) => [...e].reverse(),
        V(e.options, H, `getRightFooterGroups`),
      )),
      (e.getFlatHeaders = B(
        () => [e.getHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        V(e.options, H, `getFlatHeaders`),
      )),
      (e.getLeftFlatHeaders = B(
        () => [e.getLeftHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        V(e.options, H, `getLeftFlatHeaders`),
      )),
      (e.getCenterFlatHeaders = B(
        () => [e.getCenterHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        V(e.options, H, `getCenterFlatHeaders`),
      )),
      (e.getRightFlatHeaders = B(
        () => [e.getRightHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        V(e.options, H, `getRightFlatHeaders`),
      )),
      (e.getCenterLeafHeaders = B(
        () => [e.getCenterFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        V(e.options, H, `getCenterLeafHeaders`),
      )),
      (e.getLeftLeafHeaders = B(
        () => [e.getLeftFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        V(e.options, H, `getLeftLeafHeaders`),
      )),
      (e.getRightLeafHeaders = B(
        () => [e.getRightFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        V(e.options, H, `getRightLeafHeaders`),
      )),
      (e.getLeafHeaders = B(
        () => [
          e.getLeftHeaderGroups(),
          e.getCenterHeaderGroups(),
          e.getRightHeaderGroups(),
        ],
        (e, t, n) =>
          [
            ...(e[0]?.headers ?? []),
            ...(t[0]?.headers ?? []),
            ...(n[0]?.headers ?? []),
          ]
            .map((e) => e.getLeafHeaders())
            .flat(),
        V(e.options, H, `getLeafHeaders`),
      )));
  },
};
function U(e, t, n, r) {
  let i = 0,
    a = function (e, t) {
      (t === void 0 && (t = 1),
        (i = Math.max(i, t)),
        e
          .filter((e) => e.getIsVisible())
          .forEach((e) => {
            var n;
            (n = e.columns) != null && n.length && a(e.columns, t + 1);
          }, 0));
    };
  a(e);
  let o = [],
    s = (e, t) => {
      let i = {
          depth: t,
          id: [r, `${t}`].filter(Boolean).join(`_`),
          headers: [],
        },
        a = [];
      (e.forEach((e) => {
        let o = [...a].reverse()[0],
          s = e.column.depth === i.depth,
          c,
          l = !1;
        if (
          (s && e.column.parent
            ? (c = e.column.parent)
            : ((c = e.column), (l = !0)),
          o && o?.column === c)
        )
          o.subHeaders.push(e);
        else {
          let i = $e(n, c, {
            id: [r, t, c.id, e?.id].filter(Boolean).join(`_`),
            isPlaceholder: l,
            placeholderId: l
              ? `${a.filter((e) => e.column === c).length}`
              : void 0,
            depth: t,
            index: a.length,
          });
          (i.subHeaders.push(e), a.push(i));
        }
        (i.headers.push(e), (e.headerGroup = i));
      }),
        o.push(i),
        t > 0 && s(a, t - 1));
    };
  (s(
    t.map((e, t) => $e(n, e, { depth: i, index: t })),
    i - 1,
  ),
    o.reverse());
  let c = (e) =>
    e
      .filter((e) => e.column.getIsVisible())
      .map((e) => {
        let t = 0,
          n = 0,
          r = [0];
        e.subHeaders && e.subHeaders.length
          ? ((r = []),
            c(e.subHeaders).forEach((e) => {
              let { colSpan: n, rowSpan: i } = e;
              ((t += n), r.push(i));
            }))
          : (t = 1);
        let i = Math.min(...r);
        return (
          (n += i), (e.colSpan = t), (e.rowSpan = n), { colSpan: t, rowSpan: n }
        );
      });
  return (c(o[0]?.headers ?? []), o);
}
var W = (e, t, n, r, i, a, o) => {
    let s = {
      id: t,
      index: r,
      original: n,
      depth: i,
      parentId: o,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (t) => {
        if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
        let n = e.getColumn(t);
        if (n != null && n.accessorFn)
          return (
            (s._valuesCache[t] = n.accessorFn(s.original, r)), s._valuesCache[t]
          );
      },
      getUniqueValues: (t) => {
        if (s._uniqueValuesCache.hasOwnProperty(t))
          return s._uniqueValuesCache[t];
        let n = e.getColumn(t);
        if (n != null && n.accessorFn)
          return n.columnDef.getUniqueValues
            ? ((s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(
                s.original,
                r,
              )),
              s._uniqueValuesCache[t])
            : ((s._uniqueValuesCache[t] = [s.getValue(t)]),
              s._uniqueValuesCache[t]);
      },
      renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
      subRows: a ?? [],
      getLeafRows: () => Xe(s.subRows, (e) => e.subRows),
      getParentRow: () => (s.parentId ? e.getRow(s.parentId, !0) : void 0),
      getParentRows: () => {
        let e = [],
          t = s;
        for (;;) {
          let n = t.getParentRow();
          if (!n) break;
          (e.push(n), (t = n));
        }
        return e.reverse();
      },
      getAllCells: B(
        () => [e.getAllLeafColumns()],
        (t) => t.map((t) => Ze(e, s, t, t.id)),
        V(e.options, `debugRows`, `getAllCells`),
      ),
      _getAllCellsByColumnId: B(
        () => [s.getAllCells()],
        (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
        V(e.options, `debugRows`, `getAllCellsByColumnId`),
      ),
    };
    for (let t = 0; t < e._features.length; t++) {
      let n = e._features[t];
      n == null || n.createRow == null || n.createRow(s, e);
    }
    return s;
  },
  tt = {
    createColumn: (e, t) => {
      ((e._getFacetedRowModel =
        t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
        (e.getFacetedRowModel = () =>
          e._getFacetedRowModel
            ? e._getFacetedRowModel()
            : t.getPreFilteredRowModel()),
        (e._getFacetedUniqueValues =
          t.options.getFacetedUniqueValues &&
          t.options.getFacetedUniqueValues(t, e.id)),
        (e.getFacetedUniqueValues = () =>
          e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
        (e._getFacetedMinMaxValues =
          t.options.getFacetedMinMaxValues &&
          t.options.getFacetedMinMaxValues(t, e.id)),
        (e.getFacetedMinMaxValues = () => {
          if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
        }));
    },
  },
  nt = (e, t, n) => {
    var r, i;
    let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(
      (i = e.getValue(t)) != null &&
      (i = i.toString()) != null &&
      (i = i.toLowerCase()) != null &&
      i.includes(a)
    );
  };
nt.autoRemove = (e) => K(e);
var rt = (e, t, n) => {
  var r;
  return !!(
    (r = e.getValue(t)) != null &&
    (r = r.toString()) != null &&
    r.includes(n)
  );
};
rt.autoRemove = (e) => K(e);
var it = (e, t, n) => {
  var r;
  return (
    ((r = e.getValue(t)) == null || (r = r.toString()) == null
      ? void 0
      : r.toLowerCase()) === n?.toLowerCase()
  );
};
it.autoRemove = (e) => K(e);
var at = (e, t, n) => e.getValue(t)?.includes(n);
at.autoRemove = (e) => K(e) || !(e != null && e.length);
var ot = (e, t, n) =>
  !n.some((n) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(n));
  });
ot.autoRemove = (e) => K(e) || !(e != null && e.length);
var st = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
st.autoRemove = (e) => K(e) || !(e != null && e.length);
var ct = (e, t, n) => e.getValue(t) === n;
ct.autoRemove = (e) => K(e);
var lt = (e, t, n) => e.getValue(t) == n;
lt.autoRemove = (e) => K(e);
var ut = (e, t, n) => {
  let [r, i] = n,
    a = e.getValue(t);
  return a >= r && a <= i;
};
((ut.resolveFilterValue = (e) => {
  let [t, n] = e,
    r = typeof t == `number` ? t : parseFloat(t),
    i = typeof n == `number` ? n : parseFloat(n),
    a = t === null || Number.isNaN(r) ? -1 / 0 : r,
    o = n === null || Number.isNaN(i) ? 1 / 0 : i;
  if (a > o) {
    let e = a;
    ((a = o), (o = e));
  }
  return [a, o];
}),
  (ut.autoRemove = (e) => K(e) || (K(e[0]) && K(e[1]))));
var G = {
  includesString: nt,
  includesStringSensitive: rt,
  equalsString: it,
  arrIncludes: at,
  arrIncludesAll: ot,
  arrIncludesSome: st,
  equals: ct,
  weakEquals: lt,
  inNumberRange: ut,
};
function K(e) {
  return e == null || e === ``;
}
var dt = {
  getDefaultColumnDef: () => ({ filterFn: `auto` }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: R(`columnFilters`, e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    ((e.getAutoFilterFn = () => {
      let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
      return typeof n == `string`
        ? G.includesString
        : typeof n == `number`
          ? G.inNumberRange
          : typeof n == `boolean` || (typeof n == `object` && n)
            ? G.equals
            : Array.isArray(n)
              ? G.arrIncludes
              : G.weakEquals;
    }),
      (e.getFilterFn = () =>
        z(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === `auto`
            ? e.getAutoFilterFn()
            : (t.options.filterFns?.[e.columnDef.filterFn] ??
              G[e.columnDef.filterFn])),
      (e.getCanFilter = () =>
        (e.columnDef.enableColumnFilter ?? !0) &&
        (t.options.enableColumnFilters ?? !0) &&
        (t.options.enableFilters ?? !0) &&
        !!e.accessorFn),
      (e.getIsFiltered = () => e.getFilterIndex() > -1),
      (e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null ||
          (n = n.find((t) => t.id === e.id)) == null
          ? void 0
          : n.value;
      }),
      (e.getFilterIndex = () =>
        t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1),
      (e.setFilterValue = (n) => {
        t.setColumnFilters((t) => {
          let r = e.getFilterFn(),
            i = t?.find((t) => t.id === e.id),
            a = L(n, i ? i.value : void 0);
          if (ft(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
          let o = { id: e.id, value: a };
          return i
            ? (t?.map((t) => (t.id === e.id ? o : t)) ?? [])
            : t != null && t.length
              ? [...t, o]
              : [o];
        });
      }));
  },
  createRow: (e, t) => {
    ((e.columnFilters = {}), (e.columnFiltersMeta = {}));
  },
  createTable: (e) => {
    ((e.setColumnFilters = (t) => {
      let n = e.getAllLeafColumns();
      e.options.onColumnFiltersChange == null ||
        e.options.onColumnFiltersChange((e) =>
          L(t, e)?.filter((e) => {
            let t = n.find((t) => t.id === e.id);
            return !(t && ft(t.getFilterFn(), e.value, t));
          }),
        );
    }),
      (e.resetColumnFilters = (t) => {
        e.setColumnFilters(t ? [] : (e.initialState?.columnFilters ?? []));
      }),
      (e.getPreFilteredRowModel = () => e.getCoreRowModel()),
      (e.getFilteredRowModel = () => (
        !e._getFilteredRowModel &&
          e.options.getFilteredRowModel &&
          (e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
        e.options.manualFiltering || !e._getFilteredRowModel
          ? e.getPreFilteredRowModel()
          : e._getFilteredRowModel()
      )));
  },
};
function ft(e, t, n) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, n) : !1) ||
    t === void 0 ||
    (typeof t == `string` && !t)
  );
}
var pt = {
    sum: (e, t, n) =>
      n.reduce((t, n) => {
        let r = n.getValue(e);
        return t + (typeof r == `number` ? r : 0);
      }, 0),
    min: (e, t, n) => {
      let r;
      return (
        n.forEach((t) => {
          let n = t.getValue(e);
          n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
        }),
        r
      );
    },
    max: (e, t, n) => {
      let r;
      return (
        n.forEach((t) => {
          let n = t.getValue(e);
          n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
        }),
        r
      );
    },
    extent: (e, t, n) => {
      let r, i;
      return (
        n.forEach((t) => {
          let n = t.getValue(e);
          n != null &&
            (r === void 0
              ? n >= n && (r = i = n)
              : (r > n && (r = n), i < n && (i = n)));
        }),
        [r, i]
      );
    },
    mean: (e, t) => {
      let n = 0,
        r = 0;
      if (
        (t.forEach((t) => {
          let i = t.getValue(e);
          i != null && (i = +i) >= i && (++n, (r += i));
        }),
        n)
      )
        return r / n;
    },
    median: (e, t) => {
      if (!t.length) return;
      let n = t.map((t) => t.getValue(e));
      if (!Ye(n)) return;
      if (n.length === 1) return n[0];
      let r = Math.floor(n.length / 2),
        i = n.sort((e, t) => e - t);
      return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
    },
    unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
    uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
    count: (e, t) => t.length,
  },
  mt = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t;
        return (
          ((t = e.getValue()) == null || t.toString == null
            ? void 0
            : t.toString()) ?? null
        );
      },
      aggregationFn: `auto`,
    }),
    getInitialState: (e) => ({ grouping: [], ...e }),
    getDefaultOptions: (e) => ({
      onGroupingChange: R(`grouping`, e),
      groupedColumnMode: `reorder`,
    }),
    createColumn: (e, t) => {
      ((e.toggleGrouping = () => {
        t.setGrouping((t) =>
          t != null && t.includes(e.id)
            ? t.filter((t) => t !== e.id)
            : [...(t ?? []), e.id],
        );
      }),
        (e.getCanGroup = () =>
          (e.columnDef.enableGrouping ?? !0) &&
          (t.options.enableGrouping ?? !0) &&
          (!!e.accessorFn || !!e.columnDef.getGroupingValue)),
        (e.getIsGrouped = () => t.getState().grouping?.includes(e.id)),
        (e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id)),
        (e.getToggleGroupingHandler = () => {
          let t = e.getCanGroup();
          return () => {
            t && e.toggleGrouping();
          };
        }),
        (e.getAutoAggregationFn = () => {
          let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
          if (typeof n == `number`) return pt.sum;
          if (Object.prototype.toString.call(n) === `[object Date]`)
            return pt.extent;
        }),
        (e.getAggregationFn = () => {
          if (!e) throw Error();
          return z(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === `auto`
              ? e.getAutoAggregationFn()
              : (t.options.aggregationFns?.[e.columnDef.aggregationFn] ??
                pt[e.columnDef.aggregationFn]);
        }));
    },
    createTable: (e) => {
      ((e.setGrouping = (t) =>
        e.options.onGroupingChange == null
          ? void 0
          : e.options.onGroupingChange(t)),
        (e.resetGrouping = (t) => {
          e.setGrouping(t ? [] : (e.initialState?.grouping ?? []));
        }),
        (e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
        (e.getGroupedRowModel = () => (
          !e._getGroupedRowModel &&
            e.options.getGroupedRowModel &&
            (e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
          e.options.manualGrouping || !e._getGroupedRowModel
            ? e.getPreGroupedRowModel()
            : e._getGroupedRowModel()
        )));
    },
    createRow: (e, t) => {
      ((e.getIsGrouped = () => !!e.groupingColumnId),
        (e.getGroupingValue = (n) => {
          if (e._groupingValuesCache.hasOwnProperty(n))
            return e._groupingValuesCache[n];
          let r = t.getColumn(n);
          return r != null && r.columnDef.getGroupingValue
            ? ((e._groupingValuesCache[n] = r.columnDef.getGroupingValue(
                e.original,
              )),
              e._groupingValuesCache[n])
            : e.getValue(n);
        }),
        (e._groupingValuesCache = {}));
    },
    createCell: (e, t, n, r) => {
      ((e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId),
        (e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
        (e.getIsAggregated = () => {
          var t;
          return (
            !e.getIsGrouped() &&
            !e.getIsPlaceholder() &&
            !!((t = n.subRows) != null && t.length)
          );
        }));
    },
  };
function ht(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  let r = e.filter((e) => !t.includes(e.id));
  return n === `remove`
    ? r
    : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var gt = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: R(`columnOrder`, e) }),
    createColumn: (e, t) => {
      ((e.getIndex = B(
        (e) => [Y(t, e)],
        (t) => t.findIndex((t) => t.id === e.id),
        V(t.options, `debugColumns`, `getIndex`),
      )),
        (e.getIsFirstColumn = (n) => Y(t, n)[0]?.id === e.id),
        (e.getIsLastColumn = (n) => {
          let r = Y(t, n);
          return r[r.length - 1]?.id === e.id;
        }));
    },
    createTable: (e) => {
      ((e.setColumnOrder = (t) =>
        e.options.onColumnOrderChange == null
          ? void 0
          : e.options.onColumnOrderChange(t)),
        (e.resetColumnOrder = (t) => {
          e.setColumnOrder(t ? [] : (e.initialState.columnOrder ?? []));
        }),
        (e._getOrderColumnsFn = B(
          () => [
            e.getState().columnOrder,
            e.getState().grouping,
            e.options.groupedColumnMode,
          ],
          (e, t, n) => (r) => {
            let i = [];
            if (!(e != null && e.length)) i = r;
            else {
              let t = [...e],
                n = [...r];
              for (; n.length && t.length;) {
                let e = t.shift(),
                  r = n.findIndex((t) => t.id === e);
                r > -1 && i.push(n.splice(r, 1)[0]);
              }
              i = [...i, ...n];
            }
            return ht(i, t, n);
          },
          V(e.options, `debugTable`, `_getOrderColumnsFn`),
        )));
    },
  },
  _t = () => ({ left: [], right: [] }),
  vt = {
    getInitialState: (e) => ({ columnPinning: _t(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: R(`columnPinning`, e),
    }),
    createColumn: (e, t) => {
      ((e.pin = (n) => {
        let r = e
          .getLeafColumns()
          .map((e) => e.id)
          .filter(Boolean);
        t.setColumnPinning((e) =>
          n === `right`
            ? {
                left: (e?.left ?? []).filter(
                  (e) => !(r != null && r.includes(e)),
                ),
                right: [
                  ...(e?.right ?? []).filter(
                    (e) => !(r != null && r.includes(e)),
                  ),
                  ...r,
                ],
              }
            : n === `left`
              ? {
                  left: [
                    ...(e?.left ?? []).filter(
                      (e) => !(r != null && r.includes(e)),
                    ),
                    ...r,
                  ],
                  right: (e?.right ?? []).filter(
                    (e) => !(r != null && r.includes(e)),
                  ),
                }
              : {
                  left: (e?.left ?? []).filter(
                    (e) => !(r != null && r.includes(e)),
                  ),
                  right: (e?.right ?? []).filter(
                    (e) => !(r != null && r.includes(e)),
                  ),
                },
        );
      }),
        (e.getCanPin = () =>
          e
            .getLeafColumns()
            .some(
              (e) =>
                (e.columnDef.enablePinning ?? !0) &&
                (t.options.enableColumnPinning ??
                  t.options.enablePinning ??
                  !0),
            )),
        (e.getIsPinned = () => {
          let n = e.getLeafColumns().map((e) => e.id),
            { left: r, right: i } = t.getState().columnPinning,
            a = n.some((e) => r?.includes(e)),
            o = n.some((e) => i?.includes(e));
          return a ? `left` : o ? `right` : !1;
        }),
        (e.getPinnedIndex = () => {
          var n;
          let r = e.getIsPinned();
          return r
            ? (((n = t.getState().columnPinning) == null || (n = n[r]) == null
                ? void 0
                : n.indexOf(e.id)) ?? -1)
            : 0;
        }));
    },
    createRow: (e, t) => {
      ((e.getCenterVisibleCells = B(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (e, t, n) => {
          let r = [...(t ?? []), ...(n ?? [])];
          return e.filter((e) => !r.includes(e.column.id));
        },
        V(t.options, `debugRows`, `getCenterVisibleCells`),
      )),
        (e.getLeftVisibleCells = B(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (e, t) =>
            (t ?? [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ({ ...e, position: `left` })),
          V(t.options, `debugRows`, `getLeftVisibleCells`),
        )),
        (e.getRightVisibleCells = B(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (e, t) =>
            (t ?? [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ({ ...e, position: `right` })),
          V(t.options, `debugRows`, `getRightVisibleCells`),
        )));
    },
    createTable: (e) => {
      ((e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) =>
          e.setColumnPinning(
            t ? _t() : (e.initialState?.columnPinning ?? _t()),
          )),
        (e.getIsSomeColumnsPinned = (t) => {
          let n = e.getState().columnPinning;
          return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
        }),
        (e.getLeftLeafColumns = B(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (e, t) =>
            (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
          V(e.options, `debugColumns`, `getLeftLeafColumns`),
        )),
        (e.getRightLeafColumns = B(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (e, t) =>
            (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
          V(e.options, `debugColumns`, `getRightLeafColumns`),
        )),
        (e.getCenterLeafColumns = B(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (e, t, n) => {
            let r = [...(t ?? []), ...(n ?? [])];
            return e.filter((e) => !r.includes(e.id));
          },
          V(e.options, `debugColumns`, `getCenterLeafColumns`),
        )));
    },
  },
  q = { size: 150, minSize: 20, maxSize: 2 ** 53 - 1 },
  yt = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  bt = {
    getDefaultColumnDef: () => q,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: yt(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: `onEnd`,
      columnResizeDirection: `ltr`,
      onColumnSizingChange: R(`columnSizing`, e),
      onColumnSizingInfoChange: R(`columnSizingInfo`, e),
    }),
    createColumn: (e, t) => {
      ((e.getSize = () => {
        let n = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            e.columnDef.minSize ?? q.minSize,
            n ?? e.columnDef.size ?? q.size,
          ),
          e.columnDef.maxSize ?? q.maxSize,
        );
      }),
        (e.getStart = B(
          (e) => [e, Y(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
          V(t.options, `debugColumns`, `getStart`),
        )),
        (e.getAfter = B(
          (e) => [e, Y(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
          V(t.options, `debugColumns`, `getAfter`),
        )),
        (e.resetSize = () => {
          t.setColumnSizing((t) => {
            let { [e.id]: n, ...r } = t;
            return r;
          });
        }),
        (e.getCanResize = () =>
          (e.columnDef.enableResizing ?? !0) &&
          (t.options.enableColumnResizing ?? !0)),
        (e.getIsResizing = () =>
          t.getState().columnSizingInfo.isResizingColumn === e.id));
    },
    createHeader: (e, t) => {
      ((e.getSize = () => {
        let t = 0,
          n = (e) => {
            e.subHeaders.length
              ? e.subHeaders.forEach(n)
              : (t += e.column.getSize() ?? 0);
          };
        return (n(e), t);
      }),
        (e.getStart = () => {
          if (e.index > 0) {
            let t = e.headerGroup.headers[e.index - 1];
            return t.getStart() + t.getSize();
          }
          return 0;
        }),
        (e.getResizeHandler = (n) => {
          let r = t.getColumn(e.column.id),
            i = r?.getCanResize();
          return (a) => {
            if (
              !r ||
              !i ||
              (a.persist == null || a.persist(),
              St(a) && a.touches && a.touches.length > 1)
            )
              return;
            let o = e.getSize(),
              s = e
                ? e
                    .getLeafHeaders()
                    .map((e) => [e.column.id, e.column.getSize()])
                : [[r.id, r.getSize()]],
              c = St(a) ? Math.round(a.touches[0].clientX) : a.clientX,
              l = {},
              u = (e, n) => {
                typeof n == `number` &&
                  (t.setColumnSizingInfo((e) => {
                    let r = t.options.columnResizeDirection === `rtl` ? -1 : 1,
                      i = (n - (e?.startOffset ?? 0)) * r,
                      a = Math.max(i / (e?.startSize ?? 0), -0.999999);
                    return (
                      e.columnSizingStart.forEach((e) => {
                        let [t, n] = e;
                        l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
                      }),
                      { ...e, deltaOffset: i, deltaPercentage: a }
                    );
                  }),
                  (t.options.columnResizeMode === `onChange` || e === `end`) &&
                    t.setColumnSizing((e) => ({ ...e, ...l })));
              },
              d = (e) => u(`move`, e),
              f = (e) => {
                (u(`end`, e),
                  t.setColumnSizingInfo((e) => ({
                    ...e,
                    isResizingColumn: !1,
                    startOffset: null,
                    startSize: null,
                    deltaOffset: null,
                    deltaPercentage: null,
                    columnSizingStart: [],
                  })));
              },
              p = n || typeof document < `u` ? document : null,
              m = {
                moveHandler: (e) => d(e.clientX),
                upHandler: (e) => {
                  (p?.removeEventListener(`mousemove`, m.moveHandler),
                    p?.removeEventListener(`mouseup`, m.upHandler),
                    f(e.clientX));
                },
              },
              h = {
                moveHandler: (e) => (
                  e.cancelable && (e.preventDefault(), e.stopPropagation()),
                  d(e.touches[0].clientX),
                  !1
                ),
                upHandler: (e) => {
                  (p?.removeEventListener(`touchmove`, h.moveHandler),
                    p?.removeEventListener(`touchend`, h.upHandler),
                    e.cancelable && (e.preventDefault(), e.stopPropagation()),
                    f(e.touches[0]?.clientX));
                },
              },
              g = xt() ? { passive: !1 } : !1;
            (St(a)
              ? (p?.addEventListener(`touchmove`, h.moveHandler, g),
                p?.addEventListener(`touchend`, h.upHandler, g))
              : (p?.addEventListener(`mousemove`, m.moveHandler, g),
                p?.addEventListener(`mouseup`, m.upHandler, g)),
              t.setColumnSizingInfo((e) => ({
                ...e,
                startOffset: c,
                startSize: o,
                deltaOffset: 0,
                deltaPercentage: 0,
                columnSizingStart: s,
                isResizingColumn: r.id,
              })));
          };
        }));
    },
    createTable: (e) => {
      ((e.setColumnSizing = (t) =>
        e.options.onColumnSizingChange == null
          ? void 0
          : e.options.onColumnSizingChange(t)),
        (e.setColumnSizingInfo = (t) =>
          e.options.onColumnSizingInfoChange == null
            ? void 0
            : e.options.onColumnSizingInfoChange(t)),
        (e.resetColumnSizing = (t) => {
          e.setColumnSizing(t ? {} : (e.initialState.columnSizing ?? {}));
        }),
        (e.resetHeaderSizeInfo = (t) => {
          e.setColumnSizingInfo(
            t ? yt() : (e.initialState.columnSizingInfo ?? yt()),
          );
        }),
        (e.getTotalSize = () =>
          e
            .getHeaderGroups()[0]
            ?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0),
        (e.getLeftTotalSize = () =>
          e
            .getLeftHeaderGroups()[0]
            ?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0),
        (e.getCenterTotalSize = () =>
          e
            .getCenterHeaderGroups()[0]
            ?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0),
        (e.getRightTotalSize = () =>
          e
            .getRightHeaderGroups()[0]
            ?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0));
    },
  },
  J = null;
function xt() {
  if (typeof J == `boolean`) return J;
  let e = !1;
  try {
    let t = {
        get passive() {
          return ((e = !0), !1);
        },
      },
      n = () => {};
    (window.addEventListener(`test`, n, t),
      window.removeEventListener(`test`, n));
  } catch {
    e = !1;
  }
  return ((J = e), J);
}
function St(e) {
  return e.type === `touchstart`;
}
var Ct = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: R(`columnVisibility`, e),
  }),
  createColumn: (e, t) => {
    ((e.toggleVisibility = (n) => {
      e.getCanHide() &&
        t.setColumnVisibility((t) => ({
          ...t,
          [e.id]: n ?? !e.getIsVisible(),
        }));
    }),
      (e.getIsVisible = () => {
        let n = e.columns;
        return (
          (n.length
            ? n.some((e) => e.getIsVisible())
            : t.getState().columnVisibility?.[e.id]) ?? !0
        );
      }),
      (e.getCanHide = () =>
        (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0)),
      (e.getToggleVisibilityHandler = () => (t) => {
        e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
      }));
  },
  createRow: (e, t) => {
    ((e._getAllVisibleCells = B(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (e) => e.filter((e) => e.column.getIsVisible()),
      V(t.options, `debugRows`, `_getAllVisibleCells`),
    )),
      (e.getVisibleCells = B(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (e, t, n) => [...e, ...t, ...n],
        V(t.options, `debugRows`, `getVisibleCells`),
      )));
  },
  createTable: (e) => {
    let t = (t, n) =>
      B(
        () => [
          n(),
          n()
            .filter((e) => e.getIsVisible())
            .map((e) => e.id)
            .join(`_`),
        ],
        (e) =>
          e.filter((e) => (e.getIsVisible == null ? void 0 : e.getIsVisible())),
        V(e.options, `debugColumns`, t),
      );
    ((e.getVisibleFlatColumns = t(`getVisibleFlatColumns`, () =>
      e.getAllFlatColumns(),
    )),
      (e.getVisibleLeafColumns = t(`getVisibleLeafColumns`, () =>
        e.getAllLeafColumns(),
      )),
      (e.getLeftVisibleLeafColumns = t(`getLeftVisibleLeafColumns`, () =>
        e.getLeftLeafColumns(),
      )),
      (e.getRightVisibleLeafColumns = t(`getRightVisibleLeafColumns`, () =>
        e.getRightLeafColumns(),
      )),
      (e.getCenterVisibleLeafColumns = t(`getCenterVisibleLeafColumns`, () =>
        e.getCenterLeafColumns(),
      )),
      (e.setColumnVisibility = (t) =>
        e.options.onColumnVisibilityChange == null
          ? void 0
          : e.options.onColumnVisibilityChange(t)),
      (e.resetColumnVisibility = (t) => {
        e.setColumnVisibility(t ? {} : (e.initialState.columnVisibility ?? {}));
      }),
      (e.toggleAllColumnsVisible = (t) => {
        ((t ??= !e.getIsAllColumnsVisible()),
          e.setColumnVisibility(
            e
              .getAllLeafColumns()
              .reduce(
                (e, n) => ({
                  ...e,
                  [n.id]: t || !(n.getCanHide != null && n.getCanHide()),
                }),
                {},
              ),
          ));
      }),
      (e.getIsAllColumnsVisible = () =>
        !e
          .getAllLeafColumns()
          .some((e) => !(e.getIsVisible != null && e.getIsVisible()))),
      (e.getIsSomeColumnsVisible = () =>
        e
          .getAllLeafColumns()
          .some((e) => (e.getIsVisible == null ? void 0 : e.getIsVisible()))),
      (e.getToggleAllColumnsVisibilityHandler = () => (t) => {
        e.toggleAllColumnsVisible(t.target?.checked);
      }));
  },
};
function Y(e, t) {
  return t
    ? t === `center`
      ? e.getCenterVisibleLeafColumns()
      : t === `left`
        ? e.getLeftVisibleLeafColumns()
        : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
var wt = {
    createTable: (e) => {
      ((e._getGlobalFacetedRowModel =
        e.options.getFacetedRowModel &&
        e.options.getFacetedRowModel(e, `__global__`)),
        (e.getGlobalFacetedRowModel = () =>
          e.options.manualFiltering || !e._getGlobalFacetedRowModel
            ? e.getPreFilteredRowModel()
            : e._getGlobalFacetedRowModel()),
        (e._getGlobalFacetedUniqueValues =
          e.options.getFacetedUniqueValues &&
          e.options.getFacetedUniqueValues(e, `__global__`)),
        (e.getGlobalFacetedUniqueValues = () =>
          e._getGlobalFacetedUniqueValues
            ? e._getGlobalFacetedUniqueValues()
            : new Map()),
        (e._getGlobalFacetedMinMaxValues =
          e.options.getFacetedMinMaxValues &&
          e.options.getFacetedMinMaxValues(e, `__global__`)),
        (e.getGlobalFacetedMinMaxValues = () => {
          if (e._getGlobalFacetedMinMaxValues)
            return e._getGlobalFacetedMinMaxValues();
        }));
    },
  },
  Tt = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: R(`globalFilter`, e),
      globalFilterFn: `auto`,
      getColumnCanGlobalFilter: (t) => {
        var n;
        let r =
          (n = e.getCoreRowModel().flatRows[0]) == null ||
          (n = n._getAllCellsByColumnId()[t.id]) == null
            ? void 0
            : n.getValue();
        return typeof r == `string` || typeof r == `number`;
      },
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () =>
        (e.columnDef.enableGlobalFilter ?? !0) &&
        (t.options.enableGlobalFilter ?? !0) &&
        (t.options.enableFilters ?? !0) &&
        ((t.options.getColumnCanGlobalFilter == null
          ? void 0
          : t.options.getColumnCanGlobalFilter(e)) ??
          !0) &&
        !!e.accessorFn;
    },
    createTable: (e) => {
      ((e.getGlobalAutoFilterFn = () => G.includesString),
        (e.getGlobalFilterFn = () => {
          let { globalFilterFn: t } = e.options;
          return z(t)
            ? t
            : t === `auto`
              ? e.getGlobalAutoFilterFn()
              : (e.options.filterFns?.[t] ?? G[t]);
        }),
        (e.setGlobalFilter = (t) => {
          e.options.onGlobalFilterChange == null ||
            e.options.onGlobalFilterChange(t);
        }),
        (e.resetGlobalFilter = (t) => {
          e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
        }));
    },
  },
  Et = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: R(`expanded`, e),
      paginateExpandedRows: !0,
    }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      ((e._autoResetExpanded = () => {
        if (!t)
          e._queue(() => {
            t = !0;
          });
        else if (
          e.options.autoResetAll ??
          e.options.autoResetExpanded ??
          !e.options.manualExpanding
        ) {
          if (n) return;
          ((n = !0),
            e._queue(() => {
              (e.resetExpanded(), (n = !1));
            }));
        }
      }),
        (e.setExpanded = (t) =>
          e.options.onExpandedChange == null
            ? void 0
            : e.options.onExpandedChange(t)),
        (e.toggleAllRowsExpanded = (t) => {
          (t ?? !e.getIsAllRowsExpanded())
            ? e.setExpanded(!0)
            : e.setExpanded({});
        }),
        (e.resetExpanded = (t) => {
          e.setExpanded(t ? {} : (e.initialState?.expanded ?? {}));
        }),
        (e.getCanSomeRowsExpand = () =>
          e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand())),
        (e.getToggleAllRowsExpandedHandler = () => (t) => {
          (t.persist == null || t.persist(), e.toggleAllRowsExpanded());
        }),
        (e.getIsSomeRowsExpanded = () => {
          let t = e.getState().expanded;
          return t === !0 || Object.values(t).some(Boolean);
        }),
        (e.getIsAllRowsExpanded = () => {
          let t = e.getState().expanded;
          return typeof t == `boolean`
            ? t === !0
            : !(
                !Object.keys(t).length ||
                e.getRowModel().flatRows.some((e) => !e.getIsExpanded())
              );
        }),
        (e.getExpandedDepth = () => {
          let t = 0;
          return (
            (e.getState().expanded === !0
              ? Object.keys(e.getRowModel().rowsById)
              : Object.keys(e.getState().expanded)
            ).forEach((e) => {
              let n = e.split(`.`);
              t = Math.max(t, n.length);
            }),
            t
          );
        }),
        (e.getPreExpandedRowModel = () => e.getSortedRowModel()),
        (e.getExpandedRowModel = () => (
          !e._getExpandedRowModel &&
            e.options.getExpandedRowModel &&
            (e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
          e.options.manualExpanding || !e._getExpandedRowModel
            ? e.getPreExpandedRowModel()
            : e._getExpandedRowModel()
        )));
    },
    createRow: (e, t) => {
      ((e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          let i = r === !0 || !!(r != null && r[e.id]),
            a = {};
          if (
            (r === !0
              ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
                  a[e] = !0;
                })
              : (a = r),
            (n ??= !i),
            !i && n)
          )
            return { ...a, [e.id]: !0 };
          if (i && !n) {
            let { [e.id]: t, ...n } = a;
            return n;
          }
          return r;
        });
      }),
        (e.getIsExpanded = () => {
          let n = t.getState().expanded;
          return !!(
            (t.options.getIsRowExpanded == null
              ? void 0
              : t.options.getIsRowExpanded(e)) ??
            (n === !0 || n?.[e.id])
          );
        }),
        (e.getCanExpand = () => {
          var n;
          return (
            (t.options.getRowCanExpand == null
              ? void 0
              : t.options.getRowCanExpand(e)) ??
            ((t.options.enableExpanding ?? !0) &&
              !!((n = e.subRows) != null && n.length))
          );
        }),
        (e.getIsAllParentsExpanded = () => {
          let n = !0,
            r = e;
          for (; n && r.parentId;)
            ((r = t.getRow(r.parentId, !0)), (n = r.getIsExpanded()));
          return n;
        }),
        (e.getToggleExpandedHandler = () => {
          let t = e.getCanExpand();
          return () => {
            t && e.toggleExpanded();
          };
        }));
    },
  },
  Dt = 0,
  Ot = 10,
  kt = () => ({ pageIndex: Dt, pageSize: Ot }),
  At = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...kt(), ...e?.pagination },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: R(`pagination`, e) }),
    createTable: (e) => {
      let t = !1,
        n = !1;
      ((e._autoResetPageIndex = () => {
        if (!t)
          e._queue(() => {
            t = !0;
          });
        else if (
          e.options.autoResetAll ??
          e.options.autoResetPageIndex ??
          !e.options.manualPagination
        ) {
          if (n) return;
          ((n = !0),
            e._queue(() => {
              (e.resetPageIndex(), (n = !1));
            }));
        }
      }),
        (e.setPagination = (t) =>
          e.options.onPaginationChange == null
            ? void 0
            : e.options.onPaginationChange((e) => L(t, e))),
        (e.resetPagination = (t) => {
          e.setPagination(t ? kt() : (e.initialState.pagination ?? kt()));
        }),
        (e.setPageIndex = (t) => {
          e.setPagination((n) => {
            let r = L(t, n.pageIndex),
              i =
                e.options.pageCount === void 0 || e.options.pageCount === -1
                  ? 2 ** 53 - 1
                  : e.options.pageCount - 1;
            return ((r = Math.max(0, Math.min(r, i))), { ...n, pageIndex: r });
          });
        }),
        (e.resetPageIndex = (t) => {
          var n;
          e.setPageIndex(
            t
              ? Dt
              : (((n = e.initialState) == null || (n = n.pagination) == null
                  ? void 0
                  : n.pageIndex) ?? Dt),
          );
        }),
        (e.resetPageSize = (t) => {
          var n;
          e.setPageSize(
            t
              ? Ot
              : (((n = e.initialState) == null || (n = n.pagination) == null
                  ? void 0
                  : n.pageSize) ?? Ot),
          );
        }),
        (e.setPageSize = (t) => {
          e.setPagination((e) => {
            let n = Math.max(1, L(t, e.pageSize)),
              r = e.pageSize * e.pageIndex,
              i = Math.floor(r / n);
            return { ...e, pageIndex: i, pageSize: n };
          });
        }),
        (e.setPageCount = (t) =>
          e.setPagination((n) => {
            let r = L(t, e.options.pageCount ?? -1);
            return (
              typeof r == `number` && (r = Math.max(-1, r)),
              { ...n, pageCount: r }
            );
          })),
        (e.getPageOptions = B(
          () => [e.getPageCount()],
          (e) => {
            let t = [];
            return (
              e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t
            );
          },
          V(e.options, `debugTable`, `getPageOptions`),
        )),
        (e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
        (e.getCanNextPage = () => {
          let { pageIndex: t } = e.getState().pagination,
            n = e.getPageCount();
          return n === -1 || (n !== 0 && t < n - 1);
        }),
        (e.previousPage = () => e.setPageIndex((e) => e - 1)),
        (e.nextPage = () => e.setPageIndex((e) => e + 1)),
        (e.firstPage = () => e.setPageIndex(0)),
        (e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
        (e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
        (e.getPaginationRowModel = () => (
          !e._getPaginationRowModel &&
            e.options.getPaginationRowModel &&
            (e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
          e.options.manualPagination || !e._getPaginationRowModel
            ? e.getPrePaginationRowModel()
            : e._getPaginationRowModel()
        )),
        (e.getPageCount = () =>
          e.options.pageCount ??
          Math.ceil(e.getRowCount() / e.getState().pagination.pageSize)),
        (e.getRowCount = () =>
          e.options.rowCount ?? e.getPrePaginationRowModel().rows.length));
    },
  },
  jt = () => ({ top: [], bottom: [] }),
  Mt = {
    getInitialState: (e) => ({ rowPinning: jt(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: R(`rowPinning`, e) }),
    createRow: (e, t) => {
      ((e.pin = (n, r, i) => {
        let a = r
            ? e.getLeafRows().map((e) => {
                let { id: t } = e;
                return t;
              })
            : [],
          o = i
            ? e.getParentRows().map((e) => {
                let { id: t } = e;
                return t;
              })
            : [],
          s = new Set([...o, e.id, ...a]);
        t.setRowPinning((e) =>
          n === `bottom`
            ? {
                top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
                bottom: [
                  ...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))),
                  ...Array.from(s),
                ],
              }
            : n === `top`
              ? {
                  top: [
                    ...(e?.top ?? []).filter((e) => !(s != null && s.has(e))),
                    ...Array.from(s),
                  ],
                  bottom: (e?.bottom ?? []).filter(
                    (e) => !(s != null && s.has(e)),
                  ),
                }
              : {
                  top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
                  bottom: (e?.bottom ?? []).filter(
                    (e) => !(s != null && s.has(e)),
                  ),
                },
        );
      }),
        (e.getCanPin = () => {
          let { enableRowPinning: n, enablePinning: r } = t.options;
          return typeof n == `function` ? n(e) : (n ?? r ?? !0);
        }),
        (e.getIsPinned = () => {
          let n = [e.id],
            { top: r, bottom: i } = t.getState().rowPinning,
            a = n.some((e) => r?.includes(e)),
            o = n.some((e) => i?.includes(e));
          return a ? `top` : o ? `bottom` : !1;
        }),
        (e.getPinnedIndex = () => {
          let n = e.getIsPinned();
          return n
            ? ((n === `top` ? t.getTopRows() : t.getBottomRows())
                ?.map((e) => {
                  let { id: t } = e;
                  return t;
                })
                ?.indexOf(e.id) ?? -1)
            : -1;
        }));
    },
    createTable: (e) => {
      ((e.setRowPinning = (t) =>
        e.options.onRowPinningChange == null
          ? void 0
          : e.options.onRowPinningChange(t)),
        (e.resetRowPinning = (t) =>
          e.setRowPinning(t ? jt() : (e.initialState?.rowPinning ?? jt()))),
        (e.getIsSomeRowsPinned = (t) => {
          let n = e.getState().rowPinning;
          return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
        }),
        (e._getPinnedRows = (t, n, r) =>
          ((e.options.keepPinnedRows ?? !0)
            ? (n ?? []).map((t) => {
                let n = e.getRow(t, !0);
                return n.getIsAllParentsExpanded() ? n : null;
              })
            : (n ?? []).map((e) => t.find((t) => t.id === e))
          )
            .filter(Boolean)
            .map((e) => ({ ...e, position: r }))),
        (e.getTopRows = B(
          () => [e.getRowModel().rows, e.getState().rowPinning.top],
          (t, n) => e._getPinnedRows(t, n, `top`),
          V(e.options, `debugRows`, `getTopRows`),
        )),
        (e.getBottomRows = B(
          () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
          (t, n) => e._getPinnedRows(t, n, `bottom`),
          V(e.options, `debugRows`, `getBottomRows`),
        )),
        (e.getCenterRows = B(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (e, t, n) => {
            let r = new Set([...(t ?? []), ...(n ?? [])]);
            return e.filter((e) => !r.has(e.id));
          },
          V(e.options, `debugRows`, `getCenterRows`),
        )));
    },
  },
  Nt = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: R(`rowSelection`, e),
      enableRowSelection: !0,
      enableMultiRowSelection: !0,
      enableSubRowSelection: !0,
    }),
    createTable: (e) => {
      ((e.setRowSelection = (t) =>
        e.options.onRowSelectionChange == null
          ? void 0
          : e.options.onRowSelectionChange(t)),
        (e.resetRowSelection = (t) =>
          e.setRowSelection(t ? {} : (e.initialState.rowSelection ?? {}))),
        (e.toggleAllRowsSelected = (t) => {
          e.setRowSelection((n) => {
            t = t === void 0 ? !e.getIsAllRowsSelected() : t;
            let r = { ...n },
              i = e.getPreGroupedRowModel().flatRows;
            return (
              t
                ? i.forEach((e) => {
                    e.getCanSelect() && (r[e.id] = !0);
                  })
                : i.forEach((e) => {
                    delete r[e.id];
                  }),
              r
            );
          });
        }),
        (e.toggleAllPageRowsSelected = (t) =>
          e.setRowSelection((n) => {
            let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t,
              i = { ...n };
            return (
              e.getRowModel().rows.forEach((t) => {
                Pt(i, t.id, r, !0, e);
              }),
              i
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Ft(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          V(e.options, `debugTable`, `getSelectedRowModel`),
        )),
        (e.getFilteredSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Ft(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          V(e.options, `debugTable`, `getFilteredSelectedRowModel`),
        )),
        (e.getGroupedSelectedRowModel = B(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Ft(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          V(e.options, `debugTable`, `getGroupedSelectedRowModel`),
        )),
        (e.getIsAllRowsSelected = () => {
          let t = e.getFilteredRowModel().flatRows,
            { rowSelection: n } = e.getState(),
            r = !!(t.length && Object.keys(n).length);
          return (
            r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r
          );
        }),
        (e.getIsAllPageRowsSelected = () => {
          let t = e
              .getPaginationRowModel()
              .flatRows.filter((e) => e.getCanSelect()),
            { rowSelection: n } = e.getState(),
            r = !!t.length;
          return (r && t.some((e) => !n[e.id]) && (r = !1), r);
        }),
        (e.getIsSomeRowsSelected = () => {
          let t = Object.keys(e.getState().rowSelection ?? {}).length;
          return t > 0 && t < e.getFilteredRowModel().flatRows.length;
        }),
        (e.getIsSomePageRowsSelected = () => {
          let t = e.getPaginationRowModel().flatRows;
          return (
            !e.getIsAllPageRowsSelected() &&
            t
              .filter((e) => e.getCanSelect())
              .some((e) => e.getIsSelected() || e.getIsSomeSelected())
          );
        }),
        (e.getToggleAllRowsSelectedHandler = () => (t) => {
          e.toggleAllRowsSelected(t.target.checked);
        }),
        (e.getToggleAllPageRowsSelectedHandler = () => (t) => {
          e.toggleAllPageRowsSelected(t.target.checked);
        }));
    },
    createRow: (e, t) => {
      ((e.toggleSelected = (n, r) => {
        let i = e.getIsSelected();
        t.setRowSelection((a) => {
          if (((n = n === void 0 ? !i : n), e.getCanSelect() && i === n))
            return a;
          let o = { ...a };
          return (Pt(o, e.id, n, r?.selectChildren ?? !0, t), o);
        });
      }),
        (e.getIsSelected = () => {
          let { rowSelection: n } = t.getState();
          return It(e, n);
        }),
        (e.getIsSomeSelected = () => {
          let { rowSelection: n } = t.getState();
          return Lt(e, n) === `some`;
        }),
        (e.getIsAllSubRowsSelected = () => {
          let { rowSelection: n } = t.getState();
          return Lt(e, n) === `all`;
        }),
        (e.getCanSelect = () =>
          typeof t.options.enableRowSelection == `function`
            ? t.options.enableRowSelection(e)
            : (t.options.enableRowSelection ?? !0)),
        (e.getCanSelectSubRows = () =>
          typeof t.options.enableSubRowSelection == `function`
            ? t.options.enableSubRowSelection(e)
            : (t.options.enableSubRowSelection ?? !0)),
        (e.getCanMultiSelect = () =>
          typeof t.options.enableMultiRowSelection == `function`
            ? t.options.enableMultiRowSelection(e)
            : (t.options.enableMultiRowSelection ?? !0)),
        (e.getToggleSelectedHandler = () => {
          let t = e.getCanSelect();
          return (n) => {
            t && e.toggleSelected(n.target?.checked);
          };
        }));
    },
  },
  Pt = (e, t, n, r, i) => {
    var a;
    let o = i.getRow(t, !0);
    (n
      ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]),
        o.getCanSelect() && (e[t] = !0))
      : delete e[t],
      r &&
        (a = o.subRows) != null &&
        a.length &&
        o.getCanSelectSubRows() &&
        o.subRows.forEach((t) => Pt(e, t.id, n, r, i)));
  };
function Ft(e, t) {
  let n = e.getState().rowSelection,
    r = [],
    i = {},
    a = function (e, t) {
      return e
        .map((e) => {
          var t;
          let o = It(e, n);
          if (
            (o && (r.push(e), (i[e.id] = e)),
            (t = e.subRows) != null &&
              t.length &&
              (e = { ...e, subRows: a(e.subRows) }),
            o)
          )
            return e;
        })
        .filter(Boolean);
    };
  return { rows: a(t.rows), flatRows: r, rowsById: i };
}
function It(e, t) {
  return t[e.id] ?? !1;
}
function Lt(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let i = !0,
    a = !1;
  return (
    e.subRows.forEach((e) => {
      if (
        (!a || i) &&
        (e.getCanSelect() && (It(e, t) ? (a = !0) : (i = !1)),
        e.subRows && e.subRows.length)
      ) {
        let n = Lt(e, t);
        n === `all` ? (a = !0) : (n === `some` && (a = !0), (i = !1));
      }
    }),
    i ? `all` : a ? `some` : !1
  );
}
var Rt = /([0-9]+)/gm,
  zt = (e, t, n) =>
    Kt(X(e.getValue(n)).toLowerCase(), X(t.getValue(n)).toLowerCase()),
  Bt = (e, t, n) => Kt(X(e.getValue(n)), X(t.getValue(n))),
  Vt = (e, t, n) =>
    Gt(X(e.getValue(n)).toLowerCase(), X(t.getValue(n)).toLowerCase()),
  Ht = (e, t, n) => Gt(X(e.getValue(n)), X(t.getValue(n))),
  Ut = (e, t, n) => {
    let r = e.getValue(n),
      i = t.getValue(n);
    return r > i ? 1 : r < i ? -1 : 0;
  },
  Wt = (e, t, n) => Gt(e.getValue(n), t.getValue(n));
function Gt(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function X(e) {
  return typeof e == `number`
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ``
      : String(e)
    : typeof e == `string`
      ? e
      : ``;
}
function Kt(e, t) {
  let n = e.split(Rt).filter(Boolean),
    r = t.split(Rt).filter(Boolean);
  for (; n.length && r.length;) {
    let e = n.shift(),
      t = r.shift(),
      i = parseInt(e, 10),
      a = parseInt(t, 10),
      o = [i, a].sort();
    if (isNaN(o[0])) {
      if (e > t) return 1;
      if (t > e) return -1;
    } else {
      if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
      if (i > a) return 1;
      if (a > i) return -1;
    }
  }
  return n.length - r.length;
}
var Z = {
    alphanumeric: zt,
    alphanumericCaseSensitive: Bt,
    text: Vt,
    textCaseSensitive: Ht,
    datetime: Ut,
    basic: Wt,
  },
  qt = [
    et,
    Ct,
    gt,
    vt,
    tt,
    dt,
    wt,
    Tt,
    {
      getInitialState: (e) => ({ sorting: [], ...e }),
      getDefaultColumnDef: () => ({ sortingFn: `auto`, sortUndefined: 1 }),
      getDefaultOptions: (e) => ({
        onSortingChange: R(`sorting`, e),
        isMultiSortEvent: (e) => e.shiftKey,
      }),
      createColumn: (e, t) => {
        ((e.getAutoSortingFn = () => {
          let n = t.getFilteredRowModel().flatRows.slice(10),
            r = !1;
          for (let t of n) {
            let n = t?.getValue(e.id);
            if (Object.prototype.toString.call(n) === `[object Date]`)
              return Z.datetime;
            if (typeof n == `string` && ((r = !0), n.split(Rt).length > 1))
              return Z.alphanumeric;
          }
          return r ? Z.text : Z.basic;
        }),
          (e.getAutoSortDir = () =>
            typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) ==
            `string`
              ? `asc`
              : `desc`),
          (e.getSortingFn = () => {
            if (!e) throw Error();
            return z(e.columnDef.sortingFn)
              ? e.columnDef.sortingFn
              : e.columnDef.sortingFn === `auto`
                ? e.getAutoSortingFn()
                : (t.options.sortingFns?.[e.columnDef.sortingFn] ??
                  Z[e.columnDef.sortingFn]);
          }),
          (e.toggleSorting = (n, r) => {
            let i = e.getNextSortingOrder(),
              a = n != null;
            t.setSorting((o) => {
              let s = o?.find((t) => t.id === e.id),
                c = o?.findIndex((t) => t.id === e.id),
                l = [],
                u,
                d = a ? n : i === `desc`;
              return (
                (u =
                  o != null && o.length && e.getCanMultiSort() && r
                    ? s
                      ? `toggle`
                      : `add`
                    : o != null && o.length && c !== o.length - 1
                      ? `replace`
                      : s
                        ? `toggle`
                        : `replace`),
                u === `toggle` && (a || i || (u = `remove`)),
                u === `add`
                  ? ((l = [...o, { id: e.id, desc: d }]),
                    l.splice(
                      0,
                      l.length -
                        (t.options.maxMultiSortColCount ?? 2 ** 53 - 1),
                    ))
                  : (l =
                      u === `toggle`
                        ? o.map((t) => (t.id === e.id ? { ...t, desc: d } : t))
                        : u === `remove`
                          ? o.filter((t) => t.id !== e.id)
                          : [{ id: e.id, desc: d }]),
                l
              );
            });
          }),
          (e.getFirstSortDir = () =>
            (e.columnDef.sortDescFirst ??
            t.options.sortDescFirst ??
            e.getAutoSortDir() === `desc`)
              ? `desc`
              : `asc`),
          (e.getNextSortingOrder = (n) => {
            let r = e.getFirstSortDir(),
              i = e.getIsSorted();
            return i
              ? i !== r &&
                (t.options.enableSortingRemoval ?? !0) &&
                (!n || (t.options.enableMultiRemove ?? !0))
                ? !1
                : i === `desc`
                  ? `asc`
                  : `desc`
              : r;
          }),
          (e.getCanSort = () =>
            (e.columnDef.enableSorting ?? !0) &&
            (t.options.enableSorting ?? !0) &&
            !!e.accessorFn),
          (e.getCanMultiSort = () =>
            e.columnDef.enableMultiSort ??
            t.options.enableMultiSort ??
            !!e.accessorFn),
          (e.getIsSorted = () => {
            let n = t.getState().sorting?.find((t) => t.id === e.id);
            return n ? (n.desc ? `desc` : `asc`) : !1;
          }),
          (e.getSortIndex = () =>
            t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1),
          (e.clearSorting = () => {
            t.setSorting((t) =>
              t != null && t.length ? t.filter((t) => t.id !== e.id) : [],
            );
          }),
          (e.getToggleSortingHandler = () => {
            let n = e.getCanSort();
            return (r) => {
              n &&
                (r.persist == null || r.persist(),
                e.toggleSorting == null ||
                  e.toggleSorting(
                    void 0,
                    e.getCanMultiSort()
                      ? t.options.isMultiSortEvent == null
                        ? void 0
                        : t.options.isMultiSortEvent(r)
                      : !1,
                  ));
            };
          }));
      },
      createTable: (e) => {
        ((e.setSorting = (t) =>
          e.options.onSortingChange == null
            ? void 0
            : e.options.onSortingChange(t)),
          (e.resetSorting = (t) => {
            e.setSorting(t ? [] : (e.initialState?.sorting ?? []));
          }),
          (e.getPreSortedRowModel = () => e.getGroupedRowModel()),
          (e.getSortedRowModel = () => (
            !e._getSortedRowModel &&
              e.options.getSortedRowModel &&
              (e._getSortedRowModel = e.options.getSortedRowModel(e)),
            e.options.manualSorting || !e._getSortedRowModel
              ? e.getPreSortedRowModel()
              : e._getSortedRowModel()
          )));
      },
    },
    mt,
    Et,
    At,
    Mt,
    Nt,
    bt,
  ];
function Jt(e) {
  let t = [...qt, ...(e._features ?? [])],
    n = { _features: t },
    r = n._features.reduce(
      (e, t) =>
        Object.assign(
          e,
          t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n),
        ),
      {},
    ),
    i = (e) =>
      n.options.mergeOptions ? n.options.mergeOptions(r, e) : { ...r, ...e },
    a = { ...(e.initialState ?? {}) };
  n._features.forEach((e) => {
    a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
  });
  let o = [],
    s = !1,
    c = {
      _features: t,
      options: { ...r, ...e },
      initialState: a,
      _queue: (e) => {
        (o.push(e),
          s ||
            ((s = !0),
            Promise.resolve()
              .then(() => {
                for (; o.length;) o.shift()();
                s = !1;
              })
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                }),
              )));
      },
      reset: () => {
        n.setState(n.initialState);
      },
      setOptions: (e) => {
        let t = L(e, n.options);
        n.options = i(t);
      },
      getState: () => n.options.state,
      setState: (e) => {
        n.options.onStateChange == null || n.options.onStateChange(e);
      },
      _getRowId: (e, t, r) =>
        (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ??
        `${r ? [r.id, t].join(`.`) : t}`,
      getCoreRowModel: () => (
        (n._getCoreRowModel ||= n.options.getCoreRowModel(n)),
        n._getCoreRowModel()
      ),
      getRowModel: () => n.getPaginationRowModel(),
      getRow: (e, t) => {
        let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[
          e
        ];
        if (!r && ((r = n.getCoreRowModel().rowsById[e]), !r)) throw Error();
        return r;
      },
      _getDefaultColumnDef: B(
        () => [n.options.defaultColumn],
        (e) => (
          (e ??= {}),
          {
            header: (e) => {
              let t = e.header.column.columnDef;
              return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
            },
            cell: (e) => {
              var t;
              return (
                ((t = e.renderValue()) == null || t.toString == null
                  ? void 0
                  : t.toString()) ?? null
              );
            },
            ...n._features.reduce(
              (e, t) =>
                Object.assign(
                  e,
                  t.getDefaultColumnDef == null
                    ? void 0
                    : t.getDefaultColumnDef(),
                ),
              {},
            ),
            ...e,
          }
        ),
        V(e, `debugColumns`, `_getDefaultColumnDef`),
      ),
      _getColumnDefs: () => n.options.columns,
      getAllColumns: B(
        () => [n._getColumnDefs()],
        (e) => {
          let t = function (e, r, i) {
            return (
              i === void 0 && (i = 0),
              e.map((e) => {
                let a = Qe(n, e, i, r),
                  o = e;
                return (
                  (a.columns = o.columns ? t(o.columns, a, i + 1) : []), a
                );
              })
            );
          };
          return t(e);
        },
        V(e, `debugColumns`, `getAllColumns`),
      ),
      getAllFlatColumns: B(
        () => [n.getAllColumns()],
        (e) => e.flatMap((e) => e.getFlatColumns()),
        V(e, `debugColumns`, `getAllFlatColumns`),
      ),
      _getAllFlatColumnsById: B(
        () => [n.getAllFlatColumns()],
        (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
        V(e, `debugColumns`, `getAllFlatColumnsById`),
      ),
      getAllLeafColumns: B(
        () => [n.getAllColumns(), n._getOrderColumnsFn()],
        (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
        V(e, `debugColumns`, `getAllLeafColumns`),
      ),
      getColumn: (e) => n._getAllFlatColumnsById()[e],
    };
  Object.assign(n, c);
  for (let e = 0; e < n._features.length; e++) {
    let t = n._features[e];
    t == null || t.createTable == null || t.createTable(n);
  }
  return n;
}
function Yt() {
  return (e) =>
    B(
      () => [e.options.data],
      (t) => {
        let n = { rows: [], flatRows: [], rowsById: {} },
          r = function (t, i, a) {
            i === void 0 && (i = 0);
            let o = [];
            for (let c = 0; c < t.length; c++) {
              let l = W(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
              if (
                (n.flatRows.push(l),
                (n.rowsById[l.id] = l),
                o.push(l),
                e.options.getSubRows)
              ) {
                var s;
                ((l.originalSubRows = e.options.getSubRows(t[c], c)),
                  (s = l.originalSubRows) != null &&
                    s.length &&
                    (l.subRows = r(l.originalSubRows, i + 1, l)));
              }
            }
            return o;
          };
        return ((n.rows = r(t)), n);
      },
      V(e.options, `debugTable`, `getRowModel`, () => e._autoResetPageIndex()),
    );
}
function Xt(e, t, n) {
  return n.options.filterFromLeafRows ? Zt(e, t, n) : Qt(e, t, n);
}
function Zt(e, t, n) {
  let r = [],
    i = {},
    a = n.options.maxLeafRowFilterDepth ?? 100,
    o = function (e, s) {
      s === void 0 && (s = 0);
      let c = [];
      for (let u = 0; u < e.length; u++) {
        var l;
        let d = e[u],
          f = W(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
        if (
          ((f.columnFilters = d.columnFilters),
          (l = d.subRows) != null && l.length && s < a)
        ) {
          if (
            ((f.subRows = o(d.subRows, s + 1)),
            (d = f),
            (t(d) && !f.subRows.length) || t(d) || f.subRows.length)
          ) {
            (c.push(d), (i[d.id] = d), r.push(d));
            continue;
          }
        } else ((d = f), t(d) && (c.push(d), (i[d.id] = d), r.push(d)));
      }
      return c;
    };
  return { rows: o(e), flatRows: r, rowsById: i };
}
function Qt(e, t, n) {
  let r = [],
    i = {},
    a = n.options.maxLeafRowFilterDepth ?? 100,
    o = function (e, s) {
      s === void 0 && (s = 0);
      let c = [];
      for (let u = 0; u < e.length; u++) {
        let d = e[u];
        if (t(d)) {
          var l;
          if ((l = d.subRows) != null && l.length && s < a) {
            let e = W(
              n,
              d.id,
              d.original,
              d.index,
              d.depth,
              void 0,
              d.parentId,
            );
            ((e.subRows = o(d.subRows, s + 1)), (d = e));
          }
          (c.push(d), r.push(d), (i[d.id] = d));
        }
      }
      return c;
    };
  return { rows: o(e), flatRows: r, rowsById: i };
}
function $t() {
  return (e) =>
    B(
      () => [
        e.getPreFilteredRowModel(),
        e.getState().columnFilters,
        e.getState().globalFilter,
      ],
      (t, n, r) => {
        if (!t.rows.length || (!(n != null && n.length) && !r)) {
          for (let e = 0; e < t.flatRows.length; e++)
            ((t.flatRows[e].columnFilters = {}),
              (t.flatRows[e].columnFiltersMeta = {}));
          return t;
        }
        let i = [],
          a = [];
        (n ?? []).forEach((t) => {
          let n = e.getColumn(t.id);
          if (!n) return;
          let r = n.getFilterFn();
          r &&
            i.push({
              id: t.id,
              filterFn: r,
              resolvedValue:
                (r.resolveFilterValue == null
                  ? void 0
                  : r.resolveFilterValue(t.value)) ?? t.value,
            });
        });
        let o = (n ?? []).map((e) => e.id),
          s = e.getGlobalFilterFn(),
          c = e.getAllLeafColumns().filter((e) => e.getCanGlobalFilter());
        r &&
          s &&
          c.length &&
          (o.push(`__global__`),
          c.forEach((e) => {
            a.push({
              id: e.id,
              filterFn: s,
              resolvedValue:
                (s.resolveFilterValue == null
                  ? void 0
                  : s.resolveFilterValue(r)) ?? r,
            });
          }));
        let l, u;
        for (let e = 0; e < t.flatRows.length; e++) {
          let n = t.flatRows[e];
          if (((n.columnFilters = {}), i.length))
            for (let e = 0; e < i.length; e++) {
              l = i[e];
              let t = l.id;
              n.columnFilters[t] = l.filterFn(n, t, l.resolvedValue, (e) => {
                n.columnFiltersMeta[t] = e;
              });
            }
          if (a.length) {
            for (let e = 0; e < a.length; e++) {
              u = a[e];
              let t = u.id;
              if (
                u.filterFn(n, t, u.resolvedValue, (e) => {
                  n.columnFiltersMeta[t] = e;
                })
              ) {
                n.columnFilters.__global__ = !0;
                break;
              }
            }
            n.columnFilters.__global__ !== !0 &&
              (n.columnFilters.__global__ = !1);
          }
        }
        return Xt(
          t.rows,
          (e) => {
            for (let t = 0; t < o.length; t++)
              if (e.columnFilters[o[t]] === !1) return !1;
            return !0;
          },
          e,
        );
      },
      V(e.options, `debugTable`, `getFilteredRowModel`, () =>
        e._autoResetPageIndex(),
      ),
    );
}
function en() {
  return (e) =>
    B(
      () => [e.getState().grouping, e.getPreGroupedRowModel()],
      (t, n) => {
        if (!n.rows.length || !t.length)
          return (
            n.rows.forEach((e) => {
              ((e.depth = 0), (e.parentId = void 0));
            }),
            n
          );
        let r = t.filter((t) => e.getColumn(t)),
          i = [],
          a = {},
          o = function (t, n, s) {
            if ((n === void 0 && (n = 0), n >= r.length))
              return t.map(
                (e) => (
                  (e.depth = n),
                  i.push(e),
                  (a[e.id] = e),
                  (e.subRows &&= o(e.subRows, n + 1, e.id)),
                  e
                ),
              );
            let c = r[n],
              l = tn(t, c);
            return Array.from(l.entries()).map((t, l) => {
              let [u, d] = t,
                f = `${c}:${u}`;
              f = s ? `${s}>${f}` : f;
              let p = o(d, n + 1, f);
              p.forEach((e) => {
                e.parentId = f;
              });
              let m = n ? Xe(d, (e) => e.subRows) : d,
                h = W(e, f, m[0].original, l, n, void 0, s);
              return (
                Object.assign(h, {
                  groupingColumnId: c,
                  groupingValue: u,
                  subRows: p,
                  leafRows: m,
                  getValue: (t) => {
                    if (r.includes(t))
                      return (
                        h._valuesCache.hasOwnProperty(t) ||
                          (d[0] &&
                            (h._valuesCache[t] = d[0].getValue(t) ?? void 0)),
                        h._valuesCache[t]
                      );
                    if (h._groupingValuesCache.hasOwnProperty(t))
                      return h._groupingValuesCache[t];
                    let n = e.getColumn(t)?.getAggregationFn();
                    if (n)
                      return (
                        (h._groupingValuesCache[t] = n(t, m, d)),
                        h._groupingValuesCache[t]
                      );
                  },
                }),
                p.forEach((e) => {
                  (i.push(e), (a[e.id] = e));
                }),
                h
              );
            });
          },
          s = o(n.rows, 0);
        return (
          s.forEach((e) => {
            (i.push(e), (a[e.id] = e));
          }),
          { rows: s, flatRows: i, rowsById: a }
        );
      },
      V(e.options, `debugTable`, `getGroupedRowModel`, () => {
        e._queue(() => {
          (e._autoResetExpanded(), e._autoResetPageIndex());
        });
      }),
    );
}
function tn(e, t) {
  let n = new Map();
  return e.reduce((e, n) => {
    let r = `${n.getGroupingValue(t)}`,
      i = e.get(r);
    return (i ? i.push(n) : e.set(r, [n]), e);
  }, n);
}
function nn() {
  return (e) =>
    B(
      () => [e.getState().sorting, e.getPreSortedRowModel()],
      (t, n) => {
        if (!n.rows.length || !(t != null && t.length)) return n;
        let r = e.getState().sorting,
          i = [],
          a = r.filter((t) => e.getColumn(t.id)?.getCanSort()),
          o = {};
        a.forEach((t) => {
          let n = e.getColumn(t.id);
          n &&
            (o[t.id] = {
              sortUndefined: n.columnDef.sortUndefined,
              invertSorting: n.columnDef.invertSorting,
              sortingFn: n.getSortingFn(),
            });
        });
        let s = (e) => {
          let t = e.map((e) => ({ ...e }));
          return (
            t.sort((e, t) => {
              for (let n = 0; n < a.length; n += 1) {
                let r = a[n],
                  i = o[r.id],
                  s = i.sortUndefined,
                  c = r?.desc ?? !1,
                  l = 0;
                if (s) {
                  let n = e.getValue(r.id),
                    i = t.getValue(r.id),
                    a = n === void 0,
                    o = i === void 0;
                  if (a || o) {
                    if (s === `first`) return a ? -1 : 1;
                    if (s === `last`) return a ? 1 : -1;
                    l = a && o ? 0 : a ? s : -s;
                  }
                }
                if ((l === 0 && (l = i.sortingFn(e, t, r.id)), l !== 0))
                  return (c && (l *= -1), i.invertSorting && (l *= -1), l);
              }
              return e.index - t.index;
            }),
            t.forEach((e) => {
              var t;
              (i.push(e),
                (t = e.subRows) != null &&
                  t.length &&
                  (e.subRows = s(e.subRows)));
            }),
            t
          );
        };
        return { rows: s(n.rows), flatRows: i, rowsById: n.rowsById };
      },
      V(e.options, `debugTable`, `getSortedRowModel`, () =>
        e._autoResetPageIndex(),
      ),
    );
}
function rn(e, t) {
  return e ? (an(e) ? I.createElement(e, t) : e) : null;
}
function an(e) {
  return on(e) || typeof e == `function` || sn(e);
}
function on(e) {
  return (
    typeof e == `function` &&
    (() => {
      let t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function sn(e) {
  return (
    typeof e == `object` &&
    typeof e.$$typeof == `symbol` &&
    [`react.memo`, `react.forward_ref`].includes(e.$$typeof.description)
  );
}
function cn(e) {
  let t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [n] = I.useState(() => ({ current: Jt(t) })),
    [r, i] = I.useState(() => n.current.initialState);
  return (
    n.current.setOptions((t) => ({
      ...t,
      ...e,
      state: { ...r, ...e.state },
      onStateChange: (t) => {
        (i(t), e.onStateChange == null || e.onStateChange(t));
      },
    })),
    n.current
  );
}
var Q = n(m(), 1),
  ln = `tvTeNwj1vLY-`,
  un = `ZhnXk5Ms3Xo-`,
  dn = `wJ7wIpGx18c-`,
  fn = `nNd9H0edV0w-`,
  pn = `gDgdjW0QKjE-`,
  mn = `WJJpD1KrDcs-`,
  $ = i(),
  hn = I.memo(function (e) {
    let {
        virtualizer: t,
        bDynamic: n,
        scrollAlign: r,
        bNativeScrollIntoView: i,
        idx: a,
        rowGap: o,
        renderItem: s,
      } = e,
      c = I.useCallback(
        (e, n, i) => (t.scrollToIndex(a, { align: r }), !0),
        [t, a, r],
      );
    return (0, $.jsx)(v, {
      ref: n ? t.measureElement : void 0,
      navKey: `VirtualizedListIndex-${a}`,
      "data-index": a,
      fnScrollIntoViewHandler: i ? void 0 : c,
      scrollIntoViewWhenChildFocused: `force`,
      style: { width: `100%`, paddingBottom: o },
      children: s(a),
    });
  });
function gn(e) {
  return h(
    (t) => {
      if (!t) return;
      let n = new t.ownerDocument.defaultView.ResizeObserver((t) => {
          e(t[0]);
        }),
        r = [],
        i = t;
      for (; i && i != null;) (n.observe(i), r.push(i), (i = i.parentElement));
      return () => {
        r.forEach((e) => n.unobserve(e));
      };
    },
    [e],
  );
}
function _n(e, t) {
  let n = e.getBoundingClientRect().top;
  return t
    ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
    : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
}
I.forwardRef(function (e, t) {
  let {
      nRows: n,
      nItemHeight: r,
      nRowGap: i,
      overscan: a,
      renderItem: o,
      getItemKey: s,
      bDynamic: c,
      measureElement: l,
      className: u,
      forceVirtualizeType: d,
      hintVirtualizeType: f,
      scrollAlign: m,
      bNativeScrollIntoView: h,
      bNoOverscanOffscreen: g,
      bBrowserScrollAnchoring: _,
      initialOffset: y,
      onOffsetChange: b,
      ...te
    } = e,
    [x, ne] = (0, I.useState)(d ?? f),
    [S, re] = I.useState(),
    [C, w] = I.useState(),
    [T, E] = I.useState(),
    D = I.useRef(null),
    O = I.useCallback(
      (e) => {
        if (!e) return;
        let t = ee(e, `y`),
          n = _n(e, d == `window` ? null : t),
          r = t?.getBoundingClientRect(),
          i = () => {
            (d != `window` &&
              (re(t || void 0),
              w((e) => {
                if (!r) return;
                let t = Math.round(r.width),
                  n = Math.round(r.height);
                return e?.width == t && e?.height == n
                  ? e
                  : { width: t, height: n };
              })),
              E(n),
              d || ne(t ? `element` : `window`));
          };
        g ? i() : (0, I.startTransition)(i);
      },
      [d, g],
    ),
    k = I.useRef(S);
  k.current = S;
  let ie = gn(
      I.useCallback(() => {
        if (!D.current) return;
        let e = _n(D.current, k.current);
        (0, I.startTransition)(() => {
          E(e);
        });
      }, []),
    ),
    A = p(O, D, ie, t),
    j = {
      nRows: n,
      nItemHeight: r,
      nRowGap: i,
      overscan: a,
      renderItem: o,
      getItemKey: s,
      bDynamic: c,
      measureElement: l,
      forceVirtualizeType: d,
      hintVirtualizeType: f,
      scrollAlign: m,
      bNativeScrollIntoView: h,
      bNoOverscanOffscreen: g,
      bBrowserScrollAnchoring: _,
      initialOffset: y,
      onOffsetChange: b,
    };
  return (0, $.jsx)(v, {
    className: u,
    ref: A,
    ...te,
    children: (0, $.jsxs)(I.Suspense, {
      children: [
        x === `element` &&
          (0, $.jsx)(Sn, {
            ...j,
            nScrollMargin: T,
            elScrollable: S,
            rectScrollable: C,
          }),
        x === `window` && (0, $.jsx)(xn, { ...j, nScrollMargin: T }),
      ],
    }),
  });
});
function vn(e, t, n) {
  I.useEffect(() => {
    n ||
      (0, I.startTransition)(() => {
        e.measure();
      });
  }, [e, t, n]);
}
function yn(e, t, n) {
  if (!t) return `first`;
  let r = e.options.scrollMargin,
    i = r + e.getTotalSize(),
    a = e.scrollOffset ?? 0;
  return r > a + (e.scrollRect ?? e.options.initialRect).height + n
    ? `first`
    : i < a - n
      ? `last`
      : `all`;
}
function bn(e, t, n) {
  let [, r] = (0, I.useState)(0),
    i = I.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: `all` });
  ((i.current.bPositionKnown = t), (i.current.nMargin = n));
  let a = I.useCallback(
    (e, t) =>
      Tn(e, (n, a) => {
        t(n, a);
        let { bPositionKnown: o, nMargin: s, eRowWindow: c } = i.current;
        yn(e, o, s) != c && r((e) => e + 1);
      }),
    [],
  );
  return {
    observeElementOffset: e ? a : Tn,
    fnGetRowWindow: (r) => {
      let a = e ? yn(r, t, n) : `all`;
      return ((i.current.eRowWindow = a), a);
    },
  };
}
function xn(e) {
  let {
    nScrollMargin: t,
    nRows: n,
    nItemHeight: r,
    nRowGap: i = 10,
    overscan: a = 6,
    initialOffset: o,
    onOffsetChange: s,
    measureElement: c,
    getItemKey: l,
    bDynamic: u,
    bNoOverscanOffscreen: d,
    bBrowserScrollAnchoring: f,
  } = e;
  b();
  let p = r + i,
    { observeElementOffset: m, fnGetRowWindow: h } = bn(d, t !== void 0, a * p),
    g = x({
      count: n,
      scrollMargin: t,
      estimateSize: I.useCallback(() => p, [p]),
      measureElement: c,
      getItemKey: l,
      overscan: a,
      initialOffset: o ?? (() => window.scrollY),
      initialRect: void 0,
      observeElementOffset: m,
      observeElementRect: En,
      onChange(e, t) {
        s?.(e.scrollOffset);
      },
    });
  return (
    (g.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !f && t !== void 0 && e.start < (g.scrollOffset ?? 0)),
    vn(g, p, u),
    (0, $.jsx)(Cn, { ...e, virtualizer: g, eRowWindow: h(g) })
  );
}
function Sn(e) {
  let {
      nRows: t,
      nScrollMargin: n,
      elScrollable: r,
      rectScrollable: i,
      nItemHeight: a,
      nRowGap: o = 10,
      overscan: s = 6,
      initialOffset: c,
      onOffsetChange: l,
      measureElement: u,
      getItemKey: d,
      bDynamic: f,
      bNoOverscanOffscreen: p,
      bBrowserScrollAnchoring: m,
    } = e,
    h = a + o,
    g = b(),
    { observeElementOffset: _, fnGetRowWindow: ee } = bn(
      p,
      r !== void 0 && n !== void 0,
      s * h,
    ),
    v = re({
      count: t,
      scrollMargin: n ?? 0,
      getScrollElement: () => (
        r &&
          v.scrollElement !== r &&
          c === void 0 &&
          (v.scrollOffset = r.scrollTop),
        r ?? null
      ),
      estimateSize: I.useCallback(() => h, [h]),
      measureElement: u,
      getItemKey: d,
      overscan: s,
      initialRect: r
        ? i
        : {
            height: g.viewportHeight?.value ?? 1e3,
            width: g.viewportWidth?.value ?? 1e3,
          },
      initialOffset: c,
      observeElementOffset: _,
      observeElementRect: Dn,
      onChange(e, t) {
        l?.(e.scrollOffset);
      },
    });
  return (
    (v.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !m && r !== void 0 && e.start < (v.scrollOffset ?? 0)),
    vn(v, h, f),
    (0, $.jsx)(Cn, { ...e, virtualizer: v, eRowWindow: ee(v) })
  );
}
function Cn(e) {
  let {
      virtualizer: t,
      eRowWindow: n,
      nRowGap: r,
      renderItem: i,
      bDynamic: a,
      scrollAlign: o = `center`,
      bNativeScrollIntoView: s,
    } = e,
    c = t.getVirtualItems(),
    l =
      n == `first`
        ? t.measurementsCache[0]
        : t.measurementsCache[t.measurementsCache.length - 1],
    u = n == `all` ? c : l ? [l] : [],
    d = u.length ? u[0].start - t.options.scrollMargin : 0,
    f = Math.max(0, t.getTotalSize());
  return (0, $.jsx)(v, {
    "flow-children": `column`,
    navEntryPreferPosition: g.MAINTAIN_Y,
    style: { height: `${f}px`, width: `100%`, position: `relative` },
    children: (0, $.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${d}px )`,
      },
      children: u.map((e) =>
        (0, $.jsx)(
          hn,
          {
            virtualizer: t,
            bDynamic: a,
            scrollAlign: o,
            bNativeScrollIntoView: s,
            idx: e.index,
            rowGap: r,
            renderItem: i,
          },
          e.key,
        ),
      ),
    }),
  });
}
function wn(e) {
  return (...t) => {
    queueMicrotask(() => {
      (0, I.startTransition)(() => {
        e(...t);
      });
    });
  };
}
function Tn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r;
  r =
    `scrollX` in n
      ? wn((r) => t(n[e.options.horizontal ? `scrollX` : `scrollY`], r))
      : wn((r) => t(n[e.options.horizontal ? `scrollLeft` : `scrollTop`], r));
  let i = () => r(!0),
    a = () => r(!1);
  return (
    a(),
    n.addEventListener(`scroll`, i, { passive: !0 }),
    n.addEventListener(`scrollend`, a, { passive: !0 }),
    () => {
      (n.removeEventListener(`scroll`, i),
        n.removeEventListener(`scrollend`, a));
    }
  );
}
function En(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = wn(() => t({ width: n.innerWidth, height: n.innerHeight }));
  return (
    r(),
    n.addEventListener(`resize`, r, { passive: !0 }),
    () => {
      n.removeEventListener(`resize`, r);
    }
  );
}
function Dn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = wn((e) =>
    t({ width: Math.round(e.width), height: Math.round(e.height) }),
  );
  r(n.getBoundingClientRect());
  let i = n.ownerDocument.defaultView;
  if (!i?.ResizeObserver) return () => {};
  let a = new i.ResizeObserver((e) => {
    e[0]?.borderBoxSize[0]
      ? r({
          width: e[0].borderBoxSize[0].inlineSize,
          height: e[0].borderBoxSize[0].blockSize,
        })
      : r(n.getBoundingClientRect());
  });
  return (
    a.observe(n, { box: `border-box` }),
    () => {
      a.unobserve(n);
    }
  );
}
var On = I.createContext(void 0);
function kn(e) {
  let { table: t, setColumnSizeOverride: n } = e,
    r = (0, I.useRef)(t);
  r.current = t;
  let i = (0, I.useMemo)(
    () => ({ table: r.current, setColumnSizeOverride: n }),
    [n],
  );
  return (0, $.jsx)(On.Provider, { value: i, children: e.children });
}
var An = I.forwardRef(function (e, t) {
  let {
      data: n,
      columns: r,
      className: i,
      width: a,
      height: o,
      nScrollMargin: s,
      nItemHeight: c,
      nHeaderHeight: l,
      overscan: u = 6,
      stickyHeader: d,
      getRowKey: f,
      initialSorting: p,
      initialColumnFilters: m,
      initialGrouping: h,
      initialExpanded: g,
      initialColumnPinning: _,
      initialColumnVisibility: ee,
      onGroupingChange: v,
      onVisibleRowsChange: y,
      renderGroup: b,
      virtualizeType: x = `element`,
    } = e,
    C = (0, I.useRef)(null),
    [w, T] = (0, I.useState)({}),
    [E, D] = (0, I.useState)({}),
    O = r.map((e) =>
      `accessorKey` in e
        ? { ...e, filterFn: w[e.accessorKey] ?? e.filterFn }
        : e,
    ),
    k = cn({
      data: n,
      columns: O.map((e) => {
        let t = E[e.id];
        return (
          t === void 0 && `accessorKey` in e && (t = E[e.accessorKey]),
          (t ??= e.size),
          { ...e, size: t }
        );
      }),
      defaultColumn: { minSize: 60, maxSize: 800 },
      initialState: {
        sorting: p,
        grouping: h ?? [],
        expanded: g,
        columnPinning: _ ?? {},
        columnFilters: m,
        columnVisibility: ee,
      },
      getCoreRowModel: Yt(),
      getSortedRowModel: nn(),
      getFilteredRowModel: $t(),
      getGroupedRowModel: en(),
      columnResizeMode: `onChange`,
    }),
    { rows: ie, flatRows: A } = k.getRowModel(),
    j = ie.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
    ae = k.getState().grouping;
  ((0, I.useEffect)(() => {
    v?.(ae);
  }, [v, ae]),
    (0, I.useEffect)(() => {
      y?.(j);
    }, [y, j.length]));
  let M = re({
      count: j.length,
      scrollMargin: s,
      getScrollElement: I.useCallback(
        () => (x === `element` ? P.current : window),
        [x],
      ),
      scrollToFn(e, t, n) {
        return x === `window` ? ne(e, t, n) : te(e, t, n);
      },
      estimateSize: I.useCallback(() => c, [c]),
      overscan: u,
      initialRect: void 0,
      observeElementOffset: Tn,
      observeElementRect(e, t) {
        return x === `window` ? En(e, t) : Dn(e, t);
      },
      getItemKey(e) {
        let t = j[e];
        return `${t.parentId ?? ``}${f(e, t.original)}`;
      },
    }),
    oe = (0, I.useRef)(0),
    se = I.useMemo(() => {
      let e = k.getFlatHeaders(),
        t = {};
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        ((t[`--header-${r.id}-size`] = `${r.getSize()}px`),
          (t[`--col-${r.column.id}-size`] = `${r.column.getSize()}px`));
      }
      return ((oe.current += 1), t);
    }, [k.getState().columnSizingInfo, k.getState().columnSizing, r]);
  I.useEffect(() => {
    (0, I.startTransition)(() => {
      M.measure();
    });
  }, [M, c]);
  let ce = M.getVirtualItems(),
    le = ce[0]?.start ?? 0,
    ue = M.getTotalSize(),
    N = re({
      estimateSize(e) {
        return j[0]?.getVisibleCells()[e].column.getSize() ?? 0;
      },
      count: j[0]?.getVisibleCells().length ?? 0,
      overscan: 6,
      horizontal: !0,
      getScrollElement: I.useCallback(
        () => (x === `element` ? P.current : window),
        [x],
      ),
      scrollToFn(e, t, n) {
        return x === `window` ? ne(e, t, n) : te(e, t, n);
      },
      rangeExtractor(e) {
        let t = j[0]?.getVisibleCells() ?? [],
          n = new Set(S(e));
        return (
          t.forEach((e, t) => {
            e.column.getIsPinned() && n.add(t);
          }),
          Array.from(n).sort((e, t) => e - t)
        );
      },
      observeElementOffset: Tn,
      observeElementRect(e, t) {
        return x === `window` ? En(e, t) : Dn(e, t);
      },
    });
  ((0, I.useEffect)(() => {
    N.measure();
  }, [oe.current]),
    (0, I.useImperativeHandle)(
      t,
      () => ({
        getData() {
          return A.map((e) => e.original);
        },
        getVisibleRows() {
          return j;
        },
        getState: k.getState,
        getColumns: k.getAllColumns,
        getColumnDefs() {
          return O;
        },
        setColumnFilters: k.setColumnFilters,
        resetColumnFilters: k.resetColumnFilters,
        setColumnFilterFnOverride: T,
        getColumnFilterFnOverride() {
          return w;
        },
        getContainerElement() {
          return P.current;
        },
        getTableElement() {
          return C.current;
        },
        scrollToColumn(e, t) {
          N.scrollToIndex(e.getIndex(), t);
        },
      }),
      [
        A,
        j,
        k.setColumnFilters,
        k.resetColumnFilters,
        k.getState,
        k.getAllColumns,
        w,
        O,
        N,
      ],
    ));
  let P = (0, I.useRef)(null),
    de = d ? (l ?? 0) : 0,
    fe = 0,
    pe = j[0]?.getVisibleCells(),
    F = N.getVirtualItems(),
    me = F[F.length - 1]?.end;
  for (let e of F) pe[e.index]?.column.getIsPinned() && (fe += e.size);
  return (0, $.jsx)(kn, {
    table: k,
    setColumnSizeOverride: D,
    children: (0, $.jsx)(`div`, {
      className: i,
      ref: P,
      style: {
        width: a,
        height: o,
        overflow: x === `element` ? `auto` : void 0,
        maxWidth: `fit-content`,
        scrollPadding: `${de}px 0 0 ${fe}px`,
      },
      children: (0, $.jsxs)(`div`, {
        role: `table`,
        ref: C,
        "aria-rowcount": n.length,
        style: {
          minHeight: ue,
          width: k.getTotalSize(),
          "--virtualPos": `${le}px`,
          ...se,
        },
        children: [
          k
            .getHeaderGroups()
            .map((e) =>
              (0, $.jsx)(Mn, { group: e, sticky: d, nHeaderHeight: l }, e.id),
            ),
          ce.map((e) =>
            (0, $.jsx)(
              Nn,
              {
                row: j[e.index],
                size: e.size,
                rowVirtualizer: N,
                index: e.index,
                measureRef: M.measureElement,
                scrollContainerRef: P,
                nItemHeight: c,
                renderGroup: b,
                rowEnd: me,
              },
              e.key,
            ),
          ),
        ],
      }),
    }),
  });
});
function jn(e) {
  let t = e.getIsPinned(),
    n = t === `left` && e.getIsLastColumn(`left`),
    r = t === `right` && e.getIsFirstColumn(`right`);
  return {
    borderRight: n
      ? `var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))`
      : void 0,
    borderLeft: r
      ? `var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))`
      : void 0,
    left: t === `left` ? `${e.getStart(`left`)}px` : void 0,
    right: t === `right` ? `${e.getAfter(`right`)}px` : void 0,
    position: t ? `sticky` : `relative`,
    minWidth: e.getSize(),
    zIndex: +!!t,
  };
}
function Mn(e) {
  let { group: t, sticky: n, nHeaderHeight: r } = e;
  return (0, $.jsx)(`div`, {
    role: `row`,
    className: (0, Q.default)(ln, un, n && `nRvZy3XjLSM-`),
    children: t.headers.map((e, n) => {
      let i = t.headers[n - 1],
        a = {},
        o = e.column.getIsSorted();
      o &&
        !e.column.columnDef.meta?.bDisableSortButton &&
        (a[`aria-sort`] = o === `asc` ? `ascending` : `descending`);
      let s = `div`;
      return (
        e.column.getCanSort() &&
          !e.column.columnDef.meta?.bDisableSortButton &&
          ((s = `button`), (a.onClick = e.column.getToggleSortingHandler())),
        (0, $.jsx)(
          In,
          {
            header: e,
            prevHeader: i,
            HeaderElement: s,
            nHeaderHeight: r,
            sortDirection: o,
            strTooltip: e.column.columnDef.meta?.strHeaderTooltip,
            conditionalProps: a,
          },
          e.id,
        )
      );
    }),
  });
}
var Nn = I.memo(function (e) {
  let {
    row: t,
    size: n,
    rowVirtualizer: r,
    measureRef: i,
    index: a,
    nItemHeight: o,
    renderGroup: s,
  } = e;
  return (0, $.jsx)(`div`, {
    role: `row`,
    className: (0, Q.default)(ln, t.getCanExpand() && `PnluZ3Vby1E-`),
    style: {
      minHeight: t.getCanExpand() ? void 0 : `${n}px`,
      transform: `translateY(var(--virtualPos))`,
    },
    "data-even": a % 2 == 0,
    "data-index": a,
    ref: i,
    children: (0, $.jsx)(Pn, {
      row: t,
      rowVirtualizer: r,
      nItemHeight: o,
      renderGroup: s,
    }),
  });
});
function Pn(e) {
  let { row: t, rowVirtualizer: n, renderGroup: r } = e;
  if (t.getCanExpand()) {
    let e = r ?? (() => t.groupingValue);
    return (0, $.jsxs)(`button`, {
      className: mn,
      "aria-expanded": t.getIsExpanded(),
      onClick: t.getToggleExpandedHandler(),
      children: [(0, $.jsx)(`div`, { className: pn }), e(t)],
    });
  }
  let i = n.getVirtualItems(),
    a = t.getVisibleCells(),
    o = 0,
    s;
  return (0, $.jsx)($.Fragment, {
    children: i.map((e) => {
      let t = a[e.index],
        r = t.column.getIsPinned();
      return (
        r ? (o += e.size) : s === void 0 && (s = e.start),
        (0, $.jsx)(
          Ln,
          {
            cell: t,
            rowVirtualizer: n,
            index: e.index,
            transform: r ? void 0 : `translateX(${s - o}px)`,
          },
          t.id,
        )
      );
    }),
  });
}
function Fn(e, t) {
  let n = (0, I.useContext)(On),
    r = e.columnDef.meta?.bGrowToFit,
    i = e.id,
    a = r ? e.getSize() : 0,
    o = e.getIsSorted();
  (0, I.useLayoutEffect)(() => {
    if (!r || !t.current) return;
    let e = t.current?.scrollWidth;
    if (!e) return;
    let o = t.current.getBoundingClientRect().width,
      s = window.getComputedStyle(t.current),
      c = e;
    if (e > o) {
      if (s.paddingLeft) {
        let e = parseInt(s.paddingLeft);
        isNaN(e) || (c += e);
      }
      if (s.paddingRight) {
        let e = parseInt(s.paddingRight);
        isNaN(e) || (c += e);
      }
    }
    c > a && n.setColumnSizeOverride((e) => (e[i] > c ? e : { ...e, [i]: c }));
  }, [r, i, n, a, t, o]);
}
function In(e) {
  let {
      header: t,
      prevHeader: n,
      HeaderElement: r,
      nHeaderHeight: i,
      sortDirection: a,
      strTooltip: o,
      conditionalProps: s,
    } = e,
    c = (0, I.useRef)(null);
  return (
    Fn(t.column, c),
    (0, $.jsxs)(
      r,
      {
        role: `columnheader`,
        ref: c,
        "data-pinned": !!t.column.getIsPinned(),
        className: (0, Q.default)(
          fn,
          r === `button` && `qpOQP81Ua-s-`,
          t.column.columnDef.meta?.headerClassname,
        ),
        style: {
          width: `var(--header-${t.id}-size)`,
          height: i === void 0 ? void 0 : `${i}px`,
          ...jn(t.column),
        },
        ...s,
        children: [
          n?.column.getCanResize() &&
            (0, $.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => n.column.resetSize(),
              onMouseDown: n.getResizeHandler(),
              onTouchStart: n.getResizeHandler(),
              onClick: (e) => e.stopPropagation(),
              className: (0, Q.default)(`G-rrZhNh4Dc-`, `_1bituu5y854-`),
            }),
          t.isPlaceholder
            ? null
            : rn(t.column.columnDef.header, t.getContext()),
          o && (0, $.jsx)(y, { tooltip: o }),
          a &&
            !t.column.columnDef.meta?.bDisableSortButton &&
            (0, $.jsx)(`div`, { className: `j07R6ewhtEs-` }),
          t.column.getCanResize() &&
            (0, $.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => t.column.resetSize(),
              onMouseDown: t.getResizeHandler(),
              onTouchStart: t.getResizeHandler(),
              onClick: (e) => e.stopPropagation(),
              className: (0, Q.default)(
                `G-rrZhNh4Dc-`,
                t.column.getIsResizing() && void 0,
              ),
            }),
        ],
      },
      t.id,
    )
  );
}
function Ln(e) {
  let { cell: t, rowVirtualizer: n, index: r, transform: i } = e,
    a = I.useRef(null),
    o = _(a, n.measure);
  return (
    Fn(t.column, a),
    (0, $.jsx)(`div`, {
      className: (0, Q.default)(dn, t.column.columnDef.meta?.cellClassname),
      "data-index": r,
      "data-table-column-id": t.column.id,
      ref: o,
      style: {
        width: `var(--col-${t.column.id}-size)`,
        transform: i,
        ...jn(t.column),
      },
      children: (0, $.jsx)(zn, {
        CellComponent: t.column.columnDef.cell,
        context: t.getContext(),
      }),
    })
  );
}
function Rn(e) {
  return rn(e.CellComponent, e.context);
}
var zn = I.memo(Rn, (e, t) => e.context.getValue() === t.context.getValue());
export { qe as i, Je as n, Ne as r, An as t };
