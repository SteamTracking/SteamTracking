/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n } from "./chunk~01cfc309bf.js";
import { _ as r, l as i, n as a, r as o } from "./chunk~4eed35ad1f.js";
import { n as s } from "./chunk~56437c278a.js";
import { r as c } from "./chunk~21cdc464a1.js";
import { n as l } from "./chunk~710e3cfd2f.js";
import { t as u } from "./chunk~4d16ce5d1a.js";
import {
  $u as d,
  Dl as f,
  Ed as p,
  Gy as m,
  Il as h,
  Kc as g,
  Pc as _,
  Vc as v,
  Zt as y,
  ad as b,
  b as x,
  ca as S,
  en as C,
  ex as w,
  gl as T,
  nd as E,
  ox as D,
  rx as O,
  u as k,
  ua as A,
  vx as j,
  zc as M,
  zv as N,
} from "./main.js";
import { t as P } from "./chunk~6417efccc1.js";
import { n as F, r as I } from "./chunk~06708cbb41.js";
import { t as L } from "./chunk~4d6f892b8c.js";
var R = e(t(), 1),
  z = `nHdn-Ea4zSg-`,
  B = `_37RLKwjtCwE-`,
  V = `U-HkHHn6qDk-`,
  H = `IdjQXo6E9yc-`,
  U = `sGDLZ2AYREY-`,
  W = `maxz19gKOQc-`,
  G = `CAnATFwmik4-`,
  K = `N83ri6QShHM-`,
  q = `yD3gdO7T1NY-`,
  J = `-UQT03dsikU-`,
  Y = `e217oOT2n-w-`,
  X = `ojxRGZ9ipx0-`,
  ee = `DgabeNaTSbY-`,
  te = `_1P6OIcWhV5A-`,
  Z = n(),
  ne = {
    name: `personalcalendarPrefs`,
    options: { path: `/personalcalendar`, secure: !0, maxAge: 31536e6 },
    preferenceControls: { isTechnicallyNecessary: !0 },
  };
