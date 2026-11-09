import { _, _ } from "./mobx.esm.js";
import { _ } from "./src.js";
import "./react-router.js";
import { _ } from "./axios.js";
import { _ } from "./storeitemcache.js";
var _ = _(_()),
  _ = _(_());
function _(_, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _();
  _.current = _;
  let [_, _] = (0, _.useState)(void 0),
    {
      include_assets: _,
      include_release: _,
      include_platforms: _,
      include_all_purchase_options: _,
      include_screenshots: _,
      include_trailers: _,
      include_ratings: _,
      include_tag_count: _,
      include_reviews: _,
      include_basic_info: _,
      include_supported_languages: _,
      include_full_description: _,
      include_included_items: _,
      include_assets_without_overrides: _,
      apply_user_filters: _,
      include_links: _,
      include_extra_details: _,
      include_optin_registration_tags: _,
    } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = {
          include_assets: _,
          include_release: _,
          include_platforms: _,
          include_all_purchase_options: _,
          include_screenshots: _,
          include_trailers: _,
          include_ratings: _,
          include_tag_count: _,
          include_reviews: _,
          include_basic_info: _,
          include_supported_languages: _,
          include_full_description: _,
          include_included_items: _,
          include_assets_without_overrides: _,
          apply_user_filters: _,
          include_links: _,
          include_extra_details: _,
          include_optin_registration_tags: _,
        },
        _ = null;
      return (
        !_ ||
          _ < 0 ||
          _.Get().BHasStoreItem(_, _, _) ||
          (_ !== void 0 && _ && _ == _.current) ||
          (_ !== _.current && (_(void 0), (_.current = _)),
          (_ = _.default.CancelToken.source()),
          _.Get()
            .QueueStoreItemRequest(_, _, _)
            .then((_) => {
              !_?.token.reason && _.current === _ && _(_ == 1), _();
            })),
        () => _?.cancel(`useStoreItemCache: unmounting`)
      );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    !_)
  )
    return [null, 2];
  if (_ === !1 || _.Get().BIsStoreItemMissing(_, _)) return [void 0, 2];
  if (!_.Get().BHasStoreItem(_, _, _)) return [void 0, 1];
  let _ = _.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
  return _ ? [_, 3] : [null, 2];
}
function _(_, _, _) {
  return _(_, 0, _, _);
}
function _(_, _, _) {
  return _(_, 2, _, _);
}
function _(_, _, _) {
  return _(_, 1, _, _);
}
function _(_, _, _, _) {
  let _ = _(),
    {
      include_assets: _,
      include_release: _,
      include_platforms: _,
      include_all_purchase_options: _,
      include_screenshots: _,
      include_trailers: _,
      include_ratings: _,
      include_tag_count: _,
      include_reviews: _,
      include_basic_info: _,
      include_supported_languages: _,
      include_full_description: _,
      include_included_items: _,
      include_assets_without_overrides: _,
      apply_user_filters: _,
      include_links: _,
      include_extra_details: _,
      include_optin_registration_tags: _,
    } = _;
  return (
    (0, _.useEffect)(() => {
      if (!_ || _.length == 0) return;
      let _ = {
          include_assets: _,
          include_release: _,
          include_platforms: _,
          include_all_purchase_options: _,
          include_screenshots: _,
          include_trailers: _,
          include_ratings: _,
          include_tag_count: _,
          include_reviews: _,
          include_basic_info: _,
          include_supported_languages: _,
          include_full_description: _,
          include_included_items: _,
          include_assets_without_overrides: _,
          apply_user_filters: _,
          include_links: _,
          include_extra_details: _,
          include_optin_registration_tags: _,
        },
        _ = _.filter(
          (_) =>
            !(
              _.Get().BHasStoreItem(_, _, _) ||
              _.Get().BIsStoreItemMissing(_, _)
            ),
        );
      if (_.length == 0) return;
      let _ = _.default.CancelToken.source(),
        _ = _.map((_) => _.Get().QueueStoreItemRequest(_, _, _));
      return (
        Promise.all(_).then(() => {
          _.token.reason || _();
        }),
        () => _.cancel(`useStoreItemCacheMultiplePackages: unmounting`)
      );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    _
      ? _.every(
          (_) =>
            _.Get().BHasStoreItem(_, _, _) || _.Get().BIsStoreItemMissing(_, _),
        )
        ? _.every((_) => _.Get().GetStoreItemWithLegacyVisibilityCheck(_, _))
          ? 3
          : 2
        : 1
      : 2
  );
}
function _(_, _, _) {
  return _(_, 0, _, _);
}
function _(_, _, _) {
  return _(_, 2, _, _);
}
function _(_, _, _) {
  return _(_, 1, _, _);
}
export { _, _, _, _, _, _, _ };
