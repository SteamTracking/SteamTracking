/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  $t as e,
  A as t,
  Gt as n,
  Ht as r,
  Jt as i,
  K as a,
  Kt as o,
  S as s,
  U as c,
  Ut as l,
  Wt as u,
  Xt as d,
  Y as f,
  Yt as p,
  Z as m,
  _t as h,
  gt as g,
  i as _,
  k as v,
  kt as y,
  nt as b,
  on as x,
  qt as S,
  rt as C,
  s as ee,
  vt as w,
  x as T,
  yt as E,
  zt as D,
} from "./mobx.esm.js";
import { Gt as O, Lt as te, Rt as k, f as A, r as ne } from "./src.js";
import {
  i as re,
  l as ie,
  n as ae,
  o as oe,
  r as j,
  s as se,
} from "./uploadutils.js";
import {
  At as ce,
  Rt as le,
  Sa as ue,
  Vt as M,
  Ya as N,
  aa as de,
  dn as fe,
  en as pe,
  jt as me,
  oa as P,
  sa as F,
} from "./dialogs.js";
import { h as he, r as ge } from "./storebrowsequerycontext.js";
import { a as _e, r as I } from "./react-router.js";
import { r as L } from "./servicetransportprovider.js";
import { t as R } from "./useQuery.js";
import { t as ve } from "./reactqueryroot.js";
import { a as ye, l as z, o as be } from "./steammessages_store_pb.js";
import { r as xe } from "./appidutils.js";
import { n as Se } from "./primarypartnercontext.js";
import { t as Ce } from "./formatnumber.js";
import { n as we } from "./imageuploaderpanel.js";
import { t as Te } from "./modals.js";
import { t as Ee } from "./axios.js";
import { t as De } from "./axiosutils.js";
import {
  C as Oe,
  Ct as ke,
  E as B,
  M as Ae,
  N as je,
  O as V,
  S as Me,
  a as Ne,
  b as Pe,
  c as Fe,
  d as Ie,
  et as Le,
  j as Re,
  k as ze,
  l as Be,
  m as Ve,
  n as He,
  o as Ue,
  p as We,
  s as Ge,
  t as Ke,
  u as qe,
  v as Je,
  x as Ye,
  y as H,
  z as Xe,
} from "./partnerstats.module.js";
import { t as Ze } from "./throbber.js";
import "./steammessages_community_pb.js";
import { n as Qe } from "./storeitemhooks.js";
import { l as $e, n as et, u as tt, v as nt } from "./genericimageupload.js";
import { t as U } from "./phpintegration.js";
import { c as rt, l as it, t as at } from "./releasedateinfo.js";
import { n as ot } from "./storebrowsesetup.js";
var W = x(y()),
  st = `fHxyDThw2SA-`,
  ct = `bXQSJ5DkbKo-`,
  lt = `iVSnrcCn4Yo-`,
  ut = `C0Gk8LNsNT4-`,
  dt = `HmCtrHg-GeE-`,
  ft = `VRt6OsaWSFQ-`,
  pt = `tqnF2eX4-Y8-`,
  mt = `b0mgbqlTptQ-`,
  G = h();
function ht(t, n) {
  let r = xe(n),
    i = ge();
  e(
    i?.bUsePartnerAPI,
    `useIsDemoVisibleOnSomewhere must run under PartnerStoreBrowseUnpublishedRoot, or the answer depends on the viewer's country`,
  );
  let { data: a, isLoading: o } = he(r);
  if (!o)
    return a && a.related_items
      ? (a.related_items.demo_appid &&
          a.related_items.demo_appid.includes(t)) ||
          (a.related_items.standalone_demo_appid &&
            a.related_items.standalone_demo_appid.includes(t))
      : !1;
}
function gt(e) {
  let { parentAppId: n } = e;
  return (0, G.jsxs)(`div`, {
    className: t(pt, mt),
    children: [
      (0, G.jsx)(`p`, {
        children: P(`#App_Landing_DemoWishlist_Demo_NotVisible`),
      }),
      (0, G.jsx)(`p`, {
        children: F(
          `#App_Landing_DemoWishlist_Demo_NotVisible_Publish`,
          (0, G.jsx)(`a`, {
            href: `${c.PARTNER_BASE_URL}admin/game/editbyappid/${n}?activetab=tab_specialsettings#associated_demos`,
            target: `_blank`,
          }),
        ),
      }),
    ],
  });
}
var _t = 7,
  vt = 7;
