/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { dt as e, st as t } from "./libraries.js";
import { t as n } from "./clanimagemodels.js";
import { c as r } from "./claninfo.js";
import {
  By as i,
  Tc as a,
  Ub as o,
  lv as s,
  ov as c,
  vv as l,
  zc as u,
} from "./main.js";
function d(n) {
  let r = e(),
    i = c();
  return t(f(r, i, n)).data ?? void 0;
}
function f(e, t, n) {
  return {
    queryKey: p(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let i = n.appid
          ? await e.ensureQueryData(l(t, { appid: n.appid }))
          : null,
        a = await e.ensureQueryData(r(n.clanSteamID.GetAccountID(), e));
      if (n.appid) {
        if (i) {
          if (i.all_ages_screenshots && i.all_ages_screenshots.length > 0) {
            let e = Number(
              n.bOldAnnouncement
                ? n.AnnouncementGID
                : n.GID == null
                  ? 0
                  : n.GID,
            );
            return (
              (e %= i.all_ages_screenshots.length),
              `${o.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return n.GetEventType() != 36 &&
        a &&
        ((a.is_creator_home && !a.is_ogg) || a.is_curator)
        ? (a.avatar_full_url ?? null)
        : null;
    },
  };
}
function p(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function m(r, i, a, o = n.full, s = !0) {
  let l = e(),
    u = c();
  return t(g(l, u, r, i, a, o, s)).data ?? void 0;
}
function h(e, t, r, i = n.full, a = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, r, i, a];
}
function g(e, t, i, c, l, u = n.full, d = !0) {
  return {
    queryKey: h(i, c, l, u, d),
    enabled: !!i?.GID,
    initialData: () => _(i, c, l, u, d),
    queryFn: async () => {
      if (!i) return null;
      let n = _(i, c, l, u, d);
      if (n) return n;
      let p = await e.ensureQueryData(r(i.clanSteamID.GetAccountID(), e));
      if (c == `capsule`) {
        let n = i.appid;
        if (!n && p && ((p.is_creator_home && !p.is_ogg) || p.is_curator)) {
          if (i.jsondata?.referenced_appids?.length)
            n = i.jsondata.referenced_appids[0];
          else return p.avatar_full_url ?? null;
        }
        let r = await e.ensureQueryData(s(t, { appid: n }));
        return r
          ? (a(r, `main_capsule`) ?? null)
          : p?.avatar_full_url
            ? p.avatar_full_url
            : `${o.STORE_ITEM_BASE_URL}steam/apps/${n}/header.jpg`;
      }
      return c == `background` &&
        p &&
        ((p.is_creator_home && !p.is_ogg) || p.is_curator)
        ? (p.creator_page_bg_url ?? null)
        : await e.ensureQueryData(f(e, t, i));
    },
  };
}
function _(e, t, r, a = n.full, o = !0) {
  if (!e) return;
  let s = e.GetImageURL(t, r, a);
  if (s && s.trim().length > 0) return s;
  let c = i.GetELanguageFallback(r);
  if (r != c) {
    let n = e.GetImageURL(t, c, a);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(r, Number.MAX_VALUE);
    if (t && (o || u(t))) return t;
  }
}
export { d as i, m as n, f as r, g as t };
