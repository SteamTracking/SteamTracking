/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, kt as t } from "./libraries.js";
import { Jx as n, Nb as r, Ub as i } from "./main.js";
var a = class {
  m_ItemDefinition = {};
  m_ItemKV = {};
  constructor(e) {
    t(this);
    let { itemDef: r, communityItemDef: i } = e;
    (n(
      e.itemDef || e.communityItemDef,
      `CCommunityItem must be initialized by an itemDef or a communityItemDef`,
    ),
      r
        ? (this.m_ItemDefinition = {
            item_type: r.item_type,
            item_class: r.item_class,
            item_description: r.item_description,
            editor_accountid: r.editor_accountid,
            deleted: r.deleted,
            active: r.active,
            appid: r.appid,
            item_image_composed: r.item_image_composed,
            item_image_large: r.item_image_large,
            item_image_small: r.item_image_small,
            item_key_values: r.item_key_values,
            item_movie_mp4: r.item_movie_mp4,
            item_movie_mp4_small: r.item_movie_mp4_small,
            item_internal_name: r.item_name,
            item_series: r.item_series,
            item_movie_webm: r.item_movie_webm,
            item_movie_webm_small: r.item_movie_webm_small,
            item_image_composed_foil: r.item_image_composed_foil,
            item_last_changed: r.item_last_changed,
            broadcast_channel_id: r.broadcast_channel_id,
          })
        : (n(
            !!i,
            `Managed to get into LoadItemDefinition with neither itemDef nor communityItemDef`,
          ),
          (this.m_ItemDefinition = i)),
      this.m_ItemDefinition.item_key_values &&
        (this.m_ItemKV = JSON.parse(this.m_ItemDefinition.item_key_values)));
  }
  get AppID() {
    return this.m_ItemDefinition.appid;
  }
  get BIsActive() {
    return this.m_ItemDefinition.active;
  }
  get ItemID() {
    return this.m_ItemDefinition.item_type;
  }
  get BIsDeleted() {
    return this.m_ItemDefinition.deleted;
  }
  get ItemClass() {
    return this.m_ItemDefinition.item_class;
  }
  get CommunityItemDef() {
    return this.m_ItemDefinition;
  }
};
(r([e], a.prototype, `m_ItemDefinition`, void 0),
  r([e], a.prototype, `m_ItemKV`, void 0));
function o(e, t) {
  return `${i.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
}
export { o as t };
