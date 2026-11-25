/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./chunk~f025431ab0.js?contenthash=C8f2gWku";
import {
  $a as n,
  Fn as r,
  Jr as i,
  M as a,
  Sa as o,
  T as s,
  at as c,
  dn as l,
  eo as u,
  fi as d,
  m as f,
  nt as p,
  ot as m,
  pi as h,
  pn as g,
  q as _,
  qr as v,
  rt as y,
} from "./chunk~3126832f23.js?contenthash=B40GC_DU";
import { t as b } from "./chunk~7f38fefeac.js?contenthash=B2NENpWg";
import { t as x } from "./chunk~9302435e81.js?contenthash=DpC9ZrAj";
import { rt as S } from "./library.js?contenthash=t9xy63v9";
import { t as C } from "./chunk~103fa94b69.js?contenthash=jEOtRBMw";
function w() {
  return !1;
}
function T(e) {}
var E = e(u(), 1);
function D(e, t, n, r) {
  E.useEffect(() => {
    let i = e && `current` in e ? e.current : e;
    if (i && n)
      return (i.addEventListener(t, n, r), () => i.removeEventListener(t, n));
  }, [e, t, n]);
}
function O(e, t, n) {
  return c(
    (r) => {
      if (r && t)
        return (r.addEventListener(e, t, n), () => r.removeEventListener(e, t));
    },
    [e, t],
  );
}
function k(e, t, n, r) {
  E.useEffect(() => {
    if (e && n)
      return (
        e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
      );
  }, [e, t, n]);
}
function ee(e, t, n, r) {
  return k(
    e,
    `message`,
    E.useCallback(
      function (r) {
        r.data === t && n(e, r);
      },
      [e, t, n],
    ),
    r,
  );
}
function A(e, t) {
  E.useEffect(() => {
    if (!e || !t) return;
    let n = () => t(e.visibilityState, e);
    return (
      n(),
      e.addEventListener(`visibilitychange`, n),
      () => e.removeEventListener(`visibilitychange`, n)
    );
  }, [e, t]);
}
function te(e) {
  let t = E.useRef(e);
  t.current = e;
  let n = E.useRef(!1),
    r = E.useCallback((e) => {
      (n.current || t.current?.(e), (n.current = !1));
    }, []),
    i = E.useCallback((e) => {
      (t.current?.(e), (n.current = !0));
    }, []),
    a = [O(`mousedown`, r), O(`touchstart`, i)];
  return y(...a);
}
function j() {
  let [e, t] = E.useState(!1);
  return [
    e,
    {
      onPointerEnter: E.useCallback((e) => {
        (e && `pointerType` in e && e.pointerType !== `mouse`) || t(!0);
      }, []),
      onPointerLeave: E.useCallback(
        () =>
          window.sessionStorage &&
          window.sessionStorage.getItem(`DEBUG_StickyHovers`) != `true` &&
          t(!1),
        [],
      ),
    },
  ];
}
function M(e, t) {
  return c(
    (n) => {
      if (!n || !e) return;
      let r = new MutationObserver(e);
      return (r.observe(n, t), () => r.disconnect());
    },
    [e],
  );
}
function ne(e = `vertical`) {
  let t = e == `vertical`,
    [n, r] = E.useState(),
    [i, a] = E.useState(!0),
    [o, s] = E.useState(!0),
    c = E.useCallback(() => {
      let e = (t ? n?.scrollTop : n?.scrollLeft) ?? 0,
        r = (t ? n?.scrollHeight : n?.scrollWidth) ?? 0,
        i = (t ? n?.clientHeight : n?.clientWidth) ?? 0,
        o = Math.round(e) == 0,
        c = Math.round(r - e) == Math.round(i);
      (a(o), s(c));
    }, [t, n]),
    l = E.useCallback((e) => r(e), []),
    u = E.useCallback(
      (e) => {
        c();
      },
      [c],
    );
  E.useLayoutEffect(c, [c]);
  let d = M(
      E.useCallback(() => c(), [c]),
      { subtree: !0, childList: !0 },
    ),
    f = O(`scroll`, u);
  return { bScrolledToBeginning: i, bScrolledToEnd: o, ref: y(f, l, d) };
}
function re(e) {
  let t = E.useRef(null);
  return (
    E.useEffect(() => {
      e && t.current && t.current.focus({ preventScroll: !0 });
    }, [e, t]),
    t
  );
}
var N = x(),
  ie = `j-9OlMX1FS8-`,
  ae = `_4XPgNWVf7Kk-`;
