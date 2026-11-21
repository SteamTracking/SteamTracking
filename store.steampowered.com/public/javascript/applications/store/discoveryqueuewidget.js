/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n, st as r, u as i } from "./chunk~01cfc309bf.js";
import "./chunk~9e9562d60b.js";
import { r as a } from "./chunk~cb3200f06e.js";
import {
  $b as o,
  Nc as s,
  Nu as c,
  Td as l,
  _x as u,
  eu as d,
  h as f,
  m as p,
  oS as m,
  p as h,
  rb as g,
  tS as _,
  wb as v,
  yx as y,
} from "./main.js";
import { n as b } from "./chunk~7401689b78.js";
import { t as x } from "./chunk~237be05bcf.js";
import { n as S, t as C } from "./chunk~65d992238f.js";
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
          y.logged_in ? (0, F.jsx)(z, { ...e }) : (0, F.jsx)(V, { ...e }),
        ],
      })
    : null;
}
function L(e) {
  let [t, n] = c(),
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
        i = { ...p, include_screenshots: !0 };
      return (
        await d.Get().QueueMultipleAppRequests(n ?? [], i),
        { rgDiscoveryApps: n, exhausted: r }
      );
    },
    enabled: y.logged_in,
  });
  return [n?.rgDiscoveryApps, n?.exhausted];
}
function z(e) {
  let { eStoreDiscoveryQueueType: t, strQueueDescriptionOverride: n, ...r } = e,
    { showDiscoveryQueue: i, bQueueVisible: a } = f(t, r),
    o = l(),
    [s, c] = R(t, r.storePageFilter),
    u = a || !!o.data?.preferences?.disable_animated_marketing,
    d = w.useCallback(() => {
      !c && i();
    }, [c, i]),
    p = w.useId();
  return (0, F.jsx)(F.Fragment, {
    children: (0, F.jsx)(h, {
      "aria-labelledby": p,
      onClick: d,
      arrDiscoveryApps: s,
      bDisableAnimation: u,
      className: E,
      children: !c && (0, F.jsx)(B, { id: p, strQueueDescriptionOverride: n }),
    }),
  });
}
function B(e) {
  let { strQueueDescriptionOverride: t, id: n } = e,
    r = t ?? g(`#DiscoveryQueue_WidgetHeader`);
  return (0, F.jsxs)(`div`, {
    id: n,
    className: s(T, `WidgetHeaderCtn`),
    children: [
      (0, F.jsx)(`div`, {
        className: D,
        children: g(`#DiscoveryQueue_WidgetHeader_Yours`),
      }),
      (0, F.jsx)(`div`, { className: O, children: r }),
    ],
  });
}
function V(e) {
  let t = H(!0),
    n = w.useCallback(() => {
      window.location.href = `${u.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
    }, []);
  return (0, F.jsx)(h, {
    onClick: n,
    arrDiscoveryApps: t ? _(t) : void 0,
    children: (0, F.jsxs)(`div`, {
      className: s(T, `WidgetHeaderCtn`),
      children: [
        (0, F.jsx)(`div`, {
          className: D,
          children: g(`#DiscoveryQueue_WidgetHeader_Yours`),
        }),
        (0, F.jsx)(`div`, {
          className: O,
          children: g(`#DiscoveryQueue_WidgetHeader_LoggedOut`),
        }),
        (0, F.jsx)(`div`, {
          className: k,
          children: g(`#DiscoveryQueue_Error_Login_Title`),
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
    { ...p, include_screenshots: !0 },
    { reactQuery: { enabled: e, staleTime: 1 / 0 } },
  );
  return (0, w.useMemo)(() => t && t.GetItemIDs().map((e) => e.appid), [t]);
}
function U() {
  let e = a(2, u.LANGUAGE, !0),
    t = o();
  if (!e.data?.definition || (e.data?.reward_items?.length ?? 0) == 0)
    return null;
  let n = e?.data.reward_items ?? [];
  m(n);
  let r = n.slice(0, 3),
    i = null;
  return (
    y.logged_in &&
      !t &&
      (i = (0, F.jsxs)(F.Fragment, {
        children: [
          ` - `,
          (0, F.jsx)(`a`, {
            href: u.COMMUNITY_BASE_URL + `my/itemcollection`,
            children: g(`#DiscoveryQueue_SaleStatus_Link`),
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
              children: g(`#DiscoveryQueue_Widget_SaleDesc`),
            }),
            (0, F.jsxs)(`div`, {
              children: [
                g(
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
      let t = `${u.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_definition.item_image_small}`;
      return (0, F.jsx)(
        `div`,
        { className: M, children: (0, F.jsx)(`img`, { src: t }) },
        e.community_definition.item_name.toString(),
      );
    });
  return (0, F.jsx)(`div`, { className: j, children: _(n) });
}
export { I as t };
