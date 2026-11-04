var _ = _(_(), 1),
  _ = (0, _.createContext)({
    ownerWindow: window,
  }),
  _ = () => (0, _.useContext)(_);
function _(_) {
  let { ownerWindow: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        ownerWindow: _,
      }),
      [_],
    );
  return (0, _.createElement)(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  let { ownerWindow: _ } = _(),
    _ = typeof _.matchMedia == `function` ? _.matchMedia : _,
    _ = (0, _.useMemo)(() => _(_), [_, _]),
    [_, _] = (0, _.useState)(_ ? _.matches : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) return () => {};
      _(_.matches);
      function _(_) {
        _(_.matches);
      }
      return (
        _.addEventListener(`change`, _),
        () => _.removeEventListener(`change`, _)
      );
    }, [_]),
    _
  );
}
function _() {
  return null;
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.version || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            version: {
              _: 1,
              _: _.readEnum,
              _: _.writeEnum,
            },
            preference_state: {
              _: 2,
              _: _.readEnum,
              _: _.writeEnum,
            },
            content_customization: {
              _: 3,
              _: _,
            },
            valve_analytics: {
              _: 4,
              _: _,
            },
            third_party_analytics: {
              _: 5,
              _: _,
            },
            third_party_content: {
              _: 6,
              _: _,
            },
            utm_enabled: {
              _: 7,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recentapps || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recentapps: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ContentCustomization`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product_impressions_tracking || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            product_impressions_tracking: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ValveAnalytics`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.google_analytics || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            google_analytics: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyAnalytics`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.youtube || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            youtube: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            vimeo: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            sketchfab: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            twitter: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacyCookiePreferences_ThirdPartyContent`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferences || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            preferences: {
              _: 1,
              _: _,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CAccountPrivacy_GetCookiePreferences_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`AccountPrivacy.GetCookiePreferences#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`, `help`, `community`],
    });
  }
  _.GetCookiePreferences = _;
})((_ ||= {}));
function _(_) {
  if (_.preferenceControls.isTechnicallyNecessary) return !0;
  let _ = _();
  if (!_) return !1;
  switch (_.preference_state) {
    case 1:
    case 0:
      return !0;
    case 2:
    case 4:
      return !1;
  }
  return (
    `IsAllowed` in _.preferenceControls && _.preferenceControls.IsAllowed(_)
  );
}
var _ = {
    name: `cookieSettings`,
    options: {
      secure: !0,
      httpOnly: !1,
      path: `/`,
      sameSite: `none`,
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `shoppingCartGID`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 6048e5,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `steamLoginSpoofSteamID`,
    options: {
      path: `/`,
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: `clientHints`,
    options: {
      path: `/`,
      secure: !0,
      httpOnly: !1,
      maxAge: 31536e6,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_) {
  if (!(`document` in globalThis) || !document.cookie) return;
  let _ = document.cookie.match(`(^|; )` + _.name + `=([^;]*)`);
  if (_ && _[2]) return decodeURIComponent(_[2]);
}
function _(_, _) {
  if (!(`document` in globalThis) || !_(_)) return;
  let _ = _.options?.path ?? `/`,
    _ = ``;
  _.options?.expires
    ? (_ += `;expires=` + _.options.expires.toUTCString())
    : _.options?.maxAge &&
      (_ += `;max-age=` + Math.floor(_.options.maxAge / 1e3)),
    _.options?.secure && (_ += `;secure`),
    (document.cookie =
      encodeURIComponent(_.name) +
      `=` +
      encodeURIComponent(_) +
      _ +
      `;path=` +
      _);
}
function _(_) {
  return _(
    {
      ..._,
      options: {
        ..._.options,
        expires: new Date(0),
      },
    },
    ``,
  );
}
function _() {
  return window.SSR?.renderContext?.cookiePrefs;
}
var _ = 390,
  _ = 800,
  _ = 1280;
function _(_, _) {
  let _ = _ ?? ``;
  return _ || /Mobi|iPhone|iPod/.test(_)
    ? _
    : /iPad|Android|Tablet/.test(_)
      ? _
      : _;
}
function _() {
  let _ = {},
    _ = _(_);
  if (_)
    try {
      let _ = JSON.parse(_);
      _ &&
        typeof _ == `object` &&
        (_(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportWidth = {
            value: _._._,
            source: _._._,
          }),
        _(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportHeight = {
            value: _._._,
            source: _._._,
          }));
    } catch (_) {
      console.error(`Failed to parse existing client hints cookie: "${_}"`);
    }
  return _;
}
function _(_) {
  let _ = {};
  _.viewportWidth &&
    (_._ = {
      _: _.viewportWidth.value,
      _: _.viewportWidth.source,
    }),
    _.viewportHeight &&
      (_._ = {
        _: _.viewportHeight.value,
        _: _.viewportHeight.source,
      }),
    Object.keys(_).length === 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_, _) {
  if (!_ || typeof _ != `object`) return !1;
  let _ = _;
  return typeof _._ != `number` || _._ === void 0
    ? !1
    : typeof _ == `string`
      ? typeof _._ === _
      : _(_._);
}
function _() {
  let _ = _();
  if (!_.viewportWidth) {
    let _ = navigator.userAgentData;
    _.viewportWidth = {
      value: _(navigator.userAgent, _?.mobile),
      source: _.Guess,
    };
  }
  return _;
}
var _ = _(),
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Header = 1)] = `Header`),
      (_[(_.Measured = 2)] = `Measured`),
      (_[(_.Guess = 3)] = `Guess`),
      _
    );
  })({}),
  _ = (0, _.createContext)({});
