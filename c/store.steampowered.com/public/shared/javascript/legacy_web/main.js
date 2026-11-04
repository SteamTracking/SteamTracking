const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./webgamepadnavigation.js?contenthash=C096YUfn",
      "./clientpostmessage.js?contenthash=KNDFkyqw",
      "../../css/legacy_web/webgamepadnavigation.css?contenthash=DdLU0sAX",
      "./desktopbridge.js?contenthash=Cdpq8p9l",
    ]),
) => _.map((_) => _[_]);
`VALVE_PUBLIC_PATH` in window
  ? (globalThis.__webpack_public_path__ = window.VALVE_PUBLIC_PATH)
  : console.error(
      `VALVE_PUBLIC_PATH not defined; check for a call to CHTMLHelpers::WebpackConfigScriptlet`,
    ),
  Array.from(new Set([123]))[0] !== 123 &&
    console.error(`Should not include prototypejs.`);
var _ = jQuery;
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 && (_.splice(_, 1), !0);
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
            _.forEach((_) => _.Unregister()), _();
          };
        for (let _ of _) _.push(_.Register(_));
      });
    }
  },
  _ = class {
    m_ActiveInputId;
    m_ActiveInputTimeout;
    m_config;
    constructor(_) {
      this.m_config = _;
    }
    Reset() {
      (this.m_ActiveInputId = void 0),
        this.m_ActiveInputTimeout != null &&
          (clearInterval(this.m_ActiveInputTimeout),
          (this.m_ActiveInputTimeout = void 0));
    }
    HandleInputButtonDown(_, _) {
      if (this.m_ActiveInputId !== _ && _ != null) {
        this.Reset(), (this.m_ActiveInputId = _);
        let _ = () => {
          this.m_ActiveInputTimeout = window.setInterval(() => {
            _();
          }, this.m_config.repeatInterval_ms);
        };
        this.m_config.firstRepeatInterval_ms == null ||
        this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
          ? _()
          : (this.m_ActiveInputTimeout = window.setTimeout(() => {
              _(), _();
            }, this.m_config.firstRepeatInterval_ms));
      }
    }
  },
  _ = class {
    m_config;
    m_inputRepeatGenerator;
    m_repeatOnAxis = 0;
    m_fnRepeatAllowed = () => !0;
    constructor(_) {
      (this.m_config = _), (this.m_inputRepeatGenerator = new _(_));
    }
    Reset() {
      this.m_inputRepeatGenerator.Reset();
    }
    SetRepeatAllowed(_) {
      (_ ||= () => !0), (this.m_fnRepeatAllowed = _);
    }
    HandleInputButtonDown(_, _, _) {
      this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(_)
        ? this.m_repeatOnAxis == 0 &&
          ((_ == _.DIR_UP || _ == _.DIR_DOWN) && (this.m_repeatOnAxis = 2),
          (_ == _.DIR_LEFT || _ == _.DIR_RIGHT) && (this.m_repeatOnAxis = 1),
          _(),
          this.m_inputRepeatGenerator.HandleInputButtonDown(_, _))
        : (_(), this.m_inputRepeatGenerator.Reset());
    }
    HandleInputButtonUp(_) {
      if (this.m_config.inputsThatRepeat.has(_) && this.m_repeatOnAxis != 0) {
        let _ = _ == _.DIR_UP || _ == _.DIR_DOWN,
          _ = _ == _.DIR_LEFT || _ == _.DIR_RIGHT;
        ((this.m_repeatOnAxis == 2 && _) || (this.m_repeatOnAxis == 1 && _)) &&
          ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
      } else this.m_inputRepeatGenerator.Reset();
    }
  },
  _ = (function (_) {
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
  })({}),
  _ = (function (_) {
    return (
      (_[(_.UNKNOWN = 0)] = `UNKNOWN`),
      (_[(_.GAMEPAD = 1)] = `GAMEPAD`),
      (_[(_.KEYBOARD_SIMULATOR = 2)] = `KEYBOARD_SIMULATOR`),
      (_[(_.MOUSE = 3)] = `MOUSE`),
      (_[(_.TOUCH = 4)] = `TOUCH`),
      (_[(_.LPAD = 5)] = `LPAD`),
      (_[(_.RPAD = 6)] = `RPAD`),
      _
    );
  })({});