function yt(e) {
  let { demoAppID: t, parentAppId: n } = e,
    [r, i] = W.useState(!1),
    [a, o] = W.useState(void 0),
    s = ht(t, n),
    [c, l] = W.useState(void 0),
    [u, d] = W.useState(0),
    f = W.useCallback(() => d((e) => e + 1), []),
    p = L();
  W.useEffect(() => {
    let e = new AbortController();
    return (
      (async () => {
        i(!1), o(void 0);
        let r = w.Init(ye);
        r.Body().set_demo_appid(t), r.Body().set_appid(n);
        let a = await z.GetWishlistDemoEmailStatus(p, r);
        e.signal.aborted ||
          (a.BSuccess() && (i(a.Body().can_fire()), o(a.Body().time_staged())));
      })(),
      () => e.abort()
    );
  }, [p, t, n, u]),
    W.useEffect(() => {
      let e = window.AppLandingRefreshCallbacks;
      e || ((e = new te()), (window.AppLandingRefreshCallbacks = e));
      let t = e.Register(f);
      return () => t.Unregister();
    }, [f]);
  let m = r || c !== void 0,
    h = a + _t * N.PerDay,
    g = !r && a && new Date(h * 1e3) > new Date();
  if (m || g) {
    let e = `${b.PARTNER_BASE_URL}doc/marketing/wishlist`;
    return (0, G.jsxs)(`div`, {
      className: lt,
      children: [
        (0, G.jsxs)(`div`, {
          className: st,
          children: [
            (0, G.jsx)(`h2`, {
              children: P(`#App_Landing_DemoWishlist_Title`),
            }),
            (0, G.jsx)(`a`, {
              className: ct,
              href: e,
              children: P(`#App_Landing_DemoWishlist_Link`),
            }),
          ],
        }),
        m &&
          (0, G.jsx)(bt, {
            demoAppID: t,
            parentAppId: n,
            bSendEmailsSucceeded: c,
            setSendEmailsSucceeded: l,
            bIsDemoVisible: s,
          }),
        m && s === !1 && (0, G.jsx)(gt, { demoAppID: t, parentAppId: n }),
        m && g && (0, G.jsx)(`hr`, { className: `kJKQ7pq9uBQ-` }),
        g &&
          (0, G.jsx)(St, {
            parentAppId: n,
            timeStaged: a,
            noticeVisibleToDate: h,
          }),
      ],
    });
  }
}
function bt(e) {
  let {
      demoAppID: n,
      parentAppId: r,
      bIsDemoVisible: i,
      bSendEmailsSucceeded: a,
      setSendEmailsSucceeded: o,
    } = e,
    [s, c] = W.useState(!1),
    [l, u] = W.useState(!1),
    d = L(),
    f = W.useCallback(async () => {
      u(!1), c(!0);
      try {
        let e = w.Init(be);
        e.Body().set_demo_appid(n), e.Body().set_appid(r);
        let t = await z.QueueWishlistDemoEmailToFire(d, e);
        o(t.BSuccess());
      } finally {
        c(!1);
      }
    }, [n, r, d, o]),
    { bLoading: p, rgWarnings: m } = xt(r, n),
    h = m.every((e) => !e.bCritical);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`div`, {
        className: ut,
        children: P(`#App_Landing_DemoWishlist_SubTitle`),
      }),
      (0, G.jsx)(`div`, {
        className: dt,
        children: (0, G.jsx)(`p`, {
          children: P(`#App_Landing_DemoWishlist_Desc`),
        }),
      }),
      p
        ? (0, G.jsx)(Ze, {})
        : (0, G.jsxs)(G.Fragment, {
            children: [
              m.map((e) =>
                (0, G.jsx)(
                  `div`,
                  {
                    className: t(pt, e.bCritical && `b0mgbqlTptQ-`),
                    children: (0, G.jsx)(`p`, { children: e.sText }),
                  },
                  e.sText,
                ),
              ),
              a === void 0 &&
                (0, G.jsx)(G.Fragment, {
                  children: (0, G.jsxs)(`div`, {
                    className: `GB5htOj-H3w-`,
                    children: [
                      (0, G.jsx)(M, {
                        className: t(
                          `btn_green_steamui btn_border_2px btn_medium`,
                          `I-mdGc7U3CQ-`,
                        ),
                        disabled: s || !h || !i,
                        onClick: () => u(!0),
                        children: (0, G.jsx)(`span`, {
                          children: P(
                            `#App_Landing_DemoWishlist_SendEmailsButton`,
                          ),
                        }),
                      }),
                      s &&
                        (0, G.jsx)(Ze, {
                          className: `pfOBfU1XYpw-`,
                          size: `small`,
                        }),
                    ],
                  }),
                }),
              a !== void 0 &&
                (0, G.jsxs)(`div`, {
                  className: `GB5htOj-H3w-`,
                  children: [
                    a &&
                      (0, G.jsx)(`div`, {
                        className: `l4AqU3s0T-0-`,
                        children: P(
                          `#App_Landing_DemoWishlist_SendEmails_Succeeded`,
                        ),
                      }),
                    !a &&
                      (0, G.jsx)(`div`, {
                        className: `PbPeHd0P-uM-`,
                        children: P(
                          `#App_Landing_DemoWishlist_SendEmails_Failed`,
                        ),
                      }),
                  ],
                }),
            ],
          }),
      l &&
        (0, G.jsxs)(Te, {
          active: !0,
          className: void 0,
          children: [
            (0, G.jsx)(`h1`, {
              children: P(`#App_Landing_DemoWishlist_Dialog_Header`),
            }),
            (0, G.jsxs)(le, {
              className: void 0,
              children: [
                (0, G.jsx)(`div`, {
                  children: P(`#App_Landing_DemoWishlist_Dialog_Desc`),
                }),
                (0, G.jsx)(`h2`, {
                  children: P(`#App_Landing_DemoWishlist_Dialog_ListTitle`),
                }),
                (0, G.jsx)(`ul`, {
                  children: F(
                    `#App_Landing_DemoWishlist_Dialog_List`,
                    (0, G.jsx)(`li`, {}),
                    (0, G.jsx)(`b`, {}),
                  ),
                }),
              ],
            }),
            (0, G.jsx)(pe, {
              onOK: f,
              strOKText: P(`#App_Landing_DemoWishlist_Dialog_Confirm`),
              onCancel: () => u(!1),
              strCancelText: P(`#App_Landing_DemoWishlist_Dialog_Cancel`),
            }),
          ],
        }),
    ],
  });
}
function xt(e, t) {
  let n = V({ appid: e }),
    r = V({ appid: t }),
    [i] = Qe(e, { include_release: !0 }),
    a = n.isLoading || r.isLoading,
    o = n.isSuccess && r.isSuccess,
    [s, c, l, u] = W.useMemo(() => {
      if (!o) return [];
      let e = (e) =>
        O(
          e?.map((e) => e.toUpperCase()),
          !0,
        );
      return [
        e(n.data.allowed_countries),
        e(n.data.restricted_countries)?.filter((e) => e != `XC`),
        e(r.data.allowed_countries),
        e(r.data.restricted_countries)?.filter((e) => e != `XC`),
      ];
    }, [o, r, n]);
  if (a) return { bLoading: !0, rgWarnings: [] };
  if (!o)
    return {
      bLoading: !1,
      rgWarnings: [
        {
          sText: P(`#App_Landing_DemoWishlist_CountryLoad_Failed`),
          bCritical: !0,
        },
      ],
    };
  let d = [],
    f = i && i.GetReleaseDateRTime(!0);
  f &&
    f > new Date().getTime() / 1e3 &&
    f < new Date().getTime() / 1e3 + 14 * N.PerDay &&
    d.push({
      sText: P(
        `#App_Landing_DemoWishlist_ParentAppWarning`,
        i.GetFormattedSteamReleaseDate(),
      ),
    });
  let p = (e, t) =>
      e.length == 0 && t.length == 0
        ? `unrestricted`
        : e.length > 0
          ? `allow`
          : `deny`,
    m = p(s, c),
    h = p(l, u),
    g = (e, t) =>
      e.length == 0 && t.length == 0
        ? P(
            `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Unrestricted`,
          )
        : e.length > 0
          ? P(
              `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Allow`,
              e.join(`, `),
            )
          : P(
              `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Deny`,
              t.join(`, `),
            ),
    _ = g(s, c),
    v = g(l, u);
  return (
    m != `unrestricted` && h != `unrestricted` && s.length > 0 != l.length > 0
      ? d.push({
          sText: P(
            `#App_Landing_DemoWishlist_CountryRestrictionTypes_Mismatch`,
            _,
            v,
          ),
          bCritical: !0,
        })
      : _ != v &&
        d.push({
          sText: P(
            `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch`,
            _,
            v,
          ),
        }),
    { bLoading: !1, rgWarnings: d }
  );
}
function St(e) {
  let { parentAppId: t, timeStaged: n, noticeVisibleToDate: r } = e,
    i = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`,
    a = i(new Date((n - vt * N.PerDay) * 1e3)),
    o = i(new Date()),
    s = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    }).format(n * 1e3),
    c = new Intl.DateTimeFormat(navigator.language, {
      year: `numeric`,
      month: `long`,
      day: `numeric`,
    }).format(r * 1e3),
    l = `${b.STATS_BASE_URL}app/wishlist/${t}/?dateStart=${a}&dateEnd=${o}`;
  return (0, G.jsxs)(`div`, {
    className: dt,
    children: [
      (0, G.jsx)(`p`, {
        children: P(`#App_Landing_DemoWishlist_SentRecently_Desc`, s),
      }),
      (0, G.jsx)(`p`, {
        children: (0, G.jsx)(`a`, {
          href: l,
          children: P(`#App_Landing_DemoWishlist_SentRecently_ViewStats`),
        }),
      }),
      (0, G.jsx)(`p`, {
        className: ft,
        children: P(`#App_Landing_DemoWishlist_SentRecently_Notice`, c),
      }),
    ],
  });
}
var Ct = x(Ee());
function wt(e, t, n) {
  let { isLoading: r, data: i } = R({
    queryKey: [`usePartnerFinancialDailySummary`, e, t, n],
    queryFn: async () => {
      let r = { partnerid: e, pastdays: t, appid: n },
        i = `${b.PARTNER_BASE_URL}financial/ajaxgetpartnersummary`,
        a = await Ct.default.get(i, { params: r, withCredentials: !0 });
      return a?.data?.success == 1
        ? a.data.data
        : { daily_sales: [], summary_sales: {} };
    },
    enabled: !!e && t >= 1,
  });
  return r ? null : i;
}
function Tt(e) {
  let { nPartnerID: t, nAppID: n } = e;
  return C.is_support ? (0, G.jsx)(Et, { nPartnerID: t, nAppID: n }) : null;
}
function Et(e) {
  let { nPartnerID: n, nAppID: r } = e,
    [i, a] = (0, W.useState)(90),
    o = wt(n, i, r);
  return !o || o.daily_sales?.length == 0
    ? null
    : (0, G.jsxs)(`div`, {
        className: t(Ke, `valveOutline padded`),
        children: [
          (0, G.jsx)(`p`, { className: `valveh2`, children: `Valve Only:` }),
          (0, G.jsx)(Ot, { nDaysInThePast: i, fnUpdateDaysInPast: a }),
          (0, G.jsx)(jt, { stats: o }),
          (0, G.jsx)(Mt, { stats: o }),
        ],
      });
}
var Dt = [
  { label: P(`#PartnerStats_DayWeek`), data: 7 },
  { label: P(`#PartnerStats_DayMonth`), data: 30 },
  { label: P(`#PartnerStats_DayPeriod`), data: 90 },
];
function Ot(e) {
  let { nDaysInThePast: t, fnUpdateDaysInPast: n } = e;
  return (0, G.jsxs)(`div`, {
    className: qe,
    children: [
      (0, G.jsxs)(`div`, {
        className: Fe,
        children: [
          (0, G.jsx)(`div`, {
            className: Ie,
            children: P(`#PartnerStats_DayLabel`),
          }),
          (0, G.jsx)(me, {
            layout: `inline`,
            label: null,
            rgOptions: Dt,
            selectedOption: t,
            onChange: (e) => n(e.data),
          }),
        ],
      }),
      (0, G.jsx)(`div`, {
        className: Oe,
        children: (0, G.jsx)(`a`, {
          href: `#`,
          children: P(`#PartnerStats_ViewDetail`),
        }),
      }),
    ],
  });
}
var kt = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});
function At(...e) {
  let t = 0;
  return (
    e.forEach((e) => {
      t += Number.parseInt(e || `0`) / 1e4;
    }),
    kt.format(t)
  );
}
function jt(e) {
  let { stats: t } = e;
  return (0, G.jsxs)(`div`, {
    className: Ge,
    children: [
      (0, G.jsxs)(`div`, {
        className: Ve,
        children: [
          (0, G.jsx)(`div`, {
            className: Ue,
            children: P(`#PartnerStats_Header_Revenue`),
          }),
          (0, G.jsx)(`div`, {
            className: We,
            children: At(t.summary_sales.total_gross_sales_usdx100),
          }),
        ],
      }),
      (0, G.jsxs)(`div`, {
        className: Ve,
        children: [
          (0, G.jsx)(`div`, {
            className: Ue,
            children: P(`#PartnerStats_Header_Units`),
          }),
          (0, G.jsx)(`div`, {
            className: We,
            children: Ce(
              Number.parseInt(t.summary_sales.steam_gross_units_sold || `0`),
            ),
          }),
        ],
      }),
    ],
  });
}
function Mt(e) {
  let { stats: t } = e,
    n = `total_gross_sales_usdx100`,
    [r, i, a] = (0, W.useMemo)(() => {
      if (!t || t.daily_sales?.length == 0) return [0, 0, []];
      let e = Pt(t.daily_sales, n),
        r = 0,
        i = 0;
      return (
        e.forEach((e) => {
          e.partner_stats_value > r && (r = e.partner_stats_value),
            (i += e.partner_stats_value);
        }),
        [r, i, e.sort((e, t) => e.rtime - t.rtime)]
      );
    }, [t, n]);
  return !t || a.length == 0
    ? null
    : (0, G.jsx)(`div`, {
        className: Ne,
        children: (0, G.jsx)(`div`, {
          className: He,
          children: (0, G.jsx)(ne, {
            children: (0, G.jsx)(Ft, { Data: a, nPeak: r }),
          }),
        }),
      });
}
function Nt(e, t) {
  return e[t];
}
function Pt(e, t) {
  let n = new Map();
  return (
    e.forEach((e) => {
      let r = e.rtime_date,
        i = Number.parseInt(Nt(e.daily_summary_sales, t));
      i &&
        n.set(r, {
          partner_stats_value: t.includes(`usd`) ? i / 1e4 : i,
          rtime: r,
          top_app_sales: e.top_app_sales,
        });
    }),
    Array.from(n.values())
  );
}
var Ft = W.memo((e) => {
  let { Data: t, nPeak: n } = e,
    r = (0, W.useCallback)(
      (e, n) =>
        t.length > 20
          ? t[n]?.partner_stats_value && n % 7 == 0
            ? new Date(t[n].rtime * 1e3).toLocaleDateString(
                de.GetPreferredLocales(),
                { month: `short`, day: `numeric` },
              )
            : ``
          : t[n]?.partner_stats_value
            ? new Date(t[n].rtime * 1e3).toLocaleDateString(
                de.GetPreferredLocales(),
                { month: `short`, day: `numeric` },
              )
            : ``,
      [t],
    );
  return (0, G.jsx)(ke, {
    width: `100%`,
    height: `100%`,
    children: (0, G.jsxs)(ze, {
      accessibilityLayer: !1,
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 10,
      children: [
        (0, G.jsx)(`defs`, {
          children: (0, G.jsxs)(`linearGradient`, {
            id: `bar_linear`,
            x1: `0`,
            x2: `0`,
            y1: `0`,
            y2: `1`,
            children: [
              (0, G.jsx)(`stop`, { stopColor: `#1A9FFF` }),
              (0, G.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#1A9FFF`,
                stopOpacity: `1`,
              }),
            ],
          }),
        }),
        (0, G.jsx)(je, { vertical: !1, stroke: `#a0aab6` }),
        (0, G.jsx)(Re, {
          tickFormatter: B,
          tick: { fill: `white` },
          axisLine: !1,
          orientation: `right`,
        }),
        (0, G.jsx)(Le, { content: (0, G.jsx)(Lt, {}) }),
        (0, G.jsx)(Xe, {
          dataKey: `partner_stats_value`,
          fill: `url( #bar_linear )`,
        }),
        (0, G.jsx)(Ae, {
          interval: 0,
          tick: (0, G.jsx)(It, {}),
          tickFormatter: r,
        }),
      ],
    }),
  });
});
function It(e) {
  let { x: t, y: n, payload: r } = e,
    i = e.tickFormatter(r.value, r.index);
  return (0, G.jsx)(`g`, {
    transform: `translate(${t},${n})`,
    children: (0, G.jsx)(`text`, {
      x: 0,
      y: 0,
      dy: 16,
      textAnchor: `middle`,
      fill: `#FFFFFF`,
      transform: `rotate(0)`,
      fontSize: `11px`,
      children: i,
    }),
  });
}
function Lt({ active: e, payload: n }) {
  if (e && n && n.length) {
    let e = n[0].payload,
      r = e.partner_stats_value,
      i = r;
    return (
      e.top_app_sales.forEach((e) => {
        i -=
          Number.parseInt(e.app_summary_sales.total_gross_sales_usdx100) / 1e4;
      }),
      (0, G.jsxs)(fe, {
        className: Ye,
        children: [
          (0, G.jsx)(`div`, {
            children: P(`#PartnerStats_Tooltip_Date`, ue(e.rtime)),
          }),
          (0, G.jsx)(`div`, {
            className: Be,
            children: (0, G.jsxs)(`div`, {
              className: Je,
              children: [
                e.top_app_sales.map((e) => {
                  let t =
                    (Number.parseInt(
                      e.app_summary_sales.total_gross_sales_usdx100,
                    ) /
                      1e4 /
                      r) *
                    100;
                  return (0, G.jsx)(
                    Rt,
                    {
                      appid: e.appid,
                      usdRevenue:
                        Number.parseInt(
                          e.app_summary_sales.total_gross_sales_usdx100,
                        ) / 1e4,
                      nPercentage: t,
                    },
                    `app` + e.appid,
                  );
                }),
                i > 2 &&
                  (0, G.jsxs)(`div`, {
                    className: `OMu8YgzmezU-`,
                    children: [
                      (0, G.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: P(`#PartnerStats_Tooltip_Remaining`),
                      }),
                      (0, G.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: B(i),
                      }),
                      (0, G.jsxs)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: [Math.round((i / r) * 100), `%`],
                      }),
                    ],
                  }),
                (0, G.jsxs)(`div`, {
                  className: t(Pe, Me),
                  children: [
                    (0, G.jsx)(`div`, {
                      className: H,
                      children: P(`#PartnerStats_Tooltip_Total`),
                    }),
                    (0, G.jsx)(`div`, { className: H, children: B(r) }),
                    (0, G.jsx)(`div`, { className: H }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  }
  return null;
}
function Rt(e) {
  let { appid: t, usdRevenue: n, nPercentage: r } = e,
    [i] = Qe(t, {});
  return (0, G.jsxs)(`div`, {
    className: Pe,
    children: [
      (0, G.jsx)(`div`, { className: H, children: i?.GetName() || t }),
      (0, G.jsx)(`div`, { className: H, children: B(n) }),
      (0, G.jsxs)(`div`, { className: H, children: [Math.round(r), `%`] }),
    ],
  });
}
function zt(e) {
  let { nAppId: t, strAppType: n } = e,
    r = Se();
  return (
    (n == `Game` || n == `Application` || n == `DLC` || n == `Music`) &&
    (0, G.jsx)(Tt, { nPartnerID: r, nAppID: t })
  );
}
function Bt(e) {
  let { nAppId: t, nParentAppId: n, strAppType: r } = e;
  return (
    r == `Demo` &&
    (0, G.jsx)(ot, {
      children: (0, G.jsx)(yt, { demoAppID: t, parentAppId: n }),
    })
  );
}
var Vt = `tPLTOu9ePPk-`,
  Ht = `-Q1V6OzMJYQ-`,
  Ut = `Yd5hCSNUAy4-`,
  Wt = `_4rW9U0LKR7k-`,
  Gt = `GnGbfQ9iTVU-`,
  Kt = `_0aChvQftTzc-`,
  qt = `MBmJikXJxtw-`,
  Jt = `_2vHaP5ZDZ6A-`,
  Yt = `nc8h1C7mz7w-`,
  Xt = `JVr5LOg2d6c-`,
  K = x(d(), 1),
  Zt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: n.readString, bw: p.writeString },
            value: { n: 2, br: n.readString, bw: p.writeString },
            color: { n: 3, br: n.readString, bw: p.writeString },
            label: { n: 4, br: n.readString, bw: p.writeString },
            name: { n: 5, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  Qt = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: n.readString, bw: p.writeString },
            name: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  $t = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            category: { n: 2, br: n.readString, bw: p.writeString },
            internal_name: { n: 3, br: n.readString, bw: p.writeString },
            localized_category_name: {
              n: 4,
              br: n.readString,
              bw: p.writeString,
            },
            localized_tag_name: { n: 5, br: n.readString, bw: p.writeString },
            color: { n: 6, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  en = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contained_items || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: tn, r: !0, q: !0 },
            search_tags: { n: 2, c: $t, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  tn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  q = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readInt32, bw: p.writeInt32 },
            classid: { n: 2, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            currency: { n: 4, br: n.readBool, bw: p.writeBool },
            background_color: { n: 5, br: n.readString, bw: p.writeString },
            icon_url: { n: 6, br: n.readString, bw: p.writeString },
            icon_url_large: { n: 7, br: n.readString, bw: p.writeString },
            descriptions: { n: 8, c: Zt, r: !0, q: !0 },
            tradable: { n: 9, br: n.readBool, bw: p.writeBool },
            actions: { n: 10, c: Qt, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: Zt, r: !0, q: !0 },
            owner_actions: { n: 12, c: Qt, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: n.readString,
              bw: p.writeRepeatedString,
            },
            name: { n: 14, br: n.readString, bw: p.writeString },
            name_color: { n: 15, br: n.readString, bw: p.writeString },
            type: { n: 16, br: n.readString, bw: p.writeString },
            market_name: { n: 17, br: n.readString, bw: p.writeString },
            market_hash_name: { n: 18, br: n.readString, bw: p.writeString },
            market_fee: { n: 19, br: n.readString, bw: p.writeString },
            market_fee_app: { n: 28, br: n.readInt32, bw: p.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: Qt, r: !0, q: !0 },
            commodity: { n: 22, br: n.readBool, bw: p.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: n.readInt32,
              bw: p.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: n.readInt32,
              bw: p.writeInt32,
            },
            marketable: { n: 25, br: n.readBool, bw: p.writeBool },
            tags: { n: 26, c: $t, r: !0, q: !0 },
            item_expiration: { n: 27, br: n.readString, bw: p.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: n.readString,
              bw: p.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: n.readString,
              bw: p.writeString,
            },
            sealed: { n: 32, br: n.readBool, bw: p.writeBool },
            container_properties: { n: 33, c: en },
            market_bucket_group_name: {
              n: 34,
              br: n.readString,
              bw: p.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: n.readString,
              bw: p.writeString,
            },
            sealed_type: { n: 37, br: n.readUint32, bw: p.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: n.readString,
              bw: p.writeString,
            },
            market_bucket_id: { n: 39, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  nn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.propertyid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            int_value: { n: 2, br: n.readInt64String, bw: p.writeInt64String },
            float_value: { n: 3, br: n.readFloat, bw: p.writeFloat },
            string_value: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  rn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            standalone_properties: { n: 3, c: nn, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: nn, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  an = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: n.readUint64String, bw: p.writeUint64String },
            asset_properties: { n: 4, c: nn, r: !0, q: !0 },
            asset_accessories: { n: 5, c: rn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  on = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            name: { n: 2, br: n.readString, bw: p.writeString },
            type: { n: 3, br: n.readEnum, bw: p.writeEnum },
            float_min: { n: 4, br: n.readFloat, bw: p.writeFloat },
            float_max: { n: 5, br: n.readFloat, bw: p.writeFloat },
            int_min: { n: 6, br: n.readInt64String, bw: p.writeInt64String },
            int_max: { n: 7, br: n.readInt64String, bw: p.writeInt64String },
            localized_label: { n: 8, br: n.readString, bw: p.writeString },
            hide_from_description: { n: 9, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  sn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  cn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_schemas || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: on, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  J = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: n.readUint64String, bw: p.writeUint64String },
            classid: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            currencyid: { n: 6, br: n.readUint32, bw: p.writeUint32 },
            amount: { n: 7, br: n.readInt64String, bw: p.writeInt64String },
            missing: { n: 8, br: n.readBool, bw: p.writeBool },
            est_usd: { n: 9, br: n.readInt64String, bw: p.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  ln = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            get_descriptions: { n: 4, br: n.readBool, bw: p.writeBool },
            get_asset_properties: { n: 11, br: n.readBool, bw: p.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: n.readBool,
              bw: p.writeBool,
            },
            language: { n: 5, br: n.readString, bw: p.writeString },
            filters: { n: 6, c: un },
            start_assetid: {
              n: 8,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            count: { n: 9, br: n.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  un = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assetids || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assetids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint64String,
              pbr: n.readPackedUint64String,
              bw: p.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: n.readBool, bw: p.writeBool },
            marketable_only: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  dn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: J, r: !0, q: !0 },
            descriptions: { n: 2, c: q, r: !0, q: !0 },
            missing_assets: { n: 3, c: J, r: !0, q: !0 },
            asset_properties: { n: 7, c: an, r: !0, q: !0 },
            more_items: { n: 4, br: n.readBool, bw: p.writeBool },
            last_assetid: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: n.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  fn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new_token || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  pn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offer_access_token || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offer_access_token: {
              n: 1,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  mn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.return_url || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  hn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  gn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: n.readString, bw: p.writeString },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            classes: { n: 3, c: tn, r: !0, q: !0 },
            high_pri: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  _n = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.descriptions || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: q, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  vn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      E(ln, t, n),
      dn,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, E(fn, t, n), pn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      E(mn, t, n),
      hn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, E(gn, t, n), _n, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, E(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = a;
})((vn ||= {}));
var yn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_Generic_Response`;
    }
  },
  bn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            force_context_list_refresh: {
              n: 2,
              br: n.readBool,
              bw: p.writeBool,
            },
            add_app_if_doesnt_exist: { n: 3, br: n.readBool, bw: p.writeBool },
            num_new_items: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            num_removed_items: { n: 5, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Request`;
    }
  },
  xn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.can_receive || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_receive: { n: 1, br: n.readBool, bw: p.writeBool },
            can_send: { n: 2, br: n.readBool, bw: p.writeBool },
            exceeded_max_asset_count: { n: 3, br: n.readBool, bw: p.writeBool },
            app_missing: { n: 4, br: n.readBool, bw: p.writeBool },
            disabled_in_region: { n: 5, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Response`;
    }
  },
  Sn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            show_private: { n: 2, br: n.readBool, bw: p.writeBool },
            cached_asset_count_only: { n: 3, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEconSummary_Request`;
    }
  },
  Cn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            name: { n: 2, br: n.readString, bw: p.writeString },
            asset_count: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AppSummary`;
    }
  },
  wn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: Cn, r: !0, q: !0 },
            num_trades: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            time_last_trade: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            steamid_last_trade_partner: {
              n: 4,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_market_listings: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            num_market_transactions: {
              n: 6,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            time_last_market_sale: {
              n: 7,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            steamid_last_market_sale: {
              n: 8,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_last_market_purchase: {
              n: 9,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            steamid_last_market_purchase: {
              n: 10,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_trades_in_escrow: {
              n: 11,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            time_all_escrow_end: { n: 12, br: n.readUint32, bw: p.writeUint32 },
            cached_data_needs_updating: {
              n: 13,
              br: n.readBool,
              bw: p.writeBool,
            },
            num_trade_partners: { n: 14, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEconSummary_Response`;
    }
  },
  Tn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Request`;
    }
  },
  En = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            num_trades: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            time_first_trade: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            time_last_trade: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_TopTradePartner`;
    }
  },
  Dn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.partners || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partners: { n: 1, c: En, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Response`;
    }
  },
  On = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_banned_until: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            time_probation_until: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_SetTradeBanTime_Request`;
    }
  },
  kn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_force_trusted_until: {
              n: 2,
              br: n.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_SetForceTradeTrustedTime_Request`;
    }
  },
  An = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_target || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_target: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            items_to_give: { n: 2, c: J, r: !0, q: !0 },
            items_to_receive: { n: 3, c: J, r: !0, q: !0 },
            message: { n: 4, br: n.readString, bw: p.writeString },
            tradeofferid_countered: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            webcookie: { n: 6, br: n.readString, bw: p.writeString },
            trading_topic: { n: 7, c: jn },
            trade_offer_access_token: {
              n: 8,
              br: n.readString,
              bw: p.writeString,
            },
            from_realtime_trade: { n: 9, br: n.readBool, bw: p.writeBool },
            ip_sender: { n: 10, br: n.readString, bw: p.writeString },
            machine_authid_sender: {
              n: 11,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            ip_target: { n: 12, br: n.readString, bw: p.writeString },
            machine_authid_target: {
              n: 13,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request`;
    }
  },
  jn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_owner || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_owner: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            forumtype: { n: 2, br: n.readString, bw: p.writeString },
            gidfeature: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            gidtopic: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request_ForumTopicIdentifier`;
    }
  },
  Mn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            trade_response: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Response`;
    }
  },
  Nn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_target || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_target: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            item_to_give: { n: 3, c: J },
            webcookie: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_SendGift_Request`;
    }
  },
  Pn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            trade_response: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_SendGift_Response`;
    }
  },
  Fn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.get_sent_offers || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            get_sent_offers: { n: 1, br: n.readBool, bw: p.writeBool },
            get_received_offers: { n: 2, br: n.readBool, bw: p.writeBool },
            get_descriptions: { n: 3, br: n.readBool, bw: p.writeBool },
            language: { n: 4, br: n.readString, bw: p.writeString },
            active_only: { n: 6, br: n.readBool, bw: p.writeBool },
            historical_only: { n: 7, br: n.readBool, bw: p.writeBool },
            time_historical_cutoff: {
              n: 8,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            cursor: { n: 9, d: 0, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Request`;
    }
  },
  Y = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            accountid_other: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            message: { n: 3, br: n.readString, bw: p.writeString },
            expiration_time: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            trade_offer_state: { n: 5, br: n.readEnum, bw: p.writeEnum },
            items_to_give: { n: 6, c: J, r: !0, q: !0 },
            items_to_receive: { n: 7, c: J, r: !0, q: !0 },
            is_our_offer: { n: 8, br: n.readBool, bw: p.writeBool },
            time_created: { n: 9, br: n.readUint32, bw: p.writeUint32 },
            time_updated: { n: 10, br: n.readUint32, bw: p.writeUint32 },
            tradeid: {
              n: 11,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            from_real_time_trade: { n: 12, br: n.readBool, bw: p.writeBool },
            escrow_end_date: { n: 13, br: n.readUint32, bw: p.writeUint32 },
            confirmation_method: { n: 14, br: n.readEnum, bw: p.writeEnum },
            partner_confirmation_method: {
              n: 15,
              br: n.readEnum,
              bw: p.writeEnum,
            },
            eresult: { n: 16, d: 1, br: n.readUint32, bw: p.writeUint32 },
            delay_settlement: { n: 17, br: n.readBool, bw: p.writeBool },
            settlement_date: { n: 18, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_TradeOffer`;
    }
  },
  In = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offers_sent || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offers_sent: { n: 1, c: Y, r: !0, q: !0 },
            trade_offers_received: { n: 2, c: Y, r: !0, q: !0 },
            descriptions: { n: 3, c: q, r: !0, q: !0 },
            next_cursor: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Response`;
    }
  },
  Ln = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeid: { n: 2, br: n.readUint64String, bw: p.writeUint64String },
            trade_status: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Request`;
    }
  },
  Rn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Response`;
    }
  },
  zn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_target || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_target: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            trade_offer_access_token: {
              n: 2,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Request`;
    }
  },
  Bn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.my_escrow || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            my_escrow: { n: 1, c: Vn },
            their_escrow: { n: 2, c: Vn },
            both_escrow: { n: 3, c: Vn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response`;
    }
  },
  Vn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.escrow_end_duration_seconds || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            escrow_end_duration_seconds: {
              n: 1,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            escrow_end_date: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            escrow_end_date_rfc3339: {
              n: 3,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response_Scenario`;
    }
  },
  Hn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 2, br: n.readString, bw: p.writeString },
            get_descriptions: { n: 3, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Request`;
    }
  },
  Un = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferForAnyUser_Request`;
    }
  },
  Wn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.offer || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: Y },
            descriptions: { n: 2, c: q, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Response`;
    }
  },
  Gn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 3, br: n.readString, bw: p.writeString },
            confirmation_code: {
              n: 4,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Request`;
    }
  },
  Kn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.offer || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: Y },
            descriptions: { n: 2, c: q, r: !0, q: !0 },
            asset_properties: { n: 3, c: an, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Response`;
    }
  },
  qn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            webcookie: { n: 2, br: n.readString, bw: p.writeString },
            ip: { n: 3, br: n.readString, bw: p.writeString },
            machine_authid: {
              n: 4,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Request`;
    }
  },
  Jn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            trade_response: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Response`;
    }
  },
  Yn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            confirmation_code: {
              n: 3,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            mid: { n: 4, br: n.readString, bw: p.writeString },
            cancel_offer: { n: 5, br: n.readBool, bw: p.writeBool },
            already_authed: { n: 6, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Request`;
    }
  },
  Xn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            trade_response: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Response`;
    }
  },
  Zn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Request`;
    }
  },
  Qn = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Response`;
    }
  },
  $n = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeofferid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeofferid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Request`;
    }
  },
  er = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Response`;
    }
  },
  tr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: n.readBool, bw: p.writeBool },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            escrow_only: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Request`;
    }
  },
  nr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.num_cancelled || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_cancelled: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            num_escrow_cancelled: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            num_failures: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            num_escrow_failures: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Response`;
    }
  },
  rr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: n.readBool, bw: p.writeBool },
            appid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            escrow_only: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Notification`;
    }
  },
  ir = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_partya || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_partya: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid_partyb: {
              n: 2,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            involved_apps: {
              n: 3,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_IsSafeToCommitTrade_Request`;
    }
  },
  ar = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.time_last_visit || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_last_visit: { n: 1, br: n.readFixed32, bw: p.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Request`;
    }
  },
  or = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.pending_received_count || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            pending_received_count: {
              n: 1,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            new_received_count: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            updated_received_count: {
              n: 3,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            historical_received_count: {
              n: 4,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            pending_sent_count: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            newly_accepted_sent_count: {
              n: 6,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            updated_sent_count: { n: 7, br: n.readUint32, bw: p.writeUint32 },
            historical_sent_count: {
              n: 8,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            escrow_received_count: {
              n: 9,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            escrow_sent_count: { n: 10, br: n.readUint32, bw: p.writeUint32 },
            provisional: { n: 11, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Response`;
    }
  },
  sr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.max_trades || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            max_trades: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            start_after_time: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            start_after_tradeid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            navigating_back: { n: 4, br: n.readBool, bw: p.writeBool },
            get_descriptions: { n: 5, br: n.readBool, bw: p.writeBool },
            language: { n: 6, br: n.readString, bw: p.writeString },
            include_failed: { n: 7, br: n.readBool, bw: p.writeBool },
            include_total: { n: 8, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Request`;
    }
  },
  cr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total_trades || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_trades: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            more: { n: 2, br: n.readBool, bw: p.writeBool },
            trades: { n: 3, c: lr, r: !0, q: !0 },
            descriptions: { n: 4, c: q, r: !0, q: !0 },
            devices: { n: 5, c: pr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response`;
    }
  },
  lr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [6, 7, 8, 9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            steamid_other: {
              n: 2,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            time_init: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            time_escrow_end: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            status: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            assets_received: { n: 6, c: ur, r: !0, q: !0 },
            assets_given: { n: 7, c: ur, r: !0, q: !0 },
            currency_received: { n: 8, c: dr, r: !0, q: !0 },
            currency_given: { n: 9, c: dr, r: !0, q: !0 },
            time_settlement: { n: 10, br: n.readUint32, bw: p.writeUint32 },
            time_mod: { n: 11, br: n.readUint32, bw: p.writeUint32 },
            rollback_trade: {
              n: 12,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            trade_auth: { n: 13, c: fr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade`;
    }
  },
  ur = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            assetid: { n: 3, br: n.readUint64String, bw: p.writeUint64String },
            amount: { n: 4, br: n.readInt64String, bw: p.writeInt64String },
            classid: { n: 5, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 6,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            new_assetid: {
              n: 7,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            new_contextid: {
              n: 8,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_assetid: {
              n: 9,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_contextid: {
              n: 10,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedAsset`;
    }
  },
  dr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            currencyid: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            amount: { n: 4, br: n.readInt64String, bw: p.writeInt64String },
            fee_amount: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            classid: { n: 6, br: n.readUint64String, bw: p.writeUint64String },
            new_currencyid: { n: 7, br: n.readUint32, bw: p.writeUint32 },
            new_contextid: {
              n: 8,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            rollback_new_currencyid: {
              n: 9,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            rollback_new_contextid: {
              n: 10,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedCurrency`;
    }
  },
  fr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_sender || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_sender: { n: 1, br: n.readBool, bw: p.writeBool },
            confirm_type: { n: 2, br: n.readInt32, bw: p.writeInt32 },
            time_confirmed: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            country: { n: 4, br: n.readString, bw: p.writeString },
            state: { n: 5, br: n.readString, bw: p.writeString },
            city: { n: 6, br: n.readString, bw: p.writeString },
            token_id: {
              n: 7,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_Authorization`;
    }
  },
  pr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.token_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token_id: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            first_authed: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            current_device: { n: 3, br: n.readBool, bw: p.writeBool },
            platform_type: { n: 4, br: n.readInt32, bw: p.writeInt32 },
            guard_type: { n: 5, br: n.readInt32, bw: p.writeInt32 },
            authentication_type: { n: 6, br: n.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_DeviceDetails`;
    }
  },
  mr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetProvisionalTradeHistory_Request`;
    }
  },
  hr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            get_descriptions: { n: 2, br: n.readBool, bw: p.writeBool },
            language: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeStatus_Request`;
    }
  },
  gr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Request`;
    }
  },
  _r = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_response || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            allowed_to_trade: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            probation_default_time: {
              n: 3,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            probation_remaining: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Response`;
    }
  },
  vr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Request`;
    }
  },
  yr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_response || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            allowed_to_trade: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            steamguard_required_days: {
              n: 3,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            new_device_cooldown_days: {
              n: 4,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            default_password_reset_probation_days: {
              n: 5,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            password_reset_probation_days: {
              n: 6,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            default_email_change_probation_days: {
              n: 7,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            email_change_probation_days: {
              n: 8,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            time_allowed_to_trade: {
              n: 9,
              br: n.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Response`;
    }
  },
  br = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetUserTradeEligibility_Request`;
    }
  },
  xr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Request`;
    }
  },
  Sr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.abuse_score || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            abuse_score: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            trade_abuse_score: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            keyword_abuse_score: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Response`;
    }
  },
  Cr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            trade_offer_access_token: {
              n: 2,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Request`;
    }
  },
  wr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Response`;
    }
  },
  Tr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            contextid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Request`;
    }
  },
  Er = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.success || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: n.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Response`;
    }
  },
  Dr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Request`;
    }
  },
  Or = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Response`;
    }
  },
  kr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Request`;
    }
  },
  Ar = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Response`;
    }
  },
  jr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushContextCache_Request`;
    }
  },
  Mr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FlushContextCache_Response`;
    }
  },
  Nr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Request`;
    }
  },
  Pr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            asset_class_version: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            context_version: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Response`;
    }
  },
  Fr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Request`;
    }
  },
  Ir = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.token || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Response`;
    }
  },
  Lr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            currency: { n: 2, br: n.readString, bw: p.writeString },
            language: { n: 3, br: n.readString, bw: p.writeString },
            asset_class_properties: { n: 4, c: Rr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request`;
    }
  },
  Rr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: n.readString, bw: p.writeString },
            value: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request_AssetClassProperty`;
    }
  },
  zr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { assets: { n: 1, c: Vr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response`;
    }
  },
  Br = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.currency || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            currency: { n: 1, br: n.readString, bw: p.writeString },
            amount: { n: 2, br: n.readInt64String, bw: p.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Price`;
    }
  },
  Vr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2, 3, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: n.readString, bw: p.writeString },
            prices: { n: 2, c: Br, r: !0, q: !0 },
            original_prices: { n: 3, c: Br, r: !0, q: !0 },
            classid: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: n.readString,
              bw: p.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Asset`;
    }
  },
  Hr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            language: { n: 2, br: n.readString, bw: p.writeString },
            country_code: { n: 3, br: n.readString, bw: p.writeString },
            show_featured: { n: 4, br: n.readBool, bw: p.writeBool },
            count: { n: 5, d: 5, br: n.readUint32, bw: p.writeUint32 },
            realm: { n: 6, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Request`;
    }
  },
  Ur = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.items || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            items: { n: 1, c: Wr, r: !0, q: !0 },
            total_count: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response`;
    }
  },
  Wr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.itemdefid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            itemdefid: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            name: { n: 2, br: n.readString, bw: p.writeString },
            formatted_price: { n: 3, br: n.readString, bw: p.writeString },
            icon_url: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response_Item`;
    }
  },
  Gr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            data: { n: 2, br: n.readString, bw: p.writeString },
            hmac: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Request`;
    }
  },
  Kr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ok || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ok: { n: 1, br: n.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Response`;
    }
  },
  qr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.overlay_auth_cookie || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: n.readString, bw: p.writeString },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            cart: { n: 3, br: n.readString, bw: p.writeString },
            currency: { n: 4, br: n.readString, bw: p.writeString },
            total: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            sandbox: { n: 6, br: n.readBool, bw: p.writeBool },
            referrer: { n: 7, br: n.readString, bw: p.writeString },
            language: { n: 8, br: n.readString, bw: p.writeString },
            itemshop_auth: { n: 9, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Request`;
    }
  },
  Jr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.orderid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            orderid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            url: { n: 2, br: n.readString, bw: p.writeString },
            displaytext: { n: 3, br: n.readString, bw: p.writeString },
            transid: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Response`;
    }
  },
  Yr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.overlay_auth_cookie || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: n.readString, bw: p.writeString },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            sandbox: { n: 3, br: n.readBool, bw: p.writeBool },
            orderid: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Request`;
    }
  },
  Xr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.state || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { state: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Response`;
    }
  },
  Zr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.overlay_auth_cookie || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: n.readString, bw: p.writeString },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            sandbox: { n: 3, br: n.readBool, bw: p.writeBool },
            orderid: { n: 4, br: n.readUint64String, bw: p.writeUint64String },
            language: { n: 5, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Request`;
    }
  },
  Qr = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Response`;
    }
  },
  $r = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.overlay_auth_cookie || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: n.readString, bw: p.writeString },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            url: { n: 3, br: n.readString, bw: p.writeString },
            itemshop_auth: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Request`;
    }
  },
  ei = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Response`;
    }
  },
  ti = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            gameitemid: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Request`;
    }
  },
  ni = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.supports_refunds || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            supports_refunds: { n: 1, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Response`;
    }
  },
  ri = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            transactionid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            language: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Request`;
    }
  },
  ii = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.allow_refund || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: n.readBool, bw: p.writeBool },
            assets: { n: 2, c: ai, r: !0, q: !0 },
            descriptions: { n: 3, c: q, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response`;
    }
  },
  ai = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.allow_refund || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: n.readBool, bw: p.writeBool },
            in_inventory: { n: 2, br: n.readBool, bw: p.writeBool },
            bundle: { n: 3, br: n.readBool, bw: p.writeBool },
            gameid: { n: 4, br: n.readInt32, bw: p.writeInt32 },
            asset: { n: 5, c: J },
            current_state: { n: 6, br: n.readString, bw: p.writeString },
            item_name: { n: 7, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response_Asset`;
    }
  },
  oi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            transactionid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            force: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RefundPurchase_Request`;
    }
  },
  si = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RefundPurchase_Response`;
    }
  },
  ci = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            language: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Request`;
    }
  },
  li = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.allow_refund || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: n.readBool, bw: p.writeBool },
            allow_ticket: { n: 2, br: n.readBool, bw: p.writeBool },
            assets: { n: 3, c: ui, r: !0, q: !0 },
            descriptions: { n: 4, c: q, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response`;
    }
  },
  ui = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.refundid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refundid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            parent_refundid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            allow_refund: { n: 3, br: n.readBool, bw: p.writeBool },
            refund_removes_item_from_inventory: {
              n: 4,
              br: n.readBool,
              bw: p.writeBool,
            },
            refund_returns_item_to_inventory: {
              n: 5,
              br: n.readBool,
              bw: p.writeBool,
            },
            refund_amount: {
              n: 6,
              br: n.readInt64String,
              bw: p.writeInt64String,
            },
            refund_ecurrencycode: { n: 7, br: n.readInt32, bw: p.writeInt32 },
            related_microtxn_id: {
              n: 8,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            related_market_purchase_id: {
              n: 9,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            related_trade_id: {
              n: 10,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            asset: { n: 11, c: J },
            current_state: { n: 12, br: n.readString, bw: p.writeString },
            item_name: { n: 13, br: n.readString, bw: p.writeString },
            allow_ticket: { n: 14, br: n.readBool, bw: p.writeBool },
            refund_complete: { n: 15, br: n.readBool, bw: p.writeBool },
            refund_desired: { n: 16, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response_Asset`;
    }
  },
  di = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            appid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            refundid: { n: 3, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Request`;
    }
  },
  fi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Response`;
    }
  },
  pi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            instanceid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Request`;
    }
  },
  mi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.properties || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { properties: { n: 1, c: hi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response`;
    }
  },
  hi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property: { n: 1, br: n.readString, bw: p.writeString },
            value: { n: 2, br: n.readString, bw: p.writeString },
            instance: { n: 3, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response_Property`;
    }
  },
  gi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.tradeid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            force: { n: 2, br: n.readBool, bw: p.writeBool },
            in_recovery: { n: 3, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RevertTrade_Request`;
    }
  },
  _i = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RevertTrade_Response`;
    }
  },
  vi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            force: { n: 2, br: n.readBool, bw: p.writeBool },
            account_recovery: { n: 3, br: n.readBool, bw: p.writeBool },
            deauth_all_devices: {
              n: 4,
              d: !1,
              br: n.readBool,
              bw: p.writeBool,
            },
            apply_cooldown: { n: 5, d: !1, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Request`;
    }
  },
  yi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trades || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trades: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            errors: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            trade_offers: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            escrowed_trades: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Response`;
    }
  },
  bi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.ack_type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ack_type: { n: 1, br: n.readInt32, bw: p.writeInt32 },
            acknowledge: { n: 2, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Request`;
    }
  },
  xi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Response`;
    }
  },
  Si = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Request`;
    }
  },
  Ci = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.needed_types || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            needed_types: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readInt32,
              pbr: n.readPackedInt32,
              bw: p.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Response`;
    }
  },
  wi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            duration_seconds: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            cooldown_type: { n: 3, br: n.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Request`;
    }
  },
  Ti = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Response`;
    }
  },
  Ei;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Econ.GetTradePermissionsForApp#1`, E(bn, t, n), xn, {
      ePrivilege: 1,
    });
  }
  e.GetTradePermissionsForApp = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetEconSummary#1`, E(Sn, t, n), wn, {
      ePrivilege: 0,
    });
  }
  e.GetEconSummary = n;
  function r(e, t, n) {
    return e.SendMsg(`Econ.GetTopTradePartners#1`, E(Tn, t, n), Dn, {
      ePrivilege: 0,
    });
  }
  e.GetTopTradePartners = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.SetTradeBanTime#1`, E(On, t, n), yn, {
      ePrivilege: 2,
    });
  }
  e.SetTradeBanTime = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.SetForceTradeTrustedTime#1`, E(kn, t, n), yn, {
      ePrivilege: 0,
    });
  }
  e.SetForceTradeTrustedTime = a;
  function o(e, t, n) {
    return e.SendMsg(`Econ.CreateTradeOffer#1`, E(An, t, n), Mn, {
      ePrivilege: 1,
    });
  }
  e.CreateTradeOffer = o;
  function s(e, t, n) {
    return e.SendMsg(`Econ.SendGift#1`, E(Nn, t, n), Pn, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.SendGift = s;
  function c(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffers#1`, E(Fn, t, n), In, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffers = c;
  function l(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffer#1`, E(Hn, t, n), Wn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffer = l;
  function u(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForAnyUser#1`, E(Un, t, n), Wn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForAnyUser = u;
  function d(e, t, n) {
    return e.SendMsg(`Econ.TradeLeftEscrow#1`, E(Ln, t, n), Rn, {
      ePrivilege: 0,
    });
  }
  e.TradeLeftEscrow = d;
  function f(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHoldDurations#1`, E(zn, t, n), Bn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHoldDurations = f;
  function p(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForConfirmation#1`, E(Gn, t, n), Kn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForConfirmation = p;
  function m(e, t, n) {
    return e.SendMsg(`Econ.AcceptTradeOffer#1`, E(qn, t, n), Jn, {
      ePrivilege: 1,
    });
  }
  e.AcceptTradeOffer = m;
  function h(e, t, n) {
    return e.SendMsg(`Econ.ConfirmTradeOffer#1`, E(Yn, t, n), Xn, {
      ePrivilege: 0,
    });
  }
  e.ConfirmTradeOffer = h;
  function g(e, t, n) {
    return e.SendMsg(`Econ.DeclineTradeOffer#1`, E(Zn, t, n), Qn, {
      ePrivilege: 1,
    });
  }
  e.DeclineTradeOffer = g;
  function _(e, t, n) {
    return e.SendMsg(`Econ.CancelTradeOffer#1`, E($n, t, n), er, {
      ePrivilege: 1,
    });
  }
  e.CancelTradeOffer = _;
  function v(e, t, n) {
    return e.SendMsg(`Econ.CancelAllTradeOffers#1`, E(tr, t, n), nr, {
      ePrivilege: 2,
    });
  }
  e.CancelAllTradeOffers = v;
  function y(e, t) {
    return e.SendNotification(`Econ.NotifyCancelAllTradeOffers#1`, E(rr, t), {
      ePrivilege: 2,
    });
  }
  e.NotifyCancelAllTradeOffers = y;
  function b(e, t, n) {
    return e.SendMsg(`Econ.IsSafeToCommitTrade#1`, E(ir, t, n), yn, {
      ePrivilege: 0,
    });
  }
  e.IsSafeToCommitTrade = b;
  function x(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffersSummary#1`, E(ar, t, n), or, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffersSummary = x;
  function S(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHistory#1`, E(sr, t, n), cr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHistory = S;
  function C(e, t, n) {
    return e.SendMsg(`Econ.GetTradeStatus#1`, E(hr, t, n), cr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeStatus = C;
  function ee(e, t, n) {
    return e.SendMsg(`Econ.GetProvisionalTradeHistory#1`, E(mr, t, n), cr, {
      ePrivilege: 1,
    });
  }
  e.GetProvisionalTradeHistory = ee;
  function w(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      E(ln, t, n),
      dn,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`, `community`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = w;
  function T(e, t, n) {
    return e.SendMsg(`Econ.CanUserTradeWithAnyone#1`, E(gr, t, n), _r, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithAnyone = T;
  function D(e, t, n) {
    return e.SendMsg(`Econ.CanUserTradeWithPartner#1`, E(vr, t, n), yr, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithPartner = D;
  function O(e, t, n) {
    return e.SendMsg(`Econ.GetUserTradeEligibility#1`, E(br, t, n), _r, {
      ePrivilege: 0,
    });
  }
  e.GetUserTradeEligibility = O;
  function te(e, t, n) {
    return e.SendMsg(
      `Econ.CheckTradePartnerTrustworthiness#1`,
      E(xr, t, n),
      Sr,
      { ePrivilege: 1 },
    );
  }
  e.CheckTradePartnerTrustworthiness = te;
  function k(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, E(fn, t, n), pn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = k;
  function A(e, t, n) {
    return e.SendMsg(`Econ.CheckTradeOfferAccessToken#1`, E(Cr, t, n), wr, {
      ePrivilege: 0,
    });
  }
  e.CheckTradeOfferAccessToken = A;
  function ne(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryCache#1`, E(Tr, t, n), Er, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushInventoryCache = ne;
  function re(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryServiceDBOs#1`, E(Dr, t, n), Or, {
      ePrivilege: 0,
    });
  }
  e.FlushInventoryServiceDBOs = re;
  function ie(e, t, n) {
    return e.SendMsg(`Econ.FlushAssetAppearanceCache#1`, E(kr, t, n), Ar, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushAssetAppearanceCache = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Econ.FlushContextCache#1`, E(jr, t, n), Mr, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushContextCache = ae;
  function oe(e, t, n) {
    return e.SendMsg(`Econ.GetEconAppSettings#1`, E(Nr, t, n), Pr, {
      ePrivilege: 7,
    });
  }
  e.GetEconAppSettings = oe;
  function j(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopPartnerToken#1`, E(Fr, t, n), Ir, {
      ePrivilege: 0,
    });
  }
  e.GetItemShopPartnerToken = j;
  function se(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      E(mn, t, n),
      hn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = se;
  function ce(e, t, n) {
    return e.SendMsg(`Econ.CheckItemShopPartnerHMAC#1`, E(Gr, t, n), Kr, {
      ePrivilege: 0,
    });
  }
  e.CheckItemShopPartnerHMAC = ce;
  function le(e, t, n) {
    return e.SendMsg(`Econ.StartItemShopTxn#1`, E(qr, t, n), Jr, {
      ePrivilege: 2,
    });
  }
  e.StartItemShopTxn = le;
  function ue(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopTxnState#1`, E(Yr, t, n), Xr, {
      ePrivilege: 2,
    });
  }
  e.GetItemShopTxnState = ue;
  function M(e, t, n) {
    return e.SendMsg(`Econ.FinishItemShopTxn#1`, E(Zr, t, n), Qr, {
      ePrivilege: 2,
    });
  }
  e.FinishItemShopTxn = M;
  function N(e, t, n) {
    return e.SendMsg(`Econ.BuildItemShopReturnURL#1`, E($r, t, n), ei, {
      ePrivilege: 2,
    });
  }
  e.BuildItemShopReturnURL = N;
  function de(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPrices#1`, E(Lr, t, n), zr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetAssetPrices = de;
  function fe(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopItems#1`, E(Hr, t, n), Ur, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetItemShopItems = fe;
  function pe(e, t, n) {
    return e.SendMsg(`Econ.AppSupportsRefund#1`, E(ti, t, n), ni, {
      ePrivilege: 0,
    });
  }
  e.AppSupportsRefund = pe;
  function me(e, t, n) {
    return e.SendMsg(`Econ.QueryRefundAllowed#1`, E(ri, t, n), ii, {
      ePrivilege: 0,
    });
  }
  e.QueryRefundAllowed = me;
  function P(e, t, n) {
    return e.SendMsg(`Econ.RefundPurchase#1`, E(oi, t, n), si, {
      ePrivilege: 0,
    });
  }
  e.RefundPurchase = P;
  function F(e, t, n) {
    return e.SendMsg(`Econ.GetEligibleOneOffRefunds#1`, E(ci, t, n), li, {
      ePrivilege: 0,
    });
  }
  e.GetEligibleOneOffRefunds = F;
  function he(e, t, n) {
    return e.SendMsg(`Econ.ProcessOneOffRefund#1`, E(di, t, n), fi, {
      ePrivilege: 0,
    });
  }
  e.ProcessOneOffRefund = he;
  function ge(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, E(gn, t, n), _n, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = ge;
  function _e(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfoInternal#1`, E(gn, t, n), _n, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassInfoInternal = _e;
  function I(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassProperties#1`, E(pi, t, n), mi, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassProperties = I;
  function L(e, t, n) {
    return e.SendMsg(`Econ.RevertTrade#1`, E(gi, t, n), _i, { ePrivilege: 1 });
  }
  e.RevertTrade = L;
  function R(e, t, n) {
    return e.SendMsg(`Econ.RevertAllTrades#1`, E(vi, t, n), yi, {
      ePrivilege: 1,
    });
  }
  e.RevertAllTrades = R;
  function ve(e, t, n) {
    return e.SendMsg(`Econ.ApplyTradeCooldown#1`, E(wi, t, n), Ti, {
      ePrivilege: 1,
    });
  }
  e.ApplyTradeCooldown = ve;
  function ye(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, E(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`, `community`],
    });
  }
  e.GetAssetPropertySchema = ye;
  function z(e, t, n) {
    return e.SendMsg(`Econ.AcknowledgeTradeUI#1`, E(bi, t, n), xi, {
      ePrivilege: 1,
    });
  }
  e.AcknowledgeTradeUI = z;
  function be(e, t, n) {
    return e.SendMsg(`Econ.NeedTradeUI#1`, E(Si, t, n), Ci, { ePrivilege: 1 });
  }
  e.NeedTradeUI = be;
})((Ei ||= {}));
function Di(e) {
  let { rgAssetProperties: t, appid: n } = e,
    [r, i] = (0, W.useState)(``),
    [a, o] = (0, W.useState)(Oi(t)),
    s = (e, t) => {
      let n = a.map((n, r) => (r === e ? t : n));
      o(n);
    },
    c = () => {
      let e = a.slice();
      e.push({
        id: 0,
        name: ``,
        type: 0,
        min: null,
        max: null,
        hide_from_description: !1,
      }),
        o(e);
    },
    l = (e) => {
      let t = a.slice();
      t.splice(e, 1), o(t);
    };
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)(`div`, {
        children: a.map((e, t) =>
          (0, G.jsx)(
            ki,
            {
              schema: e,
              index: t,
              onUpdate: (e) => {
                s(t, e);
              },
              onRemove: (e) => l(e),
            },
            t,
          ),
        ),
      }),
      (0, G.jsx)(`div`, {
        className: Jt,
        children: (0, G.jsx)(M, { onClick: c, children: `Add Property` }),
      }),
      (0, G.jsx)(`div`, {
        className: Yt,
        children: (0, G.jsx)(M, {
          onClick: async () => {
            i(``);
            let e = new FormData();
            e.append(`sessionid`, f()),
              e.append(`asset_properties`, JSON.stringify(a));
            let t = await fetch(
              `${b.PARTNER_BASE_URL}apps/setassetpropertyschema/${n}`,
              { method: `POST`, body: e, credentials: `same-origin` },
            );
            !t || !t.ok
              ? i(`Failed to save properties`)
              : (await t.json()).success
                ? i(`Saved successfully`)
                : i(`Failed to save properties`);
          },
          children: `Save`,
        }),
      }),
      (0, G.jsx)(`div`, { className: Xt, children: r }),
    ],
  });
}
function Oi(e) {
  return e
    ? e.map((e) => ({
        id: Number(e.id),
        name: e.name,
        type: Number(e.type),
        min: e.min ? Number(e.min) : 0,
        max: e.max ? Number(e.max) : 0,
        hide_from_description: Number(e.hide_from_description) === 1,
      }))
    : [];
}
function ki(e) {
  let { schema: t, index: n, onUpdate: r, onRemove: i } = e;
  return (0, G.jsxs)(`div`, {
    className: Vt,
    children: [
      (0, G.jsx)(`div`, { children: `ID` }),
      (0, G.jsx)(A, {
        className: Ht,
        type: `number`,
        value: t.id === 0 ? `` : t.id,
        placeholder: `Property id`,
        onChange: (e) => {
          r({ ...t, id: e.target.valueAsNumber });
        },
      }),
      (0, G.jsx)(`div`, { children: `Name` }),
      (0, G.jsx)(A, {
        className: Ut,
        type: `text`,
        value: t.name,
        placeholder: `Property name`,
        onChange: (e) => {
          r({ ...t, name: e.target.value });
        },
      }),
      (0, G.jsx)(`div`, { children: `Type` }),
      (0, G.jsx)(Ai, {
        propertyType: t.type,
        onUpdateType: (e) => {
          r({ ...t, type: e });
        },
      }),
      (0, G.jsx)(`div`, { children: `Min` }),
      (0, G.jsx)(A, {
        className: Gt,
        type: `number`,
        value: t.min ?? ``,
        placeholder: `Min value`,
        onChange: (e) => {
          r({ ...t, min: e.target.valueAsNumber });
        },
      }),
      (0, G.jsx)(`div`, { children: `Max` }),
      (0, G.jsx)(A, {
        className: Gt,
        type: `number`,
        value: t.max ?? ``,
        placeholder: `Max value`,
        onChange: (e) => {
          r({ ...t, max: e.target.valueAsNumber });
        },
      }),
      (0, G.jsx)(`div`, { children: `Hide` }),
      (0, G.jsx)(A, {
        className: Kt,
        type: `checkbox`,
        checked: t.hide_from_description,
        onChange: (e) => {
          r({ ...t, hide_from_description: e.target.checked });
        },
      }),
      (0, G.jsx)(M, { className: qt, onClick: () => i(n), children: `Remove` }),
    ],
  });
}
function Ai(e) {
  let { propertyType: t, onUpdateType: n } = e;
  return (0, G.jsx)(`div`, {
    className: Wt,
    children: (0, G.jsx)(ce, {
      strDefaultLabel: `Choose property type`,
      controlled: !0,
      rgOptions: [
        { label: `Integer`, data: 2 },
        { label: `Floating point`, data: 1 },
        { label: `String`, data: 3 },
      ],
      onChange: (e) => {
        n(e.data);
      },
      selectedOption: t,
    }),
  });
}
var ji = `_9aFW9QMcz4s-`,
  Mi = `glqnESzfZ-w-`,
  Ni = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [13, 16], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: n.readString, bw: p.writeString },
            source_id: { n: 2, br: n.readInt32, bw: p.writeInt32 },
            cell_id: { n: 3, br: n.readInt32, bw: p.writeInt32 },
            load: { n: 4, br: n.readInt32, bw: p.writeInt32 },
            weighted_load: { n: 5, br: n.readFloat, bw: p.writeFloat },
            num_entries_in_client_list: {
              n: 6,
              br: n.readInt32,
              bw: p.writeInt32,
            },
            steam_china_only: { n: 7, br: n.readBool, bw: p.writeBool },
            host: { n: 8, br: n.readString, bw: p.writeString },
            vhost: { n: 9, br: n.readString, bw: p.writeString },
            use_as_proxy: { n: 10, br: n.readBool, bw: p.writeBool },
            proxy_request_path_template: {
              n: 11,
              br: n.readString,
              bw: p.writeString,
            },
            https_support: { n: 12, br: n.readString, bw: p.writeString },
            allowed_app_ids: {
              n: 13,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            priority_class: { n: 15, br: n.readUint32, bw: p.writeUint32 },
            bypass_proxies_of_type: {
              n: 16,
              r: !0,
              q: !0,
              br: n.readString,
              bw: p.writeRepeatedString,
            },
            group: { n: 17, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_ServerInfo`;
    }
  },
  Pi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: n.readString, bw: p.writeString },
            source_id: { n: 2, br: n.readInt32, bw: p.writeInt32 },
            hostname: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_ConnectedSteamPipeServerInfo`;
    }
  },
  Fi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cell_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cell_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            max_servers: { n: 2, d: 20, br: n.readUint32, bw: p.writeUint32 },
            ip_override: { n: 3, d: ``, br: n.readString, bw: p.writeString },
            launcher_type: { n: 4, d: 0, br: n.readInt32, bw: p.writeInt32 },
            ipv6_public: { n: 5, d: ``, br: n.readString, bw: p.writeString },
            current_connections: { n: 6, c: Pi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Request`;
    }
  },
  Ii = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.servers || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            servers: { n: 1, c: Ni, r: !0, q: !0 },
            no_change: { n: 2, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Response`;
    }
  },
  Li = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depotid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            source_manifestid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            target_manifestid: {
              n: 4,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Request`;
    }
  },
  Ri = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_available || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_available: { n: 1, br: n.readBool, bw: p.writeBool },
            patch_size: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            patched_chunks_size: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Response`;
    }
  },
  zi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cached_signature || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cached_signature: { n: 1, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Request`;
    }
  },
  Bi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.hosts_kv || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hosts_kv: { n: 1, br: n.readString, bw: p.writeString },
            valid_until_time: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            ip_country: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Response`;
    }
  },
  Vi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            app_branch: { n: 4, br: n.readString, bw: p.writeString },
            branch_password_hash: { n: 5, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Request`;
    }
  },
  Hi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.manifest_request_code || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            manifest_request_code: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Response`;
    }
  },
  Ui = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            host_name: { n: 2, br: n.readString, bw: p.writeString },
            app_id: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Request`;
    }
  },
  Wi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.token || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: n.readString, bw: p.writeString },
            expiration_time: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Response`;
    }
  },
  Gi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.remote_client_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            remote_client_id: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: { n: 2, br: n.readUint64String, bw: p.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            app_id: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            current_build_id: { n: 5, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Request`;
    }
  },
  Ki = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.server_port || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_port: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            installed_depots: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            access_token: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Response`;
    }
  },
  qi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.remote_client_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            remote_client_id: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            steamid: { n: 2, br: n.readUint64String, bw: p.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Request`;
    }
  },
  Ji = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
            ip_public: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Response`;
    }
  },
  Yi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.detection_type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { detection_type: { n: 1, br: n.readEnum, bw: p.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDepotContentDetection_GetAllDetectedAppContent_Request`;
    }
  },
  Xi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            detected_content: { n: 3, br: n.readInt32, bw: p.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `DetectedAppContent`;
    }
  },
  Zi = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.detected_app_content || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { detected_app_content: { n: 1, c: Xi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDepotContentDetection_GetAllDetectedAppContent_Response`;
    }
  },
  Qi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetServersForSteamPipe#1`,
      E(Fi, t, n),
      Ii,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      E(Li, t, n),
      Ri,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      E(zi, t, n),
      Bi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      E(Vi, t, n),
      Hi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      E(Ui, t, n),
      Wi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      E(Gi, t, n),
      Ki,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      E(qi, t, n),
      Ji,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = s;
})((Qi ||= {}));
var $i;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      E(Yi, t, n),
      Zi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
})(($i ||= {}));
var ea = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_ReloadOriginStorageInfo_Notification`;
    }
  },
  ta = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: n.readBytes, bw: p.writeBytes },
            origin_id: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            eresult: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_CSFailedToReadChunkFromStorage_Notification`;
    }
  },
  na = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Request`;
    }
  },
  ra = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Response`;
    }
  },
  ia = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Request`;
    }
  },
  aa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.app_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            status: { n: 2, br: n.readEnum, bw: p.writeEnum },
            accountid_requester: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            accountid_confirmer: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            time_requested: {
              n: 5,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            time_confirmed: {
              n: 6,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            time_ended: {
              n: 7,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Response`;
    }
  },
  oa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_CSPurgeDepot_Notification`;
    }
  },
  sa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: n.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_NewChunkAnnouncement_Notification`;
    }
  },
  ca = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushDepotCache_Notification`;
    }
  },
  la = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            manifestid: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushManifestVersion_Notification`;
    }
  },
  ua = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.location_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            host: { n: 2, br: n.readString, bw: p.writeString },
            path: { n: 3, br: n.readString, bw: p.writeString },
            headers_for_put: { n: 4, c: D },
            virtual_host: { n: 5, br: n.readString, bw: p.writeString },
            use_https: { n: 6, br: n.readBool, bw: p.writeBool },
            storage_provider: { n: 7, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_ChunkStorageLocation`;
    }
  },
  da = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: n.readBytes, bw: p.writeBytes },
            compressed_size: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            need_encryption_key: { n: 6, br: n.readBool, bw: p.writeBool },
            compressed_md5: { n: 7, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Request`;
    }
  },
  fa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.original_size || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            original_size: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            encryption_key: { n: 2, br: n.readBytes, bw: p.writeBytes },
            storage_locations: { n: 3, c: ua, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Response`;
    }
  },
  pa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: n.readBytes, bw: p.writeBytes },
            compressed_crc: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            storage_locations: { n: 7, c: ua, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Request`;
    }
  },
  ma = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Response`;
    }
  },
  ha = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            build_handle: {
              n: 3,
              br: n.readFixed64String,
              bw: p.writeFixed64String,
            },
            sha: { n: 4, br: n.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStorageFailure_Notification`;
    }
  },
  ga = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: _a, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request`;
    }
  },
  _a = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: n.readString, bw: p.writeString },
            timestamp: { n: 2, br: n.readFixed32, bw: p.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request_CDNInfoRequest`;
    }
  },
  va = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: n.readString, bw: p.writeString },
            timestamp: { n: 2, br: n.readFixed32, bw: p.writeFixed32 },
            config: { n: 3, br: n.readBytes, bw: p.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_CDNConfigInfo`;
    }
  },
  ya = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.responses || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { responses: { n: 1, c: va, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Response`;
    }
  },
  ba = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: n.readString, bw: p.writeString },
            config_file: { n: 2, br: n.readString, bw: p.writeString },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Request`;
    }
  },
  xa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Response`;
    }
  },
  Sa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: n.readString, bw: p.writeString },
            mbps_sent: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            mbps_recv: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            cpu_percent: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            cache_hit_percent: { n: 5, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Request`;
    }
  },
  Ca = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.message || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { message: { n: 1, br: n.readString, bw: p.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Response`;
    }
  },
  wa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stats || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            stats: { n: 1, c: Ta, r: !0, q: !0 },
            cdn_stats: { n: 2, c: Ea, r: !0, q: !0 },
            steamcache_stats: { n: 3, c: Da, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification`;
    }
  },
  Ta = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_Stats`;
    }
  },
  Ea = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_name || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: n.readString, bw: p.writeString },
            current_load: { n: 2, br: n.readInt32, bw: p.writeInt32 },
            rtime_last_updated: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_CDNStats`;
    }
  },
  Da = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            load_adjustment: { n: 4, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_SteamCacheStats`;
    }
  },
  Oa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stats || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 1, c: ka, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification`;
    }
  },
  ka = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sysid_cm || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sysid_cm: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            current_load: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            rtime_last_updated: { n: 3, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification_Stats`;
    }
  },
  Aa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.anon_session_allowed_depots || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            anon_session_allowed_depots: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readUint32,
              pbr: n.readPackedUint32,
              bw: p.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_AnonymousDepots_Notification`;
    }
  },
  ja = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            manifest_request_code: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Request`;
    }
  },
  Ma = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_valid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_valid: { n: 1, br: n.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Response`;
    }
  },
  Na = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 2,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Request`;
    }
  },
  Pa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.manifest_request_code || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            manifest_request_code: {
              n: 1,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Response`;
    }
  },
  Fa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Request`;
    }
  },
  Ia = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.is_allowed || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_allowed: { n: 1, br: n.readBool, bw: p.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Response`;
    }
  },
  La = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depotid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            sysid_sender: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            manifestid: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_InvalidateDepotMetadata_Notification`;
    }
  },
  Ra = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: n.readBool, bw: p.writeBool },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            provider: { n: 4, br: n.readString, bw: p.writeString },
            cell_id: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            config_json: { n: 8, br: n.readString, bw: p.writeString },
            name: { n: 9, br: n.readString, bw: p.writeString },
            ip_filter_list: { n: 10, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfig`;
    }
  },
  za = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Request`;
    }
  },
  Ba = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: Ra } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Response`;
    }
  },
  Va = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            ip_ranges: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Request`;
    }
  },
  Ha = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Request`;
    }
  },
  Ua = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.history || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: Wa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response`;
    }
  },
  Wa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response_HistoryEntry`;
    }
  },
  Ga = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: n.readString, bw: p.writeString },
            config: { n: 3, c: Ra },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Request`;
    }
  },
  Ka = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Response`;
    }
  },
  qa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: Ra } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfigUpdate_Notification`;
    }
  },
  Ja = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Response`;
    }
  },
  Ya = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Request`;
    }
  },
  Xa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config_names || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: Za, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response`;
    }
  },
  Za = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cs_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: n.readString, bw: p.writeString },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            is_enabled: { n: 4, br: n.readBool, bw: p.writeBool },
            name: { n: 5, br: n.readString, bw: p.writeString },
            cell_id: { n: 6, br: n.readUint32, bw: p.writeUint32 },
            max_mbps: { n: 7, br: n.readUint32, bw: p.writeUint32 },
            serve_steampipe: { n: 8, br: n.readBool, bw: p.writeBool },
            serve_broadcast: { n: 9, br: n.readBool, bw: p.writeBool },
            serve_chat: { n: 10, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response_ConfigNames`;
    }
  },
  Qa = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.provider || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: n.readString, bw: p.writeString },
            host_name: { n: 2, br: n.readString, bw: p.writeString },
            name: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Request`;
    }
  },
  $a = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Response`;
    }
  },
  eo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: n.readBool, bw: p.writeBool },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            provider: { n: 4, br: n.readString, bw: p.writeString },
            cell_id: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            api_key_primary: { n: 6, br: n.readString, bw: p.writeString },
            api_key_secondary: { n: 7, br: n.readString, bw: p.writeString },
            config_json: { n: 8, br: n.readString, bw: p.writeString },
            name: { n: 9, br: n.readString, bw: p.writeString },
            ip_filter_list: { n: 10, br: n.readString, bw: p.writeString },
            timestamp: { n: 11, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfig`;
    }
  },
  to = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Request`;
    }
  },
  no = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config_names || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: ro, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response`;
    }
  },
  ro = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: n.readString, bw: p.writeString },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            is_enabled: { n: 4, br: n.readBool, bw: p.writeBool },
            name: { n: 5, br: n.readString, bw: p.writeString },
            cell_id: { n: 6, br: n.readUint32, bw: p.writeUint32 },
            max_mbps: { n: 7, br: n.readUint32, bw: p.writeUint32 },
            serve_steampipe: { n: 8, br: n.readBool, bw: p.writeBool },
            serve_broadcast: { n: 9, br: n.readBool, bw: p.writeBool },
            serve_chat: { n: 10, br: n.readBool, bw: p.writeBool },
            https_support: { n: 11, br: n.readString, bw: p.writeString },
            cache_group: { n: 12, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response_ConfigNames`;
    }
  },
  io = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Request`;
    }
  },
  ao = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: eo } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Response`;
    }
  },
  oo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Request`;
    }
  },
  so = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.history || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: co, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response`;
    }
  },
  co = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  lo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: n.readString, bw: p.writeString },
            config: { n: 3, c: eo },
            omit_history_entry: { n: 4, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Request`;
    }
  },
  uo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Response`;
    }
  },
  fo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: eo } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfigUpdate_Notification`;
    }
  },
  po = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            primary_key: { n: 2, br: n.readBool, bw: p.writeBool },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Request`;
    }
  },
  mo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Response`;
    }
  },
  ho = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.provider || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: n.readString, bw: p.writeString },
            host_name: { n: 2, br: n.readString, bw: p.writeString },
            name: { n: 3, br: n.readString, bw: p.writeString },
            serve_steampipe: { n: 4, br: n.readBool, bw: p.writeBool },
            serve_broadcast: { n: 5, br: n.readBool, bw: p.writeBool },
            serve_broadcastchat: { n: 6, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Request`;
    }
  },
  go = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Response`;
    }
  },
  _o = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            is_enabled: { n: 2, br: n.readBool, bw: p.writeBool },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            provider: { n: 4, br: n.readString, bw: p.writeString },
            cell_id: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            config_json: { n: 6, br: n.readString, bw: p.writeString },
            name: { n: 7, br: n.readString, bw: p.writeString },
            ip_filter_list: { n: 8, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfig`;
    }
  },
  vo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Request`;
    }
  },
  yo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config_names || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { config_names: { n: 1, c: bo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response`;
    }
  },
  bo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            provider: { n: 2, br: n.readString, bw: p.writeString },
            host_name: { n: 3, br: n.readString, bw: p.writeString },
            is_enabled: { n: 4, br: n.readBool, bw: p.writeBool },
            name: { n: 5, br: n.readString, bw: p.writeString },
            serve_steampipe: { n: 6, br: n.readBool, bw: p.writeBool },
            serve_broadcast: { n: 7, br: n.readBool, bw: p.writeBool },
            serve_chat: { n: 8, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response_ConfigNames`;
    }
  },
  xo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Request`;
    }
  },
  So = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: _o } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Response`;
    }
  },
  Co = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            max_results: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Request`;
    }
  },
  wo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.history || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { history: { n: 1, c: To, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response`;
    }
  },
  To = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            steamid_actor: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  Eo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            change_notes: { n: 2, br: n.readString, bw: p.writeString },
            config: { n: 3, c: _o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Request`;
    }
  },
  Do = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Response`;
    }
  },
  Oo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.config || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: _o } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfigUpdate_Notification`;
    }
  },
  ko = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: n.readString, bw: p.writeString },
            change_notes: { n: 3, br: n.readString, bw: p.writeString },
            allowed_ip_blocks: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Request`;
    }
  },
  Ao = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Response`;
    }
  },
  jo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: n.readString, bw: p.writeString },
            mbps_sent: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            mbps_recv: { n: 4, br: n.readUint32, bw: p.writeUint32 },
            cpu_percent: { n: 5, br: n.readUint32, bw: p.writeUint32 },
            cache_hit_percent: { n: 6, br: n.readUint32, bw: p.writeUint32 },
            num_connected_ips: { n: 7, br: n.readUint32, bw: p.writeUint32 },
            upstream_egress_utilization: {
              n: 8,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            upstream_peering_utilization: {
              n: 9,
              br: n.readUint32,
              bw: p.writeUint32,
            },
            upstream_transit_utilization: {
              n: 10,
              br: n.readUint32,
              bw: p.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Request`;
    }
  },
  Mo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.load_calc_percent || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            load_calc_percent: { n: 3, br: n.readUint32, bw: p.writeUint32 },
            config_json: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Response`;
    }
  },
  No = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cache_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            cache_key: { n: 2, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Request`;
    }
  },
  Po = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.params_json || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            params_json: { n: 1, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Response`;
    }
  },
  Fo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depotid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            parentappid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            oslist: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_DepotDownloadBytesInfo`;
    }
  },
  Io = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depots || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depots: { n: 1, c: Fo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Request`;
    }
  },
  Lo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.windows || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            windows: { n: 1, br: n.readUint64String, bw: p.writeUint64String },
            macos: { n: 2, br: n.readUint64String, bw: p.writeUint64String },
            linux: { n: 3, br: n.readUint64String, bw: p.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Response`;
    }
  },
  Ro = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            allow_creating_new_migration: {
              n: 2,
              br: n.readBool,
              bw: p.writeBool,
            },
            restart_migration: { n: 3, br: n.readBool, bw: p.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Request`;
    }
  },
  zo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Response`;
    }
  },
  Bo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.depot_id || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            sha: { n: 2, br: n.readBytes, bw: p.writeBytes },
            storage_provider_preference: {
              n: 3,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Request`;
    }
  },
  Vo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cub_chunk || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cub_chunk: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            crc_chunk: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            url_host: { n: 3, br: n.readString, bw: p.writeString },
            url_path: { n: 4, br: n.readString, bw: p.writeString },
            use_https: { n: 5, br: n.readBool, bw: p.writeBool },
            origin_id: { n: 6, br: n.readUint32, bw: p.writeUint32 },
            storage_provider: { n: 7, br: n.readString, bw: p.writeString },
            request_headers: { n: 8, c: D },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Response`;
    }
  },
  Ho = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            betakeys: {
              n: 2,
              r: !0,
              q: !0,
              br: n.readString,
              bw: p.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Request`;
    }
  },
  Uo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Response`;
    }
  },
  Wo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            depot_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            manifest_id: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
            branch: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Request`;
    }
  },
  Go = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.manifest_part_of_app_branch || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            manifest_part_of_app_branch: {
              n: 1,
              br: n.readBool,
              bw: p.writeBool,
            },
            app_was_released_or_is_current_build: {
              n: 2,
              br: n.readBool,
              bw: p.writeBool,
            },
            time_most_recent_release: {
              n: 3,
              br: n.readUint64String,
              bw: p.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Response`;
    }
  },
  Ko = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            buildid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CMDSAdmin_AppBuildUpdated_Notification`;
    }
  },
  qo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: n.readUint32, bw: p.writeUint32 },
            buildid: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            betakey: { n: 3, br: n.readString, bw: p.writeString },
            desc: { n: 4, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Request`;
    }
  },
  Jo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), K.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Response`;
    }
  },
  Yo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: n.readInt32, bw: p.writeInt32 },
            client_ip: { n: 2, br: n.readString, bw: p.writeString },
            client_region: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Request`;
    }
  },
  Xo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.cdn_hostname || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_hostname: { n: 1, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Response`;
    }
  },
  Zo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_type || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: n.readInt32, bw: p.writeInt32 },
            cell_id: { n: 2, br: n.readUint32, bw: p.writeUint32 },
            client_ip: { n: 3, br: n.readString, bw: p.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Request`;
    }
  },
  Qo = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.hostname || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hostname: { n: 1, br: n.readString, bw: p.writeString },
            caching_proxy_host_and_prefix: {
              n: 2,
              br: n.readString,
              bw: p.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Response`;
    }
  },
  $o = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: n.readUint32, bw: p.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDepotContentDetection_GetDetectedContentSingleApp_Request`;
    }
  },
  es = class e extends K.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.detected_anticheat || r(e.M()),
        K.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            detected_anticheat: { n: 1, br: n.readEnum, bw: p.writeEnum },
            detected_gameengine: { n: 2, br: n.readEnum, bw: p.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= o(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return i(e.M(), t, n);
    }
    static fromObject(t) {
      return u(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new K.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return l(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new K.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDepotContentDetection_GetDetectedContentSingleApp_Response`;
    }
  },
  ts;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `BuildManagement.SetAppBuildLiveConfirmed#1`,
      E(qo, t, n),
      Jo,
      { ePrivilege: 1 },
    );
  }
  e.SetAppBuildLiveConfirmed = t;
})((ts ||= {}));
var ns;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`MDSAdmin.ReloadOriginStorageInfo#1`, E(ea, t), {
      ePrivilege: 1,
    });
  }
  e.ReloadOriginStorageInfo = t;
  function n(e, t) {
    return e.SendNotification(
      `MDSAdmin.CSFailedToReadChunkFromStorage#1`,
      E(ta, t),
      { ePrivilege: 1 },
    );
  }
  e.CSFailedToReadChunkFromStorage = n;
  function r(e, t) {
    return e.SendNotification(`MDSAdmin.InvalidateDepotMetadata#1`, E(La, t), {
      ePrivilege: 1,
    });
  }
  e.InvalidateDepotMetadata = r;
  function i(e, t, n) {
    return e.SendMsg(`MDSAdmin.RequestAppContentPurge#1`, E(na, t, n), ra, {
      ePrivilege: 5,
    });
  }
  e.RequestAppContentPurge = i;
  function a(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetAppContentPurgeStatus#1`, E(ia, t, n), aa, {
      ePrivilege: 1,
    });
  }
  e.GetAppContentPurgeStatus = a;
  function o(e, t) {
    return e.SendNotification(`MDSAdmin.CSPurgeDepot#1`, E(oa, t), {
      ePrivilege: 1,
    });
  }
  e.CSPurgeDepot = o;
  function s(e, t) {
    return e.SendNotification(`MDSAdmin.NewChunkAnnouncement#1`, E(sa, t), {
      ePrivilege: 1,
    });
  }
  e.NewChunkAnnouncement = s;
  function c(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushDepotCache#1`, E(ca, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushDepotCache = c;
  function l(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushManifestVersion#1`, E(la, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushManifestVersion = l;
  function u(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotDownloadBytes#1`, E(Io, t, n), Lo, {
      ePrivilege: 1,
    });
  }
  e.GetDepotDownloadBytes = u;
  function d(e, t, n) {
    return e.SendMsg(`MDSAdmin.BeginOriginMigrationJob#1`, E(Ro, t, n), zo, {
      ePrivilege: 1,
    });
  }
  e.BeginOriginMigrationJob = d;
  function f(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotChunkLocation#1`, E(Bo, t, n), Vo, {
      ePrivilege: 1,
    });
  }
  e.GetDepotChunkLocation = f;
  function p(e, t, n) {
    return e.SendMsg(`MDSAdmin.SetAppBuildSortOrder#1`, E(Ho, t, n), Uo, {
      ePrivilege: 1,
    });
  }
  e.SetAppBuildSortOrder = p;
  function m(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetManifestAppBranchInfo#1`, E(Wo, t, n), Go, {
      ePrivilege: 1,
    });
  }
  e.GetManifestAppBranchInfo = m;
  function h(e, t) {
    return e.SendNotification(`MDSAdmin.AppBuildUpdated#1`, E(Ko, t), {
      ePrivilege: 1,
    });
  }
  e.AppBuildUpdated = h;
  function g(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkReceived#1`, E(da, t, n), fa, {
      ePrivilege: 1,
    });
  }
  e.ChunkReceived = g;
  function _(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkStored#1`, E(pa, t, n), ma, {
      ePrivilege: 1,
    });
  }
  e.ChunkStored = _;
  function v(e, t) {
    return e.SendNotification(`MDSAdmin.ChunkStorageFailure#1`, E(ha, t), {
      ePrivilege: 1,
    });
  }
  e.ChunkStorageFailure = v;
})((ns ||= {}));
var rs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetCDNConfigurations#1`,
      E(ga, t, n),
      ya,
      { ePrivilege: 1 },
    );
  }
  e.GetCDNConfigurations = t;
  function n(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNConfig#1`, E(ba, t, n), xa, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNConfig = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNStats#1`, E(Sa, t, n), Ca, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNStats = r;
  function i(e, t) {
    return e.SendNotification(
      `ContentServerConfig.ContentServerStatsBroadcast#1`,
      E(wa, t),
      { ePrivilege: 1 },
    );
  }
  e.ContentServerStatsBroadcast = i;
  function a(e, t) {
    return e.SendNotification(
      `ContentServerConfig.CMLoadBroadcast#1`,
      E(Oa, t),
      { ePrivilege: 1 },
    );
  }
  e.CMLoadBroadcast = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfig#1`,
      E(za, t, n),
      Ba,
      { ePrivilege: 1 },
    );
  }
  e.GetSteamCSConfig = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCSConfig#1`,
      E(Ga, t, n),
      Ka,
      { ePrivilege: 4 },
    );
  }
  e.UpdateSteamCSConfig = s;
  function c(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCSConfigUpdateNotification#1`,
      E(qa, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCSConfigUpdateNotification = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfigHistory#1`,
      E(Ha, t, n),
      Ua,
      { ePrivilege: 4 },
    );
  }
  e.GetSteamCSConfigHistory = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateCSIPFilterRanges#1`,
      E(Va, t, n),
      Ja,
      { ePrivilege: 1 },
    );
  }
  e.UpdateCSIPFilterRanges = u;
  function d(e, t) {
    return e.SendNotification(
      `ContentServerConfig.AnonymousDepotsBroadcast#1`,
      E(Aa, t),
      { ePrivilege: 1 },
    );
  }
  e.AnonymousDepotsBroadcast = d;
  function f(e, t, n) {
    return e.SendMsg(`ContentServerConfig.GetSteamCSNames#1`, E(Ya, t, n), Xa, {
      ePrivilege: 1,
    });
  }
  e.GetSteamCSNames = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateSteamCacheNode#1`,
      E(Qa, t, n),
      $a,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.AllocateSteamCacheNode = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfig#1`,
      E(io, t, n),
      ao,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfig = m;
  function h(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCacheConfig#1`,
      E(lo, t, n),
      uo,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.UpdateSteamCacheConfig = h;
  function g(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCacheConfigUpdateNotification#1`,
      E(fo, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCacheConfigUpdateNotification = g;
  function _(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.RevSteamCacheAPIKey#1`,
      E(po, t, n),
      mo,
      { ePrivilege: 4 },
    );
  }
  e.RevSteamCacheAPIKey = _;
  function v(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfigHistory#1`,
      E(oo, t, n),
      so,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfigHistory = v;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNames#1`,
      E(to, t, n),
      no,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheNames = y;
  function b(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateOpenCacheNode#1`,
      E(ho, t, n),
      go,
      { ePrivilege: 1 },
    );
  }
  e.AllocateOpenCacheNode = b;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfig#1`,
      E(xo, t, n),
      So,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheConfig = x;
  function S(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateOpenCacheConfig#1`,
      E(Eo, t, n),
      Do,
      { ePrivilege: 4 },
    );
  }
  e.UpdateOpenCacheConfig = S;
  function C(e, t) {
    return e.SendNotification(
      `ContentServerConfig.OpenCacheConfigUpdateNotification#1`,
      E(Oo, t),
      { ePrivilege: 1 },
    );
  }
  e.OpenCacheConfigUpdateNotification = C;
  function ee(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfigHistory#1`,
      E(Co, t, n),
      wo,
      { ePrivilege: 4 },
    );
  }
  e.GetOpenCacheConfigHistory = ee;
  function w(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheNames#1`,
      E(vo, t, n),
      yo,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheNames = w;
  function T(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCacheClientFilters#1`,
      E(ko, t, n),
      Ao,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCacheClientFilters = T;
  function D(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCachePerformanceStats#1`,
      E(jo, t, n),
      Mo,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCachePerformanceStats = D;
  function O(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNodeParams#1`,
      E(No, t, n),
      Po,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetSteamCacheNodeParams = O;
  function te(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.CheckManifestRequestCode#1`,
      E(ja, t, n),
      Ma,
      { ePrivilege: 1 },
    );
  }
  e.CheckManifestRequestCode = te;
  function k(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetManifestRequestCode#1`,
      E(Na, t, n),
      Pa,
      { ePrivilege: 1 },
    );
  }
  e.GetManifestRequestCode = k;
  function A(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.IsDepotAllowedSteamChina#1`,
      E(Fa, t, n),
      Ia,
      { ePrivilege: 1 },
    );
  }
  e.IsDepotAllowedSteamChina = A;
})((rs ||= {}));
var is;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNForVideo#1`,
      E(Yo, t, n),
      Xo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetCDNForVideo = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.PickSingleContentServer#1`,
      E(Zo, t, n),
      Qo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.PickSingleContentServer = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetServersForSteamPipe#1`,
      E(Fi, t, n),
      Ii,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      E(Li, t, n),
      Ri,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      E(zi, t, n),
      Bi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      E(Vi, t, n),
      Hi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      E(Ui, t, n),
      Wi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      E(Gi, t, n),
      Ki,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      E(qi, t, n),
      Ji,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = l;
})((is ||= {}));
var as;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      E(Yi, t, n),
      Zi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
  function n(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetDetectedContentSingleApp#1`,
      E($o, t, n),
      es,
      { bConstMethod: !0, ePrivilege: 7 },
    );
  }
  e.GetDetectedContentSingleApp = n;
})((as ||= {}));
function os(e, t, n) {
  let r = new Map();
  return (
    e.forEach((e) => {
      Object.entries(e.components).forEach(([e, t]) => {
        r.set(t, !1);
      });
    }),
    t.forEach((e) => {
      Object.entries(e.components).forEach(([e, t]) => {
        r.set(t, !1);
      });
    }),
    n.forEach((e, t) => {
      r.has(t) && r.set(t, e);
    }),
    r
  );
}
function ss(e) {
  let {
      rgCommonRedistAllPlatforms: t,
      rgCommonRedistWindows: n,
      rgCheckedDepots: r,
      nDetectedGameEngine: i,
      bNoCommonRedistsNeeded: a,
    } = e,
    o = (0, W.useMemo)(() => new Map(t), [t]),
    s = (0, W.useMemo)(() => new Map(n), [n]),
    [c, l] = (0, W.useState)(os(o, s, new Map(r))),
    [u, d] = (0, W.useState)(a),
    f = (e, t) => {
      let n = { noneneeded: +!!t };
      e.forEach((e, t) => {
        n[t] = +!!e;
      }),
        window.UpdateCommonRedistsReact(n);
    },
    p = (e, t) => {
      let n = new Map(c);
      n.set(e, t), l(n), f(n, u);
    },
    m = (e) => {
      d(e), f(c, e);
    },
    h = o.size > 0,
    g = i == 1,
    _ = Array.from(c.values()).some((e) => e);
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsxs)(`div`, {
        className: Mi,
        children: [
          (0, G.jsx)(`input`, {
            id: `noredistsneeded`,
            type: `checkbox`,
            checked: u,
            disabled: _ && !u,
            onChange: (e) => m(e.currentTarget.checked),
          }),
          (0, G.jsx)(`label`, {
            htmlFor: `noredistsneeded`,
            children: P(`#StoreAdmin_Redist_NoneNeeded`),
          }),
        ],
      }),
      h &&
        (0, G.jsx)(ls, {
          name: P(`#StoreAdmin_Platform_AllPlatforms`),
          categories: o,
          checkedState: c,
          disabled: u,
          setChecked: p,
        }),
      g && (0, G.jsx)(cs, {}),
      (0, G.jsx)(ls, {
        name: P(`#StoreAdmin_Platform_Windows`),
        categories: s,
        checkedState: c,
        disabled: u,
        setChecked: p,
      }),
    ],
  });
}
function cs() {
  return (0, G.jsx)(`div`, {
    className: ji,
    children: P(`#StoreAdmin_Redist_Unreal_Notice`),
  });
}
function ls(e) {
  let {
      name: t,
      categories: n,
      checkedState: r,
      disabled: i,
      setChecked: a,
    } = e,
    o = (0, W.useMemo)(() => {
      let e = [];
      return (
        n.forEach((t, n) =>
          e.push(
            (0, G.jsx)(
              us,
              {
                name: n,
                category: t,
                checkedState: r,
                disabled: i,
                setChecked: a,
              },
              t.category,
            ),
          ),
        ),
        e
      );
    }, [n, r, i, a]);
  return (0, G.jsxs)(`div`, {
    className: `section`,
    children: [
      (0, G.jsx)(`h2`, { children: t }),
      (0, G.jsx)(`div`, { className: `grayRule` }),
      ...o,
    ],
  });
}
function us(e) {
  let { name: t, category: n, checkedState: r, disabled: i, setChecked: a } = e,
    o = Object.entries(n.components).map(([e, t]) =>
      (0, G.jsx)(
        `li`,
        {
          children: (0, G.jsx)(ds, {
            name: e,
            depotID: t,
            checked: r.get(t),
            disabled: i,
            setChecked: a,
          }),
        },
        t,
      ),
    );
  return (0, G.jsxs)(`div`, {
    children: [
      (0, G.jsx)(`div`, { children: t }),
      (0, G.jsx)(`ul`, { children: [...o] }),
    ],
  });
}
function ds(e) {
  let { name: t, depotID: n, checked: r, disabled: i, setChecked: a } = e,
    o = i || ((n == 228987 || n == 228986) && !r);
  return (0, G.jsxs)(G.Fragment, {
    children: [
      (0, G.jsx)(`input`, {
        id: n.toString(),
        type: `checkbox`,
        checked: r,
        disabled: o,
        onChange: (e) => a(n, e.currentTarget.checked),
      }),
      (0, G.jsx)(`label`, { htmlFor: n.toString(), children: t }),
    ],
  });
}
function fs(e, t) {
  let n = [];
  switch (e) {
    case `image_large`:
      t.item_image_large && n.push(t.item_image_large);
      break;
    case `image_small`:
      t.item_image_small && n.push(t.item_image_small);
      break;
    case `movie_large`:
      t.item_movie_webm && n.push(t.item_movie_webm),
        t.item_movie_mp4 && n.push(t.item_movie_mp4);
  }
  return n;
}
function ps(e, t) {
  return [`InProgressItemDefinition_${e}_${t}`];
}
function ms(e, t) {
  let n = R({
    queryKey: ps(e, t),
    queryFn: async () => {
      let n = `${b.PARTNER_BASE_URL}communityitems/ajaxgetcommunityitemdef/${e}/${t}`,
        r = new FormData();
      r.append(`sessionid`, f());
      let i = await Ct.default.post(n, r, { withCredentials: !0 });
      return i?.status == 200 && i.data?.success == 1
        ? i.data.def
        : (console.error(
            `useGetInProgressCommunityItemDefinition: `,
            i?.data.error,
          ),
          null);
    },
    staleTime: 1 / 0,
    initialData: m(`item_def`, `application_config`),
  });
  return n.isLoading ? null : n.data;
}
function hs(e, t) {
  ve.invalidateQueries({ queryKey: ps(e, t) });
}
var X = class extends tt {
  m_currentImageOptionKey = void 0;
  m_fnGetImageOptions;
  constructor(e, t, n, r) {
    let i = ie(n);
    super(e, e.name, t, n.src, i), T(this), (this.m_fnGetImageOptions = r);
  }
  IsValidAssetType(e, t) {
    let n = t && t != this.fileType,
      r = this.IsFileTypeSupported(this.fileType),
      i = this.GetCurrentImageOption(),
      a = ``;
    return (
      r
        ? n && (a = P(`#ImageUpload_InvalidFormat`, oe(t)))
        : (a = P(`#ImageUpload_InvalidFormatSelected`)),
      i || (a = P(`#CommunityItems_NoValidAsset_Error`)),
      i?.bDuplicateAssetType &&
        (a = P(`#CommunityItems_DuplicateAssetType_Error`, i.fnGetLabelText())),
      { error: a, needsCrop: !1 }
    );
  }
  BIsOriginalMinimumDimensions(e) {
    return !0;
  }
  BIsVideo() {
    return nt.includes(this.fileType);
  }
  GetResizeDimension() {}
  BSupportsLanguages() {
    return !1;
  }
  get ImageOptions() {
    return this.m_fnGetImageOptions().filter((e) => this.filename === e.sKey);
  }
  GetCurrentImageOptionKey() {
    return this.m_currentImageOptionKey;
  }
  GetCurrentImageOption() {
    let e = this.m_fnGetImageOptions();
    return this.m_currentImageOptionKey
      ? e.find((e) => e.sKey === this.m_currentImageOptionKey)
      : e.find((e) => this.filename === e.sKey);
  }
  SetCurrentImageOption(e) {
    this.m_currentImageOptionKey = e?.sKey;
  }
  FileTypeMatchesImageTypes(e) {
    switch (this.fileType) {
      case 1:
      case 3:
      case 10:
        return !0;
      default:
        return !1;
    }
  }
  IsFileTypeSupported(e) {
    switch (e) {
      case 1:
      case 3:
      case 10:
      case 2:
      case 4:
      case 5:
        return !0;
      default:
        return !1;
    }
  }
};
v([s], X.prototype, `m_currentImageOptionKey`, void 0),
  v([ee], X.prototype, `ImageOptions`, null),
  v([_], X.prototype, `SetCurrentImageOption`, null);
