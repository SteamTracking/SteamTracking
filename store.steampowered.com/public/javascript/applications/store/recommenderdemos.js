/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { It as t, dt as n, et as r } from "./chunk~01cfc309bf.js";
import { k as i, l as a } from "./chunk~4eed35ad1f.js";
import { r as o } from "./chunk~21cdc464a1.js";
import { t as s } from "./chunk~4d16ce5d1a.js";
import { _ as ee, i as te } from "./chunk~3720b337f3.js";
import { i as ne } from "./chunk~fc8a9e4879.js";
import {
  AS as c,
  Hv as l,
  Pc as u,
  Wv as d,
  b as f,
  bx as p,
  c as m,
  ex as h,
  fr as g,
  gt as re,
  ib as _,
  vx as v,
  zv as y,
} from "./main.js";
import b from "./chunk~ec2a077c3e.js";
import { t as x } from "./chunk~4d6f892b8c.js";
import { t as S } from "./chunk~85f65a382b.js";
var C = e(t()),
  w = e(r()),
  T = `_3qrofBB-aBQ-`,
  E = `xABO8-oxGRA-`,
  D = `fh6Buxcrbt8-`,
  O = `_2j5jZzvpJTE-`,
  k = `LuwmqeZ2qf8-`,
  A = `SqnqFBdriWw-`,
  j = `EMw4B5LOLPc-`,
  M = `CsfvVIa26qA-`,
  N = `_7oh7BX88TCE-`,
  P = `yhi-3P9hR2Y-`,
  F = `CkYKLkUv3Us-`,
  I = `pnpXcQv8pmY-`,
  L = `c3fxHWQQlC0-`,
  R = `eVV46lLoBq0-`,
  z = `_07uXB52HKbs-`,
  B = `OPtkpP5fmuc-`,
  V = `qaMMN0bGRU0-`,
  H = `VUSjpUSCHKo-`,
  ie = `RXgTvW-0muA-`,
  U = `OZS99odXDBw-`,
  W = `JnaKPJOaNwY-`,
  G = n(),
  K = (e) => {
    let t = i(e.nAppID),
      n = y(t),
      r = d(t),
      { data: a } = l(t);
    if (!n.data || !r.data) return null;
    let o = x(n.data, `header`);
    return (0, G.jsxs)(`div`, {
      className: z,
      children: [
        (0, G.jsx)(s, {
          id: t,
          children: (0, G.jsx)(`img`, { className: U, src: o }),
        }),
        (0, G.jsxs)(`div`, {
          className: H,
          children: [
            (0, G.jsx)(`div`, {
              className: ie,
              children: e.fWeight ? `${(e.fWeight * 100).toFixed(2)}%` : ``,
            }),
            (0, G.jsx)(q, { purchaseOption: a, bIsFree: !!r.data.is_free }),
          ],
        }),
      ],
    });
  },
  q = (e) =>
    e.purchaseOption
      ? (0, G.jsx)(m, {
          purchaseOption: e.purchaseOption,
          size: `inline`,
          legacyStyle: !0,
        })
      : e.bIsFree
        ? (0, G.jsx)(`div`, {
            className: W,
            children: f.Localize(`#Price_Free`),
          })
        : null,
  J = 5,
  Y = 940,
  X = (e) => {
    let t = a(Y);
    return (0, G.jsx)(`div`, {
      className: R,
      children: (0, G.jsx)(o, {
        visibleElements: J,
        disableEdgeWrap: !0,
        screenIsWide: t,
        children: e.children,
      }),
    });
  },
  Z = (e) => {
    let [t, n] = C.useState([]),
      [r, i] = C.useState([]);
    return (
      C.useEffect(() => {
        (async () => {
          let t = {
            rec: e.strName,
            max: 40,
            exclude: +!!e.bExclude,
            accountid: e.nAccountID,
          };
          try {
            let e = await w.default.get(
              `${v.STORE_BASE_URL}recommenderdemos/getlist`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.appids), i(e.data.weights));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.strName, e.nAccountID, e.bExclude]),
      (0, G.jsxs)(`div`, {
        className: A,
        children: [
          (0, G.jsx)(`div`, { className: j, children: e.strTitle }),
          (0, G.jsx)(`div`, { className: M, children: e.strSubtitle }),
          (0, G.jsx)(X, {
            children: t?.map((t, n) =>
              (0, G.jsx)(K, { nAppID: t, fWeight: r[n] }, `${e.strName}_${n}`),
            ),
          }),
        ],
      })
    );
  },
  ae = (e) =>
    (0, G.jsxs)(`div`, {
      className: A,
      children: [
        (0, G.jsx)(`div`, { className: j, children: e.strName }),
        (0, G.jsx)(`div`, {
          className: M,
          children: _(`#RecommenderDemos_ReleasedGames`),
        }),
        (0, G.jsx)(X, {
          children: e.arrPlaytimeAppIDs.map((t, n) =>
            (0, G.jsx)(K, { nAppID: t }, `${e.strName}_${n}`),
          ),
        }),
        (0, G.jsx)(`div`, { className: L }),
        (0, G.jsx)(`div`, {
          className: M,
          children: _(`#RecommenderDemos_UnreleasedGames`),
        }),
        (0, G.jsx)(X, {
          children: e.arrWishlistAppIDs.map((t, n) =>
            (0, G.jsx)(K, { nAppID: t }, `${e.strName}_${n}`),
          ),
        }),
      ],
    }),
  oe = (e) => {
    let [t, n] = C.useState(void 0);
    return (
      C.useEffect(() => {
        (async () => {
          let t = { max: 40, exclude: +!!e.bExclude, accountid: e.nAccountID };
          try {
            let e = await w.default.get(
              `${v.STORE_BASE_URL}recommenderdemos/getfests`,
              { params: t, timeout: 1e4 },
            );
            n(e.data);
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.bExclude, e.nAccountID]),
      (0, G.jsx)(`div`, {
        className: void 0,
        children: t?.map((e) =>
          (0, G.jsx)(
            ae,
            {
              strName: e.title,
              nStartTime: e.start_date,
              nEndTime: e.end_date,
              arrPlaytimeAppIDs: e.playtime_appids,
              arrWishlistAppIDs: e.wishlist_appids,
            },
            `Fest_${e.name}`,
          ),
        ),
      })
    );
  },
  se = 1,
  ce = { 1: `Publisher`, 2: `Franchise`, 3: `Developer` },
  le = {
    section_type: `crosspromotesalepage`,
    capsules: [],
    events: [],
    links: [],
    localized_label: [],
    default_label: ``,
  },
  ue = (e) => {
    let { sale: t } = e,
      n = ce[t.host] ?? `Creator`;
    return (0, G.jsxs)(`div`, {
      children: [
        (0, G.jsxs)(`div`, {
          className: M,
          children: [
            (0, G.jsx)(`a`, { href: t.url, children: t.name || t.url }),
            ` - ${n} home - Score ${t.score.toFixed(3)}`,
          ],
        }),
        (0, G.jsx)(`div`, {
          className: V,
          children: t.appids.map((e) => (0, G.jsx)(K, { nAppID: e }, e)),
        }),
      ],
    });
  },
  de = (e) => {
    let { sale: t } = e,
      { eventModel: n } = ne(t.clan_account_id, t.clan_event_gid),
      r = c(v.LANGUAGE),
      i = ee(n, r),
      a = h();
    return (0, G.jsxs)(`div`, {
      children: [
        (0, G.jsx)(`div`, {
          className: M,
          children: `${t.name || t.url} - Score ${t.score.toFixed(3)}`,
        }),
        n &&
          (0, G.jsx)(te, {
            event: n,
            section: le,
            language: r,
            bInGamepadUI: a,
            placeholderHeight: 300,
            promotedSaleEvent: i,
            nItemsToFeature: t.appids.length,
            children: (0, G.jsx)(`div`, {
              className: `qaMMN0bGRU0-`,
              children: t.appids.map((e) => (0, G.jsx)(K, { nAppID: e }, e)),
            }),
          }),
      ],
    });
  },
  fe = (e) =>
    e.sale.kind === se
      ? (0, G.jsx)(ue, { sale: e.sale })
      : (0, G.jsx)(de, { sale: e.sale }),
  pe = (e) => {
    let [t, n] = C.useState(void 0),
      [r, i] = C.useState(void 0);
    return (
      C.useEffect(() => {
        (async () => {
          let t = {
            max_sales: 5,
            max_apps: 5,
            accountid: e.nAccountID,
            include_creator_homes: 1,
          };
          try {
            let e = await w.default.get(
              `${v.STORE_BASE_URL}recommenderdemos/getcreatorsales`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.sales), i(e.data.error));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.nAccountID]),
      (0, G.jsxs)(`div`, {
        className: A,
        children: [
          (0, G.jsx)(`div`, {
            className: j,
            children: _(`#RecommenderDemos_CreatorSales`),
          }),
          (0, G.jsx)(`div`, {
            className: M,
            children: _(`#RecommenderDemos_CreatorSales_Desc`),
          }),
          r && (0, G.jsx)(`div`, { className: `CsfvVIa26qA-`, children: r }),
          (0, G.jsx)(`div`, {
            className: B,
            children: t?.map((e) => (0, G.jsx)(fe, { sale: e }, e.url)),
          }),
        ],
      })
    );
  },
  me = { no_scheduled: `1` },
  Q = { no_scheduled: `1`, as_anon: `1` },
  $ = (e) => {
    let t = C.useMemo(
      () =>
        e.nAccountID
          ? { ...e.switches, accountid: String(e.nAccountID) }
          : e.switches,
      [e.switches, e.nAccountID],
    );
    return (0, G.jsxs)(`div`, {
      className: A,
      children: [
        (0, G.jsx)(`div`, { className: j, children: e.strTitle }),
        (0, G.jsx)(`div`, { className: M, children: e.strSubtitle }),
        (0, G.jsx)(`div`, {
          className: F,
          children: (0, G.jsx)(b, { switches: t }),
        }),
      ],
    });
  },
  he = {
    Wishlist: `#RecommenderDemos_DiscountReason_Wishlist`,
    FirstTimeOnSale: `#RecommenderDemos_DiscountReason_FirstTimeOnSale`,
    LargestDiscount: `#RecommenderDemos_DiscountReason_LargestDiscount`,
    EndingSoon: `#RecommenderDemos_DiscountReason_EndingSoon`,
    NewlyOnSale: `#RecommenderDemos_DiscountReason_NewlyOnSale`,
    WellReviewed: `#RecommenderDemos_DiscountReason_WellReviewed`,
    TopSeller: `#RecommenderDemos_DiscountReason_TopSeller`,
    HotDeal: `#RecommenderDemos_DiscountReason_HotDeal`,
    DeepDiscount: `#RecommenderDemos_DiscountReason_DeepDiscount`,
    PopularInRegion: `#RecommenderDemos_DiscountReason_PopularInRegion`,
    JustUpdated: `#RecommenderDemos_DiscountReason_JustUpdated`,
  };
function ge(e) {
  let t = he[e];
  return t ? _(t) : e;
}
var _e = (e) => {
    let [t, n] = C.useState(void 0),
      [r, i] = C.useState(void 0);
    return (
      C.useEffect(() => {
        (async () => {
          let t = { accountid: e.nAccountID };
          try {
            let e = await w.default.get(
              `${v.STORE_BASE_URL}recommenderdemos/getdiscountreasons`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.reason_lists), i(e.data.error));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.nAccountID]),
      (0, G.jsxs)(`div`, {
        className: A,
        children: [
          (0, G.jsx)(`div`, {
            className: j,
            children: _(`#RecommenderDemos_DiscountReasons`),
          }),
          (0, G.jsx)(`div`, {
            className: M,
            children: _(`#RecommenderDemos_DiscountReasons_Desc`),
          }),
          r && (0, G.jsx)(`div`, { className: `CsfvVIa26qA-`, children: r }),
          t?.map((e) =>
            (0, G.jsxs)(
              `div`,
              {
                className: N,
                children: [
                  (0, G.jsx)(`div`, { className: P, children: ge(e.reason) }),
                  (0, G.jsx)(X, {
                    children: e.appids.map((e) =>
                      (0, G.jsx)(K, { nAppID: e }, e),
                    ),
                  }),
                ],
              },
              e.reason,
            ),
          ),
        ],
      })
    );
  },
  ve = () => {
    let [e, t] = C.useState(!1),
      [n, r] = C.useState(0),
      [i, a] = C.useState(``),
      [o, s] = C.useState(!0);
    return p.logged_in
      ? (0, G.jsx)(re, {
          controller: `recommenderdemos`,
          method: `default`,
          feature: `capsule`,
          children: (0, G.jsxs)(`div`, {
            className: E,
            children: [
              (0, G.jsx)(`div`, { className: T, children: `(Valve-Only)` }),
              (0, G.jsxs)(`div`, {
                className: D,
                children: [
                  (0, G.jsxs)(`div`, {
                    className: O,
                    children: [
                      (0, G.jsx)(`input`, {
                        type: `text`,
                        value: i,
                        onChange: (e) => a(e.target.value),
                      }),
                      (0, G.jsx)(g, {
                        className: k,
                        onClick: () => {
                          isNaN(parseInt(i)) || (t(!0), r(parseInt(i)));
                        },
                        children: `Use AccountID`,
                      }),
                      (0, G.jsx)(g, {
                        disabled: !e,
                        className: k,
                        onClick: () => {
                          (t(!1), r(0), a(``));
                        },
                        children: `Clear`,
                      }),
                    ],
                  }),
                  e &&
                    (0, G.jsxs)(`div`, {
                      className: `gh60-zeqs54-`,
                      children: [
                        _(`#RecommenderDemos_OverrideAccountID`),
                        (0, G.jsx)(`div`, {
                          className: `NXkGB7Y5tWc-`,
                          children: n,
                        }),
                      ],
                    }),
                  (0, G.jsxs)(`div`, {
                    className: I,
                    children: [
                      (0, G.jsx)(`input`, {
                        type: `checkbox`,
                        id: `exclude_owned_wishlisted`,
                        checked: o,
                        onChange: () => s(!o),
                      }),
                      (0, G.jsx)(`label`, {
                        htmlFor: `exclude_owned_wishlisted`,
                        children: _(`#RecommenderDemos_Exclude`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `WishlistsOneWeek`,
                strTitle: _(`#RecommenderDemos_HotWishlists`),
                strSubtitle: _(`#RecommenderDemos_HotWishlists_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `NextFestPopular`,
                strTitle: _(`#RecommenderDemos_NextFestPopular`),
                strSubtitle: _(`#RecommenderDemos_NextFestDesc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `NextFestInversePopular`,
                strTitle: _(`#RecommenderDemos_NextFestInversePopular`),
                strSubtitle: _(`#RecommenderDemos_NextFestDesc`),
              }),
              (0, G.jsx)(oe, { nAccountID: n, bExclude: o }),
              (0, G.jsx)(pe, { nAccountID: n }),
              (0, G.jsx)($, {
                nAccountID: n,
                switches: me,
                strTitle: _(`#RecommenderDemos_DiscountsNoScheduled`),
                strSubtitle: _(`#RecommenderDemos_DiscountsNoScheduled_Desc`),
              }),
              (0, G.jsx)($, {
                switches: Q,
                strTitle: _(`#RecommenderDemos_DiscountsAnonymous`),
                strSubtitle: _(`#RecommenderDemos_DiscountsAnonymous_Desc`),
              }),
              (0, G.jsx)(_e, { nAccountID: n }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecAllTime`,
                strTitle: _(`#RecommenderDemos_RecAllTime`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecFiveYear`,
                strTitle: _(`#RecommenderDemos_RecFiveYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecTwoYear`,
                strTitle: _(`#RecommenderDemos_RecTwoYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecOneYear`,
                strTitle: _(`#RecommenderDemos_RecOneYear`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecSixMonths`,
                strTitle: _(`#RecommenderDemos_RecSixMonths`),
                strSubtitle: _(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecEmbedding`,
                strTitle: _(`#RecommenderDemos_RecEmbedding`),
                strSubtitle: ``,
              }),
            ],
          }),
        })
      : (0, G.jsx)(`div`, {
          className: void 0,
          children: (0, G.jsxs)(`div`, {
            className: void 0,
            children: [
              (0, G.jsx)(`div`, {
                className: void 0,
                children: _(`#LoginText`),
              }),
              (0, G.jsx)(`div`, {
                className: u(`btn_green_white_innerfade`, ` btn_medium`),
                onClick: S,
                children: (0, G.jsx)(`span`, { children: _(`#LoginButton`) }),
              }),
            ],
          }),
        });
  };
export { ve as default };
