/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js";
import { Lt as t, W as n, ft as r, st as i } from "./libraries.js";
import {
  C as a,
  F as o,
  St as s,
  b as c,
  bt as l,
  ct as u,
  mt as d,
  o as f,
  ot as p,
  st as m,
  t as h,
  w as g,
  x as _,
} from "./salesectionfactory.js";
import { pt as v } from "./linkwidget.js";
import { V as ee } from "./storelink.js";
import { Dr as te, N as ne, P as re, r as y, z as b } from "./saletags.js";
import { u as x } from "./apppartnereventspage.js";
import { i as S, r as C } from "./salepreviewwidgets.js";
import { t as ie } from "./ajaxhooks.js";
import { t as w } from "./throbber.js";
import { n as T } from "./saletechredirectsignin.js";
import { t as ae } from "./moment.js";
import { i as E } from "./basicbbcodeparser.js";
import { i as oe, n as se, t as ce } from "./packagepricewidget.js";
import { n as le, s as D } from "./loyaltyrewarddefs.js";
import { c as ue } from "./eventbbcodeparser.module.js";
import { n as O } from "./partnereventeditorcontext.js";
import { t as k } from "./appinfostore.js";
import { n as A } from "./partnereventstore.js";
import {
  Ac as j,
  Cc as M,
  Ey as N,
  Gy as P,
  Hu as F,
  Ic as I,
  Kb as L,
  Kx as R,
  Vy as z,
  Wy as B,
  Yc as V,
  Zi as H,
  ix as U,
  ko as de,
  ky as fe,
  no as pe,
  oc as me,
  ox as W,
  pl as he,
  rr as ge,
} from "./main.js";
import { a as _e } from "./discoveryqueuestore.js";
import { t as ve } from "./giveawaystore.js";
async function ye() {
  let e = await v(`ajaxgetuserdeckcompatcounts`, new URLSearchParams());
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
    n = Number.parseInt(E(e.args)),
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
    let t = Number.parseInt(E(e.args, `depositpackageid`)),
      i = Number.parseInt(E(e.args, `psulesspackageid`)),
      a = E(e.args, `out_of_stock_override`),
      o = E(e.args, `delivery_override`),
      s = E(e.args, `delivery_override_out_of_stock`);
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
    { data: f } = b(t),
    { data: p } = b(i),
    h = (0, G.useMemo)(
      () => [
        {
          unique_id: `reservation_bbcode_` + t,
          reservation_package: t,
          deposit_package: n,
          localized_reservation_desc: R([], 32, null),
          localized_out_of_stock_override: R([a || null], 32, null),
          localized_delivery_override_desc: R([o || null], 32, null),
          override_delivery_only_out_of_stock: !!s,
          psu_less_package: i,
        },
      ],
      [t, n, a, o, s, i],
    );
  if (!f || (i && !p))
    return (0, K.jsx)(w, {
      string: B(`#Loading`),
      size: `small`,
      position: `center`,
    });
  let g = !L.logged_in || !f.account_restricted_from_purchasing,
    _ =
      f.reservation_state == d.k_EPurchaseReservationState_Reserved
        ? f
        : void 0;
  return (0, K.jsxs)(V, {
    children: [
      l &&
        (0, K.jsx)(G.Suspense, {
          fallback: null,
          children: (0, K.jsx)(l, { bIsPreview: !!r, rgReservationDef: h }),
        }),
      !!f.allow_purchase_in_country &&
        (0, K.jsxs)(`div`, {
          className: h[0].unique_id,
          children: [
            (0, K.jsx)(u, {
              reservationDef: h[0],
              hardwareDetail: f,
              bPSULessModel: !1,
              reservedHardwareDetail: _,
            }),
            g &&
              (0, K.jsx)(m, {
                section: c,
                reservationDef: h[0],
                hardwareDetail: f,
                reservedHardwareDetail: _,
              }),
            p &&
              p?.allow_purchase_in_country &&
              (0, K.jsx)(u, {
                reservationDef: h[0],
                hardwareDetail: p,
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
    o = ie(`GameHoverFollowButton`),
    { elDialogElement: s, fnShowLogonDialog: c } = T(),
    l = re(t),
    { mutateAsync: u } = ne(t, !l, void 0);
  return (0, K.jsxs)(j, {
    className: M(Ee, n),
    onClick: async (e) => {
      (e.preventDefault(),
        e.stopPropagation(),
        W.logged_in ? (a(!0), await u(), o.token.reason || a(!1)) : c());
    },
    style: r,
    children: [
      l ? (0, K.jsx)(me, {}) : (0, K.jsx)(de, {}),
      (0, K.jsx)(`div`, {
        className: M(De, i && `ijKnSJ3VcqM-`, `FollowGameButton`),
        children: B(l ? `#Sale_StopFollowingGame` : `#Sale_FollowGame`),
      }),
      s,
    ],
  });
}
var ke = e(ae());
function Ae(e) {
  let t = Number(e.args.packageid);
  return t
    ? (0, K.jsx)(ce, { packageID: t, display_style: oe(e.args.display) })
    : null;
}
function je(e) {
  let t = Number(e.args.packageid),
    n = Number(e.args.compareid);
  return !t || !n ? null : (0, K.jsx)(se, { packageID: t, compareID: n });
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
    className: M(Ne, i && `Cc5dEagASNE-`),
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    children: (0, K.jsx)(y, {
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
  let r = D(e.args.color, `black`),
    i = D(e.args.bgcolor, `white`);
  return (0, K.jsx)(Pe, { clanAccountID: n, color: r, bgcolor: i });
}
var Ie = `FClDTpQrpCc-`,
  Le = `MYmTqhwexFc-`;
function Re(e) {
  let { appid: t, color: n, bgcolor: r } = e,
    i = F(),
    a = ee(t),
    o = I(i);
  return (0, K.jsx)(`div`, {
    className: Ie,
    children: (0, K.jsx)(te, {
      snr: o,
      id: a,
      classOverride: M(S, Le, `WishlistButton`),
      styleOverride: { color: n, backgroundColor: r },
      bShowInGamepadUI: !0,
    }),
  });
}
function ze(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = D(e.args.color, `black`),
    r = D(e.args.bgcolor, `white`);
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
    F(),
    (0, K.jsx)(Oe, {
      appID: t,
      classOverride: M(C, Ve),
      styleOverride: { color: n, backgroundColor: r },
    })
  );
}
function Ue(e) {
  let t = Number(e.args.appid);
  if (!t) return null;
  let n = D(e.args.color, `black`),
    r = D(e.args.bgcolor, `white`);
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
                  ? B(`#Giveaway_Closed`, H(r))
                  : B(`#Giveaway_Closed_NoWinnerInfo`),
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
                          children: B(`#Giveaway_RandomDraw`),
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
                            B(`#Giveaway_CountDown2`),
                            ` `,
                            B(`#Giveaway_KeepWatching`),
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
                        children: H(r),
                      }),
                      (0, K.jsx)(`div`, {
                        className: `EVJMTmpF-Vc-`,
                        children: B(`#Giveaway_Congratulation`),
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
    r = a(n);
  if (r?.level > 0) {
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
      children: H(e),
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
      () => c(t, i),
      [t, i],
    ),
    s = _e(o, a),
    l = Math.min(n + s, r);
  return (0, K.jsx)(`span`, {
    className: `DisplayBadgeProgress`,
    children: H(l),
  });
}
function Je(e) {
  let { event: t } = e.context,
    n = Number.parseInt(E(e.args, `eventid`));
  return W.logged_in && n
    ? (0, K.jsx)(Ke, { nEventBadgeID: n, eventModel: t })
    : null;
}
function Ye(e) {
  let { nDoorIndex: t, children: n } = e,
    r = l(t),
    i = s(),
    [a, o] = G.useState(!1),
    [c, u] = G.useState(!1),
    { elDialogElement: d, fnShowLogonDialog: f } = T();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(ge, {
        disabled: r,
        onClick: (e) => {
          a ||
            (W.logged_in
              ? (o(!0),
                i({ iDoorIndex: t })
                  .then((e) => {
                    (e || u(!0), o(!1));
                  })
                  .catch(() => {
                    (u(!0), o(!1));
                  }))
              : f());
        },
        children: c
          ? (0, K.jsx)(`div`, { children: B(`#GrantAwardError_Busy`) })
          : (0, K.jsxs)(K.Fragment, {
              children: [
                !!a && (0, K.jsx)(w, { size: `small` }),
                !!r && (0, K.jsx)(pe, {}),
                n,
              ],
            }),
      }),
      d,
    ],
  });
}
function Xe(e) {
  let t = Number.parseInt(E(e.args)) || 0;
  return t >= 0 && t < 32
    ? (0, K.jsx)(Ye, { nDoorIndex: t, children: e.children })
    : null;
}
var Ze = n(h);
function X(e) {
  let t = Number.parseInt(E(e.args)),
    { event: n, showErrorInfo: r } = e.context;
  if (t) {
    let i = n?.jsondata?.sale_sections?.findIndex((e) => e.unique_id == t);
    if (i >= 0) {
      let t = n.GetDayIndexFromEventStart();
      return (0, K.jsx)(O, {
        location: r ? 2 : 0,
        children: (0, K.jsx)(Ze, {
          event: n,
          section: n.jsondata.sale_sections[i],
          activeTab: new _(null, t),
          language: e.language,
          nSaleDayIndex: t,
          promotionName: ``,
          appVisibilityTracker: null,
          ePreviewMode: r ? f.EPreviewMode_Enabled : f.EPreviewMode_Disabled,
        }),
      });
    }
    if (r)
      return (0, K.jsxs)(`div`, {
        className: x,
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
    n = Number.parseInt(E(e.args, `appid`)),
    r = Number.parseInt(E(e.args, `itemdefid`)),
    i = Number.parseInt(E(e.args, `maxquantity`)),
    a = E(e.args, `calltoaction`);
  return !p(n, r, !1) || !t
    ? (0, K.jsx)(w, {
        size: `small`,
        position: `center`,
        string: B(`#Loading`),
      })
    : (0, K.jsx)(g, {
        language: e.language,
        clanAccountID: t.clanSteamID.GetAccountID(),
        itemDefSetting: { nAppID: n, nItemDefID: r, max_quantity: i },
        strCallToAction: a,
      });
}
function et(e) {
  let t = Ce();
  if (!t) return (0, K.jsx)(w, { size: `small` });
  let n = Number.parseInt(E(e.args));
  return (0, K.jsx)(`span`, { children: H(Number(we(t, n))) });
}
function tt(e) {
  let t = o(W.accountid, `library`);
  if (!t) return (0, K.jsx)(w, { size: `small` });
  let n = Number.parseInt(E(e.args)),
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
  return (0, K.jsx)(`span`, { children: H(Number(r)) });
}
function nt(e) {
  let t = Number.parseInt(E(e.args)),
    n = `hide` in e.args && !!Number.parseInt(E(e.args, `hide`));
  return t >= 0
    ? (0, K.jsx)(rt, { nDoorIndex: t, bHide: n, children: e.children })
    : null;
}
function rt(e) {
  let { nDoorIndex: t, bHide: n, children: r } = e,
    i = l(t);
  return i == null
    ? null
    : (i && !n) || (!i && n)
      ? (0, K.jsx)(K.Fragment, { children: e.children })
      : null;
}
function it(e) {
  return (0, K.jsx)(`span`, {
    className: ue,
    children: P(
      e.children,
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
      (0, K.jsx)(`b`, {}),
    ),
  });
}
function at(e) {
  let t = E(e.args);
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
          --Q == 0 && he();
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
      (k.Init(N(new fe(U.WEBAPI_BASE_URL))), A.Init(), r(!0));
    }, []),
    G.useEffect(() => {
      let e = z();
      e && ke.locale(e);
    }, []),
    n
      ? t
        ? (0, K.jsx)(le, { dictionary: Qe(), children: e.children })
        : e.children
      : null
  );
}
export { ct as n, lt as t };