var Z = class extends et {
  m_filesToUpload = s.array();
  m_strUploadPath = null;
  m_bSynchronousUpload = !1;
  m_rgAssetRequirements = [];
  constructor(e, t, n) {
    super(),
      T(this),
      (this.m_strUploadPath = e),
      (this.m_bSynchronousUpload = t),
      (this.m_rgAssetRequirements = n);
  }
  GetUploadPath() {
    return this.m_strUploadPath;
  }
  SetUploadPath(e) {
    this.m_strUploadPath = e;
  }
  GetUploadImages() {
    return this.m_filesToUpload;
  }
  ClearImages() {
    this.m_filesToUpload = s.array();
  }
  DeleteUploadImage(e) {
    let t = this.m_filesToUpload.findIndex(
      (t) => e.file == t.file && e.uploadTime == t.uploadTime,
    );
    t >= 0 &&
      (this.m_filesToUpload.splice(t, 1),
      (this.m_filesToUpload = [...this.m_filesToUpload]));
  }
  BGetUploadsAreInSerial() {
    return this.m_bSynchronousUpload;
  }
  async AddImageForLanguage(e, t) {
    if (ae(e.type) || j(e.type)) {
      let n = await se(e, j(e.type));
      if (n) {
        let r = new X(e, t, n, () => this.GetImageOptions());
        return (this.m_filesToUpload = [...this.m_filesToUpload, r]), !0;
      }
    } else
      console.error(
        `Failed to determine file type, not image, video or subtitle`,
        e,
        e.type,
      );
    return !1;
  }
  GetImageOptions() {
    let e = [],
      t = new Set();
    for (let n of this.m_filesToUpload.filter(
      (e) => e.status == `pending` || $e(e.status),
    ))
      this.m_rgAssetRequirements.forEach((r) => {
        n.width === r.width &&
          n.height === r.height &&
          r.accepted_filetypes.includes(n.fileType) &&
          (e.push({
            asset_type: r.asset_type,
            sKey: n.filename,
            fnGetLabelText: () => r.label,
            width: n.width,
            height: n.height,
            bEnforceDimensions: !0,
            bHiddenFromDropdown: !1,
            bDuplicateAssetType: !!t.has(r.asset_type),
          }),
          t.add(r.asset_type));
      });
    return e;
  }
  async UploadSingleImage(e, t, n, r) {
    let i = null,
      a = new FormData();
    a.append(`assetfile`, e.file, t), a.append(`sessionid`, f());
    let o = e.GetCurrentImageOption();
    if ((a.append(`strAssetType`, o.asset_type), !re(t)))
      return {
        bSuccess: !1,
        elErrorMessage: `Invalid file extension, cannot determine mimetype`,
      };
    try {
      i = await Ct.default.post(this.m_strUploadPath, a, {
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
        cancelToken: r,
      });
    } catch (e) {
      console.error(De(e)?.strErrorMsg);
    }
    return !i.data || i.data.error
      ? {
          bSuccess: !1,
          elErrorMessage:
            i.data.error ?? P(`#CommunityItems_GenericUpload_Error`),
        }
      : { bSuccess: !0, result: i?.data };
  }
};
v([s], Z.prototype, `m_filesToUpload`, void 0),
  v([k], Z.prototype, `GetUploadImages`, null),
  v([k], Z.prototype, `ClearImages`, null),
  v([k], Z.prototype, `DeleteUploadImage`, null),
  v([k], Z.prototype, `AddImageForLanguage`, null);