function _(_) {
  let [_] = (0, _.useState)(_);
  return (
    (0, _.useEffect)(() => {
      let _ = _.viewportWidth?.source !== 1,
        _ = _.viewportHeight?.source !== 1;
      if (!_ && !_) return () => {};
      let _ = () =>
        _({
          ..._,
          viewportWidth: _
            ? {
                value: window.innerWidth,
                source: 2,
              }
            : _.viewportWidth,
          viewportHeight: _
            ? {
                value: window.innerHeight,
                source: 2,
              }
            : _.viewportHeight,
        });
      _();
      let _,
        _ = () => {
          clearTimeout(_), (_ = setTimeout(_, 250));
        };
      return (
        window.addEventListener(`resize`, _),
        () => {
          clearTimeout(_), window.removeEventListener(`resize`, _);
        }
      );
    }, [_]),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.useContext)(_);
}
var _ = [`initial`, `xs`, `sm`, `md`, `lg`],
  _ = (0, _.createContext)({
    _: 375,
    _: 768,
    _: 940,
    _: 1240,
    _: `lg`,
  });
function _(_ = {}) {
  let _ = (0, _.useContext)(_),
    _ = _._ ?? _._,
    _ = _._ ?? _._,
    _ = _._ ?? _._,
    _ = _._ ?? _._;
  return (0, _.useMemo)(
    () => ({
      _: _,
      _: _,
      _: _,
      _: _,
    }),
    [_, _, _, _],
  );
}
function _(_) {
  let { _: _, breakpoints: _, children: _ } = _,
    { _: _, _: _, _: _, _: _ } = _(_),
    _ = (0, _.useMemo)(
      () => ({
        _: _,
        _: _,
        _: _,
        _: _,
        _: _,
      }),
      [_, _, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _, breakpoints: _ } = _,
    _ = _(_),
    _ = _(_);
  return (0, _.jsx)(_, {
    _: _,
    breakpoints: _,
    children: _,
  });
}
function _(_) {
  let { formFactor: _, children: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useMemo)(
      () => ({
        ..._,
        _: _ ?? _._,
      }),
      [_, _],
    );
  return _
    ? (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => _(!0), []);
  let _ = _();
  return _
    ? _
      ? `lg`
      : _
        ? `md`
        : _
          ? `sm`
          : _
            ? `xs`
            : `initial`
    : _.viewportWidth
      ? _.viewportWidth.value >= _._
        ? `lg`
        : _.viewportWidth.value >= _._
          ? `md`
          : _.viewportWidth.value >= _._
            ? `sm`
            : _.viewportWidth.value >= _._
              ? `xs`
              : `initial`
      : `lg`;
}
function _() {
  return (0, _.useContext)(_)._;
}
_.reduce((_, _, _) => ((_[_] = _), _), {});
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
      return _(_, `Unhandled flow-children: ${_}`), _.NONE;
  }
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
  _ === void 0 &&
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
    }, _);
}
function _(_) {
  return _.stopPropagation(), !1;
}
function _(_, _, _) {
  let { onButtonDown: _, ..._ } = _,
    _ = _.useCallback(
      (_) => {
        _ && _(_),
          _(
            `Gamepad Event fired:`,
            _.detail.button,
            `, handled:`,
            _ != null,
            `, propagation stopped:`,
            _.cancelBubble,
          ),
          !_.cancelBubble && _.OnRootButtonDown(_);
      },
      [_, _],
    );
  _(_, _),
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
    );
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
  _(_.OnActivateCallbacks, _),
    _(_.OnDeactivateCallbacks, _),
    _(_, _, _),
    _.useLayoutEffect(() => {
      let _ = _(_);
      _.Root.SetProperties({
        ..._,
        layout: _,
      });
    });
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
      _(!1), _(!1);
      return;
    }
    _(_.BIsActive()), _(_.BIsActiveWithinWindow());
    let _ = _.OnActiveStateChangedCallbacks.Register(() => {
        _(_.BIsActive()), _(_.BIsActiveWithinWindow());
      }),
      _ = _.OnActiveWithinWindowChangedCallbacks.Register(() =>
        _(_.BIsActiveWithinWindow()),
      );
    return () => {
      _.Unregister(), _.Unregister();
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
var _ = _(_(), 1),
  _ = _.createContext(null),
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
      if (_ && _) return _(_, _.CreateHandle()), () => _(_, null);
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
  _.onOKButton ||
    (((`onClick` in _ && _.onClick) || (_ && (_ === !0 || _(_)))) &&
      (_.onOKButton = _)),
    _.focusable && !_
      ? (_.tabIndex = _.tabIndex || 0)
      : !_.focusable && _ && (_.tabIndex = _.tabIndex ?? -1),
    _(_, _);
  let _ = _(_),
    _ = _(_, _, _),
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
      _ = _(_, _),
      _ = _(_, _);
    return _(_, _, _, _);
  });
}
var _ = _.reduce((_, _, _) => ((_[_] = _), _), {});
function _(_, _) {
  if (typeof _ != `object`) return _;
  for (let _ = _[_]; _ >= 0; _--) if (_[_] in _) return _[_[_]];
  return _.initial;
}
var _ = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
};
function _(_) {
  return !!_[_];
}
function _(_, _, _) {
  let _ = [],
    _ = {},
    _ = {},
    { extracted: _, remaining: _ } = _(_, _);
  for (let _ of _) {
    if (!(_.prop in _)) continue;
    let _ = _[_.prop];
    if (
      _ !== void 0 &&
      (_.responsive && (_ = _(_, _.formFactor)), _ !== void 0)
    ) {
      if (_.className) {
        if (
          !_.cssProperty &&
          !_.dataProperty &&
          typeof _.className == `string` &&
          !_
        )
          continue;
        let _ = typeof _.className == `function` ? _.className(_) : _.className;
        _.push(_);
      }
      if (_.cssProperty) {
        if (typeof _.cssProperty == `function`) {
          let _ = _.cssProperty(_, _, _.formFactor);
          if (_.length && Array.isArray(_[0]))
            _.forEach(([_, _]) => (_[_] = _));
          else {
            let _ = _;
            _[_[0]] = _[1];
          }
        } else _[_.cssProperty] = _;
      }
      if (_.dataProperty) {
        if (typeof _.dataProperty == `function`) {
          let [_, _] = _.dataProperty(_);
          _[`data-${_}`] = _;
        } else _[`data-${_.dataProperty}`] = _;
      }
    }
  }
  return (
    `className` in _ && typeof _.className == `string` && _.push(_.className),
    `style` in _ &&
      _.style &&
      typeof _.style == `object` &&
      Object.assign(_, _.style),
    {
      ..._,
      ..._,
      className: _.join(` `),
      style: _,
    }
  );
}
function _(_, _) {
  let _ = {
    remaining: {
      ..._,
    },
    extracted: {},
  };
  for (let _ of _) {
    let _ = _.prop;
    _ in _.remaining &&
      ((_.extracted[_] = _.remaining[_]), delete _.remaining[_]);
  }
  return _;
}
function _(_, _) {
  return _(_, _, {
    formFactor: _(),
  });
}
function _(_) {
  return _(_) ? `var(--spacing-${_})` : _;
}
function _(_) {
  if (_[_.length - 1] != `%`) return `var(--color-${_})`;
  let [_, _] = _.split(` `);
  return `rgb( from ${`var(--color-${_})`} r g b / ${_} )`;
}
function _(_, _) {
  return _.startsWith(`text`) ? `var(--color-${_}-${_})` : _(_);
}
function _(_) {
  return _.startsWith(`text`) ? `var(--color-${_})` : _(_);
}
var _ = _({
    AlignSelf: () => _,
    AspectRatio: () => _,
    Background: () => _,
    Border: () => _,
    BorderColor: () => _,
    Cursor: () => _,
    Display: () => _,
    Elevation: () => _,
    FlexBasis: () => _,
    FlexGrow: () => _,
    FlexShrink: () => _,
    GridArea: () => _,
    GridColumn: () => _,
    GridColumnEnd: () => _,
    GridColumnStart: () => _,
    GridRow: () => _,
    GridRowEnd: () => _,
    GridRowStart: () => _,
    Height: () => _,
    Inset: () => _,
    JustifySelf: () => _,
    MaxHeight: () => _,
    MaxWidth: () => _,
    MinHeight: () => _,
    MinWidth: () => _,
    Outline: () => _,
    Overflow: () => _,
    Position: () => _,
    "Radius-full": () => _,
    "Radius-lg": () => _,
    "Radius-md": () => _,
    "Radius-none": () => _,
    "Radius-sm": () => _,
    TextAlign: () => _,
    Width: () => _,
    ZIndex: () => _,
    default: () => _,
    "m-0": () => _,
    "m-1": () => _,
    "m-2": () => _,
    "m-3": () => _,
    "m-4": () => _,
    "m-5": () => _,
    "m-6": () => _,
    "m-7": () => _,
    "m-8": () => _,
    "m-9": () => _,
    "mb-0": () => _,
    "mb-1": () => _,
    "mb-2": () => _,
    "mb-3": () => _,
    "mb-4": () => _,
    "mb-5": () => _,
    "mb-6": () => _,
    "mb-7": () => _,
    "mb-8": () => _,
    "mb-9": () => _,
    "me-0": () => _,
    "me-1": () => _,
    "me-2": () => _,
    "me-3": () => _,
    "me-4": () => _,
    "me-5": () => _,
    "me-6": () => _,
    "me-7": () => _,
    "me-8": () => _,
    "me-9": () => _,
    "ml-0": () => _,
    "ml-1": () => _,
    "ml-2": () => _,
    "ml-3": () => _,
    "ml-4": () => _,
    "ml-5": () => _,
    "ml-6": () => _,
    "ml-7": () => _,
    "ml-8": () => _,
    "ml-9": () => _,
    "mr-0": () => _,
    "mr-1": () => _,
    "mr-2": () => _,
    "mr-3": () => _,
    "mr-4": () => _,
    "mr-5": () => _,
    "mr-6": () => _,
    "mr-7": () => _,
    "mr-8": () => _,
    "mr-9": () => _,
    "ms-0": () => _,
    "ms-1": () => _,
    "ms-2": () => _,
    "ms-3": () => _,
    "ms-4": () => _,
    "ms-5": () => _,
    "ms-6": () => _,
    "ms-7": () => _,
    "ms-8": () => _,
    "ms-9": () => _,
    "mt-0": () => _,
    "mt-1": () => _,
    "mt-2": () => _,
    "mt-3": () => _,
    "mt-4": () => _,
    "mt-5": () => _,
    "mt-6": () => _,
    "mt-7": () => _,
    "mt-8": () => _,
    "mt-9": () => _,
    "mx-0": () => _,
    "mx-1": () => _,
    "mx-2": () => _,
    "mx-3": () => _,
    "mx-4": () => _,
    "mx-5": () => _,
    "mx-6": () => _,
    "mx-7": () => _,
    "mx-8": () => _,
    "mx-9": () => _,
    "my-0": () => _,
    "my-1": () => _,
    "my-2": () => _,
    "my-3": () => _,
    "my-4": () => _,
    "my-5": () => _,
    "my-6": () => _,
    "my-7": () => _,
    "my-8": () => _,
    "my-9": () => _,
    "p-0": () => _,
    "p-1": () => _,
    "p-2": () => _,
    "p-3": () => _,
    "p-4": () => _,
    "p-5": () => _,
    "p-6": () => _,
    "p-7": () => _,
    "p-8": () => _,
    "p-9": () => _,
    "pb-0": () => _,
    "pb-1": () => _,
    "pb-2": () => _,
    "pb-3": () => _,
    "pb-4": () => _,
    "pb-5": () => _,
    "pb-6": () => _,
    "pb-7": () => _,
    "pb-8": () => _,
    "pb-9": () => _,
    "pe-0": () => _,
    "pe-1": () => _,
    "pe-2": () => _,
    "pe-3": () => _,
    "pe-4": () => _,
    "pe-5": () => _,
    "pe-6": () => _,
    "pe-7": () => _,
    "pe-8": () => _,
    "pe-9": () => _,
    "pl-0": () => _,
    "pl-1": () => _,
    "pl-2": () => _,
    "pl-3": () => _,
    "pl-4": () => _,
    "pl-5": () => _,
    "pl-6": () => _,
    "pl-7": () => _,
    "pl-8": () => _,
    "pl-9": () => _,
    "pr-0": () => _,
    "pr-1": () => _,
    "pr-2": () => _,
    "pr-3": () => _,
    "pr-4": () => _,
    "pr-5": () => _,
    "pr-6": () => _,
    "pr-7": () => _,
    "pr-8": () => _,
    "pr-9": () => _,
    "ps-0": () => _,
    "ps-1": () => _,
    "ps-2": () => _,
    "ps-3": () => _,
    "ps-4": () => _,
    "ps-5": () => _,
    "ps-6": () => _,
    "ps-7": () => _,
    "ps-8": () => _,
    "ps-9": () => _,
    "pt-0": () => _,
    "pt-1": () => _,
    "pt-2": () => _,
    "pt-3": () => _,
    "pt-4": () => _,
    "pt-5": () => _,
    "pt-6": () => _,
    "pt-7": () => _,
    "pt-8": () => _,
    "pt-9": () => _,
    "px-0": () => _,
    "px-1": () => _,
    "px-2": () => _,
    "px-3": () => _,
    "px-4": () => _,
    "px-5": () => _,
    "px-6": () => _,
    "px-7": () => _,
    "px-8": () => _,
    "px-9": () => _,
    "py-0": () => _,
    "py-1": () => _,
    "py-2": () => _,
    "py-3": () => _,
    "py-4": () => _,
    "py-5": () => _,
    "py-6": () => _,
    "py-7": () => _,
    "py-8": () => _,
    "py-9": () => _,
  }),
  _ = `w5rs5VUtqFs-`,
  _ = `g4GlqMn58vY-`,
  _ = `RNzX415MY5w-`,
  _ = `T3wV4ZF6a-8-`,
  _ = `C-qRvgvhL88-`,
  _ = `CECtQVs0hmk-`,
  _ = `VA3jqF97G1I-`,
  _ = `eOHhF9JEaqw-`,
  _ = `fbxSlkkAKmo-`,
  _ = `QTi2dgftDb4-`,
  _ = `BCxX4tRR9r8-`,
  _ = `z5X-uRo7RYk-`,
  _ = `mZv3sW5BcQU-`,
  _ = `qNfZ-pXziDU-`,
  _ = `MUBXBrhzmYo-`,
  _ = `kltjXWxkqmk-`,
  _ = `g5QMfwuDJbs-`,
  _ = `W7WH3WvdMIQ-`,
  _ = `WjyIDDcwaEs-`,
  _ = `NTncKR3C-nw-`,
  _ = `aIEPjFKYU7Q-`,
  _ = `XjYOfDgYiDI-`,
  _ = `-WLDzX6sZ1c-`,
  _ = `KzG785u-MVA-`,
  _ = `zcy-nu5Y7oY-`,
  _ = `_23A1JqJkZ80-`,
  _ = `ZuBL31T8uos-`,
  _ = `HJrs-xcybNI-`,
  _ = `QB8mQAFkHP4-`,
  _ = `gm7sdRBqn3I-`,
  _ = `tt3dIRigf34-`,
  _ = `TT8QgCjIXLo-`,
  _ = `AShqAv8lMaM-`,
  _ = `KHOD4K-lWWs-`,
  _ = `_8-2r7X-9hnE-`,
  _ = `L2Knd-UCOjk-`,
  _ = `M-j4g1Xmya4-`,
  _ = `XreHVHL4zXQ-`,
  _ = `qq3Eu69u9WE-`,
  _ = `I1bipZ6b-4k-`,
  _ = `lsqT91cdaCw-`,
  _ = `DyPZltyVrD4-`,
  _ = `SouQdhH0fRU-`,
  _ = `_0NepstgWiQY-`,
  _ = `SVu3xoHRe-Y-`,
  _ = `JNPCPeTNFV8-`,
  _ = `Yfif-cx8UbE-`,
  _ = `_0HdSntLV510-`,
  _ = `kvV2CYYt8bM-`,
  _ = `j50Upa6nlqc-`,
  _ = `mbVjuhovBZI-`,
  _ = `qRCv3UXpHJY-`,
  _ = `rFurYHdyDxI-`,
  _ = `Oju0VmCZMsM-`,
  _ = `HCeCAFFa1q4-`,
  _ = `gF6WAclx2OU-`,
  _ = `rS274Gvanvg-`,
  _ = `vy0J0s5Lg8Y-`,
  _ = `Bg8uIbKEp8Q-`,
  _ = `X1rwlfepcLg-`,
  _ = `_2zMyZE3ZmjY-`,
  _ = `_4-tbrlayusY-`,
  _ = `MkRCnp5Xbck-`,
  _ = `heqfukxif1M-`,
  _ = `LB7rgg0M8CU-`,
  _ = `T5cYKgCZ-Mg-`,
  _ = `JRS1VdJsMK8-`,
  _ = `t8UtAI4kjpk-`,
  _ = `DUN0iJECdTA-`,
  _ = `_9Dd8ZB24xlo-`,
  _ = `_5UYjkiyqSmo-`,
  _ = `yqht9s9HtRY-`,
  _ = `hAMV-Q2rsIk-`,
  _ = `rwibIp0bzlw-`,
  _ = `gLIriR1ZwJ8-`,
  _ = `QwiBfjR-QQQ-`,
  _ = `AkcucKz6oYU-`,
  _ = `LNOc2K-RNWk-`,
  _ = `D9ISJ-ArsJA-`,
  _ = `yCM1UgcTF-c-`,
  _ = `jLpkzkqlYPA-`,
  _ = `nKRRwdISCYw-`,
  _ = `Mmkh0xAV8wo-`,
  _ = `LsiF1k1YPw4-`,
  _ = `syM4yD7IgAI-`,
  _ = `FEnh-W-YS9M-`,
  _ = `aQ9Tq3IOyIM-`,
  _ = `n8Akps2WSMc-`,
  _ = `_337UeLDmO0U-`,
  _ = `K9afDZN3DqY-`,
  _ = `Uqx7bMoc86I-`,
  _ = `HGQJU2trIjI-`,
  _ = `_6a7OqoYm0ek-`,
  _ = `BPTxiJF58z0-`,
  _ = `kuTJDaZGbhc-`,
  _ = `ekE5QEU9qis-`,
  _ = `W5cnM6YiuGg-`,
  _ = `_36eiL2GCxdc-`,
  _ = `bg2aWTDQjjE-`,
  _ = `rtaLNEkGVUc-`,
  _ = `rGUMt0olzxA-`,
  _ = `Xz4pvEOFh0o-`,
  _ = `p9g1PKkM3Ww-`,
  _ = `QFIvh9bCMN0-`,
  _ = `O6W7VFmW1Gk-`,
  _ = `CDvHbFA-ong-`,
  _ = `QpfmwtZflNM-`,
  _ = `ukxUdF8EyFk-`,
  _ = `mlzVPT0aTpY-`,
  _ = `_5yyf7qQU2EA-`,
  _ = `puTmakBZfLc-`,
  _ = `l8VUJcr5dTA-`,
  _ = `iOFry8XK9Bk-`,
  _ = `RZnhXOOlOQo-`,
  _ = `hQRIBSbzp-8-`,
  _ = `_7nBh3BZ8VvY-`,
  _ = `I4rQY8f-GIw-`,
  _ = `eer95TRaYk4-`,
  _ = `FDrdQF3KM-U-`,
  _ = `pRA8Q7qGzTY-`,
  _ = `FFBr0ByyARU-`,
  _ = `J21MfjeVMC8-`,
  _ = `QIsWaCMFXmc-`,
  _ = `b26A0qH-t1k-`,
  _ = `_4Z5STus6z18-`,
  _ = `TsJuUJvIPNE-`,
  _ = `UuWQgm9mEt8-`,
  _ = `_9zwRENgMM7U-`,
  _ = `ZwKtYczJCNk-`,
  _ = `Kpfuq2Gl7Xs-`,
  _ = `Hrw1ft6vTkI-`,
  _ = `NoAm1DVKxEk-`,
  _ = `VcioKyIycu0-`,
  _ = `IjYixBsfu2Y-`,
  _ = `Nn2r0kiUlfE-`,
  _ = `uxvF0PjRd-Y-`,
  _ = `J5qFoqtoxro-`,
  _ = `nrUcorXVvEM-`,
  _ = `ks6z1ep2Y44-`,
  _ = `JT1KIcEr8Kk-`,
  _ = `_8tpU-abEyso-`,
  _ = `X5qiaGoP3kY-`,
  _ = `OyasUwc2EeY-`,
  _ = `wxJDuaKleHc-`,
  _ = `oVW63SwGfjs-`,
  _ = `r3Usx8aC7Xk-`,
  _ = `i5Jcp8GZSNo-`,
  _ = `VZJqberXdMM-`,
  _ = `upTGPf2KqZ4-`,
  _ = `MPozSm4qVFY-`,
  _ = `-Y-DxD6M4sA-`,
  _ = `qrMutaq-kis-`,
  _ = `wqHfbc-N9jI-`,
  _ = `XOapdyqqFZY-`,
  _ = `FWMUiZAggPQ-`,
  _ = `bY9YWc9yXb0-`,
  _ = `akDBluC2fQ8-`,
  _ = `AgRNCaRK1xA-`,
  _ = `Vrhv3jy8mr0-`,
  _ = `Vv8wFNJlNHU-`,
  _ = `X63rlWc9H5w-`,
  _ = `CoNPpz6bZDE-`,
  _ = `_3d-Fo75Eam4-`,
  _ = `_7TqbpiMDshY-`,
  _ = `IKIhkIfeBkM-`,
  _ = `F820uu3Xk-k-`,
  _ = `bsyWV8OPlCw-`,
  _ = `psGnn3Whm8A-`,
  _ = `TzV5RPJetTM-`,
  _ = `_6InTmlPK4R8-`,
  _ = `DmFGApvpeAk-`,
  _ = `PoAm6tiL5gs-`,
  _ = `UsFYDKAV0RE-`,
  _ = `L-MPaemnE2g-`,
  _ = `KNaLQ4ZSYMw-`,
  _ = `Ya3tAxiRhCE-`,
  _ = `XZ-mGQrOcFo-`,
  _ = `aYaz0ArE0Hs-`,
  _ = `atzaOLKehM4-`,
  _ = `ixS9WWgw-6s-`,
  _ = `qQUo7p9Yflo-`,
  _ = `_8JrgJ7Yp4GE-`,
  _ = `PwGZnF9BFA8-`,
  _ = `_8nvwc5hEUQ8-`,
  _ = `MLQK2SbHPJw-`,
  _ = `JC93XoyfrHk-`,
  _ = `tNCLz4rNyo4-`,
  _ = `_1WHxiF6PoO0-`,
  _ = `RUtZWmuOvVA-`,
  _ = `Hno88hYynSk-`,
  _ = `_-1PRvvg35hk-`,
  _ = `fkygYJ-STNo-`,
  _ = `l14cTwBB-3M-`,
  _ = `JYcrgOODCYo-`,
  _ = `SxMdVrGe9aY-`,
  _ = `ehjQMAdlrkI-`,
  _ = `Lv9Zktkdcxg-`,
  _ = `JMTVGyCiKUY-`,
  _ = `hR7hXQL-vkk-`,
  _ = `wfXyPs34OqM-`,
  _ = `gjB5zsAeX0w-`,
  _ = `xhDerqZH7yo-`,
  _ = `xmiMYHV3x2I-`,
  _ = `ymRf7JUr0CQ-`,
  _ = `P5l1h4VfEfg-`,
  _ = `YXPNY9nRMaY-`,
  _ = `bNjs5-MBo98-`,
  _ = `GbL3w9xoEuc-`,
  _ = `kw4TEGGRPr0-`,
  _ = `ra3wrgNPAes-`,
  _ = `CKA4hzEc1lY-`,
  _ = `p9br-GQWd0U-`,
  _ = `FXoyqcp7Qdg-`,
  _ = `yw3rQRXDBL8-`,
  _ = `pOfXBkpqEd0-`,
  _ = `u9pg7wFmf8I-`,
  _ = {
    "m-0": `w5rs5VUtqFs-`,
    "m-1": `g4GlqMn58vY-`,
    "m-2": `RNzX415MY5w-`,
    "m-3": `T3wV4ZF6a-8-`,
    "m-4": `C-qRvgvhL88-`,
    "m-5": `CECtQVs0hmk-`,
    "m-6": `VA3jqF97G1I-`,
    "m-7": `eOHhF9JEaqw-`,
    "m-8": `fbxSlkkAKmo-`,
    "m-9": `QTi2dgftDb4-`,
    "mx-0": `BCxX4tRR9r8-`,
    "mx-1": `z5X-uRo7RYk-`,
    "mx-2": `mZv3sW5BcQU-`,
    "mx-3": `qNfZ-pXziDU-`,
    "mx-4": `MUBXBrhzmYo-`,
    "mx-5": `kltjXWxkqmk-`,
    "mx-6": `g5QMfwuDJbs-`,
    "mx-7": `W7WH3WvdMIQ-`,
    "mx-8": `WjyIDDcwaEs-`,
    "mx-9": `NTncKR3C-nw-`,
    "my-0": `aIEPjFKYU7Q-`,
    "my-1": `XjYOfDgYiDI-`,
    "my-2": `-WLDzX6sZ1c-`,
    "my-3": `KzG785u-MVA-`,
    "my-4": `zcy-nu5Y7oY-`,
    "my-5": `_23A1JqJkZ80-`,
    "my-6": `ZuBL31T8uos-`,
    "my-7": `HJrs-xcybNI-`,
    "my-8": `QB8mQAFkHP4-`,
    "my-9": `gm7sdRBqn3I-`,
    "mt-0": `tt3dIRigf34-`,
    "mt-1": `TT8QgCjIXLo-`,
    "mt-2": `AShqAv8lMaM-`,
    "mt-3": `KHOD4K-lWWs-`,
    "mt-4": `_8-2r7X-9hnE-`,
    "mt-5": `L2Knd-UCOjk-`,
    "mt-6": `M-j4g1Xmya4-`,
    "mt-7": `XreHVHL4zXQ-`,
    "mt-8": `qq3Eu69u9WE-`,
    "mt-9": `I1bipZ6b-4k-`,
    "mr-0": `lsqT91cdaCw-`,
    "mr-1": `DyPZltyVrD4-`,
    "mr-2": `SouQdhH0fRU-`,
    "mr-3": `_0NepstgWiQY-`,
    "mr-4": `SVu3xoHRe-Y-`,
    "mr-5": `JNPCPeTNFV8-`,
    "mr-6": `Yfif-cx8UbE-`,
    "mr-7": `_0HdSntLV510-`,
    "mr-8": `kvV2CYYt8bM-`,
    "mr-9": `j50Upa6nlqc-`,
    "mb-0": `mbVjuhovBZI-`,
    "mb-1": `qRCv3UXpHJY-`,
    "mb-2": `rFurYHdyDxI-`,
    "mb-3": `Oju0VmCZMsM-`,
    "mb-4": `HCeCAFFa1q4-`,
    "mb-5": `gF6WAclx2OU-`,
    "mb-6": `rS274Gvanvg-`,
    "mb-7": `vy0J0s5Lg8Y-`,
    "mb-8": `Bg8uIbKEp8Q-`,
    "mb-9": `X1rwlfepcLg-`,
    "ml-0": `_2zMyZE3ZmjY-`,
    "ml-1": `_4-tbrlayusY-`,
    "ml-2": `MkRCnp5Xbck-`,
    "ml-3": `heqfukxif1M-`,
    "ml-4": `LB7rgg0M8CU-`,
    "ml-5": `T5cYKgCZ-Mg-`,
    "ml-6": `JRS1VdJsMK8-`,
    "ml-7": `t8UtAI4kjpk-`,
    "ml-8": `DUN0iJECdTA-`,
    "ml-9": `_9Dd8ZB24xlo-`,
    "ms-0": `_5UYjkiyqSmo-`,
    "ms-1": `yqht9s9HtRY-`,
    "ms-2": `hAMV-Q2rsIk-`,
    "ms-3": `rwibIp0bzlw-`,
    "ms-4": `gLIriR1ZwJ8-`,
    "ms-5": `QwiBfjR-QQQ-`,
    "ms-6": `AkcucKz6oYU-`,
    "ms-7": `LNOc2K-RNWk-`,
    "ms-8": `D9ISJ-ArsJA-`,
    "ms-9": `yCM1UgcTF-c-`,
    "me-0": `jLpkzkqlYPA-`,
    "me-1": `nKRRwdISCYw-`,
    "me-2": `Mmkh0xAV8wo-`,
    "me-3": `LsiF1k1YPw4-`,
    "me-4": `syM4yD7IgAI-`,
    "me-5": `FEnh-W-YS9M-`,
    "me-6": `aQ9Tq3IOyIM-`,
    "me-7": `n8Akps2WSMc-`,
    "me-8": `_337UeLDmO0U-`,
    "me-9": `K9afDZN3DqY-`,
    "p-0": `Uqx7bMoc86I-`,
    "p-1": `HGQJU2trIjI-`,
    "p-2": `_6a7OqoYm0ek-`,
    "p-3": `BPTxiJF58z0-`,
    "p-4": `kuTJDaZGbhc-`,
    "p-5": `ekE5QEU9qis-`,
    "p-6": `W5cnM6YiuGg-`,
    "p-7": `_36eiL2GCxdc-`,
    "p-8": `bg2aWTDQjjE-`,
    "p-9": `rtaLNEkGVUc-`,
    "px-0": `rGUMt0olzxA-`,
    "px-1": `Xz4pvEOFh0o-`,
    "px-2": `p9g1PKkM3Ww-`,
    "px-3": `QFIvh9bCMN0-`,
    "px-4": `O6W7VFmW1Gk-`,
    "px-5": `CDvHbFA-ong-`,
    "px-6": `QpfmwtZflNM-`,
    "px-7": `ukxUdF8EyFk-`,
    "px-8": `mlzVPT0aTpY-`,
    "px-9": `_5yyf7qQU2EA-`,
    "py-0": `puTmakBZfLc-`,
    "py-1": `l8VUJcr5dTA-`,
    "py-2": `iOFry8XK9Bk-`,
    "py-3": `RZnhXOOlOQo-`,
    "py-4": `hQRIBSbzp-8-`,
    "py-5": `_7nBh3BZ8VvY-`,
    "py-6": `I4rQY8f-GIw-`,
    "py-7": `eer95TRaYk4-`,
    "py-8": `FDrdQF3KM-U-`,
    "py-9": `pRA8Q7qGzTY-`,
    "pt-0": `FFBr0ByyARU-`,
    "pt-1": `J21MfjeVMC8-`,
    "pt-2": `QIsWaCMFXmc-`,
    "pt-3": `b26A0qH-t1k-`,
    "pt-4": `_4Z5STus6z18-`,
    "pt-5": `TsJuUJvIPNE-`,
    "pt-6": `UuWQgm9mEt8-`,
    "pt-7": `_9zwRENgMM7U-`,
    "pt-8": `ZwKtYczJCNk-`,
    "pt-9": `Kpfuq2Gl7Xs-`,
    "pr-0": `Hrw1ft6vTkI-`,
    "pr-1": `NoAm1DVKxEk-`,
    "pr-2": `VcioKyIycu0-`,
    "pr-3": `IjYixBsfu2Y-`,
    "pr-4": `Nn2r0kiUlfE-`,
    "pr-5": `uxvF0PjRd-Y-`,
    "pr-6": `J5qFoqtoxro-`,
    "pr-7": `nrUcorXVvEM-`,
    "pr-8": `ks6z1ep2Y44-`,
    "pr-9": `JT1KIcEr8Kk-`,
    "pb-0": `_8tpU-abEyso-`,
    "pb-1": `X5qiaGoP3kY-`,
    "pb-2": `OyasUwc2EeY-`,
    "pb-3": `wxJDuaKleHc-`,
    "pb-4": `oVW63SwGfjs-`,
    "pb-5": `r3Usx8aC7Xk-`,
    "pb-6": `i5Jcp8GZSNo-`,
    "pb-7": `VZJqberXdMM-`,
    "pb-8": `upTGPf2KqZ4-`,
    "pb-9": `MPozSm4qVFY-`,
    "pl-0": `-Y-DxD6M4sA-`,
    "pl-1": `qrMutaq-kis-`,
    "pl-2": `wqHfbc-N9jI-`,
    "pl-3": `XOapdyqqFZY-`,
    "pl-4": `FWMUiZAggPQ-`,
    "pl-5": `bY9YWc9yXb0-`,
    "pl-6": `akDBluC2fQ8-`,
    "pl-7": `AgRNCaRK1xA-`,
    "pl-8": `Vrhv3jy8mr0-`,
    "pl-9": `Vv8wFNJlNHU-`,
    "ps-0": `X63rlWc9H5w-`,
    "ps-1": `CoNPpz6bZDE-`,
    "ps-2": `_3d-Fo75Eam4-`,
    "ps-3": `_7TqbpiMDshY-`,
    "ps-4": `IKIhkIfeBkM-`,
    "ps-5": `F820uu3Xk-k-`,
    "ps-6": `bsyWV8OPlCw-`,
    "ps-7": `psGnn3Whm8A-`,
    "ps-8": `TzV5RPJetTM-`,
    "ps-9": `_6InTmlPK4R8-`,
    "pe-0": `DmFGApvpeAk-`,
    "pe-1": `PoAm6tiL5gs-`,
    "pe-2": `UsFYDKAV0RE-`,
    "pe-3": `L-MPaemnE2g-`,
    "pe-4": `KNaLQ4ZSYMw-`,
    "pe-5": `Ya3tAxiRhCE-`,
    "pe-6": `XZ-mGQrOcFo-`,
    "pe-7": `aYaz0ArE0Hs-`,
    "pe-8": `atzaOLKehM4-`,
    "pe-9": `ixS9WWgw-6s-`,
    Width: _,
    MaxWidth: _,
    MinWidth: _,
    Height: _,
    MaxHeight: _,
    MinHeight: _,
    FlexBasis: _,
    FlexGrow: _,
    FlexShrink: _,
    "Radius-none": `Hno88hYynSk-`,
    "Radius-sm": `_-1PRvvg35hk-`,
    "Radius-md": `fkygYJ-STNo-`,
    "Radius-lg": `l14cTwBB-3M-`,
    "Radius-full": `JYcrgOODCYo-`,
    Cursor: _,
    Position: _,
    Inset: _,
    GridColumn: _,
    GridColumnStart: _,
    GridColumnEnd: _,
    GridRow: _,
    GridRowStart: _,
    GridRowEnd: _,
    GridArea: _,
    Background: _,
    Overflow: _,
    ZIndex: _,
    Display: _,
    Elevation: _,
    Border: _,
    BorderColor: _,
    Outline: _,
    AlignSelf: _,
    JustifySelf: _,
    TextAlign: _,
    AspectRatio: _,
  },
  _ = [
    {
      prop: `margin`,
      responsive: !0,
      className: (_) => _[`m-${_}`],
    },
    {
      prop: `marginX`,
      responsive: !0,
      className: (_) => _[`mx-${_}`],
    },
    {
      prop: `marginY`,
      responsive: !0,
      className: (_) => _[`my-${_}`],
    },
    {
      prop: `marginTop`,
      responsive: !0,
      className: (_) => _[`mt-${_}`],
    },
    {
      prop: `marginRight`,
      responsive: !0,
      className: (_) => _[`mr-${_}`],
    },
    {
      prop: `marginBottom`,
      responsive: !0,
      className: (_) => _[`mb-${_}`],
    },
    {
      prop: `marginLeft`,
      responsive: !0,
      className: (_) => _[`ml-${_}`],
    },
    {
      prop: `marginStart`,
      responsive: !0,
      className: (_) => _[`ms-${_}`],
    },
    {
      prop: `marginEnd`,
      responsive: !0,
      className: (_) => _[`me-${_}`],
    },
  ],
  _ = [
    ..._,
    {
      prop: `padding`,
      responsive: !0,
      className: (_) => _[`p-${_}`],
    },
    {
      prop: `paddingX`,
      responsive: !0,
      className: (_) => _[`px-${_}`],
    },
    {
      prop: `paddingY`,
      responsive: !0,
      className: (_) => _[`py-${_}`],
    },
    {
      prop: `paddingTop`,
      responsive: !0,
      className: (_) => _[`pt-${_}`],
    },
    {
      prop: `paddingRight`,
      responsive: !0,
      className: (_) => _[`pr-${_}`],
    },
    {
      prop: `paddingBottom`,
      responsive: !0,
      className: (_) => _[`pb-${_}`],
    },
    {
      prop: `paddingLeft`,
      responsive: !0,
      className: (_) => _[`pl-${_}`],
    },
    {
      prop: `paddingStart`,
      responsive: !0,
      className: (_) => _[`ps-${_}`],
    },
    {
      prop: `paddingEnd`,
      responsive: !0,
      className: (_) => _[`pe-${_}`],
    },
    {
      prop: `width`,
      responsive: !0,
      className: _,
      cssProperty: `--width`,
    },
    {
      prop: `minWidth`,
      responsive: !0,
      className: _,
      cssProperty: `--min-width`,
    },
    {
      prop: `maxWidth`,
      responsive: !0,
      className: _,
      cssProperty: `--max-width`,
    },
    {
      prop: `height`,
      responsive: !0,
      className: _,
      cssProperty: `--height`,
    },
    {
      prop: `minHeight`,
      responsive: !0,
      className: _,
      cssProperty: `--min-height`,
    },
    {
      prop: `maxHeight`,
      responsive: !0,
      className: _,
      cssProperty: `--max-height`,
    },
    {
      prop: `flexBasis`,
      responsive: !0,
      className: _,
      cssProperty: `--flex-basis`,
    },
    {
      prop: `flexGrow`,
      responsive: !0,
      className: _,
      cssProperty: `--flex-grow`,
    },
    {
      prop: `flexShrink`,
      responsive: !0,
      className: _,
      cssProperty: `--flex-shrink`,
    },
    {
      prop: `radius`,
      responsive: !0,
      className: (_) => _[`Radius-${_}`],
    },
    {
      prop: `cursor`,
      responsive: !0,
      className: _,
      cssProperty: `--cursor`,
    },
    {
      prop: `position`,
      responsive: !0,
      className: _,
      cssProperty: `--position`,
    },
    {
      prop: `inset`,
      responsive: !0,
      className: _,
      cssProperty: (_) => [`--inset`, _(_)],
    },
    {
      prop: `gridColumn`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-column`,
    },
    {
      prop: `gridColumnStart`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-column-start`,
    },
    {
      prop: `gridColumnEnd`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-column-end`,
    },
    {
      prop: `gridRow`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-row`,
    },
    {
      prop: `gridRowStart`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-row-start`,
    },
    {
      prop: `gridRowEnd`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-row-end`,
    },
    {
      prop: `gridArea`,
      responsive: !0,
      className: _,
      cssProperty: `--grid-area`,
    },
    {
      prop: `alignSelf`,
      responsive: !0,
      className: _,
      cssProperty: `--align-self`,
    },
    {
      prop: `justifySelf`,
      responsive: !0,
      className: _,
      cssProperty: `--justify-self`,
    },
    {
      prop: `background`,
      responsive: !0,
      className: _,
      cssProperty: (_) => [`--background`, _(_)],
    },
    {
      prop: `overflow`,
      responsive: !0,
      className: _,
      cssProperty: `--overflow`,
    },
    {
      prop: `zIndex`,
      responsive: !0,
      className: _,
      cssProperty: `--z-index`,
    },
    {
      prop: `display`,
      responsive: !0,
      className: _,
      cssProperty: `--display`,
    },
    {
      prop: `elevation`,
      responsive: !0,
      className: _,
      dataProperty: `elevation`,
    },
    {
      prop: `border`,
      responsive: !0,
      className: _,
      cssProperty: `--border`,
    },
    {
      prop: `borderColor`,
      responsive: !0,
      className: [_, _].join(` `),
      cssProperty: (_) => [`--border-color`, _(_)],
    },
    {
      prop: `outline`,
      responsive: !0,
      className: _,
      cssProperty: (_) => [`--outline-color`, _(_)],
    },
    {
      prop: `textAlign`,
      responsive: !0,
      className: _,
      cssProperty: `--text-align`,
    },
    {
      prop: `aspectRatio`,
      responsive: !0,
      className: _,
      cssProperty: `--aspect-ratio`,
    },
  ],
  _ = (0, _.createContext)({
    Button: `basic`,
    Checkbox: `basic`,
    Combobox: `basic`,
    LoadingSpinner: `basic`,
    SegmentedControl: `basic`,
    Select: `basic`,
    Tabs: `basic`,
    TextArea: `basic`,
    TextInput: `basic`,
  });
function _(_) {
  let { variants: _ = {}, children: _ } = _,
    _ = (0, _.use)(_);
  return (0, _.jsx)(_, {
    value: {
      ..._,
      ..._,
    },
    children: _,
  });
}
function _(_) {
  return (0, _.use)(_)[_];
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === "default" ? _ : _;
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
