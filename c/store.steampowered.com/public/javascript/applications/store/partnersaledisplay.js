import { _ } from "./chunk~f025431ab0.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~6b8ddcaac8.js";
import { _, _, _ } from "./chunk~4c761eb6f4.js";
import {
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
} from "./chunk~2185942436.js";
import { _, _, _, _, _, _, _, _, _ } from "./chunk~b8ca037aae.js";
import { _ } from "./chunk~f0141d9521.js";
import { _, _, _, _ } from "./chunk~f57d770d64.js";
import { _, _, _ } from "./chunk~cf3721cc1c.js";
import { _ } from "./chunk~16aefcf65f.js";
import "./chunk~8681f5c764.js";
import { _ } from "./chunk~2f085f1384.js";
import { _, _ } from "./chunk~af36c62e9f.js";
import { _ } from "./chunk~eefd71512b.js";
import { _ } from "./chunk~331382b23f.js";
import { _, _, _, _ } from "./chunk~91ae5e1167.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk~2f8c67b4de.js";
import { _, _ } from "./chunk~d43c81a658.js";
import { _, _ } from "./chunk~95ecbf576c.js";
import { _ } from "./chunk~5a091db425.js";
import { _ } from "./chunk~e70aabe4d7.js";
import { _, _ } from "./chunk~710e3cfd2f.js";
import { _ } from "./chunk~7b4b9eb713.js";
import { _ } from "./chunk~3720b337f3.js";
import { _, _, _, _, _, _, _, _, _, _, _, _ } from "./chunk~0be5d7b286.js";
import { _, _ } from "./chunk~a7c5e71e12.js";
import { _ } from "./chunk~a243b6a34b.js";
import { _ } from "./chunk~e60a8972cb.js";
import { _ } from "./chunk~fc8a9e4879.js";
import {
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
} from "./main.js";
import { _, _ } from "./chunk~ec644f97c6.js";
import { _ } from "./chunk~cf8a297cc4.js";
var _ = _(_(), 1);
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
var _ = `Vvgd20dCqjc-`;
function _(_) {
  let { eventModel: _ } = _,
    { data: _ } = _(_.clanSteamID.GetAccountID());
  if (!_ || (!_.can_edit && !_.support_user) || _() == `community`) return;
  let _ = _.GetAllTags(),
    _ = [];
  if (
    (_.includes(`hide_store`) &&
      _.push(_.Localize(`#Sale_SaleEventIsHidden_Reason_ProductHide`)),
    _.includes(`mod_hide_store`) &&
      _.support_user &&
      _.push(_.Localize(`#Sale_SaleEventIsHidden_Reason_Mod`)),
    !_.BIsVisibleEvent() &&
      _.includes(`contenthub`) &&
      _.push(_.Localize(`#Sale_SaleEventIsHidden_ContentHub_Preview`)),
    !(_.BIsVisibleEvent() && _.length == 0))
  )
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        children: [
          !_.BIsVisibleEvent() &&
            (0, _.jsx)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: _.Localize(`#Sale_SaleEventIsHidden`),
            }),
          _.length > 0 &&
            (0, _.jsxs)(`div`, {
              className: `XZUb9Zq6ctI-`,
              children: [
                _.LocalizePlural(`#Sale_SaleEventIsHidden_Reason`, _.length),
                (0, _.jsx)(`ul`, {
                  children: _.map((_) =>
                    (0, _.jsx)(
                      `li`,
                      {
                        children: _,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
        ],
      }),
    });
}
var _ = `_4rizx-X0oWo-`;
function _(_) {
  return (
    !_.jsondata.sale_logo_cross_promo_only &&
    (_.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0
  );
}
function _(_) {
  let { eventModel: _, language: _ } = _,
    [_, _] = _(() => [
      _.jsondata.sale_logo_url,
      _.GetWithFallback(_.jsondata.localized_sale_logo, _),
    ]);
  return _ && _?.length > 0
    ? _
      ? (0, _.jsx)(`a`, {
          className: _,
          href: _.STORE_BASE_URL + _,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        })
      : (0, _.jsx)(`div`, {
          className: _(_, `SalePageLogoCtn`),
          children: (0, _.jsx)(_, {
            ..._,
          }),
        })
    : null;
}
function _(_) {
  let { eventModel: _, language: _ } = _,
    _ = _(_, `sale_logo`, _);
  return (0, _.jsx)(`img`, {
    src: _,
    alt: `logo`,
  });
}
var _ = `_1Bceni0-cAw-`;
function _(_) {
  let { strURL: _ } = _;
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`img`, {
          alt: ``,
          src: _,
        }),
      })
    : null;
}
function _(_) {
  let { event: _, bIsPreview: _ } = _,
    _ = _.jsondata.sale_background_video_webm,
    _ = _.jsondata.sale_background_video_mp4;
  return _ || _
    ? (0, _.jsx)(_, {
        children: (0, _.jsxs)(`video`, {
          loop: !0,
          muted: !0,
          autoPlay: !0,
          playsInline: !0,
          className: _(
            _,
            _[`CustomStyle_${_.jsondata.sale_vanity_id}`],
            `SaleBackground`,
            _,
          ),
          style: {
            backgroundColor: _ ? _.jsondata.sale_background_color : void 0,
          },
          children: [
            _ &&
              (0, _.jsx)(`source`, {
                src: _,
                type: `video/webm`,
              }),
            _ &&
              !_.IN_CLIENT &&
              (0, _.jsx)(`source`, {
                src: _,
                type: `video/mp4`,
              }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let {
      event: _,
      language: _,
      children: _,
      bIsPreview: _,
      personalizedCarousels: _,
    } = _,
    _ = _.useRef(null),
    _ = _(_, `sale_header`, _),
    [_] = _(() => [_.jsondata.sale_sub_menu]);
  _.useEffect(() => {
    if (!_) return;
    let _ = new Image();
    ((_.onload = () => {
      let _ = (100 * _.width) / 950 + `%`;
      _.current && _.current.style.setProperty(`--background-scale`, _);
    }),
      (_.src = _));
  }, [_]);
  let _ = _.jsondata.sale_sections?.some(
      (_) => _.section_type === `contenthubmaincarousel`,
    ),
    _ =
      _.jsondata.item_source_type === _.k_EContentHub &&
      ((_.jsondata.sale_vanity_id &&
        _.jsondata.sale_vanity_id.includes(`contenthubsalepage_`)) ||
        _),
    _ = _ ? `url(${_})` : `none`;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _
        ? (0, _.jsx)(_, {
            event: _,
            language: _,
            bIsPreview: _,
            subMenu: _,
            styleVariation: _.k_SubMenu,
            personalizedCarousels: _,
          })
        : (0, _.jsx)(_, {
            strURL: _,
          }),
      (0, _.jsx)(`div`, {
        className: _({
          SaleBackgroundCtn: !0,
          ContentHubSalePage: _,
        }),
        children: (0, _.jsxs)(`div`, {
          className: _(
            _[`CustomStyle_${_.jsondata.sale_vanity_id}`],
            `SaleCustomCSS`,
            _,
            `SaleBackground`,
          ),
          style: {
            display: `flex`,
            position: `relative`,
            flexDirection: `column`,
            backgroundColor: _.jsondata.sale_background_color,
          },
          ref: _,
          children: [
            _ && _.jsondata.sale_background_repeat == `coverBlur`
              ? (0, _.jsx)(`img`, {
                  className: _(_, _, _),
                  src: _,
                  alt: `Header`,
                })
              : (0, _.jsx)(`div`, {
                  className: _(_, _),
                  style: {
                    backgroundImage: _,
                    backgroundRepeat: _.jsondata.sale_background_repeat,
                  },
                }),
            (0, _.jsx)(_, {
              event: _,
              bIsPreview: _,
            }),
            (0, _.jsx)(_.Fragment, {
              children: _,
            }),
          ],
        }),
      }),
    ],
  });
}
var _ = _(_()),
  _ = _(_());
function _(_) {
  let { nSectionID: _, children: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1);
  _.useEffect(() => {
    _.Get().SetMouseOverSection(_, _);
  }, [_, _]);
  let _ = _(() => _.Get().GetMouseOverSectionID()),
    _ = _ && _ == _,
    _ = () => _.Get().JumpToSection(_),
    _ = _.useRef(null);
  return (
    _((_) => _ == _ && (_.current?.scrollIntoView(), _(!0), !0)),
    (0, _.jsxs)(`div`, {
      ref: _,
      className: _({
        [_]: !0,
        [_]: !!_,
        [_]: !!_,
      }),
      onAnimationEnd: () => _(!1),
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: [
        _ &&
          (0, _.jsx)(_, {
            toolTipContent: _(`#Sale_SaleEditor_JumpTo_ttip`),
            direction: `top`,
            children: (0, _.jsx)(`button`, {
              className: `BxPO-muNnTI-`,
              onClick: _,
              children: (0, _.jsx)(_, {}),
            }),
          }),
        _,
      ],
    })
  );
}
var _ = `oj4yraCGjDk-`,
  _ = `oBMBeb6Ow8M-`;
function _(_) {
  let { rgPresenters: _ } = _;
  if (!_ || _.length == 0) return null;
  let _ = _(_.LANGUAGE);
  return _.length == 1
    ? (0, _.jsx)(`div`, {
        className: _(_, `PresenterDisclaimer`),
        children: _.LocalizeReact(
          `#SalePresented_By`,
          (0, _.jsx)(_, {
            presentor: _[0],
            lang: _,
          }),
        ),
      })
    : (0, _.jsx)(`div`, {
        className: _(_, `PresenterDisclaimer`),
        children: _.LocalizeReact(
          `#SalePresented_By_Multi`,
          _.slice(0, _.length - 1).map((_, _) =>
            (0, _.jsxs)(
              _.Fragment,
              {
                children: [
                  (0, _.jsx)(_, {
                    presentor: _,
                    lang: _,
                  }),
                  _.length > 2 && `, `,
                ],
              },
              _.url,
            ),
          ),
          (0, _.jsx)(_, {
            presentor: _[_.length - 1],
            lang: _,
          }),
        ),
      });
}
function _(_) {
  let { presentor: _, lang: _ } = _,
    _ = _(_.url);
  return (0, _.jsx)(_, {
    href: _,
    bUseLinkFilter: !0,
    className: _,
    children: _.GetWithFallback(_.localized_presenter_name, _),
  });
}
function _(_) {
  let _ = _(_.LANGUAGE),
    _ = _(_),
    _ = [...new Set(_.flatMap((_) => _(_) || []))].join(`,`),
    _ = _.useMemo(() => (_ ? _.split(`,`) : []), [_]),
    _ = _({
      queries: _.map((_) => _(_, _, _)),
      combine: _,
    });
  return _.useCallback(
    (_) => {
      let _ = _(_),
        _ = _ ? _.indexOf(_) : -1;
      return _ >= 0 ? _[_] : void 0;
    },
    [_, _],
  );
}
function _(_) {
  return _.map((_) => _.data);
}
function _(_) {
  let { event: _, broadcastEmbedContext: _ } = _,
    _ = !!_?.jsondata?.broadcast_display_wide_player,
    _ = !!_?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
  return (0, _.jsx)(_.Fragment, {
    children:
      !!(
        _.BEventCanShowBroadcastWidget() && _.BSaleShowBroadcastAtTopOfPage()
      ) &&
      (0, _.jsx)(_, {
        event: _,
        broadcastEmbedContext: _,
        bWideBroadcastDisplay: _,
        bWideBroadcastPermitChat: _,
      }),
  });
}
var _ = `Fh-jFuR9Yvo-`,
  _ = `_4rNPfhfRBrc-`,
  _ = `Bc2anSpsdzg-`,
  _ = `HxVKtqJLU2k-`,
  _ = `_4oPueAzMcGE-`,
  _ = `kqyJu6iojzM-`,
  _ = `UhkkMgNIeQo-`,
  _ = `YSYpQ5wCRA0-`,
  _ = `gOxlo3KMChI-`,
  _ = `WUODlv8V5dM-`,
  _ = `_7grqK8KjlHk-`;
function _(_, _) {
  return _ ? (_ ? !!_.valve_admin : !!(_.valve_admin || _.support_user)) : !1;
}
function _(_, _) {
  let _ = !!(_ && _.BIsClanAccount()),
    { data: _ } = _(_ ? _.GetAccountID() : 0);
  return _ && _(_, _);
}
function _(_) {
  let { clanSteamID: _, _: _ } = _;
  return _(_, _.requireAdmin)
    ? (0, _.jsx)(`div`, {
        _: _,
        className: _(_.className, _.requireAdmin ? _ : _),
        children: _.children,
      })
    : null;
}
var _ = 12,
  _ = 240;
function _(_) {
  let { event: _ } = _,
    [_] = _(_, void 0),
    [_, _] = _.useState(!1),
    _ = _(`rgMLRecommenderWishlist`, `application_config`),
    _ = Array.isArray(_) && _.length > 0 && Number.isInteger(_[0]);
  return !_.BIsNextFest() || !_ || _ == _.Random || _(_) > 0
    ? null
    : (0, _.jsxs)(_, {
        clanSteamID: _.clanSteamID,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            className: _,
            onClick: () => _(!_),
            children: [_ ? `▼` : `▶`, ` Next Fest personalized order (VO)`],
          }),
          _ &&
            (0, _.jsx)(_, {
              event: _,
              rgRecommendedAppIDs: _,
            }),
        ],
      });
}
function _(_) {
  let { event: _, rgRecommendedAppIDs: _ } = _,
    [_, _] = _.useState(void 0);
  _(_, _);
  let [_, _] = _.useState(void 0),
    [_, _] = _.useState(``),
    _ = _.jsondata.sale_ml_recommender_weight_exponent || 2.5,
    _ = parseFloat(_),
    _ = _ ?? _(_),
    _ = _ || _,
    _ = _.useMemo(() => _(_, _, (_) => _, _, _), [_, _, _]),
    _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]),
    _ = _.useMemo(() => new Map(_.map((_, _) => [_, _])), [_]),
    _ = _.length,
    _ = (_) => _.get(_) ?? 0,
    _ = (_) => _.get(_) ?? 0,
    _ = (_) => _.Get().GetApp(_)?.GetName() ?? `App ${_}`,
    _ = (_) => `hsl(${Math.round((240 * _(_)) / _)}, 80%, 65%)`,
    _ = (_, _) =>
      (0, _.jsx)(
        `div`,
        {
          className: _(_, _ == _ && `It6LJnFk-X8-`),
          style: {
            height: _,
            color: _(_),
          },
          title: `${_(_)} (${_}): recommended #${_(_) + 1}, shuffled to #${_(_) + 1}`,
          onMouseEnter: () => _(_),
          children: _,
        },
        _,
      ),
    _ = (_, _) =>
      (0, _.jsx)(
        `line`,
        {
          _: 0,
          _: (_(_) + 0.5) * _,
          _: _,
          _: (_(_) + 0.5) * _,
          stroke: _ ? `white` : _(_),
          strokeWidth: _ ? 2 : 1,
          strokeOpacity: _ ? 1 : _ === void 0 ? 0.6 : 0.15,
        },
        _,
      );
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          ` recommendations, exponent `,
          _,
          _ < 0 && ` (shuffle disabled)`,
          `, seed `,
          _,
          `. Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.`,
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            className: _,
            onClick: () => _(_()),
            children: `Reshuffle`,
          }),
          (0, _.jsxs)(`label`, {
            children: [
              `Exponent`,
              ` `,
              (0, _.jsx)(`input`, {
                type: `number`,
                min: -1,
                step: 0.1,
                className: _,
                placeholder: String(_),
                value: _,
                onChange: (_) => _(_.target.value),
              }),
            ],
          }),
          (_ !== void 0 || _ != ``) &&
            (0, _.jsx)(_, {
              className: `kqyJu6iojzM-`,
              onClick: () => {
                (_(void 0), _(``));
              },
              children: `Reset to page's order`,
            }),
          (0, _.jsx)(`span`, {
            children: `Only affects this chart, not the page`,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        onMouseLeave: () => _(void 0),
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `Recommended order`,
              }),
              _.map((_, _) => _(_, `#${_ + 1} ${_(_)}`)),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `\xA0`,
              }),
              (0, _.jsxs)(`svg`, {
                width: _,
                height: _ * _,
                children: [
                  _.filter((_) => _ != _).map((_) => _(_, !1)),
                  _ !== void 0 && _.has(_) && _(_, !0),
                ],
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: `Shuffled order`,
              }),
              _.map((_) => _(_, `#${_(_) + 1} ${_(_)}`)),
            ],
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { event: _, fnOnChangeDayIndex: _, addtionalAdminButtons: _ } = _;
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        event: _,
      }),
      (0, _.jsx)(_, {
        eventModel: _,
        fnOnUpdateSaleDayIndex: _,
        addtionalAdminButtons: _,
        bSupportsSticky: !0,
      }),
    ],
  });
}
var _ = new Map();
function _(_, _) {
  let _ = _.findIndex((_) => _.section_type === `tabs`);
  if (_ >= 0 && _ !== void 0) {
    let _ = _[_],
      _ = _.tabs?.findIndex((_) => _.unique_id === _);
    if (_ !== void 0 && _ >= 0 && _.tabs)
      return {
        selectedTabBackgroundDef: _.tabs[_].tab_background_img_groups,
        nTabSaleSectionIndex: _,
      };
  }
  return {
    selectedTabBackgroundDef: void 0,
    nTabSaleSectionIndex: void 0,
  };
}
function _(_, _, _) {
  let _ = new Map(),
    _ = new Map(),
    _ = new Map(),
    _,
    _,
    _ = 0,
    { selectedTabBackgroundDef: _, nTabSaleSectionIndex: _ } = _(_, _);
  if (_?.enabled) {
    let _ = _.groups?.length;
    if (
      (_.groups?.forEach((_, _) => {
        if (_ >= _.length || _[_].section_type == `tabs`) return;
        let _ = [];
        for (
          let _ = 0;
          _ < (_?.num_sections || 0) &&
          _ < _.length &&
          _[_].section_type != `tabs`;
          ++_, ++_
        ) {
          let _ = _[_].unique_id;
          (_.push(_),
            _.set(_, _.background_id),
            _ === 0 && _.set(_, _.background_id));
        }
        if (
          (_.set(_.background_id, {
            nBackgroundGroupID: _.background_id,
            sectionUniqueIDs: _,
            nSaleSectionLastIndex: _ - 1,
            nUniqueIDNextSaleSection:
              _ < _.length && (_ === void 0 || _ < _) ? _[_].unique_id : void 0,
          }),
          _ + 1 == _ && _.last_group_until_cover_section_until_end)
        )
          for (
            let _ = _;
            _ < _.length &&
            (!_ || !_.enabled || _ < _) &&
            !(_[_].section_type == `tabs` && _?.enabled);
            ++_
          ) {
            let _ = _[_].unique_id;
            _.set(_, _.background_id);
          }
      }),
      _ < _.length && (_ === void 0 || _ < _) && (_ = _[_].unique_id),
      _?.enabled && _ !== void 0)
    ) {
      let _ = _,
        _ = _.groups.length;
      for (
        _.groups.forEach((_, _) => {
          if (_ >= _.length) return;
          let _ = [];
          for (let _ = 0; _ < _.num_sections && _ < _.length; ++_, ++_) {
            let _ = _[_],
              _ = _.unique_id;
            _(_, _)
              ? (_.push(_),
                _.set(_, _.background_id),
                _ === 0 && _.set(_, _.background_id))
              : --_;
          }
          let _ = _;
          for (; _ < _.length && !_(_, _[_]);) _ += 1;
          if (
            (_.set(_.background_id, {
              nBackgroundGroupID: _.background_id,
              sectionUniqueIDs: _,
              nSaleSectionLastIndex: _ - 1,
              nUniqueIDNextSaleSection: _ < _.length ? _[_].unique_id : void 0,
            }),
            _ + 1 == _ && _.last_group_until_cover_section_until_end)
          )
            for (let _ = _; _ < _.length; ++_) {
              let _ = _[_];
              if (_.section_type == `tabs` && _?.enabled) break;
              _(_, _) && _.set(_.unique_id, _.background_id);
            }
        });
        _ < _.length && !_(_, _[_]);
      )
        _++;
      _ < _.length && (_ = _[_].unique_id);
    }
  } else _?.length > 0 && (_ = _[0].unique_id);
  return {
    mapGroupToSections: _,
    nFirstSaleSectionIDWithoutGroup: _,
    mapSectionToGroup: _,
    mapFirstSectionToGroup: _,
    selectedTabBackgroundDef: _,
    nTabSaleSectionIndex: _,
    nFirstTabSectionIDWithoutGroup: _,
  };
}
function _(_, _, _, _) {
  let _ = _.jsondata.sale_background_img_groups.groups.find(
    (_) => _.background_id === _.groupID,
  );
  return (
    !_ &&
      _ >= 0 &&
      (_ = _.GetSaleSectionFirstMatchByType(`tabs`)
        ?.tabs?.find((_) => _.unique_id == _)
        ?.tab_background_img_groups?.groups?.find(
          (_) => _.background_id == _.groupID,
        )),
    (0, _.jsx)(
      _,
      {
        eventModel: _,
        displayDef: _,
        derivedGroupInfo: _.derivedGroupInfo,
        children:
          _ && _.randomize_section_order && _ !== _.EPreviewMode_EditBackground
            ? (0, _.jsx)(_, {
                clanEventGID: _.GID,
                elSaleSections: _.elSaleSections,
              })
            : _.elSaleSections,
      },
      `background_group_` + _.groupID,
    )
  );
}
function _(_) {
  let { clanEventGID: _, elSaleSections: _ } = _,
    [_, _] = _(`sale_section_seed_${_}`, _());
  if (!_ || _.length === 0) return null;
  if (_.length > 1 && _ !== void 0) {
    let _ = _(_);
    return (0, _.jsx)(_.Fragment, {
      children: _(_, 0, _),
    });
  }
  return (0, _.jsx)(_.Fragment, {
    children: _,
  });
}
function _(_) {
  let { displayDef: _, children: _, eventModel: _, derivedGroupInfo: _ } = _,
    _ = _(),
    _ = _.useCallback(
      (_, _) => {
        _.set(_.nBackgroundGroupID, _);
      },
      [_],
    ),
    _ = _(_);
  if (!_ || (Array.isArray(_) && _.length == 0)) return null;
  if (!_)
    return (0, _.jsx)(_.Fragment, {
      children: _,
    });
  let _;
  if (_.localized_background_art) {
    let _ = _(_),
      _ =
        _ in _.localized_background_art ? _ : _.GetLanguageFallback(_.LANGUAGE),
      _ = _.localized_background_art[_];
    _ && (_ = _.GenerateURLFromHashAndExt(_.clanSteamID, _));
  }
  let _ = `linear-gradient(`;
  switch (_.gradient_setting) {
    case `top-to-bottom`:
      _ += `to bottom,`;
      break;
    case `left-to-right`:
      _ += `to right,`;
      break;
    case `top-left-to-bottom-right`:
      _ += `to bottom right,`;
      break;
    case `single-color`:
      _ = void 0;
  }
  _.background_color1 &&
  _.background_color2 &&
  _.background_color1 != _.background_color2
    ? ((_ += ` ` + _.background_color1),
      (_ += `, ` + _.background_color2),
      (_ += `)`))
    : (_ = null);
  let _ =
      _.background_color1 &&
      (!_.background_color2 ||
        _.gradient_setting == `single-color` ||
        _.background_color1 == _.background_color2),
    _ = _.scaling_setting !== `cover` && _.position_setting !== `unset`,
    _ = {
      backgroundImage: _ ? `url(${_}), ${_}` : `url(${_})`,
      backgroundSize: _.scaling_setting,
      backgroundRepeat: _.repeat_setting,
      backgroundPosition: _ ? _.position_setting : void 0,
      backgroundColor: _ ? _.background_color1 : void 0,
      overflowY: `hidden`,
    };
  return (0, _.jsx)(`div`, {
    ref: _,
    style: _,
    _: `background_group_` + _.background_id,
    children: _,
  });
}
function _(_) {
  return typeof _ == `string` || typeof _ == `number` ? _ : JSON.stringify(_);
}
var _ = class {
    Keyify = (_) => _(_);
    m_mapVisible = new Map();
    m_mapOwners = new Map();
    IsAlreadyVisible(_) {
      return this.m_mapVisible.has(this.Keyify(_));
    }
    SortKey(_, _) {
      return (
        (this.m_mapVisible.get(this.Keyify(_)) || 0) -
        (this.m_mapVisible.get(this.Keyify(_)) || 0)
      );
    }
    BMarkAppVisibile(_, _) {
      let _ = this.EnsureOwnerSetExists(_),
        _ = this.Keyify(_);
      return (
        _.add(_),
        this.IsAlreadyVisible(_)
          ? (this.m_mapVisible.set(_, (this.m_mapVisible.get(_) ?? 0) + 1), !1)
          : (this.m_mapVisible.set(_, 1), !0)
      );
    }
    BMarkAppNotVisible(_, _) {
      if (!this.IsAlreadyVisible(_)) return !1;
      let _ = this.EnsureOwnerSetExists(_),
        _ = this.Keyify(_);
      return _.has(_) ? (this.DecrementAppVisibility(_), !0) : !1;
    }
    MarkAllAppsNotVisible(_) {
      this.m_mapOwners.has(_) &&
        (this.m_mapOwners
          .get(_)
          .forEach(this.DecrementAppVisibility.bind(this)),
        this.m_mapOwners.delete(_));
    }
    EnsureOwnerSetExists(_) {
      let _ = this.m_mapOwners.get(_);
      return (
        (_ ||= (this.m_mapOwners.set(_, new Set()), this.m_mapOwners.get(_))), _
      );
    }
    DecrementAppVisibility(_) {
      let _ = (this.m_mapVisible.get(_) ?? 0) - 1;
      _ > 0 ? this.m_mapVisible.set(_, _) : this.m_mapVisible.delete(_);
    }
  },
  _ = `H8RsG3p9zyI-`,
  _ = `-ayc8iJmBgg-`,
  _ = `_6D2hAhDIwmY-`,
  _ = `ZP-iX4isxNw-`,
  _ = `AzJ42SXvU7g-`,
  _ = `DKOEqISmqI8-`,
  _ = `TMYfiVXl17Q-`,
  _ = `j5T-MrFgQ20-`,
  _ = class _ {
    m_curLocImageGroup = null;
    m_curLocImageGroupType = null;
    constructor() {
      _(this);
    }
    static async BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _) {
      let _ =
          _.COMMUNITY_BASE_URL +
          `gid/` +
          _.ConvertTo64BitString() +
          `/hasclanimagefile`,
        _ = {
          image_hash_and_ext: _,
          lang: `` + _,
        };
      return (
        (
          await _.default.get(_, {
            params: _,
            cancelToken: _ && _.token,
          })
        ).data.success == 1
      );
    }
    SetPrimaryImageForImageGroup(_, _) {
      (this.m_curLocImageGroup &&
        this.m_curLocImageGroup.primaryImage.imageid == _.imageid &&
        _ == this.m_curLocImageGroupType) ||
        ((this.m_curLocImageGroup = {
          primaryImage: _,
          localized_images: [],
        }),
        (this.m_curLocImageGroupType = _),
        (this.m_curLocImageGroup.localized_images = _(
          this.m_curLocImageGroup.localized_images,
          32,
          null,
        )));
    }
    GetPrimaryImageForImageGroup() {
      return this.m_curLocImageGroup?.primaryImage;
    }
    ClearImageGroup() {
      ((this.m_curLocImageGroup = null), (this.m_curLocImageGroupType = null));
    }
    GetLocalizedImageGroupForEdit() {
      return this.m_curLocImageGroup;
    }
    GetLocalizedImageGroupForEditAsURL(_, _) {
      if (this.m_curLocImageGroup) {
        let _ = this.m_curLocImageGroup.primaryImage;
        return this.m_curLocImageGroup.localized_images[_]
          ? this.m_curLocImageGroup.localized_images[_]
          : _.GenerateURLFromHashAndExt(_, _.GetHashAndExt(_) ?? ``);
      }
      return null;
    }
    async DetermineAvailableLocalizationForGroup(_) {
      if (!this.m_curLocImageGroup) return;
      let _ = this.m_curLocImageGroup.primaryImage,
        _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
        _ = _.GetHashAndExt(_) ?? ``,
        _ = [];
      for (let _ = 0; _ < 32; ++_)
        _.push(_.BDoesClanImageFileExistsOnCDNOrOrigin(_, _, _, _));
      let _ = await Promise.all(_);
      _(() => {
        for (let _ = 0; _ < 32; ++_)
          _[_] &&
            (this.m_curLocImageGroup.localized_images[_] =
              _.GenerateURLFromHashAndExtAndLang(
                _,
                _,
                _.full,
                _,
                this.m_curLocImageGroupType ?? void 0,
              ));
      });
    }
    SetLocalizedImageGroupAtLang(_, _, _) {
      this.m_curLocImageGroup &&
        (this.m_curLocImageGroup.localized_images[_] = _
          ? _.GenerateURLFromHashAndExtAndLang(
              _,
              _,
              _.full,
              _,
              this.m_curLocImageGroupType ?? void 0,
            )
          : null);
    }
    AddLocalizeImageUploaded(_, _) {
      if (!this.m_curLocImageGroup) return;
      let _ = this.m_curLocImageGroup.primaryImage;
      if (_?.image_hash == _) {
        let _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
          _ = _.GetHashAndExt(_);
        _ &&
          (this.m_curLocImageGroup.localized_images[_] =
            _.GenerateURLFromHashAndExtAndLang(
              _,
              _,
              _.full,
              _,
              this.m_curLocImageGroupType ?? void 0,
            ));
      }
    }
    GetAllLocalizedGroupImages() {
      return (
        (this.m_curLocImageGroup && this.m_curLocImageGroup.localized_images) ||
        []
      );
    }
    GetAllLocalizedGroupImageHashAndExts() {
      return this.GetAllLocalizedGroupImages()
        .filter(Boolean)
        .map((_) => _.GetHashAndExtFromURL(_));
    }
  };