function gs(e) {
  let { appID: t, unItemType: n, rgAssetDefinitions: r } = e,
    i = W.useMemo(
      () =>
        new Z(
          c.PARTNER_BASE_URL + `communityitems/ajaxuploadasset/${t}/${n}`,
          !0,
          r,
        ),
      [t, n, r],
    );
  return (0, G.jsx)(`div`, {
    children: (0, G.jsx)(we, {
      elOverrideDragAndDropText: P(`#CommunityItems_Upload_Instructions`),
      imageUploader: i,
      rgRealmList: [g.k_ESteamRealmGlobal],
      fnUploadComplete: (e) => {
        e.some((e) => e.bSuccess) && hs(t, n);
      },
    }),
  });
}
var _s = `b5Vyx9E4PYk-`,
  vs = `EXiBUMcoJqk-`,
  ys = `TpQ5LCQeO6A-`,
  bs = `cBr5V9MVo4Q-`,
  xs = `q08dLy5oCdk-`,
  Ss = `wprlkpQX5G0-`,
  Cs = `_8ydM55RAy1k-`,
  ws = `jeLDBTnpKys-`,
  Ts = `Qcp4i2FD2Iw-`,
  Es = class {
    m_ItemDefinition = {};
    m_ItemKV = {};
    constructor(t) {
      T(this);
      let { itemDef: n, communityItemDef: r } = t;
      e(
        t.itemDef || t.communityItemDef,
        `CCommunityItem must be initialized by an itemDef or a communityItemDef`,
      ),
        n
          ? (this.m_ItemDefinition = {
              item_type: n.item_type,
              item_class: n.item_class,
              item_description: n.item_description,
              editor_accountid: n.editor_accountid,
              deleted: n.deleted,
              active: n.active,
              appid: n.appid,
              item_image_composed: n.item_image_composed,
              item_image_large: n.item_image_large,
              item_image_small: n.item_image_small,
              item_key_values: n.item_key_values,
              item_movie_mp4: n.item_movie_mp4,
              item_movie_mp4_small: n.item_movie_mp4_small,
              item_internal_name: n.item_name,
              item_series: n.item_series,
              item_movie_webm: n.item_movie_webm,
              item_movie_webm_small: n.item_movie_webm_small,
              item_image_composed_foil: n.item_image_composed_foil,
              item_last_changed: n.item_last_changed,
              broadcast_channel_id: n.broadcast_channel_id,
            })
          : (e(
              !!r,
              `Managed to get into LoadItemDefinition with neither itemDef nor communityItemDef`,
            ),
            (this.m_ItemDefinition = r)),
        this.m_ItemDefinition.item_key_values &&
          (this.m_ItemKV = JSON.parse(this.m_ItemDefinition.item_key_values));
    }
    get AppID() {
      return this.m_ItemDefinition.appid;
    }
    get BIsActive() {
      return this.m_ItemDefinition.active;
    }
    get ItemID() {
      return this.m_ItemDefinition.item_type;
    }
    get BIsDeleted() {
      return this.m_ItemDefinition.deleted;
    }
    get ItemClass() {
      return this.m_ItemDefinition.item_class;
    }
    get CommunityItemDef() {
      return this.m_ItemDefinition;
    }
  };
