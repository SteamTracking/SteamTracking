var _ = `XCl1MiwByZw-`,
  _ = _();
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`h1`, {
          children: _.Localize(`#errorpage_error`),
        }),
        (0, _.jsx)(`h3`, {
          children: (0, _.jsx)(_, {
            error: _.error,
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let { error: _ } = _;
  switch (_) {
    case `ProfileNotFound`:
      return _.Localize(`#wishlist_error_profilenotfound`);
    case `WishlistLoadFailed`:
      return _.Localize(`#wishlist_error_wishlistunavailable`);
    case `RateLimit`:
      return _.Localize(`#Error_RateLimited`);
    case `InvalidShareToken`:
      return _.Localize(`#wishlist_error_invalidsharetoken`);
    default:
      return (
        _(_, `Unhandled error code ${_}`), _.Localize(`#errorpage_unknownerror`)
      );
  }
}
