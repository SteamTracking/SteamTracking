/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { dt as e, st as t } from "./chunk~01cfc309bf.js";
import { t as n } from "./chunk~4c761eb6f4.js";
import { c as r } from "./chunk~8c66e1c7a5.js";
import {
  Bc as i,
  Ec as a,
  Sv as o,
  Wy as s,
  pv as c,
  qb as l,
  uv as u,
} from "./main.js";
function d(n) {
  let r = e(),
    i = u();
  return t(f(r, i, n)).data ?? void 0;
}
function f(e, t, n) {
  return {
    queryKey: p(n),
    enabled: !!n?.GID,
    queryFn: async () => {
      if (!n) return null;
      let i = n.appid
          ? await e.ensureQueryData(o(t, { appid: n.appid }))
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
              `${l.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
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
  let c = e(),
    l = u();
  return t(g(c, l, r, i, a, o, s)).data ?? void 0;
}
function h(e, t, r, i = n.full, a = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, r, i, a];
}
function g(e, t, i, o, s, u = n.full, d = !0) {
  return {
    queryKey: h(i, o, s, u, d),
    enabled: !!i?.GID,
    initialData: () => _(i, o, s, u, d),
    queryFn: async () => {
      if (!i) return null;
      let n = _(i, o, s, u, d);
      if (n) return n;
      let p = await e.ensureQueryData(r(i.clanSteamID.GetAccountID(), e));
      if (o == `capsule`) {
        let n = i.appid;
        if (!n && p && ((p.is_creator_home && !p.is_ogg) || p.is_curator)) {
          if (i.jsondata?.referenced_appids?.length)
            n = i.jsondata.referenced_appids[0];
          else return p.avatar_full_url ?? null;
        }
        let r = await e.ensureQueryData(c(t, { appid: n }));
        return r
          ? (a(r, `main_capsule`) ?? null)
          : p?.avatar_full_url
            ? p.avatar_full_url
            : `${l.STORE_ITEM_BASE_URL}steam/apps/${n}/header.jpg`;
      }
      return o == `background` &&
        p &&
        ((p.is_creator_home && !p.is_ogg) || p.is_curator)
        ? (p.creator_page_bg_url ?? null)
        : await e.ensureQueryData(f(e, t, i));
    },
  };
}
function _(e, t, r, a = n.full, o = !0) {
  if (!e) return;
  let c = e.GetImageURL(t, r, a);
  if (c && c.trim().length > 0) return c;
  let l = s.GetELanguageFallback(r);
  if (r != l) {
    let n = e.GetImageURL(t, l, a);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(r, Number.MAX_VALUE);
    if (t && (o || i(t))) return t;
  }
}
export { d as i, m as n, f as r, g as t };
