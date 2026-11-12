function _(_) {
  return () => (
    (_ = (_ * 1664525 + 1013904223) % 4294967296),
    (_ >>> 0) / 4294967296
  );
}
function _() {
  return Math.floor(Math.random() * 4294967296);
}
function _() {
  let _ = _(),
    { storeBrowseContext: _ } = _({
      include_assets: !0,
    });
  return _({
    ..._(_, _),
    select: (_) => _.total_items_on_sale,
  });
}
async function _(_, _, _, _, _) {
  let _ = _.Init(_);
  (_.Body().set_steamid(_.steamid),
    _(_, _),
    _ !== void 0 && _.Body().set_sort_order(_),
    _ && (_(_, _.data_request), _.Body().set_page_size(_.item_count)),
    _.Body().filters(!0).set_min_discount_percent(_));
  let _ = await _.GetWishlistSortedFiltered(_, _);
  if (!_.BSuccess())
    throw `Error from WishlistService.GetWishlistSortedFiltered: ${_.GetErrorMessage()}`;
  return (
    _ &&
      _.Body()
        .items()
        .forEach((_) => {
          let _ = _.store_item(!1);
          _ && _.cacheStoreItemData(_, _.data_request);
        }),
    _.Body().items()
  );
}
async function _(_, _, _) {
  let _ = await _(_, _, 10, _ ? 5 : void 0, _);
  return {
    appids: _ ? _.slice(0, _.item_count).map((_) => _.appid()) : [],
    total_items_on_sale: _.length,
  };
}
function _(_, _, _, _ = 1) {
  return {
    queryKey: [`AccountWishlistAppsOnSale`, _ ?? 0, _.country, _],
    queryFn: async () =>
      _
        ? (await _(_, _, _, 0))
            .map((_) => _.appid())
            .filter((_) => _ !== void 0)
        : [],
    staleTime: 6e5,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`GetWishlistItemsOnSale`],
    queryFn: () => _(_, _, _),
    staleTime: 9e5,
    enabled: _.logged_in,
  };
}
function _(_ = 0, _ = void 0) {
  let _ = _();
  return _(_(_, _, !1, _));
}
function _(_, _, _ = !1, _ = void 0) {
  return {
    queryKey: [`DiscoveryQueue`, _, _],
    queryFn: () => _(_, _, _, _),
    enabled: _.logged_in,
  };
}
async function _(_, _, _ = !1, _ = void 0) {
  let _ = _.Init(_);
  (_.Body().set_queue_type(_),
    _.Body().set_country_code(_.COUNTRY),
    _.Body().set_rebuild_queue(_),
    _.Body().set_rebuild_queue_if_stale(!0),
    (_?.nSaleTagID || _?.strContentHubType || _?.nCreatorClanAccountId) &&
      _.Body().set_store_page_filter(_(_, !0)));
  let _ = await _.GetDiscoveryQueue(_, _);
  if (!_.BSuccess())
    throw `Error loading discovery queue: ${_.GetErrorMessage()}`;
  return _.Body().toObject();
}
function _(_, _) {
  if (
    _ &&
    (_?.strContentHubType == `newreleases` ||
      _?.strContentHubType == `upcoming`)
  )
    return;
  let _ = _?.nSaleTagID,
    _ = _?.strContentHubType,
    _ = _?.strContentHubCategory,
    _ = _?.nContentHubTagID,
    _ = _?.bDiscountsOnly,
    _ = _?.bPrioritizeDiscounts,
    _ = _?.strOptInName,
    _ = _?.nOptInTagID,
    _ = _?.nPruneTagID,
    _ = _?.bOptInOnly,
    _ = _?.nCreatorClanAccountId,
    _ = new _();
  if (_ || _) {
    let _ = new _();
    (_.set_sale_tagid(_),
      _.set_creator_clan_account_id(_),
      _.set_sale_filter(_));
  } else if (_) {
    let _ = new _();
    if (
      (_.set_hub_type(_),
      _ === `category`
        ? _.set_hub_category(_)
        : _ === `tags` && _.set_hub_tagid(_),
      _ ? _.set_discount_filter(1) : _ && _.set_discount_filter(2),
      _)
    ) {
      let _ = new _();
      (_.set_name(_),
        _.set_optin_tagid(_),
        _.set_prune_tagid(_),
        _.set_optin_only(_),
        _.set_optin(_));
    }
    _.set_content_hub_filter(_);
  }
  return _;
}
