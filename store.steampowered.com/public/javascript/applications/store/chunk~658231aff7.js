/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { $ as r, Q as i } from "./chunk~2185942436.js";
import { m as a } from "./chunk~f57d770d64.js";
import { t as o } from "./chunk~06d7f063bc.js";
import { n as s, t as c } from "./chunk~3135e25ddf.js";
import { t as l } from "./chunk~eefd71512b.js";
import { n as u } from "./chunk~fc8a9e4879.js";
import {
  Jy as d,
  Vy as f,
  _d as p,
  lx as m,
  mt as h,
  pt as g,
  sx as _,
  t as v,
} from "./main.js";
var y = e(t()),
  b = n();
function x(e) {
  let { eventModel: t } = e;
  return (0, b.jsx)(c, {
    bSalePage: !0,
    children: (0, b.jsx)(S, { ...e, overrideEventModel: t }),
  });
}
function S(e) {
  let { promotionName: t, language: n, overrideEventModel: c } = e,
    [p, x] = y.useState(
      c ?? u.GetClanEventFromAnnouncementGID(m.ANNOUNCEMENT_GID),
    );
  y.useEffect(() => {
    if (!c && p?.AnnouncementGID != m.ANNOUNCEMENT_GID) {
      let e = new f(_.CLANSTEAMID);
      u.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        e,
        m.ANNOUNCEMENT_GID,
        null,
      ).then(x);
    }
  }, [p, c]);
  let S = r() ?? p,
    w = i();
  if ((s(1500), !S))
    return (0, b.jsx)(`div`, {
      className: v,
      style: { height: `500px` },
      children: (0, b.jsx)(l, { size: `medium`, string: d(`#Loading`) }),
    });
  let T =
    (S.visibility_state !== a.k_EEventStateVisible &&
      S.visibility_state !== a.k_EEventStateUnlisted) ||
    w;
  return (0, b.jsx)(C, {
    eventModel: S,
    children: (0, b.jsx)(h, {
      children: (0, b.jsx)(g, {
        curator_clanid: S?.clanSteamID?.GetAccountID(),
        children: (0, b.jsx)(o, {
          promotionName: t,
          language: n,
          eventModel: S,
          bIsPreview: T,
        }),
      }),
    }),
  });
}
function C(e) {
  let { eventModel: t, children: n } = e,
    r = t.GetContentHubType() == `adultonly`;
  return (0, b.jsx)(p, {
    eAdultOnlyMediaBehavior: r ? `allowed` : `masked`,
    children: n,
  });
}
export { x as default };
