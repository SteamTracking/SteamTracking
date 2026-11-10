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
  $t as u,
  Ac as d,
  Bb as f,
  Cc as p,
  Cl as m,
  Fc as h,
  Hu as g,
  Kb as _,
  Oc as v,
  Qi as y,
  Tv as b,
  Ub as x,
  Xt as S,
  b as C,
  ea as w,
  fd as T,
  ix as E,
  jy as D,
  ml as O,
  rl as k,
  zu as A,
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
    o = D(Y),
    l = o ? JSON.parse(o) : void 0,
    u = a(940),
    p = g(),
    m = S(),
    _ = f(),
    v = new Date().getDay(),
    y = 13 + v,
    b = 22 - v,
    w = M(0, y, b),
    T = j(y, b, !0, !0).flat(),
    E = h(`${x.STORE_BASE_URL}personalcalendar`, p, m),
    { bShowSeeMoreHint: k, panelProps: A } = s(E),
    N = C.Localize(`#PersonalCalendar_Explore`),
    B = P.useCallback(() => r?.(E), [r, E]);
  if (!w.data) return (0, J.jsx)(d, { className: F });
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
    (0, J.jsxs)(d, {
      className: F,
      navEntryPreferPosition: O.PREFERRED_CHILD,
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
            !_ && (0, J.jsx)(Z, { calendarURL: E, location: `desktop` }),
            _ && !n && (0, J.jsx)(c, { label: N, shown: k }),
          ],
        }),
        (0, J.jsx)(i, {
          visibleElements: 5,
          hideArrows: !1,
          disableEdgeWrap: !0,
          hidePips: _,
          screenIsWide: u,
          startingSlide: 10,
          className: _ ? void 0 : `fiveElementEightGap`,
          children: T.map((e, t) =>
            (0, J.jsx)(
              Q,
              {
                bInitialFocus: t === 10,
                nTimestamp: e,
                nNextTimestamp: t < T.length - 1 ? T[t + 1] : e + 86400,
                arrAppInfos: V,
                nRankThreshold: l?.nResultsToShow ?? 100,
              },
              e,
            ),
          ),
        }),
        !_ && (0, J.jsx)(Z, { calendarURL: E, location: `mobile` }),
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
    o = g(),
    s = S(),
    c = h(`${x.STORE_BASE_URL}personalcalendar`, o, s),
    l = { weekday: `short` },
    u = { day: `numeric`, month: `numeric` },
    m = new Date(t * 1e3),
    _ = new Date(),
    v =
      m.getDate() === _.getDate() &&
      m.getMonth() === _.getMonth() &&
      m.getFullYear() === _.getFullYear(),
    b = m > _,
    T = m.toLocaleDateString(y(), l),
    E = m.toLocaleString(y(), u),
    D = i
      .filter((e) => e.nReleaseDate > t && e.nReleaseDate < n)
      .sort((e, t) =>
        e.bIsWishlisted && !t.bIsWishlisted
          ? -1
          : t.bIsWishlisted && !e.bIsWishlisted
            ? 1
            : e.nRank - t.nRank,
      ),
    A = a ?? 100,
    j = D.filter((e) => e.nRank <= A).length - 2,
    M = D.length == 0,
    [N, F] = P.useState(!1),
    I = f(),
    L = P.useRef(null);
  return (
    P.useEffect(() => {
      if (r && I && L.current) {
        let e = L.current.closest(`.carousel__slide`),
          t = L.current.closest(`.carousel__slider-tray-wrapper`);
        t && e && (t.scrollLeft = e.offsetLeft);
      }
    }, [r, I]),
    (0, J.jsxs)(d, {
      className: p(B, v && `_8XPG-IbvHHs-`, b && `N3v3VnhKgU8-`, M && void 0),
      "flow-children": `column`,
      children: [
        (0, J.jsxs)(`div`, {
          className: V,
          children: [
            !v && (0, J.jsx)(`div`, { className: `FeN6na6SvAg-`, children: T }),
            !v && (0, J.jsx)(`div`, { className: `bLQQ-syFWHg-`, children: E }),
            v &&
              (0, J.jsx)(`div`, {
                className: `lGsGMjZ-9IE-`,
                children: C.Localize(`#Time_Today`),
              }),
          ],
        }),
        (0, J.jsx)(d, {
          className: H,
          "flow-children": `column`,
          navEntryPreferPosition: O.MAINTAIN_Y,
          preferredFocus: r && !N,
          ref: L,
          onFocusWithin: () => F(!0),
          children: (0, J.jsxs)(J.Fragment, {
            children: [
              D.slice(0, 2).map((e) =>
                (0, J.jsx)($, { nAppID: e.nAppID }, e.nAppID),
              ),
              M &&
                (0, J.jsx)(`div`, {
                  className: `MDx-yf8h-Ww-`,
                  children: w(
                    C.Localize(`#PersonalCalendar_EmptyDay`),
                    (0, J.jsx)(`a`, { href: c }),
                  ),
                }),
            ],
          }),
        }),
        !I &&
          j > 0 &&
          (0, J.jsx)(k, {
            href: c,
            className: `rsPEubiF9HI-`,
            children: C.Localize(`#PersonalCalendar_More`, j),
          }),
      ],
    })
  );
}
function $(e) {
  let t = b({ appid: e.nAppID }),
    n = a(940),
    i = f(),
    [o, s] = P.useState(!1),
    [c, m] = P.useState(!1),
    h = P.useRef(null),
    g = t.data === null ? void 0 : t.data,
    _ = N(g, n || i ? `main_capsule` : `hero_capsule`),
    { data: v } = T(),
    y = v?.preferences?.disable_microtrailers,
    x = o || c;
  return (
    P.useEffect(() => {
      if (
        (h.current &&
          h.current.setAttribute(`data-ds-appid`, e.nAppID.toString() ?? ``),
        window.GDynamicStore && window.$J)
      ) {
        let e = window.$J(h.current);
        window.GDynamicStore.DecorateDynamicItems(e);
      }
    }, [e.nAppID, h]),
    (0, J.jsx)(A, {
      feature: `personalcalendar-homepage`,
      children: (0, J.jsx)(d, {
        onGamepadFocus: () => m(!0),
        onGamepadBlur: () => m(!1),
        children: (0, J.jsx)(l, {
          id: { appid: e.nAppID },
          hoverClassName: U,
          disableScreenshots: !0,
          children: (0, J.jsx)(u, {
            appID: e.nAppID,
            children: (0, J.jsxs)(d, {
              ref: h,
              className: p(W, o && `T5zU104tmR0-`),
              onMouseOver: () => s(!0),
              onMouseOut: () => s(!1),
              children: [
                (0, J.jsx)(`img`, { className: G, src: _, alt: `` }),
                y &&
                  x &&
                  (0, J.jsx)(ee, { id: { appid: e.nAppID }, nIntervalMS: 1e3 }),
                !y &&
                  (0, J.jsx)(r, {
                    id: { appid: e.nAppID },
                    active: x,
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
  let t = v(e.id) ?? [],
    [n, r] = P.useState(0);
  return (
    m(() => {
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
                className: p(q, t == n && `B638L5YAOi8-`),
                src: E.BASE_URL_SHARED_CDN + `/store_item_assets/` + e.filename,
                alt: ``,
              },
              e.filename,
            ),
          ),
        })
  );
}
function te(e) {
  return _.logged_in
    ? (0, J.jsx)(o, {
        placeholderHeight: 390,
        rootMargin: `100% 0px 100% 0px`,
        children: (0, J.jsx)(X, { ...e }),
      })
    : null;
}
export { te as default };
