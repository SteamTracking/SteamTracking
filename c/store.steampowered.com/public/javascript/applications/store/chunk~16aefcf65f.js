import { _, _ } from "./chunk~f025431ab0.js";
import { _, _, _ } from "./chunk~01cfc309bf.js";
import { _, _, _, _, _, _, _, _, _, _, _ } from "./main.js";
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _({
    Indicator: () => _,
    IndicatorPosition: () => _,
    Item: () => _,
    SegmentedControl: () => _,
    SegmentedControlBox: () => _,
    "Size-1": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dim": () => _,
    "Variant-inset": () => _,
    "Variant-inset-glass": () => _,
    default: () => _,
    disabled: () => _,
  }),
  _ = `-ADhnqjhVc4-`,
  _ = `-Kr9IL9YbvI-`,
  _ = `zoxSAIfj2-I-`,
  _ = `w-i9GD4p5ok-`,
  _ = `UayQOsdqayg-`,
  _ = `_9r9T-BENybY-`,
  _ = `lEiDoy6Twr4-`,
  _ = `rADD4VAHKqM-`,
  _ = `o5jFH-P7bJ8-`,
  _ = `Nx5xx-M20X4-`,
  _ = `_4I3jMtMHJys-`,
  _ = `oBernP4-8lg-`,
  _ = {
    SegmentedControlBox: _,
    Indicator: _,
    SegmentedControl: _,
    IndicatorPosition: _,
    "Size-1": `UayQOsdqayg-`,
    Item: _,
    "Size-3": `lEiDoy6Twr4-`,
    disabled: _,
    "Variant-basic": `o5jFH-P7bJ8-`,
    "Variant-inset": `Nx5xx-M20X4-`,
    "Variant-inset-glass": `_4I3jMtMHJys-`,
    "Variant-dim": `oBernP4-8lg-`,
  },
  _ = _(),
  _ = (0, _.createContext)(null);
function _(_) {
  let {
      variant: _,
      radius: _,
      size: _,
      status: _,
      color: _,
      children: _,
      value: _,
      onValueChange: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)({}),
    _ = (0, _.useCallback)(
      (_, _, _) =>
        _((_) => ({
          ..._,
          [_]: {
            node: _,
            bDisabled: _,
          },
        })),
      [],
    ),
    _ = (0, _.useCallback)(
      (_, _) =>
        _((_) => {
          let _ = {
            ..._,
          };
          return (_[_]?.node === _ && delete _[_], _);
        }),
      [],
    ),
    _ = (_) => {
      let _ = 0;
      switch (_.key) {
        case ` `:
        case `Enter`:
        case `ArrowRight`:
          _ = 1;
          break;
        case `ArrowLeft`:
          _ = -1;
      }
      if (_) {
        let _ = Object.entries(_).sort(([, _], [, _]) => _(_.node, _.node)),
          _ = _.length,
          _ = _ > 0 ? -1 : _;
        _ !== null &&
          ((_ = _.findIndex(([_]) => _ === _)),
          _(_ !== -1, `Could not find current segmented value position`));
        for (let _ = 1; _ <= _; _++) {
          let [_, _] = _[(((_ + _ * _) % _) + _) % _];
          if (!_.bDisabled) {
            (_ !== _ && _(_), _.stopPropagation(), _.preventDefault());
            break;
          }
        }
      }
    },
    _ = _(`SegmentedControl`, _),
    _ = _(_),
    _ = _(_),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        register: _,
        unregister: _,
        radius: _,
        size: _,
      }),
      [_, _, _, _, _, _],
    );
  return (0, _.jsx)(_, {
    ..._,
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: _,
    radius: _,
    size: _,
    status: _,
    className: (0, _.default)(_, _[`Variant-${_}`]),
    tabIndex: 0,
    onKeyDown: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsxs)(_, {
        className: _,
        style: {
          "--outer-radius":
            typeof _ == `string`
              ? `var(--radius-${_})`
              : `var(--control-radius)`,
        },
        children: [
          _,
          _ !== null &&
            (0, _.jsx)(_, {
              radius: _,
              color: _,
              size: _,
            }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { value: _, children: _, disabled: _ } = _,
    _ = (0, _.useContext)(_),
    [_, _] = (0, _.useState)(),
    { register: _, unregister: _ } = _ || {};
  if (
    ((0, _.useEffect)(
      () => (!_ || !_ || !_ ? () => {} : (_(_, _, !!_), () => _(_, _))),
      [_, _, _, _, _],
    ),
    !_)
  )
    return null;
  let { value: _, onValueChange: _, size: _ } = _,
    _ = _ === _,
    _ = (_) => {
      (_.stopPropagation(), _.preventDefault(), !(_ || _) && _(_));
    },
    _ = _ === void 0 ? _ : _;
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    ref: _,
    onClick: _,
    "data-selected": _ ? `true` : `false`,
    className: (0, _.default)(_, _ && _[`Size-${_}`], _ ? _ : ``),
    children: _,
  });
}
function _(_) {
  let { options: _, getOptionLabel: _ = (_) => _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    ..._,
    children: _.map((_) =>
      (0, _.jsx)(
        _.Item,
        {
          value: _,
          children: _(_),
        },
        _,
      ),
    ),
  });
}
((_.Item = _), (_.Root = _));
function _(_) {
  let { radius: _, color: _, size: _ } = _;
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && _[`Size-${_}`]),
    children: (0, _.jsx)(`div`, {
      className: _,
      "data-accent-color": _,
    }),
  });
}
function _(_, _) {
  let _ = _.compareDocumentPosition(_);
  return _ & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : _ & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
}
var _ = `_0hkFFtEKd8o-`,
  _ = `_7oKujRBWBjo-`,
  _ = `SfXKOOd0Sto-`,
  _ = `KqhOexCat44-`,
  _ = `GQmysqJfjG0-`,
  _ = Object.assign(_, {
    Root: _,
    Track: _,
    Range: _,
    Handle: _,
  });