_([_], _.prototype, `m_curLocImageGroup`, void 0);
var _ = new _();
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
var _ = `wxWVRBKbQ6Y-`,
  _ = `_1hQVgn9Glyw-`,
  _ = `OQ-ETv0yIhg-`,
  _ = `wVGLukava5E-`;
function _(_) {
  let {
      onDropFiles: _,
      renderDesciption: _,
      elAdditonalButtons: _,
      elOverrideDragAndDropText: _,
    } = _,
    [_, _] = _(_),
    [_, _] = _(_, {
      accept: `image/png, image/jpeg, image/gif, image/webp`,
      multiple: !0,
    });
  return (0, _.jsxs)(`div`, {
    ..._,
    className: _(_ ? _ : _, `DragAndDropContainer`),
    children: [
      _?.(),
      (0, _.jsx)(`div`, {
        children: _ || _(`#ImagePicker_DragAndDrop`),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          (0, _.jsxs)(`label`, {
            onClick: _,
            children: [
              (0, _.jsxs)(`span`, {
                children: [_(`#ImagePicker_OrBrowse`), ` `],
              }),
              (0, _.jsx)(`span`, {
                className: _,
                children: _(`#selectimage_select_file`),
              }),
            ],
          }),
        ],
      }),
      _,
      _.children,
    ],
  });
}
var _ = `_5RINCHFuy0Y-`,
  _ = `GWe0Hc-fT2A-`,
  _ = `Wmeqy6nXS1Y-`,
  _ = `_698Kbr-wNSM-`,
  _ = `_4l0OY5qTFkk-`,
  _ = `_4StKqHsfdjg-`,
  _ = `dp7SyRphVOo-`,
  _ = `OoUlU8pBBN4-`;
