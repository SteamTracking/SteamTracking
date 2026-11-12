var _ = _(_(), 1),
  _ = _();
function _(_) {
  return (0, _.jsxs)(_, {
    ..._,
    viewBox: 25,
    children: [
      (0, _.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M1.97014 2.77093H4.44345V3.97865C4.44345 5.04817 5.31099 5.91572 6.38052 5.91572C7.45004 5.91572 8.31699 5.04817 8.31699 3.97865V2.77093H16.6836V3.97865C16.6836 5.04817 17.5511 5.91572 18.6207 5.91572C19.6902 5.91572 20.5571 5.04817 20.5571 3.97865V2.77093H23.0293C24.1136 2.77093 25 3.65738 25 4.74167V21.4991C25 22.5834 24.1136 23.4698 23.0293 23.4698H1.97073C0.886445 23.4698 0 22.5834 0 21.4991V4.74167C0 3.65738 0.886445 2.77093 1.97073 2.77093H1.97014ZM23.5005 8.23961V21.4991C23.5005 21.7578 23.2879 21.9704 23.0293 21.9704H1.97073C1.71206 21.9704 1.49946 21.7583 1.49946 21.4991V8.23961H23.5005V8.23961Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M5.29335 1.08724C5.29335 0.486629 5.77998 0 6.38059 0C6.98061 0 7.46724 0.486629 7.46724 1.08724V3.97867C7.46724 4.57928 6.98061 5.06591 6.38059 5.06591C5.77998 5.06591 5.29335 4.57928 5.29335 3.97867V1.08724V1.08724Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M17.5329 1.08724C17.5329 0.486629 18.0195 0 18.6201 0C19.2201 0 19.7068 0.486629 19.7068 1.08724V3.97867C19.7068 4.57928 19.2201 5.06591 18.6201 5.06591C18.0195 5.06591 17.5329 4.57928 17.5329 3.97867V1.08724V1.08724Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var _ = `KfDHDTqIJsA-`,
  _ = _(_(), 1);
function _(_, _) {
  let [_, _] = (0, _.useState)(() => ({
      level: _,
      mountDate: _.Now.plainDateISO().toPlainYearMonth(),
    })),
    _ = _.focus ?? _ ?? _.mountDate;
  return {
    level: _.level,
    focus: _,
    setZoom: (_) =>
      _((_) => ({
        ..._,
        level: _,
      })),
    setFocus: (_) =>
      _((_) => ({
        ..._,
        focus: _,
      })),
  };
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      min: _,
      max: _,
      ..._
    } = _,
    _ = _.with({
      year: Math.floor(_.year / 10) * 10,
    }),
    _ = [];
  for (let _ = 0; _ < 12; _++)
    _.push(
      _.add({
        years: _ - 1,
      }),
    );
  let _ = (_) => {
      (_(`month`), _(_));
    },
    _ = (_) =>
      _(
        _.add({
          years: 10 * _,
        }),
      ),
    _ = _[0];
  return (
    _ && _.year >= _[0].year && _.year <= _[_.length - 1].year && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => _(_),
              selected: !!_ && _.year === _.year,
              disabled: _(_, {
                min: _,
                max: _,
              }),
              navProps: {
                autoFocus: _.year === _.year,
              },
              minWidth: `6ch`,
              square: !0,
              children: _.toLocaleString(_(), {
                calendar: _.calendarId,
                year: `numeric`,
              }),
            },
            _.year,
          ),
        ),
      }),
    })
  );
}
function _(_) {
  let {
      value: _,
      zoom: _,
      onZoomChange: _,
      focus: _,
      onFocusChange: _,
      onSelectMonth: _,
      checkValidYearMonth: _,
      min: _,
      max: _,
      ..._
    } = _,
    _ = [];
  for (
    let _ = _.with({
      month: 1,
    });
    _.year === _.year;
    _ = _.add({
      months: 1,
    })
  )
    _.push(_);
  let _ = (_) =>
      _(
        _.add({
          years: _,
        }),
      ),
    _ = _[0];
  return (
    _ && _.year === _.year && (_ = _),
    (0, _.jsx)(_, {
      zoom: _,
      focus: _,
      onZoomOut: () => _(`year`),
      onPrevPage: () => _(-1),
      onNextPage: () => _(1),
      ..._,
      children: (0, _.jsx)(_, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              onClick: () => _(_),
              selected: !!_ && _.year === _.year && _.month === _.month,
              disabled: _(_, {
                min: _,
                max: _,
                checkValidYearMonth: _,
              }),
              navProps: {
                autoFocus: _.month === _.month,
              },
              square: !0,
              children: _.toLocaleString(_(), {
                calendar: _.calendarId,
                month: `short`,
              }),
            },
            _.month,
          ),
        ),
      }),
    })
  );
}
function _(_, _) {
  let { min: _, max: _, checkValidYearMonth: _ } = _;
  return !!(
    (_ && _.PlainYearMonth.compare(_, _) < 0) ||
    (_ && _.PlainYearMonth.compare(_, _) > 0) ||
    (_ && !_(_))
  );
}
function _(_, _) {
  let { min: _, max: _ } = _;
  return !!((_ && _.year < _.year) || (_ && _.year > _.year));
}
function _(_) {
  return (0, _.jsx)(_, {
    columns: `1fr 1fr 1fr 1fr`,
    rows: `1fr 1fr 1fr`,
    ..._,
  });
}
function _(_) {
  let {
      children: _,
      selected: _,
      disabled: _,
      dim: _,
      square: _,
      onClick: _,
      ..._
    } = _,
    _ = `title`;
  (_ && (_ = `description`), _ && (_ = `note`));
  let _ = !_ && _;
  return (0, _.jsxs)(_, {
    justify: `center`,
    align: `center`,
    background: _ ? `accent-8` : void 0,
    onClick: _ ? void 0 : _,
    padding: `2`,
    radius: `md`,
    className: (0, _.default)(_, _ && `u3-KOUmumJ8-`, _ && `dFrv-UpPP1U-`),
    "data-active": _ ? 1 : void 0,
    ..._,
    children: [
      typeof _ == `string` &&
        (0, _.jsx)(_, {
          align: `center`,
          contrast: _,
          children: _,
        }),
      typeof _ != `string` && _,
    ],
  });
}
function _(_) {
  let {
      children: _,
      onNextPage: _,
      onPrevPage: _,
      onZoomOut: _,
      zoom: _,
      focus: _,
      setOpen: _,
      ..._
    } = _,
    _ = {
      layout: _.GRID,
      onButtonDown: (_) => {
        if (_.detail)
          switch (_.detail.button) {
            case _.BUMPER_LEFT:
              (_.stopPropagation(), _.preventDefault(), _());
              break;
            case _.BUMPER_RIGHT:
              (_.stopPropagation(), _.preventDefault(), _());
              break;
            case _.OPTIONS:
              _ && _();
              break;
            case _.CANCEL:
              _(!1);
          }
      },
      focusableIfEmpty: !0,
      onGamepadDirection: () => !0,
    };
  return (0, _.jsx)(_, {
    background: `dull-8`,
    radius: `md`,
    padding: `3`,
    elevation: `1`,
    overflow: `hidden`,
    navProps: _,
    ..._,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              onClick: _,
              square: !0,
              children: (0, _.jsx)(_, {
                direction: `left`,
                color: `text-body-title`,
              }),
            }),
            (0, _.jsx)(_, {
              flexGrow: `1`,
              align: `center`,
              justify: `center`,
              onClick: _,
              children: _(_, _),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              square: !0,
              children: (0, _.jsx)(_, {
                direction: `right`,
                color: `text-body-title`,
              }),
            }),
          ],
        }),
        _,
      ],
    }),
  });
}
function _(_, _) {
  switch (_) {
    case `year`: {
      let _ = _.with({
          year: Math.floor(_.year / 10) * 10,
        }),
        _ = _.add({
          years: 9,
        });
      return `${_.toLocaleString(_(), {
        calendar: _.calendarId,
        year: `numeric`,
      })} - ${_.toLocaleString(_(), {
        calendar: _.calendarId,
        year: `numeric`,
      })}`;
    }
    case `month`:
      return _.toLocaleString(_(), {
        calendar: _.calendarId,
        year: `numeric`,
      });
    case `day`:
      return _.toLocaleString(_(), {
        calendar: _.calendarId,
        year: `numeric`,
        month: `short`,
      });
  }
}
