var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let { prev: _, next: _, bAnnualChart: _, children: _ } = _;
  return (
    _(_.strURL, _.strURL),
    (0, _.jsxs)(_, {
      className: (0, _.default)(_, _ && `qB6AKNvMWus-`),
      children: [
        (0, _.jsx)(_, {
          strLink: _.strURL,
          strTooltip: _.strTooltip,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: `\xA0`,
          }),
        }),
        (0, _.jsx)(_, {
          strLink: _.strURL,
          strTooltip: _.strTooltip,
          children: (0, _.jsx)(`div`, {
            className: _,
            children: `\xA0`,
          }),
        }),
        _,
      ],
    })
  );
}
function _(_) {
  let { strLink: _, strTooltip: _, children: _ } = _,
    _ = (0, _.jsx)(`div`, {
      className: (0, _.default)(_, !_ && `_5lng8kFUn7U-`),
      children: _
        ? (0, _.jsx)(_, {
            href: _,
            className: _,
            children: _,
          })
        : (0, _.jsx)(`div`, {
            className: _,
            children: _,
          }),
    });
  return _
    ? (0, _.jsx)(_, {
        toolTipContent: _,
        children: _,
      })
    : _;
}
function _(_, _) {
  let _ = _(),
    _ = _.useCallback(
      (_) => {
        if (
          _.defaultPrevented ||
          _.altKey ||
          _.ctrlKey ||
          _.metaKey ||
          _.shiftKey
        )
          return;
        let _ = _.target;
        if (
          (_ instanceof HTMLElement &&
            (_.isContentEditable ||
              [`INPUT`, `TEXTAREA`, `SELECT`].includes(_.tagName))) ||
          (_ || _(window)).active_modal
        )
          return;
        let _ = _.key === `ArrowLeft` ? _ : _.key === `ArrowRight` ? _ : void 0;
        _ && (_.preventDefault(), _(_));
      },
      [_, _, _],
    );
  _(window.document, `keydown`, _);
}
function _(_) {
  let _ = new URL(_, window.location.href);
  _(_.pathname + _.search);
}
