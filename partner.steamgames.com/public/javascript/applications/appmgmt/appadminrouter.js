/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import {
  A as e,
  Ct as t,
  Dt as n,
  G as r,
  K as i,
  Pt as a,
  S as o,
  St as s,
  U as c,
  W as l,
  _t as u,
  bt as d,
  g as f,
  gt as p,
  k as m,
  n as h,
  nt as g,
  pt as _,
  r as v,
  vt as y,
  w as b,
  wt as ee,
  xt as x,
  y as S,
  yt as C,
} from "./chunk~de7f2df91c.js";
import {
  Bt as w,
  Nt as T,
  Pt as E,
  c as D,
  t as te,
} from "./chunk~bd90a5fce7.js";
import {
  i as O,
  l as ne,
  n as k,
  o as re,
  r as A,
  s as ie,
} from "./chunk~b4171a8747.js";
import {
  Da as ae,
  Ft as oe,
  Gt as j,
  Ht as se,
  Pt as ce,
  da as M,
  eo as N,
  fa as P,
  hn as le,
  in as ue,
  ua as de,
} from "./chunk~1fa4b8f2ff.js";
import { _ as fe, r as pe } from "./chunk~0a99e05c44.js";
import { a as me, r as F } from "./chunk~44f252525d.js";
import { n as he } from "./chunk~f8b6a4beb3.js";
import { t as ge } from "./chunk~ede3e357a2.js";
import { t as _e } from "./chunk~9aa05d2c7d.js";
import { a as ve, l as ye, o as be } from "./chunk~428594b857.js";
import { r as xe } from "./chunk~b390ee0f78.js";
import { n as Se } from "./chunk~b0a84aab1b.js";
import { S as I, i as Ce, s as we, x as Te } from "./chunk~96e60d7578.js";
import { t as Ee } from "./chunk~726542bc75.js";
import { n as De } from "./chunk~a6402cc243.js";
import { t as Oe } from "./chunk~8681f5c764.js";
import { t as ke } from "./chunk~f4e4ed5c17.js";
import { t as Ae } from "./chunk~c55709d290.js";
import {
  J as je,
  T as Me,
  i as Ne,
  n as Pe,
  r as Fe,
  u as Ie,
} from "./chunk~b00bc5ccc1.js";
import {
  C as Le,
  E as L,
  O as Re,
  S as ze,
  a as Be,
  b as Ve,
  c as He,
  d as Ue,
  k as We,
  l as Ge,
  m as Ke,
  n as qe,
  o as Je,
  p as Ye,
  s as Xe,
  t as Ze,
  u as Qe,
  v as $e,
  x as et,
  y as R,
} from "./chunk~bd435de487.js";
import { t as tt } from "./chunk~eefd71512b.js";
import "./chunk~ca0c999570.js";
import { n as nt } from "./chunk~a7c5e71e12.js";
import { l as rt, n as it, u as at, v as ot } from "./chunk~d6693aba87.js";
import { t as z } from "./chunk~234d4d786c.js";
import { c as st, l as ct, t as lt } from "./chunk~eae65d56a7.js";
import { n as ut } from "./chunk~9b35b2d482.js";
var B = a(g()),
  dt = `fHxyDThw2SA-`,
  ft = `bXQSJ5DkbKo-`,
  pt = `iVSnrcCn4Yo-`,
  mt = `C0Gk8LNsNT4-`,
  ht = `HmCtrHg-GeE-`,
  gt = `VRt6OsaWSFQ-`,
  _t = `tqnF2eX4-Y8-`,
  vt = `b0mgbqlTptQ-`,
  V = l();
function yt(e, t) {
  let r = xe(t),
    i = pe();
  n(
    i?.bUsePartnerAPI,
    `useIsDemoVisibleOnSomewhere must run under PartnerStoreBrowseUnpublishedRoot, or the answer depends on the viewer's country`,
  );
  let { data: a, isLoading: o } = fe(r);
  if (!o)
    return a && a.related_items
      ? (a.related_items.demo_appid &&
          a.related_items.demo_appid.includes(e)) ||
          (a.related_items.standalone_demo_appid &&
            a.related_items.standalone_demo_appid.includes(e))
      : !1;
}
function bt(e) {
  let { parentAppId: t } = e;
  return (0, V.jsxs)(`div`, {
    className: v(_t, vt),
    children: [
      (0, V.jsx)(`p`, {
        children: M(`#App_Landing_DemoWishlist_Demo_NotVisible`),
      }),
      (0, V.jsx)(`p`, {
        children: P(
          `#App_Landing_DemoWishlist_Demo_NotVisible_Publish`,
          (0, V.jsx)(`a`, {
            href: `${f.PARTNER_BASE_URL}admin/game/editbyappid/${t}?activetab=tab_specialsettings#associated_demos`,
            target: `_blank`,
          }),
        ),
      }),
    ],
  });
}
var xt = 7,
  St = 7;
