function _(_, _, _, _, _) {
  let {
    count: _ = 40,
    name: _ = `TopGrossing`,
    discounts_only: _ = !1,
  } = _ ?? {};
  return _(
    _,
    _,
    _,
    {
      sort: 10,
      start: 0,
      count: _,
      filters: {
        type_filters: {
          include_apps: !0,
        },
        price_filters: _
          ? {
              min_discount_percent: 15,
            }
          : void 0,
        exclude_from: [2],
        content_descriptors_excluded: _,
      },
    },
    _,
  );
}
function _(_, _) {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_),
    { data: _ } = _();
  return _({
    ..._(_, _, _, _, _),
    enabled: _ !== void 0,
  });
}
function _(_, _) {
  return _(
    {
      ...(_ ?? {}),
      discounts_only: !0,
    },
    _,
  );
}
