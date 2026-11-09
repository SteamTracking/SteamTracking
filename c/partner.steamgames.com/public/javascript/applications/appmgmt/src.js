import { _, _, _, _, _, _, _, _, _ } from "./mobx.esm.js";
function _(_, _ = 0, _ = Math.random) {
  if (_?.length > 1) {
    let _ = _ > 0 ? Math.min(_, _.length) : _.length;
    for (; _ !== 0;) {
      let _ = Math.floor(_() * _);
      --_;
      let _ = _[_];
      ((_[_] = _[_]), (_[_] = _));
    }
  }
  return _;
}
function _(_, _) {
  let _ = _.slice();
  return (_(_), _.slice(0, _));
}
function _(_, _, _) {
  if (_ >= 0 && _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 && (_.splice(_, 1), !0);
}
function _(_, _) {
  let _ = 0,
    _ = _.length - 1;
  for (; _ <= _;) {
    let _ = Math.floor((_ + _) / 2),
      _ = _(_[_]);
    if (_ > 0) _ = _ + 1;
    else if (_ < 0) _ = _ - 1;
    else {
      if (_ == _) return _;
      if (_ == _) return _ > _ && _(_[_ + 1]) < 0 ? _ : _ + 1;
      _ = _;
    }
  }
  return _;
}
function _(_, _, _) {
  let _ = _(_, (_) => _(_, _));
  _.splice(_ + 1, 0, _);
}
function _(_, _, _) {
  return _
    ? _.length < _
      ? _.concat(Array(_ - _.length).fill(_))
      : _
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function _(_) {
  return Array.from(new Set(_));
}
function _(_, _) {
  let _ = Math.min(_.length, _.length);
  return Array.from(
    {
      length: _,
    },
    (_, _) => [_[_], _[_]],
  );
}
function _(_, _) {
  return _.reduce((_, _) => (_.set(_(_), _), _), new Map());
}
function _(_, _, _ = !0) {
  return !_ || _.length == 0
    ? _
    : _
      ? _.sort((_, _) => (_ == _ ? 0 : _ ? (_ < _ ? -1 : 1) : _ > _ ? -1 : 1))
      : _.sort((_, _) => {
          let _ = _.toLowerCase(),
            _ = _.toLowerCase();
          return _ == _ ? 0 : _ ? (_ < _ ? -1 : 1) : _ > _ ? -1 : 1;
        });
}
function _(_) {
  return _.filter((_) => _ != null);
}
function _(_, _, _) {
  return {
    get() {
      let _ = _.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, _) ||
          Object.defineProperty(this, _, {
            value: _,
          }),
        _
      );
    },
  };
}
var _ = class {
    m_vecCallbacks = [];
    Register(_) {
      return (
        this.m_vecCallbacks.push(_),
        {
          Unregister: () => {
            _(this.m_vecCallbacks, _);
          },
        }
      );
    }
    Dispatch(..._) {
      for (let _ of Array.from(this.m_vecCallbacks)) _(..._);
    }
    ClearAllCallbacks() {
      this.m_vecCallbacks = [];
    }
    CountRegistered() {
      return this.m_vecCallbacks.length;
    }
    static PromiseFromAny(_) {
      return new Promise((_) => {
        let _ = [],
          _ = () => {
            (_.forEach((_) => _.Unregister()), _());
          };
        for (let _ of _) _.push(_.Register(_));
      });
    }
  },
  _ = _((_, _) => {
    (function () {
      var _ = {}.hasOwnProperty;
      function _() {
        for (var _ = ``, _ = 0; _ < arguments.length; _++) {
          var _ = arguments[_];
          _ && (_ = _(_, _(_)));
        }
        return _;
      }
      function _(_) {
        if (typeof _ == `string` || typeof _ == `number`) return _;
        if (typeof _ != `object`) return ``;
        if (Array.isArray(_)) return _.apply(null, _);
        if (
          _.toString !== Object.prototype.toString &&
          !_.toString.toString().includes(`[native code]`)
        )
          return _.toString();
        var _ = ``;
        for (var _ in _) _.call(_, _) && _[_] && (_ = _(_, _));
        return _;
      }
      function _(_, _) {
        return _ ? (_ ? _ + ` ` + _ : _ + _) : _;
      }
      _ !== void 0 && _.exports
        ? ((_.default = _), (_.exports = _))
        : typeof define == `function` &&
            typeof define.amd == `object` &&
            define.amd
          ? define(`classnames`, [], function () {
              return _;
            })
          : (window.classNames = _);
    })();
  }),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = class {
    m_sName;
    m_fnIdGenerator = void 0;
    constructor(_, _) {
      ((this.m_sName = _),
        (this.m_fnIdGenerator = _),
        _.Get().RegisterLogName(_));
    }
    Debug(..._) {
      this.Log(0, ..._);
    }
    Info(..._) {
      this.Log(1, ..._);
    }
    Warning(..._) {
      this.Log(2, ..._);
    }
    Error(..._) {
      this.Log(3, ..._);
    }
    Assert(_, ..._) {
      _ || this.Log(3, `Assertion failed:`, ..._);
    }
    IsDebugEnabled() {
      return _.Get().IsDebugLogEnabled(this.m_sName);
    }
    Log(_, ..._) {
      let _ = _.Get().IsDebugLogEnabled(this.m_sName);
      if (_ == 0 && !_) return;
      let _ = this.m_sName,
        _ = this.m_fnIdGenerator?.() ?? null;
      _ != null && (_ += ` (` + _ + `)`);
      let _ = _.Get().IncludeBacktraceInLog,
        _ = _.Get().AllowCSSInLogStyling;
      _(_, _, _, _, _, this.m_sName, ..._);
    }
  };
(_([_], _.prototype, `Debug`, null),
  _([_], _.prototype, `Info`, null),
  _([_], _.prototype, `Warning`, null),
  _([_], _.prototype, `Error`, null),
  _([_], _.prototype, `Assert`, null));
