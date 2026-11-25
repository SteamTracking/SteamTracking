/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { ot as e, ut as t } from "./chunk~01cfc309bf.js";
import { at as n } from "./chunk~f57d770d64.js";
import { c as r } from "./chunk~8c66e1c7a5.js";
import {
  Cv as i,
  Ic as a,
  Mv as o,
  Xc as s,
  bv as c,
  eb as l,
  rx as u,
} from "./main.js";
function d(n) {
  let r = t(),
    i = c();
  return e(f(r, i, n)).data ?? void 0;
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
              `${u.STORE_ITEM_BASE_URL}${i.all_ages_screenshots[e].filename}`
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
  let l = t(),
    u = c();
  return e(g(l, u, r, i, a, o, s)).data ?? void 0;
}
function h(e, t, r, i = n.full, a = !0) {
  return [`useEventImageURLWithFallback`, e?.GID, t, r, i, a];
}
function g(e, t, o, s, c, l = n.full, d = !0) {
  return {
    queryKey: h(o, s, c, l, d),
    enabled: !!o?.GID,
    initialData: () => _(o, s, c, l, d),
    queryFn: async () => {
      if (!o) return null;
      let n = _(o, s, c, l, d);
      if (n) return n;
      let p = await e.ensureQueryData(r(o.clanSteamID.GetAccountID(), e));
      if (s == `capsule`) {
        let n = o.appid;
        if (!n && p && ((p.is_creator_home && !p.is_ogg) || p.is_curator)) {
          if (o.jsondata?.referenced_appids?.length)
            n = o.jsondata.referenced_appids[0];
          else return p.avatar_full_url ?? null;
        }
        let r = await e.ensureQueryData(i(t, { appid: n }));
        return r
          ? (a(r, `main_capsule`) ?? null)
          : p?.avatar_full_url
            ? p.avatar_full_url
            : `${u.STORE_ITEM_BASE_URL}steam/apps/${n}/header.jpg`;
      }
      return s == `background` &&
        p &&
        ((p.is_creator_home && !p.is_ogg) || p.is_curator)
        ? (p.creator_page_bg_url ?? null)
        : await e.ensureQueryData(f(e, t, o));
    },
  };
}
function _(e, t, r, i = n.full, a = !0) {
  if (!e) return;
  let o = e.GetImageURL(t, r, i);
  if (o && o.trim().length > 0) return o;
  let c = l.GetELanguageFallback(r);
  if (r != c) {
    let n = e.GetImageURL(t, c, i);
    if (n && n.trim().length > 0) return n;
  }
  if (t == `capsule`) {
    let t = e.GetImageFromBeginningOfDescription(r, Number.MAX_VALUE);
    if (t && (a || s(t))) return t;
  }
}
export { d as i, m as n, f as r, g as t };
