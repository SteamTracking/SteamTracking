function _(_) {
  return _(
    `#Hardware_ShippingEstimate_Range`,
    _.estimated_delivery_soonest_business_days ?? 0,
    _.estimated_delivery_latest_business_days ?? 0,
  );
}
var _ = `_1gVpRppljtI-`,
  _ = _(),
  _ = Object.values(
    (function (_) {
      return (
        (_.k_eBlock = `block`),
        (_.k_eFinal = `final`),
        (_.k_eOriginal = `original`),
        (_.k_eReservation = `reservation`),
        _
      );
    })({}),
  );
function _(_) {
  return _.find((_) => _ === _);
}
function _(_) {
  switch (_.display_style) {
    case `final`:
      return _.formatted_final_price
        ? (0, _.jsx)(`span`, {
            children: _.formatted_final_price,
          })
        : null;
    case `original`: {
      let _ = _.formatted_orig_price || _.formatted_final_price;
      return _
        ? (0, _.jsx)(`span`, {
            children: _,
          })
        : null;
    }
  }
  let _ = _.display_style == `reservation`,
    _ = _.bHideDiscountPercentForCompliance,
    _ = _.className == `bbcode_price`,
    _ = _.bundle_discount_percent || 0,
    _ = !!_ && (_.discount_percent || 0) > _,
    _ = !!_ && !_,
    _ = _(!!_, _, !0);
  return (0, _.jsxs)(`span`, {
    className: _({
      [_]: !0,
      [_.className ?? ``]: !!_.className,
      [void 0]: _,
    }),
    children: [
      !(!_.discount_percent || _) &&
        (0, _.jsx)(_, {
          bPortalToBody: !0,
          toolTipContent: _.bDiscountFromCoupon ? void 0 : _.Localize(_),
          children: (0, _.jsxs)(`span`, {
            className: _(
              `P3M5ws5efuQ-`,
              `StoreSaleDiscountBox`,
              _.bDiscountFromCoupon && `ie1ga1AETqg-`,
              _ && `t5k3UwToC9A-`,
              _ && `Z4hulAlNd1k-`,
            ),
            children: [
              _ &&
                (0, _.jsx)(`span`, {
                  className: `ASWnRPgdGV4-`,
                  children: `-${_}%`,
                }),
              `-${_.discount_percent}%`,
            ],
          }),
        }),
      !!(_.discount_percent && _) &&
        (0, _.jsx)(`div`, {
          className: _({
            [void 0]: !0,
            bbcode_price_discount: _,
          }),
          children: (0, _.jsx)(_, {}),
        }),
      !!_.formatted_final_price &&
        (_.discount_percent && _.formatted_orig_price
          ? (0, _.jsxs)(`div`, {
              className: _({
                "j3jr1YqpBGk-": !0,
                bbcode_price_ctn: _,
              }),
              children: [
                (0, _.jsx)(`div`, {
                  className: _({
                    "hHZqChnRhag-": !0,
                    StoreOriginalPrice: !0,
                    bbcode_price_orig: _,
                  }),
                  children: _.formatted_orig_price,
                }),
                (0, _.jsx)(`div`, {
                  className: _({
                    "-nS4ZC0Bruo-": !0,
                    bbcode_price_box: _,
                    "K5KPGPGxAnA-": _,
                    bbcode_price_final: _,
                  }),
                  children: _.formatted_final_price,
                }),
              ],
            })
          : (0, _.jsx)(`div`, {
              className: _({
                "-nS4ZC0Bruo-": !0,
                bbcode_price_box: _,
                "K5KPGPGxAnA-": _,
                bbcode_price_final: _,
              }),
              children: _.formatted_final_price,
            })),
    ],
  });
}
function _(_) {
  let { data: _ } = _({
    packageid: _.packageID,
  });
  return _
    ? (0, _.jsx)(_, {
        formatted_final_price: _.formatted_final_price,
        formatted_orig_price: _.formatted_original_price,
        discount_percent: _.discount_pct,
        bHideDiscountPercentForCompliance: _.hide_discount_pct_for_compliance,
        display_style: _.display_style,
        className: `bbcode_price`,
      })
    : null;
}
function _(_, _) {
  if (_?.final_price_in_cents && _?.final_price_in_cents)
    return (
      (
        100 *
        (1 -
          Number.parseInt(_.final_price_in_cents) /
            Number.parseInt(_.final_price_in_cents))
      ).toFixed(0) + `%`
    );
}
function _(_) {
  let { data: _ } = _({
      packageid: _.packageID,
    }),
    { data: _ } = _({
      packageid: _.compareID,
    }),
    _ = _(_, _);
  return _ === void 0
    ? null
    : (0, _.jsx)(`span`, {
        className: void 0,
        children: _,
      });
}