var _ = class _ {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new _();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(..._) {
    _(
      1,
      !0,
      this.IncludeBacktraceInLog,
      this.AllowCSSInLogStyling,
      `LogManager`,
      `LogManager`,
      ..._,
    );
  }
  async LoadSettings() {
    let _ = (_, _) => {
      try {
        let _ = localStorage.getItem(_);
        return _ ? JSON.parse(_) : _;
      } catch {
        return _;
      }
    };
    ((this.m_bIncludeBacktraceInLog = !!_(
      _.k_IncludeBacktraceInLog_StorageKey,
      !1,
    )),
      (this.m_bAllowCSSInLogStyling = !!_(
        _.k_AllowCSSInLogColors_StorageKey,
        !0,
      )));
    let _ = _(_.k_EnabledLogNames_StorageKey, void 0);
    if (Array.isArray(_)) {
      this.m_setEnabledDebugLogs = new Set(_);
      for (let _ of _) this.m_setKnownDebugLogs.add(_);
      this.LogAsLogManager(
        `Loaded debug enabled log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    ((this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch());
  }
  async SaveSettings() {
    (localStorage.setItem(
      _.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        _.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      localStorage.setItem(
        _.k_AllowCSSInLogColors_StorageKey,
        JSON.stringify(this.m_bAllowCSSInLogStyling),
      ),
      this.LogAsLogManager(
        `Saved enabled debug log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  PrintEnabledLogs(..._) {
    (_ &&
      _.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${_.join(`', '`)}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        `Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  static Get() {
    return (
      globalThis.g_LogManager ?? (globalThis.g_LogManager = new _()),
      globalThis.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(_) {
    this.m_setKnownDebugLogs.add(_);
  }
  IsLogName(_) {
    return this.m_setKnownDebugLogs.has(_);
  }
  IsDebugLogEnabled(_) {
    return this.m_setEnabledDebugLogs.has(_);
  }
  async ToggleDebugLogEnabled(_) {
    this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
  }
  async SetDebugLogEnabled(_, _) {
    this.IsLogName(_)
      ? (_
          ? this.m_setEnabledDebugLogs.add(_)
          : this.m_setEnabledDebugLogs.delete(_),
        this.m_SettingsChangedCallback.Dispatch(),
        await this.SaveSettings())
      : console.warn(
          `No log named "${_}", available logs:`,
          this.GetLogNames(),
        );
  }
  async SetDebugLogsEnabled(_, ..._) {
    _.forEach((_) => this.SetDebugLogEnabled(_, _));
  }
  async SetAllDebugLogsEnabled(_) {
    ((this.m_setEnabledDebugLogs = _
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  RegisterForSettingsChanges(_) {
    return this.m_SettingsChangedCallback.Register(_);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(_) {
    ((this.m_bIncludeBacktraceInLog = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  get AllowCSSInLogStyling() {
    return this.m_bAllowCSSInLogStyling;
  }
  async SetAllowCSSInLogStyling(_) {
    ((this.m_bAllowCSSInLogStyling = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function _(_) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  return [(_ | 0) & 255, (_ >> 8) & 255, (_ >> 16) & 255];
}
function _(_) {
  return (_[0] * 299 + _[1] * 587 + _[2] * 114) / 1e3 >= 128;
}
function _(_) {
  switch (_) {
    case 0:
      return String.fromCodePoint(128027);
    case 1:
      return String.fromCodePoint(8505);
    case 2:
      return String.fromCodePoint(9888);
    case 3:
      return String.fromCodePoint(128165);
  }
}
function _(_, _, _, _, _, _, ..._) {
  let _ = _;
  _ && (_ = _(_) + ` ` + _);
  let _;
  if (_ && _) {
    let _ = _(_).map((_, _) =>
        Math.round(
          Math.max(0, Math.min(255, ((_ / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      _ = _(_),
      _ = _.length >= 1 && typeof _[0] == `string` && _[0].includes(`%c`),
      _ = _ && _.shift();
    _ = [
      `%c${_}%c:${_ ? ` %c` + _ : ``}`,
      `color: ${_ ? `black` : `white`}; background: rgb(${_.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(_ ? [``] : []),
      ..._,
    ];
  } else _ = [`${_}:`, ..._];
  if (_)
    (console.groupCollapsed(..._),
      console.trace(`Callstack`),
      console.groupEnd());
  else
    switch (_) {
      case 0:
      case 1:
        console.log(..._);
        break;
      case 2:
        console.warn(..._);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ..._) : console.error(..._);
    }
}
((window.DebugLogEnable = (..._) => _.Get().SetDebugLogsEnabled(!0, ..._)),
  (window.DebugLogDisable = (..._) => _.Get().SetDebugLogsEnabled(!1, ..._)),
  (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () => _.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    _.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => _.Get().GetLogNames()),
  (window.DebugLogEnabled = (..._) => _.Get().PrintEnabledLogs(..._)),
  (window.EnableSteamConsole = (_ = !0) =>
    _.Get().SetDebugLogEnabled(`SteamClient`, _)));
var _ = (function (_) {
  return (
    (_[(_.INVALID = 0)] = `INVALID`),
    (_[(_._ = 1)] = `OK`),
    (_[(_.CANCEL = 2)] = `CANCEL`),
    (_[(_.SECONDARY = 3)] = `SECONDARY`),
    (_[(_.OPTIONS = 4)] = `OPTIONS`),
    (_[(_.BUMPER_LEFT = 5)] = `BUMPER_LEFT`),
    (_[(_.BUMPER_RIGHT = 6)] = `BUMPER_RIGHT`),
    (_[(_.TRIGGER_LEFT = 7)] = `TRIGGER_LEFT`),
    (_[(_.TRIGGER_RIGHT = 8)] = `TRIGGER_RIGHT`),
    (_[(_.DIR_UP = 9)] = `DIR_UP`),
    (_[(_.DIR_DOWN = 10)] = `DIR_DOWN`),
    (_[(_.DIR_LEFT = 11)] = `DIR_LEFT`),
    (_[(_.DIR_RIGHT = 12)] = `DIR_RIGHT`),
    (_[(_.SELECT = 13)] = `SELECT`),
    (_[(_.START = 14)] = `START`),
    (_[(_.LSTICK_CLICK = 15)] = `LSTICK_CLICK`),
    (_[(_.RSTICK_CLICK = 16)] = `RSTICK_CLICK`),
    (_[(_.LSTICK_TOUCH = 17)] = `LSTICK_TOUCH`),
    (_[(_.RSTICK_TOUCH = 18)] = `RSTICK_TOUCH`),
    (_[(_.LPAD_TOUCH = 19)] = `LPAD_TOUCH`),
    (_[(_.LPAD_CLICK = 20)] = `LPAD_CLICK`),
    (_[(_.RPAD_TOUCH = 21)] = `RPAD_TOUCH`),
    (_[(_.RPAD_CLICK = 22)] = `RPAD_CLICK`),
    (_[(_.REAR_LEFT_UPPER = 23)] = `REAR_LEFT_UPPER`),
    (_[(_.REAR_LEFT_LOWER = 24)] = `REAR_LEFT_LOWER`),
    (_[(_.REAR_RIGHT_UPPER = 25)] = `REAR_RIGHT_UPPER`),
    (_[(_.REAR_RIGHT_LOWER = 26)] = `REAR_RIGHT_LOWER`),
    (_[(_.STEAM_GUIDE = 27)] = `STEAM_GUIDE`),
    (_[(_.STEAM_QUICK_MENU = 28)] = `STEAM_QUICK_MENU`),
    (_[(_.DUMMY_INPUT = 29)] = `DUMMY_INPUT`),
    _
  );
})({});
function _(_, _) {
  _ != null &&
    (typeof _ == `function` ? _(_) : `current` in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (_ && _.length !== 0)
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == `function` ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    (_.current && _.current(), (_.current = _(_)));
  }, _);
}
function _(_) {
  let _ = _.useRef(null);
  return {
    refWithValue: _,
    refForElement: _(_, _),
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  (_.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]));
}
function _(_) {
  return typeof _ == `object` && !!_ && `value` in _;
}
function _(_, _) {
  return _(_) && _(_)
    ? _.value === _.value &&
        !!_.bShowOnLeft == !!_.bShowOnLeft &&
        !!_.bShowOnFloatingVRFooter == !!_.bShowOnFloatingVRFooter
    : _ === _;
}
var _ = (function (_) {
  return (
    (_[(_.GAMEPAD = 0)] = `GAMEPAD`),
    (_[(_.KEYBOARD = 1)] = `KEYBOARD`),
    (_[(_.APPLICATION = 2)] = `APPLICATION`),
    (_[(_.BROWSER = 3)] = `BROWSER`),
    (_[(_.AUTOFOCUS = 4)] = `AUTOFOCUS`),
    _
  );
})({});
(_._, _.CANCEL, _.SECONDARY, _.OPTIONS, _.START);
function _(_, _, _) {
  return (_.addEventListener(_, _), () => _(_, _, _));
}
function _(_, _, _) {
  _.removeEventListener(_, _);
}
function _(_, _) {
  return _(_, `vgp_onbuttondown`, _);
}
function _(_, _) {
  return _(_, `vgp_onbuttonup`, _);
}
function _(_, _) {
  return _(_, `vgp_onok`, _(_));
}
function _(_, _) {
  return _(_, `vgp_oncancel`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onsecondaryaction`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onoptions`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onmenu`, _(_));
}
function _(_, _) {
  return _(_, `vgp_ondirection`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onfocus`, _);
}
function _(_, _) {
  return _(_, `vgp_onblur`, _);
}
function _(_, _) {
  return _(_, `vgp_requestfocus`, _(_));
}
function _(_) {
  return (_) => {
    _(_) !== !1 && (_.stopPropagation(), _.preventDefault());
  };
}
function _(_) {
  let {
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
    } = _,
    _ = {
      ..._,
    };
  return (
    _ !== void 0 && (_[_._] = _),
    _ !== void 0 && (_[_.CANCEL] = _),
    _ !== void 0 && (_[_.SECONDARY] = _),
    _ !== void 0 && (_[_.OPTIONS] = _),
    _ !== void 0 && (_[_.START] = _),
    _
  );
}
var _ = _(),
  _ = new _(`FocusHistory`),
  _ = _.Debug,
  _ = class _ {
    m_root;
    constructor(_) {
      this.m_root = _;
    }
    static SerializeNavState(_, _ = !0, _ = !0) {
      return {
        root: _.SerializeNavNode(_, _, _),
        bHadFocus: _.BFocusWithin() && _.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(_, _ = !0, _ = !0) {
      let _,
        [_, _] = _.GetChildren();
      _.length &&
        _ != -1 &&
        _ &&
        (_ = _.map((_, _) => _.SerializeNavNode(_, _ == _ || _, _)));
      let _ = {
        rgChildren: _,
      };
      return (
        _.NavKey && (_.sNavKey = _.NavKey), _ != -1 && (_.iActiveChild = _), _
      );
    }
    static RestoreSerializedNavState(_, _, _ = 0) {
      let { root: _, bHadFocus: _ } = _;
      _.Tree.Controller.RestoreHistoryTransaction(() => {
        (_.RestoreSerializedNavNode(_, _),
          (_ == 1 || (_ == 0 && _)) && _.BTakeFocus(_.APPLICATION));
      });
    }
    static RestoreSerializedNavNode(_, _, _ = 0) {
      let { sNavKey: _, iActiveChild: _ = -1, rgChildren: _ } = _;
      (_ && _(_ == _.NavKey, `navkey mismatch`), _.SetActiveChild(_));
      let _ = _.IsDebugEnabled() ? `[${_.Tree._}]${_(_)}` : ``;
      if (_ && _.length) {
        let [_] = _.GetChildren();
        if (_ != -1 && _.IsDebugEnabled()) {
          let _ = _.length != _.length;
          _(
            `${_}Restoring node ${_.NavKey} which had active child ${_} of ${_.length}${_ ? `- now ${_.length} children.` : ``}`,
          );
        }
        let _ = new Map();
        _.forEach((_) => {
          _.NavKey && _.set(_.NavKey, _);
        });
        for (let _ of _) {
          if (!_.sNavKey) continue;
          let _ = _.get(_.sNavKey);
          _ && _.RestoreSerializedNavNode(_, _, _ + 1);
        }
        if (_ != -1 && _[_]?.sNavKey) {
          let _ = _.get(_[_].sNavKey);
          (_(
            `${_}Restoring node ${_.NavKey}, child with focus: ${_[_].sNavKey} ${_ === void 0 ? `MISSING!!` : ``}`,
          ),
            _ && _.SetActiveChild(_.indexOf(_)));
        }
        let _ = 0,
          _ = 0;
        for (; _ < _.length && _ < _.length;) {
          for (; _ < _.length && _[_].NavKey;) _++;
          for (; _ < _.length && _[_].sNavKey;) _++;
          if (_ >= _.length || _ >= _.length) break;
          (_.RestoreSerializedNavNode(_[_], _[_], _ + 1), _++, _++);
        }
      }
    }
  };
function _(_) {
  return _.SerializeNavState(_, !0, !1);
}
function _(_, _, _ = 0) {
  return _.RestoreSerializedNavState(_, _, _);
}
var _ = class extends _ {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(_.SerializeNavState(this.m_root));
    }
    PopState(_ = 0) {
      this.m_rgHistory.length &&
        _.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), _);
    }
  },
  _ = class extends _ {
    m_mapHistory = new Map();
    SaveState(_) {
      this.m_mapHistory.set(_, _.SerializeNavState(this.m_root));
    }
    RestoreState(_, _ = 0) {
      let _ = this.m_mapHistory.get(_);
      return _
        ? (console.log(`Restoring history for state ${_}`),
          _.RestoreSerializedNavState(this.m_root, _, _),
          !0)
        : !1;
    }
  };
function _(_) {
  if (_ == 0) return ``;
  let _ = ``;
  for (let _ = 0; _ < _; _++) _ += `*`;
  return ((_ += ` `), _);
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_) {
  let _;
  return (_ && (_ = _.ownerDocument.defaultView), _);
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _;) {
    if (_(_)) {
      let _ = window.getComputedStyle(_);
      if (
        _.position == `fixed` ||
        _.position == `sticky` ||
        ((!_ || _ == `x`) &&
          (_.overflowX == `scroll` || _.overflowX == `auto`)) ||
        ((!_ || _ == `y`) && (_.overflowY == `scroll` || _.overflowY == `auto`))
      )
        break;
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  let _ = _;
  for (; _;) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function _(_, _) {
  if (!(`ownerDocument` in _)) return !0;
  let _ = _.ownerDocument.defaultView.getComputedStyle(_),
    _ = _ === `x` ? _.overflowX : _.overflowY;
  return _ === `auto` || _ === `scroll`;
}
var _ = {
  _: `y`,
  _: `x`,
};
function _() {
  return {
    _: 0,
    _: 0,
  };
}
function _(_, _) {
  return _._ * _._ + _._ * _._;
}
function _(_, _) {
  return {
    _: _._ - _._,
    _: _._ - _._,
  };
}
function _(_, _) {
  let _ = _(_, _);
  return Math.sqrt(_(_, _));
}
var _ = class {
  SyncStore(_) {
    return this.Subscribe(_).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
(_([_], _.prototype, `SyncStore`, null), _([_], _.prototype, `GetValue`, null));
var _ = class extends _ {},
  _ = class extends _ {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(_, _) {
      (super(),
        (this.m_callbacks = new _()),
        (this.m_currentValue = _),
        (this.m_fnEquals = _));
    }
    Set(_) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, _)) return !1;
      } else if (this.m_currentValue === _) return !1;
      return ((this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0);
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(_) {
      return {
        Unsubscribe: this.m_callbacks.Register(_).Unregister,
      };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function _(_, _) {
  return new _(_, _);
}
var _ = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(_, _) {
    (this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _)));
  }
  AsyncSchedule(_, _) {
    return new Promise((_, _) => {
      (this.Schedule(_, () => {
        (_(), _());
      }),
        (this.m_fnOnCancel = _));
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let _ = this.m_fnOnCancel;
      (clearTimeout(this.m_schTimer), this.Reset(), _ && _());
    }
  }
  Reset() {
    ((this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0));
  }
  ScheduledInternal() {
    let _ = this.m_fnCallback;
    (this.Reset(), _?.());
  }
};
_([_], _.prototype, `ScheduledInternal`, null);
var _ = class {
    m_rgListeners = [];
    AddEventListener(_, _, _) {
      (_.addEventListener(_, _),
        this.m_rgListeners.push({
          element: _,
          type: _,
          listener: _,
        }));
    }
    Unregister() {
      for (let _ of this.m_rgListeners)
        _.element.removeEventListener(_.type, _.listener);
      this.m_rgListeners = [];
    }
  },
  _ = class {
    m_vecCallbacks = [];
    Push(_) {
      this.m_vecCallbacks.push(_);
    }
    PushArrayRemove(_, _) {
      this.m_vecCallbacks.push(() => _(_, _));
    }
    Unregister() {
      for (let _ of this.m_vecCallbacks) _();
      this.m_vecCallbacks = [];
    }
    GetUnregisterFunc() {
      return this.Unregister;
    }
  };
_([_], _.prototype, `Unregister`, null);
function _(_, _, _) {
  return _ == null || _ == null
    ? _ === _
    : typeof _ != `object` ||
        typeof _ != `object` ||
        Object.keys(_).length !== Object.keys(_).length
      ? !1
      : ((_ ??= (_, _) => _ === _),
        Object.keys(_).every((_) => _.hasOwnProperty(_) && _(_[_], _[_])));
}
function _(_, _) {
  let _ = _.lastIndexOf(`.`);
  if (_ == -1) return !1;
  let _ = _.substring(0, _),
    _ = _.substring(_ + 1),
    _ = _(_, _);
  return _ !== null && typeof _[_] == `function`;
}
function _(_) {
  return _(window, _);
}
function _(_, _) {
  let _ = (_) => _ && typeof _ == `object`,
    _ = _?.SteamClient;
  for (let _ of _.split(`.`)) {
    if (!_(_) || !(_ in _)) return null;
    _ = _[_];
  }
  return _(_) ? _ : null;
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_) {
  if (!_.clientX && !_.clientY && !_.screenX && !_.screenY) return !0;
  if (_.relatedTarget) return !_(_.currentTarget, _.relatedTarget);
  {
    let _ = _.currentTarget.getBoundingClientRect();
    return _.clientX <= _.left ||
      _.clientX >= _.right ||
      _.clientY <= _.top ||
      _.clientY >= _.bottom
      ? (console.log(`${_.clientX} <= ${_.left} || ${_.clientX} >= ${_.right} ||
				${_.clientY} <= ${_.top} || ${_.clientY} >= ${_.bottom}`),
        !0)
      : !1;
  }
}
function _(_, _) {
  let _ = _;
  for (; _;) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function _(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != `HTML`;) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function _(_) {
  let _;
  return (
    _ && _(_.currentTarget) && (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function _(_) {
  let _;
  return (_ && (_ = _.ownerDocument.defaultView), _);
}
function _(_) {
  let _ = window.top ?? window,
    _ = _.document,
    _ = _.createElement(`textarea`);
  ((_.textContent = _),
    (_.style.position = `fixed`),
    _.body.appendChild(_),
    _.select());
  try {
    if (
      (_(_, `Browser.NotifyUserActivation`) &&
        _.SteamClient.Browser.NotifyUserActivation(),
      !_.execCommand(`copy`))
    )
      throw `document.execCommand false`;
  } catch (_) {
    console.warn(`Copy to clipboard failed.`, _);
  } finally {
    _.body.removeChild(_);
  }
}
function _(_) {
  (_.startsWith(`steam://openurl/`) && (_ = _.slice(16)), _(_));
}
function _(_) {
  let _ = _.ownerDocument;
  return !!(
    _.fullscreen ||
    _.webkitIsFullScreen ||
    _.mozFullScreen ||
    _.msFullscreenElement
  );
}
function _(_, _) {
  let _ = _;
  return _.requestFullscreen
    ? (_.requestFullscreen(), !0)
    : _.webkitRequestFullscreen
      ? (_.webkitRequestFullscreen(), !0)
      : _ && _.webkitSetPresentationMode
        ? (_.webkitSetPresentationMode(`fullscreen`), !0)
        : _.mozRequestFullScreen
          ? (_.mozRequestFullScreen(), !0)
          : _.msRequestFullscreen
            ? (_.msRequestFullscreen(), !0)
            : !1;
}
function _(_) {
  let _ = _.ownerDocument;
  _.exitFullscreen
    ? _.exitFullscreen()
    : _.cancelFullscreen
      ? _.cancelFullscreen()
      : _.webkitCancelFullScreen
        ? _.webkitCancelFullScreen()
        : _.mozCancelFullScreen
          ? _.mozCancelFullScreen()
          : _.msExitFullscreen && _.msExitFullscreen();
}
function _(_, _) {
  let _ = _;
  return (
    (_.lastModifiedDate = new Date()), (_.name = _ || Date.now().toString()), _
  );
}
function _(_, _, _) {
  let _ = _.parentElement;
  for (; _ && _ !== _ && !_.hasAttribute(_);) _ = _.parentElement;
  return _ || _;
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _;) {
    if (_(_)) {
      if (!_ || _ == `x`) {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowX == `scroll` ||
          _.overflowX == `auto` ||
          _.position == `fixed`
        )
          break;
      }
      if (!_ || _ == `y`) {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowY == `scroll` ||
          _.overflowY == `auto` ||
          _.position == `fixed`
        )
          break;
      }
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  let _ = _;
  for (; _;) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function _() {
  return _(document);
}
function _(_) {
  let _ = {};
  return (
    _.querySelectorAll(`link[rel="stylesheet"]`).forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function _(_, _) {
  _(_.document, _, !0);
}
function _(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName(`head`)[0],
    _ = _.getElementsByTagName(`link`),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement(`link`);
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return (_.prepend(..._), _);
}
function _(_, _, _) {
  if (_.type === `childList`) {
    for (let _ = 0; _ < _.addedNodes.length; _++) {
      let _ = _.addedNodes[_];
      if (_.nodeType === Node.ELEMENT_NODE) {
        let _ = _;
        _.parentElement && _(_);
      }
    }
    for (let _ = 0; _ < _.removedNodes.length; _++) {
      let _ = _.removedNodes[_];
      _.nodeType === Node.ELEMENT_NODE && _?.(_);
    }
  }
}
function _(_, _, _) {
  let _ = [],
    [_, _] = _.GetChildren(),
    _ = _.GetActiveChild(),
    _,
    _ = _ ? _.Element?.getBoundingClientRect() : null;
  if (_) {
    let _ = _(_, _, _);
    if (
      _ &&
      !_.offScreen &&
      ((_ = _(_, _, _.overlap, _)), _ && !_.visibility.offScreen)
    )
      return _;
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  let _ = _ || _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == _) continue;
    let _ = _(_, _, _ ?? void 0);
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  _.sort(_);
  let _;
  for (let _ of _) {
    let { child: _, visibility: _ } = _;
    if (
      _.offScreen &&
      _ &&
      (!_.visibility.offScreen ||
        (_.distance && _.distance > _.visibility.distance))
    )
      break;
    let _ = _ == _ ? _ : _(_, _, _.overlap || _, _ ?? void 0);
    _ && (!_ || _(_, _) < 0) && (_ = _);
  }
  return _;
}
function _(_, _, _, _) {
  switch (_.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return _(_, _.overlap || _, _);
    case `self`:
      return {
        child: _,
        visibility: _,
      };
  }
}
function _(_, _) {
  let _ = _.visibility,
    _ = _.visibility;
  return _.offScreen
    ? _.offScreen
      ? _.distance - _.distance
      : 1
    : _.offScreen
      ? -1
      : _.distance - _.distance;
}
function _(_, _, _) {
  let _ = _.Element?.getBoundingClientRect(),
    _ = _.GetFocusable(),
    _;
  if (_ == `none` || !_ || !_) return null;
  if (_ == `self`) {
    if (
      _.top < _.top ||
      _.right > _.right ||
      _.bottom > _.bottom ||
      _.left < _.left
    ) {
      let _ = _.top + _.height / 2,
        _ = _.left + _.width / 2;
      if (_ < _.top)
        return {
          offScreen: `top`,
          distance: _.top - _,
        };
      if (_ > _.right)
        return {
          offScreen: `right`,
          distance: _ - _.right,
        };
      if (_ > _.bottom)
        return {
          offScreen: `bottom`,
          distance: _ - _.bottom,
        };
      if (_ < _.left)
        return {
          offScreen: `left`,
          distance: _.left - _,
        };
    }
    _ && (_ = _(_, _));
  } else if (_ == `children`) {
    let _ = _.Element;
    if (!_) return null;
    if (_.scrollHeight > _.height || _.scrollWidth > _.width) {
      let _ = _.ownerDocument.defaultView.getComputedStyle(_);
      if (_.overflowX == `visible` || _.overflowY == `visible`)
        return {
          overlap: _,
        };
    }
    if (_.bottom < _.top)
      return {
        offScreen: `top`,
        distance: _.top - _.bottom,
      };
    if (_.left > _.right)
      return {
        offScreen: `right`,
        distance: _.left - _.right,
      };
    if (_.top > _.bottom)
      return {
        offScreen: `bottom`,
        distance: _.top - _.bottom,
      };
    if (_.right < _.left)
      return {
        offScreen: `left`,
        distance: _.left - _.right,
      };
  }
  return {
    overlap: {
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    },
    distance: _,
  };
}
var _ = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(_, _) {
      ((this.m_window = _),
        (this.m_options = {
          timing: `sine`,
          ..._,
        }));
    }
    Start() {
      ((this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration));
      let _;
      switch (this.m_options.timing) {
        case `linear`:
          _ = function (_) {
            return _;
          };
          break;
        case `cubic-in-out`:
          _ = function (_) {
            return _ < 0.5
              ? 4 * _ * _ * _
              : (_ - 1) * (2 * _ - 2) * (2 * _ - 2) + 1;
          };
          break;
        default:
          _ = function (_) {
            return 0.5 - Math.cos(_ * Math._) / 2;
          };
      }
      ((this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, _)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc));
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        (this.ClearInterval(), this.FireOnComplete());
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(_) {
      if (!this.m_bActive) return;
      let _ = performance.now() - this.m_msStart;
      if (_ >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let _ = _ / this.m_options.msDuration;
      try {
        this.Update(_(_));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  _ = class extends _ {
    m_fnCallback;
    constructor(_, _, _) {
      (super(_, _), (this.m_fnCallback = _));
    }
    Update(_) {
      this.m_fnCallback(_);
    }
  },
  _ = class extends _ {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      (super(`ownerDocument` in _ ? _(_) : _, _),
        (this.m_object = _),
        (this.m_propTargets = _));
    }
    Start() {
      this.m_props = {};
      for (let _ in this.m_propTargets) {
        let _ = parseFloat(this.m_object[_]) || 0,
          _ = this.m_propTargets[_];
        _ != _ &&
          (this.m_props[_] = {
            start: _,
            end: _,
          });
      }
      super.Start();
    }
    Update(_) {
      for (let _ in this.m_props) {
        let _ = this.m_props[_],
          _ = _.start + (_.end - _.start) * _;
        this.m_object[_] = _;
      }
    }
  },
  _ = new _(`ScrollSnap`).Debug,
  _,
  _ = 500;
function _(_, _, _, _, _) {
  let _ = _.Element;
  if (!_) return;
  let _ = [
    {
      node: _,
      eScrollType: _.m_Properties?.scrollIntoViewType,
    },
  ];
  for (let _ = _.Parent; _; _ = _.Parent) {
    let _ = _.m_Properties?.scrollIntoViewWhenChildFocused,
      _ = _.m_Properties?.scrollIntoViewType;
    if (_) {
      let _ = {
        node: _,
        eScrollType: _,
      };
      _ === `force` ? (_ = [_]) : _.push(_);
    }
    if (_ !== void 0)
      for (let _ = _.length - 1; _ >= 0 && _[_].eScrollType === void 0; _--)
        _[_].eScrollType = _;
  }
  for (; _.length;) {
    let { node: _, eScrollType: _ } = _.pop(),
      _ = _.length == 0;
    if (
      (_ === void 0 && (_ = _.Standard),
      _?.m_Properties?.fnScrollIntoViewHandler &&
        _.m_Properties.fnScrollIntoViewHandler(_, _, _) !== !1)
    )
      continue;
    let _ = _.m_element,
      _ = _ == _.NoTransform || _ == _.NoTransformSparseContent || !_;
    if (!_ && _ !== _.GAMEPAD)
      (_(`No previous element for scrolling, will jump`),
        _
          ? _(_, _, `auto`)
          : (_(`Scrolling Into View ('auto' via browser scrollIntoView):`, _),
            _?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            })));
    else {
      let _ = _ ? _(_) : _.getBoundingClientRect(),
        _ = _.ownerDocument.defaultView.innerHeight,
        _ = _ ? 40 : Math.max(_ * 0.4, 40),
        _ = !1,
        _ = _ && performance.now() - _ < _;
      (_ || _.bottom < -_ || _.top > _ + _) &&
        ((_ = !0),
        _ ||
          _(
            `Disabling smooth scrolling, ${_.bottom} < ${-_}, ${_.top} > ${_} + ${_} `,
          ));
      let _ = _ ? `auto` : `smooth`;
      (_ && (_ = performance.now()),
        _.Tree.Controller.BIsRestoringHistory() && (_ = `auto`),
        _
          ? _(_, _, _)
          : (_(`Scrolling Into View ('${_}' via browser scrollIntoView):`, _),
            _.scrollIntoView({
              behavior: _,
              block: `nearest`,
            })));
    }
  }
  _(_, _);
}
function _(_, _) {
  let _ = _(_);
  if (!_) return;
  let _ = null;
  for (let _ = _; _; _ = _.GetNavParentCrossingTrees())
    _.m_Properties?.scrollRegionToStartOrEnd && (_ = _);
  if (_)
    for (
      let _ = _;
      _ &&
      !(
        _.BHasNavTargetInDirection(_, !0) ||
        (_ != _ &&
          _.Element &&
          _.m_Properties?.scrollRegionToStartOrEnd &&
          _(_.Element, _, _, _ == _.Tree.Root),
        _ == _)
      );
      _ = _.GetNavParentCrossingTrees()
    );
}
function _(_, _, _, _) {
  let _ = _,
    _ = _.ownerDocument;
  if (
    ((_ || _ == _.body) && _.defaultView && !_(_, _) && (_ = _.defaultView),
    !_(_, _))
  )
    return;
  let _ = _(_);
  if (_ == `y`) {
    let _ = _ == _.DIR_DOWN ? _.MaxScrollTop() : 0;
    _.scrollTo({
      top: _,
      behavior: `smooth`,
    });
  } else {
    let _ = _ == _.DIR_RIGHT ? _.MaxScrollLeft() : 0;
    _.scrollTo({
      left: _,
      behavior: `smooth`,
    });
  }
}
function _(_) {
  if (!_)
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: _.innerWidth,
      top: 0,
      bottom: _.innerHeight,
    };
  let _ = 0,
    _ = 0,
    _ = _;
  for (; _;) {
    if (`ownerDocument` in _) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    ((_ += _.offsetTop), (_ += _.offsetLeft), (_ = _.offsetParent));
  }
  for (_ = _?.parentElement; _;) {
    let { scrollTop: _, scrollLeft: _ } = _(_);
    if (((_ -= _), (_ -= _), `ownerDocument` in _)) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    _ = _.parentElement;
  }
  return {
    left: _,
    top: _,
    right: _ + _.offsetWidth,
    bottom: _ + _.offsetHeight,
  };
}
function _(_, _) {
  return _ == `x`
    ? [_.left, _.right, _.right - _.left]
    : [_.top, _.bottom, _.bottom - _.top];
}
function _(_, _, _, _) {
  let [_, _, _] = _(_, _),
    [_, _, _] = _(_, _),
    [_, _] = _(_, _);
  if (_ < _ && _ > _) return 0;
  let _ = _ - _,
    _ = _ + _,
    _ = _ > _;
  return (_ < _ && !_) || (_ > _ && _)
    ? _ - _
    : (_ < _ && _) || (_ > _ && !_)
      ? _ - _
      : 0;
}
function _(_) {
  return _ == `auto`
    ? 0
    : _.endsWith(`px`)
      ? parseInt(_)
      : (console.log(`Unsupported length`, _), 0);
}
function _(_) {
  let _;
  return (
    (_ =
      `ownerDocument` in _
        ? _.ownerDocument.defaultView.getComputedStyle(_)
        : _.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: _(_.scrollPaddingLeft),
      right: _(_.scrollPaddingRight),
      top: _(_.scrollPaddingTop),
      bottom: _(_.scrollPaddingBottom),
    }
  );
}
function _(_) {
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  let _ = _.ownerDocument.defaultView.getComputedStyle(_);
  return {
    left: _(_.scrollMarginLeft),
    right: _(_.scrollMarginRight),
    top: _(_.scrollMarginTop),
    bottom: _(_.scrollMarginBottom),
  };
}
function _(_, _) {
  let _ = _(_);
  return {
    left: Math.max(0, _.left + _.left),
    right: Math.max(0, _.right - _.right),
    top: Math.max(0, _.top + _.top),
    bottom: Math.max(0, _.bottom - _.bottom),
  };
}
function _(_) {
  return _ > -1 && _ < 1;
}
function _(_, _, _, _, _) {
  (_(
    `----------------------------------------------------------------------------------`,
  ),
    _(`Scrolling Into View (NoTransform):`, _));
  let _ = [],
    _ = _,
    _ = _(_),
    _ = _ ?? Number.MAX_VALUE;
  for (; _;) {
    let _ = _(_);
    _ ||= _(_);
    let _ = _(_),
      _ = _(_),
      _ = _(_, _),
      _ = _(_),
      _ = {
        element: _,
        left: 0,
        top: 0,
      };
    if (
      (_(
        `Checking scroll div`,
        _,
        `scroll y:${_.scrollTop} of ${_.MaxScrollTop()}, x:${_.scrollLeft} of ${_.MaxScrollLeft()}, adjusted =>`,
        _,
        `target => `,
        _,
      ),
      (!_ || _ == `y`) &&
        _(_, `y`) &&
        ((_.top = _(_, _, _, `y`)),
        (_.top = _(_.top, -_.scrollTop, _.MaxScrollTop() - _.scrollTop)),
        _ &&
          ((_.top = Math.min(_, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
          (_ -= Math.abs(_.top))),
        _(`- checked y: ${_.top}`)),
      (!_ || _ == `x`) &&
        _(_, `x`) &&
        ((_.left = _(_, _, _, `x`)),
        (_.left = _(_.left, -_.scrollLeft, _.MaxScrollLeft() - _.scrollLeft)),
        _ &&
          ((_.left = Math.min(_, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
          (_ -= Math.abs(_.left))),
        _(`- checked x: ${_.left}`)),
      _.push(_),
      (_ && !_) || !(`ownerDocument` in _))
    )
      break;
    let _ = window.getComputedStyle(_);
    if (_.position === `fixed` || _.position === `sticky`) break;
    ((_ = _),
      (_ = {
        top: _.top - _.top,
        right: _.right - _.left,
        bottom: _.bottom - _.top,
        left: _.left - _.left,
      }));
  }
  let _ = !1;
  for (let _ of _) {
    if (_(_.left) && _(_.top)) continue;
    let _ = _(_.element),
      _ = _.scrollTop + _.top,
      _ = _.scrollLeft + _.left;
    ((_ = _(_, 0, _.MaxScrollLeft())),
      (_ = _(_, 0, _.MaxScrollTop())),
      !(_(_.scrollLeft - _) && _(_.scrollTop - _)) &&
        (_.scrollTo({
          left: _,
          top: _,
          behavior: _,
        }),
        (_ ||= (_(`Scrolling:`), !0)),
        _(`- ${_.top},${_.left} => ${_}, ${_}, behavior: ${_}`, _.element)));
  }
}
var _ = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(_) {
    `ownerDocument` in _
      ? ((this.m_element = _),
        (this.m_fnOriginalScrollTo = _.scrollTo),
        (this.m_element.scrollTo = (_, _) => {
          typeof _ == `number`
            ? this.scrollTo({
                left: _,
                top: _,
              })
            : this.scrollTo(_);
        }))
      : ((this.m_window = _), (this.m_element = _.document.documentElement));
  }
  ResetScrollState() {
    ((this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = ``));
  }
  scrollTo(_) {
    if (_?.behavior != `smooth`)
      ((this.m_animation &&= (this.m_animation.Cancel(), void 0)),
        this.m_window
          ? this.m_window.scrollTo(_)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [_]),
        this.ResetScrollState());
    else {
      let _ = _.left ?? this.scrollLeft,
        _ = _.top ?? this.scrollTop,
        _ = `sine`;
      if (
        (this.m_animation && (this.m_animation.Cancel(), (_ = `linear`)),
        Math.max(
          Math.abs(this.currentScrollTop - _),
          Math.abs(this.currentScrollLeft - _),
        ) > 0)
      ) {
        let _ = {
          msDuration: 200,
          timing: _,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let _ = this.currentScrollLeft,
            _ = this.currentScrollTop;
          this.m_animation = new _(this.m_window, _, (_) => {
            this.m_window?.scrollTo({
              left: _ + (_ - _) * _,
              top: _ + (_ - _) * _,
              behavior: `auto`,
            });
          });
        } else
          ((this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new _(
              this.m_element,
              {
                scrollTop: _,
                scrollLeft: _,
              },
              _,
            )));
        ((this.m_scrollLeftTarget = _),
          (this.m_scrollTopTarget = _),
          this.m_animation.Start());
      }
    }
  }
  get clientWidth() {
    return this.m_window
      ? this.m_window.innerWidth
      : this.m_element.clientWidth;
  }
  get clientHeight() {
    return this.m_window
      ? this.m_window.innerHeight
      : this.m_element.clientHeight;
  }
  get currentScrollLeft() {
    return this.m_window ? this.m_window.scrollX : this.m_element.scrollLeft;
  }
  get currentScrollTop() {
    return this.m_window ? this.m_window.scrollY : this.m_element.scrollTop;
  }
  get scrollLeft() {
    return this.m_scrollLeftTarget ?? this.currentScrollLeft;
  }
  get scrollTop() {
    return this.m_scrollTopTarget ?? this.currentScrollTop;
  }
  get scrollWidth() {
    return this.m_element.scrollWidth;
  }
  get scrollHeight() {
    return this.m_element.scrollHeight;
  }
  MaxScrollTop() {
    return this.scrollHeight - this.clientHeight;
  }
  MaxScrollLeft() {
    return this.scrollWidth - this.clientWidth;
  }
};
_([_], _.prototype, `ResetScrollState`, null);
var _ = new WeakMap();
function _(_) {
  let _ = _.get(_);
  return (_ || ((_ = new _(_)), _.set(_, _)), _);
}
function _(_) {
  let _ = _.get(_);
  return _
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      };
}
var _ = new _(`FocusNavigationMovement`),
  _ = _.Debug,
  _ = (function (_) {
    return (
      (_[(_.NONE = 0)] = `NONE`),
      (_[(_.COLUMN = 1)] = `COLUMN`),
      (_[(_.ROW = 2)] = `ROW`),
      (_[(_.COLUMN_REVERSE = 3)] = `COLUMN_REVERSE`),
      (_[(_.ROW_REVERSE = 4)] = `ROW_REVERSE`),
      (_[(_.GRID = 5)] = `GRID`),
      (_[(_.GEOMETRIC = 6)] = `GEOMETRIC`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.FIRST = 0)] = `FIRST`),
      (_[(_.LAST = 1)] = `LAST`),
      (_[(_.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (_[(_.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (_[(_.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.Standard = 0)] = `Standard`),
      (_[(_.NoTransform = 1)] = `NoTransform`),
      (_[(_.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.INVALID = 0)] = `INVALID`),
      (_[(_.FORWARD = 1)] = `FORWARD`),
      (_[(_.BACKWARD = 2)] = `BACKWARD`),
      _
    );
  })({}),
  _ = class _ {
    m_Tree;
    m_Parent;
    m_rgChildren = [];
    m_ActiveChild;
    m_iLastActiveChildIndex = -1;
    m_Properties;
    m_element;
    m_FocusRing;
    m_bChildrenSorted = !1;
    m_bAutoFocusChild = !1;
    m_bMounted = !1;
    m_nDepth;
    m_Focused = _(!1);
    m_FocusWithin = _(!1);
    m_ActionDescriptionsChangedCallbackList = new _();
    m_FocusableIfEmptyAncestor = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(_, _, _) {
      ((this.m_Tree = _),
        (this.m_Parent = _),
        (this.m_FocusRing = _),
        (this.m_nDepth = _ ? _.m_nDepth + 1 : 0));
    }
    CreateHandle() {
      return new _(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      if (this.m_Properties?.navKey) return this.m_Properties.navKey;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    GetNavParentCrossingTrees() {
      return this.m_Parent
        ? this.m_Parent
        : this.m_Tree.GetParentEmbeddedNavTree() && this.Element
          ? (this.Element.__nav_wrapper ?? null)
          : null;
    }
    GetWrappedTree() {
      return null;
    }
    SetProperties(_) {
      let _ = !_(
          this.m_Properties?.actionDescriptionMap,
          _?.actionDescriptionMap,
          _,
        ),
        _ = this.m_Properties?.focusableIfEmpty,
        _ = this.m_Properties?.noFocusRing;
      ((this.m_Properties = _ || {}),
        _ && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !_
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            _ &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !_ && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(_.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            _ &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(_.APPLICATION, this, this),
        this.m_element && this.RegisterDOMEvents());
    }
    BWantsAutoFocus() {
      return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
    }
    BWantsPreferredFocus() {
      return this.m_Properties?.preferredFocus;
    }
    BWantsFocusRing() {
      return (
        !this.m_Properties?.noFocusRing ||
        this.m_Tree.Controller.GetShowDebugFocusRing().Value
      );
    }
    GetBoundingRect() {
      return this.m_element?.getBoundingClientRect();
    }
    GetElementForFocusRingMeasure() {
      let _ = this.m_element;
      return this.m_Properties?.focusRingSizeElementID
        ? (_?.ownerDocument?.getElementById(
            this.m_Properties.focusRingSizeElementID,
          ) ?? _)
        : _;
    }
    GetBoundingRectForFocusRing() {
      return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
    }
    GetBorderRadiusForFocusRing() {
      if (!this.m_Properties?.focusRingHasBorderRadius) return;
      let _ = this.GetElementForFocusRingMeasure();
      if (!_) return;
      let _ = _.ownerDocument?.defaultView?.getComputedStyle(_);
      if (_)
        return {
          borderTopLeftRadius: _.borderTopLeftRadius,
          borderTopRightRadius: _.borderTopRightRadius,
          borderBottomRightRadius: _.borderBottomRightRadius,
          borderBottomLeftRadius: _.borderBottomLeftRadius,
        };
    }
    SetHasFocus(_) {
      this.m_Focused.Set(_);
    }
    SetFocusWithin(_) {
      this.m_FocusWithin.Set(_) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(_);
    }
    get SubscribableHasFocus() {
      return this.m_Focused;
    }
    BHasFocus() {
      return this.m_Focused.Value;
    }
    get SubscribableFocusWithin() {
      return this.m_FocusWithin;
    }
    BFocusWithin() {
      return this.m_FocusWithin.Value;
    }
    ForceMeasureFocusRing() {
      this.m_FocusRing?.OnForceMeasureFocusRing();
    }
    get ActionDescriptionChangedCallbackList() {
      return this.m_ActionDescriptionsChangedCallbackList;
    }
    GetActiveActionDescriptions() {
      return this.BuildConsolidatedActionDescriptionMap({});
    }
    BuildConsolidatedActionDescriptionMap(_) {
      let _ = this.m_Properties?.actionDescriptionMap;
      if (_)
        for (let _ in _) {
          let _ = _;
          _[_] === void 0 && (_[_] = _[_]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(_)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(_)
          : _;
    }
    AddChild(_) {
      (this.m_rgChildren.push(_),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? _.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            _.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          _.BFocusWithin() &&
          (_(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1)));
    }
    OnMount(_) {
      ((this.m_element = _),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : _(this == this.m_Tree.Root, `Only root should have no parent`),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents());
      let _ =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        _ = this.m_Properties?.autoFocus || _;
      if (this.BWantsAutoFocus() || _) {
        let _ = -1;
        (this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (_ = this.m_rgChildren.findIndex((_) => _.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || _ || _ !== -1) &&
            (this.SetActiveChild(_),
            !this.m_Parent || this.m_Parent.m_element
              ? _
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    {
                      bFocusDescendant: !0,
                    },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0)));
      } else if (this.m_rgChildren.length) {
        let _ = this.m_rgChildren.findIndex((_) => _.BFocusWithin());
        _ != -1 &&
          (this.SetActiveChild(_),
          _(
            this.BFocusWithin(),
            `Child has focus, we should be m_bFocusWithin`,
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      (this.m_Properties?.focusableIfEmpty &&
        this.PropagateFocusableIfEmptyAncestorToDescendants(
          this.m_FocusableIfEmptyAncestor,
        ),
        (this.m_bMounted = !1));
      let _ = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      ((this.BHasFocus() || _) &&
        (_(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        _ && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(_.APPLICATION, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : _(this == this.m_Tree.Root, `Only root should have no parent`));
    }
    RegisterDOMEvents() {
      (!this.m_rgNavigationHandlers.length &&
        this.m_element &&
        (this.m_rgChildren.length >= 2 ||
          this.m_Properties?.layout != 0 ||
          this.m_Properties.onMoveUp ||
          this.m_Properties.onMoveRight ||
          this.m_Properties.onMoveDown ||
          this.m_Properties.onMoveLeft) &&
        this.m_rgNavigationHandlers.push(
          _(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfEmpty ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener(`focus`, this.OnDOMFocus),
            this.m_element?.addEventListener(`blur`, this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              (this.m_element?.removeEventListener(`focus`, this.OnDOMFocus),
                this.m_element?.removeEventListener(`blur`, this.OnDOMBlur));
            }))));
    }
    RemoveChild(_) {
      let _ = this.m_rgChildren.indexOf(_);
      (_(_ !== -1, `Child was not found to remove`),
        _ !== -1 &&
          (this.m_ActiveChild == _ && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(_, 1)));
    }
    UnregisterDOMEvents() {
      (this.m_rgNavigationHandlers.forEach((_) => _()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((_) => _()),
        (this.m_rgFocusHandlers = []));
    }
    GetActiveDescendant() {
      let _ = this.GetActiveChild();
      return _ ? _.GetActiveDescendant() : this;
    }
    IsValidChildIndex(_) {
      return _ >= 0 && _ < this.m_rgChildren.length;
    }
    GetActiveChild() {
      return this.m_ActiveChild
        ? this.m_ActiveChild
        : (this.EnsureChildrenSorted(),
          this.IsValidChildIndex(this.m_iLastActiveChildIndex)
            ? this.m_rgChildren[this.m_iLastActiveChildIndex]
            : null);
    }
    GetActiveChildIndex() {
      if (this.m_ActiveChild) {
        if (
          this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
          this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
        )
          return this.m_iLastActiveChildIndex;
        this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
          this.m_ActiveChild,
        );
      }
      return this.m_iLastActiveChildIndex;
    }
    EnsureChildrenSorted(_ = !1) {
      (!this.m_bChildrenSorted || _) &&
        (this.m_rgChildren.sort((_, _) => {
          let _ = _.m_element,
            _ = _.m_element;
          if (!_ || !_.isConnected) return !_ || !_.isConnected ? 0 : 1;
          if (!_ || !_.isConnected) return -1;
          let _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : _ & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 0;
        }),
        this.m_ActiveChild &&
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
            this.m_ActiveChild,
          )),
        (this.m_bChildrenSorted = !0));
    }
    GetLastFocusElement() {
      let _ = this.GetActiveChild();
      return _ ? _.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(_) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == `children`) {
          let _ = this.FindFocusableDescendant();
          if (_ && _ !== this) {
            (_(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              _.m_element,
            ),
              this.m_Tree.TransferFocus(_.BROWSER, _));
            return;
          }
        }
        this.m_Tree.TransferFocus(_.BROWSER, this);
      }
    }
    OnDOMBlur(_) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(_.BROWSER, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: _,
        focusableIfEmpty: _,
        childFocusDisabled: _,
        fnCanTakeFocus: _,
      } = this.m_Properties;
      return !this.m_bMounted || (_ && !_(this))
        ? `none`
        : _ || (_ && (_ || this.m_rgChildren.length == 0))
          ? `self`
          : !_ && this.m_rgChildren.length
            ? `children`
            : `none`;
    }
    BTakeFocus(_, _) {
      let _ = this.FindFocusableNode(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    FindFocusableNode(_, _) {
      switch (this.GetFocusable()) {
        case `none`:
          return null;
        case `self`:
          return this;
        case `children`:
          return this.FindFocusableDescendant(_, _);
      }
    }
    BChildTakeFocus(_, _) {
      let _ = this.FindFocusableDescendant(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    BFocusFirstChild(_) {
      let _ = this.FindNextFocusableChildInDirection(-1, 1, _.INVALID);
      return this.InternalFocusDescendant(_, _);
    }
    BFocusLastChild(_) {
      let _ = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        _.INVALID,
      );
      return this.InternalFocusDescendant(_, _);
    }
    FindFocusableDescendant(_, _) {
      let _ = _(_),
        { focusableIfEmpty: _, childFocusDisabled: _ } =
          this.m_Properties ?? {};
      if (_) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: _, resetNavOnEntry: _ } =
            this.m_Properties ?? {},
          _ = this.GetActiveChildIndex();
        _ && _ !== void 0 && (_ = -1);
        let _ = this.GetLayout();
        this.IsValidChildIndex(_) ||
          (_ =
            _ >= this.m_rgChildren.length || _ == 4 || _ == 3 || _ == 1
              ? this.m_rgChildren.length - 1
              : 0);
        let _, _;
        if (
          (_ == 2 ? (_ = `x`) : _ == 3 ? (_ = `y`) : _ == 6 && _ && (_ = _[_]),
          (_ || _) && _)
        ) {
          let _ = this.m_Tree.GetLastFocusedNode();
          if (_ || (_ && _ == _[_])) {
            let _ =
              _ ||
              this.AdjustRectForLastMovementOnTangentAxis(
                _.GetBoundingRect(),
                _,
              );
            (_(
              `Taking focus while preserving ${_ && _[_]} preserved: ${_} movement: ${_}, node:`,
              _,
            ),
              (_ = this.FindClosestFocusableNodeToRect(_, _)));
          } else if (_ != _[_]) {
            let _ = this.ComputeRelativeDirection(_, 5),
              _ = _ == 2 ? this.m_rgChildren.length : -1;
            _ = this.FindNextFocusableChildInDirection(_, _, _);
          }
        } else if (_ == 4) {
          let _ = this.m_rgChildren;
          for (; _.length;) {
            let _ = [];
            for (let _ of _) {
              if (
                ((_ = _.BWantsPreferredFocus()
                  ? _.FindFocusableNode(_)
                  : void 0),
                _)
              )
                return _;
              _.push(..._.m_rgChildren);
            }
            _ = _;
          }
        } else
          _ == 1 && (_ = this.FindNextFocusableChildInDirection(_ + 1, 2, _));
        return (
          (_ ||= this.FindNextFocusableChildInDirection(_ - 1, 1, _)),
          (_ ||= this.FindNextFocusableChildInDirection(_, 2, _)),
          _ || (_ ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(_) {
      let _ = this.Element?.ownerDocument?.defaultView ?? window,
        _ = {
          top: 0,
          left: 0,
          right: _.innerWidth,
          bottom: _.innerHeight,
        },
        _ = _(this, _);
      return (
        _(
          `Focusing visible child, best child match is ${_?.child?.Element?.className} - ${JSON.stringify(_?.visibility)}`,
        ),
        _ ? _.child.BTakeFocus(_) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : _(this.m_element);
    }
    OnNavigationEvent(_) {
      let _ = _.detail.button;
      if (this.BTryInternalNavigation(_, _.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: _,
          onMoveRight: _,
          onMoveDown: _,
          onMoveLeft: _,
        } = this.m_Properties ?? {},
        _ = !1;
      switch (_) {
        case _.DIR_UP:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_RIGHT:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_DOWN:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_LEFT:
          _ && (_ = _(_.detail, this));
      }
      return _;
    }
    InternalFocusDescendant(_, _, _) {
      return _ ? (this.m_Tree.TransferFocus(_, _, _, !1), !0) : !1;
    }
    BHasNavTargetInDirection(_, _) {
      if (this.HasMovementHandler(_)) return !0;
      let _ = this.FindNextFocusableChild(_);
      if (_ && _) {
        let _ = _.GetWrappedTree();
        if (_ && _.GetExcludeFromScrollRegionSearch()) return !1;
        for (let _ = _; _ && _ != this; _ = _.m_Parent)
          if (_.m_Properties?.excludeFromScrollRegionSearch) return !1;
      }
      return !!_;
    }
    HasMovementHandler(_) {
      switch (_) {
        case _.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case _.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case _.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case _.DIR_RIGHT:
          return !!this.m_Properties?.onMoveRight;
      }
      return !1;
    }
    FindNextFocusableChild(_) {
      let _ = this.GetLayout(),
        _ = this.ComputeRelativeDirection(_, _);
      if (_ == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
        return null;
      if ((this.EnsureChildrenSorted(!0), _ == 5))
        return this.FindNextFocusableChildInGrid(
          this.GetActiveChildIndex(),
          _,
          _,
        );
      if (_ == 6) return this.FindNextFocusableChildGeometric(_, _);
      let _ = this.GetActiveChildIndex();
      return (
        this.IsValidChildIndex(_) ||
          (_ = _ == 1 ? -1 : this.m_rgChildren.length),
        this.FindNextFocusableChildInDirection(_, _, _)
      );
    }
    BTryInternalNavigation(_, _) {
      _(
        `Handling navigation event ${_[_]} - ${_[this.GetLayout()]}`,
        this.m_element,
      );
      let _ = this.FindNextFocusableChild(_);
      if (!_) return !1;
      let _ = _(_),
        _ = this.ComputeRelativeDirection(_, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || _.GetScrollIntoViewType() == 2) {
        let _ = _.Element?.ownerDocument.defaultView;
        if (_) {
          let _ = (_ == `y` ? _.innerHeight : _.innerWidth) / (_ ? 4.5 : 3.33),
            _ = _(_.Element),
            _ = !1;
          if (
            (_ == `y`
              ? _ == 1
                ? (_ = _.top > _.innerHeight && _.bottom > _.innerHeight + _)
                : _ == 2 && (_ = _.bottom < 0 && _.top < -_)
              : _ == `x` &&
                (_ == 1
                  ? (_ = _.left > _.innerWidth && _.right > _.innerWidth + _)
                  : _ == 2 && (_ = _.right < 0 && _.left < -_)),
            _)
          )
            return (
              _(`Element too far away, scrolling ${_} on ${_} axis `),
              _(_.Element, _.Element, `smooth`, _, _),
              !0
            );
        }
      }
      return (this.m_Tree.TransferFocus(_.GAMEPAD, _, _), !0);
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType !== void 0 &&
        this.m_Properties?.scrollIntoViewType !== null
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(_) {
      return this.ComputeRelativeDirection(_, this.GetLayout());
    }
    ComputeRelativeDirection(_, _) {
      let _ = _ == 4 || _ == 3;
      switch (_) {
        case 2:
        case 4:
          switch (_) {
            case _.DIR_LEFT:
              return _ ? 1 : 2;
            case _.DIR_RIGHT:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (_) {
            case _.DIR_UP:
              return _ ? 1 : 2;
            case _.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (_) {
            case _.DIR_LEFT:
            case _.DIR_UP:
              return _ ? 1 : 2;
            case _.DIR_RIGHT:
            case _.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(_, _) {
      return _ + (_ == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _ + _; _ >= 0 && _ < this.m_rgChildren.length; _ += _) {
        let _ = this.m_rgChildren[_].FindFocusableNode(_);
        if (_) return _;
      }
      return null;
    }
    ScanChildren(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _; _ >= 0 && _ < this.m_rgChildren.length; _ += _)
        if (_(this.m_rgChildren[_], _)) return _;
      return -1;
    }
    FindNextFocusableChildInGrid(_, _, _) {
      let _ = _ == _.DIR_UP || _ == _.DIR_DOWN,
        _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((_ == _.DIR_UP || _ == _.DIR_DOWN) &&
          (_ = this.AdjustRectForLastMovementOnTangentAxis(_, `y`)),
        _)
      ) {
        let _ = _;
        for (; _ != -1;) {
          let _ = this.ScanChildren(
            this.AdvanceIndex(_, _),
            _,
            (_) => !_(`y`, _, _.GetBoundingRect()),
          );
          if (_ != -1) {
            let _ = this.m_rgChildren[_].GetBoundingRect(),
              _ = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                _,
                _,
                _,
                _,
                _,
              );
            if (_) return _;
          }
          _ = _;
        }
      } else {
        let _ = _ == 1 ? 1 : -1;
        for (
          let _ = this.AdvanceIndex(_, _);
          _ >= 0 && _ < this.m_rgChildren.length;
          _ += _
        ) {
          let _ = this.m_rgChildren[_];
          if (!_(`y`, _, _.GetBoundingRect())) return null;
          let _ = _.FindFocusableNode(_);
          if (_) return _;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(_, _) {
      let _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = _(_);
      if (!_) return null;
      let _ = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        _,
      );
      return this.FindClosetChildInDirection(_, _, _, _);
    }
    AdjustRectForLastMovementOnTangentAxis(_, _) {
      let _ = this.m_Tree.GetLastFocusedMovementRect(_[_]);
      return _
        ? _ == `x`
          ? {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
          : {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
        : _;
    }
    FindClosestFocusableNodeToRect(_, _) {
      let _ = _(_),
        _ = _ && _[_],
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _ = _ ? _(_, _, _) : 0;
          _.push({
            child: _,
            overlap: _,
            dist: _,
          });
        }
      }
      _.sort((_, _) =>
        _.dist == _.dist ? _.overlap - _.overlap : _.dist - _.dist,
      );
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosetChildInDirection(_, _, _, _) {
      _(
        `Find child closest to rect, rect is at left ${_.left} top ${_.top} right ${_.right} bottom ${_.bottom}`,
      );
      let _ = _(_, _),
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _;
          ((_ = _ == 1 ? _.min - _.max : _.min - _.max),
            _ >= 0 &&
              _.push({
                child: _,
                overlap: _(_[_], _, _),
                dist: _,
              }));
        }
      }
      if (
        (_.sort((_, _) => {
          if (_.overlap) {
            if (!_.overlap) return -1;
          } else if (_.overlap) return 1;
          return _.dist - _.dist || _.overlap - _.overlap;
        }),
        _.IsDebugEnabled())
      ) {
        let _ = _.slice(0, 3).map(
          ({ dist: _, overlap: _, child: _ }) =>
            `[ node: ${_.m_element?.className} dist: ${_} overlap: ${_} ]`,
        );
        _(`Found nodes on axis, top 3 (of ${_.length}: ${_.join(`, `)}`);
      }
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(_, _, _, _, _, _) {
      (!_ || _ < 0) && (_ = 0);
      let _ = [];
      if (!_) return null;
      let _ = _(_);
      (this.ScanChildren(_, _, (_) => {
        let _ = _.GetBoundingRect();
        return _
          ? _ && !_(_[_], _, _)
            ? !0
            : (_.push({
                child: _,
                overlap: _(_, _, _),
                dist: _(_, _, _),
              }),
              !1)
          : !1;
      }),
        _ == 2 && _.reverse(),
        _.sort((_, _) => {
          let _ = _.overlap - _.overlap;
          return _ == 0 ? _.dist - _.dist : _;
        }));
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(_) {
      _ instanceof _
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = _),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(_)))
        : (this.IsValidChildIndex(_) &&
            (this.m_ActiveChild = this.m_rgChildren[_]),
          (this.m_iLastActiveChildIndex = _));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(_) {
      ((this.m_FocusableIfEmptyAncestor = _),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(_));
    }
    PropagateFocusableIfEmptyAncestorToDescendants(_) {
      for (let _ = 0; _ < this.m_rgChildren.length; _++)
        this.m_rgChildren[_].SetFocusableIfEmptyAncestor(_);
    }
    OnFocusedDecendantRemoved(_) {
      this.m_Tree.DeferredFocus.RequestFocus(this, {
        bFocusDescendant: !0,
      });
    }
    SetDOMFocusAndScroll(_, _, _, _) {
      (this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(_),
        this.m_Tree.BIsActiveFocus()
          ? (_(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({
              preventScroll: !0,
            }))
          : this.m_Tree.BUseVirtualFocus() ||
            _(
              `Didn't move focus to element as tree ${this.m_Tree._} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && _(this, _, _, _, _));
    }
  };
(_([_], _.prototype, `OnDOMFocus`, null),
  _([_], _.prototype, `OnDOMBlur`, null),
  _([_], _.prototype, `OnNavigationEvent`, null));
function _(_, _ = window) {
  return _[_];
}
var _ = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(_) {
    this.m_node = _;
  }
  TakeFocus(_) {
    return this.m_node.BTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  ParentTakeFocus(_) {
    this.m_node.Parent?.BTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  ChildTakeFocus(_) {
    return this.m_node.BChildTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  FocusVisibleChild(_) {
    return this.m_node.BVisibleChildTakeFocus(_);
  }
  BHasFocus() {
    return this.m_node.BHasFocus();
  }
  BFocusWithin() {
    return this.m_node.BFocusWithin();
  }
  get NavKey() {
    return this.m_node.NavKey;
  }
  PushState() {
    ((this.m_History ||= new _(this.m_node)), this.m_History.PushState());
  }
  PopState(_ = 0) {
    this.m_History && this.m_History.PopState(_);
  }
  SaveState(_) {
    ((this.m_StateHistory ||= new _(this.m_node)),
      this.m_StateHistory.SaveState(_));
  }
  RestoreState(_, _ = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(_, _) : !1;
  }
  GetFocusSnapshot() {
    return _(this.m_node);
  }
  RestoreFocusSnapshot(_, _ = 0) {
    return _(this.m_node, _, _);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function _(_, _, _, _ = 0.001) {
  return _ == `x`
    ? _.right > _.left + _ && _.left + _ < _.right
    : _ == `y`
      ? _.bottom > _.top + _ && _.top + _ < _.bottom
      : (_(!1, `Invalid axis ${_}`), !1);
}
function _(_, _, _) {
  let _;
  return (
    _ == `x`
      ? (_ = Math.min(_.right, _.right) - Math.max(_.left, _.left))
      : _ == `y`
        ? (_ = Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top))
        : (_(!1, `Invalid axis ${_}`), (_ = 0)),
    _ < 0 ? 0 : _
  );
}
function _(_, _) {
  return _ == `x`
    ? {
        min: _.left,
        max: _.right,
      }
    : {
        min: _.top,
        max: _.bottom,
      };
}
function _(_, _, _) {
  let _ = _[_],
    _ = _(_, _);
  return _ < _.min ? _.min - _ : _ > _.max ? _ - _.max : 0;
}
function _(_) {
  return {
    _: _.left,
    _: _.top,
  };
}
var _ = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function _(_) {
  if (!_) return _.NONE;
  let _ = _.ownerDocument.defaultView,
    _ = _.getComputedStyle(_);
  if (_.display == `flex`)
    switch (_.flexDirection) {
      case `row`:
        return _.flexWrap == `wrap` ? _.GRID : _.ROW;
      case `row-reverse`:
        return _.ROW_REVERSE;
      case `column`:
        return _.COLUMN;
      case `column-reverse`:
        return _.COLUMN_REVERSE;
    }
  else if (_.display == `grid`)
    return _.gridTemplateAreas === `none` ? _.GRID : _.GEOMETRIC;
  else if (_.childElementCount > 0) {
    let _ = _.getComputedStyle(_.firstElementChild),
      _ = _.float;
    if (
      (_ === `inline-start`
        ? ((_ = `left`), _.direction === `rtl` && (_ = `right`))
        : _ === `inline-end` &&
          ((_ = `right`), _.direction === `rtl` && (_ = `left`)),
      _ === `left`)
    )
      return _.ROW;
    if (_ === `right`) return _.ROW_REVERSE;
    if (_.display === `inline` || _.display === `inline-block`) return _.GRID;
  }
  return _.COLUMN;
}
function _(_) {
  switch (_) {
    case _.DIR_UP:
    case _.DIR_DOWN:
      return `y`;
    case _.DIR_LEFT:
    case _.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function _(_, _, _ = [], _ = !0) {
  let _ = _.useRef(_);
  ((_.current = _),
    _.useEffect(() => {
      if (!_.current || !_) return;
      let _ = setInterval(() => {
        _.current && _.current();
      }, _);
      return () => clearInterval(_);
    }, [_, _, ..._]));
}
function _() {
  let [, _] = _.useState(0);
  return _.useCallback(() => _((_) => _ + 1), []);
}
function _(_) {
  let _ = _.useRef({
    flLastExecutionTimeMs: 0,
    fnLatestCallback: null,
    nTimeoutHandle: 0,
    fnExecuteLatestCallback() {
      (this.fnLatestCallback != null &&
        (this.fnLatestCallback(),
        (this.fnLatestCallback = null),
        (this.flLastExecutionTimeMs = performance.now())),
        window.clearTimeout(this.nTimeoutHandle),
        (this.nTimeoutHandle = 0));
    },
  });
  return (
    _.useEffect(() => {
      let _ = _.current;
      return () => _.fnExecuteLatestCallback();
    }, []),
    _.useCallback(
      (_) => {
        let _ = _.current;
        _.fnLatestCallback = _;
        let _ = performance.now() - _.flLastExecutionTimeMs,
          _ = Math.max(_ - _, 0);
        (window.clearTimeout(_.nTimeoutHandle),
          (_.nTimeoutHandle = window.setTimeout(
            () => _.fnExecuteLatestCallback(),
            _,
          )));
      },
      [_],
    )
  );
}
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function _(_) {
  return _;
}
function _() {}
function _(_) {
  return _.useSyncExternalStore(
    _ ? _.SyncStore : _,
    _ ? _.GetValue : _,
    _ ? _.GetValue : _,
  );
}
function _(_, _) {
  _.useEffect(() => {
    if (_ && _) return _.Subscribe(_).Unsubscribe;
  }, [_, _]);
}
function _(_, _) {
  let [_, _] = _.useState(_);
  return (
    _.useEffect(() => {
      if (_) _(!0);
      else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  return _(_, _) || _;
}
function _(_ = !1) {
  let [_, _] = _.useState(_);
  return [_, _.useCallback(() => _(!0), []), _.useCallback(() => _(!1), [])];
}
function _(_) {
  let _ = _.useRef(void 0);
  return _.useCallback(
    () => (
      (_.current && _.current.factory == _) ||
        (_.current = {
          value: _(),
          factory: _,
        }),
      _.current.value
    ),
    [_],
  );
}
function _(_) {
  let _ = _.useRef(_);
  return (
    (_.current.length !== _.length || _.current.some((_, _) => _ !== _[_])) &&
      (_.current = _),
    _.current
  );
}
var _ = (function (_) {
    return (
      (_[(_.LaunchGame = 0)] = `LaunchGame`),
      (_[(_.FriendMessage = 1)] = `FriendMessage`),
      (_[(_.ChatMention = 2)] = `ChatMention`),
      (_[(_.ChatMessage = 3)] = `ChatMessage`),
      (_[(_.ToastMessage = 4)] = `ToastMessage`),
      (_[(_.ToastAchievement = 5)] = `ToastAchievement`),
      (_[(_.ToastMisc = 6)] = `ToastMisc`),
      (_[(_.ToastMiscShort = 7)] = `ToastMiscShort`),
      (_[(_.FriendOnline = 8)] = `FriendOnline`),
      (_[(_.FriendInGame = 9)] = `FriendInGame`),
      (_[(_.VolSound = 10)] = `VolSound`),
      (_[(_.ShowModal = 11)] = `ShowModal`),
      (_[(_.HideModal = 12)] = `HideModal`),
      (_[(_.IntoGameDetail = 13)] = `IntoGameDetail`),
      (_[(_.OutOfGameDetail = 14)] = `OutOfGameDetail`),
      (_[(_.PagedNavigation = 15)] = `PagedNavigation`),
      (_[(_.ToggleOn = 16)] = `ToggleOn`),
      (_[(_.ToggleOff = 17)] = `ToggleOff`),
      (_[(_.SliderUp = 18)] = `SliderUp`),
      (_[(_.SliderDown = 19)] = `SliderDown`),
      (_[(_.ChangeTabs = 20)] = `ChangeTabs`),
      (_[(_.DefaultOk = 21)] = `DefaultOk`),
      (_[(_.OpenSideMenu = 22)] = `OpenSideMenu`),
      (_[(_.CloseSideMenu = 23)] = `CloseSideMenu`),
      (_[(_.BasicNav = 24)] = `BasicNav`),
      (_[(_.FailedNav = 25)] = `FailedNav`),
      (_[(_.Typing = 26)] = `Typing`),
      (_[(_.TimerExpired = 27)] = `TimerExpired`),
      (_[(_.Screenshot = 28)] = `Screenshot`),
      _
    );
  })({}),
  _ = new (class {
    m_fnCallbackOnPlaySound = new _();
    m_fnCallbackOnSuppressSound = new _();
    RegisterCallbackOnPlaySound(_) {
      return this.m_fnCallbackOnPlaySound.Register(_);
    }
    PlayNavSound(_, _) {
      this.m_fnCallbackOnPlaySound.Dispatch(_, _);
    }
    RegisterCallbackOnSuppressNavImminentSound(_) {
      return this.m_fnCallbackOnSuppressSound.Register(_);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  })(),
  _ = new _(`GamepadEvents`).Debug;
function _(_, _, _) {
  (_ === void 0 &&
    (_ = [
      _.onButtonDown,
      _.onButtonUp,
      _.onOKButton,
      _.onCancelButton,
      _.onSecondaryButton,
      _.onOptionsButton,
      _.onMenuButton,
      _.onGamepadDirection,
      _.onGamepadFocus,
      _.onGamepadBlur,
    ]),
    _.useEffect(() => {
      let _ = _.current,
        _ = [];
      return (
        _ &&
          (_.onButtonDown && _.push(_(_, _.onButtonDown)),
          _.onButtonUp && _.push(_(_, _.onButtonUp)),
          _.onOKButton && _.push(_(_, _.onOKButton)),
          _.onCancelButton && _.push(_(_, _.onCancelButton)),
          _.onSecondaryButton && _.push(_(_, _.onSecondaryButton)),
          _.onOptionsButton && _.push(_(_, _.onOptionsButton)),
          _.onMenuButton && _.push(_(_, _.onMenuButton)),
          _.onGamepadDirection && _.push(_(_, _.onGamepadDirection)),
          _.onGamepadFocus && _.push(_(_, _.onGamepadFocus)),
          _.onGamepadBlur && _.push(_(_, _.onGamepadBlur))),
        () => _.forEach((_) => _())
      );
    }, _));
}
function _(_) {
  return (_.stopPropagation(), !1);
}
function _(_, _, _) {
  let { onButtonDown: _, ..._ } = _,
    _ = _.useCallback(
      (_) => {
        (_ && _(_),
          _(
            `Gamepad Event fired:`,
            _.detail.button,
            `, handled:`,
            _ != null,
            `, propagation stopped:`,
            _.cancelBubble,
          ),
          !_.cancelBubble && _.OnRootButtonDown(_));
      },
      [_, _],
    );
  (_(_, _),
    _(
      {
        onButtonDown: _,
        onButtonUp: _,
        onOKButton: _,
        onCancelButton: _,
        onSecondaryButton: _,
        onOptionsButton: _,
        onMenuButton: _,
        onGamepadDirection: _,
        onGamepadFocus: _,
        onGamepadBlur: _,
      },
      _,
      [_],
    ));
}
function _(_) {
  if (!_) return _.NONE;
  switch (_) {
    case `column`:
      return _.COLUMN;
    case `column-reverse`:
      return _.COLUMN_REVERSE;
    case `row`:
      return _.ROW;
    case `row-reverse`:
      return _.ROW_REVERSE;
    case `grid`:
      return _.GRID;
    case `geometric`:
      return _.GEOMETRIC;
    default:
      return (_(_, `Unhandled flow-children: ${_}`), _.NONE);
  }
}
function _(_) {
  return {
    ShowVirtualKeyboard: () => {},
    ShowModalKeyboard: () => {},
    SetAsCurrentVirtualKeyboardTarget: () => {},
    HideVirtualKeyboard: () => {},
    DelayHideVirtualKeyboard: () => {},
    BIsActive: () => !1,
    BIsElementValidForInput: () => !1,
  };
}
var _ = _.createContext(_);
function _(_, _) {
  let { onTextEntered: _, ..._ } = _,
    _ = _.useRef(null),
    _ = _.useRef({});
  Object.assign(_.current, {
    ..._,
    BIsElementValidForInput: () =>
      _.current && document.activeElement == _.current,
  });
  let _ = _(_.current),
    _ = _.useCallback(
      (_) => {
        (document.hasFocus() || document.activeElement != _.current) &&
          (_.currentTarget == _.current
            ? _.detail.focusedNode?.Element != _.current &&
              (_.BIsActive() || _.bInVR) &&
              _.DelayHideVirtualKeyboard()
            : console.warn(
                `keyboard got blur event, but it's not the active element`,
              ));
      },
      [_],
    ),
    _ = _.useCallback((_) => !_.bInVR && _.pointerType === `mouse`, [_]),
    _ = _.useCallback(
      (_) => {
        _(_) || _.ShowVirtualKeyboard();
      },
      [_, _],
    ),
    _ = _(
      (_) => {
        _.current = _;
        let _ = [];
        return (
          _ &&
            (_.addEventListener(`focus`, _.SetAsCurrentVirtualKeyboardTarget),
            _.push(() =>
              _.removeEventListener(
                `focus`,
                _.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            _.addEventListener(`click`, _),
            _.push(() => _.removeEventListener(`click`, _)),
            _.push(_(_, _.ShowVirtualKeyboard)),
            _.push(_(_, _))),
          () => _.forEach((_) => _())
        );
      },
      [_, _, _],
    );
  return (
    _.useLayoutEffect(
      () => (
        _(_, {
          TakeFocusAndShowKeyboard: (_) => {
            let _ = _.current;
            _ &&
              (document.activeElement != _ && _.focus(),
              !(_ && _(_)) && _.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            _.HideVirtualKeyboard();
          },
        }),
        () => _(_, null)
      ),
      [_, _, _],
    ),
    _
  );
}
function _(_) {
  let _ = _.useRef(void 0),
    _ = _.useContext(_);
  return ((_.current ||= _(_ || {})), _.current);
}
function _(_) {
  let {
    onEnterKeyPress: _,
    strEnterKeyLabel: _,
    onKeyboardNavOut: _,
    onKeyboardShow: _,
    onKeyboardFullyVisible: _,
    onTextEntered: _,
    BIsElementValidForInput: _,
    ..._
  } = _;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: _,
      strEnterKeyLabel: _,
      onKeyboardNavOut: _,
      onKeyboardShow: _,
      onKeyboardFullyVisible: _,
      onTextEntered: _,
      BIsElementValidForInput: _,
    },
    props: _,
  };
}
var _ = _.createContext(void 0);
function _() {
  return _.useContext(_);
}
function _() {
  return _(_()?.GetShowDebugFocusRing()) ?? !1;
}
var _ = _.createContext({
  focusNavWindow: null,
  bSupportsFocus: !0,
});
function _() {
  return _.useContext(_)?.focusNavWindow;
}
function _(_ = !0) {
  return _.useContext(_)?.bSupportsFocus ?? _;
}
var _ = _.forwardRef(function (_, _) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _,
      modal: _,
      virtualFocus: _,
      historyMode: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _,
      disabledRoot: _,
      excludeTreeFromScrollRegionSearch: _,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_);
  return _()
    ? (0, _.jsx)(_, {
        navID: _,
        onActivated: _,
        onDeactivated: _,
        navTreeRef: _,
        enabled: _,
        modal: _,
        virtualFocus: _,
        historyMode: _,
        parentEmbeddedNavTree: _,
        onGlobalButtonDown: _,
        disableFocusClasses: _,
        disabledRoot: _,
        excludeTreeFromScrollRegionSearch: _,
        "flow-children": _,
        ..._,
        ..._,
        children: (0, _.jsx)(`div`, {
          ..._,
          ref: _,
        }),
      })
    : (0, _.jsx)(`div`, {
        ..._,
        ref: _,
      });
});
function _(_) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _ = !0,
      modal: _ = !1,
      virtualFocus: _ = !1,
      historyMode: _,
      children: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _ = !1,
      disabledRoot: _ = !1,
      excludeTreeFromScrollRegionSearch: _ = !1,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    { refDiv: _, tree: _ } = _({
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      enabled: _,
      onGlobalButtonDown: _,
      navTreeRef: _,
      virtualFocus: _,
      modal: _,
      historyMode: _,
      excludeTreeFromScrollRegionSearch: _,
    });
  (_(_.OnActivateCallbacks, _),
    _(_.OnDeactivateCallbacks, _),
    _(_, _, _),
    _.useLayoutEffect(() => {
      let _ = _(_);
      _.Root.SetProperties({
        ..._,
        layout: _,
      });
    }));
  let _ = _(_, _.props.ref);
  return (0, _.jsx)(_, {
    tree: _ ? null : _,
    disableFocusClasses: _ || _,
    children: (0, _.jsx)(_.Provider, {
      value: _ ? null : _.Root,
      children: _.cloneElement(_, {
        _: _,
        "data-react-nav-root": _,
        ref: _,
      }),
    }),
  });
}
function _(_) {
  let {
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      excludeTreeFromScrollRegionSearch: _,
      enabled: _,
      navTreeRef: _,
      onGlobalButtonDown: _,
      ..._
    } = _,
    _ = _(),
    _ = _() || _.GetDefaultContext(),
    _ = _.useContext(_),
    [_] = _.useState(() =>
      _.NewGamepadNavigationTree(_, _, _ ?? _?.Tree, {
        ..._,
        bIsEmbeddedInLegacyTree: !!_,
      }),
    ),
    _ = _.useRef(null);
  return (
    _.SetOnGlobalButtonDown(_),
    _.useEffect(() => _.RegisterNavigationItem(_.Root, _.current), [_, _]),
    _.useEffect(() => {
      _.SetIsEnabled(_);
    }, [_, _]),
    _.useEffect(() => {
      _.SetExcludeFromScrollRegionSearch(_);
    }, [_, _]),
    _.useEffect(() => {
      if (!_)
        return _.RegisterGamepadNavigationTree(
          _,
          _.current.ownerDocument.defaultView,
        );
    }, [_, _, _]),
    _.useEffect(() => (_(_, _), () => _(_, null)), [_, _]),
    {
      refDiv: _,
      tree: _,
    }
  );
}
var _ = _.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function _(_) {
  let { tree: _, disableFocusClasses: _ = !1, children: _ } = _,
    [_, _] = _.useState(_?.BIsActive() || !1),
    [_, _] = _.useState(_?.BIsActiveWithinWindow() || !1),
    _ = _(_?.SubscribableIsMounted) ?? !1;
  _.useEffect(() => {
    if (!_) {
      (_(!1), _(!1));
      return;
    }
    (_(_.BIsActive()), _(_.BIsActiveWithinWindow()));
    let _ = _.OnActiveStateChangedCallbacks.Register(() => {
        (_(_.BIsActive()), _(_.BIsActiveWithinWindow()));
      }),
      _ = _.OnActiveWithinWindowChangedCallbacks.Register(() =>
        _(_.BIsActiveWithinWindow()),
      );
    return () => {
      (_.Unregister(), _.Unregister());
    };
  }, [_]);
  let _ = _.useMemo(
    () => ({
      bActiveTree: _,
      bActiveTreeWithinWindow: _,
      bDisableFocusClasses: _,
      bIsMounted: _,
    }),
    [_, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
var _ = _.createContext(null),
  _ = _.createContext(_);
function _(_, _) {
  let _ = _.useRef(null);
  return (
    _ &&
      (!_.current || _.current.m_Parent != _) &&
      (_.current = _.Tree.CreateNode(_, _)),
    _.current
  );
}
function _(_) {
  let { navRef: _, ..._ } = _,
    _ = _.useRef(null),
    _ = (0, _.useContext)(_),
    _ = _(_, (0, _.useContext)(_));
  return (
    _.useLayoutEffect(() => {
      _ && _.SetProperties(_);
    }),
    _.useLayoutEffect(() => {
      if (!_) return;
      let _ = _.Tree.RegisterNavigationItem(_, _.current);
      return () => {
        _();
      };
    }, [_, _, _]),
    _.useLayoutEffect(() => {
      if (_ && _) return (_(_, _.CreateHandle()), () => _(_, null));
    }, [_, _]),
    {
      ref: _,
      node: _,
    }
  );
}
function _(_) {
  let _ = _.useRef(null),
    _ = _.useRef(null);
  return (
    _.useEffect(
      () => () => {
        _.current?.();
      },
      [],
    ),
    _.useCallback(
      (_) => {
        _.current !== _ &&
          ((_.current = _),
          _.current?.(),
          (_.current = null),
          _ &&
            (_.current = _(_, (_) =>
              !_ || _.GetFocusable() == `none`
                ? !1
                : _.BTakeFocus(void 0, _.detail.button),
            )));
      },
      [_],
    )
  );
}
function _(_) {
  let {
      onButtonDown: _,
      onButtonUp: _,
      onOKButton: _,
      onCancelButton: _,
      onSecondaryButton: _,
      onOptionsButton: _,
      onGamepadDirection: _,
      onGamepadFocus: _,
      onGamepadBlur: _,
      onMenuButton: _,
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
      ..._
    } = _,
    _ = {};
  return (
    _ !== void 0 && (_.onButtonDown = _),
    _ !== void 0 && (_.onButtonUp = _),
    _ !== void 0 && (_.onOKButton = _),
    _ !== void 0 && (_.onCancelButton = _),
    _ !== void 0 && (_.onSecondaryButton = _),
    _ !== void 0 && (_.onOptionsButton = _),
    _ !== void 0 && (_.onMenuButton = _),
    _ !== void 0 && (_.onGamepadDirection = _),
    _ !== void 0 && (_.onGamepadFocus = _),
    _ !== void 0 && (_.onGamepadBlur = _),
    {
      gamepadEvents: _,
      actionDescriptions: _({
        onOKActionDescription: _,
        onCancelActionDescription: _,
        onSecondaryActionDescription: _,
        onOptionsActionDescription: _,
        onMenuActionDescription: _,
        actionDescriptionMap: _,
      }),
      props: _,
    }
  );
}
function _(_) {
  let {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusRingHasBorderRadius: _,
      focusable: _,
      navRef: _,
      actionDescriptionMap: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      excludeFromScrollRegionSearch: _,
      ..._
    } = _,
    { gamepadEvents: _, actionDescriptions: _, props: _ } = _(_);
  return {
    elemProps: _,
    navOptions: {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusRingHasBorderRadius: _,
      focusable: _,
      navRef: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      excludeFromScrollRegionSearch: _,
      actionDescriptionMap: {
        ..._,
        ..._,
      },
    },
    gamepadEvents: _,
  };
}
function _(_) {
  return function (_) {
    let {
        focusClassName: _,
        focusWithinClassName: _,
        bFocusableByDefault: _,
        className: _,
        divRef: _,
        node: _,
        tabIndex: _,
        children: _,
        ..._
      } = _,
      _ = _(),
      _ = _(_.SubscribableHasFocus) && _,
      _ = _(_.SubscribableFocusWithin) && _,
      {
        bActiveTree: _,
        bActiveTreeWithinWindow: _,
        bDisableFocusClasses: _,
        bIsMounted: _,
      } = _(),
      _ = _ && !_,
      _ = _ && !_ && (_ !== void 0 || _);
    return _.createElement(
      _,
      {
        ..._,
        className: (0, _.default)(_, _ && _ && _, _ && _ && _),
        tabIndex: _ ? -1 : _,
        ref: _,
      },
      _,
    );
  };
}
var _ = _(`div`);
function _(_) {
  return (
    _.PlayNavSound(_.DefaultOk),
    _(_.currentTarget) && _.currentTarget.click(),
    !0
  );
}
var _ = _.createContext(void 0);
_.Provider;
function _(_, _, _, _, _) {
  let {
      elemProps: { focusClassName: _, children: _, "flow-children": _, ..._ },
      navOptions: _,
      gamepadEvents: _,
    } = _(_),
    {
      bFocusableByDefault: _ = !0,
      bActivateByDefault: _ = !1,
      bDOMElementFocusByDefault: _ = _,
    } = _ || {};
  _.focusable === void 0 && !_.disabled && _ && (_.focusable = !0);
  let { ref: _, node: _ } = _({
    layout: _(_),
    ..._,
  });
  (_.onOKButton ||
    (((`onClick` in _ && _.onClick) || (_ && (_ === !0 || _(_)))) &&
      (_.onOKButton = _)),
    _.focusable && !_
      ? (_.tabIndex = _.tabIndex || 0)
      : !_.focusable && _ && (_.tabIndex = _.tabIndex ?? -1),
    _(_, _));
  let _ = _(_, _, _(_)),
    _ = (0, _.useContext)(_)?.Component,
    _ = {
      ..._,
    };
  return (
    `onClick` in _ && (_.role ??= `button`),
    _
      ? ((_ = {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: _,
          className: (0, _.default)(_.className, `Focusable`),
        }),
        (0, _.jsx)(_.Provider, {
          value: _,
          children: _
            ? _.createElement(
                _,
                {
                  ..._,
                  Component: _,
                },
                _,
              )
            : _.createElement(_, _, _),
        }))
      : _.createElement(
          _,
          {
            ..._,
            ref: _,
            className: (0, _.default)(_.className, `Focusable`),
          },
          _,
        )
  );
}
function _(_, _) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    return _(_, _, _, _, _);
  });
}
function _(_) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    let {
        virtualKeyboardProps: _,
        props: { refKeyboardHandle: _, ..._ },
      } = _(_),
      _ = _(_, _(_, _));
    return _(_, _, _, _);
  });
}
function _() {
  return _.createRef();
}
var _ = _(`div`, {
    bDOMElementFocusByDefault: !1,
  }),
  _ = _(`button`, {
    bActivateByDefault: (_) => _.type === `submit`,
  }),
  _ = _(`a`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _ = _.forwardRef(function (_, _) {
    let { href: _ = `#`, ..._ } = _;
    return (0, _.jsx)(_, {
      ref: _,
      href: _,
      ..._,
    });
  }),
  _ = _(`input`),
  _ = _(`textarea`);
(_(`img`, {
  bDOMElementFocusByDefault: !1,
}),
  _(`label`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _(`section`, {
    bFocusableByDefault: !1,
  }),
  _(`form`, {
    bFocusableByDefault: !1,
  }));
var _ = _(`summary`, {
  bActivateByDefault: !0,
});
_(`details`, {
  bFocusableByDefault: !1,
});
function _(_, _, _ = !1) {
  _.useEffect(() => {
    let _ = _.current;
    _ && (_ ? _.Activate(_) : _.Deactivate());
  }, [_, _, _]);
}
function _(_, _) {
  return _(
    (_) => {
      if (!_) return;
      let _ = _(_.ownerDocument.defaultView, (_) => {
        _(_[0]);
      });
      return (_.observe(_), () => _.unobserve(_));
    },
    [_, _],
  );
}
function _(_) {
  return _(
    _,
    _.useCallback(
      (_, _) =>
        _.ResizeObserver
          ? new _.ResizeObserver(_)
          : (_(!1, `ResizeObserver is not available`),
            {
              observe: () => {},
              unobserve: () => {},
              disconnect: () => {},
            }),
      [],
    ),
  );
}
function _(_, _) {
  return _(
    _,
    _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]),
  );
}
function _(_, ..._) {
  let _ = new _.ownerDocument.defaultView.ResizeObserver(..._);
  return (_.observe(_), _);
}
function _(_) {
  return function (_) {
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
      }),
    });
  };
}
var _ = class extends _.Component {
  state = {};
  constructor(_) {
    (super(_), (this.state.lastErrorKey = _.errorKey));
  }
  componentDidCatch(_, _) {
    (_()
      .ReportError(_, {
        strComponentStack: _.componentStack || void 0,
      })
      .then(
        (_) =>
          _ &&
          this.setState({
            identifierHash: _.identifierHash,
          }),
      ),
      this.setState({
        error: {
          error: _,
          info: _,
        },
        lastErrorKey: this.props.errorKey,
      }));
  }
  Reset() {
    this.setState({
      error: void 0,
    });
  }
  render() {
    let { children: _, fallback: _, errorKey: _ } = this.props,
      { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
    return _ && _ == _
      ? _ === void 0
        ? _().reporting_enabled
          ? (0, _.jsx)(_, {
              error: _,
              identifierHash: _,
              store: _(),
              onRefresh: this.Reset,
            })
          : (0, _.jsx)(_, {
              error: _,
              onDismiss: this.Reset,
            })
        : typeof _ == `function`
          ? _(_.error)
          : _
      : _ || null;
  }
};
_([_], _.prototype, `Reset`, null);
var _ = ({ error: _, onDismiss: _ }) => {
    let _ = _.error ? _.error.stack : `Stack missing`,
      _ = _.info ? _.info.componentStack : ``,
      _ = (_.error && _.error.message) || `unknown error`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [`Error: "`, _, `"`],
        }),
        `\xA0\xA0\xA0`,
        (0, _.jsx)(_, {
          onClick: _,
          children: `(x) Dismiss`,
        }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(_, {
          children: _,
        }),
        (0, _.jsxs)(_, {
          children: [`The error occurred while rendering:`, _],
        }),
      ],
    });
  },
  _ = (_) => {
    let { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
      _ = (_.error && _.error.message) || `unknown error`,
      _ = `${_.product}_${_.version}_${_}`;
    return (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, _.jsx)(_, {
              onClick: _,
              children: `Refresh`,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          children: [`Error Reference: `, _],
        }),
        (0, _.jsx)(_, {
          children: _,
        }),
      ],
    });
  },
  _ = ({ onClick: _, children: _ }) => {
    let _ = _.useRef(null),
      _ = _();
    return (
      _.useEffect(() => {
        let _ = _.current;
        _ && _ && !_.NavTree().GetLastFocusedNode() && _.TakeFocus();
      }, [_]),
      (0, _.jsx)(_, {
        navRef: _,
        style: {
          color: `inherit`,
          textDecoration: `underline`,
          cursor: `pointer`,
        },
        onClick: (_) => {
          (_.preventDefault(), _());
        },
        children: _,
      })
    );
  },
  _ = ({ children: _ }) =>
    (0, _.jsx)(`div`, {
      style: {
        overflow: `auto`,
        marginLeft: `15px`,
        color: `white`,
        fontSize: `16px`,
        userSelect: `auto`,
        backgroundColor: `black`,
      },
      className: `ErrorBoundary`,
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: _,
    }),
  _ = ({ children: _ }) =>
    (0, _.jsx)(`pre`, {
      style: {
        marginTop: `15px`,
        opacity: 0.7,
        userSelect: `auto`,
      },
      children: _,
    }),
  _ = null;
try {
  _ = new WebAssembly.Instance(
    new WebAssembly.Module(
      new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127,
        127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11,
        7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5,
        100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114,
        101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
        10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173,
        66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4,
        66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32,
        1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127,
        34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0,
        173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134,
        132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
        32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66,
        32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36,
        1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
        173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167,
        11,
      ]),
    ),
    {},
  ).exports;
} catch {}
function _(_, _, _) {
  ((this.low = _ | 0), (this.high = _ | 0), (this.unsigned = !!_));
}
(_.prototype.__isLong__,
  Object.defineProperty(_.prototype, "__isLong__", {
    value: !0,
  }));
function _(_) {
  return (_ && _.__isLong__) === !0;
}
function _(_) {
  var _ = Math.clz32(_ & -_);
  return _ ? 31 - _ : _;
}
_.isLong = _;
var _ = {},
  _ = {};
function _(_, _) {
  var _, _, _;
  return _
    ? ((_ >>>= 0),
      (_ = 0 <= _ && _ < 256) && ((_ = _[_]), _)
        ? _
        : ((_ = _(_, 0, !0)), _ && (_[_] = _), _))
    : ((_ |= 0),
      (_ = -128 <= _ && _ < 128) && ((_ = _[_]), _)
        ? _
        : ((_ = _(_, _ < 0 ? -1 : 0, !1)), _ && (_[_] = _), _));
}
_.fromInt = _;
function _(_, _) {
  if (isNaN(_)) return _ ? _ : _;
  if (_) {
    if (_ < 0) return _;
    if (_ >= _) return _;
  } else {
    if (_ <= -_) return _;
    if (_ + 1 >= _) return _;
  }
  return _ < 0 ? _(-_, _).neg() : _((_ % _) | 0, (_ / _) | 0, _);
}
_.fromNumber = _;
function _(_, _, _) {
  return new _(_, _, _);
}
_.fromBits = _;
var _ = Math.pow;
function _(_, _, _) {
  if (_.length === 0) throw Error(`empty string`);
  if (
    (typeof _ == `number` ? ((_ = _), (_ = !1)) : (_ = !!_),
    _ === `NaN` || _ === `Infinity` || _ === `+Infinity` || _ === `-Infinity`)
  )
    return _ ? _ : _;
  if (((_ ||= 10), _ < 2 || 36 < _)) throw RangeError(`radix`);
  var _;
  if ((_ = _.indexOf(`-`)) > 0) throw Error(`interior hyphen`);
  if (_ === 0) return _(_.substring(1), _, _).neg();
  for (var _ = _(_(_, 8)), _ = _, _ = 0; _ < _.length; _ += 8) {
    var _ = Math.min(8, _.length - _),
      _ = parseInt(_.substring(_, _ + _), _);
    if (_ < 8) {
      var _ = _(_(_, _));
      _ = _.mul(_).add(_(_));
    } else ((_ = _.mul(_)), (_ = _.add(_(_))));
  }
  return ((_.unsigned = _), _);
}
_.fromString = _;
function _(_, _) {
  return typeof _ == `number`
    ? _(_, _)
    : typeof _ == `string`
      ? _(_, _)
      : _(_.low, _.high, typeof _ == `boolean` ? _ : _.unsigned);
}
_.fromValue = _;
var _ = 65536,
  _ = 1 << 24,
  _ = _ * _,
  _ = _ * _,
  _ = _ / 2,
  _ = _(_),
  _ = _(0);
_.ZERO = _;
var _ = _(0, !0);
_.UZERO = _;
var _ = _(1);
_.ONE = _;
var _ = _(1, !0);
_.UONE = _;
var _ = _(-1);
_.NEG_ONE = _;
var _ = _(-1, 2147483647, !1);
_.MAX_VALUE = _;
var _ = _(-1, -1, !0);
_.MAX_UNSIGNED_VALUE = _;
var _ = _(0, -2147483648, !1);
_.MIN_VALUE = _;
var _ = _.prototype;
((_.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
}),
  (_.toNumber = function () {
    return this.unsigned
      ? (this.high >>> 0) * _ + (this.low >>> 0)
      : this.high * _ + (this.low >>> 0);
  }),
  (_.toString = function (_) {
    if (((_ ||= 10), _ < 2 || 36 < _)) throw RangeError(`radix`);
    if (this.isZero()) return `0`;
    if (this.isNegative()) {
      if (this._(_)) {
        var _ = _(_),
          _ = this.div(_),
          _ = _.mul(_).sub(this);
        return _.toString(_) + _.toInt().toString(_);
      }
      return `-` + this.neg().toString(_);
    }
    for (var _ = _(_(_, 6), this.unsigned), _ = this, _ = ``; ;) {
      var _ = _.div(_),
        _ = (_.sub(_.mul(_)).toInt() >>> 0).toString(_);
      if (((_ = _), _.isZero())) return _ + _;
      for (; _.length < 6;) _ = `0` + _;
      _ = `` + _ + _;
    }
  }),
  (_.getHighBits = function () {
    return this.high;
  }),
  (_.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }),
  (_.getLowBits = function () {
    return this.low;
  }),
  (_.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }),
  (_.getNumBitsAbs = function () {
    if (this.isNegative()) return this._(_) ? 64 : this.neg().getNumBitsAbs();
    for (
      var _ = this.high == 0 ? this.low : this.high, _ = 31;
      _ > 0 && !(_ & (1 << _));
      _--
    );
    return this.high == 0 ? _ + 1 : _ + 33;
  }),
  (_.isSafeInteger = function () {
    var _ = this.high >> 21;
    return (
      !_ ||
      (!this.unsigned && _ === -1 && (this.low !== 0 || this.high !== -2097152))
    );
  }),
  (_.isZero = function () {
    return this.high === 0 && this.low === 0;
  }),
  (_.eqz = _.isZero),
  (_.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }),
  (_.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }),
  (_.isOdd = function () {
    return (this.low & 1) == 1;
  }),
  (_.isEven = function () {
    return !(this.low & 1);
  }),
  (_.equals = function (_) {
    return (
      _(_) || (_ = _(_)),
      this.unsigned !== _.unsigned &&
      this.high >>> 31 == 1 &&
      _.high >>> 31 == 1
        ? !1
        : this.high === _.high && this.low === _.low
    );
  }),
  (_._ = _.equals),
  (_.notEquals = function (_) {
    return !this._(_);
  }),
  (_.neq = _.notEquals),
  (_._ = _.notEquals),
  (_.lessThan = function (_) {
    return this.comp(_) < 0;
  }),
  (_._ = _.lessThan),
  (_.lessThanOrEqual = function (_) {
    return this.comp(_) <= 0;
  }),
  (_.lte = _.lessThanOrEqual),
  (_._ = _.lessThanOrEqual),
  (_.greaterThan = function (_) {
    return this.comp(_) > 0;
  }),
  (_._ = _.greaterThan),
  (_.greaterThanOrEqual = function (_) {
    return this.comp(_) >= 0;
  }),
  (_.gte = _.greaterThanOrEqual),
  (_._ = _.greaterThanOrEqual),
  (_.compare = function (_) {
    if ((_(_) || (_ = _(_)), this._(_))) return 0;
    var _ = this.isNegative(),
      _ = _.isNegative();
    return _ && !_
      ? -1
      : !_ && _
        ? 1
        : this.unsigned
          ? _.high >>> 0 > this.high >>> 0 ||
            (_.high === this.high && _.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(_).isNegative()
            ? -1
            : 1;
  }),
  (_.comp = _.compare),
  (_.negate = function () {
    return !this.unsigned && this._(_) ? _ : this.not().add(_);
  }),
  (_.neg = _.negate),
  (_.add = function (_) {
    _(_) || (_ = _(_));
    var _ = this.high >>> 16,
      _ = this.high & 65535,
      _ = this.low >>> 16,
      _ = this.low & 65535,
      _ = _.high >>> 16,
      _ = _.high & 65535,
      _ = _.low >>> 16,
      _ = _.low & 65535,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    return (
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ + _),
      (_ &= 65535),
      _((_ << 16) | _, (_ << 16) | _, this.unsigned)
    );
  }),
  (_.subtract = function (_) {
    return (_(_) || (_ = _(_)), this.add(_.neg()));
  }),
  (_.sub = _.subtract),
  (_.multiply = function (_) {
    if (this.isZero()) return this;
    if ((_(_) || (_ = _(_)), _))
      return _(
        _.mul(this.low, this.high, _.low, _.high),
        _.get_high(),
        this.unsigned,
      );
    if (_.isZero()) return this.unsigned ? _ : _;
    if (this._(_)) return _.isOdd() ? _ : _;
    if (_._(_)) return this.isOdd() ? _ : _;
    if (this.isNegative())
      return _.isNegative() ? this.neg().mul(_.neg()) : this.neg().mul(_).neg();
    if (_.isNegative()) return this.mul(_.neg()).neg();
    if (this._(_) && _._(_))
      return _(this.toNumber() * _.toNumber(), this.unsigned);
    var _ = this.high >>> 16,
      _ = this.high & 65535,
      _ = this.low >>> 16,
      _ = this.low & 65535,
      _ = _.high >>> 16,
      _ = _.high & 65535,
      _ = _.low >>> 16,
      _ = _.low & 65535,
      _ = 0,
      _ = 0,
      _ = 0,
      _ = 0;
    return (
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _),
      (_ += _ >>> 16),
      (_ &= 65535),
      (_ += _ * _ + _ * _ + _ * _ + _ * _),
      (_ &= 65535),
      _((_ << 16) | _, (_ << 16) | _, this.unsigned)
    );
  }),
  (_.mul = _.multiply),
  (_.divide = function (_) {
    if ((_(_) || (_ = _(_)), _.isZero())) throw Error(`division by zero`);
    if (_)
      return !this.unsigned &&
        this.high === -2147483648 &&
        _.low === -1 &&
        _.high === -1
        ? this
        : _(
            (this.unsigned ? _.div_u : _.div_s)(
              this.low,
              this.high,
              _.low,
              _.high,
            ),
            _.get_high(),
            this.unsigned,
          );
    if (this.isZero()) return this.unsigned ? _ : _;
    var _, _, _;
    if (this.unsigned) {
      if ((_.unsigned || (_ = _.toUnsigned()), _._(this))) return _;
      if (_._(this.shru(1))) return _;
      _ = _;
    } else {
      if (this._(_))
        return _._(_) || _._(_)
          ? _
          : _._(_)
            ? _
            : ((_ = this.shr(1).div(_).shl(1)),
              _._(_)
                ? _.isNegative()
                  ? _
                  : _
                : ((_ = this.sub(_.mul(_))), (_ = _.add(_.div(_))), _));
      if (_._(_)) return this.unsigned ? _ : _;
      if (this.isNegative())
        return _.isNegative()
          ? this.neg().div(_.neg())
          : this.neg().div(_).neg();
      if (_.isNegative()) return this.div(_.neg()).neg();
      _ = _;
    }
    for (_ = this; _.gte(_);) {
      _ = Math.max(1, Math.floor(_.toNumber() / _.toNumber()));
      for (
        var _ = Math.ceil(Math.log(_) / Math.LN2),
          _ = _ <= 48 ? 1 : _(2, _ - 48),
          _ = _(_),
          _ = _.mul(_);
        _.isNegative() || _._(_);
      )
        ((_ -= _), (_ = _(_, this.unsigned)), (_ = _.mul(_)));
      (_.isZero() && (_ = _), (_ = _.add(_)), (_ = _.sub(_)));
    }
    return _;
  }),
  (_.div = _.divide),
  (_.modulo = function (_) {
    return (
      _(_) || (_ = _(_)),
      _
        ? _(
            (this.unsigned ? _.rem_u : _.rem_s)(
              this.low,
              this.high,
              _.low,
              _.high,
            ),
            _.get_high(),
            this.unsigned,
          )
        : this.sub(this.div(_).mul(_))
    );
  }),
  (_.mod = _.modulo),
  (_.rem = _.modulo),
  (_.not = function () {
    return _(~this.low, ~this.high, this.unsigned);
  }),
  (_.countLeadingZeros = function () {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
  }),
  (_.clz = _.countLeadingZeros),
  (_.countTrailingZeros = function () {
    return this.low ? _(this.low) : _(this.high) + 32;
  }),
  (_.ctz = _.countTrailingZeros),
  (_.and = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low & _.low, this.high & _.high, this.unsigned)
    );
  }),
  (_._ = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low | _.low, this.high | _.high, this.unsigned)
    );
  }),
  (_.xor = function (_) {
    return (
      _(_) || (_ = _(_)), _(this.low ^ _.low, this.high ^ _.high, this.unsigned)
    );
  }),
  (_.shiftLeft = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              this.low << _,
              (this.high << _) | (this.low >>> (32 - _)),
              this.unsigned,
            )
          : _(0, this.low << (_ - 32), this.unsigned)
    );
  }),
  (_.shl = _.shiftLeft),
  (_.shiftRight = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              (this.low >>> _) | (this.high << (32 - _)),
              this.high >> _,
              this.unsigned,
            )
          : _(this.high >> (_ - 32), this.high >= 0 ? 0 : -1, this.unsigned)
    );
  }),
  (_.shr = _.shiftRight),
  (_.shiftRightUnsigned = function (_) {
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ < 32
          ? _(
              (this.low >>> _) | (this.high << (32 - _)),
              this.high >>> _,
              this.unsigned,
            )
          : _(_ === 32 ? this.high : this.high >>> (_ - 32), 0, this.unsigned)
    );
  }),
  (_.shru = _.shiftRightUnsigned),
  (_.shr_u = _.shiftRightUnsigned),
  (_.rotateLeft = function (_) {
    var _;
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ === 32
          ? _(this.high, this.low, this.unsigned)
          : _ < 32
            ? ((_ = 32 - _),
              _(
                (this.low << _) | (this.high >>> _),
                (this.high << _) | (this.low >>> _),
                this.unsigned,
              ))
            : ((_ -= 32),
              (_ = 32 - _),
              _(
                (this.high << _) | (this.low >>> _),
                (this.low << _) | (this.high >>> _),
                this.unsigned,
              ))
    );
  }),
  (_.rotl = _.rotateLeft),
  (_.rotateRight = function (_) {
    var _;
    return (
      _(_) && (_ = _.toInt()),
      (_ &= 63) == 0
        ? this
        : _ === 32
          ? _(this.high, this.low, this.unsigned)
          : _ < 32
            ? ((_ = 32 - _),
              _(
                (this.high << _) | (this.low >>> _),
                (this.low << _) | (this.high >>> _),
                this.unsigned,
              ))
            : ((_ -= 32),
              (_ = 32 - _),
              _(
                (this.low << _) | (this.high >>> _),
                (this.high << _) | (this.low >>> _),
                this.unsigned,
              ))
    );
  }),
  (_.rotr = _.rotateRight),
  (_.toSigned = function () {
    return this.unsigned ? _(this.low, this.high, !1) : this;
  }),
  (_.toUnsigned = function () {
    return this.unsigned ? this : _(this.low, this.high, !0);
  }),
  (_.toBytes = function (_) {
    return _ ? this.toBytesLE() : this.toBytesBE();
  }),
  (_.toBytesLE = function () {
    var _ = this.high,
      _ = this.low;
    return [
      _ & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      _ >>> 24,
      _ & 255,
      (_ >>> 8) & 255,
      (_ >>> 16) & 255,
      _ >>> 24,
    ];
  }),
  (_.toBytesBE = function () {
    var _ = this.high,
      _ = this.low;
    return [
      _ >>> 24,
      (_ >>> 16) & 255,
      (_ >>> 8) & 255,
      _ & 255,
      _ >>> 24,
      (_ >>> 16) & 255,
      (_ >>> 8) & 255,
      _ & 255,
    ];
  }),
  (_.fromBytes = function (_, _, _) {
    return _ ? _.fromBytesLE(_, _) : _.fromBytesBE(_, _);
  }),
  (_.fromBytesLE = function (_, _) {
    return new _(
      _[0] | (_[1] << 8) | (_[2] << 16) | (_[3] << 24),
      _[4] | (_[5] << 8) | (_[6] << 16) | (_[7] << 24),
      _,
    );
  }),
  (_.fromBytesBE = function (_, _) {
    return new _(
      (_[4] << 24) | (_[5] << 16) | (_[6] << 8) | _[7],
      (_[0] << 24) | (_[1] << 16) | (_[2] << 8) | _[3],
      _,
    );
  }),
  typeof BigInt == `function` &&
    ((_.fromBigInt = function (_, _) {
      return _(
        Number(BigInt.asIntN(32, _)),
        Number(BigInt.asIntN(32, _ >> BigInt(32))),
        _,
      );
    }),
    (_.fromValue = function (_, _) {
      return typeof _ == `bigint` ? _.fromBigInt(_, _) : _(_, _);
    }),
    (_.toBigInt = function () {
      var _ = BigInt(this.low >>> 0);
      return (
        (BigInt(this.unsigned ? this.high >>> 0 : this.high) << BigInt(32)) | _
      );
    })));
