import { _ } from "./rolldown-runtime.js";
import { _, _, _, _, _, _, _ } from "./libraries.js";
import { _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = _(_()),
  _ = class _ {
    constructor() {
      _(this);
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
      let _ = new _();
      return (
        (_.giveaway_id = this.giveaway_id),
        (_.seconds_until_drawing = this.seconds_until_drawing),
        (_.rtime_start = this.rtime_start),
        (_.rtime_end = this.rtime_end),
        (_.closed = this.closed),
        (_.winner_count = this.winner_count),
        _
      );
    }
  };
(_([_], _.prototype, `giveaway_id`, void 0),
  _([_], _.prototype, `seconds_until_drawing`, void 0),
  _([_], _.prototype, `rtime_start`, void 0),
  _([_], _.prototype, `rtime_end`, void 0),
  _([_], _.prototype, `closed`, void 0),
  _([_], _.prototype, `winner_count`, void 0));
var _ = class _ {
  constructor() {
    _(this);
  }
  m_mapGiveawayIDToNextDrawInfo = new Map();
  m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
  m_bLoadedFromConfig = !1;
  m_mapNextDrawChangeCallback = new Map();
  GetKey(_, _) {
    return _ + `_` + _;
  }
  GetInfoByInstance(_, _) {
    return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(this.GetKey(_, _));
  }
  GetNextDrawChangeCallback(_) {
    let _ = this.m_mapNextDrawChangeCallback.get(_);
    return (
      _ || ((_ = new _()), this.m_mapNextDrawChangeCallback.set(_, _)), _
    );
  }
  CopyToGiveaway(_, _) {
    (_.closed != _.closed && (_.closed = _.closed),
      _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
      _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
      _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
      _.winner_count != _.winner_count && (_.winner_count = _.winner_count),
      _.seconds_until_drawing != _.seconds_until_drawing &&
        (_.seconds_until_drawing = _.seconds_until_drawing));
  }
  async ReloadGiveaway(_, _) {
    if (!_) return null;
    let _ = _.STORE_BASE_URL + `prizes/nextdraw/` + _,
      _ = {
        origin: self.origin,
      },
      _ = await _.default.get(_, {
        params: _,
      }),
      _ = _(() => {
        let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
        if (
          (_ || ((_ = new _()), this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
          this.CopyToGiveaway(_.data, _),
          _ !== void 0)
        ) {
          let _ = this.GetKey(_, _),
            _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
          (_ ||
            ((_ = new _()),
            this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
            this.CopyToGiveaway(_.data, _));
        }
        return _;
      });
    return (this.GetNextDrawChangeCallback(_).Dispatch(_), _);
  }
  static s_Singleton;
  static Get() {
    return (
      _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
      _.s_Singleton
    );
  }
  Init() {
    if (!this.m_bLoadedFromConfig) {
      let _ = _(`giveawaynextdraw`, `application_config`);
      if (_ && _.giveaway_id) {
        let _ = new _();
        (this.CopyToGiveaway(_, _),
          this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _));
      }
      this.m_bLoadedFromConfig = !0;
    }
  }
};
(_([_], _.prototype, `m_mapGiveawayIDToNextDrawInfo`, void 0),
  _([_], _.prototype, `CopyToGiveaway`, null));
var _ = class _ {
  m_intervalID;
  m_intervalCountDownID;
  static s_GlobalInstance = 0;
  m_myInstanceNumber = 0;
  constructor() {
    ((this.m_myInstanceNumber = _.s_GlobalInstance), (_.s_GlobalInstance += 1));
  }
  ClearRefreshInterval() {
    this.m_intervalID &&= (window.clearInterval(this.m_intervalID), void 0);
  }
  ClearCountDown() {
    this.m_intervalCountDownID &&=
      (window.clearInterval(this.m_intervalCountDownID), void 0);
  }
  SetupRefreshDataInterval(_, _) {
    if ((this.ClearRefreshInterval(), !_.closed)) {
      let _ =
        _.seconds_until_drawing !== void 0 &&
        _.seconds_until_drawing <= 0 &&
        _.winner_count == 0
          ? 6e4
          : 5e3;
      this.m_intervalID = window.setInterval(_, _);
    }
  }
  SetupCountDown(_, _) {
    _ !== void 0 &&
      _ > 0 &&
      (this.m_intervalCountDownID = window.setInterval(_, 1e3));
  }
};
(_([_], _.prototype, `ClearRefreshInterval`, null),
  _([_], _.prototype, `ClearCountDown`, null),
  _([_], _.prototype, `SetupRefreshDataInterval`, null),
  _([_], _.prototype, `SetupCountDown`, null));
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.seconds_until_drawing !== void 0 &&
    (--_.seconds_until_drawing,
    _.seconds_until_drawing == 0 && _.ClearCountDown());
}
function _(_, _) {
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
  _ &&
    _.BIsValid() &&
    _.seconds_until_drawing !== void 0 &&
    _.seconds_until_drawing <= 0 &&
    !_.closed &&
    (_.ClearCountDown(),
    _.Get()
      .ReloadGiveaway(_, _.m_myInstanceNumber)
      .then((_) => {
        _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
      }));
}
function _(_) {
  let [_] = (0, _.useState)(new _()),
    _ = _();
  (0, _.useEffect)(
    () => (
      _.Get()
        .ReloadGiveaway(_, _.m_myInstanceNumber)
        .then((_) => {
          _ &&
            (_.SetupRefreshDataInterval(_, () => _(_, _)),
            _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
            _());
        }),
      () => {
        (_.ClearRefreshInterval(), _.ClearCountDown());
      }
    ),
    [_, _, _],
  );
  let _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
    [_, _, _] = _(() => [_?.winner_count, _?.closed, _?.seconds_until_drawing]);
  return {
    bLoadingGiveawayInfo:
      !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0,
    winner_count: _,
    closed: _,
    seconds_until_drawing: _,
  };
}
