var _ = 6e4;
function _(_) {
  return [`ugc_contributor_data`, _];
}
function _(_) {
  return [`ugc_friends_who_favorited`, _];
}
function _(_) {
  return [`workshop_item_owner_info`, _];
}
function _(_) {
  return {
    queryKey: _(_),
    queryFn: async () => _(`/sharedfiles/actions`, `GetUGCItemOwnerInfo`, _),
    staleTime: _,
  };
}
export { _, _, _, _, _ };