function re(e) {
  let {
      bShowNewBadge: t,
      bHasFooterActionLegend: n,
      onSeeMore: r,
      eGamepadSeeMoreButton: s = `Y`,
    } = e,
    l = m(ne),
    u = l ? JSON.parse(l) : void 0,
    d = i(940),
    p = E(),
    h = y(),
    _ = w(),
    b = new Date().getDay(),
    S = 13 + b,
    C = 22 - b,
    T = I(0, S, C),
    D = F(S, C, !0, !0).flat(),
    k = g(`${O.STORE_BASE_URL}personalcalendar`, p, h),
    { bShowSeeMoreHint: A, panelProps: j } = o(k, s),
    M = x.Localize(`#PersonalCalendar_Explore`),
    N = R.useCallback(() => r?.(k), [r, k]),
    P = r ? N : (j.onOptionsButton ?? j.onSecondaryButton),
    L =
      s == `X`
        ? { onSecondaryButton: P, onSecondaryActionDescription: M }
        : { onOptionsButton: P, onOptionsActionDescription: M };
  if (!T.data) return (0, Z.jsx)(v, { className: z });
  let W = T.data.arrAppInfos;
  return (
    u &&
      ((W = W.filter((e) => !u.bHideOwned || !e.bIsOwned)),
      (W = W.filter((e) => !u.bHideEarlyAccess || !e.bIsEarlyAccess)),
      (W = W.filter((e) => {
        switch (u.eWishlistDisplay) {
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
    (0, Z.jsxs)(v, {
      className: z,
      navEntryPreferPosition: f.PREFERRED_CHILD,
      ...j,
      ...L,
      children: [
        (0, Z.jsxs)(`div`, {
          className: B,
          children: [
            (0, Z.jsxs)(`div`, {
              className: V,
              children: [
                (0, Z.jsxs)(`div`, {
                  className: H,
                  children: [
                    t &&
                      (0, Z.jsx)(`span`, {
                        className: `x8jWPgfdVoI-`,
                        children: x.Localize(`#NewBadge`),
                      }),
                    x.Localize(`#PersonalCalendar_Title`),
                  ],
                }),
                (0, Z.jsx)(`div`, {
                  className: U,
                  children: x.Localize(`#PersonalCalendar_Subtitle`),
                }),
              ],
            }),
            !_ && (0, Z.jsx)(Q, { calendarURL: k, location: `desktop` }),
            _ && !n && (0, Z.jsx)(a, { label: M, shown: A, button: s }),
          ],
        }),
        (0, Z.jsx)(c, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: _,
          screenIsWide: d,
          startingSlide: 10,
          className: _ ? void 0 : `fiveElementEightGap`,
          children: D.map((e, t) =>
            (0, Z.jsx)(
              ae,
              {
                bInitialFocus: t === 10,
                nTimestamp: e,
                arrAppInfos: W,
                nRankThreshold: u?.nResultsToShow ?? 100,
                bGamepadWishlist: s == `X`,
              },
              e,
            ),
          ),
        }),
        !_ && (0, Z.jsx)(Q, { calendarURL: k, location: `mobile` }),
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
        children: x.Localize(`#PersonalCalendar_Explore`),
      }),
    }),
  });
}
function ie(e) {
  let t = new Date(e * 1e3);
  t.getDay() == 1 && t.setDate(t.getDate() - 2);
  let n = new Date(e * 1e3);
  return (
    n.setDate(n.getDate() + 1),
    [Math.floor(t.getTime() / 1e3), Math.floor(n.getTime() / 1e3)]
  );
}
function ae(e) {
  let {
      nTimestamp: t,
      bInitialFocus: n,
      arrAppInfos: r,
      nRankThreshold: i,
      bGamepadWishlist: a,
    } = e,
    o = E(),
    s = y(),
    c = g(`${O.STORE_BASE_URL}personalcalendar`, o, s),
    l = { weekday: `short` },
    u = { day: `numeric`, month: `numeric` },
    d = new Date(t * 1e3),
    p = new Date(),
    m =
      d.getDate() === p.getDate() &&
      d.getMonth() === p.getMonth() &&
      d.getFullYear() === p.getFullYear(),
    h = d > p,
    b = d.toLocaleDateString(S(), l),
    C = d.toLocaleString(S(), u),
    [D, k] = ie(t),
    j = r
      .filter((e) => e.nReleaseDate >= D && e.nReleaseDate < k)
      .sort((e, t) =>
        e.bIsWishlisted && !t.bIsWishlisted
          ? -1
          : t.bIsWishlisted && !e.bIsWishlisted
            ? 1
            : e.nRank - t.nRank,
      ),
    M = i ?? 100,
    N = j.filter((e) => e.nRank <= M).length - 2,
    P = j.length == 0,
    [F, I] = R.useState(!1),
    L = w(),
    z = R.useRef(null);
  return (
    R.useEffect(() => {
      if (n && L && z.current) {
        let e = z.current.closest(`.carousel__slide`),
          t = z.current.closest(`.carousel__slider-tray-wrapper`);
        t && e && (t.scrollLeft = e.offsetLeft);
      }
    }, [n, L]),
    (0, Z.jsxs)(v, {
      className: _(W, m && `_8XPG-IbvHHs-`, h && `N3v3VnhKgU8-`, P && void 0),
      "flow-children": `column`,
      children: [
        (0, Z.jsxs)(`div`, {
          className: G,
          children: [
            !m && (0, Z.jsx)(`div`, { className: `FeN6na6SvAg-`, children: b }),
            !m && (0, Z.jsx)(`div`, { className: `bLQQ-syFWHg-`, children: C }),
            m &&
              (0, Z.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: x.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, Z.jsx)(v, {
          className: K,
          "flow-children": `column`,
          navEntryPreferPosition: f.MAINTAIN_Y,
          preferredFocus: n && !F,
          ref: z,
          onFocusWithin: () => I(!0),
          children: (0, Z.jsxs)(Z.Fragment, {
            children: [
              j
                .slice(0, 2)
                .map((e) =>
                  (0, Z.jsx)(
                    oe,
                    { nAppID: e.nAppID, bGamepadWishlist: a },
                    e.nAppID,
                  ),
                ),
              P &&
                (0, Z.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: A(
                    x.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, Z.jsx)(`a`, { href: c }),
                  ),
                }),
            ],
          }),
        }),
        !L &&
          N > 0 &&
          (0, Z.jsx)(T, {
            href: c,
            className: `rsPEubiF9HI-`,
            children: x.Localize(`#PersonalCalendar_More`, N),
          }),
      ],
    })
  );
}
var $ = `personalcalendar-homepage`;
function oe(e) {
  let t = N({ appid: e.nAppID }),
    n = s(e.bGamepadWishlist ? { appid: e.nAppID } : void 0),
    a = i(940),
    o = w(),
    [c, l] = R.useState(!1),
    [f, m] = R.useState(!1),
    [h, g] = R.useState(!1),
    y = b($),
    x = t.data === null ? void 0 : t.data,
    S = L(x, a || o ? `main_capsule` : `hero_capsule`),
    { data: T } = p(),
    E = T?.preferences?.disable_microtrailers,
    D = c || f || h;
  return (0, Z.jsx)(d, {
    feature: $,
    children: (0, Z.jsx)(k, {
      itemid: { appid: e.nAppID },
      children: (0, Z.jsxs)(v, {
        className: q,
        onGamepadFocus: () => m(!0),
        onGamepadBlur: () => m(!1),
        ...n,
        onOKActionDescription: n.onOptionsButton ? null : void 0,
        children: [
          (0, Z.jsx)(u, {
            id: { appid: e.nAppID },
            hoverClassName: J,
            disableScreenshots: !0,
            children: (0, Z.jsx)(C, {
              appID: e.nAppID,
              children: (0, Z.jsxs)(v, {
                className: _(Y, (c || h) && `T5zU104tmR0-`),
                onMouseOver: () => l(!0),
                onMouseOut: () => l(!1),
                children: [
                  (0, Z.jsx)(`img`, { className: X, src: S, alt: `` }),
                  E &&
                    D &&
                    (0, Z.jsx)(se, {
                      id: { appid: e.nAppID },
                      nIntervalMS: 1e3,
                    }),
                  !E &&
                    (0, Z.jsx)(r, {
                      id: { appid: e.nAppID },
                      active: D,
                      bIsHoverMode: !0,
                    }),
                ],
              }),
            }),
          }),
          (0, Z.jsx)(P, { appid: e.nAppID, snr: y, onActiveChange: g }),
        ],
      }),
    }),
  });
}
function se(e) {
  let t = M(e.id) ?? [],
    [n, r] = R.useState(0);
  return (
    h(() => {
      t.length > 0 && r((n + 1) % t.length);
    }, e.nIntervalMS),
    !t?.length || n == -1
      ? null
      : (0, Z.jsx)(`div`, {
          className: ee,
          children: t.map((e, t) =>
            (0, Z.jsx)(
              `img`,
              {
                className: _(te, t == n && `B638L5YAOi8-`),
                src: j.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename,
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function ce(e) {
  return D.logged_in
    ? (0, Z.jsx)(l, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, Z.jsx)(re, {
          ...e,
          bHasFooterActionLegend: !0,
          eGamepadSeeMoreButton: `X`,
        }),
      })
    : null;
}
export { ce as default };
