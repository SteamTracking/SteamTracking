var _ = {
  include_basic_info: !0,
  include_assets: !0,
};
async function _(_, _, _) {
  let _ = _.Init(_);
  (_(_, _), _ && _(_, _.data_request));
  let _ = await _.GetGamesByConcurrentPlayers(_, _);
  if (!_.BSuccess())
    throw `Error loading most played by concurrent players: ${_.GetErrorMessage()}`;
  let _ = [];
  for (let _ of _.Body().ranks()) {
    let _ = _.item();
    if (!_) continue;
    let _ = _(_.toObject());
    _ &&
      (_ && _.cacheStoreItemData(_, _.data_request),
      _.push({
        nRank: _.rank() ?? 0,
        itemKey: _,
        nConcurrentInGame: _.concurrent_in_game() ?? 0,
        nPeakInGame: _.peak_in_game() ?? 0,
      }));
  }
  return {
    rgRanks: _,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`ChartsMostPlayedByConcurrent`],
    queryFn: () => _(_, _, _),
    staleTime: 3e5,
  };
}
function _() {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_);
  return _(_(_, _, _));
}
async function _(_, _, _) {
  let _ = _.Init(_);
  (_(_, _), _ && _(_, _.data_request));
  let _ = await _.GetMostPlayedGames(_, _);
  if (!_.BSuccess())
    throw `Error loading most played by daily active users: ${_.GetErrorMessage()}`;
  let _ = [];
  for (let _ of _.Body().ranks()) {
    let _ = _.item();
    if (!_) continue;
    let _ = _(_.toObject());
    _ &&
      (_ && _.cacheStoreItemData(_, _.data_request),
      _.push({
        nRank: _.rank() ?? 0,
        itemKey: _,
        nRankLastWeek: _.last_week_rank() ?? 0,
        nPeakInGame: _.peak_in_game() ?? 0,
      }));
  }
  return {
    rgRanks: _,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`ChartsMostPlayedByDAU`],
    queryFn: () => _(_, _, _),
    staleTime: 36e5,
  };
}
function _() {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_);
  return _(_(_, _, _));
}
