/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
import {
  $t as e,
  Ct as t,
  Ot as n,
  _t as r,
  en as i,
  k as a,
  kt as o,
  on as s,
  tn as c,
} from "./mobx.esm.js";
function l(e, t = 0, n = Math.random) {
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
function u(e, t) {
  let n = e.slice();
  return (l(n), n.slice(0, t));
}
function d(e, t, n) {
  if (t >= 0 && n >= 0) {
    let r = e.splice(t, 1)[0];
    n >= e.length ? (e[n] = r) : e.splice(n, 0, r);
  }
  return e;
}
function f(e, t) {
  return p(e, (e) => t == e);
}
function p(e, t) {
  let n = e.findIndex(t);
  return n >= 0 && (e.splice(n, 1), !0);
}
function m(e, t) {
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
function h(e, t, n) {
  let r = m(e, (e) => n(t, e));
  e.splice(r + 1, 0, t);
}
function g(e, t, n) {
  return e
    ? e.length < t
      ? e.concat(Array(t - e.length).fill(n))
      : e
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function _(e) {
  return Array.from(new Set(e));
}
function v(e, t) {
  let n = Math.min(e.length, t.length);
  return Array.from({ length: n }, (n, r) => [e[r], t[r]]);
}
function y(e, t) {
  return e.reduce((e, n) => (e.set(t(n), n), e), new Map());
}
function ee(e, t, n = !0) {
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
function b(e) {
  return e.filter((e) => e != null);
}
function x(e, t, n) {
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
var S = class {
    m_vecCallbacks = [];
    Register(e) {
      return (
        this.m_vecCallbacks.push(e),
        {
          Unregister: () => {
            f(this.m_vecCallbacks, e);
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
  te = c((e, t) => {
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
  C = s(o(), 1),
  w = s(te(), 1),
  T = class {
    m_sName;
    m_fnIdGenerator = void 0;
    constructor(e, t) {
      ((this.m_sName = e),
        (this.m_fnIdGenerator = t),
        E.Get().RegisterLogName(e));
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
      return E.Get().IsDebugLogEnabled(this.m_sName);
    }
    Log(e, ...t) {
      let n = E.Get().IsDebugLogEnabled(this.m_sName);
      if (e == 0 && !n) return;
      let r = this.m_sName,
        i = this.m_fnIdGenerator?.() ?? null;
      i != null && (r += ` (` + i + `)`);
      let a = E.Get().IncludeBacktraceInLog,
        o = E.Get().AllowCSSInLogStyling;
      ae(e, n, a, o, r, this.m_sName, ...t);
    }
  };
(a([x], T.prototype, `Debug`, null),
  a([x], T.prototype, `Info`, null),
  a([x], T.prototype, `Warning`, null),
  a([x], T.prototype, `Error`, null),
  a([x], T.prototype, `Assert`, null));
var E = class e {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new S();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(...e) {
    ae(
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
function ne(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return [(t | 0) & 255, (t >> 8) & 255, (t >> 16) & 255];
}
function re(e) {
  return (e[0] * 299 + e[1] * 587 + e[2] * 114) / 1e3 >= 128;
}
function ie(e) {
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
function ae(e, t, n, r, i, a, ...o) {
  let s = i;
  n && (s = ie(e) + ` ` + s);
  let c;
  if (r && t) {
    let e = ne(a).map((e, t) =>
        Math.round(
          Math.max(0, Math.min(255, ((e / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      t = re(e),
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
((window.DebugLogEnable = (...e) => E.Get().SetDebugLogsEnabled(!0, ...e)),
  (window.DebugLogDisable = (...e) => E.Get().SetDebugLogsEnabled(!1, ...e)),
  (window.DebugLogEnableAll = () => E.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () => E.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () => E.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    E.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => E.Get().GetLogNames()),
  (window.DebugLogEnabled = (...e) => E.Get().PrintEnabledLogs(...e)),
  (window.EnableSteamConsole = (e = !0) =>
    E.Get().SetDebugLogEnabled(`SteamClient`, e)));
var D = (function (e) {
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
function O(e, t) {
  e != null &&
    (typeof e == `function` ? e(t) : `current` in e && (e.current = t));
}
function oe(...e) {
  return C.useCallback((t) => {
    for (let n of e) O(n, t);
  }, e);
}
function se(...e) {
  if (e && e.length !== 0)
    return e.length === 1
      ? e[0]
      : (t) =>
          e.forEach((e) => {
            if (e) typeof e == `function` ? e(t) : (e.current = t);
            else return;
          });
}
function ce(e, t) {
  let n = C.useRef(void 0);
  return C.useCallback((t) => {
    (n.current && n.current(), (n.current = e(t)));
  }, t);
}
function le(e) {
  let t = C.useRef(null);
  return { refWithValue: t, refForElement: oe(e, t) };
}
function ue(e, t) {
  let n = C.useRef(!1);
  (C.useLayoutEffect(
    () => () => {
      n.current && O(e, void 0);
    },
    [e],
  ),
    C.useLayoutEffect(() => {
      (t || n.current) && (O(e, t), (n.current = !!t));
    }, [e, t]));
}
function de(e) {
  return typeof e == `object` && !!e && `value` in e;
}
function fe(e, t) {
  return de(e) && de(t)
    ? e.value === t.value &&
        !!e.bShowOnLeft == !!t.bShowOnLeft &&
        !!e.bShowOnFloatingVRFooter == !!t.bShowOnFloatingVRFooter
    : e === t;
}
var k = (function (e) {
  return (
    (e[(e.GAMEPAD = 0)] = `GAMEPAD`),
    (e[(e.KEYBOARD = 1)] = `KEYBOARD`),
    (e[(e.APPLICATION = 2)] = `APPLICATION`),
    (e[(e.BROWSER = 3)] = `BROWSER`),
    (e[(e.AUTOFOCUS = 4)] = `AUTOFOCUS`),
    e
  );
})({});
(D.OK, D.CANCEL, D.SECONDARY, D.OPTIONS, D.START);
function A(e, t, n) {
  return (e.addEventListener(t, n), () => pe(e, t, n));
}
function pe(e, t, n) {
  e.removeEventListener(t, n);
}
function me(e, t) {
  return A(e, `vgp_onbuttondown`, t);
}
function he(e, t) {
  return A(e, `vgp_onbuttonup`, t);
}
function ge(e, t) {
  return A(e, `vgp_onok`, j(t));
}
function _e(e, t) {
  return A(e, `vgp_oncancel`, j(t));
}
function ve(e, t) {
  return A(e, `vgp_onsecondaryaction`, j(t));
}
function ye(e, t) {
  return A(e, `vgp_onoptions`, j(t));
}
function be(e, t) {
  return A(e, `vgp_onmenu`, j(t));
}
function xe(e, t) {
  return A(e, `vgp_ondirection`, j(t));
}
function Se(e, t) {
  return A(e, `vgp_onfocus`, t);
}
function Ce(e, t) {
  return A(e, `vgp_onblur`, t);
}
function we(e, t) {
  return A(e, `vgp_requestfocus`, j(t));
}
function j(e) {
  return (t) => {
    e(t) !== !1 && (t.stopPropagation(), t.preventDefault());
  };
}
function Te(e) {
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
    t !== void 0 && (s[D.OK] = t),
    n !== void 0 && (s[D.CANCEL] = n),
    r !== void 0 && (s[D.SECONDARY] = r),
    i !== void 0 && (s[D.OPTIONS] = i),
    a !== void 0 && (s[D.START] = a),
    s
  );
}
var M = r(),
  Ee = new T(`FocusHistory`),
  De = Ee.Debug,
  N = class t {
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
          (r == 1 || (r == 0 && a)) && e.BTakeFocus(k.APPLICATION));
      });
    }
    static RestoreSerializedNavNode(n, r, i = 0) {
      let { sNavKey: a, iActiveChild: o = -1, rgChildren: s } = r;
      (a && e(a == n.NavKey, `navkey mismatch`), n.SetActiveChild(o));
      let c = Ee.IsDebugEnabled() ? `[${n.Tree.id}]${Me(i)}` : ``;
      if (s && s.length) {
        let [e] = n.GetChildren();
        if (o != -1 && Ee.IsDebugEnabled()) {
          let t = s.length != e.length;
          De(
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
          (De(
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
function Oe(e) {
  return N.SerializeNavState(e, !0, !1);
}
function ke(e, t, n = 0) {
  return N.RestoreSerializedNavState(e, t, n);
}
var Ae = class extends N {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(N.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        N.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  je = class extends N {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, N.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let n = this.m_mapHistory.get(e);
      return n
        ? (console.log(`Restoring history for state ${e}`),
          N.RestoreSerializedNavState(this.m_root, n, t),
          !0)
        : !1;
    }
  };
function Me(e) {
  if (e == 0) return ``;
  let t = ``;
  for (let n = 0; n < e; n++) t += `*`;
  return ((t += ` `), t);
}
function Ne(e) {
  return e != null && e.focus !== void 0;
}
function Pe(e, t) {
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
function Fe(e) {
  let t;
  return (e && (t = e.ownerDocument.defaultView), t);
}
function Ie(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (Ne(n)) {
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
  return Ne(n) ? n : null;
}
function Le(e, t) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function Re(e, t) {
  if (!(`ownerDocument` in e)) return !0;
  let n = e.ownerDocument.defaultView.getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY;
  return r === `auto` || r === `scroll`;
}
var P = { x: `y`, y: `x` };
function ze() {
  return { x: 0, y: 0 };
}
function Be(e, t) {
  return e.x * t.x + e.y * t.y;
}
function Ve(e, t) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function He(e, t) {
  let n = Ve(e, t);
  return Math.sqrt(Be(n, n));
}
var Ue = class {
  SyncStore(e) {
    return this.Subscribe(e).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
(a([x], Ue.prototype, `SyncStore`, null),
  a([x], Ue.prototype, `GetValue`, null));
var We = class extends Ue {},
  Ge = class extends We {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(e, t) {
      (super(),
        (this.m_callbacks = new S()),
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
function Ke(e, t) {
  return new Ge(e, t);
}
var qe = class {
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
a([x], qe.prototype, `ScheduledInternal`, null);
var Je = class {
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
  Ye = class {
    m_vecCallbacks = [];
    Push(e) {
      this.m_vecCallbacks.push(e);
    }
    PushArrayRemove(e, t) {
      this.m_vecCallbacks.push(() => f(e, t));
    }
    Unregister() {
      for (let e of this.m_vecCallbacks) e();
      this.m_vecCallbacks = [];
    }
    GetUnregisterFunc() {
      return this.Unregister;
    }
  };
a([x], Ye.prototype, `Unregister`, null);
function Xe(e, t, n) {
  return e == null || t == null
    ? e === t
    : typeof e != `object` ||
        typeof t != `object` ||
        Object.keys(e).length !== Object.keys(t).length
      ? !1
      : ((n ??= (e, t) => e === t),
        Object.keys(e).every((r) => t.hasOwnProperty(r) && n(e[r], t[r])));
}
function Ze(e, t) {
  let n = t.lastIndexOf(`.`);
  if (n == -1) return !1;
  let r = t.substring(0, n),
    i = t.substring(n + 1),
    a = $e(e, r);
  return a !== null && typeof a[i] == `function`;
}
function Qe(e) {
  return Ze(window, e);
}
function $e(e, t) {
  let n = (e) => e && typeof e == `object`,
    r = e?.SteamClient;
  for (let e of t.split(`.`)) {
    if (!n(r) || !(e in r)) return null;
    r = r[e];
  }
  return n(r) ? r : null;
}
function et(e) {
  return e != null && e.focus !== void 0;
}
function tt(e) {
  if (!e.clientX && !e.clientY && !e.screenX && !e.screenY) return !0;
  if (e.relatedTarget) return !nt(e.currentTarget, e.relatedTarget);
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
function nt(e, t) {
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
function rt(e, t) {
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
function it(e, t) {
  return {
    top: e.screenTop + t.top,
    bottom: e.screenTop + t.bottom,
    left: e.screenLeft + t.left,
    right: e.screenLeft + t.right,
  };
}
function at(e) {
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
function ot(e) {
  let t;
  return (
    e && et(e.currentTarget) && (t = e.currentTarget.ownerDocument.defaultView),
    t
  );
}
function st(e) {
  let t;
  return (e && (t = e.ownerDocument.defaultView), t);
}
function ct(e) {
  let t = window.top ?? window,
    n = t.document,
    r = n.createElement(`textarea`);
  ((r.textContent = e),
    (r.style.position = `fixed`),
    n.body.appendChild(r),
    r.select());
  try {
    if (
      (Ze(t, `Browser.NotifyUserActivation`) &&
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
function lt(e) {
  (e.startsWith(`steam://openurl/`) && (e = e.slice(16)), ct(e));
}
function ut(e) {
  let t = e.ownerDocument;
  return !!(
    t.fullscreen ||
    t.webkitIsFullScreen ||
    t.mozFullScreen ||
    t.msFullscreenElement
  );
}
function dt(e, t) {
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
function ft(e) {
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
function pt(e, t) {
  let n = e;
  return (
    (n.lastModifiedDate = new Date()), (n.name = t || Date.now().toString()), e
  );
}
function mt(e, t, n) {
  let r = t.parentElement;
  for (; r && r !== e && !r.hasAttribute(n);) r = r.parentElement;
  return r || e;
}
function ht(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (et(n)) {
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
  return et(n) ? n : null;
}
function gt(e, t) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function _t() {
  return vt(document);
}
function vt(e) {
  let t = {};
  return (
    e.querySelectorAll(`link[rel="stylesheet"]`).forEach((e) => {
      t[e.href] = e;
    }),
    t
  );
}
function yt(e, t) {
  bt(e.document, t, !0);
}
function bt(e, t, n) {
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
function xt(e, t, n) {
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
function St(e, t, n) {
  let r = [],
    [i, a] = e.GetChildren(),
    o = e.GetActiveChild(),
    s,
    c = o ? o.Element?.getBoundingClientRect() : null;
  if (o) {
    let e = Tt(o, t, n);
    if (
      e &&
      !e.offScreen &&
      ((s = Ct(o, e, e.overlap, n)), s && !s.visibility.offScreen)
    )
      return s;
    e && r.push({ child: o, visibility: e });
  }
  let l = n || c;
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    if (n == o) continue;
    let a = Tt(n, t, l ?? void 0);
    a && r.push({ child: n, visibility: a });
  }
  r.sort(wt);
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
    let i = n == o ? s : Ct(n, r, r.overlap || t, l ?? void 0);
    i && (!u || wt(i, u) < 0) && (u = i);
  }
  return u;
}
function Ct(e, t, n, r) {
  switch (e.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return St(e, t.overlap || n, r);
    case `self`:
      return { child: e, visibility: t };
  }
}
function wt(e, t) {
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
function Tt(e, t, n) {
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
    n && (a = rt(r, n));
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
var Et = class {
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
  Dt = class extends Et {
    m_fnCallback;
    constructor(e, t, n) {
      (super(e, t), (this.m_fnCallback = n));
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  Ot = class extends Et {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      (super(`ownerDocument` in e ? Fe(e) : e, n),
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
  F = new T(`ScrollSnap`).Debug,
  kt,
  At = 500;
function jt(e, t, n, r, i) {
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
      (s === void 0 && (s = Jt.Standard),
      r?.m_Properties?.fnScrollIntoViewHandler &&
        r.m_Properties.fnScrollIntoViewHandler(e, t, r) !== !1)
    )
      continue;
    let l = r.m_element,
      u = s == Jt.NoTransform || s == Jt.NoTransformSparseContent || !c;
    if (!t && n !== k.GAMEPAD)
      (F(`No previous element for scrolling, will jump`),
        u
          ? Vt(a, l, `auto`)
          : (F(`Scrolling Into View ('auto' via browser scrollIntoView):`, l),
            l?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            })));
    else {
      let t = u ? Pt(l) : l.getBoundingClientRect(),
        n = l.ownerDocument.defaultView.innerHeight,
        r = i ? 40 : Math.max(n * 0.4, 40),
        o = !1,
        s = kt && performance.now() - kt < At;
      (s || t.bottom < -r || t.top > n + r) &&
        ((o = !0),
        s ||
          F(
            `Disabling smooth scrolling, ${t.bottom} < ${-r}, ${t.top} > ${n} + ${r} `,
          ));
      let c = o ? `auto` : `smooth`;
      (o && (kt = performance.now()),
        e.Tree.Controller.BIsRestoringHistory() && (c = `auto`),
        u
          ? Vt(a, l, c)
          : (F(`Scrolling Into View ('${c}' via browser scrollIntoView):`, l),
            l.scrollIntoView({ behavior: c, block: `nearest` })));
    }
  }
  Mt(e, r);
}
function Mt(e, t) {
  let n = sn(t);
  if (!n) return;
  let r = null;
  for (let t = e; t; t = t.GetNavParentCrossingTrees())
    t.m_Properties?.scrollRegionToStartOrEnd && (r = t);
  if (r)
    for (
      let i = e;
      i &&
      !(
        i.BHasNavTargetInDirection(t, !0) ||
        (i != e &&
          i.Element &&
          i.m_Properties?.scrollRegionToStartOrEnd &&
          Nt(i.Element, t, n, i == i.Tree.Root),
        i == r)
      );
      i = i.GetNavParentCrossingTrees()
    );
}
function Nt(e, t, n, r) {
  let i = e,
    a = i.ownerDocument;
  if (
    ((r || i == a.body) && a.defaultView && !Re(i, n) && (i = a.defaultView),
    !Re(i, n))
  )
    return;
  let o = Wt(i);
  if (n == `y`) {
    let e = t == D.DIR_DOWN ? o.MaxScrollTop() : 0;
    o.scrollTo({ top: e, behavior: `smooth` });
  } else {
    let e = t == D.DIR_RIGHT ? o.MaxScrollLeft() : 0;
    o.scrollTo({ left: e, behavior: `smooth` });
  }
}
function Pt(e) {
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
    let { scrollTop: e, scrollLeft: i } = Gt(r);
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
function Ft(e, t) {
  return t == `x`
    ? [e.left, e.right, e.right - e.left]
    : [e.top, e.bottom, e.bottom - e.top];
}
function It(e, t, n, r) {
  let [i, a, o] = Ft(e, r),
    [s, c, l] = Ft(t, r),
    [u, d] = Ft(n, r);
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
function I(e) {
  return e == `auto`
    ? 0
    : e.endsWith(`px`)
      ? parseInt(e)
      : (console.log(`Unsupported length`, e), 0);
}
function Lt(e) {
  let t;
  return (
    (t =
      `ownerDocument` in e
        ? e.ownerDocument.defaultView.getComputedStyle(e)
        : e.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: I(t.scrollPaddingLeft),
      right: I(t.scrollPaddingRight),
      top: I(t.scrollPaddingTop),
      bottom: I(t.scrollPaddingBottom),
    }
  );
}
function Rt(e) {
  if (!(`ownerDocument` in e)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let t = e.ownerDocument.defaultView.getComputedStyle(e);
  return {
    left: I(t.scrollMarginLeft),
    right: I(t.scrollMarginRight),
    top: I(t.scrollMarginTop),
    bottom: I(t.scrollMarginBottom),
  };
}
function zt(e, t) {
  let n = Lt(e);
  return {
    left: Math.max(0, t.left + n.left),
    right: Math.max(0, t.right - n.right),
    top: Math.max(0, t.top + n.top),
    bottom: Math.max(0, t.bottom - n.bottom),
  };
}
function Bt(e) {
  return e > -1 && e < 1;
}
function Vt(e, n, r, i, a) {
  (F(
    `----------------------------------------------------------------------------------`,
  ),
    F(`Scrolling Into View (NoTransform):`, n));
  let o = [],
    s = n,
    c = Pt(n),
    l = a ?? Number.MAX_VALUE;
  for (; s;) {
    let e = Ie(s);
    e ||= Fe(s);
    let n = Rt(s),
      r = Pt(e),
      u = zt(e, r),
      d = Wt(e),
      f = { element: e, left: 0, top: 0 };
    if (
      (F(
        `Checking scroll div`,
        e,
        `scroll y:${d.scrollTop} of ${d.MaxScrollTop()}, x:${d.scrollLeft} of ${d.MaxScrollLeft()}, adjusted =>`,
        u,
        `target => `,
        c,
      ),
      (!i || i == `y`) &&
        Re(e, `y`) &&
        ((f.top = It(c, u, n, `y`)),
        (f.top = t(f.top, -d.scrollTop, d.MaxScrollTop() - d.scrollTop)),
        a &&
          ((f.top = Math.min(l, Math.abs(f.top)) * (f.top < 0 ? -1 : 1)),
          (l -= Math.abs(f.top))),
        F(`- checked y: ${f.top}`)),
      (!i || i == `x`) &&
        Re(e, `x`) &&
        ((f.left = It(c, u, n, `x`)),
        (f.left = t(f.left, -d.scrollLeft, d.MaxScrollLeft() - d.scrollLeft)),
        a &&
          ((f.left = Math.min(l, Math.abs(f.left)) * (f.left < 0 ? -1 : 1)),
          (l -= Math.abs(f.left))),
        F(`- checked x: ${f.left}`)),
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
    if (Bt(e.left) && Bt(e.top)) continue;
    let n = Wt(e.element),
      i = n.scrollTop + e.top,
      a = n.scrollLeft + e.left;
    ((a = t(a, 0, n.MaxScrollLeft())),
      (i = t(i, 0, n.MaxScrollTop())),
      !(Bt(n.scrollLeft - a) && Bt(n.scrollTop - i)) &&
        (n.scrollTo({ left: a, top: i, behavior: r }),
        (u ||= (F(`Scrolling:`), !0)),
        F(`- ${e.top},${e.left} => ${i}, ${a}, behavior: ${r}`, e.element)));
  }
}
var Ht = class {
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
          this.m_animation = new Dt(this.m_window, e, (e) => {
            this.m_window?.scrollTo({
              left: r + (t - r) * e,
              top: i + (n - i) * e,
              behavior: `auto`,
            });
          });
        } else
          ((this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new Ot(
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
a([x], Ht.prototype, `ResetScrollState`, null);
var Ut = new WeakMap();
function Wt(e) {
  let t = Ut.get(e);
  return (t || ((t = new Ht(e)), Ut.set(e, t)), t);
}
function Gt(e) {
  let t = Ut.get(e);
  return t
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
var Kt = new T(`FocusNavigationMovement`),
  L = Kt.Debug,
  R = (function (e) {
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
  qt = (function (e) {
    return (
      (e[(e.FIRST = 0)] = `FIRST`),
      (e[(e.LAST = 1)] = `LAST`),
      (e[(e.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (e[(e.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (e[(e.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      e
    );
  })({}),
  Jt = (function (e) {
    return (
      (e[(e.Standard = 0)] = `Standard`),
      (e[(e.NoTransform = 1)] = `NoTransform`),
      (e[(e.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      e
    );
  })({}),
  Yt = (function (e) {
    return (
      (e[(e.INVALID = 0)] = `INVALID`),
      (e[(e.FORWARD = 1)] = `FORWARD`),
      (e[(e.BACKWARD = 2)] = `BACKWARD`),
      e
    );
  })({}),
  Xt = class t {
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
    m_Focused = Ke(!1);
    m_FocusWithin = Ke(!1);
    m_ActionDescriptionsChangedCallbackList = new S();
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
      return new Qt(this);
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
      let t = !Xe(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
          fe,
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
          ? this.m_FocusRing?.OnBlur(k.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            r &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(k.APPLICATION, this, this),
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
        (L(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        t && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(k.APPLICATION, null)),
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
          xe(this.m_element, this.OnNavigationEvent),
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
            (L(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              e.m_element,
            ),
              this.m_Tree.TransferFocus(k.BROWSER, e));
            return;
          }
        }
        this.m_Tree.TransferFocus(k.BROWSER, this);
      }
    }
    OnDOMBlur(e) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(k.BROWSER, null);
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
      let t = this.FindNextFocusableChildInDirection(-1, 1, D.INVALID);
      return this.InternalFocusDescendant(t, e);
    }
    BFocusLastChild(e) {
      let t = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        D.INVALID,
      );
      return this.InternalFocusDescendant(t, e);
    }
    FindFocusableDescendant(e, t) {
      let n = sn(e),
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
          (i == 2 ? (l = `x`) : i == 3 ? (l = `y`) : s == 6 && n && (l = P[n]),
          (l || t) && n)
        ) {
          let r = this.m_Tree.GetLastFocusedNode();
          if (t || (r && l == P[n])) {
            let a =
              t ||
              this.AdjustRectForLastMovementOnTangentAxis(
                r.GetBoundingRect(),
                n,
              );
            (L(
              `Taking focus while preserving ${i && qt[i]} preserved: ${l} movement: ${n}, node:`,
              a,
            ),
              (c = this.FindClosestFocusableNodeToRect(e, a)));
          } else if (l != P[n]) {
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
        r = St(this, n);
      return (
        L(
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
          : on(this.m_element);
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
        case D.DIR_UP:
          n && (o = n(e.detail, this));
          break;
        case D.DIR_RIGHT:
          r && (o = r(e.detail, this));
          break;
        case D.DIR_DOWN:
          i && (o = i(e.detail, this));
          break;
        case D.DIR_LEFT:
          a && (o = a(e.detail, this));
      }
      return o;
    }
    InternalFocusDescendant(e, t, n) {
      return e ? (this.m_Tree.TransferFocus(t, e, n, !1), !0) : !1;
    }
    BHasNavTargetInDirection(e, t) {
      if (this.HasMovementHandler(e)) return !0;
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
        case D.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case D.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case D.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case D.DIR_RIGHT:
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
      L(
        `Handling navigation event ${D[e]} - ${R[this.GetLayout()]}`,
        this.m_element,
      );
      let n = this.FindNextFocusableChild(e);
      if (!n) return !1;
      let r = sn(e),
        i = this.ComputeRelativeDirection(e, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || n.GetScrollIntoViewType() == 2) {
        let e = n.Element?.ownerDocument.defaultView;
        if (e) {
          let a = (r == `y` ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
            o = Pt(n.Element),
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
              L(`Element too far away, scrolling ${a} on ${r} axis `),
              Vt(n.Element, n.Element, `smooth`, r, a),
              !0
            );
        }
      }
      return (this.m_Tree.TransferFocus(k.GAMEPAD, n, e), !0);
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
            case D.DIR_LEFT:
              return n ? 1 : 2;
            case D.DIR_RIGHT:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case D.DIR_UP:
              return n ? 1 : 2;
            case D.DIR_DOWN:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (e) {
            case D.DIR_LEFT:
            case D.DIR_UP:
              return n ? 1 : 2;
            case D.DIR_RIGHT:
            case D.DIR_DOWN:
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
      let i = r == D.DIR_UP || r == D.DIR_DOWN,
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
        ((r == D.DIR_UP || r == D.DIR_DOWN) &&
          (o = this.AdjustRectForLastMovementOnTangentAxis(o, `y`)),
        i)
      ) {
        let e = t;
        for (; e != -1;) {
          let t = this.ScanChildren(
            this.AdvanceIndex(e, n),
            n,
            (e) => !$t(`y`, o, e.GetBoundingRect()),
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
          if (!$t(`y`, o, e.GetBoundingRect())) return null;
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
      let i = sn(n);
      if (!i) return null;
      let a = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        i,
      );
      return this.FindClosetChildInDirection(i, a, t, n);
    }
    AdjustRectForLastMovementOnTangentAxis(e, t) {
      let n = this.m_Tree.GetLastFocusedMovementRect(P[t]);
      return n
        ? t == `x`
          ? { left: e.left, right: e.right, top: n.top, bottom: n.bottom }
          : { left: n.left, right: n.right, top: e.top, bottom: e.bottom }
        : e;
    }
    FindClosestFocusableNodeToRect(e, t) {
      let n = sn(e),
        r = n && P[n],
        i = [];
      for (let e of this.m_rgChildren) {
        let n = e.GetBoundingRect();
        if (n) {
          let a = Pe(t, n),
            o = r ? en(r, t, n) : 0;
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
      L(
        `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
      );
      let i = tn(e, t),
        a = [];
      for (let r of this.m_rgChildren) {
        let o = r.GetBoundingRect();
        if (o) {
          let s = tn(e, o),
            c;
          ((c = n == 1 ? s.min - i.max : i.min - s.max),
            c >= 0 && a.push({ child: r, overlap: en(P[e], t, o), dist: c }));
        }
      }
      if (
        (a.sort((e, t) => {
          if (e.overlap) {
            if (!t.overlap) return -1;
          } else if (t.overlap) return 1;
          return e.dist - t.dist || t.overlap - e.overlap;
        }),
        Kt.IsDebugEnabled())
      ) {
        let e = a
          .slice(0, 3)
          .map(
            ({ dist: e, overlap: t, child: n }) =>
              `[ node: ${n.m_element?.className} dist: ${e} overlap: ${t} ]`,
          );
        L(`Found nodes on axis, top 3 (of ${a.length}: ${e.join(`, `)}`);
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
      let s = rn(r);
      (this.ScanChildren(i, t, (t) => {
        let n = t.GetBoundingRect();
        return n
          ? a && !$t(P[e], a, n)
            ? !0
            : (o.push({ child: t, overlap: en(e, r, n), dist: nn(e, s, n) }),
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
            L(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && jt(this, n, t, r, i));
    }
  };
(a([x], Xt.prototype, `OnDOMFocus`, null),
  a([x], Xt.prototype, `OnDOMBlur`, null),
  a([x], Xt.prototype, `OnNavigationEvent`, null));
function Zt(e, t = window) {
  return t[e];
}
var Qt = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(e) {
    this.m_node = e;
  }
  TakeFocus(e) {
    return this.m_node.BTakeFocus(e ? k.GAMEPAD : k.APPLICATION, e);
  }
  ParentTakeFocus(e) {
    this.m_node.Parent?.BTakeFocus(e ? k.GAMEPAD : k.APPLICATION, e);
  }
  ChildTakeFocus(e) {
    return this.m_node.BChildTakeFocus(e ? k.GAMEPAD : k.APPLICATION, e);
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
    ((this.m_History ||= new Ae(this.m_node)), this.m_History.PushState());
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    ((this.m_StateHistory ||= new je(this.m_node)),
      this.m_StateHistory.SaveState(e));
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Oe(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return ke(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function $t(t, n, r, i = 0.001) {
  return t == `x`
    ? n.right > r.left + i && n.left + i < r.right
    : t == `y`
      ? n.bottom > r.top + i && n.top + i < r.bottom
      : (e(!1, `Invalid axis ${t}`), !1);
}
function en(t, n, r) {
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
function tn(e, t) {
  return e == `x`
    ? { min: t.left, max: t.right }
    : { min: t.top, max: t.bottom };
}
function nn(e, t, n) {
  let r = t[e],
    i = tn(e, n);
  return r < i.min ? i.min - r : r > i.max ? r - i.max : 0;
}
function rn(e) {
  return { x: e.left, y: e.top };
}
var an = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function on(e) {
  if (!e) return R.NONE;
  let t = e.ownerDocument.defaultView,
    n = t.getComputedStyle(e);
  if (n.display == `flex`)
    switch (n.flexDirection) {
      case `row`:
        return n.flexWrap == `wrap` ? R.GRID : R.ROW;
      case `row-reverse`:
        return R.ROW_REVERSE;
      case `column`:
        return R.COLUMN;
      case `column-reverse`:
        return R.COLUMN_REVERSE;
    }
  else if (n.display == `grid`)
    return n.gridTemplateAreas === `none` ? R.GRID : R.GEOMETRIC;
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
      return R.ROW;
    if (i === `right`) return R.ROW_REVERSE;
    if (r.display === `inline` || r.display === `inline-block`) return R.GRID;
  }
  return R.COLUMN;
}
function sn(e) {
  switch (e) {
    case D.DIR_UP:
    case D.DIR_DOWN:
      return `y`;
    case D.DIR_LEFT:
    case D.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function cn(e, t, n = [], r = !0) {
  let i = C.useRef(e);
  ((i.current = e),
    C.useEffect(() => {
      if (!i.current || !r) return;
      let e = setInterval(() => {
        i.current && i.current();
      }, t);
      return () => clearInterval(e);
    }, [t, r, ...n]));
}
function ln() {
  let [, e] = C.useState(0);
  return C.useCallback(() => e((e) => e + 1), []);
}
function un(e) {
  let t = C.useRef({
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
    C.useEffect(() => {
      let e = t.current;
      return () => e.fnExecuteLatestCallback();
    }, []),
    C.useCallback(
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
function dn(e, t) {
  C.useLayoutEffect(() => {
    if (!t || !e) return;
    let n = e.Register(t);
    return () => n.Unregister();
  }, [e, t]);
}
function fn(e) {
  return pn;
}
function pn() {}
function mn(e) {
  return C.useSyncExternalStore(
    e ? e.SyncStore : fn,
    e ? e.GetValue : pn,
    e ? e.GetValue : pn,
  );
}
function hn(e, t) {
  C.useEffect(() => {
    if (e && t) return e.Subscribe(t).Unsubscribe;
  }, [e, t]);
}
function gn(e, t) {
  let [n, r] = C.useState(e);
  return (
    C.useEffect(() => {
      if (e) r(!0);
      else {
        let e = window.setTimeout(() => r(!1), t);
        return () => window.clearTimeout(e);
      }
    }, [e, t]),
    n
  );
}
function _n(e, t) {
  return gn(e, t) || e;
}
function vn(e = !1) {
  let [t, n] = C.useState(e);
  return [t, C.useCallback(() => n(!0), []), C.useCallback(() => n(!1), [])];
}
function yn(e) {
  let t = C.useRef(void 0);
  return C.useCallback(
    () => (
      (t.current && t.current.factory == e) ||
        (t.current = { value: e(), factory: e }),
      t.current.value
    ),
    [e],
  );
}
function bn(e) {
  let t = C.useRef(e);
  return (
    (t.current.length !== e.length || t.current.some((t, n) => t !== e[n])) &&
      (t.current = e),
    t.current
  );
}
var xn = (function (e) {
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
  Sn = new (class {
    m_fnCallbackOnPlaySound = new S();
    m_fnCallbackOnSuppressSound = new S();
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
  Cn = new T(`GamepadEvents`).Debug;
function wn(e, t, n) {
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
    C.useEffect(() => {
      let n = t.current,
        r = [];
      return (
        n &&
          (e.onButtonDown && r.push(me(n, e.onButtonDown)),
          e.onButtonUp && r.push(he(n, e.onButtonUp)),
          e.onOKButton && r.push(ge(n, e.onOKButton)),
          e.onCancelButton && r.push(_e(n, e.onCancelButton)),
          e.onSecondaryButton && r.push(ve(n, e.onSecondaryButton)),
          e.onOptionsButton && r.push(ye(n, e.onOptionsButton)),
          e.onMenuButton && r.push(be(n, e.onMenuButton)),
          e.onGamepadDirection && r.push(xe(n, e.onGamepadDirection)),
          e.onGamepadFocus && r.push(Se(n, e.onGamepadFocus)),
          e.onGamepadBlur && r.push(Ce(n, e.onGamepadBlur))),
        () => r.forEach((e) => e())
      );
    }, n));
}
function z(e) {
  return (e.stopPropagation(), !1);
}
function Tn(e, t, n) {
  let { onButtonDown: r, ...i } = e,
    a = C.useCallback(
      (e) => {
        (r && r(e),
          Cn(
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
  (wn(i, t),
    wn(
      {
        onButtonDown: a,
        onButtonUp: z,
        onOKButton: z,
        onCancelButton: z,
        onSecondaryButton: z,
        onOptionsButton: z,
        onMenuButton: z,
        onGamepadDirection: z,
        onGamepadFocus: z,
        onGamepadBlur: z,
      },
      t,
      [a],
    ));
}
function En(e) {
  if (!e) return R.NONE;
  switch (e) {
    case `column`:
      return R.COLUMN;
    case `column-reverse`:
      return R.COLUMN_REVERSE;
    case `row`:
      return R.ROW;
    case `row-reverse`:
      return R.ROW_REVERSE;
    case `grid`:
      return R.GRID;
    case `geometric`:
      return R.GEOMETRIC;
    default:
      return (i(e, `Unhandled flow-children: ${e}`), R.NONE);
  }
}
function Dn(e) {
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
var On = C.createContext(Dn);
function kn(e, t) {
  let { onTextEntered: n, ...r } = e,
    i = C.useRef(null),
    a = C.useRef({});
  Object.assign(a.current, {
    ...r,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let o = An(a.current),
    s = C.useCallback(
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
    c = C.useCallback((e) => !o.bInVR && e.pointerType === `mouse`, [o]),
    l = C.useCallback(
      (e) => {
        c(e) || o.ShowVirtualKeyboard();
      },
      [o, c],
    ),
    u = ce(
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
            t.push(ge(e, o.ShowVirtualKeyboard)),
            t.push(Ce(e, s))),
          () => t.forEach((e) => e())
        );
      },
      [s, l, o],
    );
  return (
    C.useLayoutEffect(
      () => (
        O(t, {
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
        () => O(t, null)
      ),
      [o, t, c],
    ),
    u
  );
}
function An(e) {
  let t = C.useRef(void 0),
    n = C.useContext(On);
  return ((t.current ||= n(e || {})), t.current);
}
function jn(e) {
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
var Mn = C.createContext(void 0);
function Nn() {
  return C.useContext(Mn);
}
function Pn() {
  return mn(Nn()?.GetShowDebugFocusRing()) ?? !1;
}
var Fn = C.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function In() {
  return C.useContext(Fn)?.focusNavWindow;
}
function Ln(e = !0) {
  return C.useContext(Fn)?.bSupportsFocus ?? e;
}
var Rn = C.forwardRef(function (e, t) {
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
    { elemProps: _, navOptions: v, gamepadEvents: y } = Xn(g);
  return Nn()
    ? (0, M.jsx)(zn, {
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
        children: (0, M.jsx)(`div`, { ..._, ref: t }),
      })
    : (0, M.jsx)(`div`, { ..._, ref: t });
});
function zn(e) {
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
    { elemProps: _, navOptions: v, gamepadEvents: y } = Xn(g),
    { refDiv: ee, tree: b } = Bn({
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
  (dn(b.OnActivateCallbacks, n),
    dn(b.OnDeactivateCallbacks, r),
    Tn(y, ee, b),
    C.useLayoutEffect(() => {
      let e = En(h);
      b.Root.SetProperties({ ...v, layout: e });
    }));
  let x = oe(ee, l.props.ref);
  return (0, M.jsx)(Hn, {
    tree: p ? null : b,
    disableFocusClasses: f || p,
    children: (0, M.jsx)(Wn.Provider, {
      value: p ? null : b.Root,
      children: C.cloneElement(l, { id: t, "data-react-nav-root": t, ref: x }),
    }),
  });
}
function Bn(e) {
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
    l = Nn(),
    u = In() || l.GetDefaultContext(),
    d = C.useContext(Wn),
    [f] = C.useState(() =>
      l.NewGamepadNavigationTree(u, t, n ?? d?.Tree, {
        ...c,
        bIsEmbeddedInLegacyTree: !!n,
      }),
    ),
    p = C.useRef(null);
  return (
    f.SetOnGlobalButtonDown(s),
    C.useEffect(() => f.RegisterNavigationItem(f.Root, p.current), [f, p]),
    C.useEffect(() => {
      f.SetIsEnabled(a);
    }, [f, a]),
    C.useEffect(() => {
      f.SetExcludeFromScrollRegionSearch(i);
    }, [f, i]),
    C.useEffect(() => {
      if (!r)
        return l.RegisterGamepadNavigationTree(
          f,
          p.current.ownerDocument.defaultView,
        );
    }, [l, f, r]),
    C.useEffect(() => (O(o, f), () => O(o, null)), [o, f]),
    { refDiv: p, tree: f }
  );
}
var Vn = C.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function Hn(e) {
  let { tree: t, disableFocusClasses: n = !1, children: r } = e,
    [i, a] = C.useState(t?.BIsActive() || !1),
    [o, s] = C.useState(t?.BIsActiveWithinWindow() || !1),
    c = mn(t?.SubscribableIsMounted) ?? !1;
  C.useEffect(() => {
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
  let l = C.useMemo(
    () => ({
      bActiveTree: i,
      bActiveTreeWithinWindow: o,
      bDisableFocusClasses: n,
      bIsMounted: c,
    }),
    [i, n, o, c],
  );
  return (0, M.jsx)(Vn.Provider, { value: l, children: r });
}
function Un() {
  return C.useContext(Vn);
}
var Wn = C.createContext(null),
  Gn = C.createContext(an);
function Kn(e, t) {
  let n = C.useRef(null);
  return (
    e &&
      (!n.current || n.current.m_Parent != e) &&
      (n.current = e.Tree.CreateNode(e, t)),
    n.current
  );
}
function qn(e) {
  let { navRef: t, ...n } = e,
    r = C.useRef(null),
    i = (0, C.useContext)(Wn),
    a = Kn(i, (0, C.useContext)(Gn));
  return (
    C.useLayoutEffect(() => {
      a && a.SetProperties(n);
    }),
    C.useLayoutEffect(() => {
      if (!i) return;
      let e = i.Tree.RegisterNavigationItem(a, r.current);
      return () => {
        e();
      };
    }, [i, a, r]),
    C.useLayoutEffect(() => {
      if (a && t) return (O(t, a.CreateHandle()), () => O(t, null));
    }, [a, t]),
    { ref: r, node: a }
  );
}
function Jn(e) {
  let t = C.useRef(null),
    n = C.useRef(null);
  return (
    C.useEffect(
      () => () => {
        n.current?.();
      },
      [],
    ),
    C.useCallback(
      (r) => {
        t.current !== r &&
          ((t.current = r),
          n.current?.(),
          (n.current = null),
          r &&
            (n.current = we(r, (t) =>
              !e || e.GetFocusable() == `none`
                ? !1
                : e.BTakeFocus(void 0, t.detail.button),
            )));
      },
      [e],
    )
  );
}
function Yn(e) {
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
      actionDescriptions: Te({
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
function Xn(e) {
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
      scrollIntoViewWhenChildFocused: ee,
      fnScrollIntoViewHandler: b,
      scrollIntoViewType: x,
      resetNavOnEntry: S,
      scrollRegionToStartOrEnd: te,
      excludeFromScrollRegionSearch: C,
      ...w
    } = e,
    { gamepadEvents: T, actionDescriptions: E, props: ne } = Yn(w);
  return {
    elemProps: ne,
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
      scrollIntoViewWhenChildFocused: ee,
      fnScrollIntoViewHandler: b,
      scrollIntoViewType: x,
      resetNavOnEntry: S,
      scrollRegionToStartOrEnd: te,
      excludeFromScrollRegionSearch: C,
      actionDescriptionMap: { ...m, ...E },
    },
    gamepadEvents: T,
  };
}
function Zn(e) {
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
      d = Ln(),
      f = mn(s.SubscribableHasFocus) && d,
      p = mn(s.SubscribableFocusWithin) && d,
      {
        bActiveTree: m,
        bActiveTreeWithinWindow: h,
        bDisableFocusClasses: g,
        bIsMounted: _,
      } = Un(),
      v = m && !g,
      y = _ && !h && (c !== void 0 || i);
    return C.createElement(
      e,
      {
        ...u,
        className: (0, w.default)(a, f && v && n, p && v && r),
        tabIndex: y ? -1 : c,
        ref: o,
      },
      l,
    );
  };
}
var Qn = Zn(`div`);
function $n(e) {
  return (
    Sn.PlayNavSound(xn.DefaultOk),
    et(e.currentTarget) && e.currentTarget.click(),
    !0
  );
}
var er = C.createContext(void 0);
er.Provider;
function tr(e, t, n, r, i) {
  let {
      elemProps: { focusClassName: a, children: o, "flow-children": s, ...c },
      navOptions: l,
      gamepadEvents: u,
    } = Xn(n),
    {
      bFocusableByDefault: d = !0,
      bActivateByDefault: f = !1,
      bDOMElementFocusByDefault: p = d,
    } = i || {};
  l.focusable === void 0 && !c.disabled && d && (l.focusable = !0);
  let { ref: m, node: h } = qn({ layout: En(s), ...l });
  (u.onOKButton ||
    (((`onClick` in c && c.onClick) || (f && (f === !0 || f(c)))) &&
      (u.onOKButton = $n)),
    l.focusable && !p
      ? (c.tabIndex = c.tabIndex || 0)
      : !l.focusable && p && (c.tabIndex = c.tabIndex ?? -1),
    wn(u, m));
  let g = oe(r, m, Jn(h)),
    _ = (0, C.useContext)(er)?.Component,
    v = { ...c };
  return (
    `onClick` in c && (v.role ??= `button`),
    h
      ? ((v = {
          ...v,
          divRef: g,
          node: h,
          focusClassName: (0, w.default)(a, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: p,
          className: (0, w.default)(c.className, `Focusable`),
        }),
        (0, M.jsx)(Wn.Provider, {
          value: h,
          children: _
            ? C.createElement(_, { ...v, Component: t }, o)
            : C.createElement(t, v, o),
        }))
      : C.createElement(
          e,
          { ...v, ref: r, className: (0, w.default)(c.className, `Focusable`) },
          o,
        )
  );
}
function B(e, t) {
  let n = Zn(e);
  return C.forwardRef(function (r, i) {
    return tr(e, n, r, i, t);
  });
}
function nr(e) {
  let t = Zn(e);
  return C.forwardRef(function (n, r) {
    let {
        virtualKeyboardProps: i,
        props: { refKeyboardHandle: a, ...o },
      } = jn(n),
      s = oe(r, kn(i, a));
    return tr(e, t, o, s);
  });
}
function rr() {
  return C.createRef();
}
var ir = B(`div`, { bDOMElementFocusByDefault: !1 }),
  ar = B(`button`, { bActivateByDefault: (e) => e.type === `submit` }),
  or = B(`a`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  sr = C.forwardRef(function (e, t) {
    let { href: n = `#`, ...r } = e;
    return (0, M.jsx)(or, { ref: t, href: n, ...r });
  }),
  cr = nr(`input`),
  lr = nr(`textarea`);
(B(`img`, { bDOMElementFocusByDefault: !1 }),
  B(`label`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  B(`section`, { bFocusableByDefault: !1 }),
  B(`form`, { bFocusableByDefault: !1 }));
var ur = B(`summary`, { bActivateByDefault: !0 });
B(`details`, { bFocusableByDefault: !1 });
function dr(e, t, n = !1) {
  C.useEffect(() => {
    let r = e.current;
    r && (t ? r.Activate(n) : r.Deactivate());
  }, [t, n, e]);
}
function fr(e, t) {
  return ce(
    (n) => {
      if (!n) return;
      let r = t(n.ownerDocument.defaultView, (t) => {
        e(t[0]);
      });
      return (r.observe(n), () => r.unobserve(n));
    },
    [e, t],
  );
}
function pr(t) {
  return fr(
    t,
    C.useCallback(
      (t, n) =>
        t.ResizeObserver
          ? new t.ResizeObserver(n)
          : (e(!1, `ResizeObserver is not available`),
            { observe: () => {}, unobserve: () => {}, disconnect: () => {} }),
      [],
    ),
  );
}
function mr(e, t) {
  return fr(
    e,
    C.useCallback((e, n) => new e.IntersectionObserver(n, t), [t]),
  );
}
function hr(e, ...t) {
  let n = new e.ownerDocument.defaultView.ResizeObserver(...t);
  return (n.observe(e), n);
}
function gr(e) {
  return function (t) {
    return (0, M.jsx)(_r, { children: (0, M.jsx)(e, { ...t }) });
  };
}
var _r = class extends C.Component {
  state = {};
  constructor(e) {
    (super(e), (this.state.lastErrorKey = e.errorKey));
  }
  componentDidCatch(e, t) {
    (n()
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
    let { children: e, fallback: t, errorKey: r } = this.props,
      { error: i, identifierHash: a, lastErrorKey: o } = this.state;
    return i && r == o
      ? t === void 0
        ? n().reporting_enabled
          ? (0, M.jsx)(yr, {
              error: i,
              identifierHash: a,
              store: n(),
              onRefresh: this.Reset,
            })
          : (0, M.jsx)(vr, { error: i, onDismiss: this.Reset })
        : typeof t == `function`
          ? t(i.error)
          : t
      : e || null;
  }
};
a([x], _r.prototype, `Reset`, null);
var vr = ({ error: e, onDismiss: t }) => {
    let n = e.error ? e.error.stack : `Stack missing`,
      r = e.info ? e.info.componentStack : ``,
      i = (e.error && e.error.message) || `unknown error`;
    return (0, M.jsxs)(xr, {
      children: [
        (0, M.jsxs)(Sr, { children: [`Error: "`, i, `"`] }),
        `\xA0\xA0\xA0`,
        (0, M.jsx)(br, { onClick: t, children: `(x) Dismiss` }),
        (0, M.jsx)(`br`, {}),
        (0, M.jsx)(Cr, { children: n }),
        (0, M.jsxs)(Cr, {
          children: [`The error occurred while rendering:`, r],
        }),
      ],
    });
  },
  yr = (e) => {
    let { error: t, onRefresh: n, identifierHash: r, store: i } = e,
      a = (t.error && t.error.message) || `unknown error`,
      o = `${i.product}_${i.version}_${r}`;
    return (0, M.jsxs)(xr, {
      children: [
        (0, M.jsxs)(Sr, {
          children: [
            `Something went wrong while displaying this content. `,
            (0, M.jsx)(br, { onClick: n, children: `Refresh` }),
          ],
        }),
        (0, M.jsxs)(Cr, { children: [`Error Reference: `, o] }),
        (0, M.jsx)(Cr, { children: a }),
      ],
    });
  },
  br = ({ onClick: e, children: t }) => {
    let n = C.useRef(null),
      r = Ln();
    return (
      C.useEffect(() => {
        let e = n.current;
        r && e && !e.NavTree().GetLastFocusedNode() && e.TakeFocus();
      }, [r]),
      (0, M.jsx)(sr, {
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
  xr = ({ children: e }) =>
    (0, M.jsx)(`div`, {
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
  Sr = ({ children: e }) =>
    (0, M.jsx)(`h1`, {
      style: {
        fontSize: `20px`,
        display: `inline-block`,
        marginTop: `15px`,
        userSelect: `auto`,
      },
      children: e,
    }),
  Cr = ({ children: e }) =>
    (0, M.jsx)(`pre`, {
      style: { marginTop: `15px`, opacity: 0.7, userSelect: `auto` },
      children: e,
    }),
  V = null;
try {
  V = new WebAssembly.Instance(
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
function H(e, t, n) {
  ((this.low = e | 0), (this.high = t | 0), (this.unsigned = !!n));
}
(H.prototype.__isLong__,
  Object.defineProperty(H.prototype, "__isLong__", { value: !0 }));
function U(e) {
  return (e && e.__isLong__) === !0;
}
function wr(e) {
  var t = Math.clz32(e & -e);
  return e ? 31 - t : t;
}
H.isLong = U;
var Tr = {},
  Er = {};
function W(e, t) {
  var n, r, i;
  return t
    ? ((e >>>= 0),
      (i = 0 <= e && e < 256) && ((r = Er[e]), r)
        ? r
        : ((n = K(e, 0, !0)), i && (Er[e] = n), n))
    : ((e |= 0),
      (i = -128 <= e && e < 128) && ((r = Tr[e]), r)
        ? r
        : ((n = K(e, e < 0 ? -1 : 0, !1)), i && (Tr[e] = n), n));
}
H.fromInt = W;
function G(e, t) {
  if (isNaN(e)) return t ? X : Y;
  if (t) {
    if (e < 0) return X;
    if (e >= jr) return Lr;
  } else {
    if (e <= -Mr) return Q;
    if (e + 1 >= Mr) return Ir;
  }
  return e < 0 ? G(-e, t).neg() : K((e % J) | 0, (e / J) | 0, t);
}
H.fromNumber = G;
function K(e, t, n) {
  return new H(e, t, n);
}
H.fromBits = K;
var Dr = Math.pow;
function Or(e, t, n) {
  if (e.length === 0) throw Error(`empty string`);
  if (
    (typeof t == `number` ? ((n = t), (t = !1)) : (t = !!t),
    e === `NaN` || e === `Infinity` || e === `+Infinity` || e === `-Infinity`)
  )
    return t ? X : Y;
  if (((n ||= 10), n < 2 || 36 < n)) throw RangeError(`radix`);
  var r;
  if ((r = e.indexOf(`-`)) > 0) throw Error(`interior hyphen`);
  if (r === 0) return Or(e.substring(1), t, n).neg();
  for (var i = G(Dr(n, 8)), a = Y, o = 0; o < e.length; o += 8) {
    var s = Math.min(8, e.length - o),
      c = parseInt(e.substring(o, o + s), n);
    if (s < 8) {
      var l = G(Dr(n, s));
      a = a.mul(l).add(G(c));
    } else ((a = a.mul(i)), (a = a.add(G(c))));
  }
  return ((a.unsigned = t), a);
}
H.fromString = Or;
function q(e, t) {
  return typeof e == `number`
    ? G(e, t)
    : typeof e == `string`
      ? Or(e, t)
      : K(e.low, e.high, typeof t == `boolean` ? t : e.unsigned);
}
H.fromValue = q;
var kr = 65536,
  Ar = 1 << 24,
  J = kr * kr,
  jr = J * J,
  Mr = jr / 2,
  Nr = W(Ar),
  Y = W(0);
H.ZERO = Y;
var X = W(0, !0);
H.UZERO = X;
var Z = W(1);
H.ONE = Z;
var Pr = W(1, !0);
H.UONE = Pr;
var Fr = W(-1);
H.NEG_ONE = Fr;
var Ir = K(-1, 2147483647, !1);
H.MAX_VALUE = Ir;
var Lr = K(-1, -1, !0);
H.MAX_UNSIGNED_VALUE = Lr;
var Q = K(0, -2147483648, !1);
H.MIN_VALUE = Q;
var $ = H.prototype;
(($.toInt = function () {
  return this.unsigned ? this.low >>> 0 : this.low;
}),
  ($.toNumber = function () {
    return this.unsigned
      ? (this.high >>> 0) * J + (this.low >>> 0)
      : this.high * J + (this.low >>> 0);
  }),
  ($.toString = function (e) {
    if (((e ||= 10), e < 2 || 36 < e)) throw RangeError(`radix`);
    if (this.isZero()) return `0`;
    if (this.isNegative()) {
      if (this.eq(Q)) {
        var t = G(e),
          n = this.div(t),
          r = n.mul(t).sub(this);
        return n.toString(e) + r.toInt().toString(e);
      }
      return `-` + this.neg().toString(e);
    }
    for (var i = G(Dr(e, 6), this.unsigned), a = this, o = ``; ;) {
      var s = a.div(i),
        c = (a.sub(s.mul(i)).toInt() >>> 0).toString(e);
      if (((a = s), a.isZero())) return c + o;
      for (; c.length < 6;) c = `0` + c;
      o = `` + c + o;
    }
  }),
  ($.getHighBits = function () {
    return this.high;
  }),
  ($.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }),
  ($.getLowBits = function () {
    return this.low;
  }),
  ($.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }),
  ($.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(Q) ? 64 : this.neg().getNumBitsAbs();
    for (
      var e = this.high == 0 ? this.low : this.high, t = 31;
      t > 0 && !(e & (1 << t));
      t--
    );
    return this.high == 0 ? t + 1 : t + 33;
  }),
  ($.isSafeInteger = function () {
    var e = this.high >> 21;
    return (
      !e ||
      (!this.unsigned && e === -1 && (this.low !== 0 || this.high !== -2097152))
    );
  }),
  ($.isZero = function () {
    return this.high === 0 && this.low === 0;
  }),
  ($.eqz = $.isZero),
  ($.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }),
  ($.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }),
  ($.isOdd = function () {
    return (this.low & 1) == 1;
  }),
  ($.isEven = function () {
    return !(this.low & 1);
  }),
  ($.equals = function (e) {
    return (
      U(e) || (e = q(e)),
      this.unsigned !== e.unsigned &&
      this.high >>> 31 == 1 &&
      e.high >>> 31 == 1
        ? !1
        : this.high === e.high && this.low === e.low
    );
  }),
  ($.eq = $.equals),
  ($.notEquals = function (e) {
    return !this.eq(e);
  }),
  ($.neq = $.notEquals),
  ($.ne = $.notEquals),
  ($.lessThan = function (e) {
    return this.comp(e) < 0;
  }),
  ($.lt = $.lessThan),
  ($.lessThanOrEqual = function (e) {
    return this.comp(e) <= 0;
  }),
  ($.lte = $.lessThanOrEqual),
  ($.le = $.lessThanOrEqual),
  ($.greaterThan = function (e) {
    return this.comp(e) > 0;
  }),
  ($.gt = $.greaterThan),
  ($.greaterThanOrEqual = function (e) {
    return this.comp(e) >= 0;
  }),
  ($.gte = $.greaterThanOrEqual),
  ($.ge = $.greaterThanOrEqual),
  ($.compare = function (e) {
    if ((U(e) || (e = q(e)), this.eq(e))) return 0;
    var t = this.isNegative(),
      n = e.isNegative();
    return t && !n
      ? -1
      : !t && n
        ? 1
        : this.unsigned
          ? e.high >>> 0 > this.high >>> 0 ||
            (e.high === this.high && e.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(e).isNegative()
            ? -1
            : 1;
  }),
  ($.comp = $.compare),
  ($.negate = function () {
    return !this.unsigned && this.eq(Q) ? Q : this.not().add(Z);
  }),
  ($.neg = $.negate),
  ($.add = function (e) {
    U(e) || (e = q(e));
    var t = this.high >>> 16,
      n = this.high & 65535,
      r = this.low >>> 16,
      i = this.low & 65535,
      a = e.high >>> 16,
      o = e.high & 65535,
      s = e.low >>> 16,
      c = e.low & 65535,
      l = 0,
      u = 0,
      d = 0,
      f = 0;
    return (
      (f += i + c),
      (d += f >>> 16),
      (f &= 65535),
      (d += r + s),
      (u += d >>> 16),
      (d &= 65535),
      (u += n + o),
      (l += u >>> 16),
      (u &= 65535),
      (l += t + a),
      (l &= 65535),
      K((d << 16) | f, (l << 16) | u, this.unsigned)
    );
  }),
  ($.subtract = function (e) {
    return (U(e) || (e = q(e)), this.add(e.neg()));
  }),
  ($.sub = $.subtract),
  ($.multiply = function (e) {
    if (this.isZero()) return this;
    if ((U(e) || (e = q(e)), V))
      return K(
        V.mul(this.low, this.high, e.low, e.high),
        V.get_high(),
        this.unsigned,
      );
    if (e.isZero()) return this.unsigned ? X : Y;
    if (this.eq(Q)) return e.isOdd() ? Q : Y;
    if (e.eq(Q)) return this.isOdd() ? Q : Y;
    if (this.isNegative())
      return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
    if (e.isNegative()) return this.mul(e.neg()).neg();
    if (this.lt(Nr) && e.lt(Nr))
      return G(this.toNumber() * e.toNumber(), this.unsigned);
    var t = this.high >>> 16,
      n = this.high & 65535,
      r = this.low >>> 16,
      i = this.low & 65535,
      a = e.high >>> 16,
      o = e.high & 65535,
      s = e.low >>> 16,
      c = e.low & 65535,
      l = 0,
      u = 0,
      d = 0,
      f = 0;
    return (
      (f += i * c),
      (d += f >>> 16),
      (f &= 65535),
      (d += r * c),
      (u += d >>> 16),
      (d &= 65535),
      (d += i * s),
      (u += d >>> 16),
      (d &= 65535),
      (u += n * c),
      (l += u >>> 16),
      (u &= 65535),
      (u += r * s),
      (l += u >>> 16),
      (u &= 65535),
      (u += i * o),
      (l += u >>> 16),
      (u &= 65535),
      (l += t * c + n * s + r * o + i * a),
      (l &= 65535),
      K((d << 16) | f, (l << 16) | u, this.unsigned)
    );
  }),
  ($.mul = $.multiply),
  ($.divide = function (e) {
    if ((U(e) || (e = q(e)), e.isZero())) throw Error(`division by zero`);
    if (V)
      return !this.unsigned &&
        this.high === -2147483648 &&
        e.low === -1 &&
        e.high === -1
        ? this
        : K(
            (this.unsigned ? V.div_u : V.div_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            ),
            V.get_high(),
            this.unsigned,
          );
    if (this.isZero()) return this.unsigned ? X : Y;
    var t, n, r;
    if (this.unsigned) {
      if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return X;
      if (e.gt(this.shru(1))) return Pr;
      r = X;
    } else {
      if (this.eq(Q))
        return e.eq(Z) || e.eq(Fr)
          ? Q
          : e.eq(Q)
            ? Z
            : ((t = this.shr(1).div(e).shl(1)),
              t.eq(Y)
                ? e.isNegative()
                  ? Z
                  : Fr
                : ((n = this.sub(e.mul(t))), (r = t.add(n.div(e))), r));
      if (e.eq(Q)) return this.unsigned ? X : Y;
      if (this.isNegative())
        return e.isNegative()
          ? this.neg().div(e.neg())
          : this.neg().div(e).neg();
      if (e.isNegative()) return this.div(e.neg()).neg();
      r = Y;
    }
    for (n = this; n.gte(e);) {
      t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
      for (
        var i = Math.ceil(Math.log(t) / Math.LN2),
          a = i <= 48 ? 1 : Dr(2, i - 48),
          o = G(t),
          s = o.mul(e);
        s.isNegative() || s.gt(n);
      )
        ((t -= a), (o = G(t, this.unsigned)), (s = o.mul(e)));
      (o.isZero() && (o = Z), (r = r.add(o)), (n = n.sub(s)));
    }
    return r;
  }),
  ($.div = $.divide),
  ($.modulo = function (e) {
    return (
      U(e) || (e = q(e)),
      V
        ? K(
            (this.unsigned ? V.rem_u : V.rem_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            ),
            V.get_high(),
            this.unsigned,
          )
        : this.sub(this.div(e).mul(e))
    );
  }),
  ($.mod = $.modulo),
  ($.rem = $.modulo),
  ($.not = function () {
    return K(~this.low, ~this.high, this.unsigned);
  }),
  ($.countLeadingZeros = function () {
    return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
  }),
  ($.clz = $.countLeadingZeros),
  ($.countTrailingZeros = function () {
    return this.low ? wr(this.low) : wr(this.high) + 32;
  }),
  ($.ctz = $.countTrailingZeros),
  ($.and = function (e) {
    return (
      U(e) || (e = q(e)), K(this.low & e.low, this.high & e.high, this.unsigned)
    );
  }),
  ($.or = function (e) {
    return (
      U(e) || (e = q(e)), K(this.low | e.low, this.high | e.high, this.unsigned)
    );
  }),
  ($.xor = function (e) {
    return (
      U(e) || (e = q(e)), K(this.low ^ e.low, this.high ^ e.high, this.unsigned)
    );
  }),
  ($.shiftLeft = function (e) {
    return (
      U(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? K(
              this.low << e,
              (this.high << e) | (this.low >>> (32 - e)),
              this.unsigned,
            )
          : K(0, this.low << (e - 32), this.unsigned)
    );
  }),
  ($.shl = $.shiftLeft),
  ($.shiftRight = function (e) {
    return (
      U(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? K(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >> e,
              this.unsigned,
            )
          : K(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
    );
  }),
  ($.shr = $.shiftRight),
  ($.shiftRightUnsigned = function (e) {
    return (
      U(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e < 32
          ? K(
              (this.low >>> e) | (this.high << (32 - e)),
              this.high >>> e,
              this.unsigned,
            )
          : K(e === 32 ? this.high : this.high >>> (e - 32), 0, this.unsigned)
    );
  }),
  ($.shru = $.shiftRightUnsigned),
  ($.shr_u = $.shiftRightUnsigned),
  ($.rotateLeft = function (e) {
    var t;
    return (
      U(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? K(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              K(
                (this.low << e) | (this.high >>> t),
                (this.high << e) | (this.low >>> t),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              K(
                (this.high << e) | (this.low >>> t),
                (this.low << e) | (this.high >>> t),
                this.unsigned,
              ))
    );
  }),
  ($.rotl = $.rotateLeft),
  ($.rotateRight = function (e) {
    var t;
    return (
      U(e) && (e = e.toInt()),
      (e &= 63) == 0
        ? this
        : e === 32
          ? K(this.high, this.low, this.unsigned)
          : e < 32
            ? ((t = 32 - e),
              K(
                (this.high << t) | (this.low >>> e),
                (this.low << t) | (this.high >>> e),
                this.unsigned,
              ))
            : ((e -= 32),
              (t = 32 - e),
              K(
                (this.low << t) | (this.high >>> e),
                (this.high << t) | (this.low >>> e),
                this.unsigned,
              ))
    );
  }),
  ($.rotr = $.rotateRight),
  ($.toSigned = function () {
    return this.unsigned ? K(this.low, this.high, !1) : this;
  }),
  ($.toUnsigned = function () {
    return this.unsigned ? this : K(this.low, this.high, !0);
  }),
  ($.toBytes = function (e) {
    return e ? this.toBytesLE() : this.toBytesBE();
  }),
  ($.toBytesLE = function () {
    var e = this.high,
      t = this.low;
    return [
      t & 255,
      (t >>> 8) & 255,
      (t >>> 16) & 255,
      t >>> 24,
      e & 255,
      (e >>> 8) & 255,
      (e >>> 16) & 255,
      e >>> 24,
    ];
  }),
  ($.toBytesBE = function () {
    var e = this.high,
      t = this.low;
    return [
      e >>> 24,
      (e >>> 16) & 255,
      (e >>> 8) & 255,
      e & 255,
      t >>> 24,
      (t >>> 16) & 255,
      (t >>> 8) & 255,
      t & 255,
    ];
  }),
  (H.fromBytes = function (e, t, n) {
    return n ? H.fromBytesLE(e, t) : H.fromBytesBE(e, t);
  }),
  (H.fromBytesLE = function (e, t) {
    return new H(
      e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
      e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
      t,
    );
  }),
  (H.fromBytesBE = function (e, t) {
    return new H(
      (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
      (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
      t,
    );
  }),
  typeof BigInt == `function` &&
    ((H.fromBigInt = function (e, t) {
      return K(
        Number(BigInt.asIntN(32, e)),
        Number(BigInt.asIntN(32, e >> BigInt(32))),
        t,
      );
    }),
    (H.fromValue = function (e, t) {
      return typeof e == `bigint` ? H.fromBigInt(e, t) : q(e, t);
    }),
    ($.toBigInt = function () {
      var e = BigInt(this.low >>> 0);
      return (
        (BigInt(this.unsigned ? this.high >>> 0 : this.high) << BigInt(32)) | e
      );
    })));
var Rr = class e {
  m_ulSteamID = H.UZERO;
  constructor(t = 0, n, r, i) {
    t instanceof e
      ? (this.m_ulSteamID = t.m_ulSteamID)
      : typeof t == `string`
        ? (this.m_ulSteamID = H.fromString(t, !0))
        : n && r && i !== void 0
          ? this.SetFromComponents(t ?? 0, i, r, n)
          : (this.m_ulSteamID = t ? H.fromNumber(t, !0) : H.UZERO);
  }
  static InitFromAccountID(t, n) {
    return t ? new e(Number(t), n, 1, 1) : new e();
  }
  static InitFromClanID(t, n) {
    return new e(Number(t), n, 7, 0);
  }
  static ToAccountID(t) {
    return e.ExtractAccountID(H.fromString(t, !0));
  }
  static ExtractAccountID(e) {
    return e.getLowBitsUnsigned();
  }
  GetAccountID() {
    return e.ExtractAccountID(this.m_ulSteamID);
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
  static InitFromString(t) {
    let n = new e();
    try {
      let [e, r, i, a, o] =
          t.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        s = Number(i),
        c = Number(a),
        l = o ? Number(o) : 1;
      switch (r) {
        case `I`:
          n.SetFromComponents(c, l, 0, s);
          break;
        case `g`:
          n.SetFromComponents(c, 0, 7, s);
          break;
        case `A`:
          n.SetFromComponents(c, l, 4, s);
          break;
        case `G`:
          n.SetFromComponents(c, l, 3, s);
          break;
        case `M`:
          n.SetFromComponents(c, l, 2, s);
          break;
        case `P`:
          n.SetFromComponents(c, l, 5, s);
          break;
        case `C`:
          n.SetFromComponents(c, l, 6, s);
          break;
        case `U`:
          n.SetFromComponents(c, l, 1, s);
      }
    } catch {}
    return n;
  }
  BIsValid() {
    let e = this.GetAccountType();
    if (e <= 0 || e >= 11) return !1;
    let t = this.GetUniverse();
    if (t <= 0 || t >= 5) return !1;
    if (e == 1) {
      if (this.GetAccountID() == 0 || this.GetInstance() > 4) return !1;
    } else if (e == 7) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (e == 3 && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == 1;
  }
  BIsClanAccount() {
    return this.GetAccountType() == 7;
  }
  SetAccountID(e) {
    this.m_ulSteamID = new H(e, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      e,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      e,
      this.GetUniverse(),
    );
  }
  SetUniverse(e) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      e,
    );
  }
  SetFromComponents(e, t, n, r) {
    let i = ((r & 255) << 24) + ((n & 15) << 20) + (t & 1048575),
      a = e | 0;
    this.m_ulSteamID = new H(a, i, !0);
  }
};
export {
  nt as $,
  En as A,
  oe as At,
  mn as B,
  f as Bt,
  Jn as C,
  ze as Ct,
  Ln as D,
  k as Dt,
  Un as E,
  fe as Et,
  ln as F,
  T as Ft,
  Yt as G,
  ee as Gt,
  un as H,
  u as Ht,
  cn as I,
  te as It,
  Jt as J,
  y as Jt,
  R as K,
  m as Kt,
  yn as L,
  S as Lt,
  Sn as M,
  ce as Mt,
  xn as N,
  ue as Nt,
  Pn as O,
  se as Ot,
  dn as P,
  D as Pt,
  tt as Q,
  vn as R,
  x as Rt,
  qn as S,
  He as St,
  Rn as T,
  Ie as Tt,
  _n as U,
  d as Ut,
  hn as V,
  p as Vt,
  Zt as W,
  g as Wt,
  bt as X,
  v as Xt,
  yt as Y,
  _ as Yt,
  ut as Z,
  Yn as _,
  qe as _t,
  hr as a,
  lt as at,
  Gn as b,
  Ke as bt,
  rr as c,
  ht as ct,
  ir as d,
  _t as dt,
  pt as et,
  cr as f,
  xt as ft,
  $n as g,
  Ze as gt,
  dr as h,
  Qe as ht,
  gr as i,
  ct as it,
  wn as j,
  le as jt,
  An as k,
  O as kt,
  sr as l,
  st as lt,
  ur as m,
  dt as mt,
  H as n,
  it as nt,
  mr as o,
  mt as ot,
  lr as p,
  et as pt,
  qt as q,
  h as qt,
  _r as r,
  at as rt,
  pr as s,
  gt as st,
  Rr as t,
  ft as tt,
  ar as u,
  ot as ut,
  Xn as v,
  Je as vt,
  zn as w,
  Le as wt,
  Wn as x,
  Ve as xt,
  Qn as y,
  Ye as yt,
  bn as z,
  b as zt,
};
