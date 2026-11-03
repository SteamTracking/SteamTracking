function _(_) {
  return _({
    queryKey: _(_),
    queryFn: async () => _(`/workshop/actions`, `GetUGCAppRelationships`, _),
    staleTime: _,
  });
}
function _(_, _ = !0, _) {
  let _ = _();
  return _({
    queryKey: _ ? [`ugc_item_preview`, _, `admin`, _] : [`ugc_item_preview`, _],
    queryFn: async () => {
      if (_.length == 0) return null;
      let {
        details: _,
        contributorData: _,
        playerLinkDetails: _,
      } = await _(`/workshop/actions`, `GetUGCDetailsForItemPreview`, _, _);
      return _.setQueryData(_(_), _), _(_, _), _;
    },
    enabled: _,
    staleTime: 36e5,
  });
}
export { _, _ };