function Ct(e) {
  let { demoAppID: t, parentAppId: n } = e,
    [i, a] = B.useState(!1),
    [o, s] = B.useState(void 0),
    c = yt(t, n),
    [l, u] = B.useState(void 0),
    [d, f] = B.useState(0),
    p = B.useCallback(() => f((e) => e + 1), []),
    h = he();
  (B.useEffect(() => {
    let e = new AbortController();
    return (
      (async () => {
        (a(!1), s(void 0));
        let i = r.Init(ve);
        (i.Body().set_demo_appid(t), i.Body().set_appid(n));
        let o = await ye.GetWishlistDemoEmailStatus(h, i);
        e.signal.aborted ||
          (o.BSuccess() && (a(o.Body().can_fire()), s(o.Body().time_staged())));
      })(),
      () => e.abort()
    );
  }, [h, t, n, d]),
    B.useEffect(() => {
      let e = window.AppLandingRefreshCallbacks;
      e || ((e = new T()), (window.AppLandingRefreshCallbacks = e));
      let t = e.Register(p);
      return () => t.Unregister();
    }, [p]));
  let g = i || l !== void 0,
    _ = o + xt * N.PerDay,
    v = !i && o && new Date(_ * 1e3) > new Date();
  if (g || v) {
    let e = `${m.PARTNER_BASE_URL}doc/marketing/wishlist`;
    return (0, V.jsxs)(`div`, {
      className: pt,
      children: [
        (0, V.jsxs)(`div`, {
          className: dt,
          children: [
            (0, V.jsx)(`h2`, {
              children: M(`#App_Landing_DemoWishlist_Title`),
            }),
            (0, V.jsx)(`a`, {
              className: ft,
              href: e,
              children: M(`#App_Landing_DemoWishlist_Link`),
            }),
          ],
        }),
        g &&
          (0, V.jsx)(wt, {
            demoAppID: t,
            parentAppId: n,
            bSendEmailsSucceeded: l,
            setSendEmailsSucceeded: u,
            bIsDemoVisible: c,
          }),
        g && c === !1 && (0, V.jsx)(bt, { demoAppID: t, parentAppId: n }),
        g && v && (0, V.jsx)(`hr`, { className: `kJKQ7pq9uBQ-` }),
        v &&
          (0, V.jsx)(Et, {
            parentAppId: n,
            timeStaged: o,
            noticeVisibleToDate: _,
          }),
      ],
    });
  }
}
function wt(e) {
  let {
      demoAppID: t,
      parentAppId: n,
      bIsDemoVisible: i,
      bSendEmailsSucceeded: a,
      setSendEmailsSucceeded: o,
    } = e,
    [s, c] = B.useState(!1),
    [l, u] = B.useState(!1),
    d = he(),
    f = B.useCallback(async () => {
      (u(!1), c(!0));
      try {
        let e = r.Init(be);
        (e.Body().set_demo_appid(t), e.Body().set_appid(n));
        let i = await ye.QueueWishlistDemoEmailToFire(d, e);
        o(i.BSuccess());
      } finally {
        c(!1);
      }
    }, [t, n, d, o]),
    { bLoading: p, rgWarnings: m } = Tt(n, t),
    h = m.every((e) => !e.bCritical);
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)(`div`, {
        className: mt,
        children: M(`#App_Landing_DemoWishlist_SubTitle`),
      }),
      (0, V.jsx)(`div`, {
        className: ht,
        children: (0, V.jsx)(`p`, {
          children: M(`#App_Landing_DemoWishlist_Desc`),
        }),
      }),
      p
        ? (0, V.jsx)(tt, {})
        : (0, V.jsxs)(V.Fragment, {
            children: [
              m.map((e) =>
                (0, V.jsx)(
                  `div`,
                  {
                    className: v(_t, e.bCritical && `b0mgbqlTptQ-`),
                    children: (0, V.jsx)(`p`, { children: e.sText }),
                  },
                  e.sText,
                ),
              ),
              a === void 0 &&
                (0, V.jsx)(V.Fragment, {
                  children: (0, V.jsxs)(`div`, {
                    className: `GB5htOj-H3w-`,
                    children: [
                      (0, V.jsx)(j, {
                        className: v(
                          `btn_green_steamui btn_border_2px btn_medium`,
                          `I-mdGc7U3CQ-`,
                        ),
                        disabled: s || !h || !i,
                        onClick: () => u(!0),
                        children: (0, V.jsx)(`span`, {
                          children: M(
                            `#App_Landing_DemoWishlist_SendEmailsButton`,
                          ),
                        }),
                      }),
                      s &&
                        (0, V.jsx)(tt, {
                          className: `pfOBfU1XYpw-`,
                          size: `small`,
                        }),
                    ],
                  }),
                }),
              a !== void 0 &&
                (0, V.jsxs)(`div`, {
                  className: `GB5htOj-H3w-`,
                  children: [
                    a &&
                      (0, V.jsx)(`div`, {
                        className: `l4AqU3s0T-0-`,
                        children: M(
                          `#App_Landing_DemoWishlist_SendEmails_Succeeded`,
                        ),
                      }),
                    !a &&
                      (0, V.jsx)(`div`, {
                        className: `PbPeHd0P-uM-`,
                        children: M(
                          `#App_Landing_DemoWishlist_SendEmails_Failed`,
                        ),
                      }),
                  ],
                }),
            ],
          }),
      l &&
        (0, V.jsxs)(Oe, {
          active: !0,
          className: void 0,
          children: [
            (0, V.jsx)(`h1`, {
              children: M(`#App_Landing_DemoWishlist_Dialog_Header`),
            }),
            (0, V.jsxs)(se, {
              className: void 0,
              children: [
                (0, V.jsx)(`div`, {
                  children: M(`#App_Landing_DemoWishlist_Dialog_Desc`),
                }),
                (0, V.jsx)(`h2`, {
                  children: M(`#App_Landing_DemoWishlist_Dialog_ListTitle`),
                }),
                (0, V.jsx)(`ul`, {
                  children: P(
                    `#App_Landing_DemoWishlist_Dialog_List`,
                    (0, V.jsx)(`li`, {}),
                    (0, V.jsx)(`b`, {}),
                  ),
                }),
              ],
            }),
            (0, V.jsx)(ue, {
              onOK: f,
              strOKText: M(`#App_Landing_DemoWishlist_Dialog_Confirm`),
              onCancel: () => u(!1),
              strCancelText: M(`#App_Landing_DemoWishlist_Dialog_Cancel`),
            }),
          ],
        }),
    ],
  });
}
function Tt(e, t) {
  let n = Re({ appid: e }),
    r = Re({ appid: t }),
    [i] = nt(e, { include_release: !0 }),
    a = n.isLoading || r.isLoading,
    o = n.isSuccess && r.isSuccess,
    [s, c, l, u] = B.useMemo(() => {
      if (!o) return [];
      let e = (e) =>
        w(
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
          sText: M(`#App_Landing_DemoWishlist_CountryLoad_Failed`),
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
      sText: M(
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
        ? M(
            `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Unrestricted`,
          )
        : e.length > 0
          ? M(
              `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Allow`,
              e.join(`, `),
            )
          : M(
              `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Deny`,
              t.join(`, `),
            ),
    _ = g(s, c),
    v = g(l, u);
  return (
    m != `unrestricted` && h != `unrestricted` && s.length > 0 != l.length > 0
      ? d.push({
          sText: M(
            `#App_Landing_DemoWishlist_CountryRestrictionTypes_Mismatch`,
            _,
            v,
          ),
          bCritical: !0,
        })
      : _ != v &&
        d.push({
          sText: M(
            `#App_Landing_DemoWishlist_CountryRestrictions_Mismatch`,
            _,
            v,
          ),
        }),
    { bLoading: !1, rgWarnings: d }
  );
}
function Et(e) {
  let { parentAppId: t, timeStaged: n, noticeVisibleToDate: r } = e,
    i = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`,
    a = i(new Date((n - St * N.PerDay) * 1e3)),
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
    l = `${m.STATS_BASE_URL}app/wishlist/${t}/?dateStart=${a}&dateEnd=${o}`;
  return (0, V.jsxs)(`div`, {
    className: ht,
    children: [
      (0, V.jsx)(`p`, {
        children: M(`#App_Landing_DemoWishlist_SentRecently_Desc`, s),
      }),
      (0, V.jsx)(`p`, {
        children: (0, V.jsx)(`a`, {
          href: l,
          children: M(`#App_Landing_DemoWishlist_SentRecently_ViewStats`),
        }),
      }),
      (0, V.jsx)(`p`, {
        className: gt,
        children: M(`#App_Landing_DemoWishlist_SentRecently_Notice`, c),
      }),
    ],
  });
}
var H = a(ke());
function Dt(e, t, n) {
  let { isLoading: r, data: i } = ge({
    queryKey: [`usePartnerFinancialDailySummary`, e, t, n],
    queryFn: async () => {
      let r = { partnerid: e, pastdays: t, appid: n },
        i = `${m.PARTNER_BASE_URL}financial/ajaxgetpartnersummary`,
        a = await H.default.get(i, { params: r, withCredentials: !0 });
      return a?.data?.success == 1
        ? a.data.data
        : { daily_sales: [], summary_sales: {} };
    },
    enabled: !!e && t >= 1,
  });
  return r ? null : i;
}
function Ot(t) {
  let { nPartnerID: n, nAppID: r } = t;
  return e.is_support ? (0, V.jsx)(kt, { nPartnerID: n, nAppID: r }) : null;
}
function kt(e) {
  let { nPartnerID: t, nAppID: n } = e,
    [r, i] = (0, B.useState)(90),
    a = Dt(t, r, n);
  return !a || a.daily_sales?.length == 0
    ? null
    : (0, V.jsxs)(`div`, {
        className: v(Ze, `valveOutline padded`),
        children: [
          (0, V.jsx)(`p`, { className: `valveh2`, children: `Valve Only:` }),
          (0, V.jsx)(jt, { nDaysInThePast: r, fnUpdateDaysInPast: i }),
          (0, V.jsx)(Pt, { stats: a }),
          (0, V.jsx)(Ft, { stats: a }),
        ],
      });
}
var At = [
  { label: M(`#PartnerStats_DayWeek`), data: 7 },
  { label: M(`#PartnerStats_DayMonth`), data: 30 },
  { label: M(`#PartnerStats_DayPeriod`), data: 90 },
];
function jt(e) {
  let { nDaysInThePast: t, fnUpdateDaysInPast: n } = e;
  return (0, V.jsxs)(`div`, {
    className: Qe,
    children: [
      (0, V.jsxs)(`div`, {
        className: He,
        children: [
          (0, V.jsx)(`div`, {
            className: Ue,
            children: M(`#PartnerStats_DayLabel`),
          }),
          (0, V.jsx)(oe, {
            layout: `inline`,
            label: null,
            rgOptions: At,
            selectedOption: t,
            onChange: (e) => n(e.data),
          }),
        ],
      }),
      (0, V.jsx)(`div`, {
        className: Le,
        children: (0, V.jsx)(`a`, {
          href: `#`,
          children: M(`#PartnerStats_ViewDetail`),
        }),
      }),
    ],
  });
}
var Mt = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});
function Nt(...e) {
  let t = 0;
  return (
    e.forEach((e) => {
      t += Number.parseInt(e || `0`) / 1e4;
    }),
    Mt.format(t)
  );
}
function Pt(e) {
  let { stats: t } = e;
  return (0, V.jsxs)(`div`, {
    className: Xe,
    children: [
      (0, V.jsxs)(`div`, {
        className: Ke,
        children: [
          (0, V.jsx)(`div`, {
            className: Je,
            children: M(`#PartnerStats_Header_Revenue`),
          }),
          (0, V.jsx)(`div`, {
            className: Ye,
            children: Nt(t.summary_sales.total_gross_sales_usdx100),
          }),
        ],
      }),
      (0, V.jsxs)(`div`, {
        className: Ke,
        children: [
          (0, V.jsx)(`div`, {
            className: Je,
            children: M(`#PartnerStats_Header_Units`),
          }),
          (0, V.jsx)(`div`, {
            className: Ye,
            children: Ee(
              Number.parseInt(t.summary_sales.steam_gross_units_sold || `0`),
            ),
          }),
        ],
      }),
    ],
  });
}
function Ft(e) {
  let { stats: t } = e,
    n = `total_gross_sales_usdx100`,
    [r, i, a] = (0, B.useMemo)(() => {
      if (!t || t.daily_sales?.length == 0) return [0, 0, []];
      let e = Lt(t.daily_sales, n),
        r = 0,
        i = 0;
      return (
        e.forEach((e) => {
          (e.partner_stats_value > r && (r = e.partner_stats_value),
            (i += e.partner_stats_value));
        }),
        [r, i, e.sort((e, t) => e.rtime - t.rtime)]
      );
    }, [t, n]);
  return !t || a.length == 0
    ? null
    : (0, V.jsx)(`div`, {
        className: Be,
        children: (0, V.jsx)(`div`, {
          className: qe,
          children: (0, V.jsx)(te, {
            children: (0, V.jsx)(Rt, { Data: a, nPeak: r }),
          }),
        }),
      });
}
function It(e, t) {
  return e[t];
}
function Lt(e, t) {
  let n = new Map();
  return (
    e.forEach((e) => {
      let r = e.rtime_date,
        i = Number.parseInt(It(e.daily_summary_sales, t));
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
var Rt = B.memo((e) => {
  let { Data: t, nPeak: n } = e,
    r = (0, B.useCallback)(
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
  return (0, V.jsx)(je, {
    width: `100%`,
    height: `100%`,
    children: (0, V.jsxs)(We, {
      accessibilityLayer: !1,
      data: t,
      margin: { top: 25, left: 0, right: 0, bottom: 0 },
      barGap: 10,
      children: [
        (0, V.jsx)(`defs`, {
          children: (0, V.jsxs)(`linearGradient`, {
            id: `bar_linear`,
            x1: `0`,
            x2: `0`,
            y1: `0`,
            y2: `1`,
            children: [
              (0, V.jsx)(`stop`, { stopColor: `#1A9FFF` }),
              (0, V.jsx)(`stop`, {
                offset: `1`,
                stopColor: `#1A9FFF`,
                stopOpacity: `1`,
              }),
            ],
          }),
        }),
        (0, V.jsx)(Ne, { vertical: !1, stroke: `#a0aab6` }),
        (0, V.jsx)(Pe, {
          tickFormatter: L,
          tick: { fill: `white` },
          axisLine: !1,
          orientation: `right`,
        }),
        (0, V.jsx)(Me, { content: (0, V.jsx)(Bt, {}) }),
        (0, V.jsx)(Ie, {
          dataKey: `partner_stats_value`,
          fill: `url( #bar_linear )`,
        }),
        (0, V.jsx)(Fe, {
          interval: 0,
          tick: (0, V.jsx)(zt, {}),
          tickFormatter: r,
        }),
      ],
    }),
  });
});
function zt(e) {
  let { x: t, y: n, payload: r } = e,
    i = e.tickFormatter(r.value, r.index);
  return (0, V.jsx)(`g`, {
    transform: `translate(${t},${n})`,
    children: (0, V.jsx)(`text`, {
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
function Bt({ active: e, payload: t }) {
  if (e && t && t.length) {
    let e = t[0].payload,
      n = e.partner_stats_value,
      r = n;
    return (
      e.top_app_sales.forEach((e) => {
        r -=
          Number.parseInt(e.app_summary_sales.total_gross_sales_usdx100) / 1e4;
      }),
      (0, V.jsxs)(le, {
        className: et,
        children: [
          (0, V.jsx)(`div`, {
            children: M(`#PartnerStats_Tooltip_Date`, ae(e.rtime)),
          }),
          (0, V.jsx)(`div`, {
            className: Ge,
            children: (0, V.jsxs)(`div`, {
              className: $e,
              children: [
                e.top_app_sales.map((e) => {
                  let t =
                    (Number.parseInt(
                      e.app_summary_sales.total_gross_sales_usdx100,
                    ) /
                      1e4 /
                      n) *
                    100;
                  return (0, V.jsx)(
                    Vt,
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
                r > 2 &&
                  (0, V.jsxs)(`div`, {
                    className: `OMu8YgzmezU-`,
                    children: [
                      (0, V.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: M(`#PartnerStats_Tooltip_Remaining`),
                      }),
                      (0, V.jsx)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: L(r),
                      }),
                      (0, V.jsxs)(`div`, {
                        className: `BbxClrMpUdY-`,
                        children: [Math.round((r / n) * 100), `%`],
                      }),
                    ],
                  }),
                (0, V.jsxs)(`div`, {
                  className: v(Ve, ze),
                  children: [
                    (0, V.jsx)(`div`, {
                      className: R,
                      children: M(`#PartnerStats_Tooltip_Total`),
                    }),
                    (0, V.jsx)(`div`, { className: R, children: L(n) }),
                    (0, V.jsx)(`div`, { className: R }),
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
function Vt(e) {
  let { appid: t, usdRevenue: n, nPercentage: r } = e,
    [i] = nt(t, {});
  return (0, V.jsxs)(`div`, {
    className: Ve,
    children: [
      (0, V.jsx)(`div`, { className: R, children: i?.GetName() || t }),
      (0, V.jsx)(`div`, { className: R, children: L(n) }),
      (0, V.jsxs)(`div`, { className: R, children: [Math.round(r), `%`] }),
    ],
  });
}
function Ht(e) {
  let { nAppId: t, strAppType: n } = e,
    r = Se();
  return (
    (n == `Game` || n == `Application` || n == `DLC` || n == `Music`) &&
    (0, V.jsx)(Ot, { nPartnerID: r, nAppID: t })
  );
}
function Ut(e) {
  let { nAppId: t, nParentAppId: n, strAppType: r } = e;
  return (
    r == `Demo` &&
    (0, V.jsx)(ut, {
      children: (0, V.jsx)(Ct, { demoAppID: t, parentAppId: n }),
    })
  );
}
var Wt = `tPLTOu9ePPk-`,
  Gt = `-Q1V6OzMJYQ-`,
  Kt = `Yd5hCSNUAy4-`,
  qt = `_4rW9U0LKR7k-`,
  Jt = `GnGbfQ9iTVU-`,
  Yt = `_0aChvQftTzc-`,
  Xt = `MBmJikXJxtw-`,
  Zt = `_2vHaP5ZDZ6A-`,
  Qt = `nc8h1C7mz7w-`,
  $t = `JVr5LOg2d6c-`,
  U = a(ee(), 1),
  en = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: C.readString, bw: t.writeString },
            value: { n: 2, br: C.readString, bw: t.writeString },
            color: { n: 3, br: C.readString, bw: t.writeString },
            label: { n: 4, br: C.readString, bw: t.writeString },
            name: { n: 5, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  W = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.link || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: C.readString, bw: t.writeString },
            name: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  tn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            category: { n: 2, br: C.readString, bw: t.writeString },
            internal_name: { n: 3, br: C.readString, bw: t.writeString },
            localized_category_name: {
              n: 4,
              br: C.readString,
              bw: t.writeString,
            },
            localized_tag_name: { n: 5, br: C.readString, bw: t.writeString },
            color: { n: 6, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  nn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.contained_items || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1, 2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: rn, r: !0, q: !0 },
            search_tags: { n: 2, c: tn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  rn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  G = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(
          this,
          t,
          0,
          -1,
          [8, 10, 11, 12, 13, 21, 26],
          null,
        ));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readInt32, bw: t.writeInt32 },
            classid: { n: 2, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            currency: { n: 4, br: C.readBool, bw: t.writeBool },
            background_color: { n: 5, br: C.readString, bw: t.writeString },
            icon_url: { n: 6, br: C.readString, bw: t.writeString },
            icon_url_large: { n: 7, br: C.readString, bw: t.writeString },
            descriptions: { n: 8, c: en, r: !0, q: !0 },
            tradable: { n: 9, br: C.readBool, bw: t.writeBool },
            actions: { n: 10, c: W, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: en, r: !0, q: !0 },
            owner_actions: { n: 12, c: W, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: C.readString,
              bw: t.writeRepeatedString,
            },
            name: { n: 14, br: C.readString, bw: t.writeString },
            name_color: { n: 15, br: C.readString, bw: t.writeString },
            type: { n: 16, br: C.readString, bw: t.writeString },
            market_name: { n: 17, br: C.readString, bw: t.writeString },
            market_hash_name: { n: 18, br: C.readString, bw: t.writeString },
            market_fee: { n: 19, br: C.readString, bw: t.writeString },
            market_fee_app: { n: 28, br: C.readInt32, bw: t.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: W, r: !0, q: !0 },
            commodity: { n: 22, br: C.readBool, bw: t.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: C.readInt32,
              bw: t.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: C.readInt32,
              bw: t.writeInt32,
            },
            marketable: { n: 25, br: C.readBool, bw: t.writeBool },
            tags: { n: 26, c: tn, r: !0, q: !0 },
            item_expiration: { n: 27, br: C.readString, bw: t.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: C.readString,
              bw: t.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: C.readString,
              bw: t.writeString,
            },
            sealed: { n: 32, br: C.readBool, bw: t.writeBool },
            container_properties: { n: 33, c: nn },
            market_bucket_group_name: {
              n: 34,
              br: C.readString,
              bw: t.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: C.readString,
              bw: t.writeString,
            },
            sealed_type: { n: 37, br: C.readUint32, bw: t.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: C.readString,
              bw: t.writeString,
            },
            market_bucket_id: { n: 39, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  K = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.propertyid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            int_value: { n: 2, br: C.readInt64String, bw: t.writeInt64String },
            float_value: { n: 3, br: C.readFloat, bw: t.writeFloat },
            string_value: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  an = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            standalone_properties: { n: 3, c: K, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: K, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  on = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            assetid: { n: 3, br: C.readUint64String, bw: t.writeUint64String },
            asset_properties: { n: 4, c: K, r: !0, q: !0 },
            asset_accessories: { n: 5, c: an, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  sn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            name: { n: 2, br: C.readString, bw: t.writeString },
            type: { n: 3, br: C.readEnum, bw: t.writeEnum },
            float_min: { n: 4, br: C.readFloat, bw: t.writeFloat },
            float_max: { n: 5, br: C.readFloat, bw: t.writeFloat },
            int_min: { n: 6, br: C.readInt64String, bw: t.writeInt64String },
            int_max: { n: 7, br: C.readInt64String, bw: t.writeInt64String },
            localized_label: { n: 8, br: C.readString, bw: t.writeString },
            hide_from_description: { n: 9, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  cn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            language: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  ln = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_schemas || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: sn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  q = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            assetid: { n: 3, br: C.readUint64String, bw: t.writeUint64String },
            classid: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            currencyid: { n: 6, br: C.readUint32, bw: t.writeUint32 },
            amount: { n: 7, br: C.readInt64String, bw: t.writeInt64String },
            missing: { n: 8, br: C.readBool, bw: t.writeBool },
            est_usd: { n: 9, br: C.readInt64String, bw: t.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  un = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            get_descriptions: { n: 4, br: C.readBool, bw: t.writeBool },
            get_asset_properties: { n: 11, br: C.readBool, bw: t.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: C.readBool,
              bw: t.writeBool,
            },
            language: { n: 5, br: C.readString, bw: t.writeString },
            filters: { n: 6, c: dn },
            start_assetid: {
              n: 8,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            count: { n: 9, br: C.readInt32, bw: t.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  dn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assetids || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1, 2], null));
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
              br: C.readUint64String,
              pbr: C.readPackedUint64String,
              bw: t.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: C.readBool, bw: t.writeBool },
            marketable_only: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  fn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: q, r: !0, q: !0 },
            descriptions: { n: 2, c: G, r: !0, q: !0 },
            missing_assets: { n: 3, c: q, r: !0, q: !0 },
            asset_properties: { n: 7, c: on, r: !0, q: !0 },
            more_items: { n: 4, br: C.readBool, bw: t.writeBool },
            last_assetid: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: C.readUint32,
              bw: t.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  pn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.generate_new_token || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  mn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offer_access_token || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  hn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.return_url || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  gn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  _n = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: C.readString, bw: t.writeString },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            classes: { n: 3, c: rn, r: !0, q: !0 },
            high_pri: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  vn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.descriptions || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: G, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  yn;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      i(un, t, n),
      fn,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, i(pn, t, n), mn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      i(hn, t, n),
      gn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, i(_n, t, n), vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = a;
  function o(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, i(cn, t, n), ln, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetPropertySchema = o;
})((yn ||= {}));
var bn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_Generic_Response`;
    }
  },
  xn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            force_context_list_refresh: {
              n: 2,
              br: C.readBool,
              bw: t.writeBool,
            },
            add_app_if_doesnt_exist: { n: 3, br: C.readBool, bw: t.writeBool },
            num_new_items: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            num_removed_items: { n: 5, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Request`;
    }
  },
  Sn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.can_receive || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            can_receive: { n: 1, br: C.readBool, bw: t.writeBool },
            can_send: { n: 2, br: C.readBool, bw: t.writeBool },
            exceeded_max_asset_count: { n: 3, br: C.readBool, bw: t.writeBool },
            app_missing: { n: 4, br: C.readBool, bw: t.writeBool },
            disabled_in_region: { n: 5, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradePermissionsForApp_Response`;
    }
  },
  Cn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            show_private: { n: 2, br: C.readBool, bw: t.writeBool },
            cached_asset_count_only: { n: 3, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconSummary_Request`;
    }
  },
  wn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            name: { n: 2, br: C.readString, bw: t.writeString },
            asset_count: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSummary`;
    }
  },
  Tn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.apps || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: wn, r: !0, q: !0 },
            num_trades: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            time_last_trade: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            steamid_last_trade_partner: {
              n: 4,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            num_market_listings: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            num_market_transactions: {
              n: 6,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            time_last_market_sale: {
              n: 7,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            steamid_last_market_sale: {
              n: 8,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            time_last_market_purchase: {
              n: 9,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            steamid_last_market_purchase: {
              n: 10,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            num_trades_in_escrow: {
              n: 11,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            time_all_escrow_end: { n: 12, br: C.readUint32, bw: t.writeUint32 },
            cached_data_needs_updating: {
              n: 13,
              br: C.readBool,
              bw: t.writeBool,
            },
            num_trade_partners: { n: 14, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconSummary_Response`;
    }
  },
  En = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Request`;
    }
  },
  Dn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            num_trades: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            time_first_trade: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            time_last_trade: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TopTradePartner`;
    }
  },
  On = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.partners || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partners: { n: 1, c: Dn, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTopTradePartners_Response`;
    }
  },
  kn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            time_banned_until: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            time_probation_until: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SetTradeBanTime_Request`;
    }
  },
  An = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            time_force_trusted_until: {
              n: 2,
              br: C.readUint32,
              bw: t.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SetForceTradeTrustedTime_Request`;
    }
  },
  jn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2, 3], null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            items_to_give: { n: 2, c: q, r: !0, q: !0 },
            items_to_receive: { n: 3, c: q, r: !0, q: !0 },
            message: { n: 4, br: C.readString, bw: t.writeString },
            tradeofferid_countered: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            webcookie: { n: 6, br: C.readString, bw: t.writeString },
            trading_topic: { n: 7, c: Mn },
            trade_offer_access_token: {
              n: 8,
              br: C.readString,
              bw: t.writeString,
            },
            from_realtime_trade: { n: 9, br: C.readBool, bw: t.writeBool },
            ip_sender: { n: 10, br: C.readString, bw: t.writeString },
            machine_authid_sender: {
              n: 11,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            ip_target: { n: 12, br: C.readString, bw: t.writeString },
            machine_authid_target: {
              n: 13,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request`;
    }
  },
  Mn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_owner || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            forumtype: { n: 2, br: C.readString, bw: t.writeString },
            gidfeature: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            gidtopic: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Request_ForumTopicIdentifier`;
    }
  },
  Nn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            trade_response: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CreateTradeOffer_Response`;
    }
  },
  Pn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            item_to_give: { n: 3, c: q },
            webcookie: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SendGift_Request`;
    }
  },
  Fn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            trade_response: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_SendGift_Response`;
    }
  },
  In = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.get_sent_offers || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            get_sent_offers: { n: 1, br: C.readBool, bw: t.writeBool },
            get_received_offers: { n: 2, br: C.readBool, bw: t.writeBool },
            get_descriptions: { n: 3, br: C.readBool, bw: t.writeBool },
            language: { n: 4, br: C.readString, bw: t.writeString },
            active_only: { n: 6, br: C.readBool, bw: t.writeBool },
            historical_only: { n: 7, br: C.readBool, bw: t.writeBool },
            time_historical_cutoff: {
              n: 8,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            cursor: { n: 9, d: 0, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Request`;
    }
  },
  J = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [6, 7], null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            accountid_other: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            message: { n: 3, br: C.readString, bw: t.writeString },
            expiration_time: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            trade_offer_state: { n: 5, br: C.readEnum, bw: t.writeEnum },
            items_to_give: { n: 6, c: q, r: !0, q: !0 },
            items_to_receive: { n: 7, c: q, r: !0, q: !0 },
            is_our_offer: { n: 8, br: C.readBool, bw: t.writeBool },
            time_created: { n: 9, br: C.readUint32, bw: t.writeUint32 },
            time_updated: { n: 10, br: C.readUint32, bw: t.writeUint32 },
            tradeid: {
              n: 11,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            from_real_time_trade: { n: 12, br: C.readBool, bw: t.writeBool },
            escrow_end_date: { n: 13, br: C.readUint32, bw: t.writeUint32 },
            confirmation_method: { n: 14, br: C.readEnum, bw: t.writeEnum },
            partner_confirmation_method: {
              n: 15,
              br: C.readEnum,
              bw: t.writeEnum,
            },
            eresult: { n: 16, d: 1, br: C.readUint32, bw: t.writeUint32 },
            delay_settlement: { n: 17, br: C.readBool, bw: t.writeBool },
            settlement_date: { n: 18, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeOffer`;
    }
  },
  Ln = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_offers_sent || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offers_sent: { n: 1, c: J, r: !0, q: !0 },
            trade_offers_received: { n: 2, c: J, r: !0, q: !0 },
            descriptions: { n: 3, c: G, r: !0, q: !0 },
            next_cursor: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffers_Response`;
    }
  },
  Rn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            tradeid: { n: 2, br: C.readUint64String, bw: t.writeUint64String },
            trade_status: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Request`;
    }
  },
  zn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_TradeLeftEscrow_Response`;
    }
  },
  Bn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_target || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            trade_offer_access_token: {
              n: 2,
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Request`;
    }
  },
  Vn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.my_escrow || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            my_escrow: { n: 1, c: Hn },
            their_escrow: { n: 2, c: Hn },
            both_escrow: { n: 3, c: Hn },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response`;
    }
  },
  Hn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.escrow_end_duration_seconds || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint32,
              bw: t.writeUint32,
            },
            escrow_end_date: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            escrow_end_date_rfc3339: {
              n: 3,
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHoldDurations_Response_Scenario`;
    }
  },
  Un = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            language: { n: 2, br: C.readString, bw: t.writeString },
            get_descriptions: { n: 3, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Request`;
    }
  },
  Wn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            language: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForAnyUser_Request`;
    }
  },
  Gn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.offer || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: J },
            descriptions: { n: 2, c: G, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffer_Response`;
    }
  },
  Kn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            language: { n: 3, br: C.readString, bw: t.writeString },
            confirmation_code: {
              n: 4,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Request`;
    }
  },
  qn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.offer || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            offer: { n: 1, c: J },
            descriptions: { n: 2, c: G, r: !0, q: !0 },
            asset_properties: { n: 3, c: on, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOfferForConfirmation_Response`;
    }
  },
  Jn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            webcookie: { n: 2, br: C.readString, bw: t.writeString },
            ip: { n: 3, br: C.readString, bw: t.writeString },
            machine_authid: {
              n: 4,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Request`;
    }
  },
  Yn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            trade_response: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcceptTradeOffer_Response`;
    }
  },
  Xn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            tradeofferid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            confirmation_code: {
              n: 3,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            mid: { n: 4, br: C.readString, bw: t.writeString },
            cancel_offer: { n: 5, br: C.readBool, bw: t.writeBool },
            already_authed: { n: 6, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Request`;
    }
  },
  Zn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            tradeid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            trade_response: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ConfirmTradeOffer_Response`;
    }
  },
  Qn = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Request`;
    }
  },
  $n = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_DeclineTradeOffer_Response`;
    }
  },
  er = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeofferid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Request`;
    }
  },
  tr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelTradeOffer_Response`;
    }
  },
  nr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: C.readBool, bw: t.writeBool },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            escrow_only: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Request`;
    }
  },
  rr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.num_cancelled || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            num_cancelled: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            num_escrow_cancelled: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            num_failures: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            num_escrow_failures: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Response`;
    }
  },
  ir = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            add_trade_hold: { n: 2, br: C.readBool, bw: t.writeBool },
            appid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            escrow_only: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CancelAllTradeOffers_Notification`;
    }
  },
  ar = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid_partya || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3], null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid_partyb: {
              n: 2,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            involved_apps: {
              n: 3,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_IsSafeToCommitTrade_Request`;
    }
  },
  or = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.time_last_visit || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_last_visit: { n: 1, br: C.readFixed32, bw: t.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Request`;
    }
  },
  sr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.pending_received_count || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint32,
              bw: t.writeUint32,
            },
            new_received_count: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            updated_received_count: {
              n: 3,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            historical_received_count: {
              n: 4,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            pending_sent_count: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            newly_accepted_sent_count: {
              n: 6,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            updated_sent_count: { n: 7, br: C.readUint32, bw: t.writeUint32 },
            historical_sent_count: {
              n: 8,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            escrow_received_count: {
              n: 9,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            escrow_sent_count: { n: 10, br: C.readUint32, bw: t.writeUint32 },
            provisional: { n: 11, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeOffersSummary_Response`;
    }
  },
  cr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.max_trades || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            max_trades: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            start_after_time: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            start_after_tradeid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            navigating_back: { n: 4, br: C.readBool, bw: t.writeBool },
            get_descriptions: { n: 5, br: C.readBool, bw: t.writeBool },
            language: { n: 6, br: C.readString, bw: t.writeString },
            include_failed: { n: 7, br: C.readBool, bw: t.writeBool },
            include_total: { n: 8, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Request`;
    }
  },
  Y = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.total_trades || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3, 4, 5], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_trades: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            more: { n: 2, br: C.readBool, bw: t.writeBool },
            trades: { n: 3, c: lr, r: !0, q: !0 },
            descriptions: { n: 4, c: G, r: !0, q: !0 },
            devices: { n: 5, c: pr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response`;
    }
  },
  lr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [6, 7, 8, 9], null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            steamid_other: {
              n: 2,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            time_init: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            time_escrow_end: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            status: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            assets_received: { n: 6, c: ur, r: !0, q: !0 },
            assets_given: { n: 7, c: ur, r: !0, q: !0 },
            currency_received: { n: 8, c: dr, r: !0, q: !0 },
            currency_given: { n: 9, c: dr, r: !0, q: !0 },
            time_settlement: { n: 10, br: C.readUint32, bw: t.writeUint32 },
            time_mod: { n: 11, br: C.readUint32, bw: t.writeUint32 },
            rollback_trade: {
              n: 12,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            trade_auth: { n: 13, c: fr },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade`;
    }
  },
  ur = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            assetid: { n: 3, br: C.readUint64String, bw: t.writeUint64String },
            amount: { n: 4, br: C.readInt64String, bw: t.writeInt64String },
            classid: { n: 5, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 6,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            new_assetid: {
              n: 7,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            new_contextid: {
              n: 8,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            rollback_new_assetid: {
              n: 9,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            rollback_new_contextid: {
              n: 10,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedAsset`;
    }
  },
  dr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            currencyid: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            amount: { n: 4, br: C.readInt64String, bw: t.writeInt64String },
            fee_amount: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            classid: { n: 6, br: C.readUint64String, bw: t.writeUint64String },
            new_currencyid: { n: 7, br: C.readUint32, bw: t.writeUint32 },
            new_contextid: {
              n: 8,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            rollback_new_currencyid: {
              n: 9,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            rollback_new_contextid: {
              n: 10,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_TradedCurrency`;
    }
  },
  fr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_sender || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_sender: { n: 1, br: C.readBool, bw: t.writeBool },
            confirm_type: { n: 2, br: C.readInt32, bw: t.writeInt32 },
            time_confirmed: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            country: { n: 4, br: C.readString, bw: t.writeString },
            state: { n: 5, br: C.readString, bw: t.writeString },
            city: { n: 6, br: C.readString, bw: t.writeString },
            token_id: {
              n: 7,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_Trade_Authorization`;
    }
  },
  pr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            first_authed: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            current_device: { n: 3, br: C.readBool, bw: t.writeBool },
            platform_type: { n: 4, br: C.readInt32, bw: t.writeInt32 },
            guard_type: { n: 5, br: C.readInt32, bw: t.writeInt32 },
            authentication_type: { n: 6, br: C.readInt32, bw: t.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeHistory_Response_DeviceDetails`;
    }
  },
  mr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.language || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { language: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetProvisionalTradeHistory_Request`;
    }
  },
  hr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            get_descriptions: { n: 2, br: C.readBool, bw: t.writeBool },
            language: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetTradeStatus_Request`;
    }
  },
  gr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Request`;
    }
  },
  _r = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_response || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            allowed_to_trade: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            probation_default_time: {
              n: 3,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            probation_remaining: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithAnyone_Response`;
    }
  },
  vr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Request`;
    }
  },
  yr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trade_response || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_response: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            allowed_to_trade: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            steamguard_required_days: {
              n: 3,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            new_device_cooldown_days: {
              n: 4,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            default_password_reset_probation_days: {
              n: 5,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            password_reset_probation_days: {
              n: 6,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            default_email_change_probation_days: {
              n: 7,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            email_change_probation_days: {
              n: 8,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            time_allowed_to_trade: {
              n: 9,
              br: C.readUint32,
              bw: t.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CanUserTradeWithPartner_Response`;
    }
  },
  br = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetUserTradeEligibility_Request`;
    }
  },
  xr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Request`;
    }
  },
  Sr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.abuse_score || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            abuse_score: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            trade_abuse_score: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            keyword_abuse_score: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradePartnerTrustworthiness_Response`;
    }
  },
  Cr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            trade_offer_access_token: {
              n: 2,
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Request`;
    }
  },
  wr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckTradeOfferAccessToken_Response`;
    }
  },
  Tr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            contextid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Request`;
    }
  },
  Er = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.success || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { success: { n: 1, br: C.readBool, bw: t.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryCache_Response`;
    }
  },
  Dr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Request`;
    }
  },
  Or = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushInventoryServiceDBOs_Response`;
    }
  },
  kr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Request`;
    }
  },
  Ar = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushAssetAppearanceCache_Response`;
    }
  },
  jr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushContextCache_Request`;
    }
  },
  Mr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FlushContextCache_Response`;
    }
  },
  Nr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Request`;
    }
  },
  Pr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            asset_class_version: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            context_version: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEconAppSettings_Response`;
    }
  },
  Fr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Request`;
    }
  },
  Ir = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopPartnerToken_Response`;
    }
  },
  Lr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            currency: { n: 2, br: C.readString, bw: t.writeString },
            language: { n: 3, br: C.readString, bw: t.writeString },
            asset_class_properties: { n: 4, c: Rr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request`;
    }
  },
  Rr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: C.readString, bw: t.writeString },
            value: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Request_AssetClassProperty`;
    }
  },
  zr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.assets || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response`;
    }
  },
  Br = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.currency || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            currency: { n: 1, br: C.readString, bw: t.writeString },
            amount: { n: 2, br: C.readInt64String, bw: t.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Price`;
    }
  },
  Vr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2, 3, 6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: C.readString, bw: t.writeString },
            prices: { n: 2, c: Br, r: !0, q: !0 },
            original_prices: { n: 3, c: Br, r: !0, q: !0 },
            classid: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            tags: {
              n: 6,
              r: !0,
              q: !0,
              br: C.readString,
              bw: t.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetPrices_Response_Asset`;
    }
  },
  Hr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            language: { n: 2, br: C.readString, bw: t.writeString },
            country_code: { n: 3, br: C.readString, bw: t.writeString },
            show_featured: { n: 4, br: C.readBool, bw: t.writeBool },
            count: { n: 5, d: 5, br: C.readUint32, bw: t.writeUint32 },
            realm: { n: 6, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Request`;
    }
  },
  Ur = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.items || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            items: { n: 1, c: Wr, r: !0, q: !0 },
            total_count: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response`;
    }
  },
  Wr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.itemdefid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            name: { n: 2, br: C.readString, bw: t.writeString },
            formatted_price: { n: 3, br: C.readString, bw: t.writeString },
            icon_url: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopItems_Response_Item`;
    }
  },
  Gr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            data: { n: 2, br: C.readString, bw: t.writeString },
            hmac: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Request`;
    }
  },
  Kr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ok || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { ok: { n: 1, br: C.readBool, bw: t.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_CheckItemShopPartnerHMAC_Response`;
    }
  },
  qr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: C.readString, bw: t.writeString },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            cart: { n: 3, br: C.readString, bw: t.writeString },
            currency: { n: 4, br: C.readString, bw: t.writeString },
            total: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            sandbox: { n: 6, br: C.readBool, bw: t.writeBool },
            referrer: { n: 7, br: C.readString, bw: t.writeString },
            language: { n: 8, br: C.readString, bw: t.writeString },
            itemshop_auth: { n: 9, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Request`;
    }
  },
  Jr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.orderid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            orderid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            url: { n: 2, br: C.readString, bw: t.writeString },
            displaytext: { n: 3, br: C.readString, bw: t.writeString },
            transid: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_StartItemShopTxn_Response`;
    }
  },
  Yr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: C.readString, bw: t.writeString },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            sandbox: { n: 3, br: C.readBool, bw: t.writeBool },
            orderid: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Request`;
    }
  },
  Xr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.state || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { state: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetItemShopTxnState_Response`;
    }
  },
  Zr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: C.readString, bw: t.writeString },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            sandbox: { n: 3, br: C.readBool, bw: t.writeBool },
            orderid: { n: 4, br: C.readUint64String, bw: t.writeUint64String },
            language: { n: 5, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Request`;
    }
  },
  Qr = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_FinishItemShopTxn_Response`;
    }
  },
  $r = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.overlay_auth_cookie || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            overlay_auth_cookie: { n: 1, br: C.readString, bw: t.writeString },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            url: { n: 3, br: C.readString, bw: t.writeString },
            itemshop_auth: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Request`;
    }
  },
  ei = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.url || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_BuildItemShopReturnURL_Response`;
    }
  },
  ti = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            gameitemid: {
              n: 2,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Request`;
    }
  },
  ni = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.supports_refunds || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            supports_refunds: { n: 1, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AppSupportsRefund_Response`;
    }
  },
  ri = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            transactionid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            language: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Request`;
    }
  },
  ii = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2, 3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: C.readBool, bw: t.writeBool },
            assets: { n: 2, c: ai, r: !0, q: !0 },
            descriptions: { n: 3, c: G, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response`;
    }
  },
  ai = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: C.readBool, bw: t.writeBool },
            in_inventory: { n: 2, br: C.readBool, bw: t.writeBool },
            bundle: { n: 3, br: C.readBool, bw: t.writeBool },
            gameid: { n: 4, br: C.readInt32, bw: t.writeInt32 },
            asset: { n: 5, c: q },
            current_state: { n: 6, br: C.readString, bw: t.writeString },
            item_name: { n: 7, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_QueryRefundAllowed_Response_Asset`;
    }
  },
  oi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            transactionid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            force: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RefundPurchase_Request`;
    }
  },
  si = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RefundPurchase_Response`;
    }
  },
  ci = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            language: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Request`;
    }
  },
  li = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.allow_refund || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3, 4], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allow_refund: { n: 1, br: C.readBool, bw: t.writeBool },
            allow_ticket: { n: 2, br: C.readBool, bw: t.writeBool },
            assets: { n: 3, c: ui, r: !0, q: !0 },
            descriptions: { n: 4, c: G, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response`;
    }
  },
  ui = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.refundid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            refundid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            parent_refundid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            allow_refund: { n: 3, br: C.readBool, bw: t.writeBool },
            refund_removes_item_from_inventory: {
              n: 4,
              br: C.readBool,
              bw: t.writeBool,
            },
            refund_returns_item_to_inventory: {
              n: 5,
              br: C.readBool,
              bw: t.writeBool,
            },
            refund_amount: {
              n: 6,
              br: C.readInt64String,
              bw: t.writeInt64String,
            },
            refund_ecurrencycode: { n: 7, br: C.readInt32, bw: t.writeInt32 },
            related_microtxn_id: {
              n: 8,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            related_market_purchase_id: {
              n: 9,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            related_trade_id: {
              n: 10,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            asset: { n: 11, c: q },
            current_state: { n: 12, br: C.readString, bw: t.writeString },
            item_name: { n: 13, br: C.readString, bw: t.writeString },
            allow_ticket: { n: 14, br: C.readBool, bw: t.writeBool },
            refund_complete: { n: 15, br: C.readBool, bw: t.writeBool },
            refund_desired: { n: 16, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetEligibleOneOffRefunds_Response_Asset`;
    }
  },
  di = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            appid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            refundid: { n: 3, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Request`;
    }
  },
  fi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ProcessOneOffRefund_Response`;
    }
  },
  pi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.classid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            instanceid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Request`;
    }
  },
  mi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.properties || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response`;
    }
  },
  hi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property: { n: 1, br: C.readString, bw: t.writeString },
            value: { n: 2, br: C.readString, bw: t.writeString },
            instance: { n: 3, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_GetAssetClassProperties_Response_Property`;
    }
  },
  gi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.tradeid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            force: { n: 2, br: C.readBool, bw: t.writeBool },
            in_recovery: { n: 3, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertTrade_Request`;
    }
  },
  _i = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertTrade_Response`;
    }
  },
  vi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            force: { n: 2, br: C.readBool, bw: t.writeBool },
            account_recovery: { n: 3, br: C.readBool, bw: t.writeBool },
            deauth_all_devices: {
              n: 4,
              d: !1,
              br: C.readBool,
              bw: t.writeBool,
            },
            apply_cooldown: { n: 5, d: !1, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Request`;
    }
  },
  yi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.trades || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trades: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            errors: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            trade_offers: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            escrowed_trades: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_RevertAllTrades_Response`;
    }
  },
  bi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.ack_type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            ack_type: { n: 1, br: C.readInt32, bw: t.writeInt32 },
            acknowledge: { n: 2, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Request`;
    }
  },
  xi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_AcknowledgeTradeUI_Response`;
    }
  },
  Si = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Request`;
    }
  },
  Ci = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.needed_types || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
              br: C.readInt32,
              pbr: C.readPackedInt32,
              bw: t.writeRepeatedInt32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_NeedTradeUI_Response`;
    }
  },
  wi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.steamid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            duration_seconds: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            cooldown_type: { n: 3, br: C.readInt32, bw: t.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Request`;
    }
  },
  Ti = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CEcon_ApplyTradeCooldown_Response`;
    }
  },
  Ei;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Econ.GetTradePermissionsForApp#1`, i(xn, t, n), Sn, {
      ePrivilege: 1,
    });
  }
  e.GetTradePermissionsForApp = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetEconSummary#1`, i(Cn, t, n), Tn, {
      ePrivilege: 0,
    });
  }
  e.GetEconSummary = n;
  function r(e, t, n) {
    return e.SendMsg(`Econ.GetTopTradePartners#1`, i(En, t, n), On, {
      ePrivilege: 0,
    });
  }
  e.GetTopTradePartners = r;
  function a(e, t, n) {
    return e.SendMsg(`Econ.SetTradeBanTime#1`, i(kn, t, n), bn, {
      ePrivilege: 2,
    });
  }
  e.SetTradeBanTime = a;
  function o(e, t, n) {
    return e.SendMsg(`Econ.SetForceTradeTrustedTime#1`, i(An, t, n), bn, {
      ePrivilege: 0,
    });
  }
  e.SetForceTradeTrustedTime = o;
  function s(e, t, n) {
    return e.SendMsg(`Econ.CreateTradeOffer#1`, i(jn, t, n), Nn, {
      ePrivilege: 1,
    });
  }
  e.CreateTradeOffer = s;
  function c(e, t, n) {
    return e.SendMsg(`Econ.SendGift#1`, i(Pn, t, n), Fn, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.SendGift = c;
  function l(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffers#1`, i(In, t, n), Ln, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffers = l;
  function u(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffer#1`, i(Un, t, n), Gn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffer = u;
  function d(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForAnyUser#1`, i(Wn, t, n), Gn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForAnyUser = d;
  function f(e, t, n) {
    return e.SendMsg(`Econ.TradeLeftEscrow#1`, i(Rn, t, n), zn, {
      ePrivilege: 0,
    });
  }
  e.TradeLeftEscrow = f;
  function p(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHoldDurations#1`, i(Bn, t, n), Vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHoldDurations = p;
  function m(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferForConfirmation#1`, i(Kn, t, n), qn, {
      ePrivilege: 0,
    });
  }
  e.GetTradeOfferForConfirmation = m;
  function h(e, t, n) {
    return e.SendMsg(`Econ.AcceptTradeOffer#1`, i(Jn, t, n), Yn, {
      ePrivilege: 1,
    });
  }
  e.AcceptTradeOffer = h;
  function g(e, t, n) {
    return e.SendMsg(`Econ.ConfirmTradeOffer#1`, i(Xn, t, n), Zn, {
      ePrivilege: 0,
    });
  }
  e.ConfirmTradeOffer = g;
  function _(e, t, n) {
    return e.SendMsg(`Econ.DeclineTradeOffer#1`, i(Qn, t, n), $n, {
      ePrivilege: 1,
    });
  }
  e.DeclineTradeOffer = _;
  function v(e, t, n) {
    return e.SendMsg(`Econ.CancelTradeOffer#1`, i(er, t, n), tr, {
      ePrivilege: 1,
    });
  }
  e.CancelTradeOffer = v;
  function y(e, t, n) {
    return e.SendMsg(`Econ.CancelAllTradeOffers#1`, i(nr, t, n), rr, {
      ePrivilege: 2,
    });
  }
  e.CancelAllTradeOffers = y;
  function b(e, t) {
    return e.SendNotification(`Econ.NotifyCancelAllTradeOffers#1`, i(ir, t), {
      ePrivilege: 2,
    });
  }
  e.NotifyCancelAllTradeOffers = b;
  function ee(e, t, n) {
    return e.SendMsg(`Econ.IsSafeToCommitTrade#1`, i(ar, t, n), bn, {
      ePrivilege: 0,
    });
  }
  e.IsSafeToCommitTrade = ee;
  function x(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOffersSummary#1`, i(or, t, n), sr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeOffersSummary = x;
  function S(e, t, n) {
    return e.SendMsg(`Econ.GetTradeHistory#1`, i(cr, t, n), Y, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeHistory = S;
  function C(e, t, n) {
    return e.SendMsg(`Econ.GetTradeStatus#1`, i(hr, t, n), Y, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  e.GetTradeStatus = C;
  function w(e, t, n) {
    return e.SendMsg(`Econ.GetProvisionalTradeHistory#1`, i(mr, t, n), Y, {
      ePrivilege: 1,
    });
  }
  e.GetProvisionalTradeHistory = w;
  function T(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      i(un, t, n),
      fn,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`all`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = T;
  function E(e, t, n) {
    return e.SendMsg(`Econ.CanUserTradeWithAnyone#1`, i(gr, t, n), _r, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithAnyone = E;
  function D(e, t, n) {
    return e.SendMsg(`Econ.CanUserTradeWithPartner#1`, i(vr, t, n), yr, {
      ePrivilege: 1,
    });
  }
  e.CanUserTradeWithPartner = D;
  function te(e, t, n) {
    return e.SendMsg(`Econ.GetUserTradeEligibility#1`, i(br, t, n), _r, {
      ePrivilege: 0,
    });
  }
  e.GetUserTradeEligibility = te;
  function O(e, t, n) {
    return e.SendMsg(
      `Econ.CheckTradePartnerTrustworthiness#1`,
      i(xr, t, n),
      Sr,
      { ePrivilege: 1 },
    );
  }
  e.CheckTradePartnerTrustworthiness = O;
  function ne(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, i(pn, t, n), mn, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = ne;
  function k(e, t, n) {
    return e.SendMsg(`Econ.CheckTradeOfferAccessToken#1`, i(Cr, t, n), wr, {
      ePrivilege: 0,
    });
  }
  e.CheckTradeOfferAccessToken = k;
  function re(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryCache#1`, i(Tr, t, n), Er, {
      ePrivilege: 0,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushInventoryCache = re;
  function A(e, t, n) {
    return e.SendMsg(`Econ.FlushInventoryServiceDBOs#1`, i(Dr, t, n), Or, {
      ePrivilege: 0,
    });
  }
  e.FlushInventoryServiceDBOs = A;
  function ie(e, t, n) {
    return e.SendMsg(`Econ.FlushAssetAppearanceCache#1`, i(kr, t, n), Ar, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushAssetAppearanceCache = ie;
  function ae(e, t, n) {
    return e.SendMsg(`Econ.FlushContextCache#1`, i(jr, t, n), Mr, {
      ePrivilege: 7,
      eWebAPIKeyRequirement: 5,
    });
  }
  e.FlushContextCache = ae;
  function oe(e, t, n) {
    return e.SendMsg(`Econ.GetEconAppSettings#1`, i(Nr, t, n), Pr, {
      ePrivilege: 7,
    });
  }
  e.GetEconAppSettings = oe;
  function j(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopPartnerToken#1`, i(Fr, t, n), Ir, {
      ePrivilege: 0,
    });
  }
  e.GetItemShopPartnerToken = j;
  function se(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      i(hn, t, n),
      gn,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = se;
  function ce(e, t, n) {
    return e.SendMsg(`Econ.CheckItemShopPartnerHMAC#1`, i(Gr, t, n), Kr, {
      ePrivilege: 0,
    });
  }
  e.CheckItemShopPartnerHMAC = ce;
  function M(e, t, n) {
    return e.SendMsg(`Econ.StartItemShopTxn#1`, i(qr, t, n), Jr, {
      ePrivilege: 2,
    });
  }
  e.StartItemShopTxn = M;
  function N(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopTxnState#1`, i(Yr, t, n), Xr, {
      ePrivilege: 2,
    });
  }
  e.GetItemShopTxnState = N;
  function P(e, t, n) {
    return e.SendMsg(`Econ.FinishItemShopTxn#1`, i(Zr, t, n), Qr, {
      ePrivilege: 2,
    });
  }
  e.FinishItemShopTxn = P;
  function le(e, t, n) {
    return e.SendMsg(`Econ.BuildItemShopReturnURL#1`, i($r, t, n), ei, {
      ePrivilege: 2,
    });
  }
  e.BuildItemShopReturnURL = le;
  function ue(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPrices#1`, i(Lr, t, n), zr, {
      bConstMethod: !0,
      ePrivilege: 0,
    });
  }
  e.GetAssetPrices = ue;
  function de(e, t, n) {
    return e.SendMsg(`Econ.GetItemShopItems#1`, i(Hr, t, n), Ur, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetItemShopItems = de;
  function fe(e, t, n) {
    return e.SendMsg(`Econ.AppSupportsRefund#1`, i(ti, t, n), ni, {
      ePrivilege: 0,
    });
  }
  e.AppSupportsRefund = fe;
  function pe(e, t, n) {
    return e.SendMsg(`Econ.QueryRefundAllowed#1`, i(ri, t, n), ii, {
      ePrivilege: 0,
    });
  }
  e.QueryRefundAllowed = pe;
  function me(e, t, n) {
    return e.SendMsg(`Econ.RefundPurchase#1`, i(oi, t, n), si, {
      ePrivilege: 0,
    });
  }
  e.RefundPurchase = me;
  function F(e, t, n) {
    return e.SendMsg(`Econ.GetEligibleOneOffRefunds#1`, i(ci, t, n), li, {
      ePrivilege: 0,
    });
  }
  e.GetEligibleOneOffRefunds = F;
  function he(e, t, n) {
    return e.SendMsg(`Econ.ProcessOneOffRefund#1`, i(di, t, n), fi, {
      ePrivilege: 0,
    });
  }
  e.ProcessOneOffRefund = he;
  function ge(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, i(_n, t, n), vn, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetClassInfo = ge;
  function _e(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfoInternal#1`, i(_n, t, n), vn, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassInfoInternal = _e;
  function ve(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassProperties#1`, i(pi, t, n), mi, {
      ePrivilege: 0,
    });
  }
  e.GetAssetClassProperties = ve;
  function ye(e, t, n) {
    return e.SendMsg(`Econ.RevertTrade#1`, i(gi, t, n), _i, { ePrivilege: 1 });
  }
  e.RevertTrade = ye;
  function be(e, t, n) {
    return e.SendMsg(`Econ.RevertAllTrades#1`, i(vi, t, n), yi, {
      ePrivilege: 1,
    });
  }
  e.RevertAllTrades = be;
  function xe(e, t, n) {
    return e.SendMsg(`Econ.ApplyTradeCooldown#1`, i(wi, t, n), Ti, {
      ePrivilege: 1,
    });
  }
  e.ApplyTradeCooldown = xe;
  function Se(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, i(cn, t, n), ln, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`community`],
    });
  }
  e.GetAssetPropertySchema = Se;
  function I(e, t, n) {
    return e.SendMsg(`Econ.AcknowledgeTradeUI#1`, i(bi, t, n), xi, {
      ePrivilege: 1,
    });
  }
  e.AcknowledgeTradeUI = I;
  function Ce(e, t, n) {
    return e.SendMsg(`Econ.NeedTradeUI#1`, i(Si, t, n), Ci, { ePrivilege: 1 });
  }
  e.NeedTradeUI = Ce;
})((Ei ||= {}));
function Di(e) {
  let { rgAssetProperties: t, appid: n } = e,
    [r, i] = (0, B.useState)(``),
    [a, s] = (0, B.useState)(Oi(t)),
    c = (e, t) => {
      let n = a.map((n, r) => (r === e ? t : n));
      s(n);
    },
    l = () => {
      let e = a.slice();
      (e.push({
        id: 0,
        name: ``,
        type: 0,
        min: null,
        max: null,
        hide_from_description: !1,
      }),
        s(e));
    },
    u = (e) => {
      let t = a.slice();
      (t.splice(e, 1), s(t));
    };
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsx)(`div`, {
        children: a.map((e, t) =>
          (0, V.jsx)(
            ki,
            {
              schema: e,
              index: t,
              onUpdate: (e) => {
                c(t, e);
              },
              onRemove: (e) => u(e),
            },
            t,
          ),
        ),
      }),
      (0, V.jsx)(`div`, {
        className: Zt,
        children: (0, V.jsx)(j, { onClick: l, children: `Add Property` }),
      }),
      (0, V.jsx)(`div`, {
        className: Qt,
        children: (0, V.jsx)(j, {
          onClick: async () => {
            i(``);
            let e = new FormData();
            (e.append(`sessionid`, o()),
              e.append(`asset_properties`, JSON.stringify(a)));
            let t = await fetch(
              `${m.PARTNER_BASE_URL}apps/setassetpropertyschema/${n}`,
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
      (0, V.jsx)(`div`, { className: $t, children: r }),
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
  return (0, V.jsxs)(`div`, {
    className: Wt,
    children: [
      (0, V.jsx)(`div`, { children: `ID` }),
      (0, V.jsx)(D, {
        className: Gt,
        type: `number`,
        value: t.id === 0 ? `` : t.id,
        placeholder: `Property id`,
        onChange: (e) => {
          r({ ...t, id: e.target.valueAsNumber });
        },
      }),
      (0, V.jsx)(`div`, { children: `Name` }),
      (0, V.jsx)(D, {
        className: Kt,
        type: `text`,
        value: t.name,
        placeholder: `Property name`,
        onChange: (e) => {
          r({ ...t, name: e.target.value });
        },
      }),
      (0, V.jsx)(`div`, { children: `Type` }),
      (0, V.jsx)(Ai, {
        propertyType: t.type,
        onUpdateType: (e) => {
          r({ ...t, type: e });
        },
      }),
      (0, V.jsx)(`div`, { children: `Min` }),
      (0, V.jsx)(D, {
        className: Jt,
        type: `number`,
        value: t.min ?? ``,
        placeholder: `Min value`,
        onChange: (e) => {
          r({ ...t, min: e.target.valueAsNumber });
        },
      }),
      (0, V.jsx)(`div`, { children: `Max` }),
      (0, V.jsx)(D, {
        className: Jt,
        type: `number`,
        value: t.max ?? ``,
        placeholder: `Max value`,
        onChange: (e) => {
          r({ ...t, max: e.target.valueAsNumber });
        },
      }),
      (0, V.jsx)(`div`, { children: `Hide` }),
      (0, V.jsx)(D, {
        className: Yt,
        type: `checkbox`,
        checked: t.hide_from_description,
        onChange: (e) => {
          r({ ...t, hide_from_description: e.target.checked });
        },
      }),
      (0, V.jsx)(j, { className: Xt, onClick: () => i(n), children: `Remove` }),
    ],
  });
}
function Ai(e) {
  let { propertyType: t, onUpdateType: n } = e;
  return (0, V.jsx)(`div`, {
    className: qt,
    children: (0, V.jsx)(ce, {
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
  Ni = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [13, 16], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: C.readString, bw: t.writeString },
            source_id: { n: 2, br: C.readInt32, bw: t.writeInt32 },
            cell_id: { n: 3, br: C.readInt32, bw: t.writeInt32 },
            load: { n: 4, br: C.readInt32, bw: t.writeInt32 },
            weighted_load: { n: 5, br: C.readFloat, bw: t.writeFloat },
            num_entries_in_client_list: {
              n: 6,
              br: C.readInt32,
              bw: t.writeInt32,
            },
            steam_china_only: { n: 7, br: C.readBool, bw: t.writeBool },
            host: { n: 8, br: C.readString, bw: t.writeString },
            vhost: { n: 9, br: C.readString, bw: t.writeString },
            use_as_proxy: { n: 10, br: C.readBool, bw: t.writeBool },
            proxy_request_path_template: {
              n: 11,
              br: C.readString,
              bw: t.writeString,
            },
            https_support: { n: 12, br: C.readString, bw: t.writeString },
            allowed_app_ids: {
              n: 13,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            priority_class: { n: 15, br: C.readUint32, bw: t.writeUint32 },
            bypass_proxies_of_type: {
              n: 16,
              r: !0,
              q: !0,
              br: C.readString,
              bw: t.writeRepeatedString,
            },
            group: { n: 17, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_ServerInfo`;
    }
  },
  Pi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: C.readString, bw: t.writeString },
            source_id: { n: 2, br: C.readInt32, bw: t.writeInt32 },
            hostname: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_ConnectedSteamPipeServerInfo`;
    }
  },
  Fi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cell_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [6], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cell_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            max_servers: { n: 2, d: 20, br: C.readUint32, bw: t.writeUint32 },
            ip_override: { n: 3, d: ``, br: C.readString, bw: t.writeString },
            launcher_type: { n: 4, d: 0, br: C.readInt32, bw: t.writeInt32 },
            ipv6_public: { n: 5, d: ``, br: C.readString, bw: t.writeString },
            current_connections: { n: 6, c: Pi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Request`;
    }
  },
  Ii = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.servers || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            servers: { n: 1, c: Ni, r: !0, q: !0 },
            no_change: { n: 2, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetServersForSteamPipe_Response`;
    }
  },
  Li = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depotid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            source_manifestid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            target_manifestid: {
              n: 4,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Request`;
    }
  },
  Ri = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_available || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            is_available: { n: 1, br: C.readBool, bw: t.writeBool },
            patch_size: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            patched_chunks_size: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetDepotPatchInfo_Response`;
    }
  },
  zi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cached_signature || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cached_signature: { n: 1, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Request`;
    }
  },
  Bi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hosts_kv || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hosts_kv: { n: 1, br: C.readString, bw: t.writeString },
            valid_until_time: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            ip_country: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetClientUpdateHosts_Response`;
    }
  },
  Vi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            manifest_id: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            app_branch: { n: 4, br: C.readString, bw: t.writeString },
            branch_password_hash: { n: 5, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Request`;
    }
  },
  Hi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_request_code || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetManifestRequestCode_Response`;
    }
  },
  Ui = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            host_name: { n: 2, br: C.readString, bw: t.writeString },
            app_id: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Request`;
    }
  },
  Wi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.token || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            token: { n: 1, br: C.readString, bw: t.writeString },
            expiration_time: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNAuthToken_Response`;
    }
  },
  Gi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            steamid: { n: 2, br: C.readUint64String, bw: t.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            app_id: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            current_build_id: { n: 5, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Request`;
    }
  },
  Ki = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.server_port || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            server_port: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            installed_depots: {
              n: 2,
              r: !0,
              q: !0,
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            access_token: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_RequestPeerContentServer_Response`;
    }
  },
  qi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.remote_client_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            steamid: { n: 2, br: C.readUint64String, bw: t.writeUint64String },
            server_remote_client_id: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Request`;
    }
  },
  Ji = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appids || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
            ip_public: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetPeerContentInfo_Response`;
    }
  },
  Yi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detection_type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { detection_type: { n: 1, br: C.readEnum, bw: t.writeEnum } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetAllDetectedAppContent_Request`;
    }
  },
  Xi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            detected_content: { n: 3, br: C.readInt32, bw: t.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `DetectedAppContent`;
    }
  },
  Zi = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detected_app_content || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
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
      i(Fi, t, n),
      Ii,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      i(Li, t, n),
      Ri,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      i(zi, t, n),
      Bi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = r;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      i(Vi, t, n),
      Hi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      i(Ui, t, n),
      Wi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      i(Gi, t, n),
      Ki,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      i(qi, t, n),
      Ji,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = c;
})((Qi ||= {}));
var $i;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      i(Yi, t, n),
      Zi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
})(($i ||= {}));
var ea = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ReloadOriginStorageInfo_Notification`;
    }
  },
  ta = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            sha: { n: 2, br: C.readBytes, bw: t.writeBytes },
            origin_id: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            eresult: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_CSFailedToReadChunkFromStorage_Notification`;
    }
  },
  na = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Request`;
    }
  },
  ra = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurge_Response`;
    }
  },
  ia = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { app_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Request`;
    }
  },
  aa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.app_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            app_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            status: { n: 2, br: C.readEnum, bw: t.writeEnum },
            accountid_requester: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            accountid_confirmer: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            time_requested: {
              n: 5,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            time_confirmed: {
              n: 6,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            time_ended: {
              n: 7,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppContentPurgeStatus_Response`;
    }
  },
  oa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_CSPurgeDepot_Notification`;
    }
  },
  sa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            sha: { n: 2, br: C.readBytes, bw: t.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_NewChunkAnnouncement_Notification`;
    }
  },
  ca = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushDepotCache_Notification`;
    }
  },
  la = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            manifestid: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_MDSFlushManifestVersion_Notification`;
    }
  },
  ua = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.location_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            location_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            host: { n: 2, br: C.readString, bw: t.writeString },
            path: { n: 3, br: C.readString, bw: t.writeString },
            headers_for_put: { n: 4, c: _ },
            virtual_host: { n: 5, br: C.readString, bw: t.writeString },
            use_https: { n: 6, br: C.readBool, bw: t.writeBool },
            storage_provider: { n: 7, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ChunkStorageLocation`;
    }
  },
  da = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            build_handle: {
              n: 3,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            sha: { n: 4, br: C.readBytes, bw: t.writeBytes },
            compressed_size: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            need_encryption_key: { n: 6, br: C.readBool, bw: t.writeBool },
            compressed_md5: { n: 7, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Request`;
    }
  },
  fa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.original_size || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [3], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            original_size: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            encryption_key: { n: 2, br: C.readBytes, bw: t.writeBytes },
            storage_locations: { n: 3, c: ua, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkReceived_Response`;
    }
  },
  pa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [7], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            build_handle: {
              n: 3,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            sha: { n: 4, br: C.readBytes, bw: t.writeBytes },
            compressed_crc: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            storage_locations: { n: 7, c: ua, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Request`;
    }
  },
  ma = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStored_Response`;
    }
  },
  ha = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            build_handle: {
              n: 3,
              br: C.readFixed64String,
              bw: t.writeFixed64String,
            },
            sha: { n: 4, br: C.readBytes, bw: t.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotIngestChunkStorageFailure_Notification`;
    }
  },
  ga = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.requests || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request`;
    }
  },
  _a = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: C.readString, bw: t.writeString },
            timestamp: { n: 2, br: C.readFixed32, bw: t.writeFixed32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Request_CDNInfoRequest`;
    }
  },
  va = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: C.readString, bw: t.writeString },
            timestamp: { n: 2, br: C.readFixed32, bw: t.writeFixed32 },
            config: { n: 3, br: C.readBytes, bw: t.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CDNConfigInfo`;
    }
  },
  ya = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.responses || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetCDNConfigurations_Response`;
    }
  },
  ba = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: C.readString, bw: t.writeString },
            config_file: { n: 2, br: C.readString, bw: t.writeString },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Request`;
    }
  },
  xa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNConfig_Response`;
    }
  },
  Sa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: C.readString, bw: t.writeString },
            mbps_sent: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            mbps_recv: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            cpu_percent: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            cache_hit_percent: { n: 5, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Request`;
    }
  },
  Ca = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.message || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { message: { n: 1, br: C.readString, bw: t.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCDNPerformanceStats_Response`;
    }
  },
  wa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1, 2, 3], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification`;
    }
  },
  Ta = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            current_load: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            rtime_last_updated: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_Stats`;
    }
  },
  Ea = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_name || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_name: { n: 1, br: C.readString, bw: t.writeString },
            current_load: { n: 2, br: C.readInt32, bw: t.writeInt32 },
            rtime_last_updated: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_CDNStats`;
    }
  },
  Da = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            current_load: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            rtime_last_updated: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            load_adjustment: { n: 4, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_ContentServerStats_Notification_SteamCacheStats`;
    }
  },
  Oa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.stats || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification`;
    }
  },
  ka = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.sysid_cm || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sysid_cm: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            current_load: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            rtime_last_updated: { n: 3, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CMStats_Notification_Stats`;
    }
  },
  Aa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.anon_session_allowed_depots || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2], null));
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
              br: C.readUint32,
              pbr: C.readPackedUint32,
              bw: t.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AnonymousDepots_Notification`;
    }
  },
  ja = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            manifest_id: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            manifest_request_code: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Request`;
    }
  },
  Ma = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_valid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_valid: { n: 1, br: C.readBool, bw: t.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_CheckManifestRequestCode_Response`;
    }
  },
  Na = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            manifest_id: {
              n: 2,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Request`;
    }
  },
  Pa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_request_code || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetManifestRequestCode_Response`;
    }
  },
  Fa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Request`;
    }
  },
  Ia = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.is_allowed || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { is_allowed: { n: 1, br: C.readBool, bw: t.writeBool } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_IsDepotAllowedSteamChina_Response`;
    }
  },
  La = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depotid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            sysid_sender: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            manifestid: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_InvalidateDepotMetadata_Notification`;
    }
  },
  Ra = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            is_enabled: { n: 2, br: C.readBool, bw: t.writeBool },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            provider: { n: 4, br: C.readString, bw: t.writeString },
            cell_id: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            config_json: { n: 8, br: C.readString, bw: t.writeString },
            name: { n: 9, br: C.readString, bw: t.writeString },
            ip_filter_list: { n: 10, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfig`;
    }
  },
  za = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Request`;
    }
  },
  Ba = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: Ra } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfig_Response`;
    }
  },
  Va = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            ip_ranges: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Request`;
    }
  },
  Ha = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            max_results: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Request`;
    }
  },
  Ua = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response`;
    }
  },
  Wa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            steamid_actor: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSConfigHistory_Response_HistoryEntry`;
    }
  },
  Ga = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 2, br: C.readString, bw: t.writeString },
            config: { n: 3, c: Ra },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Request`;
    }
  },
  Ka = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCSConfig_Response`;
    }
  },
  qa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: Ra } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCSConfigUpdate_Notification`;
    }
  },
  Ja = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateCSIPFilterRanges_Response`;
    }
  },
  Ya = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Request`;
    }
  },
  Xa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response`;
    }
  },
  Za = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cs_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cs_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            provider: { n: 2, br: C.readString, bw: t.writeString },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            is_enabled: { n: 4, br: C.readBool, bw: t.writeBool },
            name: { n: 5, br: C.readString, bw: t.writeString },
            cell_id: { n: 6, br: C.readUint32, bw: t.writeUint32 },
            max_mbps: { n: 7, br: C.readUint32, bw: t.writeUint32 },
            serve_steampipe: { n: 8, br: C.readBool, bw: t.writeBool },
            serve_broadcast: { n: 9, br: C.readBool, bw: t.writeBool },
            serve_chat: { n: 10, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCSNames_Response_ConfigNames`;
    }
  },
  Qa = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.provider || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: C.readString, bw: t.writeString },
            host_name: { n: 2, br: C.readString, bw: t.writeString },
            name: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Request`;
    }
  },
  $a = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateSteamCache_Response`;
    }
  },
  eo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            is_enabled: { n: 2, br: C.readBool, bw: t.writeBool },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            provider: { n: 4, br: C.readString, bw: t.writeString },
            cell_id: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            api_key_primary: { n: 6, br: C.readString, bw: t.writeString },
            api_key_secondary: { n: 7, br: C.readString, bw: t.writeString },
            config_json: { n: 8, br: C.readString, bw: t.writeString },
            name: { n: 9, br: C.readString, bw: t.writeString },
            ip_filter_list: { n: 10, br: C.readString, bw: t.writeString },
            timestamp: { n: 11, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfig`;
    }
  },
  to = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Request`;
    }
  },
  no = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response`;
    }
  },
  ro = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            provider: { n: 2, br: C.readString, bw: t.writeString },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            is_enabled: { n: 4, br: C.readBool, bw: t.writeBool },
            name: { n: 5, br: C.readString, bw: t.writeString },
            cell_id: { n: 6, br: C.readUint32, bw: t.writeUint32 },
            max_mbps: { n: 7, br: C.readUint32, bw: t.writeUint32 },
            serve_steampipe: { n: 8, br: C.readBool, bw: t.writeBool },
            serve_broadcast: { n: 9, br: C.readBool, bw: t.writeBool },
            serve_chat: { n: 10, br: C.readBool, bw: t.writeBool },
            https_support: { n: 11, br: C.readString, bw: t.writeString },
            cache_group: { n: 12, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNames_Response_ConfigNames`;
    }
  },
  io = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Request`;
    }
  },
  ao = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: eo } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfig_Response`;
    }
  },
  oo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            max_results: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Request`;
    }
  },
  so = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response`;
    }
  },
  co = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            steamid_actor: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  lo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 2, br: C.readString, bw: t.writeString },
            config: { n: 3, c: eo },
            omit_history_entry: { n: 4, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Request`;
    }
  },
  uo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateSteamCacheConfig_Response`;
    }
  },
  fo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: eo } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SteamCacheConfigUpdate_Notification`;
    }
  },
  po = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            primary_key: { n: 2, br: C.readBool, bw: t.writeBool },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Request`;
    }
  },
  mo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_RevSteamCacheAPIKey_Response`;
    }
  },
  ho = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.provider || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            provider: { n: 1, br: C.readString, bw: t.writeString },
            host_name: { n: 2, br: C.readString, bw: t.writeString },
            name: { n: 3, br: C.readString, bw: t.writeString },
            serve_steampipe: { n: 4, br: C.readBool, bw: t.writeBool },
            serve_broadcast: { n: 5, br: C.readBool, bw: t.writeBool },
            serve_broadcastchat: { n: 6, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Request`;
    }
  },
  go = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_AllocateOpenCache_Response`;
    }
  },
  _o = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            is_enabled: { n: 2, br: C.readBool, bw: t.writeBool },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            provider: { n: 4, br: C.readString, bw: t.writeString },
            cell_id: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            config_json: { n: 6, br: C.readString, bw: t.writeString },
            name: { n: 7, br: C.readString, bw: t.writeString },
            ip_filter_list: { n: 8, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfig`;
    }
  },
  vo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Request`;
    }
  },
  yo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config_names || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response`;
    }
  },
  bo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            provider: { n: 2, br: C.readString, bw: t.writeString },
            host_name: { n: 3, br: C.readString, bw: t.writeString },
            is_enabled: { n: 4, br: C.readBool, bw: t.writeBool },
            name: { n: 5, br: C.readString, bw: t.writeString },
            serve_steampipe: { n: 6, br: C.readBool, bw: t.writeBool },
            serve_broadcast: { n: 7, br: C.readBool, bw: t.writeBool },
            serve_chat: { n: 8, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheNames_Response_ConfigNames`;
    }
  },
  xo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Request`;
    }
  },
  So = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: _o } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfig_Response`;
    }
  },
  Co = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            max_results: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Request`;
    }
  },
  wo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.history || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response`;
    }
  },
  To = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.timestamp || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            steamid_actor: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetOpenCacheConfigHistory_Response_HistoryEntry`;
    }
  },
  Eo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            change_notes: { n: 2, br: C.readString, bw: t.writeString },
            config: { n: 3, c: _o },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Request`;
    }
  },
  Do = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_UpdateOpenCacheConfig_Response`;
    }
  },
  Oo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.config || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { config: { n: 1, c: _o } } }), e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_OpenCacheConfigUpdate_Notification`;
    }
  },
  ko = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            cache_key: { n: 2, br: C.readString, bw: t.writeString },
            change_notes: { n: 3, br: C.readString, bw: t.writeString },
            allowed_ip_blocks: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Request`;
    }
  },
  Ao = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCacheClientFilters_Response`;
    }
  },
  jo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            cache_key: { n: 2, br: C.readString, bw: t.writeString },
            mbps_sent: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            mbps_recv: { n: 4, br: C.readUint32, bw: t.writeUint32 },
            cpu_percent: { n: 5, br: C.readUint32, bw: t.writeUint32 },
            cache_hit_percent: { n: 6, br: C.readUint32, bw: t.writeUint32 },
            num_connected_ips: { n: 7, br: C.readUint32, bw: t.writeUint32 },
            upstream_egress_utilization: {
              n: 8,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            upstream_peering_utilization: {
              n: 9,
              br: C.readUint32,
              bw: t.writeUint32,
            },
            upstream_transit_utilization: {
              n: 10,
              br: C.readUint32,
              bw: t.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Request`;
    }
  },
  Mo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.load_calc_percent || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            load_calc_percent: { n: 3, br: C.readUint32, bw: t.writeUint32 },
            config_json: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_SetSteamCachePerformanceStats_Response`;
    }
  },
  No = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cache_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cache_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            cache_key: { n: 2, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Request`;
    }
  },
  Po = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.params_json || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            params_json: { n: 1, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerConfig_GetSteamCacheNodeParams_Response`;
    }
  },
  Fo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depotid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depotid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            parentappid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            oslist: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_DepotDownloadBytesInfo`;
    }
  },
  Io = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depots || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [1], null));
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
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Request`;
    }
  },
  Lo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.windows || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            windows: { n: 1, br: C.readUint64String, bw: t.writeUint64String },
            macos: { n: 2, br: C.readUint64String, bw: t.writeUint64String },
            linux: { n: 3, br: C.readUint64String, bw: t.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotDownloadBytes_Response`;
    }
  },
  Ro = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            allow_creating_new_migration: {
              n: 2,
              br: C.readBool,
              bw: t.writeBool,
            },
            restart_migration: { n: 3, br: C.readBool, bw: t.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Request`;
    }
  },
  zo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_BeginOriginMigrationJob_Response`;
    }
  },
  Bo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.depot_id || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            depot_id: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            sha: { n: 2, br: C.readBytes, bw: t.writeBytes },
            storage_provider_preference: {
              n: 3,
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Request`;
    }
  },
  Vo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cub_chunk || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cub_chunk: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            crc_chunk: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            url_host: { n: 3, br: C.readString, bw: t.writeString },
            url_path: { n: 4, br: C.readString, bw: t.writeString },
            use_https: { n: 5, br: C.readBool, bw: t.writeBool },
            origin_id: { n: 6, br: C.readUint32, bw: t.writeUint32 },
            storage_provider: { n: 7, br: C.readString, bw: t.writeString },
            request_headers: { n: 8, c: _ },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_GetDepotChunkLocation_Response`;
    }
  },
  Ho = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, [2], null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            betakeys: {
              n: 2,
              r: !0,
              q: !0,
              br: C.readString,
              bw: t.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Request`;
    }
  },
  Uo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildSortOrder_Response`;
    }
  },
  Wo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            depot_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            manifest_id: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
            branch: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Request`;
    }
  },
  Go = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.manifest_part_of_app_branch || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
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
              br: C.readBool,
              bw: t.writeBool,
            },
            app_was_released_or_is_current_build: {
              n: 2,
              br: C.readBool,
              bw: t.writeBool,
            },
            time_most_recent_release: {
              n: 3,
              br: C.readUint64String,
              bw: t.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_ManifestAppBranchInfo_Response`;
    }
  },
  Ko = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            buildid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CMDSAdmin_AppBuildUpdated_Notification`;
    }
  },
  qo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: C.readUint32, bw: t.writeUint32 },
            buildid: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            betakey: { n: 3, br: C.readString, bw: t.writeString },
            desc: { n: 4, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Request`;
    }
  },
  Jo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      (super(), U.Message.initialize(this, e, 0, -1, void 0, null));
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
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CBuildManagement_SetAppBuildLiveConfirmed_Response`;
    }
  },
  Yo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: C.readInt32, bw: t.writeInt32 },
            client_ip: { n: 2, br: C.readString, bw: t.writeString },
            client_region: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Request`;
    }
  },
  Xo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.cdn_hostname || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            cdn_hostname: { n: 1, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_GetCDNForVideo_Response`;
    }
  },
  Zo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.property_type || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            property_type: { n: 1, br: C.readInt32, bw: t.writeInt32 },
            cell_id: { n: 2, br: C.readUint32, bw: t.writeUint32 },
            client_ip: { n: 3, br: C.readString, bw: t.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Request`;
    }
  },
  Qo = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.hostname || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            hostname: { n: 1, br: C.readString, bw: t.writeString },
            caching_proxy_host_and_prefix: {
              n: 2,
              br: C.readString,
              bw: t.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CContentServerDirectory_PickSingleContentServer_Response`;
    }
  },
  $o = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.appid || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: C.readUint32, bw: t.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
    }
    getClassName() {
      return `CDepotContentDetection_GetDetectedContentSingleApp_Request`;
    }
  },
  es = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      (super(),
        e.prototype.detected_anticheat || p(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null));
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            detected_anticheat: { n: 1, br: C.readEnum, bw: t.writeEnum },
            detected_gameengine: { n: 2, br: C.readEnum, bw: t.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return ((e.sm_mbf ||= d(e.M())), e.sm_mbf);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return s(e.M(), t, n);
    }
    static fromObject(t) {
      return y(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return u(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBuffer());
    }
    static serializeBinaryToWriter(t, n) {
      x(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return (e.serializeBinaryToWriter(this, t), t.getResultBase64String());
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
      i(qo, t, n),
      Jo,
      { ePrivilege: 1 },
    );
  }
  e.SetAppBuildLiveConfirmed = t;
})((ts ||= {}));
var ns;
(function (e) {
  function t(e, t) {
    return e.SendNotification(`MDSAdmin.ReloadOriginStorageInfo#1`, i(ea, t), {
      ePrivilege: 1,
    });
  }
  e.ReloadOriginStorageInfo = t;
  function n(e, t) {
    return e.SendNotification(
      `MDSAdmin.CSFailedToReadChunkFromStorage#1`,
      i(ta, t),
      { ePrivilege: 1 },
    );
  }
  e.CSFailedToReadChunkFromStorage = n;
  function r(e, t) {
    return e.SendNotification(`MDSAdmin.InvalidateDepotMetadata#1`, i(La, t), {
      ePrivilege: 1,
    });
  }
  e.InvalidateDepotMetadata = r;
  function a(e, t, n) {
    return e.SendMsg(`MDSAdmin.RequestAppContentPurge#1`, i(na, t, n), ra, {
      ePrivilege: 5,
    });
  }
  e.RequestAppContentPurge = a;
  function o(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetAppContentPurgeStatus#1`, i(ia, t, n), aa, {
      ePrivilege: 1,
    });
  }
  e.GetAppContentPurgeStatus = o;
  function s(e, t) {
    return e.SendNotification(`MDSAdmin.CSPurgeDepot#1`, i(oa, t), {
      ePrivilege: 1,
    });
  }
  e.CSPurgeDepot = s;
  function c(e, t) {
    return e.SendNotification(`MDSAdmin.NewChunkAnnouncement#1`, i(sa, t), {
      ePrivilege: 1,
    });
  }
  e.NewChunkAnnouncement = c;
  function l(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushDepotCache#1`, i(ca, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushDepotCache = l;
  function u(e, t) {
    return e.SendNotification(`MDSAdmin.MDSFlushManifestVersion#1`, i(la, t), {
      ePrivilege: 1,
    });
  }
  e.MDSFlushManifestVersion = u;
  function d(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotDownloadBytes#1`, i(Io, t, n), Lo, {
      ePrivilege: 1,
    });
  }
  e.GetDepotDownloadBytes = d;
  function f(e, t, n) {
    return e.SendMsg(`MDSAdmin.BeginOriginMigrationJob#1`, i(Ro, t, n), zo, {
      ePrivilege: 1,
    });
  }
  e.BeginOriginMigrationJob = f;
  function p(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetDepotChunkLocation#1`, i(Bo, t, n), Vo, {
      ePrivilege: 1,
    });
  }
  e.GetDepotChunkLocation = p;
  function m(e, t, n) {
    return e.SendMsg(`MDSAdmin.SetAppBuildSortOrder#1`, i(Ho, t, n), Uo, {
      ePrivilege: 1,
    });
  }
  e.SetAppBuildSortOrder = m;
  function h(e, t, n) {
    return e.SendMsg(`MDSAdmin.GetManifestAppBranchInfo#1`, i(Wo, t, n), Go, {
      ePrivilege: 1,
    });
  }
  e.GetManifestAppBranchInfo = h;
  function g(e, t) {
    return e.SendNotification(`MDSAdmin.AppBuildUpdated#1`, i(Ko, t), {
      ePrivilege: 1,
    });
  }
  e.AppBuildUpdated = g;
  function _(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkReceived#1`, i(da, t, n), fa, {
      ePrivilege: 1,
    });
  }
  e.ChunkReceived = _;
  function v(e, t, n) {
    return e.SendMsg(`MDSAdmin.ChunkStored#1`, i(pa, t, n), ma, {
      ePrivilege: 1,
    });
  }
  e.ChunkStored = v;
  function y(e, t) {
    return e.SendNotification(`MDSAdmin.ChunkStorageFailure#1`, i(ha, t), {
      ePrivilege: 1,
    });
  }
  e.ChunkStorageFailure = y;
})((ns ||= {}));
var rs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetCDNConfigurations#1`,
      i(ga, t, n),
      ya,
      { ePrivilege: 1 },
    );
  }
  e.GetCDNConfigurations = t;
  function n(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNConfig#1`, i(ba, t, n), xa, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNConfig = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentServerConfig.UpdateCDNStats#1`, i(Sa, t, n), Ca, {
      ePrivilege: 1,
    });
  }
  e.UpdateCDNStats = r;
  function a(e, t) {
    return e.SendNotification(
      `ContentServerConfig.ContentServerStatsBroadcast#1`,
      i(wa, t),
      { ePrivilege: 1 },
    );
  }
  e.ContentServerStatsBroadcast = a;
  function o(e, t) {
    return e.SendNotification(
      `ContentServerConfig.CMLoadBroadcast#1`,
      i(Oa, t),
      { ePrivilege: 1 },
    );
  }
  e.CMLoadBroadcast = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfig#1`,
      i(za, t, n),
      Ba,
      { ePrivilege: 1 },
    );
  }
  e.GetSteamCSConfig = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCSConfig#1`,
      i(Ga, t, n),
      Ka,
      { ePrivilege: 4 },
    );
  }
  e.UpdateSteamCSConfig = c;
  function l(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCSConfigUpdateNotification#1`,
      i(qa, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCSConfigUpdateNotification = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCSConfigHistory#1`,
      i(Ha, t, n),
      Ua,
      { ePrivilege: 4 },
    );
  }
  e.GetSteamCSConfigHistory = u;
  function d(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateCSIPFilterRanges#1`,
      i(Va, t, n),
      Ja,
      { ePrivilege: 1 },
    );
  }
  e.UpdateCSIPFilterRanges = d;
  function f(e, t) {
    return e.SendNotification(
      `ContentServerConfig.AnonymousDepotsBroadcast#1`,
      i(Aa, t),
      { ePrivilege: 1 },
    );
  }
  e.AnonymousDepotsBroadcast = f;
  function p(e, t, n) {
    return e.SendMsg(`ContentServerConfig.GetSteamCSNames#1`, i(Ya, t, n), Xa, {
      ePrivilege: 1,
    });
  }
  e.GetSteamCSNames = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateSteamCacheNode#1`,
      i(Qa, t, n),
      $a,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.AllocateSteamCacheNode = m;
  function h(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfig#1`,
      i(io, t, n),
      ao,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfig = h;
  function g(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateSteamCacheConfig#1`,
      i(lo, t, n),
      uo,
      { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.UpdateSteamCacheConfig = g;
  function _(e, t) {
    return e.SendNotification(
      `ContentServerConfig.SteamCacheConfigUpdateNotification#1`,
      i(fo, t),
      { ePrivilege: 1 },
    );
  }
  e.SteamCacheConfigUpdateNotification = _;
  function v(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.RevSteamCacheAPIKey#1`,
      i(po, t, n),
      mo,
      { ePrivilege: 4 },
    );
  }
  e.RevSteamCacheAPIKey = v;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheConfigHistory#1`,
      i(oo, t, n),
      so,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheConfigHistory = y;
  function b(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNames#1`,
      i(to, t, n),
      no,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 4 },
    );
  }
  e.GetSteamCacheNames = b;
  function ee(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.AllocateOpenCacheNode#1`,
      i(ho, t, n),
      go,
      { ePrivilege: 1 },
    );
  }
  e.AllocateOpenCacheNode = ee;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfig#1`,
      i(xo, t, n),
      So,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheConfig = x;
  function S(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.UpdateOpenCacheConfig#1`,
      i(Eo, t, n),
      Do,
      { ePrivilege: 4 },
    );
  }
  e.UpdateOpenCacheConfig = S;
  function C(e, t) {
    return e.SendNotification(
      `ContentServerConfig.OpenCacheConfigUpdateNotification#1`,
      i(Oo, t),
      { ePrivilege: 1 },
    );
  }
  e.OpenCacheConfigUpdateNotification = C;
  function w(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheConfigHistory#1`,
      i(Co, t, n),
      wo,
      { ePrivilege: 4 },
    );
  }
  e.GetOpenCacheConfigHistory = w;
  function T(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetOpenCacheNames#1`,
      i(vo, t, n),
      yo,
      { ePrivilege: 1 },
    );
  }
  e.GetOpenCacheNames = T;
  function E(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCacheClientFilters#1`,
      i(ko, t, n),
      Ao,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCacheClientFilters = E;
  function D(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.SetSteamCachePerformanceStats#1`,
      i(jo, t, n),
      Mo,
      { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.SetSteamCachePerformanceStats = D;
  function te(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetSteamCacheNodeParams#1`,
      i(No, t, n),
      Po,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
    );
  }
  e.GetSteamCacheNodeParams = te;
  function O(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.CheckManifestRequestCode#1`,
      i(ja, t, n),
      Ma,
      { ePrivilege: 1 },
    );
  }
  e.CheckManifestRequestCode = O;
  function ne(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.GetManifestRequestCode#1`,
      i(Na, t, n),
      Pa,
      { ePrivilege: 1 },
    );
  }
  e.GetManifestRequestCode = ne;
  function k(e, t, n) {
    return e.SendMsg(
      `ContentServerConfig.IsDepotAllowedSteamChina#1`,
      i(Fa, t, n),
      Ia,
      { ePrivilege: 1 },
    );
  }
  e.IsDepotAllowedSteamChina = k;
})((rs ||= {}));
var is;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNForVideo#1`,
      i(Yo, t, n),
      Xo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetCDNForVideo = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.PickSingleContentServer#1`,
      i(Zo, t, n),
      Qo,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.PickSingleContentServer = n;
  function r(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetServersForSteamPipe#1`,
      i(Fi, t, n),
      Ii,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetServersForSteamPipe = r;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetDepotPatchInfo#1`,
      i(Li, t, n),
      Ri,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetDepotPatchInfo = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetClientUpdateHosts#1`,
      i(zi, t, n),
      Bi,
      { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
    );
  }
  e.GetClientUpdateHosts = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetManifestRequestCode#1`,
      i(Vi, t, n),
      Hi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetManifestRequestCode = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetCDNAuthToken#1`,
      i(Ui, t, n),
      Wi,
      { bConstMethod: !0, ePrivilege: 2 },
    );
  }
  e.GetCDNAuthToken = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.RequestPeerContentServer#1`,
      i(Gi, t, n),
      Ki,
      { ePrivilege: 1 },
    );
  }
  e.RequestPeerContentServer = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentServerDirectory.GetPeerContentInfo#1`,
      i(qi, t, n),
      Ji,
      { ePrivilege: 1 },
    );
  }
  e.GetPeerContentInfo = u;
})((is ||= {}));
var as;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetAllDetectedAppContent#1`,
      i(Yi, t, n),
      Zi,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  e.GetAllDetectedAppContent = t;
  function n(e, t, n) {
    return e.SendMsg(
      `DepotContentDetection.GetDetectedContentSingleApp#1`,
      i($o, t, n),
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
    o = (0, B.useMemo)(() => new Map(t), [t]),
    s = (0, B.useMemo)(() => new Map(n), [n]),
    [c, l] = (0, B.useState)(os(o, s, new Map(r))),
    [u, d] = (0, B.useState)(a),
    f = (e, t) => {
      let n = { noneneeded: +!!t };
      (e.forEach((e, t) => {
        n[t] = +!!e;
      }),
        window.UpdateCommonRedistsReact(n));
    },
    p = (e, t) => {
      let n = new Map(c);
      (n.set(e, t), l(n), f(n, u));
    },
    m = (e) => {
      (d(e), f(c, e));
    },
    h = o.size > 0,
    g = i == 1,
    _ = Array.from(c.values()).some((e) => e);
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsxs)(`div`, {
        className: Mi,
        children: [
          (0, V.jsx)(`input`, {
            id: `noredistsneeded`,
            type: `checkbox`,
            checked: u,
            disabled: _ && !u,
            onChange: (e) => m(e.currentTarget.checked),
          }),
          (0, V.jsx)(`label`, {
            htmlFor: `noredistsneeded`,
            children: M(`#StoreAdmin_Redist_NoneNeeded`),
          }),
        ],
      }),
      h &&
        (0, V.jsx)(ls, {
          name: M(`#StoreAdmin_Platform_AllPlatforms`),
          categories: o,
          checkedState: c,
          disabled: u,
          setChecked: p,
        }),
      g && (0, V.jsx)(cs, {}),
      (0, V.jsx)(ls, {
        name: M(`#StoreAdmin_Platform_Windows`),
        categories: s,
        checkedState: c,
        disabled: u,
        setChecked: p,
      }),
    ],
  });
}
function cs() {
  return (0, V.jsx)(`div`, {
    className: ji,
    children: M(`#StoreAdmin_Redist_Unreal_Notice`),
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
    o = (0, B.useMemo)(() => {
      let e = [];
      return (
        n.forEach((t, n) =>
          e.push(
            (0, V.jsx)(
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
  return (0, V.jsxs)(`div`, {
    className: `section`,
    children: [
      (0, V.jsx)(`h2`, { children: t }),
      (0, V.jsx)(`div`, { className: `grayRule` }),
      ...o,
    ],
  });
}
function us(e) {
  let { name: t, category: n, checkedState: r, disabled: i, setChecked: a } = e,
    o = Object.entries(n.components).map(([e, t]) =>
      (0, V.jsx)(
        `li`,
        {
          children: (0, V.jsx)(ds, {
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
  return (0, V.jsxs)(`div`, {
    children: [
      (0, V.jsx)(`div`, { children: t }),
      (0, V.jsx)(`ul`, { children: [...o] }),
    ],
  });
}
function ds(e) {
  let { name: t, depotID: n, checked: r, disabled: i, setChecked: a } = e,
    o = i || ((n == 228987 || n == 228986) && !r);
  return (0, V.jsxs)(V.Fragment, {
    children: [
      (0, V.jsx)(`input`, {
        id: n.toString(),
        type: `checkbox`,
        checked: r,
        disabled: o,
        onChange: (e) => a(n, e.currentTarget.checked),
      }),
      (0, V.jsx)(`label`, { htmlFor: n.toString(), children: t }),
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
      (t.item_movie_webm && n.push(t.item_movie_webm),
        t.item_movie_mp4 && n.push(t.item_movie_mp4));
  }
  return n;
}
function ps(e, t) {
  return [`InProgressItemDefinition_${e}_${t}`];
}
function ms(e, t) {
  let n = ge({
    queryKey: ps(e, t),
    queryFn: async () => {
      let n = `${m.PARTNER_BASE_URL}communityitems/ajaxgetcommunityitemdef/${e}/${t}`,
        r = new FormData();
      r.append(`sessionid`, o());
      let i = await H.default.post(n, r, { withCredentials: !0 });
      return i?.status == 200 && i.data?.success == 1
        ? i.data.def
        : (console.error(
            `useGetInProgressCommunityItemDefinition: `,
            i?.data.error,
          ),
          null);
    },
    staleTime: 1 / 0,
    initialData: b(`item_def`, `application_config`),
  });
  return n.isLoading ? null : n.data;
}
function hs(e, t) {
  _e.invalidateQueries({ queryKey: ps(e, t) });
}
var X = class extends at {
  m_currentImageOptionKey = void 0;
  m_fnGetImageOptions;
  constructor(e, t, n, r) {
    let i = ne(n);
    (super(e, e.name, t, n.src, i), Te(this), (this.m_fnGetImageOptions = r));
  }
  IsValidAssetType(e, t) {
    let n = t && t != this.fileType,
      r = this.IsFileTypeSupported(this.fileType),
      i = this.GetCurrentImageOption(),
      a = ``;
    return (
      r
        ? n && (a = M(`#ImageUpload_InvalidFormat`, re(t)))
        : (a = M(`#ImageUpload_InvalidFormatSelected`)),
      i || (a = M(`#CommunityItems_NoValidAsset_Error`)),
      i?.bDuplicateAssetType &&
        (a = M(`#CommunityItems_DuplicateAssetType_Error`, i.fnGetLabelText())),
      { error: a, needsCrop: !1 }
    );
  }
  BIsOriginalMinimumDimensions(e) {
    return !0;
  }
  BIsVideo() {
    return ot.includes(this.fileType);
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
(h([I], X.prototype, `m_currentImageOptionKey`, void 0),
  h([we], X.prototype, `ImageOptions`, null),
  h([Ce], X.prototype, `SetCurrentImageOption`, null));
var Z = class extends it {
  m_filesToUpload = I.array();
  m_strUploadPath = null;
  m_bSynchronousUpload = !1;
  m_rgAssetRequirements = [];
  constructor(e, t, n) {
    (super(),
      Te(this),
      (this.m_strUploadPath = e),
      (this.m_bSynchronousUpload = t),
      (this.m_rgAssetRequirements = n));
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
    this.m_filesToUpload = I.array();
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
    if (k(e.type) || A(e.type)) {
      let n = await ie(e, A(e.type));
      if (n) {
        let r = new X(e, t, n, () => this.GetImageOptions());
        return ((this.m_filesToUpload = [...this.m_filesToUpload, r]), !0);
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
      (e) => e.status == `pending` || rt(e.status),
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
    (a.append(`assetfile`, e.file, t), a.append(`sessionid`, o()));
    let s = e.GetCurrentImageOption();
    if ((a.append(`strAssetType`, s.asset_type), !O(t)))
      return {
        bSuccess: !1,
        elErrorMessage: `Invalid file extension, cannot determine mimetype`,
      };
    try {
      i = await H.default.post(this.m_strUploadPath, a, {
        withCredentials: !0,
        headers: { "Content-Type": `multipart/form-data` },
        cancelToken: r,
      });
    } catch (e) {
      console.error(Ae(e)?.strErrorMsg);
    }
    return !i.data || i.data.error
      ? {
          bSuccess: !1,
          elErrorMessage:
            i.data.error ?? M(`#CommunityItems_GenericUpload_Error`),
        }
      : { bSuccess: !0, result: i?.data };
  }
};
(h([I], Z.prototype, `m_filesToUpload`, void 0),
  h([E], Z.prototype, `GetUploadImages`, null),
  h([E], Z.prototype, `ClearImages`, null),
  h([E], Z.prototype, `DeleteUploadImage`, null),
  h([E], Z.prototype, `AddImageForLanguage`, null));
function gs(e) {
  let { appID: t, unItemType: n, rgAssetDefinitions: r } = e,
    i = B.useMemo(
      () =>
        new Z(
          f.PARTNER_BASE_URL + `communityitems/ajaxuploadasset/${t}/${n}`,
          !0,
          r,
        ),
      [t, n, r],
    );
  return (0, V.jsx)(`div`, {
    children: (0, V.jsx)(De, {
      elOverrideDragAndDropText: M(`#CommunityItems_Upload_Instructions`),
      imageUploader: i,
      rgRealmList: [c.k_ESteamRealmGlobal],
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
    constructor(e) {
      Te(this);
      let { itemDef: t, communityItemDef: r } = e;
      (n(
        e.itemDef || e.communityItemDef,
        `CCommunityItem must be initialized by an itemDef or a communityItemDef`,
      ),
        t
          ? (this.m_ItemDefinition = {
              item_type: t.item_type,
              item_class: t.item_class,
              item_description: t.item_description,
              editor_accountid: t.editor_accountid,
              deleted: t.deleted,
              active: t.active,
              appid: t.appid,
              item_image_composed: t.item_image_composed,
              item_image_large: t.item_image_large,
              item_image_small: t.item_image_small,
              item_key_values: t.item_key_values,
              item_movie_mp4: t.item_movie_mp4,
              item_movie_mp4_small: t.item_movie_mp4_small,
              item_internal_name: t.item_name,
              item_series: t.item_series,
              item_movie_webm: t.item_movie_webm,
              item_movie_webm_small: t.item_movie_webm_small,
              item_image_composed_foil: t.item_image_composed_foil,
              item_last_changed: t.item_last_changed,
              broadcast_channel_id: t.broadcast_channel_id,
            })
          : (n(
              !!r,
              `Managed to get into LoadItemDefinition with neither itemDef nor communityItemDef`,
            ),
            (this.m_ItemDefinition = r)),
        this.m_ItemDefinition.item_key_values &&
          (this.m_ItemKV = JSON.parse(this.m_ItemDefinition.item_key_values)));
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
(h([I], Es.prototype, `m_ItemDefinition`, void 0),
  h([I], Es.prototype, `m_ItemKV`, void 0));
function Ds(e, t) {
  return `${f.MEDIA_CDN_COMMUNITY_URL}images/items/${e}/${t}`;
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
      label: M(`#CommunityItems_StartupMovie_Label_Video`),
      width: 1920,
      height: 1200,
      accepted_filetypes: ks(),
      is_video: !0,
      guidelines: [
        {
          strHeader: M(`#CommunityItems_StartupMovie_GuidelineVideo_Header`),
          strIntro: M(`#CommunityItems_StartupMovie_GuidelineVideo_Intro`),
          rgBulletPoints: [
            M(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_1`),
            M(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_2`),
            M(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_3`),
            M(`#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_4`),
          ],
        },
        {
          strHeader: M(`#CommunityItems_StartupMovie_GuidelineAudio_Header`),
          strIntro: M(`#CommunityItems_StartupMovie_GuidelineAudio_Intro`),
          rgBulletPoints: [
            M(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_1`),
            M(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_2`),
            M(`#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_3`),
          ],
        },
      ],
    },
    {
      asset_type: `image_large`,
      label: M(`#CommunityItems_StartupMovie_Label_Poster`),
      width: 1920,
      height: 1200,
      accepted_filetypes: Os(),
      guidelines: [
        {
          strHeader: M(`#CommunityItems_StartupMovie_GuidelineImage_Header`),
          strIntro: M(`#CommunityItems_StartupMovie_GuidelineImage_Intro`),
          rgBulletPoints: [
            M(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_2`),
            M(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_3`),
            M(`#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_1`),
          ],
        },
      ],
    },
  ],
  Q = B.createContext(null),
  Ms = ({ communityItem: e, assetDefs: t, children: n }) =>
    (0, V.jsx)(Q.Provider, {
      value: { communityItem: e, assetDefs: t },
      children: n,
    });
function Ns(e) {
  let { appID: t, unItemType: n } = e,
    r = ms(t, n);
  if (!r) return null;
  let i = new Es({ itemDef: r }),
    a = As(i.ItemClass, !1, !1);
  if (!a) return null;
  let o = (!i.BIsActive || S.is_support) && !i.BIsDeleted;
  return (0, V.jsx)(Ms, {
    communityItem: i,
    assetDefs: a,
    children: (0, V.jsxs)(`div`, {
      className: _s,
      children: [o && (0, V.jsx)(Ps, {}), (0, V.jsx)(Ls, {})],
    }),
  });
}
function Ps() {
  let { communityItem: e, assetDefs: t } = B.useContext(Q),
    n = t
      .flatMap((e) => e.guidelines)
      .map((e, t) => (0, V.jsx)(Fs, { guideline: e }, `guideline_${t}`));
  return (0, V.jsxs)(`div`, {
    className: vs,
    children: [
      (0, V.jsx)(`div`, { className: Cs, children: n }),
      (0, V.jsx)(gs, {
        appID: e.AppID,
        unItemType: e.ItemID,
        rgAssetDefinitions: t,
      }),
    ],
  });
}
function Fs(e) {
  let { guideline: t } = e;
  return (0, V.jsxs)(`div`, {
    className: Ts,
    children: [
      (0, V.jsx)(`div`, { className: ws, children: t.strHeader }),
      (0, V.jsx)(`div`, { className: void 0, children: t.strIntro }),
      t.rgBulletPoints?.length > 0 &&
        (0, V.jsx)(Is, { rgBulletPoints: t.rgBulletPoints }),
    ],
  });
}
function Is(e) {
  let { rgBulletPoints: t } = e,
    n = t.map((e, t) => (0, V.jsx)(`li`, { children: e }, `bulletpoint_${t}`));
  return (0, V.jsx)(`ul`, { children: n });
}
function Ls() {
  let { communityItem: e, assetDefs: t } = B.useContext(Q),
    n = t.map((e) => (0, V.jsx)(Rs, { assetDef: e }, e.asset_type));
  return (0, V.jsx)(`div`, { className: ys, children: n });
}
function Rs(e) {
  let { assetDef: t } = e,
    { communityItem: n, assetDefs: r } = B.useContext(Q);
  return (0, V.jsxs)(`div`, {
    className: bs,
    children: [
      (0, V.jsxs)(`div`, { className: void 0, children: [`*`, t.label] }),
      (0, V.jsx)(`div`, {
        className: void 0,
        children: t.is_video
          ? (0, V.jsx)(Vs, {
              rgSources: fs(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            })
          : (0, V.jsx)(Bs, {
              rgSources: fs(t.asset_type, n.CommunityItemDef),
              unAppID: n.AppID,
            }),
      }),
    ],
  });
}
function zs() {
  return (0, V.jsx)(`div`, {
    className: Ss,
    children: (0, V.jsx)(`div`, {
      children: M(`#CommunityItems_PlaceholderAsset_Missing`),
    }),
  });
}
function Bs(e) {
  let { rgSources: t, unAppID: n } = e;
  return t.length
    ? (0, V.jsx)(`img`, { className: xs, src: Ds(n, t[0]) })
    : (0, V.jsx)(zs, {});
}
function Vs(e) {
  let { rgSources: t, unAppID: n } = e,
    r = B.useRef(void 0);
  if (
    (B.useEffect(() => {
      r.current && r.current.load();
    }, [t]),
    !t.length)
  )
    return (0, V.jsx)(zs, {});
  let i = t.map((e, t) =>
    (0, V.jsx)(`source`, { src: Ds(n, e), type: O(e) }, `video_${t}`),
  );
  return (0, V.jsx)(`video`, {
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
    a = Re({ appid: t }),
    [o, s, c] = B.useMemo(() => {
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
    ? (0, V.jsx)(`div`, { children: M(`#AppLanding_RegionRestrictions_None`) })
    : (0, V.jsxs)(V.Fragment, {
        children: [
          s.length > 0 &&
            (0, V.jsx)(`div`, {
              children: M(`#AppLanding_RegionRestrictions_Allowed`, s),
            }),
          o.length > 0 &&
            (0, V.jsx)(`div`, {
              children: M(`#AppLanding_RegionRestrictions_Blocked`, o),
            }),
          c &&
            (0, V.jsx)(`div`, {
              children: P(
                `#AppLanding_RegionRestrictions_ContentSurvey`,
                (0, V.jsx)(`a`, { href: i }),
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
  return (0, V.jsxs)(me, {
    children: [
      (0, V.jsx)(F, {
        path: $.CommunityItem(`:appid`, `:itemtype`),
        render: (e) =>
          (0, V.jsx)(z, {
            config: {
              "appadmin-profilecolors": (e) => (0, V.jsx)(ct, { ...e }),
              "appadmin-communityitemassets": () =>
                (0, V.jsx)(Ns, {
                  appID: Number.parseInt(e.match.params.appid),
                  unItemType: Number.parseInt(e.match.params.itemtype),
                }),
            },
          }),
      }),
      (0, V.jsx)(F, {
        path: $.AppLanding(`:appid`),
        render: (e) =>
          (0, V.jsx)(z, {
            config: {
              "storeadmin-releasedateinfo": (e) => (0, V.jsx)(lt, { ...e }),
              "storeadmin-applanding-statsrollup": (e) =>
                (0, V.jsx)(Ht, { ...e }),
              "storeadmin-applanding-demowishlistemails": (e) =>
                (0, V.jsx)(Ut, { ...e }),
              "storeadmin-editions-editor": (e) => (0, V.jsx)(st, { ...e }),
              "appadmin-restrictedcountries": (e) => (0, V.jsx)(Hs, { ...e }),
            },
          }),
      }),
      (0, V.jsx)(F, {
        path: $.AppInstaller(`:appid`),
        render: (e) =>
          (0, V.jsx)(z, {
            config: {
              "storeadmin-steamworksredist-edit": (e) =>
                (0, V.jsx)(ss, { ...e }),
            },
          }),
      }),
      (0, V.jsx)(F, {
        path: $.AppEconomy(`:appid`),
        render: (e) =>
          (0, V.jsx)(z, {
            config: {
              "storeadmin-steamworkseconomy-propertyedit": (e) =>
                (0, V.jsx)(Di, { ...e }),
            },
          }),
      }),
    ],
  });
}
export { Us as default };