function _(_) {
  let { value: _, onValueChange: _, onValueSettled: _, min: _, ..._ } = _,
    _ = [_],
    _ = (0, _.useCallback)((_) => _(_[0]), [_]),
    _ = (0, _.useCallback)((_) => _?.(_[0]), [_]);
  return (0, _.jsxs)(_, {
    ..._,
    min: _,
    onValueChange: _,
    onValueSettled: _,
    value: _,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          start: _,
          end: _,
        }),
      }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { value: _ } = _;
  return (0, _.jsxs)(_, {
    ..._,
    children: [
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          start: _[0],
          end: _[1],
        }),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
    ],
  });
}
var _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, color: _, ..._ } = _,
    {
      min: _,
      max: _,
      onValueChange: _,
      value: _,
      step: _ = 1,
      onValueSettled: _,
      ..._
    } = _,
    _ = {
      min: _,
      max: _,
      step: _,
      value: _,
      onValueChange: _,
      onValueSettled: _,
    },
    _ = _(
      {
        ..._,
        className: _,
      },
      _,
    ),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    [_] = (0, _.useState)(() => new Set()),
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(_.Provider, {
    value: {
      ..._,
      handles: _,
      bDragActive: _,
    },
    children: (0, _.jsx)(`div`, {
      ..._,
      "data-accent-color": _,
      ref: _,
      onPointerDown: (_) => {
        if (_.current) {
          if ((_.target.setPointerCapture(_.pointerId), typeof _ != `number`)) {
            let _ = _.current.getBoundingClientRect(),
              _ = _(_(_.current, _, _.clientX), [0, _.width], [_, _]);
            _.current = {
              activeValueIndex: _(_, _),
              bMoved: !1,
            };
          } else
            _.current = {
              activeValueIndex: 0,
              bMoved: !1,
            };
          _(!0);
        }
      },
      onPointerUp: (_) => {
        let _ = _.target;
        _.hasPointerCapture(_.pointerId) &&
          (_.releasePointerCapture(_.pointerId),
          _ && _.current?.bMoved && _(_),
          _(!1));
      },
      onPointerMove: (_) => {
        if (_.target.hasPointerCapture(_.pointerId) && _.current && _.current) {
          let _ = _.current.getBoundingClientRect(),
            _ = _({
              value: _(_(_.current, _, _.clientX), [0, _.width], [_, _]),
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          ((_[_.current.activeValueIndex] = _),
            _.sort((_, _) => _ - _),
            (_.current.activeValueIndex = _.indexOf(_)),
            (_.current.bMoved = !0),
            _(_));
        }
      },
      onClick: (_) => {
        if (!_.current || _.current?.bMoved) return;
        let _ = _.current.getBoundingClientRect(),
          _ = _(_(_.current, _, _.clientX), [0, _.width], [_, _]),
          _ = _({
            value: _,
            min: _,
            max: _,
            step: _,
          }),
          _ = _(_, _),
          _ = [..._];
        ((_[_] = _), _(_), _ && _(_));
      },
      children: (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    }),
  });
}
function _(_, _, _) {
  return _.matches(`:dir(rtl)`) ? _.right - _ : _ - _.left;
}
function _(_, _, _) {
  let _ = _ > 0 ? _[_ - 1] : -1 / 0,
    _ = _ < _.length - 1 ? _[_ + 1] : 1 / 0;
  return Math.min(Math.max(_, _), _);
}
function _(_, _) {
  if (_.length <= 1) return _.length - 1;
  let _ = 0,
    _ = Math.abs(_ - _[0]);
  for (let _ = 1; _ < _.length; _++) {
    let _ = Math.abs(_[_] - _);
    _ < _ && ((_ = _), (_ = _));
  }
  return _;
}
function _(_) {
  let { render: _, ..._ } = _;
  return _(
    _,
    (0, _.jsx)(`div`, {
      className: _,
    }),
    _,
    void 0,
  );
}
function _(_) {
  let { start: _, end: _, render: _ } = _,
    _ = (0, _.useContext)(_);
  _(_, `SliderRange must be used within a SliderRoot!`);
  let { min: _, max: _ } = _,
    _ = _(_, _, _),
    _ = 100 - _(_, _, _);
  return _(
    _,
    (0, _.jsx)(`div`, {
      className: _,
      style: {
        "--pct-left": `${_}%`,
        "--pct-right": `${_}%`,
      },
    }),
    {},
    void 0,
  );
}
function _(_) {
  let { render: _ } = _,
    _ = (0, _.useContext)(_);
  _(_, `SliderHandle must be used within a SliderRoot!`);
  let {
      min: _,
      max: _,
      handles: _,
      value: _,
      step: _ = 1,
      onValueChange: _,
      onValueSettled: _,
    } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(-1);
  (0, _.useEffect)(
    () => (_ ? (_.add(_), _(_.size - 1), () => _.delete(_)) : () => {}),
    [_, _],
  );
  let _ = _ > -1,
    _ = {
      "--handle-pct": `${_(_ ? _[_] : _, _, _)}%`,
    },
    _ = (_) => {
      switch (_.key) {
        case `ArrowRight`:
        case `ArrowUp`:
        case `ArrowLeft`:
        case `ArrowDown`: {
          let _ = `ArrowRight`;
          _.currentTarget.matches(`:dir(rtl)`) && (_ = `ArrowLeft`);
          let _ = _.key === _ || _.key === `ArrowUp`,
            _ = _ * (_ ? 1 : -1),
            _ = _({
              value: _[_] + _,
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          ((_[_] = _(_, _, _)),
            _(_),
            _ && _(_),
            _.preventDefault(),
            _.stopPropagation());
          break;
        }
        case `PageUp`:
        case `PageDown`: {
          let _ = _.key === `PageUp`,
            _ = Math.round((_ - _) / 10) * (_ ? 1 : -1),
            _ = _({
              value: _[_] + _,
              min: _,
              max: _,
              step: _,
            }),
            _ = [..._];
          ((_[_] = _(_, _, _)),
            _(_),
            _ && _(_),
            _.preventDefault(),
            _.stopPropagation());
          break;
        }
      }
    };
  _ || (_.display = `none`);
  let _ = {
    ref: _,
    role: `slider`,
    "aria-valuenow": _[_],
    "aria-valuemin": _,
    "aria-valuemax": _,
    tabIndex: 0,
    onKeyDown: _,
  };
  return _(
    _,
    (0, _.jsx)(`span`, {
      className: _,
      style: _,
    }),
    _,
    {
      value: _[_],
      bDragActive: _.bDragActive,
    },
  );
}
function _(_, _, _) {
  if (_[0] === _[1] || _[0] === _[1]) return _[0];
  let _ = ((_[1] - _[0]) / (_[1] - _[0])) * (_ - _[0]) + _[0];
  return _(_, _[0], _[1]);
}
function _(_) {
  let { value: _, min: _, max: _, step: _ } = _,
    _ = Math.round((_ - _) / _) / (1 / _);
  return _(_ + _, _, _);
}
function _(_, _, _) {
  return ((_ - _) / (_ - _)) * 100;
}
