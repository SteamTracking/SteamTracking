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
  Aa as d,
  Ac as f,
  Bb as p,
  Cc as m,
  Hl as h,
  Wy as g,
  ml as _,
  rl as v,
  tu as y,
  xu as b,
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
      maxItemCount: d,
      mapAppToCreatorClan: f,
      strFeatureFirstAppMsg: g,
      setNumberVisibleItems: _,
    } = e,
    v = i(910),
    y = p(),
    [x, S] = b(),
    [C, w] = T.useState(a),
    E = c(a, u),
    [O, k] = T.useState(null);
  T.useEffect(() => {
    if (E == 1) return;
    let e = a.filter((e) => !h.Get().BIsStoreItemMissing(e, 0));
    if (g && v && !y && e.length > 0 && e[0] == a[0]) {
      let t = [e[0], P, ...e.slice(1)];
      (w(t), k(g), _?.(t.length));
    } else (w(e), _?.(e.length));
  }, [a, y, v, E, _, g]);
  let A = y;
  return (0, N.jsx)(r, {
    className: m(n, { SaleSectionCarousel: !0, [D]: !0 }),
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
    children: z(S, C, o ?? `none`, s ?? 3).map((e, t) =>
      (0, N.jsx)(
        R,
        {
          appID: e,
          size: l,
          creatorClanAccountID: f?.get(e),
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
    return (0, N.jsx)(`div`, { className: m({ [O]: !0, [k]: n == `small` }) });
  if (!a) return (0, N.jsx)(`div`, { className: m(O, j) });
  let o = y(a.GetStoreItemType(), a.GetAppType()),
    c = { id: a.GetID(), type: o },
    d = !!i;
  return (0, N.jsx)(`div`, {
    className: m({ [O]: !0, [A]: d, [k]: n == `small` }),
    children: (0, N.jsx)(s, {
      capsule: c,
      imageType: `header`,
      bHidePlatforms: !0,
      bHideStoreHover: d,
      creatorAccountID: r,
      strDoubleCapsuleMessage: d ? g(i) : void 0,
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
        className: m(M, `btnv6_grey_black btn_medium`),
        children: (0, N.jsx)(`span`, { children: g(`#StoreApp_SeeAll`) }),
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
    h = p(),
    { bShowSeeMoreHint: v, panelProps: y } = a(r);
  return (0, N.jsx)(f, {
    className: m(S, u && `YmSKmufcDTw-`),
    navEntryPreferPosition: _.PREFERRED_CHILD,
    ...y,
    children: (0, N.jsxs)(d, {
      children: [
        (0, N.jsxs)(`div`, {
          className: x,
          children: [
            (0, N.jsx)(`div`, { className: w, children: t }),
            !h && (0, N.jsx)(B, { url: r }),
            h && (0, N.jsx)(o, { label: g(`#StoreApp_SeeAll`), shown: v }),
          ],
        }),
        (0, N.jsx)(f, {
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
