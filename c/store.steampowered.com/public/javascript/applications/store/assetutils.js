import { _ } from "./main.js";
function _(_, _) {
  if (_?.asset_url_format && typeof _[_] == `string`)
    return (
      _.BASE_URL_SHARED_CDN +
      `/store_item_assets/` +
      _.asset_url_format.replace("${FILENAME}", _[_])
    );
}
export { _ };
