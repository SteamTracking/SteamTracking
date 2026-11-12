/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import {
  At as t,
  Ct as n,
  Lt as r,
  jt as i,
  kt as a,
  tt as o,
  u as s,
} from "./chunk~01cfc309bf.js";
import {
  $b as c,
  Hx as l,
  Lb as u,
  Tl as d,
  Ux as f,
  cx as p,
} from "./main.js";
var m = e(o()),
  h = e(r()),
  g = class e {
    constructor() {
      a(this);
    }
    giveaway_id = void 0;
    seconds_until_drawing = void 0;
    rtime_start = void 0;
    rtime_end = void 0;
    closed = void 0;
    winner_count = void 0;
    BIsValid() {
      return this.giveaway_id !== void 0 && this.giveaway_id !== null;
    }
    BStarted() {
      return this.BIsValid()
        ? (this.seconds_until_drawing !== void 0 &&
            this.seconds_until_drawing >= 0) ||
            (this.winner_count !== void 0 && this.winner_count > 0)
        : !1;
    }
    clone() {
      let t = new e();
      return (
        (t.giveaway_id = this.giveaway_id),
        (t.seconds_until_drawing = this.seconds_until_drawing),
        (t.rtime_start = this.rtime_start),
        (t.rtime_end = this.rtime_end),
        (t.closed = this.closed),
        (t.winner_count = this.winner_count),
        t
      );
    }
  };
(u([t], g.prototype, `giveaway_id`, void 0),
  u([t], g.prototype, `seconds_until_drawing`, void 0),
  u([t], g.prototype, `rtime_start`, void 0),
  u([t], g.prototype, `rtime_end`, void 0),
  u([t], g.prototype, `closed`, void 0),
  u([t], g.prototype, `winner_count`, void 0));
var _ = class e {
  constructor() {
    a(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(e, t) {
    return e + `_` + t;
  }
  GetInfoByInstance(e, t) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(e, t));
  }
  GetNextDrawChangeCallback(e) {
    let t = this.m_mapNextDrawChangeCallback.get(e);
    return (
      t || ((t = new l()), this.m_mapNextDrawChangeCallback.set(e, t)), t
    );
  }
  CopyToGiveaway(e, t) {
    (t.closed != e.closed && (t.closed = e.closed),
      t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
      t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
      t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
      t.winner_count != e.winner_count && (t.winner_count = e.winner_count),
      t.seconds_until_drawing != e.seconds_until_drawing &&
        (t.seconds_until_drawing = e.seconds_until_drawing));
  }
  async ReloadGiveaway(e, t) {
    if (!e) return null;
    let n = p.STORE_BASE_URL + `prizes/nextdraw/` + e,
      r = { origin: self.origin },
      a = await m.default.get(n, { params: r }),
      o = i(() => {
        let n = this.m_mapGiveawayIDToNextDrawInfo.get(e);
        if (
          (n || ((n = new g()), this.m_mapGiveawayIDToNextDrawInfo.set(e, n)),
          this.CopyToGiveaway(a.data, n),
          t !== void 0)
        ) {
          let n = this.GetKey(e, t),
            r = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n);
          (r ||
            ((r = new g()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(n, r)),
            this.CopyToGiveaway(a.data, r));
        }
        return n;
      });
    return (this.GetNextDrawChangeCallback(e).Dispatch(o), o);
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let e = c(`giveawaynextdraw`, `application_config`);
      if (e && e.giveaway_id) {
        let t = new g();
        (this.CopyToGiveaway(e, t),
          this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(u([t], _.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  u([n], _.prototype, `CopyToGiveaway`, null));
var v = class e {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = e.s_GlobalInstance), (e.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(e, t) {
    if ((this.ClearRefreshInterval(), !e.closed)) {
      let n =
        e.seconds_until_drawing !== void 0 &&
        e.seconds_until_drawing <= 0 &&
        e.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(t, n);
    }
  }
  SetupCountDown(e, t) {
    e !== void 0 &&
      e > 0 &&
      (this.m_intervalCountDownID = window.setInterval(t, 1e3));
  }
};
(u([f], v.prototype, `ClearRefreshInterval`, null),
  u([f], v.prototype, `ClearCountDown`, null),
  u([f], v.prototype, `SetupRefreshDataInterval`, null),
  u([f], v.prototype, `SetupCountDown`, null));
function y(e, t) {
  let n = _.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.seconds_until_drawing !== void 0 &&
    (--n.seconds_until_drawing,
    n.seconds_until_drawing == 0 && t.ClearCountDown());
}
function b(e, t) {
  let n = _.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
  n &&
    n.BIsValid() &&
    n.seconds_until_drawing !== void 0 &&
    n.seconds_until_drawing <= 0 &&
    !n.closed &&
    (t.ClearCountDown(),
    _.Get()
      .ReloadGiveaway(e, t.m_myInstanceNumber)
      .then((n) => {
        n && t.SetupCountDown(n.seconds_until_drawing, () => y(e, t));
      }));
}
function x(e) {
  let [t] = (0, h.useState)(new v()),
    n = d();
  (0, h.useEffect)(
    () => (
      _.Get()
        .ReloadGiveaway(e, t.m_myInstanceNumber)
        .then((r) => {
          r &&
            (t.SetupRefreshDataInterval(r, () => b(e, t)),
            t.SetupCountDown(r.seconds_until_drawing, () => y(e, t)),
            n());
        }),
      () => {
        (t.ClearRefreshInterval(), t.ClearCountDown());
      }
    ),
    [t, e, n],
  );
  let r = _.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
    [i, a, o] = s(() => [r?.winner_count, r?.closed, r?.seconds_until_drawing]);
  return !r || r.giveaway_id == null || !r.BStarted() || i === void 0
    ? { bLoadingGiveawayInfo: !0 }
    : {
        bLoadingGiveawayInfo: !1,
        winner_count: i,
        closed: a ?? !1,
        seconds_until_drawing: o ?? -1,
      };
}
export { x as t };
