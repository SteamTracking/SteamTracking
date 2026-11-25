/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  Dt as e,
  Ot as t,
  Pt as n,
  W as r,
  X as i,
  kt as a,
  n as o,
  nt as s,
  t as c,
  tt as l,
} from "./chunk~de7f2df91c.js";
function u(e, t = 0, n = Math.random) {
  if (e?.length > 1) {
    let r = t > 0 ? Math.min(t, e.length) : e.length;
    for (; r !== 0;) {
      let t = Math.floor(n() * r);
      --r;
      let i = e[r];
      ((e[r] = e[t]), (e[t] = i));
    }
  }
  return e;
}
function d(e, t) {
  let n = e.slice();
  return (u(n), n.slice(0, t));
}
function f(e, t, n) {
  if (t >= 0 && n >= 0) {
    let r = e.splice(t, 1)[0];
    n >= e.length ? (e[n] = r) : e.splice(n, 0, r);
  }
  return e;
}
function p(e, t) {
  return m(e, (e) => t == e);
}
function m(e, t) {
  let n = e.findIndex(t);
  return n >= 0 && (e.splice(n, 1), !0);
}
function h(e, t) {
  let n = 0,
    r = e.length - 1;
  for (; n <= r;) {
    let i = Math.floor((n + r) / 2),
      a = t(e[i]);
    if (a > 0) n = i + 1;
    else if (a < 0) r = i - 1;
    else {
      if (r == i) return i;
      if (i == n) return r > i && t(e[i + 1]) < 0 ? i : i + 1;
      n = i;
    }
  }
  return r;
}
function g(e, t, n) {
  let r = h(e, (e) => n(t, e));
  e.splice(r + 1, 0, t);
}
function _(e, t, n) {
  return e
    ? e.length < t
      ? e.concat(Array(t - e.length).fill(n))
      : e
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function v(e) {
  return Array.from(new Set(e));
}
function y(e, t) {
  let n = Math.min(e.length, t.length);
  return Array.from({ length: n }, (n, r) => [e[r], t[r]]);
}
function b(e, t) {
  return e.reduce((e, n) => (e.set(t(n), n), e), new Map());
}
function x(e, t, n = !0) {
  return !e || e.length == 0
    ? e
    : t
      ? e.sort((e, t) => (e == t ? 0 : n ? (e < t ? -1 : 1) : e > t ? -1 : 1))
      : e.sort((e, t) => {
          let r = e.toLowerCase(),
            i = t.toLowerCase();
          return r == i ? 0 : n ? (r < i ? -1 : 1) : r > i ? -1 : 1;
        });
}
function S(e, t, n) {
  return {
    get() {
      let e = n.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, t) ||
          Object.defineProperty(this, t, { value: e }),
        e
      );
    },
  };
}
var C = class {
    m_vecCallbacks = [];
    Register(e) {
      return (
        this.m_vecCallbacks.push(e),
        {
          Unregister: () => {
            p(this.m_vecCallbacks, e);
          },
        }
      );
    }
    Dispatch(...e) {
      for (let t of Array.from(this.m_vecCallbacks)) t(...e);
    }
    ClearAllCallbacks() {
      this.m_vecCallbacks = [];
    }
    CountRegistered() {
      return this.m_vecCallbacks.length;
    }
    static PromiseFromAny(e) {
      return new Promise((t) => {
        let n = [],
          r = () => {
            (n.forEach((e) => e.Unregister()), t());
          };
        for (let t of e) n.push(t.Register(r));
      });
    }
  },
  ee = a((e, t) => {
    (function () {
      var e = {}.hasOwnProperty;
      function n() {
        for (var e = ``, t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          n && (e = i(e, r(n)));
        }
        return e;
      }
      function r(t) {
        if (typeof t == `string` || typeof t == `number`) return t;
        if (typeof t != `object`) return ``;
        if (Array.isArray(t)) return n.apply(null, t);
        if (
          t.toString !== Object.prototype.toString &&
          !t.toString.toString().includes(`[native code]`)
        )
          return t.toString();
        var r = ``;
        for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
        return r;
      }
      function i(e, t) {
        return t ? (e ? e + ` ` + t : e + t) : e;
      }
      t !== void 0 && t.exports
        ? ((n.default = n), (t.exports = n))
        : typeof define == `function` &&
            typeof define.amd == `object` &&
            define.amd
          ? define(`classnames`, [], function () {
              return n;
            })
          : (window.classNames = n);
    })();
  }),
  w = n(s(), 1),
  T = n(ee(), 1),
  E = class {
    m_sName;
    m_fnIdGenerator = void 0;
    constructor(e, t) {
      ((this.m_sName = e),
        (this.m_fnIdGenerator = t),
        D.Get().RegisterLogName(e));
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
      return D.Get().IsDebugLogEnabled(this.m_sName);
    }
    Log(e, ...t) {
      let n = D.Get().IsDebugLogEnabled(this.m_sName);
      if (e == 0 && !n) return;
      let r = this.m_sName,
        i = this.m_fnIdGenerator?.() ?? null;
      i != null && (r += ` (` + i + `)`);
      let a = D.Get().IncludeBacktraceInLog,
        o = D.Get().AllowCSSInLogStyling;
      ie(e, n, a, o, r, this.m_sName, ...t);
    }
  };
(o([S], E.prototype, `Debug`, null),
  o([S], E.prototype, `Info`, null),
  o([S], E.prototype, `Warning`, null),
  o([S], E.prototype, `Error`, null),
  o([S], E.prototype, `Assert`, null));
