/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, ft as n } from "./chunk~01cfc309bf.js";
import { l as r, m as i, n as a, r as o } from "./chunk~4eed35ad1f.js";
import { r as s } from "./chunk~21cdc464a1.js";
import { n as c } from "./chunk~710e3cfd2f.js";
import { t as l } from "./chunk~4d16ce5d1a.js";
import {
  $b as u,
  Bc as d,
  El as f,
  Fl as p,
  Gc as m,
  Nc as h,
  Qu as g,
  Rc as _,
  Rv as v,
  Td as y,
  Wy as b,
  Zt as x,
  _x as S,
  ax as C,
  b as w,
  en as T,
  hl as E,
  id as D,
  la as O,
  nx as k,
  sa as A,
  td as j,
  u as M,
} from "./main.js";
import { t as N } from "./chunk~6417efccc1.js";
import { n as P, r as F } from "./chunk~06708cbb41.js";
import { t as I } from "./chunk~4d6f892b8c.js";
var L = e(t(), 1),
  R = `nHdn-Ea4zSg-`,
  z = `_37RLKwjtCwE-`,
  B = `U-HkHHn6qDk-`,
  V = `IdjQXo6E9yc-`,
  H = `sGDLZ2AYREY-`,
  U = `maxz19gKOQc-`,
  W = `CAnATFwmik4-`,
  G = `N83ri6QShHM-`,
  K = `yD3gdO7T1NY-`,
  q = `-UQT03dsikU-`,
  J = `e217oOT2n-w-`,
  Y = `ojxRGZ9ipx0-`,
  X = `DgabeNaTSbY-`,
  ee = `_1P6OIcWhV5A-`,
  Z = n(),
  te = {
    name: `personalcalendarPrefs`,
    options: { path: `/personalcalendar`, secure: !0, maxAge: 31536e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function ne(e) {
  let { bShowNewBadge: t, bHasFooterActionLegend: n, onSeeMore: i } = e,
    c = b(te),
    l = c ? JSON.parse(c) : void 0,
    p = r(940),
    h = j(),
    g = x(),
    _ = u(),
    v = new Date().getDay(),
    y = 13 + v,
    S = 22 - v,
    C = F(0, y, S),
    T = P(y, S, !0, !0).flat(),
    E = m(`${k.STORE_BASE_URL}personalcalendar`, h, g),
    { bShowSeeMoreHint: D, panelProps: O } = o(E),
    A = w.Localize(`#PersonalCalendar_Explore`),
    M = L.useCallback(() => i?.(E), [i, E]);
  if (!C.data) return (0, Z.jsx)(d, { className: R });
  let N = C.data.arrAppInfos;
  return (
    l &&
      ((N = N.filter((e) => !l.bHideOwned || !e.bIsOwned)),
      (N = N.filter((e) => !l.bHideEarlyAccess || !e.bIsEarlyAccess)),
      (N = N.filter((e) => {
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
    (0, Z.jsxs)(d, {
      className: R,
      navEntryPreferPosition: f.PREFERRED_CHILD,
      ...O,
      onOptionsButton: i ? M : O.onOptionsButton,
      onOptionsActionDescription: A,
      children: [
        (0, Z.jsxs)(`div`, {
          className: z,
          children: [
            (0, Z.jsxs)(`div`, {
              className: B,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: V,
                  children: [
                    t &&
                      (0, Z.jsx)(`span`, {
                        className: `x8jWPgfdVoI-`,
                        children: w.Localize(`#NewBadge`),
                      }),
                    w.Localize(`#PersonalCalendar_Title`),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: H,
                  children: w.Localize(`#PersonalCalendar_Subtitle`),
                }),
              ],
            }),
            !_ && (0, Z.jsx)(Q, { calendarURL: E, location: `desktop` }),
            _ && !n && (0, Z.jsx)(a, { label: A, shown: D }),
          ],
        }),
        (0, Z.jsx)(s, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: _,
          screenIsWide: p,
          startingSlide: 10,
          className: _ ? void 0 : `fiveElementEightGap`,
          children: T.map((e, t) =>
            (0, Z.jsx)(
              ie,
              {
                bInitialFocus: t === 10,
                nTimestamp: e,
                arrAppInfos: N,
                nRankThreshold: l?.nResultsToShow ?? 100,
              },
              e,
            ),
          ),
        }),
        !_ && (0, Z.jsx)(Q, { calendarURL: E, location: `mobile` }),
      ],
    })
  );
}
function Q(e) {
  let { calendarURL: t, location: n } = e;
  return (0, Z.jsx)(`div`, {
    className: `see_more_link ${n == `mobile` ? `see_more_mobile` : `see_more_desktop`} home_section_button`,
    children: (0, Z.jsx)(`a`, {
      href: t,
      className: `btn_small btn_medium btnv6_white_transparent`,
      children: (0, Z.jsx)(`span`, {
        children: w.Localize(`#PersonalCalendar_Explore`),
      }),
    }),
  });
}
function re(e) {
  let t = new Date(e * 1e3);
  t.getDay() == 1 && t.setDate(t.getDate() - 2);
  let n = new Date(e * 1e3);
  return (
    n.setDate(n.getDate() + 1),
    [Math.floor(t.getTime() / 1e3), Math.floor(n.getTime() / 1e3)]
  );
}
function ie(e) {
  let {
      nTimestamp: t,
      bInitialFocus: n,
      arrAppInfos: r,
      nRankThreshold: i,
    } = e,
    a = j(),
    o = x(),
    s = m(`${k.STORE_BASE_URL}personalcalendar`, a, o),
    c = { weekday: `short` },
    l = { day: `numeric`, month: `numeric` },
    p = new Date(t * 1e3),
    g = new Date(),
    _ =
      p.getDate() === g.getDate() &&
      p.getMonth() === g.getMonth() &&
      p.getFullYear() === g.getFullYear(),
    v = p > g,
    y = p.toLocaleDateString(A(), c),
    b = p.toLocaleString(A(), l),
    [S, C] = re(t),
    T = r
      .filter((e) => e.nReleaseDate >= S && e.nReleaseDate < C)
      .sort((e, t) =>
        e.bIsWishlisted && !t.bIsWishlisted
          ? -1
          : t.bIsWishlisted && !e.bIsWishlisted
            ? 1
            : e.nRank - t.nRank,
      ),
    D = i ?? 100,
    M = T.filter((e) => e.nRank <= D).length - 2,
    N = T.length == 0,
    [P, F] = L.useState(!1),
    I = u(),
    R = L.useRef(null);
  return (
    L.useEffect(() => {
      if (n && I && R.current) {
        let e = R.current.closest(`.carousel__slide`),
          t = R.current.closest(`.carousel__slider-tray-wrapper`);
        t && e && (t.scrollLeft = e.offsetLeft);
      }
    }, [n, I]),
    (0, Z.jsxs)(d, {
      className: h(U, _ && `_8XPG-IbvHHs-`, v && `N3v3VnhKgU8-`, N && void 0),
      "flow-children": `column`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: W,
          children: [
            !_ && (0, Z.jsx)(`div`, { className: `FeN6na6SvAg-`, children: y }),
            !_ && (0, Z.jsx)(`div`, { className: `bLQQ-syFWHg-`, children: b }),
            _ &&
              (0, Z.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: w.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, Z.jsx)(d, {
          className: G,
          "flow-children": `column`,
          navEntryPreferPosition: f.MAINTAIN_Y,
          preferredFocus: n && !P,
          ref: R,
          onFocusWithin: () => F(!0),
          children: (0, Z.jsxs)(Z.Fragment, {
            children: [
              T.slice(0, 2).map((e) =>
                (0, Z.jsx)(ae, { nAppID: e.nAppID }, e.nAppID),
              ),
              N &&
                (0, Z.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: O(
                    w.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, Z.jsx)(`a`, { href: s }),
                  ),
                }),
            ],
          }),
        }),
        !I &&
          M > 0 &&
          (0, Z.jsx)(E, {
            href: s,
            className: `rsPEubiF9HI-`,
            children: w.Localize(`#PersonalCalendar_More`, M),
          }),
      ],
    })
  );
}
var $ = `personalcalendar-homepage`;
function ae(e) {
  let t = v({ appid: e.nAppID }),
    n = r(940),
    a = u(),
    [o, s] = L.useState(!1),
    [c, f] = L.useState(!1),
    [p, m] = L.useState(!1),
    _ = D($),
    b = t.data === null ? void 0 : t.data,
    x = I(b, n || a ? `main_capsule` : `hero_capsule`),
    { data: S } = y(),
    C = S?.preferences?.disable_microtrailers,
    w = o || c || p;
  return (0, Z.jsx)(g, {
    feature: $,
    children: (0, Z.jsx)(M, {
      itemid: { appid: e.nAppID },
      children: (0, Z.jsxs)(d, {
        className: K,
        onGamepadFocus: () => f(!0),
        onGamepadBlur: () => f(!1),
        children: [
          (0, Z.jsx)(l, {
            id: { appid: e.nAppID },
            hoverClassName: q,
            disableScreenshots: !0,
            children: (0, Z.jsx)(T, {
              appID: e.nAppID,
              children: (0, Z.jsxs)(d, {
                className: h(J, (o || p) && `T5zU104tmR0-`),
                onMouseOver: () => s(!0),
                onMouseOut: () => s(!1),
                children: [
                  (0, Z.jsx)(`img`, { className: Y, src: x, alt: `` }),
                  C &&
                    w &&
                    (0, Z.jsx)(oe, {
                      id: { appid: e.nAppID },
                      nIntervalMS: 1e3,
                    }),
                  !C &&
                    (0, Z.jsx)(i, {
                      id: { appid: e.nAppID },
                      active: w,
                      bIsHoverMode: !0,
                    }),
                ],
              }),
            }),
          }),
          (0, Z.jsx)(N, { appid: e.nAppID, snr: _, onActiveChange: m }),
        ],
      }),
    }),
  });
}
function oe(e) {
  let t = _(e.id) ?? [],
    [n, r] = L.useState(0);
  return (
    p(() => {
      t.length > 0 && r((n + 1) % t.length);
    }, e.nIntervalMS),
    !t?.length || n == -1
      ? null
      : (0, Z.jsx)(`div`, {
          className: X,
          children: t.map((e, t) =>
            (0, Z.jsx)(
              `img`,
              {
                className: h(ee, t == n && `B638L5YAOi8-`),
                src: S.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename,
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function se(e) {
  return C.logged_in
    ? (0, Z.jsx)(c, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, Z.jsx)(ne, { ...e }),
      })
    : null;
}
export { se as default };