function _(_) {
  return _ === 1 || _ === 2;
}
var _ = class {
  m_OnGamepadDetectedCallbacks = new _();
  m_ButtonDownCallbacks = new _();
  m_ButtonUpCallbacks = new _();
  m_AnalogCallbacks = new _();
  m_NavigationTypeChangeCallbacks = new _();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new _({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  Init(_) {
    return {
      Unregister: () => {},
    };
  }
  RegisterForGamepadDetected(_) {
    return this.m_OnGamepadDetectedCallbacks.Register(_);
  }
  RegisterForGamepadButtonDown(_) {
    return this.m_ButtonDownCallbacks.Register(_);
  }
  RegisterForGamepadButtonUp(_) {
    return this.m_ButtonUpCallbacks.Register(_);
  }
  RegisterForAnalog(_) {
    return this.m_AnalogCallbacks.Register(_);
  }
  RegisterForNavigationTypeChange(_) {
    return this.m_NavigationTypeChangeCallbacks.Register(_);
  }
  SetSourceType(_) {
    this.m_eNavigationSourceType = _;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(_) {
    (this.m_nLastActiveControllerIndex = _),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(_) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(_);
  }
  OnGamepadDetected() {
    console.log(`Gamepad detected`),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        _,
        () => this.DispatchButtonDown(_, !1, _, _),
        () => this.DispatchButtonDown(_, !0, _, _),
      );
  }
  OnButtonUp(_, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(_),
      this.m_ButtonUpCallbacks.Dispatch(
        _,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(_, _, _, _) {
    this.m_ButtonDownCallbacks.Dispatch(
      _,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      _,
      _,
      _,
    );
  }
  OnAnalogPad(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_AnalogCallbacks.Dispatch(
        _,
        this.m_nLastActiveControllerIndex,
        _,
        _,
      );
  }
  OnNavigationTypeChanged(_) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(_);
  }
};
function _(_, _, _, _) {
  var _ = arguments.length,
    _ =
      _ < 3 ? _ : _ === null ? (_ = Object.getOwnPropertyDescriptor(_, _)) : _,
    _;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return _ > 3 && _ && Object.defineProperty(_, _, _), _;
}
var _ = [
    {
      index: 0,
      type: _._,
      category: `action`,
    },
    {
      index: 1,
      type: _.CANCEL,
      category: `action`,
    },
    {
      index: 2,
      type: _.SECONDARY,
      category: `action`,
    },
    {
      index: 3,
      type: _.OPTIONS,
      category: `action`,
    },
    {
      index: 4,
      type: _.BUMPER_LEFT,
      category: `action`,
    },
    {
      index: 5,
      type: _.BUMPER_RIGHT,
      category: `action`,
    },
    {
      index: 6,
      type: _.TRIGGER_LEFT,
      category: `action`,
    },
    {
      index: 7,
      type: _.TRIGGER_RIGHT,
      category: `action`,
    },
    {
      index: 8,
      type: _.SELECT,
      category: `action`,
    },
    {
      index: 9,
      type: _.START,
      category: `action`,
    },
    {
      index: 10,
      type: _.LSTICK_CLICK,
      category: `action`,
    },
    {
      index: 11,
      type: _.RSTICK_CLICK,
      category: `action`,
    },
    {
      index: 12,
      type: _.DIR_UP,
      category: `navigation`,
    },
    {
      index: 13,
      type: _.DIR_DOWN,
      category: `navigation`,
    },
    {
      index: 14,
      type: _.DIR_LEFT,
      category: `navigation`,
    },
    {
      index: 15,
      type: _.DIR_RIGHT,
      category: `navigation`,
    },
    {
      index: 16,
      type: _.STEAM_GUIDE,
      category: `action`,
    },
    {
      index: 17,
      type: _.SELECT,
      category: `action`,
    },
  ],
  _ = class extends _ {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(_.GAMEPAD),
        window.addEventListener(`gamepadconnected`, (_) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let _ = navigator.getGamepads();
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (!_) continue;
        this.m_rgGamepadStatus[_] ||
          (this.m_rgGamepadStatus[_] = {
            buttons: [],
          });
        let _ = this.m_rgGamepadStatus[_];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.index;
          _.buttons[_] &&
            (_.buttons[_].pressed
              ? _.buttons[_] || ((_.buttons[_] = !0), this.OnButtonDown(_.type))
              : _.buttons[_] && (this.OnButtonUp(_.type), (_.buttons[_] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  };
_([_], _.prototype, `PollGamepads`, null);
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
var _ = (function () {
    let _ = typeof document < `u` && document.createElement(`link`).relList;
    return _ && _.supports && _.supports(`modulepreload`)
      ? `modulepreload`
      : `preload`;
  })(),
  _ = function (_, _) {
    return new URL(_, _).href;
  },
  _ = {},
  _ = function (_) {
    return _.pathname.endsWith(`.css`);
  },
  _ = function (_, _, _) {
    if (_ in _) return _[_];
    let _ = _();
    if (!_) {
      _[_] = void 0;
      return;
    }
    let _ = _.then(
      () => {
        _[_] = void 0;
      },
      (_) => {
        throw ((_[_] = void 0), _);
      },
    );
    return (_[_] = _), _;
  },
  _ = function (_, _, _) {
    let _ = Promise.resolve();
    if (_ && _.length > 0) {
      let _,
        _ = document.querySelector(`meta[property=csp-nonce]`),
        _ = _?.nonce || _?.getAttribute(`nonce`);
      function _(_) {
        return Promise.all(
          _.map((_) =>
            Promise.resolve(_).then(
              (_) => ({
                status: `fulfilled`,
                value: _,
              }),
              (_) => ({
                status: `rejected`,
                reason: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        return import.meta.resolve
          ? new URL(import.meta.resolve(_))
          : new URL(_, import.meta.url);
      }
      _ = _(
        _.map((_) => {
          _ = _(_, _);
          let _ = _(_),
            _ = _(_);
          return _(_, _.href, () => {
            if (_ === void 0) {
              _ = {
                all: new Set(),
                styles: new Set(),
              };
              let _ = document.getElementsByTagName(`link`);
              for (let _ = _.length - 1; _ >= 0; _--) {
                let _ = _[_];
                _.all.add(_.href),
                  _.rel === `stylesheet` && _.styles.add(_.href);
              }
            }
            if ((_ ? _.styles : _.all).has(_.href)) return;
            let _ = document.createElement(`link`);
            if (
              ((_.rel = _ ? `stylesheet` : _),
              _ || (_._ = `script`),
              (_.crossOrigin = ``),
              (_.href = _.href),
              _ && _.setAttribute(`nonce`, _),
              document.head.appendChild(_),
              _)
            )
              return new Promise((_, _) => {
                _.addEventListener(`load`, _),
                  _.addEventListener(`error`, () =>
                    _(Error(`Unable to preload CSS for ${_}`)),
                  );
              });
          });
        }).filter((_) => _ !== void 0),
      );
    }
    function _(_) {
      let _ = new Event(`vite:preloadError`, {
        cancelable: !0,
      });
      if (((_.payload = _), window.dispatchEvent(_), !_.defaultPrevented))
        throw _;
    }
    return _.then((_) => {
      for (let _ of _ || []) _.status === `rejected` && _(_.reason);
      return _().catch(_);
    });
  };
_(function () {
  _();
});
function _() {
  return !(
    !_(`BrowserView.RegisterForMessageFromParent`) ||
    !_(`BrowserView.PostMessageToParent`)
  );
}
function _() {
  let _ = new _();
  navigator.userAgent.includes(`Valve Steam Gamepad`)
    ? _(_)
    : _()
      ? _()
      : _.RegisterForGamepadDetected(() => _(_));
}
async function _(_) {
  let { InitializeGamepadNavigation: _ } = await _(
    async () => {
      let { InitializeGamepadNavigation: _ } = await import(
        `./webgamepadnavigation.js?contenthash=C096YUfn`
      );
      return {
        InitializeGamepadNavigation: _,
      };
    },
    __vite__mapDeps([0, 1, 2]),
    import.meta.url,
  );
  _(_);
}
async function _() {
  let { InitializeForDesktop: _ } = await _(
    async () => {
      let { InitializeForDesktop: _ } = await import(
        `./desktopbridge.js?contenthash=Cdpq8p9l`
      );
      return {
        InitializeForDesktop: _,
      };
    },
    __vite__mapDeps([3, 1]),
    import.meta.url,
  );
  _();
}
export { _, _, _, _, _, _, _, _, _, _ };
