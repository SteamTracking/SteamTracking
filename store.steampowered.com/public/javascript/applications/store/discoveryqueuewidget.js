/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, st as r, u as i } from "./libraries.js";
import "./steammessages_salerewards_pb.js";
import { r as a } from "./saleclaim.js";
import {
  Kx as o,
  Sc as s,
  Uy as c,
  Vl as l,
  Vx as u,
  ax as d,
  bu as f,
  dd as p,
  h as m,
  m as h,
  p as g,
  rx as _,
  ub as v,
  zb as y,
} from "./main.js";
import { n as b } from "./discoveryqueuestore.js";
import { t as x } from "./preloaddiscoveryqueue.js";
import { n as S, t as C } from "./storequery.js";
var w = e(t()),
  T = `dycaOmod9zw-`,
  E = `mzAzU7-I6qg-`,
  D = `bKJhafR0h9g-`,
  O = `MFeNsPbs3Hc-`,
  k = `rmgCh57vTjU-`,
  A = `iM2I4-tfnLE-`,
  j = `j49Ux5WEHH8-`,
  M = `KDX5pz7nAYo-`,
  N = `T7waTVmQ-5w-`,
  P = `d7Oav574vtg-`,
  F = n();
function I(e) {
  return x()
    ? (0, F.jsxs)(L, {
        children: [
          (0, F.jsx)(U, {}),
          d.logged_in ? (0, F.jsx)(z, { ...e }) : (0, F.jsx)(V, { ...e }),
        ],
      })
    : null;
}
function L(e) {
  let [t, n] = f(),
    r = i(() => n.ExcludedContentDescriptor),
    a = w.useMemo(() => ({ content_descriptors_excluded: r }), [r]);
  return t ? null : (0, F.jsx)(C, { defaultOptions: a, children: e.children });
}
function R(e, t) {
  let { data: n } = r({
    queryKey: [`DiscoveryQueueLoader`, e, t],
    queryFn: async () => {
      let { appids: n, exhausted: r } = await b
          .Get()
          .GetDiscoveryQueueAppsOfType(e, !1, t),
        i = { ...h, include_screenshots: !0 };
      return (
        await l.Get().QueueMultipleAppRequests(n ?? [], i),
        { rgDiscoveryApps: n, exhausted: r }
      );
    },
    enabled: d.logged_in,
  });
  return [n?.rgDiscoveryApps, n?.exhausted];
}
function z(e) {
  let { eStoreDiscoveryQueueType: t, strQueueDescriptionOverride: n, ...r } = e,
    { showDiscoveryQueue: i, bQueueVisible: a } = m(t, r),
    o = p(),
    [s, c] = R(t, r.storePageFilter),
    l = a || !!o.data?.preferences?.disable_animated_marketing,
    u = w.useCallback(() => {
      !c && i();
    }, [c, i]),
    d = w.useId();
  return (0, F.jsx)(F.Fragment, {
    children: (0, F.jsx)(g, {
      "aria-labelledby": d,
      onClick: u,
      arrDiscoveryApps: s,
      bDisableAnimation: l,
      className: E,
      children: !c && (0, F.jsx)(B, { id: d, strQueueDescriptionOverride: n }),
    }),
  });
}
function B(e) {
  let { strQueueDescriptionOverride: t, id: n } = e,
    r = t ?? c(`#DiscoveryQueue_WidgetHeader`);
  return (0, F.jsxs)(`div`, {
    id: n,
    className: s(T, `WidgetHeaderCtn`),
    children: [
      (0, F.jsx)(`div`, {
        className: D,
        children: c(`#DiscoveryQueue_WidgetHeader_Yours`),
      }),
      (0, F.jsx)(`div`, { className: O, children: r }),
    ],
  });
}
function V(e) {
  let t = H(!0),
    n = w.useCallback(() => {
      window.location.href = `${_.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
    }, []);
  return (0, F.jsx)(g, {
    onClick: n,
    arrDiscoveryApps: t ? u(t) : void 0,
    children: (0, F.jsxs)(`div`, {
      className: s(T, `WidgetHeaderCtn`),
      children: [
        (0, F.jsx)(`div`, {
          className: D,
          children: c(`#DiscoveryQueue_WidgetHeader_Yours`),
        }),
        (0, F.jsx)(`div`, {
          className: O,
          children: c(`#DiscoveryQueue_WidgetHeader_LoggedOut`),
        }),
        (0, F.jsx)(`div`, {
          className: k,
          children: c(`#DiscoveryQueue_Error_Login_Title`),
        }),
      ],
    }),
  });
}
function H(e) {
  let { data: t } = S(
    `DiscoveryQueueWidget`,
    {
      sort: 11,
      start: 0,
      count: 12,
      filters: { type_filters: { include_games: !0 } },
    },
    { ...h, include_screenshots: !0 },
    { reactQuery: { enabled: e, staleTime: 1 / 0 } },
  );
  return (0, w.useMemo)(() => t && t.GetItemIDs().map((e) => e.appid), [t]);
}
function U() {
  let e = a(2, _.LANGUAGE, !0),
    t = y();
  if (!e.data?.definition || (e.data?.reward_items?.length ?? 0) == 0)
    return null;
  let n = e?.data.reward_items ?? [];
  o(n);
  let r = n.slice(0, 3),
    i = null;
  return (
    d.logged_in &&
      !t &&
      (i = (0, F.jsxs)(F.Fragment, {
        children: [
          ` - `,
          (0, F.jsx)(`a`, {
            href: _.COMMUNITY_BASE_URL + `my/itemcollection`,
            children: c(`#DiscoveryQueue_SaleStatus_Link`),
          }),
        ],
      })),
    (0, F.jsxs)(`div`, {
      className: A,
      children: [
        (0, F.jsx)(W, { rgRewardItems: r }),
        (0, F.jsxs)(`div`, {
          className: N,
          children: [
            (0, F.jsx)(`div`, {
              className: P,
              children: c(`#DiscoveryQueue_Widget_SaleDesc`),
            }),
            (0, F.jsxs)(`div`, {
              children: [
                c(
                  `#DiscoveryQueue_Widget_SaleTitle`,
                  v(e.data.definition.rtime_end_time ?? 0, !1, !1, !1, !1),
                ),
                i,
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function W(e) {
  let { rgRewardItems: t } = e,
    n = t.map((e) => {
      if (!e.community_definition || !e.community_definition.item_name)
        return null;
      let t = `${_.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_definition.item_image_small}`;
      return (0, F.jsx)(
        `div`,
        { className: M, children: (0, F.jsx)(`img`, { src: t }) },
        e.community_definition.item_name.toString(),
      );
    });
  return (0, F.jsx)(`div`, { className: j, children: u(n) });
}
export { I as t };
