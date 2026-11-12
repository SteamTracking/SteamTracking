/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./chunk~f025431ab0.js";
import { Lt as t, W as n, ft as r, st as i } from "./chunk~01cfc309bf.js";
import {
  Eo as a,
  F as o,
  I as s,
  a as c,
  mi as l,
  vt as u,
  wt as d,
} from "./chunk~6b8ddcaac8.js";
import {
  C as f,
  F as p,
  St as m,
  b as h,
  bt as g,
  ct as _,
  mt as ee,
  o as v,
  ot as te,
  st as ne,
  t as re,
  w as y,
  x as b,
} from "./chunk~2185942436.js";
import { ut as x } from "./chunk~b8ca037aae.js";
import { dt as S } from "./chunk~cf3721cc1c.js";
import { i as ie, r as C } from "./chunk~f4c928a27a.js";
import { t as ae } from "./chunk~92931c6310.js";
import { t as w } from "./chunk~eefd71512b.js";
import { t as oe } from "./chunk~466a63c735.js";
import { n as se } from "./chunk~331382b23f.js";
import { v as T } from "./chunk~a19d1add1e.js";
import { i as ce, n as le, t as ue } from "./chunk~4180b1a25d.js";
import { n as de, s as E } from "./chunk~5a091db425.js";
import { c as D } from "./chunk~618fb52a90.js";
import { t as O } from "./chunk~c55d6473b2.js";
import { n as k } from "./chunk~fc8a9e4879.js";
import {
  Ao as A,
  Ay as j,
  Gy as M,
  Jy as N,
  Ku as P,
  Lc as F,
  Ny as I,
  Xb as L,
  Xc as R,
  Xx as z,
  Yy as B,
  Zi as V,
  ar as H,
  cx as fe,
  gl as pe,
  jc as me,
  ro as he,
  sc as ge,
  ux as U,
  wc as W,
} from "./main.js";
import { a as _e } from "./chunk~7401689b78.js";
import { t as ve } from "./chunk~383ae316bd.js";
async function ye() {
  let e = await x(`ajaxgetuserdeckcompatcounts`, new URLSearchParams());
  if (!e.counts)
    throw Error(`ajaxgetuserdeckcompatcounts answered without counts`);
  return e.counts;
}
var be = 3e5;
function xe() {
  return [`DeckCompatCounts`];
}
function Se() {
  return { queryKey: xe(), queryFn: () => ye(), staleTime: be, retry: !1 };
}
function Ce() {
  let { data: e } = i(Se());
  return e;
}
function we(e, t) {
  switch (t) {
    case 2:
      return e?.playable;
    case 1:
      return e?.unsupported;
    default:
      return e?.verified;
  }
}
var G = e(t(), 1),
  K = r();
