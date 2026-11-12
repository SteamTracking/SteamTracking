/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  At as e,
  Q as t,
  it as n,
  rt as r,
  sn as i,
} from "./chunk~de7f2df91c.js";
import { t as a } from "./chunk~0a99e05c44.js";
import { r as o, t as s } from "./chunk~70c16cc80c.js";
import { t as c } from "./chunk~3ee5188744.js";
var l = i(e());
function u(e) {
  let [t, n] = (0, l.useState)(!1),
    [i] = (0, l.useState)(() => f()),
    o = (0, l.useMemo)(
      () => ({ country: r.COUNTRY, language: r.LANGUAGE, bUsePartnerAPI: !0 }),
      [],
    );
  return (
    (0, l.useEffect)(() => (n(!0), p(i)), [i]),
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
    n = (0, l.useMemo)(
      () => ({
        country: r.COUNTRY,
        language: r.LANGUAGE,
        bUsePartnerAPI: !0,
        bIncludeUnpublished: e.bIncludeUnpublished,
      }),
      [e.bIncludeUnpublished],
    );
  return (0, l.createElement)(a, {
    context: n,
    serviceTransportOverride: t.GetServiceTransport(),
    children: e.children,
  });
}
function f() {
  let e = t(`partnerbrowse_webapi_token`, `application_config`);
  return s(new o(r.WEBAPI_BASE_URL, e));
}
function p(e) {
  return c.Initialize(e.GetServiceTransport(), n.is_partner_member);
}
export { d as n, u as t };
