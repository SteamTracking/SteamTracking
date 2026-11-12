/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Ft as t, K as n, ot as r } from "./chunk~01cfc309bf.js";
import { t as i } from "./chunk~e53a8c8667.js";
import { a, r as o, s } from "./chunk~6e8a72cfb5.js";
import {
  _ as c,
  a as l,
  b as u,
  c as d,
  d as f,
  g as p,
  h as m,
  i as h,
  l as g,
  m as ee,
  n as _,
  o as v,
  p as y,
  r as b,
  s as x,
  t as S,
  u as C,
  v as w,
  x as T,
} from "./chunk~e8ef2e6942.js";
import { t as E } from "./chunk~5412a9f1de.js";
import { t as te } from "./chunk~93195fc4a9.js";
import { t as ne } from "./chunk~4239b66179.js";
import {
  $h as re,
  Ft as ie,
  Ht as ae,
  Kf as oe,
  Kt as D,
  Lt as O,
  Mt as se,
  Nu as ce,
  Qo as le,
  Rs as ue,
  Su as de,
  ct as fe,
  dt as k,
  en as pe,
  im as A,
  jt as j,
  qt as M,
  rn as N,
  sm as me,
  tt as he,
  ym as ge,
  zs as _e,
  zt as ve,
} from "./main.js";
var P = e(t(), 1),
  F = r();
function ye(e) {
  let { suggestions: t, onTextChange: n, onSuggestionSelected: r, ...i } = e,
    a = I({ onTextChange: n, suggestions: t, onSuggestionSelected: r });
  return (0, F.jsxs)(L.Root, {
    state: a,
    children: [
      (0, F.jsx)(L.TextInput, { ...i }),
      (0, F.jsx)(L.Suggestions, {
        children: t.map((e, t) =>
          (0, F.jsx)(L.Suggestion, { value: e, children: e }, e + t),
        ),
      }),
    ],
  });
}
function I(e) {
  let { onTextChange: t, suggestions: n, onSuggestionSelected: r } = e,
    [i, a] = (0, P.useState)(null),
    [o, s] = (0, P.useState)(!1);
  return {
    activeIndex: i,
    setActiveIndex: a,
    open: o,
    onOpenChange: s,
    onTextChange: (0, P.useCallback)(
      (e) => {
        (e ? (s(!0), a(null)) : s(!1), t(e));
      },
      [t],
    ),
    suggestions: n,
    onSuggestionSelected: r,
  };
}
function be(e) {
  let {
      children: t,
      placement: n = `bottom-end`,
      popoverWidth: r = `dropdown`,
      ...i
    } = e,
    a = se({
      ...i.state,
      width: r,
      placement: n,
      presentation: `anchor`,
      gutter: `4`,
      interactions: { virtualItemFocus: !0, focus: !0 },
      role: `combobox`,
      scroll: !0,
    });
  return (0, F.jsx)(R.Provider, {
    value: i,
    children: (0, F.jsx)(j.Root, { state: a, children: t }),
  });
}
function xe(e) {
  let {
      state: {
        onTextChange: t,
        activeIndex: n,
        onOpenChange: r,
        setActiveIndex: i,
        suggestions: a,
        onSuggestionSelected: o,
      },
    } = z(`<Autocomplete.TextInput>`),
    c = (e) => {
      e.key === `Enter` &&
        n !== null &&
        a[n] &&
        (o && o(a[n], e),
        e.defaultPrevented || t(a[n]),
        i(null),
        r(!1),
        e.preventDefault(),
        e.stopPropagation());
    },
    l = (e) => {
      (e.key === `Home` || e.key === `End`) && e.stopPropagation();
    },
    u = (0, P.useRef)(null);
  return (0, F.jsx)(j.Anchor, {
    children: (0, F.jsx)(s, {
      ...e,
      inputRef: u,
      onTextChange: t,
      "aria-autocomplete": `list`,
      onKeyDown: c,
      onKeyDownCapture: l,
      role: `combobox`,
    }),
  });
}
function Se(e) {
  return P.Children.toArray(e.children).length === 0
    ? null
    : (0, F.jsx)(j.Positioner, { ...e, returnFocus: !1 });
}
function Ce(e) {
  let { value: t, children: n, ...r } = e,
    {
      state: {
        onTextChange: i,
        onOpenChange: a,
        setActiveIndex: o,
        onSuggestionSelected: s,
      },
    } = z(`<Autocomplete.TextInput>`);
  return (0, F.jsx)(j.Item, {
    onSelect: (e) => {
      (s && s(t, e), e.defaultPrevented || i(t), o(null), a(!1));
    },
    ...r,
    children: n,
  });
}
var L = Object.assign(ye, {
    Root: be,
    TextInput: xe,
    Suggestions: Se,
    Suggestion: Ce,
  }),
  R = (0, P.createContext)(null);