v([s], Es.prototype, `m_ItemDefinition`, void 0),
  v([s], Es.prototype, `m_ItemKV`, void 0);
function Ds(e, t) {
  return `${c.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
}
function Os() {
  return [1, 3, 10];
}
function ks() {
  return [4, 5];
}
function As(e, t, n) {
  return e === 17 ? js : null;
}
var js = [
    {
      asset_type: `movie_large`,
      label: P(`#CommunityItems_StartupMovie_Label_Video`),
      width: 1920,
      height: 1200,
      accepted_filetypes: ks(),
      is_video: !0,
      guidelines: [
        {
          strHeader: P(`#CommunityItems_StartupMovie_GuidelineVideo_Header`),
          strIntro: P(`#CommunityItems_StartupMovie_GuidelineVideo_Intro`),
          rgBulletPoints: [
            P(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_1`),
            P(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_2`),
            P(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_3`),
            P(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_4`),
          ],
        },
        {
          strHeader: P(`#CommunityItems_StartupMovie_GuidelineAudio_Header`),
          strIntro: P(`#CommunityItems_StartupMovie_GuidelineAudio_Intro`),
          rgBulletPoints: [
            P(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_1`),
            P(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_2`),
            P(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_3`),
          ],
        },
      ],
    },
    {
      asset_type: `image_large`,
      label: P(`#CommunityItems_StartupMovie_Label_Poster`),
      width: 1920,
      height: 1200,
      accepted_filetypes: Os(),
      guidelines: [
        {
          strHeader: P(`#CommunityItems_StartupMovie_GuidelineImage_Header`),
          strIntro: P(`#CommunityItems_StartupMovie_GuidelineImage_Intro`),
          rgBulletPoints: [
            P(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_2`),
            P(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_3`),
            P(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_1`),
          ],
        },
      ],
    },
  ],
  Q = W.createContext(null),
  Ms = ({ communityItem: e, assetDefs: t, children: n }) =>
    (0, G.jsx)(Q.Provider, {
      value: { communityItem: e, assetDefs: t },
      children: n,
    });
function Ns(e) {
  let { appID: t, unItemType: n } = e,
    r = ms(t, n);
  if (!r) return null;
  let i = new Es({ itemDef: r }),
    o = As(i.ItemClass, !1, !1);
  if (!o) return null;
  let s = (!i.BIsActive || a.is_support) && !i.BIsDeleted;
  return (0, G.jsx)(Ms, {
    communityItem: i,
    assetDefs: o,
    children: (0, G.jsxs)(`div`, {
      className: _s,
      children: [s && (0, G.jsx)(Ps, {}), (0, G.jsx)(Ls, {})],
    }),
  });
}
function Ps() {
  let { communityItem: e, assetDefs: t } = W.useContext(Q),
    n = t
      .flatMap((e) => e.guidelines)
      .map((e, t) => (0, G.jsx)(Fs, { guideline: e }, `guideline_${t}`));
  return (0, G.jsxs)(`div`, {
    className: vs,
    children: [
      (0, G.jsx)(`div`, { className: Cs, children: n }),
      (0, G.jsx)(gs, {
        appID: e.AppID,
        unItemType: e.ItemID,
        rgAssetDefinitions: t,
      }),
    ],
  });
}
function Fs(e) {
  let { guideline: t } = e;
  return (0, G.jsxs)(`div`, {
    className: Ts,
    children: [
      (0, G.jsx)(`div`, { className: ws, children: t.strHeader }),
      (0, G.jsx)(`div`, { className: void 0, children: t.strIntro }),
      t.rgBulletPoints?.length > 0 &&
        (0, G.jsx)(Is, { rgBulletPoints: t.rgBulletPoints }),
    ],
  });
}
function Is(e) {
  let { rgBulletPoints: t } = e,
    n = t.map((e, t) => (0, G.jsx)(`li`, { children: e }, `bulletpoint_${t}`));
  return (0, G.jsx)(`ul`, { children: n });
}
function Ls() {
  let { communityItem: e, assetDefs: t } = W.useContext(Q),
    n = t.map((e) => (0, G.jsx)(Rs, { assetDef: e }, e.asset_type));
  return (0, G.jsx)(`div`, { className: ys, children: n });
}
function Rs(e) {
  let { assetDef: t } = e,
    { communityItem: n, assetDefs: r } = W.useContext(Q);
  return (0, G.jsxs)(`div`, {
    className: bs,
    children: [
      (0, G.jsxs)(`div`, { className: void 0, children: [`*`, t.label] }),
      (0, G.jsx)(`div`, {
        className: void 0,
        children: t.is_video
          ? (0, G.jsx)(Vs, {
              rgSources: fs(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            })
          : (0, G.jsx)(Bs, {
              rgSources: fs(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            }),
      }),
    ],
  });
}
function zs() {
  return (0, G.jsx)(`div`, {
    className: Ss,
    children: (0, G.jsx)(`div`, {
      children: P(`#CommunityItems_PlaceholderAsset_Missing`),
    }),
  });
}
function Bs(e) {
  let { rgSources: t, unAppID: n } = e;
  return t.length
    ? (0, G.jsx)(`img`, { className: xs, src: Ds(n, t[0]) })
    : (0, G.jsx)(zs, {});
}
function Vs(e) {
  let { rgSources: t, unAppID: n } = e,
    r = W.useRef(void 0);
  if (
    (W.useEffect(() => {
      r.current && r.current.load();
    }, [t]),
    !t.length)
  )
    return (0, G.jsx)(zs, {});
  let i = t.map((e, t) =>
    (0, G.jsx)(`source`, { src: Ds(n, e), type: re(e) }, `video_${t}`),
  );
  return (0, G.jsx)(`video`, {
    ref: r,
    className: xs,
    autoPlay: !0,
    loop: !0,
    muted: !0,
    playsInline: !0,
    controls: !0,
    children: i,
  });
}
function Hs(e) {
  let {
      unAppID: t,
      bShowSteamChina: n,
      bHasCompletedContentSurvey: r,
      strContentSurveyURL: i,
    } = e,
    a = V({ appid: t }),
    [o, s, c] = W.useMemo(() => {
      if (!a || a.isLoading || !a.data) return [``, ``, !1];
      let e = [...a.data.restricted_countries];
      return (
        n || (e = e.filter((e) => e !== `XC`)),
        a.data.no_restrictions
          ? [``, ``, !1]
          : [e?.join(`, `), a.data.allowed_countries?.join(`, `), !r]
      );
    }, [r, n, a]);
  return !s.length && !o.length
    ? (0, G.jsx)(`div`, { children: P(`#AppLanding_RegionRestrictions_None`) })
    : (0, G.jsxs)(G.Fragment, {
        children: [
          s.length > 0 &&
            (0, G.jsx)(`div`, {
              children: P(`#AppLanding_RegionRestrictions_Allowed`, s),
            }),
          o.length > 0 &&
            (0, G.jsx)(`div`, {
              children: P(`#AppLanding_RegionRestrictions_Blocked`, o),
            }),
          c &&
            (0, G.jsx)(`div`, {
              children: F(
                `#AppLanding_RegionRestrictions_ContentSurvey`,
                (0, G.jsx)(`a`, { href: i }),
              ),
            }),
        ],
      });
}
var $ = {
  CommunityItem: (e, t) => `/apps/communityitems/${e}/${t}`,
  AppLanding: (e) => `/apps/landing/${e}`,
  AppInstaller: (e) => `/apps/installer/${e}`,
  AppEconomy: (e) => `/apps/economy/${e}`,
};
function Us(e) {
  return (0, G.jsxs)(_e, {
    children: [
      (0, G.jsx)(I, {
        path: $.CommunityItem(`:appid`, `:itemtype`),
        render: (e) =>
          (0, G.jsx)(U, {
            config: {
              "appadmin-profilecolors": (e) => (0, G.jsx)(it, { ...e }),
              "appadmin-communityitemassets": () =>
                (0, G.jsx)(Ns, {
                  appID: Number.parseInt(e.match.params.appid),
                  unItemType: Number.parseInt(e.match.params.itemtype),
                }),
            },
          }),
      }),
      (0, G.jsx)(I, {
        path: $.AppLanding(`:appid`),
        render: (e) =>
          (0, G.jsx)(U, {
            config: {
              "storeadmin-releasedateinfo": (e) => (0, G.jsx)(at, { ...e }),
              "storeadmin-applanding-statsrollup": (e) =>
                (0, G.jsx)(zt, { ...e }),
              "storeadmin-applanding-demowishlistemails": (e) =>
                (0, G.jsx)(Bt, { ...e }),
              "storeadmin-editions-editor": (e) => (0, G.jsx)(rt, { ...e }),
              "appadmin-restrictedcountries": (e) => (0, G.jsx)(Hs, { ...e }),
            },
          }),
      }),
      (0, G.jsx)(I, {
        path: $.AppInstaller(`:appid`),
        render: (e) =>
          (0, G.jsx)(U, {
            config: {
              "storeadmin-steamworksredist-edit": (e) =>
                (0, G.jsx)(ss, { ...e }),
            },
          }),
      }),
      (0, G.jsx)(I, {
        path: $.AppEconomy(`:appid`),
        render: (e) =>
          (0, G.jsx)(U, {
            config: {
              "storeadmin-steamworkseconomy-propertyedit": (e) =>
                (0, G.jsx)(Di, { ...e }),
            },
          }),
      }),
    ],
  });
}
export { Us as default };