function _(_) {
  let {
      imageUploader: _,
      fnUploadComplete: _,
      elOverrideDragAndDropText: _,
      forceResolution: _,
      elAdditonalButtons: _,
      rgRealmList: _,
    } = _,
    [_, _] = _(() => [_.GetUploadImages(), _.Get().GetCurEditLanguage()]),
    _ = _.useCallback(
      async (_) => {
        let _ = Array.from(_),
          _ = !0;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            { language: _ } = _(_?.name, _);
          try {
            let _ = _(_, _, _);
            ((_ = await _.AddImageForLanguage(_, _)),
              _ ||
                (console.error(
                  `ImageUploaderPanel.OnDropFiles: failed on i=` +
                    _ +
                    ` file=` +
                    _.name,
                ),
                _(
                  (0, _.jsx)(_, {
                    strDescription: _(`#ImagePicker_Error`, _.name),
                  }),
                  window,
                )));
          } catch (_) {
            let _ = _(_);
            (console.error(
              `ImageUploaderPanel.OnDropFiles: ` + _.strErrorMsg,
              _,
            ),
              _(
                (0, _.jsx)(_, {
                  strDescription: _(`#EventError_Code`, _.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
        }
        return _;
      },
      [_, _, _],
    ),
    _ = _.useMemo(
      () =>
        _ instanceof Array
          ? _
          : [
              (0, _.jsx)(
                _.Fragment,
                {
                  children: _,
                },
                `elAdditonalButtons`,
              ),
            ],
      [_],
    );
  return (
    _(() =>
      _.map((_) => ({
        _: _.GetCurrentImageOption(),
        _: _.language,
      })),
    ),
    (0, _.jsxs)(_, {
      onDropFiles: _,
      elAdditonalButtons: _,
      elOverrideDragAndDropText: _,
      children: [
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)(`div`, {
            className: _,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  asset: _,
                  forceResolution: _,
                  fnOnRemove: () => _.DeleteUploadImage(_),
                  languageRealms: _,
                },
                `arttabupload_` + _.filename + `_` + _.uploadTime,
              ),
            ),
          }),
        }),
        (0, _.jsx)(_, {
          imageUploader: _,
          fnOnUploadImageRequested: async () => {
            let _ = await _.UploadAllImages(_);
            _?.(_);
          },
        }),
      ],
    })
  );
}
function _(_) {
  let { imageUploader: _, fnOnUploadImageRequested: _ } = _,
    [_] = _(() => [_.GetUploadImages()]),
    _ = _.some((_) => _.status == `pending`),
    _ = _.some(
      (_) =>
        _.status == `waiting` ||
        _.status == `uploading` ||
        _.status == `processing`,
    );
  return (0, _.jsxs)(`div`, {
    style: {
      display: `flex`,
    },
    className: _,
    children: [
      !!_.length &&
        (0, _.jsx)(_, {
          style: {
            margin: `8px`,
          },
          onClick: _,
          disabled: !_,
          children: _(`#ImageUpload_Upload`),
        }),
      !!_.length &&
        (0, _.jsx)(_, {
          style: {
            margin: `8px`,
          },
          onClick: _.ClearImages,
          disabled: _,
          children: _(`#ImageUpload_Clear`),
        }),
    ],
  });
}
var _ = _(_);
function _(_) {
  let _ = (_) => {
      if (_ instanceof _) {
        _.ResetImage();
        let _ = window,
          _ = (0, _.jsx)(_, {
            ownerWin: _,
            uploadFile: _,
            forceResolution: _.forceResolution,
            fileType: _.forceFileType || 3,
          });
        _(_, _, `CropModal`, {
          strTitle: _(`#ImageUpload_CropModalTitle`),
        });
      } else
        console.log(
          `ImageUploadEmbeddedDialog trying to crop non image`,
          _.fileType,
          JSON.stringify(_.GetCurrentImageOption()),
        );
    },
    { asset: _, fnOnRemove: _, languageRealms: _ } = _,
    _ = _.ImageOptions?.map((_) => {
      let _ = _?.fnGetLabelText(),
        _;
      (_.bEnforceDimensions && (_ += ` - ${_.width}x${_.height}`),
        _.bDeprecated &&
          ((_ += ` ${_(`#ImageUpload_Deprecated`)}`),
          (_ = _(`#ImageUpload_Deprecated_ttip`))));
      let _;
      return (
        (_.BIsOriginalMinimumDimensions(_) && _.FileTypeMatchesImageTypes(_)) ||
          (_ = _),
        {
          label: _,
          data: _,
          strOptionClass: _,
          tooltip: _,
        }
      );
    }).filter((_) => !_.data.bHiddenFromDropdown),
    _ = {
      pending: _(`#ImageUpload_Pending`),
      waiting: _(`#ImageUpload_Waiting`),
      uploading: _(`#ImageUpload_Uploading`),
      processing: _(`#ImageUpload_Processing`),
      success: _(`#ImageUpload_SuccessCard`),
      failed: _(`#ImageUpload_Failed`),
    },
    _ = _.BSupportsLanguages()
      ? _(_.GetLanguageListForRealms(_ ?? [_.k_ESteamRealmGlobal]))
      : null,
    _ = _.IsValidAssetType(_.forceResolution, _.forceFileType),
    _ = _.status == `pending`,
    _ = _[_.status];
  _.status == `pending` &&
    (_.needsCrop
      ? (_ = _(`#ImageUpload_NeedsCrop`))
      : _.error && (_ = _(`#ImageUpload_Invalid`)));
  let _,
    _ = _.GetCurrentImageOption();
  return (
    _ && (_ = _?.find((_) => _.data.sKey == _.sKey)?.data),
    (_ ||= _?.[0]?.data),
    (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          onClick: () => _(_),
          children: (0, _.jsx)(_, {}),
        }),
        (0, _.jsx)(_, {
          asset: _,
        }),
        _ &&
          (0, _.jsx)(_, {
            strDropDownClassName: `ZsXFGEgobIY-`,
            rgOptions: _,
            selectedOption: _.language,
            onChange: (_) => (_.language = _.data),
            disabled: !_,
          }),
        _ &&
          _?.length > 1 &&
          (0, _.jsx)(_, {
            label: _.GetImageOptionLabel(),
            rgOptions: _,
            selectedOption: _,
            onChange: (_) => _.SetCurrentImageOption(_.data),
            disabled: !_,
          }),
        _ &&
          _.warnings?.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: `hb0m5mPiE2A-`,
                children: _,
              },
              `warning${_}`,
            ),
          ),
        _ &&
          _.messages?.map((_, _) =>
            (0, _.jsx)(
              `div`,
              {
                className: `CGM5a4V3nBU-`,
                children: _,
              },
              `message${_}`,
            ),
          ),
        (0, _.jsxs)(`div`, {
          className: _({
            [_]: !0,
            [_]: _.status == `failed`,
          }),
          children: [
            _,
            _(_.status) &&
              (0, _.jsx)(`div`, {
                className: `RPxGbDpMPvc-`,
                children: (0, _.jsx)(_, {
                  size: `small`,
                }),
              }),
          ],
        }),
        (0, _.jsx)(`div`, {
          className: _,
          children: _.message,
        }),
        _ &&
          _.error &&
          (0, _.jsx)(`div`, {
            className: `_4l0OY5qTFkk-`,
            children: _.error,
          }),
        _ &&
          _.needsCrop &&
          (0, _.jsx)(_, {
            onClick: () => _(_),
            children: _(`#ImageUpload_OpenEditor`),
          }),
      ],
    })
  );
}
function _(_) {
  let { asset: _ } = _;
  return _.BIsVideo()
    ? (0, _.jsxs)(`div`, {
        className: _,
        onClick: (_) =>
          _(
            (0, _.jsx)(_, {
              asset: _,
            }),
            _(_),
          ),
        children: [
          (0, _.jsxs)(`span`, {
            className: _,
            children: [_.width, ` x `, _.height],
          }),
          (0, _.jsx)(`video`, {
            height: 120,
            controls: !1,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: (0, _.jsx)(`source`, {
              src: _.dataUrl,
            }),
          }),
        ],
      })
    : (0, _.jsx)(`div`, {
        className: _,
        style: {
          backgroundImage: `url(${_.dataUrl})`,
        },
        children: (0, _.jsxs)(`span`, {
          className: _,
          children: [_.width, ` x `, _.height],
        }),
      });
}
function _(_) {
  let { asset: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    bAlertDialog: !0,
    closeModal: _,
    bAllowFullSize: !0,
    children: (0, _.jsx)(`video`, {
      controls: !0,
      autoPlay: !0,
      loop: !0,
      muted: !0,
      children: (0, _.jsx)(`source`, {
        src: _.dataUrl,
      }),
    }),
  });
}
function _(_) {
  let _ = [],
    _ = [];
  for (let _ of _) {
    if (_ == 25) continue;
    let _ = _(`#Language_` + _(_));
    _.push({
      label: _,
      data: _,
    });
  }
  return (
    _.sort((_, _) => _.label.localeCompare(_.label)),
    _.forEach((_) =>
      _.push({
        label: _.label,
        data: _.data,
      }),
    ),
    _
  );
}
var _ = (function (_) {
    return (
      (_[(_.k_eInsertThumbnail = 1)] = `k_eInsertThumbnail`),
      (_[(_.k_eInsertFullImage = 2)] = `k_eInsertFullImage`),
      (_[(_.k_eShowImageGroup = 3)] = `k_eShowImageGroup`),
      (_[(_.k_eInsertVideo = 4)] = `k_eInsertVideo`),
      _
    );
  })({}),
  _ = `MBOGLVBsJno-`,
  _ = `W-3Dq3-54Lg-`,
  _ = `quLSuE3pc1o-`,
  _ = `lnTEZ3RD-vc-`,
  _ = `kpa9FPV-AL0-`,
  _ = `n8uggtUd8lI-`,
  _ = `PNoxLvZvnxs-`,
  _ = `iGpmTErZND8-`,
  _ = `hAZUPjOGGxE-`,
  _ = `crDJadcMi8A-`,
  _ = `AmP7BU2J8Pw-`;