function z(e) {
  let t = (0, P.useContext)(R);
  return (re(t, `${e} must be used within an <Autocomplete>!`), t);
}
var B = (0, P.createContext)(!1);
function V() {
  return (0, P.useContext)(B);
}
function we(e) {
  let { showSteamItems: t, onShowSteamItemsChange: n } = e;
  return (0, F.jsxs)(E.Root, {
    value: t ? `on` : `off`,
    onValueChange: (e) => n(e === `on`),
    variant: `inset`,
    radius: `full`,
    children: [
      (0, F.jsx)(E.Item, {
        value: `off`,
        children: w.Localize(`#AdvancedSearch_TypeSwitch_InGame`),
      }),
      (0, F.jsx)(E.Item, {
        value: `on`,
        children: w.Localize(`#AdvancedSearch_TypeSwitch_SteamItems`),
      }),
    ],
  });
}
var Te = 2;
function H(e, t, n, r) {
  return (0, P.useMemo)(() => {
    if (!t) return [];
    let i = Ee[e];
    return i ? i(t, n, r) : U(t, void 0, n, r);
  }, [t, n, r, e]);
}
var Ee = { 753: (e, t, n) => U(e, 3, t, n) };
function U(e, t, n, r) {
  let i = typeof t == `number` ? t : Te,
    a = [],
    o = [];
  if (!e) return [];
  for (let t of Object.keys(e)) {
    let s = e[t];
    if (!s.tags) continue;
    let c = Object.keys(s.tags).length < i,
      l = g(s, c ? `checkbox` : `select`, !0, void 0, n, r);
    l && (c ? o.push(l) : a.push(l));
  }
  return [a, o].filter((e) => e.length > 0);
}
function W(e) {
  let { facets: t, state: n, onStateChange: r } = e;
  return (0, F.jsx)(F.Fragment, {
    children: t.flatMap((e, i) => [
      (0, F.jsxs)(
        d,
        {
          children: [
            e.map((e) =>
              (0, F.jsx)(
                v,
                { facet: e, state: n, onStateChange: r },
                e.strLabel,
              ),
            ),
            i === t.length - 1 && (0, F.jsx)(h, { state: n, onStateChange: r }),
          ],
        },
        `facets_${i}`,
      ),
      i < t.length - 1
        ? (0, F.jsx)(
            T,
            { color: `dull-9`, size: `4`, marginTop: `4` },
            `sep_${i}`,
          )
        : null,
    ]),
  });
}
var De = 753,
  G = `item_class`,
  Oe = `Event`;
function ke(e) {
  let { facets: t, state: n, onStateChange: r, facetingInfo: i, ...a } = e,
    o = { ...t },
    s = o[G];
  (delete o[G], n.app && delete o[Oe]);
  let c = H(De, o, i);
  return (0, F.jsxs)(M, {
    ...a,
    children: [
      s && (0, F.jsx)(je, { facet: s, state: n, onStateChange: r }),
      (0, F.jsx)(W, { facets: c, state: n, onStateChange: r }),
    ],
  });
}
var K = [`item_class_10`, `item_class_6`],
  Ae = {
    item_class_2: Me,
    item_class_3: Ie,
    item_class_4: Fe,
    item_class_5: Pe,
    item_class_10: Ne,
  };
