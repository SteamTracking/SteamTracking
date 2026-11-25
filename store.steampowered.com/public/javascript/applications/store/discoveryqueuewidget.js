/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, l as r, ot as i } from "./chunk~01cfc309bf.js";
import "./chunk~9e9562d60b.js";
import { r as a } from "./chunk~cb3200f06e.js";
import {
  Ed as o,
  Pc as s,
  Pu as c,
  Tb as l,
  bx as u,
  cS as d,
  ex as f,
  h as p,
  ib as m,
  m as h,
  p as g,
  rS as _,
  tu as v,
  vx as y,
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
          u.logged_in ? (0, F.jsx)(z, { ...e }) : (0, F.jsx)(V, { ...e }),
        ],
      })
    : null;
}
function L(e) {
  let [t, n] = c(),
    i = r(() => n.ExcludedContentDescriptor),
    a = w.useMemo(() => ({ content_descriptors_excluded: i }), [i]);
  return t ? null : (0, F.jsx)(C, { defaultOptions: a, children: e.children });
}
function R(e, t) {
  let { data: n } = i({
    queryKey: [`DiscoveryQueueLoader`, e, t],
    queryFn: async () => {
      let { appids: n, exhausted: r } = await b
          .Get()
          .GetDiscoveryQueueAppsOfType(e, !1, t),
        i = { ...h, include_screenshots: !0 };
      return (
        await v.Get().QueueMultipleAppRequests(n ?? [], i),
        { rgDiscoveryApps: n, exhausted: r }
      );
    },
    enabled: u.logged_in,
  });
  return [n?.rgDiscoveryApps, n?.exhausted];
}
function z(e) {
  let { eStoreDiscoveryQueueType: t, strQueueDescriptionOverride: n, ...r } = e,
    { showDiscoveryQueue: i, bQueueVisible: a } = p(t, r),
    s = o(),
    [c, l] = R(t, r.storePageFilter),
    u = a || !!s.data?.preferences?.disable_animated_marketing,
    d = w.useCallback(() => {
      !l && i();
    }, [l, i]),
    f = w.useId();
  return (0, F.jsx)(F.Fragment, {
    children: (0, F.jsx)(g, {
      "aria-labelledby": f,
      onClick: d,
      arrDiscoveryApps: c,
      bDisableAnimation: u,
      className: E,
      children: !l && (0, F.jsx)(B, { id: f, strQueueDescriptionOverride: n }),
    }),
  });
}
function B(e) {
  let { strQueueDescriptionOverride: t, id: n } = e,
    r = t ?? m(`#DiscoveryQueue_WidgetHeader`);
  return (0, F.jsxs)(`div`, {
    id: n,
    className: s(T, `WidgetHeaderCtn`),
    children: [
      (0, F.jsx)(`div`, {
        className: D,
        children: m(`#DiscoveryQueue_WidgetHeader_Yours`),
      }),
      (0, F.jsx)(`div`, { className: O, children: r }),
    ],
  });
}
function V(e) {
  let t = H(!0),
    n = w.useCallback(() => {
      window.location.href = `${y.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
    }, []);
  return (0, F.jsx)(g, {
    onClick: n,
    arrDiscoveryApps: t ? _(t) : void 0,
    children: (0, F.jsxs)(`div`, {
      className: s(T, `WidgetHeaderCtn`),
      children: [
        (0, F.jsx)(`div`, {
          className: D,
          children: m(`#DiscoveryQueue_WidgetHeader_Yours`),
        }),
        (0, F.jsx)(`div`, {
          className: O,
          children: m(`#DiscoveryQueue_WidgetHeader_LoggedOut`),
        }),
        (0, F.jsx)(`div`, {
          className: k,
          children: m(`#DiscoveryQueue_Error_Login_Title`),
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
  let e = a(2, y.LANGUAGE, !0),
    t = f();
  if (!e.data?.definition || (e.data?.reward_items?.length ?? 0) == 0)
    return null;
  let n = e?.data.reward_items ?? [];
  d(n);
  let r = n.slice(0, 3),
    i = null;
  return (
    u.logged_in &&
      !t &&
      (i = (0, F.jsxs)(F.Fragment, {
        children: [
          ` - `,
          (0, F.jsx)(`a`, {
            href: y.COMMUNITY_BASE_URL + `my/itemcollection`,
            children: m(`#DiscoveryQueue_SaleStatus_Link`),
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
              children: m(`#DiscoveryQueue_Widget_SaleDesc`),
            }),
            (0, F.jsxs)(`div`, {
              children: [
                m(
                  `#DiscoveryQueue_Widget_SaleTitle`,
                  l(e.data.definition.rtime_end_time ?? 0, !1, !1, !1, !1),
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
      let t = `${y.MEDIA_CDN_COMMUNITY_URL}images/items/${e.appid}/${e.community_definition.item_image_small}`;
      return (0, F.jsx)(
        `div`,
        { className: M, children: (0, F.jsx)(`img`, { src: t }) },
        e.community_definition.item_name.toString(),
      );
    });
  return (0, F.jsx)(`div`, { className: j, children: _(n) });
}
export { I as t };
