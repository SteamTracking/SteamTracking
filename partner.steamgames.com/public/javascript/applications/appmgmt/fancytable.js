/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  At as e,
  Gt as t,
  Jt as n,
  Kt as r,
  Ut as i,
  Wt as a,
  Xt as o,
  Yt as s,
  Zt as c,
  bt as l,
  qt as u,
  sn as d,
  vt as f,
} from "./chunk~de7f2df91c.js";
import {
  At as p,
  Ct as m,
  Et as h,
  G as g,
  Ot as ee,
  Pt as _,
} from "./chunk~25a6634263.js";
import { Ha as v, pn as te } from "./chunk~1fa4b8f2ff.js";
import { t as y } from "./chunk~e7f5a67b58.js";
import {
  i as ne,
  n as b,
  o as re,
  r as x,
  t as ie,
} from "./chunk~5ab42519dc.js";
var S = d(c(), 1),
  C = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_playtime_seconds || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_playtime_seconds: {
              n: 1,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            total_sessions: { n: 20, br: r.readUint32, bw: o.writeUint32 },
            vr_sessions: { n: 21, br: r.readUint32, bw: o.writeUint32 },
            deck_sessions: { n: 22, br: r.readUint32, bw: o.writeUint32 },
            controller_sessions: { n: 23, br: r.readUint32, bw: o.writeUint32 },
            linux_sessions: { n: 24, br: r.readUint32, bw: o.writeUint32 },
            macos_sessions: { n: 25, br: r.readUint32, bw: o.writeUint32 },
            windows_sessions: { n: 26, br: r.readUint32, bw: o.writeUint32 },
            total_playtime_percentagex100: {
              n: 27,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            vr_playtime_percentagex100: {
              n: 28,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            deck_playtime_percentagex100: {
              n: 29,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            controller_playtime_percentagex100: {
              n: 30,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            linux_playtime_percentagex100: {
              n: 31,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            macos_playtime_percentagex100: {
              n: 32,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            windows_playtime_percentagex100: {
              n: 33,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStats`;
    }
  },
  w = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: r.readUint32, bw: o.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreakGame`;
    }
  },
  T = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.longest_consecutive_days || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            longest_consecutive_days: {
              n: 1,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            rtime_start: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            streak_games: { n: 3, c: w, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeStreak`;
    }
  },
  E = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_rank || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_rank: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            vr_rank: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            deck_rank: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            controller_rank: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            linux_rank: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            mac_rank: { n: 6, br: r.readUint32, bw: o.writeUint32 },
            windows_rank: { n: 7, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeRanks`;
    }
  },
  D = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            stats: { n: 2, c: C },
            playtime_streak: { n: 3, c: T },
            playtime_ranks: { n: 4, c: E },
            rtime_first_played: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            relative_game_stats: { n: 6, c: C },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGamePlaytimeStats`;
    }
  },
  O = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            new_this_year: { n: 2, br: r.readBool, bw: o.writeBool },
            rtime_first_played_lifetime: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            demo: { n: 4, br: r.readBool, bw: o.writeBool },
            playtest: { n: 5, br: r.readBool, bw: o.writeBool },
            played_during_early_access: {
              n: 6,
              br: r.readBool,
              bw: o.writeBool,
            },
            played_vr: { n: 7, br: r.readBool, bw: o.writeBool },
            played_deck: { n: 8, br: r.readBool, bw: o.writeBool },
            played_controller: { n: 9, br: r.readBool, bw: o.writeBool },
            played_linux: { n: 10, br: r.readBool, bw: o.writeBool },
            played_mac: { n: 11, br: r.readBool, bw: o.writeBool },
            played_windows: { n: 12, br: r.readBool, bw: o.writeBool },
            total_playtime_percentagex100: {
              n: 13,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            total_sessions: { n: 14, br: r.readUint32, bw: o.writeUint32 },
            rtime_release_date: { n: 15, br: r.readUint32, bw: o.writeUint32 },
            parent_appid: { n: 16, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameSummary`;
    }
  },
  ae = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            total_playtime_percentagex100: {
              n: 2,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            relative_playtime_percentagex100: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSimpleGameSummary`;
    }
  },
  k = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            rank: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            relative_playtime_percentagex100: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRank`;
    }
  },
  A = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.category || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            category: { n: 1, br: r.readString, bw: o.writeString },
            rankings: { n: 2, c: k, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CRankingCategory`;
    }
  },
  oe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overall_ranking || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overall_ranking: { n: 1, c: A },
            vr_ranking: { n: 2, c: A },
            deck_ranking: { n: 3, c: A },
            controller_ranking: { n: 4, c: A },
            linux_ranking: { n: 5, c: A },
            mac_ranking: { n: 6, c: A },
            windows_ranking: { n: 7, c: A },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameRankings`;
    }
  },
  j = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_achievements || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_achievements: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            total_games_with_achievements: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            total_rare_achievements: {
              n: 4,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeSummaryStats`;
    }
  },
  se = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: ce, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats`;
    }
  },
  ce = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tag_id || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tag_id: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            tag_weight: { n: 2, br: r.readFloat, bw: o.writeFloat },
            tag_weight_pre_selection: {
              n: 3,
              br: r.readFloat,
              bw: o.writeFloat,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserTagStats_Tag`;
    }
  },
  le = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.screenshots_shared || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            screenshots_shared: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            gifts_sent: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            loyalty_reactions: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            written_reviews: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            guides_submitted: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            workshop_contributions: {
              n: 6,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            badges_earned: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            friends_added: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            forum_posts: { n: 9, br: r.readUint32, bw: o.writeUint32 },
            workshop_subscriptions: {
              n: 10,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            guide_subscribers: { n: 11, br: r.readUint32, bw: o.writeUint32 },
            workshop_subscribers: {
              n: 12,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            games_played_pct: { n: 13, br: r.readUint32, bw: o.writeUint32 },
            achievements_pct: { n: 14, br: r.readUint32, bw: o.writeUint32 },
            game_streak_pct: { n: 15, br: r.readUint32, bw: o.writeUint32 },
            games_played_avg: { n: 16, br: r.readUint32, bw: o.writeUint32 },
            achievements_avg: { n: 17, br: r.readUint32, bw: o.writeUint32 },
            game_streak_avg: { n: 18, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPlaytimeByNumbers`;
    }
  },
  ue = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_stats || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [2, 5, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_stats: { n: 1, c: C },
            games: { n: 2, c: D, r: !0, q: !0 },
            playtime_streak: { n: 3, c: T },
            months: { n: 5, c: de, r: !0, q: !0 },
            game_summary: { n: 6, c: O, r: !0, q: !0 },
            demos_played: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            game_rankings: { n: 8, c: oe },
            playtests_played: { n: 9, br: r.readUint32, bw: o.writeUint32 },
            summary_stats: { n: 10, c: j },
            substantial: { n: 11, d: !0, br: r.readBool, bw: o.writeBool },
            tag_stats: { n: 12, c: se },
            by_numbers: { n: 13, c: le },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserPlaytimeStats`;
    }
  },
  de = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.rtime_month || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [4, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_month: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            stats: { n: 2, c: C },
            appid: { n: 4, c: D, r: !0, q: !0 },
            relative_monthly_stats: { n: 5, c: C },
            game_summary: { n: 6, c: ae, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMonthlyPlaytimeStats`;
    }
  },
  M = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.account_id || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            account_id: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            playtime_stats: { n: 3, c: ue },
            privacy_state: { n: 4, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CUserYearInReviewStats`;
    }
  },
  N = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.from_dbo || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            from_dbo: { n: 1, br: r.readBool, bw: o.writeBool },
            overall_time_ms: {
              n: 2,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            dbo_load_ms: {
              n: 3,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            query_execution_ms: {
              n: 4,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            message_population_ms: {
              n: 5,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
            dbo_lock_load_ms: {
              n: 6,
              br: r.readUint64String,
              bw: o.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CYearInReviewPerformanceStats`;
    }
  },
  fe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.statid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            statid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            fieldid: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            achievement_name_internal: {
              n: 3,
              br: r.readString,
              bw: o.writeString,
            },
            rtime_unlocked: { n: 4, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CAchievementDetails`;
    }
  },
  pe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            achievements: { n: 2, c: fe, r: !0, q: !0 },
            all_time_unlocked_achievements: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            unlocked_more_in_future: { n: 4, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGameAchievements`;
    }
  },
  me = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.median_achievements || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            median_achievements: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            median_games: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            median_streak: { n: 3, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPercentiles`;
    }
  },
  P = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.new_releases || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            new_releases: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            recent_releases: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            classic_releases: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            recent_cutoff_year: { n: 4, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CGlobalPlaytimeDistribution`;
    }
  },
  he = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.games_played || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            games_played: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            unlocked_achievements: {
              n: 2,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            longest_streak: { n: 3, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CPreviousYIRSummaryData`;
    }
  },
  ge = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            force_regenerate: { n: 3, br: r.readBool, bw: o.writeBool },
            access_source: { n: 4, br: r.readInt32, bw: o.writeInt32 },
            fetch_previous_year_summary: {
              n: 5,
              d: !1,
              br: r.readBool,
              bw: o.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Request`;
    }
  },
  _e = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: M },
            performance_stats: { n: 2, c: N },
            percentiles: { n: 3, c: me },
            distribution: { n: 4, c: P },
            previous_year_summary: { n: 5, c: he },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReview_Response`;
    }
  },
  ve = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            privacy_state: { n: 3, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Request`;
    }
  },
  ye = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { privacy_state: { n: 1, br: r.readEnum, bw: o.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_SetUserSharingPermissions_Response`;
    }
  },
  be = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Request`;
    }
  },
  xe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.privacy_state || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            privacy_state: { n: 1, br: r.readEnum, bw: o.writeEnum },
            generated_value: { n: 2, br: r.readBool, bw: o.writeBool },
            steamid: {
              n: 3,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            rt_privacy_updated: { n: 4, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserSharingPermissions_Response`;
    }
  },
  Se = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
            total_only: { n: 4, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Request`;
    }
  },
  Ce = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.game_achievements || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            game_achievements: { n: 1, c: pe, r: !0, q: !0 },
            total_achievements: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            total_rare_achievements: {
              n: 3,
              br: r.readUint32,
              bw: o.writeUint32,
            },
            total_games_with_achievements: {
              n: 4,
              br: r.readUint32,
              bw: o.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearAchievements_Response`;
    }
  },
  we = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            appids: {
              n: 3,
              r: !0,
              q: !0,
              br: r.readUint32,
              pbr: r.readPackedUint32,
              bw: o.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Request`;
    }
  },
  Te = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: De, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response`;
    }
  },
  Ee = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.image_url || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            image_url: { n: 1, br: r.readString, bw: o.writeString },
            preview_url: { n: 2, br: r.readString, bw: o.writeString },
            image_width: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            image_height: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            maybe_inappropriate_sex: { n: 5, br: r.readBool, bw: o.writeBool },
            maybe_inappropriate_violence: {
              n: 6,
              br: r.readBool,
              bw: o.writeBool,
            },
            visibility: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            spoiler_tag: { n: 8, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_Screenshot`;
    }
  },
  De = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            screenshots: { n: 2, c: Ee, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp`;
    }
  },
  Oe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            gid: { n: 2, br: r.readFixed64String, bw: o.writeFixed64String },
            type: { n: 3, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Request`;
    }
  },
  ke = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.jsondata || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { jsondata: { n: 1, br: r.readString, bw: o.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserActionData_Response`;
    }
  },
  Ae = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            gids: {
              n: 2,
              r: !0,
              q: !0,
              br: r.readFixed64String,
              pbr: r.readPackedFixed64String,
              bw: o.writeRepeatedFixed64String,
            },
            type: { n: 3, br: r.readEnum, bw: o.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Request`;
    }
  },
  je = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: Me, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response`;
    }
  },
  Me = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: r.readFixed64String, bw: o.writeFixed64String },
            jsondata: { n: 2, br: r.readString, bw: o.writeString },
            steamid: {
              n: 3,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetMultipleUserActionData_Response_Entry`;
    }
  },
  Ne = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: r.readFixed64String, bw: o.writeFixed64String },
            type: { n: 2, br: r.readEnum, bw: o.writeEnum },
            count: { n: 3, br: r.readUint32, bw: o.writeUint32 },
            last_account_index: { n: 4, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Request`;
    }
  },
  Pe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.entries || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: Fe, r: !0, q: !0 },
            last_account_index: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response`;
    }
  },
  Fe = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.gid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: r.readFixed64String, bw: o.writeFixed64String },
            jsondata: { n: 2, br: r.readString, bw: o.writeString },
            steamid: {
              n: 3,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetAllUserActionDataForType_Response_Entry`;
    }
  },
  Ie = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            return_private: { n: 3, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Request`;
    }
  },
  Le = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            privacy_state: { n: 3, br: r.readEnum, bw: o.writeEnum },
            rt_privacy_updated: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            privacy_override: { n: 5, br: r.readBool, bw: o.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CFriendSharedYearInView`;
    }
  },
  Re = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.friend_shares || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            friend_shares: { n: 1, c: Le, r: !0, q: !0 },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetFriendsSharedYearInReview_Response`;
    }
  },
  ze = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
            year: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            language: { n: 3, br: r.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Request`;
    }
  },
  Be = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.images || i(e.M()),
        S.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { images: { n: 1, c: Ve, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response`;
    }
  },
  Ve = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: r.readString, bw: o.writeString },
            url_path: { n: 2, br: r.readString, bw: o.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetUserYearInReviewShareImage_Response_Image`;
    }
  },
  He = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: r.readFixed64String,
              bw: o.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Request`;
    }
  },
  Ue = class e extends S.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.year || i(e.M()),
        S.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            year: { n: 1, br: r.readUint32, bw: o.writeUint32 },
            month: { n: 2, br: r.readUint32, bw: o.writeUint32 },
            games_played: { n: 4, br: r.readUint32, bw: o.writeUint32 },
            top_played_appid: { n: 5, br: r.readUint32, bw: o.writeUint32 },
            longest_streak_days: { n: 6, br: r.readUint32, bw: o.writeUint32 },
            rt_streak_start: { n: 7, br: r.readUint32, bw: o.writeUint32 },
            achievements: { n: 8, br: r.readUint32, bw: o.writeUint32 },
            screenshots: { n: 9, br: r.readUint32, bw: o.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= u(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(n) {
      return t(e.M(), n);
    }
    static deserializeBinary(t) {
      let n = new S.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return a(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, r) {
      n(e.M(), t, r);
    }
    serializeBase64String() {
      var t = new S.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CSaleFeature_GetYIRCurrentMonthlySummary_Response`;
    }
  },
  We;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearInReview#1`, l(ge, t, n), _e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearInReview = t;
  function n(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserSharingPermissions#1`,
      l(be, t, n),
      xe,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetUserSharingPermissions = n;
  function r(e, t, n) {
    return e.SendMsg(
      `SaleFeature.SetUserSharingPermissions#1`,
      l(ve, t, n),
      ye,
      { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetUserSharingPermissions = r;
  function i(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearAchievements#1`, l(Se, t, n), Ce, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearAchievements = i;
  function a(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserYearScreenshots#1`, l(we, t, n), Te, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetUserYearScreenshots = a;
  function o(e, t, n) {
    return e.SendMsg(`SaleFeature.GetUserActionData#1`, l(Oe, t, n), ke, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUserActionData = o;
  function s(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetMultipleUserActionData#1`,
      l(Ae, t, n),
      je,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetMultipleUserActionData = s;
  function c(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetAllUserActionDataForType#1`,
      l(Ne, t, n),
      Pe,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllUserActionDataForType = c;
  function u(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetFriendsSharedYearInReview#1`,
      l(Ie, t, n),
      Re,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetFriendsSharedYearInReview = u;
  function d(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetUserYearInReviewShareImage#1`,
      l(ze, t, n),
      Be,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetUserYearInReviewShareImage = d;
  function f(e, t, n) {
    return e.SendMsg(
      `SaleFeature.GetYIRCurrentMonthlySummary#1`,
      l(He, t, n),
      Ue,
      { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetYIRCurrentMonthlySummary = f;
})((We ||= {}));
var F = d(e(), 1);
function Ge() {
  return {
    accessor: (e, t) =>
      typeof e == `function`
        ? { ...t, accessorFn: e }
        : { ...t, accessorKey: e },
    display: (e) => e,
    group: (e) => e,
  };
}
function I(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function L(e, t) {
  return (n) => {
    t.setState((t) => ({ ...t, [e]: I(n, t[e]) }));
  };
}
function R(e) {
  return e instanceof Function;
}
function Ke(e) {
  return Array.isArray(e) && e.every((e) => typeof e == `number`);
}
function qe(e, t) {
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
function z(e, t, n) {
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
function B(e, t, n, r) {
  return { debug: () => e?.debugAll ?? e[t], key: !1, onChange: r };
}
function Je(e, t, n, r) {
  let i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
    getContext: z(
      () => [e, n, t, i],
      (e, t, n, r) => ({
        table: e,
        column: t,
        row: n,
        cell: r,
        getValue: r.getValue,
        renderValue: r.renderValue,
      }),
      B(e.options, `debugCells`, `cell.getContext`),
    ),
  };
  return (
    e._features.forEach((r) => {
      r.createCell == null || r.createCell(i, n, t, e);
    }, {}),
    i
  );
}
function Ye(e, t, n, r) {
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
    getFlatColumns: z(
      () => [!0],
      () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())],
      B(e.options, `debugColumns`, `column.getFlatColumns`),
    ),
    getLeafColumns: z(
      () => [e._getOrderColumnsFn()],
      (e) => {
        var t;
        return (t = c.columns) != null && t.length
          ? e(c.columns.flatMap((e) => e.getLeafColumns()))
          : [c];
      },
      B(e.options, `debugColumns`, `column.getLeafColumns`),
    ),
  };
  for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
  return c;
}
var V = `debugHeaders`;
function Xe(e, t, n) {
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
var Ze = {
  createTable: (e) => {
    ((e.getHeaderGroups = z(
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
        return H(t, [...a, ...s, ...o], e);
      },
      B(e.options, V, `getHeaderGroups`),
    )),
      (e.getCenterHeaderGroups = z(
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
          H(t, n, e, `center`)
        ),
        B(e.options, V, `getCenterHeaderGroups`),
      )),
      (e.getLeftHeaderGroups = z(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.left,
        ],
        (t, n, r) =>
          H(
            t,
            r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
            e,
            `left`,
          ),
        B(e.options, V, `getLeftHeaderGroups`),
      )),
      (e.getRightHeaderGroups = z(
        () => [
          e.getAllColumns(),
          e.getVisibleLeafColumns(),
          e.getState().columnPinning.right,
        ],
        (t, n, r) =>
          H(
            t,
            r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [],
            e,
            `right`,
          ),
        B(e.options, V, `getRightHeaderGroups`),
      )),
      (e.getFooterGroups = z(
        () => [e.getHeaderGroups()],
        (e) => [...e].reverse(),
        B(e.options, V, `getFooterGroups`),
      )),
      (e.getLeftFooterGroups = z(
        () => [e.getLeftHeaderGroups()],
        (e) => [...e].reverse(),
        B(e.options, V, `getLeftFooterGroups`),
      )),
      (e.getCenterFooterGroups = z(
        () => [e.getCenterHeaderGroups()],
        (e) => [...e].reverse(),
        B(e.options, V, `getCenterFooterGroups`),
      )),
      (e.getRightFooterGroups = z(
        () => [e.getRightHeaderGroups()],
        (e) => [...e].reverse(),
        B(e.options, V, `getRightFooterGroups`),
      )),
      (e.getFlatHeaders = z(
        () => [e.getHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        B(e.options, V, `getFlatHeaders`),
      )),
      (e.getLeftFlatHeaders = z(
        () => [e.getLeftHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        B(e.options, V, `getLeftFlatHeaders`),
      )),
      (e.getCenterFlatHeaders = z(
        () => [e.getCenterHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        B(e.options, V, `getCenterFlatHeaders`),
      )),
      (e.getRightFlatHeaders = z(
        () => [e.getRightHeaderGroups()],
        (e) => e.map((e) => e.headers).flat(),
        B(e.options, V, `getRightFlatHeaders`),
      )),
      (e.getCenterLeafHeaders = z(
        () => [e.getCenterFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        B(e.options, V, `getCenterLeafHeaders`),
      )),
      (e.getLeftLeafHeaders = z(
        () => [e.getLeftFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        B(e.options, V, `getLeftLeafHeaders`),
      )),
      (e.getRightLeafHeaders = z(
        () => [e.getRightFlatHeaders()],
        (e) =>
          e.filter((e) => {
            var t;
            return !((t = e.subHeaders) != null && t.length);
          }),
        B(e.options, V, `getRightLeafHeaders`),
      )),
      (e.getLeafHeaders = z(
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
        B(e.options, V, `getLeafHeaders`),
      )));
  },
};
function H(e, t, n, r) {
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
          let i = Xe(n, c, {
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
    t.map((e, t) => Xe(n, e, { depth: i, index: t })),
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
var U = (e, t, n, r, i, a, o) => {
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
      getLeafRows: () => qe(s.subRows, (e) => e.subRows),
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
      getAllCells: z(
        () => [e.getAllLeafColumns()],
        (t) => t.map((t) => Je(e, s, t, t.id)),
        B(e.options, `debugRows`, `getAllCells`),
      ),
      _getAllCellsByColumnId: z(
        () => [s.getAllCells()],
        (e) => e.reduce((e, t) => ((e[t.column.id] = t), e), {}),
        B(e.options, `debugRows`, `getAllCellsByColumnId`),
      ),
    };
    for (let t = 0; t < e._features.length; t++) {
      let n = e._features[t];
      n == null || n.createRow == null || n.createRow(s, e);
    }
    return s;
  },
  Qe = {
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
  $e = (e, t, n) => {
    var r, i;
    let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(
      (i = e.getValue(t)) != null &&
      (i = i.toString()) != null &&
      (i = i.toLowerCase()) != null &&
      i.includes(a)
    );
  };
$e.autoRemove = (e) => G(e);
var et = (e, t, n) => {
  var r;
  return !!(
    (r = e.getValue(t)) != null &&
    (r = r.toString()) != null &&
    r.includes(n)
  );
};
et.autoRemove = (e) => G(e);
var tt = (e, t, n) => {
  var r;
  return (
    ((r = e.getValue(t)) == null || (r = r.toString()) == null
      ? void 0
      : r.toLowerCase()) === n?.toLowerCase()
  );
};
tt.autoRemove = (e) => G(e);
var nt = (e, t, n) => e.getValue(t)?.includes(n);
nt.autoRemove = (e) => G(e) || !(e != null && e.length);
var rt = (e, t, n) =>
  !n.some((n) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(n));
  });
rt.autoRemove = (e) => G(e) || !(e != null && e.length);
var it = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
it.autoRemove = (e) => G(e) || !(e != null && e.length);
var at = (e, t, n) => e.getValue(t) === n;
at.autoRemove = (e) => G(e);
var ot = (e, t, n) => e.getValue(t) == n;
ot.autoRemove = (e) => G(e);
var st = (e, t, n) => {
  let [r, i] = n,
    a = e.getValue(t);
  return a >= r && a <= i;
};
((st.resolveFilterValue = (e) => {
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
  (st.autoRemove = (e) => G(e) || (G(e[0]) && G(e[1]))));
var W = {
  includesString: $e,
  includesStringSensitive: et,
  equalsString: tt,
  arrIncludes: nt,
  arrIncludesAll: rt,
  arrIncludesSome: it,
  equals: at,
  weakEquals: ot,
  inNumberRange: st,
};
function G(e) {
  return e == null || e === ``;
}
var ct = {
  getDefaultColumnDef: () => ({ filterFn: `auto` }),
  getInitialState: (e) => ({ columnFilters: [], ...e }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: L(`columnFilters`, e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100,
  }),
  createColumn: (e, t) => {
    ((e.getAutoFilterFn = () => {
      let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
      return typeof n == `string`
        ? W.includesString
        : typeof n == `number`
          ? W.inNumberRange
          : typeof n == `boolean` || (typeof n == `object` && n)
            ? W.equals
            : Array.isArray(n)
              ? W.arrIncludes
              : W.weakEquals;
    }),
      (e.getFilterFn = () =>
        R(e.columnDef.filterFn)
          ? e.columnDef.filterFn
          : e.columnDef.filterFn === `auto`
            ? e.getAutoFilterFn()
            : (t.options.filterFns?.[e.columnDef.filterFn] ??
              W[e.columnDef.filterFn])),
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
            a = I(n, i ? i.value : void 0);
          if (lt(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
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
          I(t, e)?.filter((e) => {
            let t = n.find((t) => t.id === e.id);
            return !(t && lt(t.getFilterFn(), e.value, t));
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
function lt(e, t, n) {
  return (
    (e && e.autoRemove ? e.autoRemove(t, n) : !1) ||
    t === void 0 ||
    (typeof t == `string` && !t)
  );
}
var ut = {
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
      if (!Ke(n)) return;
      if (n.length === 1) return n[0];
      let r = Math.floor(n.length / 2),
        i = n.sort((e, t) => e - t);
      return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
    },
    unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
    uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
    count: (e, t) => t.length,
  },
  dt = {
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
      onGroupingChange: L(`grouping`, e),
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
          if (typeof n == `number`) return ut.sum;
          if (Object.prototype.toString.call(n) === `[object Date]`)
            return ut.extent;
        }),
        (e.getAggregationFn = () => {
          if (!e) throw Error();
          return R(e.columnDef.aggregationFn)
            ? e.columnDef.aggregationFn
            : e.columnDef.aggregationFn === `auto`
              ? e.getAutoAggregationFn()
              : (t.options.aggregationFns?.[e.columnDef.aggregationFn] ??
                ut[e.columnDef.aggregationFn]);
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
function ft(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  let r = e.filter((e) => !t.includes(e.id));
  return n === `remove`
    ? r
    : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var pt = {
    getInitialState: (e) => ({ columnOrder: [], ...e }),
    getDefaultOptions: (e) => ({ onColumnOrderChange: L(`columnOrder`, e) }),
    createColumn: (e, t) => {
      ((e.getIndex = z(
        (e) => [q(t, e)],
        (t) => t.findIndex((t) => t.id === e.id),
        B(t.options, `debugColumns`, `getIndex`),
      )),
        (e.getIsFirstColumn = (n) => q(t, n)[0]?.id === e.id),
        (e.getIsLastColumn = (n) => {
          let r = q(t, n);
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
        (e._getOrderColumnsFn = z(
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
            return ft(i, t, n);
          },
          B(e.options, `debugTable`, `_getOrderColumnsFn`),
        )));
    },
  },
  mt = () => ({ left: [], right: [] }),
  ht = {
    getInitialState: (e) => ({ columnPinning: mt(), ...e }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: L(`columnPinning`, e),
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
      ((e.getCenterVisibleCells = z(
        () => [
          e._getAllVisibleCells(),
          t.getState().columnPinning.left,
          t.getState().columnPinning.right,
        ],
        (e, t, n) => {
          let r = [...(t ?? []), ...(n ?? [])];
          return e.filter((e) => !r.includes(e.column.id));
        },
        B(t.options, `debugRows`, `getCenterVisibleCells`),
      )),
        (e.getLeftVisibleCells = z(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.left],
          (e, t) =>
            (t ?? [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ({ ...e, position: `left` })),
          B(t.options, `debugRows`, `getLeftVisibleCells`),
        )),
        (e.getRightVisibleCells = z(
          () => [e._getAllVisibleCells(), t.getState().columnPinning.right],
          (e, t) =>
            (t ?? [])
              .map((t) => e.find((e) => e.column.id === t))
              .filter(Boolean)
              .map((e) => ({ ...e, position: `right` })),
          B(t.options, `debugRows`, `getRightVisibleCells`),
        )));
    },
    createTable: (e) => {
      ((e.setColumnPinning = (t) =>
        e.options.onColumnPinningChange == null
          ? void 0
          : e.options.onColumnPinningChange(t)),
        (e.resetColumnPinning = (t) =>
          e.setColumnPinning(
            t ? mt() : (e.initialState?.columnPinning ?? mt()),
          )),
        (e.getIsSomeColumnsPinned = (t) => {
          let n = e.getState().columnPinning;
          return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
        }),
        (e.getLeftLeafColumns = z(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.left],
          (e, t) =>
            (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
          B(e.options, `debugColumns`, `getLeftLeafColumns`),
        )),
        (e.getRightLeafColumns = z(
          () => [e.getAllLeafColumns(), e.getState().columnPinning.right],
          (e, t) =>
            (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean),
          B(e.options, `debugColumns`, `getRightLeafColumns`),
        )),
        (e.getCenterLeafColumns = z(
          () => [
            e.getAllLeafColumns(),
            e.getState().columnPinning.left,
            e.getState().columnPinning.right,
          ],
          (e, t, n) => {
            let r = [...(t ?? []), ...(n ?? [])];
            return e.filter((e) => !r.includes(e.id));
          },
          B(e.options, `debugColumns`, `getCenterLeafColumns`),
        )));
    },
  },
  K = { size: 150, minSize: 20, maxSize: 2 ** 53 - 1 },
  gt = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: !1,
    columnSizingStart: [],
  }),
  _t = {
    getDefaultColumnDef: () => K,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: gt(),
      ...e,
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: `onEnd`,
      columnResizeDirection: `ltr`,
      onColumnSizingChange: L(`columnSizing`, e),
      onColumnSizingInfoChange: L(`columnSizingInfo`, e),
    }),
    createColumn: (e, t) => {
      ((e.getSize = () => {
        let n = t.getState().columnSizing[e.id];
        return Math.min(
          Math.max(
            e.columnDef.minSize ?? K.minSize,
            n ?? e.columnDef.size ?? K.size,
          ),
          e.columnDef.maxSize ?? K.maxSize,
        );
      }),
        (e.getStart = z(
          (e) => [e, q(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0),
          B(t.options, `debugColumns`, `getStart`),
        )),
        (e.getAfter = z(
          (e) => [e, q(t, e), t.getState().columnSizing],
          (t, n) =>
            n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0),
          B(t.options, `debugColumns`, `getAfter`),
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
              bt(a) && a.touches && a.touches.length > 1)
            )
              return;
            let o = e.getSize(),
              s = e
                ? e
                    .getLeafHeaders()
                    .map((e) => [e.column.id, e.column.getSize()])
                : [[r.id, r.getSize()]],
              c = bt(a) ? Math.round(a.touches[0].clientX) : a.clientX,
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
              g = yt() ? { passive: !1 } : !1;
            (bt(a)
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
            t ? gt() : (e.initialState.columnSizingInfo ?? gt()),
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
  vt = null;
function yt() {
  if (typeof vt == `boolean`) return vt;
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
  return ((vt = e), vt);
}
function bt(e) {
  return e.type === `touchstart`;
}
var xt = {
  getInitialState: (e) => ({ columnVisibility: {}, ...e }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: L(`columnVisibility`, e),
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
    ((e._getAllVisibleCells = z(
      () => [e.getAllCells(), t.getState().columnVisibility],
      (e) => e.filter((e) => e.column.getIsVisible()),
      B(t.options, `debugRows`, `_getAllVisibleCells`),
    )),
      (e.getVisibleCells = z(
        () => [
          e.getLeftVisibleCells(),
          e.getCenterVisibleCells(),
          e.getRightVisibleCells(),
        ],
        (e, t, n) => [...e, ...t, ...n],
        B(t.options, `debugRows`, `getVisibleCells`),
      )));
  },
  createTable: (e) => {
    let t = (t, n) =>
      z(
        () => [
          n(),
          n()
            .filter((e) => e.getIsVisible())
            .map((e) => e.id)
            .join(`_`),
        ],
        (e) =>
          e.filter((e) => (e.getIsVisible == null ? void 0 : e.getIsVisible())),
        B(e.options, `debugColumns`, t),
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
function q(e, t) {
  return t
    ? t === `center`
      ? e.getCenterVisibleLeafColumns()
      : t === `left`
        ? e.getLeftVisibleLeafColumns()
        : e.getRightVisibleLeafColumns()
    : e.getVisibleLeafColumns();
}
var St = {
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
  Ct = {
    getInitialState: (e) => ({ globalFilter: void 0, ...e }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: L(`globalFilter`, e),
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
      ((e.getGlobalAutoFilterFn = () => W.includesString),
        (e.getGlobalFilterFn = () => {
          let { globalFilterFn: t } = e.options;
          return R(t)
            ? t
            : t === `auto`
              ? e.getGlobalAutoFilterFn()
              : (e.options.filterFns?.[t] ?? W[t]);
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
  wt = {
    getInitialState: (e) => ({ expanded: {}, ...e }),
    getDefaultOptions: (e) => ({
      onExpandedChange: L(`expanded`, e),
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
  Tt = 0,
  Et = 10,
  Dt = () => ({ pageIndex: Tt, pageSize: Et }),
  Ot = {
    getInitialState: (e) => ({
      ...e,
      pagination: { ...Dt(), ...e?.pagination },
    }),
    getDefaultOptions: (e) => ({ onPaginationChange: L(`pagination`, e) }),
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
            : e.options.onPaginationChange((e) => I(t, e))),
        (e.resetPagination = (t) => {
          e.setPagination(t ? Dt() : (e.initialState.pagination ?? Dt()));
        }),
        (e.setPageIndex = (t) => {
          e.setPagination((n) => {
            let r = I(t, n.pageIndex),
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
              ? Tt
              : (((n = e.initialState) == null || (n = n.pagination) == null
                  ? void 0
                  : n.pageIndex) ?? Tt),
          );
        }),
        (e.resetPageSize = (t) => {
          var n;
          e.setPageSize(
            t
              ? Et
              : (((n = e.initialState) == null || (n = n.pagination) == null
                  ? void 0
                  : n.pageSize) ?? Et),
          );
        }),
        (e.setPageSize = (t) => {
          e.setPagination((e) => {
            let n = Math.max(1, I(t, e.pageSize)),
              r = e.pageSize * e.pageIndex,
              i = Math.floor(r / n);
            return { ...e, pageIndex: i, pageSize: n };
          });
        }),
        (e.setPageCount = (t) =>
          e.setPagination((n) => {
            let r = I(t, e.options.pageCount ?? -1);
            return (
              typeof r == `number` && (r = Math.max(-1, r)),
              { ...n, pageCount: r }
            );
          })),
        (e.getPageOptions = z(
          () => [e.getPageCount()],
          (e) => {
            let t = [];
            return (
              e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t
            );
          },
          B(e.options, `debugTable`, `getPageOptions`),
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
  kt = () => ({ top: [], bottom: [] }),
  At = {
    getInitialState: (e) => ({ rowPinning: kt(), ...e }),
    getDefaultOptions: (e) => ({ onRowPinningChange: L(`rowPinning`, e) }),
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
          e.setRowPinning(t ? kt() : (e.initialState?.rowPinning ?? kt()))),
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
        (e.getTopRows = z(
          () => [e.getRowModel().rows, e.getState().rowPinning.top],
          (t, n) => e._getPinnedRows(t, n, `top`),
          B(e.options, `debugRows`, `getTopRows`),
        )),
        (e.getBottomRows = z(
          () => [e.getRowModel().rows, e.getState().rowPinning.bottom],
          (t, n) => e._getPinnedRows(t, n, `bottom`),
          B(e.options, `debugRows`, `getBottomRows`),
        )),
        (e.getCenterRows = z(
          () => [
            e.getRowModel().rows,
            e.getState().rowPinning.top,
            e.getState().rowPinning.bottom,
          ],
          (e, t, n) => {
            let r = new Set([...(t ?? []), ...(n ?? [])]);
            return e.filter((e) => !r.has(e.id));
          },
          B(e.options, `debugRows`, `getCenterRows`),
        )));
    },
  },
  jt = {
    getInitialState: (e) => ({ rowSelection: {}, ...e }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: L(`rowSelection`, e),
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
                Mt(i, t.id, r, !0, e);
              }),
              i
            );
          })),
        (e.getPreSelectedRowModel = () => e.getCoreRowModel()),
        (e.getSelectedRowModel = z(
          () => [e.getState().rowSelection, e.getCoreRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Nt(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          B(e.options, `debugTable`, `getSelectedRowModel`),
        )),
        (e.getFilteredSelectedRowModel = z(
          () => [e.getState().rowSelection, e.getFilteredRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Nt(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          B(e.options, `debugTable`, `getFilteredSelectedRowModel`),
        )),
        (e.getGroupedSelectedRowModel = z(
          () => [e.getState().rowSelection, e.getSortedRowModel()],
          (t, n) =>
            Object.keys(t).length
              ? Nt(e, n)
              : { rows: [], flatRows: [], rowsById: {} },
          B(e.options, `debugTable`, `getGroupedSelectedRowModel`),
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
          return (Mt(o, e.id, n, r?.selectChildren ?? !0, t), o);
        });
      }),
        (e.getIsSelected = () => {
          let { rowSelection: n } = t.getState();
          return Pt(e, n);
        }),
        (e.getIsSomeSelected = () => {
          let { rowSelection: n } = t.getState();
          return Ft(e, n) === `some`;
        }),
        (e.getIsAllSubRowsSelected = () => {
          let { rowSelection: n } = t.getState();
          return Ft(e, n) === `all`;
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
  Mt = (e, t, n, r, i) => {
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
        o.subRows.forEach((t) => Mt(e, t.id, n, r, i)));
  };
function Nt(e, t) {
  let n = e.getState().rowSelection,
    r = [],
    i = {},
    a = function (e, t) {
      return e
        .map((e) => {
          var t;
          let o = Pt(e, n);
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
function Pt(e, t) {
  return t[e.id] ?? !1;
}
function Ft(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let i = !0,
    a = !1;
  return (
    e.subRows.forEach((e) => {
      if (
        (!a || i) &&
        (e.getCanSelect() && (Pt(e, t) ? (a = !0) : (i = !1)),
        e.subRows && e.subRows.length)
      ) {
        let n = Ft(e, t);
        n === `all` ? (a = !0) : (n === `some` && (a = !0), (i = !1));
      }
    }),
    i ? `all` : a ? `some` : !1
  );
}
var It = /([0-9]+)/gm,
  Lt = (e, t, n) =>
    Wt(J(e.getValue(n)).toLowerCase(), J(t.getValue(n)).toLowerCase()),
  Rt = (e, t, n) => Wt(J(e.getValue(n)), J(t.getValue(n))),
  zt = (e, t, n) =>
    Ut(J(e.getValue(n)).toLowerCase(), J(t.getValue(n)).toLowerCase()),
  Bt = (e, t, n) => Ut(J(e.getValue(n)), J(t.getValue(n))),
  Vt = (e, t, n) => {
    let r = e.getValue(n),
      i = t.getValue(n);
    return r > i ? 1 : r < i ? -1 : 0;
  },
  Ht = (e, t, n) => Ut(e.getValue(n), t.getValue(n));
function Ut(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function J(e) {
  return typeof e == `number`
    ? isNaN(e) || e === 1 / 0 || e === -1 / 0
      ? ``
      : String(e)
    : typeof e == `string`
      ? e
      : ``;
}
function Wt(e, t) {
  let n = e.split(It).filter(Boolean),
    r = t.split(It).filter(Boolean);
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
var Y = {
    alphanumeric: Lt,
    alphanumericCaseSensitive: Rt,
    text: zt,
    textCaseSensitive: Bt,
    datetime: Vt,
    basic: Ht,
  },
  Gt = [
    Ze,
    xt,
    pt,
    ht,
    Qe,
    ct,
    St,
    Ct,
    {
      getInitialState: (e) => ({ sorting: [], ...e }),
      getDefaultColumnDef: () => ({ sortingFn: `auto`, sortUndefined: 1 }),
      getDefaultOptions: (e) => ({
        onSortingChange: L(`sorting`, e),
        isMultiSortEvent: (e) => e.shiftKey,
      }),
      createColumn: (e, t) => {
        ((e.getAutoSortingFn = () => {
          let n = t.getFilteredRowModel().flatRows.slice(10),
            r = !1;
          for (let t of n) {
            let n = t?.getValue(e.id);
            if (Object.prototype.toString.call(n) === `[object Date]`)
              return Y.datetime;
            if (typeof n == `string` && ((r = !0), n.split(It).length > 1))
              return Y.alphanumeric;
          }
          return r ? Y.text : Y.basic;
        }),
          (e.getAutoSortDir = () =>
            typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) ==
            `string`
              ? `asc`
              : `desc`),
          (e.getSortingFn = () => {
            if (!e) throw Error();
            return R(e.columnDef.sortingFn)
              ? e.columnDef.sortingFn
              : e.columnDef.sortingFn === `auto`
                ? e.getAutoSortingFn()
                : (t.options.sortingFns?.[e.columnDef.sortingFn] ??
                  Y[e.columnDef.sortingFn]);
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
    dt,
    wt,
    Ot,
    At,
    jt,
    _t,
  ];
function Kt(e) {
  let t = [...Gt, ...(e._features ?? [])],
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
        let t = I(e, n.options);
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
      _getDefaultColumnDef: z(
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
        B(e, `debugColumns`, `_getDefaultColumnDef`),
      ),
      _getColumnDefs: () => n.options.columns,
      getAllColumns: z(
        () => [n._getColumnDefs()],
        (e) => {
          let t = function (e, r, i) {
            return (
              i === void 0 && (i = 0),
              e.map((e) => {
                let a = Ye(n, e, i, r),
                  o = e;
                return (
                  (a.columns = o.columns ? t(o.columns, a, i + 1) : []), a
                );
              })
            );
          };
          return t(e);
        },
        B(e, `debugColumns`, `getAllColumns`),
      ),
      getAllFlatColumns: z(
        () => [n.getAllColumns()],
        (e) => e.flatMap((e) => e.getFlatColumns()),
        B(e, `debugColumns`, `getAllFlatColumns`),
      ),
      _getAllFlatColumnsById: z(
        () => [n.getAllFlatColumns()],
        (e) => e.reduce((e, t) => ((e[t.id] = t), e), {}),
        B(e, `debugColumns`, `getAllFlatColumnsById`),
      ),
      getAllLeafColumns: z(
        () => [n.getAllColumns(), n._getOrderColumnsFn()],
        (e, t) => t(e.flatMap((e) => e.getLeafColumns())),
        B(e, `debugColumns`, `getAllLeafColumns`),
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
function qt() {
  return (e) =>
    z(
      () => [e.options.data],
      (t) => {
        let n = { rows: [], flatRows: [], rowsById: {} },
          r = function (t, i, a) {
            i === void 0 && (i = 0);
            let o = [];
            for (let c = 0; c < t.length; c++) {
              let l = U(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
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
      B(e.options, `debugTable`, `getRowModel`, () => e._autoResetPageIndex()),
    );
}
function Jt(e, t, n) {
  return n.options.filterFromLeafRows ? Yt(e, t, n) : Xt(e, t, n);
}
function Yt(e, t, n) {
  let r = [],
    i = {},
    a = n.options.maxLeafRowFilterDepth ?? 100,
    o = function (e, s) {
      s === void 0 && (s = 0);
      let c = [];
      for (let u = 0; u < e.length; u++) {
        var l;
        let d = e[u],
          f = U(n, d.id, d.original, d.index, d.depth, void 0, d.parentId);
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
function Xt(e, t, n) {
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
            let e = U(
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
function Zt() {
  return (e) =>
    z(
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
        return Jt(
          t.rows,
          (e) => {
            for (let t = 0; t < o.length; t++)
              if (e.columnFilters[o[t]] === !1) return !1;
            return !0;
          },
          e,
        );
      },
      B(e.options, `debugTable`, `getFilteredRowModel`, () =>
        e._autoResetPageIndex(),
      ),
    );
}
function Qt() {
  return (e) =>
    z(
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
              l = $t(t, c);
            return Array.from(l.entries()).map((t, l) => {
              let [u, d] = t,
                f = `${c}:${u}`;
              f = s ? `${s}>${f}` : f;
              let p = o(d, n + 1, f);
              p.forEach((e) => {
                e.parentId = f;
              });
              let m = n ? qe(d, (e) => e.subRows) : d,
                h = U(e, f, m[0].original, l, n, void 0, s);
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
      B(e.options, `debugTable`, `getGroupedRowModel`, () => {
        e._queue(() => {
          (e._autoResetExpanded(), e._autoResetPageIndex());
        });
      }),
    );
}
function $t(e, t) {
  let n = new Map();
  return e.reduce((e, n) => {
    let r = `${n.getGroupingValue(t)}`,
      i = e.get(r);
    return (i ? i.push(n) : e.set(r, [n]), e);
  }, n);
}
function en() {
  return (e) =>
    z(
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
      B(e.options, `debugTable`, `getSortedRowModel`, () =>
        e._autoResetPageIndex(),
      ),
    );
}
function tn(e, t) {
  return e ? (nn(e) ? F.createElement(e, t) : e) : null;
}
function nn(e) {
  return rn(e) || typeof e == `function` || an(e);
}
function rn(e) {
  return (
    typeof e == `function` &&
    (() => {
      let t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })()
  );
}
function an(e) {
  return (
    typeof e == `object` &&
    typeof e.$$typeof == `symbol` &&
    [`react.memo`, `react.forward_ref`].includes(e.$$typeof.description)
  );
}
function on(e) {
  let t = {
      state: {},
      onStateChange: () => {},
      renderFallbackValue: null,
      ...e,
    },
    [n] = F.useState(() => ({ current: Kt(t) })),
    [r, i] = F.useState(() => n.current.initialState);
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
var X = d(_(), 1),
  sn = `tvTeNwj1vLY-`,
  cn = `ZhnXk5Ms3Xo-`,
  ln = `wJ7wIpGx18c-`,
  un = `nNd9H0edV0w-`,
  dn = `gDgdjW0QKjE-`,
  fn = `WJJpD1KrDcs-`,
  Z = f(),
  pn = F.memo(function (e) {
    let {
        virtualizer: t,
        bDynamic: n,
        scrollAlign: r,
        bNativeScrollIntoView: i,
        idx: a,
        rowGap: o,
        renderItem: s,
      } = e,
      c = F.useCallback(
        (e, n, i) => (t.scrollToIndex(a, { align: r }), !0),
        [t, a, r],
      );
    return (0, Z.jsx)(v, {
      ref: n ? t.measureElement : void 0,
      navKey: `VirtualizedListIndex-${a}`,
      "data-index": a,
      fnScrollIntoViewHandler: i ? void 0 : c,
      scrollIntoViewWhenChildFocused: `force`,
      style: { width: `100%`, paddingBottom: o },
      children: s(a),
    });
  });
function mn(e) {
  return p(
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
function hn(e, t) {
  let n = e.getBoundingClientRect().top;
  return t
    ? n - t.getBoundingClientRect().top - t.clientTop + t.scrollTop
    : n + (e.ownerDocument.defaultView?.scrollY ?? 0);
}
F.forwardRef(function (e, t) {
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
      scrollAlign: p,
      bNativeScrollIntoView: h,
      bNoOverscanOffscreen: g,
      bBrowserScrollAnchoring: _,
      initialOffset: te,
      onOffsetChange: y,
      ...ne
    } = e,
    [b, re] = (0, F.useState)(d ?? f),
    [x, ie] = F.useState(),
    [S, C] = F.useState(),
    [w, T] = F.useState(),
    E = F.useRef(null),
    D = F.useCallback(
      (e) => {
        if (!e) return;
        let t = m(e, `y`),
          n = hn(e, d == `window` ? null : t),
          r = t?.getBoundingClientRect(),
          i = () => {
            (d != `window` &&
              (ie(t || void 0),
              C((e) => {
                if (!r) return;
                let t = Math.round(r.width),
                  n = Math.round(r.height);
                return e?.width == t && e?.height == n
                  ? e
                  : { width: t, height: n };
              })),
              T(n),
              d || re(t ? `element` : `window`));
          };
        g ? i() : (0, F.startTransition)(i);
      },
      [d, g],
    ),
    O = F.useRef(x);
  O.current = x;
  let ae = mn(
      F.useCallback(() => {
        if (!E.current) return;
        let e = hn(E.current, O.current);
        (0, F.startTransition)(() => {
          T(e);
        });
      }, []),
    ),
    k = ee(D, E, ae, t),
    A = {
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
      scrollAlign: p,
      bNativeScrollIntoView: h,
      bNoOverscanOffscreen: g,
      bBrowserScrollAnchoring: _,
      initialOffset: te,
      onOffsetChange: y,
    };
  return (0, Z.jsx)(v, {
    className: u,
    ref: k,
    ...ne,
    children: (0, Z.jsxs)(F.Suspense, {
      children: [
        b === `element` &&
          (0, Z.jsx)(bn, {
            ...A,
            nScrollMargin: w,
            elScrollable: x,
            rectScrollable: S,
          }),
        b === `window` && (0, Z.jsx)(yn, { ...A, nScrollMargin: w }),
      ],
    }),
  });
});
function gn(e, t, n) {
  F.useEffect(() => {
    n ||
      (0, F.startTransition)(() => {
        e.measure();
      });
  }, [e, t, n]);
}
function _n(e, t, n) {
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
function vn(e, t, n) {
  let [, r] = (0, F.useState)(0),
    i = F.useRef({ bPositionKnown: t, nMargin: n, eRowWindow: `all` });
  ((i.current.bPositionKnown = t), (i.current.nMargin = n));
  let a = F.useCallback(
    (e, t) =>
      $(e, (n, a) => {
        t(n, a);
        let { bPositionKnown: o, nMargin: s, eRowWindow: c } = i.current;
        _n(e, o, s) != c && r((e) => e + 1);
      }),
    [],
  );
  return {
    observeElementOffset: e ? a : $,
    fnGetRowWindow: (r) => {
      let a = e ? _n(r, t, n) : `all`;
      return ((i.current.eRowWindow = a), a);
    },
  };
}
function yn(e) {
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
  y();
  let p = r + i,
    { observeElementOffset: m, fnGetRowWindow: h } = vn(d, t !== void 0, a * p),
    g = b({
      count: n,
      scrollMargin: t,
      estimateSize: F.useCallback(() => p, [p]),
      measureElement: c,
      getItemKey: l,
      overscan: a,
      initialOffset: o ?? (() => window.scrollY),
      initialRect: void 0,
      observeElementOffset: m,
      observeElementRect: Sn,
      onChange(e, t) {
        s?.(e.scrollOffset);
      },
    });
  return (
    (g.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !f && t !== void 0 && e.start < (g.scrollOffset ?? 0)),
    gn(g, p, u),
    (0, Z.jsx)(xn, { ...e, virtualizer: g, eRowWindow: h(g) })
  );
}
function bn(e) {
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
    g = y(),
    { observeElementOffset: ee, fnGetRowWindow: _ } = vn(
      p,
      r !== void 0 && n !== void 0,
      s * h,
    ),
    v = ie({
      count: t,
      scrollMargin: n ?? 0,
      getScrollElement: () => (
        r &&
          v.scrollElement !== r &&
          c === void 0 &&
          (v.scrollOffset = r.scrollTop),
        r ?? null
      ),
      estimateSize: F.useCallback(() => h, [h]),
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
      observeElementOffset: ee,
      observeElementRect: Cn,
      onChange(e, t) {
        l?.(e.scrollOffset);
      },
    });
  return (
    (v.shouldAdjustScrollPositionOnItemSizeChange = (e) =>
      !m && r !== void 0 && e.start < (v.scrollOffset ?? 0)),
    gn(v, h, f),
    (0, Z.jsx)(xn, { ...e, virtualizer: v, eRowWindow: _(v) })
  );
}
function xn(e) {
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
  return (0, Z.jsx)(v, {
    "flow-children": `column`,
    navEntryPreferPosition: g.MAINTAIN_Y,
    style: { height: `${f}px`, width: `100%`, position: `relative` },
    children: (0, Z.jsx)(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        transform: `translateY( ${d}px )`,
      },
      children: u.map((e) =>
        (0, Z.jsx)(
          pn,
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
function Q(e) {
  return (...t) => {
    queueMicrotask(() => {
      (0, F.startTransition)(() => {
        e(...t);
      });
    });
  };
}
function $(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r;
  r =
    `scrollX` in n
      ? Q((r) => t(n[e.options.horizontal ? `scrollX` : `scrollY`], r))
      : Q((r) => t(n[e.options.horizontal ? `scrollLeft` : `scrollTop`], r));
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
function Sn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Q(() => t({ width: n.innerWidth, height: n.innerHeight }));
  return (
    r(),
    n.addEventListener(`resize`, r, { passive: !0 }),
    () => {
      n.removeEventListener(`resize`, r);
    }
  );
}
function Cn(e, t) {
  let n = e.scrollElement;
  if (!n) return;
  let r = Q((e) =>
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
var wn = F.createContext(void 0);
function Tn(e) {
  let { table: t, setColumnSizeOverride: n } = e,
    r = (0, F.useRef)(t);
  r.current = t;
  let i = (0, F.useMemo)(
    () => ({ table: r.current, setColumnSizeOverride: n }),
    [n],
  );
  return (0, Z.jsx)(wn.Provider, { value: i, children: e.children });
}
var En = F.forwardRef(function (e, t) {
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
      initialColumnPinning: ee,
      initialColumnVisibility: _,
      onGroupingChange: v,
      onVisibleRowsChange: te,
      renderGroup: y,
      virtualizeType: b = `element`,
    } = e,
    S = (0, F.useRef)(null),
    [C, w] = (0, F.useState)({}),
    [T, E] = (0, F.useState)({}),
    D = r.map((e) =>
      `accessorKey` in e
        ? { ...e, filterFn: C[e.accessorKey] ?? e.filterFn }
        : e,
    ),
    O = on({
      data: n,
      columns: D.map((e) => {
        let t = T[e.id];
        return (
          t === void 0 && `accessorKey` in e && (t = T[e.accessorKey]),
          (t ??= e.size),
          { ...e, size: t }
        );
      }),
      defaultColumn: { minSize: 60, maxSize: 800 },
      initialState: {
        sorting: p,
        grouping: h ?? [],
        expanded: g,
        columnPinning: ee ?? {},
        columnFilters: m,
        columnVisibility: _,
      },
      getCoreRowModel: qt(),
      getSortedRowModel: en(),
      getFilteredRowModel: Zt(),
      getGroupedRowModel: Qt(),
      columnResizeMode: `onChange`,
    }),
    { rows: ae, flatRows: k } = O.getRowModel(),
    A = ae.flatMap((e) => (e.getIsExpanded() ? [e, ...e.subRows] : e)),
    oe = O.getState().grouping;
  ((0, F.useEffect)(() => {
    v?.(oe);
  }, [v, oe]),
    (0, F.useEffect)(() => {
      te?.(A);
    }, [te, A.length]));
  let j = ie({
      count: A.length,
      scrollMargin: s,
      getScrollElement: F.useCallback(
        () => (b === `element` ? N.current : window),
        [b],
      ),
      scrollToFn(e, t, n) {
        return b === `window` ? re(e, t, n) : ne(e, t, n);
      },
      estimateSize: F.useCallback(() => c, [c]),
      overscan: u,
      initialRect: void 0,
      observeElementOffset: $,
      observeElementRect(e, t) {
        return b === `window` ? Sn(e, t) : Cn(e, t);
      },
      getItemKey(e) {
        let t = A[e];
        return `${t.parentId ?? ``}${f(e, t.original)}`;
      },
    }),
    se = (0, F.useRef)(0),
    ce = F.useMemo(() => {
      let e = O.getFlatHeaders(),
        t = {};
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        ((t[`--header-${r.id}-size`] = `${r.getSize()}px`),
          (t[`--col-${r.column.id}-size`] = `${r.column.getSize()}px`));
      }
      return ((se.current += 1), t);
    }, [O.getState().columnSizingInfo, O.getState().columnSizing, r]);
  F.useEffect(() => {
    (0, F.startTransition)(() => {
      j.measure();
    });
  }, [j, c]);
  let le = j.getVirtualItems(),
    ue = le[0]?.start ?? 0,
    de = j.getTotalSize(),
    M = ie({
      estimateSize(e) {
        return A[0]?.getVisibleCells()[e].column.getSize() ?? 0;
      },
      count: A[0]?.getVisibleCells().length ?? 0,
      overscan: 6,
      horizontal: !0,
      getScrollElement: F.useCallback(
        () => (b === `element` ? N.current : window),
        [b],
      ),
      scrollToFn(e, t, n) {
        return b === `window` ? re(e, t, n) : ne(e, t, n);
      },
      rangeExtractor(e) {
        let t = A[0]?.getVisibleCells() ?? [],
          n = new Set(x(e));
        return (
          t.forEach((e, t) => {
            e.column.getIsPinned() && n.add(t);
          }),
          Array.from(n).sort((e, t) => e - t)
        );
      },
      observeElementOffset: $,
      observeElementRect(e, t) {
        return b === `window` ? Sn(e, t) : Cn(e, t);
      },
    });
  ((0, F.useEffect)(() => {
    M.measure();
  }, [se.current]),
    (0, F.useImperativeHandle)(
      t,
      () => ({
        getData() {
          return k.map((e) => e.original);
        },
        getVisibleRows() {
          return A;
        },
        getState: O.getState,
        getColumns: O.getAllColumns,
        getColumnDefs() {
          return D;
        },
        setColumnFilters: O.setColumnFilters,
        resetColumnFilters: O.resetColumnFilters,
        setColumnFilterFnOverride: w,
        getColumnFilterFnOverride() {
          return C;
        },
        getContainerElement() {
          return N.current;
        },
        getTableElement() {
          return S.current;
        },
        scrollToColumn(e, t) {
          M.scrollToIndex(e.getIndex(), t);
        },
      }),
      [
        k,
        A,
        O.setColumnFilters,
        O.resetColumnFilters,
        O.getState,
        O.getAllColumns,
        C,
        D,
        M,
      ],
    ));
  let N = (0, F.useRef)(null),
    fe = d ? (l ?? 0) : 0,
    pe = 0,
    me = A[0]?.getVisibleCells(),
    P = M.getVirtualItems(),
    he = P[P.length - 1]?.end;
  for (let e of P) me[e.index]?.column.getIsPinned() && (pe += e.size);
  return (0, Z.jsx)(Tn, {
    table: O,
    setColumnSizeOverride: E,
    children: (0, Z.jsx)(`div`, {
      className: i,
      ref: N,
      style: {
        width: a,
        height: o,
        overflow: b === `element` ? `auto` : void 0,
        maxWidth: `fit-content`,
        scrollPadding: `${fe}px 0 0 ${pe}px`,
      },
      children: (0, Z.jsxs)(`div`, {
        role: `table`,
        ref: S,
        "aria-rowcount": n.length,
        style: {
          minHeight: de,
          width: O.getTotalSize(),
          "--virtualPos": `${ue}px`,
          ...ce,
        },
        children: [
          O.getHeaderGroups().map((e) =>
            (0, Z.jsx)(On, { group: e, sticky: d, nHeaderHeight: l }, e.id),
          ),
          le.map((e) =>
            (0, Z.jsx)(
              kn,
              {
                row: A[e.index],
                size: e.size,
                rowVirtualizer: M,
                index: e.index,
                measureRef: j.measureElement,
                scrollContainerRef: N,
                nItemHeight: c,
                renderGroup: y,
                rowEnd: he,
              },
              e.key,
            ),
          ),
        ],
      }),
    }),
  });
});
function Dn(e) {
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
function On(e) {
  let { group: t, sticky: n, nHeaderHeight: r } = e;
  return (0, Z.jsx)(`div`, {
    role: `row`,
    className: (0, X.default)(sn, cn, n && `nRvZy3XjLSM-`),
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
        (0, Z.jsx)(
          Mn,
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
var kn = F.memo(function (e) {
  let {
    row: t,
    size: n,
    rowVirtualizer: r,
    measureRef: i,
    index: a,
    nItemHeight: o,
    renderGroup: s,
  } = e;
  return (0, Z.jsx)(`div`, {
    role: `row`,
    className: (0, X.default)(sn, t.getCanExpand() && `PnluZ3Vby1E-`),
    style: {
      minHeight: t.getCanExpand() ? void 0 : `${n}px`,
      transform: `translateY(var(--virtualPos))`,
    },
    "data-even": a % 2 == 0,
    "data-index": a,
    ref: i,
    children: (0, Z.jsx)(An, {
      row: t,
      rowVirtualizer: r,
      nItemHeight: o,
      renderGroup: s,
    }),
  });
});
function An(e) {
  let { row: t, rowVirtualizer: n, renderGroup: r } = e;
  if (t.getCanExpand()) {
    let e = r ?? (() => t.groupingValue);
    return (0, Z.jsxs)(`button`, {
      className: fn,
      "aria-expanded": t.getIsExpanded(),
      onClick: t.getToggleExpandedHandler(),
      children: [(0, Z.jsx)(`div`, { className: dn }), e(t)],
    });
  }
  let i = n.getVirtualItems(),
    a = t.getVisibleCells(),
    o = 0,
    s;
  return (0, Z.jsx)(Z.Fragment, {
    children: i.map((e) => {
      let t = a[e.index],
        r = t.column.getIsPinned();
      return (
        r ? (o += e.size) : s === void 0 && (s = e.start),
        (0, Z.jsx)(
          Nn,
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
function jn(e, t) {
  let n = (0, F.useContext)(wn),
    r = e.columnDef.meta?.bGrowToFit,
    i = e.id,
    a = r ? e.getSize() : 0,
    o = e.getIsSorted();
  (0, F.useLayoutEffect)(() => {
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
function Mn(e) {
  let {
      header: t,
      prevHeader: n,
      HeaderElement: r,
      nHeaderHeight: i,
      sortDirection: a,
      strTooltip: o,
      conditionalProps: s,
    } = e,
    c = (0, F.useRef)(null);
  return (
    jn(t.column, c),
    (0, Z.jsxs)(
      r,
      {
        role: `columnheader`,
        ref: c,
        "data-pinned": !!t.column.getIsPinned(),
        className: (0, X.default)(
          un,
          r === `button` && `qpOQP81Ua-s-`,
          t.column.columnDef.meta?.headerClassname,
        ),
        style: {
          width: `var(--header-${t.id}-size)`,
          height: i === void 0 ? void 0 : `${i}px`,
          ...Dn(t.column),
        },
        ...s,
        children: [
          n?.column.getCanResize() &&
            (0, Z.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => n.column.resetSize(),
              onMouseDown: n.getResizeHandler(),
              onTouchStart: n.getResizeHandler(),
              onClick: (e) => e.stopPropagation(),
              className: (0, X.default)(`G-rrZhNh4Dc-`, `_1bituu5y854-`),
            }),
          t.isPlaceholder
            ? null
            : tn(t.column.columnDef.header, t.getContext()),
          o && (0, Z.jsx)(te, { tooltip: o }),
          a &&
            !t.column.columnDef.meta?.bDisableSortButton &&
            (0, Z.jsx)(`div`, { className: `j07R6ewhtEs-` }),
          t.column.getCanResize() &&
            (0, Z.jsx)(`div`, {
              role: `presentation`,
              onDoubleClick: () => t.column.resetSize(),
              onMouseDown: t.getResizeHandler(),
              onTouchStart: t.getResizeHandler(),
              onClick: (e) => e.stopPropagation(),
              className: (0, X.default)(
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
function Nn(e) {
  let { cell: t, rowVirtualizer: n, index: r, transform: i } = e,
    a = F.useRef(null),
    o = h(a, n.measure);
  return (
    jn(t.column, a),
    (0, Z.jsx)(`div`, {
      className: (0, X.default)(ln, t.column.columnDef.meta?.cellClassname),
      "data-index": r,
      "data-table-column-id": t.column.id,
      ref: o,
      style: {
        width: `var(--col-${t.column.id}-size)`,
        transform: i,
        ...Dn(t.column),
      },
      children: (0, Z.jsx)(Fn, {
        CellComponent: t.column.columnDef.cell,
        context: t.getContext(),
      }),
    })
  );
}
function Pn(e) {
  return tn(e.CellComponent, e.context);
}
var Fn = F.memo(Pn, (e, t) => e.context.getValue() === t.context.getValue());
export { We as i, Ge as n, Ae as r, En as t };