function q(e) {
  let { event: t } = e.context,
    n = Number.parseInt(T(e.args)),
    r = G.useMemo(() => {
      if (t)
        return t.jsondata.sale_sections?.find(
          (e) =>
            e.section_type == `vo_internal` &&
            (e.internal_section_data?.internal_type == `reservation_widget` ||
              e.internal_section_data?.internal_type == `while_supplies_last`),
        );
    }, [t]);
  if (n && r) {
    let t = Number.parseInt(T(e.args, `depositpackageid`)),
      i = Number.parseInt(T(e.args, `psulesspackageid`)),
      a = T(e.args, `out_of_stock_override`),
      o = T(e.args, `delivery_override`),
      s = T(e.args, `delivery_override_out_of_stock`);
    return (0, K.jsx)(Te, {
      section: r,
      reservationPackageID: n,
      depositPackageID: t,
      psuLessPackageID: i,
      strOutOfStockOverride: a,
      strDeliveryOverride: s || o,
      bDeliveryOverrideOnlyIfOutOfStock: !!s,
      PreviewActions: e.PreviewActions,
    });
  }
  return (0, K.jsx)(K.Fragment, {});
}
function Te(e) {
  let {
      reservationPackageID: t,
      depositPackageID: n,
      bIsPreview: r,
      psuLessPackageID: i,
      strOutOfStockOverride: a,
      strDeliveryOverride: o,
      bDeliveryOverrideOnlyIfOutOfStock: s,
      section: c,
      PreviewActions: l,
    } = e,
    { data: u } = d(t),
    { data: f } = d(i),
    p = (0, G.useMemo)(
      () => [
        {
          unique_id: `reservation_bbcode_` + t,
          reservation_package: t,
          deposit_package: n,
          localized_reservation_desc: z([], 32, null),
          localized_out_of_stock_override: z([a || null], 32, null),
          localized_delivery_override_desc: z([o || null], 32, null),
          override_delivery_only_out_of_stock: !!s,
          psu_less_package: i,
        },
      ],
      [t, n, a, o, s, i],
    );
  if (!u || (i && !f))
    return (0, K.jsx)(w, {
      string: N(`#Loading`),
      size: `small`,
      position: `center`,
    });
  let m = !L.logged_in || !u.account_restricted_from_purchasing,
    h =
      u.reservation_state == ee.k_EPurchaseReservationState_Reserved
        ? u
        : void 0;
  return (0, K.jsxs)(R, {
    children: [
      l &&
        (0, K.jsx)(G.Suspense, {
          fallback: null,
          children: (0, K.jsx)(l, { bIsPreview: !!r, rgReservationDef: p }),
        }),
      !!u.allow_purchase_in_country &&
        (0, K.jsxs)(`div`, {
          className: p[0].unique_id,
          children: [
            (0, K.jsx)(_, {
              reservationDef: p[0],
              hardwareDetail: u,
              bPSULessModel: !1,
              reservedHardwareDetail: h,
            }),
            m &&
              (0, K.jsx)(ne, {
                section: c,
                reservationDef: p[0],
                hardwareDetail: u,
                reservedHardwareDetail: h,
              }),
            f &&
              f?.allow_purchase_in_country &&
              (0, K.jsx)(_, {
                reservationDef: p[0],
                hardwareDetail: f,
                bPSULessModel: !0,
                reservedHardwareDetail: void 0,
              }),
          ],
        }),
    ],
  });
}
var Ee = `wKSQT4ZMQNA-`,
  De = `NQcSXUQ7jyY-`;
function Oe(e) {
  let { appID: t, classOverride: n, styleOverride: r } = e,
    [i, a] = (0, G.useState)(!1),
    c = ae(`GameHoverFollowButton`),
    { elDialogElement: l, fnShowLogonDialog: d } = u(),
    f = s(t),
    { mutateAsync: p } = o(t, !f, void 0);
  return (0, K.jsxs)(me, {
    className: W(Ee, n),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        U.logged_in ? (a(!0), await p(), c.token.reason || a(!1)) : d());
    },
    style: r,
    children: [
      f ? (0, K.jsx)(ge, {}) : (0, K.jsx)(A, {}),
      (0, K.jsx)(`div`, {
        className: W(De, i && `ijKnSJ3VcqM-`, `FollowGameButton`),
        children: N(f ? `#Sale_StopFollowingGame` : `#Sale_FollowGame`),
      }),
      l,
    ],
  });
}
var ke = e(oe());
function Ae(e) {
  let t = Number(e.args.packageid);
  return t
    ? (0, K.jsx)(ue, { packageID: t, display_style: ce(e.args.display) })
    : null;
}
function je(e) {
  let t = Number(e.args.packageid),
    n = Number(e.args.compareid);
  return !t || !n ? null : (0, K.jsx)(le, { packageID: t, compareID: n });
}
function Me(e) {
  let t = e.args[``]?.trim();
  return t
    ? (0, K.jsx)(`div`, { className: t, children: e.children })
    : (0, K.jsx)(K.Fragment, { children: e.children });
}
var Ne = `_8XhS5eUF7W0-`;
function Pe(e) {
  let { clanAccountID: t, color: n, bgcolor: r } = e,
    [i, a] = G.useState(!1);
  return (0, K.jsx)(`div`, {
    className: W(Ne, i && `Cc5dEagASNE-`),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: (0, K.jsx)(c, {
      nCreatorAccountID: t,
      classOverride: C,
      styleOverride: { color: n, backgroundColor: r },
      followType: `group`,
    }),
  });
}
function Fe(e) {
  let { event: t } = e.context,
    n = Number(e.args.groupid) || t?.clanSteamID.GetAccountID();
  if (!n) return null;
  let r = E(e.args.color, `black`),
    i = E(e.args.bgcolor, `white`);
  return (0, K.jsx)(Pe, { clanAccountID: n, color: r, bgcolor: i });
}
var Ie = `FClDTpQrpCc-`,
  Le = `MYmTqhwexFc-`;