function _(_) {
  let { fnSetImageSearch: _ } = _,
    _ = (0, _.useRef)(null);
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`input`, {
      ref: _,
      className: _,
      type: `text`,
      placeholder: _(`#ImagePicker_Search`),
      onChange: (_) => _(_.currentTarget.value),
      onKeyDown: (_) => {
        _.key == `Escape` && (_(``), _.current && (_.current.value = ``));
      },
    }),
  });
}
var _ = _.memo(function (_) {
  let {
    fileNameSearch: _,
    clanAccountID: _,
    imageInsertCallBack: _,
    fnOnExpandImage: _,
    showImageActions: _ = !0,
    InternalOpenLocalizeImageGroup: _,
  } = _;
  return (0, _.jsx)(_, {
    clanAccountID: _,
    fileNameSearch: _,
    children: (_, _) =>
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            clanImage: _,
            searchStringHilight: _,
            imageInsertCallBack: _,
            showImageActions: _,
            fnOnOpenLocalizedImageGroup: _,
            OnImageClick: _,
          },
          _.imageid,
        ),
      ),
  });
});
function _(_) {
  let { clanAccountID: _, fileNameSearch: _, children: _ } = _,
    _ = _(_),
    _ = _.trim().toLowerCase() || ``,
    _ = _.GetFilteredClanImagesList(_, _);
  if (_.length == 0) {
    let _ = _.InitFromClanID(_, _.EUNIVERSE),
      _ = _.GetLoadState(_);
    return _ && _.loaded
      ? (0, _.jsx)(
          `div`,
          {
            className: _,
            children:
              _.length > 0
                ? _(`#ImagePicker_EmptySearch`)
                : _(`#ImagePicker_Empty`),
          },
          `ImagePicker_Result`,
        )
      : _ && _.errMsg
        ? (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _(`#ImagePicker_Error`, _.errMsg),
            },
            `ImagePicker_Result`,
          )
        : (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _(`#Loading`),
            },
            `ImagePicker_Result`,
          );
  }
  return _(_, _);
}
function _(_) {
  let {
      clanImage: _,
      searchStringHilight: _,
      imageInsertCallBack: _,
      OnImageClick: _,
      showImageActions: _,
      fnOnOpenLocalizedImageGroup: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = () => _(_, _.k_eInsertFullImage),
    _ = () => _(_, _.k_eInsertVideo),
    _ = () => _(_, _.k_eInsertThumbnail),
    _ = (_) => {
      _.url &&
        (_.dataTransfer.setData(`text`, _.url),
        _.GetClanImageDragListener().forEach((_) => {
          _(_.InitFromClanID(_.clanAccountID, _.EUNIVERSE), !0);
        }));
    },
    _ = (_) => {
      _.url &&
        _.GetClanImageDragListener().forEach((_) => {
          _(_.InitFromClanID(_.clanAccountID, _.EUNIVERSE), !1);
        });
    },
    _ = (_) => {
      _(
        (0, _.jsx)(_, {
          strTitle: _(`#ImagePicker_DeleteImageTitle`),
          strDescription: ``,
          onOK: _,
          onCancel: _,
          closeModal: _,
          children: (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`div`, {
                children: _(`#ImagePicker_DeleteAreYouSure`, _.file_name ?? ``),
              }),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`br`, {}),
              (0, _.jsx)(`div`, {
                children: _(`#ImagePicker_DeleteWarning`),
              }),
            ],
          }),
        }),
        _(_) ?? window,
      );
    },
    _ = (_) => {
      (console.log(`ClanImageWrapper on delete error: ` + _),
        _(
          (0, _.jsx)(_, {
            strTitle: _(`#Error_FailureNotice`),
            strDescription: _(`#EventDisplay_DeleteEvent_Error`),
            children: (0, _.jsx)(`p`, {
              children: _,
            }),
          }),
          window,
        ));
    },
    _ = () => {
      _(!0);
      let _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE);
      _.DeleteClanImage(_, _)
        .then((_) => {
          (_.success != 1 && _(_(_).strErrorMsg), _(!1));
        })
        .catch((_) => {
          (_(_(_).strErrorMsg), _(!1));
        });
    },
    _ = () => {},
    _ = () => {
      _ && _(_);
    },
    _ = _.file_name ? _.file_name : ``,
    _ = _(_, _, String(_.imageid), _),
    _ = _.BIsClanImageVideo(_),
    _ = _ && !_ && !_,
    _ = _ && !_ && !_,
    _ = _ && !_ && _,
    _ = _ && !_ && !_;
  return (0, _.jsx)(_, {
    placeholderHeight: `100vh`,
    className: _,
    rootMargin: `0px 0px 100% 0px`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          style: {
            backgroundImage: _ ? `` : `url( '${_.thumb_url}' )`,
          },
          draggable: !0,
          onDragStart: _,
          onDragEnd: _,
          onDoubleClick: _,
          onClick: _,
          children: (0, _.jsx)(_, {
            clanImage: _,
            className: _,
          }),
        }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: _,
            children: _(`#ImagePicker_FullSize`),
          }),
        _ &&
          (0, _.jsx)(_, {
            size: `medium`,
            className: `_9dVXPw6twXc-`,
          }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `_9em3bZdejR0-`,
            onClick: _,
            children: _(`#ImagePicker_Thumbnail`),
          }),
        _ &&
          _ &&
          (0, _.jsx)(_, {
            bDeleting: _,
            clanImage: _,
            fnOnOpenLocalizedImageGroup: _,
          }),
        _ &&
          (0, _.jsx)(`span`, {
            className: `escPuFxqCbM-`,
            onClick: _,
            children: _(`#ImagePicker_Video`),
          }),
        !_ &&
          (0, _.jsx)(`span`, {
            className: `LzW73RDKl40-`,
            onClick: _,
            children: (0, _.jsx)(`img`, {}),
          }),
        (0, _.jsx)(`div`, {
          className: _,
          title: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { clanImage: _, fnOnOpenLocalizedImageGroup: _, bDeleting: _ } = _,
    { data: _ } = _(_.clanAccountID);
  return _ || !_?.valve_admin
    ? null
    : (0, _.jsx)(`span`, {
        className: _(_, _),
        onClick: () => _?.(_),
        children: `(VO) ` + _(`#ImagePicker_Localized`),
      });
}
function _(_) {
  let { clanImage: _, className: _ } = _;
  return _.BIsClanImageVideo(_)
    ? (0, _.jsx)(`video`, {
        autoPlay: !0,
        loop: !0,
        muted: !0,
        className: _,
        children: (0, _.jsx)(`source`, {
          src: _.url,
          type: `video/` + (_.file_type == 4 ? `mp4` : `webm`),
        }),
      })
    : null;
}
function _(_) {
  let { clanSteamID: _, closeModal: _, OnClanImageSelected: _ } = _,
    _ = _.useCallback(
      (_, _) => {
        (_?.(_, _), _?.());
      },
      [_, _],
    ),
    [_, _] = _.useState(``);
  return (0, _.jsxs)(_, {
    strTitle: _(`#ImagePicker_Images`),
    strDescription: _(`#ImagePicker_DoubleClickToSelect`),
    bAlertDialog: !0,
    onOK: _,
    onCancel: _,
    children: [
      (0, _.jsx)(_, {
        fnSetImageSearch: _,
      }),
      (0, _.jsx)(_, {
        clanAccountID: _.GetAccountID(),
        fileNameSearch: _,
        imageInsertCallBack: _,
        showImageActions: !1,
      }),
    ],
  });
}
function _(_) {
  let { clanSteamID: _, OnClanImageSelected: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsxs)(`label`, {
        htmlFor: `clanimagedialog`,
        children: [
          (0, _.jsxs)(`span`, {
            children: [_(`#ImagePicker_PreviousImages`), ` `],
          }),
          (0, _.jsx)(`span`, {
            className: _,
            children: _(`#ImagePicker_PreviousImages2`),
          }),
        ],
      }),
      (0, _.jsx)(`input`, {
        style: {
          display: `none`,
        },
        _: `clanimagedialog`,
        type: `button`,
        onClick: (_) => {
          _(
            (0, _.jsx)(_, {
              clanSteamID: _,
              OnClanImageSelected: _,
            }),
            _(_) ?? window,
          );
        },
      }),
    ],
  });
}
function _(_) {
  let {
      clanSteamID: _,
      rgSupportArtwork: _,
      localizedPrimaryImage: _,
      bAllowPreviousClanImageSelection: _,
      fnSetImageURL: _,
      rgRealmList: _,
    } = _,
    [_] = _(() => [_.Get().GetCurEditLanguage()]),
    _ = _(_, _, _),
    _ = _.uploaderOverride || _,
    [_, _] = _.useState(!1),
    _ = _.useCallback(
      async (_, _) => {
        if (!_) {
          _(!0);
          try {
            let { language: _ } = _(_.file_name ?? ``, _),
              _ = _(_, _, _);
            await _.AddExistingClanImage(_, _);
          } catch (_) {
            let _ = _(_);
            (console.error(`AddExistingClanImage: ` + _.strErrorMsg, _),
              _(
                (0, _.jsx)(_, {
                  strDescription: _(`#EventError_Code`, _.strErrorMsg ?? ``),
                }),
                window,
              ));
          }
          _(!1);
        }
      },
      [_, _, _, _],
    ),
    _ = _.useMemo(
      () =>
        _
          ? [
              [
                (0, _.jsx)(
                  _,
                  {
                    clanSteamID: _,
                    OnClanImageSelected: _,
                  },
                  `clanartworkpicker`,
                ),
              ],
            ]
          : null,
      [_, _, _],
    ),
    _ = (_) => {
      for (let _ of _) {
        let _ = _.uploadResult;
        if (_?.origimagehash) {
          let _ = _(_.language, _, _);
          _.AddLocalizeImageUploaded(_.origimagehash, _);
        } else {
          let _ = _.GetClanImageByImageHash(_, _?.image_hash ?? ``),
            _ = _.image.GetCurrentImageOption();
          if (_ && _) {
            let _ = _(_.image.language, _, _);
            _(_.artworkType, _, _);
          }
        }
      }
    };
  return (0, _.jsx)(_, {
    ..._,
    imageUploader: _,
    rgRealmList: _,
    elAdditonalButtons: _
      ? [
          (0, _.jsx)(
            _,
            {
              position: `center`,
              size: `medium`,
              string: _(`#Loading`),
            },
            `throbbing`,
          ),
        ]
      : _,
    fnUploadComplete: _,
  });
}
var _ = `x0kXRDaNEsY-`,
  _ = `tggLx72V-Ck-`,
  _ = `DVwf02s2GtI-`,
  _ = `zREkqfL42-U-`,
  _ = `_7zBg1-UuADM-`,
  _ = `TMQhyilc41c-`,
  _ = `t2inDYSKOto-`,
  _ = `-FHzhwwvQvA-`,
  _ = `ZUy8iSsvilc-`,
  _ = `XRZj1OeBHRk-`,
  _ = `_2lViMA09hm4-`,
  _ = `BTC1IyUleCA-`,
  _ = `lEWE2I7Rsj8-`,
  _ = `_12sYjoMc9wE-`,
  _ = `_8hs8sf5-YPQ-`,
  _ = `Hy2GxVyZVDA-`;
function _(_) {
  let {
      clanImage: _,
      closeModal: _,
      lang: _,
      fnOnArtworkLangChange: _,
      realms: _,
      fnLangHasData: _,
    } = _,
    [_, _] = (0, _.useState)(_),
    _ = _.InitFromClanID(_.clanAccountID, _.EUNIVERSE),
    _ = _(() => _.GenerateURLFromHashAndExt(_, _.GetHashAndExt(_) ?? ``));
  return (0, _.jsx)(_, {
    strTitle: _(`#selectimage_change_artwork_lang_title`),
    strDescription: _(`#selectimage_change_artworl_lang_desc`),
    onOK: () => _?.(_, _, _),
    onCancel: _,
    closeModal: _,
    children: (0, _.jsxs)(`div`, {
      className: _(_, _),
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsx)(`img`, {
            className: _,
            src: _,
          }),
        }),
        (0, _.jsx)(_, {
          selectedLang: _,
          fnLangHasData: _,
          fnOnLanguageChanged: _,
          realms: _,
        }),
      ],
    }),
  });
}
function _(_) {
  if (!_) return _;
  let _ = _.lastIndexOf(`.`);
  return _ === -1 ? _ : _.substring(0, _);
}
var _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=`;
function _(_) {
  let {
    clanSteamID: _,
    fnGetImageHash: _,
    fnLangHasData: _,
    fnOnRemoveImage: _,
  } = _;
  _(_.GetAccountID());
  let _ = _.useMemo(() => {
      let _ = [],
        _ = _.GetLanguageListForRealms([
          _.k_ESteamRealmGlobal,
          _.k_ESteamRealmChina,
        ]);
      for (let _ of _) {
        let _ = _(_);
        if (_) {
          let _ = _(_),
            _ = _(`#Language_` + _);
          _.push({
            lang: _,
            strLang: _,
            locLang: _,
            imgHash: _,
          });
        }
      }
      return (
        (_ = _.sort((_, _) =>
          _.locLang > _.locLang ? 1 : _.locLang < _.locLang ? -1 : 0,
        )),
        _
      );
    }, [_]),
    [_, _, _] = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#selectimage_uploaded_languages`),
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              langData: _,
              ..._,
            },
            `lang_select_` + _.GetAccountID() + ` ` + _.strLang,
          ),
        ),
      }),
      !!_ &&
        (0, _.jsxs)(_, {
          className: `_1k0t2Q-C2OU-`,
          onClick: _,
          children: [
            _(`#Sale_RemoveAll`),
            (0, _.jsx)(_, {
              tooltip: _(`#Sale_RemoveAll_Tooltip`),
            }),
          ],
        }),
      (0, _.jsx)(_, {
        active: _,
        children: (0, _.jsx)(_, {
          strTitle: _(`#Dialog_AreYouSure`),
          strDescription: _(`#ImageUpload_DeleteAll_Confirm`),
          closeModal: _,
          onOK: () => {
            for (let _ = 0; _ < 32; _++) _ && _ && _(_) && _(_);
          },
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      clanSteamID: _,
      langData: _,
      langOverride: _,
      fnOnLanguagePreviewChange: _,
      fnOnArtworkLangChange: _,
      fnOnRemoveImage: _,
    } = _,
    [_, _] = _(() => {
      let _ = _.GetClanImageByImageHash(_, _.imgHash),
        _ = ``;
      _ &&
        (_ = _.GenerateURLFromHashAndExtAndLang(
          _,
          _.GetHashAndExt(_),
          _.full,
          _.lang,
        ));
      let _ = _;
      return (_ != _.lang && (_ = _.imgHash ? _ : _), [_, _]);
    });
  return (0, _.jsxs)(`div`, {
    _: _.strLang,
    className: _,
    onClick: (_) => {
      let _ = _(_.currentTarget._);
      _(_);
    },
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.locLang,
      }),
      (0, _.jsxs)(`span`, {
        className: _,
        children: [
          !!_ &&
            (0, _.jsx)(`a`, {
              href: _,
              target: `_blank`,
              children: (0, _.jsx)(_, {
                toolTipContent: _(`#selectimage_viewimage_ttip`),
                children: _(),
              }),
            }),
          !!_ &&
            (0, _.jsx)(_, {
              ..._,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              fnOnRemoveImage: _,
              langData: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      clanSteamID: _,
      langData: _,
      fnOnArtworkLangChange: _,
      fnGetImageHash: _,
      fnLangHasData: _,
      realms: _,
    } = _,
    [_, _, _] = _(),
    _ = _(() => {
      let _ = _(_.lang);
      return (
        _(
          !_ || !_.includes(`.`),
          `ChangeLanguageButton: Unexpected File Extension: ` + _,
        ),
        _.GetClanImageByImageHash(_, _)
      );
    });
  if (!_) console.error(`image does not exists on server`);
  else
    return (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          toolTipContent: _(`#selectimage_reassign_image_ttip`),
          children: (0, _.jsx)(`img`, {
            "data-lang": _.lang,
            src: _,
            onClick: () => _(),
          }),
        }),
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            active: _,
            children: (0, _.jsx)(_, {
              clanImage: _,
              lang: _.lang,
              fnOnArtworkLangChange: _,
              fnLangHasData: _,
              realms: _,
              closeModal: _,
            }),
          }),
        }),
      ],
    });
}
function _(_) {
  let { fnOnRemoveImage: _, langData: _ } = _,
    [_, _, _] = _();
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _(`#selectimage_delete_image_ttip`),
        children: (0, _.jsx)(`img`, {
          "data-lang": _.lang,
          src: _,
          onClick: _,
        }),
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            strTitle: _(`#selectimage_remove_image`),
            strDescription: _(
              `#selectimage_remove_details`,
              _(`#Language_` + _(_.lang)),
            ),
            onOK: () => {
              _(_.lang);
            },
            closeModal: _,
          }),
        }),
      }),
    ],
  });
}
var _ = `dGiOZKKuxfQ-`,
  _ = `h7-04bl97uc-`,
  _ = `MhIotXf5RFA-`,
  _ = `mSMnUkR7SZM-`,
  _ = `aWAciZoU3Zo-`,
  _ = `_8AV36Rh-Ve4-`,
  _ = `lxYifi3D8mU-`,
  _ = `MwNTpeRZ8FM-`,
  _ = `RdR4GEnIG5Q-`,
  _ = `epGy6XXAGPQ-`;
