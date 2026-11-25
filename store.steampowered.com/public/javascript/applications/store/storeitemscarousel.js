/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { l as r, n as i, r as a } from "./chunk~4eed35ad1f.js";
import { r as o } from "./chunk~21cdc464a1.js";
import { n as s } from "./chunk~3ea79bd96d.js";
import { r as c } from "./chunk~a243b6a34b.js";
import { a as l, t as u } from "./chunk~a7c5e71e12.js";
import {
  Dl as d,
  Pc as f,
  Pu as p,
  Va as m,
  Vc as h,
  ex as g,
  gl as _,
  ib as v,
  mu as y,
  tu as b,
} from "./main.js";
var x = `OmrgUJdrKyI-`,
  S = `nKsKxQO2ePs-`,
  C = `BRZXitJANxc-`,
  w = `_1LCgJ96WPe4-`,
  T = e(t()),
  E = `168px`,
  D = `_1iA0kFrL4Xs-`,
  O = `miI44Dogivo-`,
  k = `WM9RIZtVCp8-`,
  A = `XVJo-PytpYs-`,
  j = `_0ArQufkbR9k-`,
  M = `T7JPI-q--Xw-`,
  N = n(),
  P = -1,
  F = parseInt(E),
  I = 250;
function L(e) {
  let {
      navKey: t,
      classes: n,
      appIDs: i,
      sortOrder: a,
      scorePenaltyIfOwned: s,
      capsuleSize: u,
      maxItemCount: d,
      mapAppToCreatorClan: m,
      strFeatureFirstAppMsg: h,
      setNumberVisibleItems: _,
    } = e,
    v = r(910),
    y = g(),
    [x, S] = p(),
    [C, w] = T.useState(i),
    E = l(i, c),
    [O, k] = T.useState(null);
  T.useEffect(() => {
    if (E == 1) return;
    let e = i.filter((e) => !b.Get().BIsStoreItemMissing(e, 0));
    if (h && v && !y && e.length > 0 && e[0] == i[0]) {
      let t = [e[0], P, ...e.slice(1)];
      (w(t), k(h), _?.(t.length));
    } else (w(e), _?.(e.length));
  }, [i, y, v, E, _, h]);
  let A = y;
  return (0, N.jsx)(o, {
    className: f(n, { SaleSectionCarousel: !0, [D]: !0 }),
    visibleElements: d,
    useTestScrollbar: !0,
    bLazyRenderChildren: !0,
    lazyRenderPlaceholderHeight: F,
    lazyRenderPlaceholderWidth: I,
    gap: 12,
    hideArrows: !1,
    screenIsWide: v,
    navKey: t,
    bForceSimpleCarousel: A,
    children: z(S, C, a ?? `none`, s ?? 3).map((e, t) =>
      (0, N.jsx)(
        R,
        {
          appID: e,
          size: u,
          creatorClanAccountID: m?.get(e),
          strFeaturingMsg: t == 0 && O ? O : void 0,
        },
        e,
      ),
    ),
  });
}
function R(e) {
  let { appID: t, size: n, creatorClanAccountID: r, strFeaturingMsg: i } = e,
    [a] = u(t, 0, c);
  if (t == P)
    return (0, N.jsx)(`div`, { className: f({ [O]: !0, [k]: n == `small` }) });
  if (!a) return (0, N.jsx)(`div`, { className: f(O, j) });
  let o = y(a.GetStoreItemType(), a.GetAppType()),
    l = { id: a.GetID(), type: o },
    d = !!i;
  return (0, N.jsx)(`div`, {
    className: f({ [O]: !0, [A]: d, [k]: n == `small` }),
    children: (0, N.jsx)(s, {
      capsule: l,
      imageType: `header`,
      bHidePlatforms: !0,
      bHideStoreHover: d,
      creatorAccountID: r,
      strDoubleCapsuleMessage: d ? v(i) : void 0,
      bPreferAssetWithoutOverride: !1,
    }),
  });
}
function z(e, t, n, r) {
  let i = T.useMemo(() => t.filter((t) => !e.BIsGameIgnored(t)), [t, e]),
    a = T.useMemo(
      () => Array.from({ length: i.length }, () => Math.random()),
      [i.length],
    );
  return n == `shuffle`
    ? i
        .map((t, n) => ({
          id: t,
          score:
            (e.BIsGameOwned(t) ? r : 0) +
            (Math.sqrt(n) + 2) * a[n] +
            Math.sqrt(n),
        }))
        .sort((e, t) => e.score - t.score)
        .map((e) => e.id)
    : n == `scored`
      ? i
          .map((t, n) => ({ id: t, score: e.BIsGameOwned(t) ? r + n : n }))
          .sort((e, t) => e.score - t.score)
          .map((e) => e.id)
      : i;
}
function B(e) {
  let { url: t } = e;
  return t
    ? (0, N.jsx)(_, {
        href: t,
        className: f(M, `btnv6_grey_black btn_medium`),
        children: (0, N.jsx)(`span`, { children: v(`#StoreApp_SeeAll`) }),
      })
    : void 0;
}
function V(e) {
  let {
      title: t,
      navKey: n,
      seeAllLink: r,
      appIDs: o,
      sortOrder: s,
      scorePenaltyIfOwned: c,
      capsuleSize: l,
      bFullWidth: u,
    } = e,
    p = g(),
    { bShowSeeMoreHint: _, panelProps: y } = a(r);
  return (0, N.jsx)(h, {
    className: f(S, u && `YmSKmufcDTw-`),
    navEntryPreferPosition: d.PREFERRED_CHILD,
    ...y,
    children: (0, N.jsxs)(m, {
      children: [
        (0, N.jsxs)(`div`, {
          className: x,
          children: [
            (0, N.jsx)(`div`, { className: w, children: t }),
            !p && (0, N.jsx)(B, { url: r }),
            p && (0, N.jsx)(i, { label: v(`#StoreApp_SeeAll`), shown: _ }),
          ],
        }),
        (0, N.jsx)(h, {
          preferredFocus: !0,
          children: (0, N.jsx)(L, {
            navKey: n,
            classes: C,
            appIDs: o,
            maxItemCount: 4,
            sortOrder: s,
            scorePenaltyIfOwned: c,
            capsuleSize: l,
          }),
        }),
      ],
    }),
  });
}
export { V as default, B as n, L as t };
