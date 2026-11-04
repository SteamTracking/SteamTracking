_();
var _ = _({
    ChildContainer: () => _,
    LoadingSpinnerAmin: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Size-4": () => _,
    "Size-5": () => _,
    Spinner: () => _,
    "Variant-bright": () => _,
    "Variant-solid": () => _,
    default: () => _,
  }),
  _ = `gbiIXSGR7ao-`,
  _ = `wrAzvPdtZ8A-`,
  _ = `_4kJaZEhsJxA-`,
  _ = `DRTRL11gTS0-`,
  _ = `YHLaIMyUK2w-`,
  _ = `X9tZo7qpKpQ-`,
  _ = `tDMBfph44YU-`,
  _ = `wAx2yhv-GAU-`,
  _ = `mq55jUiqYgM-`,
  _ = `_1Si7xHUP8cE-`,
  _ = {
    Spinner: _,
    LoadingSpinnerAmin: _,
    "Size-1": `_4kJaZEhsJxA-`,
    "Size-2": `DRTRL11gTS0-`,
    "Size-3": `YHLaIMyUK2w-`,
    "Size-4": `X9tZo7qpKpQ-`,
    "Size-5": `tDMBfph44YU-`,
    "Variant-solid": `wAx2yhv-GAU-`,
    "Variant-bright": `mq55jUiqYgM-`,
    ChildContainer: _,
  },
  _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      size: _ = `3`,
      loading: _ = !0,
      children: _,
      color: _,
      variant: _,
      ..._
    } = _,
    _ = _(`LoadingSpinner`, _);
  return _ || !_
    ? (0, _.jsxs)(_, {
        position: `relative`,
        ..._,
        width: `fit-content`,
        children: [
          (0, _.jsx)(`div`, {
            "data-visibility": !_,
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, _.jsx)(_, {
                size: _,
                color: _,
                variant: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: _,
        color: _,
        variant: _,
        ..._,
      });
}
function _(_) {
  let { className: _, color: _, ..._ } = _(_, _);
  return (0, _.jsx)(`div`, {
    "data-accent-color": _,
    className: (0, _.default)(_, _),
    ..._,
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: `variant`,
    className: (_) => _[`Variant-${_}`],
  },
];
export { _ };
