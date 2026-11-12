function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _, _));
}
function _(_, _, _, _, _) {
  let { storeBrowseContext: _, dataLoader: _, cacheStoreItemData: _ } = _;
  return {
    queryKey: [`PackagePurchaseRecommendations`, _],
    queryFn: async () => {
      let _ = (
          (
            await _.fetchQuery(
              _(
                _,
                _,
                {
                  rgAdditionalRecommendationIDs: _ ?? [],
                },
                _ && {
                  data_request: _,
                  cacheStoreItemData: _,
                },
              ),
            )
          )?.purchase_recommendations || []
        ).map((_) => _.item_id),
        _ = await Promise.all(_.map((_) => _.fetchQuery(_(_, _))));
      return _.filter((_, _) => {
        let _ = _[_];
        return !(_?.already_owned || _?.ignored);
      });
    },
    enabled: _.logged_in,
    staleTime: 6e5,
  };
}
function _(_, _, _ = !0) {
  let _ = _(),
    { storeBrowseContext: _, cacheStoreItemData: _ } = _(),
    _ = _(
      _,
      _,
      _,
      _ && {
        data_request: _,
        cacheStoreItemData: _,
      },
    );
  return _({
    ..._,
    enabled: _ && (_.enabled ?? !0),
  });
}
function _(_, _, _, _) {
  let {
      bIncludeDailyDeals: _ = !1,
      nIncludeTopNSpecials: _ = 0,
      spotlightLocation: _,
      rgAdditionalRecommendationIDs: _,
    } = _,
    _ = {
      bIncludeDailyDeals: _,
      nIncludeTopNSpecials: _,
      spotlightLocation: _,
      rgAdditionalRecommendationIDs: _,
    };
  return {
    queryKey: [`ItemsToFeature`, _],
    queryFn: () => _(_, _, _, _),
    staleTime: 36e5,
  };
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  (_(_, _),
    _ && _(_, _.data_request),
    _.bIncludeDailyDeals && _.Body().set_include_dailydeals(!0),
    _.nIncludeTopNSpecials &&
      _.Body().set_include_top_specials_count(_.nIncludeTopNSpecials),
    _.spotlightLocation &&
      _.Body().set_include_spotlights(_.fromObject(_.spotlightLocation)),
    _.rgAdditionalRecommendationIDs !== void 0 &&
      (_.Body().set_include_purchase_recommendations(!0),
      _.rgAdditionalRecommendationIDs.forEach((_) =>
        _.Body().add_additional_purchase_item_ids(_.fromObject(_)),
      )));
  let _ = await _.GetItemsToFeature(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
  if (_) {
    let { cacheStoreItemData: _ } = _,
      _ = {
        ..._.data_request,
        apply_user_filters: !0,
      },
      _ = (_) => _ && _(_, _);
    (_.Body()
      .spotlights()
      .forEach((_) => _(_.associated_item(!1))),
      _.Body()
        .daily_deals()
        .forEach((_) => _(_.item(!1))),
      _.Body()
        .specials()
        .forEach((_) => _(_.item(!1))),
      _.Body()
        .purchase_recommendations()
        .forEach((_) => _(_.item(!1))));
  }
  return _.Body().toObject();
}
