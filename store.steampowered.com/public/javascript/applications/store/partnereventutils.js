/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  B as e,
  P as t,
  h as n,
  m as r,
  p as i,
  w as a,
} from "./partnerevent.js";
import { Fu as o, Gx as s, Iy as c, qx as l, rx as u } from "./main.js";
function d(e) {
  return (
    (e.gid == null || e.gid == null || e.gid == `0`) &&
    !!e.announcement_body &&
    e.announcement_body.gid != `0`
  );
}
function f(t) {
  return d(t) ? e + t.announcement_body?.gid : t.gid;
}
function p(e, p) {
  let m = new a();
  if (
    ((m.clanSteamID = e),
    l(
      m.clanSteamID && m.clanSteamID.BIsValid(),
      `Invalid Clan SteamID: ` +
        m.clanSteamID.ConvertTo64BitString() +
        ` ` +
        u.EUNIVERSE,
    ),
    (m.GID = f(p)),
    (m.bOldAnnouncement = d(p)),
    (m.appid = p.appid ?? 0),
    (m.createTime = p.rtime_created),
    (m.startTime = p.rtime32_start_time),
    (m.endTime = p.rtime32_end_time),
    (m.visibilityStartTime = p.rtime32_visibility_start),
    (m.visibilityEndTime = p.rtime32_visibility_end),
    (m.loadedAllLanguages = !1),
    (m.type = p.event_type ?? 1),
    (m.nVotesUp = p.votes_up ?? 0),
    (m.nVotesDown = p.votes_down ?? 0),
    (m.comment_type = p.comment_type),
    (m.gidfeature = p.gidfeature),
    (m.gidfeature2 = p.gidfeature2),
    (m.featured_app_tagid = p.featured_app_tagid),
    (m.vecTags = []),
    (m.creator_steamid = p.creator_steamid),
    (m.last_update_steamid = p.last_update_steamid),
    (m.rtime32_last_modified = p.rtime32_last_modified),
    (m.rtime32_moderator_reviewed = p.rtime_mod_reviewed),
    (m.video_preview_type = p.video_preview_type),
    (m.video_preview_id = p.video_preview_id),
    (m.has_live_stream = p.has_live_stream),
    (m.live_stream_viewer_count = p.live_stream_viewer_count),
    (m.m_nBuildID = p.build_id),
    (m.m_strBuildBranch = p.build_branch),
    p.announcement_body)
  ) {
    let e = p.announcement_body;
    (m.AnnouncementGID = e.gid),
      m.name.set(e.language, e.headline),
      m.description.set(e.language, e.body),
      m.timestamp_loc_updated.clear(),
      (m.forumTopicGID = e.forum_topic_id),
      (m.nCommentCount = e.commentcount),
      (m.postTime = e.posttime),
      m.bOldAnnouncement && !e.hidden && (m.startTime = e.posttime),
      (m.announcementClanSteamID = new c(e.clanid)),
      e.tags && e.tags.length > 0 && e.tags.forEach((e) => m.vecTags.push(e)),
      !m.rtime32_last_solr_search_col_updated &&
        m.rtime32_last_modified &&
        ((m.rtime32_last_solr_search_col_updated = m.rtime32_last_modified),
        (m.rtime32_last_modified = e.updatetime));
  } else
    (m.AnnouncementGID = `0`),
      (m.forumTopicGID = p.forum_topic_id),
      m.name.clear(),
      m.description.clear(),
      m.timestamp_loc_updated.clear(),
      (m.postTime = p.rtime32_start_time),
      (m.nCommentCount = p.comment_count ?? 0),
      m.name.set(0, p.event_name ?? ``),
      m.description.set(0, p.event_notes ?? ``);
  p.broadcaster_accountid && (m.broadcaster = new c(p.broadcaster_accountid));
  let h = i;
  try {
    m.jsondata = { ...h, ...(p.jsondata ? JSON.parse(p.jsondata) : void 0) };
  } catch (e) {
    let t = o(e);
    throw (
      (console.error(
        `PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model` +
          t.strErrorMsg,
        t,
      ),
      e)
    );
  }
  if (
    ((m.jsondata.localized_capsule_image = s(
      m.jsondata.localized_capsule_image || [],
      32,
      null,
    )),
    (m.jsondata.localized_title_image = s(
      m.jsondata.localized_title_image || [],
      32,
      null,
    )),
    (m.jsondata.localized_subtitle = s(
      m.jsondata.localized_subtitle || [],
      32,
      null,
    )),
    (m.jsondata.localized_summary = s(
      m.jsondata.localized_summary || [],
      32,
      null,
    )),
    (m.jsondata.localized_broadcast_title = s(
      m.jsondata.localized_broadcast_title || [],
      32,
      null,
    )),
    (m.jsondata.localized_broadcast_left_image = s(
      m.jsondata.localized_broadcast_left_image || [],
      32,
      null,
    )),
    (m.jsondata.localized_broadcast_right_image = s(
      m.jsondata.localized_broadcast_right_image || [],
      32,
      null,
    )),
    (m.jsondata.localized_sale_header = s(
      m.jsondata.localized_sale_header || [],
      32,
      null,
    )),
    (m.jsondata.localized_sale_overlay = s(
      m.jsondata.localized_sale_overlay || [],
      32,
      null,
    )),
    (m.jsondata.localized_sale_product_banner = s(
      m.jsondata.localized_sale_product_banner || [],
      32,
      null,
    )),
    (m.jsondata.localized_sale_product_mobile_banner = s(
      m.jsondata.localized_sale_product_mobile_banner || [],
      32,
      null,
    )),
    (m.jsondata.localized_sale_logo = s(
      m.jsondata.localized_sale_logo || [],
      32,
      null,
    )),
    m.jsondata.sale_num_headers !== void 0 &&
      m.jsondata.localized_per_day_sales_header)
  )
    for (let e = 0; e < m.jsondata.sale_num_headers; ++e)
      m.jsondata.localized_per_day_sales_header[e] = s(
        m.jsondata.localized_per_day_sales_header[e],
        32,
        null,
      );
  return (
    m.jsondata.sale_sections &&
      m.jsondata.sale_sections.forEach((e, n) => {
        (e.localized_label &&= s(e.localized_label, 32, null)),
          e.section_type === `trailercarousel` && (e.show_as_carousel = !1),
          t(e),
          (m.jsondata.sale_sections[n] = { ...r, ...e });
      }),
    m.jsondata.email_setting &&
      m.jsondata.email_setting.sections &&
      m.jsondata.email_setting.sections.forEach((e) => {
        e.localized_headline !== void 0 &&
          e.localized_headline !== null &&
          (e.localized_headline = s(e.localized_headline, 32, null)),
          e.localized_body !== void 0 &&
            e.localized_body !== null &&
            (e.localized_body = s(e.localized_body, 32, null)),
          e.localized_image !== void 0 &&
            e.localized_image !== null &&
            (e.localized_image = s(e.localized_image, 32, null));
      }),
    m.jsondata.localized_title_image.forEach((e, t) => {
      if (e != null && e.substr(0, 4) == `http`) {
        let n = e.lastIndexOf(`/`),
          r = e.substr(n + 1);
        m.jsondata.localized_title_image[t] = r;
      }
    }),
    (m.bLoaded = !0),
    (m.visibility_state = p.published
      ? p.unlisted
        ? n.k_EEventStateUnlisted
        : p.hidden
          ? n.k_EEventStateStaged
          : n.k_EEventStateVisible
      : n.k_EEventStateUnpublished),
    m
  );
}
export { p as n, f as t };
