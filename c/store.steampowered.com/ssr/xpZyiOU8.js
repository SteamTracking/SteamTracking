var _ = _(_(), 1),
  _ = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`];
function _(_, _) {
  return `${_}-${_}`;
}
var _ = [`title`, `subtitle`, `body`, `description`, `note`],
  _ = _();
function _(_) {
  let {
      accentColor: _,
      dullColor: _,
      bodyTextColor: _,
      successColor: _,
      warningColor: _,
      errorColor: _,
      successTextColor: _,
      warningTextColor: _,
      errorTextColor: _,
      children: _,
      breakpoints: _,
      variants: _,
      popoverPresentation: _,
      spacing: _,
      radius: _,
      textSizes: _,
      defaultTextSize: _,
      controlHeights: _,
      controlRadius: _,
      controlSize: _,
    } = _,
    _ = {
      display: `contents`,
    },
    _ = (0, _.use)(_),
    _ = _(
      _,
      {
        spacing: _,
        radius: _,
        textSizes: _,
        defaultTextSize: _,
        controlHeights: _,
        controlRadius: _,
      },
      _,
    ),
    { defaultTextSize: _, controlRadius: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        defaultTextSize: _,
        controlRadius: _,
      }),
      [_, _],
    ),
    _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `accent`, _);
  let _;
  typeof _ == `string` ? (_ = _) : _ && _(_, `dull`, _);
  let _;
  (typeof _ == `string` ? (_ = _) : _ && _(_, `body`, _),
    _ && _(_, `success`, _),
    _ && _(_, `warning`, _),
    _ && _(_, `error`, _),
    _ && _(_, `success`, _),
    _ && _(_, `warning`, _),
    _ && _(_, `error`, _));
  let _ = (0, _.jsx)(_, {
    variants: _,
    children: (0, _.jsx)(`div`, {
      "data-accent-color": _,
      "data-dull-color": _,
      "data-body-text-color": _,
      style: _,
      children: (0, _.jsx)(`div`, {
        style: {
          display: `contents`,
          color: `var(--color-text-body-body)`,
        },
        children: _,
      }),
    }),
  });
  return (
    _ !== _ &&
      (_ = (0, _.jsx)(_, {
        value: _,
        children: _,
      })),
    _ &&
      (_ = (0, _.jsx)(_, {
        size: _,
        children: _,
      })),
    _ &&
      (_ = (0, _.jsx)(_, {
        presentation: _,
        children: _,
      })),
    _
      ? (0, _.jsx)(_, {
          breakpoints: _,
          children: _,
        })
      : _
  );
}
var _ = (0, _.createContext)({
  defaultTextSize: `3`,
  controlRadius: `sm`,
});
function _(_, _, _) {
  let { spacing: _, radius: _, textSizes: _, controlHeights: _ } = _,
    _ = _.defaultTextSize ?? _.defaultTextSize,
    _ = _.controlRadius ?? _.controlRadius;
  for (let [_, _] of Object.entries(_ ?? {})) _ && (_[`--spacing-${_}`] = _);
  for (let [_, _] of Object.entries(_ ?? {})) _ && (_[`--radius-${_}`] = _);
  for (let [_, _] of Object.entries(_ ?? {}))
    _ && (_[`--control-height-${_}`] = _);
  for (let [_, _] of Object.entries(_ ?? {}))
    _ &&
      (_.size &&
        ((_[`--text-size-${_}`] = _.size),
        (_[`--heading-size-${_}`] = `var(--text-size-${_})`)),
      _.lineHeight &&
        ((_[`--line-height-${_}`] = _.lineHeight),
        (_[`--heading-line-height-${_}`] = `var(--line-height-${_})`)),
      _.letterSpacing && (_[`--letter-spacing-${_}`] = _.letterSpacing));
  (_.defaultTextSize || _?.[_]) &&
    ((_[`--default-font-size`] = `var(--text-size-${_})`),
    (_[`--default-line-height`] = `var(--line-height-${_})`),
    (_[`--default-letter-spacing`] = `var(--letter-spacing-${_})`));
  let _ = _(_);
  return (
    (_.controlRadius || (_ && _?.[_])) &&
      (_[`--control-radius`] = _ ? `var(--radius-${_})` : _),
    _ === _.defaultTextSize && _ === _.controlRadius
      ? _
      : {
          defaultTextSize: _,
          controlRadius: _,
        }
  );
}
function _(_, _, _) {
  if (typeof _ == `string`)
    for (let _ of _) _[`--color-${_}-${_}`] = `var(--color-${_}-${_})`;
  else for (let [_, _] of Object.entries(_)) _[`--color-${_}-${_}`] = _;
}
function _(_, _, _) {
  if (typeof _ == `string`)
    for (let _ of _) _[`--color-text-${_}-${_}`] = `var(--color-${_}-${_})`;
  else for (let [_, _] of Object.entries(_)) _[`--color-text-${_}-${_}`] = _;
}
