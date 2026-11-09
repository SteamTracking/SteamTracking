/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n } from "./libraries.js";
import { t as r } from "./microtrailerdisplay.js";
import { r as i, u as a } from "./carouselarrows.js";
import { n as o } from "./lazyrenderchildren.js";
import { n as s, t as c } from "./seemorebutton.js";
import { t as l } from "./storegamehover.js";
import {
  $i as u,
  $t as d,
  Ay as f,
  Dc as p,
  Gb as m,
  Hb as h,
  Pc as g,
  Ru as _,
  Sc as v,
  Sl as y,
  Vu as b,
  Xt as x,
  Zi as S,
  b as C,
  dd as w,
  kc as T,
  nl as E,
  pl as D,
  rx as O,
  wv as k,
  zb as A,
} from "./main.js";
import { n as j, r as M } from "./personalcalendarstore.js";
import { t as N } from "./assetutils.js";
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
    o = f(Y),
    l = o ? JSON.parse(o) : void 0,
    u = a(940),
    d = b(),
    p = x(),
    m = A(),
    _ = new Date().getDay(),
    v = 13 + _,
    y = 22 - _,
    S = M(0, v, y),
    w = j(v, y, !0, !0).flat(),
    E = g(`${h.STORE_BASE_URL}personalcalendar`, d, p),
    { bShowSeeMoreHint: O, panelProps: k } = s(E),
    N = C.Localize(`#PersonalCalendar_Explore`),
    B = P.useCallback(() => r?.(E), [r, E]);
  if (!S.data) return (0, J.jsx)(T, { className: F });
  let V = S.data.arrAppInfos;
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
      navEntryPreferPosition: D.PREFERRED_CHILD,
      ...k,
      onOptionsButton: r ? B : k.onOptionsButton,
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
                        children: C.Localize(`#NewBadge`),
                      }),
                    C.Localize(`#PersonalCalendar_Title`),
                  ],
                }),
                (0, J.jsx)(`div`, {
                  className: z,
                  children: C.Localize(`#PersonalCalendar_Subtitle`),
                }),
              ],
            }),
            !m && (0, J.jsx)(Z, { calendarURL: E, location: `desktop` }),
            m && !n && (0, J.jsx)(c, { label: N, shown: O }),
          ],
        }),
        (0, J.jsx)(i, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: m,
          screenIsWide: u,
          startingSlide: 10,
          className: m ? void 0 : `fiveElementEightGap`,
          children: w.map((e, t) =>
            (0, J.jsx)(
              Q,
              {
                bInitialFocus: t === 10,
                nTimestamp: e,
                nNextTimestamp: t < w.length - 1 ? w[t + 1] : e + 86400,
                arrAppInfos: V,
                nRankThreshold: l?.nResultsToShow ?? 100,
              },
              e,
            ),
          ),
        }),
        !m && (0, J.jsx)(Z, { calendarURL: E, location: `mobile` }),
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
        children: C.Localize(`#PersonalCalendar_Explore`),
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
    o = b(),
    s = x(),
    c = g(`${h.STORE_BASE_URL}personalcalendar`, o, s),
    l = { weekday: `short` },
    d = { day: `numeric`, month: `numeric` },
    f = new Date(t * 1e3),
    p = new Date(),
    m =
      f.getDate() === p.getDate() &&
      f.getMonth() === p.getMonth() &&
      f.getFullYear() === p.getFullYear(),
    _ = f > p,
    y = f.toLocaleDateString(S(), l),
    w = f.toLocaleString(S(), d),
    O = i
      .filter((e) => e.nReleaseDate > t && e.nReleaseDate < n)
      .sort((e, t) =>
        e.bIsWishlisted && !t.bIsWishlisted
          ? -1
          : t.bIsWishlisted && !e.bIsWishlisted
            ? 1
            : e.nRank - t.nRank,
      ),
    k = a ?? 100,
    j = O.filter((e) => e.nRank <= k).length - 2,
    M = O.length == 0,
    [N, F] = P.useState(!1),
    I = A(),
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
      className: v(B, m && `_8XPG-IbvHHs-`, _ && `N3v3VnhKgU8-`, M && void 0),
      "flow-children": `column`,
      children: [
        (0, J.jsxs)(`div`, {
          className: V,
          children: [
            !m && (0, J.jsx)(`div`, { className: `FeN6na6SvAg-`, children: y }),
            !m && (0, J.jsx)(`div`, { className: `bLQQ-syFWHg-`, children: w }),
            m &&
              (0, J.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: C.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, J.jsx)(T, {
          className: H,
          "flow-children": `column`,
          navEntryPreferPosition: D.MAINTAIN_Y,
          preferredFocus: r && !N,
          ref: L,
          onFocusWithin: () => F(!0),
          children: (0, J.jsxs)(J.Fragment, {
            children: [
              O.slice(0, 2).map((e) =>
                (0, J.jsx)($, { nAppID: e.nAppID }, e.nAppID),
              ),
              M &&
                (0, J.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: u(
                    C.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, J.jsx)(`a`, { href: c }),
                  ),
                }),
            ],
          }),
        }),
        !I &&
          j > 0 &&
          (0, J.jsx)(E, {
            href: c,
            className: `rsPEubiF9HI-`,
            children: C.Localize(`#PersonalCalendar_More`, j),
          }),
      ],
    })
  );
}
function $(e) {
  let t = k({ appid: e.nAppID }),
    n = a(940),
    i = A(),
    [o, s] = P.useState(!1),
    [c, u] = P.useState(!1),
    f = P.useRef(null),
    p = t.data === null ? void 0 : t.data,
    m = N(p, n || i ? `main_capsule` : `hero_capsule`),
    { data: h } = w(),
    g = h?.preferences?.disable_microtrailers,
    y = o || c;
  return (
    P.useEffect(() => {
      if (
        (f.current &&
          f.current.setAttribute(`data-ds-appid`, e.nAppID.toString() ?? ``),
        window.GDynamicStore && window.$J)
      ) {
        let e = window.$J(f.current);
        window.GDynamicStore.DecorateDynamicItems(e);
      }
    }, [e.nAppID, f]),
    (0, J.jsx)(_, {
      feature: `personalcalendar-homepage`,
      children: (0, J.jsx)(T, {
        onGamepadFocus: () => u(!0),
        onGamepadBlur: () => u(!1),
        children: (0, J.jsx)(l, {
          id: { appid: e.nAppID },
          hoverClassName: U,
          disableScreenshots: !0,
          children: (0, J.jsx)(d, {
            appID: e.nAppID,
            children: (0, J.jsxs)(T, {
              ref: f,
              className: v(W, o && `T5zU104tmR0-`),
              onMouseOver: () => s(!0),
              onMouseOut: () => s(!1),
              children: [
                (0, J.jsx)(`img`, { className: G, src: m, alt: `` }),
                g &&
                  y &&
                  (0, J.jsx)(ee, { id: { appid: e.nAppID }, nIntervalMS: 1e3 }),
                !g &&
                  (0, J.jsx)(r, {
                    id: { appid: e.nAppID },
                    active: y,
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
  let t = p(e.id) ?? [],
    [n, r] = P.useState(0);
  return (
    y(() => {
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
                className: v(q, t == n && `B638L5YAOi8-`),
                src: O.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename,
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function te(e) {
  return m.logged_in
    ? (0, J.jsx)(o, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, J.jsx)(X, { ...e }),
      })
    : null;
}
export { te as default };
