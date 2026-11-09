/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { dt as e, st as t } from "./libraries.js";
import { t as n } from "./clanimagemodels.js";
import { c as r } from "./claninfo.js";
import {
  Hb as i,
  Rc as a,
  _v as o,
  av as s,
  cv as c,
  wc as l,
  zy as u,
} from "./main.js";
function d(n) {
  let r = e(),
    i = s();
  return t(f(r, i, n)).data ?? void 0;
}
function f(e, t, n) {
  return {
    queryKey: p(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let a = n.appid
          ? await e.ensureQueryData(o(t, { appid: n.appid }))
          : null,
        s = await e.ensureQueryData(r(n.clanSteamID.GetAccountID(), e));
      if (n.appid) {
        if (a) {
          if (a.all_ages_screenshots && a.all_ages_screenshots.length > 0) {
            let e = Number(
              n.bOldAnnouncement
                ? n.AnnouncementGID
                : n.GID == null
                  ? 0
                  : n.GID,
            );
            return (
              (e %= a.all_ages_screenshots.length),
              `${i.STORE_ITEM_BASE_URL}${a.all_ages_screenshots[e].filename}`
            );
          }
        } else return ``;
      }
      return n.GetEventType() != 36 &&
        s &&
        ((s.is_creator_home && !s.is_ogg) || s.is_curator)
        ? (s.avatar_full_url ?? null)
        : null;
    },
  };
}
function p(e) {
  return [`useFallbackArtworkScreenshot`, e?.GID];
}
function m(r, i, a, o = n.full, c = !0) {
  let l = e(),
    u = s();
  return t(g(l, u, r, i, a, o, c)).data ?? void 0;
}
function h(e, t, r, i = n.full, a = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, r, i, a];
}
function g(e, t, a, o, s, u = n.full, d = !0) {
  return {
    queryKey: h(a, o, s, u, d),
    enabled: !!a?.GID,
    initialData: () => _(a, o, s, u, d),
    queryFn: async () => {
      if (!a) return null;
      let n = _(a, o, s, u, d);
      if (n) return n;
      let p = await e.ensureQueryData(r(a.clanSteamID.GetAccountID(), e));
      if (o == `capsule`) {
        let n = a.appid;
        if (!n && p && ((p.is_creator_home && !p.is_ogg) || p.is_curator)) {
          if (a.jsondata?.referenced_appids?.length)
            n = a.jsondata.referenced_appids[0];
          else return p.avatar_full_url ?? null;
        }
        let r = await e.ensureQueryData(c(t, { appid: n }));
        return r
          ? (l(r, `main_capsule`) ?? null)
          : p?.avatar_full_url
            ? p.avatar_full_url
            : `${i.STORE_ITEM_BASE_URL}steam/apps/${n}/header.jpg`;
      }
      return o == `background` &&
        p &&
        ((p.is_creator_home && !p.is_ogg) || p.is_curator)
        ? (p.creator_page_bg_url ?? null)
        : await e.ensureQueryData(f(e, t, a));
    },
  };
}
function _(e, t, r, i = n.full, o = !0) {
  if (!e) return;
  let s = e.GetImageURL(t, r, i);
  if (s && s.trim().length > 0) return s;
  let c = u.GetELanguageFallback(r);
  if (r != c) {
    let n = e.GetImageURL(t, c, i);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(r, Number.MAX_VALUE);
    if (t && (o || a(t))) return t;
  }
}
export { d as i, m as n, f as r, g as t };