function _(_) {
  let {
      event: _,
      spotlightURLOverride: _,
      fnHandleOpenEvent: _,
      fnImageFailureCallback: _,
      fnFilterImageURLsForKnownFailures: _,
      langOverride: _,
    } = _,
    _ = _(),
    _ = _.useCallback(
      (_) => {
        (_.preventDefault(), _ && _(_));
      },
      [_, _],
    ),
    _ = _ || _(_.LANGUAGE),
    [_, _, _] = _(() => [
      _.GetSummaryWithFallback(_),
      _.GetNameWithFallback(_),
      _.BShowLibrarySpotlightText(),
    ]),
    _ = `spotlight`,
    _ = _.spotlight_main;
  (_.appid == 2434320 || _.EUNIVERSE == 2) &&
    ((_ = _
      ? `localized_store_app_spotlight_mobile`
      : `localized_store_app_spotlight`),
    (_ = _.full));
  let _ = _(_ === void 0 ? _ : void 0, _, _, _) ?? (_ === void 0 ? [] : [_]);
  _ && _ && (_ = _(_));
  let _ = _.replace(/https:\/\/[^ ]*/gi, ``).trimLeft();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(`div`, {
      className: _,
      ref: _.containerRef,
      children: (0, _.jsxs)(_, {
        className: _(_, _),
        onActivate: _,
        focusable: !0,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(_, {
              className: _,
              rgSources: _,
              onIncrementalError: (_, _, _) => _ && _(_),
            }),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
                rgSources: _,
                onIncrementalError: (_, _, _) => _ && _(_),
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children:
                  _ &&
                  (0, _.jsxs)(`div`, {
                    className: `Kirdf-ZVux8-`,
                    children: [
                      (0, _.jsx)(_, {
                        className: `D6QCZmpoq5M-`,
                        rgSources: _,
                        onIncrementalError: (_, _, _) => _ && _(_),
                      }),
                      (0, _.jsxs)(`div`, {
                        className: `SPJgXF8Oqn4-`,
                        children: [
                          (0, _.jsx)(`div`, {
                            className: `mTAOqZLWhOo-`,
                            children: _,
                          }),
                          (0, _.jsx)(`div`, {
                            className: `_9RjQ-a9Uc6o-`,
                            children: _,
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
    }),
  });
}
var _ = `JMbtQkd0K8E-`,
  _ = `snS7KDov-nE-`,
  _ = `nvWdGclp6FI-`,
  _ = `xK18jc4N1cw-`,
  _ = `IQEedJq4bc8-`,
  _ = `fCimlPrmscM-`,
  _ = `e6k9OpDXG-Q-`,
  _ = `seprbrMSMhI-`,
  _ = `_4CNssq7QFLI-`,
  _ = `yzbYtn5vgZU-`,
  _ = `idlQxtNGVBg-`,
  _ = `mELVvJo8G3c-`,
  _ = `fF5tI3UN-YY-`;
function _(_) {
  let {
      langOverride: _,
      artworkType: _,
      fnOnLanguagePreviewChange: _,
      clanSteamID: _,
      eventModel: _,
      partnerEventStore: _,
      fnOnRemoveImage: _,
      fnOnArtworkLangChange: _,
      realms: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
    } = _,
    _ = _(_, _),
    _ = _ ? _.GenerateURLFromHashAndExtAndLang(_, _, _.full, _) : ``,
    [_] = _(() => [_(_, _)]);
  return _ == 0
    ? (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === `capsule` &&
            (0, _.jsx)(_, {
              imgURL: _.IMG_URL + `events/defaults/default_img_cover.jpg`,
              eventModel: _,
            }),
          _ === `background` &&
            (0, _.jsx)(_, {
              imgURL: _.IMG_URL + `events/defaults/default_img_header.jpg`,
              lang: _,
              eventModel: _,
              partnerEventStore: _,
            }),
          !![
            `spotlight`,
            `localized_store_app_spotlight`,
            `localized_store_app_spotlight_mobile`,
          ].includes(_) &&
            (0, _.jsx)(_, {
              langOverride: _,
              artworkType: _,
              eventModel: _,
            }),
          (0, _.jsx)(`div`, {
            children: _(`#EventEditor_ArtworkMissing`),
          }),
        ],
      })
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _ === `capsule` &&
            (0, _.jsx)(_, {
              imgURL: _,
              eventModel: _,
              langOverride: _,
            }),
          _ === `background` &&
            (0, _.jsx)(_, {
              imgURL: _,
              lang: _,
              eventModel: _,
              partnerEventStore: _,
            }),
          _ === `spotlight` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          _ === `localized_store_app_spotlight` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          _ === `localized_store_app_spotlight_mobile` &&
            (0, _.jsx)(_, {
              imgURL: _,
              event: _,
              lang: _,
            }),
          (_ === `broadcast_left` || _ === `broadcast_right`) &&
            (0, _.jsx)(_, {
              imgURL: _,
              side: _ === `broadcast_right` ? `right` : `left`,
            }),
          _ === `sale_header` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `sale_overlay` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _.includes(_) &&
            (0, _.jsx)(`img`, {
              className: `_1MBhWd0--I8-`,
              src: _.GetLocalizedImageGroupForEditAsURL(_, _) ?? void 0,
            }),
          _ === `product_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `product_mobile_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `sale_logo` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `sale_cross_promo_logo` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `bestofyear_banner` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          _ === `bestofyear_banner_mobile` &&
            (0, _.jsx)(_, {
              imgURL: _,
            }),
          (0, _.jsx)(_, {
            langOverride: _,
            clanSteamID: _,
            fnOnLanguagePreviewChange: _,
            fnOnRemoveImage: _,
            fnOnArtworkLangChange: _,
            realms: _,
            fnLangHasData: _,
            fnGetImageHash: (_) => _(_(_, _) ?? ``),
          }),
        ],
      });
}
function _(_) {
  let { artworkType: _, langOverride: _, eventModel: _ } = _,
    _ = _[_],
    _ = _.useMemo(
      () => _(_(`#EventEditor_ArtworkType_` + _), `${_.width} X ${_.height}`),
      [_.height, _.width, _],
    );
  return (0, _.jsx)(_, {
    lang: _,
    imgURL: _,
    event: _,
  });
}
function _(_, _) {
  let _ = document.createElement(`canvas`);
  ((_.width = 780), (_.height = 200));
  let _ = _.getContext(`2d`);
  for (let _ = 0; _ < 200; _ += 20)
    for (let _ = 0; _ < 780; _ += 20)
      ((_.fillStyle = (_ / 20 + _ / 20) % 2 == 0 ? `#a405e3ff` : `#000000`),
        _.fillRect(_, _, 20, 20));
  let _ = _.createLinearGradient(0, 0, 780, 0);
  (_.addColorStop(0, `rgba(32,32,32,0.8)`),
    _.addColorStop(1, `rgba(60,60,60,0.8)`),
    (_.fillStyle = _),
    _.fillRect(0, 0, 780, 200));
  let _ = _.createRadialGradient(390, 100, 0, 390, 100, 650);
  return (
    _.addColorStop(0, `rgba(0,0,0,0)`),
    _.addColorStop(1, `rgba(0,0,0,0.6)`),
    (_.fillStyle = _),
    _.fillRect(0, 0, 780, 200),
    (_.fillStyle = `#fff`),
    (_.font = `32px Arial`),
    (_.textAlign = `center`),
    (_.textBaseline = `middle`),
    _.fillText(_, 390, 80),
    _ && ((_.font = `18px Arial`), _.fillText(_, 390, 125)),
    _.toDataURL(`image/png`)
  );
}
function _(_) {
  let { imgURL: _, eventModel: _, langOverride: _ } = _,
    _ = _();
  return (0, _.jsx)(`div`, {
    style: {
      display: `flex`,
      width: `304px`,
    },
    children: (0, _.jsx)(_, {
      event: _,
      imageURLOverride: _,
      langOverride: _ ?? _,
    }),
  });
}
function _(_) {
  let { lang: _, eventModel: _, partnerEventStore: _ } = _,
    _ = _(),
    [_, _, _, _, _] = _(() => [
      _.GetNameWithFallback(_),
      _.GetDescriptionWithFallback(_),
      _.GetSubTitleWithLanguageFallback(_),
      _.type,
      _.AnnouncementGID,
    ]),
    _ = _
      ? (0, _.jsx)(_, {
          text: _ || ``,
          showErrorInfo: !1,
          event: _,
          languageOverride: _.Get().GetCurEditLanguage(),
        })
      : _(`#selectimage_display_event_body`);
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _(`#selectimage_preview_title_1`),
      }),
      (0, _.jsx)(`div`, {
        className: _(_, `DetailPageExample`),
        children: (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`img`, {
                src: _.imgURL,
              }),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _ || _(`#selectimage_display_event_title`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _ || _(`#selectimage_display_event_subtitle`),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _,
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      _ != 12 &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(`div`, {
              className: `y-gExtn9yi8-`,
            }),
            (0, _.jsx)(`div`, {
              className: `snS7KDov-nE-`,
              children: _(`#selectimage_preview_title_2`),
            }),
            (0, _.jsx)(`div`, {
              className: _(`nvWdGclp6FI-`, `DetailPageExample`),
              children: (0, _.jsx)(`div`, {
                className: `wm--jcPYtBE-`,
                children: (0, _.jsx)(
                  _,
                  {
                    event: _,
                    emoticonStore: _,
                    partnerEventStore: _,
                    headerClassnames: `editor`,
                    langOverride: _,
                    bDisableBroadcastPlayer: !0,
                  },
                  _,
                ),
              }),
            }),
          ],
        }),
    ],
  });
}
var _ = (_) => {
    let [_] = _(_.event.appid, {
      include_assets: !0,
    });
    if (!_) return null;
    let _ = _.GetName(),
      _ = _.GetAssets()?.GetCommunityIconURL();
    return (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(_, {
        event: _.event,
        strDisplayName: _ ?? ``,
        gameIconUrl: _,
        spotlightURLOverride: _.imgURL,
        langOverride: _.lang,
      }),
    });
  },
  _ = (_) => {
    let _ = [
      (0, _.jsx)(
        `img`,
        {
          src: _.imgURL,
        },
        `img`,
      ),
      (0, _.jsx)(
        `div`,
        {
          className: _,
        },
        `video`,
      ),
    ];
    return (
      _.side === `right` && _.reverse(),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      })
    );
  },
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    }),
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    }),
  _ = (_) =>
    (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`img`, {
        style: {
          width: `100%`,
        },
        src: _.imgURL,
      }),
    });
