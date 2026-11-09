/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./webgamepadnavigation.js",
      "./clientpostmessage.js",
      "../../css/legacy_web/webgamepadnavigation.css",
      "./desktopbridge.js",
    ]),
) => i.map((i) => d[i]);

`VALVE_PUBLIC_PATH` in window
  ? (globalThis.__webpack_public_path__ = window.VALVE_PUBLIC_PATH)
  : console.error(
      `VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet`,
    ),
  Array.from(new Set([123]))[0] !== 123 &&
    console.error(`Should not include prototypejs.`);
var e = jQuery;
function t(e, t) {
  return n(e, (e) => t == e);
}
function n(e, t) {
  let n = e.findIndex(t);
  return n >= 0 && (e.splice(n, 1), !0);
}
function r(e, t, n) {
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
var i = class {
    m_vecCallbacks = [];
    Register(e) {
      return (
        this.m_vecCallbacks.push(e),
        {
          Unregister: () => {
            t(this.m_vecCallbacks, e);
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
            n.forEach((e) => e.Unregister()), t();
          };
        for (let t of e) n.push(t.Register(r));
      });
    }
  },
  a = class {
    m_ActiveInputId;
    m_ActiveInputTimeout;
    m_config;
    constructor(e) {
      this.m_config = e;
    }
    Reset() {
      (this.m_ActiveInputId = void 0),
        this.m_ActiveInputTimeout != null &&
          (clearInterval(this.m_ActiveInputTimeout),
          (this.m_ActiveInputTimeout = void 0));
    }
    HandleInputButtonDown(e, t) {
      if (this.m_ActiveInputId !== e && t != null) {
        this.Reset(), (this.m_ActiveInputId = e);
        let n = () => {
          this.m_ActiveInputTimeout = window.setInterval(() => {
            t();
          }, this.m_config.repeatInterval_ms);
        };
        this.m_config.firstRepeatInterval_ms == null ||
        this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
          ? n()
          : (this.m_ActiveInputTimeout = window.setTimeout(() => {
              t(), n();
            }, this.m_config.firstRepeatInterval_ms));
      }
    }
  },
  o = class {
    m_config;
    m_inputRepeatGenerator;
    m_repeatOnAxis = 0;
    m_fnRepeatAllowed = () => !0;
    constructor(e) {
      (this.m_config = e), (this.m_inputRepeatGenerator = new a(e));
    }
    Reset() {
      this.m_inputRepeatGenerator.Reset();
    }
    SetRepeatAllowed(e) {
      (e ||= () => !0), (this.m_fnRepeatAllowed = e);
    }
    HandleInputButtonDown(e, t, n) {
      this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
        ? this.m_repeatOnAxis == 0 &&
          ((e == s.DIR_UP || e == s.DIR_DOWN) && (this.m_repeatOnAxis = 2),
          (e == s.DIR_LEFT || e == s.DIR_RIGHT) && (this.m_repeatOnAxis = 1),
          t(),
          this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
        : (t(), this.m_inputRepeatGenerator.Reset());
    }
    HandleInputButtonUp(e) {
      if (this.m_config.inputsThatRepeat.has(e) && this.m_repeatOnAxis != 0) {
        let t = e == s.DIR_UP || e == s.DIR_DOWN,
          n = e == s.DIR_LEFT || e == s.DIR_RIGHT;
        ((this.m_repeatOnAxis == 2 && t) || (this.m_repeatOnAxis == 1 && n)) &&
          ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
      } else this.m_inputRepeatGenerator.Reset();
    }
  },
  s = (function (e) {
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
  })({}),
  c = (function (e) {
    return (
      (e[(e.UNKNOWN = 0)] = `UNKNOWN`),
      (e[(e.GAMEPAD = 1)] = `GAMEPAD`),
      (e[(e.KEYBOARD_SIMULATOR = 2)] = `KEYBOARD_SIMULATOR`),
      (e[(e.MOUSE = 3)] = `MOUSE`),
      (e[(e.TOUCH = 4)] = `TOUCH`),
      (e[(e.LPAD = 5)] = `LPAD`),
      (e[(e.RPAD = 6)] = `RPAD`),
      e
    );
  })({});
function l(e) {
  return e === 1 || e === 2;
}
var u = class {
  m_OnGamepadDetectedCallbacks = new i();
  m_ButtonDownCallbacks = new i();
  m_ButtonUpCallbacks = new i();
  m_AnalogCallbacks = new i();
  m_NavigationTypeChangeCallbacks = new i();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new o({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  Init(e) {
    return { Unregister: () => {} };
  }
  RegisterForGamepadDetected(e) {
    return this.m_OnGamepadDetectedCallbacks.Register(e);
  }
  RegisterForGamepadButtonDown(e) {
    return this.m_ButtonDownCallbacks.Register(e);
  }
  RegisterForGamepadButtonUp(e) {
    return this.m_ButtonUpCallbacks.Register(e);
  }
  RegisterForAnalog(e) {
    return this.m_AnalogCallbacks.Register(e);
  }
  RegisterForNavigationTypeChange(e) {
    return this.m_NavigationTypeChangeCallbacks.Register(e);
  }
  SetSourceType(e) {
    this.m_eNavigationSourceType = e;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(e) {
    (this.m_nLastActiveControllerIndex = e),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(e) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
  }
  OnGamepadDetected() {
    console.log(`Gamepad detected`),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(e, t, n, r) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        e,
        () => this.DispatchButtonDown(e, !1, n, r),
        () => this.DispatchButtonDown(e, !0, n, r),
      );
  }
  OnButtonUp(e, t) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
      this.m_ButtonUpCallbacks.Dispatch(
        e,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(e, t, n, r) {
    this.m_ButtonDownCallbacks.Dispatch(
      e,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      t,
      n,
      r,
    );
  }
  OnAnalogPad(e, t, n, r) {
    r === void 0 && (r = -1),
      this.SetControllerActive(r),
      this.m_AnalogCallbacks.Dispatch(
        e,
        this.m_nLastActiveControllerIndex,
        t,
        n,
      );
  }
  OnNavigationTypeChanged(e) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(e);
  }
};
function d(e, t, n, r) {
  var i = arguments.length,
    a =
      i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    a = Reflect.decorate(e, t, n, r);
  else
    for (var s = e.length - 1; s >= 0; s--)
      (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
  return i > 3 && a && Object.defineProperty(t, n, a), a;
}
var f = [
    { index: 0, type: s.OK, category: `action` },
    { index: 1, type: s.CANCEL, category: `action` },
    { index: 2, type: s.SECONDARY, category: `action` },
    { index: 3, type: s.OPTIONS, category: `action` },
    { index: 4, type: s.BUMPER_LEFT, category: `action` },
    { index: 5, type: s.BUMPER_RIGHT, category: `action` },
    { index: 6, type: s.TRIGGER_LEFT, category: `action` },
    { index: 7, type: s.TRIGGER_RIGHT, category: `action` },
    { index: 8, type: s.SELECT, category: `action` },
    { index: 9, type: s.START, category: `action` },
    { index: 10, type: s.LSTICK_CLICK, category: `action` },
    { index: 11, type: s.RSTICK_CLICK, category: `action` },
    { index: 12, type: s.DIR_UP, category: `navigation` },
    { index: 13, type: s.DIR_DOWN, category: `navigation` },
    { index: 14, type: s.DIR_LEFT, category: `navigation` },
    { index: 15, type: s.DIR_RIGHT, category: `navigation` },
    { index: 16, type: s.STEAM_GUIDE, category: `action` },
    { index: 17, type: s.SELECT, category: `action` },
  ],
  p = class extends u {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(c.GAMEPAD),
        window.addEventListener(`gamepadconnected`, (e) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let e = navigator.getGamepads();
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (!n) continue;
        this.m_rgGamepadStatus[t] ||
          (this.m_rgGamepadStatus[t] = { buttons: [] });
        let r = this.m_rgGamepadStatus[t];
        for (let e = 0; e < f.length; e++) {
          let t = f[e],
            i = t.index;
          n.buttons[i] &&
            (n.buttons[i].pressed
              ? r.buttons[i] || ((r.buttons[i] = !0), this.OnButtonDown(t.type))
              : r.buttons[i] && (this.OnButtonUp(t.type), (r.buttons[i] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  };
d([r], p.prototype, `PollGamepads`, null);
function m(e, t) {
  let n = t.lastIndexOf(`.`);
  if (n == -1) return !1;
  let r = t.substring(0, n),
    i = t.substring(n + 1),
    a = g(e, r);
  return a !== null && typeof a[i] == `function`;
}
function h(e) {
  return m(window, e);
}
function g(e, t) {
  let n = (e) => e && typeof e == `object`,
    r = e?.SteamClient;
  for (let e of t.split(`.`)) {
    if (!n(r) || !(e in r)) return null;
    r = r[e];
  }
  return n(r) ? r : null;
}
var _ = (function () {
    let e = typeof document < `u` && document.createElement(`link`).relList;
    return e && e.supports && e.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  v = function (e, t) {
    return new URL(e, t).href;
  },
  y = {},
  b = function (e) {
    return e.pathname.endsWith(`.css`);
  },
  x = function (e, t, n) {
    if (t in e) return e[t];
    let r = n();
    if (!r) {
      e[t] = void 0;
      return;
    }
    let i = r.then(
      () => {
        e[t] = void 0;
      },
      (n) => {
        throw ((e[t] = void 0), n);
      },
    );
    return (e[t] = i), i;
  },
  S = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e,
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(e))
          : new URL(e, import.meta.url);
      }
      r = o(
        t
          .map((t) => {
            t = v(t, n);
            let r = s(t),
              i = b(r);
            return x(y, r.href, () => {
              if (e === void 0) {
                e = { all: new Set(), styles: new Set() };
                let t = document.getElementsByTagName(`link`);
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  e.all.add(r.href),
                    r.rel === `stylesheet` && e.styles.add(r.href);
                }
              }
              if ((i ? e.styles : e.all).has(r.href)) return;
              let t = document.createElement(`link`);
              if (
                ((t.rel = i ? `stylesheet` : _),
                i || (t.as = `script`),
                (t.crossOrigin = ``),
                (t.href = r.href),
                a && t.setAttribute(`nonce`, a),
                document.head.appendChild(t),
                i)
              )
                return new Promise((e, n) => {
                  t.addEventListener(`load`, e),
                    t.addEventListener(`error`, () =>
                      n(Error(`Unable to preload CSS for ${r}`)),
                    );
                });
            });
          })
          .filter((e) => e !== void 0),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  };
e(function () {
  w();
});
function C() {
  return !(
    !h(`BrowserView.RegisterForMessageFromParent`) ||
    !h(`BrowserView.PostMessageToParent`)
  );
}
function w() {
  let e = new p();
  navigator.userAgent.includes(`Valve Steam Gamepad`)
    ? T(e)
    : C()
      ? E()
      : e.RegisterForGamepadDetected(() => T(e));
}
async function T(e) {
  let { InitializeGamepadNavigation: t } = await S(
    async () => {
      let { InitializeGamepadNavigation: e } = await import(
        `./webgamepadnavigation.js`
      );
      return { InitializeGamepadNavigation: e };
    },
    __vite__mapDeps([0, 1, 2]),
    import.meta.url,
  );
  t(e);
}
async function E() {
  let { InitializeForDesktop: e } = await S(
    async () => {
      let { InitializeForDesktop: e } = await import(`./desktopbridge.js`);
      return { InitializeForDesktop: e };
    },
    __vite__mapDeps([3, 1]),
    import.meta.url,
  );
  e();
}
export {
  c as a,
  r as c,
  s as i,
  t as l,
  d as n,
  u as o,
  l as r,
  i as s,
  h as t,
  e as u,
};