function oe(e) {
  let {
      target: t,
      visibilityObserver: n,
      className: r,
      style: i,
      bEnablePointerEvents: a,
      direction: o = `right`,
      nBodyAlignment: s = 0.5,
      nBodyDistance: c = 8,
      nAllowOffscreenPx: l = 10,
      nMaxLateralMoveOnScreen: u = void 0,
      onNoSpace: d,
      bTopmost: f,
      children: p,
      ...m
    } = e,
    [h, g] = E.useState(void 0),
    [_, v] = E.useState(void 0),
    [y, x] = E.useState(!1),
    [C, w] = E.useState(!1),
    [T, D] = E.useState(null),
    [O, k] = E.useState(null),
    ee = S(() => n?.visible),
    A = E.useCallback(() => {
      let e = t;
      if (!T || !e || !O || (y && n && !ee)) return;
      let r = e.ownerDocument.defaultView;
      if (!r || r.closed) return;
      ((O.style.display = `flex`),
        requestAnimationFrame(() => {
          O.style.display = `block`;
        }),
        O.showPopover && O.showPopover());
      let i = T.querySelector(`.hover_arrow.left`),
        a = T.querySelector(`.hover_arrow.right`),
        f = T.querySelector(`.hover_arrow.top`),
        p = T.querySelector(`.hover_arrow.bottom`),
        m = e.getBoundingClientRect(),
        b = T.getBoundingClientRect(),
        S = o == `overlay` || o == `overlay-center`,
        C = O.getBoundingClientRect();
      (i && i.setAttribute(`style`, `display: none;`),
        a && a.setAttribute(`style`, `display: none;`),
        f && f.setAttribute(`style`, `display: none;`),
        p && p.setAttribute(`style`, `display: none;`));
      let E = o;
      e.matches(`:dir(rtl)`) &&
        (E === `left` ? (E = `right`) : E === `right` && (E = `left`));
      let {
          nLeft: D,
          nTop: k,
          nOverflow: A,
          nLateralOverflow: te,
        } = ce(E, s, c, m, b, C, r),
        j = o;
      if (A > (l ?? 10) && !S) {
        let e = se(j),
          {
            nLeft: t,
            nTop: n,
            nOverflow: i,
            nLateralOverflow: a,
          } = ce(e, s, c, m, b, C, r);
        if (
          (i < A && ((j = e), (D = t), (k = n), (A = i), (te = a)),
          A > (l ?? 10))
        ) {
          (console.log(
            `Not showing hover because it didn't fit in the main or alt direction`,
          ),
            T.setAttribute(`style`, `display: none;`),
            w(!0),
            d?.());
          return;
        }
      }
      u !== 0 && !S && ([k, D] = le(u, te, E, k, D));
      let M = null;
      switch (j) {
        case `left`:
          M = a;
          break;
        case `right`:
          M = i;
          break;
        case `top`:
          M = p;
          break;
        case `bottom`:
          M = f;
      }
      (M && M.setAttribute(`style`, ``),
        D != h && g(D),
        k != _ && v(k),
        y || x(!0));
    }, [t, O, T, y, n, ee, o, s, c, l, u, h, _, d]);
  E.useEffect(() => A(), [A]);
  let te = Object.assign({ left: h, top: _ }, i),
    j = !n || ee;
  return (0, N.jsx)(`div`, {
    popover: `manual`,
    ref: k,
    className: b(ae, f && `g1g9mPP3puo-`),
    children: (0, N.jsx)(`div`, {
      ...m,
      className: b(
        ie,
        j && y && `LOM2GWvX6DQ-`,
        C && `HfimKmGrhsA-`,
        a && `zq7eS0pbX3I-`,
        r,
      ),
      style: te,
      ref: D,
      children: p,
    }),
  });
}
function se(e) {
  switch (e) {
    case `right`:
      return `left`;
    case `left`:
      return `right`;
    case `bottom`:
      return `top`;
    case `top`:
      return `bottom`;
    case `overlay`:
      return `overlay`;
    case `overlay-center`:
      return `overlay-center`;
  }
}
function ce(e, t, n, r, i, a, o) {
  let s = o.innerWidth,
    c = o.innerHeight,
    l,
    u,
    d,
    f;
  switch (e) {
    case `right`:
      ((l = r.right + n - a.left),
        (u = P(r.top - a.top, r.height, i.height, t)),
        (d = Math.max(0, l + i.width - s)),
        (f = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)]));
      break;
    case `left`:
      ((l = r.left - n - i.width - a.left),
        (u = P(r.top - a.top, r.height, i.height, t)),
        (d = Math.max(0, 0 - l)),
        (f = [Math.max(0, 0 - u), Math.max(0, u + i.height - c)]));
      break;
    case `bottom`:
      ((l = P(r.left - a.left, r.width, i.width, t)),
        (u = r.bottom + n - a.top),
        (d = Math.max(0, u + i.height - c)),
        (f = [Math.max(0, 0 - l), Math.max(0, l + i.width - s)]));
      break;
    case `top`:
      ((l = P(r.left - a.left, r.width, i.width, t)),
        (u = r.top - n - i.height - a.top),
        (d = Math.max(0, 0 - u)),
        (f = [Math.max(0, 0 - l), Math.max(0, l + i.width - s)]));
      break;
    case `overlay`:
      ((l = r.left - a.left), (u = r.top - a.top), (d = 0), (f = [0, 0]));
      break;
    case `overlay-center`:
      ((l = r.left - a.left + 0.5 * r.width - 0.5 * i.width),
        (u = r.top - a.top + 0.5 * r.height - 0.5 * i.height),
        (d = 0),
        (f = [0, 0]));
  }
  return { nLeft: l, nTop: u, nOverflow: d, nLateralOverflow: f };
}
function P(e, t, n, r) {
  return Math.max(0, Math.min(1, r)) * (t - n) + e;
}
function le(e, t, n, r, i) {
  let a = Math.max(t[0], t[1]);
  (e !== void 0 && (a = Math.min(e, a)), (a = Math.max(0, a)));
  let o = t[0] > t[1] ? a : -a;
  return (n === `left` || n === `right` ? (r += o) : (i += o), [r, i]);
}
var ue = t((e, t) => {
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
  de = e(ue(), 1),
  fe = (function (e) {
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
  pe = new (class {
    m_fnCallbackOnPlaySound = new v();
    m_fnCallbackOnSuppressSound = new v();
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
  me = class {
    m_ActiveInputId;
    m_ActiveInputTimeout;
    m_config;
    constructor(e) {
      this.m_config = e;
    }
    Reset() {
      ((this.m_ActiveInputId = void 0),
        this.m_ActiveInputTimeout != null &&
          (clearInterval(this.m_ActiveInputTimeout),
          (this.m_ActiveInputTimeout = void 0)));
    }
    HandleInputButtonDown(e, t) {
      if (this.m_ActiveInputId !== e && t != null) {
        (this.Reset(), (this.m_ActiveInputId = e));
        let n = () => {
          this.m_ActiveInputTimeout = window.setInterval(() => {
            t();
          }, this.m_config.repeatInterval_ms);
        };
        this.m_config.firstRepeatInterval_ms == null ||
        this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
          ? n()
          : (this.m_ActiveInputTimeout = window.setTimeout(() => {
              (t(), n());
            }, this.m_config.firstRepeatInterval_ms));
      }
    }
  },
  he = class {
    m_config;
    m_inputRepeatGenerator;
    m_repeatOnAxis = 0;
    m_fnRepeatAllowed = () => !0;
    constructor(e) {
      ((this.m_config = e), (this.m_inputRepeatGenerator = new me(e)));
    }
    Reset() {
      this.m_inputRepeatGenerator.Reset();
    }
    SetRepeatAllowed(e) {
      ((e ||= () => !0), (this.m_fnRepeatAllowed = e));
    }
    HandleInputButtonDown(e, t, n) {
      this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
        ? this.m_repeatOnAxis == 0 &&
          ((e == F.DIR_UP || e == F.DIR_DOWN) && (this.m_repeatOnAxis = 2),
          (e == F.DIR_LEFT || e == F.DIR_RIGHT) && (this.m_repeatOnAxis = 1),
          t(),
          this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
        : (t(), this.m_inputRepeatGenerator.Reset());
    }
    HandleInputButtonUp(e) {
      if (this.m_config.inputsThatRepeat.has(e) && this.m_repeatOnAxis != 0) {
        let t = e == F.DIR_UP || e == F.DIR_DOWN,
          n = e == F.DIR_LEFT || e == F.DIR_RIGHT;
        ((this.m_repeatOnAxis == 2 && t) || (this.m_repeatOnAxis == 1 && n)) &&
          ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
      } else this.m_inputRepeatGenerator.Reset();
    }
  },
  F = (function (e) {
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
  ge = (function (e) {
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
function _e(e) {
  return e === 1 || e === 2;
}
var ve = class {
  m_OnGamepadDetectedCallbacks = new v();
  m_ButtonDownCallbacks = new v();
  m_ButtonUpCallbacks = new v();
  m_AnalogCallbacks = new v();
  m_NavigationTypeChangeCallbacks = new v();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new he({
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
    ((this.m_nLastActiveControllerIndex = e),
      (this.m_fLastActiveTime = Date.now()));
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
    (console.log(`Gamepad detected`),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch());
  }
  OnButtonDown(e, t, n, r) {
    (t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        e,
        () => this.DispatchButtonDown(e, !1, n, r),
        () => this.DispatchButtonDown(e, !0, n, r),
      ));
  }
  OnButtonUp(e, t) {
    (t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
      this.m_ButtonUpCallbacks.Dispatch(
        e,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      ));
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
    (r === void 0 && (r = -1),
      this.SetControllerActive(r),
      this.m_AnalogCallbacks.Dispatch(
        e,
        this.m_nLastActiveControllerIndex,
        t,
        n,
      ));
  }
  OnNavigationTypeChanged(e) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(e);
  }
};
function ye(e) {
  return typeof e == `object` && !!e && `value` in e;
}
function be(e, t) {
  return ye(e) && ye(t)
    ? e.value === t.value &&
        !!e.bShowOnLeft == !!t.bShowOnLeft &&
        !!e.bShowOnFloatingVRFooter == !!t.bShowOnFloatingVRFooter
    : e === t;
}
function xe(e) {
  return ye(e) ? e.value : e;
}
var I = (function (e) {
  return (
    (e[(e.GAMEPAD = 0)] = `GAMEPAD`),
    (e[(e.KEYBOARD = 1)] = `KEYBOARD`),
    (e[(e.APPLICATION = 2)] = `APPLICATION`),
    (e[(e.BROWSER = 3)] = `BROWSER`),
    (e[(e.AUTOFOCUS = 4)] = `AUTOFOCUS`),
    e
  );
})({});
function Se(e) {
  return (typeof e == `object` && e?.type?.startsWith(`vgp_`)) ?? !1;
}
var Ce = {
  [F.OK]: `vgp_onok`,
  [F.CANCEL]: `vgp_oncancel`,
  [F.SECONDARY]: `vgp_onsecondaryaction`,
  [F.OPTIONS]: `vgp_onoptions`,
  [F.START]: `vgp_onmenu`,
};
function L(e, t, n) {
  return (e.addEventListener(t, n), () => we(e, t, n));
}
function we(e, t, n) {
  e.removeEventListener(t, n);
}
function Te(e, t) {
  return L(e, `vgp_onbuttondown`, t);
}
function Ee(e, t) {
  return L(e, `vgp_onbuttonup`, t);
}
function De(e, t) {
  return L(e, `vgp_onok`, z(t));
}
function Oe(e, t) {
  return L(e, `vgp_oncancel`, z(t));
}
function ke(e, t) {
  return L(e, `vgp_onsecondaryaction`, z(t));
}
function Ae(e, t) {
  return L(e, `vgp_onoptions`, z(t));
}
function je(e, t) {
  return L(e, `vgp_onmenu`, z(t));
}
function Me(e, t) {
  return L(e, `vgp_ondirection`, z(t));
}
function Ne(e, t) {
  return L(e, `vgp_onfocus`, t);
}
function Pe(e, t) {
  return L(e, `vgp_onblur`, t);
}
function Fe(e, t) {
  return L(e, `vgp_requestfocus`, z(t));
}
function R(e, t, n) {
  let r = e;
  if (!r || !r.ownerDocument || !r.ownerDocument.defaultView) return !0;
  let i = new r.ownerDocument.defaultView.CustomEvent(t, {
    bubbles: !0,
    cancelable: !0,
    detail: n,
  });
  return r.dispatchEvent(i);
}
function Ie(e, t) {
  let n = { button: t, source: ge.GAMEPAD, is_repeat: !1 };
  (R(e, `vgp_onbuttondown`, n), R(e, `vgp_onbuttonup`, n));
}
function Le(e) {
  let t = [F.DIR_UP, F.DIR_DOWN, F.DIR_LEFT, F.DIR_RIGHT],
    n = !0,
    r = !1,
    i = Ce[e.detail.button];
  return (
    i
      ? ((r = !0), (n = R(e.target, i, e.detail)))
      : t.indexOf(e.detail.button) !== -1 &&
        ((r = !0), (n = R(e.target, `vgp_ondirection`, e.detail))),
    { bUnhandled: n, bHadLogicalEventMapping: r }
  );
}
function z(e) {
  return (t) => {
    e(t) !== !1 && (t.stopPropagation(), t.preventDefault());
  };
}
function Re(e) {
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
    t !== void 0 && (s[F.OK] = t),
    n !== void 0 && (s[F.CANCEL] = n),
    r !== void 0 && (s[F.SECONDARY] = r),
    i !== void 0 && (s[F.OPTIONS] = i),
    a !== void 0 && (s[F.START] = a),
    s
  );
}
function ze(e, t, n) {
  return c(
    (n) => {
      if (n && t) return L(n, e, t);
    },
    [e, t],
  );
}
var Be = new C(`GamepadEvents`).Debug;
function Ve(e, t, n) {
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
    E.useEffect(() => {
      let n = t.current,
        r = [];
      return (
        n &&
          (e.onButtonDown && r.push(Te(n, e.onButtonDown)),
          e.onButtonUp && r.push(Ee(n, e.onButtonUp)),
          e.onOKButton && r.push(De(n, e.onOKButton)),
          e.onCancelButton && r.push(Oe(n, e.onCancelButton)),
          e.onSecondaryButton && r.push(ke(n, e.onSecondaryButton)),
          e.onOptionsButton && r.push(Ae(n, e.onOptionsButton)),
          e.onMenuButton && r.push(je(n, e.onMenuButton)),
          e.onGamepadDirection && r.push(Me(n, e.onGamepadDirection)),
          e.onGamepadFocus && r.push(Ne(n, e.onGamepadFocus)),
          e.onGamepadBlur && r.push(Pe(n, e.onGamepadBlur))),
        () => r.forEach((e) => e())
      );
    }, n));
}
function B(e) {
  return (e.stopPropagation(), !1);
}
function He(e, t, n) {
  let { onButtonDown: r, ...i } = e,
    a = E.useCallback(
      (e) => {
        (r && r(e),
          Be(
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
  (Ve(i, t),
    Ve(
      {
        onButtonDown: a,
        onButtonUp: B,
        onOKButton: B,
        onCancelButton: B,
        onSecondaryButton: B,
        onOptionsButton: B,
        onMenuButton: B,
        onGamepadDirection: B,
        onGamepadFocus: B,
        onGamepadBlur: B,
      },
      t,
      [a],
    ));
}
var Ue = new C(`FocusHistory`),
  We = Ue.Debug,
  V = class e {
    m_root;
    constructor(e) {
      this.m_root = e;
    }
    static SerializeNavState(t, n = !0, r = !0) {
      return {
        root: e.SerializeNavNode(t, n, r),
        bHadFocus: t.BFocusWithin() && t.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(t, n = !0, r = !0) {
      let i,
        [a, o] = t.GetChildren();
      a.length &&
        o != -1 &&
        n &&
        (i = a.map((t, n) => e.SerializeNavNode(t, n == o || r, r)));
      let s = { rgChildren: i };
      return (
        t.NavKey && (s.sNavKey = t.NavKey), o != -1 && (s.iActiveChild = o), s
      );
    }
    static RestoreSerializedNavState(t, n, r = 0) {
      let { root: i, bHadFocus: a } = n;
      t.Tree.Controller.RestoreHistoryTransaction(() => {
        (e.RestoreSerializedNavNode(t, i),
          (r == 1 || (r == 0 && a)) && t.BTakeFocus(I.APPLICATION));
      });
    }
    static RestoreSerializedNavNode(t, n, r = 0) {
      let { sNavKey: i, iActiveChild: a = -1, rgChildren: o } = n;
      (i && d(i == t.NavKey, `navkey mismatch`), t.SetActiveChild(a));
      let s = Ue.IsDebugEnabled() ? `[${t.Tree.id}]${Ye(r)}` : ``;
      if (o && o.length) {
        let [n] = t.GetChildren();
        if (a != -1 && Ue.IsDebugEnabled()) {
          let e = o.length != n.length;
          We(
            `${s}Restoring node ${t.NavKey} which had active child ${a} of ${o.length}${e ? `- now ${n.length} children.` : ``}`,
          );
        }
        let i = new Map();
        n.forEach((e) => {
          e.NavKey && i.set(e.NavKey, e);
        });
        for (let t of o) {
          if (!t.sNavKey) continue;
          let n = i.get(t.sNavKey);
          n && e.RestoreSerializedNavNode(n, t, r + 1);
        }
        if (a != -1 && o[a]?.sNavKey) {
          let e = i.get(o[a].sNavKey);
          (We(
            `${s}Restoring node ${t.NavKey}, child with focus: ${o[a].sNavKey} ${e === void 0 ? `MISSING!!` : ``}`,
          ),
            e && t.SetActiveChild(n.indexOf(e)));
        }
        let c = 0,
          l = 0;
        for (; c < n.length && l < o.length;) {
          for (; c < n.length && n[c].NavKey;) c++;
          for (; l < o.length && o[l].sNavKey;) l++;
          if (c >= n.length || l >= o.length) break;
          (e.RestoreSerializedNavNode(n[c], o[l], r + 1), c++, l++);
        }
      }
    }
  };
function Ge(e) {
  return V.SerializeNavState(e, !0, !1);
}
function Ke(e, t, n = 0) {
  return V.RestoreSerializedNavState(e, t, n);
}
var qe = class extends V {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(V.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        V.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  Je = class extends V {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, V.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let n = this.m_mapHistory.get(e);
      return n
        ? (console.log(`Restoring history for state ${e}`),
          V.RestoreSerializedNavState(this.m_root, n, t),
          !0)
        : !1;
    }
  };
function Ye(e) {
  if (e == 0) return ``;
  let t = ``;
  for (let n = 0; n < e; n++) t += `*`;
  return ((t += ` `), t);
}
function H(e) {
  return e != null && e.focus !== void 0;
}
function Xe(e, t) {
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
function Ze(e) {
  let t;
  return (
    e && H(e.currentTarget) && (t = e.currentTarget.ownerDocument.defaultView),
    t
  );
}
function Qe(e) {
  let t;
  return (e && (t = e.ownerDocument.defaultView), t);
}
function $e(e, t) {
  let n = e?.parentElement;
  for (; n;) {
    if (H(n)) {
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
  return H(n) ? n : null;
}
function et(e, t) {
  let n = e;
  for (; n;) {
    if (t(n)) return n;
    n = n.parentElement;
  }
}
function tt(e, t) {
  if (!(`ownerDocument` in e)) return !0;
  let n = e.ownerDocument.defaultView.getComputedStyle(e),
    r = t === `x` ? n.overflowX : n.overflowY;
  return r === `auto` || r === `scroll`;
}
var U = { x: `y`, y: `x` };
function nt() {
  return { x: 0, y: 0 };
}
function rt(e, t) {
  return e.x * t.x + e.y * t.y;
}
function it(e, t) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function at(e, t) {
  let n = it(e, t);
  return Math.sqrt(rt(n, n));
}
function ot(e) {
  return (e.min + e.max) / 2;
}
function st(e) {
  return { x: ot(e.x), y: ot(e.y) };
}
function ct(e, t, n) {
  return e == null || t == null
    ? e === t
    : typeof e != `object` ||
        typeof t != `object` ||
        Object.keys(e).length !== Object.keys(t).length
      ? !1
      : ((n ??= (e, t) => e === t),
        Object.keys(e).every((r) => t.hasOwnProperty(r) && n(e[r], t[r])));
}
function lt(e, t, n) {
  let r = [],
    [i, a] = e.GetChildren(),
    o = e.GetActiveChild(),
    s,
    c = o ? o.Element?.getBoundingClientRect() : null;
  if (o) {
    let e = ft(o, t, n);
    if (
      e &&
      !e.offScreen &&
      ((s = ut(o, e, e.overlap, n)), s && !s.visibility.offScreen)
    )
      return s;
    e && r.push({ child: o, visibility: e });
  }
  let l = n || c;
  for (let e = 0; e < i.length; e++) {
    let n = i[e];
    if (n == o) continue;
    let a = ft(n, t, l ?? void 0);
    a && r.push({ child: n, visibility: a });
  }
  r.sort(dt);
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
    let i = n == o ? s : ut(n, r, r.overlap || t, l ?? void 0);
    i && (!u || dt(i, u) < 0) && (u = i);
  }
  return u;
}
function ut(e, t, n, r) {
  switch (e.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return lt(e, t.overlap || n, r);
    case `self`:
      return { child: e, visibility: t };
  }
}
function dt(e, t) {
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
function ft(e, t, n) {
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
    n && (a = f(r, n));
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
var pt = class {
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
  mt = class extends pt {
    m_fnCallback;
    constructor(e, t, n) {
      (super(e, t), (this.m_fnCallback = n));
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  ht = class extends pt {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      (super(`ownerDocument` in e ? Qe(e) : e, n),
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
  W = new C(`ScrollSnap`).Debug,
  gt,
  _t = 500;
function vt(e, t, n, r, i) {
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
      (s === void 0 && (s = Ft.Standard),
      r?.m_Properties?.fnScrollIntoViewHandler &&
        r.m_Properties.fnScrollIntoViewHandler(e, t, r) !== !1)
    )
      continue;
    let l = r.m_element,
      u = s == Ft.NoTransform || s == Ft.NoTransformSparseContent || !c;
    if (!t && n !== I.GAMEPAD)
      (W(`No previous element for scrolling, will jump`),
        u
          ? Ot(a, l, `auto`)
          : (W(`Scrolling Into View ('auto' via browser scrollIntoView):`, l),
            l?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            })));
    else {
      let t = u ? xt(l) : l.getBoundingClientRect(),
        n = l.ownerDocument.defaultView.innerHeight,
        r = i ? 40 : Math.max(n * 0.4, 40),
        o = !1,
        s = gt && performance.now() - gt < _t;
      (s || t.bottom < -r || t.top > n + r) &&
        ((o = !0),
        s ||
          W(
            `Disabling smooth scrolling, ${t.bottom} < ${-r}, ${t.top} > ${n} + ${r} `,
          ));
      let c = o ? `auto` : `smooth`;
      (o && (gt = performance.now()),
        e.Tree.Controller.BIsRestoringHistory() && (c = `auto`),
        u
          ? Ot(a, l, c)
          : (W(`Scrolling Into View ('${c}' via browser scrollIntoView):`, l),
            l.scrollIntoView({ behavior: c, block: `nearest` })));
    }
  }
  yt(e, r);
}
function yt(e, t) {
  let n = J(t);
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
          bt(i.Element, t, n, i == i.Tree.Root),
        i.HasMovementHandler(t)) ||
        i == r
      );
      i = i.GetNavParentCrossingTrees()
    );
}
function bt(e, t, n, r) {
  let i = e,
    a = i.ownerDocument;
  if (
    ((r || i == a.body) && a.defaultView && !tt(i, n) && (i = a.defaultView),
    !tt(i, n))
  )
    return;
  let o = jt(i);
  if (n == `y`) {
    let e = t == F.DIR_DOWN ? o.MaxScrollTop() : 0;
    o.scrollTo({ top: e, behavior: `smooth` });
  } else {
    let e = t == F.DIR_RIGHT ? o.MaxScrollLeft() : 0;
    o.scrollTo({ left: e, behavior: `smooth` });
  }
}
function xt(e) {
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
    let { scrollTop: e, scrollLeft: i } = Mt(r);
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
function St(e, t) {
  return t == `x`
    ? [e.left, e.right, e.right - e.left]
    : [e.top, e.bottom, e.bottom - e.top];
}
function Ct(e, t, n, r) {
  let [i, a, o] = St(e, r),
    [s, c, l] = St(t, r),
    [u, d] = St(n, r);
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
function G(e) {
  return e == `auto`
    ? 0
    : e.endsWith(`px`)
      ? parseInt(e)
      : (console.log(`Unsupported length`, e), 0);
}
function wt(e) {
  let t;
  return (
    (t =
      `ownerDocument` in e
        ? e.ownerDocument.defaultView.getComputedStyle(e)
        : e.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: G(t.scrollPaddingLeft),
      right: G(t.scrollPaddingRight),
      top: G(t.scrollPaddingTop),
      bottom: G(t.scrollPaddingBottom),
    }
  );
}
function Tt(e) {
  if (!(`ownerDocument` in e)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let t = e.ownerDocument.defaultView.getComputedStyle(e);
  return {
    left: G(t.scrollMarginLeft),
    right: G(t.scrollMarginRight),
    top: G(t.scrollMarginTop),
    bottom: G(t.scrollMarginBottom),
  };
}
function Et(e, t) {
  let n = wt(e);
  return {
    left: Math.max(0, t.left + n.left),
    right: Math.max(0, t.right - n.right),
    top: Math.max(0, t.top + n.top),
    bottom: Math.max(0, t.bottom - n.bottom),
  };
}
function Dt(e) {
  return e > -1 && e < 1;
}
function Ot(e, t, n, r, i) {
  (W(
    `----------------------------------------------------------------------------------`,
  ),
    W(`Scrolling Into View (NoTransform):`, t));
  let a = [],
    s = t,
    c = xt(t),
    l = i ?? Number.MAX_VALUE;
  for (; s;) {
    let e = $e(s);
    e ||= Qe(s);
    let t = Tt(s),
      n = xt(e),
      u = Et(e, n),
      d = jt(e),
      f = { element: e, left: 0, top: 0 };
    if (
      (W(
        `Checking scroll div`,
        e,
        `scroll y:${d.scrollTop} of ${d.MaxScrollTop()}, x:${d.scrollLeft} of ${d.MaxScrollLeft()}, adjusted =>`,
        u,
        `target => `,
        c,
      ),
      (!r || r == `y`) &&
        tt(e, `y`) &&
        ((f.top = Ct(c, u, t, `y`)),
        (f.top = o(f.top, -d.scrollTop, d.MaxScrollTop() - d.scrollTop)),
        i &&
          ((f.top = Math.min(l, Math.abs(f.top)) * (f.top < 0 ? -1 : 1)),
          (l -= Math.abs(f.top))),
        W(`- checked y: ${f.top}`)),
      (!r || r == `x`) &&
        tt(e, `x`) &&
        ((f.left = Ct(c, u, t, `x`)),
        (f.left = o(f.left, -d.scrollLeft, d.MaxScrollLeft() - d.scrollLeft)),
        i &&
          ((f.left = Math.min(l, Math.abs(f.left)) * (f.left < 0 ? -1 : 1)),
          (l -= Math.abs(f.left))),
        W(`- checked x: ${f.left}`)),
      a.push(f),
      (i && !l) || !(`ownerDocument` in e))
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
  for (let e of a) {
    if (Dt(e.left) && Dt(e.top)) continue;
    let t = jt(e.element),
      r = t.scrollTop + e.top,
      i = t.scrollLeft + e.left;
    ((i = o(i, 0, t.MaxScrollLeft())),
      (r = o(r, 0, t.MaxScrollTop())),
      !(Dt(t.scrollLeft - i) && Dt(t.scrollTop - r)) &&
        (t.scrollTo({ left: i, top: r, behavior: n }),
        (u ||= (W(`Scrolling:`), !0)),
        W(`- ${e.top},${e.left} => ${r}, ${i}, behavior: ${n}`, e.element)));
  }
}
var kt = class {
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
          this.m_animation = new mt(this.m_window, e, (e) => {
            this.m_window?.scrollTo({
              left: r + (t - r) * e,
              top: i + (n - i) * e,
              behavior: `auto`,
            });
          });
        } else
          ((this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new ht(
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
g([i], kt.prototype, `ResetScrollState`, null);
var At = new WeakMap();
function jt(e) {
  let t = At.get(e);
  return (t || ((t = new kt(e)), At.set(e, t)), t);
}
function Mt(e) {
  let t = At.get(e);
  return t
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
var Nt = new C(`FocusNavigationMovement`),
  K = Nt.Debug,
  q = (function (e) {
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
  Pt = (function (e) {
    return (
      (e[(e.FIRST = 0)] = `FIRST`),
      (e[(e.LAST = 1)] = `LAST`),
      (e[(e.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (e[(e.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (e[(e.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      e
    );
  })({}),
  Ft = (function (e) {
    return (
      (e[(e.Standard = 0)] = `Standard`),
      (e[(e.NoTransform = 1)] = `NoTransform`),
      (e[(e.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      e
    );
  })({}),
  It = (function (e) {
    return (
      (e[(e.INVALID = 0)] = `INVALID`),
      (e[(e.FORWARD = 1)] = `FORWARD`),
      (e[(e.BACKWARD = 2)] = `BACKWARD`),
      e
    );
  })({}),
  Lt = class e {
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
    m_Focused = l(!1);
    m_FocusWithin = l(!1);
    m_ActionDescriptionsChangedCallbackList = new v();
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
      return new Rt(this);
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
      let t = !ct(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
          be,
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
          ? this.m_FocusRing?.OnBlur(I.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            r &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(I.APPLICATION, this, this),
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
    AddChild(e) {
      (this.m_rgChildren.push(e),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? e.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            e.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          e.BFocusWithin() &&
          (d(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1)));
    }
    OnMount(e) {
      ((this.m_element = e),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : d(this == this.m_Tree.Root, `Only root should have no parent`),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents());
      let t =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        n = this.m_Properties?.autoFocus || t;
      if (this.BWantsAutoFocus() || n) {
        let e = -1;
        (this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || n || e !== -1) &&
            (this.SetActiveChild(e),
            !this.m_Parent || this.m_Parent.m_element
              ? t
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    { bFocusDescendant: !0 },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0)));
      } else if (this.m_rgChildren.length) {
        let e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
        e != -1 &&
          (this.SetActiveChild(e),
          d(
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
      let e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      ((this.BHasFocus() || e) &&
        (K(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        e && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(I.APPLICATION, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : d(this == this.m_Tree.Root, `Only root should have no parent`));
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
          Me(this.m_element, this.OnNavigationEvent),
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
    RemoveChild(e) {
      let t = this.m_rgChildren.indexOf(e);
      (d(t !== -1, `Child was not found to remove`),
        t !== -1 &&
          (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(t, 1)));
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
            (K(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              e.m_element,
            ),
              this.m_Tree.TransferFocus(I.BROWSER, e));
            return;
          }
        }
        this.m_Tree.TransferFocus(I.BROWSER, this);
      }
    }
    OnDOMBlur(e) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(I.BROWSER, null);
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
      let t = this.FindNextFocusableChildInDirection(-1, 1, F.INVALID);
      return this.InternalFocusDescendant(t, e);
    }
    BFocusLastChild(e) {
      let t = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        F.INVALID,
      );
      return this.InternalFocusDescendant(t, e);
    }
    FindFocusableDescendant(e, t) {
      let n = J(e),
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
          (i == 2 ? (l = `x`) : i == 3 ? (l = `y`) : s == 6 && n && (l = U[n]),
          (l || t) && n)
        ) {
          let r = this.m_Tree.GetLastFocusedNode();
          if (t || (r && l == U[n])) {
            let a =
              t ||
              this.AdjustRectForLastMovementOnTangentAxis(
                r.GetBoundingRect(),
                n,
              );
            (K(
              `Taking focus while preserving ${i && Pt[i]} preserved: ${l} movement: ${n}, node:`,
              a,
            ),
              (c = this.FindClosestFocusableNodeToRect(e, a)));
          } else if (l != U[n]) {
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
        r = lt(this, n);
      return (
        K(
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
          : Gt(this.m_element);
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
        case F.DIR_UP:
          n && (o = n(e.detail, this));
          break;
        case F.DIR_RIGHT:
          r && (o = r(e.detail, this));
          break;
        case F.DIR_DOWN:
          i && (o = i(e.detail, this));
          break;
        case F.DIR_LEFT:
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
        case F.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case F.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case F.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case F.DIR_RIGHT:
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
      K(
        `Handling navigation event ${F[e]} - ${q[this.GetLayout()]}`,
        this.m_element,
      );
      let n = this.FindNextFocusableChild(e);
      if (!n) return !1;
      let r = J(e),
        i = this.ComputeRelativeDirection(e, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || n.GetScrollIntoViewType() == 2) {
        let e = n.Element?.ownerDocument.defaultView;
        if (e) {
          let a = (r == `y` ? e.innerHeight : e.innerWidth) / (t ? 4.5 : 3.33),
            o = xt(n.Element),
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
              K(`Element too far away, scrolling ${a} on ${r} axis `),
              Ot(n.Element, n.Element, `smooth`, r, a),
              !0
            );
        }
      }
      return (this.m_Tree.TransferFocus(I.GAMEPAD, n, e), !0);
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
            case F.DIR_LEFT:
              return n ? 1 : 2;
            case F.DIR_RIGHT:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case F.DIR_UP:
              return n ? 1 : 2;
            case F.DIR_DOWN:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (e) {
            case F.DIR_LEFT:
            case F.DIR_UP:
              return n ? 1 : 2;
            case F.DIR_RIGHT:
            case F.DIR_DOWN:
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
    FindNextFocusableChildInGrid(e, t, n) {
      let r = n == F.DIR_UP || n == F.DIR_DOWN,
        i = this.GetLastFocusElement();
      if (!i || i == this.m_element)
        return (
          d(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            i,
          ),
          this.FindFocusableDescendant(n)
        );
      let a = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((n == F.DIR_UP || n == F.DIR_DOWN) &&
          (a = this.AdjustRectForLastMovementOnTangentAxis(a, `y`)),
        r)
      ) {
        let r = e;
        for (; r != -1;) {
          let e = this.ScanChildren(
            this.AdvanceIndex(r, t),
            t,
            (e) => !zt(`y`, a, e.GetBoundingRect()),
          );
          if (e != -1) {
            let r = this.m_rgChildren[e].GetBoundingRect(),
              i = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                t,
                n,
                a,
                e,
                r,
              );
            if (i) return i;
          }
          r = e;
        }
      } else {
        let r = t == 1 ? 1 : -1;
        for (
          let i = this.AdvanceIndex(e, t);
          i >= 0 && i < this.m_rgChildren.length;
          i += r
        ) {
          let e = this.m_rgChildren[i];
          if (!zt(`y`, a, e.GetBoundingRect())) return null;
          let t = e.FindFocusableNode(n);
          if (t) return t;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(e, t) {
      let n = this.GetLastFocusElement();
      if (!n || n == this.m_element)
        return (
          d(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            n,
          ),
          this.FindFocusableDescendant(t)
        );
      let r = J(t);
      if (!r) return null;
      let i = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        r,
      );
      return this.FindClosetChildInDirection(r, i, e, t);
    }
    AdjustRectForLastMovementOnTangentAxis(e, t) {
      let n = this.m_Tree.GetLastFocusedMovementRect(U[t]);
      return n
        ? t == `x`
          ? { left: e.left, right: e.right, top: n.top, bottom: n.bottom }
          : { left: n.left, right: n.right, top: e.top, bottom: e.bottom }
        : e;
    }
    FindClosestFocusableNodeToRect(e, t) {
      let n = J(e),
        r = n && U[n],
        i = [];
      for (let e of this.m_rgChildren) {
        let n = e.GetBoundingRect();
        if (n) {
          let a = Xe(t, n),
            o = r ? Bt(r, t, n) : 0;
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
      K(
        `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
      );
      let i = Vt(e, t),
        a = [];
      for (let r of this.m_rgChildren) {
        let o = r.GetBoundingRect();
        if (o) {
          let s = Vt(e, o),
            c;
          ((c = n == 1 ? s.min - i.max : i.min - s.max),
            c >= 0 && a.push({ child: r, overlap: Bt(U[e], t, o), dist: c }));
        }
      }
      if (
        (a.sort((e, t) => {
          if (e.overlap) {
            if (!t.overlap) return -1;
          } else if (t.overlap) return 1;
          return e.dist - t.dist || t.overlap - e.overlap;
        }),
        Nt.IsDebugEnabled())
      ) {
        let e = a
          .slice(0, 3)
          .map(
            ({ dist: e, overlap: t, child: n }) =>
              `[ node: ${n.m_element?.className} dist: ${e} overlap: ${t} ]`,
          );
        K(`Found nodes on axis, top 3 (of ${a.length}: ${e.join(`, `)}`);
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
      let s = Ut(r);
      (this.ScanChildren(i, t, (t) => {
        let n = t.GetBoundingRect();
        return n
          ? a && !zt(U[e], a, n)
            ? !0
            : (o.push({ child: t, overlap: Bt(e, r, n), dist: Ht(e, s, n) }),
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
    SetActiveChild(t) {
      t instanceof e
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = t),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(t)))
        : (this.IsValidChildIndex(t) &&
            (this.m_ActiveChild = this.m_rgChildren[t]),
          (this.m_iLastActiveChildIndex = t));
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
    SetDOMFocusAndScroll(e, t, n, r) {
      (this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(e),
        this.m_Tree.BIsActiveFocus()
          ? (d(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({ preventScroll: !0 }))
          : this.m_Tree.BUseVirtualFocus() ||
            K(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && vt(this, t, e, n, r));
    }
  };
(g([i], Lt.prototype, `OnDOMFocus`, null),
  g([i], Lt.prototype, `OnDOMBlur`, null),
  g([i], Lt.prototype, `OnNavigationEvent`, null));
var Rt = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(e) {
    this.m_node = e;
  }
  TakeFocus(e) {
    return this.m_node.BTakeFocus(e ? I.GAMEPAD : I.APPLICATION, e);
  }
  ParentTakeFocus(e) {
    this.m_node.Parent?.BTakeFocus(e ? I.GAMEPAD : I.APPLICATION, e);
  }
  ChildTakeFocus(e) {
    return this.m_node.BChildTakeFocus(e ? I.GAMEPAD : I.APPLICATION, e);
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
    ((this.m_History ||= new qe(this.m_node)), this.m_History.PushState());
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    ((this.m_StateHistory ||= new Je(this.m_node)),
      this.m_StateHistory.SaveState(e));
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Ge(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return Ke(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function zt(e, t, n, r = 0.001) {
  return e == `x`
    ? t.right > n.left + r && t.left + r < n.right
    : e == `y`
      ? t.bottom > n.top + r && t.top + r < n.bottom
      : (d(!1, `Invalid axis ${e}`), !1);
}
function Bt(e, t, n) {
  let r;
  return (
    e == `x`
      ? (r = Math.min(t.right, n.right) - Math.max(t.left, n.left))
      : e == `y`
        ? (r = Math.min(t.bottom, n.bottom) - Math.max(t.top, n.top))
        : (d(!1, `Invalid axis ${e}`), (r = 0)),
    r < 0 ? 0 : r
  );
}
function Vt(e, t) {
  return e == `x`
    ? { min: t.left, max: t.right }
    : { min: t.top, max: t.bottom };
}
function Ht(e, t, n) {
  let r = t[e],
    i = Vt(e, n);
  return r < i.min ? i.min - r : r > i.max ? r - i.max : 0;
}
function Ut(e) {
  return { x: e.left, y: e.top };
}
var Wt = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function Gt(e) {
  if (!e) return q.NONE;
  let t = e.ownerDocument.defaultView,
    n = t.getComputedStyle(e);
  if (n.display == `flex`)
    switch (n.flexDirection) {
      case `row`:
        return n.flexWrap == `wrap` ? q.GRID : q.ROW;
      case `row-reverse`:
        return q.ROW_REVERSE;
      case `column`:
        return q.COLUMN;
      case `column-reverse`:
        return q.COLUMN_REVERSE;
    }
  else if (n.display == `grid`)
    return n.gridTemplateAreas === `none` ? q.GRID : q.GEOMETRIC;
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
      return q.ROW;
    if (i === `right`) return q.ROW_REVERSE;
    if (r.display === `inline` || r.display === `inline-block`) return q.GRID;
  }
  return q.COLUMN;
}
function J(e) {
  switch (e) {
    case F.DIR_UP:
    case F.DIR_DOWN:
      return `y`;
    case F.DIR_LEFT:
    case F.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function Kt(e) {
  if (!e) return q.NONE;
  switch (e) {
    case `column`:
      return q.COLUMN;
    case `column-reverse`:
      return q.COLUMN_REVERSE;
    case `row`:
      return q.ROW;
    case `row-reverse`:
      return q.ROW_REVERSE;
    case `grid`:
      return q.GRID;
    case `geometric`:
      return q.GEOMETRIC;
    default:
      return (h(e, `Unhandled flow-children: ${e}`), q.NONE);
  }
}
function qt(e) {
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
var Jt = E.createContext(qt);
function Yt(e) {
  let { factory: t, children: n } = e,
    r = E.useMemo(() => t.CreateVirtualKeyboardRef.bind(t), [t]);
  return E.createElement(Jt.Provider, { value: r }, n);
}
function Xt(e, t) {
  let { onTextEntered: n, ...r } = e,
    i = E.useRef(null),
    a = E.useRef({});
  Object.assign(a.current, {
    ...r,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let o = Zt(a.current),
    s = E.useCallback(
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
    l = E.useCallback((e) => !o.bInVR && e.pointerType === `mouse`, [o]),
    u = E.useCallback(
      (e) => {
        l(e) || o.ShowVirtualKeyboard();
      },
      [o, l],
    ),
    d = c(
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
            e.addEventListener(`click`, u),
            t.push(() => e.removeEventListener(`click`, u)),
            t.push(De(e, o.ShowVirtualKeyboard)),
            t.push(Pe(e, s))),
          () => t.forEach((e) => e())
        );
      },
      [s, u, o],
    );
  return (
    E.useLayoutEffect(
      () => (
        p(t, {
          TakeFocusAndShowKeyboard: (e) => {
            let t = i.current;
            t &&
              (document.activeElement != t && t.focus(),
              !(e && l(e)) && o.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            o.HideVirtualKeyboard();
          },
        }),
        () => p(t, null)
      ),
      [o, t, l],
    ),
    d
  );
}
function Zt(e) {
  let t = E.useRef(void 0),
    n = E.useContext(Jt);
  return ((t.current ||= n(e || {})), t.current);
}
function Qt(e) {
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
var $t = E.createContext(void 0);
function en(e) {
  let { controller: t } = e;
  return (
    E.useEffect(() => {
      t.Init();
    }, [t]),
    (0, N.jsx)($t.Provider, { value: t, children: e.children })
  );
}
function Y() {
  return E.useContext($t);
}
function tn() {
  return _(Y()?.GetShowDebugFocusRing()) ?? !1;
}
var nn = E.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function rn(e) {
  let {
      ownerWindow: t,
      refFocusNavContext: n,
      parentWindowContext: i,
      children: a,
      suppressGamepadInput: o = !1,
    } = e,
    s = Y(),
    c = E.useContext(nn),
    l = r(),
    [u] = E.useState(() => i ?? c.focusNavWindow ?? s.CreateContext(t, o, l)),
    d = _(s.NavigationSourceSupportsFocus) ?? !1;
  (E.useEffect(
    () => (
      u.OnMount(t),
      t.document?.hasFocus() && u.OnActivate(t),
      () => {
        u.Destroy(t);
      }
    ),
    [u, t],
  ),
    m(n, u));
  let f = E.useMemo(() => ({ focusNavWindow: u, bSupportsFocus: d }), [u, d]);
  return (0, N.jsxs)(nn.Provider, {
    value: f,
    children: [
      !u?.BIsVR() && (0, N.jsx)(an, { ownerWindow: t, context: u }),
      a,
    ],
  });
}
function an(e) {
  let { ownerWindow: t, context: n } = e,
    r = E.useMemo(() => () => n.OnActivate(t), [n, t]),
    i = E.useMemo(() => () => n.OnDeactivate(t), [n, t]);
  return (
    k(t, `touchstart`, r, { capture: !0 }),
    k(t, `mousedown`, r, { capture: !0 }),
    k(t, `focus`, r),
    k(t?.document, `focusin`, r),
    k(t, `blur`, i),
    null
  );
}
function on() {
  return E.useContext(nn)?.focusNavWindow;
}
function sn(e = !0) {
  return E.useContext(nn)?.bSupportsFocus ?? e;
}
var cn = E.forwardRef(function (e, t) {
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
    { elemProps: _, navOptions: v, gamepadEvents: y } = yn(g);
  return Y()
    ? (0, N.jsx)(ln, {
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
        children: (0, N.jsx)(`div`, { ..._, ref: t }),
      })
    : (0, N.jsx)(`div`, { ..._, ref: t });
});
function ln(e) {
  let {
      navID: t,
      onActivated: n,
      onDeactivated: r,
      navTreeRef: i,
      enabled: o = !0,
      modal: s = !1,
      virtualFocus: c = !1,
      historyMode: l,
      children: u,
      parentEmbeddedNavTree: d,
      onGlobalButtonDown: f,
      disableFocusClasses: p = !1,
      disabledRoot: m = !1,
      excludeTreeFromScrollRegionSearch: h = !1,
      "flow-children": g,
      ..._
    } = e,
    { elemProps: v, navOptions: b, gamepadEvents: x } = yn(_),
    { refDiv: S, tree: C } = un({
      navID: t,
      parentEmbeddedNavTree: d,
      disabledRoot: m,
      enabled: o,
      onGlobalButtonDown: f,
      navTreeRef: i,
      virtualFocus: c,
      modal: s,
      historyMode: l,
      excludeTreeFromScrollRegionSearch: h,
    });
  (a(C.OnActivateCallbacks, n),
    a(C.OnDeactivateCallbacks, r),
    He(x, S, C),
    E.useLayoutEffect(() => {
      let e = Kt(g);
      C.Root.SetProperties({ ...b, layout: e });
    }));
  let w = y(S, u.props.ref);
  return (0, N.jsx)(fn, {
    tree: m ? null : C,
    disableFocusClasses: p || m,
    children: (0, N.jsx)(X.Provider, {
      value: m ? null : C.Root,
      children: E.cloneElement(u, { id: t, "data-react-nav-root": t, ref: w }),
    }),
  });
}
function un(e) {
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
    l = Y(),
    u = on() || l.GetDefaultContext(),
    d = E.useContext(X),
    [f] = E.useState(() =>
      l.NewGamepadNavigationTree(u, t, n ?? d?.Tree, {
        ...c,
        bIsEmbeddedInLegacyTree: !!n,
      }),
    ),
    m = E.useRef(null);
  return (
    f.SetOnGlobalButtonDown(s),
    E.useEffect(() => f.RegisterNavigationItem(f.Root, m.current), [f, m]),
    E.useEffect(() => {
      f.SetIsEnabled(a);
    }, [f, a]),
    E.useEffect(() => {
      f.SetExcludeFromScrollRegionSearch(i);
    }, [f, i]),
    E.useEffect(() => {
      if (!r)
        return l.RegisterGamepadNavigationTree(
          f,
          m.current.ownerDocument.defaultView,
        );
    }, [l, f, r]),
    E.useEffect(() => (p(o, f), () => p(o, null)), [o, f]),
    { refDiv: m, tree: f }
  );
}
var dn = E.createContext({
  bActiveTree: !1,
  bActiveTreeWithinWindow: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function fn(e) {
  let { tree: t, disableFocusClasses: n = !1, children: r } = e,
    [i, a] = E.useState(t?.BIsActive() || !1),
    [o, s] = E.useState(t?.BIsActiveWithinWindow() || !1),
    c = _(t?.SubscribableIsMounted) ?? !1;
  E.useEffect(() => {
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
  let l = E.useMemo(
    () => ({
      bActiveTree: i,
      bActiveTreeWithinWindow: o,
      bDisableFocusClasses: n,
      bIsMounted: c,
    }),
    [i, n, o, c],
  );
  return (0, N.jsx)(dn.Provider, { value: l, children: r });
}
function pn() {
  return E.useContext(dn);
}
var X = E.createContext(null),
  mn = E.createContext(Wt);
function hn(e, t) {
  let n = E.useRef(null);
  return (
    e &&
      (!n.current || n.current.m_Parent != e) &&
      (n.current = e.Tree.CreateNode(e, t)),
    n.current
  );
}
function gn(e) {
  let { navRef: t, ...n } = e,
    r = E.useRef(null),
    i = (0, E.useContext)(X),
    a = hn(i, (0, E.useContext)(mn));
  return (
    E.useLayoutEffect(() => {
      a && a.SetProperties(n);
    }),
    E.useLayoutEffect(() => {
      if (!i) return;
      let e = i.Tree.RegisterNavigationItem(a, r.current);
      return () => {
        e();
      };
    }, [i, a, r]),
    E.useLayoutEffect(() => {
      if (a && t) return (p(t, a.CreateHandle()), () => p(t, null));
    }, [a, t]),
    { ref: r, node: a }
  );
}
function _n(e) {
  let t = E.useRef(null),
    n = E.useRef(null);
  return (
    E.useEffect(
      () => () => {
        n.current?.();
      },
      [],
    ),
    E.useCallback(
      (r) => {
        t.current !== r &&
          ((t.current = r),
          n.current?.(),
          (n.current = null),
          r &&
            (n.current = Fe(r, (t) =>
              !e || e.GetFocusable() == `none`
                ? !1
                : e.BTakeFocus(void 0, t.detail.button),
            )));
      },
      [e],
    )
  );
}
function vn(e) {
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
      actionDescriptions: Re({
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
function yn(e) {
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
      scrollRegionToStartOrEnd: w,
      excludeFromScrollRegionSearch: T,
      ...E
    } = e,
    { gamepadEvents: D, actionDescriptions: O, props: k } = vn(E);
  return {
    elemProps: k,
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
      scrollRegionToStartOrEnd: w,
      excludeFromScrollRegionSearch: T,
      actionDescriptionMap: { ...m, ...O },
    },
    gamepadEvents: D,
  };
}
function bn(e) {
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
      d = sn(),
      f = _(s.SubscribableHasFocus) && d,
      p = _(s.SubscribableFocusWithin) && d,
      {
        bActiveTree: m,
        bActiveTreeWithinWindow: h,
        bDisableFocusClasses: g,
        bIsMounted: v,
      } = pn(),
      y = m && !g,
      b = v && !h && (c !== void 0 || i);
    return E.createElement(
      e,
      {
        ...u,
        className: (0, de.default)(a, f && y && n, p && y && r),
        tabIndex: b ? -1 : c,
        ref: o,
      },
      l,
    );
  };
}
var xn = bn(`div`);
function Sn(e) {
  return (
    pe.PlayNavSound(fe.DefaultOk),
    s(e.currentTarget) && e.currentTarget.click(),
    !0
  );
}
var Cn = E.createContext(void 0),
  wn = Cn.Provider;
function Tn(e, t, n, r, i) {
  let {
      elemProps: { focusClassName: a, children: o, "flow-children": s, ...c },
      navOptions: l,
      gamepadEvents: u,
    } = yn(n),
    {
      bFocusableByDefault: d = !0,
      bActivateByDefault: f = !1,
      bDOMElementFocusByDefault: p = d,
    } = i || {};
  l.focusable === void 0 && !c.disabled && d && (l.focusable = !0);
  let { ref: m, node: h } = gn({ layout: Kt(s), ...l });
  (u.onOKButton ||
    (((`onClick` in c && c.onClick) || (f && (f === !0 || f(c)))) &&
      (u.onOKButton = Sn)),
    l.focusable && !p
      ? (c.tabIndex = c.tabIndex || 0)
      : !l.focusable && p && (c.tabIndex = c.tabIndex ?? -1),
    Ve(u, m));
  let g = _n(h),
    _ = y(r, m, g),
    v = (0, E.useContext)(Cn)?.Component,
    b = { ...c };
  return (
    `onClick` in c && (b.role ??= `button`),
    h
      ? ((b = {
          ...b,
          divRef: _,
          node: h,
          focusClassName: (0, de.default)(a, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: p,
          className: (0, de.default)(c.className, `Focusable`),
        }),
        (0, N.jsx)(X.Provider, {
          value: h,
          children: v
            ? E.createElement(v, { ...b, Component: t }, o)
            : E.createElement(t, b, o),
        }))
      : E.createElement(
          e,
          {
            ...b,
            ref: r,
            className: (0, de.default)(c.className, `Focusable`),
          },
          o,
        )
  );
}
function Z(e, t) {
  let n = bn(e);
  return E.forwardRef(function (r, i) {
    return Tn(e, n, r, i, t);
  });
}
function En(e) {
  let t = bn(e);
  return E.forwardRef(function (n, r) {
    let {
        virtualKeyboardProps: i,
        props: { refKeyboardHandle: a, ...o },
      } = Qt(n),
      s = Xt(i, a),
      c = y(r, s);
    return Tn(e, t, o, c);
  });
}
function Dn() {
  return E.createRef();
}
var On = Z(`div`, { bDOMElementFocusByDefault: !1 }),
  kn = Z(`button`, { bActivateByDefault: (e) => e.type === `submit` }),
  An = Z(`a`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  jn = E.forwardRef(function (e, t) {
    let { href: n = `#`, ...r } = e;
    return (0, N.jsx)(An, { ref: t, href: n, ...r });
  }),
  Mn = En(`input`),
  Nn = En(`textarea`),
  Pn = Z(`img`, { bDOMElementFocusByDefault: !1 });
(Z(`label`, { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  Z(`section`, { bFocusableByDefault: !1 }),
  Z(`form`, { bFocusableByDefault: !1 }),
  Z(`summary`, { bActivateByDefault: !0 }),
  Z(`details`, { bFocusableByDefault: !1 }));
function Fn(e) {
  let { Component: t, children: n } = e,
    r = E.useMemo(() => ({ Component: t }), [t]);
  return (0, N.jsx)(wn, { value: r, children: n });
}
function In(e, t, n = !1) {
  E.useEffect(() => {
    let r = e.current;
    r && (t ? r.Activate(n) : r.Deactivate());
  }, [t, n, e]);
}
var Ln = `sT2QLMTaLYc-`,
  Rn = `DfVfulWxy6w-`,
  zn = `am1KoA5n2i8-`,
  Bn = `riNSinMchNA-`,
  Vn = `HVVNV2EsOwg-`,
  Hn = e(n());
function Un(e) {
  let { divProps: t, tooltipProps: n } = Q({
    ...e,
    toolTipContent: e.toolTipContent
      ? (0, N.jsx)(Xn, { children: Jn(e.toolTipContent) })
      : null,
  });
  return (0, N.jsxs)(On, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: e.bNavStop ?? !!t.onClick,
    ...t,
    children: [(0, N.jsx)($, { ...n }), e.children],
  });
}
function Wn(e) {
  let { divProps: t, tooltipProps: n } = Q(e);
  return (0, N.jsxs)(On, {
    className: `tool-tip-source`,
    noFocusRing: !0,
    focusable: e.bNavStop ?? !!t.onClick,
    ...t,
    children: [(0, N.jsx)($, { ...n }), e.children],
  });
}
function Gn(e) {
  let { divProps: t, tooltipProps: n } = Q(e);
  return (0, N.jsxs)(`rect`, {
    ...t,
    children: [
      (0, N.jsx)($, { ...n, bPortalToBody: n.bPortalToBody ?? !0 }),
      e.children,
    ],
  });
}
function Kn(e) {
  let { children: t } = e,
    { divProps: n, tooltipProps: r } = Q({
      ...e,
      toolTipContent: e.toolTipContent
        ? (0, N.jsx)(Xn, { children: Jn(e.toolTipContent) })
        : null,
    });
  return (0, N.jsxs)(N.Fragment, {
    children: [
      E.cloneElement(t, { ...n, ...t.props }),
      (0, N.jsx)($, { ...r }),
    ],
  });
}
function qn(e) {
  let { children: t } = e,
    { divProps: n, tooltipProps: r } = Q(e);
  return (0, N.jsxs)(N.Fragment, {
    children: [
      E.cloneElement(t, { ...n, ...t.props }),
      (0, N.jsx)($, { ...r }),
    ],
  });
}
function Q(e) {
  let {
      toolTipContent: t,
      nDelayShowMS: n = 300,
      bDisabled: r,
      bPortalToBody: i,
      direction: a,
      nBodyAlignment: o,
      nBodyDistance: s,
      nAllowOffscreenPx: c,
      nMaxLateralMoveOnScreen: l,
      strTooltipClassname: u,
      bNavStop: d,
      bTopmost: f,
      usePointerEvents: p,
      children: m,
      onMouseLeave: h,
      ...g
    } = e,
    _ = {
      direction: a,
      nBodyAlignment: o,
      nBodyDistance: s,
      nAllowOffscreenPx: c,
      nMaxLateralMoveOnScreen: l,
      className: u,
      bTopmost: f,
    },
    [v, y] = E.useState(!1),
    [b, x] = E.useState(),
    S = E.useCallback(
      (e) => {
        (p && `pointerType` in e && e.pointerType != `mouse`) ||
          (y(!0), x(e.currentTarget));
      },
      [p],
    ),
    C = E.useCallback(() => {
      y(!1);
    }, []);
  E.useEffect(() => {
    r && v && y(!1);
  }, [r, v]);
  let w = {
      active: v && !r,
      target: b,
      bPortalToBody: i,
      nDelayShowMS: n,
      hoverPositionProps: _,
      children: t,
    },
    T = { ...g };
  return (
    p
      ? ((T.onPointerEnter = S), (T.onPointerLeave = C))
      : ((T.onMouseEnter = S), (T.onMouseLeave = C)),
    {
      divProps: T,
      stateHandlers: { setTarget: x, setHovered: y },
      tooltipProps: w,
    }
  );
}
function Jn(e) {
  return e;
}
function Yn(e) {
  let { divProps: t, tooltipProps: n, stateHandlers: r } = Q(e);
  return { divProps: t, stateHandlers: r, tooltip: (0, N.jsx)($, { ...n }) };
}
function Xn(e) {
  return (0, N.jsx)(`div`, { ...e, className: b(Ln, e.className) });
}
function Zn(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`div`, { className: b(Rn, t), ...n });
}
function Qn(e) {
  let { className: t, center: n, ...r } = e;
  return (0, N.jsx)(`div`, { className: b(zn, n ? Bn : ``, t), ...r });
}
function $n(e) {
  let { className: t, ...n } = e;
  return (0, N.jsx)(`div`, { className: b(Vn, t), ...n });
}
function $(e) {
  let {
      active: t,
      target: n,
      bPortalToBody: r,
      nDelayShowMS: i = 300,
      hoverPositionProps: a,
      children: o,
    } = e,
    [s, c] = E.useState(t);
  if (
    (E.useEffect(() => {
      if (t) {
        if (i) {
          let e = window.setTimeout(() => c(!0), i);
          return () => window.clearTimeout(e);
        }
        c(!0);
      } else {
        if (w()) return;
        c(!1);
      }
    }, [t]),
    !s || !o || !n)
  )
    return null;
  let l = (0, N.jsx)(oe, { target: n, ...a, children: o });
  return r ? Hn.createPortal(l, n.ownerDocument.body) : l;
}
export {
  nt as $,
  pn as A,
  j as At,
  J as B,
  xn as C,
  ue as Ct,
  _n as D,
  O as Dt,
  gn as E,
  D as Et,
  Y as F,
  T as Ft,
  Pt as G,
  Lt as H,
  tn as I,
  lt as J,
  Ft as K,
  Yt as L,
  on as M,
  ne as Mt,
  sn as N,
  re as Nt,
  ln as O,
  k as Ot,
  en as P,
  w as Pt,
  at as Q,
  Zt as R,
  yn as S,
  fe as St,
  X as T,
  A as Tt,
  It as U,
  Wt as V,
  q as W,
  st as X,
  ct as Y,
  it as Z,
  Nn as _,
  _e as _t,
  Un as a,
  Ge as at,
  Sn as b,
  ve as bt,
  Xn as c,
  xe as ct,
  Dn as d,
  Se as dt,
  et,
  jn as f,
  R as ft,
  Mn as g,
  ze as gt,
  Pn as h,
  Le as ht,
  $n as i,
  H as it,
  rn as j,
  te as jt,
  cn as k,
  ee as kt,
  Qn as l,
  ye as lt,
  On as m,
  I as mt,
  Kn as n,
  Qe as nt,
  Wn as o,
  Ke as ot,
  kn as p,
  Ie as pt,
  Ot as q,
  qn as r,
  Ze as rt,
  Gn as s,
  Ve as st,
  Zn as t,
  $e as tt,
  Yn as u,
  be as ut,
  Fn as v,
  F as vt,
  mn as w,
  oe as wt,
  vn as x,
  pe as xt,
  In as y,
  ge as yt,
  Kt as z,
};
