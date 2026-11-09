function _(_) {
  let {
      bundle_discount_pct: _ = 0,
      discount_pct: _ = 0,
      price_before_bundle_discount: _,
      formatted_price_before_bundle_discount: _,
      final_price_in_cents: _,
      price_to_base_discount_on: _,
    } = _,
    _ = Number.parseInt(_ || `0`);
  if (!(_ <= 0 || _ <= 0 || !_) && !(Number.parseInt(_ || `0`) > 0))
    return _ <= 0
      ? {
          nDiscountPct: _,
          strOriginalPrice: _,
          nSupersededBundlePct: 0,
        }
      : {
          nDiscountPct: Math.min(
            Math.floor(((_ - Number.parseInt(_ || `0`)) / _) * 100 + 0.5),
            99,
          ),
          strOriginalPrice: _,
          nSupersededBundlePct: _,
        };
}
function _(_, _, _) {
  return _
    ? _
      ? _
        ? `#Sale_Bundle_Discount_Limited_ttip`
        : `#Sale_Bundle_Discount_ttip`
      : _
        ? `#Sale_CompleteTheSet_Discount_Limited_ttip`
        : `#Sale_CompleteTheSet_Discount_ttip`
    : `#Sale_Discount_ttip`;
}
