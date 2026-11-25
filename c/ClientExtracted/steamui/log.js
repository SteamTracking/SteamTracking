import { _, _, _ } from "./chunk~3126832f23.js?contenthash=B40GC_DU";
var _ = (function (_) {
    return (
      (_[(_.Debug = 0)] = `Debug`),
      (_[(_.Info = 1)] = `Info`),
      (_[(_.Warning = 2)] = `Warning`),
      (_[(_.Error = 3)] = `Error`),
      _
    );
  })({}),
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
