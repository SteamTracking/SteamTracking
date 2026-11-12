import { _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _ } from "./chunk~16aefcf65f.js";
import { _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_()),
  _ = (_) => _ != null;
function _(_, _) {
  let [_, _] = _.useState(() => window.localStorage.getItem(_) ?? void 0),
    _ = _.useRef(_),
    _ = _.useCallback(
      (_) => {
        let _ = _(_) ? String(_) : void 0;
        (_ === void 0
          ? window.localStorage.removeItem(_)
          : window.localStorage.setItem(_, _),
          _(_),
          _.Get().GetLocalStoreChangeCallback(_).Dispatch(_));
      },
      [_, _],
    );
  _.useEffect(() => {
    _ != _.current &&
      (_(window.localStorage.getItem(_) ?? void 0), (_.current = _));
  }, [_]);
  let _ = _ == _.current ? _ : window.localStorage.getItem(_),
    _ = _;
  return (
    _(_) &&
      (_(_)
        ? typeof _ == `boolean`
          ? (_ = _.constructor(_ !== `false`))
          : _ != null && _ != null && (_ = _.constructor(_))
        : (_ = _)),
    _(_.Get().GetLocalStoreChangeCallback(_), _),
    [_, _]
  );
}
var _ = class _ {
  m_mapChangeCallback = new Map();
  GetLocalStoreChangeCallback(_) {
    return (
      this.m_mapChangeCallback.has(_) ||
        this.m_mapChangeCallback.set(_, new _()),
      this.m_mapChangeCallback.get(_)
    );
  }
  static s_Singleton;
  static Get() {
    return ((_.s_Singleton ||= new _()), _.s_Singleton);
  }
};
function _([_, _, _]) {
  let _ = Math.max(_, _, _),
    _ = Math.min(_, _, _),
    _ = _,
    _,
    _;
  if (_ !== 0) _ = (_ - _) / _;
  else return ((_ = 0), (_ = 0), [_, _, _]);
  if (_ === 0) _ = 0;
  else {
    let _ = _ - _;
    ((_ = _ === _ ? (_ - _) / _ : _ === _ ? 2 + (_ - _) / _ : 4 + (_ - _) / _),
      (_ *= 60),
      _ < 0 && (_ += 360));
  }
  return [_, _, _];
}
function _([_, _, _]) {
  if (_ === 0) return [_, _, _];
  ((_ = ((_ % 360) + 360) % 360), (_ /= 60));
  let _ = Math.floor(_),
    _ = _ - _,
    _ = _ * (1 - _),
    _ = _ * (1 - _ * _),
    _ = _ * (1 - _ * (1 - _));
  switch (_) {
    case 0:
      return [_, _, _];
    case 1:
      return [_, _, _];
    case 2:
      return [_, _, _];
    case 3:
      return [_, _, _];
    case 4:
      return [_, _, _];
    case 5:
      return [_, _, _];
    default:
      return [0, 0, 0];
  }
}
function _(_) {
  if (
    typeof _ == `string` &&
    (_.startsWith(`#`) && (_ = _.substring(1)),
    _.length == 6 && (_ += `FF`),
    _.match(/^[0-9a-fA-F]{8}$/))
  )
    return {
      _: parseInt(_.substring(0, 2), 16),
      _: parseInt(_.substring(2, 4), 16),
      _: parseInt(_.substring(4, 6), 16),
      _: parseInt(_.substring(6, 8), 16) / 255,
    };
}
function _(_) {
  if (_ == null) return;
  let _ = (_) => Math.round(_).toString(16).padStart(2, `0`),
    _ = `#`;
  return (
    (_ += _(_._)),
    (_ += _(_._)),
    (_ += _(_._)),
    _._ != 1 && (_ += _(_._ * 255)),
    _
  );
}
function _(_) {
  if (_ == null) return;
  let _ = {
      _: _._ / 255,
      _: _._ / 255,
      _: _._ / 255,
    },
    _ = Math.min(_._, _._, _._),
    _ = Math.max(_._, _._, _._),
    _ = _ - _,
    _ = (_ + _) / 2,
    _;
  _ = _ == 0 ? 0 : _ / (1 - Math.abs(2 * _ - 1));
  let _ = 0;
  return (
    _ == 0
      ? (_ = 0)
      : _ == _._
        ? (_ = ((_._ - _._) / _) % 6)
        : _ == _._
          ? (_ = 2 + (_._ - _._) / _)
          : _ == _._ && (_ = 4 + (_._ - _._) / _),
    (_ *= 60),
    _ < 0 && (_ += 360),
    {
      _: _,
      _: _,
      _: _,
      _: _._,
    }
  );
}
function _(_) {
  let _ = _([_._ / 255, _._ / 255, _._ / 255]);
  return {
    _: _[0],
    _: _[1],
    _: _[2],
    _: _._,
  };
}
function _(_) {
  let _ = _([_._, _._, _._]);
  return {
    _: _[0] * 255,
    _: _[1] * 255,
    _: _[2] * 255,
    _: _._,
  };
}
var _ = [`hex`, `rgb`, `hsl`];
function _(_) {
  return Math.round(_ * 100) / 100;
}
function _(_) {
  let { _: _, _: _, _: _, _: _ } = _(_);
  return {
    _: Math.round(_),
    _: Math.round(_),
    _: Math.round(_),
    _: _,
  };
}
function _(_, _) {
  let { _: _, _: _, _: _, _ } = _,
    _ = _ >= 1;
  switch (_) {
    case `hex`:
      return _(_);
    case `rgb`:
      return _ ? `rgb(${_}, ${_}, ${_})` : `rgba(${_}, ${_}, ${_}, ${_(_)})`;
    case `hsl`: {
      let { _: _, _: _, _: _ } = _(_),
        _ = `${Math.round(_)}, ${Math.round(_ * 100)}%, ${Math.round(_ * 100)}%`;
      return _ ? `hsl(${_})` : `hsla(${_}, ${_(_)})`;
    }
  }
}
function _(_) {
  return `rgba(${_._}, ${_._}, ${_._}, ${_(_._)})`;
}
function _(_) {
  let _ = /^#?([0-9a-f]{3,4})$/i.exec(_)?.[1],
    _ = _(_ ? _.replace(/./g, `$&$&`) : _);
  return (
    _ && {
      ..._,
      _: _(_._),
    }
  );
}
function _(_) {
  let _ =
    /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.]+)(%?)\s*)?\)$/i.exec(
      _,
    );
  if (!_) return;
  let [, _, _, _, _, _] = _,
    _ = _ === void 0 ? 1 : parseFloat(_);
  return (
    _ && (_ /= 100),
    {
      _: _(Math.round(parseFloat(_)), 0, 255),
      _: _(Math.round(parseFloat(_)), 0, 255),
      _: _(Math.round(parseFloat(_)), 0, 255),
      _: _(_, 0, 1),
    }
  );
}
var _;
function _(_) {
  if (typeof CSS > `u` || !CSS.supports(`color`, _)) return;
  if (_ === void 0) {
    let _ = document.createElement(`canvas`);
    ((_.width = _.height = 1),
      (_ = _.getContext(`2d`, {
        willReadFrequently: !0,
      })));
  }
  let _ = _;
  if (!_) return;
  (_.clearRect(0, 0, 1, 1),
    (_.fillStyle = `#000000`),
    (_.fillStyle = _),
    _.fillRect(0, 0, 1, 1));
  let [_, _, _, _] = _.getImageData(0, 0, 1, 1).data;
  return {
    _: _,
    _: _,
    _: _,
    _: _(_ / 255),
  };
}
function _(_) {
  let _ = _?.trim();
  if (_) return _(_) ?? _(_) ?? _(_);
}
function _(_) {
  let _ = _(_);
  return _
    ? _(
        {
          ..._,
          _: 1,
        },
        `hex`,
      )
    : void 0;
}
var _ = `FcfcNn7MYQM-`,
  _ = `mBPBMKMRyFc-`,
  _ = `Wi9Z0cIQBJQ-`,
  _ = `CG-aPa5ETcg-`,
  _ = `XqWa8m4TS-o-`,
  _ = `CT-fGhlJtb8-`,
  _ = `_-1iQ2DUgeIw-`,
  _ = `_6empc5TVW6c-`,
  _ = `X3PwdzXulJQ-`,
  _ = `_362FAsYdx9w-`,
  _ = `f8RIg1qa2ts-`,
  _ = `IzorRe2k8io-`,
  _ = `qWqNnw1hGLY-`,
  _ = `xVJaIlx-dnY-`,
  _ = `GOiXAHGmWGg-`,
  _ = `CJ0nwSBwrpE-`,
  _ = `pS4NM2hdvRk-`,
  _ = `VSND6o6qGDA-`,
  _ = _(),
  _ =
    `#000000.#1b1b1b.#333333.#4d4d4d.#666666.#808080.#999999.#b3b3b3.#d9d9d9.#ffffff.#e53935.#fb8c00.#fdd835.#7cb342.#43a047.#00897b.#00acc1.#1e88e5.#8e24aa.#d81b60.#ef9a9a.#ffcc80.#fff59d.#c5e1a5.#a5d6a7.#80cbc4.#80deea.#90caf9.#ce93d8.#f48fb1.#b71c1c.#e65100.#f57f17.#33691e.#1b5e20.#004d40.#006064.#0d47a1.#4a148c.#880e4f`.split(
      `.`,
    ),
  _ = `rgba(255, 255, 255, 1)`,
  _ = `SharedColorPicker_Format`,
  _ = `ColorPickerSampling`,
  _ = 0.01,
  _ = 0.1;
