/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, ft as n, tt as r } from "./libraries.js";
import { V as i } from "./storelink.js";
import { r as a, u as o } from "./carouselarrows.js";
import { t as s } from "./storegamehover.js";
import { t as c } from "./crosspromotesalelayouts.js";
import { i as l } from "./partnereventstore.js";
import {
  Av as ee,
  Bb as u,
  Cc as d,
  Ov as f,
  Tv as p,
  Wy as m,
  b as h,
  c as g,
  hS as _,
  ht as v,
  ix as y,
  ox as te,
  rr as b,
} from "./main.js";
import x from "./discountsandeventshome.js";
import { t as S } from "./assetutils.js";
import { t as C } from "./partnereventslogin.js";
var w = e(t()),
  T = e(r()),
  E = `_3qrofBB-aBQ-`,
  D = `xABO8-oxGRA-`,
  O = `fh6Buxcrbt8-`,
  k = `_2j5jZzvpJTE-`,
  A = `LuwmqeZ2qf8-`,
  j = `SqnqFBdriWw-`,
  M = `EMw4B5LOLPc-`,
  N = `CsfvVIa26qA-`,
  P = `_7oh7BX88TCE-`,
  F = `yhi-3P9hR2Y-`,
  I = `CkYKLkUv3Us-`,
  L = `pnpXcQv8pmY-`,
  R = `c3fxHWQQlC0-`,
  z = `eVV46lLoBq0-`,
  B = `_07uXB52HKbs-`,
  ne = `OPtkpP5fmuc-`,
  V = `VUSjpUSCHKo-`,
  H = `RXgTvW-0muA-`,
  U = `OZS99odXDBw-`,
  W = `JnaKPJOaNwY-`,
  G = n(),
  K = (e) => {
    let t = i(e.nAppID),
      n = p(t),
      r = ee(t),
      { data: a } = f(t);
    if (!n.data || !r.data) return null;
    let o = S(n.data, `header`);
    return (0, G.jsxs)(`div`, {
      className: B,
      children: [
        (0, G.jsx)(s, {
          id: t,
          children: (0, G.jsx)(`img`, { className: U, src: o }),
        }),
        (0, G.jsxs)(`div`, {
          className: V,
          children: [
            (0, G.jsx)(`div`, {
              className: H,
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
      ? (0, G.jsx)(g, {
          purchaseOption: e.purchaseOption,
          size: `inline`,
          legacyStyle: !0,
        })
      : e.bIsFree
        ? (0, G.jsx)(`div`, {
            className: W,
            children: h.Localize(`#Price_Free`),
          })
        : null,
  J = 5,
  Y = 940,
  X = (e) => {
    let t = o(Y);
    return (0, G.jsx)(`div`, {
      className: z,
      children: (0, G.jsx)(a, {
        visibleElements: J,
        disableEdgeWrap: !0,
        screenIsWide: t,
        children: e.children,
      }),
    });
  },
  Z = (e) => {
    let [t, n] = w.useState([]),
      [r, i] = w.useState([]);
    return (
      w.useEffect(() => {
        (async () => {
          let t = {
            rec: e.strName,
            max: 40,
            exclude: +!!e.bExclude,
            accountid: e.nAccountID,
          };
          try {
            let e = await T.default.get(
              `${y.STORE_BASE_URL}recommenderdemos/getlist`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.appids), i(e.data.weights));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.strName, e.nAccountID, e.bExclude]),
      (0, G.jsxs)(`div`, {
        className: j,
        children: [
          (0, G.jsx)(`div`, { className: M, children: e.strTitle }),
          (0, G.jsx)(`div`, { className: N, children: e.strSubtitle }),
          (0, G.jsx)(X, {
            children: t?.map((t, n) =>
              (0, G.jsx)(K, { nAppID: t, fWeight: r[n] }, `${e.strName}_${n}`),
            ),
          }),
        ],
      })
    );
  },
  re = (e) =>
    (0, G.jsxs)(`div`, {
      className: j,
      children: [
        (0, G.jsx)(`div`, { className: M, children: e.strName }),
        (0, G.jsx)(`div`, {
          className: N,
          children: m(`#RecommenderDemos_ReleasedGames`),
        }),
        (0, G.jsx)(X, {
          children: e.arrPlaytimeAppIDs.map((t, n) =>
            (0, G.jsx)(K, { nAppID: t }, `${e.strName}_${n}`),
          ),
        }),
        (0, G.jsx)(`div`, { className: R }),
        (0, G.jsx)(`div`, {
          className: N,
          children: m(`#RecommenderDemos_UnreleasedGames`),
        }),
        (0, G.jsx)(X, {
          children: e.arrWishlistAppIDs.map((t, n) =>
            (0, G.jsx)(K, { nAppID: t }, `${e.strName}_${n}`),
          ),
        }),
      ],
    }),
  ie = (e) => {
    let [t, n] = w.useState(void 0);
    return (
      w.useEffect(() => {
        (async () => {
          let t = { max: 40, exclude: +!!e.bExclude, accountid: e.nAccountID };
          try {
            let e = await T.default.get(
              `${y.STORE_BASE_URL}recommenderdemos/getfests`,
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
            re,
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
  ae = {
    section_type: `crosspromotesalepage`,
    capsules: [],
    events: [],
    links: [],
    localized_label: [],
    default_label: ``,
  },
  oe = (e) => {
    let { sale: t } = e,
      { eventModel: n } = l(t.clan_account_id, t.clan_event_gid),
      r = u();
    return (0, G.jsxs)(`div`, {
      children: [
        (0, G.jsx)(`div`, {
          className: N,
          children: `${t.name || t.url} - Score ${t.score.toFixed(3)}`,
        }),
        n &&
          (0, G.jsx)(c, {
            event: n,
            section: ae,
            language: _(y.LANGUAGE),
            bInGamepadUI: r,
            placeholderHeight: 300,
            promotedSale: n,
            nItemsToFeature: t.appids.length,
            children: (0, G.jsx)(`div`, {
              className: `qaMMN0bGRU0-`,
              children: t.appids.map((e) => (0, G.jsx)(K, { nAppID: e }, e)),
            }),
          }),
      ],
    });
  },
  se = (e) => {
    let [t, n] = w.useState(void 0),
      [r, i] = w.useState(void 0);
    return (
      w.useEffect(() => {
        (async () => {
          let t = { max_sales: 5, max_apps: 5, accountid: e.nAccountID };
          try {
            let e = await T.default.get(
              `${y.STORE_BASE_URL}recommenderdemos/getcreatorsales`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.sales), i(e.data.error));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.nAccountID]),
      (0, G.jsxs)(`div`, {
        className: j,
        children: [
          (0, G.jsx)(`div`, {
            className: M,
            children: m(`#RecommenderDemos_CreatorSales`),
          }),
          (0, G.jsx)(`div`, {
            className: N,
            children: m(`#RecommenderDemos_CreatorSales_Desc`),
          }),
          r && (0, G.jsx)(`div`, { className: `CsfvVIa26qA-`, children: r }),
          (0, G.jsx)(`div`, {
            className: ne,
            children: t?.map((e) => (0, G.jsx)(oe, { sale: e }, e.url)),
          }),
        ],
      })
    );
  },
  Q = { no_scheduled: `1` },
  ce = { no_scheduled: `1`, as_anon: `1` },
  $ = (e) => {
    let t = w.useMemo(
      () =>
        e.nAccountID
          ? { ...e.switches, accountid: String(e.nAccountID) }
          : e.switches,
      [e.switches, e.nAccountID],
    );
    return (0, G.jsxs)(`div`, {
      className: j,
      children: [
        (0, G.jsx)(`div`, { className: M, children: e.strTitle }),
        (0, G.jsx)(`div`, { className: N, children: e.strSubtitle }),
        (0, G.jsx)(`div`, {
          className: I,
          children: (0, G.jsx)(x, { switches: t }),
        }),
      ],
    });
  },
  le = {
    Wishlist: `#RecommenderDemos_DiscountReason_Wishlist`,
    FirstTimeOnSale: `#RecommenderDemos_DiscountReason_FirstTimeOnSale`,
    LargestDiscount: `#RecommenderDemos_DiscountReason_LargestDiscount`,
    EndingSoon: `#RecommenderDemos_DiscountReason_EndingSoon`,
    NewlyOnSale: `#RecommenderDemos_DiscountReason_NewlyOnSale`,
    WellReviewed: `#RecommenderDemos_DiscountReason_WellReviewed`,
    TopSeller: `#RecommenderDemos_DiscountReason_TopSeller`,
  };
function ue(e) {
  let t = le[e];
  return t ? m(t) : e;
}
var de = (e) => {
    let [t, n] = w.useState(void 0),
      [r, i] = w.useState(void 0);
    return (
      w.useEffect(() => {
        (async () => {
          let t = { accountid: e.nAccountID };
          try {
            let e = await T.default.get(
              `${y.STORE_BASE_URL}recommenderdemos/getdiscountreasons`,
              { params: t, timeout: 1e4 },
            );
            (n(e.data.reason_lists), i(e.data.error));
          } catch (e) {
            console.error(`Error fetching data`, e);
          }
        })();
      }, [e.nAccountID]),
      (0, G.jsxs)(`div`, {
        className: j,
        children: [
          (0, G.jsx)(`div`, {
            className: M,
            children: m(`#RecommenderDemos_DiscountReasons`),
          }),
          (0, G.jsx)(`div`, {
            className: N,
            children: m(`#RecommenderDemos_DiscountReasons_Desc`),
          }),
          r && (0, G.jsx)(`div`, { className: `CsfvVIa26qA-`, children: r }),
          t?.map((e) =>
            (0, G.jsxs)(
              `div`,
              {
                className: P,
                children: [
                  (0, G.jsx)(`div`, { className: F, children: ue(e.reason) }),
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
  fe = () => {
    let [e, t] = w.useState(!1),
      [n, r] = w.useState(0),
      [i, a] = w.useState(``),
      [o, s] = w.useState(!0);
    return te.logged_in
      ? (0, G.jsx)(v, {
          controller: `recommenderdemos`,
          method: `default`,
          feature: `capsule`,
          children: (0, G.jsxs)(`div`, {
            className: D,
            children: [
              (0, G.jsx)(`div`, { className: E, children: `(Valve-Only)` }),
              (0, G.jsxs)(`div`, {
                className: O,
                children: [
                  (0, G.jsxs)(`div`, {
                    className: k,
                    children: [
                      (0, G.jsx)(`input`, {
                        type: `text`,
                        value: i,
                        onChange: (e) => a(e.target.value),
                      }),
                      (0, G.jsx)(b, {
                        className: A,
                        onClick: () => {
                          isNaN(parseInt(i)) || (t(!0), r(parseInt(i)));
                        },
                        children: `Use AccountID`,
                      }),
                      (0, G.jsx)(b, {
                        disabled: !e,
                        className: A,
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
                        m(`#RecommenderDemos_OverrideAccountID`),
                        (0, G.jsx)(`div`, {
                          className: `NXkGB7Y5tWc-`,
                          children: n,
                        }),
                      ],
                    }),
                  (0, G.jsxs)(`div`, {
                    className: L,
                    children: [
                      (0, G.jsx)(`input`, {
                        type: `checkbox`,
                        id: `exclude_owned_wishlisted`,
                        checked: o,
                        onChange: () => s(!o),
                      }),
                      (0, G.jsx)(`label`, {
                        htmlFor: `exclude_owned_wishlisted`,
                        children: m(`#RecommenderDemos_Exclude`),
                      }),
                    ],
                  }),
                ],
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `WishlistsOneWeek`,
                strTitle: m(`#RecommenderDemos_HotWishlists`),
                strSubtitle: m(`#RecommenderDemos_HotWishlists_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `NextFest`,
                strTitle: m(`#RecommenderDemos_NextFest`),
                strSubtitle: m(`#RecommenderDemos_NextFestDesc`),
              }),
              (0, G.jsx)(ie, { nAccountID: n, bExclude: o }),
              (0, G.jsx)(se, { nAccountID: n }),
              (0, G.jsx)($, {
                nAccountID: n,
                switches: Q,
                strTitle: m(`#RecommenderDemos_DiscountsNoScheduled`),
                strSubtitle: m(`#RecommenderDemos_DiscountsNoScheduled_Desc`),
              }),
              (0, G.jsx)($, {
                switches: ce,
                strTitle: m(`#RecommenderDemos_DiscountsAnonymous`),
                strSubtitle: m(`#RecommenderDemos_DiscountsAnonymous_Desc`),
              }),
              (0, G.jsx)(de, { nAccountID: n }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecAllTime`,
                strTitle: m(`#RecommenderDemos_RecAllTime`),
                strSubtitle: m(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecFiveYear`,
                strTitle: m(`#RecommenderDemos_RecFiveYear`),
                strSubtitle: m(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecTwoYear`,
                strTitle: m(`#RecommenderDemos_RecTwoYear`),
                strSubtitle: m(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecOneYear`,
                strTitle: m(`#RecommenderDemos_RecOneYear`),
                strSubtitle: m(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecSixMonths`,
                strTitle: m(`#RecommenderDemos_RecSixMonths`),
                strSubtitle: m(`#RecommenderDemos_Rec_Desc`),
              }),
              (0, G.jsx)(Z, {
                nAccountID: n,
                bExclude: o,
                strName: `RecEmbedding`,
                strTitle: m(`#RecommenderDemos_RecEmbedding`),
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
                children: m(`#LoginText`),
              }),
              (0, G.jsx)(`div`, {
                className: d(`btn_green_white_innerfade`, ` btn_medium`),
                onClick: C,
                children: (0, G.jsx)(`span`, { children: m(`#LoginButton`) }),
              }),
            ],
          }),
        });
  };
export { fe as default };
