import {
  Jr as e,
  pn as t,
  qr as n,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
var r = (function (e) {
    return (
      (e[(e.Debug = 0)] = `Debug`),
      (e[(e.Info = 1)] = `Info`),
      (e[(e.Warning = 2)] = `Warning`),
      (e[(e.Error = 3)] = `Error`),
      e
    );
  })({}),
  i = class {
    m_sName;
    m_fnIdGenerator = void 0;
    constructor(e, t) {
      ((this.m_sName = e),
        (this.m_fnIdGenerator = t),
        a.Get().RegisterLogName(e));
    }
    Debug(...e) {
      this.Log(0, ...e);
    }
    Info(...e) {
      this.Log(1, ...e);
    }
    Warning(...e) {
      this.Log(2, ...e);
    }
    Error(...e) {
      this.Log(3, ...e);
    }
    Assert(e, ...t) {
      e || this.Log(3, `Assertion failed:`, ...t);
    }
    IsDebugEnabled() {
      return a.Get().IsDebugLogEnabled(this.m_sName);
    }
    Log(e, ...t) {
      let n = a.Get().IsDebugLogEnabled(this.m_sName);
      if (e == 0 && !n) return;
      let r = this.m_sName,
        i = this.m_fnIdGenerator?.() ?? null;
      i != null && (r += ` (` + i + `)`);
      let o = a.Get().IncludeBacktraceInLog,
        s = a.Get().AllowCSSInLogStyling;
      l(e, n, o, s, r, this.m_sName, ...t);
    }
  };
(t([e], i.prototype, `Debug`, null),
  t([e], i.prototype, `Info`, null),
  t([e], i.prototype, `Warning`, null),
  t([e], i.prototype, `Error`, null),
  t([e], i.prototype, `Assert`, null));
var a = class e {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new n();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(...e) {
    l(
      1,
      !0,
      this.IncludeBacktraceInLog,
      this.AllowCSSInLogStyling,
      `LogManager`,
      `LogManager`,
      ...e,
    );
  }
  async LoadSettings() {
    let t = (e, t) => {
      try {
        let n = localStorage.getItem(e);
        return n ? JSON.parse(n) : t;
      } catch {
        return t;
      }
    };
    ((this.m_bIncludeBacktraceInLog = !!t(
      e.k_IncludeBacktraceInLog_StorageKey,
      !1,
    )),
      (this.m_bAllowCSSInLogStyling = !!t(
        e.k_AllowCSSInLogColors_StorageKey,
        !0,
      )));
    let n = t(e.k_EnabledLogNames_StorageKey, void 0);
    if (Array.isArray(n)) {
      this.m_setEnabledDebugLogs = new Set(n);
      for (let e of n) this.m_setKnownDebugLogs.add(e);
      this.LogAsLogManager(
        `Loaded debug enabled log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    ((this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch());
  }
  async SaveSettings() {
    (localStorage.setItem(
      e.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        e.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      localStorage.setItem(
        e.k_AllowCSSInLogColors_StorageKey,
        JSON.stringify(this.m_bAllowCSSInLogStyling),
      ),
      this.LogAsLogManager(
        `Saved enabled debug log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  PrintEnabledLogs(...e) {
    (e &&
      e.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${e.join(`', '`)}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        `Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      ));
  }
  static Get() {
    return (
      globalThis.g_LogManager ?? (globalThis.g_LogManager = new e()),
      globalThis.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(e) {
    this.m_setKnownDebugLogs.add(e);
  }
  IsLogName(e) {
    return this.m_setKnownDebugLogs.has(e);
  }
  IsDebugLogEnabled(e) {
    return this.m_setEnabledDebugLogs.has(e);
  }
  async ToggleDebugLogEnabled(e) {
    this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
  }
  async SetDebugLogEnabled(e, t) {
    this.IsLogName(e)
      ? (t
          ? this.m_setEnabledDebugLogs.add(e)
          : this.m_setEnabledDebugLogs.delete(e),
        this.m_SettingsChangedCallback.Dispatch(),
        await this.SaveSettings())
      : console.warn(
          `No log named "${e}", available logs:`,
          this.GetLogNames(),
        );
  }
  async SetDebugLogsEnabled(e, ...t) {
    t.forEach((t) => this.SetDebugLogEnabled(t, e));
  }
  async SetAllDebugLogsEnabled(e) {
    ((this.m_setEnabledDebugLogs = e
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  RegisterForSettingsChanges(e) {
    return this.m_SettingsChangedCallback.Register(e);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(e) {
    ((this.m_bIncludeBacktraceInLog = e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  get AllowCSSInLogStyling() {
    return this.m_bAllowCSSInLogStyling;
  }
  async SetAllowCSSInLogStyling(e) {
    ((this.m_bAllowCSSInLogStyling = e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings());
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function o(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return [(t | 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
}
function s(e) {
  return (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3 >= 128;
}
function c(e) {
  switch (e) {
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
function l(e, t, n, r, i, a, ...l) {
  let u = i;
  n && (u = c(e) + ` ` + u);
  let d;
  if (r && t) {
    let e = o(a).map((e, t) =>
        Math.round(
          Math.max(0, Math.min(255, ((e / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      t = s(e),
      n = l.length >= 1 && typeof l[0] == `string` && l[0].includes(`%c`),
      r = n && l.shift();
    d = [
      `%c${u}%c:${n ? ` %c` + r : ``}`,
      `color: ${t ? `black` : `white`}; background: rgb(${e.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(n ? [``] : []),
      ...l,
    ];
  } else d = [`${u}:`, ...l];
  if (n)
    (console.groupCollapsed(...d),
      console.trace(`Callstack`),
      console.groupEnd());
  else
    switch (e) {
      case 0:
      case 1:
        console.log(...d);
        break;
      case 2:
        console.warn(...d);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ...d) : console.error(...d);
    }
}
((window.DebugLogEnable = (...e) => a.Get().SetDebugLogsEnabled(!0, ...e)),
  (window.DebugLogDisable = (...e) => a.Get().SetDebugLogsEnabled(!1, ...e)),
  (window.DebugLogEnableAll = () => a.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () => a.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () => a.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    a.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => a.Get().GetLogNames()),
  (window.DebugLogEnabled = (...e) => a.Get().PrintEnabledLogs(...e)),
  (window.EnableSteamConsole = (e = !0) =>
    a.Get().SetDebugLogEnabled(`SteamClient`, e)));
export { a as n, r, i as t };
