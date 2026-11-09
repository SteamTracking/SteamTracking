/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { r, u as i } from "./carouselarrows.js";
import { n as a, t as o } from "./seemorebutton.js";
import { n as s } from "./bottomrow.js";
import { a as c, t as l } from "./storeitemhooks.js";
import { r as u } from "./storedisplayutils.js";
import {
  Sc as d,
  Uy as f,
  Vl as p,
  bu as m,
  eu as h,
  ka as g,
  kc as _,
  nl as v,
  pl as y,
  zb as b,
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
      appIDs: a,
      sortOrder: o,
      scorePenaltyIfOwned: s,
      capsuleSize: l,
      maxItemCount: f,
      mapAppToCreatorClan: h,
      strFeatureFirstAppMsg: g,
      setNumberVisibleItems: _,
    } = e,
    v = i(910),
    y = b(),
    [x, S] = m(),
    [C, w] = T.useState(a),
    E = c(a, u),
    [O, k] = T.useState(null);
  T.useEffect(() => {
    if (E == 1) return;
    let e = a.filter((e) => !p.Get().BIsStoreItemMissing(e, 0));
    if (g && v && !y && e.length > 0 && e[0] == a[0]) {
      let t = [e[0], P, ...e.slice(1)];
      w(t), k(g), _?.(t.length);
    } else w(e), _?.(e.length);
  }, [a, y, v, E, _, g]);
  let A = y;
  return (0, N.jsx)(r, {
    className: d(n, { SaleSectionCarousel: !0, [D]: !0 }),
    visibleElements: f,
    useTestScrollbar: !0,
    bLazyRenderChildren: !0,
    lazyRenderPlaceholderHeight: F,
    lazyRenderPlaceholderWidth: I,
    gap: 12,
    hideArrows: !1,
    screenIsWide: v,
    navKey: t,
    bForceSimpleCarousel: A,
    children: z(S, C, o ?? `none`, s ?? 3).map((e, t) =>
      (0, N.jsx)(
        R,
        {
          appID: e,
          size: l,
          creatorClanAccountID: h?.get(e),
          strFeaturingMsg: t == 0 && O ? O : void 0,
        },
        e,
      ),
    ),
  });
}
function R(e) {
  let { appID: t, size: n, creatorClanAccountID: r, strFeaturingMsg: i } = e,
    [a] = l(t, 0, u);
  if (t == P)
    return (0, N.jsx)(`div`, { className: d({ [O]: !0, [k]: n == `small` }) });
  if (!a) return (0, N.jsx)(`div`, { className: d(O, j) });
  let o = h(a.GetStoreItemType(), a.GetAppType()),
    c = { id: a.GetID(), type: o },
    p = !!i;
  return (0, N.jsx)(`div`, {
    className: d({ [O]: !0, [A]: p, [k]: n == `small` }),
    children: (0, N.jsx)(s, {
      capsule: c,
      imageType: `header`,
      bHidePlatforms: !0,
      bHideStoreHover: p,
      creatorAccountID: r,
      strDoubleCapsuleMessage: p ? f(i) : void 0,
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
    ? (0, N.jsx)(v, {
        href: t,
        className: d(M, `btnv6_grey_black btn_medium`),
        children: (0, N.jsx)(`span`, { children: f(`#StoreApp_SeeAll`) }),
      })
    : void 0;
}
function V(e) {
  let {
      title: t,
      navKey: n,
      seeAllLink: r,
      appIDs: i,
      sortOrder: s,
      scorePenaltyIfOwned: c,
      capsuleSize: l,
      bFullWidth: u,
    } = e,
    p = b(),
    { bShowSeeMoreHint: m, panelProps: h } = a(r);
  return (0, N.jsx)(_, {
    className: d(S, u && `YmSKmufcDTw-`),
    navEntryPreferPosition: y.PREFERRED_CHILD,
    ...h,
    children: (0, N.jsxs)(g, {
      children: [
        (0, N.jsxs)(`div`, {
          className: x,
          children: [
            (0, N.jsx)(`div`, { className: w, children: t }),
            !p && (0, N.jsx)(B, { url: r }),
            p && (0, N.jsx)(o, { label: f(`#StoreApp_SeeAll`), shown: m }),
          ],
        }),
        (0, N.jsx)(_, {
          preferredFocus: !0,
          children: (0, N.jsx)(L, {
            navKey: n,
            classes: C,
            appIDs: i,
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
