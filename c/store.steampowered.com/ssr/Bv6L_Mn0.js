function _() {
  let _ = _(),
    _ = _();
  return _(_(_, _));
}
function _(_) {
  return [`StoreBrowsePriceStops`, _];
}
function _(_, _) {
  let { country: _ } = _;
  return {
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 864e5,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_country_code(_);
  let _ = await _.GetPriceStops(_, _);
  if (!_.BSuccess()) throw `Error loading price stops: ${_.GetErrorMessage()}`;
  return _.Body().toObject().price_stops || [];
}
export { _, _ };
