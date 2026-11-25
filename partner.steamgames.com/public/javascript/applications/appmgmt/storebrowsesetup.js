/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Pt as t,
  k as n,
  nt as r,
  w as i,
} from "./chunk~de7f2df91c.js";
import { t as a } from "./chunk~0a99e05c44.js";
import { r as o, t as s } from "./chunk~70c16cc80c.js";
import { t as c } from "./chunk~3ee5188744.js";
var l = t(r());
function u(e) {
  let [t, r] = (0, l.useState)(!1),
    [i] = (0, l.useState)(() => f()),
    o = (0, l.useMemo)(
      () => ({ country: n.COUNTRY, language: n.LANGUAGE, bUsePartnerAPI: !0 }),
      [],
    );
  return (
    (0, l.useEffect)(() => (r(!0), p(i)), [i]),
    t
      ? (0, l.createElement)(a, {
          context: o,
          serviceTransportOverride: i.GetServiceTransport(),
          children: e.children,
        })
      : null
  );
}
function d(e) {
  let [t] = (0, l.useState)(() => f()),
    r = (0, l.useMemo)(
      () => ({
        country: n.COUNTRY,
        language: n.LANGUAGE,
        bUsePartnerAPI: !0,
        bIncludeUnpublished: e.bIncludeUnpublished,
      }),
      [e.bIncludeUnpublished],
    );
  return (0, l.createElement)(a, {
    context: r,
    serviceTransportOverride: t.GetServiceTransport(),
    children: e.children,
  });
}
function f() {
  let e = i(`partnerbrowse_webapi_token`, `application_config`);
  return s(new o(n.WEBAPI_BASE_URL, e));
}
function p(t) {
  return c.Initialize(t.GetServiceTransport(), e.is_partner_member);
}
export { d as n, u as t };
