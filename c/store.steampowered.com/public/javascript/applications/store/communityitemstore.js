import { _, _ } from "./libraries.js";
import { _, _, _ } from "./main.js";
var _ = class {
  m_ItemDefinition = {};
  m_ItemKV = {};
  constructor(_) {
    _(this);
    let { itemDef: _, communityItemDef: _ } = _;
    _(
      _.itemDef || _.communityItemDef,
      `CCommunityItem must be initialized by an itemDef or a communityItemDef`,
    ),
      _
        ? (this.m_ItemDefinition = {
            item_type: _.item_type,
            item_class: _.item_class,
            item_description: _.item_description,
            editor_accountid: _.editor_accountid,
            deleted: _.deleted,
            active: _.active,
            appid: _.appid,
            item_image_composed: _.item_image_composed,
            item_image_large: _.item_image_large,
            item_image_small: _.item_image_small,
            item_key_values: _.item_key_values,
            item_movie_mp4: _.item_movie_mp4,
            item_movie_mp4_small: _.item_movie_mp4_small,
            item_internal_name: _.item_name,
            item_series: _.item_series,
            item_movie_webm: _.item_movie_webm,
            item_movie_webm_small: _.item_movie_webm_small,
            item_image_composed_foil: _.item_image_composed_foil,
            item_last_changed: _.item_last_changed,
            broadcast_channel_id: _.broadcast_channel_id,
          })
        : (_(
            !!_,
            `Managed to get into LoadItemDefinition with neither itemDef nor communityItemDef`,
          ),
          (this.m_ItemDefinition = _)),
      this.m_ItemDefinition.item_key_values &&
        (this.m_ItemKV = JSON.parse(this.m_ItemDefinition.item_key_values));
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
_([_], _.prototype, `m_ItemDefinition`, void 0),
  _([_], _.prototype, `m_ItemKV`, void 0);
function _(_, _) {
  return `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
}
export { _ };
