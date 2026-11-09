/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Z as e, kt as t, nt as n, on as r, rt as i } from "./mobx.esm.js";
import { t as a } from "./storebrowsequerycontext.js";
import { r as o, t as s } from "./browserapi.js";
import { t as c } from "./storeitemcache.js";
var l = r(t());
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
  let t = e(`partnerbrowse_webapi_token`, `application_config`);
  return s(new o(n.WEBAPI_BASE_URL, t));
}
function p(e) {
  return c.Initialize(e.GetServiceTransport(), i.is_partner_member);
}
export { d as n, u as t };
