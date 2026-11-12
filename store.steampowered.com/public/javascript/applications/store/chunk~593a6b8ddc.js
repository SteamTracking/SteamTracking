/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { B as e, C as t, P as n, m as r, p as i } from "./chunk~f57d770d64.js";
import { Bu as a, Qx as o, Vy as s, Xx as c, cx as l } from "./main.js";
function u(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function d(t) {
  return u(t) ? e + t.announcement_body?.gid : t.gid;
}
function f(e, f) {
  let p = new t();
  if (
    ((p.clanSteamID = e),
    o(
      p.clanSteamID && p.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        p.clanSteamID.ConvertTo64BitString() +
        ` ` +
        l.EUNIVERSE,
    ),
    (p.GID = d(f)),
    (p.bOldAnnouncement = u(f)),
    (p.appid = f.appid ?? 0),
    (p.createTime = f.rtime_created),
    (p.startTime = f.rtime32_start_time),
    (p.endTime = f.rtime32_end_time),
    (p.visibilityStartTime = f.rtime32_visibility_start),
    (p.visibilityEndTime = f.rtime32_visibility_end),
    (p.loadedAllLanguages = !1),
    (p.type = f.event_type ?? 1),
    (p.nVotesUp = f.votes_up ?? 0),
    (p.nVotesDown = f.votes_down ?? 0),
    (p.comment_type = f.comment_type),
    (p.gidfeature = f.gidfeature),
    (p.gidfeature2 = f.gidfeature2),
    (p.featured_app_tagid = f.featured_app_tagid),
    (p.vecTags = []),
    (p.creator_steamid = f.creator_steamid),
    (p.last_update_steamid = f.last_update_steamid),
    (p.rtime32_last_modified = f.rtime32_last_modified),
    (p.rtime32_moderator_reviewed = f.rtime_mod_reviewed),
    (p.video_preview_type = f.video_preview_type),
    (p.video_preview_id = f.video_preview_id),
    (p.has_live_stream = f.has_live_stream),
    (p.live_stream_viewer_count = f.live_stream_viewer_count),
    (p.m_nBuildID = f.build_id),
    (p.m_strBuildBranch = f.build_branch),
    f.announcement_body)
  ) {
    let e = f.announcement_body;
    ((p.AnnouncementGID = e.gid),
      p.name.set(e.language, e.headline),
      p.description.set(e.language, e.body),
      p.timestamp_loc_updated.clear(),
      (p.forumTopicGID = e.forum_topic_id),
      (p.nCommentCount = e.commentcount),
      (p.postTime = e.posttime),
      p.bOldAnnouncement && !e.hidden && (p.startTime = e.posttime),
      (p.announcementClanSteamID = new s(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => p.vecTags.push(e)),
      !p.rtime32_last_solr_search_col_updated &&
        p.rtime32_last_modified &&
        ((p.rtime32_last_solr_search_col_updated = p.rtime32_last_modified),
        (p.rtime32_last_modified = e.updatetime)));
  } else
    ((p.AnnouncementGID = `0`),
      (p.forumTopicGID = f.forum_topic_id),
      p.name.clear(),
      p.description.clear(),
      p.timestamp_loc_updated.clear(),
      (p.postTime = f.rtime32_start_time),
      (p.nCommentCount = f.comment_count ?? 0),
      p.name.set(0, f.event_name ?? ``),
      p.description.set(0, f.event_notes ?? ``));
  f.broadcaster_accountid && (p.broadcaster = new s(f.broadcaster_accountid));
  let m = i;
  try {
    p.jsondata = { ...m, ...(f.jsondata ? JSON.parse(f.jsondata) : void 0) };
  } catch (e) {
    let t = a(e);
    throw (
      console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e
    );
  }
  if (
    ((p.jsondata.localized_capsule_image = c(
      p.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (p.jsondata.localized_title_image = c(
      p.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (p.jsondata.localized_subtitle = c(
      p.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (p.jsondata.localized_summary = c(
      p.jsondata.localized_summary || [],
      32,
      null,
    )),
    (p.jsondata.localized_broadcast_title = c(
      p.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (p.jsondata.localized_broadcast_left_image = c(
      p.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (p.jsondata.localized_broadcast_right_image = c(
      p.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (p.jsondata.localized_sale_header = c(
      p.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (p.jsondata.localized_sale_overlay = c(
      p.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (p.jsondata.localized_sale_product_banner = c(
      p.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (p.jsondata.localized_sale_product_mobile_banner = c(
      p.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (p.jsondata.localized_sale_logo = c(
      p.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    p.jsondata.sale_num_headers !== void 0 &&
      p.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < p.jsondata.sale_num_headers; ++e)
      p.jsondata.localized_per_day_sales_header[e] = c(
        p.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    n(p.jsondata),
    p.jsondata.email_setting &&
      p.jsondata.email_setting.sections &&
      p.jsondata.email_setting.sections.forEach((e) => {
        (e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = c(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = c(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = c(e.localized_image, 32, null)));
      }),
    p.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let n = e.lastIndexOf(`/`),
          r = e.substr(n + 1);
        p.jsondata.localized_title_image[t] = r;
      }
    }),
    (p.bLoaded = !0),
    (p.visibility_state = f.published
      ? f.unlisted
        ? r.k_EEventStateUnlisted
        : f.hidden
          ? r.k_EEventStateStaged
          : r.k_EEventStateVisible
      : r.k_EEventStateUnpublished),
    p
  );
}
export { f as n, d as t };
