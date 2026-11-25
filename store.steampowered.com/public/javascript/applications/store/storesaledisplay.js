/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { m as r } from "./chunk~f57d770d64.js";
import { et as i, tt as a } from "./chunk~2185942436.js";
import { t as o } from "./chunk~06d7f063bc.js";
import { n as s, t as c } from "./chunk~3135e25ddf.js";
import { t as l } from "./chunk~eefd71512b.js";
import { n as u } from "./chunk~fc8a9e4879.js";
import {
  Dd as d,
  Zy as f,
  _t as p,
  _x as m,
  gt as h,
  ib as g,
  t as _,
  yx as v,
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
    [d, x] = y.useState(
      c ?? u.GetClanEventFromAnnouncementGID(v.ANNOUNCEMENT_GID),
    );
  y.useEffect(() => {
    if (!c && d?.AnnouncementGID != v.ANNOUNCEMENT_GID) {
      let e = new f(m.CLANSTEAMID);
      u.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        e,
        v.ANNOUNCEMENT_GID,
        null,
      ).then(x);
    }
  }, [d, c]);
  let S = a() ?? d,
    w = i();
  if ((s(1500), !S))
    return (0, b.jsx)(`div`, {
      className: _,
      style: { height: `500px` },
      children: (0, b.jsx)(l, { size: `medium`, string: g(`#Loading`) }),
    });
  let T =
    (S.visibility_state !== r.k_EEventStateVisible &&
      S.visibility_state !== r.k_EEventStateUnlisted) ||
    w;
  return (0, b.jsx)(C, {
    eventModel: S,
    children: (0, b.jsx)(p, {
      children: (0, b.jsx)(h, {
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
  return (0, b.jsx)(d, {
    eAdultOnlyMediaBehavior: r ? `allowed` : `masked`,
    children: n,
  });
}
export { x as default };
