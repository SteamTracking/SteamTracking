/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { $ as r, Q as i } from "./salesectionfactory.js";
import { h as a } from "./partnerevent.js";
import { t as o } from "./partnersaledisplay.js";
import { n as s, t as c } from "./eventinitialization.js";
import { t as l } from "./throbber.js";
import { n as u } from "./partnereventstore.js";
import {
  Ly as d,
  Wy as f,
  ax as p,
  gt as m,
  ht as h,
  pd as g,
  rx as _,
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
    [g, x] = y.useState(
      c ?? u.GetClanEventFromAnnouncementGID(p.ANNOUNCEMENT_GID),
    );
  y.useEffect(() => {
    if (!c && g?.AnnouncementGID != p.ANNOUNCEMENT_GID) {
      let e = new d(_.CLANSTEAMID);
      u.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        e,
        p.ANNOUNCEMENT_GID,
        null,
      ).then(x);
    }
  }, [g, c]);
  let S = r() ?? g,
    w = i();
  if ((s(1500), !S))
    return (0, b.jsx)(`div`, {
      className: v,
      style: { height: `500px` },
      children: (0, b.jsx)(l, { size: `medium`, string: f(`#Loading`) }),
    });
  let T =
    (S.visibility_state !== a.k_EEventStateVisible &&
      S.visibility_state !== a.k_EEventStateUnlisted) ||
    w;
  return (0, b.jsx)(C, {
    eventModel: S,
    children: (0, b.jsx)(m, {
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
  return (0, b.jsx)(g, {
    eAdultOnlyMediaBehavior: r ? `allowed` : `masked`,
    children: n,
  });
}
export { x as default };
