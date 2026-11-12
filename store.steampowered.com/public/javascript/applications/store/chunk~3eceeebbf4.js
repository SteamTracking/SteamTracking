/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { t as r } from "./chunk~cd94ddba57.js";
import { a as i } from "./chunk~d43c81a658.js";
import { r as a } from "./chunk~21cdc464a1.js";
import { n as o } from "./chunk~710e3cfd2f.js";
import { n as s, t as c } from "./chunk~ffe4581a06.js";
import { t as l } from "./chunk~4d16ce5d1a.js";
import {
  El as u,
  Fy as d,
  Ic as f,
  Jt as p,
  Ku as m,
  Qi as h,
  Uu as g,
  Wb as _,
  Xb as v,
  Zt as y,
  _l as b,
  b as x,
  cx as S,
  ea as C,
  gd as w,
  jc as T,
  kc as E,
  kv as D,
  ol as O,
  qb as k,
  wc as A,
} from "./main.js";
import { n as j, r as M } from "./chunk~06708cbb41.js";
import { t as N } from "./chunk~4d6f892b8c.js";
var P = e(t(), 1),
  F = `nHdn-Ea4zSg-`,
  I = `_37RLKwjtCwE-`,
  L = `U-HkHHn6qDk-`,
  R = `IdjQXo6E9yc-`,
  z = `sGDLZ2AYREY-`,
  B = `maxz19gKOQc-`,
  V = `CAnATFwmik4-`,
  H = `N83ri6QShHM-`,
  U = `-UQT03dsikU-`,
  W = `e217oOT2n-w-`,
  G = `ojxRGZ9ipx0-`,
  K = `DgabeNaTSbY-`,
  q = `_1P6OIcWhV5A-`,
  J = n(),
  Y = {
    name: `personalcalendarPrefs`,
    options: { path: `/personalcalendar`, secure: !0, maxAge: 31536e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function X(e) {
  let { bShowNewBadge: t, bHasFooterActionLegend: n, onSeeMore: r } = e,
    o = d(Y),
    l = o ? JSON.parse(o) : void 0,
    u = i(940),
    h = m(),
    g = p(),
    v = _(),
    y = new Date().getDay(),
    S = 13 + y,
    C = 22 - y,
    w = M(0, S, C),
    E = j(S, C, !0, !0).flat(),
    D = f(`${k.STORE_BASE_URL}personalcalendar`, h, g),
    { bShowSeeMoreHint: O, panelProps: A } = s(D),
    N = x.Localize(`#PersonalCalendar_Explore`),
    B = P.useCallback(() => r?.(D), [r, D]);
  if (!w.data) return (0, J.jsx)(T, { className: F });
  let V = w.data.arrAppInfos;
  return (
    l &&
      ((V = V.filter((e) => !l.bHideOwned || !e.bIsOwned)),
      (V = V.filter((e) => !l.bHideEarlyAccess || !e.bIsEarlyAccess)),
      (V = V.filter((e) => {
        switch (l.eWishlistDisplay) {
          case 0:
            return !0;
          case 1:
            return e.bIsWishlisted;
          case 2:
            return !e.bIsWishlisted;
          default:
            return !0;
        }
      }))),
    (0, J.jsxs)(T, {
      className: F,
      navEntryPreferPosition: b.PREFERRED_CHILD,
      ...A,
      onOptionsButton: r ? B : A.onOptionsButton,
      onOptionsActionDescription: N,
      children: [
        (0, J.jsxs)(`div`, {
          className: I,
          children: [
            (0, J.jsxs)(`div`, {
              className: L,
              children: [
                (0, J.jsxs)(`div`, {
                  className: R,
                  children: [
                    t &&
                      (0, J.jsx)(`span`, {
                        className: `x8jWPgfdVoI-`,
                        children: x.Localize(`#NewBadge`),
                      }),
                    x.Localize(`#PersonalCalendar_Title`),
                  ],
                }),
                (0, J.jsx)(`div`, {
                  className: z,
                  children: x.Localize(`#PersonalCalendar_Subtitle`),
                }),
              ],
            }),
            !v && (0, J.jsx)(Z, { calendarURL: D, location: `desktop` }),
            v && !n && (0, J.jsx)(c, { label: N, shown: O }),
          ],
        }),
        (0, J.jsx)(a, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: v,
          screenIsWide: u,
          startingSlide: 10,
          className: v ? void 0 : `fiveElementEightGap`,
          children: E.map((e, t) =>
            (0, J.jsx)(
              Q,
              {
                bInitialFocus: t === 10,
                nTimestamp: e,
                nNextTimestamp: t < E.length - 1 ? E[t + 1] : e + 86400,
                arrAppInfos: V,
                nRankThreshold: l?.nResultsToShow ?? 100,
              },
              e,
            ),
          ),
        }),
        !v && (0, J.jsx)(Z, { calendarURL: D, location: `mobile` }),
      ],
    })
  );
}
function Z(e) {
  let { calendarURL: t, location: n } = e;
  return (0, J.jsx)(`div`, {
    className: `see_more_link ${n == `mobile` ? `see_more_mobile` : `see_more_desktop`} home_section_button`,
    children: (0, J.jsx)(`a`, {
      href: t,
      className: `btn_small btn_medium btnv6_white_transparent`,
      children: (0, J.jsx)(`span`, {
        children: x.Localize(`#PersonalCalendar_Explore`),
      }),
    }),
  });
}
function Q(e) {
  let {
      nTimestamp: t,
      nNextTimestamp: n,
      bInitialFocus: r,
      arrAppInfos: i,
      nRankThreshold: a,
    } = e,
    o = m(),
    s = p(),
    c = f(`${k.STORE_BASE_URL}personalcalendar`, o, s),
    l = { weekday: `short` },
    u = { day: `numeric`, month: `numeric` },
    d = new Date(t * 1e3),
    g = new Date(),
    v =
      d.getDate() === g.getDate() &&
      d.getMonth() === g.getMonth() &&
      d.getFullYear() === g.getFullYear(),
    y = d > g,
    S = d.toLocaleDateString(h(), l),
    w = d.toLocaleString(h(), u),
    E = i
      .filter((e) => e.nReleaseDate > t && e.nReleaseDate < n)
      .sort((e, t) =>
        e.bIsWishlisted && !t.bIsWishlisted
          ? -1
          : t.bIsWishlisted && !e.bIsWishlisted
            ? 1
            : e.nRank - t.nRank,
      ),
    D = a ?? 100,
    j = E.filter((e) => e.nRank <= D).length - 2,
    M = E.length == 0,
    [N, F] = P.useState(!1),
    I = _(),
    L = P.useRef(null);
  return (
    P.useEffect(() => {
      if (r && I && L.current) {
        let e = L.current.closest(`.carousel__slide`),
          t = L.current.closest(`.carousel__slider-tray-wrapper`);
        t && e && (t.scrollLeft = e.offsetLeft);
      }
    }, [r, I]),
    (0, J.jsxs)(T, {
      className: A(B, v && `_8XPG-IbvHHs-`, y && `N3v3VnhKgU8-`, M && void 0),
      "flow-children": `column`,
      children: [
        (0, J.jsxs)(`div`, {
          className: V,
          children: [
            !v && (0, J.jsx)(`div`, { className: `FeN6na6SvAg-`, children: S }),
            !v && (0, J.jsx)(`div`, { className: `bLQQ-syFWHg-`, children: w }),
            v &&
              (0, J.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: x.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, J.jsx)(T, {
          className: H,
          "flow-children": `column`,
          navEntryPreferPosition: b.MAINTAIN_Y,
          preferredFocus: r && !N,
          ref: L,
          onFocusWithin: () => F(!0),
          children: (0, J.jsxs)(J.Fragment, {
            children: [
              E.slice(0, 2).map((e) =>
                (0, J.jsx)($, { nAppID: e.nAppID }, e.nAppID),
              ),
              M &&
                (0, J.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: C(
                    x.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, J.jsx)(`a`, { href: c }),
                  ),
                }),
            ],
          }),
        }),
        !I &&
          j > 0 &&
          (0, J.jsx)(O, {
            href: c,
            className: `rsPEubiF9HI-`,
            children: x.Localize(`#PersonalCalendar_More`, j),
          }),
      ],
    })
  );
}
function $(e) {
  let t = D({ appid: e.nAppID }),
    n = i(940),
    a = _(),
    [o, s] = P.useState(!1),
    [c, u] = P.useState(!1),
    d = P.useRef(null),
    f = t.data === null ? void 0 : t.data,
    p = N(f, n || a ? `main_capsule` : `hero_capsule`),
    { data: m } = w(),
    h = m?.preferences?.disable_microtrailers,
    v = o || c;
  return (
    P.useEffect(() => {
      if (
        (d.current &&
          d.current.setAttribute(`data-ds-appid`, e.nAppID.toString() ?? ``),
        window.GDynamicStore && window.$J)
      ) {
        let e = window.$J(d.current);
        window.GDynamicStore.DecorateDynamicItems(e);
      }
    }, [e.nAppID, d]),
    (0, J.jsx)(g, {
      feature: `personalcalendar-homepage`,
      children: (0, J.jsx)(T, {
        onGamepadFocus: () => u(!0),
        onGamepadBlur: () => u(!1),
        children: (0, J.jsx)(l, {
          id: { appid: e.nAppID },
          hoverClassName: U,
          disableScreenshots: !0,
          children: (0, J.jsx)(y, {
            appID: e.nAppID,
            children: (0, J.jsxs)(T, {
              ref: d,
              className: A(W, o && `T5zU104tmR0-`),
              onMouseOver: () => s(!0),
              onMouseOut: () => s(!1),
              children: [
                (0, J.jsx)(`img`, { className: G, src: p, alt: `` }),
                h &&
                  v &&
                  (0, J.jsx)(ee, { id: { appid: e.nAppID }, nIntervalMS: 1e3 }),
                !h &&
                  (0, J.jsx)(r, {
                    id: { appid: e.nAppID },
                    active: v,
                    bIsHoverMode: !0,
                  }),
              ],
            }),
          }),
        }),
      }),
    })
  );
}
function ee(e) {
  let t = E(e.id) ?? [],
    [n, r] = P.useState(0);
  return (
    u(() => {
      t.length > 0 && r((n + 1) % t.length);
    }, e.nIntervalMS),
    !t?.length || n == -1
      ? null
      : (0, J.jsx)(`div`, {
          className: K,
          children: t.map((e, t) =>
            (0, J.jsx)(
              `img`,
              {
                className: A(q, t == n && `B638L5YAOi8-`),
                src: S.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename,
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function te(e) {
  return v.logged_in
    ? (0, J.jsx)(o, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, J.jsx)(X, { ...e }),
      })
    : null;
}
export { te as default };