function Re(e) {
  let { appid: t, color: n, bgcolor: r } = e,
    i = P(),
    o = a(t),
    s = F(i);
  return (0, K.jsx)(`div`, {
    className: Ie,
    children: (0, K.jsx)(l, {
      snr: s,
      id: o,
      classOverride: W(ie, Le, `WishlistButton`),
      styleOverride: { color: n, backgroundColor: r },
      bShowInGamepadUI: !0,
    }),
  });
}
function ze(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = E(e.args.color, `black`),
    r = E(e.args.bgcolor, `white`);
  return (0, K.jsx)(Re, { appid: t, color: n, bgcolor: r });
}
var J = null;
function Be() {
  return (
    (J ??= new Map([
      [`wishlist`, { Constructor: ze, autocloses: !1 }],
      [`followgroup`, { Constructor: Fe, autocloses: !1 }],
      [`classname`, { Constructor: Me, autocloses: !1 }],
      [`price`, { Constructor: Ae, autocloses: !1 }],
      [`pricesavings`, { Constructor: je, autocloses: !1 }],
      [`reservationbutton`, { Constructor: q, autocloses: !1 }],
    ])),
    J
  );
}
var Ve = `XJDpqo3kSV4-`;
function He(e) {
  let { appid: t, color: n, bgcolor: r } = e;
  return (
    P(),
    (0, K.jsx)(Oe, {
      appID: t,
      classOverride: W(C, Ve),
      styleOverride: { color: n, backgroundColor: r },
    })
  );
}
function Ue(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = E(e.args.color, `black`),
    r = E(e.args.bgcolor, `white`);
  return (0, K.jsx)(He, { appid: t, color: n, bgcolor: r });
}
var We = `PrWjrQm2y8g-`;
function Y(e) {
  return e < 10 ? `0` + e : e;
}
function Ge(e) {
  let { giveawayid: t } = e,
    {
      bLoadingGiveawayInfo: n,
      winner_count: r,
      closed: i,
      seconds_until_drawing: a,
    } = ve(t);
  return n
    ? null
    : (0, K.jsxs)(`div`, {
        className: We,
        children: [
          !!i &&
            (0, K.jsx)(`div`, {
              className: `baDBPeinwws-`,
              children:
                r > 0
                  ? N(`#Giveaway_Closed`, V(r))
                  : N(`#Giveaway_Closed_NoWinnerInfo`),
            }),
          !i &&
            (0, K.jsxs)(G.Fragment, {
              children: [
                a <= 0
                  ? (0, K.jsxs)(`div`, {
                      className: `Yb8JolxIPe0-`,
                      children: [
                        (0, K.jsx)(w, { size: `small` }),
                        (0, K.jsx)(`div`, {
                          children: N(`#Giveaway_RandomDraw`),
                        }),
                      ],
                    })
                  : (0, K.jsxs)(`div`, {
                      className: `YnCoxa3m5cw-`,
                      children: [
                        (0, K.jsx)(`div`, {
                          className: `aOXiLwSp1Xc-`,
                          children: Y(Math.floor(a / 60)) + `:` + Y(a % 60),
                        }),
                        (0, K.jsxs)(`div`, {
                          className: `pnbvcAjswZk-`,
                          children: [
                            N(`#Giveaway_CountDown2`),
                            ` `,
                            N(`#Giveaway_KeepWatching`),
                          ],
                        }),
                      ],
                    }),
                r > 0 &&
                  (0, K.jsxs)(`div`, {
                    className: `-Q8aSdniAKw-`,
                    children: [
                      (0, K.jsx)(`div`, {
                        className: `_4V6epCns4jI-`,
                        children: V(r),
                      }),
                      (0, K.jsx)(`div`, {
                        className: `EVJMTmpF-Vc-`,
                        children: N(`#Giveaway_Congratulation`),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      });
}
function Ke(e) {
  let { eventModel: t, nEventBadgeID: n } = e,
    r = f(n);
  if ((r?.level ?? 0) > 0) {
    let e = r.level;
    if (t?.BHasSaleEnabled()) {
      let r = t.GetSaleSectionsByType(`badge_progress`);
      if (r?.length == 1) {
        let i = r[0].badge_progress;
        if (i?.event_badgeid == n && i?.granted_by_discovery_queue) {
          let n = i.levels[i.levels.length - 1].level;
          return (0, K.jsx)(qe, {
            eventModel: t,
            nBadgeLevel: e,
            nMaxLevel: n,
          });
        }
      }
    }
    return (0, K.jsx)(`span`, {
      className: `DisplayBadgeProgress`,
      children: V(e),
    });
  }
  return null;
}
function qe(e) {
  let { eventModel: t, nBadgeLevel: n, nMaxLevel: r } = e,
    i = G.useMemo(() => {
      let e = t
        .GetSaleSections()
        .filter((e) => e.section_type == `discoveryqueue`);
      return e?.length > 0 ? e[0] : null;
    }, [t]),
    { storePageFilter: a, eStoreDiscoveryQueueType: o } = G.useMemo(
      () => h(t, i),
      [t, i],
    ),
    s = _e(o, a),
    c = Math.min(n + s, r);
  return (0, K.jsx)(`span`, {
    className: `DisplayBadgeProgress`,
    children: V(c),
  });
}
function Je(e) {
  let { event: t } = e.context,
    n = Number.parseInt(T(e.args, `eventid`));
  return U.logged_in && n
    ? (0, K.jsx)(Ke, { nEventBadgeID: n, eventModel: t })
    : null;
}
function Ye(e) {
  let { nDoorIndex: t, children: n } = e,
    r = g(t),
    i = m(),
    [a, o] = G.useState(!1),
    [s, c] = G.useState(!1),
    { elDialogElement: l, fnShowLogonDialog: d } = u();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(H, {
        disabled: r,
        onClick: (e) => {
          a ||
            (U.logged_in
              ? (o(!0),
                i({ iDoorIndex: t })
                  .then((e) => {
                    (e || c(!0), o(!1));
                  })
                  .catch(() => {
                    (c(!0), o(!1));
                  }))
              : d());
        },
        children: s
          ? (0, K.jsx)(`div`, { children: N(`#GrantAwardError_Busy`) })
          : (0, K.jsxs)(K.Fragment, {
              children: [
                !!a && (0, K.jsx)(w, { size: `small` }),
                !!r && (0, K.jsx)(he, {}),
                n,
              ],
            }),
      }),
      l,
    ],
  });
}
function Xe(e) {
  let t = Number.parseInt(T(e.args)) || 0;
  return t >= 0 && t < 32
    ? (0, K.jsx)(Ye, { nDoorIndex: t, children: e.children })
    : null;
}
var Ze = n(re);
function X(e) {
  let t = Number.parseInt(T(e.args)),
    { event: n, showErrorInfo: r } = e.context;
  if (t) {
    let i = n?.jsondata?.sale_sections?.findIndex((e) => e.unique_id == t);
    if (i >= 0) {
      let t = n.GetDayIndexFromEventStart();
      return (0, K.jsx)(se, {
        location: r ? 2 : 0,
        children: (0, K.jsx)(Ze, {
          event: n,
          section: n.jsondata.sale_sections[i],
          activeTab: new b(null, t),
          language: e.language,
          nSaleDayIndex: t,
          promotionName: ``,
          appVisibilityTracker: null,
          ePreviewMode: r ? v.EPreviewMode_Enabled : v.EPreviewMode_Disabled,
        }),
      });
    }
    if (r)
      return (0, K.jsxs)(`div`, {
        className: S,
        children: [`Error could not find sale section `, t],
      });
  }
  return null;
}
var Z = null;
function Qe() {
  return (
    (Z ??= new Map([
      ...Array.from(Be().entries()),
      [
        `itemdef`,
        {
          Constructor: $e,
          autocloses: !1,
          skipInternalNewline: !0,
          allowWrapTextForCopying: !0,
        },
      ],
      [`followgame`, { Constructor: Ue, autocloses: !1 }],
      [`deckcompatcount`, { Constructor: et, autocloses: !1 }],
      [`deckcompatuserlibrarycount`, { Constructor: tt, autocloses: !1 }],
      [`giveawayinfo`, { Constructor: at, autocloses: !1 }],
      [`eventdoorvisibility`, { Constructor: nt, autocloses: !1 }],
      [`badgecurrentlevel`, { Constructor: Je, autocloses: !1 }],
      [`optindoorquest`, { Constructor: Xe, autocloses: !1 }],
      [`localize`, { Constructor: it, autocloses: !1 }],
      [`salesection`, { Constructor: X, autocloses: !1 }],
      [`reservationbutton`, { Constructor: st, autocloses: !1 }],
    ])),
    Z
  );
}
function $e(e) {
  let { event: t } = e.context,
    n = Number.parseInt(T(e.args, `appid`)),
    r = Number.parseInt(T(e.args, `itemdefid`)),
    i = Number.parseInt(T(e.args, `maxquantity`)),
    a = T(e.args, `calltoaction`);
  return !te(n, r, !1) || !t
    ? (0, K.jsx)(w, {
        size: `small`,
        position: `center`,
        string: N(`#Loading`),
      })
    : (0, K.jsx)(y, {
        language: e.language,
        clanAccountID: t.clanSteamID.GetAccountID(),
        itemDefSetting: { nAppID: n, nItemDefID: r, max_quantity: i },
        strCallToAction: a,
      });
}
function et(e) {
  let t = Ce();
  if (!t) return (0, K.jsx)(w, { size: `small` });
  let n = Number.parseInt(T(e.args));
  return (0, K.jsx)(`span`, { children: V(Number(we(t, n))) });
}
function tt(e) {
  let t = p(U.accountid, `library`);
  if (!t) return (0, K.jsx)(w, { size: `small` });
  let n = Number.parseInt(T(e.args)),
    r = t.verifiedList?.length || 0;
  switch (n) {
    case 2:
      r = t.playableList?.length || 0;
      break;
    case 1:
      r = t.unsupportedList?.length || 0;
      break;
    case 0:
      r = t.unknownList?.length || 0;
  }
  return (0, K.jsx)(`span`, { children: V(Number(r)) });
}
function nt(e) {
  let t = Number.parseInt(T(e.args)),
    n = `hide` in e.args && !!Number.parseInt(T(e.args, `hide`));
  return t >= 0
    ? (0, K.jsx)(rt, { nDoorIndex: t, bHide: n, children: e.children })
    : null;
}
function rt(e) {
  let { nDoorIndex: t, bHide: n, children: r } = e,
    i = g(t);
  return i == null
    ? null
    : (i && !n) || (!i && n)
      ? (0, K.jsx)(K.Fragment, { children: e.children })
      : null;
}
function it(e) {
  return (0, K.jsx)(`span`, {
    className: D,
    children: B(
      e.children,
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
    ),
  });
}
function at(e) {
  let t = T(e.args);
  return t ? (0, K.jsx)(Ge, { giveawayid: t }) : (0, K.jsx)(G.Fragment, {});
}
var ot = void 0;
function st(e) {
  return (0, K.jsx)(q, { ...e, PreviewActions: ot });
}
var Q = 0;
function $(e, t) {
  (0, G.useEffect)(() => {
    if (!(e || t))
      return (
        Q++,
        () => {
          --Q == 0 && pe();
        }
      );
  }, [e, t]);
}
function ct(e) {
  let [t, n] = (0, G.useState)(!1);
  ((0, G.useEffect)(() => {
    let t = window.setTimeout(() => n(!0), e);
    return () => window.clearTimeout(t);
  }, [e]),
    $(t));
}
function lt(e) {
  let { bSalePage: t } = e,
    [n, r] = G.useState(!1);
  return (
    $(n, t),
    G.useEffect(() => {
      (O.Init(j(new I(fe.WEBAPI_BASE_URL))), k.Init(), r(!0));
    }, []),
    G.useEffect(() => {
      let e = M();
      e && ke.locale(e);
    }, []),
    n
      ? t
        ? (0, K.jsx)(de, { dictionary: Qe(), children: e.children })
        : e.children
      : null
  );
}
export { ct as n, lt as t };
