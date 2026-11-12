/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { At as e, kt as t } from "./chunk~01cfc309bf.js";
import { Lb as n, Qx as r, qb as i } from "./main.js";
var a = class {
  m_ItemDefinition = {};
  m_ItemKV = {};
  constructor(e) {
    t(this);
    let { itemDef: n, communityItemDef: i } = e;
    (r(
      e.itemDef || e.communityItemDef,
      `CCommunityItem must be initialized by an itemDef or a communityItemDef`,
    ),
      n
        ? (this.m_ItemDefinition = {
            item_type: n.item_type,
            item_class: n.item_class,
            item_description: n.item_description,
            editor_accountid: n.editor_accountid,
            deleted: n.deleted,
            active: n.active,
            appid: n.appid,
            item_image_composed: n.item_image_composed,
            item_image_large: n.item_image_large,
            item_image_small: n.item_image_small,
            item_key_values: n.item_key_values,
            item_movie_mp4: n.item_movie_mp4,
            item_movie_mp4_small: n.item_movie_mp4_small,
            item_internal_name: n.item_name,
            item_series: n.item_series,
            item_movie_webm: n.item_movie_webm,
            item_movie_webm_small: n.item_movie_webm_small,
            item_image_composed_foil: n.item_image_composed_foil,
            item_last_changed: n.item_last_changed,
            broadcast_channel_id: n.broadcast_channel_id,
          })
        : (r(
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
(n([e], a.prototype, `m_ItemDefinition`, void 0),
  n([e], a.prototype, `m_ItemKV`, void 0));
function o(e, t) {
  return `${i.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
}
export { o as t };