function je(e) {
  let {
      facet: { localized_name: t, name: n, tags: r = {} },
      state: i,
      onStateChange: a,
    } = e,
    o = Object.keys(r).filter((e) => K.indexOf(e) < 1),
    s = (e, t) => {
      if (K.includes(e)) {
        let e = i;
        for (let r of K) e = l(e, n, r, t);
        a(e, !0);
      } else a(l(i, n, e, t), !0);
    },
    c = i.facets[n] || {};
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(O, {
        weight: `medium`,
        size: `3`,
        contrast: `title`,
        children: w.Localize(`#AdvancedSearch_SteamItems_TypeLabel`),
      }),
      (0, F.jsx)(te, {
        columns: `repeat( auto-fit, minmax( 230px, 1fr ) )`,
        gap: `2`,
        marginTop: `2`,
        children: o.map((e) =>
          (0, F.jsx)(
            x,
            {
              active: c[e],
              onActiveChange: (t) => s(e, t),
              label: r[e].localized_name,
              icon: Ae[e],
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function Me(e) {
  return (0, F.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M24 31H3V5H24V31ZM6 8H21V24H6V8Z`,
      }),
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        d: `M33 27H28V22H31V11H28V9H33V27Z`,
      }),
    ],
  });
}
function Ne(e) {
  return (0, F.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, F.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M13 7H34V29H13V25H10V29H2V21C3.65685 21 5 19.6569 5 18C5 16.3431 3.65685 15 2 15V7H10V11H13V7ZM13 23H10V19H13V23ZM10 17H13V13H10V17ZM21 15C21 15.5523 20.5523 16 20 16C19.4477 16 19 15.5523 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15ZM23 15C23 16.6569 21.6569 18 20 18C18.3431 18 17 16.6569 17 15C17 13.3431 18.3431 12 20 12C21.6569 12 23 13.3431 23 15ZM28 23C28.5523 23 29 22.5523 29 22C29 21.4477 28.5523 21 28 21C27.4477 21 27 21.4477 27 22C27 22.5523 27.4477 23 28 23ZM28 25C29.6569 25 31 23.6569 31 22C31 20.3431 29.6569 19 28 19C26.3431 19 25 20.3431 25 22C25 23.6569 26.3431 25 28 25ZM27.1679 11.9453L19.1679 23.9453L20.832 25.0547L28.832 13.0547L27.1679 11.9453Z`,
    }),
  });
}
function Pe(e) {
  return (0, F.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: [
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M29 31H6V5H29V31ZM9 8H26V24H9V8Z`,
      }),
      (0, F.jsx)(`path`, {
        fill: `currentColor`,
        d: `M14.7451 16.9935L12 14.19L15.7965 14.125L17.5 10L19.2035 14.125L23 14.19L20.2549 16.9935L20.8973 20.9694L17.5 19.1242L14.1027 21L14.7451 16.9935Z`,
      }),
    ],
  });
}
function Fe(e) {
  return (0, F.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, F.jsx)(`path`, {
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      d: `M9.66645 5.52796C12.1332 3.87973 15.0333 3 18 3C19.9698 3 21.9204 3.38799 23.7403 4.14181C25.5601 4.89563 27.2137 6.00052 28.6066 7.3934C29.9995 8.78628 31.1044 10.4399 31.8582 12.2597C32.612 14.0796 33 16.0302 33 18C33 20.9667 32.1203 23.8668 30.472 26.3336C28.8238 28.8003 26.4811 30.7229 23.7403 31.8582C20.9994 32.9935 17.9834 33.2906 15.0737 32.7118C12.1639 32.133 9.49119 30.7044 7.3934 28.6066C5.29562 26.5088 3.86701 23.8361 3.28823 20.9264C2.70945 18.0166 3.0065 15.0006 4.14181 12.2597C5.27713 9.51886 7.19972 7.17618 9.66645 5.52796ZM9.5056 13.3333C9.17595 13.8266 9.00001 14.4067 9.00001 15C9.00001 15.7956 9.31608 16.5587 9.87869 17.1213C10.4413 17.6839 11.2044 18 12 18C12.5934 18 13.1734 17.8241 13.6667 17.4944C14.1601 17.1648 14.5446 16.6962 14.7716 16.1481C14.9987 15.5999 15.0581 14.9967 14.9424 14.4147C14.8266 13.8328 14.5409 13.2982 14.1213 12.8787C13.7018 12.4591 13.1672 12.1734 12.5853 12.0576C12.0033 11.9419 11.4001 12.0013 10.852 12.2284C10.3038 12.4554 9.83524 12.8399 9.5056 13.3333ZM22.3333 17.4944C22.8266 17.8241 23.4067 18 24 18C24.7957 18 25.5587 17.6839 26.1213 17.1213C26.6839 16.5587 27 15.7956 27 15C27 14.4067 26.8241 13.8266 26.4944 13.3333C26.1648 12.8399 25.6962 12.4554 25.1481 12.2284C24.5999 12.0013 23.9967 11.9419 23.4147 12.0576C22.8328 12.1734 22.2982 12.4591 21.8787 12.8787C21.4591 13.2982 21.1734 13.8328 21.0576 14.4147C20.9419 14.9967 21.0013 15.5999 21.2284 16.1481C21.4554 16.6962 21.8399 17.1648 22.3333 17.4944ZM23 22C23 23.3261 22.4732 24.5979 21.5355 25.5355C20.5979 26.4732 19.3261 27 18 27C16.6739 27 15.4021 26.4732 14.4645 25.5355C13.5268 24.5979 13 23.3261 13 22H23Z`,
      fill: `currentColor`,
    }),
  });
}
function Ie(e) {
  return (0, F.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ...e,
    children: (0, F.jsx)(`path`, {
      d: `M2 6.05005V30.05H34V6.05005H2ZM25 10.05C25.5933 10.05 26.1734 10.226 26.6667 10.5556C27.1601 10.8853 27.5446 11.3538 27.7716 11.902C27.9987 12.4502 28.0581 13.0534 27.9424 13.6353C27.8266 14.2173 27.5409 14.7518 27.1213 15.1714C26.7018 15.5909 26.1672 15.8766 25.5853 15.9924C25.0033 16.1082 24.4001 16.0488 23.8519 15.8217C23.3038 15.5946 22.8352 15.2101 22.5056 14.7168C22.1759 14.2234 22 13.6434 22 13.05C22 12.2544 22.3161 11.4913 22.8787 10.9287C23.4413 10.3661 24.2044 10.05 25 10.05ZM23 26.05H6L14.5 15.05L19.4 21.39L22 18.05L28.22 26.05H23Z`,
      fill: `currentColor`,
    }),
  });
}
function Le(e) {
  return n(Re(e));
}
function Re(e) {
  return {
    queryKey: [`market`, `app_facets`, e],
    enabled: !!e,
    queryFn: async () => q(e),
  };
}
async function q(e) {
  let t = await fetch(`${A.COMMUNITY_BASE_URL}market/appfacets/${e}`);
  if (!t || !t.ok) throw Error(`Failed to load market filters for app ${e}`);
  let n = await t.json();
  if (!n.success || !n.facets)
    throw Error(`Loaded malformed market filters for app ${e}`);
  return n.facets;
}
var J = 753,
  Y = `Game`;
function ze() {
  return n(Be(q));
}
function Be(e) {
  return {
    queryKey: [`marketfilters`, J],
    queryFn: async () => {
      let t = await e(J);
      if (!t)
        throw Error(`Failed to load market facets for Steam Inventory items`);
      let n = t[Y];
      if ((delete t[Y], !n.tags))
        return { rgApps: [], facets: {}, mapAppIDs: {} };
      let r = {},
        i = [];
      for (let e of Object.keys(n.tags)) {
        let t = n.tags[e],
          a = parseInt(e.slice(e.indexOf(`_`) + 1));
        isNaN(a) ||
          ((r[a] = !0),
          i.push({
            appid: a,
            name: t.localized_name,
            icon: `${A.COMMUNITY_BASE_URL}market/steamitemfiltersicon/${a}`,
          }));
      }
      return { rgApps: k(i, (e) => e.name), mapAppIDs: r, facets: t };
    },
  };
}
var Ve = {
  name: `bMarketOptOut`,
  preferenceControls: { isTechnicallyNecessary: !0 },
  options: { path: `/market`, maxAge: 2592e6, httpOnly: !1 },
};
function He() {
  return ge(Ve) === `1`;
}
var X = `4`,
  Z = (0, P.createContext)({});
function Ue(e) {
  let {
      filter: t,
      onFilterChange: n,
      config: r,
      preload: a = {},
      debugMode: o,
      onSearch: s,
      ...l
    } = e,
    u = t.bSteamItems,
    d = (e) => n({ ...t, bSteamItems: e }),
    f = (e) => {
      (e.preventDefault(), e.stopPropagation());
    },
    p = N(`sm`),
    m = u ? l.rgAppData && l.rgAppData[Q] : t.filterInGame.app,
    h = We(m);
  return (0, F.jsx)(B.Provider, {
    value: !!o,
    children: (0, F.jsx)(c.Provider, {
      value: r,
      children: (0, F.jsx)(Z.Provider, {
        value: a,
        children: (0, F.jsx)(M, {
          minWidth: { initial: void 0, sm: `min( 75vw, 800px )` },
          children: (0, F.jsxs)(`form`, {
            onSubmit: f,
            children: [
              !r.bNewMarket &&
                (0, F.jsx)(i, {
                  size: `7`,
                  weight: `heavy`,
                  children: w.Localize(`#AdvancedSearch_Heading`),
                }),
              (0, F.jsxs)(D, {
                gap: `2`,
                align: { initial: `stretch`, sm: `start` },
                marginY: X,
                direction: { initial: `column`, sm: `row` },
                children: [
                  (0, F.jsx)(M, {
                    flexGrow: `0`,
                    children: (0, F.jsx)(we, {
                      showSteamItems: u,
                      onShowSteamItemsChange: d,
                    }),
                  }),
                  p &&
                    (0, F.jsx)(M, {
                      style: { marginTop: `10px` },
                      children: (0, F.jsx)(T, {
                        size: `1`,
                        orientation: `vertical`,
                        color: `dull-9`,
                      }),
                    }),
                  (0, F.jsxs)(D, {
                    direction: `column`,
                    flexGrow: `1`,
                    gap: `2`,
                    children: [
                      (0, F.jsx)(Ke, {
                        app: m || void 0,
                        value: t.strSearch || ``,
                        onTextChange: (e) => n({ ...t, strSearch: e }),
                      }),
                      h &&
                        (0, F.jsx)(fe, {
                          marginLeft: `4`,
                          checked: !!t.bSearchDescriptions,
                          onChange: (e) => n({ ...t, bSearchDescriptions: e }),
                          title: w.Localize(
                            `#AdvancedSearch_IncludeDescriptions_Tooltip`,
                          ),
                          children: (0, F.jsx)(O, {
                            contrast: `description`,
                            children: w.Localize(
                              `#AdvancedSearch_IncludeDescriptions`,
                            ),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, F.jsxs)(nt, {
                children: [
                  !u &&
                    (0, F.jsx)(Qe, {
                      ...l,
                      filter: t.filterInGame,
                      onFilterChange: (e) => n({ ...t, filterInGame: e }),
                      suggestedInitialApp: t.filterSteam.app,
                    }),
                  u &&
                    (0, F.jsx)(et, {
                      ...l,
                      filter: t.filterSteam,
                      onFilterChange: (e) => n({ ...t, filterSteam: e }),
                      suggestedInitialApp: t.filterInGame.app,
                    }),
                ],
              }),
              (0, F.jsx)(Ge, {
                filter: t,
                onFilterChange: n,
                config: r,
                onSearch: s,
              }),
            ],
          }),
        }),
      }),
    }),
  });
}
function We(e) {
  return !!e;
}
function Ge(e) {
  let { filter: t, onFilterChange: n, config: r, onSearch: i } = e,
    a = t.bSteamItems,
    [o, s] = (0, P.useState)(!1),
    c = () => {
      n(
        a
          ? {
              ...t,
              strSearch: ``,
              filterSteam: {
                ...t.filterSteam,
                facets: {},
                price: [0, r.maxPrice],
              },
            }
          : {
              ...t,
              strSearch: ``,
              filterInGame: {
                ...t.filterInGame,
                facets: {},
                price: [0, r.maxPrice],
              },
            },
      );
    },
    l = a ? t.filterSteam : t.filterInGame,
    u =
      l.price[0] !== 0 ||
      l.price[1] !== r.maxPrice ||
      Object.keys(l.facets).length > 0,
    d =
      !t.strSearch &&
      !l.app &&
      !Object.keys(l.facets).length &&
      l.price[0] === 0 &&
      l.price[1] === r.maxPrice,
    f = () => {
      (s(!0), i(t, r));
    },
    p = N(`sm`),
    m = (0, F.jsx)(ve, {
      type: `submit`,
      onClick: f,
      disabled: o || d,
      children: w.Localize(`#AdvancedSearch_Search`),
    });
  return (0, F.jsxs)(D, {
    justify: p ? `between` : void 0,
    marginTop: X,
    direction: p ? `row` : `column`,
    gap: `2`,
    children: [
      r.bNewMarket
        ? (0, F.jsx)(`div`, {})
        : (0, F.jsx)(D, {
            gap: `2`,
            align: `center`,
            justify: `between`,
            children: (0, F.jsx)(`a`, {
              href: `${A.COMMUNITY_BASE_URL}groups/community_market/discussions/`,
              className: C,
              children: w.Localize(`#AdvancedSearch_BetaTag`),
            }),
          }),
      p &&
        (0, F.jsxs)(D, {
          gap: X,
          justify: `end`,
          children: [
            p &&
              (0, F.jsx)(ve, {
                color: `dull`,
                variant: `ghost`,
                onClick: c,
                disabled: !u,
                children: w.Localize(`#AdvancedSearch_Reset`),
              }),
            m,
          ],
        }),
      !p && m,
    ],
  });
}
function Ke(e) {
  let { value: t, onTextChange: n, app: r } = e,
    [i, a] = (0, P.useState)(!0);
  return (0, F.jsx)(qe, {
    radius: `full`,
    variant: `inset`,
    app: i ? r : void 0,
    onClearApp: () => a(!1),
    value: t,
    onTextChange: n,
  });
}
function qe(e) {
  let {
      value: t,
      onTextChange: r,
      app: i,
      onClearApp: a,
      popoverWidth: o,
      ...s
    } = e,
    c = V(),
    l = i?.appid,
    d = !!t && t.length > 2,
    f = n({
      queryKey: [`market_search_suggestions`, t, l],
      queryFn: async () =>
        await (
          await fetch(
            `/market/searchsuggestionsresults?q=${t}${l ? `&appid=${l}` : ``}${c ? `&debug=1` : ``}`,
          )
        ).json(),
      placeholderData: (e) => e,
      enabled: d,
      staleTime: c ? 0 : 1 / 0,
    }),
    p = f.data?.apps || [],
    m = (f.data?.results || []).slice(0, 10),
    h = I({
      onTextChange: r,
      suggestions: p
        .map((e) => `app|${e.appid}`)
        .concat(m.map((e) => `item|${e.market_hash_name}`)),
      onSuggestionSelected: (e, t) => {
        t.preventDefault();
        let n = e.indexOf(`|`);
        if (n === -1) return;
        let r = e.slice(0, n),
          i = e.slice(n + 1);
        if (r === `item`) {
          let e = m.find((e) => e.market_hash_name === i);
          e && (window.location.href = S.Item(e.app_id, e.market_hash_name));
        } else if (r === `app`) {
          let e = p.find((e) => e.appid === Number(i));
          e &&
            (window.location.href = S.Search({ search: `appid=${e.appid}` }));
        }
      },
    }),
    [g, ee] = (0, P.useState)(!1),
    [_, v] = (0, P.useState)(!1),
    y = g || !_,
    b = ce(
      (0, P.useCallback)((e) => {
        let t = e.contentRect.width < 300;
        ee(t);
      }, []),
    ),
    x = i
      ? (0, F.jsxs)(D, {
          cursor: `pointer`,
          radius: s.radius || `sm`,
          background: `dull-6`,
          paddingY: `1`,
          paddingX: `2`,
          align: `center`,
          gap: `1`,
          role: `button`,
          maxWidth: `24ch`,
          onMouseDown: a,
          children: [
            (0, F.jsx)(u, {
              height: `20px`,
              objectFit: `contain`,
              src: i.icon,
              alt: ``,
            }),
            (0, F.jsx)(Je, { visible: !y, children: i.name }),
            (0, F.jsx)(ie, {}),
          ],
        })
      : null,
    C =
      i && !y
        ? w.Localize(`#AdvancedSearch_TextSearch_PlaceholderWithApp`, i.name)
        : w.Localize(`#AdvancedSearch_TextSearch_Placeholder`);
  return (0, F.jsxs)(L.Root, {
    state: h,
    popoverWidth: o,
    children: [
      (0, F.jsx)(L.TextInput, {
        value: t,
        placeholder: C,
        ...s,
        title: w.Localize(`#AdvancedSearch_TextSearch_Tooltip`),
        beforeContent: x,
        ref: b,
        onFocus: () => v(!0),
        onBlur: () => v(!1),
        maxLength: 90,
        clearable: !0,
      }),
      (0, F.jsxs)(L.Suggestions, {
        children: [
          d && p.map((e) => (0, F.jsx)(Xe, { ...e }, e.appid)),
          d &&
            m.map((e, t) =>
              (0, F.jsx)(
                Ye,
                {
                  name: e.market_name,
                  hashName: e.market_hash_name,
                  appName: e.app_name,
                  appid: e.app_id,
                  img: e.icon_url,
                  searchScore: e.search_score,
                },
                e.market_hash_name + t,
              ),
            ),
        ],
      }),
    ],
  });
}
function Je(e) {
  let { visible: t, children: n } = e;
  return (0, F.jsx)(M, {
    className: f,
    "data-visible": !!t,
    children: (0, F.jsx)(O, { truncate: !0, children: n }),
  });
}
function Ye(e) {
  let {
      name: t,
      hashName: n,
      img: r,
      appName: i,
      searchScore: a,
      appid: o,
    } = e,
    s = V();
  return (0, F.jsxs)(L.Suggestion, {
    value: `item|${n}`,
    render: (e, t) =>
      (0, F.jsx)(Ze, { focused: t.focused, link: S.Item(o, n), ...e }),
    children: [
      (0, F.jsx)(`img`, {
        style: {
          margin: `8px`,
          height: `60px`,
          width: `60px`,
          objectFit: `contain`,
          filter: `drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )`,
        },
        src: r,
        alt: ``,
      }),
      (0, F.jsxs)(D, {
        direction: `column`,
        gap: `1`,
        minWidth: `0`,
        children: [
          (0, F.jsx)(O, {
            size: `3`,
            weight: `medium`,
            truncate: !0,
            contrast: `title`,
            children: t,
          }),
          (0, F.jsx)(O, { size: `1`, truncate: !0, children: i }),
        ],
      }),
      s &&
        (0, F.jsx)(F.Fragment, {
          children: a > 0 ? (0, F.jsx)(O, { size: `1`, children: a }) : null,
        }),
    ],
  });
}
function Xe(e) {
  let { name: t, icon: n, appid: r } = e;
  return (0, F.jsxs)(L.Suggestion, {
    value: `app|${r}`,
    render: (e, t) =>
      (0, F.jsx)(Ze, {
        focused: t.focused,
        link: S.Search({ search: `appid=${r}` }),
        ...e,
      }),
    children: [
      (0, F.jsx)(`img`, {
        style: {
          margin: `8px`,
          height: `24px`,
          width: `24px`,
          objectFit: `contain`,
          filter: `drop-shadow( 0 0 1px rgba( 0, 0, 0, .5) )`,
        },
        src: n,
        alt: ``,
      }),
      (0, F.jsx)(D, {
        direction: `column`,
        gap: `1`,
        minWidth: `0`,
        children: (0, F.jsx)(O, {
          size: `2`,
          weight: `medium`,
          truncate: !0,
          contrast: `title`,
          children: t,
        }),
      }),
    ],
  });
}
function Ze(e) {
  let { focused: t, link: n, ...r } = e;
  return (0, F.jsx)(`a`, {
    href: n,
    className: p,
    children: (0, F.jsx)(D, {
      align: `center`,
      gap: `2`,
      className: ee,
      radius: `sm`,
      margin: `2`,
      "data-focused": t,
      paddingLeft: `2`,
      ...r,
    }),
  });
}
function Qe(e) {
  let {
      rgApps: t = [],
      rgAppData: n = {},
      filter: r,
      onFilterChange: i,
      suggestedInitialApp: a,
    } = e,
    [o, s] = (0, P.useState)(!1);
  (0, P.useEffect)(() => {
    o || (s(!0), a && n[a.appid] && i({ ...r, app: n[a.appid] }));
  }, [i, r, a, n, o]);
  let c = !r.app && o,
    l = ft(c),
    u = (e) => i({ ...r, app: n[e] || null, facets: {} }),
    d = (0, P.useMemo)(
      () => t.filter((e) => e !== Q && n[e]).map((e) => n[e]),
      [t, n],
    );
  return (0, F.jsxs)(F.Fragment, {
    children: [
      (0, F.jsx)(pt, {
        apps: d,
        selectedApp: r.app,
        onSelectionChange: (e) => i({ ...r, app: e, facets: {} }),
      }),
      c &&
        (0, F.jsx)(tt, {
          loading: l.isLoading,
          apps: l.data?.rgInGame,
          filterBy: t,
          onSelect: u,
        }),
      !!r.app &&
        (0, F.jsx)(st, { appid: r.app.appid, state: r, onStateChange: i }),
    ],
  });
}
var Q = 753,
  $e = `Game`;
function et(e) {
  let { filter: t, onFilterChange: n, suggestedInitialApp: r } = e,
    [i, a] = (0, P.useState)(!1),
    o = !t.app && i,
    s = ft(o),
    c = ze(),
    { facets: l = {}, rgApps: u, mapAppIDs: d } = c.data || {},
    f = !t.facets.Event || Object.keys(t.facets).length === 0;
  if (
    ((0, P.useEffect)(() => {
      !i && d && (a(!0), r && d[r.appid] && n({ ...t, app: r }));
    }, [i, r, d, n, t]),
    c.isLoading)
  )
    return (0, F.jsx)(_t, {});
  if (c.isError || !c.data || !u || !l)
    return (0, F.jsx)($, {
      children: (0, F.jsx)(O, {
        size: `4`,
        children: w.Localize(`#AdvancedSearch_FacetLoadError`),
      }),
    });
  let p = (e) =>
      n({ ...t, app: u.find((t) => t.appid === e) || null, facets: {} }),
    m = s.data?.rgPlaytime.length ? s.data?.rgPlaytime : s.data?.rgInGame;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      f &&
        (0, F.jsx)(pt, {
          apps: u,
          selectedApp: t.app,
          onSelectionChange: (e) => n({ ...t, app: e, facets: {} }),
        }),
      f &&
        o &&
        (0, F.jsx)(tt, {
          loading: s.isLoading,
          apps: m,
          filterBy: d,
          onSelect: p,
        }),
      (0, F.jsx)(ke, { marginTop: `3`, facets: l, state: t, onStateChange: n }),
    ],
  });
}
function tt(e) {
  let { apps: t = [], filterBy: n = {}, onSelect: r, loading: i } = e,
    a = !N(`sm`),
    o = (0, P.useMemo)(
      () =>
        Array.isArray(n) ? n.reduce((e, t) => ({ ...e, [t]: !0 }), {}) : n,
      [n],
    ),
    s = t.filter(({ appid: e }) => o[e]).slice(0, 8),
    c = (e, t) => {
      (e === ` ` || e === `Enter`) && r(t);
    },
    l = [];
  if (i)
    for (let e = 0; e < 20; e++)
      l.push((0, F.jsx)(ne, { width: `92px`, height: `138px` }, e));
  let u = me.logged_in,
    [d, f] = (0, P.useState)(null),
    p = ce(f),
    h = s;
  if (!a) {
    let e = d ? Math.floor((d.contentRect.width - 10) / 104) : 0;
    ((h = h.slice(0, e)), (l = l.slice(0, e)));
  }
  return (0, F.jsxs)(D, {
    direction: `column`,
    marginTop: `3`,
    marginBottom: `2`,
    children: [
      (0, F.jsx)(O, {
        weight: `medium`,
        size: `3`,
        contrast: `title`,
        children: u
          ? w.Localize(`#AdvancedSearch_AppSelect_YourGames`)
          : w.Localize(`#AdvancedSearch_AppSelect_PopularGames`),
      }),
      (0, F.jsxs)(`div`, {
        className: de(m, a && `Ykg3xjFS3hs-`),
        ref: p,
        children: [
          !i &&
            h.map((e) =>
              (0, F.jsx)(
                M,
                {
                  onClick: () => r(e.appid),
                  tabIndex: 0,
                  onKeyDown: (t) => c(t.key, e.appid),
                  role: `button`,
                  width: `92px`,
                  height: `138px`,
                  flexGrow: `1`,
                  flexBasis: `92px`,
                  children: (0, F.jsx)(`img`, {
                    src: e.img,
                    alt: e.name,
                    style: { width: `92px` },
                  }),
                },
                e.appid,
              ),
            ),
          i && l,
        ],
      }),
    ],
  });
}
function nt(e) {
  return (0, F.jsx)(D, {
    minHeight: `min(400px, 30vh)`,
    direction: `column`,
    children: e.children,
  });
}
function rt(e) {
  let t = {
      strSearch: ``,
      bSearchDescriptions: e.bSearchDescriptions,
      filterInGame: {
        app: null,
        facets: {},
        accessories: {},
        properties: {},
        price: [0, e.config.maxPrice],
      },
      filterSteam: {
        app: null,
        facets: {},
        accessories: {},
        properties: {},
        price: [0, e.config.maxPrice],
      },
      bSteamItems: !1,
    },
    n = t.filterInGame,
    { strQuery: r, unFilterApp: i, rgFilterData: a, rgAppData: o = {} } = e;
  (typeof i == `number` &&
    o[i] &&
    (i === Q ? ((t.bSteamItems = !0), (n = t.filterSteam)) : (n.app = o[i])),
    typeof r == `string` && (t.strSearch = r));
  let s = it(a);
  if (
    (s && (n.facets = s),
    typeof e.unFilterMinPrice == `number` &&
      e.unFilterMinPrice > 0 &&
      (n.price[0] = e.unFilterMinPrice),
    typeof e.unFilterMaxPrice == `number` &&
      e.unFilterMaxPrice < e.config.maxPrice &&
      (n.price[1] = e.unFilterMaxPrice),
    t.bSteamItems && a && a[$e] && n.facets.Game)
  ) {
    let e = Object.keys(n.facets.Game)[0],
      t = a[$e].tags;
    if (t && e) {
      let r = t[e];
      if (r) {
        let t = parseInt(e.slice(e.indexOf(`_`) + 1));
        isNaN(t) ||
          ((n.app = { appid: t, name: r.localized_name, icon: `` }),
          delete n.facets.Game);
      }
    }
  }
  return { state: t, config: e.config };
}
function it(e) {
  if (!e || typeof e != `object`) return null;
  let t = {};
  for (let n of Object.keys(e)) {
    let r = e[n];
    if (r && typeof r == `object`)
      for (let e of Object.keys(r.tags)) {
        let n = r.tags[e];
        n &&
          typeof n == `object` &&
          n.selected === !0 &&
          (t[r.name] || (t[r.name] = {}), (t[r.name][e] = !0));
      }
  }
  return t;
}
function at(e) {
  let t = { ...e, facets: { ...e.facets } };
  return (
    e.app && (t.facets.Game = { [`app_${e.app.appid}`]: !0 }),
    (t.app = { appid: Q, name: ``, icon: `` }),
    t
  );
}
function ot(e, t) {
  let {
      strSearch: n,
      bSearchDescriptions: r,
      bSteamItems: i,
      filterInGame: a,
      filterSteam: o,
    } = e,
    s = i ? at(o) : a,
    {
      app: c,
      facets: l,
      accessories: u,
      price: [d, f],
    } = s,
    p = new FormData();
  (c && p.set(`appid`, c.appid.toString()),
    n && p.set(`q`, n),
    n && r && We(s.app) && p.set(`descriptions`, `1`));
  for (let e of Object.keys(l))
    if (l[e])
      for (let t of Object.keys(l[e]))
        l[e][t] &&
          (He()
            ? p.append(`category_${c.appid}_${e}[]`, `tag_${t}`)
            : p.append(`category_${e}[]`, t));
  for (let e of Object.keys(u))
    if (u[e])
      for (let t of Object.keys(u[e]))
        u[e][t] && p.append(`accessory_${e}[]`, t);
  return (
    d > 0 && p.append(`price_min`, d.toString()),
    f > d && f < t.maxPrice && p.append(`price_max`, f.toString()),
    S.Search({ search: new URLSearchParams(p) })
  );
}
function $(e) {
  return (0, F.jsx)(D, {
    flexGrow: `1`,
    radius: `sm`,
    direction: `column`,
    align: `center`,
    justify: `center`,
    marginTop: `2`,
    className: y,
    children: (0, F.jsx)(O, {
      align: `center`,
      as: `div`,
      marginTop: X,
      children: e.children,
    }),
  });
}
function st(e) {
  let { appid: t, ...n } = e,
    r = Le(t),
    i = dt(t);
  if (r.isLoading || i.isLoading) return (0, F.jsx)(_t, {});
  if (r.isError || !r.data || i.isError || !i.data)
    return (0, F.jsx)($, {
      children: (0, F.jsx)(O, {
        size: `4`,
        children: w.Localize(`#AdvancedSearch_FacetLoadError`),
      }),
    });
  let a = ct(t);
  return (0, F.jsx)(a, { appid: t, facets: r.data, accessories: i.data, ...n });
}
function ct(e) {
  return _(e) && A.EUNIVERSE === 1 ? b : lt;
}
function lt(e) {
  let { appid: t, facets: n, ...r } = e,
    i = H(t, n);
  return i.length === 0
    ? (0, F.jsx)(F.Fragment, {
        children: (0, F.jsxs)($, {
          children: [
            (0, F.jsx)(O, {
              align: `center`,
              as: `div`,
              marginTop: X,
              size: `7`,
              weight: `heavy`,
              children: w.Localize(`#AdvancedSearch_NoFacetsSearch`),
            }),
            (0, F.jsx)(O, {
              align: `center`,
              as: `div`,
              marginTop: X,
              size: `4`,
              children: w.Localize(`#AdvancedSearch_NoFacets`),
            }),
          ],
        }),
      })
    : (0, F.jsx)(W, { facets: i, ...r });
}
function ut(e) {
  return {
    queryKey: [`marketaccessories`, e],
    queryFn: async () => {
      let t = await fetch(`${A.COMMUNITY_BASE_URL}market/appaccessories/${e}`);
      if (!t || !t.ok)
        throw Error(`Failed to load market filters for app ${e}`);
      let n = await t.json();
      if (!n.success || !n.facets)
        throw Error(`Loaded malformed market filters for app ${e}`);
      return n.facets.map((e) => ({
        facets: [],
        internal_type: ``,
        localized_type: ``,
        ...e,
      }));
    },
    enabled: !!e,
  };
}
function dt(e) {
  return n(ut(e));
}
function ft(e = !0) {
  let { suggestedApps: t } = (0, P.useContext)(Z);
  return n({
    queryKey: [`marketsuggestedapps`],
    queryFn: async () => {
      let e = await fetch(`${A.COMMUNITY_BASE_URL}market/suggestedapps`);
      if (!e || !e.ok) throw Error(`Failed to load suggseted market apps`);
      return await e.json();
    },
    retry: !1,
    enabled: e,
    initialData: t,
  });
}
function pt(e) {
  let {
      selectedApp: t,
      apps: n,
      onSelectionChange: r,
      size: i = `3`,
      clearable: s = !0,
      triggerRender: c,
      triggerContent: l,
      popoverWidth: u,
    } = e,
    d = a({
      rgOptions: n,
      selectedValue: t || null,
      onSelectionChange: r,
      filter: (e, t) =>
        t && t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase()),
      filterPlaceholder: w.Localize(
        `#AdvancedSearch_AppSelect_FilterPlaceholder`,
      ),
    });
  return (0, F.jsxs)(o.Root, {
    state: d,
    size: i,
    radius: `sm`,
    marginBottom: `2`,
    clearable: s,
    popoverWidth: u,
    children: [
      c && (0, F.jsx)(o.Trigger, { render: c, children: l }),
      !c &&
        (0, F.jsxs)(o.Trigger, {
          children: [
            t && (0, F.jsx)(mt, { app: t, size: i }),
            !t &&
              (0, F.jsx)(o.Placeholder, {
                weight: `medium`,
                contrast: `title`,
                children: w.Localize(`#AdvancedSearch_AppSelect_Placeholder`),
              }),
          ],
        }),
      (0, F.jsx)(o.VirtualizedOptions, {
        estimateSize: () => 48,
        items: d.rgFilteredOptions,
        renderItem: (e, n) =>
          (0, F.jsx)(
            o.VirtualizedOption,
            {
              value: e,
              virtualItem: n,
              children: (0, F.jsx)(mt, { app: e, active: e === t, size: i }),
            },
            e.appid,
          ),
      }),
    ],
  });
}
function mt(e) {
  let {
    app: { icon: t, name: n },
    active: r,
    size: i,
  } = e;
  return (0, F.jsxs)(D, {
    align: `center`,
    gap: `2`,
    children: [
      t && (0, F.jsx)(gt, { icon: t, size: i }),
      (0, F.jsx)(O, {
        color: r ? `accent-8` : void 0,
        contrast: r ? void 0 : `title`,
        children: n,
      }),
    ],
  });
}
var ht = {};
function gt(e) {
  let { icon: t, size: n } = e,
    [r, i] = (0, P.useState)(!!ht[t]);
  ((0, P.useEffect)(() => {
    let e = !0;
    return (
      setTimeout(() => {
        e && i(!0);
      }, 100),
      () => {
        e = !1;
      }
    );
  }, []),
    r && (ht[t] = !0));
  let a = pe(n),
    o = `var(--spacing-${parseInt(a) + 3})`;
  return r
    ? (0, F.jsx)(`img`, {
        src: t,
        style: { width: o, height: o, visibility: r ? void 0 : `hidden` },
        alt: ``,
      })
    : (0, F.jsx)(M, { width: o, height: o, background: `dull-10` });
}
function _t() {
  return (0, F.jsx)(D, {
    justify: `center`,
    align: `center`,
    marginTop: `6`,
    children: (0, F.jsx)(ae, { size: `4` }),
  });
}
function vt(e) {
  let { rgApps: t, rgAppData: n, ...r } = e,
    i = (0, P.useMemo)(() => k(t || [], (e) => (n || {})[e]?.name), [t, n]);
  return (0, F.jsx)(yt, { ...r, rgApps: i, rgAppData: n });
}
function yt(e) {
  let [t, n] = (0, P.useState)(!!history.state?.bAdvancedSearch);
  return (
    (0, P.useEffect)(
      () => (
        (window.g_fnShowMarketSearch = () => n(!0)),
        (window.g_fnHideMarketSearch = () => n(!1)),
        () => {
          (delete window.g_fnShowMarketSearch,
            delete window.g_fnHideMarketSearch);
        }
      ),
      [],
    ),
    (0, P.useEffect)(() => {
      let e =
        typeof history.state == `object` && history.state ? history.state : {};
      history.replaceState({ ...e, bAdvancedSearch: t }, ``);
    }, [t]),
    (0, F.jsx)(bt, { active: t, onRequestClose: () => n(!1), ...e })
  );
}
function bt(e) {
  let { active: t, onRequestClose: n, ...r } = e,
    [i, a] = (0, P.useState)(() => rt(e)),
    o = (0, P.useCallback)((e) => a((t) => ({ ...t, state: e })), []),
    s = (e, t) => {
      window.location.href = ot(e, t);
    };
  return (0, F.jsx)(ue, {
    active: t,
    children: (0, F.jsx)(xt, {
      onRequestClose: n,
      children: (0, F.jsx)(St, {
        zoo: !0,
        children: (0, F.jsx)(Ue, {
          ...r,
          filter: i.state,
          config: i.config,
          onFilterChange: o,
          onSearch: s,
        }),
      }),
    }),
  });
}
function xt(e) {
  let { onRequestClose: t, children: n } = e,
    r = oe();
  return (0, F.jsx)(_e, {
    onEscKeypress: t,
    children: (0, F.jsx)(le, {
      bCenterVertically: !r,
      className: `DialogContentFullSize noOpinionatedGlobalStyles`,
      children: n,
    }),
  });
}
function St(e) {
  return (0, F.jsx)(he, { ...e });
}
export { St as MarketBaseUIRoot, vt as default, B as n, qe as t };