function _(_) {
  let {
      color: _,
      onChange: _,
      strTitle: _,
      disableAlpha: _,
      onSubmit: _,
      children: _,
    } = _,
    [_, _] = (0, _.useState)(() => _(_, _)),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    let _ = _(_);
    !_ || (_.current && _(_, _.current, _)) || _((_) => _(_, _._, _) ?? _);
  }, [_, _]);
  let _ = (0, _.useCallback)(
      (_) => {
        let _ = _
          ? {
              ..._,
              _: 1,
            }
          : _;
        _(_);
        let _ = _(_);
        ((_.current = _), _(_(_)));
      },
      [_, _],
    ),
    _ = _(_),
    _ = _(
      {
        ..._,
        _: 1,
      },
      `hex`,
    ),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _(_, `noOpinionatedGlobalStyles`),
    style: {
      "--colorpicker-hue": `hsl( ${_._}deg 100% 50% )`,
      "--colorpicker-opaque": _,
      "--colorpicker-current": _,
    },
    children: [
      !!_ &&
        (0, _.jsx)(`div`, {
          className: `GEaX-EfeXNg-`,
          children: _,
        }),
      (0, _.jsx)(_, {
        hsva: _,
        fnSetColor: _,
      }),
      (0, _.jsx)(_, {
        className: _,
        strLabel: _.Localize(`#ColorPicker_Hue`),
        nMax: 360,
        nValue: Math.round(_._),
        strValueText: `${Math.round(_._)}°`,
        fnSetValue: (_) =>
          _({
            ..._,
            _: _,
          }),
      }),
      !_ &&
        (0, _.jsx)(_, {
          className: `xV4lUfTUFc4-`,
          strLabel: _.Localize(`#ColorPicker_Opacity`),
          nMax: 100,
          nValue: Math.round(_._ * 100),
          strValueText: `${Math.round(_._ * 100)}%`,
          fnSetValue: (_) =>
            _({
              ..._,
              _: _ / 100,
            }),
        }),
      (0, _.jsx)(_, {
        hsva: _,
        disableAlpha: _,
        fnSetColor: _,
        onSubmit: _,
      }),
      (0, _.jsx)(_, {
        strCurrentHex: _,
        bOpaque: _._ >= 1,
        fnPick: (_) => {
          let _ = _(_, _._, _);
          _ && _(_);
        },
      }),
      _,
    ],
  });
}
function _(_, _, _) {
  return (
    _._ === _._ &&
    _._ === _._ &&
    _._ === _._ &&
    (_ || Math.abs(_._ - _._) < 0.01)
  );
}
function _(_, _) {
  return _(_, 0, _) ?? _(_, 0, _);
}
function _(_, _, _) {
  let _ = _(_);
  if (!_) return;
  let _ = _(
    _
      ? {
          ..._,
          _: 1,
        }
      : _,
  );
  return _._ === 0 || _._ === 0
    ? {
        ..._,
        _: _,
      }
    : _;
}
function _(_) {
  let _ = (_) => {
    let _ = _.currentTarget.getBoundingClientRect(),
      _ = _.width ? (_.clientX - _.left) / _.width : 0,
      _ = _.height ? (_.clientY - _.top) / _.height : 0;
    _(_(_, 0, 1), _(_, 0, 1));
  };
  return {
    onPointerDown: (_) => {
      _.button === 0 &&
        (_.preventDefault(),
        _.currentTarget.setPointerCapture(_.pointerId),
        _.currentTarget.focus(),
        _(_));
    },
    onPointerMove: (_) => {
      _.currentTarget.hasPointerCapture(_.pointerId) && _(_);
    },
  };
}
function _(_, _, _) {
  let _ = _.shiftKey ? _ : _;
  if (_.key === _) return _;
  if (_.key === _) return -_;
}
function _(_) {
  let { hsva: _, fnSetColor: _ } = _,
    _ = _((_, _) =>
      _({
        ..._,
        _: _,
        _: 1 - _,
      }),
    );
  return (0, _.jsx)(`div`, {
    className: _,
    role: `slider`,
    tabIndex: 0,
    "aria-label": _.Localize(`#ColorPicker_SaturationBrightness`),
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(_._ * 100),
    "aria-valuetext": `${Math.round(_._ * 100)}%, ${Math.round(_._ * 100)}%`,
    onKeyDown: (_) => {
      let _ = _(_, `ArrowRight`, `ArrowLeft`),
        _ = _(_, `ArrowUp`, `ArrowDown`);
      (_ !== void 0 || _ !== void 0) &&
        (_.preventDefault(),
        _({
          ..._,
          _: _(_._ + (_ ?? 0), 0, 1),
          _: _(_._ + (_ ?? 0), 0, 1),
        }));
    },
    ..._,
    children: (0, _.jsx)(`div`, {
      className: _,
      style: {
        left: `${_._ * 100}%`,
        top: `${(1 - _._) * 100}%`,
      },
    }),
  });
}
function _(_) {
  let {
    className: _,
    strLabel: _,
    nMax: _,
    nValue: _,
    strValueText: _,
    fnSetValue: _,
  } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_.Root, {
      min: 0,
      max: _,
      value: [_],
      onValueChange: (_) => _(_[0]),
      children: (0, _.jsx)(_.Track, {
        render: (0, _.jsx)(`div`, {
          className: _(_, _),
        }),
        children: (0, _.jsx)(_.Handle, {
          render: (_) =>
            (0, _.jsx)(`span`, {
              ..._,
              className: _,
              style: {
                insetInlineStart: `${(_ / _) * 100}%`,
              },
              "aria-label": _,
              "aria-valuetext": _,
            }),
        }),
      }),
    }),
  });
}
function _(_) {
  let { hsva: _, disableAlpha: _, fnSetColor: _, onSubmit: _ } = _,
    [_, _] = _(_),
    _ = _.find((_) => _ === _) ?? `hex`,
    [_, _] = (0, _.useState)(void 0),
    _ = _(_(_), _),
    _ = _ !== void 0 && _.trim() !== `` && !_(_),
    _ = (_) => {
      _(_);
      let _ = _(_, _._, _);
      _ && _(_);
    },
    _ = (_) => {
      (_(_), _(void 0));
    };
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            "aria-hidden": !0,
          }),
          (0, _.jsx)(`input`, {
            className: _(_, _ && `_5Zk11eFAaLo-`),
            type: `text`,
            spellCheck: !1,
            autoComplete: `off`,
            "aria-label": _.Localize(`#ColorPicker_ColorValue`),
            "aria-invalid": _,
            value: _ ?? _,
            onChange: (_) => _(_.currentTarget.value),
            onBlur: () => _(void 0),
            onKeyDown: (_) => {
              _.key === `Enter` && (_.preventDefault(), _(void 0), _?.());
            },
          }),
          (0, _.jsx)(_, {
            hsva: _,
            disableAlpha: _,
            fnSetColor: _,
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `tHsVe8Ptn-s-`,
          children: _.Localize(`#ColorPicker_InvalidColor`),
        }),
      (0, _.jsx)(`div`, {
        className: _,
        role: `radiogroup`,
        children: _.map((_) =>
          (0, _.jsx)(
            `button`,
            {
              type: `button`,
              role: `radio`,
              "aria-checked": _ === _,
              className: _(_, _ === _ && `wBwV8sUsuTo-`),
              onClick: () => _(_),
              children: _.toUpperCase(),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { hsva: _, disableAlpha: _, fnSetColor: _ } = _,
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => _(`EyeDropper` in window), []);
  let _ = async () => {
    let _ = document.documentElement;
    _.classList.add(_);
    try {
      let _ = _((await new window.EyeDropper().open()).sRGBHex, _._, _);
      _ &&
        _({
          ..._,
          _: _._,
        });
    } catch (_) {
      console.warn(_.Localize(`#Sale_EyeDropperFailed`), _);
    } finally {
      _.classList.remove(_);
    }
  };
  if (!_) return null;
  let _ = _.Localize(`#Sale_BackgroundColorPicker`);
  return (0, _.jsx)(_, {
    toolTipContent: _,
    children: (0, _.jsx)(`button`, {
      type: `button`,
      className: _,
      "aria-label": _,
      onClick: _,
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { strCurrentHex: _, bOpaque: _, fnPick: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    role: `group`,
    "aria-label": _.Localize(`#ColorPicker_Palette`),
    children: _.map((_) => {
      let _ = _ && _ === _;
      return (0, _.jsx)(
        `button`,
        {
          type: `button`,
          className: _(_, _ && `wBwV8sUsuTo-`),
          style: {
            background: _,
          },
          "aria-label": _,
          "aria-pressed": _,
          title: _,
          onClick: () => _(_),
        },
        _,
      );
    }),
  });
}
var _ = _.createContext(void 0);
function _(_) {
  let {
      color: _,
      onChange: _,
      onRequestClose: _,
      disableAlpha: _,
      strTitle: _,
      bLivePreview: _ = !0,
      fnRestoreChanges: _,
    } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(!1),
    _ = (0, _.useRef)({
      color: _,
      onChange: _,
      fnRestoreChanges: _,
      bLivePreview: _,
    });
  _.current = {
    color: _,
    onChange: _,
    fnRestoreChanges: _,
    bLivePreview: _,
  };
  let _ = (0, _.useCallback)(
      (_) => {
        ((_.current = _), _ && _(_));
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(() => {
      ((_.current = !0), !_ && _.current !== void 0 && _(_.current), _());
    }, [_, _, _]);
  return (
    (0, _.useEffect)(
      () => () => {
        let _ = _.current;
        if (!_.current && _.bLivePreview && _.current !== void 0)
          try {
            (_.onChange(_.color), _.fnRestoreChanges?.());
          } catch (_) {
            console.error(`Color picker: could not undo a previewed color`, _);
          }
      },
      [],
    ),
    (0, _.useEffect)(() => {
      let _ = _.current?.ownerDocument ?? document,
        _ = (_) => {
          _.current && !_.current.contains(_.target) && _();
        },
        _ = (_) => {
          _.key === `Escape` && (_.stopPropagation(), _.preventDefault(), _());
        };
      return (
        _.addEventListener(`pointerdown`, _, !0),
        _.addEventListener(`keydown`, _, !0),
        () => {
          (_.removeEventListener(`pointerdown`, _, !0),
            _.removeEventListener(`keydown`, _, !0));
        }
      );
    }, [_]),
    (0, _.jsx)(`div`, {
      ref: _,
      children: (0, _.jsx)(_, {
        color: _,
        disableAlpha: _,
        strTitle: _ ?? _.Localize(`#Button_Color`),
        onChange: _,
        onSubmit: _,
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _(_, _),
              onClick: _,
              children: _.Localize(`#Button_Save`),
            }),
            (0, _.jsx)(`button`, {
              type: `button`,
              className: _,
              onClick: _,
              children: _.Localize(`#Button_Cancel`),
            }),
          ],
        }),
      }),
    })
  );
}
function _(_, _, _) {
  let _ = _.bLivePreview ?? !0,
    _ = _ ? _?.fnSnapshot() : void 0,
    _ = null,
    _ = !1,
    _ = (0, _.jsx)(_, {
      color: _.color,
      disableAlpha: _.disableAlpha,
      strTitle: _.strTitle,
      onChange: _.onChange,
      bLivePreview: _,
      fnRestoreChanges: _,
      onRequestClose: () => {
        _ || ((_ = !0), _?.Hide(), _.onClose?.());
      },
    });
  _ =
    (_ instanceof HTMLElement,
    _(_, _, {
      bDisablePopTop: !0,
    }));
}
function _() {
  let _ = (0, _.useContext)(_);
  return {
    openColorPicker: (0, _.useCallback)((_, _) => _(_, _, _), [_]),
  };
}
var _ = _(_());
function _(_, _) {
  let _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        _.currentTarget.files.length > 0 &&
          (_(_.currentTarget.files), (_.currentTarget.value = ``));
      },
      [_],
    ),
    _ = _.useCallback(() => _.current?.click(), []);
  return [
    _.createPortal(
      (0, _.jsx)(`form`, {
        onSubmit: _,
        style: {
          display: `none`,
        },
        children: (0, _.jsx)(`input`, {
          ..._,
          type: `file`,
          ref: _,
          onChange: _,
        }),
      }),
      window.document.body,
    ),
    _,
  ];
}
function _(_) {
  let [_, _] = _.useState(!1);
  return [
    {
      onDragEnter: _.useCallback((_) => {
        ((_.dataTransfer.files && _.dataTransfer.files[0]) ||
          (_.dataTransfer.types && _.dataTransfer.types[0] == `Files`)) &&
          _(!0);
      }, []),
      onDragLeave: _.useCallback((_) => {
        _(_) && _(!1);
      }, []),
      onDragEnd: _.useCallback(() => _(!1), []),
      onDragOver: _ ? _ : void 0,
      onDrop: _.useCallback(
        (_) => {
          (_.dataTransfer.files?.length &&
            (_(_.dataTransfer.files, _),
            _.preventDefault(),
            _.stopPropagation()),
            _(!1));
        },
        [_],
      ),
    },
    _,
  ];
}
function _(_) {
  _.preventDefault();
}
function _(_) {
  switch (_.type) {
    case `image/jpeg`:
      return `jpg`;
    case `image/png`:
      return `png`;
    case `image/gif`:
      return `gif`;
    default:
      let _ = _.name.match(/(?<=\.)[^.]+$/);
      return _ ? _[0] : void 0;
  }
}