var D = class e {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new C();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(...e) {
    ie(
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
function te(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return [(t | 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
}
function ne(e) {
  return (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3 >= 128;
}
function re(e) {
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
function ie(e, t, n, r, i, a, ...o) {
  let s = i;
  n && (s = re(e) + ` ` + s);
  let c;
  if (r && t) {
    let e = te(a).map((e, t) =>
        Math.round(
          Math.max(0, Math.min(255, ((e / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      t = ne(e),
      n = o.length >= 1 && typeof o[0] == `string` && o[0].includes(`%c`),
      r = n && o.shift();
    c = [
      `%c${s}%c:${n ? ` %c` + r : ``}`,
      `color: ${t ? `black` : `white`}; background: rgb(${e.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(n ? [``] : []),
      ...o,
    ];
  } else c = [`${s}:`, ...o];
  if (n)
    (console.groupCollapsed(...c),
      console.trace(`Callstack`),
      console.groupEnd());
  else
    switch (e) {
      case 0:
      case 1:
        console.log(...c);
        break;
      case 2:
        console.warn(...c);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ...c) : console.error(...c);
    }
}
((window.DebugLogEnable = (...e) => D.Get().SetDebugLogsEnabled(!0, ...e)),
  (window.DebugLogDisable = (...e) => D.Get().SetDebugLogsEnabled(!1, ...e)),
  (window.DebugLogEnableAll = () => D.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () => D.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () => D.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    D.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => D.Get().GetLogNames()),
  (window.DebugLogEnabled = (...e) => D.Get().PrintEnabledLogs(...e)),
  (window.EnableSteamConsole = (e = !0) =>
    D.Get().SetDebugLogEnabled(`SteamClient`, e)));
var O = (function (e) {
  return (
    (e[(e.INVALID = 0)] = `INVALID`),
    (e[(e.OK = 1)] = `OK`),
    (e[(e.CANCEL = 2)] = `CANCEL`),
    (e[(e.SECONDARY = 3)] = `SECONDARY`),
    (e[(e.OPTIONS = 4)] = `OPTIONS`),
    (e[(e.BUMPER_LEFT = 5)] = `BUMPER_LEFT`),
    (e[(e.BUMPER_RIGHT = 6)] = `BUMPER_RIGHT`),
    (e[(e.TRIGGER_LEFT = 7)] = `TRIGGER_LEFT`),
    (e[(e.TRIGGER_RIGHT = 8)] = `TRIGGER_RIGHT`),
    (e[(e.DIR_UP = 9)] = `DIR_UP`),
    (e[(e.DIR_DOWN = 10)] = `DIR_DOWN`),
    (e[(e.DIR_LEFT = 11)] = `DIR_LEFT`),
    (e[(e.DIR_RIGHT = 12)] = `DIR_RIGHT`),
    (e[(e.SELECT = 13)] = `SELECT`),
    (e[(e.START = 14)] = `START`),
    (e[(e.LSTICK_CLICK = 15)] = `LSTICK_CLICK`),
    (e[(e.RSTICK_CLICK = 16)] = `RSTICK_CLICK`),
    (e[(e.LSTICK_TOUCH = 17)] = `LSTICK_TOUCH`),
    (e[(e.RSTICK_TOUCH = 18)] = `RSTICK_TOUCH`),
    (e[(e.LPAD_TOUCH = 19)] = `LPAD_TOUCH`),
    (e[(e.LPAD_CLICK = 20)] = `LPAD_CLICK`),
    (e[(e.RPAD_TOUCH = 21)] = `RPAD_TOUCH`),
    (e[(e.RPAD_CLICK = 22)] = `RPAD_CLICK`),
    (e[(e.REAR_LEFT_UPPER = 23)] = `REAR_LEFT_UPPER`),
    (e[(e.REAR_LEFT_LOWER = 24)] = `REAR_LEFT_LOWER`),
    (e[(e.REAR_RIGHT_UPPER = 25)] = `REAR_RIGHT_UPPER`),
    (e[(e.REAR_RIGHT_LOWER = 26)] = `REAR_RIGHT_LOWER`),
    (e[(e.STEAM_GUIDE = 27)] = `STEAM_GUIDE`),
    (e[(e.STEAM_QUICK_MENU = 28)] = `STEAM_QUICK_MENU`),
    (e[(e.DUMMY_INPUT = 29)] = `DUMMY_INPUT`),
    e
  );
})({});
function k(e, t) {
  e != null &&
    (typeof e == `function` ? e(t) : `current` in e && (e.current = t));
}
function A(...e) {
  return w.useCallback((t) => {
    for (let n of e) k(n, t);
  }, e);
}
function ae(...e) {
  if (e && e.length !== 0)
    return e.length === 1
      ? e[0]
      : (t) =>
          e.forEach((e) => {
            if (e) typeof e == `function` ? e(t) : (e.current = t);
            else return;
          });
}
function oe(e, t) {
  let n = w.useRef(void 0);
  return w.useCallback((t) => {
    (n.current && n.current(), (n.current = e(t)));
  }, t);
}
function se(e) {
  let t = w.useRef(null);
  return { refWithValue: t, refForElement: A(e, t) };
}
function ce(e, t) {
  let n = w.useRef(!1);
  (w.useLayoutEffect(
    () => () => {
      n.current && k(e, void 0);
    },
    [e],
  ),
    w.useLayoutEffect(() => {
      (t || n.current) && (k(e, t), (n.current = !!t));
    }, [e, t]));
}
function le(e) {
  return typeof e == `object` && !!e && `value` in e;
}
function ue(e, t) {
  return le(e) && le(t)
    ? e.value === t.value &&
        !!e.bShowOnLeft == !!t.bShowOnLeft &&
        !!e.bShowOnFloatingVRFooter == !!t.bShowOnFloatingVRFooter
    : e === t;
}
var j = (function (e) {
  return (
    (e[(e.GAMEPAD = 0)] = `GAMEPAD`),
    (e[(e.KEYBOARD = 1)] = `KEYBOARD`),
    (e[(e.APPLICATION = 2)] = `APPLICATION`),
    (e[(e.BROWSER = 3)] = `BROWSER`),
    (e[(e.AUTOFOCUS = 4)] = `AUTOFOCUS`),
    e
  );
})({});
(O.OK, O.CANCEL, O.SECONDARY, O.OPTIONS, O.START);
function M(e, t, n) {
  return (e.addEventListener(t, n), () => de(e, t, n));
}
function de(e, t, n) {
  e.removeEventListener(t, n);
}
function fe(e, t) {
  return M(e, `vgp_onbuttondown`, t);
}
function pe(e, t) {
  return M(e, `vgp_onbuttonup`, t);
}
function me(e, t) {
  return M(e, `vgp_onok`, N(t));
}
function he(e, t) {
  return M(e, `vgp_oncancel`, N(t));
}
function ge(e, t) {
  return M(e, `vgp_onsecondaryaction`, N(t));
}
function _e(e, t) {
  return M(e, `vgp_onoptions`, N(t));
}
function ve(e, t) {
  return M(e, `vgp_onmenu`, N(t));
}
function ye(e, t) {
  return M(e, `vgp_ondirection`, N(t));
}
function be(e, t) {
  return M(e, `vgp_onfocus`, t);
}
function xe(e, t) {
  return M(e, `vgp_onblur`, t);
}
function Se(e, t) {
  return M(e, `vgp_requestfocus`, N(t));
}
function N(e) {
  return (t) => {
    e(t) !== !1 && (t.stopPropagation(), t.preventDefault());
  };
}
function Ce(e) {
  let {
      onOKActionDescription: t,
      onCancelActionDescription: n,
      onSecondaryActionDescription: r,
      onOptionsActionDescription: i,
      onMenuActionDescription: a,
      actionDescriptionMap: o,
    } = e,
    s = { ...o };
  return (
    t !== void 0 && (s[O.OK] = t),
    n !== void 0 && (s[O.CANCEL] = n),
    r !== void 0 && (s[O.SECONDARY] = r),
    i !== void 0 && (s[O.OPTIONS] = i),
    a !== void 0 && (s[O.START] = a),
    s
  );
}
var P = r(),
  we = new E(`FocusHistory`),
  Te = we.Debug,
  F = class t {
    m_root;
    constructor(e) {
      this.m_root = e;
    }
    static SerializeNavState(e, n = !0, r = !0) {
      return {
        root: t.SerializeNavNode(e, n, r),
        bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(e, n = !0, r = !0) {
      let i,
        [a, o] = e.GetChildren();
      a.length &&
        o != -1 &&
        n &&
        (i = a.map((e, n) => t.SerializeNavNode(e, n == o || r, r)));
      let s = { rgChildren: i };
      return (
        e.NavKey && (s.sNavKey = e.NavKey), o != -1 && (s.iActiveChild = o), s
      );
    }
    static RestoreSerializedNavState(e, n, r = 0) {
      let { root: i, bHadFocus: a } = n;
      e.Tree.Controller.RestoreHistoryTransaction(() => {
        (t.RestoreSerializedNavNode(e, i),
          (r == 1 || (r == 0 && a)) && e.BTakeFocus(j.APPLICATION));
      });
    }
    static RestoreSerializedNavNode(n, r, i = 0) {
      let { sNavKey: a, iActiveChild: o = -1, rgChildren: s } = r;
      (a && e(a == n.NavKey, `navkey mismatch`), n.SetActiveChild(o));
      let c = we.IsDebugEnabled() ? `[${n.Tree.id}]${Ae(i)}` : ``;
      if (s && s.length) {
        let [e] = n.GetChildren();
        if (o != -1 && we.IsDebugEnabled()) {
          let t = s.length != e.length;
          Te(
            `${c}Restoring node ${n.NavKey} which had active child ${o} of ${s.length}${t ? `- now ${e.length} children.` : ``}`,
          );
        }
        let r = new Map();
        e.forEach((e) => {
          e.NavKey && r.set(e.NavKey, e);
        });
        for (let e of s) {
          if (!e.sNavKey) continue;
          let n = r.get(e.sNavKey);
          n && t.RestoreSerializedNavNode(n, e, i + 1);
        }
        if (o != -1 && s[o]?.sNavKey) {
          let t = r.get(s[o].sNavKey);
          (Te(
            `${c}Restoring node ${n.NavKey}, child with focus: ${s[o].sNavKey} ${t === void 0 ? `MISSING!!` : ``}`,
          ),
            t && n.SetActiveChild(e.indexOf(t)));
        }
        let a = 0,
          l = 0;
        for (; a < e.length && l < s.length;) {
          for (; a < e.length && e[a].NavKey;) a++;
          for (; l < s.length && s[l].sNavKey;) l++;
          if (a >= e.length || l >= s.length) break;
          (t.RestoreSerializedNavNode(e[a], s[l], i + 1), a++, l++);
        }
      }
    }
  };
function Ee(e) {
  return F.SerializeNavState(e, !0, !1);
}
function De(e, t, n = 0) {
  return F.RestoreSerializedNavState(e, t, n);
}
var Oe = class extends F {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(F.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        F.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  ke = class extends F {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, F.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let n = this.m_mapHistory.get(e);
      return n
        ? (console.log(`Restoring history for state ${e}`),
          F.RestoreSerializedNavState(this.m_root, n, t),
          !0)
        : !1;
    }
  };
function Ae(e) {
  if (e == 0) return ``;
  let t = ``;
  for (let n = 0; n < e; n++) t += `*`;
  return ((t += ` `), t);
}
function je(e) {
  return e != null && e.focus !== void 0;
}
function Me(e, t) {
  let n = 0,
    r = 0;
  return (
    t.right < e.left
      ? (n = e.left - t.right)
      : t.left > e.right && (n = t.left - e.right),
    t.bottom < e.top
      ? (r = e.top - t.bottom)
      : t.top > e.bottom && (r = t.top - e.bottom),
    Math.sqrt(n * n + r * r)
  );
}
function Ne(e) {
  let t;
  return (e && (t = e.ownerDocument.defaultView), t);
}
function Pe(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (je(n)) {
      let e = window.getComputedStyle(n);
      if (
        e.position == `fixed` ||
        e.position == `sticky` ||
        ((!t || t == `x`) &&
          (e.overflowX == `scroll` || e.overflowX == `auto`)) ||
        ((!t || t == `y`) && (e.overflowY == `scroll` || e.overflowY == `auto`))
      )
        break;
    }
    n = n.parentElement;
  }
  return je(n) ? n : null;
}
function Fe(e, t) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function I(e, t) {
  if (!(`ownerDocument` in e)) return !0;
  let n = e.ownerDocument.defaultView.getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY;
  return r === `auto` || r === `scroll`;
}
var L = { x: `y`, y: `x` };
function Ie() {
  return { x: 0, y: 0 };
}
function Le(e, t) {
  return e.x * t.x + e.y * t.y;
}
function Re(e, t) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ze(e, t) {
  let n = Re(e, t);
  return Math.sqrt(Le(n, n));
}
var Be = class {
  SyncStore(e) {
    return this.Subscribe(e).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
(o([S], Be.prototype, `SyncStore`, null),
  o([S], Be.prototype, `GetValue`, null));
var Ve = class extends Be {},
  He = class extends Ve {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(e, t) {
      (super(),
        (this.m_callbacks = new C()),
        (this.m_currentValue = e),
        (this.m_fnEquals = t));
    }
    Set(e) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, e)) return !1;
      } else if (this.m_currentValue === e) return !1;
      return ((this.m_currentValue = e), this.m_callbacks.Dispatch(e), !0);
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(e) {
      return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function Ue(e, t) {
  return new He(e, t);
}
var We = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(e, t) {
    (this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = t),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e)));
  }
  AsyncSchedule(e, t) {
    return new Promise((n, r) => {
      (this.Schedule(e, () => {
        (t(), n());
      }),
        (this.m_fnOnCancel = r));
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let e = this.m_fnOnCancel;
      (clearTimeout(this.m_schTimer), this.Reset(), e && e());
    }
  }
  Reset() {
    ((this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0));
  }
  ScheduledInternal() {
    let e = this.m_fnCallback;
    (this.Reset(), e?.());
  }
};
o([S], We.prototype, `ScheduledInternal`, null);
var Ge = class {
    m_rgListeners = [];
    AddEventListener(e, t, n) {
      (e.addEventListener(t, n),
        this.m_rgListeners.push({ element: e, type: t, listener: n }));
    }
    Unregister() {
      for (let e of this.m_rgListeners)
        e.element.removeEventListener(e.type, e.listener);
      this.m_rgListeners = [];
    }
  },
  Ke = class {
    m_vecCallbacks = [];
    Push(e) {
      this.m_vecCallbacks.push(e);
    }
    PushArrayRemove(e, t) {
      this.m_vecCallbacks.push(() => p(e, t));
    }
    Unregister() {
      for (let e of this.m_vecCallbacks) e();
      this.m_vecCallbacks = [];
    }
    GetUnregisterFunc() {
      return this.Unregister;
    }
  };
o([S], Ke.prototype, `Unregister`, null);
function qe(e, t, n) {
  return e == null || t == null
    ? e === t
    : typeof e != `object` ||
        typeof t != `object` ||
        Object.keys(e).length !== Object.keys(t).length
      ? !1
      : ((n ??= (e, t) => e === t),
        Object.keys(e).every((r) => t.hasOwnProperty(r) && n(e[r], t[r])));
}
function Je(e, t) {
  let n = t.lastIndexOf(`.`);
  if (n == -1) return !1;
  let r = t.substring(0, n),
    i = t.substring(n + 1),
    a = Xe(e, r);
  return a !== null && typeof a[i] == `function`;
}
function Ye(e) {
  return Je(window, e);
}
function Xe(e, t) {
  let n = (e) => e && typeof e == `object`,
    r = e?.SteamClient;
  for (let e of t.split(`.`)) {
    if (!n(r) || !(e in r)) return null;
    r = r[e];
  }
  return n(r) ? r : null;
}
function R(e) {
  return e != null && e.focus !== void 0;
}
function Ze(e) {
  if (!e.clientX && !e.clientY && !e.screenX && !e.screenY) return !0;
  if (e.relatedTarget) return !Qe(e.currentTarget, e.relatedTarget);
  {
    let t = e.currentTarget.getBoundingClientRect();
    return e.clientX <= t.left ||
      e.clientX >= t.right ||
      e.clientY <= t.top ||
      e.clientY >= t.bottom
      ? (console.log(`${e.clientX} <= ${t.left} || ${e.clientX} >= ${t.right} ||
				${e.clientY} <= ${t.top} || ${e.clientY} >= ${t.bottom}`),
        !0)
      : !1;
  }
}
function Qe(e, t) {
  let n = t;
  for (; n;) {
    if (
      (n.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (n = n.parentNode.host),
      n == e)
    )
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function $e(e, t) {
  let n = 0,
    r = 0;
  return (
    t.right < e.left
      ? (n = e.left - t.right)
      : t.left > e.right && (n = t.left - e.right),
    t.bottom < e.top
      ? (r = e.top - t.bottom)
      : t.top > e.bottom && (r = t.top - e.bottom),
    Math.sqrt(n * n + r * r)
  );
}
function et(e, t) {
  return {
    top: e.screenTop + t.top,
    bottom: e.screenTop + t.bottom,
    left: e.screenLeft + t.left,
    right: e.screenLeft + t.right,
  };
}
function tt(e) {
  let t = 1,
    n = e;
  for (; n != null && n.tagName != `HTML`;) {
    let e = getComputedStyle(n);
    if (e.zoom) {
      let n = Number.parseFloat(e.zoom);
      isNaN(n) || (t *= n);
    }
    n = n.parentElement;
  }
  return t;
}
function nt(e) {
  let t;
  return (
    e && R(e.currentTarget) && (t = e.currentTarget.ownerDocument.defaultView),
    t
  );
}
function rt(e) {
  let t;
  return (e && (t = e.ownerDocument.defaultView), t);
}
function it(e) {
  let t = window.top ?? window,
    n = t.document,
    r = n.createElement(`textarea`);
  ((r.textContent = e),
    (r.style.position = `fixed`),
    n.body.appendChild(r),
    r.select());
  try {
    if (
      (Je(t, `Browser.NotifyUserActivation`) &&
        t.SteamClient.Browser.NotifyUserActivation(),
      !n.execCommand(`copy`))
    )
      throw `document.execCommand false`;
  } catch (e) {
    console.warn(`Copy to clipboard failed.`, e);
  } finally {
    n.body.removeChild(r);
  }
}
function at(e) {
  (e.startsWith(`steam://openurl/`) && (e = e.slice(16)), it(e));
}
function ot(e) {
  let t = e.ownerDocument;
  return !!(
    t.fullscreen ||
    t.webkitIsFullScreen ||
    t.mozFullScreen ||
    t.msFullscreenElement
  );
}
function st(e, t) {
  let n = e;
  return n.requestFullscreen
    ? (n.requestFullscreen(), !0)
    : n.webkitRequestFullscreen
      ? (n.webkitRequestFullscreen(), !0)
      : t && t.webkitSetPresentationMode
        ? (t.webkitSetPresentationMode(`fullscreen`), !0)
        : n.mozRequestFullScreen
          ? (n.mozRequestFullScreen(), !0)
          : n.msRequestFullscreen
            ? (n.msRequestFullscreen(), !0)
            : !1;
}
function ct(e) {
  let t = e.ownerDocument;
  t.exitFullscreen
    ? t.exitFullscreen()
    : t.cancelFullscreen
      ? t.cancelFullscreen()
      : t.webkitCancelFullScreen
        ? t.webkitCancelFullScreen()
        : t.mozCancelFullScreen
          ? t.mozCancelFullScreen()
          : t.msExitFullscreen && t.msExitFullscreen();
}
function lt(e, t) {
  let n = e;
  return (
    (n.lastModifiedDate = new Date()), (n.name = t || Date.now().toString()), e
  );
}
function ut(e, t, n) {
  let r = t.parentElement;
  for (; r && r !== e && !r.hasAttribute(n);) r = r.parentElement;
  return r || e;
}
function dt(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (R(n)) {
      if (!t || t == `x`) {
        let e = window.getComputedStyle(n);
        if (
          e.overflowX == `scroll` ||
          e.overflowX == `auto` ||
          e.position == `fixed`
        )
          break;
      }
      if (!t || t == `y`) {
        let e = window.getComputedStyle(n);
        if (
          e.overflowY == `scroll` ||
          e.overflowY == `auto` ||
          e.position == `fixed`
        )
          break;
      }
    }
    n = n.parentElement;
  }
  return R(n) ? n : null;
}
function ft(e, t) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function pt() {
  return mt(document);
}
function mt(e) {
  let t = {};
  return (
    e.querySelectorAll(`link[rel="stylesheet"]`).forEach((e) => {
      t[e.href] = e;
    }),
    t
  );
}
function ht(e, t) {
  gt(e.document, t, !0);
}
function gt(e, t, n) {
  let r = Object.assign({}, t),
    i = e.getElementsByTagName(`head`)[0],
    a = i.getElementsByTagName(`link`),
    o = a.length;
  for (let e = 0; e < o; ++e) {
    let t = a[e];
    r[t.href] ? delete r[t.href] : n && t.parentNode?.removeChild(t);
  }
  let s = [];
  for (let t in r) {
    let n = r[t],
      i = e.createElement(`link`);
    for (let e = 0; e < n.attributes.length; e++) {
      let t = n.attributes.item(e);
      i.setAttribute(t.name, t.value);
    }
    s.push(i);
  }
  return (i.prepend(...s), s);
}
function _t(e, t, n) {
  if (e.type === `childList`) {
    for (let n = 0; n < e.addedNodes.length; n++) {
      let r = e.addedNodes[n];
      if (r.nodeType === Node.ELEMENT_NODE) {
        let e = r;
        e.parentElement && t(e);
      }
    }
    for (let t = 0; t < e.removedNodes.length; t++) {
      let r = e.removedNodes[t];
      r.nodeType === Node.ELEMENT_NODE && n?.(r);
    }
  }
}
function vt(e, t, n) {
  let r = [],
    [i, a] = e.GetChildren(),
    o = e.GetActiveChild(),
    s,
    c = o ? o.Element?.getBoundingClientRect() : null;
  if (o) {
    let e = xt(o, t, n);
    if (
      e &&
      !e.offScreen &&
      ((s = yt(o, e, e.overlap, n)), s && !s.visibility.offScreen)
    )
      return s;
    e && r.push({ child: o, visibility: e });
  }
  let l = n || c;
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    if (n == o) continue;
    let a = xt(n, t, l ?? void 0);
    a && r.push({ child: n, visibility: a });
  }
  r.sort(bt);
  let u;
  for (let e of r) {
    let { child: n, visibility: r } = e;
    if (
      r.offScreen &&
      u &&
      (!u.visibility.offScreen ||
        (r.distance && r.distance > u.visibility.distance))
    )
      break;
    let i = n == o ? s : yt(n, r, r.overlap || t, l ?? void 0);
    i && (!u || bt(i, u) < 0) && (u = i);
  }
  return u;
}
function yt(e, t, n, r) {
  switch (e.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return vt(e, t.overlap || n, r);
    case `self`:
      return { child: e, visibility: t };
  }
}
function bt(e, t) {
  let n = e.visibility,
    r = t.visibility;
  return n.offScreen
    ? r.offScreen
      ? n.distance - r.distance
      : 1
    : r.offScreen
      ? -1
      : n.distance - r.distance;
}
function xt(e, t, n) {
  let r = e.Element?.getBoundingClientRect(),
    i = e.GetFocusable(),
    a;
  if (i == `none` || !r || !t) return null;
  if (i == `self`) {
    if (
      r.top < t.top ||
      r.right > t.right ||
      r.bottom > t.bottom ||
      r.left < t.left
    ) {
      let e = r.top + r.height / 2,
        n = r.left + r.width / 2;
      if (e < t.top) return { offScreen: `top`, distance: t.top - e };
      if (n > t.right) return { offScreen: `right`, distance: n - t.right };
      if (e > t.bottom) return { offScreen: `bottom`, distance: e - t.bottom };
      if (n < t.left) return { offScreen: `left`, distance: t.left - n };
    }
    n && (a = $e(r, n));
  } else if (i == `children`) {
    let n = e.Element;
    if (!n) return null;
    if (n.scrollHeight > r.height || n.scrollWidth > r.width) {
      let e = n.ownerDocument.defaultView.getComputedStyle(n);
      if (e.overflowX == `visible` || e.overflowY == `visible`)
        return { overlap: t };
    }
    if (r.bottom < t.top)
      return { offScreen: `top`, distance: t.top - r.bottom };
    if (r.left > t.right)
      return { offScreen: `right`, distance: r.left - t.right };
    if (r.top > t.bottom)
      return { offScreen: `bottom`, distance: r.top - t.bottom };
    if (r.right < t.left)
      return { offScreen: `left`, distance: t.left - r.right };
  }
  return {
    overlap: {
      top: Math.max(r.top, t.top),
      right: Math.min(r.right, t.right),
      bottom: Math.min(r.bottom, t.bottom),
      left: Math.max(r.left, t.left),
    },
    distance: a,
  };
}
var St = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(e, t) {
      ((this.m_window = e), (this.m_options = { timing: `sine`, ...t }));
    }
    Start() {
      ((this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration));
      let e;
      switch (this.m_options.timing) {
        case `linear`:
          e = function (e) {
            return e;
          };
          break;
        case `cubic-in-out`:
          e = function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          };
          break;
        default:
          e = function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          };
      }
      ((this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
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
    OnInterval(e) {
      if (!this.m_bActive) return;
      let t = performance.now() - this.m_msStart;
      if (t >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let n = t / this.m_options.msDuration;
      try {
        this.Update(e(n));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  Ct = class extends St {
    m_fnCallback;
    constructor(e, t, n) {
      (super(e, t), (this.m_fnCallback = n));
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  wt = class extends St {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      (super(`ownerDocument` in e ? Ne(e) : e, n),
        (this.m_object = e),
        (this.m_propTargets = t));
    }
    Start() {
      this.m_props = {};
      for (let e in this.m_propTargets) {
        let t = parseFloat(this.m_object[e]) || 0,
          n = this.m_propTargets[e];
        t != n && (this.m_props[e] = { start: t, end: n });
      }
      super.Start();
    }
    Update(e) {
      for (let t in this.m_props) {
        let n = this.m_props[t],
          r = n.start + (n.end - n.start) * e;
        this.m_object[t] = r;
      }
    }
  },
  z = new E(`ScrollSnap`).Debug,
  Tt,
  Et = 500;
function Dt(e, t, n, r, i) {
  let a = e.Element;
  if (!a) return;
  let o = [{ node: e, eScrollType: e.m_Properties?.scrollIntoViewType }];
  for (let t = e.Parent; t; t = t.Parent) {
    let e = t.m_Properties?.scrollIntoViewWhenChildFocused,
      n = t.m_Properties?.scrollIntoViewType;
    if (e) {
      let r = { node: t, eScrollType: n };
      e === `force` ? (o = [r]) : o.push(r);
    }
    if (n !== void 0)
      for (let e = o.length - 1; e >= 0 && o[e].eScrollType === void 0; e--)
        o[e].eScrollType = n;
  }
  for (; o.length;) {
    let { node: r, eScrollType: s } = o.pop(),
      c = o.length == 0;
    if (
      (s === void 0 && (s = G.Standard),
      r?.m_Properties?.fnScrollIntoViewHandler &&
        r.m_Properties.fnScrollIntoViewHandler(e, t, r) !== !1)
    )
      continue;
    let l = r.m_element,
      u = s == G.NoTransform || s == G.NoTransformSparseContent || !c;
    if (!t && n !== j.GAMEPAD)
      (z(`No previous element for scrolling, will jump`),
        u
          ? It(a, l, `auto`)
          : (z(`Scrolling Into View ('auto' via browser scrollIntoView):`, l),
            l?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            })));
    else {
      let t = u ? B(l) : l.getBoundingClientRect(),
        n = l.ownerDocument.defaultView.innerHeight,
        r = i ? 40 : Math.max(n * 0.4, 40),
        o = !1,
        s = Tt && performance.now() - Tt < Et;
      (s || t.bottom < -r || t.top > n + r) &&
        ((o = !0),
        s ||
          z(
            `Disabling smooth scrolling, ${t.bottom} < ${-r}, ${t.top} > ${n} + ${r} `,
          ));
      let c = o ? `auto` : `smooth`;
      (o && (Tt = performance.now()),
        e.Tree.Controller.BIsRestoringHistory() && (c = `auto`),
        u
          ? It(a, l, c)
          : (z(`Scrolling Into View ('${c}' via browser scrollIntoView):`, l),
            l.scrollIntoView({ behavior: c, block: `nearest` })));
    }
  }
  Ot(e, r);
}
function Ot(e, t) {
  let n = K(t);
  if (!n) return;
  let r = null;
  for (let t = e; t; t = t.GetNavParentCrossingTrees())
    t.m_Properties?.scrollRegionToStartOrEnd && (r = t);
  if (r)
    for (
      let i = e;
      i &&
      !(
        i.BHasFocusableChildInDirection(t, !0) ||
        (i != e &&
          i.Element &&
          i.m_Properties?.scrollRegionToStartOrEnd &&
          kt(i.Element, t, n, i == i.Tree.Root, e.Element),
        i.HasMovementHandler(t)) ||
        i == r
      );
      i = i.GetNavParentCrossingTrees()
    );
}
function kt(e, t, n, r, i) {
  let a = e,
    o = a.ownerDocument;
  if (
    ((r || a == o.body) && o.defaultView && !I(a, n) && (a = o.defaultView),
    !I(a, n))
  )
    return;
  let s = zt(a);
  if (n == `y`) {
    let e = t == O.DIR_DOWN ? s.MaxScrollTop() : 0;
    if (t == O.DIR_UP && i && At(a, i)) return;
    s.scrollTo({ top: e, behavior: `smooth` });
  } else {
    let e = t == O.DIR_RIGHT ? s.MaxScrollLeft() : 0;
    s.scrollTo({ left: e, behavior: `smooth` });
  }
}
function At(e, t) {
  let n = `ownerDocument` in e ? e : null;
  for (let e = t; e && e != n; e = e.parentElement) {
    let t = e.ownerDocument.defaultView?.getComputedStyle(e).position;
    if (t == `fixed` || t == `sticky`) return !1;
  }
  let r, i, a;
  `ownerDocument` in e
    ? ((r = e.getBoundingClientRect().top + e.clientTop),
      (i = e.clientHeight),
      (a = e.scrollTop))
    : ((r = 0), (i = e.innerHeight), (a = e.scrollY));
  let o = t.getBoundingClientRect();
  return o.height > i ? !1 : o.bottom - r + a > i + 1;
}
function B(e) {
  if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
  if (!(`ownerDocument` in e))
    return { left: 0, right: e.innerWidth, top: 0, bottom: e.innerHeight };
  let t = 0,
    n = 0,
    r = e;
  for (; r;) {
    if (`ownerDocument` in r) {
      let e = window.getComputedStyle(r);
      if (e.position === `fixed` || e.position === `sticky`) break;
    }
    ((t += r.offsetTop), (n += r.offsetLeft), (r = r.offsetParent));
  }
  for (r = e?.parentElement; r;) {
    let { scrollTop: e, scrollLeft: i } = Bt(r);
    if (((t -= e), (n -= i), `ownerDocument` in r)) {
      let e = window.getComputedStyle(r);
      if (e.position === `fixed` || e.position === `sticky`) break;
    }
    r = r.parentElement;
  }
  return {
    left: n,
    top: t,
    right: n + e.offsetWidth,
    bottom: t + e.offsetHeight,
  };
}
function jt(e, t) {
  return t == `x`
    ? [e.left, e.right, e.right - e.left]
    : [e.top, e.bottom, e.bottom - e.top];
}
function Mt(e, t, n, r) {
  let [i, a, o] = jt(e, r),
    [s, c, l] = jt(t, r),
    [u, d] = jt(n, r);
  if (i < s && a > c) return 0;
  let f = i - u,
    p = a + d,
    m = o > l;
  return (f < s && !m) || (p > c && m)
    ? f - s
    : (f < s && m) || (p > c && !m)
      ? p - c
      : 0;
}
function V(e) {
  return e == `auto`
    ? 0
    : e.endsWith(`px`)
      ? parseInt(e)
      : (console.log(`Unsupported length`, e), 0);
}
function Nt(e) {
  let t;
  return (
    (t =
      `ownerDocument` in e
        ? e.ownerDocument.defaultView.getComputedStyle(e)
        : e.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: V(t.scrollPaddingLeft),
      right: V(t.scrollPaddingRight),
      top: V(t.scrollPaddingTop),
      bottom: V(t.scrollPaddingBottom),
    }
  );
}
function Pt(e) {
  if (!(`ownerDocument` in e)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let t = e.ownerDocument.defaultView.getComputedStyle(e);
  return {
    left: V(t.scrollMarginLeft),
    right: V(t.scrollMarginRight),
    top: V(t.scrollMarginTop),
    bottom: V(t.scrollMarginBottom),
  };
}
function Ft(e, t) {
  let n = Nt(e);
  return {
    left: Math.max(0, t.left + n.left),
    right: Math.max(0, t.right - n.right),
    top: Math.max(0, t.top + n.top),
    bottom: Math.max(0, t.bottom - n.bottom),
  };
}
function H(e) {
  return e > -1 && e < 1;
}
function It(e, t, n, r, a) {
  (z(
    `----------------------------------------------------------------------------------`,
  ),
    z(`Scrolling Into View (NoTransform):`, t));
  let o = [],
    s = t,
    c = B(t),
    l = a ?? Number.MAX_VALUE;
  for (; s;) {
    let e = Pe(s);
    e ||= Ne(s);
    let t = Pt(s),
      n = B(e),
      u = Ft(e, n),
      d = zt(e),
      f = { element: e, left: 0, top: 0 };
    if (
      (z(
        `Checking scroll div`,
        e,
        `scroll y:${d.scrollTop} of ${d.MaxScrollTop()}, x:${d.scrollLeft} of ${d.MaxScrollLeft()}, adjusted =>`,
        u,
        `target => `,
        c,
      ),
      (!r || r == `y`) &&
        I(e, `y`) &&
        ((f.top = Mt(c, u, t, `y`)),
        (f.top = i(f.top, -d.scrollTop, d.MaxScrollTop() - d.scrollTop)),
        a &&
          ((f.top = Math.min(l, Math.abs(f.top)) * (f.top < 0 ? -1 : 1)),
          (l -= Math.abs(f.top))),
        z(`- checked y: ${f.top}`)),
      (!r || r == `x`) &&
        I(e, `x`) &&
        ((f.left = Mt(c, u, t, `x`)),
        (f.left = i(f.left, -d.scrollLeft, d.MaxScrollLeft() - d.scrollLeft)),
        a &&
          ((f.left = Math.min(l, Math.abs(f.left)) * (f.left < 0 ? -1 : 1)),
          (l -= Math.abs(f.left))),
        z(`- checked x: ${f.left}`)),
      o.push(f),
      (a && !l) || !(`ownerDocument` in e))
    )
      break;
    let p = window.getComputedStyle(e);
    if (p.position === `fixed` || p.position === `sticky`) break;
    ((s = e),
      (c = {
        top: c.top - f.top,
        right: c.right - f.left,
        bottom: c.bottom - f.top,
        left: c.left - f.left,
      }));
  }
  let u = !1;
  for (let e of o) {
    if (H(e.left) && H(e.top)) continue;
    let t = zt(e.element),
      r = t.scrollTop + e.top,
      a = t.scrollLeft + e.left;
    ((a = i(a, 0, t.MaxScrollLeft())),
      (r = i(r, 0, t.MaxScrollTop())),
      !(H(t.scrollLeft - a) && H(t.scrollTop - r)) &&
        (t.scrollTo({ left: a, top: r, behavior: n }),
        (u ||= (z(`Scrolling:`), !0)),
        z(`- ${e.top},${e.left} => ${r}, ${a}, behavior: ${n}`, e.element)));
  }
}
var Lt = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(e) {
    `ownerDocument` in e
      ? ((this.m_element = e),
        (this.m_fnOriginalScrollTo = e.scrollTo),
        (this.m_element.scrollTo = (e, t) => {
          typeof e == `number`
            ? this.scrollTo({ left: e, top: t })
            : this.scrollTo(e);
        }))
      : ((this.m_window = e), (this.m_element = e.document.documentElement));
  }
  ResetScrollState() {
    ((this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = ``));
  }
  scrollTo(e) {
    if (e?.behavior != `smooth`)
      ((this.m_animation &&= (this.m_animation.Cancel(), void 0)),
        this.m_window
          ? this.m_window.scrollTo(e)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
        this.ResetScrollState());
    else {
      let t = e.left ?? this.scrollLeft,
        n = e.top ?? this.scrollTop,
        r = `sine`;
      if (
        (this.m_animation && (this.m_animation.Cancel(), (r = `linear`)),
        Math.max(
          Math.abs(this.currentScrollTop - n),
          Math.abs(this.currentScrollLeft - t),
        ) > 0)
      ) {
        let e = {
          msDuration: 200,
          timing: r,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let r = this.currentScrollLeft,
            i = this.currentScrollTop;
          this.m_animation = new Ct(this.m_window, e, (e) => {
            this.m_window?.scrollTo({
              left: r + (t - r) * e,
              top: i + (n - i) * e,
              behavior: `auto`,
            });
          });
        } else
          ((this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new wt(
              this.m_element,
              { scrollTop: n, scrollLeft: t },
              e,
            )));
        ((this.m_scrollLeftTarget = t),
          (this.m_scrollTopTarget = n),
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
o([S], Lt.prototype, `ResetScrollState`, null);
var Rt = new WeakMap();
function zt(e) {
  let t = Rt.get(e);
  return (t || ((t = new Lt(e)), Rt.set(e, t)), t);
}
function Bt(e) {
  let t = Rt.get(e);
  return t
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
var Vt = new E(`FocusNavigationMovement`),
  U = Vt.Debug,
  W = (function (e) {
    return (
      (e[(e.NONE = 0)] = `NONE`),
      (e[(e.COLUMN = 1)] = `COLUMN`),
      (e[(e.ROW = 2)] = `ROW`),
      (e[(e.COLUMN_REVERSE = 3)] = `COLUMN_REVERSE`),
      (e[(e.ROW_REVERSE = 4)] = `ROW_REVERSE`),
      (e[(e.GRID = 5)] = `GRID`),
      (e[(e.GEOMETRIC = 6)] = `GEOMETRIC`),
      e
    );
  })({}),
  Ht = (function (e) {
    return (
      (e[(e.FIRST = 0)] = `FIRST`),
      (e[(e.LAST = 1)] = `LAST`),
      (e[(e.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (e[(e.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (e[(e.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      e
    );
  })({}),
  G = (function (e) {
    return (
      (e[(e.Standard = 0)] = `Standard`),
      (e[(e.NoTransform = 1)] = `NoTransform`),
      (e[(e.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      e
    );
  })({}),
  Ut = (function (e) {
    return (
      (e[(e.INVALID = 0)] = `INVALID`),
      (e[(e.FORWARD = 1)] = `FORWARD`),
      (e[(e.BACKWARD = 2)] = `BACKWARD`),
      e
    );
  })({}),
  Wt = class t {
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
    m_Focused = Ue(!1);
    m_FocusWithin = Ue(!1);
    m_ActionDescriptionsChangedCallbackList = new C();
    m_FocusableIfEmptyAncestor = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(e, t, n) {
      ((this.m_Tree = e),
        (this.m_Parent = t),
        (this.m_FocusRing = n),
        (this.m_nDepth = t ? t.m_nDepth + 1 : 0));
    }
    CreateHandle() {
      return new Kt(this);
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
    SetProperties(e) {
      let t = !qe(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
          ue,
        ),
        n = this.m_Properties?.focusableIfEmpty,
        r = this.m_Properties?.noFocusRing;
      ((this.m_Properties = e || {}),
        t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !n
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            n &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !r && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(j.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            r &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(j.APPLICATION, this, this),
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
      let e = this.m_element;
      return this.m_Properties?.focusRingSizeElementID
        ? (e?.ownerDocument?.getElementById(
            this.m_Properties.focusRingSizeElementID,
          ) ?? e)
        : e;
    }
    GetBoundingRectForFocusRing() {
      return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
    }
    GetBorderRadiusForFocusRing() {
      if (!this.m_Properties?.focusRingHasBorderRadius) return;
      let e = this.GetElementForFocusRingMeasure();
      if (!e) return;
      let t = e.ownerDocument?.defaultView?.getComputedStyle(e);
      if (t)
        return {
          borderTopLeftRadius: t.borderTopLeftRadius,
          borderTopRightRadius: t.borderTopRightRadius,
          borderBottomRightRadius: t.borderBottomRightRadius,
          borderBottomLeftRadius: t.borderBottomLeftRadius,
        };
    }
    SetHasFocus(e) {
      this.m_Focused.Set(e);
    }
    SetFocusWithin(e) {
      this.m_FocusWithin.Set(e) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(e);
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
    BuildConsolidatedActionDescriptionMap(e) {
      let t = this.m_Properties?.actionDescriptionMap;
      if (t)
        for (let n in t) {
          let r = n;
          e[r] === void 0 && (e[r] = t[r]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(e)
          : e;
    }
    AddChild(t) {
      (this.m_rgChildren.push(t),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? t.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            t.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          t.BFocusWithin() &&
          (e(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1)));
    }
    OnMount(t) {
      ((this.m_element = t),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : e(this == this.m_Tree.Root, `Only root should have no parent`),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents());
      let n =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        r = this.m_Properties?.autoFocus || n;
      if (this.BWantsAutoFocus() || r) {
        let e = -1;
        (this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || r || e !== -1) &&
            (this.SetActiveChild(e),
            !this.m_Parent || this.m_Parent.m_element
              ? n
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    { bFocusDescendant: !0 },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0)));
      } else if (this.m_rgChildren.length) {
        let t = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
        t != -1 &&
          (this.SetActiveChild(t),
          e(
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
      let t = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      ((this.BHasFocus() || t) &&
        (U(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        t && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(j.APPLICATION, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : e(this == this.m_Tree.Root, `Only root should have no parent`));
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
          ye(this.m_element, this.OnNavigationEvent),
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
    RemoveChild(t) {
      let n = this.m_rgChildren.indexOf(t);
      (e(n !== -1, `Child was not found to remove`),
        n !== -1 &&
          (this.m_ActiveChild == t && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(n, 1)));
    }
    UnregisterDOMEvents() {
      (this.m_rgNavigationHandlers.forEach((e) => e()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((e) => e()),
        (this.m_rgFocusHandlers = []));
    }
    GetActiveDescendant() {
      let e = this.GetActiveChild();
      return e ? e.GetActiveDescendant() : this;
    }
    IsValidChildIndex(e) {
      return e >= 0 && e < this.m_rgChildren.length;
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
    EnsureChildrenSorted(e = !1) {
      (!this.m_bChildrenSorted || e) &&
        (this.m_rgChildren.sort((e, t) => {
          let n = e.m_element,
            r = t.m_element;
          if (!n || !n.isConnected) return !r || !r.isConnected ? 0 : 1;
          if (!r || !r.isConnected) return -1;
          let i = n.compareDocumentPosition(r);
          return i & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : i & Node.DOCUMENT_POSITION_FOLLOWING
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
      let e = this.GetActiveChild();
      return e ? e.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(e) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == `children`) {
          let e = this.FindFocusableDescendant();
          if (e && e !== this) {
            (U(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              e.m_element,
            ),
              this.m_Tree.TransferFocus(j.BROWSER, e));
            return;
          }
        }
        this.m_Tree.TransferFocus(j.BROWSER, this);
      }
    }
    OnDOMBlur(e) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(j.BROWSER, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: e,
        focusableIfEmpty: t,
        childFocusDisabled: n,
        fnCanTakeFocus: r,
      } = this.m_Properties;
      return !this.m_bMounted || (r && !r(this))
        ? `none`
        : e || (t && (n || this.m_rgChildren.length == 0))
          ? `self`
          : !n && this.m_rgChildren.length
            ? `children`
            : `none`;
    }
    BTakeFocus(e, t) {
      let n = this.FindFocusableNode(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    FindFocusableNode(e, t) {
      switch (this.GetFocusable()) {
        case `none`:
          return null;
        case `self`:
          return this;
        case `children`:
          return this.FindFocusableDescendant(e, t);
      }
    }
    BChildTakeFocus(e, t) {
      let n = this.FindFocusableDescendant(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    BFocusFirstChild(e) {
      let t = this.FindNextFocusableChildInDirection(-1, 1, O.INVALID);
      return this.InternalFocusDescendant(t, e);
    }
    BFocusLastChild(e) {
      let t = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        O.INVALID,
      );
      return this.InternalFocusDescendant(t, e);
    }
    FindFocusableDescendant(e, t) {
      let n = K(e),
        { focusableIfEmpty: r, childFocusDisabled: i } =
          this.m_Properties ?? {};
      if (i) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: i, resetNavOnEntry: a } =
            this.m_Properties ?? {},
          o = this.GetActiveChildIndex();
        a && e !== void 0 && (o = -1);
        let s = this.GetLayout();
        this.IsValidChildIndex(o) ||
          (o =
            o >= this.m_rgChildren.length || s == 4 || s == 3 || i == 1
              ? this.m_rgChildren.length - 1
              : 0);
        let c, l;
        if (
          (i == 2 ? (l = `x`) : i == 3 ? (l = `y`) : s == 6 && n && (l = L[n]),
          (l || t) && n)
        ) {
          let r = this.m_Tree.GetLastFocusedNode();
          if (t || (r && l == L[n])) {
            let a =
              t ||
              this.AdjustRectForLastMovementOnTangentAxis(
                r.GetBoundingRect(),
                n,
              );
            (U(
              `Taking focus while preserving ${i && Ht[i]} preserved: ${l} movement: ${n}, node:`,
              a,
            ),
              (c = this.FindClosestFocusableNodeToRect(e, a)));
          } else if (l != L[n]) {
            let t = this.ComputeRelativeDirection(e, 5),
              n = t == 2 ? this.m_rgChildren.length : -1;
            c = this.FindNextFocusableChildInDirection(n, t, e);
          }
        } else if (i == 4) {
          let t = this.m_rgChildren;
          for (; t.length;) {
            let n = [];
            for (let r of t) {
              if (
                ((c = r.BWantsPreferredFocus()
                  ? r.FindFocusableNode(e)
                  : void 0),
                c)
              )
                return c;
              n.push(...r.m_rgChildren);
            }
            t = n;
          }
        } else
          i == 1 && (c = this.FindNextFocusableChildInDirection(o + 1, 2, e));
        return (
          (c ||= this.FindNextFocusableChildInDirection(o - 1, 1, e)),
          (c ||= this.FindNextFocusableChildInDirection(o, 2, e)),
          c || (r ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(e) {
      let t = this.Element?.ownerDocument?.defaultView ?? window,
        n = { top: 0, left: 0, right: t.innerWidth, bottom: t.innerHeight },
        r = vt(this, n);
      return (
        U(
          `Focusing visible child, best child match is ${r?.child?.Element?.className} - ${JSON.stringify(r?.visibility)}`,
        ),
        r ? r.child.BTakeFocus(e) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : $t(this.m_element);
    }
    OnNavigationEvent(e) {
      let t = e.detail.button;
      if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: n,
          onMoveRight: r,
          onMoveDown: i,
          onMoveLeft: a,
        } = this.m_Properties ?? {},
        o = !1;
      switch (t) {
        case O.DIR_UP:
          n && (o = n(e.detail, this));
          break;
        case O.DIR_RIGHT:
          r && (o = r(e.detail, this));
          break;
        case O.DIR_DOWN:
          i && (o = i(e.detail, this));
          break;
        case O.DIR_LEFT:
          a && (o = a(e.detail, this));
      }
      return o;
    }
    InternalFocusDescendant(e, t, n) {
      return e ? (this.m_Tree.TransferFocus(t, e, n, !1), !0) : !1;
    }
    BHasFocusableChildInDirection(e, t) {
      let n = this.FindNextFocusableChild(e);
      if (t && n) {
        let e = n.GetWrappedTree();
        if (e && e.GetExcludeFromScrollRegionSearch()) return !1;
        for (let e = n; e && e != this; e = e.m_Parent)
          if (e.m_Properties?.excludeFromScrollRegionSearch) return !1;
      }
      return !!n;
    }
    HasMovementHandler(e) {
      switch (e) {
        case O.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case O.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case O.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case O.DIR_RIGHT:
          return !!this.m_Properties?.onMoveRight;
      }
      return !1;
    }
    FindNextFocusableChild(e) {
      let t = this.GetLayout(),
        n = this.ComputeRelativeDirection(e, t);
      if (n == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
        return null;
      if ((this.EnsureChildrenSorted(!0), t == 5))
        return this.FindNextFocusableChildInGrid(
          this.GetActiveChildIndex(),
          n,
          e,
        );
      if (t == 6) return this.FindNextFocusableChildGeometric(n, e);
      let r = this.GetActiveChildIndex();
      return (
        this.IsValidChildIndex(r) ||
          (r = n == 1 ? -1 : this.m_rgChildren.length),
        this.FindNextFocusableChildInDirection(r, n, e)
      );
    }
    BTryInternalNavigation(e, t) {
      U(
        `Handling navigation event ${O[e]} - ${W[this.GetLayout()]}`,
        this.m_element,
      );
      let n = this.FindNextFocusableChild(e);
      if (!n) return !1;
      let r = K(e),
        i = this.ComputeRelativeDirection(e, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || n.GetScrollIntoViewType() == 2) {
        let e = n.Element?.ownerDocument.defaultView;
        if (e) {
          let a = (r == `y` ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
            o = B(n.Element),
            s = !1;
          if (
            (r == `y`
              ? i == 1
                ? (s = o.top > e.innerHeight && o.bottom > e.innerHeight + a)
                : i == 2 && (s = o.bottom < 0 && o.top < -a)
              : r == `x` &&
                (i == 1
                  ? (s = o.left > e.innerWidth && o.right > e.innerWidth + a)
                  : i == 2 && (s = o.right < 0 && o.left < -a)),
            s)
          )
            return (
              U(`Element too far away, scrolling ${a} on ${r} axis `),
              It(n.Element, n.Element, `smooth`, r, a),
              !0
            );
        }
      }
      return (this.m_Tree.TransferFocus(j.GAMEPAD, n, e), !0);
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType !== void 0 &&
        this.m_Properties?.scrollIntoViewType !== null
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(e) {
      return this.ComputeRelativeDirection(e, this.GetLayout());
    }
    ComputeRelativeDirection(e, t) {
      let n = t == 4 || t == 3;
      switch (t) {
        case 2:
        case 4:
          switch (e) {
            case O.DIR_LEFT:
              return n ? 1 : 2;
            case O.DIR_RIGHT:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case O.DIR_UP:
              return n ? 1 : 2;
            case O.DIR_DOWN:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (e) {
            case O.DIR_LEFT:
            case O.DIR_UP:
              return n ? 1 : 2;
            case O.DIR_RIGHT:
            case O.DIR_DOWN:
              return n ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(e, t) {
      return e + (t == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(e, t, n) {
      let r = t == 1 ? 1 : -1;
      for (let t = e + r; t >= 0 && t < this.m_rgChildren.length; t += r) {
        let e = this.m_rgChildren[t].FindFocusableNode(n);
        if (e) return e;
      }
      return null;
    }
    ScanChildren(e, t, n) {
      let r = t == 1 ? 1 : -1;
      for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += r)
        if (n(this.m_rgChildren[t], t)) return t;
      return -1;
    }
    FindNextFocusableChildInGrid(t, n, r) {
      let i = r == O.DIR_UP || r == O.DIR_DOWN,
        a = this.GetLastFocusElement();
      if (!a || a == this.m_element)
        return (
          e(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            a,
          ),
          this.FindFocusableDescendant(r)
        );
      let o = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((r == O.DIR_UP || r == O.DIR_DOWN) &&
          (o = this.AdjustRectForLastMovementOnTangentAxis(o, `y`)),
        i)
      ) {
        let e = t;
        for (; e != -1;) {
          let t = this.ScanChildren(
            this.AdvanceIndex(e, n),
            n,
            (e) => !qt(`y`, o, e.GetBoundingRect()),
          );
          if (t != -1) {
            let e = this.m_rgChildren[t].GetBoundingRect(),
              i = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                n,
                r,
                o,
                t,
                e,
              );
            if (i) return i;
          }
          e = t;
        }
      } else {
        let e = n == 1 ? 1 : -1;
        for (
          let i = this.AdvanceIndex(t, n);
          i >= 0 && i < this.m_rgChildren.length;
          i += e
        ) {
          let e = this.m_rgChildren[i];
          if (!qt(`y`, o, e.GetBoundingRect())) return null;
          let t = e.FindFocusableNode(r);
          if (t) return t;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(t, n) {
      let r = this.GetLastFocusElement();
      if (!r || r == this.m_element)
        return (
          e(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            r,
          ),
          this.FindFocusableDescendant(n)
        );
      let i = K(n);
      if (!i) return null;
      let a = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        i,
      );
      return this.FindClosetChildInDirection(i, a, t, n);
    }
    AdjustRectForLastMovementOnTangentAxis(e, t) {
      let n = this.m_Tree.GetLastFocusedMovementRect(L[t]);
      return n
        ? t == `x`
          ? { left: e.left, right: e.right, top: n.top, bottom: n.bottom }
          : { left: n.left, right: n.right, top: e.top, bottom: e.bottom }
        : e;
    }
    FindClosestFocusableNodeToRect(e, t) {
      let n = K(e),
        r = n && L[n],
        i = [];
      for (let e of this.m_rgChildren) {
        let n = e.GetBoundingRect();
        if (n) {
          let a = Me(t, n),
            o = r ? Jt(r, t, n) : 0;
          i.push({ child: e, overlap: o, dist: a });
        }
      }
      i.sort((e, t) =>
        e.dist == t.dist ? t.overlap - e.overlap : e.dist - t.dist,
      );
      for (let { child: n } of i) {
        let r = n.FindFocusableNode(e, t);
        if (r) return r;
      }
      return null;
    }
    FindClosetChildInDirection(e, t, n, r) {
      U(
        `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
      );
      let i = Yt(e, t),
        a = [];
      for (let r of this.m_rgChildren) {
        let o = r.GetBoundingRect();
        if (o) {
          let s = Yt(e, o),
            c;
          ((c = n == 1 ? s.min - i.max : i.min - s.max),
            c >= 0 && a.push({ child: r, overlap: Jt(L[e], t, o), dist: c }));
        }
      }
      if (
        (a.sort((e, t) => {
          if (e.overlap) {
            if (!t.overlap) return -1;
          } else if (t.overlap) return 1;
          return e.dist - t.dist || t.overlap - e.overlap;
        }),
        Vt.IsDebugEnabled())
      ) {
        let e = a
          .slice(0, 3)
          .map(
            ({ dist: e, overlap: t, child: n }) =>
              `[ node: ${n.m_element?.className} dist: ${e} overlap: ${t} ]`,
          );
        U(`Found nodes on axis, top 3 (of ${a.length}: ${e.join(`, `)}`);
      }
      for (let { child: e } of a) {
        let n = e.FindFocusableNode(r, t);
        if (n) return n;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(e, t, n, r, i, a) {
      (!i || i < 0) && (i = 0);
      let o = [];
      if (!r) return null;
      let s = Zt(r);
      (this.ScanChildren(i, t, (t) => {
        let n = t.GetBoundingRect();
        return n
          ? a && !qt(L[e], a, n)
            ? !0
            : (o.push({ child: t, overlap: Jt(e, r, n), dist: Xt(e, s, n) }),
              !1)
          : !1;
      }),
        t == 2 && o.reverse(),
        o.sort((e, t) => {
          let n = t.overlap - e.overlap;
          return n == 0 ? e.dist - t.dist : n;
        }));
      for (let { child: e } of o) {
        let t = e.FindFocusableNode(n, r);
        if (t) return t;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(e) {
      e instanceof t
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = e),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
        : (this.IsValidChildIndex(e) &&
            (this.m_ActiveChild = this.m_rgChildren[e]),
          (this.m_iLastActiveChildIndex = e));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(e) {
      ((this.m_FocusableIfEmptyAncestor = e),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(e));
    }
    PropagateFocusableIfEmptyAncestorToDescendants(e) {
      for (let t = 0; t < this.m_rgChildren.length; t++)
        this.m_rgChildren[t].SetFocusableIfEmptyAncestor(e);
    }
    OnFocusedDecendantRemoved(e) {
      this.m_Tree.DeferredFocus.RequestFocus(this, { bFocusDescendant: !0 });
    }
    SetDOMFocusAndScroll(t, n, r, i) {
      (this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(t),
        this.m_Tree.BIsActiveFocus()
          ? (e(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({ preventScroll: !0 }))
          : this.m_Tree.BUseVirtualFocus() ||
            U(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && Dt(this, n, t, r, i));
    }
  };
(o([S], Wt.prototype, `OnDOMFocus`, null),
  o([S], Wt.prototype, `OnDOMBlur`, null),
  o([S], Wt.prototype, `OnNavigationEvent`, null));
function Gt(e, t = window) {
  return t[e];
}
var Kt = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(e) {
    this.m_node = e;
  }
  TakeFocus(e) {
    return this.m_node.BTakeFocus(e ? j.GAMEPAD : j.APPLICATION, e);
  }
  ParentTakeFocus(e) {
    this.m_node.Parent?.BTakeFocus(e ? j.GAMEPAD : j.APPLICATION, e);
  }
  ChildTakeFocus(e) {
    return this.m_node.BChildTakeFocus(e ? j.GAMEPAD : j.APPLICATION, e);
  }
  FocusVisibleChild(e) {
    return this.m_node.BVisibleChildTakeFocus(e);
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
    ((this.m_History ||= new Oe(this.m_node)), this.m_History.PushState());
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    ((this.m_StateHistory ||= new ke(this.m_node)),
      this.m_StateHistory.SaveState(e));
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Ee(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return De(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function qt(t, n, r, i = 0.001) {
  return t == `x`
    ? n.right > r.left + i && n.left + i < r.right
    : t == `y`
      ? n.bottom > r.top + i && n.top + i < r.bottom
      : (e(!1, `Invalid axis ${t}`), !1);
}
function Jt(t, n, r) {
  let i;
  return (
    t == `x`
      ? (i = Math.min(n.right, r.right) - Math.max(n.left, r.left))
      : t == `y`
        ? (i = Math.min(n.bottom, r.bottom) - Math.max(n.top, r.top))
        : (e(!1, `Invalid axis ${t}`), (i = 0)),
    i < 0 ? 0 : i
  );
}
function Yt(e, t) {
  return e == `x`
    ? { min: t.left, max: t.right }
    : { min: t.top, max: t.bottom };
}
function Xt(e, t, n) {
  let r = t[e],
    i = Yt(e, n);
  return r < i.min ? i.min - r : r > i.max ? r - i.max : 0;
}
function Zt(e) {
  return { x: e.left, y: e.top };
}
var Qt = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function $t(e) {
  if (!e) return W.NONE;
  let t = e.ownerDocument.defaultView,
    n = t.getComputedStyle(e);
  if (n.display == `flex`)
    switch (n.flexDirection) {
      case `row`:
        return n.flexWrap == `wrap` ? W.GRID : W.ROW;
      case `row-reverse`:
        return W.ROW_REVERSE;
      case `column`:
        return W.COLUMN;
      case `column-reverse`:
        return W.COLUMN_REVERSE;
    }
  else if (n.display == `grid`)
    return n.gridTemplateAreas === `none` ? W.GRID : W.GEOMETRIC;
  else if (e.childElementCount > 0) {
    let r = t.getComputedStyle(e.firstElementChild),
      i = r.float;
    if (
      (i === `inline-start`
        ? ((i = `left`), n.direction === `rtl` && (i = `right`))
        : i === `inline-end` &&
          ((i = `right`), n.direction === `rtl` && (i = `left`)),
      i === `left`)
    )
      return W.ROW;
    if (i === `right`) return W.ROW_REVERSE;
    if (r.display === `inline` || r.display === `inline-block`) return W.GRID;
  }
  return W.COLUMN;
}
function K(e) {
  switch (e) {
    case O.DIR_UP:
    case O.DIR_DOWN:
      return `y`;
    case O.DIR_LEFT:
    case O.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function en(e, t, n = [], r = !0) {
  let i = w.useRef(e);
  ((i.current = e),
    w.useEffect(() => {
      if (!i.current || !r) return;
      let e = setInterval(() => {
        i.current && i.current();
      }, t);
      return () => clearInterval(e);
    }, [t, r, ...n]));
}
function tn() {
  let [, e] = w.useState(0);
  return w.useCallback(() => e((e) => e + 1), []);
}
function nn(e) {
  let t = w.useRef({
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
    w.useEffect(() => {
      let e = t.current;
      return () => e.fnExecuteLatestCallback();
    }, []),
    w.useCallback(
      (n) => {
        let r = t.current;
        r.fnLatestCallback = n;
        let i = performance.now() - r.flLastExecutionTimeMs,
          a = Math.max(e - i, 0);
        (window.clearTimeout(r.nTimeoutHandle),
          (r.nTimeoutHandle = window.setTimeout(
            () => r.fnExecuteLatestCallback(),
            a,
          )));
      },
      [e],
    )
  );
}
function rn(e, t) {
  w.useLayoutEffect(() => {
    if (!t || !e) return;
    let n = e.Register(t);
    return () => n.Unregister();
  }, [e, t]);
}
function an(e) {
  return on;
}
function on() {}
function q(e) {
  return w.useSyncExternalStore(
    e ? e.SyncStore : an,
    e ? e.GetValue : on,
    e ? e.GetValue : on,
  );
}
function sn(e, t) {
  w.useEffect(() => {
    if (e && t) return e.Subscribe(t).Unsubscribe;
  }, [e, t]);
}
function cn(e, t) {
  let [n, r] = w.useState(e);
  return (
    w.useEffect(() => {
      if (e) r(!0);
      else {
        let e = window.setTimeout(() => r(!1), t);
        return () => window.clearTimeout(e);
      }
    }, [e, t]),
    n
  );
}
function ln(e, t) {
  return cn(e, t) || e;
}
function un(e = !1) {
  let [t, n] = w.useState(e);
  return [t, w.useCallback(() => n(!0), []), w.useCallback(() => n(!1), [])];
}
function dn(e) {
  let t = w.useRef(void 0);
  return w.useCallback(
    () => (
      (t.current && t.current.factory == e) ||
        (t.current = { value: e(), factory: e }),
      t.current.value
    ),
    [e],
  );
}
function fn(e) {
  let t = w.useRef(e);
  return (
    (t.current.length !== e.length || t.current.some((t, n) => t !== e[n])) &&
      (t.current = e),
    t.current
  );
}
var pn = (function (e) {
    return (
      (e[(e.LaunchGame = 0)] = `LaunchGame`),
      (e[(e.FriendMessage = 1)] = `FriendMessage`),
      (e[(e.ChatMention = 2)] = `ChatMention`),
      (e[(e.ChatMessage = 3)] = `ChatMessage`),
      (e[(e.ToastMessage = 4)] = `ToastMessage`),
      (e[(e.ToastAchievement = 5)] = `ToastAchievement`),
      (e[(e.ToastMisc = 6)] = `ToastMisc`),
      (e[(e.ToastMiscShort = 7)] = `ToastMiscShort`),
      (e[(e.FriendOnline = 8)] = `FriendOnline`),
      (e[(e.FriendInGame = 9)] = `FriendInGame`),
      (e[(e.VolSound = 10)] = `VolSound`),
      (e[(e.ShowModal = 11)] = `ShowModal`),
      (e[(e.HideModal = 12)] = `HideModal`),
      (e[(e.IntoGameDetail = 13)] = `IntoGameDetail`),
      (e[(e.OutOfGameDetail = 14)] = `OutOfGameDetail`),
      (e[(e.PagedNavigation = 15)] = `PagedNavigation`),
      (e[(e.ToggleOn = 16)] = `ToggleOn`),
      (e[(e.ToggleOff = 17)] = `ToggleOff`),
      (e[(e.SliderUp = 18)] = `SliderUp`),
      (e[(e.SliderDown = 19)] = `SliderDown`),
      (e[(e.ChangeTabs = 20)] = `ChangeTabs`),
      (e[(e.DefaultOk = 21)] = `DefaultOk`),
      (e[(e.OpenSideMenu = 22)] = `OpenSideMenu`),
      (e[(e.CloseSideMenu = 23)] = `CloseSideMenu`),
      (e[(e.BasicNav = 24)] = `BasicNav`),
      (e[(e.FailedNav = 25)] = `FailedNav`),
      (e[(e.Typing = 26)] = `Typing`),
      (e[(e.TimerExpired = 27)] = `TimerExpired`),
      (e[(e.Screenshot = 28)] = `Screenshot`),
      e
    );
  })({}),
  mn = new (class {
    m_fnCallbackOnPlaySound = new C();
    m_fnCallbackOnSuppressSound = new C();
    RegisterCallbackOnPlaySound(e) {
      return this.m_fnCallbackOnPlaySound.Register(e);
    }
    PlayNavSound(e, t) {
      this.m_fnCallbackOnPlaySound.Dispatch(e, t);
    }
    RegisterCallbackOnSuppressNavImminentSound(e) {
      return this.m_fnCallbackOnSuppressSound.Register(e);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  })(),
  hn = new E(`GamepadEvents`).Debug;
function J(e, t, n) {
  (n === void 0 &&
    (n = [
      e.onButtonDown,
      e.onButtonUp,
      e.onOKButton,
      e.onCancelButton,
      e.onSecondaryButton,
      e.onOptionsButton,
      e.onMenuButton,
      e.onGamepadDirection,
      e.onGamepadFocus,
      e.onGamepadBlur,
    ]),
    w.useEffect(() => {
      let n = t.current,
        r = [];
      return (
        n &&
          (e.onButtonDown && r.push(fe(n, e.onButtonDown)),
          e.onButtonUp && r.push(pe(n, e.onButtonUp)),
          e.onOKButton && r.push(me(n, e.onOKButton)),
          e.onCancelButton && r.push(he(n, e.onCancelButton)),
          e.onSecondaryButton && r.push(ge(n, e.onSecondaryButton)),
          e.onOptionsButton && r.push(_e(n, e.onOptionsButton)),
          e.onMenuButton && r.push(ve(n, e.onMenuButton)),
          e.onGamepadDirection && r.push(ye(n, e.onGamepadDirection)),
          e.onGamepadFocus && r.push(be(n, e.onGamepadFocus)),
          e.onGamepadBlur && r.push(xe(n, e.onGamepadBlur))),
        () => r.forEach((e) => e())
      );
    }, n));
}
function Y(e) {
  return (e.stopPropagation(), !1);
}
function gn(e, t, n) {
  let { onButtonDown: r, ...i } = e,
    a = w.useCallback(
      (e) => {
        (r && r(e),
          hn(
            `Gamepad Event fired:`,
            e.detail.button,
            `, handled:`,
            r != null,
            `, propagation stopped:`,
            e.cancelBubble,
          ),
          !e.cancelBubble && n.OnRootButtonDown(e));
      },
      [r, n],
    );
  (J(i, t),
    J(
      {
        onButtonDown: a,
        onButtonUp: Y,
        onOKButton: Y,
        onCancelButton: Y,
        onSecondaryButton: Y,
        onOptionsButton: Y,
        onMenuButton: Y,
        onGamepadDirection: Y,
        onGamepadFocus: Y,
        onGamepadBlur: Y,
      },
      t,
      [a],
    ));
}
function _n(e) {
  if (!e) return W.NONE;
  switch (e) {
    case `column`:
      return W.COLUMN;
    case `column-reverse`:
      return W.COLUMN_REVERSE;
    case `row`:
      return W.ROW;
    case `row-reverse`:
      return W.ROW_REVERSE;
    case `grid`:
      return W.GRID;
    case `geometric`:
      return W.GEOMETRIC;
    default:
      return (t(e, `Unhandled flow-children: ${e}`), W.NONE);
  }
}
function vn(e) {
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
var yn = w.createContext(vn);
function bn(e, t) {
  let { onTextEntered: n, ...r } = e,
    i = w.useRef(null),
    a = w.useRef({});
  Object.assign(a.current, {
    ...r,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let o = xn(a.current),
    s = w.useCallback(
      (e) => {
        (document.hasFocus() || document.activeElement != i.current) &&
          (e.currentTarget == i.current
            ? e.detail.focusedNode?.Element != i.current &&
              (o.BIsActive() || o.bInVR) &&
              o.DelayHideVirtualKeyboard()
            : console.warn(
                `keyboard got blur event, but it's not the active element`,
              ));
      },
      [o],
    ),
    c = w.useCallback((e) => !o.bInVR && e.pointerType === `mouse`, [o]),
    l = w.useCallback(
      (e) => {
        c(e) || o.ShowVirtualKeyboard();
      },
      [o, c],
    ),
    u = oe(
      (e) => {
        i.current = e;
        let t = [];
        return (
          e &&
            (e.addEventListener(`focus`, o.SetAsCurrentVirtualKeyboardTarget),
            t.push(() =>
              e.removeEventListener(
                `focus`,
                o.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            e.addEventListener(`click`, l),
            t.push(() => e.removeEventListener(`click`, l)),
            t.push(me(e, o.ShowVirtualKeyboard)),
            t.push(xe(e, s))),
          () => t.forEach((e) => e())
        );
      },
      [s, l, o],
    );
  return (
    w.useLayoutEffect(
      () => (
        k(t, {
          TakeFocusAndShowKeyboard: (e) => {
            let t = i.current;
            t &&
              (document.activeElement != t && t.focus(),
              !(e && c(e)) && o.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            o.HideVirtualKeyboard();
          },
        }),
        () => k(t, null)
      ),
      [o, t, c],
    ),
    u
  );
}
function xn(e) {
  let t = w.useRef(void 0),
    n = w.useContext(yn);
  return ((t.current ||= n(e || {})), t.current);
}
function Sn(e) {
  let {
    onEnterKeyPress: t,
    strEnterKeyLabel: n,
    onKeyboardNavOut: r,
    onKeyboardShow: i,
    onKeyboardFullyVisible: a,
    onTextEntered: o,
    BIsElementValidForInput: s,
    ...c
  } = e;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: t,
      strEnterKeyLabel: n,
      onKeyboardNavOut: r,
      onKeyboardShow: i,
      onKeyboardFullyVisible: a,
      onTextEntered: o,
      BIsElementValidForInput: s,
    },
    props: c,
  };
}
var Cn = w.createContext(void 0);
function wn() {
  return w.useContext(Cn);
}
function Tn() {
  return q(wn()?.GetShowDebugFocusRing()) ?? !1;
}
var En = w.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function Dn() {
  return w.useContext(En)?.focusNavWindow;
}
function On(e = !0) {
  return w.useContext(En)?.bSupportsFocus ?? e;
}
var kn = w.forwardRef(function (e, t) {
  let {
      navID: n,
      onActivated: r,
      onDeactivated: i,
      navTreeRef: a,
      enabled: o,
      modal: s,
      virtualFocus: c,
      historyMode: l,
      parentEmbeddedNavTree: u,
      onGlobalButtonDown: d,
      disableFocusClasses: f,
      disabledRoot: p,
      excludeTreeFromScrollRegionSearch: m,
      "flow-children": h,
      ...g
    } = e,
    { elemProps: _, navOptions: v, gamepadEvents: y } = Z(g);
  return wn()
    ? (0, P.jsx)(An, {
        navID: n,
        onActivated: r,
        onDeactivated: i,
        navTreeRef: a,
        enabled: o,
        modal: s,
        virtualFocus: c,
        historyMode: l,
        parentEmbeddedNavTree: u,
        onGlobalButtonDown: d,
        disableFocusClasses: f,
        disabledRoot: p,
        excludeTreeFromScrollRegionSearch: m,
        "flow-children": h,
        ...v,
        ...y,
        children: (0, P.jsx)(`div`, { ..._, ref: t }),
      })
    : (0, P.jsx)(`div`, { ..._, ref: t });
});
function An(e) {
  let {
      navID: t,
      onActivated: n,
      onDeactivated: r,
      navTreeRef: i,
      enabled: a = !0,
      modal: o = !1,
      virtualFocus: s = !1,
      historyMode: c,
      children: l,
      parentEmbeddedNavTree: u,
      onGlobalButtonDown: d,
      disableFocusClasses: f = !1,
      disabledRoot: p = !1,
      excludeTreeFromScrollRegionSearch: m = !1,
      "flow-children": h,
      ...g
    } = e,
    { elemProps: _, navOptions: v, gamepadEvents: y } = Z(g),
    { refDiv: b, tree: x } = jn({
      navID: t,
      parentEmbeddedNavTree: u,
      disabledRoot: p,
      enabled: a,
      onGlobalButtonDown: d,
      navTreeRef: i,
      virtualFocus: s,
      modal: o,
      historyMode: c,
      excludeTreeFromScrollRegionSearch: m,
    });
  (rn(x.OnActivateCallbacks, n),
    rn(x.OnDeactivateCallbacks, r),
    gn(y, b, x),
    w.useLayoutEffect(() => {
      let e = _n(h);
      x.Root.SetProperties({ ...v, layout: e });
    }));
  let S = A(b, l.props.ref);
  return (0, P.jsx)(Nn, {
    tree: p ? null : x,
    disableFocusClasses: f || p,
    children: (0, P.jsx)(X.Provider, {
      value: p ? null : x.Root,
      children: w.cloneElement(l, { id: t, "data-react-nav-root": t, ref: S }),
    }),
  });
}
function jn(e) {
  let {
      navID: t,
      parentEmbeddedNavTree: n,
      disabledRoot: r,
      excludeTreeFromScrollRegionSearch: i,
      enabled: a,
      navTreeRef: o,
      onGlobalButtonDown: s,
      ...c
    } = e,
    l = wn(),
    u = Dn() || l.GetDefaultContext(),
    d = w.useContext(X),
    [f] = w.useState(() =>
      l.NewGamepadNavigationTree(u, t, n ?? d?.Tree, {
        ...c,
        bIsEmbeddedInLegacyTree: !!n,
      }),
    ),
    p = w.useRef(null);
  return (
    f.SetOnGlobalButtonDown(s),
    w.useEffect(() => f.RegisterNavigationItem(f.Root, p.current), [f, p]),
    w.useEffect(() => {
      f.SetIsEnabled(a);
    }, [f, a]),
    w.useEffect(() => {
      f.SetExcludeFromScrollRegionSearch(i);
    }, [f, i]),
    w.useEffect(() => {
      if (!r)
        return l.RegisterGamepadNavigationTree(
          f,
          p.current.ownerDocument.defaultView,
        );
    }, [l, f, r]),
    w.useEffect(() => (k(o, f), () => k(o, null)), [o, f]),
    { refDiv: p, tree: f }
  );
}
var Mn = w.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function Nn(e) {
  let { tree: t, disableFocusClasses: n = !1, children: r } = e,
    [i, a] = w.useState(t?.BIsActive() || !1),
    [o, s] = w.useState(t?.BIsActiveWithinWindow() || !1),
    c = q(t?.SubscribableIsMounted) ?? !1;
  w.useEffect(() => {
    if (!t) {
      (a(!1), s(!1));
      return;
    }
    (a(t.BIsActive()), s(t.BIsActiveWithinWindow()));
    let e = t.OnActiveStateChangedCallbacks.Register(() => {
        (a(t.BIsActive()), s(t.BIsActiveWithinWindow()));
      }),
      n = t.OnActiveWithinWindowChangedCallbacks.Register(() =>
        s(t.BIsActiveWithinWindow()),
      );
    return () => {
      (e.Unregister(), n.Unregister());
    };
  }, [t]);
  let l = w.useMemo(
    () => ({
      bActiveTree: i,
      bActiveTreeWithinWindow: o,
      bDisableFocusClasses: n,
      bIsMounted: c,
    }),
    [i, n, o, c],
  );
  return (0, P.jsx)(Mn.Provider, { value: l, children: r });
}
function Pn() {
  return w.useContext(Mn);
}
var X = w.createContext(null),
  Fn = w.createContext(Qt);
function In(e, t) {
  let n = w.useRef(null);
  return (
    e &&
      (!n.current || n.current.m_Parent != e) &&
      (n.current = e.Tree.CreateNode(e, t)),
    n.current
  );
}
function Ln(e) {
  let { navRef: t, ...n } = e,
    r = w.useRef(null),
    i = (0, w.useContext)(X),
    a = In(i, (0, w.useContext)(Fn));
  return (
    w.useLayoutEffect(() => {
      a && a.SetProperties(n);
    }),
    w.useLayoutEffect(() => {
      if (!i) return;
      let e = i.Tree.RegisterNavigationItem(a, r.current);
      return () => {
        e();
      };
    }, [i, a, r]),
    w.useLayoutEffect(() => {
      if (a && t) return (k(t, a.CreateHandle()), () => k(t, null));
    }, [a, t]),
    { ref: r, node: a }
  );
}
function Rn(e) {
  let t = w.useRef(null),
    n = w.useRef(null);
  return (
    w.useEffect(
      () => () => {
        n.current?.();
      },
      [],
    ),
    w.useCallback(
      (r) => {
        t.current !== r &&
          ((t.current = r),
          n.current?.(),
          (n.current = null),
          r &&
            (n.current = Se(r, (t) =>
              !e || e.GetFocusable() == `none`
                ? !1
                : e.BTakeFocus(void 0, t.detail.button),
            )));
      },
      [e],
    )
  );
}
function zn(e) {
  let {
      onButtonDown: t,
      onButtonUp: n,
      onOKButton: r,
      onCancelButton: i,
      onSecondaryButton: a,
      onOptionsButton: o,
      onGamepadDirection: s,
      onGamepadFocus: c,
      onGamepadBlur: l,
      onMenuButton: u,
      onOKActionDescription: d,
      onCancelActionDescription: f,
      onSecondaryActionDescription: p,
      onOptionsActionDescription: m,
      onMenuActionDescription: h,
      actionDescriptionMap: g,
      ..._
    } = e,
    v = {};
  return (
    t !== void 0 && (v.onButtonDown = t),
    n !== void 0 && (v.onButtonUp = n),
    r !== void 0 && (v.onOKButton = r),
    i !== void 0 && (v.onCancelButton = i),
    a !== void 0 && (v.onSecondaryButton = a),
    o !== void 0 && (v.onOptionsButton = o),
    u !== void 0 && (v.onMenuButton = u),
    s !== void 0 && (v.onGamepadDirection = s),
    c !== void 0 && (v.onGamepadFocus = c),
    l !== void 0 && (v.onGamepadBlur = l),
    {
      gamepadEvents: v,
      actionDescriptions: Ce({
        onOKActionDescription: d,
        onCancelActionDescription: f,
        onSecondaryActionDescription: p,
        onOptionsActionDescription: m,
        onMenuActionDescription: h,
        actionDescriptionMap: g,
      }),
      props: _,
    }
  );
}
function Z(e) {
  let {
      autoFocus: t,
      preferredFocus: n,
      disableNavSounds: r,
      fnCanTakeFocus: i,
      childFocusDisabled: a,
      focusableIfEmpty: o,
      onFocusWithin: s,
      navKey: c,
      noFocusRing: l,
      focusRingSizeElementID: u,
      focusRingHasBorderRadius: d,
      focusable: f,
      navRef: p,
      actionDescriptionMap: m,
      onMoveUp: h,
      onMoveRight: g,
      onMoveDown: _,
      onMoveLeft: v,
      navEntryPreferPosition: y,
      scrollIntoViewWhenChildFocused: b,
      fnScrollIntoViewHandler: x,
      scrollIntoViewType: S,
      resetNavOnEntry: C,
      scrollRegionToStartOrEnd: ee,
      excludeFromScrollRegionSearch: w,
      ...T
    } = e,
    { gamepadEvents: E, actionDescriptions: D, props: te } = zn(T);
  return {
    elemProps: te,
    navOptions: {
      autoFocus: t,
      preferredFocus: n,
      disableNavSounds: r,
      fnCanTakeFocus: i,
      childFocusDisabled: a,
      focusableIfEmpty: o,
      onFocusWithin: s,
      navKey: c,
      noFocusRing: l,
      focusRingSizeElementID: u,
      focusRingHasBorderRadius: d,
      focusable: f,
      navRef: p,
      onMoveUp: h,
      onMoveRight: g,
      onMoveDown: _,
      onMoveLeft: v,
      navEntryPreferPosition: y,
      scrollIntoViewWhenChildFocused: b,
      fnScrollIntoViewHandler: x,
      scrollIntoViewType: S,
      resetNavOnEntry: C,
      scrollRegionToStartOrEnd: ee,
      excludeFromScrollRegionSearch: w,
      actionDescriptionMap: { ...m, ...D },
    },
    gamepadEvents: E,
  };
}
function Bn(e) {
  return function (t) {
    let {
        focusClassName: n,
        focusWithinClassName: r,
        bFocusableByDefault: i,
        className: a,
        divRef: o,
        node: s,
        tabIndex: c,
        children: l,
        ...u
      } = t,
      d = On(),
      f = q(s.SubscribableHasFocus) && d,
      p = q(s.SubscribableFocusWithin) && d,
      {
        bActiveTree: m,
        bActiveTreeWithinWindow: h,
        bDisableFocusClasses: g,
        bIsMounted: _,
      } = Pn(),
      v = m && !g,
      y = _ && !h && (c !== void 0 || i);
    return w.createElement(
      e,
      {
        ...u,
        className: (0, T.default)(a, f && v && n, p && v && r),
        tabIndex: y ? -1 : c,
        ref: o,
      },
      l,
    );
  };
}
var Vn = Bn(`div`);
function Hn(e) {
  return (
    mn.PlayNavSound(pn.DefaultOk),
    R(e.currentTarget) && e.currentTarget.click(),
    !0
  );
}
var Un = w.createContext(void 0);
Un.Provider;
function Wn(e, t, n, r, i) {
  let {
      elemProps: { focusClassName: a, children: o, "flow-children": s, ...c },
      navOptions: l,
      gamepadEvents: u,
    } = Z(n),
    {
      bFocusableByDefault: d = !0,
      bActivateByDefault: f = !1,
      bDOMElementFocusByDefault: p = d,
    } = i || {};
  l.focusable === void 0 && !c.disabled && d && (l.focusable = !0);
  let { ref: m, node: h } = Ln({ layout: _n(s), ...l });
  (u.onOKButton ||
    (((`onClick` in c && c.onClick) || (f && (f === !0 || f(c)))) &&
      (u.onOKButton = Hn)),
    l.focusable && !p
      ? (c.tabIndex = c.tabIndex || 0)
      : !l.focusable && p && (c.tabIndex = c.tabIndex ?? -1),
    J(u, m));
  let g = A(r, m, Rn(h)),
    _ = (0, w.useContext)(Un)?.Component,
    v = { ...c };
  return (
    `onClick` in c && (v.role ??= `button`),
    h
      ? ((v = {
          ...v,
          divRef: g,
          node: h,
          focusClassName: (0, T.default)(a, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: p,
          className: (0, T.default)(c.className, `Focusable`),
        }),
        (0, P.jsx)(X.Provider, {
          value: h,
          children: _
            ? w.createElement(_, { ...v, Component: t }, o)
            : w.createElement(t, v, o),
        }))
      : w.createElement(
          e,
          { ...v, ref: r, className: (0, T.default)(c.className, `Focusable`) },
          o,
        )
  );
}
function Q(e, t) {
  let n = Bn(e);
  return w.forwardRef(function (r, i) {
    return Wn(e, n, r, i, t);
  });
}
function Gn(e) {
  let t = Bn(e);
  return w.forwardRef(function (n, r) {
    let {
        virtualKeyboardProps: i,
        props: { refKeyboardHandle: a, ...o },
      } = Sn(n),
      s = A(r, bn(i, a));
    return Wn(e, t, o, s);
  });
}
function Kn() {
  return w.createRef();
}
var qn = Q(`div`, { bDOMElementFocusByDefault: !1 }),
  Jn = Q(`button`, { bActivateByDefault: (e) => e.type === `submit` }),
  Yn = Q(`a`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  Xn = w.forwardRef(function (e, t) {
    let { href: n = `#`, ...r } = e;
    return (0, P.jsx)(Yn, { ref: t, href: n, ...r });
  }),
  Zn = Gn(`input`),
  Qn = Gn(`textarea`);
(Q(`img`, { bDOMElementFocusByDefault: !1 }),
  Q(`label`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  Q(`section`, { bFocusableByDefault: !1 }),
  Q(`form`, { bFocusableByDefault: !1 }));
var $n = Q(`summary`, { bActivateByDefault: !0 });
Q(`details`, { bFocusableByDefault: !1 });
function er(e, t, n = !1) {
  w.useEffect(() => {
    let r = e.current;
    r && (t ? r.Activate(n) : r.Deactivate());
  }, [t, n, e]);
}
var tr = n(c());
function nr(e, t, n) {
  return tr.createPortal(
    w.createElement(w.Suspense, { fallback: null }, e),
    t,
    n,
  );
}
function rr(e) {
  return function (t) {
    return (0, P.jsx)(ir, { children: (0, P.jsx)(e, { ...t }) });
  };
}
var ir = class extends w.Component {
  state = {};
  constructor(e) {
    (super(e), (this.state.lastErrorKey = e.errorKey));
  }
  componentDidCatch(e, t) {
    (l()
      .ReportError(e, { strComponentStack: t.componentStack || void 0 })
      .then((e) => e && this.setState({ identifierHash: e.identifierHash })),
      this.setState({
        error: { error: e, info: t },
        lastErrorKey: this.props.errorKey,
      }));
  }
  Reset() {
    this.setState({ error: void 0 });
  }
  render() {
    let { children: e, fallback: t, errorKey: n } = this.props,
      { error: r, identifierHash: i, lastErrorKey: a } = this.state;
    return r && n == a
      ? t === void 0
        ? l().reporting_enabled
          ? (0, P.jsx)(or, {
              error: r,
              identifierHash: i,
              store: l(),
              onRefresh: this.Reset,
            })
          : (0, P.jsx)(ar, { error: r, onDismiss: this.Reset })
        : typeof t == `function`
          ? t(r.error)
          : t
      : e || null;
  }
};
o([S], ir.prototype, `Reset`, null);
var ar = ({ error: e, onDismiss: t }) => {
    let n = e.error ? e.error.stack : `Stack missing`,
      r = e.info ? e.info.componentStack : ``,
      i = (e.error && e.error.message) || `unknown error`;
    return (0, P.jsxs)(cr, {
      children: [
        (0, P.jsxs)(lr, { children: [`Error: "`, i, `"`] }),
        `\xA0\xA0\xA0`,
        (0, P.jsx)(sr, { onClick: t, children: `(x) Dismiss` }),
        (0, P.jsx)(`br`, {}),
        (0, P.jsx)($, { children: n }),
        (0, P.jsxs)($, {
          children: [`The error occurred while rendering:`, r],
        }),
      ],
    });
  },
  or = (e) => {
    let { error: t, onRefresh: n, identifierHash: r, store: i } = e,
      a = (t.error && t.error.message) || `unknown error`,
      o = `${i.product}_${i.version}_${r}`;
    return (0, P.jsxs)(cr, {
      children: [
        (0, P.jsxs)(lr, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, P.jsx)(sr, { onClick: n, children: `Refresh` }),
          ],
        }),
        (0, P.jsxs)($, { children: [`Error Reference: `, o] }),
        (0, P.jsx)($, { children: a }),
      ],
    });
  },
  sr = ({ onClick: e, children: t }) => {
    let n = w.useRef(null),
      r = On();
    return (
      w.useEffect(() => {
        let e = n.current;
        r && e && !e.NavTree().GetLastFocusedNode() && e.TakeFocus();
      }, [r]),
      (0, P.jsx)(Xn, {
        navRef: n,
        style: {
          color: `inherit`,
          textDecoration: `underline`,
          cursor: `pointer`,
        },
        onClick: (t) => {
          (t.preventDefault(), e());
        },
        children: t,
      })
    );
  },
  cr = ({ children: e }) =>
    (0, P.jsx)(`div`, {
      style: {
        overflow: `auto`,
        marginLeft: `15px`,
        color: `white`,
        fontSize: `16px`,
        userSelect: `auto`,
        backgroundColor: `black`,
      },
      className: `ErrorBoundary`,
      children: e,
    }),
  lr = ({ children: e }) =>
    (0, P.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: e,
    }),
  $ = ({ children: e }) =>
    (0, P.jsx)(`pre`, {
      style: { marginTop: `15px`, opacity: 0.7, userSelect: `auto` },
      children: e,
    });
export {
  tt as $,
  rn as A,
  O as At,
  Gt as B,
  x as Bt,
  On as C,
  j as Ct,
  J as D,
  se as Dt,
  _n as E,
  A as Et,
  fn as F,
  p as Ft,
  ht as G,
  y as Gt,
  W as H,
  g as Ht,
  q as I,
  m as It,
  Ze as J,
  gt as K,
  sn as L,
  d as Lt,
  en as M,
  ee as Mt,
  dn as N,
  C as Nt,
  mn as O,
  oe as Ot,
  un as P,
  S as Pt,
  et as Q,
  nn as R,
  f as Rt,
  Pn as S,
  ue as St,
  xn as T,
  k as Tt,
  Ht as U,
  b as Ut,
  Ut as V,
  h as Vt,
  G as W,
  v as Wt,
  lt as X,
  Qe as Y,
  ct as Z,
  X as _,
  Re as _t,
  Xn as a,
  rt as at,
  An as b,
  Fe as bt,
  Zn as c,
  _t as ct,
  er as d,
  Ye as dt,
  it as et,
  Hn as f,
  Je as ft,
  Fn as g,
  Ue as gt,
  Vn as h,
  Ke as ht,
  Kn as i,
  dt as it,
  tn as j,
  E as jt,
  pn as k,
  ce as kt,
  Qn as l,
  R as lt,
  Z as m,
  Ge as mt,
  rr as n,
  ut as nt,
  Jn as o,
  nt as ot,
  zn as p,
  We as pt,
  ot as q,
  nr as r,
  ft as rt,
  qn as s,
  pt as st,
  ir as t,
  at as tt,
  $n as u,
  st as ut,
  Ln as v,
  ze as vt,
  Tn as w,
  ae as wt,
  kn as x,
  Pe as xt,
  Rn as y,
  Ie as yt,
  ln as z,
  _ as zt,
};