var _ = class _ {
  m_ulSteamID = _.UZERO;
  constructor(_ = 0, _, _, _) {
    _ instanceof _
      ? (this.m_ulSteamID = _.m_ulSteamID)
      : typeof _ == `string`
        ? (this.m_ulSteamID = _.fromString(_, !0))
        : _ && _ && _ !== void 0
          ? this.SetFromComponents(_ ?? 0, _, _, _)
          : (this.m_ulSteamID = _ ? _.fromNumber(_, !0) : _.UZERO);
  }
  static InitFromAccountID(_, _) {
    return _ ? new _(Number(_), _, 1, 1) : new _();
  }
  static InitFromClanID(_, _) {
    return new _(Number(_), _, 7, 0);
  }
  static ToAccountID(_) {
    return _.ExtractAccountID(_.fromString(_, !0));
  }
  static ExtractAccountID(_) {
    return _.getLowBitsUnsigned();
  }
  GetAccountID() {
    return _.ExtractAccountID(this.m_ulSteamID);
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case 0:
        return `[I:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 7:
        return `[g:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 4:
        return (
          `[A:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 3:
        return `[G:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 2:
        return (
          `[M:` +
          this.GetUniverse() +
          `:` +
          this.GetAccountID() +
          `:` +
          this.GetInstance() +
          `]`
        );
      case 5:
        return `[P:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      case 6:
        return `[C:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
      default:
        return `[U:` + this.GetUniverse() + `:` + this.GetAccountID() + `]`;
    }
  }
  static InitFromString(_) {
    let _ = new _();
    try {
      let [_, _, _, _, _] =
          _.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        _ = Number(_),
        _ = Number(_),
        _ = _ ? Number(_) : 1;
      switch (_) {
        case `I`:
          _.SetFromComponents(_, _, 0, _);
          break;
        case `g`:
          _.SetFromComponents(_, 0, 7, _);
          break;
        case `A`:
          _.SetFromComponents(_, _, 4, _);
          break;
        case `G`:
          _.SetFromComponents(_, _, 3, _);
          break;
        case `M`:
          _.SetFromComponents(_, _, 2, _);
          break;
        case `P`:
          _.SetFromComponents(_, _, 5, _);
          break;
        case `C`:
          _.SetFromComponents(_, _, 6, _);
          break;
        case `U`:
          _.SetFromComponents(_, _, 1, _);
      }
    } catch {}
    return _;
  }
  BIsValid() {
    let _ = this.GetAccountType();
    if (_ <= 0 || _ >= 11) return !1;
    let _ = this.GetUniverse();
    if (_ <= 0 || _ >= 5) return !1;
    if (_ == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
    } else if (_ == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (_ == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(_) {
    this.m_ulSteamID = new _(_, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      _,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      _,
      this.GetUniverse(),
    );
  }
  SetUniverse(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      _,
    );
  }
  SetFromComponents(_, _, _, _) {
    let _ = ((_ & 255) << 24) + ((_ & 15) << 20) + (_ & 1048575),
      _ = _ | 0;
    this.m_ulSteamID = new _(_, _, !0);
  }
};
