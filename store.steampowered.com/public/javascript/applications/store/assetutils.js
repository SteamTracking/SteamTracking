/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { cx as e } from "./main.js";
function t(t, n) {
  if (t?.asset_url_format && typeof t[n] == `string`)
    return (
      e.BASE_URL_SHARED_CDN +
      `/store_item_assets/` +
      t.asset_url_format.replace("${FILENAME}", t[n])
    );
}
export { t };