function _(_, _) {
  let _ = 0;
  for (let _ = 0; _ < 32; ++_) (_(_, _)?.length ?? 0) > 0 && (_ += 1);
  return _;
}
var _ = `https://partner.steamgames.com/doc/store/localization#supported_languages`;
function _(_) {
  let {
      artworkType: _,
      headerHint: _,
      appid: _,
      fnToggleMinimize: _,
      realms: _,
      eventModel: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
      fnSetImageURL: _,
      partnerEventStore: _,
    } = _,
    [_] = _(_, {
      include_assets: !0,
    }),
    [_, _] = _(() => [_?.GetEventType(), _?.BHasTag(`vo_marketing_message`)]),
    _ = _ == 36,
    _ = null;
  _ === 2
    ? (_ = (0, _.jsx)(`span`, {
        style: {
          color: `#C6512B`,
        },
        children: _(`#EventEditor_Required`),
      }))
    : _ === 1
      ? (_ = (0, _.jsx)(`span`, {
          style: {
            color: `#D7BC86`,
          },
          children: _(`#EventEditor_Suggested`),
        }))
      : _ === 3 &&
        (_ = (0, _.jsx)(`span`, {
          style: {
            color: `#D7BC86`,
          },
          children: _(`#EventEditor_Requested`),
        }));
  let _ = null;
  _ === `capsule`
    ? (_ = _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_creatorhome_1`),
                ],
              }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_creatorhome_2`),
                ],
              }),
            ],
          })
        : (0, _.jsxs)(_.Fragment, {
            children: [
              !!_ &&
                (0, _.jsxs)(`div`, {
                  className: `GF-R3pK6u-A-`,
                  children: [
                    (0, _.jsx)(`p`, {
                      children: _(`#PartnerEvent_MM_ArtworkTip`),
                    }),
                    (0, _.jsx)(`p`, {
                      children: (0, _.jsx)(`a`, {
                        href: `${_.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                        children: _(`#PartnerEvent_MM_LearnMore`),
                      }),
                    }),
                  ],
                }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_design_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_1`),
                ],
              }),
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_capsule_2`),
                ],
              }),
            ],
          }))
    : _ === `background`
      ? (_ = (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`p`, {
            children: [
              (0, _.jsx)(`strong`, {
                children: _(`#selectimage_tip_design_title`),
              }),
              `: `,
              _(`#selectimage_tip_background_1`),
            ],
          }),
        }))
      : _ === `spotlight` || _ === `localized_store_app_spotlight`
        ? (_ = (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)(`p`, {
              children: [
                (0, _.jsx)(`strong`, {
                  children: _(`#selectimage_tip_usage_title`),
                }),
                `: `,
                _(`#selectimage_tip_store_spotlight_1`),
              ],
            }),
          }))
        : _ === `localized_store_app_spotlight_mobile`
          ? (_ = (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`strong`, {
                    children: _(`#selectimage_tip_usage_title`),
                  }),
                  `: `,
                  _(`#selectimage_tip_store_mobile_spotlight`),
                ],
              }),
            }))
          : _ === `broadcast_left` || _ === `broadcast_right`
            ? (_ = (0, _.jsx)(_.Fragment, {
                children: (0, _.jsx)(`p`, {
                  children: _(`#selectimage_tip_broadcast_1`),
                }),
              }))
            : _ === `sale_header`
              ? (_ = (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#selectimage_tip_required_title`),
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_usage_title`),
                        }),
                        `: `,
                        _(`#selectimage_tip_sale_header_1`),
                      ],
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_design_title`),
                        }),
                        `: `,
                        _(`#selectimage_tip_sale_header_2`),
                      ],
                    }),
                    (0, _.jsx)(`p`, {
                      children: _(`#selectimage_tip_sale_header_4`),
                    }),
                    (0, _.jsxs)(`p`, {
                      children: [
                        (0, _.jsx)(`b`, {
                          children: _(`#selectimage_tip_template_title`),
                        }),
                        `: `,
                        (0, _.jsx)(`a`, {
                          href: `https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0`,
                          children: _(`#selectimage_tip_sale_header_3`),
                        }),
                      ],
                    }),
                    (0, _.jsx)(`br`, {}),
                  ],
                }))
              : _ === `hero`
                ? _ &&
                  (_ = (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(`p`, {
                        children: _(`#selectimage_tip_hero_1`),
                      }),
                      !_.GetAssets()?.GetLibraryHeroURL() &&
                        (0, _.jsx)(`p`, {
                          className: `_9rhLFCwqjPg-`,
                          children: _(`#EventEdtior_ArtworkType_hero_warning`),
                        }),
                    ],
                  }))
                : _ === `localized_image_group` ||
                    _ === `link_capsule` ||
                    _ === `sale_section_title` ||
                    _ === `schedule_track_art` ||
                    _ === `localized_background_art`
                  ? (_ = (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(`p`, {
                          children: _(`#ImagePickerLoc_Desc`),
                        }),
                        (0, _.jsx)(`p`, {
                          children: _(
                            `#ImagePickerLoc_Files`,
                            (0, _.jsx)(`a`, {
                              href: _,
                              target: _.IN_CLIENT ? void 0 : `_blank`,
                              children: _(`#ImagePickerLoc_URL`),
                            }),
                          ),
                        }),
                      ],
                    }))
                  : _ === `product_banner`
                    ? (_ = (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(`div`, {
                            className: _,
                            children: _(`#selectimage_tip_optional_title`),
                          }),
                          (0, _.jsxs)(`p`, {
                            children: [
                              (0, _.jsx)(`b`, {
                                children: _(`#selectimage_tip_usage_title`),
                              }),
                              `: `,
                              _(`#selectimage_tip_sale_product_banner`),
                            ],
                          }),
                        ],
                      }))
                    : _ === `product_mobile_banner` ||
                        _ === `product_banner_override` ||
                        _ === `product_mobile_banner_override`
                      ? (_ = (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(`div`, {
                              className: _,
                              children: _(`#selectimage_tip_optional_title`),
                            }),
                            (0, _.jsxs)(`p`, {
                              children: [
                                (0, _.jsx)(`b`, {
                                  children: _(`#selectimage_tip_usage_title`),
                                }),
                                `: `,
                                _(`#selectimage_tip_sale_product_banner`),
                                _ === `product_mobile_banner` &&
                                  (0, _.jsxs)(`span`, {
                                    children: [
                                      `  `,
                                      _(
                                        `#selectimage_tip_sale_product_banner_mobile`,
                                      ),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }))
                      : _ === `tab_bar_background`
                        ? (_ = (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsxs)(`p`, {
                                children: [
                                  (0, _.jsx)(`strong`, {
                                    children: _(
                                      `#selectimage_tip_design_title`,
                                    ),
                                  }),
                                  `:`,
                                  _(`#Sale_Tabs_Background_Design`),
                                ],
                              }),
                              (0, _.jsxs)(`p`, {
                                children: [
                                  (0, _.jsx)(`strong`, {
                                    children: _(`#selectimage_tip_usage_title`),
                                  }),
                                  `:`,
                                  _(`#Sale_Tabs_Background_Usage`),
                                ],
                              }),
                            ],
                          }))
                        : _ === `sale_logo`
                          ? (_ = (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(`div`, {
                                  className: _,
                                  children: _(
                                    `#selectimage_tip_optional_title`,
                                  ),
                                }),
                                (0, _.jsxs)(`p`, {
                                  children: [
                                    (0, _.jsx)(`b`, {
                                      children: _(
                                        `#selectimage_tip_usage_title`,
                                      ),
                                    }),
                                    `: `,
                                    _(`#selectimage_tip_pageLogo`),
                                  ],
                                }),
                              ],
                            }))
                          : _ === `sale_cross_promo_logo`
                            ? (_ = (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)(`div`, {
                                    className: _,
                                    children: _(
                                      `#selectimage_tip_optional_title`,
                                    ),
                                  }),
                                  (0, _.jsxs)(`p`, {
                                    children: [
                                      (0, _.jsx)(`b`, {
                                        children: _(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      _(
                                        `#selectimage_tip_sale_cross_promo_logo`,
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : (_ === `bestofyear_banner` ||
                                _ === `bestofyear_banner_mobile`) &&
                              (_ = (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)(`div`, {
                                    className: _,
                                    children: _(
                                      `#selectimage_tip_required_title`,
                                    ),
                                  }),
                                  (0, _.jsxs)(`p`, {
                                    children: [
                                      (0, _.jsx)(`b`, {
                                        children: _(
                                          `#selectimage_tip_usage_title`,
                                        ),
                                      }),
                                      `: `,
                                      _(`#selectimage_tip_bestofyear`),
                                    ],
                                  }),
                                ],
                              }));
  let _ = _[_.artworkType].width,
    _ = _[_.artworkType].height;
  return (0, _.jsxs)(`div`, {
    _: _._,
    className: _,
    children: [
      !!_.title &&
        (0, _.jsxs)(`div`, {
          className: _(`Y63LZFKwGXE-`, _ && `tU9SaxlQ-9k-`),
          onClick: _,
          children: [
            _.title,
            (0, _.jsx)(`span`, {
              children: `\xA0`,
            }),
            _,
            _ &&
              (0, _.jsx)(_, {
                bIsMinimized: !!_.bIsMinimized,
                fnToggleMinimize: _,
              }),
          ],
        }),
      !_.bIsMinimized &&
        (0, _.jsxs)(`div`, {
          className: _(`XRZj1OeBHRk-`, `hvd5bQPy4pQ-`),
          children: [
            _,
            !!(_ && _) &&
              (0, _.jsxs)(`p`, {
                children: [
                  (0, _.jsx)(`b`, {
                    children: _(`#selectimage_tip_dimensions_title`),
                  }),
                  `:\xA0`,
                  _(`#selectimage_tip1`, _(_), _(_)),
                ],
              }),
            !!_.strWarning &&
              (0, _.jsx)(`div`, {
                children: (0, _.jsx)(`p`, {
                  className: `n7RXDTH-Wf8-`,
                  children: _.strWarning,
                }),
              }),
            _.elEventArtworkExample,
            `\xA0`,
            (0, _.jsx)(`br`, {}),
            _.elAdditionalControls,
            !!_.fnRemoveAllArtwork &&
              (0, _.jsx)(_, {
                className: `_1k0t2Q-C2OU-`,
                onClick: (_) => {
                  _(
                    (0, _.jsx)(_, {
                      fnRemoveAllArtwork: _.fnRemoveAllArtwork,
                    }),
                    _(_) ?? window,
                  );
                },
                children: _(`#Sale_RemoveAll`),
              }),
          ],
        }),
      !_.bIsMinimized &&
        (0, _.jsx)(_, {
          clanSteamID: _.clanSteamID,
          title: _.title ?? ``,
          eventModel: _,
          artworkType: _.artworkType,
          realms: _,
          appid: _,
          fnGetImageHashAndExt: _,
          fnSetImageURL: _,
          fnLangHasData: _,
          partnerEventStore: _,
        }),
    ],
  });
}
function _(_) {
  let { fnRemoveAllArtwork: _, closeModal: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _(`#Sale_RemoveAll`),
    strDescription: _(`#ImageUpload_DeleteAll_Confirm`),
    onOK: () => {
      (_?.(), _?.());
    },
    onCancel: _,
  });
}
function _(_) {
  let {
      artworkType: _,
      realms: _,
      clanSteamID: _,
      fnLangHasData: _,
      fnGetImageHashAndExt: _,
      fnSetImageURL: _,
      eventModel: _,
      appid: _,
      partnerEventStore: _,
    } = _,
    _ = _ === `localized_image_group`,
    [_, _] = _.useState(_()),
    [_, _] = _.useState([]),
    _ = _.useCallback(
      (_, _, _) => {
        let _ = [];
        (_.find((_) => _.clanImage.imageid == _.imageid)
          ? (_ = _.map((_) =>
              _.clanImage.imageid == _.imageid
                ? {
                    clanImage: _,
                    lang: _,
                  }
                : _,
            ))
          : _ &&
            (_ = _.concat({
              clanImage: _,
              lang: _,
            })),
          _(_));
      },
      [_],
    ),
    _ = _.useCallback(
      (_, _, _) => {
        _(() => {
          (_(_(_, _) ?? ``) == _.image_hash && _(_, null, _),
            _(_, _, _),
            _(_, _, !1));
        });
      },
      [_, _, _, _],
    );
  return _ === `hero`
    ? (0, _.jsx)(`div`, {
        style: {
          padding: `16px`,
        },
        children: (0, _.jsx)(_, {
          style: {
            textTransform: `uppercase`,
            width: `200px`,
          },
          onClick: () =>
            window.open(
              `${_.PARTNER_BASE_URL}admin/game/editbyappid/${_}?activetab=tab_graphicalassets`,
            ),
          children: _(`#ImageUpload_EditHeroImage`),
        }),
      })
    : (0, _.jsxs)(`div`, {
        children: [
          (0, _.jsx)(_, {
            list: _,
            fnOnArtworkLanguageChange: _,
            realms: _,
            fnLangHasData: _,
          }),
          (0, _.jsx)(`div`, {
            children: (0, _.jsx)(`div`, {
              className: _(_, _),
              children: (0, _.jsx)(_, {
                eventModel: _,
                clanSteamID: _,
                fnOnLanguagePreviewChange: (_) => {
                  _ != _ && _(_);
                },
                langOverride: _,
                fnOnArtworkLangChange: _ ? null : _,
                artworkType: _,
                fnOnRemoveImage: _ ? null : (_) => _(_, null, _),
                realms: _,
                fnLangHasData: _,
                fnGetImageHashAndExt: _,
                partnerEventStore: _,
              }),
            }),
          }),
        ],
      });
}
var _ = class extends _.Component {
  ShowLangChangeDialog(_, _) {
    let {
      fnOnArtworkLanguageChange: _,
      realms: _,
      fnLangHasData: _,
    } = this.props;
    _(
      (0, _.jsx)(_, {
        clanImage: _,
        lang: _,
        fnOnArtworkLangChange: _,
        fnLangHasData: _,
        realms: _,
      }),
      window,
    );
  }
  GenerateImageMappings() {
    let _ = [],
      { list: _ } = this.props;
    return (
      _.forEach((_) => {
        let { clanImage: _, lang: _ } = _,
          _ = _(`#Language_` + _(_));
        _.push(
          (0, _.jsxs)(
            `div`,
            {
              className: _,
              children: [
                (0, _.jsx)(`span`, {
                  children: _(
                    `#ImageUpload_Success_Mapping`,
                    _.file_name ?? ``,
                    _,
                  ),
                }),
                (0, _.jsx)(`a`, {
                  onClick: () => this.ShowLangChangeDialog(_, _),
                  children: _(`#ImageUpload_Success_Mapping_Change`),
                }),
              ],
            },
            `img_lang_` + _.clanImage.imageid + `_` + _,
          ),
        );
      }),
      _
    );
  }
  render() {
    let { list: _ } = this.props;
    if (!_ || _.length == 0) return (0, _.jsx)(`div`, {});
    let _ = this.GenerateImageMappings();
    return (0, _.jsx)(`div`, {
      className: _,
      children: _,
    });
  }
};
(_([_], _.prototype, `ShowLangChangeDialog`, null), (_ = _([_], _)));
function _(_) {
  let {
      clanSteamID: _,
      appid: _,
      eventModel: _,
      realms: _,
      loc_images: _,
      artworkType: _,
      fnLangHasData: _,
      closeModal: _,
      fnSetImageURL: _,
      partnerEventStore: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _(_, _),
    _ = _.GetAccountID(),
    [_] = _(() => [_.GetFilesToUpload().length - _.GetCompletedFiles()]);
  (0, _.useEffect)(() => {
    (_(!1),
      _.ClearImageGroup(),
      _?.forEach((_, _) => {
        let _ = _.InitFromClanID(_, _.EUNIVERSE);
        if (_.GetAllLocalizedGroupImages().length == 0) {
          let _ = _ && _.GetHashFromHashAndExt(_),
            _ = _ && _.GetClanImageByImageHash(_, _);
          _ && _.SetPrimaryImageForImageGroup(_, _);
        }
        _.SetLocalizedImageGroupAtLang(_, _, _ ?? null);
      }),
      _(!0));
  }, [_, _, _]);
  let _ = (0, _.useCallback)(
      (_, _, _ = 0) => {
        let _ = _.InitFromClanID(_, _.EUNIVERSE),
          _ = _.GetHashAndExt(_ ?? null);
        if (_.GetAllLocalizedGroupImages().length == 0) {
          let _ = _ && _.GetHashFromHashAndExt(_),
            _ = _ && _.GetClanImageByImageHash(_, _);
          _ && _.SetPrimaryImageForImageGroup(_, _);
        }
        _.SetLocalizedImageGroupAtLang(_, _, _);
      },
      [_],
    ),
    _ = (0, _.useCallback)((_, _) => {
      let _ = _.GetLocalizedImageGroupForEdit()?.localized_images[_];
      return _ && _.split(`/`).pop();
    }, []);
  return (0, _.jsxs)(_, {
    onCancel: _,
    closeModal: _,
    bDisableBackgroundDismiss: !0,
    bAllowFullSize: !0,
    className: _(_, _),
    strTitle: _.strLocalizedTitle || _(`#ImagePickerLoc_Title`),
    strDescription: _.strLocalizedDescription,
    bOKDisabled: _ > 0,
    onOK: () => {
      let _ = _.GetLocalizedImageGroupForEdit();
      for (let _ = 0; _ < 32; ++_) {
        let _ = _?.localized_images[_];
        if (_) {
          let _ = _.split(`/`).pop() || ``;
          _(
            _,
            {
              image_hash: _(_),
              clanAccountID: _,
              file_type: _(_) ?? 0,
              imageid: 0,
            },
            _,
          );
        } else _(_, null, _);
      }
      (_.ClearImageGroup(), _.onOK ? _.onOK() : _?.());
    },
    strOKButtonText: _ > 0 ? _(`#ImagePickerLoc_DismissWarning`) : void 0,
    children: [
      _
        ? (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                clanSteamID: _,
                rgSupportArtwork: [_],
                fnSetImageURL: _,
                bAllowPreviousClanImageSelection: !1,
                rgRealmList: _ ?? [],
                uploaderOverride: _,
              }),
              (0, _.jsx)(_, {
                clanSteamID: _,
                eventModel: _,
                artworkType: _,
                title: null,
                appid: _,
                realms: _,
                fnRemoveAllArtwork: () => _.ClearImageGroup(),
                fnSetImageURL: _,
                fnGetImageHashAndExt: _,
                fnLangHasData: _,
                partnerEventStore: _,
              }),
            ],
          })
        : (0, _.jsx)(_, {
            size: `medium`,
            position: `center`,
            string: _(`#Loading`),
          }),
      _.children,
    ],
  });
}
function _(_) {
  let { setting: _, fnUpdateSetting: _, label: _ } = _,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _.push({
          label: _(`#EventEditor_Tile_NoRepeat`),
          data: `no-repeat`,
        }),
        _.push({
          label: _(`#EventEditor_Tile_RepeatX`),
          data: `repeat-x`,
        }),
        _.push({
          label: _(`#EventEditor_Tile_RepeatY`),
          data: `repeat-y`,
        }),
        _.push({
          label: _(`#EventEditor_Tile_Repeat`),
          data: `repeat`,
        }),
        _.push({
          label: _(`#EventEditor_Tile_NoRepeatAndBlur`),
          data: `coverBlur`,
        }),
        _
      );
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _ || _(`#EventEditor_Tile_Title`),
      }),
      (0, _.jsx)(_, {
        strDropDownClassName: _,
        rgOptions: _,
        selectedOption: _ || `no-repeat`,
        onChange: (_) => _(_.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
        },
      }),
    ],
  });
}
function _(_) {
  let { closeModal: _, imgGroup: _, fnUpdateImageGroup: _, eventModel: _ } = _,
    { openColorPicker: _ } = _(),
    [_, _] = (0, _.useState)(() => _),
    [_, _, _, _, _, _, _, _] = _(() => [
      _.repeat_setting,
      _.scaling_setting,
      _.background_color1,
      _.background_color2,
      _.gradient_setting,
      _.position_setting,
      _.GetIncludedRealmList(),
      _.randomize_section_order,
    ]),
    [_] = (0, _.useState)(() => _(_.localized_background_art ?? {}));
  return (0, _.jsxs)(_, {
    strLocalizedTitle: _(`#BackgroundGroups_Configure`),
    strLocalizedDescription: _(`#BackgroundGroups_DialogDesc`),
    appid: _.appid,
    eventModel: _,
    clanSteamID: _.clanSteamID,
    closeModal: _,
    partnerEventStore: _,
    artworkType: `localized_background_art`,
    realms: _,
    loc_images: _,
    fnLangHasData: (_) => !!_[_],
    fnGetImageHash: (_, _) => _[_],
    fnSetImageURL: async (_, _, _) => {
      _((_) => {
        let _ = {
            ..._.localized_background_art,
          },
          _ = _.GetHashAndExt(_);
        return (
          _ ? (_[_(_)] = _) : delete _[_(_)],
          {
            ..._,
            localized_background_art: _,
          }
        );
      });
    },
    onOK: () => {
      _(
        (_) => (
          _(_),
          _ && setTimeout(_, 1),
          {
            ..._,
          }
        ),
      );
    },
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                setting: _,
                fnUpdateSetting: (_) => {
                  _(
                    _ === `no-repeat`
                      ? {
                          ..._,
                          repeat_setting: _,
                        }
                      : {
                          ..._,
                          repeat_setting: _,
                          scaling_setting: `auto`,
                        },
                  );
                },
                label: _(`#BackgroundGroups_Repeating`),
              }),
              (0, _.jsx)(_, {
                scaling_setting: _ ?? `contain`,
                disable: _ !== `no-repeat`,
                fnUpdateSetting: (_) =>
                  _({
                    ..._,
                    scaling_setting: _,
                  }),
              }),
              _ != `cover` &&
                (0, _.jsx)(_, {
                  position_settings: _,
                  fnUpdateSetting: (_) =>
                    _({
                      ..._,
                      position_setting: _,
                    }),
                }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                children: _(`#BackgroundGroups_Color`),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    style: {
                      backgroundColor: _,
                    },
                    onClick: (_) =>
                      _(_, {
                        color: _,
                        onChange: (_) =>
                          _({
                            ..._,
                            background_color1: _ || void 0,
                          }),
                      }),
                    children: _(
                      _ === void 0
                        ? `#BackgroundGroups_ColorNum_unset`
                        : `#BackgroundGroups_ColorNum`,
                      1,
                    ),
                  }),
                  `\xA0`,
                  (0, _.jsx)(_, {
                    onClick: () =>
                      _({
                        ..._,
                        background_color1: void 0,
                      }),
                    children: _(`#BackgroundGroups_Color_Clear`),
                  }),
                ],
              }),
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {
                  onClick: () =>
                    _({
                      ..._,
                      background_color1: _,
                      background_color2: _,
                    }),
                  children: _(`#BackgroundGroups_Color_Swap`),
                }),
              }),
              _ !== `single-color` &&
                (0, _.jsxs)(`div`, {
                  className: `j5T-MrFgQ20-`,
                  children: [
                    (0, _.jsx)(_, {
                      style: {
                        backgroundColor: _,
                      },
                      onClick: (_) =>
                        _(_, {
                          color: _,
                          onChange: (_) =>
                            _({
                              ..._,
                              background_color2: _ || void 0,
                            }),
                        }),
                      children: _(
                        _ === void 0
                          ? `#BackgroundGroups_ColorNum_unset`
                          : `#BackgroundGroups_ColorNum`,
                        2,
                      ),
                    }),
                    `\xA0`,
                    (0, _.jsx)(_, {
                      onClick: () =>
                        _({
                          ..._,
                          background_color2: void 0,
                        }),
                      children: _(`#BackgroundGroups_Color_Clear`),
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                gradient: _ ?? `top-to-bottom`,
                fnUpdateSetting: (_) =>
                  _({
                    ..._,
                    gradient_setting: _,
                  }),
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(_, {
        clanSteamID: _.clanSteamID,
        children: (0, _.jsx)(_, {
          checked: !!_,
          onChange: (_) => {
            _.randomize_section_order = _;
          },
          children: _(`#BackgroundGroups_RandomizeSectionOrder`),
        }),
      }),
    ],
  });
}
function _(_) {
  let _ = _([], 32, null);
  for (let _ in _) {
    let _ = _(_);
    _ != -1 && (_[_] = _[_]);
  }
  return _;
}
function _(_) {
  let { scaling_setting: _, fnUpdateSetting: _, label: _, disable: _ } = _,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _.push({
          label: _(`#BackgroundGroups_Scaling_cover`),
          data: `cover`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Scaling_contain`),
          data: `contain`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Scaling_fixed`),
          data: `auto`,
        }),
        _
      );
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _ || _(`#BackgroundGroups_Scaling`),
      }),
      (0, _.jsx)(_, {
        strDropDownClassName: _,
        disabled: _,
        rgOptions: _,
        selectedOption: _ || `cover`,
        onChange: (_) => _(_.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
        },
      }),
    ],
  });
}
function _(_) {
  let { gradient: _, fnUpdateSetting: _, label: _ } = _,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _.push({
          label: _(`#BackgroundGroups_Gradient_Top`),
          data: `top-to-bottom`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Gradient_Left`),
          data: `left-to-right`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Gradient_TopLeft`),
          data: `top-left-to-bottom-right`,
        }),
        _
      );
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _ || _(`#EventEditor_ColorSetting_Title`),
      }),
      (0, _.jsx)(_, {
        strDropDownClassName: _,
        rgOptions: _,
        selectedOption: _ || `top-to-bottom`,
        onChange: (_) => _(_.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
        },
      }),
    ],
  });
}
function _(_) {
  let { position_settings: _, fnUpdateSetting: _, label: _ } = _,
    _ = _.useMemo(() => {
      let _ = [];
      return (
        _.push({
          label: _(`#BackgroundGroups_Position_Unset`),
          data: `unset`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Position_Centered`),
          data: `center`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Position_CenteredTop`),
          data: `top center`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Position_TopLeft`),
          data: `top left`,
        }),
        _.push({
          label: _(`#BackgroundGroups_Position_BottomRight`),
          data: `bottom right`,
        }),
        _
      );
    }, []);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        children: _ || _(`#BackgroundGroups_Position`),
      }),
      (0, _.jsx)(_, {
        strDropDownClassName: _,
        rgOptions: _,
        selectedOption: _ || `unset`,
        onChange: (_) => _(_.data),
        bDisableMouseOverlay: !0,
        contextMenuPositionOptions: {
          bDisableMouseOverlay: !0,
        },
      }),
    ],
  });
}
function _(_) {
  let {
      backgroundImageEditModel: _,
      bBackgroundImgGroupEditMode: _,
      fnSetBackgroundImgGroupEditMode: _,
      bShowAsValveOnly: _,
    } = _,
    [_, _] = (0, _.useState)(_.BIsBackgroundImageEnabled()),
    [_, _, _] = _(),
    _ = _(() => _.GetSalePageLastCoverSectionUntilEnd());
  return (0, _.jsx)(`div`, {
    className: _(_, _ && `u6DPgTclyv4-`),
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          label: _(`#BackgroundGroups_Setting`),
          checked: _,
          onChange: (_) => {
            (_(_), _.SetBackgroundImageEnabled(_));
          },
        }),
        _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  label: _(`#BackgroundGroups_EditMode`),
                  tooltip: _(`#BackgroundGroups_EditMode_ttip`),
                  checked: _,
                  onChange: _,
                }),
                (0, _.jsx)(_, {
                  label: _(`#BackgroundGroups_ExtendToEnd`),
                  tooltip: _(`#BackgroundGroups_ExtendToEnd_ttip`),
                  checked: _,
                  onChange: (_) => _.SetSalePageLastCoverSectionUntilEnd(_),
                }),
                (0, _.jsx)(`hr`, {}),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _(`#BackgroundGroups_ClearAllSettings`),
                }),
                (0, _.jsx)(_, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    strTitle: _(`#EventEditor_GenericAreYouSure`),
                    strDescription: _(
                      `#BackgroundGroups_ClearAllSettings_Desc`,
                    ),
                    bDestructiveWarning: !0,
                    onOK: () => {
                      (_.ClearAllBackgroundImageGroupSettings(), _(!1));
                    },
                    closeModal: _,
                  }),
                }),
              ],
            })
          : (0, _.jsx)(`p`, {
              children: _(`#BackgroundGroups_Desc`),
            }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(`a`, {
          href: `${_.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
          target: `_blank`,
          children: _(`#EventGeneric_SeeDocs`),
        }),
      ],
    }),
  });
}
var _ = _.forwardRef(function (_, _) {
  let {
      imgGroupDerivedMapping: _,
      backgroundImageEditModel: _,
      groupIndex: _,
      imgGroup: _,
      eventModel: _,
      nTabIndex: _,
    } = _,
    _ = _(),
    [_, _, _, _] = _(() => [
      _ && _.mapGroupToSections.get(_.background_id),
      (_ && _.mapGroupToSections.get(_.background_id)?.sectionUniqueIDs) ?? [],
      _ == null
        ? _?.GetSalePageLastCoverSectionUntilEnd()
        : _?.GetTabLastCoverSectionUntilEnd(_),
      _ == null ? _?.GetSalePageGroupCount() : _?.GetTabGroupCount(_),
    ]),
    _ = _ && _ + 1 === _,
    [_, _, _] = _(),
    [_, _, _] = _(),
    _;
  _?.nUniqueIDNextSaleSection &&
    (_ = _(
      2,
      _.GetSaleSectionByID(_?.nUniqueIDNextSaleSection),
      _,
      _,
      _.nSaleSectionLastIndex + 1,
    ));
  let _;
  if (_ && _?.length > 1) {
    let _ = _[_.length - 1];
    _ = _(2, _?.GetSaleSectionByID(_), _, _, _.nSaleSectionLastIndex);
  }
  return (0, _.jsx)(_, {
    bStartMinimized: !1,
    title: _(
      _ == null
        ? `#BackgroundGroups_Sale_GroupNum`
        : `#BackgroundGroups_Sale_Tab_GroupNum`,
      _ + 1,
    ),
    className: _.classNameHeader,
    children: (0, _.jsxs)(`div`, {
      ref: _,
      children: [
        (0, _.jsx)(_, {
          onClick: _,
          children: _(`#BackgroundGroups_Configure`),
        }),
        (0, _.jsx)(_, {
          active: _,
          children: (0, _.jsx)(_, {
            imgGroup: _,
            closeModal: _,
            eventModel: _,
            fnUpdateImageGroup: (_) =>
              _ == null
                ? _.SetSalePageBackgroundGroup(_, _)
                : _.SetTabBackgroundGroup(_, _, _),
          }),
        }),
        (0, _.jsx)(`br`, {}),
        (0, _.jsx)(`div`, {
          className: _,
          children: _(`#BackgroundGroups_ContentTitle`),
        }),
        (0, _.jsxs)(`ul`, {
          children: [
            _.map((_) =>
              (0, _.jsx)(
                `li`,
                {
                  children: _(
                    3,
                    _.GetSaleSectionByID(_),
                    _,
                    _,
                    _.GetSaleSectionIndexByID(_, !0),
                  ),
                },
                `li_` + _,
              ),
            ),
            !!_ &&
              (0, _.jsx)(`li`, {
                children: _(`#BackgroundGroups_EndOfList`),
              }),
          ],
        }),
        !!_ &&
          (0, _.jsx)(_, {
            onClick: () =>
              _ == null
                ? _.SetSalePageBackgroundGroup(_, {
                    ..._,
                    num_sections: _.num_sections - 1,
                  })
                : _.SetTabBackgroundGroup(_, _, {
                    ..._,
                    num_sections: _.num_sections - 1,
                  }),
            children: _(`#BackgroundGroups_Reduce`, _),
          }),
        !!_ &&
          (0, _.jsx)(_, {
            onClick: () =>
              _ == null
                ? _.SetSalePageBackgroundGroup(_, {
                    ..._,
                    num_sections: _.num_sections + 1,
                  })
                : _.SetTabBackgroundGroup(_, _, {
                    ..._,
                    num_sections: _.num_sections + 1,
                  }),
            children: _(`#BackgroundGroups_Extend`, _),
          }),
        _ > 0 &&
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(`hr`, {}),
              (0, _.jsx)(_, {
                className: `_1k0t2Q-C2OU-`,
                onClick: _,
                children: _(`#BackgroundGroups_RemoveThisGroup`),
              }),
              (0, _.jsx)(_, {
                active: _,
                children: (0, _.jsx)(_, {
                  strTitle: _(`#Dialog_AreYouSure`),
                  bDestructiveWarning: !0,
                  strDescription: _(`#BackgroundGroups_RemoveThisGroup_Desc`),
                  onOK: () =>
                    _ == null
                      ? _.RemoveSalePageBackgroundGroup(_)
                      : _.RemoveTabBackgroundGroup(_, _),
                  closeModal: _,
                }),
              }),
            ],
          }),
      ],
    }),
  });
});
function _(_) {
  let { backgroundImageEditModel: _, nTabID: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(_, {
      onClick: (_) =>
        _ !== void 0 && _ >= 0
          ? _?.AddTabBackgroundGroup(_)
          : _?.AddSalePageBackgroundGroup(),
      children: _(
        _ !== void 0 && _ >= 0
          ? `#BackgroundGroups_AddNewGroupTab`
          : `#BackgroundGroups_AddNewGroup`,
      ),
    }),
  });
}
function _(_) {
  let {
      nTabID: _,
      nSectionUniqueID: _,
      salePageBackgroundDerivedConfig: _,
      backgroundImageEditModel: _,
    } = _,
    _ = _.mapFirstSectionToGroup.get(_);
  return _ == _.nFirstSaleSectionIDWithoutGroup ||
    _ == _.nFirstTabSectionIDWithoutGroup
    ? (0, _.jsx)(_, {
        backgroundImageEditModel: _,
        nTabID: _,
      })
    : _
      ? (0, _.jsx)(_, {
          ..._,
          groupID: _,
        })
      : null;
}
function _(_) {
  let {
      groupID: _,
      nTabID: _,
      salePageBackgroundDerivedConfig: _,
      backgroundImageEditModel: _,
    } = _,
    _ =
      _ && _ >= 0
        ? _.selectedTabBackgroundDef.groups
        : _.GetSalePageGroupDefinition().groups,
    _ = _.findIndex((_) => _.background_id === _),
    _ = _[_],
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    if (!_) return;
    let _ = _(
      (0, _.jsx)(_, {
        bAlertDialog: !0,
        closeModal: () => _(!1),
        children: (0, _.jsx)(_, {
          backgroundImageEditModel: _,
          groupIndex: _,
          imgGroup: _,
          imgGroupDerivedMapping: _,
          eventModel: _.GetEventModel(),
          nTabIndex: _,
        }),
      }),
      window,
    );
    return () => {
      _.then((_) => _.Close());
    };
  }, [_, _, _, _, _, _]);
  let _ = _(() => _.get(_)),
    [_, _] = (0, _.useState)(null),
    _ = _.useCallback((_, _) => {
      _(_);
    }, []),
    _ = _(_);
  return (0, _.jsxs)(`div`, {
    className: _,
    ref: _,
    children: [
      !!(_ && _ && _ > _) &&
        (0, _.jsx)(_, {
          onClick: (_) => _(!0),
          children: _(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, _.jsx)(_, {
        backgroundImageEditModel: _,
        groupIndex: _,
        imgGroup: _,
        imgGroupDerivedMapping: _,
        eventModel: _.GetEventModel(),
        nTabIndex: _,
      }),
    ],
  });
}
var _ = `Bn58KEX1KcI-`;
function _(_) {
  let { imgGroupDerivedMapping: _ } = _,
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => {
    if (!_) return;
    let _ = _(
      (0, _.jsx)(_, {
        bAlertDialog: !0,
        closeModal: () => _(!1),
        children: (0, _.jsx)(_, {
          ..._,
        }),
      }),
      window,
    );
    return () => {
      _.then((_) => _.Close());
    };
  }, [_, _]);
  let _ = _(() => {
      let _ = _.selectedTabBackgroundDef?.groups?.[0].background_id;
      if (_) {
        let _ = _.mapGroupToSections.get(_);
        if (_) return _.get(_?.nBackgroundGroupID) ?? 0;
      }
      return 0;
    }),
    [_, _] = (0, _.useState)(null),
    _ = _.useCallback((_, _) => {
      _(_);
    }, []),
    _ = _(_),
    _ = !!(_ >= 0 && _ && _ > _);
  return (0, _.jsxs)(`div`, {
    className: _(_, _),
    ref: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          onClick: (_) => _(!0),
          children: _(`#BackgroundGroups_EditBackgroundGroup`),
        }),
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { backgroundImageEditModel: _, imgGroupDerivedMapping: _, nTabID: _ } = _,
    [_, _] = (0, _.useState)(null),
    [_, _, _, _] = _(() => [
      _?.GetTabLastCoverSectionUntilEnd(_),
      _?.BIsTabEnabled(_),
      _.selectedTabBackgroundDef,
      _?.GetEventModel(),
    ]);
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        label: _(`#BackgroundGroups_TaSetting`),
        checked: _,
        onChange: (_) => {
          if (
            (_(_, `edit model mising`),
            _(_ !== void 0, `tab setting missing`),
            _ !== void 0 && _)
          ) {
            let _ = _.SetTabEnabled(_, _);
            (_(!!_, `Failed to create model TabID ${_}backgroundModel`), _(_));
          } else
            console.error(
              `Failed to enable table group, edit mode: ${!!_}, TabID: ${_}.`,
            );
        },
      }),
      !!_ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              label: _(`#BackgroundGroups_ExtendToEnd`),
              tooltip: _(`#BackgroundGroups_ExtendToEnd_Tab_ttip`),
              checked: _,
              onChange: (_) => _.SetTabLastCoverSectionUntilEnd(_, _),
            }),
            (0, _.jsx)(_, {
              backgroundImageEditModel: _,
              groupIndex: 0,
              imgGroup: (_ || _)?.groups[0],
              imgGroupDerivedMapping: _,
              eventModel: _,
              nTabIndex: _,
              classNameHeader: `a0LGsk01Sc0-`,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let {
      promotionName: _,
      eventModel: _,
      bIsPreview: _,
      language: _,
      backgroundImageEditModel: _,
      addtionalAdminButtons: _,
      bDynamicallyCreatedSale: _,
    } = _,
    [_, _] = _.useState(_?.GetDayIndexFromEventStart()),
    [_, _] = _.useState(null),
    _ = _(() => _.jsondata.sale_header_disable_top_margin),
    _ = _(_, !!_(_)),
    _ = _(_, _, _(!!_)),
    [_, _] = (0, _.useState)(!1);
  _.useEffect(() => {
    if (
      _.jsondata.sale_custom_css &&
      !_ &&
      _ &&
      _.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
      _() == `community`
    ) {
      let _ = document.getElementsByTagName(`HEAD`)[0],
        _ = document.createElement(`style`);
      ((_.innerText = _(_.jsondata.sale_custom_css)), _(_), _.appendChild(_));
    }
    let _ = document.getElementsByClassName(`react_landing_background`);
    return (
      _(_.length <= 1, `Must have at most one react_landing_background`),
      _.length >= 1 && (_[0].style.backgroundImage = ``),
      () => {
        _ && (_.remove(), _(null));
      }
    );
  }, [_, _, _]);
  let _ = _?.jsondata,
    _ = _.useMemo(
      () => ({
        promotionName: _,
        clanid: Number(_.CLANACCOUNTID),
        nAppIDVOD: Number(_?.broadcast_preroll_vod_appid),
        event: _,
        bIsPreview: _,
        language: _,
        accountIDs: _ ? _?.broadcast_whitelist : void 0,
        chat_announcement_giveaway: _?.broadcast_chat_announcement_giveaway,
      }),
      [_, _, _, _, _],
    ),
    _ = _(() => _?.BIsBackgroundImageEnabled() ?? !1),
    _ = _(_?.clanSteamID);
  if (!_ || _ === void 0)
    return (0, _.jsx)(`div`, {
      className: _,
      style: {
        height: `500px`,
      },
      children: (0, _.jsx)(_, {
        size: `medium`,
        string: _(`#Loading`),
      }),
    });
  {
    let _ = _(_),
      _ = _.BUsesContentHubForItemSource(),
      _ = _.GetSaleSections().some((_) => _.section_type === `contenthubtitle`),
      _ = _ && _,
      _,
      _ = !0;
    _
      ? (_ = 0)
      : _.BUsesContentHubForItemSource()
        ? (_ = _.jsondata.sale_header_offset === 530 ? 530 : 20)
        : _.GetEventType() == 36
          ? ((_ = 0), (_ = !1))
          : (_ = _.jsondata.sale_header_offset || 0);
    let _ = _ && _.jsondata.sale_header_offset === 530,
      _ = !_.Get().BIsPartnerTakeoverActive(
        _.GetContentHubType(),
        _.GetContentHubCategory(),
        _.GetContentHubTag(),
      ),
      _ = _
        ? !_ && _?.BIsBackgroundImageEnabled()
          ? _.EPreviewMode_EditBackground
          : _.EPreviewMode_Enabled
        : _.EPreviewMode_Disabled,
      _ = _ || _.GetEventType() != 36,
      _ = _ ? _.NoTransform : _.NoTransformSparseContent,
      _ = _(
        _,
        _ && `_9D3431c8-XE-`,
        _ && `_5NaHSqwUb-k-`,
        _[`CustomStyle_${_.jsondata.sale_vanity_id}`],
        `SaleOuterContainer`,
        _ && `RG63SnOtLk0-`,
        _ && void 0,
      );
    return (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        eventModel: _,
        language: _,
        children: (0, _.jsx)(_, {
          location: _ ? 2 : 0,
          children: (0, _.jsxs)(_, {
            event: _,
            language: _,
            bIsPreview: !!_,
            personalizedCarousels: _,
            children: [
              _ && (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {
                eventModel: _,
              }),
              !!_ &&
                (_ || _) &&
                (0, _.jsx)(_, {
                  backgroundImageEditModel: _,
                  bBackgroundImgGroupEditMode: _,
                  fnSetBackgroundImgGroupEditMode: _,
                  bShowAsValveOnly: !_,
                }),
              (0, _.jsxs)(_, {
                style:
                  !_ || (_ && !_)
                    ? {
                        marginTop: `${_ || 0}px`,
                      }
                    : void 0,
                className: _,
                scrollIntoViewType: _,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      eventModel: _,
                      language: _,
                    }),
                  (0, _.jsx)(_, {
                    rgPresenters: _.jsondata.sale_presenters,
                  }),
                  (0, _.jsx)(_, {
                    event: _,
                    broadcastEmbedContext: _,
                  }),
                  (0, _.jsx)(_, {
                    ePreviewMode: _,
                    event: _,
                    backgroundImageEditModel: _,
                    language: _,
                    promotionName: _,
                    nSaleDayIndex: _,
                    broadcastEmbedContext: _,
                    selectedTab: _,
                    tagSelection: _?.GetTagSelection(),
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      event: _,
                      addtionalAdminButtons: _,
                      fnOnChangeDayIndex: (_) => {
                        _ != _ && ((_.m_overrideCurrentDay = _), _(_));
                      },
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }
}
function _(_, _, _) {
  let [_] = _(`tab`, void 0),
    [_] = _(_, void 0),
    [_] = _(_, void 0),
    _ = _.useMemo(() => {
      let _ = _.GetSaleSectionFirstMatchByType(`tabs`)?.tabs?.filter(
        (_) => !_.hide,
      );
      if (_ && _.length > 0) {
        let _ = _ > 0 ? _.find((_) => _.unique_id == _) : void 0;
        _ ||= _[0];
        let _ = _ === _[0];
        return {
          selTab: _,
          bIsDefaultTab: _,
        };
      }
    }, [_, _]),
    _ = _(_(_, _), _?.selTab.tab_tag_filter, _),
    _ = _?.strParentKey,
    _ = _?.strChildKey;
  return _.useMemo(() => {
    if (!_) return;
    let _;
    _ &&
      (_ = {
        strParentKey: _,
        strChildKey: _,
      });
    let _ =
      _.jsondata.sale_opt_in_page_name || _.jsondata.prune_list_optin_name;
    return new _(_.selTab, _, _.bIsDefaultTab, _, _);
  }, [_, _, _, _, _]);
}
function _() {
  if (window?.location?.hash)
    return decodeURIComponent(window.location.hash.substring(1).toLowerCase());
}
function _(_) {
  let {
      event: _,
      language: _,
      nSaleDayIndex: _,
      ePreviewMode: _,
      selectedTab: _,
      backgroundImageEditModel: _,
    } = _,
    [_, _] = _.useState(_()),
    _ = _.useMemo(() => new _(), []),
    _ = _.useCallback(() => _(_()), []);
  (_.useEffect(
    () => (
      window.addEventListener(`resize`, _),
      () => window.removeEventListener(`resize`, _)
    ),
    [_],
  ),
    _.useEffect(() => {
      let _ = ``,
        _ = () => {
          let _ = _();
          if (_ && _ != _) {
            let _ = document.getElementById(_);
            _ &&
              ((_ = _),
              _.scrollIntoView({
                block: `start`,
              }));
          }
        },
        _ = setTimeout(() => _(), 150);
      return (
        window.addEventListener(`hashchange`, _),
        () => {
          (clearTimeout(_), window.removeEventListener(`hashchange`, _));
        }
      );
    }, []));
  let _ = _(),
    _ = (_, _) => {
      _(_, {
        ...(_ || {}),
        tab: _.toString(),
      });
    },
    [_, _] = _(`controller`),
    [_, _] = _(() => {
      let _ = _.GetCreatorHome(_.clanSteamID)?.GetAppIDList().length ?? 0,
        _ = _.GetSaleSectionIncludingFooterSections(_);
      return [
        _(
          _.jsondata.sale_background_img_groups,
          _,
          _ && _.GetActiveTabUniqueID(),
        ),
        _,
      ];
    }),
    _ = !1,
    _ = [
      {
        elements: [],
        activeTab: new _(void 0, _),
      },
    ],
    _ = null,
    _ = _(),
    _ = _(),
    _ = _(_),
    _ = _(_),
    _ = _.useMemo(() => {
      let _ = _();
      if (!_) return;
      let _ = _.findIndex((_) => _.section_anchor === _);
      return _ > -1 ? _ : void 0;
    }, [_]);
  (_.forEach((_, _) => {
    let _ = _[_.length - 1].activeTab;
    if (_ && !_.ShouldShowSection(_)) return;
    let _ = _.Get().BIsPartnerTakeoverActive(
        _.GetContentHubType(),
        _.GetContentHubCategory(),
        _.GetContentHubTag(),
      ),
      _ = _ && !_ && !_.jsondata.content_hub_restricted_width,
      _ = _(_, _, _, _, _, _, _(_));
    if (_ === void 0) return;
    if (!_) {
      if (_(_) && !_.logged_in)
        _ ||=
          ((_ = (0, _.jsx)(_, {
            section: _,
            event: _,
            language: _,
          })),
          !0);
      else {
        let _ = _.diable_tab_id_filtering
          ? new _(void 0, _ && _.GetSaleDay())
          : _;
        (_.section_type == `tabs` &&
          _.tabs?.some((_) => _.unique_id == _?.GetActiveTabUniqueID()) &&
          _.push({
            activeTab: _,
            elements: [],
          }),
          (_ = (0, _.jsx)(_, {
            ..._,
            section: _,
            activeTab: _,
            appVisibilityTracker: _,
            selectedTab: _,
            setTabUniqueIDQueryParam: _,
            expanded: _,
            controllerCategory: _,
            setControllerCategory: _,
          })));
      }
    }
    _ &&
      (_ = (0, _.jsx)(_, {
        nSectionID: _.unique_id,
        children: _,
      }));
    let _ = _ && _.length && _[_.length - 1],
      _ = (0, _.jsx)(
        _,
        {
          section: _,
          nActiveTabID: _ && _.activeTab && _.activeTab.GetActiveTabUniqueID(),
          saleSectionIndex: _,
          ePreviewMode: _,
          salePageBackgroundDerivedConfig: _,
          backgroundImageEditModel: _,
          bExpanded: _,
          children: (0, _.jsx)(_, {
            enabled: !_ || _ > _,
            children: _,
          }),
        },
        `SaleSectionIndex_` + _.unique_id + `_` + _,
      ),
      _ = _.mapSectionToGroup.get(_.unique_id);
    (_ &&
      _.groupID != _ &&
      (_[_.length - 1].elements.push(
        _(_, _, _, _ && _?.GetActiveTabUniqueID()),
      ),
      (_ = null)),
      _
        ? ((_ ||= {
            groupID: _,
            elSaleSections: [],
            derivedGroupInfo: _.mapGroupToSections.get(_),
          }),
          _.elSaleSections.push(_))
        : _[_.length - 1].elements.push(_));
  }),
    (_ &&=
      (_[_.length - 1].elements.push(
        _(_, _, _, _ && _?.GetActiveTabUniqueID()),
      ),
      null)));
  let _ = _.map((_, _) =>
    (0, _.jsx)(
      `div`,
      {
        className: _(_, `SaleSectionTabListContainer`),
        children: _.elements,
      },
      `TabSection_` + _,
    ),
  );
  return (0, _.jsx)(_, {
    focusable: !1,
    focusableIfEmpty: !0,
    navKey: `SaleSectionListContainer`,
    children: _,
  });
}
var _ = _(_);
function _(_) {
  let {
    visibility_by_door_index_state: _,
    door_index_visibility: _,
    children: _,
  } = _;
  return _ && _ != null
    ? (0, _.jsx)(_, {
        visibility_by_door_index_state: _,
        door_index_visibility: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let {
      visibility_by_door_index_state: _,
      door_index_visibility: _,
      children: _,
    } = _,
    _ = _(_);
  return (_ == `hide_when_open_door_index` && _) ||
    (_ == `show_when_open_door_index` && !_)
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _({ children: _, onChange: _ }) {
  return (
    _.useRef(null),
    (0, _.useEffect)(() => {
      _(!!_.Children.toArray(_).filter(Boolean).length);
    }, [_, _]),
    _
  );
}
function _(_) {
  let {
      section: _,
      saleSectionIndex: _,
      nActiveTabID: _,
      ePreviewMode: _,
      salePageBackgroundDerivedConfig: _,
      backgroundImageEditModel: _,
      bExpanded: _,
      children: _,
    } = _,
    _ = _.section_anchor ? _.section_anchor : _ + (_.unique_id || _),
    _ = _.section_type != `tabs`,
    [_, _] = (0, _.useState)(!0);
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          visibility_by_door_index_state: _.visibility_by_door_index_state,
          door_index_visibility: _.door_index_visibility,
          children: _
            ? (0, _.jsx)(_, {
                navKey: _,
                _: _,
                className: _({
                  [_]: !0,
                  SaleSectionCtn: !0,
                  [_.section_type]: !0,
                  [_.internal_section_data?.internal_type || ``]: !0,
                  expanded: _,
                  [_.single_item_style || ``]: !0,
                  [_]: _ == _.EPreviewMode_EditBackground,
                  [_]: _.collapse_header_space,
                }),
                children:
                  _ === _.EPreviewMode_EditBackground && _
                    ? (0, _.jsxs)(_.Fragment, {
                        children: [
                          _,
                          (0, _.jsx)(_, {
                            nSectionUniqueID: _.unique_id || _,
                            nTabID: _,
                            salePageBackgroundDerivedConfig: _,
                            backgroundImageEditModel: _,
                          }),
                        ],
                      })
                    : (0, _.jsx)(_, {
                        onChange: _,
                        children: _,
                      }),
              })
            : (0, _.jsx)(_.Fragment, {
                children:
                  _ === _.EPreviewMode_EditBackground && _
                    ? (0, _.jsxs)(`div`, {
                        _: _,
                        className: _({
                          [_]: !0,
                          [_]: !0,
                          [_]: _.collapse_header_space,
                        }),
                        children: [
                          _,
                          (0, _.jsx)(_, {
                            backgroundImageEditModel: _,
                            nTabID: _,
                            imgGroupDerivedMapping: _,
                          }),
                        ],
                      })
                    : (0, _.jsx)(_, {
                        onChange: _,
                        children: _,
                      }),
              }),
        }),
      })
    : null;
}
