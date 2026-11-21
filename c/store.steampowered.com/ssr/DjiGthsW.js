var _ = _(_(), 1),
  _ = _(),
  _ = Symbol(`CoercingTextInputNotParseable`);
function _(_) {
  let {
      value: _,
      onValueChange: _,
      valueToString: _,
      valueFromString: _,
      checkValidText: _,
      onBlur: _,
      onKeyDown: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? (_ === void 0 ? `` : _(_)),
    _ = (_) => {
      let _ = _(_);
      _ !== _ && _ === _(_)
        ? (_(null), _(_))
        : (!_ || _(_, _)) && (_(_), _ !== _ && _(_, !0));
    },
    _ = () => {
      if (_ !== null) {
        let _ = _(_);
        (_ !== _ && _(_), _(null));
      }
    };
  return (0, _.jsx)(_, {
    value: _,
    onTextChange: _,
    onKeyDown: (_) => {
      (_.key === `Enter` && _(), _ && _(_));
    },
    onBlur: (_) => {
      (_(), _ && _(_));
    },
    ..._,
  });
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      min: _,
      max: _,
      checkValidDate: _,
      placeholder: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = {
      value: _,
      onValueChange: _,
      min: _,
      max: _,
      checkValidDate: _,
      placeholder: _,
      setOpen: _,
    };
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      click: !0,
      focus: !0,
    },
    children: [
      (0, _.jsx)(_.Anchor, {
        children: (0, _.jsx)(_, {
          ..._,
          ..._,
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_.FocusManager, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      checkValidDate: _,
      setOpen: _,
      min: _,
      max: _,
      clearable: _,
      ..._
    } = _,
    _ = _();
  return (0, _.jsx)(_, {
    value: _,
    onValueChange: _,
    valueFromString: (_) => _(_, _),
    valueToString: _,
    clearable: _,
    afterContent: (0, _.jsx)(_, {}),
    readOnly: _,
    onClick: _ ? () => _(!0) : void 0,
    ..._,
  });
}
var _ = {};
function _() {
  let _ = _()[0];
  if (_[_] === void 0) {
    let _ = _.PlainDate.from(`1991-11-12`).toLocaleString(_);
    _[_] = _.indexOf(`12`) < _.indexOf(`11`);
  }
  return _[_];
}
function _(_, _) {
  if (_.clearable && !_) return null;
  let _ = _.split(`/`);
  if (_.length < 3) return _;
  let [_, _, _] = _,
    [_, _] = _() ? [_, _] : [_, _];
  try {
    let _ = _.PlainDate.from(
      `${_}-${_.padStart(2, `0`)}-${_.padStart(2, `0`)}`,
    );
    return _(_, _) ? _ : _;
  } catch {
    return _;
  }
}
function _(_) {
  return _ ? _.toLocaleString(_()[0]) : ``;
}
function _(_) {
  let {
      value: _,
      min: _,
      max: _,
      setOpen: _,
      ref: _,
      onValueChange: _,
      checkValidDate: _,
      placeholder: _,
      clearable: _,
      ..._
    } = _,
    {
      level: _,
      focus: _,
      setZoom: _,
      setFocus: _,
    } = _(`day`, _?.toPlainYearMonth()),
    _ = {
      ..._,
      value: _?.toPlainYearMonth(),
      min: _?.toPlainYearMonth(),
      max: _?.toPlainYearMonth(),
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      setOpen: _,
      ref: _,
    },
    _ = (_) => {
      (_(`day`), _(_));
    };
  switch (_) {
    case `day`:
      return (0, _.jsx)(_, {
        ..._,
        zoom: _,
        onZoomChange: _,
        focus: _,
        onFocusChange: _,
      });
    case `month`:
      return (0, _.jsx)(_, {
        ..._,
        onSelectMonth: _,
      });
    case `year`:
      return (0, _.jsx)(_, {
        ..._,
      });
  }
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      onValueChange: _,
      clearable: _,
      checkValidDate: _,
      min: _,
      max: _,
      placeholder: _,
      ..._
    } = _,
    _ = _.toPlainDate({
      day: 1,
    }),
    _ = [];
  for (
    let _ = _;
    _.month === _.month;
    _ = _.add({
      days: 1,
    })
  )
    _.push(_);
  let _ = _(new Intl.Locale(_()[0])),
    _ = _ === 1 ? _.daysInWeek : _ - 1;
  for (; _[0].dayOfWeek !== _;)
    _.unshift(
      _[0].add({
        days: -1,
      }),
    );
  for (; _[_.length - 1].dayOfWeek !== _;)
    _.push(
      _[_.length - 1].add({
        days: 1,
      }),
    );
  let _ = (_) =>
      _(
        _.add({
          months: _,
        }),
      ),
    _ = (_) => {
      (_(_), _(void 0));
    },
    _ = _;
  return (
    _ && _.month === _.month && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onZoomOut: () => _(`month`),
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsxs)(_, {
        columns: `repeat( ${_.daysInWeek}, 1fr )`,
        children: [
          (0, _.jsx)(_, {
            firstDay: _,
            focus: _,
          }),
          _.map((_) =>
            (0, _.jsx)(
              _,
              {
                onClick: () => _(_),
                dim: _.month !== _.month,
                selected: !!_ && _.equals(_),
                navProps: {
                  autoFocus: _.equals(_),
                },
                disabled: _(_, _),
                square: !0,
                children: _.toLocaleString(_(), {
                  day: `numeric`,
                }),
              },
              `${_.month}_${_.day}`,
            ),
          ),
        ],
      }),
    })
  );
}
function _(_, _) {
  let { min: _, max: _, checkValidDate: _ } = _;
  return !!(
    (_ && _.PlainDate.compare(_, _) < 0) ||
    (_ && _.PlainDate.compare(_, _) > 0) ||
    (_ && !_(_))
  );
}
function _(_) {
  let { firstDay: _, focus: _ } = _,
    _ = [],
    _ = _.add({
      days: _ - _.dayOfWeek,
    });
  for (let _ = 0; _ < _.daysInWeek; _++)
    (_.push(_),
      (_ = _.add({
        days: 1,
      })));
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          background: `dull-7`,
          radius: `none`,
          children: _.toLocaleString(_(), {
            calendar: _.calendarId,
            weekday: `narrow`,
          }),
        },
        _.dayOfWeek,
      ),
    ),
  });
}
function _(_) {
  try {
    if (`getWeekInfo` in _) {
      let _ = _.getWeekInfo();
      if (typeof _.firstDay == `number`) return _.firstDay;
    }
    if (`weekInfo` in _) {
      let _ = _.weekInfo;
      if (typeof _.firstDay == `number`) return _.firstDay;
    }
  } catch (_) {
    console.error(`Failed to get week info: "${_}"`, _);
  }
  return _.EREALM === _.k_ESteamRealmChina ? 1 : 7;
}
function _(_) {
  return (0, _.jsxs)(_, {
    ..._,
    viewBox: 36,
    children: [
      (0, _.jsx)(`path`, {
        _: `M16 18.9797L21.315 24L24 21.4581L19.803 17.4909V11H16V18.9797Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M34 18C34 26.8366 26.8366 34 18 34C9.16344 34 2 26.8366 2 18C2 9.16344 9.16344 2 18 2C26.8366 2 34 9.16344 34 18ZM30 18C30 24.6274 24.6274 30 18 30C11.3726 30 6 24.6274 6 18C6 11.3726 11.3726 6 18 6C24.6274 6 30 11.3726 30 18Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _(_) {
  let { value: _, onValueChange: _, placeholder: _, ..._ } = _,
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = {
      value: _,
      onValueChange: _,
      placeholder: _,
      hourCycle: _,
      setOpen: _,
    };
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      click: (_) => ({
        ..._,
        keyboardHandlers: !1,
      }),
      focus: !0,
    },
    maxHeight: 360,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: (0, _.jsx)(_, {
          ..._,
          ..._,
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_.FocusManager, {
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      clearable: _,
      hourCycle: _,
      setOpen: _,
      ..._
    } = _,
    _ = _();
  return (0, _.jsx)(_, {
    value: _,
    onValueChange: _,
    valueFromString: (_) => _(_, _),
    valueToString: (_) => _(_, _),
    clearable: _,
    afterContent: (0, _.jsx)(_, {}),
    readOnly: _,
    ..._,
  });
}
function _(_, _) {
  if (_.clearable && !_) return null;
  let _ = _.split(`:`),
    _,
    _,
    _,
    _;
  if (_.length === 2) ((_ = _[0]), ([_, _] = _[1].split(` `)));
  else if (_.length === 3) ((_ = _[0]), (_ = _[1]), ([_, _] = _[2].split(` `)));
  else return _;
  let _ = _ && _.toLowerCase().startsWith(`pm`),
    _ = parseInt(_);
  if (isNaN(_) || (_ && _ > 12)) return _;
  let _ = _;
  _ && _ < 12 ? (_ = _ + 12) : !_ && _ === 12 && (_ = 0);
  try {
    let _ = _.toString().padStart(2, `0`),
      _ = _.padStart(2, `0`),
      _ = _ ?? `00`;
    return _.seconds
      ? _.PlainTime.from(`${_}:${_}:${_}`)
      : _.PlainTime.from(`${_}:${_}`);
  } catch {
    return _;
  }
}
function _(_, _) {
  return _
    ? _.toLocaleString(_(), {
        hour: `numeric`,
        minute: `2-digit`,
        second: _.seconds ? `2-digit` : void 0,
      })
    : ``;
}
function _(_) {
  let {
      value: _,
      onValueChange: _,
      hourCycle: _,
      placeholder: _,
      clearable: _,
      seconds: _,
      setOpen: _,
      ..._
    } = _,
    _ = {
      value: _,
      onValueChange: _,
      hourCycle: _,
    },
    _ = _[_].bShowPeriod;
  return (0, _.jsx)(_, {
    gap: `2`,
    background: `dull-8`,
    radius: `md`,
    padding: `3`,
    elevation: `1`,
    overflow: `hidden`,
    navProps: {
      onGamepadDirection: () => !0,
      onButtonDown: (_) => {
        _.detail?.button === _.CANCEL && _(!1);
      },
    },
    ..._,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          ..._,
        }),
        (0, _.jsx)(_, {
          ..._,
        }),
        _ &&
          (0, _.jsx)(_, {
            ..._,
          }),
      ],
    }),
  });
}
var _ = {
  h12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
  h23: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ],
  h11: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};
function _(_) {
  let { value: _, onValueChange: _, hourCycle: _ } = _,
    _ = _ === `h23`,
    [_, _] = (0, _.useState)(0),
    _ = (_, _) => {
      let _ = _ ?? _.Now.plainTimeISO(),
        _ = !_ && _.hour >= 12 ? 12 : 0;
      (_(
        _.with({
          hour: _ + _,
        }),
      ),
        _(_));
    },
    _ = [],
    _ = _ in _ ? _[_] : _.h23,
    _ = _();
  for (let _ = -3; _ <= 3; _++)
    for (let _ of _) {
      let _ =
          !!_ &&
          _ === _ &&
          (_.hour === _ || (!_ && Math.abs(_.hour - _) === 12)),
        _ = _ === 0 && _ === `h12` ? 12 : _;
      _.push(
        (0, _.jsx)(
          _.Option,
          {
            selected: _,
            onClick: () => _(_, _),
            ref: _ ? _ : void 0,
            navProps: {
              preferredFocus: _,
              autoFocus: !0,
            },
            children: _.toString().padStart(2, `0`),
          },
          `${_}_${_}`,
        ),
      );
    }
  return (0, _.jsx)(_, {
    children: _,
  });
}
function _(_) {
  let { value: _, onValueChange: _ } = _,
    _ = [],
    [_, _] = (0, _.useState)(0),
    _ = (_, _) => {
      let _ = _ ?? _.Now.plainTimeISO();
      (_(
        _.with({
          minute: _,
        }),
      ),
        _(_));
    },
    _ = _();
  for (let _ = -2; _ <= 2; _++)
    for (let _ = 0; _ < 60; _++) {
      let _ = !!_ && _ === _ && _.minute === _;
      _.push(
        (0, _.jsx)(
          _.Option,
          {
            selected: _,
            onClick: () => _(_, _),
            ref: _ ? _ : void 0,
            navProps: {
              preferredFocus: _,
            },
            children: _.toString().padStart(2, `0`),
          },
          `${_}_${_}`,
        ),
      );
    }
  return (0, _.jsx)(_, {
    children: _,
  });
}
function _(_) {
  let { value: _, onValueChange: _ } = _,
    _ = !!_,
    _ = _ && _.hour >= 12,
    _ = (_) => {
      if ((_ && _) || (!_ && !_)) return;
      let _ = _ ?? _.Now.plainTimeISO(),
        _ = _.hour >= 12 ? -12 : 12;
      _(
        _.with({
          hour: _.hour + _,
        }),
      );
    };
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_.Option, {
        selected: _ && !_,
        onClick: () => _(!1),
        children: `AM`,
      }),
      (0, _.jsx)(_.Option, {
        selected: _ && _,
        onClick: () => _(!0),
        children: `PM`,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    maxHeight: `100%`,
    direction: `column`,
    overflow: `auto`,
    navProps: {
      navEntryPreferPosition: _.PREFERRED_CHILD,
    },
    ..._,
  });
}
function _() {
  let _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      requestAnimationFrame(() => {
        (console.log(_.current),
          _.current?.scrollIntoView({
            behavior: `instant`,
            block: `center`,
          }));
      });
    }, []),
    _
  );
}
function _() {
  try {
    for (let _ of _()) {
      let _ = new Intl.Locale(_);
      if (_.hourCycle) return _.hourCycle;
      if (`hourCycles` in _ && Array.isArray(_.hourCycles)) {
        for (let _ of _.hourCycles) if (_ in _) return _;
      }
      if (`getHourCycles` in _ && typeof _.getHourCycles == `function`) {
        let _ = _.getHourCycles();
        if (Array.isArray(_)) {
          for (let _ of _) if (_ in _) return _;
        }
      }
    }
  } catch (_) {
    console.error(`Could not determine user expected hour cycle:`, _);
  }
  return `h23`;
}
var _ = {
    h11: {
      bShowPeriod: !0,
    },
    h12: {
      bShowPeriod: !0,
    },
    h23: {
      bShowPeriod: !1,
    },
    h24: {
      bShowPeriod: !1,
    },
  },
  _ = _(_(), 1);
function _(_) {
  let {
      rows: _ = 3,
      sizing: _ = `content`,
      resize: _ = `none`,
      ref: _,
      value: _,
      onTextChange: _,
      onChange: _,
      disabled: _,
      variant: _,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = _(`TextArea`, _),
    _ = _(),
    [_, _] = _(_),
    _ = {
      resize: _,
      fieldSizing: _,
      minHeight: _,
      maxHeight: _,
    },
    _ = _({
      ..._,
      className: (0, _.default)(_(), _()),
      style: _,
      cursor: `text`,
      disabled: _,
      variant: _,
    });
  return (0, _.jsx)(_ ? _ : `textarea`, {
    ref: _,
    ..._,
    value: _ || ``,
    onChange: _,
    readOnly: _,
    "aria-disabled": _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    noFocusRing: !0,
    ..._,
  });
}
function _(_) {
  let _ = typeof _ == `number` ? _ : _.min,
    _ = typeof _ == `number` ? void 0 : _.max;
  return [
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
    typeof _ == `number` ? `calc( ${_}lh + 2 * var(--spacing-1) )` : void 0,
  ];
}
