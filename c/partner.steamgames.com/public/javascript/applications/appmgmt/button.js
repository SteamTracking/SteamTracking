import { _, _, _, _, _ } from "./mobx.esm.js";
import { _, _ } from "./src.js";
import { _, _ } from "./flex.js";
import { _, _ } from "./layout.js";
import { _, _ } from "./variantdefaults.js";
import { _ } from "./linkbase.js";
_();
var _ = _(_(), 1),
  _ = _({
    Button: () => _,
    Icon: () => _,
    MinWidth: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dark": () => _,
    "Variant-ghost": () => _,
    "Variant-inverted": () => _,
    "Variant-outline": () => _,
    "Variant-vibrant": () => _,
    Width: () => _,
    default: () => _,
  }),
  _ = `Yyx5Rkc0C04-`,
  _ = `_-56FHcFNl2U-`,
  _ = `hRuF7XXiT3w-`,
  _ = `j8iZOirRLc8-`,
  _ = `ZTzpqIMdFCM-`,
  _ = `XSeLQJSkxyo-`,
  _ = `efbor0Of1bY-`,
  _ = `qOJkwUKt2Zo-`,
  _ = `BvwOpySHMzk-`,
  _ = `oKBOG5g3nvk-`,
  _ = `_3PvnjdbEKFQ-`,
  _ = `_5M7IKs5LW3Y-`,
  _ = `n-Q3jnI7IeY-`,
  _ = {
    Button: _,
    "Size-1": `_-56FHcFNl2U-`,
    Icon: _,
    "Size-2": `j8iZOirRLc8-`,
    "Size-3": `ZTzpqIMdFCM-`,
    "Variant-basic": `XSeLQJSkxyo-`,
    "Variant-dark": `efbor0Of1bY-`,
    "Variant-inverted": `qOJkwUKt2Zo-`,
    "Variant-outline": `BvwOpySHMzk-`,
    "Variant-ghost": `oKBOG5g3nvk-`,
    "Variant-vibrant": `_3PvnjdbEKFQ-`,
    Width: _,
    MinWidth: _,
  },
  _ = _({
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
  _ = `ghKPu7ElHI4-`,
  _ = `THS4EmXO7Qo-`,
  _ = `_2tFyZDh3n70-`,
  _ = `y-F5xF-Ar74-`,
  _ = `Fqhcc7xFmsM-`,
  _ = `h9zlfqYx76Q-`,
  _ = `iTGGFwEa2MQ-`,
  _ = `_88ugmg-q8D8-`,
  _ = `MKSxe-MWyrs-`,
  _ = `n-XnuapupJI-`,
  _ = {
    Spinner: _,
    LoadingSpinnerAmin: _,
    "Size-1": `_2tFyZDh3n70-`,
    "Size-2": `y-F5xF-Ar74-`,
    "Size-3": `Fqhcc7xFmsM-`,
    "Size-4": `h9zlfqYx76Q-`,
    "Size-5": `iTGGFwEa2MQ-`,
    "Variant-solid": `_88ugmg-q8D8-`,
    "Variant-bright": `MKSxe-MWyrs-`,
    ChildContainer: _,
  },
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
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      focusable: _,
      navProps: _,
      ..._
    } = _,
    _ = _(),
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: `bright`,
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ ?? _?.focusable ?? !!_,
    _ = _(`Button`, _),
    _ = {
      type: `button`,
      ..._(
        {
          ..._,
          variant: _,
          size: _,
          minWidth: _,
          color: _,
          className: (0, _.default)(_, _ && `hRuF7XXiT3w-`),
          onClick: _,
        },
        _,
      ),
      children: _,
    };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        ...(_ || {}),
        focusable: _,
      })
    : (0, _.jsx)(`button`, {
        ..._,
      });
}
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      disabled: _,
      icon: _,
      onClick: _,
      ..._
    } = _,
    _ = _(`Button`, _),
    _ = _(
      {
        onClick: _ ? _ : _,
        "aria-disabled": _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && `hRuF7XXiT3w-`, _()),
      },
      _,
    );
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  _.preventDefault();
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
    {
      prop: `color`,
      dataProperty: (_) => [`accent-color`, `${_}`],
    },
    {
      prop: `width`,
      className: _,
      cssProperty: `--width`,
      responsive: !0,
    },
    {
      prop: `minWidth`,
      className: _,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  _ = _,
  _ = _;
export { _, _, _ };
